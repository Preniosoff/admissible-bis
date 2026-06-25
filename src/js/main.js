import '../css/tokens.css';
import '../css/base.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/pages.css';
import '../css/neo.css';
import { initTheme } from './theme.js';
import { initAuthUI, getUser } from './auth.js';
import { api } from './api.js';
import { resumeTutorialIfActive, startTutorial } from './tutorial.js';
import { initFocusWidget } from './focus-widget.js';
import { toast } from './toast.js';
import { initFooter } from './footer.js';
import { initCookieConsent } from './cookie-consent.js';
import { initCommandPalette } from './command-palette.js';
import { initMobileDock } from './mobile-dock.js';
import { initSideRail } from './side-rail.js';
import { openCommandPalette } from './command-palette.js';

document.addEventListener('DOMContentLoaded', () => {
  initSkipLink();
  initTheme();
  initAuthUI();
  initPublicsNav();
  initNav();
  initFiliereNav();
  initLevelTone();
  resumeTutorialIfActive();
  initFocusWidget();
  initFooter();
  initCookieConsent();
  initCommandPalette();
  initMobileDock();
  initSideRail();
  initNavSearchButton();
  initFreemiumAccess();
  initConnectedHome();
  initHomeDecision();
  initResumeStrip();

  // Session expirée → toast d'info
  if (new URLSearchParams(window.location.search).get('session') === 'expired') {
    setTimeout(() => toast('La session a expiré. Veuillez vous reconnecter.', 'info', 5000), 400);
    // Nettoyer l'URL sans recharger
    history.replaceState({}, '', window.location.pathname);
  }
  initHelpButton();
});

function initSkipLink() {
  if (document.querySelector('.skip-link')) return;
  const main = document.querySelector('main')
    || document.querySelector('#content-container')
    || document.querySelector('#dashboard-content')
    || document.querySelector('#schedule-content')
    || document.querySelector('#todos-content')
    || document.querySelector('#focus-content')
    || document.querySelector('#notes-content')
    || document.querySelector('#erreurs-app')
    || document.querySelector('#profil-content')
    || document.querySelector('.wrap');
  if (!main) return;
  if (!main.id) main.id = 'contenu';
  const link = document.createElement('a');
  link.className = 'skip-link';
  link.href = `#${main.id}`;
  link.textContent = 'Aller au contenu';
  document.body.prepend(link);
}

