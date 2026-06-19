export const DATA = [
  {
    id: 'ma-tg-log',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Étude complète d\'une fonction avec logarithme',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie sur $]0\\,;\\,+\\infty[$ par
$$f(x) = x - 2 + \\ln(x).$$
<strong>1.</strong> Déterminer les limites de $f$ en $0^+$ et en $+\\infty$.
<strong>2.</strong> Étudier les variations de $f$ sur $]0\\,;\\,+\\infty[$ et dresser son tableau de variations.
<strong>3.</strong> Montrer que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ sur $]0\\,;\\,+\\infty[$, puis justifier que $1 < \\alpha < 2$.
<strong>4.</strong> Résoudre dans $]0\\,;\\,+\\infty[$ l'inéquation $\\ln(x) \\geqslant 2 - x$, et exprimer l'ensemble des solutions à l'aide de $\\alpha$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> En $0^+$ : $x - 2 \\to -2$ et $\\ln(x) \\to -\\infty$, donc $f(x) \\to -\\infty$.
En $+\\infty$ : $x - 2 \\to +\\infty$ et $\\ln(x) \\to +\\infty$, donc $f(x) \\to +\\infty$.
<br><strong>2.</strong> $f$ est dérivable et $f'(x) = 1 + \\dfrac{1}{x}$. Pour tout $x > 0$, $\\dfrac{1}{x} > 0$ donc $f'(x) > 0$ : $f$ est strictement croissante sur $]0\\,;\\,+\\infty[$.
Tableau : $f$ croît de $-\\infty$ (en $0^+$) à $+\\infty$ (en $+\\infty$).
<br><strong>3.</strong> $f$ est continue (somme de fonctions continues) et strictement croissante sur $]0\\,;\\,+\\infty[$, avec $\\lim_{0^+} f = -\\infty < 0$ et $\\lim_{+\\infty} f = +\\infty > 0$. D'après le théorème de la bijection (valeurs intermédiaires + stricte monotonie), $f(x)=0$ admet une unique solution $\\alpha$.
Encadrement : $f(1) = 1 - 2 + \\ln 1 = -1 < 0$ et $f(2) = 2 - 2 + \\ln 2 = \\ln 2 \\approx 0{,}69 > 0$. Comme $f$ est croissante et $f(1) < 0 < f(2)$, on a $1 < \\alpha < 2$.
<br><strong>4.</strong> $\\ln(x) \\geqslant 2 - x \\iff x - 2 + \\ln(x) \\geqslant 0 \\iff f(x) \\geqslant 0$. Or $f$ est croissante et $f(\\alpha) = 0$, donc $f(x) \\geqslant 0 \\iff x \\geqslant \\alpha$. L'ensemble des solutions est $[\\alpha\\,;\\,+\\infty[$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-combi',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Comités, mots et coefficients binomiaux',
            contenu: `<strong>Énoncé.</strong> Un club compte $12$ membres : $7$ femmes et $5$ hommes.
<strong>1.</strong> Combien de mots de $5$ lettres distinctes peut-on former avec les lettres du mot $\\text{MATHS}$ ? Combien si l'on autorise la répétition des lettres ?
<strong>2.</strong> On choisit un comité de $4$ personnes parmi les $12$ membres. Combien de comités différents peut-on former ?
<strong>3.</strong> Combien de ces comités comportent exactement $2$ femmes et $2$ hommes ?
<strong>4.</strong> Combien de comités comportent au moins une femme ?
<strong>5.</strong> Développer $(a+b)^4$ à l'aide de la formule du binôme de Newton, puis en déduire la valeur de $\\displaystyle\\sum_{k=0}^{4} \\binom{4}{k}$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les $5$ lettres de MATHS sont distinctes : un mot de $5$ lettres distinctes est une permutation des $5$ lettres, soit $5! = 120$ mots. Avec répétition autorisée (listes de $5$ lettres prises parmi $5$) : $5^5 = 3125$ mots.
<br><strong>2.</strong> Un comité est une partie à $4$ éléments d'un ensemble à $12$ : $\\binom{12}{4} = \\dfrac{12 \\times 11 \\times 10 \\times 9}{4!} = \\dfrac{11880}{24} = 495$ comités.
<br><strong>3.</strong> On choisit $2$ femmes parmi $7$ et $2$ hommes parmi $5$ : $\\binom{7}{2}\\times\\binom{5}{2} = 21 \\times 10 = 210$ comités.
<br><strong>4.</strong> On dénombre par l'événement contraire « aucune femme », c'est-à-dire $4$ hommes parmi $5$ : $\\binom{5}{4} = 5$. Donc « au moins une femme » : $495 - 5 = 490$ comités.
<br><strong>5.</strong> Formule du binôme : $(a+b)^4 = \\binom{4}{0}a^4 + \\binom{4}{1}a^3 b + \\binom{4}{2}a^2 b^2 + \\binom{4}{3}a b^3 + \\binom{4}{4}b^4 = a^4 + 4a^3 b + 6 a^2 b^2 + 4 a b^3 + b^4$.
En posant $a = b = 1$ : $(1+1)^4 = \\sum_{k=0}^{4}\\binom{4}{k}$, donc $\\sum_{k=0}^{4}\\binom{4}{k} = 2^4 = 16$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-complexe',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Équation, module, argument et triangle',
            contenu: `<strong>Énoncé.</strong> Le plan complexe est muni d'un repère orthonormé direct $(O\\,;\\,\\vec{u},\\vec{v})$.
<strong>1.</strong> Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 2z + 4 = 0$.
<strong>2.</strong> On note $z_A = 1 + i\\sqrt{3}$ une solution. Déterminer le module et un argument de $z_A$, puis écrire $z_A$ sous forme exponentielle.
<strong>3.</strong> On considère les points $A$, $B$ et $C$ d'affixes $z_A = 1 + i\\sqrt{3}$, $z_B = 1 - i\\sqrt{3}$ et $z_C = 2$. Calculer les longueurs $AB$, $AC$ et $BC$. Quelle est la nature du triangle $ABC$ ?
<strong>4.</strong> Calculer $z_A^{\\,3}$ et interpréter le résultat à l'aide de la forme exponentielle.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Discriminant : $\\Delta = (-2)^2 - 4\\times 1 \\times 4 = 4 - 16 = -12 < 0$. Racines complexes conjuguées :
$z = \\dfrac{2 \\pm i\\sqrt{12}}{2} = \\dfrac{2 \\pm 2i\\sqrt{3}}{2} = 1 \\pm i\\sqrt{3}$. Solutions : $\\{ 1 + i\\sqrt{3}\\,;\\,1 - i\\sqrt{3} \\}$.
<br><strong>2.</strong> Module : $|z_A| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2$. Argument $\\theta$ : $\\cos\\theta = \\dfrac{1}{2}$ et $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$, donc $\\theta = \\dfrac{\\pi}{3}$. Forme exponentielle : $z_A = 2\\,e^{i\\pi/3}$.
<br><strong>3.</strong> $AB = |z_B - z_A| = |-2i\\sqrt{3}| = 2\\sqrt{3}$. $AC = |z_C - z_A| = |1 - i\\sqrt{3}| = 2$. $BC = |z_C - z_B| = |1 + i\\sqrt{3}| = 2$. On a $AC = BC = 2$ : le triangle $ABC$ est isocèle en $C$.
<br><strong>4.</strong> Avec la forme exponentielle : $z_A^{\\,3} = (2 e^{i\\pi/3})^3 = 2^3 e^{i\\pi} = 8 \\times (-1) = -8$. Donc $z_A^{\\,3} = -8$, réel négatif : élever au cube triple l'argument ($3 \\times \\frac{\\pi}{3} = \\pi$) et cube le module ($2^3 = 8$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-deriv',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Variations, convexité et tangente',
            contenu: `<strong>Énoncé.</strong> Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x^2 - 3)\\,e^{x}$.
<strong>1.</strong> Calculer $f'(x)$ et montrer que $f'(x) = (x^2 + 2x - 3)\\,e^{x}$. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$.
<strong>2.</strong> Calculer $f''(x)$ et montrer que $f''(x) = (x^2 + 4x - 1)\\,e^{x}$.
<strong>3.</strong> Déterminer les abscisses des points d'inflexion de la courbe $\\mathcal{C}_f$ et préciser sur quels intervalles $f$ est convexe ou concave.
<strong>4.</strong> Déterminer l'équation de la tangente $T$ à $\\mathcal{C}_f$ au point d'abscisse $0$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f$ est un produit $u\\,v$ avec $u = x^2 - 3$ ($u' = 2x$) et $v = e^x$ ($v' = e^x$). Donc
$f'(x) = 2x\\,e^x + (x^2 - 3)e^x = (x^2 + 2x - 3)\\,e^x$.
Comme $e^x > 0$, le signe de $f'$ est celui de $x^2 + 2x - 3 = (x-1)(x+3)$, qui s'annule en $-3$ et $1$.
$f'(x) > 0$ sur $]-\\infty\\,;\\,-3[$ et $]1\\,;\\,+\\infty[$, $f'(x) < 0$ sur $]-3\\,;\\,1[$. Donc $f$ croît, puis décroît sur $[-3\\,;\\,1]$, puis croît. Maximum local en $-3$, minimum local en $1$ : $f(1) = -2e$.
<br><strong>2.</strong> $f'(x) = (x^2 + 2x - 3)e^x$. En dérivant ce produit : $f''(x) = (2x + 2)e^x + (x^2 + 2x - 3)e^x = (x^2 + 4x - 1)\\,e^x$.
<br><strong>3.</strong> Le signe de $f''$ est celui de $x^2 + 4x - 1$, de discriminant $\\Delta = 16 + 4 = 20$, racines $x = \\dfrac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}$. $f''$ s'annule en changeant de signe en ces deux valeurs : ce sont les abscisses des deux points d'inflexion. $f$ est convexe ($f'' > 0$) sur $]-\\infty\\,;\\,-2-\\sqrt{5}[$ et $]-2+\\sqrt{5}\\,;\\,+\\infty[$, concave ($f'' < 0$) sur $]-2-\\sqrt{5}\\,;\\,-2+\\sqrt{5}[$.
<br><strong>4.</strong> $f(0) = (0 - 3)e^0 = -3$ et $f'(0) = (0 + 0 - 3)e^0 = -3$. Tangente : $y = f'(0)(x - 0) + f(0) = -3x - 3$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-eqdiff',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Refroidissement et équation y\\\' = ay + b',
            contenu: `<strong>Énoncé.</strong> Un objet sort d'un four à $80\\,°\\text{C}$ dans une pièce à $20\\,°\\text{C}$. On note $T(t)$ sa température (en $°\\text{C}$) après $t$ minutes. La loi de refroidissement de Newton donne
$$T'(t) = -0{,}1\\,(T(t) - 20).$$
<strong>1.</strong> Montrer que $T$ est solution de l'équation différentielle $y' = -0{,}1\\,y + 2$.
<strong>2.</strong> Résoudre l'équation $y' = -0{,}1\\,y + 2$ : déterminer la solution générale, puis la solution constante (particulière).
<strong>3.</strong> Déterminer la fonction $T$ vérifiant la condition initiale $T(0) = 80$.
<strong>4.</strong> Quelle est la limite de $T(t)$ quand $t \\to +\\infty$ ? Interpréter. Au bout de combien de temps la température atteint-elle $40\\,°\\text{C}$ ? (On donnera la valeur exacte puis une valeur approchée, $\\ln 3 \\approx 1{,}10$.)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $T'(t) = -0{,}1(T - 20) = -0{,}1\\,T + 2$. Donc $T$ vérifie $y' = -0{,}1\\,y + 2$, de la forme $y' = ay + b$ avec $a = -0{,}1$ et $b = 2$.
<br><strong>2.</strong> Les solutions de $y' = ay + b$ sont $y(t) = C e^{at} - \\dfrac{b}{a}$, avec $-\\dfrac{b}{a} = -\\dfrac{2}{-0{,}1} = 20$. Solution générale : $y(t) = C\\,e^{-0{,}1\\,t} + 20$, $C \\in \\mathbb{R}$. La solution constante est $y(t) = 20$ (obtenue pour $C = 0$).
<br><strong>3.</strong> $T(0) = C + 20 = 80 \\Rightarrow C = 60$. Donc $T(t) = 60\\,e^{-0{,}1\\,t} + 20$.
<br><strong>4.</strong> Quand $t \\to +\\infty$, $e^{-0{,}1\\,t} \\to 0$ donc $T(t) \\to 20$ : l'objet tend vers la température de la pièce. Pour $T(t) = 40$ : $60\\,e^{-0{,}1t} + 20 = 40 \\iff e^{-0{,}1t} = \\dfrac{1}{3} \\iff -0{,}1\\,t = \\ln\\!\\left(\\dfrac{1}{3}\\right) = -\\ln 3 \\iff t = 10\\ln 3$. Valeur approchée : $t \\approx 10 \\times 1{,}10 = 11$ minutes.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-exp',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Étude d\'une fonction à base d\'exponentielle',
            contenu: `<strong>Énoncé.</strong> Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x + 1)\\,e^{-x}$.
<strong>1.</strong> Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$. (On rappelle que $\\lim_{x\\to+\\infty} x e^{-x} = 0$.)
<strong>2.</strong> Calculer $f'(x)$ et montrer que $f'(x) = -x\\,e^{-x}$. En déduire le tableau de variations de $f$.
<strong>3.</strong> Montrer que pour tout réel $x$, $f(x) > 0 \\iff x > -1$.
<strong>4.</strong> Déterminer l'équation de la tangente $T$ à la courbe au point d'abscisse $0$, puis étudier la position relative de la courbe et de $T$ au voisinage de $0$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> En $-\\infty$ : $x + 1 \\to -\\infty$ et $e^{-x} \\to +\\infty$, donc $f(x) \\to -\\infty$. En $+\\infty$ : $f(x) = x e^{-x} + e^{-x}$ ; $x e^{-x} \\to 0$ et $e^{-x} \\to 0$, donc $f(x) \\to 0$ (asymptote horizontale $y = 0$).
<br><strong>2.</strong> Produit $u v$ avec $u = x+1$ ($u' = 1$) et $v = e^{-x}$ ($v' = -e^{-x}$) :
$f'(x) = e^{-x} + (x+1)(-e^{-x}) = e^{-x}\\big(1 - (x+1)\\big) = -x\\,e^{-x}$.
Comme $e^{-x} > 0$, $f'(x)$ a le signe de $-x$ : $f'(x) > 0$ pour $x < 0$, $f'(x) < 0$ pour $x > 0$. $f$ croît sur $]-\\infty\\,;\\,0]$ puis décroît sur $[0\\,;\\,+\\infty[$, maximum $f(0) = 1$.
<br><strong>3.</strong> $e^{-x} > 0$ pour tout $x$, donc $f(x)$ a le signe de $x + 1$. Ainsi $f(x) > 0 \\iff x + 1 > 0 \\iff x > -1$.
<br><strong>4.</strong> $f(0) = 1$, $f'(0) = 0$, donc $T : y = 1$. Position : on étudie le signe de $g(x) = f(x) - 1$. On a $g(0) = 0$ ; comme $f$ admet un maximum global local en $0$ (croissante avant, décroissante après) avec $f(0) = 1$, on a $f(x) \\leqslant 1$ au voisinage de $0$, donc la courbe est en dessous de sa tangente $T$ près de $0$ (point de maximum).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-integ',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Primitive, IPP et aire sous la courbe',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie sur $[0\\,;\\,1]$ par $f(x) = x\\,e^{x}$.
<strong>1.</strong> Déterminer une primitive $F$ de $f$ sur $\\mathbb{R}$. (On pourra utiliser une intégration par parties.)
<strong>2.</strong> Calculer la valeur exacte de $I = \\displaystyle\\int_0^1 x\\,e^x \\,\\mathrm{d}x$.
<strong>3.</strong> Interpréter $I$ comme une aire et justifier que $I > 0$.
<strong>4.</strong> Pour tout entier $n \\geqslant 1$, on pose $u_n = \\displaystyle\\int_0^1 x^n\\,e^x\\,\\mathrm{d}x$. Montrer que pour tout $x \\in [0\\,;\\,1]$, $0 \\leqslant x^n e^x \\leqslant e\\,x^n$, puis en déduire un encadrement de $u_n$ et la limite de $(u_n)$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Intégration par parties avec $u = x$ ($u' = 1$) et $v' = e^x$ ($v = e^x$) :
$\\displaystyle\\int x e^x \\,\\mathrm{d}x = x e^x - \\int e^x \\,\\mathrm{d}x = x e^x - e^x = (x-1)e^x$. Donc $F(x) = (x-1)e^x$.
<br><strong>2.</strong> $I = \\big[(x-1)e^x\\big]_0^1 = (1-1)e^1 - (0-1)e^0 = 0 - (-1) = 1$. Donc $I = 1$.
<br><strong>3.</strong> Sur $[0\\,;\\,1]$, $f(x) = x e^x \\geqslant 0$ (produit de $x \\geqslant 0$ et $e^x > 0$). Donc $I$ est l'aire, en unités d'aire, du domaine compris entre la courbe de $f$, l'axe des abscisses et les droites $x = 0$ et $x = 1$. Cette aire est strictement positive car $f$ n'est pas identiquement nulle : $I = 1 > 0$.
<br><strong>4.</strong> Pour $x \\in [0\\,;\\,1]$ : $x^n \\geqslant 0$ et $1 \\leqslant e^x \\leqslant e$, donc $0 \\leqslant x^n e^x \\leqslant e\\,x^n$. Par croissance de l'intégrale (bornes croissantes) :
$0 \\leqslant u_n \\leqslant e\\displaystyle\\int_0^1 x^n \\,\\mathrm{d}x = e \\left[\\dfrac{x^{n+1}}{n+1}\\right]_0^1 = \\dfrac{e}{n+1}$.
Comme $\\dfrac{e}{n+1} \\to 0$ quand $n \\to +\\infty$, par le théorème des gendarmes $\\lim_{n\\to+\\infty} u_n = 0$.
</details>`
          }
        ]
      }
    ]
  }
]
