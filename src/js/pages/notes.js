import { api } from '../api.js';
import { toast } from '../toast.js';
import { getUser } from '../auth.js';
import { emptyState, ICONS, notLoggedIn } from '../empty-state.js';

const SUBJECTS = ['Maths', 'Physique', 'Chimie', 'SI', 'Info', 'Français', 'Anglais'];

export async function initNotesPage() {
  const container = document.getElementById('notes-content');
  if (!container) return;
  if (!getUser()) { container.innerHTML = notLoggedIn('suivi des notes'); return; }
  await render(container);
}

async function render(container) {
  let grades = [];
  try { grades = await api.getGrades(); } catch {}

  const bySubject = {};
  grades.forEach(g => {
    (bySubject[g.subject] = bySubject[g.subject] || []).push(g);
  });

  const avgBySubject = Object.entries(bySubject).map(([sub, gs]) => {
    const coeffSum = gs.reduce((s, g) => s + coeff(g), 0) || gs.length || 1;
    const avg = gs.reduce((s, g) => s + normalizedGrade(g) * coeff(g), 0) / coeffSum;
    return { subject: sub, avg: avg.toFixed(1), count: gs.length, coeffSum };
  });

  container.innerHTML = `
    <!-- Quick add form -->
    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-5);margin-bottom:var(--s-5)">
      <h3 style="font-size:0.7rem;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:var(--s-4)">Ajouter une note</h3>
      <form id="grade-form">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--s-3);margin-bottom:var(--s-3)">
          <div class="form-group" style="margin:0">
            <label>Matière</label>
            <select id="g-subject" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
              ${SUBJECTS.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin:0">
            <label>Intitulé</label>
            <input id="g-label" type="text" placeholder="DS 3, Colle, DM..." required style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:var(--s-3);margin-bottom:var(--s-3)">
          <div class="form-group" style="margin:0">
            <label>Note</label>
            <input id="g-grade" type="number" step="0.5" min="0" max="20" placeholder="14.5" required style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          </div>
          <div class="form-group" style="margin:0">
            <label>Sur</label>
            <input id="g-max" type="number" value="20" min="1" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          </div>
          <div class="form-group" style="margin:0">
            <label>Coeff.</label>
            <input id="g-coeff" type="number" value="1" step="0.5" min="0.5" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          </div>
          <div class="form-group" style="margin:0">
            <label>Moy. classe</label>
            <input id="g-avg" type="number" step="0.5" min="0" max="20" placeholder="—" style="width:100%;padding:0.5rem 0.7rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.85rem">
          </div>
        </div>
        <button type="submit" style="width:100%;padding:0.55rem;background:var(--accent);color:var(--text-inv);border:none;border-radius:var(--r-sm);font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">Ajouter</button>
      </form>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-5);margin-bottom:var(--s-5)">
      <h3 style="font-size:0.7rem;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:var(--s-3)">Import Pronote / CSV</h3>
      <p style="font-size:0.82rem;color:var(--text-2);line-height:1.55;margin-bottom:var(--s-3)">Connexion directe à Pronote : à prévoir seulement avec une autorisation ou un export officiel. En attendant, importez un CSV avec les colonnes matière, intitulé, note, sur, coefficient, moyenne.</p>
      <input id="grades-csv" type="file" accept=".csv,text/csv" style="width:100%;font-size:0.82rem;color:var(--text-2)">
    </div>

    <!-- Averages -->
    ${avgBySubject.length > 0 ? `
    <div style="display:flex;flex-wrap:wrap;gap:var(--s-3);margin-bottom:var(--s-5)">
      ${avgBySubject.map(a => `
        <div style="flex:1;min-width:100px;background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-md);padding:var(--s-3);text-align:center">
          <div style="font-size:1.3rem;font-weight:700">${a.avg}</div>
          <div style="font-size:0.65rem;font-weight:500;color:var(--text-3);text-transform:uppercase">${a.subject}</div>
        </div>`).join('')}
    </div>` : ''}

    <!-- Repères indicatifs -->
    ${avgBySubject.length >= 2 ? `
    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-5);margin-bottom:var(--s-5)">
      <h3 style="font-size:0.7rem;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:var(--s-4)">Repères indicatifs</h3>
      ${buildSimulator(avgBySubject)}
    </div>` : ''}

    <!-- Evolution graph -->
    ${grades.length >= 2 ? `
    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);padding:var(--s-5);margin-bottom:var(--s-5)">
      <h3 style="font-size:0.7rem;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:var(--s-4)">Evolution</h3>
      ${buildEvolutionSVG(grades)}
    </div>` : ''}

    <!-- List -->
    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);overflow:hidden">
      <div style="padding:var(--s-4) var(--s-5);border-bottom:1px solid var(--border-1)">
        <h3 style="font-size:0.7rem;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.06em">Historique (${grades.length})</h3>
      </div>
      ${grades.length === 0
        ? emptyState({
            icon: ICONS.chart,
            title: 'Aucune note enregistrée',
            subtitle: 'Saisir les résultats de DS et colles permet de suivre l’évolution dans le temps.',
            cta: `<button onclick="document.getElementById('g-grade')?.focus()"
              style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit">
              Ajouter une note
            </button>`,
            wrapper: 'padding:2.5rem 1rem',
          })
        : grades.map(g => {
          const pct20 = normalizedGrade(g);
          const color = pct20 >= 14 ? 'var(--positive)' : pct20 >= 10 ? 'var(--caution)' : 'var(--negative)';
          const delta = g.class_avg != null ? (pct20 - g.class_avg).toFixed(1) : null;
          const deltaColor = delta > 0 ? 'var(--positive)' : delta < 0 ? 'var(--negative)' : 'var(--text-3)';
          return `<div style="display:flex;align-items:center;gap:var(--s-3);padding:0.6rem var(--s-5);border-bottom:1px solid var(--border-2)">
            <div style="font-size:1.1rem;font-weight:700;min-width:50px;color:${color}">${g.grade}<span style="font-size:0.7rem;font-weight:400;color:var(--text-3)">/${g.grade_max}</span></div>
            <div style="flex:1">
              <div style="font-size:0.82rem;font-weight:600">${g.label}</div>
              <div style="font-size:0.7rem;color:var(--text-3)">${g.subject} · coeff. ${coeff(g)}${delta != null ? ` · <span style="color:${deltaColor}">${delta > 0 ? '+' : ''}${delta} vs classe</span>` : ''}</div>
            </div>
            <button class="del-grade" data-id="${g.id}" style="background:none;border:none;color:var(--text-3);cursor:pointer;font-size:0.9rem;padding:4px">×</button>
          </div>`;
        }).join('')}
    </div>
  `;

  // Submit
  document.getElementById('grade-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      subject: document.getElementById('g-subject').value,
      label: document.getElementById('g-label').value,
      grade: Number(document.getElementById('g-grade').value),
      grade_max: Number(document.getElementById('g-max').value) || 20,
      coefficient: Number(document.getElementById('g-coeff').value) || 1,
      class_avg: document.getElementById('g-avg').value ? Number(document.getElementById('g-avg').value) : null,
    };
    try {
      await api.addGrade(data);
      await render(container);
      toast('Note ajoutée', 'ok');
    } catch (err) { toast(err.message || 'Erreur', 'error'); }
  });

  document.getElementById('grades-csv')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const rows = parseGradesCsv(await file.text());
      if (!rows.length) throw new Error('Aucune note reconnue dans le fichier.');
      for (const row of rows) await api.addGrade(row);
      await render(container);
      toast(`${rows.length} note${rows.length > 1 ? 's' : ''} importée${rows.length > 1 ? 's' : ''}`, 'ok');
    } catch (err) {
      toast(err.message || 'Import impossible', 'error');
    }
  });

  // Delete
  container.querySelectorAll('.del-grade').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Supprimer ?')) return;
      try {
      await api.deleteGrade(btn.dataset.id);
      await render(container);
      toast('Note supprimée', 'ok');
      } catch (err) { toast(err.message || 'Erreur', 'error'); }
    });
  });
}

