import '../main.js';

const STORE_KEY = 'admiscible-family-space';
const LEVELS = ['Sixième', 'Cinquième', 'Quatrième', 'Troisième', 'Seconde', 'Première', 'Terminale', 'CPGE'];
const PRIORITIES = ['Relire le cours', 'Faire deux exercices', 'Corriger une erreur', 'Préparer une évaluation', 'Planifier la semaine', 'Demander de l’aide'];

function id() {
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function options(items, selected = '') {
  return items.map(item => `<option value="${esc(item)}" ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('');
}

function defaultState() {
  return {
    children: [
      { id: id(), name: 'Élève 1', level: 'Terminale', objective: 'Rester régulier', minutes: 90, priority: 'Corriger une erreur', done: false },
    ],
    rituals: [
      { id: id(), title: 'Point famille du dimanche', detail: 'Choisir une priorité réaliste pour chaque élève.' },
    ],
  };
}

function readState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    return {
      ...defaultState(),
      ...parsed,
      children: Array.isArray(parsed.children) ? parsed.children : defaultState().children,
      rituals: Array.isArray(parsed.rituals) ? parsed.rituals : defaultState().rituals,
    };
  } catch {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function printFamily(state) {
  const rows = state.children.map(child => `
    <tr><td>${esc(child.name)}</td><td>${esc(child.level)}</td><td>${esc(child.objective)}</td><td>${Number(child.minutes || 0)} min</td><td>${esc(child.priority)}</td><td>${child.done ? 'Fait' : 'À faire'}</td></tr>
  `).join('');
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan famille</title>
  <style>body{font-family:Arial,sans-serif;margin:32px;color:#161616;line-height:1.5}h1{color:#123b7a;margin:0}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d8e0ea;padding:8px;text-align:left}th{background:#edf2f8}</style></head><body>
  <h1>Bilan famille Admiscible</h1><p>${new Date().toLocaleDateString('fr-FR')}</p>
  <table><thead><tr><th>Élève</th><th>Niveau</th><th>Objectif</th><th>Durée</th><th>Priorité</th><th>État</th></tr></thead><tbody>${rows}</tbody></table>
  <script>window.onload=()=>window.print()</script></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
}

function init() {
  const root = document.getElementById('family-app');
  if (!root) return;
  let state = readState();

  function render() {
    const totalMinutes = state.children.reduce((sum, child) => sum + Number(child.minutes || 0), 0);
    const doneCount = state.children.filter(child => child.done).length;
    root.innerHTML = `
      <div class="info-layout">
        <div class="info-content">
          <section class="info-card">
            <div class="report-head">
              <div><h2>Tableau familial</h2><p>Une vue synthétique pour plusieurs élèves, sans compte établissement ni synchronisation serveur.</p></div>
              <button class="btn btn-primary" id="family-print" type="button">Imprimer</button>
            </div>
            <div class="metric-grid">
              <div><b>${state.children.length}</b><span>élèves suivis</span></div>
              <div><b>${totalMinutes}</b><span>minutes prévues</span></div>
              <div><b>${doneCount}</b><span>priorités terminées</span></div>
              <div><b>${state.rituals.length}</b><span>rituels famille</span></div>
            </div>
          </section>

          <section class="info-card">
            <h2>Ajouter un élève</h2>
            <form class="utility-form utility-form-inline" id="family-child-form">
              <label>Prénom ou initiales<input name="name" placeholder="Ex. Camille"></label>
              <label>Niveau<select name="level">${options(LEVELS)}</select></label>
              <label>Objectif<input name="objective" placeholder="Ex. préparer le contrôle"></label>
              <label>Minutes prévues<input name="minutes" type="number" min="0" step="15" value="60"></label>
              <label>Priorité<select name="priority">${options(PRIORITIES)}</select></label>
              <button type="submit">Ajouter</button>
            </form>
          </section>

          <section class="info-card">
            <h2>Priorités de la semaine</h2>
            <div class="teacher-list">
              ${state.children.map(child => `
                <div class="teacher-rec teacher-sequence">
                  <div>
                    <strong>${esc(child.name)} · ${esc(child.level)}</strong>
                    <p>${esc(child.objective || 'Objectif à préciser')}</p>
                    <span>${Number(child.minutes || 0)} min · ${esc(child.priority || 'Priorité à préciser')}</span>
                  </div>
                  <div class="teacher-actions">
                    <button type="button" data-toggle="${child.id}">${child.done ? 'Marquer à faire' : 'Marquer fait'}</button>
                    <button type="button" data-delete="${child.id}">Supprimer</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <aside class="info-side">
          <div class="info-side-card">
            <h2>Rituel famille</h2>
            <form class="utility-form" id="family-ritual-form">
              <label>Nom<input name="title" placeholder="Ex. Point du dimanche"></label>
              <label>Détail<textarea name="detail" rows="4" placeholder="Ex. chacun choisit une erreur à corriger."></textarea></label>
              <button type="submit">Ajouter</button>
            </form>
          </div>
          <div class="info-side-card">
            <h2>Rituels actifs</h2>
            ${state.rituals.map(ritual => `<span><strong>${esc(ritual.title)}</strong><br>${esc(ritual.detail)}</span>`).join('')}
          </div>
          <div class="info-side-card">
            <h2>Parent</h2>
            <a href="bilan-parent.html">Créer un bilan parent</a>
          </div>
        </aside>
      </div>
    `;
    wire();
  }

  function wire() {
    root.querySelector('#family-child-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const name = String(fd.get('name') || '').trim();
      if (!name) return;
      state.children.push({
        id: id(),
        name,
        level: String(fd.get('level') || ''),
        objective: String(fd.get('objective') || '').trim(),
        minutes: Number(fd.get('minutes') || 0),
        priority: String(fd.get('priority') || ''),
        done: false,
      });
      saveState(state);
      render();
    });

    root.querySelector('#family-ritual-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const title = String(fd.get('title') || '').trim();
      if (!title) return;
      state.rituals.unshift({ id: id(), title, detail: String(fd.get('detail') || '').trim() });
      saveState(state);
      render();
    });

    root.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.children = state.children.map(child => child.id === btn.dataset.toggle ? { ...child, done: !child.done } : child);
        saveState(state);
        render();
      });
    });

    root.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.children = state.children.filter(child => child.id !== btn.dataset.delete);
        saveState(state);
        render();
      });
    });

    root.querySelector('#family-print')?.addEventListener('click', () => printFamily(state));
  }

  render();
}

document.addEventListener('DOMContentLoaded', init);
