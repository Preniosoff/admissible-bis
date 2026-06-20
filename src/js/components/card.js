import { api } from '../api.js';
import { getToken } from '../auth.js';
import { toast } from '../toast.js';

let progressionCache = null;

export async function loadProgression() {
  if (!getToken()) return;
  try {
    const rows = await api.getProgression();
    progressionCache = {};
    for (const r of rows) progressionCache[r.carte_id] = r.status;
  } catch { /* not logged in */ }
}

function getStatus(carteId) {
  return progressionCache?.[carteId] || 'todo';
}

const statusLabels = { todo: 'Ajouter aux actions', en_cours: 'En cours', maitrise: 'Maîtrisé' };
const statusColors = { todo: 'var(--text-3)', en_cours: 'var(--accent)', maitrise: 'var(--positive)' };
const statusNext = { todo: 'en_cours', en_cours: 'maitrise', maitrise: 'todo' };
const CONTENT_UPDATED = 'Juin 2026';

function formatLabel(carte) {
  const label = carte.label || '';
  const titre = carte.titre || '';
  if (label && titre) return `${label} — ${titre}`;
  return titre || label || '';
}

function renderMethodeBar(m) {
  return `<div class="methode-attach">
    <button class="methode-bar" data-methode="${m.id}" data-loaded="0" aria-expanded="false">
      <span class="methode-bar-ico">▸</span>
      <span class="methode-bar-tag">Méthode</span>
      <span class="methode-bar-title">${m.titre || 'Méthode associée'}</span>
    </button>
    <div class="methode-panel" hidden></div>
  </div>`;
}

function renderEloPanel(carte) {
  if (carte.type !== 'ex') return '';
  if (!getToken()) {
    return `<div class="elo-panel elo-panel-locked">
      <strong>Niveau du chapitre</strong>
      <span>Connectez-vous pour évaluer l’exercice et ajuster votre niveau dans ce chapitre.</span>
    </div>`;
  }
  return `<div class="elo-panel" data-elo-card="${carte.id}">
    <div class="elo-panel-head">
      <div>
        <strong>Niveau du chapitre</strong>
        <span>Après avoir lu la correction, estimez la difficulté et votre réussite.</span>
      </div>
      <div class="elo-score-preview">Niveau ajusté</div>
    </div>
    <label class="elo-field">Difficulté ressentie
      <select data-elo-difficulty>
        <option value="1">1 · très facile</option>
        <option value="2">2 · facile</option>
        <option value="3" selected>3 · normal</option>
        <option value="4">4 · difficile</option>
        <option value="5">5 · très difficile</option>
      </select>
    </label>
    <div class="elo-success-grid" aria-label="Réussite de l'exercice">
      <button type="button" data-elo-success="2">Pas réussi</button>
      <button type="button" data-elo-success="5">Moyen</button>
      <button type="button" data-elo-success="8">Bien réussi</button>
      <button type="button" data-elo-success="10">Parfait</button>
    </div>
    <div class="elo-feedback" aria-live="polite"></div>
  </div>`;
}

