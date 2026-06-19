import { api } from '../api.js';
import { getToken } from '../auth.js';
import { emptyState, ICONS, notLoggedIn } from '../empty-state.js';
import { toast } from '../toast.js';
import { escapeText } from '../sanitize.js';

const SUBJECTS = ['Maths', 'Physique', 'Chimie', 'SI', 'Info', 'Français', 'Anglais', 'Autre'];
const CATEGORIES = [
  { id: 'calcul', label: 'Erreur de calcul' },
  { id: 'methode', label: 'Mauvaise méthode' },
  { id: 'comprehension', label: 'Incompréhension' },
  { id: 'etourderie', label: 'Étourderie' },
  { id: 'redaction', label: 'Rédaction' },
  { id: 'autre', label: 'Autre' },
];
const CAT_COLORS = { calcul: 'var(--negative)', methode: 'var(--caution)', comprehension: 'var(--info)', etourderie: 'var(--text-2)', redaction: 'var(--positive)', autre: 'var(--accent)' };

export async function initErreursPage() {
  const app = document.getElementById('erreurs-app');
  if (!app) return;

  if (!getToken()) {
    app.innerHTML = notLoggedIn("cahier d'erreurs");
    return;
  }

  app.innerHTML = `
    <div class="erreurs-layout">
      <div class="erreurs-form-wrap">
        <h3 style="font-size:0.85rem;font-weight:700;margin-bottom:var(--s-3)">Nouvelle erreur</h3>
        <form id="erreur-form" class="erreur-form">
          <div class="form-row">
            <select id="err-subject">${SUBJECTS.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
            <select id="err-category">${CATEGORIES.map(c => `<option value="${c.id}">${c.label}</option>`).join('')}</select>
          </div>
          <textarea id="err-desc" placeholder="Décrire l'erreur..." rows="3" required></textarea>
          <textarea id="err-sol" placeholder="Solution / correctif (optionnel)" rows="2"></textarea>
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
      <div class="erreurs-filters">
        <button class="filter active" data-cat="all">Toutes</button>
        ${CATEGORIES.map(c => `<button class="filter" data-cat="${c.id}">${c.label}</button>`).join('')}
      </div>
      <div id="erreurs-reminder" class="erreurs-reminder"></div>
      <div id="erreurs-stats" class="erreurs-stats"></div>
      <div id="erreurs-list" class="erreurs-list"></div>
    </div>`;

  let erreurs = [];
  let filterCat = 'all';

  try { erreurs = await api.getErreurs(); } catch {}

  render();

  document.getElementById('erreur-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      subject: document.getElementById('err-subject').value,
      category: document.getElementById('err-category').value,
      description: document.getElementById('err-desc').value.trim(),
      solution: document.getElementById('err-sol').value.trim() || null,
    };
    if (!data.description) return;
    try {
      const item = await api.addErreur(data);
      erreurs.unshift(item);
      document.getElementById('err-desc').value = '';
      document.getElementById('err-sol').value = '';
      render();
      toast('Erreur ajoutée au cahier', 'ok');
    } catch (err) { toast(err.message || 'Erreur', 'error'); }
  });

  app.querySelector('.erreurs-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    app.querySelectorAll('.erreurs-filters .filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterCat = btn.dataset.cat;
    render();
  });

  function render() {
    const filtered = filterCat === 'all' ? erreurs : erreurs.filter(e => e.category === filterCat);
    const resolved = erreurs.filter(e => e.resolved).length;
    const total = erreurs.length;
    const unresolved = erreurs.filter(e => !e.resolved);
    const oldUnresolved = unresolved.filter(e => {
      const created = new Date(e.created_at).getTime();
      return Number.isFinite(created) && Date.now() - created > 3 * 24 * 60 * 60 * 1000;
    });

    document.getElementById('erreurs-reminder').innerHTML = renderReminder(unresolved, oldUnresolved);

    document.getElementById('erreurs-stats').innerHTML = `
      <div class="estat"><span class="estat-n">${total}</span><span class="estat-l">Total</span></div>
      <div class="estat"><span class="estat-n" style="color:var(--positive)">${resolved}</span><span class="estat-l">Résolues</span></div>
      <div class="estat"><span class="estat-n" style="color:var(--negative)">${total - resolved}</span><span class="estat-l">À corriger</span></div>`;

    const emptyHtml = erreurs.length === 0
      ? emptyState({
          icon: ICONS.shield,
          title: 'Cahier vierge',
          subtitle: "Noter une erreur permet de l'identifier, de la corriger et de la retravailler régulièrement.",
          cta: `<button onclick="document.getElementById('err-desc')?.focus()"
            style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">
            Ajouter une erreur
          </button>`,
        })
      : emptyState({
          icon: ICONS.shieldAlert,
          title: 'Aucune erreur ici',
          subtitle: 'Cette catégorie est vide. Change de filtre ou note une nouvelle erreur.',
        });

    document.getElementById('erreurs-list').innerHTML = filtered.length ? filtered.map(e => `      <div class="erreur-card ${e.resolved ? 'resolved' : ''}" data-id="${e.id}">
        <div class="erreur-head">
          <span class="erreur-cat" style="background:${CAT_COLORS[e.category] || 'var(--text-2)'}">${CATEGORIES.find(c => c.id === e.category)?.label || e.category}</span>
          <span class="erreur-subj">${e.subject}</span>
          <span class="erreur-date">${new Date(e.created_at).toLocaleDateString('fr-FR')}</span>
          <button class="erreur-resolve" data-id="${e.id}" title="${e.resolved ? 'Rouvrir' : 'Marquer résolue'}">${e.resolved ? '&#10003;' : '&#9675;'}</button>
          <button class="erreur-del" data-id="${e.id}" title="Supprimer">&times;</button>
        </div>
        <div class="erreur-body">${escapeText(e.description)}</div>
        ${e.solution ? `<div class="erreur-solution"><strong>Correctif :</strong> ${escapeText(e.solution)}</div>` : ''}
      </div>
    `).join('') : emptyHtml;

    document.getElementById('erreurs-list').addEventListener('click', async (ev) => {
      const resolveBtn = ev.target.closest('.erreur-resolve');
      if (resolveBtn) {
        const id = Number(resolveBtn.dataset.id);
        const item = erreurs.find(e => e.id === id);
        if (!item) return;
        try {
          await api.updateErreur(id, { resolved: !item.resolved });
          item.resolved = !item.resolved;
          render();
          toast(item.resolved ? 'Marquée résolue ✓' : 'Réouverte', 'ok');
        } catch (err) { toast(err.message || 'Erreur', 'error'); }
        return;
      }
      const delBtn = ev.target.closest('.erreur-del');
      if (delBtn) {
        const id = Number(delBtn.dataset.id);
        try {
          await api.deleteErreur(id);
          erreurs = erreurs.filter(e => e.id !== id);
          render();
          toast('Erreur supprimée', 'ok');
        } catch (err) { toast(err.message || 'Erreur', 'error'); }
      }
    });

    document.getElementById('erreurs-reminder')?.addEventListener('click', async (ev) => {
      const reviewBtn = ev.target.closest('[data-error-review]');
      if (reviewBtn) {
        filterCat = 'all';
        app.querySelectorAll('.erreurs-filters .filter').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
        document.getElementById('erreurs-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      const todoBtn = ev.target.closest('[data-error-todo]');
      if (!todoBtn) return;
      try {
        await api.createTodo({
          text: `Revoir le cahier d'erreurs (${unresolved.length} point${unresolved.length > 1 ? 's' : ''} à corriger)`,
          priority: oldUnresolved.length ? 'high' : 'normal',
        });
        toast('Rappel ajouté aux actions', 'ok');
      } catch (err) {
        toast(err.message || 'Impossible d’ajouter le rappel', 'error');
      }
    }, { once: true });
  }
}

function renderReminder(unresolved, oldUnresolved) {
  if (!unresolved.length) {
    return `<div class="error-review-card is-clear">
      <div>
        <strong>Cahier à jour</strong>
        <span>Aucune erreur ouverte. Vous pouvez continuer le programme.</span>
      </div>
    </div>`;
  }
  return `<div class="error-review-card">
    <div>
      <strong>${unresolved.length} erreur${unresolved.length > 1 ? 's' : ''} à reprendre</strong>
      <span>${oldUnresolved.length
        ? `${oldUnresolved.length} point${oldUnresolved.length > 1 ? 's' : ''} attendent depuis plus de trois jours.`
        : 'Un passage court suffit : cause, correctif, nouvel exercice.'}</span>
    </div>
    <div class="error-review-actions">
      <button type="button" data-error-review>Revoir maintenant</button>
      <button type="button" data-error-todo>Ajouter un rappel</button>
    </div>
  </div>`;
}
