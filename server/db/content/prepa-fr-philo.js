// Prépa CPGE — Français / Philosophie : Expériences de la nature
// Source de cadrage : BO 2025-2026 et 2026-2027, programme CPGE scientifiques.
// Contenu original reformulé pour Admiscible ; aucune citation d'œuvre sous droits.

const FILIERES_PREPA = ['mp', 'mpsi', 'pc', 'pcsi', 'psi', 'ptsi', 'pt', 'mpi', 'tsi', 'bcpst'];

export const DATA = [
  {
    id: 'fr-canguilhem', matiere: 'fr',
    titre: 'Canguilhem — La connaissance de la vie', ordre: 1, enrich: true,
    filieres: FILIERES_PREPA,
    sections: [
      {
        titre: 'Repères sur l’œuvre',
        cartes: [
          { type:'def', label:'DEF', titre:'Objet de l’œuvre',
            contenu:`<em>La connaissance de la vie</em> interroge la manière dont le vivant peut être connu sans être réduit à un simple mécanisme. L'enjeu est double : comprendre la rigueur propre des sciences du vivant et montrer que la vie impose des catégories spécifiques, comme la norme, le milieu, l'organisation et l'individualité.` },
          { type:'prop', label:'PROP', titre:'Idée directrice',
            contenu:`Chez Canguilhem, connaître la nature vivante ne consiste pas seulement à mesurer des phénomènes. Il faut aussi comprendre comment un être vivant se rapporte à son milieu, institue des normes et transforme ce qui l'entoure en conditions de vie.` },
          { type:'def', label:'DEF', titre:'Nature et vivant',
            contenu:`La nature n'est pas seulement un décor extérieur : elle est le champ dans lequel un vivant agit, sélectionne, réagit et valorise. Un milieu n'est donc pas neutre ; il devient significatif pour un organisme qui y vit.` },
        ]
      },
      {
        titre: 'Notions centrales',
        cartes: [
          { type:'def', label:'DEF', titre:'Norme biologique',
            contenu:`Une <strong>norme biologique</strong> n'est pas une règle morale. C'est une manière pour un vivant de maintenir ou de réorganiser son activité. La santé peut alors être comprise comme capacité à instituer de nouvelles normes face aux variations du milieu.` },
          { type:'prop', label:'PROP', titre:'Milieu',
            contenu:`Le milieu n'est pas seulement l'environnement physique. Il est l'ensemble des conditions qui prennent sens pour un vivant donné : nourriture, danger, obstacle, abri, signal. Deux espèces peuvent donc habiter le même espace sans vivre le même milieu.` },
          { type:'prop', label:'PROP', titre:'Critique du réductionnisme',
            contenu:`Canguilhem refuse de réduire le vivant à une machine. Les modèles mécaniques peuvent éclairer certains phénomènes, mais ils ne suffisent pas à penser l'organisation, l'autorégulation, l'adaptation et la valeur vitale des comportements.` },
        ]
      },
      {
        titre: 'Problématiques utiles',
        cartes: [
          { type:'meth', label:'METH', titre:'Questionner l’expérience de la nature',
            contenu:`Avec Canguilhem, on peut problématiser ainsi : la nature est-elle d'abord un objet de connaissance, ou une réalité vécue par les êtres vivants ? L'expérience de la nature engage alors la science, mais aussi la relation active entre vivant et milieu.` },
          { type:'prop', label:'PROP', titre:'Science et expérience',
            contenu:`L'expérience scientifique simplifie, isole et mesure. L'expérience vitale, elle, est située, orientée par des besoins et des risques. La dissertation peut jouer sur cette tension : connaître la nature suppose de s'en abstraire, mais vivre la nature suppose d'y être engagé.` },
          { type:'meth', label:'METH', titre:'Exploiter Canguilhem en dissertation',
            contenu:`Canguilhem sert très bien à défendre l'idée que la nature vivante résiste à une approche purement extérieure. Il permet aussi de nuancer : la science ne détruit pas l'expérience de la nature, elle en construit une forme rigoureuse, abstraite et transmissible.` },
        ]
      },
      {
        titre: 'Comparaisons avec les deux autres œuvres',
        cartes: [
          { type:'prop', label:'PROP', titre:'Avec Verne',
            contenu:`Verne met en scène une nature explorée par la technique et le savoir ; Canguilhem interroge les conditions mêmes d'une connaissance du vivant. Les deux permettent de penser une nature connaissable, mais Verne dramatise l'aventure, tandis que Canguilhem analyse les concepts.` },
          { type:'prop', label:'PROP', titre:'Avec Haushofer',
            contenu:`Haushofer fait éprouver une relation immédiate, fragile et quotidienne au vivant. Canguilhem donne les outils conceptuels pour comprendre que cette relation n'est pas seulement subjective : tout vivant construit un monde de valeurs, de menaces et de possibles.` },
          { type:'meth', label:'METH', titre:'Transition type',
            contenu:`Pour passer de Canguilhem à Haushofer : après avoir montré que le vivant ne se comprend pas comme une machine, on peut montrer que l'expérience humaine de la nature devient elle-même une épreuve de réorganisation des normes de vie.` },
        ]
      },
    ]
  },
  {
    id: 'fr-verne', matiere: 'fr',
    titre: 'Verne — Vingt mille lieues sous les mers', ordre: 2, enrich: true,
    filieres: FILIERES_PREPA,
    sections: [
      {
        titre: 'Repères sur l’œuvre',
        cartes: [
          { type:'def', label:'DEF', titre:'Roman d’exploration',
            contenu:`<em>Vingt mille lieues sous les mers</em> met en scène une exploration des profondeurs marines par la médiation du Nautilus. La nature y apparaît comme spectacle, réserve de savoir, espace de liberté, mais aussi puissance inquiétante et difficile à maîtriser.` },
          { type:'prop', label:'PROP', titre:'Nature médiatisée par la technique',
            contenu:`L'accès à la mer profonde dépend d'un dispositif technique. L'expérience de la nature n'est donc pas pure immersion : elle passe par un instrument, un regard savant, une machine et une organisation humaine.` },
          { type:'def', label:'DEF', titre:'Ambivalence du progrès',
            contenu:`Le Nautilus permet de connaître et de parcourir un monde inaccessible, mais il isole aussi ceux qui l'habitent. Le progrès technique ouvre la nature et enferme l'homme : cette ambivalence est centrale pour traiter le thème.` },
        ]
      },
      {
        titre: 'Axes d’analyse',
        cartes: [
          { type:'prop', label:'PROP', titre:'Émerveillement scientifique',
            contenu:`La nature marine suscite admiration et curiosité. L'expérience de la nature passe par le classement, la description, l'observation et le désir de comprendre. Verne permet donc de penser une nature qui excite l'intelligence autant que l'imagination.` },
          { type:'prop', label:'PROP', titre:'Sublime et menace',
            contenu:`La mer n'est pas seulement belle : elle est immense, dangereuse, imprévisible. Elle confronte les personnages à des forces qui dépassent la volonté humaine. Le sublime naît de cette grandeur mêlée de peur.` },
          { type:'prop', label:'PROP', titre:'Nemo et la rupture avec le monde humain',
            contenu:`Le capitaine Nemo cherche dans la mer une forme d'indépendance vis-à-vis des sociétés humaines. La nature devient refuge, mais ce refuge peut aussi devenir séparation, enfermement et rapport conflictuel au reste de l'humanité.` },
        ]
      },
      {
        titre: 'Problématiques utiles',
        cartes: [
          { type:'meth', label:'METH', titre:'Nature explorée ou nature possédée ?',
            contenu:`Une question efficace : explorer la nature, est-ce déjà la dominer ? Verne permet de répondre de manière nuancée : la technique rend l'exploration possible, mais la mer conserve une part d'opacité et de puissance propre.` },
          { type:'meth', label:'METH', titre:'Technique et expérience',
            contenu:`Dans une dissertation, Verne peut soutenir l'idée que l'expérience moderne de la nature est souvent médiatisée : cartes, instruments, machines, mesures. Mais cette médiation n'annule pas l'émotion ; elle la transforme.` },
          { type:'prop', label:'PROP', titre:'Limite de la maîtrise',
            contenu:`Même équipé, l'être humain ne possède jamais totalement la nature. Les profondeurs marines restent un monde de forces, de rencontres et de dangers. Cette limite évite une lecture naïvement techniciste du roman.` },
        ]
      },
      {
        titre: 'Comparaisons avec les deux autres œuvres',
        cartes: [
          { type:'prop', label:'PROP', titre:'Avec Canguilhem',
            contenu:`Verne montre la connaissance en action, dans l'aventure et l'instrumentation. Canguilhem en fournit la réflexion épistémologique : que signifie connaître le vivant ou la nature sans les réduire ?` },
          { type:'prop', label:'PROP', titre:'Avec Haushofer',
            contenu:`Verne privilégie l'exploration extraordinaire ; Haushofer impose une expérience pauvre, quotidienne et contrainte de la nature. Les deux posent pourtant la même question : comment vivre dans un monde naturel qui n'est pas fait à notre mesure ?` },
          { type:'meth', label:'METH', titre:'Utilisation en plan dialectique',
            contenu:`Verne est utile en première partie pour montrer l'enthousiasme de la découverte, puis en deuxième partie pour montrer les limites de la maîtrise. Il peut donc servir à la fois l'éloge et la critique de l'expérience technique de la nature.` },
        ]
      },
    ]
  },
  {
    id: 'fr-haushofer', matiere: 'fr',
    titre: 'Haushofer — Le Mur invisible', ordre: 3, enrich: true,
    filieres: FILIERES_PREPA,
    sections: [
      {
        titre: 'Repères sur l’œuvre',
        cartes: [
          { type:'def', label:'DEF', titre:'Situation narrative',
            contenu:`<em>Le Mur invisible</em> imagine une femme séparée du monde humain par une barrière inexplicable. Elle doit apprendre à vivre dans un espace naturel devenu à la fois refuge, contrainte, ressource et menace.` },
          { type:'prop', label:'PROP', titre:'Expérience radicale de la nature',
            contenu:`La nature n'est plus un paysage à contempler ni un objet d'étude. Elle devient la condition immédiate de la survie : se nourrir, se chauffer, protéger les animaux, observer les saisons, accepter la vulnérabilité.` },
          { type:'def', label:'DEF', titre:'Solitude',
            contenu:`La solitude n'est pas seulement psychologique. Elle transforme le rapport au temps, au corps, au travail et au vivant. L'expérience de la nature est donc aussi une expérience de dépouillement social.` },
        ]
      },
      {
        titre: 'Axes d’analyse',
        cartes: [
          { type:'prop', label:'PROP', titre:'Dépendance au vivant',
            contenu:`Le roman montre que l'humain n'est pas maître de la nature : il dépend d'elle matériellement et affectivement. Les animaux, les plantes, les saisons et les gestes pratiques composent un monde de relations vitales.` },
          { type:'prop', label:'PROP', titre:'Réapprendre les gestes élémentaires',
            contenu:`La narratrice doit reconstruire un savoir pratique : cultiver, conserver, réparer, anticiper. Cette expérience révèle que la nature n'est pas seulement donnée ; elle demande attention, patience et apprentissage.` },
          { type:'prop', label:'PROP', titre:'Nature et identité',
            contenu:`Le retrait forcé hors de la société modifie l'identité de la narratrice. Elle ne se définit plus par un rôle social, mais par ses relations concrètes avec un lieu, des êtres vivants et des tâches nécessaires.` },
        ]
      },
      {
        titre: 'Problématiques utiles',
        cartes: [
          { type:'meth', label:'METH', titre:'Nature refuge ou prison ?',
            contenu:`Haushofer permet de traiter l'ambivalence de la nature : elle protège de la violence humaine et rend la vie possible, mais elle impose aussi l'isolement, la fatigue, la dépendance et l'incertitude.` },
          { type:'meth', label:'METH', titre:'Expérience et transformation',
            contenu:`Une problématique forte : l'expérience de la nature nous révèle-t-elle ce que nous sommes ? Chez Haushofer, la nature dépouille l'existence de ses habitudes sociales et force une reconstruction de soi.` },
          { type:'prop', label:'PROP', titre:'Temporalité naturelle',
            contenu:`Le temps n'est plus celui des projets sociaux, mais celui des saisons, des réserves, des soins et de l'usure. Cette temporalité donne à l'expérience de la nature une dimension concrète et existentielle.` },
        ]
      },
      {
        titre: 'Comparaisons avec les deux autres œuvres',
        cartes: [
          { type:'prop', label:'PROP', titre:'Avec Verne',
            contenu:`Chez Verne, la nature est explorée par la médiation d'une machine exceptionnelle. Chez Haushofer, elle est vécue sans grandeur héroïque, dans la répétition des gestes vitaux. L'une dramatise l'aventure, l'autre l'endurance.` },
          { type:'prop', label:'PROP', titre:'Avec Canguilhem',
            contenu:`Canguilhem aide à comprendre la narratrice comme un vivant qui reconfigure son milieu. Haushofer donne chair à cette idée : vivre, c'est inventer des normes pratiques dans un environnement qui résiste.` },
          { type:'meth', label:'METH', titre:'Exemple de confrontation',
            contenu:`Pour une dissertation, on peut opposer Verne et Haushofer : la nature comme espace de conquête technique d'un côté, comme expérience de dépendance quotidienne de l'autre. Canguilhem permet ensuite de dépasser l'opposition par la notion de milieu.` },
        ]
      },
    ]
  },
];