export function renderCard(carte) {
  const head = formatLabel(carte);
  const status = getStatus(carte.id);
  const showProgress = !!getToken();
  const showPersonalTools = !!getToken();

  // Allégé : la date et le statut « disponible » vivent déjà sur l'en-tête du
  // chapitre. Sur la carte, on garde juste « Signaler », discret et au survol.
  const meta = `<a class="report-link" href="mailto:contact@admiscible.fr?subject=Signalement%20contenu%20Admiscible&body=${encodeURIComponent(`Page : ${location.pathname}${location.search}\nCarte : ${head || carte.titre || carte.id}\n\nDécrire le problème : `)}">Signaler une erreur</a>`;

  const progressBtn = showProgress ? `<button class="prog-btn" data-carte="${carte.id}" data-status="${status}" data-title="${escapeAttr(head || carte.titre || 'Carte de cours')}" style="padding:0.3rem 0.8rem;border-radius:var(--r-sm);border:1px solid ${statusColors[status]};background:transparent;color:${statusColors[status]};font-size:0.75rem;font-weight:800;cursor:pointer;text-transform:uppercase;letter-spacing:0.05em;transition:all 0.2s">${statusLabels[status]}</button>` : '';

  const erreurBtn = showPersonalTools ? `<button class="erreur-btn" data-desc="${escapeAttr(head || carte.titre || '')}" data-type="${carte.type}" title="Ajouter au cahier d'erreurs" style="background:none;border:1px solid var(--border-1);cursor:pointer;font-size:0.72rem;font-weight:800;padding:2px 7px;border-radius:var(--r-sm);color:var(--text-3);line-height:1.6;flex-shrink:0;font-family:inherit;transition:color 0.15s,border-color 0.15s">Ajouter au cahier d'erreurs</button>` : '';

  const methodeBars = (carte.methodes && carte.methodes.length)
    ? carte.methodes.map(renderMethodeBar).join('')
    : '';

  return `<div class="card ${carte.type}" id="carte-${carte.id}">
    ${head ? `<div class="card-head" style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
      <span style="min-width:0">${head}</span>
      <span class="card-meta-row">${meta}${progressBtn}${erreurBtn}</span>
    </div>` : ''}
    <div class="card-body">${carte.contenu}</div>
    ${renderEloPanel(carte)}
    ${methodeBars}
  </div>`;
}

export function initEloListeners(container) {
  if (!container) return;
  container.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-elo-success]');
    if (!btn) return;
    const panel = btn.closest('.elo-panel');
    const carteId = Number(panel?.dataset.eloCard);
    if (!carteId) return;
    const feedback = panel.querySelector('.elo-feedback');
    const difficulty = Number(panel.querySelector('[data-elo-difficulty]')?.value || 3);
    const success = Number(btn.dataset.eloSuccess || 0);
    panel.querySelectorAll('[data-elo-success]').forEach(item => item.disabled = true);
    feedback.textContent = 'Calcul du niveau...';
    try {
      const result = await api.evaluateExercise({ carte_id: carteId, difficulty, success });
      const filiere = new URLSearchParams(location.search).get('filiere') || '';
      feedback.innerHTML = `
        <strong>Niveau ${result.rating}</strong>
        <span>${result.delta >= 0 ? '+' : ''}${result.delta} · ${result.chapitre_titre}</span>
        ${result.recommendations?.length ? `<div class="elo-recos">
          ${result.recommendations.map(r => `<a href="cours.html?${filiere ? `filiere=${encodeURIComponent(filiere)}&` : ''}matiere=${encodeURIComponent(r.matiere_id)}&carte=${encodeURIComponent(r.id)}#${encodeURIComponent(r.chapitre_id)}">
            <b>${r.label || 'EX'} ${r.titre || 'Exercice'}</b>
            <small>${r.reason}</small>
          </a>`).join('')}
        </div>` : ''}`;
      toast(`Niveau mis à jour : ${result.rating}`, 'ok', 2600);
    } catch (err) {
      feedback.textContent = err.message || 'Impossible d’enregistrer cette évaluation.';
      panel.querySelectorAll('[data-elo-success]').forEach(item => item.disabled = false);
    }
  });
}

// Accordéon des méthodes rattachées aux cartes (lazy-load)
export function initMethodeListeners(container) {
  if (!container) return;

  container.addEventListener('click', async (e) => {
    const bar = e.target.closest('.methode-bar');
    if (!bar) return;

    const panel = bar.nextElementSibling;
    const ico = bar.querySelector('.methode-bar-ico');
    const isOpen = bar.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      panel.hidden = true;
      bar.setAttribute('aria-expanded', 'false');
      if (ico) ico.textContent = '▸';
      return;
    }

    bar.setAttribute('aria-expanded', 'true');
    if (ico) ico.textContent = '▾';
    panel.hidden = false;

    if (bar.dataset.loaded === '1') return;       // déjà chargé : simple ré-ouverture
    bar.dataset.loaded = '1';
    panel.innerHTML = '<div class="methode-loading">Chargement…</div>';

    try {
      const m = await api.getMethode(bar.dataset.methode);
      panel.innerHTML = `<div class="methode-content">${m.contenu || ''}</div>`;
      if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([panel]).catch(() => {});
    } catch {
      panel.innerHTML = '<div class="methode-loading">Erreur de chargement de la méthode.</div>';
      bar.dataset.loaded = '0';
    }
  });
}

