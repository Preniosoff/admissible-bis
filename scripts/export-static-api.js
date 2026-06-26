import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SEED_DB = resolve(ROOT, 'server/db/prepamp.seed.sqlite');
const WORK_DB = resolve(ROOT, 'server/db/prepamp.sqlite');
const TMP_DIR = resolve(ROOT, 'tmp/static-api');
const TMP_DB = resolve(TMP_DIR, 'export.sqlite');
const OUT_DIR = resolve(ROOT, 'public/static-api');

mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });
rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const sourceDb = existsSync(SEED_DB) ? SEED_DB : WORK_DB;
if (!existsSync(sourceDb)) {
  throw new Error('Aucune base SQLite disponible pour exporter les contenus publics.');
}
copyFileSync(sourceDb, TMP_DB);
process.env.DB_PATH = TMP_DB;

const { getDb, getAll, getOne, closeDb } = await import('../server/db/connection.js');
const { seed3emeIfNeeded } = await import('../server/db/seed-3eme-init.js');
const { seedSiInfoIfNeeded } = await import('../server/db/seed-si-info-init.js');
const { seedCollegeIfNeeded } = await import('../server/db/seed-college-init.js');
const { seedLyceeIfNeeded } = await import('../server/db/seed-lycee-init.js');
const { loadContentFiles } = await import('../server/db/seed-content-loader.js');
const { seedMethodeLinksIfNeeded } = await import('../server/db/seed-methode-links.js');
const { seedCuratedMethodes } = await import('../server/db/seed-methodes-curated.js');
const { seedMethodesQuality } = await import('../server/db/seed-methodes-quality.js');
const { seedCourseQuality } = await import('../server/db/seed-course-quality.js');
const { getMethodeProgrammeMeta } = await import('../server/db/methodes-programme.js');

const db = await getDb();

