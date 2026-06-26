const STORE_KEY = 'admiscible-private-tutor-space';

const LEVELS = ['Sixième', 'Cinquième', 'Quatrième', 'Troisième', 'Seconde', 'Première', 'Terminale', 'MPSI', 'MP2I', 'PCSI', 'BCPST', 'MP', 'PC', 'PSI', 'PT'];
const SUBJECTS = ['Mathématiques', 'Physique-chimie', 'NSI', 'SI', 'Français', 'Méthodologie'];
const RESOURCE_TYPES = ['Cours', 'Méthode', 'Exercice', 'Annale', 'Erreur à reprendre'];
const STATUS = ['À faire', 'En cours', 'À corriger', 'Validé'];
const SESSION_FOCUS = ['Reprise de cours', 'Exercices guidés', 'Correction', 'Méthode', 'Préparation contrôle', 'Concours'];

const DEFAULT_STATE = {
  tutorName: 'Prof particulier',
  students: [
    {
      id: cryptoId(),
      name: 'Élève 1',
      level: 'Terminale',
      subject: 'Mathématiques',
      objective: 'Stabiliser les méthodes avant le contrôle',
      chapter: 'Suites',
      confidence: 48,
      nextSession: '',
    },
  ],
  assignments: [
    { id: cryptoId(), studentId: '', type: 'Méthode', title: 'Revoir la méthode du chapitre', chapter: 'Suites', status: 'À faire', link: 'methodes.html?q=Suites' },
  ],
  sessions: [
    { id: cryptoId(), studentId: '', date: today(), duration: 60, focus: 'Reprise de cours', summary: 'Identifier le blocage principal, refaire un exemple, puis donner un exercice court.' },
  ],
};

