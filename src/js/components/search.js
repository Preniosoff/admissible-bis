export function initSearch({ initialView = 'course' } = {}) {
  const input = document.getElementById('course-search');
  const filterBtns = document.querySelectorAll('.filter[data-filter]');
  const viewBtns = document.querySelectorAll('.course-view[data-view]');
  const filterWrap = document.querySelector('.context-filter-wrap');
  const filterGroups = document.querySelectorAll('[data-filter-group]');
  const filterLabel = document.querySelector('.context-filter-label');
  let activeFilter = 'all';
  let activeView = initialView;

  const courseTypes = new Set(['th', 'def', 'prop', 'form']);
  const typeAliases = {
    th: ['th'],
    def: ['def', 'df'],
    prop: ['prop', 'pr'],
    form: ['form'],
    meth: ['meth', 'methode'],
    ex: ['ex', 'exo'],
  };

  function hasType(card, type) {
    return (typeAliases[type] || [type]).some(cls => card.classList.contains(cls));
  }

  function cardType(card) {
    if (hasType(card, 'ex')) return 'ex';
    if (hasType(card, 'meth')) return 'meth';
    if (hasType(card, 'th')) return 'th';
    if (hasType(card, 'def')) return 'def';
    if (hasType(card, 'prop')) return 'prop';
    if (hasType(card, 'form')) return 'form';
    return 'other';
  }

  function resetFineFilter(next = 'all') {
    activeFilter = next;
    const group = document.querySelector(`[data-filter-group="${activeView === 'exercises' ? 'exercises' : 'course'}"]`);
    filterBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === next && group?.contains(btn)));
  }

  function setFilterContext() {
    filterGroups.forEach(group => group.classList.add('hidden'));
    if (activeView === 'course') {
      filterWrap?.classList.remove('hidden');
      document.querySelector('[data-filter-group="course"]')?.classList.remove('hidden');
      if (filterLabel) filterLabel.textContent = 'Dans le cours';
      if (input) input.placeholder = 'Rechercher une notion, un théorème, une définition...';
    } else if (activeView === 'exercises') {
      filterWrap?.classList.remove('hidden');
      document.querySelector('[data-filter-group="exercises"]')?.classList.remove('hidden');
      if (filterLabel) filterLabel.textContent = 'Dans les exercices';
      if (input) input.placeholder = 'Rechercher un exercice, une correction, un niveau...';
    } else {
      filterWrap?.classList.add('hidden');
      if (filterLabel) filterLabel.textContent = '';
      if (input) input.placeholder = 'Rechercher une méthode...';
    }
  }

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter || 'all';
        applyFilters();
      });
    });
  }

  if (viewBtns.length) {
    viewBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.view === activeView));
    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeView = btn.dataset.view || 'course';
        resetFineFilter('all');
        setFilterContext();
        applyFilters();
      });
    });
  }

  if (input) {
    input.addEventListener('input', () => applyFilters());
  }

  window.admiscibleApplyCourseFilters = applyFilters;
  setFilterContext();
  applyFilters();

  function applyFilters() {
    const query = (input?.value || '').toLowerCase();
    const cards = document.querySelectorAll('.card');
    let visibleCount = 0;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const matchSearch = !query || text.includes(query);
      const type = cardType(card);

      let matchView = false;
      if (activeView === 'course') matchView = courseTypes.has(type);
      if (!matchView && activeView === 'exercises') matchView = type === 'ex';
      if (!matchView && activeView === 'methods') matchView = type === 'meth';

      let matchFilter = activeFilter === 'all';
      if (!matchFilter && activeFilter.startsWith('level-')) {
        const n = activeFilter.replace('level-', '');
        matchFilter = text.includes(`niveau ${n}`) || text.includes(`niveau-${n}`);
      } else if (!matchFilter) {
        matchFilter = hasType(card, activeFilter);
      }

      const visible = matchSearch && matchView && matchFilter;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    document.querySelectorAll('.sec').forEach(sec => {
      const hasVisible = sec.querySelector('.card:not([style*="display: none"])');
      sec.style.display = hasVisible ? '' : 'none';
    });

    document.querySelectorAll('.chap').forEach(chap => {
      if (chap.classList.contains('chap--shell')) {
        chap.style.display = '';
        return;
      }
      const hasVisible = chap.querySelector('.card:not([style*="display: none"])');
      chap.style.display = hasVisible ? '' : 'none';
    });

    const content = document.getElementById('content-container');
    if (content) {
      let empty = content.querySelector('.course-empty-state');
      if (!visibleCount) {
        if (!empty) {
          empty = document.createElement('div');
          empty.className = 'course-empty-state';
          empty.textContent = 'Aucun contenu ne correspond à ce filtre dans les chapitres chargés.';
          content.appendChild(empty);
        }
      } else {
        empty?.remove();
      }
    }
  }
}
