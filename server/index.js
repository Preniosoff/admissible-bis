import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, readFileSync } from 'fs';
import { getDb, saveDb, closeDb } from './db/connection.js';
import { seed3emeIfNeeded } from './db/seed-3eme-init.js';
import { seedSiInfoIfNeeded } from './db/seed-si-info-init.js';
import { seedCollegeIfNeeded } from './db/seed-college-init.js';
import { seedLyceeIfNeeded } from './db/seed-lycee-init.js';
import { loadContentFiles } from './db/seed-content-loader.js';
import { seedMethodeLinksIfNeeded } from './db/seed-methode-links.js';
import { seedMethodesQuality } from './db/seed-methodes-quality.js';

import filieresRouter from './routes/filieres.js';
import coursRouter from './routes/cours.js';
import authRouter from './routes/auth.js';
import searchRouter from './routes/search.js';
import progressionRouter from './routes/progression.js';
import ecolesRouter from './routes/ecoles.js';
import methodesRouter from './routes/methodes.js';
import dashboardRouter from './routes/dashboard.js';
import schedulesRouter from './routes/schedules.js';
import todosRouter from './routes/todos.js';
import focusRouter from './routes/focus.js';
import gradesRouter from './routes/grades.js';
import erreursRouter from './routes/erreurs.js';
import eloRouter from './routes/elo.js';

const PORT    = process.env.PORT    || 3001;
const IS_PROD = process.env.NODE_ENV === 'production';
const ALLOWED_ORIGINS = (process.env.CLIENT_URL || 'http://localhost:3000')
  .split(',').map(s => s.trim());

const app = express();

// ── Sécurité HTTP ──────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false,     // géré par Vite/CDN en prod
  crossOriginEmbedderPolicy: false, // nécessaire pour MathJax/iframes
}));

// ── Compression gzip/brotli ────────────────────────────────────────────────
app.use(compression());

// ── CORS ──────────────────────────────────────────────────────────────────
app.use(cors({
  origin: IS_PROD ? ALLOWED_ORIGINS : true,
  credentials: true,
}));

// ── Body parsers ───────────────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));

// ── DB middleware ──────────────────────────────────────────────────────────
const db = await getDb();

// ── Migrations automatiques (ALTER TABLE idempotentes) ────────────────────
try { db.run("ALTER TABLE users ADD COLUMN email TEXT"); } catch {} // ignoré si déjà présent
try { db.run("ALTER TABLE users ADD COLUMN plan TEXT NOT NULL DEFAULT 'free'"); } catch {}
try { db.run("ALTER TABLE grades ADD COLUMN coefficient REAL NOT NULL DEFAULT 1"); } catch {}

// Consentements (RGPD + mineurs) — preuve horodatée
for (const col of [
  "ALTER TABLE users ADD COLUMN adult_confirmed INTEGER DEFAULT 0", // créateur du compte majeur / représentant légal
  "ALTER TABLE users ADD COLUMN cgu_accepted_at TEXT",             // acceptation CGU à l'inscription
]) { try { db.run(col); } catch {} }

// Lien N-N entre une carte (théorème/propriété) et une méthode rattachée
db.run(`CREATE TABLE IF NOT EXISTS carte_methodes (
  carte_id   INTEGER NOT NULL REFERENCES cartes(id),
  methode_id INTEGER NOT NULL REFERENCES methodes(id),
  ordre      INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (carte_id, methode_id)
)`);
db.run('CREATE INDEX IF NOT EXISTS idx_carte_methodes_carte ON carte_methodes(carte_id)');

