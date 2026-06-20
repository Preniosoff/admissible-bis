import { api } from '../api.js';
import { skeletonCards } from '../skeleton.js';
import { initResourceGateway } from '../components/resource-gateway.js';
import { renderSidebar } from '../components/sidebar.js';
import { renderChapitre, loadProgression, initProgressionListeners, initErreurListeners, initMethodeListeners, initEloListeners } from '../components/card.js';
import { initSearch } from '../components/search.js';
import { getUser } from '../auth.js';

let cleanupSidebar = null;

// ── État du chargement paresseux ─────────────────────────────────────────────
let chapitreList = [];            // [{id, titre, ordre}]
const chapitreCache = {};         // id → détails chargés
const chapitreLoaded = new Set(); // ids déjà rendus
let observer = null;
let cleanupViewportLoader = null;
let checkVisibleChapitres = null;
const pendingTypesets = new Set();
let flashcardMode = false;

export async function initCoursPage() {
  const params = new URLSearchParams(window.location.search);
  let filiere = params.get('filiere') || '';
  let matiere = params.get('matiere') || '';
  const initialQuery = (params.get('q') || '').trim();
  const initialView = params.get('view') || 'course';

  await loadProgression();
  initCourseTools();

  if (filiere && matiere) {
    await openCourse({ filiereId: filiere, matiereId: matiere, pushUrl: false, initialQuery, initialView });
  } else {
    showGateway();
    await initResourceGateway({
      root: '#course-gateway',
      resourceLabel: 'Cours',
      resourceName: 'le cours',
      intro: 'Commencez par votre niveau, puis votre filière, puis la matière à travailler.',
      preferredFiliereId: getUser()?.filiere_id || '',
      onComplete: async ({ filiere: selectedFiliere, matiere: selectedMatiere }) => {
        await openCourse({
          filiereId: selectedFiliere.id,
          matiereId: selectedMatiere.id,
          filiereData: selectedFiliere,
          pushUrl: true,
          initialView: 'course',
        });
      },
    });
  }

  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
  }

  async function openCourse({ filiereId, matiereId, filiereData = null, pushUrl, initialQuery: query = '', initialView: view = 'course' }) {
    filiere = filiereId;
    const data = filiereData || await api.getFiliere(filiere);
    matiere = resolveMatiere(data, matiereId);

    if (pushUrl) updateCourseUrl(filiere, matiere, view);
    showWorkspace();
    updateCourseHeader(data, matiere, view);
    await loadMatiere(filiere, matiere);
    initSearch({ initialView: view });
    hookSearchEagerLoad();
    hookCourseControlsEagerLoad();
    if (view === 'exercises') await loadAllChapitres();
    if (query) await applyInitialSearch(query);
  }
}

function resolveMatiere(filiereData, requestedMatiere) {
  const matieres = filiereData?.matieres || [];
  if (matieres.some(m => m.id === requestedMatiere)) return requestedMatiere;
  return (matieres.find(m => m.id === 'ma') || matieres[0])?.id || requestedMatiere;
}

function showGateway() {
  document.getElementById('course-gateway')?.removeAttribute('hidden');
  document.getElementById('course-page-header')?.setAttribute('hidden', '');
  document.getElementById('course-controls')?.setAttribute('hidden', '');
  document.getElementById('course-workspace')?.setAttribute('hidden', '');
}

function showWorkspace() {
  document.getElementById('course-gateway')?.setAttribute('hidden', '');
  document.getElementById('course-page-header')?.removeAttribute('hidden');
  document.getElementById('course-controls')?.removeAttribute('hidden');
  document.getElementById('course-workspace')?.removeAttribute('hidden');
}

function updateCourseUrl(filiere, matiere, view = 'course') {
  const url = new URL(window.location);
  url.searchParams.set('filiere', filiere);
  url.searchParams.set('matiere', matiere);
  if (view && view !== 'course') url.searchParams.set('view', view);
  else url.searchParams.delete('view');
  history.pushState(null, '', url);
}

