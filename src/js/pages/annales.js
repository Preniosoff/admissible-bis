const ANNALES_CONFIGS = {
  concours: {
    from: 2006,
    to: 2025,
    resultLabel: 'banque d\'épreuves',
    resultPlural: 'banques d\'épreuves',
    emptyTitle: 'Aucune banque trouvée.',
    emptyText: 'Essayez un chapitre plus large ou retirez un filtre.',
    source: {
      label: 'Source maths : Doc-Solus',
      url: 'https://www.doc-solus.fr/main.html?words=&filiere=Fili%C3%A8re&matiere=Math%C3%A9matiques&concours=Concours&annee=Ann%C3%A9e',
    },
    catalog: {
      maths: [
        'Logique et raisonnement', 'Ensembles et applications', 'Nombres complexes', 'Suites numériques',
        'Séries numériques', 'Séries entières', 'Suites et séries de fonctions', 'Fonctions usuelles',
        'Limites et continuité', 'Dérivabilité', 'Développements limités', 'Intégration',
        'Intégrales impropres', 'Intégrales à paramètre', 'Équations différentielles',
        'Espaces vectoriels', 'Applications linéaires', 'Matrices', 'Déterminants',
        'Systèmes linéaires', 'Réduction des endomorphismes', 'Diagonalisation',
        'Espaces euclidiens', 'Formes quadratiques', 'Topologie', 'Calcul différentiel',
        'Probabilités discrètes', 'Variables aléatoires', 'Couples de variables aléatoires',
        'Convergence', 'Espérance et variance',
      ],
      physique: [
        'Mécanique du point', 'Énergie mécanique', 'Moment cinétique', 'Oscillateurs',
        'Mécanique du solide', 'Référentiels non galiléens', 'Électrocinétique',
        'Régimes transitoires', 'Filtrage linéaire', 'Électrostatique', 'Magnétostatique',
        'Induction électromagnétique', 'Ondes mécaniques', 'Ondes électromagnétiques',
        'Optique géométrique', 'Optique ondulatoire', 'Interférences', 'Diffraction',
        'Thermodynamique', 'Premier principe', 'Second principe', 'Machines thermiques',
        'Diffusion thermique', 'Physique quantique',
      ],
      chimie: [
        'Atomistique', 'Orbitales', 'Liaisons chimiques', 'Cristallographie',
        'Thermodynamique chimique', 'Équilibres chimiques', 'Acide-base', 'Oxydoréduction',
        'Cinétique chimique', 'Chimie organique', 'Stéréochimie', 'Substitution nucléophile',
        'Élimination', 'Addition', 'Réactions carbonylées', 'Spectroscopie',
        'Polymères', 'Solutions aqueuses',
      ],
      info: [
        'Algorithmique', 'Complexité', 'Récursivité', 'Tris', 'Graphes',
        'Parcours de graphes', 'Dijkstra', 'Programmation dynamique', 'Diviser pour régner',
        'Structures de données', 'Piles et files', 'Arbres', 'Bases de données', 'SQL',
        'Programmation Python', 'Preuves de programmes',
      ],
      si: [
        'Cinématique', 'Statique', 'Dynamique', 'Énergétique', 'Liaisons mécaniques',
        'Chaîne d\'énergie', 'Chaîne d\'information', 'Systèmes asservis',
        'Correcteurs', 'Modélisation multiphysique', 'Automatique', 'Capteurs',
        'Actionneurs', 'Analyse fonctionnelle',
      ],
      svt: [
        'Génétique', 'Expression du génome', 'Métabolisme', 'Photosynthèse',
        'Respiration cellulaire', 'Évolution', 'Écosystèmes', 'Immunologie',
        'Géodynamique interne', 'Géodynamique externe', 'Cartographie géologique',
        'Climat', 'Cycle du carbone',
      ],
    },
    templates: [
      { banque: 'x-ens', banqueLabel: 'X-ENS', filieres: ['mp', 'mpi'], matiere: 'maths', epreuve: 'Mathématiques A', themes: ['analyse', 'algebre'], chapitres: ['Séries entières', 'Suites et séries de fonctions', 'Réduction des endomorphismes'], mots: ['rayon de convergence', 'développement asymptotique', 'diagonalisation'], difficulte: 'selectif' },
      { banque: 'ccinp', banqueLabel: 'CCINP', filieres: ['mp', 'pc', 'psi'], matiere: 'maths', epreuve: 'Maths 1', themes: ['analyse', 'algebre'], chapitres: ['Intégration', 'Séries numériques', 'Séries de fonctions', 'Matrices', 'Espaces vectoriels'], mots: ['doc-solus', 'énoncé', 'pdf', 'ccp'], difficulte: 'standard', docSolusConcours: 'CCP', docSolusEpreuve: '1' },
      { banque: 'mines-ponts', banqueLabel: 'Mines-Ponts', filieres: ['mp', 'pc', 'psi'], matiere: 'maths', epreuve: 'Maths 1', themes: ['analyse', 'probabilites'], chapitres: ['Séries entières', 'Équations différentielles', 'Variables aléatoires', 'Calcul différentiel'], mots: ['doc-solus', 'énoncé', 'pdf', 'mines'], difficulte: 'selectif', docSolusConcours: 'MINES', docSolusEpreuve: '1' },
      { banque: 'centrale-supelec', banqueLabel: 'Centrale-Supélec', filieres: ['mp', 'pc', 'psi'], matiere: 'maths', epreuve: 'Maths 1', themes: ['algebre', 'analyse'], chapitres: ['Matrices', 'Endomorphismes', 'Réduction', 'Topologie', 'Probabilités'], mots: ['doc-solus', 'énoncé', 'pdf', 'centrale'], difficulte: 'selectif', docSolusConcours: 'CENTRALE', docSolusEpreuve: '1' },
      { banque: 'mines-ponts', banqueLabel: 'Mines-Ponts', filieres: ['mp', 'pc', 'psi'], matiere: 'physique', epreuve: 'Physique 1', themes: ['mecanique', 'ondes'], chapitres: ['Mécanique du point', 'Énergie mécanique', 'Oscillateurs', 'Ondes mécaniques'], mots: ['résonance', 'équilibre', 'énergie'], difficulte: 'selectif' },
      { banque: 'centrale-supelec', banqueLabel: 'Centrale-Supélec', filieres: ['mp', 'pc', 'psi', 'mpi'], matiere: 'maths', epreuve: 'Mathématiques 2', themes: ['probabilites', 'analyse'], chapitres: ['Variables aléatoires', 'Convergence', 'Intégrales à paramètre'], mots: ['espérance', 'variance', 'convergence dominée'], difficulte: 'standard' },
      { banque: 'ccinp', banqueLabel: 'CCINP', filieres: ['mp', 'pc', 'psi', 'pt'], matiere: 'physique', epreuve: 'Physique-Chimie', themes: ['thermodynamique', 'ondes'], chapitres: ['Premier principe', 'Machines thermiques', 'Optique ondulatoire', 'Interférences'], mots: ['rendement', 'diffraction', 'thermodynamique'], difficulte: 'standard' },
      { banque: 'e3a-polytech', banqueLabel: 'e3a-Polytech', filieres: ['mp', 'pc', 'psi', 'pt'], matiere: 'si', epreuve: 'Sciences industrielles', themes: ['mecanique'], chapitres: ['Cinématique', 'Statique', 'Asservissements', 'Énergétique'], mots: ['correcteur', 'chaîne énergie', 'système asservi'], difficulte: 'progressif' },
      { banque: 'ccinp', banqueLabel: 'CCINP', filieres: ['mp', 'mpi'], matiere: 'info', epreuve: 'Informatique', themes: ['algorithmique'], chapitres: ['Graphes', 'Programmation dynamique', 'Complexité', 'Bases de données'], mots: ['dijkstra', 'parcours', 'sql'], difficulte: 'standard' },
      { banque: 'agro-veto', banqueLabel: 'Agro-Véto', filieres: ['bcpst'], matiere: 'svt', epreuve: 'Biologie-Géologie', themes: ['geologie', 'biologie'], chapitres: ['Génétique', 'Métabolisme', 'Géodynamique', 'Écosystèmes'], mots: ['photosynthèse', 'géodynamique', 'écosystème'], difficulte: 'standard' },
      { banque: 'centrale-supelec', banqueLabel: 'Centrale-Supélec', filieres: ['pc'], matiere: 'chimie', epreuve: 'Chimie', themes: ['chimie-organique', 'thermodynamique'], chapitres: ['Chimie organique', 'Cinétique', 'Équilibres chimiques', 'Orbitales'], mots: ['mécanisme', 'substitution', 'orbitales'], difficulte: 'selectif' },
    ],
  },
  bac: {
    from: 2006,
    to: 2025,
    resultLabel: 'banque bac',
    resultPlural: 'banques bac',
    emptyTitle: 'Aucune banque bac trouvée.',
    emptyText: 'Essayez une spécialité, un chapitre ou une année plus large.',
    catalog: {
      maths: [
        'Suites numériques', 'Limites de suites', 'Fonctions', 'Limites de fonctions',
        'Continuité', 'Dérivation', 'Convexité', 'Fonction exponentielle',
        'Fonction logarithme', 'Trigonométrie', 'Primitives', 'Intégrales',
        'Équations différentielles', 'Probabilités conditionnelles', 'Loi binomiale',
        'Variables aléatoires', 'Géométrie dans l\'espace', 'Vecteurs', 'Droites et plans',
        'Produit scalaire', 'Algorithmique', 'Combinatoire',
      ],
      'physique-chimie': [
        'Mouvement et forces', 'Deuxième loi de Newton', 'Énergie mécanique',
        'Mouvements dans un champ', 'Ondes et signaux', 'Diffraction', 'Interférences',
        'Effet Doppler', 'Lentilles', 'Électricité', 'Capteurs', 'Acide-base',
        'Dosages', 'Cinétique chimique', 'Équilibres chimiques', 'Oxydoréduction',
        'Synthèse organique', 'Spectroscopie', 'Énergie chimique',
      ],
      nsi: [
        'Représentation des données', 'Bases de données', 'SQL', 'Architectures matérielles',
        'Systèmes d\'exploitation', 'Réseaux', 'Algorithmique', 'Récursivité',
        'Programmation dynamique', 'Structures de données', 'Piles', 'Files',
        'Arbres', 'Graphes', 'Programmation objet', 'Sécurisation des communications',
      ],
      svt: [
        'Génétique', 'Expression du patrimoine génétique', 'Évolution',
        'Géologie et tectonique', 'Climat', 'Écosystèmes', 'Immunologie',
        'Système nerveux', 'Comportements et stress', 'Corps humain et santé',
        'Enzymes', 'Photosynthèse',
      ],
      francais: [
        'Commentaire composé', 'Dissertation', 'Explication linéaire',
        'Contraction de texte', 'Essai', 'Grammaire', 'Roman', 'Théâtre',
        'Poésie', 'Littérature d\'idées', 'Parcours associé', 'Lecture analytique',
      ],
      philosophie: [
        'La conscience', 'L\'inconscient', 'Le temps', 'La liberté', 'Le devoir',
        'Le bonheur', 'La justice', 'L\'État', 'La vérité', 'La raison',
        'La science', 'La technique', 'La nature', 'L\'art', 'Le langage',
        'La religion', 'Le travail', 'Dissertation', 'Explication de texte',
      ],
    },
    templates: [
      { banque: 'bac-general', banqueLabel: 'Bac général', filieres: ['terminale-generale'], matiere: 'maths', epreuve: 'Spécialité mathématiques', themes: ['analyse', 'probabilites'], chapitres: ['Suites numériques', 'Fonctions', 'Dérivation', 'Probabilités conditionnelles', 'Intégrales'], mots: ['limite', 'convexité', 'loi binomiale'], difficulte: 'standard' },
      { banque: 'bac-general', banqueLabel: 'Bac général', filieres: ['terminale-generale'], matiere: 'physique-chimie', epreuve: 'Spécialité physique-chimie', themes: ['mecanique', 'ondes', 'chimie'], chapitres: ['Mouvement et forces', 'Ondes et signaux', 'Acide-base', 'Cinétique chimique'], mots: ['seconde loi de Newton', 'dosage', 'interférences'], difficulte: 'standard' },
      { banque: 'bac-nsi', banqueLabel: 'Bac NSI', filieres: ['terminale-generale'], matiere: 'nsi', epreuve: 'Numérique et sciences informatiques', themes: ['algorithmique', 'donnees'], chapitres: ['Récursivité', 'Structures de données', 'Graphes', 'Bases de données', 'Programmation objet'], mots: ['pile', 'file', 'sql', 'arbre'], difficulte: 'approfondi' },
      { banque: 'bac-svt', banqueLabel: 'Bac SVT', filieres: ['terminale-generale'], matiere: 'svt', epreuve: 'Sciences de la vie et de la Terre', themes: ['biologie', 'geologie'], chapitres: ['Génétique', 'Évolution', 'Climat', 'Immunologie', 'Géodynamique'], mots: ['brassage génétique', 'vaccination', 'paléoclimat'], difficulte: 'standard' },
      { banque: 'bac-francais', banqueLabel: 'Bac français', filieres: ['premiere-generale', 'premiere-technologique'], matiere: 'francais', epreuve: 'Écrit et oral de français', themes: ['lecture', 'argumentation'], chapitres: ['Commentaire composé', 'Dissertation', 'Explication linéaire', 'Contraction de texte'], mots: ['procédé', 'problématique', 'parcours associé'], difficulte: 'progressif' },
      { banque: 'bac-philo', banqueLabel: 'Bac philosophie', filieres: ['terminale-generale', 'terminale-technologique'], matiere: 'philosophie', epreuve: 'Philosophie', themes: ['dissertation', 'explication'], chapitres: ['La conscience', 'La liberté', 'La justice', 'La vérité', 'Le devoir'], mots: ['concept', 'auteur', 'exemple', 'thèse'], difficulte: 'standard' },
      { banque: 'bac-technologique', banqueLabel: 'Bac technologique', filieres: ['terminale-technologique'], matiere: 'maths', epreuve: 'Mathématiques technologiques', themes: ['analyse', 'statistiques'], chapitres: ['Fonctions', 'Suites', 'Statistiques', 'Probabilités', 'Algorithmique'], mots: ['tableur', 'variation', 'pourcentage'], difficulte: 'progressif' },
      { banque: 'bac-centres-etrangers', banqueLabel: 'Centres étrangers', filieres: ['terminale-generale'], matiere: 'maths', epreuve: 'Spécialité mathématiques', themes: ['analyse', 'geometrie'], chapitres: ['Géométrie dans l\'espace', 'Logarithme', 'Exponentielle', 'Équations différentielles'], mots: ['vecteur normal', 'plan', 'primitive'], difficulte: 'approfondi' },
    ],
  },
  brevet: {
    from: 2006,
    to: 2025,
    resultLabel: 'banque brevet',
    resultPlural: 'banques brevet',
    emptyTitle: 'Aucune banque brevet trouvée.',
    emptyText: 'Essayez une matière du DNB, un chapitre ou une année plus large.',
    catalog: {
      maths: [
        'Calcul numérique', 'Fractions', 'Puissances', 'Racines carrées',
        'Proportionnalité', 'Pourcentages', 'Équations', 'Inéquations',
        'Programmes de calcul', 'Fonctions linéaires', 'Fonctions affines',
        'Lecture de graphique', 'Statistiques', 'Probabilités', 'Algorithmique',
        'Scratch', 'Théorème de Pythagore', 'Théorème de Thalès', 'Trigonométrie',
        'Géométrie plane', 'Transformations', 'Aires et périmètres', 'Volumes',
        'Repérage dans le plan',
      ],
      francais: [
        'Compréhension de texte', 'Analyse d\'image', 'Grammaire', 'Conjugaison',
        'Orthographe', 'Dictée', 'Réécriture', 'Rédaction', 'Sujet d\'imagination',
        'Sujet de réflexion', 'Figures de style', 'Point de vue', 'Valeurs des temps',
        'Accords', 'Vocabulaire',
      ],
      'histoire-geo-emc': [
        'Repères historiques', 'Première Guerre mondiale', 'Seconde Guerre mondiale',
        'Guerre froide', 'Décolonisation', 'Ve République', 'Développement construit',
        'Croquis', 'Mondialisation', 'Aires urbaines', 'Territoires français',
        'Union européenne', 'Citoyenneté', 'Valeurs de la République',
        'Laïcité', 'Institutions',
      ],
      sciences: [
        'Électricité', 'Mouvements', 'Forces', 'Énergie', 'Signaux',
        'Organisation du vivant', 'Corps humain', 'Nutrition', 'Reproduction',
        'Micro-organismes', 'Écosystèmes', 'Planète Terre', 'Météorologie',
        'Objets techniques', 'Chaîne d\'énergie', 'Chaîne d\'information',
        'Matériaux', 'Programmation',
      ],
    },
    templates: [
      { banque: 'dnb-metropole', banqueLabel: 'DNB Métropole', filieres: ['troisieme-generale'], matiere: 'maths', epreuve: 'Mathématiques', themes: ['calcul', 'geometrie'], chapitres: ['Théorème de Pythagore', 'Théorème de Thalès', 'Équations', 'Fonctions affines', 'Probabilités'], mots: ['triangle rectangle', 'proportionnalité', 'programme de calcul'], difficulte: 'standard' },
      { banque: 'dnb-metropole', banqueLabel: 'DNB Métropole', filieres: ['troisieme-generale'], matiere: 'francais', epreuve: 'Français', themes: ['lecture', 'ecriture'], chapitres: ['Compréhension de texte', 'Dictée', 'Réécriture', 'Rédaction', 'Grammaire'], mots: ['accord', 'figure de style', 'point de vue'], difficulte: 'standard' },
      { banque: 'dnb-metropole', banqueLabel: 'DNB Métropole', filieres: ['troisieme-generale'], matiere: 'histoire-geo-emc', epreuve: 'Histoire-géographie EMC', themes: ['histoire', 'geographie', 'emc'], chapitres: ['Repères historiques', 'Développement construit', 'Géographie de la France', 'Citoyenneté'], mots: ['croquis', 'argumenter', 'valeurs de la République'], difficulte: 'progressif' },
      { banque: 'dnb-sciences', banqueLabel: 'DNB Sciences', filieres: ['troisieme-generale'], matiere: 'sciences', epreuve: 'Sciences', themes: ['svt', 'physique', 'technologie'], chapitres: ['Électricité', 'Mouvements', 'Corps humain', 'Écosystèmes', 'Objets techniques'], mots: ['énergie', 'chaîne d\'information', 'nutrition'], difficulte: 'standard' },
      { banque: 'dnb-centres-etrangers', banqueLabel: 'DNB Centres étrangers', filieres: ['troisieme-generale'], matiere: 'maths', epreuve: 'Mathématiques', themes: ['calcul', 'statistiques'], chapitres: ['Statistiques', 'Pourcentages', 'Fractions', 'Volumes', 'Algorithmique'], mots: ['moyenne', 'Scratch', 'pyramide'], difficulte: 'progressif' },
      { banque: 'dnb-amerique-nord', banqueLabel: 'DNB Amérique du Nord', filieres: ['troisieme-generale'], matiere: 'francais', epreuve: 'Français', themes: ['lecture', 'ecriture'], chapitres: ['Questions de compréhension', 'Sujet d\'imagination', 'Sujet de réflexion', 'Analyse grammaticale'], mots: ['narrateur', 'argument', 'temps verbaux'], difficulte: 'standard' },
      { banque: 'dnb-polynesie', banqueLabel: 'DNB Polynésie', filieres: ['troisieme-professionnelle'], matiere: 'maths', epreuve: 'Mathématiques série professionnelle', themes: ['calcul', 'grandeurs'], chapitres: ['Proportionnalité', 'Grandeurs composées', 'Lecture de graphique', 'Aires et volumes'], mots: ['vitesse', 'échelle', 'unité'], difficulte: 'progressif' },
    ],
  },
};

