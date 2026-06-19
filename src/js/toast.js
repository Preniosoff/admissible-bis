// ── Toast system ──────────────────────────────────────────────────────────────
// Usage: toast('Message', 'ok' | 'error' | 'info')

let container;

function getContainer() {
  if (container && document.body.contains(container)) return container;
  container = document.createElement('div');
  container.id = 'toast-container';
  container.style.cssText = `
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    pointer-events: none;
  `;
  document.body.appendChild(container);
  return container;
}

export function toast(message, type = 'ok', duration = 3000) {
  const c = getContainer();

  const el = document.createElement('div');
  el.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.7rem 1.1rem;
    border-radius: 10px;
    font-size: 0.84rem;
    font-weight: 500;
    font-family: inherit;
    max-width: 320px;
    pointer-events: all;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    border: 1px solid transparent;
    animation: toastIn 0.22s cubic-bezier(0.16,1,0.3,1);
    cursor: default;
    line-height: 1.4;
  `;

  const icons = {
    ok:    { svg: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>', bg: 'var(--positive-soft,#d1fae5)', color: 'var(--positive,#22c55e)', border: 'rgba(34,197,94,0.25)' },
    error: { svg: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>', bg: 'var(--negative-soft,#fee2e2)', color: 'var(--negative,#ef4444)', border: 'rgba(239,68,68,0.25)' },
    info:  { svg: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>', bg: 'var(--bg-2,#f1f5f9)', color: 'var(--text-1,#555)', border: 'var(--border-0,#ddd)' },
  };

  const { svg, bg, color, border } = icons[type] || icons.info;
  el.style.background = bg;
  el.style.color = color;
  el.style.borderColor = border;

  el.innerHTML = `
    <span style="flex-shrink:0;display:flex;align-items:center">${svg}</span>
    <span style="color:var(--text-0,#111);flex:1">${message}</span>
  `;

  // Inject keyframes once
  if (!document.getElementById('toast-styles')) {
    const s = document.createElement('style');
    s.id = 'toast-styles';
    s.textContent = `
      @keyframes toastIn  { from { opacity:0; transform:translateY(10px) scale(0.95); } to { opacity:1; transform:none; } }
      @keyframes toastOut { from { opacity:1; transform:none; } to { opacity:0; transform:translateY(6px) scale(0.95); } }
    `;
    document.head.appendChild(s);
  }

  c.appendChild(el);

  const dismiss = () => {
    el.style.animation = 'toastOut 0.18s ease forwards';
    setTimeout(() => el.remove(), 180);
  };

  const timer = setTimeout(dismiss, duration);
  el.addEventListener('click', () => { clearTimeout(timer); dismiss(); });
}
