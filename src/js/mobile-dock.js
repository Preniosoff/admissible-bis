// ── Dock mobile (barre de navigation basse, utilisateurs connectés) ─────────
import { getUser } from './auth.js';

const ITEMS = [
  { ico: 'C', label: 'Cours',  href: 'cours.html',     match: ['cours'] },
  { ico: 'T', label: 'Timer de travail',  href: 'focus.html',     match: ['focus'] },
  { ico: 'M', label: 'Méthodes', href: 'methodes.html', match: ['methodes'] },
  { ico: 'S', label: 'Suivi',  href: 'dashboard.html', match: ['dashboard'] },
  { ico: 'A', label: 'Actions',  href: 'todos.html',     match: ['todos'] },
];

export function initMobileDock() {
  if (!getUser()) return;
  if (document.getElementById('mobile-dock')) return;

  const path = location.pathname;
  const dock = document.createElement('nav');
  dock.id = 'mobile-dock';
  dock.className = 'mobile-dock';
  dock.setAttribute('aria-label', 'Navigation rapide');
  dock.innerHTML = ITEMS.map(it => {
    const active = it.match.some(m => path.includes(m));
    return `<a href="${it.href}" class="mobile-dock-item${active ? ' active' : ''}">
      <span class="mobile-dock-ico" aria-hidden="true">${it.ico}</span>
      <span class="mobile-dock-label">${it.label}</span>
    </a>`;
  }).join('');
  document.body.appendChild(dock);
  document.body.classList.add('has-dock');
}