let activeConfig = ANNALES_CONFIGS.concours;
let ANNALES = [];
let CHAPTERS = [];

export function initAnnalesPage() {
  const form = document.getElementById('annales-form');
  const results = document.getElementById('annales-results');
  if (!form || !results) return;

  activeConfig = getActiveConfig();
  ANNALES = buildAnnales(activeConfig);
  CHAPTERS = getSuggestionTerms(activeConfig, ANNALES);

  const controls = {
    q: document.getElementById('annales-q'),
    filiere: document.getElementById('annales-filiere'),
    matiere: document.getElementById('annales-matiere'),
    annee: document.getElementById('annales-annee'),
    theme: document.getElementById('annales-theme'),
    difficulte: document.getElementById('annales-difficulte'),
    datalist: document.getElementById('annales-suggestions'),
    suggestBox: document.getElementById('annales-suggest-box'),
  };

  compactAnnalesLayout();
  hydrateYears(controls.annee, activeConfig);
  hydrateDatalist(controls.datalist, CHAPTERS);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    render();
  });

  Object.values(controls).forEach(control => {
    if (!control || control === controls.datalist || control === controls.suggestBox) return;
    control.addEventListener('input', () => {
      updateSuggestions(controls);
      render();
    });
    control.addEventListener('change', render);
  });

  document.querySelectorAll('[data-annales-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      controls.q.value = btn.dataset.annalesPreset || '';
      updateSuggestions(controls);
      render();
    });
  });

  updateSuggestions(controls);
  render();
}

