const HOVER_DELAY = 1300;
const POINTER_FINE = '(hover: hover) and (pointer: fine)';

let activeCard = null;
let activePlaceholder = null;
let activeBackdrop = null;
let activeCloseButton = null;
let openTimer = null;

export function initReadingFocus() {
  if (document.documentElement.dataset.readingFocusBound === '1') return;
  document.documentElement.dataset.readingFocusBound = '1';

  document.addEventListener('pointerenter', onEnter, true);
  document.addEventListener('pointerleave', onLeave, true);
  document.addEventListener('keydown', onKeydown);
}

function onEnter(event) {
  if (!window.matchMedia(POINTER_FINE).matches) return;
  const card = event.target.closest?.('.card');
  if (card?.contains(event.relatedTarget)) return;
  if (!canFocusCard(card)) return;

  clearOpenTimer();
  openTimer = window.setTimeout(() => openCard(card), HOVER_DELAY);
}

function onLeave(event) {
  const card = event.target.closest?.('.card');
  if (!card) return;
  if (card.contains(event.relatedTarget)) return;

  if (card === activeCard) {
    closeCard();
    return;
  }

  clearOpenTimer();
}

function onKeydown(event) {
  if (event.key === 'Escape' && activeCard) closeCard();
}

function canFocusCard(card) {
  if (!card) return false;
  if (activeCard || card.classList.contains('fc-hidden')) return false;
  if (card.closest('.command-palette, nav, footer, .modal-content')) return false;
  return card.offsetWidth > 240 && card.offsetHeight > 120;
}

function openCard(card) {
  if (!canFocusCard(card)) return;

  activeCard = card;
  activePlaceholder = document.createElement('div');
  activePlaceholder.className = 'reading-focus-placeholder';
  activePlaceholder.style.height = `${card.getBoundingClientRect().height}px`;
  card.after(activePlaceholder);

  activeBackdrop = document.createElement('button');
  activeBackdrop.type = 'button';
  activeBackdrop.className = 'reading-focus-backdrop';
  activeBackdrop.setAttribute('aria-label', 'Fermer le mode lecture');
  activeBackdrop.addEventListener('click', closeCard, { once: true });
  document.body.append(activeBackdrop);

  activeCloseButton = document.createElement('button');
  activeCloseButton.type = 'button';
  activeCloseButton.className = 'reading-focus-close';
  activeCloseButton.setAttribute('aria-label', 'Fermer le mode lecture');
  activeCloseButton.innerHTML = '<span aria-hidden="true">×</span>';
  activeCloseButton.addEventListener('click', closeCard);
  document.body.append(activeCloseButton);

  document.body.classList.add('reading-focus-active');
  card.classList.add('reading-expanded');
  card.setAttribute('data-reading-expanded', 'true');
  card.setAttribute('tabindex', '-1');
  card.focus({ preventScroll: true });

  requestAnimationFrame(() => {
    activeBackdrop?.classList.add('is-visible');
    card.classList.add('reading-expanded-open');
  });
}

function closeCard() {
  if (!activeCard) return;

  const card = activeCard;
  activeCard = null;
  clearOpenTimer();

  card.classList.remove('reading-expanded-open', 'reading-expanded');
  card.removeAttribute('data-reading-expanded');
  if (card.getAttribute('tabindex') === '-1') card.removeAttribute('tabindex');

  document.body.classList.remove('reading-focus-active');
  activeBackdrop?.remove();
  activeCloseButton?.remove();
  activePlaceholder?.remove();
  activeBackdrop = null;
  activeCloseButton = null;
  activePlaceholder = null;
}

function clearOpenTimer() {
  if (!openTimer) return;
  window.clearTimeout(openTimer);
  openTimer = null;
}
