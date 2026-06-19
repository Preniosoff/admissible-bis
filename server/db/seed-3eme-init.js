// Seed 3ème — appelé au démarrage du serveur si les données n'existent pas encore
// Source : Cours3eme.pdf (81 pages, 14 chapitres)

const FILIERE  = '3eme';
const MATIERE  = 'ma';

const CHAPITRES = [
  { id: 'ma-3e-arith',     titre: 'Arithmétique' },
  { id: 'ma-3e-pytha',     titre: 'Outils pour le triangle rectangle' },
  { id: 'ma-3e-calclit1',  titre: 'Calcul littéral (1) — Développements et factorisations' },
  { id: 'ma-3e-thales',    titre: 'Thalès' },
  { id: 'ma-3e-fonc',      titre: 'Notions de fonction' },
  { id: 'ma-3e-trisiml',   titre: 'Triangles semblables' },
  { id: 'ma-3e-stats',     titre: 'Statistiques' },
  { id: 'ma-3e-calclit2',  titre: 'Calcul littéral (2) — Équations et inéquations' },
  { id: 'ma-3e-fonlin',    titre: 'Fonctions linéaires et proportionnalité' },
  { id: 'ma-3e-geom3d',    titre: 'Géométrie dans l\'espace' },
  { id: 'ma-3e-proba',     titre: 'Probabilités' },
  { id: 'ma-3e-agrand',    titre: 'Agrandissements et réductions' },
  { id: 'ma-3e-fonaffine', titre: 'Fonctions affines' },
  { id: 'ma-3e-calcnum',   titre: 'Calculs numériques' },
];