function compactAnnalesLayout() {
  const shell = document.querySelector('.annales-search-shell');
  const head = document.querySelector('.annales-head');
  const form = document.getElementById('annales-form');
  if (!shell || !head || !form || shell.dataset.compactReady) return;

  document.body.classList.add('annales-compact-page');
  shell.dataset.compactReady = 'true';
  const kind = shell.dataset.annalesKind || 'concours';

  const intro = head.querySelector('p');
  if (intro) intro.remove();

  head.querySelector('.annales-stats')?.remove();

  const switcher = document.createElement('div');
  switcher.className = 'annales-scope-switcher';
  switcher.setAttribute('aria-label', 'Choisir un type d\'annales');
  [
    ['brevet', 'Brevet', 'annales-brevet.html'],
    ['bac', 'Bac', 'annales-bac.html'],
    ['concours', 'Concours', 'annales.html'],
  ].forEach(([id, label, href]) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    if (id === kind) link.setAttribute('aria-current', 'page');
    switcher.appendChild(link);
  });
  head.appendChild(switcher);

  const advanced = document.createElement('details');
  advanced.className = 'annales-advanced';
  advanced.innerHTML = '<summary>Affiner</summary><div class="annales-advanced-grid"></div>';
  const advancedGrid = advanced.querySelector('.annales-advanced-grid');
  const submit = form.querySelector('button[type="submit"]');
  const filterLabels = [...form.querySelectorAll('label')].filter(label => !label.classList.contains('annales-query'));
  filterLabels.forEach(label => advancedGrid.appendChild(label));
  if (submit) form.insertBefore(advanced, submit);
  else form.appendChild(advanced);
}

