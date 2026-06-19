export const DATA = [
  {
    id: 'phch-5e-signaux',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'écho dans la montagne',
            contenu: `<strong>Énoncé.</strong> Léa est en randonnée au pied d'une falaise. Elle pousse un grand cri et entend son écho revenir <strong>2 s</strong> plus tard. On donne la vitesse du son dans l'air : $v = 340$ m/s.
<br><br>
<strong>1.</strong> Explique pourquoi Léa entend un écho. De quoi a besoin un son pour se propager ?
<br><strong>2.</strong> Quelle distance le son a-t-il parcourue en tout pendant ces 2 s ? À quelle distance de la falaise se trouve Léa ?
<br><strong>3.</strong> Léa crie une deuxième fois, mais plus fort. Quelle caractéristique du son a-t-elle modifiée ? L'écho reviendra-t-il plus vite ?
<br><strong>4.</strong> Plus tard, dans l'espace (où il n'y a pas d'air), un astronaute crie. Son coéquipier juste à côté l'entend-il sans casque-radio ? Justifie.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Quand Léa crie, le son se propage dans l'air et va frapper la paroi de la falaise. Il est alors renvoyé (réfléchi) vers elle : c'est l'écho. Un son a besoin d'un <strong>milieu matériel</strong> (ici l'air) pour se propager : il ne peut pas se déplacer dans le vide.
<br><br>
<strong>2.</strong> La distance parcourue par le son est : $d = v \\times t = 340 \\times 2 = 680$ m.
<br>Pendant ces 2 s, le son fait l'aller <em>et</em> le retour. La distance entre Léa et la falaise est donc la moitié :
$$D = \\frac{680}{2} = 340 \\text{ m}.$$
Léa se trouve à <strong>340 m</strong> de la falaise.
<br><br>
<strong>3.</strong> En criant plus fort, Léa augmente le <strong>volume sonore</strong> (l'intensité) du son, donc son amplitude. Mais la vitesse de propagation du son dans l'air ne dépend pas du volume : elle reste $340$ m/s. L'écho reviendra donc <strong>au même moment</strong> (au bout de 2 s).
<br><br>
<strong>4.</strong> Non. Dans l'espace il n'y a pas d'air, donc <strong>aucun milieu matériel</strong> pour transporter le son. Le coéquipier n'entend rien sans radio : les ondes radio, elles, se propagent dans le vide.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tg-chimie',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Estérification et déplacement d\'équilibre',
            contenu: `<strong>Énoncé.</strong> On réalise la synthèse de l'éthanoate d'éthyle par estérification :
$$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\;\\rightleftharpoons\\; \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}.$$
On introduit initialement $n_0 = 1{,}0$ mol d'acide éthanoïque et $1{,}0$ mol d'éthanol. À l'équilibre, on dose et on trouve qu'il reste $0{,}33$ mol d'acide. La constante d'équilibre de cette réaction vaut $K = 4{,}0$ à 25 °C.
<br><br>
<strong>1.</strong> Dresser le tableau d'avancement et déterminer l'avancement à l'équilibre $x_{eq}$. En déduire le rendement de la synthèse.
<br><strong>2.</strong> Vérifier la valeur de $K$ à partir des quantités à l'équilibre.
<br><strong>3.</strong> On souhaite augmenter le rendement. On ajoute un large excès d'éthanol. Dans quel sens l'équilibre est-il déplacé ? Justifier à l'aide du principe de Le Chatelier.
<br><strong>4.</strong> L'acide éthanoïque est un acide faible ($\\text{p}K_a = 4{,}8$). On dispose d'une solution d'acide éthanoïque de concentration $C = 1{,}0 \\times 10^{-2}$ mol/L et de pH = 3,4. Calculer le rapport $\\frac{[\\text{A}^-]}{[\\text{AH}]}$ et conclure sur la forme prédominante.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Tableau d'avancement (en mol) :
<br>· État initial : acide $1{,}0$ ; alcool $1{,}0$ ; ester $0$ ; eau $0$.
<br>· État équilibre : acide $1{,}0 - x_{eq}$ ; alcool $1{,}0 - x_{eq}$ ; ester $x_{eq}$ ; eau $x_{eq}$.
<br>Il reste $0{,}33$ mol d'acide : $1{,}0 - x_{eq} = 0{,}33$ donc $x_{eq} = 0{,}67$ mol.
<br>L'avancement maximal serait $x_{max} = 1{,}0$ mol (réactifs en proportions stœchiométriques). Le rendement est :
$$\\rho = \\frac{x_{eq}}{x_{max}} = \\frac{0{,}67}{1{,}0} = 0{,}67 = 67\\,\\%.$$
<br><strong>2.</strong> À l'équilibre toutes les espèces sont dans le même volume, $K$ s'exprime avec les quantités :
$$K = \\frac{n_{ester}\\, n_{eau}}{n_{acide}\\, n_{alcool}} = \\frac{0{,}67 \\times 0{,}67}{0{,}33 \\times 0{,}33} = \\frac{0{,}449}{0{,}109} \\approx 4{,}1.$$
On retrouve bien $K \\approx 4{,}0$.
<br><br>
<strong>3.</strong> Ajouter de l'éthanol augmente la quantité d'un réactif. D'après le principe de Le Chatelier, le système évolue de façon à <strong>consommer</strong> cette espèce ajoutée : l'équilibre est déplacé dans le <strong>sens direct</strong> (formation de l'ester). On consomme davantage d'acide : le rendement en ester augmente.
<br><br>
<strong>4.</strong> On utilise la relation : $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{AH}]}$, d'où :
$$\\log\\frac{[\\text{A}^-]}{[\\text{AH}]} = \\text{pH} - \\text{p}K_a = 3{,}4 - 4{,}8 = -1{,}4,$$
$$\\frac{[\\text{A}^-]}{[\\text{AH}]} = 10^{-1{,}4} \\approx 0{,}04.$$
Le rapport est très inférieur à 1 : la forme acide $\\text{AH}$ (acide éthanoïque) <strong>prédomine</strong>, ce qui est cohérent car pH $<$ p$K_a$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tg-elec',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Charge d\'un condensateur et oscillations LC',
            contenu: `<strong>Énoncé.</strong> Un condensateur de capacité $C = 10\\ \\mu\\text{F}$, initialement déchargé, est branché à $t=0$ à un générateur de tension continue $E = 6{,}0$ V à travers un conducteur ohmique de résistance $R = 2{,}0\\ \\text{k}\\Omega$.
<br><br>
<strong>1.</strong> Établir l'équation différentielle vérifiée par la tension $u_C(t)$ aux bornes du condensateur. On rappelle $i = C\\,\\frac{du_C}{dt}$.
<br><strong>2.</strong> Vérifier que $u_C(t) = E\\,(1 - e^{-t/\\tau})$ est solution, en précisant l'expression de la constante de temps $\\tau$. Calculer sa valeur.
<br><strong>3.</strong> Au bout de combien de temps le condensateur est-il chargé à 99 % de $E$ ? Quelle énergie est alors stockée ?
<br><strong>4.</strong> On débranche le générateur et on relie le condensateur chargé à une bobine idéale d'inductance $L = 0{,}10$ H. Donner la nature du régime obtenu et calculer la période propre $T_0$ des oscillations.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Loi des mailles : $E = u_R + u_C = R\\,i + u_C$. Or $i = C\\,\\frac{du_C}{dt}$, donc :
$$E = RC\\,\\frac{du_C}{dt} + u_C \\quad\\Longrightarrow\\quad \\frac{du_C}{dt} + \\frac{1}{RC}\\,u_C = \\frac{E}{RC}.$$
<br><strong>2.</strong> Avec $u_C = E(1 - e^{-t/\\tau})$, on a $\\frac{du_C}{dt} = \\frac{E}{\\tau}e^{-t/\\tau}$. En remplaçant :
$$\\frac{E}{\\tau}e^{-t/\\tau} + \\frac{1}{RC}E(1-e^{-t/\\tau}) = \\frac{E}{RC}.$$
L'égalité est vérifiée pour tout $t$ si $\\tau = RC$. Donc :
$$\\tau = RC = 2{,}0\\times10^{3} \\times 10\\times10^{-6} = 2{,}0\\times10^{-2}\\ \\text{s} = 20\\ \\text{ms}.$$
À $t=0$ : $u_C = 0$ (condensateur déchargé) ✓ ; quand $t\\to\\infty$ : $u_C \\to E$ ✓.
<br><br>
<strong>3.</strong> On cherche $t$ tel que $u_C = 0{,}99\\,E$ : $1 - e^{-t/\\tau} = 0{,}99$ donc $e^{-t/\\tau} = 0{,}01$,
$$t = -\\tau\\ln(0{,}01) = \\tau\\ln(100) \\approx 4{,}6\\,\\tau \\approx 4{,}6 \\times 20 \\approx 92\\ \\text{ms}.$$
(On retient $t \\approx 5\\tau$ pour la charge « complète ».) Énergie stockée :
$$E_C = \\tfrac{1}{2}C\\,u_C^2 \\approx \\tfrac{1}{2}\\times 10\\times10^{-6}\\times (6{,}0)^2 = 1{,}8\\times10^{-4}\\ \\text{J} = 0{,}18\\ \\text{mJ}.$$
<br><strong>4.</strong> Le circuit $LC$ idéal (sans résistance) donne des <strong>oscillations libres non amorties</strong> (régime sinusoïdal). La période propre est :
$$T_0 = 2\\pi\\sqrt{LC} = 2\\pi\\sqrt{0{,}10 \\times 10\\times10^{-6}} = 2\\pi\\sqrt{1{,}0\\times10^{-6}} = 2\\pi\\times10^{-3} \\approx 6{,}3\\ \\text{ms}.$$
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tg-meca',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Pendule, énergie et collision',
            contenu: `<strong>Énoncé.</strong> Une bille de masse $m = 0{,}20$ kg est suspendue à un fil de longueur $\\ell = 0{,}80$ m. On l'écarte d'un angle $\\theta_0 = 60°$ par rapport à la verticale puis on la lâche sans vitesse. On prend $g = 9{,}8$ m/s² et on néglige les frottements.