export function renderChapitre(chapitre, index) {
  const sections = chapitre.sections.map(sec => `
    <div class="sec">
      <div class="sec-title">${sec.titre}</div>
      ${sec.cartes.map(c => renderCard(c)).join('')}
    </div>
  `).join('');

  return `<div class="chap" id="${chapitre.id}">
    <div class="chap-hd">
      <div class="chap-n">${index + 1}</div>
      <div class="chap-title">${chapitre.titre}</div>
      <div class="chap-meta">
        <span class="status-chip complete">Disponible</span>
        <span class="content-meta-chip">Mis à jour : ${CONTENT_UPDATED}</span>
        <a class="report-link" href="mailto:contact@admiscible.fr?subject=Signalement%20chapitre%20Admiscible&body=${encodeURIComponent(`Page : ${location.pathname}${location.search}#${chapitre.id}\nChapitre : ${chapitre.titre}\n\nDécrire le problème : `)}">Signaler</a>
      </div>
    </div>
    ${sections}
  </div>`;
}

const MATIERE_TO_SUBJECT = {
  ph: 'physique', physique: 'physique',
  maths: 'maths', math: 'maths',
  chim: 'chimie', chimie: 'chimie',
  si: 'si',
  info: 'info', informatique: 'info',
  fr: 'francais', francais: 'francais',
  anglais: 'anglais', ang: 'anglais',
};
const TYPE_CATEGORY = {
  theoreme: 'theoreme', definition: 'concept',
  formule: 'calcul', propriete: 'concept', methode: 'methode',
};

export function initErreurListeners(container) {
  if (!getToken() || !container) return;

  container.addEventListener('click', async (e) => {
    const btn = e.target.closest('.erreur-btn');
    if (!btn) return;

    const matiere = new URLSearchParams(window.location.search).get('matiere') || 'ph';
    const subject = MATIERE_TO_SUBJECT[matiere] || 'autre';
    const category = TYPE_CATEGORY[btn.dataset.type] || 'calcul';
    const description = btn.dataset.desc || 'Carte sans titre';

    btn.disabled = true;
    try {
      await api.addErreur({ subject, category, description });
      btn.textContent = '✓';
      btn.style.color = 'var(--positive, #18753c)';
      btn.style.borderColor = 'var(--positive, #18753c)';
      toast('Ajouté aux erreurs', 'ok', 2500);
      setTimeout(() => {
        btn.textContent = "Ajouter au cahier d'erreurs";
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.disabled = false;
      }, 2000);
    } catch {
      btn.disabled = false;
      toast('Erreur lors de l\'ajout', 'error', 2500);
    }
  });
}

export function initProgressionListeners(container) {
  if (!getToken() || !container) return;

  container.addEventListener('click', async (e) => {
    const btn = e.target.closest('.prog-btn');
    if (!btn) return;

    const carteId = Number(btn.dataset.carte);
    const currentStatus = btn.dataset.status;
    const newStatus = statusNext[currentStatus];

    try {
      if (currentStatus === 'todo') {
        await api.createTodo({
          text: `Reprendre : ${btn.dataset.title || 'carte de cours'}`,
          priority: 'normal',
        });
        toast('Ajouté aux actions', 'ok', 2200);
      }
      await api.updateProgression(carteId, newStatus);
      if (progressionCache) progressionCache[carteId] = newStatus;
      btn.dataset.status = newStatus;
      btn.textContent = statusLabels[newStatus];
      btn.style.borderColor = statusColors[newStatus];
      btn.style.color = statusColors[newStatus];
    } catch (err) {
      console.error('Progression error:', err);
    }
  });
}

function escapeAttr(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}