function getActiveConfig() {
  const kind = document.querySelector('[data-annales-kind]')?.dataset.annalesKind || 'concours';
  return ANNALES_CONFIGS[kind] || ANNALES_CONFIGS.concours;
}

function buildAnnales(config) {
  const years = Array.from({ length: config.to - config.from + 1 }, (_, index) => config.to - index);
  const list = [];
  years.forEach((annee, yearIndex) => {
    config.templates.forEach((template, templateIndex) => {
      const filiere = template.filieres[(yearIndex + templateIndex) % template.filieres.length];
      const chapitres = getIndexedChapters(config, template);
      const focus = template.chapitres[(yearIndex + templateIndex) % template.chapitres.length];
      list.push({
        id: `${template.banque}-${template.matiere}-${filiere}-${annee}-${templateIndex}`,
        annee,
        filiere,
        matiere: template.matiere,
        banque: template.banque,
        banqueLabel: template.banqueLabel,
        epreuve: template.epreuve,
        titre: `${template.banqueLabel} ${labelFiliere(filiere)} ${annee} - ${template.epreuve}`,
        themes: template.themes,
        chapitres,
        focus,
        mots: [...template.mots, ...chapitres, ...template.themes],
        difficulte: template.difficulte,
        statut: yearIndex < 2 ? 'À indexer' : 'Indexé',
        source: buildSourceLinks(template, filiere, annee),
      });
    });
  });
  return list;
}

