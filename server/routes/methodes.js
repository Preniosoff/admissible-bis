import { Router } from 'express';
import { getAll, getOne } from '../db/connection.js';
import { getMethodeProgrammeMeta } from '../db/methodes-programme.js';

const router = Router();

router.get('/methodes', (req, res) => {
  const { filiere, matiere, categorie } = req.query;

  let sql = `SELECT
      m.id,
      m.matiere_id,
      m.categorie,
      m.type,
      m.titre,
      m.contenu,
      m.ordre,
      GROUP_CONCAT(ch.id || '§' || ch.titre || '§' || COALESCE(fch.ordre, 999), '¶') AS chapitres
    FROM methodes m`;

  const conditions = [];
  const whereParams = [];
  const params = [];

  if (filiere) {
    sql += ' JOIN filiere_methodes fm ON fm.methode_id = m.id';
    conditions.push('fm.filiere_id = ?');
    whereParams.push(filiere);
  }
  sql += ` LEFT JOIN carte_methodes cm ON cm.methode_id = m.id
    LEFT JOIN cartes ca ON ca.id = cm.carte_id
    LEFT JOIN sections s ON s.id = ca.section_id
    LEFT JOIN chapitres ch ON ch.id = s.chapitre_id`;
  if (filiere) {
    sql += ' LEFT JOIN filiere_chapitres fch ON fch.chapitre_id = ch.id AND fch.filiere_id = ?';
    params.push(filiere);
  } else {
    sql += ' LEFT JOIN filiere_chapitres fch ON fch.chapitre_id = ch.id';
  }
  if (matiere) {
    conditions.push('m.matiere_id = ?');
    whereParams.push(matiere);
  }
  if (categorie) {
    conditions.push('m.categorie = ?');
    whereParams.push(categorie);
  }

  if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');
  params.push(...whereParams);
  sql += ' GROUP BY m.id ORDER BY COALESCE(MIN(fch.ordre), 999), m.ordre';

  const rows = getAll(req.db, sql, params).map(row => ({
    ...row,
    chapitres: parseChapitres(row.chapitres),
    ...getMethodeProgrammeMeta(row),
  }));
  res.json(rows);
});

router.get('/methodes/:id', (req, res) => {
  const m = getOne(req.db,
    'SELECT id, matiere_id, categorie, type, titre, contenu FROM methodes WHERE id = ?',
    [req.params.id]
  );
  if (!m) return res.status(404).json({ error: 'Méthode introuvable' });

  res.json({ id: m.id, type: m.type, titre: m.titre, locked: false, contenu: m.contenu, ...getMethodeProgrammeMeta(m) });
});

export default router;

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
