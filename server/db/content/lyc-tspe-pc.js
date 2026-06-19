// Terminale — Spécialité Physique-Chimie
// Programme officiel MEN (réforme 2019, applicable rentrée 2020)
// Filière : term-spe-pc · matière : phch

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. ÉQUILIBRES CHIMIQUES — quotient de réaction & constante (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-equilibre', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Modélisation et état d\'équilibre', ordre: 1, enrich: false,
  sections: [
    {
      titre: 'Avancement et tableau d\'avancement',
      cartes: [
        { type:'def', label:'DEF', titre:'Avancement de réaction',
          contenu:`Pour une transformation $a\\,\\mathrm{A} + b\\,\\mathrm{B} \\rightarrow c\\,\\mathrm{C} + d\\,\\mathrm{D}$, l'<strong>avancement</strong> $x$ (en mol) mesure le degré d'évolution.<br>À l'instant $t$ : $n_i(t) = n_i(0) \\pm \\nu_i\\, x$ (signe $-$ pour les réactifs, $+$ pour les produits).<br><strong>Avancement maximal</strong> $x_{\\max}$ : valeur de $x$ qui annule la quantité du <strong>réactif limitant</strong>.` },
        { type:'meth', label:'METH', titre:'Construire un tableau d\'avancement',
          contenu:`<strong>1.</strong> Écrire et équilibrer l'équation.<br><strong>2.</strong> Ligne « état initial » : reporter les $n_i(0)$.<br><strong>3.</strong> Ligne « état en cours » : $n_i(0) - \\nu_i x$ (réactifs), $n_i(0) + \\nu_i x$ (produits).<br><strong>4.</strong> Déterminer $x_{\\max}$ : pour chaque réactif résoudre $n_i(0) - \\nu_i x = 0$, retenir la <strong>plus petite</strong> valeur.<br><strong>5.</strong> Le réactif qui s'annule le premier est le réactif limitant.` },
        { type:'def', label:'DEF', titre:'Taux d\'avancement final',
          contenu:`Le <strong>taux d'avancement final</strong> $\\tau$ compare l'avancement réellement atteint à l'avancement maximal :<br>$$\\tau = \\frac{x_f}{x_{\\max}}$$<br>$\\tau = 1$ : transformation <strong>totale</strong> (le réactif limitant est entièrement consommé).<br>$0 < \\tau < 1$ : transformation <strong>limitée</strong> par un équilibre chimique.` },
        { type:'ex', label:'EX', titre:'Exemple : taux d\'avancement d\'un acide faible',
          contenu:`On dissout $n_0 = 1{,}0\\cdot 10^{-2}$ mol d'acide éthanoïque dans $V = 1{,}0$ L. À l'équilibre $[\\mathrm{H_3O^+}] = 4{,}2\\cdot 10^{-4}$ mol/L.<br>$x_f = [\\mathrm{H_3O^+}]\\times V = 4{,}2\\cdot 10^{-4}$ mol et $x_{\\max} = n_0 = 1{,}0\\cdot 10^{-2}$ mol.<br>$$\\tau = \\frac{4{,}2\\cdot 10^{-4}}{1{,}0\\cdot 10^{-2}} = 4{,}2\\cdot 10^{-2} = 4{,}2\\,\\%$$<br>Transformation très limitée : l'acide éthanoïque est un acide faible.` },
        { type:'def', label:'DEF', titre:'Transformation totale ou limitée',
          contenu:`Une transformation est <strong>totale</strong> si le réactif limitant est entièrement consommé ($\\tau = 1$, état final = état maximal).<br>Elle est <strong>limitée</strong> si elle s'arrête sur un <strong>état d'équilibre</strong> où réactifs et produits coexistent ($\\tau < 1$). Au niveau microscopique, à l'équilibre, les réactions directe et inverse se compensent : c'est un <strong>équilibre dynamique</strong>.` },
      ]
    },
    {
      titre: 'Quotient de réaction et constante d\'équilibre',
      cartes: [
        { type:'def', label:'DEF', titre:'Quotient de réaction $Q_r$',
          contenu:`Pour $a\\,\\mathrm{A}_{(aq)} + b\\,\\mathrm{B}_{(aq)} = c\\,\\mathrm{C}_{(aq)} + d\\,\\mathrm{D}_{(aq)}$ :<br>$$Q_r = \\frac{(\\,[\\mathrm{C}]/c^\\circ)^c\\,(\\,[\\mathrm{D}]/c^\\circ)^d}{(\\,[\\mathrm{A}]/c^\\circ)^a\\,(\\,[\\mathrm{B}]/c^\\circ)^b}$$<br>avec $c^\\circ = 1$ mol/L (concentration standard). $Q_r$ est <strong>sans dimension</strong>.<br><strong>Conventions</strong> : le solvant (eau) et les solides n'apparaissent pas (activité $= 1$).` },
        { type:'th', label:'THM', titre:'Critère d\'évolution spontanée',
          contenu:`On compare $Q_{r,i}$ (état initial) à la constante d'équilibre $K$ :<br><ul><li>$Q_{r,i} < K$ : évolution dans le <strong>sens direct</strong> ($\\rightarrow$), $Q_r$ augmente.</li><li>$Q_{r,i} > K$ : évolution dans le <strong>sens indirect</strong> ($\\leftarrow$), $Q_r$ diminue.</li><li>$Q_{r,i} = K$ : système déjà à l'équilibre, pas d'évolution.</li></ul>À l'équilibre, $Q_{r,\\text{éq}} = K$.` },
        { type:'def', label:'DEF', titre:'Constante d\'équilibre $K$',
          contenu:`La <strong>constante d'équilibre</strong> $K(T)$ est la valeur du quotient de réaction à l'équilibre :<br>$$K = Q_{r,\\text{éq}}$$<br>Elle ne dépend que de la <strong>température</strong> (pas des concentrations initiales).<br>$K$ grand $\\Rightarrow$ équilibre déplacé vers les produits (réaction quasi-totale).<br>$K$ petit $\\Rightarrow$ équilibre déplacé vers les réactifs.` },
        { type:'meth', label:'METH', titre:'Prévoir le sens d\'évolution',
          contenu:`<strong>1.</strong> Calculer les concentrations initiales (avant réaction).<br><strong>2.</strong> Calculer $Q_{r,i}$ avec l'expression littérale.<br><strong>3.</strong> Comparer à $K$ (donné).<br><strong>4.</strong> Conclure sur le sens.<br><em>Remarque</em> : pour un système initialement composé uniquement de réactifs, $Q_{r,i}=0 < K$, donc évolution toujours dans le sens direct.` },
        { type:'ex', label:'EX', titre:'Exemple : sens d\'évolution d\'un mélange',
          contenu:`Réaction $\\mathrm{Ag^+} + \\mathrm{Fe^{2+}} = \\mathrm{Ag(s)} + \\mathrm{Fe^{3+}}$, $K = 3{,}2$. État initial : $[\\mathrm{Ag^+}]=[\\mathrm{Fe^{2+}}]=[\\mathrm{Fe^{3+}}]=0{,}10$ mol/L.<br>$Q_{r,i} = \\dfrac{[\\mathrm{Fe^{3+}}]}{[\\mathrm{Ag^+}][\\mathrm{Fe^{2+}}]} = \\dfrac{0{,}10}{0{,}10\\times 0{,}10} = 10$ (le solide $\\mathrm{Ag}$ n'apparaît pas).<br>$Q_{r,i} = 10 > K = 3{,}2$ : évolution dans le <strong>sens indirect</strong>.` },
        { type:'prop', label:'PROP', titre:'Influence de la température sur $K$',
          contenu:`$K$ ne dépend que de la température.<br>Pour une réaction <strong>endothermique</strong>, $K$ <strong>augmente</strong> avec $T$ (l'équilibre se déplace vers les produits quand on chauffe).<br>Pour une réaction <strong>exothermique</strong>, $K$ <strong>diminue</strong> avec $T$.<br>Modifier les concentrations ne change pas $K$ mais déplace l'équilibre (le système réévolue jusqu'à $Q_r = K$).` },
      ]
    },
    {
      titre: 'Solubilité et précipitation',
      cartes: [
        { type:'def', label:'DEF', titre:'Produit de solubilité $K_s$',
          contenu:`Pour un solide ionique peu soluble $\\mathrm{A}_x\\mathrm{B}_y(s) = x\\,\\mathrm{A}^{p+} + y\\,\\mathrm{B}^{q-}$ :<br>$$K_s = [\\mathrm{A}^{p+}]^x\\,[\\mathrm{B}^{q-}]^y \\quad (\\text{à l'équilibre})$$<br>$\\mathrm{p}K_s = -\\log K_s$. Plus $K_s$ est petit, moins le solide est soluble.<br>La <strong>solubilité</strong> $s$ (mol/L) est la quantité maximale dissoute par litre de solution saturée.` },
        { type:'meth', label:'METH', titre:'Prévoir une précipitation',
          contenu:`On compare le quotient de réaction $Q_r$ au produit de solubilité $K_s$ :<br><ul><li>$Q_r < K_s$ : solution <strong>non saturée</strong>, pas de précipité.</li><li>$Q_r = K_s$ : solution <strong>saturée</strong> (limite d'apparition).</li><li>$Q_r > K_s$ : <strong>précipitation</strong> jusqu'à revenir à $Q_r = K_s$.</li></ul>` },
        { type:'ex', label:'EX', titre:'Exemple : solubilité de AgCl',
          contenu:`$\\mathrm{AgCl(s)} = \\mathrm{Ag^+} + \\mathrm{Cl^-}$, $K_s = 1{,}8\\cdot 10^{-10}$.<br>En solution saturée : $[\\mathrm{Ag^+}] = [\\mathrm{Cl^-}] = s$, donc $K_s = s^2$.<br>$$s = \\sqrt{K_s} = \\sqrt{1{,}8\\cdot 10^{-10}} = 1{,}3\\cdot 10^{-5}\\ \\text{mol/L}$$` },
        { type:'prop', label:'PROP', titre:'Effet d\'ion commun',
          contenu:`Ajouter un ion déjà présent dans l'équilibre de dissolution <strong>diminue la solubilité</strong>.<br>Exemple : ajouter des ions $\\mathrm{Cl^-}$ (via NaCl) à une solution saturée de $\\mathrm{AgCl}$ déplace l'équilibre vers le solide $\\Rightarrow$ $[\\mathrm{Ag^+}]$ diminue, davantage de $\\mathrm{AgCl}$ précipite.` },
      ]
    },
    {
      titre: 'Méthodes de résolution',
      cartes: [
        { type:'meth', label:'METH', titre:'Déterminer l\'état final d\'un système',
          contenu:`<strong>1.</strong> Écrire l'équation, dresser le tableau d'avancement.<br><strong>2.</strong> Exprimer $Q_{r,\\text{éq}}$ en fonction de l'avancement $x_f$.<br><strong>3.</strong> Poser $Q_{r,\\text{éq}} = K$ et résoudre en $x_f$.<br><strong>4.</strong> En déduire toutes les concentrations finales.<br><strong>5.</strong> Vérifier la cohérence ($0 \\le x_f \\le x_{\\max}$).` },
        { type:'meth', label:'METH', titre:'Calculer un taux d\'avancement final',
          contenu:`$\\tau = \\dfrac{x_f}{x_{\\max}}$ avec $x_{\\max}$ supposant la réaction totale.<br>Lien avec $K$ : si $K$ est grand devant les conditions initiales, $\\tau \\to 1$ ; si $K$ est petit, $\\tau \\to 0$.<br>Un même équilibre peut avoir des $\\tau$ différents selon la dilution (le taux dépend des concentrations initiales, pas $K$).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : équilibre estérification',
          contenu:`$\\mathrm{acide} + \\mathrm{alcool} = \\mathrm{ester} + \\mathrm{eau}$, $K = 4{,}0$. Initialement $1$ mol d'acide et $1$ mol d'alcool, volume $V$.<br>Tableau : ester $= x_f$, eau $= x_f$, acide $=$ alcool $= 1 - x_f$.<br>$K = \\dfrac{x_f^2}{(1-x_f)^2} = 4 \\Rightarrow \\dfrac{x_f}{1-x_f} = 2 \\Rightarrow x_f = \\dfrac{2}{3}$ mol.<br>$\\tau = \\dfrac{2/3}{1} \\approx 67\\,\\%$ : équilibre limité (caractéristique de l'estérification).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. ACIDO-BASIQUE (ENRICHI)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-acid', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Équilibres acido-basiques', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'pH et autoprotolyse de l\'eau',
      cartes: [
        { type:'def', label:'DEF', titre:'Acide, base et pH',
          contenu:`<strong>Acide</strong> de Brønsted : espèce capable de <strong>céder</strong> un proton $\\mathrm{H^+}$.<br><strong>Base</strong> de Brønsted : espèce capable de <strong>capter</strong> un proton.<br>$$\\mathrm{pH} = -\\log\\!\\left(\\frac{[\\mathrm{H_3O^+}]}{c^\\circ}\\right) \\iff [\\mathrm{H_3O^+}] = c^\\circ\\,10^{-\\mathrm{pH}}$$<br>avec $c^\\circ = 1$ mol/L. La mesure du pH se fait au pH-mètre (sonde de verre) préalablement étalonné.` },
        { type:'def', label:'DEF', titre:'Couple acide/base',
          contenu:`Un acide $\\mathrm{AH}$ et sa base conjuguée $\\mathrm{A^-}$ forment un <strong>couple</strong> $\\mathrm{AH}/\\mathrm{A^-}$ lié par la demi-équation :<br>$$\\mathrm{AH} = \\mathrm{A^-} + \\mathrm{H^+}$$<br>Exemples : $\\mathrm{CH_3COOH}/\\mathrm{CH_3COO^-}$, $\\mathrm{NH_4^+}/\\mathrm{NH_3}$, $\\mathrm{H_2O}/\\mathrm{HO^-}$, $\\mathrm{H_3O^+}/\\mathrm{H_2O}$.<br>L'eau est une espèce <strong>amphotère</strong> (ampholyte) : à la fois acide et base.` },
        { type:'form', label:'FORM', titre:'Produit ionique de l\'eau $K_e$',
          contenu:`Autoprotolyse : $2\\,\\mathrm{H_2O} = \\mathrm{H_3O^+} + \\mathrm{HO^-}$.<br>$$K_e = [\\mathrm{H_3O^+}]\\,[\\mathrm{HO^-}] = 1{,}0\\cdot 10^{-14}\\ (\\text{à } 25\\,°\\mathrm{C})$$<br>$\\mathrm{p}K_e = -\\log K_e = 14$ à 25 °C, donc $\\mathrm{pH} + \\mathrm{pOH} = 14$.<br>Eau pure : $[\\mathrm{H_3O^+}] = [\\mathrm{HO^-}] = 10^{-7}$ mol/L $\\Rightarrow \\mathrm{pH} = 7$ (neutre à 25 °C).` },
        { type:'prop', label:'PROP', titre:'Solutions acides, basiques, neutres',
          contenu:`À 25 °C :<br><ul><li><strong>Acide</strong> : $\\mathrm{pH} < 7$, $[\\mathrm{H_3O^+}] > [\\mathrm{HO^-}]$.</li><li><strong>Neutre</strong> : $\\mathrm{pH} = 7$, $[\\mathrm{H_3O^+}] = [\\mathrm{HO^-}]$.</li><li><strong>Basique</strong> : $\\mathrm{pH} > 7$, $[\\mathrm{H_3O^+}] < [\\mathrm{HO^-}]$.</li></ul>Une dilution d'un facteur 10 d'un acide fort augmente le pH d'une unité.` },
      ]
    },
    {
      titre: 'Constante d\'acidité et force',
      cartes: [
        { type:'form', label:'FORM', titre:'Constante d\'acidité $K_a$',
          contenu:`Pour le couple $\\mathrm{AH}/\\mathrm{A^-}$ : $\\mathrm{AH} + \\mathrm{H_2O} = \\mathrm{A^-} + \\mathrm{H_3O^+}$.<br>$$K_a = \\frac{[\\mathrm{A^-}][\\mathrm{H_3O^+}]}{[\\mathrm{AH}]} \\qquad \\mathrm{p}K_a = -\\log K_a$$<br>$K_a$ caractérise la force de l'acide : <strong>plus $K_a$ est grand</strong> (p$K_a$ petit), <strong>plus l'acide est fort</strong>.` },
        { type:'form', label:'FORM', titre:'Relation pH – p$K_a$',
          contenu:`En prenant le logarithme de l'expression de $K_a$ :<br>$$\\mathrm{pH} = \\mathrm{p}K_a + \\log\\frac{[\\mathrm{A^-}]}{[\\mathrm{AH}]}$$<br><strong>Conséquences</strong> :<br>$\\mathrm{pH} = \\mathrm{p}K_a \\iff [\\mathrm{AH}] = [\\mathrm{A^-}]$.<br>$\\mathrm{pH} < \\mathrm{p}K_a \\iff$ forme acide $\\mathrm{AH}$ prédominante.<br>$\\mathrm{pH} > \\mathrm{p}K_a \\iff$ forme basique $\\mathrm{A^-}$ prédominante.` },
        { type:'def', label:'DEF', titre:'Acide fort / acide faible',
          contenu:`<strong>Acide fort</strong> : réagit <strong>totalement</strong> avec l'eau ($\\tau = 1$). Ex : $\\mathrm{HCl}$, $\\mathrm{HNO_3}$. Alors $[\\mathrm{H_3O^+}] = C$ et $\\mathrm{pH} = -\\log C$.<br><strong>Acide faible</strong> : réaction <strong>limitée</strong> ($\\tau < 1$), équilibre régi par $K_a$.<br>Idem pour base forte ($\\mathrm{HO^-}$ : $\\mathrm{pH}=14+\\log C$) et base faible.` },
        { type:'meth', label:'METH', titre:'Tracer un diagramme de prédominance',
          contenu:`Axe horizontal gradué en pH. On place la valeur p$K_a$.<br><strong>pH $<$ p$K_a$</strong> : domaine de l'<strong>acide</strong> $\\mathrm{AH}$.<br><strong>pH $>$ p$K_a$</strong> : domaine de la <strong>base</strong> $\\mathrm{A^-}$.<br>Le diagramme de <em>distribution</em> donne en plus le pourcentage de chaque forme : à pH = p$K_a$, chaque forme représente 50 %.` },
        { type:'ex', label:'EX', titre:'Exemple : pH d\'un acide faible',
          contenu:`Acide éthanoïque, $\\mathrm{p}K_a = 4{,}8$, $C = 1{,}0\\cdot 10^{-2}$ mol/L.<br>Approximation acide faible peu dissocié : $\\mathrm{pH} \\approx \\tfrac{1}{2}(\\mathrm{p}K_a - \\log C) = \\tfrac{1}{2}(4{,}8 + 2) = 3{,}4$.<br>Vérification : $[\\mathrm{H_3O^+}] = 10^{-3{,}4} = 4{,}0\\cdot 10^{-4} \\ll C$, l'approximation est justifiée.` },
      ]
    },
    {
      titre: 'Solutions tampons et indicateurs',
      cartes: [
        { type:'def', label:'DEF', titre:'Solution tampon',
          contenu:`Une <strong>solution tampon</strong> contient un acide faible et sa base conjuguée en quantités voisines. Elle <strong>modère les variations de pH</strong> lors de l'ajout modéré d'acide, de base, ou par dilution.<br>pH optimal quand $[\\mathrm{AH}] = [\\mathrm{A^-}]$, soit $\\mathrm{pH} = \\mathrm{p}K_a$.<br>Importance biologique : le sang est tamponné autour de pH $= 7{,}4$.` },
        { type:'def', label:'DEF', titre:'Indicateur coloré acido-basique',
          contenu:`Couple acide/base $\\mathrm{HInd}/\\mathrm{Ind^-}$ dont les deux formes ont des <strong>couleurs différentes</strong>.<br><strong>Zone de virage</strong> : intervalle de pH (environ $\\mathrm{p}K_a^{\\mathrm{Ind}} \\pm 1$) sur lequel la couleur change.<br>Exemples : BBT (vire 6,0–7,6), phénolphtaléine (incolore $\\to$ rose, 8,2–10), hélianthine (3,1–4,4).` },
        { type:'meth', label:'METH', titre:'Choisir un indicateur pour un titrage',
          contenu:`L'indicateur convient si sa <strong>zone de virage contient le pH à l'équivalence</strong> du titrage.<br>Titrage acide fort / base forte : équivalence à pH $= 7$ $\\Rightarrow$ BBT.<br>Titrage acide faible / base forte : équivalence basique (pH $> 7$) $\\Rightarrow$ phénolphtaléine.<br>Titrage base faible / acide fort : équivalence acide (pH $< 7$) $\\Rightarrow$ hélianthine.` },
        { type:'ex', label:'EX', titre:'Exemple : composition d\'un tampon',
          contenu:`On veut un tampon à $\\mathrm{pH} = 5{,}0$ avec le couple $\\mathrm{CH_3COOH}/\\mathrm{CH_3COO^-}$ ($\\mathrm{p}K_a = 4{,}8$).<br>$\\mathrm{pH} = \\mathrm{p}K_a + \\log\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{AH}]} \\Rightarrow \\log\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{AH}]} = 0{,}2$.<br>$\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{AH}]} = 10^{0{,}2} \\approx 1{,}6$ : il faut environ $1{,}6$ fois plus de base que d'acide.` },
      ]
    },
    {
      titre: 'Réactions acide-base et applications',
      cartes: [
        { type:'def', label:'DEF', titre:'Réaction acide-base',
          contenu:`Une <strong>réaction acide-base</strong> est un transfert de proton entre l'acide d'un couple et la base d'un autre couple :<br>$$\\mathrm{A_1H} + \\mathrm{A_2^-} = \\mathrm{A_1^-} + \\mathrm{A_2H}$$<br>Sa constante : $K = \\dfrac{K_{a1}}{K_{a2}} = 10^{\\,\\mathrm{p}K_{a2} - \\mathrm{p}K_{a1}}$. La réaction est quasi-totale si $K \\gg 1$ (acide nettement plus fort que l'acide conjugué de la base).` },
        { type:'meth', label:'METH', titre:'Prévoir le caractère total d\'une réaction acide-base',
          contenu:`<strong>Règle du gamma</strong> : sur un axe des p$K_a$ croissants, l'acide le plus fort (p$K_a$ le plus petit) réagit avec la base la plus forte (du couple de p$K_a$ le plus grand).<br>Si $\\Delta\\mathrm{p}K_a = \\mathrm{p}K_{a2}-\\mathrm{p}K_{a1} \\gtrsim 4$, $K \\gtrsim 10^4$ : réaction considérée comme <strong>totale</strong>.` },
        { type:'form', label:'FORM', titre:'pH d\'acides et bases forts',
          contenu:`<strong>Acide fort</strong> de concentration $C$ : $[\\mathrm{H_3O^+}] = C$, donc<br>$$\\mathrm{pH} = -\\log C$$<br><strong>Base forte</strong> de concentration $C$ : $[\\mathrm{HO^-}] = C$, donc<br>$$\\mathrm{pH} = 14 + \\log C \\ (\\text{à } 25\\,°\\mathrm{C})$$<br>Valable tant que $C \\gg 10^{-6}$ mol/L (sinon tenir compte de l'autoprotolyse).` },
        { type:'prop', label:'PROP', titre:'Acidité et pluies acides',
          contenu:`Le $\\mathrm{CO_2}$ dissous forme l'acide carbonique ($\\mathrm{H_2CO_3}$), couple $\\mathrm{CO_2,H_2O}/\\mathrm{HCO_3^-}$ : l'eau de pluie « naturelle » a pH $\\approx 5{,}6$.<br>Les oxydes de soufre et d'azote ($\\mathrm{SO_2}$, $\\mathrm{NO_x}$) abaissent encore le pH : <strong>pluies acides</strong> (pH $< 5$), responsables de dégradations (calcaire, écosystèmes).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : constante d\'une réaction acide-base',
          contenu:`Réaction de l'acide éthanoïque ($\\mathrm{p}K_{a1}=4{,}8$) avec l'ammoniac $\\mathrm{NH_3}$ (couple $\\mathrm{NH_4^+}/\\mathrm{NH_3}$, $\\mathrm{p}K_{a2}=9{,}2$) :<br>$\\mathrm{CH_3COOH} + \\mathrm{NH_3} = \\mathrm{CH_3COO^-} + \\mathrm{NH_4^+}$.<br>$K = 10^{\\,\\mathrm{p}K_{a2}-\\mathrm{p}K_{a1}} = 10^{9{,}2-4{,}8} = 10^{4{,}4} \\approx 2{,}5\\cdot10^{4} \\gg 1$ : réaction totale.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. TITRAGES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-titrage', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Titrages et dosages', ordre: 3, enrich: false,
  sections: [
    {
      titre: 'Principe d\'un titrage',
      cartes: [
        { type:'def', label:'DEF', titre:'Titrage et équivalence',
          contenu:`Un <strong>titrage</strong> détermine la concentration inconnue d'une espèce (le <em>titré</em>) par réaction avec une solution de concentration connue (le <em>titrant</em>).<br>La réaction support doit être <strong>totale, rapide et unique</strong>.<br><strong>Équivalence</strong> : instant où réactifs titrant et titré ont été introduits dans les <strong>proportions stœchiométriques</strong>.` },
        { type:'form', label:'FORM', titre:'Relation à l\'équivalence',
          contenu:`Pour la réaction $a\\,\\mathrm{T} + b\\,\\mathrm{X} \\rightarrow \\text{produits}$ (T = titrant, X = titré) :<br>$$\\frac{n_{\\mathrm{T,versé}}}{a} = \\frac{n_{\\mathrm{X,initial}}}{b} \\quad\\text{à l'équivalence}$$<br>Cas usuel $a = b = 1$ : $C_T\\,V_{E} = C_X\\,V_X$, d'où $C_X = \\dfrac{C_T\\,V_E}{V_X}$ ($V_E$ : volume équivalent).` },
        { type:'meth', label:'METH', titre:'Exploiter un titrage',
          contenu:`<strong>1.</strong> Écrire l'équation de la réaction de titrage.<br><strong>2.</strong> Repérer l'équivalence (saut de pH, virage d'indicateur, minimum de conductivité, etc.).<br><strong>3.</strong> Lire le volume équivalent $V_E$.<br><strong>4.</strong> Appliquer la relation d'équivalence et calculer la concentration cherchée.<br><strong>5.</strong> Estimer l'incertitude (verrerie, lecture de $V_E$).` },
        { type:'prop', label:'PROP', titre:'Avant et après l\'équivalence',
          contenu:`<strong>Avant l'équivalence</strong> : le titré est en excès, le réactif limitant est le titrant versé.<br><strong>À l'équivalence</strong> : ni l'un ni l'autre en excès (proportions stœchiométriques).<br><strong>Après l'équivalence</strong> : le titrant est en excès, le titré a été entièrement consommé.<br>Le changement de réactif limitant à l'équivalence explique la rupture observée sur les courbes.` },
      ]
    },
    {
      titre: 'Titrage pH-métrique',
      cartes: [
        { type:'meth', label:'METH', titre:'Repérer l\'équivalence par pH-métrie',
          contenu:`Le suivi pH-métrique donne la courbe $\\mathrm{pH} = f(V)$.<br>L'équivalence correspond au <strong>saut de pH</strong> (variation brutale).<br><strong>Méthode des tangentes</strong> : tracer deux tangentes parallèles de part et d'autre du saut, puis la parallèle équidistante ; son intersection avec la courbe donne $V_E$.<br><strong>Méthode de la dérivée</strong> : $V_E$ est l'abscisse de l'<strong>extremum</strong> de $\\dfrac{d\\,\\mathrm{pH}}{dV}$.` },
        { type:'prop', label:'PROP', titre:'Allure selon la nature des espèces',
          contenu:`<strong>Acide fort + base forte</strong> : un seul saut net, $\\mathrm{pH}_E = 7$.<br><strong>Acide faible + base forte</strong> : $\\mathrm{pH}_E > 7$ ; à la <strong>demi-équivalence</strong> $\\mathrm{pH} = \\mathrm{p}K_a$ (zone tampon).<br><strong>Base faible + acide fort</strong> : $\\mathrm{pH}_E < 7$.<br>La demi-équivalence ($V = V_E/2$) permet de déterminer le p$K_a$ d'un acide faible.` },
        { type:'ex', label:'EX', titre:'Exemple : titrage d\'un acide faible',
          contenu:`On titre $V_A = 20{,}0$ mL d'acide éthanoïque par $\\mathrm{NaOH}$ à $C_B = 0{,}10$ mol/L. Saut observé à $V_E = 15{,}0$ mL.<br>$\\mathrm{CH_3COOH} + \\mathrm{HO^-} \\rightarrow \\mathrm{CH_3COO^-} + \\mathrm{H_2O}$.<br>$C_A = \\dfrac{C_B V_E}{V_A} = \\dfrac{0{,}10\\times 15{,}0}{20{,}0} = 7{,}5\\cdot 10^{-2}$ mol/L.<br>À $V = 7{,}5$ mL ($=V_E/2$), $\\mathrm{pH} = \\mathrm{p}K_a \\approx 4{,}8$.` },
        { type:'meth', label:'METH', titre:'Déterminer un p$K_a$ par la demi-équivalence',
          contenu:`Pour un titrage acide faible / base forte :<br><strong>1.</strong> Repérer $V_E$ (saut de pH).<br><strong>2.</strong> Calculer $V_E/2$ (demi-équivalence) : à ce volume, $[\\mathrm{AH}] = [\\mathrm{A^-}]$.<br><strong>3.</strong> Lire le pH correspondant : $\\mathrm{pH}(V_E/2) = \\mathrm{p}K_a$.<br>Cette zone correspond au plateau « tampon » de la courbe.` },
      ]
    },
    {
      titre: 'Titrage conductimétrique et colorimétrique',
      cartes: [
        { type:'def', label:'DEF', titre:'Conductivité d\'une solution',
          contenu:`La conductivité $\\sigma$ (S/m) d'une solution ionique :<br>$$\\sigma = \\sum_i \\lambda_i\\,[X_i]$$<br>$\\lambda_i$ : conductivité molaire ionique de l'ion $X_i$. Les ions $\\mathrm{H_3O^+}$ et $\\mathrm{HO^-}$ ont les $\\lambda$ les plus élevés.<br>La conductivité dépend de la <strong>nature</strong> et de la <strong>concentration</strong> des ions présents.` },
        { type:'meth', label:'METH', titre:'Repérer l\'équivalence par conductimétrie',
          contenu:`On suit $\\sigma = f(V)$ : la courbe est constituée de <strong>segments de droite</strong> dont la pente change à l'équivalence.<br>L'équivalence est l'abscisse du point de <strong>rupture de pente</strong> (intersection des deux droites prolongées).<br><em>Précaution</em> : diluer pour que la variation de volume soit négligeable, sinon corriger $\\sigma$ par le facteur de dilution.` },
        { type:'ex', label:'EX', titre:'Exemple : titrage de HCl par NaOH (conductimétrie)',
          contenu:`Avant équivalence : disparition de $\\mathrm{H_3O^+}$ (très conducteur) remplacés par $\\mathrm{Na^+}$ $\\Rightarrow$ $\\sigma$ <strong>décroît</strong>.<br>Après équivalence : ajout d'ions $\\mathrm{Na^+}$ et $\\mathrm{HO^-}$ (conducteurs) $\\Rightarrow$ $\\sigma$ <strong>croît</strong>.<br>L'équivalence est le <strong>minimum</strong> de la courbe, intersection des deux segments.` },
        { type:'meth', label:'METH', titre:'Titrage colorimétrique (indicateur ou redox)',
          contenu:`L'équivalence est repérée par un <strong>changement de couleur persistant</strong>.<br>Cas indicateur acido-basique : virage de l'indicateur choisi.<br>Cas redox : on exploite la couleur d'un réactif (ex : $\\mathrm{MnO_4^-}$ violet) — équivalence à la première goutte qui colore durablement le bécher.<br>Précision : verser goutte à goutte au voisinage de l'équivalence.` },
      ]
    },
    {
      titre: 'Titrage d\'oxydoréduction et exploitation',
      cartes: [
        { type:'meth', label:'METH', titre:'Titrage rédox',
          contenu:`La réaction de titrage est une réaction d'oxydoréduction totale.<br><strong>1.</strong> Écrire les demi-équations et le bilan, en déduire les coefficients.<br><strong>2.</strong> Repérer l'équivalence (changement de couleur, potentiométrie).<br><strong>3.</strong> Appliquer $\\dfrac{n_{\\text{ox}}}{\\nu_{\\text{ox}}} = \\dfrac{n_{\\text{red}}}{\\nu_{\\text{red}}}$ à l'équivalence.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : titrage par le permanganate',
          contenu:`Titrage des ions $\\mathrm{Fe^{2+}}$ ($V = 20{,}0$ mL) par $\\mathrm{MnO_4^-}$ à $C = 0{,}020$ mol/L, $V_E = 16{,}0$ mL.<br>$\\mathrm{MnO_4^-} + 5\\,\\mathrm{Fe^{2+}} + 8\\mathrm{H^+} \\rightarrow \\mathrm{Mn^{2+}} + 5\\,\\mathrm{Fe^{3+}} + 4\\mathrm{H_2O}$.<br>À l'équivalence : $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{MnO_4^-}}$, d'où $C_{\\mathrm{Fe}} = \\dfrac{5\\,C\\,V_E}{V} = \\dfrac{5\\times0{,}020\\times16{,}0}{20{,}0} = 0{,}080$ mol/L.` },
        { type:'meth', label:'METH', titre:'Estimer l\'incertitude sur la concentration',
          contenu:`La concentration $C_X = \\dfrac{C_T V_E}{V_X}$ dépend de plusieurs grandeurs mesurées.<br>Incertitude relative (composition quadratique) :<br>$$\\frac{u(C_X)}{C_X} = \\sqrt{\\left(\\frac{u(C_T)}{C_T}\\right)^2 + \\left(\\frac{u(V_E)}{V_E}\\right)^2 + \\left(\\frac{u(V_X)}{V_X}\\right)^2}$$<br>Sources : précision de la verrerie (pipette, burette) et lecture de $V_E$.` },
        { type:'prop', label:'PROP', titre:'Choisir la verrerie adaptée',
          contenu:`Pour prélever un <strong>volume précis</strong> du titré : <strong>pipette jaugée</strong> (faible incertitude).<br>Pour verser le titrant : <strong>burette graduée</strong> (lecture du volume équivalent).<br>Pour préparer une solution de concentration connue : <strong>fiole jaugée</strong>.<br>Le bécher et l'éprouvette graduée, peu précis, ne servent pas aux mesures fines.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. CINÉTIQUE CHIMIQUE (ENRICHI)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-cineq', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Cinétique chimique', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Vitesse de réaction',
      cartes: [
        { type:'def', label:'DEF', titre:'Vitesse volumique de réaction',
          contenu:`Pour $a\\,\\mathrm{A} + b\\,\\mathrm{B} \\rightarrow c\\,\\mathrm{C} + d\\,\\mathrm{D}$ à volume $V$ constant :<br>$$v = \\frac{1}{V}\\frac{dx}{dt} = -\\frac{1}{a}\\frac{d[\\mathrm{A}]}{dt} = +\\frac{1}{c}\\frac{d[\\mathrm{C}]}{dt}$$<br>Unité : mol·L$^{-1}$·s$^{-1}$. La vitesse est généralement <strong>maximale au début</strong> puis décroît (consommation des réactifs).` },
        { type:'meth', label:'METH', titre:'Déterminer une vitesse graphiquement',
          contenu:`À partir de la courbe $[\\mathrm{A}] = f(t)$ :<br><strong>Vitesse à l'instant $t$</strong> $= $ valeur absolue de la pente de la <strong>tangente</strong> à la courbe en ce point (divisée par le coefficient stœchiométrique).<br>La vitesse diminue au cours du temps : la tangente devient de moins en moins pentue.<br>À $t = 0$ la tangente est la plus inclinée $\\Rightarrow$ vitesse initiale maximale.` },
        { type:'def', label:'DEF', titre:'Temps de demi-réaction',
          contenu:`Le <strong>temps de demi-réaction</strong> $t_{1/2}$ est la durée au bout de laquelle l'avancement atteint la moitié de sa valeur finale :<br>$$x(t_{1/2}) = \\frac{x_f}{2}$$<br>Ordre de grandeur du temps caractéristique de la transformation ; utile pour comparer des cinétiques.` },
        { type:'ex', label:'EX', titre:'Exemple : vitesse initiale',
          contenu:`Pour la réaction $2\\,\\mathrm{H_2O_2} \\rightarrow 2\\,\\mathrm{H_2O} + \\mathrm{O_2}$, la tangente à l'origine de $[\\mathrm{H_2O_2}]=f(t)$ a une pente $-2{,}0\\cdot 10^{-3}$ mol·L$^{-1}$·s$^{-1}$.<br>$v_0 = -\\dfrac{1}{2}\\dfrac{d[\\mathrm{H_2O_2}]}{dt}\\Big|_0 = -\\dfrac{1}{2}(-2{,}0\\cdot 10^{-3}) = 1{,}0\\cdot 10^{-3}$ mol·L$^{-1}$·s$^{-1}$.` },
      ]
    },
    {
      titre: 'Lois de vitesse',
      cartes: [
        { type:'def', label:'DEF', titre:'Loi de vitesse et ordre',
          contenu:`Loi de vitesse empirique : $v = k\\,[\\mathrm{A}]^p[\\mathrm{B}]^q$.<br>$p$ et $q$ : <strong>ordres partiels</strong> ; $n = p+q$ : <strong>ordre global</strong>.<br>$k$ : <strong>constante de vitesse</strong>, dépend de la température. Son unité dépend de $n$ : mol$^{1-n}$·L$^{n-1}$·s$^{-1}$.<br>Les ordres sont des grandeurs <strong>expérimentales</strong> (non déductibles de l'équation bilan).` },
        { type:'form', label:'FORM', titre:'Cinétique d\'ordre 1',
          contenu:`Réaction $\\mathrm{A}\\rightarrow$ produits, $v = k[\\mathrm{A}]$ :<br>$$[\\mathrm{A}](t) = [\\mathrm{A}]_0\\,e^{-kt}$$<br>Décroissance <strong>exponentielle</strong>. Le temps de demi-réaction est <strong>indépendant</strong> de la concentration initiale :<br>$$t_{1/2} = \\frac{\\ln 2}{k}$$<br><strong>Test</strong> : $\\ln[\\mathrm{A}] = f(t)$ est une droite de pente $-k$.` },
        { type:'form', label:'FORM', titre:'Cinétique d\'ordre 2 et ordre 0',
          contenu:`<strong>Ordre 2</strong> ($v = k[\\mathrm{A}]^2$) :<br>$$\\frac{1}{[\\mathrm{A}](t)} = \\frac{1}{[\\mathrm{A}]_0} + kt, \\quad t_{1/2} = \\frac{1}{k[\\mathrm{A}]_0}$$<br><strong>Ordre 0</strong> ($v = k$) :<br>$$[\\mathrm{A}](t) = [\\mathrm{A}]_0 - kt, \\quad t_{1/2} = \\frac{[\\mathrm{A}]_0}{2k}$$<br>Test ordre 2 : $1/[\\mathrm{A}]=f(t)$ droite. Test ordre 0 : $[\\mathrm{A}]=f(t)$ droite.` },
        { type:'meth', label:'METH', titre:'Identifier l\'ordre d\'une réaction',
          contenu:`On linéarise les données expérimentales :<br><strong>Ordre 0</strong> : $[\\mathrm{A}]$ vs $t$ linéaire.<br><strong>Ordre 1</strong> : $\\ln[\\mathrm{A}]$ vs $t$ linéaire.<br><strong>Ordre 2</strong> : $1/[\\mathrm{A}]$ vs $t$ linéaire.<br>L'ordre est celui pour lequel on obtient la meilleure droite (coefficient de corrélation proche de 1). La pente donne $\\pm k$.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : décomposition d\'ordre 1',
          contenu:`$\\mathrm{N_2O_5}$ se décompose à l'ordre 1 avec $k = 3{,}5\\cdot 10^{-3}$ s$^{-1}$.<br>$t_{1/2} = \\dfrac{\\ln 2}{k} = \\dfrac{0{,}693}{3{,}5\\cdot 10^{-3}} \\approx 198$ s.<br>Concentration restante après $400$ s : $[\\mathrm{N_2O_5}] = [\\mathrm{N_2O_5}]_0\\,e^{-3{,}5\\cdot 10^{-3}\\times 400} = [\\mathrm{N_2O_5}]_0\\,e^{-1{,}4} \\approx 0{,}25\\,[\\mathrm{N_2O_5}]_0$.` },
      ]
    },
    {
      titre: 'Facteurs cinétiques et catalyse',
      cartes: [
        { type:'prop', label:'PROP', titre:'Facteurs cinétiques',
          contenu:`Grandeurs qui modifient la vitesse d'une réaction :<br><ul><li><strong>Concentration</strong> des réactifs : $\\nearrow$ concentration $\\Rightarrow$ $\\nearrow$ vitesse.</li><li><strong>Température</strong> : $\\nearrow$ $T$ $\\Rightarrow$ $\\nearrow$ vitesse (agitation, chocs plus efficaces).</li><li><strong>Surface de contact</strong> (réactions hétérogènes), éclairement (photochimie).</li></ul>` },
        { type:'def', label:'DEF', titre:'Catalyseur',
          contenu:`Un <strong>catalyseur</strong> accélère une réaction sans figurer dans le bilan (régénéré en fin de réaction). Il <strong>abaisse l'énergie d'activation</strong> en empruntant un autre chemin réactionnel.<br>Il ne modifie <strong>pas</strong> l'état d'équilibre ni $K$ ni $\\Delta_r$ : il agit uniquement sur la <strong>vitesse</strong>.` },
        { type:'prop', label:'PROP', titre:'Types de catalyse',
          contenu:`<strong>Homogène</strong> : catalyseur et réactifs dans la même phase (ex : ions $\\mathrm{H^+}$ pour l'estérification).<br><strong>Hétérogène</strong> : phases différentes (ex : platine solide / gaz dans un pot catalytique).<br><strong>Enzymatique</strong> : catalyse biologique par des enzymes (très sélective, très efficace), siège d'une réaction en milieu vivant.` },
        { type:'ex', label:'EX', titre:'Exemple : effet de la température',
          contenu:`La décomposition de l'eau oxygénée est lente à température ambiante. En chauffant ou en ajoutant des ions $\\mathrm{Fe^{3+}}$ (catalyseur), le dégagement de $\\mathrm{O_2}$ s'accélère nettement.<br>Trempe : refroidir brutalement un mélange réactionnel <strong>bloque la réaction</strong> (vitesse $\\to 0$), ce qui permet de figer le système pour le doser.` },
      ]
    },
    {
      titre: 'Suivi temporel et exploitation',
      cartes: [
        { type:'meth', label:'METH', titre:'Méthodes de suivi d\'une réaction',
          contenu:`<strong>Suivi par titrage</strong> : prélever, tremper (bloquer la réaction), doser une espèce à différents instants.<br><strong>Suivi physique</strong> (non destructif, en continu) :<br><ul><li>spectrophotométrie (loi de Beer-Lambert, $A = \\varepsilon\\,\\ell\\,c$) ;</li><li>conductimétrie (si variation du nombre/type d'ions) ;</li><li>pression (réaction libérant un gaz), pH-métrie.</li></ul>` },
        { type:'form', label:'FORM', titre:'Loi de Beer-Lambert',
          contenu:`Pour une espèce colorée en solution diluée :<br>$$A = \\varepsilon\\,\\ell\\,c$$<br>$A$ : absorbance (sans unité) · $\\varepsilon$ : coefficient d'absorption molaire (L·mol$^{-1}$·cm$^{-1}$) · $\\ell$ : largeur de cuve (cm) · $c$ : concentration (mol/L).<br>L'absorbance est <strong>proportionnelle à la concentration</strong> : suivi cinétique direct de $c(t)$.` },
        { type:'meth', label:'METH', titre:'Déterminer un temps de demi-réaction',
          contenu:`<strong>1.</strong> Tracer $[\\mathrm{A}] = f(t)$ (ou une grandeur proportionnelle).<br><strong>2.</strong> Déterminer l'avancement final $x_f$ (palier de la courbe).<br><strong>3.</strong> $t_{1/2}$ est l'instant où $x = x_f/2$ (ou $[\\mathrm{A}] = ([\\mathrm{A}]_0 + [\\mathrm{A}]_f)/2$).<br>Pour un ordre 1, on peut aussi utiliser $t_{1/2} = \\ln 2 / k$ directement.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : suivi conductimétrique',
          contenu:`Hydrolyse du 2-chloro-2-méthylpropane (ordre 1, $k = 1{,}9\\cdot10^{-3}$ s$^{-1}$) suivie par conductimétrie (formation d'ions $\\mathrm{H_3O^+}$ et $\\mathrm{Cl^-}$).<br>$t_{1/2} = \\dfrac{\\ln 2}{k} = \\dfrac{0{,}693}{1{,}9\\cdot10^{-3}} \\approx 365$ s.<br>Au bout de $3\\,t_{1/2} \\approx 18$ min, plus de $87\\,\\%$ du réactif a réagi.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. MÉCANIQUE NEWTONIENNE (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-newton', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Mouvement et deuxième loi de Newton', ordre: 5, enrich: false,
  sections: [
    {
      titre: 'Cinématique du point',
      cartes: [
        { type:'def', label:'DEF', titre:'Position, vitesse, accélération',
          contenu:`Vecteur position $\\vec{OM}(t)$. La <strong>vitesse</strong> est sa dérivée temporelle :<br>$$\\vec{v} = \\frac{d\\vec{OM}}{dt}$$<br>L'<strong>accélération</strong> est la dérivée de la vitesse :<br>$$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{OM}}{dt^2}$$<br>En coordonnées : $\\vec{v} = (\\dot{x},\\dot{y},\\dot{z})$, $\\vec{a} = (\\ddot{x},\\ddot{y},\\ddot{z})$.` },
        { type:'prop', label:'PROP', titre:'Vecteur accélération et trajectoire',
          contenu:`Dans le repère de Frenet : $\\vec{a} = \\dfrac{dv}{dt}\\,\\vec{u_T} + \\dfrac{v^2}{R}\\,\\vec{u_N}$.<br><strong>Composante tangentielle</strong> $\\frac{dv}{dt}$ : variation de la <em>norme</em> de la vitesse.<br><strong>Composante normale</strong> $\\frac{v^2}{R}$ (toujours $\\ge 0$, dirigée vers le centre) : variation de la <em>direction</em>.<br>Mouvement uniforme $\\Rightarrow$ $\\vec a$ purement normal ; mouvement rectiligne $\\Rightarrow$ $\\vec a$ purement tangentiel.` },
        { type:'meth', label:'METH', titre:'Déterminer une vitesse/accélération par chronophotographie',
          contenu:`À partir de positions $M_i$ aux instants $t_i$ espacés de $\\tau$ :<br><strong>Vitesse</strong> en $M_i$ : $\\vec{v_i} \\approx \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$ (encadrement centré).<br><strong>Accélération</strong> : $\\vec{a_i} \\approx \\dfrac{\\vec{v_{i+1}} - \\vec{v_{i-1}}}{2\\tau}$.<br>Construire ces vecteurs à l'échelle permet de vérifier la 2ᵉ loi de Newton.` },
      ]
    },
    {
      titre: 'Lois de Newton',
      cartes: [
        { type:'th', label:'THM', titre:'Première loi (principe d\'inertie)',
          contenu:`Dans un <strong>référentiel galiléen</strong>, si la somme des forces extérieures appliquées à un système est nulle ($\\sum\\vec{F} = \\vec{0}$), alors son centre d'inertie est soit <strong>au repos</strong>, soit en <strong>mouvement rectiligne uniforme</strong> ($\\vec{v} = $ cte), et réciproquement.` },
        { type:'th', label:'THM', titre:'Deuxième loi de Newton (PFD)',
          contenu:`Dans un référentiel galiléen, pour un système de masse $m$ constante :<br>$$\\sum \\vec{F}_{\\text{ext}} = m\\,\\vec{a} = \\frac{d\\vec{p}}{dt}$$<br>où $\\vec{p} = m\\vec{v}$ est la <strong>quantité de mouvement</strong>.<br>C'est l'équation fondamentale : connaissant les forces, on accède à $\\vec a$ donc au mouvement (par intégration).` },
        { type:'th', label:'THM', titre:'Troisième loi (actions réciproques)',
          contenu:`Si un corps A exerce sur un corps B une force $\\vec{F}_{A\\to B}$, alors B exerce sur A une force $\\vec{F}_{B\\to A}$ telle que :<br>$$\\vec{F}_{A\\to B} = -\\vec{F}_{B\\to A}$$<br>Même droite d'action, même norme, sens opposés. Valable que les corps soient en mouvement ou non.` },
        { type:'meth', label:'METH', titre:'Méthode de résolution d\'un problème de mécanique',
          contenu:`<strong>1.</strong> Définir le <strong>système</strong> et le <strong>référentiel</strong> (galiléen).<br><strong>2.</strong> Faire le <strong>bilan des forces</strong> extérieures (poids, réaction, frottement, tension…).<br><strong>3.</strong> Appliquer la 2ᵉ loi : $\\sum\\vec F = m\\vec a$.<br><strong>4.</strong> Projeter sur les axes adaptés.<br><strong>5.</strong> Intégrer pour obtenir $\\vec v(t)$ puis $\\vec{OM}(t)$ avec les conditions initiales.` },
      ]
    },
    {
      titre: 'Aspects énergétiques',
      cartes: [
        { type:'form', label:'FORM', titre:'Travail d\'une force',
          contenu:`Travail d'une force constante $\\vec F$ sur un déplacement $\\vec{AB}$ :<br>$$W_{AB}(\\vec F) = \\vec F \\cdot \\vec{AB} = F\\cdot AB\\cdot\\cos\\alpha$$<br>Moteur si $\\alpha < 90°$ ($W>0$), résistant si $\\alpha > 90°$ ($W<0$), nul si $\\vec F \\perp \\vec{AB}$.<br>Travail du poids : $W(\\vec P) = mg(z_A - z_B)$, indépendant du chemin (force conservative).` },
        { type:'th', label:'THM', titre:'Théorème de l\'énergie cinétique',
          contenu:`Dans un référentiel galiléen, la variation d'énergie cinétique d'un système entre A et B est égale à la somme des travaux des forces extérieures :<br>$$\\Delta E_c = E_c(B) - E_c(A) = \\sum W_{AB}(\\vec{F}_{\\text{ext}})$$<br>avec $E_c = \\tfrac{1}{2}mv^2$. Outil puissant quand on s'intéresse aux vitesses sans avoir besoin de la durée.` },
        { type:'form', label:'FORM', titre:'Énergie potentielle et mécanique',
          contenu:`Énergie potentielle de pesanteur : $E_{pp} = mgz$ (axe vertical ascendant).<br>Énergie mécanique : $E_m = E_c + E_{pp}$.<br><strong>Conservation</strong> : si seules des forces conservatives travaillent (pas de frottement), $E_m = $ cte.<br>S'il y a des frottements : $\\Delta E_m = W(\\vec f_{\\text{frottement}}) < 0$ (dissipation).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : vitesse en bas d\'une pente',
          contenu:`Un objet glisse sans frottement d'une hauteur $h = 2{,}0$ m, départ sans vitesse.<br>Conservation de $E_m$ : $\\tfrac{1}{2}mv^2 = mgh \\Rightarrow v = \\sqrt{2gh}$.<br>$v = \\sqrt{2\\times 9{,}8\\times 2{,}0} = 6{,}3$ m/s.<br>La masse n'intervient pas (résultat indépendant de $m$).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. MOUVEMENTS DANS DES CHAMPS UNIFORMES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-champs', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Mouvements dans un champ uniforme', ordre: 6, enrich: false,
  sections: [
    {
      titre: 'Chute et projectiles (champ de pesanteur)',
      cartes: [
        { type:'th', label:'THM', titre:'Équations du mouvement dans le champ de pesanteur',
          contenu:`Système de masse $m$ soumis à son seul poids (frottements négligés). PFD : $m\\vec a = m\\vec g$, donc $\\vec a = \\vec g$ (uniforme).<br>Avec $\\vec g = (0, -g)$ et $\\vec v_0 = (v_0\\cos\\alpha,\\ v_0\\sin\\alpha)$ :<br>$$\\vec v(t) = \\begin{cases} v_x = v_0\\cos\\alpha \\\\ v_y = -gt + v_0\\sin\\alpha\\end{cases}$$<br>L'accélération est <strong>indépendante de la masse</strong>.` },
        { type:'form', label:'FORM', titre:'Équations horaires et trajectoire',
          contenu:`En intégrant, avec origine au point de lancement :<br>$$x(t) = (v_0\\cos\\alpha)\\,t, \\qquad y(t) = -\\tfrac{1}{2}gt^2 + (v_0\\sin\\alpha)\\,t$$<br>Équation de la <strong>trajectoire</strong> (parabole), en éliminant $t = x/(v_0\\cos\\alpha)$ :<br>$$y = -\\frac{g}{2v_0^2\\cos^2\\alpha}\\,x^2 + (\\tan\\alpha)\\,x$$` },
        { type:'meth', label:'METH', titre:'Calculer flèche et portée',
          contenu:`<strong>Flèche</strong> (hauteur max) : atteinte quand $v_y = 0$, soit $t_s = \\dfrac{v_0\\sin\\alpha}{g}$ ; reporter dans $y(t)$.<br><strong>Portée</strong> (distance horizontale au retour à $y=0$) : résoudre $y(t)=0$, $t \\ne 0$, puis $x_{\\max}$.<br>$$x_{\\max} = \\frac{v_0^2\\sin(2\\alpha)}{g} \\quad \\Rightarrow \\text{portée maximale pour } \\alpha = 45°.$$` },
        { type:'ex', label:'EX', titre:'Exercice résolu : tir balistique',
          contenu:`Lancer $v_0 = 20$ m/s, $\\alpha = 30°$, $g = 9{,}8$ m/s².<br>Flèche : $t_s = \\dfrac{20\\sin 30°}{9{,}8} = 1{,}02$ s ; $y_{\\max} = \\dfrac{(v_0\\sin\\alpha)^2}{2g} = \\dfrac{10^2}{2\\times 9{,}8} = 5{,}1$ m.<br>Portée : $x_{\\max} = \\dfrac{20^2\\sin 60°}{9{,}8} = \\dfrac{400\\times 0{,}866}{9{,}8} = 35$ m.` },
      ]
    },
    {
      titre: 'Mouvement dans un champ électrique uniforme',
      cartes: [
        { type:'form', label:'FORM', titre:'Champ et force électrique',
          contenu:`Entre deux plaques distantes de $d$ sous tension $U$, le champ est uniforme :<br>$$E = \\frac{U}{d} \\quad (\\text{V/m})$$<br>dirigé de la plaque $+$ vers la plaque $-$.<br>Force sur une charge $q$ : $\\vec F = q\\vec E$ (même sens que $\\vec E$ si $q>0$, opposé si $q<0$).` },
        { type:'th', label:'THM', titre:'Mouvement d\'une particule chargée',
          contenu:`Poids souvent négligeable devant la force électrique pour une particule (électron, ion). PFD :<br>$$m\\vec a = q\\vec E \\Rightarrow \\vec a = \\frac{q\\vec E}{m} \\ (\\text{uniforme})$$<br>Le mouvement est analogue à un tir parabolique : uniforme selon $\\vec E^\\perp$, uniformément accéléré selon $\\vec E$. Trajectoire <strong>parabolique</strong> dans la zone de champ.` },
        { type:'form', label:'FORM', titre:'Théorème de l\'énergie cinétique (accélération)',
          contenu:`Pour une charge $q$ accélérée sous une tension $U$ :<br>$$\\tfrac{1}{2}mv^2 - \\tfrac{1}{2}mv_0^2 = qU$$<br>Si départ au repos : $v = \\sqrt{\\dfrac{2|q|U}{m}}$.<br>Application : canon à électrons, accélérateurs de particules.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : électron accéléré',
          contenu:`Un électron ($q = -e$, $m = 9{,}1\\cdot 10^{-31}$ kg) part du repos et est accéléré sous $U = 200$ V.<br>$\\tfrac{1}{2}mv^2 = eU \\Rightarrow v = \\sqrt{\\dfrac{2eU}{m}} = \\sqrt{\\dfrac{2\\times 1{,}6\\cdot 10^{-19}\\times 200}{9{,}1\\cdot 10^{-31}}}$.<br>$v \\approx 8{,}4\\cdot 10^{6}$ m/s.` },
      ]
    },
    {
      titre: 'Analogies et bilans',
      cartes: [
        { type:'prop', label:'PROP', titre:'Analogie champ pesanteur / champ électrique',
          contenu:`Dans les deux cas, l'accélération est <strong>constante</strong> $\\Rightarrow$ mouvement parabolique :<br><ul><li>Pesanteur : $\\vec a = \\vec g$, force $m\\vec g$.</li><li>Électrique : $\\vec a = \\dfrac{q\\vec E}{m}$, force $q\\vec E$.</li></ul>Mêmes méthodes (projection, intégration, équation de trajectoire). Différence : dans le champ électrique, le sens de $\\vec a$ dépend du signe de $q$.` },
        { type:'meth', label:'METH', titre:'Bilan : établir un mouvement à accélération constante',
          contenu:`<strong>1.</strong> Bilan des forces, écrire $\\vec a$ (constant).<br><strong>2.</strong> Intégrer $\\vec a$ $\\to$ $\\vec v(t)$ (constantes = conditions initiales sur la vitesse).<br><strong>3.</strong> Intégrer $\\vec v$ $\\to$ $\\vec{OM}(t)$ (constantes = position initiale).<br><strong>4.</strong> Éliminer $t$ pour la trajectoire.<br><strong>5.</strong> Exploiter (flèche, portée, déviation, vitesse de sortie).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : déviation dans un condensateur',
          contenu:`Électron entrant horizontalement à $v_0$ dans un champ $\\vec E$ vertical, longueur des plaques $\\ell$.<br>Durée de traversée : $t = \\ell/v_0$. Déviation verticale : $y = \\tfrac{1}{2}\\dfrac{eE}{m}t^2 = \\dfrac{eE\\,\\ell^2}{2mv_0^2}$.<br>La déviation $\\propto E$ et $\\propto 1/v_0^2$ : base de l'oscilloscope analogique.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. SATELLITES ET LOIS DE KEPLER (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-kepler', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Mouvement des satellites et lois de Kepler', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Interaction gravitationnelle',
      cartes: [
        { type:'form', label:'FORM', titre:'Loi de la gravitation universelle',
          contenu:`Deux corps ponctuels de masses $m_A$, $m_B$ distants de $r$ s'attirent :<br>$$\\vec{F}_{A\\to B} = -G\\frac{m_A m_B}{r^2}\\,\\vec{u}_{A\\to B}$$<br>$G = 6{,}67\\cdot 10^{-11}$ N·m²·kg$^{-2}$ (constante gravitationnelle). Force toujours <strong>attractive</strong>, portée infinie, dirigée selon la droite joignant les corps.` },
        { type:'def', label:'DEF', titre:'Champ de gravitation',
          contenu:`Le champ de gravitation créé par un astre de masse $M$ à la distance $r$ de son centre :<br>$$\\vec{\\mathcal{G}} = -G\\frac{M}{r^2}\\,\\vec{u_r}$$<br>À la surface d'une planète de rayon $R$ : $g_0 = \\dfrac{GM}{R^2}$ (intensité de la pesanteur).<br>Un corps de masse $m$ y subit $\\vec P = m\\vec{\\mathcal G}$.` },
        { type:'ex', label:'EX', titre:'Exemple : pesanteur à la surface de la Terre',
          contenu:`$M_T = 5{,}97\\cdot 10^{24}$ kg, $R_T = 6{,}37\\cdot 10^{6}$ m.<br>$g_0 = \\dfrac{GM_T}{R_T^2} = \\dfrac{6{,}67\\cdot 10^{-11}\\times 5{,}97\\cdot 10^{24}}{(6{,}37\\cdot 10^{6})^2} \\approx 9{,}8$ m/s².<br>Cohérent avec la valeur usuelle.` },
      ]
    },
    {
      titre: 'Mouvement circulaire d\'un satellite',
      cartes: [
        { type:'th', label:'THM', titre:'Vitesse d\'un satellite en orbite circulaire',
          contenu:`Pour un satellite en orbite circulaire de rayon $r$ autour d'un astre de masse $M$, la force gravitationnelle est centripète. PFD projeté sur $\\vec{u_N}$ : $\\dfrac{GMm}{r^2} = m\\dfrac{v^2}{r}$, d'où :<br>$$v = \\sqrt{\\frac{GM}{r}}$$<br>La vitesse ne dépend <strong>que de $r$</strong> (pas de la masse du satellite). Le mouvement est <strong>uniforme</strong> (la force est purement centripète).` },
        { type:'form', label:'FORM', titre:'Période de révolution',
          contenu:`Le satellite parcourt $2\\pi r$ à la vitesse $v$ en une période $T$ :<br>$$T = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$<br>On retrouve $\\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM}$ (3ᵉ loi de Kepler).` },
        { type:'def', label:'DEF', titre:'Satellite géostationnaire',
          contenu:`Un satellite <strong>géostationnaire</strong> reste à la verticale d'un même point de l'équateur. Conditions :<br><ul><li>orbite <strong>équatoriale</strong>,<br></li><li>période $T = 23\\,$h$\\,56\\,$min (jour sidéral),</li><li>même sens de rotation que la Terre.</li></ul>Altitude correspondante $\\approx 36\\,000$ km. Usage : télécommunications, météo.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : altitude géostationnaire',
          contenu:`$T = 86\\,164$ s. $r = \\left(\\dfrac{GM_T\\,T^2}{4\\pi^2}\\right)^{1/3}$.<br>$r = \\left(\\dfrac{6{,}67\\cdot10^{-11}\\times 5{,}97\\cdot10^{24}\\times (86164)^2}{4\\pi^2}\\right)^{1/3} \\approx 4{,}22\\cdot 10^{7}$ m.<br>Altitude $h = r - R_T \\approx 4{,}22\\cdot10^7 - 6{,}37\\cdot10^6 \\approx 3{,}6\\cdot 10^{7}$ m $= 36\\,000$ km.` },
      ]
    },
    {
      titre: 'Lois de Kepler',
      cartes: [
        { type:'th', label:'THM', titre:'Première loi (loi des orbites)',
          contenu:`Dans le référentiel héliocentrique, chaque planète décrit une <strong>ellipse</strong> dont le <strong>Soleil occupe l'un des foyers</strong>.<br>(Pour les satellites : référentiel géocentrique, la Terre à un foyer.) Une orbite circulaire est un cas particulier d'ellipse.` },
        { type:'th', label:'THM', titre:'Deuxième loi (loi des aires)',
          contenu:`Le segment reliant le Soleil à la planète balaie des <strong>aires égales pendant des durées égales</strong>.<br>Conséquence : la planète va <strong>plus vite au périhélie</strong> (proche du Soleil) que à l'aphélie (loin). Pour une orbite circulaire, la loi des aires impose un mouvement uniforme.` },
        { type:'th', label:'THM', titre:'Troisième loi (loi des périodes)',
          contenu:`Le rapport du carré de la période au cube du demi-grand axe $a$ est <strong>constant</strong> pour tous les astres en orbite autour du même corps :<br>$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM} = \\text{constante}$$<br>($a = r$ pour une orbite circulaire). Permet de comparer les orbites d'un même système.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : 3ᵉ loi appliquée à Mars',
          contenu:`Terre : $a_T = 1{,}50\\cdot 10^{11}$ m, $T_T = 1{,}00$ an. Mars : $a_M = 2{,}28\\cdot 10^{11}$ m.<br>$\\dfrac{T_M^2}{a_M^3} = \\dfrac{T_T^2}{a_T^3} \\Rightarrow T_M = T_T\\left(\\dfrac{a_M}{a_T}\\right)^{3/2}$.<br>$T_M = 1{,}00\\times (1{,}52)^{3/2} \\approx 1{,}87$ an (valeur réelle $\\approx 1{,}88$ an).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. CARACTÉRISTIQUES DES ONDES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-ondes', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Ondes : caractéristiques et propagation', ordre: 8, enrich: false,
  sections: [
    {
      titre: 'Grandeurs caractéristiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Onde progressive',
          contenu:`Une <strong>onde progressive</strong> est la propagation d'une perturbation qui transporte de l'<strong>énergie sans transport de matière</strong>.<br><strong>Transversale</strong> : perturbation $\\perp$ propagation (corde, lumière).<br><strong>Longitudinale</strong> : perturbation $\\parallel$ propagation (son dans l'air).<br>La <strong>célérité</strong> $v$ dépend du milieu.` },
        { type:'form', label:'FORM', titre:'Période, fréquence, longueur d\'onde',
          contenu:`Pour une onde périodique :<br>$$f = \\frac{1}{T}, \\qquad \\lambda = v\\,T = \\frac{v}{f}$$<br>$T$ : période temporelle (s) · $f$ : fréquence (Hz) · $\\lambda$ : longueur d'onde, période spatiale (m) · $v$ : célérité (m/s).<br>La <strong>fréquence est imposée par la source</strong> et ne change pas en changeant de milieu (contrairement à $\\lambda$).` },
        { type:'def', label:'DEF', titre:'Retard et propagation',
          contenu:`Un point M situé à la distance $d$ de la source reproduit le mouvement de celle-ci avec un <strong>retard</strong> :<br>$$\\tau = \\frac{d}{v}$$<br>donc $y_M(t) = y_{\\text{source}}(t - \\tau)$.<br>Deux points distants de $d$ vibrent en phase si $d = k\\lambda$, en opposition de phase si $d = (k+\\tfrac{1}{2})\\lambda$.` },
        { type:'ex', label:'EX', titre:'Exemple : calcul de longueur d\'onde',
          contenu:`Un son de fréquence $f = 440$ Hz se propage dans l'air à $v = 340$ m/s.<br>$\\lambda = \\dfrac{v}{f} = \\dfrac{340}{440} = 0{,}77$ m.<br>Dans l'eau ($v \\approx 1500$ m/s) à même fréquence : $\\lambda = \\dfrac{1500}{440} = 3{,}4$ m (la longueur d'onde augmente, $f$ inchangée).` },
      ]
    },
    {
      titre: 'Diffraction',
      cartes: [
        { type:'def', label:'DEF', titre:'Phénomène de diffraction',
          contenu:`La <strong>diffraction</strong> est l'étalement d'une onde qui rencontre une ouverture ou un obstacle de dimension $a$ comparable à $\\lambda$.<br>Elle est d'autant plus marquée que $\\dfrac{\\lambda}{a}$ est grand. C'est une <strong>signature du caractère ondulatoire</strong> (vaut pour son, lumière, surface de l'eau).` },
        { type:'form', label:'FORM', titre:'Écart angulaire de diffraction',
          contenu:`Pour une fente de largeur $a$, le demi-angle d'ouverture de la tache centrale :<br>$$\\theta = \\frac{\\lambda}{a} \\quad (\\theta \\text{ en rad}, \\ \\theta \\text{ petit})$$<br>Sur un écran à distance $D$, la <strong>demi-largeur</strong> de la tache centrale : $L/2 = D\\tan\\theta \\approx D\\theta$, donc largeur totale $L = \\dfrac{2\\lambda D}{a}$.` },
        { type:'meth', label:'METH', titre:'Mesurer une longueur d\'onde par diffraction',
          contenu:`<strong>1.</strong> Éclairer une fente de largeur $a$ connue par un laser.<br><strong>2.</strong> Mesurer la largeur $L$ de la tache centrale sur un écran à distance $D$.<br><strong>3.</strong> Utiliser $\\theta = \\lambda/a$ et $L = 2D\\theta$ :<br>$$\\lambda = \\frac{a\\,L}{2D}$$<br>Tracer $L = f(1/a)$ : droite de pente $2\\lambda D$.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : diffraction laser',
          contenu:`Laser, fente $a = 0{,}10$ mm $= 1{,}0\\cdot10^{-4}$ m, écran à $D = 2{,}0$ m, tache centrale $L = 2{,}5$ cm.<br>$\\theta = \\dfrac{L}{2D} = \\dfrac{2{,}5\\cdot10^{-2}}{2\\times 2{,}0} = 6{,}25\\cdot10^{-3}$ rad.<br>$\\lambda = a\\,\\theta = 1{,}0\\cdot10^{-4}\\times 6{,}25\\cdot10^{-3} = 6{,}3\\cdot10^{-7}$ m $= 630$ nm.` },
      ]
    },
    {
      titre: 'Interférences',
      cartes: [
        { type:'def', label:'DEF', titre:'Interférences et cohérence',
          contenu:`Deux ondes de <strong>même fréquence</strong> et de <strong>déphasage constant</strong> (sources cohérentes) qui se superposent donnent des <strong>interférences</strong> : zones d'amplitude renforcée et zones d'amplitude réduite.<br>Dispositif des fentes de Young : une source unique éclaire deux fentes, garantissant la cohérence.` },
        { type:'form', label:'FORM', titre:'Différence de marche et conditions',
          contenu:`Différence de marche : $\\delta = d_2 - d_1$.<br><strong>Interférences constructives</strong> (franges brillantes) : $\\delta = k\\lambda$, $k\\in\\mathbb{Z}$.<br><strong>Interférences destructives</strong> (franges sombres) : $\\delta = (k+\\tfrac{1}{2})\\lambda$.<br>Fentes de Young (écart $b$, distance $D$) : $\\delta \\approx \\dfrac{b\\,x}{D}$ au point d'abscisse $x$.` },
        { type:'form', label:'FORM', titre:'Interfrange',
          contenu:`L'<strong>interfrange</strong> $i$ est la distance entre deux franges brillantes (ou sombres) consécutives :<br>$$i = \\frac{\\lambda D}{b}$$<br>$b$ : distance entre les fentes · $D$ : distance fentes–écran.<br>Mesurer $i$ (sur plusieurs interfranges pour la précision) permet de déterminer $\\lambda$.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : fentes de Young',
          contenu:`Fentes distantes de $b = 0{,}30$ mm, écran à $D = 1{,}5$ m, on mesure $5i = 1{,}6$ cm.<br>$i = \\dfrac{1{,}6\\cdot10^{-2}}{5} = 3{,}2\\cdot10^{-3}$ m.<br>$\\lambda = \\dfrac{i\\,b}{D} = \\dfrac{3{,}2\\cdot10^{-3}\\times 0{,}30\\cdot10^{-3}}{1{,}5} = 6{,}4\\cdot10^{-7}$ m $= 640$ nm.` },
      ]
    },
    {
      titre: 'Effet Doppler',
      cartes: [
        { type:'def', label:'DEF', titre:'Effet Doppler',
          contenu:`L'<strong>effet Doppler</strong> est la variation de fréquence perçue lorsqu'il y a un <strong>mouvement relatif</strong> entre la source et le récepteur.<br>Source qui <strong>se rapproche</strong> : fréquence perçue <strong>plus élevée</strong> (son plus aigu, lumière décalée vers le bleu).<br>Source qui <strong>s'éloigne</strong> : fréquence perçue <strong>plus basse</strong> (son plus grave, décalage vers le rouge).` },
        { type:'form', label:'FORM', titre:'Décalage Doppler (récepteur fixe)',
          contenu:`Source de fréquence $f_E$ se déplaçant à la vitesse $v_s \\ll c$ (ou $v$) :<br>Rapprochement : $f_R = f_E\\,\\dfrac{v}{v - v_s}$ ; éloignement : $f_R = f_E\\,\\dfrac{v}{v + v_s}$.<br>Décalage relatif (faibles vitesses) : $\\dfrac{\\Delta f}{f_E} \\approx \\dfrac{v_s}{v}$.<br>Pour la lumière : $\\dfrac{\\Delta\\lambda}{\\lambda} \\approx \\dfrac{v_s}{c}$.` },
        { type:'meth', label:'METH', titre:'Déterminer une vitesse par effet Doppler',
          contenu:`<strong>1.</strong> Mesurer $f_E$ (source au repos) et $f_R$ (en mouvement) — ou les longueurs d'onde.<br><strong>2.</strong> En déduire $\\Delta f = f_R - f_E$.<br><strong>3.</strong> Appliquer $v_s \\approx v\\,\\dfrac{|\\Delta f|}{f_E}$ (ou $c$ pour la lumière).<br>Applications : radar, vélocimétrie, mesure de la vitesse d'éloignement des galaxies.` },
        { type:'ex', label:'EX', titre:'Exemple : décalage spectral d\'une galaxie',
          contenu:`Une raie émise à $\\lambda_0 = 656{,}3$ nm est reçue à $\\lambda = 662{,}9$ nm (décalage vers le rouge).<br>$\\dfrac{\\Delta\\lambda}{\\lambda_0} = \\dfrac{6{,}6}{656{,}3} = 1{,}0\\cdot10^{-2}$.<br>$v \\approx c\\,\\dfrac{\\Delta\\lambda}{\\lambda_0} = 3{,}0\\cdot10^{8}\\times 1{,}0\\cdot10^{-2} = 3{,}0\\cdot10^{6}$ m/s (la galaxie s'éloigne).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. LUNETTES ET LENTILLES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-optique', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Lentilles et instruments d\'optique', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Lentilles minces convergentes',
      cartes: [
        { type:'def', label:'DEF', titre:'Lentille convergente, foyers',
          contenu:`Une <strong>lentille mince convergente</strong> fait converger un faisceau parallèle en un point.<br><strong>Centre optique</strong> $O$ : tout rayon le traversant n'est pas dévié.<br><strong>Foyer image</strong> $F'$ : image d'un point à l'infini sur l'axe.<br><strong>Foyer objet</strong> $F$ : symétrique de $F'$ par rapport à $O$.<br><strong>Distance focale</strong> : $f' = \\overline{OF'} > 0$.` },
        { type:'form', label:'FORM', titre:'Vergence',
          contenu:`La <strong>vergence</strong> d'une lentille mesure son pouvoir de convergence :<br>$$C = \\frac{1}{f'} \\quad (\\text{en dioptries } \\delta = \\text{m}^{-1})$$<br>$C > 0$ : lentille convergente · $C < 0$ : divergente.<br>Plus $|C|$ est grand, plus la lentille est « puissante » (focale courte).` },
        { type:'meth', label:'METH', titre:'Construction de l\'image d\'un objet',
          contenu:`On trace deux des trois rayons particuliers issus de la tête B de l'objet :<br><strong>1.</strong> Rayon $\\parallel$ à l'axe $\\to$ ressort en passant par $F'$.<br><strong>2.</strong> Rayon passant par $O$ $\\to$ non dévié.<br><strong>3.</strong> Rayon passant par $F$ $\\to$ ressort $\\parallel$ à l'axe.<br>Leur intersection donne l'image B'. L'image est réelle si les rayons se croisent réellement, virtuelle sinon.` },
      ]
    },
    {
      titre: 'Relations de conjugaison',
      cartes: [
        { type:'form', label:'FORM', titre:'Relation de conjugaison de Descartes',
          contenu:`En orientant l'axe dans le sens de propagation, origine en $O$ :<br>$$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'} = C$$<br>$\\overline{OA}$ : position de l'objet (négatif si réel en amont) · $\\overline{OA'}$ : position de l'image.<br>Permet de calculer la position de l'image connaissant l'objet et $f'$.` },
        { type:'form', label:'FORM', titre:'Grandissement',
          contenu:`Le <strong>grandissement transversal</strong> :<br>$$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$<br>$|\\gamma| > 1$ : image agrandie · $|\\gamma| < 1$ : réduite.<br>$\\gamma > 0$ : image droite (même sens) · $\\gamma < 0$ : image renversée.` },
        { type:'meth', label:'METH', titre:'Déterminer une image par le calcul',
          contenu:`<strong>1.</strong> Repérer $\\overline{OA}$ (algébrique, $< 0$ pour un objet réel) et $f'$.<br><strong>2.</strong> Relation de conjugaison $\\to$ $\\overline{OA'}$.<br><strong>3.</strong> Grandissement $\\gamma = \\overline{OA'}/\\overline{OA}$ $\\to$ taille et sens de l'image.<br><strong>4.</strong> Conclure : nature (réelle si $\\overline{OA'} > 0$, virtuelle sinon), sens, taille.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : image par une lentille',
          contenu:`Objet à $20$ cm devant une lentille $f' = 5{,}0$ cm. $\\overline{OA} = -20$ cm.<br>$\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{f'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{5} - \\dfrac{1}{20} = \\dfrac{3}{20}$ $\\Rightarrow \\overline{OA'} = 6{,}7$ cm.<br>$\\gamma = \\dfrac{6{,}7}{-20} = -0{,}33$ : image réelle, renversée, réduite.` },
      ]
    },
    {
      titre: 'Lunette astronomique',
      cartes: [
        { type:'def', label:'DEF', titre:'Lunette afocale',
          contenu:`La <strong>lunette astronomique</strong> associe deux lentilles convergentes :<br><strong>Objectif</strong> (grande focale $f'_1$) et <strong>oculaire</strong> (petite focale $f'_2$).<br>Réglage <strong>afocal</strong> : le foyer image de l'objectif $F'_1$ coïncide avec le foyer objet de l'oculaire $F_2$. Un objet à l'infini donne une image à l'infini, observable sans accommodation.` },
        { type:'form', label:'FORM', titre:'Grossissement',
          contenu:`Le <strong>grossissement</strong> d'une lunette afocale :<br>$$G = \\frac{\\alpha'}{\\alpha} = \\frac{f'_1}{f'_2}$$<br>$\\alpha$ : angle sous lequel on voit l'objet à l'œil nu · $\\alpha'$ : angle sous lequel on voit l'image à travers la lunette.<br>Grand grossissement $\\Rightarrow$ objectif à longue focale et oculaire à courte focale.` },
        { type:'ex', label:'EX', titre:'Exercice résolu : grossissement d\'une lunette',
          contenu:`Objectif $f'_1 = 900$ mm, oculaire $f'_2 = 20$ mm.<br>$G = \\dfrac{f'_1}{f'_2} = \\dfrac{900}{20} = 45$.<br>La Lune, vue sous un angle $\\alpha \\approx 0{,}52°$ à l'œil nu, apparaît sous $\\alpha' = 45\\times 0{,}52 \\approx 23°$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 10. THERMODYNAMIQUE / ÉNERGIE (ENRICHI)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-thermo', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Énergie : premier principe et transferts thermiques', ordre: 10, enrich: true,
  sections: [
    {
      titre: 'Premier principe de la thermodynamique',
      cartes: [
        { type:'def', label:'DEF', titre:'Système, énergie interne',
          contenu:`Un <strong>système thermodynamique</strong> est la portion d'espace étudiée. Son énergie interne $U$ (J) regroupe les énergies microscopiques (cinétique d'agitation + interactions).<br>$U$ est une <strong>fonction d'état</strong> : sa variation ne dépend que des états initial et final.<br>Pour un corps incompressible : $\\Delta U = C\\,\\Delta T$ avec $C = mc$ (capacité thermique).` },
        { type:'th', label:'THM', titre:'Premier principe',
          contenu:`Pour un système au repos macroscopique, entre deux états :<br>$$\\Delta U = W + Q$$<br>$W$ : travail reçu · $Q$ : transfert thermique (chaleur) reçu (algébriques : $>0$ si reçu, $<0$ si cédé).<br>C'est un <strong>bilan de conservation de l'énergie</strong>. Pour un système isolé ($W = Q = 0$) : $\\Delta U = 0$.` },
        { type:'form', label:'FORM', titre:'Capacité thermique et transfert',
          contenu:`Transfert thermique pour faire varier la température d'un corps de masse $m$ :<br>$$Q = m\\,c\\,\\Delta T$$<br>$c$ : capacité thermique massique (J·kg$^{-1}$·K$^{-1}$). Eau : $c = 4{,}18\\cdot10^{3}$ J·kg$^{-1}$·K$^{-1}$.<br>Capacité thermique : $C = mc$ (J/K). $\\Delta T$ en kelvin ou en °C (même écart).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : chauffage d\'eau',
          contenu:`Chauffer $m = 1{,}5$ kg d'eau de $20$ °C à $80$ °C.<br>$Q = mc\\,\\Delta T = 1{,}5\\times 4{,}18\\cdot10^{3}\\times (80-20) = 3{,}8\\cdot10^{5}$ J $= 380$ kJ.<br>Avec une résistance de puissance $P = 1{,}5$ kW : durée $t = Q/P = 3{,}8\\cdot10^5/1500 \\approx 250$ s.` },
      ]
    },
    {
      titre: 'Transferts thermiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Modes de transfert thermique',
          contenu:`<strong>Conduction</strong> : transfert dans un milieu matériel immobile (de proche en proche, ex : barre métallique chauffée).<br><strong>Convection</strong> : transfert par déplacement de matière (fluides : air, eau qui circulent).<br><strong>Rayonnement</strong> : transfert par ondes électromagnétiques, sans support matériel (chaleur du Soleil).` },
        { type:'form', label:'FORM', titre:'Flux thermique et résistance',
          contenu:`<strong>Flux thermique</strong> : $\\Phi = \\dfrac{Q}{\\Delta t}$ (W), énergie transférée par unité de temps.<br>À travers une paroi : $\\Phi = \\dfrac{T_{\\text{chaud}} - T_{\\text{froid}}}{R_{th}}$ (loi analogue à Ohm).<br><strong>Résistance thermique</strong> : $R_{th} = \\dfrac{e}{\\lambda\\,S}$ ($e$ épaisseur, $\\lambda$ conductivité thermique, $S$ surface). Bon isolant $\\Rightarrow$ $\\lambda$ petit, $R_{th}$ grand.` },
        { type:'form', label:'FORM', titre:'Loi de Newton du refroidissement',
          contenu:`Le flux thermique échangé par un corps à la température $T$ avec un milieu à $T_{\\text{ext}}$ est proportionnel à l'écart :<br>$$\\Phi = h\\,S\\,(T - T_{\\text{ext}})$$<br>Conséquence : $\\dfrac{dT}{dt} = -k\\,(T - T_{\\text{ext}})$, d'où $T(t) = T_{\\text{ext}} + (T_0 - T_{\\text{ext}})\\,e^{-kt}$ : décroissance exponentielle vers $T_{\\text{ext}}$.` },
        { type:'meth', label:'METH', titre:'Établir un bilan énergétique',
          contenu:`<strong>1.</strong> Définir le système et lister les transferts ($W$, $Q$, électrique, rayonné).<br><strong>2.</strong> Écrire le bilan : $\\Delta U = W + Q$ (régime variable) ou $\\Phi_{\\text{reçu}} = \\Phi_{\\text{perdu}}$ (régime stationnaire).<br><strong>3.</strong> Exprimer chaque terme.<br><strong>4.</strong> Résoudre et vérifier les ordres de grandeur (signe, unités).` },
      ]
    },
    {
      titre: 'Étude énergétique d\'un système',
      cartes: [
        { type:'ex', label:'EX', titre:'Exercice résolu : refroidissement d\'un café',
          contenu:`Un café à $T_0 = 80$ °C dans une pièce à $T_{\\text{ext}} = 20$ °C, constante $k = 0{,}02$ min$^{-1}$.<br>$T(t) = 20 + 60\\,e^{-0{,}02t}$ (°C, $t$ en min).<br>Après $30$ min : $T = 20 + 60\\,e^{-0{,}6} = 20 + 60\\times 0{,}55 = 53$ °C.<br>Quand $t\\to\\infty$ : $T \\to 20$ °C (équilibre thermique avec la pièce).` },
        { type:'prop', label:'PROP', titre:'Bilan énergétique et rendement',
          contenu:`Pour un convertisseur d'énergie, le <strong>rendement</strong> :<br>$$\\eta = \\frac{E_{\\text{utile}}}{E_{\\text{fournie}}} \\le 1$$<br>L'énergie non utile est dissipée (souvent sous forme thermique : effet Joule, frottements).<br>Toute l'énergie se conserve (1ᵉʳ principe), mais une partie devient inexploitable (dégradation).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : isolation d\'un mur',
          contenu:`Mur de surface $S = 10$ m², épaisseur $e = 0{,}20$ m, $\\lambda = 1{,}0$ W·m$^{-1}$·K$^{-1}$.<br>$R_{th} = \\dfrac{e}{\\lambda S} = \\dfrac{0{,}20}{1{,}0\\times 10} = 0{,}020$ K/W.<br>Pour $T_{\\text{int}} - T_{\\text{ext}} = 20$ °C : $\\Phi = \\dfrac{20}{0{,}020} = 1000$ W. Sur $24$ h : $E = \\Phi\\,\\Delta t = 1000\\times 86400 \\approx 8{,}6\\cdot 10^{7}$ J.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 11. ÉLECTROCHIMIE ET PILES (ENRICHI)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-elec', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Piles et énergie chimique', ordre: 11, enrich: true,
  sections: [
    {
      titre: 'Oxydoréduction',
      cartes: [
        { type:'def', label:'DEF', titre:'Couple oxydant/réducteur',
          contenu:`Un <strong>oxydant</strong> capte des électrons ; un <strong>réducteur</strong> en cède.<br>Couple $\\mathrm{Ox/Red}$ lié par la demi-équation :<br>$$\\mathrm{Ox} + n\\,e^- = \\mathrm{Red}$$<br>Une <strong>réaction d'oxydoréduction</strong> est un transfert d'électrons d'un réducteur vers un oxydant (de deux couples différents).` },
        { type:'meth', label:'METH', titre:'Équilibrer une équation rédox',
          contenu:`<strong>1.</strong> Écrire les deux demi-équations $\\mathrm{Ox} + ne^- = \\mathrm{Red}$.<br><strong>2.</strong> Équilibrer chaque demi-équation : éléments, puis O avec $\\mathrm{H_2O}$, H avec $\\mathrm{H^+}$, charges avec $e^-$.<br><strong>3.</strong> Multiplier pour égaliser le nombre d'électrons échangés.<br><strong>4.</strong> Additionner : les électrons disparaissent du bilan.` },
        { type:'ex', label:'EX', titre:'Exemple : oxydation du fer par les ions cuivre',
          contenu:`Couples $\\mathrm{Cu^{2+}/Cu}$ et $\\mathrm{Fe^{2+}/Fe}$.<br>$\\mathrm{Cu^{2+}} + 2e^- = \\mathrm{Cu}$ et $\\mathrm{Fe} = \\mathrm{Fe^{2+}} + 2e^-$.<br>Bilan : $\\mathrm{Fe} + \\mathrm{Cu^{2+}} \\rightarrow \\mathrm{Fe^{2+}} + \\mathrm{Cu}$.<br>Le fer (réducteur) est oxydé, les ions cuivre (oxydant) sont réduits : dépôt de cuivre métallique.` },
      ]
    },
    {
      titre: 'Constitution et fonctionnement d\'une pile',
      cartes: [
        { type:'def', label:'DEF', titre:'Pile électrochimique',
          contenu:`Une <strong>pile</strong> convertit l'énergie d'une réaction rédox spontanée en énergie électrique.<br>Deux <strong>demi-piles</strong> (couple + électrode) reliées par un <strong>pont salin</strong> (assure la neutralité électrique et ferme le circuit).<br><strong>Anode</strong> : siège de l'oxydation (pôle $-$). <strong>Cathode</strong> : siège de la réduction (pôle $+$).` },
        { type:'def', label:'DEF', titre:'Sens du courant et des porteurs',
          contenu:`À l'extérieur, le courant circule de la <strong>cathode (+)</strong> vers l'<strong>anode (−)</strong> ; les <strong>électrons</strong> circulent en sens inverse (de l'anode vers la cathode).<br>Dans le pont salin, les <strong>anions</strong> migrent vers l'anode, les <strong>cations</strong> vers la cathode.<br>La pile débite tant que les réactifs ne sont pas épuisés ($Q_r$ tend vers $K$).` },
        { type:'form', label:'FORM', titre:'Force électromotrice',
          contenu:`La <strong>force électromotrice</strong> (f.é.m.) $E$ est la tension à vide de la pile (courant nul) :<br>$$E = U_{PN}\\ (\\text{circuit ouvert}) > 0$$<br>Elle diminue au fur et à mesure du fonctionnement ; la pile est « usée » quand $E \\to 0$ ($Q_r = K$, équilibre atteint).` },
        { type:'ex', label:'EX', titre:'Exemple : pile Daniell',
          contenu:`Demi-piles $\\mathrm{Zn^{2+}/Zn}$ et $\\mathrm{Cu^{2+}/Cu}$.<br>Anode (−) : $\\mathrm{Zn} \\rightarrow \\mathrm{Zn^{2+}} + 2e^-$. Cathode (+) : $\\mathrm{Cu^{2+}} + 2e^- \\rightarrow \\mathrm{Cu}$.<br>Bilan : $\\mathrm{Zn} + \\mathrm{Cu^{2+}} \\rightarrow \\mathrm{Zn^{2+}} + \\mathrm{Cu}$.<br>L'électrode de zinc se dissout, du cuivre se dépose ; f.é.m. $\\approx 1{,}1$ V.` },
      ]
    },
    {
      titre: 'Capacité électrique et bilans',
      cartes: [
        { type:'form', label:'FORM', titre:'Quantité d\'électricité débitée',
          contenu:`Charge transférée pour un avancement $x$ (avec $n$ électrons échangés par équation) :<br>$$Q = n\\,x\\,\\mathcal{F} = I\\,\\Delta t$$<br>$\\mathcal F = 96\\,500$ C/mol (constante de Faraday) · $I$ : intensité débitée · $\\Delta t$ : durée.<br>$\\mathcal F = N_A\\cdot e$ : charge d'une mole d'électrons.` },
        { type:'meth', label:'METH', titre:'Déterminer la capacité ou l\'autonomie d\'une pile',
          contenu:`<strong>Capacité</strong> $Q_{\\max} = n\\,x_{\\max}\\,\\mathcal F$, où $x_{\\max}$ dépend du réactif limitant.<br><strong>Autonomie</strong> à courant $I$ constant : $\\Delta t = \\dfrac{Q_{\\max}}{I}$.<br><strong>Masse d'électrode consommée</strong> : $m = M\\times\\dfrac{Q}{n\\mathcal F}$ ($M$ masse molaire du métal).<br>Vérifier la cohérence (réactif limitant correctement identifié).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : autonomie d\'une pile',
          contenu:`Une pile contient $n_{\\mathrm{Zn}} = 0{,}10$ mol de zinc (limitant), $n = 2$ électrons échangés.<br>$Q_{\\max} = n\\,n_{\\mathrm{Zn}}\\,\\mathcal F = 2\\times 0{,}10\\times 96\\,500 = 1{,}93\\cdot10^{4}$ C.<br>Débit $I = 50$ mA : autonomie $\\Delta t = \\dfrac{1{,}93\\cdot10^4}{0{,}050} = 3{,}9\\cdot10^{5}$ s $\\approx 107$ h.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 12. SYNTHÈSES ORGANIQUES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'phch-tpc-orga', filiere: 'term-spe-pc', matiere: 'phch',
  titre: 'Synthèses organiques : stratégie et mécanismes', ordre: 12, enrich: false,
  sections: [
    {
      titre: 'Stratégie de synthèse',
      cartes: [
        { type:'def', label:'DEF', titre:'Étapes d\'une synthèse',
          contenu:`Une <strong>synthèse organique</strong> comprend :<br><strong>1. Transformation</strong> : réaction chimique (chauffage à reflux le plus souvent).<br><strong>2. Isolement / extraction</strong> : séparer le produit (décantation, filtration).<br><strong>3. Purification</strong> : recristallisation, distillation.<br><strong>4. Analyse / identification</strong> : CCM, point de fusion, spectroscopie (IR, RMN).` },
        { type:'def', label:'DEF', titre:'Rendement d\'une synthèse',
          contenu:`Le <strong>rendement</strong> compare la quantité de produit obtenue à la quantité théorique maximale :<br>$$\\eta = \\frac{n_{\\text{produit obtenu}}}{n_{\\text{produit théorique}}} = \\frac{m_{\\text{exp}}}{m_{\\text{théo}}} \\le 1$$<br>$n_{\\text{théo}}$ se calcule à partir du <strong>réactif limitant</strong> (transformation supposée totale).` },
        { type:'meth', label:'METH', titre:'Choisir les paramètres d\'une synthèse',
          contenu:`<strong>Facteurs cinétiques</strong> : chauffer (reflux), concentrer, catalyser pour accélérer.<br><strong>Déplacer un équilibre</strong> : éliminer un produit (distillation), utiliser un excès de réactif (loi de modération).<br><strong>Sécurité / coût / impact</strong> : choisir solvants et réactifs adaptés (chimie verte : économie d'atomes, moins de déchets).` },
        { type:'ex', label:'EX', titre:'Exercice résolu : calcul de rendement',
          contenu:`Synthèse de l'aspirine : on part de $5{,}0$ g d'acide salicylique ($M = 138$ g/mol), on obtient $5{,}2$ g d'aspirine ($M = 180$ g/mol).<br>$n_{\\text{limitant}} = 5{,}0/138 = 3{,}6\\cdot10^{-2}$ mol $= n_{\\text{théo}}$ d'aspirine.<br>$m_{\\text{théo}} = 3{,}6\\cdot10^{-2}\\times 180 = 6{,}5$ g. $\\eta = \\dfrac{5{,}2}{6{,}5} = 80\\,\\%$.` },
      ]
    },
    {
      titre: 'Mécanismes réactionnels',
      cartes: [
        { type:'def', label:'DEF', titre:'Site donneur, site accepteur',
          contenu:`Une réaction s'interprète par l'interaction entre :<br><strong>Site donneur</strong> de doublet d'électrons (riche en électrons : doublet non liant, liaison multiple, charge $-$).<br><strong>Site accepteur</strong> (pauvre en électrons : atome lié à un élément électronégatif, charge $+$).<br>Identifier ces sites repose sur l'<strong>électronégativité</strong> et les charges/lacunes.` },
        { type:'def', label:'DEF', titre:'Flèche courbe',
          contenu:`Une <strong>flèche courbe</strong> représente le mouvement d'un <strong>doublet d'électrons</strong> lors d'une étape élémentaire.<br>Elle part toujours d'un <strong>site donneur</strong> (doublet ou liaison) et pointe vers un <strong>site accepteur</strong>.<br>Elle permet de modéliser la formation et la rupture des liaisons (déplacement électronique).` },
        { type:'meth', label:'METH', titre:'Écrire un mécanisme avec flèches courbes',
          contenu:`<strong>1.</strong> Repérer les sites donneurs et accepteurs des réactifs.<br><strong>2.</strong> Tracer une flèche courbe du donneur vers l'accepteur pour chaque étape.<br><strong>3.</strong> Une flèche = formation d'une liaison ; départ d'un doublet liant = rupture.<br><strong>4.</strong> Vérifier la conservation des éléments et des charges entre réactifs et produits.` },
        { type:'ex', label:'EX', titre:'Exemple : substitution nucléophile',
          contenu:`Réaction $\\mathrm{HO^-} + \\mathrm{CH_3Br} \\rightarrow \\mathrm{CH_3OH} + \\mathrm{Br^-}$.<br>Site donneur : doublet de $\\mathrm{HO^-}$. Site accepteur : carbone lié au brome (polarisé $\\delta^+$ car Br électronégatif).<br>Flèche 1 : doublet de $\\mathrm{HO^-} \\to$ carbone. Flèche 2 : liaison C–Br $\\to$ Br (qui part en $\\mathrm{Br^-}$).` },
      ]
    },
    {
      titre: 'Sélectivité et protection',
      cartes: [
        { type:'def', label:'DEF', titre:'Réaction sélective',
          contenu:`Une réaction est <strong>sélective</strong> quand un réactif ne transforme qu'un seul type de groupe caractéristique parmi plusieurs présents dans une molécule polyfonctionnelle.<br>Exemple : un réducteur doux peut réduire un aldéhyde sans toucher à un ester. La sélectivité oriente le choix des réactifs.` },
        { type:'meth', label:'METH', titre:'Protection / déprotection d\'un groupe',
          contenu:`Quand un groupe risque de réagir de façon indésirable :<br><strong>1.</strong> <strong>Protéger</strong> le groupe sensible (le transformer temporairement en groupe inerte).<br><strong>2.</strong> Réaliser la réaction voulue sur l'autre site.<br><strong>3.</strong> <strong>Déprotéger</strong> pour régénérer le groupe initial.<br>Stratégie indispensable en synthèse multi-étapes (peptides, sucres).` },
        { type:'ex', label:'EX', titre:'Exemple : intérêt de la protection',
          contenu:`Pour faire réagir un alcool d'une molécule possédant aussi un aldéhyde, on protège l'aldéhyde (sous forme d'acétal) afin qu'il ne réagisse pas, on transforme l'alcool, puis on régénère l'aldéhyde par hydrolyse.<br>Cela évite des réactions parasites et améliore le rendement et la sélectivité globale.` },
        { type:'prop', label:'PROP', titre:'Critères d\'une « chimie verte »',
          contenu:`Une synthèse éco-responsable vise à :<br><ul><li>maximiser l'<strong>économie d'atomes</strong> (peu de sous-produits) ;</li><li>limiter solvants et réactifs toxiques ;</li><li>privilégier la <strong>catalyse</strong> et les conditions douces ;</li><li>réduire la consommation d'énergie et la production de déchets.</li></ul>` },
      ]
    },
  ]
},

];
