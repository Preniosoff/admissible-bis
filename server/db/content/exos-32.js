export const DATA = [
  {
    id: 'phch-1e-electri',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Charge et décharge d\'un condensateur',
            contenu: `<strong>Énoncé.</strong> On dispose d'un condensateur de capacité $C = 470\\,\\mu\\text{F}$, d'un générateur de tension continue de f.é.m. $E = 6{,}0\\,\\text{V}$ et d'un conducteur ohmique de résistance $R = 2{,}2\\,\\text{k}\\Omega$. À l'instant $t = 0$, le condensateur est déchargé et on le branche en série avec $R$ sur le générateur.

1. Rappeler la relation entre la charge $q$ portée par une armature et la tension $u_C$ aux bornes du condensateur. En déduire la charge maximale $q_{max}$ atteinte en fin de charge.
2. Donner la relation entre l'intensité $i$ et la charge $q$. Quelle est la valeur de $i$ juste après la fermeture de l'interrupteur ($t = 0^+$) ? Quelle est sa valeur en régime permanent ?
3. On définit la constante de temps $\\tau = RC$. Calculer $\\tau$ et indiquer au bout de combien de temps on peut considérer le condensateur comme chargé.
4. Calculer l'énergie $E_C$ finalement emmagasinée dans le condensateur. Comparer à l'énergie totale $W$ fournie par le générateur pendant la charge ($W = E \\times q_{max}$) et commenter le rendement.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La charge vérifie $q = C\\,u_C$. En fin de charge, $u_C = E$, donc
$$q_{max} = C\\,E = 470\\times 10^{-6} \\times 6{,}0 = 2{,}8\\times 10^{-3}\\,\\text{C} = 2{,}8\\,\\text{mC}.$$

<strong>2.</strong> L'intensité est le débit de charge : $i = \\dfrac{\\mathrm{d}q}{\\mathrm{d}t}$. À $t = 0^+$, le condensateur déchargé impose $u_C = 0$, toute la tension est aux bornes de $R$ : $i(0^+) = \\dfrac{E}{R} = \\dfrac{6{,}0}{2200} = 2{,}7\\times 10^{-3}\\,\\text{A} = 2{,}7\\,\\text{mA}$. En régime permanent, $q$ ne varie plus donc $i = 0$.

<strong>3.</strong> $\\tau = RC = 2200 \\times 470\\times 10^{-6} = 1{,}0\\,\\text{s}$. On considère la charge terminée au bout de $5\\tau \\approx 5\\,\\text{s}$.

<strong>4.</strong> Énergie emmagasinée : $E_C = \\dfrac{1}{2}C\\,E^2 = \\dfrac{1}{2}\\times 470\\times 10^{-6}\\times 6{,}0^2 = 8{,}5\\times 10^{-3}\\,\\text{J}$.
Énergie fournie par le générateur : $W = E\\,q_{max} = 6{,}0 \\times 2{,}8\\times 10^{-3} = 1{,}7\\times 10^{-2}\\,\\text{J}$.
Le rendement vaut $\\eta = \\dfrac{E_C}{W} = \\dfrac{8{,}5\\times 10^{-3}}{1{,}7\\times 10^{-2}} = 0{,}50$ soit $50\\,\\%$. La moitié de l'énergie est dissipée par effet Joule dans $R$ pendant la charge, quelle que soit la valeur de $R$ : c'est un résultat remarquable.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-energie-chim',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Combustion du méthane et bilan énergétique',
            contenu: `<strong>Énoncé.</strong> On étudie la combustion complète du méthane $\\text{CH}_4$, principal constituant du gaz naturel, utilisé pour chauffer de l'eau. On donne l'énergie molaire de réaction (libérée) : $E_{mol} = 890\\,\\text{kJ}\\cdot\\text{mol}^{-1}$. Masses molaires : $M(\\text{C}) = 12$, $M(\\text{H}) = 1{,}0\\,\\text{g}\\cdot\\text{mol}^{-1}$. Capacité thermique massique de l'eau : $c = 4{,}18\\,\\text{J}\\cdot\\text{g}^{-1}\\cdot\\text{K}^{-1}$.

1. Écrire et équilibrer l'équation de la combustion complète du méthane dans le dioxygène.
2. La réaction libère-t-elle ou absorbe-t-elle de l'énergie ? S'agit-il d'une réaction exothermique ou endothermique ? Justifier.
3. On brûle $m = 16\\,\\text{g}$ de méthane. Calculer la quantité de matière correspondante, puis l'énergie totale libérée.
4. Cette énergie sert à chauffer $V = 2{,}0\\,\\text{L}$ d'eau (masse volumique $\\rho = 1{,}0\\,\\text{kg}\\cdot\\text{L}^{-1}$), initialement à $20\\,°\\text{C}$. En supposant un rendement de $100\\,\\%$, déterminer la température finale de l'eau. Commenter le réalisme du résultat.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Combustion complète : les produits sont $\\text{CO}_2$ et $\\text{H}_2\\text{O}$.
$$\\text{CH}_4 + 2\\,\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}.$$

<strong>2.</strong> La combustion libère de l'énergie vers l'extérieur : elle est <strong>exothermique</strong>. La température du milieu augmente, l'énergie de réaction est comptée comme libérée.

<strong>3.</strong> Masse molaire du méthane : $M(\\text{CH}_4) = 12 + 4\\times 1{,}0 = 16\\,\\text{g}\\cdot\\text{mol}^{-1}$.
$$n = \\frac{m}{M} = \\frac{16}{16} = 1{,}0\\,\\text{mol}.$$
Énergie libérée : $E = n\\times E_{mol} = 1{,}0 \\times 890 = 890\\,\\text{kJ} = 8{,}90\\times 10^{5}\\,\\text{J}$.

<strong>4.</strong> Masse d'eau : $m_{eau} = \\rho V = 1{,}0\\times 2{,}0 = 2{,}0\\,\\text{kg} = 2000\\,\\text{g}$.
Bilan : $E = m_{eau}\\,c\\,\\Delta\\theta$, d'où
$$\\Delta\\theta = \\frac{E}{m_{eau}\\,c} = \\frac{8{,}90\\times 10^{5}}{2000 \\times 4{,}18} = 106\\,°\\text{C}.$$
Température finale théorique : $\\theta_f = 20 + 106 = 126\\,°\\text{C}$. Ce résultat dépasse $100\\,°\\text{C}$ : en réalité l'eau se mettrait à bouillir, une partie de l'énergie servirait à la vaporisation, et le rendement réel d'un brûleur est bien inférieur à $100\\,\\%$ (pertes vers l'air et la casserole). La valeur calculée n'est donc qu'une borne supérieure idéale.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-lentilles',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Image d\'un objet par une lentille convergente',
            contenu: `<strong>Énoncé.</strong> Une lentille mince convergente a une distance focale $f' = \\overline{OF'} = 5{,}0\\,\\text{cm}$. On place un objet $AB$ perpendiculaire à l'axe optique, le point $A$ étant sur l'axe à la distance $\\overline{OA} = -15\\,\\text{cm}$ de la lentille (l'objet est réel, à gauche). L'objet mesure $\\overline{AB} = 2{,}0\\,\\text{cm}$.

1. Calculer la vergence $V$ de la lentille en dioptries.
2. À l'aide de la relation de conjugaison $\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}$, déterminer la position $\\overline{OA'}$ de l'image. L'image est-elle réelle ou virtuelle ?
3. Calculer le grandissement $\\gamma = \\dfrac{\\overline{OA'}}{\\overline{OA}}$. En déduire la taille $\\overline{A'B'}$ de l'image et préciser si elle est droite ou renversée.
4. On approche l'objet jusqu'à $\\overline{OA} = -5{,}0\\,\\text{cm}$ (objet dans le plan focal). Que devient l'image ? Citer une application optique de cette situation.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $V = \\dfrac{1}{f'} = \\dfrac{1}{5{,}0\\times 10^{-2}} = 20\\,\\delta$ (dioptries).

<strong>2.</strong> Relation de conjugaison : $\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{f'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{5{,}0} + \\dfrac{1}{-15} = \\dfrac{3-1}{15} = \\dfrac{2}{15}\\,\\text{cm}^{-1}$.
Donc $\\overline{OA'} = \\dfrac{15}{2} = 7{,}5\\,\\text{cm}$. Comme $\\overline{OA'} > 0$, l'image est à droite de la lentille : elle est <strong>réelle</strong> (on peut la recueillir sur un écran).

<strong>3.</strong> $\\gamma = \\dfrac{\\overline{OA'}}{\\overline{OA}} = \\dfrac{7{,}5}{-15} = -0{,}50$. Le grandissement est négatif : l'image est <strong>renversée</strong>. Sa taille : $\\overline{A'B'} = \\gamma \\times \\overline{AB}$, soit $|\\overline{A'B'}| = 0{,}50 \\times 2{,}0 = 1{,}0\\,\\text{cm}$. L'image est deux fois plus petite que l'objet et inversée.

<strong>4.</strong> Si $\\overline{OA} = -f' = -5{,}0\\,\\text{cm}$, alors $\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{5{,}0} - \\dfrac{1}{5{,}0} = 0$, donc $\\overline{OA'} \\to \\infty$ : l'image se forme à l'infini, les rayons émergents sont parallèles. C'est le principe du <strong>collimateur</strong> (et de l'oculaire d'une lunette / projecteur de diapositives qui envoie l'image à grande distance).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-lewis',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De Lewis à la polarité : l\'eau et le dioxyde de carbone',
            contenu: `<strong>Énoncé.</strong> On compare deux molécules : l'eau $\\text{H}_2\\text{O}$ et le dioxyde de carbone $\\text{CO}_2$. Numéros atomiques : $\\text{H}$ ($Z=1$), $\\text{C}$ ($Z=6$), $\\text{O}$ ($Z=8$). Électronégativités (échelle de Pauling) : $\\chi(\\text{H}) = 2{,}2$ ; $\\chi(\\text{C}) = 2{,}6$ ; $\\chi(\\text{O}) = 3{,}4$.

