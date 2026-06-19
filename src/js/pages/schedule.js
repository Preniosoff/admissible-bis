import { api } from '../api.js';
import { getUser } from '../auth.js';
import { emptyState, ICONS, notLoggedIn } from '../empty-state.js';

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const HOURS = Array.from({ length: 16 }, (_, i) => i + 7); // 7h-22h

const SUBJECTS = [
  { id: 'maths', label: 'Maths', color: '#000091' },
  { id: 'physique', label: 'Physique', color: '#1f6f8b' },
  { id: 'chimie', label: 'Chimie', color: '#0063cb' },
  { id: 'si', label: 'SI', color: '#4957b8' },
  { id: 'info', label: 'Info', color: '#555555' },
  { id: 'francais', label: 'Français', color: '#4f5f7f' },
  { id: 'anglais', label: 'Anglais', color: '#2f6ea3' },
  { id: 'exercices', label: 'Exercices', color: '#335c85' },
  { id: 'annales', label: 'Annales', color: '#274060' },
  { id: 'methodes', label: 'Méthodes', color: '#666666' },
  { id: 'travail-libre', label: 'Travail libre', color: '#444444' },
  { id: 'pause', label: 'Pause', color: '#333333' },
];

let currentSchedule = null;
let currentSlots = [];
let dragSubject = null;

export async function initSchedulePage() {
  const container = document.getElementById('schedule-content');
  if (!container) return;
  if (!getUser()) { container.innerHTML = notLoggedIn('emploi du temps'); return; }
  await renderMain(container);
}

async function renderMain(container) {
  const [templates, schedules] = await Promise.all([api.getTemplates(), api.getSchedules()]);
  const byCategory = {};
  templates.forEach(t => { (byCategory[t.category] = byCategory[t.category] || []).push(t); });

  container.innerHTML = `
    <div style="display:flex;gap:var(--s-5);flex-wrap:wrap;margin-bottom:var(--s-6)">
      <div style="flex:1;min-width:280px">
        <h3 style="font-size:0.95rem;font-weight:700;margin-bottom:var(--s-3)">Emplois du temps</h3>
        <div id="my-schedules">
          ${schedules.length === 0
            ? emptyState({
                icon: ICONS.calendar,
                title: 'Aucun emploi du temps enregistré',
                subtitle: 'Créer un planning vierge ou utiliser un modèle adapté à la filière.',
                wrapper: 'padding:1.5rem 1rem',
              })
            : schedules.map(s => `
              <div class="sched-item" style="display:flex;align-items:center;justify-content:space-between;padding:0.65rem 1rem;border:1px solid var(--border-1);border-radius:var(--r-md);margin-bottom:6px;cursor:pointer;transition:all 0.15s">
                <div><div style="font-weight:600;font-size:0.85rem">${s.name}</div><div style="font-size:0.7rem;color:var(--text-3)">${s.slots.length} créneaux</div></div>
                <div style="display:flex;gap:4px">
                  <button class="sched-view" data-id="${s.id}" style="background:var(--bg-2);border:none;padding:4px 10px;border-radius:var(--r-sm);font-size:0.72rem;font-weight:600;cursor:pointer;color:var(--text-1);font-family:inherit">Ouvrir</button>
                  <button class="sched-del" data-id="${s.id}" style="background:var(--negative-soft);border:none;padding:4px 8px;border-radius:var(--r-sm);font-size:0.72rem;cursor:pointer;color:var(--negative);font-family:inherit">x</button>
                </div>
              </div>`).join('')}
        </div>
        <button id="create-blank" style="margin-top:var(--s-3);width:100%;padding:0.6rem;border:1px dashed var(--border-0);border-radius:var(--r-md);background:transparent;color:var(--text-2);font-size:0.82rem;font-weight:500;cursor:pointer;font-family:inherit">+ Créer un planning vierge</button>
      </div>
      <div style="flex:1.2;min-width:320px">
        <h3 style="font-size:0.95rem;font-weight:700;margin-bottom:var(--s-3)">Modèles</h3>
        ${Object.entries(byCategory).map(([cat, tpls]) => `
          <div style="margin-bottom:var(--s-4)">
            <div style="font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-3);margin-bottom:6px">${cat}</div>
            ${tpls.map(t => `
              <div class="tpl-card" data-id="${t.id}" style="padding:0.75rem 1rem;border:1px solid var(--border-1);border-radius:var(--r-md);margin-bottom:6px;cursor:pointer;transition:all 0.15s">
                <div style="display:flex;justify-content:space-between;align-items:center">
                  <div style="font-weight:600;font-size:0.85rem">${t.name}</div>
                  <span style="font-size:0.65rem;color:var(--text-3);background:var(--bg-2);padding:2px 8px;border-radius:var(--r-full)">${t.slotCount}</span>
                </div>
                <div style="font-size:0.78rem;color:var(--text-2);margin-top:3px">${t.desc}</div>
              </div>`).join('')}
          </div>`).join('')}
      </div>
    </div>
    <div id="grid-section" style="display:none">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--s-3)">
        <div style="display:flex;align-items:center;gap:var(--s-3)">
          <button id="grid-back" style="background:var(--bg-2);border:none;padding:5px 12px;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-size:0.8rem;font-weight:500;color:var(--text-1)">Retour</button>
          <h3 id="grid-title" style="font-size:1rem;font-weight:700"></h3>
        </div>
        <button id="grid-save" style="background:var(--accent);color:var(--text-inv);border:none;padding:5px 14px;border-radius:var(--r-sm);cursor:pointer;font-family:inherit;font-size:0.8rem;font-weight:600">Sauvegarder</button>
      </div>
      <div style="display:flex;gap:var(--s-4)">
        <div id="subject-palette" style="flex-shrink:0;width:110px"></div>
        <div id="schedule-grid" style="flex:1;min-width:0"></div>
      </div>
      <div id="edit-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:500;display:none;align-items:center;justify-content:center"></div>
    </div>`;

  // Events
  container.querySelectorAll('.tpl-card').forEach(el => {
    el.addEventListener('click', async () => {
      const tpl = await api.getTemplate(el.dataset.id);
      const sched = await api.createSchedule({ name: tpl.name, template_id: tpl.id });
      currentSchedule = sched; currentSlots = [...sched.slots];
      showGrid(container, sched.name);
    });
  });
  container.querySelectorAll('.sched-view').forEach(el => {
    el.addEventListener('click', async (e) => {
      e.stopPropagation();
      const all = await api.getSchedules();
      const s = all.find(s => s.id === Number(el.dataset.id));
      if (s) { currentSchedule = s; currentSlots = [...s.slots]; showGrid(container, s.name); }
    });
  });
  container.querySelectorAll('.sched-del').forEach(el => {
    el.addEventListener('click', async (e) => { e.stopPropagation(); if (confirm('Supprimer ?')) { await api.deleteSchedule(el.dataset.id); await renderMain(container); } });
  });
  document.getElementById('create-blank')?.addEventListener('click', async () => {
    const name = prompt('Nom :');
    if (!name) return;
    const sched = await api.createSchedule({ name, slots: [] });
    currentSchedule = sched; currentSlots = []; showGrid(container, name);
  });
}

