export const DATA = [
  {
    id: 'phch-tpc-cineq',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Décomposition du peroxyde d\'hydrogène',
            contenu: `<strong>Énoncé.</strong> On étudie la décomposition du peroxyde d'hydrogène en solution aqueuse selon :
$$2\\,H_2O_2\\,(aq) \\longrightarrow 2\\,H_2O\\,(\\ell) + O_2\\,(g)$$
À l'instant initial, on dispose d'un volume $V = 100\\ mL$ de solution de concentration $[H_2O_2]_0 = 0{,}50\\ mol\\cdot L^{-1}$. On suit l'avancement de la réaction en mesurant le volume de dioxygène dégagé. On relève les concentrations suivantes en peroxyde d'hydrogène :

<table><tr><td>$t$ (min)</td><td>0</td><td>10</td><td>20</td><td>30</td><td>40</td></tr><tr><td>$[H_2O_2]$ ($mol\\cdot L^{-1}$)</td><td>0,50</td><td>0,32</td><td>0,20</td><td>0,13</td><td>0,082</td></tr></table>

1. Définir la vitesse volumique de disparition du peroxyde d'hydrogène. La déterminer graphiquement (par lecture de tangente) à $t = 0$ et à $t = 20\\ min$.
2. Comment évolue cette vitesse au cours du temps ? Interpréter à l'échelle microscopique.
3. On constate que la concentration est divisée par environ $1{,}55$ tous les $10\\ min$. En déduire que le temps de demi-réaction $t_{1/2}$ est de l'ordre de $16\\ min$ et qu'il ne dépend pas de la concentration initiale.
4. On ajoute une trace d'ions $Fe^{3+}$. Le temps de demi-réaction passe à $4\\ min$. Quel est le rôle des ions $Fe^{3+}$ ? Le tableau d'avancement final est-il modifié ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La vitesse volumique de disparition est $v = -\\dfrac{d[H_2O_2]}{dt}$. Elle se lit comme l'opposé de la pente de la tangente à la courbe $[H_2O_2](t)$.
À $t = 0$, la tangente chute d'environ $0{,}20\\ mol\\cdot L^{-1}$ en $10\\ min$, soit $v_0 \\approx \\dfrac{0{,}20}{10} = 2{,}0\\times 10^{-2}\\ mol\\cdot L^{-1}\\cdot min^{-1}$.
À $t = 20\\ min$, la pente est plus faible : la concentration passe d'environ $0{,}26$ à $0{,}16$ sur $20\\ min$, soit $v_{20} \\approx 0{,}9\\times 10^{-2}\\ mol\\cdot L^{-1}\\cdot min^{-1}$.

<strong>2.</strong> La vitesse diminue au cours du temps. C'est un facteur cinétique : la concentration des réactifs diminue, donc les chocs efficaces entre molécules deviennent moins fréquents, ce qui ralentit la réaction.

<strong>3.</strong> Partant de $0{,}50$ : à $10\\ min$ on a $0{,}32$, soit $\\div 1{,}56$ ; de $0{,}32$ à $0{,}20$, encore $\\div 1{,}6$. La demi-réaction correspond à $[H_2O_2] = 0{,}25\\ mol\\cdot L^{-1}$, valeur atteinte entre $t = 10$ et $t = 20\\ min$, vers $t_{1/2} \\approx 16\\ min$. Comme la concentration est divisée par un facteur constant à intervalles de temps égaux (loi de décroissance d'ordre 1), $t_{1/2}$ est indépendant de $[H_2O_2]_0$.

<strong>4.</strong> Les ions $Fe^{3+}$ accélèrent la réaction sans être consommés au bilan : c'est un <strong>catalyseur</strong> (catalyse homogène). Ils abaissent l'énergie d'activation en offrant un chemin réactionnel plus rapide. L'état final (avancement maximal, concentrations finales) n'est PAS modifié : un catalyseur ne change que la vitesse, pas le bilan ni l'équilibre. Le tableau d'avancement final est identique.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-elec',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Pile Daniell : fonctionnement et bilan énergétique',
            contenu: `<strong>Énoncé.</strong> On réalise une pile Daniell associant les couples $Cu^{2+}/Cu$ et $Zn^{2+}/Zn$. Le compartiment de gauche contient une lame de zinc plongée dans $V = 50\\ mL$ de solution de sulfate de zinc à $[Zn^{2+}]_0 = 0{,}10\\ mol\\cdot L^{-1}$ ; le compartiment de droite une lame de cuivre dans $50\\ mL$ de sulfate de cuivre à $[Cu^{2+}]_0 = 0{,}10\\ mol\\cdot L^{-1}$. Un pont salin relie les deux compartiments. Expérimentalement, l'électrode de zinc est le pôle négatif. On donne $\\mathcal{F} = 96\\,500\\ C\\cdot mol^{-1}$.

1. Écrire les demi-équations à chaque électrode, en précisant l'oxydation et la réduction, puis l'équation de fonctionnement de la pile.
2. Indiquer le sens de circulation des électrons dans le circuit extérieur et le sens du courant. Quel est le rôle du pont salin ?
3. La pile débite un courant d'intensité constante $I = 20\\ mA$ pendant $\\Delta t = 1{,}0\\ h$. Calculer la quantité d'électricité débitée, puis la quantité de matière d'électrons échangés.
4. En déduire la variation de masse de la lame de zinc ($M(Zn) = 65{,}4\\ g\\cdot mol^{-1}$) et la nouvelle concentration en ions $Cu^{2+}$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le zinc est le pôle négatif : il subit l'oxydation (anode).
Anode (oxydation) : $Zn\\,(s) = Zn^{2+} + 2\\,e^{-}$.
Cathode (réduction) : $Cu^{2+} + 2\\,e^{-} = Cu\\,(s)$.
Équation de fonctionnement : $Zn\\,(s) + Cu^{2+} \\longrightarrow Zn^{2+} + Cu\\,(s)$.

<strong>2.</strong> Les électrons partent de l'électrode de zinc (pôle $-$) vers l'électrode de cuivre (pôle $+$) dans le circuit extérieur. Le courant conventionnel circule en sens inverse, du $+$ vers le $-$ à l'extérieur. Le pont salin assure la neutralité électrique des solutions et ferme le circuit en laissant migrer les ions.

<strong>3.</strong> Quantité d'électricité : $Q = I\\,\\Delta t = 20\\times 10^{-3} \\times 3600 = 72\\ C$.
Quantité d'électrons : $n(e^{-}) = \\dfrac{Q}{\\mathcal{F}} = \\dfrac{72}{96\\,500} = 7{,}5\\times 10^{-4}\\ mol$.

<strong>4.</strong> D'après la demi-équation à l'anode, $n(Zn\\ \\text{consommé}) = \\dfrac{n(e^{-})}{2} = 3{,}7\\times 10^{-4}\\ mol$.
Perte de masse : $\\Delta m = -\\,n(Zn)\\times M(Zn) = -3{,}7\\times 10^{-4}\\times 65{,}4 = -2{,}5\\times 10^{-2}\\ g$, soit environ $-25\\ mg$.
De même $n(Cu^{2+}\\ \\text{consommé}) = 3{,}7\\times 10^{-4}\\ mol$. Quantité initiale : $n_0(Cu^{2+}) = 0{,}10\\times 0{,}050 = 5{,}0\\times 10^{-3}\\ mol$, donc restante $5{,}0\\times 10^{-3} - 3{,}7\\times 10^{-4} = 4{,}6\\times 10^{-3}\\ mol$.
Nouvelle concentration : $[Cu^{2+}] = \\dfrac{4{,}6\\times 10^{-3}}{0{,}050} = 9{,}3\\times 10^{-2}\\ mol\\cdot L^{-1}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-equilibre',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Équilibre acido-basique et précipitation',
            contenu: `<strong>Énoncé.</strong> On dissout de l'acide éthanoïque $CH_3COOH$ dans l'eau pour obtenir une solution de concentration apportée $c = 1{,}0\\times 10^{-2}\\ mol\\cdot L^{-1}$. La réaction avec l'eau s'écrit :
$$CH_3COOH\\,(aq) + H_2O\\,(\\ell) = CH_3COO^{-}\\,(aq) + H_3O^{+}\\,(aq)$$
de constante d'équilibre $K = 1{,}6\\times 10^{-5}$. Le pH mesuré vaut $3{,}4$.

1. Dresser le tableau d'avancement (en concentrations) en notant $x_f$ l'avancement volumique à l'équilibre. Exprimer le quotient de réaction à l'équilibre $Q_{r,éq}$ et vérifier qu'il vaut $K$.
2. À partir du pH, calculer $[H_3O^{+}]_f$, puis le taux d'avancement final $\\tau = x_f / c$. La transformation est-elle totale ?
3. Calculer le quotient de réaction $Q_{r,éq}$ avec les valeurs trouvées et conclure quant à l'accord avec $K$.
4. À cette solution on ajoute des ions argent $Ag^{+}$. Sachant que l'éthanoate d'argent précipite si $[Ag^{+}]\\cdot[CH_3COO^{-}] > K_s$ avec $K_s = 1{,}9\\times 10^{-3}$, déterminer la concentration minimale en $Ag^{+}$ provoquant l'apparition d'un précipité.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Tableau (concentrations) : initial $[CH_3COOH] = c$, autres $\\approx 0$ ; à l'équilibre $[CH_3COOH] = c - x_f$, $[CH_3COO^{-}] = x_f$, $[H_3O^{+}] = x_f$ (l'autoprotolyse de l'eau est négligée).
$$Q_{r,éq} = \\dfrac{[CH_3COO^{-}]_f\\,[H_3O^{+}]_f}{[CH_3COOH]_f} = \\dfrac{x_f^{2}}{c - x_f}.$$

<strong>2.</strong> $[H_3O^{+}]_f = 10^{-pH} = 10^{-3{,}4} = 4{,}0\\times 10^{-4}\\ mol\\cdot L^{-1}$. Comme $x_f = [H_3O^{+}]_f$, on a $x_f = 4{,}0\\times 10^{-4}\\ mol\\cdot L^{-1}$.
Taux d'avancement : $\\tau = \\dfrac{x_f}{c} = \\dfrac{4{,}0\\times 10^{-4}}{1{,}0\\times 10^{-2}} = 4{,}0\\times 10^{-2} = 4\\ \\%$. Très inférieur à 1 : la transformation est <strong>limitée</strong> (non totale), l'acide éthanoïque est un acide faible.

<strong>3.</strong> $Q_{r,éq} = \\dfrac{(4{,}0\\times 10^{-4})^{2}}{1{,}0\\times 10^{-2} - 4{,}0\\times 10^{-4}} = \\dfrac{1{,}6\\times 10^{-7}}{9{,}6\\times 10^{-3}} = 1{,}7\\times 10^{-5}$. Cette valeur est en accord avec $K = 1{,}6\\times 10^{-5}$ : le système est bien à l'équilibre.

<strong>4.</strong> À l'équilibre $[CH_3COO^{-}]_f = x_f = 4{,}0\\times 10^{-4}\\ mol\\cdot L^{-1}$. Le précipité apparaît dès que $[Ag^{+}]\\cdot[CH_3COO^{-}]_f = K_s$, soit
$$[Ag^{+}]_{min} = \\dfrac{K_s}{[CH_3COO^{-}]_f} = \\dfrac{1{,}9\\times 10^{-3}}{4{,}0\\times 10^{-4}} = 4{,}8\\ mol\\cdot L^{-1}.$$
Cette concentration étant très élevée, le précipité ne se forme pratiquement pas dans les conditions usuelles.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-kepler',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Satellite géostationnaire et lois de Kepler',
            contenu: `<strong>Énoncé.</strong> Un satellite de masse $m$ décrit une orbite circulaire de rayon $r$ autour de la Terre, de masse $M_T = 5{,}97\\times 10^{24}\\ kg$ et de rayon $R_T = 6{,}38\\times 10^{3}\\ km$. On donne $G = 6{,}67\\times 10^{-11}\\ SI$.

1. En appliquant la deuxième loi de Newton au satellite (soumis à la seule force gravitationnelle), montrer que le mouvement circulaire est uniforme et établir l'expression de la vitesse $v$ en fonction de $G$, $M_T$ et $r$.
2. En déduire l'expression de la période de révolution $T$ et retrouver la troisième loi de Kepler $\\dfrac{T^{2}}{r^{3}} = \\dfrac{4\\pi^{2}}{G\\,M_T}$.
3. Un satellite géostationnaire reste fixe au-dessus d'un point de l'équateur. Quelle condition sur $T$ cela impose-t-il ? Calculer le rayon $r$ de son orbite, puis son altitude $h$.
4. Calculer sa vitesse $v$ et commenter sa valeur.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La force gravitationnelle est $\\vec{F} = -\\dfrac{G\\,M_T\\,m}{r^{2}}\\,\\vec{u_r}$ (dirigée vers la Terre). Deuxième loi de Newton : $m\\,\\vec{a} = \\vec{F}$, donc $\\vec{a}$ est centripète. Dans la base de Frenet, $\\vec{a} = \\dfrac{dv}{dt}\\vec{u_t} + \\dfrac{v^{2}}{r}\\vec{u_n}$. La force n'ayant pas de composante tangentielle, $\\dfrac{dv}{dt} = 0$ : le mouvement est <strong>uniforme</strong>. La composante normale donne :
$$m\\,\\dfrac{v^{2}}{r} = \\dfrac{G\\,M_T\\,m}{r^{2}} \\quad\\Rightarrow\\quad v = \\sqrt{\\dfrac{G\\,M_T}{r}}.$$

<strong>2.</strong> Le mouvement étant uniforme, $v = \\dfrac{2\\pi r}{T}$, d'où $T = \\dfrac{2\\pi r}{v} = 2\\pi r\\sqrt{\\dfrac{r}{G\\,M_T}}$. En élevant au carré :
$$T^{2} = \\dfrac{4\\pi^{2}r^{3}}{G\\,M_T} \\quad\\Rightarrow\\quad \\dfrac{T^{2}}{r^{3}} = \\dfrac{4\\pi^{2}}{G\\,M_T},$$
c'est la troisième loi de Kepler, indépendante de la masse du satellite.

<strong>3.</strong> Géostationnaire : le satellite suit la rotation de la Terre, donc $T = 1\\ \\text{jour sidéral} = 86\\,164\\ s \\approx 8{,}62\\times 10^{4}\\ s$.
$$r = \\left(\\dfrac{G\\,M_T\\,T^{2}}{4\\pi^{2}}\\right)^{1/3} = \\left(\\dfrac{6{,}67\\times 10^{-11}\\times 5{,}97\\times 10^{24}\\times (8{,}62\\times 10^{4})^{2}}{4\\pi^{2}}\\right)^{1/3}.$$
Numérateur : $6{,}67\\times 10^{-11}\\times 5{,}97\\times 10^{24} = 3{,}98\\times 10^{14}$ ; $\\times (8{,}62\\times 10^{4})^{2} = \\times 7{,}43\\times 10^{9} = 2{,}96\\times 10^{24}$. Divisé par $39{,}5$ : $7{,}49\\times 10^{22}$. Racine cubique : $r \\approx 4{,}22\\times 10^{7}\\ m = 4{,}22\\times 10^{4}\\ km$.
Altitude : $h = r - R_T = 4{,}22\\times 10^{4} - 6{,}38\\times 10^{3} = 3{,}59\\times 10^{4}\\ km \\approx 36\\,000\\ km$.

<strong>4.</strong> $v = \\sqrt{\\dfrac{G\\,M_T}{r}} = \\sqrt{\\dfrac{3{,}98\\times 10^{14}}{4{,}22\\times 10^{7}}} = \\sqrt{9{,}43\\times 10^{6}} \\approx 3{,}1\\times 10^{3}\\ m\\cdot s^{-1}$, soit environ $3{,}1\\ km\\cdot s^{-1}$. C'est plus lent qu'un satellite en orbite basse (environ $7{,}6\\ km\\cdot s^{-1}$) : plus l'orbite est haute, plus la vitesse est faible, conformément à $v \\propto r^{-1/2}$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-newton',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Plongeon et deuxième loi de Newton',
            contenu: `<strong>Énoncé.</strong> Un plongeur de masse $m = 70\\ kg$ s'élance d'un plongeoir situé à une hauteur $H = 10\\ m$ au-dessus de l'eau. On le modélise par un point matériel. Il quitte le plongeoir avec une vitesse initiale verticale dirigée vers le haut de valeur $v_0 = 2{,}0\\ m\\cdot s^{-1}$. On néglige les frottements de l'air. On prend $g = 9{,}8\\ m\\cdot s^{-2}$. L'axe $Oz$ est vertical ascendant, l'origine au niveau du plongeoir.

1. Faire le bilan des forces puis appliquer la deuxième loi de Newton pour établir l'équation horaire $z(t)$.
2. Déterminer la hauteur maximale atteinte au-dessus du plongeoir et l'instant correspondant.
3. À quel instant le plongeur atteint-il la surface de l'eau ? En déduire la valeur de sa vitesse à l'entrée dans l'eau par deux méthodes : cinématique et énergétique.
4. Vérifier la cohérence des deux méthodes et commenter le rôle de la masse.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Dans l'air sans frottement, le plongeur n'est soumis qu'à son poids $\\vec{P} = m\\,\\vec{g}$. Deuxième loi de Newton : $m\\,\\vec{a} = m\\,\\vec{g}$, donc $\\vec{a} = \\vec{g}$, de composante $a_z = -g$. En intégrant : $v_z(t) = -g\\,t + v_0$, puis $z(t) = -\\dfrac{1}{2}g\\,t^{2} + v_0\\,t$ (avec $z(0)=0$).
Soit $z(t) = -4{,}9\\,t^{2} + 2{,}0\\,t$.

<strong>2.</strong> Au sommet, $v_z = 0$ : $-g\\,t_s + v_0 = 0 \\Rightarrow t_s = \\dfrac{v_0}{g} = \\dfrac{2{,}0}{9{,}8} = 0{,}20\\ s$.
Hauteur : $z_{max} = -4{,}9\\times (0{,}20)^{2} + 2{,}0\\times 0{,}20 = -0{,}20 + 0{,}41 = 0{,}20\\ m$ au-dessus du plongeoir.

<strong>3.</strong> La surface de l'eau correspond à $z = -H = -10\\ m$ : $-4{,}9\\,t^{2} + 2{,}0\\,t = -10$, soit $4{,}9\\,t^{2} - 2{,}0\\,t - 10 = 0$.
Discriminant : $\\Delta = (2{,}0)^{2} + 4\\times 4{,}9\\times 10 = 4{,}0 + 196 = 200$, $\\sqrt{\\Delta} = 14{,}1$. Racine positive : $t = \\dfrac{2{,}0 + 14{,}1}{2\\times 4{,}9} = \\dfrac{16{,}1}{9{,}8} = 1{,}6\\ s$.
<em>Méthode cinématique :</em> $v_z = -g\\,t + v_0 = -9{,}8\\times 1{,}6 + 2{,}0 = -14{,}1\\ m\\cdot s^{-1}$, soit une valeur de $14\\ m\\cdot s^{-1}$.
<em>Méthode énergétique :</em> théorème de l'énergie cinétique entre le départ et l'eau : $\\dfrac{1}{2}m\\,v^{2} - \\dfrac{1}{2}m\\,v_0^{2} = m\\,g\\,H$ (le poids fournit un travail moteur sur la descente nette $H$). Donc $v = \\sqrt{v_0^{2} + 2gH} = \\sqrt{(2{,}0)^{2} + 2\\times 9{,}8\\times 10} = \\sqrt{4{,}0 + 196} = \\sqrt{200} = 14{,}1\\ m\\cdot s^{-1}$.

<strong>4.</strong> Les deux méthodes donnent la même valeur $v \\approx 14\\ m\\cdot s^{-1}$ : cohérence confirmée. La masse $m$ se simplifie dans les deux approches : la vitesse d'arrivée ne dépend pas de la masse du plongeur (chute libre), seulement de $v_0$, $g$ et $H$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-ondes',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du laser à l\'écho Doppler',
            contenu: `<strong>Énoncé.</strong> Cet exercice croise diffraction, interférences et effet Doppler.
<em>Partie A — Diffraction.</em> Un laser de longueur d'onde $\\lambda = 633\\ nm$ éclaire une fente de largeur $a$. Sur un écran placé à $D = 2{,}0\\ m$, on mesure une largeur de la tache centrale (entre les deux premières extinctions) $L = 2{,}5\\ cm$.
<em>Partie B — Interférences.</em> On remplace la fente par deux fentes distantes de $b = 0{,}30\\ mm$. On observe sur l'écran des franges d'interfrange $i$ donné par $i = \\dfrac{\\lambda D}{b}$.
<em>Partie C — Doppler.</em> Une source sonore émet à $f_0 = 1\\,000\\ Hz$ et s'approche d'un observateur à la vitesse $v = 30\\ m\\cdot s^{-1}$. Célérité du son : $c_{son} = 340\\ m\\cdot s^{-1}$.

1. Rappeler la condition d'obtention d'une figure de diffraction notable. Exprimer le demi-angle de diffraction $\\theta$ puis la largeur $L$ de la tache centrale en fonction de $\\lambda$, $D$, $a$. En déduire $a$.
2. Calculer l'interfrange $i$. Qu'observe-t-on si l'on augmente $b$ ? Si l'on augmente $\\lambda$ ?
3. Énoncer le phénomène mis en jeu en partie C. Calculer la fréquence $f$ perçue par l'observateur lorsque la source s'approche.
4. La source s'éloigne ensuite à la même vitesse. Calculer la nouvelle fréquence perçue et l'écart $\\Delta f$ entre les deux situations.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> La diffraction est notable quand la largeur de la fente est de l'ordre de la longueur d'onde ($a \\sim \\lambda$). Le demi-angle (petit) vaut $\\theta = \\dfrac{\\lambda}{a}$ (en rad). La tache centrale occupe un angle total $2\\theta$, donc sur l'écran $L = 2D\\,\\theta = \\dfrac{2\\lambda D}{a}$. On en tire :
$$a = \\dfrac{2\\lambda D}{L} = \\dfrac{2\\times 633\\times 10^{-9}\\times 2{,}0}{2{,}5\\times 10^{-2}} = 1{,}0\\times 10^{-4}\\ m = 0{,}10\\ mm.$$

<strong>2.</strong> $i = \\dfrac{\\lambda D}{b} = \\dfrac{633\\times 10^{-9}\\times 2{,}0}{0{,}30\\times 10^{-3}} = 4{,}2\\times 10^{-3}\\ m = 4{,}2\\ mm$. Si $b$ augmente, $i$ diminue (franges plus resserrées). Si $\\lambda$ augmente, $i$ augmente (franges plus écartées).

<strong>3.</strong> C'est l'<strong>effet Doppler</strong>. Source qui s'approche : la fréquence perçue augmente :
$$f = f_0\\,\\dfrac{c_{son}}{c_{son} - v} = 1\\,000\\times \\dfrac{340}{340 - 30} = 1\\,000\\times \\dfrac{340}{310} = 1{,}10\\times 10^{3}\\ Hz.$$

<strong>4.</strong> Source qui s'éloigne : $f' = f_0\\,\\dfrac{c_{son}}{c_{son} + v} = 1\\,000\\times \\dfrac{340}{370} = 9{,}19\\times 10^{2}\\ Hz$.
Écart entre les deux perceptions : $\\Delta f = f - f' = 1\\,097 - 919 = 1{,}8\\times 10^{2}\\ Hz$. La fréquence chute brusquement au passage de la source, ce qui explique le changement de hauteur du son perçu (sirène, voiture qui passe).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-optique',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'De la lentille convergente à la lunette astronomique',
            contenu: `<strong>Énoncé.</strong> <em>Partie A.</em> Une lentille mince convergente $L_1$ de distance focale $f'_1 = 20\\ cm$ donne d'un objet $AB$ réel une image $A'B'$. L'objet, perpendiculaire à l'axe, est placé à $\\overline{OA} = -50\\ cm$ de la lentille.
<em>Partie B.</em> On construit une lunette astronomique afocale avec un objectif $L_1$ de focale $f'_1 = 1{,}0\\ m$ et un oculaire $L_2$ de focale $f'_2 = 5{,}0\\ cm$.

1. Énoncer les relations de conjugaison et de grandissement (origine au centre optique). Calculer la position $\\overline{OA'}$ de l'image, son grandissement $\\gamma$, et préciser sa nature (réelle/virtuelle, droite/renversée).
2. Vérifier le résultat par une construction géométrique (décrire les trois rayons utiles).
3. Pour la lunette afocale : où se forment l'image intermédiaire d'un objet à l'infini et l'image finale ? Quelle condition géométrique cela impose-t-il entre $L_1$ et $L_2$ ? En déduire la distance entre les deux lentilles.
4. Définir et calculer le grossissement $G$ de la lunette. La Lune, vue à l'œil nu sous un diamètre apparent $\\alpha = 0{,}50°$, est observée à travers la lunette : sous quel angle $\\alpha'$ la voit-on ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Relation de conjugaison : $\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'_1}$. Avec $\\overline{OA} = -0{,}50\\ m$ et $f'_1 = 0{,}20\\ m$ :
$$\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{0{,}20} + \\dfrac{1}{-0{,}50} = 5{,}0 - 2{,}0 = 3{,}0\\ m^{-1} \\Rightarrow \\overline{OA'} = +0{,}33\\ m = 33\\ cm.$$
Grandissement : $\\gamma = \\dfrac{\\overline{OA'}}{\\overline{OA}} = \\dfrac{0{,}33}{-0{,}50} = -0{,}67$. Image réelle ($\\overline{OA'}>0$), renversée ($\\gamma<0$) et plus petite que l'objet ($|\\gamma|<1$).

<strong>2.</strong> Construction : (i) un rayon issu de $B$ parallèle à l'axe ressort en passant par le foyer image $F'$ ; (ii) un rayon passant par le centre optique $O$ n'est pas dévié ; (iii) un rayon passant par le foyer objet $F$ ressort parallèle à l'axe. Leur intersection donne $B'$, et $A'$ est son projeté sur l'axe. On retrouve une image réelle renversée entre $F'$ et $2F'$.

<strong>3.</strong> Un objet à l'infini donne par $L_1$ une image intermédiaire dans son plan focal image, donc en $F'_1$. Pour que l'image finale soit elle aussi à l'infini (système afocal, observation à l'œil au repos), cette image intermédiaire doit être dans le plan focal objet de l'oculaire, donc $F'_1 = F_2$ : les deux foyers sont confondus. La distance entre lentilles est $D = f'_1 + f'_2 = 1{,}0 + 0{,}05 = 1{,}05\\ m$.

<strong>4.</strong> Le grossissement est $G = \\dfrac{\\alpha'}{\\alpha}$ (rapport de l'angle sous lequel on voit l'image à celui de l'objet à l'œil nu). Pour une lunette afocale, $G = \\dfrac{f'_1}{f'_2} = \\dfrac{1{,}0}{0{,}05} = 20$.
Angle perçu : $\\alpha' = G\\times \\alpha = 20\\times 0{,}50 = 10°$. La Lune apparaît donc 20 fois plus grande angulairement.
</details>`
          }
        ]
      }
    ]
  }
]
