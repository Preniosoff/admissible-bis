import { Router } from 'express';
import { getAll, getOne } from '../db/connection.js';

const router = Router();

router.get('/filieres/:fid/matieres/:mid/chapitres', (req, res) => {
  const { fid, mid } = req.params;
  const chapitres = getAll(req.db, `
    SELECT c.id, c.titre, fc.ordre
    FROM chapitres c
    JOIN filiere_chapitres fc ON fc.chapitre_id = c.id
    WHERE fc.filiere_id = ? AND c.matiere_id = ?
    ORDER BY fc.ordre
  `, [fid, mid]);

  res.json(chapitres);
});

router.get('/chapitres/:id', (req, res) => {
  const chapitre = getOne(req.db, 'SELECT * FROM chapitres WHERE id = ?', [req.params.id]);
  if (!chapitre) return res.status(404).json({ error: 'Chapitre non trouvé' });

  const sections = getAll(req.db,
    'SELECT * FROM sections WHERE chapitre_id = ? ORDER BY ordre',
    [req.params.id]
  );

  const cartes = getAll(req.db, `
    SELECT c.* FROM cartes c
    JOIN sections s ON s.id = c.section_id
    WHERE s.chapitre_id = ?
    ORDER BY s.ordre, c.ordre
  `, [req.params.id]);

  // Méthodes rattachées aux cartes du chapitre — métadonnées seulement (jamais le contenu)
  const liens = getAll(req.db, `
    SELECT cm.carte_id, m.id, m.titre, m.type, cm.ordre
    FROM carte_methodes cm
    JOIN methodes m ON m.id = cm.methode_id
    JOIN cartes c ON c.id = cm.carte_id
    JOIN sections s ON s.id = c.section_id
    WHERE s.chapitre_id = ?
    ORDER BY cm.carte_id, cm.ordre
  `, [req.params.id]);

  const result = {
    ...chapitre,
    sections: sections.map(s => ({
      ...s,
      cartes: cartes.filter(c => c.section_id === s.id).map(c => ({
        ...c,
        methodes: liens
          .filter(l => l.carte_id === c.id)
          .map(l => ({ id: l.id, titre: l.titre, type: l.type })),
      })),
    })),
  };

  res.json(result);
});

export default router;
