import initSqlJs from 'sql.js';
import { readFileSync, writeFileSync, existsSync, copyFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const WORKING_DB  = resolve(__dirname, 'prepamp.sqlite');      // base de travail (dev) — gitignored
const SEED_DB     = resolve(__dirname, 'prepamp.seed.sqlite'); // base d'amorçage — COMMITÉE (sert d'image de départ)
const SCHEMA_PATH = resolve(__dirname, 'schema.sql');
// En prod, DB_PATH pointe vers un disque persistant (ex. volume Railway : /data/prepamp.sqlite)
const DB_PATH     = process.env.DB_PATH || WORKING_DB;
// Source d'amorçage du volume : la base commitée en priorité, sinon la base de travail.
const BOOTSTRAP_SRC = existsSync(SEED_DB) ? SEED_DB : WORKING_DB;

let db = null;

export async function getDb() {
  if (db) return db;

  const SQL = await initSqlJs();

  // Bootstrap : si la base cible n'existe pas encore (volume neuf en prod),
  // on l'initialise à partir de la base d'amorçage livrée dans le dépôt.
  if (!existsSync(DB_PATH) && existsSync(BOOTSTRAP_SRC) && DB_PATH !== BOOTSTRAP_SRC) {
    mkdirSync(dirname(DB_PATH), { recursive: true });
    copyFileSync(BOOTSTRAP_SRC, DB_PATH);
    console.log(`[db] Volume initialisé depuis ${BOOTSTRAP_SRC} → ${DB_PATH}`);
  }

  db = existsSync(DB_PATH) ? new SQL.Database(readFileSync(DB_PATH)) : new SQL.Database();

  // Filet de sécurité : si la base est vide (table users absente), appliquer le schéma.
  let hasUsers = true;
  try { const s = db.prepare('SELECT 1 FROM users LIMIT 1'); s.step(); s.free(); }
  catch { hasUsers = false; }
  if (!hasUsers && existsSync(SCHEMA_PATH)) {
    db.run(readFileSync(SCHEMA_PATH, 'utf8'));
    console.log('[db] Schéma appliqué (base vide) — lance `npm run seed` pour peupler.');
  }

  db.run('PRAGMA foreign_keys = ON');
  return db;
}

export function saveDb() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  writeFileSync(DB_PATH, buffer);
}

export function closeDb() {
  if (db) {
    saveDb();
    db.close();
    db = null;
  }
}

export function runQuery(db, sql, params = []) {
  return db.run(sql, params);
}

export function getOne(db, sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  if (stmt.step()) {
    const result = stmt.getAsObject();
    stmt.free();
    return result;
  }
  stmt.free();
  return null;
}

export function getAll(db, sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

export function runInsert(db, sql, params = []) {
  db.run(sql, params);
  const result = getOne(db, 'SELECT last_insert_rowid() as id');
  return result ? result.id : null;
}
