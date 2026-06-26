// En développement : vide → '/api' (le proxy Vite redirige vers localhost:3001).
// En production : défini au build via la variable VITE_API_BASE
// (ex. https://api.admiscible.fr) dans Cloudflare Pages.
const BASE = (import.meta.env.VITE_API_BASE || '') + '/api';
const STATIC_BASE = '/static-api';
const LOCAL_USERS_KEY = 'admiscible-local-users';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const method = String(options.method || 'GET').toUpperCase();

  try {
    return await networkRequest(path, options, headers, token);
  } catch (err) {
    const local = await localAuthRequest(path, options, token).catch(() => null);
    if (local !== null) return local;
    if (method === 'GET') {
      const fallback = await staticRequest(path).catch(() => null);
      if (fallback !== null) return fallback;
    }
    throw err;
  }
}

async function networkRequest(path, options, headers, token) {
  const res = await fetch(`${BASE}${path}`, { ...options, headers });

  // Token expiré ou invalide → déconnexion automatique propre
  if (res.status === 401) {
    const isAuthRoute = path.startsWith('/auth/login') || path.startsWith('/auth/register');
    if (!isAuthRoute && token) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Petit délai pour laisser l'erreur remonter si besoin
      setTimeout(() => { window.location.href = 'index.html?session=expired'; }, 150);
    }
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

async function fetchStatic(relativePath) {
  const res = await fetch(`${STATIC_BASE}/${relativePath}`);
  if (!res.ok) throw new Error(`Static API missing: ${relativePath}`);
  return res.json();
}

async function staticRequest(path) {
  const url = new URL(path, window.location.origin);
  const pathname = url.pathname;

  if (pathname === '/niveaux') return fetchStatic('niveaux.json');
  if (pathname === '/coverage') return fetchStatic('coverage.json');

  let match = pathname.match(/^\/filieres\/([^/]+)$/);
  if (match) return fetchStatic(`filieres/${encodeURIComponent(match[1])}.json`);

  match = pathname.match(/^\/filieres\/([^/]+)\/matieres\/([^/]+)\/chapitres$/);
  if (match) return fetchStatic(`chapitres-index/${encodeURIComponent(match[1])}__${encodeURIComponent(match[2])}.json`);

  match = pathname.match(/^\/chapitres\/([^/]+)$/);
  if (match) return fetchStatic(`chapitres/${encodeURIComponent(match[1])}.json`);

  match = pathname.match(/^\/methodes\/([^/]+)$/);
  if (match) return fetchStatic(`methodes/${encodeURIComponent(match[1])}.json`);

  if (pathname === '/methodes') {
    const rows = await fetchStatic('methodes.json');
    const filiere = url.searchParams.get('filiere') || '';
    const matiere = url.searchParams.get('matiere') || '';
    const categorie = url.searchParams.get('categorie') || '';
    return rows
      .filter(row => !filiere || row.filieres?.includes(filiere))
      .filter(row => !matiere || row.matiere_id === matiere)
      .filter(row => !categorie || row.categorie === categorie)
      .sort((a, b) => {
        const ao = Math.min(...(a.chapitres || []).map(c => c.ordre), 999);
        const bo = Math.min(...(b.chapitres || []).map(c => c.ordre), 999);
        return ao - bo || Number(a.ordre || 0) - Number(b.ordre || 0);
      });
  }

  if (pathname === '/ecoles') {
    const rows = await fetchStatic('ecoles.json');
    const q = normalize(url.searchParams.get('q') || '');
    const banque = url.searchParams.get('banque') || '';
    const type = url.searchParams.get('type') || '';
    const sort = url.searchParams.get('sort') || 'rang';
    return rows
      .filter(row => !q || [row.nom, row.ville, row.region].some(value => normalize(value).includes(q)))
      .filter(row => !banque || row.banque === banque)
      .filter(row => !type || row.type === type)
      .sort((a, b) => sort === 'nom'
        ? String(a.nom || '').localeCompare(String(b.nom || ''), 'fr')
        : Number(a.rang || 9999) - Number(b.rang || 9999));
  }

  if (pathname === '/search') {
    const q = normalize(url.searchParams.get('q') || '');
    if (q.length < 2) return [];
    const filiere = url.searchParams.get('filiere') || '';
    const matiere = url.searchParams.get('matiere') || '';
    const type = url.searchParams.get('type') || '';
    const limit = Number(url.searchParams.get('limit') || 50);
    const rows = await fetchStatic('search.json');
    return rows
      .filter(row => !filiere || row.filiere_id === filiere)
      .filter(row => !matiere || row.matiere_id === matiere)
      .filter(row => !type || row.type === type)
      .filter(row => normalize(`${row.titre || ''} ${row.contenu || ''}`).includes(q))
      .slice(0, limit);
  }

  return null;
}

async function localAuthRequest(path, options = {}, token = '') {
  const method = String(options.method || 'GET').toUpperCase();
  const url = new URL(path, window.location.origin);
  const pathname = url.pathname;
  const body = options.body ? JSON.parse(options.body) : {};

  if (pathname === '/auth/register' && method === 'POST') {
    const users = readLocalUsers();
    const username = String(body.username || '').trim();
    if (!username) throw new Error('Nom d’utilisateur requis.');
    if (users.some(u => normalize(u.username) === normalize(username))) {
      throw new Error('Ce nom d’utilisateur existe déjà sur cet appareil.');
    }
    const user = {
      id: Date.now(),
      username,
      nom: String(body.nom || username).trim(),
      email: String(body.email || '').trim(),
      role: String(body.role || 'eleve'),
      plan: localPlanForRole(body.role),
      filiere_id: body.filiere_id || null,
      local_only: true,
      created_at: new Date().toISOString(),
    };
    users.push({ ...user, password: String(body.password || '') });
    writeLocalUsers(users);
    return { token: localToken(user.id), user };
  }

  if (pathname === '/auth/login' && method === 'POST') {
    const users = readLocalUsers();
    const username = String(body.username || '').trim();
    const password = String(body.password || '');
    const found = users.find(u => normalize(u.username) === normalize(username) && String(u.password || '') === password);
    if (!found) throw new Error('Compte introuvable sur cet appareil.');
    const { password: _password, ...user } = found;
    return { token: localToken(user.id), user };
  }

  if (pathname === '/auth/me' && method === 'GET' && isLocalToken(token)) {
    const user = localUserFromToken(token);
    if (!user) throw new Error('Session locale introuvable.');
    return user;
  }

  if (pathname === '/auth/profile' && method === 'PUT' && isLocalToken(token)) {
    const current = localUserFromToken(token);
    if (!current) throw new Error('Session locale introuvable.');
    const users = readLocalUsers().map(user => {
      if (Number(user.id) !== Number(current.id)) return user;
      return {
        ...user,
        nom: body.nom ?? user.nom,
        email: body.email ?? user.email,
        filiere_id: body.filiere_id ?? user.filiere_id,
      };
    });
    writeLocalUsers(users);
    const updated = localUserFromToken(token);
    localStorage.setItem('user', JSON.stringify(updated));
    return { user: updated };
  }

  if (pathname === '/auth/password' && method === 'PUT' && isLocalToken(token)) {
    const current = localUserFromToken(token);
    if (!current) throw new Error('Session locale introuvable.');
    const users = readLocalUsers();
    const target = users.find(user => Number(user.id) === Number(current.id));
    if (!target || String(target.password || '') !== String(body.current || '')) {
      throw new Error('Mot de passe actuel incorrect.');
    }
    target.password = String(body.nouveau || '');
    writeLocalUsers(users);
    return { ok: true };
  }

  if (pathname === '/auth/forgot' && method === 'POST') {
    return { email_sent: false, local_only: true };
  }

  if (pathname === '/auth/reset' && method === 'POST') {
    throw new Error('La réinitialisation nécessite le serveur de production.');
  }

  if (pathname === '/billing/checkout' && method === 'POST' && isLocalToken(token)) {
    const plan = String(body.plan || '');
    return { url: `abonnement-succes.html?demo=1&plan=${encodeURIComponent(plan)}` };
  }

  if (pathname.startsWith('/billing/checkout-session/') && method === 'GET' && isLocalToken(token)) {
    const user = localUserFromToken(token);
    return { ok: true, status: 'paid', user };
  }

  return null;
}

function readLocalUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]');
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function writeLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

