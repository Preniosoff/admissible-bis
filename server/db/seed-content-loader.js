// ════════════════════════════════════════════════════════════════════════════
// Loader de contenu générique et idempotent
// ────────────────────────────────────────────────────────────────────────────
// Lit tous les fichiers server/db/content/*.js exportant `export const DATA = [...]`
// et ingère leur contenu dans la base.
//
// Format attendu de chaque chapitre :
//   {
//     id: 'ma-6e-arith',
//     matiere: 'ma',
//     titre: 'Arithmétique',
//     ordre: 1,
//     filiere: '6eme'            // OU filieres: ['mp','mpsi',...] pour la prépa
//     enrich: true|false,        // true = remplace le contenu d'un chapitre existant
//     sections: [ { titre, cartes: [ { type, label, titre, contenu } ] } ]
//   }
//
// Idempotence : un hash de chaque fichier est mémorisé dans `_content_loaded`.
// Un fichier inchangé est ignoré au démarrage suivant (IDs stables, progression
// préservée). Un fichier modifié est rechargé (ses chapitres sont réécrits).
// ════════════════════════════════════════════════════════════════════════════

import { readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createHash } from 'crypto';

const __dirname   = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, 'content');

const VALID_MATIERES = new Set(['ang', 'ch', 'fr', 'hg', 'info', 'ma', 'ph', 'phch', 'si', 'svt']);

function ensureMetaTable(db) {
  db.run(`CREATE TABLE IF NOT EXISTS _content_loaded (
    file TEXT PRIMARY KEY,
    hash TEXT NOT NULL
  )`);
}

function storedHash(db, file) {
  const stmt = db.prepare('SELECT hash FROM _content_loaded WHERE file = ?');
  stmt.bind([file]);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return row ? row.hash : null;
}

function lastId(db) {
  const s = db.prepare('SELECT last_insert_rowid() AS id');
  const r = s.step() ? s.getAsObject() : null;
  s.free();
  return r ? r.id : null;
}

function chapitreExists(db, id) {
  const s = db.prepare('SELECT 1 AS x FROM chapitres WHERE id = ?');
  s.bind([id]);
  const ok = s.step();
  s.free();
  return !!ok;
}

function getOneRow(db, sql, params = []) {
  const s = db.prepare(sql);
  s.bind(params);
  const row = s.step() ? s.getAsObject() : null;
  s.free();
  return row;
}

// Supprime sections + cartes d'un chapitre (et la progression orpheline)
function wipeChapterContent(db, chapId) {
  // 1. tables dépendantes référençant les cartes de ce chapitre
  db.run(`DELETE FROM carte_methodes WHERE carte_id IN (
    SELECT c.id FROM cartes c JOIN sections s ON c.section_id = s.id WHERE s.chapitre_id = ?
  )`, [chapId]);
  db.run(`DELETE FROM exercise_attempts WHERE carte_id IN (
    SELECT c.id FROM cartes c JOIN sections s ON c.section_id = s.id WHERE s.chapitre_id = ?
  )`, [chapId]);
  db.run(`DELETE FROM progression WHERE carte_id IN (
    SELECT c.id FROM cartes c JOIN sections s ON c.section_id = s.id WHERE s.chapitre_id = ?
  )`, [chapId]);
  // 2. cartes puis sections
  db.run(`DELETE FROM cartes WHERE section_id IN (
    SELECT id FROM sections WHERE chapitre_id = ?
  )`, [chapId]);
  db.run('DELETE FROM sections WHERE chapitre_id = ?', [chapId]);
}

