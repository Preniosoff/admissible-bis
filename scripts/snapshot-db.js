#!/usr/bin/env node
// Met à jour la base d'amorçage commitée à partir de la base de travail locale.
// À lancer après avoir ajouté du contenu (cours, méthodes…) AVANT de déployer :
//   npm run snapshot && git add server/db/prepamp.seed.sqlite && git commit -m "maj contenu"
import { copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const WORKING = resolve(here, '../server/db/prepamp.sqlite');
const SEED    = resolve(here, '../server/db/prepamp.seed.sqlite');

if (!existsSync(WORKING)) { console.error('[snapshot] base de travail introuvable :', WORKING); process.exit(1); }
copyFileSync(WORKING, SEED);
console.log('[snapshot] ✓ base d\'amorçage mise à jour →', SEED);
console.log('[snapshot] Pense à : git add server/db/prepamp.seed.sqlite && git commit');
