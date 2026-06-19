import { getWidgetState, setWidgetState, showFocusIntroAnimation } from './focus-widget.js';
import { toast } from './toast.js';

const SESSION_KEY = 'admiscible-focus-suggested';
const DELAY_MS = 2 * 60 * 1000;

const MATIERE_TO_SUBJECT = {
  ph: 'physique', physique: 'physique',
  maths: 'maths', math: 'maths',
  chim: 'chimie', chimie: 'chimie',
  si: 'si',
  info: 'info', informatique: 'info',
  fr: 'francais', francais: 'francais',
  anglais: 'anglais', ang: 'anglais',
};

export function initFocusSuggestion() {
  if (sessionStorage.getItem(SESSION_KEY)) return;

  setTimeout(() => {
    if (getWidgetState()) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    showSuggestion();
  }, DELAY_MS);
}

function getCurrentSubject() {
  const matiere = new URLSearchParams(window.location.search).get('matiere') || 'ph';
  return MATIERE_TO_SUBJECT[matiere] || 'autre';
}

function showSuggestion() {
  sessionStorage.setItem(SESSION_KEY, '1');

  const subject = getCurrentSubject();
  const el = document.createElement('div');
  el.id = 'focus-suggestion';

  Object.assign(el.style, {
    position: 'fixed',
    bottom: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%) translateY(80px)',
    zIndex: '8500',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-0)',
    borderRadius: 'var(--r-xl, 16px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    padding: '0.85rem 1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    opacity: '0',
    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
    maxWidth: 'calc(100vw - 2rem)',
    whiteSpace: 'nowrap',
  });

  el.innerHTML = `
    <span style="font-size:1.1rem;line-height:1">⚡</span>
    <div>
      <div style="font-size:0.82rem;font-weight:700;color:var(--text-0)">Tu lis depuis 2 min</div>
      <div style="font-size:0.7rem;color:var(--text-3)">Lance une session focus pour mieux retenir</div>
    </div>
    <button id="fs-launch" style="padding:0.42rem 0.9rem;border-radius:var(--r-full,999px);background:var(--accent);color:var(--text-inv);border:none;font-size:0.78rem;font-weight:700;cursor:pointer;font-family:inherit;flex-shrink:0">25 min →</button>
    <button id="fs-dismiss" style="background:none;border:none;cursor:pointer;color:var(--text-3);font-size:1rem;padding:0.25rem 0.35rem;line-height:1;flex-shrink:0">✕</button>
  `;

  document.body.appendChild(el);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
  }));

  const autoDismiss = setTimeout(() => dismiss(el), 15000);

  document.getElementById('fs-launch').addEventListener('click', () => {
    clearTimeout(autoDismiss);
    launchFocus(subject, el);
  });

  document.getElementById('fs-dismiss').addEventListener('click', () => {
    clearTimeout(autoDismiss);
    dismiss(el);
  });
}

function dismiss(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-50%) translateY(20px)';
  setTimeout(() => el.remove(), 350);
}

function launchFocus(subject, el) {
  setWidgetState({
    mode: 'work',
    startedAt: Date.now(),
    workDuration: 25 * 60,
    pauseDuration: 5 * 60,
    subject,
    sessionsCompleted: 0,
    saved: false,
  });
  showFocusIntroAnimation(subject);
  dismiss(el);
  toast('Session focus démarrée ⚡', 'ok', 3000);
}