function showGrid(container, title) {
  document.getElementById('grid-section').style.display = '';
  document.getElementById('grid-title').textContent = title;
  document.getElementById('grid-back').onclick = () => { document.getElementById('grid-section').style.display = 'none'; renderMain(container); };
  document.getElementById('grid-save').onclick = async () => { await api.updateSchedule(currentSchedule.id, { name: title, slots: currentSlots }); alert('Sauvegardé !'); };
  renderPalette();
  renderGrid();
}

function renderPalette() {
  const el = document.getElementById('subject-palette');
  el.innerHTML = `
    <div style="font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-3);margin-bottom:8px">Matières</div>
    ${SUBJECTS.map(s => `
      <div class="palette-item" draggable="true" data-subject="${s.id}" data-label="${s.label}" data-color="${s.color}"
        style="padding:6px 10px;margin-bottom:4px;border-radius:var(--r-sm);cursor:grab;font-size:0.78rem;font-weight:600;color:#fff;background:${s.color};transition:transform 0.1s;user-select:none">
        ${s.label}
      </div>
    `).join('')}
    <div style="margin-top:12px;font-size:0.65rem;color:var(--text-3);line-height:1.4">
      Glisse une matière sur la grille.<br>
      Clique un créneau pour le modifier ou le supprimer.
    </div>`;

  el.querySelectorAll('.palette-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      dragSubject = { label: item.dataset.label, color: item.dataset.color };
      e.dataTransfer.effectAllowed = 'copy';
      item.style.transform = 'scale(0.95)';
    });
    item.addEventListener('dragend', () => { item.style.transform = ''; dragSubject = null; });
  });
}

