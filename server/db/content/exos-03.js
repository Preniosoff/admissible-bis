// Exercices charnières — lot 03
// Chimie CPGE (bcpst, mp, mpsi, pc, pcsi) : cinétique, cristallo, orga, précipitation/complexation, redox, structure, thermo
// Mode append : ajoute une section « 🎯 Exercice charnière » sans toucher au cours.

export const DATA = [

  // ══════════════════════════════════════════════════════════════
  // CINÉTIQUE CHIMIQUE — décomposition de N2O5 : ordre, Arrhenius, mécanisme
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-cinetique',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Décomposition du pentaoxyde de diazote : de la loi de vitesse au mécanisme',
            contenu: `<strong>Énoncé.</strong> On étudie à $T_1 = 318$ K, dans un réacteur fermé de volume constant, la décomposition en phase gazeuse :
$$2\\,N_2O_5 \\longrightarrow 4\\,NO_2 + O_2$$
Le suivi de la concentration en $N_2O_5$ donne :
<table><tr><th>$t$ (min)</th><td>0</td><td>10</td><td>20</td><td>30</td><td>40</td></tr>
<tr><th>$[N_2O_5]$ (mmol/L)</th><td>10,0</td><td>6,2</td><td>3,8</td><td>2,4</td><td>1,5</td></tr></table>
<p><em>Données :</em> $R = 8{,}314$ J K⁻¹ mol⁻¹. La même étude menée à $T_2 = 298$ K conduit à $k(298) = 1{,}7 \\cdot 10^{-3}$ min⁻¹ (constante de vitesse définie à la question 2).</p>
<p><strong>1.</strong> Définir la vitesse volumique de réaction $v$. L'exprimer en fonction de $\\dfrac{\\mathrm{d}[N_2O_5]}{\\mathrm{d}t}$, puis de $\\dfrac{\\mathrm{d}[O_2]}{\\mathrm{d}t}$.</p>
<p><strong>2.</strong> On fait l'hypothèse d'un ordre 1 : $v = k\\,[N_2O_5]$. Établir l'expression de $[N_2O_5](t)$. Quel tracé permet de tester l'hypothèse (méthode intégrale) ? Vérifier numériquement et déterminer $k$ à 318 K.</p>
<p><strong>3.</strong> Définir le temps de demi-réaction $t_{1/2}$, l'exprimer en fonction de $k$, le calculer. Quelle propriété caractéristique de l'ordre 1 présente-t-il ? La vérifier sur le tableau.</p>
<p><strong>4.</strong> En admettant la loi d'Arrhenius, déterminer l'énergie d'activation $E_a$ de la réaction. Par quel facteur la vitesse est-elle multipliée quand on passe de 298 K à 318 K ?</p>
<p><strong>5.</strong> On propose le mécanisme suivant ($NO_3$ est un radical) :
$$N_2O_5 \\;\\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}}\\; NO_2 + NO_3 \\qquad (1)$$
$$NO_2 + NO_3 \\;\\xrightarrow{k_2}\\; NO + NO_2 + O_2 \\qquad (2)$$
$$NO + NO_3 \\;\\xrightarrow{k_3}\\; 2\\,NO_2 \\qquad (3)$$
a) Vérifier que ce mécanisme rend compte du bilan. b) Identifier les intermédiaires réactionnels ; sont-ils des catalyseurs ? c) En appliquant l'approximation de l'état quasi stationnaire (AEQS) à $NO_3$ et $NO$, retrouver l'ordre 1 et exprimer $k$ en fonction des constantes élémentaires.</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Vitesse de réaction.</strong> Pour un système fermé de volume $V$ constant, $v = \\dfrac{1}{V}\\dfrac{\\mathrm{d}\\xi}{\\mathrm{d}t} = \\dfrac{1}{\\nu_i}\\dfrac{\\mathrm{d}[X_i]}{\\mathrm{d}t}$ (coefficient $\\nu_i$ algébrique). Ici :
$$v = -\\frac{1}{2}\\frac{\\mathrm{d}[N_2O_5]}{\\mathrm{d}t} = \\frac{\\mathrm{d}[O_2]}{\\mathrm{d}t} = \\frac{1}{4}\\frac{\\mathrm{d}[NO_2]}{\\mathrm{d}t}$$</p>
<p><strong>2. Méthode intégrale.</strong> Si $v = k[N_2O_5]$, alors $\\dfrac{\\mathrm{d}[N_2O_5]}{\\mathrm{d}t} = -2v = -2k[N_2O_5]$. On sépare les variables et on intègre de $0$ à $t$ :
$$\\ln[N_2O_5] = \\ln[N_2O_5]_0 - 2kt \\qquad \\text{soit} \\qquad [N_2O_5](t) = [N_2O_5]_0\\,e^{-2kt}$$
Le tracé de $\\ln[N_2O_5]$ en fonction de $t$ doit donc être une droite de pente $-2k$. Numériquement : $\\ln c$ (avec $c$ en mmol/L) vaut 2,30 ; 1,82 ; 1,34 ; 0,88 ; 0,41 — la décroissance est bien affine ($\\approx -0{,}47$ toutes les 10 min, coefficient de corrélation excellent). Pente $= -4{,}75 \\cdot 10^{-2}$ min⁻¹, d'où :
$$k(318) = \\frac{4{,}75 \\cdot 10^{-2}}{2} \\approx 2{,}4 \\cdot 10^{-2}\\ \\text{min}^{-1}$$
L'hypothèse d'ordre 1 est validée.</p>
<p><strong>3. Temps de demi-réaction.</strong> $t_{1/2}$ est la durée au bout de laquelle la moitié du réactif limitant a été consommée : $[N_2O_5](t_{1/2}) = [N_2O_5]_0/2$. D'après la loi intégrée : $e^{-2kt_{1/2}} = 1/2$, donc
$$t_{1/2} = \\frac{\\ln 2}{2k} = \\frac{0{,}693}{4{,}75 \\cdot 10^{-2}} \\approx 14{,}6\\ \\text{min}$$
Propriété caractéristique de l'ordre 1 : $t_{1/2}$ est <strong>indépendant de la concentration initiale</strong>. Vérification : on passe de 10,0 à 5,0 mmol/L vers $t \\approx 15$ min, puis de 5,0 à 2,5 mmol/L vers $t \\approx 29$ min : l'écart est bien constant ($\\approx 14$–15 min).</p>
<p><strong>4. Loi d'Arrhenius.</strong> $k = A\\,e^{-E_a/RT}$, donc en faisant le rapport entre les deux températures :
$$\\ln\\frac{k(T_1)}{k(T_2)} = \\frac{E_a}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$
Avec $\\dfrac{k(318)}{k(298)} = \\dfrac{2{,}4 \\cdot 10^{-2}}{1{,}7 \\cdot 10^{-3}} = 14{,}1$ et $\\dfrac{1}{298} - \\dfrac{1}{318} = 2{,}11 \\cdot 10^{-4}$ K⁻¹ :
$$E_a = \\frac{R\\,\\ln(14{,}1)}{2{,}11 \\cdot 10^{-4}} = \\frac{8{,}314 \\times 2{,}65}{2{,}11 \\cdot 10^{-4}} \\approx 1{,}0 \\cdot 10^{5}\\ \\text{J/mol} \\approx 104\\ \\text{kJ/mol}$$
La vitesse est multipliée par $\\approx 14$ pour 20 K d'élévation : illustration spectaculaire de la sensibilité exponentielle à la température (un catalyseur, lui, abaisserait $E_a$ en imposant un autre chemin réactionnel, sans être consommé et sans modifier l'état d'équilibre).</p>
<p><strong>5. Mécanisme.</strong> <em>a)</em> La combinaison $2\\times(1) + (2) + (3)$ donne : $2\\,N_2O_5 \\rightarrow 4\\,NO_2 + O_2$ — le bilan est bien retrouvé.<br>
<em>b)</em> $NO_3$ et $NO$ sont des <strong>intermédiaires réactionnels</strong> : formés puis consommés, absents du bilan et du système initial. Ce ne sont <strong>pas</strong> des catalyseurs (un catalyseur est introduit avec les réactifs et régénéré en fin de réaction).<br>
<em>c)</em> AEQS sur $NO$ : $k_2[NO_2][NO_3] = k_3[NO][NO_3]$.<br>
AEQS sur $NO_3$ : $k_1[N_2O_5] = (k_{-1}+k_2)[NO_2][NO_3] + k_3[NO][NO_3]$. En y reportant la première relation :
$$k_1[N_2O_5] = (k_{-1} + 2k_2)[NO_2][NO_3] \\quad \\Rightarrow \\quad [NO_3] = \\frac{k_1[N_2O_5]}{(k_{-1}+2k_2)[NO_2]}$$
$N_2O_5$ n'est consommé qu'à l'étape (1) et reformé par $(-1)$ :
$$-\\frac{\\mathrm{d}[N_2O_5]}{\\mathrm{d}t} = k_1[N_2O_5] - k_{-1}[NO_2][NO_3] = k_1[N_2O_5]\\left(1 - \\frac{k_{-1}}{k_{-1}+2k_2}\\right) = \\frac{2k_1k_2}{k_{-1}+2k_2}[N_2O_5]$$
Comme $v = -\\frac{1}{2}\\frac{\\mathrm{d}[N_2O_5]}{\\mathrm{d}t}$, on obtient $v = k[N_2O_5]$ avec
$$\\boxed{k = \\frac{k_1 k_2}{k_{-1} + 2k_2}}$$
Le mécanisme est bien compatible avec l'ordre 1 observé expérimentalement.</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // CRISTALLOGRAPHIE — le cuivre CFC : maille, compacité, sites, hydrure
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-cristallo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le cuivre cristallisé : de la maille CFC à l\'hydrure d\'insertion',
            contenu: `<strong>Énoncé.</strong> Le cuivre cristallise dans le réseau cubique à faces centrées (CFC), de paramètre de maille $a = 361{,}5$ pm.
<p><em>Données :</em> $M(Cu) = 63{,}5$ g/mol ; $M(H) = 1{,}0$ g/mol ; $\\mathcal{N}_A = 6{,}022 \\cdot 10^{23}$ mol⁻¹ ; rayon de l'atome d'hydrogène $r_H \\approx 37$ pm.</p>
<p><strong>1.</strong> Décrire la maille CFC (positions des atomes). Déterminer la population (nombre d'atomes en propre) et la coordinence d'un atome de cuivre.</p>
<p><strong>2.</strong> Écrire la condition de tangence des atomes dans cette structure compacte ; en déduire le rayon métallique $r$ du cuivre. Définir la compacité $C$, établir son expression littérale et la calculer.</p>
<p><strong>3.</strong> Exprimer puis calculer la masse volumique $\\rho$ du cuivre.</p>
<p><strong>4.</strong> Localiser et dénombrer les sites octaédriques (O) et tétraédriques (T) de la maille. Établir le rayon maximal $r_O$ (resp. $r_T$) d'un atome pouvant s'y insérer sans déformation, et calculer ces deux rayons.</p>
<p><strong>5.</strong> Le cuivre peut former un hydrure d'insertion. a) Dans quel type de site l'atome d'hydrogène se loge-t-il préférentiellement ? b) Quelle est la formule de l'hydrure si tous ces sites sont occupés ? c) Calculer la masse volumique de cet hydrure en supposant $a$ inchangé. d) Quelle structure ionique célèbre cette occupation des sites rappelle-t-elle ?</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Description de la maille.</strong> Atomes aux 8 sommets du cube et aux centres des 6 faces.<br>
<em>Population :</em> $8 \\times \\dfrac{1}{8} + 6 \\times \\dfrac{1}{2} = 1 + 3 = \\mathbf{4}$ atomes par maille.<br>
<em>Coordinence :</em> chaque atome touche ses plus proches voisins le long des diagonales de faces : 12 voisins à la distance $\\dfrac{a\\sqrt{2}}{2}$, soit une coordinence $[12]$, caractéristique d'un empilement compact.</p>
<p><strong>2. Tangence et compacité.</strong> Les atomes sont tangents le long de la <em>diagonale d'une face</em> : un sommet, le centre de la face, le sommet opposé, soit
$$a\\sqrt{2} = 4r \\quad \\Rightarrow \\quad r = \\frac{a\\sqrt{2}}{4} = \\frac{361{,}5 \\times 1{,}414}{4} \\approx 128\\ \\text{pm}$$
La compacité est la fraction du volume de la maille effectivement occupée par la matière :
$$C = \\frac{4 \\times \\frac{4}{3}\\pi r^3}{a^3} = \\frac{\\frac{16}{3}\\pi \\left(\\frac{a\\sqrt{2}}{4}\\right)^3}{a^3} = \\frac{\\pi\\sqrt{2}}{6} \\approx 0{,}74$$
C'est la compacité maximale pour des sphères identiques (74 % du volume occupé, 26 % de vide).</p>
<p><strong>3. Masse volumique.</strong>
$$\\rho = \\frac{4\\,M(Cu)}{\\mathcal{N}_A\\,a^3} = \\frac{4 \\times 63{,}5 \\cdot 10^{-3}}{6{,}022 \\cdot 10^{23} \\times (361{,}5 \\cdot 10^{-12})^3} \\approx 8{,}9 \\cdot 10^{3}\\ \\text{kg/m}^3$$
soit $\\rho \\approx 8{,}9$ g/cm³, en excellent accord avec la valeur expérimentale (8,96 g/cm³).</p>
<p><strong>4. Sites interstitiels.</strong><br>
<em>Sites octaédriques :</em> centre du cube (1) et milieux des 12 arêtes ($12 \\times \\frac{1}{4} = 3$), soit $\\mathbf{4}$ sites O par maille (autant que d'atomes). Le long d'une arête : $\\dfrac{a}{2} = r + r_O$, donc
$$r_O = \\frac{a}{2} - r = \\frac{a}{2} - \\frac{a\\sqrt{2}}{4} = (\\sqrt{2}-1)\\,r \\approx 0{,}414\\,r \\approx 53\\ \\text{pm}$$
<em>Sites tétraédriques :</em> centres des 8 petits cubes d'arête $a/2$, soit $\\mathbf{8}$ sites T par maille (entièrement intérieurs). Le contact se fait le long de la demi-diagonale du petit cube : $\\dfrac{a\\sqrt{3}}{4} = r + r_T$, donc
$$r_T = \\frac{a\\sqrt{3}}{4} - r = \\left(\\sqrt{\\frac{3}{2}}-1\\right)r \\approx 0{,}225\\,r \\approx 29\\ \\text{pm}$$</p>
<p><strong>5. Hydrure d'insertion.</strong><br>
<em>a)</em> $r_H \\approx 37$ pm : trop gros pour un site T ($29$ pm), mais logeable dans un site <strong>octaédrique</strong> ($53$ pm) sans déformation notable du réseau.<br>
<em>b)</em> 4 sites O occupés pour 4 atomes de cuivre : stœchiométrie 1:1, formule $\\mathbf{CuH}$.<br>
<em>c)</em> $\\rho' = \\dfrac{4\\,(M(Cu)+M(H))}{\\mathcal{N}_A\\,a^3} = \\rho \\times \\dfrac{64{,}5}{63{,}5} \\approx 9{,}1 \\cdot 10^{3}$ kg/m³ : l'insertion alourdit la maille à volume constant.<br>
<em>d)</em> C'est exactement la structure type <strong>NaCl</strong> : un réseau CFC d'anions $Cl^-$ dont tous les sites octaédriques sont occupés par les cations $Na^+$ — belle passerelle entre cristaux métalliques et cristaux ioniques.</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // CHIMIE ORGANIQUE — le 2-bromobutane : stéréochimie, SN, E, addition
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-orga',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Autour du 2-bromobutane : stéréochimie, substitutions et éliminations',
            contenu: `<strong>Énoncé.</strong> On s'intéresse au 2-bromobutane $CH_3$–$CHBr$–$CH_2$–$CH_3$ et à sa réactivité.
<p><strong>1.</strong> À quelle famille appartient ce composé (préciser sa classe) ? Représenter et nommer tous les isomères de constitution de formule brute $C_4H_9Br$, en précisant leur classe. Lesquels sont chiraux ?</p>
<p><strong>2.</strong> Représenter en projection de Cram l'énantiomère ($R$) du 2-bromobutane, en justifiant soigneusement le descripteur stéréochimique (règles de Cahn, Ingold et Prelog). Quelle relation lie les deux énantiomères et comment les distingue-t-on expérimentalement ?</p>
<p><strong>3.</strong> Représenter en projection de Newman, selon l'axe C2–C3, les conformères décalés du squelette butane. Lequel est le plus stable ? Justifier.</p>
<p><strong>4.</strong> Le ($R$)-2-bromobutane est traité par la soude.<br>
a) Dans l'acétone à température ambiante, on obtient du butan-2-ol avec une cinétique d'ordre global 2. Identifier le mécanisme, le décrire (profil en une étape, état de transition) et donner la configuration du produit. La réaction est-elle stéréosélective ?<br>
b) Chauffé dans l'eau pure (sans soude), le même substrat conduit à un butan-2-ol optiquement inactif, avec une cinétique d'ordre 1. Interpréter.</p>
<p><strong>5.</strong> Traité par la soude concentrée dans l'éthanol à reflux, le 2-bromobutane conduit majoritairement à des alcènes. Écrire les produits possibles, indiquer le mécanisme, le produit majoritaire (règle de Zaïtsev) et préciser les descripteurs ($Z$)/($E$) des stéréoisomères obtenus. Lequel est majoritaire ?</p>
<p><strong>6.</strong> Le but-1-ène, sous-produit de la question 5, est traité par $HBr$. Donner le produit majoritaire (règle de Markovnikov, à justifier par le mécanisme). Le produit obtenu est-il optiquement actif ?</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Famille et isomérie de constitution.</strong> C'est un halogénoalcane (bromoalcane) <strong>secondaire</strong> : le carbone fonctionnel porte deux chaînes carbonées. Quatre isomères de constitution :<br>
• 1-bromobutane $CH_3CH_2CH_2CH_2Br$ (classe I) ;<br>
• <strong>2-bromobutane</strong> (classe II) ;<br>
• 1-bromo-2-méthylpropane $(CH_3)_2CHCH_2Br$ (classe I) ;<br>
• 2-bromo-2-méthylpropane $(CH_3)_3CBr$ (classe III).<br>
Seul le <strong>2-bromobutane</strong> est chiral : son carbone C2 porte quatre substituants différents ($Br$, $CH_3$, $C_2H_5$, $H$) — c'est un carbone asymétrique, et la molécule n'est superposable à aucun de ses deux « reflets ».</p>
<p><strong>2. Descripteur ($R$).</strong> Classement CIP des substituants de C2 : $Br$ ($Z=35$) $&gt;$ $C_2H_5$ (C lié à (C,H,H)) $&gt;$ $CH_3$ (C lié à (H,H,H)) $&gt;$ $H$.<br>
<em>Cram :</em> on place $H$ (dernier prioritaire) vers l'arrière (liaison pointillée) ; dans le plan de la feuille, $Br$ vers le haut, l'éthyle en bas à droite, le méthyle en bas à gauche : la séquence $Br \\rightarrow C_2H_5 \\rightarrow CH_3$ tourne alors dans le sens horaire, d'où le descripteur ($R$).<br>
Les deux énantiomères sont images l'une de l'autre dans un miroir et non superposables ; ils ont les mêmes propriétés physiques usuelles mais des <strong>pouvoirs rotatoires opposés</strong> : on les distingue au polarimètre (et par leur comportement vis-à-vis d'entités chirales).</p>
<p><strong>3. Conformations.</strong> En Newman selon C2–C3, les deux méthyles terminaux peuvent être en position <em>anti</em> (angle dièdre 180°) ou <em>gauche</em> (±60°). Le conformère <strong>anti est le plus stable</strong> : les deux groupes les plus volumineux sont les plus éloignés (gêne stérique minimale, écart $\\approx 4$ kJ/mol avec gauche) ; les conformères éclipsés sont des maxima d'énergie ($\\approx 20$ kJ/mol au-dessus). À température ambiante, la rotation est libre : les conformères s'interconvertissent sans rupture de liaison.</p>
<p><strong>4. Compétition SN2 / SN1.</strong><br>
<em>a)</em> Ordre global 2 ($v = k[RBr][HO^-]$), nucléophile fort et peu dispersé dans un solvant polaire aprotique : mécanisme <strong>SN2</strong>. Une seule étape : attaque de $HO^-$ à l'opposé du brome, état de transition à 5 liaisons (bipyramide à base triangulaire) où la liaison C–O se forme pendant que C–Br se rompt. Conséquence : <strong>inversion de Walden</strong> du carbone. Comme l'ordre des priorités CIP est conservé ($OH$ remplace $Br$ en tête), le descripteur s'inverse : on obtient le ($S$)-butan-2-ol, quasi exclusivement. La réaction est <strong>stéréosélective</strong> (et même stéréospécifique).<br>
<em>b)</em> Ordre 1 ($v = k[RBr]$), solvant polaire protique, nucléophile faible (l'eau) : mécanisme <strong>SN1</strong> en deux étapes. Étape cinétiquement déterminante : ionisation $RBr \\rightarrow R^+ + Br^-$ donnant un carbocation secondaire <strong>plan</strong> (carbone trigonal, $AX_3$) ; l'eau attaque ensuite indifféremment les deux faces : on obtient un <strong>mélange racémique</strong> (50/50 des deux énantiomères), donc optiquement inactif par compensation.</p>
<p><strong>5. Élimination E2.</strong> Base forte concentrée, solvant peu dissociant, chauffage : <strong>E2</strong> (anti-périplanaire, une étape). Deux régiochimies possibles :<br>
• but-1-ène $CH_2$=$CH$–$CH_2$–$CH_3$ (H arraché sur C1) ;<br>
• <strong>but-2-ène</strong> $CH_3$–$CH$=$CH$–$CH_3$ (H arraché sur C3), <strong>majoritaire</strong> d'après la règle de Zaïtsev : l'alcène le plus substitué (le plus stable) est favorisé.<br>
Le but-2-ène existe sous deux configurations diastéréoisomères : sur chaque carbone éthylénique, $CH_3 &gt; H$ ; si les deux méthyles sont du même côté de la double liaison, c'est le ($Z$), s'ils sont de part et d'autre, le ($E$). Le <strong>($E$)-but-2-ène est majoritaire</strong> (interactions stériques minimales, état de transition plus bas en énergie).</p>
<p><strong>6. Addition de HBr (Markovnikov).</strong> Addition électrophile en deux étapes via un carbocation : la protonation du but-1-ène donne soit un cation primaire (instable), soit le cation <strong>secondaire</strong> $CH_3\\overset{+}{C}H CH_2CH_3$, beaucoup plus stable (effets inductifs donneurs) : c'est lui qui se forme. $Br^-$ l'attaque ensuite : le produit majoritaire est le <strong>2-bromobutane</strong> (le brome se fixe sur le carbone le plus substitué). Le carbocation étant plan et l'environnement achiral, les deux faces sont attaquées équiprobablement : on obtient le <strong>racémique</strong>, optiquement inactif — la boucle est bouclée, mais sans activité optique !</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // PRÉCIPITATION & COMPLEXATION — AgCl : solubilité, ammoniaque, Mohr
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-precip',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le chlorure d\'argent : solubilité, complexation et dosage de Mohr',
            contenu: `<strong>Énoncé.</strong> Toutes les solutions sont à 298 K.
