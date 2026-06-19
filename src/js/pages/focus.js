import { api } from '../api.js';
import { getUser } from '../auth.js';
import { getWidgetState, setWidgetState, clearFocusWidget, showFocusIntroAnimation, showFocusRecap } from '../focus-widget.js';

const SUBJECTS = [
  { id: 'maths', label: 'Maths', color: '#000091' },
  { id: 'physique', label: 'Physique', color: '#1f6f8b' },
  { id: 'chimie', label: 'Chimie', color: '#0063cb' },
  { id: 'si', label: 'SI', color: '#4957b8' },
  { id: 'info', label: 'Info', color: '#555555' },
  { id: 'francais', label: 'Français', color: '#4f5f7f' },
  { id: 'anglais', label: 'Anglais', color: '#2f6ea3' },
  { id: 'autre', label: 'Autre', color: '#666666' },
];

const PRESETS = [
  { label: '25 / 5', work: 25, pause: 5 },
  { label: '50 / 10', work: 50, pause: 10 },
  { label: '90 / 15', work: 90, pause: 15 },
];

let state = {
  mode: 'idle',        // idle | work | pause
  seconds: 0,
  workDuration: 25 * 60,
  pauseDuration: 5 * 60,
  subject: 'maths',
  sessionsCompleted: 0,
  totalFocusToday: 0,
  interval: null,
};

export function initFocusPage() {
  const container = document.getElementById('focus-content');
  if (!container) return;

  // Restaurer une session active depuis localStorage
  const saved = getWidgetState();
  if (saved && saved.mode !== 'idle') {
    const duration = saved.mode === 'work' ? saved.workDuration : saved.pauseDuration;
    const elapsed = (Date.now() - saved.startedAt) / 1000;
    const remaining = Math.max(0, duration - elapsed);

    state.mode = saved.mode;
    state.workDuration = saved.workDuration;
    state.pauseDuration = saved.pauseDuration;
    state.subject = saved.subject;
    state.seconds = Math.floor(remaining);
    state.sessionsCompleted = saved.sessionsCompleted || 0;

    if (remaining > 0) startTimer(container);
  }

  loadTodayStats();
  render(container);
}

async function loadTodayStats() {
  if (!getUser()) return;
  try {
    const stats = await api.getFocusStats();
    state.totalFocusToday = stats.todayMinutes || 0;
    state.sessionsCompleted = stats.todaySessions || 0;
  } catch {}
}

