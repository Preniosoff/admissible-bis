// Première générale — Spécialité Physique-Chimie
// Programme officiel MEN (réforme 2019)
// Types: def(DEF) prop(PROP) th(THM) form(FORM) meth(METH) ex(EX)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. MÉCANIQUE — forces, mouvement, gravitation (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-mecaniq', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Mécanique', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Description du mouvement',
      cartes: [
        { type:'def', label:'DEF', titre:'Référentiel et système',
          contenu:`Le <strong>système</strong> est l'objet (souvent ponctuel) dont on étudie le mouvement.<br>Un <strong>référentiel</strong> est un solide de référence muni d'une horloge, par rapport auquel on repère les positions et les dates.<br><strong>Référentiels usuels</strong> :<br><ul><li><strong>terrestre</strong> : lié au sol (chute, projectiles) ;</li><li><strong>géocentrique</strong> : centre de la Terre, axes vers des étoiles fixes (satellites, Lune) ;</li><li><strong>héliocentrique</strong> : centre du Soleil (planètes).</li></ul>Le mouvement est <strong>relatif</strong> : il dépend du référentiel choisi.` },
        { type:'def', label:'DEF', titre:'Vecteur position et trajectoire',
          contenu:`Dans un repère $(O,\\vec{i},\\vec{j},\\vec{k})$, le <strong>vecteur position</strong> est :<br>$$\\vec{OM}(t) = x(t)\\,\\vec{i} + y(t)\\,\\vec{j} + z(t)\\,\\vec{k}$$<br>La <strong>trajectoire</strong> est l'ensemble des positions successives du point $M$ au cours du temps.<br>Selon sa forme : mouvement <strong>rectiligne</strong> (droite), <strong>circulaire</strong> (cercle) ou <strong>curviligne</strong> (quelconque).` },
        { type:'def', label:'DEF', titre:'Vecteur vitesse',
          contenu:`Le <strong>vecteur vitesse</strong> est la dérivée du vecteur position par rapport au temps :<br>$$\\vec{v}(t) = \\frac{d\\vec{OM}}{dt} = \\dot{x}\\,\\vec{i} + \\dot{y}\\,\\vec{j} + \\dot{z}\\,\\vec{k}$$<br><strong>Direction</strong> : tangente à la trajectoire.<br><strong>Sens</strong> : celui du mouvement.<br><strong>Norme</strong> : $v = \\sqrt{\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2}$ en m/s.<br>Valeur approchée (méthode des points) : $v_i \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\,\\Delta t}$.` },
        { type:'def', label:'DEF', titre:'Vecteur accélération',
          contenu:`L'<strong>accélération</strong> est la dérivée du vecteur vitesse :<br>$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\ddot{x}\\,\\vec{i} + \\ddot{y}\\,\\vec{j} + \\ddot{z}\\,\\vec{k}$$<br>Unité : m/s² (ou m$\\cdot$s$^{-2}$).<br>Elle décrit la <strong>variation</strong> du vecteur vitesse (en norme <em>et</em> en direction).<br>Approximation : $\\vec{a}_i \\approx \\dfrac{\\vec{v}_{i+1} - \\vec{v}_{i-1}}{2\\,\\Delta t}$.` },
        { type:'meth', label:'METH', titre:'Construire un vecteur vitesse sur une chronophotographie',
          contenu:`1. Repérer trois positions consécutives $M_{i-1}$, $M_i$, $M_{i+1}$ séparées de $\\Delta t$.<br>2. La <strong>direction</strong> de $\\vec{v}_i$ est celle de $M_{i-1}M_{i+1}$.<br>3. La <strong>norme</strong> : $v_i = \\dfrac{M_{i-1}M_{i+1}}{2\\,\\Delta t}$ (mesurer la distance avec l'échelle).<br>4. Choisir une <strong>échelle des vitesses</strong> (ex. 1 cm $\\leftrightarrow$ 1 m/s) et tracer la flèche depuis $M_i$.` },
      ]
    },
    {
      titre: 'Forces et interactions',
      cartes: [
        { type:'def', label:'DEF', titre:'Force — modélisation par un vecteur',
          contenu:`Une <strong>force</strong> modélise une action mécanique. Elle est représentée par un vecteur caractérisé par :<br><ul><li><strong>point d'application</strong> ;</li><li><strong>direction</strong> ;</li><li><strong>sens</strong> ;</li><li><strong>valeur</strong> (intensité) en newtons (N).</li></ul>Une interaction est toujours <strong>réciproque</strong> (3ᵉ loi).` },
        { type:'form', label:'FORM', titre:'Forces usuelles',
          contenu:`<strong>Poids</strong> : $\\vec{P} = m\\,\\vec{g}$, vertical vers le bas, $P = mg$ (N).<br><strong>Réaction du support</strong> $\\vec{R}$ : composante normale $\\vec{N}$ (perpendiculaire) + force de frottement $\\vec{f}$ (tangentielle).<br><strong>Tension d'un fil</strong> $\\vec{T}$ : dirigée le long du fil.<br><strong>Poussée d'Archimède</strong> : $\\vec{F}_A$, verticale vers le haut, $F_A = \\rho_{\\text{fluide}}\\,V\\,g$.` },
        { type:'def', label:'DEF', titre:'Interaction gravitationnelle',
          contenu:`Deux corps ponctuels de masses $m_A$ et $m_B$, distants de $d$, s'attirent mutuellement avec des forces opposées de même valeur :<br>$$F = G\\,\\frac{m_A\\,m_B}{d^2}$$<br>$G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$ : constante de gravitation universelle.<br>$\\vec{F}_{A/B}$ est <strong>attractive</strong>, dirigée de $B$ vers $A$.` },
        { type:'prop', label:'PROP', titre:'Lien poids — gravitation',
          contenu:`Le poids d'un objet de masse $m$ à la surface d'un astre de masse $M$ et de rayon $R$ provient de l'attraction gravitationnelle :<br>$$mg = G\\,\\frac{M\\,m}{R^2} \\;\\Rightarrow\\; g = G\\,\\frac{M}{R^2}$$<br>Sur Terre : $g \\approx 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$. La valeur de $g$ dépend de l'astre, pas de l'objet.` },
        { type:'ex', label:'EX', titre:'Calcul de la force gravitationnelle Terre–Lune',
          contenu:`<strong>Données</strong> : $M_T = 5{,}97\\times10^{24}$ kg, $M_L = 7{,}35\\times10^{22}$ kg, $d = 3{,}84\\times10^{8}$ m.<br><strong>Calcul</strong> :<br>$$F = 6{,}67\\times10^{-11}\\times\\frac{5{,}97\\times10^{24}\\times7{,}35\\times10^{22}}{(3{,}84\\times10^{8})^2}$$<br>$F \\approx 1{,}98\\times10^{20}$ N. Cette force assure le mouvement quasi-circulaire de la Lune.` },
      ]
    },
    {
      titre: 'Lois de Newton',
      cartes: [
        { type:'th', label:'THM', titre:'Première loi — principe d\'inertie',
          contenu:`Dans un <strong>référentiel galiléen</strong>, si la somme des forces extérieures est nulle ($\\sum\\vec{F} = \\vec{0}$), alors le centre d'inertie du système est :<br><ul><li>soit <strong>au repos</strong> ;</li><li>soit en <strong>mouvement rectiligne uniforme</strong> ($\\vec{v} = \\overrightarrow{\\text{cte}}$).</li></ul>Réciproquement, si $\\vec{v}$ est constant, alors $\\sum\\vec{F} = \\vec{0}$ : le système est dit <strong>pseudo-isolé</strong>.` },
        { type:'th', label:'THM', titre:'Deuxième loi — principe fondamental',
          contenu:`Dans un référentiel galiléen, pour un système de masse $m$ constante :<br>$$\\sum \\vec{F}_{\\text{ext}} = m\\,\\vec{a}$$<br>La somme des forces impose l'accélération. $\\vec{a}$ a <strong>même direction et même sens</strong> que la résultante des forces.<br>Conséquence : connaître les forces $\\Rightarrow$ connaître $\\vec{a}$, donc $\\vec{v}$ et la trajectoire.` },
        { type:'th', label:'THM', titre:'Troisième loi — actions réciproques',
          contenu:`Si un corps $A$ exerce sur un corps $B$ une force $\\vec{F}_{A/B}$, alors $B$ exerce simultanément sur $A$ une force :<br>$$\\vec{F}_{B/A} = -\\vec{F}_{A/B}$$<br>Même droite d'action, même valeur, sens opposés. Ces deux forces s'appliquent sur des <strong>corps différents</strong> (elles ne se compensent donc pas).` },
        { type:'meth', label:'METH', titre:'Appliquer la 2ᵉ loi de Newton',
          contenu:`1. Définir le <strong>système</strong> et le <strong>référentiel</strong> (supposé galiléen).<br>2. Faire le <strong>bilan des forces</strong> extérieures (schéma).<br>3. Écrire $\\sum\\vec{F} = m\\vec{a}$, puis <strong>projeter</strong> sur les axes.<br>4. En déduire les composantes de $\\vec{a}$.<br>5. Intégrer : $\\vec{a}\\to\\vec{v}$ (avec $\\vec{v}_0$) $\\to\\vec{OM}$ (avec position initiale).` },
        { type:'ex', label:'EX', titre:'Chute libre verticale',
          contenu:`Une bille lâchée sans vitesse initiale, frottements négligés.<br>Bilan : seul le poids $\\vec{P} = m\\vec{g}$.<br>2ᵉ loi : $m\\vec{a} = m\\vec{g} \\Rightarrow \\vec{a} = \\vec{g}$ (indépendant de $m$ !).<br>Sur un axe vertical descendant : $a = g$, donc $v(t) = gt$ et $z(t) = \\frac{1}{2}gt^2$.<br>Au bout de $t = 2$ s : $v = 9{,}81\\times2 \\approx 19{,}6$ m/s.` },
      ]
    },
    {
      titre: 'Mouvements dans un champ uniforme',
      cartes: [
        { type:'meth', label:'METH', titre:'Établir les équations d\'un projectile',
          contenu:`Lancer avec $\\vec{v}_0$ faisant l'angle $\\alpha$ avec l'horizontale, frottements négligés.<br>Accélération : $\\vec{a} = \\vec{g}$ donc $a_x = 0$, $a_y = -g$.<br>Vitesses : $v_x = v_0\\cos\\alpha$ (constante), $v_y = -gt + v_0\\sin\\alpha$.<br>Positions : $x(t) = (v_0\\cos\\alpha)\\,t$ et $y(t) = -\\tfrac{1}{2}gt^2 + (v_0\\sin\\alpha)\\,t$.` },
        { type:'prop', label:'PROP', titre:'Équation de la trajectoire (parabole)',
          contenu:`En éliminant $t$ entre $x(t)$ et $y(t)$ :<br>$$y = -\\frac{g}{2v_0^2\\cos^2\\alpha}\\,x^2 + (\\tan\\alpha)\\,x$$<br>La trajectoire est une <strong>parabole</strong> (terme en $x^2$). Le sommet correspond à la flèche (hauteur maximale, $v_y = 0$).` },
        { type:'ex', label:'EX', titre:'Portée d\'un tir horizontal depuis une table',
          contenu:`Bille lancée horizontalement à $v_0 = 2{,}0$ m/s d'une table de hauteur $h = 0{,}80$ m.<br>Durée de chute : $h = \\tfrac{1}{2}gt^2 \\Rightarrow t = \\sqrt{2h/g} = \\sqrt{2\\times0{,}80/9{,}81} \\approx 0{,}40$ s.<br>Portée : $x = v_0\\,t = 2{,}0\\times0{,}40 \\approx 0{,}80$ m.` },
        { type:'def', label:'DEF', titre:'Champ électrostatique uniforme',
          contenu:`Entre deux plaques parallèles soumises à une tension $U$ et distantes de $d$, le champ électrique est uniforme :<br>$$E = \\frac{U}{d} \\quad (\\mathrm{V/m})$$<br>Une charge $q$ y subit la force $\\vec{F} = q\\vec{E}$. Pour $q>0$, $\\vec{F}$ et $\\vec{E}$ sont de même sens ; pour $q<0$, sens opposés. Le mouvement d'une particule chargée y est analogue à un projectile (trajectoire parabolique).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. ONDES MÉCANIQUES (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-onde', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Ondes mécaniques', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Propagation d\'une onde',
      cartes: [
        { type:'def', label:'DEF', titre:'Onde mécanique progressive',
          contenu:`Une <strong>onde mécanique progressive</strong> est le phénomène de propagation d'une perturbation dans un milieu matériel, <strong>sans transport de matière</strong> mais avec transport d'<strong>énergie</strong>.<br>Exemples : vague, son, onde le long d'une corde, onde sismique.<br>Le milieu se déforme localement puis revient à sa position : seul l'« état de perturbation » se déplace.` },
        { type:'def', label:'DEF', titre:'Ondes transversale et longitudinale',
          contenu:`<strong>Transversale</strong> : la perturbation est <em>perpendiculaire</em> à la direction de propagation (corde, vague).<br><strong>Longitudinale</strong> : la perturbation est <em>parallèle</em> à la propagation (son dans l'air, compression d'un ressort).<br>La nature (transversale/longitudinale) dépend de l'onde et du milieu.` },
        { type:'def', label:'DEF', titre:'Célérité d\'une onde',
          contenu:`La <strong>célérité</strong> $v$ est la vitesse de propagation de la perturbation dans le milieu :<br>$$v = \\frac{d}{\\Delta t} \\quad (\\mathrm{m/s})$$<br>Elle <strong>dépend du milieu</strong> (nature, température, tension…) et <strong>non</strong> de l'amplitude.<br>Ordres de grandeur : son dans l'air $\\approx 340$ m/s ; dans l'eau $\\approx 1500$ m/s.` },
        { type:'prop', label:'PROP', titre:'Retard temporel',
          contenu:`Un point $M_2$ situé à la distance $d$ d'un point $M_1$ (dans le sens de propagation) reproduit le mouvement de $M_1$ avec un <strong>retard</strong> :<br>$$\\tau = \\frac{d}{v}$$<br>On a donc $y_{M_2}(t) = y_{M_1}(t - \\tau)$ : même perturbation, décalée dans le temps.` },
        { type:'ex', label:'EX', titre:'Mesure d\'une distance par écho',
          contenu:`Un sonar émet un son qui revient après $\\Delta t = 0{,}40$ s. Célérité dans l'eau $v = 1500$ m/s.<br>Le son fait l'aller-retour : $2d = v\\,\\Delta t$.<br>$$d = \\frac{v\\,\\Delta t}{2} = \\frac{1500\\times0{,}40}{2} = 300\\ \\text{m}$$` },
      ]
    },
    {
      titre: 'Ondes périodiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Onde périodique — période et fréquence',
          contenu:`Une onde est <strong>périodique</strong> si la perturbation se répète identique à elle-même.<br><strong>Période temporelle</strong> $T$ (s) : durée d'un motif élémentaire.<br><strong>Fréquence</strong> $f$ (Hz) : nombre de motifs par seconde,<br>$$f = \\frac{1}{T}$$<br>Une onde <strong>sinusoïdale</strong> est le cas particulier important d'onde périodique.` },
        { type:'def', label:'DEF', titre:'Longueur d\'onde',
          contenu:`La <strong>longueur d'onde</strong> $\\lambda$ (m) est la plus petite distance séparant deux points vibrant en phase ; c'est la <strong>période spatiale</strong> du phénomène.<br>C'est aussi la distance parcourue par l'onde pendant une période $T$.` },
        { type:'form', label:'FORM', titre:'Relation fondamentale des ondes',
          contenu:`$$\\boxed{\\;\\lambda = v\\,T = \\frac{v}{f}\\;}$$<br>$\\lambda$ : longueur d'onde (m) &middot; $v$ : célérité (m/s) &middot; $T$ : période (s) &middot; $f$ : fréquence (Hz).<br><strong>Attention</strong> : si l'onde change de milieu, $f$ est <em>conservée</em> mais $v$ (donc $\\lambda$) change.` },
        { type:'meth', label:'METH', titre:'Exploiter un signal périodique mesuré',
          contenu:`Sur un enregistrement (oscilloscope, micro) :<br>1. Repérer un <strong>motif</strong> complet, mesurer sa durée $\\to T$.<br>2. Calculer $f = 1/T$.<br>3. Si la célérité $v$ est connue, en déduire $\\lambda = v/f$.<br><strong>Astuce</strong> : mesurer $n$ périodes et diviser par $n$ pour réduire l'incertitude.` },
        { type:'ex', label:'EX', titre:'Onde sonore : du Hz à la longueur d\'onde',
          contenu:`Un diapason émet à $f = 440$ Hz dans l'air ($v = 340$ m/s).<br>Période : $T = \\dfrac{1}{440} \\approx 2{,}3\\times10^{-3}$ s.<br>Longueur d'onde : $\\lambda = \\dfrac{v}{f} = \\dfrac{340}{440} \\approx 0{,}77$ m.` },
      ]
    },
    {
      titre: 'Le son',
      cartes: [
        { type:'def', label:'DEF', titre:'Caractéristiques d\'un son',
          contenu:`Le son est une onde mécanique <strong>longitudinale</strong> (compressions/dilatations de l'air).<br><strong>Hauteur</strong> : liée à la <strong>fréquence fondamentale</strong> (grave $\\to$ aiguë).<br><strong>Timbre</strong> : lié à la composition en <strong>harmoniques</strong> (multiples de $f$) ; distingue deux instruments à même hauteur.<br><strong>Audible</strong> : 20 Hz – 20 kHz environ.` },
        { type:'def', label:'DEF', titre:'Intensité et niveau sonore',
          contenu:`L'<strong>intensité sonore</strong> $I$ (W/m²) mesure la puissance reçue par unité de surface.<br>Le <strong>niveau d'intensité sonore</strong> $L$ (en décibels, dB) :<br>$$L = 10\\,\\log\\!\\left(\\frac{I}{I_0}\\right), \\quad I_0 = 10^{-12}\\ \\mathrm{W/m^2}$$<br>$I_0$ : seuil d'audibilité. L'échelle est <strong>logarithmique</strong>.` },
        { type:'prop', label:'PROP', titre:'Propriété du niveau sonore',
          contenu:`Si l'intensité est <strong>multipliée par 10</strong>, le niveau augmente de <strong>10 dB</strong> :<br>$$L' - L = 10\\,\\log\\!\\left(\\frac{10\\,I}{I}\\right) = 10\\ \\text{dB}$$<br>Doubler l'intensité ($\\times 2$) ajoute $\\approx 3$ dB. Le seuil de douleur est $\\approx 120$ dB.` },
        { type:'ex', label:'EX', titre:'Calcul d\'un niveau sonore',
          contenu:`Une intensité $I = 10^{-6}$ W/m² (rue passante).<br>$$L = 10\\,\\log\\!\\left(\\frac{10^{-6}}{10^{-12}}\\right) = 10\\,\\log(10^{6}) = 10\\times6 = 60\\ \\text{dB}$$` },
      ]
    },
    {
      titre: 'Caractère ondulatoire — diffraction et interférences',
      cartes: [
        { type:'def', label:'DEF', titre:'Diffraction',
          contenu:`La <strong>diffraction</strong> est l'étalement d'une onde lorsqu'elle rencontre une ouverture ou un obstacle de taille comparable à $\\lambda$.<br>Elle est d'autant plus marquée que l'ouverture est <strong>petite</strong> (devant $\\lambda$).<br>C'est une signature du <strong>caractère ondulatoire</strong> (vagues, son, lumière).` },
        { type:'prop', label:'PROP', titre:'Conservation de la fréquence',
          contenu:`Lors de la diffraction (ou du changement de milieu), la <strong>fréquence</strong> $f$ de l'onde est <strong>conservée</strong>.<br>Seules la célérité et la longueur d'onde peuvent changer (changement de milieu). La couleur d'une lumière, liée à $f$, est donc inchangée par diffraction.` },
        { type:'def', label:'DEF', titre:'Interférences',
          contenu:`Lorsque deux ondes de même fréquence se superposent, leurs amplitudes s'ajoutent :<br><ul><li><strong>constructives</strong> : amplitude maximale (les ondes sont en phase) ;</li><li><strong>destructives</strong> : amplitude minimale ou nulle (en opposition de phase).</li></ul>On observe des zones d'amplitude renforcée et d'autres atténuées (figure d'interférences).` },
        { type:'ex', label:'EX', titre:'Reconnaître une figure de diffraction',
          contenu:`Une onde à la surface de l'eau ($\\lambda = 2$ cm) traverse une ouverture de largeur $a = 1$ cm.<br>Comme $a \\lesssim \\lambda$, la diffraction est nette : au-delà de la fente, l'onde devient quasi circulaire et se propage dans toutes les directions. Si $a \\gg \\lambda$, l'onde passe sans s'étaler.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. CHIMIE ORGANIQUE (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-chimorg', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Chimie organique', ordre: 3, enrich: true,
  sections: [
    {
      titre: 'Squelette carboné',
      cartes: [
        { type:'def', label:'DEF', titre:'Chaîne carbonée et formules',
          contenu:`La <strong>chimie organique</strong> étudie les composés du carbone.<br><strong>Formule brute</strong> : nombre d'atomes (ex. $\\mathrm{C_2H_6O}$).<br><strong>Formule semi-développée</strong> : liaisons explicites sauf C–H.<br><strong>Formule topologique</strong> : la chaîne est un trait brisé, chaque sommet/extrémité = un C, les H portés par C sont implicites.` },
        { type:'def', label:'DEF', titre:'Chaîne saturée, insaturée, cyclique',
          contenu:`<strong>Saturée</strong> : uniquement des liaisons simples C–C (alcanes).<br><strong>Insaturée</strong> : présence d'au moins une liaison multiple (double C=C, triple C≡C).<br><strong>Linéaire</strong> / <strong>ramifiée</strong> / <strong>cyclique</strong> selon la disposition.<br>Alcanes : $\\mathrm{C_nH_{2n+2}}$.` },
        { type:'def', label:'DEF', titre:'Isomérie',
          contenu:`Des <strong>isomères</strong> ont la même formule brute mais des structures différentes.<br><strong>Isomérie de constitution</strong> : enchaînement différent (de chaîne, de position, de fonction).<br>Ex. $\\mathrm{C_4H_{10}}$ : butane (linéaire) et 2-méthylpropane (ramifié) sont deux isomères.<br>Les isomères ont des <strong>propriétés différentes</strong>.` },
        { type:'meth', label:'METH', titre:'Nommer un alcane (nomenclature IUPAC)',
          contenu:`1. Identifier la <strong>chaîne principale</strong> (la plus longue) $\\to$ préfixe : méth(1), éth(2), prop(3), but(4), pent(5), hex(6)... + suffixe <strong>-ane</strong>.<br>2. <strong>Numéroter</strong> la chaîne pour donner aux ramifications les plus petits indices.<br>3. Nommer les <strong>substituants alkyles</strong> (méthyl, éthyl...) avec leur indice.<br>Ex. : $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH_3}$ $\\to$ 2-méthylbutane.` },
        { type:'ex', label:'EX', titre:'Donner les isomères de C₅H₁₂',
          contenu:`Formule brute $\\mathrm{C_5H_{12}}$ (alcane). Trois isomères :<br><ul><li><strong>pentane</strong> : $\\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_2{-}CH_3}$ ;</li><li><strong>2-méthylbutane</strong> ;</li><li><strong>2,2-diméthylpropane</strong> (néopentane).</li></ul>Même formule brute, structures distinctes $\\Rightarrow$ propriétés (T° d'ébullition) différentes.` },
      ]
    },
    {
      titre: 'Groupes caractéristiques et familles',
      cartes: [
        { type:'def', label:'DEF', titre:'Principales familles organiques',
          contenu:`<strong>Alcool</strong> $\\mathrm{R{-}OH}$ &middot; <strong>Aldéhyde</strong> $\\mathrm{R{-}CHO}$ &middot; <strong>Cétone</strong> $\\mathrm{R{-}CO{-}R'}$<br><strong>Acide carboxylique</strong> $\\mathrm{R{-}COOH}$ &middot; <strong>Ester</strong> $\\mathrm{R{-}COO{-}R'}$<br><strong>Amine</strong> $\\mathrm{R{-}NH_2}$ &middot; <strong>Amide</strong> $\\mathrm{R{-}CO{-}NH_2}$<br>Le <strong>groupe caractéristique</strong> détermine la famille et la réactivité.` },
        { type:'def', label:'DEF', titre:'Classe d\'un alcool',
          contenu:`Selon le nombre de carbones liés au carbone porteur du groupe $\\mathrm{-OH}$ :<br><ul><li><strong>primaire</strong> : 1 C voisin ;</li><li><strong>secondaire</strong> : 2 C voisins ;</li><li><strong>tertiaire</strong> : 3 C voisins.</li></ul>La classe oriente l'oxydation : primaire $\\to$ aldéhyde puis acide ; secondaire $\\to$ cétone ; tertiaire $\\to$ non oxydable (dans ces conditions).` },
        { type:'meth', label:'METH', titre:'Identifier une famille par spectroscopie IR',
          contenu:`La spectroscopie <strong>IR</strong> repère les groupes via les bandes d'absorption (nombre d'onde, cm⁻¹) :<br><ul><li>$\\mathrm{O{-}H}$ alcool : 3200–3600 (large) ;</li><li>$\\mathrm{C=O}$ : 1700–1750 (fine, intense) ;</li><li>$\\mathrm{O{-}H}$ acide : 2500–3300 (très large).</li></ul>Une bande $\\mathrm{C=O}$ + $\\mathrm{O{-}H}$ large $\\Rightarrow$ acide carboxylique.` },
        { type:'meth', label:'METH', titre:'Lire un spectre RMN du proton',
          contenu:`La <strong>RMN ¹H</strong> renseigne sur l'environnement des H :<br><ul><li>nombre de <strong>signaux</strong> = nombre de groupes de H équivalents ;</li><li><strong>déplacement chimique</strong> $\\delta$ (ppm) : type de voisinage ;</li><li><strong>courbe d'intégration</strong> : proportion de H ;</li><li><strong>multiplicité</strong> (règle des $n+1$ pour $n$ H voisins) : doublet, triplet...</li></ul>` },
        { type:'ex', label:'EX', titre:'Attribuer un spectre RMN simple',
          contenu:`Éthanol $\\mathrm{CH_3{-}CH_2{-}OH}$ : trois groupes de H $\\Rightarrow$ trois signaux.<br><ul><li>$\\mathrm{CH_3}$ (3H) : triplet (2 H voisins) ;</li><li>$\\mathrm{CH_2}$ (2H) : quadruplet (3 H voisins) ;</li><li>$\\mathrm{OH}$ (1H) : singulet.</li></ul>Intégrations dans le rapport 3 : 2 : 1.` },
      ]
    },
    {
      titre: 'Modélisation des transformations',
      cartes: [
        { type:'def', label:'DEF', titre:'Modification de chaîne / de groupe',
          contenu:`Une transformation en chimie organique modifie :<br><ul><li>la <strong>chaîne carbonée</strong> (allongement, raccourcissement, cyclisation) ;</li><li>ou le <strong>groupe caractéristique</strong> (substitution, addition, élimination).</li></ul>On suit la transformation des réactifs vers les produits par le bilan de matière.` },
        { type:'def', label:'DEF', titre:'Catégories de réactions',
          contenu:`<strong>Substitution</strong> : un atome/groupe remplace un autre (squelette inchangé).<br><strong>Addition</strong> : ajout d'atomes sur une liaison multiple (l'insaturation disparaît).<br><strong>Élimination</strong> : départ d'atomes créant une liaison multiple (formation d'insaturation).` },
        { type:'meth', label:'METH', titre:'Reconnaître substitution / addition / élimination',
          contenu:`Comparer réactif et produit :<br>1. Le <strong>nombre d'insaturations</strong> diminue $\\Rightarrow$ <strong>addition</strong>.<br>2. Il augmente $\\Rightarrow$ <strong>élimination</strong>.<br>3. Il est inchangé, un groupe a été échangé $\\Rightarrow$ <strong>substitution</strong>.` },
        { type:'ex', label:'EX', titre:'Hydratation d\'un alcène',
          contenu:`Addition d'eau sur l'éthène :<br>$$\\mathrm{CH_2{=}CH_2 + H_2O \\rightarrow CH_3{-}CH_2{-}OH}$$<br>La double liaison C=C disparaît (addition) : formation d'éthanol. Le nombre d'insaturations passe de 1 à 0.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. SUIVI D'UNE TRANSFORMATION CHIMIQUE (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-suivi', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Suivi d\'une transformation chimique', ordre: 4, enrich: false,
  sections: [
    {
      titre: 'Quantité de matière et concentration',
      cartes: [
        { type:'def', label:'DEF', titre:'Quantité de matière',
          contenu:`La <strong>quantité de matière</strong> $n$ (en mol) compte les entités via la constante d'Avogadro $N_A = 6{,}02\\times10^{23}\\ \\mathrm{mol^{-1}}$.<br>$$n = \\frac{N}{N_A} = \\frac{m}{M}$$<br>$m$ : masse (g) &middot; $M$ : masse molaire (g/mol). Pour un gaz : $n = \\dfrac{V}{V_m}$ avec $V_m$ volume molaire.` },
        { type:'form', label:'FORM', titre:'Concentrations',
          contenu:`<strong>Concentration en quantité de matière</strong> :<br>$$c = \\frac{n}{V} \\quad (\\mathrm{mol/L})$$<br><strong>Concentration en masse</strong> :<br>$$c_m = \\frac{m}{V} \\quad (\\mathrm{g/L})$$<br>Lien : $c_m = c\\times M$.` },
        { type:'meth', label:'METH', titre:'Préparer une solution par dissolution',
          contenu:`Pour préparer un volume $V$ de concentration $c$ d'un soluté de masse molaire $M$ :<br>1. Calculer $n = c\\times V$ puis $m = n\\times M$.<br>2. <strong>Peser</strong> la masse $m$.<br>3. Dissoudre dans un peu d'eau dans une <strong>fiole jaugée</strong> de volume $V$.<br>4. Compléter jusqu'au <strong>trait de jauge</strong>, homogénéiser.` },
        { type:'meth', label:'METH', titre:'Préparer une solution par dilution',
          contenu:`Lors d'une dilution, la quantité de soluté est <strong>conservée</strong> :<br>$$c_{\\text{mère}}\\,V_{\\text{prél}} = c_{\\text{fille}}\\,V_{\\text{fille}}$$<br>1. Calculer $V_{\\text{prél}} = \\dfrac{c_{\\text{fille}}\\,V_{\\text{fille}}}{c_{\\text{mère}}}$.<br>2. Prélever à la <strong>pipette jaugée</strong>, verser en fiole jaugée, compléter au trait.` },
        { type:'ex', label:'EX', titre:'Calcul d\'un facteur de dilution',
          contenu:`On veut $V_{\\text{fille}} = 100$ mL à $c_{\\text{fille}} = 0{,}10$ mol/L à partir d'une solution mère à $c_{\\text{mère}} = 1{,}0$ mol/L.<br>$$V_{\\text{prél}} = \\frac{0{,}10\\times100}{1{,}0} = 10\\ \\text{mL}$$<br>Facteur de dilution $F = \\dfrac{c_{\\text{mère}}}{c_{\\text{fille}}} = 10$.` },
      ]
    },
    {
      titre: 'Avancement d\'une réaction',
      cartes: [
        { type:'def', label:'DEF', titre:'Avancement',
          contenu:`L'<strong>avancement</strong> $x$ (en mol) mesure le degré d'évolution d'une réaction. Pour la réaction $a\\,A + b\\,B \\to c\\,C + d\\,D$, lorsque l'avancement vaut $x$ :<br>$$n(A) = n_0(A) - a\\,x \\qquad n(C) = n_0(C) + c\\,x$$<br>Les réactifs diminuent ($-$), les produits augmentent ($+$), proportionnellement aux coefficients.` },
        { type:'meth', label:'METH', titre:'Construire un tableau d\'avancement',
          contenu:`1. Écrire l'équation <strong>équilibrée</strong>.<br>2. Ligne « état initial » : quantités $n_0$.<br>3. Ligne « en cours » : $n_0 - \\nu_i\\,x$ (réactifs) ou $n_0 + \\nu_i\\,x$ (produits).<br>4. Ligne « état final » : remplacer $x$ par $x_{\\max}$.` },
        { type:'def', label:'DEF', titre:'Avancement maximal et réactif limitant',
          contenu:`L'<strong>avancement maximal</strong> $x_{\\max}$ est atteint quand un réactif est totalement consommé : c'est le <strong>réactif limitant</strong>.<br>On le détermine en résolvant $n_i(x) = 0$ pour chaque réactif et en prenant la <strong>plus petite</strong> valeur de $x$.<br>Mélange <strong>stœchiométrique</strong> : tous les réactifs s'épuisent simultanément.` },
        { type:'ex', label:'EX', titre:'Déterminer le réactif limitant',
          contenu:`Réaction $\\mathrm{2\\,H_2 + O_2 \\to 2\\,H_2O}$ avec $n_0(H_2) = 3$ mol et $n_0(O_2) = 2$ mol.<br>$\\mathrm{H_2}$ s'annule pour $3 - 2x = 0 \\Rightarrow x = 1{,}5$ mol.<br>$\\mathrm{O_2}$ s'annule pour $2 - x = 0 \\Rightarrow x = 2$ mol.<br>Le plus petit : $x_{\\max} = 1{,}5$ mol $\\Rightarrow$ $\\mathrm{H_2}$ est <strong>limitant</strong>. Reste $2 - 1{,}5 = 0{,}5$ mol d'$\\mathrm{O_2}$.` },
      ]
    },
    {
      titre: 'Titrage',
      cartes: [
        { type:'def', label:'DEF', titre:'Principe du titrage',
          contenu:`Un <strong>titrage</strong> détermine la concentration inconnue d'une espèce (le titré) en la faisant réagir totalement avec une espèce de concentration connue (le titrant).<br>La réaction support doit être <strong>totale, rapide et unique</strong>.<br>L'<strong>équivalence</strong> est l'instant où réactifs titrant et titré ont été introduits dans les proportions stœchiométriques.` },
        { type:'th', label:'THM', titre:'Relation à l\'équivalence',
          contenu:`À l'équivalence d'un titrage $a\\,A + b\\,B \\to$ produits ($A$ titré, $B$ titrant) :<br>$$\\frac{n_A}{a} = \\frac{n_B^{\\text{éq}}}{b}$$<br>Cas fréquent $a=b=1$ : $n_A = n_B^{\\text{éq}}$, soit $c_A V_A = c_B V_{B\\text{éq}}$.<br>$V_{B\\text{éq}}$ : volume de titrant versé à l'équivalence.` },
        { type:'meth', label:'METH', titre:'Repérer l\'équivalence',
          contenu:`<strong>Colorimétrique</strong> : changement de couleur d'un indicateur ou de la solution.<br><strong>pH-métrique</strong> : saut de pH brutal (point d'inflexion de la courbe $pH = f(V)$), méthode des tangentes.<br><strong>Conductimétrique</strong> : rupture de pente de $\\sigma = f(V)$.<br>Avant l'équivalence, le réactif limitant est le titrant ; après, c'est l'inverse.` },
        { type:'ex', label:'EX', titre:'Titrage acide–base',
          contenu:`On titre $V_A = 20{,}0$ mL d'acide ($c_A$ inconnue) par de la soude à $c_B = 0{,}10$ mol/L. Équivalence à $V_{B\\text{éq}} = 15{,}0$ mL.<br>$$c_A = \\frac{c_B\\,V_{B\\text{éq}}}{V_A} = \\frac{0{,}10\\times15{,}0}{20{,}0} = 0{,}075\\ \\text{mol/L}$$` },
        { type:'meth', label:'METH', titre:'Suivre une transformation par mesure physique',
          contenu:`On peut suivre l'évolution dans le temps via une grandeur proportionnelle à une concentration :<br><ul><li><strong>spectrophotométrie</strong> : loi de Beer-Lambert $A = \\varepsilon\\,\\ell\\,c$ ;</li><li><strong>conductimétrie</strong> : $\\sigma$ dépend des ions présents ;</li><li><strong>pression</strong> (gaz), pH...</li></ul>On en déduit $x(t)$ puis la vitesse de réaction.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. MODÈLE DE LEWIS, GÉOMÉTRIE ET COHÉSION (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-lewis', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Modèle de Lewis, géométrie et cohésion', ordre: 5, enrich: false,
  sections: [
    {
      titre: 'Schéma de Lewis',
      cartes: [
        { type:'def', label:'DEF', titre:'Électrons de valence',
          contenu:`Les <strong>électrons de valence</strong> sont ceux de la couche externe ; ils gouvernent la réactivité et les liaisons.<br>Pour les éléments des trois premières lignes, leur nombre est donné par la colonne du tableau périodique.<br>Ex. : O (colonne 16) $\\to$ 6 électrons de valence ; N $\\to$ 5 ; C $\\to$ 4 ; H $\\to$ 1.` },
        { type:'def', label:'DEF', titre:'Liaison covalente et doublets',
          contenu:`Une <strong>liaison covalente</strong> est la mise en commun de deux électrons (un <strong>doublet liant</strong>) par deux atomes.<br>Les électrons de valence non engagés forment des <strong>doublets non liants</strong>.<br>Représentation de Lewis : doublet $=$ trait. Liaisons simple (–), double (=), triple (≡).` },
        { type:'th', label:'THM', titre:'Règles du duet et de l\'octet',
          contenu:`En formant des liaisons, les atomes tendent à acquérir la configuration stable du gaz noble le plus proche :<br><ul><li><strong>règle du duet</strong> : H s'entoure de 2 électrons ;</li><li><strong>règle de l'octet</strong> : C, N, O, F... s'entourent de 8 électrons.</li></ul>Cela fixe le nombre de liaisons : C $\\to$ 4, N $\\to$ 3, O $\\to$ 2, H $\\to$ 1.` },
        { type:'meth', label:'METH', titre:'Établir un schéma de Lewis',
          contenu:`1. Compter le total des électrons de valence (somme sur tous les atomes, $\\pm$ charge de l'ion).<br>2. Placer l'atome central (le moins électronégatif, souvent C), relier les autres par des doublets liants.<br>3. Compléter avec des doublets non liants pour satisfaire octet/duet.<br>4. Former des liaisons multiples si des octets sont incomplets.` },
        { type:'ex', label:'EX', titre:'Schéma de Lewis de l\'eau et du dioxyde de carbone',
          contenu:`<strong>$\\mathrm{H_2O}$</strong> : O (6 é) + 2 H (1 é) $=$ 8 é $=$ 4 doublets. Deux liaisons O–H + deux doublets non liants sur O.<br><strong>$\\mathrm{CO_2}$</strong> : C (4) + 2 O (6) $=$ 16 é $=$ 8 doublets. Deux doubles liaisons O=C=O ; deux doublets non liants sur chaque O. Octet satisfait partout.` },
      ]
    },
    {
      titre: 'Géométrie des molécules',
      cartes: [
        { type:'th', label:'THM', titre:'Répulsion des doublets (VSEPR simplifiée)',
          contenu:`Les doublets (liants et non liants) autour d'un atome central se <strong>repoussent</strong> et s'orientent pour être le plus <strong>éloignés possible</strong>.<br>Selon le nombre de directions de doublets :<br><ul><li>2 $\\to$ linéaire (180°) ;</li><li>3 $\\to$ triangulaire plane (120°) ;</li><li>4 $\\to$ tétraédrique (109°).</li></ul>` },
        { type:'meth', label:'METH', titre:'Prévoir la géométrie',
          contenu:`1. Faire le schéma de Lewis.<br>2. Compter les <strong>directions</strong> de doublets autour de l'atome central (chaque liaison multiple compte pour une direction).<br>3. En déduire la disposition.<br>4. Les <strong>doublets non liants</strong> occupent une position mais ne « comptent » pas dans la forme nommée (ex. $\\mathrm{H_2O}$ : coudée).` },
        { type:'ex', label:'EX', titre:'Géométrie de CH₄, NH₃ et H₂O',
          contenu:`<strong>$\\mathrm{CH_4}$</strong> : 4 liaisons, 0 non liant $\\to$ <strong>tétraédrique</strong> (109°).<br><strong>$\\mathrm{NH_3}$</strong> : 3 liaisons + 1 non liant $\\to$ <strong>pyramidale</strong> (~107°).<br><strong>$\\mathrm{H_2O}$</strong> : 2 liaisons + 2 non liants $\\to$ <strong>coudée</strong> (~104°).<br>Toutes ont 4 directions autour de l'atome central.` },
      ]
    },
    {
      titre: 'Polarité',
      cartes: [
        { type:'def', label:'DEF', titre:'Électronégativité et liaison polarisée',
          contenu:`L'<strong>électronégativité</strong> mesure la tendance d'un atome à attirer le doublet liant.<br>Si les deux atomes liés ont des électronégativités différentes, la liaison est <strong>polarisée</strong> : apparition de charges partielles $\\delta^+$ et $\\delta^-$.<br>Ex. : $\\overset{\\delta+}{H}{-}\\overset{\\delta-}{Cl}$ (Cl plus électronégatif).` },
        { type:'def', label:'DEF', titre:'Molécule polaire ou apolaire',
          contenu:`Une molécule est <strong>polaire</strong> si le barycentre des charges $\\delta^+$ ne coïncide pas avec celui des charges $\\delta^-$ (moment dipolaire non nul).<br>Elle est <strong>apolaire</strong> si, par <strong>symétrie</strong>, les polarités des liaisons se compensent.<br>La polarité dépend donc des liaisons <em>et</em> de la géométrie.` },
        { type:'meth', label:'METH', titre:'Déterminer si une molécule est polaire',
          contenu:`1. Repérer les liaisons polarisées (différence d'électronégativité).<br>2. Étudier la <strong>géométrie</strong>.<br>3. Sommer (vectoriellement) les contributions : si elles se compensent par symétrie $\\to$ apolaire, sinon $\\to$ polaire.` },
        { type:'ex', label:'EX', titre:'CO₂ apolaire vs H₂O polaire',
          contenu:`<strong>$\\mathrm{CO_2}$</strong> : liaisons C=O polarisées mais molécule <strong>linéaire</strong> symétrique $\\to$ les polarités s'annulent $\\to$ <strong>apolaire</strong>.<br><strong>$\\mathrm{H_2O}$</strong> : liaisons O–H polarisées et molécule <strong>coudée</strong> $\\to$ pas de compensation $\\to$ <strong>polaire</strong>.` },
      ]
    },
    {
      titre: 'Cohésion des solides',
      cartes: [
        { type:'def', label:'DEF', titre:'Solide ionique et solide moléculaire',
          contenu:`<strong>Solide ionique</strong> : empilement régulier de cations et d'anions assuré par l'<strong>interaction électrostatique</strong> (forte). Globalement neutre. Ex. : $\\mathrm{NaCl}$.<br><strong>Solide moléculaire</strong> : molécules maintenues par des interactions <strong>faibles</strong> (van der Waals, liaisons hydrogène). Ex. : glace, sucre.` },
        { type:'def', label:'DEF', titre:'Interactions de van der Waals et liaison hydrogène',
          contenu:`<strong>van der Waals</strong> : interactions attractives entre dipôles (permanents ou induits) ; d'autant plus fortes que la molécule est grosse.<br><strong>Liaison hydrogène</strong> : interaction privilégiée entre un H lié à O, N ou F et un atome électronégatif voisin (plus forte que van der Waals). Explique le point d'ébullition élevé de l'eau.` },
        { type:'prop', label:'PROP', titre:'Solubilité et « qui se ressemble s\'assemble »',
          contenu:`Un soluté <strong>polaire ou ionique</strong> est soluble dans un solvant <strong>polaire</strong> (ex. eau).<br>Un soluté <strong>apolaire</strong> est soluble dans un solvant <strong>apolaire</strong> (ex. cyclohexane).<br>L'eau, très polaire et capable de liaisons hydrogène, est un excellent solvant des espèces ioniques.` },
        { type:'ex', label:'EX', titre:'Dissolution d\'un solide ionique dans l\'eau',
          contenu:`Dissolution du chlorure de sodium :<br>$$\\mathrm{NaCl_{(s)} \\xrightarrow{\\;eau\\;} Na^+_{(aq)} + Cl^-_{(aq)}}$$<br>Les molécules d'eau (polaires) <strong>solvatent</strong> les ions, écrantant l'attraction électrostatique : le cristal se dissocie.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. RÉACTIONS D'OXYDORÉDUCTION (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-oxydo', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Oxydoréduction', ordre: 6, enrich: false,
  sections: [
    {
      titre: 'Oxydant, réducteur, couple',
      cartes: [
        { type:'def', label:'DEF', titre:'Oxydation et réduction',
          contenu:`Une réaction d'<strong>oxydoréduction</strong> met en jeu un <strong>transfert d'électrons</strong>.<br><strong>Oxydation</strong> : <em>perte</em> d'électrons (le réducteur s'oxyde).<br><strong>Réduction</strong> : <em>gain</em> d'électrons (l'oxydant se réduit).<br>Moyen mnémotechnique : « OxydAtion = perte (Augmentation du n° d'oxydation) ».` },
        { type:'def', label:'DEF', titre:'Couple oxydant/réducteur',
          contenu:`Un <strong>couple</strong> $\\mathrm{Ox/Red}$ est lié par une <strong>demi-équation électronique</strong> :<br>$$\\mathrm{Ox} + n\\,e^- \\;\\rightleftharpoons\\; \\mathrm{Red}$$<br>L'oxydant capte les électrons, le réducteur les cède. Ex. : $\\mathrm{Cu^{2+}/Cu}$, $\\mathrm{Fe^{3+}/Fe^{2+}}$, $\\mathrm{H^+/H_2}$.` },
        { type:'meth', label:'METH', titre:'Équilibrer une demi-équation',
          contenu:`1. Équilibrer l'<strong>élément</strong> caractéristique du couple.<br>2. Équilibrer l'<strong>oxygène</strong> avec $\\mathrm{H_2O}$.<br>3. Équilibrer l'<strong>hydrogène</strong> avec $\\mathrm{H^+}$.<br>4. Équilibrer les <strong>charges</strong> avec les électrons $e^-$.<br>Ex. : $\\mathrm{MnO_4^- + 8\\,H^+ + 5\\,e^- \\to Mn^{2+} + 4\\,H_2O}$.` },
        { type:'ex', label:'EX', titre:'Demi-équations du couple Cu²⁺/Cu',
          contenu:`Couple $\\mathrm{Cu^{2+}/Cu}$ : $\\mathrm{Cu^{2+} + 2\\,e^- \\rightleftharpoons Cu}$.<br>Dans le sens direct (réduction) : le cuivre métallique se dépose. Dans le sens inverse (oxydation) : le métal se dissout en ions $\\mathrm{Cu^{2+}}$.` },
      ]
    },
    {
      titre: 'Équations d\'oxydoréduction',
      cartes: [
        { type:'meth', label:'METH', titre:'Écrire l\'équation bilan',
          contenu:`1. Identifier les deux <strong>couples</strong> mis en jeu (oxydant de l'un, réducteur de l'autre).<br>2. Écrire les <strong>deux demi-équations</strong> dans le bon sens.<br>3. Les <strong>multiplier</strong> pour que le nombre d'électrons cédés $=$ nombre captés.<br>4. <strong>Additionner</strong> ; les électrons doivent disparaître.` },
        { type:'ex', label:'EX', titre:'Réaction cuivre / ion argent',
          contenu:`Couples $\\mathrm{Ag^+/Ag}$ et $\\mathrm{Cu^{2+}/Cu}$.<br>$\\mathrm{Ag^+ + e^- \\to Ag}$ ($\\times 2$) ; $\\mathrm{Cu \\to Cu^{2+} + 2e^-}$.<br>Bilan :<br>$$\\mathrm{2\\,Ag^+ + Cu \\to 2\\,Ag + Cu^{2+}}$$<br>Le cuivre se dissout (s'oxyde), l'argent se dépose (se réduit) ; la solution bleuit.` },
        { type:'ex', label:'EX', titre:'Action d\'un acide sur un métal',
          contenu:`Couples $\\mathrm{H^+/H_2}$ et $\\mathrm{Zn^{2+}/Zn}$.<br>$\\mathrm{2H^+ + 2e^- \\to H_2}$ ; $\\mathrm{Zn \\to Zn^{2+} + 2e^-}$.<br>Bilan :<br>$$\\mathrm{Zn + 2\\,H^+ \\to Zn^{2+} + H_2}$$<br>Dégagement de dihydrogène et dissolution du zinc.` },
      ]
    },
    {
      titre: 'Titrage d\'oxydoréduction',
      cartes: [
        { type:'meth', label:'METH', titre:'Titrer par oxydoréduction',
          contenu:`Même principe qu'un titrage acide-base, mais réaction redox totale.<br>1. Écrire l'équation support.<br>2. Repérer l'équivalence (souvent <strong>colorimétrique</strong> : disparition/apparition de couleur).<br>3. Appliquer la relation stœchiométrique à l'équivalence pour remonter à la concentration.` },
        { type:'ex', label:'EX', titre:'Dosage par le permanganate',
          contenu:`On titre des ions $\\mathrm{Fe^{2+}}$ par $\\mathrm{MnO_4^-}$ (violet) en milieu acide :<br>$$\\mathrm{MnO_4^- + 5\\,Fe^{2+} + 8\\,H^+ \\to Mn^{2+} + 5\\,Fe^{3+} + 4\\,H_2O}$$<br>Équivalence : $n(\\mathrm{Fe^{2+}}) = 5\\,n(\\mathrm{MnO_4^-})_{\\text{éq}}$. Repérée quand la teinte violette <strong>persiste</strong>.` },
        { type:'meth', label:'METH', titre:'Exploiter l\'équivalence redox',
          contenu:`Pour le titrage de $\\mathrm{Fe^{2+}}$ ($c$, $V$) par $\\mathrm{MnO_4^-}$ ($c_0$, $V_{\\text{éq}}$) :<br>$$\\frac{n(\\mathrm{Fe^{2+}})}{5} = \\frac{n(\\mathrm{MnO_4^-})}{1} \\;\\Rightarrow\\; cV = 5\\,c_0 V_{\\text{éq}}$$<br>D'où $c = \\dfrac{5\\,c_0\\,V_{\\text{éq}}}{V}$. On respecte toujours les coefficients de l'équation.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. ÉNERGIE CHIMIQUE ET COMBUSTIONS (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-energie-chim', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Énergie chimique et combustions', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Réactions exo/endothermiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Transfert thermique d\'une réaction',
          contenu:`Une transformation chimique s'accompagne d'un échange d'énergie avec l'extérieur (souvent thermique).<br><strong>Exothermique</strong> : libère de l'énergie (le milieu se réchauffe).<br><strong>Endothermique</strong> : absorbe de l'énergie (le milieu se refroidit).<br><strong>Athermique</strong> : pas d'échange notable.` },
        { type:'def', label:'DEF', titre:'Énergie de réaction',
          contenu:`L'énergie libérée ou absorbée est proportionnelle à la quantité de matière transformée. On définit une <strong>énergie molaire de réaction</strong> (J/mol).<br>Pour une combustion, on parle d'<strong>énergie molaire de combustion</strong> $E_m$ : énergie libérée par mole de combustible brûlé.` },
        { type:'form', label:'FORM', titre:'Énergie libérée par une combustion',
          contenu:`Pour $n$ moles (ou une masse $m$) de combustible :<br>$$E = n\\times E_m = \\frac{m}{M}\\times E_m$$<br>$E_m$ : énergie molaire de combustion (J/mol) &middot; $M$ : masse molaire (g/mol).<br>On utilise aussi le <strong>pouvoir calorifique</strong> (énergie par unité de masse, J/g ou J/kg).` },
        { type:'ex', label:'EX', titre:'Énergie libérée par du méthane',
          contenu:`Combustion de $m = 16$ g de méthane $\\mathrm{CH_4}$ ($M = 16$ g/mol), $E_m = 8{,}9\\times10^{5}$ J/mol.<br>$n = \\dfrac{16}{16} = 1$ mol, donc $E = 1\\times8{,}9\\times10^{5} = 8{,}9\\times10^{5}$ J.` },
      ]
    },
    {
      titre: 'Combustions',
      cartes: [
        { type:'def', label:'DEF', titre:'Combustion complète',
          contenu:`Une <strong>combustion</strong> est une réaction d'oxydoréduction exothermique d'un combustible avec le dioxygène (comburant).<br>Combustion <strong>complète</strong> d'un hydrocarbure $\\mathrm{C_xH_y}$ : produits $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$.<br>Combustion <strong>incomplète</strong> (manque d'$\\mathrm{O_2}$) : formation de $\\mathrm{CO}$ (toxique) et de carbone (suie).` },
        { type:'meth', label:'METH', titre:'Équilibrer une combustion complète',
          contenu:`$$\\mathrm{C_xH_y + \\left(x + \\frac{y}{4}\\right)O_2 \\to x\\,CO_2 + \\frac{y}{2}\\,H_2O}$$<br>1. Équilibrer le C (autant de $\\mathrm{CO_2}$ que de C).<br>2. Équilibrer le H (coefficient $y/2$ sur $\\mathrm{H_2O}$).<br>3. Équilibrer l'O en ajustant le coefficient de $\\mathrm{O_2}$.` },
        { type:'ex', label:'EX', titre:'Combustion du butane',
          contenu:`Butane $\\mathrm{C_4H_{10}}$ : $x=4$, $y=10$, donc $x + y/4 = 4 + 2{,}5 = 6{,}5$.<br>$$\\mathrm{C_4H_{10} + \\frac{13}{2}\\,O_2 \\to 4\\,CO_2 + 5\\,H_2O}$$<br>En entiers : $\\mathrm{2\\,C_4H_{10} + 13\\,O_2 \\to 8\\,CO_2 + 10\\,H_2O}$.` },
        { type:'prop', label:'PROP', titre:'Énergie de liaison (bilan énergétique)',
          contenu:`On peut estimer l'énergie d'une réaction à partir des <strong>énergies de liaison</strong> $E_\\ell$ (énergie pour rompre une mole de liaisons) :<br>$$E_{\\text{réac}} = \\underbrace{\\sum E_\\ell(\\text{rompues})}_{\\text{réactifs}} - \\underbrace{\\sum E_\\ell(\\text{formées})}_{\\text{produits}}$$<br>Si $E_{\\text{réac}} < 0$ : réaction exothermique (les liaisons formées sont plus stables).` },
      ]
    },
    {
      titre: 'Aspects énergétiques et bilan',
      cartes: [
        { type:'form', label:'FORM', titre:'Énergie reçue par un corps chauffé',
          contenu:`L'énergie thermique transférée à un corps de masse $m$ et capacité thermique massique $c$ pour une variation de température $\\Delta T$ :<br>$$Q = m\\,c\\,\\Delta T$$<br>$c_{\\text{eau}} = 4{,}18\\times10^{3}\\ \\mathrm{J\\cdot kg^{-1}\\cdot K^{-1}}$.<br>Permet de relier l'énergie d'une combustion à l'échauffement d'un échantillon.` },
        { type:'meth', label:'METH', titre:'Comparer deux combustibles',
          contenu:`1. Pour chacun, calculer l'énergie libérée par <strong>gramme</strong> (pouvoir calorifique) ou par <strong>mole</strong>.<br>2. Comparer aussi la masse de $\\mathrm{CO_2}$ produite par unité d'énergie (impact environnemental).<br>3. Le « meilleur » combustible libère beaucoup d'énergie en émettant peu de $\\mathrm{CO_2}$.` },
        { type:'ex', label:'EX', titre:'Énergie pour chauffer de l\'eau',
          contenu:`Chauffer $m = 0{,}50$ kg d'eau de 20 °C à 100 °C : $\\Delta T = 80$ K.<br>$$Q = 0{,}50\\times4{,}18\\times10^{3}\\times80 \\approx 1{,}7\\times10^{5}\\ \\text{J}$$<br>Avec du méthane ($E_m = 8{,}9\\times10^{5}$ J/mol), il faut au minimum $n = \\dfrac{Q}{E_m} \\approx 0{,}19$ mol (rendement parfait).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. LA LUMIÈRE : MODÈLES ONDULATOIRE ET CORPUSCULAIRE (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-lumiere', filiere: '1ere-gen', matiere: 'phch',
  titre: 'La lumière : ondes et photons', ordre: 8, enrich: false,
  sections: [
    {
      titre: 'Modèle ondulatoire de la lumière',
      cartes: [
        { type:'def', label:'DEF', titre:'Lumière : onde électromagnétique',
          contenu:`La lumière est une <strong>onde électromagnétique</strong> qui se propage dans le vide (et les milieux transparents) sans support matériel.<br>Célérité dans le vide : $c = 3{,}00\\times10^{8}$ m/s.<br>Elle est caractérisée par sa <strong>fréquence</strong> $f$ (ou sa longueur d'onde dans le vide $\\lambda$).` },
        { type:'form', label:'FORM', titre:'Longueur d\'onde et domaines',
          contenu:`Dans le vide : $\\lambda = \\dfrac{c}{f}$.<br><strong>Visible</strong> : $\\approx 400$ nm (violet) à $\\approx 800$ nm (rouge).<br>$\\lambda < 400$ nm : UV, X, $\\gamma$ ; $\\lambda > 800$ nm : IR, micro-ondes, ondes radio.<br>La couleur d'une radiation est liée à sa fréquence (conservée par changement de milieu).` },
        { type:'def', label:'DEF', titre:'Diffraction de la lumière',
          contenu:`Le passage de la lumière par une fente fine (ou un fil) produit une <strong>figure de diffraction</strong> : preuve du caractère ondulatoire.<br>L'écart angulaire de la tache centrale :<br>$$\\theta = \\frac{\\lambda}{a}$$<br>$a$ : largeur de la fente. Plus $a$ est petite, plus la tache est étalée.` },
        { type:'meth', label:'METH', titre:'Exploiter une figure de diffraction',
          contenu:`Avec une fente de largeur $a$, un écran à distance $D$, demi-largeur de la tache centrale $\\ell/2$ :<br>$$\\theta \\approx \\tan\\theta = \\frac{\\ell/2}{D} = \\frac{\\lambda}{a}$$<br>On en déduit $\\lambda = \\dfrac{a\\,\\ell}{2D}$ (mesure de la longueur d'onde).` },
        { type:'ex', label:'EX', titre:'Mesure de λ par diffraction',
          contenu:`Fente $a = 0{,}10$ mm, écran à $D = 2{,}0$ m, tache centrale de largeur $\\ell = 26$ mm.<br>$$\\lambda = \\frac{a\\,\\ell}{2D} = \\frac{0{,}10\\times10^{-3}\\times26\\times10^{-3}}{2\\times2{,}0} \\approx 6{,}5\\times10^{-7}\\ \\text{m} = 650\\ \\text{nm (rouge)}.$$` },
      ]
    },
    {
      titre: 'Modèle corpusculaire — le photon',
      cartes: [
        { type:'def', label:'DEF', titre:'Le photon',
          contenu:`La lumière peut aussi être décrite comme un flux de <strong>photons</strong> : grains d'énergie sans masse se déplaçant à $c$.<br>L'énergie d'un photon est <strong>quantifiée</strong> et dépend de la fréquence : un photon = un « quantum » d'énergie lumineuse.<br>Aspect <strong>corpusculaire</strong>, complémentaire de l'aspect ondulatoire (dualité).` },
        { type:'form', label:'FORM', titre:'Énergie d\'un photon',
          contenu:`$$E = h\\,f = \\frac{h\\,c}{\\lambda}$$<br>$h = 6{,}63\\times10^{-34}$ J$\\cdot$s : constante de Planck &middot; $f$ : fréquence (Hz) &middot; $\\lambda$ : longueur d'onde dans le vide (m).<br>Plus $\\lambda$ est petite (vers le bleu/UV), plus le photon est <strong>énergétique</strong>.` },
        { type:'def', label:'DEF', titre:'Quantification des niveaux d\'énergie',
          contenu:`Un atome possède des <strong>niveaux d'énergie discrets</strong> $E_n$.<br>Une transition entre deux niveaux $E_p \\to E_n$ ($E_p > E_n$) émet (ou absorbe) un photon tel que :<br>$$\\Delta E = E_p - E_n = h\\,f = \\frac{h\\,c}{\\lambda}$$<br>D'où les <strong>raies</strong> caractéristiques des spectres atomiques.` },
        { type:'ex', label:'EX', titre:'Longueur d\'onde émise par une transition',
          contenu:`Une transition libère $\\Delta E = 3{,}0$ eV $= 3{,}0\\times1{,}6\\times10^{-19} = 4{,}8\\times10^{-19}$ J.<br>$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6{,}63\\times10^{-34}\\times3{,}00\\times10^{8}}{4{,}8\\times10^{-19}} \\approx 4{,}1\\times10^{-7}\\ \\text{m} = 410\\ \\text{nm (violet)}.$$` },
      ]
    },
    {
      titre: 'Spectres',
      cartes: [
        { type:'def', label:'DEF', titre:'Spectres d\'émission et d\'absorption',
          contenu:`<strong>Spectre continu</strong> : émis par un corps chaud (lampe à incandescence) ; toutes les couleurs.<br><strong>Spectre de raies d'émission</strong> : raies colorées sur fond noir (gaz excité).<br><strong>Spectre d'absorption</strong> : raies noires sur fond continu (gaz traversé par la lumière blanche). Les raies sont aux <strong>mêmes longueurs d'onde</strong> que celles d'émission.` },
        { type:'prop', label:'PROP', titre:'Spectre et composition',
          contenu:`Chaque élément possède un <strong>spectre caractéristique</strong> (empreinte). L'analyse spectrale permet d'identifier les éléments :<br><ul><li>composition des étoiles (raies d'absorption) ;</li><li>analyse chimique en laboratoire.</li></ul>` },
        { type:'ex', label:'EX', titre:'Identifier un élément par sa raie',
          contenu:`Le sodium émet une raie jaune intense à $\\lambda = 589$ nm.<br>Fréquence : $f = \\dfrac{c}{\\lambda} = \\dfrac{3{,}00\\times10^{8}}{589\\times10^{-9}} \\approx 5{,}1\\times10^{14}$ Hz.<br>Observer cette raie dans un spectre signale la présence de sodium.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. LENTILLES MINCES ET IMAGES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-lentilles', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Lentilles minces et images', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Lentilles convergentes',
      cartes: [
        { type:'def', label:'DEF', titre:'Lentille mince convergente',
          contenu:`Une <strong>lentille mince convergente</strong> (bords minces) fait converger un faisceau parallèle vers un point.<br>Caractérisée par son <strong>centre optique</strong> $O$, son axe optique, et deux <strong>foyers</strong> : objet $F$ et image $F'$, symétriques par rapport à $O$.<br>La <strong>distance focale</strong> est $f' = \\overline{OF'} > 0$.` },
        { type:'form', label:'FORM', titre:'Vergence',
          contenu:`La <strong>vergence</strong> mesure le pouvoir de convergence :<br>$$C = \\frac{1}{f'} \\quad (\\mathrm{dioptries,\\ \\delta = m^{-1}})$$<br>$f'$ en mètres. Plus $C$ est grande, plus la lentille est convergente (focale courte).` },
        { type:'th', label:'THM', titre:'Rayons particuliers',
          contenu:`Pour construire l'image, trois rayons remarquables :<br><ul><li>rayon passant par le <strong>centre $O$</strong> : non dévié ;</li><li>rayon <strong>parallèle</strong> à l'axe : ressort en passant par $F'$ ;</li><li>rayon passant par <strong>$F$</strong> : ressort parallèle à l'axe.</li></ul>L'image se forme à l'intersection de deux de ces rayons.` },
        { type:'meth', label:'METH', titre:'Construire l\'image d\'un objet',
          contenu:`Objet $AB$ (B sur l'axe), lentille convergente :<br>1. Tracer deux rayons remarquables issus de $A$.<br>2. Leur intersection donne $A'$ (image de $A$).<br>3. $B'$ est le projeté de $A'$ sur l'axe ; l'image $A'B'$ est perpendiculaire à l'axe.<br>Image <strong>réelle</strong> (du côté opposé, peut être recueillie sur écran) ou <strong>virtuelle</strong> selon la position de l'objet.` },
      ]
    },
    {
      titre: 'Relation de conjugaison',
      cartes: [
        { type:'form', label:'FORM', titre:'Relation de conjugaison de Descartes',
          contenu:`Avec les mesures algébriques depuis $O$ :<br>$$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}} = \\frac{1}{f'}$$<br>$\\overline{OA}$ : position de l'objet ($<0$ si objet réel) &middot; $\\overline{OA'}$ : position de l'image &middot; $f'$ : focale.` },
        { type:'form', label:'FORM', titre:'Grandissement',
          contenu:`Le <strong>grandissement</strong> :<br>$$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$<br><ul><li>$|\\gamma| > 1$ : image agrandie ; $|\\gamma| < 1$ : réduite ;</li><li>$\\gamma < 0$ : image <strong>renversée</strong> ; $\\gamma > 0$ : <strong>droite</strong>.</li></ul>` },
        { type:'meth', label:'METH', titre:'Déterminer la position de l\'image',
          contenu:`1. Repérer les grandeurs algébriques ($\\overline{OA}$, $f'$).<br>2. Appliquer la conjugaison : $\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{f'} + \\dfrac{1}{\\overline{OA}}$.<br>3. En déduire $\\overline{OA'}$ (signe $\\to$ réelle/virtuelle).<br>4. Calculer $\\gamma$ pour la taille et le sens.` },
        { type:'ex', label:'EX', titre:'Application de la relation de conjugaison',
          contenu:`Objet à 30 cm avant une lentille $f' = 10$ cm : $\\overline{OA} = -30$ cm.<br>$$\\frac{1}{\\overline{OA'}} = \\frac{1}{10} + \\frac{1}{-30} = \\frac{3-1}{30} = \\frac{2}{30} \\Rightarrow \\overline{OA'} = 15\\ \\text{cm}.$$<br>Image réelle à 15 cm. $\\gamma = \\dfrac{15}{-30} = -0{,}5$ : réduite et renversée.` },
      ]
    },
    {
      titre: 'Applications optiques',
      cartes: [
        { type:'def', label:'DEF', titre:'L\'œil et l\'appareil photo',
          contenu:`L'<strong>œil</strong> : le cristallin (lentille convergente) forme une image réelle, renversée, réduite sur la rétine. L'<strong>accommodation</strong> ajuste $f'$ pour voir net à différentes distances.<br>L'<strong>appareil photo</strong> : l'objectif projette l'image sur le capteur ; la mise au point déplace l'objectif (modifie $\\overline{OA'}$).` },
        { type:'def', label:'DEF', titre:'Loupe et projecteur',
          contenu:`<strong>Loupe</strong> : objet placé entre $F$ et $O$ $\\to$ image <strong>virtuelle</strong>, droite, agrandie (vue à travers la lentille).<br><strong>Projecteur / vidéoprojecteur</strong> : objet juste au-delà de $F$ $\\to$ image <strong>réelle</strong>, renversée, agrandie sur un écran.` },
        { type:'ex', label:'EX', titre:'Grandissement d\'une loupe',
          contenu:`Objet à 6 cm d'une lentille $f' = 10$ cm : $\\overline{OA} = -6$ cm.<br>$\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{10} + \\dfrac{1}{-6} = \\dfrac{3-5}{30} = -\\dfrac{2}{30} \\Rightarrow \\overline{OA'} = -15$ cm (image virtuelle).<br>$\\gamma = \\dfrac{-15}{-6} = +2{,}5$ : image droite et agrandie 2,5 fois.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 10. ÉLECTRICITÉ : CAPACITÉS ET ÉNERGIE (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-1e-electri', filiere: '1ere-gen', matiere: 'phch',
  titre: 'Électricité : capacités et énergie', ordre: 10, enrich: false,
  sections: [
    {
      titre: 'Charge et intensité',
      cartes: [
        { type:'def', label:'DEF', titre:'Intensité et charge électrique',
          contenu:`Le courant est un débit de charges. L'<strong>intensité</strong> $I$ (ampère, A) est la charge traversant une section par seconde :<br>$$I = \\frac{Q}{\\Delta t} \\quad (\\text{régime continu})$$<br>$Q$ : charge (coulomb, C) ; $1$ A $= 1$ C/s. La charge est <strong>conservée</strong> (loi des nœuds).` },
        { type:'def', label:'DEF', titre:'Tension et loi d\'Ohm',
          contenu:`La <strong>tension</strong> $U$ (volt, V) entre deux points traduit une différence de potentiel.<br><strong>Loi d'Ohm</strong> pour un conducteur ohmique de résistance $R$ (ohm, $\\Omega$) :<br>$$U = R\\,I$$<br>Loi des mailles : la somme algébrique des tensions le long d'une maille est nulle.` },
        { type:'meth', label:'METH', titre:'Appliquer les lois de Kirchhoff',
          contenu:`<strong>Loi des nœuds</strong> : $\\sum I_{\\text{entrant}} = \\sum I_{\\text{sortant}}$ (conservation de la charge).<br><strong>Loi des mailles</strong> : en parcourant une maille, $\\sum U = 0$ (en respectant les sens).<br>Méthode : fléchage des tensions/courants, écriture des équations, résolution.` },
        { type:'ex', label:'EX', titre:'Charge transportée par une pile',
          contenu:`Une pile débite $I = 0{,}20$ A pendant $\\Delta t = 1$ h $= 3600$ s.<br>$$Q = I\\,\\Delta t = 0{,}20\\times3600 = 720\\ \\text{C}.$$<br>Soit $\\dfrac{720}{3600} = 0{,}20$ A$\\cdot$h.` },
      ]
    },
    {
      titre: 'Le condensateur',
      cartes: [
        { type:'def', label:'DEF', titre:'Condensateur et capacité',
          contenu:`Un <strong>condensateur</strong> stocke des charges sur deux armatures séparées par un isolant.<br>La charge stockée est proportionnelle à la tension :<br>$$Q = C\\,U$$<br>$C$ : <strong>capacité</strong> (farad, F). Plus $C$ est grande, plus le condensateur stocke de charge à tension donnée.` },
        { type:'prop', label:'PROP', titre:'Relation courant–tension',
          contenu:`L'intensité dans un condensateur est liée à la variation de tension :<br>$$i = C\\,\\frac{du}{dt}$$<br>La tension aux bornes d'un condensateur ne peut pas varier <strong>brutalement</strong> (continuité de $u$). En régime permanent ($u$ constant), $i = 0$ : il se comporte comme un interrupteur ouvert.` },
        { type:'form', label:'FORM', titre:'Énergie stockée',
          contenu:`Un condensateur chargé sous la tension $U$ emmagasine l'énergie :<br>$$E = \\frac{1}{2}\\,C\\,U^2$$<br>$E$ en joules (J), $C$ en farads, $U$ en volts. Cette énergie est restituée lors de la décharge.` },
        { type:'ex', label:'EX', titre:'Énergie d\'un condensateur',
          contenu:`Condensateur $C = 100\\ \\mu\\text{F} = 1{,}0\\times10^{-4}$ F chargé sous $U = 12$ V.<br>$$E = \\frac{1}{2}\\times1{,}0\\times10^{-4}\\times12^2 = \\frac{1}{2}\\times1{,}0\\times10^{-4}\\times144 \\approx 7{,}2\\times10^{-3}\\ \\text{J}.$$` },
      ]
    },
    {
      titre: 'Aspects énergétiques',
      cartes: [
        { type:'form', label:'FORM', titre:'Puissance et énergie électriques',
          contenu:`Puissance reçue par un dipôle :<br>$$P = U\\,I \\quad (\\text{watt, W})$$<br>Énergie échangée pendant $\\Delta t$ :<br>$$E = P\\,\\Delta t = U\\,I\\,\\Delta t \\quad (\\text{joule, J})$$<br>Pour un conducteur ohmique : $P = R\\,I^2 = \\dfrac{U^2}{R}$ (effet Joule, dissipée en chaleur).` },
        { type:'meth', label:'METH', titre:'Établir un bilan d\'énergie',
          contenu:`1. Identifier les <strong>récepteurs</strong> (consomment) et les <strong>générateurs</strong> (fournissent).<br>2. Calculer $P = UI$ pour chaque dipôle.<br>3. Conservation : énergie fournie $=$ énergie utile $+$ pertes (Joule).<br>4. <strong>Rendement</strong> : $\\eta = \\dfrac{E_{\\text{utile}}}{E_{\\text{fournie}}}$.` },
        { type:'ex', label:'EX', titre:'Énergie consommée par un appareil',
          contenu:`Un radiateur de $P = 1500$ W fonctionne $2$ h.<br>$$E = P\\,\\Delta t = 1500\\times(2\\times3600) = 1{,}08\\times10^{7}\\ \\text{J} = 3{,}0\\ \\text{kW·h}.$$<br>($1$ kW$\\cdot$h $= 3{,}6\\times10^{6}$ J.)` },
        { type:'prop', label:'PROP', titre:'Effet Joule',
          contenu:`Tout conducteur ohmique parcouru par un courant dissipe de l'énergie sous forme de <strong>chaleur</strong> :<br>$$E_{\\text{Joule}} = R\\,I^2\\,\\Delta t$$<br>Utile (radiateur, ampoule) ou subi (pertes dans les câbles). On transporte sous <strong>haute tension</strong> pour réduire $I$ et donc les pertes en $R I^2$.` },
      ]
    },
  ]
},

];