1. Donner la structure électronique de l'atome d'oxygène et déterminer le nombre d'électrons de sa couche externe. Combien de liaisons covalentes l'oxygène établit-il typiquement ? Justifier par la règle de l'octet.
2. Établir le schéma de Lewis de $\\text{H}_2\\text{O}$ puis de $\\text{CO}_2$ (doublets liants et non liants).
3. En déduire la géométrie de chaque molécule autour de l'atome central (méthode VSEPR / répulsion des doublets).
4. Les liaisons $\\text{O–H}$ et $\\text{C=O}$ sont-elles polarisées ? Les molécules $\\text{H}_2\\text{O}$ et $\\text{CO}_2$ sont-elles polaires ? Justifier en reliant géométrie et polarité.
5. En déduire laquelle de ces deux substances peut établir des liaisons hydrogène, et faire le lien avec la cohésion à l'état solide (glace vs glace carbonique).

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Oxygène $Z = 8$ : structure $1s^2\\,2s^2\\,2p^4$, soit <strong>6 électrons</strong> de valence sur la couche externe. Pour atteindre l'octet (8 électrons), il lui manque 2 électrons : il forme donc <strong>2 liaisons covalentes</strong> et porte 2 doublets non liants.

<strong>2.</strong> $\\text{H}_2\\text{O}$ : l'oxygène central est lié à 2 H par 2 liaisons simples, et porte 2 doublets non liants : $\\text{H–O–H}$ avec $2$ doublets sur O.
$\\text{CO}_2$ : le carbone central forme 2 doubles liaisons : $\\text{O=C=O}$ ; chaque oxygène porte 2 doublets non liants, le carbone n'en porte aucun.