for (const sql of [
  `CREATE TABLE IF NOT EXISTS carte_methodes (
    carte_id INTEGER NOT NULL REFERENCES cartes(id),
    methode_id INTEGER NOT NULL REFERENCES methodes(id),
    ordre INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (carte_id, methode_id)
  )`,
  `CREATE TABLE IF NOT EXISTS elo_scores (
    user_id INTEGER NOT NULL,
    matiere_id TEXT NOT NULL,
    chapitre_id TEXT NOT NULL,
    rating INTEGER NOT NULL DEFAULT 1000,
    attempts INTEGER NOT NULL DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, matiere_id, chapitre_id)
  )`,
  `CREATE TABLE IF NOT EXISTS exercise_attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    carte_id INTEGER NOT NULL,
    matiere_id TEXT NOT NULL,
    chapitre_id TEXT NOT NULL,
    difficulty INTEGER NOT NULL,
    success INTEGER NOT NULL,
    delta INTEGER NOT NULL,
    rating_after INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
]) db.run(sql);

seed3emeIfNeeded(db);
seedSiInfoIfNeeded(db);
seedCollegeIfNeeded(db);
seedLyceeIfNeeded(db);
await loadContentFiles(db);
seedMethodeLinksIfNeeded(db);
seedCuratedMethodes(db);
seedMethodesQuality(db);
seedCourseQuality(db);

function writeJson(relativePath, data) {
  const file = resolve(OUT_DIR, relativePath);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(data));
}

function toArray(val) {
  if (!val) return [];
  if (String(val).startsWith('[')) {
    try { return JSON.parse(val); } catch {}
  }
  return String(val).split(',').map(s => s.trim()).filter(Boolean);
}

function parseChapitres(value) {
  if (!value) return [];
  const seen = new Set();
  return String(value).split('¶').map(item => {
    const [id, titre, ordre] = item.split('§');
    return { id, titre, ordre: Number(ordre || 999) };
  }).filter(chapitre => {
    if (!chapitre.id || seen.has(chapitre.id)) return false;
    seen.add(chapitre.id);
    return true;
  }).sort((a, b) => a.ordre - b.ordre);
}

const niveaux = getAll(db, 'SELECT * FROM niveaux ORDER BY ordre');
const filieres = getAll(db, 'SELECT * FROM filieres ORDER BY ordre');
const niveauxPayload = niveaux.map(n => ({
  ...n,
  filieres: filieres.filter(f => f.niveau_id === n.id),
}));
writeJson('niveaux.json', niveauxPayload);

const coverageCours = getAll(db, `
  SELECT fc.filiere_id AS f, ch.matiere_id AS m,
    SUM(CASE WHEN c.type IN ('ex','exo','exercice') THEN 0 ELSE 1 END) AS cours,
    SUM(CASE WHEN c.type IN ('ex','exo','exercice') THEN 1 ELSE 0 END) AS exos
  FROM cartes c
  JOIN sections s ON s.id = c.section_id
  JOIN chapitres ch ON ch.id = s.chapitre_id
  JOIN filiere_chapitres fc ON fc.chapitre_id = ch.id
  JOIN filiere_matieres fm2 ON fm2.filiere_id = fc.filiere_id AND fm2.matiere_id = ch.matiere_id
  GROUP BY fc.filiere_id, ch.matiere_id`);
const coverageMethodes = getAll(db, `
  SELECT fm.filiere_id AS f, mt.matiere_id AS m, COUNT(*) AS n
  FROM methodes mt
  JOIN filiere_methodes fm ON fm.methode_id = mt.id
  JOIN filiere_matieres fmt ON fmt.filiere_id = fm.filiere_id AND fmt.matiere_id = mt.matiere_id
  GROUP BY fm.filiere_id, mt.matiere_id`);
writeJson('coverage.json', {
  cours: coverageCours.filter(r => r.cours > 0).map(r => `${r.f}|${r.m}`),
  methodes: coverageMethodes.filter(r => r.n > 0).map(r => `${r.f}|${r.m}`),
  exercices: coverageCours.filter(r => r.exos > 0).map(r => `${r.f}|${r.m}`),
});

for (const filiere of filieres) {
  const matieres = getAll(db, `
    SELECT m.* FROM matieres m
    JOIN filiere_matieres fm ON fm.matiere_id = m.id
    WHERE fm.filiere_id = ?
    ORDER BY fm.ordre
  `, [filiere.id]);
  writeJson(`filieres/${filiere.id}.json`, { ...filiere, matieres });

  for (const matiere of matieres) {
    const chapitres = getAll(db, `
      SELECT c.id, c.titre, fc.ordre
      FROM chapitres c
      JOIN filiere_chapitres fc ON fc.chapitre_id = c.id
      WHERE fc.filiere_id = ? AND c.matiere_id = ?
      ORDER BY fc.ordre
    `, [filiere.id, matiere.id]);
    writeJson(`chapitres-index/${filiere.id}__${matiere.id}.json`, chapitres);
  }
}

const chapitres = getAll(db, 'SELECT * FROM chapitres ORDER BY id');
for (const chapitre of chapitres) {
  const sections = getAll(db, 'SELECT * FROM sections WHERE chapitre_id = ? ORDER BY ordre', [chapitre.id]);
  const cartes = getAll(db, `
    SELECT c.* FROM cartes c
    JOIN sections s ON s.id = c.section_id
    WHERE s.chapitre_id = ?
    ORDER BY s.ordre, c.ordre
  `, [chapitre.id]);
  const liens = getAll(db, `
    SELECT cm.carte_id, m.id, m.titre, m.type, cm.ordre
    FROM carte_methodes cm
    JOIN methodes m ON m.id = cm.methode_id
    JOIN cartes c ON c.id = cm.carte_id
    JOIN sections s ON s.id = c.section_id
    WHERE s.chapitre_id = ?
    ORDER BY cm.carte_id, cm.ordre
  `, [chapitre.id]);

  writeJson(`chapitres/${chapitre.id}.json`, {
    ...chapitre,
    sections: sections.map(section => ({
      ...section,
      cartes: cartes.filter(c => c.section_id === section.id).map(c => ({
        ...c,
        methodes: liens
          .filter(l => l.carte_id === c.id)
          .map(l => ({ id: l.id, titre: l.titre, type: l.type })),
      })),
    })),
  });
}

const methodes = getAll(db, `
  SELECT
    m.id,
    m.matiere_id,
    m.categorie,
    m.type,
    m.titre,
    m.contenu,
    m.ordre,
    GROUP_CONCAT(fm.filiere_id, ',') AS filieres,
    GROUP_CONCAT(ch.id || '§' || ch.titre || '§' || COALESCE(fch.ordre, 999), '¶') AS chapitres
  FROM methodes m
  LEFT JOIN filiere_methodes fm ON fm.methode_id = m.id
  LEFT JOIN carte_methodes cm ON cm.methode_id = m.id
  LEFT JOIN cartes ca ON ca.id = cm.carte_id
  LEFT JOIN sections s ON s.id = ca.section_id
  LEFT JOIN chapitres ch ON ch.id = s.chapitre_id
  LEFT JOIN filiere_chapitres fch ON fch.chapitre_id = ch.id
  GROUP BY m.id
  ORDER BY m.ordre
`).map(row => ({
  ...row,
  filieres: [...new Set(String(row.filieres || '').split(',').filter(Boolean))],
  chapitres: parseChapitres(row.chapitres),
  ...getMethodeProgrammeMeta(row),
}));
writeJson('methodes.json', methodes);
for (const methode of methodes) {
  writeJson(`methodes/${methode.id}.json`, { ...methode, locked: false });
}

const ecoles = getAll(db, 'SELECT * FROM ecoles ORDER BY rang ASC').map(e => ({
  ...e,
  tags: toArray(e.tags),
  doubles_diplomes: toArray(e.doubles_diplomes),
  campus: toArray(e.campus),
  specialites: toArray(e.specialites),
}));
writeJson('ecoles.json', ecoles);

const searchRows = getAll(db, `
  SELECT c.id, c.type, c.label, c.titre, c.contenu, c.section_id,
         s.titre AS section_titre, ch.id AS chapitre_id, ch.titre AS chapitre_titre,
         ch.matiere_id, MIN(fc_any.filiere_id) AS filiere_id
  FROM cartes c
  JOIN sections s ON s.id = c.section_id
  JOIN chapitres ch ON ch.id = s.chapitre_id
  JOIN filiere_chapitres fc_any ON fc_any.chapitre_id = ch.id
  GROUP BY c.id
`);
writeJson('search.json', searchRows);

closeDb();
console.log(`[static-api] export terminé : ${niveaux.length} niveaux, ${filieres.length} filières, ${chapitres.length} chapitres, ${methodes.length} méthodes, ${ecoles.length} écoles.`);
