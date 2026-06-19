import { api } from '../api.js';
import { getUser } from '../auth.js';
import { notLoggedIn } from '../empty-state.js';
import { skeletonStats, skeletonList } from '../skeleton.js';

export async function initDashboard() {
  const container = document.getElementById('dashboard-content');
  if (!container) return;

  const user = getUser();
  if (!user) {
    container.innerHTML = notLoggedIn('tableau de bord');
    return;
  }

  container.innerHTML = skeletonStats(4) + '<div style="margin-top:1.5rem">' + skeletonList(5) + '</div>';

  try {
    const [data, me, reviewItems, erreurs, grades] = await Promise.all([
      api.getDashboard(), api.getMe(),
      api.getReviewToday().catch(() => []),
      api.getErreurs().catch(() => []),
      api.getGrades().catch(() => []),
    ]);
    data.streak = (me && me.streak) ? me.streak : { current: 0, longest: 0 };
    render(container, data, { reviewItems: reviewItems || [], erreurs: erreurs || [], grades: grades || [] });
  } catch (err) {
    console.error('[Dashboard] erreur:', err);
    const msg = err?.message || String(err) || '';
    const isAuth = msg.toLowerCase().includes('token') || msg.toLowerCase().includes('auth') || msg.toLowerCase().includes('invalide') || msg.toLowerCase().includes('trouvé');
    const isNetwork = msg.toLowerCase().includes('fetch') || msg.toLowerCase().includes('network') || msg.toLowerCase().includes('503') || msg.toLowerCase().includes('502');
    container.innerHTML = `
      <div style="text-align:center;padding:var(--s-10)">
        <div style="font-size:1.4rem;font-weight:800;margin-bottom:var(--s-3);color:var(--accent)">${isAuth ? 'S' : '!'}</div>
        <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:var(--s-2)">${isAuth ? 'Session expirée' : 'Impossible de charger le tableau de bord'}</h2>
        <p style="color:var(--text-3);font-size:0.85rem;margin-bottom:var(--s-4)">${isAuth ? 'Reconnectez-vous pour accéder à l’espace personnel.' : isNetwork ? 'Le serveur est inaccessible. Vérifiez qu\'il est bien démarré.' : 'Vérifiez la connexion puis réessayez.'}</p>
        ${isAuth
          ? `<button onclick="document.getElementById('login-btn')?.click()" style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">Se connecter</button>`
          : `<button onclick="location.reload()" style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">Réessayer</button>`}
        <p style="margin-top:var(--s-4);font-size:0.72rem;color:var(--text-3);font-family:monospace">${msg}</p>
      </div>`;
  }
}

const MAT = { ma: 'Maths', ph: 'Physique', ch: 'Chimie', info: 'Info', si: 'SI', phch: 'Phys-Ch', svt: 'SVT', hg: 'Hist-Géo', fr: 'Français', ang: 'Anglais', nsi: 'NSI' };

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function ring(pct, size = 116, stroke = 9) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c - (pct / 100) * c;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--bg-2)" stroke-width="${stroke}"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="${stroke}" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size/2} ${size/2})" style="transition:stroke-dashoffset 1s var(--ease)"/>
    <text x="50%" y="48%" text-anchor="middle" font-size="1.5rem" font-weight="800" fill="var(--text-0)" font-family="Inter">${pct}%</text>
    <text x="50%" y="63%" text-anchor="middle" font-size="0.52rem" fill="var(--text-3)" font-family="Inter" font-weight="600" letter-spacing="0.08em">MAÎTRISÉ</text>
  </svg>`;
}

