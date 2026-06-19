// Première générale — Spécialité SVT
// Programme officiel MEN 2019 (réforme du lycée)
// Tous les chapitres sont nouveaux (enrich: false)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// THÈME 1 — TRANSMISSION, VARIATION ET EXPRESSION DU PATRIMOINE GÉNÉTIQUE
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-1e-adn-replication',
  matiere: 'svt',
  titre: 'ADN, réplication et cycle cellulaire',
  ordre: 1,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Structure de la molécule d\'ADN',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'ADN (acide désoxyribonucléique)',
          contenu: `L'<strong>ADN</strong> est la molécule support de l'information génétique. C'est un <strong>polymère de nucléotides</strong> (macromolécule). Il est présent dans le <strong>noyau</strong> des cellules eucaryotes (sous forme de chromatine ou de chromosomes) mais aussi dans les mitochondries et les chloroplastes.<br>L'ADN porte l'information sous forme d'une <strong>séquence de nucléotides</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Nucléotide',
          contenu: `Un <strong>nucléotide</strong> est l'unité de base de l'ADN. Il est constitué de trois éléments :<br><ul><li>un <strong>désoxyribose</strong> (sucre à 5 carbones, pentose)</li><li>un <strong>groupement phosphate</strong></li><li>une <strong>base azotée</strong> parmi quatre : <strong>A</strong>dénine, <strong>T</strong>hymine, <strong>G</strong>uanine, <strong>C</strong>ytosine</li></ul>Les nucléotides ne diffèrent donc que par leur base azotée.` },
        { type: 'prop', label: 'PROP', titre: 'Double hélice et complémentarité des bases',
          contenu: `L'ADN est formé de <strong>deux brins</strong> antiparallèles enroulés en <strong>double hélice</strong> (modèle de Watson et Crick, 1953).<br>Les deux brins sont reliés par des liaisons entre bases <strong>complémentaires</strong> :<br>$$A \\Longleftrightarrow T \\qquad G \\Longleftrightarrow C$$Conséquence : connaître la séquence d'un brin permet de déduire celle de l'autre. Dans tout ADN double brin, le nombre de A égale celui de T, et le nombre de G celui de C (règles de Chargaff).` },
        { type: 'def', label: 'DEF', titre: 'Universalité et variabilité de l\'ADN',
          contenu: `La molécule d'ADN possède la <strong>même structure</strong> (mêmes nucléotides, même double hélice) chez tous les êtres vivants : c'est l'<strong>universalité</strong> de l'ADN, argument en faveur d'une origine commune du vivant.<br>Ce qui varie d'un individu à l'autre, c'est la <strong>séquence</strong> des nucléotides : cette variabilité fait la diversité du vivant.` },
        { type: 'ex', label: 'EX', titre: 'Déduire un brin complémentaire',
          contenu: `<strong>Énoncé</strong> : un brin d'ADN a la séquence 5'-A T G C C A G T-3'. Quelle est la séquence du brin complémentaire ?<br><strong>Résolution</strong> : on applique A↔T et G↔C, et les brins sont antiparallèles (orientation inversée).<br>Brin modèle : 5'-A T G C C A G T-3'<br>Brin complémentaire : 3'-T A C G G T C A-5'<br>Soit, lu dans le sens 5'→3' : 5'-A C T G G C A T-3'.` },
      ]
    },
    {
      titre: 'Le cycle cellulaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cycle cellulaire',
          contenu: `Le <strong>cycle cellulaire</strong> est la succession des étapes de la vie d'une cellule entre deux divisions. Il comprend :<br><ul><li>l'<strong>interphase</strong> (phases G1, S, G2) : croissance et préparation</li><li>la <strong>mitose</strong> (phase M) : division</li></ul>La phase <strong>S</strong> (synthèse) est celle où l'ADN est <strong>répliqué</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Évolution de la quantité d\'ADN',
          contenu: `On note $q$ la quantité d'ADN par chromosome.<br><ul><li>Avant la phase S : chaque chromosome est à <strong>une chromatide</strong> (quantité $q$).</li><li>Après la phase S : chaque chromosome est à <strong>deux chromatides</strong> identiques (quantité $2q$).</li></ul>La réplication double donc la quantité d'ADN ; la mitose la répartit également entre les deux cellules filles, qui retrouvent la quantité $q$ par chromosome.` },
        { type: 'def', label: 'DEF', titre: 'Mitose',
          contenu: `La <strong>mitose</strong> est une division qui produit <strong>deux cellules filles génétiquement identiques</strong> à la cellule mère. Elle se déroule en quatre phases :<br><strong>Prophase</strong> (condensation des chromosomes), <strong>Métaphase</strong> (alignement sur le plan équatorial), <strong>Anaphase</strong> (séparation des chromatides sœurs), <strong>Télophase</strong> (décondensation, formation de deux noyaux).<br>Elle assure la <strong>conservation</strong> du caryotype.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter une courbe de quantité d\'ADN',
          contenu: `<strong>Énoncé</strong> : une cellule a 2 pg d'ADN en G1. Quelle quantité a-t-elle en G2 ? après la mitose ?<br><strong>Résolution</strong> : la phase S double la quantité d'ADN, donc en G2 la cellule contient $2 \\times 2 = 4$ pg.<br>La mitose répartit également l'ADN : chaque cellule fille reçoit $4 / 2 = 2$ pg, soit la même quantité qu'en G1. La quantité par cellule est conservée au fil des cycles.` },
      ]
    },
    {
      titre: 'La réplication de l\'ADN',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réplication semi-conservative',
          contenu: `La <strong>réplication</strong> est la copie de l'ADN en phase S. Elle est <strong>semi-conservative</strong> : chaque molécule d'ADN fille est constituée d'<strong>un brin ancien</strong> (matrice) et d'<strong>un brin néoformé</strong>.<br>Ce mécanisme fut démontré par l'expérience de <strong>Meselson et Stahl</strong> (1958) en marquant l'ADN à l'azote lourd $^{15}N$.` },
        { type: 'prop', label: 'PROP', titre: 'Mécanisme de la réplication',
          contenu: `À partir d'une <strong>origine de réplication</strong>, la double hélice s'ouvre formant une <strong>fourche de réplication</strong>.<br>L'enzyme <strong>ADN polymérase</strong> parcourt chaque brin matrice et assemble un nouveau brin en respectant la <strong>complémentarité des bases</strong> (A↔T, G↔C).<br>Résultat : deux molécules d'ADN <strong>identiques</strong> à la molécule initiale. La réplication assure ainsi la <strong>transmission conforme</strong> de l'information génétique.` },
        { type: 'th', label: 'THM', titre: 'Expérience de Meselson et Stahl',
          contenu: `<strong>Principe</strong> : des bactéries cultivées sur azote lourd $^{15}N$ (ADN dense) sont transférées sur azote léger $^{14}N$.<br><ul><li>Génération 0 : ADN 100 % lourd.</li><li>Génération 1 : ADN <strong>hybride</strong> (un brin lourd, un brin léger) → densité intermédiaire.</li><li>Génération 2 : 50 % hybride, 50 % léger.</li></ul>Ce résultat valide le modèle <strong>semi-conservatif</strong> et exclut les modèles conservatif et dispersif.` },
        { type: 'ex', label: 'EX', titre: 'Compter les molécules après plusieurs réplications',
          contenu: `<strong>Énoncé</strong> : une molécule d'ADN subit 3 réplications successives. Combien obtient-on de molécules ? Combien contiennent encore un brin de la molécule initiale ?<br><strong>Résolution</strong> : à chaque réplication le nombre de molécules double, donc après 3 cycles : $2^3 = 8$ molécules.<br>Les deux brins initiaux se conservent (semi-conservation) : seules <strong>2 molécules</strong> sur 8 contiennent encore un des brins d'origine.` },
      ]
    },
    {
      titre: 'Chromosomes et caryotype',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Chromosome et chromatine',
          contenu: `La <strong>chromatine</strong> est l'ADN associé à des protéines (histones), forme déroulée présente en interphase.<br>Un <strong>chromosome</strong> est l'ADN fortement <strong>condensé</strong>, visible lors de la division. Il peut comporter <strong>une chromatide</strong> (après mitose) ou <strong>deux chromatides sœurs</strong> reliées au centromère (après réplication).` },
        { type: 'def', label: 'DEF', titre: 'Caryotype',
          contenu: `Le <strong>caryotype</strong> est l'ensemble ordonné des chromosomes d'une cellule. Chez l'Homme : <strong>46 chromosomes</strong>, soit <strong>23 paires</strong> (22 paires d'autosomes + 1 paire de chromosomes sexuels : XX ou XY).<br>Les chromosomes d'une même paire (homologues) portent les mêmes gènes, mais éventuellement des versions (allèles) différentes.` },
        { type: 'prop', label: 'PROP', titre: 'Gène et allèle',
          contenu: `Un <strong>gène</strong> est une séquence d'ADN située à une position précise (locus) d'un chromosome, porteuse d'une information (souvent la fabrication d'une protéine).<br>Un <strong>allèle</strong> est une <strong>version</strong> d'un gène, résultant d'une différence de séquence. Les allèles d'un gène occupent le même locus sur les chromosomes homologues.` },
      ]
    }
  ]
},

