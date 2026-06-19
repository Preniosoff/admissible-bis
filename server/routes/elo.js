import { Router } from 'express';
import { getAll, getOne } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function expectedScore(rating, exerciseRating) {
  return 1 / (1 + Math.pow(10, (exerciseRating - rating) / 400));
}

function exerciseRatingFromDifficulty(difficulty) {
  const scale = {
    1: 760,
    2: 880,
    3: 1000,
    4: 1120,
    5: 1240,
  };
  return scale[clamp(Number(difficulty) || 3, 1, 5)];
}

function normalizeSuccess(success) {
  return clamp(Number(success) || 0, 0, 10) / 10;
}

function getCardContext(db, carteId) {
  return getOne(db, `
    SELECT c.id, c.titre, c.label, c.type, c.contenu,
           ch.id AS chapitre_id, ch.titre AS chapitre_titre, ch.matiere_id
    FROM cartes c
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    WHERE c.id = ?
  `, [carteId]);
}

function getRecommendations(db, userId, matiereId, chapitreId, excludeId, rating) {
  const rows = getAll(db, `
    SELECT c.id, c.titre, c.label, c.type,
           ch.id AS chapitre_id, ch.titre AS chapitre_titre, ch.matiere_id
    FROM cartes c
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    WHERE c.type IN ('ex', 'exo')
      AND ch.matiere_id = ?
      AND c.id != ?
    ORDER BY CASE WHEN ch.id = ? THEN 0 ELSE 1 END, c.ordre ASC
    LIMIT 8
  `, [matiereId, excludeId, chapitreId]);

  const band = rating < 920 ? 'consolidation' : rating > 1180 ? 'défi' : 'équilibre';
  return rows.slice(0, 4).map((row, index) => ({
    ...row,
    band,
    reason: index === 0 && row.chapitre_id === chapitreId
      ? 'Même chapitre, niveau proche'
      : 'Même matière, utile pour stabiliser le niveau',
  }));
}

router.get('/elo', authenticateToken, (req, res) => {
  const rows = getAll(req.db, `
    SELECT e.*, m.nom AS matiere_nom, ch.titre AS chapitre_titre
    FROM elo_scores e
    LEFT JOIN matieres m ON m.id = e.matiere_id
    LEFT JOIN chapitres ch ON ch.id = e.chapitre_id
    WHERE e.user_id = ?
    ORDER BY e.updated_at DESC
  `, [req.user.id]);
  res.json(rows);
});

router.post('/elo/evaluate', authenticateToken, (req, res) => {
  const carteId = Number(req.body.carte_id);
  const difficulty = clamp(Number(req.body.difficulty) || 3, 1, 5);
  const success = clamp(Number(req.body.success) || 0, 0, 10);
  if (!carteId) return res.status(400).json({ error: 'Carte requise' });

  const card = getCardContext(req.db, carteId);
  if (!card || !['ex', 'exo'].includes(card.type)) return res.status(404).json({ error: 'Exercice introuvable' });

  const current = getOne(req.db, `
    SELECT rating, attempts FROM elo_scores
    WHERE user_id = ? AND matiere_id = ? AND chapitre_id = ?
  `, [req.user.id, card.matiere_id, card.chapitre_id]) || { rating: 1000, attempts: 0 };

  const exerciseRating = exerciseRatingFromDifficulty(difficulty);
  const normalized = normalizeSuccess(success);
  const expected = expectedScore(current.rating, exerciseRating);
  const k = current.attempts < 10 ? 40 : current.attempts < 30 ? 32 : 24;
  const delta = Math.round(k * (normalized - expected));
  const nextRating = clamp(current.rating + delta, 500, 1800);
  const nextAttempts = current.attempts + 1;

  req.db.run(`
    INSERT INTO elo_scores (user_id, matiere_id, chapitre_id, rating, attempts, updated_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, matiere_id, chapitre_id)
    DO UPDATE SET rating = ?, attempts = ?, updated_at = datetime('now')
  `, [req.user.id, card.matiere_id, card.chapitre_id, nextRating, nextAttempts, nextRating, nextAttempts]);

  req.db.run(`
    INSERT INTO exercise_attempts
      (user_id, carte_id, matiere_id, chapitre_id, difficulty, success, delta, rating_after)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [req.user.id, carteId, card.matiere_id, card.chapitre_id, difficulty, success, delta, nextRating]);

  saveDb();

  res.json({
    ok: true,
    rating: nextRating,
    previous_rating: current.rating,
    delta,
    attempts: nextAttempts,
    matiere_id: card.matiere_id,
    chapitre_id: card.chapitre_id,
    chapitre_titre: card.chapitre_titre,
    recommendations: getRecommendations(req.db, req.user.id, card.matiere_id, card.chapitre_id, carteId, nextRating),
  });
});

export default router;
