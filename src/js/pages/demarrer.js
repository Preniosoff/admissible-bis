import '../main.js';

const FLOWS = {
  eleve: {
    label: 'Élève',
    hint: 'Je veux travailler efficacement.',
    levels: ['Collège', 'Lycée', 'Classes préparatoires'],
    needs: [
      {
        id: 'today',
        label: 'Je ne sais pas par quoi commencer',
        desc: 'Recevoir un plan court pour aujourd’hui.',
        result: {
          title: 'Commencer par les priorités du jour',
          text: 'Le plus efficace est de réduire la séance à trois actions : comprendre, appliquer, corriger.',
          href: 'priorites-eleve.html',
          cta: 'Créer mes priorités',
          steps: ['Choisir l’objectif', 'Choisir la notion', 'Suivre les trois actions proposées'],
          secondary: [{ href: 'dashboard.html', label: 'Voir mon suivi' }],
        },
      },
      {
        id: 'learn',
        label: 'Je veux comprendre une notion',
        desc: 'Trouver le cours ou la méthode utile.',
        result: {
          title: 'Partir du cours, puis vérifier avec une méthode',
          text: 'La bonne séquence est : notion, exemple, exercice court. Évite de commencer par une recherche trop large.',
          href: 'cours.html',
          cta: 'Ouvrir les cours',
          steps: ['Choisir le niveau', 'Lire la fiche', 'Passer à une méthode ou un exercice'],
          secondary: [{ href: 'methodes.html', label: 'Voir les méthodes' }],
        },
      },
      {
        id: 'train',
        label: 'Je veux m’entraîner',
        desc: 'Faire des exercices et garder une trace.',
        result: {
          title: 'S’entraîner avec correction immédiate',
          text: 'Un exercice est utile seulement si la correction produit une trace : erreur, méthode ou point de vigilance.',
          href: 'ressources.html',
          cta: 'Trouver des exercices',
          steps: ['Choisir une ressource courte', 'Corriger tout de suite', 'Noter l’erreur importante'],
          secondary: [{ href: 'erreurs.html', label: 'Cahier d’erreurs' }],
        },
      },
    ],
  },
  parent: {
    label: 'Parent',
    hint: 'Je veux comprendre et accompagner.',
    levels: ['Collège', 'Lycée', 'Classes préparatoires'],
    needs: [
      {
        id: 'understand',
        label: 'Je veux comprendre le service',
        desc: 'Savoir ce que le site fait et ne fait pas.',
        result: {
          title: 'Lire le cadre parent',
          text: 'Le site sert à travailler et garder une trace, sans accès intrusif permanent pour la famille.',
          href: 'parents.html',
          cta: 'Lire l’espace parents',
          steps: ['Comprendre le rôle du service', 'Regarder les garanties', 'Voir comment accompagner'],
          secondary: [{ href: 'matrice-rgpd.html', label: 'Données et garanties' }],
        },
      },
      {
        id: 'report',
        label: 'Je veux un bilan clair',
        desc: 'Voir une synthèse volontaire et imprimable.',
        result: {
          title: 'Préparer un bilan volontaire',
          text: 'Le parent reçoit une synthèse courte, pas un tableau de surveillance.',
          href: 'bilan-parent.html',
          cta: 'Créer un bilan',
          steps: ['Choisir le niveau', 'Sélectionner le travail réalisé', 'Imprimer ou relire la synthèse'],
          secondary: [{ href: 'contact-signalement.html', label: 'Demander de l’aide' }],
        },
      },
    ],
  },
  enseignant: {
    label: 'Enseignant',
    hint: 'Je veux orienter une classe.',
    levels: ['Classe', 'Groupe de besoin', 'Établissement'],
    needs: [
      {
        id: 'sequence',
        label: 'Je prépare une séance',
        desc: 'Objectif, ressource, activité, trace.',
        result: {
          title: 'Construire une séquence courte',
          text: 'Le site devient utile quand la séance a une sortie claire : fiche relue, exercice corrigé ou erreur reprise.',
          href: 'sequences-pedagogiques.html',
          cta: 'Voir les séquences',
          steps: ['Choisir le modèle', 'Associer une ressource', 'Demander une trace de travail'],
          secondary: [{ href: 'espace-enseignant.html', label: 'Espace enseignant' }],
        },
      },
      {
        id: 'class',
        label: 'Je veux suivre un groupe',
        desc: 'Créer une classe locale et exporter un bilan.',
        result: {
          title: 'Utiliser l’espace enseignant local',
          text: 'Les données restent dans le navigateur : utile pour préparer un bilan sans déploiement lourd.',
          href: 'espace-enseignant.html',
          cta: 'Ouvrir l’espace',
          steps: ['Renseigner la classe', 'Ajouter les besoins', 'Exporter le bilan'],
          secondary: [{ href: 'recherche.html', label: 'Recherche avancée' }],
        },
      },
    ],
  },
  etablissement: {
    label: 'Établissement',
    hint: 'Je veux cadrer un usage collectif.',
    levels: ['Collège', 'Lycée', 'Post-bac', 'Multi-niveaux'],
    needs: [
      {
        id: 'deploy',
        label: 'Je veux étudier un déploiement',
        desc: 'Rôles, étapes, données et limites.',
        result: {
          title: 'Commencer par un cadre de déploiement',
          text: 'Le bon point de départ est un pilote limité, documenté, avec des responsabilités claires.',
          href: 'deploiement-etablissement.html',
          cta: 'Voir le déploiement',
          steps: ['Définir le périmètre', 'Identifier les rôles', 'Valider les garanties'],
          secondary: [{ href: 'matrice-rgpd.html', label: 'Matrice RGPD' }],
        },
      },
      {
        id: 'pilot',
        label: 'Je veux voir un pilotage',
        desc: 'Indicateurs anonymisés et suivi déclaratif.',
        result: {
          title: 'Simuler un pilotage anonymisé',
          text: 'Le pilotage doit rester collectif : niveaux, groupes, priorités, sans classement nominatif.',
          href: 'pilotage-etablissement.html',
          cta: 'Ouvrir le pilotage',
          steps: ['Ajouter un niveau', 'Choisir une priorité', 'Imprimer la vue établissement'],
          secondary: [{ href: 'fiche-presentation.html', label: 'Fiche de présentation' }],
        },
      },
    ],
  },
};

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function init() {
  const root = document.getElementById('guided-start-app');
  if (!root) return;
  const params = new URLSearchParams(location.search);
  let profile = FLOWS[params.get('profile')] ? params.get('profile') : '';
  let level = params.get('level') || '';
  let need = params.get('need') || '';

  function currentNeed() {
    return profile ? FLOWS[profile].needs.find(item => item.id === need) : null;
  }

  function currentLevelLabel() {
    const map = {
      college: 'Collège',
      lycee: 'Lycée',
      cpge: 'Classes préparatoires',
      collectif: 'Usage collectif',
    };
    return map[level] || level || '';
  }

  function render() {
    const selectedNeed = currentNeed();
    root.innerHTML = `
      <section class="guided-shell">
        <div class="guided-stepper" aria-label="Étapes">
          <span class="${profile ? 'active' : ''}">1. Profil</span>
          <span class="${level ? 'active' : ''}">2. Niveau</span>
          <span class="${need ? 'active' : ''}">3. Besoin</span>
          <span class="${selectedNeed ? 'active' : ''}">4. Action</span>
        </div>
        ${renderContext()}
        <div class="guided-linear">
          ${renderProfiles()}
          ${profile ? renderLevels() : ''}
          ${profile && level ? renderNeeds() : ''}
          ${selectedNeed ? renderResult(selectedNeed.result) : ''}
        </div>
      </section>`;
    bind();
  }

  function renderContext() {
    return `
      <div class="guided-context">
        <div>
          <strong>Objectif de cette page</strong>
          <span>Réduire les choix à une action utile, puis ouvrir seulement la page nécessaire.</span>
        </div>
        <div>
          <strong>Contexte actuel</strong>
          <span>${profile ? esc(FLOWS[profile].label) : 'Profil à choisir'} · ${currentLevelLabel() || 'Niveau à choisir'} · ${need ? 'Besoin choisi' : 'Besoin à choisir'}</span>
        </div>
      </div>`;
  }

  function renderProfiles() {
    return `
      <section class="guided-panel">
        <h2>Votre situation</h2>
        <div class="choice-grid choice-grid-wide">
          ${Object.entries(FLOWS).map(([id, item]) => `
            <button class="choice-card ${id === profile ? 'active' : ''}" type="button" data-profile="${id}">
              <strong>${esc(item.label)}</strong>
              <span>${esc(item.hint)}</span>
            </button>`).join('')}
        </div>
      </section>`;
  }

  function renderNeeds() {
    const flow = FLOWS[profile];
    return `
      <section class="guided-panel">
        <h2>Votre besoin principal</h2>
        <div class="choice-grid choice-grid-wide">
          ${flow.needs.map(item => `
            <button class="choice-card ${item.id === need ? 'active' : ''}" type="button" data-need="${item.id}">
              <strong>${esc(item.label)}</strong>
              <span>${esc(item.desc)}</span>
            </button>`).join('')}
        </div>
      </section>`;
  }

  function renderLevels() {
    const flow = FLOWS[profile];
    const levels = flow.levels || ['Collège', 'Lycée', 'Classes préparatoires'];
    const ids = levels.map(item => item.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/classes preparatoires/, 'cpge')
      .replace(/usage collectif|multi-niveaux|etablissement/, 'collectif')
      .replace(/groupe de besoin/, 'groupe')
      .replace(/post-bac/, 'postbac')
      .replace(/\s+/g, '-'));
    return `
      <section class="guided-panel">
        <h2>Niveau ou cadre</h2>
        <div class="choice-grid choice-grid-wide">
          ${levels.map((item, index) => {
            const id = ids[index];
            return `
              <button class="choice-card ${id === level ? 'active' : ''}" type="button" data-level="${esc(id)}">
                <strong>${esc(item)}</strong>
                <span>${esc(levelHint(profile, item))}</span>
              </button>`;
          }).join('')}
        </div>
      </section>`;
  }

  function renderResult(result) {
    return `
      <section class="guided-result">
        <div>
          <span class="guided-result-label">Action recommandée</span>
          <h2>${esc(result.title)}</h2>
          <p>${esc(result.text)}</p>
        </div>
        <ol>
          ${result.steps.map(step => `<li>${esc(step)}</li>`).join('')}
        </ol>
        <div class="guided-actions">
          <a class="btn btn-primary" href="${result.href}">${esc(result.cta)}</a>
          ${result.secondary.map(link => `<a class="btn btn-ghost" href="${link.href}">${esc(link.label)}</a>`).join('')}
        </div>
        <div class="guided-trace">
          <strong>Trace conseillée</strong>
          <span>${esc(traceFor(profile, need))}</span>
        </div>
      </section>`;
  }

  function bind() {
    root.querySelectorAll('[data-profile]').forEach(btn => {
      btn.addEventListener('click', () => {
        profile = btn.dataset.profile;
        level = '';
        need = '';
        remember();
        render();
      });
    });
    root.querySelectorAll('[data-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        level = btn.dataset.level;
        need = '';
        remember();
        render();
      });
    });
    root.querySelectorAll('[data-need]').forEach(btn => {
      btn.addEventListener('click', () => {
        need = btn.dataset.need;
        remember();
        render();
      });
    });
  }

  function remember() {
    try {
      localStorage.setItem('admiscible-start-context', JSON.stringify({
        profile,
        level,
        need,
        updatedAt: new Date().toISOString(),
      }));
    } catch {}
  }

  render();
}

function levelHint(profile, level) {
  if (profile === 'eleve') return `Contenus et actions adaptés au niveau ${level.toLowerCase()}.`;
  if (profile === 'parent') return `Repères pour accompagner un élève de niveau ${level.toLowerCase()}.`;
  if (profile === 'enseignant') return `Préparation d'une action pour ${level.toLowerCase()}.`;
  return `Cadre de déploiement pour ${level.toLowerCase()}.`;
}

function traceFor(profile, need) {
  if (profile === 'eleve' && need === 'train') return 'Une erreur corrigée ou une méthode à retenir.';
  if (profile === 'eleve') return 'Une notion comprise, un exercice court ou une priorité terminée.';
  if (profile === 'parent') return 'Une synthèse courte, volontaire et imprimable.';
  if (profile === 'enseignant') return 'Un objectif, une ressource et une trace demandée aux élèves.';
  return 'Un périmètre, des rôles, des garanties et une décision de déploiement.';
}

document.addEventListener('DOMContentLoaded', init);
