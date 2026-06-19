// Contenu cours — 5ème — Physique-Chimie
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRES ENRICHIS (id existants)
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'phch-5e-atome',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Constitution de la matière : molécules et atomes',
  ordre: 7,
  enrich: true,
  sections: [
    {
      titre: 'La matière à l\'échelle microscopique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Constitution de la matière',
          contenu: 'Toute la matière qui nous entoure (air, eau, métaux, êtres vivants) est constituée de très petites particules invisibles à l\'œil nu, appelées <strong>molécules</strong> et <strong>atomes</strong>.<br>La matière est donc <strong>discontinue</strong> : entre les particules, il y a du <strong>vide</strong>. C\'est ce qu\'on appelle le modèle particulaire (ou modèle moléculaire) de la matière.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Atome',
          contenu: 'Un <strong>atome</strong> est la plus petite particule constituant la matière. Sa taille est de l\'ordre de $10^{-10}$ m, soit un dixième de milliardième de mètre — il est donc invisible même au microscope optique.<br>Il existe une centaine de sortes d\'atomes différents. Chacun est représenté par un <strong>symbole</strong> : H (hydrogène), O (oxygène), C (carbone), N (azote), Fe (fer), Cu (cuivre).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Molécule',
          contenu: 'Une <strong>molécule</strong> est un assemblage de plusieurs atomes liés entre eux.<br>Exemples :<br>— <strong>dioxygène</strong> O$_2$ : 2 atomes d\'oxygène<br>— <strong>eau</strong> H$_2$O : 2 atomes d\'hydrogène + 1 atome d\'oxygène<br>— <strong>dioxyde de carbone</strong> CO$_2$ : 1 atome de carbone + 2 atomes d\'oxygène<br>L\'indice écrit en bas à droite indique le nombre d\'atomes de chaque sorte.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Atomes et molécules selon l\'état',
          contenu: 'Les mêmes atomes et molécules existent dans les trois états de la matière ; seul leur <strong>arrangement</strong> change :<br>— <strong>Solide</strong> : particules serrées, ordonnées, qui vibrent sur place.<br>— <strong>Liquide</strong> : particules serrées mais en désordre, qui peuvent glisser.<br>— <strong>Gaz</strong> : particules très espacées, en mouvement rapide et désordonné.<br>Cela explique pourquoi un gaz est compressible et occupe tout le volume disponible.'
        }
      ]
    },
    {
      titre: 'Corps purs et mélanges au niveau microscopique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Corps pur',
          contenu: 'Un <strong>corps pur</strong> est constitué d\'un seul type de molécules (ou d\'atomes).<br>Exemples : l\'eau pure (uniquement des molécules H$_2$O), le dioxygène (uniquement des molécules O$_2$), le cuivre (uniquement des atomes Cu).<br>Un corps pur possède des propriétés physiques bien définies (température de fusion, température d\'ébullition, masse volumique).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Mélange au niveau microscopique',
          contenu: 'Un <strong>mélange</strong> contient au moins <strong>deux espèces différentes</strong> de molécules.<br>Exemple : l\'air est un mélange de molécules de dioxygène O$_2$ (≈ 21 %), de diazote N$_2$ (≈ 78 %) et d\'autres gaz.<br>L\'eau salée est un mélange de molécules d\'eau et d\'ions issus du sel.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conservation des atomes',
          contenu: 'Lors d\'une transformation (changement d\'état ou dissolution), les <strong>molécules ne disparaissent pas</strong> et ne se créent pas : elles changent seulement de disposition ou de mouvement.<br>C\'est pourquoi la <strong>masse se conserve</strong> : il y a toujours le même nombre de particules avant et après.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Lire une formule de molécule',
          contenu: 'Combien d\'atomes de chaque sorte y a-t-il dans la molécule de méthane CH$_4$ ?<br><br><strong>Solution :</strong> la formule CH$_4$ indique :<br>— 1 atome de carbone (C, sans indice donc 1)<br>— 4 atomes d\'hydrogène (H, indice 4)<br>La molécule de méthane contient donc <strong>5 atomes</strong> au total.'
        }
      ]
    },
    {
      titre: 'Combustions et conservation des atomes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Combustion',
          contenu: 'Une <strong>combustion</strong> est une transformation chimique au cours de laquelle un <strong>combustible</strong> (bois, méthane, charbon) réagit avec un <strong>comburant</strong> (le dioxygène de l\'air).<br>Une combustion nécessite trois éléments (le « triangle du feu ») : un combustible, un comburant et une source de chaleur.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Combustion du carbone',
          contenu: 'La combustion du carbone consomme du dioxygène et produit du dioxyde de carbone :<br>$$\\text{carbone} + \\text{dioxygène} \\rightarrow \\text{dioxyde de carbone}$$Le test au reste : le dioxyde de carbone CO$_2$ <strong>trouble l\'eau de chaux</strong>. C\'est la preuve d\'une combustion ayant produit du CO$_2$.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conservation de la masse en chimie',
          contenu: 'Au cours d\'une transformation chimique, les atomes se <strong>réorganisent</strong> mais ne sont ni créés ni détruits.<br>Conséquence (loi de Lavoisier) : la masse totale des produits est <strong>égale</strong> à la masse totale des réactifs.<br>« Rien ne se perd, rien ne se crée, tout se transforme. »'
        },
        {
          type: 'ex', label: 'EX', titre: 'Conservation de la masse lors d\'une combustion',
          contenu: 'On brûle 3 g de carbone qui consomme 8 g de dioxygène. Quelle masse de dioxyde de carbone obtient-on ?<br><br><strong>Solution :</strong> par conservation de la masse :<br>$$m(\\text{CO}_2) = m(\\text{carbone}) + m(\\text{dioxygène})$$$$m(\\text{CO}_2) = 3 + 8 = 11 \\text{ g}$$On obtient donc <strong>11 g</strong> de dioxyde de carbone.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-lumiere',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Lumière : sources, propagation et ombres',
  ordre: 8,
  enrich: true,
  sections: [
    {
      titre: 'Sources et propagation de la lumière',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Sources de lumière',
          contenu: 'On distingue deux types de sources :<br>— Les <strong>sources primaires</strong> produisent leur propre lumière : le Soleil, les étoiles, une lampe, une bougie, une braise.<br>— Les <strong>objets diffusants</strong> (sources secondaires) ne produisent pas de lumière mais la <strong>renvoient</strong> dans toutes les directions : la Lune, un mur, une page, la plupart des objets.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Propagation rectiligne de la lumière',
          contenu: 'Dans un <strong>milieu transparent et homogène</strong> (air, eau pure, verre), la lumière se propage <strong>en ligne droite</strong>.<br>On modélise un faisceau lumineux étroit par un <strong>rayon de lumière</strong>, représenté par une droite munie d\'une flèche indiquant le sens de propagation.<br>Preuve expérimentale : on ne voit pas derrière un obstacle opaque.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Milieu transparent, translucide, opaque',
          contenu: '— <strong>Transparent</strong> : laisse passer la lumière et permet de voir nettement à travers (verre, eau claire).<br>— <strong>Translucide</strong> : laisse passer la lumière mais ne permet pas de voir nettement (verre dépoli, papier calque).<br>— <strong>Opaque</strong> : ne laisse pas passer la lumière (bois, métal, carton).'
        },
        {
          type: 'meth', label: 'METH', titre: 'Tracer un rayon de lumière',
          contenu: '1. Repérer la source de lumière (point de départ).<br>2. Tracer une <strong>demi-droite</strong> partant de la source.<br>3. Placer une <strong>flèche</strong> au milieu, orientée de la source vers l\'objet éclairé.<br>Un ensemble de rayons issus d\'une même source forme un <strong>faisceau</strong> (divergent, parallèle ou convergent).'
        }
      ]
    },
    {
      titre: 'Vision des objets',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Condition de vision d\'un objet',
          contenu: 'Pour <strong>voir</strong> un objet, il faut que de la lumière provenant de cet objet entre dans notre œil.<br>— On voit une <strong>source primaire</strong> car la lumière qu\'elle produit arrive dans l\'œil.<br>— On voit un <strong>objet diffusant</strong> car il renvoie vers l\'œil une partie de la lumière qu\'il reçoit.<br>Dans le noir total (aucune lumière), on ne voit rien.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Schématiser la vision d\'un objet',
          contenu: '1. Représenter la <strong>source de lumière</strong>.<br>2. Tracer un rayon de la source vers l\'<strong>objet</strong>.<br>3. Tracer un rayon de l\'objet vers l\'<strong>œil</strong> de l\'observateur.<br>Le sens des flèches montre le trajet : source → objet → œil. Ce trajet complet est nécessaire pour voir un objet diffusant.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Pourquoi voit-on la Lune ?',
          contenu: 'La Lune n\'est pas une source primaire (elle ne produit pas de lumière). Pourquoi la voit-on briller dans le ciel ?<br><br><strong>Solution :</strong> la Lune <strong>diffuse</strong> la lumière qu\'elle reçoit du Soleil. Une partie de cette lumière arrive jusqu\'à notre œil : c\'est ce qui nous permet de la voir. C\'est donc un objet diffusant (source secondaire).'
        }
      ]
    },
    {
      titre: 'Ombres et éclipses',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Ombre propre et ombre portée',
          contenu: 'Quand un objet opaque est éclairé par une source ponctuelle :<br>— L\'<strong>ombre propre</strong> est la partie non éclairée de l\'objet lui-même.<br>— L\'<strong>ombre portée</strong> est la zone sombre projetée par l\'objet sur un écran (le sol, un mur).<br>Le <strong>cône d\'ombre</strong> est l\'espace, derrière l\'objet, où la lumière n\'arrive pas.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Taille de l\'ombre portée',
          contenu: 'La taille de l\'ombre portée dépend de la distance entre la source, l\'objet et l\'écran :<br>— Quand on <strong>rapproche</strong> l\'objet de la source, l\'ombre portée <strong>grandit</strong>.<br>— Quand on <strong>éloigne</strong> l\'objet de la source, l\'ombre portée <strong>diminue</strong>.<br>Ceci se démontre par tracé des rayons rectilignes issus de la source et passant par les bords de l\'objet.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Éclipses',
          contenu: 'Une <strong>éclipse</strong> est un phénomène d\'ombre à l\'échelle astronomique :<br>— <strong>Éclipse de Soleil</strong> : la Lune passe entre le Soleil et la Terre et projette son ombre sur la Terre.<br>— <strong>Éclipse de Lune</strong> : la Terre passe entre le Soleil et la Lune ; la Lune entre dans l\'ombre de la Terre.<br>Ces phénomènes s\'expliquent par la propagation rectiligne de la lumière.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Prévoir l\'évolution d\'une ombre',
          contenu: 'Une lampe éclaire une balle posée sur une table, projetant une ombre sur un mur. On éloigne la balle du mur (vers la lampe). Que devient l\'ombre ?<br><br><strong>Solution :</strong> en rapprochant la balle de la source, on s\'éloigne du mur (écran). L\'ombre portée <strong>grandit</strong> : elle devient plus grande qu\'au départ.'
        }
      ]
    },
    {
      titre: 'Système solaire et distances dans l\'Univers',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Le système solaire',
          contenu: 'Le <strong>système solaire</strong> est composé d\'une étoile, le <strong>Soleil</strong>, autour de laquelle tournent huit <strong>planètes</strong> : Mercure, Vénus, Terre, Mars (planètes rocheuses) puis Jupiter, Saturne, Uranus, Neptune (planètes gazeuses).<br>Le Soleil est une source primaire ; les planètes diffusent sa lumière.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Année-lumière',
          contenu: 'L\'<strong>année-lumière</strong> (notée al) est une <strong>unité de distance</strong> : c\'est la distance parcourue par la lumière en une année.<br>La lumière se déplace à une vitesse d\'environ $c = 300\\,000$ km/s dans le vide. En une année, elle parcourt environ $9{,}5 \\times 10^{12}$ km, soit près de 10 000 milliards de km.<br>Attention : malgré le mot « année », c\'est bien une distance, pas une durée.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Voir loin, c\'est voir dans le passé',
          contenu: 'La lumière met du temps à nous parvenir. Quand on observe un astre éloigné, on le voit tel qu\'il était <strong>il y a longtemps</strong>.<br>Exemple : la lumière du Soleil met environ 8 minutes à atteindre la Terre — on voit donc le Soleil tel qu\'il était il y a 8 min. Une étoile à 100 al est vue telle qu\'elle était il y a 100 ans.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Distance en année-lumière',
          contenu: 'L\'étoile Proxima du Centaure est à 4,2 al de la Terre. Que signifie cette distance ?<br><br><strong>Solution :</strong> la lumière émise par cette étoile met <strong>4,2 ans</strong> pour nous parvenir. Quand nous l\'observons, nous la voyons telle qu\'elle était il y a 4,2 ans. En kilomètres : $4{,}2 \\times 9{,}5 \\times 10^{12} \\approx 4 \\times 10^{13}$ km.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-elec',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Circuits électriques',
  ordre: 6,
  enrich: true,
  sections: [
    {
      titre: 'Le circuit électrique simple',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Circuit électrique',
          contenu: 'Un <strong>circuit électrique</strong> est un ensemble de composants (dipôles) reliés par des fils conducteurs et formant une <strong>boucle fermée</strong>.<br>Pour qu\'un courant circule, le circuit doit comporter au moins :<br>— un <strong>générateur</strong> (pile), qui fournit l\'énergie ;<br>— un ou plusieurs <strong>récepteurs</strong> (lampe, moteur) ;<br>— des <strong>fils de connexion</strong> formant une boucle fermée.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dipôle',
          contenu: 'Un <strong>dipôle</strong> est un composant électrique possédant deux bornes.<br>Exemples : la pile (générateur), la lampe et le moteur (récepteurs), l\'interrupteur, la résistance, la DEL.<br>Chaque dipôle est représenté par un <strong>symbole normalisé</strong> dans les schémas électriques.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Circuit ouvert et circuit fermé',
          contenu: '— Un circuit est <strong>fermé</strong> lorsque la boucle est complète : le courant circule, la lampe brille.<br>— Un circuit est <strong>ouvert</strong> lorsque la boucle est interrompue (interrupteur ouvert, fil débranché) : aucun courant ne circule, la lampe est éteinte.<br>L\'<strong>interrupteur</strong> permet d\'ouvrir ou de fermer le circuit à volonté.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Réaliser un schéma électrique normalisé',
          contenu: '1. Tracer le circuit en forme de <strong>rectangle</strong> (lignes droites, angles à 90°).<br>2. Remplacer chaque composant par son <strong>symbole normalisé</strong>.<br>3. Placer le générateur, l\'interrupteur et les récepteurs sur les côtés.<br>Symboles : pile = deux traits inégaux ; lampe = cercle avec une croix ; interrupteur = trait mobile ; moteur = cercle avec un M.'
        }
      ]
    },
    {
      titre: 'Conducteurs et isolants',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Conducteur et isolant',
          contenu: 'Un matériau est :<br>— <strong>conducteur</strong> s\'il laisse passer le courant électrique (il ferme le circuit, la lampe brille) ;<br>— <strong>isolant</strong> s\'il ne laisse pas passer le courant (le circuit reste ouvert, la lampe reste éteinte).<br>Conducteurs : tous les <strong>métaux</strong> (fer, cuivre, or, aluminium), le carbone (graphite), l\'eau salée.<br>Isolants : plastique, verre, bois sec, air, caoutchouc, porcelaine.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Tester si un matériau est conducteur',
          contenu: '1. Réaliser un circuit avec une pile et une lampe, en laissant deux bornes libres.<br>2. Insérer l\'objet à tester entre ces deux bornes.<br>3. <strong>Si la lampe brille</strong> → le matériau est conducteur. <strong>Si la lampe reste éteinte</strong> → le matériau est isolant.<br>Ce montage s\'appelle un « testeur de continuité ».'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Sens conventionnel du courant',
          contenu: 'Le <strong>sens conventionnel du courant</strong> est défini comme allant, à l\'extérieur du générateur, de la borne <strong>+</strong> vers la borne <strong>−</strong>.<br>Le courant électrique correspond à un déplacement de particules chargées (les électrons dans les métaux).<br>Sur un schéma, on indique ce sens par une flèche placée sur un fil.'
        }
      ]
    },
    {
      titre: 'Circuit en série',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Montage en série',
          contenu: 'Dans un <strong>circuit en série</strong>, tous les dipôles sont placés les uns à la suite des autres sur une <strong>seule boucle</strong>, sans dérivation.<br>Le courant n\'a qu\'un seul chemin possible : il traverse successivement chaque composant.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Propriétés du montage en série',
          contenu: '— Si un récepteur <strong>tombe en panne</strong> (lampe grillée) ou si on en retire un, <strong>tout le circuit s\'éteint</strong> (la boucle est ouverte).<br>— Plus on ajoute de lampes en série, <strong>moins elles brillent</strong> (l\'éclat diminue).<br>— L\'<strong>ordre</strong> des dipôles dans la boucle n\'a pas d\'importance sur le fonctionnement.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Guirlande en série',
          contenu: 'Une guirlande est composée de 10 lampes en série. Une lampe grille. Que se passe-t-il ?<br><br><strong>Solution :</strong> comme les lampes sont en série, la boucle est ouverte au niveau de la lampe grillée. <strong>Toutes les lampes s\'éteignent</strong>. C\'est le défaut principal du montage en série.'
        }
      ]
    },
    {
      titre: 'Circuit en dérivation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Montage en dérivation',
          contenu: 'Dans un <strong>circuit en dérivation</strong> (ou en parallèle), les récepteurs sont placés sur des <strong>boucles différentes</strong> reliées par des <strong>nœuds</strong>.<br>Le courant se sépare au niveau des nœuds : chaque récepteur a son propre chemin.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Propriétés du montage en dérivation',
          contenu: '— Si une lampe grille, <strong>les autres continuent de fonctionner</strong> (leur boucle reste fermée).<br>— Les lampes identiques en dérivation brillent <strong>normalement</strong>, comme si elles étaient seules.<br>C\'est le montage utilisé dans les <strong>installations domestiques</strong> : on peut allumer une lampe sans allumer les autres.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparer série et dérivation',
          contenu: 'Dans une maison, les lampes sont-elles montées en série ou en dérivation ? Pourquoi ?<br><br><strong>Solution :</strong> elles sont montées en <strong>dérivation</strong>. Ainsi, chaque pièce peut être allumée indépendamment, et si une ampoule grille, les autres continuent de fonctionner. Un montage en série serait inutilisable au quotidien.'
        }
      ]
    },
    {
      titre: 'Court-circuit et sécurité électrique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Court-circuit',
          contenu: 'Un <strong>court-circuit</strong> se produit quand un récepteur est relié directement par un fil conducteur entre ses deux bornes : le courant emprunte ce « raccourci » qui ne contient aucun récepteur.<br>Le courant devient alors très intense, ce qui provoque un <strong>échauffement</strong> des fils pouvant entraîner un incendie.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Effet d\'un court-circuit sur une lampe',
          contenu: 'Si on court-circuite une lampe (on relie ses deux bornes par un fil), le courant passe par le fil sans résistance : la lampe court-circuitée <strong>s\'éteint</strong>, car presque tout le courant passe par le raccourci.<br>Un court-circuit du générateur est dangereux : il décharge très vite la pile et la fait chauffer.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dispositifs de sécurité',
          contenu: 'Pour se protéger des courts-circuits et des courants trop intenses :<br>— le <strong>fusible</strong> : un fil qui fond et coupe le circuit si le courant est trop fort ;<br>— le <strong>disjoncteur</strong> : un interrupteur automatique qui s\'ouvre en cas de surintensité.<br>Ces dispositifs protègent les installations et préviennent les incendies.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Règles de sécurité électrique',
          contenu: 'Pour éviter tout accident électrique :<br>— Ne jamais toucher une prise ou un appareil avec les <strong>mains mouillées</strong> (l\'eau salée du corps conduit le courant).<br>— Ne jamais introduire d\'objet métallique dans une prise.<br>— Ne pas surcharger une multiprise.<br>Le corps humain est conducteur : un courant qui le traverse peut être mortel (électrisation, électrocution).'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// NOUVEAUX CHAPITRES
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'phch-5e-etats',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'États de la matière et changements d\'état',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'Les trois états physiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Les trois états de la matière',
          contenu: 'La matière peut se présenter sous trois états physiques :<br>— <strong>État solide</strong> : forme propre, volume propre. Le solide ne se déforme pas seul (ex. : glace, fer, bois).<br>— <strong>État liquide</strong> : pas de forme propre (il épouse celle du récipient), mais un volume propre. Sa surface libre est plane et horizontale (ex. : eau, huile).<br>— <strong>État gazeux</strong> : ni forme ni volume propre. Le gaz occupe tout l\'espace disponible et est compressible (ex. : air, vapeur d\'eau).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Reconnaître l\'état d\'un corps',
          contenu: 'Pour identifier l\'état d\'un échantillon :<br>— A-t-il une <strong>forme propre</strong> ? Oui → solide.<br>— Sinon, a-t-il une <strong>surface libre horizontale</strong> et un volume fixe ? Oui → liquide.<br>— Sinon, occupe-t-il tout le volume et est-il compressible ? Oui → gaz.<br>Attention : un solide en poudre (sable, sucre) reste un solide, même s\'il s\'écoule comme un liquide ; chaque grain garde sa forme.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Interprétation microscopique',
          contenu: 'Les trois états s\'expliquent par l\'arrangement et le mouvement des particules :<br>— <strong>Solide</strong> : particules serrées, ordonnées, qui vibrent autour d\'une position fixe.<br>— <strong>Liquide</strong> : particules serrées mais désordonnées, qui peuvent glisser les unes sur les autres.<br>— <strong>Gaz</strong> : particules très espacées, en mouvement rapide et désordonné ; d\'où la compressibilité.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Compressibilité d\'un gaz',
          contenu: 'On bouche l\'extrémité d\'une seringue remplie d\'air et on pousse le piston. Que constate-t-on ? Et avec de l\'eau ?<br><br><strong>Solution :</strong> avec l\'air (gaz), le piston <strong>avance</strong> : le gaz est <strong>compressible</strong> car ses particules sont espacées. Avec l\'eau (liquide), le piston ne bouge presque pas : un liquide est <strong>incompressible</strong>, ses particules étant déjà serrées.'
        }
      ]
    },
    {
      titre: 'Les changements d\'état',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Vocabulaire des changements d\'état',
          contenu: 'Le passage d\'un état à un autre porte un nom précis :<br>— Solide → liquide : <strong>fusion</strong><br>— Liquide → solide : <strong>solidification</strong><br>— Liquide → gaz : <strong>vaporisation</strong> (ébullition ou évaporation)<br>— Gaz → liquide : <strong>liquéfaction</strong> (ou condensation liquide)<br>— Solide → gaz : <strong>sublimation</strong> ; Gaz → solide : <strong>condensation solide</strong>.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Vaporisation : ébullition et évaporation',
          contenu: 'La vaporisation (liquide → gaz) peut se faire de deux façons :<br>— L\'<strong>évaporation</strong> : lente, à la surface du liquide, à toute température (ex. : une flaque qui sèche).<br>— L\'<strong>ébullition</strong> : rapide, dans tout le volume du liquide, à une température précise (100 °C pour l\'eau sous pression normale), avec formation de bulles.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Température de changement d\'état d\'un corps pur',
          contenu: 'Pour un <strong>corps pur</strong>, un changement d\'état se produit à une <strong>température constante</strong>, caractéristique du corps.<br>Pour l\'eau pure (sous pression atmosphérique normale) :<br>— fusion / solidification à <strong>0 °C</strong> ;<br>— ébullition à <strong>100 °C</strong>.<br>Pendant le changement d\'état, la température reste fixe (palier), même si on continue de chauffer.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Lire une courbe de changement d\'état',
          contenu: 'Sur un graphique température = f(temps) lors d\'un chauffage :<br>1. Repérer les <strong>parties qui montent</strong> : la température augmente, pas de changement d\'état.<br>2. Repérer les <strong>paliers horizontaux</strong> : la température est constante → changement d\'état en cours.<br>3. La température du palier donne la <strong>température de changement d\'état</strong> du corps.'
        }
      ]
    },
    {
      titre: 'Conservation de la masse et variation du volume',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Conservation de la masse',
          contenu: 'Lors d\'un changement d\'état, la <strong>masse se conserve</strong> : elle ne change pas.<br>En effet, les particules (atomes, molécules) ne sont ni créées ni détruites ; seul leur arrangement change.<br>Exemple : 200 g de glace donnent 200 g d\'eau liquide après fusion.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Variation du volume',
          contenu: 'Contrairement à la masse, le <strong>volume varie</strong> lors d\'un changement d\'état, car les particules se rapprochent ou s\'écartent.<br>Cas général : le volume augmente lors du passage à l\'état gazeux.<br><strong>Cas particulier de l\'eau :</strong> quand l\'eau gèle, son volume <strong>augmente</strong> (la glace est moins dense que l\'eau liquide) — c\'est pourquoi la glace flotte et les bouteilles d\'eau pleines éclatent au congélateur.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conséquence sur la masse volumique',
          contenu: 'Puisque la masse se conserve mais que le volume change, la <strong>masse volumique</strong> $\\rho = \\dfrac{m}{V}$ change aussi lors d\'un changement d\'état.<br>L\'eau liquide a une masse volumique de 1000 kg/m³ (1 g/cm³) ; la glace, dont le volume est plus grand, a une masse volumique plus faible (~917 kg/m³), donc elle flotte.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Solidification de l\'eau',
          contenu: 'On place 50 g d\'eau liquide (volume 50 cm³) au congélateur. Après congélation, la masse vaut-elle toujours 50 g ? Le volume est-il toujours 50 cm³ ?<br><br><strong>Solution :</strong> la <strong>masse se conserve</strong> : elle reste de <strong>50 g</strong>. En revanche le <strong>volume augmente</strong> (cas particulier de l\'eau) : il devient supérieur à 50 cm³. La glace occupe donc plus de place que l\'eau liquide.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-melanges',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Mélanges, solutions et techniques de séparation',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Mélanges homogènes et hétérogènes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Mélange',
          contenu: 'Un <strong>mélange</strong> est constitué d\'au moins <strong>deux corps purs différents</strong>.<br>On distingue :<br>— <strong>Mélange homogène</strong> : on ne distingue pas les différents constituants à l\'œil nu ; il a un aspect uniforme (ex. : eau salée, air, sirop dilué).<br>— <strong>Mélange hétérogène</strong> : on distingue au moins deux constituants à l\'œil nu (ex. : eau + sable, eau + huile, jus avec pulpe).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Miscibilité de deux liquides',
          contenu: 'Deux liquides sont :<br>— <strong>miscibles</strong> s\'ils forment un mélange <strong>homogène</strong> (ex. : eau et alcool, eau et sirop) ;<br>— <strong>non miscibles</strong> s\'ils forment un mélange <strong>hétérogène</strong> avec séparation en couches (ex. : eau et huile).<br>Dans un mélange non miscible, le liquide le moins dense surnage au-dessus du plus dense.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'air, un mélange homogène de gaz',
          contenu: 'L\'<strong>air</strong> est un mélange homogène de gaz, composé principalement de :<br>— <strong>diazote</strong> N$_2$ : environ <strong>78 %</strong> ;<br>— <strong>dioxygène</strong> O$_2$ : environ <strong>21 %</strong> ;<br>— autres gaz (argon, dioxyde de carbone, vapeur d\'eau) : environ 1 %.<br>Le dioxygène est le gaz nécessaire à la respiration et aux combustions.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Classer des mélanges',
          contenu: 'Classer ces mélanges en homogène ou hétérogène : (a) eau + sel dissous, (b) eau + huile, (c) sirop dilué, (d) eau + sable.<br><br><strong>Solution :</strong><br>(a) <strong>homogène</strong> (le sel est dissous, aspect uniforme)<br>(b) <strong>hétérogène</strong> (deux couches visibles)<br>(c) <strong>homogène</strong> (aspect uniforme)<br>(d) <strong>hétérogène</strong> (le sable est visible)'
        }
      ]
    },
    {
      titre: 'Solutions, dissolution et saturation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Solution, soluté et solvant',
          contenu: 'Une <strong>solution</strong> est un mélange homogène obtenu par <strong>dissolution</strong> d\'une espèce dans une autre :<br>— le <strong>soluté</strong> est l\'espèce dissoute (ex. : le sel) ;<br>— le <strong>solvant</strong> est le liquide qui dissout (ex. : l\'eau).<br>Quand le solvant est l\'eau, on parle de <strong>solution aqueuse</strong>.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Saturation',
          contenu: 'Une solution est <strong>saturée</strong> lorsque le solvant ne peut plus dissoudre de soluté supplémentaire : le soluté en excès reste solide au fond.<br>Exemple : dans un verre d\'eau, on peut dissoudre une certaine quantité de sel ; au-delà, le sel ne se dissout plus.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conservation de la masse lors d\'une dissolution',
          contenu: 'Lors d\'une dissolution, la <strong>masse se conserve</strong> :<br>$$m_{\\text{solution}} = m_{\\text{solvant}} + m_{\\text{soluté}}$$Le soluté ne disparaît pas : ses particules se dispersent entre celles du solvant. C\'est pourquoi l\'eau salée est plus lourde que l\'eau pure de même volume.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Masse d\'une solution',
          contenu: 'On dissout 15 g de sucre dans 200 g d\'eau. Quelle est la masse de la solution obtenue ?<br><br><strong>Solution :</strong> par conservation de la masse :<br>$$m_{\\text{solution}} = m_{\\text{eau}} + m_{\\text{sucre}} = 200 + 15 = 215 \\text{ g}$$La solution sucrée a une masse de <strong>215 g</strong>.'
        }
      ]
    },
    {
      titre: 'Techniques de séparation',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Décantation',
          contenu: 'La <strong>décantation</strong> sépare les constituants d\'un mélange hétérogène en les laissant <strong>reposer</strong> :<br>— Pour un solide dans un liquide (eau + sable) : le solide, plus dense, se dépose au fond.<br>— Pour deux liquides non miscibles (eau + huile) : ils forment deux couches qu\'on sépare avec une ampoule à décanter.<br>La décantation utilise les différences de <strong>densité</strong>.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Filtration',
          contenu: 'La <strong>filtration</strong> sépare un <strong>solide insoluble</strong> d\'un liquide à l\'aide d\'un filtre (papier filtre) :<br>— Le <strong>filtrat</strong> est le liquide qui traverse le filtre.<br>— Le <strong>résidu</strong> (ou refus) est le solide retenu par le filtre.<br>La filtration ne sépare pas une espèce <strong>dissoute</strong> : l\'eau salée filtrée reste salée.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Distillation',
          contenu: 'La <strong>distillation</strong> sépare les constituants d\'un mélange <strong>homogène</strong> grâce à leurs températures d\'ébullition différentes :<br>1. On <strong>chauffe</strong> le mélange ; le constituant le plus volatil s\'évapore.<br>2. La vapeur passe dans un <strong>réfrigérant</strong> où elle se liquéfie.<br>3. On recueille le liquide pur, appelé <strong>distillat</strong>.<br>Exemple : distiller de l\'eau salée donne de l\'eau pure (distillat) ; le sel reste dans le ballon.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Choisir une technique de séparation',
          contenu: 'On veut récupérer de l\'eau pure à partir d\'eau salée. La filtration convient-elle ?<br><br><strong>Solution :</strong> <strong>Non</strong>, car le sel est <strong>dissous</strong> : il traverse le filtre avec l\'eau. Il faut utiliser la <strong>distillation</strong> : en chauffant, l\'eau s\'évapore puis se liquéfie (distillat pur), tandis que le sel reste au fond.'
        }
      ]
    },
    {
      titre: 'L\'eau dans l\'environnement',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Le cycle de l\'eau',
          contenu: 'L\'eau circule en permanence sur Terre en changeant d\'état :<br>— <strong>Évaporation</strong> de l\'eau des océans, lacs et rivières (liquide → vapeur).<br>— <strong>Condensation</strong> en altitude : formation des nuages (vapeur → fines gouttes).<br>— <strong>Précipitations</strong> : pluie, neige, grêle qui retombent au sol.<br>— <strong>Ruissellement</strong> et infiltration qui ramènent l\'eau vers les océans.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Eau pure et eaux naturelles',
          contenu: 'L\'<strong>eau pure</strong> ne contient que des molécules d\'eau ; elle est rare dans la nature.<br>Les <strong>eaux naturelles</strong> (eau de source, eau de mer, eau du robinet) sont des <strong>mélanges</strong> : elles contiennent des sels minéraux dissous, parfois des gaz et des particules.<br>L\'eau de mer est salée ; l\'eau minérale contient des sels variés indiqués sur l\'étiquette.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Test de reconnaissance de l\'eau',
          contenu: 'Pour reconnaître la présence d\'<strong>eau</strong> dans un liquide, on utilise le <strong>sulfate de cuivre anhydre</strong> :<br>— de couleur <strong>blanche</strong> au départ,<br>— il devient <strong>bleu</strong> en présence d\'eau.<br>Ce test détecte l\'eau, mais ne dit pas si elle est pure.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-masse-volume',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Masse, volume et masse volumique',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'Masse et volume',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Masse',
          contenu: 'La <strong>masse</strong> d\'un objet mesure la quantité de matière qu\'il contient. Elle se mesure avec une <strong>balance</strong>.<br>Unité légale : le <strong>kilogramme</strong> (kg). On utilise aussi le gramme (g) : $1 \\text{ kg} = 1000 \\text{ g}$.<br>La masse d\'un objet est la même partout (sur Terre, sur la Lune…) : elle ne dépend pas du lieu.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Volume',
          contenu: 'Le <strong>volume</strong> est l\'espace occupé par un objet.<br>Unités : le <strong>mètre cube</strong> (m³) et le <strong>litre</strong> (L) pour les liquides.<br>Équivalences utiles : $1 \\text{ L} = 1 \\text{ dm}^3 = 1000 \\text{ mL} = 1000 \\text{ cm}^3$.<br>On mesure le volume d\'un liquide avec une <strong>éprouvette graduée</strong>, en lisant au niveau du bas du ménisque, à hauteur des yeux.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer le volume d\'un solide',
          contenu: 'Pour un solide de forme quelconque, on utilise la méthode par <strong>déplacement d\'eau</strong> :<br>1. Verser un volume connu $V_1$ d\'eau dans une éprouvette.<br>2. Y plonger le solide : le niveau monte à $V_2$.<br>3. Le volume du solide vaut : $V = V_2 - V_1$.<br>Cette méthode fonctionne pour un solide qui coule et ne se dissout pas dans l\'eau.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Conversion d\'unités de volume',
          contenu: 'Convertir 2,5 L en mL, puis en cm³.<br><br><strong>Solution :</strong> on sait que $1 \\text{ L} = 1000 \\text{ mL}$, donc :<br>$$2{,}5 \\text{ L} = 2{,}5 \\times 1000 = 2500 \\text{ mL}$$Et comme $1 \\text{ mL} = 1 \\text{ cm}^3$, on a aussi $2{,}5 \\text{ L} = 2500 \\text{ cm}^3$.'
        }
      ]
    },
    {
      titre: 'La masse volumique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Masse volumique',
          contenu: 'La <strong>masse volumique</strong> d\'un corps, notée $\\rho$ (rho), est la masse d\'un volume donné de ce corps. Elle se calcule par :<br>$$\\rho = \\frac{m}{V}$$où $m$ est la masse et $V$ le volume.<br>Unités courantes : g/cm³ ou g/mL, et kg/m³ (unité légale).<br>La masse volumique est une <strong>grandeur caractéristique</strong> : elle permet d\'identifier un matériau.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Les trois formules de la masse volumique',
          contenu: 'À partir de $\\rho = \\dfrac{m}{V}$, on déduit :<br>$$\\rho = \\frac{m}{V} \\qquad m = \\rho \\times V \\qquad V = \\frac{m}{\\rho}$$Selon la grandeur recherchée, on choisit la bonne forme. Penser à utiliser des unités cohérentes (g et cm³ ensemble, ou kg et m³ ensemble).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Masse volumique de quelques corps',
          contenu: 'Valeurs de référence à connaître :<br>— <strong>Eau liquide</strong> : $\\rho = 1{,}0$ g/cm³ $= 1000$ kg/m³<br>— <strong>Huile</strong> : $\\rho \\approx 0{,}9$ g/cm³ (moins dense que l\'eau → surnage)<br>— <strong>Fer</strong> : $\\rho \\approx 7{,}9$ g/cm³<br>— <strong>Air</strong> : $\\rho \\approx 1{,}3$ g/L (beaucoup plus faible qu\'un solide ou un liquide).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Flotter ou couler',
          contenu: 'Un corps <strong>coule</strong> dans un liquide si sa masse volumique est <strong>supérieure</strong> à celle du liquide ; il <strong>flotte</strong> si elle est <strong>inférieure</strong>.<br>Exemple : l\'huile ($0{,}9$ g/cm³) flotte sur l\'eau ($1{,}0$ g/cm³) ; un morceau de fer ($7{,}9$ g/cm³) coule.<br>C\'est la comparaison des masses volumiques qui décide, pas la masse seule.'
        }
      ]
    },
    {
      titre: 'Calculs de masse volumique',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Déterminer la masse volumique d\'un solide',
          contenu: '1. Mesurer la <strong>masse</strong> $m$ du solide avec une balance.<br>2. Mesurer son <strong>volume</strong> $V$ (déplacement d\'eau si forme quelconque).<br>3. Calculer $\\rho = \\dfrac{m}{V}$ avec des unités cohérentes.<br>4. Comparer à une table de valeurs pour <strong>identifier le matériau</strong>.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul de masse volumique',
          contenu: 'Un caillou a une masse de 78 g et un volume de 10 cm³. Quelle est sa masse volumique ?<br><br><strong>Solution :</strong><br>$$\\rho = \\frac{m}{V} = \\frac{78}{10} = 7{,}8 \\text{ g/cm}^3$$Cette valeur est proche de celle du fer ($7{,}9$ g/cm³) : le caillou pourrait être en fer.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Calculer une masse à partir du volume',
          contenu: 'Quelle est la masse de 2 L d\'eau pure ?<br><br><strong>Solution :</strong> $\\rho_{\\text{eau}} = 1$ g/cm³ et $2 \\text{ L} = 2000 \\text{ cm}^3$.<br>$$m = \\rho \\times V = 1 \\times 2000 = 2000 \\text{ g} = 2 \\text{ kg}$$Deux litres d\'eau pèsent donc <strong>2 kg</strong>.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-mouvement',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Mouvement et vitesse',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Décrire un mouvement',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Mouvement et repos — relativité',
          contenu: 'Un objet est en <strong>mouvement</strong> par rapport à un autre si sa position change au cours du temps par rapport à cet autre objet (le <strong>référentiel</strong>).<br>Il est au <strong>repos</strong> si sa position ne change pas.<br>Le mouvement est <strong>relatif</strong> : un passager assis dans un train est au repos par rapport au train, mais en mouvement par rapport au sol.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Trajectoire',
          contenu: 'La <strong>trajectoire</strong> est l\'ensemble des positions successives occupées par un objet au cours de son mouvement.<br>Selon sa forme, on parle de :<br>— mouvement <strong>rectiligne</strong> (trajectoire en ligne droite) ;<br>— mouvement <strong>circulaire</strong> (trajectoire en cercle) ;<br>— mouvement <strong>curviligne</strong> (trajectoire courbe quelconque).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Mouvement uniforme, accéléré, ralenti',
          contenu: 'On caractérise un mouvement par l\'évolution de sa vitesse :<br>— <strong>uniforme</strong> : la vitesse reste constante ;<br>— <strong>accéléré</strong> : la vitesse augmente ;<br>— <strong>ralenti</strong> (décéléré) : la vitesse diminue.<br>Exemple : une bille qui dévale une pente a un mouvement rectiligne accéléré.'
        }
      ]
    },
    {
      titre: 'La vitesse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Vitesse moyenne',
          contenu: 'La <strong>vitesse</strong> indique la distance parcourue pendant une durée donnée. La vitesse moyenne se calcule par :<br>$$v = \\frac{d}{t}$$où $d$ est la distance parcourue et $t$ la durée.<br>Unités : le <strong>mètre par seconde</strong> (m/s) et le <strong>kilomètre par heure</strong> (km/h).'
        },
        {
          type: 'form', label: 'FORM', titre: 'Les trois formules de la vitesse',
          contenu: 'À partir de $v = \\dfrac{d}{t}$ :<br>$$v = \\frac{d}{t} \\qquad d = v \\times t \\qquad t = \\frac{d}{v}$$Veiller à la cohérence des unités : si $v$ est en m/s, alors $d$ est en mètres et $t$ en secondes.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Convertir km/h en m/s',
          contenu: 'Pour passer des <strong>km/h aux m/s</strong>, on <strong>divise par 3,6</strong>.<br>Pour passer des <strong>m/s aux km/h</strong>, on <strong>multiplie par 3,6</strong>.<br>Cela vient de : $1$ km $= 1000$ m et $1$ h $= 3600$ s, donc $1 \\text{ km/h} = \\dfrac{1000}{3600} = \\dfrac{1}{3{,}6}$ m/s.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul de vitesse',
          contenu: 'Un coureur parcourt 1500 m en 5 minutes. Quelle est sa vitesse moyenne en m/s, puis en km/h ?<br><br><strong>Solution :</strong> $t = 5 \\text{ min} = 300 \\text{ s}$.<br>$$v = \\frac{d}{t} = \\frac{1500}{300} = 5 \\text{ m/s}$$En km/h : $v = 5 \\times 3{,}6 = 18$ km/h.'
        }
      ]
    }
  ]
},

