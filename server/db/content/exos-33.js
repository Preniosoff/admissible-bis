export const DATA = [
  {
    id: 'phch-1e-oxydo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Dosage du fer(II) par les ions permanganate',
            contenu: `<strong>Énoncé.</strong> On souhaite déterminer la concentration en ions fer(II) $\\text{Fe}^{2+}$ d'une solution $S$ provenant d'un comprimé de fer dissous. On dispose des couples oxydant/réducteur suivants : $\\text{MnO}_4^-/\\text{Mn}^{2+}$ et $\\text{Fe}^{3+}/\\text{Fe}^{2+}$.

On prélève un volume $V_1 = 20{,}0$ mL de la solution $S$, que l'on acidifie. On y verse une solution de permanganate de potassium de concentration $C_2 = 2{,}0 \\times 10^{-2}$ mol·L⁻¹. L'équivalence est repérée par la persistance de la teinte violette ; elle est atteinte pour un volume versé $V_{2,\\text{éq}} = 16{,}0$ mL.

1. Pour chaque couple, écrire la demi-équation électronique en milieu acide.
2. En déduire l'équation de la réaction de titrage. Quel est l'oxydant ? le réducteur ?
3. Expliquer comment l'équivalence est repérée visuellement.
4. Établir la relation à l'équivalence puis calculer la concentration $C_1$ en ions $\\text{Fe}^{2+}$ de la solution $S$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Demi-équations.</strong>
Couple $\\text{MnO}_4^-/\\text{Mn}^{2+}$ (le manganèse passe de +VII à +II) :
$$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- = \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$$
Couple $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ :
$$\\text{Fe}^{2+} = \\text{Fe}^{3+} + e^-$$

<strong>2. Équation de la réaction.</strong> On multiplie la seconde demi-équation par 5 pour équilibrer les électrons échangés, puis on additionne :
$$\\text{MnO}_4^- + 5\\,\\text{Fe}^{2+} + 8\\,\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\,\\text{Fe}^{3+} + 4\\,\\text{H}_2\\text{O}$$
L'oxydant est l'ion permanganate $\\text{MnO}_4^-$ (il capte les électrons), le réducteur est l'ion fer(II) $\\text{Fe}^{2+}$ (il les cède).

<strong>3. Repérage de l'équivalence.</strong> Tant que des ions $\\text{Fe}^{2+}$ restent en excès, le permanganate violet ajouté est aussitôt consommé et la solution reste incolore (ou jaune pâle à cause des $\\text{Fe}^{3+}$). À l'équivalence, tous les $\\text{Fe}^{2+}$ ont réagi : la première goutte de permanganate en excès n'est plus réduite et la teinte violette persiste. Le permanganate sert donc d'indicateur de fin de réaction.

<strong>4. Relation à l'équivalence et calcul.</strong> À l'équivalence, les réactifs sont introduits dans les proportions stœchiométriques :
$$\\frac{n(\\text{Fe}^{2+})}{5} = \\frac{n(\\text{MnO}_4^-)}{1} \\quad\\Longrightarrow\\quad C_1 V_1 = 5\\,C_2 V_{2,\\text{éq}}$$
$$C_1 = \\frac{5\\,C_2 V_{2,\\text{éq}}}{V_1} = \\frac{5 \\times 2{,}0\\times 10^{-2} \\times 16{,}0}{20{,}0} = 8{,}0\\times 10^{-2}\\ \\text{mol·L}^{-1}.$$
La solution $S$ contient $C_1 = 8{,}0\\times 10^{-2}$ mol·L⁻¹ d'ions fer(II).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-suivi',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Tableau d\'avancement et titrage acido-basique',
            contenu: `<strong>Énoncé.</strong> On dose un volume $V_A = 25{,}0$ mL d'une solution d'acide chlorhydrique $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ de concentration inconnue $C_A$ par une solution de soude $(\\text{Na}^+ + \\text{HO}^-)$ de concentration $C_B = 0{,}10$ mol·L⁻¹. L'équivalence, repérée à l'aide d'un indicateur coloré, est obtenue pour $V_{B,\\text{éq}} = 18{,}0$ mL. La réaction support du titrage est :
$$\\text{H}_3\\text{O}^+ + \\text{HO}^- \\rightarrow 2\\,\\text{H}_2\\text{O}$$

1. Calculer la quantité de matière d'ions hydroxyde versée à l'équivalence.
2. Dresser le tableau d'avancement de la réaction à l'équivalence et définir l'équivalence à partir de ce tableau.
3. En déduire la concentration $C_A$ de la solution d'acide.
4. Quelle masse de chlorure d'hydrogène $\\text{HCl}$ était dissoute dans 1,0 L de solution ? Donnée : $M(\\text{HCl}) = 36{,}5$ g·mol⁻¹.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Quantité d'ions hydroxyde à l'équivalence.</strong>
$$n(\\text{HO}^-) = C_B \\times V_{B,\\text{éq}} = 0{,}10 \\times 18{,}0\\times 10^{-3} = 1{,}8\\times 10^{-3}\\ \\text{mol}.$$

<strong>2. Tableau d'avancement.</strong> Notons $n_0 = C_A V_A$ la quantité initiale d'ions oxonium et $x$ l'avancement.
<table><tr><td>État</td><td>$\\text{H}_3\\text{O}^+$</td><td>$\\text{HO}^-$</td></tr>
<tr><td>initial</td><td>$n_0$</td><td>$1{,}8\\times10^{-3}$</td></tr>
<tr><td>en cours</td><td>$n_0 - x$</td><td>$1{,}8\\times10^{-3} - x$</td></tr></table>
À l'équivalence, les réactifs ont été introduits en proportions stœchiométriques et sont tous deux entièrement consommés : $n_0 - x_{\\max} = 0$ et $1{,}8\\times10^{-3} - x_{\\max} = 0$. On en tire :
$$n(\\text{H}_3\\text{O}^+)_{\\text{initial}} = n(\\text{HO}^-)_{\\text{versé}} \\quad\\Longrightarrow\\quad C_A V_A = C_B V_{B,\\text{éq}}.$$

<strong>3. Concentration de l'acide.</strong>
$$C_A = \\frac{C_B V_{B,\\text{éq}}}{V_A} = \\frac{0{,}10 \\times 18{,}0}{25{,}0} = 7{,}2\\times 10^{-2}\\ \\text{mol·L}^{-1}.$$

<strong>4. Masse de HCl dans 1,0 L.</strong> La quantité de $\\text{HCl}$ par litre vaut $C_A = 7{,}2\\times10^{-2}$ mol, donc :
$$m = C_A \\times 1{,}0 \\times M(\\text{HCl}) = 7{,}2\\times10^{-2} \\times 36{,}5 = 2{,}6\\ \\text{g}.$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-constit',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De l\'atome à l\'ion : le cas du magnésium',
            contenu: `<strong>Énoncé.</strong> Le magnésium possède le numéro atomique $Z = 12$. On considère l'isotope $^{24}_{12}\\text{Mg}$.

1. Donner la composition (nombre de protons, de neutrons, d'électrons) de l'atome $^{24}_{12}\\text{Mg}$. Vérifier qu'il est électriquement neutre.
2. Établir la configuration électronique de l'atome de magnésium dans son état fondamental. Combien d'électrons compte sa couche externe ?
3. Le magnésium forme un ion stable. Donner la formule de cet ion et justifier sa charge à l'aide de la règle du duet et de l'octet.
4. On dispose d'un mélange d'eau salée contenant du chlorure de magnésium solide non dissous. Proposer une technique permettant de séparer le solide non dissous du liquide, puis une technique permettant de récupérer le sel dissous dans l'eau.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Composition de l'atome.</strong> Le numéro atomique donne le nombre de protons : 12 protons. Le nombre de masse $A = 24$ donne le total nucléons, donc le nombre de neutrons est $A - Z = 24 - 12 = 12$ neutrons. L'atome étant neutre, il possède autant d'électrons que de protons : 12 électrons. La charge totale est $12\\,(+e) + 12\\,(-e) = 0$ : l'atome est bien neutre.

<strong>2. Configuration électronique.</strong> On répartit les 12 électrons par énergie croissante :
$$1s^2\\,2s^2\\,2p^6\\,3s^2.$$
La couche externe est la couche $n = 3$, qui contient les électrons $3s^2$, soit <strong>2 électrons</strong> sur la couche externe.

<strong>3. Ion stable.</strong> Pour respecter la règle de l'octet, l'atome cherche à obtenir la structure du gaz noble le plus proche (le néon, $1s^2 2s^2 2p^6$). Il est plus économique de perdre les 2 électrons de la couche externe que d'en gagner 6. L'atome perd donc 2 électrons et forme l'ion :
$$\\text{Mg}^{2+}.$$
Sa configuration devient $1s^2 2s^2 2p^6$ : un octet sur la couche externe, structure stable.

<strong>4. Techniques de séparation.</strong> Pour séparer le solide non dissous du liquide, on réalise une <em>filtration</em> : le solide est retenu sur le filtre, le liquide (filtrat) passe au travers. Pour récupérer ensuite le sel dissous dans le filtrat, on procède à une <em>évaporation</em> : en chauffant, l'eau s'évapore et le chlorure de magnésium reste sous forme de cristaux solides.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-energie',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Chauffe-eau électrique : énergie, puissance et rendement',
            contenu: `<strong>Énoncé.</strong> Un chauffe-eau électrique contient $m = 50$ kg d'eau initialement à $\\theta_1 = 15\\,^\\circ\\text{C}$. Sa résistance, de puissance électrique $P = 2{,}0$ kW, fonctionne pendant une durée $\\Delta t = 1$ h $40$ min. À la fin, l'eau atteint $\\theta_2 = 55\\,^\\circ\\text{C}$.
Données : capacité thermique massique de l'eau $c = 4{,}18\\times 10^3$ J·kg⁻¹·°C⁻¹.

1. Décrire la chaîne énergétique du chauffe-eau, en précisant la forme d'énergie reçue et la forme d'énergie utile.
2. Calculer l'énergie électrique $E_e$ consommée pendant la durée $\\Delta t$.
3. Calculer l'énergie thermique $Q$ réellement reçue par l'eau, à l'aide de la relation $Q = m\\,c\\,(\\theta_2 - \\theta_1)$.
4. En déduire le rendement du chauffe-eau. Commenter le devenir de l'énergie « perdue ».

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Chaîne énergétique.</strong> Le chauffe-eau reçoit de l'énergie électrique depuis le réseau, la convertit dans la résistance en énergie thermique (par effet Joule), qui est transférée à l'eau :
$$\\text{réseau} \\xrightarrow{\\;E_e\\text{ (électrique)}\\;} \\text{résistance} \\xrightarrow{\\;Q\\text{ (thermique)}\\;} \\text{eau}.$$
L'énergie utile est l'énergie thermique transmise à l'eau ; une partie est perdue vers l'extérieur (pertes thermiques).

<strong>2. Énergie électrique consommée.</strong> On convertit la durée : $\\Delta t = 1$ h $40$ min $= 100$ min $= 6000$ s, et $P = 2{,}0\\times10^3$ W.
$$E_e = P \\times \\Delta t = 2{,}0\\times10^3 \\times 6000 = 1{,}2\\times10^7\\ \\text{J} = 12\\ \\text{MJ}.$$

<strong>3. Énergie thermique reçue par l'eau.</strong>
$$Q = m\\,c\\,(\\theta_2 - \\theta_1) = 50 \\times 4{,}18\\times10^3 \\times (55 - 15) = 8{,}36\\times10^6\\ \\text{J} \\approx 8{,}4\\ \\text{MJ}.$$

<strong>4. Rendement.</strong>
$$\\eta = \\frac{E_{\\text{utile}}}{E_{\\text{reçue}}} = \\frac{Q}{E_e} = \\frac{8{,}36\\times10^6}{1{,}2\\times10^7} \\approx 0{,}70 = 70\\,\\%.$$
Le rendement vaut environ 70 %. Les 30 % manquants ($\\approx 3{,}6$ MJ) ne disparaissent pas : conformément au principe de conservation de l'énergie, ils sont dissipés sous forme de chaleur vers l'air ambiant et les parois (pertes thermiques par la cuve mal isolée).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-lumiere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Réfraction et formation d\'image par une lentille',
            contenu: `<strong>Énoncé.</strong> <em>Partie A — Réfraction.</em> Un rayon lumineux se propage dans l'air (indice $n_1 = 1{,}00$) et arrive à la surface d'un bloc de verre (indice $n_2 = 1{,}50$) avec un angle d'incidence $i_1 = 30^\\circ$, mesuré par rapport à la normale.
<em>Partie B — Lentille.</em> On place ensuite un objet $AB$ de hauteur $1{,}0$ cm devant une lentille mince convergente de distance focale $f' = 5{,}0$ cm, à la distance $\\overline{OA} = -15$ cm (objet réel).

1. Énoncer la deuxième loi de Snell-Descartes pour la réfraction, puis calculer l'angle de réfraction $i_2$.
2. Le rayon se rapproche-t-il ou s'éloigne-t-il de la normale en passant dans le verre ? Justifier.
3. Pour la lentille, citer les trois rayons particuliers qui permettent de construire l'image $A'B'$.
4. À l'aide de la relation de conjugaison $\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}$, calculer la position $\\overline{OA'}$ de l'image. L'image est-elle réelle ou virtuelle ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Loi de Snell-Descartes et angle de réfraction.</strong> La deuxième loi s'écrit : $n_1 \\sin i_1 = n_2 \\sin i_2$. On isole $\\sin i_2$ :
$$\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2} = \\frac{1{,}00 \\times \\sin 30^\\circ}{1{,}50} = \\frac{0{,}50}{1{,}50} = 0{,}333,$$
d'où $i_2 = \\arcsin(0{,}333) \\approx 19^\\circ$.

<strong>2. Sens de déviation.</strong> Comme $i_2 < i_1$ ($19^\\circ < 30^\\circ$), le rayon se rapproche de la normale. C'est cohérent : la lumière passe d'un milieu moins réfringent (air) à un milieu plus réfringent (verre, $n_2 > n_1$), elle se rapproche donc de la normale.

<strong>3. Rayons particuliers.</strong> Pour construire $A'B'$ :
— le rayon issu de $B$ passant par le centre optique $O$ n'est pas dévié ;
— le rayon issu de $B$ parallèle à l'axe optique émerge en passant par le foyer image $F'$ ;
— le rayon issu de $B$ passant par le foyer objet $F$ émerge parallèle à l'axe optique.
L'intersection des rayons émergents donne $B'$.

<strong>4. Position de l'image.</strong> Avec $\\overline{OA} = -15$ cm et $f' = 5{,}0$ cm :
$$\\frac{1}{\\overline{OA'}} = \\frac{1}{f'} + \\frac{1}{\\overline{OA}} = \\frac{1}{5{,}0} + \\frac{1}{-15} = \\frac{3 - 1}{15} = \\frac{2}{15}\\ \\text{cm}^{-1},$$
$$\\overline{OA'} = \\frac{15}{2} = 7{,}5\\ \\text{cm}.$$
Comme $\\overline{OA'} > 0$, l'image se forme après la lentille (du côté de la lumière émergente) : elle est <strong>réelle</strong> (on pourrait la recueillir sur un écran).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-mouvt',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le palet sur la glace : mouvement et principe d\'inertie',
            contenu: `<strong>Énoncé.</strong> Un palet de hockey de masse $m = 170$ g glisse sur une patinoire horizontale. On le filme à intervalles de temps réguliers $\\tau = 40$ ms. Sur les premiers points, on mesure que les positions successives sont espacées de distances <em>égales</em> $d = 12$ cm, le long d'une droite. Donnée : $g = 9{,}8$ N·kg⁻¹.

1. Caractériser le mouvement du palet sur cette phase (trajectoire et évolution de la vitesse). Justifier.
2. Calculer la valeur de la vitesse du palet sur cette phase.
3. Faire le bilan des actions mécaniques s'exerçant sur le palet (frottements négligés) et les représenter par des forces. Que peut-on dire de la somme de ces forces ? Énoncer le principe utilisé.
4. Plus loin, les frottements de la glace ne sont plus négligeables et les distances entre points successifs diminuent. Que devient le mouvement ? Le principe d'inertie est-il encore vérifié ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Nature du mouvement.</strong> Les positions successives sont alignées : la trajectoire est une droite, le mouvement est <em>rectiligne</em>. Les distances parcourues pendant des intervalles de temps égaux sont égales : la vitesse est constante, le mouvement est <em>uniforme</em>. Le palet est donc en mouvement <strong>rectiligne uniforme</strong>.

<strong>2. Valeur de la vitesse.</strong>
$$v = \\frac{d}{\\tau} = \\frac{12\\times10^{-2}}{40\\times10^{-3}} = 3{,}0\\ \\text{m·s}^{-1}.$$

<strong>3. Bilan des forces et principe d'inertie.</strong> En négligeant les frottements, deux actions s'exercent sur le palet :
— le poids $\\vec{P}$, vertical, dirigé vers le bas, de valeur $P = m\\,g = 0{,}170 \\times 9{,}8 \\approx 1{,}7$ N ;
— la réaction normale du sol $\\vec{R}$, verticale, dirigée vers le haut.
Le palet étant en mouvement rectiligne uniforme, d'après le <strong>principe d'inertie</strong> (première loi de Newton), les forces se compensent : $\\vec{P} + \\vec{R} = \\vec{0}$. On en déduit $R = P \\approx 1{,}7$ N.

<strong>4. Avec frottements.</strong> Les distances entre points successifs diminuent : la vitesse diminue, le mouvement devient rectiligne <em>ralenti (décéléré)</em>. Le principe d'inertie reste valable : justement, comme le mouvement n'est plus uniforme, c'est que les forces ne se compensent plus. La force de frottement $\\vec{f}$, opposée au mouvement, n'est plus négligeable et la somme des forces n'est plus nulle, ce qui explique le ralentissement.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-2e-quantite',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Préparation d\'une solution et dosage par étalonnage',
            contenu: `<strong>Énoncé.</strong> On prépare une solution aqueuse de sulfate de cuivre $\\text{CuSO}_4$ (de couleur bleue) par dissolution.
Données : $M(\\text{CuSO}_4) = 159{,}5$ g·mol⁻¹ ; volume molaire des gaz $V_m = 24{,}0$ L·mol⁻¹ dans les conditions de l'expérience.

1. On dissout une masse $m = 3{,}99$ g de sulfate de cuivre solide dans de l'eau pour obtenir $V = 250$ mL de solution mère $S_0$. Calculer la quantité de matière dissoute, puis la concentration molaire $C_0$ de $S_0$.
2. En déduire la concentration en masse $C_{m,0}$ de la solution mère.
3. On réalise une échelle de teintes (solutions de concentrations connues) et on mesure l'absorbance de chaque solution. La courbe d'étalonnage $A = k\\,C$ est une droite passant par l'origine de coefficient $k = 25{,}0$ L·mol⁻¹. Une solution inconnue $S_x$ a une absorbance $A_x = 0{,}60$. Déterminer sa concentration molaire $C_x$.
4. Lors de la réaction, il se dégage un gaz dont on recueille $V_{gaz} = 48$ mL. Calculer la quantité de matière de gaz correspondante.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Quantité de matière et concentration de la solution mère.</strong>
$$n = \\frac{m}{M(\\text{CuSO}_4)} = \\frac{3{,}99}{159{,}5} = 2{,}50\\times10^{-2}\\ \\text{mol}.$$
Avec $V = 250$ mL $= 0{,}250$ L :
$$C_0 = \\frac{n}{V} = \\frac{2{,}50\\times10^{-2}}{0{,}250} = 0{,}100\\ \\text{mol·L}^{-1}.$$

<strong>2. Concentration en masse.</strong>
$$C_{m,0} = C_0 \\times M(\\text{CuSO}_4) = 0{,}100 \\times 159{,}5 = 16{,}0\\ \\text{g·L}^{-1}.$$
(On peut aussi écrire directement $C_{m,0} = m/V = 3{,}99/0{,}250 = 16{,}0$ g·L⁻¹.)

<strong>3. Dosage par étalonnage.</strong> La loi d'étalonnage $A = k\\,C$ donne, pour la solution inconnue :
$$C_x = \\frac{A_x}{k} = \\frac{0{,}60}{25{,}0} = 2{,}4\\times10^{-2}\\ \\text{mol·L}^{-1}.$$
La solution $S_x$ est donc moins concentrée que la solution mère, ce qui est cohérent avec une coloration bleue plus pâle.

<strong>4. Quantité de gaz dégagé.</strong> Avec le volume molaire des gaz $V_m = 24{,}0$ L·mol⁻¹ et $V_{gaz} = 48$ mL $= 48\\times10^{-3}$ L :
$$n_{gaz} = \\frac{V_{gaz}}{V_m} = \\frac{48\\times10^{-3}}{24{,}0} = 2{,}0\\times10^{-3}\\ \\text{mol}.$$
</details>`
          }
        ]
      }
    ]
  }
]
