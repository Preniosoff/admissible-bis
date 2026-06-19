export const DATA = [
  {
    id: 'ma-1e-prod-scal',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le triangle aux trois mesures',
            contenu: `<strong>Énoncé.</strong> Dans un repère orthonormé, on considère les points $A(1\\,;\\,2)$, $B(5\\,;\\,4)$ et $C(2\\,;\\,6)$.

<strong>1.</strong> Calculer les coordonnées des vecteurs $\\vec{AB}$, $\\vec{AC}$ et $\\vec{BC}$, puis leurs normes $AB$, $AC$ et $BC$.

<strong>2.</strong> Calculer le produit scalaire $\\vec{AB} \\cdot \\vec{AC}$ de deux façons (par les coordonnées, puis vérifier l'ordre de grandeur). En déduire une valeur approchée de l'angle $\\widehat{BAC}$ au degré près.

<strong>3.</strong> Le triangle $ABC$ est-il rectangle ? Justifier à l'aide d'un produit scalaire.

<strong>4.</strong> Calculer l'aire du triangle $ABC$ à l'aide de la formule $\\mathcal{A} = \\frac{1}{2}\\,AB \\times AC \\times \\sin(\\widehat{BAC})$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\vec{AB}(5-1\\,;\\,4-2) = (4\\,;\\,2)$, $\\vec{AC}(2-1\\,;\\,6-2) = (1\\,;\\,4)$, $\\vec{BC}(2-5\\,;\\,6-4) = (-3\\,;\\,2)$.

Normes : $AB = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$ ; $AC = \\sqrt{1^2 + 4^2} = \\sqrt{17}$ ; $BC = \\sqrt{(-3)^2 + 2^2} = \\sqrt{13}$.

<strong>2.</strong> Par les coordonnées : $\\vec{AB} \\cdot \\vec{AC} = 4 \\times 1 + 2 \\times 4 = 4 + 8 = 12$.

Or $\\vec{AB} \\cdot \\vec{AC} = AB \\times AC \\times \\cos(\\widehat{BAC})$, donc
$$\\cos(\\widehat{BAC}) = \\frac{12}{2\\sqrt{5}\\times\\sqrt{17}} = \\frac{12}{2\\sqrt{85}} = \\frac{6}{\\sqrt{85}} \\approx 0{,}6508.$$
D'où $\\widehat{BAC} \\approx 49{,}4^\\circ$, soit environ $49^\\circ$.

<strong>3.</strong> Pour un angle droit en un sommet, le produit scalaire des deux vecteurs partant de ce sommet doit être nul.
$\\vec{AB} \\cdot \\vec{AC} = 12 \\neq 0$ (pas droit en $A$).
$\\vec{BA} \\cdot \\vec{BC} = (-4)\\times(-3) + (-2)\\times 2 = 12 - 4 = 8 \\neq 0$ (pas droit en $B$).
$\\vec{CA} \\cdot \\vec{CB} = (-1)\\times 3 + (-4)\\times(-2) = -3 + 8 = 5 \\neq 0$ (pas droit en $C$).
Aucun produit scalaire n'est nul : le triangle <strong>n'est pas rectangle</strong>.

<strong>4.</strong> $\\sin(\\widehat{BAC}) = \\sqrt{1 - \\cos^2} = \\sqrt{1 - \\frac{36}{85}} = \\sqrt{\\frac{49}{85}} = \\frac{7}{\\sqrt{85}}$.
$$\\mathcal{A} = \\frac{1}{2}\\times 2\\sqrt{5}\\times\\sqrt{17}\\times\\frac{7}{\\sqrt{85}} = \\frac{1}{2}\\times 2\\sqrt{85}\\times\\frac{7}{\\sqrt{85}} = 7.$$
L'aire vaut exactement $7$ unités d'aire.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-second-degre',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Un trinôme sous toutes ses formes',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x^2 - 8x + 6$.

<strong>1.</strong> Déterminer la forme canonique de $f$. En déduire les coordonnées du sommet de la parabole et son sens de variation.

<strong>2.</strong> Calculer le discriminant $\\Delta$ et résoudre l'équation $f(x) = 0$.

<strong>3.</strong> En déduire la forme factorisée de $f(x)$. Retrouver les racines par la méthode somme-produit.

<strong>4.</strong> Dresser le tableau de signes de $f(x)$, puis résoudre l'inéquation $f(x) \\leq 0$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On factorise par $a = 2$ : $f(x) = 2(x^2 - 4x + 3)$. On complète le carré : $x^2 - 4x = (x-2)^2 - 4$, donc $x^2 - 4x + 3 = (x-2)^2 - 1$.
$$f(x) = 2\\big[(x-2)^2 - 1\\big] = 2(x-2)^2 - 2.$$
Le sommet a pour coordonnées $S(2\\,;\\,-2)$. Comme $a = 2 > 0$, $f$ est décroissante sur $]-\\infty\\,;\\,2]$ puis croissante sur $[2\\,;\\,+\\infty[$, et $-2$ est le minimum.

<strong>2.</strong> $\\Delta = b^2 - 4ac = (-8)^2 - 4\\times 2\\times 6 = 64 - 48 = 16 > 0$. Deux racines :
$$x_1 = \\frac{8 - \\sqrt{16}}{2\\times 2} = \\frac{8-4}{4} = 1, \\qquad x_2 = \\frac{8 + 4}{4} = 3.$$

<strong>3.</strong> Forme factorisée : $f(x) = a(x - x_1)(x - x_2) = 2(x-1)(x-3)$.
Vérification somme-produit : somme des racines $= -\\frac{b}{a} = \\frac{8}{2} = 4 = 1 + 3$ ✓ ; produit $= \\frac{c}{a} = \\frac{6}{2} = 3 = 1\\times 3$ ✓.

<strong>4.</strong> Comme $a = 2 > 0$, le trinôme est positif à l'extérieur des racines et négatif entre elles.
<table><tr><td>$x$</td><td>$-\\infty$</td><td>$1$</td><td>$3$</td><td>$+\\infty$</td></tr><tr><td>$f(x)$</td><td>$+$</td><td>$0\\ \\ -$</td><td>$0\\ \\ +$</td><td></td></tr></table>
L'inéquation $f(x) \\leq 0$ a pour ensemble de solutions $[1\\,;\\,3]$ (bornes incluses car $f$ s'annule en $1$ et $3$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-suites',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Épargne et placement',
            contenu: `<strong>Énoncé.</strong> Pour financer un projet, Léa place $2000$ € sur un compte rémunéré à $3\\,\\%$ par an. Chaque début d'année suivante, elle ajoute $500$ € après le versement des intérêts. On note $u_n$ le capital (en euros) au bout de $n$ années, avec $u_0 = 2000$.

<strong>1.</strong> Justifier que pour tout entier $n$, $u_{n+1} = 1{,}03\\,u_n + 500$.

<strong>2.</strong> On considère la suite $(v_n)$ définie par $v_n = u_n + \\frac{500}{0{,}03}$. Montrer que $(v_n)$ est géométrique ; préciser sa raison et son premier terme.

<strong>3.</strong> En déduire l'expression de $u_n$ en fonction de $n$.

<strong>4.</strong> Écrire un algorithme (en langage naturel ou Python) qui détermine la première année où le capital dépasse $10000$ €.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les intérêts d'une année font passer le capital de $u_n$ à $u_n \\times (1 + 0{,}03) = 1{,}03\\,u_n$. On ajoute ensuite $500$ €, d'où $u_{n+1} = 1{,}03\\,u_n + 500$.

<strong>2.</strong> Posons $\\ell = \\frac{500}{0{,}03} \\approx 16666{,}67$, donc $v_n = u_n + \\ell$.
$$v_{n+1} = u_{n+1} + \\ell = 1{,}03\\,u_n + 500 + \\ell.$$
Or $500 = 0{,}03\\,\\ell$, donc $500 + \\ell = 0{,}03\\,\\ell + \\ell = 1{,}03\\,\\ell$. Ainsi
$$v_{n+1} = 1{,}03\\,u_n + 1{,}03\\,\\ell = 1{,}03\\,(u_n + \\ell) = 1{,}03\\,v_n.$$
$(v_n)$ est géométrique de raison $q = 1{,}03$ et de premier terme $v_0 = u_0 + \\ell = 2000 + 16666{,}67 = 18666{,}67$.

<strong>3.</strong> $v_n = v_0 \\times 1{,}03^n$, donc
$$u_n = v_n - \\ell = 18666{,}67 \\times 1{,}03^n - 16666{,}67.$$

<strong>4.</strong> Algorithme :
<pre>n = 0
u = 2000
while u &lt;= 10000:
    u = 1.03 * u + 500
    n = n + 1
print(n)</pre>
En calculant : on résout $18666{,}67\\times 1{,}03^n - 16666{,}67 > 10000$, soit $1{,}03^n > \\frac{26666{,}67}{18666{,}67} \\approx 1{,}4286$, d'où $n > \\frac{\\ln(1{,}4286)}{\\ln(1{,}03)} \\approx 12{,}1$. C'est donc au bout de $13$ années que le capital dépasse $10000$ €.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-trigo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Autour du cercle trigonométrique',
            contenu: `<strong>Énoncé.</strong> On travaille sur le cercle trigonométrique.

<strong>1.</strong> Convertir en radians les angles $30^\\circ$, $135^\\circ$ et $210^\\circ$.

<strong>2.</strong> Donner sans calculatrice les valeurs exactes de $\\cos\\!\\left(\\frac{2\\pi}{3}\\right)$ et $\\sin\\!\\left(\\frac{2\\pi}{3}\\right)$ en utilisant les symétries du cercle.

<strong>3.</strong> Simplifier l'expression $A = \\cos(\\pi - x) + \\cos(-x) + \\sin\\!\\left(\\frac{\\pi}{2} - x\\right)$ pour tout réel $x$.

<strong>4.</strong> Résoudre dans $[0\\,;\\,2\\pi[$ l'équation $\\cos(x) = -\\frac{1}{2}$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La conversion utilise $180^\\circ = \\pi$ rad, soit $1^\\circ = \\frac{\\pi}{180}$ rad.
$30^\\circ = \\frac{30\\pi}{180} = \\frac{\\pi}{6}$ ; $135^\\circ = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}$ ; $210^\\circ = \\frac{210\\pi}{180} = \\frac{7\\pi}{6}$.

<strong>2.</strong> L'angle $\\frac{2\\pi}{3}$ est dans le deuxième quadrant et $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$. Par les formules de symétrie :
$$\\cos\\!\\left(\\frac{2\\pi}{3}\\right) = \\cos\\!\\left(\\pi - \\frac{\\pi}{3}\\right) = -\\cos\\!\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2},$$
$$\\sin\\!\\left(\\frac{2\\pi}{3}\\right) = \\sin\\!\\left(\\pi - \\frac{\\pi}{3}\\right) = \\sin\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}.$$

<strong>3.</strong> On applique les angles associés : $\\cos(\\pi - x) = -\\cos(x)$, $\\cos(-x) = \\cos(x)$ (parité), $\\sin\\!\\left(\\frac{\\pi}{2} - x\\right) = \\cos(x)$.
$$A = -\\cos(x) + \\cos(x) + \\cos(x) = \\cos(x).$$

<strong>4.</strong> On cherche les angles dont le cosinus vaut $-\\frac{1}{2}$. On sait que $\\cos\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$, donc les solutions de référence sont $\\frac{2\\pi}{3}$ et $-\\frac{2\\pi}{3}$. Sur $[0\\,;\\,2\\pi[$ :
$$x = \\frac{2\\pi}{3} \\quad \\text{ou} \\quad x = 2\\pi - \\frac{2\\pi}{3} = \\frac{4\\pi}{3}.$$
L'ensemble des solutions est $\\left\\{ \\frac{2\\pi}{3}\\,;\\, \\frac{4\\pi}{3} \\right\\}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-var-alea',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le jeu de la roue',
            contenu: `<strong>Énoncé.</strong> Une roue est divisée en $8$ secteurs identiques numérotés. Le joueur mise $2$ € puis fait tourner la roue. Selon le secteur où elle s'arrête, il reçoit un gain (en euros) : $3$ secteurs donnent $0$ €, $4$ secteurs donnent $3$ €, $1$ secteur donne $10$ €. On note $X$ la variable aléatoire égale au gain algébrique du joueur (gain reçu moins la mise).

<strong>1.</strong> Déterminer la loi de probabilité de $X$ et la présenter dans un tableau.

<strong>2.</strong> Calculer l'espérance $E(X)$. Le jeu est-il favorable au joueur ?

<strong>3.</strong> Calculer la variance $V(X)$ et l'écart-type $\\sigma(X)$ (arrondi au centième).

<strong>4.</strong> On simule $1000$ parties. Quel gain (ou perte) total moyen peut-on raisonnablement anticiper pour l'organisateur ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le gain algébrique vaut « gain reçu $- 2$ ». Les valeurs prises par $X$ sont : $0 - 2 = -2$, $3 - 2 = 1$, $10 - 2 = 8$. Chaque secteur étant équiprobable de probabilité $\\frac{1}{8}$ :
<table><tr><td>$x_i$</td><td>$-2$</td><td>$1$</td><td>$8$</td></tr><tr><td>$P(X = x_i)$</td><td>$\\frac{3}{8}$</td><td>$\\frac{4}{8}$</td><td>$\\frac{1}{8}$</td></tr></table>
On vérifie : $\\frac{3}{8} + \\frac{4}{8} + \\frac{1}{8} = 1$ ✓.

<strong>2.</strong> $E(X) = (-2)\\times\\frac{3}{8} + 1\\times\\frac{4}{8} + 8\\times\\frac{1}{8} = \\frac{-6 + 4 + 8}{8} = \\frac{6}{8} = 0{,}75$.
$E(X) = 0{,}75 > 0$ : en moyenne le joueur gagne $0{,}75$ € par partie, le jeu lui est <strong>favorable</strong>.

<strong>3.</strong> $E(X^2) = (-2)^2\\times\\frac{3}{8} + 1^2\\times\\frac{4}{8} + 8^2\\times\\frac{1}{8} = \\frac{12 + 4 + 64}{8} = \\frac{80}{8} = 10$.
$$V(X) = E(X^2) - \\big(E(X)\\big)^2 = 10 - 0{,}75^2 = 10 - 0{,}5625 = 9{,}4375.$$
$$\\sigma(X) = \\sqrt{9{,}4375} \\approx 3{,}07.$$

<strong>4.</strong> Par la loi des grands nombres, la moyenne des gains du joueur sur $1000$ parties est proche de $E(X) = 0{,}75$ €. Le joueur gagne donc en moyenne $1000 \\times 0{,}75 = 750$ €, ce qui correspond pour l'organisateur à une <strong>perte attendue d'environ $750$ €</strong>.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-affine',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Deux abonnements et un point d\'équilibre',
            contenu: `<strong>Énoncé.</strong> Une salle de sport propose deux formules. Formule A : $40$ € d'inscription puis $5$ € par séance. Formule B : pas d'inscription mais $9$ € par séance. On note $x$ le nombre de séances.

<strong>1.</strong> Exprimer le coût $f(x)$ de la formule A et le coût $g(x)$ de la formule B en fonction de $x$. Préciser la nature (affine ou linéaire) de chaque fonction.

<strong>2.</strong> Tracer l'allure des deux droites représentatives dans un même repère. Quel est le coefficient directeur de chacune ? Quelle droite passe par l'origine ?

<strong>3.</strong> Résoudre algébriquement l'équation $f(x) = g(x)$ et interpréter le résultat.

<strong>4.</strong> Pour quelles valeurs de $x$ la formule A est-elle plus avantageuse ? Résoudre l'inéquation correspondante.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Formule A : $f(x) = 5x + 40$, fonction <strong>affine</strong> (coefficient directeur $5$, ordonnée à l'origine $40$).
Formule B : $g(x) = 9x$, fonction <strong>linéaire</strong> (cas particulier d'affine avec ordonnée à l'origine nulle).

<strong>2.</strong> Le coefficient directeur de $f$ est $5$, celui de $g$ est $9$. La droite de $g$ passe par l'origine $(0\\,;\\,0)$ ; celle de $f$ coupe l'axe des ordonnées en $(0\\,;\\,40)$. La droite de $g$ est plus « pentue » et finit par rattraper puis dépasser celle de $f$.

<strong>3.</strong> $f(x) = g(x) \\iff 5x + 40 = 9x \\iff 40 = 4x \\iff x = 10$.
Pour $10$ séances, les deux formules coûtent le même prix : $f(10) = 5\\times 10 + 40 = 90$ € (et $g(10) = 90$ €). C'est le point d'équilibre.

<strong>4.</strong> La formule A est plus avantageuse quand $f(x) < g(x)$ :
$$5x + 40 < 9x \\iff 40 < 4x \\iff x > 10.$$
La formule A est plus avantageuse dès que l'on fait <strong>au moins $11$ séances</strong> (strictement plus de $10$). En dessous, la formule B est préférable.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-2e-algo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le distributeur de monnaie',
            contenu: `<strong>Énoncé.</strong> On veut écrire un programme Python qui, étant donné une somme entière en euros, compte le nombre d'entiers de $1$ à $N$ qui sont multiples de $3$, et calcule leur somme.

<strong>1.</strong> Déclarer une variable <code>N</code> et l'affecter à la valeur $20$. Quelle instruction permet de demander cette valeur à l'utilisateur (avec conversion en entier) ?

<strong>2.</strong> Écrire une condition (test) qui vérifie si un entier <code>k</code> est multiple de $3$. (On rappelle que <code>k % 3</code> donne le reste de la division de <code>k</code> par $3$.)

<strong>3.</strong> Écrire une boucle <code>for</code> qui parcourt les entiers de $1$ à <code>N</code>, compte les multiples de $3$ dans une variable <code>compteur</code> et accumule leur somme dans <code>total</code>.

<strong>4.</strong> Donner les valeurs affichées par le programme pour $N = 20$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Affectation directe : <code>N = 20</code>. Pour la demander à l'utilisateur : <code>N = int(input("Entrez N : "))</code>. La fonction <code>input</code> renvoie une chaîne de caractères, d'où la conversion par <code>int(...)</code>.

<strong>2.</strong> Un entier <code>k</code> est multiple de $3$ lorsque le reste de sa division par $3$ est nul :
<pre>if k % 3 == 0:
    # k est multiple de 3</pre>
Attention au double signe <code>==</code> qui teste l'égalité (alors que <code>=</code> affecte).

<strong>3.</strong> Programme complet :
<pre>N = 20
compteur = 0
total = 0
for k in range(1, N + 1):
    if k % 3 == 0:
        compteur = compteur + 1
        total = total + k
print(compteur)
print(total)</pre>
On note l'usage de <code>range(1, N + 1)</code> pour inclure la borne <code>N</code>, et l'indentation qui délimite le corps de la boucle et celui du test.

<strong>4.</strong> Les multiples de $3$ entre $1$ et $20$ sont : $3, 6, 9, 12, 15, 18$. Il y en a $6$, et leur somme vaut $3+6+9+12+15+18 = 63$. Le programme affiche donc :
<pre>6
63</pre>
</details>`
          }
        ]
      }
    ]
  }
]
