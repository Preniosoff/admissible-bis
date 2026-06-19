// Contenu cours — Seconde générale — SVT (Sciences de la Vie et de la Terre)
// Programme officiel réforme 2019
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// THÈME 1 — LA TERRE, LA VIE ET L'ORGANISATION DU VIVANT
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-2nde-cellule',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'La cellule, unité du vivant',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'La théorie cellulaire',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Cellule',
          contenu: `La <strong>cellule</strong> est l'unité structurale et fonctionnelle de tous les êtres vivants. C'est la plus petite entité capable de vivre de façon autonome (assurer les fonctions du vivant : nutrition, croissance, reproduction).<br>Sa taille est de l'ordre du <strong>micromètre</strong> ($1\\,\\mu\\text{m} = 10^{-6}\\,\\text{m}$) ; elle n'est observable qu'au <strong>microscope</strong>.`
        },
        {
          type: 'th', label: 'THM', titre: 'Théorie cellulaire',
          contenu: `Trois énoncés fondateurs (Schleiden, Schwann, Virchow) :<br>1. Tout être vivant est constitué d'une ou de plusieurs cellules.<br>2. La cellule est la plus petite unité du vivant.<br>3. Toute cellule provient d'une autre cellule (par division).<br>La cellule constitue donc le <strong>point commun à tous les êtres vivants</strong>, témoin d'une <strong>parenté</strong> universelle.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Unicellulaire et pluricellulaire',
          contenu: `Un être <strong>unicellulaire</strong> est constitué d'une seule cellule (bactérie, paramécie, levure).<br>Un être <strong>pluricellulaire</strong> est constitué de nombreuses cellules organisées (plante, animal). Chez les pluricellulaires, les cellules se <strong>spécialisent</strong> et se regroupent en tissus puis en organes.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Procaryote et eucaryote',
          contenu: `On distingue deux grands types de cellules :<br>— <strong>Procaryote</strong> : sans noyau, l'ADN est libre dans le cytoplasme (bactéries, archées).<br>— <strong>Eucaryote</strong> : avec un <strong>noyau</strong> délimité par une enveloppe et contenant l'ADN ; présence d'organites (animaux, végétaux, champignons, protistes).`
        }
      ]
    },
    {
      titre: 'L\'organisation de la cellule eucaryote',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Composants communs à toute cellule',
          contenu: `Toute cellule possède :<br>— une <strong>membrane plasmique</strong> qui la délimite et contrôle les échanges,<br>— un <strong>cytoplasme</strong> (milieu interne gélatineux où se déroulent les réactions chimiques),<br>— du <strong>matériel génétique</strong> (ADN).<br>La cellule eucaryote possède en plus un <strong>noyau</strong> et des <strong>organites</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les principaux organites',
          contenu: `<ul><li><strong>Noyau</strong> : contient l'ADN, centre de commande.</li><li><strong>Mitochondries</strong> : siège de la respiration cellulaire (production d'énergie).</li><li><strong>Chloroplastes</strong> (cellules végétales chlorophylliennes) : siège de la photosynthèse.</li><li><strong>Vacuole</strong> (cellule végétale) : réserve d'eau, maintien de la forme.</li></ul>`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Cellule animale vs cellule végétale',
          contenu: `<strong>Cellule végétale</strong> = membrane + <strong>paroi</strong> (rigide, en cellulose) + grande <strong>vacuole</strong> + parfois <strong>chloroplastes</strong>.<br><strong>Cellule animale</strong> : pas de paroi, pas de chloroplaste, petites vacuoles éventuelles.<br>Les deux partagent : membrane, cytoplasme, noyau, mitochondries.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Calculer une taille au microscope',
          contenu: `La <strong>taille réelle</strong> se déduit du grossissement :<br>$$\\text{taille réelle} = \\dfrac{\\text{taille mesurée sur l'image}}{\\text{grossissement}}$$<br><strong>Méthode :</strong> mesurer l'objet sur la photo (en mm), diviser par le grossissement indiqué, convertir dans l'unité adaptée ($\\mu\\text{m}$ pour une cellule).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Application : taille d\'une cellule',
          contenu: `Une cellule mesure $30\\,\\text{mm}$ sur une photo prise à un grossissement $\\times 400$.<br><strong>Taille réelle</strong> $= \\dfrac{30}{400} = 0{,}075\\,\\text{mm} = 75\\,\\mu\\text{m}$.<br>C'est une valeur cohérente avec une cellule eucaryote (10 à 100 $\\mu\\text{m}$).`
        }
      ]
    },
    {
      titre: 'L\'échelle des dimensions',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Du vivant à la molécule',
          contenu: `Échelle décroissante du vivant :<br><strong>organisme &gt; organe &gt; tissu &gt; cellule &gt; organite &gt; molécule &gt; atome</strong>.<br>Ordres de grandeur : cellule $\\approx 10\\,\\mu\\text{m}$, mitochondrie $\\approx 1\\,\\mu\\text{m}$, molécule (ADN épaisseur) $\\approx 2\\,\\text{nm}$ ($1\\,\\text{nm} = 10^{-9}\\,\\text{m}$).`
        },
        {
          type: 'form', label: 'FORM', titre: 'Conversions d\'unités de longueur',
          contenu: `$$1\\,\\text{m} = 10^{3}\\,\\text{mm} = 10^{6}\\,\\mu\\text{m} = 10^{9}\\,\\text{nm}$$<br>Donc $1\\,\\mu\\text{m} = 10^{-6}\\,\\text{m}$ et $1\\,\\text{nm} = 10^{-9}\\,\\text{m} = 10^{-3}\\,\\mu\\text{m}$.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparer deux dimensions',
          contenu: `Combien de fois une cellule de $10\\,\\mu\\text{m}$ est-elle plus grande qu'une molécule d'ADN de $2\\,\\text{nm}$ d'épaisseur ?<br>$10\\,\\mu\\text{m} = 10\\,000\\,\\text{nm}$, donc le rapport vaut $\\dfrac{10\\,000}{2} = 5\\,000$. La cellule est $5\\,000$ fois plus grande.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-metabolisme',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Le métabolisme des cellules',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Définir le métabolisme',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Métabolisme',
          contenu: `Le <strong>métabolisme</strong> est l'ensemble des <strong>réactions chimiques</strong> qui se déroulent dans une cellule. Il assure la transformation de la matière et de l'énergie nécessaires à la vie de la cellule.<br>On distingue les réactions qui <strong>produisent</strong> des molécules et celles qui les <strong>dégradent</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Autotrophe et hétérotrophe',
          contenu: `— Un organisme <strong>autotrophe</strong> produit sa propre matière organique à partir de matière minérale ($\\text{CO}_2$, eau, sels minéraux) et d'une source d'énergie (lumière) : ex. les végétaux chlorophylliens.<br>— Un organisme <strong>hétérotrophe</strong> doit prélever de la matière organique déjà formée dans son environnement : ex. les animaux, les champignons.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Échanges entre cellule et milieu',
          contenu: `Le métabolisme dépend des échanges avec le milieu : la cellule <strong>prélève</strong> des nutriments et du dioxygène (ou de la lumière) et <strong>rejette</strong> des déchets ($\\text{CO}_2$, déchets azotés). La nature du métabolisme se révèle en mesurant ces échanges (consommation/production de gaz).`
        }
      ]
    },
    {
      titre: 'La photosynthèse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Photosynthèse',
          contenu: `La <strong>photosynthèse</strong> est la production de matière organique (glucose) à partir de matière minérale, réalisée par les cellules <strong>chlorophylliennes</strong> en présence de <strong>lumière</strong>. Elle se déroule dans les <strong>chloroplastes</strong>, grâce au pigment vert <strong>chlorophylle</strong>.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Bilan de la photosynthèse',
          contenu: `$$6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} \\xrightarrow{\\text{lumière}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2$$<br>La cellule <strong>consomme</strong> du dioxyde de carbone et de l'eau, et <strong>produit</strong> du glucose et du dioxygène. L'énergie lumineuse est nécessaire.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Mettre en évidence la photosynthèse',
          contenu: `On place une plante aquatique (élodée) à la lumière : on observe un <strong>dégagement de bulles</strong> de gaz. Un test montre que ce gaz <strong>ranime une flamme</strong> : c'est du dioxygène. À l'obscurité, le dégagement cesse. <strong>Conclusion :</strong> la photosynthèse produit du $\\text{O}_2$ et nécessite la lumière.`
        }
      ]
    },
    {
      titre: 'Respiration et fermentation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Respiration cellulaire',
          contenu: `La <strong>respiration</strong> est la dégradation complète de molécules organiques (glucose) en présence de <strong>dioxygène</strong>, libérant de l'énergie utilisable par la cellule. Elle se déroule dans les <strong>mitochondries</strong>.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Bilan de la respiration',
          contenu: `$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2 \\rightarrow 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + \\text{énergie}$$<br>La cellule consomme du glucose et du dioxygène, rejette du dioxyde de carbone et de l'eau. C'est, en termes de bilan, l'inverse de la photosynthèse.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Fermentation',
          contenu: `La <strong>fermentation</strong> est une dégradation <strong>partielle</strong> du glucose réalisée <strong>sans dioxygène</strong> (anaérobie). Elle libère moins d'énergie que la respiration et produit des déchets caractéristiques : <strong>éthanol</strong> ($\\text{CO}_2$ + alcool, fermentation alcoolique de la levure) ou <strong>acide lactique</strong> (fermentation lactique).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Fermentation alcoolique des levures',
          contenu: `Des levures dans une solution sucrée, sans dioxygène, dégagent un gaz qui <strong>trouble l'eau de chaux</strong> ($\\text{CO}_2$) ; on détecte aussi de l'<strong>éthanol</strong>.<br>$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\,\\text{C}_2\\text{H}_5\\text{OH} + 2\\,\\text{CO}_2 + \\text{énergie}$$<br>Application : panification, brasserie, vinification.`
        }
      ]
    },
    {
      titre: 'Le contrôle génétique du métabolisme',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Le rôle des enzymes',
          contenu: `Chaque réaction du métabolisme est catalysée par une <strong>enzyme</strong> spécifique (une protéine qui accélère la réaction). La présence ou l'absence d'une enzyme détermine quelles réactions peuvent avoir lieu : le métabolisme dépend donc des <strong>protéines</strong> de la cellule.`
        },
        {
          type: 'th', label: 'THM', titre: 'Le métabolisme est contrôlé par les gènes',
          contenu: `Les protéines (dont les enzymes) sont codées par les <strong>gènes</strong> portés par l'ADN. Le métabolisme d'une cellule est donc <strong>déterminé par son patrimoine génétique</strong> et par les <strong>conditions du milieu</strong> (présence de nutriments, de lumière, de dioxygène).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Mutation et métabolisme',
          contenu: `Une souche mutée de levure ne possède plus l'enzyme permettant d'utiliser le galactose : elle ne peut plus se développer sur ce sucre. <strong>Conclusion :</strong> la perte d'un gène (donc d'une enzyme) modifie le métabolisme, prouvant le contrôle génétique des voies métaboliques.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-adn',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'L\'ADN, support de l\'information génétique',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'La molécule d\'ADN',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'ADN',
          contenu: `L'<strong>ADN</strong> (acide désoxyribonucléique) est la molécule qui porte l'<strong>information génétique</strong> de tous les êtres vivants. Chez les eucaryotes, il est localisé dans le <strong>noyau</strong> sous forme de <strong>chromosomes</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Nucléotide',
          contenu: `L'ADN est un polymère de <strong>nucléotides</strong>. Chaque nucléotide comporte une base azotée parmi quatre : <strong>A</strong> (adénine), <strong>T</strong> (thymine), <strong>C</strong> (cytosine), <strong>G</strong> (guanine). La <strong>séquence</strong> (ordre des bases) constitue l'information.`
        },
        {
          type: 'th', label: 'THM', titre: 'Structure en double hélice (Watson & Crick, 1953)',
          contenu: `L'ADN est formé de <strong>deux brins enroulés en double hélice</strong>. Les deux brins sont <strong>complémentaires</strong> : les bases s'apparient toujours selon la règle<br><strong>A — T</strong> et <strong>C — G</strong>.<br>Connaître la séquence d'un brin permet de déduire l'autre.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Déduire le brin complémentaire',
          contenu: `<strong>Méthode :</strong> remplacer chaque base par sa complémentaire (A↔T, C↔G).<br>Brin 1 : A T G C A G<br>Brin 2 : T A C G T C<br>(toujours orienter et conserver l'ordre de lecture).`
        }
      ]
    },
    {
      titre: 'L\'universalité et la variabilité de l\'ADN',
      cartes: [
        {
          type: 'th', label: 'THM', titre: 'Universalité de la molécule d\'ADN',
          contenu: `Tous les êtres vivants possèdent de l'ADN constitué des <strong>mêmes 4 nucléotides</strong>. Cette <strong>universalité</strong> est un argument fort en faveur d'une <strong>origine commune</strong> du vivant (parenté entre toutes les espèces).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Gène et allèle',
          contenu: `Un <strong>gène</strong> est une portion d'ADN (une séquence de nucléotides) qui contrôle un caractère héréditaire.<br>Un <strong>allèle</strong> est une <strong>version</strong> d'un gène : les allèles d'un même gène diffèrent par quelques nucléotides de leur séquence.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Mutation',
          contenu: `Une <strong>mutation</strong> est une <strong>modification de la séquence</strong> de l'ADN (substitution, ajout ou perte de nucléotides). Les mutations sont la source de nouveaux allèles et donc de la <strong>diversité génétique</strong>. Elles peuvent être spontanées ou provoquées par des agents <strong>mutagènes</strong> (UV, certaines substances chimiques).`
        },
        {
          type: 'th', label: 'THM', titre: 'L\'ADN détermine les caractères',
          contenu: `La séquence des nucléotides d'un gène détermine la <strong>protéine</strong> fabriquée, donc le <strong>caractère</strong> de l'individu. Une transgenèse (transfert d'un gène d'une espèce à une autre) entraîne l'apparition du caractère correspondant : preuve que l'ADN porte bien l'information codant les caractères.`
        }
      ]
    },
    {
      titre: 'Transgenèse et applications',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Transgenèse — OGM',
          contenu: `La <strong>transgenèse</strong> consiste à introduire un gène d'un organisme dans le génome d'un autre. L'organisme obtenu est un <strong>OGM</strong> (organisme génétiquement modifié). Elle est possible car le code génétique est <strong>universel</strong> : un gène est « lu » de la même façon dans toute cellule.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exemple : la bactérie productrice d\'insuline',
          contenu: `On introduit le gène humain de l'<strong>insuline</strong> dans une bactérie. Celle-ci, grâce à l'universalité du code, fabrique de l'insuline humaine, utilisée pour traiter le diabète. Cet exemple illustre concrètement l'universalité de l'information génétique.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-membrane',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'La membrane plasmique et les échanges',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Structure de la membrane',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Membrane plasmique',
          contenu: `La <strong>membrane plasmique</strong> est une fine pellicule (épaisseur $\\approx 7{,}5\\,\\text{nm}$) qui délimite la cellule, sépare le milieu intérieur du milieu extérieur et <strong>contrôle les échanges</strong>.`
        },
        {
          type: 'th', label: 'THM', titre: 'Modèle de la mosaïque fluide',
          contenu: `La membrane est constituée d'une <strong>double couche de phospholipides</strong> (bicouche lipidique) dans laquelle s'insèrent des <strong>protéines</strong>. Les protéines mobiles forment une « mosaïque » et la bicouche est « fluide » : c'est le <strong>modèle de la mosaïque fluide</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Le phospholipide : une molécule amphiphile',
          contenu: `Un phospholipide possède :<br>— une <strong>tête hydrophile</strong> (« aime l'eau »), tournée vers les milieux aqueux,<br>— deux <strong>queues hydrophobes</strong> (« fuient l'eau »), tournées vers l'intérieur de la bicouche.<br>Cette propriété explique l'organisation spontanée en bicouche dans l'eau.`
        }
      ]
    },
    {
      titre: 'Les échanges à travers la membrane',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Perméabilité sélective',
          contenu: `La membrane est <strong>perméable sélective</strong> : elle laisse passer certaines substances et en bloque d'autres. Elle contrôle ainsi la composition du cytoplasme et permet à la cellule de fonctionner.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les modes de passage',
          contenu: `<ul><li><strong>Diffusion simple</strong> : passage spontané de petites molécules (dioxygène, $\\text{CO}_2$, eau) à travers la bicouche, du milieu concentré vers le milieu moins concentré.</li><li><strong>Passage par protéines</strong> : molécules plus grosses ou ions passant par des protéines de transport spécifiques.</li></ul>`
        },
        {
          type: 'ex', label: 'EX', titre: 'Échanges nécessaires au métabolisme',
          contenu: `Pour respirer, une cellule fait entrer du dioxygène et du glucose et rejette du dioxyde de carbone. Tous ces échanges se font à travers la membrane plasmique. La <strong>surface d'échange</strong> et la perméabilité conditionnent donc l'activité métabolique.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Membrane et compartimentation',
          contenu: `La membrane plasmique délimite la cellule, mais des membranes semblables délimitent aussi les <strong>organites</strong> (noyau, mitochondrie, chloroplaste). Cette <strong>compartimentation</strong> permet d'isoler des réactions chimiques différentes dans des espaces distincts d'une même cellule.`
        }
      ]
    },
    {
      titre: 'Osmose : mouvements d\'eau et cellule',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Osmose',
          contenu: `L'<strong>osmose</strong> est le déplacement de l'<strong>eau</strong> à travers la membrane, du milieu le <strong>moins concentré</strong> en solutés (hypotonique) vers le milieu le <strong>plus concentré</strong> (hypertonique). L'eau « cherche » à équilibrer les concentrations de part et d'autre de la membrane.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Turgescence et plasmolyse',
          contenu: `Pour une cellule végétale :<br>— dans un milieu <strong>hypotonique</strong> (peu concentré), l'eau entre : la cellule est <strong>turgescente</strong> (gonflée, fermement plaquée contre sa paroi) ;<br>— dans un milieu <strong>hypertonique</strong> (très concentré), l'eau sort : la membrane se décolle de la paroi, c'est la <strong>plasmolyse</strong>.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Prévoir le sens du flux d\'eau',
          contenu: `<strong>Méthode :</strong> comparer les concentrations en solutés des deux milieux. L'eau va <strong>vers le milieu le plus concentré</strong> (pour le diluer).<br>Si la cellule est plus concentrée que l'extérieur → l'eau entre (gonflement). Si l'extérieur est plus concentré → l'eau sort (la cellule se rétracte).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Cellule d\'épiderme d\'oignon',
          contenu: `Une cellule d'épiderme d'oignon observée dans l'eau pure est <strong>turgescente</strong>. Plongée dans une solution salée concentrée, l'eau sort par osmose : le cytoplasme se rétracte et la membrane se décolle de la paroi (<strong>plasmolyse</strong>). En revenant dans l'eau pure, la cellule se regonfle. Cette expérience met en évidence la <strong>perméabilité de la membrane à l'eau</strong>.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// THÈME 1 (suite) — BIODIVERSITÉ ET ÉVOLUTION
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-2nde-biodiversite',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'La biodiversité et ses échelles',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'Les trois échelles de la biodiversité',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Biodiversité',
          contenu: `La <strong>biodiversité</strong> est la diversité du monde vivant. On la décrit à <strong>trois échelles</strong> :<br>— diversité des <strong>écosystèmes</strong>,<br>— diversité des <strong>espèces</strong>,<br>— diversité <strong>génétique</strong> (diversité des allèles au sein d'une espèce).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Espèce',
          contenu: `Une <strong>espèce</strong> regroupe les individus qui se ressemblent, peuvent se <strong>reproduire entre eux</strong> et donner une descendance elle-même <strong>fertile</strong>. La diversité spécifique est le nombre et la variété des espèces présentes.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Écosystème',
          contenu: `Un <strong>écosystème</strong> est l'ensemble formé par une communauté d'êtres vivants (<strong>biocénose</strong>) et son milieu de vie physico-chimique (<strong>biotope</strong>), en interactions. La diversité des écosystèmes constitue l'échelle la plus large de la biodiversité.`
        }
      ]
    },
    {
      titre: 'Mesurer et estimer la biodiversité',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Diversité spécifique',
          contenu: `La <strong>diversité spécifique</strong> dépend du <strong>nombre d'espèces</strong> (richesse) et de l'<strong>abondance relative</strong> de chaque espèce. Deux milieux peuvent avoir le même nombre d'espèces mais des répartitions différentes.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Estimer une population par échantillonnage',
          contenu: `On ne peut pas compter tous les individus : on prélève un <strong>échantillon représentatif</strong> et on extrapole.<br><strong>Méthode capture-marquage-recapture :</strong> on capture $M$ individus, on les marque et relâche ; lors d'une seconde capture de $n$ individus, $m$ portent la marque. L'effectif total $N$ est estimé par :<br>$$N = \\dfrac{M \\times n}{m}$$`
        },
        {
          type: 'ex', label: 'EX', titre: 'Application : estimation d\'un effectif',
          contenu: `On capture et marque $M = 40$ poissons. Lors d'une seconde pêche de $n = 50$ poissons, on en retrouve $m = 8$ marqués.<br>$$N = \\dfrac{40 \\times 50}{8} = \\dfrac{2000}{8} = 250$$<br>L'effectif estimé du lac est d'environ <strong>250 poissons</strong>.`
        }
      ]
    },
    {
      titre: 'La biodiversité évolue dans le temps',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Une biodiversité actuelle, résultat d\'une longue histoire',
          contenu: `La biodiversité <strong>actuelle</strong> n'est qu'une <strong>étape</strong> de l'histoire du vivant. Elle s'est constituée et modifiée depuis l'origine de la vie (≈ 3,8 milliards d'années) au gré des apparitions et disparitions d'espèces.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Crise biologique',
          contenu: `Une <strong>crise biologique</strong> est une <strong>extinction massive</strong> d'espèces sur une courte période géologique, suivie d'une diversification. On en compte cinq majeures, dont la disparition des dinosaures non aviens à la limite Crétacé-Paléogène (≈ 66 Ma).`
        },
        {
          type: 'ex', label: 'EX', titre: 'La crise Crétacé-Paléogène',
          contenu: `Il y a environ 66 millions d'années, la chute d'une météorite (cratère de Chicxulub) et un volcanisme intense ont provoqué l'extinction d'environ 75 % des espèces, dont les dinosaures non aviens. Cette crise a permis la <strong>diversification des mammifères</strong>.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-evolution',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Les mécanismes de l\'évolution',
  ordre: 6,
  enrich: false,
  sections: [
    {
      titre: 'La diversité génétique au sein des populations',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Population',
          contenu: `Une <strong>population</strong> est l'ensemble des individus d'une même espèce vivant dans un même lieu et pouvant se reproduire entre eux. Les individus d'une population présentent une <strong>diversité génétique</strong> : ils portent des allèles différents.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Fréquence allélique',
          contenu: `La <strong>fréquence d'un allèle</strong> est la proportion de cet allèle parmi tous les allèles du même gène dans la population.<br>$$f(\\text{allèle}) = \\dfrac{\\text{nombre de copies de l'allèle}}{\\text{nombre total d'allèles du gène}}$$`
        },
        {
          type: 'th', label: 'THM', titre: 'L\'évolution : variation des fréquences alléliques',
          contenu: `Une population <strong>évolue</strong> lorsque les <strong>fréquences de ses allèles changent</strong> d'une génération à l'autre. L'évolution se mesure donc à l'échelle des populations, pas des individus.`
        }
      ]
    },
    {
      titre: 'La sélection naturelle',
      cartes: [
        {
          type: 'th', label: 'THM', titre: 'La sélection naturelle (Darwin)',
          contenu: `Dans un milieu donné, les individus dont les caractères héréditaires sont les plus <strong>avantageux</strong> survivent et se reproduisent davantage. Leurs allèles deviennent plus fréquents au fil des générations : c'est la <strong>sélection naturelle</strong>. Elle est <strong>orientée</strong> par les conditions du milieu.`
        },
        {
          type: 'ex', label: 'EX', titre: 'La phalène du bouleau',
          contenu: `Avant l'industrialisation, la forme <strong>claire</strong> du papillon (phalène) domine, camouflée sur les troncs clairs. La pollution noircit les troncs : la forme <strong>sombre</strong> devient mieux camouflée, échappe aux prédateurs, et sa fréquence augmente. C'est un cas observé de sélection naturelle.`
        }
      ]
    },
    {
      titre: 'La dérive génétique',
      cartes: [
        {
          type: 'th', label: 'THM', titre: 'La dérive génétique',
          contenu: `La <strong>dérive génétique</strong> est la modification <strong>aléatoire</strong> des fréquences alléliques d'une génération à l'autre, due au <strong>hasard</strong> de la transmission des allèles. Son effet est d'autant plus <strong>important que la population est petite</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Sélection naturelle vs dérive génétique',
          contenu: `— <strong>Sélection naturelle</strong> : non aléatoire, orientée par l'avantage des caractères dans le milieu.<br>— <strong>Dérive génétique</strong> : aléatoire, indépendante de l'avantage des allèles, dominante dans les petites populations.<br>Les deux modifient les fréquences alléliques et font donc évoluer les populations.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Modélisation de la dérive',
          contenu: `Dans un sac contenant 50 % de billes rouges et 50 % de billes bleues, on tire au hasard un petit nombre de billes pour former la « génération suivante ». Par hasard, la proportion peut passer à 60/40, puis 70/30… Une simulation montre qu'un allèle peut disparaître par pur <strong>hasard</strong>.`
        }
      ]
    },
    {
      titre: 'La spéciation et la dérive de la communication',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Spéciation',
          contenu: `La <strong>spéciation</strong> est l'apparition de nouvelles espèces. Lorsque deux populations d'une même espèce sont <strong>isolées</strong> (géographiquement par exemple), elles évoluent indépendamment ; si l'interfécondité disparaît, deux espèces distinctes sont formées.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Isolement reproducteur',
          contenu: `Deux populations d'oiseaux séparées par une barrière (montagne, bras de mer) accumulent des différences (chant, comportement, morphologie). Quand elles se rencontrent à nouveau, elles ne se reproduisent plus entre elles : ce sont devenues deux <strong>espèces</strong> distinctes.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-communication-nerveuse',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'La communication nerveuse',
  ordre: 7,
  enrich: false,
  sections: [
    {
      titre: 'Le réflexe et le circuit nerveux',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Mouvement réflexe',
          contenu: `Un <strong>mouvement réflexe</strong> est une réponse motrice <strong>rapide, involontaire et stéréotypée</strong> à une stimulation. Exemple : le retrait de la main lors d'une piqûre. Il met en jeu un circuit nerveux précis.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'arc réflexe',
          contenu: `Le trajet du message dans un réflexe :<br><strong>récepteur sensoriel → nerf sensitif → centre nerveux (moelle épinière) → nerf moteur → effecteur (muscle)</strong>.<br>Le message ne « remonte » pas forcément au cerveau, ce qui explique la rapidité du réflexe.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Neurone',
          contenu: `Le <strong>neurone</strong> est la cellule de base du système nerveux. Il comporte un <strong>corps cellulaire</strong>, des <strong>dendrites</strong> (réception) et un <strong>axone</strong> (conduction du message vers une autre cellule). Les neurones forment des réseaux.`
        }
      ]
    },
    {
      titre: 'La nature et la circulation du message nerveux',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Message nerveux',
          contenu: `Le <strong>message nerveux</strong> qui circule le long d'un neurone est de nature <strong>électrique</strong> : ce sont des <strong>potentiels d'action</strong> (signaux électriques). Il se propage le long de l'axone à grande vitesse.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Synapse',
          contenu: `La <strong>synapse</strong> est la zone de connexion entre deux neurones (ou entre un neurone et un muscle). Le message électrique y est converti en message <strong>chimique</strong> par la libération de molécules : les <strong>neurotransmetteurs</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Fonctionnement de la synapse',
          contenu: `À l'arrivée du message électrique, le neurone libère un <strong>neurotransmetteur</strong> dans la fente synaptique. Celui-ci se fixe sur des récepteurs du neurone suivant et y déclenche un nouveau message. La transmission est donc <strong>électrique → chimique → électrique</strong> et <strong>orientée</strong> dans un seul sens.`
        }
      ]
    },
    {
      titre: 'Perturbations de la communication nerveuse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Substances et synapses',
          contenu: `Certaines <strong>substances</strong> (médicaments, drogues) agissent au niveau des <strong>synapses</strong> : elles peuvent imiter un neurotransmetteur, bloquer un récepteur ou modifier la libération/recapture, perturbant ainsi la communication nerveuse.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exemple de perturbateur synaptique',
          contenu: `Une drogue peut se fixer sur les récepteurs d'un neurotransmetteur et provoquer des effets analogues, ou au contraire les bloquer. Ces perturbations expliquent les effets sur le comportement et les risques pour la <strong>santé</strong> (dépendance, troubles). C'est un enjeu de santé publique.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// THÈME 2 — LES ENJEUX CONTEMPORAINS DE LA PLANÈTE
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-2nde-ecosystemes-services',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Écosystèmes et services environnementaux',
  ordre: 8,
  enrich: false,
  sections: [
    {
      titre: 'Le fonctionnement d\'un écosystème',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Écosystème',
          contenu: `Un <strong>écosystème</strong> est l'ensemble formé par un <strong>biotope</strong> (milieu physico-chimique : sol, eau, climat) et une <strong>biocénose</strong> (ensemble des êtres vivants), reliés par de nombreuses <strong>interactions</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Réseau trophique',
          contenu: `Un <strong>réseau trophique</strong> représente les relations alimentaires (« qui mange qui ») dans un écosystème.<br>— <strong>Producteurs</strong> (autotrophes : végétaux),<br>— <strong>consommateurs</strong> (hétérotrophes : herbivores, carnivores),<br>— <strong>décomposeurs</strong> (recyclent la matière morte).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Cycles de la matière et flux d\'énergie',
          contenu: `Dans un écosystème, la <strong>matière</strong> est <strong>recyclée</strong> (cycle du carbone, de l'azote) grâce aux décomposeurs, tandis que l'<strong>énergie</strong> (d'origine solaire) <strong>circule</strong> dans les réseaux trophiques mais se <strong>dissipe</strong> et n'est pas recyclée.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Interactions biotiques et abiotiques',
          contenu: `Les êtres vivants d'un écosystème interagissent entre eux (<strong>interactions biotiques</strong> : prédation, compétition, symbiose) et avec leur milieu (<strong>facteurs abiotiques</strong> : température, lumière, humidité, nature du sol). C'est l'ensemble de ces interactions qui détermine la structure et l'équilibre de l'écosystème.`
        }
      ]
    },
    {
      titre: 'Les services écosystémiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Services écosystémiques',
          contenu: `Les <strong>services écosystémiques</strong> sont les bénéfices que l'humanité tire du fonctionnement des écosystèmes. On distingue :<br>— services d'<strong>approvisionnement</strong> (nourriture, bois, eau),<br>— de <strong>régulation</strong> (climat, qualité de l'eau, pollinisation),<br>— <strong>culturels</strong> (loisirs, paysages).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Exemple : la pollinisation',
          contenu: `Les insectes pollinisateurs (abeilles, etc.) assurent la reproduction d'une grande partie des plantes à fleurs, dont de nombreuses cultures. C'est un <strong>service de régulation</strong> gratuit et essentiel : sa perte aurait un coût économique considérable et menacerait la production alimentaire.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Préserver les écosystèmes',
          contenu: `La préservation des écosystèmes garantit le maintien des services qu'ils rendent. La dégradation d'un écosystème (déforestation, pollution) entraîne la perte de services et des conséquences pour les sociétés humaines : c'est un enjeu de <strong>développement durable</strong>.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-erosion-biodiversite',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'L\'érosion de la biodiversité',
  ordre: 9,
  enrich: false,
  sections: [
    {
      titre: 'Constat et causes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Érosion de la biodiversité',
          contenu: `L'<strong>érosion de la biodiversité</strong> est la diminution actuelle, rapide et planétaire de la diversité du vivant : disparition d'espèces, réduction des effectifs et appauvrissement de la diversité génétique. Son rythme actuel évoque une <strong>sixième crise biologique</strong>, d'origine <strong>humaine</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Les principales causes',
          contenu: `Les causes de l'érosion sont principalement humaines :<br><ul><li><strong>Destruction et fragmentation des habitats</strong> (urbanisation, agriculture).</li><li><strong>Surexploitation</strong> (pêche, chasse).</li><li><strong>Pollutions</strong>.</li><li><strong>Espèces invasives</strong> introduites.</li><li><strong>Changement climatique</strong>.</li></ul>`
        },
        {
          type: 'ex', label: 'EX', titre: 'Effet de la fragmentation',
          contenu: `Quand un grand habitat est découpé par des routes ou des cultures, les populations animales se retrouvent <strong>isolées</strong> en petits groupes. Ces petites populations sont plus vulnérables à la <strong>dérive génétique</strong> et à la disparition. La fragmentation accélère ainsi l'érosion de la biodiversité.`
        }
      ]
    },
    {
      titre: 'Conséquences et préservation',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Conséquences de l\'érosion',
          contenu: `La perte de biodiversité fragilise les écosystèmes (moins de résilience), réduit les <strong>services écosystémiques</strong> et appauvrit le patrimoine génétique mondial (réservoir de molécules, de variétés cultivables). Elle affecte directement les sociétés humaines.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Préserver la biodiversité',
          contenu: `Les actions de préservation : création d'<strong>aires protégées</strong>, restauration d'habitats, lutte contre les espèces invasives, gestion durable des ressources, et choix individuels (consommation responsable). La préservation est un objectif du <strong>développement durable</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Une espèce invasive : la jussie',
          contenu: `La jussie, plante aquatique introduite, prolifère dans les rivières françaises : elle recouvre la surface de l'eau, prive les espèces locales de lumière et de dioxygène, et bouleverse l'écosystème. Cet exemple illustre comment une <strong>espèce invasive</strong> participe à l'érosion de la biodiversité locale.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-agrosystemes',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Agrosystèmes et développement durable',
  ordre: 10,
  enrich: false,
  sections: [
    {
      titre: 'L\'agrosystème, un écosystème particulier',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Agrosystème',
          contenu: `Un <strong>agrosystème</strong> est un écosystème <strong>créé et géré par l'Homme</strong> pour produire de la biomasse (alimentation, fibres, énergie). Il se caractérise par une faible biodiversité (souvent une seule culture) et une <strong>exportation de matière</strong> (les récoltes).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Exportation de matière et intrants',
          contenu: `Dans un écosystème naturel, la matière est recyclée sur place. Dans un agrosystème, la récolte <strong>exporte</strong> de la matière (et des éléments minéraux : azote, phosphore). Pour compenser, on apporte des <strong>intrants</strong> : engrais, eau d'irrigation, produits phytosanitaires.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Rendement',
          contenu: `Le <strong>rendement</strong> d'un agrosystème est la quantité de biomasse produite par unité de surface (par exemple en $\\text{t}\\cdot\\text{ha}^{-1}$). L'agriculture vise un rendement élevé, mais ce dernier a un coût énergétique et environnemental.`
        }
      ]
    },
    {
      titre: 'Coûts environnementaux et durabilité',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Impacts environnementaux de l\'agriculture intensive',
          contenu: `L'agriculture intensive peut entraîner :<br><ul><li>une <strong>pollution des eaux</strong> (nitrates, pesticides),</li><li>une <strong>érosion et un appauvrissement des sols</strong>,</li><li>une <strong>perte de biodiversité</strong>,</li><li>une forte consommation d'<strong>énergie</strong> et d'<strong>eau</strong>.</li></ul>`
        },
        {
          type: 'def', label: 'DEF', titre: 'Développement durable',
          contenu: `Le <strong>développement durable</strong> répond aux besoins du présent <strong>sans compromettre</strong> la capacité des générations futures à répondre aux leurs. Il concilie trois piliers : <strong>économique</strong>, <strong>social</strong> et <strong>environnemental</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Pratiques agricoles durables',
          contenu: `Pour rendre l'agriculture plus durable : <strong>rotation des cultures</strong>, <strong>agriculture biologique</strong>, <strong>lutte biologique</strong> (utiliser des prédateurs naturels au lieu de pesticides), <strong>haies et bandes enherbées</strong> favorisant la biodiversité. L'objectif est de maintenir le rendement en réduisant les impacts.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Lutte biologique : la coccinelle',
          contenu: `Au lieu d'épandre un insecticide contre les pucerons d'une culture, on introduit des <strong>coccinelles</strong>, prédatrices naturelles des pucerons. La population de ravageurs est régulée sans produit chimique : c'est un exemple de <strong>lutte biologique</strong>, plus respectueuse de l'environnement et de la santé.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// THÈME 3 — CORPS HUMAIN ET SANTÉ
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-2nde-procreation',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Procréation et sexualité humaine',
  ordre: 11,
  enrich: false,
  sections: [
    {
      titre: 'Anatomie et fonctionnement des appareils reproducteurs',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'L\'appareil reproducteur masculin',
          contenu: `Les <strong>testicules</strong> produisent en continu les <strong>spermatozoïdes</strong> (gamètes) et l'hormone <strong>testostérone</strong>. Les spermatozoïdes, mêlés aux sécrétions des glandes, forment le <strong>sperme</strong>, émis par le pénis lors de l'éjaculation.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'L\'appareil reproducteur féminin',
          contenu: `Les <strong>ovaires</strong> libèrent un <strong>ovule</strong> (gamète) à chaque cycle (<strong>ovulation</strong>) et produisent les hormones <strong>œstrogènes</strong> et <strong>progestérone</strong>. L'<strong>utérus</strong> accueille l'embryon ; sa muqueuse se renouvelle à chaque cycle. Le fonctionnement est <strong>cyclique</strong> (≈ 28 jours).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Hormone',
          contenu: `Une <strong>hormone</strong> est une molécule produite par une glande, libérée dans le <strong>sang</strong> et agissant à distance sur des organes cibles. Les hormones sexuelles contrôlent le fonctionnement des appareils reproducteurs.`
        }
      ]
    },
    {
      titre: 'De la fécondation à la grossesse',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fécondation',
          contenu: `La <strong>fécondation</strong> est la rencontre et la fusion d'un spermatozoïde et d'un ovule, formant une <strong>cellule-œuf</strong> (zygote). Elle a lieu dans les <strong>trompes</strong>. La cellule-œuf se divise et s'implante dans l'utérus : c'est la <strong>nidation</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Maîtrise de la procréation',
          contenu: `La <strong>contraception</strong> permet d'éviter une grossesse : méthodes hormonales (pilule), mécaniques (préservatif, qui protège aussi des IST), dispositifs intra-utérins. La <strong>contraception d'urgence</strong> et l'<strong>IVG</strong> existent pour les situations particulières. Le <strong>préservatif</strong> est le seul moyen protégeant des <strong>IST</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Action d\'une pilule contraceptive',
          contenu: `La pilule combinée apporte des hormones qui <strong>bloquent l'ovulation</strong> (pas d'ovule libéré) et modifient la muqueuse utérine, empêchant la fécondation et la nidation. C'est une maîtrise hormonale de la reproduction.`
        }
      ]
    },
    {
      titre: 'Sexualité, plaisir et santé',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Sexualité humaine et cerveau',
          contenu: `Chez l'humain, la sexualité n'est pas seulement liée à la reproduction : elle relève aussi du <strong>plaisir</strong> et du <strong>désir</strong>, dans lesquels le <strong>cerveau</strong> (système de récompense) joue un rôle central. Elle s'inscrit dans une relation fondée sur le <strong>respect et le consentement</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'IST',
          contenu: `Les <strong>infections sexuellement transmissibles</strong> (IST : VIH, hépatite B, chlamydia…) se transmettent lors de rapports sexuels. La <strong>prévention</strong> (préservatif, dépistage, vaccination quand elle existe) est essentielle pour la santé.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-microbiote',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'Le microbiote humain et la santé',
  ordre: 12,
  enrich: false,
  sections: [
    {
      titre: 'Définition et diversité du microbiote',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Microbiote',
          contenu: `Le <strong>microbiote</strong> est l'ensemble des <strong>micro-organismes</strong> (bactéries, levures, virus) qui vivent en permanence sur et dans notre corps : peau, bouche, et surtout <strong>intestin</strong>. Le corps humain héberge environ autant de cellules microbiennes que de cellules humaines.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Mise en place et diversité',
          contenu: `Le microbiote se constitue <strong>dès la naissance</strong> (accouchement, allaitement, environnement) et évolue avec l'âge et l'<strong>alimentation</strong>. Sa <strong>composition est propre à chaque individu</strong> ; sa diversité est un indicateur de bonne santé.`
        }
      ]
    },
    {
      titre: 'Rôles du microbiote et symbiose',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Symbiose / mutualisme',
          contenu: `La relation entre l'humain et son microbiote est une <strong>symbiose mutualiste</strong> : chacun en tire bénéfice. Le microbiote trouve un milieu de vie et des nutriments ; en échange, il rend de nombreux <strong>services</strong> à l'organisme.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Fonctions du microbiote intestinal',
          contenu: `Le microbiote intestinal :<br><ul><li>participe à la <strong>digestion</strong> (fibres) et à la synthèse de vitamines,</li><li><strong>protège</strong> contre les micro-organismes pathogènes (barrière),</li><li>contribue à la <strong>maturation du système immunitaire</strong>.</li></ul>`
        },
        {
          type: 'ex', label: 'EX', titre: 'Déséquilibre du microbiote',
          contenu: `Une cure d'<strong>antibiotiques</strong> détruit une partie du microbiote intestinal, ce qui peut entraîner des troubles digestifs (diarrhées) en laissant la place à des bactéries pathogènes. Cet exemple illustre l'importance d'un microbiote équilibré (<strong>eubiose</strong>) pour la santé.`
        }
      ]
    },
    {
      titre: 'Microbiote et hygiène de vie',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Dysbiose',
          contenu: `La <strong>dysbiose</strong> est un déséquilibre du microbiote (diminution de sa diversité ou modification de sa composition). Elle est associée à divers troubles : digestifs, immunitaires, et corrélée à certaines maladies (obésité, allergies). Maintenir un microbiote diversifié est donc un enjeu de santé.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Préserver son microbiote',
          contenu: `Le microbiote est influencé par l'<strong>alimentation</strong> : une alimentation variée et riche en <strong>fibres</strong> (fruits, légumes, légumineuses) favorise sa diversité. Les <strong>aliments fermentés</strong> et les <strong>probiotiques</strong> apportent des micro-organismes bénéfiques. L'usage raisonné des antibiotiques le protège.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Transfert de microbiote',
          contenu: `Des expériences montrent que transférer le microbiote intestinal d'une souris obèse à une souris « sans microbiote » peut favoriser chez cette dernière une prise de poids. Cela illustre l'influence du microbiote sur le métabolisme de l'hôte et l'importance d'un microbiote équilibré.`
        }
      ]
    }
  ]
},

