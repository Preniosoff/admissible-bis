// ── Footer global ─────────────────────────────────────────────────────────────
// Injecté automatiquement par main.js sur toutes les pages.

function injectFooterStyles() {
  if (document.getElementById('footer-styles')) return;
  const s = document.createElement('style');
  s.id = 'footer-styles';
  s.textContent = `
    .site-footer {
      border-top: 2px solid var(--text-0);
      background: var(--bg-1);
      padding: 2.5rem 1.5rem 1.25rem;
      margin-top: 4rem;
    }
    .footer-inner {
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(220px, 1.05fr) 2.35fr;
      gap: 3rem;
      padding-bottom: 2rem;
    }
    .footer-brand { min-width: 0; }
    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 800;
      color: var(--text-0);
      text-decoration: none;
      margin-bottom: 0.8rem;
    }
    .footer-tagline {
      font-size: 0.92rem;
      color: var(--text-1);
      line-height: 1.55;
      max-width: 24rem;
    }
    .footer-notice {
      margin-top: 1rem;
      padding: 0.75rem 0.9rem;
      border-left: 4px solid var(--blue-france);
      background: var(--bg-card);
      color: var(--text-1);
      font-size: 0.86rem;
      line-height: 1.5;
    }
    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
      gap: 1.5rem;
      min-width: 0;
    }
    .footer-col { display: flex; flex-direction: column; gap: 0.35rem; }
    .footer-col-title {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0;
      color: var(--text-0);
      margin-bottom: 0.35rem;
    }
    .footer-col a {
      font-size: 0.92rem;
      color: var(--accent);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .footer-col a:hover { color: var(--accent-hover); }
    .footer-bottom {
      max-width: 1120px;
      margin: 0 auto;
      border-top: 1px solid var(--border-0);
      padding-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
      font-size: 0.82rem;
      color: var(--text-2);
    }
    .footer-sep { opacity: 0.45; }
    .footer-cookie-btn {
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.82rem;
      color: var(--accent);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 3px;
      padding: 0;
    }
    @media (max-width: 760px) {
      .footer-inner { grid-template-columns: 1fr; gap: 1.5rem; }
      .footer-links { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(s);
}

export function initFooter() {
  if (document.querySelector('footer.site-footer')) return;
  if (window.location.pathname.includes('onboarding')) return;
  if (window.location.pathname.includes('inscription')) return;

  injectFooterStyles();

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <div class="logo-icon" style="width:34px;height:34px" aria-hidden="true"></div>
          Admiscible
        </a>
        <p class="footer-tagline">Cours, méthodes, exercices et annales gratuits. Espaces de suivi personnel et parent sur abonnement.</p>
        <p class="footer-notice">Admiscible est une initiative indépendante, conçue dans une présentation sobre et compatible avec les usages de l'éducation.</p>
      </div>

      <div class="footer-links">
        <div class="footer-col">
          <div class="footer-col-title">Contenus</div>
          <a href="cours.html">Cours</a>
          <a href="methodes.html">Méthodes</a>
          <a href="ressources.html">Sujets et exercices</a>
          <a href="annales.html">Annales concours</a>
          <a href="annales-bac.html">Annales bac</a>
          <a href="annales-brevet.html">Annales brevet</a>
          <a href="concours.html">Concours</a>
          <a href="recherche.html">Recherche</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Publics</div>
          <a href="inscription.html">Créer un compte</a>
          <a href="abonnement.html">Offres</a>
          <a href="orientation.html">Orientation</a>
          <a href="eleves.html">Élèves</a>
          <a href="parents.html">Parents</a>
          <a href="famille.html">Famille</a>
          <a href="enseignants.html">Enseignants</a>
          <a href="etablissements.html">Établissements</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Service</div>
          <a href="a-propos.html">A propos</a>
          <a href="notre-methode.html">Notre méthode</a>
          <a href="sources-programmes.html">Sources et programmes</a>
          <a href="attendus-officiels.html">Attendus officiels</a>
          <a href="etat-contenus.html">État des contenus</a>
          <a href="transparence.html">Transparence</a>
          <a href="conformite-dsfr.html">Alignement DSFR</a>
          <a href="securite.html">Sécurité</a>
          <a href="connexion-institutionnelle.html">Accès institutionnel</a>
          <a href="deploiement-etablissement.html">Déploiement établissement</a>
          <a href="matrice-rgpd.html">Matrice RGPD</a>
          <a href="statut-service.html">Statut du service</a>
          <a href="accessibilite.html">Accessibilité</a>
          <a href="aide.html">Aide</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Informations</div>
          <a href="plan-site.html">Plan du site</a>
          <a href="mentions-legales.html">Mentions légales</a>
          <a href="cgu.html">Conditions d'utilisation</a>
          <a href="politique-confidentialite.html">Confidentialité</a>
          <a href="contact-signalement.html">Contact et signalement</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Admiscible</span>
      <span class="footer-sep">·</span>
      <span>Contenus gratuits</span>
      <span class="footer-sep">·</span>
      <a href="accessibilite.html">Accessibilité</a>
      <span class="footer-sep">·</span>
      <button class="footer-cookie-btn" id="footer-cookie-btn">Préférences cookies</button>
    </div>
  `;

  document.body.appendChild(footer);

  footer.querySelector('#footer-cookie-btn')?.addEventListener('click', () => {
    import('./cookie-consent.js').then(m => m.showCookieSettings());
  });
}
