#!/usr/bin/env node
// ════════════════════════════════════════════════════════════════════════════
// Sauvegarde de la base SQLite vers un stockage objet compatible S3
// (Cloudflare R2, Backblaze B2, AWS S3…).
//
// À planifier une fois par jour (ex. service Cron Railway : `npm run backup`).
//
// Variables d'environnement attendues :
//   DB_PATH              chemin de la base (défaut: server/db/prepamp.sqlite)
//   S3_ENDPOINT          ex. https://<accountid>.r2.cloudflarestorage.com
//   S3_BUCKET            nom du bucket
//   S3_ACCESS_KEY_ID     clé d'accès
//   S3_SECRET_ACCESS_KEY clé secrète
//   S3_REGION            (optionnel, défaut: auto — convient à R2)
//   BACKUP_KEEP          (optionnel, nb de sauvegardes à conserver, défaut: 14)
//
// Si la config S3 est absente, le script ne fait rien (sortie 0) — il ne casse
// jamais le déploiement.
// ════════════════════════════════════════════════════════════════════════════

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.DB_PATH || resolve(__dirname, '../server/db/prepamp.sqlite');

const {
  S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY,
  S3_REGION = 'auto', BACKUP_KEEP = '14',
} = process.env;

function log(...a) { console.log('[backup]', ...a); }

async function main() {
  if (!existsSync(DB_PATH)) {
    log(`Base introuvable (${DB_PATH}), rien à sauvegarder.`);
    return;
  }
  if (!S3_ENDPOINT || !S3_BUCKET || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY) {
    log('Config S3 absente → sauvegarde ignorée (définis S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY).');
    return;
  }

  // Import paresseux : la dépendance n'est nécessaire que pour ce script.
  const { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand } =
    await import('@aws-sdk/client-s3');

  const s3 = new S3Client({
    region: S3_REGION,
    endpoint: S3_ENDPOINT,
    credentials: { accessKeyId: S3_ACCESS_KEY_ID, secretAccessKey: S3_SECRET_ACCESS_KEY },
    forcePathStyle: true,
  });

  // Horodatage AAAA-MM-JJ_HHhMM
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  const stamp = `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}_${p(d.getUTCHours())}h${p(d.getUTCMinutes())}`;
  const key = `backups/admiscible-${stamp}.sqlite`;

  const body = readFileSync(DB_PATH);
  await s3.send(new PutObjectCommand({
    Bucket: S3_BUCKET, Key: key, Body: body, ContentType: 'application/x-sqlite3',
  }));
  log(`✓ Sauvegarde envoyée : ${key} (${(body.length / 1024 / 1024).toFixed(2)} Mo)`);

  // Rétention : ne garder que les BACKUP_KEEP plus récentes.
  const keep = parseInt(BACKUP_KEEP, 10) || 14;
  const list = await s3.send(new ListObjectsV2Command({ Bucket: S3_BUCKET, Prefix: 'backups/' }));
  const objs = (list.Contents || []).sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified));
  const toDelete = objs.slice(keep);
  if (toDelete.length) {
    await s3.send(new DeleteObjectsCommand({
      Bucket: S3_BUCKET,
      Delete: { Objects: toDelete.map((o) => ({ Key: o.Key })) },
    }));
    log(`✓ ${toDelete.length} ancienne(s) sauvegarde(s) supprimée(s) (rétention ${keep}).`);
  }
}

main().catch((e) => { console.error('[backup] ÉCHEC :', e.message); process.exit(1); });
