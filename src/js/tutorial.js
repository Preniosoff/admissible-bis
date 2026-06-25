/* ═══════════════════════════════════════
   Admiscible Tutorial — guided tour
   Uses a full-screen iframe so the user
   never leaves the current page.
═══════════════════════════════════════ */

const STEPS = [
  {
    page: 'index.html',
    title: 'Bienvenue',
    text: 'Admiscible commence par une question simple : que voulez-vous faire maintenant ? Le service vous guide ensuite vers une action utile.',
    target: null, position: 'center', illustration: 'A',
  },
  {
    page: 'index.html',
    title: 'Entrées guidées',
    text: 'Commencez par votre rôle : élève, parent, enseignant ou établissement. Chaque parcours limite les choix pour aller vers l’action utile.',
    target: '.pathway-grid', position: 'left',
  },
  {
    page: 'inscription.html',
    title: 'Créer un compte guidé',
    text: 'La création de compte avance par cartes : profil, niveau, classe ou filière, objectif, puis compte adapté.',
    navTarget: 'nav a[href^="inscription.html"], .home-btn[href^="inscription.html"], .pathway-card[href^="inscription.html"], a[href^="inscription.html"]',
    target: '.signup-card', waitFor: '.signup-card',
    position: 'center',
  },
  {
    page: 'eleves.html',
    title: 'Espace élève',
    text: 'L’espace élève met d’abord en avant la prochaine action : priorités du jour, cours, exercice ou erreur à reprendre.',
    navTarget: 'nav a[href^="eleves.html"], a[href^="eleves.html"], a[href^="inscription.html?profile=eleve"]',
    target: '.role-summary', waitFor: '.role-summary',
    position: 'bottom',
  },
  {
    page: 'recherche.html',
    title: 'Recherche filtrée',
    text: 'Les recherches fréquentes préremplissent une situation. Vous pouvez ensuite ajuster le niveau, la matière et le type.',
    navTarget: '#nav-search-btn, nav a[href^="recherche.html"], a[href^="recherche.html"]',
    target: '.search-presets', waitFor: '.search-presets',
    position: 'bottom',
  },
  {
    page: 'cours.html?filiere=mp&matiere=ph',
    title: 'Cours structurés',
    text: 'Les contenus restent accessibles directement : chapitres, fiches, méthodes rattachées et progression carte par carte.',
    navTarget: 'nav .nav-cours > a, nav a[href^="cours.html"], a[href^="cours.html"]',
    target: '.main', waitFor: '.card', position: 'left',
  },
  {
    page: 'parents.html',
    title: 'Espace parent',
    text: 'L’espace parent aide à accompagner sans surveiller : comprendre le cadre, demander une trace, lire un bilan volontaire.',
    navTarget: 'nav a[href^="parents.html"], a[href^="parents.html"], a[href^="inscription.html?profile=parent"]',
    target: '.role-summary', waitFor: '.role-summary',
    position: 'bottom',
  },
  {
    page: 'enseignants.html',
    title: 'Espace enseignant',
    text: 'L’espace enseignant relie un objectif pédagogique, une ressource et une trace demandée.',
    navTarget: 'nav a[href^="enseignants.html"], a[href^="enseignants.html"], a[href^="inscription.html?profile=enseignant"]',
    target: '.role-summary', waitFor: '.role-summary',
    position: 'bottom',
  },
  {
    page: 'etablissements.html',
    title: 'Espace établissement',
    text: 'L’espace établissement présente les étapes d’un déploiement limité, documenté et vérifiable.',
    navTarget: 'nav a[href^="etablissements.html"], a[href^="etablissements.html"], a[href^="inscription.html?profile=etablissement"]',
    target: '.role-summary', waitFor: '.role-summary',
    position: 'bottom',
  },
  {
    page: 'index.html',
    title: 'Contenus gratuits',
    text: 'Les contenus publics restent accessibles gratuitement. Les espaces de suivi personnel et parent sont proposés sur abonnement.',
    target: null, position: 'center', illustration: 'G',
    cta: { label: 'Créer un compte guidé', href: 'inscription.html' },
  },
];

