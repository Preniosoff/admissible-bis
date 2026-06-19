import { api } from './api.js';

const LS_KEY = 'admiscible-focus';
const INTRO_KEY = 'admiscible-focus-intro';

const SUBJECT_COLORS = {
  maths: '#000091', physique: '#1f6f8b', chimie: '#0063cb',
  si: '#4957b8', info: '#555555', francais: '#4f5f7f',
  anglais: '#2f6ea3', autre: '#666666',
};

const PAUSE_COLOR = '#335c85';

export function getWidgetState() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch { return null; }
}

export function setWidgetState(st) {
  if (!st || st.mode === 'idle') {
    localStorage.removeItem(LS_KEY);
  } else {
    localStorage.setItem(LS_KEY, JSON.stringify(st));
  }
}

export function clearFocusWidget() {
  localStorage.removeItem(LS_KEY);
  document.getElementById('focus-float')?.remove();
}


export function showFocusRecap(minutes) {
  document.getElementById('focus-recap')?.remove();
  const d = document.createElement('div');
  d.id = 'focus-recap';
  d.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:10000;' +
    'background:var(--bg-card);border:1px solid var(--border-0);border-radius:var(--r-md);' +
    'padding:1rem 1.3rem;box-shadow:var(--shadow-md);display:flex;align-items:center;gap:14px;' +
    'animation:focus-recap-in 0.35s cubic-bezier(0.22,1,0.36,1)';
  d.innerHTML = `
    <div>
      <div style="font-weight:800;font-size:0.92rem;color:var(--text-0)">Session de ${Math.round(minutes)} min terminée</div>
      <div style="font-size:0.78rem;color:var(--text-2)">Session enregistrée dans le suivi de travail.</div>
    </div>
    <button style="background:none;border:none;color:var(--text-3,#887);cursor:pointer;font-size:0.85rem;padding:2px" aria-label="Fermer">\u2715</button>`;
  if (!document.getElementById('focus-recap-style')) {
    const st = document.createElement('style');
    st.id = 'focus-recap-style';
    st.textContent = '@keyframes focus-recap-in{from{opacity:0;transform:translateX(-50%) translateY(16px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
    document.head.appendChild(st);
  }
  d.querySelector('button').addEventListener('click', () => d.remove());
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 8000);
}

export function initFocusWidget() {
  // Sur focus.html, la page principale gère tout — pas de widget flottant
  if (window.location.pathname.includes('focus')) return;

  let saving = false;

  function tick() {
    const st = getWidgetState();
    const el = document.getElementById('focus-float');

    if (!st || st.mode === 'idle') {
      el?.remove();
      return;
    }

    const duration = st.mode === 'work' ? st.workDuration : st.pauseDuration;
    const elapsed = (Date.now() - st.startedAt) / 1000;
    const remaining = duration - elapsed;

    // Session terminée pendant la navigation — gérer la transition
    if (remaining <= 0 && !saving) {
      saving = true;
      if (st.mode === 'work' && !st.saved) {
        api.saveFocusSession({ subject: st.subject, duration: st.workDuration })
          .then(() => showFocusRecap(st.workDuration / 60))
          .catch(() => {})
          .finally(() => {
            setWidgetState({
              ...st,
              mode: 'pause',
              startedAt: Date.now(),
              saved: false,
              sessionsCompleted: (st.sessionsCompleted || 0) + 1,
            });
            saving = false;
          });
      } else {
        // Pause terminée → retour en mode travail
        setWidgetState({ ...st, mode: 'work', startedAt: Date.now(), saved: false });
        saving = false;
      }
      return;
    }

    const secs = Math.max(0, remaining);
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    const isWork = st.mode === 'work';
    const color = SUBJECT_COLORS[st.subject] || '#666';
    const pct = Math.min(100, ((duration - secs) / duration) * 100);

    // Avancement de la session pendant la navigation
    if (!el) {
      injectStyles();
      const d = document.createElement('div');
      d.id = 'focus-float';
      document.body.appendChild(d);
    }

    document.getElementById('focus-float').innerHTML = `
      <a href="focus.html" style="display:block;text-decoration:none;color:inherit">
        <div style="height:3px;width:${pct}%;background:${isWork ? color : PAUSE_COLOR};transition:width 1s linear;border-radius:2px"></div>
        <div style="display:flex;align-items:center;gap:8px;padding:0.5rem 0.8rem">
          <span style="width:7px;height:7px;border-radius:50%;background:${isWork ? color : PAUSE_COLOR};flex-shrink:0"></span>
          <span style="font-size:0.95rem;font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:-0.02em">${timeStr}</span>
          <span style="font-size:0.62rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-3)">${isWork ? 'Travail' : 'Pause'}</span>
        </div>
      </a>
    `;
  }

  tick();
  setInterval(tick, 1000);
}

/* ── Animation d'introduction (premier démarrage uniquement) ── */
export function showFocusIntroAnimation(subject) {
  // Remove any existing intro before starting a new one
  document.getElementById('focus-intro')?.remove();

  const color = SUBJECT_COLORS[subject] || '#666';

  const el = document.createElement('div');
  el.id = 'focus-intro';
  el.innerHTML = `
    <div style="height:3px;width:0%;background:${color};border-radius:2px;transition:width 1.8s linear"></div>
    <div style="display:flex;align-items:center;gap:8px;padding:0.5rem 0.8rem">
      <span style="width:7px;height:7px;border-radius:50%;background:${color};flex-shrink:0"></span>
      <span style="font-size:0.95rem;font-weight:700;font-variant-numeric:tabular-nums">25:00</span>
      <span style="font-size:0.62rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-3)">Timer de travail</span>
    </div>
    <div id="fw-intro-tip" style="padding:0 0.8rem 0.55rem;font-size:0.65rem;color:var(--text-3);white-space:nowrap;transition:opacity 0.4s">
      Timer actif
    </div>
  `;

  // Départ : centré sur l'écran, légèrement agrandi
  Object.assign(el.style, {
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%) scale(1.05)',
    opacity: '0',
    zIndex: '9999',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-0)',
    borderRadius: 'var(--r-md)',
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
    minWidth: '158px',
    transition: 'top 0.65s cubic-bezier(0.16,1,0.3,1), right 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.25s',
  });

  document.body.appendChild(el);

  // Étape 1 : apparition au centre
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.opacity = '1';
    // Lancer la petite barre de progression pour rendre vivant
    const bar = el.querySelector('div');
    if (bar) setTimeout(() => { bar.style.width = '8%'; }, 50);

    // Étape 2 : glissement vers le coin haut-droite
    setTimeout(() => {
      el.style.top = '4.5rem';
      el.style.right = '1rem';
      el.style.transform = 'translate(0, 0) scale(1)';

      // Étape 3 : effacement du tip puis disparition
      setTimeout(() => {
        const tip = document.getElementById('fw-intro-tip');
        if (tip) tip.style.opacity = '0';
        setTimeout(() => {
          el.style.transition = 'opacity 0.4s';
          el.style.opacity = '0';
          setTimeout(() => el.remove(), 400);
        }, 1200);
      }, 1600);
    }, 550);
  }));
}

function injectStyles() {
  if (document.getElementById('fw-styles')) return;
  const s = document.createElement('style');
  s.id = 'fw-styles';
  s.textContent = `
    #focus-float {
      position: fixed;
      top: 4.5rem;
      right: 1rem;
      z-index: 900;
      background: var(--bg-card);
      border: 1px solid var(--border-0);
      border-radius: var(--r-xl, 16px);
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.22);
      min-width: 158px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #focus-float:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }
  `;
  document.head.appendChild(s);
}
