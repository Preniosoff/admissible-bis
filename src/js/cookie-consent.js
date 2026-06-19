// ── Bandeau de consentement cookies / localStorage ───────────────────────────
// Admiscible n'utilise que du localStorage (pas de cookies tiers).
// Ce bandeau informe l'utilisateur conformément au RGPD.

const CONSENT_KEY = 'admiscible-consent';

export function initCookieConsent() {
  if (localStorage.getItem(CONSENT_KEY)) return; // déjà répondu

  // Petit délai pour ne pas gêner le chargement de la page
  setTimeout(showBanner, 800);
}

function showBanner() {
  if (document.getElementById('cookie-banner')) return;

  injectStyles();

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Consentement cookies');
  banner.innerHTML = `
    <div class="cb-content">
      <div class="cb-text">
        <strong>Confidentialité</strong>
        <span>Ce site utilise uniquement le stockage local de votre navigateur pour
        maintenir votre session et vos préférences. Aucun cookie tiers ni outil de
        pistage n'est utilisé.</span>
        <a href="politique-confidentialite.html" class="cb-link">En savoir plus</a>
      </div>
      <div class="cb-actions">
        <button class="cb-btn cb-btn-accept" id="cb-accept">Accepter</button>
        <button class="cb-btn cb-btn-refuse" id="cb-refuse">Refuser le non-essentiel</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('cb-accept').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    dismiss(banner);
  });

  document.getElementById('cb-refuse').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    dismiss(banner);
  });
}

function dismiss(banner) {
  banner.style.transform = 'translateY(120%)';
  banner.style.opacity = '0';
  setTimeout(() => banner.remove(), 400);
}

export function showCookieSettings() {
  // Réafficher le bandeau même si déjà répondu
  localStorage.removeItem(CONSENT_KEY);
  showBanner();
  const b = document.getElementById('cookie-banner');
  if (b) { b.style.transform = ''; b.style.opacity = ''; }
}

function injectStyles() {
  if (document.getElementById('cookie-styles')) return;
  const s = document.createElement('style');
  s.id = 'cookie-styles';
  s.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 8000;
      width: min(680px, calc(100vw - 2rem));
      background: var(--bg-card);
      border: 1px solid var(--border-0);
      border-radius: var(--r-xl, 16px);
      box-shadow: 0 8px 40px rgba(0,0,0,0.18);
      padding: 1.1rem 1.3rem;
      transition: transform 0.35s var(--ease, ease), opacity 0.35s;
      animation: cbIn 0.35s cubic-bezier(0.16,1,0.3,1);
    }
    @keyframes cbIn {
      from { transform: translateX(-50%) translateY(20px); opacity: 0; }
      to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
    }
    .cb-content {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }
    .cb-text {
      flex: 1;
      font-size: 0.82rem;
      color: var(--text-2);
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .cb-text strong { color: var(--text-0); font-size: 0.86rem; }
    .cb-link { color: var(--accent); font-size: 0.78rem; text-decoration: underline; text-underline-offset: 3px; width: fit-content; }
    .cb-actions { display: flex; gap: 0.5rem; flex-shrink: 0; flex-wrap: wrap; }
    .cb-btn {
      padding: 0.48rem 1rem;
      border-radius: var(--r-full, 999px);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      border: none;
      transition: opacity 0.15s;
      white-space: nowrap;
    }
    .cb-btn:hover { opacity: 0.85; }
    .cb-btn-accept { background: var(--text-0); color: var(--text-inv); }
    .cb-btn-refuse { background: var(--bg-2); color: var(--text-1); border: 1px solid var(--border-0); }
    @media (max-width: 500px) {
      #cookie-banner {
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: var(--r-xl, 16px) var(--r-xl, 16px) 0 0;
        transform: none;
        padding: 1rem;
      }
      @keyframes cbIn {
        from { transform: translateY(20px); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }
      .cb-content { gap: 0.75rem; }
      .cb-text span { display: none; }
      .cb-actions { width: 100%; }
      .cb-btn { flex: 1; text-align: center; }
    }
  `;
  document.head.appendChild(s);
}
