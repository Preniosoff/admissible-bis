import { Router } from 'express';
import { getAll, getOne, runInsert } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// ── Modèles pré-fabriqués ──
const TEMPLATES = [
  {
    id: 'vacances-intensif',
    name: 'Vacances — Intensif',
    desc: 'Planning de travail intensif pour les vacances scolaires. 8h de travail par jour avec pauses.',
    category: 'Vacances',
    slots: [
      { day: 'Lun', start: '08:00', end: '10:00', label: 'Maths', color: '#2a7fb5' },
      { day: 'Lun', start: '10:15', end: '12:15', label: 'Physique', color: '#1f6f8b' },
      { day: 'Lun', start: '14:00', end: '16:00', label: 'Exercices', color: '#335c85' },
      { day: 'Lun', start: '16:15', end: '18:00', label: 'Chimie / SI', color: '#0063cb' },
      { day: 'Mar', start: '08:00', end: '10:00', label: 'Physique', color: '#1f6f8b' },
      { day: 'Mar', start: '10:15', end: '12:15', label: 'Maths', color: '#2a7fb5' },
      { day: 'Mar', start: '14:00', end: '16:00', label: 'Annales', color: '#274060' },
      { day: 'Mar', start: '16:15', end: '18:00', label: 'Méthodes', color: '#555555' },
      { day: 'Mer', start: '08:00', end: '10:00', label: 'Maths', color: '#2a7fb5' },
      { day: 'Mer', start: '10:15', end: '12:15', label: 'Chimie', color: '#0063cb' },
      { day: 'Mer', start: '14:00', end: '16:00', label: 'Physique', color: '#1f6f8b' },
      { day: 'Mer', start: '16:15', end: '17:30', label: 'Relecture fiches', color: '#555555' },
      { day: 'Jeu', start: '08:00', end: '10:00', label: 'Physique', color: '#1f6f8b' },
      { day: 'Jeu', start: '10:15', end: '12:15', label: 'Maths', color: '#2a7fb5' },
      { day: 'Jeu', start: '14:00', end: '16:00', label: 'Exercices', color: '#335c85' },
      { day: 'Jeu', start: '16:15', end: '18:00', label: 'SI / Info', color: '#0063cb' },
      { day: 'Ven', start: '08:00', end: '10:00', label: 'Maths', color: '#2a7fb5' },
      { day: 'Ven', start: '10:15', end: '12:15', label: 'Physique', color: '#1f6f8b' },
      { day: 'Ven', start: '14:00', end: '16:00', label: 'Annales', color: '#274060' },
      { day: 'Sam', start: '09:00', end: '11:00', label: 'Travail libre', color: '#555555' },
      { day: 'Sam', start: '11:15', end: '12:30', label: 'Points faibles', color: '#335c85' },
    ]
  },
  {
    id: 'pre-concours',
    name: 'Pré-concours — Dernier sprint',
    desc: '4 semaines avant les écrits. Annales, méthodes et points faibles.',
    category: 'Concours',
    slots: [
      { day: 'Lun', start: '07:30', end: '10:00', label: 'Maths — Annale', color: '#2a7fb5' },
      { day: 'Lun', start: '10:15', end: '12:30', label: 'Physique — Annale', color: '#1f6f8b' },
      { day: 'Lun', start: '14:00', end: '16:00', label: 'Correction + Méthodes', color: '#335c85' },
      { day: 'Lun', start: '16:30', end: '18:30', label: 'Fiches / Points faibles', color: '#555555' },
      { day: 'Mar', start: '07:30', end: '10:00', label: 'Physique — Annale', color: '#1f6f8b' },
      { day: 'Mar', start: '10:15', end: '12:30', label: 'Maths — Annale', color: '#2a7fb5' },
      { day: 'Mar', start: '14:00', end: '16:00', label: 'Chimie — Annale', color: '#0063cb' },
      { day: 'Mar', start: '16:30', end: '18:00', label: 'Relecture fiches', color: '#555555' },
      { day: 'Mer', start: '07:30', end: '11:30', label: 'Concours blanc (4h)', color: '#274060' },
      { day: 'Mer', start: '14:00', end: '16:00', label: 'Correction détaillée', color: '#335c85' },
      { day: 'Mer', start: '16:30', end: '18:00', label: 'Méthodes à revoir', color: '#555555' },
      { day: 'Jeu', start: '07:30', end: '10:00', label: 'Maths — Annale', color: '#2a7fb5' },
      { day: 'Jeu', start: '10:15', end: '12:30', label: 'Physique — Annale', color: '#1f6f8b' },
      { day: 'Jeu', start: '14:00', end: '16:00', label: 'SI / Info', color: '#0063cb' },
      { day: 'Jeu', start: '16:30', end: '18:00', label: 'Fiches clés', color: '#555555' },
      { day: 'Ven', start: '07:30', end: '10:00', label: 'Physique — Annale', color: '#1f6f8b' },
      { day: 'Ven', start: '10:15', end: '12:30', label: 'Maths — Exercices', color: '#2a7fb5' },
      { day: 'Ven', start: '14:00', end: '16:00', label: 'Français / Langues', color: '#335c85' },
      { day: 'Sam', start: '08:00', end: '12:00', label: 'Concours blanc (4h)', color: '#274060' },
      { day: 'Sam', start: '14:00', end: '16:00', label: 'Correction + Bilan', color: '#335c85' },
    ]
  },
  {
    id: 'transition-term-sup',
    name: 'Transition Terminale → Sup',
    desc: 'Été avant les classes préparatoires. Consolider les bases et prendre de l\'avance sur le programme.',
    category: 'Transition',
    slots: [
      { day: 'Lun', start: '09:00', end: '11:00', label: 'Maths — Terminale', color: '#2a7fb5' },
      { day: 'Lun', start: '11:15', end: '12:30', label: 'Physique — Bases', color: '#1f6f8b' },
      { day: 'Lun', start: '14:30', end: '16:00', label: 'Avance programme sup', color: '#335c85' },
      { day: 'Mar', start: '09:00', end: '11:00', label: 'Physique — Méca/Elec', color: '#1f6f8b' },
      { day: 'Mar', start: '11:15', end: '12:30', label: 'Maths — Analyse', color: '#2a7fb5' },
      { day: 'Mar', start: '14:30', end: '16:00', label: 'Chimie bases', color: '#0063cb' },
      { day: 'Mer', start: '09:00', end: '11:00', label: 'Maths — Algèbre', color: '#2a7fb5' },
      { day: 'Mer', start: '11:15', end: '12:30', label: 'Lecture / Culture gé', color: '#555555' },
      { day: 'Jeu', start: '09:00', end: '11:00', label: 'Physique — Optique', color: '#1f6f8b' },
      { day: 'Jeu', start: '11:15', end: '12:30', label: 'Maths — Exercices', color: '#2a7fb5' },
      { day: 'Jeu', start: '14:30', end: '16:00', label: 'Python / Info', color: '#0063cb' },
      { day: 'Ven', start: '09:00', end: '11:00', label: 'Maths — Suites/Limites', color: '#2a7fb5' },
      { day: 'Ven', start: '11:15', end: '12:30', label: 'Physique — Exercices', color: '#1f6f8b' },
    ]
  },
  {
    id: 'transition-sup-spe',
    name: 'Transition Sup → Spé',
    desc: 'Été entre les deux années. Consolider la première année et préparer la deuxième.',
    category: 'Transition',
    slots: [
      { day: 'Lun', start: '08:30', end: '10:30', label: 'Maths — Sup', color: '#2a7fb5' },
      { day: 'Lun', start: '10:45', end: '12:30', label: 'Physique — Sup', color: '#1f6f8b' },
      { day: 'Lun', start: '14:00', end: '16:00', label: 'Exercices approfondis', color: '#335c85' },
      { day: 'Lun', start: '16:15', end: '17:30', label: 'Avance programme spé', color: '#555555' },
      { day: 'Mar', start: '08:30', end: '10:30', label: 'Physique — Elec/Mag', color: '#1f6f8b' },
      { day: 'Mar', start: '10:45', end: '12:30', label: 'Maths — Algèbre lin.', color: '#2a7fb5' },
      { day: 'Mar', start: '14:00', end: '16:00', label: 'Chimie — Bases', color: '#0063cb' },
      { day: 'Mar', start: '16:15', end: '17:30', label: 'Méthodes concours', color: '#335c85' },
      { day: 'Mer', start: '08:30', end: '10:30', label: 'Maths — Analyse', color: '#2a7fb5' },
      { day: 'Mer', start: '10:45', end: '12:30', label: 'Physique — Méca', color: '#1f6f8b' },
      { day: 'Mer', start: '14:00', end: '15:30', label: 'SI / Info', color: '#0063cb' },
      { day: 'Jeu', start: '08:30', end: '10:30', label: 'Physique — Thermo', color: '#1f6f8b' },
      { day: 'Jeu', start: '10:45', end: '12:30', label: 'Maths — Probas', color: '#2a7fb5' },
      { day: 'Jeu', start: '14:00', end: '16:00', label: 'Annales sup', color: '#274060' },
      { day: 'Ven', start: '08:30', end: '10:30', label: 'Maths — Réduction', color: '#2a7fb5' },
      { day: 'Ven', start: '10:45', end: '12:30', label: 'Physique — Ondes', color: '#1f6f8b' },
      { day: 'Ven', start: '14:00', end: '15:30', label: 'Français / Langues', color: '#335c85' },
      { day: 'Sam', start: '09:00', end: '11:30', label: 'Points faibles', color: '#274060' },
    ]
  },
  {
    id: 'semaine-type-spe',
    name: 'Semaine type — Spé',
    desc: 'Planning régulier pour la semaine de cours en MP/PC/PSI.',
    category: 'Année scolaire',
    slots: [
      { day: 'Lun', start: '18:00', end: '19:30', label: 'DM / Exercices', color: '#335c85' },
      { day: 'Lun', start: '20:00', end: '21:30', label: 'Relecture cours du jour', color: '#555555' },
      { day: 'Mar', start: '18:00', end: '19:30', label: 'Fiches + Méthodes', color: '#0063cb' },
      { day: 'Mar', start: '20:00', end: '21:30', label: 'Exercices type concours', color: '#335c85' },
      { day: 'Mer', start: '14:00', end: '16:00', label: 'Annale complète', color: '#274060' },
      { day: 'Mer', start: '16:15', end: '17:30', label: 'Correction + Méthodes', color: '#335c85' },
      { day: 'Jeu', start: '18:00', end: '19:30', label: 'DM / Prépa colle', color: '#335c85' },
      { day: 'Jeu', start: '20:00', end: '21:30', label: 'Relecture cours', color: '#555555' },
      { day: 'Ven', start: '18:00', end: '19:30', label: 'Exercices libres', color: '#335c85' },
      { day: 'Ven', start: '20:00', end: '21:00', label: 'Bilan de la semaine', color: '#555555' },
      { day: 'Sam', start: '09:00', end: '11:00', label: 'Maths — Approfondissement', color: '#2a7fb5' },
      { day: 'Sam', start: '11:15', end: '12:30', label: 'Physique — Exercices', color: '#1f6f8b' },
      { day: 'Sam', start: '14:00', end: '16:00', label: 'Points faibles', color: '#274060' },
      { day: 'Dim', start: '10:00', end: '12:00', label: 'Travail calme', color: '#555555' },
    ]
  },
];