function localToken(id) {
  return `local-session-${id}`;
}

function isLocalToken(token) {
  return String(token || '').startsWith('local-session-');
}

function localUserFromToken(token) {
  const id = String(token || '').replace('local-session-', '');
  const found = readLocalUsers().find(user => String(user.id) === id);
  if (!found) return null;
  const { password: _password, ...user } = found;
  return user;
}

function localPlanForRole(role) {
  if (role === 'parent') return 'family';
  if (role === 'prof_particulier') return 'tutor';
  if (role === 'enseignant' || role === 'etablissement') return 'pro';
  return 'personal';
}

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export const api = {
  getNiveaux: () => request('/niveaux'),
  getCoverage: () => request('/coverage'),
  getFiliere: (id) => request(`/filieres/${id}`),
  getChapitres: (filiere, matiere) => request(`/filieres/${filiere}/matieres/${matiere}/chapitres`),
  getChapitre: (id) => request(`/chapitres/${id}`),
  search: (q, filiere, matiere) => request(`/search?q=${encodeURIComponent(q)}&filiere=${filiere || ''}&matiere=${matiere || ''}`),
  searchAdvanced: ({ q, filiere, matiere, type, limit } = {}) => {
    const params = new URLSearchParams();
    params.set('q', q || '');
    if (filiere) params.set('filiere', filiere);
    if (matiere) params.set('matiere', matiere);
    if (type) params.set('type', type);
    if (limit) params.set('limit', String(limit));
    return request(`/search?${params.toString()}`);
  },
  getEcoles: (q, sort) => request(`/ecoles?q=${encodeURIComponent(q || '')}&sort=${sort || 'rang'}`),
  getMethodes: (filiere, matiere, categorie) => request(`/methodes?filiere=${filiere || ''}&matiere=${matiere || ''}&categorie=${categorie || ''}`),
  getMethode: (id) => request(`/methodes/${id}`),
  getProgression: () => request('/progression'),
  getReviewToday: () => request('/review/today'),
  updateProgression: (carteId, status) => request(`/progression/${carteId}`, { method: 'PUT', body: JSON.stringify({ status }) }),
  getElo: () => request('/elo'),
  evaluateExercise: (data) => request('/elo/evaluate', { method: 'POST', body: JSON.stringify(data) }),
  getDashboard: () => request('/dashboard/stats'),
  getTodos: () => request('/todos'),
  createTodo: (data) => request('/todos', { method: 'POST', body: JSON.stringify(data) }),
  updateTodo: (id, data) => request(`/todos/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteTodo: (id) => request(`/todos/${id}`, { method: 'DELETE' }),
  getTemplates: () => request('/schedule-templates'),
  getTemplate: (id) => request(`/schedule-templates/${id}`),
  getSchedules: () => request('/schedules'),
  createSchedule: (data) => request('/schedules', { method: 'POST', body: JSON.stringify(data) }),
  updateSchedule: (id, data) => request(`/schedules/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteSchedule: (id) => request(`/schedules/${id}`, { method: 'DELETE' }),
  login: (username, password) => request('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  forgotPassword: (username) => request('/auth/forgot', { method: 'POST', body: JSON.stringify({ username }) }),
  resetPassword: (code, password) => request('/auth/reset', { method: 'POST', body: JSON.stringify({ code, password }) }),
  getMe: () => request('/auth/me'),
  updateProfile: (data) => request('/auth/profile', { method: 'PUT', body: JSON.stringify(data) }),
  changePassword: (current, nouveau) => request('/auth/password', { method: 'PUT', body: JSON.stringify({ current, nouveau }) }),
  createCheckoutSession: (plan) => request('/billing/checkout', { method: 'POST', body: JSON.stringify({ plan }) }),
  verifyCheckoutSession: (id) => request(`/billing/checkout-session/${encodeURIComponent(id)}`),
  getFocusStats: () => request('/focus/stats'),
  saveFocusSession: (data) => request('/focus/sessions', { method: 'POST', body: JSON.stringify(data) }),
  getGrades: () => request('/grades'),
  addGrade: (data) => request('/grades', { method: 'POST', body: JSON.stringify(data) }),
  deleteGrade: (id) => request(`/grades/${id}`, { method: 'DELETE' }),
  getErreurs: () => request('/erreurs'),
  addErreur: (data) => request('/erreurs', { method: 'POST', body: JSON.stringify(data) }),
  updateErreur: (id, data) => request(`/erreurs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteErreur: (id) => request(`/erreurs/${id}`, { method: 'DELETE' }),
};
