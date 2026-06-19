import '../main.js';
import { getUser } from '../auth.js';
import { startTutorial } from '../tutorial.js';

document.addEventListener('DOMContentLoaded', () => {
  const user = getUser();

  // Si pas connecté → accueil
  if (!user) {
    window.location.replace('index.html');
    return;
  }

  // Si déjà vu l'onboarding → son espace personnalisé (parcours)
  if (localStorage.getItem('onboarding-done') === '1') {
    window.location.replace('parcours.html');
    return;
  }

  // Remplir le prénom (premier mot du nom)
  const firstName = (user.nom || 'Utilisateur').split(' ')[0];
  const nameEl = document.getElementById('ob-name');
  if (nameEl) nameEl.textContent = firstName;

  // Remplir la filière
  const filiereMap = {
    mp: 'Filière MP · Maths-Physique',
    pc: 'Filière PC · Physique-Chimie',
    psi: 'Filière PSI · Physique-SI',
    pt: 'Filière PT · Physique-Technologie',
    mpsi: 'MPSI · Première année',
    pcsi: 'PCSI · Première année',
    ptsi: 'PTSI · Première année',
    tsi: 'TSI · Technologie-SI',
    bcpst: 'BCPST · Bio-Chimie',
    default: 'Prépa scientifique',
  };
  const filiereId = user.filiere_id || 'default';
  const filiereLabel = filiereMap[filiereId] || filiereMap.default;
  const filiereEl = document.getElementById('ob-filiere-label');
  if (filiereEl) filiereEl.textContent = filiereLabel;

  // La carte « Cours » mène aux cours ; le bouton principal mène à l'espace parcours
  const coursLink = document.getElementById('ob-card-cours');
  const startBtn = document.getElementById('ob-start');
  if (filiereId && filiereId !== 'default') {
    if (coursLink) coursLink.href = `cours.html?filiere=${filiereId}`;
  }
  if (startBtn) startBtn.href = 'parcours.html';

  // Marquer l'onboarding comme vu quand l'utilisateur clique
  document.querySelectorAll('.ob-card, .ob-btn-primary, .ob-skip').forEach(el => {
    el.addEventListener('click', () => {
      localStorage.setItem('onboarding-done', '1');
    });
  });

  // Bouton guide interactif
  const tutoBtn = document.getElementById('ob-tuto-btn');
  if (tutoBtn) {
    tutoBtn.addEventListener('click', () => {
      localStorage.setItem('onboarding-done', '1');
      startTutorial();
    });
  }
});
