export function renderSidebar(chapitres, options = {}) {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  container.className = 'sb';
  container.innerHTML = `
    <div class="sb-inner">
      <div class="sb-title">Chapitres</div>
      <ul>
        ${chapitres.map(c => `<li><a href="#${c.id}" data-id="${c.id}">${c.titre}</a></li>`).join('')}
      </ul>
    </div>
  `;

  const setActive = (id) => {
    container.querySelectorAll('a').forEach(a => {
      const active = a.dataset.id === id;
      a.classList.toggle('on', active);
      if (active) a.scrollIntoView({ block: 'nearest' });
    });
  };

  const clickHandler = async (event) => {
    const link = event.target.closest('a[data-id]');
    if (!link || !container.contains(link)) return;
    event.preventDefault();

    const id = link.dataset.id;
    setActive(id);

    const handled = await options.onNavigate?.(id);
    if (!handled) {
      const target = document.getElementById(id);
      target?.scrollIntoView({ block: 'start' });
    }

    document.body.classList.remove('sidebar-open');
  };
  container.addEventListener('click', clickHandler);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { threshold: 0.15, rootMargin: '-80px 0px -60% 0px' });

  const observed = new WeakSet();
  const observeChapters = () => {
    document.querySelectorAll('.chap').forEach(chapter => {
      if (observed.has(chapter)) return;
      observed.add(chapter);
      observer.observe(chapter);
    });
  };

  const content = document.getElementById('content-container');
  const mutationObserver = content
    ? new MutationObserver(observeChapters)
    : null;

  setTimeout(observeChapters, 100);
  mutationObserver?.observe(content, { childList: true, subtree: false });

  return () => {
    container.removeEventListener('click', clickHandler);
    observer.disconnect();
    mutationObserver?.disconnect();
  };
}
