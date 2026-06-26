import { api } from './api.js';
import { getUser } from './auth.js';
import { toast } from './toast.js';

const PLAN_PROFILE = {
  eleve_plus: 'eleve',
  famille: 'parent',
  enseignant_pro: 'enseignant',
  prof_particulier_pro: 'prof_particulier',
};

export function initBilling() {
  document.querySelectorAll('[data-checkout-plan]').forEach(link => {
    link.classList.add('js-checkout');
    link.addEventListener('click', handleCheckoutClick);
  });

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('checkout');
  if (params.get('checkout') === 'cancelled') {
    toast('Paiement annulé. Vous pouvez reprendre quand vous voulez.', 'info', 4500);
    return;
  }

  if (requested && getUser()) {
    history.replaceState({}, '', window.location.pathname + window.location.hash);
    startCheckout(requested);
  }
}

async function handleCheckoutClick(event) {
  const target = event.currentTarget;
  const plan = target.dataset.checkoutPlan;
  if (!plan) return;
  event.preventDefault();
  await startCheckout(plan, target);
}

export async function startCheckout(plan, button = null) {
  const user = getUser();
  if (!user) {
    localStorage.setItem('admiscible-pending-plan', plan);
    const profile = PLAN_PROFILE[plan] || 'eleve';
    window.location.href = `inscription.html?profile=${encodeURIComponent(profile)}&plan=${encodeURIComponent(plan)}`;
    return;
  }

  const originalText = button?.textContent;
  if (button) {
    button.setAttribute('aria-busy', 'true');
    button.textContent = 'Ouverture du paiement...';
  }

  try {
    const session = await api.createCheckoutSession(plan);
    if (!session?.url) throw new Error('Session de paiement introuvable.');
    window.location.href = session.url;
  } catch (error) {
    toast(error.message || 'Impossible d’ouvrir le paiement.', 'error', 6500);
    if (button) {
      button.removeAttribute('aria-busy');
      button.textContent = originalText;
    }
  }
}

export async function initCheckoutSuccess() {
  const params = new URLSearchParams(window.location.search);
  const status = document.getElementById('checkout-status');
  const action = document.getElementById('checkout-action');
  if (!status) return;

  if (params.get('demo')) {
    status.textContent = 'Mode démonstration : le tunnel fonctionne. Branchez Stripe pour activer les paiements réels.';
    action?.setAttribute('href', destinationForPlan(params.get('plan')));
    return;
  }

  const sessionId = params.get('session_id');
  if (!sessionId) {
    status.textContent = 'Session de paiement introuvable.';
    return;
  }

  try {
    status.textContent = 'Validation du paiement...';
    const result = await api.verifyCheckoutSession(sessionId);
    if (result?.user) localStorage.setItem('user', JSON.stringify(result.user));
    status.textContent = 'Abonnement activé. Votre espace est prêt.';
    action?.setAttribute('href', destinationForPlan(result?.user?.plan));
  } catch (error) {
    status.textContent = error.message || 'Impossible de valider la session.';
  }
}

function destinationForPlan(plan) {
  if (plan === 'family' || plan === 'famille') return 'famille.html';
  if (plan === 'tutor' || plan === 'prof_particulier_pro') return 'espace-prof-particulier.html';
  if (plan === 'pro' || plan === 'enseignant_pro') return 'espace-enseignant.html';
  return 'dashboard.html';
}
