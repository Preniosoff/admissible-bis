// Seed Collège (6ème, 5ème, 4ème) — idempotent
// Programme officiel MEN 2023-2024

const DATA = {

// ══════════════════════════════════════════════════════════════
// 6ÈME — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_6eme_ma: [
  {
    id: 'ma-6e-nb', filiere: '6eme', matiere: 'ma', titre: 'Nombres entiers et décimaux', ordre: 1,
    sections: [
      { titre: 'Notation et comparaison', cartes: [
        { type:'def', label:'DEF', titre:'Nombre décimal',
          contenu:`Un nombre décimal s'écrit avec une partie entière et une partie décimale séparées par une virgule.<br>Exemple : $3{,}14$ a comme partie entière $3$ et comme partie décimale $14$ centièmes.<br><strong>Valeur de position</strong> : chaque chiffre a une valeur qui dépend de sa position (unités, dizaines, centièmes, millièmes…).` },
        { type:'prop', label:'PROP', titre:'Comparaison de décimaux',
          contenu:`Pour comparer deux nombres décimaux :<br>1. Comparer d'abord les parties entières.<br>2. Si elles sont égales, comparer chiffre par chiffre la partie décimale (même nombre de décimales).<br>Exemple : $3{,}07 < 3{,}7$ car dans la partie décimale, $0 < 7$ au niveau des dixièmes.` },
      ]},
      { titre: 'Multiples et diviseurs', cartes: [
        { type:'def', label:'DEF', titre:'Multiple et diviseur',
          contenu:`$b$ est un <strong>multiple</strong> de $a$ si $b = a \\times k$ pour un entier $k$.<br>$a$ est alors un <strong>diviseur</strong> de $b$.<br>Exemple : $12$ est multiple de $3$ car $12 = 3 \\times 4$.` },
        { type:'def', label:'DEF', titre:'Nombre premier',
          contenu:`Un nombre entier $n \\ge 2$ est <strong>premier</strong> s'il a exactement deux diviseurs : $1$ et lui-même.<br>Exemples : $2, 3, 5, 7, 11, 13, 17, 19, 23, \ldots$<br>$4 = 2 \\times 2$ n'est pas premier (3 diviseurs).` },
        { type:'meth', label:'METH', titre:'Critères de divisibilité usuels',
          contenu:`<strong>Par 2</strong> : dernier chiffre pair (0, 2, 4, 6, 8).<br><strong>Par 3</strong> : somme des chiffres divisible par 3.<br><strong>Par 5</strong> : dernier chiffre est 0 ou 5.<br><strong>Par 9</strong> : somme des chiffres divisible par 9.<br><strong>Par 10</strong> : dernier chiffre est 0.` },
      ]},
    ],
  },
  {
    id: 'ma-6e-frac', filiere: '6eme', matiere: 'ma', titre: 'Fractions', ordre: 2,
    sections: [
      { titre: 'Définitions et fractions égales', cartes: [
        { type:'def', label:'DEF', titre:'Fraction',
          contenu:`Une fraction $\\dfrac{a}{b}$ ($b \\ne 0$) représente la division de $a$ par $b$, ou le partage d'un tout en $b$ parts égales dont on prend $a$.<br>$a$ : numérateur &nbsp;·&nbsp; $b$ : dénominateur.` },
        { type:'prop', label:'PROP', titre:'Fractions égales',
          contenu:`$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$ pour tout $k \\ne 0$ (amplification).<br>On peut aussi simplifier en divisant numérateur et dénominateur par leur PGCD.<br>Exemple : $\\dfrac{6}{9} = \\dfrac{2}{3}$ (divisé par 3).` },
      ]},
      { titre: 'Opérations sur les fractions', cartes: [
        { type:'form', label:'FORM', titre:'Addition et soustraction de fractions',
          contenu:`Même dénominateur : $\\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a+c}{b}$<br>Dénominateurs différents : réduire au même dénominateur d'abord.<br>Exemple : $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$` },
        { type:'form', label:'FORM', titre:'Multiplication et division de fractions',
          contenu:`Multiplication : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$<br>Division : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{ad}{bc}$` },
      ]},
    ],
  },
  {
    id: 'ma-6e-geo', filiere: '6eme', matiere: 'ma', titre: 'Géométrie plane', ordre: 3,
    sections: [
      { titre: 'Angles et figures', cartes: [
        { type:'def', label:'DEF', titre:'Angle',
          contenu:`Un angle est formé par deux demi-droites ayant le même point d'origine, appelé le <strong>sommet</strong>.<br><strong>Angle droit</strong> : $90°$ &nbsp;·&nbsp; <strong>Aigu</strong> : $< 90°$ &nbsp;·&nbsp; <strong>Obtus</strong> : $> 90°$ &nbsp;·&nbsp; <strong>Plat</strong> : $180°$<br><strong>Angles supplémentaires</strong> : somme $= 180°$. <strong>Complémentaires</strong> : somme $= 90°$.` },
        { type:'prop', label:'PROP', titre:'Propriétés des triangles',
          contenu:`La somme des angles d'un triangle est égale à $180°$.<br><strong>Triangle équilatéral</strong> : 3 côtés égaux, angles de $60°$ chacun.<br><strong>Triangle isocèle</strong> : 2 côtés égaux, angles à la base égaux.<br><strong>Triangle rectangle</strong> : un angle droit, hypoténuse = côté en face du droit.` },
      ]},
      { titre: 'Périmètres et aires', cartes: [
        { type:'form', label:'FORM', titre:'Aires des figures usuelles',
          contenu:`<strong>Carré</strong> de côté $a$ : $\mathcal{A} = a^2$<br><strong>Rectangle</strong> $a \\times b$ : $\mathcal{A} = a \\times b$<br><strong>Triangle</strong> base $b$, hauteur $h$ : $\mathcal{A} = \\dfrac{b \\times h}{2}$<br><strong>Disque</strong> de rayon $r$ : $\mathcal{A} = \\pi r^2$<br><strong>Périmètre du cercle</strong> : $\mathcal{P} = 2\\pi r$` },
      ]},
    ],
  },
  {
    id: 'ma-6e-sym', filiere: '6eme', matiere: 'ma', titre: 'Symétrie axiale', ordre: 4,
    sections: [
      { titre: 'Symétrie axiale', cartes: [
        { type:'def', label:'DEF', titre:'Symétrie axiale',
          contenu:`Deux figures sont <strong>symétriques par rapport à une droite</strong> $d$ si, en repliant la feuille selon $d$, elles se superposent parfaitement.<br>La droite $d$ est l'<strong>axe de symétrie</strong>.<br>Le symétrique d'un point $A$ par rapport à $d$ est le point $A'$ tel que $d$ est la médiatrice de $[AA']$.` },
        { type:'prop', label:'PROP', titre:'Propriétés de la symétrie axiale',
          contenu:`La symétrie axiale conserve :<br>— les distances (longueurs de segments)<br>— les angles<br>— le parallélisme<br>— les périmètres et les aires<br>Elle transforme une figure en une figure égale mais éventuellement « retournée ».` },
      ]},
    ],
  },
  {
    id: 'ma-6e-prop', filiere: '6eme', matiere: 'ma', titre: 'Proportionnalité', ordre: 5,
    sections: [
      { titre: 'Définition et propriété', cartes: [
        { type:'def', label:'DEF', titre:'Situation de proportionnalité',
          contenu:`Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant par un même nombre (le <strong>coefficient de proportionnalité</strong>).<br>Dans un tableau de proportionnalité, tous les rapports $\\frac{\\text{2e ligne}}{\\text{1re ligne}}$ sont égaux.` },
        { type:'prop', label:'PROP', titre:'Règle de trois (quatrième proportionnelle)',
          contenu:`Si $\\frac{a}{b} = \\frac{c}{x}$, alors $x = \\frac{b \\times c}{a}$.<br>Exemple : si 3 cahiers coûtent 4,50 €, 5 cahiers coûtent $\\frac{4{,}50 \\times 5}{3} = 7{,}50$ €.` },
      ]},
      { titre: 'Pourcentages', cartes: [
        { type:'form', label:'FORM', titre:'Calcul d\'un pourcentage',
          contenu:`$p\\%$ de $a$ = $\\frac{p}{100} \\times a$<br>Exemple : $20\\%$ de $150 = \\frac{20}{100} \\times 150 = 30$.<br><strong>Taux de variation</strong> : $t = \\frac{v_f - v_i}{v_i} \\times 100\\%$` },
      ]},
    ],
  },
  {
    id: 'ma-6e-repere', filiere: '6eme', matiere: 'ma', titre: 'Repère et coordonnées', ordre: 6,
    sections: [
      { titre: 'Repère cartésien', cartes: [
        { type:'def', label:'DEF', titre:'Repère orthogonal',
          contenu:`Un repère $(O, I, J)$ est formé d'une origine $O$ et de deux axes perpendiculaires.<br><strong>Abscisse</strong> : coordonnée horizontale (axe des $x$).<br><strong>Ordonnée</strong> : coordonnée verticale (axe des $y$).<br>Notation : point $A$ de coordonnées $(x_A, y_A)$.` },
        { type:'meth', label:'METH', titre:'Lire et placer des coordonnées',
          contenu:`Pour lire les coordonnées d'un point $A$ :<br>1. Tracer une verticale de $A$ jusqu'à l'axe des $x$ → abscisse.<br>2. Tracer une horizontale de $A$ jusqu'à l'axe des $y$ → ordonnée.<br>Pour placer un point $(3, -2)$ : aller à $3$ sur l'axe des $x$ et $-2$ sur l'axe des $y$.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 5ÈME — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_5eme_ma: [
  {
    id: 'ma-5e-rel', filiere: '5eme', matiere: 'ma', titre: 'Nombres relatifs', ordre: 1,
    sections: [
      { titre: 'Définitions et repère', cartes: [
        { type:'def', label:'DEF', titre:'Nombres relatifs',
          contenu:`Un nombre relatif est un nombre avec un signe $+$ ou $-$.<br><strong>Nombres positifs</strong> : $+3$, $+7{,}5$, $\ldots$ (à droite de $0$ sur la droite)<br><strong>Nombres négatifs</strong> : $-4$, $-2{,}1$, $\ldots$ (à gauche de $0$)<br><strong>Ordre</strong> : tout nombre négatif est inférieur à tout nombre positif.` },
        { type:'def', label:'DEF', titre:'Distance à l\'origine (valeur absolue)',
          contenu:`La <strong>distance à l'origine</strong> d'un nombre relatif $a$ est notée $|a|$.<br>$|{+}5| = 5$, $|{-}5| = 5$, $|0| = 0$<br><strong>Opposé</strong> : l'opposé de $a$ est $-a$ ; il est à la même distance de $0$ de l'autre côté.` },
      ]},
      { titre: 'Opérations', cartes: [
        { type:'form', label:'FORM', titre:'Addition et soustraction de relatifs',
          contenu:`<strong>Même signe</strong> : additionner les valeurs absolues, garder le signe.<br>$+5 + (+3) = +8$ &nbsp;·&nbsp; $-4 + (-2) = -6$<br><strong>Signes contraires</strong> : soustraire les valeurs absolues, garder le signe du plus grand.<br>$+7 + (-3) = +4$ &nbsp;·&nbsp; $-8 + (+3) = -5$<br><strong>Règle des signes (multiplication)</strong> : $(-) \\times (-) = (+)$ &nbsp;·&nbsp; $(-) \\times (+) = (-)$` },
      ]},
    ],
  },
  {
    id: 'ma-5e-pytha', filiere: '5eme', matiere: 'ma', titre: 'Théorème de Pythagore', ordre: 2,
    sections: [
      { titre: 'Énoncé et application', cartes: [
        { type:'th', label:'THM', titre:'Théorème de Pythagore',
          contenu:`Dans un triangle rectangle d'hypoténuse $c$ et de côtés de l'angle droit $a$ et $b$ :
$$a^2 + b^2 = c^2$$
<strong>Réciproque</strong> : si $a^2 + b^2 = c^2$, alors le triangle est rectangle en face du côté $c$.` },
        { type:'meth', label:'METH', titre:'Application du théorème',
          contenu:`<strong>Calculer l'hypoténuse</strong> : $c = \\sqrt{a^2 + b^2}$<br><strong>Calculer un côté de l'angle droit</strong> : $a = \\sqrt{c^2 - b^2}$<br><strong>Vérifier si un triangle est rectangle</strong> : tester si $a^2 + b^2 = c^2$ (avec $c$ le plus grand côté).` },
      ]},
    ],
  },
  {
    id: 'ma-5e-prct', filiere: '5eme', matiere: 'ma', titre: 'Proportionnalité et pourcentages', ordre: 3,
    sections: [
      { titre: 'Proportionnalité avancée', cartes: [
        { type:'prop', label:'PROP', titre:'Représentation graphique',
          contenu:`Deux grandeurs proportionnelles ont une représentation graphique qui est une droite passant par l'origine.<br>Le coefficient directeur de cette droite est le coefficient de proportionnalité.` },
        { type:'form', label:'FORM', titre:'Augmentation et réduction en pourcentages',
          contenu:`Augmentation de $t\\%$ : multiplier par $1 + \\frac{t}{100}$<br>Réduction de $t\\%$ : multiplier par $1 - \\frac{t}{100}$<br>Exemple : réduction de $20\\%$ → multiplier par $0{,}8$.` },
      ]},
    ],
  },
  {
    id: 'ma-5e-geom', filiere: '5eme', matiere: 'ma', titre: 'Géométrie — Triangles et cercles', ordre: 4,
    sections: [
      { titre: 'Triangles semblables et médiatrice', cartes: [
        { type:'def', label:'DEF', titre:'Médiatrice',
          contenu:`La <strong>médiatrice</strong> d'un segment $[AB]$ est la droite perpendiculaire à $[AB]$ passant par son milieu.<br><strong>Propriété</strong> : un point $M$ est sur la médiatrice de $[AB]$ si et seulement si $MA = MB$.` },
        { type:'prop', label:'PROP', titre:'Centre du cercle circonscrit',
          contenu:`Les trois médiatrices d'un triangle se coupent en un point, le <strong>circumcentre</strong>, équidistant des trois sommets.<br>Ce point est le centre du cercle passant par les trois sommets (cercle circonscrit).` },
      ]},
    ],
  },
  {
    id: 'ma-5e-calclit', filiere: '5eme', matiere: 'ma', titre: 'Calcul littéral et équations', ordre: 5,
    sections: [
      { titre: 'Expressions littérales', cartes: [
        { type:'def', label:'DEF', titre:'Expression littérale et réduction',
          contenu:`Une <strong>expression littérale</strong> contient des lettres représentant des nombres.<br><strong>Termes semblables</strong> : même partie littérale (ex. $3x$ et $5x$). On les additionne : $3x + 5x = 8x$.<br>Développer : $a(b+c) = ab + ac$ &nbsp;·&nbsp; Factoriser : $ab + ac = a(b+c)$` },
        { type:'meth', label:'METH', titre:'Résoudre une équation du 1er degré',
          contenu:`Une équation est une égalité avec une inconnue $x$. Résoudre = trouver les valeurs de $x$.<br>Méthode : faire les mêmes opérations des deux côtés pour isoler $x$.<br>Exemple : $2x + 3 = 9 \\Rightarrow 2x = 6 \\Rightarrow x = 3$<br><strong>Vérification</strong> : substituer la valeur trouvée dans l'équation initiale.` },
      ]},
    ],
  },
  {
    id: 'ma-5e-vol', filiere: '5eme', matiere: 'ma', titre: 'Aires et volumes', ordre: 6,
    sections: [
      { titre: 'Volumes usuels', cartes: [
        { type:'form', label:'FORM', titre:'Volumes des solides',
          contenu:`<strong>Cube</strong> d'arête $a$ : $V = a^3$<br><strong>Pavé droit</strong> $l \\times L \\times h$ : $V = l \\times L \\times h$<br><strong>Cylindre</strong> de rayon $r$, hauteur $h$ : $V = \\pi r^2 h$<br><strong>Sphère</strong> de rayon $r$ : $V = \\dfrac{4}{3}\\pi r^3$<br><strong>Pyramide/Cône</strong> : $V = \\dfrac{1}{3} \\times \\text{base} \\times h$` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 4ÈME — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_4eme_ma: [
  {
    id: 'ma-4e-puiss', filiere: '4eme', matiere: 'ma', titre: 'Puissances et notation scientifique', ordre: 1,
    sections: [
      { titre: 'Puissances d\'un nombre', cartes: [
        { type:'def', label:'DEF', titre:'Puissance d\'un nombre',
          contenu:`$a^n = a \\times a \\times \\cdots \\times a$ ($n$ fois), pour $a$ réel, $n$ entier naturel.<br>$a^0 = 1$ (pour $a \\ne 0$) &nbsp;·&nbsp; $a^1 = a$<br><strong>Puissance négative</strong> : $a^{-n} = \\dfrac{1}{a^n}$ (pour $a \\ne 0$)` },
        { type:'form', label:'FORM', titre:'Règles de calcul des puissances',
          contenu:`$a^m \\times a^n = a^{m+n}$ &nbsp;·&nbsp; $\\dfrac{a^m}{a^n} = a^{m-n}$ &nbsp;·&nbsp; $(a^m)^n = a^{m \\times n}$<br>$(a \\times b)^n = a^n \\times b^n$ &nbsp;·&nbsp; $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$` },
        { type:'def', label:'DEF', titre:'Notation scientifique',
          contenu:`Tout nombre réel $x$ s'écrit $a \\times 10^n$ avec $1 \\le a < 10$ et $n$ entier.<br>Exemples : $3{,}14 \\times 10^3 = 3140$ &nbsp;·&nbsp; $2{,}7 \\times 10^{-4} = 0{,}00027$<br>Utile pour les très grands ou très petits nombres en sciences.` },
      ]},
    ],
  },
  {
    id: 'ma-4e-eqineg', filiere: '4eme', matiere: 'ma', titre: 'Équations et inéquations', ordre: 2,
    sections: [
      { titre: 'Équations du 1er degré', cartes: [
        { type:'meth', label:'METH', titre:'Résoudre une équation à une inconnue',
          contenu:`Règle : on peut ajouter, soustraire, multiplier ou diviser des deux membres par la même quantité non nulle.<br>Exemple : $3(x-2) = 4x + 1 \\Rightarrow 3x - 6 = 4x + 1 \\Rightarrow -6 - 1 = 4x - 3x \\Rightarrow x = -7$` },
        { type:'def', label:'DEF', titre:'Inéquation du 1er degré',
          contenu:`Une inéquation est une inégalité avec une inconnue.<br><strong>Règle importante</strong> : quand on multiplie ou divise par un nombre <em>négatif</em>, le sens de l'inégalité change.<br>Exemple : $-2x > 6 \\Rightarrow x < -3$ (sens change car division par $-2$).` },
      ]},
    ],
  },
  {
    id: 'ma-4e-trigo', filiere: '4eme', matiere: 'ma', titre: 'Trigonométrie', ordre: 3,
    sections: [
      { titre: 'Sinus, cosinus, tangente', cartes: [
        { type:'def', label:'DEF', titre:'Ratios trigonométriques',
          contenu:`Dans un triangle rectangle d'angle $\\alpha$ (distinct de l'angle droit) :<br>$$\\cos\\alpha = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} \\quad \\sin\\alpha = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} \\quad \\tan\\alpha = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$$` },
        { type:'form', label:'FORM', titre:'Relation de Pythagore et identités',
          contenu:`$\\cos^2\\alpha + \\sin^2\\alpha = 1$ (identité fondamentale)<br>$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$<br>Valeurs remarquables :<br>$\\cos 30° = \\frac{\\sqrt{3}}{2}$ &nbsp;·&nbsp; $\\sin 30° = \\frac{1}{2}$ &nbsp;·&nbsp; $\\cos 45° = \\frac{\\sqrt{2}}{2}$ &nbsp;·&nbsp; $\\cos 60° = \\frac{1}{2}$` },
      ]},
    ],
  },
  {
    id: 'ma-4e-stat', filiere: '4eme', matiere: 'ma', titre: 'Statistiques', ordre: 4,
    sections: [
      { titre: 'Indicateurs statistiques', cartes: [
        { type:'def', label:'DEF', titre:'Moyenne, médiane, étendue',
          contenu:`<strong>Moyenne</strong> : somme des valeurs ÷ effectif total.<br><strong>Médiane</strong> : valeur qui sépare la série ordonnée en deux moitiés égales.<br><strong>Étendue</strong> : valeur max $-$ valeur min.<br><strong>Quartiles</strong> : $Q_1$ sépare les 25% inférieurs, $Q_3$ les 25% supérieurs.` },
        { type:'def', label:'DEF', titre:'Diagramme en boîte (box plot)',
          contenu:`Représente sur un axe : valeur min, $Q_1$, médiane, $Q_3$, valeur max.<br>La "boîte" contient les 50% centraux des données.<br>Les "moustaches" s'étendent jusqu'aux valeurs extrêmes (non aberrantes).` },
      ]},
    ],
  },
  {
    id: 'ma-4e-fonc', filiere: '4eme', matiere: 'ma', titre: 'Fonctions', ordre: 5,
    sections: [
      { titre: 'Notion de fonction', cartes: [
        { type:'def', label:'DEF', titre:'Fonction et image',
          contenu:`Une <strong>fonction</strong> $f$ associe à chaque nombre $x$ (de son ensemble de définition) un unique nombre $f(x)$, l'<strong>image</strong> de $x$.<br>Notation : $f : x \\mapsto f(x)$ ou $y = f(x)$.<br>L'antécédent de $y$ est le $x$ tel que $f(x) = y$.` },
        { type:'prop', label:'PROP', titre:'Fonctions linéaires et affines',
          contenu:`<strong>Fonction linéaire</strong> : $f(x) = ax$ (droite passant par l'origine).<br><strong>Fonction affine</strong> : $f(x) = ax + b$ ($a$ : pente ou coefficient directeur, $b$ : ordonnée à l'origine).<br>Pente $a > 0$ : fonction croissante &nbsp;·&nbsp; $a < 0$ : décroissante.` },
      ]},
    ],
  },
  {
    id: 'ma-4e-proba', filiere: '4eme', matiere: 'ma', titre: 'Probabilités', ordre: 6,
    sections: [
      { titre: 'Probabilité d\'un événement', cartes: [
        { type:'def', label:'DEF', titre:'Expérience aléatoire et événement',
          contenu:`Une <strong>expérience aléatoire</strong> a plusieurs issues possibles dont on ne peut prévoir le résultat à l'avance.<br><strong>Espace des possibles</strong> $\\Omega$ : ensemble de toutes les issues.<br><strong>Événement</strong> : sous-ensemble de $\\Omega$.` },
        { type:'form', label:'FORM', titre:'Probabilité classique',
          contenu:`Si toutes les issues sont équiprobables :$$P(A) = \\frac{\\text{nombre d'issues favorables à }A}{\\text{nombre total d'issues}}$$\n$0 \\le P(A) \\le 1$ &nbsp;·&nbsp; $P(\\Omega) = 1$ &nbsp;·&nbsp; $P(\\bar{A}) = 1 - P(A)$` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 5ÈME — PHYSIQUE-CHIMIE
// ══════════════════════════════════════════════════════════════
chapitres_5eme_phch: [
  {
    id: 'phch-5e-atome', filiere: '5eme', matiere: 'phch', titre: 'Structure de la matière', ordre: 1,
    sections: [
      { titre: 'Atome et molécule', cartes: [
        { type:'def', label:'DEF', titre:'Atome et molécule',
          contenu:`Un <strong>atome</strong> est la plus petite entité constitutive de la matière. Il est composé d'un noyau (protons + neutrons) et d'électrons.<br>Une <strong>molécule</strong> est un assemblage d'atomes liés chimiquement.<br>Exemple : $\\mathrm{H_2O}$ est formée de 2 atomes H et 1 atome O.` },
        { type:'def', label:'DEF', titre:'Corps pur et mélange',
          contenu:`Un <strong>corps pur</strong> est composé d'une seule sorte de molécule ou d'atome (ex : eau distillée, or pur).<br>Un <strong>mélange</strong> contient plusieurs corps purs (ex : eau de mer, air).` },
      ]},
    ],
  },
  {
    id: 'phch-5e-lumiere', filiere: '5eme', matiere: 'phch', titre: 'Lumière et couleurs', ordre: 2,
    sections: [
      { titre: 'Propagation et couleurs', cartes: [
        { type:'prop', label:'PROP', titre:'Propagation de la lumière',
          contenu:`La lumière se propage en ligne droite dans un milieu homogène (rectilinéarité de la lumière).<br>Vitesse dans le vide : $c = 3 \\times 10^8$ m/s.<br>La lumière blanche est un mélange de toutes les couleurs de l'arc-en-ciel (spectre visible).` },
        { type:'prop', label:'PROP', titre:'Mélange additif et soustractif',
          contenu:`<strong>Mélange additif (lumières)</strong> : Rouge + Vert + Bleu = Blanc.<br><strong>Mélange soustractif (pigments)</strong> : Cyan + Magenta + Jaune = Noir.<br>Un objet a la couleur de la lumière qu'il réfléchit (absorbe les autres).` },
      ]},
    ],
  },
  {
    id: 'phch-5e-elec', filiere: '5eme', matiere: 'phch', titre: 'Circuits électriques', ordre: 3,
    sections: [
      { titre: 'Circuits et lois', cartes: [
        { type:'def', label:'DEF', titre:'Circuit en série et en dérivation',
          contenu:`<strong>En série</strong> : les composants sont branchés à la suite. Le courant est le même partout : $I = I_1 = I_2$. Les tensions s'additionnent : $U = U_1 + U_2$.<br><strong>En dérivation</strong> : les composants sont en parallèle. La tension est la même pour chaque branche : $U = U_1 = U_2$. Les courants s'additionnent : $I = I_1 + I_2$.` },
        { type:'form', label:'FORM', titre:'Loi d\'Ohm',
          contenu:`$$U = R \\times I$$\n$U$ : tension en Volts (V) &nbsp;·&nbsp; $R$ : résistance en Ohms ($\\Omega$) &nbsp;·&nbsp; $I$ : courant en Ampères (A)<br>Puissance : $P = U \\times I = R \\times I^2$ (Watts, W)` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 4ÈME — PHYSIQUE-CHIMIE
// ══════════════════════════════════════════════════════════════
chapitres_4eme_phch: [
  {
    id: 'phch-4e-mecaflui', filiere: '4eme', matiere: 'phch', titre: 'Mécanique et fluides', ordre: 1,
    sections: [
      { titre: 'Forces et pression', cartes: [
        { type:'def', label:'DEF', titre:'Force et poids',
          contenu:`Une <strong>force</strong> est une action exercée sur un objet. Unité : Newton (N).<br><strong>Poids</strong> $P = mg$ ($m$ : masse en kg, $g \\approx 9{,}81$ m/s² ou $10$ m/s² en approximation).<br>Le poids est une force verticale dirigée vers le bas (force gravitationnelle).` },
        { type:'def', label:'DEF', titre:'Pression',
          contenu:`$$P = \\frac{F}{S}$$\n$P$ : pression en Pascals (Pa) &nbsp;·&nbsp; $F$ : force en N &nbsp;·&nbsp; $S$ : surface en m²<br><strong>Pression atmosphérique</strong> : $P_0 \\approx 10^5$ Pa $= 1$ atm.<br><strong>Pression hydrostatique</strong> : $P = \\rho g h$ (profondeur $h$, masse volumique $\\rho$).` },
      ]},
    ],
  },
  {
    id: 'phch-4e-chimorg', filiere: '4eme', matiere: 'phch', titre: 'Chimie — Réactions et transformations', ordre: 2,
    sections: [
      { titre: 'Réactions chimiques', cartes: [
        { type:'def', label:'DEF', titre:'Réaction chimique et équation-bilan',
          contenu:`Une <strong>réaction chimique</strong> transforme des réactifs en produits. Les atomes sont conservés (loi de conservation de la masse).<br><strong>Équation-bilan équilibrée</strong> : le nombre d'atomes de chaque élément est le même à gauche et à droite.<br>Exemple : $2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}$` },
        { type:'prop', label:'PROP', titre:'Conservation de la masse',
          contenu:`Lors d'une réaction chimique, la masse totale des réactifs est égale à la masse totale des produits.<br><strong>Loi de Lavoisier</strong> : rien ne se crée, rien ne se perd, tout se transforme.<br>Exceptions apparentes : gaz non piégé (la masse totale est conservée si on inclut les gaz).` },
      ]},
    ],
  },
  {
    id: 'phch-4e-elec', filiere: '4eme', matiere: 'phch', titre: 'Électricité avancée', ordre: 3,
    sections: [
      { titre: 'Puissance et énergie électrique', cartes: [
        { type:'form', label:'FORM', titre:'Puissance et énergie électrique',
          contenu:`<strong>Puissance</strong> : $P = U \\times I$ (Watts)<br><strong>Énergie</strong> : $E = P \\times t$ (Joules si $t$ en secondes, Wh si $t$ en heures)<br>$1$ kWh $= 3{,}6 \\times 10^6$ J<br><strong>Effet Joule</strong> : énergie dissipée sous forme de chaleur dans une résistance : $P = R I^2$.` },
      ]},
    ],
  },
],

};

// ── Fonction principale ───────────────────────────────────────────────────────

export function seedCollegeIfNeeded(db) {
  // Guard: skip if 6ème/5ème/4ème data already exists
  const stmt = db.prepare("SELECT COUNT(*) as n FROM chapitres WHERE id LIKE 'ma-6e-%' OR id LIKE 'ma-5e-%' OR id LIKE 'ma-4e-%'");
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  if (row && row.n > 0) {
    console.log('[seed-college] Données déjà présentes, skip.');
    return;
  }

  console.log('[seed-college] Insertion des données collège (6e, 5e, 4e)...');

  function lastId() {
    const s = db.prepare("SELECT last_insert_rowid() as id");
    const r = s.step() ? s.getAsObject() : null;
    s.free();
    return r ? r.id : null;
  }

  let chapCount = 0, secCount = 0, carteCount = 0;

  const allGroups = [
    DATA.chapitres_6eme_ma,
    DATA.chapitres_5eme_ma,
    DATA.chapitres_5eme_phch,
    DATA.chapitres_4eme_ma,
    DATA.chapitres_4eme_phch,
  ];

  for (const group of allGroups) {
    for (const chap of group) {
      try {
        db.run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)',
          [chap.id, chap.matiere, chap.titre]);
        chapCount++;
      } catch (e) { console.error('[seed-college] chapitre', chap.id, e.message); continue; }

      try {
        db.run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)',
          [chap.filiere, chap.id, chap.ordre]);
      } catch {}

      for (let si = 0; si < chap.sections.length; si++) {
        const sec = chap.sections[si];
        try {
          db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)',
            [chap.id, sec.titre, si + 1]);
        } catch (e) { console.error('[seed-college] section', chap.id, e.message); continue; }
        const secId = lastId();
        secCount++;

        for (let ki = 0; ki < sec.cartes.length; ki++) {
          const c = sec.cartes[ki];
          try {
            db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
              [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
            carteCount++;
          } catch (e) { console.error('[seed-college] carte', c.titre, e.message); }
        }
      }
    }
  }

  console.log(`[seed-college] Done: ${chapCount} chapitres, ${secCount} sections, ${carteCount} cartes.`);
}
