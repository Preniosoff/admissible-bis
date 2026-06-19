export const DATA = [
  {
    id: 'ma-fvect',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Étude complète d\'un arc paramétré',
            contenu: `<strong>Énoncé.</strong> On considère l'arc paramétré $f : \\mathbb{R} \\to \\mathbb{R}^2$ défini par $f(t) = (x(t), y(t))$ avec
$$x(t) = t^2, \\qquad y(t) = t^3 - 3t.$$
<br><strong>1.</strong> Montrer que $f$ est de classe $\\mathcal{C}^\\infty$ et calculer le vecteur dérivé $f'(t)$. Déterminer les éventuels points stationnaires.
<br><strong>2.</strong> En un point régulier, donner un vecteur directeur de la tangente. Préciser la tangente au point $t = 1$.
<br><strong>3.</strong> Étudier la symétrie de la courbe vis-à-vis de $t \\mapsto -t$.
<br><strong>4.</strong> Écrire la longueur de l'arc pour $t \\in [0, 1]$ sous forme d'une intégrale, puis en donner une valeur approchée.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les composantes $x$ et $y$ sont polynomiales donc $\\mathcal{C}^\\infty$, et $f$ est $\\mathcal{C}^\\infty$ comme fonction vectorielle. On a
$$f'(t) = (x'(t), y'(t)) = (2t, \\; 3t^2 - 3).$$
Le point est stationnaire lorsque $f'(t) = (0,0)$, soit $2t = 0$ et $3t^2 - 3 = 0$. La première condition donne $t = 0$, mais alors $3t^2 - 3 = -3 \\neq 0$. Il n'y a donc <em>aucun</em> point stationnaire : l'arc est régulier partout.
<br><strong>2.</strong> En un point régulier, $f'(t) = (2t, 3t^2-3)$ dirige la tangente. En $t=1$ : $f(1) = (1, -2)$ et $f'(1) = (2, 0)$. La tangente est donc horizontale, d'équation $y = -2$.
<br><strong>3.</strong> On a $x(-t) = t^2 = x(t)$ et $y(-t) = -t^3 + 3t = -y(t)$. La courbe est symétrique par rapport à l'axe $Ox$ : on l'étudie pour $t \\geq 0$ puis on complète par symétrie.
<br><strong>4.</strong> La longueur vaut
$$L = \\int_0^1 \\| f'(t) \\| \\, dt = \\int_0^1 \\sqrt{(2t)^2 + (3t^2-3)^2} \\, dt = \\int_0^1 \\sqrt{9t^4 - 14t^2 + 9}\\, dt,$$
car $9(t^2-1)^2 + 4t^2 = 9t^4 - 18t^2 + 9 + 4t^2 = 9t^4 - 14t^2 + 9$. L'intégrande est continue sur $[0,1]$, l'intégrale est bien définie et vaut numériquement $L \\approx 2{,}28$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-gr',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Ordre, sous-groupes et Lagrange',
            contenu: `<strong>Énoncé.</strong> Soit $(G, \\cdot)$ un groupe fini de cardinal $12$ d'élément neutre $e$, et $a \\in G$.
<br><strong>1.</strong> Rappeler la définition de l'ordre de $a$ et montrer, à l'aide du théorème de Lagrange, que l'ordre de $a$ divise $12$.
<br><strong>2.</strong> En déduire que $a^{12} = e$ pour tout $a \\in G$.
<br><strong>3.</strong> On considère $G = \\mathfrak{S}_3$, le groupe symétrique. Donner les ordres possibles de ses éléments avec un exemple pour chacun.
<br><strong>4.</strong> Montrer que la signature $\\varepsilon : \\mathfrak{S}_3 \\to (\\{ -1, 1 \\}, \\times)$ est un morphisme de groupes, déterminer son noyau et préciser sa nature.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> L'ordre de $a$ est le plus petit entier $n \\geq 1$ tel que $a^n = e$ (il existe car $G$ est fini). Le sous-groupe engendré $\\langle a \\rangle = \\{ e, a, \\dots, a^{n-1} \\}$ a pour cardinal exactement $n$. Par Lagrange, $|\\langle a \\rangle|$ divise $|G| = 12$, donc $n \\mid 12$.
<br><strong>2.</strong> Comme $n \\mid 12$, on écrit $12 = n q$. Alors $a^{12} = (a^n)^q = e^q = e$.
<br><strong>3.</strong> $\\mathfrak{S}_3$ a $6$ éléments ; par Lagrange les ordres divisent $6$. On obtient : ordre $1$ pour $\\mathrm{id}$ ; ordre $2$ pour les transpositions, par exemple $(1\\,2)$ ; ordre $3$ pour les $3$-cycles, par exemple $(1\\,2\\,3)$. Aucun élément n'est d'ordre $6$ : $\\mathfrak{S}_3$ n'est pas cyclique.
<br><strong>4.</strong> La signature vérifie $\\varepsilon(\\sigma \\tau) = \\varepsilon(\\sigma)\\varepsilon(\\tau)$ : c'est un morphisme de $(\\mathfrak{S}_3, \\circ)$ vers $(\\{ -1, 1 \\}, \\times)$. Son noyau $\\ker \\varepsilon = \\{ \\sigma : \\varepsilon(\\sigma) = 1 \\}$ est l'ensemble des permutations paires : $\\{ \\mathrm{id}, (1\\,2\\,3), (1\\,3\\,2) \\}$. C'est le groupe alterné $\\mathfrak{A}_3$, sous-groupe distingué d'ordre $3$, cyclique.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-int',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Convergence et calcul d\'intégrales généralisées',
            contenu: `<strong>Énoncé.</strong> On combine critères de convergence et techniques de calcul.
<br><strong>1.</strong> Déterminer pour quelles valeurs de $\\alpha \\in \\mathbb{R}$ l'intégrale $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge.
<br><strong>2.</strong> Étudier la nature de $\\int_0^{+\\infty} \\frac{\\sin t}{t^2 + 1}\\, dt$ en justifiant la convergence absolue.
<br><strong>3.</strong> Calculer $I = \\int_0^{+\\infty} t\\, e^{-t}\\, dt$ par intégration par parties.
<br><strong>4.</strong> Montrer que $\\int_0^1 \\ln t \\, dt$ converge et calculer sa valeur.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour $\\alpha \\neq 1$, $\\int_1^X t^{-\\alpha} dt = \\frac{X^{1-\\alpha} - 1}{1-\\alpha}$, de limite finie ssi $1 - \\alpha < 0$, soit $\\alpha > 1$. Pour $\\alpha = 1$, $\\int_1^X \\frac{dt}{t} = \\ln X \\to +\\infty$. L'intégrale converge ssi $\\alpha > 1$.
<br><strong>2.</strong> Pour $t \\geq 0$, $\\left| \\frac{\\sin t}{t^2+1} \\right| \\leq \\frac{1}{t^2 + 1}$, et $\\int_0^{+\\infty} \\frac{dt}{t^2+1} = [\\arctan t]_0^{+\\infty} = \\frac{\\pi}{2}$ converge. Par comparaison de fonctions positives, l'intégrale converge absolument, donc converge.
<br><strong>3.</strong> Avec $u = t$, $dv = e^{-t} dt$, $du = dt$, $v = -e^{-t}$ :
$$I = [-t e^{-t}]_0^{+\\infty} + \\int_0^{+\\infty} e^{-t} dt = 0 + [-e^{-t}]_0^{+\\infty} = 1,$$
le terme tout intégré tendant vers $0$ car $t e^{-t} \\to 0$ en $+\\infty$.
<br><strong>4.</strong> $\\int_\\varepsilon^1 \\ln t \\, dt = [t \\ln t - t]_\\varepsilon^1 = (0 - 1) - (\\varepsilon \\ln \\varepsilon - \\varepsilon)$. Comme $\\varepsilon \\ln \\varepsilon \\to 0$, on obtient $\\int_0^1 \\ln t \\, dt = -1$ : l'intégrale converge et vaut $-1$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-poly',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Polynôme minimal et diagonalisabilité',
            contenu: `<strong>Énoncé.</strong> Soit $u$ un endomorphisme d'un $\\mathbb{R}$-espace vectoriel $E$ de dimension finie vérifiant $u^2 - u - 2\\,\\mathrm{Id} = 0$.
<br><strong>1.</strong> Donner un polynôme annulateur de $u$, le factoriser, et en déduire les valeurs propres possibles.
<br><strong>2.</strong> À l'aide du lemme des noyaux, montrer que $E = \\ker(u - 2\\,\\mathrm{Id}) \\oplus \\ker(u + \\mathrm{Id})$.
<br><strong>3.</strong> En déduire que $u$ est diagonalisable et donner son polynôme minimal si $u \\neq 2\\,\\mathrm{Id}$ et $u \\neq -\\mathrm{Id}$.
<br><strong>4.</strong> On suppose $\\dim E = 3$ avec $\\dim \\ker(u - 2\\,\\mathrm{Id}) = 2$. Donner une matrice de $u$ dans une base adaptée et son polynôme caractéristique.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $P(X) = X^2 - X - 2 = (X-2)(X+1)$ annule $u$. Les valeurs propres sont racines de tout annulateur, donc $\\mathrm{Sp}(u) \\subset \\{ 2, -1 \\}$.
<br><strong>2.</strong> Les facteurs $X - 2$ et $X + 1$ sont premiers entre eux. Le lemme des noyaux donne $\\ker P(u) = \\ker(u - 2\\,\\mathrm{Id}) \\oplus \\ker(u + \\mathrm{Id})$. Comme $P(u) = 0$, $\\ker P(u) = E$, d'où la décomposition.
<br><strong>3.</strong> $E$ est somme directe de sous-espaces propres : $u$ est diagonalisable. Si les deux valeurs propres sont atteintes, $\\pi_u = (X-2)(X+1)$ (scindé à racines simples).
<br><strong>4.</strong> Avec $\\dim \\ker(u-2\\,\\mathrm{Id}) = 2$ et $\\dim E = 3$, on a $\\dim \\ker(u + \\mathrm{Id}) = 1$. Dans une base de vecteurs propres :
$$\\mathrm{Mat}(u) = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}, \\qquad \\chi_u(X) = (X-2)^2 (X+1).$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Loi, espérance, variance et inégalité',
            contenu: `<strong>Énoncé.</strong> Une urne contient une proportion $p \\in \\,]0,1[$ de boules gagnantes. On effectue $n$ tirages indépendants avec remise. Soit $X$ le nombre de boules gagnantes obtenues.
<br><strong>1.</strong> Reconnaître la loi de $X$ et donner $P(X = k)$ pour $k \\in \\{ 0, \\dots, n \\}$.
<br><strong>2.</strong> Calculer l'espérance $E(X)$ et la variance $V(X)$.
<br><strong>3.</strong> On note $F = X/n$ la fréquence empirique. Calculer $E(F)$ et $V(F)$.
<br><strong>4.</strong> À l'aide de l'inégalité de Bienaymé-Tchebychev, majorer $P\\big(|F - p| \\geq \\varepsilon\\big)$ pour $\\varepsilon > 0$, et commenter quand $n \\to +\\infty$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Chaque tirage est une épreuve de Bernoulli de paramètre $p$, indépendantes : $X$ suit $\\mathcal{B}(n, p)$, donc
$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k \\in \\{ 0, \\dots, n \\}.$$
<br><strong>2.</strong> Pour une binomiale : $E(X) = np$ et $V(X) = np(1-p)$ (somme de $n$ Bernoulli indépendantes).
<br><strong>3.</strong> Par linéarité, $E(F) = \\frac{1}{n} E(X) = p$, et $V(F) = \\frac{1}{n^2} V(X) = \\frac{p(1-p)}{n}$.
<br><strong>4.</strong> Bienaymé-Tchebychev appliquée à $F$ (d'espérance $p$) donne
$$P\\big(|F - p| \\geq \\varepsilon\\big) \\leq \\frac{V(F)}{\\varepsilon^2} = \\frac{p(1-p)}{n \\varepsilon^2}.$$
Quand $n \\to +\\infty$, ce majorant tend vers $0$ : $F$ converge en probabilité vers $p$ (loi faible des grands nombres).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-ps',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Orthonormalisation et projection orthogonale',
            contenu: `<strong>Énoncé.</strong> On munit $\\mathbb{R}^3$ du produit scalaire canonique. On pose $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$ et $F = \\mathrm{Vect}(v_1, v_2)$.
<br><strong>1.</strong> Vérifier que $(v_1, v_2)$ est libre, puis appliquer Gram-Schmidt pour obtenir une base orthonormale $(e_1, e_2)$ de $F$.
<br><strong>2.</strong> Donner l'expression du projecteur orthogonal $p_F$ sur $F$.
<br><strong>3.</strong> Calculer $p_F(w)$ pour $w = (2, 1, 1)$.
<br><strong>4.</strong> En déduire la distance $d(w, F) = \\| w - p_F(w) \\|$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $v_1$ et $v_2$ ne sont pas colinéaires : $(v_1, v_2)$ est libre. Gram-Schmidt : $\\| v_1 \\|^2 = 2$, donc $e_1 = \\frac{1}{\\sqrt 2}(1,1,0)$. Puis $w_2 = v_2 - \\langle v_2, e_1 \\rangle e_1$ avec $\\langle v_2, e_1 \\rangle = \\frac{1}{\\sqrt 2}$, d'où $w_2 = (1,0,1) - \\frac12(1,1,0) = (\\frac12, -\\frac12, 1)$. Comme $\\| w_2 \\|^2 = \\frac32$, on a $e_2 = \\frac{1}{\\sqrt 6}(1, -1, 2)$.
<br><strong>2.</strong> Pour une base orthonormale $(e_1, e_2)$ de $F$ : $p_F(w) = \\langle w, e_1 \\rangle e_1 + \\langle w, e_2 \\rangle e_2$.
<br><strong>3.</strong> Pour $w = (2,1,1)$ : $\\langle w, e_1 \\rangle = \\frac{3}{\\sqrt 2}$ et $\\langle w, e_2 \\rangle = \\frac{1}{\\sqrt 6}(2 - 1 + 2) = \\frac{3}{\\sqrt 6}$. Donc
$$p_F(w) = \\frac32(1,1,0) + \\frac12(1,-1,2) = (2, 1, 1).$$
<br><strong>4.</strong> Ici $p_F(w) = w$, donc $w \\in F$ et $d(w, F) = 0$. On vérifie en effet $w = (2,1,1) = v_1 + v_2 \\in F$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-red',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Diagonalisation et puissances d\'une matrice',
            contenu: `<strong>Énoncé.</strong> Soit $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & -1 \\\\ 1 & 0 & 1 \\end{pmatrix} \\in \\mathcal{M}_3(\\mathbb{R})$.
<br><strong>1.</strong> Calculer le polynôme caractéristique $\\chi_A$ et déterminer les valeurs propres de $A$.
<br><strong>2.</strong> Pour chaque valeur propre, déterminer le sous-espace propre et sa dimension.
<br><strong>3.</strong> $A$ est-elle diagonalisable ? Si oui, donner $P$ inversible et $D$ diagonale telles que $A = P D P^{-1}$.
<br><strong>4.</strong> En déduire l'expression de $A^n$ pour $n \\in \\mathbb{N}$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> En développant selon la première colonne, $\\chi_A(X) = (2 - X)\\big[(2-X)(1-X)\\big] = (2-X)^2(1-X)$. Valeurs propres : $\\lambda = 2$ (multiplicité $2$) et $\\lambda = 1$ (multiplicité $1$).
<br><strong>2.</strong> Pour $\\lambda = 1$ : $(A - I)X = 0$ impose $x = 0$ et $y = z$, d'où $E_1 = \\mathrm{Vect}\\big((0,1,1)\\big)$, dimension $1$. Pour $\\lambda = 2$ : $(A - 2I)X = 0$ donne $x = z$ et $x = y$ après résolution, d'où $E_2 = \\mathrm{Vect}\\big((0,1,0),\\,(1,1,1)\\big)$, dimension $2$.
<br><strong>3.</strong> Pour chaque valeur propre, dimension du sous-espace propre = multiplicité ($2 = 2$, $1 = 1$) : $A$ est diagonalisable. On pose
$$P = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\quad A = P D P^{-1}.$$
<br><strong>4.</strong> Comme $A = P D P^{-1}$, on a $A^n = P D^n P^{-1}$ avec $D^n = \\mathrm{diag}(2^n, 2^n, 1)$. Le calcul du produit donne $A^n$ comme combinaison de $2^n$ et de $1$, reflétant les deux valeurs propres.
</details>`
          }
        ]
      }
    ]
  }
]