function render(container) {
  const preset = PRESETS.find(p => p.work * 60 === state.workDuration) || PRESETS[0];
  const sub = SUBJECTS.find(s => s.id === state.subject);
  const isRunning = state.mode !== 'idle';
  const isWork = state.mode === 'work';
  const isPause = state.mode === 'pause';

  const total = isWork ? state.workDuration : isPause ? state.pauseDuration : state.workDuration;
  const pct = total > 0 ? ((total - state.seconds) / total) * 100 : 0;
  const minutes = Math.floor(state.seconds / 60);
  const secs = state.seconds % 60;
  const timeStr = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const pauseColor = '#335c85';
  const ringColor = isWork ? (sub?.color || '#2a7fb5') : isPause ? pauseColor : 'var(--border-0)';
  const statusLabel = isWork ? 'Travail' : isPause ? 'Pause' : 'Prêt';

  container.innerHTML = `
    <div style="text-align:center;margin-bottom:var(--s-6)">
      <!-- Presets -->
      <div style="display:flex;justify-content:center;gap:6px;margin-bottom:var(--s-5)">
        ${PRESETS.map(p => `
          <button class="preset-btn" data-work="${p.work}" data-pause="${p.pause}"
            style="padding:0.4rem 1rem;border-radius:var(--r-full);border:1px solid ${p.work === preset.work ? 'var(--accent)' : 'var(--border-0)'};
            background:${p.work === preset.work ? 'var(--accent)' : 'transparent'};
            color:${p.work === preset.work ? 'var(--text-inv)' : 'var(--text-2)'};
            font-size:0.8rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all 0.15s">
            ${p.label}
          </button>`).join('')}
      </div>

      <!-- Subject -->
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:4px;margin-bottom:var(--s-6)">
        ${SUBJECTS.map(s => `
          <button class="subject-btn" data-id="${s.id}"
            style="padding:4px 10px;border-radius:var(--r-full);border:1px solid ${s.id === state.subject ? s.color : 'var(--border-0)'};
            background:${s.id === state.subject ? s.color : 'transparent'};
            color:${s.id === state.subject ? 'var(--on-dark)' : 'var(--text-2)'};
            font-size:0.72rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all 0.15s">
            ${s.label}
          </button>`).join('')}
      </div>

      <!-- Timer ring -->
      <div style="position:relative;width:220px;height:220px;margin:0 auto var(--s-5)">
        <svg viewBox="0 0 120 120" style="width:100%;height:100%;transform:rotate(-90deg)">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border-1)" stroke-width="5"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="${ringColor}" stroke-width="5"
            stroke-dasharray="${2 * Math.PI * 52}"
            stroke-dashoffset="${2 * Math.PI * 52 * (1 - pct / 100)}"
            stroke-linecap="round" style="transition:stroke-dashoffset 0.4s"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
          <div style="font-size:2.6rem;font-weight:700;letter-spacing:-0.03em;font-variant-numeric:tabular-nums">${timeStr}</div>
          <div style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:${isWork ? ringColor : isPause ? pauseColor : 'var(--text-3)'}">${statusLabel}</div>
        </div>
      </div>

      <!-- Controls -->
      <div style="display:flex;justify-content:center;gap:8px;margin-bottom:var(--s-6)">
        ${!isRunning ? `
          <button id="start-btn" style="padding:0.6rem 2.5rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.9rem;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity 0.15s">Démarrer</button>
        ` : `
          <button id="stop-btn" style="padding:0.6rem 1.5rem;border-radius:var(--r-full);background:var(--negative-soft);color:var(--negative);border:1px solid var(--negative);font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">Arrêter</button>
          <button id="skip-btn" style="padding:0.6rem 1.5rem;border-radius:var(--r-full);background:transparent;color:var(--text-2);border:1px solid var(--border-0);font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">Passer</button>
        `}
      </div>
    </div>

    <!-- Stats -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-3)">
      <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-4);text-align:center">
        <div style="font-size:1.6rem;font-weight:700">${state.sessionsCompleted}</div>
        <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:0.05em;margin-top:2px">Sessions</div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-4);text-align:center">
        <div style="font-size:1.6rem;font-weight:700">${state.totalFocusToday}<span style="font-size:0.8rem;font-weight:500;color:var(--text-3)"> min</span></div>
        <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:0.05em;margin-top:2px">Temps de travail aujourd'hui</div>
      </div>
    </div>
  `;

  // Events
  container.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isRunning) return;
      state.workDuration = Number(btn.dataset.work) * 60;
      state.pauseDuration = Number(btn.dataset.pause) * 60;
      state.seconds = state.workDuration;
      render(container);
    });
  });

  container.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isRunning) return;
      state.subject = btn.dataset.id;
      render(container);
    });
  });

  document.getElementById('start-btn')?.addEventListener('click', () => {
    state.mode = 'work';
    state.seconds = state.workDuration;
    setWidgetState({
      mode: 'work',
      startedAt: Date.now(),
      workDuration: state.workDuration,
      pauseDuration: state.pauseDuration,
      subject: state.subject,
      sessionsCompleted: state.sessionsCompleted,
      saved: false,
    });
    showFocusIntroAnimation(state.subject);
    startTimer(container);
    render(container);
  });

  document.getElementById('stop-btn')?.addEventListener('click', () => {
    stopTimer();
    state.mode = 'idle';
    state.seconds = 0;
    clearFocusWidget();
    render(container);
  });

  document.getElementById('skip-btn')?.addEventListener('click', () => {
    stopTimer();
    if (state.mode === 'work') {
      finishWorkSession(container);
    } else {
      state.mode = 'work';
      state.seconds = state.workDuration;
      startTimer(container);
      render(container);
    }
  });
}

function startTimer(container) {
  stopTimer();
  state.interval = setInterval(() => {
    state.seconds--;
    if (state.seconds <= 0) {
      stopTimer();
      if (state.mode === 'work') {
        finishWorkSession(container);
      } else {
        state.mode = 'work';
        state.seconds = state.workDuration;
        startTimer(container);
        render(container);
      }
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (state.interval) {
    clearInterval(state.interval);
    state.interval = null;
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.seconds / 60);
  const secs = state.seconds % 60;
  const timeEl = document.querySelector('#focus-content [style*="2.6rem"]');
  if (timeEl) timeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const total = state.mode === 'work' ? state.workDuration : state.pauseDuration;
  const pct = total > 0 ? ((total - state.seconds) / total) * 100 : 0;
  const ring = document.querySelector('#focus-content circle:nth-child(2)');
  if (ring) ring.setAttribute('stroke-dashoffset', 2 * Math.PI * 52 * (1 - pct / 100));
}

async function finishWorkSession(container) {
  state.sessionsCompleted++;
  state.totalFocusToday += Math.round(state.workDuration / 60);

  if (getUser()) {
    try {
      // Éviter le double-save si le widget a déjà sauvegardé (navigation pendant session)
      const ws = getWidgetState();
      if (!ws?.saved) {
        await api.saveFocusSession({ subject: state.subject, duration: state.workDuration });
        showFocusRecap(state.workDuration / 60);
      }
    } catch {}
  }

  state.mode = 'pause';
  state.seconds = state.pauseDuration;

  setWidgetState({
    mode: 'pause',
    startedAt: Date.now(),
    workDuration: state.workDuration,
    pauseDuration: state.pauseDuration,
    subject: state.subject,
    sessionsCompleted: state.sessionsCompleted,
    saved: true,
  });

  startTimer(container);
  render(container);

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Session terminée !', { body: 'Prends une pause bien méritée.' });
  }
}
