export const DATA = [
  {
    id: 'svt-6e-vivant',
    matiere: 'svt',
    titre: 'Les caractéristiques du vivant',
    ordre: 1,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Reconnaître le vivant',
        cartes: [
          { type:'def', label:'DEF', titre:'Être vivant', contenu:`Un <strong>être vivant</strong> est un organisme qui présente l'ensemble des fonctions du vivant : il se <strong>nourrit</strong>, <strong>respire</strong>, <strong>grandit</strong> (croissance), se <strong>reproduit</strong>, <strong>réagit</strong> à son environnement et finit par <strong>mourir</strong>.<br>Un être vivant peut être un végétal, un animal, un champignon ou un micro-organisme (bactérie).` },
          { type:'def', label:'DEF', titre:'Matière minérale et matière organique', contenu:`La <strong>matière minérale</strong> n'est pas issue d'un être vivant (eau, roches, sels minéraux, air).<br>La <strong>matière organique</strong> est fabriquée par les êtres vivants (sucres, protéines, bois, plumes). Elle peut être <strong>décomposée</strong> par d'autres êtres vivants après la mort.` },
          { type:'prop', label:'PROP', titre:'Composant universel : la cellule', contenu:`Tous les êtres vivants sont constitués de <strong>cellules</strong>. La cellule est l'<strong>unité de base</strong> du vivant.<br>Certains êtres vivants sont formés d'<strong>une seule cellule</strong> (unicellulaires : bactérie, paramécie), d'autres de <strong>milliards de cellules</strong> (pluricellulaires : l'Homme, un arbre).` },
          { type:'meth', label:'METH', titre:'Distinguer vivant et non-vivant', contenu:`Pour décider si un objet est vivant, on vérifie s'il réalise les fonctions du vivant :<br><ul><li>se nourrit-il ? grandit-il ?</li><li>se reproduit-il ?</li><li>réagit-il à son milieu ?</li></ul>Une voiture bouge et « consomme » mais ne grandit pas et ne se reproduit pas : elle n'est <strong>pas vivante</strong>.` }
        ]
      },
      {
        titre: 'La cellule au microscope',
        cartes: [
          { type:'def', label:'DEF', titre:'Cellule et ses constituants', contenu:`Une cellule comporte au minimum :<br><ul><li>une <strong>membrane</strong> qui la délimite,</li><li>un <strong>cytoplasme</strong> (milieu intérieur),</li><li>un <strong>noyau</strong> qui contient l'information.</li></ul>La <strong>cellule végétale</strong> possède en plus une <strong>paroi</strong> rigide, des <strong>chloroplastes</strong> (verts) et une grande <strong>vacuole</strong>.` },
          { type:'meth', label:'METH', titre:'Utiliser le microscope optique', contenu:`Étapes d'observation :<br><ul><li>préparer une lame mince entre lame et lamelle,</li><li>placer sur la platine, démarrer au plus <strong>faible grossissement</strong>,</li><li>faire la mise au point avec la vis,</li><li>augmenter le grossissement progressivement.</li></ul>Le <strong>grossissement total</strong> = grossissement de l'oculaire $\\times$ grossissement de l'objectif.` },
          { type:'ex', label:'EX', titre:'Calcul d\'un grossissement', contenu:`On observe une cellule d'oignon avec un oculaire $\\times 10$ et un objectif $\\times 40$.<br>Grossissement total $= 10 \\times 40 = 400$.<br>La cellule apparaît donc <strong>400 fois plus grande</strong> que sa taille réelle.` }
        ]
      },
      {
        titre: 'L\'organisation des organismes',
        cartes: [
          { type:'def', label:'DEF', titre:'Organe et appareil', contenu:`Un <strong>organe</strong> est une partie du corps assurant une fonction (cœur, poumon, feuille). Un ensemble d'organes qui collaborent forme un <strong>appareil</strong> ou système (appareil digestif, appareil respiratoire).` },
          { type:'prop', label:'PROP', titre:'Niveaux d\'organisation', contenu:`Chez un organisme pluricellulaire, on passe du plus petit au plus grand :<br>$$\\text{cellule} \\Rightarrow \\text{tissu} \\Rightarrow \\text{organe} \\Rightarrow \\text{appareil} \\Rightarrow \\text{organisme}$$` },
          { type:'ex', label:'EX', titre:'Exemple chez l\'Homme', contenu:`L'<strong>estomac</strong> est un organe formé de tissus, eux-mêmes faits de cellules. Avec l'intestin, le foie et l'œsophage, il forme l'<strong>appareil digestif</strong> qui assure la digestion des aliments.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-classification',
    matiere: 'svt',
    titre: 'Classer les êtres vivants',
    ordre: 2,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Espèce et biodiversité',
        cartes: [
          { type:'def', label:'DEF', titre:'Espèce', contenu:`Une <strong>espèce</strong> regroupe les êtres vivants qui se <strong>ressemblent</strong> et qui peuvent se <strong>reproduire entre eux</strong> en donnant une descendance <strong>fertile</strong> (capable elle-même de se reproduire).` },
          { type:'def', label:'DEF', titre:'Biodiversité', contenu:`La <strong>biodiversité</strong> est la diversité de tous les êtres vivants sur Terre. On la mesure à trois niveaux : diversité des <strong>espèces</strong>, diversité au sein d'une espèce (variétés), diversité des <strong>milieux</strong>.` },
          { type:'meth', label:'METH', titre:'Reconnaître deux espèces différentes', contenu:`Deux individus appartiennent à des espèces différentes si, croisés, ils ne donnent <strong>aucune descendance</strong> ou une descendance <strong>stérile</strong>.<br>Exemple : l'âne et la jument donnent un mulet stérile : ce sont donc <strong>deux espèces</strong>.` }
        ]
      },
      {
        titre: 'Le principe de la classification',
        cartes: [
          { type:'meth', label:'METH', titre:'Classer par attributs', contenu:`La classification moderne regroupe les êtres vivants selon ce qu'ils <strong>possèdent en commun</strong> (les <strong>attributs</strong>) : squelette interne, poils, plumes, 4 membres, yeux...<br>On <strong>ne classe pas</strong> selon ce qu'un être vivant ne possède pas.` },
          { type:'prop', label:'PROP', titre:'Groupes emboîtés', contenu:`Les êtres vivants qui partagent un attribut forment un <strong>groupe</strong>. Les groupes sont <strong>emboîtés</strong> : un groupe possédant plus d'attributs est inclus dans un groupe plus large.<br>Exemple : les Mammifères (poils) sont inclus dans les Vertébrés (squelette interne).` },
          { type:'ex', label:'EX', titre:'Construire des groupes emboîtés', contenu:`Soit le chat (poils, 4 membres, squelette), le pigeon (plumes, 4 membres, squelette) et l'escargot (ni squelette interne, ni 4 membres).<br>Chat et pigeon sont dans le groupe des <strong>Vertébrés</strong> (squelette interne) ; l'escargot est en dehors. Le chat seul possède des poils : il est dans le sous-groupe des <strong>Mammifères</strong>.` }
        ]
      },
      {
        titre: 'Les grands groupes',
        cartes: [
          { type:'def', label:'DEF', titre:'Vertébrés et invertébrés', contenu:`Les <strong>Vertébrés</strong> possèdent un <strong>squelette interne</strong> avec une colonne vertébrale (poissons, amphibiens, reptiles, oiseaux, mammifères).<br>Les <strong>Invertébrés</strong> n'ont pas de squelette interne (insectes, mollusques, vers).` },
          { type:'prop', label:'PROP', titre:'Cinq grands groupes de Vertébrés', contenu:`<ul><li><strong>Poissons</strong> : écailles, nageoires, branchies.</li><li><strong>Amphibiens</strong> : peau nue humide (grenouille).</li><li><strong>Reptiles</strong> : écailles sèches (lézard, serpent).</li><li><strong>Oiseaux</strong> : plumes, bec.</li><li><strong>Mammifères</strong> : poils, allaitement.</li></ul>` },
          { type:'meth', label:'METH', titre:'Utiliser une clé de détermination', contenu:`Une <strong>clé de détermination</strong> propose à chaque étape un choix entre deux caractères. On suit le chemin correspondant à l'animal observé jusqu'à obtenir son <strong>nom</strong> ou son groupe.<br>Méthode : observer un attribut, choisir la bonne branche, recommencer.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-milieux',
    matiere: 'svt',
    titre: 'La diversité des milieux et le peuplement',
    ordre: 3,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Décrire un milieu de vie',
        cartes: [
          { type:'def', label:'DEF', titre:'Milieu de vie et peuplement', contenu:`Un <strong>milieu de vie</strong> est un endroit où vivent des êtres vivants (forêt, mare, prairie, sol). Le <strong>peuplement</strong> est l'ensemble des êtres vivants présents dans ce milieu.` },
          { type:'def', label:'DEF', titre:'Conditions physiques (composante minérale)', contenu:`Un milieu présente des <strong>caractéristiques physiques</strong> mesurables : <strong>température</strong>, <strong>luminosité</strong>, <strong>humidité</strong>, présence d'<strong>eau</strong>, nature du <strong>sol</strong>. Ces conditions influencent les espèces présentes.` },
          { type:'meth', label:'METH', titre:'Réaliser un relevé de terrain', contenu:`Sur le terrain :<br><ul><li>délimiter une <strong>zone d'étude</strong>,</li><li>mesurer les conditions physiques (thermomètre, luxmètre),</li><li>noter les êtres vivants observés (sans les détruire),</li><li>reporter les résultats dans un <strong>tableau</strong>.</li></ul>` }
        ]
      },
      {
        titre: 'Répartition des êtres vivants',
        cartes: [
          { type:'prop', label:'PROP', titre:'Répartition selon les conditions', contenu:`La <strong>répartition</strong> des êtres vivants dépend des conditions du milieu. Chaque espèce a des <strong>exigences</strong> : certaines préfèrent l'ombre et l'humidité, d'autres la lumière et la sécheresse.` },
          { type:'ex', label:'EX', titre:'Le cloporte et l\'humidité', contenu:`Dans une boîte mi-sèche mi-humide, on place des cloportes. Au bout de quelques minutes, ils se rassemblent du côté <strong>humide</strong>.<br>Conclusion : le cloporte est un animal qui recherche l'<strong>humidité</strong> ; cela explique qu'on le trouve sous les pierres et les feuilles mortes.` }
        ]
      },
      {
        titre: 'Variations au cours des saisons',
        cartes: [
          { type:'prop', label:'PROP', titre:'Le peuplement change avec les saisons', contenu:`Le peuplement d'un milieu <strong>varie au cours de l'année</strong>. Quand les conditions deviennent défavorables (froid de l'hiver), les êtres vivants adoptent des comportements de survie.` },
          { type:'def', label:'DEF', titre:'Formes de résistance et migrations', contenu:`Pour passer la mauvaise saison, les êtres vivants peuvent :<br><ul><li><strong>migrer</strong> (oiseaux qui partent au sud),</li><li><strong>hiberner</strong> (la marmotte ralentit son activité),</li><li>produire des <strong>formes de résistance</strong> : graines chez les plantes, œufs chez les insectes, bourgeons chez les arbres.</li></ul>` },
          { type:'ex', label:'EX', titre:'L\'arbre à feuilles caduques', contenu:`Au printemps les <strong>bourgeons</strong> s'ouvrent et les feuilles apparaissent ; en automne les feuilles tombent.<br>L'arbre passe l'hiver sous forme de bourgeons : c'est sa <strong>forme de résistance</strong> au froid.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-nutrition',
    matiere: 'svt',
    titre: 'Les besoins des êtres vivants : la nutrition',
    ordre: 4,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les besoins des végétaux',
        cartes: [
          { type:'def', label:'DEF', titre:'Producteurs primaires', contenu:`Les <strong>végétaux verts</strong> fabriquent eux-mêmes leur matière organique : ce sont des <strong>producteurs</strong>. Ils n'ont pas besoin de manger d'autres êtres vivants.` },
          { type:'prop', label:'PROP', titre:'Ce dont une plante verte a besoin', contenu:`Pour produire sa matière, une plante verte a besoin de :<br><ul><li><strong>lumière</strong>,</li><li><strong>eau</strong> et <strong>sels minéraux</strong> (prélevés par les racines),</li><li><strong>dioxyde de carbone</strong> de l'air.</li></ul>Elle utilise sa <strong>matière minérale</strong> pour fabriquer de la <strong>matière organique</strong>.` },
          { type:'ex', label:'EX', titre:'Expérience sur le besoin de lumière', contenu:`On cultive deux plants de blé identiques : l'un à la lumière, l'autre dans le noir.<br>À la lumière, la plante verdit et grandit ; dans le noir, elle jaunit et ne grandit plus.<br>Conclusion : la plante verte a <strong>besoin de lumière</strong> pour produire sa matière.` }
        ]
      },
      {
        titre: 'Les besoins des animaux',
        cartes: [
          { type:'def', label:'DEF', titre:'Régimes alimentaires', contenu:`Selon ce qu'ils mangent, les animaux sont :<br><ul><li><strong>herbivores</strong> (végétaux),</li><li><strong>carnivores</strong> (autres animaux),</li><li><strong>omnivores</strong> (les deux).</li></ul>Tous les animaux sont des <strong>consommateurs</strong> : ils doivent manger d'autres êtres vivants.` },
          { type:'prop', label:'PROP', titre:'Besoins d\'un animal', contenu:`Un animal a besoin de <strong>nourriture</strong> (matière organique), d'<strong>eau</strong> et de <strong>dioxygène</strong> (respiration). La nourriture lui fournit la matière et l'énergie pour vivre, grandir et bouger.` }
        ]
      },
      {
        titre: 'Relations alimentaires',
        cartes: [
          { type:'def', label:'DEF', titre:'Chaîne alimentaire', contenu:`Une <strong>chaîne alimentaire</strong> représente « qui mange qui ». La <strong>flèche</strong> signifie « <strong>est mangé par</strong> » et part de l'être mangé vers celui qui mange.` },
          { type:'ex', label:'EX', titre:'Construire une chaîne alimentaire', contenu:`Le blé est mangé par le criquet, lui-même mangé par la grenouille, elle-même mangée par la couleuvre :<br>$$\\text{blé} \\rightarrow \\text{criquet} \\rightarrow \\text{grenouille} \\rightarrow \\text{couleuvre}$$Le producteur (blé) est toujours au <strong>début</strong> de la chaîne.` },
          { type:'def', label:'DEF', titre:'Décomposeurs', contenu:`Les <strong>décomposeurs</strong> (champignons, bactéries, vers de terre) transforment les déchets et la matière organique morte en <strong>matière minérale</strong>. Cette matière minérale est de nouveau utilisée par les plantes : c'est un <strong>recyclage</strong> de la matière.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-matiere',
    matiere: 'svt',
    titre: 'La matière : états et propriétés',
    ordre: 5,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Les trois états de la matière',
        cartes: [
          { type:'def', label:'DEF', titre:'Solide, liquide, gaz', contenu:`La matière existe sous trois <strong>états physiques</strong> :<br><ul><li><strong>solide</strong> : forme propre, ne s'écoule pas (glace, bois) ;</li><li><strong>liquide</strong> : pas de forme propre, prend la forme du récipient, surface horizontale (eau, huile) ;</li><li><strong>gaz</strong> : occupe tout l'espace disponible, sans forme propre (air, vapeur d'eau).</li></ul>` },
          { type:'prop', label:'PROP', titre:'Propriétés d\'un liquide', contenu:`Un liquide :<br><ul><li>n'a pas de forme propre : il prend la forme de son récipient,</li><li>a une <strong>surface libre horizontale</strong> au repos,</li><li>peut s'écouler et se verser.</li></ul>` },
          { type:'meth', label:'METH', titre:'Identifier l\'état d\'une matière', contenu:`Pour reconnaître un état :<br><ul><li>la matière a-t-elle une <strong>forme propre</strong> ? Si oui → solide.</li><li>sinon, a-t-elle une <strong>surface libre</strong> ? Si oui → liquide.</li><li>sinon elle occupe tout l'espace → gaz.</li></ul>` }
        ]
      },
      {
        titre: 'Les changements d\'état',
        cartes: [
          { type:'def', label:'DEF', titre:'Vocabulaire des changements d\'état', contenu:`<ul><li><strong>Fusion</strong> : solide → liquide (la glace fond).</li><li><strong>Solidification</strong> : liquide → solide.</li><li><strong>Vaporisation</strong> : liquide → gaz (évaporation, ébullition).</li><li><strong>Condensation (liquéfaction)</strong> : gaz → liquide.</li></ul>` },
          { type:'prop', label:'PROP', titre:'Changements d\'état de l\'eau', contenu:`Sous la pression habituelle, l'eau :<br><ul><li>fond et se solidifie à <strong>0&deg;C</strong>,</li><li>bout à <strong>100&deg;C</strong>.</li></ul>Pendant un changement d'état, la <strong>température reste constante</strong> (palier).` },
          { type:'ex', label:'EX', titre:'Lecture d\'un palier de fusion', contenu:`On chauffe de la glace et on relève la température. La courbe monte jusqu'à $0\\,&deg;\\text{C}$, puis reste constante tant que la glace fond, puis remonte.<br>Le <strong>palier à $0\\,&deg;\\text{C}$</strong> correspond à la <strong>fusion</strong> : solide et liquide coexistent.` }
        ]
      },
      {
        titre: 'Masse, volume et conservation',
        cartes: [
          { type:'def', label:'DEF', titre:'Masse et volume', contenu:`La <strong>masse</strong> (en gramme g ou kilogramme kg) se mesure avec une <strong>balance</strong>. Le <strong>volume</strong> (en litre L ou millilitre mL, ou en $\\text{cm}^3$) se mesure avec une <strong>éprouvette graduée</strong>.` },
          { type:'prop', label:'PROP', titre:'Conservation de la masse', contenu:`Lors d'un <strong>changement d'état</strong>, la <strong>masse se conserve</strong> : elle ne change pas. En revanche, le <strong>volume change</strong> (l'eau qui gèle augmente de volume).` },
          { type:'ex', label:'EX', titre:'Masse conservée lors de la fusion', contenu:`On place $50\\ \\text{g}$ de glace dans un récipient fermé. Après fusion complète, on pèse de nouveau : la balance indique toujours $50\\ \\text{g}$.<br>Conclusion : la <strong>masse est conservée</strong> au cours de la fusion.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-melanges',
    matiere: 'svt',
    titre: 'Mélanges et l\'eau',
    ordre: 6,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Reconnaître les mélanges',
        cartes: [
          { type:'def', label:'DEF', titre:'Corps pur et mélange', contenu:`Un <strong>corps pur</strong> est constitué d'une seule sorte de matière (eau distillée). Un <strong>mélange</strong> contient au moins <strong>deux constituants</strong> différents (eau salée, jus de fruit).` },
          { type:'def', label:'DEF', titre:'Mélange homogène ou hétérogène', contenu:`Un mélange est <strong>homogène</strong> si on ne distingue pas ses constituants à l'œil (eau sucrée, eau salée).<br>Il est <strong>hétérogène</strong> si on en distingue plusieurs (eau + sable, eau + huile, jus avec pulpe).` },
          { type:'meth', label:'METH', titre:'Classer un mélange', contenu:`Pour savoir si un mélange est homogène ou hétérogène :<br><ul><li>l'observer au repos,</li><li>si on voit <strong>plusieurs parties distinctes</strong> → hétérogène,</li><li>si l'ensemble semble <strong>uniforme</strong> → homogène.</li></ul>` }
        ]
      },
      {
        titre: 'Séparer les constituants',
        cartes: [
          { type:'meth', label:'METH', titre:'Techniques de séparation', contenu:`<ul><li><strong>Décantation</strong> : laisser reposer ; les particules lourdes tombent au fond.</li><li><strong>Filtration</strong> : faire passer dans un filtre ; le filtre retient les solides.</li><li><strong>Évaporation</strong> : chauffer ; l'eau part en vapeur et laisse le solide dissous.</li></ul>` },
          { type:'ex', label:'EX', titre:'Séparer l\'eau et le sel', contenu:`L'eau salée est un mélange <strong>homogène</strong> : la filtration ne sépare rien.<br>On chauffe l'eau salée : l'eau s'<strong>évapore</strong> et le <strong>sel reste</strong> au fond. La masse de sel récupérée prouve qu'il était bien dissous.` },
          { type:'def', label:'DEF', titre:'Soluble et insoluble', contenu:`Une substance est <strong>soluble</strong> dans l'eau si elle s'y dissout en formant un mélange homogène (sel, sucre). Elle est <strong>insoluble</strong> si elle ne se dissout pas (sable, huile).` }
        ]
      },
      {
        titre: 'L\'eau dans la nature',
        cartes: [
          { type:'def', label:'DEF', titre:'Eau pure et eau potable', contenu:`L'<strong>eau pure</strong> ne contient que de l'eau. L'eau du robinet n'est pas pure : c'est un mélange contenant des <strong>sels minéraux</strong> dissous, mais elle est <strong>potable</strong> (sans danger à boire).` },
          { type:'prop', label:'PROP', titre:'Le cycle de l\'eau', contenu:`L'eau circule en permanence : elle s'<strong>évapore</strong> des océans, forme des <strong>nuages</strong> (condensation), retombe en <strong>pluie</strong> (précipitations), <strong>ruisselle</strong> et rejoint les rivières puis la mer. C'est le <strong>cycle de l'eau</strong>.` },
          { type:'meth', label:'METH', titre:'Rendre une eau limpide', contenu:`Pour rendre une eau boueuse limpide, on enchaîne :<br>$$\\text{décantation} \\rightarrow \\text{filtration}$$La décantation enlève les grosses particules, la filtration retient les fines. L'eau devient <strong>limpide</strong> mais pas forcément potable.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-energie',
    matiere: 'svt',
    titre: 'Les sources d\'énergie',
    ordre: 7,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Qu\'est-ce que l\'énergie',
        cartes: [
          { type:'def', label:'DEF', titre:'Énergie', contenu:`L'<strong>énergie</strong> est ce qui permet de produire des <strong>actions</strong> : faire bouger un objet, chauffer, éclairer, faire fonctionner un appareil. Sans énergie, rien ne fonctionne.` },
          { type:'def', label:'DEF', titre:'Sources d\'énergie', contenu:`Une <strong>source d'énergie</strong> fournit de l'énergie utilisable : le <strong>Soleil</strong>, le <strong>vent</strong>, l'<strong>eau</strong> en mouvement, les <strong>combustibles</strong> (bois, charbon, pétrole, gaz), les <strong>aliments</strong> (pour les êtres vivants).` },
          { type:'prop', label:'PROP', titre:'Le Soleil, source principale', contenu:`Le <strong>Soleil</strong> est la source d'énergie principale de la Terre : il fournit lumière et chaleur, permet la croissance des plantes et est à l'origine du vent et du cycle de l'eau.` }
        ]
      },
      {
        titre: 'Renouvelable ou non',
        cartes: [
          { type:'def', label:'DEF', titre:'Énergies renouvelables et non renouvelables', contenu:`Une énergie est <strong>renouvelable</strong> si sa source se reconstitue rapidement et ne s'épuise pas (Soleil, vent, eau).<br>Elle est <strong>non renouvelable</strong> si sa réserve est limitée et met des millions d'années à se former (pétrole, charbon, gaz : énergies <strong>fossiles</strong>).` },
          { type:'ex', label:'EX', titre:'Classer des sources d\'énergie', contenu:`<ul><li>Renouvelables : <strong>solaire</strong>, <strong>éolienne</strong> (vent), <strong>hydraulique</strong> (eau).</li><li>Non renouvelables : <strong>pétrole</strong>, <strong>charbon</strong>, <strong>gaz naturel</strong>.</li></ul>Privilégier les énergies renouvelables réduit la pollution et préserve les réserves.` }
        ]
      },
      {
        titre: 'Utiliser et convertir l\'énergie',
        cartes: [
          { type:'prop', label:'PROP', titre:'Conversion de l\'énergie', contenu:`L'énergie peut être <strong>transformée</strong> d'une forme à une autre. Une lampe convertit l'énergie électrique en <strong>lumière</strong> et en <strong>chaleur</strong> ; une éolienne convertit l'énergie du <strong>vent</strong> en électricité.` },
          { type:'ex', label:'EX', titre:'Chaîne d\'énergie d\'une éolienne', contenu:`Le vent fait tourner les pales, qui entraînent un générateur produisant de l'électricité :<br>$$\\text{vent} \\rightarrow \\text{mouvement des pales} \\rightarrow \\text{électricité}$$La source (vent) est <strong>renouvelable</strong>.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-systeme-solaire',
    matiere: 'svt',
    titre: 'Le système solaire et les saisons',
    ordre: 8,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'Le système solaire',
        cartes: [
          { type:'def', label:'DEF', titre:'Système solaire', contenu:`Le <strong>système solaire</strong> est constitué d'une étoile, le <strong>Soleil</strong>, autour de laquelle tournent <strong>8 planètes</strong>, des satellites (comme la Lune) et de petits corps (astéroïdes, comètes).` },
          { type:'def', label:'DEF', titre:'Étoile, planète, satellite', contenu:`<ul><li>Une <strong>étoile</strong> produit sa propre lumière (le Soleil).</li><li>Une <strong>planète</strong> tourne autour d'une étoile et ne produit pas de lumière (la Terre).</li><li>Un <strong>satellite</strong> tourne autour d'une planète (la Lune).</li></ul>` },
          { type:'prop', label:'PROP', titre:'Les huit planètes', contenu:`Dans l'ordre depuis le Soleil : <strong>Mercure, Vénus, Terre, Mars</strong> (planètes rocheuses), puis <strong>Jupiter, Saturne, Uranus, Neptune</strong> (planètes gazeuses). La Terre est la <strong>3<sup>e</sup> planète</strong>.` }
        ]
      },
      {
        titre: 'Les mouvements de la Terre',
        cartes: [
          { type:'def', label:'DEF', titre:'Rotation et révolution', contenu:`La Terre effectue deux mouvements :<br><ul><li>la <strong>rotation</strong> sur elle-même en <strong>24 h</strong> autour de l'axe des pôles ;</li><li>la <strong>révolution</strong> autour du Soleil en <strong>1 an</strong> (365 jours).</li></ul>` },
          { type:'prop', label:'PROP', titre:'L\'alternance jour / nuit', contenu:`La <strong>rotation</strong> de la Terre explique l'alternance <strong>jour / nuit</strong> : la face tournée vers le Soleil est éclairée (<strong>jour</strong>), la face opposée est dans l'ombre (<strong>nuit</strong>).` },
          { type:'ex', label:'EX', titre:'Modéliser le jour et la nuit', contenu:`Avec une lampe (le Soleil) et un globe (la Terre) qu'on fait tourner sur lui-même, on observe qu'un même point passe successivement de la zone éclairée à la zone d'ombre.<br>Conclusion : la <strong>rotation</strong> de la Terre produit le jour et la nuit.` }
        ]
      },
      {
        titre: 'Les saisons',
        cartes: [
          { type:'prop', label:'PROP', titre:'Origine des saisons', contenu:`Les <strong>saisons</strong> sont dues à l'<strong>inclinaison de l'axe</strong> de la Terre combinée à sa révolution autour du Soleil. Selon la période de l'année, un hémisphère reçoit les rayons du Soleil plus ou moins <strong>directement</strong>.` },
          { type:'def', label:'DEF', titre:'Été et hiver', contenu:`En <strong>été</strong>, l'hémisphère est incliné vers le Soleil : les rayons sont plus <strong>directs</strong>, les <strong>journées plus longues</strong>, il fait plus chaud.<br>En <strong>hiver</strong>, l'hémisphère est incliné à l'opposé : rayons <strong>obliques</strong>, journées courtes, il fait plus froid.` },
          { type:'ex', label:'EX', titre:'Durée du jour selon la saison', contenu:`Dans l'hémisphère nord, au <strong>21 juin</strong> (solstice d'été) le jour est le plus <strong>long</strong> de l'année ; au <strong>21 décembre</strong> (solstice d'hiver) il est le plus <strong>court</strong>.<br>Cette différence de durée d'ensoleillement explique l'écart de température entre les saisons.` }
        ]
      }
    ]
  },
  {
    id: 'svt-6e-objets-techniques',
    matiere: 'svt',
    titre: 'Les objets techniques et les matériaux',
    ordre: 9,
    filiere: '6eme',
    enrich: false,
    sections: [
      {
        titre: 'L\'objet technique et sa fonction',
        cartes: [
          { type:'def', label:'DEF', titre:'Objet technique', contenu:`Un <strong>objet technique</strong> est un objet <strong>fabriqué par l'Homme</strong> pour répondre à un besoin (un vélo, un stylo, un téléphone). Il s'oppose aux objets <strong>naturels</strong> (caillou, arbre).` },
          { type:'def', label:'DEF', titre:'Fonction d\'usage', contenu:`La <strong>fonction d'usage</strong> d'un objet technique est le <strong>besoin</strong> auquel il répond, ce à quoi il <strong>sert</strong>.<br>Exemple : la fonction d'usage d'un parapluie est de <strong>protéger de la pluie</strong>.` },
          { type:'meth', label:'METH', titre:'Analyser un objet technique', contenu:`Pour analyser un objet, on se demande :<br><ul><li>à quoi <strong>sert</strong>-il ? (fonction d'usage)</li><li>de quelles <strong>parties</strong> est-il composé ? (éléments)</li><li>en quels <strong>matériaux</strong> est-il fabriqué ?</li></ul>` }
        ]
      },
      {
        titre: 'Les matériaux',
        cartes: [
          { type:'def', label:'DEF', titre:'Familles de matériaux', contenu:`Les <strong>matériaux</strong> se classent en grandes familles :<br><ul><li><strong>métaux</strong> (fer, aluminium),</li><li><strong>plastiques</strong>,</li><li><strong>matières organiques</strong> (bois, cuir, papier),</li><li><strong>matériaux minéraux</strong> (verre, céramique, béton).</li></ul>` },
          { type:'prop', label:'PROP', titre:'Choisir un matériau selon ses propriétés', contenu:`On choisit un matériau selon ses <strong>propriétés</strong> : solidité, légèreté, souplesse, résistance à l'eau, transparence, conduction de l'électricité ou de la chaleur.` },
          { type:'ex', label:'EX', titre:'Matériau adapté à une fonction', contenu:`Pour une fenêtre, on choisit le <strong>verre</strong> car il est <strong>transparent</strong> et laisse passer la lumière.<br>Pour un câble électrique, on utilise le <strong>cuivre</strong> (métal) car il <strong>conduit l'électricité</strong>, entouré de <strong>plastique</strong> isolant.` }
        ]
      },
      {
        titre: 'Matériaux et environnement',
        cartes: [
          { type:'def', label:'DEF', titre:'Recyclage', contenu:`Le <strong>recyclage</strong> consiste à récupérer un matériau usagé pour fabriquer un nouvel objet. Trier les déchets (verre, plastique, papier, métal) permet de <strong>réutiliser la matière</strong> et d'économiser les ressources.` },
          { type:'prop', label:'PROP', titre:'Impact environnemental', contenu:`Fabriquer un objet technique consomme des <strong>matières premières</strong> et de l'<strong>énergie</strong> et produit des déchets. Réduire, réutiliser et recycler limite l'<strong>impact sur l'environnement</strong>.` }
        ]
      }
    ]
  }
]
