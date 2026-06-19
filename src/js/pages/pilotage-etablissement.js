import '../main.js';

const STORE_KEY = 'admiscible-establishment-dashboard';
const DEFAULT_ROWS = [
  { id: 'row-1', level: 'Lycée', groups: 2, students: 64, active: 48, mastery: 61, priority: 'Méthodes de rédaction' },
];
const LEVELS = ['Collège', 'Seconde', 'Première', 'Terminale', 'CPGE première année', 'CPGE deuxième année', 'Groupe tutorat', 'Dispositif devoirs faits'];
const PRIORITIES = ['Bases de calcul', 'Méthodes de rédaction', 'Organisation du travail', 'Correction des erreurs', 'Préparation aux évaluations', 'Préparation concours', 'Confiance et autonomie'];

function readRows() {
  try {
    const rows = JSON.parse(localStorage.getItem(STORE_KEY));
    return Array.isArray(rows) ? rows : DEFAULT_ROWS;
  } catch {
    return DEFAULT_ROWS;
  }
}

function saveRows(rows) {
  localStorage.setItem(STORE_KEY, JSON.stringify(rows));
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
  let rows = readRows();

  function render() {
    const totalStudents = rows.reduce((sum, row) => sum + Number(row.students || 0), 0);
    const totalActive = rows.reduce((sum, row) => sum + Number(row.active || 0), 0);
    const avgMastery = rows.length ? Math.round(rows.reduce((sum, row) => sum + Number(row.mastery || 0), 0) / rows.length) : 0;
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
            <button class="btn btn-primary" id="print-establishment" type="button">Imprimer</button>
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
      </div>`;
    wire();
  }

  function wire() {
    root.querySelector('#establishment-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      rows.push({
        id: `row-${Date.now()}`,
        level: String(fd.get('level') || 'Groupe sans nom'),
        groups: Number(fd.get('groups') || 0),
        students: Number(fd.get('students') || 0),
        active: Number(fd.get('active') || 0),
        mastery: Math.max(0, Math.min(100, Number(fd.get('mastery') || 0))),
        priority: String(fd.get('priority') || ''),
      });
      saveRows(rows);
      render();
    });
    root.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        rows = rows.filter(row => row.id !== btn.dataset.delete);
        saveRows(rows);
        render();
      });
    });
    root.querySelector('#print-establishment')?.addEventListener('click', () => window.print());
  }

  render();
}

document.addEventListener('DOMContentLoaded', init);
