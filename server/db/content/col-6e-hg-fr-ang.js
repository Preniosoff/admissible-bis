export const DATA = [
  // ════════════════════════════════════════════════════════════
  // HISTOIRE-GÉOGRAPHIE 6e
  // ════════════════════════════════════════════════════════════
  {
    id: 'hg-6e-prehistoire',
    matiere: 'hg',
    titre: 'La longue histoire de l\'humanité : Préhistoire et Néolithique',
    ordre: 1,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Préhistoire et apparition de l\'humanité',
        cartes: [
          { type:'def', label:'DEF', titre:'Préhistoire', contenu:`La <strong>Préhistoire</strong> est la très longue période qui va de l'apparition des premiers êtres humains (environ <strong>3 millions d'années</strong>) jusqu'à l'invention de l'<strong>écriture</strong> (vers <strong>3300 av. J.-C.</strong>).<br>« Pré-histoire » signifie « avant l'histoire » : sans écriture, on ne dispose pas de textes pour étudier cette période.` },
          { type:'def', label:'DEF', titre:'Hominidé et lignée humaine', contenu:`Les <strong>hominidés</strong> sont les ancêtres de l'Homme. La lignée humaine s'étend sur des millions d'années : <em>Australopithèque</em> (Lucy, 3,2 Ma), <em>Homo habilis</em>, <em>Homo erectus</em>, puis <em>Homo sapiens</em> (l'Homme actuel), apparu il y a environ <strong>300 000 ans</strong> en Afrique.` },
          { type:'prop', label:'PROP', titre:'Le peuplement de la Terre', contenu:`L'humanité est née en <strong>Afrique</strong>. Au fil du temps, les groupes humains se sont <strong>déplacés</strong> et ont peuplé progressivement tous les continents : l'Asie, l'Europe, puis l'Australie et l'Amérique. C'est le <strong>peuplement de la Terre</strong>.` }
        ]
      },
      {
        titre: 'La vie des premiers hommes',
        cartes: [
          { type:'def', label:'DEF', titre:'Chasseurs-cueilleurs', contenu:`Au Paléolithique (« âge de la pierre ancienne »), les hommes sont <strong>nomades</strong> : ils se déplacent sans cesse pour trouver leur nourriture. Ils vivent de la <strong>chasse</strong>, de la <strong>pêche</strong> et de la <strong>cueillette</strong>.` },
          { type:'prop', label:'PROP', titre:'La maîtrise du feu et des outils', contenu:`Deux grandes inventions transforment la vie : la <strong>maîtrise du feu</strong> (pour se chauffer, s'éclairer, cuire les aliments, se protéger) et la fabrication d'<strong>outils en pierre taillée</strong> (silex), en os et en bois.` },
          { type:'def', label:'DEF', titre:'Art préhistorique', contenu:`Les hommes du Paléolithique réalisent des <strong>peintures</strong> et des <strong>gravures</strong> sur les parois des grottes, ainsi que de petites statuettes. Exemples célèbres : les grottes de <strong>Lascaux</strong> et de <strong>Chauvet</strong> en France, ornées d'animaux.` },
          { type:'ex', label:'EX', titre:'La grotte de Lascaux', contenu:`Découverte en 1940 en Dordogne, la grotte de <strong>Lascaux</strong> est ornée de peintures vieilles d'environ <strong>18 000 ans</strong> : chevaux, taureaux, cerfs. Ces œuvres montrent que les hommes préhistoriques avaient déjà une vie symbolique et artistique.` }
        ]
      },
      {
        titre: 'La révolution du Néolithique',
        cartes: [
          { type:'def', label:'DEF', titre:'Néolithique', contenu:`Le <strong>Néolithique</strong> (« âge de la pierre nouvelle ») débute au Proche-Orient vers <strong>10 000 av. J.-C.</strong>. C'est une période de profonds changements : les hommes deviennent <strong>producteurs</strong> de leur nourriture.` },
          { type:'prop', label:'PROP', titre:'Agriculture et élevage', contenu:`Les deux inventions majeures du Néolithique sont :<br><ul><li>l'<strong>agriculture</strong> : on cultive les céréales (blé, orge) ;</li><li>l'<strong>élevage</strong> : on domestique les animaux (chèvre, mouton, bœuf).</li></ul>L'homme ne dépend plus seulement de la nature.` },
          { type:'def', label:'DEF', titre:'Sédentarisation', contenu:`Pour cultiver et élever, les hommes se fixent au même endroit : ils deviennent <strong>sédentaires</strong> (ils cessent d'être nomades). Ils construisent les premiers <strong>villages</strong> de maisons en pierre et en terre.` },
          { type:'meth', label:'METH', titre:'Mesurer une révolution', contenu:`On parle de <strong>« révolution néolithique »</strong> car ces changements bouleversent durablement la vie humaine : sédentarité, naissance des villages, fabrication de poterie et de tissus, premières inégalités sociales. C'est une étape décisive vers les premières civilisations.` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-premieres-civilisations',
    matiere: 'hg',
    titre: 'Premières cités, premiers États (Mésopotamie, Égypte)',
    ordre: 2,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Naissance de l\'écriture et des cités',
        cartes: [
          { type:'def', label:'DEF', titre:'Civilisation', contenu:`Une <strong>civilisation</strong> est une société organisée disposant de villes, d'un pouvoir politique, d'une religion et souvent de l'écriture. Les premières civilisations naissent vers <strong>3500-3000 av. J.-C.</strong> au Proche-Orient.` },
          { type:'def', label:'DEF', titre:'L\'écriture cunéiforme', contenu:`Vers <strong>3300 av. J.-C.</strong>, en <strong>Mésopotamie</strong> (entre le Tigre et l'Euphrate), les Sumériens inventent l'<strong>écriture cunéiforme</strong> : des signes en forme de coins tracés sur des tablettes d'argile. L'invention de l'écriture marque le début de l'<strong>Histoire</strong>.` },
          { type:'prop', label:'PROP', titre:'Les premières cités-États', contenu:`En Mésopotamie apparaissent les premières <strong>cités-États</strong> comme <strong>Ur</strong> et <strong>Uruk</strong> : une ville et le territoire qui l'entoure, dirigée par un <strong>roi</strong>. Au centre se dresse la <strong>ziggourat</strong>, temple en forme de pyramide à degrés.` }
        ]
      },
      {
        titre: 'La civilisation égyptienne',
        cartes: [
          { type:'def', label:'DEF', titre:'L\'Égypte, « don du Nil »', contenu:`La civilisation égyptienne se développe le long du <strong>Nil</strong>. Chaque année, la <strong>crue</strong> du fleuve dépose un limon fertile qui permet l'agriculture. L'historien grec Hérodote disait que « l'Égypte est un don du Nil ».` },
          { type:'def', label:'DEF', titre:'Le pharaon', contenu:`Le <strong>pharaon</strong> est le roi de l'Égypte. Il détient un pouvoir absolu : il est à la fois <strong>chef politique</strong>, <strong>chef militaire</strong> et considéré comme un <strong>dieu vivant</strong>. Il fait régner l'ordre, la justice (la Maât) et la prospérité.` },
          { type:'def', label:'DEF', titre:'Les hiéroglyphes', contenu:`Les Égyptiens écrivent avec des <strong>hiéroglyphes</strong> : des signes représentant des objets, des sons ou des idées. Ils écrivent sur le <strong>papyrus</strong> et sur les murs des temples. Les <strong>scribes</strong> sont les seuls à savoir lire et écrire.` },
          { type:'ex', label:'EX', titre:'Les pyramides de Gizeh', contenu:`Les pyramides de <strong>Gizeh</strong> (vers 2500 av. J.-C.) sont des <strong>tombeaux</strong> de pharaons. La plus grande, celle de Khéops, mesurait 146 m. Les Égyptiens croient en une <strong>vie après la mort</strong> : ils <strong>momifient</strong> les corps et placent des trésors dans les tombes.` }
        ]
      },
      {
        titre: 'Religion et pouvoir',
        cartes: [
          { type:'def', label:'DEF', titre:'Polythéisme', contenu:`Les Égyptiens et les Mésopotamiens sont <strong>polythéistes</strong> : ils croient en <strong>plusieurs dieux</strong>. En Égypte : Rê (soleil), Osiris (mort et résurrection), Isis, Anubis. Chaque dieu a un rôle dans la vie et la nature.` },
          { type:'prop', label:'PROP', titre:'Une société hiérarchisée', contenu:`La société égyptienne forme une <strong>pyramide sociale</strong> : au sommet le <strong>pharaon</strong>, puis les <strong>prêtres</strong> et les <strong>scribes</strong>, ensuite les artisans et les paysans, et tout en bas les <strong>esclaves</strong>.` },
          { type:'meth', label:'METH', titre:'Lire une frise chronologique', contenu:`Pour situer un événement, on utilise une <strong>frise</strong>. Les dates <strong>av. J.-C.</strong> se lisent à l'envers : 3000 av. J.-C. est <strong>plus ancien</strong> que 2000 av. J.-C. Plus le nombre est grand, plus c'est ancien.` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-monde-grec',
    matiere: 'hg',
    titre: 'Le monde des cités grecques',
    ordre: 3,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les Grecs et leurs cités',
        cartes: [
          { type:'def', label:'DEF', titre:'La cité grecque', contenu:`Une <strong>cité</strong> (en grec <em>polis</em>) est un petit État indépendant : une ville et son territoire, avec ses lois, son armée et ses dieux. <strong>Athènes</strong> et <strong>Sparte</strong> sont les plus célèbres. Les Grecs ne forment pas un seul pays mais de <strong>nombreuses cités</strong>.` },
          { type:'prop', label:'PROP', titre:'Une culture commune', contenu:`Malgré leurs rivalités, les Grecs partagent une même <strong>langue</strong>, les mêmes <strong>dieux</strong> et les mêmes <strong>récits</strong> (mythes d'Homère). Ils se sentent membres d'un même monde : le monde <strong>grec</strong> (les Hellènes).` },
          { type:'def', label:'DEF', titre:'Colonisation et Méditerranée', contenu:`Du VIII<sup>e</sup> au VI<sup>e</sup> siècle av. J.-C., les Grecs fondent des <strong>colonies</strong> tout autour de la Méditerranée (Marseille, Naples). Le commerce maritime relie les cités. Les Grecs disent vivre « autour de la mer comme des grenouilles autour d'une mare ».` }
        ]
      },
      {
        titre: 'La religion grecque',
        cartes: [
          { type:'def', label:'DEF', titre:'Les dieux de l\'Olympe', contenu:`Les Grecs sont <strong>polythéistes</strong>. Leurs dieux vivent sur le mont <strong>Olympe</strong> : <strong>Zeus</strong> (roi des dieux), Héra, Poséidon (la mer), Athéna (la sagesse), Apollon, Aphrodite. Ils ressemblent aux humains mais sont <strong>immortels</strong>.` },
          { type:'def', label:'DEF', titre:'Sanctuaires et jeux', contenu:`Pour honorer les dieux, les Grecs se réunissent dans des <strong>sanctuaires</strong> communs comme <strong>Delphes</strong> (oracle d'Apollon) et <strong>Olympie</strong>, où se déroulent tous les 4 ans les <strong>Jeux olympiques</strong> en l'honneur de Zeus.` },
          { type:'ex', label:'EX', titre:'L\'Iliade et l\'Odyssée', contenu:`Le poète <strong>Homère</strong> (VIII<sup>e</sup> s. av. J.-C.) raconte dans l'<em>Iliade</em> la guerre de Troie et dans l'<em>Odyssée</em> le retour d'Ulysse. Ces récits transmettent les valeurs grecques : courage, ruse, respect des dieux.` }
        ]
      },
      {
        titre: 'Athènes et la démocratie',
        cartes: [
          { type:'def', label:'DEF', titre:'Démocratie', contenu:`Au V<sup>e</sup> siècle av. J.-C., Athènes invente la <strong>démocratie</strong> (du grec <em>dêmos</em> = peuple, <em>kratos</em> = pouvoir) : le <strong>pouvoir appartient au peuple</strong>. Les citoyens votent les lois eux-mêmes lors de l'assemblée, l'<strong>Ecclésia</strong>.` },
          { type:'prop', label:'PROP', titre:'Qui est citoyen ?', contenu:`À Athènes, est <strong>citoyen</strong> l'homme libre, né de père et de mère athéniens, et ayant fait son service militaire. Sont <strong>exclus</strong> de la citoyenneté : les <strong>femmes</strong>, les <strong>esclaves</strong> et les <strong>métèques</strong> (étrangers). La démocratie ne concerne donc qu'une minorité.` },
          { type:'meth', label:'METH', titre:'Comparer deux cités', contenu:`<strong>Athènes</strong> est une cité <strong>démocratique</strong>, tournée vers le commerce et les arts. <strong>Sparte</strong> est une cité <strong>militaire</strong>, où les citoyens sont avant tout des soldats. Comparer, c'est repérer les <strong>points communs</strong> (cités grecques, esclavage) et les <strong>différences</strong> (régime politique).` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-rome',
    matiere: 'hg',
    titre: 'Rome, du mythe à l\'histoire',
    ordre: 4,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'La fondation de Rome',
        cartes: [
          { type:'def', label:'DEF', titre:'Le mythe de Romulus et Rémus', contenu:`Selon la légende, Rome aurait été fondée en <strong>753 av. J.-C.</strong> par <strong>Romulus</strong>, qui tua son frère <strong>Rémus</strong>. Les deux jumeaux auraient été recueillis et allaités par une <strong>louve</strong>. C'est un <strong>mythe de fondation</strong>.` },
          { type:'meth', label:'METH', titre:'Mythe et réalité historique', contenu:`Un <strong>mythe</strong> est un récit légendaire, qui n'est pas un fait prouvé. Les <strong>fouilles archéologiques</strong> confirment qu'un village existait bien sur les collines de Rome au VIII<sup>e</sup> siècle av. J.-C. L'historien distingue le <strong>récit légendaire</strong> des <strong>preuves</strong>.` },
          { type:'def', label:'DEF', titre:'La République romaine', contenu:`À partir de <strong>509 av. J.-C.</strong>, Rome devient une <strong>République</strong> : le pouvoir est partagé. Les <strong>magistrats</strong> (consuls) gouvernent, le <strong>Sénat</strong> les conseille, et les citoyens votent dans des assemblées.` }
        ]
      },
      {
        titre: 'Rome conquérante et l\'Empire',
        cartes: [
          { type:'prop', label:'PROP', titre:'La conquête de la Méditerranée', contenu:`Grâce à son armée puissante (les <strong>légions</strong>), Rome conquiert peu à peu toute la <strong>Méditerranée</strong> : l'Italie, la Grèce, l'Afrique du Nord, la Gaule. La mer devient un « lac romain » : <em>Mare Nostrum</em> (« notre mer »).` },
          { type:'def', label:'DEF', titre:'L\'Empire et l\'empereur', contenu:`En <strong>27 av. J.-C.</strong>, <strong>Auguste</strong> devient le premier <strong>empereur</strong> : Rome passe de la République à l'<strong>Empire</strong>. L'empereur détient tous les pouvoirs (politique, militaire, religieux) et est honoré comme un dieu.` },
          { type:'def', label:'DEF', titre:'La paix romaine', contenu:`La <em>Pax Romana</em> (« paix romaine ») est une longue période de paix et de prospérité (I<sup>er</sup>-II<sup>e</sup> s. apr. J.-C.). Le commerce se développe sur d'excellentes <strong>routes</strong> et l'Empire s'enrichit.` }
        ]
      },
      {
        titre: 'La romanisation',
        cartes: [
          { type:'def', label:'DEF', titre:'Romanisation', contenu:`La <strong>romanisation</strong> est l'adoption par les peuples conquis du mode de vie romain : la langue <strong>latine</strong>, la <strong>citoyenneté</strong>, les <strong>villes</strong>, les <strong>lois</strong> et les <strong>dieux</strong> romains.` },
          { type:'ex', label:'EX', titre:'Les monuments romains en Gaule', contenu:`En Gaule romanisée, on construit des villes « à la romaine » avec <strong>forum</strong>, <strong>thermes</strong>, <strong>amphithéâtre</strong> (Nîmes, Arles) et des <strong>aqueducs</strong> pour amener l'eau (le <strong>Pont du Gard</strong>). Ces monuments témoignent encore aujourd'hui de la présence romaine.` },
          { type:'meth', label:'METH', titre:'Étudier une trace du passé', contenu:`Une <strong>trace</strong> peut être un monument, un objet ou un texte. Pour l'étudier : je le <strong>décris</strong>, je le <strong>situe</strong> dans le temps et l'espace, puis j'explique ce qu'il <strong>nous apprend</strong> sur la civilisation qui l'a produit.` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-judaisme-christianisme',
    matiere: 'hg',
    titre: 'La naissance du judaïsme et du christianisme',
    ordre: 5,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Le judaïsme',
        cartes: [
          { type:'def', label:'DEF', titre:'Monothéisme', contenu:`Le <strong>judaïsme</strong> est la religion du peuple hébreu (les Juifs). C'est une religion <strong>monothéiste</strong> : elle croit en un <strong>seul Dieu</strong>. C'est l'une des premières religions monothéistes de l'histoire.` },
          { type:'def', label:'DEF', titre:'La Bible hébraïque', contenu:`Le livre sacré des Juifs est la <strong>Bible hébraïque</strong> (l'Ancien Testament pour les chrétiens). Elle raconte l'histoire du peuple hébreu, l'alliance avec Dieu et la Loi reçue par <strong>Moïse</strong> (les Dix Commandements).` },
          { type:'prop', label:'PROP', titre:'La diaspora', contenu:`Après la destruction du Temple de Jérusalem par les Romains (70 apr. J.-C.), de nombreux Juifs sont dispersés autour de la Méditerranée : c'est la <strong>diaspora</strong>. Ils conservent leur religion grâce aux <strong>synagogues</strong> et à la lecture de la Torah.` }
        ]
      },
      {
        titre: 'La naissance du christianisme',
        cartes: [
          { type:'def', label:'DEF', titre:'Jésus de Nazareth', contenu:`Le christianisme naît au I<sup>er</sup> siècle en Palestine, alors province romaine. <strong>Jésus</strong>, un Juif, prêche un message d'amour et se présente comme le <strong>Messie</strong> (le Christ). Il est condamné et crucifié vers <strong>30 apr. J.-C.</strong>.` },
          { type:'def', label:'DEF', titre:'Les Évangiles', contenu:`Les <strong>chrétiens</strong> croient que Jésus est le <strong>fils de Dieu</strong> et qu'il est <strong>ressuscité</strong>. Leur livre sacré est la <strong>Bible chrétienne</strong>, dont le Nouveau Testament contient les <strong>Évangiles</strong> qui racontent la vie de Jésus.` },
          { type:'prop', label:'PROP', titre:'La diffusion du christianisme', contenu:`Les <strong>apôtres</strong>, comme Paul, diffusent le message de Jésus dans tout l'Empire romain. D'abord <strong>persécutés</strong>, les chrétiens deviennent peu à peu plus nombreux. En <strong>392 apr. J.-C.</strong>, le christianisme devient la <strong>religion officielle</strong> de l'Empire romain.` }
        ]
      },
      {
        titre: 'Comparer les religions monothéistes',
        cartes: [
          { type:'meth', label:'METH', titre:'Points communs et différences', contenu:`<strong>Points communs</strong> : judaïsme et christianisme sont <strong>monothéistes</strong>, ont des textes sacrés et sont nés au Proche-Orient.<br><strong>Différence principale</strong> : les chrétiens reconnaissent Jésus comme le Messie et fils de Dieu, ce que le judaïsme ne fait pas.` },
          { type:'ex', label:'EX', titre:'Lieux et pratiques', contenu:`Le lieu de culte des Juifs est la <strong>synagogue</strong> ; celui des chrétiens, l'<strong>église</strong>. Le jour sacré juif est le <strong>shabbat</strong> (samedi) ; celui des chrétiens, le <strong>dimanche</strong>. Ces deux religions ont profondément marqué la civilisation occidentale.` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-terre-habitee',
    matiere: 'hg',
    titre: 'La Terre, une planète habitée',
    ordre: 6,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Se repérer sur la Terre',
        cartes: [
          { type:'def', label:'DEF', titre:'Continents et océans', contenu:`La Terre compte <strong>6 continents</strong> (Afrique, Amérique, Asie, Europe, Océanie, Antarctique) et <strong>5 océans</strong> (Pacifique, Atlantique, Indien, Arctique, Austral). Les <strong>océans</strong> couvrent environ les <strong>3/4</strong> de la surface du globe.` },
          { type:'def', label:'DEF', titre:'Latitude et longitude', contenu:`Pour se repérer, on utilise un quadrillage :<br><ul><li>les <strong>parallèles</strong> (dont l'<strong>équateur</strong>) donnent la <strong>latitude</strong> (Nord ou Sud) ;</li><li>les <strong>méridiens</strong> (dont celui de Greenwich) donnent la <strong>longitude</strong> (Est ou Ouest).</li></ul>` },
          { type:'meth', label:'METH', titre:'Lire un planisphère', contenu:`Un <strong>planisphère</strong> est une carte de toute la Terre à plat. Pour le lire : je repère l'<strong>orientation</strong> (le Nord en haut), l'<strong>échelle</strong>, la <strong>légende</strong> et le <strong>titre</strong>. Les coordonnées (latitude ; longitude) permettent de localiser un lieu précis.` }
        ]
      },
      {
        titre: 'La répartition des hommes',
        cartes: [
          { type:'def', label:'DEF', titre:'Densité de population', contenu:`La <strong>densité de population</strong> est le nombre d'habitants par km². On la calcule par : $$d = \\frac{\\text{nombre d'habitants}}{\\text{superficie en km}^2}$$ Une <strong>forte densité</strong> = beaucoup d'habitants ; une <strong>faible densité</strong> = peu d'habitants.` },
          { type:'ex', label:'EX', titre:'Calcul d\'une densité', contenu:`Un pays compte <strong>60 millions d'habitants</strong> sur une superficie de <strong>500 000 km²</strong>.<br>$$d = \\frac{60\\,000\\,000}{500\\,000} = 120 \\text{ hab/km}^2$$ Sa densité est de <strong>120 habitants par km²</strong>.` },
          { type:'prop', label:'PROP', titre:'Foyers de peuplement', contenu:`Les hommes ne sont pas répartis de manière égale. Trois grands <strong>foyers de peuplement</strong> rassemblent l'essentiel de l'humanité : l'<strong>Asie du Sud</strong> (Inde), l'<strong>Asie de l'Est</strong> (Chine) et l'<strong>Europe</strong>. À l'inverse, les déserts, les pôles et les hautes montagnes sont presque <strong>vides</strong>.` },
          { type:'def', label:'DEF', titre:'Habiter', contenu:`<strong>Habiter</strong> un lieu, c'est y <strong>vivre</strong>, y <strong>travailler</strong>, s'y <strong>déplacer</strong>, s'y <strong>distraire</strong>. Les hommes s'adaptent à leur environnement (climat, relief) et le transforment.` }
        ]
      }
    ]
  },
  {
    id: 'hg-6e-habiter-ville-littoral',
    matiere: 'hg',
    titre: 'Habiter : villes, espaces de faible densité et littoraux',
    ordre: 7,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Habiter une métropole',
        cartes: [
          { type:'def', label:'DEF', titre:'Ville et métropole', contenu:`Une <strong>ville</strong> est un espace où vivent beaucoup d'habitants de façon concentrée. Une <strong>métropole</strong> est une très grande ville qui concentre de nombreuses activités (économie, pouvoir, culture) et rayonne sur un large territoire.` },
          { type:'def', label:'DEF', titre:'Urbanisation', contenu:`L'<strong>urbanisation</strong> est l'augmentation de la part de la population qui vit en ville. Aujourd'hui, plus de la <strong>moitié</strong> de l'humanité habite en ville. Les villes <strong>s'étalent</strong> et certaines deviennent des <strong>mégapoles</strong> de plus de 10 millions d'habitants.` },
          { type:'prop', label:'PROP', titre:'Centre et périphérie', contenu:`Une ville s'organise en deux parties :<br><ul><li>le <strong>centre-ville</strong> : ancien, dense, avec commerces et monuments ;</li><li>la <strong>périphérie</strong> (banlieues) : zones résidentielles, industrielles et commerciales en bordure.</li></ul>` }
        ]
      },
      {
        titre: 'Habiter un espace de faible densité',
        cartes: [
          { type:'def', label:'DEF', titre:'Espace de faible densité', contenu:`Un <strong>espace de faible densité</strong> est un territoire où vivent <strong>peu d'habitants</strong> au km² : campagnes isolées, montagnes, déserts. La nature y occupe une grande place et les activités sont souvent l'<strong>agriculture</strong> ou le <strong>tourisme</strong>.` },
          { type:'prop', label:'PROP', titre:'Contraintes et atouts', contenu:`Ces espaces présentent des <strong>contraintes</strong> (éloignement des services, transports difficiles) mais aussi des <strong>atouts</strong> : paysages préservés, calme, ressources naturelles. Le <strong>tourisme vert</strong> peut les redynamiser.` },
          { type:'ex', label:'EX', titre:'Un désert habité', contenu:`Le désert du Sahara est un espace de très faible densité. Les hommes y vivent dans des <strong>oasis</strong>, où l'eau permet l'agriculture, ou exploitent les ressources (pétrole). Ils <strong>s'adaptent</strong> à la chaleur et au manque d'eau.` }
        ]
      },
      {
        titre: 'Habiter les littoraux',
        cartes: [
          { type:'def', label:'DEF', titre:'Littoral', contenu:`Un <strong>littoral</strong> est la bande de terre située au contact de la mer. C'est un espace très <strong>attractif</strong> : aujourd'hui une grande partie de l'humanité vit près des côtes.` },
          { type:'prop', label:'PROP', titre:'Littoral industrialo-portuaire et touristique', contenu:`On distingue deux grands types de littoraux aménagés :<br><ul><li>le littoral <strong>industrialo-portuaire</strong> : grands ports, usines, commerce (ex. Shanghai) ;</li><li>le littoral <strong>touristique</strong> : plages, hôtels, ports de plaisance (ex. la Côte d'Azur).</li></ul>` },
          { type:'meth', label:'METH', titre:'Décrire un paysage', contenu:`Pour décrire un paysage, je découpe l'image en <strong>plans</strong> : <strong>premier plan</strong> (en bas), <strong>plan intermédiaire</strong>, <strong>arrière-plan</strong> (en haut). Je nomme les éléments naturels et humains, puis j'explique comment les hommes <strong>aménagent</strong> cet espace.` }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════
  // FRANÇAIS 6e
  // ════════════════════════════════════════════════════════════
  {
    id: 'fr-6e-classes-grammaticales',
    matiere: 'fr',
    titre: 'Les classes grammaticales',
    ordre: 1,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les classes variables',
        cartes: [
          { type:'def', label:'DEF', titre:'Classe grammaticale', contenu:`La <strong>classe grammaticale</strong> (ou nature) d'un mot est la « famille » à laquelle il appartient. Elle ne change <strong>jamais</strong> : « table » est toujours un nom, quel que soit son rôle dans la phrase. On la trouve dans le dictionnaire.` },
          { type:'def', label:'DEF', titre:'Le nom et le déterminant', contenu:`Le <strong>nom</strong> désigne un être, une chose ou une idée (chat, ville, courage). Il est <strong>commun</strong> ou <strong>propre</strong> (avec majuscule : Paris).<br>Le <strong>déterminant</strong> précède le nom et s'accorde avec lui : <em>le</em>, <em>une</em>, <em>mes</em>, <em>ce</em>, <em>trois</em>.` },
          { type:'def', label:'DEF', titre:'L\'adjectif et le verbe', contenu:`L'<strong>adjectif qualificatif</strong> précise le nom et s'accorde avec lui (un grand chat, une grande maison).<br>Le <strong>verbe</strong> exprime une action ou un état (manger, être). Il se <strong>conjugue</strong> : il change selon le temps et la personne.` },
          { type:'def', label:'DEF', titre:'Le pronom', contenu:`Le <strong>pronom</strong> remplace un nom ou un groupe nominal pour éviter une répétition : <em>il, elle, le, lui, celui-ci, qui</em>.<br>Exemple : « Léa dort. <em>Elle</em> est fatiguée. » → <em>Elle</em> remplace <em>Léa</em>.` }
        ]
      },
      {
        titre: 'Les classes invariables',
        cartes: [
          { type:'def', label:'DEF', titre:'Adverbe et préposition', contenu:`L'<strong>adverbe</strong> modifie un verbe, un adjectif ou un autre adverbe ; il est <strong>invariable</strong> (vite, bien, très, hier, ne…pas).<br>La <strong>préposition</strong> introduit un complément : <em>à, de, pour, dans, sur, avec, sans</em>.` },
          { type:'def', label:'DEF', titre:'Conjonction et interjection', contenu:`La <strong>conjonction de coordination</strong> relie des mots ou des phrases : <em>mais, ou, et, donc, or, ni, car</em>.<br>L'<strong>interjection</strong> exprime une émotion : <em>Oh ! Hélas ! Aïe !</em>` },
          { type:'meth', label:'METH', titre:'Trouver la classe d\'un mot', contenu:`Pour trouver la classe d'un mot :<br><ul><li>est-il <strong>variable</strong> (change de forme) ou <strong>invariable</strong> ?</li><li>quel mot accompagne-t-il ?</li><li>en cas de doute, je consulte le <strong>dictionnaire</strong>.</li></ul>` },
          { type:'ex', label:'EX', titre:'Identifier les classes', contenu:`Dans « <em>Le petit chat dort tranquillement.</em> » :<br><ul><li><em>Le</em> = déterminant ;</li><li><em>petit</em> = adjectif ;</li><li><em>chat</em> = nom ;</li><li><em>dort</em> = verbe ;</li><li><em>tranquillement</em> = adverbe.</li></ul>` }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-fonctions',
    matiere: 'fr',
    titre: 'Les fonctions dans la phrase',
    ordre: 2,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Sujet et verbe',
        cartes: [
          { type:'def', label:'DEF', titre:'Fonction grammaticale', contenu:`La <strong>fonction</strong> est le <strong>rôle</strong> qu'un mot joue dans la phrase. Contrairement à la classe, la fonction <strong>change</strong> selon la phrase. On la trouve en posant des questions au verbe.` },
          { type:'def', label:'DEF', titre:'Le sujet', contenu:`Le <strong>sujet</strong> indique qui fait l'action. On le trouve en posant la question « <strong>Qui est-ce qui...?</strong> » ou « Qu'est-ce qui...? » devant le verbe.<br>Exemple : « <em>Le chien</em> aboie. » → Qui est-ce qui aboie ? → <em>Le chien</em>.` },
          { type:'prop', label:'PROP', titre:'L\'accord sujet-verbe', contenu:`Le verbe s'<strong>accorde</strong> toujours avec son sujet en personne et en nombre.<br>Exemple : « Les enfants <em>jouent</em> » (sujet pluriel → verbe au pluriel). Attention quand le sujet est <strong>éloigné</strong> du verbe.` }
        ]
      },
      {
        titre: 'Les compléments du verbe',
        cartes: [
          { type:'def', label:'DEF', titre:'COD et COI', contenu:`Le <strong>COD</strong> (complément d'objet direct) répond à « <strong>qui ?</strong> » ou « <strong>quoi ?</strong> » après le verbe, sans préposition.<br>Le <strong>COI</strong> (complément d'objet indirect) répond à « <strong>à qui ? de quoi ?</strong> » : il est introduit par une <strong>préposition</strong>.` },
          { type:'ex', label:'EX', titre:'Distinguer COD et COI', contenu:`« Léa mange <em>une pomme</em>. » → mange quoi ? <em>une pomme</em> = <strong>COD</strong>.<br>« Léa parle <em>à son frère</em>. » → parle à qui ? <em>à son frère</em> = <strong>COI</strong> (préposition « à »).` },
          { type:'def', label:'DEF', titre:'Le complément circonstanciel', contenu:`Le <strong>complément circonstanciel</strong> (CC) précise les <strong>circonstances</strong> de l'action : le <strong>lieu</strong> (où ?), le <strong>temps</strong> (quand ?), la <strong>manière</strong> (comment ?). Il est souvent <strong>déplaçable</strong> et <strong>supprimable</strong>.` }
        ]
      },
      {
        titre: 'Autour du nom',
        cartes: [
          { type:'def', label:'DEF', titre:'L\'épithète et l\'attribut du sujet', contenu:`L'adjectif <strong>épithète</strong> est placé directement à côté du nom (un <em>beau</em> jardin).<br>L'<strong>attribut du sujet</strong> est relié au sujet par un <strong>verbe d'état</strong> (être, sembler, paraître, devenir) : « Le jardin est <em>beau</em>. »` },
          { type:'meth', label:'METH', titre:'Reconnaître l\'attribut du sujet', contenu:`Je repère un <strong>verbe d'état</strong> (être, paraître, sembler, devenir, rester, demeurer). Le mot qui suit et qui <strong>caractérise le sujet</strong> est l'<strong>attribut du sujet</strong>. Il s'accorde avec le sujet.` },
          { type:'ex', label:'EX', titre:'Analyser une phrase complète', contenu:`« <em>Hier</em>, <em>le jardinier</em> a planté <em>des roses</em> <em>dans le parc</em>. »<br><ul><li><em>Hier</em> = CC de temps ;</li><li><em>le jardinier</em> = sujet ;</li><li><em>des roses</em> = COD ;</li><li><em>dans le parc</em> = CC de lieu.</li></ul>` }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-conjugaison',
    matiere: 'fr',
    titre: 'La conjugaison : présent, futur, imparfait, passé simple',
    ordre: 3,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Notions de base',
        cartes: [
          { type:'def', label:'DEF', titre:'Radical, terminaison, groupes', contenu:`Un verbe conjugué = <strong>radical</strong> + <strong>terminaison</strong>. Ex. : <em>chant-er</em> → <em>chant-ons</em>.<br>On distingue <strong>3 groupes</strong> : 1<sup>er</sup> (verbes en <em>-er</em>), 2<sup>e</sup> (en <em>-ir</em>, comme <em>finir, je finissais</em>), 3<sup>e</sup> (verbes irréguliers : aller, faire, prendre…).` },
          { type:'def', label:'DEF', titre:'L\'infinitif', contenu:`L'<strong>infinitif</strong> est la forme non conjuguée du verbe, celle du dictionnaire (chanter, finir, prendre). Pour trouver le groupe, on regarde la terminaison de l'infinitif.` }
        ]
      },
      {
        titre: 'Le présent et le futur de l\'indicatif',
        cartes: [
          { type:'form', label:'FORM', titre:'Présent (1er groupe)', contenu:`Verbes en <strong>-er</strong> au présent : terminaisons <strong>-e, -es, -e, -ons, -ez, -ent</strong>.<br>Exemple : je chant<strong>e</strong>, tu chant<strong>es</strong>, il chant<strong>e</strong>, nous chant<strong>ons</strong>, vous chant<strong>ez</strong>, ils chant<strong>ent</strong>.` },
          { type:'form', label:'FORM', titre:'Futur simple', contenu:`Le <strong>futur simple</strong> se forme sur l'infinitif + <strong>-ai, -as, -a, -ons, -ez, -ont</strong>.<br>Exemple : je chanter<strong>ai</strong>, tu chanter<strong>as</strong>, il chanter<strong>a</strong>, nous chanter<strong>ons</strong>, vous chanter<strong>ez</strong>, ils chanter<strong>ont</strong>.` },
          { type:'ex', label:'EX', titre:'Verbes irréguliers fréquents', contenu:`Au présent : <em>être</em> → je suis, tu es, il est, nous sommes, vous êtes, ils sont ; <em>avoir</em> → j'ai, tu as, il a, nous avons, vous avez, ils ont ; <em>aller</em> → je vais, tu vas, il va, nous allons, vous allez, ils vont.` }
        ]
      },
      {
        titre: 'Les temps du passé',
        cartes: [
          { type:'form', label:'FORM', titre:'L\'imparfait', contenu:`L'<strong>imparfait</strong> a les mêmes terminaisons pour tous les verbes : <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>.<br>Exemple : je chant<strong>ais</strong>, nous chant<strong>ions</strong>, ils chant<strong>aient</strong>. Il exprime une action <strong>en cours</strong> ou une habitude dans le passé.` },
          { type:'form', label:'FORM', titre:'Le passé simple', contenu:`Le <strong>passé simple</strong> est le temps du récit. À la 3<sup>e</sup> personne :<br><ul><li>1<sup>er</sup> groupe : il chant<strong>a</strong>, ils chant<strong>èrent</strong> ;</li><li>2<sup>e</sup> groupe : il fin<strong>it</strong>, ils fin<strong>irent</strong> ;</li><li>3<sup>e</sup> groupe : il <em>prit</em>, il <em>fut</em>, il <em>vint</em>.</li></ul>` },
          { type:'meth', label:'METH', titre:'Imparfait ou passé simple ?', contenu:`Dans un récit au passé :<br><ul><li>l'<strong>imparfait</strong> décrit le <strong>décor</strong>, une action longue ou répétée (« il <em>faisait</em> beau ») ;</li><li>le <strong>passé simple</strong> raconte les actions <strong>soudaines</strong> qui font avancer l'histoire (« soudain, il <em>tomba</em> »).</li></ul>` },
          { type:'ex', label:'EX', titre:'Emploi combiné', contenu:`« Le soleil <em>brillait</em> (imparfait : décor) quand un orage <em>éclata</em> (passé simple : action soudaine). » Les deux temps s'emploient ensemble pour donner du relief au récit.` }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-orthographe-accords',
    matiere: 'fr',
    titre: 'Orthographe et accords',
    ordre: 4,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les accords dans le groupe nominal',
        cartes: [
          { type:'prop', label:'PROP', titre:'Accord en genre et en nombre', contenu:`Dans le <strong>groupe nominal</strong>, le déterminant et l'adjectif s'accordent avec le nom en <strong>genre</strong> (masculin/féminin) et en <strong>nombre</strong> (singulier/pluriel).<br>Exemple : « <em>les</em> <em>petites</em> <em>filles</em> » → tout au féminin pluriel.` },
          { type:'meth', label:'METH', titre:'Marques du pluriel et du féminin', contenu:`Le <strong>pluriel</strong> ajoute généralement un <strong>-s</strong> (ami → amis), parfois <strong>-x</strong> (cheval → chevaux ; jeu → jeux).<br>Le <strong>féminin</strong> ajoute souvent un <strong>-e</strong> (grand → grande), avec parfois un changement (heureux → heureuse).` }
        ]
      },
      {
        titre: 'Les homophones grammaticaux',
        cartes: [
          { type:'meth', label:'METH', titre:'a / à', contenu:`<strong>a</strong> = verbe avoir (on peut le remplacer par <em>avait</em>) : « Il <em>a</em> faim » → « Il <em>avait</em> faim ».<br><strong>à</strong> = préposition (ne se remplace pas) : « Il va <em>à</em> l'école ».` },
          { type:'meth', label:'METH', titre:'et / est', contenu:`<strong>et</strong> = conjonction (= <em>et puis</em>) : « papa <em>et</em> maman ».<br><strong>est</strong> = verbe être (= <em>était</em>) : « Il <em>est</em> grand » → « Il <em>était</em> grand ».` },
          { type:'meth', label:'METH', titre:'son / sont · ses / ces · ou / où', contenu:`<strong>son</strong> (= le sien) / <strong>sont</strong> (= étaient, verbe être).<br><strong>ses</strong> (les siens) / <strong>ces</strong> (= ceux-là).<br><strong>ou</strong> (= ou bien) / <strong>où</strong> (= lieu : « la ville <em>où</em> je vis »).` },
          { type:'ex', label:'EX', titre:'Choisir le bon homophone', contenu:`« Il <strong>est</strong> parti chercher <strong>ses</strong> affaires <strong>et</strong> <strong>son</strong> sac, là <strong>où</strong> elles <strong>sont</strong> rangées. »<br>Chaque homophone a été choisi en remplaçant par un mot test.` }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-types-phrases',
    matiere: 'fr',
    titre: 'Types et formes de phrases, ponctuation',
    ordre: 5,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les types de phrases',
        cartes: [
          { type:'def', label:'DEF', titre:'Déclarative et interrogative', contenu:`La phrase <strong>déclarative</strong> donne une information et se termine par un point (.).<br>La phrase <strong>interrogative</strong> pose une question et se termine par un point d'interrogation (?) : « Viens-tu ? »` },
          { type:'def', label:'DEF', titre:'Impérative et exclamative', contenu:`La phrase <strong>impérative</strong> donne un ordre ou un conseil : « Ferme la porte. »<br>La phrase <strong>exclamative</strong> exprime un sentiment fort et se termine par un point d'exclamation (!) : « Quelle belle journée ! »` }
        ]
      },
      {
        titre: 'Les formes de phrases',
        cartes: [
          { type:'def', label:'DEF', titre:'Forme affirmative et négative', contenu:`La forme <strong>affirmative</strong> affirme : « Je dors. »<br>La forme <strong>négative</strong> nie, à l'aide de deux mots de négation : <em>ne…pas</em>, <em>ne…plus</em>, <em>ne…jamais</em>, <em>ne…rien</em> : « Je <strong>ne</strong> dors <strong>pas</strong>. »` },
          { type:'meth', label:'METH', titre:'Transformer une phrase', contenu:`Pour passer à la forme négative, j'<strong>encadre le verbe</strong> avec les deux mots de négation.<br>« Il mange. » → « Il <strong>ne</strong> mange <strong>pas</strong>. » Attention à ne pas oublier le « ne », souvent oublié à l'oral.` }
        ]
      },
      {
        titre: 'La ponctuation',
        cartes: [
          { type:'prop', label:'PROP', titre:'Les signes de ponctuation', contenu:`Les signes principaux : le <strong>point</strong> (.), la <strong>virgule</strong> (,), le <strong>point-virgule</strong> (;), les <strong>deux-points</strong> (:), les points d'<strong>interrogation</strong> (?) et d'<strong>exclamation</strong> (!), les <strong>guillemets</strong> (« ») et le <strong>tiret</strong> de dialogue (—).` },
          { type:'def', label:'DEF', titre:'La ponctuation du dialogue', contenu:`Dans un <strong>dialogue</strong>, on ouvre des <strong>guillemets</strong> (« ») et chaque nouvelle réplique commence par un <strong>tiret</strong>. Les <strong>verbes de parole</strong> (dit-il, demanda-t-elle) indiquent qui parle.` },
          { type:'ex', label:'EX', titre:'Écrire un dialogue', contenu:`« Où vas-tu ? demanda Léa.<br>— Je rentre chez moi, répondit Tom. »<br>Le tiret marque le changement d'interlocuteur ; les verbes de parole précisent qui parle.` }
        ]
      }
    ]
  },
  {
    id: 'fr-6e-recits-mythologie',
    matiere: 'fr',
    titre: 'Récits de création, mythes, contes et fables',
    ordre: 6,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Le récit et le schéma narratif',
        cartes: [
          { type:'def', label:'DEF', titre:'Le schéma narratif', contenu:`Un récit suit souvent <strong>5 étapes</strong> :<br><ul><li>la <strong>situation initiale</strong> ;</li><li>l'<strong>élément perturbateur</strong> (déclencheur) ;</li><li>les <strong>péripéties</strong> ;</li><li>l'<strong>élément de résolution</strong> ;</li><li>la <strong>situation finale</strong>.</li></ul>` },
          { type:'def', label:'DEF', titre:'Le narrateur', contenu:`Le <strong>narrateur</strong> est celui qui raconte l'histoire. Il peut raconter à la <strong>1<sup>re</sup> personne</strong> (« je ») s'il participe à l'histoire, ou à la <strong>3<sup>e</sup> personne</strong> (« il/elle ») s'il est extérieur. Ne pas confondre narrateur et <strong>auteur</strong>.` }
        ]
      },
      {
        titre: 'Mythes et récits de la mythologie',
        cartes: [
          { type:'def', label:'DEF', titre:'Mythe', contenu:`Un <strong>mythe</strong> est un récit ancien qui met en scène des <strong>dieux</strong> et des <strong>héros</strong> et qui explique l'origine du monde ou des phénomènes (création, saisons). La <strong>mythologie</strong> grecque et romaine en est l'exemple le plus connu.` },
          { type:'ex', label:'EX', titre:'Le mythe de Thésée', contenu:`<strong>Thésée</strong>, héros grec, entre dans le <strong>Labyrinthe</strong> pour tuer le <strong>Minotaure</strong>, monstre mi-homme mi-taureau. Grâce au fil d'Ariane, il retrouve la sortie. Ce mythe illustre le courage du héros face au monstre.` },
          { type:'def', label:'DEF', titre:'Métamorphose et héros', contenu:`Dans la mythologie, une <strong>métamorphose</strong> est une transformation magique (un homme changé en arbre, en animal). Le <strong>héros</strong> est un personnage exceptionnel par son courage, qui accomplit des <strong>exploits</strong>.` }
        ]
      },
      {
        titre: 'Le conte et la fable',
        cartes: [
          { type:'def', label:'DEF', titre:'Le conte merveilleux', contenu:`Le <strong>conte</strong> est un récit imaginaire avec des éléments <strong>merveilleux</strong> (fées, magie, animaux qui parlent). Il commence souvent par « <em>Il était une fois</em> » et oppose les <strong>bons</strong> aux <strong>méchants</strong>. Charles Perrault et les frères Grimm en sont les grands auteurs.` },
          { type:'def', label:'DEF', titre:'La fable et la morale', contenu:`La <strong>fable</strong> est un court récit, souvent en vers, mettant en scène des <strong>animaux</strong> pour donner une leçon : la <strong>morale</strong>. <strong>Jean de La Fontaine</strong> est le plus célèbre fabuliste français.` },
          { type:'ex', label:'EX', titre:'« Le Corbeau et le Renard »', contenu:`Dans cette fable de La Fontaine, le rusé Renard flatte le Corbeau pour lui faire lâcher son fromage. La <strong>morale</strong> : « Apprenez que tout flatteur / Vit aux dépens de celui qui l'écoute. » → il faut se méfier des flatteurs.` }
        ]
      },
      {
        titre: 'Le vocabulaire et la poésie',
        cartes: [
          { type:'def', label:'DEF', titre:'Synonymes et antonymes', contenu:`Un <strong>synonyme</strong> a un sens proche d'un autre mot (joyeux / content). Un <strong>antonyme</strong> a un sens contraire (grand / petit). Utiliser des synonymes permet d'<strong>enrichir</strong> ses textes et d'éviter les répétitions.` },
          { type:'def', label:'DEF', titre:'Vers, rime et strophe', contenu:`En poésie, chaque ligne est un <strong>vers</strong>. Les <strong>rimes</strong> sont les sons identiques en fin de vers. Un groupe de vers forme une <strong>strophe</strong>. Un vers de 12 syllabes s'appelle un <strong>alexandrin</strong>.` },
          { type:'def', label:'DEF', titre:'Comparaison et métaphore', contenu:`La <strong>comparaison</strong> rapproche deux éléments avec un outil (<em>comme, tel, semblable à</em>) : « fort <em>comme</em> un lion ».<br>La <strong>métaphore</strong> fait le même rapprochement <strong>sans outil</strong> de comparaison : « cet homme est un lion ».` }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════════
  // ANGLAIS 6e
  // ════════════════════════════════════════════════════════════
  {
    id: 'ang-6e-be-have-got',
    matiere: 'ang',
    titre: 'Be, have got and personal pronouns',
    ordre: 1,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'The verb « to be »',
        cartes: [
          { type:'form', label:'FORM', titre:'Conjugaison de « to be »', contenu:`Le verbe <strong>be</strong> (être) au présent :<br><ul><li>I <strong>am</strong> (I'm)</li><li>you <strong>are</strong> (you're)</li><li>he / she / it <strong>is</strong> (he's…)</li><li>we / you / they <strong>are</strong> (we're…)</li></ul>` },
          { type:'meth', label:'METH', titre:'Forme négative et interrogative', contenu:`<strong>Négatif</strong> : on ajoute <em>not</em> : I am <strong>not</strong>, he is <strong>not</strong> (isn't), they are <strong>not</strong> (aren't).<br><strong>Question</strong> : on inverse le verbe et le sujet : « <strong>Are</strong> you happy? », « <strong>Is</strong> she English? »` },
          { type:'ex', label:'EX', titre:'Exemples avec « to be »', contenu:`« I <strong>am</strong> twelve years old. » (J'ai douze ans — attention : on utilise <em>be</em> pour l'âge !)<br>« She <strong>is</strong> French. » — « They <strong>are</strong> at school. » — « <strong>Are</strong> you ready? Yes, I <strong>am</strong>. »` }
        ]
      },
      {
        titre: 'Pronouns « have got »',
        cartes: [
          { type:'def', label:'DEF', titre:'Pronoms personnels sujets', contenu:`Les pronoms sujets : <strong>I</strong> (je), <strong>you</strong> (tu/vous), <strong>he</strong> (il), <strong>she</strong> (elle), <strong>it</strong> (il/elle pour une chose ou un animal), <strong>we</strong> (nous), <strong>they</strong> (ils/elles). « I » s'écrit toujours avec une <strong>majuscule</strong>.` },
          { type:'form', label:'FORM', titre:'« have got » (posséder)', contenu:`Pour dire « avoir/posséder » :<br><ul><li>I / you / we / they <strong>have got</strong> ('ve got)</li><li>he / she / it <strong>has got</strong> ('s got)</li></ul>Négatif : <em>haven't got / hasn't got</em>. Question : « <strong>Have</strong> you got…? »` },
          { type:'ex', label:'EX', titre:'Exemples avec « have got »', contenu:`« I<strong>'ve got</strong> a dog. » (J'ai un chien.)<br>« She <strong>has got</strong> blue eyes. » — « <strong>Have</strong> you got a brother? No, I <strong>haven't</strong>. » — « He <strong>hasn't got</strong> a bike. »` }
        ]
      }
    ]
  },
  {
    id: 'ang-6e-present-simple',
    matiere: 'ang',
    titre: 'The present simple',
    ordre: 2,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Affirmative form',
        cartes: [
          { type:'def', label:'DEF', titre:'Emploi du présent simple', contenu:`Le <strong>present simple</strong> exprime une <strong>habitude</strong>, une <strong>vérité générale</strong> ou un goût.<br>Exemple : « I play football every Saturday. » (habitude), « The sun rises in the east. » (vérité générale).` },
          { type:'form', label:'FORM', titre:'Le « s » à la 3e personne', contenu:`À la forme affirmative, on ajoute un <strong>-s</strong> au verbe à la <strong>3<sup>e</sup> personne du singulier</strong> (he / she / it).<br>« I play » mais « he play<strong>s</strong> ». Cas particuliers : « she <strong>goes</strong> », « he <strong>watches</strong> », « it <strong>flies</strong> ».` }
        ]
      },
      {
        titre: 'Negative and questions',
        cartes: [
          { type:'form', label:'FORM', titre:'Forme négative avec don\'t / doesn\'t', contenu:`On utilise l'<strong>auxiliaire do</strong> + not :<br><ul><li>I / you / we / they <strong>don't</strong> + verbe</li><li>he / she / it <strong>doesn't</strong> + verbe (sans « s » !)</li></ul>Exemple : « He <strong>doesn't</strong> like coffee. » (pas « doesn't likes »).` },
          { type:'form', label:'FORM', titre:'Forme interrogative', contenu:`On commence par l'auxiliaire <strong>Do</strong> ou <strong>Does</strong> :<br>« <strong>Do</strong> you speak English? » — « <strong>Does</strong> she live here? »<br>Réponses courtes : « Yes, I <strong>do</strong>. / No, she <strong>doesn't</strong>. »` },
          { type:'ex', label:'EX', titre:'Mettre une phrase à la forme négative', contenu:`Affirmatif : « Tom plays tennis. »<br>Négatif : « Tom <strong>doesn't play</strong> tennis. » (le « s » disparaît, il passe sur l'auxiliaire <em>does</em>).<br>Question : « <strong>Does</strong> Tom <strong>play</strong> tennis? »` }
        ]
      }
    ]
  },
  {
    id: 'ang-6e-questions-wh',
    matiere: 'ang',
    titre: 'Questions and wh- words',
    ordre: 3,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'The wh- words',
        cartes: [
          { type:'def', label:'DEF', titre:'Les mots interrogatifs', contenu:`Les <strong>wh- words</strong> servent à poser des questions ouvertes :<br><ul><li><strong>What</strong> = quoi / quel</li><li><strong>Who</strong> = qui</li><li><strong>Where</strong> = où</li><li><strong>When</strong> = quand</li><li><strong>Why</strong> = pourquoi · <strong>How</strong> = comment</li></ul>` },
          { type:'meth', label:'METH', titre:'Construire une question en wh-', contenu:`Ordre des mots : <strong>wh- word + auxiliaire + sujet + verbe</strong> ?<br>« <strong>Where do</strong> you live? » — « <strong>What is</strong> your name? » — « <strong>How old are</strong> you? »` }
        ]
      },
      {
        titre: 'Useful questions',
        cartes: [
          { type:'ex', label:'EX', titre:'Questions de présentation', contenu:`« <strong>What's</strong> your name? » → My name is Léa.<br>« <strong>How old are</strong> you? » → I'm twelve.<br>« <strong>Where are</strong> you from? » → I'm from France.` },
          { type:'def', label:'DEF', titre:'How much / How many', contenu:`<strong>How many</strong> + nom dénombrable (au pluriel) : « How <strong>many</strong> books? » (combien de livres).<br><strong>How much</strong> + nom indénombrable : « How <strong>much</strong> water? » (combien d'eau). « How much » sert aussi pour le prix.` },
          { type:'ex', label:'EX', titre:'Réponses courtes (yes/no)', contenu:`Question avec be : « Are you happy? » → « Yes, I am. / No, I'm not. »<br>Question avec do : « Do you like pizza? » → « Yes, I do. / No, I don't. »<br>Question avec can : « Can you swim? » → « Yes, I can. / No, I can't. »` }
        ]
      }
    ]
  },
  {
    id: 'ang-6e-noms-articles',
    matiere: 'ang',
    titre: 'Plurals, articles and prepositions',
    ordre: 4,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Le pluriel des noms',
        cartes: [
          { type:'form', label:'FORM', titre:'Le pluriel régulier', contenu:`On forme le pluriel en ajoutant <strong>-s</strong> : a cat → two cat<strong>s</strong>.<br>Après <em>-s, -ch, -sh, -x</em> on ajoute <strong>-es</strong> : a box → box<strong>es</strong>, a bus → bus<strong>es</strong>.<br>Nom en consonne + <em>y</em> : <em>y</em> → <strong>ies</strong> : a baby → bab<strong>ies</strong>.` },
          { type:'def', label:'DEF', titre:'Pluriels irréguliers', contenu:`Certains noms ont un pluriel irrégulier à connaître par cœur :<br><ul><li>a man → <strong>men</strong></li><li>a woman → <strong>women</strong></li><li>a child → <strong>children</strong></li><li>a foot → <strong>feet</strong> · a tooth → <strong>teeth</strong></li></ul>` }
        ]
      },
      {
        titre: 'Articles and prepositions',
        cartes: [
          { type:'def', label:'DEF', titre:'a / an / the', contenu:`<strong>a</strong> / <strong>an</strong> = un, une (article indéfini). On met <strong>an</strong> devant un son <strong>voyelle</strong> : <em>an</em> apple, <em>an</em> orange. Sinon <em>a</em> : <em>a</em> dog.<br><strong>the</strong> = le, la, les (article défini), pour quelque chose de précis.` },
          { type:'def', label:'DEF', titre:'Prépositions de lieu', contenu:`Les principales prépositions de lieu :<br><ul><li><strong>in</strong> = dans (in the box)</li><li><strong>on</strong> = sur (on the table)</li><li><strong>under</strong> = sous (under the bed)</li><li><strong>next to</strong> = à côté de · <strong>behind</strong> = derrière · <strong>in front of</strong> = devant</li></ul>` },
          { type:'ex', label:'EX', titre:'Décrire une position', contenu:`« The cat is <strong>on</strong> the chair. » (Le chat est sur la chaise.)<br>« The ball is <strong>under</strong> the table. » — « The dog is <strong>next to</strong> the door. » — « My bag is <strong>behind</strong> you. »` }
        ]
      }
    ]
  },
  {
    id: 'ang-6e-vocabulaire',
    matiere: 'ang',
    titre: 'Basic vocabulary: school, family and time',
    ordre: 5,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Family and school',
        cartes: [
          { type:'def', label:'DEF', titre:'The family', contenu:`<strong>La famille</strong> : mother (mère), father (père), parents, brother (frère), sister (sœur), grandmother / grandfather (grands-parents), uncle (oncle), aunt (tante), cousin. « <strong>'s</strong> » exprime la possession : « my brother<strong>'s</strong> bike » (le vélo de mon frère).` },
          { type:'def', label:'DEF', titre:'At school', contenu:`<strong>L'école</strong> : a teacher (un professeur), a pupil (un élève), a classroom (une salle de classe), a book, a pen, a pencil, a desk (un bureau), a schoolbag (un cartable), homework (les devoirs).` }
        ]
      },
      {
        titre: 'Telling the time and dates',
        cartes: [
          { type:'meth', label:'METH', titre:'Dire l\'heure', contenu:`« What time is it? »<br><ul><li>heure pile : « It's three <strong>o'clock</strong>. »</li><li>et quart : « It's <strong>quarter past</strong> three. »</li><li>et demie : « It's <strong>half past</strong> three. »</li><li>moins le quart : « It's <strong>quarter to</strong> four. »</li></ul>` },
          { type:'def', label:'DEF', titre:'Days and months', contenu:`<strong>Les jours</strong> (avec majuscule !) : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.<br><strong>Les mois</strong> : January, February, March… December. Tous prennent une <strong>majuscule</strong> en anglais.` },
          { type:'def', label:'DEF', titre:'Numbers and colours', contenu:`<strong>Numbers</strong> : one, two, three… ten, eleven, twelve, thirteen, twenty, thirty, hundred.<br><strong>Colours</strong> : red, blue, green, yellow, black, white, orange, pink, purple, brown, grey.` },
          { type:'ex', label:'EX', titre:'Se présenter (a short presentation)', contenu:`« Hello! My name is Léa. I'm twelve years old. I'm from France. I've got one brother and a dog. My favourite colour is blue and I like English. » — Un modèle simple pour se présenter à l'oral.` }
        ]
      }
    ]
  }
]