{
  id: 'svt-1e-mutations',
  matiere: 'svt',
  titre: 'Mutations et variabilité du génome',
  ordre: 2,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Définition et nature des mutations',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Mutation',
          contenu: `Une <strong>mutation</strong> est une <strong>modification de la séquence des nucléotides</strong> de l'ADN. C'est la source première de la <strong>variabilité génétique</strong> et donc de la diversité des allèles.<br>Une mutation est <strong>héréditaire</strong> si elle affecte les cellules de la lignée germinale (transmise à la descendance) ; elle n'est que somatique (non transmise) si elle touche une cellule du corps.` },
        { type: 'def', label: 'DEF', titre: 'Types de mutations ponctuelles',
          contenu: `On distingue trois mutations affectant un ou quelques nucléotides :<br><ul><li><strong>Substitution</strong> : un nucléotide remplacé par un autre.</li><li><strong>Insertion</strong> : ajout d'un ou plusieurs nucléotides.</li><li><strong>Délétion</strong> : perte d'un ou plusieurs nucléotides.</li></ul>Insertions et délétions décalent le cadre de lecture si elles ne sont pas multiples de trois.` },
        { type: 'prop', label: 'PROP', titre: 'Conséquences d\'une mutation',
          contenu: `Une mutation peut être :<br><ul><li><strong>Neutre</strong> (silencieuse) : sans effet sur le phénotype (ex. nouveau codon synonyme).</li><li><strong>Favorable</strong> : avantage adaptatif possible.</li><li><strong>Défavorable</strong> : peut entraîner une maladie génétique.</li></ul>L'effet dépend de la localisation (zone codante ou non) et de la nature de la modification.` },
        { type: 'ex', label: 'EX', titre: 'Identifier le type de mutation',
          contenu: `<strong>Énoncé</strong> : séquence normale ATG-CCA-GTT ; séquence mutée ATG-CGA-GTT. Quelle mutation ?<br><strong>Résolution</strong> : on compare nucléotide à nucléotide. Le 5ᵉ nucléotide C est remplacé par G (CCA → CGA), sans changement de longueur : il s'agit d'une <strong>substitution</strong> ponctuelle. Le cadre de lecture n'est pas décalé.` },
      ]
    },
    {
      titre: 'Origine des mutations',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Mutations spontanées',
          contenu: `Des mutations surviennent <strong>spontanément</strong>, principalement à cause des <strong>erreurs de réplication</strong> de l'ADN polymérase. Elles sont <strong>rares</strong> et <strong>aléatoires</strong> (le hasard détermine où et quand).<br>Un taux de mutation faible mais non nul existe donc à chaque cycle cellulaire, indépendamment de l'environnement.` },
        { type: 'def', label: 'DEF', titre: 'Agents mutagènes',
          contenu: `Un <strong>agent mutagène</strong> augmente la fréquence des mutations. Exemples :<br><ul><li><strong>Rayonnements</strong> : UV (dimères de thymine), rayons X, radioactivité.</li><li><strong>Agents chimiques</strong> : benzène, goudrons de la fumée de tabac.</li></ul>L'exposition aux UV solaires accroît le risque de cancers cutanés (mélanomes).` },
        { type: 'prop', label: 'PROP', titre: 'Systèmes de réparation de l\'ADN',
          contenu: `La cellule possède des <strong>systèmes enzymatiques de réparation</strong> qui détectent et corrigent la plupart des erreurs de l'ADN. Ces mécanismes limitent fortement le taux de mutation.<br>Lorsqu'une lésion <strong>n'est pas réparée</strong>, elle devient une mutation transmise lors de la réplication suivante.` },
        { type: 'ex', label: 'EX', titre: 'Exploiter des données sur les UV',
          contenu: `<strong>Énoncé</strong> : une culture de cellules est exposée à des doses croissantes d'UV ; on mesure le nombre de mutations. Que conclure ?<br><strong>Résolution</strong> : le nombre de mutations augmente avec la dose d'UV. On en déduit que les UV sont un <strong>agent mutagène</strong> : ils augmentent la fréquence des mutations, ce qui explique le lien entre exposition solaire et cancers de la peau.` },
      ]
    },
    {
      titre: 'Diversité allélique et clones',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Origine de la diversité des allèles',
          contenu: `Les <strong>mutations accumulées</strong> au cours du temps et des générations sont à l'origine des <strong>différents allèles</strong> d'un gène. Plus un gène a accumulé de mutations dans une population, plus il existe d'allèles.<br>La diversité allélique est ainsi le reflet de l'histoire évolutive des populations.` },
        { type: 'def', label: 'DEF', titre: 'Clone cellulaire',
          contenu: `Un <strong>clone</strong> est un ensemble de cellules issues d'une même cellule par mitoses successives. En théorie, elles sont génétiquement identiques.<br>En pratique, des mutations somatiques peuvent survenir au sein d'un clone, introduisant des différences : on parle alors de <strong>mosaïque génétique</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Comparer fréquences alléliques',
          contenu: `<strong>Énoncé</strong> : dans une population de 200 individus, un gène existe sous 3 allèles, l'allèle A étant porté 240 fois sur 400 copies. Quelle est sa fréquence ?<br><strong>Résolution</strong> : chaque individu diploïde porte 2 copies, soit $200 \\times 2 = 400$ copies. La fréquence de A vaut $\\dfrac{240}{400} = 0{,}60$, soit 60 %.` },
      ]
    }
  ]
},

