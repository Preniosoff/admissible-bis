export const DATA = [
  {
    id: 'phch-2e-sons',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Mesurer une distance avec un écho',
            contenu: `<strong>Énoncé.</strong> On étudie un signal sonore et on l'utilise pour mesurer une distance. La vitesse du son dans l'air est $v = 340$ m/s.

<strong>Partie A — Caractéristiques du son.</strong>
Un diapason émet un son pur dont l'oscillogramme montre un motif qui se répète toutes les $T = 2{,}27$ ms.
1. Définir la période $T$ et la fréquence $f$ d'un son. Calculer la fréquence $f$ du diapason (en Hz).
2. Ce son est-il audible par l'oreille humaine (domaine $20$ Hz – $20$ kHz) ? Justifier.
3. On augmente la fréquence jusqu'à $40$ kHz. Comment qualifie-t-on ce son ? L'oreille humaine le perçoit-elle ?

<strong>Partie B — Application : la mesure par écho.</strong>
Un bateau émet vers le fond marin une brève salve d'ultrasons. La célérité du son dans l'eau de mer est $v_{eau} = 1500$ m/s. L'écho (le son réfléchi) revient au bateau $0{,}40$ s après l'émission.
4. Expliquer pourquoi le son parcourt deux fois la profondeur $d$ avant de revenir.
5. Calculer la profondeur $d$ du fond marin.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>Partie A.</strong>
1. La période $T$ est la durée d'un motif élémentaire qui se répète ; la fréquence est le nombre de motifs par seconde, $f = \\dfrac{1}{T}$.
$$f = \\frac{1}{2{,}27 \\times 10^{-3}} \\approx 440 \\text{ Hz}.$$
2. $440$ Hz est compris entre $20$ Hz et $20\\,000$ Hz : le son est <strong>audible</strong>. (C'est le « la » de référence.)
3. $40$ kHz $> 20$ kHz : c'est un <strong>ultrason</strong>, <strong>non perçu</strong> par l'oreille humaine.

<strong>Partie B.</strong>
4. Le son part du bateau, descend jusqu'au fond (distance $d$), s'y réfléchit puis remonte (distance $d$ à nouveau) : il parcourt donc $2d$.
5. La durée mesurée correspond à l'aller-retour :
$$2d = v_{eau} \\times t \\quad\\Rightarrow\\quad d = \\frac{v_{eau} \\times t}{2} = \\frac{1500 \\times 0{,}40}{2} = 300 \\text{ m}.$$
Le fond marin est à <strong>300 m</strong> de profondeur.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-transfo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Combustion du méthane et réactif limitant',
            contenu: `<strong>Énoncé.</strong> On étudie la combustion complète du méthane $CH_4$ dans le dioxygène $O_2$, qui produit du dioxyde de carbone $CO_2$ et de l'eau $H_2O$.
Données : on fait réagir $n(CH_4) = 0{,}30$ mol de méthane avec $n(O_2) = 0{,}50$ mol de dioxygène.

1. Parmi transformation physique, chimique ou nucléaire, à quel type appartient une combustion ? Justifier en une phrase.
2. Écrire et équilibrer l'équation de la réaction.
3. Identifier le réactif limitant en comparant les quantités disponibles aux proportions de l'équation.
4. Dresser le bilan de matière : quantités de tous les réactifs et produits à l'état final.
5. Une réaction nucléaire transforme-t-elle elle aussi les noyaux ? Citer une différence essentielle avec la combustion.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. C'est une <strong>transformation chimique</strong> : les molécules de départ disparaissent et de nouvelles molécules apparaissent, mais les noyaux des atomes sont conservés.
2. Équation équilibrée :
$$CH_4 + 2\\,O_2 \\longrightarrow CO_2 + 2\\,H_2O.$$
On vérifie : 1 C, 4 H, 4 O de chaque côté.
3. D'après l'équation, il faut $2$ mol de $O_2$ pour $1$ mol de $CH_4$.
Pour consommer $0{,}30$ mol de $CH_4$, il faudrait $2 \\times 0{,}30 = 0{,}60$ mol de $O_2$. Or on ne dispose que de $0{,}50$ mol de $O_2$.
Le <strong>dioxygène $O_2$ est le réactif limitant</strong>.
4. On raisonne à partir de $O_2$ (limitant). Il disparaît entièrement : $0{,}50$ mol consommés.
$CH_4$ consommé : $\\dfrac{0{,}50}{2} = 0{,}25$ mol $\\Rightarrow$ il reste $0{,}30 - 0{,}25 = 0{,}05$ mol de $CH_4$.
$CO_2$ formé : $\\dfrac{0{,}50}{2} = 0{,}25$ mol.
$H_2O$ formée : $0{,}50$ mol.
Bilan final : $CH_4 : 0{,}05$ mol ; $O_2 : 0$ mol ; $CO_2 : 0{,}25$ mol ; $H_2O : 0{,}50$ mol.
5. Une transformation nucléaire modifie aussi la matière, mais elle <strong>change les noyaux eux-mêmes</strong> (le nombre de protons, donc la nature des éléments), ce qui est impossible dans une combustion où les atomes sont seulement réarrangés.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-3e-atome',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De l\'atome de chlore à l\'ion chlorure',
            contenu: `<strong>Énoncé.</strong> On étudie l'élément chlore, de symbole $Cl$.
Données : l'atome de chlore le plus courant possède $17$ protons, $17$ électrons et $18$ neutrons. Un second type d'atome de chlore existe avec $20$ neutrons.

1. Donner la composition (protons, neutrons, électrons) de l'atome de chlore courant. Pourquoi l'atome est-il électriquement neutre ?
2. Le second atome a $20$ neutrons : quel mot désigne la relation entre ces deux atomes ? Qu'ont-ils en commun, qu'est-ce qui diffère ?
3. L'atome de chlore peut gagner un électron pour former un ion. Donner le nom et la formule de cet ion, et indiquer sa charge.
4. La molécule de dichlore a pour formule $Cl_2$. Combien d'atomes contient-elle ? S'agit-il d'un corps pur simple ou composé ?
5. Dans le tableau de Mendeleïev, qu'est-ce qui caractérise une même colonne (famille) ? Citer un autre élément de la même famille que le chlore.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. L'atome courant comporte $17$ protons, $18$ neutrons (dans le noyau) et $17$ électrons (autour du noyau). Il est neutre car il a <strong>autant de protons (charges +) que d'électrons (charges −)</strong> : les charges se compensent exactement.
2. Ce sont des <strong>isotopes</strong> : ils ont le même nombre de protons ($17$, c'est bien le même élément chlore) mais un nombre de neutrons différent ($18$ et $20$).
3. En gagnant un électron, le chlore a alors $17$ protons et $18$ électrons : il porte une charge négative. C'est l'<strong>ion chlorure</strong>, de formule $Cl^-$ (charge $-1$).
4. La molécule $Cl_2$ contient <strong>2 atomes</strong> de chlore. Comme ces atomes sont du <strong>même</strong> élément, $Cl_2$ est un <strong>corps pur simple</strong>.
5. Une même colonne regroupe les éléments d'une même <strong>famille</strong>, qui possèdent des propriétés chimiques voisines (même nombre d'électrons sur la couche externe). Le chlore appartient à la famille des halogènes : un autre exemple est le <strong>fluor $F$</strong> (ou le brome $Br$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-3e-chimie',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Acidité, dosage et corrosion d\'un détartrant',
            contenu: `<strong>Énoncé.</strong> Un détartrant ménager contient de l'acide chlorhydrique (ions $H^+$ et $Cl^-$). On étudie ses propriétés.
Données : le bleu de bromothymol (BBT) est jaune en milieu acide, vert à pH $\\approx 7$, bleu en milieu basique.

1. On mesure le pH du détartrant : $pH = 1$. La solution est-elle acide, neutre ou basique ? Quelle couleur prend le BBT ? Justifier.
2. Pour neutraliser ce détartrant, on ajoute progressivement de la soude (solution basique). Décrire l'évolution du pH et la couleur finale du BBT lorsque le mélange devient neutre.
3. On verse le détartrant sur du calcaire (carbonate de calcium $CaCO_3$). On observe une effervescence : un gaz se dégage. Ce dégagement gazeux est-il l'indice d'une transformation physique ou chimique ? Justifier.
4. Le détartrant est conservé dans un flacon plastique et non métallique. En s'appuyant sur la notion de corrosion, expliquer pourquoi un flacon en fer serait un mauvais choix.
5. Citer un moyen de protéger une pièce en fer contre la corrosion.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. $pH = 1 < 7$ : la solution est <strong>acide</strong> (et même fortement acide). Le BBT prend donc la couleur <strong>jaune</strong>, caractéristique d'un milieu acide.
2. En ajoutant une base, le pH <strong>augmente</strong> progressivement. Quand le mélange devient neutre, $pH = 7$ et le BBT devient <strong>vert</strong>.
3. Le dégagement de gaz signale l'apparition d'une espèce nouvelle (du dioxyde de carbone) : c'est une <strong>transformation chimique</strong>, car de nouveaux corps se forment à partir de l'acide et du calcaire.
4. Le fer est attaqué par les acides : la solution acide provoquerait la <strong>corrosion</strong> du flacon (oxydation du métal), qui se percerait ou libérerait des ions fer. Le plastique, lui, n'est pas attaqué.
5. On peut protéger le fer en l'<strong>isolant de l'air et de l'eau</strong> : peinture, graisse, ou recouvrement par un métal protecteur (zinc → galvanisation).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-3e-electricite',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Circuit série : loi d\'Ohm, énergie et sécurité',
            contenu: `<strong>Énoncé.</strong> Un circuit comporte un générateur de tension $U = 12$ V, une résistance $R = 40\\ \\Omega$ et une lampe, branchés en série. L'intensité mesurée dans le circuit est $I = 0{,}20$ A.

1. Énoncer la loi d'Ohm et calculer la tension $U_R$ aux bornes de la résistance.
2. En utilisant la loi d'additivité des tensions dans un circuit série, en déduire la tension $U_L$ aux bornes de la lampe.
3. Dans un circuit série, l'intensité est la même partout. Quelle est l'intensité qui traverse la lampe ? Justifier.
4. Calculer la puissance électrique $P$ consommée par la lampe, puis l'énergie $E$ qu'elle consomme si elle fonctionne pendant $5$ minutes. (Donner $E$ en joules.)
5. Sécurité : on remplace le générateur par le secteur ($230$ V). Citer deux dispositifs qui protègent une installation domestique et expliquer en une phrase le rôle de l'un d'eux.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. Loi d'Ohm : la tension aux bornes d'une résistance est $U_R = R \\times I$.
$$U_R = 40 \\times 0{,}20 = 8{,}0 \\text{ V}.$$
2. Additivité des tensions en série : $U = U_R + U_L$, donc
$$U_L = U - U_R = 12 - 8{,}0 = 4{,}0 \\text{ V}.$$
3. Dans un circuit série, l'intensité est identique en tout point : la lampe est traversée par $I = 0{,}20$ A.
4. Puissance de la lampe : $P = U_L \\times I = 4{,}0 \\times 0{,}20 = 0{,}80$ W.
Énergie sur $t = 5$ min $= 300$ s :
$$E = P \\times t = 0{,}80 \\times 300 = 240 \\text{ J}.$$
5. Dispositifs de protection : le <strong>disjoncteur</strong> et le <strong>fusible</strong> (et la prise de terre). Le disjoncteur coupe automatiquement le courant en cas de surintensité (court-circuit, surcharge), évitant échauffement et incendie.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-3e-energie',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Rendement d\'une lampe et bilan énergétique',
            contenu: `<strong>Énoncé.</strong> On étudie les conversions d'énergie dans une lampe et dans une bouilloire.
Données : une lampe reçoit une puissance électrique de $60$ W et fournit une puissance lumineuse de $9$ W. Une bouilloire fonctionne sous $P = 2{,}0$ kW pendant $2{,}0$ minutes.

1. Identifier la forme d'énergie reçue par la lampe et les deux formes d'énergie qu'elle produit.
2. Établir la chaîne (le diagramme) de conversion d'énergie de la lampe, en indiquant l'énergie utile et l'énergie « perdue ».
3. Calculer le rendement de la lampe. Commenter (la lampe est-elle efficace ?).
4. Pour la bouilloire, calculer l'énergie électrique consommée pendant $2{,}0$ minutes. Donner le résultat en joules puis vérifier l'ordre de grandeur.
5. La bouilloire transforme cette énergie principalement en énergie thermique. Quelle propriété générale exprime le fait que l'énergie ne disparaît jamais ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. La lampe reçoit de l'<strong>énergie électrique</strong>. Elle produit de l'<strong>énergie lumineuse</strong> (utile) et de l'<strong>énergie thermique</strong> (chaleur, perdue).
2. Chaîne de conversion :
$$\\text{énergie électrique} \\longrightarrow \\underbrace{\\text{énergie lumineuse}}_{\\text{utile}} + \\underbrace{\\text{énergie thermique}}_{\\text{perdue}}.$$
3. Rendement (rapport puissance utile / puissance reçue) :
$$\\eta = \\frac{P_{utile}}{P_{recue}} = \\frac{9}{60} = 0{,}15 = 15\\,\\%.$$
Le rendement est faible : la majeure partie de l'énergie est dissipée en chaleur ; cette lampe n'est pas efficace.
4. Avec $P = 2{,}0$ kW $= 2000$ W et $t = 2{,}0$ min $= 120$ s :
$$E = P \\times t = 2000 \\times 120 = 2{,}4 \\times 10^{5} \\text{ J} = 240\\,000 \\text{ J}.$$
L'ordre de grandeur ($10^5$ J) est cohérent pour chauffer de l'eau.
5. C'est le <strong>principe de conservation de l'énergie</strong> : l'énergie ne se crée ni ne se détruit, elle se transforme d'une forme à une autre ; le total reste constant.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-3e-mecanique',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Mouvement d\'un skieur et lois de Newton',
            contenu: `<strong>Énoncé.</strong> Un skieur de masse $m = 70$ kg descend une piste. On prend $g = 10$ N/kg.

1. On choisit le sol comme référentiel. Définir ce qu'est un référentiel et expliquer pourquoi le choix du référentiel est nécessaire pour décrire un mouvement.
2. Le skieur est posé immobile au départ. Faire l'inventaire des forces qui s'exercent sur lui. Calculer la valeur de son poids $P$.
3. Le skieur est immobile sur la pente. Que peut-on dire de la somme des forces qui s'exercent sur lui ? À quelle loi de Newton cela correspond-il ?
4. Il s'élance et atteint une portion où il glisse en ligne droite à vitesse constante (mouvement rectiligne uniforme). Que vaut alors la somme des forces ? Justifier par le principe d'inertie.
5. Plus bas, le frottement de la neige diminue brusquement : le skieur accélère. Quelle loi de Newton relie cette accélération à la force ? Indiquer le sens de la force responsable.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
1. Un <strong>référentiel</strong> est un objet (ici le sol) par rapport auquel on repère les positions au cours du temps. Il est nécessaire car un même mouvement n'a pas la même description selon l'observateur : le mouvement est <strong>relatif</strong> au référentiel choisi.
2. Forces s'exerçant sur le skieur immobile : son <strong>poids $\\vec{P}$</strong> (vertical, vers le bas) et la <strong>réaction du support $\\vec{R}$</strong> (la neige). Valeur du poids :
$$P = m \\times g = 70 \\times 10 = 700 \\text{ N}.$$
3. Le skieur est immobile : il est en équilibre, donc la somme des forces est <strong>nulle</strong> : $\\vec{P} + \\vec{R} = \\vec{0}$. C'est le <strong>principe d'inertie</strong> (première loi de Newton).
4. En mouvement rectiligne uniforme, la vitesse est constante (en valeur et en direction) : d'après le principe d'inertie, les forces se compensent encore et leur somme est <strong>nulle</strong>.
5. Quand le skieur accélère, sa vitesse change : les forces ne se compensent plus. C'est la <strong>deuxième loi de Newton</strong> : une somme des forces non nulle provoque une variation de la vitesse (accélération). La force responsable (résultante) est dirigée <strong>vers le bas de la pente</strong>, dans le sens du mouvement qui s'accélère.
</details>`
          }
        ]
      }
    ]
  }
]
