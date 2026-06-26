import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { getOne, runInsert } from '../db/connection.js';
import { saveDb } from '../db/connection.js';
import { authenticateToken } from '../middleware/auth.js';

function getParisDate() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' });
}

// ── Nodemailer transporter (lazy init) ──
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

async function sendResetEmail(to, code) {
  const mailer = getTransporter();
  if (!mailer) return false; // pas de config SMTP → mode dev
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  await mailer.sendMail({
    from: `Admiscible <${from}>`,
    to,
    subject: 'Réinitialisation du mot de passe — Admiscible',
    text: `Code de réinitialisation : ${code}\n\nIl est valable 15 minutes.\n\nSi vous n'avez pas demandé cette réinitialisation, ignorez ce message.`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <div style="background:#0a0a0f;padding:24px 32px;border-radius:12px">
          <div style="font-size:28px;font-weight:800;color:#0063cb;letter-spacing:-0.03em;margin-bottom:16px">A Admiscible</div>
          <h2 style="font-size:18px;font-weight:700;color:#fff;margin:0 0 12px">Réinitialisation de mot de passe</h2>
          <p style="color:#999;font-size:14px;margin:0 0 24px">Voici le code à usage unique, valable <strong style="color:#ddd">15 minutes</strong> :</p>
          <div style="background:#1a1a2e;border:1px solid #2a2a3e;border-radius:8px;padding:20px;text-align:center;font-size:36px;font-weight:800;letter-spacing:0.12em;color:#0063cb;margin-bottom:24px">${code}</div>
          <p style="color:#666;font-size:12px;margin:0">Si vous n'avez pas demandé cette réinitialisation, ignorez ce message. Le mot de passe ne sera pas modifié.</p>
        </div>
      </div>`,
  });
  return true;
}

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'prepamp-dev-secret';

// ── Rate limiting manuel (sans dépendance externe) ──
const loginAttempts = new Map(); // ip → { count, resetAt }
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_MAX    = 10; // tentatives max par fenêtre

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count++;
  return true;
}

function getClientIp(req) {
  return (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
}

// Nettoyage périodique des entrées expirées
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of loginAttempts.entries()) {
    if (now > entry.resetAt) loginAttempts.delete(ip);
  }
}, 5 * 60 * 1000);

router.post('/register', (req, res) => {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Trop de tentatives. Réessayez dans 15 minutes.' });
  }
  const { username, password, nom, filiere_id, email, adult_confirmed } = req.body;
  const allowedRoles = new Set(['eleve', 'parent', 'enseignant', 'prof_particulier', 'etablissement']);
  const role = allowedRoles.has(req.body.role) ? req.body.role : 'eleve';
  if (!username || !password || !nom) {
    return res.status(400).json({ error: 'Champs requis: username, password, nom' });
  }
  // Compte créé par un adulte (l'élève peut être mineur → c'est un parent/représentant légal)
  if (!adult_confirmed) {
    return res.status(400).json({ error: 'La majorité du créateur du compte, ou la qualité de représentant légal, doit être confirmée pour accepter les CGU.' });
  }

  const existing = getOne(req.db, 'SELECT id FROM users WHERE username = ?', [username]);
  if (existing) return res.status(409).json({ error: 'Nom d\'utilisateur déjà pris' });

  const now = new Date().toISOString();
  const hash = bcrypt.hashSync(password, 10);
  const id = runInsert(req.db,
    'INSERT INTO users (username, password_hash, nom, email, role, filiere_id, adult_confirmed, cgu_accepted_at) VALUES (?, ?, ?, ?, ?, ?, 1, ?)',
    [username, hash, nom, email || null, role, filiere_id || null, now]
  );
  saveDb();

  const token = jwt.sign({ id, username, role }, JWT_SECRET, { expiresIn: '7d' });
  res.status(201).json({ token, user: { id, username, nom, role, plan: 'free', filiere_id } });
});

router.post('/login', (req, res) => {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Trop de tentatives. Réessayez dans 15 minutes.' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Champs requis: username, password' });
  }

  const user = getOne(req.db, 'SELECT * FROM users WHERE username = ?', [username]);
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Identifiants incorrects' });
  }

  updateStreak(req.db, user.id);

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  const streak = getOne(req.db, 'SELECT current, longest FROM streaks WHERE user_id = ?', [user.id]);
  res.json({ token, user: { id: user.id, username: user.username, nom: user.nom, role: user.role, plan: user.plan || 'free', filiere_id: user.filiere_id }, streak: streak || { current: 1, longest: 1 } });
});

// ── Mot de passe oublié ──
// Stockage en mémoire des tokens de reset (suffisant sans email en dev)
const resetTokens = new Map(); // token → { userId, expires }

router.post('/forgot', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Nom d\'utilisateur requis' });

  const user = getOne(req.db, 'SELECT id, username FROM users WHERE username = ?', [username]);
  // On répond toujours OK pour ne pas révéler si le compte existe
  if (!user) return res.json({ ok: true, hint: 'Si ce compte existe, un code a été généré.' });

  // Génère un code à 6 chiffres valable 15 min
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = Date.now() + 15 * 60 * 1000;
  resetTokens.set(code, { userId: user.id, expires });

  const isDev = process.env.NODE_ENV !== 'production';

  // Tentative d'envoi email (si SMTP configuré)
  let emailSent = false;
  if (user.email) {
    try { emailSent = await sendResetEmail(user.email, code); } catch (e) { console.error('[reset-email]', e.message); }
  }

  res.json({
    ok: true,
    hint: 'Si ce compte existe, un code a été envoyé.',
    email_sent: emailSent,
    // En dev sans email configuré, on retourne le code directement
    ...(!emailSent && isDev && { dev_code: code }),
  });
});

router.post('/reset', (req, res) => {
  const { code, password } = req.body;
  if (!code || !password) return res.status(400).json({ error: 'Code et mot de passe requis' });
  if (password.length < 6) return res.status(400).json({ error: 'Mot de passe trop court (6 min)' });

  const entry = resetTokens.get(code);
  if (!entry || Date.now() > entry.expires) {
    return res.status(400).json({ error: 'Code invalide ou expiré' });
  }

  const hash = bcrypt.hashSync(password, 10);
  req.db.run('UPDATE users SET password_hash = ? WHERE id = ?', [hash, entry.userId]);
  saveDb();
  resetTokens.delete(code);
  res.json({ ok: true });
});

// Nettoyage des tokens expirés
setInterval(() => {
  const now = Date.now();
  for (const [code, entry] of resetTokens.entries()) {
    if (now > entry.expires) resetTokens.delete(code);
  }
}, 10 * 60 * 1000);

// ── Mise à jour du profil ──
router.put('/profile', authenticateToken, (req, res) => {
  const { nom, filiere_id, email } = req.body;
  if (!nom || !nom.trim()) return res.status(400).json({ error: 'Le nom est requis' });

  try {
    req.db.run('UPDATE users SET nom = ?, filiere_id = ?, email = ? WHERE id = ?',
      [nom.trim(), filiere_id || null, email?.trim() || null, req.user.id]);
    saveDb();
    const user = getOne(req.db, 'SELECT id, username, nom, email, role, plan, filiere_id FROM users WHERE id = ?', [req.user.id]);
    res.json({ user: { id: user.id, username: user.username, nom: user.nom, email: user.email, role: user.role, plan: user.plan || 'free', filiere_id: user.filiere_id } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Changement de mot de passe ──
router.put('/password', authenticateToken, (req, res) => {
  const { current, nouveau } = req.body;
  if (!current || !nouveau) return res.status(400).json({ error: 'Champs requis' });
  if (nouveau.length < 6) return res.status(400).json({ error: 'Mot de passe trop court (6 caractères min)' });

  try {
    const user = getOne(req.db, 'SELECT * FROM users WHERE id = ?', [req.user.id]);
    if (!user || !bcrypt.compareSync(current, user.password_hash)) {
      return res.status(401).json({ error: 'Mot de passe actuel incorrect' });
    }
    const hash = bcrypt.hashSync(nouveau, 10);
    req.db.run('UPDATE users SET password_hash = ? WHERE id = ?', [hash, req.user.id]);
    saveDb();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/me', authenticateToken, (req, res) => {
  const user = getOne(req.db, 'SELECT id, username, nom, email, role, plan, filiere_id, plan_status, plan_current_period_end FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
  updateStreak(req.db, user.id);
  const streak = getOne(req.db, 'SELECT current, longest FROM streaks WHERE user_id = ?', [user.id]);
  res.json({ ...user, streak: streak || { current: 0, longest: 0 } });
});

function updateStreak(db, userId) {
  const today = getParisDate();
  const row = getOne(db, 'SELECT * FROM streaks WHERE user_id = ?', [userId]);

  if (!row) {
    db.run('INSERT INTO streaks (user_id, current, longest, last_date) VALUES (?, 1, 1, ?)', [userId, today]);
    saveDb();
    return;
  }

  if (row.last_date === today) return;

  // Calcul "hier" en heure de Paris
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' });

  let newCurrent = row.last_date === yesterday ? row.current + 1 : 1;
  let newLongest = Math.max(row.longest, newCurrent);

  db.run('UPDATE streaks SET current = ?, longest = ?, last_date = ? WHERE user_id = ?',
    [newCurrent, newLongest, today, userId]);

  saveDb();
}

export default router;
