export const DATA = [
  {
    id: 'ma-4e-littéral',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le programme de calcul mystère',
            contenu: `<strong>Énoncé.</strong> On considère le programme de calcul suivant :
<br>• Choisir un nombre $x$.
<br>• Lui ajouter $3$.
<br>• Calculer le carré du résultat.
<br>• Soustraire à ce carré le carré du nombre de départ.
<br><br>
<strong>1.</strong> Montrer qu'en partant de $x = 5$, on obtient $39$.
<br><strong>2.</strong> Exprimer le résultat du programme en fonction de $x$, puis développer et réduire cette expression. Que constate-t-on ?
<br><strong>3.</strong> Émma affirme : « Le résultat est toujours un multiple de $3$. » A-t-elle raison ? Justifier à l'aide d'une factorisation.
<br><strong>4.</strong> Factoriser l'expression $A = (x+3)^2 - 16$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> En partant de $x = 5$ : on ajoute $3$, soit $8$ ; le carré donne $8^2 = 64$ ; on soustrait $5^2 = 25$. Résultat : $64 - 25 = 39$. ✓
<br><br>
<strong>2.</strong> Le programme calcule $(x+3)^2 - x^2$. On développe l'identité remarquable :
$$(x+3)^2 = x^2 + 2 \\times x \\times 3 + 3^2 = x^2 + 6x + 9.$$
Donc $(x+3)^2 - x^2 = x^2 + 6x + 9 - x^2 = 6x + 9$.
<br>On constate que le terme $x^2$ disparaît : le résultat est l'expression du premier degré $6x + 9$. (Vérification : pour $x=5$, $6 \\times 5 + 9 = 39$. ✓)
<br><br>
<strong>3.</strong> On factorise $6x + 9$. Le plus grand facteur commun à $6$ et $9$ est $3$ :
$$6x + 9 = 3 \\times 2x + 3 \\times 3 = 3(2x + 3).$$
Comme le résultat s'écrit $3 \\times (2x+3)$ avec $2x+3$ entier dès que $x$ est entier, le résultat est bien un multiple de $3$. Émma a raison.
<br><br>
<strong>4.</strong> On reconnaît une différence de deux carrés : $A = (x+3)^2 - 16 = (x+3)^2 - 4^2$. D'après l'identité $a^2 - b^2 = (a-b)(a+b)$ avec $a = x+3$ et $b = 4$ :
$$A = \\big((x+3) - 4\\big)\\big((x+3) + 4\\big) = (x - 1)(x + 7).$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'urne de billes',
            contenu: `<strong>Énoncé.</strong> Une urne opaque contient $12$ billes indiscernables au toucher : $5$ billes rouges, $4$ billes vertes et $3$ billes bleues. On tire une bille au hasard.
<br><br>
<strong>1.</strong> Préciser le nombre d'issues de cette expérience aléatoire. L'événement « tirer une bille jaune » est-il possible ? Comment qualifie-t-on un tel événement ?
<br><strong>2.</strong> Calculer la probabilité de chacun des événements : $R$ « la bille est rouge », $V$ « la bille est verte », $B$ « la bille est bleue ». Vérifier que la somme de ces trois probabilités vaut $1$.
<br><strong>3.</strong> Calculer la probabilité de l'événement « la bille n'est pas rouge ». Quel lien y a-t-il avec $P(R)$ ?
<br><strong>4.</strong> On ajoute $n$ billes vertes dans l'urne. On veut que la probabilité de tirer une bille verte soit égale à $\\frac{1}{2}$. Déterminer $n$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Il y a $12$ billes équiprobables, donc l'expérience a $12$ issues équiprobables. Il n'y a aucune bille jaune : l'événement « tirer une bille jaune » est <em>impossible</em>, sa probabilité est $0$.
<br><br>
<strong>2.</strong> Comme les billes sont indiscernables, on est en situation d'équiprobabilité : $P(\\text{événement}) = \\dfrac{\\text{nombre de cas favorables}}{12}$.
$$P(R) = \\frac{5}{12}, \\qquad P(V) = \\frac{4}{12} = \\frac{1}{3}, \\qquad P(B) = \\frac{3}{12} = \\frac{1}{4}.$$
Somme : $\\dfrac{5}{12} + \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{12}{12} = 1$. ✓ (La somme des probabilités de toutes les issues vaut toujours $1$.)
<br><br>
<strong>3.</strong> « Ne pas être rouge » est l'événement contraire de $R$. Donc
$$P(\\overline{R}) = 1 - P(R) = 1 - \\frac{5}{12} = \\frac{7}{12}.$$
On retrouve bien $P(V) + P(B) = \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.
<br><br>
<strong>4.</strong> Après ajout de $n$ billes vertes, l'urne contient $12 + n$ billes, dont $4 + n$ vertes. On veut :
$$\\frac{4+n}{12+n} = \\frac{1}{2}.$$
Par produit en croix : $2(4+n) = 12 + n$, soit $8 + 2n = 12 + n$, donc $n = 4$. On doit ajouter $4$ billes vertes. (Vérification : $\\dfrac{8}{16} = \\dfrac{1}{2}$. ✓)
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-proport',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le trajet à vélo et la remise',
            contenu: `<strong>Énoncé.</strong> Pour acheter un vélo affiché à $260$ €, Lucas profite d'une remise de $15\\,\\%$. Une fois équipé, il teste son vélo : il parcourt $24$ km en $1$ h $30$ min à allure régulière.
<br><br>
<strong>1.</strong> Calculer le montant de la remise, puis le prix payé par Lucas.
<br><strong>2.</strong> Le mois suivant, le même vélo (prix initial $260$ €) est soldé à $182$ €. Quel pourcentage de remise cela représente-t-il ?
<br><strong>3.</strong> Calculer la vitesse moyenne de Lucas, en km/h.
<br><strong>4.</strong> En gardant cette vitesse, quelle distance parcourrait-il en $40$ minutes ? On présentera le calcul à l'aide d'un tableau de proportionnalité.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Remise de $15\\,\\%$ de $260$ € : $260 \\times \\dfrac{15}{100} = 260 \\times 0{,}15 = 39$ €.
<br>Prix payé : $260 - 39 = 221$ €. (Directement : $260 \\times 0{,}85 = 221$ €.)
<br><br>
<strong>2.</strong> La remise en euros vaut $260 - 182 = 78$ €. Le pourcentage de remise est le coefficient de proportionnalité entre la remise et le prix initial :
$$\\frac{78}{260} = 0{,}30 = 30\\,\\%.$$
La remise est de $30\\,\\%$.
<br><br>
<strong>3.</strong> $1$ h $30$ min $= 1{,}5$ h. La vitesse est une grandeur composée :
$$v = \\frac{\\text{distance}}{\\text{temps}} = \\frac{24}{1{,}5} = 16 \\text{ km/h}.$$
<br><br>
<strong>4.</strong> Comme la vitesse est constante, distance et durée sont proportionnelles. On convertit $40$ min $= \\dfrac{40}{60}$ h $= \\dfrac{2}{3}$ h.
<table><tr><td>Durée (h)</td><td>$1{,}5$</td><td>$\\frac{2}{3}$</td></tr><tr><td>Distance (km)</td><td>$24$</td><td>$d$</td></tr></table>
Coefficient (la vitesse) : $16$ km/h. Donc $d = 16 \\times \\dfrac{2}{3} = \\dfrac{32}{3} \\approx 10{,}7$ km. Lucas parcourrait environ $10{,}7$ km.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-puiss',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Distances dans le système solaire',
            contenu: `<strong>Énoncé.</strong> On donne la distance moyenne Terre–Soleil : $d = 1{,}5 \\times 10^{8}$ km, et la vitesse de la lumière : $c = 3 \\times 10^{5}$ km/s.
<br><br>
<strong>1.</strong> Calculer $A = \\dfrac{10^{7} \\times 10^{-3}}{10^{2}}$ et donner le résultat sous forme d'une puissance de $10$.
<br><strong>2.</strong> Écrire en notation scientifique le nombre $B = 42\\,000 \\times 0{,}006$.
<br><strong>3.</strong> Calculer le temps (en secondes) que met la lumière du Soleil pour atteindre la Terre. Donner le résultat en notation scientifique, puis le convertir en minutes.
<br><strong>4.</strong> Sachant qu'une année-lumière vaut environ $9{,}5 \\times 10^{12}$ km, exprimer la distance Terre–Soleil en années-lumière. Donner le résultat en notation scientifique.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On applique les règles : produit $\\to$ on additionne les exposants, quotient $\\to$ on soustrait.
$$A = \\frac{10^{7} \\times 10^{-3}}{10^{2}} = \\frac{10^{7 + (-3)}}{10^{2}} = \\frac{10^{4}}{10^{2}} = 10^{4-2} = 10^{2}.$$
<br><br>
<strong>2.</strong> $B = 42\\,000 \\times 0{,}006 = 252$. En notation scientifique (un seul chiffre non nul avant la virgule) : $B = 2{,}52 \\times 10^{2}$.
<br><br>
<strong>3.</strong> Le temps est $t = \\dfrac{d}{c} = \\dfrac{1{,}5 \\times 10^{8}}{3 \\times 10^{5}}$ s. On sépare les nombres et les puissances :
$$t = \\frac{1{,}5}{3} \\times 10^{8-5} = 0{,}5 \\times 10^{3} = 5 \\times 10^{2} \\text{ s}.$$
Soit $500$ s. En minutes : $500 \\div 60 \\approx 8{,}3$ min (environ $8$ min $20$ s).
<br><br>
<strong>4.</strong> Distance en années-lumière : $\\dfrac{1{,}5 \\times 10^{8}}{9{,}5 \\times 10^{12}} = \\dfrac{1{,}5}{9{,}5} \\times 10^{8-12} \\approx 0{,}158 \\times 10^{-4}$.
<br>En notation scientifique : $\\approx 1{,}58 \\times 10^{-5}$ année-lumière. La Terre est donc à une fraction minuscule d'année-lumière du Soleil.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-pythagore',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'échelle contre le mur',
            contenu: `<strong>Énoncé.</strong> Une échelle $[AB]$ de longueur $4{,}1$ m est appuyée contre un mur vertical. Le pied de l'échelle ($A$) est posé sur le sol horizontal à $0{,}9$ m du bas du mur ($O$). Le sommet de l'échelle touche le mur en $B$. Le triangle $OAB$ est rectangle en $O$.
<br><br>
<strong>1.</strong> Faire un schéma. Préciser quel côté est l'hypoténuse.
<strong>2.</strong> Calculer la hauteur $OB$ atteinte par l'échelle sur le mur. On donnera la valeur exacte puis arrondie au cm.
<br><strong>3.</strong> Un menuisier affirme qu'un triangle de côtés $9$ cm, $40$ cm et $41$ cm est rectangle. A-t-il raison ? Justifier.
<br><strong>4.</strong> On rapproche le pied de l'échelle du mur de sorte que $OA = 0{,}8$ m. La hauteur atteinte augmente-t-elle ? Justifier par le calcul.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le triangle $OAB$ est rectangle en $O$. L'hypoténuse est le côté opposé à l'angle droit, c'est-à-dire $[AB]$ (l'échelle), le plus long côté.
<br><br>
<strong>2.</strong> D'après le théorème de Pythagore dans le triangle $OAB$ rectangle en $O$ :
$$AB^2 = OA^2 + OB^2.$$
Donc $OB^2 = AB^2 - OA^2 = 4{,}1^2 - 0{,}9^2 = 16{,}81 - 0{,}81 = 16$.
<br>D'où $OB = \\sqrt{16} = 4$ m (valeur exacte). L'échelle atteint $4{,}00$ m sur le mur.
<br><br>
<strong>3.</strong> On utilise la réciproque de Pythagore. Le plus grand côté est $41$. On compare :
<br>• $41^2 = 1681$ ;
<br>• $9^2 + 40^2 = 81 + 1600 = 1681$.
<br>Les deux résultats sont égaux : d'après la réciproque du théorème de Pythagore, le triangle est rectangle (l'angle droit est opposé au côté de $41$ cm). Le menuisier a raison.
<br><br>
<strong>4.</strong> Avec $OA = 0{,}8$ m : $OB^2 = 4{,}1^2 - 0{,}8^2 = 16{,}81 - 0{,}64 = 16{,}17$, donc $OB = \\sqrt{16{,}17} \\approx 4{,}02$ m.
<br>La hauteur passe de $4{,}00$ m à environ $4{,}02$ m : elle augmente légèrement. C'est cohérent : en rapprochant le pied du mur, l'échelle se redresse et monte plus haut.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-stat',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Les notes du contrôle',
            contenu: `<strong>Énoncé.</strong> Voici les notes (sur $20$) obtenues par les $20$ élèves d'une classe à un contrôle de mathématiques :
<table><tr><td>Note</td><td>$8$</td><td>$10$</td><td>$12$</td><td>$14$</td><td>$16$</td><td>$18$</td></tr><tr><td>Effectif</td><td>$2$</td><td>$5$</td><td>$4$</td><td>$5$</td><td>$3$</td><td>$1$</td></tr></table>
<strong>1.</strong> Vérifier que l'effectif total est bien $20$. Quelle est l'étendue de cette série ?
<br><strong>2.</strong> Déterminer la note moyenne de la classe (arrondie au dixième).
<br><strong>3.</strong> Déterminer la médiane de la série. Interpréter sa valeur par une phrase.
<br><strong>4.</strong> Le professeur ajoute $1$ point à chaque copie. Sans tout recalculer, indiquer la nouvelle moyenne, la nouvelle médiane et la nouvelle étendue. Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Effectif total : $2 + 5 + 4 + 5 + 3 + 1 = 20$. ✓
<br>L'étendue est la différence entre la plus grande et la plus petite valeur : $18 - 8 = 10$.
<br><br>
<strong>2.</strong> La moyenne pondérée par les effectifs vaut :
$$\\overline{m} = \\frac{8 \\times 2 + 10 \\times 5 + 12 \\times 4 + 14 \\times 5 + 16 \\times 3 + 18 \\times 1}{20}.$$
Numérateur : $16 + 50 + 48 + 70 + 48 + 18 = 250$. Donc $\\overline{m} = \\dfrac{250}{20} = 12{,}5$.
<br><br>
<strong>3.</strong> Il y a $20$ valeurs (effectif pair) : la médiane est la moyenne de la $10^{\\text{e}}$ et de la $11^{\\text{e}}$ valeur, les données étant rangées dans l'ordre croissant. Effectifs cumulés : $2$ (jusqu'à $8$), $7$ (jusqu'à $10$), $11$ (jusqu'à $12$). La $10^{\\text{e}}$ et la $11^{\\text{e}}$ valeur sont donc toutes deux égales à $12$. Médiane $= 12$.
<br>Interprétation : au moins la moitié des élèves ont une note inférieure ou égale à $12$, et au moins la moitié une note supérieure ou égale à $12$.
<br><br>
<strong>4.</strong> Ajouter $1$ point à chaque note décale toutes les valeurs de $+1$.
<br>• Moyenne : $12{,}5 + 1 = 13{,}5$ (la moyenne augmente de $1$).
<br>• Médiane : $12 + 1 = 13$ (elle augmente aussi de $1$).
<br>• Étendue : inchangée, $10$ (la différence $\\max - \\min$ ne change pas quand on ajoute la même valeur partout).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-thales',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Triangle, parallèles et hauteur d\'un arbre',
            contenu: `<strong>Énoncé.</strong> Sur la figure, les points $A$, $M$, $B$ sont alignés et les points $A$, $N$, $C$ sont alignés (dans cet ordre). On donne : $AM = 3$ cm, $AB = 7{,}5$ cm, $AN = 4$ cm, $AC = 10$ cm, et $MN = 2{,}4$ cm. Les droites $(MN)$ et $(BC)$ semblent parallèles.
<br><br>
<strong>1.</strong> Démontrer que les droites $(MN)$ et $(BC)$ sont parallèles.
<br><strong>2.</strong> En déduire la longueur $BC$.
<br><strong>3.</strong> Application : pour mesurer la hauteur d'un arbre, on place un piquet vertical de $1{,}5$ m. À un instant donné, le piquet projette une ombre de $0{,}9$ m et l'arbre une ombre de $5{,}4$ m sur le sol. En modélisant la situation par deux triangles en configuration de Thalès, calculer la hauteur de l'arbre.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On utilise la réciproque du théorème de Thalès. Les points $A$, $M$, $B$ et $A$, $N$, $C$ sont alignés dans le même ordre. On compare les rapports :
$$\\frac{AM}{AB} = \\frac{3}{7{,}5} = 0{,}4, \\qquad \\frac{AN}{AC} = \\frac{4}{10} = 0{,}4.$$
Les deux rapports sont égaux et les points sont alignés dans le même ordre : d'après la réciproque du théorème de Thalès, les droites $(MN)$ et $(BC)$ sont parallèles.
<br><br>
<strong>2.</strong> Puisque $(MN) \\parallel (BC)$, le théorème de Thalès donne l'égalité des trois rapports :
$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}.$$
Donc $\\dfrac{MN}{BC} = 0{,}4$, soit $\\dfrac{2{,}4}{BC} = 0{,}4$. Par produit en croix : $BC = \\dfrac{2{,}4}{0{,}4} = 6$ cm.
<br><br>
<strong>3.</strong> Les rayons du soleil étant parallèles, le piquet et l'arbre forment avec leurs ombres deux triangles semblables (configuration de Thalès) : les hauteurs sont proportionnelles aux ombres.
$$\\frac{\\text{hauteur arbre}}{\\text{hauteur piquet}} = \\frac{\\text{ombre arbre}}{\\text{ombre piquet}} = \\frac{5{,}4}{0{,}9} = 6.$$
Donc hauteur de l'arbre $= 1{,}5 \\times 6 = 9$ m.
</details>`
          }
        ]
      }
    ]
  }
]
