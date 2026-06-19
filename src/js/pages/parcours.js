import { api } from '../api.js';
import { getUser } from '../auth.js';
import { notLoggedIn } from '../empty-state.js';

/* ───────────────────────────────────────────────────────────────────────────
   Parcours — repères par niveau.
   Chaque classe est rattachée à un guide (étapes + calendrier + épreuves).
   Le contenu est scellé sur le niveau de l'élève ; la progression est réelle.
─────────────────────────────────────────────────────────────────────────── */

function guideKey(filiereId, niveauId) {
  if (filiereId === '6eme') return 'demarrage';
  if (filiereId === '5eme' || filiereId === '4eme') return 'college';
  if (filiereId === '3eme') return 'brevet';
  if (filiereId === '2nde') return 'seconde';
  if (filiereId === '1ere-gen') return 'premiere';
  if (filiereId && filiereId.startsWith('term')) return 'terminale';
  if (niveauId === 'prepa') return 'prepa';
  if (niveauId === 'college') return 'college';
  if (niveauId === 'lycee') return 'seconde';
  return 'prepa';
}

const GUIDES = {
  /* ───────── 6ᵉ ───────── */
  demarrage: {
    h1: 'Bien démarrer <span class="em">au collège</span>.',
    lead: 'Nouveau rythme, plusieurs professeurs, plus d\'autonomie. Ce parcours présente les repères utiles pour installer des habitudes de travail régulières dès le départ.',
    steps: [
      { t: 'Prendre ses marques', d: 'S\'organiser : agenda, cahiers, emploi du temps. Comprendre les attendus du collège.' },
      { t: 'Apprendre à apprendre', d: 'Méthodes de base : prendre des notes, faire des fiches, mémoriser et vérifier la compréhension.', meter: true },
      { t: 'Travailler chaque matière', d: 'Mathématiques, français, histoire-géographie, sciences et anglais : comprendre le cours et s\'entraîner régulièrement.' },
      { t: 'Suivre les progrès', d: 'S\'auto-évaluer, repérer les difficultés et consolider les acquis progressivement.' },
    ],
    calTitle: 'Les temps forts de l\'année',
    cal: [
      { m: 'Septembre', t: 'Rentrée', s: 'On installe les bonnes habitudes.' },
      { m: 'Toussaint', t: 'Premiers bilans', s: 'On ajuste sa méthode de travail.' },
      { m: 'Trimestres', t: 'Conseils de classe', s: 'Bulletins et appréciations.', hot: true },
      { m: 'Juin', t: 'Passage en 5ᵉ', s: 'Bilan de fin d\'année et préparation de la suite.' },
    ],
    tailTitle: 'Matières principales',
    tail: [
      { ic: 'MA', n: 'Mathématiques', c: 'Nombres & calculs' },
      { ic: 'FR', n: 'Français', c: 'Lecture & écriture' },
      { ic: 'HG', n: 'Histoire-Géo', c: 'Repères & cartes' },
      { ic: 'SV', n: 'SVT', c: 'Le vivant' },
      { ic: 'AN', n: 'Anglais', c: 'Bases & oral' },
    ],
  },

  /* ───────── 5ᵉ / 4ᵉ ───────── */
  college: {
    h1: 'Progresser <span class="em">au collège</span>.',
    lead: 'Le parcours vise à consolider les bases, matière par matière, afin d\'aborder la 3ᵉ et le brevet avec des repères de travail stables.',
    steps: [
      { t: 'Consolider ses méthodes', d: 'Affiner l\'organisation et la façon d\'apprendre pour gagner en efficacité.' },
      { t: 'Maîtriser le programme', d: 'Comprendre et revoir chaque chapitre clé dans toutes les matières.', meter: true },
      { t: 'S\'entraîner régulièrement', d: 'Exercices et tests courts pour ancrer les notions dans la durée.' },
      { t: 'Combler ses lacunes', d: 'Repérer ses points faibles avec le cahier d\'erreurs et les retravailler.' },
    ],
    calTitle: 'Les temps forts de l\'année',
    cal: [
      { m: 'Septembre', t: 'Rentrée', s: 'On reprend le rythme.' },
      { m: 'Trimestres', t: 'Conseils de classe', s: 'Bulletins et bilans.' },
      { m: 'Printemps', t: 'Cap sur la 3ᵉ', s: 'On prépare le Brevet de loin.', hot: true },
      { m: 'Juin', t: 'Passage', s: 'Bilan et préparation de la classe supérieure.' },
    ],
    tailTitle: 'Matières principales',
    tail: [
      { ic: 'MA', n: 'Mathématiques', c: 'Algèbre & géométrie' },
      { ic: 'FR', n: 'Français', c: 'Textes & rédaction' },
      { ic: 'PC', n: 'Physique-Chimie', c: 'Premières expériences' },
      { ic: 'SV', n: 'SVT', c: 'Le vivant & la Terre' },
      { ic: 'HG', n: 'Histoire-Géo', c: 'Repères & EMC' },
      { ic: 'AN', n: 'Anglais', c: 'Compréhension & oral' },
    ],
  },

  /* ───────── 3ᵉ ───────── */
  brevet: {
    h1: 'Objectif <span class="em">Brevet</span>.',
    lead: 'Ce parcours rassemble les méthodes, les chapitres prioritaires et les entraînements utiles pour préparer les épreuves du brevet.',
    steps: [
      { t: 'Poser les bonnes méthodes', d: 'Apprendre à apprendre : prise de notes, fiches, organisation du travail et gestion du temps.' },
      { t: 'Maîtriser le programme', d: 'Comprendre et revoir chaque chapitre clé en mathématiques, français, histoire-géographie et sciences.', meter: true },
      { t: 'S\'entraîner aux épreuves', d: 'Sujets type Brevet, annales corrigées et DNB blanc chronométré pour gérer le temps et le stress.' },
      { t: 'Dernière ligne droite', d: 'Travail ciblé sur les points faibles à partir du cahier d\'erreurs et des fiches de synthèse.' },
    ],
    calTitle: 'Calendrier du Brevet',
    cal: [
      { m: 'Avril', t: 'DNB blanc', s: 'Premier vrai test en conditions d\'examen.' },
      { m: 'Mai – Juin', t: 'Travail final', s: 'Reprise des priorités, matière par matière.' },
      { m: 'Fin juin', t: 'Épreuves écrites', s: 'Français, maths, sciences, histoire-géo-EMC.', hot: true },
      { m: 'Début juillet', t: 'Résultats', s: 'Bilan et passage vers le lycée.' },
    ],
    tailTitle: 'Les épreuves & leurs points',
    tail: [
      { ic: 'MA', n: 'Mathématiques', c: '100 pts · écrit' },
      { ic: 'FR', n: 'Français', c: '100 pts · écrit' },
      { ic: 'HG', n: 'Histoire-Géo · EMC', c: '50 pts · écrit' },
      { ic: 'SC', n: 'Sciences', c: '50 pts · écrit' },
      { ic: 'OR', n: 'Oral', c: '100 pts · projet' },
      { ic: 'CC', n: 'Contrôle continu', c: '400 pts · année' },
    ],
  },

  /* ───────── 2ⁿᵈᵉ ───────── */
  seconde: {
    h1: 'Entrée <span class="em">au lycée</span>.',
    lead: 'Le lycée introduit un nouveau rythme et le choix progressif des spécialités. Ce parcours aide à consolider les bases dans toutes les matières.',
    steps: [
      { t: 'Franchir la marche', d: 'S\'adapter au niveau d\'exigence du lycée : plus d\'autonomie, un raisonnement plus poussé.' },
      { t: 'Maîtriser le tronc commun', d: 'Mathématiques, français, physique-chimie, SVT, histoire-géographie : comprendre et revoir chaque chapitre.', meter: true },
      { t: 'Explorer les spécialités', d: 'Découvrir maths, physique, SI, NSI… pour choisir en connaissance de cause.' },
      { t: 'Préparer l\'orientation', d: 'Choisir trois spécialités pour la 1ère, en lien avec les projets et les attendus.' },
    ],
    calTitle: 'Le calendrier de la 2ⁿᵈᵉ',
    cal: [
      { m: 'Sept – Déc', t: 'Adaptation', s: 'On prend le rythme du lycée.' },
      { m: 'Janvier', t: 'Choix de spécialités', s: '3 spécialités à choisir pour la 1ère.', hot: true },
      { m: 'Juin', t: 'Conseil de classe', s: 'Validation du passage en 1ère.' },
      { m: 'Été', t: 'Préparation de la 1ère', s: 'Repères de travail avec les spécialités choisies.' },
    ],
    tailTitle: 'Matières principales',
    tail: [
      { ic: 'MA', n: 'Mathématiques', c: 'Tronc commun' },
      { ic: 'FR', n: 'Français', c: 'Vers le Bac anticipé' },
      { ic: 'PC', n: 'Physique-Chimie', c: 'Tronc commun' },
      { ic: 'SV', n: 'SVT', c: 'Tronc commun' },
      { ic: 'HG', n: 'Histoire-Géo', c: 'Tronc commun' },
      { ic: 'AN', n: 'Anglais', c: 'Tronc commun' },
    ],
  },

  /* ───────── 1ʳᵉ ───────── */
  premiere: {
    h1: 'Objectif <span class="em">Bac de français</span>.',
    lead: 'La 1ère comporte les premières épreuves du Bac : le français écrit et oral en fin d\'année, ainsi que l\'approfondissement des spécialités.',
    steps: [
      { t: 'Approfondir les spécialités', d: 'Monter en exigence sur les trois spécialités, qui ont un poids important au Bac.' },
      { t: 'Maîtriser le programme', d: 'Comprendre et revoir chaque chapitre du tronc commun et des spécialités.', meter: true },
      { t: 'Préparer le français écrit', d: 'Dissertation et commentaire : méthode, entraînement et sujets corrigés.' },
      { t: 'Réussir l\'oral de français', d: 'Construire son entraînement sur les textes étudiés et gagner en aisance.' },
    ],
    calTitle: 'Calendrier du Bac · 1ère',
    cal: [
      { m: 'Toute l\'année', t: 'Contrôle continu', s: 'Les résultats alimentent le dossier et le Bac.' },
      { m: 'Mai', t: 'Français', s: 'Dernier sprint avant les épreuves.' },
      { m: 'Juin', t: 'Épreuves anticipées', s: 'Français écrit + oral.', hot: true },
      { m: 'Été', t: 'Préparation de la Terminale', s: 'Bilan des acquis et anticipation de Parcoursup.' },
    ],
    tailTitle: 'Les épreuves anticipées',
    tail: [
      { ic: 'FE', n: 'Français · écrit', c: 'coef 5' },
      { ic: 'FO', n: 'Français · oral', c: 'coef 5' },
      { ic: 'SP', n: 'Spécialités', c: 'contrôle continu' },
      { ic: 'TC', n: 'Tronc commun', c: 'contrôle continu' },
    ],
  },

  /* ───────── Terminale ───────── */
  terminale: {
    h1: 'Objectif <span class="em">Bac</span> & Parcoursup.',
    lead: 'Année structurante : épreuves de spécialités, Grand oral, philosophie et Parcoursup. Le parcours organise les priorités jusqu\'à l\'entrée dans le supérieur.',
    steps: [
      { t: 'Maîtriser les spécialités', d: 'Les épreuves de spécialités portent les coefficients les plus élevés : elles sont prioritaires.' },
      { t: 'Revoir tout le programme', d: 'Spécialités, philosophie et tronc commun : comprendre et ancrer chaque chapitre.', meter: true },
      { t: 'Préparer le Grand oral', d: 'Construire ses questions, s\'entraîner à l\'oral et gagner en assurance.' },
      { t: 'Construire Parcoursup', d: 'Vœux, lettres de motivation et transition vers le supérieur (fac, prépa, école).' },
    ],
    calTitle: 'Calendrier du Bac · Terminale',
    cal: [
      { m: 'Jan – Mars', t: 'Vœux Parcoursup', s: 'Formuler et confirmer ses vœux.' },
      { m: 'Mars', t: 'Épreuves de spécialités', s: 'Les gros coefficients du Bac.', hot: true },
      { m: 'Juin', t: 'Philo + Grand oral', s: 'Les dernières épreuves.' },
      { m: 'Juillet', t: 'Résultats & admission', s: 'Entrée dans le supérieur.' },
    ],
    tailTitle: 'Les épreuves du Bac',
    tail: [
      { ic: 'S1', n: 'Spécialité 1', c: 'coef 16' },
      { ic: 'S2', n: 'Spécialité 2', c: 'coef 16' },
      { ic: 'PH', n: 'Philosophie', c: 'coef 8' },
      { ic: 'GO', n: 'Grand oral', c: 'coef 10' },
      { ic: 'CC', n: 'Contrôle continu', c: 'coef 40' },
    ],
  },

  /* ───────── Prépa ───────── */
  prepa: {
    h1: 'Cap sur les <span class="em">concours</span>.',
    lead: 'Deux ans structurés autour des grandes écoles : méthodes de classes préparatoires, rythme des colles et des DS, préparation aux banques d\'épreuves.',
    steps: [
      { t: 'Adopter les méthodes de classes préparatoires', d: 'Gérer le rythme : colles, DS, DM. Travailler vite, précisément et régulièrement.' },
      { t: 'Maîtriser le programme', d: 'Comprendre en profondeur chaque chapitre, base du travail en classes préparatoires.', meter: true },
      { t: 'S\'entraîner aux concours', d: 'Annales et sujets des banques (CCINP, Centrale, Mines, X-ENS) en conditions réelles.' },
      { t: 'Corriger les points faibles', d: 'Cibler les chapitres fragiles avec le cahier d\'erreurs et des sujets dédiés.' },
    ],
    calTitle: 'Saison des concours',
    cal: [
      { m: 'Sept – Mars', t: 'Programme + colles', s: 'Le fond du travail, sur deux ans.' },
      { m: 'Avril – Mai', t: 'Écrits', s: 'CCINP, Centrale, Mines, X-ENS…', hot: true },
      { m: 'Juin', t: 'Oraux & TIPE', s: 'Admissibles : la dernière étape.' },
      { m: 'Juillet', t: 'Résultats & affectations', s: 'Bilan des admissions et affectations.' },
    ],
    tailTitle: 'Les banques d\'épreuves',
    tail: [
      { ic: 'XE', n: 'X-ENS', c: 'les plus sélectives' },
      { ic: 'CS', n: 'Centrale-Supélec', c: 'écrits + oraux' },
      { ic: 'MP', n: 'Mines-Ponts', c: 'écrits + oraux' },
      { ic: 'CC', n: 'CCINP', c: 'large spectre d\'écoles' },
      { ic: 'E3', n: 'e3a / Banque PT', c: 'selon la filière' },
    ],
  },
};

