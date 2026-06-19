export const DATA = [
  // ============================================================
  // ================  HISTOIRE-GÉOGRAPHIE (HG)  ================
  // ============================================================
  {
    id: 'hg-3e-pgm',
    matiere: 'hg',
    titre: 'La Première Guerre mondiale (1914-1918)',
    ordre: 1,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Une guerre nouvelle', cartes: [
        { type: 'def', label: 'DEF', titre: 'Guerre totale', contenu: `Conflit qui mobilise toutes les ressources d'un pays : <strong>soldats</strong> (militaire), <strong>économie</strong> (usines d'armement), <strong>population civile</strong> (femmes à l'usine), <strong>opinion</strong> (propagande, censure). Rien n'échappe à l'effort de guerre.` },
        { type: 'prop', label: 'PROP', titre: 'Les grandes phases', contenu: `<ul><li><strong>1914</strong> : guerre de mouvement, échec du plan allemand</li><li><strong>1915-1917</strong> : guerre de position (tranchées), Verdun en 1916</li><li><strong>1917</strong> : année de crise (révolutions russes, entrée des États-Unis)</li><li><strong>1918</strong> : retour du mouvement, armistice le 11 novembre</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Les tranchées', contenu: `Fossés creusés sur le front où vivent les soldats (les « poilus »). Conditions terribles : boue, rats, froid, peur, assauts meurtriers. Symbole de la violence de masse de cette guerre.` }
      ]},
      { titre: 'Verdun, bataille emblématique', cartes: [
        { type: 'ex', label: 'EX', titre: 'La bataille de Verdun (1916)', contenu: `De février à décembre 1916, affrontement franco-allemand qui fait environ <strong>700 000 morts et blessés</strong>. Devenu le symbole de l'enfer des tranchées et du sacrifice des soldats français. Le général Pétain y commande.` },
        { type: 'def', label: 'DEF', titre: 'Violence de masse', contenu: `Emploi d'armes industrielles (artillerie lourde, mitrailleuses, gaz de combat) qui tue en très grand nombre. Bilan total de la guerre : environ <strong>10 millions de morts</strong>.` }
      ]},
      { titre: 'Un génocide', cartes: [
        { type: 'def', label: 'DEF', titre: 'Génocide', contenu: `Extermination volontaire et programmée d'un groupe humain en raison de ses origines (religion, peuple). Le premier génocide du XXe siècle est celui des Arméniens.` },
        { type: 'ex', label: 'EX', titre: 'Le génocide arménien (1915-1916)', contenu: `L'Empire ottoman extermine les <strong>Arméniens</strong> (chrétiens) accusés de trahison : déportations, marches forcées, massacres. Environ <strong>1,2 million de victimes</strong>.` }
      ]},
      { titre: '1917 et la fin de la guerre', cartes: [
        { type: 'prop', label: 'PROP', titre: 'L\'année 1917', contenu: `<ul><li><strong>Révolutions russes</strong> : la Russie quitte la guerre</li><li><strong>Entrée des États-Unis</strong> aux côtés des Alliés</li><li><strong>Mutineries</strong> dans l'armée française, lassitude</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Armistice', contenu: `Accord qui arrête les combats. Signé le <strong>11 novembre 1918</strong>, il met fin à la Première Guerre mondiale après la défaite de l'Allemagne.` },
        { type: 'ex', label: 'EX', titre: 'Le traité de Versailles (1919)', contenu: `Traité de paix signé entre les Alliés et l'Allemagne, jugée <strong>responsable</strong> de la guerre : elle perd des territoires, doit désarmer et payer de lourdes réparations. Un traité ressenti comme une humiliation par les Allemands.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-totalitarismes',
    matiere: 'hg',
    titre: 'Les régimes totalitaires dans l\'entre-deux-guerres',
    ordre: 2,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Définir le totalitarisme', cartes: [
        { type: 'def', label: 'DEF', titre: 'Régime totalitaire', contenu: `Régime dictatorial qui veut contrôler <strong>toute</strong> la société : parti unique, chef tout-puissant, propagande, censure, police politique, terreur, embrigadement de la jeunesse. L'individu n'existe plus, seul compte l'État.` },
        { type: 'def', label: 'DEF', titre: 'Propagande', contenu: `Ensemble des moyens (affiches, radio, cinéma, défilés) employés pour imposer une idée et glorifier le chef. Au service du contrôle des esprits.` }
      ]},
      { titre: 'L\'URSS de Staline', cartes: [
        { type: 'ex', label: 'EX', titre: 'L\'URSS stalinienne', contenu: `<strong>Staline</strong> dirige l'URSS à partir de 1924. Régime communiste : collectivisation des terres, industrialisation forcée, planification de l'économie. Culte de la personnalité du « Petit Père des peuples ».` },
        { type: 'def', label: 'DEF', titre: 'Goulag', contenu: `Réseau de camps de travail forcé où sont envoyés les opposants réels ou supposés au régime soviétique. Outil de la terreur stalinienne (procès, purges, déportations).` }
      ]},
      { titre: 'L\'Allemagne nazie', cartes: [
        { type: 'ex', label: 'EX', titre: 'L\'arrivée d\'Hitler au pouvoir', contenu: `<strong>Hitler</strong>, chef du parti nazi, devient chancelier en <strong>1933</strong>. Il instaure une dictature : suppression des libertés, parti unique (NSDAP), Gestapo (police), camps de concentration.` },
        { type: 'def', label: 'DEF', titre: 'Idéologie nazie', contenu: `Doctrine fondée sur le <strong>racisme</strong> (supériorité de la « race aryenne »), l'<strong>antisémitisme</strong> (haine des Juifs) et le rêve d'un « espace vital ». Les Juifs sont exclus dès les lois de Nuremberg (1935).` },
        { type: 'def', label: 'DEF', titre: 'Antisémitisme', contenu: `Haine et persécution des Juifs. Pilier de l'idéologie nazie : les Juifs sont privés de leurs droits, puis pourchassés.` }
      ]},
      { titre: 'L\'Italie fasciste', cartes: [
        { type: 'ex', label: 'EX', titre: 'L\'Italie de Mussolini', contenu: `<strong>Mussolini</strong> prend le pouvoir en Italie en 1922. Il fonde le <strong>fascisme</strong> : parti unique, culte du chef (« Duce »), encadrement de la jeunesse, propagande. Premier régime fasciste d'Europe.` },
        { type: 'prop', label: 'PROP', titre: 'Points communs des trois régimes', contenu: `<ul><li>Un chef et un parti uniques</li><li>La terreur et la police politique</li><li>La propagande et la censure</li><li>L'embrigadement de la jeunesse</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-3e-sgm',
    matiere: 'hg',
    titre: 'La Seconde Guerre mondiale (1939-1945)',
    ordre: 3,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Une guerre d\'anéantissement', cartes: [
        { type: 'def', label: 'DEF', titre: 'Guerre d\'anéantissement', contenu: `Guerre qui vise à <strong>détruire totalement</strong> l'adversaire, militaire mais aussi civil. Violence extrême : bombardements de villes, massacres, recours à l'arme atomique.` },
        { type: 'prop', label: 'PROP', titre: 'Grandes dates', contenu: `<ul><li><strong>1939</strong> : invasion de la Pologne, début de la guerre</li><li><strong>1941</strong> : entrée de l'URSS et des États-Unis</li><li><strong>1942-1943</strong> : tournant (Stalingrad)</li><li><strong>1944</strong> : débarquement en Normandie (6 juin)</li><li><strong>1945</strong> : capitulation allemande (8 mai), bombes atomiques sur le Japon (août)</li></ul>` },
        { type: 'ex', label: 'EX', titre: 'Hiroshima et Nagasaki', contenu: `En août 1945, les États-Unis larguent deux <strong>bombes atomiques</strong> sur le Japon, provoquant la mort de plus de 100 000 personnes et la capitulation japonaise. Symbole d'une guerre totale et d'anéantissement.` }
      ]},
      { titre: 'Le génocide des Juifs et des Tsiganes', cartes: [
        { type: 'def', label: 'DEF', titre: 'La Shoah', contenu: `Génocide des Juifs d'Europe organisé par les nazis : environ <strong>6 millions</strong> de victimes. « Solution finale » décidée en 1942 : extermination systématique dans des camps.` },
        { type: 'def', label: 'DEF', titre: 'Camp d\'extermination', contenu: `Centre de mise à mort industrielle (chambres à gaz) destiné à tuer en masse. <strong>Auschwitz-Birkenau</strong> en est le plus tristement célèbre. À distinguer du camp de concentration (travail forcé).` },
        { type: 'ex', label: 'EX', titre: 'Le génocide des Tsiganes', contenu: `Les nazis exterminent aussi les <strong>Tsiganes</strong> (Roms et Sintis), victimes du même racisme. Plusieurs centaines de milliers de morts.` }
      ]},
      { titre: 'La France de Vichy', cartes: [
        { type: 'def', label: 'DEF', titre: 'Le régime de Vichy', contenu: `Après la défaite de 1940, le <strong>maréchal Pétain</strong> dirige l'« État français » depuis Vichy. Fin de la République : devise « Travail, Famille, Patrie ». Régime autoritaire et antisémite.` },
        { type: 'def', label: 'DEF', titre: 'Collaboration', contenu: `Politique de Pétain consistant à <strong>coopérer</strong> avec l'Allemagne nazie. Vichy participe à la persécution des Juifs (rafle du Vél d'Hiv, 1942) et à leur déportation.` }
      ]},
      { titre: 'La Résistance et la France libre', cartes: [
        { type: 'ex', label: 'EX', titre: 'L\'appel du 18 juin 1940', contenu: `Depuis Londres, le général <strong>de Gaulle</strong> appelle à continuer le combat et fonde la <strong>France libre</strong>. Acte fondateur de la Résistance extérieure.` },
        { type: 'def', label: 'DEF', titre: 'La Résistance', contenu: `Ensemble des personnes qui luttent contre l'occupant allemand et Vichy : renseignement, sabotages, presse clandestine, maquis. Unifiée par <strong>Jean Moulin</strong> au sein du CNR (Conseil national de la Résistance) en 1943.` },
        { type: 'prop', label: 'PROP', titre: 'La Libération', contenu: `Grâce aux débarquements alliés (Normandie, juin 1944 ; Provence, août 1944) et à l'action de la Résistance, la France est libérée à l'été 1944. De Gaulle rétablit la République.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-france-republique',
    matiere: 'hg',
    titre: 'Françaises et Français dans une République repensée (1944-1947)',
    ordre: 4,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Refonder la République', cartes: [
        { type: 'def', label: 'DEF', titre: 'Le programme du CNR', contenu: `Programme du <strong>Conseil national de la Résistance</strong> (1944) qui prépare la France d'après-guerre : démocratie sociale, nationalisations, droits nouveaux. Base des grandes réformes de la Libération.` },
        { type: 'prop', label: 'PROP', titre: 'Le GPRF', contenu: `Le <strong>Gouvernement provisoire</strong> dirigé par de Gaulle (1944-1946) rétablit la République et la démocratie, et lance d'importantes réformes sociales.` }
      ]},
      { titre: 'De nouveaux droits', cartes: [
        { type: 'ex', label: 'EX', titre: 'Le droit de vote des femmes', contenu: `En <strong>1944</strong>, les femmes obtiennent enfin le <strong>droit de vote</strong> et d'éligibilité. Elles votent pour la première fois en 1945. Avancée majeure de la citoyenneté.` },
        { type: 'def', label: 'DEF', titre: 'La Sécurité sociale', contenu: `Créée en <strong>1945</strong>, elle protège les citoyens contre les risques de la vie (maladie, vieillesse, accidents). Pilier de l'État-providence français.` }
      ]},
      { titre: 'La IVe République', cartes: [
        { type: 'def', label: 'DEF', titre: 'La IVe République (1946)', contenu: `Nouveau régime adopté par référendum en 1946. République parlementaire marquée par l'<strong>instabilité gouvernementale</strong> mais aussi par la reconstruction et le début de la construction européenne.` },
        { type: 'prop', label: 'PROP', titre: 'Le retrait de De Gaulle', contenu: `En désaccord avec le projet de constitution (trop de pouvoir au Parlement à ses yeux), de Gaulle démissionne dès <strong>janvier 1946</strong>. Il reviendra en 1958.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-monde-1945',
    matiere: 'hg',
    titre: 'Le monde depuis 1945 : Guerre froide et décolonisation',
    ordre: 5,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'La Guerre froide', cartes: [
        { type: 'def', label: 'DEF', titre: 'Guerre froide', contenu: `Affrontement (1947-1991) entre deux <strong>blocs</strong> sans guerre directe : le bloc de l'Ouest (États-Unis, capitalisme, démocratie) et le bloc de l'Est (URSS, communisme). Rivalité idéologique, militaire et nucléaire.` },
        { type: 'ex', label: 'EX', titre: 'Berlin, symbole de la Guerre froide', contenu: `Berlin est divisée. En <strong>1961</strong>, l'URSS construit le <strong>mur de Berlin</strong> pour empêcher les fuites vers l'Ouest. Sa chute en <strong>1989</strong> annonce la fin de la Guerre froide.` },
        { type: 'def', label: 'DEF', titre: 'Décolonisation', contenu: `Processus par lequel les colonies obtiennent leur <strong>indépendance</strong> après 1945. Parfois pacifique (Inde, 1947), souvent violent (guerre d'Algérie).` }
      ]},
      { titre: 'La fin des empires coloniaux', cartes: [
        { type: 'ex', label: 'EX', titre: 'La guerre d\'Algérie (1954-1962)', contenu: `Guerre d'indépendance violente entre l'Algérie et la France. Elle entraîne la chute de la IVe République (1958) et se termine par l'indépendance de l'Algérie en <strong>1962</strong> (accords d'Évian).` },
        { type: 'prop', label: 'PROP', titre: 'Un nouveau monde', contenu: `La décolonisation fait naître de nombreux États (Afrique, Asie). Beaucoup, ni pro-américains ni pro-soviétiques, forment le <strong>Tiers-Monde</strong>.` }
      ]},
      { titre: 'La construction européenne', cartes: [
        { type: 'def', label: 'DEF', titre: 'La construction européenne', contenu: `Rapprochement pacifique des pays d'Europe après la guerre. Débute avec la <strong>CECA</strong> (1951), puis le <strong>traité de Rome</strong> (1957, CEE), pour aboutir à l'<strong>Union européenne</strong> (traité de Maastricht, 1992).` },
        { type: 'ex', label: 'EX', titre: 'L\'euro', contenu: `Monnaie unique mise en circulation en <strong>2002</strong> dans plusieurs pays de l'Union européenne. Symbole concret de l'intégration économique de l'Europe.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-ve-republique',
    matiere: 'hg',
    titre: 'La Ve République et la France de 1958 à nos jours',
    ordre: 6,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Naissance de la Ve République', cartes: [
        { type: 'ex', label: 'EX', titre: 'Le retour de De Gaulle (1958)', contenu: `Face à la crise algérienne, <strong>de Gaulle</strong> revient au pouvoir en 1958 et fonde la <strong>Ve République</strong>, qui renforce le rôle du président.` },
        { type: 'def', label: 'DEF', titre: 'La Ve République', contenu: `Régime instauré en 1958, marqué par un <strong>pouvoir exécutif fort</strong>. Depuis 1962, le président est élu au <strong>suffrage universel direct</strong>, ce qui lui donne une grande légitimité.` }
      ]},
      { titre: 'Une démocratie qui évolue', cartes: [
        { type: 'ex', label: 'EX', titre: 'Mai 1968', contenu: `Vaste mouvement de contestation étudiante et ouvrière en mai 1968. Il traduit une demande de <strong>changements sociaux et culturels</strong> dans la société française.` },
        { type: 'prop', label: 'PROP', titre: 'L\'alternance et la cohabitation', contenu: `La gauche arrive au pouvoir en <strong>1981</strong> (Mitterrand) : c'est l'<strong>alternance</strong>. Quand président et majorité parlementaire sont de bords opposés, on parle de <strong>cohabitation</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Place des femmes', contenu: `Évolution des droits des femmes sous la Ve République : contraception (1967), légalisation de l'avortement avec la <strong>loi Veil (1975)</strong>, lois sur la parité.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-geo-france',
    matiere: 'hg',
    titre: 'Géographie : aménager et habiter le territoire français',
    ordre: 7,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les aires urbaines', cartes: [
        { type: 'def', label: 'DEF', titre: 'Aire urbaine', contenu: `Espace formé par une ville (pôle urbain) et les communes dont les habitants travaillent dans ce pôle (couronne périurbaine). Plus de <strong>80 % des Français</strong> vivent dans une aire urbaine.` },
        { type: 'def', label: 'DEF', titre: 'Étalement urbain', contenu: `Extension des villes sur les espaces voisins (lotissements, zones commerciales) due à la <strong>périurbanisation</strong>. Conséquences : usage de la voiture, artificialisation des sols.` },
        { type: 'def', label: 'DEF', titre: 'Métropolisation', contenu: `Concentration des populations, des activités et des pouvoirs dans les grandes villes (<strong>métropoles</strong>). Paris est la métropole dominante en France.` }
      ]},
      { titre: 'Les espaces productifs', cartes: [
        { type: 'def', label: 'DEF', titre: 'Espace productif', contenu: `Espace aménagé pour produire des biens ou des services. On distingue les espaces <strong>agricoles</strong>, <strong>industriels</strong> et de <strong>services</strong> (tertiaire).` },
        { type: 'ex', label: 'EX', titre: 'Un espace de services', contenu: `Les espaces touristiques (littoraux, montagnes) ou les quartiers d'affaires (La Défense à Paris) sont des espaces productifs de services, secteur dominant de l'économie française.` }
      ]},
      { titre: 'Les espaces de faible densité', cartes: [
        { type: 'def', label: 'DEF', titre: 'Espace de faible densité', contenu: `Espace peu peuplé (moins de 30 hab/km²) : campagnes isolées, montagnes (« diagonale du vide »). Enjeux : maintenir les services, valoriser ces espaces (tourisme vert, énergies).` },
        { type: 'prop', label: 'PROP', titre: 'Des espaces qui se transforment', contenu: `Certains espaces ruraux se vident (exode), d'autres se redynamisent grâce au <strong>tourisme</strong>, à l'agriculture de qualité (AOC) ou aux énergies renouvelables.` }
      ]},
      { titre: 'Aménager le territoire', cartes: [
        { type: 'def', label: 'DEF', titre: 'Aménagement du territoire', contenu: `Politique menée par l'État et les collectivités pour <strong>réduire les inégalités</strong> entre les régions et organiser l'espace (transports, équipements).` },
        { type: 'ex', label: 'EX', titre: 'Réduire les inégalités', contenu: `Construction de lignes à grande vitesse (<strong>LGV</strong>), aides aux régions en difficulté, soutien aux zones rurales : l'État cherche à assurer l'égalité des territoires.` }
      ]}
    ]
  },
  {
    id: 'hg-3e-france-monde',
    matiere: 'hg',
    titre: 'Géographie : la France et l\'Europe dans le monde',
    ordre: 8,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'La France dans l\'Union européenne', cartes: [
        { type: 'def', label: 'DEF', titre: 'L\'Union européenne', contenu: `Association de 27 pays (en 2026) partageant des règles communes, un marché unique et, pour beaucoup, l'euro. La France en est un membre fondateur et l'un des moteurs.` },
        { type: 'def', label: 'DEF', titre: 'Espace Schengen', contenu: `Zone de libre circulation des personnes au sein de l'Union européenne : on peut franchir les frontières sans contrôle. Concrétise l'intégration européenne.` }
      ]},
      { titre: 'La France dans la mondialisation', cartes: [
        { type: 'def', label: 'DEF', titre: 'Mondialisation', contenu: `Mise en relation des différentes parties du monde par les échanges (marchandises, hommes, informations, capitaux). La France y participe par ses entreprises, sa culture et sa langue.` },
        { type: 'def', label: 'DEF', titre: 'Rayonnement', contenu: `Influence d'un pays dans le monde. La France rayonne par sa <strong>langue</strong> (francophonie), sa <strong>culture</strong>, sa diplomatie et son siège au Conseil de sécurité de l'ONU.` }
      ]},
      { titre: 'Les territoires ultramarins', cartes: [
        { type: 'def', label: 'DEF', titre: 'Territoire ultramarin', contenu: `Territoire français situé hors d'Europe (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, etc.). Ils donnent à la France une présence sur <strong>tous les océans</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Atouts et contraintes', contenu: `<ul><li><strong>Atouts</strong> : vaste domaine maritime (ZEE), biodiversité, base spatiale (Kourou), tourisme</li><li><strong>Contraintes</strong> : éloignement, chômage, risques naturels (cyclones, séismes)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-3e-emc',
    matiere: 'hg',
    titre: 'EMC : la République, la laïcité et la citoyenneté',
    ordre: 9,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les valeurs et symboles de la République', cartes: [
        { type: 'def', label: 'DEF', titre: 'La devise républicaine', contenu: `« <strong>Liberté, Égalité, Fraternité</strong> » : les trois valeurs fondamentales de la République française, héritées de la Révolution de 1789.` },
        { type: 'prop', label: 'PROP', titre: 'Les symboles de la République', contenu: `<ul><li>Le <strong>drapeau tricolore</strong> (bleu, blanc, rouge)</li><li><strong>La Marseillaise</strong> (hymne national)</li><li><strong>Marianne</strong> (allégorie de la République)</li><li>Le <strong>14 juillet</strong> (fête nationale)</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Démocratie', contenu: `Régime politique où le <strong>peuple</strong> est souverain et exerce le pouvoir, directement ou par ses représentants élus. La France est une démocratie représentative.` }
      ]},
      { titre: 'La laïcité', cartes: [
        { type: 'def', label: 'DEF', titre: 'Laïcité', contenu: `Principe de <strong>séparation des Églises et de l'État</strong> (loi de 1905). L'État est neutre : il garantit la liberté de croire ou de ne pas croire et l'égalité de tous les citoyens.` },
        { type: 'ex', label: 'EX', titre: 'La laïcité à l\'école', contenu: `L'école publique est laïque : pas de signes religieux ostensibles pour les élèves (loi de 2004), enseignement neutre. Elle forme des citoyens libres et égaux.` }
      ]},
      { titre: 'Être citoyen', cartes: [
        { type: 'def', label: 'DEF', titre: 'Citoyenneté', contenu: `Fait d'appartenir à une communauté politique avec des <strong>droits</strong> (voter, s'exprimer) et des <strong>devoirs</strong> (respecter la loi, payer l'impôt, être juré). En France, citoyen à partir de 18 ans pour le vote.` },
        { type: 'prop', label: 'PROP', titre: 'Droits et devoirs', contenu: `<ul><li><strong>Droits</strong> : voter, se présenter aux élections, manifester, s'associer</li><li><strong>Devoirs</strong> : respecter la loi, payer ses impôts, participer à la défense (JDC)</li></ul>` }
      ]},
      { titre: 'La défense nationale', cartes: [
        { type: 'def', label: 'DEF', titre: 'Défense nationale', contenu: `Ensemble des moyens (armée, mais aussi sécurité civile, cyberdéfense) qui protègent le pays et ses citoyens. La défense est un devoir partagé par la nation.` },
        { type: 'def', label: 'DEF', titre: 'Le parcours citoyen', contenu: `Étapes obligatoires liées à la défense : <strong>recensement</strong> à 16 ans, puis <strong>Journée Défense et Citoyenneté (JDC)</strong>. Elles sensibilisent les jeunes à leurs devoirs.` }
      ]}
    ]
  },

  // ============================================================
  // =======================  FRANÇAIS (FR)  ====================
  // ============================================================
  {
    id: 'fr-3e-grammaire',
    matiere: 'fr',
    titre: 'Grammaire : nature, fonction et propositions',
    ordre: 10,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Nature et fonction', cartes: [
        { type: 'def', label: 'DEF', titre: 'Nature (classe grammaticale)', contenu: `Ce qu'<strong>est</strong> un mot, indépendamment de la phrase : nom, déterminant, adjectif, verbe, pronom, adverbe, préposition, conjonction. La nature d'un mot ne change jamais.` },
        { type: 'def', label: 'DEF', titre: 'Fonction', contenu: `Le <strong>rôle</strong> qu'un mot ou groupe de mots joue dans la phrase : sujet, COD, COI, attribut, complément circonstanciel, épithète. La fonction dépend de la phrase.` },
        { type: 'meth', label: 'METH', titre: 'Trouver le COD et le COI', contenu: `<ul><li><strong>COD</strong> : répond à « qui ? » ou « quoi ? » après le verbe (Il lit <em>un livre</em>)</li><li><strong>COI</strong> : introduit par une préposition, répond à « à qui ? », « de quoi ? » (Il parle <em>à son ami</em>)</li></ul>` }
      ]},
      { titre: 'Les propositions subordonnées', cartes: [
        { type: 'def', label: 'DEF', titre: 'Proposition subordonnée', contenu: `Proposition qui dépend d'une proposition principale et ne peut pas exister seule. Elle est introduite par un mot subordonnant (que, qui, quand, parce que…).` },
        { type: 'def', label: 'DEF', titre: 'La subordonnée relative', contenu: `Introduite par un <strong>pronom relatif</strong> (qui, que, dont, où), elle complète un nom (l'antécédent). Ex : Le livre <em>que je lis</em> est passionnant.` },
        { type: 'def', label: 'DEF', titre: 'La subordonnée conjonctive', contenu: `Introduite par une <strong>conjonction</strong> : complétive (« que », COD du verbe) ou circonstancielle (« parce que », « quand », « pour que »…) exprimant cause, temps, but, etc.` }
      ]},
      { titre: 'La voix passive', cartes: [
        { type: 'def', label: 'DEF', titre: 'Voix active / voix passive', contenu: `À la <strong>voix active</strong>, le sujet fait l'action (Le chat mange la souris). À la <strong>voix passive</strong>, le sujet subit l'action (La souris est mangée par le chat).` },
        { type: 'meth', label: 'METH', titre: 'Transformer à la voix passive', contenu: `Le <strong>COD</strong> de la phrase active devient <strong>sujet</strong>, le verbe se met avec l'auxiliaire <em>être</em> au même temps, et l'ancien sujet devient <strong>complément d'agent</strong> (introduit par « par »).` }
      ]},
      { titre: 'Le discours rapporté', cartes: [
        { type: 'def', label: 'DEF', titre: 'Discours direct', contenu: `Paroles rapportées <strong>telles quelles</strong>, entre guillemets, avec un verbe de parole. Ex : Il dit : « Je viendrai demain. »` },
        { type: 'def', label: 'DEF', titre: 'Discours indirect', contenu: `Paroles <strong>intégrées</strong> à la phrase par une subordonnée, sans guillemets. Ex : Il dit qu'il viendra le lendemain. Attention aux changements de temps et de pronoms.` },
        { type: 'meth', label: 'METH', titre: 'Passer au discours indirect', contenu: `<ul><li>Supprimer les guillemets, introduire « que »</li><li>Changer les <strong>pronoms</strong> (je → il)</li><li>Reculer les <strong>temps</strong> (présent → imparfait, futur → conditionnel)</li><li>Adapter les indicateurs (demain → le lendemain)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-3e-orthographe',
    matiere: 'fr',
    titre: 'Orthographe : accords et homophones',
    ordre: 11,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les accords', cartes: [
        { type: 'form', label: 'FORM', titre: 'Accord du participe passé avec être', contenu: `Avec l'auxiliaire <strong>être</strong>, le participe passé s'accorde en genre et en nombre avec le <strong>sujet</strong>. Ex : Elles sont <em>parties</em>.` },
        { type: 'form', label: 'FORM', titre: 'Accord du participe passé avec avoir', contenu: `Avec l'auxiliaire <strong>avoir</strong>, le participe passé s'accorde avec le <strong>COD</strong> seulement s'il est placé <strong>avant</strong> le verbe. Ex : Les fleurs que j'ai <em>cueillies</em>.` },
        { type: 'form', label: 'FORM', titre: 'Accord de l\'adjectif', contenu: `L'adjectif s'accorde en <strong>genre</strong> et en <strong>nombre</strong> avec le nom qu'il qualifie. Ex : des fleurs <em>blanches</em>.` }
      ]},
      { titre: 'Les homophones grammaticaux', cartes: [
        { type: 'meth', label: 'METH', titre: 'a / à', contenu: `<strong>a</strong> = verbe avoir (remplaçable par « avait »). <strong>à</strong> = préposition. Ex : Il <em>a</em> (avait) un livre <em>à</em> lire.` },
        { type: 'meth', label: 'METH', titre: 'et / est', contenu: `<strong>et</strong> = conjonction (remplaçable par « et puis »). <strong>est</strong> = verbe être (remplaçable par « était »). Ex : Il <em>est</em> grand <em>et</em> fort.` },
        { type: 'meth', label: 'METH', titre: 'ses / ces / c\'est / s\'est', contenu: `<strong>ses</strong> = à lui (ses affaires). <strong>ces</strong> = ceux-là (ces livres). <strong>c'est</strong> = cela est. <strong>s'est</strong> = devant un verbe pronominal (il s'est levé).` },
        { type: 'meth', label: 'METH', titre: 'ou / où', contenu: `<strong>ou</strong> = ou bien (choix). <strong>où</strong> = lieu ou temps. Ex : Le café <em>où</em> je vais, thé <em>ou</em> café ?` }
      ]},
      { titre: 'Les pièges fréquents', cartes: [
        { type: 'meth', label: 'METH', titre: 'leur / leurs', contenu: `<strong>leur</strong> devant un verbe = pronom invariable (je leur parle). <strong>leur / leurs</strong> devant un nom = déterminant qui s'accorde (leurs livres).` },
        { type: 'meth', label: 'METH', titre: 'tout / tous / toute(s)', contenu: `Adverbe (invariable) = « entièrement » (tout petit). Déterminant ou pronom = s'accorde (tous les jours, toutes les filles).` },
        { type: 'meth', label: 'METH', titre: 'Pour réussir la dictée', contenu: `<ul><li>Repérer le verbe et son sujet (accord)</li><li>Repérer les noms et leurs adjectifs (accords)</li><li>Tester les homophones par remplacement</li><li>Relire en se concentrant sur les terminaisons</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-3e-conjugaison',
    matiere: 'fr',
    titre: 'Conjugaison : temps et modes',
    ordre: 12,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les temps de l\'indicatif', cartes: [
        { type: 'def', label: 'DEF', titre: 'Imparfait et passé simple', contenu: `Dans un récit : l'<strong>imparfait</strong> exprime le décor, l'habitude, la description (il faisait beau). Le <strong>passé simple</strong> exprime les actions de premier plan, brèves (soudain, il entra).` },
        { type: 'def', label: 'DEF', titre: 'Passé composé et plus-que-parfait', contenu: `Le <strong>passé composé</strong> exprime une action passée achevée liée au présent. Le <strong>plus-que-parfait</strong> exprime une action antérieure à une autre action passée (il avait fini quand je suis arrivé).` },
        { type: 'form', label: 'FORM', titre: 'Le futur simple', contenu: `Radical (souvent l'infinitif) + terminaisons <strong>-ai, -as, -a, -ons, -ez, -ont</strong>. Ex : je parler<em>ai</em>, nous finir<em>ons</em>.` }
      ]},
      { titre: 'Les autres modes', cartes: [
        { type: 'def', label: 'DEF', titre: 'Le conditionnel', contenu: `Mode de l'<strong>hypothèse</strong> et de la <strong>politesse</strong>. Présent : radical du futur + terminaisons de l'imparfait. Ex : je voudrais, il serait. « Si j'avais le temps, je viendrais. »` },
        { type: 'def', label: 'DEF', titre: 'Le subjonctif', contenu: `Mode du <strong>souhait, du doute, de l'obligation</strong>, souvent après « que ». Ex : Il faut que tu <em>viennes</em>. Je veux qu'il <em>parte</em>.` },
        { type: 'def', label: 'DEF', titre: 'L\'impératif', contenu: `Mode de l'<strong>ordre</strong> et du conseil, sans sujet exprimé, à trois personnes. Ex : Mange ! Finissons ! Venez !` }
      ]},
      { titre: 'Maîtriser les terminaisons', cartes: [
        { type: 'meth', label: 'METH', titre: 'Présent : -er ou -é ?', contenu: `Pour choisir entre l'infinitif (-er) et le participe passé (-é), remplacer par un verbe du 3e groupe : si « vendre » convient → infinitif ; si « vendu » convient → participe passé.` },
        { type: 'form', label: 'FORM', titre: 'Présent des verbes du 1er groupe', contenu: `Terminaisons : <strong>-e, -es, -e, -ons, -ez, -ent</strong>. Ex : je chant<em>e</em>, nous chant<em>ons</em>, ils chant<em>ent</em>.` }
      ]}
    ]
  },
  {
    id: 'fr-3e-figures',
    matiere: 'fr',
    titre: 'Les figures de style',
    ordre: 13,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les figures de comparaison', cartes: [
        { type: 'def', label: 'DEF', titre: 'La comparaison', contenu: `Rapprochement de deux éléments à l'aide d'un <strong>outil de comparaison</strong> (comme, tel, semblable à). Ex : « Il est fort <em>comme</em> un lion. »` },
        { type: 'def', label: 'DEF', titre: 'La métaphore', contenu: `Comparaison <strong>sans outil de comparaison</strong>. Ex : « Cet homme est un lion. » Crée une image plus directe et frappante.` },
        { type: 'def', label: 'DEF', titre: 'La personnification', contenu: `Attribuer des caractéristiques humaines à un objet, un animal ou une idée. Ex : « Le vent <em>hurlait</em> dans la nuit. »` }
      ]},
      { titre: 'Les figures d\'amplification et d\'opposition', cartes: [
        { type: 'def', label: 'DEF', titre: 'L\'hyperbole', contenu: `Exagération pour produire un effet fort. Ex : « Je meurs de faim. », « mille fois merci ».` },
        { type: 'def', label: 'DEF', titre: 'L\'antithèse', contenu: `Rapprochement de deux idées <strong>opposées</strong> dans une même phrase. Ex : « Ici l'ombre, là la lumière. »` },
        { type: 'def', label: 'DEF', titre: 'L\'oxymore', contenu: `Deux mots de sens contraires réunis. Ex : « un silence assourdissant », « une obscure clarté ».` }
      ]},
      { titre: 'Les figures de sonorité et d\'insistance', cartes: [
        { type: 'def', label: 'DEF', titre: 'L\'anaphore', contenu: `Répétition d'un même mot ou groupe de mots en <strong>début</strong> de plusieurs phrases ou vers. Crée un effet d'insistance, de rythme.` },
        { type: 'def', label: 'DEF', titre: 'La gradation', contenu: `Suite de termes d'intensité croissante (ou décroissante). Ex : « Je le vois, je le sens, je le crains. »` },
        { type: 'meth', label: 'METH', titre: 'Analyser une figure de style', contenu: `<ul><li>Repérer la figure et la <strong>nommer</strong></li><li>Citer le passage précis</li><li>Expliquer l'<strong>effet</strong> produit sur le lecteur et le sens</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-3e-litterature',
    matiere: 'fr',
    titre: 'Littérature : autobiographie, poésie engagée et guerre',
    ordre: 14,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Se raconter, se représenter', cartes: [
        { type: 'def', label: 'DEF', titre: 'L\'autobiographie', contenu: `Récit qu'un auteur fait de sa <strong>propre vie</strong>. L'auteur, le narrateur et le personnage principal sont une seule et même personne. Récit à la 1re personne (« je »).` },
        { type: 'def', label: 'DEF', titre: 'Le pacte autobiographique', contenu: `Engagement de l'auteur à dire la <strong>vérité</strong> sur sa vie. Notion définie par Philippe Lejeune. À distinguer de l'autofiction (en partie inventée).` },
        { type: 'ex', label: 'EX', titre: 'Exemples d\'œuvres', contenu: `<em>Les Confessions</em> de Rousseau, <em>Enfance</em> de Nathalie Sarraute, ou les récits de guerre comme <em>Si c'est un homme</em> de Primo Levi (témoignage).` }
      ]},
      { titre: 'La poésie engagée', cartes: [
        { type: 'def', label: 'DEF', titre: 'Poésie engagée', contenu: `Poésie qui <strong>défend une cause</strong> ou dénonce une injustice (guerre, liberté, droits humains). Le poète met son art au service d'un combat.` },
        { type: 'ex', label: 'EX', titre: 'Le poème « Liberté »', contenu: `Poème de <strong>Paul Éluard</strong> (1942), hymne à la liberté écrit sous l'Occupation, diffusé par la Résistance. Exemple emblématique de poésie engagée.` },
        { type: 'def', label: 'DEF', titre: 'Quelques notions de versification', contenu: `<strong>Vers</strong> : ligne d'un poème. <strong>Strophe</strong> : groupe de vers. <strong>Rime</strong> : retour d'un même son en fin de vers. L'<strong>alexandrin</strong> compte 12 syllabes.` }
      ]},
      { titre: 'Agir dans la cité : guerre et XXe siècle', cartes: [
        { type: 'def', label: 'DEF', titre: 'La littérature de témoignage', contenu: `Textes qui <strong>témoignent</strong> d'événements vécus (guerres, camps) pour transmettre la mémoire et alerter les générations futures. Devoir de mémoire.` },
        { type: 'ex', label: 'EX', titre: 'La guerre dans la littérature', contenu: `De nombreuses œuvres dénoncent l'horreur de la guerre : poèmes d'Apollinaire (Première Guerre mondiale), récits sur la Shoah, poésie de la Résistance (Aragon, Éluard).` }
      ]}
    ]
  },
  {
    id: 'fr-3e-methodes',
    matiere: 'fr',
    titre: 'Méthodes du brevet de français',
    ordre: 15,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Analyser un texte', cartes: [
        { type: 'meth', label: 'METH', titre: 'Répondre aux questions de compréhension', contenu: `<ul><li>Lire la question et repérer ce qu'elle demande</li><li><strong>Citer</strong> le texte (guillemets + ligne)</li><li>Rédiger une phrase complète qui reprend la question</li><li>Justifier sa réponse</li></ul>` },
        { type: 'meth', label: 'METH', titre: 'Repérer le narrateur et le point de vue', contenu: `Identifier qui raconte (1re ou 3e personne) et le <strong>point de vue</strong> (interne : on suit un personnage ; externe : témoin neutre ; omniscient : le narrateur sait tout).` }
      ]},
      { titre: 'La réécriture et la dictée', cartes: [
        { type: 'meth', label: 'METH', titre: 'Réussir la réécriture', contenu: `On demande de transformer un passage (changer le temps, le nombre, le genre, la personne). Méthode : repérer <strong>tous</strong> les mots concernés par le changement et adapter les accords.` },
        { type: 'meth', label: 'METH', titre: 'La dictée', contenu: `Écouter attentivement, écrire au brouillon les mots difficiles, vérifier les <strong>accords</strong> (sujet-verbe, nom-adjectif, participes passés) et les homophones lors de la relecture.` }
      ]},
      { titre: 'Le développement argumenté (rédaction)', cartes: [
        { type: 'meth', label: 'METH', titre: 'Sujet d\'imagination', contenu: `Inventer un récit en respectant la consigne (personnages, lieu, temps). Soigner la <strong>cohérence</strong>, varier le vocabulaire, employer des figures de style et bien ponctuer.` },
        { type: 'meth', label: 'METH', titre: 'Sujet de réflexion', contenu: `Donner son avis de façon organisée : <strong>introduction</strong> (annonce du sujet), <strong>développement</strong> (arguments + exemples), <strong>conclusion</strong> (bilan).` },
        { type: 'meth', label: 'METH', titre: 'Construire un argument', contenu: `Un paragraphe = un <strong>argument</strong> + un <strong>exemple</strong> qui l'illustre. Utiliser des connecteurs logiques (d'abord, de plus, en effet, par conséquent).` }
      ]}
    ]
  },

  // ============================================================
  // =======================  ANGLAIS (ANG)  ====================
  // ============================================================
  {
    id: 'ang-3e-temps',
    matiere: 'ang',
    titre: 'Les temps du présent et du passé',
    ordre: 16,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Le présent', cartes: [
        { type: 'def', label: 'DEF', titre: 'Present simple', contenu: `Exprime une <strong>habitude</strong> ou une vérité générale. Ajout d'un <strong>-s</strong> à la 3e personne du singulier. Ex : She <em>works</em> in London. Mots-clés : always, often, every day.` },
        { type: 'def', label: 'DEF', titre: 'Present continuous (BE + -ING)', contenu: `Exprime une action <strong>en cours</strong> au moment où l'on parle. Forme : be (am/is/are) + verbe-ing. Ex : I <em>am working</em> now. Mots-clés : now, at the moment, look!` },
        { type: 'meth', label: 'METH', titre: 'Choisir simple ou continuous', contenu: `<ul><li>Habitude / général → <strong>present simple</strong></li><li>Action en train de se dérouler → <strong>present continuous</strong></li></ul>Comparer : He <em>plays</em> tennis (habitude) / He <em>is playing</em> tennis (maintenant).` }
      ]},
      { titre: 'Le passé', cartes: [
        { type: 'def', label: 'DEF', titre: 'Prétérit (past simple)', contenu: `Exprime une action <strong>terminée</strong> dans le passé, à un moment précis. Verbes réguliers : <strong>-ed</strong> (worked). Verbes irréguliers à apprendre (go → went). Mots-clés : yesterday, last week, in 2010, ago.` },
        { type: 'def', label: 'DEF', titre: 'Past continuous', contenu: `Exprime une action <strong>en cours dans le passé</strong>. Forme : was/were + verbe-ing. Ex : I <em>was reading</em> when he called. Souvent une action interrompue par une autre (prétérit).` },
        { type: 'ex', label: 'EX', titre: 'Combiner les deux passés', contenu: `Action longue (past continuous) interrompue par une action brève (prétérit) : « While I <em>was sleeping</em>, the phone <em>rang</em>. »` }
      ]},
      { titre: 'Le present perfect', cartes: [
        { type: 'def', label: 'DEF', titre: 'Present perfect', contenu: `Forme : have/has + participe passé. Relie le <strong>passé au présent</strong> : action passée avec un résultat ou une importance maintenant. Ex : I <em>have finished</em> my homework. Mots-clés : already, yet, ever, never, just, since, for.` },
        { type: 'meth', label: 'METH', titre: 'Prétérit ou present perfect ?', contenu: `<ul><li>Moment précis terminé (yesterday) → <strong>prétérit</strong></li><li>Lien avec le présent, durée (since, for) ou expérience (ever, never) → <strong>present perfect</strong></li></ul>` },
        { type: 'form', label: 'FORM', titre: 'SINCE et FOR', contenu: `<strong>since</strong> = depuis un point de départ (since 2010). <strong>for</strong> = pendant une durée (for two years). Ex : I have lived here <em>for</em> ten years / <em>since</em> 2016.` }
      ]}
    ]
  },
  {
    id: 'ang-3e-futur-conditionnel',
    matiere: 'ang',
    titre: 'Le futur et le conditionnel',
    ordre: 17,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Exprimer le futur', cartes: [
        { type: 'def', label: 'DEF', titre: 'WILL', contenu: `Exprime une <strong>décision spontanée</strong>, une prédiction ou une promesse. Forme : will + base verbale. Ex : I think it <em>will</em> rain. I <em>will</em> help you!` },
        { type: 'def', label: 'DEF', titre: 'BE GOING TO', contenu: `Exprime une <strong>intention</strong> ou un projet déjà décidé, ou une prédiction fondée sur des indices. Ex : I <em>am going to</em> visit London next week. Look at those clouds, it <em>is going to</em> rain.` },
        { type: 'meth', label: 'METH', titre: 'Will ou be going to ?', contenu: `<ul><li>Décision sur le moment, prédiction → <strong>will</strong></li><li>Projet déjà prévu, intention → <strong>be going to</strong></li></ul>` }
      ]},
      { titre: 'Le conditionnel', cartes: [
        { type: 'def', label: 'DEF', titre: 'WOULD', contenu: `Auxiliaire du conditionnel. Exprime une situation <strong>hypothétique</strong> ou la politesse. Ex : I <em>would</em> like a coffee. He <em>would</em> travel if he had money.` },
        { type: 'form', label: 'FORM', titre: 'If-clause type 1 (réel)', contenu: `Condition <strong>possible</strong> dans le futur. Structure : <strong>If + present simple, … will + base verbale</strong>. Ex : If it rains, I <em>will</em> stay home.` },
        { type: 'form', label: 'FORM', titre: 'If-clause type 2 (irréel)', contenu: `Condition <strong>imaginaire</strong> ou peu probable. Structure : <strong>If + prétérit, … would + base verbale</strong>. Ex : If I <em>were</em> rich, I <em>would</em> travel the world.` }
      ]},
      { titre: 'S\'entraîner', cartes: [
        { type: 'ex', label: 'EX', titre: 'Comparer les deux types', contenu: `<ul><li>Type 1 (possible) : « If you study, you <em>will</em> pass. »</li><li>Type 2 (imaginaire) : « If you studied, you <em>would</em> pass. »</li></ul>` },
        { type: 'meth', label: 'METH', titre: 'Repérer le type de if-clause', contenu: `Regarder le verbe après « if » : <strong>présent</strong> → type 1 (will dans l'autre partie) ; <strong>prétérit</strong> → type 2 (would dans l'autre partie).` }
      ]}
    ]
  },
  {
    id: 'ang-3e-modaux-passif',
    matiere: 'ang',
    titre: 'Les modaux et la voix passive',
    ordre: 18,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Les modaux', cartes: [
        { type: 'def', label: 'DEF', titre: 'Les auxiliaires modaux', contenu: `Petits mots invariables suivis de la <strong>base verbale</strong> (sans « to ») qui nuancent le sens : can, must, may, should, etc. Pas de « -s » à la 3e personne.` },
        { type: 'prop', label: 'PROP', titre: 'Sens des principaux modaux', contenu: `<ul><li><strong>can</strong> : pouvoir, savoir (capacité)</li><li><strong>must</strong> : devoir (obligation forte)</li><li><strong>should</strong> : devrait (conseil)</li><li><strong>may / might</strong> : peut-être (probabilité)</li><li><strong>could</strong> : pourrait, pouvait</li></ul>` },
        { type: 'ex', label: 'EX', titre: 'Exemples de modaux', contenu: `You <em>must</em> wear a helmet (obligation). You <em>should</em> rest (conseil). She <em>can</em> swim (capacité). It <em>might</em> snow (probabilité).` }
      ]},
      { titre: 'La voix passive', cartes: [
        { type: 'def', label: 'DEF', titre: 'Passive voice', contenu: `Met en avant ce qui <strong>subit</strong> l'action. Forme : <strong>BE</strong> (au temps voulu) + <strong>participe passé</strong>. L'agent est introduit par « by ». Ex : The cake <em>was eaten</em> (by Tom).` },
        { type: 'meth', label: 'METH', titre: 'Construire le passif', contenu: `<ul><li>Le COD de la phrase active devient sujet</li><li>On conjugue <strong>be</strong> au même temps que le verbe actif</li><li>On ajoute le participe passé</li></ul>Ex : Shakespeare wrote this play → This play <em>was written</em> by Shakespeare.` },
        { type: 'ex', label: 'EX', titre: 'Le passif à plusieurs temps', contenu: `<ul><li>Présent : English <em>is spoken</em> here.</li><li>Passé : The house <em>was built</em> in 1900.</li><li>Futur : The work <em>will be done</em> tomorrow.</li></ul>` }
      ]}
    ]
  },
  {
    id: 'ang-3e-discours-expression',
    matiere: 'ang',
    titre: 'Le discours indirect et l\'expression',
    ordre: 19,
    filiere: '3eme',
    enrich: false,
    sections: [
      { titre: 'Le discours indirect', cartes: [
        { type: 'def', label: 'DEF', titre: 'Reported speech', contenu: `Rapporter les paroles de quelqu'un sans guillemets. On introduit souvent par <strong>said that</strong> ou <strong>told (someone) that</strong>, et l'on recule les temps.` },
        { type: 'form', label: 'FORM', titre: 'Concordance des temps', contenu: `<ul><li>present → past (am → was)</li><li>past simple → past perfect (went → had gone)</li><li>will → would</li><li>can → could</li></ul>Ex : « I am tired » → He said he <em>was</em> tired.` },
        { type: 'meth', label: 'METH', titre: 'Rapporter une question', contenu: `On garde l'ordre <strong>sujet + verbe</strong> (pas d'inversion) et on utilise <strong>if/whether</strong> pour les questions fermées. Ex : « Are you ready? » → She asked if I <em>was</em> ready.` }
      ]},
      { titre: 'Expression écrite et orale', cartes: [
        { type: 'meth', label: 'METH', titre: 'Réussir l\'expression écrite', contenu: `<ul><li>Lire la consigne et respecter le <strong>type de texte</strong> (email, récit, dialogue)</li><li>Varier les temps et le vocabulaire</li><li>Utiliser des <strong>connecteurs</strong> (first, then, because, but, finally)</li><li>Relire les accords et les « -s » de 3e personne</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Connecteurs logiques utiles', contenu: `<ul><li><strong>and, but, so, because</strong></li><li><strong>first, then, after that, finally</strong></li><li><strong>however, moreover, for example</strong></li></ul>` },
        { type: 'meth', label: 'METH', titre: 'Prendre la parole à l\'oral', contenu: `Parler lentement et clairement, employer des phrases simples mais correctes, illustrer par des exemples et ne pas avoir peur de se reprendre. Préparer une introduction et une conclusion.` }
      ]}
    ]
  }
];
