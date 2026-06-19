// Seed Lycée (2nde, 1ère, Terminale générale et spécialités) — idempotent
// Programme officiel MEN 2019-2024

const DATA = {

// ══════════════════════════════════════════════════════════════
// SECONDE — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_2nde_ma: [
  {
    id: 'ma-2e-ens', filiere: '2nde', matiere: 'ma', titre: 'Ensembles et intervalles', ordre: 1,
    sections: [
      { titre: 'Ensembles de nombres', cartes: [
        { type:'def', label:'DEF', titre:'Les ensembles de nombres',
          contenu:`$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$<br><strong>$\\mathbb{N}$</strong> : entiers naturels $\\{0, 1, 2, \\ldots\\}$<br><strong>$\\mathbb{Z}$</strong> : entiers relatifs $\\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$<br><strong>$\\mathbb{Q}$</strong> : rationnels (fractions $p/q$)<br><strong>$\\mathbb{R}$</strong> : réels (tous les nombres de la droite)` },
        { type:'def', label:'DEF', titre:'Intervalles',
          contenu:`$[a, b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$ (fermé)<br>$]a, b[ = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$ (ouvert)<br>$[a, b[ = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$ (semi-ouvert)<br>$[a, +\\infty[ = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$` },
      ]},
    ],
  },
  {
    id: 'ma-2e-calc', filiere: '2nde', matiere: 'ma', titre: 'Calcul algébrique', ordre: 2,
    sections: [
      { titre: 'Identités remarquables', cartes: [
        { type:'form', label:'FORM', titre:'Identités remarquables',
          contenu:`$(a+b)^2 = a^2 + 2ab + b^2$<br>$(a-b)^2 = a^2 - 2ab + b^2$<br>$(a+b)(a-b) = a^2 - b^2$<br>$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$` },
        { type:'meth', label:'METH', titre:'Factoriser et développer',
          contenu:`<strong>Développer</strong> : appliquer les identités ou la distributivité.<br><strong>Factoriser</strong> : mettre en évidence un facteur commun, ou reconnaître une identité.<br>Exemple : $x^2 - 9 = (x-3)(x+3)$ (différence de carrés).` },
      ]},
      { titre: 'Équations et inéquations', cartes: [
        { type:'meth', label:'METH', titre:'Résoudre une équation du 2nd degré',
          contenu:`$ax^2 + bx + c = 0$, discriminant $\\Delta = b^2 - 4ac$.<br>$\\Delta > 0$ : deux solutions $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$<br>$\\Delta = 0$ : une solution double $x = -\\dfrac{b}{2a}$<br>$\\Delta < 0$ : pas de solution réelle.` },
      ]},
    ],
  },
  {
    id: 'ma-2e-fonc', filiere: '2nde', matiere: 'ma', titre: 'Fonctions', ordre: 3,
    sections: [
      { titre: 'Généralités sur les fonctions', cartes: [
        { type:'def', label:'DEF', titre:'Variations d\'une fonction',
          contenu:`$f$ est <strong>croissante</strong> sur $I$ si pour tout $a < b$ dans $I$, $f(a) < f(b)$.<br>$f$ est <strong>décroissante</strong> sur $I$ si pour tout $a < b$ dans $I$, $f(a) > f(b)$.<br>Un <strong>maximum</strong> (resp. <strong>minimum</strong>) est une valeur que $f$ ne dépasse pas (resp. en-dessous de laquelle $f$ ne descend pas) sur un ensemble.` },
        { type:'def', label:'DEF', titre:'Parité d\'une fonction',
          contenu:`$f$ est <strong>paire</strong> si pour tout $x$ du domaine, $f(-x) = f(x)$ (symétrie axe $Oy$).<br>$f$ est <strong>impaire</strong> si $f(-x) = -f(x)$ (symétrie par rapport à l'origine).<br>Exemples : $x^2$, $\\cos x$ sont paires ; $x^3$, $\\sin x$ sont impaires.` },
      ]},
      { titre: 'Fonctions de référence', cartes: [
        { type:'prop', label:'PROP', titre:'Fonctions de référence',
          contenu:`<strong>Carré</strong> $x \\mapsto x^2$ : décroissante sur $]-\\infty,0]$, croissante sur $[0,+\\infty[$.<br><strong>Inverse</strong> $x \\mapsto 1/x$ : décroissante sur $]-\\infty,0[$ et $]0,+\\infty[$.<br><strong>Racine</strong> $x \\mapsto \\sqrt{x}$ : croissante sur $[0,+\\infty[$.<br><strong>Valeur absolue</strong> $x \\mapsto |x|$ : décroissante sur $]-\\infty,0]$, croissante sur $[0,+\\infty[$.` },
      ]},
    ],
  },
  {
    id: 'ma-2e-geom', filiere: '2nde', matiere: 'ma', titre: 'Géométrie plane', ordre: 4,
    sections: [
      { titre: 'Vecteurs', cartes: [
        { type:'def', label:'DEF', titre:'Vecteur',
          contenu:`Un <strong>vecteur</strong> $\\vec{AB}$ est défini par une direction, un sens et une norme $\\|\\vec{AB}\\|$.<br>Coordonnées : si $A(x_A, y_A)$ et $B(x_B, y_B)$, alors $\\vec{AB} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$.<br>$\\|\\vec{AB}\\| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$` },
        { type:'def', label:'DEF', titre:'Colinéarité de vecteurs',
          contenu:`$\\vec{u} = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ et $\\vec{v} = \\begin{pmatrix} c \\\\ d \\end{pmatrix}$ sont <strong>colinéaires</strong> ssi $ad - bc = 0$.<br>Interprétation géométrique : $A$, $B$, $C$ sont alignés ssi $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.` },
      ]},
      { titre: 'Droites dans le plan', cartes: [
        { type:'form', label:'FORM', titre:'Équation de droite',
          contenu:`<strong>Forme cartésienne</strong> : $ax + by + c = 0$.<br><strong>Forme réduite</strong> : $y = mx + p$ ($m$ : pente, $p$ : ordonnée à l'origine).<br>Droites parallèles : mêmes coefficients directeurs $m$.<br>Droites perpendiculaires : $m_1 \\times m_2 = -1$.` },
      ]},
    ],
  },
  {
    id: 'ma-2e-stat', filiere: '2nde', matiere: 'ma', titre: 'Statistiques et probabilités', ordre: 5,
    sections: [
      { titre: 'Statistiques descriptives', cartes: [
        { type:'def', label:'DEF', titre:'Indicateurs de dispersion',
          contenu:`<strong>Variance</strong> : $V = \\dfrac{\\sum (x_i - \\bar{x})^2}{n} = \\overline{x^2} - \\bar{x}^2$<br><strong>Écart-type</strong> : $\\sigma = \\sqrt{V}$<br>L'écart-type mesure la dispersion autour de la moyenne.` },
        { type:'def', label:'DEF', titre:'Probabilités — vocabulaire',
          contenu:`<strong>Espace échantillon</strong> $\\Omega$ : ensemble de toutes les issues.<br><strong>Événement</strong> : sous-ensemble de $\\Omega$.<br>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$<br>$A$ et $B$ <strong>incompatibles</strong> : $P(A \\cup B) = P(A) + P(B)$` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// SECONDE — PHYSIQUE-CHIMIE
// ══════════════════════════════════════════════════════════════
chapitres_2nde_phch: [
  {
    id: 'phch-2e-constit', filiere: '2nde', matiere: 'phch', titre: 'Constitution de la matière', ordre: 1,
    sections: [
      { titre: 'Atome, ion et tableau périodique', cartes: [
        { type:'def', label:'DEF', titre:'Modèle atomique de Bohr',
          contenu:`Un atome est constitué d'un noyau ($Z$ protons, $N$ neutrons) et d'électrons en couches.<br><strong>Nombre atomique</strong> $Z$ : détermine l'élément chimique.<br><strong>Nombre de masse</strong> $A = Z + N$.<br>Notation : $^A_Z\\mathrm{X}$ (ex. $^{12}_6\\mathrm{C}$).` },
        { type:'def', label:'DEF', titre:'Ions et liaison',
          contenu:`Un <strong>ion</strong> est un atome ayant perdu ou gagné des électrons.<br>Cation : $Z$ protons $>$ nombre d'e$^-$ (charge positive).<br>Anion : $Z$ protons $<$ nombre d'e$^-$ (charge négative).<br><strong>Électronégativité</strong> : tendance d'un atome à attirer les électrons d'une liaison.` },
      ]},
    ],
  },
  {
    id: 'phch-2e-mouvt', filiere: '2nde', matiere: 'phch', titre: 'Mouvement et forces', ordre: 2,
    sections: [
      { titre: 'Description du mouvement', cartes: [
        { type:'def', label:'DEF', titre:'Vitesse et accélération',
          contenu:`<strong>Vitesse scalaire</strong> : $v = \\dfrac{d}{\\Delta t}$ (m/s)<br><strong>Vecteur vitesse</strong> : $\\vec{v} = \\dfrac{\\overrightarrow{M M'}}{\\Delta t}$ (tangent à la trajectoire).<br><strong>Accélération</strong> : variation de la vitesse par unité de temps.` },
        { type:'def', label:'DEF', titre:'Les forces',
          contenu:`<strong>Poids</strong> $\\vec{P} = m\\vec{g}$ (vers le bas, $g \\approx 9{,}81$ N/kg).<br><strong>Réaction normale</strong> $\\vec{R}$ : perpendiculaire à la surface.<br><strong>Tension</strong> dans un fil $\\vec{T}$ : le long du fil vers le point d'attache.<br><strong>Poussée d'Archimède</strong> $\\vec{\Pi} = \\rho_{fluide} V_{immergé} g$ (vers le haut).` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 1ÈRE GÉNÉRALE — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_1ere_ma: [
  {
    id: 'ma-1e-suites', filiere: '1ere-gen', matiere: 'ma', titre: 'Suites numériques', ordre: 1,
    sections: [
      { titre: 'Définitions et propriétés', cartes: [
        { type:'def', label:'DEF', titre:'Suite — définitions',
          contenu:`Une <strong>suite numérique</strong> $(u_n)_{n \\in \\mathbb{N}}$ est une fonction de $\\mathbb{N}$ dans $\\mathbb{R}$.<br><strong>Suite arithmétique</strong> : $u_{n+1} = u_n + r$ (raison $r$), terme général $u_n = u_0 + nr$.<br><strong>Suite géométrique</strong> : $u_{n+1} = q \\cdot u_n$ (raison $q$), terme général $u_n = u_0 \\cdot q^n$.` },
        { type:'form', label:'FORM', titre:'Sommes des suites classiques',
          contenu:`Somme arithmétique : $\\displaystyle\\sum_{k=0}^{n} (u_0 + kr) = (n+1)u_0 + r\\frac{n(n+1)}{2}$<br>Formule pratique : $S = \\dfrac{(\\text{premier} + \\text{dernier}) \\times \\text{nombre de termes}}{2}$<br>Somme géométrique : $\\displaystyle\\sum_{k=0}^{n} u_0 q^k = u_0 \\cdot \\dfrac{q^{n+1}-1}{q-1}$ ($q \\ne 1$)` },
      ]},
      { titre: 'Sens de variation', cartes: [
        { type:'meth', label:'METH', titre:'Étudier le sens de variation',
          contenu:`<strong>Méthode 1</strong> (différence) : étudier le signe de $u_{n+1} - u_n$.<br><strong>Méthode 2</strong> (quotient, suite positive) : étudier $\\dfrac{u_{n+1}}{u_n}$ par rapport à 1.<br>Suite croissante ssi $u_{n+1} - u_n \\ge 0$ pour tout $n$.` },
      ]},
    ],
  },
  {
    id: 'ma-1e-deriv', filiere: '1ere-gen', matiere: 'ma', titre: 'Dérivation', ordre: 2,
    sections: [
      { titre: 'Dérivée d\'une fonction', cartes: [
        { type:'def', label:'DEF', titre:'Nombre dérivé et dérivée',
          contenu:`Le <strong>nombre dérivé</strong> de $f$ en $a$ : $f'(a) = \\displaystyle\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$<br>Interprétation : pente de la tangente à la courbe en $x = a$.<br>Équation de la tangente en $a$ : $y = f'(a)(x-a) + f(a)$.` },
        { type:'form', label:'FORM', titre:'Dérivées des fonctions usuelles',
          contenu:`$(x^n)' = nx^{n-1}$ &nbsp;·&nbsp; $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$ &nbsp;·&nbsp; $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$<br>$e^x)' = e^x$ &nbsp;·&nbsp; $\\ln x)' = \\dfrac{1}{x}$<br>$(\\sin x)' = \\cos x$ &nbsp;·&nbsp; $(\\cos x)' = -\\sin x$` },
        { type:'form', label:'FORM', titre:'Règles de dérivation',
          contenu:`$(u+v)' = u' + v'$ &nbsp;·&nbsp; $(ku)' = ku'$<br>$(uv)' = u'v + uv'$ &nbsp;·&nbsp; $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$<br>$(f(u))' = u' \\cdot f'(u)$ (dérivée composée)` },
      ]},
      { titre: 'Variations et extrema', cartes: [
        { type:'prop', label:'PROP', titre:'Signe de la dérivée et variations',
          contenu:`Si $f'(x) > 0$ sur $I$, alors $f$ est <strong>strictement croissante</strong> sur $I$.<br>Si $f'(x) < 0$ sur $I$, alors $f$ est <strong>strictement décroissante</strong> sur $I$.<br>Si $f'(a) = 0$ et $f'$ change de signe en $a$, alors $a$ est un <strong>extremum local</strong>.` },
      ]},
    ],
  },
  {
    id: 'ma-1e-trigo', filiere: '1ere-gen', matiere: 'ma', titre: 'Trigonométrie', ordre: 3,
    sections: [
      { titre: 'Cercle trigonométrique', cartes: [
        { type:'def', label:'DEF', titre:'Radian et cercle trigonométrique',
          contenu:`Le <strong>radian</strong> est l'angle pour lequel l'arc de cercle unité a une longueur égale au rayon.<br>$180° = \\pi$ rad &nbsp;·&nbsp; $90° = \\pi/2$ &nbsp;·&nbsp; $60° = \\pi/3$ &nbsp;·&nbsp; $45° = \\pi/4$ &nbsp;·&nbsp; $30° = \\pi/6$<br>Sur le cercle unité, le point $M(\\theta)$ a pour coordonnées $(\\cos\\theta, \\sin\\theta)$.` },
        { type:'form', label:'FORM', titre:'Formules trigonométriques',
          contenu:`$\\cos^2\\theta + \\sin^2\\theta = 1$ (Pythagore)<br>$\\cos(-\\theta) = \\cos\\theta$ (paire) &nbsp;·&nbsp; $\\sin(-\\theta) = -\\sin\\theta$ (impaire)<br>$\\cos(\\pi - \\theta) = -\\cos\\theta$ &nbsp;·&nbsp; $\\sin(\\pi - \\theta) = \\sin\\theta$<br>Période : $\\cos$ et $\\sin$ ont pour période $2\\pi$.` },
      ]},
    ],
  },
  {
    id: 'ma-1e-expo', filiere: '1ere-gen', matiere: 'ma', titre: 'Fonction exponentielle', ordre: 4,
    sections: [
      { titre: 'Propriétés de l\'exponentielle', cartes: [
        { type:'def', label:'DEF', titre:'Fonction exponentielle',
          contenu:`La fonction exponentielle $f(x) = e^x$ est l'unique solution de $f' = f$ avec $f(0) = 1$.<br>$e \\approx 2{,}71828\ldots$ (nombre d'Euler).<br>Domaine : $\\mathbb{R}$ → $]0, +\\infty[$ (toujours strictement positive).` },
        { type:'prop', label:'PROP', titre:'Propriétés algébriques',
          contenu:`$e^{a+b} = e^a \\cdot e^b$ &nbsp;·&nbsp; $e^{a-b} = \\dfrac{e^a}{e^b}$ &nbsp;·&nbsp; $(e^a)^b = e^{ab}$<br>$e^0 = 1$ &nbsp;·&nbsp; $e^1 = e$ &nbsp;·&nbsp; $e^{-x} = \\dfrac{1}{e^x}$<br>$e^x$ est strictement croissante sur $\\mathbb{R}$.` },
      ]},
    ],
  },
  {
    id: 'ma-1e-proba', filiere: '1ere-gen', matiere: 'ma', titre: 'Probabilités conditionnelles', ordre: 5,
    sections: [
      { titre: 'Probabilité conditionnelle', cartes: [
        { type:'def', label:'DEF', titre:'Probabilité conditionnelle',
          contenu:`La probabilité de $A$ sachant $B$ (avec $P(B) > 0$) :$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$<br><strong>Formule des probabilités totales</strong> : si $(B_1, \ldots, B_n)$ est une partition de $\\Omega$ :<br>$P(A) = \\sum_i P(A|B_i) \\cdot P(B_i)$` },
        { type:'th', label:'THM', titre:'Théorème de Bayes',
          contenu:`$$P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)}$$<br>Permet d'inverser le conditionnement (passer de $P(A|B)$ à $P(B|A)$).<br>Application : diagnostic médical, tests de fiabilité.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// 1ÈRE GÉNÉRALE — PHYSIQUE-CHIMIE
// ══════════════════════════════════════════════════════════════
chapitres_1ere_phch: [
  {
    id: 'phch-1e-mecaniq', filiere: '1ere-gen', matiere: 'phch', titre: 'Mécanique', ordre: 1,
    sections: [
      { titre: 'Lois de Newton', cartes: [
        { type:'th', label:'LOI', titre:'2ème loi de Newton',
          contenu:`$$\\sum \\vec{F} = m\\vec{a}$$\n$\\vec{F}$ : résultante des forces (N) &nbsp;·&nbsp; $m$ : masse (kg) &nbsp;·&nbsp; $\\vec{a}$ : accélération (m/s²)<br><strong>1ère loi (inertie)</strong> : si $\\sum\\vec{F} = \\vec{0}$, alors $\\vec{v} = \\text{cte}$ (mouvement uniforme ou repos).<br><strong>3ème loi (réciproque)</strong> : $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$.` },
        { type:'prop', label:'PROP', titre:'Chute libre et projectile',
          contenu:`Dans le référentiel terrestre, sans frottements :<br>$x(t) = v_{0x} t$ &nbsp;·&nbsp; $y(t) = v_{0y} t - \\frac{1}{2}g t^2$<br>La trajectoire est une <strong>parabole</strong>.` },
      ]},
    ],
  },
  {
    id: 'phch-1e-onde', filiere: '1ere-gen', matiere: 'phch', titre: 'Ondes', ordre: 2,
    sections: [
      { titre: 'Ondes mécaniques', cartes: [
        { type:'def', label:'DEF', titre:'Onde mécanique progressive',
          contenu:`Une <strong>onde mécanique progressive</strong> est la propagation d'une perturbation dans un milieu matériel sans transport de matière.<br><strong>Relation fondamentale</strong> : $v = \\lambda \\cdot f = \\dfrac{\\lambda}{T}$<br>$v$ : célérité (m/s) &nbsp;·&nbsp; $\\lambda$ : longueur d'onde (m) &nbsp;·&nbsp; $f$ : fréquence (Hz) &nbsp;·&nbsp; $T$ : période (s).` },
        { type:'def', label:'DEF', titre:'Onde transversale et longitudinale',
          contenu:`<strong>Transversale</strong> : perturbation perpendiculaire à la propagation (corde, lumière).<br><strong>Longitudinale</strong> : perturbation parallèle à la propagation (son, compression).<br><strong>Retard temporel</strong> : $\\tau = \\dfrac{d}{v}$ (d = distance, v = célérité).` },
      ]},
    ],
  },
  {
    id: 'phch-1e-chimorg', filiere: '1ere-gen', matiere: 'phch', titre: 'Chimie organique', ordre: 3,
    sections: [
      { titre: 'Groupes caractéristiques', cartes: [
        { type:'def', label:'DEF', titre:'Principales familles organiques',
          contenu:`<strong>Alcool</strong> $\\mathrm{R-OH}$ &nbsp;·&nbsp; <strong>Aldéhyde</strong> $\\mathrm{R-CHO}$ &nbsp;·&nbsp; <strong>Cétone</strong> $\\mathrm{R-CO-R'}$<br><strong>Acide carboxylique</strong> $\\mathrm{R-COOH}$ &nbsp;·&nbsp; <strong>Ester</strong> $\\mathrm{R-COO-R'}$<br><strong>Amine</strong> $\\mathrm{R-NH_2}$ &nbsp;·&nbsp; <strong>Amide</strong> $\\mathrm{R-CO-NH_2}$` },
        { type:'meth', label:'METH', titre:'Nommer un composé organique (IUPAC)',
          contenu:`1. Trouver la chaîne carbonée principale (la plus longue).<br>2. Numéroter pour minimiser les indices des substituants.<br>3. Nommer avec les préfixes : méth-(1C), éth-(2C), prop-(3C), but-(4C), pent-(5C), hex-(6C).` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERMINALE GÉNÉRALE — MATHÉMATIQUES
// ══════════════════════════════════════════════════════════════
chapitres_term_ma: [
  {
    id: 'ma-tg-lim', filiere: 'term-gen', matiere: 'ma', titre: 'Limites de fonctions', ordre: 1,
    sections: [
      { titre: 'Définition et propriétés', cartes: [
        { type:'def', label:'DEF', titre:'Limite en un point et à l\'infini',
          contenu:`$\\displaystyle\\lim_{x \\to a} f(x) = L$ signifie que $f(x)$ se rapproche de $L$ quand $x$ se rapproche de $a$.<br>Limites à l'infini : $\\displaystyle\\lim_{x \\to +\\infty} x^n = +\\infty$ (pour $n > 0$), $\\displaystyle\\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0$.` },
        { type:'prop', label:'PROP', titre:'Théorèmes sur les limites',
          contenu:`<strong>Théorème des gendarmes</strong> : si $g(x) \\le f(x) \\le h(x)$ et $\\lim g = \\lim h = L$, alors $\\lim f = L$.<br><strong>Composition</strong> : $\\lim_{x\\to a} g(f(x)) = g\\left(\\lim_{x\\to a} f(x)\\right)$ si $g$ est continue.<br><strong>Formes indéterminées</strong> : $\\frac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$ → lever avec factorisation ou croissances comparées.` },
      ]},
    ],
  },
  {
    id: 'ma-tg-integ', filiere: 'term-gen', matiere: 'ma', titre: 'Intégration', ordre: 2,
    sections: [
      { titre: 'Intégrale définie', cartes: [
        { type:'def', label:'DEF', titre:'Intégrale de Riemann',
          contenu:`L'intégrale $\\displaystyle\\int_a^b f(x)\\,dx$ représente l'aire algébrique entre la courbe de $f$ et l'axe des abscisses sur $[a,b]$.<br>Si $f \\ge 0$ sur $[a,b]$ : $\\displaystyle\\int_a^b f(x)\\,dx$ = aire positive.<br>Si $f \\le 0$ : l'intégrale est négative (aire comptée négativement).` },
        { type:'th', label:'THM', titre:'Théorème fondamental de l\'analyse',
          contenu:`Si $F$ est une primitive de $f$ (i.e. $F' = f$) continue sur $[a,b]$ :<br>$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$<br>La fonction $G(x) = \\displaystyle\\int_a^x f(t)\\,dt$ est une primitive de $f$ : $G' = f$.` },
        { type:'form', label:'FORM', titre:'Primitives usuelles',
          contenu:`$\\displaystyle\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\ne -1$)<br>$\\displaystyle\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ &nbsp;·&nbsp; $\\displaystyle\\int e^x\\,dx = e^x + C$<br>$\\displaystyle\\int \\cos x\\,dx = \\sin x + C$ &nbsp;·&nbsp; $\\displaystyle\\int \\sin x\\,dx = -\\cos x + C$` },
      ]},
    ],
  },
  {
    id: 'ma-tg-log', filiere: 'term-gen', matiere: 'ma', titre: 'Logarithme naturel', ordre: 3,
    sections: [
      { titre: 'Propriétés du logarithme', cartes: [
        { type:'def', label:'DEF', titre:'Logarithme naturel',
          contenu:`$\\ln$ est la primitive de $x \\mapsto 1/x$ s'annulant en 1 : $\\ln 1 = 0$, $(\\ln x)' = \\dfrac{1}{x}$.<br>Domaine : $]0, +\\infty[$ → $\\mathbb{R}$.<br>$\\ln(e) = 1$ où $e \\approx 2{,}718$.` },
        { type:'form', label:'FORM', titre:'Règles algébriques',
          contenu:`$\\ln(ab) = \\ln a + \\ln b$ &nbsp;·&nbsp; $\\ln\\dfrac{a}{b} = \\ln a - \\ln b$<br>$\\ln(a^n) = n\\ln a$ &nbsp;·&nbsp; $\\ln\\sqrt{a} = \\dfrac{\\ln a}{2}$<br><strong>Croissance comparée</strong> : $\\displaystyle\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$ (puissance l'emporte).` },
      ]},
    ],
  },
  {
    id: 'ma-tg-contloi', filiere: 'term-gen', matiere: 'ma', titre: 'Lois continues', ordre: 4,
    sections: [
      { titre: 'Loi uniforme et exponentielle', cartes: [
        { type:'def', label:'DEF', titre:'Variable aléatoire continue',
          contenu:`Une variable aléatoire est <strong>continue</strong> si elle prend ses valeurs dans un intervalle. Sa <strong>densité de probabilité</strong> $f$ vérifie :<br>$f(x) \\ge 0$ et $\\displaystyle\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$.<br>$P(a \\le X \\le b) = \\displaystyle\\int_a^b f(x)\\,dx$.` },
        { type:'def', label:'DEF', titre:'Lois usuelles',
          contenu:`<strong>Loi uniforme</strong> $\\mathcal{U}([a,b])$ : $f(x) = \\dfrac{1}{b-a}$ sur $[a,b]$. $E(X) = \\dfrac{a+b}{2}$, $V(X) = \\dfrac{(b-a)^2}{12}$.<br><strong>Loi exponentielle</strong> $\\mathcal{E}(\\lambda)$ : $f(x) = \\lambda e^{-\\lambda x}$ sur $[0,+\\infty[$. $E(X) = \\dfrac{1}{\\lambda}$, $P(X > t) = e^{-\\lambda t}$ (sans mémoire).` },
      ]},
    ],
  },
  {
    id: 'ma-tg-combin', filiere: 'term-gen', matiere: 'ma', titre: 'Combinatoire et dénombrement', ordre: 5,
    sections: [
      { titre: 'Arrangements et combinaisons', cartes: [
        { type:'form', label:'FORM', titre:'Formules de dénombrement',
          contenu:`<strong>Arrangements</strong> (ordre compte) : $A_n^k = \\dfrac{n!}{(n-k)!}$<br><strong>Combinaisons</strong> (ordre ne compte pas) : $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$<br>Pascal : $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$` },
        { type:'th', label:'THM', titre:'Formule du binôme de Newton',
          contenu:`$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$$<br>Exemples : $(a+b)^2 = a^2 + 2ab + b^2$, $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERMINALE GÉNÉRALE — PHYSIQUE-CHIMIE
// ══════════════════════════════════════════════════════════════
chapitres_term_phch: [
  {
    id: 'phch-tg-meca', filiere: 'term-gen', matiere: 'phch', titre: 'Mécanique avancée', ordre: 1,
    sections: [
      { titre: 'Énergie cinétique et travail', cartes: [
        { type:'th', label:'THM', titre:'Théorème de l\'énergie cinétique',
          contenu:`$$W_{AB}(\\vec{F}) = \\Delta E_c = \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2$$\nLe travail d'une force égale la variation d'énergie cinétique.<br>Travail d'une force constante : $W = \\vec{F} \\cdot \\overrightarrow{AB} = F \\cdot d \\cdot \\cos\\alpha$` },
        { type:'def', label:'DEF', titre:'Conservation de l\'énergie mécanique',
          contenu:`$E_m = E_c + E_p = \\frac{1}{2}mv^2 + mgh = \\text{cte}$ (sans frottements).<br>En présence de frottements : $\\Delta E_m = W_{\\text{frottements}} < 0$ (énergie mécanique diminue).` },
      ]},
    ],
  },
  {
    id: 'phch-tg-elec', filiere: 'term-gen', matiere: 'phch', titre: 'Électrocinétique', ordre: 2,
    sections: [
      { titre: 'Circuits RC et RL', cartes: [
        { type:'def', label:'DEF', titre:'Circuit RC — charge et décharge',
          contenu:`Charge d'un condensateur : $u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$<br>Décharge : $u_C(t) = U_0 e^{-t/\\tau}$<br>Constante de temps : $\\tau = RC$<br>À $t = \\tau$ : 63% de la valeur finale lors de la charge.` },
        { type:'def', label:'DEF', titre:'Circuit RL',
          contenu:`Établissement du courant : $i(t) = \\dfrac{E}{R}\\left(1 - e^{-t/\\tau}\\right)$<br>Constante de temps : $\\tau = \\dfrac{L}{R}$<br>Inductance $L$ : s'oppose aux variations de courant ($u_L = L \\dfrac{di}{dt}$).` },
      ]},
    ],
  },
  {
    id: 'phch-tg-optiq', filiere: 'term-gen', matiere: 'phch', titre: 'Optique géométrique', ordre: 3,
    sections: [
      { titre: 'Lentilles et réfraction', cartes: [
        { type:'prop', label:'PROP', titre:'Loi de Snell-Descartes',
          contenu:`$$n_1 \\sin i_1 = n_2 \\sin i_2$$\n$n$ : indice de réfraction (sans unité).<br>Réflexion totale interne : si $\\sin i_1 > n_2/n_1$ (depuis le milieu plus dense), il n'y a pas de rayon réfracté.` },
        { type:'def', label:'DEF', titre:'Lentille mince convergente',
          contenu:`Formule de conjugaison : $\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}$ ($f' > 0$ convergente)<br>Grandissement : $\\gamma = \\dfrac{\\overline{A'B'}}{\\overline{AB}} = \\dfrac{\\overline{OA'}}{\\overline{OA}}$<br>Vergence : $V = \\dfrac{1}{f'}$ (dioptries).` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERM SPÉ MATHS
// ══════════════════════════════════════════════════════════════
chapitres_term_spe_ma: [
  {
    id: 'ma-tm-vect', filiere: 'term-spe-maths', matiere: 'ma', titre: 'Vecteurs et droites dans l\'espace', ordre: 1,
    sections: [
      { titre: 'Espace vectoriel $\\mathbb{R}^3$', cartes: [
        { type:'def', label:'DEF', titre:'Vecteurs dans l\'espace',
          contenu:`Dans un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$ de $\\mathbb{R}^3$, tout vecteur s'écrit $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} = (x, y, z)$.<br><strong>Norme</strong> : $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.<br><strong>Produit scalaire</strong> : $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$.` },
        { type:'def', label:'DEF', titre:'Produit vectoriel',
          contenu:`$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_x & u_y & u_z \\\\ v_x & v_y & v_z \\end{vmatrix}$<br>Propriété : $\\vec{u} \\times \\vec{v} \\perp \\vec{u}$ et $\\vec{u} \\times \\vec{v} \\perp \\vec{v}$.<br>$\\|\\vec{u} \\times \\vec{v}\\| = \\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta$ (aire du parallélogramme).` },
      ]},
    ],
  },
  {
    id: 'ma-tm-complexe', filiere: 'term-spe-maths', matiere: 'ma', titre: 'Nombres complexes', ordre: 2,
    sections: [
      { titre: 'Forme algébrique et géométrique', cartes: [
        { type:'def', label:'DEF', titre:'Nombres complexes',
          contenu:`Un nombre complexe s'écrit $z = a + ib$ avec $a, b \\in \\mathbb{R}$ et $i^2 = -1$.<br>$a = \\mathrm{Re}(z)$ : partie réelle &nbsp;·&nbsp; $b = \\mathrm{Im}(z)$ : partie imaginaire.<br><strong>Conjugué</strong> : $\\bar{z} = a - ib$.<br><strong>Module</strong> : $|z| = \\sqrt{a^2 + b^2}$.` },
        { type:'form', label:'FORM', titre:'Forme trigonométrique (polaire)',
          contenu:`$z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$ (formule d'Euler).<br>$r = |z|$ : module &nbsp;·&nbsp; $\\theta = \\arg(z)$ : argument.<br>$|zz'| = |z||z'|$ &nbsp;·&nbsp; $\\arg(zz') = \\arg z + \\arg z'$<br><strong>Formule de Moivre</strong> : $(e^{i\\theta})^n = e^{in\\theta}$.` },
      ]},
    ],
  },
  {
    id: 'ma-tm-recurr', filiere: 'term-spe-maths', matiere: 'ma', titre: 'Raisonnement par récurrence', ordre: 3,
    sections: [
      { titre: 'Récurrence et dénombrement', cartes: [
        { type:'meth', label:'METH', titre:'Démonstration par récurrence',
          contenu:`<strong>Initialisation</strong> : vérifier $P(n_0)$.<br><strong>Hérédité</strong> : supposer $P(n)$ vraie (hypothèse de récurrence) et démontrer $P(n+1)$.<br><strong>Conclusion</strong> : par le principe de récurrence, $P(n)$ est vraie pour tout $n \\ge n_0$.` },
      ]},
    ],
  },
  {
    id: 'ma-tm-suite2', filiere: 'term-spe-maths', matiere: 'ma', titre: 'Suites et récurrences', ordre: 4,
    sections: [
      { titre: 'Suites récurrentes', cartes: [
        { type:'meth', label:'METH', titre:'Suites récurrentes linéaires d\'ordre 2',
          contenu:`Équation caractéristique de $u_{n+2} = pu_{n+1} + qu_n$ : $r^2 = pr + q$.<br>Deux racines distinctes $r_1, r_2$ : $u_n = Ar_1^n + Br_2^n$.<br>Racine double $r$ : $u_n = (An + B)r^n$.` },
        { type:'meth', label:'METH', titre:'Suites récurrentes $u_{n+1} = f(u_n)$',
          contenu:`Chercher les points fixes : $f(l) = l$.<br>Si $|f'(l)| < 1$ : la suite converge vers $l$ (point fixe attractif).<br>Si $|f'(l)| > 1$ : diverge (point fixe répulsif).` },
      ]},
    ],
  },
  {
    id: 'ma-tm-algebre', filiere: 'term-spe-maths', matiere: 'ma', titre: 'Algèbre linéaire (matrices)', ordre: 5,
    sections: [
      { titre: 'Matrices et systèmes', cartes: [
        { type:'def', label:'DEF', titre:'Matrices et opérations',
          contenu:`Une matrice $A$ de taille $n \\times p$ a $n$ lignes et $p$ colonnes.<br>Produit $AB$ : défini si $A$ est $n \\times p$ et $B$ est $p \\times q$ (résultat $n \\times q$).<br>$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$. Attention : $AB \\ne BA$ en général.` },
        { type:'form', label:'FORM', titre:'Déterminant et inverse (2×2)',
          contenu:`$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det A = ad - bc$.<br>Si $\\det A \\ne 0$ : $A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$<br>Système $AX = B$ admet une solution unique ssi $\\det A \\ne 0$ : $X = A^{-1}B$.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERM SPÉ NSI
// ══════════════════════════════════════════════════════════════
chapitres_term_nsi: [
  {
    id: 'nsi-struct', filiere: 'term-spe-nsi', matiere: 'info', titre: 'Structures de données', ordre: 1,
    sections: [
      { titre: 'Listes, piles, files', cartes: [
        { type:'def', label:'DEF', titre:'Liste chaînée',
          contenu:`Une <strong>liste chaînée</strong> est une suite de nœuds, chacun contenant une valeur et un pointeur vers le suivant.<br>Accès en $O(n)$ · Insertion/suppression en tête : $O(1)$.<br>En Python : implémentée avec des classes ou des <code>list</code> (tableau dynamique).` },
        { type:'def', label:'DEF', titre:'Pile (LIFO) et File (FIFO)',
          contenu:`<strong>Pile</strong> (LIFO — Last In, First Out) : push/pop en sommet. Utilisée pour la récursion, le backtracking.<br><strong>File</strong> (FIFO — First In, First Out) : enqueue à l'arrière, dequeue à l'avant. Utilisée pour le BFS, les tâches en attente.<br>En Python : <code>collections.deque</code> pour la file.` },
      ]},
    ],
  },
  {
    id: 'nsi-arbres', filiere: 'term-spe-nsi', matiere: 'info', titre: 'Arbres', ordre: 2,
    sections: [
      { titre: 'Arbres binaires', cartes: [
        { type:'def', label:'DEF', titre:'Arbre binaire de recherche (ABR)',
          contenu:`Un ABR est un arbre binaire où, pour tout nœud $n$ :<br>— tous les nœuds du sous-arbre gauche ont des clés $< n$<br>— tous les nœuds du sous-arbre droit ont des clés $> n$<br>Recherche, insertion, suppression en $O(h)$ où $h$ = hauteur.` },
        { type:'def', label:'DEF', titre:'Parcours d\'arbres',
          contenu:`<strong>Préfixe (pre-order)</strong> : racine → gauche → droite<br><strong>Infixe (in-order)</strong> : gauche → racine → droite (ordre croissant dans un ABR)<br><strong>Postfixe (post-order)</strong> : gauche → droite → racine<br><strong>En largeur (BFS)</strong> : niveau par niveau (avec une file).` },
      ]},
    ],
  },
  {
    id: 'nsi-graphes', filiere: 'term-spe-nsi', matiere: 'info', titre: 'Graphes', ordre: 3,
    sections: [
      { titre: 'Représentation et algorithmes', cartes: [
        { type:'def', label:'DEF', titre:'Représentation d\'un graphe',
          contenu:`<strong>Matrice d'adjacence</strong> : case $(i,j) = 1$ si arête entre $i$ et $j$. Espace $O(V^2)$.<br><strong>Liste d'adjacence</strong> : dictionnaire $\\{v: [\\text{voisins}]\\}$. Espace $O(V + E)$.<br>Choix : liste si graphe creux, matrice si graphe dense.` },
        { type:'meth', label:'METH', titre:'DFS et BFS',
          contenu:`<strong>BFS</strong> (parcours en largeur) : file, explore niveau par niveau. Trouve plus court chemin non pondéré.<br><strong>DFS</strong> (parcours en profondeur) : pile ou récursion. Détecte cycles, tri topologique.<br>Complexité : $O(V + E)$ pour les deux.` },
      ]},
    ],
  },
  {
    id: 'nsi-algo', filiere: 'term-spe-nsi', matiere: 'info', titre: 'Algorithmique avancée', ordre: 4,
    sections: [
      { titre: 'Diviser pour régner', cartes: [
        { type:'def', label:'DEF', titre:'Diviser pour régner',
          contenu:`Paradigme en 3 étapes :<br>1. <strong>Diviser</strong> : découper le problème en sous-problèmes.<br>2. <strong>Régner</strong> : résoudre récursivement chaque sous-problème.<br>3. <strong>Combiner</strong> : fusionner les solutions.<br>Exemples : tri fusion ($O(n\\log n)$), recherche dichotomique ($O(\\log n)$).` },
        { type:'def', label:'DEF', titre:'Programmation dynamique',
          contenu:`Mémoïser les sous-problèmes pour éviter les calculs redondants.<br><strong>Top-down (mémoïsation)</strong> : récursif avec cache.<br><strong>Bottom-up (tabulation)</strong> : itératif, remplir un tableau.<br>Exemples : suite de Fibonacci, sac à dos 0/1, plus longue sous-suite commune.` },
      ]},
    ],
  },
  {
    id: 'nsi-bdd', filiere: 'term-spe-nsi', matiere: 'info', titre: 'Bases de données', ordre: 5,
    sections: [
      { titre: 'Modèle relationnel et SQL', cartes: [
        { type:'def', label:'DEF', titre:'Modèle relationnel',
          contenu:`Une <strong>relation</strong> est un tableau avec des attributs (colonnes) et des tuples (lignes).<br><strong>Clé primaire</strong> : identifiant unique d'un tuple.<br><strong>Clé étrangère</strong> : référence une clé primaire d'une autre table (intégrité référentielle).` },
        { type:'form', label:'FORM', titre:'Requêtes SQL fondamentales',
          contenu:`<code>SELECT col FROM table WHERE condition</code><br><code>SELECT ... FROM t1 JOIN t2 ON t1.fk = t2.pk</code><br><code>SELECT col, COUNT(*) FROM t GROUP BY col HAVING COUNT(*) > 2</code><br>Opérations : <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>CREATE TABLE</code>.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERM SPÉ PC (physique-chimie)
// ══════════════════════════════════════════════════════════════
chapitres_term_spe_pc: [
  {
    id: 'phch-tpc-thermo', filiere: 'term-spe-pc', matiere: 'phch', titre: 'Thermodynamique', ordre: 1,
    sections: [
      { titre: 'Premier principe', cartes: [
        { type:'th', label:'LOI', titre:'Premier principe de la thermodynamique',
          contenu:`$$\\Delta U = W + Q$$\n$U$ : énergie interne · $W$ : travail reçu par le système · $Q$ : chaleur reçue.<br><strong>Transformation isotherme</strong> (T=cte) : $\\Delta U = 0 \\Rightarrow W = -Q$<br><strong>Adiabatique</strong> ($Q = 0$) : $\\Delta U = W$.<br>Pour un gaz parfait : $\\Delta U = nC_v \\Delta T$.` },
        { type:'form', label:'FORM', titre:'Capacités calorifiques',
          contenu:`$C_p - C_v = nR$ (relation de Mayer)<br>$\\gamma = C_p / C_v$ (rapport des capacités)<br>Transformation adiabatique réversible : $TV^{\\gamma-1} = \\text{cte}$ &nbsp;·&nbsp; $PV^\\gamma = \\text{cte}$ (loi de Laplace)` },
      ]},
      { titre: 'Second principe', cartes: [
        { type:'th', label:'LOI', titre:'Second principe (entropie)',
          contenu:`$$\\Delta S \\ge \\frac{Q}{T}$$\n(égalité pour une transformation réversible)<br>L'entropie $S$ d'un système isolé ne peut que croître ou rester constante (irréversibilité).<br><strong>Entropie d'un gaz parfait</strong> : $\\Delta S = nC_v \\ln\\dfrac{T_2}{T_1} + nR\\ln\\dfrac{V_2}{V_1}$` },
      ]},
    ],
  },
  {
    id: 'phch-tpc-cineq', filiere: 'term-spe-pc', matiere: 'phch', titre: 'Cinétique chimique', ordre: 2,
    sections: [
      { titre: 'Vitesse de réaction', cartes: [
        { type:'def', label:'DEF', titre:'Vitesse de réaction',
          contenu:`Vitesse volumique : $v = \\dfrac{1}{\\nu_i}\\dfrac{d[A_i]}{dt}$ (avec signe adapté).<br>Loi de vitesse empirique : $v = k \\cdot [A]^p [B]^q$ ($p$, $q$ : ordres partiels).<br>Ordre global : $n = p + q$. Unité de $k$ : mol$^{1-n}$·L$^{n-1}$·s$^{-1}$.` },
        { type:'form', label:'FORM', titre:'Ordres 1 et 2',
          contenu:`<strong>Ordre 1</strong> : $[A](t) = [A]_0 e^{-kt}$ &nbsp;·&nbsp; $t_{1/2} = \\dfrac{\\ln 2}{k}$<br><strong>Ordre 2</strong> : $\\dfrac{1}{[A](t)} = \\dfrac{1}{[A]_0} + kt$ &nbsp;·&nbsp; $t_{1/2} = \\dfrac{1}{k[A]_0}$` },
      ]},
    ],
  },
  {
    id: 'phch-tpc-acid', filiere: 'term-spe-pc', matiere: 'phch', titre: 'Équilibres acido-basiques', ordre: 3,
    sections: [
      { titre: 'pH et constante d\'acidité', cartes: [
        { type:'def', label:'DEF', titre:'Acide, base et pH',
          contenu:`<strong>Acide</strong> de Brønsted : donneur de proton $\\mathrm{H^+}$.<br><strong>Base</strong> de Brønsted : accepteur de proton.<br>$\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$<br>À 25°C, eau pure : $\\mathrm{pH} = 7$, $[\\mathrm{H_3O^+}] = [\\mathrm{HO^-}] = 10^{-7}$ mol/L.` },
        { type:'form', label:'FORM', titre:'Constante d\'acidité $K_a$',
          contenu:`Couple acide/base : $\\mathrm{AH} / \\mathrm{A^-}$.<br>$K_a = \\dfrac{[\\mathrm{A^-}][\\mathrm{H_3O^+}]}{[\\mathrm{AH}]}$ &nbsp;·&nbsp; $\\mathrm{p}K_a = -\\log K_a$<br>Acide fort ($\\mathrm{p}K_a < 0$) : dissociation totale.<br>Solution d'acide faible : $\\mathrm{pH} \\approx \\dfrac{\\mathrm{p}K_a - \\log C}{2}$` },
      ]},
    ],
  },
  {
    id: 'phch-tpc-elec', filiere: 'term-spe-pc', matiere: 'phch', titre: 'Électrochimie', ordre: 4,
    sections: [
      { titre: 'Oxydoréduction et piles', cartes: [
        { type:'def', label:'DEF', titre:'Couple redox et réaction',
          contenu:`Un <strong>couple oxydant/réducteur</strong> $\\mathrm{Ox/Red}$ est lié par la demi-équation :<br>$\\mathrm{Ox} + ne^- \\rightleftharpoons \\mathrm{Red}$<br><strong>Potentiel standard</strong> $E^\\circ$ (v. tableau des potentiels).<br>Le métal avec le plus petit $E^\\circ$ est le réducteur le plus fort.` },
        { type:'form', label:'FORM', titre:'FEM d\'une pile',
          contenu:`$E_{\text{pile}} = E^\\circ_{\text{cathode}} - E^\\circ_{\text{anode}}$ (en conditions standards)<br>Équation de Nernst : $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$<br>$R = 8{,}314$ J/mol·K, $F = 96485$ C/mol, $Q$ : quotient de réaction.` },
      ]},
    ],
  },
],

// ══════════════════════════════════════════════════════════════
// TERM SPÉ SI
// ══════════════════════════════════════════════════════════════
chapitres_term_spe_si: [
  {
    id: 'si-tsi-model', filiere: 'term-spe-si', matiere: 'si', titre: 'Modélisation des systèmes', ordre: 1,
    sections: [
      { titre: 'Approche systémique', cartes: [
        { type:'def', label:'DEF', titre:'Système pluritechnique',
          contenu:`Un <strong>système pluritechnique</strong> est un ensemble organisé de composants interagissant pour réaliser une fonction.<br>Analyse : Besoin → Fonction → Solution.<br><strong>Diagramme SysML</strong> : modélisation des exigences, de la structure et des comportements.` },
        { type:'def', label:'DEF', titre:'Chaîne d\'énergie et d\'information',
          contenu:`<strong>Chaîne d'énergie</strong> : ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE → AGIR.<br><strong>Chaîne d'information</strong> : ACQUÉRIR → TRAITER → COMMUNIQUER → AGIR.<br>La chaîne d'information pilote la chaîne d'énergie via les actionneurs.` },
      ]},
    ],
  },
  {
    id: 'si-tsi-cin', filiere: 'term-spe-si', matiere: 'si', titre: 'Cinématique', ordre: 2,
    sections: [
      { titre: 'Torseurs et liaisons', cartes: [
        { type:'def', label:'DEF', titre:'Liaisons mécaniques',
          contenu:`<strong>Encastrement</strong> : 0 degré de liberté (aucun mouvement).<br><strong>Pivot</strong> : 1 rotation autour d'un axe.<br><strong>Glissière</strong> : 1 translation selon un axe.<br><strong>Pivot-glissant</strong> : 1 rotation + 1 translation coaxiales.<br><strong>Appui plan</strong> : 2 rotations + 1 translation perpendiculaire au plan (3 ddl).` },
      ]},
    ],
  },
  {
    id: 'si-tsi-asserv', filiere: 'term-spe-si', matiere: 'si', titre: 'Systèmes asservis', ordre: 3,
    sections: [
      { titre: 'Régulation et asservissement', cartes: [
        { type:'def', label:'DEF', titre:'Système en boucle fermée',
          contenu:`Un <strong>asservissement</strong> mesure la sortie et la compare à la consigne pour corriger l'erreur.<br>Schéma-blocs : comparateur → correcteur → actionneur → capteur (retour).<br><strong>Erreur statique</strong> : $\\varepsilon = y_{\text{ref}} - y_{\text{sortie}}$ en régime permanent.` },
        { type:'def', label:'DEF', titre:'Correcteur PID',
          contenu:`$u(t) = K_p \\, e(t) + K_i \\int e(t)\\,dt + K_d \\dfrac{de}{dt}$<br><strong>P</strong> (proportionnel) : réduit l'erreur mais crée un écart résiduel.<br><strong>I</strong> (intégral) : annule l'erreur statique.<br><strong>D</strong> (dérivé) : anticipe les variations, améliore la rapidité.` },
      ]},
    ],
  },
],

};

// ── Fonction principale ───────────────────────────────────────────────────────

export function seedLyceeIfNeeded(db) {
  const stmt = db.prepare("SELECT COUNT(*) as n FROM sections WHERE chapitre_id IN ('ma-1e-suites','ma-2e-ens','ma-tg-lim')");
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  if (row && row.n > 0) {
    console.log('[seed-lycee] Données déjà présentes, skip.');
    return;
  }

  console.log('[seed-lycee] Insertion des données lycée...');

  function lastId() {
    const s = db.prepare("SELECT last_insert_rowid() as id");
    const r = s.step() ? s.getAsObject() : null;
    s.free();
    return r ? r.id : null;
  }

  let chapCount = 0, secCount = 0, carteCount = 0;

  const allGroups = [
    DATA.chapitres_2nde_ma,
    DATA.chapitres_2nde_phch,
    DATA.chapitres_1ere_ma,
    DATA.chapitres_1ere_phch,
    DATA.chapitres_term_ma,
    DATA.chapitres_term_phch,
    DATA.chapitres_term_spe_ma,
    DATA.chapitres_term_nsi,
    DATA.chapitres_term_spe_pc,
    DATA.chapitres_term_spe_si,
  ];

  for (const group of allGroups) {
    for (const chap of group) {
      try {
        db.run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)',
          [chap.id, chap.matiere, chap.titre]);
        chapCount++;
      } catch (e) { console.error('[seed-lycee] chapitre', chap.id, e.message); continue; }

      try {
        db.run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)',
          [chap.filiere, chap.id, chap.ordre]);
      } catch {}

      for (let si = 0; si < chap.sections.length; si++) {
        const sec = chap.sections[si];
        try {
          db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)',
            [chap.id, sec.titre, si + 1]);
        } catch (e) { console.error('[seed-lycee] section', chap.id, e.message); continue; }
        const secId = lastId();
        secCount++;

        for (let ki = 0; ki < sec.cartes.length; ki++) {
          const c = sec.cartes[ki];
          try {
            db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
              [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
            carteCount++;
          } catch (e) { console.error('[seed-lycee] carte', c.titre, e.message); }
        }
      }
    }
  }

  console.log(`[seed-lycee] Done: ${chapCount} chapitres, ${secCount} sections, ${carteCount} cartes.`);
}
