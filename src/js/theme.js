export function initTheme() {
  const btn = document.getElementById('theme-btn');
  const saved = localStorage.getItem('theme') || 'light';

  function apply(theme) {
    const dark = theme === 'dark';
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (btn) {
      btn.textContent = dark ? 'Mode clair' : 'Mode sombre';
      btn.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
    }
  }

  apply(saved === 'dark' ? 'dark' : 'light');
  btn?.addEventListener('click', () => {
    const next = document.documentElement.hasAttribute('data-theme') ? 'light' : 'dark';
    apply(next);
  });
}