function buildSimulator(avgBySubject) {
  const globalAvg = avgBySubject.reduce((s, a) => s + parseFloat(a.avg), 0) / avgBySubject.length;

  const schools = [
    { name: 'X (Polytechnique)', threshold: 16.5, tier: 'A+' },
    { name: 'Mines Paris / Ponts', threshold: 15.5, tier: 'A' },
    { name: 'Centrale Paris', threshold: 15, tier: 'A' },
    { name: 'Centrale Lyon/Lille', threshold: 14, tier: 'B+' },
    { name: 'ENSIMAG / ENSTA', threshold: 13, tier: 'B' },
    { name: 'Arts et Métiers', threshold: 12, tier: 'B' },
    { name: 'Écoles CCP milieu', threshold: 11, tier: 'C' },
    { name: 'Écoles CCP', threshold: 10, tier: 'C' },
  ];

  const results = schools.map(s => {
    const gap = globalAvg - s.threshold;
    let chance, color, label;
    if (gap >= 2) { chance = 90; color = 'var(--positive)'; label = 'Très probable'; }
    else if (gap >= 0.5) { chance = 70; color = 'var(--positive)'; label = 'Probable'; }
    else if (gap >= -0.5) { chance = 50; color = 'var(--caution)'; label = 'Possible'; }
    else if (gap >= -2) { chance = 25; color = 'var(--caution)'; label = 'Difficile'; }
    else { chance = 10; color = 'var(--negative)'; label = 'Peu probable'; }
    return { ...s, chance, color, label };
  });

  return `
    <div style="font-size:0.82rem;margin-bottom:var(--s-4)">Moyenne générale estimée : <strong>${globalAvg.toFixed(1)}/20</strong></div>
    <div style="font-size:0.65rem;color:var(--text-3);margin-bottom:var(--s-3)">Repères basés sur des seuils historiques. Données indicatives, sans valeur prédictive officielle.</div>
    ${results.map(r => `
      <div style="display:flex;align-items:center;gap:var(--s-3);margin-bottom:6px">
        <span style="min-width:160px;font-size:0.78rem;font-weight:500">${r.name}</span>
        <div class="progress-bar-bg" style="flex:1"><div class="progress-bar-fill" style="width:${r.chance}%;background:${r.color}"></div></div>
        <span style="min-width:80px;font-size:0.7rem;font-weight:600;color:${r.color};text-align:right">${r.label}</span>
      </div>`).join('')}
  `;
}