function getIndexedChapters(config, template) {
  return uniqueTerms([
    ...(template.chapitres || []),
    ...(config.catalog?.[template.matiere] || []),
  ]);
}

function getSuggestionTerms(config, annales) {
  return uniqueTerms([
    ...Object.values(config.catalog || {}).flat(),
    ...annales.flatMap(item => [
      item.banqueLabel,
      item.epreuve,
      labelFiliere(item.filiere),
      labelMatiere(item.matiere),
      ...item.chapitres,
      ...item.mots,
    ]),
  ]).sort((a, b) => a.localeCompare(b));
}

function buildSourceLinks(template, filiere, annee) {
  if (!template.docSolusConcours || !template.docSolusEpreuve || template.matiere !== 'maths') return null;
  const code = `${String(filiere).toUpperCase()}_MATHS_${template.docSolusConcours}_${template.docSolusEpreuve}_${annee}`;
  return {
    label: 'Doc-Solus',
    detailUrl: `https://www.doc-solus.fr/prepa/sci/adc/bin/view.corrige.html?q=${encodeURIComponent(code)}`,
  };
}

function renderSourceLink() {
  if (!activeConfig.source?.url) return '';
  return ` · <a class="annales-source-link" href="${activeConfig.source.url}" target="_blank" rel="noopener">${activeConfig.source.label}</a>`;
}

