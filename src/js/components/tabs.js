export function renderTabs(matieres, currentMatiere, onSelect) {
  const container = document.getElementById('tabs-container');
  if (!container) return;

  container.className = 'course-subject-picker';
  container.innerHTML = `
    <select id="matiere-select" aria-label="Choisir une matière">
      ${matieres.map(m => `<option value="${m.id}" ${m.id === currentMatiere ? 'selected' : ''}>${m.nom}</option>`).join('')}
    </select>`;

  container.querySelector('select')?.addEventListener('change', (e) => {
    onSelect(e.target.value);
  });
}
