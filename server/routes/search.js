import { Router } from 'express';
import { getAll } from '../db/connection.js';

const router = Router();

router.get('/search', (req, res) => {
  const { q, filiere, matiere, type, limit = 50 } = req.query;
  if (!q || q.length < 2) return res.json([]);

  const pattern = `%${q}%`;
  const filiereExpr = filiere ? '? AS filiere_id' : 'MIN(fc_any.filiere_id) AS filiere_id';
  const selectParams = filiere ? [filiere] : [];

  let sql = `
    SELECT c.id, c.type, c.label, c.titre, c.contenu, c.section_id,
           s.titre AS section_titre, ch.id AS chapitre_id, ch.titre AS chapitre_titre,
           ch.matiere_id, ${filiereExpr}
    FROM cartes c
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    JOIN filiere_chapitres fc_any ON fc_any.chapitre_id = ch.id
  `;
  const conditions = ['(c.titre LIKE ? OR c.contenu LIKE ?)'];
  const params = [...selectParams, pattern, pattern];

  if (filiere) {
    sql += ' JOIN filiere_chapitres fc ON fc.chapitre_id = ch.id';
    conditions.push('fc.filiere_id = ?');
    params.push(filiere);
  }
  if (matiere) {
    conditions.push('ch.matiere_id = ?');
    params.push(matiere);
  }
  if (type) {
    conditions.push('c.type = ?');
    params.push(type);
  }

  sql += ' WHERE ' + conditions.join(' AND ');
  sql += ' GROUP BY c.id';
  sql += ` LIMIT ?`;
  params.push(Number(limit));

  res.json(getAll(req.db, sql, params));
});

export default router;