function render(openBank = '') {
  const controls = {
    q: document.getElementById('annales-q'),
    filiere: document.getElementById('annales-filiere'),
    matiere: document.getElementById('annales-matiere'),
    annee: document.getElementById('annales-annee'),
    theme: document.getElementById('annales-theme'),
    difficulte: document.getElementById('annales-difficulte'),
  };
  const results = document.getElementById('annales-results');
  const query = normalize(controls.q?.value || '');
  const terms = getSearchTerms(query);
  const filters = {
    filiere: controls.filiere?.value || '',
    matiere: controls.matiere?.value || '',
    annee: controls.annee?.value || '',
    theme: controls.theme?.value || '',
    difficulte: controls.difficulte?.value || '',
  };
  const rows = ANNALES
    .map(item => ({ item, score: scoreAnnale(item, terms) }))
    .filter(({ item, score }) => {
      if (terms.length && score === 0) return false;
      if (filters.filiere && item.filiere !== filters.filiere) return false;
      if (filters.matiere && item.matiere !== filters.matiere) return false;
      if (filters.annee && String(item.annee) !== filters.annee) return false;
      if (filters.theme && !item.themes.includes(filters.theme)) return false;
      if (filters.difficulte && item.difficulte !== filters.difficulte) return false;
      return true;
    });

  const banks = groupByBank(rows);
  if (!banks.length) {
    results.innerHTML = `<div class="annales-empty"><strong>${activeConfig.emptyTitle}</strong><span>${activeConfig.emptyText}</span></div>`;
    return;
  }

  results.innerHTML = `
    <div class="annales-result-head">
      <strong>${banks.length} ${banks.length > 1 ? activeConfig.resultPlural : activeConfig.resultLabel}</strong>
      <span>${rows.length} sujet${rows.length > 1 ? 's' : ''} correspondant${rows.length > 1 ? 's' : ''}${renderSourceLink()}</span>
    </div>
    <div class="annales-bank-grid">
      ${banks.map(bank => renderBank(bank, bank.id === openBank)).join('')}
    </div>`;

  results.querySelectorAll('[data-open-bank]').forEach(btn => {
    btn.addEventListener('click', () => {
      const bank = btn.dataset.openBank;
      const currentlyOpen = btn.closest('.annales-bank-card')?.classList.contains('open');
      render(currentlyOpen ? '' : bank);
    });
  });
}