function renderGrid() {
  const grid = document.getElementById('schedule-grid');
  const PX_PER_MIN = 0.9; // pixels par minute — 54px par heure
  const START_HOUR = HOURS[0]; // 7
  const END_HOUR = HOURS[HOURS.length - 1] + 1; // 23
  const totalMinutes = (END_HOUR - START_HOUR) * 60;
  const totalH = totalMinutes * PX_PER_MIN;

  function minToY(timeStr) {
    const m = parseTime(timeStr) - START_HOUR * 60;
    return m * PX_PER_MIN;
  }

  // Header
  let header = `<div style="display:grid;grid-template-columns:44px repeat(${DAYS.length}, 1fr);border:1px solid var(--border-0);border-radius:var(--r-md) var(--r-md) 0 0;overflow:hidden">`;
  header += `<div style="background:var(--bg-2);padding:6px"></div>`;
  DAYS.forEach(d => {
    header += `<div style="background:var(--bg-2);padding:6px;text-align:center;border-left:1px solid var(--border-0);font-weight:600;font-size:0.7rem;color:var(--text-1)">${d}</div>`;
  });
  header += '</div>';

  // Body: time labels + day columns with absolute-positioned slots
  let body = `<div style="display:grid;grid-template-columns:44px repeat(${DAYS.length}, 1fr);border:1px solid var(--border-0);border-top:none;border-radius:0 0 var(--r-md) var(--r-md);overflow:hidden">`;

  // Time column
  body += `<div style="position:relative;height:${totalH}px">`;
  HOURS.forEach(h => {
    const y = (h - START_HOUR) * 60 * PX_PER_MIN;
    body += `<div style="position:absolute;top:${y}px;left:0;right:0;padding:1px 4px;font-size:0.6rem;color:var(--text-3);font-weight:500;height:${60 * PX_PER_MIN}px;border-bottom:1px solid var(--border-2)">${String(h).padStart(2,'0')}:00</div>`;
  });
  body += '</div>';

  // Day columns
  DAYS.forEach(d => {
    const daySlots = currentSlots.filter(s => s.day === d);

    body += `<div class="day-col" data-day="${d}" style="position:relative;height:${totalH}px;border-left:1px solid var(--border-0)">`;

    // Hour grid lines (clickable zones)
    HOURS.forEach(h => {
      const y = (h - START_HOUR) * 60 * PX_PER_MIN;
      const hStr = `${String(h).padStart(2,'0')}:00`;
      body += `<div class="hour-zone" data-day="${d}" data-hour="${hStr}" style="position:absolute;top:${y}px;left:0;right:0;height:${60 * PX_PER_MIN}px;border-bottom:1px solid var(--border-2);transition:background 0.1s;cursor:pointer"></div>`;
    });

    // Slots positioned by exact minutes
    daySlots.forEach(slot => {
      const top = minToY(slot.start);
      const height = Math.max(12, (parseTime(slot.end) - parseTime(slot.start)) * PX_PER_MIN);
      body += `<div class="slot-abs" data-day="${d}" data-start="${slot.start}" style="position:absolute;top:${top}px;left:2px;right:2px;height:${height - 2}px;background:${slot.color || '#555'};border-radius:4px;padding:3px 6px;color:#fff;font-size:0.65rem;font-weight:600;overflow:hidden;z-index:2;cursor:pointer;display:flex;flex-direction:column;justify-content:center;line-height:1.2;box-shadow:0 1px 3px rgba(0,0,0,0.2)">
        <div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${slot.label}</div>
        <div style="font-weight:400;font-size:0.58rem;opacity:0.75">${slot.start} - ${slot.end}</div>
      </div>`;
    });

    body += '</div>';
  });

  body += '</div>';
  grid.innerHTML = header + body;

  // Events: hour zones (click + drag-drop)
  grid.querySelectorAll('.hour-zone').forEach(zone => {
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.background = 'var(--accent-soft)'; });
    zone.addEventListener('dragleave', () => { zone.style.background = ''; });
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.style.background = '';
      if (!dragSubject) return;
      const day = zone.dataset.day;
      const hour = zone.dataset.hour;
      const endH = parseInt(hour) + 2;
      const end = `${String(Math.min(endH, 22)).padStart(2, '0')}:00`;
      currentSlots.push({ day, start: hour, end, label: dragSubject.label, color: dragSubject.color });
      renderGrid();
    });
    zone.addEventListener('mouseenter', () => { if (!dragSubject) zone.style.background = 'var(--neutral-soft)'; });
    zone.addEventListener('mouseleave', () => { if (!dragSubject) zone.style.background = ''; });
    zone.addEventListener('click', () => {
      if (dragSubject) return;
      showSlotEditor(zone.dataset.day, zone.dataset.hour);
    });
  });

  // Events: click slot to edit
  grid.querySelectorAll('.slot-abs').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const day = el.dataset.day;
      const start = el.dataset.start;
      const slot = currentSlots.find(s => s.day === day && s.start === start);
      if (slot) showSlotEditor(day, start, slot);
    });
  });
}

