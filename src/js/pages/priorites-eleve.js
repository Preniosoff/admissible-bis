import '../main.js';

const ACTIONS = {
  brevet: ['Relire une fiche courte', 'Faire deux exercices d’application', 'Noter une erreur à ne plus refaire'],
  bac: ['Reprendre la définition ou le théorème central', 'Traiter un exercice type', 'Rédiger une correction propre'],
  cpge: ['Identifier le résultat du cours à mobiliser', 'Faire un exercice chronométré', 'Comparer sa rédaction à une méthode'],
  concours: ['Choisir une méthode de concours', 'Résoudre une question ciblée', 'Écrire un point de vigilance'],
};

const SUBJECTS = {
  brevet: ['Fractions et calcul', 'Équations', 'Fonctions', 'Géométrie', 'Probabilités'],
  bac: ['Suites', 'Dérivation', 'Fonctions', 'Probabilités', 'Physique', 'Chimie'],
  cpge: ['Analyse', 'Algèbre', 'Probabilités', 'Mécanique', 'Électricité', 'Thermodynamique'],
  concours: ['Méthode de rédaction', 'Sujet court', 'Oral', 'Gestion du temps', 'Erreur récurrente'],
};

const LINKS = {
  cours: 'cours.html',
  methodes: 'methodes.html',
  exercices: 'ressources.html',
  erreurs: 'erreurs.html',
  focus: 'focus.html',
};

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function buildPlan(goal, subject, difficulty, minutes) {
  const base = ACTIONS[goal] || ACTIONS.bac;
  const time = Number(minutes || 45);
  const slots = time < 35 ? [8, 18, 6] : time < 70 ? [15, 35, 10] : [25, 55, 15];
  const emphasis = difficulty === 'cours'
    ? ['cours', 'methodes', 'erreurs']
    : difficulty === 'exercices'
      ? ['methodes', 'exercices', 'erreurs']
      : ['erreurs', 'cours', 'focus'];
  return base.map((label, index) => ({
    label,
    detail: `${slots[index]} min · ${subject || 'notion au choix'}`,
    href: LINKS[emphasis[index]],
  }));
}

function renderPlan(root, plan) {
  root.querySelector('#student-plan').innerHTML = `
    <section class="info-card">
      <h2>Plan conseillé</h2>
      <div class="action-grid">
        ${plan.map((item, index) => `
          <a class="action-card" href="${item.href}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${esc(item.label)}</strong>
            <small>${esc(item.detail)}</small>
          </a>`).join('')}
      </div>
    </section>`;
}

function subjectOptions(goal) {
  return (SUBJECTS[goal] || SUBJECTS.bac)
    .map(subject => `<option value="${esc(subject)}">${esc(subject)}</option>`)
    .join('');
}

function init() {
  const root = document.getElementById('student-priorities-app');
  if (!root) return;
  root.innerHTML = `
    <div class="info-layout">
      <div class="info-content">
        <section class="info-card">
          <h2>Préparer la séance</h2>
          <form class="utility-form" id="student-priority-form">
            <label>Objectif
              <select name="goal" id="priority-goal">
                <option value="bac">Préparer un contrôle ou le bac</option>
                <option value="brevet">Consolider les bases</option>
                <option value="cpge">Travailler en CPGE</option>
                <option value="concours">Préparer un concours</option>
              </select>
            </label>
            <label>Matière ou notion
              <select name="subject" id="priority-subject">${subjectOptions('bac')}</select>
            </label>
            <label>Point le plus fragile
              <select name="difficulty">
                <option value="cours">Je ne comprends pas encore le cours</option>
                <option value="exercices">Je bloque sur les exercices</option>
                <option value="erreurs">Je refais souvent les mêmes erreurs</option>
              </select>
            </label>
            <label>Temps disponible
              <input name="minutes" type="number" min="15" max="180" value="45">
            </label>
            <button type="submit">Générer mes priorités</button>
          </form>
        </section>
        <div id="student-plan"></div>
      </div>
      <aside class="info-side">
        <div class="info-side-card">
          <h2>Règle simple</h2>
          <span>Une séance utile produit une trace : exercice corrigé, erreur notée ou notion reformulée.</span>
        </div>
      </aside>
    </div>`;
  const form = root.querySelector('#student-priority-form');
  const goalSelect = root.querySelector('#priority-goal');
  const subjectSelect = root.querySelector('#priority-subject');
  const submit = () => {
    const fd = new FormData(form);
    renderPlan(root, buildPlan(fd.get('goal'), fd.get('subject'), fd.get('difficulty'), fd.get('minutes')));
  };
  goalSelect?.addEventListener('change', () => {
    subjectSelect.innerHTML = subjectOptions(goalSelect.value);
    submit();
  });
  form.querySelectorAll('select, input').forEach(field => {
    field.addEventListener('change', submit);
  });
  form.addEventListener('submit', e => { e.preventDefault(); submit(); });
  submit();
}

document.addEventListener('DOMContentLoaded', init);
