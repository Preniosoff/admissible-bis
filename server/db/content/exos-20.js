export const DATA = [
  {
    id: 'ma-3e-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le sac de billes',
            contenu: `<strong>Énoncé.</strong> Un sac opaque contient $12$ billes indiscernables au toucher : $5$ billes rouges, $4$ billes vertes et $3$ billes bleues. On tire une bille au hasard.
<br>1. Quelle est la probabilité de tirer une bille rouge ? une bille verte ? une bille bleue ? Vérifie que la somme de ces trois probabilités vaut $1$.
<br>2. Quel est l'événement contraire de « tirer une bille bleue » ? Calcule sa probabilité.
<br>3. On remet la bille, puis on effectue un <strong>second tirage</strong>. À l'aide d'un arbre, calcule la probabilité de tirer deux billes rouges de suite.
<br>4. Toujours avec remise sur deux tirages, calcule la probabilité d'obtenir « une rouge puis une bleue ».
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Il y a $12$ billes équiprobables.
<br>$P(\\text{rouge}) = \\dfrac{5}{12}$, $\\quad P(\\text{verte}) = \\dfrac{4}{12} = \\dfrac{1}{3}$, $\\quad P(\\text{bleue}) = \\dfrac{3}{12} = \\dfrac{1}{4}$.
<br>Somme : $\\dfrac{5}{12} + \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{12}{12} = 1$. C'est cohérent car les trois couleurs couvrent tous les cas.
<br><strong>2.</strong> L'événement contraire de « tirer une bleue » est « tirer une bille non bleue » (donc rouge ou verte).
<br>$P(\\text{non bleue}) = 1 - P(\\text{bleue}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.
<br><strong>3.</strong> Comme il y a remise, les deux tirages sont indépendants et identiques. Sur l'arbre, la probabilité d'un chemin est le produit des probabilités des branches :
<br>$P(\\text{rouge puis rouge}) = \\dfrac{5}{12} \\times \\dfrac{5}{12} = \\dfrac{25}{144}$.
<br><strong>4.</strong> $P(\\text{rouge puis bleue}) = \\dfrac{5}{12} \\times \\dfrac{3}{12} = \\dfrac{15}{144} = \\dfrac{5}{48}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-pytha',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'échelle contre le mur',
            contenu: `<strong>Énoncé.</strong> Une échelle $[AB]$ de longueur $4{,}5$ m est appuyée contre un mur vertical. Le pied $B$ de l'échelle est posé sur le sol horizontal, à une distance $AB' = 1{,}8$ m du mur, où $B'$ est le point du mur situé au pied. Le point $A$ est le haut de l'échelle sur le mur, le point $C$ est le pied de l'échelle au sol. On note $C$ le pied : le triangle $ABC$ est rectangle en $C$, avec $BC = 1{,}8$ m (distance au mur) et $AB = 4{,}5$ m (l'échelle).
<br>1. Calcule la hauteur $AC$ atteinte par l'échelle sur le mur. Donne la valeur arrondie au centimètre.
<br>2. Calcule la mesure de l'angle $\\widehat{ABC}$ que fait l'échelle avec le sol. Arrondis au degré.
<br>3. Pour des raisons de sécurité, un installateur recommande un angle au sol compris entre $70°$ et $75°$. L'échelle est-elle posée correctement ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le triangle $ABC$ est rectangle en $C$. D'après le théorème de Pythagore :
<br>$AB^2 = AC^2 + BC^2$, donc $AC^2 = AB^2 - BC^2 = 4{,}5^2 - 1{,}8^2 = 20{,}25 - 3{,}24 = 17{,}01$.
<br>$AC = \\sqrt{17{,}01} \\approx 4{,}124$ m, soit $AC \\approx 4{,}12$ m (environ $412$ cm).
<br><strong>2.</strong> Dans le triangle rectangle en $C$, l'angle $\\widehat{ABC}$ a pour côté adjacent $BC$ et pour hypoténuse $AB$ :
<br>$\\cos(\\widehat{ABC}) = \\dfrac{BC}{AB} = \\dfrac{1{,}8}{4{,}5} = 0{,}4$.
<br>Donc $\\widehat{ABC} = \\cos^{-1}(0{,}4) \\approx 66°$.
<br><strong>3.</strong> L'angle au sol vaut environ $66°$, ce qui est <strong>inférieur à $70°$</strong>. L'échelle n'est donc pas posée correctement : elle est trop inclinée (pied trop éloigné du mur). Il faudrait rapprocher le pied du mur pour augmenter l'angle.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-stats',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Les notes de la classe',
            contenu: `<strong>Énoncé.</strong> Voici les notes sur $20$ obtenues par les $25$ élèves d'une classe à un contrôle :
<br>$\\begin{array}{|c|c|c|c|c|c|} \\hline \\text{Note} & 8 & 10 & 12 & 14 & 16 \\\\ \\hline \\text{Effectif} & 3 & 6 & 8 & 5 & 3 \\\\ \\hline \\end{array}$
<br>1. Vérifie que l'effectif total est bien $25$, puis calcule la note moyenne de la classe.
<br>2. Détermine la médiane de cette série. Interprète sa valeur en une phrase.
<br>3. Calcule l'étendue de la série.
<br>4. Le professeur affirme : « Plus de la moitié de la classe a au moins $12$. » A-t-il raison ? Justifie par un calcul d'effectif.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Effectif total : $3 + 6 + 8 + 5 + 3 = 25$. C'est bien $25$ élèves.
<br>Moyenne $= \\dfrac{8 \\times 3 + 10 \\times 6 + 12 \\times 8 + 14 \\times 5 + 16 \\times 3}{25} = \\dfrac{24 + 60 + 96 + 70 + 48}{25} = \\dfrac{298}{25} = 11{,}92$.
<br>La moyenne de la classe est $11{,}92$.
<br><strong>2.</strong> Il y a $25$ valeurs (nombre impair) : la médiane est la $13^{\\text{e}}$ valeur dans l'ordre croissant.
<br>Effectifs cumulés : jusqu'à $8 \\to 3$ ; jusqu'à $10 \\to 9$ ; jusqu'à $12 \\to 17$. La $13^{\\text{e}}$ valeur tombe donc dans la classe « $12$ ». La médiane est $12$.
<br>Interprétation : au moins la moitié des élèves a une note inférieure ou égale à $12$, et au moins la moitié a une note supérieure ou égale à $12$.
<br><strong>3.</strong> Étendue $= 16 - 8 = 8$.
<br><strong>4.</strong> Les élèves ayant « au moins $12$ » sont ceux à $12$, $14$ ou $16$ : $8 + 5 + 3 = 16$ élèves.
<br>Or $16 > \\dfrac{25}{2} = 12{,}5$ : plus de la moitié de la classe a au moins $12$. Le professeur a raison.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-thales',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Hauteur d\'un arbre par les rayons du soleil',
            contenu: `<strong>Énoncé.</strong> Deux droites $(BM)$ et $(CN)$ se coupent en un point $A$ (le sommet d'un piquet posé au sol représentant les rayons du soleil... on modélise par la figure suivante). Sur la figure, $A$, $B$, $C$ sont alignés et $A$, $M$, $N$ sont alignés. On donne : $AB = 2$ m, $AC = 6$ m, $BM = 1{,}5$ m, et les droites $(BM)$ et $(CN)$ sont parallèles. Le segment $[CN]$ représente la hauteur d'un arbre.
<br>1. Fais un schéma à main levée et place les points. Justifie que l'on est dans une configuration de Thalès.
<br>2. Calcule la longueur $CN$, c'est-à-dire la hauteur de l'arbre.
<br>3. On apprend que $AM = 2{,}5$ m. Calcule $AN$.
<br>4. L'application qui transforme la figure « petite » ($B$, $M$) en figure « grande » ($C$, $N$) est une homothétie de centre $A$. Quel est son rapport $k$ ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les points $A$, $B$, $C$ sont alignés et $A$, $M$, $N$ sont alignés (les deux droites passent par $A$), et $(BM) \\parallel (CN)$. On est donc bien dans une configuration du théorème de Thalès, de sommet $A$.
<br><strong>2.</strong> D'après le théorème de Thalès :
<br>$\\dfrac{AB}{AC} = \\dfrac{AM}{AN} = \\dfrac{BM}{CN}$.
<br>On utilise $\\dfrac{AB}{AC} = \\dfrac{BM}{CN}$, soit $\\dfrac{2}{6} = \\dfrac{1{,}5}{CN}$.
<br>Par produit en croix : $CN = \\dfrac{6 \\times 1{,}5}{2} = \\dfrac{9}{2} = 4{,}5$ m. L'arbre mesure $4{,}5$ m.
<br><strong>3.</strong> $\\dfrac{AB}{AC} = \\dfrac{AM}{AN}$, soit $\\dfrac{2}{6} = \\dfrac{2{,}5}{AN}$, donc $AN = \\dfrac{6 \\times 2{,}5}{2} = 7{,}5$ m.
<br><strong>4.</strong> L'homothétie de centre $A$ envoie $B$ sur $C$ : son rapport est $k = \\dfrac{AC}{AB} = \\dfrac{6}{2} = 3$. On vérifie : $CN = 3 \\times BM = 3 \\times 1{,}5 = 4{,}5$ m, et $AN = 3 \\times AM = 3 \\times 2{,}5 = 7{,}5$ m. Cohérent.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-eqineg',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Deux abonnements de cinéma',
            contenu: `<strong>Énoncé.</strong> Un cinéma propose deux formules :
<br>— Formule A : pas d'abonnement, chaque place coûte $9$ €.
<br>— Formule B : un abonnement annuel de $30$ € puis chaque place à $6$ €.
<br>On note $x$ le nombre de places achetées dans l'année.
<br>1. Exprime en fonction de $x$ le prix payé avec la formule A, puis avec la formule B.
<br>2. Résous l'équation $9x = 6x + 30$. Que représente la solution trouvée ?
<br>3. Résous l'équation produit nul $(x - 10)(2x + 8) = 0$ (cette question est indépendante du contexte).
<br>4. À partir de combien de places la formule B devient-elle plus avantageuse que la formule A ? Justifie.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Formule A : prix $= 9x$ (euros). Formule B : prix $= 6x + 30$ (euros).
<br><strong>2.</strong> $9x = 6x + 30$. On soustrait $6x$ aux deux membres : $9x - 6x = 30$, soit $3x = 30$, donc $x = \\dfrac{30}{3} = 10$.
<br>La solution $x = 10$ représente le nombre de places pour lequel les deux formules coûtent exactement le même prix (ici $9 \\times 10 = 90$ € de chaque côté).
<br><strong>3.</strong> Un produit de facteurs est nul si et seulement si l'un des facteurs est nul.
<br>$x - 10 = 0 \\Rightarrow x = 10$. $\\quad 2x + 8 = 0 \\Rightarrow 2x = -8 \\Rightarrow x = -4$.
<br>Les solutions sont $x = 10$ et $x = -4$.
<br><strong>4.</strong> La formule B est plus avantageuse quand $6x + 30 < 9x$, soit $30 < 9x - 6x$, donc $30 < 3x$, c'est-à-dire $x > 10$.
<br>À partir de $11$ places (le premier entier strictement supérieur à $10$), la formule B revient moins cher.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-fonc',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Lire et utiliser une fonction',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ qui, à un nombre $x$, associe $f(x) = 3x - 5$.
<br>1. Calcule l'image de $4$ par $f$, puis l'image de $-2$.
<br>2. Détermine l'antécédent de $7$ par $f$ (le nombre dont l'image est $7$). Tu poseras et résoudras une équation.
<br>3. Recopie et complète le tableau de valeurs suivant :
<br>$\\begin{array}{|c|c|c|c|c|} \\hline x & -1 & 0 & 1 & 2 \\\\ \\hline f(x) & ? & ? & ? & ? \\\\ \\hline \\end{array}$
<br>4. Place les quatre points obtenus dans un repère et trace la représentation graphique de $f$. Que constates-tu sur l'alignement des points ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f(4) = 3 \\times 4 - 5 = 12 - 5 = 7$. L'image de $4$ est $7$.
<br>$f(-2) = 3 \\times (-2) - 5 = -6 - 5 = -11$. L'image de $-2$ est $-11$.
<br><strong>2.</strong> Chercher l'antécédent de $7$, c'est résoudre $f(x) = 7$, soit $3x - 5 = 7$.
<br>$3x = 7 + 5 = 12$, donc $x = \\dfrac{12}{3} = 4$. L'antécédent de $7$ est $4$ (cohérent avec la question 1).
<br><strong>3.</strong> $f(-1) = 3 \\times (-1) - 5 = -8$ ; $f(0) = -5$ ; $f(1) = 3 - 5 = -2$ ; $f(2) = 6 - 5 = 1$.
<br>$\\begin{array}{|c|c|c|c|c|} \\hline x & -1 & 0 & 1 & 2 \\\\ \\hline f(x) & -8 & -5 & -2 & 1 \\\\ \\hline \\end{array}$
<br><strong>4.</strong> En plaçant les points $(-1\\,;-8)$, $(0\\,;-5)$, $(1\\,;-2)$, $(2\\,;1)$, on constate que les quatre points sont <strong>alignés</strong> : la représentation graphique de $f$ est une droite. (C'est normal : $f(x) = 3x - 5$ est une fonction affine.)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-frac',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Calculs avec des fractions relatives',
            contenu: `<strong>Énoncé.</strong> On donne les nombres $A = \\dfrac{-3}{4} + \\dfrac{5}{6}$, $\\quad B = \\dfrac{-7}{10} - \\dfrac{-2}{5}$, $\\quad C = \\dfrac{-3}{8} \\times \\dfrac{4}{-9}$ et $\\quad D = \\dfrac{-5}{6} \\div \\dfrac{10}{-3}$.
<br>1. Calcule $A$ en donnant le résultat sous forme de fraction irréductible.
<br>2. Calcule $B$.
<br>3. Calcule $C$. Précise d'abord le signe du résultat.
<br>4. Calcule $D$ (diviser, c'est multiplier par l'inverse).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dénominateur commun de $4$ et $6$ : $12$.
<br>$A = \\dfrac{-3}{4} + \\dfrac{5}{6} = \\dfrac{-9}{12} + \\dfrac{10}{12} = \\dfrac{-9 + 10}{12} = \\dfrac{1}{12}$.
<br><strong>2.</strong> Soustraire $\\dfrac{-2}{5}$ revient à ajouter $\\dfrac{2}{5}$. Dénominateur commun de $10$ et $5$ : $10$.
<br>$B = \\dfrac{-7}{10} + \\dfrac{2}{5} = \\dfrac{-7}{10} + \\dfrac{4}{10} = \\dfrac{-7 + 4}{10} = \\dfrac{-3}{10}$.
<br><strong>3.</strong> Le produit d'un nombre négatif par un nombre négatif est positif (les deux fractions sont négatives : $\\dfrac{-3}{8}$ et $\\dfrac{4}{-9} = \\dfrac{-4}{9}$). Donc $C > 0$.
<br>$C = \\dfrac{-3}{8} \\times \\dfrac{-4}{9} = \\dfrac{3 \\times 4}{8 \\times 9} = \\dfrac{12}{72} = \\dfrac{1}{6}$.
<br><strong>4.</strong> $\\dfrac{10}{-3} = \\dfrac{-10}{3}$, dont l'inverse est $\\dfrac{3}{-10} = \\dfrac{-3}{10}$.
<br>$D = \\dfrac{-5}{6} \\div \\dfrac{-10}{3} = \\dfrac{-5}{6} \\times \\dfrac{-3}{10} = \\dfrac{5 \\times 3}{6 \\times 10} = \\dfrac{15}{60} = \\dfrac{1}{4}$ (positif : négatif divisé par négatif).
</details>`
          }
        ]
      }
    ]
  }
]