function buildEvolutionSVG(grades) {
  const sorted = [...grades].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const normalized = sorted.map(g => ({ val: (g.grade / g.grade_max) * 20, date: g.created_at, subject: g.subject }));

  const W = 600, H = 180, PAD = 40;
  const innerW = W - PAD * 2, innerH = H - PAD * 1.5;

  const smoothed = [];
  for (let i = 0; i < normalized.length; i++) {
    const window = normalized.slice(Math.max(0, i - 2), i + 3);
    const avg = window.reduce((s, p) => s + p.val, 0) / window.length;
    smoothed.push(avg);
  }

  const maxV = 20, minV = 0;
  const points = normalized.map((p, i) => {
    const x = PAD + (i / Math.max(normalized.length - 1, 1)) * innerW;
    const y = PAD + (1 - (smoothed[i] - minV) / (maxV - minV)) * innerH;
    return { x, y, raw: p.val, smoothed: smoothed[i] };
  });

  const rawPoints = normalized.map((p, i) => {
    const x = PAD + (i / Math.max(normalized.length - 1, 1)) * innerW;
    const y = PAD + (1 - (p.val - minV) / (maxV - minV)) * innerH;
    return `${x},${y}`;
  });

  const smoothLine = points.map(p => `${p.x},${p.y}`).join(' ');

  const gridLines = [0, 5, 10, 15, 20].map(v => {
    const y = PAD + (1 - (v - minV) / (maxV - minV)) * innerH;
    return `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="var(--border-1)" stroke-width="1"/>
    <text x="${PAD - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--text-3)" font-family="inherit">${v}</text>`;
  }).join('');

  const dots = points.map((p, i) => {
    const color = normalized[i].val >= 14 ? 'var(--positive)' : normalized[i].val >= 10 ? 'var(--caution)' : 'var(--negative)';
    return `<circle cx="${p.x}" cy="${PAD + (1 - (normalized[i].val - minV) / (maxV - minV)) * innerH}" r="3.5" fill="${color}" stroke="var(--bg-card)" stroke-width="1.5"/>`;
  }).join('');

  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto">
    ${gridLines}
    <polyline points="${rawPoints.join(' ')}" fill="none" stroke="var(--border-0)" stroke-width="1" stroke-dasharray="3,3"/>
    <polyline points="${smoothLine}" fill="none" stroke="var(--text-0)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
    <text x="${W/2}" y="${H - 4}" text-anchor="middle" font-size="9" fill="var(--text-3)" font-family="inherit">Trait plein = moyenne lissée</text>
  </svg>`;
}

function normalizedGrade(g) {
  return (Number(g.grade) / Number(g.grade_max || 20)) * 20;
}

function coeff(g) {
  const value = Number(g.coefficient || 1);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

function parseGradesCsv(text) {
  const lines = String(text || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const delimiter = lines[0].includes(';') ? ';' : ',';
  const headers = splitCsvLine(lines[0], delimiter).map(h => normalizeHeader(h));
  const index = (...names) => headers.findIndex(h => names.includes(h));
  const subjectIndex = index('matiere', 'subject', 'discipline');
  const labelIndex = index('intitule', 'label', 'devoir', 'evaluation');
  const gradeIndex = index('note', 'grade');
  const maxIndex = index('sur', 'bareme', 'max', 'grade_max');
  const coeffIndex = index('coefficient', 'coeff');
  const avgIndex = index('moyenne', 'moyenne_classe', 'class_avg');
  if (gradeIndex < 0) return [];

  return lines.slice(1).map(line => {
    const cols = splitCsvLine(line, delimiter);
    const grade = parseNumber(cols[gradeIndex]);
    if (grade == null) return null;
    return {
      subject: clean(cols[subjectIndex]) || 'Autre',
      label: clean(cols[labelIndex]) || 'Note importée',
      grade,
      grade_max: parseNumber(cols[maxIndex]) || 20,
      coefficient: parseNumber(cols[coeffIndex]) || 1,
      class_avg: parseNumber(cols[avgIndex]),
    };
  }).filter(Boolean);
}

function splitCsvLine(line, delimiter) {
  const out = [];
  let current = '';
  let quoted = false;
  for (const char of line) {
    if (char === '"') quoted = !quoted;
    else if (char === delimiter && !quoted) {
      out.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  out.push(current);
  return out;
}

function normalizeHeader(value) {
  return clean(value).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

function parseNumber(value) {
  const text = clean(value).replace(',', '.');
  if (!text) return null;
  const n = Number(text);
  return Number.isFinite(n) ? n : null;
}

function clean(value) {
  return String(value ?? '').replace(/^"|"$/g, '').trim();
}