function progressOf(stats, stepCount) {
  const total = stats.totalCards || 0;
  const mastered = stats.mastered || 0;
  const reviewed = stats.reviewed || 0;
  const maitrise = total ? Math.round((mastered / total) * 100) : 0;
  let cur;
  if (reviewed === 0) cur = 1;
  else if (maitrise < 70) cur = 2;
  else if (maitrise < 90) cur = 3;
  else cur = 4;
  cur = Math.min(cur, stepCount);
  return { maitrise, cur, mastered, total };
}

function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

const DIAG = [
  {
    id: 'time',
    label: 'Temps disponible',
    options: [
      ['1', 'Moins de 3 h par semaine'],
      ['2', '3 à 6 h par semaine'],
      ['3', 'Plus de 6 h par semaine'],
    ],
  },
  {
    id: 'method',
    label: 'Méthode de travail',
    options: [
      ['1', 'Je travaille surtout quand une évaluation approche'],
      ['2', 'J’ai une organisation, mais elle reste irrégulière'],
      ['3', 'Je sais planifier, revoir et corriger mes erreurs'],
    ],
  },
  {
    id: 'confidence',
    label: 'Niveau de confiance',
    options: [
      ['1', 'Je me sens fragile dans plusieurs matières'],
      ['2', 'Je suis à l’aise sur certains chapitres, moins sur d’autres'],
      ['3', 'Je me sens globalement solide'],
    ],
  },
  {
    id: 'priority',
    label: 'Besoin principal',
    options: [
      ['cours', 'Comprendre les cours'],
      ['exercices', 'M’entraîner avec des exercices'],
      ['organisation', 'Mieux organiser mon travail'],
    ],
  },
];

