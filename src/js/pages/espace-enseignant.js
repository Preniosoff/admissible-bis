const STORE_KEY = 'admiscible-teacher-space';

const DEFAULT_STATE = {
  className: 'Classe sans nom',
  level: 'Terminale',
  students: [],
  recommendations: [
    { id: cryptoId(), title: 'Reprendre le chapitre prioritaire', detail: 'Relire la fiche de cours, traiter deux exercices courts, puis corriger les erreurs.' },
  ],
  sequences: [
    { id: cryptoId(), title: 'Séance de consolidation', objective: 'Reprendre une notion fragile et produire une correction rédigée.', resource: 'cours', query: 'méthode', duration: 50 },
  ],
};

const LEVELS = ['Sixième', 'Cinquième', 'Quatrième', 'Troisième', 'Seconde', 'Première', 'Terminale', 'MPSI', 'MP2I', 'PCSI', 'BCPST', 'MP', 'PC', 'PSI', 'PT'];
const NEEDS = ['Cours à reprendre', 'Méthode à appliquer', 'Exercices à corriger', 'Rédaction à améliorer', 'Erreur récurrente', 'Travail à planifier'];
const RECOMMENDATIONS = [
  { title: 'Reprendre le cours', detail: 'Relire la fiche, reformuler la définition centrale, puis écrire un exemple simple.' },
  { title: 'Appliquer une méthode', detail: 'Lire la méthode, résoudre un exercice guidé, puis noter le point de vigilance.' },
  { title: 'Corriger les erreurs', detail: 'Choisir deux erreurs récentes, écrire la cause, puis refaire une question similaire.' },
  { title: 'Préparer une séance courte', detail: 'Travailler 25 minutes, corriger immédiatement, puis noter la priorité suivante.' },
];
const SEQUENCE_PRESETS = [
  { id: 'cours', title: 'Reprise de cours', objective: 'Comprendre une notion fragile et produire une reformulation correcte.', resource: 'cours', query: 'définition', duration: 35 },
  { id: 'methode', title: 'Méthode guidée', objective: 'Appliquer une démarche type sur un exercice court.', resource: 'methodes', query: 'méthode', duration: 45 },
  { id: 'consolidation', title: 'Consolidation', objective: 'Traiter une série courte et corriger les erreurs immédiatement.', resource: 'exercices', query: 'exercice', duration: 50 },
  { id: 'remediation', title: 'Remédiation', objective: 'Identifier une erreur récurrente et installer un nouveau réflexe.', resource: 'cours', query: 'erreur', duration: 30 },
];

