// Méthodes éditoriales ajoutées à la main.
//
// Cette graine remplace l'ancien remplissage automatique "une méthode par
// chapitre". On préfère moins de méthodes, mais chacune doit être exploitable
// par un élève : situation d'usage, procédure, erreurs classiques, contrôle.

function getAll(db, sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function getOne(db, sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return row;
}

function lastId(db) {
  return getOne(db, 'SELECT last_insert_rowid() AS id')?.id ?? null;
}

function ensureTables(db) {
  db.run(`CREATE TABLE IF NOT EXISTS carte_methodes (
    carte_id INTEGER NOT NULL REFERENCES cartes(id),
    methode_id INTEGER NOT NULL REFERENCES methodes(id),
    ordre INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (carte_id, methode_id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS _generated_methodes (
    chapitre_id TEXT PRIMARY KEY,
    methode_id INTEGER NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS _generated_pair_methodes (
    filiere_id TEXT NOT NULL,
    matiere_id TEXT NOT NULL,
    methode_id INTEGER NOT NULL,
    PRIMARY KEY (filiere_id, matiere_id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS _curated_methodes (
    key TEXT PRIMARY KEY,
    methode_id INTEGER NOT NULL
  )`);
}

function cleanupAutomaticMethodes(db) {
  for (const table of ['_generated_methodes', '_generated_pair_methodes']) {
    let rows = [];
    try { rows = getAll(db, `SELECT methode_id FROM ${table}`); } catch {}
    for (const row of rows) {
      db.run('DELETE FROM carte_methodes WHERE methode_id = ?', [row.methode_id]);
      db.run('DELETE FROM filiere_methodes WHERE methode_id = ?', [row.methode_id]);
      db.run('DELETE FROM methodes WHERE id = ?', [row.methode_id]);
    }
    try { db.run(`DELETE FROM ${table}`); } catch {}
  }
}

function chapterFilieres(db, chapitreId) {
  return getAll(db, `
    SELECT filiere_id
    FROM filiere_chapitres
    WHERE chapitre_id = ?
    ORDER BY ordre
  `, [chapitreId]).map(row => row.filiere_id);
}

function firstCardId(db, chapitreId, preferredTitle = '') {
  if (preferredTitle) {
    const preferred = getOne(db, `
      SELECT c.id
      FROM cartes c
      JOIN sections s ON s.id = c.section_id
      WHERE s.chapitre_id = ? AND c.titre = ?
      ORDER BY s.ordre, c.ordre
      LIMIT 1
    `, [chapitreId, preferredTitle]);
    if (preferred) return preferred.id;
  }
  return getOne(db, `
    SELECT c.id
    FROM cartes c
    JOIN sections s ON s.id = c.section_id
    WHERE s.chapitre_id = ?
      AND c.type NOT IN ('ex', 'exo', 'exercice')
    ORDER BY s.ordre, c.ordre
    LIMIT 1
  `, [chapitreId])?.id ?? null;
}

function existingCuratedId(db, key) {
  const row = getOne(db, 'SELECT methode_id FROM _curated_methodes WHERE key = ?', [key]);
  if (!row) return null;
  const exists = getOne(db, 'SELECT id FROM methodes WHERE id = ?', [row.methode_id]);
  return exists ? row.methode_id : null;
}

function steps(items) {
  return items.map((item, index) => (
    `<div class="step"><div class="step-n">${index + 1}</div><div>${item}</div></div>`
  )).join('');
}

function warn(items) {
  return `<div class="warn"><strong>À éviter.</strong><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
}

function tip(text) {
  return `<div class="tip">${text}</div>`;
}

const CURATED_METHODES = [
  {
    key: 'ph-meca-choisir-theoreme',
    matiere: 'ph',
    chapitreId: 'ph-meca',
    categorie: 'Mécanique',
    type: 'methode',
    titre: 'Choisir entre PFD, énergie et moment cinétique',
    contenu: `
      <p><strong>But.</strong> Devant un exercice de mécanique, choisir l'outil qui réduit vraiment le calcul.</p>
      ${steps([
        '<strong>PFD.</strong> À privilégier si l’on cherche une accélération, une équation horaire, une tension ou une réaction. Toujours commencer par système, référentiel, bilan des forces.',
        '<strong>Énergie.</strong> À privilégier si l’on cherche une vitesse, une hauteur, une position extrême ou une condition d’accès. Elle évite souvent les réactions normales, qui ne travaillent pas.',
        '<strong>Moment cinétique.</strong> À privilégier si le mouvement tourne autour d’un point ou d’un axe, ou si la force centrale rend le moment nul.',
        '<strong>Contrôle.</strong> Si ton équation contient une force inconnue inutile, c’est souvent que tu n’as pas choisi le bon théorème.',
      ])}
      ${warn([
        'Projeter le PFD avant d’avoir choisi les axes.',
        'Utiliser l’énergie si une force non conservative travaille sans la prendre en compte.',
        'Appliquer le moment cinétique en oubliant le point par rapport auquel on calcule le moment.',
      ])}
      ${tip('Réflexe concours : si une réaction de support bloque le calcul, essayer un bilan énergétique ou un moment autour du point de contact.')}
    `,
    ordre: 120001,
  },
  {
    key: 'ph-newton-forces-centrales',
    matiere: 'ph',
    chapitreId: 'ph-newton',
    categorie: 'Mécanique',
    type: 'methode',
    titre: 'Traiter un mouvement à force centrale',
    contenu: `
      <p><strong>But.</strong> Exploiter immédiatement les deux conservations qui simplifient les mouvements planétaires ou coulombiens.</p>
      ${steps([
        'Vérifier que la force est de la forme $f(r)\\vec u_r$ : elle passe par un centre fixe.',
        'Écrire la conservation du moment cinétique : le mouvement est plan et $C=r^2\\dot\\theta$ est constant.',
        'Passer à l’énergie potentielle effective : $E_M=\\frac12 m\\dot r^2+E_{p,eff}(r)$. C’est l’outil pour discuter les rayons accessibles.',
        'Si l’on demande la trajectoire, utiliser Binet ou reconnaître directement la conique dans le cas newtonien.',
      ])}
      ${warn([
        'Écrire une trajectoire conique sans préciser foyer, paramètre et excentricité.',
        'Confondre vitesse aréolaire et vitesse linéaire.',
        'Oublier que l’énergie effective sert d’abord à discuter le mouvement radial.',
      ])}
      ${tip('Lecture rapide : moment cinétique pour la géométrie du mouvement, énergie effective pour savoir où le mobile peut aller.')}
    `,
    ordre: 120002,
  },
  {
    key: 'ph-circ-transitoire',
    matiere: 'ph',
    chapitreId: 'ph-circ',
    categorie: 'Électricité',
    type: 'methode',
    titre: 'Résoudre un transitoire RC ou RL',
    contenu: `
      <p><strong>But.</strong> Passer proprement du circuit réel à une équation différentielle exploitable.</p>
      ${steps([
        'Choisir la grandeur continue : tension du condensateur pour RC, courant de la bobine pour RL.',
        'Écrire la loi des mailles ou des nœuds avec les conventions de signe fixées sur le schéma.',
        'Mettre sous forme canonique : $\\tau y\\prime + y = y_\\infty$ ou $y\\prime + \\frac1\\tau y = \\frac{y_\\infty}{\\tau}$.',
        'Déterminer $y(0^+)$ par continuité, puis écrire $y(t)=y_\\infty+(y(0^+)-y_\\infty)e^{-t/\\tau}$.',
      ])}
      ${warn([
        'Dire que la tension d’une bobine est continue : c’est le courant qui l’est.',
        'Oublier de calculer la valeur finale avant d’écrire la solution.',
        'Changer le sens du courant entre le schéma et l’équation.',
      ])}
      ${tip('Si tu connais $y(0^+)$, $y_\\infty$ et $\\tau$, tu as déjà presque toute la solution.')}
    `,
    ordre: 120003,
  },
  {
    key: 'ph-elec-gauss',
    matiere: 'ph',
    chapitreId: 'ph-elec',
    categorie: 'Électromagnétisme',
    type: 'methode',
    titre: 'Utiliser Gauss sans faire de calcul inutile',
    contenu: `
      <p><strong>But.</strong> Savoir quand le théorème de Gauss donne directement le champ.</p>
      ${steps([
        'Identifier les invariances de la distribution : translation, rotation, symétrie sphérique, cylindrique ou plane.',
        'Déduire la direction du champ et les variables dont il dépend avant de choisir la surface.',
        'Choisir une surface de Gauss où $\\vec E\\cdot d\\vec S$ est constant ou nul sur chaque morceau.',
        'Écrire flux sortant = charge intérieure / $\\varepsilon_0$, puis isoler $E$.',
      ])}
      ${warn([
        'Utiliser Gauss alors que le champ n’est pas constant sur la surface choisie.',
        'Oublier les morceaux de surface où le flux est nul.',
        'Confondre charge intérieure et charge totale de la distribution.',
      ])}
      ${tip('Gauss n’est pas seulement une formule : c’est d’abord un raisonnement de symétrie.')}
    `,
    ordre: 120004,
  },
  {
    key: 'ph-mag-ampere',
    matiere: 'ph',
    chapitreId: 'ph-mag',
    categorie: 'Électromagnétisme',
    type: 'methode',
    titre: 'Choisir un contour d’Ampère',
    contenu: `
      <p><strong>But.</strong> Trouver un contour où la circulation de $\\vec B$ se calcule en une ligne.</p>
      ${steps([
        'Repérer les invariances de la distribution de courant et les plans de symétrie/antisymétrie.',
        'Déduire la direction de $\\vec B$ et sa dépendance spatiale.',
        'Choisir un contour fermé tangent au champ sur les portions utiles, et orthogonal ou nul ailleurs.',
        'Calculer le courant enlacé avec son signe, puis écrire $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I_{enlacé}$.',
      ])}
      ${warn([
        'Prendre un contour “joli” mais sur lequel $B$ n’est pas constant.',
        'Oublier le signe du courant enlacé.',
        'Appliquer Ampère à une situation sans symétrie exploitable.',
      ])}
      ${tip('Solénoïde, fil infini, tore : si tu peux deviner la direction du champ, Ampère devient très court.')}
    `,
    ordre: 120005,
  },
  {
    key: 'ph-ondes-phase',
    matiere: 'ph',
    chapitreId: 'ph-ondes',
    categorie: 'Ondes',
    type: 'methode',
    titre: 'Lire une onde par sa phase',
    contenu: `
      <p><strong>But.</strong> Extraire sens de propagation, longueur d’onde, vitesse et déphasage sans se perdre dans l’expression.</p>
      ${steps([
        'Mettre l’onde sous forme $A\\cos(\\omega t-kx+\\varphi)$ ou équivalent.',
        'La phase constante donne le sens de propagation : si $\\omega t-kx$ est constant, $x$ augmente quand $t$ augmente.',
        'Lire $T=2\\pi/\\omega$, $\\lambda=2\\pi/k$ et $v_\\varphi=\\omega/k$.',
        'Pour comparer deux points ou deux ondes, calculer la différence de phase, puis traduire en interférence constructive/destructive si besoin.',
      ])}
      ${warn([
        'Confondre le signe devant $kx$ et le sens de propagation.',
        'Mélanger période temporelle et longueur d’onde.',
        'Comparer les amplitudes avant d’avoir comparé les phases.',
      ])}
      ${tip('La phase est la carte d’identité de l’onde : sens, périodicité et déphasage y sont déjà écrits.')}
    `,
    ordre: 120006,
  },
  {
    key: 'ph-opt-lentilles',
    matiere: 'ph',
    chapitreId: 'ph-opt',
    categorie: 'Optique',
    type: 'methode',
    titre: 'Construire et vérifier une image par lentille mince',
    contenu: `
      <p><strong>But.</strong> Éviter les erreurs de signe en optique géométrique.</p>
      ${steps([
        'Faire un schéma orienté : axe, centre optique $O$, foyers $F$ et $F’$, objet $AB$.',
        'Construire deux rayons remarquables : rayon passant par $O$, rayon parallèle à l’axe puis passant par $F’$.',
        'Écrire ensuite seulement la relation de conjugaison avec les longueurs algébriques.',
        'Comparer calcul et schéma : image réelle/virtuelle, droite/renversée, grandissement cohérent.',
      ])}
      ${warn([
        'Utiliser des distances positives sans convention algébrique.',
        'Oublier que le schéma doit prédire le signe du grandissement.',
        'Appliquer la formule avant d’avoir placé objet et foyers.',
      ])}
      ${tip('En optique, le schéma n’est pas décoratif : c’est le premier contrôle du calcul.')}
    `,
    ordre: 120007,
  },
  {
    key: 'ph-thermo-bilan',
    matiere: 'ph',
    chapitreId: 'ph-thermo',
    categorie: 'Thermodynamique',
    type: 'methode',
    titre: 'Faire un bilan thermodynamique propre',
    contenu: `
      <p><strong>But.</strong> Poser un problème de thermo sans mélanger chaleur, travail et énergie interne.</p>
      ${steps([
        'Définir le système : gaz, fluide, solide, machine, thermostat. Préciser s’il est fermé ou ouvert.',
        'Identifier la transformation : isotherme, isobare, adiabatique, isochore, cycle ou transformation quelconque.',
        'Écrire le premier principe avec une convention de signe constante : $\\Delta U = W + Q$ ou l’équivalent choisi.',
        'Ajouter les relations d’état et contraintes seulement après le bilan.',
      ])}
      ${warn([
        'Dire “adiabatique” et garder un échange thermique non nul.',
        'Confondre température et énergie interne.',
        'Utiliser une formule de gaz parfait sans vérifier le modèle.',
      ])}
      ${tip('Le bilan vient avant les formules : système, transformation, échanges, puis calcul.')}
    `,
    ordre: 120008,
  },
  {
    key: 'ch-redox-equilibrer',
    matiere: 'ch',
    chapitreId: 'ch-ch-redox',
    categorie: 'Chimie',
    type: 'methode',
    titre: 'Équilibrer une réaction d’oxydoréduction',
    contenu: `
      <p><strong>But.</strong> Obtenir une équation juste sans bricoler les coefficients.</p>
      ${steps([
        'Identifier les couples oxydant/réducteur et écrire les deux demi-équations séparément.',
        'Équilibrer les atomes autres que O et H, puis O avec $H_2O$, H avec $H^+$ en milieu acide.',
        'Équilibrer les charges avec les électrons.',
        'Multiplier les demi-équations pour échanger le même nombre d’électrons, additionner, simplifier.',
      ])}
      ${warn([
        'Équilibrer les charges avant les atomes.',
        'Oublier de simplifier les électrons ou l’eau.',
        'Utiliser $H^+$ en milieu basique sans transformer ensuite avec $OH^-$.',
      ])}
      ${tip('Une demi-équation redox est correcte si les atomes ET les charges sont équilibrés.')}
    `,
    ordre: 120009,
  },
  {
    key: 'ch-cinetique-ordre',
    matiere: 'ch',
    chapitreId: 'ch-ch-cinetique',
    categorie: 'Chimie',
    type: 'methode',
    titre: 'Reconnaître un ordre de réaction expérimentalement',
    contenu: `
      <p><strong>But.</strong> Passer de mesures de concentration à une loi de vitesse fiable.</p>
      ${steps([
        'Tracer ou tester les formes intégrées : $[A]$ pour ordre 0, $\\ln[A]$ pour ordre 1, $1/[A]$ pour ordre 2.',
        'Chercher la représentation la plus linéaire, pas celle qui arrange le résultat attendu.',
        'Lire la pente pour obtenir la constante de vitesse avec son unité.',
        'Vérifier la cohérence sur le temps de demi-réaction.',
      ])}
      ${warn([
        'Confondre vitesse initiale et vitesse moyenne.',
        'Oublier que l’unité de $k$ dépend de l’ordre.',
        'Conclure sur deux points seulement sans regarder la linéarité globale.',
      ])}
      ${tip('Une loi de vitesse se reconnaît souvent mieux par la bonne droite que par la formule brute.')}
    `,
    ordre: 120010,
  },
  {
    key: 'si-asserv-stabilite',
    matiere: 'si',
    chapitreId: 'si-asservi',
    categorie: 'Automatique',
    type: 'methode',
    titre: 'Analyser une boucle asservie',
    contenu: `
      <p><strong>But.</strong> Relier schéma-bloc, fonction de transfert et performances.</p>
      ${steps([
        'Identifier entrée, sortie, consigne, perturbation, chaîne directe et retour.',
        'Écrire la fonction de transfert en boucle fermée avant d’interpréter les courbes.',
        'Étudier séparément stabilité, précision, rapidité et dépassement.',
        'Relier chaque résultat au cahier des charges : erreur statique, temps de réponse, marge de phase.',
      ])}
      ${warn([
        'Confondre boucle ouverte et boucle fermée.',
        'Parler de rapidité sans préciser le temps de réponse.',
        'Oublier qu’un correcteur améliore souvent un critère au prix d’un autre.',
      ])}
      ${tip('La bonne copie ne dit pas seulement “stable” : elle explique quelle marge et quelle performance sont obtenues.')}
    `,
    ordre: 120011,
  },
  {
    key: 'info-graphes-parcours',
    matiere: 'info',
    chapitreId: 'info-graphes',
    categorie: 'Algorithmique',
    type: 'methode',
    titre: 'Choisir entre BFS, DFS et Dijkstra',
    contenu: `
      <p><strong>But.</strong> Choisir le bon parcours de graphe au lieu d’appliquer toujours le même.</p>
      ${steps([
        '<strong>BFS.</strong> Graphe non pondéré, plus court nombre d’arêtes, exploration par couches avec une file.',
        '<strong>DFS.</strong> Détection de cycles, composantes, tri topologique, exploration profonde avec pile ou récursion.',
        '<strong>Dijkstra.</strong> Plus courts chemins avec poids positifs, file de priorité, distances relâchées.',
        'Toujours préciser ce que représentent les sommets et les arêtes dans le problème réel.',
      ])}
      ${warn([
        'Utiliser Dijkstra avec des poids négatifs.',
        'Marquer un sommet trop tard et le visiter inutilement plusieurs fois.',
        'Oublier les graphes non connexes.',
      ])}
      ${tip('Avant le code, écris : “je cherche une distance, une dépendance, un cycle ou une composante ?”')}
    `,
    ordre: 120012,
  },
  {
    key: 'ma-lycee-second-degre',
    matiere: 'ma',
    chapitreId: 'ma-1e-second-degre',
    categorie: 'Lycée - algèbre',
    type: 'methode',
    titre: 'Choisir la bonne forme d’un trinôme',
    contenu: `
      <p><strong>But.</strong> Ne pas développer par réflexe : choisir entre forme développée, factorisée et canonique.</p>
      ${steps([
        'Pour calculer une image ou identifier les coefficients : forme développée $ax^2+bx+c$.',
        'Pour résoudre $f(x)=0$ ou étudier le signe : forme factorisée si elle existe.',
        'Pour lire un extremum ou un axe de symétrie : forme canonique $a(x-\\alpha)^2+\\beta$.',
        'Vérifier le résultat graphiquement : sens de la parabole, zéros, sommet.',
      ])}
      ${warn([
        'Calculer un discriminant alors qu’une factorisation évidente existe.',
        'Oublier que le signe dépend du signe de $a$.',
        'Confondre sommet et racines.',
      ])}
      ${tip('Un trinôme n’a pas une forme “meilleure” : il a une forme adaptée à la question.')}
    `,
    ordre: 120013,
  },
  {
    key: 'svt-genetique-doc',
    matiere: 'svt',
    chapitreId: 'svt-1e-adn-replication',
    categorie: 'SVT',
    type: 'methode',
    titre: 'Exploiter un document de génétique',
    contenu: `
      <p><strong>But.</strong> Transformer un document biologique en explication, pas seulement en description.</p>
      ${steps([
        'Identifier l’échelle : molécule d’ADN, chromosome, cellule, organisme ou population.',
        'Relever un fait mesurable ou observable : quantité d’ADN, séquence, phénotype, proportion.',
        'Relier ce fait au mécanisme du cours : réplication, mutation, division, expression d’un gène.',
        'Conclure en une chaîne cause → mécanisme → conséquence.',
      ])}
      ${warn([
        'Confondre observation et interprétation.',
        'Dire “l’ADN change” sans préciser mutation, réplication ou expression.',
        'Oublier de citer précisément l’indice du document.',
      ])}
      ${tip('Phrase utile : “On observe que..., donc on peut en déduire que..., car le cours indique que...”')}
    `,
    ordre: 120014,
  },
  {
    key: 'hg-developpement-construit',
    matiere: 'hg',
    chapitreId: 'hg-3e-sgm',
    categorie: 'Histoire-Géographie',
    type: 'methode',
    titre: 'Construire un développement historique',
    contenu: `
      <p><strong>But.</strong> Répondre à une question d’histoire sans réciter tout le chapitre.</p>
      ${steps([
        'Transformer la consigne en question simple : “pourquoi ?”, “comment ?”, “quelles conséquences ?”.',
        'Choisir deux ou trois idées seulement, chacune avec un repère précis : date, acteur, lieu, exemple.',
        'Organiser chronologiquement si le sujet raconte une évolution ; thématiquement si le sujet compare.',
        'Conclure en reprenant les mots de la question.',
      ])}
      ${warn([
        'Faire une liste de dates sans expliquer.',
        'Raconter tout le chapitre au lieu de sélectionner.',
        'Oublier les civils, les espaces ou les conséquences selon le sujet.',
      ])}
      ${tip('Une bonne réponse d’histoire tient sur une colonne claire : idée → exemple → explication.')}
    `,
    ordre: 120015,
  },
  {
    key: 'fr-analyse-figure',
    matiere: 'fr',
    chapitreId: 'fr-3e-figures',
    categorie: 'Français',
    type: 'methode',
    titre: 'Analyser une figure de style sans se limiter à la nommer',
    contenu: `
      <p><strong>But.</strong> Passer de “il y a une métaphore” à une vraie interprétation.</p>
      ${steps([
        'Citer un court passage, pas une ligne entière si quelques mots suffisent.',
        'Nommer le procédé : comparaison, métaphore, personnification, hyperbole, antithèse, anaphore...',
        'Expliquer le rapprochement ou l’effet produit : insistance, émotion, violence, beauté, opposition.',
        'Relier cet effet au sens du texte ou au sentiment du personnage.',
      ])}
      ${warn([
        'Nommer une figure sans commentaire.',
        'Citer trop longuement.',
        'Inventer une interprétation sans lien avec les mots cités.',
      ])}
      ${tip('Formule simple : “Cette figure insiste sur... car elle rapproche... de...”')}
    `,
    ordre: 120016,
  },
  {
    key: 'ang-temps-choisir',
    matiere: 'ang',
    chapitreId: 'ang-3e-temps',
    categorie: 'Anglais',
    type: 'methode',
    titre: 'Choisir le bon temps en anglais',
    contenu: `
      <p><strong>But.</strong> Ne plus traduire le temps français mot à mot.</p>
      ${steps([
        '<strong>Present simple.</strong> Habitude, vérité générale, routine.',
        '<strong>Present continuous.</strong> Action en cours ou situation temporaire.',
        '<strong>Preterit.</strong> Action passée datée, terminée, coupée du présent.',
        '<strong>Present perfect.</strong> Bilan, expérience ou action passée avec effet sur le présent.',
      ])}
      ${warn([
        'Utiliser le present perfect avec une date passée précise.',
        'Oublier le -s à la troisième personne du présent simple.',
        'Construire une question sans auxiliaire.',
      ])}
      ${tip('Question à se poser : “je parle d’une habitude, d’une action en cours, d’un passé daté ou d’un bilan présent ?”')}
    `,
    ordre: 120017,
  },
  {
    key: 'ph-vect-coordonnees',
    matiere: 'ph',
    chapitreId: 'ph-vect',
    categorie: 'Physique - outils mathématiques',
    type: 'methode',
    titre: 'Choisir le bon système de coordonnées',
    contenu: `
      <p><strong>But.</strong> Éviter les calculs vectoriels lourds en choisissant des coordonnées adaptées à la géométrie.</p>
      ${steps([
        'Chercher l’invariance du problème : translation, rotation autour d’un axe, symétrie sphérique, plan privilégié.',
        'Prendre des coordonnées cartésiennes si les directions fixes dominent ; cylindriques si un axe ou une distance à un axe apparaît ; sphériques si un centre joue un rôle particulier.',
        'Écrire les vecteurs de base et les variables utiles avant de dériver.',
        'Contrôler les dimensions et les cas limites : loin du centre, sur l’axe, dans le plan de symétrie.',
      ])}
      ${warn([
        'Rester en cartésien par habitude alors que la symétrie est cylindrique ou sphérique.',
        'Dériver les vecteurs unitaires comme s’ils étaient constants en coordonnées polaires.',
        'Introduire trois variables alors qu’une seule suffit par symétrie.',
      ])}
      ${tip('Une bonne coordonnée est celle qui transforme une symétrie physique en une ligne de calcul.')}
    `,
    ordre: 120018,
  },
  {
    key: 'ph-osc-regime',
    matiere: 'ph',
    chapitreId: 'ph-osc',
    categorie: 'Physique - oscillateurs',
    type: 'methode',
    titre: 'Identifier le régime d’un oscillateur amorti',
    contenu: `
      <p><strong>But.</strong> Lire rapidement la nature du mouvement à partir de l’équation différentielle.</p>
      ${steps([
        'Mettre l’équation sous la forme canonique $x\\prime\\prime + 2\\lambda x\\prime + \\omega_0^2 x = f(t)$.',
        'Comparer $\\lambda$ et $\\omega_0$ : pseudo-périodique si $\\lambda < \\omega_0$, critique si égalité, apériodique si $\\lambda > \\omega_0$.',
        'Séparer le régime libre, qui dépend des conditions initiales, du régime forcé, qui dépend de l’excitation.',
        'Vérifier le résultat avec l’allure physique : oscillations amorties, retour monotone ou résonance.',
      ])}
      ${warn([
        'Confondre pulsation propre $\\omega_0$ et pseudo-pulsation amortie.',
        'Parler de résonance dans un régime libre sans excitation sinusoïdale.',
        'Oublier le régime transitoire dans la solution complète.',
      ])}
      ${tip('Le discriminant donne la forme mathématique ; l’allure physique doit confirmer le diagnostic.')}
    `,
    ordre: 120019,
  },
  {
    key: 'ph-indu-faraday-lenz',
    matiere: 'ph',
    chapitreId: 'ph-indu',
    categorie: 'Électromagnétisme',
    type: 'methode',
    titre: 'Poser correctement un problème d’induction',
    contenu: `
      <p><strong>But.</strong> Trouver le signe et le sens du courant induit sans tâtonner.</p>
      ${steps([
        'Choisir une orientation du contour et la garder jusqu’au bout.',
        'Calculer le flux $\\Phi=\\iint \\vec B\\cdot d\\vec S$ en cohérence avec cette orientation.',
        'Appliquer Faraday : $e=-\\frac{d\\Phi}{dt}$. Le signe obtenu est relatif au sens choisi.',
        'Interpréter avec la loi de Lenz : le courant induit s’oppose à la variation de flux, pas au champ lui-même.',
      ])}
      ${warn([
        'Changer l’orientation du contour après avoir calculé le flux.',
        'Dire que le courant “s’oppose au champ” au lieu de s’opposer à sa variation de flux.',
        'Oublier la force de Laplace quand le conducteur mobile subit une action mécanique.',
      ])}
      ${tip('En induction, un schéma orienté vaut mieux que trois phrases ambiguës sur le sens du courant.')}
    `,
    ordre: 120020,
  },
  {
    key: 'ma-series-test',
    matiere: 'ma',
    chapitreId: 'ma-series',
    categorie: 'Mathématiques - analyse',
    type: 'methode',
    titre: 'Choisir un critère de convergence pour une série',
    contenu: `
      <p><strong>But.</strong> Ne pas essayer tous les critères au hasard.</p>
      ${steps([
        'Regarder d’abord le terme général : signe constant, alternance, équivalent simple, présence de factorielle, puissance ou exponentielle.',
        'Si un équivalent à une série de référence apparaît, utiliser la comparaison ou l’équivalence.',
        'Si le terme change de signe, tester convergence absolue puis, si besoin, le critère spécial des séries alternées.',
        'Si des factorielles ou puissances d’indice apparaissent, penser au quotient ou à la racine.',
      ])}
      ${warn([
        'Oublier que le terme général doit tendre vers 0.',
        'Utiliser un équivalent avec une série à termes non positifs sans précaution.',
        'Confondre convergence absolue et convergence simple.',
      ])}
      ${tip('Le bon critère est souvent suggéré par la forme du terme général, pas par le chapitre que l’on préfère.')}
    `,
    ordre: 120021,
  },
  {
    key: 'ma-int-convergence',
    matiere: 'ma',
    chapitreId: 'ma-int',
    categorie: 'Mathématiques - analyse',
    type: 'methode',
    titre: 'Étudier une intégrale généralisée',
    contenu: `
      <p><strong>But.</strong> Isoler la vraie difficulté de convergence.</p>
      ${steps([
        'Repérer les points impropres : borne infinie, fonction non définie, singularité intérieure.',
        'Couper l’intégrale si plusieurs difficultés apparaissent.',
        'Chercher un équivalent local au voisinage du point impropre.',
        'Comparer à une intégrale de référence : $\\int^\\infty \\frac{1}{t^\\alpha}dt$ ou $\\int_0 \\frac{1}{t^\\alpha}dt$.',
      ])}
      ${warn([
        'Conclure sur une intégrale avec deux singularités sans les séparer.',
        'Faire un calcul de primitive alors qu’un équivalent suffit.',
        'Oublier que les critères ne s’appliquent directement qu’à des fonctions positives, sauf argument supplémentaire.',
      ])}
      ${tip('Méthode rapide : où est le problème, quel équivalent, quelle intégrale de référence ?')}
    `,
    ordre: 120022,
  },
  {
    key: 'ma-red-diagonaliser',
    matiere: 'ma',
    chapitreId: 'ma-red',
    categorie: 'Mathématiques - algèbre',
    type: 'methode',
    titre: 'Tester si un endomorphisme est diagonalisable',
    contenu: `
      <p><strong>But.</strong> Décider proprement sans calculer des bases inutiles.</p>
      ${steps([
        'Calculer ou exploiter le polynôme caractéristique pour connaître les valeurs propres possibles.',
        'Comparer, pour chaque valeur propre, la dimension du sous-espace propre à sa multiplicité algébrique.',
        'Conclure diagonalisable si la somme des dimensions des sous-espaces propres vaut la dimension totale.',
        'Si un polynôme annulateur est disponible, chercher s’il est scindé à racines simples.',
      ])}
      ${warn([
        'Dire “le polynôme caractéristique est scindé” comme si cela suffisait toujours.',
        'Confondre multiplicité algébrique et dimension du sous-espace propre.',
        'Calculer une matrice de passage avant d’avoir prouvé qu’elle existe.',
      ])}
      ${tip('Diagonaliser, ce n’est pas seulement trouver des valeurs propres : c’est avoir assez de vecteurs propres indépendants.')}
    `,
    ordre: 120023,
  },
  {
    key: 'ma-ed-lineaire',
    matiere: 'ma',
    chapitreId: 'ma-ed',
    categorie: 'Mathématiques - analyse',
    type: 'methode',
    titre: 'Résoudre une équation différentielle linéaire',
    contenu: `
      <p><strong>But.</strong> Séparer clairement solution homogène, solution particulière et conditions initiales.</p>
      ${steps([
        'Identifier l’ordre, les coefficients constants ou variables, et le second membre.',
        'Résoudre l’équation homogène associée.',
        'Chercher une solution particulière adaptée au second membre : constante, polynôme, exponentielle, sinus/cosinus ou variation de la constante.',
        'Additionner homogène + particulière, puis seulement appliquer les conditions initiales.',
      ])}
      ${warn([
        'Appliquer les conditions initiales à la solution homogène seule.',
        'Oublier une solution particulière quand le second membre est non nul.',
        'Choisir une forme particulière déjà solution de l’homogène sans l’adapter.',
      ])}
      ${tip('La structure à garder en tête : solution générale = homogène + particulière.')}
    `,
    ordre: 120024,
  },
  {
    key: 'ch-acido-reaction-preponderante',
    matiere: 'ch',
    chapitreId: 'ch-ch-acido',
    categorie: 'Chimie',
    type: 'methode',
    titre: 'Choisir la réaction acido-basique prépondérante',
    contenu: `
      <p><strong>But.</strong> Éviter d’écrire toutes les réactions possibles dans un mélange acido-basique.</p>
      ${steps([
        'Lister les acides et bases présents, puis associer les couples avec leurs $pK_a$.',
        'Identifier l’acide le plus fort disponible et la base la plus forte disponible.',
        'Écrire leur réaction et calculer $K=10^{pK_a(base conjuguée)-pK_a(acide)}$.',
        'Si $K$ est très grand, traiter la réaction comme quasi totale ; sinon garder l’équilibre.',
      ])}
      ${warn([
        'Faire réagir deux acides ou deux bases entre eux.',
        'Oublier les espèces spectatrices mais aussi les espèces produites qui peuvent ensuite réagir.',
        'Conclure “réaction totale” sans ordre de grandeur de $K$.',
      ])}
      ${tip('Dans un mélange, la première réaction à regarder est souvent : acide le plus fort + base la plus forte.')}
    `,
    ordre: 120025,
  },
  {
    key: 'ch-thermo-quotient',
    matiere: 'ch',
    chapitreId: 'ch-ch-thermo',
    categorie: 'Chimie',
    type: 'methode',
    titre: 'Prévoir le sens d’évolution avec le quotient réactionnel',
    contenu: `
      <p><strong>But.</strong> Savoir dans quel sens le système évolue sans résoudre tout l’équilibre.</p>
      ${steps([
        'Écrire la réaction dans un sens choisi et construire le quotient réactionnel $Q_r$.',
        'Calculer ou estimer $Q_{r,i}$ avec les activités initiales.',
        'Comparer à $K^\\circ$ : si $Q_{r,i}<K^\\circ$, évolution dans le sens direct ; si $Q_{r,i}>K^\\circ$, sens inverse.',
        'Une fois le sens trouvé, utiliser un tableau d’avancement seulement si l’état final est demandé.',
      ])}
      ${warn([
        'Comparer $Q_r$ et $K^\\circ$ après avoir inversé la réaction sans inverser $K^\\circ$.',
        'Mettre les solides ou solvants purs dans le quotient.',
        'Confondre sens spontané et vitesse de réaction.',
      ])}
      ${tip('Le quotient réactionnel donne la direction ; le tableau d’avancement donne la quantité.')}
    `,
    ordre: 120026,
  },
  {
    key: 'si-bode-lire',
    matiere: 'si',
    chapitreId: 'si-bode',
    categorie: 'Automatique',
    type: 'methode',
    titre: 'Lire un diagramme de Bode',
    contenu: `
      <p><strong>But.</strong> Tirer des informations utiles du gain et de la phase sans réciter le cours.</p>
      ${steps([
        'Repérer les fréquences de cassure sur le gain et les changements de pente.',
        'Associer les pentes à des intégrateurs, dérivateurs ou pôles/zéros du premier ordre.',
        'Lire les marges de gain et de phase si l’on étudie une boucle ouverte.',
        'Relier la bande passante et les marges aux performances : rapidité, stabilité, robustesse.',
      ])}
      ${warn([
        'Lire une fréquence sur une échelle logarithmique comme si elle était linéaire.',
        'Interpréter un Bode de boucle ouverte comme une réponse temporelle directe.',
        'Parler de stabilité sans marge de phase ou marge de gain.',
      ])}
      ${tip('Un Bode n’est pas un dessin : c’est une carte de rapidité et de robustesse.')}
    `,
    ordre: 120027,
  },
  {
    key: 'info-python-debug-boucle',
    matiere: 'info',
    chapitreId: 'info-python',
    categorie: 'Informatique',
    type: 'methode',
    titre: 'Déboguer une boucle Python',
    contenu: `
      <p><strong>But.</strong> Trouver une erreur de boucle sans modifier le programme au hasard.</p>
      ${steps([
        'Identifier la variable qui contrôle la boucle : compteur, indice, condition logique ou file à vider.',
        'Écrire l’invariant attendu : ce qui doit rester vrai à chaque passage.',
        'Tester à la main sur une petite entrée, en notant les valeurs des variables à chaque tour.',
        'Vérifier trois cas : entrée vide ou minimale, cas normal, cas limite.',
      ])}
      ${warn([
        'Corriger l’indice de fin sans vérifier l’indice de début.',
        'Oublier qu’une liste peut changer de taille pendant la boucle.',
        'Ajouter des prints partout sans hypothèse précise à tester.',
      ])}
      ${tip('Un bon débogage commence par une prédiction : “à ce tour, cette variable devrait valoir...”')}
    `,
    ordre: 120028,
  },
  {
    key: 'ma-3e-pythagore-choisir',
    matiere: 'ma',
    chapitreId: 'ma-3e-pytha',
    categorie: 'Collège - géométrie',
    type: 'methode',
    titre: 'Choisir entre Pythagore et sa réciproque',
    contenu: `
      <p><strong>But.</strong> Savoir si l’on doit calculer une longueur ou prouver qu’un triangle est rectangle.</p>
      ${steps([
        'Si l’énoncé dit que le triangle est rectangle et demande une longueur, utiliser le théorème de Pythagore.',
        'Si l’énoncé donne trois longueurs et demande si le triangle est rectangle, utiliser la réciproque.',
        'Identifier l’hypoténuse : c’est le plus grand côté, en face de l’angle droit.',
        'Écrire la conclusion avec une phrase : “donc le triangle est rectangle en...” ou “donc la longueur vaut...”.',
      ])}
      ${warn([
        'Utiliser Pythagore sans triangle rectangle connu.',
        'Prendre le mauvais côté comme hypoténuse.',
        'Comparer les longueurs au lieu de comparer les carrés dans la réciproque.',
      ])}
      ${tip('Question simple : est-ce que je connais déjà l’angle droit, ou est-ce que je dois le prouver ?')}
    `,
    ordre: 120029,
  },
  {
    key: 'ma-6e-fractions-operer',
    matiere: 'ma',
    chapitreId: 'ma-6e-frac',
    categorie: 'Collège - nombres',
    type: 'methode',
    titre: 'Additionner des fractions sans se tromper',
    contenu: `
      <p><strong>But.</strong> Comprendre pourquoi il faut souvent mettre les fractions au même dénominateur.</p>
      ${steps([
        'Regarder les dénominateurs : s’ils sont déjà identiques, on additionne seulement les numérateurs.',
        'S’ils sont différents, chercher un dénominateur commun, souvent un multiple des deux dénominateurs.',
        'Transformer chaque fraction en une fraction équivalente.',
        'Additionner les numérateurs, garder le dénominateur commun, puis simplifier si possible.',
      ])}
      ${warn([
        'Additionner les dénominateurs entre eux.',
        'Changer le numérateur sans changer le dénominateur de la même façon.',
        'Oublier de simplifier une fraction évidente.',
      ])}
      ${tip('Image utile : on ne peut additionner directement que des parts de même taille.')}
    `,
    ordre: 120030,
  },
];

export function seedCuratedMethodes(db) {
  ensureTables(db);
  cleanupAutomaticMethodes(db);

  let created = 0;
  let updated = 0;
  let linked = 0;

  for (const item of CURATED_METHODES) {
    const filieres = item.filieres || chapterFilieres(db, item.chapitreId);
    if (!filieres.length) continue;

    let methodeId = existingCuratedId(db, item.key);
    if (methodeId) {
      db.run(`
        UPDATE methodes
        SET matiere_id = ?, categorie = ?, type = ?, titre = ?, contenu = ?, ordre = ?
        WHERE id = ?
      `, [item.matiere, item.categorie, item.type, item.titre, item.contenu.trim(), item.ordre, methodeId]);
      updated++;
    } else {
      db.run(`
        INSERT INTO methodes (matiere_id, categorie, type, titre, contenu, ordre)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [item.matiere, item.categorie, item.type, item.titre, item.contenu.trim(), item.ordre]);
      methodeId = lastId(db);
      db.run('INSERT OR REPLACE INTO _curated_methodes (key, methode_id) VALUES (?, ?)', [item.key, methodeId]);
      created++;
    }

    db.run('DELETE FROM filiere_methodes WHERE methode_id = ?', [methodeId]);
    for (const filiereId of filieres) {
      db.run('INSERT OR IGNORE INTO filiere_methodes (filiere_id, methode_id) VALUES (?, ?)', [filiereId, methodeId]);
    }

    db.run('DELETE FROM carte_methodes WHERE methode_id = ?', [methodeId]);
    const carteId = firstCardId(db, item.chapitreId, item.carteTitre);
    if (carteId) {
      db.run('INSERT OR IGNORE INTO carte_methodes (carte_id, methode_id, ordre) VALUES (?, ?, ?)',
        [carteId, methodeId, item.linkOrdre || 30]);
      linked++;
    }
  }

  console.log(`[methodes-curated] ${created} créées, ${updated} mises à jour, ${linked} rattachées.`);
}
