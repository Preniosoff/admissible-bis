import '../main.js';

const STORE_KEY = 'admiscible-establishment-dashboard';
const DEFAULT_ROWS = [
  { id: 'row-1', level: 'Lycée', groups: 2, students: 64, active: 48, mastery: 61, priority: 'Méthodes de rédaction' },
];
const DEFAULT_ACTIONS = [
  { id: 'act-1', title: 'Nommer un référent', owner: 'Direction', due: 'Semaine 1', done: false },
  { id: 'act-2', title: 'Informer les familles', owner: 'Vie scolaire', due: 'Semaine 2', done: false },
];
const LEVELS = ['Collège', 'Seconde', 'Première', 'Terminale', 'CPGE première année', 'CPGE deuxième année', 'Groupe tutorat', 'Dispositif devoirs faits'];
const PRIORITIES = ['Bases de calcul', 'Méthodes de rédaction', 'Organisation du travail', 'Correction des erreurs', 'Préparation aux évaluations', 'Préparation concours', 'Confiance et autonomie'];

function readRows() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY));
    if (Array.isArray(parsed)) return { rows: parsed, actions: DEFAULT_ACTIONS };
    return {
      rows: Array.isArray(parsed?.rows) ? parsed.rows : DEFAULT_ROWS,
      actions: Array.isArray(parsed?.actions) ? parsed.actions : DEFAULT_ACTIONS,
    };
  } catch {
    return { rows: DEFAULT_ROWS, actions: DEFAULT_ACTIONS };
  }
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function options(items) {
  return items.map(item => `<option value="${esc(item)}">${esc(item)}</option>`).join('');
}