{
  id: 'svt-2nde-activite-physique',
  filiere: '2nde',
  matiere: 'svt',
  titre: 'L\'activité physique et l\'organisme',
  ordre: 13,
  enrich: false,
  sections: [
    {
      titre: 'L\'effort et les besoins des muscles',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Le muscle pendant l\'effort',
          contenu: `Lors d'un effort, les muscles consomment davantage de <strong>dioxygène</strong> et de <strong>nutriments</strong> (glucose) pour produire de l'énergie par <strong>respiration cellulaire</strong>, et rejettent plus de <strong>dioxyde de carbone</strong>. L'organisme doit donc augmenter les apports.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Adaptations de l\'organisme à l\'effort',
          contenu: `Pour répondre aux besoins, à l'effort :<br><ul><li>la <strong>fréquence cardiaque</strong> augmente,</li><li>la <strong>fréquence respiratoire</strong> augmente,</li><li>le <strong>débit sanguin</strong> vers les muscles augmente.</li></ul>Ces adaptations accroissent l'apport de dioxygène et de nutriments aux muscles.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Débit cardiaque',
          contenu: `Le <strong>débit cardiaque</strong> (volume de sang éjecté par minute) vaut :<br>$$Q_c = V_{es} \\times F_c$$<br>où $V_{es}$ est le volume d'éjection systolique (par battement) et $F_c$ la fréquence cardiaque (battements/min).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul de débit cardiaque',
          contenu: `Au repos, $V_{es} = 70\\,\\text{mL}$ et $F_c = 70\\,\\text{batt/min}$ :<br>$$Q_c = 70 \\times 70 = 4900\\,\\text{mL/min} \\approx 4{,}9\\,\\text{L/min}.$$<br>À l'effort, $F_c$ et $V_{es}$ augmentent, le débit peut dépasser $20\\,\\text{L/min}$ : c'est l'adaptation à l'effort.`
        }
      ]
    },
    {
      titre: 'Entraînement, bénéfices et risques',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Effets de l\'entraînement',
          contenu: `Une pratique <strong>régulière et progressive</strong> améliore les capacités de l'organisme : le cœur devient plus efficace (volume d'éjection plus grand, fréquence de repos plus basse), les muscles se développent, l'endurance augmente. L'entraînement modifie durablement l'organisme.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Bénéfices pour la santé',
          contenu: `L'activité physique régulière réduit les risques de maladies cardiovasculaires, de surpoids et de diabète de type 2, et améliore le bien-être psychologique. Elle fait partie des recommandations de <strong>santé publique</strong>.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Pratique raisonnée et risques',
          contenu: `Une activité <strong>mal adaptée</strong> (excessive, sans échauffement, dopage) peut nuire à la santé : blessures, atteintes cardiaques, effets du <strong>dopage</strong>. La pratique doit être <strong>progressive et raisonnée</strong> pour rester bénéfique : c'est l'enjeu d'une activité physique responsable.`
        }
      ]
    }
  ]
}

];