<strong>3.</strong> Pour $\\text{H}_2\\text{O}$ : l'oxygène est entouré de 2 doublets liants + 2 doublets non liants (4 directions). La répulsion donne une géométrie <strong>coudée</strong> (angle $\\approx 104{,}5°$). Pour $\\text{CO}_2$ : le carbone n'a que 2 directions de liaison et aucun doublet non liant : la molécule est <strong>linéaire</strong> (angle $180°$).

<strong>4.</strong> Les deux liaisons sont polarisées car les atomes diffèrent en électronégativité : $\\Delta\\chi(\\text{O–H}) = 3{,}4-2{,}2 = 1{,}2$ et $\\Delta\\chi(\\text{C=O}) = 3{,}4-2{,}6 = 0{,}8$. L'oxygène, plus électronégatif, porte $\\delta^-$.
– $\\text{CO}_2$ linéaire : les deux moments dipolaires des liaisons $\\text{C=O}$ sont opposés et se compensent $\\Rightarrow$ molécule <strong>apolaire</strong>.
– $\\text{H}_2\\text{O}$ coudée : les deux moments dipolaires des liaisons $\\text{O–H}$ ne se compensent pas (ils s'additionnent partiellement) $\\Rightarrow$ molécule <strong>polaire</strong>.

<strong>5.</strong> L'eau possède des liaisons $\\text{O–H}$ (H lié à un atome très électronégatif portant des doublets non liants) : elle peut former des <strong>liaisons hydrogène</strong>. Le $\\text{CO}_2$ n'en forme pas. C'est pourquoi la glace ($\\text{H}_2\\text{O}$ solide) présente une cohésion forte due au réseau de liaisons hydrogène, alors que la « glace carbonique » ($\\text{CO}_2$ solide) n'est cohérente que par des interactions de Van der Waals faibles et se sublime dès $-78\\,°\\text{C}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-lumiere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Onde ou photon ? Le spectre de l\'atome d\'hydrogène',
            contenu: `<strong>Énoncé.</strong> On observe le spectre d'émission de l'atome d'hydrogène. Une des raies visibles a pour longueur d'onde dans le vide $\\lambda = 656\\,\\text{nm}$ (rouge). Données : célérité de la lumière $c = 3{,}00\\times 10^{8}\\,\\text{m}\\cdot\\text{s}^{-1}$ ; constante de Planck $h = 6{,}63\\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$ ; $1\\,\\text{eV} = 1{,}60\\times 10^{-19}\\,\\text{J}$.

1. Dans le modèle ondulatoire, calculer la fréquence $\\nu$ de cette radiation. À quel domaine du spectre électromagnétique appartient-elle ?
2. Le spectre de l'hydrogène est un spectre de raies et non un spectre continu. Que peut-on en déduire sur les énergies de l'atome ? Quel modèle de la lumière permet d'interpréter cette observation ?
3. Dans le modèle corpusculaire, calculer l'énergie $E$ (en joules puis en eV) d'un photon de cette radiation.
4. Cette raie correspond à la transition de l'atome d'un niveau d'énergie $E_3 = -1{,}51\\,\\text{eV}$ vers un niveau $E_2$. En appliquant la conservation de l'énergie ($E_{photon} = E_3 - E_2$), déterminer $E_2$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\nu = \\dfrac{c}{\\lambda} = \\dfrac{3{,}00\\times 10^{8}}{656\\times 10^{-9}} = 4{,}57\\times 10^{14}\\,\\text{Hz}$. Avec $\\lambda = 656\\,\\text{nm}$, la radiation est dans le domaine <strong>visible</strong> (rouge).

<strong>2.</strong> Un spectre de raies signifie que l'atome n'émet que certaines longueurs d'onde précises : ses énergies sont <strong>quantifiées</strong> (l'atome ne possède que des niveaux d'énergie discrets). Cette observation s'interprète avec le <strong>modèle corpusculaire</strong> (le photon) : chaque raie correspond à l'émission d'un photon d'énergie bien définie lors d'une transition entre deux niveaux.

<strong>3.</strong> Énergie du photon : $E = h\\nu = 6{,}63\\times 10^{-34} \\times 4{,}57\\times 10^{14} = 3{,}03\\times 10^{-19}\\,\\text{J}$.
En électronvolts : $E = \\dfrac{3{,}03\\times 10^{-19}}{1{,}60\\times 10^{-19}} = 1{,}89\\,\\text{eV}$.

<strong>4.</strong> Lors de l'émission, l'atome descend d'un niveau haut vers un niveau bas : $E_{photon} = E_3 - E_2$, donc
$$E_2 = E_3 - E_{photon} = -1{,}51 - 1{,}89 = -3{,}40\\,\\text{eV}.$$
On retrouve bien un niveau d'énergie négatif (état lié) et plus bas que $E_3$, cohérent avec une désexcitation.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-mecaniq',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Tir d\'un ballon : Newton et chute dans un champ uniforme',
            contenu: `<strong>Énoncé.</strong> Un footballeur frappe un ballon de masse $m = 0{,}45\\,\\text{kg}$ depuis le sol. Le vecteur vitesse initial $\\vec{v_0}$ fait un angle $\\alpha = 30°$ avec l'horizontale et a pour norme $v_0 = 20\\,\\text{m}\\cdot\\text{s}^{-1}$. On néglige les frottements de l'air. On prend $g = 9{,}8\\,\\text{m}\\cdot\\text{s}^{-2}$. L'origine est au point de frappe, l'axe $Ox$ horizontal et l'axe $Oy$ vertical ascendant.

1. Faire le bilan des forces s'exerçant sur le ballon pendant le vol. Représenter ce(s) vecteur(s).
2. En appliquant la deuxième loi de Newton, montrer que le vecteur accélération est $\\vec{a} = -g\\,\\vec{u_y}$. Que peut-on dire du mouvement selon $Ox$ ?
3. Établir les équations horaires $x(t)$ et $y(t)$ du mouvement.
4. Déterminer la hauteur maximale $H$ atteinte par le ballon.
5. Déterminer la portée $D$ (distance horizontale au point de chute, $y = 0$).

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Frottements négligés : le ballon n'est soumis qu'à son <strong>poids</strong> $\\vec{P} = m\\vec{g}$, vertical, dirigé vers le bas.

<strong>2.</strong> Deuxième loi de Newton : $m\\vec{a} = \\sum \\vec{F} = \\vec{P} = m\\vec{g}$, donc $\\vec{a} = \\vec{g} = -g\\,\\vec{u_y}$. La masse se simplifie.
Selon $Ox$ : $a_x = 0$ donc la composante horizontale de la vitesse est constante : le mouvement est <strong>uniforme</strong> selon $x$. Selon $Oy$ : $a_y = -g$, mouvement uniformément accéléré.

<strong>3.</strong> Composantes initiales de la vitesse : $v_{0x} = v_0\\cos\\alpha$, $v_{0y} = v_0\\sin\\alpha$. En intégrant $\\vec{a}$ avec position initiale nulle :
$$x(t) = (v_0\\cos\\alpha)\\,t, \\qquad y(t) = -\\tfrac{1}{2}g\\,t^2 + (v_0\\sin\\alpha)\\,t.$$
Numériquement : $v_{0x} = 20\\cos 30° = 17{,}3\\,\\text{m}\\cdot\\text{s}^{-1}$, $v_{0y} = 20\\sin 30° = 10{,}0\\,\\text{m}\\cdot\\text{s}^{-1}$.

<strong>4.</strong> Au sommet, $v_y = 0$ : $v_y(t) = -g\\,t + v_{0y} = 0 \\Rightarrow t_S = \\dfrac{v_{0y}}{g} = \\dfrac{10{,}0}{9{,}8} = 1{,}02\\,\\text{s}$.
$$H = y(t_S) = \\frac{v_{0y}^2}{2g} = \\frac{10{,}0^2}{2\\times 9{,}8} = 5{,}1\\,\\text{m}.$$

<strong>5.</strong> Le ballon retombe en $y = 0$ : $-\\tfrac{1}{2}g\\,t^2 + v_{0y}\\,t = 0 \\Rightarrow t(-\\tfrac{1}{2}g\\,t + v_{0y}) = 0$, soit $t = 0$ ou $t_C = \\dfrac{2v_{0y}}{g} = 2{,}04\\,\\text{s}$ (le double de $t_S$, par symétrie).
$$D = x(t_C) = v_{0x}\\,t_C = 17{,}3 \\times 2{,}04 = 35\\,\\text{m}.$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-onde',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du son qui se propage à la diffraction',
            contenu: `<strong>Énoncé.</strong> Un haut-parleur émet un son pur de fréquence $f = 680\\,\\text{Hz}$. La célérité du son dans l'air est $v = 340\\,\\text{m}\\cdot\\text{s}^{-1}$.

1. Le son est-il une onde transversale ou longitudinale ? Peut-il se propager dans le vide ? Justifier.
2. Calculer la période $T$ et la longueur d'onde $\\lambda$ de ce son.
3. Deux microphones sont placés sur la direction de propagation, distants de $d = 1{,}0\\,\\text{m}$. Calculer le retard $\\Delta t$ entre la réception du même front d'onde par les deux microphones.
4. L'onde sonore franchit une porte entrouverte de largeur $a = 0{,}50\\,\\text{m}$, du même ordre de grandeur que $\\lambda$. Quel phénomène ondulatoire observe-t-on ? Justifier qualitativement à l'aide du critère $\\dfrac{\\lambda}{a}$. Quelle conséquence concrète cela a-t-il (on entend une personne parler dans la pièce voisine sans la voir) ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le son est une onde mécanique de compression-dilatation de l'air : c'est une onde <strong>longitudinale</strong> (la perturbation est parallèle à la direction de propagation). Étant une onde mécanique, elle a besoin d'un milieu matériel : elle <strong>ne peut pas se propager dans le vide</strong>.

<strong>2.</strong> Période : $T = \\dfrac{1}{f} = \\dfrac{1}{680} = 1{,}47\\times 10^{-3}\\,\\text{s} = 1{,}47\\,\\text{ms}$.
Longueur d'onde : $\\lambda = \\dfrac{v}{f} = \\dfrac{340}{680} = 0{,}50\\,\\text{m}$.

<strong>3.</strong> Le front d'onde se propage à la vitesse $v$ ; le retard pour parcourir la distance $d$ est
$$\\Delta t = \\frac{d}{v} = \\frac{1{,}0}{340} = 2{,}9\\times 10^{-3}\\,\\text{s} = 2{,}9\\,\\text{ms}.$$

<strong>4.</strong> L'ouverture $a = 0{,}50\\,\\text{m}$ est du même ordre que $\\lambda = 0{,}50\\,\\text{m}$ : on observe le phénomène de <strong>diffraction</strong>. Le critère est que la diffraction est notable lorsque $\\lambda$ et $a$ sont comparables ($\\dfrac{\\lambda}{a} = 1$, ici exactement). L'onde sonore contourne donc l'obstacle et se répand dans toutes les directions au-delà de la porte : c'est pourquoi on entend quelqu'un parler dans la pièce voisine alors que la lumière (de longueur d'onde mille fois plus petite que $a$, donc non diffractée à cette échelle) ne contourne pas l'ouverture et ne permet pas de le voir.
</details>`
          }
        ]
      }
    ]
  }
]