{
  id: 'svt-1e-expression-genes',
  matiere: 'svt',
  titre: 'Expression du patrimoine génétique',
  ordre: 3,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Du gène à la protéine',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Protéine',
          contenu: `Une <strong>protéine</strong> est un polymère d'<strong>acides aminés</strong> reliés par des liaisons peptidiques. Il existe 20 acides aminés différents.<br>La <strong>séquence des acides aminés</strong> (structure primaire) détermine le repliement de la protéine dans l'espace et donc sa <strong>fonction</strong> (enzyme, hormone, structure...). Les protéines sont les principaux acteurs du phénotype moléculaire.` },
        { type: 'prop', label: 'PROP', titre: 'Relation gène – protéine – phénotype',
          contenu: `La séquence des <strong>nucléotides</strong> du gène détermine la séquence des <strong>acides aminés</strong> de la protéine, qui détermine son <strong>repliement</strong> et sa <strong>fonction</strong>, donc le <strong>phénotype</strong>.<br>$$\\text{ADN} \\Rightarrow \\text{ARN} \\Rightarrow \\text{protéine} \\Rightarrow \\text{phénotype}$$Une mutation du gène peut donc modifier la protéine et le phénotype.` },
        { type: 'def', label: 'DEF', titre: 'Phénotype à différentes échelles',
          contenu: `Le <strong>phénotype</strong> se définit à trois échelles :<br><ul><li><strong>moléculaire</strong> : nature des protéines (ex. hémoglobine normale ou anormale)</li><li><strong>cellulaire</strong> : forme et fonctionnement des cellules</li><li><strong>macroscopique</strong> : caractères de l'organisme</li></ul>Les trois échelles sont liées : le phénotype macroscopique découle du phénotype moléculaire.` },
      ]
    },
    {
      titre: 'La transcription',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'ARN messager (ARNm)',
          contenu: `L'<strong>ARN messager</strong> est une copie d'un gène, simple brin. Il diffère de l'ADN par :<br><ul><li>un sucre <strong>ribose</strong> (au lieu du désoxyribose)</li><li>la base <strong>uracile (U)</strong> qui remplace la thymine (T)</li><li>une seule chaîne (simple brin)</li></ul>L'ARNm transporte l'information du noyau vers le cytoplasme.` },
        { type: 'prop', label: 'PROP', titre: 'Mécanisme de la transcription',
          contenu: `La <strong>transcription</strong> est la synthèse d'un ARNm à partir d'un brin d'ADN, dans le <strong>noyau</strong>, par l'<strong>ARN polymérase</strong>.<br>L'enzyme lit le <strong>brin transcrit</strong> et assemble l'ARN par complémentarité :<br>$$A_{ADN} \\to U_{ARN}, \\quad T_{ADN} \\to A_{ARN}, \\quad G_{ADN} \\to C_{ARN}, \\quad C_{ADN} \\to G_{ARN}$$L'ARNm a la même séquence que le brin non transcrit (avec U à la place de T).` },
        { type: 'ex', label: 'EX', titre: 'Transcrire un brin d\'ADN',
          contenu: `<strong>Énoncé</strong> : le brin transcrit a la séquence 3'-T A C G G A-5'. Quelle est la séquence de l'ARNm ?<br><strong>Résolution</strong> : on applique la complémentarité ARN (A→U pour T, et A→A inversé) :<br>T→A, A→U, C→G, G→C, G→C, A→U.<br>ARNm : 5'-A U G C C U-3'. On retrouve bien U au lieu de T.` },
      ]
    },
    {
      titre: 'La traduction et le code génétique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Code génétique',
          contenu: `Le <strong>code génétique</strong> est la correspondance entre les <strong>codons</strong> (triplets de nucléotides de l'ARNm) et les <strong>acides aminés</strong>.<br>Propriétés : il est <strong>universel</strong> (même chez presque tous les êtres vivants), <strong>redondant</strong> (un acide aminé peut avoir plusieurs codons) et <strong>non ambigu</strong> (un codon code un seul acide aminé).<br>Le codon AUG est le codon <strong>start</strong> ; UAA, UAG, UGA sont des codons <strong>stop</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Traduction',
          contenu: `La <strong>traduction</strong> est la synthèse d'une protéine à partir de l'ARNm, dans le <strong>cytoplasme</strong>, par les <strong>ribosomes</strong>.<br>Le ribosome lit l'ARNm codon par codon (de l'AUG initiateur au codon stop) et assemble les acides aminés correspondants pour former la chaîne polypeptidique.` },
        { type: 'meth', label: 'METH', titre: 'Traduire un ARNm avec le tableau du code génétique',
          contenu: `<strong>Étapes</strong> :<br>1. Repérer le codon <strong>start</strong> AUG (début de lecture).<br>2. Découper la séquence en <strong>codons</strong> (groupes de 3) à partir de l'AUG.<br>3. Lire chaque codon dans le tableau du code génétique pour trouver l'acide aminé.<br>4. S'arrêter au premier <strong>codon stop</strong> (UAA, UAG ou UGA).` },
        { type: 'ex', label: 'EX', titre: 'Conséquence d\'une mutation sur la protéine',
          contenu: `<strong>Énoncé</strong> : codon normal GAG (acide glutamique) muté en GTG (valine) dans le gène de la β-globine. Conséquence ?<br><strong>Résolution</strong> : une substitution remplace un acide aminé par un autre. L'hémoglobine produite (HbS) est anormale : elle déforme les hématies en faucille. C'est la <strong>drépanocytose</strong>. Un seul changement de nucléotide modifie ainsi tout le phénotype.` },
      ]
    },
    {
      titre: 'Complexité de l\'expression génétique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Maturation alternative de l\'ARN',
          contenu: `Chez les eucaryotes, un gène peut donner <strong>plusieurs protéines</strong> grâce à l'<strong>épissage alternatif</strong> de l'ARN pré-messager : selon les fragments conservés (exons), des ARNm différents sont produits à partir d'un même gène.<br>Conséquence : le nombre de protéines possibles est bien supérieur au nombre de gènes.` },
        { type: 'prop', label: 'PROP', titre: 'Expression différentielle des gènes',
          contenu: `Toutes les cellules d'un organisme possèdent le <strong>même génome</strong>, mais n'expriment pas les mêmes gènes : c'est l'<strong>expression différentielle</strong>.<br>Cette régulation explique la <strong>spécialisation cellulaire</strong> (différenciation) : une cellule du foie et un neurone expriment des jeux de gènes différents tout en partageant le même ADN.` },
        { type: 'def', label: 'DEF', titre: 'Influence de l\'environnement',
          contenu: `L'expression des gènes est <strong>modulée par l'environnement</strong> de la cellule (signaux chimiques, température, lumière...).<br>Exemple : chez certains animaux (lapin himalaya), un gène de pigmentation ne s'exprime qu'aux extrémités plus froides du corps. Le phénotype résulte donc de l'interaction <strong>génotype × environnement</strong>.` },
      ]
    }
  ]
},