function insertChapter(db, chap) {
  // Mode APPEND : ajoute des sections à un chapitre existant sans toucher au reste
  // (utilisé pour les exercices charnières). Idempotent par titre de section.
  if (chap.append) {
    if (!chapitreExists(db, chap.id)) return { sec: 0, cartes: 0 };
    let secCount = 0, carteCount = 0;
    for (const sec of (chap.sections || [])) {
      const dup = getOneRow(db,
        'SELECT id FROM sections WHERE chapitre_id = ? AND titre = ?', [chap.id, sec.titre]);
      if (dup) {
        // réécriture de cette section uniquement (mise à jour de l'exercice)
        db.run('DELETE FROM cartes WHERE section_id = ?', [dup.id]);
        db.run('DELETE FROM sections WHERE id = ?', [dup.id]);
      }
      const maxOrd = getOneRow(db,
        'SELECT COALESCE(MAX(ordre), 0) AS m FROM sections WHERE chapitre_id = ?', [chap.id])?.m ?? 0;
      db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)',
        [chap.id, sec.titre, maxOrd + 1]);
      const secId = lastId(db);
      secCount++;
      (sec.cartes || []).forEach((c, ci) => {
        db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
          [secId, c.type, c.label ?? null, c.titre ?? null, c.contenu, ci + 1]);
        carteCount++;
      });
    }
    return { sec: secCount, cartes: carteCount };
  }

  const matiere = chap.matiere;
  if (!VALID_MATIERES.has(matiere)) {
    console.error(`[content-loader] matière invalide « ${matiere} » pour ${chap.id}, ignoré.`);
    return { sec: 0, cartes: 0 };
  }

  const filieres = Array.isArray(chap.filieres)
    ? chap.filieres
    : (chap.filiere ? [chap.filiere] : []);

  // 1. chapitre (créer si absent, sinon rafraîchir le titre)
  if (!chapitreExists(db, chap.id)) {
    db.run('INSERT INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)',
      [chap.id, matiere, chap.titre]);
  } else if (chap.titre) {
    db.run('UPDATE chapitres SET titre = ?, matiere_id = ? WHERE id = ?',
      [chap.titre, matiere, chap.id]);
  }

  // 2. liens filière → chapitre
  for (const fil of filieres) {
    db.run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)',
      [fil, chap.id, chap.ordre ?? 99]);
  }

  // 3. réécriture intégrale du contenu
  wipeChapterContent(db, chap.id);

  let secCount = 0, carteCount = 0;
  const sections = chap.sections || [];
  for (let si = 0; si < sections.length; si++) {
    const sec = sections[si];
    db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)',
      [chap.id, sec.titre, si + 1]);
    const secId = lastId(db);
    secCount++;

    const cartes = sec.cartes || [];
    for (let ci = 0; ci < cartes.length; ci++) {
      const c = cartes[ci];
      db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
        [secId, c.type, c.label ?? null, c.titre ?? null, c.contenu, ci + 1]);
      carteCount++;
    }
  }
  return { sec: secCount, cartes: carteCount };
}

export async function loadContentFiles(db) {
  ensureMetaTable(db);

  let files;
  try {
    files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.js')).sort();
  } catch {
    console.log('[content-loader] dossier content/ absent, rien à charger.');
    return;
  }

  let loadedFiles = 0, skipped = 0, grandChap = 0, grandSec = 0, grandCartes = 0;

  for (const file of files) {
    const fullPath = join(CONTENT_DIR, file);
    const raw      = readFileSync(fullPath, 'utf8');
    const hash     = createHash('sha256').update(raw).digest('hex');

    if (storedHash(db, file) === hash) {
      skipped++;
      continue;
    }

    let mod;
    try {
      // cache-bust via querystring sur le hash pour forcer la relecture
      mod = await import(pathToFileURL(fullPath).href + `?v=${hash.slice(0, 12)}`);
    } catch (e) {
      console.error(`[content-loader] ERREUR de parsing ${file} :`, e.message);
      continue;
    }

    const DATA = mod.DATA;
    if (!Array.isArray(DATA)) {
      console.error(`[content-loader] ${file} n'exporte pas DATA (array), ignoré.`);
      continue;
    }

    let fChap = 0, fSec = 0, fCartes = 0;
    for (const chap of DATA) {
      if (!chap || !chap.id) continue;
      try {
        const { sec, cartes } = insertChapter(db, chap);
        fChap++; fSec += sec; fCartes += cartes;
      } catch (e) {
        console.error(`[content-loader] ${file} → chapitre ${chap.id} :`, e.message);
      }
    }

    db.run('INSERT OR REPLACE INTO _content_loaded (file, hash) VALUES (?, ?)', [file, hash]);
    console.log(`[content-loader] ${file} → ${fChap} chapitres, ${fSec} sections, ${fCartes} cartes.`);
    loadedFiles++; grandChap += fChap; grandSec += fSec; grandCartes += fCartes;
  }

  if (loadedFiles > 0) {
    console.log(`[content-loader] TOTAL chargé : ${grandChap} chapitres, ${grandSec} sections, ${grandCartes} cartes (${loadedFiles} fichiers, ${skipped} inchangés).`);
  } else {
    console.log(`[content-loader] Tout est à jour (${skipped} fichiers inchangés).`);
  }
}
