// Prépa CPGE — Physique
// Programmes officiels 2021/2022 des classes préparatoires scientifiques
// (MPSI/MP, PCSI/PC, PTSI/PT, PSI, TSI, MPI)
// matière : ph · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. INDUCTION ÉLECTROMAGNÉTIQUE
// ══════════════════════════════════════════════════════════════
{
  id: 'ph-indu', matiere: 'ph',
  titre: 'Induction électromagnétique', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Flux magnétique et lois fondamentales',
      cartes: [
        { type:'def', label:'DEF', titre:'Flux du champ magnétique',
          contenu:`Le <strong>flux magnétique</strong> à travers une surface orientée $S$ s'appuyant sur un circuit $\\mathcal{C}$ est :<br>$$\\Phi = \\iint_S \\vec{B}\\cdot \\mathrm{d}\\vec{S}$$<br>Unité : le <strong>weber</strong> (Wb $=$ T$\\cdot$m$^2$). L'orientation de $\\vec{\\mathrm{d}S}$ est liée au sens positif de parcours du circuit par la <strong>règle de la main droite</strong>.<br>Pour une bobine de $N$ spires identiques, on parle de <strong>flux total</strong> ou flux embrassé : $\\Phi_{\\text{tot}} = N\\,\\Phi_{\\text{spire}}$.` },
        { type:'th', label:'THM', titre:'Loi de Faraday',
          contenu:`La <strong>force électromotrice induite</strong> dans un circuit filiforme est l'opposé de la dérivée temporelle du flux qui le traverse :<br>$$e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$$<br>Le circuit est modélisé par un générateur de f.é.m. $e$ en convention générateur. Si le circuit de résistance $R$ est fermé, le courant induit vaut $i = e/R$.<br><strong>Hypothèse</strong> : valable pour tout circuit, que la variation de $\\Phi$ provienne d'un champ variable (induction de Neumann) ou d'un déplacement du circuit (induction de Lorentz).` },
        { type:'prop', label:'PROP', titre:'Loi de Lenz (modération)',
          contenu:`<strong>Loi de Lenz</strong> : par ses effets (courant induit, forces, f.é.m.), le phénomène d'induction s'oppose à la cause qui lui donne naissance.<br>Conséquences pratiques :<br><ul><li>le courant induit crée un champ qui tend à s'opposer à la <strong>variation</strong> de flux ;</li><li>les forces de Laplace sur un circuit mobile s'opposent au mouvement (freinage) ;</li><li>le signe $-$ de la loi de Faraday traduit directement la modération.</li></ul>C'est une manifestation de la conservation de l'énergie.` },
        { type:'meth', label:'METH', titre:'Déterminer le sens du courant induit',
          contenu:`<strong>1.</strong> Choisir une orientation du circuit et la normale $\\vec{n}$ associée.<br><strong>2.</strong> Calculer $\\Phi(t)$ avec son signe.<br><strong>3.</strong> Appliquer $e = -\\mathrm{d}\\Phi/\\mathrm{d}t$ : le signe de $e$ donne $i = e/R$ dans le sens choisi.<br><strong>4.</strong> Vérification qualitative par Lenz : le courant induit doit créer un champ qui modère la variation de $\\Phi$. Si $\\Phi$ augmente, le champ induit est opposé à $\\vec{B}$ ; s'il diminue, il le renforce.` },
        { type:'ex', label:'EX', titre:'Aimant approché d\'une spire',
          contenu:`On approche le pôle Nord d'un aimant d'une spire circulaire. Le flux entrant à travers la spire <strong>augmente</strong>.<br>Par Lenz, le courant induit s'oppose à cette augmentation : il circule de façon à présenter une <strong>face Nord</strong> vers l'aimant (champ induit opposé), ce qui <strong>repousse</strong> l'aimant. On doit fournir un travail pour l'approcher : c'est ce travail qui alimente l'énergie dissipée par effet Joule.` },
      ]
    },

    {
      titre: 'Auto-induction et inductance mutuelle',
      cartes: [
        { type:'def', label:'DEF', titre:'Inductance propre',
          contenu:`Un circuit parcouru par un courant $i$ crée un champ propre dont le flux à travers lui-même est proportionnel à $i$ :<br>$$\\Phi_{\\text{propre}} = L\\,i$$<br>$L > 0$ est l'<strong>inductance propre</strong> (ou self-inductance), en <strong>henry</strong> (H). Elle ne dépend que de la <strong>géométrie</strong> du circuit (et du milieu).<br>La f.é.m. d'auto-induction vaut $e = -L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}$, d'où la relation tension-courant en convention récepteur : $u_L = L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}$.` },
        { type:'form', label:'FORM', titre:'Inductance d\'un solénoïde',
          contenu:`Pour un solénoïde long de longueur $\\ell$, de section $S$, comportant $N$ spires ($n = N/\\ell$ spires par mètre), le champ intérieur est $B = \\mu_0 n i$ et :<br>$$L = \\frac{\\mu_0 N^2 S}{\\ell} = \\mu_0 n^2 S \\ell = \\mu_0 n^2 \\, V$$<br>où $V = S\\ell$ est le volume intérieur. $L$ croît comme le <strong>carré</strong> du nombre de spires.` },
        { type:'def', label:'DEF', titre:'Inductance mutuelle',
          contenu:`Pour deux circuits couplés, le flux du circuit 1 à travers le circuit 2 s'écrit $\\Phi_{1\\to 2} = M\\,i_1$ et réciproquement $\\Phi_{2\\to 1} = M\\,i_2$, avec la <strong>même</strong> constante $M$ (théorème de réciprocité de Neumann) :<br>$$\\Phi_{1\\to 2} = M\\, i_1, \\qquad \\Phi_{2\\to 1} = M\\, i_2$$<br>$M$ (en henry) peut être positif ou négatif selon les orientations. Couplage parfait : $|M| = \\sqrt{L_1 L_2}$ ; en général $M^2 \\le L_1 L_2$.` },
        { type:'prop', label:'PROP', titre:'Équations de circuits couplés',
          contenu:`Pour deux circuits couplés de résistances $R_1, R_2$, d'inductances $L_1, L_2$ et de mutuelle $M$, alimentés par $e_1, e_2$ :<br>$$e_1 = R_1 i_1 + L_1 \\frac{\\mathrm{d}i_1}{\\mathrm{d}t} + M\\frac{\\mathrm{d}i_2}{\\mathrm{d}t}$$<br>$$e_2 = R_2 i_2 + L_2 \\frac{\\mathrm{d}i_2}{\\mathrm{d}t} + M\\frac{\\mathrm{d}i_1}{\\mathrm{d}t}$$<br>Le terme en $M$ traduit le couplage : une variation de courant dans un circuit induit une f.é.m. dans l'autre (principe du transformateur).` },
        { type:'ex', label:'EX', titre:'Établissement du courant dans un circuit RL',
          contenu:`Un circuit $RL$ série branché à $t=0$ sur une source $E$ continue vérifie $E = Ri + L\\,\\mathrm{d}i/\\mathrm{d}t$.<br>Solution : $i(t) = \\dfrac{E}{R}\\left(1 - e^{-t/\\tau}\\right)$ avec $\\tau = L/R$.<br>Le courant ne peut <strong>pas</strong> être discontinu (l'énergie magnétique $\\frac12 L i^2$ est continue). En régime permanent $i_\\infty = E/R$ et la bobine se comporte comme un fil.` },
      ]
    },

    {
      titre: 'Conversion électromécanique : circuit mobile',
      cartes: [
        { type:'def', label:'DEF', titre:'Champ électromoteur de Lorentz',
          contenu:`Une portion de conducteur se déplaçant à la vitesse $\\vec{v}$ dans un champ $\\vec{B}$ stationnaire subit un <strong>champ électromoteur</strong> $\\vec{E}_m = \\vec{v}\\wedge\\vec{B}$ agissant sur les porteurs.<br>La f.é.m. induite (induction de Lorentz) est la circulation de ce champ le long du circuit :<br>$$e = \\oint_{\\mathcal{C}} (\\vec{v}\\wedge\\vec{B})\\cdot \\mathrm{d}\\vec{\\ell}$$<br>Elle est cohérente avec la loi de Faraday $e = -\\mathrm{d}\\Phi/\\mathrm{d}t$, le flux variant ici par déformation/déplacement du circuit.` },
        { type:'th', label:'THM', titre:'Couplage électromécanique parfait',
          contenu:`Pour un circuit mobile dans un champ stationnaire, la <strong>puissance des forces de Laplace</strong> est l'opposé de la <strong>puissance électrique induite</strong> :<br>$$\\mathcal{P}_{\\text{Laplace}} = -\\,e\\,i = -\\,\\mathcal{P}_{\\text{induite}}$$<br>Le couplage est <strong>parfait</strong> : aucune énergie n'est créée ni perdue dans la conversion. L'énergie mécanique fournie est intégralement convertie en énergie électrique (et inversement), aux pertes Joule près dans la charge.` },
        { type:'meth', label:'METH', titre:'Résoudre un problème de conversion',
          contenu:`<strong>1.</strong> Équation <strong>électrique</strong> : loi des mailles avec $e = -\\mathrm{d}\\Phi/\\mathrm{d}t$ (ou $e = B\\ell v$ pour une barre).<br><strong>2.</strong> Équation <strong>mécanique</strong> : PFD avec la force de Laplace $\\vec{F} = i\\,\\vec{\\ell}\\wedge\\vec{B}$.<br><strong>3.</strong> Coupler les deux équations (souvent un système différentiel $i, v$).<br><strong>4.</strong> Vérifier le <strong>bilan de puissance</strong> : $\\mathcal{P}_{\\text{méca}} = \\mathcal{P}_{\\text{Joule}} + \\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(E_c + \\tfrac12 L i^2\\right)$.` },
        { type:'prop', label:'PROP', titre:'Réversibilité moteur / générateur',
          contenu:`Un même dispositif fonctionne dans les deux sens :<br><ul><li><strong>Générateur</strong> (alternateur) : on impose le mouvement, la conversion produit de l'énergie électrique. La force de Laplace freine.</li><li><strong>Moteur</strong> : on impose un courant, la force de Laplace met en mouvement. Une f.é.m. de <strong>contre-réaction</strong> $e$ apparaît et limite le courant.</li></ul>Cette réversibilité est la base des machines électriques.` },
      ]
    },

    {
      titre: 'Rails de Laplace et freinage',
      cartes: [
        { type:'ex', label:'EX', titre:'Rails de Laplace générateur',
          contenu:`Une barre conductrice de longueur $\\ell$, masse $m$, glisse sans frottement à vitesse $v$ sur deux rails (résistance totale $R$) dans un champ $\\vec{B}$ uniforme vertical. La f.é.m. est $e = B\\ell v$, le courant $i = B\\ell v / R$.<br>Force de Laplace sur la barre : $F = -\\dfrac{B^2\\ell^2 v}{R}$ (freinage). PFD :<br>$$m\\frac{\\mathrm{d}v}{\\mathrm{d}t} = -\\frac{B^2\\ell^2}{R}\\,v \\;\\Rightarrow\\; v(t) = v_0\\,e^{-t/\\tau},\\quad \\tau = \\frac{mR}{B^2\\ell^2}$$` },
        { type:'ex', label:'EX', titre:'Rails de Laplace moteur (avec champ de pesanteur)',
          contenu:`Même dispositif sur un plan incliné d'angle $\\alpha$, la barre lâchée sans vitesse. PFD le long du plan :<br>$$m\\frac{\\mathrm{d}v}{\\mathrm{d}t} = mg\\sin\\alpha - \\frac{B^2\\ell^2}{R}v$$<br>Vitesse limite (régime permanent) : $v_{\\lim} = \\dfrac{mgR\\sin\\alpha}{B^2\\ell^2}$.<br>À cette vitesse, la puissance du poids $\\mathcal{P}_{\\text{poids}} = mgv_{\\lim}\\sin\\alpha$ est intégralement dissipée par effet Joule $Ri^2$.` },
        { type:'prop', label:'PROP', titre:'Freinage par induction (courants de Foucault)',
          contenu:`Lorsqu'un conducteur <strong>massif</strong> se déplace dans un champ non uniforme (ou un champ variable le traverse), des <strong>courants de Foucault</strong> (courants induits volumiques) apparaissent.<br>Par Lenz, ils s'opposent au mouvement : c'est le <strong>freinage par induction</strong> (freins de poids lourds, ralentisseurs, amortissement de galvanomètres).<br>La puissance dissipée croît avec $v$ (freinage d'autant plus fort que la vitesse est grande), mais <strong>s'annule à l'arrêt</strong> : le freinage par induction ne permet pas d'immobiliser.` },
        { type:'meth', label:'METH', titre:'Bilan énergétique d\'un dispositif inductif',
          contenu:`Multiplier l'équation électrique par $i$ et la mécanique par $v$, puis sommer :<br><ul><li>$\\mathcal{P}$ fournie par les sources $=$ $\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\tfrac12 L i^2\\right)$ (variation d'énergie magnétique) $+\\,Ri^2$ (Joule) $+\\,\\dfrac{\\mathrm{d}E_c}{\\mathrm{d}t}$ (cinétique) ;</li><li>les termes de couplage $e\\,i$ et $\\mathcal{P}_{\\text{Laplace}}$ se <strong>compensent exactement</strong> (couplage parfait), ils n'apparaissent pas dans le bilan global.</li></ul>` },
      ]
    },

    {
      titre: 'Énergie magnétique',
      cartes: [
        { type:'form', label:'FORM', titre:'Énergie d\'une bobine',
          contenu:`L'énergie magnétique stockée dans une bobine d'inductance $L$ parcourue par $i$ est :<br>$$E_m = \\frac{1}{2}L\\,i^2$$<br>Cette énergie est <strong>continue</strong> : le courant dans une bobine ne peut subir de discontinuité (sinon $\\mathrm{d}i/\\mathrm{d}t$ et la puissance seraient infinis). En régime variable, la puissance reçue est $u_L\\,i = L i\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t} = \\dfrac{\\mathrm{d}E_m}{\\mathrm{d}t}$.` },
        { type:'form', label:'FORM', titre:'Densité volumique d\'énergie magnétique',
          contenu:`L'énergie magnétique est localisée dans tout l'espace où règne le champ, avec une densité volumique :<br>$$u_m = \\frac{B^2}{2\\mu_0}\\quad (\\text{J}\\cdot\\text{m}^{-3})$$<br>Vérification sur le solénoïde : $E_m = u_m \\cdot V = \\dfrac{(\\mu_0 n i)^2}{2\\mu_0}\\, S\\ell = \\dfrac{1}{2}(\\mu_0 n^2 S\\ell)\\,i^2 = \\dfrac12 L i^2$. Cohérent avec $L = \\mu_0 n^2 S\\ell$.` },
        { type:'prop', label:'PROP', titre:'Énergie de deux circuits couplés',
          contenu:`L'énergie magnétique totale de deux circuits couplés s'écrit :<br>$$E_m = \\frac{1}{2}L_1 i_1^2 + \\frac{1}{2}L_2 i_2^2 + M\\, i_1 i_2$$<br>La positivité de cette énergie pour tout $(i_1,i_2)$ impose la condition $M^2 \\le L_1 L_2$, soit $|M| \\le \\sqrt{L_1 L_2}$. Le coefficient de couplage $k = |M|/\\sqrt{L_1 L_2}$ vérifie $0 \\le k \\le 1$.` },
        { type:'ex', label:'EX', titre:'Décharge d\'une bobine dans une résistance',
          contenu:`Une bobine $(L)$ parcourue par $i_0$ est connectée à $t=0$ sur une résistance $R$. Alors $0 = Ri + L\\,\\mathrm{d}i/\\mathrm{d}t$, d'où $i(t) = i_0\\,e^{-t/\\tau}$, $\\tau = L/R$.<br>Énergie totale dissipée :<br>$$W_J = \\int_0^\\infty Ri^2\\,\\mathrm{d}t = \\frac{1}{2}L i_0^2$$<br>Toute l'énergie magnétique initiale est convertie en chaleur par effet Joule.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 2. OSCILLATEURS
// ══════════════════════════════════════════════════════════════
{
  id: 'ph-osc', matiere: 'ph',
  titre: 'Oscillateurs', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Oscillateur harmonique libre',
      cartes: [
        { type:'def', label:'DEF', titre:'Équation de l\'oscillateur harmonique',
          contenu:`Un <strong>oscillateur harmonique</strong> est un système dont l'écart $x$ à l'équilibre vérifie :<br>$$\\ddot{x} + \\omega_0^2\\, x = 0$$<br>$\\omega_0$ est la <strong>pulsation propre</strong> (rad$\\cdot$s$^{-1}$). La solution générale est sinusoïdale :<br>$$x(t) = A\\cos(\\omega_0 t + \\varphi)$$<br>Période propre $T_0 = \\dfrac{2\\pi}{\\omega_0}$, fréquence $f_0 = \\dfrac{1}{T_0}$. $A$ et $\\varphi$ sont fixées par les conditions initiales.` },
        { type:'form', label:'FORM', titre:'Pulsations propres usuelles',
          contenu:`<ul><li><strong>Masse-ressort</strong> ($m$, raideur $k$) : $\\omega_0 = \\sqrt{\\dfrac{k}{m}}$.</li><li><strong>Pendule simple</strong> (longueur $\\ell$, petites oscillations) : $\\omega_0 = \\sqrt{\\dfrac{g}{\\ell}}$.</li><li><strong>Circuit LC</strong> : $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$.</li><li><strong>Pendule de torsion</strong> (constante $C$, moment d'inertie $J$) : $\\omega_0 = \\sqrt{\\dfrac{C}{J}}$.</li></ul>` },
        { type:'th', label:'THM', titre:'Conservation de l\'énergie mécanique',
          contenu:`Pour l'oscillateur masse-ressort horizontal sans frottement, l'énergie mécanique est constante :<br>$$E_m = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}k x^2 = \\frac{1}{2}k A^2 = \\text{cste}$$<br>Il y a <strong>échange permanent</strong> entre énergie cinétique et énergie potentielle, à somme constante. La dérivation de $E_m = \\text{cste}$ redonne directement l'équation $\\ddot{x} + \\omega_0^2 x = 0$.` },
        { type:'meth', label:'METH', titre:'Linéarisation autour d\'un équilibre stable',
          contenu:`Pour un système à un degré de liberté d'énergie potentielle $E_p(x)$ :<br><strong>1.</strong> Positions d'équilibre : $E_p'(x_{\\text{eq}}) = 0$.<br><strong>2.</strong> Stabilité : équilibre <strong>stable</strong> si $E_p''(x_{\\text{eq}}) > 0$ (minimum).<br><strong>3.</strong> Au voisinage : $E_p(x) \\approx E_p(x_{\\text{eq}}) + \\tfrac12 E_p''(x_{\\text{eq}})(x-x_{\\text{eq}})^2$.<br><strong>4.</strong> Pulsation des petites oscillations : $\\omega_0 = \\sqrt{\\dfrac{E_p''(x_{\\text{eq}})}{m}}$ (oscillateur harmonique équivalent).` },
        { type:'ex', label:'EX', titre:'Pendule simple : petites oscillations',
          contenu:`Pour un pendule de longueur $\\ell$, le théorème du moment cinétique donne $\\ddot{\\theta} + \\dfrac{g}{\\ell}\\sin\\theta = 0$.<br>Pour de petites amplitudes, $\\sin\\theta \\approx \\theta$ :<br>$$\\ddot{\\theta} + \\frac{g}{\\ell}\\theta = 0 \\;\\Rightarrow\\; T_0 = 2\\pi\\sqrt{\\frac{\\ell}{g}}$$<br>L'<strong>isochronisme des petites oscillations</strong> : $T_0$ est indépendant de l'amplitude. Cette propriété est <strong>perdue</strong> aux grandes amplitudes (anharmonicité).` },
      ]
    },

    {
      titre: 'Oscillateur amorti en régime libre',
      cartes: [
        { type:'def', label:'DEF', titre:'Équation et facteur de qualité',
          contenu:`Avec un frottement fluide ($-\\lambda \\dot{x}$), l'équation devient :<br>$$\\ddot{x} + \\frac{\\omega_0}{Q}\\,\\dot{x} + \\omega_0^2\\, x = 0$$<br>Le <strong>facteur de qualité</strong> $Q$ (sans dimension) mesure la faiblesse de l'amortissement. On note aussi le coefficient d'amortissement $\\xi = \\dfrac{1}{2Q}$, ou le facteur $\\sigma = \\dfrac{\\omega_0}{2Q}$ tel que l'équation s'écrive $\\ddot{x} + 2\\sigma \\dot{x} + \\omega_0^2 x = 0$.<br>Pour le $RLC$ série : $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ et $Q = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}} = \\dfrac{L\\omega_0}{R}$.` },
        { type:'th', label:'THM', titre:'Les trois régimes libres',
          contenu:`On compare le discriminant de l'équation caractéristique $r^2 + \\frac{\\omega_0}{Q}r + \\omega_0^2 = 0$ :<br><ul><li>$Q > \\frac{1}{2}$ : <strong>régime pseudo-périodique</strong>, oscillations amorties (racines complexes).</li><li>$Q = \\frac{1}{2}$ : <strong>régime critique</strong>, retour le plus rapide sans oscillation (racine double).</li><li>$Q < \\frac{1}{2}$ : <strong>régime apériodique</strong>, retour lent sans oscillation (racines réelles).</li></ul>` },
        { type:'form', label:'FORM', titre:'Régime pseudo-périodique',
          contenu:`Pour $Q > \\frac12$, la solution est une oscillation à amplitude décroissante :<br>$$x(t) = A\\,e^{-t/\\tau}\\cos(\\omega t + \\varphi),\\qquad \\tau = \\frac{2Q}{\\omega_0}$$<br><strong>Pseudo-pulsation</strong> : $\\omega = \\omega_0\\sqrt{1 - \\dfrac{1}{4Q^2}} < \\omega_0$.<br>Pseudo-période $T = \\dfrac{2\\pi}{\\omega}$. Pour $Q \\gg 1$, $\\omega \\approx \\omega_0$ : l'amortissement décale peu la fréquence.` },
        { type:'prop', label:'PROP', titre:'Interprétation énergétique de Q',
          contenu:`Le facteur de qualité s'interprète énergétiquement (pour $Q \\gg 1$) :<br>$$Q = 2\\pi \\,\\frac{\\text{énergie stockée}}{\\text{énergie dissipée par période}}$$<br>Un grand $Q$ signifie un amortissement faible : l'oscillateur effectue de nombreuses oscillations (environ $Q/\\pi$) avant de perdre l'essentiel de son énergie. L'enveloppe énergétique décroît en $e^{-t/\\tau_E}$ avec $\\tau_E = \\tau/2 = Q/\\omega_0$.` },
        { type:'ex', label:'EX', titre:'Décharge oscillante d\'un circuit RLC',
          contenu:`Un condensateur chargé sous $U_0$ se décharge dans un circuit $RLC$ série faiblement résistif ($Q > \\frac12$). La tension oscille :<br>$$u_C(t) \\approx U_0\\,e^{-t/\\tau}\\cos(\\omega t),\\quad \\tau = \\frac{2L}{R}$$<br>On peut mesurer $Q$ expérimentalement par le <strong>décrément logarithmique</strong> $\\delta = \\ln\\dfrac{x(t)}{x(t+T)} = \\dfrac{T}{\\tau}$, qui donne accès à l'amortissement.` },
      ]
    },

    {
      titre: 'Régime sinusoïdal forcé',
      cartes: [
        { type:'def', label:'DEF', titre:'Oscillateur forcé et régime permanent',
          contenu:`Soumis à une excitation sinusoïdale de pulsation $\\omega$, l'oscillateur vérifie par exemple :<br>$$\\ddot{x} + \\frac{\\omega_0}{Q}\\,\\dot{x} + \\omega_0^2\\, x = \\frac{F_0}{m}\\cos(\\omega t)$$<br>Après extinction du régime transitoire (sur une durée $\\sim \\tau$), s'établit un <strong>régime forcé permanent sinusoïdal</strong> à la <strong>pulsation imposée</strong> $\\omega$ :<br>$$x(t) = X(\\omega)\\cos\\big(\\omega t + \\psi(\\omega)\\big)$$` },
        { type:'meth', label:'METH', titre:'Résolution par les complexes',
          contenu:`<strong>1.</strong> Représenter $x(t)$ par $\\underline{x} = \\underline{X}\\,e^{j\\omega t}$, $\\dot{x} \\to j\\omega\\,\\underline{x}$, $\\ddot{x} \\to -\\omega^2\\,\\underline{x}$.<br><strong>2.</strong> Reporter dans l'équation et factoriser par $\\underline{x}$.<br><strong>3.</strong> Obtenir l'amplitude complexe $\\underline{X} = \\dfrac{F_0/m}{\\omega_0^2 - \\omega^2 + j\\,\\omega\\omega_0/Q}$.<br><strong>4.</strong> Module $X = |\\underline{X}|$ (amplitude réelle), argument $\\psi = \\arg\\underline{X}$ (déphasage). Méthode systématique et bien plus rapide que la résolution réelle.` },
        { type:'th', label:'THM', titre:'Résonance en amplitude (élongation)',
          contenu:`L'amplitude $X(\\omega)$ présente un maximum (résonance) à la pulsation :<br>$$\\omega_r = \\omega_0\\sqrt{1 - \\frac{1}{2Q^2}}$$<br><strong>Condition d'existence</strong> : la résonance d'amplitude n'apparaît que si $Q > \\dfrac{1}{\\sqrt{2}}$. Pour $Q \\le \\frac{1}{\\sqrt2}$, $X(\\omega)$ décroît dès $\\omega = 0$ (pas de résonance).<br>Pour $Q \\gg 1$, $\\omega_r \\approx \\omega_0$ et l'amplitude au pic vaut $X_{\\max} \\approx Q\\,X_{\\text{stat}}$ : très grande pour un faible amortissement.` },
        { type:'th', label:'THM', titre:'Résonance en vitesse',
          contenu:`L'amplitude de la <strong>vitesse</strong> $V(\\omega) = \\omega X(\\omega)$ présente une résonance <strong>toujours</strong> située en $\\omega = \\omega_0$, <strong>quel que soit</strong> $Q$ (contrairement à la résonance d'amplitude).<br>À cette résonance, la vitesse est <strong>en phase</strong> avec l'excitation, le transfert de puissance de l'excitateur vers l'oscillateur est <strong>maximal</strong>. Pour le $RLC$ série, c'est la résonance d'intensité ($I$ maximal en $\\omega_0$).` },
        { type:'prop', label:'PROP', titre:'Bande passante et acuité',
          contenu:`Pour la résonance en vitesse (ou en intensité), la <strong>bande passante à $-3$ dB</strong> $\\Delta\\omega$ (où la puissance est divisée par 2) vérifie :<br>$$\\frac{\\Delta\\omega}{\\omega_0} = \\frac{1}{Q}$$<br>Un grand $Q$ donne une résonance <strong>aiguë</strong> (sélective en fréquence) ; un petit $Q$ donne une résonance <strong>floue</strong>. C'est le principe de la sélectivité d'un circuit accordé (radio, filtres).` },
        { type:'ex', label:'EX', titre:'Déphasage tension-courant d\'un RLC',
          contenu:`Pour un $RLC$ série alimenté en $u(t) = U_0\\cos(\\omega t)$, l'intensité est $i(t) = I_0\\cos(\\omega t - \\varphi)$ avec :<br>$$\\tan\\varphi = \\frac{L\\omega - \\frac{1}{C\\omega}}{R}$$<br><ul><li>$\\omega < \\omega_0$ : $\\varphi < 0$, circuit <strong>capacitif</strong> ($i$ en avance) ;</li><li>$\\omega = \\omega_0$ : $\\varphi = 0$, circuit <strong>résistif</strong> (résonance) ;</li><li>$\\omega > \\omega_0$ : $\\varphi > 0$, circuit <strong>inductif</strong>.</li></ul>` },
      ]
    },

    {
      titre: 'Analogie électromécanique',
      cartes: [
        { type:'prop', label:'PROP', titre:'Tableau d\'analogie',
          contenu:`L'équation $m\\ddot{x} + \\lambda\\dot{x} + kx = F(t)$ et $L\\ddot{q} + R\\dot{q} + \\dfrac{q}{C} = e(t)$ sont <strong>formellement identiques</strong> :<br><ul><li>position $x \\leftrightarrow$ charge $q$ ;</li><li>vitesse $\\dot{x} \\leftrightarrow$ intensité $i$ ;</li><li>masse $m \\leftrightarrow$ inductance $L$ (inertie) ;</li><li>frottement $\\lambda \\leftrightarrow$ résistance $R$ (dissipation) ;</li><li>raideur $k \\leftrightarrow$ inverse de capacité $1/C$ (rappel) ;</li><li>force $F \\leftrightarrow$ f.é.m. $e$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Correspondance des grandeurs caractéristiques',
          contenu:`L'analogie se prolonge aux grandeurs dérivées :<br>$$\\omega_0 = \\sqrt{\\frac{k}{m}} \\leftrightarrow \\frac{1}{\\sqrt{LC}}, \\qquad Q = \\frac{m\\omega_0}{\\lambda} \\leftrightarrow \\frac{L\\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$<br>Énergies : cinétique $\\tfrac12 m\\dot{x}^2 \\leftrightarrow \\tfrac12 L i^2$ (magnétique), potentielle $\\tfrac12 kx^2 \\leftrightarrow \\tfrac{q^2}{2C}$ (électrique). Puissance dissipée $\\lambda\\dot{x}^2 \\leftrightarrow Ri^2$.` },
        { type:'meth', label:'METH', titre:'Exploiter l\'analogie',
          contenu:`L'analogie permet de <strong>transposer</strong> tout résultat d'un domaine à l'autre sans recalcul : régimes libres, résonance, bande passante, bilans d'énergie. On résout le problème dans le domaine le plus simple (souvent l'électrocinétique, grâce aux complexes), puis on traduit. Elle justifie aussi la <strong>simulation analogique</strong> : étudier un système mécanique via un circuit électrique équivalent.` },
      ]
    },

    {
      titre: 'Portrait de phase',
      cartes: [
        { type:'def', label:'DEF', titre:'Espace et portrait de phase',
          contenu:`L'<strong>espace des phases</strong> d'un système à un degré de liberté est le plan $(x, \\dot{x})$. L'évolution au cours du temps décrit une courbe orientée appelée <strong>trajectoire de phase</strong>. L'ensemble des trajectoires forme le <strong>portrait de phase</strong>.<br>Propriété fondamentale : par un point de l'espace des phases passe une <strong>unique</strong> trajectoire (déterminisme) ; deux trajectoires ne se croisent jamais.` },
        { type:'prop', label:'PROP', titre:'Allure selon le régime',
          contenu:`<ul><li><strong>Oscillateur harmonique</strong> non amorti : trajectoires <strong>fermées</strong> (ellipses), parcourues dans le sens horaire. Centre $=$ point fixe stable.</li><li><strong>Pseudo-périodique</strong> : <strong>spirale</strong> convergeant vers l'origine (foyer stable).</li><li><strong>Apériodique / critique</strong> : retour direct à l'origine sans spire (nœud).</li></ul>L'origine $(0,0)$ est l'<strong>attracteur</strong> en présence de dissipation.` },
        { type:'meth', label:'METH', titre:'Lire un portrait de phase',
          contenu:`<strong>1.</strong> <strong>Sens de parcours</strong> : dans le demi-plan $\\dot{x} > 0$, $x$ augmente (parcours vers la droite) — toujours horaire.<br><strong>2.</strong> Points où la courbe coupe l'axe $\\dot{x} = 0$ : <strong>extrema</strong> de $x$ (vitesse nulle).<br><strong>3.</strong> Points où elle coupe l'axe $x = 0$ : passages par l'équilibre, vitesse extrémale.<br><strong>4.</strong> Courbe <strong>fermée</strong> $\\Rightarrow$ mouvement périodique ; <strong>spirale</strong> $\\Rightarrow$ amortissement.` },
        { type:'ex', label:'EX', titre:'Portrait de phase du pendule (grandes amplitudes)',
          contenu:`Pour le pendule non linéaire $\\ddot{\\theta} + \\omega_0^2\\sin\\theta = 0$, le portrait de phase révèle deux comportements :<br><ul><li>près de $\\theta = 0$ : courbes <strong>fermées</strong> $\\to$ oscillations (l'énergie est insuffisante pour passer au-dessus) ;</li><li>au-delà d'une énergie seuil : courbes <strong>ouvertes</strong> $\\to$ révolutions (le pendule tourne).</li></ul>Les deux régimes sont séparés par une <strong>séparatrice</strong> passant par les points d'équilibre instables $\\theta = \\pm\\pi$.` },
      ]
    },

    {
      titre: 'Oscillateurs couplés',
      cartes: [
        { type:'def', label:'DEF', titre:'Système couplé et modes propres',
          contenu:`Deux oscillateurs identiques couplés (par un ressort, une mutuelle...) sont décrits par un système d'équations différentielles couplées en $(x_1, x_2)$.<br>Un <strong>mode propre</strong> est une solution où les deux oscillateurs vibrent à la <strong>même</strong> pulsation, avec un rapport d'amplitude fixe. Un système à $n$ degrés de liberté possède $n$ modes propres.` },
        { type:'meth', label:'METH', titre:'Découplage par variables normales',
          contenu:`Pour deux oscillateurs identiques couplés symétriquement, on introduit les <strong>coordonnées normales</strong> :<br>$$S = x_1 + x_2 \\quad (\\text{mode symétrique}), \\qquad D = x_1 - x_2 \\quad (\\text{mode antisymétrique})$$<br>Par somme et différence des équations, $S$ et $D$ vérifient chacune une équation d'oscillateur harmonique <strong>découplée</strong>, de pulsations propres $\\omega_S$ et $\\omega_D$. Le mouvement général est une superposition des deux modes.` },
        { type:'prop', label:'PROP', titre:'Modes symétrique et antisymétrique',
          contenu:`Pour deux masses $m$ reliées par trois ressorts (raideur $k$ aux murs, $k'$ au centre) :<br><ul><li><strong>Mode symétrique</strong> ($x_1 = x_2$) : le ressort central n'est pas sollicité, $\\omega_S = \\sqrt{\\dfrac{k}{m}}$.</li><li><strong>Mode antisymétrique</strong> ($x_1 = -x_2$) : couplage maximal, $\\omega_D = \\sqrt{\\dfrac{k + 2k'}{m}} > \\omega_S$.</li></ul>` },
        { type:'ex', label:'EX', titre:'Phénomène de battements',
          contenu:`Si on lance un seul oscillateur ($x_1(0) = a$, $x_2(0) = 0$) avec un couplage <strong>faible</strong> ($\\omega_D \\approx \\omega_S$), l'énergie passe <strong>périodiquement</strong> d'un oscillateur à l'autre :<br>$$x_1(t) = a\\cos\\!\\Big(\\tfrac{\\omega_D-\\omega_S}{2}t\\Big)\\cos\\!\\Big(\\tfrac{\\omega_D+\\omega_S}{2}t\\Big)$$<br>L'amplitude est modulée à la <strong>pulsation de battement</strong> $\\dfrac{\\omega_D - \\omega_S}{2}$ : c'est le transfert d'énergie caractéristique des pendules couplés.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 3. ÉQUATIONS DE MAXWELL
// ══════════════════════════════════════════════════════════════
{
  id: 'ph-max', matiere: 'ph',
  titre: 'Équations de Maxwell', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Les quatre équations de Maxwell',
      cartes: [
        { type:'th', label:'THM', titre:'Maxwell-Gauss',
          contenu:`Le flux du champ électrique est lié à la charge (forme locale et intégrale) :<br>$$\\operatorname{div}\\vec{E} = \\frac{\\rho}{\\varepsilon_0} \\qquad \\Longleftrightarrow \\qquad \\oiint_S \\vec{E}\\cdot\\mathrm{d}\\vec{S} = \\frac{Q_{\\text{int}}}{\\varepsilon_0}$$<br>Les charges sont les <strong>sources</strong> du flux du champ électrique. C'est le théorème de Gauss : le flux à travers une surface fermée ne dépend que de la charge intérieure.` },
        { type:'th', label:'THM', titre:'Maxwell-flux (flux magnétique)',
          contenu:`Le champ magnétique est à <strong>flux conservatif</strong> :<br>$$\\operatorname{div}\\vec{B} = 0 \\qquad \\Longleftrightarrow \\qquad \\oiint_S \\vec{B}\\cdot\\mathrm{d}\\vec{S} = 0$$<br>Il n'existe <strong>pas de charge magnétique</strong> (pas de monopôle) : les lignes de champ magnétique sont fermées (sans source ni puits). Le flux magnétique à travers toute surface fermée est nul.` },
        { type:'th', label:'THM', titre:'Maxwell-Faraday',
          contenu:`Un champ magnétique variable crée un champ électrique à circulation non nulle :<br>$$\\overrightarrow{\\operatorname{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\qquad \\Longleftrightarrow \\qquad \\oint_{\\mathcal{C}} \\vec{E}\\cdot\\mathrm{d}\\vec{\\ell} = -\\frac{\\mathrm{d}}{\\mathrm{d}t}\\iint_S \\vec{B}\\cdot\\mathrm{d}\\vec{S}$$<br>C'est la formulation locale de la <strong>loi de Faraday</strong>. Le champ électrique induit n'est <strong>pas</strong> à circulation conservative : il ne dérive pas d'un potentiel scalaire seul.` },
        { type:'th', label:'THM', titre:'Maxwell-Ampère',
          contenu:`Les courants <strong>et</strong> la variation du champ électrique créent le champ magnétique :<br>$$\\overrightarrow{\\operatorname{rot}}\\,\\vec{B} = \\mu_0\\vec{j} + \\mu_0\\varepsilon_0\\frac{\\partial \\vec{E}}{\\partial t}$$<br>Le terme $\\vec{j}_D = \\varepsilon_0\\dfrac{\\partial \\vec{E}}{\\partial t}$ est le <strong>courant de déplacement</strong> introduit par Maxwell. Il assure la cohérence avec la conservation de la charge et permet la propagation des ondes.` },
        { type:'prop', label:'PROP', titre:'Conservation de la charge',
          contenu:`La prise de la divergence de Maxwell-Ampère (avec $\\operatorname{div}(\\overrightarrow{\\operatorname{rot}}) = 0$) et Maxwell-Gauss redonne l'<strong>équation de conservation de la charge</strong> :<br>$$\\operatorname{div}\\vec{j} + \\frac{\\partial \\rho}{\\partial t} = 0$$<br>C'est justement pour assurer cette conservation que le courant de déplacement est <strong>indispensable</strong> : sans lui, Maxwell-Ampère serait incompatible avec la conservation de la charge en régime variable.` },
      ]
    },

    {
      titre: 'Formes locale et intégrale',
      cartes: [
        { type:'meth', label:'METH', titre:'Passer du local à l\'intégral',
          contenu:`Deux théorèmes d'analyse vectorielle relient les deux formes :<br><ul><li><strong>Théorème de Green-Ostrogradski</strong> (flux-divergence) : $\\displaystyle\\oiint_S \\vec{A}\\cdot\\mathrm{d}\\vec{S} = \\iiint_V \\operatorname{div}\\vec{A}\\;\\mathrm{d}\\tau$. Appliqué à Maxwell-Gauss et Maxwell-flux.</li><li><strong>Théorème de Stokes</strong> (circulation-rotationnel) : $\\displaystyle\\oint_{\\mathcal{C}} \\vec{A}\\cdot\\mathrm{d}\\vec{\\ell} = \\iint_S \\overrightarrow{\\operatorname{rot}}\\,\\vec{A}\\cdot\\mathrm{d}\\vec{S}$. Appliqué à Maxwell-Faraday et Maxwell-Ampère.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Théorème de Gauss (forme intégrale)',
          contenu:`En exploitant les symétries et invariances d'une distribution, le théorème de Gauss permet de calculer $\\vec{E}$ sans intégration :<br>$$\\oiint_S \\vec{E}\\cdot\\mathrm{d}\\vec{S} = \\frac{Q_{\\text{int}}}{\\varepsilon_0}$$<br><strong>Méthode</strong> : choisir une surface de Gauss adaptée (sphère, cylindre, ...) sur laquelle $\\vec{E}$ est uniforme et soit parallèle, soit perpendiculaire à $\\mathrm{d}\\vec{S}$. Idéal pour les distributions à haute symétrie.` },
        { type:'prop', label:'PROP', titre:'Théorème d\'Ampère (régime stationnaire)',
          contenu:`En magnétostatique ($\\partial \\vec{E}/\\partial t = 0$), Maxwell-Ampère donne le théorème d'Ampère :<br>$$\\oint_{\\mathcal{C}} \\vec{B}\\cdot\\mathrm{d}\\vec{\\ell} = \\mu_0\\, I_{\\text{enlacé}}$$<br>$I_{\\text{enlacé}}$ est l'intensité totale traversant une surface s'appuyant sur le contour $\\mathcal{C}$, comptée algébriquement (règle de la main droite). Permet de calculer $\\vec{B}$ (solénoïde, fil infini, câble coaxial).` },
        { type:'ex', label:'EX', titre:'Champ d\'un fil infini par Ampère',
          contenu:`Fil rectiligne infini parcouru par $I$. Par symétrie (invariance par rotation et translation), $\\vec{B} = B(r)\\,\\vec{u_\\theta}$. Contour d'Ampère : cercle de rayon $r$ centré sur le fil.<br>$$\\oint \\vec{B}\\cdot\\mathrm{d}\\vec{\\ell} = B(r)\\cdot 2\\pi r = \\mu_0 I \\;\\Rightarrow\\; B(r) = \\frac{\\mu_0 I}{2\\pi r}$$<br>Le champ décroît en $1/r$ et est orthoradial (lignes de champ circulaires).` },
      ]
    },

    {
      titre: 'Approximation des régimes quasi-stationnaires (ARQS)',
      cartes: [
        { type:'def', label:'DEF', titre:'Cadre de l\'ARQS',
          contenu:`L'<strong>ARQS</strong> est valable lorsque la dimension $L$ du système est très petite devant la longueur d'onde, soit un temps de propagation négligeable : $\\dfrac{L}{c} \\ll T$, où $T$ est le temps caractéristique de variation. On peut alors négliger les retards de propagation.<br>En pratique : on néglige le <strong>courant de déplacement</strong> devant le courant de conduction dans Maxwell-Ampère (ARQS <strong>magnétique</strong>).` },
        { type:'prop', label:'PROP', titre:'Équations de Maxwell dans l\'ARQS magnétique',
          contenu:`Dans l'ARQS magnétique, on conserve le terme $\\partial\\vec{B}/\\partial t$ (induction) mais on néglige $\\partial\\vec{E}/\\partial t$ :<br>$$\\operatorname{div}\\vec{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\operatorname{div}\\vec{B} = 0, \\quad \\overrightarrow{\\operatorname{rot}}\\,\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}, \\quad \\overrightarrow{\\operatorname{rot}}\\,\\vec{B} = \\mu_0\\vec{j}$$<br>Le théorème d'Ampère redevient valable. C'est le cadre de l'<strong>électrocinétique</strong> et de l'<strong>induction</strong> des circuits.` },
        { type:'prop', label:'PROP', titre:'Conséquences de l\'ARQS',
          contenu:`<ul><li>L'intensité est la <strong>même</strong> en tout point d'une branche (loi des nœuds valable).</li><li>$\\operatorname{div}\\vec{j} = 0$ : le courant est à flux conservatif.</li><li>Le champ magnétique est donné par les <strong>lois de la magnétostatique</strong> (Biot et Savart, Ampère) avec les courants instantanés.</li><li>L'induction (loi de Faraday) reste pleinement décrite.</li></ul>L'ARQS justifie l'étude des circuits avec les lois de Kirchhoff.` },
        { type:'meth', label:'METH', titre:'Vérifier la validité de l\'ARQS',
          contenu:`<strong>1.</strong> Estimer la fréquence $f$ et donc la longueur d'onde $\\lambda = c/f$.<br><strong>2.</strong> Comparer à la taille $L$ du dispositif : ARQS valable si $L \\ll \\lambda$.<br><strong>Exemple</strong> : à $f = 50$ Hz, $\\lambda = c/f \\approx 6000$ km $\\gg$ taille d'un circuit : l'ARQS est excellente. À $f = 1$ GHz, $\\lambda = 30$ cm : l'ARQS échoue pour un circuit de taille comparable, il faut traiter la propagation.` },
      ]
    },

    {
      titre: 'Énergie électromagnétique',
      cartes: [
        { type:'form', label:'FORM', titre:'Densité d\'énergie électromagnétique',
          contenu:`L'énergie électromagnétique est répartie dans l'espace avec une densité volumique :<br>$$u_{\\text{em}} = \\underbrace{\\frac{\\varepsilon_0 E^2}{2}}_{\\text{électrique}} + \\underbrace{\\frac{B^2}{2\\mu_0}}_{\\text{magnétique}} \\quad (\\text{J}\\cdot\\text{m}^{-3})$$<br>L'énergie totale dans un volume $V$ est $\\displaystyle U = \\iiint_V u_{\\text{em}}\\,\\mathrm{d}\\tau$. Ces deux contributions se retrouvent respectivement dans les condensateurs et les bobines.` },
        { type:'def', label:'DEF', titre:'Vecteur de Poynting',
          contenu:`Le <strong>vecteur de Poynting</strong> décrit le flux d'énergie électromagnétique :<br>$$\\vec{\\Pi} = \\frac{\\vec{E}\\wedge\\vec{B}}{\\mu_0} \\quad (\\text{W}\\cdot\\text{m}^{-2})$$<br>Son flux à travers une surface $S$ donne la <strong>puissance électromagnétique</strong> rayonnée à travers $S$ :<br>$$\\mathcal{P} = \\iint_S \\vec{\\Pi}\\cdot\\mathrm{d}\\vec{S}$$<br>Il indique la direction et le débit surfacique du transport d'énergie.` },
        { type:'th', label:'THM', titre:'Bilan d\'énergie (équation de Poynting)',
          contenu:`L'identité de Poynting traduit la conservation locale de l'énergie :<br>$$\\frac{\\partial u_{\\text{em}}}{\\partial t} + \\operatorname{div}\\vec{\\Pi} = -\\,\\vec{j}\\cdot\\vec{E}$$<br>Interprétation : la variation d'énergie em $+$ ce qui sort par le vecteur de Poynting $=$ $-\\vec{j}\\cdot\\vec{E}$, la <strong>puissance volumique cédée à la matière</strong> (effet Joule si $\\vec{j}\\cdot\\vec{E} > 0$). C'est le bilan énergétique fondamental du champ.` },
        { type:'ex', label:'EX', titre:'Effet Joule vu par le vecteur de Poynting',
          contenu:`Dans un fil cylindrique (rayon $a$, longueur $\\ell$, résistance $R$) parcouru par $I$ : à la surface, $E_{\\parallel} = \\dfrac{RI}{\\ell}$ et $B = \\dfrac{\\mu_0 I}{2\\pi a}$. Le vecteur de Poynting pointe <strong>vers l'intérieur</strong> du fil. Son flux entrant vaut :<br>$$\\mathcal{P} = \\Pi \\cdot (2\\pi a\\ell) = \\frac{RI}{\\ell}\\cdot\\frac{\\mu_0 I}{2\\pi a}\\cdot\\frac{2\\pi a\\ell}{\\mu_0} = RI^2$$<br>L'énergie dissipée par effet Joule <strong>entre par les côtés</strong> du fil via le champ électromagnétique.` },
      ]
    },

    {
      titre: 'Propagation dans le vide',
      cartes: [
        { type:'th', label:'THM', titre:'Équation de d\'Alembert',
          contenu:`Dans le vide sans charges ni courants ($\\rho = 0$, $\\vec{j} = \\vec{0}$), la combinaison des équations de Maxwell donne une <strong>équation de propagation</strong> :<br>$$\\Delta \\vec{E} - \\frac{1}{c^2}\\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}, \\qquad \\Delta \\vec{B} - \\frac{1}{c^2}\\frac{\\partial^2 \\vec{B}}{\\partial t^2} = \\vec{0}$$<br>avec la <strong>célérité</strong> $c = \\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}} \\approx 3{,}0\\cdot 10^8$ m/s. C'est l'équation de d'Alembert : $\\vec{E}$ et $\\vec{B}$ se propagent à la vitesse de la lumière.` },
        { type:'meth', label:'METH', titre:'Établir l\'équation de propagation',
          contenu:`<strong>1.</strong> Prendre le rotationnel de Maxwell-Faraday : $\\overrightarrow{\\operatorname{rot}}(\\overrightarrow{\\operatorname{rot}}\\,\\vec{E}) = -\\dfrac{\\partial}{\\partial t}(\\overrightarrow{\\operatorname{rot}}\\,\\vec{B})$.<br><strong>2.</strong> Utiliser l'identité $\\overrightarrow{\\operatorname{rot}}(\\overrightarrow{\\operatorname{rot}}\\,\\vec{E}) = \\overrightarrow{\\operatorname{grad}}(\\operatorname{div}\\vec{E}) - \\Delta\\vec{E}$.<br><strong>3.</strong> Injecter $\\operatorname{div}\\vec{E} = 0$ (vide) et Maxwell-Ampère $\\overrightarrow{\\operatorname{rot}}\\,\\vec{B} = \\mu_0\\varepsilon_0\\,\\partial\\vec{E}/\\partial t$.<br><strong>4.</strong> On obtient l'équation de d'Alembert avec $c^2 = 1/(\\mu_0\\varepsilon_0)$.` },
        { type:'def', label:'DEF', titre:'Onde plane progressive monochromatique (OPPM)',
          contenu:`Une <strong>OPPM</strong> est une solution de la forme $\\vec{E} = \\vec{E_0}\\cos(\\omega t - \\vec{k}\\cdot\\vec{r})$ avec :<br><ul><li>$\\vec{k}$ vecteur d'onde, $k = \\|\\vec{k}\\|$, direction de propagation ;</li><li><strong>relation de dispersion</strong> : $k = \\dfrac{\\omega}{c}$ (dans le vide) ;</li><li>longueur d'onde $\\lambda = \\dfrac{2\\pi}{k} = \\dfrac{cT}{1}$.</li></ul>Les surfaces d'onde (équiphases) sont des <strong>plans</strong> perpendiculaires à $\\vec{k}$.` },
        { type:'prop', label:'PROP', titre:'Structure de l\'onde plane dans le vide',
          contenu:`Pour une OPPM se propageant selon $\\vec{u} = \\vec{k}/k$ :<br><ul><li>$\\vec{E} \\perp \\vec{u}$ et $\\vec{B} \\perp \\vec{u}$ : l'onde est <strong>transverse</strong> (TEM) ;</li><li>$\\vec{E} \\perp \\vec{B}$, et le trièdre $(\\vec{E}, \\vec{B}, \\vec{u})$ est <strong>direct</strong> ;</li><li>relation de structure : $\\vec{B} = \\dfrac{\\vec{u}\\wedge\\vec{E}}{c}$, soit en norme $B = \\dfrac{E}{c}$.</li></ul>$\\vec{E}$ et $\\vec{B}$ sont <strong>en phase</strong>.` },
        { type:'form', label:'FORM', titre:'Énergie et puissance d\'une OPPM',
          contenu:`Pour une OPPM dans le vide, les densités d'énergie électrique et magnétique sont <strong>égales</strong> ($\\varepsilon_0 E^2/2 = B^2/2\\mu_0$ car $B = E/c$). Vecteur de Poynting :<br>$$\\vec{\\Pi} = \\varepsilon_0 c\\, E^2\\,\\vec{u}, \\qquad \\langle\\Pi\\rangle = \\frac{\\varepsilon_0 c\\, E_0^2}{2}$$<br>L'<strong>éclairement</strong> (intensité moyenne) est $\\langle\\Pi\\rangle$. L'énergie se propage à la vitesse $c$ dans la direction $\\vec{u}$.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 4. FORCES CENTRALES ET INTERACTION NEWTONIENNE
// ══════════════════════════════════════════════════════════════
{
  id: 'ph-newton', matiere: 'ph',
  titre: 'Forces centrales et interaction newtonienne', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Mouvement à force centrale',
      cartes: [
        { type:'def', label:'DEF', titre:'Force centrale',
          contenu:`Une <strong>force centrale</strong> est constamment dirigée vers (ou depuis) un point fixe $O$ appelé <strong>centre de force</strong> :<br>$$\\vec{F} = F(r)\\,\\vec{u_r}$$<br>où $\\vec{u_r}$ est le vecteur radial depuis $O$ et $r = OM$. La force est <strong>attractive</strong> si $F(r) < 0$, <strong>répulsive</strong> si $F(r) > 0$. Exemples : gravitation, force de Coulomb, force de rappel élastique centrale.` },
        { type:'th', label:'THM', titre:'Conservation du moment cinétique',
          contenu:`Le moment de la force centrale en $O$ est nul ($\\vec{F} \\parallel \\vec{OM}$), donc d'après le théorème du moment cinétique, $\\vec{L_O}$ est <strong>constant</strong> :<br>$$\\vec{L_O} = m\\,\\vec{OM}\\wedge\\vec{v} = \\overrightarrow{\\text{cste}}$$<br>Deux conséquences majeures :<br><ul><li>le mouvement est <strong>plan</strong> (dans le plan perpendiculaire à $\\vec{L_O}$ contenant $O$) ;</li><li>la <strong>loi des aires</strong> est vérifiée.</li></ul>` },
        { type:'th', label:'THM', titre:'Loi des aires (2e loi de Kepler généralisée)',
          contenu:`En coordonnées polaires $(r, \\theta)$ dans le plan du mouvement, la conservation de $L_O = m r^2\\dot{\\theta}$ donne la <strong>constante des aires</strong> :<br>$$C = r^2\\dot{\\theta} = \\frac{L_O}{m} = \\text{cste}$$<br>La <strong>vitesse aréolaire</strong> $\\dfrac{\\mathrm{d}\\mathcal{A}}{\\mathrm{d}t} = \\dfrac{1}{2}r^2\\dot{\\theta} = \\dfrac{C}{2}$ est constante : le rayon vecteur balaie des aires égales pendant des durées égales. Le mobile va plus vite près du centre.` },
        { type:'prop', label:'PROP', titre:'Formules de Binet',
          contenu:`En posant $u = 1/r$, la conservation de $C$ permet d'éliminer le temps. Vitesse et accélération s'expriment via les <strong>formules de Binet</strong> :<br>$$v^2 = C^2\\left[u^2 + \\left(\\frac{\\mathrm{d}u}{\\mathrm{d}\\theta}\\right)^2\\right], \\qquad a_r = -C^2 u^2\\left(\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u\\right)$$<br>Elles transforment l'équation du mouvement en une équation différentielle en $u(\\theta)$, souvent linéaire (cas newtonien).` },
      ]
    },

    {
      titre: 'Énergie potentielle effective',
      cartes: [
        { type:'th', label:'THM', titre:'Conservation de l\'énergie mécanique',
          contenu:`Une force centrale en $F(r)$ est <strong>conservative</strong> (elle dérive de $E_p(r)$ avec $F(r) = -\\mathrm{d}E_p/\\mathrm{d}r$). L'énergie mécanique se conserve :<br>$$E_m = \\frac{1}{2}m\\dot{r}^2 + \\frac{1}{2}m r^2\\dot{\\theta}^2 + E_p(r) = \\text{cste}$$<br>En utilisant $r^2\\dot{\\theta} = C$, le terme orthoradial devient $\\dfrac{m C^2}{2r^2}$, fonction de $r$ seul.` },
        { type:'def', label:'DEF', titre:'Énergie potentielle effective',
          contenu:`On regroupe les termes ne dépendant que de $r$ pour ramener le problème à un mouvement <strong>radial à un degré de liberté</strong> :<br>$$E_m = \\frac{1}{2}m\\dot{r}^2 + E_{p,\\text{eff}}(r), \\qquad E_{p,\\text{eff}}(r) = E_p(r) + \\frac{m C^2}{2 r^2}$$<br>Le terme $\\dfrac{mC^2}{2r^2} = \\dfrac{L_O^2}{2mr^2}$ est la <strong>barrière centrifuge</strong> : répulsive, elle empêche (sauf cas particulier) le mobile d'atteindre le centre.` },
        { type:'meth', label:'METH', titre:'Analyse par le graphe de l\'énergie effective',
          contenu:`Comme $\\frac12 m\\dot{r}^2 = E_m - E_{p,\\text{eff}}(r) \\ge 0$, le mouvement n'est possible que là où $E_{p,\\text{eff}}(r) \\le E_m$ :<br><strong>1.</strong> Tracer $E_{p,\\text{eff}}(r)$ et la droite $y = E_m$.<br><strong>2.</strong> Intersections $=$ <strong>points de rebroussement</strong> ($\\dot{r} = 0$) : distances extrémales $r_{\\min}, r_{\\max}$ (péri/apocentre).<br><strong>3.</strong> État <strong>lié</strong> (borné) si le mouvement est confiné entre deux racines ; <strong>libre</strong> (diffusion) sinon.<br><strong>4.</strong> Minimum de $E_{p,\\text{eff}}$ : trajectoire <strong>circulaire</strong>.` },
        { type:'ex', label:'EX', titre:'Condition d\'état lié',
          contenu:`Pour une attraction newtonienne $E_p = -\\dfrac{k}{r}$ ($k > 0$), $E_{p,\\text{eff}}(r) = -\\dfrac{k}{r} + \\dfrac{mC^2}{2r^2}$ présente un puits avec un minimum.<br>Selon la valeur de $E_m$ :<br><ul><li>$E_m < 0$ : mouvement <strong>borné</strong> (ellipse) entre $r_{\\min}$ et $r_{\\max}$ ;</li><li>$E_m = 0$ : limite (parabole), $r \\to \\infty$ avec vitesse nulle ;</li><li>$E_m > 0$ : mouvement <strong>non borné</strong> (hyperbole).</li></ul>` },
      ]
    },

    {
      titre: 'Interaction newtonienne',
      cartes: [
        { type:'form', label:'FORM', titre:'Loi de la gravitation universelle',
          contenu:`Deux masses ponctuelles $m_1, m_2$ distantes de $r$ s'attirent selon :<br>$$\\vec{F}_{1\\to 2} = -\\,\\frac{G\\,m_1 m_2}{r^2}\\,\\vec{u}_{1\\to 2}$$<br>avec $G = 6{,}67\\cdot 10^{-11}$ m$^3\\cdot$kg$^{-1}\\cdot$s$^{-2}$ (constante de gravitation). L'énergie potentielle associée (nulle à l'infini) :<br>$$E_p(r) = -\\,\\frac{G m_1 m_2}{r}$$` },
        { type:'form', label:'FORM', titre:'Interaction de Coulomb',
          contenu:`Deux charges $q_1, q_2$ distantes de $r$ exercent l'une sur l'autre :<br>$$\\vec{F}_{1\\to 2} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}\\,\\vec{u}_{1\\to 2}, \\qquad E_p(r) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r}$$<br>Même structure en $1/r^2$ (attraction si charges opposées, répulsion sinon). Les deux interactions sont <strong>newtoniennes</strong> : $\\vec{F} = \\dfrac{k}{r^2}\\vec{u_r}$ avec $E_p = \\dfrac{k}{r}$.` },
        { type:'prop', label:'PROP', titre:'Cas du champ de force newtonien attractif',
          contenu:`Pour une force attractive en $\\vec{F} = -\\dfrac{k}{r^2}\\vec{u_r}$ ($k > 0$), l'application des formules de Binet conduit à une équation différentielle <strong>linéaire</strong> :<br>$$\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = \\frac{k}{mC^2}$$<br>dont la solution est $u(\\theta) = \\dfrac{1}{r} = \\dfrac{k}{mC^2}\\big(1 + e\\cos(\\theta - \\theta_0)\\big)$ : c'est l'équation d'une <strong>conique</strong> en coordonnées polaires.` },
        { type:'meth', label:'METH', titre:'Réduction au problème à un corps',
          contenu:`Pour deux corps en interaction mutuelle, on introduit la <strong>masse réduite</strong> $\\mu = \\dfrac{m_1 m_2}{m_1 + m_2}$ et le vecteur relatif $\\vec{r} = \\vec{r_2} - \\vec{r_1}$. Le mouvement relatif équivaut à celui d'un point de masse $\\mu$ soumis à la force d'interaction.<br>Dans le cas <strong>astre fixe</strong> (un corps très massif, $m_1 \\gg m_2$ comme Soleil/planète) : $\\mu \\approx m_2$ et le centre de force est quasi immobile. C'est l'approximation usuelle des problèmes de Kepler.` },
      ]
    },

    {
      titre: 'Trajectoires coniques et lois de Kepler',
      cartes: [
        { type:'def', label:'DEF', titre:'Équation polaire d\'une conique',
          contenu:`La trajectoire dans un champ newtonien attractif est une <strong>conique</strong> de foyer le centre de force :<br>$$r(\\theta) = \\frac{p}{1 + e\\cos(\\theta - \\theta_0)}$$<br>$p$ est le <strong>paramètre</strong> et $e \\ge 0$ l'<strong>excentricité</strong>. La nature dépend de $e$ :<br><ul><li>$e = 0$ : cercle ;</li><li>$0 < e < 1$ : ellipse ;</li><li>$e = 1$ : parabole ;</li><li>$e > 1$ : hyperbole.</li></ul>` },
        { type:'th', label:'THM', titre:'Les trois lois de Kepler',
          contenu:`<strong>1re loi (orbites)</strong> : les planètes décrivent des <strong>ellipses</strong> dont le Soleil occupe un foyer.<br><strong>2e loi (aires)</strong> : le rayon Soleil-planète balaie des aires égales en des temps égaux ($r^2\\dot{\\theta} = C$).<br><strong>3e loi (périodes)</strong> : le rapport du carré de la période au cube du demi-grand axe est constant :<br>$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{G M_S} = \\text{cste (pour tous les astres orbitant }M_S)$$` },
        { type:'prop', label:'PROP', titre:'Orbite circulaire',
          contenu:`Pour une orbite <strong>circulaire</strong> de rayon $r$ autour d'un astre de masse $M$, le PFD ($a_n = v^2/r$) donne :<br>$$v = \\sqrt{\\frac{GM}{r}}, \\qquad T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$<br>La vitesse <strong>décroît</strong> avec l'altitude (les satellites bas vont plus vite). On retrouve la 3e loi de Kepler $T^2/r^3 = 4\\pi^2/(GM)$. Énergie : $E_m = -\\dfrac{GMm}{2r}$ (la moitié de $E_p$).` },
        { type:'ex', label:'EX', titre:'Satellite géostationnaire',
          contenu:`Un satellite <strong>géostationnaire</strong> orbite dans le plan équatorial avec $T = T_{\\text{sidéral}} = 86\\,164$ s. La 3e loi de Kepler donne son rayon orbital :<br>$$r = \\left(\\frac{GM_T\\,T^2}{4\\pi^2}\\right)^{1/3} \\approx 4{,}2\\cdot 10^4\\ \\text{km}$$<br>soit une altitude d'environ $36\\,000$ km au-dessus du sol. Il paraît immobile dans le ciel : usage en télécommunications et météo.` },
      ]
    },

    {
      titre: 'Énergie et nature de la trajectoire',
      cartes: [
        { type:'form', label:'FORM', titre:'Énergie mécanique d\'une orbite elliptique',
          contenu:`Pour une trajectoire <strong>elliptique</strong> de demi-grand axe $a$ (champ newtonien attractif, constante $k = GMm$), l'énergie mécanique ne dépend que de $a$ :<br>$$E_m = -\\frac{GMm}{2a} < 0$$<br>Relation remarquable : l'énergie d'une ellipse est celle d'un cercle de rayon $a$. Le demi-grand axe fixe l'énergie, l'excentricité fixe la « forme ».` },
        { type:'prop', label:'PROP', titre:'Lien énergie - excentricité - nature',
          contenu:`La nature de la trajectoire se lit directement sur le <strong>signe de l'énergie mécanique</strong> :<br><ul><li>$E_m < 0$ : état <strong>lié</strong>, ellipse ($e < 1$), cercle si $E_m = -GMm/2r$ minimal ;</li><li>$E_m = 0$ : <strong>parabole</strong> ($e = 1$), cas limite, $v \\to 0$ à l'infini ;</li><li>$E_m > 0$ : état <strong>libre</strong>, hyperbole ($e > 1$), $v_\\infty \\ne 0$.</li></ul>L'excentricité s'exprime par $e = \\sqrt{1 + \\dfrac{2 E_m L_O^2}{m k^2}}$.` },
        { type:'form', label:'FORM', titre:'Relations géométrie - dynamique de l\'ellipse',
          contenu:`Pour l'ellipse keplerienne, plusieurs relations relient géométrie et dynamique :<br>$$p = \\frac{L_O^2}{m k}, \\qquad r_{\\min} = a(1-e), \\qquad r_{\\max} = a(1+e)$$<br>Le périgée $r_{\\min}$ et l'apogée $r_{\\max}$ vérifient $r_{\\min} + r_{\\max} = 2a$. Vitesse en un point (équation de la conservation) : $v^2 = GM\\left(\\dfrac{2}{r} - \\dfrac{1}{a}\\right)$ (<strong>équation du vis-viva</strong>).` },
        { type:'ex', label:'EX', titre:'Vitesse au périgée et à l\'apogée',
          contenu:`Avec l'équation du vis-viva $v^2 = GM\\left(\\dfrac{2}{r} - \\dfrac{1}{a}\\right)$ :<br>$$v_{\\text{péri}} = \\sqrt{\\frac{GM}{a}\\cdot\\frac{1+e}{1-e}}, \\qquad v_{\\text{apo}} = \\sqrt{\\frac{GM}{a}\\cdot\\frac{1-e}{1+e}}$$<br>La vitesse est <strong>maximale au périgée</strong> (au plus près) et minimale à l'apogée, cohérent avec la loi des aires. Leur produit vérifie $v_{\\text{péri}}\\,r_{\\min} = v_{\\text{apo}}\\,r_{\\max} = C$.` },
      ]
    },

    {
      titre: 'Vitesses cosmiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Première vitesse cosmique',
          contenu:`La <strong>première vitesse cosmique</strong> est la vitesse de mise en orbite circulaire <strong>au ras du sol</strong> (rayon $R_T$) :<br>$$v_1 = \\sqrt{\\frac{GM_T}{R_T}} = \\sqrt{g_0 R_T} \\approx 7{,}9\\ \\text{km/s}$$<br>C'est la vitesse minimale pour qu'un objet « tombe » continûment autour de la Terre sans la toucher (satellisation). On utilise $g_0 = GM_T/R_T^2$.` },
        { type:'def', label:'DEF', titre:'Deuxième vitesse cosmique (libération)',
          contenu:`La <strong>vitesse de libération</strong> est la vitesse minimale pour échapper à l'attraction (atteindre $r \\to \\infty$ avec $E_m = 0$) depuis la surface :<br>$$v_{\\text{lib}} = \\sqrt{\\frac{2GM_T}{R_T}} = v_1\\sqrt{2} \\approx 11{,}2\\ \\text{km/s}$$<br>Pour $v \\ge v_{\\text{lib}}$, $E_m \\ge 0$ : la trajectoire est parabolique (limite) ou hyperbolique (échappement avec vitesse résiduelle).` },
        { type:'meth', label:'METH', titre:'Calcul d\'une vitesse de libération',
          contenu:`<strong>1.</strong> Écrire la conservation de l'énergie entre le départ (surface, $r = R$) et l'infini : $\\tfrac12 m v_{\\text{lib}}^2 - \\dfrac{GMm}{R} = E_m$.<br><strong>2.</strong> Condition de libération minimale : $E_m = 0$ (arrivée à l'infini avec vitesse nulle).<br><strong>3.</strong> Résoudre : $v_{\\text{lib}} = \\sqrt{\\dfrac{2GM}{R}}$.<br><strong>Remarque</strong> : indépendante de la masse du projectile et de la direction de lancement (force conservative).` },
        { type:'ex', label:'EX', titre:'Énergie pour satelliser depuis le sol',
          contenu:`Pour placer un satellite de masse $m$ sur une orbite circulaire de rayon $r$, l'énergie à fournir depuis le sol (au repos, $E_i = -GM_Tm/R_T$) est :<br>$$\\Delta E = E_{\\text{orbite}} - E_{\\text{sol}} = -\\frac{GM_Tm}{2r} - \\left(-\\frac{GM_Tm}{R_T}\\right) = GM_Tm\\left(\\frac{1}{R_T} - \\frac{1}{2r}\\right)$$<br>Plus l'orbite est haute, plus l'énergie requise est grande (mais la vitesse orbitale, elle, diminue).` },
      ]
    },

  ]
},

];