function diagnosticKey(filiereId) {
  return `admiscible-diagnostic-${filiereId || 'general'}`;
}

function readDiagnostic(filiereId) {
  try { return JSON.parse(localStorage.getItem(diagnosticKey(filiereId))); } catch { return null; }
}

function saveDiagnostic(filiereId, data) {
  localStorage.setItem(diagnosticKey(filiereId), JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
}

function computeDiagnostic(data) {
  const score = Number(data.time || 0) + Number(data.method || 0) + Number(data.confidence || 0);
  const profile = score <= 5
    ? { level: 'Parcours à stabiliser', tone: 'stable', summary: 'L’objectif prioritaire est de rendre le travail régulier, simple et visible.' }
    : score <= 7
      ? { level: 'Consolidation active', tone: 'middle', summary: 'La base est présente. Il faut maintenant cibler les chapitres fragiles et ancrer les méthodes.' }
      : { level: 'Autonomie avancée', tone: 'strong', summary: 'Le travail peut devenir plus sélectif : entraînement, sujets longs et correction fine.' };

  const byPriority = {
    cours: ['Reprendre 2 fiches courtes avant les exercices.', 'Noter les définitions ou méthodes qui bloquent.', 'Ajouter au cahier d’erreurs les points non compris.'],
    exercices: ['Faire une série courte, puis corriger immédiatement.', 'Classer chaque erreur : cours, méthode, calcul ou lecture.', 'Refaire un exercice semblable 48 h plus tard.'],
    organisation: ['Bloquer 3 créneaux fixes dans l’emploi du temps.', 'Prévoir une session courte de bilan chaque fin de semaine.', 'Limiter le travail du jour à 2 priorités maximum.'],
  };
  return {
    ...profile,
    score,
    plan: byPriority[data.priority] || byPriority.organisation,
  };
}

function renderDiagnostic(filiereId) {
  const saved = readDiagnostic(filiereId);
  if (saved) {
    const result = computeDiagnostic(saved);
    const date = saved.savedAt ? new Date(saved.savedAt).toLocaleDateString('fr-FR') : '';
    return `
      <section class="pk-sec" id="diagnostic">
        <div class="pk-sec-h">Diagnostic de départ</div>
        <div class="diag-result ${result.tone}">
          <div>
            <span class="diag-kicker">Résultat${date ? ` · ${date}` : ''}</span>
            <h2>${esc(result.level)}</h2>
            <p>${esc(result.summary)}</p>
          </div>
          <div class="diag-score"><b>${result.score}/9</b><span>repère global</span></div>
        </div>
        <div class="diag-plan">
          ${result.plan.map((item, index) => `<div class="diag-step"><span>${index + 1}</span><p>${esc(item)}</p></div>`).join('')}
        </div>
        <div class="diag-actions">
          <a class="pk-btn pk-btn-p" href="dashboard.html">Voir les priorités du tableau de bord</a>
          <button class="pk-btn-ghost diag-reset" type="button">Refaire le diagnostic</button>
        </div>
      </section>`;
  }

  return `
    <section class="pk-sec" id="diagnostic">
      <div class="pk-sec-h">Diagnostic de départ</div>
      <form class="diag-form" id="diag-form">
        <div class="diag-intro">
          <h2>Définir les priorités de travail</h2>
          <p>Quatre questions rapides pour orienter le parcours. Le diagnostic reste local au navigateur.</p>
        </div>
        ${DIAG.map(q => `
          <fieldset class="diag-field">
            <legend>${esc(q.label)}</legend>
            <div class="diag-options">
              ${q.options.map(([value, label], i) => `
                <label>
                  <input type="radio" name="${q.id}" value="${value}" ${i === 1 ? 'checked' : ''}>
                  <span>${esc(label)}</span>
                </label>`).join('')}
            </div>
          </fieldset>`).join('')}
        <button class="pk-btn pk-btn-p" type="submit">Obtenir les priorités</button>
      </form>
    </section>`;
}

function renderGuide(guide, ctx) {
  const { classeNom, filiereId } = ctx;
  const p = progressOf(ctx.stats, guide.steps.length);
  const courseSuffix = (classeNom && classeNom.length <= 6) ? ` de ${esc(classeNom)}` : '';
  const courseHref = filiereId ? `cours.html?filiere=${encodeURIComponent(filiereId)}` : 'cours.html';

  const steps = guide.steps.map((st, i) => {
    const n = i + 1;
    const status = n < p.cur ? 'done' : (n === p.cur ? 'now' : 'soon');
    const pill = status === 'done' ? 'Terminé' : (status === 'now' ? 'En cours' : 'À venir');
    const node = status === 'done' ? '✓' : String(n);
    const mini = (st.meter && status === 'now')
      ? `<div class="pk-mini"><i style="width:${Math.max(p.maitrise, 3)}%"></i></div>
         <div class="pk-mini-lbl">${p.mastered} notion${p.mastered > 1 ? 's' : ''} maîtrisée${p.mastered > 1 ? 's' : ''} sur ${p.total}</div>`
      : '';
    return `
      <div class="pk-step ${status}">
        <div class="pk-node">${node}</div>
        <div class="pk-card">
          <div class="pk-card-top">
            <span class="pk-card-t">${n} · ${esc(st.t)}</span>
            <span class="pk-pill ${status}">${pill}</span>
          </div>
          <div class="pk-card-d">${esc(st.d)}</div>
          ${mini}
        </div>
      </div>`;
  }).join('');

  const cal = guide.cal.map(c => `
    <div class="pk-cal-item ${c.hot ? 'hot' : ''}">
      <div class="pk-cal-dot"></div>
      <div class="pk-cal-m">${esc(c.m)}</div>
      <div class="pk-cal-t">${esc(c.t)}</div>
      <div class="pk-cal-s">${esc(c.s)}</div>
    </div>`).join('');

  const tail = guide.tail.map(t => `
    <div class="pk-exam">
      <span class="pk-exam-ic" aria-hidden="true">${t.ic}</span>
      <div><div class="pk-exam-n">${esc(t.n)}</div><div class="pk-exam-c">${esc(t.c)}</div></div>
    </div>`).join('');

  return `
    <section class="pk-hero">
      <span class="pk-eyebrow">Espace personnel · <b>${classeNom ? esc(classeNom) : 'classe'}</b></span>
      <h1>${guide.h1}</h1>
      <p class="pk-lead">${guide.lead}</p>
      <div class="pk-meter">
        <span class="pk-meter-lbl">Parcours · <b>étape ${p.cur} / ${guide.steps.length}</b></span>
        <div class="pk-meter-bar"><i style="width:${Math.max(p.maitrise, 2)}%"></i></div>
        <span class="pk-meter-lbl">${p.maitrise} %</span>
      </div>
      <div class="pk-cta">
        <a href="${courseHref}" class="pk-btn pk-btn-p">Reprendre les cours${courseSuffix} →</a>
        <a href="cours.html" id="pk-explore" class="pk-btn-ghost">Explorer un autre niveau →</a>
      </div>
    </section>

    <section class="pk-sec">
      <div class="pk-sec-h">Parcours</div>
      <div class="pk-path">${steps}</div>
    </section>

    ${renderDiagnostic(filiereId)}

    <section class="pk-sec">
      <div class="pk-sec-h">${esc(guide.calTitle)}</div>
      <div class="pk-cal">${cal}</div>
    </section>

    <section class="pk-sec">
      <div class="pk-sec-h">${esc(guide.tailTitle)}</div>
      <div class="pk-exams">${tail}</div>
    </section>`;
}

const NIVEAU_ICONS = { college: 'COL', lycee: 'LYC', prepa: 'CPGE' };

function explorerModal(niveaux, filiereId) {
  const groups = (niveaux || []).map(n => {
    const chips = (n.filieres || []).map(f =>
      `<a class="lvl-chip${f.id === filiereId ? ' current' : ''}" href="cours.html?filiere=${encodeURIComponent(f.id)}">${esc(f.nom)}</a>`
    ).join('');
    return `<div class="lvl-group">
      <div class="lvl-group-h">${NIVEAU_ICONS[n.id] || ''} ${esc(n.nom)}</div>
      <div class="lvl-chips">${chips}</div>
    </div>`;
  }).join('');
  return `
    <div id="lvl-modal" class="modal">
      <div class="modal-content lvl-modal-box">
        <div class="modal-header">
          <h3>Explorer les niveaux</h3>
          <button class="modal-close" id="lvl-close" aria-label="Fermer">&times;</button>
        </div>
        <div class="modal-body">
          <p class="lvl-intro">Les cours sont en accès libre. Chaque niveau peut être consulté ; le parcours personnel reste calé sur la classe enregistrée.</p>
          ${groups}
        </div>
      </div>
    </div>`;
}

function wireExplorer() {
  const modal = document.getElementById('lvl-modal');
  const btn = document.getElementById('pk-explore');
  if (!modal || !btn) return;
  btn.addEventListener('click', (e) => { e.preventDefault(); modal.classList.add('open'); });
  modal.querySelector('#lvl-close')?.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('open'); });
}

