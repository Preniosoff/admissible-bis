// ── Palette de commande globale (Cmd+K / Ctrl+K) ─────────────────────────────
// Recherche serveur (cartes de cours) + navigation rapide entre les pages.
import { api } from './api.js';
import { getUser } from './auth.js';

const PAGES = [
  { ico: 'CO', label: 'Cours',            href: 'cours.html' },
  { ico: 'ME', label: 'Méthodes',         href: 'methodes.html' },
  { ico: 'AC', label: 'Accueil',          href: 'index.html' },
  { ico: 'VI', label: 'Présentation vidéo', href: 'presentation.html' },
  { ico: 'OF', label: 'Offres et abonnements', href: 'abonnement.html' },
  { ico: 'DI', label: 'Diagnostic du parcours', href: 'parcours.html#diagnostic' },
  { ico: 'TB', label: 'Tableau de bord',  href: 'dashboard.html' },
  { ico: 'TR', label: 'Timer de travail', href: 'focus.html' },
  { ico: 'ET', label: 'Emploi du temps',  href: 'schedule.html' },
  { ico: 'AT', label: 'Actions',          href: 'todos.html' },
  { ico: 'CE', label: 'Cahier d\'erreurs', href: 'erreurs.html' },
  { ico: 'NO', label: 'Notes',            href: 'notes.html' },
  { ico: 'CN', label: 'Concours',         href: 'concours.html' },
  { ico: 'AC', label: 'Annales concours', href: 'annales.html' },
  { ico: 'AB', label: 'Annales bac',      href: 'annales-bac.html' },
  { ico: 'AV', label: 'Annales brevet',   href: 'annales-brevet.html' },
  { ico: 'EX', label: 'Exercices',        href: 'ressources.html' },
  { ico: 'RE', label: 'Recherche',        href: 'recherche.html' },
  { ico: 'IN', label: 'Créer un compte guidé',  href: 'inscription.html' },
  { ico: 'OR', label: 'Orientation',      href: 'orientation.html' },
  { ico: 'AO', label: 'Attendus officiels', href: 'attendus-officiels.html' },
  { ico: 'OR', label: 'Choisir mon niveau', href: 'choisir-niveau.html' },
  { ico: 'EC', label: 'État des contenus', href: 'etat-contenus.html' },
  { ico: 'EL', label: 'Élèves',            href: 'eleves.html' },
  { ico: 'PR', label: 'Priorités élève',    href: 'priorites-eleve.html' },
  { ico: 'PA', label: 'Parents',           href: 'parents.html' },
  { ico: 'FA', label: 'Famille',           href: 'famille.html' },
  { ico: 'BP', label: 'Bilan parent',       href: 'bilan-parent.html' },
  { ico: 'EN', label: 'Enseignants',       href: 'enseignants.html' },
  { ico: 'EE', label: 'Espace enseignant', href: 'espace-enseignant.html' },
  { ico: 'PP', label: 'Prof particulier', href: 'prof-particulier.html' },
  { ico: 'EP', label: 'Espace prof particulier', href: 'espace-prof-particulier.html' },
  { ico: 'SQ', label: 'Séquences pédagogiques', href: 'sequences-pedagogiques.html' },
  { ico: 'ET', label: 'Établissements',    href: 'etablissements.html' },
  { ico: 'PI', label: 'Pilotage établissement', href: 'pilotage-etablissement.html' },
  { ico: 'DE', label: 'Déploiement établissement', href: 'deploiement-etablissement.html' },
  { ico: 'RG', label: 'Matrice RGPD', href: 'matrice-rgpd.html' },
  { ico: 'FP', label: 'Fiche de présentation', href: 'fiche-presentation.html' },
  { ico: 'AP', label: 'A propos',         href: 'a-propos.html' },
  { ico: 'NM', label: 'Notre méthode',    href: 'notre-methode.html' },
  { ico: 'SP', label: 'Sources et programmes', href: 'sources-programmes.html' },
  { ico: 'DS', label: 'Alignement DSFR',   href: 'conformite-dsfr.html' },
  { ico: 'SE', label: 'Sécurité',          href: 'securite.html' },
  { ico: 'TR', label: 'Transparence',      href: 'transparence.html' },
  { ico: 'CI', label: 'Accès institutionnel', href: 'connexion-institutionnelle.html' },
  { ico: 'ST', label: 'Statut du service', href: 'statut-service.html' },
  { ico: 'CS', label: 'Contact et signalement', href: 'contact-signalement.html' },
  { ico: 'AX', label: 'Accessibilité',    href: 'accessibilite.html' },
  { ico: 'AI', label: 'Aide',             href: 'aide.html' },
  { ico: 'PS', label: 'Plan du site',     href: 'plan-site.html' },
];