function updateCourseHeader(filiereData, matiereId, view = 'course') {
  const current = filiereData?.matieres?.find(m => m.id === matiereId);
  const title = document.getElementById('course-title');
  const level = document.getElementById('course-level-label');
  const subtitle = document.getElementById('course-subtitle');
  const isExercises = view === 'exercises';
  if (title) title.textContent = isExercises ? 'Exercices' : 'Cours';
  if (level) level.textContent = filiereData?.nom || 'Filière';
  if (subtitle) {
    if (!current) {
      subtitle.textContent = isExercises
        ? 'Choisissez une filière, puis une matière pour accéder aux exercices.'
        : 'Choisissez une filière, puis une matière pour accéder au cours associé.';
    } else {
      subtitle.textContent = isExercises
        ? `${filiereData.nom} - ${current.nom}. Exercices disponibles pour s’entraîner sur cette matière.`
        : `${filiereData.nom} - ${current.nom}. Définitions, théorèmes, propriétés et formules.`;
    }
  }

  // Sélecteur de contexte : passer de Cours à Méthodes / Exercices pour la même matière
  const ctx = document.getElementById('course-context');
  if (ctx) {
    if (current && filiereData?.id) {
      const q = `?filiere=${encodeURIComponent(filiereData.id)}&matiere=${encodeURIComponent(matiereId)}`;
      ctx.innerHTML = `<span class="course-context-label">${current.nom} :</span>
        <a class="course-context-link${isExercises ? '' : ' is-active'}" href="cours.html${q}">Cours</a>
        <a class="course-context-link" href="methodes.html${q}">Méthodes</a>
        <a class="course-context-link${isExercises ? ' is-active' : ''}" href="ressources.html${q}">Exercices</a>`;
      ctx.removeAttribute('hidden');
    } else {
      ctx.setAttribute('hidden', '');
    }
  }
}

function initCourseTools() {
  const btn = document.getElementById('course-tools-toggle');
  const panel = document.getElementById('course-tools-panel');
  if (!btn || !panel || btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    if (panel.hidden || e.target.closest('.course-tools-panel') || e.target.closest('#course-tools-toggle')) return;
    panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  });
}

// ── Chargement d'une matière : coquilles + observation ───────────────────────
async function loadMatiere(filiere, matiere) {
  const content = document.getElementById('content-container');
  if (!content) return;
  content.innerHTML = skeletonCards(4);

  observer?.disconnect();
  cleanupViewportLoader?.();
  checkVisibleChapitres = null;
  chapitreList = await api.getChapitres(filiere, matiere);
  chapitreLoaded.clear();

  content.innerHTML = `
    <div class="legend">
      <div class="leg"><div class="dot" style="background:var(--negative)"></div>Théorème</div>
      <div class="leg"><div class="dot" style="background:var(--positive)"></div>Définition</div>
      <div class="leg"><div class="dot" style="background:var(--caution)"></div>Formule</div>
      <div class="leg"><div class="dot" style="background:var(--info)"></div>Propriété</div>
      <button class="flashcard-toggle" id="flashcard-toggle" title="Mode mémorisation : masquer le contenu, révéler, puis valider">
        Mode mémorisation
      </button>
    </div>
    ${chapitreList.map((c, i) => `
      <div class="chap chap--shell" id="${c.id}" data-index="${i}">
        <div class="chap-hd">
          <div class="chap-n">${i + 1}</div>
          <div class="chap-title">${c.titre}</div>
        </div>
        <div class="chap-shell-body">${skeletonCards(2)}</div>
      </div>
    `).join('')}
  `;

  if (cleanupSidebar) cleanupSidebar();
  cleanupSidebar = renderSidebar(chapitreList, {
    onNavigate: async (id) => {
      const loaded = await loadChapitresThrough(id);
      if (!loaded) return false;

      const target = document.getElementById(id);
      if (!target) return false;

      const url = new URL(window.location);
      url.hash = id;
      history.replaceState(null, '', url);

      scrollToChapter(id);
      stabilizeChapterScroll(id);
      return true;
    },
  });

  // Listeners délégués (une fois par matière, sur le conteneur)
  initProgressionListeners(content);
  initErreurListeners(content);
  initMethodeListeners(content);
  initEloListeners(content);
  initFlashcardListeners(content);
  document.getElementById('flashcard-toggle')?.addEventListener('click', toggleFlashcards);
  document.getElementById('anki-export')?.addEventListener('click', exportAnkiAll, { once: false });
  window.admiscibleApplyCourseFilters?.();

  // Observer : charge un chapitre quand il approche du viewport
  observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) loadChapitre(e.target.id);
    }
  }, { rootMargin: '900px 0px' });
  content.querySelectorAll('.chap--shell').forEach(el => observer.observe(el));
  cleanupViewportLoader = initViewportLoader();

  // Les 2 premiers immédiatement (pas d'attente du scroll)
  for (const c of chapitreList.slice(0, 2)) loadChapitre(c.id);

  // Ancre #chapitre dans l'URL → charger + scroller
  const hash = decodeURIComponent(location.hash.replace('#', ''));
  if (hash && chapitreList.some(c => c.id === hash)) {
    loadChapitresThrough(hash).then(() => {
      focusRequestedCard(document.getElementById(hash));
      scrollToChapter(hash);
      stabilizeChapterScroll(hash);
    });
  }
}