function showSlotEditor(day, hour, existing = null) {
  const modal = document.getElementById('edit-modal');
  const endDefault = `${String(Math.min(parseInt(hour) + 2, 22)).padStart(2, '0')}:00`;

  modal.style.display = 'flex';
  modal.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--border-0);border-radius:var(--r-xl);padding:var(--s-5);width:340px;max-width:90%;box-shadow:var(--shadow-lg);animation:scaleIn 0.15s var(--ease)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--s-4)">
        <h3 style="font-size:1rem;font-weight:700">${existing ? 'Modifier le créneau' : 'Nouveau créneau'}</h3>
        <button id="edit-close" style="background:none;border:none;font-size:1.2rem;color:var(--text-3);cursor:pointer;padding:4px">x</button>
      </div>

      <div style="margin-bottom:var(--s-3)">
        <label style="display:block;font-size:0.7rem;font-weight:600;color:var(--text-2);margin-bottom:4px">Matière</label>
        <select id="edit-subject" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          ${SUBJECTS.map(s => `<option value="${s.id}" data-color="${s.color}" ${existing && existing.label === s.label ? 'selected' : ''}>${s.label}</option>`).join('')}
        </select>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-3);margin-bottom:var(--s-3)">
        <div>
          <label style="display:block;font-size:0.7rem;font-weight:600;color:var(--text-2);margin-bottom:4px">Jour</label>
          <select id="edit-day" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
            ${DAYS.map(d => `<option value="${d}" ${d === day ? 'selected' : ''}>${d}</option>`).join('')}
          </select>
        </div>
        <div></div>
        <div>
          <label style="display:block;font-size:0.7rem;font-weight:600;color:var(--text-2);margin-bottom:4px">Début</label>
          <input id="edit-start" type="time" value="${existing ? existing.start : hour}" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
        </div>
        <div>
          <label style="display:block;font-size:0.7rem;font-weight:600;color:var(--text-2);margin-bottom:4px">Fin</label>
          <input id="edit-end" type="time" value="${existing ? existing.end : endDefault}" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
        </div>
      </div>

      <div style="display:flex;gap:8px;margin-top:var(--s-4)">
        <button id="edit-save" style="flex:1;padding:0.55rem;background:var(--accent);color:var(--text-inv);border:none;border-radius:var(--r-sm);font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">${existing ? 'Modifier' : 'Ajouter'}</button>
        ${existing ? '<button id="edit-delete" style="padding:0.55rem 1rem;background:var(--negative-soft);color:var(--negative);border:1px solid var(--negative);border-radius:var(--r-sm);font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">Supprimer</button>' : ''}
      </div>
    </div>`;

  modal.querySelector('#edit-close').onclick = () => { modal.style.display = 'none'; };
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

  modal.querySelector('#edit-save').onclick = () => {
    const subjectId = modal.querySelector('#edit-subject').value;
    const subject = SUBJECTS.find(s => s.id === subjectId);
    const newDay = modal.querySelector('#edit-day').value;
    const newStart = modal.querySelector('#edit-start').value;
    const newEnd = modal.querySelector('#edit-end').value;

    if (!subject || !newStart || !newEnd) return;

    // Remove existing if editing
    if (existing) {
      currentSlots = currentSlots.filter(s => !(s.day === day && s.start === existing.start));
    }

    currentSlots.push({ day: newDay, start: newStart, end: newEnd, label: subject.label, color: subject.color });
    modal.style.display = 'none';
    renderGrid();
  };

  if (existing) {
    modal.querySelector('#edit-delete').onclick = () => {
      currentSlots = currentSlots.filter(s => !(s.day === day && s.start === existing.start));
      modal.style.display = 'none';
      renderGrid();
    };
  }
}

function parseTime(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + (m || 0);
}