function wireDiagnostic(filiereId) {
  const form = document.getElementById('diag-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};
    DIAG.forEach(q => {
      data[q.id] = form.querySelector(`input[name="${q.id}"]:checked`)?.value || '';
    });
    saveDiagnostic(filiereId, data);
    initParcours();
  });

  document.querySelector('.diag-reset')?.addEventListener('click', () => {
    localStorage.removeItem(diagnosticKey(filiereId));
    initParcours();
  });
}

export async function initParcours() {
  const root = document.getElementById('parcours-content');
  if (!root) return;

  const user = getUser();
  if (!user) { root.innerHTML = notLoggedIn('parcours'); return; }

  root.innerHTML = '<div style="padding:4rem 0;text-align:center;color:var(--text-3)">Chargement du parcours…</div>';

  let niveaux = [], dash = null;
  try {
    [niveaux, dash] = await Promise.all([
      api.getNiveaux().catch(() => []),
      api.getDashboard().catch(() => null),
    ]);
  } catch (_) { /* dégrade proprement */ }

  const filiereId = (dash && dash.user && dash.user.filiere_id) || user.filiere_id || null;
  const flat = (niveaux || []).flatMap(n => (n.filieres || []).map(f => ({ ...f, niveauId: n.id })));
  const fil = flat.find(f => f.id === filiereId);
  const niveauId = fil ? fil.niveauId : 'prepa';
  const classeNom = fil ? fil.nom : '';
  const stats = (dash && dash.stats) || { totalCards: 0, mastered: 0, reviewed: 0 };

  const guide = GUIDES[guideKey(filiereId, niveauId)] || GUIDES.prepa;
  root.innerHTML = renderGuide(guide, { classeNom, filiereId, stats }) + explorerModal(niveaux, filiereId);
  wireExplorer();
  wireDiagnostic(filiereId);
  if (location.hash === '#diagnostic') document.getElementById('diagnostic')?.scrollIntoView({ block: 'start' });
}