{
  id: 'svt-1e-genetique-evolution',
  matiere: 'svt',
  titre: 'Génétique et évolution',
  ordre: 4,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Méiose et brassage génétique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Méiose',
          contenu: `La <strong>méiose</strong> est une succession de <strong>deux divisions</strong> qui produit des cellules <strong>haploïdes</strong> (gamètes, $n$ chromosomes) à partir d'une cellule <strong>diploïde</strong> ($2n$).<br>La première division (réductionnelle) sépare les chromosomes <strong>homologues</strong> ; la seconde (équationnelle) sépare les chromatides sœurs. Elle assure le passage de $2n$ à $n$.` },
        { type: 'def', label: 'DEF', titre: 'Brassage interchromosomique',
          contenu: `Le <strong>brassage interchromosomique</strong> a lieu en <strong>anaphase I</strong> : pour chaque paire d'homologues, la répartition vers l'un ou l'autre pôle se fait de façon <strong>indépendante et aléatoire</strong>.<br>Pour $n$ paires, le nombre de combinaisons chromosomiques possibles dans les gamètes est $2^n$ (soit $2^{23}$ chez l'Homme).` },
        { type: 'def', label: 'DEF', titre: 'Brassage intrachromosomique',
          contenu: `Le <strong>brassage intrachromosomique</strong> résulte des <strong>crossing-over</strong> (enjambements) en <strong>prophase I</strong> : des portions de chromatides homologues s'échangent.<br>Cela crée de <strong>nouvelles combinaisons d'allèles</strong> sur un même chromosome (recombinaison génétique). C'est une source supplémentaire de diversité des gamètes.` },
        { type: 'ex', label: 'EX', titre: 'Calculer le nombre de gamètes différents',
          contenu: `<strong>Énoncé</strong> : un individu est hétérozygote pour 4 gènes situés sur 4 paires différentes. Combien de gamètes génétiquement différents par brassage interchromosomique ?<br><strong>Résolution</strong> : chaque paire offre 2 possibilités indépendantes, soit $2^4 = 16$ types de gamètes différents (avant même de compter les crossing-over).` },
      ]
    },
    {
      titre: 'La fécondation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fécondation',
          contenu: `La <strong>fécondation</strong> est la fusion d'un gamète mâle et d'un gamète femelle (haploïdes, $n$) donnant une <strong>cellule-œuf diploïde</strong> ($2n$).<br>Elle rétablit le caryotype de l'espèce et associe de façon <strong>aléatoire</strong> deux gamètes parmi une immense diversité : c'est un <strong>brassage supplémentaire</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Stabilité du caryotype au fil des générations',
          contenu: `La méiose divise par deux le nombre de chromosomes ($2n \\to n$) et la fécondation le rétablit ($n + n \\to 2n$).<br>Ces deux processus se compensent : le caryotype de l'espèce reste <strong>stable</strong> de génération en génération, tout en assurant un brassage génétique considérable.` },
        { type: 'ex', label: 'EX', titre: 'Combinaisons à la fécondation',
          contenu: `<strong>Énoncé</strong> : chez l'Homme, chaque parent produit $2^{23}$ gamètes différents par brassage interchromosomique. Combien de combinaisons possibles pour un enfant ?<br><strong>Résolution</strong> : la fécondation associe un gamète paternel et un maternel : $2^{23} \\times 2^{23} = 2^{46}$ combinaisons, soit plus de 70 mille milliards — sans compter les crossing-over.` },
      ]
    },
    {
      titre: 'Anomalies de la méiose',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Anomalie de nombre de chromosomes',
          contenu: `Une <strong>mauvaise séparation des chromosomes</strong> en méiose (non-disjonction) produit des gamètes avec un chromosome en trop ou en moins.<br>Après fécondation, l'individu présente une <strong>trisomie</strong> (3 chromosomes) ou une <strong>monosomie</strong> (1 seul). Exemple : la <strong>trisomie 21</strong> (3 chromosomes 21).` },
        { type: 'prop', label: 'PROP', titre: 'Duplications de gènes et familles multigéniques',
          contenu: `Un crossing-over inégal peut entraîner la <strong>duplication</strong> d'un gène. Les copies évoluent ensuite indépendamment par mutations et forment une <strong>famille multigénique</strong> (gènes similaires issus d'un même gène ancestral).<br>Exemple : les gènes des globines (α, β...) constituent une famille multigénique. Ce mécanisme est un moteur de l'évolution.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter un caryotype de trisomie',
          contenu: `<strong>Énoncé</strong> : un caryotype montre 47 chromosomes avec 3 chromosomes 21. Comment expliquer cette anomalie ?<br><strong>Résolution</strong> : il s'agit d'une <strong>trisomie 21</strong>. Elle provient d'une <strong>non-disjonction</strong> de la paire 21 lors de la méiose d'un parent : un gamète a reçu 2 chromosomes 21, qui s'ajoutent au chromosome 21 de l'autre gamète après fécondation.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 2 — LA DYNAMIQUE INTERNE DE LA TERRE
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-1e-structure-terre',
  matiere: 'svt',
  titre: 'Structure interne de la Terre',
  ordre: 5,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Les enveloppes de la Terre',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Structure en couches concentriques',
          contenu: `La Terre est organisée en enveloppes concentriques de composition chimique différente :<br><ul><li>la <strong>croûte</strong> (continentale, granitique ; ou océanique, basaltique)</li><li>le <strong>manteau</strong> (péridotite), le plus volumineux</li><li>le <strong>noyau</strong> (fer-nickel), externe liquide et interne solide</li></ul>Ces couches diffèrent par leur composition et leur densité, qui croît avec la profondeur.` },
        { type: 'def', label: 'DEF', titre: 'Lithosphère et asthénosphère',
          contenu: `Une autre distinction, fondée sur le comportement <strong>mécanique</strong>, oppose :<br><ul><li>la <strong>lithosphère</strong> : rigide, comprend la croûte + le manteau supérieur (jusqu'à ~100 km).</li><li>l'<strong>asthénosphère</strong> : manteau ductile, moins rigide, sur laquelle glissent les plaques.</li></ul>Cette frontière est essentielle pour comprendre la tectonique des plaques.` },
        { type: 'prop', label: 'PROP', titre: 'Croûte océanique vs croûte continentale',
          contenu: `La <strong>croûte continentale</strong> est <strong>granitique</strong>, épaisse (~30 km, jusqu'à 70 km sous les montagnes) et peu dense (~2,7).<br>La <strong>croûte océanique</strong> est <strong>basaltique</strong>, mince (~7 km) et plus dense (~2,9).<br>Cette différence de densité explique pourquoi les continents émergent et les océans forment des bassins.` },
      ]
    },
    {
      titre: 'Les ondes sismiques, sondes de la Terre',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Ondes sismiques P et S',
          contenu: `Un séisme émet des <strong>ondes sismiques</strong> qui se propagent dans la Terre :<br><ul><li>ondes <strong>P</strong> (primaires) : compression, les plus rapides, traversent solides ET liquides.</li><li>ondes <strong>S</strong> (secondaires) : cisaillement, plus lentes, ne traversent <strong>pas les liquides</strong>.</li></ul>L'absence d'ondes S au-delà d'une certaine profondeur révèle le noyau externe liquide.` },
        { type: 'prop', label: 'PROP', titre: 'Variation de vitesse et discontinuités',
          contenu: `La <strong>vitesse</strong> des ondes sismiques varie avec les propriétés (densité, état) du milieu. Une variation brutale révèle une <strong>discontinuité</strong> :<br><ul><li><strong>Moho</strong> : limite croûte/manteau.</li><li><strong>Gutenberg</strong> : limite manteau/noyau.</li></ul>L'étude des ondes a ainsi permis de reconstituer la structure interne du globe.` },
        { type: 'ex', label: 'EX', titre: 'Localiser une discontinuité',
          contenu: `<strong>Énoncé</strong> : la vitesse des ondes P passe brutalement de 8 km/s à 13 km/s à 30 km de profondeur sous un continent. Qu'en déduire ?<br><strong>Résolution</strong> : une augmentation brutale de vitesse marque une <strong>discontinuité</strong>, ici le <strong>Moho</strong> (limite croûte–manteau) à 30 km, ce qui correspond à une croûte continentale.` },
      ]
    },
    {
      titre: 'La chaleur interne du globe',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Flux géothermique et radioactivité',
          contenu: `La Terre <strong>dissipe de la chaleur</strong> vers la surface : c'est le <strong>flux géothermique</strong>.<br>Cette chaleur a deux origines : la chaleur <strong>résiduelle</strong> de la formation de la Terre, et surtout la <strong>désintégration d'éléments radioactifs</strong> (uranium, thorium, potassium) dans le manteau et la croûte.` },
        { type: 'def', label: 'DEF', titre: 'Gradient géothermique',
          contenu: `Le <strong>gradient géothermique</strong> est l'augmentation de la température avec la profondeur. En moyenne il vaut environ <strong>30 °C par km</strong> dans la croûte.<br>Il n'est pas uniforme : plus fort au niveau des dorsales et des zones volcaniques, plus faible sous les vieux continents.` },
        { type: 'prop', label: 'PROP', titre: 'Transferts de chaleur : conduction et convection',
          contenu: `La chaleur interne est évacuée par deux mécanismes :<br><ul><li><strong>Conduction</strong> : transfert sans déplacement de matière (dans la lithosphère rigide).</li><li><strong>Convection</strong> : transfert avec déplacement de matière (dans le manteau ductile, qui s'écoule lentement).</li></ul>Les <strong>cellules de convection</strong> mantellique sont le moteur de la mobilité des plaques.` },
        { type: 'ex', label: 'EX', titre: 'Calculer une température en profondeur',
          contenu: `<strong>Énoncé</strong> : la température en surface est de 15 °C et le gradient géothermique vaut 30 °C/km. Quelle température à 5 km ?<br><strong>Résolution</strong> : $T = 15 + 30 \\times 5 = 15 + 150 = 165\\ °\\text{C}$. La température augmente régulièrement avec la profondeur dans la croûte.` },
      ]
    }
  ]
},