// GET modèles
router.get('/schedule-templates', (_req, res) => {
  res.json(TEMPLATES.map(t => ({ id: t.id, name: t.name, desc: t.desc, category: t.category, slotCount: t.slots.length })));
});

// GET détail d'un modèle
router.get('/schedule-templates/:id', (req, res) => {
  const t = TEMPLATES.find(t => t.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'Modèle non trouvé' });
  res.json(t);
});

// GET user schedules
router.get('/schedules', authenticateToken, (req, res) => {
  const rows = getAll(req.db, 'SELECT * FROM schedules WHERE user_id = ? ORDER BY updated_at DESC', [req.user.id]);
  res.json(rows.map(r => ({ ...r, slots: JSON.parse(r.slots) })));
});

// POST create schedule
router.post('/schedules', authenticateToken, (req, res) => {
  const { name, template_id, slots } = req.body;
  if (!name) return res.status(400).json({ error: 'Nom requis' });

  let finalSlots = slots || [];
  if (template_id) {
    const t = TEMPLATES.find(t => t.id === template_id);
    if (t) finalSlots = t.slots;
  }

  const id = runInsert(req.db,
    'INSERT INTO schedules (user_id, name, template_id, slots) VALUES (?, ?, ?, ?)',
    [req.user.id, name, template_id || null, JSON.stringify(finalSlots)]
  );
  saveDb();
  res.status(201).json({ id, name, template_id, slots: finalSlots });
});

// PUT update schedule
router.put('/schedules/:id', authenticateToken, (req, res) => {
  const sched = getOne(req.db, 'SELECT * FROM schedules WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
  if (!sched) return res.status(404).json({ error: 'Emploi du temps non trouvé' });

  const { name, slots } = req.body;
  req.db.run("UPDATE schedules SET name = ?, slots = ?, updated_at = datetime('now') WHERE id = ?",
    [name || sched.name, JSON.stringify(slots || JSON.parse(sched.slots)), Number(req.params.id)]);
  saveDb();
  res.json({ ok: true });
});

// DELETE schedule
router.delete('/schedules/:id', authenticateToken, (req, res) => {
  req.db.run('DELETE FROM schedules WHERE id = ? AND user_id = ?', [Number(req.params.id), req.user.id]);
  saveDb();
  res.json({ ok: true });
});

export default router;