function cryptoId() {
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readState() {
  try {
    return { ...DEFAULT_STATE, ...JSON.parse(localStorage.getItem(STORE_KEY)) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function options(items, selected = '') {
  return items.map(item => `<option value="${esc(item)}" ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('');
}

function statusLabel(score) {
  if (score >= 75) return 'Solide';
  if (score >= 45) return 'À consolider';
  return 'Prioritaire';
}

function statusClass(score) {
  if (score >= 75) return 'ok';
  if (score >= 45) return 'mid';
  return 'low';
}

function workLink(sequence) {
  const target = sequence.resource === 'methodes'
    ? 'methodes.html'
    : sequence.resource === 'exercices'
      ? 'ressources.html'
      : 'recherche.html';
  const q = String(sequence.query || '').trim();
  return q ? `${target}?q=${encodeURIComponent(q)}` : target;
}

export function initEspaceEnseignant() {
  const root = document.getElementById('teacher-app');
  if (!root) return;
  let state = readState();

  function render() {
    const avg = state.students.length
      ? Math.round(state.students.reduce((sum, s) => sum + Number(s.score || 0), 0) / state.students.length)
      : 0;
    const priorityCount = state.students.filter(s => Number(s.score || 0) < 45).length;
    const sequenceCount = state.sequences?.length || 0;
    root.innerHTML = `
      <section class="teacher-hero">
        <div>
          <span class="teacher-kicker">Espace enseignant · données locales</span>
          <h1>${esc(state.className)}</h1>
          <p>Préparer des recommandations de travail, suivre une classe et exporter un bilan collectif sans synchronisation serveur.</p>
        </div>
        <div class="teacher-stats">
          <div><b>${state.students.length}</b><span>élèves</span></div>
          <div><b>${avg}%</b><span>maîtrise moyenne</span></div>
          <div><b>${priorityCount}</b><span>prioritaires</span></div>
          <div><b>${sequenceCount}</b><span>séquences</span></div>
        </div>
      </section>

      <section class="role-offer-card role-offer-teacher">
        <div>
          <span class="offer-pill">Enseignant Pro</span>
          <h2>14,99 € / mois pour transformer les ressources en séquences utilisables.</h2>
          <p>L’offre finance les outils professionnels : espace classe local, recommandations, séquences, exports et bilan imprimable. Les contenus restent accessibles gratuitement.</p>
        </div>
        <div class="role-offer-metrics">
          <span><strong>119 €</strong><small>par an</small></span>
          <span><strong>${sequenceCount}</strong><small>séquences</small></span>
          <span><strong>${state.students.length}</strong><small>entrées classe</small></span>
        </div>
        <a class="neo-cta" href="abonnement.html#enseignant" data-checkout-plan="enseignant_pro">Activer l’offre Pro</a>
      </section>

      <section class="teacher-panel">
        <div class="teacher-panel-head">
          <h2>Paramètres de classe</h2>
          <div class="teacher-actions">
            <button class="btn btn-ghost" id="teacher-auto-plan" type="button">Générer un plan</button>
            <button class="btn btn-primary" id="teacher-export" type="button">Exporter le bilan</button>
          </div>
        </div>
        <form class="teacher-form" id="teacher-settings">
          <label>Nom de la classe<input name="className" value="${esc(state.className)}"></label>
          <label>Niveau<select name="level">${options(LEVELS, state.level)}</select></label>
          <button type="submit">Mettre à jour</button>
        </form>
      </section>

      <section class="teacher-grid">
        <div class="teacher-panel">
          <div class="teacher-panel-head"><h2>Élèves</h2><span>${state.students.length} entrée${state.students.length > 1 ? 's' : ''}</span></div>
          <form class="teacher-form teacher-form-inline" id="student-form">
            <label>Nom<input name="name" placeholder="Nom ou groupe"></label>
            <label>Maîtrise (%)<input name="score" type="number" min="0" max="100" value="50"></label>
            <label>Point à reprendre<select name="need">${options(NEEDS)}</select></label>
            <button type="submit">Ajouter</button>
          </form>
          <div class="teacher-list">
            ${state.students.length ? state.students.map(s => `
              <div class="teacher-row">
                <div>
                  <strong>${esc(s.name)}</strong>
                  <span>${esc(s.need || 'Point à préciser')}</span>
                </div>
                <span class="teacher-chip ${statusClass(Number(s.score || 0))}">${statusLabel(Number(s.score || 0))} · ${Number(s.score || 0)}%</span>
                <button data-del-student="${s.id}" type="button" aria-label="Supprimer ${esc(s.name)}">x</button>
              </div>`).join('') : '<div class="teacher-empty">Aucun élève renseigné. Ajoutez des entrées pour préparer un bilan de classe.</div>'}
          </div>
        </div>

        <div class="teacher-panel">
          <div class="teacher-panel-head"><h2>Recommandations</h2><span>${state.recommendations.length}</span></div>
          <form class="teacher-form" id="recommendation-form">
            <label>Modèle
              <select name="preset">
                ${RECOMMENDATIONS.map((item, index) => `<option value="${index}">${esc(item.title)}</option>`).join('')}
              </select>
            </label>
            <button type="submit">Ajouter</button>
          </form>
          <div class="teacher-list">
            ${state.recommendations.map(r => `
              <div class="teacher-rec">
                <strong>${esc(r.title)}</strong>
                <p>${esc(r.detail)}</p>
                <button data-del-rec="${r.id}" type="button">Supprimer</button>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="teacher-panel">
        <div class="teacher-panel-head"><h2>Séquences pédagogiques</h2><span>${sequenceCount}</span></div>
        <form class="teacher-form teacher-sequence-form" id="sequence-form">
          <label>Modèle
            <select name="preset">${SEQUENCE_PRESETS.map(item => `<option value="${item.id}">${esc(item.title)} · ${item.duration} min</option>`).join('')}</select>
          </label>
          <label>Notion ciblée
            <select name="query">${options(['Suites', 'Dérivation', 'Fonctions', 'Probabilités', 'Optique', 'Mécanique', 'Rédaction', 'Méthode de concours'])}</select>
          </label>
          <button type="submit">Ajouter</button>
        </form>
        <div class="teacher-list">
          ${(state.sequences || []).map(seq => `
            <div class="teacher-rec teacher-sequence">
              <div>
                <strong>${esc(seq.title)}</strong>
                <p>${esc(seq.objective)}</p>
                <span>${Number(seq.duration || 0)} min · ${esc(seq.query || 'recherche libre')}</span>
              </div>
              <div class="teacher-actions">
                <a href="${workLink(seq)}">Lien de travail</a>
                <button data-del-seq="${seq.id}" type="button">Supprimer</button>
              </div>
            </div>`).join('')}
        </div>
      </section>

      <section class="teacher-panel">
        <div class="teacher-panel-head">
          <h2>Portabilité locale</h2>
          <span>aucune synchronisation serveur</span>
        </div>
        <div class="teacher-actions-row">
          <button class="btn btn-ghost" id="teacher-json-export" type="button">Exporter JSON</button>
          <button class="btn btn-ghost" id="teacher-csv-export" type="button">Exporter CSV</button>
          <label class="teacher-import">
            Importer JSON
            <input id="teacher-json-import" type="file" accept="application/json">
          </label>
        </div>
      </section>
    `;

    wire();
  }

  function wire() {
    root.querySelector('#teacher-settings')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state = { ...state, className: fd.get('className') || state.className, level: fd.get('level') || state.level };
      saveState(state);
      render();
    });

    root.querySelector('#student-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const name = String(fd.get('name') || '').trim();
      if (!name) return;
      state.students.push({
        id: cryptoId(),
        name,
        score: Math.max(0, Math.min(100, Number(fd.get('score') || 0))),
        need: String(fd.get('need') || '').trim(),
      });
      saveState(state);
      render();
    });

    root.querySelector('#recommendation-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const preset = RECOMMENDATIONS[Number(fd.get('preset') || 0)] || RECOMMENDATIONS[0];
      state.recommendations.push({ id: cryptoId(), title: preset.title, detail: preset.detail });
      saveState(state);
      render();
    });

    root.querySelector('#sequence-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const preset = SEQUENCE_PRESETS.find(item => item.id === fd.get('preset')) || SEQUENCE_PRESETS[0];
      state.sequences = state.sequences || [];
      state.sequences.push({
        id: cryptoId(),
        title: preset.title,
        objective: preset.objective,
        resource: preset.resource,
        query: String(fd.get('query') || preset.query),
        duration: preset.duration,
      });
      saveState(state);
      render();
    });

    root.querySelectorAll('[data-del-student]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.students = state.students.filter(s => s.id !== btn.dataset.delStudent);
        saveState(state);
        render();
      });
    });

    root.querySelectorAll('[data-del-rec]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.recommendations = state.recommendations.filter(r => r.id !== btn.dataset.delRec);
        saveState(state);
        render();
      });
    });

    root.querySelectorAll('[data-del-seq]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.sequences = (state.sequences || []).filter(seq => seq.id !== btn.dataset.delSeq);
        saveState(state);
        render();
      });
    });

    root.querySelector('#teacher-export')?.addEventListener('click', exportReport);
    root.querySelector('#teacher-auto-plan')?.addEventListener('click', generatePlan);
    root.querySelector('#teacher-json-export')?.addEventListener('click', exportJson);
    root.querySelector('#teacher-csv-export')?.addEventListener('click', exportCsv);
    root.querySelector('#teacher-json-import')?.addEventListener('change', importJson);
  }

  function generatePlan() {
    const low = state.students.filter(s => Number(s.score || 0) < 45);
    const mid = state.students.filter(s => Number(s.score || 0) >= 45 && Number(s.score || 0) < 75);
    const dominantNeed = [...state.students]
      .map(s => s.need)
      .filter(Boolean)
      .sort((a, b) =>
        state.students.filter(s => s.need === b).length - state.students.filter(s => s.need === a).length
      )[0] || 'Cours à reprendre';

    state.recommendations.unshift({
      id: cryptoId(),
      title: `Plan prioritaire · ${dominantNeed}`,
      detail: `${low.length} élève(s) prioritaire(s), ${mid.length} à consolider. Séance recommandée : 12 min de rappel, 25 min d'application, 10 min de correction guidée.`,
    });
    state.sequences = state.sequences || [];
    state.sequences.unshift({
      id: cryptoId(),
      title: 'Séance générée automatiquement',
      objective: `Traiter la priorité collective : ${dominantNeed}.`,
      resource: dominantNeed.includes('Méthode') ? 'methodes' : dominantNeed.includes('Exercices') ? 'exercices' : 'cours',
      query: dominantNeed,
      duration: 50,
    });
    saveState(state);
    render();
  }

  function exportReport() {
    const rows = state.students.map(s =>
      `<tr><td>${esc(s.name)}</td><td>${Number(s.score || 0)}%</td><td>${esc(statusLabel(Number(s.score || 0)))}</td><td>${esc(s.need || '')}</td></tr>`
    ).join('');
    const recs = state.recommendations.map(r => `<li><strong>${esc(r.title)}</strong> — ${esc(r.detail)}</li>`).join('');
    const seqs = (state.sequences || []).map(s => `<li><strong>${esc(s.title)}</strong> — ${esc(s.objective)} (${Number(s.duration || 0)} min)</li>`).join('');
    const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan classe</title>
    <style>body{font-family:Arial,sans-serif;margin:32px;color:#161616;line-height:1.5}h1{color:#123b7a;margin:0}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d8e0ea;padding:8px;text-align:left}th{background:#edf2f8}.meta{color:#666}</style></head><body>
    <h1>Bilan de classe · ${esc(state.className)}</h1><p class="meta">${esc(state.level)} · ${new Date().toLocaleDateString('fr-FR')}</p>
    <h2>Élèves</h2><table><thead><tr><th>Nom</th><th>Maîtrise</th><th>État</th><th>Point à reprendre</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Aucune entrée</td></tr>'}</tbody></table>
    <h2>Recommandations</h2><ul>${recs}</ul><h2>Séquences</h2><ul>${seqs}</ul><script>window.onload=()=>window.print()</script></body></html>`;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(html);
    win.document.close();
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `admiscible-${state.className.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportCsv() {
    const rows = [
      ['nom', 'maitrise', 'statut', 'point_a_reprendre'],
      ...state.students.map(s => [s.name, Number(s.score || 0), statusLabel(Number(s.score || 0)), s.need || '']),
    ];
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `admiscible-${state.className.replace(/\s+/g, '-').toLowerCase()}-eleves.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJson(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      try {
        const parsed = JSON.parse(String(reader.result || '{}'));
        state = {
          ...DEFAULT_STATE,
          ...parsed,
          students: Array.isArray(parsed.students) ? parsed.students : [],
          recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : DEFAULT_STATE.recommendations,
          sequences: Array.isArray(parsed.sequences) ? parsed.sequences : DEFAULT_STATE.sequences,
        };
        saveState(state);
        render();
      } catch {
        alert('Le fichier importé n’est pas lisible.');
      }
    });
    reader.readAsText(file);
  }

  render();
}
