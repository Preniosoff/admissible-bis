/**
 * Generates a styled empty-state block.
 *
 * @param {object} opts
 * @param {string} opts.icon        — SVG string or emoji
 * @param {string} opts.title       — Main heading (bold)
 * @param {string} opts.subtitle    — Secondary line (muted)
 * @param {string} [opts.cta]       — CTA button HTML (full <button> or <a> element)
 * @param {string} [opts.wrapper]   — Extra inline style for the outer div
 */
export function emptyState({ icon, title, subtitle, cta = '', wrapper = '' }) {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                text-align:center;padding:3rem 1.5rem;${wrapper}">
      <div style="margin-bottom:1.25rem;opacity:0.55">${icon}</div>
      <div style="font-size:0.95rem;font-weight:700;letter-spacing:-0.02em;margin-bottom:0.4rem;color:var(--text-0)">
        ${title}
      </div>
      <div style="font-size:0.82rem;color:var(--text-3);line-height:1.5;max-width:280px;margin-bottom:${cta ? '1.5rem' : '0'}">
        ${subtitle}
      </div>
      ${cta}
    </div>`;
}

// ── Icônes SVG réutilisables ──────────────────────────────────────────────────

export const ICONS = {
  checklist: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <rect x="20" y="18" width="20" height="2.5" rx="1.25" fill="var(--text-3)"/>
    <rect x="20" y="26" width="16" height="2.5" rx="1.25" fill="var(--text-3)"/>
    <rect x="20" y="34" width="12" height="2.5" rx="1.25" fill="var(--text-3)"/>
    <circle cx="15" cy="19.25" r="2" fill="var(--accent)"/>
    <circle cx="15" cy="27.25" r="2" fill="var(--accent)"/>
    <circle cx="15" cy="35.25" r="2" fill="var(--text-3)" opacity="0.4"/>
  </svg>`,

  allDone: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <circle cx="28" cy="28" r="12" stroke="var(--positive)" stroke-width="2.5" fill="none"/>
    <polyline points="22,28 26.5,32.5 34,24" stroke="var(--positive)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  shield: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <path d="M28 14l12 4v10c0 6-5 10-12 12C21 38 16 34 16 28V18l12-4z" stroke="var(--positive)" stroke-width="2" fill="none" stroke-linejoin="round"/>
    <polyline points="23,28 26.5,31.5 33,25" stroke="var(--positive)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  shieldAlert: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <path d="M28 14l12 4v10c0 6-5 10-12 12C21 38 16 34 16 28V18l12-4z" stroke="var(--accent)" stroke-width="2" fill="none" stroke-linejoin="round"/>
    <rect x="27" y="22" width="2" height="7" rx="1" fill="var(--accent)"/>
    <circle cx="28" cy="32.5" r="1.2" fill="var(--accent)"/>
  </svg>`,

  chart: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <rect x="15" y="34" width="5" height="8" rx="1.5" fill="var(--accent)" opacity="0.5"/>
    <rect x="23" y="28" width="5" height="14" rx="1.5" fill="var(--accent)" opacity="0.7"/>
    <rect x="31" y="22" width="5" height="20" rx="1.5" fill="var(--accent)"/>
    <polyline points="16,30 22,24 28,26 34,18" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5"/>
  </svg>`,

  calendar: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <rect x="14" y="20" width="28" height="22" rx="4" stroke="var(--accent)" stroke-width="2" fill="none"/>
    <line x1="14" y1="27" x2="42" y2="27" stroke="var(--accent)" stroke-width="2" opacity="0.5"/>
    <line x1="22" y1="16" x2="22" y2="22" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="34" y1="16" x2="34" y2="22" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="20" y="31" width="5" height="5" rx="1" fill="var(--accent)" opacity="0.4"/>
    <rect x="29" y="31" width="5" height="5" rx="1" fill="var(--accent)" opacity="0.7"/>
  </svg>`,

  focus: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
    <circle cx="28" cy="28" r="12" stroke="var(--accent)" stroke-width="2" fill="none"/>
    <circle cx="28" cy="28" r="7" stroke="var(--accent)" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="28" cy="28" r="2.5" fill="var(--accent)"/>
    <line x1="28" y1="14" x2="28" y2="17" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
    <line x1="28" y1="39" x2="28" y2="42" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
    <line x1="14" y1="28" x2="17" y2="28" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
    <line x1="39" y1="28" x2="42" y2="28" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  error404: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="72" height="72" rx="20" fill="var(--bg-2)"/>
    <circle cx="36" cy="32" r="14" stroke="var(--negative)" stroke-width="2.5" fill="none"/>
    <line x1="36" y1="26" x2="36" y2="33" stroke="var(--negative)" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="36" cy="38" r="1.5" fill="var(--negative)"/>
    <line x1="24" y1="50" x2="48" y2="50" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  </svg>`,
};

// ── Bouton CTA standard ───────────────────────────────────────────────────────

export function ctaButton(label, onclick) {
  return `<button onclick="${onclick}"
    style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.82rem;font-weight:600;
           cursor:pointer;font-family:inherit">
    ${label}
  </button>`;
}

// ── État "non connecté" standard ─────────────────────────────────────────────

const LOCK_ICON = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="16" fill="var(--bg-2)"/>
  <rect x="19" y="26" width="18" height="14" rx="4" stroke="var(--text-2)" stroke-width="2" fill="none"/>
  <path d="M22 26v-5a6 6 0 0 1 12 0v5" stroke="var(--text-2)" stroke-width="2" stroke-linecap="round" fill="none"/>
  <circle cx="28" cy="33" r="2" fill="var(--text-2)" opacity="0.6"/>
</svg>`;

export function notLoggedIn(label = 'cette section') {
  return emptyState({
    icon: LOCK_ICON,
    title: 'Connexion requise',
    subtitle: `Créez un compte ou connectez-vous pour accéder à ${label}.`,
    cta: `<button onclick="document.getElementById('login-btn')?.click()"
      style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">
      Se connecter
    </button>`,
    wrapper: 'padding:4rem 1.5rem',
  });
}