{
  id: 'phch-5e-signaux',
  filiere: '5eme',
  matiere: 'phch',
  titre: 'Signaux sonores',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'Émission et propagation du son',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Source sonore',
          contenu: 'Un <strong>son</strong> est produit par un objet qui <strong>vibre</strong> : la corde d\'une guitare, une peau de tambour, les cordes vocales, un haut-parleur.<br>Cette vibration met en mouvement l\'air autour de la source : c\'est cette perturbation qui se propage et que l\'oreille perçoit comme un son.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Milieu de propagation',
          contenu: 'Le son a besoin d\'un <strong>milieu matériel</strong> pour se propager : air, eau, solides.<br>Le son <strong>ne se propage pas dans le vide</strong> (contrairement à la lumière), car il n\'y a pas de matière pour transmettre la vibration.<br>Expérience : sous une cloche à vide, le son d\'une sonnerie diminue jusqu\'à disparaître quand on retire l\'air.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Vitesse du son',
          contenu: 'La vitesse de propagation du son <strong>dépend du milieu</strong> :<br>— dans l\'<strong>air</strong> : environ <strong>340 m/s</strong> ;<br>— dans l\'<strong>eau</strong> : environ 1500 m/s ;<br>— dans les <strong>solides</strong> : encore plus rapide.<br>Le son est bien plus lent que la lumière (300 000 km/s), ce qui explique qu\'on voit l\'éclair avant d\'entendre le tonnerre.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Distance d\'un orage',
          contenu: 'On voit un éclair, puis on entend le tonnerre 3 secondes plus tard. À quelle distance est l\'orage ? (vitesse du son : 340 m/s)<br><br><strong>Solution :</strong> la lumière de l\'éclair arrive quasi instantanément. La distance se calcule avec le son :<br>$$d = v \\times t = 340 \\times 3 = 1020 \\text{ m}$$L\'orage est à environ <strong>1 km</strong>.'
        }
      ]
    },
    {
      titre: 'Caractéristiques d\'un son et audition',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Hauteur et fréquence',
          contenu: 'La <strong>hauteur</strong> d\'un son distingue un son <strong>grave</strong> d\'un son <strong>aigu</strong>. Elle est liée à la <strong>fréquence</strong>, c\'est-à-dire le nombre de vibrations par seconde, mesurée en <strong>hertz</strong> (Hz).<br>— Son <strong>grave</strong> → fréquence basse ;<br>— Son <strong>aigu</strong> → fréquence élevée.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Intensité sonore (niveau sonore)',
          contenu: 'L\'<strong>intensité sonore</strong> distingue un son <strong>fort</strong> d\'un son <strong>faible</strong>. Le niveau sonore se mesure en <strong>décibels</strong> (dB) avec un sonomètre.<br>À partir de <strong>85 dB</strong>, une exposition prolongée devient dangereuse pour l\'oreille ; le seuil de douleur est vers 120 dB.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Domaine d\'audition humaine et risques',
          contenu: 'L\'oreille humaine perçoit des sons dont la fréquence est comprise entre environ <strong>20 Hz et 20 000 Hz</strong>.<br>En dessous : les <strong>infrasons</strong> ; au-dessus : les <strong>ultrasons</strong> (inaudibles pour l\'homme, perçus par certains animaux).<br>Une exposition à des sons trop intenses peut endommager l\'oreille de façon <strong>irréversible</strong> : il faut protéger son audition.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparer deux sons',
          contenu: 'Un son A a une fréquence de 200 Hz, un son B de 2000 Hz. Lequel est le plus aigu ?<br><br><strong>Solution :</strong> plus la fréquence est élevée, plus le son est aigu. Le son B (2000 Hz) a la plus grande fréquence : c\'est le son le plus <strong>aigu</strong>. Le son A (200 Hz) est plus <strong>grave</strong>.'
        }
      ]
    }
  ]
}

]
