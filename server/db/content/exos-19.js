export const DATA = [
  {
    id: 'ma-2e-vect',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Parallélogramme, milieu et alignement',
            contenu: `<strong>Énoncé.</strong> Dans un repère du plan, on considère les points $A(-1\\,;\\,2)$, $B(3\\,;\\,4)$ et $C(2\\,;\\,-1)$.
<br>1. Calculer les coordonnées du vecteur $\\vec{AB}$ puis du vecteur $\\vec{AC}$.
<br>2. Déterminer les coordonnées du point $D$ tel que $ABDC$ soit un parallélogramme. (On pourra traduire l'égalité $\\vec{AB} = \\vec{CD}$.)
<br>3. Soit $I$ le milieu du segment $[AD]$. Calculer les coordonnées de $I$, puis vérifier que $I$ est aussi le milieu de $[BC]$.
<br>4. Soit $E(7\\,;\\,6)$. Les vecteurs $\\vec{AB}$ et $\\vec{AE}$ sont-ils colinéaires ? Que peut-on en déduire pour les points $A$, $B$ et $E$ ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pour un vecteur $\\vec{AB}$, on calcule (abscisse de B − abscisse de A ; ordonnée de B − ordonnée de A).
<br>$\\vec{AB}\\,(\\,3-(-1)\\;;\\;4-2\\,) = \\vec{AB}\\,(4\\,;\\,2)$.
<br>$\\vec{AC}\\,(\\,2-(-1)\\;;\\;-1-2\\,) = \\vec{AC}\\,(3\\,;\\,-3)$.
<br><strong>2.</strong> $ABDC$ est un parallélogramme lorsque $\\vec{AB} = \\vec{CD}$. On note $D(x\\,;\\,y)$.
<br>$\\vec{CD}\\,(x-2\\,;\\,y-(-1))$ doit être égal à $\\vec{AB}\\,(4\\,;\\,2)$, donc :
<br>$x-2 = 4$ d'où $x = 6$, et $y+1 = 2$ d'où $y = 1$.
<br>Ainsi $D(6\\,;\\,1)$.
<br><strong>3.</strong> Milieu $I$ de $[AD]$ : $I\\left(\\dfrac{-1+6}{2}\\,;\\,\\dfrac{2+1}{2}\\right) = I\\left(\\dfrac{5}{2}\\,;\\,\\dfrac{3}{2}\\right)$.
<br>Milieu de $[BC]$ : $\\left(\\dfrac{3+2}{2}\\,;\\,\\dfrac{4+(-1)}{2}\\right) = \\left(\\dfrac{5}{2}\\,;\\,\\dfrac{3}{2}\\right)$.
<br>Les deux milieux coïncident : c'est cohérent, car dans un parallélogramme les diagonales $[AD]$ et $[BC]$ se coupent en leur milieu commun.
<br><strong>4.</strong> $\\vec{AE}\\,(\\,7-(-1)\\;;\\;6-2\\,) = \\vec{AE}\\,(8\\,;\\,4)$.
<br>Deux vecteurs $(x\\,;\\,y)$ et $(x'\\,;\\,y')$ sont colinéaires si $x\\,y' - y\\,x' = 0$.
<br>Ici : $4\\times 4 - 2\\times 8 = 16 - 16 = 0$. Les vecteurs $\\vec{AB}$ et $\\vec{AE}$ sont colinéaires.
<br>On remarque d'ailleurs que $\\vec{AE} = 2\\,\\vec{AB}$. Comme ces vecteurs ont l'origine commune $A$, les points $A$, $B$ et $E$ sont alignés.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-arith',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Bouquets et division : PGCD en situation',
            contenu: `<strong>Énoncé.</strong> Un fleuriste dispose de $84$ roses et $126$ tulipes. Il veut réaliser des bouquets identiques, en utilisant toutes les fleurs, chaque bouquet contenant le même nombre de roses et le même nombre de tulipes.
<br>1. Décomposer $84$ et $126$ en produits de facteurs premiers.
<br>2. En déduire le plus grand nombre de bouquets identiques réalisables. Combien de roses et de tulipes contiendra alors chaque bouquet ?
<br>3. La fraction $\\dfrac{84}{126}$ est-elle irréductible ? Sinon, la rendre irréductible.
<br>4. Le fleuriste reçoit une nouvelle livraison : il a maintenant $90$ roses. $90$ et $84$ sont-ils premiers entre eux ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On divise successivement par les nombres premiers.
<br>$84 = 2\\times 42 = 2\\times 2\\times 21 = 2^2\\times 3\\times 7$.
<br>$126 = 2\\times 63 = 2\\times 3\\times 21 = 2\\times 3^2\\times 7$.
<br><strong>2.</strong> Le nombre de bouquets cherché est le PGCD de $84$ et $126$. On prend les facteurs premiers communs, avec le plus petit exposant :
<br>facteurs communs : $2$ (exposant min $1$), $3$ (exposant min $1$), $7$ (exposant min $1$).
<br>$\\mathrm{PGCD}(84\\,;\\,126) = 2\\times 3\\times 7 = 42$.
<br>On peut donc faire au maximum $42$ bouquets identiques.
<br>Chaque bouquet contient $84 \\div 42 = 2$ roses et $126 \\div 42 = 3$ tulipes.
<br><strong>3.</strong> Comme $\\mathrm{PGCD}(84\\,;\\,126)=42 \\neq 1$, la fraction n'est pas irréductible. On simplifie par $42$ :
<br>$\\dfrac{84}{126} = \\dfrac{84\\div 42}{126\\div 42} = \\dfrac{2}{3}$, qui est irréductible (car $2$ et $3$ n'ont aucun diviseur commun autre que $1$).
<br><strong>4.</strong> $90 = 2\\times 3^2\\times 5$ et $84 = 2^2\\times 3\\times 7$. Ils ont des facteurs premiers communs ($2$ et $3$), donc $\\mathrm{PGCD}(90\\,;\\,84) = 2\\times 3 = 6 \\neq 1$.
<br>Ils ne sont donc <em>pas</em> premiers entre eux.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-calclit2',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du programme de calcul à l\'équation',
            contenu: `<strong>Énoncé.</strong> On considère le programme de calcul suivant :
<br>« Choisir un nombre $x$ ; lui ajouter $5$ ; multiplier le résultat par $3$ ; retrancher $x$ au résultat. »
<br>1. Montrer que le résultat du programme peut s'écrire $2x + 15$.
<br>2. Résoudre l'équation $2x + 15 = 23$. Quel nombre faut-il choisir pour obtenir $23$ ?
<br>3. Résoudre l'inéquation $2x + 15 \\geqslant 0$ et représenter l'ensemble des solutions sur une droite graduée.
<br>4. Résoudre l'équation produit $(2x + 15)(x - 4) = 0$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On traduit chaque étape : choisir $x$, ajouter $5$ donne $x+5$ ; multiplier par $3$ donne $3(x+5) = 3x + 15$ ; retrancher $x$ donne $3x + 15 - x = 2x + 15$.
<br>Le résultat est bien $2x + 15$.
<br><strong>2.</strong> $2x + 15 = 23$. On retranche $15$ aux deux membres : $2x = 8$. On divise par $2$ : $x = 4$.
<br>Il faut choisir le nombre $4$.
<br><strong>3.</strong> $2x + 15 \\geqslant 0 \\;\\Longleftrightarrow\\; 2x \\geqslant -15 \\;\\Longleftrightarrow\\; x \\geqslant -\\dfrac{15}{2}$, soit $x \\geqslant -7{,}5$.
<br>L'ensemble des solutions est $[-7{,}5\\,;\\,+\\infty[$. Sur la droite graduée, on hachure tout ce qui est à droite de $-7{,}5$, avec un crochet fermé (car $-7{,}5$ est solution) :
<br>$\\quad \\cdots\\!\\!\\!\\!|\\!\\!-\\!7{,}5\\;[\\!\\!=\\!\\!=\\!\\!=\\!\\!=\\!\\!=\\!\\!\\rightarrow$
<br><strong>4.</strong> Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul.
<br>$2x + 15 = 0 \\;\\Longrightarrow\\; x = -\\dfrac{15}{2} = -7{,}5$.
<br>$x - 4 = 0 \\;\\Longrightarrow\\; x = 4$.
<br>Les solutions de l'équation produit sont $x = -7{,}5$ et $x = 4$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-calcnum',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Puissances, racines et écriture scientifique',
            contenu: `<strong>Énoncé.</strong>
<br>1. Calculer et donner le résultat sous forme d'une fraction irréductible :
$$A = \\dfrac{3^{-2}\\times 5^{4}}{5^{2}\\times 3^{-4}}.$$
2. Donner l'écriture scientifique de $B = \\dfrac{6{,}4\\times 10^{5}\\times 2\\times 10^{-3}}{8\\times 10^{2}}$.
<br>3. Écrire $C = \\sqrt{50} - 3\\sqrt{8} + \\sqrt{2}$ sous la forme $a\\sqrt{2}$ où $a$ est un entier.
<br>4. Montrer que $D = \\sqrt{45}\\times \\sqrt{20}$ est un nombre entier et préciser sa nature (entier, décimal, rationnel).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On regroupe les puissances de même base : $A = 3^{-2-(-4)}\\times 5^{4-2} = 3^{2}\\times 5^{2} = 9\\times 25 = 225$.
<br>(Ici $A = 225 = \\dfrac{225}{1}$, déjà irréductible car entier.)
<br><strong>2.</strong> On regroupe les nombres et les puissances de $10$ :
<br>$B = \\dfrac{6{,}4\\times 2}{8}\\times \\dfrac{10^{5}\\times 10^{-3}}{10^{2}} = \\dfrac{12{,}8}{8}\\times 10^{5-3-2} = 1{,}6\\times 10^{0} = 1{,}6$.
<br>L'écriture scientifique est $B = 1{,}6\\times 10^{0}$.
<br><strong>3.</strong> On simplifie chaque racine : $\\sqrt{50} = \\sqrt{25\\times 2} = 5\\sqrt{2}$ ; $\\sqrt{8} = \\sqrt{4\\times 2} = 2\\sqrt{2}$ donc $3\\sqrt{8} = 6\\sqrt{2}$.
<br>$C = 5\\sqrt{2} - 6\\sqrt{2} + \\sqrt{2} = (5 - 6 + 1)\\sqrt{2} = 0\\sqrt{2} = 0$.
<br>Donc $C = 0$ (cas $a = 0$).
<br><strong>4.</strong> Pour des nombres positifs, $\\sqrt{a}\\times \\sqrt{b} = \\sqrt{a\\times b}$.
<br>$D = \\sqrt{45\\times 20} = \\sqrt{900} = 30$.
<br>$30$ est un nombre entier ; c'est donc aussi un décimal et un rationnel.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-fonaffine',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Deux abonnements : déterminer et comparer',
            contenu: `<strong>Énoncé.</strong> Une salle de sport propose deux tarifs.
<br>• Tarif A : $20$ € par mois, sans frais d'inscription.
<br>• Tarif B : $50$ € de frais d'inscription, puis $15$ € par mois.
<br>On note $x$ le nombre de mois et on définit les fonctions $f(x) = 20x$ (tarif A) et $g(x) = 15x + 50$ (tarif B).
<br>1. Préciser, pour chacune des fonctions $f$ et $g$, le coefficient directeur et l'ordonnée à l'origine. Laquelle est linéaire ?
<br>2. Calculer $f(6)$ et $g(6)$. Quel tarif est le plus avantageux pour $6$ mois ?
<br>3. Résoudre l'équation $f(x) = g(x)$ et interpréter le résultat.
<br>4. Un client a payé $170$ € avec le tarif B. Combien de mois a-t-il été inscrit ? (On résoudra $g(x) = 170$.)
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f(x) = 20x$ est de la forme $ax$ : coefficient directeur $a = 20$, ordonnée à l'origine $0$. C'est une fonction <em>linéaire</em>.
<br>$g(x) = 15x + 50$ est de la forme $ax + b$ : coefficient directeur $a = 15$, ordonnée à l'origine $b = 50$. C'est une fonction affine (non linéaire car $b \\neq 0$).
<br><strong>2.</strong> $f(6) = 20\\times 6 = 120$ € ; $g(6) = 15\\times 6 + 50 = 90 + 50 = 140$ €.
<br>Pour $6$ mois, le tarif A ($120$ €) est plus avantageux que le tarif B ($140$ €).
<br><strong>3.</strong> $f(x) = g(x) \\;\\Longleftrightarrow\\; 20x = 15x + 50 \\;\\Longleftrightarrow\\; 5x = 50 \\;\\Longleftrightarrow\\; x = 10$.
<br>Au bout de $10$ mois, les deux tarifs coûtent la même chose : $f(10) = g(10) = 200$ €.
<br>Avant $10$ mois le tarif A est plus avantageux ; après $10$ mois c'est le tarif B.
<br><strong>4.</strong> $g(x) = 170 \\;\\Longleftrightarrow\\; 15x + 50 = 170 \\;\\Longleftrightarrow\\; 15x = 120 \\;\\Longleftrightarrow\\; x = 8$.
<br>Le client a été inscrit pendant $8$ mois.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-fonlin',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Pourcentages, proportionnalité et fonction linéaire',
            contenu: `<strong>Énoncé.</strong> Dans un magasin, tous les articles d'un rayon subissent une remise de $20\\%$. On note $x$ le prix initial d'un article (en euros) et $p(x)$ son prix après remise.
<br>1. Justifier que $p$ est une fonction linéaire et donner son coefficient.
<br>2. Calculer le prix après remise d'un article coûtant initialement $45$ €.
<br>3. Un article est affiché $52$ € après remise. Quel était son prix initial ? (On résoudra $p(x) = 52$.)
<br>4. On a relevé : un article à $30$ € revient à $24$ € après remise. Vérifier que le tableau « prix initial → prix remisé » est un tableau de proportionnalité et donner son coefficient de proportionnalité.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Réduire de $20\\%$, c'est garder $100\\% - 20\\% = 80\\%$ du prix, soit multiplier par $0{,}80$.
<br>Donc $p(x) = 0{,}8\\,x$. C'est de la forme $ax$ : $p$ est <em>linéaire</em>, de coefficient $a = 0{,}8$.
<br><strong>2.</strong> $p(45) = 0{,}8\\times 45 = 36$ €.
<br><strong>3.</strong> $p(x) = 52 \\;\\Longleftrightarrow\\; 0{,}8\\,x = 52 \\;\\Longleftrightarrow\\; x = \\dfrac{52}{0{,}8} = 65$.
<br>Le prix initial était $65$ €.
<br><strong>4.</strong> Pour passer du prix initial au prix remisé, on multiplie toujours par le même nombre :
<br>$\\dfrac{24}{30} = 0{,}8$ et $\\dfrac{36}{45} = 0{,}8$. Le quotient est constant, donc c'est bien un tableau de proportionnalité.
<br>Le coefficient de proportionnalité est $0{,}8$ ; il correspond exactement au coefficient de la fonction linéaire $p$. C'est cohérent : appliquer un pourcentage est une situation de proportionnalité.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-3e-geom3d',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Boule, cylindre et agrandissement',
            contenu: `<strong>Énoncé.</strong> On rappelle : volume d'une boule de rayon $R$ : $V = \\dfrac{4}{3}\\pi R^{3}$ ; volume d'un cylindre de rayon $r$ et de hauteur $h$ : $V = \\pi r^{2} h$. On prendra $\\pi \\approx 3{,}14$ et on arrondira au cm³.
<br>1. Une boule a pour rayon $R = 6$ cm. Calculer son volume exact (en fonction de $\\pi$), puis une valeur approchée.
<br>2. On verse l'eau de cette boule pleine dans un cylindre de rayon $r = 6$ cm. Quelle hauteur $h$ d'eau atteint-on ? (Volume conservé.)
<br>3. On coupe la boule par un plan situé à $6$ cm du centre. Quelle est la nature de la section obtenue à cette distance précise ?
<br>4. On réalise un agrandissement de la boule de rapport $k = 2$. Par combien son volume est-il multiplié ? Donner le volume de la boule agrandie.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $V_{\\text{boule}} = \\dfrac{4}{3}\\pi R^{3} = \\dfrac{4}{3}\\pi\\times 6^{3} = \\dfrac{4}{3}\\pi\\times 216 = 288\\pi$ cm³.
<br>Valeur approchée : $288\\times 3{,}14 \\approx 904{,}32$, soit environ $904$ cm³.
<br><strong>2.</strong> Le volume se conserve : le cylindre doit contenir $288\\pi$ cm³.
<br>$\\pi r^{2} h = 288\\pi \\;\\Longrightarrow\\; \\pi\\times 6^{2}\\times h = 288\\pi \\;\\Longrightarrow\\; 36\\,h = 288 \\;\\Longrightarrow\\; h = \\dfrac{288}{36} = 8$ cm.
<br>L'eau atteint une hauteur de $8$ cm.
<br><strong>3.</strong> La section d'une boule par un plan est un disque, sauf lorsque le plan est tangent. Ici la distance au centre ($6$ cm) est exactement égale au rayon ($R = 6$ cm) : le plan est tangent à la sphère. La « section » se réduit alors à un seul point (disque de rayon nul).
<br><strong>4.</strong> Dans un agrandissement de rapport $k$, les volumes sont multipliés par $k^{3}$.
<br>Ici $k = 2$, donc le volume est multiplié par $2^{3} = 8$.
<br>Volume agrandi : $288\\pi\\times 8 = 2304\\pi \\approx 2304\\times 3{,}14 \\approx 7234{,}56$, soit environ $7235$ cm³.
</details>`
          }
        ]
      }
    ]
  }
]
