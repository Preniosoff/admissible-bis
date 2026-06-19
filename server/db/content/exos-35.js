export const DATA = [
  {
    id: 'phch-4e-chimorg',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La combustion du carbone, du test au bilan',
            contenu: `<strong>Énoncé.</strong> Dans un flacon rempli de dioxygène pur, on introduit un morceau de carbone (fusain) chauffé jusqu'à incandescence. Le carbone brûle vivement avec une lueur rouge. À la fin, on verse de l'eau de chaux dans le flacon et on agite.

<strong>Données.</strong> L'eau de chaux se trouble (devient blanche laiteuse) en présence de dioxyde de carbone. Le carbone a pour symbole C, le dioxygène $O_2$, le dioxyde de carbone $CO_2$.

1. La combustion du carbone est-elle une transformation chimique ? Justifie en citant deux indices observables.
2. Identifie les réactifs et le produit de cette combustion.
3. Quel test permet de confirmer la nature du gaz produit ? Décris le résultat attendu.
4. Écris l'équation de la réaction et vérifie qu'elle est équilibrée (conservation des atomes).
5. Cette combustion est-elle complète ou incomplète ? Quel danger présenterait une combustion incomplète ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Oui, c'est une transformation chimique : de nouvelles espèces chimiques apparaissent. Deux indices : disparition du carbone solide et formation d'un gaz, accompagnés d'un dégagement de chaleur et de lumière (incandescence). On ne peut pas revenir en arrière simplement.

<strong>2.</strong> Réactifs (espèces qui disparaissent) : le carbone C et le dioxygène $O_2$. Produit (espèce qui se forme) : le dioxyde de carbone $CO_2$.

<strong>3.</strong> Test du dioxyde de carbone : on verse de l'eau de chaux. Si le gaz est du $CO_2$, l'eau de chaux se trouble et devient blanche laiteuse. C'est ce qu'on observe ici, ce qui confirme la formation de $CO_2$.

<strong>4.</strong> Équation : $$C + O_2 \\rightarrow CO_2$$
Vérification de la conservation des atomes :
- atomes de carbone : 1 à gauche (dans C), 1 à droite (dans $CO_2$) ✓
- atomes d'oxygène : 2 à gauche (dans $O_2$), 2 à droite (dans $CO_2$) ✓
L'équation est bien équilibrée : la masse se conserve, les atomes ne sont ni créés ni détruits, ils se réarrangent.

<strong>5.</strong> Comme le dioxygène est en excès (dioxygène pur) et que le seul produit est $CO_2$, la combustion est complète. Une combustion incomplète (manque de dioxygène) produirait du monoxyde de carbone CO, gaz toxique, inodore et invisible, responsable d'intoxications mortelles.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-circuits',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Guirlande en série ou en dérivation ?',
            contenu: `<strong>Énoncé.</strong> On dispose de trois lampes identiques (L1, L2, L3), d'une pile et de fils. On veut réaliser un éclairage où, si une lampe grille, les autres continuent de briller.

<strong>Données.</strong> Une lampe grillée se comporte comme un interrupteur ouvert (elle coupe le passage du courant dans la branche où elle se trouve).

1. Rappelle la différence entre un montage en série et un montage en dérivation.
2. On branche d'abord les trois lampes en série. Que se passe-t-il pour L2 et L3 si L1 grille ? Explique avec la notion de circuit ouvert.
3. On branche maintenant les trois lampes en dérivation (chacune sur sa propre branche). Si L1 grille, que se passe-t-il pour L2 et L3 ? Justifie.
4. Quel montage faut-il choisir pour la guirlande ? Pourquoi ?
5. Cite un avantage des montages en dérivation et un risque s'il y a trop d'appareils branchés.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> En série, tous les dipôles sont placés les uns à la suite des autres sur une seule boucle : le courant n'a qu'un seul chemin. En dérivation, le circuit se sépare en plusieurs branches : chaque lampe est sur sa propre branche, le courant a plusieurs chemins possibles.

<strong>2.</strong> En série, il n'y a qu'une seule boucle. Si L1 grille, elle se comporte comme un interrupteur ouvert : le circuit est ouvert, le courant ne circule plus nulle part. L2 et L3 s'éteignent toutes les deux.

<strong>3.</strong> En dérivation, chaque lampe est sur une branche indépendante. Si L1 grille, sa branche est ouverte, mais les branches de L2 et L3 restent fermées : le courant continue d'y circuler. L2 et L3 restent allumées.

<strong>4.</strong> Il faut choisir le montage en dérivation, car les lampes y sont indépendantes : la panne d'une lampe n'éteint pas les autres, ce qui correspond exactement au cahier des charges.

<strong>5.</strong> Avantage de la dérivation : chaque appareil fonctionne indépendamment et reçoit la même tension. Risque : si on branche trop d'appareils en dérivation, l'intensité totale devient trop grande, ce qui peut provoquer une surchauffe des fils, voire un court-circuit ou un incendie (d'où l'utilité d'un disjoncteur ou d'un fusible).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-elec',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Deux résistors en dérivation : lois et énergie',
            contenu: `<strong>Énoncé.</strong> Un générateur délivre une tension $U = 6{,}0$ V. On branche en dérivation deux résistors $R_1 = 20\\ \\Omega$ et $R_2 = 30\\ \\Omega$. On note $I$ l'intensité débitée par le générateur, $I_1$ et $I_2$ les intensités dans chaque résistor.

<strong>Données.</strong> Loi d'Ohm : $U = R \\times I$ (U en V, R en $\\Omega$, I en A). Puissance électrique : $P = U \\times I$ (P en W). Énergie : $E = P \\times t$ (E en J, t en s).

1. Dans un montage en dérivation, que peut-on dire de la tension aux bornes de $R_1$ et de $R_2$ ?
2. Calcule $I_1$ et $I_2$ à l'aide de la loi d'Ohm.
3. En appliquant la loi des nœuds, détermine l'intensité $I$ débitée par le générateur.
4. Calcule la puissance électrique totale consommée par le circuit.
5. Le circuit fonctionne pendant 5 minutes. Calcule l'énergie électrique consommée, en joules.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dans un montage en dérivation, les deux résistors sont branchés directement aux bornes du générateur : ils sont soumis à la même tension. Donc $U_1 = U_2 = U = 6{,}0$ V.

<strong>2.</strong> Loi d'Ohm appliquée à chaque résistor :
$$I_1 = \\frac{U}{R_1} = \\frac{6{,}0}{20} = 0{,}30\\ \\text{A}$$
$$I_2 = \\frac{U}{R_2} = \\frac{6{,}0}{30} = 0{,}20\\ \\text{A}$$

<strong>3.</strong> Loi des nœuds : l'intensité qui entre dans le nœud est égale à la somme des intensités qui en sortent :
$$I = I_1 + I_2 = 0{,}30 + 0{,}20 = 0{,}50\\ \\text{A}$$

<strong>4.</strong> Puissance totale fournie par le générateur :
$$P = U \\times I = 6{,}0 \\times 0{,}50 = 3{,}0\\ \\text{W}$$

<strong>5.</strong> Durée : $t = 5\\ \\text{min} = 5 \\times 60 = 300$ s.
$$E = P \\times t = 3{,}0 \\times 300 = 900\\ \\text{J}$$
Le circuit consomme 900 joules d'énergie électrique en 5 minutes.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-lumiere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du spectre à l\'image, en passant par la couleur',
            contenu: `<strong>Énoncé.</strong> On éclaire un prisme avec un faisceau de lumière blanche : on observe sur un écran une bande de couleurs allant du rouge au violet.

<strong>Données.</strong> La lumière blanche est composée de toutes les couleurs (radiations). Un objet apparaît de la couleur de la lumière qu'il diffuse ; il absorbe les autres. Une lentille convergente fait converger les rayons ; elle peut former l'image d'un objet sur un écran.

1. Comment s'appelle la figure colorée obtenue avec le prisme ? Que prouve-t-elle sur la lumière blanche ?
2. On éclaire un tissu rouge avec de la lumière blanche : de quelle couleur apparaît-il ? Explique avec les notions de diffusion et d'absorption.
3. On éclaire maintenant ce même tissu rouge avec une lumière verte uniquement. De quelle couleur apparaît-il alors ? Justifie.
4. On place une lentille convergente entre une bougie et un écran et on déplace l'écran jusqu'à voir une image nette de la flamme. Cette image est-elle droite ou renversée ?
5. Par analogie, quel organe de l'œil joue le rôle de la lentille convergente, et quel élément joue le rôle de l'écran ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Cette figure colorée s'appelle le spectre de la lumière blanche. Elle prouve que la lumière blanche n'est pas une lumière « simple » mais qu'elle est composée de la superposition de toutes les radiations colorées (du rouge au violet) : c'est la décomposition de la lumière blanche.

<strong>2.</strong> Éclairé en lumière blanche, le tissu rouge apparaît rouge. Il diffuse (renvoie) la lumière rouge vers nos yeux et absorbe toutes les autres couleurs. C'est la couleur diffusée qui détermine la couleur perçue.

<strong>3.</strong> Éclairé en lumière verte uniquement, le tissu n'a pas de rouge à diffuser et il absorbe le vert. Comme il ne renvoie aucune lumière vers l'œil, il apparaît noir.

<strong>4.</strong> L'image formée sur l'écran par une lentille convergente est renversée (la flamme apparaît tête en bas).

<strong>5.</strong> Dans l'œil, le cristallin joue le rôle de la lentille convergente, et la rétine (au fond de l'œil) joue le rôle de l'écran sur lequel se forme l'image. L'image y est d'ailleurs renversée, et c'est le cerveau qui la « remet à l'endroit ».
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-matiere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De la molécule d\'eau aux atomes',
            contenu: `<strong>Énoncé.</strong> L'eau est constituée de molécules d'eau, de formule $H_2O$. On chauffe de l'eau liquide jusqu'à la faire bouillir, puis on la fait passer dans un appareil (électrolyseur) qui la décompose.

<strong>Données.</strong> Un atome d'hydrogène a pour symbole H, un atome d'oxygène a pour symbole O. La décomposition de l'eau produit du dihydrogène $H_2$ et du dioxygène $O_2$. Taille d'un atome : environ $0{,}1$ nm $= 10^{-10}$ m.

1. Lorsque l'eau liquide se transforme en vapeur d'eau, les molécules d'eau changent-elles de nature ? Comment leur disposition évolue-t-elle entre l'état liquide et l'état gazeux ?
2. Combien d'atomes, et de quels types, constituent une molécule d'eau ? Que représentent les chiffres dans la formule $H_2O$ ?
3. La décomposition de l'eau en dihydrogène et dioxygène est-elle un changement d'état ou une transformation chimique ? Justifie.
4. Pourquoi peut-on dire que les atomes se conservent au cours de cette transformation ?
5. Range du plus petit au plus grand : un atome, une molécule d'eau, un grain de sable, une bactérie. (On donne : grain de sable $\\approx 0{,}5$ mm, bactérie $\\approx 1$ µm.)

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Lors de l'ébullition (changement d'état liquide → gaz), les molécules d'eau ne changent pas de nature : ce sont toujours des molécules $H_2O$. Ce qui change, c'est leur disposition : dans le liquide elles sont serrées et en désordre ; dans le gaz elles sont très éloignées, dispersées et en mouvement désordonné. La matière est conservée.

<strong>2.</strong> Une molécule d'eau $H_2O$ est constituée de 3 atomes : 2 atomes d'hydrogène (H) et 1 atome d'oxygène (O). Le chiffre 2 (indice après H) indique le nombre d'atomes d'hydrogène ; l'absence de chiffre après O signifie qu'il y a 1 seul atome d'oxygène.

<strong>3.</strong> C'est une transformation chimique : à partir de l'eau ($H_2O$), on obtient des espèces chimiques nouvelles et différentes, le dihydrogène ($H_2$) et le dioxygène ($O_2$). Les molécules d'eau sont détruites et de nouvelles molécules se forment ; ce n'est pas un simple changement d'état.

<strong>4.</strong> Les molécules d'eau sont « démontées » et leurs atomes se réorganisent : les atomes H se regroupent en molécules $H_2$, les atomes O en molécules $O_2$. Aucun atome n'est créé ni détruit, ils sont seulement réarrangés : les atomes se conservent (et la masse aussi).

<strong>5.</strong> Du plus petit au plus grand :
atome ($\\approx 10^{-10}$ m) &lt; molécule d'eau (un peu plus grosse, faite de quelques atomes) &lt; bactérie ($\\approx 10^{-6}$ m) &lt; grain de sable ($\\approx 5 \\times 10^{-4}$ m).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-mecaflui',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Pourquoi un sous-marin flotte ou coule',
            contenu: `<strong>Énoncé.</strong> Un cube métallique creux de volume $V = 1{,}0$ L $= 1{,}0\\ \\text{dm}^3$ et de masse $m = 1{,}2$ kg est plongé dans l'eau.

<strong>Données.</strong> Masse volumique de l'eau : $\\rho_{eau} = 1{,}0\\ \\text{kg/L}$. Un objet flotte si sa masse volumique est inférieure à celle de l'eau, il coule si elle est supérieure. Intensité de la pesanteur : $g = 10\\ \\text{N/kg}$. Poids : $P = m \\times g$. La pression dans un liquide augmente avec la profondeur.

1. Calcule la masse volumique du cube. Donne le résultat en kg/L.
2. En comparant cette masse volumique à celle de l'eau, le cube va-t-il flotter ou couler ? Justifie.
3. Calcule le poids du cube. Précise la direction et le sens de cette force, ainsi que son point d'application.
4. On remplit ensuite le cube d'air pour alléger l'ensemble : sa masse totale devient $m' = 0{,}8$ kg (volume inchangé). Le cube flotte-t-il maintenant ? Justifie par un nouveau calcul de masse volumique.
5. Le cube descend à 10 m de profondeur. Comment varie la pression de l'eau sur ses parois par rapport à la surface ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Masse volumique : $$\\rho = \\frac{m}{V} = \\frac{1{,}2}{1{,}0} = 1{,}2\\ \\text{kg/L}$$

<strong>2.</strong> On compare : $\\rho_{cube} = 1{,}2$ kg/L &gt; $\\rho_{eau} = 1{,}0$ kg/L. Comme la masse volumique du cube est supérieure à celle de l'eau, le cube coule.

<strong>3.</strong> Poids : $$P = m \\times g = 1{,}2 \\times 10 = 12\\ \\text{N}$$
C'est une force verticale, dirigée vers le bas, appliquée au centre de gravité du cube.

<strong>4.</strong> Nouvelle masse volumique : $$\\rho' = \\frac{m'}{V} = \\frac{0{,}8}{1{,}0} = 0{,}8\\ \\text{kg/L}$$
Cette fois $\\rho' = 0{,}8$ kg/L &lt; $\\rho_{eau} = 1{,}0$ kg/L : le cube flotte. C'est le principe du sous-marin, qui ajuste sa masse (ballasts remplis d'air ou d'eau) pour monter ou descendre.

