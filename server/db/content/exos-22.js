export const DATA = [
  {
    id: 'ma-4e-translation',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Construire et reconnaître une translation',
            contenu: `<strong>Énoncé.</strong> On se place dans un repère quadrillé. On donne quatre points : $A(1\\,;\\,2)$, $B(4\\,;\\,3)$, $C(2\\,;\\,5)$ et $D(0\\,;\\,1)$.
<br>1. Place ces points sur un quadrillage. Décris le déplacement (combien de carreaux vers la droite et vers le haut) qui permet de passer de $A$ à $B$.
<br>2. Construis le point $E$ image de $C$ par la translation qui transforme $A$ en $B$. Donne ses coordonnées.
<br>3. On note $T$ la translation qui transforme $A$ en $B$. Construis l'image $F$ de $D$ par $T$. Que peut-on dire du quadrilatère $A B F D$ ? Justifie.
<br>4. La translation $T$ conserve-t-elle les longueurs ? En déduire que $C E = A B$ et calcule cette longueur.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour passer de $A(1\\,;\\,2)$ à $B(4\\,;\\,3)$, on se déplace de $4-1 = 3$ carreaux vers la droite et de $3-2 = 1$ carreau vers le haut. La translation $T$ est donc le déplacement « $+3$ en abscisse, $+1$ en ordonnée ».
<br><strong>2.</strong> L'image $E$ de $C(2\\,;\\,5)$ s'obtient en appliquant le même déplacement : $x_E = 2+3 = 5$ et $y_E = 5+1 = 6$. Donc $E(5\\,;\\,6)$.
<br><strong>3.</strong> L'image $F$ de $D(0\\,;\\,1)$ a pour coordonnées $x_F = 0+3 = 3$ et $y_F = 1+1 = 2$, donc $F(3\\,;\\,2)$. Comme $D$ a pour image $F$ par la même translation que celle qui envoie $A$ sur $B$, les segments $[AB]$ et $[DF]$ ont même longueur, même direction et même sens : $A B F D$ est un parallélogramme (côtés $[AB]$ et $[DF]$ parallèles et de même longueur).
<br><strong>4.</strong> Une translation conserve les longueurs (elle ne fait que glisser la figure). Donc l'image $[CE]$ du segment... plus précisément $C E = A B$ car $E$ est l'image de $C$ par $T$ et $B$ celle de $A$. On calcule $A B$ : le déplacement est $3$ vers la droite et $1$ vers le haut, donc par le théorème de Pythagore $A B = \\sqrt{3^2 + 1^2} = \\sqrt{9+1} = \\sqrt{10} \\approx 3{,}16$. Ainsi $C E = \\sqrt{10}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-trigo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le cosinus dans tous ses états',
            contenu: `<strong>Énoncé.</strong> $A B C$ est un triangle rectangle en $B$. On donne $A B = 6$ cm et l'angle $\\widehat{B A C} = 35°$.
<br>1. Sur la figure, repère l'hypoténuse et le côté adjacent à l'angle $\\widehat{B A C}$. Écris la relation donnant $\\cos(\\widehat{B A C})$ dans ce triangle.
<br>2. Calcule la longueur $A C$, arrondie au millimètre.
<br>3. On place le point $H$, pied de la hauteur issue de $B$, sur $[AC]$. Dans le triangle $A B H$ rectangle en $H$, calcule la longueur $A H$ au millimètre.
<br>4. Dans un autre triangle $D E F$ rectangle en $E$, on mesure $D E = 5$ cm et $D F = 8$ cm. Calcule la mesure de l'angle $\\widehat{F D E}$, arrondie au degré.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le triangle est rectangle en $B$, donc l'hypoténuse est $[AC]$ (côté opposé à l'angle droit). Pour l'angle $\\widehat{B A C}$, le côté adjacent est $[AB]$. Par définition :
$$\\cos(\\widehat{B A C}) = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} = \\frac{A B}{A C}.$$
<strong>2.</strong> On isole $A C$ : $A C = \\dfrac{A B}{\\cos(35°)} = \\dfrac{6}{\\cos(35°)} \\approx \\dfrac{6}{0{,}819} \\approx 7{,}32$ cm, soit $A C \\approx 7{,}3$ cm.
<br><strong>3.</strong> Dans le triangle $A B H$ rectangle en $H$, l'angle $\\widehat{B A H}$ est le même que $\\widehat{B A C} = 35°$, l'hypoténuse est $[AB]$ et le côté adjacent est $[AH]$. Donc
$$\\cos(35°) = \\frac{A H}{A B} \\quad\\Longrightarrow\\quad A H = A B \\times \\cos(35°) = 6 \\times 0{,}819 \\approx 4{,}9 \\text{ cm}.$$
<strong>4.</strong> Dans $D E F$ rectangle en $E$, pour l'angle $\\widehat{F D E}$ l'hypoténuse est $[DF]$ et le côté adjacent est $[DE]$. Donc
$$\\cos(\\widehat{F D E}) = \\frac{D E}{D F} = \\frac{5}{8} = 0{,}625.$$
On en déduit $\\widehat{F D E} = \\cos^{-1}(0{,}625) \\approx 51°$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-calclit',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du périmètre à l\'équation',
            contenu: `<strong>Énoncé.</strong> Un rectangle a une longueur égale à $x$ centimètres. Sa largeur mesure $3$ cm de moins que sa longueur.
<br>1. Exprime la largeur du rectangle en fonction de $x$.
<br>2. Montre que le périmètre $P$ du rectangle s'écrit $P = 4x - 6$ après réduction. Détaille les étapes (distributivité, réduction).
<br>3. On donne $x = 7$. Calcule alors le périmètre.
<br>4. On souhaite maintenant que le périmètre soit égal à $50$ cm. Écris l'équation correspondante et résous-la pour trouver la longueur $x$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La largeur mesure $3$ cm de moins que la longueur $x$, donc largeur $= x - 3$.
<br><strong>2.</strong> Le périmètre d'un rectangle vaut $2 \\times (\\text{longueur} + \\text{largeur})$ :
$$P = 2 \\times \\big(x + (x-3)\\big) = 2 \\times (2x - 3).$$
On développe par distributivité : $P = 2 \\times 2x - 2 \\times 3 = 4x - 6$.
<br><strong>3.</strong> Pour $x = 7$ : $P = 4 \\times 7 - 6 = 28 - 6 = 22$ cm.
<br><strong>4.</strong> On veut $P = 50$, d'où l'équation $4x - 6 = 50$.
<br>On ajoute $6$ aux deux membres : $4x = 56$. On divise par $4$ : $x = \\dfrac{56}{4} = 14$.
<br>La longueur doit valoir $14$ cm (et la largeur $14 - 3 = 11$ cm ; vérification : $2 \\times (14+11) = 2 \\times 25 = 50$ cm).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-geom',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Angles, parallèles et somme dans le triangle',
            contenu: `<strong>Énoncé.</strong> Deux droites $(d_1)$ et $(d_2)$ sont parallèles et coupées par une sécante en deux points $A$ et $B$. On donne un angle de $58°$ entre la sécante et $(d_1)$ en $A$. Par ailleurs, $A B C$ est un triangle tel que $\\widehat{B A C} = 58°$ et $\\widehat{A B C} = 47°$.
<br>1. En utilisant les droites parallèles, détermine la mesure de l'angle alterne-interne situé en $B$ entre la sécante et $(d_2)$. Justifie.
<br>2. Dans le triangle $A B C$, calcule la mesure de l'angle $\\widehat{A C B}$.
<br>3. On donne $A B = 7$ cm et $A C = 4$ cm. Un élève affirme que l'on peut avoir $B C = 2$ cm. A-t-il raison ? Justifie à l'aide de l'inégalité triangulaire.
<br>4. Donne un encadrement de la longueur $B C$ permettant de construire le triangle.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Deux droites parallèles coupées par une sécante forment des angles alternes-internes de même mesure. L'angle en $B$ entre la sécante et $(d_2)$ est donc l'alterne-interne de l'angle de $58°$ en $A$ : il mesure $58°$.
<br><strong>2.</strong> La somme des angles d'un triangle vaut $180°$. Donc
$$\\widehat{A C B} = 180° - \\widehat{B A C} - \\widehat{A B C} = 180° - 58° - 47° = 75°.$$
<strong>3.</strong> L'inégalité triangulaire impose que chaque côté soit plus court que la somme des deux autres. Avec $B C = 2$ : on aurait $A C = 4$ et $B C + A C = 2 + 4 = 6$, alors que $A B = 7$. Or $7 > 6$ : le côté $[AB]$ serait plus long que la somme des deux autres, ce qui est impossible. L'élève a donc <strong>tort</strong>, on ne peut pas construire ce triangle.
<br><strong>4.</strong> Pour que le triangle existe, il faut $|A B - A C| < B C < A B + A C$, c'est-à-dire $|7 - 4| < B C < 7 + 4$, soit
$$3 < B C < 11 \\text{ (en cm).}$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-parallelo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Reconnaître le bon parallélogramme',
            contenu: `<strong>Énoncé.</strong> $A B C D$ est un parallélogramme de centre $O$ (point d'intersection des diagonales). On donne $A B = 5$ cm, $A D = 5$ cm et $\\widehat{D A B} = 90°$.
<br>1. Rappelle deux propriétés des diagonales d'un parallélogramme quelconque.
<br>2. En utilisant les données, précise quelle est la nature exacte de $A B C D$ (parallélogramme particulier). Justifie en t'appuyant sur les côtés et l'angle.
<br>3. On donne $A C = 7{,}1$ cm. Calcule la longueur $O B$. Que peux-tu dire des deux diagonales de cette figure ?
<br>4. On considère maintenant un parallélogramme $E F G H$ d'aire $24$ cm². On sait que le côté $[EF]$ mesure $6$ cm. Calcule la hauteur relative à ce côté.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dans un parallélogramme, les diagonales se coupent en leur milieu ; de plus les côtés opposés sont parallèles et de même longueur, et les angles opposés sont égaux.
<br><strong>2.</strong> Ici $A B = A D = 5$ cm : deux côtés consécutifs égaux, donc tous les côtés sont égaux (parallélogramme $\\Rightarrow$ côtés opposés égaux) : c'est un losange. De plus l'angle $\\widehat{D A B} = 90°$ : un parallélogramme avec un angle droit est un rectangle. Un quadrilatère à la fois losange et rectangle est un <strong>carré</strong>. Donc $A B C D$ est un carré de côté $5$ cm.
<br><strong>3.</strong> Les diagonales se coupent en leur milieu $O$, donc $O B = \\dfrac{1}{2}\\, A C$... attention : $O$ est le milieu de chaque diagonale, donc $O B = \\dfrac{1}{2}\\, B D$ et $O A = \\dfrac{1}{2}\\, A C = \\dfrac{7{,}1}{2} = 3{,}55$ cm. Dans un carré, les deux diagonales ont la même longueur, donc $B D = A C = 7{,}1$ cm et $O B = 3{,}55$ cm. Les diagonales sont de même longueur et perpendiculaires (propriété du carré).
<br><strong>4.</strong> L'aire d'un parallélogramme vaut base $\\times$ hauteur. Donc hauteur $= \\dfrac{\\text{aire}}{\\text{base}} = \\dfrac{24}{6} = 4$ cm.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-prct',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le voyage proportionnel',
            contenu: `<strong>Énoncé.</strong> Une voiture parcourt une distance en suivant une carte à l'échelle $\\dfrac{1}{200\\,000}$.
<br>1. Sur la carte, le trajet mesure $9$ cm. Calcule la distance réelle parcourue, en kilomètres.
<br>2. La voiture met $1$ h $30$ min pour faire ce trajet. Calcule sa vitesse moyenne en km/h.
<br>3. La consommation d'essence est proportionnelle à la distance. La voiture consomme $6$ litres pour $100$ km. Combien de litres consomme-t-elle sur ce trajet ? (arrondir au dixième)
<br>4. Le plein d'essence coûte habituellement $80 €$, mais une promotion offre une réduction de $15 \\%$. Quel est le prix payé après réduction ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> L'échelle $\\dfrac{1}{200\\,000}$ signifie que $1$ cm sur la carte représente $200\\,000$ cm en réalité. Donc $9$ cm représentent $9 \\times 200\\,000 = 1\\,800\\,000$ cm $= 18\\,000$ m $= 18$ km.
<br><strong>2.</strong> $1$ h $30$ min $= 1{,}5$ h. La vitesse moyenne est
$$v = \\frac{\\text{distance}}{\\text{temps}} = \\frac{18}{1{,}5} = 12 \\text{ km/h}.$$
<strong>3.</strong> La consommation est proportionnelle : $6$ L pour $100$ km. Pour $18$ km (quatrième proportionnelle) :
$$\\text{conso} = \\frac{6 \\times 18}{100} = \\frac{108}{100} = 1{,}08 \\approx 1{,}1 \\text{ L}.$$
<strong>4.</strong> Une réduction de $15 \\%$ sur $80 €$ représente $80 \\times \\dfrac{15}{100} = 12 €$. Le prix payé est donc $80 - 12 = 68 €$ (ou directement $80 \\times 0{,}85 = 68 €$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-pytha',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Fractions et priorités : le grand mélange',
            contenu: `<strong>Énoncé.</strong> On considère l'expression
$$A = \\frac{2}{3} + \\frac{5}{6} \\times \\frac{4}{5}.$$
1. En respectant les priorités opératoires, calcule $A$ et donne le résultat sous forme de fraction simplifiée.
<br>2. Calcule de même
$$B = \\left(\\frac{3}{4} - \\frac{1}{2}\\right) \\div \\frac{3}{8},$$
en détaillant chaque étape.
<br>3. Une recette utilise $\\dfrac{2}{3}$ d'un sachet de farine pour un gâteau. Marie veut faire $2$ gâteaux. Quelle fraction de sachet utilise-t-elle ? Le résultat dépasse-t-il un sachet entier ?
<br>4. Compare les fractions $\\dfrac{7}{12}$ et $\\dfrac{2}{3}$ en les mettant au même dénominateur.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La multiplication est prioritaire sur l'addition. On calcule d'abord $\\dfrac{5}{6} \\times \\dfrac{4}{5} = \\dfrac{5 \\times 4}{6 \\times 5} = \\dfrac{20}{30} = \\dfrac{2}{3}$. Donc
$$A = \\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3}.$$
<strong>2.</strong> On calcule d'abord la parenthèse. Au même dénominateur ($4$) : $\\dfrac{3}{4} - \\dfrac{1}{2} = \\dfrac{3}{4} - \\dfrac{2}{4} = \\dfrac{1}{4}$. Puis diviser, c'est multiplier par l'inverse :
$$B = \\frac{1}{4} \\div \\frac{3}{8} = \\frac{1}{4} \\times \\frac{8}{3} = \\frac{8}{12} = \\frac{2}{3}.$$
<strong>3.</strong> Pour $2$ gâteaux : $2 \\times \\dfrac{2}{3} = \\dfrac{4}{3}$ de sachet. Comme $\\dfrac{4}{3} > 1$ (car $\\dfrac{4}{3} = 1 + \\dfrac{1}{3}$), elle utilise plus d'un sachet entier : il lui faut $2$ sachets.
<br><strong>4.</strong> Au même dénominateur $12$ : $\\dfrac{2}{3} = \\dfrac{2 \\times 4}{3 \\times 4} = \\dfrac{8}{12}$. Comme $\\dfrac{7}{12} < \\dfrac{8}{12}$, on a $\\dfrac{7}{12} < \\dfrac{2}{3}$.
</details>`
          }
        ]
      }
    ]
  }
]