// Niveau adaptatif par matière/chapitre, inspiré de la formule de classement Elo.
db.run(`CREATE TABLE IF NOT EXISTS elo_scores (
  user_id     INTEGER NOT NULL REFERENCES users(id),
  matiere_id  TEXT NOT NULL,
  chapitre_id TEXT NOT NULL,
  rating      INTEGER NOT NULL DEFAULT 1000,
  attempts    INTEGER NOT NULL DEFAULT 0,
  updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, matiere_id, chapitre_id)
)`);
db.run(`CREATE TABLE IF NOT EXISTS exercise_attempts (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL REFERENCES users(id),
  carte_id    INTEGER NOT NULL REFERENCES cartes(id),
  matiere_id  TEXT NOT NULL,
  chapitre_id TEXT NOT NULL,
  difficulty  INTEGER NOT NULL,
  success     INTEGER NOT NULL,
  delta       INTEGER NOT NULL,
  rating_after INTEGER NOT NULL,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
)`);
db.run('CREATE INDEX IF NOT EXISTS idx_elo_scores_user ON elo_scores(user_id)');
db.run('CREATE INDEX IF NOT EXISTS idx_exercise_attempts_user ON exercise_attempts(user_id)');

// ── Seed 3ème Maths (idempotent) ──────────────────────────────────────────
seed3emeIfNeeded(db);
seedSiInfoIfNeeded(db);
seedCollegeIfNeeded(db);
seedLyceeIfNeeded(db);
await loadContentFiles(db);   // contenu riche depuis server/db/content/*.js
seedMethodeLinksIfNeeded(db); // rattache les méthodes aux théorèmes/propriétés
seedMethodesQuality(db);      // signale les méthodes limites / hors programme
saveDb();

app.use((req, _res, next) => { req.db = db; next(); });

// ── Routes ─────────────────────────────────────────────────────────────────
app.use('/api', filieresRouter);
app.use('/api', coursRouter);
app.use('/api/auth', authRouter);
app.use('/api', searchRouter);
app.use('/api', progressionRouter);
app.use('/api', ecolesRouter);
app.use('/api', methodesRouter);
app.use('/api', dashboardRouter);
app.use('/api', schedulesRouter);
app.use('/api', todosRouter);
app.use('/api', focusRouter);
app.use('/api', gradesRouter);
app.use('/api', erreursRouter);
app.use('/api', eloRouter);

// ── 404 API ────────────────────────────────────────────────────────────────
app.use('/api/*', (_req, res) => res.status(404).json({ error: 'Route introuvable' }));

// ── Front statique (single-host : Railway sert la PAGE *et* l'API) ──────────
// Si le build Vite est présent (dist/), on le sert. Le mode teasing/live est
// respecté via dist/_redirects (mêmes règles que Cloudflare).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
if (existsSync(DIST)) {
  // Règles de redirection façon Cloudflare _redirects (verrou teasing)
  let redirectRules = [];
  const redirectsFile = path.join(DIST, '_redirects');
  if (existsSync(redirectsFile)) {
    redirectRules = readFileSync(redirectsFile, 'utf8').split('\n')
      .map(l => l.trim()).filter(l => l && !l.startsWith('#'))
      .map(l => l.split(/\s+/)).filter(p => p.length >= 2);
  }
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    const rule = redirectRules.find(r => r[0] === req.path);
    if (rule) return res.redirect(parseInt(rule[2] || '302', 10), rule[1]);
    next();
  });
  app.use(express.static(DIST, { extensions: ['html'] }));
  // Fallback : tout chemin inconnu (hors /api) → page d'accueil
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
    res.sendFile(path.join(DIST, 'index.html'));
  });
  console.log(`[front] page servie depuis ${DIST}`);
} else {
  console.log('[front] dist/ absent — API seule (lance "npm run build")');
}

// ── Gestionnaire d'erreurs global ─────────────────────────────────────────
app.use((err, req, res, _next) => { // eslint-disable-line no-unused-vars
  const status = err.status || err.statusCode || 500;
  console.error(`[${new Date().toISOString()}] ${req.method} ${req.path} →`, err.message);
  res.status(status).json({
    error: IS_PROD ? 'Erreur interne du serveur' : (err.message || 'Erreur inconnue'),
  });
});

// ── Sauvegarde périodique ──────────────────────────────────────────────────
setInterval(saveDb, 30_000);

process.on('SIGINT',  () => { saveDb(); closeDb(); process.exit(0); });
process.on('SIGTERM', () => { saveDb(); closeDb(); process.exit(0); });

app.listen(PORT, () => {
  console.log(`Admiscible API running on http://localhost:${PORT} [${IS_PROD ? 'production' : 'dev'}]`);
});
