export const DATA = [
  {
    id: 'ma-5e-rel',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La plongée du sous-marin',
            contenu: `<strong>Énoncé.</strong> Un sous-marin part de la surface (altitude $0$ m).
<br>1. Il descend de $120$ m, puis remonte de $45$ m. Donne son altitude (un nombre relatif) après ces deux mouvements.
<br>2. Range dans l'ordre croissant les altitudes suivantes : $-120$ ; $+45$ ; $-75$ ; $0$ ; $-90$.
<br>3. Un poisson est à l'altitude $-30$ m, un autre à $-110$ m. Lequel est le plus profond ? Quel est l'écart de profondeur entre les deux ?
<br>4. Le sous-marin de la question 1 effectue ensuite $3$ descentes identiques de $25$ m chacune. Calcule la nouvelle altitude en utilisant une multiplication, puis une addition.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Descendre = ajouter un négatif, remonter = ajouter un positif.
$$0 + (-120) + (+45) = -120 + 45 = -75.$$
L'altitude est $-75$ m.
<br><strong>2.</strong> Plus un négatif est « grand », plus il est petit. Ordre croissant :
$$-120 < -90 < -75 < 0 < +45.$$
<br><strong>3.</strong> $-110 < -30$ donc le poisson à $-110$ m est le plus profond.
Écart : $(-30) - (-110) = -30 + 110 = 80$ m.
<br><strong>4.</strong> $3$ descentes de $25$ m : $3 \\times (-25) = -75$ m de variation.
On part de $-75$ m :
$$-75 + (-75) = -150.$$
La nouvelle altitude est $-150$ m.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-statproba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Les notes du contrôle',
            contenu: `<strong>Énoncé.</strong> Voici les notes (sur $20$) obtenues par les $25$ élèves d'une classe à un contrôle de mathématiques :
<br><table border="1" cellpadding="5"><tr><th>Note</th><td>8</td><td>10</td><td>12</td><td>14</td><td>16</td></tr><tr><th>Effectif</th><td>3</td><td>5</td><td>8</td><td>?</td><td>3</td></tr></table>
<br>1. Sachant qu'il y a $25$ élèves au total, retrouve l'effectif manquant (élèves ayant eu $14$).
<br>2. Calcule la fréquence, en pourcentage, des élèves ayant obtenu $12$.
<br>3. Calcule la note moyenne de la classe.
<br>4. On choisit au hasard la copie d'un élève. Quelle est la probabilité que sa note soit supérieure ou égale à $12$ ? Donne le résultat sous forme de fraction puis en pourcentage.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Somme des effectifs connus : $3+5+8+3 = 19$. Il manque $25 - 19 = 6$ élèves ayant eu $14$.
<br><strong>2.</strong> Fréquence de la note $12$ : $\\dfrac{8}{25} = \\dfrac{32}{100} = 32\\%$.
<br><strong>3.</strong> Moyenne = somme des notes pondérées divisée par l'effectif total :
$$\\frac{8\\times 3 + 10\\times 5 + 12\\times 8 + 14\\times 6 + 16\\times 3}{25} = \\frac{24+50+96+84+48}{25} = \\frac{302}{25} = 12{,}08.$$
La moyenne est $12{,}08$.
<br><strong>4.</strong> Notes $\\geq 12$ : $8 + 6 + 3 = 17$ élèves. La probabilité est
$$\\frac{17}{25} = \\frac{68}{100} = 68\\%.$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-symcentrale',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Construction et propriétés du symétrique',
            contenu: `<strong>Énoncé.</strong> Dans un repère, on considère le triangle $ABC$ avec $A(1\\,;\\,2)$, $B(4\\,;\\,3)$ et $C(2\\,;\\,5)$. On note $O(3\\,;\\,3)$.
<br>1. Construis (ou détermine par calcul) les coordonnées de $A'$, $B'$ et $C'$, symétriques respectifs de $A$, $B$ et $C$ par rapport au point $O$.
<br>2. On sait que $AB = \\sqrt{10}$ cm. Sans nouveau calcul de distance, donne la longueur $A'B'$. Quelle propriété justifie ta réponse ?
<br>3. L'angle $\\widehat{ABC}$ mesure $63°$. Que vaut l'angle $\\widehat{A'B'C'}$ ? Justifie.
<br>4. Cite une figure qui possède $O$ comme centre de symétrie et explique ce que cela signifie pour un point $M$ de cette figure.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $O$ est le milieu de $[AA']$. Pour passer de $A$ à $O$ on ajoute $(+2\\,;\\,+1)$, donc de $O$ à $A'$ on ajoute encore $(+2\\,;\\,+1)$ : $A'(5\\,;\\,4)$.
De même $B(4\\,;\\,3) \\to O(3\\,;\\,3)$ : on ajoute $(-1\\,;\\,0)$, donc $B'(2\\,;\\,3)$.
Et $C(2\\,;\\,5) \\to O(3\\,;\\,3)$ : on ajoute $(+1\\,;\\,-2)$, donc $C'(4\\,;\\,1)$.
<br><strong>2.</strong> La symétrie centrale conserve les longueurs, donc $A'B' = AB = \\sqrt{10}$ cm.
<br><strong>3.</strong> La symétrie centrale conserve les mesures d'angles, donc $\\widehat{A'B'C'} = \\widehat{ABC} = 63°$.
<br><strong>4.</strong> Exemple : un parallélogramme a pour centre de symétrie le point d'intersection de ses diagonales. Si $O$ est centre de symétrie d'une figure, alors pour tout point $M$ de la figure, son symétrique $M'$ par rapport à $O$ appartient aussi à la figure.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-vol',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'aquarium et le réservoir cylindrique',
            contenu: `<strong>Énoncé.</strong> On donne $\\pi \\approx 3{,}14$.
<br>1. Un aquarium a la forme d'un prisme droit dont la base est un rectangle de longueur $50$ cm et de largeur $30$ cm ; sa hauteur est $40$ cm. Calcule le périmètre de la base, puis l'aire de la base.
<br>2. Calcule le volume de l'aquarium en cm³, puis convertis-le en litres (rappel : $1$ L $= 1000$ cm³).
<br>3. Un réservoir cylindrique a un rayon de base de $20$ cm et une hauteur de $50$ cm. Calcule l'aire de sa base (un disque), puis son volume en cm³.
<br>4. On veut transvaser toute l'eau de l'aquarium plein dans le réservoir. Le réservoir est-il assez grand ? Justifie.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Périmètre de la base : $2 \\times (50 + 30) = 160$ cm.
Aire de la base : $50 \\times 30 = 1500$ cm².
<br><strong>2.</strong> Volume du prisme droit = aire de base $\\times$ hauteur :
$$V = 1500 \\times 40 = 60\\,000 \\text{ cm}^3.$$
Conversion : $60\\,000 \\div 1000 = 60$ L.
<br><strong>3.</strong> Aire du disque de base : $\\pi \\times r^2 = 3{,}14 \\times 20^2 = 3{,}14 \\times 400 = 1256$ cm².
Volume du cylindre = aire de base $\\times$ hauteur :
$$V = 1256 \\times 50 = 62\\,800 \\text{ cm}^3.$$
<br><strong>4.</strong> Le réservoir contient $62\\,800$ cm³, soit $62{,}8$ L. L'aquarium contient $60$ L. Comme $62{,}8 > 60$, le réservoir est assez grand pour recevoir toute l'eau.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-aires',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le jardin et son allée',
            contenu: `<strong>Énoncé.</strong> Un jardin rectangulaire mesure $25$ m de longueur et $18$ m de largeur.
<br>1. Calcule le périmètre du jardin. On veut l'entourer d'une clôture vendue par rouleaux de $10$ m. Combien de rouleaux faut-il acheter ?
<br>2. Calcule l'aire du jardin en m².
<br>3. À l'intérieur, on aménage une terrasse carrée de côté $6$ m. Quelle est l'aire de la partie restée en pelouse ?
<br>4. Convertis l'aire de la pelouse en cm². (Rappel : $1$ m² $= 10\\,000$ cm².)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Périmètre : $2 \\times (25 + 18) = 2 \\times 43 = 86$ m.
Nombre de rouleaux : $86 \\div 10 = 8{,}6$, on ne peut pas acheter un bout de rouleau, donc il faut $9$ rouleaux.
<br><strong>2.</strong> Aire du jardin : $25 \\times 18 = 450$ m².
<br><strong>3.</strong> Aire de la terrasse carrée : $6 \\times 6 = 36$ m².
Aire de la pelouse : $450 - 36 = 414$ m².
<br><strong>4.</strong> $414 \\times 10\\,000 = 4\\,140\\,000$ cm².
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-arith',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Les paquets de gâteaux',
            contenu: `<strong>Énoncé.</strong> On dispose de $84$ chocolats et de $126$ bonbons.
<br>1. Le nombre $84$ est-il divisible par $2$ ? par $3$ ? par $9$ ? Justifie avec les critères de divisibilité.
<br>2. Décompose $84$ et $126$ en produits de facteurs premiers.
<br>3. On veut préparer des paquets identiques contenant tous le même nombre de chocolats et le même nombre de bonbons, en utilisant tous les chocolats et tous les bonbons. Quel est le plus grand nombre de paquets que l'on peut faire ? (On cherche le PGCD de $84$ et $126$.)
<br>4. Combien de chocolats et combien de bonbons y aura-t-il alors dans chaque paquet ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $84$ se termine par $4$ (chiffre pair) : divisible par $2$.
Somme des chiffres : $8+4 = 12$, divisible par $3$ : donc $84$ est divisible par $3$. Mais $12$ n'est pas divisible par $9$, donc $84$ n'est pas divisible par $9$.
<br><strong>2.</strong> $84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$.
$126 = 2 \\times 63 = 2 \\times 9 \\times 7 = 2 \\times 3^2 \\times 7$.
<br><strong>3.</strong> Le PGCD se lit sur les facteurs communs avec le plus petit exposant :
facteurs communs $2$, $3$ et $7$, donc
$$\\text{PGCD}(84\\,;\\,126) = 2 \\times 3 \\times 7 = 42.$$
On peut faire au maximum $42$ paquets.
<br><strong>4.</strong> Chocolats par paquet : $84 \\div 42 = 2$. Bonbons par paquet : $126 \\div 42 = 3$.
Chaque paquet contient $2$ chocolats et $3$ bonbons.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-frac',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le gâteau partagé',
            contenu: `<strong>Énoncé.</strong> Léa coupe un gâteau en parts égales.
<br>1. Elle mange $\\dfrac{3}{8}$ du gâteau le midi et son frère en mange $\\dfrac{2}{8}$ le soir. Quelle fraction du gâteau a été mangée ? Quelle fraction reste-t-il ?
<br>2. Compare les fractions $\\dfrac{3}{8}$ et $\\dfrac{2}{6}$ : laquelle est la plus grande ? (Pense à les réduire au même dénominateur.)
<br>3. Calcule $\\dfrac{3}{4} \\times \\dfrac{2}{5}$ et donne le résultat sous forme simplifiée.
<br>4. Léa partage équitablement $\\dfrac{1}{2}$ litre de jus entre $3$ amis. Quelle quantité reçoit chaque ami ? (Calcule $\\dfrac{1}{2} \\div 3$.)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Mangé : $\\dfrac{3}{8} + \\dfrac{2}{8} = \\dfrac{5}{8}$.
Reste : $\\dfrac{8}{8} - \\dfrac{5}{8} = \\dfrac{3}{8}$.
<br><strong>2.</strong> On réduit au même dénominateur. Avec $24$ :
$\\dfrac{3}{8} = \\dfrac{9}{24}$ et $\\dfrac{2}{6} = \\dfrac{8}{24}$.
Comme $9 > 8$, on a $\\dfrac{3}{8} > \\dfrac{2}{6}$.
<br><strong>3.</strong> On multiplie numérateurs entre eux et dénominateurs entre eux :
$$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}.$$
<br><strong>4.</strong> Diviser par $3$ revient à multiplier par $\\dfrac{1}{3}$ :
$$\\frac{1}{2} \\div 3 = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}.$$
Chaque ami reçoit $\\dfrac{1}{6}$ de litre.
</details>`
          }
        ]
      }
    ]
  }
]
