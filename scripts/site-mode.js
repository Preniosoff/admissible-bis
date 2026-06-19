// ── Bascule TEASING ⇄ LIVE ───────────────────────────────────────────────────
// Usage : node scripts/site-mode.js <live|teasing>   (via npm run site:live / site:teasing)
//
// TEASING : index.html = accueil institutionnel ; les pages de l'app redirigent
//           vers l'accueil (verrou) ; robots/sitemap furtifs (invisible Google).
// LIVE    : index.html = site complet ; verrou désactivé ; robots/sitemap normaux.
//
// Après bascule : `npm run build` puis déploie.

import { copyFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const r = (...p) => resolve(root, ...p);

const mode = process.argv[2];
if (mode !== 'live' && mode !== 'teasing') {
  console.error('Usage : node scripts/site-mode.js <live|teasing>');
  process.exit(1);
}
const live = mode === 'live';

const ROBOTS_LIVE = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard.html
Disallow: /profil.html
Disallow: /todos.html
Disallow: /notes.html
Disallow: /focus.html
Disallow: /schedule.html
Disallow: /erreurs.html
Disallow: /onboarding.html

Sitemap: https://admiscible.fr/sitemap.xml
`;

const ROBOTS_TEASING = `User-agent: *
Disallow: /cours.html
Disallow: /methodes.html
Disallow: /concours.html
Disallow: /ressources.html
Disallow: /dashboard.html
Disallow: /profil.html
Disallow: /todos.html
Disallow: /notes.html
Disallow: /focus.html
Disallow: /schedule.html
Disallow: /erreurs.html
Disallow: /onboarding.html

Sitemap: https://admiscible.fr/sitemap.xml
`;

const SITEMAP_LIVE = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://admiscible.fr/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://admiscible.fr/cours.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://admiscible.fr/methodes.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://admiscible.fr/concours.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://admiscible.fr/ressources.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
`;

const SITEMAP_TEASING = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://admiscible.fr/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
</urlset>
`;

const SITE_MODE_JS = `/* Mode du site — régénéré par scripts/site-mode.js. NE PAS éditer à la main.
   Bascule : npm run site:live / npm run site:teasing */
var SITE_LIVE = ${live};
if (!SITE_LIVE) {
  document.documentElement.className += ' site-teasing';
  var allow = ['/', '/index.html', '/mentions-legales.html', '/politique-confidentialite.html', '/cgu.html', '/404.html'];
  if (allow.indexOf(location.pathname) === -1) location.replace('/');
}
`;

// Verrou côté serveur (Cloudflare Pages) — redirige les pages de l'app vers
// l'accueil AVANT même de servir la page (edge, sans JS, sans flash, infaillible).
const APP_PAGES = ['cours','methodes','concours','ressources','dashboard',
  'notes','focus','todos','erreurs','schedule','profil','onboarding'];
const REDIRECTS_LIVE = `# Mode LIVE — aucune redirection.\n`;
const REDIRECTS_TEASING = APP_PAGES.map(p => `/${p}.html  /  302`).join('\n') + '\n';

// 1) Page d'accueil active
copyFileSync(r('src', 'home.html'), r('src', 'index.html'));
// 2) Verrou de redirection (lu par <script src="/site-mode.js"> dans les pages de l'app)
writeFileSync(r('public', 'site-mode.js'), SITE_MODE_JS);
// 3) robots.txt
writeFileSync(r('public', 'robots.txt'), live ? ROBOTS_LIVE : ROBOTS_TEASING);
// 4) sitemap.xml
writeFileSync(r('public', 'sitemap.xml'), live ? SITEMAP_LIVE : SITEMAP_TEASING);
// 5) Verrou serveur Cloudflare Pages (_redirects)
writeFileSync(r('public', '_redirects'), live ? REDIRECTS_LIVE : REDIRECTS_TEASING);

console.log(live
  ? '\n✅ Mode LIVE — site complet ouvert. Lance "npm run build" puis déploie.\n'
  : '\n🔒 Mode TEASING — accueil seul. App verrouillée (redirection) + invisible Google. Lance "npm run build" puis déploie.\n');