const SECTIONS = {
// ─────────────────────────────────────────────────────────
'ma-3e-arith': [
  {
    titre: 'Diviseurs',
    cartes: [
      { type:'def', label:'DEF', titre:'Diviseur et multiple',
        contenu:'$b$ est un <strong>diviseur</strong> de $a$ (ou $a$ est un <strong>multiple</strong> de $b$) si la division de $a$ par $b$ est exacte, c\'est-à-dire si le reste est nul.<br>Notation : $b \\mid a$. Exemple : $7 \\mid 63$ car $63 = 7 \\times 9$.' },
      { type:'meth', label:'METH', titre:'Dresser la liste des diviseurs de $n$',
        contenu:'<strong>Étapes :</strong><br>1. Écrire $1$ à gauche et $n$ à droite.<br>2. Tester $2, 3, 4, \\ldots$ : si la division est exacte, noter le quotient en face.<br>3. S\'arrêter dès que le nombre testé apparaît déjà dans la colonne de droite.<br><em>Les diviseurs sont tous les nombres lus dans les deux colonnes.</em>' },
    ]
  },
  {
    titre: 'Nombres premiers',
    cartes: [
      { type:'def', label:'DEF', titre:'Nombre premier',
        contenu:'Un entier $n \\geq 2$ est <strong>premier</strong> s\'il admet exactement <strong>deux</strong> diviseurs : $1$ et $n$.<br>Premiers $< 100$ : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97$.<br>Attention : $1$ n\'est <em>pas</em> premier (un seul diviseur).' },
      { type:'prop', label:'PROP', titre:'Décomposition en facteurs premiers',
        contenu:'Tout entier $n \\geq 2$ se décompose de façon <strong>unique</strong> en produit de nombres premiers.<br>Exemple : $180 = 2^2 \\times 3^2 \\times 5$ &nbsp;·&nbsp; $1600 = 2^6 \\times 5^2$.' },
      { type:'meth', label:'METH', titre:'Décomposer $n$ en produit de facteurs premiers',
        contenu:'Diviser successivement par les premiers dans l\'ordre croissant ($2, 3, 5, 7, \\ldots$) jusqu\'à obtenir $1$.<br>Exemple : $180 \\div 2 = 90$, $\\div 2 = 45$, $\\div 3 = 15$, $\\div 3 = 5$, $\\div 5 = 1$<br>Donc $180 = 2^2 \\times 3^2 \\times 5$.' },
      { type:'prop', label:'PROP', titre:'Rendre une fraction irréductible',
        contenu:'Décomposer numérateur et dénominateur en facteurs premiers, puis simplifier les facteurs communs.<br>$$\\frac{1600}{180} = \\frac{2^6 \\times 5^2}{2^2 \\times 3^2 \\times 5} = \\frac{2^4 \\times 5}{3^2} = \\frac{80}{9}$$' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-pytha': [
  {
    titre: 'Théorème de Pythagore',
    cartes: [
      { type:'th', label:'TH', titre:'Théorème de Pythagore',
        contenu:'Si $ABC$ est un triangle <strong>rectangle en $A$</strong>, alors $$BC^2 = AB^2 + AC^2$$ Le carré de l\'<em>hypoténuse</em> est égal à la somme des carrés des deux autres côtés.' },
      { type:'meth', label:'METH', titre:'Calculer l\'hypoténuse',
        contenu:'Identifier le triangle rectangle et l\'angle droit, puis :<br>$$BC^2 = AB^2 + AC^2 \\implies BC = \\sqrt{AB^2 + AC^2}$$Exemple : $AB = 3$ cm, $AC = 5$ cm $\\Rightarrow BC = \\sqrt{9+25} = \\sqrt{34} \\approx 5{,}8$ cm.' },
      { type:'meth', label:'METH', titre:'Calculer un côté de l\'angle droit',
        contenu:'Si l\'hypoténuse $BC$ et le côté $AB$ sont connus :<br>$$AC^2 = BC^2 - AB^2 \\implies AC = \\sqrt{BC^2 - AB^2}$$Toujours soustraire : grand carré − petit carré.' },
      { type:'th', label:'TH', titre:'Réciproque du théorème de Pythagore',
        contenu:'Si dans un triangle $ABC$, l\'égalité $BC^2 = AB^2 + AC^2$ est vérifiée<br>(avec $BC$ le plus grand côté), alors $ABC$ est <strong>rectangle en $A$</strong>.' },
      { type:'meth', label:'METH', titre:'Montrer qu\'un triangle est (ou non) rectangle',
        contenu:'1. Identifier le plus grand côté, ex. $BC$.<br>2. Calculer $BC^2$ d\'une part, $AB^2 + AC^2$ d\'autre part.<br>• Égalité → d\'après la réciproque, $ABC$ est <strong>rectangle en $A$</strong>.<br>• Inégalité → d\'après la contraposée, $ABC$ n\'est <strong>pas rectangle</strong>.' },
    ]
  },
  {
    titre: 'Trigonométrie dans le triangle rectangle',
    cartes: [
      { type:'def', label:'DEF', titre:'Cosinus, sinus, tangente',
        contenu:'Dans un triangle rectangle, pour un angle aigu $\\hat{A}$ :<br>$$\\cos \\hat{A} = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} \\quad \\sin \\hat{A} = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} \\quad \\tan \\hat{A} = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$$<em>Moyen mnémotechnique : <strong>SOH-CAH-TOA</strong></em>' },
      { type:'form', label:'FORM', titre:'Formules dans un triangle $ABC$ rectangle en $C$',
        contenu:'$$\\cos \\hat{A} = \\frac{AC}{AB} \\qquad \\sin \\hat{A} = \\frac{BC}{AB} \\qquad \\tan \\hat{A} = \\frac{BC}{AC}$$Propriété : $\\cos^2 \\hat{A} + \\sin^2 \\hat{A} = 1$' },
      { type:'meth', label:'METH', titre:'Calculer un côté ou un angle inconnu',
        contenu:'<strong>Trouver un côté :</strong> choisir la formule qui relie côté inconnu et angle connu, puis résoudre.<br>Ex. $\\cos \\hat{A} = \\frac{AC}{AB} \\Rightarrow AC = AB \\times \\cos \\hat{A}$<br><strong>Trouver un angle :</strong> calculer le rapport, puis utiliser $\\cos^{-1}$, $\\sin^{-1}$ ou $\\tan^{-1}$ à la calculatrice.' },
      { type:'prop', label:'PROP', titre:'Angles complémentaires dans un triangle rectangle',
        contenu:'Si $\\hat{C} = 90°$, alors $\\hat{A} + \\hat{B} = 90°$ (<em>complémentaires</em>).<br>Conséquences : $\\cos \\hat{A} = \\sin \\hat{B}$ et $\\sin \\hat{A} = \\cos \\hat{B}$.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-calclit1': [
  {
    titre: 'Développements',
    cartes: [
      { type:'meth', label:'METH', titre:'Développer $a(bx + c)$',
        contenu:'Multiplier $a$ par chaque terme :<br>$$a(bx + c) = abx + ac$$Exemple : $5(8x + 2) = 40x + 10$.' },
      { type:'meth', label:'METH', titre:'Développer $(a + b)(c + d)$',
        contenu:'Chaque terme du premier facteur multiplie chaque terme du second :<br>$$(a+b)(c+d) = ac + ad + bc + bd$$Exemple : $(3x+1)(2x-5) = 6x^2 - 15x + 2x - 5 = 6x^2 - 13x - 5$.' },
    ]
  },
  {
    titre: 'Identités remarquables',
    cartes: [
      { type:'form', label:'FORM', titre:'Trois identités remarquables',
        contenu:'$$(a+b)^2 = a^2 + 2ab + b^2$$<br>$$(a-b)^2 = a^2 - 2ab + b^2$$<br>$$(a+b)(a-b) = a^2 - b^2$$<em>À connaître dans les deux sens (développement et factorisation).</em>' },
      { type:'meth', label:'METH', titre:'Reconnaître et appliquer les identités remarquables',
        contenu:'<strong>Développer :</strong> reconnaître $(\ldots)^2$ ou $(\ldots + \ldots)(\ldots - \ldots)$.<br>Ex. $(2x+3)^2 = 4x^2 + 12x + 9$.<br><strong>Factoriser :</strong> reconnaître $a^2 - b^2$, $a^2 \\pm 2ab + b^2$.<br>Ex. $9x^2 - 25 = (3x-5)(3x+5)$.' },
    ]
  },
  {
    titre: 'Factorisation',
    cartes: [
      { type:'meth', label:'METH', titre:'Factoriser par un facteur commun',
        contenu:'Mettre en évidence le facteur commun à tous les termes :<br>$$ab + ac = a(b+c)$$Exemple : $6x^2 + 15x = 3x(2x + 5)$.' },
      { type:'meth', label:'METH', titre:'Factoriser par une expression commune',
        contenu:'Repérer le facteur commun dans les différents termes :<br>$A = (4x+1)(3x-2) - (5x-7)(4x+1)$<br>$= (4x+1)[(3x-2) - (5x-7)]$<br>$= (4x+1)(-2x+5)$' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-thales': [
  {
    titre: 'Homothéties',
    cartes: [
      { type:'def', label:'DEF', titre:'Homothétie de centre $O$ et de rapport $k$',
        contenu:'L\'<strong>homothétie</strong> de centre $O$ et de rapport $k$ associe à tout point $M$ le point $M\'$ tel que $\\overrightarrow{OM\'} = k\\,\\overrightarrow{OM}$.<br>• $k > 0$ : $M\'$ du même côté de $O$ que $M$.<br>• $k < 0$ : $M\'$ du côté opposé.' },
      { type:'prop', label:'PROP', titre:'Effets d\'une homothétie de rapport $k$',
        contenu:'• <strong>Longueurs</strong> multipliées par $|k|$.<br>• <strong>Aires</strong> multipliées par $k^2$.<br>• <strong>Volumes</strong> multipliés par $k^3$.<br>• <strong>Angles conservés</strong>, <strong>parallélisme conservé</strong>.' },
    ]
  },
  {
    titre: 'Théorème de Thalès',
    cartes: [
      { type:'th', label:'TH', titre:'Théorème de Thalès',
        contenu:'Si $(DE) \\parallel (BC)$ avec $D \\in [AB]$ et $E \\in [AC]$, alors :<br>$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$<em>Les droites parallèles "découpent des rapports égaux" sur les sécantes.</em>' },
      { type:'meth', label:'METH', titre:'Calculer une longueur avec Thalès',
        contenu:'1. Vérifier la configuration (droites parallèles coupant deux sécantes).<br>2. Écrire l\'égalité des rapports.<br>3. Identifier les longueurs connues et inconnues.<br>4. Résoudre par produit en croix.' },
      { type:'th', label:'TH', titre:'Réciproque du théorème de Thalès',
        contenu:'Si $D \\in [AB]$, $E \\in [AC]$ et $$\\frac{AD}{AB} = \\frac{AE}{AC}$$alors $(DE) \\parallel (BC)$.' },
      { type:'th', label:'TH', titre:'Contraposée du théorème de Thalès',
        contenu:'Si $D \\in [AB]$, $E \\in [AC]$ et $$\\frac{AD}{AB} \\neq \\frac{AE}{AC}$$alors $(DE)$ et $(BC)$ <strong>ne sont pas parallèles</strong>.' },
      { type:'meth', label:'METH', titre:'Montrer que deux droites sont (ou non) parallèles',
        contenu:'Calculer les rapports $\\dfrac{AD}{AB}$ et $\\dfrac{AE}{AC}$.<br>• Égaux → réciproque : $(DE) \\parallel (BC)$.<br>• Différents → contraposée : non parallèles.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-fonc': [
  {
    titre: 'Définitions',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction, image, antécédent',
        contenu:'Une <strong>fonction</strong> $f$ associe à chaque nombre $x$ (l\'<strong>antécédent</strong>) un unique nombre $f(x)$ (l\'<strong>image</strong>).<br>Notation : $f : x \\longmapsto f(x)$, ou $f(x) = \\ldots$' },
      { type:'def', label:'DEF', titre:'Représentations d\'une fonction',
        contenu:'Une fonction peut être donnée par :<br>• une <strong>expression algébrique</strong> : ex. $f(x) = 3x^2 - 2x + 1$<br>• un <strong>tableau de valeurs</strong><br>• une <strong>courbe représentative</strong> dans un repère' },
    ]
  },
  {
    titre: 'Calcul et lecture de valeurs',
    cartes: [
      { type:'meth', label:'METH', titre:'Calculer une image à partir d\'une expression',
        contenu:'Remplacer $x$ par la valeur donnée (substitution).<br>Exemple : $f(x) = 3x^2 - 2x + 1$, calculer $f(5)$ :<br>$f(5) = 3 \\times 25 - 2 \\times 5 + 1 = 75 - 10 + 1 = 66$.' },
      { type:'meth', label:'METH', titre:'Lire image et antécédent dans un tableau',
        contenu:'• <strong>Image de $a$</strong> : chercher $a$ sur la ligne des $x$, lire $f(a)$ en dessous.<br>• <strong>Antécédent de $b$</strong> : chercher $b$ sur la ligne des $f(x)$, lire $x$ au-dessus.<br><em>Un antécédent peut ne pas exister ou ne pas être unique.</em>' },
      { type:'meth', label:'METH', titre:'Lire image et antécédent sur une courbe',
        contenu:'• <strong>Image de $a$</strong> : depuis $x = a$ sur l\'axe des abscisses → monter verticalement jusqu\'à la courbe → lire l\'ordonnée.<br>• <strong>Antécédent de $b$</strong> : depuis $y = b$ → aller horizontalement jusqu\'à la courbe → lire l\'abscisse.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-trisiml': [
  {
    titre: 'Triangles semblables',
    cartes: [
      { type:'def', label:'DEF', titre:'Triangles semblables',
        contenu:'Deux triangles sont <strong>semblables</strong> si leurs angles sont deux à deux égaux.<br>Si $\\triangle ABC \\sim \\triangle DEF$ : $\\hat{A} = \\hat{D}$, $\\hat{B} = \\hat{E}$, $\\hat{C} = \\hat{F}$.<br>Les côtés en face d\'angles égaux sont appelés <strong>côtés homologues</strong>.' },
      { type:'prop', label:'PROP', titre:'Côtés homologues proportionnels',
        contenu:'Si $\\triangle ABC \\sim \\triangle DEF$, alors :<br>$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$$où $k$ est le <strong>rapport de similitude</strong>.' },
      { type:'meth', label:'METH', titre:'Calculer une longueur par similitude',
        contenu:'1. Montrer la similitude (angles égaux deux à deux).<br>2. Identifier les sommets homologues.<br>3. Écrire la proportion, puis résoudre par produit en croix.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-stats': [
  {
    titre: 'Organisation des données',
    cartes: [
      { type:'def', label:'DEF', titre:'Effectif et fréquence',
        contenu:'• L\'<strong>effectif</strong> d\'une valeur : nombre de fois qu\'elle apparaît.<br>• L\'<strong>effectif total</strong> $N$ : somme de tous les effectifs.<br>• La <strong>fréquence</strong> : effectif divisé par $N$ (valeur entre $0$ et $1$).' },
      { type:'def', label:'DEF', titre:'Effectifs cumulés croissants (ECC)',
        contenu:'Les <strong>ECC</strong> s\'obtiennent en additionnant les effectifs les uns après les autres dans l\'ordre croissant des valeurs.<br>L\'ECC d\'une valeur $v$ donne le nombre de données inférieures ou égales à $v$.' },
    ]
  },
  {
    titre: 'Paramètres statistiques',
    cartes: [
      { type:'def', label:'DEF', titre:'Étendue',
        contenu:'L\'<strong>étendue</strong> est la différence entre la valeur maximale et la valeur minimale :<br>$$\\text{étendue} = \\text{max} - \\text{min}$$Elle mesure la dispersion globale.' },
      { type:'def', label:'DEF', titre:'Médiane',
        contenu:'La <strong>médiane</strong> partage la série <em>ordonnée</em> en deux groupes de même effectif.<br>• $N$ impair : valeur de rang $\\dfrac{N+1}{2}$.<br>• $N$ pair : moyenne des valeurs de rangs $\\dfrac{N}{2}$ et $\\dfrac{N}{2}+1$.' },
      { type:'def', label:'DEF', titre:'Quartiles $Q_1$ et $Q_3$',
        contenu:'• <strong>$Q_1$</strong> : plus petite valeur pour laquelle au moins $25\\%$ des données lui sont $\\leq$.<br>• <strong>$Q_3$</strong> : plus petite valeur pour laquelle au moins $75\\%$ des données lui sont $\\leq$.<br>• <strong>Écart interquartile</strong> : $Q_3 - Q_1$.' },
      { type:'def', label:'DEF', titre:'Moyenne',
        contenu:'$$\\bar{x} = \\frac{\\displaystyle\\sum_i n_i x_i}{N} = \\frac{n_1 x_1 + n_2 x_2 + \\cdots + n_k x_k}{N}$$où $n_i$ est l\'effectif de la valeur $x_i$ et $N = \\sum n_i$.' },
      { type:'meth', label:'METH', titre:'Calculer la moyenne pondérée',
        contenu:'Multiplier chaque valeur par son effectif, additionner, puis diviser par $N$.<br>Exemple : valeurs $10, 15, 20, 25$ avec effectifs $4, 7, 9, 3$ ($N = 23$) :<br>$$\\bar{x} = \\frac{10 \\times 4 + 15 \\times 7 + 20 \\times 9 + 25 \\times 3}{23} = \\frac{400}{23} \\approx 17{,}4$$' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-calclit2': [
  {
    titre: 'Équations',
    cartes: [
      { type:'prop', label:'PROP', titre:'Règle du produit nul',
        contenu:'Pour tous réels $a$ et $b$ :<br>$$ab = 0 \\iff a = 0 \\text{ ou } b = 0$$<em>Un produit est nul si et seulement si l\'un de ses facteurs est nul.</em>' },
      { type:'meth', label:'METH', titre:'Résoudre une équation-produit',
        contenu:'Mettre l\'équation sous la forme $A \\times B = 0$, puis :<br>$A = 0$ ou $B = 0$<br>Exemple : $(4x+8)(3x-21)=0$<br>$\\Leftrightarrow x = -2$ ou $x = 7$' },
      { type:'prop', label:'PROP', titre:'Équation $x^2 = a$',
        contenu:'• $a > 0$ : deux solutions $\\sqrt{a}$ et $-\\sqrt{a}$.<br>• $a = 0$ : une solution $x = 0$.<br>• $a < 0$ : <strong>aucune solution</strong> réelle.<br>Exemple : $x^2 = 49 \\Rightarrow x = 7$ ou $x = -7$.' },
      { type:'meth', label:'METH', titre:'Résoudre une équation du premier degré',
        contenu:'Objectif : isoler $x$ seul d\'un côté.<br>Règles : on peut ajouter/soustraire le même nombre aux deux membres, ou multiplier/diviser par un même nombre <strong>non nul</strong>.<br>Étapes : développer → termes en $x$ d\'un côté, nombres de l\'autre → diviser.' },
    ]
  },
  {
    titre: 'Inéquations',
    cartes: [
      { type:'def', label:'DEF', titre:'Inéquation',
        contenu:'Une <strong>inéquation</strong> est une inégalité dépendant d\'une variable $x$. L\'<strong>ensemble solution</strong> est l\'ensemble des valeurs de $x$ qui la vérifient (souvent un intervalle).' },
      { type:'meth', label:'METH', titre:'Résoudre une inéquation du premier degré',
        contenu:'Mêmes règles que les équations, avec une règle supplémentaire :<br><strong>Multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité.</strong><br>Exemple : $-3x < 6 \\Rightarrow x > -2$.<br>Solution : $x \\in ]-2 ; +\\infty[$.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-fonlin': [
  {
    titre: 'Fonctions linéaires',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction linéaire',
        contenu:'Une <strong>fonction linéaire</strong> est de la forme $f(x) = ax$ ($a \\in \\mathbb{R}$, $a$ appelé <strong>coefficient</strong>).<br>Sa courbe représentative est une <strong>droite passant par l\'origine</strong>.' },
      { type:'prop', label:'PROP', titre:'Représentation graphique d\'une fonction linéaire',
        contenu:'La courbe de $f(x) = ax$ est la droite $y = ax$ passant par $O(0, 0)$.<br>• $a > 0$ : droite croissante.<br>• $a < 0$ : droite décroissante.' },
      { type:'meth', label:'METH', titre:'Déterminer le coefficient d\'une fonction linéaire',
        contenu:'Si $f(c) = d$ (avec $c \\neq 0$), alors $a = \\dfrac{d}{c}$.<br>Exemple : $f(5) = 6 \\Rightarrow a = \\dfrac{6}{5} \\Rightarrow f(x) = \\dfrac{6}{5}x$.' },
    ]
  },
  {
    titre: 'Proportionnalité',
    cartes: [
      { type:'def', label:'DEF', titre:'Grandeurs proportionnelles',
        contenu:'Deux grandeurs sont <strong>proportionnelles</strong> si l\'on peut passer de l\'une à l\'autre en multipliant par un même nombre $k$ (le <strong>coefficient de proportionnalité</strong>).<br>Dans le tableau : 2e ligne = $k \\times$ 1re ligne.' },
      { type:'prop', label:'PROP', titre:'Lien avec les fonctions linéaires',
        contenu:'Toute situation de proportionnalité de coefficient $k$ est modélisée par $f(x) = kx$.<br>Exemple : prix de $x$ baguettes à $0{,}90$€ l\'une : $f(x) = 0{,}90x$.' },
      { type:'meth', label:'METH', titre:'Vérifier et compléter un tableau de proportionnalité',
        contenu:'<strong>Vérifier :</strong> les quotients (2e ligne ÷ 1re ligne) doivent tous être égaux.<br><strong>Compléter :</strong> utiliser le coefficient $k$ ou le produit en croix : $\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow ad = bc$.' },
      { type:'def', label:'DEF', titre:'Inversement proportionnelles',
        contenu:'Deux grandeurs sont <strong>inversement proportionnelles</strong> si leur produit est constant : $x \\times y = k$, soit $y = \\dfrac{k}{x}$.<br>Exemple : vitesse et temps pour une distance fixée ($v \\times t = d$).' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-geom3d': [
  {
    titre: 'Sphères et boules',
    cartes: [
      { type:'def', label:'DEF', titre:'Sphère et boule',
        contenu:'• <strong>Sphère</strong> de centre $O$, rayon $r$ : ensemble des points à distance <em>égale</em> à $r$ de $O$ (surface).<br>• <strong>Boule</strong> : surface + intérieur (distance $\\leq r$).' },
      { type:'form', label:'FORM', titre:'Aire de la sphère et volume de la boule',
        contenu:'$$\\mathcal{A}_{\\text{sphère}} = 4\\pi r^2 \\qquad \\mathcal{V}_{\\text{boule}} = \\frac{4}{3}\\pi r^3$$' },
    ]
  },
  {
    titre: 'Volumes des solides usuels',
    cartes: [
      { type:'form', label:'FORM', titre:'Volumes — prisme, cylindre',
        contenu:'$$\\mathcal{V}_{\\text{prisme}} = \\mathcal{A}_{\\text{base}} \\times h$$$$\\mathcal{V}_{\\text{cylindre}} = \\pi r^2 h$$<em>Pour le pavé droit $L \\times l \\times h$ : $\\mathcal{V} = L \\cdot l \\cdot h$.</em>' },
      { type:'form', label:'FORM', titre:'Volumes — pyramide et cône',
        contenu:'$$\\mathcal{V}_{\\text{pyramide}} = \\frac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h \\qquad \\mathcal{V}_{\\text{cône}} = \\frac{1}{3} \\pi r^2 h$$Le coefficient $\\dfrac{1}{3}$ s\'applique à tout solide à <em>sommet</em>.' },
    ]
  },
  {
    titre: 'Sections de solides',
    cartes: [
      { type:'prop', label:'PROP', titre:'Section d\'une pyramide par un plan parallèle à la base',
        contenu:'Si on coupe à la hauteur $h\'$ (hauteur totale $h$), le rapport de similitude est $k = \\dfrac{h\'}{h}$.<br>• Aire de la section : $k^2 \\times \\mathcal{A}_{\\text{base}}$.<br>• La section est semblable à la base (même forme, angles conservés).' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-proba': [
  {
    titre: 'Vocabulaire',
    cartes: [
      { type:'def', label:'DEF', titre:'Expérience aléatoire, univers, issue',
        contenu:'• <strong>Expérience aléatoire</strong> : résultat imprévisible.<br>• <strong>Univers</strong> $\\Omega$ : ensemble de toutes les issues possibles.<br>• <strong>Issue</strong> : résultat élémentaire.<br>• <strong>Événement</strong> $A$ : ensemble d\'issues ($A \\subseteq \\Omega$).' },
      { type:'def', label:'DEF', titre:'Événements remarquables',
        contenu:'• <strong>Certain</strong> : $\\Omega$ (se réalise toujours).<br>• <strong>Impossible</strong> : $\\emptyset$ (ne se réalise jamais).<br>• <strong>Contraire</strong> de $A$ : $\\bar{A}$ = issues n\'appartenant pas à $A$.' },
    ]
  },
  {
    titre: 'Calcul de probabilités',
    cartes: [
      { type:'def', label:'DEF', titre:'Probabilité',
        contenu:'La <strong>probabilité</strong> de $A$ est un réel $p(A) \\in [0, 1]$.<br>En cas d\'<strong>équiprobabilité</strong> (toutes les issues sont équiprobables) :<br>$$p(A) = \\frac{\\text{nombre d\'issues favorables à } A}{\\text{nombre total d\'issues}}$$' },
      { type:'prop', label:'PROP', titre:'Propriétés des probabilités',
        contenu:'• $0 \\leq p(A) \\leq 1$.<br>• $p(\\Omega) = 1$ &nbsp;·&nbsp; $p(\\emptyset) = 0$.<br>• <strong>Événement contraire :</strong> $p(\\bar{A}) = 1 - p(A)$<br>• Si $A \\cap B = \\emptyset$ : $p(A \\cup B) = p(A) + p(B)$.' },
    ]
  },
  {
    titre: 'Expériences à plusieurs épreuves',
    cartes: [
      { type:'meth', label:'METH', titre:'Arbre de probabilités',
        contenu:'1. Dessiner l\'arbre avec une branche par issue à chaque étape.<br>2. Inscrire la probabilité sur chaque branche.<br>3. Probabilité d\'un chemin = <strong>produit</strong> des probabilités des branches.<br>4. Probabilité d\'un événement = <strong>somme</strong> des probabilités des chemins favorables.' },
      { type:'prop', label:'PROP', titre:'Vérification par l\'arbre',
        contenu:'La somme des probabilités des branches issues d\'un même nœud vaut $1$.<br>La somme des probabilités de toutes les feuilles vaut $1$.<br>Ces propriétés permettent de vérifier ou retrouver une probabilité manquante.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-agrand': [
  {
    titre: 'Agrandissements et réductions',
    cartes: [
      { type:'def', label:'DEF', titre:'Agrandissement, réduction, rapport $k$',
        contenu:'En multipliant toutes les longueurs d\'une figure $F$ par un réel $k > 0$, on obtient $F\'$.<br>• $k > 1$ : <strong>agrandissement</strong>.<br>• $k < 1$ : <strong>réduction</strong>.<br>$k$ est le <strong>rapport d\'agrandissement/réduction</strong>.' },
      { type:'prop', label:'PROP', titre:'Conservation et transformation',
        contenu:'• <strong>Angles conservés</strong> (figures semblables).<br>• <strong>Parallélisme conservé</strong>.<br>• <strong>Aires</strong> multipliées par $k^2$.<br>• <strong>Volumes</strong> multipliés par $k^3$.<br>Exemple : $k = 3$ → aire $\\times 9$, volume $\\times 27$.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-fonaffine': [
  {
    titre: 'Définitions',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction affine',
        contenu:'Une <strong>fonction affine</strong> est de la forme $f(x) = ax + b$ ($a, b \\in \\mathbb{R}$).<br>• $a$ : <strong>coefficient directeur</strong> (pente).<br>• $b$ : <strong>ordonnée à l\'origine</strong>.<br>Cas particuliers : $b=0$ → linéaire ; $a=0$ → constante.' },
      { type:'prop', label:'PROP', titre:'Sens de variation',
        contenu:'Pour $f(x) = ax + b$ :<br>• $a > 0$ : $f$ est <strong>strictement croissante</strong>.<br>• $a < 0$ : $f$ est <strong>strictement décroissante</strong>.<br>• $a = 0$ : $f$ est <strong>constante</strong>.' },
    ]
  },
  {
    titre: 'Représentation graphique',
    cartes: [
      { type:'prop', label:'PROP', titre:'Droite représentative de $f(x) = ax + b$',
        contenu:'La courbe de $f(x) = ax + b$ est la <strong>droite $y = ax + b$</strong>.<br>• Elle coupe l\'axe des ordonnées en $(0, b)$.<br>• Le coefficient directeur : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$ pour deux points.' },
      { type:'meth', label:'METH', titre:'Tracer une droite à partir de son équation',
        contenu:'1. Choisir deux valeurs de $x$ (ex. $x = 0$ et $x = 1$).<br>2. Calculer les ordonnées correspondantes.<br>3. Placer les deux points dans le repère et tracer la droite.<br>Exemple : $y = 3x + 2$ → $(0, 2)$ et $(1, 5)$.' },
      { type:'meth', label:'METH', titre:'Trouver l\'équation d\'une droite passant par deux points',
        contenu:'Soient $A(x_A, y_A)$ et $B(x_B, y_B)$ :<br>1. $a = \\dfrac{y_B - y_A}{x_B - x_A}$.<br>2. $b = y_A - a x_A$.<br>3. Écrire $y = ax + b$.' },
      { type:'meth', label:'METH', titre:'Résoudre $f(x) = g(x)$ graphiquement',
        contenu:'Les solutions sont les <strong>abscisses des points d\'intersection</strong> des courbes de $f$ et $g$.<br>Pour deux fonctions affines, les droites se coupent en au plus un point.' },
    ]
  },
],
// ─────────────────────────────────────────────────────────
'ma-3e-calcnum': [
  {
    titre: 'Types de nombres',
    cartes: [
      { type:'def', label:'DEF', titre:'Ensembles de nombres',
        contenu:'• <strong>$\\mathbb{N}$</strong> : entiers naturels $0, 1, 2, \\ldots$<br>• <strong>$\\mathbb{Z}$</strong> : entiers relatifs $\\ldots, -2, -1, 0, 1, 2, \\ldots$<br>• <strong>Décimaux</strong> : fraction à dénominateur puissance de $10$.<br>• <strong>$\\mathbb{Q}$</strong> (rationnels) : $\\frac{p}{q}$ avec $p,q \\in \\mathbb{Z}$, $q \\neq 0$.<br>• <strong>Irrationnels</strong> : ex. $\\sqrt{2}$, $\\pi$.<br>• <strong>$\\mathbb{R}$</strong> (réels) : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.' },
      { type:'prop', label:'PROP', titre:'Critères de divisibilité',
        contenu:'• par $2$ : unités dans $\\{0,2,4,6,8\\}$.<br>• par $3$ : somme des chiffres divisible par $3$.<br>• par $5$ : unités dans $\\{0,5\\}$.<br>• par $9$ : somme des chiffres divisible par $9$.<br>• par $10$ : unités $= 0$.' },
      { type:'form', label:'FORM', titre:'Règles de priorité opératoire',
        contenu:'1. Calculs entre <strong>parenthèses</strong> (de l\'intérieur vers l\'extérieur).<br>2. <strong>Puissances et racines carrées</strong>.<br>3. <strong>Multiplications et divisions</strong> (de gauche à droite).<br>4. <strong>Additions et soustractions</strong> (de gauche à droite).' },
    ]
  },
  {
    titre: 'Puissances',
    cartes: [
      { type:'def', label:'DEF', titre:'Puissance $a^n$',
        contenu:'Pour $a \\in \\mathbb{R}$ et $n \\in \\mathbb{N}^*$ : $a^n = \\underbrace{a \\times \\cdots \\times a}_{n}$.<br>Conventions : $a^0 = 1$ ($a \\neq 0$) &nbsp;·&nbsp; $a^1 = a$ &nbsp;·&nbsp; $a^{-n} = \\dfrac{1}{a^n}$ ($a \\neq 0$).' },
      { type:'form', label:'FORM', titre:'Règles de calcul sur les puissances',
        contenu:'Pour $a \\neq 0$ et $m, n \\in \\mathbb{Z}$ :<br>$$a^m \\times a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n}$$$$\\left(a^m\\right)^n = a^{mn} \\qquad (ab)^n = a^n b^n$$' },
      { type:'form', label:'FORM', titre:'Notation scientifique',
        contenu:'Tout réel non nul s\'écrit $a \\times 10^n$ avec $1 \\leq |a| < 10$ et $n \\in \\mathbb{Z}$.<br>Exemples : $3\\,456 = 3{,}456 \\times 10^3$ &nbsp;·&nbsp; $0{,}00072 = 7{,}2 \\times 10^{-4}$.<br>Produit : $(a \\times 10^m) \\times (b \\times 10^n) = ab \\times 10^{m+n}$.' },
    ]
  },
  {
    titre: 'Racines carrées',
    cartes: [
      { type:'def', label:'DEF', titre:'Racine carrée',
        contenu:'Pour $a \\geq 0$, $\\sqrt{a}$ est l\'unique réel positif (ou nul) dont le carré est $a$ :<br>$$\\sqrt{a} \\geq 0 \\quad \\text{et} \\quad (\\sqrt{a})^2 = a$$Exemples : $\\sqrt{25} = 5$ &nbsp;·&nbsp; $\\sqrt{2} \\approx 1{,}414$ &nbsp;·&nbsp; $\\sqrt{0} = 0$.' },
      { type:'prop', label:'PROP', titre:'Propriétés des racines carrées',
        contenu:'Pour $a, b \\geq 0$ :<br>$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (b > 0)$$$$\\left(\\sqrt{a}\\right)^2 = a \\qquad \\sqrt{a^2} = |a|$$<strong>Attention :</strong> $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$.' },
      { type:'meth', label:'METH', titre:'Simplifier $\\sqrt{n}$',
        contenu:'Chercher le plus grand carré parfait qui divise $n$.<br>Si $n = k^2 \\times m$ alors $\\sqrt{n} = k\\sqrt{m}$.<br>Exemples : $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$ &nbsp;·&nbsp; $\\sqrt{75} = 5\\sqrt{3}$.' },
    ]
  },
],
};

// ── Catégorie par chapitre (pour onglet méthodes) ────────────────────────────
const CATEG_METHODE = {
  'ma-3e-arith':     'Arithmétique',
  'ma-3e-pytha':     'Géométrie',
  'ma-3e-calclit1':  'Calcul littéral',
  'ma-3e-thales':    'Géométrie',
  'ma-3e-fonc':      'Fonctions',
  'ma-3e-trisiml':   'Géométrie',
  'ma-3e-stats':     'Statistiques',
  'ma-3e-calclit2':  'Calcul littéral',
  'ma-3e-fonlin':    'Fonctions',
  'ma-3e-geom3d':    'Géométrie',
  'ma-3e-proba':     'Probabilités',
  'ma-3e-agrand':    'Géométrie',
  'ma-3e-fonaffine': 'Fonctions',
  'ma-3e-calcnum':   'Arithmétique',
};

// ── Fonction d'insertion ──────────────────────────────────────────────────────

export function seed3emeIfNeeded(db) {
  // Vérifier si les données existent déjà
  const existing = db.prepare("SELECT COUNT(*) as n FROM filiere_chapitres WHERE filiere_id = ?").getAsObject(['3eme']);
  if (existing && existing.n > 0) {
    console.log('[seed-3eme] Données déjà présentes, skip.');
    return;
  }

  // Vérifier que la filière existe
  const filiereRow = db.prepare("SELECT id FROM filieres WHERE id = ?").getAsObject(['3eme']);
  if (!filiereRow || !filiereRow.id) {
    console.warn('[seed-3eme] Filière "3eme" introuvable, skip.');
    return;
  }

  // Ordre de départ pour les nouvelles méthodes
  const maxOrdreR = db.exec('SELECT COALESCE(MAX(ordre), 0) FROM methodes');
  let methOrdre = maxOrdreR[0].values[0][0] + 1;

  let chapitreCount = 0, sectionCount = 0, carteCount = 0, methCount = 0;

  for (let ci = 0; ci < CHAPITRES.length; ci++) {
    const { id, titre } = CHAPITRES[ci];

    try {
      db.run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)',
        [id, MATIERE, titre]);
      chapitreCount++;
    } catch (e) { console.error('[seed-3eme] chapitre', id, e.message); continue; }

    try {
      db.run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)',
        [FILIERE, id, ci + 1]);
    } catch (e) { console.error('[seed-3eme] filiere_chapitres', id, e.message); }

    const secs = SECTIONS[id] || [];
    for (let si = 0; si < secs.length; si++) {
      const sec = secs[si];
      try {
        // Cartes de cours — exclure les METH (→ onglet méthodes)
        const coursCartes = sec.cartes.filter(c => c.type !== 'meth');
        if (coursCartes.length === 0) continue;

        db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)',
          [id, sec.titre, si + 1]);
        const secId = db.exec('SELECT last_insert_rowid() as id')[0].values[0][0];
        sectionCount++;

        let ki2 = 1;
        for (const c of coursCartes) {
          db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
            [secId, c.type, c.label, c.titre, c.contenu, ki2++]);
          carteCount++;
        }
      } catch (e) { console.error('[seed-3eme] section', id, sec.titre, e.message); }

      // Méthodes → onglet méthodes
      const categorie = CATEG_METHODE[id] || 'Général';
      for (const c of sec.cartes.filter(c => c.type === 'meth')) {
        try {
          db.run(
            "INSERT INTO methodes (matiere_id, categorie, type, titre, contenu, ordre) VALUES (?, ?, 'methode', ?, ?, ?)",
            [MATIERE, categorie, c.titre, c.contenu, methOrdre]
          );
          const methId = db.exec('SELECT last_insert_rowid() as id')[0].values[0][0];
          db.run('INSERT OR IGNORE INTO filiere_methodes (filiere_id, methode_id) VALUES (?, ?)',
            [FILIERE, methId]);
          methOrdre++;
          methCount++;
        } catch (e) { console.error('[seed-3eme] methode', c.titre, e.message); }
      }
    }
  }

  console.log(`[seed-3eme] Inséré : ${chapitreCount} chapitres, ${sectionCount} sections, ${carteCount} cartes, ${methCount} méthodes.`);
}