// ── Chargement d'un chapitre précis ──────────────────────────────────────────
async function loadChapitre(id) {
  if (chapitreLoaded.has(id)) return;
  chapitreLoaded.add(id);
  const shell = document.getElementById(id);
  if (!shell) return;

  try {
    const chap = chapitreCache[id] || (chapitreCache[id] = await api.getChapitre(id));
    const index = Number(shell.dataset.index) || 0;
    const tmp = document.createElement('div');
    tmp.innerHTML = renderChapitre(chap, index);
    const fresh = tmp.firstElementChild;
    fresh.dataset.index = index;
    shell.replaceWith(fresh);
    observer?.unobserve(shell);

    if (flashcardMode) applyFlashcardModeTo(fresh);
    focusRequestedCard(fresh);
    window.admiscibleApplyCourseFilters?.();

    // MathJax progressif : seulement ce chapitre
    if (window.MathJax?.typesetPromise) {
      const typeset = window.MathJax.typesetPromise([fresh]).catch(() => {});
      pendingTypesets.add(typeset);
      typeset.finally(() => pendingTypesets.delete(typeset));
    }
    checkVisibleChapitres?.();
  } catch {
    chapitreLoaded.delete(id);
  }
}

async function loadChapitresThrough(id) {
  const targetIndex = chapitreList.findIndex(chapitre => chapitre.id === id);
  if (targetIndex < 0) return false;
  for (const chapitre of chapitreList.slice(0, targetIndex + 1)) {
    await loadChapitre(chapitre.id);
  }
  return true;
}

function scrollToChapter(id) {
  const target = getRequestedCardElement() || document.getElementById(id);
  target?.scrollIntoView({ block: getRequestedCardElement() ? 'center' : 'start' });
}

function stabilizeChapterScroll(id) {
  [250, 800, 1800].forEach(delay => {
    setTimeout(() => scrollToChapter(id), delay);
  });
  Promise.allSettled([...pendingTypesets]).then(() => scrollToChapter(id));
}

function initViewportLoader() {
  let ticking = false;

  const run = () => {
    ticking = false;
    const margin = 900;
    document.querySelectorAll('.chap--shell').forEach(chapter => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top < window.innerHeight + margin && rect.bottom > -margin) {
        loadChapitre(chapter.id);
      }
    });
  };

  const schedule = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(run);
  };

  checkVisibleChapitres = schedule;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  schedule();

  return () => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    if (checkVisibleChapitres === schedule) checkVisibleChapitres = null;
  };
}

async function loadAllChapitres() {
  await Promise.all(chapitreList.map(c => loadChapitre(c.id)));
}

// La recherche locale filtre le DOM : au premier usage, tout charger.
function hookSearchEagerLoad() {
  const input = document.getElementById('course-search');
  if (!input) return;
  const once = () => { loadAllChapitres(); input.removeEventListener('focus', once); };
  input.addEventListener('focus', once);
}

function hookCourseControlsEagerLoad() {
  document.querySelectorAll('.course-view[data-view], .filter[data-filter]').forEach(btn => {
    if (btn.dataset.eagerBound === '1') return;
    btn.dataset.eagerBound = '1';
    btn.addEventListener('click', () => {
      const wantsSeparatedContent =
        btn.dataset.view === 'exercises' ||
        btn.dataset.view === 'methods' ||
        btn.dataset.filter === 'ex' ||
        btn.dataset.filter === 'meth' ||
        btn.dataset.filter?.startsWith('level-');
      if (wantsSeparatedContent) loadAllChapitres();
    });
  });
}

async function applyInitialSearch(query) {
  const input = document.getElementById('course-search');
  if (!input) return;
  input.value = query;
  await loadAllChapitres();
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.focus();
}

function getRequestedCardElement() {
  const cardId = new URLSearchParams(location.search).get('carte');
  if (!cardId) return null;
  return document.getElementById(`carte-${cardId}`);
}

