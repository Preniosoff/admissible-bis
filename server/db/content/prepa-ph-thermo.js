// Prépa CPGE — Physique MP : thermodynamique et thermodynamique statistique
// Source de cadrage : programme officiel MP 2021, BO n°31 du 26 août 2021
// Contenu original reformulé pour Admiscible ; aucune reprise de manuel.

export const DATA = [
  {
    id: 'ph-thermo', matiere: 'ph', titre: 'Thermodynamique', ordre: 13, enrich: true,
    filieres: ['mp', 'mpsi', 'pc', 'pcsi', 'psi', 'ptsi', 'pt', 'mpi'],
    sections: [
      {
        titre: 'Systèmes, transformations et notations',
        cartes: [
          { type:'def', label:'DEF', titre:'Système thermodynamique',
            contenu:`Un <strong>système thermodynamique</strong> est une portion de matière que l'on sépare du milieu extérieur par une frontière réelle ou imaginaire.<br><ul><li><strong>Fermé</strong> : échange d'énergie possible, pas d'échange de matière.</li><li><strong>Ouvert</strong> : échange d'énergie et de matière.</li><li><strong>Isolé</strong> : aucun échange avec l'extérieur.</li></ul>L'état macroscopique est décrit par des variables d'état comme $P$, $V$, $T$, $n$, $U$, $H$, $S$.` },
          { type:'def', label:'DEF', titre:'Fonction d\'état et différentielle',
            contenu:`Une <strong>fonction d'état</strong> ne dépend que de l'état du système, pas du chemin suivi : $U$, $H$, $S$, $G$... Sa variation élémentaire s'écrit avec une différentielle exacte : $\\mathrm{d}U$, $\\mathrm{d}S$.<br>À l'inverse, le travail et le transfert thermique ne sont pas des fonctions d'état : on écrit $\\delta W$ et $\\delta Q$. La distinction $\\mathrm{d}$ / $\\delta$ est centrale en MP.` },
          { type:'def', label:'DEF', titre:'Transformations usuelles',
            contenu:`<ul><li><strong>Isotherme</strong> : $T$ constante.</li><li><strong>Isobare</strong> : $P$ constante.</li><li><strong>Isochore</strong> : $V$ constant.</li><li><strong>Adiabatique</strong> : $\\delta Q = 0$.</li><li><strong>Réversible</strong> : succession d'états d'équilibre, sans création d'entropie.</li><li><strong>Quasi-statique</strong> : suffisamment lente pour définir les grandeurs internes à chaque instant ; elle n'est pas forcément réversible.</li></ul>` },
          { type:'prop', label:'PROP', titre:'Conventions de signe',
            contenu:`Dans la convention usuelle en CPGE, $W$ et $Q$ sont <strong>reçus</strong> par le système :<br><ul><li>$Q > 0$ si le système reçoit de la chaleur ;</li><li>$W > 0$ si le milieu extérieur travaille sur le système ;</li><li>pour une compression, $\\mathrm{d}V < 0$ et $\\delta W = -P_{\\mathrm{ext}}\\mathrm{d}V > 0$.</li></ul>Un changement de convention est possible, mais il faut alors tout changer de façon cohérente.` },
        ]
      },
      {
        titre: 'Modèles de matière',
        cartes: [
          { type:'form', label:'FORM', titre:'Gaz parfait',
            contenu:`Pour un gaz parfait :<br>$$PV = nRT = Nk_B T.$$<br>Son énergie interne et son enthalpie ne dépendent que de la température :<br>$$\\mathrm{d}U = nC_{V,m}\\,\\mathrm{d}T, \\qquad \\mathrm{d}H = nC_{P,m}\\,\\mathrm{d}T.$$<br>Relation de Mayer : $C_{P,m} - C_{V,m} = R$ ; coefficient adiabatique : $\\gamma = C_P/C_V$.` },
          { type:'form', label:'FORM', titre:'Capacités thermiques du gaz parfait',
            contenu:`Pour $n$ moles de gaz parfait :<br>$$C_V = \\frac{nR}{\\gamma-1}, \\qquad C_P = \\frac{\\gamma nR}{\\gamma-1}.$$<br>Modèles classiques : gaz monoatomique $\\gamma = 5/3$, gaz diatomique usuel à température ambiante $\\gamma = 7/5$. Ces valeurs proviennent du dénombrement des degrés de liberté énergétiques.` },
          { type:'def', label:'DEF', titre:'Phase condensée incompressible et indilatable',
            contenu:`Pour un solide ou liquide modélisé comme <strong>incompressible et indilatable</strong>, le volume varie très peu et le travail des forces de pression est souvent négligeable devant les transferts thermiques.<br>On utilise alors :<br>$$\\mathrm{d}U \\simeq \\mathrm{d}H \\simeq m c\\,\\mathrm{d}T,$$<br>où $c$ est la capacité thermique massique.` },
          { type:'prop', label:'PROP', titre:'Enthalpie',
            contenu:`L'<strong>enthalpie</strong> est définie par $H = U + PV$. Elle est particulièrement adaptée aux évolutions isobares et aux systèmes ouverts.<br>Pour une transformation isobare quasi-statique sans autre travail que les forces de pression :<br>$$Q_P = \\Delta H.$$<br>Pour un gaz parfait, $H$ ne dépend que de $T$.` },
        ]
      },
      {
        titre: 'Premier principe : systèmes fermés',
        cartes: [
          { type:'th', label:'THM', titre:'Premier principe',
            contenu:`Pour un système fermé :<br>$$\\Delta E = W + Q, \\qquad E = U + E_c + E_p.$$<br>Si le système macroscopique est au repos et sans variation d'énergie potentielle externe :<br>$$\\Delta U = W + Q.$$<br>En écriture infinitésimale : $\\mathrm{d}U + \\mathrm{d}E_m = \\delta W + \\delta Q$.` },
          { type:'form', label:'FORM', titre:'Travail des forces de pression',
            contenu:`Pour une transformation élémentaire :<br>$$\\delta W_p = -P_{\\mathrm{ext}}\\,\\mathrm{d}V.$$<br>Si la transformation est quasi-statique mécaniquement réversible, $P_{\\mathrm{ext}} = P$ et :<br>$$W_p = -\\int_{V_i}^{V_f} P(V)\\,\\mathrm{d}V.$$<br>Dans un diagramme $(P,V)$, l'aire algébrique permet de lire le travail.` },
          { type:'prop', label:'PROP', titre:'Bilans sur transformations simples du gaz parfait',
            contenu:`<ul><li><strong>Isochore</strong> : $W=0$, donc $Q=\\Delta U=nC_V\\Delta T$.</li><li><strong>Isobare</strong> : $Q=\\Delta H=nC_P\\Delta T$ si seul le travail des pressions intervient.</li><li><strong>Isotherme GP</strong> : $\\Delta U=0$, donc $Q=-W$.</li><li><strong>Adiabatique</strong> : $Q=0$, donc $\\Delta U=W$.</li></ul>` },
          { type:'meth', label:'METH', titre:'Faire un bilan d\'énergie',
            contenu:`<strong>1.</strong> Choisir le système et préciser fermé/ouvert.<br><strong>2.</strong> Identifier les variations d'énergie : $\\Delta U$, $\\Delta E_c$, $\\Delta E_p$.<br><strong>3.</strong> Lister les travaux reçus : pression, électrique, utile, frottements éventuels.<br><strong>4.</strong> Lister les transferts thermiques reçus.<br><strong>5.</strong> Appliquer le premier principe avec une convention de signe unique.` },
        ]
      },
      {
        titre: 'Second principe et entropie',
        cartes: [
          { type:'th', label:'THM', titre:'Second principe',
            contenu:`Il existe une fonction d'état extensive, l'<strong>entropie</strong> $S$, telle que pour une transformation élémentaire :<br>$$\\mathrm{d}S = \\delta S_e + \\delta S_c, \qquad \\delta S_c \\ge 0.$$<br>$\\delta S_e$ est l'entropie échangée avec l'extérieur ; $\\delta S_c$ est l'entropie créée par les irréversibilités. Pour une transformation réversible, $\\delta S_c=0$.` },
          { type:'form', label:'FORM', titre:'Entropie échangée et inégalité de Clausius',
            contenu:`Si le système échange un transfert thermique $\\delta Q$ avec une source extérieure à température $T_{\\mathrm{ext}}$ :<br>$$\\delta S_e = \\frac{\\delta Q}{T_{\\mathrm{ext}}}.$$<br>Donc :<br>$$\\Delta S \\ge \\int \\frac{\\delta Q}{T_{\\mathrm{ext}}}.$$<br>Pour une évolution adiabatique d'un système fermé, $\\Delta S = S_c \\ge 0$.` },
          { type:'form', label:'FORM', titre:'Identités thermodynamiques',
            contenu:`Pour un système simple compressible fermé, à l'équilibre :<br>$$\\mathrm{d}U = T\\,\\mathrm{d}S - P\\,\\mathrm{d}V,$$<br>$$\\mathrm{d}H = T\\,\\mathrm{d}S + V\\,\\mathrm{d}P.$$<br>Ces identités concernent des fonctions d'état : elles peuvent être utilisées entre deux états d'équilibre, même si la transformation réelle est irréversible, dès lors que les états sont définis.` },
          { type:'form', label:'FORM', titre:'Entropie d\'un gaz parfait',
            contenu:`Pour $n$ moles de gaz parfait à capacités thermiques constantes :<br>$$\\mathrm{d}S = nC_{V,m}\\frac{\\mathrm{d}T}{T} + nR\\frac{\\mathrm{d}V}{V}$$<br>ou encore<br>$$\\mathrm{d}S = nC_{P,m}\\frac{\\mathrm{d}T}{T} - nR\\frac{\\mathrm{d}P}{P}.$$<br>Entre deux états : on intègre ces expressions en choisissant le couple de variables le plus pratique.` },
          { type:'form', label:'FORM', titre:'Lois de Laplace',
            contenu:`Pour une transformation <strong>adiabatique réversible</strong> d'un gaz parfait à capacités thermiques constantes :<br>$$PV^\\gamma = \\mathrm{cte}, \\qquad TV^{\\gamma-1}=\\mathrm{cte}, \\qquad T^\\gamma P^{1-\\gamma}=\\mathrm{cte}.$$<br>Ces relations sont équivalentes à $\\Delta S=0$. Elles ne s'appliquent pas à une détente de Joule-Gay-Lussac ou à une détente brutale irréversible.` },
        ]
      },
      {
        titre: 'Machines thermiques',
        cartes: [
          { type:'def', label:'DEF', titre:'Machine cyclique ditherme',
            contenu:`Une machine ditherme échange avec une source chaude à température $T_C$ et une source froide à température $T_F$ ($T_C>T_F$). Sur un cycle, $\\Delta U=\\Delta S=0$ :<br>$$W + Q_C + Q_F = 0,$$<br>$$\\frac{Q_C}{T_C}+\\frac{Q_F}{T_F} \\le 0.$$<br>Les grandeurs $W$, $Q_C$, $Q_F$ sont algébriques et reçues par le fluide de la machine.` },
          { type:'form', label:'FORM', titre:'Moteur thermique',
            contenu:`Pour un moteur, le système reçoit $Q_C>0$ de la source chaude, fournit du travail donc $W<0$, et rejette $Q_F<0$ à la source froide.<br>Le rendement vaut :<br>$$\\eta = \\frac{-W}{Q_C} = 1 + \\frac{Q_F}{Q_C} \\le 1 - \\frac{T_F}{T_C}.$$<br>La borne est atteinte uniquement par un cycle réversible de Carnot.` },
          { type:'form', label:'FORM', titre:'Réfrigérateur et pompe à chaleur',
            contenu:`Pour un réfrigérateur, l'effet utile est de prélever $Q_F>0$ à la source froide ; le coût est le travail reçu $W>0$ :<br>$$e_{\\mathrm{frigo}} = \\frac{Q_F}{W} \\le \\frac{T_F}{T_C-T_F}.$$<br>Pour une pompe à chaleur, l'effet utile est de fournir $-Q_C$ à la source chaude :<br>$$e_{\\mathrm{PAC}} = \\frac{-Q_C}{W} \\le \\frac{T_C}{T_C-T_F}.$$` },
          { type:'prop', label:'PROP', titre:'Diagrammes $(P,V)$ et $(T,S)$',
            contenu:`Dans le diagramme $(P,V)$, l'aire algébrique d'un cycle représente le travail des forces de pression. Dans le diagramme $(T,S)$, pour une évolution réversible, l'aire sous la courbe représente le transfert thermique :<br>$$\\delta Q_{\\mathrm{rev}} = T\\,\\mathrm{d}S.$$<br>Le cycle de Carnot est formé de deux isothermes et deux adiabatiques réversibles.` },
        ]
      },
      {
        titre: 'Corps pur et changements d\'état',
        cartes: [
          { type:'def', label:'DEF', titre:'Corps pur sous plusieurs phases',
            contenu:`Un <strong>corps pur</strong> peut exister sous différentes phases : solide, liquide, vapeur. En coexistence de deux phases à l'équilibre, la pression et la température ne sont pas indépendantes : $P=P_{\\mathrm{sat}}(T)$ pour l'équilibre liquide-vapeur.<br>Dans un diagramme $(P,T)$, les courbes de changement d'état se rejoignent au point triple ; la courbe liquide-vapeur se termine au point critique.` },
          { type:'prop', label:'PROP', titre:'Variance',
            contenu:`La variance est le nombre de paramètres intensifs indépendants que l'on peut fixer sans rompre l'équilibre. Pour un corps pur :<br><ul><li>une phase : $v=2$ ;</li><li>deux phases en équilibre : $v=1$ ;</li><li>trois phases au point triple : $v=0$.</li></ul>` },
          { type:'def', label:'DEF', titre:'Enthalpie massique de changement d\'état',
            contenu:`L'enthalpie massique de changement d'état $\\ell_{1\\to2}$ est l'énergie thermique reçue par unité de masse lors d'un changement d'état isotherme et isobare réversible :<br>$$\\ell_{1\\to2}=h_2-h_1.$$<br>Le changement inverse a l'enthalpie opposée. Pour une transition réversible : $\\ell_{1\\to2}=T(s_2-s_1)$.` },
          { type:'form', label:'FORM', titre:'Formule de Clapeyron',
            contenu:`Pour l'équilibre entre deux phases d'un corps pur :<br>$$\\ell_{1\\to2}=T(v_2-v_1)\\frac{\\mathrm{d}P_{\\mathrm{eq}}}{\\mathrm{d}T}.$$<br>Elle relie la pente de la courbe de coexistence au saut de volume massique et à l'enthalpie de changement d'état. Elle permet notamment d'interpréter le signe de la pente de la courbe de fusion.` },
          { type:'def', label:'DEF', titre:'Diagramme $(P,h)$',
            contenu:`Le diagramme $(P,h)$ d'un fluide réel représente la pression en fonction de l'enthalpie massique. Il permet de lire les états liquide, vapeur, diphasé, les isobares, isothermes et titres en vapeur.<br>En MP, il sert surtout à étudier des machines thermiques réelles : compresseur, condenseur, détendeur, évaporateur, turbine.` },
        ]
      },
      {
        titre: 'Systèmes ouverts en régime stationnaire',
        cartes: [
          { type:'def', label:'DEF', titre:'Volume de contrôle',
            contenu:`Un <strong>système ouvert</strong> est étudié à travers un volume de contrôle traversé par un débit de matière. En <strong>régime stationnaire</strong>, les grandeurs locales ne dépendent pas du temps et le débit massique est conservé entre l'entrée et la sortie : $D_m=\\rho Sv$.<br>On raisonne par unité de masse traversant la machine.` },
          { type:'th', label:'THM', titre:'Premier principe industriel',
            contenu:`Pour un écoulement unidimensionnel stationnaire entre une entrée et une sortie :<br>$$\\Delta h + \\Delta e_m = w_u + q,$$<br>avec $e_m = e_c + e_p = \\dfrac{v^2}{2}+gz$. $w_u$ est le travail utile massique reçu, hors travail des forces de pression déjà contenu dans $h$ ; $q$ est le transfert thermique massique reçu.` },
          { type:'th', label:'THM', titre:'Second principe pour système ouvert',
            contenu:`Pour le même écoulement stationnaire :<br>$$\\Delta s = s_e + s_c, \\qquad s_c\\ge 0.$$<br>Si l'échange thermique massique $q_k$ se fait avec une source à température $T_k$, alors $s_e=\\sum_k q_k/T_k$. Une machine adiabatique réversible vérifie donc $\\Delta s=0$.` },
          { type:'prop', label:'PROP', titre:'Machines ouvertes usuelles',
            contenu:`<ul><li><strong>Turbine adiabatique</strong> : le fluide fournit du travail ; $w_u<0$ et souvent $\\Delta h<0$.</li><li><strong>Compresseur</strong> : le fluide reçoit du travail ; $w_u>0$ et $h$ augmente.</li><li><strong>Tuyère</strong> : conversion d'enthalpie en énergie cinétique ; $\\Delta h + \\Delta e_c \\simeq 0$ si adiabatique sans travail.</li><li><strong>Détendeur</strong> : détente sans travail utile, souvent modélisée isenthalpique : $\\Delta h=0$.</li></ul>` },
          { type:'meth', label:'METH', titre:'Étudier une machine réelle avec un diagramme $(P,h)$',
            contenu:`<strong>1.</strong> Placer les états d'entrée et de sortie à partir de $P$, $T$, titre vapeur ou zone du fluide.<br><strong>2.</strong> Lire les enthalpies massiques $h_1$, $h_2$ et éventuellement les entropies $s_1$, $s_2$ sur le diagramme.<br><strong>3.</strong> Appliquer $\\Delta h + \\Delta e_m = w_u+q$ en négligeant ou non $\\Delta e_m$.<br><strong>4.</strong> Utiliser $\\Delta s=s_e+s_c$ pour estimer les irréversibilités.` },
        ]
      },
      {
        titre: 'Transferts thermiques',
        cartes: [
          { type:'def', label:'DEF', titre:'Conduction, convection, rayonnement',
            contenu:`Trois modes de transfert thermique sont à distinguer :<br><ul><li><strong>Conduction</strong> : diffusion microscopique d'énergie dans un milieu matériel, sans transport global de matière.</li><li><strong>Convection</strong> : transport d'énergie par mouvement macroscopique d'un fluide.</li><li><strong>Rayonnement</strong> : transfert par ondes électromagnétiques, possible dans le vide.</li></ul>Un problème réel combine souvent plusieurs modes.` },
          { type:'def', label:'DEF', titre:'Flux thermique et vecteur densité de flux',
            contenu:`Le <strong>flux thermique</strong> $\\Phi$ à travers une surface orientée $S$ est la puissance thermique traversant cette surface :<br>$$\\Phi = \\iint_S \\vec{j}_{\\mathrm{th}}\\cdot \\mathrm{d}\\vec{S}.$$<br>$\\vec{j}_{\\mathrm{th}}$ est le vecteur densité de flux thermique, en $\\mathrm{W\\,m^{-2}}$. Le signe dépend de l'orientation choisie.` },
          { type:'form', label:'FORM', titre:'Loi de Fourier',
            contenu:`Dans un milieu conducteur isotrope :<br>$$\\vec{j}_{\\mathrm{th}}=-\\lambda\\,\\vec{\\nabla}T,$$<br>où $\\lambda$ est la conductivité thermique. Le signe $-$ traduit le transfert spontané de chaleur des zones chaudes vers les zones froides.<br>Ordres de grandeur usuels : air $\\sim 0{,}03$, eau $\\sim 0{,}6$, verre $\\sim 1$, acier $\\sim 50\\ \\mathrm{W\\,m^{-1}\\,K^{-1}}$.` },
          { type:'th', label:'THM', titre:'Équation de la diffusion thermique',
            contenu:`Dans un solide homogène, de masse volumique $\\rho$, capacité massique $c$ et conductivité $\\lambda$, un bilan local d'énergie donne :<br>$$\\rho c\\frac{\\partial T}{\\partial t}=\\lambda\\Delta T+p_v,$$<br>où $p_v$ est une puissance volumique créée dans le volume. Sans source :<br>$$\\frac{\\partial T}{\\partial t}=D\\Delta T, \\qquad D=\\frac{\\lambda}{\\rho c}.$$<br>$D$ est la diffusivité thermique.` },
          { type:'prop', label:'PROP', titre:'Échelle de diffusion',
            contenu:`L'équation de diffusion relie une longueur caractéristique $L$ et un temps caractéristique $\\tau$ par :<br>$$\\tau \\sim \\frac{L^2}{D}.$$<br>La diffusion est lente à grande distance : doubler la longueur multiplie le temps par quatre. Cette loi d'échelle est souvent plus importante que la résolution exacte de l'équation.` },
        ]
      },
      {
        titre: 'Régime stationnaire, résistances et interfaces',
        cartes: [
          { type:'def', label:'DEF', titre:'Résistance thermique',
            contenu:`En régime stationnaire unidimensionnel, on définit une résistance thermique par analogie électrique :<br>$$R_{\\mathrm{th}}=\\frac{T_1-T_2}{\\Phi}.$$<br>Pour un mur plan d'épaisseur $e$, de surface $S$ et conductivité $\\lambda$ :<br>$$R_{\\mathrm{th}}=\\frac{e}{\\lambda S}.$$<br>Les résistances en série s'additionnent ; en parallèle, ce sont les conductances qui s'additionnent.` },
          { type:'form', label:'FORM', titre:'Résistances cylindrique et sphérique',
            contenu:`Pour un transfert radial stationnaire, les expressions utiles sont :<br><ul><li>cylindre de longueur $L$, entre $r_1$ et $r_2$ : $R_{\\mathrm{th}}=\\dfrac{\\ln(r_2/r_1)}{2\\pi\\lambda L}$ ;</li><li>sphère entre $r_1$ et $r_2$ : $R_{\\mathrm{th}}=\\dfrac{1}{4\\pi\\lambda}\\left(\\dfrac{1}{r_1}-\\dfrac{1}{r_2}\\right)$.</li></ul>Ces formules se retrouvent en intégrant la loi de Fourier avec la surface adaptée.` },
          { type:'form', label:'FORM', titre:'Loi de Newton à l\'interface',
            contenu:`À l'interface entre un solide de température de surface $T_s$ et un fluide de température $T_\\infty$, la loi de Newton modélise le flux convectif :<br>$$\\Phi = hS\\,(T_s-T_\\infty).$$<br>$h$ est le coefficient de transfert thermique de surface. Elle fournit une condition aux limites et s'écrit comme une résistance :<br>$$R_{\\mathrm{conv}}=\\frac{1}{hS}.$$` },
          { type:'prop', label:'PROP', titre:'Rayonnement thermique',
            contenu:`Le rayonnement est un transfert électromagnétique. Un corps noir idéal de température $T$ émet une puissance surfacique $\\sigma T^4$ ; l'échange net avec un environnement à $T_0$ se modélise souvent par :<br>$$\\varphi_{\\mathrm{rad}}=\\varepsilon\\sigma\\left(T^4-T_0^4\\right).$$<br>En MP, il faut surtout identifier ce mode de transfert et savoir exploiter un capteur ou une caméra infrarouge.` },
          { type:'meth', label:'METH', titre:'Résoudre un problème de conduction stationnaire',
            contenu:`<strong>1.</strong> Identifier la géométrie et la direction principale du flux.<br><strong>2.</strong> Écrire la conservation du flux en régime stationnaire.<br><strong>3.</strong> Utiliser Fourier ou les résistances thermiques équivalentes.<br><strong>4.</strong> Ajouter les conditions aux limites : températures imposées, flux imposé, loi de Newton, symétrie.<br><strong>5.</strong> Vérifier le signe du flux et les unités.` },
        ]
      },
    ]
  },
  {
    id: 'ph-stat', matiere: 'ph', titre: 'Éléments de thermodynamique statistique', ordre: 14, enrich: true,
    filieres: ['mp', 'mpi'],
    sections: [
      {
        titre: 'Facteur de Boltzmann',
        cartes: [
          { type:'def', label:'DEF', titre:'Poids de Boltzmann',
            contenu:`Pour une particule indépendante à l'équilibre avec un thermostat à température $T$, la probabilité d'occuper un état d'énergie $E_i$ est proportionnelle au <strong>facteur de Boltzmann</strong> :<br>$$p_i \\propto e^{-E_i/(k_B T)}.$$<br>La constante de normalisation est choisie pour que $\\sum_i p_i=1$. Le produit $k_B T$ fixe l'échelle d'agitation thermique.` },
          { type:'prop', label:'PROP', titre:'Rapport de probabilités',
            contenu:`Pour deux états d'énergies $E_1$ et $E_2$ :<br>$$\\frac{p_2}{p_1}=\\exp\\left(-\\frac{E_2-E_1}{k_B T}\\right).$$<br>Si $E_2-E_1\\gg k_BT$, l'état haut est très peu occupé. Si $E_2-E_1\\ll k_BT$, les deux états ont des occupations comparables.` },
          { type:'ex', label:'EX', titre:'Atmosphère isotherme',
            contenu:`Dans une atmosphère isotherme, une molécule de masse $m$ à altitude $z$ possède l'énergie potentielle $mgz$. Le facteur de Boltzmann donne :<br>$$n(z)=n(0)\\,e^{-mgz/(k_BT)}.$$<br>Comme $P=nk_BT$, on obtient le nivellement barométrique : $P(z)=P(0)e^{-mgz/(k_BT)}$.` },
        ]
      },
      {
        titre: 'Énergie moyenne et fluctuations',
        cartes: [
          { type:'def', label:'DEF', titre:'Énergie moyenne',
            contenu:`Pour un système à spectre discret d'énergies $E_i$ et probabilités $p_i$ :<br>$$\\langle E\\rangle = \\sum_i p_i E_i.$$<br>L'écart quadratique énergétique vaut :<br>$$\\Delta E = \\sqrt{\\langle E^2\\rangle-\\langle E\\rangle^2}.$$` },
          { type:'prop', label:'PROP', titre:'Fluctuations relatives',
            contenu:`Pour un système constitué d'un grand nombre $N$ de particules indépendantes, l'énergie moyenne est proportionnelle à $N$, tandis que les fluctuations typiques croissent comme $\\sqrt{N}$. Donc :<br>$$\\frac{\\Delta E}{\\langle E\\rangle}\\sim \\frac{1}{\\sqrt{N}}.$$<br>C'est pourquoi les grandeurs thermodynamiques macroscopiques sont quasi certaines.` },
          { type:'ex', label:'EX', titre:'Système à deux niveaux',
            contenu:`Pour un système à deux niveaux non dégénérés $-\\varepsilon$ et $+\\varepsilon$ :<br>$$p_+=\\frac{e^{-\\varepsilon/(k_BT)}}{e^{-\\varepsilon/(k_BT)}+e^{\\varepsilon/(k_BT)}},\\qquad p_- = 1-p_+.$$<br>L'énergie moyenne est :<br>$$\\langle E\\rangle = -\\varepsilon\\tanh\\left(\\frac{\\varepsilon}{k_BT}\\right).$$<br>À basse température, le niveau bas domine ; à haute température, les deux niveaux deviennent presque équiprobables.` },
        ]
      },
      {
        titre: 'Équipartition et capacités thermiques',
        cartes: [
          { type:'th', label:'THM', titre:'Théorème d\'équipartition',
            contenu:`En physique classique, chaque degré de liberté énergétique indépendant quadratique contribue en moyenne :<br>$$\\frac{1}{2}k_B T$$<br>par particule, ou $\\frac{1}{2}RT$ par mole. On l'applique aux translations, rotations et vibrations lorsqu'elles sont actives à la température étudiée.` },
          { type:'form', label:'FORM', titre:'Gaz classiques dilués',
            contenu:`<ul><li>Gaz monoatomique : 3 degrés de translation, $U_m=\\frac32RT$, donc $C_{V,m}=\\frac32R$ et $C_{P,m}=\\frac52R$.</li><li>Gaz diatomique usuel : 3 translations + 2 rotations, $U_m=\\frac52RT$, donc $C_{V,m}=\\frac52R$ et $C_{P,m}=\\frac72R$.</li></ul>Ces résultats expliquent les valeurs usuelles de $\\gamma$.` },
          { type:'form', label:'FORM', titre:'Loi de Dulong et Petit',
            contenu:`Dans le modèle classique d'Einstein à haute température, un solide cristallin possède 3 vibrations indépendantes par atome, chaque vibration apportant deux termes quadratiques. On obtient :<br>$$C_{V,m}\\simeq 3R.$$<br>C'est la loi de Dulong et Petit, correcte pour de nombreux solides à température suffisamment élevée.` },
        ]
      },
      {
        titre: 'Applications et limites du modèle statistique',
        cartes: [
          { type:'meth', label:'METH', titre:'Exploiter un modèle à niveaux discrets',
            contenu:`<strong>1.</strong> Lister les niveaux d'énergie accessibles et leurs éventuelles dégénérescences.<br><strong>2.</strong> Écrire les poids de Boltzmann relatifs.<br><strong>3.</strong> Normaliser les probabilités.<br><strong>4.</strong> Calculer la grandeur moyenne demandée : énergie, moment magnétique, occupation d'un niveau.<br><strong>5.</strong> Étudier les limites $k_BT\\ll\\Delta E$ et $k_BT\\gg\\Delta E$.` },
          { type:'prop', label:'PROP', titre:'Température comme échelle énergétique',
            contenu:`La température intervient surtout par l'échelle $k_BT$. Une différence d'énergie petite devant $k_BT$ est facilement franchie par agitation thermique ; une différence grande devant $k_BT$ rend l'état haut très peu probable. Cette lecture par ordre de grandeur est souvent plus efficace qu'un calcul exact.` },
          { type:'prop', label:'PROP', titre:"Limites de l'équipartition classique",
            contenu:`L'équipartition est un résultat classique. Elle échoue lorsque les niveaux quantiques sont trop espacés devant $k_BT$ : certains degrés de liberté sont alors « gelés ». C'est ce qui explique que les capacités thermiques réelles puissent s'écarter des valeurs classiques à basse température.` },
        ]
      },
    ]
  },
];