// Respecte la préférence système « animations réduites »
const REDUCED = typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const KEY = 'tuto-active';
let S = {}; // { iframe, svg, hole, ring, dim, cursor, ripple, bubble, progress, dots, … }
let cur = { step: 0, x: 0, y: 0 };
let animFrame = null;

/* ════════════ Public ════════════ */

export function startTutorial() {
  if (document.getElementById('tuto-root')) return;
  cur.step = 0;
  cur.x = window.innerWidth / 2;
  cur.y = window.innerHeight * 0.35;
  mount();
}

export function resumeTutorialIfActive() {
  // Only run in the top frame, not inside our own iframe
  if (window !== window.top) return;
}

/* ════════════ Mount ════════════ */

function mount() {
  const root = el('div', { id: 'tuto-root' });
  root.innerHTML = `
    <div id="tuto-progress"><div id="tuto-bar"></div></div>
    <div id="tuto-label"></div>

    <iframe id="tuto-frame" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>

    <svg id="tuto-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="tuto-blur"><feGaussianBlur stdDeviation="6"/></filter>
        <mask id="tuto-mask">
          <rect id="tuto-bg" fill="white"/>
          <rect id="tuto-hole" rx="12" fill="black" filter="url(#tuto-blur)"/>
          <rect id="tuto-hole-sharp" rx="10" fill="black"/>
        </mask>
      </defs>
      <rect id="tuto-dim" mask="url(#tuto-mask)" fill="rgba(2,4,12,0.78)"/>
      <rect id="tuto-glow" rx="12" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    </svg>

    <div id="tuto-cursor">
      <svg viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 L4 22 L8.5 17 L12.5 26.5 L15.5 25.2 L11.5 16 L19 16 Z"
              fill="white" stroke="#1a1a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
    <div id="tuto-ripple"></div>

    <div id="tuto-bubble">
      <button id="tuto-x">✕</button>
      <div id="tuto-illus"></div>
      <h3 id="tuto-title"></h3>
      <p id="tuto-text"></p>
      <button id="tuto-cta" style="display:none"></button>
      <div id="tuto-footer">
        <div id="tuto-dots"></div>
        <div id="tuto-btns">
          <button id="tuto-prev">←</button>
          <button id="tuto-next">Suivant →</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  S = {
    root, bar: root.querySelector('#tuto-bar'),
    label: root.querySelector('#tuto-label'),
    frame: root.querySelector('#tuto-frame'),
    svg: root.querySelector('#tuto-svg'),
    bg: root.querySelector('#tuto-bg'),
    hole: root.querySelector('#tuto-hole'),
    holeSharp: root.querySelector('#tuto-hole-sharp'),
    dim: root.querySelector('#tuto-dim'),
    glow: root.querySelector('#tuto-glow'),
    cursor: root.querySelector('#tuto-cursor'),
    ripple: root.querySelector('#tuto-ripple'),
    bubble: root.querySelector('#tuto-bubble'),
    illus: root.querySelector('#tuto-illus'),
    title: root.querySelector('#tuto-title'),
    text: root.querySelector('#tuto-text'),
    dots: root.querySelector('#tuto-dots'),
    prev: root.querySelector('#tuto-prev'),
    next: root.querySelector('#tuto-next'),
    cta: root.querySelector('#tuto-cta'),
    close: root.querySelector('#tuto-x'),
  };

  STEPS.forEach((_, i) => {
    const d = el('button', { className: 'tuto-dot' });
    d.addEventListener('click', () => goTo(i));
    S.dots.appendChild(d);
  });

  S.close.addEventListener('click', destroy);
  S.prev.addEventListener('click', () => nav(-1));
  S.next.addEventListener('click', () => nav(1));
  S.cta.addEventListener('click', () => {
    const href = S.cta.dataset.href;
    destroy();
    if (href) window.location.assign(href);
  });
  root.addEventListener('keydown', e => {
    if (e.key === 'Escape') destroy();
    if (e.key === 'ArrowRight' || e.key === 'Enter') nav(1);
    if (e.key === 'ArrowLeft') nav(-1);
  });
  root.setAttribute('tabindex', '-1'); root.focus();
  window.addEventListener('resize', onResize);

  // Init cursor position
  S.cursor.style.transform = `translate(${cur.x}px,${cur.y}px)`;
  setHole(0, 0, 0, 0);
  syncSVGSize();

  // Fade root in then start
  requestAnimationFrame(() => {
    root.classList.add('visible');
    setTimeout(() => goTo(0), 300);
  });
}

/* ════════════ Step ════════════ */

async function goTo(idx) {
  if (!S.root) return;
  cur.step = idx;
  const step = STEPS[idx];
  const total = STEPS.length;

  // UI state
  S.bar.style.width = `${((idx + 1) / total) * 100}%`;
  S.label.textContent = `${idx + 1} / ${total}`;
  S.prev.style.opacity = idx === 0 ? '0.25' : '1';
  S.prev.style.pointerEvents = idx === 0 ? 'none' : '';
  S.next.textContent = idx === total - 1 ? '✓ Terminer' : 'Suivant →';
  S.root.querySelectorAll('.tuto-dot').forEach((d, i) => d.classList.toggle('active', i === idx));

  // Hide bubble
  S.bubble.classList.remove('in');

  // Load page in iframe if needed. Before leaving the current page,
  // show the route by moving the cursor to the relevant nav item or card.
  const targetPage = step.page || 'index.html';
  if (frameNeedsLoad(targetPage)) {
    await previewNavigation(step, targetPage);
    S.frame.classList.remove('loaded');
    await loadFrame(targetPage);
  }

  // Wait for target element
  let target = null;
  if (step.target) {
    target = step.waitFor
      ? await waitFor(step.waitFor, S.frame)
      : queryFrame(step.target);
  }

  // Mesure de la cible. Les éléments cachés (nav repliée dans le burger mobile,
  // sidebar masquée sur petit écran…) ou hors-champ déclenchent un repli centré
  // plutôt qu'un projecteur dans le vide. On défile d'abord vers la cible.
  let coords = null;
  if (target && isTargetVisible(target)) {
    try { target.scrollIntoView({ block: 'center', inline: 'nearest' }); } catch {}
    coords = frameRect(target);
  }

  // Move cursor
  if (coords) {
    const cx = coords.left + coords.width / 2;
    const cy = coords.top + coords.height / 2;
    await moveCursor(cx, cy);
    await clickAnim(cx, cy);
    transitionSpotlight(coords);
    positionBubble(step, coords);
  } else {
    hideCursor();
    clearSpotlight();
    centerBubble();
  }

  // Fill bubble content
  S.illus.textContent = step.illustration || '';
  S.illus.style.display = step.illustration ? '' : 'none';
  S.title.textContent = step.title;
  animateWords(S.text, step.text);

  // CTA optionnel (ex. dernière étape → activation)
  if (step.cta) {
    S.cta.textContent = step.cta.label;
    S.cta.dataset.href = step.cta.href || '';
    S.cta.style.display = 'block';
  } else {
    S.cta.style.display = 'none';
  }

  setTimeout(() => S.bubble.classList.add('in'), 80);
}

/* ════════════ iframe ════════════ */

function loadFrame(url) {
  return new Promise(resolve => {
    const fullUrl = new URL(url, window.location.href).href;
    if (S.frame.src === fullUrl) { S.frame.classList.add('loaded'); resolve(); return; }

    S.frame.onload = () => {
      // Inject minimal style to hide the tutorial button and prevent interaction
      try {
        const doc = S.frame.contentDocument;
        const style = doc.createElement('style');
        style.textContent = `
          #tuto-btn { display: none !important; }
        `;
        doc.head.appendChild(style);
      } catch {}
      S.frame.classList.add('loaded');
      resolve();
    };
    S.frame.src = fullUrl;
  });
}

function queryFrame(selector) {
  try {
    const doc = S.frame.contentDocument;
    for (const s of selector.split(',').map(s => s.trim())) {
      const found = doc.querySelector(s);
      if (found) return found;
    }
  } catch {}
  return null;
}

function queryVisibleFrame(selector) {
  try {
    const doc = S.frame.contentDocument;
    for (const s of selector.split(',').map(s => s.trim()).filter(Boolean)) {
      const found = [...doc.querySelectorAll(s)].find(isTargetVisible);
      if (found) return found;
    }
  } catch {}
  return null;
}

async function previewNavigation(step, targetPage) {
  if (!S.frame?.src || REDUCED) return;

  const routeTarget = queryVisibleFrame(step.navTarget || navSelectorFor(targetPage));
  if (!routeTarget) return;

  try { routeTarget.scrollIntoView({ block: 'center', inline: 'center' }); } catch {}
  await sleep(120);

  const coords = frameRect(routeTarget);
  const cx = coords.left + coords.width / 2;
  const cy = coords.top + coords.height / 2;
  transitionSpotlight(coords);
  await moveCursor(cx, cy);
  await clickAnim(cx, cy);
  await sleep(120);
}

function navSelectorFor(page) {
  const file = (page || 'index.html').split('?')[0];
  return [
    `nav a[href="${file}"]`,
    `nav a[href^="${file}?"]`,
    `a[href="${file}"]`,
    `a[href^="${file}?"]`,
  ].join(',');
}

function frameNeedsLoad(url) {
  if (!S.frame?.src) return true;
  try {
    return S.frame.src !== new URL(url, window.location.href).href;
  } catch {
    return true;
  }
}

function waitFor(selector, frameEl, timeout = 5000) {
  return new Promise(resolve => {
    const check = () => {
      const found = queryFrame(selector);
      if (found) { resolve(found); return; }
      try {
        const doc = frameEl.contentDocument;
        const obs = new MutationObserver(() => {
          const f = queryFrame(selector);
          if (f) { obs.disconnect(); resolve(f); }
        });
        obs.observe(doc.body, { childList: true, subtree: true });
        setTimeout(() => { obs.disconnect(); resolve(queryFrame(selector)); }, timeout);
      } catch { setTimeout(() => resolve(queryFrame(selector)), 500); }
    };
    // Small delay to let async content render
    setTimeout(check, 300);
  });
}

function isTargetVisible(el) {
  try {
    const win = S.frame.contentWindow;
    const cs = win.getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return false;
    return true;
  } catch { return false; }
}

function frameRect(el) {
  const r = el.getBoundingClientRect();
  const fr = S.frame.getBoundingClientRect();
  return {
    left: fr.left + r.left,
    top: fr.top + r.top,
    width: r.width,
    height: r.height,
    right: fr.left + r.right,
    bottom: fr.top + r.bottom,
  };
}

/* ════════════ Cursor ════════════ */

function moveCursor(tx, ty) {
  return new Promise(resolve => {
    S.cursor.style.display = '';
    if (REDUCED) {
      S.cursor.style.transition = 'none';
      S.cursor.style.transform = `translate(${tx}px,${ty}px)`;
      cur.x = tx; cur.y = ty;
      resolve(); return;
    }
    S.cursor.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)';
    S.cursor.style.transform = `translate(${tx}px,${ty}px)`;
    cur.x = tx; cur.y = ty;
    setTimeout(resolve, 950);
  });
}

function clickAnim(x, y) {
  return new Promise(resolve => {
    if (REDUCED) { resolve(); return; }
    const svg = S.cursor.querySelector('svg');
    svg.style.transition = 'transform 0.1s ease';
    svg.style.transform = 'scale(0.72)';

    Object.assign(S.ripple.style, {
      display: '', left: x + 'px', top: y + 'px',
      transform: 'translate(-50%,-50%) scale(0)', opacity: '1', transition: 'none',
    });
    requestAnimationFrame(() => {
      Object.assign(S.ripple.style, {
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
        transform: 'translate(-50%,-50%) scale(1)', opacity: '0',
      });
    });
    setTimeout(() => { svg.style.transform = 'scale(1)'; resolve(); }, 320);
  });
}

function hideCursor() { S.cursor.style.display = 'none'; }

/* ════════════ Spotlight ════════════ */

function transitionSpotlight(r) {
  const pad = 14;
  setHole(r.left - pad, r.top - pad, r.width + pad * 2, r.height + pad * 2);
}

function setHole(x, y, w, h) {
  [S.hole, S.holeSharp, S.glow].forEach(el => {
    el.setAttribute('x', x); el.setAttribute('y', y);
    el.setAttribute('width', w); el.setAttribute('height', h);
  });
}

function clearSpotlight() { setHole(0, 0, 0, 0); }

function syncSVGSize() {
  const W = window.innerWidth, H = window.innerHeight;
  [S.bg, S.dim].forEach(el => { el.setAttribute('width', W); el.setAttribute('height', H); });
  S.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
}

/* ════════════ Bubble ════════════ */

function positionBubble(step, r) {
  const b = S.bubble;
  b.style.cssText = 'position:fixed;z-index:9015;';
  b.removeAttribute('data-pos');

  const PAD = 22;
  const W = window.innerWidth, H = window.innerHeight;

  requestAnimationFrame(() => {
    const bw = b.offsetWidth, bh = b.offsetHeight;
    let top, left, pos = step.position;

    const fits = {
      bottom: r.bottom + bh + PAD < H,
      top:    r.top - bh - PAD > 0,
      right:  r.right + bw + PAD < W,
      left:   r.left - bw - PAD > 0,
    };

    if (!fits[pos]) {
      pos = fits.bottom ? 'bottom' : fits.top ? 'top' : fits.right ? 'right' : 'left';
    }

    if (pos === 'bottom') { top = r.bottom + PAD; left = r.left + r.width / 2 - bw / 2; }
    else if (pos === 'top') { top = r.top - bh - PAD; left = r.left + r.width / 2 - bw / 2; }
    else if (pos === 'right') { top = r.top + r.height / 2 - bh / 2; left = r.right + PAD; }
    else { top = r.top + r.height / 2 - bh / 2; left = r.left - bw - PAD; }

    left = Math.max(PAD, Math.min(left, W - bw - PAD));
    top  = Math.max(PAD, Math.min(top, H - bh - PAD));
    b.style.top = top + 'px'; b.style.left = left + 'px';
    b.setAttribute('data-pos', pos);
  });
}

function centerBubble() {
  Object.assign(S.bubble.style, { top: '50%', left: '50%' });
  S.bubble.setAttribute('data-pos', 'center');
}

/* ════════════ Text animation ════════════ */

function animateWords(container, text) {
  container.innerHTML = '';
  if (REDUCED) { container.textContent = text; return; }
  text.split(' ').forEach((word, i) => {
    const span = el('span', { className: 'tuto-word' });
    span.textContent = word;
    span.style.animationDelay = `${i * 38}ms`;
    container.appendChild(span);
  });
}

/* ════════════ Navigation ════════════ */

function nav(dir) {
  const next = cur.step + dir;
  if (next >= STEPS.length) { destroy(); return; }
  if (next < 0) return;
  goTo(next);
}

function destroy() {
  window.removeEventListener('resize', onResize);
  if (animFrame) cancelAnimationFrame(animFrame);
  S.root?.classList.remove('visible');
  setTimeout(() => S.root?.remove(), 400);
  S = {};
}

/* ════════════ Helpers ════════════ */

function onResize() {
  syncSVGSize();
  const step = STEPS[cur.step];
  const target = step?.target ? queryFrame(step.target) : null;
  if (target) transitionSpotlight(frameRect(target));
}

function el(tag, props = {}) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  return e;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