function focusRequestedCard(scope = document) {
  const card = getRequestedCardElement();
  if (!card || (scope && scope !== card && !scope.contains(card))) return;
  document.querySelector('.card.recommended-focus')?.classList.remove('recommended-focus');
  card.classList.add('recommended-focus');
  card.scrollIntoView({ block: 'center' });
  setTimeout(() => card.classList.remove('recommended-focus'), 2200);
}

/* ════════════ MODE MÉMORISATION ════════════
   Le contenu des cartes est masqué ; on révèle, puis on s'auto-évalue. */

function toggleFlashcards() {
  const content = document.getElementById('content-container');
  const btn = document.getElementById('flashcard-toggle');
  if (!content || !btn) return;

  if (!getToken()) { alert('Connectez-vous pour utiliser le mode mémorisation.'); return; }

  flashcardMode = !flashcardMode;
  btn.classList.toggle('active', flashcardMode);
  content.classList.toggle('flashcard-mode', flashcardMode);

  if (flashcardMode) {
    content.querySelectorAll('.chap:not(.chap--shell)').forEach(applyFlashcardModeTo);
  } else {
    content.querySelectorAll('.card').forEach(card => {
      card.classList.remove('fc-hidden', 'fc-revealed');
      card.querySelector('.fc-actions')?.remove();
    });
  }
}

function applyFlashcardModeTo(chapEl) {
  chapEl.querySelectorAll('.card').forEach(card => {
    if (!card.classList.contains('fc-revealed')) card.classList.add('fc-hidden');
  });
}

function initFlashcardListeners(container) {
  container.addEventListener('click', async (e) => {
    // Révéler une carte masquée
    const hidden = e.target.closest('.card.fc-hidden');
    if (hidden && !e.target.closest('button')) {
      hidden.classList.remove('fc-hidden');
      hidden.classList.add('fc-revealed');
      if (!hidden.querySelector('.fc-actions')) {
        const bar = document.createElement('div');
        bar.className = 'fc-actions';
        bar.innerHTML = `
          <button class="fc-know" title="Valider la maîtrise">Maîtrisé</button>
          <button class="fc-review" title="Marquer la carte à revoir">À revoir</button>`;
        hidden.appendChild(bar);
      }
      return;
    }

    // Auto-évaluation
    const know = e.target.closest('.fc-know');
    const review = e.target.closest('.fc-review');
    if (!know && !review) return;
    const card = e.target.closest('.card');
    const progBtn = card?.querySelector('.prog-btn');
    if (!progBtn) { card?.querySelector('.fc-actions')?.remove(); return; }

    const carteId = Number(progBtn.dataset.carte);
    const current = progBtn.dataset.status || 'todo';
    const next = know
      ? (current === 'todo' ? 'en_cours' : 'maitrise')
      : 'en_cours';
    try {
      await api.updateProgression(carteId, next);
      progBtn.dataset.status = next;
      progBtn.textContent = { todo: 'À faire', en_cours: 'En cours', maitrise: 'Maîtrisé' }[next];
      card.querySelector('.fc-actions')?.remove();
      card.classList.add(know ? 'fc-done-know' : 'fc-done-review');
      setTimeout(() => card.classList.remove('fc-done-know', 'fc-done-review'), 900);
    } catch { /* ignore */ }
  });
}

// ── Export Anki (charge tout d'abord) ────────────────────────────────────────
async function exportAnkiAll() {
  await loadAllChapitres();
  const chapitres = chapitreList.map(c => chapitreCache[c.id]).filter(Boolean);
  const rows = [];
  chapitres.forEach(chap => {
    chap.sections?.forEach(sec => {
      sec.cartes?.forEach(carte => {
        const head = [carte.label, carte.titre].filter(Boolean).join(' — ');
        const front = head || sec.titre;
        const back = (carte.contenu || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (front && back) {
          const tag = `${chap.titre.replace(/\s+/g, '_')}::${sec.titre.replace(/\s+/g, '_')}`;
          rows.push(`${csvEscape(front)}\t${csvEscape(back)}\t${tag}`);
        }
      });
    });
  });
  if (rows.length === 0) { alert('Aucune carte à exporter.'); return; }
  const blob = new Blob([rows.join('\n')], { type: 'text/tab-separated-values;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'admiscible-anki.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

function csvEscape(s) {
  return s.replace(/\t/g, ' ').replace(/\n/g, ' ');
}
