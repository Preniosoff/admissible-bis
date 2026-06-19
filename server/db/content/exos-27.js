export const DATA = [
  {
    id: 'ma-se',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Une fraction rationnelle et son DSE',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie au voisinage de $0$ par
$$f(x)=\\frac{1}{(1-x)(1-2x)}.$$
<strong>1.</strong> Décomposer $f$ en éléments simples sur $\\mathbb{R}$.<br>
<strong>2.</strong> En déduire le développement en série entière de $f$ au voisinage de $0$. Préciser le coefficient $a_n$ de $x^n$, puis déterminer le rayon de convergence $R$ par la formule sur les coefficients, et confirmer ce $R$ par l'étude directe des singularités de $f$.<br>
<strong>3.</strong> Vérifier que la série $\\sum a_n x^n$ obtenue satisfait, pour $|x|<R$, l'équation $(1-x)(1-2x)\\,S(x)=1$ où $S$ est sa somme.<br>
<strong>4.</strong> En utilisant la régularité de la somme, calculer $\\displaystyle\\int_0^{1/4} f(t)\\,\\mathrm{d}t$ comme somme d'une série numérique convergente.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On cherche $f(x)=\\dfrac{A}{1-x}+\\dfrac{B}{1-2x}$. En multipliant par $(1-x)$ et en évaluant en $x=1$ : $A=\\dfrac{1}{1-2}= -1$. En multipliant par $(1-2x)$ et en évaluant en $x=1/2$ : $B=\\dfrac{1}{1-1/2}=2$. Donc
$$f(x)=\\frac{-1}{1-x}+\\frac{2}{1-2x}.$$
<strong>2.</strong> Pour $|x|<1$, $\\dfrac{1}{1-x}=\\sum_{n\\geq 0}x^n$, et pour $|x|<1/2$, $\\dfrac{1}{1-2x}=\\sum_{n\\geq 0}2^n x^n$. Par combinaison linéaire, valable pour $|x|<1/2$ (intersection des domaines),
$$f(x)=\\sum_{n=0}^{+\\infty}\\big(2\\cdot 2^n-1\\big)x^n=\\sum_{n=0}^{+\\infty}\\big(2^{n+1}-1\\big)x^n,$$
soit $a_n=2^{n+1}-1$. Comme $a_n\\sim 2^{n+1}$, on a $|a_n|^{1/n}\\to 2$, donc par la règle de Cauchy $R=\\dfrac{1}{2}$. Directement : $f$ a deux pôles, en $x=1$ et $x=1/2$ ; le plus proche de $0$ est $1/2$, donc $R=1/2$. Cohérent.<br>
<strong>3.</strong> Soit $S(x)=\\sum a_n x^n=f(x)$ pour $|x|<1/2$. Par construction $f(x)(1-x)(1-2x)=1$, donc $S$ vérifie bien $(1-x)(1-2x)S(x)=1$.<br>
<strong>4.</strong> Sur $[0,1/4]\\subset(-1/2,1/2)$, la somme est continue donc intégrable, et on intègre terme à terme une série entière à l'intérieur de son disque :
$$\\int_0^{1/4} f(t)\\,\\mathrm{d}t=\\sum_{n=0}^{+\\infty}\\frac{2^{n+1}-1}{n+1}\\Big(\\frac14\\Big)^{n+1}.$$
On peut aussi calculer directement : $\\int_0^{1/4}f=\\big[-\\ln|1-t|... \\big]$, primitive $-(-\\ln(1-t)) + 2\\cdot(-\\tfrac12)\\ln(1-2t)$ $=\\ln(1-t)-\\ln(1-2t)$ entre $0$ et $1/4$, soit $\\ln\\dfrac{3/4}{1/2}=\\ln\\dfrac32$. La série converge donc vers $\\ln\\tfrac32$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-series',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Nature d\'une série selon un paramètre',
            contenu: `<strong>Énoncé.</strong> Pour $n\\geq 1$ et $\\alpha\\in\\mathbb{R}$, on pose
$$u_n=\\frac{1}{n^\\alpha}\\Big(1-\\cos\\frac1n\\Big),\\qquad v_n=\\frac{(-1)^n}{\\sqrt{n}+(-1)^n}.$$
<strong>1.</strong> Déterminer un équivalent simple de $u_n$ et en déduire, selon $\\alpha$, la nature de $\\sum u_n$.<br>
<strong>2.</strong> La série $\\sum u_n$ est-elle absolument convergente lorsqu'elle converge ?<br>
<strong>3.</strong> Montrer que $v_n=\\dfrac{(-1)^n}{\\sqrt n}-\\dfrac1n+o\\!\\big(\\tfrac1n\\big)$, puis en déduire la nature de $\\sum v_n$.<br>
<strong>4.</strong> Le critère des séries alternées s'applique-t-il directement à $\\sum v_n$ ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Quand $n\\to+\\infty$, $\\tfrac1n\\to 0$ et $1-\\cos t\\sim \\tfrac{t^2}{2}$, donc $1-\\cos\\tfrac1n\\sim \\dfrac{1}{2n^2}$. Ainsi
$$u_n\\sim \\frac{1}{2\\,n^{\\alpha+2}}.$$
$u_n>0$, c'est une SATP : par comparaison à une série de Riemann, $\\sum u_n$ converge si et seulement si $\\alpha+2>1$, c'est-à-dire $\\boxed{\\alpha>-1}$.<br>
<strong>2.</strong> Les termes $u_n$ étant positifs, convergence et convergence absolue coïncident : oui, dès que $\\alpha>-1$ la série converge absolument.<br>
<strong>3.</strong> Pour $n\\geq 2$, $v_n=\\dfrac{(-1)^n}{\\sqrt n}\\cdot\\dfrac{1}{1+(-1)^n/\\sqrt n}$. Avec $\\dfrac{1}{1+\\varepsilon}=1-\\varepsilon+o(\\varepsilon)$ et $\\varepsilon=(-1)^n/\\sqrt n\\to 0$,
$$v_n=\\frac{(-1)^n}{\\sqrt n}\\Big(1-\\frac{(-1)^n}{\\sqrt n}+o(\\tfrac{1}{\\sqrt n})\\Big)=\\frac{(-1)^n}{\\sqrt n}-\\frac1n+o\\!\\Big(\\frac1n\\Big).$$
<strong>4.</strong> $\\sum \\dfrac{(-1)^n}{\\sqrt n}$ converge (critère spécial des séries alternées : $1/\\sqrt n$ décroît vers $0$). $\\sum \\big(-\\tfrac1n\\big)$ diverge (série harmonique). Le reste $\\sum o(\\tfrac1n)$ : ici plus précisément le terme suivant est $O(n^{-3/2})$, donc absolument convergent. La somme d'un terme convergent et d'un terme divergent diverge : $\\sum v_n$ <strong>diverge</strong>. Le critère des séries alternées ne s'applique pas directement à $v_n$ car $|v_n|$ n'est pas monotone (le dénominateur $\\sqrt n+(-1)^n$ casse la décroissance) ; il faut d'abord développer asymptotiquement, ce qui révèle le terme $-1/n$ responsable de la divergence.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-sfn',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Convergence et continuité d\'une série de fonctions',
            contenu: `<strong>Énoncé.</strong> Pour $n\\geq 1$ et $x\\in[0,+\\infty[$, on pose
$$f_n(x)=\\frac{x}{n(1+nx^2)},\\qquad S(x)=\\sum_{n=1}^{+\\infty} f_n(x).$$
<strong>1.</strong> Montrer que $\\sum f_n$ converge simplement sur $[0,+\\infty[$.<br>
<strong>2.</strong> Étudier $f_n$ sur $[0,+\\infty[$ et en déduire $\\sup_{x\\geq 0}|f_n(x)|$. La convergence est-elle normale sur $[0,+\\infty[$ ?<br>
<strong>3.</strong> Montrer que $\\sum f_n$ converge normalement sur tout segment $[a,+\\infty[$ avec $a>0$, et en déduire la continuité de $S$ sur $]0,+\\infty[$.<br>
<strong>4.</strong> $S$ est-elle continue en $0$ ? (On pourra comparer $S(x)$ à une intégrale ou minorer.)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour $x\\geq 0$ fixé : si $x=0$, $f_n(0)=0$ et la série vaut $0$. Si $x>0$, $f_n(x)\\sim \\dfrac{x}{n\\cdot nx^2}=\\dfrac{1}{n^2 x}$, terme général d'une série de Riemann convergente. Donc convergence simple sur $[0,+\\infty[$.<br>
<strong>2.</strong> $f_n\\geq 0$, dérivable, $f_n'(x)=\\dfrac{1}{n}\\cdot\\dfrac{(1+nx^2)-x\\cdot 2nx}{(1+nx^2)^2}=\\dfrac{1-nx^2}{n(1+nx^2)^2}$. Elle s'annule en $x_n=1/\\sqrt n$, maximum. Alors
$$\\sup_{x\\geq 0}f_n=f_n\\Big(\\tfrac{1}{\\sqrt n}\\Big)=\\frac{1/\\sqrt n}{n(1+1)}=\\frac{1}{2n^{3/2}}.$$
La série $\\sum \\dfrac{1}{2n^{3/2}}$ converge (Riemann, $3/2>1$), donc $\\sum f_n$ converge <strong>normalement sur $[0,+\\infty[$</strong> tout entier.<br>
<strong>3.</strong> En particulier elle converge normalement sur tout sous-ensemble, donc sur $[a,+\\infty[$. Comme chaque $f_n$ est continue et la convergence est normale (donc uniforme), $S$ est continue sur $[0,+\\infty[$.<br>
<strong>4.</strong> Grâce à la convergence normale sur tout $[0,+\\infty[$ établie en 2, $S$ est continue sur $[0,+\\infty[$, donc en particulier <strong>continue en $0$</strong> et $S(0^+)=S(0)=0$. (On vérifie : chaque $\\sup$ tend vers $0$ et la borne est sommable, ce qui force la continuité partout.)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tg-combin',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Tirages, loi binomiale et probabilité conditionnelle',
            contenu: `<strong>Énoncé.</strong> Une urne contient $10$ boules : $6$ rouges et $4$ vertes. On effectue $5$ tirages successifs <em>avec remise</em>. On note $X$ le nombre de boules rouges obtenues.<br>
<strong>1.</strong> Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. Calculer $P(X=3)$.<br>
<strong>2.</strong> Calculer $E(X)$ et $V(X)$.<br>
<strong>3.</strong> Calculer la probabilité d'obtenir au moins une boule verte.<br>
<strong>4.</strong> Sachant qu'on a obtenu au moins $4$ boules rouges, quelle est la probabilité d'en avoir obtenu exactement $5$ ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les $5$ tirages sont indépendants (remise) et identiques ; à chaque tirage, « rouge » a probabilité $p=\\dfrac{6}{10}=0{,}6$. Donc $X\\hookrightarrow \\mathcal{B}(5\\,;\\,0{,}6)$. Alors
$$P(X=3)=\\binom{5}{3}(0{,}6)^3(0{,}4)^2=10\\times 0{,}216\\times 0{,}16=0{,}3456.$$
<strong>2.</strong> $E(X)=np=5\\times 0{,}6=3$ ; $V(X)=np(1-p)=5\\times 0{,}6\\times 0{,}4=1{,}2$.<br>
<strong>3.</strong> « Au moins une verte » est le complémentaire de « aucune verte » = « 5 rouges » :
$$P(X<5)... \\quad P(\\text{au moins une verte})=1-P(X=5)=1-(0{,}6)^5=1-0{,}07776=0{,}92224.$$
<strong>4.</strong> On veut $P(X=5\\mid X\\geq 4)=\\dfrac{P(X=5)}{P(X\\geq 4)}$. On a $P(X=5)=(0{,}6)^5=0{,}07776$ et
$$P(X=4)=\\binom54(0{,}6)^4(0{,}4)=5\\times 0{,}1296\\times 0{,}4=0{,}2592,$$
donc $P(X\\geq 4)=0{,}2592+0{,}07776=0{,}33696$. Finalement
$$P(X=5\\mid X\\geq 4)=\\frac{0{,}07776}{0{,}33696}\\approx 0{,}2308.$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tg-contloi',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Loi exponentielle et loi normale',
            contenu: `<strong>Énoncé.</strong> La durée de vie $T$ (en années) d'un composant suit une loi exponentielle de paramètre $\\lambda=0{,}2$.<br>
<strong>1.</strong> Donner la densité de $T$ et calculer $E(T)$.<br>
<strong>2.</strong> Calculer $P(T>5)$ puis $P(T>8\\mid T>3)$. Que constate-t-on ?<br>
<strong>3.</strong> Une usine assemble $50$ composants indépendants. On admet que le nombre $N$ de composants encore en vie après $5$ ans suit approximativement une loi normale de moyenne $\\mu$ et d'écart-type $\\sigma$, où $\\mu=50\\,P(T>5)$ et $\\sigma^2=50\\,P(T>5)\\big(1-P(T>5)\\big)$. Calculer $\\mu$ et $\\sigma$.<br>
<strong>4.</strong> À l'aide de la loi normale, estimer $P(N\\geq 15)$. (On donne $P(Z\\leq 1{,}24)\\approx 0{,}8925$ pour $Z\\hookrightarrow\\mathcal N(0,1)$.)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Densité $f(t)=\\lambda e^{-\\lambda t}=0{,}2\\,e^{-0{,}2 t}$ pour $t\\geq 0$, nulle sinon. Espérance $E(T)=\\dfrac1\\lambda=5$ ans.<br>
<strong>2.</strong> $P(T>5)=e^{-0{,}2\\times 5}=e^{-1}\\approx 0{,}3679$. Par absence de mémoire de la loi exponentielle,
$$P(T>8\\mid T>3)=P(T>5)=e^{-1}\\approx 0{,}3679.$$
On retrouve la propriété d'absence de mémoire.<br>
<strong>3.</strong> $p=P(T>5)=e^{-1}\\approx 0{,}3679$. $\\mu=50p\\approx 18{,}39$. $\\sigma^2=50p(1-p)\\approx 50\\times 0{,}3679\\times 0{,}6321\\approx 11{,}63$, donc $\\sigma\\approx 3{,}41$.<br>
<strong>4.</strong> On centre-réduit : $Z=\\dfrac{N-\\mu}{\\sigma}$. Avec correction négligée,
$$P(N\\geq 15)\\approx P\\Big(Z\\geq \\frac{15-18{,}39}{3{,}41}\\Big)=P(Z\\geq -0{,}99)=P(Z\\leq 0{,}99).$$
Soit $P(N\\geq 15)\\approx 0{,}839$. (Avec la valeur tabulée fournie pour $1{,}24$ : $P(Z\\leq 0{,}99)\\approx 0{,}8389$, on garde $\\approx 0{,}84$.)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tg-integ',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Primitives, IPP et aire',
            contenu: `<strong>Énoncé.</strong> On considère $f(x)=x\\,e^{-x}$ sur $[0,+\\infty[$.<br>
<strong>1.</strong> Déterminer une primitive de $f$ sur $\\mathbb{R}$ par intégration par parties.<br>
<strong>2.</strong> Calculer $I=\\displaystyle\\int_0^{2} x\\,e^{-x}\\,\\mathrm{d}x$.<br>
<strong>3.</strong> Soit $F$ la primitive de $f$ qui s'annule en $0$. Calculer $F(x)$ pour tout $x\\geq 0$, et déterminer $\\displaystyle\\lim_{x\\to+\\infty}F(x)$.<br>
<strong>4.</strong> Interpréter géométriquement $I$ et $\\lim F$ comme des aires.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> IPP avec $u=x$, $u'=1$, $v'=e^{-x}$, $v=-e^{-x}$ :
$$\\int x e^{-x}\\,\\mathrm{d}x=-xe^{-x}-\\int(-e^{-x})\\,\\mathrm{d}x=-xe^{-x}-e^{-x}+C=-(x+1)e^{-x}+C.$$
<strong>2.</strong> $I=\\big[-(x+1)e^{-x}\\big]_0^2=-(3)e^{-2}-(-(1)e^{0})=1-3e^{-2}\\approx 1-0{,}406=0{,}594.$<br>
<strong>3.</strong> La primitive nulle en $0$ : $F(x)=-(x+1)e^{-x}-\\big(-(0+1)e^{0}\\big)=1-(x+1)e^{-x}$. Par croissances comparées $(x+1)e^{-x}\\to 0$, donc $\\displaystyle\\lim_{x\\to+\\infty}F(x)=1$.<br>
<strong>4.</strong> Comme $f\\geq 0$ sur $[0,+\\infty[$, $I$ est l'aire (en unités d'aire) du domaine sous la courbe de $f$ entre $x=0$ et $x=2$, soit $\\approx 0{,}594$. La limite $\\lim_{x\\to+\\infty}F(x)=1$ est l'aire totale (intégrale impropre convergente) entre la courbe et l'axe des abscisses sur $[0,+\\infty[$ : elle vaut exactement $1$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-tg-lim',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Limites, asymptotes et prolongement par continuité',
            contenu: `<strong>Énoncé.</strong> On considère $f(x)=\\dfrac{x^2-1}{x-1}$ pour $x\\neq 1$, et $g(x)=\\dfrac{2x^2+3}{x+1}$ pour $x\\neq -1$.<br>
<strong>1.</strong> Calculer $\\displaystyle\\lim_{x\\to 1}f(x)$. La fonction $f$ est-elle prolongeable par continuité en $1$ ? Si oui, donner la valeur du prolongement.<br>
<strong>2.</strong> Étudier les limites de $g$ en $+\\infty$ et en $-\\infty$.<br>
<strong>3.</strong> Montrer que la droite d'équation $y=2x-2$ est asymptote à la courbe de $g$ en $\\pm\\infty$, et préciser la position relative de la courbe et de l'asymptote.<br>
<strong>4.</strong> Étudier les limites de $g$ à gauche et à droite de $-1$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour $x\\neq 1$, $f(x)=\\dfrac{(x-1)(x+1)}{x-1}=x+1$. Donc $\\displaystyle\\lim_{x\\to 1}f(x)=2$. La limite existe et est finie : $f$ <strong>se prolonge par continuité</strong> en $1$ en posant $\\tilde f(1)=2$ (le prolongement est la fonction $x\\mapsto x+1$).<br>
<strong>2.</strong> $g(x)=\\dfrac{2x^2+3}{x+1}\\sim \\dfrac{2x^2}{x}=2x$ en $\\pm\\infty$, donc $\\lim_{x\\to+\\infty}g=+\\infty$ et $\\lim_{x\\to-\\infty}g=-\\infty$.<br>
<strong>3.</strong> Division euclidienne : $2x^2+3=(x+1)(2x-2)+5$, donc
$$g(x)=2x-2+\\frac{5}{x+1}.$$
Comme $\\dfrac{5}{x+1}\\to 0$ en $\\pm\\infty$, la droite $y=2x-2$ est asymptote. Position : le signe de $g(x)-(2x-2)=\\dfrac{5}{x+1}$ est celui de $x+1$. Pour $x>-1$ : $g$ est <em>au-dessus</em> de l'asymptote ; pour $x<-1$ : $g$ est <em>en dessous</em>.<br>
<strong>4.</strong> En $x=-1$, le numérateur vaut $2(-1)^2+3=5\\neq 0$. Quand $x\\to -1^+$, $x+1\\to 0^+$ donc $g(x)\\to +\\infty$ ; quand $x\\to -1^-$, $x+1\\to 0^-$ donc $g(x)\\to -\\infty$. La droite $x=-1$ est asymptote verticale.
</details>`
          }
        ]
      }
    ]
  }
]