<p><em>Données :</em> $pK_s(AgCl) = 9{,}7$ ; $pK_s(Ag_2CrO_4) = 11{,}9$ ; constante globale de formation du complexe diamminargent(I) $[Ag(NH_3)_2]^+$ : $\\log\\beta_2 = 7{,}2$ ; $M(AgCl) = 143{,}3$ g/mol.</p>
<p><strong>1.</strong> Écrire l'équilibre de dissolution de $AgCl(s)$ et l'expression de $K_s$. Calculer la solubilité $s$ de $AgCl$ dans l'eau pure, en mol/L puis en mg/L.</p>
<p><strong>2.</strong> Pour une solution où $[Cl^-] = 1{,}0 \\cdot 10^{-2}$ mol/L, construire le diagramme d'existence de $AgCl$ en fonction de $pAg = -\\log[Ag^+]$ : à partir de quelle valeur de $pAg$ le solide existe-t-il ?</p>
<p><strong>3.</strong> Calculer la solubilité $s'$ de $AgCl$ dans une solution de chlorure de sodium à $0{,}10$ mol/L. Commenter (nom et sens de l'effet observé).</p>
<p><strong>4.</strong> Écrire l'équation de dissolution de $AgCl(s)$ dans l'ammoniaque et exprimer sa constante $K$ en fonction de $K_s$ et $\\beta_2$ ; la calculer. En déduire la solubilité $s''$ de $AgCl$ dans une solution d'ammoniac de concentration initiale $1{,}0$ mol/L. Conclure sur l'effet de la complexation.</p>
<p><strong>5.</strong> <em>Dosage de Mohr.</em> On dose $V_0 = 20{,}0$ mL d'une solution de chlorures par du nitrate d'argent à $c_2 = 5{,}0 \\cdot 10^{-2}$ mol/L, en présence de chromate de potassium ($[CrO_4^{2-}] \\approx 5{,}0 \\cdot 10^{-3}$ mol/L). Un précipité rouge brique apparaît durablement pour $V_E = 12{,}4$ mL.<br>
a) Calculer la concentration $c_1$ en ions chlorure.<br>
b) Montrer par le calcul que $AgCl$ (blanc) précipite avant $Ag_2CrO_4$ (rouge).<br>
c) Vérifier que $Ag_2CrO_4$ n'apparaît qu'au voisinage immédiat de l'équivalence : pourquoi est-ce un bon indicateur de fin de dosage ?</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Solubilité dans l'eau pure.</strong> $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$, avec $K_s = [Ag^+][Cl^-] = 10^{-9{,}7}$.<br>
À la dissolution de $s$ mol/L : $[Ag^+] = [Cl^-] = s$, donc $s^2 = K_s$ :
$$s = \\sqrt{K_s} = 10^{-4{,}85} \\approx 1{,}4 \\cdot 10^{-5}\\ \\text{mol/L}$$
soit $s \\times M = 1{,}4 \\cdot 10^{-5} \\times 143{,}3 \\approx 2{,}0$ mg/L : $AgCl$ est très peu soluble.</p>
<p><strong>2. Diagramme d'existence.</strong> Le solide existe si et seulement si le quotient $[Ag^+][Cl^-]$ atteint $K_s$. À $[Cl^-] = 10^{-2}$ fixé, la frontière correspond à $[Ag^+] = \\dfrac{K_s}{[Cl^-]} = 10^{-9{,}7+2} = 10^{-7{,}7}$.<br>
Sur un axe gradué en $pAg$ : <strong>$AgCl(s)$ existe pour $pAg \\leq 7{,}7$</strong> (solution saturée) ; pour $pAg &gt; 7{,}7$, pas de précipité (solution insaturée). Retenir : frontière en $pAg = pK_s - pCl$.</p>
<p><strong>3. Effet d'ion commun.</strong> Dans $NaCl$ 0,10 mol/L : $[Cl^-] \\approx 0{,}10 + s' \\approx 0{,}10$ (car $s' \\ll 0{,}10$, à vérifier). Alors
$$s' = [Ag^+] = \\frac{K_s}{[Cl^-]} = \\frac{10^{-9{,}7}}{10^{-1}} = 10^{-8{,}7} \\approx 2{,}0 \\cdot 10^{-9}\\ \\text{mol/L}$$
(hypothèse largement vérifiée). La solubilité est divisée par $\\approx 7000$ : c'est l'<strong>effet d'ion commun</strong> — l'ajout d'un ion du précipité déplace l'équilibre de dissolution dans le sens de la précipitation (loi de modération).</p>
<p><strong>4. Redissolution par complexation.</strong> Somme des équilibres « dissolution » et « complexation » :
$$AgCl(s) + 2\\,NH_3 \\rightleftharpoons [Ag(NH_3)_2]^+ + Cl^- \\qquad K = K_s \\times \\beta_2 = 10^{-9{,}7 + 7{,}2} = 10^{-2{,}5}$$
Bilan de matière avec $s''$ mol/L dissous : $[[Ag(NH_3)_2]^+] = [Cl^-] = s''$ et $[NH_3] = 1{,}0 - 2s''$ :
$$K = \\frac{s''^2}{(1-2s'')^2} \\quad \\Rightarrow \\quad \\frac{s''}{1-2s''} = 10^{-1{,}25} = 5{,}6 \\cdot 10^{-2} \\quad \\Rightarrow \\quad s'' \\approx 5{,}1 \\cdot 10^{-2}\\ \\text{mol/L}$$
La solubilité est multipliée par $\\approx 3600$ par rapport à l'eau pure : la complexation <strong>consomme $Ag^+$ et déplace la dissolution</strong> — compétition précipitation/complexation gagnée ici par le complexe (c'est le principe du nettoyage des précipités d'argent à l'ammoniaque).</p>
<p><strong>5. Dosage de Mohr.</strong><br>
<em>a)</em> À l'équivalence, $n(Ag^+)_{versé} = n(Cl^-)_{initial}$ :
$$c_1 = \\frac{c_2 V_E}{V_0} = \\frac{5{,}0 \\cdot 10^{-2} \\times 12{,}4}{20{,}0} = 3{,}1 \\cdot 10^{-2}\\ \\text{mol/L}$$
<em>b)</em> Concentration en $Ag^+$ nécessaire pour amorcer chaque précipitation :<br>
— pour $AgCl$ : $[Ag^+] = \\dfrac{K_s}{[Cl^-]} = \\dfrac{10^{-9{,}7}}{3{,}1 \\cdot 10^{-2}} \\approx 6{,}5 \\cdot 10^{-9}$ mol/L ;<br>
— pour $Ag_2CrO_4$ ($K_s' = [Ag^+]^2[CrO_4^{2-}]$) : $[Ag^+] = \\sqrt{\\dfrac{10^{-11{,}9}}{5{,}0 \\cdot 10^{-3}}} \\approx 1{,}6 \\cdot 10^{-5}$ mol/L.<br>
$6{,}5 \\cdot 10^{-9} \\ll 1{,}6 \\cdot 10^{-5}$ : <strong>$AgCl$ précipite très largement en premier</strong>, bien que son $pK_s$ soit plus petit — comparer des solides de stœchiométries différentes impose le calcul, pas la simple lecture des $pK_s$.<br>
<em>c)</em> À l'équivalence, tout se passe comme pour $AgCl$ dans l'eau : $[Ag^+] = \\sqrt{K_s} = 1{,}4 \\cdot 10^{-5}$ mol/L, juste <em>en dessous</em> du seuil $1{,}6 \\cdot 10^{-5}$ mol/L. La première goutte d'excès fait franchir le seuil : le rouge brique de $Ag_2CrO_4$ apparaît <strong>immédiatement après l'équivalence</strong>. L'indicateur signale donc la fin du dosage avec une erreur négligeable — tout l'art du dosage de Mohr tient dans ce réglage de $[CrO_4^{2-}]$.</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // OXYDORÉDUCTION — manganimétrie : n.o., Nernst, pile, dosage
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-redox',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Manganimétrie : doser le fer(II) par le permanganate',
            contenu: `<strong>Énoncé.</strong> On dose une solution acidifiée de sulfate de fer(II) par une solution de permanganate de potassium.
<p><em>Données à 298 K :</em> $E^\\circ(MnO_4^-/Mn^{2+}) = 1{,}51$ V ; $E^\\circ(Fe^{3+}/Fe^{2+}) = 0{,}77$ V ; $E^\\circ(Cl_2/Cl^-) = 1{,}36$ V ; $E^\\circ(O_2/H_2O) = 1{,}23$ V ; $\\dfrac{RT\\ln 10}{F} \\approx 0{,}06$ V.</p>
<p><strong>1.</strong> Déterminer le nombre d'oxydation du manganèse dans $MnO_4^-$ et dans $Mn^{2+}$, celui du fer dans $Fe^{2+}$ et $Fe^{3+}$. Écrire les deux demi-équations électroniques en milieu acide, puis l'équation de la réaction de dosage.</p>
<p><strong>2.</strong> Écrire la relation de Nernst pour chaque couple. Exprimer puis calculer la constante d'équilibre $K^\\circ$ de la réaction de dosage. Conclure.</p>
<p><strong>3.</strong> On réalise une pile avec les deux couples : compartiment (1) : lame de platine, $[MnO_4^-] = 0{,}10$ mol/L, $[Mn^{2+}] = 1{,}0 \\cdot 10^{-2}$ mol/L, $pH = 0$ ; compartiment (2) : lame de platine, $[Fe^{3+}] = 1{,}0 \\cdot 10^{-2}$ mol/L, $[Fe^{2+}] = 0{,}10$ mol/L ; pont salin au nitrate de potassium. Calculer le potentiel de chaque électrode, la f.é.m. de la pile, préciser polarité, réactions aux électrodes et rôle du pont salin.</p>
<p><strong>4.</strong> On dose $V_0 = 20{,}0$ mL de la solution de $Fe^{2+}$ par $KMnO_4$ à $c_2 = 2{,}00 \\cdot 10^{-2}$ mol/L (milieu sulfurique, $pH = 0$). La teinte rose persiste à partir de $V_E = 12{,}5$ mL.<br>
a) Pourquoi ce dosage ne nécessite-t-il aucun indicateur coloré ?<br>
b) Calculer la concentration $c_1$ en $Fe^{2+}$.<br>
c) Calculer le potentiel de la solution à la demi-équivalence puis à l'équivalence.</p>
<p><strong>5.</strong> Justifier : a) pourquoi le milieu doit être franchement acide ; b) pourquoi on acidifie à l'acide sulfurique et non à l'acide chlorhydrique ; c) pourquoi le permanganate, thermodynamiquement instable dans l'eau, peut tout de même être utilisé.</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Nombres d'oxydation et équations.</strong> Dans $MnO_4^-$ : $n.o.(Mn) + 4 \\times (-II) = -I$, d'où $n.o.(Mn) = +VII$ ; dans $Mn^{2+}$ : $+II$. Pour le fer : $+II$ et $+III$. Le manganèse gagne 5 électrons, le fer en perd 1.<br>
Demi-équations :
$$MnO_4^- + 8\\,H^+ + 5\\,e^- = Mn^{2+} + 4\\,H_2O \\qquad \\text{et} \\qquad Fe^{3+} + e^- = Fe^{2+}$$
Réaction de dosage ($5 \\times$ la seconde, retranchée) :
$$MnO_4^- + 5\\,Fe^{2+} + 8\\,H^+ \\longrightarrow Mn^{2+} + 5\\,Fe^{3+} + 4\\,H_2O$$</p>
<p><strong>2. Nernst et constante d'équilibre.</strong>
$$E_1 = 1{,}51 + \\frac{0{,}06}{5}\\log\\frac{[MnO_4^-][H^+]^8}{[Mn^{2+}]} \\qquad ; \\qquad E_2 = 0{,}77 + 0{,}06\\log\\frac{[Fe^{3+}]}{[Fe^{2+}]}$$
À l'équilibre chimique, unicité du potentiel : $E_1 = E_2$. En égalant et en regroupant les logarithmes, on reconnaît le quotient réactionnel à l'équilibre, donc :
$$\\log K^\\circ = \\frac{5\\,(E_1^\\circ - E_2^\\circ)}{0{,}06} = \\frac{5 \\times 0{,}74}{0{,}06} \\approx 62 \\qquad \\Rightarrow \\qquad K^\\circ \\approx 10^{62}$$
$K^\\circ$ gigantesque : la réaction est <strong>quantitative</strong> (totale), condition indispensable pour un dosage.</p>
<p><strong>3. Pile.</strong> Potentiels de Nernst :
$$E_1 = 1{,}51 + \\frac{0{,}06}{5}\\log\\frac{0{,}10}{10^{-2}} = 1{,}51 + 0{,}012 \\approx 1{,}52\\ \\text{V} \\qquad ; \\qquad E_2 = 0{,}77 + 0{,}06\\log\\frac{10^{-2}}{0{,}10} = 0{,}71\\ \\text{V}$$
f.é.m. : $e = E_1 - E_2 = 0{,}81$ V. L'électrode (1) est le pôle $\\oplus$ (<strong>cathode</strong>, réduction : $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$) ; l'électrode (2) est le pôle $\\ominus$ (<strong>anode</strong>, oxydation : $Fe^{2+} \\rightarrow Fe^{3+} + e^-$). Les électrons circulent de (2) vers (1) dans le circuit extérieur. Le pont salin ferme le circuit en assurant la conduction ionique et l'électroneutralité des deux compartiments, sans mélanger les solutions.</p>
<p><strong>4. Dosage.</strong><br>
<em>a)</em> $MnO_4^-$ est violet intense, $Mn^{2+}$ incolore : avant l'équivalence le permanganate versé est intégralement consommé (réaction quantitative), la solution reste incolore ; la première goutte en excès colore durablement en rose. Le réactif titrant est <strong>son propre indicateur</strong>.<br>
<em>b)</em> À l'équivalence, les réactifs sont introduits en proportions stœchiométriques : $n(Fe^{2+}) = 5\\,n(MnO_4^-)$ :
$$c_1 = \\frac{5\\,c_2 V_E}{V_0} = \\frac{5 \\times 2{,}00 \\cdot 10^{-2} \\times 12{,}5}{20{,}0} = 6{,}25 \\cdot 10^{-2}\\ \\text{mol/L}$$
<em>c)</em> <em>Demi-équivalence :</em> la moitié du fer est oxydée, $[Fe^{3+}] = [Fe^{2+}]$, donc $E = E^\\circ(Fe^{3+}/Fe^{2+}) = \\mathbf{0{,}77\\ V}$.<br>
<em>Équivalence :</em> on combine les deux relations de Nernst ($E$ unique) : $5E = 5E_1^\\circ + 0{,}06\\log\\dfrac{[MnO_4^-][H^+]^8}{[Mn^{2+}]}$ et $E = E_2^\\circ + 0{,}06\\log\\dfrac{[Fe^{3+}]}{[Fe^{2+}]}$. En sommant, et puisqu'à l'équivalence $[Fe^{2+}] = 5[MnO_4^-]$ et $[Fe^{3+}] = 5[Mn^{2+}]$, les logarithmes s'annulent (à $pH = 0$) :
$$E_{eq} = \\frac{5E_1^\\circ + E_2^\\circ}{6} = \\frac{5 \\times 1{,}51 + 0{,}77}{6} \\approx \\mathbf{1{,}39\\ V}$$
Le saut de potentiel ($0{,}77 \\rightarrow 1{,}39$ V) est net : équivalence facilement repérable, y compris par potentiométrie.</p>
<p><strong>5. Choix du milieu.</strong><br>
<em>a)</em> $H^+$ est réactif (8 protons par $MnO_4^-$) : en milieu insuffisamment acide, la réduction s'arrête au dioxyde $MnO_2(s)$ brun ($n.o. +IV$) — le diagramme potentiel-pH du manganèse montre que le domaine de $Mn^{2+}$ n'est stable qu'à bas pH. La stœchiométrie serait faussée.<br>
<em>b)</em> $E^\\circ(Cl_2/Cl^-) = 1{,}36$ V $&lt; 1{,}51$ V : le permanganate peut oxyder les chlorures, réaction parasite qui consommerait du titrant et surestimerait $V_E$. L'ion sulfate, lui, n'est pas oxydable dans ces conditions.<br>
<em>c)</em> $E^\\circ(MnO_4^-/Mn^{2+}) = 1{,}51$ V $&gt; E^\\circ(O_2/H_2O) = 1{,}23$ V : thermodynamiquement, $MnO_4^-$ devrait oxyder l'eau. Mais cette réaction est <strong>cinétiquement bloquée</strong> (forte surtension de dégagement de $O_2$, visible sur les courbes intensité-potentiel) : les solutions de permanganate sont métastables et utilisables — distinction essentielle entre thermodynamique et cinétique.</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // STRUCTURE DE LA MATIÈRE — de l'atome aux interactions
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-structure',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De l\'atome aux interactions : l\'eau et ses voisines',
            contenu: `<strong>Énoncé.</strong> On compare quelques petites molécules : $H_2O$, $H_2S$, $NH_3$, $CO_2$ et $CH_4$.
