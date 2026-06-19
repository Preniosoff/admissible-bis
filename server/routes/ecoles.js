import { Router } from 'express';
import { getAll } from '../db/connection.js';

const router = Router();

router.get('/ecoles', (req, res) => {
  const { q, banque, type, sort = 'rang' } = req.query;

  let sql = 'SELECT * FROM ecoles WHERE 1=1';
  const params = [];

  if (q) {
    sql += ' AND (nom LIKE ? OR ville LIKE ? OR region LIKE ?)';
    const pattern = `%${q}%`;
    params.push(pattern, pattern, pattern);
  }
  if (banque) {
    sql += ' AND banque = ?';
    params.push(banque);
  }
  if (type) {
    sql += ' AND type = ?';
    params.push(type);
  }

  const orderMap = {
    rang: 'rang ASC',
    nom: 'nom ASC',
  };
  sql += ` ORDER BY ${orderMap[sort] || 'rang ASC'}`;

  const ecoles = getAll(req.db, sql, params);

  function toArray(val) {
    if (!val) return [];
    if (val.startsWith('[')) { try { return JSON.parse(val); } catch {} }
    return val.split(',').map(s => s.trim()).filter(Boolean);
  }

  res.json(ecoles.map(e => ({
    ...e,
    tags: toArray(e.tags),
    doubles_diplomes: toArray(e.doubles_diplomes),
    campus: toArray(e.campus),
    specialites: toArray(e.specialites),
  })));
});

export default router;
