import { Router } from 'express';
import { getAll, getOne } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/dashboard/stats', authenticateToken, (req, res) => {
  try {
  const userId = req.user.id;
  const user = getOne(req.db, 'SELECT * FROM users WHERE id = ?', [userId]);
  if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
  const filiere = user?.filiere_id || 'mp';

  // Total cards in user's filière
  const totalCards = getOne(req.db, `
    SELECT COUNT(DISTINCT c.id) as total FROM cartes c
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    JOIN filiere_chapitres fc ON fc.chapitre_id = ch.id
    WHERE fc.filiere_id = ?
  `, [filiere])?.total || 0;

  // User's progression
  const mastered = getOne(req.db, "SELECT COUNT(*) as c FROM progression WHERE user_id = ? AND status = 'maitrise'", [userId])?.c || 0;
  const inProgress = getOne(req.db, "SELECT COUNT(*) as c FROM progression WHERE user_id = ? AND status = 'en_cours'", [userId])?.c || 0;
  const reviewed = getOne(req.db, "SELECT COUNT(*) as c FROM progression WHERE user_id = ?", [userId])?.c || 0;

  // Per-subject breakdown
  const subjects = getAll(req.db, `
    SELECT m.id, m.nom,
      COUNT(DISTINCT c.id) as total,
      COUNT(DISTINCT CASE WHEN p.status = 'maitrise' THEN c.id END) as mastered,
      COUNT(DISTINCT CASE WHEN p.status = 'en_cours' THEN c.id END) as in_progress
    FROM matieres m
    JOIN filiere_matieres fm ON fm.matiere_id = m.id AND fm.filiere_id = ?
    JOIN chapitres ch ON ch.matiere_id = m.id
    JOIN filiere_chapitres fc ON fc.chapitre_id = ch.id AND fc.filiere_id = ?
    JOIN sections s ON s.chapitre_id = ch.id
    JOIN cartes c ON c.section_id = s.id
    LEFT JOIN progression p ON p.carte_id = c.id AND p.user_id = ?
    GROUP BY m.id, m.nom
    ORDER BY fm.ordre
  `, [filiere, filiere, userId]);

  res.json({
    user: { id: user.id, nom: user.nom, username: user.username, filiere_id: filiere },
    stats: { totalCards, mastered, inProgress, reviewed },
    subjects,
  });
  } catch (err) {
    console.error('[dashboard/stats]', err);
    res.status(500).json({ error: err.message || 'Erreur serveur' });
  }
});

export default router;
