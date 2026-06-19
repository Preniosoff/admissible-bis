export const DATA = [
  {
    id: 'ph-circ',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Circuit RLC série en régime sinusoïdal forcé',
            contenu: `<strong>Énoncé.</strong> On alimente un circuit RLC série par une tension sinusoïdale $e(t) = E_m \\cos(\\omega t)$, d'amplitude $E_m = 5{,}0$ V. La résistance vaut $R = 100\\ \\Omega$, l'inductance $L = 0{,}10$ H et la capacité $C = 1{,}0\\ \\mu$F. On note $i(t)$ le courant et $u_C(t)$ la tension aux bornes du condensateur, en convention récepteur.

1. Établir l'équation différentielle vérifiée par $u_C(t)$. Identifier la pulsation propre $\\omega_0$ et le facteur de qualité $Q$ ; calculer leurs valeurs.
2. En notation complexe, déterminer l'impédance complexe $\\underline{Z}$ du circuit, puis l'amplitude $I_m$ du courant et le déphasage $\\varphi$ de $i(t)$ par rapport à $e(t)$, en fonction de $\\omega$.
3. Pour quelle pulsation $\\omega$ l'amplitude $I_m$ est-elle maximale ? Donner sa valeur numérique. Que vaut alors $\\varphi$ ?
4. Calculer la puissance moyenne $\\langle P \\rangle$ fournie par la source à la résonance, et la tension efficace $U_{C,\\text{eff}}$ aux bornes du condensateur. Commenter cette dernière.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Loi des mailles : $e = u_R + u_L + u_C = Ri + L\\frac{\\mathrm{d}i}{\\mathrm{d}t} + u_C$, avec $i = C\\frac{\\mathrm{d}u_C}{\\mathrm{d}t}$. D'où
$$ LC\\frac{\\mathrm{d}^2 u_C}{\\mathrm{d}t^2} + RC\\frac{\\mathrm{d}u_C}{\\mathrm{d}t} + u_C = e(t). $$
Sous forme canonique : $\\frac{\\mathrm{d}^2 u_C}{\\mathrm{d}t^2} + \\frac{\\omega_0}{Q}\\frac{\\mathrm{d}u_C}{\\mathrm{d}t} + \\omega_0^2 u_C = \\omega_0^2 e$, avec
$$ \\omega_0 = \\frac{1}{\\sqrt{LC}}, \\qquad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}. $$
Numériquement : $\\omega_0 = 1/\\sqrt{0{,}10 \\times 10^{-6}} = 3{,}2\\times 10^{3}$ rad/s ; $Q = \\frac{1}{100}\\sqrt{0{,}10/10^{-6}} = 3{,}2$.

<strong>2.</strong> En série, $\\underline{Z} = R + jL\\omega + \\frac{1}{jC\\omega} = R + j\\left(L\\omega - \\frac{1}{C\\omega}\\right)$. Alors $\\underline{I} = \\underline{E}/\\underline{Z}$ donne
$$ I_m = \\frac{E_m}{\\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}}, \\qquad \\tan\\varphi = -\\frac{L\\omega - \\frac{1}{C\\omega}}{R}. $$

<strong>3.</strong> $I_m$ est maximal quand $|\\underline{Z}|$ est minimal, c'est-à-dire quand la partie imaginaire s'annule : $L\\omega = \\frac{1}{C\\omega}$, soit $\\omega = \\omega_0 = 3{,}2\\times 10^{3}$ rad/s. Alors $\\underline{Z} = R$, $I_m = E_m/R = 5{,}0/100 = 5{,}0\\times 10^{-2}$ A, et $\\varphi = 0$ : le courant est en phase avec la tension d'alimentation.

<strong>4.</strong> Puissance moyenne : $\\langle P \\rangle = \\frac{1}{2}R I_m^2 = \\frac{1}{2}\\times 100 \\times (5{,}0\\times 10^{-2})^2 = 0{,}125$ W. Tension aux bornes de $C$ : à la résonance $U_{C,m} = \\frac{I_m}{C\\omega_0} = Q E_m$, donc $U_{C,\\text{eff}} = Q\\,E_m/\\sqrt{2} = 3{,}2 \\times 5{,}0/\\sqrt{2} \\approx 11$ V. La tension efficace aux bornes du condensateur ($\\approx 11$ V) dépasse celle de la source ($5{,}0/\\sqrt{2} \\approx 3{,}5$ V) : c'est la surtension à la résonance, d'un facteur $Q$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-elec',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Sphère chargée, théorème de Gauss et énergie',
            contenu: `<strong>Énoncé.</strong> Une boule de rayon $R$ porte une charge totale $Q > 0$ répartie uniformément dans son volume, avec une densité $\\rho$. On note $\\varepsilon_0$ la permittivité du vide.

1. Justifier la direction du champ $\\vec{E}(M)$ et la dépendance de sa norme par des arguments de symétrie et d'invariance.
2. À l'aide du théorème de Gauss, déterminer $\\vec{E}(r)$ pour $r < R$ et pour $r > R$. Vérifier la continuité en $r = R$.
3. En déduire le potentiel $V(r)$ en tout point, en prenant $V \\to 0$ à l'infini. Donner $V(0)$.
4. Loin de la boule ($r \\gg R$), à quelle distribution simple le champ est-il identique ? Justifier.
5. Calculer l'énergie électrostatique $W$ emmagasinée dans tout l'espace par la méthode $W = \\frac{\\varepsilon_0}{2}\\int E^2\\,\\mathrm{d}\\tau$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La distribution est invariante par toute rotation autour du centre $O$ : elle a la symétrie sphérique. Donc $\\vec{E}(M) = E(r)\\,\\vec{u}_r$ : le champ est radial et sa norme ne dépend que de $r$.

<strong>2.</strong> Surface de Gauss : sphère de rayon $r$ centrée en $O$. Le flux vaut $\\Phi = E(r)\\times 4\\pi r^2$.
Pour $r > R$ : $Q_{\\text{int}} = Q$, d'où $E(r) = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$.
Pour $r < R$ : $Q_{\\text{int}} = \\rho \\cdot \\frac{4}{3}\\pi r^3 = Q\\frac{r^3}{R^3}$, d'où $E(r) = \\frac{Q\\,r}{4\\pi\\varepsilon_0 R^3}$.
En $r = R$ : les deux expressions donnent $E(R) = \\frac{Q}{4\\pi\\varepsilon_0 R^2}$ : le champ est continu (pas de charge surfacique).

<strong>3.</strong> $\\vec{E} = -\\frac{\\mathrm{d}V}{\\mathrm{d}r}\\vec{u}_r$.
Pour $r > R$ : $V(r) = \\frac{Q}{4\\pi\\varepsilon_0 r}$ (constante d'intégration nulle car $V(\\infty)=0$).
Pour $r < R$ : $-\\frac{\\mathrm{d}V}{\\mathrm{d}r} = \\frac{Q r}{4\\pi\\varepsilon_0 R^3}$, donc $V(r) = -\\frac{Q r^2}{8\\pi\\varepsilon_0 R^3} + K$. La continuité en $r=R$ avec $V(R) = \\frac{Q}{4\\pi\\varepsilon_0 R}$ donne $K = \\frac{3Q}{8\\pi\\varepsilon_0 R}$, d'où
$$ V(r) = \\frac{Q}{8\\pi\\varepsilon_0 R}\\left(3 - \\frac{r^2}{R^2}\\right), \\qquad V(0) = \\frac{3Q}{8\\pi\\varepsilon_0 R}. $$

<strong>4.</strong> Pour $r \\gg R$, $\\vec{E} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\vec{u}_r$ : c'est exactement le champ d'une charge ponctuelle $Q$ placée en $O$. Vu de loin, la distribution sphérique se comporte comme sa charge totale concentrée au centre.

<strong>5.</strong> $W = \\frac{\\varepsilon_0}{2}\\int_0^\\infty E^2\\, 4\\pi r^2\\,\\mathrm{d}r$. Décomposons :
Extérieur : $\\frac{\\varepsilon_0}{2}\\int_R^\\infty \\left(\\frac{Q}{4\\pi\\varepsilon_0 r^2}\\right)^2 4\\pi r^2\\mathrm{d}r = \\frac{Q^2}{8\\pi\\varepsilon_0}\\int_R^\\infty \\frac{\\mathrm{d}r}{r^2} = \\frac{Q^2}{8\\pi\\varepsilon_0 R}$.
Intérieur : $\\frac{\\varepsilon_0}{2}\\int_0^R \\left(\\frac{Q r}{4\\pi\\varepsilon_0 R^3}\\right)^2 4\\pi r^2\\mathrm{d}r = \\frac{Q^2}{8\\pi\\varepsilon_0 R^6}\\int_0^R r^4\\mathrm{d}r = \\frac{Q^2}{40\\pi\\varepsilon_0 R}$.
Total : $W = \\frac{Q^2}{8\\pi\\varepsilon_0 R} + \\frac{Q^2}{40\\pi\\varepsilon_0 R} = \\frac{3Q^2}{20\\pi\\varepsilon_0 R}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-indu',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Rails de Laplace : freinage et bilan énergétique',
            contenu: `<strong>Énoncé.</strong> Deux rails horizontaux parallèles, distants de $a = 0{,}20$ m, de résistance négligeable, sont reliés à une extrémité par une résistance $R = 0{,}50\\ \\Omega$. Une barre conductrice de masse $m = 50$ g peut glisser sans frottement sur les rails. L'ensemble est plongé dans un champ magnétique uniforme $\\vec{B} = B\\,\\vec{u}_z$ vertical, avec $B = 0{,}80$ T. À $t = 0$, la barre est lancée avec la vitesse $v_0 = 4{,}0$ m/s.

1. La barre se déplace à la vitesse $v(t)$. Exprimer la f.é.m. induite $e$, puis le courant $i$ dans le circuit.
2. Déterminer la force de Laplace s'exerçant sur la barre. Justifier qualitativement son sens (loi de Lenz).
3. Établir l'équation différentielle vérifiée par $v(t)$ et la résoudre. On fera apparaître un temps caractéristique $\\tau$ que l'on exprimera et calculera.
4. Établir le bilan énergétique : montrer que l'énergie cinétique perdue par la barre est intégralement dissipée par effet Joule dans $R$. Calculer l'énergie totale dissipée.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le flux à travers le circuit est $\\Phi = B\\,a\\,x$ où $x$ repère la barre. La f.é.m. : $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = -B a v$ (en valeur algébrique selon l'orientation ; en module $|e| = Bav$). Le courant : $i = \\frac{|e|}{R} = \\frac{Bav}{R}$.

<strong>2.</strong> Force de Laplace sur la barre parcourue par $i$ : $\\vec{F} = i\\,\\vec{a}\\wedge\\vec{B}$, de norme $F = i a B = \\frac{B^2 a^2 v}{R}$. D'après la loi de Lenz, l'induction s'oppose à la cause qui lui donne naissance : la force freine la barre, donc $\\vec{F}$ est opposée à $\\vec{v}$.

<strong>3.</strong> PFD selon l'axe du mouvement : $m\\frac{\\mathrm{d}v}{\\mathrm{d}t} = -\\frac{B^2 a^2}{R}v$, soit
$$ \\frac{\\mathrm{d}v}{\\mathrm{d}t} + \\frac{v}{\\tau} = 0, \\qquad \\tau = \\frac{mR}{B^2 a^2}. $$
Solution : $v(t) = v_0\\,e^{-t/\\tau}$. Numériquement $\\tau = \\frac{0{,}050\\times 0{,}50}{(0{,}80)^2(0{,}20)^2} = \\frac{0{,}025}{0{,}0256} \\approx 0{,}98$ s.

<strong>4.</strong> La puissance de la force de Laplace est $P_{\\text{Lap}} = \\vec{F}\\cdot\\vec{v} = -\\frac{B^2a^2 v^2}{R}$. La puissance dissipée par effet Joule est $P_J = R i^2 = R\\left(\\frac{Bav}{R}\\right)^2 = \\frac{B^2 a^2 v^2}{R} = -P_{\\text{Lap}}$. Le travail moteur étant nul (pas d'autre force motrice), toute l'énergie cinétique se convertit en chaleur. Énergie totale dissipée : la barre s'arrête ($v\\to 0$), donc
$$ W_J = \\frac{1}{2}m v_0^2 = \\frac{1}{2}\\times 0{,}050 \\times (4{,}0)^2 = 0{,}40\\ \\text{J}. $$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-mag',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Solénoïde, théorème d\'Ampère et particule chargée',
            contenu: `<strong>Énoncé.</strong> On considère un solénoïde infini d'axe $Oz$, comportant $n$ spires par unité de longueur, parcouru par un courant $I$. On donne $n = 2{,}0\\times 10^{3}$ spires/m, $I = 3{,}0$ A et $\\mu_0 = 4\\pi\\times 10^{-7}$ H/m.

1. Par des arguments de symétrie et d'invariance, justifier que le champ $\\vec{B}$ est selon $\\vec{u}_z$ et ne dépend que de la distance à l'axe. On admet $\\vec{B} = \\vec{0}$ à l'extérieur.
2. À l'aide du théorème d'Ampère appliqué à un contour rectangulaire bien choisi, établir l'expression du champ à l'intérieur. Calculer sa valeur.
3. Une particule de charge $q > 0$ et de masse $m$ pénètre dans cette zone avec une vitesse $\\vec{v}_0$ perpendiculaire à $\\vec{B}$. Montrer que le mouvement est circulaire uniforme et exprimer le rayon $r_c$ et la pulsation cyclotron $\\omega_c$.
4. Application : un proton ($q = 1{,}6\\times 10^{-19}$ C, $m = 1{,}67\\times 10^{-27}$ kg) entre avec $v_0 = 1{,}0\\times 10^{5}$ m/s. Calculer $r_c$ et $\\omega_c$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le système est invariant par translation selon $z$ et par rotation autour de $Oz$ : $\\vec{B}$ ne dépend que de $r$ (distance à l'axe). Le plan contenant $M$ et l'axe est un plan de symétrie des courants ; $\\vec{B}$ étant un pseudo-vecteur, il est porté par $\\vec{u}_z$ : $\\vec{B} = B(r)\\vec{u}_z$.

<strong>2.</strong> Contour d'Ampère : rectangle de longueur $\\ell$ selon $z$, un côté intérieur (à la distance $r$) et un côté extérieur (où $\\vec{B}=\\vec{0}$). Les côtés perpendiculaires à $z$ ne contribuent pas. La circulation vaut $B(r)\\ell$. Le courant enlacé est $I_{\\text{enl}} = n\\ell I$. Le théorème d'Ampère donne $B(r)\\ell = \\mu_0 n\\ell I$, indépendant de $r$ :
$$ \\vec{B} = \\mu_0 n I\\,\\vec{u}_z. $$
Numériquement : $B = 4\\pi\\times 10^{-7}\\times 2{,}0\\times 10^{3}\\times 3{,}0 = 7{,}5\\times 10^{-3}$ T.

<strong>3.</strong> Force de Lorentz $\\vec{F} = q\\vec{v}\\wedge\\vec{B}$, toujours perpendiculaire à $\\vec{v}$ : elle ne travaille pas, donc $\\|\\vec{v}\\| = v_0$ est constante (mouvement uniforme). Dans le plan perpendiculaire à $\\vec{B}$, le PFD $m\\frac{\\mathrm{d}\\vec{v}}{\\mathrm{d}t} = q\\vec{v}\\wedge\\vec{B}$ impose une accélération centripète de norme $qv_0 B = \\frac{m v_0^2}{r_c}$, d'où
$$ r_c = \\frac{m v_0}{qB}, \\qquad \\omega_c = \\frac{v_0}{r_c} = \\frac{qB}{m}. $$

<strong>4.</strong> $r_c = \\frac{1{,}67\\times 10^{-27}\\times 1{,}0\\times 10^{5}}{1{,}6\\times 10^{-19}\\times 7{,}5\\times 10^{-3}} \\approx 0{,}14$ m. $\\omega_c = \\frac{qB}{m} = \\frac{1{,}6\\times 10^{-19}\\times 7{,}5\\times 10^{-3}}{1{,}67\\times 10^{-27}} \\approx 7{,}2\\times 10^{5}$ rad/s.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-max',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Onde plane progressive et bilan d\'énergie électromagnétique',
            contenu: `<strong>Énoncé.</strong> Dans le vide, sans charges ni courants, on considère une onde électrique $\\vec{E} = E_0\\cos(\\omega t - kz)\\,\\vec{u}_x$, avec $E_0 = 1{,}0\\times 10^{3}$ V/m. On donne $c = 3{,}0\\times 10^{8}$ m/s, $\\varepsilon_0 = 8{,}85\\times 10^{-12}$ F/m et $\\mu_0 = 4\\pi\\times 10^{-7}$ H/m.

1. Rappeler les quatre équations de Maxwell dans le vide. En déduire l'équation de propagation vérifiée par $\\vec{E}$ et montrer que $k = \\omega/c$.
2. À partir de l'équation de Maxwell-Faraday, déterminer le champ magnétique $\\vec{B}$ associé. Vérifier que $(\\vec{E},\\vec{B},\\vec{k})$ forme un trièdre direct et que $E_0 = cB_0$.
3. Exprimer la densité volumique d'énergie électromagnétique $u$ et le vecteur de Poynting $\\vec{\\Pi}$. Montrer que $\\vec{\\Pi} = u\\,c\\,\\vec{u}_z$.
4. Calculer la valeur moyenne temporelle $\\langle \\Pi \\rangle$ (puissance surfacique transportée). Interpréter.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dans le vide : $\\operatorname{div}\\vec{E} = 0$, $\\operatorname{div}\\vec{B} = 0$, $\\overrightarrow{\\operatorname{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$, $\\overrightarrow{\\operatorname{rot}}\\,\\vec{B} = \\mu_0\\varepsilon_0\\frac{\\partial \\vec{E}}{\\partial t}$. En prenant le rotationnel de Maxwell-Faraday et en utilisant $\\overrightarrow{\\operatorname{rot}}(\\overrightarrow{\\operatorname{rot}}\\,\\vec{E}) = \\overrightarrow{\\operatorname{grad}}(\\operatorname{div}\\vec{E}) - \\Delta\\vec{E} = -\\Delta\\vec{E}$, on obtient
$$ \\Delta\\vec{E} - \\mu_0\\varepsilon_0\\frac{\\partial^2\\vec{E}}{\\partial t^2} = \\vec{0}, \\qquad c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}. $$
En injectant l'onde plane : $-k^2 E_0 + \\mu_0\\varepsilon_0\\,\\omega^2 E_0 = 0$, soit $k = \\omega/c$ (relation de dispersion).

<strong>2.</strong> Maxwell-Faraday : $\\frac{\\partial\\vec{B}}{\\partial t} = -\\overrightarrow{\\operatorname{rot}}\\,\\vec{E}$. Avec $\\vec{E} = E_0\\cos(\\omega t - kz)\\vec{u}_x$, $\\overrightarrow{\\operatorname{rot}}\\,\\vec{E} = \\frac{\\partial E_x}{\\partial z}\\,(-\\vec{u}_y) \\cdot(-1)$... calcul : $\\overrightarrow{\\operatorname{rot}}\\,\\vec{E} = -\\frac{\\partial E_x}{\\partial z}\\vec{u}_y = -k E_0\\sin(\\omega t - kz)\\vec{u}_y$. Donc $\\frac{\\partial\\vec{B}}{\\partial t} = kE_0\\sin(\\omega t - kz)\\vec{u}_y$, d'où en intégrant
$$ \\vec{B} = \\frac{kE_0}{\\omega}\\cos(\\omega t - kz)\\vec{u}_y = \\frac{E_0}{c}\\cos(\\omega t - kz)\\vec{u}_y. $$
Ainsi $\\vec{E}\\parallel\\vec{u}_x$, $\\vec{B}\\parallel\\vec{u}_y$, $\\vec{k}\\parallel\\vec{u}_z$ : trièdre direct, et $B_0 = E_0/c$ soit $E_0 = cB_0$.

<strong>3.</strong> $u = \\frac{\\varepsilon_0 E^2}{2} + \\frac{B^2}{2\\mu_0}$. Comme $B = E/c$ et $\\mu_0\\varepsilon_0 c^2 = 1$, les deux termes sont égaux : $u = \\varepsilon_0 E^2 = \\varepsilon_0 E_0^2\\cos^2(\\omega t - kz)$.
Vecteur de Poynting : $\\vec{\\Pi} = \\frac{\\vec{E}\\wedge\\vec{B}}{\\mu_0} = \\frac{E_0^2}{\\mu_0 c}\\cos^2(\\omega t - kz)\\,\\vec{u}_z$. Or $\\frac{1}{\\mu_0 c} = \\varepsilon_0 c$, donc $\\vec{\\Pi} = \\varepsilon_0 c E_0^2\\cos^2(\\cdot)\\vec{u}_z = u\\,c\\,\\vec{u}_z$.

<strong>4.</strong> $\\langle\\cos^2\\rangle = 1/2$, donc $\\langle\\Pi\\rangle = \\frac{1}{2}\\varepsilon_0 c E_0^2 = \\frac{1}{2}\\times 8{,}85\\times 10^{-12}\\times 3{,}0\\times 10^{8}\\times (1{,}0\\times 10^{3})^2 \\approx 1{,}3\\times 10^{3}$ W/m$^2$. C'est la puissance moyenne transportée par l'onde à travers une surface unité perpendiculaire à la propagation (éclairement).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-meca',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Bille sur piste circulaire : Newton et énergie',
            contenu: `<strong>Énoncé.</strong> Une bille assimilée à un point matériel de masse $m = 0{,}10$ kg est lâchée sans vitesse initiale au sommet $A$ d'une piste, d'une hauteur $h$ au-dessus du point $B$. En $B$ commence une boucle circulaire verticale de rayon $R = 0{,}30$ m ; le point $C$ est le sommet de la boucle. On néglige tout frottement. On prend $g = 9{,}8$ m/s$^2$.

1. Par un théorème énergétique, exprimer la vitesse $v_B$ en $B$ puis $v_C$ au sommet $C$ de la boucle, en fonction de $g$, $h$ et $R$.
2. En appliquant la deuxième loi de Newton au point $C$ (projection radiale), exprimer la réaction normale $N$ de la piste en $C$ en fonction de $m$, $g$, $h$, $R$.
3. En déduire la hauteur minimale $h_{\\min}$ pour que la bille garde le contact avec la piste tout au long de la boucle. Calculer $h_{\\min}$.
4. Pour $h = 2h_{\\min}$, calculer la vitesse $v_C$ et la réaction $N$ au sommet.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Pas de frottement, la réaction normale ne travaille pas : conservation de l'énergie mécanique. Origine des altitudes en $B$.
De $A$ à $B$ : $\\frac{1}{2}m v_B^2 = mgh \\Rightarrow v_B = \\sqrt{2gh}$.
De $A$ à $C$ (altitude $2R$) : $\\frac{1}{2}m v_C^2 + mg(2R) = mgh \\Rightarrow v_C^2 = 2g(h - 2R)$, soit $v_C = \\sqrt{2g(h-2R)}$.

<strong>2.</strong> Au sommet $C$, la bille décrit un cercle de rayon $R$ ; l'accélération est centripète, dirigée vers le centre (vers le bas). Le poids $mg$ et la réaction $N$ (la piste pousse vers l'intérieur, donc vers le bas en $C$) sont tous deux dirigés vers le centre. PFD radial :
$$ N + mg = \\frac{m v_C^2}{R} \\Rightarrow N = \\frac{m v_C^2}{R} - mg = \\frac{m\\cdot 2g(h-2R)}{R} - mg = mg\\left(\\frac{2(h-2R)}{R} - 1\\right). $$

<strong>3.</strong> Le contact est maintenu tant que $N \\geq 0$. La condition limite $N = 0$ donne $\\frac{2(h-2R)}{R} = 1$, soit $h - 2R = R/2$, d'où
$$ h_{\\min} = 2R + \\frac{R}{2} = \\frac{5R}{2} = \\frac{5\\times 0{,}30}{2} = 0{,}75\\ \\text{m}. $$
(À $N=0$, c'est le poids seul qui fournit la force centripète : $v_C^2 = gR$.)

<strong>4.</strong> $h = 2h_{\\min} = 1{,}50$ m. $v_C^2 = 2g(h - 2R) = 2\\times 9{,}8\\times(1{,}50 - 0{,}60) = 17{,}6\\ \\text{m}^2/\\text{s}^2$, soit $v_C \\approx 4{,}2$ m/s.
$N = \\frac{m v_C^2}{R} - mg = \\frac{0{,}10\\times 17{,}6}{0{,}30} - 0{,}10\\times 9{,}8 \\approx 5{,}9 - 0{,}98 \\approx 4{,}9$ N.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ph-newton',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Satellite : orbite circulaire, énergie et vitesses cosmiques',
            contenu: `<strong>Énoncé.</strong> Un satellite de masse $m$ est en orbite autour de la Terre (masse $M_T = 5{,}97\\times 10^{24}$ kg, rayon $R_T = 6{,}37\\times 10^{6}$ m). On donne $G = 6{,}67\\times 10^{-11}$ SI. L'attraction est newtonienne : $\\vec{F} = -\\frac{GM_T m}{r^2}\\vec{u}_r$.

1. Montrer que le mouvement est plan et que la force est conservative ; donner l'énergie potentielle $E_p(r)$ (nulle à l'infini).
2. Pour une orbite circulaire de rayon $r$, établir par la deuxième loi de Newton l'expression de la vitesse $v$, puis de l'énergie mécanique $E_m$ en fonction de $r$. Montrer que $E_m = \\frac{1}{2}E_p$.
3. Exprimer et calculer la première vitesse cosmique $v_1$ (orbite rasante, $r \\approx R_T$).
4. Définir et exprimer la vitesse de libération $v_{\\text{lib}}$ depuis le sol. La calculer et la comparer à $v_1$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La force est centrale : le moment cinétique $\\vec{L}_O = \\vec{r}\\wedge m\\vec{v}$ est constant (son moment est nul). $\\vec{r}$ et $\\vec{v}$ restent dans le plan perpendiculaire à $\\vec{L}_O$ : le mouvement est plan. La force dérive de $E_p$ avec $\\vec{F} = -\\frac{\\mathrm{d}E_p}{\\mathrm{d}r}\\vec{u}_r$, donc $\\frac{\\mathrm{d}E_p}{\\mathrm{d}r} = \\frac{GM_T m}{r^2}$, d'où
$$ E_p(r) = -\\frac{GM_T m}{r} \\quad (E_p(\\infty)=0). $$

<strong>2.</strong> Orbite circulaire : accélération centripète $v^2/r$. PFD : $\\frac{m v^2}{r} = \\frac{GM_T m}{r^2}$, donc
$$ v = \\sqrt{\\frac{GM_T}{r}}, \\qquad E_c = \\frac{1}{2}mv^2 = \\frac{GM_T m}{2r}. $$
Énergie mécanique : $E_m = E_c + E_p = \\frac{GM_T m}{2r} - \\frac{GM_T m}{r} = -\\frac{GM_T m}{2r}$. On vérifie $E_m = \\frac{1}{2}E_p$ et $E_m = -E_c$ (théorème du viriel).

<strong>3.</strong> Première vitesse cosmique : $v_1 = \\sqrt{\\frac{GM_T}{R_T}} = \\sqrt{\\frac{6{,}67\\times 10^{-11}\\times 5{,}97\\times 10^{24}}{6{,}37\\times 10^{6}}} \\approx \\sqrt{6{,}25\\times 10^{7}} \\approx 7{,}9\\times 10^{3}$ m/s, soit environ $7{,}9$ km/s.

<strong>4.</strong> La vitesse de libération est la vitesse minimale au sol pour que le satellite s'échappe ($r\\to\\infty$ avec $v\\to 0$, donc $E_m \\geq 0$). À la limite $E_m = 0$ : $\\frac{1}{2}m v_{\\text{lib}}^2 - \\frac{GM_T m}{R_T} = 0$, d'où
$$ v_{\\text{lib}} = \\sqrt{\\frac{2GM_T}{R_T}} = \\sqrt{2}\\,v_1 \\approx 1{,}41\\times 7{,}9 \\approx 11{,}2\\ \\text{km/s}. $$
La vitesse de libération vaut $\\sqrt{2}$ fois la première vitesse cosmique.
</details>`
          }
        ]
      }
    ]
  }
]