{
  id: 'svt-1e-tectonique-plaques',
  matiere: 'svt',
  titre: 'La tectonique des plaques',
  ordre: 6,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'La théorie de la tectonique des plaques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Plaque lithosphérique',
          contenu: `Une <strong>plaque lithosphérique</strong> est un fragment <strong>rigide</strong> de lithosphère qui se déplace d'un seul tenant sur l'asthénosphère ductile.<br>La surface du globe est découpée en une douzaine de grandes plaques. Une plaque peut porter de la lithosphère océanique et/ou continentale.` },
        { type: 'def', label: 'DEF', titre: 'Frontières de plaques',
          contenu: `Les plaques sont délimitées par trois types de frontières, repérables par la sismicité et le volcanisme :<br><ul><li><strong>divergentes</strong> : les plaques s'écartent (dorsales).</li><li><strong>convergentes</strong> : les plaques se rapprochent (subduction, collision).</li><li><strong>transformantes</strong> : les plaques coulissent l'une contre l'autre (failles).</li></ul>` },
        { type: 'th', label: 'THM', titre: 'De la dérive des continents à la tectonique',
          contenu: `<strong>Wegener</strong> (1912) propose la <strong>dérive des continents</strong>, appuyée sur la complémentarité des côtes, la continuité des fossiles et des structures géologiques entre continents.<br>Sa théorie, rejetée faute de moteur, est confirmée dans les années 1960 par l'étude des <strong>fonds océaniques</strong> (expansion océanique, anomalies magnétiques) : naissance de la <strong>tectonique des plaques</strong>.` },
      ]
    },
    {
      titre: 'Divergence et expansion océanique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Dorsale océanique',
          contenu: `Une <strong>dorsale</strong> est une chaîne de montagnes sous-marine où les plaques <strong>divergent</strong>. Du magma issu du manteau remonte, refroidit et forme une <strong>nouvelle croûte océanique</strong> (basaltique).<br>La dorsale est le lieu de <strong>création</strong> de lithosphère océanique : c'est l'<strong>accrétion</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Anomalies magnétiques et expansion',
          contenu: `Le basalte enregistre le champ magnétique terrestre au moment de sa formation. Comme ce champ s'<strong>inverse</strong> au cours du temps, on observe de part et d'autre de la dorsale des <strong>bandes magnétiques symétriques</strong> et alternées.<br>Cette symétrie prouve l'<strong>expansion océanique</strong> et permet de calculer la <strong>vitesse</strong> d'écartement des plaques.` },
        { type: 'ex', label: 'EX', titre: 'Calculer une vitesse d\'expansion',
          contenu: `<strong>Énoncé</strong> : une anomalie magnétique datée de 4 millions d'années est située à 80 km de l'axe de la dorsale. Quelle est la vitesse d'expansion (pour cette plaque) ?<br><strong>Résolution</strong> : $v = \\dfrac{d}{t} = \\dfrac{80\\text{ km}}{4 \\times 10^6\\text{ ans}} = 2 \\times 10^{-5}\\ \\text{km/an} = 2\\ \\text{cm/an}$. Le taux d'expansion total (deux plaques) est donc de 4 cm/an.` },
      ]
    },
    {
      titre: 'Convergence : subduction et collision',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Subduction',
          contenu: `La <strong>subduction</strong> est l'enfoncement d'une plaque océanique <strong>dense</strong> sous une autre plaque (océanique ou continentale).<br>Elle se reconnaît par une <strong>fosse océanique</strong> profonde, des séismes répartis le long du plan de subduction (plan de Wadati-Benioff) et un <strong>volcanisme explosif</strong> en arrière. C'est le lieu de <strong>recyclage</strong> de la lithosphère.` },
        { type: 'def', label: 'DEF', titre: 'Collision continentale',
          contenu: `Lorsque deux lithosphères <strong>continentales</strong> se rencontrent, aucune ne peut plonger (trop peu denses) : elles s'affrontent et se déforment, formant une <strong>chaîne de montagnes</strong> (collision).<br>Exemple : la <strong>chaîne himalayenne</strong> résulte de la collision Inde–Asie. On y observe plis, failles et épaississement crustal.` },
        { type: 'prop', label: 'PROP', titre: 'Cycle de la lithosphère océanique',
          contenu: `La lithosphère océanique se <strong>crée</strong> aux dorsales, vieillit, se <strong>refroidit</strong> et <strong>s'épaissit</strong> en s'éloignant (elle devient plus dense), puis se <strong>recycle</strong> en subduction.<br>Sa densité croissante avec l'âge est le <strong>moteur</strong> principal de son enfoncement : c'est la traction de la plaque plongeante (slab pull).` },
        { type: 'ex', label: 'EX', titre: 'Identifier une frontière de plaque',
          contenu: `<strong>Énoncé</strong> : une zone présente une fosse profonde, des séismes de plus en plus profonds vers le continent et des volcans explosifs. De quel type de frontière s'agit-il ?<br><strong>Résolution</strong> : la fosse, le plan de séismes incliné (Wadati-Benioff) et le volcanisme explosif sont caractéristiques d'une zone de <strong>subduction</strong> (frontière convergente).` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 3 — LES CLIMATS DE LA TERRE : COMPRENDRE LE PASSÉ POUR AGIR AUJOURD'HUI ET DEMAIN
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-1e-climats-terre',
  matiere: 'svt',
  titre: 'Les climats de la Terre : passés et futurs',
  ordre: 7,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Climat, effet de serre et bilan radiatif',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Climat et météo',
          contenu: `La <strong>météo</strong> décrit l'état de l'atmosphère à un instant et un lieu donnés.<br>Le <strong>climat</strong> est l'ensemble des conditions atmosphériques <strong>moyennes</strong> d'une région, calculées sur une longue période (au moins 30 ans). Le climat global de la Terre dépend de son <strong>bilan radiatif</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Effet de serre',
          contenu: `Le Soleil chauffe la surface terrestre qui émet en retour un rayonnement <strong>infrarouge</strong>. Les <strong>gaz à effet de serre</strong> (CO₂, vapeur d'eau, CH₄) absorbent une partie de cet infrarouge et le réémettent vers le sol : c'est l'<strong>effet de serre</strong>.<br>Sans lui, la température moyenne serait d'environ −18 °C au lieu de +15 °C : il est indispensable à la vie, mais son <strong>renforcement</strong> réchauffe le climat.` },
        { type: 'prop', label: 'PROP', titre: 'Albédo et bilan radiatif',
          contenu: `L'<strong>albédo</strong> est la fraction de l'énergie solaire <strong>réfléchie</strong> par une surface (1 = totalement réfléchissant, 0 = totalement absorbant). La neige et la glace ont un albédo élevé, l'océan et les forêts un albédo faible.<br>Le <strong>bilan radiatif</strong> compare l'énergie reçue et l'énergie renvoyée : un déséquilibre fait varier la température globale.` },
        { type: 'ex', label: 'EX', titre: 'Rétroaction positive de la banquise',
          contenu: `<strong>Énoncé</strong> : un réchauffement fait fondre la banquise. Quel effet sur l'albédo et le climat ?<br><strong>Résolution</strong> : la fonte remplace une surface blanche (albédo fort) par de l'océan sombre (albédo faible). La Terre absorbe alors <strong>plus</strong> d'énergie, ce qui amplifie le réchauffement : c'est une <strong>rétroaction positive</strong> (boucle d'amplification).` },
      ]
    },
    {
      titre: 'Reconstituer les climats du passé',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Indices et marqueurs paléoclimatiques',
          contenu: `On reconstitue les <strong>paléoclimats</strong> grâce à des <strong>indices</strong> conservés dans les archives géologiques :<br><ul><li><strong>pollens</strong> (espèces végétales indicatrices du climat)</li><li><strong>fossiles</strong> et faciès sédimentaires</li><li><strong>moraines</strong> et stries glaciaires (extension des glaciers)</li></ul>Ces marqueurs permettent de comparer le climat passé au climat actuel.` },
        { type: 'def', label: 'DEF', titre: 'Carottes de glace et bulles d\'air',
          contenu: `Les <strong>carottes de glace</strong> (Antarctique, Groenland) emprisonnent des <strong>bulles d'air</strong> qui sont des échantillons de l'atmosphère ancienne.<br>Leur analyse donne la composition passée de l'air (teneur en CO₂, CH₄) et, via le rapport des <strong>isotopes de l'oxygène</strong> de la glace, une estimation de la température de l'époque.` },
        { type: 'prop', label: 'PROP', titre: 'Couplage CO₂ – température',
          contenu: `Les enregistrements (carottes de glace) montrent une <strong>variation parallèle</strong> de la teneur en CO₂ et de la température sur des centaines de milliers d'années.<br>Cette corrélation établit le rôle du CO₂ comme <strong>facteur clé</strong> du climat. Aux échelles glaciaires/interglaciaires, les deux varient de concert.` },
        { type: 'ex', label: 'EX', titre: 'Exploiter une courbe CO₂–température',
          contenu: `<strong>Énoncé</strong> : une carotte de glace montre que pendant un maximum glaciaire le CO₂ était à 190 ppm et la température 8 °C plus basse qu'aujourd'hui. Que conclure ?<br><strong>Résolution</strong> : les périodes froides (glaciaires) coïncident avec un CO₂ bas, les périodes chaudes avec un CO₂ élevé. On confirme le <strong>couplage CO₂–température</strong> et le rôle des gaz à effet de serre dans les variations climatiques.` },
      ]
    },
    {
      titre: 'Le changement climatique actuel et futur',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réchauffement climatique d\'origine humaine',
          contenu: `Depuis l'ère industrielle, la combustion des <strong>énergies fossiles</strong> (charbon, pétrole, gaz) libère du <strong>CO₂</strong>, dont la teneur atmosphérique est passée d'environ 280 ppm à plus de 415 ppm.<br>Ce <strong>renforcement de l'effet de serre</strong> est la cause principale du réchauffement global observé (~+1 °C depuis 1900). L'origine humaine est établie par la communauté scientifique (GIEC).` },
        { type: 'def', label: 'DEF', titre: 'Modèles climatiques et scénarios',
          contenu: `Les <strong>modèles climatiques</strong> sont des simulations numériques qui projettent l'évolution du climat selon différents <strong>scénarios</strong> d'émissions de gaz à effet de serre.<br>Le <strong>GIEC</strong> en déduit une fourchette de réchauffement d'ici 2100, plus ou moins forte selon les efforts de réduction des émissions. Les modèles sont validés en reproduisant les climats passés.` },
        { type: 'prop', label: 'PROP', titre: 'Conséquences du réchauffement',
          contenu: `Un réchauffement global entraîne notamment :<br><ul><li>la fonte des glaciers et de la banquise</li><li>la <strong>montée du niveau marin</strong> (dilatation de l'eau + fonte des glaces continentales)</li><li>l'augmentation des événements météorologiques extrêmes</li><li>des perturbations des écosystèmes et de la biodiversité</li></ul>` },
        { type: 'ex', label: 'EX', titre: 'Comparer deux scénarios du GIEC',
          contenu: `<strong>Énoncé</strong> : un scénario prévoit +2 °C en 2100, un autre +4 °C. D'où vient la différence ?<br><strong>Résolution</strong> : la différence tient au volume des <strong>émissions futures</strong> de gaz à effet de serre. Le scénario à +2 °C suppose une forte réduction des émissions, celui à +4 °C une poursuite des émissions élevées. Les choix humains actuels déterminent donc le climat futur.` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 4 — ÉCOSYSTÈMES ET SERVICES ENVIRONNEMENTAUX
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-1e-ecosystemes',
  matiere: 'svt',
  titre: 'Écosystèmes et services environnementaux',
  ordre: 8,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Structure et fonctionnement des écosystèmes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Écosystème',
          contenu: `Un <strong>écosystème</strong> est l'ensemble formé par une <strong>communauté d'êtres vivants</strong> (biocénose) et son <strong>milieu de vie</strong> (biotope), en interaction.<br>Il se caractérise par des <strong>flux de matière et d'énergie</strong> entre ses composantes et par des interactions entre espèces.` },
        { type: 'def', label: 'DEF', titre: 'Producteurs, consommateurs, décomposeurs',
          contenu: `Dans un écosystème :<br><ul><li>les <strong>producteurs</strong> (végétaux, photosynthèse) fabriquent de la matière organique à partir de matière minérale.</li><li>les <strong>consommateurs</strong> (animaux) se nourrissent d'autres êtres vivants.</li><li>les <strong>décomposeurs</strong> (champignons, bactéries) recyclent la matière organique morte en matière minérale.</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Flux d\'énergie et réseaux trophiques',
          contenu: `L'énergie entre dans l'écosystème par la <strong>photosynthèse</strong>, puis circule le long des <strong>chaînes alimentaires</strong> (réseaux trophiques).<br>À chaque niveau, une grande partie de l'énergie est <strong>dissipée</strong> (respiration, chaleur) : le rendement entre deux niveaux trophiques est faible (≈ 10 %), ce qui limite le nombre de maillons.` },
        { type: 'ex', label: 'EX', titre: 'Construire une chaîne alimentaire',
          contenu: `<strong>Énoncé</strong> : herbe → criquet → grenouille → couleuvre. Identifier les niveaux trophiques.<br><strong>Résolution</strong> : l'herbe est le <strong>producteur</strong> ; le criquet est consommateur primaire (herbivore) ; la grenouille consommateur secondaire ; la couleuvre consommateur tertiaire. L'énergie diminue à chaque niveau, d'où le faible nombre de maillons.` },
      ]
    },
    {
      titre: 'Dynamique et perturbations des écosystèmes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Écosystème en équilibre dynamique',
          contenu: `Un écosystème est en <strong>équilibre dynamique</strong> : sa composition fluctue autour d'un état moyen sous l'effet des interactions et des cycles naturels.<br>Il évolue dans le temps (<strong>succession écologique</strong>) : par exemple une friche peut évoluer vers une forêt.` },
        { type: 'def', label: 'DEF', titre: 'Perturbations et résilience',
          contenu: `Une <strong>perturbation</strong> (incendie, tempête, pollution) modifie l'écosystème. La <strong>résilience</strong> est sa capacité à <strong>retrouver</strong> un état proche de l'état initial après perturbation.<br>Si la perturbation est trop forte ou répétée, l'écosystème peut basculer vers un <strong>nouvel état</strong> stable différent.` },
        { type: 'prop', label: 'PROP', titre: 'Impact des activités humaines',
          contenu: `Les activités humaines peuvent <strong>perturber</strong> les écosystèmes : déforestation, surexploitation, pollution, introduction d'espèces invasives, fragmentation des habitats.<br>Ces atteintes réduisent la <strong>biodiversité</strong> et la capacité des écosystèmes à rendre des services. Certaines pratiques (gestion durable, restauration) limitent ces impacts.` },
        { type: 'ex', label: 'EX', titre: 'Évaluer la résilience d\'un écosystème',
          contenu: `<strong>Énoncé</strong> : après un incendie, une forêt retrouve sa végétation initiale en 40 ans, mais pas si les incendies se répètent tous les 5 ans. Interpréter.<br><strong>Résolution</strong> : l'écosystème montre une <strong>résilience</strong> face à une perturbation isolée. Des perturbations trop <strong>fréquentes</strong> dépassent sa capacité de récupération : il bascule durablement vers un autre état (lande, sol nu).` },
      ]
    },
    {
      titre: 'Services écosystémiques et gestion durable',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Services écosystémiques',
          contenu: `Les <strong>services écosystémiques</strong> sont les bénéfices que les sociétés humaines tirent des écosystèmes :<br><ul><li><strong>d'approvisionnement</strong> : nourriture, bois, eau, médicaments.</li><li><strong>de régulation</strong> : qualité de l'air et de l'eau, pollinisation, stockage du carbone.</li><li><strong>culturels</strong> : loisirs, paysages, valeur patrimoniale.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Exploitation durable',
          contenu: `Une <strong>exploitation durable</strong> prélève les ressources d'un écosystème sans dépasser sa capacité de <strong>renouvellement</strong>, afin de préserver les services à long terme.<br>Elle s'oppose à la <strong>surexploitation</strong> (ex. surpêche), qui épuise la ressource et dégrade l'écosystème.` },
        { type: 'ex', label: 'EX', titre: 'Raisonner sur une gestion forestière',
          contenu: `<strong>Énoncé</strong> : une forêt produit 5 m³ de bois/ha/an. Combien peut-on prélever durablement par hectare et par an ?<br><strong>Résolution</strong> : pour rester durable, le prélèvement ne doit pas dépasser le renouvellement, soit <strong>au plus 5 m³/ha/an</strong>. Prélever davantage épuiserait progressivement la ressource et dégraderait les services rendus (stockage du carbone, biodiversité).` },
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// THÈME 5 — CORPS HUMAIN ET SANTÉ
// ══════════════════════════════════════════════════════════════

{
  id: 'svt-1e-variation-genetique-sante',
  matiere: 'svt',
  titre: 'Variation génétique et santé',
  ordre: 9,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'Mutations et maladies génétiques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Maladie génétique',
          contenu: `Une <strong>maladie génétique</strong> résulte d'une <strong>mutation</strong> affectant un ou plusieurs gènes.<br>Elle peut être <strong>héréditaire</strong> (transmise par les gamètes) si la mutation touche les cellules germinales, ou apparaître <strong>de novo</strong>. Exemples : drépanocytose, mucoviscidose, myopathie.` },
        { type: 'def', label: 'DEF', titre: 'Dominance et récessivité',
          contenu: `Un allèle <strong>dominant</strong> s'exprime dès qu'il est présent en un seul exemplaire ; un allèle <strong>récessif</strong> ne s'exprime que s'il est présent en <strong>double</strong> (individu homozygote).<br>Une maladie <strong>récessive</strong> ne se manifeste donc que chez l'homozygote ; les hétérozygotes sont des <strong>porteurs sains</strong> (transmetteurs).` },
        { type: 'prop', label: 'PROP', titre: 'Hérédité et prédisposition',
          contenu: `Certaines maladies sont <strong>monogéniques</strong> (un seul gène, transmission mendélienne).<br>D'autres sont <strong>multifactorielles</strong> : plusieurs gènes (<strong>prédisposition</strong> génétique) et des facteurs d'<strong>environnement</strong> (alimentation, tabac...) interviennent. Avoir une prédisposition n'implique pas de développer la maladie.` },
        { type: 'ex', label: 'EX', titre: 'Analyser un arbre généalogique',
          contenu: `<strong>Énoncé</strong> : deux parents sains ont un enfant atteint d'une maladie. Que peut-on déduire sur l'allèle morbide ?<br><strong>Résolution</strong> : des parents sains transmettant la maladie sont nécessairement <strong>hétérozygotes</strong> (porteurs sains). L'allèle responsable est donc <strong>récessif</strong> : l'enfant atteint a reçu l'allèle morbide de chacun des deux parents.` },
      ]
    },
    {
      titre: 'Patrimoine génétique et cancers',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cancer : prolifération incontrôlée',
          contenu: `Un <strong>cancer</strong> résulte de l'accumulation de <strong>mutations</strong> dans une cellule, qui perd le contrôle de sa division et <strong>prolifère de façon incontrôlée</strong>, formant une tumeur.<br>Les mutations touchent des gènes contrôlant le cycle cellulaire (proto-oncogènes, gènes suppresseurs de tumeur).` },
        { type: 'def', label: 'DEF', titre: 'Facteurs de risque',
          contenu: `Le développement d'un cancer est favorisé par des <strong>agents mutagènes</strong> de l'environnement et du mode de vie :<br><ul><li>tabac, alcool</li><li>UV, radiations, certains polluants</li><li>certains virus</li></ul>Une <strong>prédisposition génétique héréditaire</strong> peut aussi augmenter le risque (ex. mutations BRCA et cancer du sein).` },
        { type: 'ex', label: 'EX', titre: 'Interpréter des données épidémiologiques',
          contenu: `<strong>Énoncé</strong> : le risque de cancer du poumon est multiplié par 15 chez les fumeurs. Que conclure ?<br><strong>Résolution</strong> : ces données <strong>épidémiologiques</strong> montrent une forte corrélation entre tabac et cancer. Le tabac contient des agents <strong>mutagènes</strong> qui multiplient les mutations des cellules pulmonaires : c'est un facteur de risque majeur, en partie évitable.` },
      ]
    },
    {
      titre: 'Altérations du génome et thérapies',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Mutations germinales et somatiques',
          contenu: `Une mutation <strong>germinale</strong> (cellules reproductrices) est <strong>transmissible</strong> à la descendance et présente dans toutes les cellules de l'individu.<br>Une mutation <strong>somatique</strong> (cellule du corps) n'est <strong>pas transmise</strong> à la descendance ; elle reste limitée au clone de cellules issu de la cellule mutée (rôle dans les cancers).` },
        { type: 'prop', label: 'PROP', titre: 'Prévention et dépistage',
          contenu: `La connaissance des facteurs de risque permet la <strong>prévention</strong> (limiter l'exposition aux mutagènes : tabac, UV) et le <strong>dépistage précoce</strong> de certaines maladies ou cancers.<br>Le dépistage augmente les chances de guérison en intervenant avant la propagation de la maladie.` },
        { type: 'ex', label: 'EX', titre: 'Distinguer héréditaire et non héréditaire',
          contenu: `<strong>Énoncé</strong> : une cellule de peau exposée aux UV mute et devient cancéreuse. Cette mutation sera-t-elle transmise aux enfants ?<br><strong>Résolution</strong> : la cellule de peau est une cellule <strong>somatique</strong>. La mutation <strong>n'est pas transmise</strong> à la descendance ; elle ne concerne que le clone de cellules de la peau. Seules les mutations des cellules germinales sont héréditaires.` },
      ]
    }
  ]
},

