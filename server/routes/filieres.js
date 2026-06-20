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

// Couverture du contenu : quelles filière×matière ont des cours / méthodes / exercices.
// Sert aux passerelles à ne proposer que des matières réellement remplies.
router.get('/coverage', (req, res) => {
  const cours = getAll(req.db, `
    SELECT fc.filiere_id AS f, ch.matiere_id AS m,
      SUM(CASE WHEN c.type IN ('ex','exo','exercice') THEN 0 ELSE 1 END) AS cours,
      SUM(CASE WHEN c.type IN ('ex','exo','exercice') THEN 1 ELSE 0 END) AS exos
    FROM cartes c
    JOIN sections s ON s.id = c.section_id
    JOIN chapitres ch ON ch.id = s.chapitre_id
    JOIN filiere_chapitres fc ON fc.chapitre_id = ch.id
    JOIN filiere_matieres fm2 ON fm2.filiere_id = fc.filiere_id AND fm2.matiere_id = ch.matiere_id
    GROUP BY fc.filiere_id, ch.matiere_id`);
  const meth = getAll(req.db, `
    SELECT fm.filiere_id AS f, mt.matiere_id AS m, COUNT(*) AS n
    FROM methodes mt
    JOIN filiere_methodes fm ON fm.methode_id = mt.id
    JOIN filiere_matieres fmt ON fmt.filiere_id = fm.filiere_id AND fmt.matiere_id = mt.matiere_id
    GROUP BY fm.filiere_id, mt.matiere_id`);

  const coursSet = [], exoSet = [];
  for (const r of cours) {
    if (r.cours > 0) coursSet.push(`${r.f}|${r.m}`);
    if (r.exos > 0) exoSet.push(`${r.f}|${r.m}`);
  }
  const methSet = meth.filter(r => r.n > 0).map(r => `${r.f}|${r.m}`);

  res.json({ cours: coursSet, methodes: methSet, exercices: exoSet });
});

export default router;
