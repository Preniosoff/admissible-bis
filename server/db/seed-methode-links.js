// Rattachement des méthodes aux cartes (théorèmes/propriétés) — idempotent.
// Les liens sont définis par (chapitreId, carteTitre) dans methode-links.js,
// clé STABLE même si les IDs de cartes changent (rechargement de contenu).
// Reconstruit à chaque démarrage à partir de cette source de vérité.

import { LINKS } from './methode-links.js';

function resolveCarteId(db, chapitreId, carteTitre) {
  const stmt = db.prepare(`
    SELECT c.id AS id FROM cartes c
    JOIN sections s ON c.section_id = s.id
    WHERE s.chapitre_id = ? AND c.titre = ?
    LIMIT 1
  `);
  stmt.bind([chapitreId, carteTitre]);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return row ? row.id : null;
}

export function seedMethodeLinksIfNeeded(db) {
  let linked = 0, missing = 0;
  const seen = [];

  for (const l of LINKS) {
    const carteId = resolveCarteId(db, l.chapitreId, l.carteTitre);
    if (!carteId) { missing++; continue; }
    // rebuild propre : on retire l'ancien rattachement de cette méthode puis on (re)crée
    db.run('DELETE FROM carte_methodes WHERE methode_id = ?', [l.methodeId]);
    db.run('INSERT OR IGNORE INTO carte_methodes (carte_id, methode_id, ordre) VALUES (?, ?, 1)',
      [carteId, l.methodeId]);
    seen.push(l.methodeId);
    linked++;
  }

  console.log(`[methode-links] ${linked} méthodes rattachées` + (missing ? `, ${missing} non résolues (titre introuvable)` : ''));
}
