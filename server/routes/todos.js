import { Router } from 'express';
import { getAll, runInsert } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/todos', authenticateToken, (req, res) => {
  const rows = getAll(req.db, 'SELECT * FROM todos WHERE user_id = ? ORDER BY done ASC, priority DESC, created_at DESC', [req.user.id]);
  res.json(rows);
});

router.post('/todos', authenticateToken, (req, res) => {
  const { text, priority, due_date } = req.body;
  if (!text) return res.status(400).json({ error: 'Texte requis' });
  const id = runInsert(req.db,
    'INSERT INTO todos (user_id, text, priority, due_date) VALUES (?, ?, ?, ?)',
    [req.user.id, text, priority || 'normal', due_date || null]);
  saveDb();
  res.status(201).json({ id, text, done: 0, priority: priority || 'normal', due_date });
});

router.put('/todos/:id', authenticateToken, (req, res) => {
  const { text, done, priority, due_date } = req.body;
  const fields = []; const params = [];
  if (text !== undefined) { fields.push('text = ?'); params.push(text); }
  if (done !== undefined) { fields.push('done = ?'); params.push(done ? 1 : 0); }
  if (priority !== undefined) { fields.push('priority = ?'); params.push(priority); }
  if (due_date !== undefined) { fields.push('due_date = ?'); params.push(due_date); }
  if (!fields.length) return res.json({ ok: true });
  params.push(Number(req.params.id), req.user.id);
  req.db.run(`UPDATE todos SET ${fields.join(', ')} WHERE id = ? AND user_id = ?`, params);
  saveDb();
  res.json({ ok: true });
});

router.delete('/todos/:id', authenticateToken, (req, res) => {
  req.db.run('DELETE FROM todos WHERE id = ? AND user_id = ?', [Number(req.params.id), req.user.id]);
  saveDb();
  res.json({ ok: true });
});

export default router;
