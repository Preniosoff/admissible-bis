export const DATA = [
  {
    id: 'ma-alg',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Projecteur, changement de base et exponentielle',
            contenu: `<strong>Énoncé.</strong> On travaille dans $E = \\mathbb{R}^3$ muni de sa base canonique $\\mathcal{B} = (e_1, e_2, e_3)$. Soit $u$ l'endomorphisme de matrice
$$A = \\begin{pmatrix} 2 & -1 & -1 \\\\ -1 & 2 & -1 \\\\ -1 & -1 & 2 \\end{pmatrix}.$$
On note $F = \\mathrm{Vect}(\\varepsilon_1)$ où $\\varepsilon_1 = (1,1,1)$ et $G = \\{ (x,y,z) \\in \\mathbb{R}^3 \\mid x+y+z = 0 \\}$.

<strong>1.</strong> Montrer que $E = F \\oplus G$ et déterminer $u(\\varepsilon_1)$ ainsi que $u(v)$ pour $v \\in G$.

<strong>2.</strong> En déduire une base $\\mathcal{B}' = (\\varepsilon_1, \\varepsilon_2, \\varepsilon_3)$ adaptée à cette décomposition et écrire la matrice $D$ de $u$ dans $\\mathcal{B}'$. Donner la matrice de passage $P$ et la relation entre $A$, $P$, $D$.

<strong>3.</strong> Calculer $\\exp(A)$.

<strong>4.</strong> Déterminer le polynôme $L \\in \\mathbb{R}_2[X]$ qui interpole $t \\mapsto e^t$ aux valeurs propres de $A$, et vérifier que $\\exp(A) = L(A)$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $G$ est un hyperplan (noyau de la forme $x+y+z$), donc $\\dim G = 2$, et $\\varepsilon_1 \\notin G$ car $1+1+1 = 3 \\neq 0$. Comme $\\dim F + \\dim G = 1 + 2 = 3 = \\dim E$ et $F \\cap G = \\{0\\}$, on a $E = F \\oplus G$.

Calcul : $A\\varepsilon_1 = (2-1-1,\\, -1+2-1,\\, -1-1+2)^T = (0,0,0)^T$, donc $u(\\varepsilon_1) = 0$.
Pour $v = (x,y,z) \\in G$, on a $x+y+z = 0$, donc la première composante de $Av$ est $2x - y - z = 2x - (y+z) = 2x - (-x) = 3x$. De même partout : $u(v) = 3v$. Donc $G$ est le sous-espace propre associé à la valeur propre $3$ et $F$ celui associé à $0$.

<strong>2.</strong> Prenons $\\varepsilon_2 = (1,-1,0)$ et $\\varepsilon_3 = (1,0,-1)$, qui sont dans $G$ (somme nulle) et libres. Alors $\\mathcal{B}' = (\\varepsilon_1, \\varepsilon_2, \\varepsilon_3)$ est une base et
$$D = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}, \\qquad P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 0 \\\\ 1 & 0 & -1 \\end{pmatrix}, \\qquad A = PDP^{-1}.$$

<strong>3.</strong> Comme $A = PDP^{-1}$, on a $\\exp(A) = P\\exp(D)P^{-1}$ avec $\\exp(D) = \\mathrm{diag}(1, e^3, e^3)$.
Par symétrie de la situation (un projecteur orthogonal apparaît), écrivons $A = 3(I - p)$ où $p$ est le projecteur sur $F = \\mathrm{Vect}(\\varepsilon_1)$ : on vérifie que $p = \\frac{1}{3}J$ avec $J$ la matrice de coefficients tous égaux à $1$, et $A = 3I - J$. Comme $J^2 = 3J$, $p^2 = p$. Alors $A = 3(I-p)$ et $\\exp(A) = e^0 p + e^3 (I - p) = p + e^3(I-p)$. Numériquement
$$\\exp(A) = \\frac{1}{3}\\begin{pmatrix} 1+2e^3 & 1-e^3 & 1-e^3 \\\\ 1-e^3 & 1+2e^3 & 1-e^3 \\\\ 1-e^3 & 1-e^3 & 1+2e^3 \\end{pmatrix}.$$

<strong>4.</strong> Les valeurs propres sont $0$ et $3$ (double). On cherche $L(X) = aX + b$ tel que $L(0) = e^0 = 1$ et $L(3) = e^3$ : $b = 1$, $3a + 1 = e^3$ donc $a = \\frac{e^3 - 1}{3}$. Ainsi $L(X) = \\frac{e^3-1}{3}X + 1$. Comme le polynôme minimal de $A$ est $X(X-3)$ (scindé à racines simples) et que $\\exp$ coïncide avec $L$ sur le spectre, on a bien $\\exp(A) = L(A) = \\frac{e^3-1}{3}A + I$, ce qui redonne le résultat de la question 3.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-ann',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Idéaux, division euclidienne et racines multiples',
            contenu: `<strong>Énoncé.</strong> On travaille dans l'anneau $\\mathbb{R}[X]$. On pose
$$P = X^4 - 2X^3 + 2X^2 - 2X + 1.$$

<strong>1.</strong> Montrer que $P$ admet $1$ comme racine et préciser sa multiplicité.

<strong>2.</strong> Factoriser $P$ en produit de facteurs irréductibles dans $\\mathbb{R}[X]$, puis dans $\\mathbb{C}[X]$.

<strong>3.</strong> On considère les polynômes $A = X^3 - 1$ et $B = X^2 - 1$. Déterminer $\\gcd(A,B)$ par l'algorithme d'Euclide, et trouver $U, V \\in \\mathbb{R}[X]$ tels que $AU + BV = \\gcd(A,B)$ (relation de Bézout).

<strong>4.</strong> Décrire l'idéal $I = (A) + (B)$ de $\\mathbb{R}[X]$, c'est-à-dire trouver un générateur. Justifier que tout idéal de $\\mathbb{R}[X]$ est de cette forme (principalité).

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $P(1) = 1 - 2 + 2 - 2 + 1 = 0$. On dérive : $P'(X) = 4X^3 - 6X^2 + 4X - 2$, $P'(1) = 4 - 6 + 4 - 2 = 0$. Puis $P''(X) = 12X^2 - 12X + 4$, $P''(1) = 12 - 12 + 4 = 4 \\neq 0$. Donc $1$ est racine de multiplicité exactement $2$ (caractérisation par les dérivées : $P(1) = P'(1) = 0$, $P''(1) \\neq 0$).

<strong>2.</strong> On factorise $(X-1)^2 = X^2 - 2X + 1$. En posant la division de $P$ par $X^2 - 2X + 1$ :
$$P = (X^2 - 2X + 1)(X^2 + 1).$$
On vérifie : $(X^2 - 2X + 1)(X^2+1) = X^4 + X^2 - 2X^3 - 2X + X^2 + 1 = X^4 - 2X^3 + 2X^2 - 2X + 1$. ✓
Le facteur $X^2 + 1$ a un discriminant $-4 < 0$, donc il est irréductible sur $\\mathbb{R}$. La factorisation réelle est $P = (X-1)^2(X^2+1)$.
Sur $\\mathbb{C}$ : $X^2 + 1 = (X-i)(X+i)$, donc $P = (X-1)^2(X-i)(X+i)$.

<strong>3.</strong> Euclide : $A = X^3 - 1$, $B = X^2 - 1$.
$A = X \\cdot B + (X - 1)$ car $X(X^2-1) = X^3 - X$ et $A - (X^3 - X) = X - 1$.
$B = (X+1)(X-1) + 0$, donc $B$ est divisible par $X - 1$. Le dernier reste non nul est $X - 1$ : $\\gcd(A,B) = X - 1$ (unitaire).
Bézout : de la première division, $X - 1 = A - XB$, donc $U = 1$, $V = -X$ conviennent : $A \\cdot 1 + B \\cdot (-X) = X - 1$.

<strong>4.</strong> Dans l'anneau principal $\\mathbb{R}[X]$, $(A) + (B) = (\\gcd(A,B)) = (X-1)$. En effet $X - 1$ divise $A$ et $B$ donc $(A)+(B) \\subseteq (X-1)$, et réciproquement la relation de Bézout $X - 1 = A \\cdot 1 + B \\cdot(-X) \\in (A)+(B)$ donne $(X-1) \\subseteq (A)+(B)$.
Principalité : $\\mathbb{R}[X]$ est euclidien (division euclidienne par le degré), donc principal. Pour un idéal $J \\neq \\{0\\}$, on prend $D \\in J$ non nul de degré minimal ; pour tout $Q \\in J$, la division $Q = DS + R$ avec $\\deg R < \\deg D$ donne $R = Q - DS \\in J$, donc $R = 0$ par minimalité du degré, et $J = (D)$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-cvg',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Intégrale à paramètre, convergence dominée et terme à terme',
            contenu: `<strong>Énoncé.</strong> Pour $x > 0$, on pose
$$f(x) = \\int_0^{+\\infty} \\frac{e^{-xt}}{1 + t^2}\\, dt.$$

<strong>1.</strong> Justifier que $f$ est bien définie pour tout $x > 0$ et étudier sa continuité sur $]0, +\\infty[$.

<strong>2.</strong> Montrer que $f$ est de classe $\\mathcal{C}^1$ sur $]0, +\\infty[$ et exprimer $f'(x)$ sous forme d'une intégrale.

<strong>3.</strong> Déterminer $\\displaystyle\\lim_{x \\to +\\infty} f(x)$ à l'aide du théorème de convergence dominée.

<strong>4.</strong> Calculer $\\displaystyle\\int_0^1 \\frac{\\arctan t}{t}\\, dt$ en développant $\\arctan$ en série entière et en intégrant terme à terme (justifier l'interversion).

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour $x > 0$ fixé, $t \\mapsto \\frac{e^{-xt}}{1+t^2}$ est continue sur $[0,+\\infty[$ et $0 \\le \\frac{e^{-xt}}{1+t^2} \\le e^{-xt}$, intégrable sur $[0,+\\infty[$. Donc $f(x)$ est bien définie.
Continuité : on applique le théorème de continuité des intégrales à paramètre sur tout segment $[a,b] \\subset \\, ]0,+\\infty[$. La fonction $g(x,t) = \\frac{e^{-xt}}{1+t^2}$ est continue en $x$, et pour $x \\ge a > 0$ on a la domination $|g(x,t)| \\le \\frac{e^{-at}}{1+t^2} \\le e^{-at}$, intégrable indépendante de $x$. Donc $f$ est continue sur $[a,b]$, et comme $a$ est arbitraire, sur $]0,+\\infty[$.

<strong>2.</strong> $\\frac{\\partial g}{\\partial x}(x,t) = \\frac{-t\\, e^{-xt}}{1+t^2}$, continue. Sur $[a,b]$ avec $a > 0$, domination $\\left|\\frac{\\partial g}{\\partial x}\\right| \\le \\frac{t\\, e^{-at}}{1+t^2} \\le t\\, e^{-at}$, intégrable sur $[0,+\\infty[$. Le théorème de dérivation sous l'intégrale s'applique :
$$f'(x) = -\\int_0^{+\\infty} \\frac{t\\, e^{-xt}}{1+t^2}\\, dt, \\qquad x > 0.$$

<strong>3.</strong> Soit $(x_n) \\to +\\infty$. Pour $t > 0$, $g(x_n,t) \\to 0$, et pour $t = 0$, $g(x_n,0) = 1$. La limite simple est nulle presque partout. Domination uniforme : pour $x_n \\ge 1$, $|g(x_n,t)| \\le \\frac{e^{-t}}{1+t^2}$ intégrable. Par convergence dominée, $f(x_n) \\to \\int_0^{+\\infty} 0\\, dt = 0$. Donc $\\lim_{x\\to+\\infty} f(x) = 0$.

<strong>4.</strong> Pour $t \\in [0,1]$, $\\arctan t = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{2n+1} t^{2n+1}$ (rayon $1$). Donc $\\frac{\\arctan t}{t} = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{2n+1} t^{2n}$.
Interversion : posons $u_n(t) = \\frac{(-1)^n}{2n+1} t^{2n}$. On a $\\int_0^1 |u_n(t)|\\, dt = \\frac{1}{2n+1}\\cdot\\frac{1}{2n+1} = \\frac{1}{(2n+1)^2}$, et $\\sum \\frac{1}{(2n+1)^2}$ converge. Le théorème d'intégration terme à terme s'applique :
$$\\int_0^1 \\frac{\\arctan t}{t}\\, dt = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{2n+1}\\int_0^1 t^{2n}\\, dt = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{(2n+1)^2} = G,$$
où $G$ est la constante de Catalan $\\approx 0{,}9160$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-diff',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Gradient, règle de la chaîne et recherche d\'extrema',
            contenu: `<strong>Énoncé.</strong> Soit $f : \\mathbb{R}^2 \\to \\mathbb{R}$ définie par
$$f(x,y) = x^3 + y^3 - 3xy.$$

<strong>1.</strong> Calculer les dérivées partielles $\\partial_x f$ et $\\partial_y f$, et justifier que $f$ est de classe $\\mathcal{C}^2$. Écrire le gradient $\\nabla f(x,y)$.

<strong>2.</strong> Déterminer les points critiques de $f$.

<strong>3.</strong> Écrire la matrice hessienne $H_f(x,y)$ (vérifier le théorème de Schwarz) et déterminer la nature de chaque point critique.

<strong>4.</strong> Soit $\\gamma(t) = (\\cos t, \\sin t)$ et $\\varphi(t) = f(\\gamma(t))$. À l'aide de la règle de la chaîne, calculer $\\varphi'(t)$ et déterminer les valeurs de $t \\in [0, 2\\pi[$ pour lesquelles $\\varphi'(t) = 0$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f$ est polynomiale donc de classe $\\mathcal{C}^\\infty$ sur $\\mathbb{R}^2$, en particulier $\\mathcal{C}^2$.
$$\\partial_x f = 3x^2 - 3y, \\qquad \\partial_y f = 3y^2 - 3x, \\qquad \\nabla f(x,y) = (3x^2 - 3y,\\ 3y^2 - 3x).$$

<strong>2.</strong> Points critiques : $\\nabla f = 0$, soit $y = x^2$ et $x = y^2$. En substituant, $x = (x^2)^2 = x^4$, donc $x^4 - x = 0$, $x(x^3 - 1) = 0$ : $x = 0$ ou $x = 1$. Si $x = 0$, $y = 0$ ; si $x = 1$, $y = 1$. Les points critiques sont $(0,0)$ et $(1,1)$.

<strong>3.</strong> $\\partial_{xx} f = 6x$, $\\partial_{yy} f = 6y$, $\\partial_{xy} f = \\partial_{yx} f = -3$ (Schwarz vérifié car $f$ est $\\mathcal{C}^2$). Donc
$$H_f(x,y) = \\begin{pmatrix} 6x & -3 \\\\ -3 & 6y \\end{pmatrix}.$$
En $(0,0)$ : $H = \\begin{pmatrix} 0 & -3 \\\\ -3 & 0 \\end{pmatrix}$, déterminant $= -9 < 0$, donc point selle (col), pas d'extremum local.
En $(1,1)$ : $H = \\begin{pmatrix} 6 & -3 \\\\ -3 & 6 \\end{pmatrix}$, déterminant $= 36 - 9 = 27 > 0$ et $\\partial_{xx} f = 6 > 0$, donc minimum local. Valeur : $f(1,1) = 1 + 1 - 3 = -1$.

<strong>4.</strong> Règle de la chaîne : $\\varphi'(t) = \\nabla f(\\gamma(t)) \\cdot \\gamma'(t)$ avec $\\gamma'(t) = (-\\sin t, \\cos t)$.
$\\nabla f(\\cos t, \\sin t) = (3\\cos^2 t - 3\\sin t,\\ 3\\sin^2 t - 3\\cos t)$.
$$\\varphi'(t) = (3\\cos^2 t - 3\\sin t)(-\\sin t) + (3\\sin^2 t - 3\\cos t)(\\cos t).$$
On développe : $\\varphi'(t) = -3\\cos^2 t \\sin t + 3\\sin^2 t + 3\\sin^2 t \\cos t - 3\\cos^2 t = 3(\\sin^2 t - \\cos^2 t) + 3\\cos t \\sin t(\\sin t - \\cos t)$.
Soit $\\varphi'(t) = 3(\\sin t - \\cos t)(\\sin t + \\cos t) + 3\\cos t\\sin t(\\sin t - \\cos t) = 3(\\sin t - \\cos t)(\\sin t + \\cos t + \\sin t \\cos t)$.
$\\varphi'(t) = 0$ ssi $\\sin t = \\cos t$, soit $t = \\frac{\\pi}{4}$ ou $t = \\frac{5\\pi}{4}$, ou bien $\\sin t + \\cos t + \\sin t\\cos t = 0$. Pour ce dernier facteur, on pose $s = \\sin t + \\cos t \\in [-\\sqrt2, \\sqrt2]$, alors $\\sin t\\cos t = \\frac{s^2 - 1}{2}$ et l'équation devient $s + \\frac{s^2-1}{2} = 0$, soit $s^2 + 2s - 1 = 0$, $s = -1 + \\sqrt2$ (l'autre racine $-1-\\sqrt2 < -\\sqrt2$ est exclue). Donc $\\sin t + \\cos t = \\sqrt2 - 1$, soit $\\sqrt2\\sin(t + \\frac{\\pi}{4}) = \\sqrt2 - 1$, ce qui fournit deux solutions supplémentaires dans $[0,2\\pi[$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-ed',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Variation des constantes et système à coefficients constants',
            contenu: `<strong>Énoncé.</strong> On considère l'équation différentielle scalaire d'ordre 2 sur $\\mathbb{R}$ :
$$(E) \\quad y'' - 3y' + 2y = e^{t}.$$

<strong>1.</strong> Résoudre l'équation homogène $(E_0) : y'' - 3y' + 2y = 0$.

<strong>2.</strong> Trouver une solution particulière de $(E)$. On remarquera que $e^t$ correspond à une racine de l'équation caractéristique.

<strong>3.</strong> Donner la solution générale de $(E)$, puis l'unique solution vérifiant $y(0) = 0$ et $y'(0) = 0$.

<strong>4.</strong> Réécrire $(E_0)$ sous forme d'un système $X' = MX$ avec $X = \\begin{pmatrix} y \\\\ y' \\end{pmatrix}$, et retrouver les solutions homogènes via les valeurs propres de $M$. Relier au théorème de Cauchy linéaire (dimension de l'espace des solutions).

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Équation caractéristique : $r^2 - 3r + 2 = 0$, soit $(r-1)(r-2) = 0$, racines $r = 1$ et $r = 2$. Solution homogène :
$$y_0(t) = \\lambda e^{t} + \\mu e^{2t}, \\qquad (\\lambda, \\mu) \\in \\mathbb{R}^2.$$

<strong>2.</strong> Le second membre $e^t$ correspond à $r = 1$, racine simple : il y a résonance, on cherche $y_p(t) = a\\, t\\, e^t$. Alors $y_p' = a(1+t)e^t$, $y_p'' = a(2 + t)e^t$. En reportant :
$y_p'' - 3y_p' + 2y_p = a e^t[(2+t) - 3(1+t) + 2t] = a e^t[2 + t - 3 - 3t + 2t] = a e^t(-1) = -a e^t$.
On veut $-a e^t = e^t$, donc $a = -1$ et $y_p(t) = -t\\, e^t$.

<strong>3.</strong> Solution générale : $y(t) = \\lambda e^t + \\mu e^{2t} - t e^t$.
Conditions initiales : $y(0) = \\lambda + \\mu = 0$. $y'(t) = \\lambda e^t + 2\\mu e^{2t} - e^t - t e^t$, $y'(0) = \\lambda + 2\\mu - 1 = 0$. Du système $\\lambda + \\mu = 0$ et $\\lambda + 2\\mu = 1$ : par soustraction $\\mu = 1$, donc $\\lambda = -1$. L'unique solution est
$$y(t) = -e^t + e^{2t} - t e^t.$$

<strong>4.</strong> En posant $X = \\begin{pmatrix} y \\\\ y' \\end{pmatrix}$, $(E_0)$ équivaut à $X' = MX$ avec
$$M = \\begin{pmatrix} 0 & 1 \\\\ -2 & 3 \\end{pmatrix}.$$
Polynôme caractéristique : $\\det(M - rI) = r^2 - 3r + 2$, mêmes racines $1$ et $2$ (cohérent avec l'équation caractéristique : $M$ est la matrice compagnon). Les vecteurs propres donnent les modes $e^t$ et $e^{2t}$. Le théorème de Cauchy linéaire garantit que l'espace des solutions de $X' = MX$ sur $\\mathbb{R}$ est un $\\mathbb{R}$-espace vectoriel de dimension $2$ (égale à la taille du système), engendré par $(e^t, e^t)^T$ et $(e^{2t}, 2e^{2t})^T$ — ce qui confirme que $\\{ e^t, e^{2t} \\}$ est une base de l'espace des solutions scalaires de $(E_0)$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-eucl',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Endomorphisme autoadjoint et réduction orthogonale',
            contenu: `<strong>Énoncé.</strong> On munit $\\mathbb{R}^3$ du produit scalaire canonique. Soit $u$ l'endomorphisme de matrice
$$A = \\begin{pmatrix} 3 & 1 & 1 \\\\ 1 & 3 & 1 \\\\ 1 & 1 & 3 \\end{pmatrix}$$
dans la base canonique (orthonormée).

<strong>1.</strong> Montrer que $u$ est autoadjoint. Que peut-on en déduire sur sa diagonalisabilité et la nature de ses sous-espaces propres ?

<strong>2.</strong> Déterminer les valeurs propres et les sous-espaces propres de $u$. Vérifier leur orthogonalité.

<strong>3.</strong> Construire une base orthonormée $\\mathcal{B}'$ de vecteurs propres et donner la matrice orthogonale $Q$ telle que $Q^T A Q$ soit diagonale.

<strong>4.</strong> En déduire que $u$ est un automorphisme orthogonal multiplié par un scalaire ? Justifier en étudiant si $A$ est, à un facteur près, la matrice d'une isométrie. Conclure sur le signe de la forme quadratique $q(x) = \\langle u(x), x\\rangle$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $A$ est symétrique réelle ($A^T = A$) et la base canonique est orthonormée, donc $u$ est autoadjoint : $\\langle u(x), y\\rangle = \\langle x, u(y)\\rangle$. Le théorème spectral assure que $u$ est diagonalisable dans une base orthonormée de vecteurs propres, à valeurs propres réelles, et que les sous-espaces propres sont deux à deux orthogonaux.

<strong>2.</strong> On écrit $A = 2I + J$ où $J$ est la matrice de coefficients tous égaux à $1$. $J$ a pour valeurs propres $3$ (vecteur $(1,1,1)$) et $0$ (hyperplan $x+y+z=0$, double). Donc $A$ a pour valeurs propres $2 + 3 = 5$ et $2 + 0 = 2$ (double).
- $E_5 = \\mathrm{Vect}((1,1,1))$.
- $E_2 = \\{ (x,y,z) \\mid x+y+z = 0 \\}$, engendré par exemple par $(1,-1,0)$ et $(1,1,-2)$.
Orthogonalité : $(1,1,1)\\cdot(1,-1,0) = 0$ et $(1,1,1)\\cdot(1,1,-2) = 0$. ✓

<strong>3.</strong> On normalise. $E_5$ : $f_1 = \\frac{1}{\\sqrt3}(1,1,1)$. $E_2$ : $f_2 = \\frac{1}{\\sqrt2}(1,-1,0)$ et $f_3 = \\frac{1}{\\sqrt6}(1,1,-2)$ (on vérifie $f_2 \\perp f_3$ : $1 - 1 + 0 = 0$). Alors
$$Q = \\begin{pmatrix} 1/\\sqrt3 & 1/\\sqrt2 & 1/\\sqrt6 \\\\ 1/\\sqrt3 & -1/\\sqrt2 & 1/\\sqrt6 \\\\ 1/\\sqrt3 & 0 & -2/\\sqrt6 \\end{pmatrix}, \\qquad Q^T A Q = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}.$$
$Q$ est orthogonale ($Q^T Q = I$) car ses colonnes forment une base orthonormée.

<strong>4.</strong> $u$ n'est pas une isométrie (ni un multiple d'une isométrie) : une isométrie a toutes ses valeurs propres de module $1$, ou $A = c R$ avec $R$ orthogonale exigerait $A^T A = c^2 I$, or $A^T A = A^2$ a pour valeurs propres $25$ et $4$, non proportionnel à $I$. Donc $A$ n'est pas un multiple scalaire d'une matrice orthogonale.
En revanche, toutes les valeurs propres ($5$ et $2$) sont strictement positives, donc la forme quadratique $q(x) = \\langle u(x), x\\rangle = x^T A x$ est définie positive : pour tout $x \\neq 0$, $q(x) > 0$. (Dans la base $\\mathcal{B}'$, $q(x) = 5 a^2 + 2 b^2 + 2 c^2$ où $(a,b,c)$ sont les coordonnées de $x$.)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-evn',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Normes, compacité et continuité sur un evn',
            contenu: `<strong>Énoncé.</strong> On considère $E = \\mathbb{R}^2$ et les deux normes $\\|(x,y)\\|_1 = |x| + |y|$ et $\\|(x,y)\\|_\\infty = \\max(|x|, |y|)$. On note $S = \\{ v \\in E \\mid \\|v\\|_\\infty = 1 \\}$.

<strong>1.</strong> Montrer que pour tout $v \\in E$, $\\|v\\|_\\infty \\le \\|v\\|_1 \\le 2\\|v\\|_\\infty$. Que peut-on conclure quant à l'équivalence des deux normes et la topologie qu'elles induisent ?

<strong>2.</strong> Montrer que $S$ est une partie fermée et bornée de $E$. En déduire, en dimension finie, que $S$ est compacte.

<strong>3.</strong> Soit $\\varphi : E \\to \\mathbb{R}$, $v \\mapsto \\|v\\|_1$. Justifier que $\\varphi$ est continue, puis montrer qu'elle atteint son minimum et son maximum sur $S$. Calculer ces extrema.

<strong>4.</strong> Soit $(v_n)$ une suite de $S$ définie par $v_n = (\\cos(n), \\text{signe}(\\sin(n)))$ projetée sur $S$... plus simplement : montrer que toute suite de $S$ admet une valeur d'adhérence dans $S$, et illustrer en extrayant une sous-suite convergente de $w_n = \\big((-1)^n, \\tfrac{1}{n+1}\\big)$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Soit $v = (x,y)$. On a $\\max(|x|,|y|) \\le |x| + |y|$, d'où $\\|v\\|_\\infty \\le \\|v\\|_1$. De plus $|x| + |y| \\le 2\\max(|x|,|y|)$, d'où $\\|v\\|_1 \\le 2\\|v\\|_\\infty$. Les deux normes sont donc équivalentes (avec constantes $1$ et $2$). En conséquence elles définissent les mêmes ouverts, fermés, suites convergentes et compacts : la topologie est la même. (En dimension finie, toutes les normes sont d'ailleurs équivalentes.)

<strong>2.</strong> $S = \\varphi_\\infty^{-1}(\\{1\\})$ où $\\varphi_\\infty(v) = \\|v\\|_\\infty$ est continue ($1$-lipschitzienne : $|\\,\\|u\\|_\\infty - \\|v\\|_\\infty| \\le \\|u-v\\|_\\infty$) ; comme $\\{1\\}$ est fermé, $S$ est fermé. $S$ est borné car $\\|v\\|_\\infty = 1$ pour $v \\in S$. En dimension finie, le théorème de Borel–Lebesgue affirme que les compacts sont exactement les fermés bornés : $S$ est compacte.

<strong>3.</strong> $\\varphi = \\|\\cdot\\|_1$ est $1$-lipschitzienne pour $\\|\\cdot\\|_1$ (inégalité triangulaire inverse) donc continue ; par équivalence des normes elle est aussi continue pour $\\|\\cdot\\|_\\infty$. Une fonction continue sur un compact atteint ses bornes (théorème des bornes atteintes), donc $\\varphi$ atteint min et max sur $S$.
Calcul : sur $S$, $\\max(|x|,|y|) = 1$. Le minimum de $|x|+|y|$ vaut $1$, atteint aux points $(\\pm1, 0)$ et $(0,\\pm1)$ (un seul coefficient vaut $1$, l'autre $0$). Le maximum vaut $2$, atteint aux coins $(\\pm1,\\pm1)$ (les deux coefficients de module $1$). Donc $\\min_S \\varphi = 1$, $\\max_S \\varphi = 2$.

<strong>4.</strong> Par compacité (Bolzano–Weierstrass en dimension finie), toute suite de $S$, fermé borné, admet une sous-suite convergente dont la limite est dans $S$ (car $S$ fermé) ; cette limite est une valeur d'adhérence.
Pour $w_n = ((-1)^n, \\frac{1}{n+1})$ : on vérifie $\\|w_n\\|_\\infty = 1$ pour tout $n$, donc $w_n \\in S$. La sous-suite des indices pairs $w_{2k} = (1, \\frac{1}{2k+1}) \\to (1, 0) \\in S$. C'est une valeur d'adhérence. (La sous-suite impaire converge vers $(-1,0)$, autre valeur d'adhérence ; la suite elle-même diverge.)
</details>`
          }
        ]
      }
    ]
  }
]