{
  id: 'svt-1e-systeme-immunitaire',
  matiere: 'svt',
  titre: 'Le fonctionnement du système immunitaire',
  ordre: 10,
  filiere: '1ere-gen',
  enrich: false,
  sections: [
    {
      titre: 'L\'immunité innée',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Immunité innée',
          contenu: `L'<strong>immunité innée</strong> est la première ligne de défense de l'organisme. Elle est <strong>immédiate</strong>, <strong>non spécifique</strong> (agit contre tout intrus) et <strong>présente dès la naissance</strong>.<br>Elle repose notamment sur des <strong>cellules phagocytaires</strong> et déclenche la réaction inflammatoire.` },
        { type: 'def', label: 'DEF', titre: 'Réaction inflammatoire',
          contenu: `La <strong>réaction inflammatoire</strong> est une réponse innée localisée, reconnaissable à quatre signes : <strong>rougeur, chaleur, gonflement (œdème) et douleur</strong>.<br>Elle est déclenchée par des cellules sentinelles qui libèrent des <strong>médiateurs chimiques</strong> attirant les cellules immunitaires vers le site infecté.` },
        { type: 'prop', label: 'PROP', titre: 'La phagocytose',
          contenu: `La <strong>phagocytose</strong> est l'ingestion et la destruction d'un micro-organisme par une cellule phagocytaire (macrophage, granulocyte).<br>Étapes : <strong>adhésion</strong> au pathogène → <strong>ingestion</strong> (formation d'une vésicule) → <strong>digestion</strong> par des enzymes → élimination des débris. C'est un mécanisme clé de l'immunité innée.` },
        { type: 'ex', label: 'EX', titre: 'Reconnaître une réaction inflammatoire',
          contenu: `<strong>Énoncé</strong> : après une écharde, la zone devient rouge, chaude, gonflée et douloureuse. De quelle réaction s'agit-il ?<br><strong>Résolution</strong> : ces quatre signes (rougeur, chaleur, gonflement, douleur) sont les signes caractéristiques de la <strong>réaction inflammatoire</strong>, première réponse de l'immunité innée, immédiate et non spécifique.` },
      ]
    },
    {
      titre: 'L\'immunité adaptative : les acteurs',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Immunité adaptative',
          contenu: `L'<strong>immunité adaptative</strong> est une réponse <strong>spécifique</strong> d'un antigène donné, plus <strong>lente</strong> à se mettre en place et dotée d'une <strong>mémoire</strong>.<br>Elle fait intervenir les <strong>lymphocytes</strong> (T et B), capables de reconnaître spécifiquement un antigène grâce à leurs récepteurs.` },
        { type: 'def', label: 'DEF', titre: 'Antigène et anticorps',
          contenu: `Un <strong>antigène</strong> est une molécule reconnue comme <strong>étrangère</strong> par le système immunitaire (souvent à la surface d'un pathogène).<br>Un <strong>anticorps</strong> est une protéine produite par les lymphocytes B (plasmocytes), capable de se fixer <strong>spécifiquement</strong> à un antigène pour le neutraliser : formation de complexes immuns éliminés par phagocytose.` },
        { type: 'def', label: 'DEF', titre: 'Lymphocytes B et T',
          contenu: `Deux grandes catégories de lymphocytes :<br><ul><li><strong>Lymphocytes B</strong> : à l'origine des <strong>plasmocytes</strong> qui produisent les anticorps (réponse à <strong>médiation humorale</strong>).</li><li><strong>Lymphocytes T</strong> : les LT cytotoxiques détruisent les cellules infectées (réponse à <strong>médiation cellulaire</strong>) ; les LT auxiliaires (LT4) coordonnent la réponse.</li></ul>` },
      ]
    },
    {
      titre: 'L\'immunité adaptative : le déroulement',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Sélection clonale et amplification',
          contenu: `Parmi un répertoire immense de lymphocytes, seuls ceux dont le récepteur reconnaît l'antigène sont <strong>sélectionnés</strong> (sélection clonale).<br>Ils se <strong>multiplient</strong> (amplification clonale) puis se <strong>différencient</strong> en cellules effectrices (plasmocytes, LT cytotoxiques) et en cellules <strong>mémoire</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Mémoire immunitaire',
          contenu: `Après une première rencontre avec un antigène, l'organisme conserve des <strong>lymphocytes mémoire</strong>.<br>Lors d'un <strong>second contact</strong>, la réponse est <strong>plus rapide, plus intense et plus durable</strong> (réponse secondaire) : le pathogène est éliminé avant l'apparition des symptômes. C'est le fondement de la <strong>vaccination</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Vaccination',
          contenu: `La <strong>vaccination</strong> consiste à introduire un antigène inoffensif (pathogène atténué, inactivé ou fragment) pour provoquer une réponse adaptative <strong>sans la maladie</strong>.<br>Elle crée une <strong>mémoire immunitaire</strong> : lors d'une infection réelle, l'organisme réagit immédiatement. La vaccination protège l'individu et, à grande échelle, la population (immunité collective).` },
        { type: 'ex', label: 'EX', titre: 'Comparer réponse primaire et secondaire',
          contenu: `<strong>Énoncé</strong> : lors d'un premier contact, le taux d'anticorps monte lentement après 10 jours ; lors d'un second contact, il monte fortement en 3 jours. Interpréter.<br><strong>Résolution</strong> : la réponse <strong>secondaire</strong> est plus rapide et plus intense grâce aux <strong>lymphocytes mémoire</strong> formés lors du premier contact. Ceci illustre la <strong>mémoire immunitaire</strong>, principe sur lequel repose la vaccination.` },
      ]
    },
    {
      titre: 'Le phénotype immunitaire au cours de la vie',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Phénotype immunitaire',
          contenu: `Le <strong>phénotype immunitaire</strong> est l'ensemble des lymphocytes mémoire et des défenses spécifiques qu'un individu possède à un moment donné.<br>Il <strong>évolue au cours de la vie</strong> au gré des <strong>infections rencontrées</strong> et des <strong>vaccinations</strong> reçues : il est propre à l'histoire de chacun.` },
        { type: 'prop', label: 'PROP', titre: 'Rôle des LT4 et immunodéficience',
          contenu: `Les <strong>lymphocytes T auxiliaires (LT4)</strong> sont les chefs d'orchestre de la réponse adaptative : ils activent les LB et les LT cytotoxiques.<br>Le <strong>VIH</strong> détruit les LT4 : sans eux, la réponse adaptative s'effondre, conduisant au <strong>SIDA</strong> et à des infections opportunistes. Cela illustre le rôle central des LT4.` },
        { type: 'ex', label: 'EX', titre: 'Expliquer l\'effet du VIH',
          contenu: `<strong>Énoncé</strong> : chez une personne séropositive non traitée, le taux de LT4 chute fortement au fil des années, et des infections opportunistes apparaissent. Expliquer.<br><strong>Résolution</strong> : le VIH infecte et détruit les <strong>LT4</strong>, indispensables à la coordination de l'immunité adaptative. Leur disparition empêche les réponses immunitaires efficaces : l'organisme ne se défend plus contre des microbes habituellement bénins (infections opportunistes du SIDA).` },
      ]
    }
  ]
}

]