function initNavSearchButton() {
  const navRight = document.querySelector('.nav-right');
  if (!navRight || document.getElementById('nav-search-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'nav-search-btn';
  btn.className = 'nav-search-btn';
  btn.title = 'Recherche rapide (Cmd+K)';
  btn.innerHTML = '<span aria-hidden="true">⌕</span> <span>Rechercher</span> <kbd>⌘K</kbd>';
  btn.addEventListener('click', openCommandPalette);
  navRight.prepend(btn);
}

const HOME_DECISIONS = {
  eleve: {
    start: {
      title: 'Priorités du jour',
      text: 'Commencez par trois actions courtes : comprendre, appliquer, corriger.',
      href: 'inscription.html?profile=eleve&need=today',
    },
    learn: {
      title: 'Cours puis méthode',
      text: 'Choisissez le niveau, ouvrez une fiche de cours, puis vérifiez avec une méthode.',
      href: 'inscription.html?profile=eleve&need=learn',
    },
    train: {
      title: 'Exercices ciblés',
      text: 'Partez d’un exercice court, corrigez immédiatement et gardez l’erreur importante.',
      href: 'inscription.html?profile=eleve&need=train',
    },
    report: {
      title: 'Bilan personnel',
      text: 'Ouvrez votre tableau de bord ou préparez une synthèse volontaire.',
      href: 'dashboard.html',
    },
  },
  parent: {
    start: {
      title: 'Cadre parent',
      text: 'Comprendre le rôle du service et accompagner sans surveiller en continu.',
      href: 'inscription.html?profile=parent&need=understand',
    },
    report: {
      title: 'Bilan volontaire',
      text: 'Préparer une synthèse courte, lisible et imprimable.',
      href: 'inscription.html?profile=parent&need=report',
    },
    learn: {
      title: 'Comprendre les contenus',
      text: 'Voir comment cours, méthodes et exercices s’articulent dans le travail.',
      href: 'parents.html',
    },
  },
  enseignant: {
    start: {
      title: 'Séquence courte',
      text: 'Préparer un objectif, une ressource, une activité et une trace de travail.',
      href: 'inscription.html?profile=enseignant&need=sequence',
    },
    sequence: {
      title: 'Séquence pédagogique',
      text: 'Ouvrir les modèles de séance et recommander une ressource.',
      href: 'inscription.html?profile=enseignant&need=sequence',
    },
    train: {
      title: 'Ressources ciblées',
      text: 'Trouver des exercices pour une consolidation ou une remédiation.',
      href: 'recherche.html?type=ex',
    },
    report: {
      title: 'Bilan de classe local',
      text: 'Utiliser l’espace enseignant pour préparer un export imprimable.',
      href: 'inscription.html?profile=enseignant&need=class',
    },
  },
  etablissement: {
    start: {
      title: 'Cadre de déploiement',
      text: 'Commencer par les rôles, les données, les limites et les responsabilités.',
      href: 'inscription.html?profile=etablissement&need=deploy',
    },
    deploy: {
      title: 'Déploiement documenté',
      text: 'Vérifier les étapes, la matrice RGPD et les indicateurs collectifs.',
      href: 'inscription.html?profile=etablissement&need=deploy',
    },
    report: {
      title: 'Pilotage anonymisé',
      text: 'Consulter une vue collective sans classement nominatif.',
      href: 'inscription.html?profile=etablissement&need=pilot',
    },
  },
};

function initHomeDecision() {
  const form = document.getElementById('home-decision-form');
  const profile = document.getElementById('home-profile');
  const level = document.getElementById('home-level');
  const need = document.getElementById('home-need');
  const result = document.getElementById('home-decision-result');
  if (!form || !profile || !level || !need || !result) return;

  function update() {
    const profileValue = profile.value;
    const needValue = need.value;
    const levelValue = level.value;
    const group = HOME_DECISIONS[profileValue] || HOME_DECISIONS.eleve;
    const decision = group[needValue] || group.start || HOME_DECISIONS.eleve.start;
    const join = decision.href.includes('?') ? '&' : '?';
    const href = `${decision.href}${decision.href.includes('level=') ? '' : `${join}level=${encodeURIComponent(levelValue)}`}`;
    result.innerHTML = `
      <strong>${decision.title}</strong>
      <p>${decision.text}</p>
      <a class="home-btn primary" href="${href}">Ouvrir l’action recommandée</a>`;
    try {
      localStorage.setItem('admiscible-start-context', JSON.stringify({
        profile: profileValue,
        level: levelValue,
        need: needValue,
        updatedAt: new Date().toISOString(),
      }));
    } catch {}
  }

  [profile, level, need].forEach(select => select.addEventListener('change', update));
  update();
}

function initResumeStrip() {
  if (document.querySelector('.resume-strip')) return;
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  if (!nav || !main) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'demarrer.html' || page === 'onboarding.html') return;

  const user = getUser();
  if (!user) return;
  if ((page === 'index.html' || page === '') && document.documentElement.classList.contains('home-connected')) return;

  let context = null;
  try { context = JSON.parse(localStorage.getItem('admiscible-start-context') || 'null'); } catch {}
  if (!context?.profile) return;

  const labels = {
    eleve: 'Élève',
    parent: 'Parent',
    enseignant: 'Enseignant',
    etablissement: 'Établissement',
    college: 'Collège',
    lycee: 'Lycée',
    cpge: 'Classes préparatoires',
    collectif: 'Usage collectif',
    start: 'commencer',
    today: 'priorités du jour',
    learn: 'comprendre une notion',
    train: 's’entraîner',
    report: 'bilan clair',
    sequence: 'séquence',
    deploy: 'déploiement',
    pilot: 'pilotage',
  };
  const href = 'parcours.html';
  const strip = document.createElement('div');
  strip.className = 'resume-strip';
  strip.innerHTML = `
    <div>
      <strong>Reprendre votre parcours</strong>
      <span>${labels[context.profile] || context.profile}${context.level ? ` · ${labels[context.level] || context.level}` : ''}${context.need ? ` · ${labels[context.need] || context.need}` : ''}</span>
    </div>
    <a href="${href}">Continuer</a>
    <button type="button" aria-label="Masquer ce rappel">×</button>`;
  strip.querySelector('button')?.addEventListener('click', () => {
    try { localStorage.removeItem('admiscible-start-context'); } catch {}
    strip.remove();
  });
  nav.after(strip);
}

function getCurrentFiliereId() {
  const params = new URLSearchParams(location.search);
  const fromUrl = params.get('filiere');
  if (fromUrl) return fromUrl;
  return getUser()?.filiere_id || '';
}

function getLevelTone(filiereId) {
  if (['6eme', '5eme'].includes(filiereId)) return 'junior';
  if (['4eme', '3eme'].includes(filiereId)) return 'college';
  if (['2nde', '1ere-gen', 'term-gen', 'term-spe-maths', 'term-spe-pc', 'term-spe-si', 'term-spe-nsi'].includes(filiereId)) return 'lycee';
  if (['mpsi', 'mp', 'pcsi', 'pc', 'psi', 'ptsi', 'pt', 'mpi', 'tsi', 'bcpst'].includes(filiereId)) return 'prepa';
  return '';
}

function filiereLabelFromId(id) {
  const labels = {
    '6eme': 'Sixième',
    '5eme': 'Cinquième',
    '4eme': 'Quatrième',
    '3eme': 'Troisième',
    '2nde': 'Seconde',
    '1ere-gen': 'Première',
    'term-gen': 'Terminale',
    'term-spe-maths': 'Terminale maths',
    'term-spe-pc': 'Terminale physique-chimie',
    mpsi: 'MPSI',
    mp: 'MP',
    pcsi: 'PCSI',
    pc: 'PC',
    psi: 'PSI',
    ptsi: 'PTSI',
    pt: 'PT',
    mpi: 'MPI',
    tsi: 'TSI',
    bcpst: 'BCPST',
  };
  return labels[id] || String(id || '').toUpperCase();
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function initLevelTone() {
  const tone = getLevelTone(getCurrentFiliereId());
  if (!tone) return;
  document.documentElement.dataset.levelTone = tone;

  const page = location.pathname.split('/').pop() || 'index.html';
  const pages = ['methodes.html', 'ressources.html', 'recherche.html'];
  if (!pages.includes(page)) return;
  const main = document.querySelector('main') || document.querySelector('#content-container');
  const nav = document.querySelector('nav');
  if (!main || !nav || document.querySelector('.level-tone-strip')) return;

  const copy = {
    junior: ['Lecture accompagnée', 'Phrases plus aérées, étapes visibles et vocabulaire moins dense pour avancer sans se perdre.'],
    college: ['Collège', 'Les contenus mettent l’accent sur la méthode, la justification et les automatismes à consolider.'],
    lycee: ['Lycée', 'Les repères aident à relier le cours, les exercices et les choix d’orientation.'],
    prepa: ['CPGE', 'Affichage plus dense, focalisé sur les hypothèses, les méthodes et les points de vigilance.'],
  }[tone];

  const strip = document.createElement('div');
  strip.className = 'level-tone-strip';
  strip.innerHTML = `<strong>${copy[0]}</strong><span>${copy[1]}</span><a href="attendus-officiels.html">Voir les attendus</a>`;
  nav.after(strip);
}

function initPublicsNav() {
  // La navigation principale est désormais normalisée par initPrimaryResourceNav().
}

function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  initPrimaryResourceNav(nav);
  initFiliereLabel();
  initActiveNav(nav);
  initEspaceDropdown();
  initHamburger(nav);
  initOutsideClose();
}

function initPrimaryResourceNav(nav) {
  const links = nav.querySelector('.nav-links');
  if (!links) return;

  links.innerHTML = `
    <li><a href="index.html">Accueil</a></li>
    <li><a href="cours.html">Cours</a></li>
    <li><a href="methodes.html">Méthodes</a></li>
    <li><a href="ressources.html">Exercices</a></li>
    <li class="has-dd">
      <a href="annales.html">Annales <span class="caret">&#9662;</span></a>
      <div class="dd">
        <a href="annales.html">Annales concours</a>
        <a href="annales-bac.html">Annales bac</a>
        <a href="annales-brevet.html">Annales brevet</a>
      </div>
    </li>
    <li><a href="orientation.html">Orientation</a></li>
    <li><a href="abonnement.html">Offres</a></li>
    <li class="has-dd">
      <a href="eleves.html">Espaces <span class="caret">&#9662;</span></a>
      <div class="dd">
        <a href="eleves.html">Élèves</a>
        <a href="parents.html">Parents</a>
        <a href="famille.html">Famille</a>
        <a href="enseignants.html">Enseignants</a>
        <a href="etablissements.html">Établissements</a>
      </div>
    </li>
    <li class="has-dd">
      <a href="recherche.html">Ressources <span class="caret">&#9662;</span></a>
      <div class="dd">
        <a href="recherche.html">Recherche</a>
        <a href="concours.html">Concours et écoles</a>
        <a href="attendus-officiels.html">Attendus officiels</a>
        <a href="sources-programmes.html">Sources et programmes</a>
        <a href="notre-methode.html">Notre méthode</a>
        <a href="aide.html">Aide</a>
        <a href="plan-site.html">Plan du site</a>
      </div>
    </li>
  `;
}

function getAnnalesResourceLinks() {
  return [
    ['annales.html', 'Annales concours'],
    ['annales-bac.html', 'Annales bac'],
    ['annales-brevet.html', 'Annales brevet'],
  ];
}

function initActiveNav(nav) {
  const current = location.pathname.split('/').pop() || 'index.html';
  const matchGroups = {
    'index.html': ['index.html'],
    'inscription.html': ['inscription.html', 'choisir-niveau.html', 'onboarding.html'],
    'abonnement.html': ['abonnement.html'],
    'orientation.html': ['orientation.html'],
    'cours.html': ['cours.html'],
    'methodes.html': ['methodes.html'],
    'ressources.html': ['ressources.html'],
    'annales.html': ['annales.html', 'annales-bac.html', 'annales-brevet.html'],
    'eleves.html': ['eleves.html', 'parents.html', 'famille.html', 'enseignants.html', 'etablissements.html', 'priorites-eleve.html', 'bilan-parent.html', 'espace-enseignant.html', 'sequences-pedagogiques.html', 'pilotage-etablissement.html', 'deploiement-etablissement.html'],
    'recherche.html': ['recherche.html', 'concours.html', 'attendus-officiels.html', 'sources-programmes.html', 'notre-methode.html', 'etat-contenus.html', 'fiche-presentation.html', 'a-propos.html', 'transparence.html', 'conformite-dsfr.html', 'securite.html', 'connexion-institutionnelle.html', 'contact-signalement.html', 'statut-service.html', 'accessibilite.html', 'aide.html', 'plan-site.html', 'matrice-rgpd.html'],
  };

  nav.querySelectorAll('.nav-links > li > a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const target = href.split('?')[0].split('#')[0];
    const isActive = (matchGroups[target] || [target]).includes(current);
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

const PAID_ACCESS = {
  personal: {
    label: 'Espace personnel',
    pages: ['dashboard.html', 'parcours.html', 'schedule.html', 'todos.html', 'focus.html', 'notes.html', 'erreurs.html', 'priorites-eleve.html'],
    title: 'Passez du contenu au vrai suivi de travail.',
    text: 'Les cours, méthodes, exercices et annales restent gratuits. L’abonnement ajoute le tableau de bord, les priorités, le planning, les notes, le timer et le cahier d’erreurs pour travailler avec méthode.',
  },
  parent: {
    label: 'Espace parent',
    pages: ['parents.html', 'bilan-parent.html', 'famille.html'],
    title: 'Un cadre clair pour accompagner sans surveiller.',
    text: 'Les contenus restent consultables gratuitement. L’accès famille ajoute les bilans volontaires, les priorités de plusieurs élèves et une lecture simple des traces de travail.',
  },
};

function getAccessKindForPage(page) {
  return Object.values(PAID_ACCESS).find(kind => kind.pages.includes(page)) || null;
}

function hasPaidAccess(user, kind) {
  const plan = user?.plan || 'free';
  if (plan === 'premium' || plan === 'pro' || plan === 'admin') return true;
  if (kind?.label === 'Espace personnel') return ['personal', 'family'].includes(plan);
  if (kind?.label === 'Espace parent') return ['parent', 'family'].includes(plan);
  return false;
}

function initFreemiumAccess() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const kind = getAccessKindForPage(page);
  if (!kind) return;
  const user = getUser();
  if (hasPaidAccess(user, kind)) return;

  const main = document.querySelector('main') || document.body;
  main.innerHTML = `
    <section class="paywall-shell" aria-labelledby="paywall-title">
      <div class="paywall-card">
        <div class="paywall-kicker">${kind.label}</div>
        <h1 id="paywall-title">${kind.title}</h1>
        <p>${kind.text}</p>
        <div class="paywall-free">
          <strong>Disponible gratuitement</strong>
          <span>Cours, méthodes, exercices, annales, concours, orientation et recherche.</span>
        </div>
        <div class="paywall-premium">
          <strong>Avec l’abonnement</strong>
          <span>Un espace guidé pour organiser, suivre et reprendre le travail sans repartir de zéro.</span>
        </div>
        <div class="paywall-actions">
          <a class="neo-cta" href="abonnement.html">Voir l’abonnement</a>
          <a class="connected-btn connected-btn-secondary" href="cours.html">Continuer gratuitement</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Dynamic filière label (kept for compat) ── */
function initFiliereLabel() {}

/* ── Mon espace click-to-toggle dropdown ── */
function initEspaceDropdown() {
  const btn = document.getElementById('espace-btn');
  const dd = document.getElementById('espace-dd');
  if (!btn || !dd) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dd.classList.toggle('open');
  });

}

/* ── Hamburger menu for mobile ── */
function initHamburger(nav) {
  const links = nav.querySelector('.nav-links');
  if (!links) return;

  const btn = document.createElement('button');
  btn.className = 'hamburger';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = ICON_MENU;
  nav.insertBefore(btn, links);

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
  });

  // Mobile: tap parent dropdown items to expand sub-menus
  links.querySelectorAll('.has-dd > a').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth > 1320) return;
      e.preventDefault();
      const dd = trigger.nextElementSibling;
      if (!dd) return;
      // Close other open subs
      links.querySelectorAll('.dd.mobile-open').forEach(o => {
        if (o !== dd) o.classList.remove('mobile-open');
      });
      dd.classList.toggle('mobile-open');
    });
  });

  // Close menu when a real link is clicked
  links.addEventListener('click', (e) => {
    if (e.target.closest('a') && !e.target.closest('.has-dd > a')) {
      links.classList.remove('open');
      links.querySelectorAll('.dd.mobile-open').forEach(d => d.classList.remove('mobile-open'));
      btn.innerHTML = ICON_MENU;
    }
  });
}

/* ── Close dropdowns on outside click ── */
function initOutsideClose() {
  document.addEventListener('click', (e) => {
    // Close "Mon espace" dropdown
    const dd = document.getElementById('espace-dd');
    if (dd?.classList.contains('open') && !e.target.closest('.nav-espace')) {
      dd.classList.remove('open');
    }
  });
}

const ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6"/></svg>';

/* ── Hybrid filière nav ── */
async function initFiliereNav() {
  // L'ancien menu par filière a été remplacé par les entrées Cours, Méthodes et Exercices.
}

function initConnectedHome() {
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page !== 'index.html' && page !== '') return;
  const user = getUser();
  const main = document.querySelector('.home-main');
  if (!user || !main) return;

  const filiereId = user.filiere_id || '';
  const filiereLabel = filiereLabelFromId(filiereId);
  const firstName = String(user.nom || user.username || '').trim().split(/\s+/)[0] || 'vous';
  const courseHref = filiereId ? `cours.html?filiere=${encodeURIComponent(filiereId)}` : 'cours.html';
  const methodHref = filiereId ? `methodes.html?filiere=${encodeURIComponent(filiereId)}` : 'methodes.html';
  const exerciseHref = filiereId ? `ressources.html?filiere=${encodeURIComponent(filiereId)}` : 'ressources.html';
  const canUsePersonalSpace = hasPaidAccess(user, PAID_ACCESS.personal);
  const primaryHref = canUsePersonalSpace ? 'parcours.html' : 'abonnement.html';
  const primaryText = canUsePersonalSpace ? 'Reprendre mon parcours' : 'Voir l’abonnement';
  const focusHref = canUsePersonalSpace ? 'priorites-eleve.html' : 'abonnement.html';
  const focusText = canUsePersonalSpace ? 'Créer mes priorités' : 'S’abonner au suivi';

  document.documentElement.classList.add('home-connected');
  main.innerHTML = `
    <section class="connected-home" aria-labelledby="connected-home-title">
      <div class="connected-home-inner">
        <div class="connected-hero">
          <div class="connected-kicker">Accueil personnel</div>
          <h1 id="connected-home-title">Bonjour ${escapeHtml(firstName)}.</h1>
          <p>Un point d’entrée simple pour reprendre le travail, sans bruit autour.</p>
          <div class="connected-primary-actions">
            <a class="connected-btn connected-btn-primary" href="${primaryHref}">${primaryText}</a>
            <a class="connected-btn connected-btn-secondary" href="${courseHref}">Ouvrir les cours</a>
          </div>
        </div>

        <aside class="connected-focus" aria-label="Action conseillée">
          <span>À faire maintenant</span>
          <strong>${canUsePersonalSpace ? 'Choisir une seule action de travail' : 'Débloquer le suivi personnel'}</strong>
          <p>${canUsePersonalSpace ? `${filiereLabel ? `${escapeHtml(filiereLabel)} · ` : ''}Cours, méthode, exercice ou erreur à corriger.` : 'Les contenus restent gratuits. L’abonnement transforme votre travail en parcours suivi : priorités, planning, notes et cahier d’erreurs.'}</p>
          <a href="${focusHref}">${focusText}</a>
        </aside>

        <div class="connected-actions" aria-label="Accès rapides">
          <a href="${courseHref}" class="connected-action">
            <span>Cours</span>
            <strong>Apprendre</strong>
          </a>
          <a href="${methodHref}" class="connected-action">
            <span>Méthodes</span>
            <strong>Comprendre la démarche</strong>
          </a>
          <a href="${exerciseHref}" class="connected-action">
            <span>Exercices</span>
            <strong>S’entraîner</strong>
          </a>
          <a href="erreurs.html" class="connected-action">
            <span>Cahier d’erreurs</span>
            <strong>Corriger</strong>
          </a>
        </div>

        <div class="connected-bottom">
          <a href="dashboard.html">Tableau de bord</a>
          <a href="schedule.html">Emploi du temps</a>
          <a href="notes.html">Notes</a>
          <a href="focus.html">Timer</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Bouton aide "?" — toutes pages ── */
function initHelpButton() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // N'injecter qu'une fois
  if (nav.querySelector('.nav-help-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'nav-help-btn';
  btn.setAttribute('title', 'Aide contextuelle');
  btn.setAttribute('aria-label', 'Ouvrir l’aide contextuelle');
  btn.textContent = '?';
  btn.addEventListener('click', openContextHelp);

  // Insérer avant le bouton thème
  const themeBtn = nav.querySelector('.theme-toggle');
  if (themeBtn) themeBtn.before(btn);
  else nav.querySelector('.nav-right')?.appendChild(btn);
}

const PAGE_HELP = {
  'index.html': {
    title: 'Accueil',
    text: 'Commencez par le module d’orientation : profil, niveau, besoin. Il calcule l’action la plus utile.',
    actions: [
      ['Créer un compte guidé', 'inscription.html'],
      ['Recherche précise', 'recherche.html'],
    ],
  },
  'demarrer.html': {
    title: 'Démarrer',
    text: 'Cette page reste disponible comme aiguillage public. Pour personnaliser durablement le site, utilisez la création de compte guidée.',
    actions: [
      ['Compte élève', 'inscription.html?profile=eleve'],
      ['Compte enseignant', 'inscription.html?profile=enseignant'],
    ],
  },
  'recherche.html': {
    title: 'Recherche',
    text: 'Utilisez d’abord une recherche fréquente, puis ajustez le niveau, la matière ou le type de contenu.',
    actions: [
      ['Cours', 'cours.html'],
      ['Méthodes', 'methodes.html'],
    ],
  },
  'orientation.html': {
    title: 'Orientation',
    text: 'Choisissez d’abord votre étape : collège, lycée ou post-bac. Chaque bloc renvoie vers des ressources publiques de référence.',
    actions: [
      ['Attendus officiels', 'attendus-officiels.html'],
      ['Explorer les écoles', 'concours.html'],
    ],
  },
  'attendus-officiels.html': {
    title: 'Attendus officiels',
    text: 'Commencez par votre niveau, puis transformez les attendus en gestes de travail : chercher, raisonner, calculer, expliquer.',
    actions: [
      ['Cours', 'cours.html'],
      ['Orientation', 'orientation.html'],
    ],
  },
  'eleves.html': {
    title: 'Espace élève',
    text: 'La priorité est de sortir avec une trace : notion comprise, exercice corrigé ou erreur reformulée.',
    actions: [
      ['Priorités du jour', 'priorites-eleve.html'],
      ['Choisir mon niveau', 'choisir-niveau.html'],
    ],
  },
  'parents.html': {
    title: 'Espace parent',
    text: 'L’objectif est d’accompagner sans surveiller : comprendre le cadre puis lire un bilan volontaire.',
    actions: [
      ['Bilan volontaire', 'bilan-parent.html'],
      ['Données et garanties', 'matrice-rgpd.html'],
    ],
  },
  'enseignants.html': {
    title: 'Espace enseignant',
    text: 'Construisez une action pédagogique courte : objectif, ressource, activité, trace.',
    actions: [
      ['Séquences', 'sequences-pedagogiques.html'],
      ['Espace enseignant', 'espace-enseignant.html'],
    ],
  },
  'etablissements.html': {
    title: 'Espace établissement',
    text: 'Commencez par un pilote limité : périmètre, rôles, garanties, indicateurs agrégés.',
    actions: [
      ['Déploiement', 'deploiement-etablissement.html'],
      ['Matrice RGPD', 'matrice-rgpd.html'],
    ],
  },
};

function openContextHelp() {
  document.querySelector('.context-help-overlay')?.remove();
  const page = location.pathname.split('/').pop() || 'index.html';
  const help = PAGE_HELP[page] || {
    title: 'Aide',
    text: 'Repérez l’action principale de la page, puis utilisez la recherche ou la création de compte guidée si vous êtes perdu.',
    actions: [
      ['Créer un compte guidé', 'inscription.html'],
      ['Plan du site', 'plan-site.html'],
    ],
  };
  const overlay = document.createElement('div');
  overlay.className = 'context-help-overlay';
  overlay.innerHTML = `
    <section class="context-help" role="dialog" aria-modal="true" aria-labelledby="context-help-title">
      <button class="context-help-close" type="button" aria-label="Fermer">×</button>
      <span class="context-help-kicker">Aide contextuelle</span>
      <h2 id="context-help-title">${help.title}</h2>
      <p>${help.text}</p>
      <div class="context-help-actions">
        ${help.actions.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </div>
      <button class="context-help-tour" type="button">Lancer le guide interactif</button>
    </section>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));
  const closeHelp = () => {
    overlay.classList.remove('visible');
    overlay.classList.add('closing');
    setTimeout(() => overlay.remove(), 220);
  };
  overlay.querySelector('.context-help-close')?.addEventListener('click', closeHelp);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeHelp(); });
  overlay.querySelector('.context-help-tour')?.addEventListener('click', () => {
    closeHelp();
    startTutorial();
  });
}
