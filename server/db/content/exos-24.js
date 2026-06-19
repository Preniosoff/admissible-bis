export const DATA = [
  {
    id: 'ma-6e-geo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le cerf-volant tracé au compas',
            contenu: `<strong>Énoncé.</strong> On veut construire une figure en respectant un programme précis. Munis-toi d'une règle, d'une équerre, d'un compas et d'un rapporteur.
<br>1. Trace un segment $[AB]$ tel que $AB = 6$ cm. Place le point $M$, milieu de $[AB]$.
<br>2. Trace la droite $(d)$ perpendiculaire à $(AB)$ passant par $M$. Place sur $(d)$, d'un même côté de $(AB)$, un point $C$ tel que $MC = 4$ cm, puis de l'autre côté un point $D$ tel que $MD = 8$ cm.
<br>3. Trace le quadrilatère $ACBD$. Quelle est la nature des triangles $ACB$ et $ADB$ ? Justifie.
<br>4. Mesure l'angle $\\widehat{ACB}$ au rapporteur. À quoi correspond la droite $(d)$ pour le segment $[AB]$ ?
<br>5. Le quadrilatère $ACBD$ admet-il un axe de symétrie ? Lequel ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1 et 2.</strong> On trace $[AB]$, on place $M$ à 3 cm de $A$ (car $6 \\div 2 = 3$). La perpendiculaire $(d)$ se trace à l'équerre en $M$. On reporte $C$ à 4 cm au-dessus, $D$ à 8 cm en dessous.
<br><strong>3.</strong> Dans le triangle $ACB$ : $(d)$ est perpendiculaire à $(AB)$ et $M$ est le milieu de $[AB]$, donc $C$ est sur la médiatrice de $[AB]$. Tout point de la médiatrice est à égale distance des extrémités : $CA = CB$. Le triangle $ACB$ est donc <strong>isocèle en $C$</strong>. De même, $DA = DB$, donc $ADB$ est <strong>isocèle en $D$</strong>.
<br><strong>4.</strong> À la mesure, $\\widehat{ACB} \\approx 74^\\circ$. La droite $(d)$, perpendiculaire à $[AB]$ et passant par son milieu, est la <strong>médiatrice du segment $[AB]$</strong>.
<br><strong>5.</strong> Les points $A$ et $B$ sont symétriques par rapport à $(d)$, tandis que $C$ et $D$ sont sur $(d)$ donc invariants. Le quadrilatère $ACBD$ admet donc $(d)$, c'est-à-dire la droite $(CD)$, comme <strong>axe de symétrie</strong>. C'est un cerf-volant.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-nb',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le ruban et les étiquettes',
            contenu: `<strong>Énoncé.</strong> Pour un atelier, on dispose d'un ruban de $7,5$ m. On veut couper des morceaux pour fabriquer des étiquettes.
<br>1. Donne la valeur du chiffre $5$ dans le nombre $7,5$. Écris ce nombre sous la forme d'une fraction décimale (dénominateur 10, 100 ou 1000).
<br>2. Range dans l'ordre croissant les longueurs suivantes (en mètres) : $0,75$ ; $7,5$ ; $0,705$ ; $7,05$ ; $0,8$.
<br>3. Une étiquette mesure $0,45$ m. On en coupe $3$. Quelle longueur de ruban a-t-on utilisée ? Combien en reste-t-il ?
<br>4. Avec le ruban restant, combien d'étiquettes de $0,45$ m peut-on encore fabriquer entièrement ? Justifie par un calcul.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le chiffre $5$ est le chiffre des dixièmes : il vaut $0,5$, c'est-à-dire cinq dixièmes. On a $7,5 = \\dfrac{75}{10}$.
<br><strong>2.</strong> On compare d'abord les parties entières, puis les décimales en alignant les virgules :
<br>$0,705 < 0,75 < 0,8 < 7,05 < 7,5$.
<br><strong>3.</strong> Trois étiquettes : $0,45 \\times 3 = 1,35$ m utilisés. Il reste $7,5 - 1,35 = 6,15$ m.
<br><strong>4.</strong> On divise : $6,15 \\div 0,45$. On peut écrire $6,15 \\div 0,45 = 615 \\div 45 \\approx 13,6$. On ne peut couper que des étiquettes entières : on peut donc fabriquer <strong>13 étiquettes</strong> de plus (car $13 \\times 0,45 = 5,85$ m $\\leqslant 6,15$ m, alors que $14 \\times 0,45 = 6,30 > 6,15$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-prop',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La recette de cookies et le plan de la cuisine',
            contenu: `<strong>Énoncé.</strong> Une recette de cookies pour $4$ personnes nécessite $200$ g de farine et $120$ g de chocolat.
<br>1. Recopie et complète ce tableau de proportionnalité.
<br>
<table border="1" cellpadding="6">
<tr><th>Personnes</th><td>4</td><td>6</td><td>10</td></tr>
<tr><th>Farine (g)</th><td>200</td><td>...</td><td>...</td></tr>
<tr><th>Chocolat (g)</th><td>120</td><td>...</td><td>...</td></tr>
</table>
<br>2. Quelle quantité de farine faut-il pour $7$ personnes ? Utilise la règle de trois.
<br>3. Dans cette recette, quel pourcentage de la masse (farine + chocolat) représente le chocolat ?
<br>4. Sur le plan de la cuisine, dessiné à l'échelle $1/50$, le plan de travail mesure $4$ cm. Quelle est sa longueur réelle, en mètres ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Coefficient pour la farine : $200 \\div 4 = 50$ g par personne ; pour le chocolat : $120 \\div 4 = 30$ g par personne.
<br>Pour 6 : farine $50 \\times 6 = 300$ g, chocolat $30 \\times 6 = 180$ g.
<br>Pour 10 : farine $500$ g, chocolat $300$ g.
<br><strong>2.</strong> Règle de trois : $\\dfrac{200 \\times 7}{4} = \\dfrac{1400}{4} = 350$ g de farine.
<br><strong>3.</strong> Masse totale pour 4 personnes : $200 + 120 = 320$ g. Part du chocolat : $\\dfrac{120}{320} = 0,375 = 37,5\\%$.
<br><strong>4.</strong> Échelle $1/50$ : $1$ cm sur le plan représente $50$ cm en réalité. Donc $4$ cm représentent $4 \\times 50 = 200$ cm $= 2$ m. Le plan de travail mesure <strong>2 m</strong>.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-repere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La chasse au trésor sur quadrillage',
            contenu: `<strong>Énoncé.</strong> On travaille dans un repère orthogonal. On place les points $A(2 \\,;\\, 1)$, $B(6 \\,;\\, 1)$ et $C(6 \\,;\\, 4)$.
<br>1. Place ces trois points dans un repère (1 carreau = 1 unité).
<br>2. Donne les coordonnées du point $D$ tel que $ABCD$ soit un rectangle.
<br>3. Détermine les coordonnées du point $M$, milieu du segment $[AC]$.
<br>4. Le tableau ci-dessous donne la température relevée chaque jour à midi :
<br>
<table border="1" cellpadding="6">
<tr><th>Jour</th><td>Lun</td><td>Mar</td><td>Mer</td><td>Jeu</td></tr>
<tr><th>Temp. (°C)</th><td>12</td><td>15</td><td>10</td><td>17</td></tr>
</table>
<br>Le trésor est caché au jour où la température fut maximale. Quel jour, et quelle température ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On repère chaque point : l'abscisse (horizontale) d'abord, l'ordonnée (verticale) ensuite. $A$ est à 2 à droite et 1 en haut, etc.
<br><strong>2.</strong> $A$, $B$, $C$ étant placés, $D$ a la même abscisse que $A$ et la même ordonnée que $C$ : $D(2 \\,;\\, 4)$. On vérifie que $[AD]$ est vertical et $[DC]$ horizontal : $ABCD$ est bien un rectangle.
<br><strong>3.</strong> Le milieu $M$ de $[AC]$ a pour coordonnées la moyenne des abscisses et des ordonnées : abscisse $\\dfrac{2+6}{2} = 4$, ordonnée $\\dfrac{1+4}{2} = 2,5$. Donc $M(4 \\,;\\, 2,5)$.
<br><strong>4.</strong> La plus grande valeur du tableau est $17\\,°\\mathrm{C}$, atteinte <strong>jeudi</strong>. Le trésor est caché jeudi.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-solides',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'aquarium à remplir',
            contenu: `<strong>Énoncé.</strong> Un aquarium a la forme d'un pavé droit (parallélépipède rectangle) de longueur $50$ cm, de largeur $30$ cm et de hauteur $40$ cm.
<br>1. Combien l'aquarium possède-t-il de faces, d'arêtes et de sommets ? De quelle forme sont ses faces ?
<br>2. Sur un patron de ce pavé, on dessine la face du fond. Quelles sont ses dimensions ?
<br>3. Calcule le volume de l'aquarium en $\\mathrm{cm}^3$, puis convertis-le en litres (on rappelle $1$ L $= 1000\\;\\mathrm{cm}^3$).
<br>4. On remplit l'aquarium aux trois quarts de sa hauteur. Quel volume d'eau, en litres, cela représente-t-il ?
<br>5. On veut tapisser les quatre faces latérales (sans le fond ni le dessus) d'un film décoratif. Quelle surface de film faut-il, en $\\mathrm{cm}^2$ ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Un pavé droit a <strong>6 faces, 12 arêtes et 8 sommets</strong>. Toutes ses faces sont des <strong>rectangles</strong>.
<br><strong>2.</strong> La face du fond est un rectangle de dimensions $50 \\text{ cm} \\times 30$ cm (longueur × largeur).
<br><strong>3.</strong> Volume $= L \\times l \\times h = 50 \\times 30 \\times 40 = 60\\,000\\;\\mathrm{cm}^3$. Conversion : $60\\,000 \\div 1000 = 60$ L.
<br><strong>4.</strong> Aux trois quarts : $\\dfrac{3}{4} \\times 60 = 45$ L. (On peut aussi remplir jusqu'à $\\dfrac{3}{4}\\times 40 = 30$ cm de hauteur : $50\\times30\\times30 = 45\\,000\\;\\mathrm{cm}^3 = 45$ L.)
<br><strong>5.</strong> Les quatre faces latérales : deux rectangles $50 \\times 40$ et deux rectangles $30 \\times 40$.
<br>Aire $= 2 \\times (50 \\times 40) + 2 \\times (30 \\times 40) = 2 \\times 2000 + 2 \\times 1200 = 4000 + 2400 = 6400\\;\\mathrm{cm}^2$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-stat',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Les ventes de la boulangerie',
            contenu: `<strong>Énoncé.</strong> Une boulangerie note le nombre de baguettes vendues chaque jour d'une semaine :
<br>
<table border="1" cellpadding="6">
<tr><th>Jour</th><td>Lun</td><td>Mar</td><td>Mer</td><td>Jeu</td><td>Ven</td><td>Sam</td></tr>
<tr><th>Baguettes</th><td>80</td><td>75</td><td>90</td><td>85</td><td>100</td><td>150</td></tr>
</table>
<br>1. Combien de baguettes ont été vendues au total dans la semaine ?
<br>2. Calcule le nombre moyen de baguettes vendues par jour.
<br>3. Quel jour les ventes ont-elles été les plus fortes ? les plus faibles ? Quel est l'écart entre ces deux jours ?
<br>4. On veut représenter ces données par un diagramme en bâtons. Quelle hauteur (en carreaux) donnerais-tu au bâton du samedi si $1$ carreau représente $10$ baguettes ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Total $= 80 + 75 + 90 + 85 + 100 + 150 = 580$ baguettes.
<br><strong>2.</strong> Moyenne $= \\dfrac{580}{6} \\approx 96,7$ baguettes par jour (environ 97).
<br><strong>3.</strong> Ventes maximales : <strong>samedi</strong> avec 150 baguettes. Ventes minimales : <strong>mardi</strong> avec 75. Écart $= 150 - 75 = 75$ baguettes.
<br><strong>4.</strong> Si $1$ carreau vaut $10$ baguettes, le bâton du samedi mesure $150 \\div 10 = 15$ carreaux.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-6e-sym',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le papillon symétrique',
            contenu: `<strong>Énoncé.</strong> On considère une droite verticale $(d)$ tracée sur du papier quadrillé.
<br>1. On place un point $A$ à $3$ carreaux à gauche de $(d)$ et $2$ carreaux vers le haut. Construis le point $A'$, symétrique de $A$ par rapport à $(d)$. Où se situe-t-il ?
<br>2. Quelle est la nature de la droite $(d)$ pour le segment $[AA']$ ? Justifie en utilisant la définition de la symétrie axiale.
<br>3. On place un triangle $ABC$ d'un côté de $(d)$, avec $B$ et $C$ aussi à gauche. On construit son symétrique $A'B'C'$. Que peut-on dire des longueurs $BC$ et $B'C'$, et des angles $\\widehat{ABC}$ et $\\widehat{A'B'C'}$ ?
<br>4. Cite deux figures usuelles vues en classe et donne, pour chacune, le nombre d'axes de symétrie.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le symétrique $A'$ est de l'autre côté de $(d)$, à la même hauteur : $3$ carreaux à droite de $(d)$ et $2$ carreaux vers le haut.
<br><strong>2.</strong> Par définition, $(d)$ est la <strong>médiatrice du segment $[AA']$</strong> : elle est perpendiculaire à $[AA']$ et passe par son milieu. C'est ce qui caractérise le symétrique d'un point.
<br><strong>3.</strong> La symétrie axiale <strong>conserve les longueurs et les angles</strong> : donc $B'C' = BC$ et $\\widehat{A'B'C'} = \\widehat{ABC}$. Les deux triangles sont superposables.
<br><strong>4.</strong> Exemples : un <strong>carré</strong> possède $4$ axes de symétrie ; un <strong>rectangle</strong> (non carré) en possède $2$. (On accepte aussi : triangle équilatéral → 3 axes, cercle → une infinité.)
</details>`
          }
        ]
      }
    ]
  }
]
