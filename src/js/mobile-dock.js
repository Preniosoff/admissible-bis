// ── Dock mobile (barre de navigation basse, utilisateurs connectés) ─────────
import { getUser } from './auth.js';

const STUDENT_ITEMS = [
  { ico: 'book', label: 'Cours',  href: 'cours.html',     match: ['cours'] },
  { ico: 'path', label: 'Méthodes', href: 'methodes.html', match: ['methodes'] },
  { ico: 'check', label: 'Exos',  href: 'ressources.html',     match: ['ressources'] },
  { ico: 'chart', label: 'Suivi',  href: 'dashboard.html', match: ['dashboard'] },
  { ico: 'check', label: 'Actions',  href: 'todos.html',     match: ['todos'] },
];

const PARENT_ITEMS = [
  { ico: 'book', label: 'Gratuit', href: 'cours.html', match: ['cours', 'methodes', 'ressources'] },
  { ico: 'chart', label: 'Parent', href: 'parents.html', match: ['parents'] },
  { ico: 'path', label: 'Famille', href: 'famille.html', match: ['famille', 'bilan-parent'] },
  { ico: 'check', label: 'Offres', href: 'abonnement.html#famille', match: ['abonnement'] },
  { ico: 'timer', label: 'Aide', href: 'aide.html', match: ['aide'] },
];

const TUTOR_ITEMS = [
  { ico: 'chart', label: 'Espace', href: 'espace-prof-particulier.html', match: ['espace-prof-particulier'] },
  { ico: 'book', label: 'Cours', href: 'cours.html', match: ['cours'] },
  { ico: 'path', label: 'Méthodes', href: 'methodes.html', match: ['methodes'] },
  { ico: 'check', label: 'Exos', href: 'ressources.html', match: ['ressources'] },
  { ico: 'timer', label: 'Offre', href: 'abonnement.html#prof-particulier', match: ['abonnement'] },
];

const TEACHER_ITEMS = [
  { ico: 'chart', label: 'Classe', href: 'espace-enseignant.html', match: ['espace-enseignant'] },
  { ico: 'book', label: 'Cours', href: 'cours.html', match: ['cours'] },
  { ico: 'path', label: 'Méthodes', href: 'methodes.html', match: ['methodes'] },
  { ico: 'check', label: 'Séquence', href: 'sequences-pedagogiques.html', match: ['sequences'] },
  { ico: 'timer', label: 'Offre', href: 'abonnement.html#enseignant', match: ['abonnement'] },
];

function itemsForContext(user, path) {
  const role = user?.role || '';
  if (role === 'parent' || path.includes('parents') || path.includes('famille') || path.includes('bilan-parent')) return PARENT_ITEMS;
  if (role === 'prof_particulier' || path.includes('prof-particulier') || path.includes('espace-prof-particulier')) return TUTOR_ITEMS;
  if (role === 'enseignant' || path.includes('enseignants') || path.includes('espace-enseignant') || path.includes('sequences-pedagogiques')) return TEACHER_ITEMS;
  return STUDENT_ITEMS;
}

export function initMobileDock() {
  const user = getUser();
  if (!user) return;
  if (document.getElementById('mobile-dock')) return;

  const path = location.pathname;
  const page = path.split('/').pop() || 'index.html';
  const quietPages = new Set(['inscription.html', 'onboarding.html', 'abonnement-succes.html']);
  if (quietPages.has(page)) return;

  const items = itemsForContext(user, path);
  const dock = document.createElement('nav');
  dock.id = 'mobile-dock';
  dock.className = 'mobile-dock';
  dock.setAttribute('aria-label', 'Navigation rapide');
  dock.innerHTML = items.map(it => {
    const active = it.match.some(m => path.includes(m));
    return `<a href="${it.href}" class="mobile-dock-item${active ? ' active' : ''}">
      <span class="mobile-dock-ico" data-icon="${it.ico}" aria-hidden="true"></span>
      <span class="mobile-dock-label">${it.label}</span>
    </a>`;
  }).join('');
  document.body.appendChild(dock);
  document.body.classList.add('has-dock');
}
