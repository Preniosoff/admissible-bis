import { Router } from 'express';
import Stripe from 'stripe';
import { authenticateToken } from '../middleware/auth.js';
import { getOne } from '../db/connection.js';
import { saveDb } from '../db/connection.js';

export const BILLING_PLANS = {
  eleve_plus: {
    plan: 'personal',
    label: 'Élève Plus',
    env: 'STRIPE_PRICE_ELEVE_PLUS',
    amount: 799,
    interval: 'month',
  },
  famille: {
    plan: 'family',
    label: 'Famille',
    env: 'STRIPE_PRICE_FAMILLE',
    amount: 1199,
    interval: 'month',
  },
  enseignant_pro: {
    plan: 'pro',
    label: 'Enseignant Pro',
    env: 'STRIPE_PRICE_ENSEIGNANT_PRO',
    amount: 1499,
    interval: 'month',
  },
  prof_particulier_pro: {
    plan: 'tutor',
    label: 'Prof particulier Pro',
    env: 'STRIPE_PRICE_PROF_PARTICULIER_PRO',
    amount: 1999,
    interval: 'month',
  },
};

const router = Router();
let stripeClient = null;

function stripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  if (!stripeClient) stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripeClient;
}

function publicBase(req) {
  return (process.env.PUBLIC_SITE_URL || process.env.CLIENT_URL || `${req.protocol}://${req.get('host')}`).split(',')[0].trim();
}

function lineItemFor(planId, config) {
  const price = process.env[config.env];
  if (price) return { price, quantity: 1 };
  return {
    quantity: 1,
    price_data: {
      currency: 'eur',
      unit_amount: config.amount,
      recurring: { interval: config.interval },
      product_data: { name: `Admiscible — ${config.label}` },
    },
  };
}

function upsertSubscription(db, { userId, plan, status, customerId, subscriptionId, currentPeriodEnd }) {
  db.run(
    `UPDATE users
     SET plan = ?,
         stripe_customer_id = COALESCE(?, stripe_customer_id),
         stripe_subscription_id = COALESCE(?, stripe_subscription_id),
         plan_status = ?,
         plan_current_period_end = ?
     WHERE id = ?`,
    [plan, customerId || null, subscriptionId || null, status || 'active', currentPeriodEnd || null, userId],
  );
  saveDb();
}

router.get('/plans', (_req, res) => {
  res.json(Object.entries(BILLING_PLANS).map(([id, plan]) => ({
    id,
    label: plan.label,
    plan: plan.plan,
    amount: plan.amount,
    interval: plan.interval,
  })));
});

router.post('/checkout', authenticateToken, async (req, res) => {
  const planId = String(req.body?.plan || '');
  const config = BILLING_PLANS[planId];
  if (!config) return res.status(400).json({ error: 'Offre inconnue.' });

  const client = stripe();
  if (!client) {
    return res.status(503).json({
      error: 'Paiement non configuré. Ajoutez STRIPE_SECRET_KEY et les variables Stripe sur le serveur.',
    });
  }

  const user = getOne(req.db, 'SELECT id, username, email, nom, stripe_customer_id FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ error: 'Utilisateur introuvable.' });

  const base = publicBase(req);
  const session = await client.checkout.sessions.create({
    mode: 'subscription',
    customer: user.stripe_customer_id || undefined,
    customer_email: user.stripe_customer_id ? undefined : (user.email || undefined),
    client_reference_id: String(user.id),
    line_items: [lineItemFor(planId, config)],
    success_url: `${base}/abonnement-succes.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${base}/abonnement.html?checkout=cancelled#${encodeURIComponent(planId)}`,
    metadata: {
      user_id: String(user.id),
      plan_id: planId,
      plan: config.plan,
    },
    subscription_data: {
      metadata: {
        user_id: String(user.id),
        plan_id: planId,
        plan: config.plan,
      },
    },
    allow_promotion_codes: true,
  });

  res.json({ url: session.url });
});

router.get('/checkout-session/:id', authenticateToken, async (req, res) => {
  const client = stripe();
  if (!client) return res.status(503).json({ error: 'Paiement non configuré.' });

  const session = await client.checkout.sessions.retrieve(req.params.id, { expand: ['subscription'] });
  if (String(session.client_reference_id) !== String(req.user.id)) {
    return res.status(403).json({ error: 'Session non autorisée.' });
  }

  const planId = session.metadata?.plan_id;
  const config = BILLING_PLANS[planId];
  if (session.payment_status === 'paid' && config) {
    const subscription = session.subscription;
    upsertSubscription(req.db, {
      userId: req.user.id,
      plan: config.plan,
      status: subscription?.status || 'active',
      customerId: typeof session.customer === 'string' ? session.customer : session.customer?.id,
      subscriptionId: typeof subscription === 'string' ? subscription : subscription?.id,
      currentPeriodEnd: subscription?.current_period_end ? new Date(subscription.current_period_end * 1000).toISOString() : null,
    });
  }

  const user = getOne(req.db, 'SELECT id, username, nom, email, role, plan, filiere_id, plan_status, plan_current_period_end FROM users WHERE id = ?', [req.user.id]);
  res.json({ ok: true, status: session.payment_status, user });
});

router.post('/webhook', async (req, res) => {
  const client = stripe();
  if (!client || !process.env.STRIPE_WEBHOOK_SECRET) return res.status(503).send('Stripe non configuré');

  let event;
  try {
    event = client.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook invalide: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = Number(session.client_reference_id || session.metadata?.user_id);
    const config = BILLING_PLANS[session.metadata?.plan_id];
    if (userId && config) {
      upsertSubscription(req.db, {
        userId,
        plan: config.plan,
        status: 'active',
        customerId: typeof session.customer === 'string' ? session.customer : session.customer?.id,
        subscriptionId: typeof session.subscription === 'string' ? session.subscription : session.subscription?.id,
      });
    }
  }

  if (event.type === 'customer.subscription.deleted' || event.type === 'customer.subscription.paused') {
    const subscription = event.data.object;
    const userId = Number(subscription.metadata?.user_id);
    if (userId) upsertSubscription(req.db, { userId, plan: 'free', status: subscription.status || 'canceled' });
  }

  res.json({ received: true });
});

export default router;
