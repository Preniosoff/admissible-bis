export const DATA = [
  {
    id: 'ph-ondes',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Onde EM et réflexion sur un conducteur',
            contenu: `<strong>Énoncé.</strong> Dans le vide ($\\varepsilon_0$, $\\mu_0$, $c=1/\\sqrt{\\mu_0\\varepsilon_0}$), une onde électromagnétique plane progressive monochromatique se propage selon $+\\vec{u}_x$. Son champ électrique s'écrit $\\vec{E}_i = E_0\\cos(\\omega t - kx)\\,\\vec{u}_y$, avec $E_0 = 1{,}0\\ \\mathrm{V\\cdot m^{-1}}$ et $\\lambda = 600\\ \\mathrm{nm}$.
<br>1. Vérifier que cette onde satisfait l'équation de propagation et déterminer la relation entre $\\omega$ et $k$. Calculer $\\omega$.
<br>2. Établir le champ magnétique $\\vec{B}_i$ associé à partir de l'équation de Maxwell-Faraday. Préciser sa direction et son amplitude.
<br>3. Calculer le vecteur de Poynting moyen $\\langle\\vec{\\Pi}\\rangle$ et l'intensité (puissance surfacique moyenne) transportée.
<br>4. L'onde arrive en incidence normale ($x=0$) sur un conducteur parfait occupant $x>0$. Sachant que le champ électrique tangentiel est nul à la surface, en déduire l'amplitude de l'onde réfléchie et l'expression du champ total dans la région $x<0$. Quelle est la nature de cette onde ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dans le vide, chaque composante vérifie $\\Delta\\vec{E} - \\frac{1}{c^2}\\frac{\\partial^2\\vec{E}}{\\partial t^2} = \\vec{0}$. Pour $E_y = E_0\\cos(\\omega t - kx)$ : $\\frac{\\partial^2 E_y}{\\partial x^2} = -k^2 E_y$ et $\\frac{\\partial^2 E_y}{\\partial t^2} = -\\omega^2 E_y$. L'équation impose $-k^2 + \\omega^2/c^2 = 0$, soit la relation de dispersion $\\omega = ck$. Avec $k = 2\\pi/\\lambda = 1{,}05\\times 10^{7}\\ \\mathrm{m^{-1}}$, $\\omega = ck = 3{,}14\\times 10^{15}\\ \\mathrm{rad\\cdot s^{-1}}$.
<br><strong>2.</strong> Maxwell-Faraday : $\\vec{\\nabla}\\wedge\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$. Avec $\\vec{E} = E_y\\,\\vec{u}_y$, $\\vec{\\nabla}\\wedge\\vec{E} = \\frac{\\partial E_y}{\\partial x}\\vec{u}_z = E_0 k\\sin(\\omega t-kx)\\,\\vec{u}_z$. Donc $\\frac{\\partial\\vec{B}}{\\partial t} = -E_0 k\\sin(\\omega t-kx)\\vec{u}_z$, d'où $\\vec{B}_i = \\frac{E_0 k}{\\omega}\\cos(\\omega t-kx)\\vec{u}_z = \\frac{E_0}{c}\\cos(\\omega t-kx)\\,\\vec{u}_z$. On retrouve la structure $\\vec{B} = \\frac{\\vec{u}_x\\wedge\\vec{E}}{c}$, avec $B_0 = E_0/c = 3{,}3\\times 10^{-9}\\ \\mathrm{T}$.
<br><strong>3.</strong> $\\vec{\\Pi} = \\frac{\\vec{E}\\wedge\\vec{B}}{\\mu_0} = \\frac{E_0^2}{\\mu_0 c}\\cos^2(\\omega t-kx)\\,\\vec{u}_x$. En moyenne $\\langle\\cos^2\\rangle = 1/2$ : $\\langle\\vec{\\Pi}\\rangle = \\frac{E_0^2}{2\\mu_0 c}\\vec{u}_x$. Numériquement $I = \\frac{1{,}0^2}{2\\times 4\\pi\\times10^{-7}\\times 3\\times10^8} = 1{,}3\\times10^{-3}\\ \\mathrm{W\\cdot m^{-2}}$.
<br><strong>4.</strong> L'onde réfléchie se propage selon $-\\vec{u}_x$ : $\\vec{E}_r = E_0'\\cos(\\omega t + kx)\\vec{u}_y$. Continuité du champ tangentiel en $x=0$ (nul dans le conducteur parfait) : $E_0\\cos\\omega t + E_0'\\cos\\omega t = 0$ pour tout $t$, donc $E_0' = -E_0$. Le champ total $\\vec{E} = E_0[\\cos(\\omega t-kx)-\\cos(\\omega t+kx)]\\vec{u}_y = 2E_0\\sin(kx)\\sin(\\omega t)\\,\\vec{u}_y$. C'est une <strong>onde stationnaire</strong> : les nœuds ($kx = -n\\pi$) et ventres sont fixes, plus de propagation d'énergie en moyenne.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-opt',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Fentes de Young et diffraction',
            contenu: `<strong>Énoncé.</strong> Un dispositif des fentes d'Young est éclairé par une source ponctuelle monochromatique de longueur d'onde $\\lambda = 633\\ \\mathrm{nm}$ placée à l'infini, en incidence normale. Les deux fentes, de largeur $a = 0{,}10\\ \\mathrm{mm}$, sont distantes de $b = 0{,}50\\ \\mathrm{mm}$ (centre à centre). On observe sur un écran placé à $D = 2{,}0\\ \\mathrm{m}$ via une lentille mince.
<br>1. Rappeler, en optique géométrique, pourquoi les rayons issus des deux fentes peuvent interférer. Quelle est la condition de cohérence ?
<br>2. Établir la différence de marche $\\delta$ entre les deux voies au point $M$ d'abscisse $x$ sur l'écran. En déduire l'interfrange $i$ des franges d'interférences et le calculer.
<br>3. Chaque fente, par diffraction, module l'intensité par un facteur $\\mathrm{sinc}^2(\\pi a x/\\lambda D)$. Donner l'expression complète de l'intensité $I(x)$ sur l'écran.
<br>4. Combien de franges brillantes sont visibles à l'intérieur de la tache centrale de diffraction ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les deux fentes sont éclairées par la même source : elles constituent deux sources <strong>secondaires synchrones</strong>, donc mutuellement cohérentes. La condition est que la différence de marche reste inférieure à la longueur de cohérence temporelle de la source ; une source ponctuelle assure la cohérence spatiale.
<br><strong>2.</strong> Pour deux fentes séparées de $b$, en incidence normale, $\\delta = b\\sin\\theta \\approx b\\,x/D$ (petits angles). Les franges brillantes vérifient $\\delta = p\\lambda$, soit $x_p = p\\lambda D/b$. L'interfrange est $i = \\frac{\\lambda D}{b} = \\frac{633\\times10^{-9}\\times 2{,}0}{0{,}50\\times10^{-3}} = 2{,}5\\ \\mathrm{mm}$.
<br><strong>3.</strong> Deux sources cohérentes donnent un terme d'interférences $\\propto \\cos^2(\\pi\\delta/\\lambda) = \\cos^2(\\pi b x/\\lambda D)$, modulé par la diffraction d'une fente de largeur $a$ : $I(x) = I_0\\,\\mathrm{sinc}^2\\!\\left(\\frac{\\pi a x}{\\lambda D}\\right)\\cos^2\\!\\left(\\frac{\\pi b x}{\\lambda D}\\right)$.
<br><strong>4.</strong> Le premier zéro de diffraction est en $x_1 = \\lambda D/a$. La largeur de la tache centrale est $2x_1 = 2\\lambda D/a$. Le nombre de franges brillantes correspond à $2x_1/i = 2(\\lambda D/a)/(\\lambda D/b) = 2b/a = 2\\times 0{,}50/0{,}10 = 10$. En comptant la frange centrale et en tenant compte des franges éteintes aux zéros, on observe <strong>9 franges brillantes</strong> dans la tache centrale (les ordres $p = -4$ à $+4$).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-osc',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Oscillateur amorti puis forcé',
            contenu: `<strong>Énoncé.</strong> Une masse $m = 0{,}20\\ \\mathrm{kg}$ est accrochée à un ressort de raideur $k = 80\\ \\mathrm{N\\cdot m^{-1}}$ et soumise à une force de frottement fluide $\\vec{f} = -\\alpha\\vec{v}$ avec $\\alpha = 1{,}2\\ \\mathrm{N\\cdot s\\cdot m^{-1}}$. On note $x(t)$ l'écart à la position d'équilibre.
<br>1. Établir l'équation différentielle du mouvement. Identifier la pulsation propre $\\omega_0$ et le facteur de qualité $Q$. Calculer leurs valeurs.
<br>2. Le régime est-il pseudo-périodique, critique ou apériodique ? Donner la pseudo-pulsation $\\omega$ et l'allure du portrait de phase.
<br>3. On impose maintenant une force excitatrice $F(t) = F_0\\cos(\\Omega t)$, $F_0 = 0{,}50\\ \\mathrm{N}$. Déterminer en régime sinusoïdal forcé l'amplitude $X(\\Omega)$ de $x$, en notation complexe.
<br>4. Pour quelle pulsation $\\Omega_r$ l'amplitude est-elle maximale ? Calculer cette amplitude maximale.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> PFD projeté : $m\\ddot{x} = -kx - \\alpha\\dot{x}$, soit $\\ddot{x} + \\frac{\\alpha}{m}\\dot{x} + \\frac{k}{m}x = 0$. Forme canonique $\\ddot{x} + \\frac{\\omega_0}{Q}\\dot{x} + \\omega_0^2 x = 0$ avec $\\omega_0 = \\sqrt{k/m} = \\sqrt{80/0{,}20} = 20\\ \\mathrm{rad\\cdot s^{-1}}$ et $\\frac{\\omega_0}{Q} = \\frac{\\alpha}{m} = 6{,}0$, donc $Q = \\frac{m\\omega_0}{\\alpha} = \\frac{0{,}20\\times20}{1{,}2} = 3{,}3$.
<br><strong>2.</strong> $Q > 1/2$ : régime <strong>pseudo-périodique</strong>. La pseudo-pulsation est $\\omega = \\omega_0\\sqrt{1 - \\frac{1}{4Q^2}} = 20\\sqrt{1-1/44} = 19{,}8\\ \\mathrm{rad\\cdot s^{-1}}$. Le portrait de phase $(\\dot{x},x)$ est une <strong>spirale</strong> convergeant vers l'origine (point attracteur stable).
<br><strong>3.</strong> En complexe $\\underline{x} = \\underline{X}e^{j\\Omega t}$ : $(-m\\Omega^2 + j\\alpha\\Omega + k)\\underline{X} = F_0$, d'où $\\underline{X} = \\frac{F_0}{k - m\\Omega^2 + j\\alpha\\Omega}$ et $X(\\Omega) = \\frac{F_0}{\\sqrt{(k-m\\Omega^2)^2 + (\\alpha\\Omega)^2}}$.
<br><strong>4.</strong> $X$ maximale quand le dénominateur est minimal. En dérivant, on obtient la résonance en amplitude pour $\\Omega_r = \\omega_0\\sqrt{1 - \\frac{1}{2Q^2}}$, qui existe car $Q > 1/\\sqrt2$. $\\Omega_r = 20\\sqrt{1 - 1/22} = 19{,}5\\ \\mathrm{rad\\cdot s^{-1}}$. L'amplitude max : $X_{\\max} = \\frac{F_0}{\\alpha\\omega_0\\sqrt{1-1/(4Q^2)}} \\approx \\frac{F_0 Q}{k} = \\frac{0{,}50\\times3{,}3}{80} = 2{,}1\\times10^{-2}\\ \\mathrm{m}$, soit environ $2{,}1\\ \\mathrm{cm}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-sys',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Cylindre qui roule sans glisser',
            contenu: `<strong>Énoncé.</strong> Un cylindre homogène plein de masse $m = 2{,}0\\ \\mathrm{kg}$, de rayon $R = 0{,}10\\ \\mathrm{m}$ et de moment d'inertie $J = \\frac{1}{2}mR^2$ par rapport à son axe, est lâché sans vitesse initiale sur un plan incliné d'angle $\\beta = 30^\\circ$. Il roule sans glisser. On prend $g = 9{,}8\\ \\mathrm{m\\cdot s^{-2}}$.
<br>1. Faire le bilan des forces. Préciser le rôle de la réaction normale et de la composante tangentielle (frottement statique).
<br>2. En appliquant le théorème du centre d'inertie et le théorème du moment cinétique au centre $G$, établir l'accélération $a$ du centre.
<br>3. En déduire la valeur de la force de frottement $T$ et la condition sur le coefficient de frottement $f$ pour que le roulement sans glissement soit effectivement possible.
<br>4. Retrouver $a$ par un bilan énergétique (théorème de l'énergie cinétique avec les théorèmes de Kœnig).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Forces : poids $m\\vec{g}$ (en $G$), réaction normale $\\vec{N}$ (perpendiculaire au plan, pas de moment ni de travail), frottement statique $\\vec{T}$ au point de contact $I$ (dirigé vers le haut du plan, crée le couple de rotation). Le contact roule sans glisser : $\\vec{v}_I = \\vec{0}$, donc $\\vec{T}$ ne travaille pas.
<br><strong>2.</strong> TCI selon la ligne de plus grande pente : $m a = mg\\sin\\beta - T$. TMC en $G$ (axe fixe relatif à $G$) : $J\\dot{\\omega} = T R$. Roulement sans glissement : $a = R\\dot{\\omega}$, donc $T = \\frac{J\\dot{\\omega}}{R} = \\frac{J a}{R^2} = \\frac{1}{2}m a$. En reportant : $ma = mg\\sin\\beta - \\frac12 ma$, soit $\\frac32 ma = mg\\sin\\beta$ et $a = \\frac{2}{3}g\\sin\\beta = \\frac23\\times9{,}8\\times0{,}5 = 3{,}3\\ \\mathrm{m\\cdot s^{-2}}$.
<br><strong>3.</strong> $T = \\frac12 m a = \\frac12\\times2{,}0\\times3{,}3 = 3{,}3\\ \\mathrm{N}$. La normale $N = mg\\cos\\beta = 2{,}0\\times9{,}8\\times\\frac{\\sqrt3}{2} = 17\\ \\mathrm{N}$. Le roulement sans glissement exige $T \\le f N$, soit $f \\ge T/N = 3{,}3/17 = 0{,}20$. Comme $T/N = \\frac{(1/2)mg\\sin\\beta\\cdot(2/3)}{mg\\cos\\beta} = \\frac13\\tan\\beta = \\frac13\\tan30^\\circ = 0{,}19$, il faut $f \\ge \\frac{\\tan\\beta}{3}$.
<br><strong>4.</strong> Énergie cinétique (Kœnig) : $E_c = \\frac12 m v^2 + \\frac12 J\\omega^2 = \\frac12 m v^2 + \\frac14 m v^2 = \\frac34 m v^2$ (avec $v=R\\omega$). Seul le poids travaille : $\\frac{dE_c}{dt} = P_{\\text{poids}} = mg\\sin\\beta\\, v$. Donc $\\frac34 m\\,2v\\dot v = mg\\sin\\beta\\,v$, soit $\\frac32 m a = mg\\sin\\beta$, $a = \\frac23 g\\sin\\beta$. On retrouve le résultat.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-thermo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Cycle de Carnot et bilan entropique',
            contenu: `<strong>Énoncé.</strong> Une mole de gaz parfait diatomique ($\\gamma = 7/5$, $R = 8{,}31\\ \\mathrm{J\\cdot K^{-1}\\cdot mol^{-1}}$) décrit un cycle de Carnot réversible entre une source chaude à $T_c = 600\\ \\mathrm{K}$ et une source froide à $T_f = 300\\ \\mathrm{K}$. Lors de la détente isotherme chaude, le volume passe de $V_1 = 1{,}0\\ \\mathrm{L}$ à $V_2 = 3{,}0\\ \\mathrm{L}$.
<br>1. Décrire les quatre transformations du cycle et tracer son allure dans le diagramme $(P,V)$.
<br>2. Calculer le travail et le transfert thermique lors de la détente isotherme chaude.
<br>3. Calculer le rendement du cycle de deux façons : par les transferts thermiques et par la formule de Carnot. Conclure.
<br>4. Vérifier le second principe en calculant la variation d'entropie de l'univers sur un cycle.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Cycle : (AB) détente isotherme à $T_c$ ; (BC) détente adiabatique réversible $T_c\\to T_f$ ; (CD) compression isotherme à $T_f$ ; (DA) compression adiabatique réversible $T_f\\to T_c$. Dans $(P,V)$, deux isothermes (hyperboles) et deux adiabatiques (plus pentues), formant une boucle parcourue dans le sens horaire (cycle moteur).
<br><strong>2.</strong> Isotherme : $\\Delta U = 0$, donc $Q_c = -W_{AB} = nRT_c\\ln\\frac{V_2}{V_1} = 1\\times8{,}31\\times600\\times\\ln 3 = 5{,}48\\times10^{3}\\ \\mathrm{J}$. Le travail reçu par le gaz : $W_{AB} = -5{,}48\\times10^3\\ \\mathrm{J}$.
<br><strong>3.</strong> Par Carnot : $\\eta = 1 - \\frac{T_f}{T_c} = 1 - \\frac{300}{600} = 0{,}50$. Par les transferts : la compression isotherme froide, entre les mêmes rapports de volumes (car les adiabatiques imposent $V_3/V_4 = V_2/V_1$), donne $Q_f = nRT_f\\ln\\frac{V_4}{V_3} = -nRT_f\\ln 3 = -2{,}74\\times10^3\\ \\mathrm{J}$. Rendement $\\eta = 1 + \\frac{Q_f}{Q_c} = 1 - \\frac{T_f}{T_c}\\,$ : identique, $\\eta = 0{,}50$.
<br><strong>4.</strong> Sur un cycle $\\Delta S_{\\text{gaz}} = 0$ (fonction d'état). Entropie échangée avec les sources : $\\Delta S_c = -Q_c/T_c = -5{,}48\\times10^3/600 = -9{,}13\\ \\mathrm{J\\cdot K^{-1}}$ et $\\Delta S_f = -Q_f/T_f = 2{,}74\\times10^3/300 = 9{,}13\\ \\mathrm{J\\cdot K^{-1}}$. Donc $\\Delta S_{\\text{univers}} = \\Delta S_{\\text{gaz}} + \\Delta S_c + \\Delta S_f = 0$ : le cycle est <strong>réversible</strong>, conforme au second principe ($\\Delta S_{\\text{univers}} \\ge 0$, égalité car réversible).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-vect',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Opérateurs et théorèmes intégraux',
            contenu: `<strong>Énoncé.</strong> On considère le champ vectoriel $\\vec{A}(M) = \\vec{r} = x\\,\\vec{u}_x + y\\,\\vec{u}_y + z\\,\\vec{u}_z$, où $\\vec{r}$ est le vecteur position, et le champ scalaire $f(M) = \\frac12 r^2 = \\frac12(x^2+y^2+z^2)$.
<br>1. Calculer $\\vec{\\nabla}f$ (gradient), $\\mathrm{div}\\,\\vec{A}$ et $\\vec{\\nabla}\\wedge\\vec{A}$ (rotationnel). Que constate-t-on sur la relation entre $f$ et $\\vec{A}$ ?
<br>2. Soit une sphère $\\mathcal{S}$ de centre $O$ et de rayon $a$, de volume $\\mathcal{V}$. Calculer le flux $\\Phi = \\oiint_{\\mathcal{S}}\\vec{A}\\cdot\\mathrm{d}\\vec{S}$ directement, puis par le théorème de Green-Ostrogradski. Comparer.
<br>3. Calculer la circulation de $\\vec{A}$ le long d'un cercle de rayon $a$ centré en $O$. Retrouver le résultat à l'aide du théorème de Stokes.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\vec{\\nabla}f = \\left(\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y},\\frac{\\partial f}{\\partial z}\\right) = (x,y,z) = \\vec{r} = \\vec{A}$. Donc $\\vec{A}$ <strong>dérive du potentiel</strong> $f$. $\\mathrm{div}\\,\\vec{A} = \\frac{\\partial x}{\\partial x}+\\frac{\\partial y}{\\partial y}+\\frac{\\partial z}{\\partial z} = 3$. $\\vec{\\nabla}\\wedge\\vec{A} = \\vec{0}$ (chaque composante : $\\partial_y z - \\partial_z y = 0$, etc.), cohérent avec le fait qu'un gradient est toujours à rotationnel nul.
<br><strong>2.</strong> Direct : sur la sphère $\\vec{A} = \\vec{r} = a\\,\\vec{u}_r$ et $\\mathrm{d}\\vec{S} = \\mathrm{d}S\\,\\vec{u}_r$, donc $\\vec{A}\\cdot\\mathrm{d}\\vec{S} = a\\,\\mathrm{d}S$ et $\\Phi = a\\times 4\\pi a^2 = 4\\pi a^3$. Par Green-Ostrogradski : $\\Phi = \\iiint_{\\mathcal V}\\mathrm{div}\\,\\vec{A}\\,\\mathrm{d}\\tau = 3\\times\\frac43\\pi a^3 = 4\\pi a^3$. Identique.
<br><strong>3.</strong> Sur le cercle $\\vec{A} = \\vec{r}$ est radial alors que $\\mathrm{d}\\vec{\\ell}$ est orthoradial (tangent) : $\\vec{A}\\cdot\\mathrm{d}\\vec{\\ell} = 0$, donc la circulation $C = \\oint\\vec{A}\\cdot\\mathrm{d}\\vec{\\ell} = 0$. Par Stokes : $C = \\iint_{\\Sigma}(\\vec{\\nabla}\\wedge\\vec{A})\\cdot\\mathrm{d}\\vec{S} = 0$ puisque $\\vec{\\nabla}\\wedge\\vec{A}=\\vec0$. Cohérent : un champ de gradient est à circulation nulle sur tout contour fermé.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-1e-chimorg',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du squelette aux familles : analyser une molécule',
            contenu: `<strong>Énoncé.</strong> On étudie la molécule de menthol, de formule semi-développée comportant un cycle à six atomes de carbone portant trois substituants : un groupe méthyle $-\\mathrm{CH_3}$, un groupe isopropyle $-\\mathrm{CH(CH_3)_2}$ et un groupe hydroxyle $-\\mathrm{OH}$. On donne aussi l'éthanol $\\mathrm{C_2H_6O}$ et l'acide éthanoïque $\\mathrm{C_2H_4O_2}$.
<br>1. Identifier dans le menthol la nature du squelette carboné (cyclique ou linéaire, saturé ou insaturé). Combien d'atomes de carbone le constituent au total ?
<br>2. Quel est le groupe caractéristique porté par le menthol ? À quelle famille chimique appartient-il ?
<br>3. Pour l'éthanol et l'acide éthanoïque, entourer (décrire) le groupe caractéristique, nommer la famille et écrire la formule semi-développée.
<br>4. L'éthanol peut être oxydé en acide éthanoïque. Identifier ce qui change au niveau du groupe caractéristique lors de cette transformation, et préciser ce qui est conservé (squelette carboné).
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le squelette du menthol est <strong>cyclique et saturé</strong> (cyclohexane, six carbones uniquement liés par des liaisons simples). En comptant le cycle (6 C), le méthyle (1 C) et l'isopropyle (3 C), il y a $6+1+3 = 10$ atomes de carbone.
<br><strong>2.</strong> Le groupe caractéristique est le groupe hydroxyle $-\\mathrm{OH}$ fixé sur un carbone du squelette : le menthol appartient à la famille des <strong>alcools</strong>.
<br><strong>3.</strong> Éthanol $\\mathrm{CH_3-CH_2-OH}$ : groupe $-\\mathrm{OH}$, famille des <strong>alcools</strong>. Acide éthanoïque $\\mathrm{CH_3-COOH}$ : groupe carboxyle $-\\mathrm{COOH}$, famille des <strong>acides carboxyliques</strong>.
<br><strong>4.</strong> Lors de l'oxydation, le groupe hydroxyle $-\\mathrm{OH}$ de l'éthanol est transformé en groupe carboxyle $-\\mathrm{COOH}$ : on passe de la famille des alcools à celle des acides carboxyliques. Le <strong>squelette carboné est conservé</strong> (toujours deux atomes de carbone, chaîne $\\mathrm{CH_3-C}$) : seule la fonction change. C'est une modification de groupe caractéristique sans modification de chaîne.
</details>`
          }
        ]
      }
    ]
  }
]