function groupByBank(rows) {
  const map = new Map();
  rows.forEach(({ item, score }) => {
    if (!map.has(item.banque)) {
      map.set(item.banque, { id: item.banque, label: item.banqueLabel, items: [], score: 0 });
    }
    const bank = map.get(item.banque);
    bank.items.push({ item, score });
    bank.score += score || 1;
  });
  return [...map.values()]
    .map(bank => ({
      ...bank,
      filieres: [...new Set(bank.items.map(({ item }) => labelFiliere(item.filiere)))],
      matieres: [...new Set(bank.items.map(({ item }) => labelMatiere(item.matiere)))],
      chapitres: [...new Set(bank.items.flatMap(({ item }) => item.chapitres))].slice(0, 3),
      years: bank.items.map(({ item }) => item.annee),
    }))
    .sort((a, b) => b.score - a.score || b.items.length - a.items.length);
}

function renderBank(bank, open) {
  const minYear = Math.min(...bank.years);
  const maxYear = Math.max(...bank.years);
  const subjects = bank.items
    .sort((a, b) => b.score - a.score || b.item.annee - a.item.annee)
    .map(({ item, score }) => renderSubject(item, score))
    .join('');
  return `
    <article class="annales-bank-card ${open ? 'open' : ''}">
      <button type="button" data-open-bank="${bank.id}" class="annales-bank-main">
        <span class="annales-bank-code">${bank.label}</span>
        <strong>${bank.items.length} sujet${bank.items.length > 1 ? 's' : ''} disponible${bank.items.length > 1 ? 's' : ''}</strong>
        <small>${minYear}-${maxYear} · ${bank.filieres.join(', ')} · ${bank.matieres.join(', ')}</small>
        <span class="annales-bank-topics">${bank.chapitres.map(chapitre => `<em>${chapitre}</em>`).join('')}</span>
      </button>
      <div class="annales-bank-subjects">
        ${subjects}
      </div>
    </article>`;
}