function init() {
  const root = document.getElementById('establishment-dashboard-app');
  if (!root) return;
  let state = readRows();

  function render() {
    const rows = state.rows;
    const totalStudents = rows.reduce((sum, row) => sum + Number(row.students || 0), 0);
    const totalActive = rows.reduce((sum, row) => sum + Number(row.active || 0), 0);
    const avgMastery = rows.length ? Math.round(rows.reduce((sum, row) => sum + Number(row.mastery || 0), 0) / rows.length) : 0;
    const activeRate = totalStudents ? Math.round((totalActive / totalStudents) * 100) : 0;
    const doneActions = state.actions.filter(action => action.done).length;
    root.innerHTML = `
      <div class="info-content">
        <section class="info-card">
          <h2>Indicateurs anonymisés</h2>
          <div class="metric-grid">
            <div><b>${rows.length}</b><span>niveaux ou groupes suivis</span></div>
            <div><b>${totalStudents}</b><span>élèves concernés</span></div>
            <div><b>${totalActive}</b><span>élèves actifs déclarés</span></div>
            <div><b>${avgMastery}%</b><span>maîtrise moyenne estimée</span></div>
          </div>
          <div class="status-grid" style="margin-top:1rem">
            <span>Taux d'activité : ${activeRate}%</span>
            <span>Actions déploiement : ${doneActions}/${state.actions.length}</span>
            <span>Risque collectif : ${avgMastery < 45 ? 'élevé' : avgMastery < 70 ? 'modéré' : 'contenu'}</span>
          </div>
        </section>
        <section class="info-card">
          <h2>Ajouter une ligne de pilotage</h2>
          <form class="utility-form utility-form-inline" id="establishment-form">
            <label>Niveau ou groupe<select name="level">${options(LEVELS)}</select></label>
            <label>Classes<input name="groups" type="number" min="1" value="1"></label>
            <label>Élèves<input name="students" type="number" min="0" value="30"></label>
            <label>Actifs<input name="active" type="number" min="0" value="20"></label>
            <label>Maîtrise (%)<input name="mastery" type="number" min="0" max="100" value="55"></label>
            <label>Priorité collective<select name="priority">${options(PRIORITIES)}</select></label>
            <button type="submit">Ajouter</button>
          </form>
        </section>
        <section class="info-card">
          <div class="report-head">
            <div><h2>Vue établissement</h2><p>Données locales et déclaratives, sans nom d'élève.</p></div>
            <div class="teacher-actions">
              <button class="btn btn-ghost" id="csv-establishment" type="button">CSV</button>
              <button class="btn btn-primary" id="print-establishment" type="button">Imprimer</button>
            </div>
          </div>
          <table class="audit-table">
            <thead><tr><th>Niveau</th><th>Classes</th><th>Élèves</th><th>Actifs</th><th>Maîtrise</th><th>Priorité</th><th></th></tr></thead>
            <tbody>${rows.map(row => `
              <tr>
                <td>${esc(row.level)}</td>
                <td>${Number(row.groups || 0)}</td>
                <td>${Number(row.students || 0)}</td>
                <td>${Number(row.active || 0)}</td>
                <td>${Number(row.mastery || 0)}%</td>
                <td>${esc(row.priority || 'À préciser')}</td>
                <td><button class="table-action" data-delete="${row.id}" type="button">Retirer</button></td>
              </tr>`).join('')}</tbody>
          </table>
        </section>
        <section class="info-card">
          <h2>Plan de déploiement</h2>
          <form class="utility-form utility-form-inline" id="action-form">
            <label>Action<input name="title" placeholder="Ex. Former les professeurs principaux"></label>
            <label>Responsable<input name="owner" placeholder="Ex. Référent numérique"></label>
            <label>Échéance<input name="due" placeholder="Ex. Semaine 3"></label>
            <button type="submit">Ajouter</button>
          </form>
          <div class="teacher-list" style="margin-top:1rem">
            ${state.actions.map(action => `
              <div class="teacher-rec teacher-sequence">
                <div>
                  <strong>${esc(action.title)}</strong>
                  <p>${esc(action.owner)} · ${esc(action.due)}</p>
                  <span>${action.done ? 'Terminé' : 'À faire'}</span>
                </div>
                <div class="teacher-actions">
                  <button type="button" data-toggle-action="${action.id}">${action.done ? 'Rouvrir' : 'Terminer'}</button>
                  <button type="button" data-del-action="${action.id}">Retirer</button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>`;
    wire();
  }

  function wire() {
    root.querySelector('#establishment-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state.rows.push({
        id: `row-${Date.now()}`,
        level: String(fd.get('level') || 'Groupe sans nom'),
        groups: Number(fd.get('groups') || 0),
        students: Number(fd.get('students') || 0),
        active: Number(fd.get('active') || 0),
        mastery: Math.max(0, Math.min(100, Number(fd.get('mastery') || 0))),
        priority: String(fd.get('priority') || ''),
      });
      saveState(state);
      render();
    });
    root.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.rows = state.rows.filter(row => row.id !== btn.dataset.delete);
        saveState(state);
        render();
      });
    });
    root.querySelector('#action-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const title = String(fd.get('title') || '').trim();
      if (!title) return;
      state.actions.push({
        id: `act-${Date.now()}`,
        title,
        owner: String(fd.get('owner') || 'À définir').trim(),
        due: String(fd.get('due') || 'À définir').trim(),
        done: false,
      });
      saveState(state);
      render();
    });
    root.querySelectorAll('[data-toggle-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.actions = state.actions.map(action => action.id === btn.dataset.toggleAction ? { ...action, done: !action.done } : action);
        saveState(state);
        render();
      });
    });
    root.querySelectorAll('[data-del-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.actions = state.actions.filter(action => action.id !== btn.dataset.delAction);
        saveState(state);
        render();
      });
    });
    root.querySelector('#print-establishment')?.addEventListener('click', () => window.print());
    root.querySelector('#csv-establishment')?.addEventListener('click', exportCsv);
  }

  function exportCsv() {
    const rows = [
      ['niveau', 'classes', 'eleves', 'actifs', 'maitrise', 'priorite'],
      ...state.rows.map(row => [row.level, row.groups, row.students, row.active, row.mastery, row.priority]),
    ];
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'admiscible-pilotage-etablissement.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  render();
}

document.addEventListener('DOMContentLoaded', init);
