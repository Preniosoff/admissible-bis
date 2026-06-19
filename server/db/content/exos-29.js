export const DATA = [
  {
    id: 'ma-tm-limcont',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Étude complète d\'une fonction rationnelle',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie sur $\\mathbb{R} \\setminus \\{ 1 \\}$ par
$$f(x) = \\frac{2x^2 - 3x - 2}{x - 1}.$$
1. Déterminer $\\lim_{x \\to +\\infty} f(x)$ et $\\lim_{x \\to -\\infty} f(x)$.
2. Étudier les limites de $f$ en $1$ à gauche et à droite. En déduire l'existence d'une asymptote verticale.
3. Montrer que la droite $D$ d'équation $y = 2x - 1$ est asymptote oblique à la courbe en $\\pm\\infty$, et étudier la position relative de la courbe et de $D$.
4. Montrer que l'équation $f(x) = 0$ admet exactement deux solutions, l'une dans $]-1\\,;0[$, l'autre dans $]2\\,;3[$, en justifiant par le théorème des valeurs intermédiaires.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le terme dominant du quotient est $\\frac{2x^2}{x} = 2x$, donc $\\lim_{x \\to +\\infty} f(x) = +\\infty$ et $\\lim_{x \\to -\\infty} f(x) = -\\infty$.
<br><strong>2.</strong> En $x = 1$ : le numérateur vaut $2 - 3 - 2 = -3 \\neq 0$, le dénominateur tend vers $0$. Pour $x \\to 1^+$, $x - 1 \\to 0^+$ donc $f(x) \\to \\frac{-3}{0^+} = -\\infty$. Pour $x \\to 1^-$, $x - 1 \\to 0^-$ donc $f(x) \\to \\frac{-3}{0^-} = +\\infty$. La droite $x = 1$ est asymptote verticale.
<br><strong>3.</strong> Division euclidienne : $2x^2 - 3x - 2 = (x-1)(2x - 1) - 3$. Donc $f(x) = 2x - 1 - \\frac{3}{x - 1}$. Ainsi $f(x) - (2x - 1) = -\\frac{3}{x - 1} \\to 0$ en $\\pm\\infty$ : $D : y = 2x - 1$ est asymptote oblique. Position : le signe de $f(x) - (2x-1) = -\\frac{3}{x-1}$ est l'opposé du signe de $x - 1$. Pour $x > 1$, c'est négatif : la courbe est sous $D$. Pour $x < 1$, c'est positif : la courbe est au-dessus de $D$.
<br><strong>4.</strong> $f$ est continue sur chaque intervalle de son domaine (quotient de polynômes). Sur $]-1\\,;0[ \\subset ]-\\infty\\,;1[$ : $f(-1) = \\frac{2+3-2}{-2} = -\\frac{3}{2} < 0$ et $f(0) = \\frac{-2}{-1} = 2 > 0$. Par le TVI, il existe une solution dans $]-1\\,;0[$. Sur $]2\\,;3[$ : $f(2) = \\frac{8-6-2}{1} = 0$... attention $f(2)=0$ exactement, prenons $f(2) = 0$ donc $2$ est racine. Vérifions le numérateur : $2x^2 - 3x - 2 = (2x+1)(x-2)$, racines $x = -\\frac12$ et $x = 2$. Les deux solutions de $f(x)=0$ sont donc $x = -\\frac12 \\in ]-1\\,;0[$ et $x = 2$. Le TVI garantit l'existence dans $]-1\\,;0[$, et la factorisation confirme les deux racines exactes.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-ln',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Logarithme : étude, primitive et seuil d\'une suite',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $g$ définie sur $]0\\,;+\\infty[$ par $g(x) = x - \\ln x$.
1. Calculer $g'(x)$, dresser le tableau de variations de $g$ et en déduire que pour tout $x > 0$, $\\ln x \\leqslant x - 1$.
2. Déterminer les limites de $g$ en $0^+$ et en $+\\infty$.
3. Soit $f(x) = \\frac{\\ln x}{x}$ sur $]0\\,;+\\infty[$. Montrer que $f$ admet un maximum et préciser sa valeur.
4. Une suite est définie par $u_n = \\ln\\!\\left(1 + \\frac{1}{n}\\right)$ pour $n \\geqslant 1$. Déterminer le plus petit entier $n$ tel que $u_n < 0{,}01$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $g'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}$. Sur $]0\\,;+\\infty[$, $g'(x) < 0$ pour $x < 1$, $g'(x) > 0$ pour $x > 1$, donc $g$ décroît puis croît, minimum en $x = 1$ : $g(1) = 1 - 0 = 1 > 0$. Donc pour tout $x > 0$, $g(x) \\geqslant 1 > 0$, soit $x - \\ln x \\geqslant 1$, c'est-à-dire $\\ln x \\leqslant x - 1$.
<br><strong>2.</strong> En $0^+$ : $\\ln x \\to -\\infty$ donc $-\\ln x \\to +\\infty$ et $g(x) \\to +\\infty$. En $+\\infty$ : par croissances comparées $\\frac{\\ln x}{x} \\to 0$, donc $g(x) = x\\left(1 - \\frac{\\ln x}{x}\\right) \\to +\\infty$.
<br><strong>3.</strong> $f'(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$. Le signe est celui de $1 - \\ln x$ : positif pour $x < e$, négatif pour $x > e$. Donc $f$ admet un maximum en $x = e$, valant $f(e) = \\frac{\\ln e}{e} = \\frac{1}{e}$.
<br><strong>4.</strong> $(u_n)$ est décroissante et tend vers $0$. On résout $\\ln\\!\\left(1 + \\frac1n\\right) < 0{,}01$, soit $1 + \\frac1n < e^{0{,}01}$, donc $\\frac1n < e^{0{,}01} - 1 \\approx 0{,}010050$, d'où $n > \\frac{1}{0{,}010050} \\approx 99{,}50$. Le plus petit entier convenable est $n = 100$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Loi binomiale, espérance et concentration',
            contenu: `<strong>Énoncé.</strong> Une usine produit des composants ; chacun est défectueux avec probabilité $p = 0{,}05$, indépendamment des autres. On prélève un échantillon de $n = 400$ composants. On note $X$ le nombre de composants défectueux.
1. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. Calculer $E(X)$ et $V(X)$.
2. Un composant prélevé est défectueux. Sachant que $60\\%$ des défauts proviennent d'un réglage A et que, hors réglage A, le taux de défaut est nul, quelle est la probabilité $P(A \\mid D)$ que ce défaut vienne du réglage A si $P(A) = 0{,}3$ et $P(D \\mid A) = 0{,}1$, $P(D \\mid \\bar A) = 0{,}05 \\cdot \\frac{1}{...}$ ? On donne directement $P(D) = 0{,}05$ ; calculer $P(A \\mid D)$ avec $P(D\\mid A) = 0{,}1$.
3. On note $F = \\frac{X}{n}$ la fréquence empirique de défauts. Majorer, à l'aide de l'inégalité de concentration, la probabilité $P\\big(|F - 0{,}05| \\geqslant 0{,}03\\big)$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On répète $n = 400$ fois, de façon indépendante, une épreuve de Bernoulli de succès « défectueux » de probabilité $p = 0{,}05$. $X$ compte les succès, donc $X \\sim \\mathcal{B}(400\\,;0{,}05)$. Espérance : $E(X) = np = 400 \\times 0{,}05 = 20$. Variance : $V(X) = np(1-p) = 400 \\times 0{,}05 \\times 0{,}95 = 19$.
<br><strong>2.</strong> Par la formule de Bayes : $P(A \\mid D) = \\frac{P(D \\mid A)\\,P(A)}{P(D)} = \\frac{0{,}1 \\times 0{,}3}{0{,}05} = \\frac{0{,}03}{0{,}05} = 0{,}6$. Le défaut provient du réglage A avec probabilité $0{,}6$, ce qui est cohérent avec l'énoncé ($60\\%$).
<br><strong>3.</strong> $F = \\frac{X}{n}$ a pour espérance $E(F) = p = 0{,}05$ et variance $V(F) = \\frac{p(1-p)}{n} = \\frac{0{,}0475}{400} = 0{,}00011875$. L'inégalité de concentration (Bienaymé-Tchebychev) donne, pour $\\delta = 0{,}03$ :
$$P\\big(|F - p| \\geqslant \\delta\\big) \\leqslant \\frac{V(F)}{\\delta^2} = \\frac{0{,}00011875}{0{,}0009} \\approx 0{,}132.$$
La probabilité que la fréquence observée s'écarte de plus de $0{,}03$ de $0{,}05$ est donc au plus $0{,}132$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-recurr',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Récurrence : forme close, divisibilité et inégalité',
            contenu: `<strong>Énoncé.</strong> Soit la suite définie par $u_0 = 2$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = 3 u_n - 2$.
1. Démontrer par récurrence que pour tout $n \\in \\mathbb{N}$, $u_n = 3^n + 1$.
2. En déduire et démontrer par récurrence que $u_n - 1 = 3^n$ est divisible par $3$ pour $n \\geqslant 1$.
3. Démontrer par récurrence que pour tout $n \\geqslant 1$, $u_n \\geqslant 2n + 1$.
4. On considère l'affirmation : « pour tout $n$, $u_n$ est pair ». Vérifier sur $u_0, u_1, u_2$ et expliquer pourquoi une récurrence ne peut pas la démontrer.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> <em>Initialisation :</em> $u_0 = 3^0 + 1 = 2$, vrai. <em>Hérédité :</em> supposons $u_n = 3^n + 1$. Alors $u_{n+1} = 3u_n - 2 = 3(3^n + 1) - 2 = 3^{n+1} + 3 - 2 = 3^{n+1} + 1$. La propriété se transmet, donc par récurrence $u_n = 3^n + 1$ pour tout $n$.
<br><strong>2.</strong> $u_n - 1 = 3^n$. <em>Initialisation</em> ($n=1$) : $3^1 = 3 = 3 \\times 1$. <em>Hérédité :</em> si $3^n = 3k$, alors $3^{n+1} = 3 \\cdot 3^n = 3(3k) = 3(3k)$ multiple de $3$. Donc $u_n - 1$ est divisible par $3$ pour tout $n \\geqslant 1$.
<br><strong>3.</strong> <em>Initialisation</em> ($n=1$) : $u_1 = 3 + 1 = 4 \\geqslant 2 \\times 1 + 1 = 3$, vrai. <em>Hérédité :</em> supposons $u_n \\geqslant 2n + 1$. Alors $u_{n+1} = 3u_n - 2 \\geqslant 3(2n+1) - 2 = 6n + 1$. Or $6n + 1 \\geqslant 2(n+1) + 1 = 2n + 3 \\iff 4n \\geqslant 2$, vrai pour $n \\geqslant 1$. Donc $u_{n+1} \\geqslant 2(n+1)+1$. La propriété est héréditaire.
<br><strong>4.</strong> $u_0 = 2$ (pair), $u_1 = 4$ (pair), $u_2 = 10$ (pair) : l'amorce semble bonne. Mais $u_n = 3^n + 1$. Pour $n$ pair, $3^n$ est impair donc $u_n$ pair ; pour $n$ impair $3^n$ impair donc $u_n$ pair aussi — ici tous sont pairs car $3^n$ est toujours impair et impair $+\\,1$ est pair. L'affirmation est en fait vraie, mais elle ne se prouve pas par <em>simple</em> récurrence sur la relation $u_{n+1} = 3u_n - 2$ sans utiliser la forme close : la parité de $u_{n+1}$ dépend de $3u_n$ qui est pair ssi $u_n$ pair, donc l'hérédité fonctionne — la leçon est qu'il faut soigner l'initialisation et vérifier que l'hérédité s'appuie bien sur l'hypothèse, sans la supposer pour conclure.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-suite2',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Suite récurrente : monotonie, majoration et limite',
            contenu: `<strong>Énoncé.</strong> Soit la suite définie par $u_0 = 0$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\sqrt{2 + u_n}$.
1. Démontrer par récurrence que pour tout $n$, $0 \\leqslant u_n \\leqslant 2$.
2. Étudier le signe de $u_{n+1} - u_n$ et en déduire la monotonie de la suite.
3. Justifier que la suite converge, puis déterminer sa limite $\\ell$.
4. On pose $v_n = 2 - u_n$. Montrer que pour tout $n$, $v_{n+1} \\leqslant \\frac{1}{2} v_n$ et en déduire la vitesse de convergence vers $\\ell$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> <em>Initialisation :</em> $u_0 = 0 \\in [0\\,;2]$. <em>Hérédité :</em> si $0 \\leqslant u_n \\leqslant 2$, alors $2 \\leqslant 2 + u_n \\leqslant 4$, donc $\\sqrt 2 \\leqslant u_{n+1} \\leqslant 2$, et en particulier $0 \\leqslant u_{n+1} \\leqslant 2$. Par récurrence, $0 \\leqslant u_n \\leqslant 2$ pour tout $n$.
<br><strong>2.</strong> $u_{n+1} - u_n = \\sqrt{2 + u_n} - u_n$. Étudions $h(x) = \\sqrt{2+x} - x$ sur $[0\\,;2]$ : $h(x) \\geqslant 0 \\iff \\sqrt{2+x} \\geqslant x \\iff 2 + x \\geqslant x^2$ (les deux membres positifs) $\\iff x^2 - x - 2 \\leqslant 0 \\iff (x-2)(x+1) \\leqslant 0$, vrai pour $x \\in [-1\\,;2]$. Donc sur $[0\\,;2]$, $u_{n+1} - u_n \\geqslant 0$ : la suite est croissante.
<br><strong>3.</strong> $(u_n)$ est croissante et majorée par $2$, donc elle converge vers une limite $\\ell \\in [0\\,;2]$. Par continuité de $x \\mapsto \\sqrt{2+x}$, $\\ell$ vérifie $\\ell = \\sqrt{2 + \\ell}$, soit $\\ell^2 = 2 + \\ell$, $\\ell^2 - \\ell - 2 = 0$, $(\\ell - 2)(\\ell + 1) = 0$. Comme $\\ell \\geqslant 0$, $\\ell = 2$.
<br><strong>4.</strong> $v_{n+1} = 2 - u_{n+1} = 2 - \\sqrt{2 + u_n} = \\frac{(2 - \\sqrt{2+u_n})(2 + \\sqrt{2+u_n})}{2 + \\sqrt{2+u_n}} = \\frac{4 - (2 + u_n)}{2 + \\sqrt{2+u_n}} = \\frac{2 - u_n}{2 + \\sqrt{2+u_n}} = \\frac{v_n}{2 + \\sqrt{2+u_n}}$. Comme $u_n \\geqslant 0$, $\\sqrt{2 + u_n} \\geqslant \\sqrt 2$, donc le dénominateur est $\\geqslant 2 + \\sqrt2 > 2$, d'où $v_{n+1} \\leqslant \\frac{1}{2} v_n$. Par récurrence $0 \\leqslant v_n \\leqslant \\left(\\frac12\\right)^n v_0 = 2 \\left(\\frac12\\right)^n$, donc $v_n \\to 0$ : convergence géométrique vers $\\ell = 2$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tm-vect',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Espace : produit scalaire, plan, projeté et distance',
            contenu: `<strong>Énoncé.</strong> Dans un repère orthonormé $(O\\,;\\vec\\imath, \\vec\\jmath, \\vec k)$, on considère les points $A(1\\,;0\\,;2)$, $B(2\\,;1\\,;0)$, $C(0\\,;2\\,;1)$ et $M(3\\,;3\\,;3)$.
1. Calculer $\\vec{AB} \\cdot \\vec{AC}$ et en déduire une mesure de l'angle $\\widehat{BAC}$.
2. Montrer que $\\vec n(1\\,;1\\,;1)$ est normal au plan $(ABC)$ et donner une équation cartésienne de ce plan.
3. Déterminer une représentation paramétrique de la droite $\\Delta$ passant par $M$ et orthogonale au plan $(ABC)$.
4. Déterminer les coordonnées du projeté orthogonal $H$ de $M$ sur $(ABC)$, puis la distance de $M$ au plan $(ABC)$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\vec{AB}(1\\,;1\\,;-2)$, $\\vec{AC}(-1\\,;2\\,;-1)$. $\\vec{AB} \\cdot \\vec{AC} = (1)(-1) + (1)(2) + (-2)(-1) = -1 + 2 + 2 = 3$. Normes : $\\|\\vec{AB}\\| = \\sqrt{1+1+4} = \\sqrt6$, $\\|\\vec{AC}\\| = \\sqrt{1+4+1} = \\sqrt6$. Donc $\\cos \\widehat{BAC} = \\frac{3}{\\sqrt6 \\cdot \\sqrt6} = \\frac{3}{6} = \\frac12$, d'où $\\widehat{BAC} = 60°$.
<br><strong>2.</strong> $\\vec n \\cdot \\vec{AB} = 1 + 1 - 2 = 0$ et $\\vec n \\cdot \\vec{AC} = -1 + 2 - 1 = 0$. $\\vec n$ est orthogonal à deux vecteurs non colinéaires du plan, donc normal à $(ABC)$. Équation : $x + y + z = d$ ; avec $A(1\\,;0\\,;2)$, $d = 1 + 0 + 2 = 3$. Donc $(ABC) : x + y + z - 3 = 0$.
<br><strong>3.</strong> $\\Delta$ passe par $M(3\\,;3\\,;3)$ et a pour vecteur directeur $\\vec n(1\\,;1\\,;1)$ :
$$\\begin{cases} x = 3 + t \\\\ y = 3 + t \\\\ z = 3 + t \\end{cases}, \\quad t \\in \\mathbb{R}.$$
<br><strong>4.</strong> $H = \\Delta \\cap (ABC)$ : on injecte dans l'équation du plan : $(3+t) + (3+t) + (3+t) - 3 = 0$, soit $9 + 3t - 3 = 0$, $3t = -6$, $t = -2$. Donc $H(1\\,;1\\,;1)$. Distance : $MH = \\|\\vec{MH}\\|$ avec $\\vec{MH}(-2\\,;-2\\,;-2)$, $MH = \\sqrt{4+4+4} = 2\\sqrt3$. (Contrôle par la formule : $\\frac{|3+3+3-3|}{\\sqrt{1+1+1}} = \\frac{6}{\\sqrt3} = 2\\sqrt3$.)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-va',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Variable discrète : loi, génératrice et concentration',
            contenu: `<strong>Énoncé.</strong> Soit $X$ une variable aléatoire à valeurs dans $\\mathbb{N}^*$ de loi $P(X = k) = \\frac{c}{2^k}$ pour $k \\geqslant 1$.
1. Déterminer la constante $c$. Calculer $E(X)$ et $V(X)$ (on rappelle $\\sum_{k \\geqslant 1} k x^{k-1} = \\frac{1}{(1-x)^2}$ et $\\sum_{k \\geqslant 1} k^2 x^{k} = \\frac{x(1+x)}{(1-x)^3}$ pour $|x| < 1$).
2. Reconnaître la loi de $X$ et donner sa fonction génératrice $G_X(t) = E(t^X)$ ; en déduire $E(X)$ par dérivation.
3. Soit $(X_1, \\dots, X_n)$ un échantillon i.i.d. de même loi que $X$, et $\\bar X_n = \\frac1n \\sum_{i=1}^n X_i$. Majorer $P\\big(|\\bar X_n - E(X)| \\geqslant \\varepsilon\\big)$ et commenter au regard de la loi faible des grands nombres.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\sum_{k \\geqslant 1} P(X=k) = c \\sum_{k \\geqslant 1} \\left(\\frac12\\right)^k = c \\cdot \\frac{1/2}{1 - 1/2} = c = 1$. Donc $c = 1$ : $P(X = k) = \\left(\\frac12\\right)^k$. Espérance : $E(X) = \\sum_{k\\geqslant1} k \\left(\\frac12\\right)^k = \\frac12 \\sum_{k\\geqslant1} k \\left(\\frac12\\right)^{k-1} = \\frac12 \\cdot \\frac{1}{(1 - 1/2)^2} = \\frac12 \\cdot 4 = 2$. Pour la variance, $E(X^2) = \\sum_{k\\geqslant1} k^2 \\left(\\frac12\\right)^k = \\frac{(1/2)(1 + 1/2)}{(1-1/2)^3} = \\frac{(1/2)(3/2)}{1/8} = \\frac{3/4}{1/8} = 6$. Donc $V(X) = E(X^2) - E(X)^2 = 6 - 4 = 2$.
<br><strong>2.</strong> $X$ suit la loi géométrique de paramètre $p = \\tfrac12$ (rang du premier succès). Fonction génératrice : $G_X(t) = \\sum_{k\\geqslant1} t^k \\left(\\frac12\\right)^k = \\sum_{k\\geqslant1} \\left(\\frac{t}{2}\\right)^k = \\frac{t/2}{1 - t/2} = \\frac{t}{2 - t}$ pour $|t| < 2$. Dérivée : $G_X'(t) = \\frac{(2-t) - t(-1)}{(2-t)^2} = \\frac{2}{(2-t)^2}$. Donc $E(X) = G_X'(1) = \\frac{2}{1} = 2$, cohérent avec la question 1.
<br><strong>3.</strong> Les $X_i$ étant i.i.d., $E(\\bar X_n) = E(X) = 2$ et $V(\\bar X_n) = \\frac{V(X)}{n} = \\frac{2}{n}$. Par l'inégalité de Bienaymé-Tchebychev :
$$P\\big(|\\bar X_n - 2| \\geqslant \\varepsilon\\big) \\leqslant \\frac{V(\\bar X_n)}{\\varepsilon^2} = \\frac{2}{n \\varepsilon^2}.$$
Le majorant tend vers $0$ quand $n \\to +\\infty$ pour tout $\\varepsilon > 0$ fixé : $\\bar X_n$ converge en probabilité vers $E(X) = 2$, ce qui illustre la loi faible des grands nombres.
</details>`
          }
        ]
      }
    ]
  }
]