function renderSubject(item, score) {
  const sourceAction = item.source?.pdfUrl
    ? `<a class="annale-open" href="${item.source.pdfUrl}" target="_blank" rel="noopener">Énoncé PDF</a>`
    : item.source?.detailUrl
      ? `<a class="annale-open" href="${item.source.detailUrl}" target="_blank" rel="noopener">Fiche source</a>`
      : '<button type="button" disabled>PDF à relier</button>';
  const sourceLabel = item.source?.label ? ` · ${item.source.label}` : '';
  return `
    <div class="annale-subject-row">
      <div>
        <strong>${item.titre}</strong>
        <span>${item.focus} · ${labelDifficulty(item.difficulte)} · ${item.statut}${sourceLabel}</span>
      </div>
      <span>${score || '—'} pertinence</span>
      ${sourceAction}
    </div>`;
}

function updateSuggestions(controls) {
  const value = normalize(controls.q?.value || '');
  if (!value || value.length < 2) {
    controls.suggestBox.innerHTML = '';
    return;
  }
  const matches = CHAPTERS
    .filter(chapter => normalize(chapter).includes(value))
    .slice(0, 8);
  controls.suggestBox.innerHTML = matches.map(chapter =>
    `<button type="button" data-chapter="${escapeAttr(chapter)}">${chapter}</button>`
  ).join('');
  controls.suggestBox.querySelectorAll('[data-chapter]').forEach(btn => {
    btn.addEventListener('click', () => {
      controls.q.value = btn.dataset.chapter || '';
      updateSuggestions(controls);
      render();
    });
  });
}

function hydrateDatalist(datalist, chapters) {
  if (!datalist) return;
  datalist.innerHTML = chapters.map(chapter => `<option value="${escapeAttr(chapter)}"></option>`).join('');
}

function hydrateYears(select, config) {
  if (!select || select.dataset.ready) return;
  for (let year = config.to; year >= config.from; year -= 1) {
    const option = document.createElement('option');
    option.value = String(year);
    option.textContent = String(year);
    select.appendChild(option);
  }
  select.dataset.ready = 'true';
}

function scoreAnnale(item, terms) {
  if (!terms.length) return 1;
  const haystack = normalize([item.titre, item.epreuve, item.banqueLabel, item.filiere, item.matiere, item.focus, item.difficulte, ...item.themes, ...item.chapitres, ...item.mots].join(' '));
  if (terms.some(term => !haystack.includes(term))) return 0;
  return terms.reduce((score, term) => {
    if (normalize(item.focus).includes(term)) return score + 6;
    if (item.chapitres.some(chapitre => normalize(chapitre).includes(term))) return score + 5;
    if (item.themes.some(theme => normalize(theme).includes(term))) return score + 4;
    return score + 2;
  }, 0);
}

function getSearchTerms(query) {
  const stopWords = new Set(['de', 'du', 'des', 'd', 'la', 'le', 'les', 'l', 'et', 'en', 'a', 'au', 'aux']);
  return query
    .split(/[\s'’.-]+/)
    .map(term => term.trim())
    .filter(term => term && !stopWords.has(term));
}

function labelFiliere(value) {
  return {
    mp: 'MP',
    pc: 'PC',
    psi: 'PSI',
    pt: 'PT',
    mpi: 'MPI',
    bcpst: 'BCPST',
    'premiere-generale': 'Première générale',
    'premiere-technologique': 'Première technologique',
    'terminale-generale': 'Terminale générale',
    'terminale-technologique': 'Terminale technologique',
    'troisieme-generale': '3e générale',
    'troisieme-professionnelle': '3e professionnelle',
  }[value] || value;
}

function labelMatiere(value) {
  return {
    maths: 'Mathématiques',
    physique: 'Physique',
    chimie: 'Chimie',
    'physique-chimie': 'Physique-chimie',
    info: 'Informatique',
    nsi: 'NSI',
    si: 'SI',
    svt: 'SVT',
    francais: 'Français',
    philosophie: 'Philosophie',
    'histoire-geo-emc': 'Histoire-géo EMC',
    sciences: 'Sciences',
  }[value] || value;
}

function labelDifficulty(value) {
  return {
    progressif: 'Progressif',
    standard: 'Standard',
    selectif: 'Très sélectif',
    approfondi: 'Approfondi',
  }[value] || value;
}

function normalize(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function uniqueTerms(values) {
  const map = new Map();
  values
    .map(value => String(value || '').trim())
    .filter(Boolean)
    .forEach(value => {
      const key = normalize(value);
      if (!map.has(key)) map.set(key, value);
    });
  return [...map.values()];
}

function escapeAttr(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
