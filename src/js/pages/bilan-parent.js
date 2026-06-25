import '../main.js';

const STORE_KEY = 'admiscible-parent-space';

const DEFAULT_STATE = {
  student: 'Élève',
  level: 'Terminale générale',
  objective: 'Reprendre une notion fragile et corriger les erreurs importantes',
  weeklyGoal: 180,
  traces: [
    {
      id: cryptoId(),
      date: new Date().toISOString().slice(0, 10),
      minutes: 35,
      done: 'Une fiche de cours relue et reformulée',
      next: 'Refaire un exercice court sans aide',
      help: 'Autonome pour la prochaine séance',
      confidence: 3,
    },
  ],
  notes: [],
};

const LEVELS = ['Sixième', 'Cinquième', 'Quatrième', 'Troisième', 'Seconde', 'Première générale', 'Terminale générale', 'CPGE scientifique'];
const DONE = ['Une fiche de cours relue et reformulée', 'Deux exercices corrigés proprement', 'Une méthode appliquée sur un exemple', 'Une erreur récurrente identifiée et corrigée', 'Une séance de travail chronométrée réalisée'];
const NEXT = ['Revoir le cours avant de refaire des exercices', 'Travailler la rédaction de la solution', 'Refaire un exercice court sans aide', 'Noter les erreurs dans le cahier d’erreurs', 'Demander une précision à l’enseignant'];
const HELP = ['Autonome pour la prochaine séance', 'Besoin d’un rappel de cours', 'Besoin d’un exercice guidé', 'Besoin d’un échange avec l’enseignant'];