<p><em>Données :</em> numéros atomiques $Z$ : H = 1, C = 6, N = 7, O = 8, S = 16. Électronégativités (Pauling) : H : 2,2 ; C : 2,6 ; N : 3,0 ; O : 3,4 ; S : 2,6. Moment dipolaire de l'eau : $\\mu = 1{,}85$ D ; angle $\\widehat{HOH} = 104{,}5°$ ; longueur $d(O\\text{–}H) = 96$ pm ; $1$ D $= 3{,}34 \\cdot 10^{-30}$ C m ; $e = 1{,}6 \\cdot 10^{-19}$ C. Températures d'ébullition sous 1 bar : $H_2O$ : $100$ °C ; $H_2S$ : $-60$ °C ; $NH_3$ : $-33$ °C ; $CH_4$ : $-161$ °C.</p>
<p><strong>1.</strong> Énoncer les règles de remplissage électronique (Klechkowski, Pauli, Hund) puis établir la configuration électronique fondamentale de l'oxygène et du soufre. En déduire leur nombre d'électrons de valence, leur position (période, colonne) dans la classification, et justifier qu'ils appartiennent à la même famille.</p>
<p><strong>2.</strong> Rappeler l'évolution de l'électronégativité dans la classification périodique et comparer, en justifiant, $\\chi(O)$ et $\\chi(S)$.</p>
<p><strong>3.</strong> Établir les schémas de Lewis de $H_2O$, $H_2S$, $NH_3$, $CO_2$ et $CH_4$. En déduire, par la méthode VSEPR, la géométrie de chaque molécule (type $AX_nE_p$, forme, ordre de grandeur des angles).</p>
<p><strong>4.</strong> Discuter la polarité de chacune des cinq molécules. Pour l'eau, calculer le moment dipolaire d'une liaison O–H, en déduire le pourcentage de caractère ionique de cette liaison.</p>
<p><strong>5.</strong> Interpréter la hiérarchie des températures d'ébullition $CH_4 \\ll H_2S &lt; NH_3 \\ll H_2O$ en identifiant les interactions intermoléculaires mises en jeu. Pourquoi l'eau bout-elle 160 °C plus haut que $H_2S$, pourtant molécule plus lourde et plus polarisable ?</p>
<p><strong>6.</strong> L'eau dissout très bien le chlorure de sodium et l'éthanol, très mal le cyclohexane. Interpréter à l'aide des propriétés de solvant de l'eau.</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Configurations électroniques.</strong> <em>Klechkowski :</em> remplissage par $(n+l)$ croissant (à égalité, $n$ croissant) ; <em>Pauli :</em> deux électrons d'un même atome diffèrent par au moins un nombre quantique (au plus 2 électrons par OA, de spins opposés) ; <em>Hund :</em> dans une sous-couche, les électrons occupent le maximum d'OA avec des spins parallèles avant de s'apparier.<br>
$O\\ (Z=8) : 1s^2\\,2s^2\\,2p^4 \\qquad ; \\qquad S\\ (Z=16) : 1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$<br>
Tous deux possèdent <strong>6 électrons de valence</strong> ($ns^2np^4$) : O est en 2ᵉ période, S en 3ᵉ, tous deux en <strong>16ᵉ colonne</strong> (chalcogènes). Même configuration de valence $\\Rightarrow$ même colonne $\\Rightarrow$ propriétés chimiques analogues : valence (II), formation d'ions $X^{2-}$, hydrures $H_2X$ coudés.</p>
<p><strong>2. Électronégativité.</strong> $\\chi$ croît de gauche à droite le long d'une période (charge nucléaire effective croissante à rayon décroissant) et décroît en descendant une colonne (électrons de valence de plus en plus éloignés du noyau et écrantés). O est au-dessus de S : $\\chi(O) = 3{,}4 &gt; \\chi(S) = 2{,}6$. L'oxygène est d'ailleurs le 2ᵉ élément le plus électronégatif après le fluor.</p>
<p><strong>3. Lewis et VSEPR.</strong><br>
• $H_2O$ : O porte 2 liaisons et 2 doublets non liants $\\Rightarrow AX_2E_2$ : <strong>coudée</strong>, angle $\\approx 104{,}5°$ (légèrement inférieur à 109,5° car les doublets non liants sont plus répulsifs).<br>
• $H_2S$ : isostructural de l'eau, $AX_2E_2$, coudée ($\\approx 92°$).<br>
• $NH_3$ : 3 liaisons + 1 doublet non liant $\\Rightarrow AX_3E$ : <strong>pyramide trigonale</strong>, angle $\\approx 107°$.<br>
• $CO_2$ : $O$=$C$=$O$, deux doubles liaisons, pas de doublet libre sur C $\\Rightarrow AX_2$ : <strong>linéaire</strong>, $180°$.<br>
• $CH_4$ : $AX_4$ : <strong>tétraédrique</strong>, $109{,}5°$.</p>
<p><strong>4. Polarité.</strong> Une molécule est polaire si la somme vectorielle de ses moments de liaison est non nulle.<br>
• $H_2O$ et $H_2S$ : coudées, liaisons polarisées vers O (ou S) : moments qui s'ajoutent $\\Rightarrow$ <strong>polaires</strong> ($H_2S$ faiblement, car $\\chi(S)$ proche de $\\chi(H)$).<br>
• $NH_3$ : pyramidale, $\\chi(N) &gt; \\chi(H)$ : <strong>polaire</strong> (le doublet libre renforce le moment).<br>
• $CO_2$ : liaisons C=O très polarisées mais <strong>géométrie linéaire centrosymétrique</strong> : les deux moments s'annulent, molécule <strong>apolaire</strong>.<br>
• $CH_4$ : tétraèdre régulier (et $\\chi(C) \\approx \\chi(H)$) : <strong>apolaire</strong>.<br>
<em>Calcul pour l'eau :</em> les deux moments de liaison, d'intensité $\\mu_{OH}$, font entre eux l'angle $\\theta = 104{,}5°$ ; leur résultante vaut $\\mu = 2\\mu_{OH}\\cos(\\theta/2)$, d'où
$$\\mu_{OH} = \\frac{1{,}85}{2\\cos(52{,}25°)} = \\frac{1{,}85}{2 \\times 0{,}612} \\approx 1{,}51\\ \\text{D} = 5{,}05 \\cdot 10^{-30}\\ \\text{C m}$$
Caractère ionique : on écrit $\\mu_{OH} = \\delta e \\cdot d$, soit $\\delta = \\dfrac{5{,}05 \\cdot 10^{-30}}{1{,}6 \\cdot 10^{-19} \\times 96 \\cdot 10^{-12}} \\approx 0{,}33$ : la liaison O–H possède environ <strong>33 % de caractère ionique</strong> — fortement polarisée, mais bien covalente.</p>
<p><strong>5. Températures d'ébullition.</strong> Faire bouillir un liquide exige de rompre les interactions intermoléculaires :<br>
• $CH_4$, apolaire et peu polarisable : seules les forces de <strong>London</strong> (dispersion), très faibles $\\Rightarrow -161$ °C.<br>
• $H_2S$, polaire : London (nuage électronique plus gros, S de 3ᵉ période) + interactions de <strong>Keesom/Debye</strong> $\\Rightarrow -60$ °C.<br>
• $NH_3$ : s'y ajoutent des <strong>liaisons hydrogène</strong> N–H⋯N $\\Rightarrow -33$ °C.<br>
• $H_2O$ : liaisons hydrogène O–H⋯O <em>plus fortes</em> (O plus électronégatif) et <em>plus nombreuses</em> : 2 atomes H donneurs <em>et</em> 2 doublets accepteurs par molécule, soit un réseau tridimensionnel d'environ 4 liaisons H par molécule $\\Rightarrow 100$ °C.<br>
L'anomalie $H_2O$ vs $H_2S$ montre que la liaison hydrogène ($\\approx 20$ kJ/mol) domine très largement le supplément de forces de London de $H_2S$ : sans elle, l'eau bouillirait vers $-80$ °C et la vie telle que nous la connaissons serait impossible.</p>
<p><strong>6. L'eau solvant.</strong> L'eau est un solvant <strong>polaire</strong> ($\\mu$ élevé), <strong>protique</strong> (donneur et accepteur de liaisons H) et <strong>dissociant</strong> (permittivité relative $\\varepsilon_r \\approx 80$, qui divise par 80 les attractions électrostatiques).<br>
• $NaCl$ : l'eau sépare les ions (dissociation favorisée par $\\varepsilon_r$ élevé), puis les stabilise par <strong>solvatation ion-dipôle</strong> (hydratation).<br>
• Éthanol : miscible en toutes proportions grâce aux <strong>liaisons hydrogène</strong> avec le groupe –OH.<br>
• Cyclohexane : apolaire, n'offre que des interactions de London, incapables de compenser la rupture du réseau de liaisons H de l'eau $\\Rightarrow$ quasi insoluble. D'où l'adage : <em>« qui se ressemble s'assemble »</em>.</p>
</details>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // THERMODYNAMIQUE CHIMIQUE — synthèse de l'ammoniac (Haber-Bosch)
  // ══════════════════════════════════════════════════════════════
  {
    id: 'ch-ch-thermo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Synthèse de l\'ammoniac : étude thermodynamique complète',
            contenu: `<strong>Énoncé.</strong> On étudie la synthèse industrielle de l'ammoniac (procédé Haber-Bosch) :
$$N_2(g) + 3\\,H_2(g) \\rightleftharpoons 2\\,NH_3(g)$$
<p><em>Données à 298 K :</em> $\\Delta_f H^\\circ(NH_3, g) = -46{,}1$ kJ/mol ; entropies molaires standard $S_m^\\circ$ (J K⁻¹ mol⁻¹) : $N_2(g)$ : 191,6 ; $H_2(g)$ : 130,7 ; $NH_3(g)$ : 192,8. $R = 8{,}314$ J K⁻¹ mol⁻¹ ; $P^\\circ = 1$ bar. Les gaz sont supposés parfaits.</p>
<p><strong>1.</strong> Calculer l'enthalpie standard de réaction $\\Delta_r H^\\circ(298)$ et l'entropie standard de réaction $\\Delta_r S^\\circ(298)$. Commenter le signe de chacune.</p>
<p><strong>2.</strong> En déduire $\\Delta_r G^\\circ(298)$ puis la constante d'équilibre $K^\\circ(298)$.</p>
<p><strong>3.</strong> Dans l'approximation d'Ellingham, calculer $K^\\circ(700\\ \\text{K})$. Retrouver le sens de variation de $K^\\circ$ avec $T$ à l'aide de la relation de Van't Hoff, et commenter.</p>
<p><strong>4.</strong> À 700 K, sous une pression totale maintenue à $P = 100$ bar, un réacteur contient $1{,}0$ mol de $N_2$, $3{,}0$ mol de $H_2$ et $1{,}0$ mol de $NH_3$.<br>
a) Rappeler l'expression du potentiel chimique d'un gaz parfait dans un mélange et en déduire celle du quotient réactionnel $Q$ ; le calculer.<br>
b) Calculer l'affinité chimique $\\mathcal{A}$ et conclure sur le sens d'évolution spontanée du système.</p>
<p><strong>5.</strong> Prévoir (en justifiant par $K^\\circ$, $Q$ ou les lois de modération) l'effet sur l'équilibre : a) d'une augmentation isotherme de la pression totale ; b) d'une élévation de température à pression constante ; c) de l'ajout d'un gaz inerte à $T$ et $V$ constants. d) En déduire les conditions industrielles optimales et le rôle exact du catalyseur au fer.</p>
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<p><strong>1. Grandeurs standard de réaction.</strong> Par la loi de Hess, $\\Delta_r H^\\circ = \\sum_i \\nu_i \\Delta_f H_i^\\circ$ ; les corps simples $N_2$ et $H_2$ ont une enthalpie de formation nulle :
$$\\Delta_r H^\\circ(298) = 2 \\times (-46{,}1) = -92{,}2\\ \\text{kJ/mol}$$
$$\\Delta_r S^\\circ(298) = 2 \\times 192{,}8 - 191{,}6 - 3 \\times 130{,}7 = -198{,}1\\ \\text{J K}^{-1}\\text{mol}^{-1}$$
La réaction est <strong>exothermique</strong> (formation de liaisons N–H plus stables). $\\Delta_r S^\\circ &lt; 0$ : cohérent avec $\\Delta n_{gaz} = 2 - 4 = -2 &lt; 0$, la quantité de gaz — donc le désordre — diminue.</p>
<p><strong>2. Constante d'équilibre à 298 K.</strong>
$$\\Delta_r G^\\circ(298) = \\Delta_r H^\\circ - T\\Delta_r S^\\circ = -92{,}2 + 298 \\times 0{,}1981 = -33{,}2\\ \\text{kJ/mol}$$
$$K^\\circ(298) = \\exp\\left(-\\frac{\\Delta_r G^\\circ}{RT}\\right) = \\exp\\left(\\frac{33\\,200}{8{,}314 \\times 298}\\right) \\approx e^{13{,}4} \\approx 6{,}5 \\cdot 10^{5}$$
À température ambiante, la synthèse est très favorable thermodynamiquement.</p>
<p><strong>3. Effet de la température.</strong> Approximation d'Ellingham : $\\Delta_r H^\\circ$ et $\\Delta_r S^\\circ$ indépendants de $T$. Alors :
$$\\Delta_r G^\\circ(700) = -92{,}2 + 700 \\times 0{,}1981 = +46{,}5\\ \\text{kJ/mol} \\qquad \\Rightarrow \\qquad K^\\circ(700) = e^{-46\\,500/(8{,}314 \\times 700)} \\approx 3{,}4 \\cdot 10^{-4}$$
Relation de Van't Hoff : $\\dfrac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\dfrac{\\Delta_r H^\\circ}{RT^2} &lt; 0$ car la réaction est exothermique : $K^\\circ$ <strong>chute</strong> quand $T$ augmente (facteur $\\sim 10^9$ entre 298 et 700 K !). Paradoxe industriel : la thermodynamique voudrait travailler froid, mais à froid la cinétique est désespérément lente.</p>
<p><strong>4. Affinité et sens d'évolution.</strong><br>
<em>a)</em> Pour un gaz parfait $i$ dans le mélange : $\\mu_i = \\mu_i^\\circ(T) + RT\\ln\\dfrac{P_i}{P^\\circ}$, avec $P_i = x_i P$. En écrivant $\\mathcal{A} = -\\sum_i \\nu_i \\mu_i$, on obtient $\\mathcal{A} = RT\\ln\\dfrac{K^\\circ}{Q}$ avec
$$Q = \\frac{(P_{NH_3}/P^\\circ)^2}{(P_{N_2}/P^\\circ)(P_{H_2}/P^\\circ)^3}$$
Quantité totale : 5,0 mol, donc $P_{N_2} = P_{NH_3} = 0{,}20 \\times 100 = 20$ bar et $P_{H_2} = 60$ bar :
$$Q = \\frac{20^2}{20 \\times 60^3} = \\frac{400}{4{,}32 \\cdot 10^{6}} \\approx 9{,}3 \\cdot 10^{-5}$$
<em>b)</em> $\\mathcal{A} = RT\\ln\\dfrac{K^\\circ}{Q} = 8{,}314 \\times 700 \\times \\ln\\dfrac{3{,}4 \\cdot 10^{-4}}{9{,}3 \\cdot 10^{-5}} \\approx 5\\,820 \\times 1{,}30 \\approx +7{,}6$ kJ/mol.<br>
$\\mathcal{A} &gt; 0$ : évolution spontanée dans le <strong>sens direct</strong> (formation d'ammoniac), bien que $K^\\circ &lt; 1$ — c'est la comparaison $Q$ vs $K^\\circ$ qui décide, pas la seule valeur de $K^\\circ$.</p>
<p><strong>5. Déplacement et optimisation.</strong><br>
<em>a)</em> À $T$ fixé, multiplier $P$ par $\\lambda &gt; 1$ multiplie toutes les pressions partielles par $\\lambda$, donc $Q$ par $\\lambda^{\\Delta\\nu_{gaz}} = \\lambda^{-2} &lt; 1$ : $\\mathcal{A} = RT\\ln(K^\\circ/Q)$ devient positive, l'équilibre se déplace <strong>vers la formation de $NH_3$</strong> (sens de la diminution de quantité de gaz — loi de modération).<br>
<em>b)</em> $K^\\circ$ diminue avec $T$ (Van't Hoff, réaction exothermique) : déplacement <strong>vers la dissociation</strong> de l'ammoniac.<br>
<em>c)</em> À $T$ et $V$ constants, l'ajout d'un inerte ne change aucune pression partielle ($P_i = n_iRT/V$) : $Q$ inchangé, <strong>aucun déplacement</strong>.<br>
<em>d)</em> Conditions industrielles : <strong>haute pression</strong> (200–300 bar, favorable et sans effet sur $K^\\circ$), température <strong>modérée</strong> ($\\approx 450$ °C) — compromis entre une thermodynamique qui exige du froid et une cinétique qui exige du chaud — et <strong>catalyseur au fer</strong>, qui accélère l'atteinte de l'équilibre en abaissant l'énergie d'activation <em>mais ne déplace en rien l'équilibre</em> ($K^\\circ$ ne dépend que de $T$). On soutire en continu $NH_3$ par liquéfaction, ce qui abaisse $Q$ et relance la réaction, puis on recycle les gaz : l'optimisation joue sur tous les leviers à la fois.</p>
</details>`
          }
        ]
      }
    ]
  }
]
