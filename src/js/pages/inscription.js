import '../main.js';
import { api } from '../api.js';

const PROFILES = [
  { id: 'eleve', code: 'EL', title: 'Élève', text: 'Je veux apprendre, m’entraîner et suivre mon niveau.' },
  { id: 'parent', code: 'PAR', title: 'Parent', text: 'Je veux accompagner un élève sans surveiller en continu.' },
  { id: 'enseignant', code: 'ENS', title: 'Enseignant', text: 'Je veux recommander des ressources et préparer une classe.' },
  { id: 'prof_particulier', code: 'PROF', title: 'Prof particulier', text: 'Je veux piloter mes élèves, leurs séances et leurs exercices.' },
  { id: 'etablissement', code: 'ETAB', title: 'Établissement', text: 'Je veux cadrer un usage collectif.' },
];

const GOALS = {
  eleve: [
    ['today', 'Savoir quoi faire maintenant'],
    ['learn', 'Comprendre une notion'],
    ['train', 'M’entraîner au bon niveau'],
    ['follow', 'Suivre mon avancement'],
  ],
  parent: [
    ['understand', 'Comprendre le service'],
    ['report', 'Lire un bilan volontaire'],
    ['support', 'Aider sans mettre la pression'],
  ],
  enseignant: [
    ['sequence', 'Préparer une séquence'],
    ['classe', 'Orienter un groupe'],
    ['resources', 'Trouver des ressources ciblées'],
  ],
  prof_particulier: [
    ['students', 'Suivre plusieurs élèves'],
    ['homework', 'Donner cours et exercices'],
    ['report', 'Exporter un bilan de séance'],
  ],
  etablissement: [
    ['deploy', 'Préparer un pilote'],
    ['rgpd', 'Vérifier données et rôles'],
    ['pilot', 'Voir le pilotage collectif'],
  ],
};

const GOAL_ALIASES = {
  commencer: 'today',
  comprendre: 'learn',
  entrainer: 'train',
  suivre: 'follow',
  bilan: 'report',
  aider: 'support',
  classe: 'classe',
  ressources: 'resources',
  pilote: 'deploy',
  pilotage: 'pilot',
};

const state = {
  step: 0,
  profile: '',
  niveau: '',
  filiere: '',
  goal: '',
  plan: '',
};

let niveaux = [];

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function stepLabel() {
  return ['Profil', 'Niveau', 'Classe', 'Objectif', 'Compte'][state.step] || 'Compte';
}

function renderShell(inner) {
  const root = document.getElementById('signup-app');
  root.innerHTML = `
    <section class="signup-card">
      <a class="signup-logo" href="index.html"><span class="logo-icon" aria-hidden="true"></span> Admiscible</a>
      <div class="signup-progress">
        <span>Étape ${state.step + 1}/5</span>
        <strong>${stepLabel()}</strong>
      </div>
      <div class="signup-bar"><span style="width:${((state.step + 1) / 5) * 100}%"></span></div>
      ${inner}
    </section>`;
}

function renderChoice(title, text, cards) {
  renderShell(`
    <header class="signup-head">
      <h1>${esc(title)}</h1>
      <p>${esc(text)}</p>
    </header>
    <div class="signup-choice-grid ${cards.length > 6 ? 'compact' : ''}">
      ${cards.map(card => `
        <button class="signup-choice" type="button" data-value="${esc(card.id)}">
          <span aria-hidden="true">${esc(card.code || '')}</span>
          <strong>${esc(card.title)}</strong>
          <small>${esc(card.text)}</small>
        </button>`).join('')}
    </div>
    ${state.step > 0 ? '<button class="signup-back" type="button">Retour</button>' : ''}
  `);
  document.querySelectorAll('.signup-choice').forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.value)));
  document.querySelector('.signup-back')?.addEventListener('click', back);
}