<br><br>
<strong>1.</strong> Exprimer puis calculer la hauteur $h$ dont la bille descend entre sa position de départ et le point le plus bas de la trajectoire.
<br><strong>2.</strong> Par un bilan d'énergie mécanique, déterminer la vitesse $v$ de la bille au point le plus bas.
<br><strong>3.</strong> Au point le plus bas, la bille percute de plein fouet une seconde bille immobile de masse $m' = 0{,}30$ kg. Après le choc, la première bille s'immobilise. En utilisant la conservation de la quantité de mouvement, calculer la vitesse $v'$ acquise par la seconde bille.
<br><strong>4.</strong> Ce choc est-il élastique ? Justifier par un calcul d'énergie cinétique.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Au départ, la bille est à la hauteur $\\ell\\cos\\theta_0$ <em>en dessous</em> du point de suspension ; au point bas, elle est à $\\ell$ en dessous. La descente vaut :
$$h = \\ell - \\ell\\cos\\theta_0 = \\ell(1 - \\cos\\theta_0) = 0{,}80\\,(1 - \\cos 60°) = 0{,}80\\,(1 - 0{,}50) = 0{,}40\\ \\text{m}.$$
<br><strong>2.</strong> Sans frottement, l'énergie mécanique se conserve. L'énergie potentielle perdue est convertie en énergie cinétique :
$$\\tfrac{1}{2}mv^2 = mgh \\quad\\Longrightarrow\\quad v = \\sqrt{2gh} = \\sqrt{2\\times 9{,}8 \\times 0{,}40} = \\sqrt{7{,}84} \\approx 2{,}8\\ \\text{m/s}.$$
<br><strong>3.</strong> Système isolé pendant le choc : la quantité de mouvement se conserve. Avant : $p = m\\,v$. Après : la première bille est immobile, la seconde a la vitesse $v'$ :
$$m\\,v = m'\\,v' \\quad\\Longrightarrow\\quad v' = \\frac{m\\,v}{m'} = \\frac{0{,}20 \\times 2{,}8}{0{,}30} \\approx 1{,}9\\ \\text{m/s}.$$
<br><strong>4.</strong> Comparons les énergies cinétiques avant et après.
<br>Avant : $E_{c,i} = \\tfrac{1}{2}m\\,v^2 = \\tfrac{1}{2}\\times0{,}20\\times(2{,}8)^2 \\approx 0{,}78\\ \\text{J}$.
<br>Après : $E_{c,f} = \\tfrac{1}{2}m'\\,v'^2 = \\tfrac{1}{2}\\times0{,}30\\times(1{,}9)^2 \\approx 0{,}54\\ \\text{J}$.
<br>Comme $E_{c,f} < E_{c,i}$, une partie de l'énergie cinétique a été dissipée : le choc est <strong>inélastique</strong> (non élastique).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tg-optiq',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Réfraction, lentille et image',
            contenu: `<strong>Énoncé.</strong> <em>Partie A.</em> Un rayon lumineux passe de l'air ($n_1 = 1{,}00$) vers l'eau ($n_2 = 1{,}33$) avec un angle d'incidence $i_1 = 40°$.
<br><em>Partie B.</em> Une lentille mince convergente a une distance focale $f' = 5{,}0$ cm. Un objet $AB$ de hauteur $1{,}0$ cm est placé perpendiculairement à l'axe optique, à $15$ cm devant la lentille ($\\overline{OA} = -15$ cm).
<br><br>
<strong>1.</strong> Énoncer la loi de Snell-Descartes pour la réfraction et calculer l'angle de réfraction $i_2$ dans l'eau.
<br><strong>2.</strong> Pour la lentille, utiliser la relation de conjugaison $\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'}$ pour déterminer la position $\\overline{OA'}$ de l'image.
<br><strong>3.</strong> Calculer le grandissement $\\gamma$. L'image est-elle droite ou renversée, réelle ou virtuelle, agrandie ou réduite ? Quelle est la taille de l'image ?
<br><strong>4.</strong> Cette lentille pourrait-elle servir d'objectif d'appareil photo pour cet objet ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Loi de Snell-Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$. D'où :
$$\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2} = \\frac{1{,}00 \\times \\sin 40°}{1{,}33} = \\frac{0{,}643}{1{,}33} \\approx 0{,}483,$$
$$i_2 = \\arcsin(0{,}483) \\approx 29°.$$
Le rayon se rapproche de la normale en passant dans le milieu plus réfringent. ✓
<br><br>
<strong>2.</strong> Relation de conjugaison :
$$\\frac{1}{\\overline{OA'}} = \\frac{1}{f'} + \\frac{1}{\\overline{OA}} = \\frac{1}{5{,}0} + \\frac{1}{-15} = \\frac{3 - 1}{15} = \\frac{2}{15}\\ \\text{cm}^{-1}.$$
$$\\overline{OA'} = \\frac{15}{2} = 7{,}5\\ \\text{cm}.$$
L'image se forme à $7{,}5$ cm <em>derrière</em> la lentille.
<br><br>
<strong>3.</strong> Grandissement :
$$\\gamma = \\frac{\\overline{OA'}}{\\overline{OA}} = \\frac{7{,}5}{-15} = -0{,}50.$$
$\\gamma < 0$ : image <strong>renversée</strong> ; $\\overline{OA'} > 0$ : image <strong>réelle</strong> (du côté opposé à l'objet, observable sur un écran) ; $|\\gamma| < 1$ : image <strong>réduite</strong>. Taille de l'image : $A'B' = |\\gamma|\\times AB = 0{,}50 \\times 1{,}0 = 0{,}50$ cm.
<br><br>
<strong>4.</strong> Oui : l'objet est au-delà du foyer objet (à $15$ cm $> f' = 5$ cm), la lentille en donne une image réelle, renversée et réduite que l'on peut projeter sur un capteur — c'est exactement le principe de l'objectif photographique.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-acid',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Acide faible, dilution et solution tampon',
            contenu: `<strong>Énoncé.</strong> On étudie l'acide méthanoïque (acide formique) HCOOH, de p$K_a = 3{,}8$ à 25 °C. On dispose d'une solution $S$ d'acide méthanoïque de concentration $C = 1{,}0\\times10^{-2}$ mol/L, de pH mesuré égal à $2{,}9$. On donne $K_e = 1{,}0\\times10^{-14}$.
