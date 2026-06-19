import { Router } from 'express';
import { getAll, runInsert } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/grades', authenticateToken, (req, res) => {
  const rows = getAll(req.db, 'SELECT * FROM grades WHERE user_id = ? ORDER BY created_at DESC', [req.user.id]);
  res.json(rows);
});

router.post('/grades', authenticateToken, (req, res) => {
  const { subject, label, grade, grade_max, class_avg, confidence, coefficient } = req.body;
  if (!subject || !label || grade == null) return res.status(400).json({ error: 'subject, label et grade requis' });

  const id = runInsert(req.db,
    'INSERT INTO grades (user_id, subject, label, grade, grade_max, coefficient, class_avg, confidence) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [req.user.id, subject, label, grade, grade_max || 20, coefficient || 1, class_avg || null, confidence || null]
  );
  saveDb();
  res.status(201).json({ id, subject, label, grade, grade_max: grade_max || 20, coefficient: coefficient || 1, class_avg, confidence });
});

router.delete('/grades/:id', authenticateToken, (req, res) => {
  req.db.run('DELETE FROM grades WHERE id = ? AND user_id = ?', [Number(req.params.id), req.user.id]);
  saveDb();
  res.json({ ok: true });
});

export default router;
