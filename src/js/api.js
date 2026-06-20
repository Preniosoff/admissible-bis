// En développement : vide → '/api' (le proxy Vite redirige vers localhost:3001).
// En production : défini au build via la variable VITE_API_BASE
// (ex. https://api.admiscible.fr) dans Cloudflare Pages.
const BASE = (import.meta.env.VITE_API_BASE || '') + '/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

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