function cryptoId() {
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
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
    const students = Array.isArray(parsed.students) ? parsed.students : DEFAULT_STATE.students;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      students,
      assignments: Array.isArray(parsed.assignments) ? parsed.assignments : [],
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function studentName(state, id) {
  return state.students.find(student => student.id === id)?.name || 'Tous les élèves';
}

function studentOptions(state, selected = '') {
  const rows = state.students.map(student => `<option value="${esc(student.id)}" ${student.id === selected ? 'selected' : ''}>${esc(student.name)} · ${esc(student.level)}</option>`);
  return `<option value="">Tous les élèves</option>${rows.join('')}`;
}

function confidenceLabel(value) {
  const score = Number(value || 0);
  if (score >= 75) return 'Autonome';
  if (score >= 50) return 'À consolider';
  return 'Prioritaire';
}

function confidenceClass(value) {
  const score = Number(value || 0);
  if (score >= 75) return 'ok';
  if (score >= 50) return 'mid';
  return 'low';
}

function resourceLink(type, chapter) {
  const query = encodeURIComponent(chapter || '');
  if (type === 'Cours') return `cours.html?q=${query}`;
  if (type === 'Méthode') return `methodes.html?q=${query}`;
  if (type === 'Exercice') return `ressources.html?q=${query}`;
  if (type === 'Annale') return `annales.html?q=${query}`;
  return `erreurs.html?q=${query}`;
}

export function initEspaceProfParticulier() {
  const root = document.getElementById('tutor-app');
  if (!root) return;
  let state = readState();

  function render() {
    const activeAssignments = state.assignments.filter(item => item.status !== 'Validé').length;
    const averageConfidence = state.students.length
      ? Math.round(state.students.reduce((sum, student) => sum + Number(student.confidence || 0), 0) / state.students.length)
      : 0;
    const nextSession = state.sessions
      .filter(item => item.date)
      .sort((a, b) => String(a.date).localeCompare(String(b.date)))[0];

    root.innerHTML = `
      <section class="teacher-hero tutor-hero">
        <div>
          <span class="teacher-kicker">Espace prof particulier · suivi individuel</span>
          <h1>${esc(state.tutorName)}</h1>
          <p>Piloter un portefeuille d’élèves : objectifs, cours à reprendre, exercices à faire, séances, devoirs et bilans exportables.</p>
        </div>
        <div class="teacher-stats">
          <div><b>${state.students.length}</b><span>élèves</span></div>
          <div><b>${activeAssignments}</b><span>actions ouvertes</span></div>
          <div><b>${averageConfidence}%</b><span>maîtrise moyenne</span></div>
          <div><b>${nextSession ? esc(nextSession.date) : '-'}</b><span>prochaine séance</span></div>
        </div>
      </section>

      <section class="role-offer-card role-offer-tutor">
        <div>
          <span class="offer-pill">Prof particulier Pro</span>
          <h2>Un cockpit pour ne plus piloter vos élèves dans des notes éparpillées.</h2>
          <p>Ajoutez vos élèves, rattachez des cours et exercices, préparez les séances, puis exportez un bilan propre après le travail.</p>
        </div>
        <div class="role-offer-metrics">
          <span><strong>${state.students.length}</strong><small>élèves</small></span>
          <span><strong>${state.assignments.length}</strong><small>devoirs</small></span>
          <span><strong>${state.sessions.length}</strong><small>séances</small></span>
        </div>
        <a class="neo-cta" href="abonnement.html#prof-particulier" data-checkout-plan="prof_particulier_pro">Activer l’offre</a>
      </section>

      <section class="teacher-panel">
        <div class="teacher-panel-head">
          <h2>Paramètres</h2>
          <div class="teacher-actions">
            <button class="btn btn-ghost" id="tutor-plan" type="button">Générer un plan</button>
            <button class="btn btn-primary" id="tutor-print" type="button">Exporter un bilan</button>
          </div>
        </div>
        <form class="teacher-form teacher-form-inline tutor-settings" id="tutor-settings">
          <label>Nom affiché<input name="tutorName" value="${esc(state.tutorName)}"></label>
          <label>Élève à cibler<select name="studentId">${studentOptions(state)}</select></label>
          <label>Action rapide<select name="quickType">${options(RESOURCE_TYPES)}</select></label>
          <button type="submit">Mettre à jour</button>
        </form>
      </section>

      <section class="teacher-grid tutor-grid">
        <div class="teacher-panel">
          <div class="teacher-panel-head"><h2>Élèves suivis</h2><span>${state.students.length} profil${state.students.length > 1 ? 's' : ''}</span></div>
          <form class="teacher-form teacher-form-inline tutor-student-form" id="tutor-student-form">
            <label>Élève<input name="name" placeholder="Ex. Lina"></label>
            <label>Niveau<select name="level">${options(LEVELS)}</select></label>
            <label>Matière<select name="subject">${options(SUBJECTS)}</select></label>
            <label>Chapitre<input name="chapter" placeholder="Ex. Suites"></label>
            <label>Maîtrise (%)<input name="confidence" type="number" min="0" max="100" value="45"></label>
            <button type="submit">Ajouter</button>
          </form>
          <div class="teacher-list">
            ${state.students.map(student => `
              <article class="teacher-row tutor-student-row">
                <div>
                  <strong>${esc(student.name)}</strong>
                  <span>${esc(student.level)} · ${esc(student.subject)} · ${esc(student.chapter || 'chapitre à préciser')}</span>
                  <small>${esc(student.objective || 'Objectif à préciser')}</small>
                </div>
                <span class="teacher-chip ${confidenceClass(student.confidence)}">${confidenceLabel(student.confidence)} · ${Number(student.confidence || 0)}%</span>
                <button type="button" data-del-student="${student.id}" aria-label="Supprimer ${esc(student.name)}">x</button>
              </article>
            `).join('')}
          </div>
        </div>

        <aside class="teacher-panel">
          <div class="teacher-panel-head"><h2>Prochaine action</h2><span>priorité</span></div>
          <div class="tutor-next-list">
            ${state.students.map(student => {
              const open = state.assignments.find(item => item.studentId === student.id && item.status !== 'Validé');
              return `<a class="tutor-next-card" href="${open?.link || resourceLink('Cours', student.chapter)}">
                <strong>${esc(student.name)}</strong>
                <span>${esc(open?.title || `Reprendre ${student.chapter || 'le chapitre prioritaire'}`)}</span>
                <small>${esc(open?.status || confidenceLabel(student.confidence))}</small>
              </a>`;
            }).join('')}
          </div>
        </aside>
      </section>

      <section class="teacher-grid tutor-grid">
        <div class="teacher-panel">
          <div class="teacher-panel-head"><h2>Travail donné</h2><span>${state.assignments.length}</span></div>
          <form class="teacher-form teacher-sequence-form tutor-assignment-form" id="tutor-assignment-form">
            <label>Élève<select name="studentId">${studentOptions(state)}</select></label>
            <label>Type<select name="type">${options(RESOURCE_TYPES)}</select></label>
            <label>Intitulé<input name="title" placeholder="Ex. Faire deux exercices sur les suites"></label>
            <label>Chapitre<input name="chapter" placeholder="Ex. Suites"></label>
            <button type="submit">Ajouter</button>
          </form>
          <div class="teacher-list">
            ${state.assignments.map(item => `
              <article class="teacher-rec teacher-sequence tutor-assignment">
                <div>
                  <strong>${esc(item.title)}</strong>
                  <p>${esc(studentName(state, item.studentId))} · ${esc(item.type)} · ${esc(item.chapter || 'chapitre libre')}</p>
                  <span>${esc(item.status)}</span>
                </div>
                <div class="teacher-actions">
                  <a href="${esc(item.link || resourceLink(item.type, item.chapter))}">Ouvrir</a>
                  <button type="button" data-next-status="${item.id}">Avancer</button>
                  <button type="button" data-del-assignment="${item.id}">Supprimer</button>
                </div>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="teacher-panel">
          <div class="teacher-panel-head"><h2>Séances</h2><span>${state.sessions.length}</span></div>
          <form class="teacher-form" id="tutor-session-form">
            <label>Élève<select name="studentId">${studentOptions(state)}</select></label>
            <label>Date<input name="date" type="date" value="${today()}"></label>
            <label>Durée<input name="duration" type="number" min="15" step="15" value="60"></label>
            <label>Focus<select name="focus">${options(SESSION_FOCUS)}</select></label>
            <label>Résumé<textarea name="summary" rows="4" placeholder="Ce qui a été fait, ce qui bloque, ce qui est à refaire."></textarea></label>
            <button type="submit">Enregistrer la séance</button>
          </form>
          <div class="teacher-list">
            ${state.sessions.map(session => `
              <article class="teacher-rec">
                <strong>${esc(session.date)} · ${esc(studentName(state, session.studentId))}</strong>
                <p>${esc(session.focus)} · ${Number(session.duration || 0)} min</p>
                <p>${esc(session.summary)}</p>
                <button type="button" data-del-session="${session.id}">Supprimer</button>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="teacher-panel">
        <div class="teacher-panel-head">
          <h2>Portabilité locale</h2>
          <span>données enregistrées dans ce navigateur</span>
        </div>
        <div class="teacher-actions-row">
          <button class="btn btn-ghost" id="tutor-json-export" type="button">Exporter JSON</button>
          <button class="btn btn-ghost" id="tutor-csv-export" type="button">Exporter CSV</button>
          <label class="teacher-import">Importer JSON<input id="tutor-json-import" type="file" accept="application/json"></label>
        </div>
      </section>
    `;

    wire();
  }

  function wire() {
    root.querySelector('#tutor-settings')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state.tutorName = String(fd.get('tutorName') || state.tutorName).trim() || state.tutorName;
      const studentId = String(fd.get('studentId') || '');
      const type = String(fd.get('quickType') || 'Cours');
      const student = state.students.find(item => item.id === studentId) || state.students[0];
      if (student) {
        state.assignments.unshift({
          id: cryptoId(),
          studentId: student.id,
          type,
          title: `${type} à reprendre · ${student.chapter || student.subject}`,
          chapter: student.chapter || student.subject,
          status: 'À faire',
          link: resourceLink(type, student.chapter || student.subject),
        });
      }
      saveState(state);
      render();
    });

    root.querySelector('#tutor-student-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const name = String(fd.get('name') || '').trim();
      if (!name) return;
      state.students.push({
        id: cryptoId(),
        name,
        level: String(fd.get('level') || ''),
        subject: String(fd.get('subject') || ''),
        objective: 'Objectif à préciser à la prochaine séance',
        chapter: String(fd.get('chapter') || '').trim(),
        confidence: Math.max(0, Math.min(100, Number(fd.get('confidence') || 0))),
        nextSession: '',
      });
      saveState(state);
      render();
    });

    root.querySelector('#tutor-assignment-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const type = String(fd.get('type') || 'Cours');
      const chapter = String(fd.get('chapter') || '').trim();
      const title = String(fd.get('title') || '').trim() || `${type} à travailler`;
      state.assignments.unshift({
        id: cryptoId(),
        studentId: String(fd.get('studentId') || ''),
        type,
        title,
        chapter,
        status: 'À faire',
        link: resourceLink(type, chapter || title),
      });
      saveState(state);
      render();
    });

    root.querySelector('#tutor-session-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      state.sessions.unshift({
        id: cryptoId(),
        studentId: String(fd.get('studentId') || ''),
        date: String(fd.get('date') || today()),
        duration: Number(fd.get('duration') || 60),
        focus: String(fd.get('focus') || ''),
        summary: String(fd.get('summary') || '').trim(),
      });
      saveState(state);
      render();
    });

    root.querySelectorAll('[data-next-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const order = STATUS;
        state.assignments = state.assignments.map(item => {
          if (item.id !== btn.dataset.nextStatus) return item;
          const index = order.indexOf(item.status);
          return { ...item, status: order[(index + 1) % order.length] };
        });
        saveState(state);
        render();
      });
    });

    root.querySelectorAll('[data-del-student]').forEach(btn => btn.addEventListener('click', () => {
      state.students = state.students.filter(item => item.id !== btn.dataset.delStudent);
      state.assignments = state.assignments.filter(item => item.studentId !== btn.dataset.delStudent);
      state.sessions = state.sessions.filter(item => item.studentId !== btn.dataset.delStudent);
      saveState(state);
      render();
    }));
    root.querySelectorAll('[data-del-assignment]').forEach(btn => btn.addEventListener('click', () => {
      state.assignments = state.assignments.filter(item => item.id !== btn.dataset.delAssignment);
      saveState(state);
      render();
    }));
    root.querySelectorAll('[data-del-session]').forEach(btn => btn.addEventListener('click', () => {
      state.sessions = state.sessions.filter(item => item.id !== btn.dataset.delSession);
      saveState(state);
      render();
    }));

    root.querySelector('#tutor-plan')?.addEventListener('click', generatePlan);
    root.querySelector('#tutor-print')?.addEventListener('click', exportReport);
    root.querySelector('#tutor-json-export')?.addEventListener('click', exportJson);
    root.querySelector('#tutor-csv-export')?.addEventListener('click', exportCsv);
    root.querySelector('#tutor-json-import')?.addEventListener('change', importJson);
  }

  function generatePlan() {
    state.students
      .filter(student => Number(student.confidence || 0) < 60)
      .forEach(student => {
        const chapter = student.chapter || student.subject;
        state.assignments.unshift({
          id: cryptoId(),
          studentId: student.id,
          type: 'Exercice',
          title: `Plan de consolidation · ${chapter}`,
          chapter,
          status: 'À faire',
          link: resourceLink('Exercice', chapter),
        });
      });
    saveState(state);
    render();
  }

  function exportReport() {
    const students = state.students.map(student => `<tr><td>${esc(student.name)}</td><td>${esc(student.level)}</td><td>${esc(student.subject)}</td><td>${esc(student.chapter)}</td><td>${Number(student.confidence || 0)}%</td></tr>`).join('');
    const assignments = state.assignments.map(item => `<li><strong>${esc(studentName(state, item.studentId))}</strong> — ${esc(item.title)} (${esc(item.status)})</li>`).join('');
    const sessions = state.sessions.map(item => `<li><strong>${esc(item.date)} · ${esc(studentName(state, item.studentId))}</strong> — ${esc(item.focus)} : ${esc(item.summary)}</li>`).join('');
    const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan prof particulier</title><style>body{font-family:Arial,sans-serif;margin:32px;color:#161616;line-height:1.5}h1{color:#123b7a;margin:0}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d8e0ea;padding:8px;text-align:left}th{background:#edf2f8}.meta{color:#666}</style></head><body><h1>Bilan prof particulier · ${esc(state.tutorName)}</h1><p class="meta">${new Date().toLocaleDateString('fr-FR')}</p><h2>Élèves</h2><table><thead><tr><th>Élève</th><th>Niveau</th><th>Matière</th><th>Chapitre</th><th>Maîtrise</th></tr></thead><tbody>${students || '<tr><td colspan="5">Aucun élève</td></tr>'}</tbody></table><h2>Travail donné</h2><ul>${assignments}</ul><h2>Séances</h2><ul>${sessions}</ul><script>window.onload=()=>window.print()</script></body></html>`;
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
    a.download = 'admiscible-prof-particulier.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportCsv() {
    const rows = [
      ['eleve', 'niveau', 'matiere', 'chapitre', 'maitrise'],
      ...state.students.map(student => [student.name, student.level, student.subject, student.chapter, Number(student.confidence || 0)]),
    ];
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'admiscible-prof-particulier-eleves.csv';
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
          assignments: Array.isArray(parsed.assignments) ? parsed.assignments : [],
          sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
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