function render() {
  if (state.step === 0) {
    renderChoice('Quel espace voulez-vous créer ?', 'Choisissez le rôle principal. Vous pourrez ajuster votre profil ensuite.', PROFILES);
    return;
  }
  if (state.step === 1) {
    renderChoice('Quel niveau concerne ce compte ?', 'Le niveau sert à adapter les textes, les contenus et les recommandations.', niveaux.map(n => ({
      id: n.id,
      code: n.id === 'college' ? 'COL' : n.id === 'lycee' ? 'LYC' : 'CPGE',
      title: n.nom,
      text: `${n.filieres?.length || 0} classes ou filières disponibles`,
    })));
    return;
  }
  if (state.step === 2) {
    const niveau = niveaux.find(n => n.id === state.niveau);
    renderChoice('Quelle classe ou filière ?', 'Cette sélection personnalise les cours et le menu de filière.', (niveau?.filieres || []).map(f => ({
      id: f.id,
      code: 'NIV',
      title: f.nom,
      text: 'Accès direct aux contenus adaptés',
    })));
    return;
  }
  if (state.step === 3) {
    const goals = GOALS[state.profile] || GOALS.eleve;
    renderChoice('Votre premier objectif', 'On garde ce repère pour vous proposer la bonne première page.', goals.map(([id, title]) => ({
      id,
      code: 'OBJ',
      title,
      text: 'Action recommandée après la création',
    })));
    return;
  }
  renderForm();
}

function normalizeGoal(value) {
  return GOAL_ALIASES[value] || value || '';
}

function hydrateFromUrl() {
  const params = new URLSearchParams(location.search);
  const profile = params.get('profile');
  if (FLOWS_PROFILE_IDS().includes(profile)) state.profile = profile;

  const requestedPlan = params.get('plan') || localStorage.getItem('admiscible-pending-plan');
  if (requestedPlan) {
    state.plan = requestedPlan;
    localStorage.setItem('admiscible-pending-plan', requestedPlan);
  }

  const requestedLevel = params.get('level') || params.get('niveau');
  if (requestedLevel && niveaux.some(n => n.id === requestedLevel)) {
    state.niveau = requestedLevel;
  }

  const requestedFiliere = params.get('filiere') || params.get('filiere_id');
  if (requestedFiliere) {
    const matchingLevel = niveaux.find(n => (n.filieres || []).some(f => f.id === requestedFiliere));
    if (matchingLevel) {
      state.niveau = matchingLevel.id;
      state.filiere = requestedFiliere;
    }
  }

  const requestedGoal = normalizeGoal(params.get('goal') || params.get('need'));
  const allowedGoals = GOALS[state.profile]?.map(([id]) => id) || [];
  if (allowedGoals.includes(requestedGoal)) state.goal = requestedGoal;

  if (!state.profile) state.step = 0;
  else if (!state.niveau) state.step = 1;
  else if (!state.filiere) state.step = 2;
  else if (!state.goal) state.step = 3;
  else state.step = 4;
}

function FLOWS_PROFILE_IDS() {
  return PROFILES.map(profile => profile.id);
}

function choose(value) {
  if (state.step === 0) state.profile = value;
  else if (state.step === 1) state.niveau = value;
  else if (state.step === 2) state.filiere = value;
  else if (state.step === 3) state.goal = value;
  if (state.step === 2 && state.goal) state.step = 4;
  else state.step += 1;
  render();
}

function back() {
  state.step = Math.max(0, state.step - 1);
  render();
}

function destination() {
  if (state.profile === 'parent') return 'parents.html';
  if (state.profile === 'enseignant') return 'enseignants.html';
  if (state.profile === 'prof_particulier') return 'prof-particulier.html';
  if (state.profile === 'etablissement') return 'etablissements.html';
  if (state.goal === 'train') return 'ressources.html';
  if (state.goal === 'learn') return `cours.html?filiere=${encodeURIComponent(state.filiere)}`;
  if (state.goal === 'follow') return 'dashboard.html';
  return 'priorites-eleve.html';
}