function cryptoId() {
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function options(items, selected = '') {
  return items.map(item => `<option value="${esc(item)}" ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('');
}

function readState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    return {
      ...DEFAULT_STATE,
      ...parsed,
      traces: Array.isArray(parsed.traces) ? parsed.traces : DEFAULT_STATE.traces,
      notes: Array.isArray(parsed.notes) ? parsed.notes : [],
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function downloadJson(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `admiscible-bilan-parent-${state.student.replace(/\s+/g, '-').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function printReport(state) {
  const traces = state.traces.slice(0, 8).map(trace => `
    <tr>
      <td>${new Date(trace.date).toLocaleDateString('fr-FR')}</td>
      <td>${Number(trace.minutes || 0)} min</td>
      <td>${esc(trace.done)}</td>
      <td>${esc(trace.next)}</td>
      <td>${esc(trace.help)}</td>
    </tr>
  `).join('');
  const notes = state.notes.slice(0, 6).map(note => `<li>${esc(note.text)} <span>(${new Date(note.date).toLocaleDateString('fr-FR')})</span></li>`).join('');
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan parent</title>
  <style>body{font-family:Arial,sans-serif;margin:32px;color:#161616;line-height:1.5}h1{margin:0;color:#123b7a}.meta{color:#666}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{border:1px solid #d8e0ea;padding:8px;text-align:left;vertical-align:top}th{background:#edf2f8}.box{border:1px solid #d8e0ea;padding:14px;border-radius:10px;margin:14px 0}</style></head><body>
  <h1>Bilan volontaire · ${esc(state.student)}</h1>
  <p class="meta">${esc(state.level)} · ${new Date().toLocaleDateString('fr-FR')}</p>
  <div class="box"><strong>Objectif familial</strong><br>${esc(state.objective)} · ${Number(state.weeklyGoal || 0)} min/semaine</div>
  <h2>Traces de travail</h2>
  <table><thead><tr><th>Date</th><th>Durée</th><th>Travail réalisé</th><th>Prochaine priorité</th><th>Besoin</th></tr></thead><tbody>${traces || '<tr><td colspan="5">Aucune trace</td></tr>'}</tbody></table>
  <h2>Notes parent</h2><ul>${notes || '<li>Aucune note.</li>'}</ul>
  <script>window.onload=()=>window.print()</script></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
}

function init() {
  const root = document.getElementById('parent-report-app');
  if (!root) return;
  let state = readState();

  function render() {
    const totalMinutes = state.traces.reduce((sum, trace) => sum + Number(trace.minutes || 0), 0);
    const avgConfidence = state.traces.length
      ? Math.round((state.traces.reduce((sum, trace) => sum + Number(trace.confidence || 0), 0) / state.traces.length) * 10) / 10
      : 0;
    const weeklyRatio = Math.min(100, Math.round((totalMinutes / Math.max(1, Number(state.weeklyGoal || 1))) * 100));
    const lastTrace = state.traces[0];

    root.innerHTML = `
      <div class="info-layout">
        <div class="info-content">
          <section class="info-card">
            <div class="report-head">
              <div>
                <h2>Espace parent fonctionnel</h2>
                <p>Créer des traces volontaires, préparer un bilan, imprimer ou exporter les données locales.</p>
              </div>
              <button class="btn btn-primary" id="parent-print" type="button">Imprimer le bilan</button>
            </div>
            <div class="metric-grid">
              <div><b>${state.traces.length}</b><span>traces enregistrées</span></div>
              <div><b>${totalMinutes}</b><span>minutes déclarées</span></div>
              <div><b>${weeklyRatio}%</b><span>objectif hebdo</span></div>
              <div><b>${avgConfidence || '-'}/4</b><span>confiance moyenne</span></div>
            </div>
          </section>

          <section class="info-card">
            <h2>Cadre de suivi</h2>
            <form class="utility-form utility-form-inline" id="parent-settings">
              <label>Prénom ou initiales<input name="student" value="${esc(state.student)}"></label>
              <label>Niveau<select name="level">${options(LEVELS, state.level)}</select></label>
              <label>Objectif hebdo (min)<input name="weeklyGoal" type="number" min="15" step="15" value="${Number(state.weeklyGoal || 180)}"></label>
              <label>Objectif familial<input name="objective" value="${esc(state.objective)}"></label>
              <button type="submit">Enregistrer</button>
            </form>
          </section>

          <section class="info-card">
            <h2>Ajouter une trace de travail</h2>
            <form class="utility-form" id="parent-trace-form">
              <label>Date<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}"></label>
              <label>Durée<input name="minutes" type="number" min="5" step="5" value="30"></label>
              <label>Travail réalisé<select name="done">${options(DONE)}</select></label>
              <label>Prochaine priorité<select name="next">${options(NEXT)}</select></label>
              <label>Besoin d'aide<select name="help">${options(HELP)}</select></label>
              <label>Confiance ressentie
                <select name="confidence">
                  <option value="1">1 · fragile</option>
                  <option value="2">2 · à consolider</option>
                  <option value="3" selected>3 · correct</option>
                  <option value="4">4 · solide</option>
                </select>
              </label>
              <button type="submit">Ajouter la trace</button>
            </form>
          </section>

          <section class="info-card">
            <div class="report-head">
              <div><h2>Bilan prêt à partager</h2><p>${lastTrace ? `${esc(lastTrace.done)} · prochaine étape : ${esc(lastTrace.next)}` : 'Ajoutez une trace pour générer le bilan.'}</p></div>
              <button class="btn btn-ghost" id="parent-export" type="button">Exporter JSON</button>
            </div>
            <div class="report-grid">
              <div><strong>Élève</strong><p>${esc(state.student)} · ${esc(state.level)}</p></div>
              <div><strong>Objectif</strong><p>${esc(state.objective)}</p></div>
              <div><strong>Règle parent</strong><p>Accompagner avec des traces utiles, sans surveillance permanente.</p></div>
            </div>
          </section>

          <section class="info-card">
            <h2>Historique</h2>
            <div class="teacher-list">
              ${state.traces.length ? state.traces.map(trace => `
                <div class="teacher-rec teacher-sequence">
                  <div>
                    <strong>${new Date(trace.date).toLocaleDateString('fr-FR')} · ${Number(trace.minutes || 0)} min</strong>
                    <p>${esc(trace.done)}</p>
                    <span>${esc(trace.next)} · ${esc(trace.help)}</span>
                  </div>
                  <button type="button" data-del-trace="${trace.id}">Supprimer</button>
                </div>
              `).join('') : '<div class="teacher-empty">Aucune trace pour l’instant.</div>'}
            </div>
          </section>
        </div>

        <aside class="info-side">
          <div class="info-side-card">
            <h2>Note parent</h2>
            <form class="utility-form" id="parent-note-form">
              <label>Observation courte<textarea name="text" rows="4" placeholder="Ex. Il faut vérifier que l’exercice est corrigé avant d’en commencer un nouveau."></textarea></label>
              <button type="submit">Ajouter</button>
            </form>
          </div>
          <div class="info-side-card">
            <h2>Notes enregistrées</h2>
            ${state.notes.length ? state.notes.slice(0, 5).map(note => `<span>${esc(note.text)}</span>`).join('') : '<span>Aucune note.</span>'}
          </div>
          <div class="info-side-card">
            <h2>Famille</h2>
            <a href="famille.html">Ouvrir l’espace famille</a>
          </div>
        </aside>
      </div>`;

    wire();
  }

  function wire() {
    root.querySelector('#parent-settings')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state = {
        ...state,
        student: String(fd.get('student') || 'Élève').trim(),
        level: String(fd.get('level') || state.level),
        objective: String(fd.get('objective') || state.objective).trim(),
        weeklyGoal: Math.max(15, Number(fd.get('weeklyGoal') || 180)),
      };
      saveState(state);
      render();
    });

    root.querySelector('#parent-trace-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state.traces.unshift({
        id: cryptoId(),
        date: String(fd.get('date') || new Date().toISOString().slice(0, 10)),
        minutes: Math.max(0, Number(fd.get('minutes') || 0)),
        done: String(fd.get('done') || ''),
        next: String(fd.get('next') || ''),
        help: String(fd.get('help') || ''),
        confidence: Number(fd.get('confidence') || 3),
      });
      saveState(state);
      render();
    });

    root.querySelector('#parent-note-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const text = String(fd.get('text') || '').trim();
      if (!text) return;
      state.notes.unshift({ id: cryptoId(), date: new Date().toISOString(), text });
      saveState(state);
      render();
    });

    root.querySelectorAll('[data-del-trace]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.traces = state.traces.filter(trace => trace.id !== btn.dataset.delTrace);
        saveState(state);
        render();
      });
    });

    root.querySelector('#parent-print')?.addEventListener('click', () => printReport(state));
    root.querySelector('#parent-export')?.addEventListener('click', () => downloadJson(state));
  }

  render();
}

document.addEventListener('DOMContentLoaded', init);