<strong>5.</strong> La pression dans un liquide augmente avec la profondeur. À 10 m, la pression exercée par l'eau sur les parois du cube est plus grande qu'à la surface (environ 1 bar de plus). Elle s'exerce perpendiculairement aux parois, dans toutes les directions.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-4e-vitesse',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'orage : compter les secondes',
            contenu: `<strong>Énoncé.</strong> Pendant un orage, un observateur voit l'éclair, puis entend le tonnerre 6 secondes plus tard.

<strong>Données.</strong> Vitesse du son dans l'air : $v_{son} = 340\\ \\text{m/s}$. Vitesse de la lumière dans l'air : $v_{lum} = 3{,}0 \\times 10^8\\ \\text{m/s} = 300\\,000\\ \\text{km/s}$. Relation : $d = v \\times t$.

1. La lumière et le son sont émis au même instant par l'éclair. Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?
2. On considère que la lumière arrive « instantanément » à l'observateur. Justifie cette approximation en estimant le temps mis par la lumière pour parcourir 2 km.
3. Calcule la distance qui sépare l'observateur de l'orage, à partir du retard de 6 s du tonnerre.
4. Un deuxième observateur entend le tonnerre 3 s après l'éclair. Est-il plus près ou plus loin de l'orage ? Calcule sa distance.
5. Conclus en une phrase sur la « règle des 3 secondes » utilisée pour estimer la distance d'un orage en kilomètres.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La lumière et le son partent en même temps, mais la lumière se propage beaucoup plus vite que le son (300 000 km/s contre 340 m/s). La lumière de l'éclair arrive donc quasi immédiatement, tandis que le son du tonnerre, bien plus lent, arrive avec du retard. C'est pour cela qu'on voit l'éclair avant d'entendre le tonnerre.

<strong>2.</strong> Temps mis par la lumière pour parcourir $d = 2\\ \\text{km} = 2000$ m :
$$t = \\frac{d}{v_{lum}} = \\frac{2000}{3{,}0 \\times 10^8} \\approx 7 \\times 10^{-6}\\ \\text{s}$$
soit environ 7 millionièmes de seconde : c'est totalement négligeable devant les quelques secondes du son. L'approximation « lumière instantanée » est justifiée.

<strong>3.</strong> Le retard de 6 s correspond au temps mis par le son. Distance :
$$d = v_{son} \\times t = 340 \\times 6 = 2040\\ \\text{m} \\approx 2{,}0\\ \\text{km}$$

<strong>4.</strong> Le deuxième observateur entend le tonnerre plus tôt (3 s au lieu de 6 s) : le son a mis moins de temps, donc il est plus près de l'orage. Sa distance :
$$d = 340 \\times 3 = 1020\\ \\text{m} \\approx 1{,}0\\ \\text{km}$$

<strong>5.</strong> Comme le son parcourt environ 340 m en 1 s, soit à peu près 1 km en 3 s, on peut estimer la distance d'un orage en kilomètres en divisant par 3 le nombre de secondes écoulées entre l'éclair et le tonnerre.
</details>`
          }
        ]
      }
    ]
  }
]