<br><br>
<strong>1.</strong> Écrire l'équation de la réaction de l'acide méthanoïque avec l'eau et l'expression de sa constante d'acidité $K_a$. Calculer $[\\text{H}_3\\text{O}^+]$ et $[\\text{OH}^-]$ dans la solution $S$.
<br><strong>2.</strong> Déterminer le taux d'avancement final $\\tau$ de la réaction. L'acide méthanoïque est-il faible ? Justifier.
<br><strong>3.</strong> Retrouver la valeur du p$K_a$ à partir de la relation pH $= $ p$K_a + \\log\\frac{[\\text{A}^-]}{[\\text{AH}]}$ et des concentrations à l'équilibre.
<br><strong>4.</strong> On veut préparer une solution tampon de pH $= 3{,}8$. Quel rapport de concentrations entre HCOOH et HCOO$^-$ faut-il réaliser ? Citer une propriété d'une solution tampon.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Réaction avec l'eau :
$$\\text{HCOOH} + \\text{H}_2\\text{O} \\;\\rightleftharpoons\\; \\text{HCOO}^- + \\text{H}_3\\text{O}^+, \\qquad K_a = \\frac{[\\text{HCOO}^-][\\text{H}_3\\text{O}^+]}{[\\text{HCOOH}]}.$$
$[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}} = 10^{-2{,}9} \\approx 1{,}3\\times10^{-3}$ mol/L.
<br>$[\\text{OH}^-] = \\dfrac{K_e}{[\\text{H}_3\\text{O}^+]} = \\dfrac{1{,}0\\times10^{-14}}{1{,}3\\times10^{-3}} \\approx 7{,}9\\times10^{-12}$ mol/L (négligeable).
<br><br>
<strong>2.</strong> L'avancement maximal correspondrait à une dissociation totale : $[\\text{H}_3\\text{O}^+]_{max} = C = 1{,}0\\times10^{-2}$ mol/L. Le taux final :
$$\\tau = \\frac{[\\text{H}_3\\text{O}^+]_{eq}}{C} = \\frac{1{,}3\\times10^{-3}}{1{,}0\\times10^{-2}} \\approx 0{,}13 = 13\\,\\%.$$
$\\tau \\ll 1$ : la réaction est très limitée, l'acide est donc <strong>faible</strong> (il ne se dissocie que partiellement).
<br><br>
<strong>3.</strong> À l'équilibre : $[\\text{HCOO}^-] = [\\text{H}_3\\text{O}^+] = 1{,}3\\times10^{-3}$ mol/L (l'autoprotolyse de l'eau est négligée). $[\\text{HCOOH}] = C - [\\text{HCOO}^-] = 1{,}0\\times10^{-2} - 1{,}3\\times10^{-3} = 8{,}7\\times10^{-3}$ mol/L. Donc :
$$\\text{p}K_a = \\text{pH} - \\log\\frac{[\\text{HCOO}^-]}{[\\text{HCOOH}]} = 2{,}9 - \\log\\frac{1{,}3\\times10^{-3}}{8{,}7\\times10^{-3}} = 2{,}9 - \\log(0{,}15) \\approx 2{,}9 + 0{,}83 \\approx 3{,}7.$$
On retrouve bien p$K_a \\approx 3{,}8$. ✓
<br><br>
<strong>4.</strong> Pour pH $=$ p$K_a$, la relation donne $\\log\\frac{[\\text{A}^-]}{[\\text{AH}]} = 0$, soit :
$$\\frac{[\\text{HCOO}^-]}{[\\text{HCOOH}]} = 1.$$
Il faut donc des concentrations <strong>égales</strong> en acide et en sa base conjuguée. Propriété d'un tampon : son pH varie très peu lors de l'ajout modéré d'acide, de base, ou par dilution.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-tpc-champs',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Projectile pesant et déviation électrique',
            contenu: `<strong>Énoncé.</strong> <em>Partie A — champ de pesanteur.</em> Un ballon est lancé depuis le sol avec une vitesse initiale $v_0 = 20$ m/s faisant un angle $\\alpha = 30°$ avec l'horizontale. On prend $g = 9{,}8$ m/s², on néglige les frottements, et on place l'origine au point de lancement.
<br><em>Partie B — champ électrique.</em> Un électron ($q = -e$, $m_e = 9{,}1\\times10^{-31}$ kg, $e = 1{,}6\\times10^{-19}$ C) entre avec une vitesse horizontale $v = 1{,}0\\times10^{7}$ m/s entre deux plaques horizontales distantes de $d = 4{,}0$ cm, soumises à une tension $U = 200$ V, créant un champ uniforme $E = U/d$.
<br><br>
<strong>1.</strong> Établir les équations horaires $x(t)$ et $y(t)$ du ballon. En déduire l'équation de la trajectoire $y(x)$.
<br><strong>2.</strong> Calculer la portée du ballon (distance horizontale au point de chute) et la hauteur maximale atteinte.
<br><strong>3.</strong> Pour l'électron, déterminer la valeur du champ $E$ puis l'accélération subie. Comparer au poids et justifier qu'on le néglige.
<br><strong>4.</strong> La longueur des plaques est $L = 5{,}0$ cm. Déterminer la déviation verticale de l'électron à la sortie des plaques.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Système soumis à son seul poids : $\\vec{a} = \\vec{g}$, soit $a_x = 0$, $a_y = -g$. Par intégration avec $v_{0x} = v_0\\cos\\alpha$ et $v_{0y} = v_0\\sin\\alpha$ :
$$x(t) = (v_0\\cos\\alpha)\\,t, \\qquad y(t) = -\\tfrac{1}{2}g\\,t^2 + (v_0\\sin\\alpha)\\,t.$$
En tirant $t = \\dfrac{x}{v_0\\cos\\alpha}$ et en remplaçant :
$$y(x) = -\\frac{g}{2v_0^2\\cos^2\\alpha}\\,x^2 + (\\tan\\alpha)\\,x.$$
<br><strong>2.</strong> Portée : $y = 0$ pour $x \\ne 0$ donne $x_P = \\dfrac{v_0^2\\sin(2\\alpha)}{g} = \\dfrac{20^2\\times\\sin 60°}{9{,}8} = \\dfrac{400\\times0{,}866}{9{,}8} \\approx 35\\ \\text{m}.$
<br>Hauteur max (au sommet $v_y = 0$, à $t = \\frac{v_0\\sin\\alpha}{g}$) :
$$y_{max} = \\frac{v_0^2\\sin^2\\alpha}{2g} = \\frac{20^2\\times(0{,}5)^2}{2\\times9{,}8} = \\frac{100}{19{,}6} \\approx 5{,}1\\ \\text{m}.$$
<br><strong>3.</strong> Champ : $E = \\dfrac{U}{d} = \\dfrac{200}{4{,}0\\times10^{-2}} = 5{,}0\\times10^{3}$ V/m. Accélération (force électrique $F = eE$) :
$$a = \\frac{eE}{m_e} = \\frac{1{,}6\\times10^{-19}\\times5{,}0\\times10^{3}}{9{,}1\\times10^{-31}} \\approx 8{,}8\\times10^{14}\\ \\text{m/s}^2.$$
Le poids donne $g \\approx 9{,}8$ m/s², soit un rapport $\\sim 10^{14}$ : le poids est totalement <strong>négligeable</strong> devant la force électrique.
<br><br>
<strong>4.</strong> Mouvement analogue à un projectile : selon l'axe horizontal $x = v\\,t$ (vitesse constante), selon la verticale $y = \\tfrac{1}{2}a\\,t^2$. Temps de traversée : $t_s = \\dfrac{L}{v} = \\dfrac{5{,}0\\times10^{-2}}{1{,}0\\times10^{7}} = 5{,}0\\times10^{-9}$ s. Déviation :
$$y_s = \\tfrac{1}{2}a\\,t_s^2 = \\tfrac{1}{2}\\times8{,}8\\times10^{14}\\times(5{,}0\\times10^{-9})^2 \\approx 1{,}1\\times10^{-2}\\ \\text{m} \\approx 1{,}1\\ \\text{cm}.$$
Cette déviation ($1{,}1$ cm) reste inférieure à $d/2 = 2{,}0$ cm : l'électron sort bien des plaques sans les heurter.
</details>`
          }
        ]
      }
    ]
  }
]