function nextActionLabel() {
  if (state.plan === 'famille') return 'Après la création, vous serez envoyé vers l’activation Famille.';
  if (state.plan === 'eleve_plus') return 'Après la création, vous pourrez activer le suivi Élève Plus.';
  if (state.plan === 'enseignant_pro') return 'Après la création, vous pourrez activer l’espace Enseignant Pro.';
  if (state.plan === 'prof_particulier_pro') return 'Après la création, vous pourrez activer l’espace Prof particulier Pro.';
  if (state.profile === 'parent') return 'Après la création, vous verrez d’abord ce qui est gratuit et ce que l’espace famille ajoute.';
  if (state.profile === 'enseignant') return 'Après la création, vous commencerez par préparer une séquence ou recommander une ressource.';
  if (state.profile === 'prof_particulier') return 'Après la création, vous pourrez créer un premier élève et préparer la prochaine séance.';
  if (state.goal === 'learn') return 'Après la création, vous arriverez directement sur le cours adapté.';
  if (state.goal === 'train') return 'Après la création, vous commencerez par une ressource d’entraînement.';
  if (state.goal === 'follow') return 'Après la création, vous ouvrirez votre tableau de bord.';
  return 'Après la création, vous aurez une première priorité claire pour aujourd’hui.';
}

function renderForm() {
  const selectedFiliere = niveaux.flatMap(n => n.filieres || []).find(f => f.id === state.filiere);
  const profile = PROFILES.find(p => p.id === state.profile);
  renderShell(`
    <header class="signup-head">
      <h1>Dernière étape</h1>
      <p>${esc(profile?.title)} · ${esc(selectedFiliere?.nom || 'Niveau choisi')} · objectif enregistré.</p>
    </header>
    <aside class="signup-next-action">
      <strong>Votre première action</strong>
      <span>${esc(nextActionLabel())}</span>
    </aside>
    <form class="signup-form" id="signup-form">
      <label>Prénom ou nom affiché<input id="signup-name" required autocomplete="given-name"></label>
      <label>Nom d’utilisateur<input id="signup-username" required autocomplete="username"></label>
      <label>Email de récupération<input id="signup-email" type="email" autocomplete="email"></label>
      <label>Mot de passe<input id="signup-password" type="password" required minlength="6" autocomplete="new-password"></label>
      <label class="signup-check"><input id="signup-adult" type="checkbox" required><span>Je suis majeur(e), ou parent/représentant légal, et j’accepte les CGU et la politique de confidentialité.</span></label>
      <div class="signup-form-actions">
        <button class="signup-back" type="button">Retour</button>
        <button class="signup-submit" type="submit">Créer mon compte</button>
      </div>
      <div class="login-message" id="signup-message"></div>
    </form>
  `);
  document.querySelector('.signup-back')?.addEventListener('click', back);
  document.getElementById('signup-form')?.addEventListener('submit', submit);
}

async function submit(event) {
  event.preventDefault();
  const msg = document.getElementById('signup-message');
  msg.textContent = 'Création du compte...';
  msg.className = 'login-message';
  try {
    const data = await api.register({
      role: state.profile,
      nom: document.getElementById('signup-name').value.trim(),
      username: document.getElementById('signup-username').value.trim(),
      email: document.getElementById('signup-email').value.trim() || undefined,
      password: document.getElementById('signup-password').value,
      filiere_id: state.filiere || null,
      adult_confirmed: document.getElementById('signup-adult').checked,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('admiscible-start-context', JSON.stringify({
      profile: state.profile,
      level: state.niveau,
      need: state.goal,
      updatedAt: new Date().toISOString(),
    }));
    msg.textContent = 'Compte créé. Redirection...';
    msg.className = 'login-message success';
    const requestedPlan = state.plan || localStorage.getItem('admiscible-pending-plan');
    if (requestedPlan) {
      localStorage.removeItem('admiscible-pending-plan');
      setTimeout(() => {
        window.location.href = `abonnement.html?checkout=${encodeURIComponent(requestedPlan)}`;
      }, 550);
      return;
    }
    setTimeout(() => { window.location.href = destination(); }, 550);
  } catch (error) {
    msg.textContent = error.message;
    msg.className = 'login-message error';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    niveaux = await api.getNiveaux();
    hydrateFromUrl();
    render();
  } catch {
    document.getElementById('signup-app').innerHTML = '<div class="signup-loading">Impossible de charger les niveaux.</div>';
  }
});
