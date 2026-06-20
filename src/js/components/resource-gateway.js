import { api } from '../api.js';

export async function initResourceGateway({
  root,
  resourceLabel = 'contenu',
  resourceName = 'ce contenu',
  intro = 'Choisissez votre niveau, votre filière, puis la matière à travailler.',
  preferredFiliereId = '',
  coverageType = 'cours',
  onComplete,
}) {
  const container = typeof root === 'string' ? document.querySelector(root) : root;
  if (!container) return;

  const niveaux = await api.getNiveaux();

  // Couverture : on ne propose que les filière×matière qui ont réellement du contenu.
  // Si l'appel échoue, on n'altère rien (tout reste affiché) — fail-safe.
  let covSet = new Set();
  const filWithContent = new Set();
  try {
    const cov = await api.getCoverage();
    for (const key of (cov?.[coverageType] || [])) { covSet.add(key); filWithContent.add(key.split('|')[0]); }
  } catch { /* coverage indisponible → aucun filtrage */ }
  const hasCov = () => covSet.size > 0;
  const keepFilieres = (filieres) => hasCov() ? (filieres || []).filter(f => filWithContent.has(f.id)) : (filieres || []);
  const keepNiveaux = (list) => hasCov() ? list.filter(n => (n.filieres || []).some(f => filWithContent.has(f.id))) : list;
  const keepMatieres = (filiere, matieres) => hasCov() ? (matieres || []).filter(m => covSet.has(`${filiere.id}|${m.id}`)) : (matieres || []);

  let selectedNiveau = null;
  let selectedFiliere = null;
  let lockedToPreferredFiliere = false;

  if (preferredFiliereId) {
    const filiere = await api.getFiliere(preferredFiliereId).catch(() => null);
    if (filiere) {
      selectedFiliere = filiere;
      selectedNiveau = niveaux.find(n => (n.filieres || []).some(f => f.id === filiere.id)) || null;
      lockedToPreferredFiliere = true;
      renderMatieres();
      return;
    }
  }

  renderNiveaux();

  function renderFrame({ step, title, text, body, back = '' }) {
    container.hidden = false;
    container.innerHTML = `
      <div class="resource-gateway-inner" data-step="${step}">
        <div class="resource-gateway-head">
          <div class="resource-gateway-kicker">${escapeHtml(resourceLabel)} · choix guidé</div>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
        </div>
        ${body}
        ${back}
      </div>
    `;
  }

  function renderNiveaux() {
    const visibleNiveaux = keepNiveaux(niveaux);
    renderFrame({
      step: 1,
      title: `Choisir un niveau`,
      text: intro,
      body: `
        <div class="resource-choice-grid resource-choice-grid--featured">
          ${visibleNiveaux.map((niveau, index) => choiceCard({
            value: niveau.id,
            title: niveau.nom,
            meta: `${keepFilieres(niveau.filieres).length} parcours disponibles`,
            action: 'Choisir',
            number: index + 1,
          })).join('')}
        </div>
      `,
    });

    bindChoice((id) => {
      selectedNiveau = niveaux.find(n => n.id === id);
      selectedFiliere = null;
      renderFilieres();
    });
  }

  function renderFilieres() {
    const filieres = keepFilieres(selectedNiveau?.filieres);
    renderFrame({
      step: 2,
      title: `Choisir une filière`,
      text: selectedNiveau
        ? `${selectedNiveau.nom} sélectionné. Choisissez maintenant le parcours précis.`
        : 'Choisissez le parcours précis.',
      body: `
        <div class="resource-choice-grid">
          ${filieres.map((filiere, index) => choiceCard({
            value: filiere.id,
            title: filiere.nom,
            meta: 'Afficher les matières',
            action: 'Continuer',
            number: index + 1,
          })).join('')}
        </div>
      `,
      back: backButton('Revenir aux niveaux'),
    });

    bindChoice(async (id) => {
      selectedFiliere = await api.getFiliere(id);
      renderMatieres();
    });
    bindBack(renderNiveaux);
  }

  function renderMatieres() {
    const matieres = keepMatieres(selectedFiliere, selectedFiliere?.matieres);
    renderFrame({
      step: 3,
      title: `Choisir une matière`,
      text: selectedFiliere
        ? lockedToPreferredFiliere
          ? `Votre parcours ${selectedFiliere.nom} est déjà renseigné. Choisissez seulement la matière.`
          : `${selectedFiliere.nom} sélectionné. Choisissez la matière pour ouvrir ${resourceName}.`
        : `Choisissez la matière pour ouvrir ${resourceName}.`,
      body: `
        <div class="resource-choice-grid">
          ${matieres.map((matiere, index) => choiceCard({
            value: matiere.id,
            title: matiere.nom,
            meta: `Ouvrir ${resourceName}`,
            action: 'Ouvrir',
            number: index + 1,
          })).join('')}
        </div>
      `,
      back: lockedToPreferredFiliere ? '' : backButton('Revenir aux filières'),
    });

    bindChoice((id) => {
      const matiere = matieres.find(m => m.id === id);
      onComplete?.({
        niveau: selectedNiveau,
        filiere: selectedFiliere,
        matiere,
      });
    });
    if (!lockedToPreferredFiliere) bindBack(renderFilieres);
  }

  function bindChoice(callback) {
    container.querySelectorAll('[data-choice]').forEach(button => {
      button.addEventListener('click', () => callback(button.dataset.choice));
    });
  }

  function bindBack(callback) {
    container.querySelector('[data-back]')?.addEventListener('click', callback);
  }
}

function choiceCard({ value, title, meta, action, number }) {
  return `
    <button class="resource-choice-card" type="button" data-choice="${escapeHtml(value)}">
      <span class="resource-choice-number">${String(number).padStart(2, '0')}</span>
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(meta)}</small>
      <span class="resource-choice-action">${escapeHtml(action)}</span>
    </button>
  `;
}

function backButton(label) {
  return `<button class="resource-gateway-back" type="button" data-back>${escapeHtml(label)}</button>`;
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}