let overlay = null;
let selIndex = 0;
let items = [];          // éléments DOM sélectionnables
let debounceT = null;

function stripHtml(s) {
  const d = document.createElement('div');
  d.innerHTML = s || '';
  return (d.textContent || '').replace(/\s+/g, ' ').trim();
}

function close() {
  overlay?.remove();
  overlay = null;
}

function open() {
  if (overlay) { close(); return; }
  overlay = document.createElement('div');
  overlay.className = 'cmdk-overlay';
  overlay.innerHTML = `
    <div class="cmdk" role="dialog" aria-label="Recherche rapide">
      <input class="cmdk-input" id="cmdk-input" type="text"
             placeholder="Rechercher un théorème, une page…" autocomplete="off" spellcheck="false">
      <div class="cmdk-results" id="cmdk-results"></div>
      <div class="cmdk-hint">
        <span><kbd>↑↓</kbd> naviguer</span><span><kbd>↵</kbd> ouvrir</span><span><kbd>esc</kbd> fermer</span>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  const input = overlay.querySelector('#cmdk-input');
  input.focus();
  renderResults('', []);

  input.addEventListener('input', () => {
    clearTimeout(debounceT);
    const q = input.value.trim();
    if (q.length < 2) { renderResults(q, []); return; }
    debounceT = setTimeout(async () => {
      try {
        const user = getUser();
        const rows = await api.search(q, user?.filiere_id || '', '');
        renderResults(q, rows.slice(0, 12));
      } catch { renderResults(q, []); }
    }, 180);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); items[selIndex]?.click(); }
    else if (e.key === 'Escape') close();
  });
}

function move(d) {
  if (!items.length) return;
  items[selIndex]?.classList.remove('sel');
  selIndex = (selIndex + d + items.length) % items.length;
  items[selIndex].classList.add('sel');
  items[selIndex].scrollIntoView({ block: 'nearest' });
}

function renderResults(q, rows) {
  const box = overlay?.querySelector('#cmdk-results');
  if (!box) return;
  const user = getUser();
  const ql = q.toLowerCase();

  const pages = PAGES.filter(p => !ql || p.label.toLowerCase().includes(ql));
  let html = '';

  if (rows.length) {
    html += '<div class="cmdk-group">Cours</div>';
    html += rows.map(r => {
      const head = [r.label, r.titre].filter(Boolean).join(' — ') || stripHtml(r.contenu).slice(0, 60);
      const href = `cours.html?filiere=${user?.filiere_id || r.filiere_id || 'mp'}&matiere=${r.matiere_id}#${r.chapitre_id}`;
      return `<div class="cmdk-item" data-href="${href}">
        <span class="cmdk-item-ico" aria-hidden="true">CO</span>
        <span class="cmdk-item-main">${head}</span>
        <span class="cmdk-item-sub">${r.chapitre_titre}</span>
      </div>`;
    }).join('');
  }
  if (pages.length) {
    html += '<div class="cmdk-group">Pages</div>';
    html += pages.map(p => `<div class="cmdk-item" data-href="${p.href}">
      <span class="cmdk-item-ico" aria-hidden="true">${p.ico}</span>
      <span class="cmdk-item-main">${p.label}</span>
    </div>`).join('');
  }
  if (!html) html = `<div class="cmdk-empty">${q.length < 2 ? 'Tape au moins 2 caractères…' : 'Aucun résultat'}</div>`;
  box.innerHTML = html;

  items = [...box.querySelectorAll('.cmdk-item')];
  selIndex = 0;
  items[0]?.classList.add('sel');
  items.forEach(it => {
    it.addEventListener('click', () => { location.href = it.dataset.href; close(); });
    it.addEventListener('mousemove', () => {
      items[selIndex]?.classList.remove('sel');
      selIndex = items.indexOf(it);
      it.classList.add('sel');
    });
  });
}

export function openCommandPalette() { open(); }

export function initCommandPalette() {
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open();
    }
  });
}
