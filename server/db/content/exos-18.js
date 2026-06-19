export const DATA = [
  {
    id: 'ma-2e-calc',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Simplifier, factoriser, comparer',
            contenu: `<strong>Énoncé.</strong> On travaille ici les puissances, les racines, le calcul littéral et les fractions.
<br><br>
<strong>1.</strong> Écrire le nombre $A = \\dfrac{2^5 \\times 3^{-2}}{2^3 \\times 3^{-4}}$ sous la forme d'un entier.
<br>
<strong>2.</strong> Écrire $B = \\dfrac{\\sqrt{50} - \\sqrt{18}}{\\sqrt{2}}$ sous la forme la plus simple possible.
<br>
<strong>3.</strong> Soit $E = (2x - 3)^2 - (2x - 3)(x + 5)$. Développer puis factoriser $E$.
<br>
<strong>4.</strong> Un article coûte $80$ €. Son prix augmente de $15\\,\\%$ puis baisse de $15\\,\\%$. Le prix final est-il égal au prix initial ? Justifier par le calcul.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On regroupe les puissances de même base :
$$A = 2^{5-3} \\times 3^{-2-(-4)} = 2^2 \\times 3^{2} = 4 \\times 9 = 36.$$
<strong>2.</strong> On simplifie les racines : $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$ et $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$.
$$B = \\dfrac{5\\sqrt{2} - 3\\sqrt{2}}{\\sqrt{2}} = \\dfrac{2\\sqrt{2}}{\\sqrt{2}} = 2.$$
<strong>3.</strong> On factorise d'abord par le facteur commun $(2x-3)$ :
$$E = (2x-3)\\big[(2x-3) - (x+5)\\big] = (2x-3)(x - 8).$$
Forme développée : $E = (2x-3)(x-8) = 2x^2 - 16x - 3x + 24 = 2x^2 - 19x + 24$.
<br>
<strong>4.</strong> Après hausse : $80 \\times 1{,}15 = 92$ €. Après baisse : $92 \\times 0{,}85 = 78{,}20$ €. Le prix final ($78{,}20$ €) n'est pas égal au prix initial : appliquer $+15\\,\\%$ puis $-15\\,\\%$ revient à multiplier par $1{,}15 \\times 0{,}85 = 0{,}9775$, soit une baisse globale de $2{,}25\\,\\%$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-ens',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Ensembles, intervalles et valeur absolue',
            contenu: `<strong>Énoncé.</strong> Cet exercice mobilise les ensembles de nombres, les intervalles et la valeur absolue.
<br><br>
<strong>1.</strong> Pour chacun des nombres suivants, préciser le plus petit ensemble parmi $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, $\\mathbb{R}$ auquel il appartient : $a = \\dfrac{12}{4}$, $b = -\\dfrac{7}{3}$, $c = \\sqrt{9}$, $d = \\sqrt{5}$.
<br>
<strong>2.</strong> Écrire sous forme d'intervalle l'ensemble des réels $x$ tels que $-2 \\le x < 5$, puis déterminer $[-2\\,;5[ \\,\\cap\\, ]1\\,;7]$ et $[-2\\,;5[ \\,\\cup\\, ]1\\,;7]$.
<br>
<strong>3.</strong> Résoudre l'équation $|x - 3| = 4$, puis l'inéquation $|x - 3| \\le 4$. Donner l'ensemble solution sous forme d'intervalle.
<br>
<strong>4.</strong> Interpréter $|x - 3| \\le 4$ en termes de distance sur la droite des réels.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $a = 3 \\in \\mathbb{N}$ ; $b = -\\dfrac{7}{3}$ n'est pas entier mais est un rationnel, $b \\in \\mathbb{Q}$ ; $c = \\sqrt{9} = 3 \\in \\mathbb{N}$ ; $d = \\sqrt{5}$ est irrationnel, donc $d \\in \\mathbb{R}$ seulement.
<br>
<strong>2.</strong> L'ensemble est l'intervalle $[-2\\,;5[$.
Intersection : $[-2\\,;5[ \\,\\cap\\, ]1\\,;7] = \\,]1\\,;5[$ (réels communs aux deux). Réunion : $[-2\\,;5[ \\,\\cup\\, ]1\\,;7] = [-2\\,;7]$.
<br>
<strong>3.</strong> $|x-3| = 4$ équivaut à $x - 3 = 4$ ou $x - 3 = -4$, soit $x = 7$ ou $x = -1$.
Pour $|x-3| \\le 4$ : $-4 \\le x - 3 \\le 4$, donc $-1 \\le x \\le 7$. L'ensemble solution est $[-1\\,;7]$.
<br>
<strong>4.</strong> $|x-3|$ est la distance entre $x$ et $3$. L'inéquation $|x-3| \\le 4$ signifie : « $x$ est à une distance d'au plus $4$ de $3$ », ce qui correspond aux abscisses entre $3-4 = -1$ et $3+4 = 7$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-eq',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du premier degré au tableau de signes',
            contenu: `<strong>Énoncé.</strong> Cet exercice enchaîne équation du premier degré, équation produit et inéquation par tableau de signes.
<br><br>
<strong>1.</strong> Résoudre l'équation $\\dfrac{2x - 1}{3} = \\dfrac{x + 4}{2}$.
<br>
<strong>2.</strong> Résoudre l'équation produit $(2x - 6)(x + 5) = 0$.
<br>
<strong>3.</strong> Dresser le tableau de signes de l'expression $P(x) = (2x - 6)(x + 5)$.
<br>
<strong>4.</strong> En déduire l'ensemble des solutions de l'inéquation $(2x - 6)(x + 5) \\ge 0$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On multiplie par $6$ (produit en croix) : $2(2x-1) = 3(x+4)$, donc $4x - 2 = 3x + 12$, soit $x = 14$.
<br>
<strong>2.</strong> Un produit est nul si l'un des facteurs est nul : $2x - 6 = 0 \\Leftrightarrow x = 3$ ; $x + 5 = 0 \\Leftrightarrow x = -5$. Solutions : $x = 3$ ou $x = -5$.
<br>
<strong>3.</strong> Le facteur $2x-6$ s'annule en $3$ (positif après), $x+5$ s'annule en $-5$ (positif après) :
<br>
&nbsp;&nbsp;• Pour $x < -5$ : $(2x-6)<0$, $(x+5)<0$, produit $> 0$.
<br>
&nbsp;&nbsp;• Pour $-5 < x < 3$ : $(2x-6)<0$, $(x+5)>0$, produit $< 0$.
<br>
&nbsp;&nbsp;• Pour $x > 3$ : les deux facteurs $> 0$, produit $> 0$.
<br>
<strong>4.</strong> $P(x) \\ge 0$ (positif ou nul) sur $]-\\infty\\,;-5] \\cup [3\\,;+\\infty[$, en incluant les valeurs $-5$ et $3$ qui annulent $P$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-fonc',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Fonctions de référence et variations',
            contenu: `<strong>Énoncé.</strong> On étudie la fonction carré, la fonction inverse et la fonction racine carrée, ainsi que les variations et les comparaisons.
<br><br>
Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2$ et $g$ définie sur $]0\\,;+\\infty[$ par $g(x) = \\dfrac{1}{x}$.
<br><br>
<strong>1.</strong> Donner le sens de variation de $f$ sur $]-\\infty\\,;0]$ puis sur $[0\\,;+\\infty[$. Préciser l'extremum de $f$ et la valeur où il est atteint.
<br>
<strong>2.</strong> Donner le sens de variation de $g$ sur $]0\\,;+\\infty[$. Comparer $g(2)$ et $g(5)$ sans calculatrice, en justifiant.
<br>
<strong>3.</strong> Pour $x \\in [0\\,;1]$, comparer $x$, $x^2$ et $\\sqrt{x}$ en les rangeant dans l'ordre croissant. On illustrera avec $x = 0{,}25$.
<br>
<strong>4.</strong> Résoudre l'inéquation $x^2 < 4$ pour $x$ réel, puis donner l'ensemble solution sous forme d'intervalle.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f$ est décroissante sur $]-\\infty\\,;0]$ et croissante sur $[0\\,;+\\infty[$. Elle admet un minimum égal à $0$, atteint en $x = 0$.
<br>
<strong>2.</strong> $g$ est strictement décroissante sur $]0\\,;+\\infty[$. Comme $2 < 5$ et que $g$ décroît, on a $g(2) > g(5)$, c'est-à-dire $\\dfrac{1}{2} > \\dfrac{1}{5}$.
<br>
<strong>3.</strong> Sur $[0\\,;1]$ on a l'ordre $x^2 \\le x \\le \\sqrt{x}$. Vérification avec $x = 0{,}25$ : $x^2 = 0{,}0625$, $x = 0{,}25$, $\\sqrt{x} = 0{,}5$ ; on a bien $0{,}0625 \\le 0{,}25 \\le 0{,}5$.
<br>
<strong>4.</strong> $x^2 < 4 \\Leftrightarrow |x| < 2 \\Leftrightarrow -2 < x < 2$. L'ensemble solution est $]-2\\,;2[$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-geom',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Coordonnées, distances et trigonométrie',
            contenu: `<strong>Énoncé.</strong> Dans un repère orthonormé du plan, on considère les points $A(1\\,;2)$, $B(5\\,;2)$ et $C(5\\,;5)$.
<br><br>
<strong>1.</strong> Calculer les longueurs $AB$, $BC$ et $AC$.
<br>
<strong>2.</strong> Montrer que le triangle $ABC$ est rectangle en $B$.
<br>
<strong>3.</strong> Déterminer les coordonnées du milieu $I$ de $[AC]$.
<br>
<strong>4.</strong> Calculer une valeur approchée au degré près de l'angle $\\widehat{BAC}$ à l'aide de la trigonométrie dans le triangle rectangle.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Avec la formule $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ :
$AB = \\sqrt{(5-1)^2 + (2-2)^2} = \\sqrt{16} = 4$ ;
$BC = \\sqrt{(5-5)^2 + (5-2)^2} = \\sqrt{9} = 3$ ;
$AC = \\sqrt{(5-1)^2 + (5-2)^2} = \\sqrt{16+9} = \\sqrt{25} = 5$.
<br>
<strong>2.</strong> On teste la réciproque du théorème de Pythagore : $AB^2 + BC^2 = 16 + 9 = 25$ et $AC^2 = 25$. Comme $AB^2 + BC^2 = AC^2$, le triangle $ABC$ est rectangle en $B$.
<br>
<strong>3.</strong> $I$ a pour coordonnées $\\left(\\dfrac{x_A + x_C}{2}\\,;\\dfrac{y_A + y_C}{2}\\right) = \\left(\\dfrac{1+5}{2}\\,;\\dfrac{2+5}{2}\\right) = (3\\,;3{,}5)$.
<br>
<strong>4.</strong> Dans le triangle rectangle en $B$, pour l'angle $\\widehat{BAC}$, le côté opposé est $BC = 3$ et l'hypoténuse $AC = 5$ : $\\sin(\\widehat{BAC}) = \\dfrac{BC}{AC} = \\dfrac{3}{5} = 0{,}6$. Donc $\\widehat{BAC} = \\arcsin(0{,}6) \\approx 37°$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Modèle, événements et échantillonnage',
            contenu: `<strong>Énoncé.</strong> Une urne contient $12$ boules indiscernables au toucher : $5$ rouges, $4$ vertes et $3$ bleues. On tire une boule au hasard.
<br><br>
<strong>1.</strong> Décrire l'univers et donner la probabilité de chaque issue « tirer une rouge », « tirer une verte », « tirer une bleue ».
<br>
<strong>2.</strong> On note $R$ l'événement « la boule est rouge » et $V$ « la boule est verte ». Calculer $P(R \\cup V)$ et décrire l'événement contraire $\\overline{R \\cup V}$, puis calculer sa probabilité.
<br>
<strong>3.</strong> On effectue maintenant $200$ tirages avec remise. Combien de boules rouges peut-on s'attendre à obtenir en moyenne ?
<br>
<strong>4.</strong> Sur un échantillon de taille $n = 200$, l'intervalle de fluctuation au seuil de $95\\,\\%$ de la proportion de rouges est $\\left[p - \\dfrac{1}{\\sqrt{n}}\\,;p + \\dfrac{1}{\\sqrt{n}}\\right]$ avec $p = P(R)$. Le calculer.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> L'univers est l'ensemble des $12$ boules, équiprobables. $P(R) = \\dfrac{5}{12}$, $P(V) = \\dfrac{4}{12} = \\dfrac{1}{3}$, $P(B) = \\dfrac{3}{12} = \\dfrac{1}{4}$. Leur somme vaut bien $1$.
<br>
<strong>2.</strong> $R$ et $V$ sont incompatibles (une boule ne peut être à la fois rouge et verte), donc $P(R \\cup V) = P(R) + P(V) = \\dfrac{5}{12} + \\dfrac{4}{12} = \\dfrac{9}{12} = \\dfrac{3}{4}$. L'événement contraire $\\overline{R \\cup V}$ est « la boule est bleue », de probabilité $1 - \\dfrac{3}{4} = \\dfrac{1}{4}$.
<br>
<strong>3.</strong> En moyenne, on s'attend à $200 \\times P(R) = 200 \\times \\dfrac{5}{12} \\approx 83{,}3$, soit environ $83$ boules rouges.
<br>
<strong>4.</strong> Ici $p = \\dfrac{5}{12} \\approx 0{,}417$ et $\\dfrac{1}{\\sqrt{200}} \\approx 0{,}0707$. L'intervalle de fluctuation est environ $[0{,}417 - 0{,}071\\,;0{,}417 + 0{,}071] = [0{,}346\\,;0{,}488]$. Si la proportion observée de rouges sort de cet intervalle, on doute du modèle au seuil de $95\\,\\%$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-stat',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Indicateurs, quartiles et linéarité',
            contenu: `<strong>Énoncé.</strong> On relève les notes (sur $20$) obtenues par $11$ élèves :
$$6,\\ 8,\\ 9,\\ 10,\\ 10,\\ 11,\\ 12,\\ 12,\\ 14,\\ 15,\\ 18.$$
<br>
<strong>1.</strong> Calculer la moyenne et la médiane de cette série.
<br>
<strong>2.</strong> Déterminer le premier quartile $Q_1$, le troisième quartile $Q_3$ et l'écart interquartile.
<br>
<strong>3.</strong> Le professeur décide de rajouter $2$ points à chaque note. Quelles sont les nouvelles moyenne et médiane ? Justifier par la linéarité.
<br>
<strong>4.</strong> Il choisit plutôt de multiplier chaque note par $\\dfrac{20}{18}$ pour ramener le maximum à $20$. Que devient alors la moyenne ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Somme des notes : $6+8+9+10+10+11+12+12+14+15+18 = 125$. Moyenne : $\\bar{x} = \\dfrac{125}{11} \\approx 11{,}36$. La série compte $11$ valeurs ordonnées : la médiane est la $6^{\\text{e}}$ valeur, soit $\\text{Me} = 11$.
<br>
<strong>2.</strong> $Q_1$ : le rang est $\\dfrac{11}{4} = 2{,}75$, on prend la $3^{\\text{e}}$ valeur, $Q_1 = 9$. $Q_3$ : le rang est $\\dfrac{3 \\times 11}{4} = 8{,}25$, on prend la $9^{\\text{e}}$ valeur, $Q_3 = 14$. Écart interquartile : $Q_3 - Q_1 = 14 - 9 = 5$.
<br>
<strong>3.</strong> Ajouter $2$ à chaque note ajoute $2$ à la moyenne et à la médiane (translation). Nouvelle moyenne : $\\approx 13{,}36$ ; nouvelle médiane : $13$.
<br>
<strong>4.</strong> Multiplier chaque note par $\\dfrac{20}{18}$ multiplie la moyenne par le même facteur (linéarité de la moyenne) : nouvelle moyenne $= \\dfrac{125}{11} \\times \\dfrac{20}{18} \\approx 11{,}36 \\times 1{,}111 \\approx 12{,}63$.
</details>`
          }
        ]
      }
    ]
  }
]
