export const DATA = [
  // ============================================================
  // ===================== HISTOIRE-GÉO (hg) ====================
  // ============================================================
  {
    id: 'hg-5e-feodalite',
    matiere: 'hg',
    titre: 'La féodalité : seigneurs et paysans',
    ordre: 1,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'La société féodale', cartes: [
        { type:'def', label:'DEF', titre:'La féodalité', contenu:`La <strong>féodalité</strong> est le système d'organisation politique et social qui domine l'Europe occidentale du X<sup>e</sup> au XIII<sup>e</sup> siècle. Elle repose sur des liens personnels entre un seigneur et son vassal.` },
        { type:'def', label:'DEF', titre:'Le vassal et le suzerain', contenu:`Le <strong>vassal</strong> jure fidélité à un seigneur plus puissant, le <strong>suzerain</strong>, lors de la cérémonie de l'<em>hommage</em>. En échange, le suzerain lui confie un <em>fief</em> (généralement une terre) et le protège.` },
        { type:'def', label:'DEF', titre:'L\'adoubement', contenu:`L'<strong>adoubement</strong> est la cérémonie par laquelle un jeune homme devient chevalier. Il reçoit ses armes (épée, éperons) et s'engage à respecter un code d'honneur : la <em>chevalerie</em>.` },
        { type:'prop', label:'PROP', titre:'Les trois ordres', contenu:`La société médiévale est divisée en <strong>trois ordres</strong> :<ul><li>ceux qui prient (le clergé)</li><li>ceux qui combattent (la noblesse)</li><li>ceux qui travaillent (les paysans)</li></ul>Chaque ordre a un rôle voulu par Dieu.` }
      ]},
      { titre: 'Le château fort', cartes: [
        { type:'def', label:'DEF', titre:'Le château fort', contenu:`Le <strong>château fort</strong> est la résidence fortifiée du seigneur. D'abord en bois sur une motte, il devient en pierre à partir du XII<sup>e</sup> siècle. Il sert à protéger le seigneur, sa famille et les paysans en cas d'attaque.` },
        { type:'prop', label:'PROP', titre:'Les éléments de défense', contenu:`Un château fort comprend : un <strong>donjon</strong> (tour principale), des <strong>remparts</strong> (murailles), des <strong>tours</strong>, un <strong>pont-levis</strong> et des <strong>douves</strong> (fossés remplis d'eau).` },
        { type:'ex', label:'EX', titre:'Le château de Carcassonne', contenu:`La cité de <strong>Carcassonne</strong> (Aude) est un exemple célèbre de ville fortifiée médiévale, avec sa double enceinte de remparts et ses nombreuses tours. Elle a été restaurée au XIX<sup>e</sup> siècle.` }
      ]},
      { titre: 'La seigneurie', cartes: [
        { type:'def', label:'DEF', titre:'La seigneurie', contenu:`La <strong>seigneurie</strong> est le domaine d'un seigneur. Elle se compose de la <em>réserve</em> (terres exploitées directement par le seigneur) et des <em>tenures</em> (terres louées aux paysans).` },
        { type:'def', label:'DEF', titre:'Les redevances', contenu:`Les paysans doivent au seigneur des <strong>redevances</strong> : le <em>cens</em> (impôt en argent), le <em>champart</em> (part de la récolte) et les <em>corvées</em> (travail gratuit sur la réserve).` },
        { type:'def', label:'DEF', titre:'Les banalités', contenu:`Les <strong>banalités</strong> sont des taxes que les paysans paient pour utiliser le four, le moulin ou le pressoir du seigneur, qu'ils sont obligés d'employer.` },
        { type:'prop', label:'PROP', titre:'Serfs et vilains', contenu:`Les paysans libres sont les <strong>vilains</strong>. Les <strong>serfs</strong> sont attachés à la terre du seigneur : ils ne peuvent ni la quitter ni se marier sans son accord.` }
      ]},
      { titre: 'La vie des paysans', cartes: [
        { type:'prop', label:'PROP', titre:'Le travail de la terre', contenu:`La grande majorité de la population est paysanne. Le travail est dur : on cultive surtout des céréales (blé, seigle, avoine) avec des outils simples (araire puis charrue).` },
        { type:'ex', label:'EX', titre:'Les progrès techniques', contenu:`À partir du XI<sup>e</sup> siècle, des progrès améliorent les rendements : la <strong>charrue</strong> à roues, le <strong>collier d'épaule</strong> pour les chevaux, le <strong>moulin</strong> à eau et l'<strong>assolement triennal</strong> (rotation des cultures).` },
        { type:'meth', label:'METH', titre:'Lire un calendrier des travaux', contenu:`Pour analyser une enluminure du <em>travail des mois</em> :<ul><li>identifie la saison représentée</li><li>repère l'activité agricole (labour, moisson, vendanges…)</li><li>relie-la au cycle de l'année paysanne</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-5e-eglise',
    matiere: 'hg',
    titre: 'L\'Église au Moyen Âge',
    ordre: 2,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Une société chrétienne', cartes: [
        { type:'def', label:'DEF', titre:'Le christianisme', contenu:`Au Moyen Âge, l'<strong>Église catholique</strong> rythme la vie de tous. Être chrétien, c'est croire en Dieu, suivre les enseignements de l'Église et espérer le <em>salut</em> (la vie éternelle au paradis).` },
        { type:'def', label:'DEF', titre:'Les sacrements', contenu:`Les <strong>sacrements</strong> sont des rites essentiels de la vie chrétienne : le <em>baptême</em> (entrée dans la communauté), la <em>communion</em>, le <em>mariage</em> et l'<em>extrême-onction</em> (avant la mort).` },
        { type:'prop', label:'PROP', titre:'Le poids de l\'Église', contenu:`L'Église encadre la vie de la naissance à la mort. Elle perçoit la <strong>dîme</strong> (impôt d'environ un dixième des récoltes) et possède de vastes terres. Elle est très riche et puissante.` }
      ]},
      { titre: 'Le clergé', cartes: [
        { type:'def', label:'DEF', titre:'Le clergé séculier', contenu:`Le <strong>clergé séculier</strong> vit parmi les fidèles (« dans le siècle ») : ce sont les <em>prêtres</em> des paroisses, les <em>évêques</em> des diocèses et le <em>pape</em>, chef de l'Église.` },
        { type:'def', label:'DEF', titre:'Le clergé régulier', contenu:`Le <strong>clergé régulier</strong> vit à l'écart du monde, dans des monastères, en suivant une <em>règle</em>. Ce sont les <strong>moines</strong> et les <strong>moniales</strong>.` },
        { type:'ex', label:'EX', titre:'La règle de saint Benoît', contenu:`Les moines bénédictins suivent la <strong>règle de saint Benoît</strong> : « prie et travaille » (<em>ora et labora</em>). Leur journée est partagée entre la prière, le travail manuel et la copie de manuscrits.` }
      ]},
      { titre: 'Bâtir des églises', cartes: [
        { type:'def', label:'DEF', titre:'L\'art roman', contenu:`L'<strong>art roman</strong> (XI<sup>e</sup>-XII<sup>e</sup> siècle) se caractérise par des églises massives, aux murs épais, aux petites fenêtres et aux voûtes en plein cintre (arrondies). L'intérieur est sombre.` },
        { type:'def', label:'DEF', titre:'L\'art gothique', contenu:`L'<strong>art gothique</strong> (à partir du XII<sup>e</sup> siècle) permet des cathédrales hautes et lumineuses grâce à la <em>croisée d'ogives</em>, aux <em>arcs-boutants</em> et aux grands <em>vitraux</em>.` },
        { type:'ex', label:'EX', titre:'Notre-Dame de Paris', contenu:`La cathédrale <strong>Notre-Dame de Paris</strong>, construite à partir de 1163, est un chef-d'œuvre de l'art gothique avec ses voûtes élevées, sa rosace et ses arcs-boutants.` },
        { type:'meth', label:'METH', titre:'Décrire une cathédrale', contenu:`Pour décrire un édifice religieux :<ul><li>identifie le style (roman ou gothique)</li><li>repère les éléments architecturaux (voûte, vitraux, portail)</li><li>explique leur fonction (lumière, hauteur = élévation vers Dieu)</li></ul>` }
      ]},
      { titre: 'Croyances et croisades', cartes: [
        { type:'def', label:'DEF', titre:'Le pèlerinage', contenu:`Un <strong>pèlerinage</strong> est un voyage vers un lieu saint pour prier et obtenir le pardon de ses péchés. Les grands pèlerinages mènent à Jérusalem, Rome et <em>Saint-Jacques-de-Compostelle</em>.` },
        { type:'def', label:'DEF', titre:'Les croisades', contenu:`Les <strong>croisades</strong> sont des expéditions militaires lancées par les chrétiens à partir de 1095 pour reconquérir Jérusalem, alors aux mains des musulmans.` },
        { type:'prop', label:'PROP', titre:'L\'Inquisition', contenu:`L'Église combat les <strong>hérétiques</strong> (ceux qui pensent autrement) grâce à un tribunal religieux, l'<strong>Inquisition</strong>. Les cathares, dans le sud de la France, en furent les victimes.` }
      ]}
    ]
  },
  {
    id: 'hg-5e-pouvoir-royal',
    matiere: 'hg',
    titre: 'L\'affirmation du pouvoir royal en France',
    ordre: 3,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Un royaume morcelé', cartes: [
        { type:'def', label:'DEF', titre:'Le domaine royal', contenu:`Le <strong>domaine royal</strong> est le territoire que le roi de France contrôle directement. À l'an mil, il est très réduit, limité à l'Île-de-France autour de Paris et Orléans.` },
        { type:'def', label:'DEF', titre:'Les Capétiens', contenu:`La dynastie des <strong>Capétiens</strong> règne sur la France à partir de 987 avec <em>Hugues Capet</em>. Les rois transmettent la couronne de père en fils (hérédité).` },
        { type:'prop', label:'PROP', titre:'Un roi faible au départ', contenu:`Au début, le roi n'est pas plus puissant que certains grands seigneurs, comme le duc de Normandie, qui devient aussi roi d'Angleterre en 1066.` }
      ]},
      { titre: 'Agrandir le royaume', cartes: [
        { type:'ex', label:'EX', titre:'Philippe Auguste', contenu:`<strong>Philippe Auguste</strong> (1180-1223) agrandit considérablement le domaine royal en reprenant la Normandie au roi d'Angleterre. Il remporte la bataille de <em>Bouvines</em> en 1214.` },
        { type:'ex', label:'EX', titre:'Saint Louis', contenu:`<strong>Louis IX</strong>, dit <em>Saint Louis</em> (1226-1270), est réputé pour sa justice. Il rendait, dit-on, la justice sous un chêne à Vincennes. Il participa à deux croisades.` },
        { type:'ex', label:'EX', titre:'Philippe le Bel', contenu:`<strong>Philippe IV le Bel</strong> (1285-1314) renforce l'État : il s'entoure de <em>légistes</em> (juristes), crée des impôts et affirme l'indépendance du roi face au pape.` }
      ]},
      { titre: 'Les outils du pouvoir', cartes: [
        { type:'def', label:'DEF', titre:'Le sacre', contenu:`Le <strong>sacre</strong> est la cérémonie religieuse qui fait du roi l'élu de Dieu. Il a lieu à <em>Reims</em>, où le roi est oint d'une huile sainte. Le roi devient ainsi inviolable et sacré.` },
        { type:'def', label:'DEF', titre:'L\'administration royale', contenu:`Pour gouverner, le roi s'appuie sur des <strong>baillis</strong> et des <strong>sénéchaux</strong>, fonctionnaires chargés de représenter le roi, de rendre la justice et de collecter les impôts dans les provinces.` },
        { type:'def', label:'DEF', titre:'Les états généraux', contenu:`Les <strong>états généraux</strong>, réunis pour la première fois en 1302 par Philippe le Bel, rassemblent des représentants des trois ordres pour soutenir les décisions du roi.` }
      ]},
      { titre: 'La guerre de Cent Ans', cartes: [
        { type:'def', label:'DEF', titre:'La guerre de Cent Ans', contenu:`La <strong>guerre de Cent Ans</strong> (1337-1453) oppose les rois de France et d'Angleterre, qui revendiquent la couronne de France. Elle est ponctuée de défaites françaises et d'épidémies de peste.` },
        { type:'ex', label:'EX', titre:'Jeanne d\'Arc', contenu:`<strong>Jeanne d'Arc</strong>, jeune paysanne lorraine, redonne courage à l'armée française. Elle fait sacrer Charles VII à Reims en 1429, mais est capturée et brûlée à Rouen en 1431.` },
        { type:'prop', label:'PROP', titre:'Un État renforcé', contenu:`À la fin de la guerre, en 1453, la France a presque chassé les Anglais. La monarchie sort renforcée : armée permanente, impôt régulier (la <em>taille</em>) et autorité accrue du roi.` }
      ]}
    ]
  },
  {
    id: 'hg-5e-islam-medieval',
    matiere: 'hg',
    titre: 'L\'Islam médiéval et ses empires',
    ordre: 4,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'La naissance de l\'Islam', cartes: [
        { type:'def', label:'DEF', titre:'L\'islam', contenu:`L'<strong>islam</strong> est une religion monothéiste (un seul Dieu, <em>Allah</em>) fondée au VII<sup>e</sup> siècle en Arabie par le prophète <strong>Mahomet</strong>. Ses fidèles sont les <em>musulmans</em>.` },
        { type:'def', label:'DEF', titre:'L\'Hégire', contenu:`L'<strong>Hégire</strong> est le départ de Mahomet de La Mecque vers Médine en 622. Cette date marque le début du calendrier musulman.` },
        { type:'def', label:'DEF', titre:'Le Coran', contenu:`Le <strong>Coran</strong> est le livre sacré des musulmans. Il rassemble la parole de Dieu transmise à Mahomet. La <em>Sunna</em> rapporte les actes et paroles du Prophète.` },
        { type:'prop', label:'PROP', titre:'Les cinq piliers', contenu:`Les <strong>cinq piliers de l'islam</strong> sont :<ul><li>la profession de foi</li><li>les cinq prières quotidiennes</li><li>l'aumône</li><li>le jeûne du ramadan</li><li>le pèlerinage à La Mecque</li></ul>` }
      ]},
      { titre: 'Les grandes conquêtes', cartes: [
        { type:'def', label:'DEF', titre:'Le calife', contenu:`Après la mort de Mahomet, l'empire est dirigé par un <strong>calife</strong> (« successeur »), à la fois chef religieux et politique de la communauté musulmane.` },
        { type:'prop', label:'PROP', titre:'Un empire immense', contenu:`En moins d'un siècle, les armées musulmanes conquièrent un vaste empire allant de l'<em>Espagne</em> (Al-Andalus) à l'<em>Inde</em>, en passant par l'Afrique du Nord et le Proche-Orient.` },
        { type:'ex', label:'EX', titre:'Les dynasties', contenu:`Deux grandes dynasties dirigent successivement l'empire : les <strong>Omeyyades</strong> (capitale Damas) puis les <strong>Abbassides</strong> (capitale Bagdad à partir de 762).` }
      ]},
      { titre: 'Une brillante civilisation', cartes: [
        { type:'def', label:'DEF', titre:'La mosquée', contenu:`La <strong>mosquée</strong> est le lieu de prière des musulmans. On y trouve le <em>minaret</em> (tour d'où l'on appelle à la prière), la <em>cour</em>, la <em>salle de prière</em> et le <em>mihrab</em> (niche indiquant La Mecque).` },
        { type:'ex', label:'EX', titre:'Bagdad et Cordoue', contenu:`<strong>Bagdad</strong> et <strong>Cordoue</strong> sont de grandes capitales brillantes : palais, mosquées, bibliothèques et marchés. Des milliers d'habitants y vivent du commerce et de l'artisanat.` },
        { type:'prop', label:'PROP', titre:'Le savoir', contenu:`Les savants du monde musulman font progresser les <strong>sciences</strong> : mathématiques (l'<em>algèbre</em>, les chiffres « arabes »), médecine, astronomie. Ils traduisent et conservent les textes grecs antiques.` }
      ]},
      { titre: 'Commerce et échanges', cartes: [
        { type:'prop', label:'PROP', titre:'Un carrefour commercial', contenu:`Le monde musulman, situé entre l'Europe, l'Afrique et l'Asie, est un grand <strong>carrefour commercial</strong>. Les marchands y échangent épices, soie, or, esclaves et produits artisanaux.` },
        { type:'meth', label:'METH', titre:'Lire une carte d\'empire', contenu:`Pour lire une carte de l'expansion :<ul><li>repère le point de départ (l'Arabie)</li><li>suis les flèches des conquêtes et leurs dates</li><li>identifie l'étendue maximale de l'empire</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-5e-renaissance',
    matiere: 'hg',
    titre: 'La Renaissance et l\'Humanisme',
    ordre: 5,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Un renouveau artistique', cartes: [
        { type:'def', label:'DEF', titre:'La Renaissance', contenu:`La <strong>Renaissance</strong> est un mouvement artistique et intellectuel né en Italie au XV<sup>e</sup> siècle. Les artistes s'inspirent de l'Antiquité grecque et romaine et placent l'homme au centre de leurs œuvres.` },
        { type:'def', label:'DEF', titre:'La perspective', contenu:`La <strong>perspective</strong> est une technique de peinture qui donne l'illusion de la profondeur et du relief sur une surface plane. Les peintres de la Renaissance la maîtrisent parfaitement.` },
        { type:'def', label:'DEF', titre:'Le mécène', contenu:`Un <strong>mécène</strong> est un riche personnage (prince, banquier, pape) qui finance les artistes et commande des œuvres. Les <em>Médicis</em> de Florence sont de célèbres mécènes.` }
      ]},
      { titre: 'Les grands artistes', cartes: [
        { type:'ex', label:'EX', titre:'Léonard de Vinci', contenu:`<strong>Léonard de Vinci</strong> est le symbole de l'artiste complet : peintre (<em>La Joconde</em>), ingénieur, anatomiste et inventeur. Il termine sa vie en France, invité par François I<sup>er</sup>.` },
        { type:'ex', label:'EX', titre:'Michel-Ange et Raphaël', contenu:`<strong>Michel-Ange</strong> sculpte le <em>David</em> et peint le plafond de la chapelle Sixtine à Rome. <strong>Raphaël</strong> est célèbre pour ses madones et son sens de l'harmonie.` },
        { type:'ex', label:'EX', titre:'Les châteaux de la Loire', contenu:`En France, la Renaissance s'exprime dans les <strong>châteaux de la Loire</strong>, comme <em>Chambord</em>, construit sous François I<sup>er</sup>. Ce ne sont plus des forteresses mais des résidences de plaisance.` }
      ]},
      { titre: 'L\'Humanisme', cartes: [
        { type:'def', label:'DEF', titre:'L\'humanisme', contenu:`L'<strong>humanisme</strong> est un courant de pensée qui place l'<em>homme</em> et le savoir au centre des préoccupations. Les humanistes croient au progrès par l'éducation et la connaissance.` },
        { type:'ex', label:'EX', titre:'Érasme et Rabelais', contenu:`<strong>Érasme</strong>, savant des Pays-Bas, et <strong>Rabelais</strong>, écrivain français (<em>Gargantua</em>), sont de grands humanistes qui défendent l'éducation et la réflexion personnelle.` },
        { type:'th', label:'THM', titre:'Le rôle de l\'imprimerie', contenu:`L'<strong>imprimerie</strong>, mise au point par <em>Gutenberg</em> vers 1450, permet de produire les livres plus vite et moins cher. Les idées nouvelles se diffusent dans toute l'Europe.` }
      ]},
      { titre: 'Une nouvelle vision du monde', cartes: [
        { type:'th', label:'THM', titre:'La révolution astronomique', contenu:`<strong>Copernic</strong> puis <strong>Galilée</strong> affirment que la Terre tourne autour du Soleil (<em>héliocentrisme</em>), contre l'idée que tout tourne autour de la Terre. L'Église s'y oppose d'abord.` },
        { type:'meth', label:'METH', titre:'Analyser un tableau', contenu:`Pour étudier une œuvre de la Renaissance :<ul><li>identifie le sujet (religieux, mythologique, portrait)</li><li>observe la perspective et la lumière</li><li>relie l'œuvre aux idées humanistes (place de l'homme)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-5e-reformes',
    matiere: 'hg',
    titre: 'Les Réformes protestante et catholique',
    ordre: 6,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'La contestation de l\'Église', cartes: [
        { type:'def', label:'DEF', titre:'La Réforme', contenu:`La <strong>Réforme</strong> est le mouvement de contestation de l'Église catholique né au XVI<sup>e</sup> siècle. Elle aboutit à la naissance d'une nouvelle Église : le <em>protestantisme</em>.` },
        { type:'def', label:'DEF', titre:'Les indulgences', contenu:`Les <strong>indulgences</strong> sont des pardons que l'Église catholique vend pour effacer les péchés. Cette pratique est vivement critiquée par les réformateurs.` },
        { type:'ex', label:'EX', titre:'Martin Luther', contenu:`En 1517, le moine allemand <strong>Martin Luther</strong> publie ses <em>95 thèses</em> contre les indulgences. Il affirme que seule la foi sauve et que la Bible est la seule autorité.` }
      ]},
      { titre: 'Le protestantisme', cartes: [
        { type:'prop', label:'PROP', titre:'Les idées protestantes', contenu:`Les protestants rejettent l'autorité du pape, le culte des saints et certains sacrements. Ils lisent eux-mêmes la <strong>Bible</strong>, traduite dans leur langue, et leurs lieux de culte sont sobres : les <em>temples</em>.` },
        { type:'ex', label:'EX', titre:'Jean Calvin', contenu:`<strong>Jean Calvin</strong>, réformateur français installé à Genève, diffuse une autre forme de protestantisme : le <em>calvinisme</em>. Ses fidèles en France sont appelés <strong>huguenots</strong>.` },
        { type:'prop', label:'PROP', titre:'La diffusion', contenu:`Grâce à l'imprimerie, les idées protestantes se répandent vite en Allemagne, en Suisse, en Angleterre et en France, divisant l'Europe chrétienne.` }
      ]},
      { titre: 'La Réforme catholique', cartes: [
        { type:'def', label:'DEF', titre:'La Contre-Réforme', contenu:`Face au protestantisme, l'Église catholique réagit : c'est la <strong>Réforme catholique</strong> (ou Contre-Réforme). Elle réaffirme ses dogmes et combat les abus.` },
        { type:'ex', label:'EX', titre:'Le concile de Trente', contenu:`Le <strong>concile de Trente</strong> (1545-1563) réunit les évêques catholiques. Il confirme l'autorité du pape, maintient les sacrements et mieux forme les prêtres.` },
        { type:'ex', label:'EX', titre:'Les jésuites', contenu:`L'ordre des <strong>jésuites</strong>, fondé par Ignace de Loyola, défend le catholicisme par l'enseignement et les missions à travers le monde.` }
      ]},
      { titre: 'Les guerres de Religion', cartes: [
        { type:'def', label:'DEF', titre:'Les guerres de Religion', contenu:`Les <strong>guerres de Religion</strong> (1562-1598) opposent en France catholiques et protestants. Elles sont marquées par des massacres et de grandes violences.` },
        { type:'ex', label:'EX', titre:'La Saint-Barthélemy', contenu:`Le <strong>massacre de la Saint-Barthélemy</strong>, le 24 août 1572, voit l'assassinat de milliers de protestants à Paris, puis en province.` },
        { type:'th', label:'THM', titre:'L\'édit de Nantes', contenu:`En 1598, le roi <strong>Henri IV</strong> signe l'<strong>édit de Nantes</strong>, qui accorde aux protestants la liberté de culte. La paix religieuse revient en France.` }
      ]}
    ]
  },
  {
    id: 'hg-5e-decouvertes',
    matiere: 'hg',
    titre: 'Les Grandes Découvertes',
    ordre: 7,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Explorer le monde', cartes: [
        { type:'def', label:'DEF', titre:'Les Grandes Découvertes', contenu:`Les <strong>Grandes Découvertes</strong> sont les expéditions maritimes des Européens aux XV<sup>e</sup> et XVI<sup>e</sup> siècles qui leur font découvrir de nouvelles terres et routes.` },
        { type:'prop', label:'PROP', titre:'Les raisons', contenu:`Les Européens partent pour plusieurs raisons :<ul><li>trouver de nouvelles routes vers les épices d'Asie</li><li>chercher de l'or et des richesses</li><li>répandre la religion chrétienne</li></ul>` },
        { type:'def', label:'DEF', titre:'Les progrès techniques', contenu:`Les voyages sont rendus possibles par des progrès : la <strong>caravelle</strong> (bateau rapide), la <strong>boussole</strong>, l'<strong>astrolabe</strong> et de meilleures cartes marines (<em>portulans</em>).` }
      ]},
      { titre: 'Les grands navigateurs', cartes: [
        { type:'ex', label:'EX', titre:'Christophe Colomb', contenu:`En 1492, <strong>Christophe Colomb</strong>, au service de l'Espagne, traverse l'Atlantique et atteint l'Amérique, croyant arriver aux Indes. C'est la « découverte » du Nouveau Monde.` },
        { type:'ex', label:'EX', titre:'Vasco de Gama', contenu:`En 1498, le Portugais <strong>Vasco de Gama</strong> atteint l'Inde en contournant l'Afrique. Il ouvre une route maritime directe vers les épices.` },
        { type:'ex', label:'EX', titre:'Magellan', contenu:`L'expédition de <strong>Magellan</strong> (1519-1522) réalise le premier <em>tour du monde</em>, prouvant que la Terre est ronde. Magellan meurt en chemin, mais un navire revient en Espagne.` }
      ]},
      { titre: 'Les premiers empires coloniaux', cartes: [
        { type:'def', label:'DEF', titre:'La colonisation', contenu:`La <strong>colonisation</strong> est la conquête et l'exploitation de territoires par un pays étranger. L'Espagne et le Portugal se partagent l'Amérique.` },
        { type:'ex', label:'EX', titre:'La conquête des Amériques', contenu:`Les <strong>conquistadors</strong> espagnols détruisent les grands empires amérindiens : <em>Cortés</em> renverse les Aztèques (Mexique) et <em>Pizarro</em> les Incas (Pérou).` },
        { type:'th', label:'THM', titre:'Le choc microbien', contenu:`Les Amérindiens sont décimés par la violence, le travail forcé et surtout les <strong>maladies</strong> apportées par les Européens (variole), contre lesquelles ils ne sont pas immunisés.` }
      ]},
      { titre: 'Conséquences', cartes: [
        { type:'def', label:'DEF', titre:'La traite des esclaves', contenu:`Pour remplacer la main-d'œuvre amérindienne décimée, les Européens développent la <strong>traite</strong> : des millions d'Africains sont déportés et réduits en esclavage dans les plantations d'Amérique.` },
        { type:'prop', label:'PROP', titre:'De nouveaux échanges', contenu:`Les Découvertes créent des échanges mondiaux : l'Amérique apporte la <em>pomme de terre</em>, le <em>maïs</em>, la <em>tomate</em> et l'<em>or</em> ; l'Europe y introduit le cheval, le blé et de nouvelles maladies.` },
        { type:'meth', label:'METH', titre:'Tracer un itinéraire', contenu:`Pour suivre un voyage d'exploration :<ul><li>repère le point de départ et l'arrivée</li><li>identifie l'océan traversé</li><li>note la date et le navigateur</li></ul>` }
      ]}
    ]
  },
  {
    id: 'hg-5e-geo-demographie',
    matiere: 'hg',
    titre: 'La démographie mondiale',
    ordre: 8,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Une population en hausse', cartes: [
        { type:'def', label:'DEF', titre:'La démographie', contenu:`La <strong>démographie</strong> est l'étude des populations : leur nombre, leur répartition et leur évolution. La population mondiale dépasse aujourd'hui 8 milliards d'habitants.` },
        { type:'def', label:'DEF', titre:'La croissance démographique', contenu:`La <strong>croissance démographique</strong> est l'augmentation du nombre d'habitants. Elle dépend de la différence entre les naissances (natalité) et les décès (mortalité).` },
        { type:'def', label:'DEF', titre:'La transition démographique', contenu:`La <strong>transition démographique</strong> est le passage d'une forte natalité et mortalité à une faible natalité et mortalité. Pendant cette transition, la population augmente fortement.` }
      ]},
      { titre: 'Une répartition inégale', cartes: [
        { type:'def', label:'DEF', titre:'La densité de population', contenu:`La <strong>densité de population</strong> est le nombre d'habitants par kilomètre carré (hab./km²). Elle mesure si une région est peuplée ou non.` },
        { type:'prop', label:'PROP', titre:'Les grands foyers de peuplement', contenu:`La population se concentre dans quelques <strong>foyers</strong> : l'<em>Asie de l'Est</em> (Chine), l'<em>Asie du Sud</em> (Inde) et l'<em>Europe</em>. À l'inverse, déserts et hautes montagnes sont presque vides.` },
        { type:'meth', label:'METH', titre:'Lire une carte de densité', contenu:`Pour lire une carte de densité :<ul><li>observe la légende (du plus clair au plus foncé)</li><li>localise les zones très peuplées</li><li>repère les vides (déserts, pôles, montagnes)</li></ul>` }
      ]},
      { titre: 'Des évolutions contrastées', cartes: [
        { type:'prop', label:'PROP', titre:'Des rythmes différents', contenu:`La croissance n'est pas la même partout : forte en <strong>Afrique</strong> (population jeune), faible ou nulle en <strong>Europe</strong> et au <strong>Japon</strong> (population vieillissante).` },
        { type:'def', label:'DEF', titre:'Le vieillissement', contenu:`Le <strong>vieillissement</strong> est l'augmentation de la part des personnes âgées dans la population. Il pose des problèmes : retraites, dépenses de santé.` },
        { type:'th', label:'THM', titre:'Nourrir l\'humanité', contenu:`La croissance de la population pose le défi de <strong>nourrir tous les hommes</strong>. Il faut produire plus de nourriture tout en préservant l'environnement.` }
      ]}
    ]
  },
  {
    id: 'hg-5e-geo-ressources',
    matiere: 'hg',
    titre: 'La gestion des ressources et le développement durable',
    ordre: 9,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Les ressources de la planète', cartes: [
        { type:'def', label:'DEF', titre:'Une ressource', contenu:`Une <strong>ressource</strong> est un élément utile aux hommes, fourni par la nature : eau, énergie, nourriture, minerais. Certaines sont <em>renouvelables</em>, d'autres non.` },
        { type:'def', label:'DEF', titre:'Énergies renouvelables et fossiles', contenu:`Les <strong>énergies fossiles</strong> (pétrole, charbon, gaz) sont en quantité limitée et polluantes. Les <strong>énergies renouvelables</strong> (soleil, vent, eau) se régénèrent et polluent peu.` },
        { type:'prop', label:'PROP', titre:'Des ressources inégalement réparties', contenu:`Les ressources sont mal réparties sur la planète : certains pays manquent d'eau, d'autres regorgent de pétrole. Cela crée des tensions et des inégalités.` }
      ]},
      { titre: 'L\'eau, une ressource vitale', cartes: [
        { type:'th', label:'THM', titre:'Le stress hydrique', contenu:`Le <strong>stress hydrique</strong> désigne le manque d'eau douce dans une région. Bien que la Terre soit couverte d'eau, l'eau douce disponible est rare et inégalement partagée.` },
        { type:'prop', label:'PROP', titre:'Les usages de l\'eau', contenu:`L'eau sert à trois grands usages : l'<strong>agriculture</strong> (le plus gros consommateur), l'<strong>industrie</strong> et l'usage <strong>domestique</strong> (boire, se laver).` },
        { type:'ex', label:'EX', titre:'Gérer l\'eau', contenu:`Pour économiser l'eau, on construit des <em>barrages</em>, on développe l'<em>irrigation</em> goutte-à-goutte et on <em>recycle</em> les eaux usées dans les pays développés.` }
      ]},
      { titre: 'Le développement durable', cartes: [
        { type:'def', label:'DEF', titre:'Le développement durable', contenu:`Le <strong>développement durable</strong> est un développement qui répond aux besoins du présent sans compromettre ceux des générations futures. Il concilie trois piliers.` },
        { type:'prop', label:'PROP', titre:'Les trois piliers', contenu:`Le développement durable repose sur trois piliers :<ul><li><strong>économique</strong> (produire des richesses)</li><li><strong>social</strong> (réduire les inégalités)</li><li><strong>environnemental</strong> (protéger la nature)</li></ul>` },
        { type:'ex', label:'EX', titre:'Des gestes concrets', contenu:`Au quotidien, on peut agir : trier ses déchets, économiser l'énergie, consommer local, utiliser les transports en commun. À grande échelle : développer les énergies propres.` }
      ]},
      { titre: 'Les inégalités de développement', cartes: [
        { type:'def', label:'DEF', titre:'Le développement', contenu:`Le <strong>développement</strong> mesure l'amélioration des conditions de vie d'une population : santé, éducation, niveau de vie. L'<strong>IDH</strong> (indice de développement humain) le résume.` },
        { type:'prop', label:'PROP', titre:'Un monde inégal', contenu:`Le monde est marqué par de fortes <strong>inégalités</strong> : pays riches du <em>Nord</em> et pays pauvres du <em>Sud</em>. Mais des inégalités existent aussi à l'intérieur de chaque pays.` },
        { type:'meth', label:'METH', titre:'Comparer des pays', contenu:`Pour comparer le développement de deux pays :<ul><li>compare l'IDH, l'espérance de vie, le taux d'alphabétisation</li><li>identifie le plus développé</li><li>explique les écarts</li></ul>` }
      ]}
    ]
  },

  // ============================================================
  // ======================= FRANÇAIS (fr) ======================
  // ============================================================
  {
    id: 'fr-5e-classes-grammaticales',
    matiere: 'fr',
    titre: 'Les classes grammaticales',
    ordre: 1,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Les mots variables', cartes: [
        { type:'def', label:'DEF', titre:'La classe grammaticale', contenu:`La <strong>classe grammaticale</strong> (ou nature) est la catégorie à laquelle appartient un mot. Elle ne change jamais, même si le mot change de fonction dans la phrase.` },
        { type:'prop', label:'PROP', titre:'Les mots variables', contenu:`Cinq classes peuvent changer de forme :<ul><li>le <strong>nom</strong> (chat, idée)</li><li>le <strong>déterminant</strong> (le, mon)</li><li>l'<strong>adjectif</strong> (grand, beau)</li><li>le <strong>pronom</strong> (il, celui-ci)</li><li>le <strong>verbe</strong> (manger, être)</li></ul>` },
        { type:'def', label:'DEF', titre:'Le déterminant', contenu:`Le <strong>déterminant</strong> se place devant le nom et s'accorde avec lui. Il en existe plusieurs sortes : articles (le, une), possessifs (mon, ta), démonstratifs (ce, cette).` }
      ]},
      { titre: 'Les mots invariables', cartes: [
        { type:'prop', label:'PROP', titre:'Les mots invariables', contenu:`Quatre classes ne changent jamais de forme :<ul><li>l'<strong>adverbe</strong> (vite, bien, très)</li><li>la <strong>préposition</strong> (à, de, pour, sans)</li><li>la <strong>conjonction</strong> (et, mais, parce que)</li><li>l'<strong>interjection</strong> (oh !, hélas !)</li></ul>` },
        { type:'def', label:'DEF', titre:'L\'adverbe', contenu:`L'<strong>adverbe</strong> modifie le sens d'un verbe, d'un adjectif ou d'un autre adverbe. Exemple : « Il court <em>vite</em> », « très <em>grand</em> ».` },
        { type:'def', label:'DEF', titre:'La préposition', contenu:`La <strong>préposition</strong> introduit un complément. Les plus courantes : <em>à, de, dans, par, pour, en, vers, avec, sans, sous</em>.` }
      ]},
      { titre: 'Reconnaître la classe d\'un mot', cartes: [
        { type:'meth', label:'METH', titre:'Identifier une classe', contenu:`Pour trouver la classe d'un mot :<ul><li>essaie de le remplacer (par un autre nom, un autre verbe…)</li><li>observe s'il varie (genre, nombre)</li><li>regarde sa place dans la phrase</li></ul>` },
        { type:'ex', label:'EX', titre:'Un même mot, deux classes', contenu:`Un mot peut changer de classe selon le contexte :<br>« Le <em>boucher</em> » (nom) / « <em>boucher</em> un trou » (verbe).<br>« Le <em>rouge</em> » (nom) / « un pull <em>rouge</em> » (adjectif).` }
      ]}
    ]
  },
  {
    id: 'fr-5e-fonctions',
    matiere: 'fr',
    titre: 'Les fonctions dans la phrase',
    ordre: 2,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Sujet et compléments du verbe', cartes: [
        { type:'def', label:'DEF', titre:'Le sujet', contenu:`Le <strong>sujet</strong> indique qui fait l'action ou de qui l'on parle. On le trouve en posant la question « Qui est-ce qui ? » devant le verbe. Il commande l'accord du verbe.` },
        { type:'def', label:'DEF', titre:'Le COD', contenu:`Le <strong>complément d'objet direct</strong> (COD) complète le verbe sans préposition. On le trouve en posant « qui ? » ou « quoi ? » après le verbe. Exemple : « Il mange <em>une pomme</em>. »` },
        { type:'def', label:'DEF', titre:'Le COI', contenu:`Le <strong>complément d'objet indirect</strong> (COI) complète le verbe avec une préposition (à, de). On le trouve en posant « à qui ? », « de quoi ? ». Exemple : « Il parle <em>à son ami</em>. »` }
      ]},
      { titre: 'L\'attribut du sujet', cartes: [
        { type:'def', label:'DEF', titre:'L\'attribut du sujet', contenu:`L'<strong>attribut du sujet</strong> donne une qualité ou un état au sujet. Il est relié au sujet par un <em>verbe d'état</em>. Exemple : « Le ciel est <em>bleu</em>. »` },
        { type:'prop', label:'PROP', titre:'Les verbes d\'état', contenu:`Les principaux <strong>verbes d'état</strong> sont : <em>être, paraître, sembler, devenir, rester, demeurer, avoir l'air, passer pour</em>. Ils introduisent un attribut.` },
        { type:'ex', label:'EX', titre:'Distinguer COD et attribut', contenu:`Attention :<br>« Il regarde <em>la lune</em> » → COD (verbe d'action).<br>« Il devient <em>médecin</em> » → attribut (verbe d'état).` }
      ]},
      { titre: 'Les compléments circonstanciels', cartes: [
        { type:'def', label:'DEF', titre:'Le complément circonstanciel', contenu:`Le <strong>complément circonstanciel</strong> (CC) précise les circonstances de l'action. Il est souvent déplaçable et supprimable.` },
        { type:'prop', label:'PROP', titre:'Les principaux CC', contenu:`On distingue le CC de :<ul><li><strong>temps</strong> (quand ?) : « hier »</li><li><strong>lieu</strong> (où ?) : « à Paris »</li><li><strong>manière</strong> (comment ?) : « lentement »</li><li><strong>cause</strong> (pourquoi ?) : « par peur »</li></ul>` },
        { type:'meth', label:'METH', titre:'Reconnaître un CC', contenu:`Pour identifier un complément circonstanciel :<ul><li>essaie de le déplacer ou de le supprimer (la phrase reste correcte)</li><li>pose la question : quand ? où ? comment ? pourquoi ?</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-5e-conjugaison',
    matiere: 'fr',
    titre: 'La conjugaison',
    ordre: 3,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Les temps de l\'indicatif', cartes: [
        { type:'form', label:'FORM', titre:'Le présent', contenu:`Le <strong>présent de l'indicatif</strong> exprime une action qui se déroule au moment où l'on parle. Terminaisons du 1<sup>er</sup> groupe : -e, -es, -e, -ons, -ez, -ent.` },
        { type:'form', label:'FORM', titre:'L\'imparfait', contenu:`L'<strong>imparfait</strong> décrit une action passée qui dure ou se répète. Terminaisons pour tous les verbes : <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>.` },
        { type:'form', label:'FORM', titre:'Le passé simple', contenu:`Le <strong>passé simple</strong> raconte une action passée, brève et achevée. C'est le temps du récit. Ex. (1<sup>er</sup> groupe) : je chant<em>ai</em>, il chant<em>a</em>, ils chant<em>èrent</em>.` },
        { type:'form', label:'FORM', titre:'Le futur', contenu:`Le <strong>futur simple</strong> exprime une action à venir. Terminaisons pour tous les verbes : <strong>-rai, -ras, -ra, -rons, -rez, -ront</strong>. Ex. : je chante<em>rai</em>.` }
      ]},
      { titre: 'Imparfait ou passé simple ?', cartes: [
        { type:'prop', label:'PROP', titre:'L\'emploi dans le récit', contenu:`Dans un récit au passé : l'<strong>imparfait</strong> pose le décor et décrit l'arrière-plan ; le <strong>passé simple</strong> raconte les actions de premier plan qui font avancer l'histoire.` },
        { type:'ex', label:'EX', titre:'Les deux temps ensemble', contenu:`« Le soleil <em>brillait</em> (imparfait, décor) quand soudain un cri <em>retentit</em> (passé simple, action soudaine). »` },
        { type:'meth', label:'METH', titre:'Choisir le bon temps', contenu:`Pour choisir entre imparfait et passé simple :<ul><li>action qui dure, se répète, décrit → imparfait</li><li>action courte, soudaine, qui fait avancer le récit → passé simple</li></ul>` }
      ]},
      { titre: 'Les autres modes', cartes: [
        { type:'form', label:'FORM', titre:'Le conditionnel présent', contenu:`Le <strong>conditionnel présent</strong> exprime une action soumise à une condition, un souhait ou la politesse. Il se forme avec le radical du futur + terminaisons de l'imparfait : je chante<em>rais</em>.` },
        { type:'form', label:'FORM', titre:'Le subjonctif présent', contenu:`Le <strong>subjonctif présent</strong> exprime un souhait, une obligation, un doute. Il suit souvent « que ». Terminaisons : -e, -es, -e, -ions, -iez, -ent. Ex. : « Il faut que tu <em>viennes</em>. »` }
      ]},
      { titre: 'Les temps composés', cartes: [
        { type:'def', label:'DEF', titre:'Les temps composés', contenu:`Les <strong>temps composés</strong> sont formés d'un auxiliaire (<em>être</em> ou <em>avoir</em>) conjugué + le participe passé du verbe. Ex. : « j'<em>ai mangé</em> » (passé composé).` },
        { type:'form', label:'FORM', titre:'Le plus-que-parfait', contenu:`Le <strong>plus-que-parfait</strong> exprime une action antérieure à une autre action passée. Il se forme avec l'auxiliaire à l'imparfait + participe passé. Ex. : « il <em>avait fini</em>. »` },
        { type:'prop', label:'PROP', titre:'Choisir l\'auxiliaire', contenu:`On emploie <strong>être</strong> avec les verbes de mouvement (aller, venir, partir…) et les verbes pronominaux. On emploie <strong>avoir</strong> avec la plupart des autres verbes.` }
      ]}
    ]
  },
  {
    id: 'fr-5e-propositions',
    matiere: 'fr',
    titre: 'Les propositions',
    ordre: 4,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Phrase simple et phrase complexe', cartes: [
        { type:'def', label:'DEF', titre:'La proposition', contenu:`Une <strong>proposition</strong> est un groupe de mots organisé autour d'un verbe conjugué. On compte autant de propositions que de verbes conjugués dans une phrase.` },
        { type:'def', label:'DEF', titre:'Phrase simple et complexe', contenu:`Une <strong>phrase simple</strong> contient un seul verbe conjugué (une proposition). Une <strong>phrase complexe</strong> en contient plusieurs.` },
        { type:'def', label:'DEF', titre:'La proposition indépendante', contenu:`La <strong>proposition indépendante</strong> se suffit à elle-même : elle ne dépend d'aucune autre et aucune ne dépend d'elle. Ex. : « Il pleut. »` }
      ]},
      { titre: 'Coordination et juxtaposition', cartes: [
        { type:'def', label:'DEF', titre:'La juxtaposition', contenu:`Des propositions sont <strong>juxtaposées</strong> quand elles sont reliées par un signe de ponctuation (virgule, point-virgule). Ex. : « Il arrive, il s'assoit, il lit. »` },
        { type:'def', label:'DEF', titre:'La coordination', contenu:`Des propositions sont <strong>coordonnées</strong> quand elles sont reliées par une conjonction de coordination (<em>mais, ou, et, donc, or, ni, car</em>). Ex. : « Il pleut <em>et</em> il fait froid. »` },
        { type:'meth', label:'METH', titre:'Retenir les conjonctions', contenu:`Pour mémoriser les conjonctions de coordination, on utilise la phrase : <strong>« Mais où est donc Ornicar ? »</strong> (mais, ou, et, donc, or, ni, car).` }
      ]},
      { titre: 'La subordination', cartes: [
        { type:'def', label:'DEF', titre:'Principale et subordonnée', contenu:`Dans une phrase complexe, la <strong>proposition subordonnée</strong> dépend d'une autre, la <strong>proposition principale</strong>. La subordonnée ne peut exister seule.` },
        { type:'def', label:'DEF', titre:'La subordonnée relative', contenu:`La <strong>subordonnée relative</strong> complète un nom. Elle est introduite par un pronom relatif (<em>qui, que, dont, où</em>). Ex. : « Le livre <em>que je lis</em> est passionnant. »` },
        { type:'def', label:'DEF', titre:'La subordonnée conjonctive', contenu:`La <strong>subordonnée conjonctive</strong> est introduite par « que » ou une conjonction de subordination. Ex. : « Je pense <em>qu'il viendra</em>. »` },
        { type:'meth', label:'METH', titre:'Repérer les propositions', contenu:`Pour analyser une phrase complexe :<ul><li>souligne tous les verbes conjugués</li><li>compte les propositions (autant que de verbes)</li><li>cherche le mot de liaison (ponctuation, conjonction, pronom relatif)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-5e-accords-figures',
    matiere: 'fr',
    titre: 'Accords et figures de style',
    ordre: 5,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'L\'accord du participe passé', cartes: [
        { type:'form', label:'FORM', titre:'Participe passé avec être', contenu:`Le <strong>participe passé employé avec être</strong> s'accorde en genre et en nombre avec le sujet. Ex. : « Elles sont <em>parties</em>. » (féminin pluriel)` },
        { type:'form', label:'FORM', titre:'Participe passé avec avoir', contenu:`Le <strong>participe passé employé avec avoir</strong> ne s'accorde jamais avec le sujet. Il s'accorde avec le COD seulement si celui-ci est placé <em>avant</em> le verbe.` },
        { type:'ex', label:'EX', titre:'L\'accord avec avoir', contenu:`« J'ai mangé <em>les pommes</em> » → pas d'accord (COD après).<br>« <em>Les pommes</em> que j'ai mangé<em>es</em> » → accord (COD « les pommes » placé avant).` },
        { type:'meth', label:'METH', titre:'Vérifier l\'accord', contenu:`Pour accorder un participe passé :<ul><li>repère l'auxiliaire (être ou avoir)</li><li>avec être → accord avec le sujet</li><li>avec avoir → cherche un COD placé avant</li></ul>` }
      ]},
      { titre: 'Les figures d\'analogie', cartes: [
        { type:'def', label:'DEF', titre:'La comparaison', contenu:`La <strong>comparaison</strong> rapproche deux éléments à l'aide d'un mot-outil (<em>comme, tel, semblable à, pareil à</em>). Ex. : « Il est fort <em>comme</em> un lion. »` },
        { type:'def', label:'DEF', titre:'La métaphore', contenu:`La <strong>métaphore</strong> rapproche deux éléments <em>sans</em> mot-outil de comparaison. Ex. : « Cet homme est un lion. »` },
        { type:'ex', label:'EX', titre:'Comparaison ou métaphore ?', contenu:`« Ses yeux brillent <em>comme</em> des étoiles » → comparaison (avec « comme »).<br>« Ses yeux sont des étoiles » → métaphore (sans mot-outil).` }
      ]},
      { titre: 'Autres figures', cartes: [
        { type:'def', label:'DEF', titre:'La personnification', contenu:`La <strong>personnification</strong> attribue des caractéristiques humaines à une chose, un animal ou une idée. Ex. : « Le vent <em>murmure</em> dans les arbres. »` },
        { type:'def', label:'DEF', titre:'L\'hyperbole', contenu:`L'<strong>hyperbole</strong> est une exagération qui met en valeur une idée. Ex. : « Je meurs de faim », « un bruit à réveiller les morts ».` },
        { type:'meth', label:'METH', titre:'Identifier une figure', contenu:`Pour reconnaître une figure de style :<ul><li>cherche un rapprochement d'images</li><li>vérifie la présence d'un mot-outil (comparaison)</li><li>repère une exagération (hyperbole) ou un trait humain (personnification)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'fr-5e-litterature-moyenage',
    matiere: 'fr',
    titre: 'Récits du Moyen Âge et théâtre comique',
    ordre: 6,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Les récits chevaleresques', cartes: [
        { type:'def', label:'DEF', titre:'Le roman de chevalerie', contenu:`Le <strong>roman de chevalerie</strong> raconte les aventures d'un chevalier qui accomplit des exploits pour prouver sa valeur, servir son roi et conquérir l'amour d'une dame.` },
        { type:'def', label:'DEF', titre:'L\'amour courtois', contenu:`L'<strong>amour courtois</strong> (ou <em>fin'amor</em>) est l'amour respectueux et idéalisé que le chevalier voue à une dame. Il l'inspire et le pousse à se montrer digne d'elle.` },
        { type:'ex', label:'EX', titre:'Chrétien de Troyes', contenu:`<strong>Chrétien de Troyes</strong> (XII<sup>e</sup> siècle) est l'auteur de romans célèbres sur les chevaliers du roi Arthur, comme <em>Lancelot</em>, <em>Yvain ou le Chevalier au lion</em> et <em>Perceval</em>.` }
      ]},
      { titre: 'La légende arthurienne', cartes: [
        { type:'def', label:'DEF', titre:'Les chevaliers de la Table ronde', contenu:`Les <strong>chevaliers de la Table ronde</strong> entourent le roi <em>Arthur</em>. La table est ronde pour que tous soient égaux. Le magicien <em>Merlin</em> conseille le roi.` },
        { type:'ex', label:'EX', titre:'La quête du Graal', contenu:`La <strong>quête du Graal</strong> (la coupe sacrée) est l'aventure spirituelle la plus importante : seul un chevalier pur, comme <em>Perceval</em> ou <em>Galaad</em>, peut espérer le trouver.` },
        { type:'def', label:'DEF', titre:'Le merveilleux', contenu:`Le <strong>merveilleux</strong> est la présence d'éléments magiques et surnaturels (enchanteurs, fées, objets enchantés) acceptés comme normaux dans le récit.` }
      ]},
      { titre: 'Le théâtre comique', cartes: [
        { type:'def', label:'DEF', titre:'La farce', contenu:`La <strong>farce</strong> est une courte pièce de théâtre comique du Moyen Âge. Elle met en scène des personnages populaires dans des situations amusantes, souvent des tromperies.` },
        { type:'ex', label:'EX', titre:'La Farce de Maître Pathelin', contenu:`<strong>La Farce de Maître Pathelin</strong> (XV<sup>e</sup> siècle) raconte les ruses d'un avocat malin qui finit par être trompé à son tour : « le trompeur trompé ».` },
        { type:'prop', label:'PROP', titre:'Les ressorts du comique', contenu:`Le rire au théâtre naît de plusieurs procédés :<ul><li>le comique de <strong>mots</strong> (jeux de langage)</li><li>le comique de <strong>gestes</strong> (coups, chutes)</li><li>le comique de <strong>situation</strong> (quiproquos, tromperies)</li></ul>` }
      ]},
      { titre: 'Lire et écrire un récit', cartes: [
        { type:'meth', label:'METH', titre:'Le schéma narratif', contenu:`Un récit suit souvent un <strong>schéma narratif</strong> :<ul><li>situation initiale</li><li>élément perturbateur</li><li>péripéties</li><li>élément de résolution</li><li>situation finale</li></ul>` },
        { type:'meth', label:'METH', titre:'Écrire un récit d\'aventures', contenu:`Pour écrire un récit d'aventures :<ul><li>choisis un héros et un objectif (une quête)</li><li>multiplie les obstacles et le suspense</li><li>emploie le passé simple et l'imparfait</li></ul>` }
      ]}
    ]
  },

  // ============================================================
  // ======================== ANGLAIS (ang) =====================
  // ============================================================
  {
    id: 'ang-5e-present-tenses',
    matiere: 'ang',
    titre: 'Present simple et present continuous',
    ordre: 1,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Le present simple', cartes: [
        { type:'form', label:'FORM', titre:'Formation du present simple', contenu:`Le <strong>present simple</strong> se forme avec la base verbale. À la 3<sup>e</sup> personne du singulier (he, she, it), on ajoute <strong>-s</strong>. Ex. : « I play / He play<strong>s</strong>. »` },
        { type:'prop', label:'PROP', titre:'Emploi du present simple', contenu:`On emploie le present simple pour :<ul><li>une habitude (« I get up at 7. »)</li><li>une vérité générale (« The sun rises in the east. »)</li><li>un goût (« I like tea. »)</li></ul>` },
        { type:'form', label:'FORM', titre:'Forme négative et interrogative', contenu:`On utilise l'auxiliaire <strong>do / does</strong>. Négative : « I <em>don't</em> play. / He <em>doesn't</em> play. » Interrogative : « <em>Do</em> you play? / <em>Does</em> she play? »` }
      ]},
      { titre: 'Le present continuous', cartes: [
        { type:'form', label:'FORM', titre:'Formation du present continuous', contenu:`Le <strong>present continuous</strong> (ou progressif) se forme avec <strong>be + verbe-ing</strong>. Ex. : « I <em>am playing</em>, she <em>is reading</em>, they <em>are working</em>. »` },
        { type:'prop', label:'PROP', titre:'Emploi du present continuous', contenu:`On l'emploie pour une action <strong>en train de se dérouler</strong> au moment où l'on parle. Ex. : « Look! It <em>is raining</em>. » Mots indices : <em>now, look, listen, at the moment</em>.` },
        { type:'meth', label:'METH', titre:'Choisir le bon present', contenu:`Pour choisir le temps :<ul><li>habitude / vérité générale → present simple</li><li>action en cours maintenant → present continuous</li><li>repère les mots indices (every day vs now)</li></ul>` }
      ]},
      { titre: 'Comparer les deux', cartes: [
        { type:'ex', label:'EX', titre:'Simple vs continuous', contenu:`« She <em>plays</em> tennis every Sunday. » (habitude → simple)<br>« She <em>is playing</em> tennis right now. » (en cours → continuous)` },
        { type:'prop', label:'PROP', titre:'Verbes sans -ing', contenu:`Certains verbes (<em>state verbs</em>) ne s'emploient pas au continu : <strong>like, love, want, know, understand, have</strong> (posséder). On dit « I know », pas « I am knowing ».` }
      ]}
    ]
  },
  {
    id: 'ang-5e-preterit',
    matiere: 'ang',
    titre: 'Le prétérit (past simple)',
    ordre: 2,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Les verbes réguliers', cartes: [
        { type:'form', label:'FORM', titre:'Formation des réguliers', contenu:`Au <strong>prétérit</strong>, les verbes <strong>réguliers</strong> prennent la terminaison <strong>-ed</strong> à toutes les personnes. Ex. : « play → play<strong>ed</strong>, work → work<strong>ed</strong>. »` },
        { type:'prop', label:'PROP', titre:'Emploi du prétérit', contenu:`On emploie le prétérit pour une action <strong>terminée dans le passé</strong>, à un moment précis. Mots indices : <em>yesterday, last week, in 2010, ago</em>.` },
        { type:'form', label:'FORM', titre:'Particularités d\'orthographe', contenu:`Quelques règles : « study → studi<strong>ed</strong> » (y → i après consonne), « stop → stop<strong>ped</strong> » (consonne doublée). Ex. : « He stop<strong>ped</strong> the car. »` }
      ]},
      { titre: 'Les verbes irréguliers', cartes: [
        { type:'prop', label:'PROP', titre:'Les verbes irréguliers', contenu:`Les verbes <strong>irréguliers</strong> ne suivent pas la règle du -ed : il faut les apprendre par cœur. Ex. : « go → <em>went</em>, see → <em>saw</em>, have → <em>had</em>, be → <em>was/were</em>. »` },
        { type:'ex', label:'EX', titre:'Verbes irréguliers fréquents', contenu:`Quelques essentiels :<ul><li>do → did</li><li>make → made</li><li>take → took</li><li>come → came</li><li>get → got</li><li>buy → bought</li></ul>` }
      ]},
      { titre: 'Négation et question', cartes: [
        { type:'form', label:'FORM', titre:'Forme négative et interrogative', contenu:`On utilise l'auxiliaire <strong>did</strong> + base verbale. Négative : « I <em>didn't</em> play. » Interrogative : « <em>Did</em> you play? » Le verbe principal reprend sa forme de base.` },
        { type:'ex', label:'EX', titre:'Attention au double prétérit', contenu:`Avec « did », on ne met pas deux fois le prétérit :<br>Correct : « Did you <em>go</em>? »<br>Incorrect : « Did you went? »` },
        { type:'form', label:'FORM', titre:'Was et were', contenu:`Le verbe <strong>be</strong> au prétérit a deux formes : <strong>was</strong> (I, he, she, it) et <strong>were</strong> (you, we, they). Ex. : « I <em>was</em> tired, they <em>were</em> happy. »` }
      ]}
    ]
  },
  {
    id: 'ang-5e-present-perfect',
    matiere: 'ang',
    titre: 'Le present perfect',
    ordre: 3,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Formation', cartes: [
        { type:'form', label:'FORM', titre:'Formation du present perfect', contenu:`Le <strong>present perfect</strong> se forme avec <strong>have / has + participe passé</strong>. Ex. : « I <em>have finished</em>, she <em>has gone</em>, they <em>have seen</em>. »` },
        { type:'prop', label:'PROP', titre:'Le participe passé', contenu:`Le participe passé est en <strong>-ed</strong> pour les réguliers (« played »), mais irrégulier pour d'autres : c'est la <em>3<sup>e</sup> colonne</em> (go → gone, see → seen, do → done).` }
      ]},
      { titre: 'Emploi', cartes: [
        { type:'prop', label:'PROP', titre:'Un lien avec le présent', contenu:`Le present perfect relie le <strong>passé au présent</strong> : l'action passée a une conséquence ou un résultat <em>maintenant</em>. Ex. : « I have lost my keys » (et je ne les ai toujours pas).` },
        { type:'ex', label:'EX', titre:'Prétérit ou present perfect ?', contenu:`« I <em>saw</em> that film yesterday. » (moment précis → prétérit)<br>« I <em>have</em> already <em>seen</em> that film. » (résultat présent, pas de date → present perfect)` }
      ]},
      { titre: 'Les mots indices', cartes: [
        { type:'prop', label:'PROP', titre:'Mots associés', contenu:`Le present perfect s'emploie souvent avec : <strong>already, just, yet, ever, never, since, for</strong>. Ex. : « Have you <em>ever</em> been to London? »` },
        { type:'form', label:'FORM', titre:'Since et for', contenu:`<strong>Since</strong> indique un point de départ (« since 2010 ») ; <strong>for</strong> indique une durée (« for three years »). Ex. : « I have lived here <em>for</em> two years. »` },
        { type:'meth', label:'METH', titre:'Repérer le bon temps', contenu:`Pour choisir :<ul><li>date précise passée → prétérit</li><li>résultat actuel, expérience, pas de date → present perfect</li><li>cherche les mots indices (yesterday vs already/ever)</li></ul>` }
      ]}
    ]
  },
  {
    id: 'ang-5e-comparatifs',
    matiere: 'ang',
    titre: 'Comparatifs et superlatifs',
    ordre: 4,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Le comparatif', cartes: [
        { type:'form', label:'FORM', titre:'Comparatif des adjectifs courts', contenu:`Pour les adjectifs <strong>courts</strong> (1 syllabe), on ajoute <strong>-er + than</strong>. Ex. : « Tom is <em>taller than</em> Jim. » (small → smaller, fast → faster)` },
        { type:'form', label:'FORM', titre:'Comparatif des adjectifs longs', contenu:`Pour les adjectifs <strong>longs</strong> (2 syllabes ou plus), on emploie <strong>more … than</strong>. Ex. : « English is <em>more difficult than</em> Spanish. »` },
        { type:'ex', label:'EX', titre:'Comparatifs d\'égalité', contenu:`Pour exprimer l'égalité, on utilise <strong>as … as</strong>. Ex. : « She is <em>as tall as</em> her brother. » Négatif : « not as … as ».` }
      ]},
      { titre: 'Le superlatif', cartes: [
        { type:'form', label:'FORM', titre:'Superlatif des adjectifs courts', contenu:`Pour les adjectifs <strong>courts</strong>, on emploie <strong>the … -est</strong>. Ex. : « He is <em>the tallest</em> boy in the class. » (small → the smallest)` },
        { type:'form', label:'FORM', titre:'Superlatif des adjectifs longs', contenu:`Pour les adjectifs <strong>longs</strong>, on emploie <strong>the most …</strong>. Ex. : « This is <em>the most interesting</em> book. »` }
      ]},
      { titre: 'Les irréguliers', cartes: [
        { type:'prop', label:'PROP', titre:'Adjectifs irréguliers', contenu:`Certains adjectifs sont irréguliers :<ul><li>good → <strong>better</strong> → the best</li><li>bad → <strong>worse</strong> → the worst</li><li>far → <strong>further</strong> → the furthest</li></ul>` },
        { type:'meth', label:'METH', titre:'Court ou long ?', contenu:`Pour former un comparatif :<ul><li>compte les syllabes de l'adjectif</li><li>court (1 syllabe) → -er / -est</li><li>long (2+ syllabes) → more / the most</li><li>vérifie qu'il n'est pas irrégulier</li></ul>` }
      ]}
    ]
  },
  {
    id: 'ang-5e-modaux-quantifieurs',
    matiere: 'ang',
    titre: 'Modaux et quantifieurs',
    ordre: 5,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Capacité et permission', cartes: [
        { type:'form', label:'FORM', titre:'Can et can\'t', contenu:`<strong>Can</strong> exprime la capacité ou la permission ; <strong>can't</strong> l'incapacité ou l'interdiction. Il est suivi de la base verbale. Ex. : « I <em>can</em> swim. She <em>can't</em> drive. »` },
        { type:'prop', label:'PROP', titre:'Particularités des modaux', contenu:`Les <strong>modaux</strong> sont invariables :<ul><li>jamais de -s à la 3<sup>e</sup> personne</li><li>suivis de la base verbale (sans « to »)</li><li>pas d'auxiliaire « do » pour la question/négation</li></ul>` }
      ]},
      { titre: 'Obligation', cartes: [
        { type:'form', label:'FORM', titre:'Must', contenu:`<strong>Must</strong> exprime une obligation forte ou un conseil pressant venant de celui qui parle. Ex. : « You <em>must</em> wear a seatbelt. » La forme « mustn't » signifie l'interdiction.` },
        { type:'form', label:'FORM', titre:'Have to', contenu:`<strong>Have to</strong> exprime une obligation venant de l'extérieur (règle, loi). Ex. : « I <em>have to</em> wear a uniform at school. » À la 3<sup>e</sup> personne : « has to ».` },
        { type:'ex', label:'EX', titre:'Must ou have to ?', contenu:`« I <em>must</em> call my mother » (obligation que je m'impose).<br>« You <em>have to</em> stop at a red light » (règle imposée par la loi).` }
      ]},
      { titre: 'Les quantifieurs', cartes: [
        { type:'def', label:'DEF', titre:'Dénombrable / indénombrable', contenu:`Un nom <strong>dénombrable</strong> peut se compter (an apple, three apples). Un nom <strong>indénombrable</strong> ne se compte pas (water, money, rice) et n'a pas de pluriel.` },
        { type:'form', label:'FORM', titre:'Some et any', contenu:`<strong>Some</strong> s'emploie dans les phrases affirmatives ; <strong>any</strong> dans les phrases négatives et interrogatives. Ex. : « I have <em>some</em> bread. / Is there <em>any</em> milk? »` },
        { type:'form', label:'FORM', titre:'Much et many', contenu:`<strong>Many</strong> s'emploie avec les dénombrables (« many books ») ; <strong>much</strong> avec les indénombrables (« much water »). « How many? / How much? »` }
      ]}
    ]
  },
  {
    id: 'ang-5e-vocabulaire',
    matiere: 'ang',
    titre: 'Vocabulaire thématique',
    ordre: 6,
    filiere: '5eme',
    enrich: false,
    sections: [
      { titre: 'Food (la nourriture)', cartes: [
        { type:'def', label:'DEF', titre:'Fruits and vegetables', contenu:`<strong>Fruits</strong> : apple (pomme), banana, strawberry (fraise), orange.<br><strong>Vegetables</strong> : carrot (carotte), potato (pomme de terre), tomato, onion (oignon).` },
        { type:'def', label:'DEF', titre:'Meals (les repas)', contenu:`<strong>Breakfast</strong> (petit-déjeuner), <strong>lunch</strong> (déjeuner), <strong>dinner</strong> (dîner). « To have breakfast » = prendre le petit-déjeuner.` },
        { type:'ex', label:'EX', titre:'Au restaurant', contenu:`Phrases utiles :<ul><li>« I'd like… » (je voudrais)</li><li>« Can I have the menu? »</li><li>« It's delicious! » (c'est délicieux)</li></ul>` }
      ]},
      { titre: 'Sports', cartes: [
        { type:'def', label:'DEF', titre:'Les sports', contenu:`<strong>Football</strong> (foot), <strong>basketball</strong>, <strong>swimming</strong> (natation), <strong>tennis</strong>, <strong>running</strong> (course), <strong>cycling</strong> (vélo).` },
        { type:'prop', label:'PROP', titre:'Play, do ou go ?', contenu:`On dit :<ul><li><strong>play</strong> + sport de balle (play football)</li><li><strong>do</strong> + sport individuel (do judo)</li><li><strong>go</strong> + sport en -ing (go swimming)</li></ul>` }
      ]},
      { titre: 'Daily routine et clothes', cartes: [
        { type:'def', label:'DEF', titre:'Daily routine', contenu:`<strong>Wake up</strong> (se réveiller), <strong>get up</strong> (se lever), <strong>have breakfast</strong>, <strong>go to school</strong>, <strong>do homework</strong>, <strong>go to bed</strong> (se coucher).` },
        { type:'def', label:'DEF', titre:'Clothes (les vêtements)', contenu:`<strong>T-shirt</strong>, <strong>jeans</strong>, <strong>jumper</strong> (pull), <strong>shoes</strong> (chaussures), <strong>jacket</strong> (veste), <strong>dress</strong> (robe), <strong>hat</strong> (chapeau).` },
        { type:'meth', label:'METH', titre:'Décrire sa journée', contenu:`Pour parler de sa routine :<ul><li>emploie le present simple</li><li>ajoute l'heure (« at 7 o'clock »)</li><li>utilise les adverbes : always, usually, sometimes, never</li></ul>` }
      ]}
    ]
  }
]
