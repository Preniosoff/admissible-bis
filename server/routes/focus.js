import { Router } from 'express';
import { getAll, runInsert } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/focus/stats', authenticateToken, (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const row = req.db.exec(
    `SELECT COUNT(*) as sessions, COALESCE(SUM(duration), 0) as total
     FROM focus_sessions WHERE user_id = ? AND date(created_at) = ?`,
    [req.user.id, today]
  );
  const r = row.length && row[0].values.length ? row[0].values[0] : [0, 0];
  res.json({ todaySessions: r[0], todayMinutes: Math.round(r[1] / 60) });
});

router.post('/focus/sessions', authenticateToken, (req, res) => {
  const { subject, duration } = req.body;
  if (!subject || !duration) return res.status(400).json({ error: 'subject et duration requis' });

  const id = runInsert(req.db,
    'INSERT INTO focus_sessions (user_id, subject, duration) VALUES (?, ?, ?)',
    [req.user.id, subject, duration]
  );
  saveDb();
  res.status(201).json({ id, subject, duration });
});

export default router;