/* ── Hub « Mon espace » : recentré sur le cours ────────────────────────────── */
function render(container, data, { reviewItems, erreurs, grades }) {
  const { user, stats, subjects = [], streak } = data;
  const pct = stats.totalCards ? Math.round((stats.mastered / stats.totalCards) * 100) : 0;
  const fil = user.filiere_id || 'mp';
  const FIL = fil.toUpperCase();
  const firstName = (user.nom || '').split(' ')[0];
  const unresolvedErrors = erreurs.filter(e => !e.resolved);
  const weakSubject = subjects
    .filter(s => s.total > 0)
    .map(s => ({ ...s, pct: Math.round((s.mastered / s.total) * 100) }))
    .sort((a, b) => a.pct - b.pct)[0];
  const gradeCoeffSum = grades.reduce((sum, g) => sum + (Number(g.coefficient || 1) || 1), 0);
  const avgGrade = grades.length
    ? Math.round((grades.reduce((sum, g) => sum + ((Number(g.grade) / Number(g.grade_max || 20)) * 20) * (Number(g.coefficient || 1) || 1), 0) / (gradeCoeffSum || grades.length)) * 10) / 10
    : null;

  // 1) Reprendre le cours
  const next = reviewItems[0];
  const heroMat = next ? (MAT[next.matiere_id] || next.matiere_id) : '';
  const heroTitle = next ? (next.chapitre_titre || [next.label, next.titre].filter(Boolean).join(' — ')) : '';
  const reviseLink = next ? `cours.html?filiere=${fil}&matiere=${next.matiere_id}#${next.chapitre_id}` : `cours.html?filiere=${fil}&matiere=ph`;
  const coursLink = `cours.html?filiere=${fil}&matiere=${next?.matiere_id || 'ph'}`;
  const heroHTML = `
    <div class="hub-hero">
      <div class="hub-hero-body">
        <div class="hub-eyebrow">${FIL}${heroMat ? ' · ' + heroMat : ''}</div>
        <h2>${next ? `À reprendre : ${heroTitle}` : 'Suivi à jour'}</h2>
        <p>${next ? `<b>${reviewItems.length} carte${reviewItems.length > 1 ? 's' : ''}</b> à revoir dans le programme de travail.` : 'Aucun élément en attente. Le programme peut être poursuivi.'}</p>
        <div class="hub-pbar"><i style="width:${pct}%"></i></div>
        <div class="hub-cta">
          <a class="hub-btn hub-btn-p" href="${coursLink}">Continuer le cours →</a>
          ${next ? `<a class="hub-btn hub-btn-s" href="${reviseLink}">Revoir les ${reviewItems.length} cartes</a>` : ''}
        </div>
      </div>
      <div class="hub-ring">${ring(pct)}</div>
    </div>`;

  // 2) Progression par matière
  const progHTML = `<div class="hub-prog">${subjects.map(s => {
    const p = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
    return `<div class="hub-mat"><div class="hub-mat-n">${s.nom}</div><div class="hub-mat-v">${p}%</div><div class="hub-mat-b"><i style="width:${p}%"></i></div></div>`;
  }).join('')}</div>`;

  const priorities = [
    next ? {
      label: 'À revoir',
      title: heroTitle,
      body: `${reviewItems.length} carte${reviewItems.length > 1 ? 's' : ''} à reprendre avant de poursuivre.`,
      href: reviseLink,
      cta: 'Ouvrir',
    } : null,
    weakSubject && weakSubject.pct < 70 ? {
      label: 'Matière prioritaire',
      title: weakSubject.nom,
      body: `${weakSubject.pct} % maîtrisé. Reprendre les fiches et une série d'exercices courts.`,
      href: `cours.html?filiere=${fil}&matiere=${weakSubject.id}`,
      cta: 'Travailler',
    } : null,
    unresolvedErrors.length ? {
      label: 'Cahier d’erreurs',
      title: `${unresolvedErrors.length} point${unresolvedErrors.length > 1 ? 's' : ''} à corriger`,
      body: 'Reprendre les erreurs non résolues avant d’ajouter de nouveaux chapitres.',
      href: 'erreurs.html',
      cta: 'Corriger',
    } : null,
    !grades.length ? {
      label: 'Suivi',
      title: 'Aucun résultat renseigné',
      body: 'Ajouter quelques notes permet de mieux situer le travail dans la durée.',
      href: 'notes.html',
      cta: 'Ajouter',
    } : null,
  ].filter(Boolean).slice(0, 3);

  const prioritiesHTML = `<div class="hub-priorities">${priorities.length ? priorities.map(p => `
    <a class="hub-priority" href="${p.href}">
      <span class="hub-priority-label">${esc(p.label)}</span>
      <strong>${esc(p.title)}</strong>
      <span>${esc(p.body)}</span>
      <em>${esc(p.cta)}</em>
    </a>`).join('') : `
    <div class="hub-priority muted">
      <span class="hub-priority-label">Situation</span>
      <strong>Rien d’urgent à reprendre</strong>
      <span>Le parcours est à jour. Continuer le cours ou lancer un diagnostic.</span>
      <em>Voir le parcours</em>
    </div>`}</div>`;

  // 3) Outils structurants
  const tools = [
    { href: 'parcours.html#diagnostic', kind: 'diagnostic', t: 'Diagnostic', d: 'Priorités de travail' },
    { href: 'schedule.html',            kind: 'schedule', t: 'Emploi du temps', d: 'Organisation hebdomadaire' },
    { href: 'erreurs.html',             kind: 'errors', t: "Cahier d'erreurs", d: 'Corrections ciblées' },
    { href: 'notes.html',               kind: 'notes', t: 'Notes', d: 'Résultats et évolution' },
    { href: 'focus.html',               kind: 'focus', t: 'Timer', d: 'Session ponctuelle' },
  ];
  const toolsHTML = `<div class="hub-tools">${tools.map(t =>
    `<a class="hub-tool" href="${t.href}"><div class="hub-tool-ic is-${t.kind}" aria-hidden="true"></div><div class="hub-tool-t">${t.t}</div><div class="hub-tool-d">${t.d}</div></a>`).join('')}</div>`;

  const regularityHTML = `
    <div class="hub-moti">
      ${streak.current > 0 ? `<div class="hub-moti-i"><span class="hub-moti-mark is-regularity" aria-hidden="true"></span><div><div class="hub-moti-big">${streak.current} j</div><div class="hub-moti-lab">Régularité de travail</div></div></div>` : '<div class="hub-moti-i"><span class="hub-moti-mark is-regularity" aria-hidden="true"></span><div><div class="hub-moti-big">0 j</div><div class="hub-moti-lab">Régularité de travail</div></div></div>'}
      <div class="hub-moti-sep"></div>
      <div class="hub-moti-i"><span class="hub-moti-mark is-bilan" aria-hidden="true"></span><div><div class="hub-moti-big">${avgGrade == null ? '—' : `${avgGrade}/20`}</div><div class="hub-moti-lab">Moyenne renseignée</div></div></div>
      <button class="hub-btn hub-btn-s hub-moti-cta" id="hub-export-report" type="button">Exporter le bilan</button>
    </div>`;

  container.innerHTML = `
    <div class="hub-hi">Bonjour <span>${firstName}</span></div>
    <div class="hub-sub">Reprendre le travail au bon endroit. L’essentiel : priorités, contenus et suivi.</div>
    <div class="hub-lbl">Apprendre — cours</div>${heroHTML}
    <div class="hub-lbl">Priorités recommandées</div>${prioritiesHTML}
    <div class="hub-lbl">Progression</div>${progHTML}
    <div class="hub-lbl">Travailler — outils</div>${toolsHTML}
    <div class="hub-lbl">Bilan</div>${regularityHTML}
  `;

  container.querySelector('#hub-export-report')?.addEventListener('click', () => {
    exportReport({ user, pct, stats, subjects, priorities, unresolvedErrors, avgGrade });
  });
}

