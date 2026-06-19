// ── Skeleton loader ───────────────────────────────────────────────────────────
// Usage: skeletonCards(3) → HTML string with 3 skeleton card placeholders

// Injecte les styles une seule fois
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected || document.getElementById('skeleton-styles')) return;
  stylesInjected = true;
  const s = document.createElement('style');
  s.id = 'skeleton-styles';
  s.textContent = `
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position:  400px 0; }
    }
    .skeleton {
      background: linear-gradient(90deg,
        var(--bg-2,#f0f0f0) 25%,
        var(--bg-hover,#e0e0e0) 50%,
        var(--bg-2,#f0f0f0) 75%
      );
      background-size: 800px 100%;
      animation: shimmer 1.4s infinite linear;
      border-radius: 6px;
    }
    .skeleton-card {
      border: 1px solid var(--border-1);
      border-radius: var(--r-lg, 12px);
      padding: 1.1rem 1.25rem;
      margin-bottom: 1rem;
      background: var(--bg-card);
    }
    .skeleton-line { height: 12px; margin-bottom: 8px; }
    .skeleton-line.short  { width: 40%; }
    .skeleton-line.medium { width: 65%; }
    .skeleton-line.long   { width: 90%; }
    .skeleton-line.full   { width: 100%; }
    .skeleton-title { height: 16px; width: 55%; margin-bottom: 12px; }
    .skeleton-block { height: 80px; width: 100%; margin-top: 8px; }
  `;
  document.head.appendChild(s);
}

export function skeletonCards(count = 3, variant = 'default') {
  ensureStyles();
  const card = variant === 'compact'
    ? `<div class="skeleton-card">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-line medium"></div>
        <div class="skeleton skeleton-line short"></div>
       </div>`
    : `<div class="skeleton-card">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-line long"></div>
        <div class="skeleton skeleton-line medium"></div>
        <div class="skeleton skeleton-block"></div>
       </div>`;
  return Array.from({ length: count }, () => card).join('');
}

export function skeletonList(count = 4) {
  ensureStyles();
  return Array.from({ length: count }, (_, i) => `
    <div style="display:flex;align-items:center;gap:12px;padding:0.75rem 0;
                border-bottom:1px solid var(--border-1)">
      <div class="skeleton" style="width:32px;height:32px;border-radius:8px;flex-shrink:0"></div>
      <div style="flex:1">
        <div class="skeleton skeleton-line" style="width:${50 + (i * 13 % 40)}%;margin-bottom:6px"></div>
        <div class="skeleton skeleton-line short" style="height:10px"></div>
      </div>
    </div>`).join('');
}

export function skeletonStats(count = 3) {
  ensureStyles();
  return `<div style="display:flex;gap:1rem;flex-wrap:wrap">
    ${Array.from({ length: count }, () => `
      <div class="skeleton-card" style="flex:1;min-width:100px;text-align:center">
        <div class="skeleton skeleton-line" style="width:50%;margin:0 auto 8px"></div>
        <div class="skeleton skeleton-title" style="width:60%;margin:0 auto"></div>
      </div>`).join('')}
  </div>`;
}
