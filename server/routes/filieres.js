import { Router } from 'express';
import { getAll } from '../db/connection.js';

const router = Router();

router.get('/niveaux', (req, res) => {
  const niveaux = getAll(req.db, 'SELECT * FROM niveaux ORDER BY ordre');
  const filieres = getAll(req.db, 'SELECT * FROM filieres ORDER BY ordre');

  const result = niveaux.map(n => ({
    ...n,
    filieres: filieres.filter(f => f.niveau_id === n.id),
  }));
  res.json(result);
});

router.get('/filieres/:id', (req, res) => {
  const filiere = getAll(req.db, 'SELECT * FROM filieres WHERE id = ?', [req.params.id])[0];
  if (!filiere) return res.status(404).json({ error: 'Filière non trouvée' });

  const matieres = getAll(req.db, `
    SELECT m.* FROM matieres m
    JOIN filiere_matieres fm ON fm.matiere_id = m.id
    WHERE fm.filiere_id = ?
    ORDER BY fm.ordre
  `, [req.params.id]);

  res.json({ ...filiere, matieres });
});

export default router;