function exportReport({ user, pct, stats, subjects, priorities, unresolvedErrors, avgGrade }) {
  const rows = subjects.map(s => {
    const p = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
    return `<tr><td>${esc(s.nom)}</td><td>${p} %</td><td>${s.mastered || 0}/${s.total || 0}</td></tr>`;
  }).join('');
  const prios = priorities.length ? priorities.map(p => `<li><strong>${esc(p.label)} :</strong> ${esc(p.title)} — ${esc(p.body)}</li>`).join('') : '<li>Aucune priorité urgente.</li>';
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan Admiscible</title>
    <style>
      body{font-family:Arial,sans-serif;color:#161616;margin:32px;line-height:1.5}
      h1{font-size:24px;margin:0 0 4px;color:#123b7a} h2{font-size:15px;margin-top:24px;border-bottom:1px solid #d8e0ea;padding-bottom:6px}
      .meta{color:#666;font-size:13px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}
      .box{border:1px solid #d8e0ea;padding:12px}.box b{display:block;font-size:20px;color:#123b7a}
      table{width:100%;border-collapse:collapse}td,th{border:1px solid #d8e0ea;padding:8px;text-align:left}th{background:#edf2f8}
    </style></head><body>
    <h1>Bilan de travail Admiscible</h1>
    <div class="meta">${esc(user.nom || user.username)} · Filière ${esc(user.filiere_id || '')} · ${new Date().toLocaleDateString('fr-FR')}</div>
    <div class="grid">
      <div class="box"><b>${pct} %</b>maîtrise globale</div>
      <div class="box"><b>${stats.mastered || 0}</b>cartes maîtrisées</div>
      <div class="box"><b>${unresolvedErrors.length}</b>erreurs à corriger</div>
      <div class="box"><b>${avgGrade == null ? '—' : `${avgGrade}/20`}</b>moyenne renseignée</div>
    </div>
    <h2>Priorités recommandées</h2><ul>${prios}</ul>
    <h2>Progression par matière</h2><table><thead><tr><th>Matière</th><th>Maîtrise</th><th>Cartes</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="meta">Document généré depuis l’espace personnel. Utiliser l’impression du navigateur pour l’enregistrer en PDF.</p>
    <script>window.onload=()=>window.print()</script></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
}
