/* Mode du site — régénéré par scripts/site-mode.js. NE PAS éditer à la main.
   Bascule : npm run site:live / npm run site:teasing */
var SITE_LIVE = true;
if (!SITE_LIVE) {
  document.documentElement.className += ' site-teasing';
  var allow = ['/', '/index.html', '/mentions-legales.html', '/politique-confidentialite.html', '/cgu.html', '/404.html'];
  if (allow.indexOf(location.pathname) === -1) location.replace('/');
}
