import { Router } from 'express';
import { getAll } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/progression', authenticateToken, (req, res) => {
  const rows = getAll(req.db,
    'SELECT carte_id, status, last_reviewed FROM progression WHERE user_id = ?',
    [req.user.id]
  );
  res.json(rows);
});

// Cartes à revoir aujourd'hui : les « en cours » les plus anciennes
router.get('/review/today', authenticateToken, (req, res) => {
  const rows = getAll(req.db, `
    SELECT p.carte_id, p.status, p.last_reviewed,
           c.label, c.titre, c.type,
           ch.id AS chapitre_id, ch.titre AS chapitre_titre, ch.matiere_id
    FROM progression p
    JOIN cartes c ON c.id = p.carte_id
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    WHERE p.user_id = ? AND p.status = 'en_cours'
    ORDER BY p.last_reviewed ASC
    LIMIT 5
  `, [req.user.id]);
  res.json(rows);
});

router.put('/progression/:carteId', authenticateToken, (req, res) => {
  const { status } = req.body;
  if (!['todo', 'en_cours', 'maitrise'].includes(status)) {
    return res.status(400).json({ error: 'Status invalide' });
  }

  const carteId = Number(req.params.carteId);
  req.db.run(`
    INSERT INTO progression (user_id, carte_id, status, last_reviewed)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, carte_id) DO UPDATE SET status = ?, last_reviewed = datetime('now')
  `, [req.user.id, carteId, status, status]);

  saveDb();

  res.json({ ok: true });
});

export default router;
