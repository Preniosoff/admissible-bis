import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { saveDb } from '../db/connection.js';

const router = Router();

router.get('/erreurs', authenticateToken, (req, res) => {
  const rows = req.db.exec('SELECT id, subject, category, description, solution, resolved, created_at FROM erreurs WHERE user_id = ? ORDER BY created_at DESC', [req.user.id]);
  if (!rows.length) return res.json([]);
  const cols = rows[0].columns;
  res.json(rows[0].values.map(r => Object.fromEntries(cols.map((c, i) => [c, r[i]]))));
});

router.post('/erreurs', authenticateToken, (req, res) => {
  const { subject, category, description, solution } = req.body;
  if (!subject || !description) return res.status(400).json({ error: 'subject et description requis' });
  req.db.run('INSERT INTO erreurs (user_id, subject, category, description, solution) VALUES (?, ?, ?, ?, ?)',
    [req.user.id, subject, category || 'calcul', description, solution || null]);
  const id = req.db.exec('SELECT last_insert_rowid()')[0].values[0][0];
  res.json({ id, subject, category: category || 'calcul', description, solution: solution || null, resolved: 0 });
});

router.put('/erreurs/:id', authenticateToken, (req, res) => {
  const { resolved, solution } = req.body;
  if (resolved !== undefined) {
    req.db.run('UPDATE erreurs SET resolved = ? WHERE id = ? AND user_id = ?', [resolved ? 1 : 0, req.params.id, req.user.id]);
  }
  if (solution !== undefined) {
    req.db.run('UPDATE erreurs SET solution = ? WHERE id = ? AND user_id = ?', [solution, req.params.id, req.user.id]);
  }
  saveDb();
  res.json({ ok: true });
});

router.delete('/erreurs/:id', authenticateToken, (req, res) => {
  req.db.run('DELETE FROM erreurs WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
  res.json({ ok: true });
});

export default router;
