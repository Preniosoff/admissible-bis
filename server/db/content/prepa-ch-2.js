// Prépa CPGE — Chimie (lot 2)
// Programmes officiels 2021/2022 des classes préparatoires scientifiques
// (MPSI/MP, PCSI/PC, PTSI/PT, PSI, TSI, MPI, BCPST)
// matière : ch · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// ÉQUILIBRES ACIDO-BASIQUES
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-acido', matiere: 'ch',
  titre: 'Équilibres acido-basiques', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Acides et bases de Brønsted',
      cartes: [
        { type:'def', label:'DEF', titre:'Couple acide-base de Brønsted',
          contenu:`Selon <strong>Brønsted</strong>, un <strong>acide</strong> est une espèce capable de céder un proton $H^+$, une <strong>base</strong> une espèce capable d'en capter un. À tout acide $AH$ est associée sa base conjuguée $A^-$ formant un <strong>couple</strong> $AH/A^-$ :<br>$$AH \\rightleftharpoons A^- + H^+$$<br>Le proton n'existe jamais libre en solution aqueuse : il est solvaté sous forme d'ion <strong>oxonium</strong> $H_3O^+$. Une réaction acido-basique est un <strong>échange de proton</strong> entre l'acide d'un couple et la base d'un autre couple.` },
        { type:'def', label:'DEF', titre:'Constante d\'acidité $K_a$',
          contenu:`La constante d'acidité du couple $AH/A^-$ est la constante d'équilibre de la réaction de l'acide avec l'eau :<br>$$AH + H_2O \\rightleftharpoons A^- + H_3O^+ \\qquad K_a = \\frac{[A^-]\\,[H_3O^+]}{[AH]}$$<br>(les concentrations sont rapportées à $c^\\circ = 1$ mol/L). On pose $pK_a = -\\log K_a$. Plus $K_a$ est <strong>grand</strong> (donc $pK_a$ petit), plus l'acide est <strong>fort</strong> : il cède facilement son proton.` },
        { type:'prop', label:'PROP', titre:'Produit ionique de l\'eau et $K_e$',
          contenu:`L'eau est un <strong>ampholyte</strong> ; son autoprotolyse $2\\,H_2O \\rightleftharpoons H_3O^+ + OH^-$ a pour constante le <strong>produit ionique</strong> :<br>$$K_e = [H_3O^+]\\,[OH^-] = 10^{-14} \\;\\text{ à } 25\\,°\\mathrm{C}, \\qquad pK_e = 14$$<br>Pour les couples conjugués $AH/A^-$, on a $K_a \\cdot K_b = K_e$, soit $pK_a + pK_b = 14$. À 25 °C : solution neutre $pH = 7$, acide $pH < 7$, basique $pH > 7$.` },
        { type:'def', label:'DEF', titre:'Force des acides et nivellement',
          contenu:`Un <strong>acide fort</strong> ($pK_a < 0$) est totalement dissocié dans l'eau ($HCl$, $H_2SO_4$ première acidité, $HNO_3$) ; une <strong>base forte</strong> ($pK_a > 14$) réagit totalement ($HO^-$, $NH_2^-$).<br>Tout acide plus fort que $H_3O^+$ est ramené à $H_3O^+$ : c'est l'<strong>effet de nivellement</strong> du solvant. L'eau ne distingue donc pas les acides forts entre eux ; sa <strong>fenêtre d'acidité</strong> utile s'étend de $pK_a = 0$ ($H_3O^+/H_2O$) à $pK_a = 14$ ($H_2O/OH^-$).` },
      ]
    },

    {
      titre: 'Calcul du pH des solutions',
      cartes: [
        { type:'def', label:'DEF', titre:'Définition du pH',
          contenu:`Le potentiel hydrogène est défini par :<br>$$pH = -\\log\\!\\left(\\frac{[H_3O^+]}{c^\\circ}\\right), \\qquad [H_3O^+] = c^\\circ\\,10^{-pH}$$<br>Sa détermination repose sur trois familles de relations : <strong>équilibres</strong> ($K_a$, $K_e$), <strong>conservation de la matière</strong> (bilan), <strong>électroneutralité</strong> de la solution. La résolution exacte se fait souvent par approximations successives validées <em>a posteriori</em>.` },
        { type:'form', label:'FORM', titre:'Acide fort, base forte',
          contenu:`<strong>Acide fort</strong> de concentration $C$ (avec $C \\gg 10^{-6{,}5}$ mol/L pour négliger l'autoprotolyse) :<br>$$[H_3O^+] = C \\;\\Rightarrow\\; pH = -\\log C$$<br><strong>Base forte</strong> de concentration $C$ :<br>$$[OH^-] = C \\;\\Rightarrow\\; pH = 14 + \\log C$$<br>Pour les solutions très diluées ($C \\lesssim 10^{-6}$ mol/L), il faut tenir compte de $K_e$ et $pH \\to 7$.` },
        { type:'form', label:'FORM', titre:'Acide faible de concentration $C$',
          contenu:`Pour un acide faible $AH$ apporté à $C$, si la dissociation est faible (et l'autoprotolyse négligeable) :<br>$$pH \\approx \\frac{1}{2}\\left(pK_a - \\log C\\right)$$<br>Le <strong>taux de dissociation</strong> vaut $\\alpha = \\sqrt{K_a/C}$. <strong>Validité</strong> : $\\alpha \\ll 1$, c'est-à-dire $C/K_a > 100$ environ. Sinon résoudre l'équation $[H_3O^+]^2 + K_a[H_3O^+] - K_a C = 0$.` },
        { type:'form', label:'FORM', titre:'Base faible, ampholyte',
          contenu:`<strong>Base faible</strong> $A^-$ apportée à $C$ (couple de $pK_a$) :<br>$$pH \\approx \\frac{1}{2}\\left(pK_e + pK_a + \\log C\\right)$$<br><strong>Ampholyte</strong> $HA^-$ d'un diacide de constantes $pK_{a1}$ et $pK_{a2}$ (entre les deux acidités) :<br>$$pH \\approx \\frac{1}{2}\\left(pK_{a1} + pK_{a2}\\right)$$<br>Remarquable : ce pH est <strong>indépendant</strong> de la concentration tant que celle-ci n'est pas trop faible.` },
        { type:'meth', label:'METH', titre:'Méthode de la réaction prépondérante',
          contenu:`<strong>1.</strong> Recenser toutes les espèces et leurs couples avec les $pK_a$ sur une échelle.<br><strong>2.</strong> Identifier la <strong>réaction prépondérante</strong> (RP) : l'acide le plus fort présent réagit avec la base la plus forte présente (plus grande différence de $pK_a$, donc plus grand $K$).<br><strong>3.</strong> Dresser le tableau d'avancement de la RP ; en déduire l'état final majoritaire.<br><strong>4.</strong> Calculer le pH à partir de cet état, puis <strong>vérifier</strong> que les autres réactions sont effectivement négligeables.` },
      ]
    },

    {
      titre: 'Diagrammes de prédominance et de distribution',
      cartes: [
        { type:'prop', label:'PROP', titre:'Diagramme de prédominance',
          contenu:`En réécrivant $K_a$ sous forme logarithmique :<br>$$pH = pK_a + \\log\\frac{[A^-]}{[AH]}$$<br>On en déduit l'espèce <strong>prédominante</strong> :<br><ul><li>si $pH < pK_a$ : $[AH] > [A^-]$, l'<strong>acide</strong> prédomine ;</li><li>si $pH > pK_a$ : la <strong>base</strong> $A^-$ prédomine ;</li><li>si $pH = pK_a$ : $[AH] = [A^-]$ (égalité, point de demi-équivalence).</li></ul>La frontière du diagramme est donc située à $pH = pK_a$.` },
        { type:'def', label:'DEF', titre:'Diagramme de distribution',
          contenu:`Le diagramme de distribution représente les <strong>pourcentages molaires</strong> (fractions $\\delta_i$) de chaque espèce du système en fonction du pH. Pour un monoacide :<br>$$\\delta_{AH} = \\frac{[AH]}{C} = \\frac{1}{1 + 10^{\\,pH - pK_a}}, \\qquad \\delta_{A^-} = \\frac{1}{1 + 10^{\\,pK_a - pH}}$$<br>Les deux courbes se <strong>croisent à 50 %</strong> pour $pH = pK_a$. Elles permettent de lire directement la composition d'une solution à un pH donné.` },
        { type:'prop', label:'PROP', titre:'Polyacides : diagrammes successifs',
          contenu:`Un polyacide $H_2A$ présente plusieurs $pK_a$ ($pK_{a1} < pK_{a2}$) délimitant des <strong>domaines successifs</strong> : $H_2A$ ($pH < pK_{a1}$), $HA^-$ ($pK_{a1} < pH < pK_{a2}$), $A^{2-}$ ($pH > pK_{a2}$).<br>Les domaines des formes extrêmes $H_2A$ et $A^{2-}$ sont <strong>disjoints</strong> si $pK_{a2} - pK_{a1} > 2{,}6$ environ : la forme intermédiaire est alors la seule majoritaire dans tout un intervalle (cas des polyacides bien séparés).` },
        { type:'ex', label:'EX', titre:'Diagramme de l\'acide phosphorique',
          contenu:`$H_3PO_4$ possède trois acidités : $pK_{a1} = 2{,}1$, $pK_{a2} = 7{,}2$, $pK_{a3} = 12{,}4$.<br>À <strong>pH physiologique</strong> ($pH = 7{,}4$), on se situe juste au-dessus de $pK_{a2}$ : les espèces prédominantes sont $H_2PO_4^-$ et $HPO_4^{2-}$ en proportions comparables. C'est précisément ce couple, de $pK_a$ proche de 7, qui constitue le <strong>tampon phosphate</strong> intracellulaire.` },
      ]
    },

    {
      titre: 'Solutions tampons',
      cartes: [
        { type:'def', label:'DEF', titre:'Solution tampon',
          contenu:`Une <strong>solution tampon</strong> est un mélange en proportions voisines d'un acide faible $AH$ et de sa base conjuguée $A^-$. Elle possède deux propriétés :<br><ul><li>son pH varie <strong>peu</strong> par addition modérée d'acide fort ou de base forte ;</li><li>son pH varie <strong>peu</strong> par <strong>dilution</strong>.</li></ul>Ces propriétés résultent de la présence simultanée des deux formes du couple, capables d'absorber respectivement les ions $HO^-$ et $H_3O^+$ ajoutés.` },
        { type:'form', label:'FORM', titre:'Relation de Henderson-Hasselbalch',
          contenu:`Pour un tampon constitué de $C_a$ d'acide $AH$ et $C_b$ de base $A^-$ :<br>$$pH = pK_a + \\log\\frac{C_b}{C_a}$$<br>Le pH du tampon est donc fixé par le $pK_a$ du couple et le rapport des concentrations. Pour $C_a = C_b$ : $pH = pK_a$. La zone d'efficacité est $|pH - pK_a| \\le 1$ (rapport entre $1/10$ et $10$).` },
        { type:'prop', label:'PROP', titre:'Pouvoir tampon',
          contenu:`Le <strong>pouvoir tampon</strong> $\\beta = \\dfrac{\\mathrm{d}n_b}{\\mathrm{d}(pH)}$ mesure la quantité de base forte nécessaire pour faire varier le pH d'une unité.<br>Il est <strong>maximal</strong> lorsque $pH = pK_a$ (mélange équimolaire) et croît avec la concentration totale du tampon. Un bon tampon associe donc un couple de $pK_a$ proche du pH visé et des concentrations élevées.` },
        { type:'meth', label:'METH', titre:'Préparer un tampon de pH donné',
          contenu:`<strong>1.</strong> Choisir un couple $AH/A^-$ de $pK_a$ aussi proche que possible du pH souhaité.<br><strong>2.</strong> Fixer le rapport $C_b/C_a = 10^{\\,pH - pK_a}$ par Henderson-Hasselbalch.<br><strong>3.</strong> Réaliser le mélange, soit en pesant $AH$ et $A^-$, soit en neutralisant partiellement l'acide par une base forte jusqu'au rapport voulu (méthode usuelle au laboratoire).<br><strong>4.</strong> Concentration totale élevée pour un fort pouvoir tampon.` },
      ]
    },

    {
      titre: 'Réactions et titrages acido-basiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Réaction de titrage',
          contenu:`Un <strong>titrage</strong> (dosage) consiste à déterminer une quantité de matière inconnue par réaction avec un réactif de concentration connue (le titrant). La réaction support doit être <strong>quasi-totale</strong> ($K \\gg 10^3$), <strong>rapide</strong> et <strong>univoque</strong>.<br>À l'<strong>équivalence</strong>, les réactifs sont introduits dans les proportions stœchiométriques : $\\dfrac{n_{\\text{titré}}}{\\nu_{\\text{titré}}} = \\dfrac{n_{\\text{titrant}}}{\\nu_{\\text{titrant}}}$. C'est le repérage de ce point qui donne le résultat.` },
        { type:'prop', label:'PROP', titre:'pH aux points remarquables',
          contenu:`Selon la nature des espèces titrées :<br><ul><li><strong>Acide fort par base forte</strong> : à l'équivalence $pH_{eq} = 7$ ;</li><li><strong>Acide faible par base forte</strong> : à l'équivalence $pH_{eq} = \\tfrac12(pK_e + pK_a)$ (milieu <strong>basique</strong>) ; à la demi-équivalence $pH = pK_a$ ;</li><li><strong>Base faible par acide fort</strong> : à l'équivalence $pH_{eq} = \\tfrac12\\,pK_a$ (milieu <strong>acide</strong>).</li></ul>La <strong>demi-équivalence</strong> fournit ainsi une mesure directe du $pK_a$.` },
        { type:'meth', label:'METH', titre:'Suivi pH-métrique',
          contenu:`On trace $pH = f(V_{\\text{versé}})$. L'équivalence se repère au <strong>saut de pH</strong> (point d'inflexion à pente maximale).<br><strong>Méthode des tangentes</strong> ou, plus précisément, <strong>méthode de la dérivée</strong> : $\\dfrac{\\mathrm{d}(pH)}{\\mathrm{d}V}$ passe par un extremum à $V_{eq}$.<br>Un acide faible donne un saut <strong>moins net</strong> qu'un acide fort, précédé d'un palier tampon (plateau au voisinage de $pH = pK_a$) bien visible à la demi-équivalence.` },
        { type:'meth', label:'METH', titre:'Suivi conductimétrique',
          contenu:`La conductivité $\\sigma = \\sum_i \\lambda_i\\,c_i$ varie linéairement par morceaux ; l'équivalence est l'<strong>intersection des deux droites</strong>.<br>L'allure dépend des ions échangés. Exemple ($HCl$ par $NaOH$) : avant l'équivalence, les ions $H_3O^+$ très mobiles ($\\lambda$ élevé) sont remplacés par $Na^+$ moins mobiles $\\Rightarrow$ $\\sigma$ <strong>décroît</strong> ; après, l'excès de $HO^-$ fait <strong>remonter</strong> $\\sigma$. Avantage : pas besoin de saut de pH, adapté aux réactions peu favorables.` },
        { type:'prop', label:'PROP', titre:'Choix d\'un indicateur coloré',
          contenu:`Un <strong>indicateur coloré</strong> est lui-même un couple $HIn/In^-$ de deux teintes, de constante $pK_{In}$. Sa <strong>zone de virage</strong> s'étend sur $[pK_{In} - 1\\,;\\,pK_{In} + 1]$.<br><strong>Règle</strong> : choisir un indicateur dont la zone de virage <strong>contient le pH à l'équivalence</strong> (ou est traversée par le saut de pH). Exemples : hélianthine ($pK_{In} \\approx 3{,}7$), bleu de bromothymol ($\\approx 7$), phénolphtaléine ($\\approx 9{,}5$).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// PRÉCIPITATION ET COMPLEXATION
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-precip', matiere: 'ch',
  titre: 'Précipitation et complexation', ordre: 5, enrich: true,
  sections: [

    {
      titre: 'Produit de solubilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Produit de solubilité $K_s$',
          contenu:`Un solide ionique peu soluble $M_pX_q$ est en équilibre avec ses ions :<br>$$M_pX_q(s) \\rightleftharpoons p\\,M^{q+}(aq) + q\\,X^{p-}(aq)$$<br>La constante de cet équilibre de <strong>dissolution</strong> est le produit de solubilité :<br>$$K_s = [M^{q+}]^p\\,[X^{p-}]^q$$<br>(l'activité du solide vaut 1). On pose $pK_s = -\\log K_s$. Le solide n'intervient pas dans l'expression, mais sa <strong>présence</strong> est nécessaire pour que l'équilibre existe.` },
        { type:'def', label:'DEF', titre:'Solubilité',
          contenu:`La <strong>solubilité</strong> $s$ est la quantité maximale de solide que l'on peut dissoudre par litre de solution (en mol/L), à l'équilibre avec le solide. Pour $M_pX_q$ se dissolvant seul dans l'eau pure :<br>$$[M^{q+}] = p\\,s, \\quad [X^{p-}] = q\\,s \\;\\Rightarrow\\; K_s = p^p\\,q^q\\,s^{\\,p+q}$$<br>Exemple ($AgCl$, $p=q=1$) : $K_s = s^2$, donc $s = \\sqrt{K_s}$. Pour $Ag_2CrO_4$ : $K_s = 4s^3$.` },
        { type:'prop', label:'PROP', titre:'Condition de précipitation',
          contenu:`On forme le <strong>quotient de réaction</strong> (produit ionique) $Q = [M^{q+}]^p\\,[X^{p-}]^q$ avec les concentrations <strong>réelles</strong> en solution :<br><ul><li>si $Q < K_s$ : solution <strong>non saturée</strong>, le solide (s'il était présent) se dissout, pas de précipité ;</li><li>si $Q = K_s$ : solution <strong>saturée</strong>, équilibre, apparition limite du précipité ;</li><li>si $Q > K_s$ : <strong>précipitation</strong> jusqu'à revenir à $Q = K_s$.</li></ul>` },
        { type:'meth', label:'METH', titre:'Tester l\'existence d\'un précipité',
          contenu:`<strong>1.</strong> Supposer le solide <strong>absent</strong> et calculer les concentrations des ions à partir des quantités introduites (et des éventuels autres équilibres).<br><strong>2.</strong> Calculer $Q$ avec ces concentrations.<br><strong>3.</strong> Comparer à $K_s$. Si $Q \\le K_s$ : pas de précipité, l'hypothèse est validée. Si $Q > K_s$ : le précipité existe, reprendre le calcul <strong>avec</strong> l'équilibre de précipitation imposant $Q = K_s$.` },
      ]
    },

    {
      titre: 'Facteurs influençant la solubilité',
      cartes: [
        { type:'prop', label:'PROP', titre:'Effet d\'ion commun',
          contenu:`La présence en solution d'un ion <strong>commun</strong> au solide (apporté par un autre sel très soluble) <strong>diminue</strong> la solubilité.<br>Exemple : solubilité de $AgCl$ dans une solution de $NaCl$ de concentration $c$. Si $c \\gg s$ :<br>$$s \\approx \\frac{K_s}{c} \\ll \\sqrt{K_s}$$<br>C'est le déplacement de l'équilibre dans le sens de la précipitation (Le Chatelier). On l'exploite pour précipiter <strong>quantitativement</strong> un ion en ajoutant un excès de réactif.` },
        { type:'prop', label:'PROP', titre:'Influence du pH',
          contenu:`Lorsque l'anion du précipité est une <strong>base faible</strong> (hydroxyde, carbonate, sulfure...), une diminution du pH la protone et déplace l'équilibre vers la <strong>dissolution</strong>.<br>Exemple : $CaCO_3$ se dissout en milieu acide car $CO_3^{2-} + H_3O^+ \\to HCO_3^- + H_2O$ consomme l'anion. De même, de nombreux hydroxydes métalliques $M(OH)_n$ ne précipitent qu'au-dessus d'un certain pH (début de précipitation). La solubilité est ainsi <strong>fonction du pH</strong>.` },
        { type:'prop', label:'PROP', titre:'Influence de la complexation',
          contenu:`La formation d'un <strong>complexe</strong> soluble avec le cation déplace l'équilibre de précipitation vers la dissolution. C'est la <strong>redissolution par excès de réactif</strong>.<br>Exemple : $AgCl(s)$ précipité se redissout dans l'ammoniac par formation de $[Ag(NH_3)_2]^+$ ; $Cu(OH)_2$ se redissout en bleu intense dans $NH_3$ excès via $[Cu(NH_3)_4]^{2+}$. La solubilité augmente alors fortement.` },
        { type:'ex', label:'EX', titre:'Précipitation sélective',
          contenu:`Une solution contient $Cl^-$ et $CrO_4^{2-}$ à $0{,}1$ mol/L. On ajoute progressivement $Ag^+$. Avec $pK_s(AgCl) = 9{,}7$ et $pK_s(Ag_2CrO_4) = 11{,}9$ :<br>$AgCl$ précipite dès $[Ag^+] = K_s/[Cl^-] \\approx 2\\cdot10^{-9}$ mol/L, bien <strong>avant</strong> $Ag_2CrO_4$ ($[Ag^+] = \\sqrt{K_s/[CrO_4^{2-}]} \\approx 1{,}1\\cdot10^{-5}$ mol/L).<br>On précipite donc <strong>sélectivement</strong> le chlorure : c'est le fondement de la méthode de Mohr.` },
      ]
    },

    {
      titre: 'Les complexes : formation et stabilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Complexe et ligands',
          contenu:`Un <strong>complexe</strong> est un édifice $ML_n$ formé d'un cation métallique central $M$ (accepteur de doublets) lié à $n$ <strong>ligands</strong> $L$ (donneurs de doublets, bases de Lewis). $n$ est l'<strong>indice de coordination</strong>.<br>Les ligands peuvent être <strong>monodentes</strong> ($NH_3$, $Cl^-$, $CN^-$, $H_2O$) ou <strong>polydentes</strong> (l'EDTA est hexadente). La liaison métal-ligand est une liaison de <strong>coordination</strong> (covalence dative).` },
        { type:'def', label:'DEF', titre:'Constantes de formation $\\beta_n$ et $K_d$',
          contenu:`La <strong>constante de formation globale</strong> du complexe $ML_n$ :<br>$$M + n\\,L \\rightleftharpoons ML_n \\qquad \\beta_n = \\frac{[ML_n]}{[M]\\,[L]^n}$$<br>La <strong>constante de dissociation</strong> est son inverse : $K_d = 1/\\beta_n$, et $pK_d = \\log\\beta_n$. Plus $\\beta_n$ est grand (donc $K_d$ petit), plus le complexe est <strong>stable</strong>. On définit aussi les constantes <strong>successives</strong> $K_{f,i}$ d'ajout d'un ligand, avec $\\beta_n = K_{f,1}K_{f,2}\\cdots K_{f,n}$.` },
        { type:'prop', label:'PROP', titre:'Diagramme de prédominance (en $pL$)',
          contenu:`Pour le couple $ML/M$ de constante $K_f$, en posant $pL = -\\log[L]$ :<br>$$pL = \\log K_f + \\log\\frac{[M]}{[ML]}$$<br>Frontière à $pL = \\log K_f$ : pour $pL < \\log K_f$ (ligand abondant) le <strong>complexe $ML$</strong> prédomine ; pour $pL > \\log K_f$ (ligand rare) l'<strong>ion libre $M$</strong> prédomine. On construit ainsi des diagrammes de prédominance analogues à ceux des acides, avec $pL$ comme variable.` },
        { type:'ex', label:'EX', titre:'Complexe diammine d\'argent',
          contenu:`Pour $Ag^+ + 2\\,NH_3 \\rightleftharpoons [Ag(NH_3)_2]^+$, on donne $\\log\\beta_2 = 7{,}2$.<br>Dans une solution où $[NH_3] = 0{,}1$ mol/L, le rapport $\\dfrac{[Ag(NH_3)_2^+]}{[Ag^+]} = \\beta_2\\,[NH_3]^2 = 10^{7{,}2}\\times10^{-2} = 10^{5{,}2}$ : l'argent est <strong>quasi totalement complexé</strong>. C'est ce qui permet la redissolution de $AgCl$ dans l'ammoniac.` },
      ]
    },

    {
      titre: 'Réactions de compétition',
      cartes: [
        { type:'prop', label:'PROP', titre:'Méthode générale de compétition',
          contenu:`Lorsqu'un même ion peut participer à plusieurs équilibres (précipitation, complexation, acido-basicité), on compare les réactions par leurs <strong>constantes</strong>.<br>La réaction <strong>prépondérante</strong> est la plus favorable thermodynamiquement. Pour comparer une dissolution et une complexation, on combine les équilibres : la constante de la réaction globale est le <strong>produit</strong> (ou rapport) des constantes individuelles.` },
        { type:'ex', label:'EX', titre:'Compétition précipitation / complexation',
          contenu:`Redissolution de $AgCl$ par l'ammoniac : on somme les deux équilibres<br>$$AgCl(s) \\rightleftharpoons Ag^+ + Cl^- \\quad (K_s)$$<br>$$Ag^+ + 2NH_3 \\rightleftharpoons Ag(NH_3)_2^+ \\quad (\\beta_2)$$<br>Bilan : $AgCl(s) + 2NH_3 \\rightleftharpoons Ag(NH_3)_2^+ + Cl^-$, de constante $K = K_s\\,\\beta_2 = 10^{-9{,}7}\\times10^{7{,}2} = 10^{-2{,}5}$. $K$ faible : la redissolution exige un <strong>excès</strong> d'ammoniac.` },
        { type:'prop', label:'PROP', titre:'Échange de ligands et de cations',
          contenu:`Deux complexes peuvent <strong>échanger</strong> un ligand : le ligand se fixe préférentiellement sur le cation formant le complexe le plus stable (plus grand $\\beta$). De même, un ligand donné est capté par le cation de plus grande affinité.<br>La réaction d'échange a pour constante le <strong>rapport</strong> des $\\beta$ ; elle est totale si ce rapport est très grand. C'est le principe de nombreux <strong>masquages</strong> sélectifs en analyse.` },
        { type:'ex', label:'EX', titre:'Compétition entre deux cations pour l\'EDTA',
          contenu:`L'EDTA (noté $Y^{4-}$) forme des complexes $1{:}1$ très stables. Avec $\\log\\beta(CaY^{2-}) = 10{,}7$ et $\\log\\beta(MgY^{2-}) = 8{,}7$, l'EDTA complexe <strong>préférentiellement</strong> $Ca^{2+}$. Dans un mélange, l'ajout progressif d'EDTA sature d'abord $Ca^{2+}$, puis $Mg^{2+}$, ce qui permet leur dosage <strong>séparé</strong> par contrôle du pH.` },
      ]
    },

    {
      titre: 'Diagrammes d\'existence',
      cartes: [
        { type:'def', label:'DEF', titre:'Diagramme d\'existence d\'un précipité',
          contenu:`Pour un précipité dont l'anion dépend du pH (ou d'un paramètre $pL$), on trace la frontière d'<strong>apparition du solide</strong> dans le plan ($\\log C$, pH) ou ($pL$, paramètre).<br>D'un côté de la frontière, le solide <strong>existe</strong> ; de l'autre, seules les espèces dissoutes sont présentes. La frontière correspond à $Q = K_s$, c'est-à-dire à la saturation. Sa pente se déduit de l'expression de $K_s$ écrite en logarithme.` },
        { type:'prop', label:'PROP', titre:'Frontière de précipitation d\'un hydroxyde',
          contenu:`Pour $M(OH)_n(s) \\rightleftharpoons M^{n+} + n\\,OH^-$, à la limite de précipitation $K_s = [M^{n+}][OH^-]^n$ donne :<br>$$\\log[M^{n+}] = \\log K_s + n\\,pK_e - n\\,pH$$<br>La frontière dans le plan ($\\log[M^{n+}]$, pH) est une <strong>droite de pente $-n$</strong>. À concentration fixée, on en déduit le <strong>pH de début de précipitation</strong> de l'hydroxyde.` },
        { type:'prop', label:'PROP', titre:'Hydroxydes amphotères',
          contenu:`Certains hydroxydes ($Al(OH)_3$, $Zn(OH)_2$) sont <strong>amphotères</strong> : ils précipitent dans une fenêtre de pH puis se <strong>redissolvent</strong> en milieu très basique par formation d'un complexe hydroxo (aluminate $Al(OH)_4^-$, zincate $Zn(OH)_4^{2-}$).<br>Le diagramme d'existence présente alors un <strong>domaine fermé</strong> du solide, encadré par le domaine du cation (bas pH) et celui de l'anion complexe (haut pH).` },
      ]
    },

    {
      titre: 'Dosages par précipitation et complexométrie',
      cartes: [
        { type:'def', label:'DEF', titre:'Dosage par précipitation',
          contenu:`Un <strong>dosage par précipitation</strong> repose sur une réaction de précipitation quasi-totale entre l'ion à doser et le titrant. L'équivalence correspond à la disparition (ou l'apparition limite) du précipité.<br>Exemple type : dosage des halogénures par $Ag^+$ (<strong>argentimétrie</strong>). La réaction $Ag^+ + Cl^- \\to AgCl(s)$ a une constante $1/K_s = 10^{9{,}7}$, donc quasi-totale.` },
        { type:'meth', label:'METH', titre:'Méthode de Mohr',
          contenu:`Dosage de $Cl^-$ par $Ag^+$ avec $CrO_4^{2-}$ comme <strong>indicateur de fin de réaction</strong>.<br>Tant qu'il reste $Cl^-$, $AgCl$ (blanc) précipite. À l'<strong>équivalence</strong>, $[Ag^+]$ augmente brusquement et $Ag_2CrO_4$ (rouge brique) précipite à son tour, signalant la fin.<br>Conditions : milieu <strong>neutre</strong> (pH 6,5–10) pour que $CrO_4^{2-}$ ne soit ni protoné ni l'argent précipité en oxyde.` },
        { type:'meth', label:'METH', titre:'Suivi conductimétrique d\'une précipitation',
          contenu:`Le dosage de $Ag^+$ (ou $Cl^-$) peut se suivre par <strong>conductimétrie</strong> : on remplace des ions par d'autres de mobilités différentes, et les ions précipités <strong>quittent</strong> la solution.<br>L'équivalence est l'intersection de deux segments de droite, repérée sans indicateur coloré. Méthode robuste pour les solutions colorées ou troubles.` },
        { type:'meth', label:'METH', titre:'Dosage complexométrique à l\'EDTA',
          contenu:`L'<strong>EDTA</strong> forme avec la plupart des cations $M^{2+}/M^{3+}$ un complexe $1{:}1$ très stable. Le dosage donne directement la quantité de cation (réaction $M + Y^{4-} \\to MY$).<br>Détection par <strong>indicateur métallochrome</strong> (NET, murexide) : libre il est d'une couleur, complexé au métal d'une autre. À l'équivalence, l'EDTA arrache le métal à l'indicateur qui <strong>vire</strong>. Le pH est tamponné pour garantir la stabilité du complexe (dosage de la <strong>dureté</strong> de l'eau).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// THERMODYNAMIQUE CHIMIQUE
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-thermo', matiere: 'ch',
  titre: 'Thermodynamique chimique', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Grandeurs standard de réaction',
      cartes: [
        { type:'def', label:'DEF', titre:'Avancement et grandeur de réaction',
          contenu:`Pour une réaction $\\sum_i \\nu_i A_i = 0$ (avec $\\nu_i > 0$ pour les produits, $\\nu_i < 0$ pour les réactifs), l'<strong>avancement</strong> $\\xi$ vérifie $\\mathrm{d}n_i = \\nu_i\\,\\mathrm{d}\\xi$.<br>Pour une fonction d'état extensive $X$, la <strong>grandeur de réaction</strong> est la dérivée :<br>$$\\Delta_r X = \\left(\\frac{\\partial X}{\\partial \\xi}\\right)_{T,P} = \\sum_i \\nu_i\\,X_{m,i}$$<br>L'exposant $^\\circ$ indique l'<strong>état standard</strong> (pression $P^\\circ = 1$ bar, chaque espèce dans son état de référence).` },
        { type:'def', label:'DEF', titre:'Enthalpie standard de réaction',
          contenu:`L'<strong>enthalpie standard de réaction</strong> caractérise les échanges thermiques à pression constante :<br>$$\\Delta_r H^\\circ = \\sum_i \\nu_i\\,\\Delta_f H^\\circ(A_i)$$<br>où $\\Delta_f H^\\circ$ est l'<strong>enthalpie standard de formation</strong> (réaction formant 1 mol du composé à partir des corps simples dans leur état de référence, $\\Delta_f H^\\circ = 0$ pour ces corps simples).<br>$\\Delta_r H^\\circ < 0$ : réaction <strong>exothermique</strong> ; $\\Delta_r H^\\circ > 0$ : <strong>endothermique</strong>.` },
        { type:'def', label:'DEF', titre:'Entropie standard de réaction',
          contenu:`L'<strong>entropie standard de réaction</strong> traduit la variation du désordre :<br>$$\\Delta_r S^\\circ = \\sum_i \\nu_i\\,S_m^\\circ(A_i)$$<br>Les <strong>entropies molaires absolues</strong> $S_m^\\circ$ sont positives (3<sup>e</sup> principe : $S = 0$ pour un cristal parfait à $0$ K).<br>Règle pratique : $\\Delta_r S^\\circ > 0$ si la réaction <strong>augmente le nombre de moles de gaz</strong> ($S_m^\\circ$ des gaz $\\gg$ liquides $\\gg$ solides).` },
        { type:'def', label:'DEF', titre:'Enthalpie libre standard de réaction',
          contenu:`L'<strong>enthalpie libre (énergie de Gibbs) standard de réaction</strong> combine les deux précédentes :<br>$$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\,\\Delta_r S^\\circ$$<br>C'est la grandeur qui gouverne l'évolution et l'équilibre. Elle est reliée à la constante d'équilibre par $\\Delta_r G^\\circ = -RT\\ln K^\\circ$ (voir plus loin). On peut aussi l'obtenir via les enthalpies libres standard de formation $\\Delta_f G^\\circ$.` },
      ]
    },

    {
      titre: 'Loi de Hess et dépendance en température',
      cartes: [
        { type:'th', label:'THM', titre:'Loi de Hess',
          contenu:`L'enthalpie standard de réaction ne dépend que des <strong>états initial et final</strong>, pas du chemin suivi ($H$ est une fonction d'état). On peut donc <strong>combiner</strong> linéairement des réactions :<br>si $(R) = \\sum_k a_k (R_k)$, alors $\\Delta_r H^\\circ(R) = \\sum_k a_k\\,\\Delta_r H^\\circ(R_k)$.<br>Cela permet de calculer une enthalpie de réaction inaccessible expérimentalement à partir d'un <strong>cycle</strong> de réactions connues (cycle de Hess). La loi vaut aussi pour $\\Delta_r S^\\circ$ et $\\Delta_r G^\\circ$.` },
        { type:'form', label:'FORM', titre:'Lois de Kirchhoff',
          contenu:`La dépendance en température des grandeurs standard provient des capacités thermiques :<br>$$\\frac{\\mathrm{d}\\,\\Delta_r H^\\circ}{\\mathrm{d}T} = \\Delta_r C_p^\\circ, \\qquad \\frac{\\mathrm{d}\\,\\Delta_r S^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r C_p^\\circ}{T}$$<br>avec $\\Delta_r C_p^\\circ = \\sum_i \\nu_i\\,C_{p,m}^\\circ(A_i)$. Forme intégrée :<br>$$\\Delta_r H^\\circ(T_2) = \\Delta_r H^\\circ(T_1) + \\int_{T_1}^{T_2}\\!\\Delta_r C_p^\\circ\\,\\mathrm{d}T$$` },
        { type:'prop', label:'PROP', titre:'Approximation d\'Ellingham',
          contenu:`Dans l'<strong>approximation d'Ellingham</strong>, on suppose $\\Delta_r H^\\circ$ et $\\Delta_r S^\\circ$ <strong>indépendantes de $T$</strong> (sur un domaine sans changement d'état). C'est justifié si $\\Delta_r C_p^\\circ$ est faible.<br>Alors $\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T\\,\\Delta_r S^\\circ$ est une <strong>fonction affine</strong> de $T$, de pente $-\\Delta_r S^\\circ$. Cette linéarisation est à la base des diagrammes d'Ellingham (métallurgie).` },
        { type:'form', label:'FORM', titre:'Relation de Gibbs-Helmholtz',
          contenu:`La <strong>relation de Gibbs-Helmholtz</strong> relie $\\Delta_r G^\\circ$ et $\\Delta_r H^\\circ$ :<br>$$\\frac{\\mathrm{d}}{\\mathrm{d}T}\\!\\left(\\frac{\\Delta_r G^\\circ}{T}\\right) = -\\frac{\\Delta_r H^\\circ}{T^2}$$<br>Combinée à $\\Delta_r G^\\circ = -RT\\ln K^\\circ$, elle conduit directement à la <strong>relation de Van't Hoff</strong> donnant l'évolution de la constante d'équilibre avec la température.` },
      ]
    },

    {
      titre: 'Potentiel chimique, activité et affinité',
      cartes: [
        { type:'def', label:'DEF', titre:'Potentiel chimique et activité',
          contenu:`Le <strong>potentiel chimique</strong> d'un constituant s'écrit :<br>$$\\mu_i = \\mu_i^\\circ(T) + RT\\ln a_i$$<br>où $a_i$ est l'<strong>activité</strong> :<br><ul><li>gaz parfait : $a_i = P_i/P^\\circ$ ;</li><li>soluté en solution diluée : $a_i = c_i/c^\\circ$ ;</li><li>solvant, solide ou liquide pur : $a_i = 1$.</li></ul>Le potentiel chimique est l'enthalpie libre molaire partielle ; il gouverne les transferts de matière.` },
        { type:'def', label:'DEF', titre:'Quotient de réaction',
          contenu:`Le <strong>quotient de réaction</strong> rassemble les activités à un instant donné :<br>$$Q_r = \\prod_i a_i^{\\nu_i}$$<br>L'enthalpie libre de réaction (hors standard) s'écrit alors :<br>$$\\Delta_r G = \\Delta_r G^\\circ + RT\\ln Q_r = RT\\ln\\frac{Q_r}{K^\\circ}$$<br>$Q_r$ varie au cours de la réaction, contrairement à $K^\\circ$ qui ne dépend que de $T$.` },
        { type:'th', label:'THM', titre:'Critère d\'évolution spontanée',
          contenu:`À $T$ et $P$ fixés, un système évolue dans le sens qui <strong>diminue</strong> son enthalpie libre : $\\mathrm{d}G \\le 0$, soit $\\Delta_r G\\,\\mathrm{d}\\xi \\le 0$.<br><ul><li>$\\Delta_r G < 0$ (i.e. $Q_r < K^\\circ$) : évolution dans le sens <strong>direct</strong> ;</li><li>$\\Delta_r G > 0$ (i.e. $Q_r > K^\\circ$) : évolution dans le sens <strong>indirect</strong> ;</li><li>$\\Delta_r G = 0$ (i.e. $Q_r = K^\\circ$) : <strong>équilibre</strong>.</li></ul>L'affinité chimique $\\mathcal{A} = -\\Delta_r G$ est positive dans le sens d'évolution.` },
      ]
    },

    {
      titre: 'Constante d\'équilibre et loi de Van\'t Hoff',
      cartes: [
        { type:'th', label:'THM', titre:'Relation $\\Delta_r G^\\circ = -RT\\ln K^\\circ$',
          contenu:`À l'équilibre $\\Delta_r G = 0$ et $Q_r = K^\\circ$, d'où la <strong>relation fondamentale</strong> :<br>$$\\Delta_r G^\\circ = -RT\\ln K^\\circ \\qquad \\Longleftrightarrow \\qquad K^\\circ = \\exp\\!\\left(-\\frac{\\Delta_r G^\\circ}{RT}\\right)$$<br>$K^\\circ$ ne dépend <strong>que de la température</strong>. Une réaction est d'autant plus favorable (déplacée vers les produits) que $\\Delta_r G^\\circ$ est négatif, donc que $K^\\circ$ est grand.` },
        { type:'def', label:'DEF', titre:'Constante d\'équilibre $K^\\circ$',
          contenu:`La <strong>constante d'équilibre standard</strong> est la valeur du quotient de réaction <strong>à l'équilibre</strong> :<br>$$K^\\circ(T) = \\prod_i a_{i,\\text{eq}}^{\\,\\nu_i}$$<br>Pour une réaction en phase gazeuse, $K^\\circ = \\prod_i (P_{i,\\text{eq}}/P^\\circ)^{\\nu_i}$. C'est une grandeur <strong>sans dimension</strong>. La relation $K^\\circ = K^\\circ_1 \\cdot K^\\circ_2$ pour des réactions combinées découle de l'additivité des $\\Delta_r G^\\circ$ (couplage).` },
        { type:'th', label:'THM', titre:'Relation de Van\'t Hoff',
          contenu:`La dépendance de la constante d'équilibre en température est donnée par la <strong>loi de Van't Hoff</strong> :<br>$$\\frac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{RT^2}$$<br>Forme intégrée (Ellingham, $\\Delta_r H^\\circ$ constante) :<br>$$\\ln\\frac{K^\\circ(T_2)}{K^\\circ(T_1)} = -\\frac{\\Delta_r H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$` },
        { type:'prop', label:'PROP', titre:'Sens de variation de $K^\\circ$ avec $T$',
          contenu:`Le signe de $\\Delta_r H^\\circ$ commande l'effet de la température :<br><ul><li>réaction <strong>endothermique</strong> ($\\Delta_r H^\\circ > 0$) : $K^\\circ$ <strong>croît</strong> avec $T$ ;</li><li>réaction <strong>exothermique</strong> ($\\Delta_r H^\\circ < 0$) : $K^\\circ$ <strong>décroît</strong> avec $T$.</li></ul>Cohérent avec Le Chatelier : élever $T$ favorise le sens endothermique (qui absorbe la chaleur fournie).` },
      ]
    },

    {
      titre: 'Déplacement d\'équilibre',
      cartes: [
        { type:'prop', label:'PROP', titre:'Principe de modération (Le Chatelier)',
          contenu:`<strong>Loi de Le Chatelier</strong> : tout système à l'équilibre soumis à une perturbation évolue dans le sens qui <strong>tend à s'opposer</strong> à cette perturbation (modération).<br>La méthode rigoureuse consiste à comparer $Q_r$ à $K^\\circ$ après perturbation : si $Q_r$ devient $< K^\\circ$, déplacement direct ; si $Q_r > K^\\circ$, déplacement indirect. Le principe de Le Chatelier en donne le sens qualitatif.` },
        { type:'prop', label:'PROP', titre:'Effet de la température',
          contenu:`Une <strong>augmentation de température</strong> à pression constante déplace l'équilibre dans le sens <strong>endothermique</strong> (et inversement). C'est le seul facteur qui modifie $K^\\circ$ lui-même.<br>Conséquence pour les synthèses exothermiques (Haber, $SO_2 \\to SO_3$) : un compromis est nécessaire, car baisser $T$ favorise le rendement mais ralentit la cinétique.` },
        { type:'prop', label:'PROP', titre:'Effet de la pression et des inertes',
          contenu:`À température constante, une <strong>augmentation de pression</strong> (compression) déplace l'équilibre dans le sens d'une <strong>diminution du nombre de moles de gaz</strong> $\\sum_{\\text{gaz}}\\nu_i$.<br>L'ajout d'un <strong>gaz inerte</strong> à $V$ constant ne change rien ($P_i$ inchangées) ; à $P$ totale constante, il agit comme une <strong>dilution</strong> et déplace l'équilibre vers le plus grand nombre de moles de gaz.` },
        { type:'prop', label:'PROP', titre:'Ajout d\'un constituant actif',
          contenu:`L'<strong>ajout d'un réactif</strong> (à $T$, $P$ ou $V$ fixés selon le cas) déplace généralement l'équilibre dans le sens de sa <strong>consommation</strong> (sens direct). L'ajout d'un produit déplace en sens inverse.<br>Attention : à $T$ et $P$ constants, l'analyse peut être contre-intuitive (effet de dilution sur les autres) ; la comparaison $Q_r$ vs $K^\\circ$ tranche toujours.` },
      ]
    },

    {
      titre: 'Optimisation d\'un procédé industriel',
      cartes: [
        { type:'meth', label:'METH', titre:'Optimiser le rendement d\'une synthèse',
          contenu:`<strong>1.</strong> Écrire l'équilibre et déterminer le signe de $\\Delta_r H^\\circ$ et le bilan de moles gazeuses $\\Delta n_{\\text{gaz}}$.<br><strong>2.</strong> Température : choisir le sens favorable thermodynamiquement, mais arbitrer avec la <strong>cinétique</strong> (catalyseur si possible).<br><strong>3.</strong> Pression : comprimer si la réaction diminue le nombre de moles de gaz.<br><strong>4.</strong> Composition : excès du réactif le moins cher, <strong>élimination continue</strong> du produit pour déplacer l'équilibre (Le Chatelier).` },
        { type:'ex', label:'EX', titre:'Synthèse de l\'ammoniac (Haber-Bosch)',
          contenu:`$N_2(g) + 3\\,H_2(g) \\rightleftharpoons 2\\,NH_3(g)$, $\\Delta_r H^\\circ < 0$ (exothermique) et $\\Delta n_{\\text{gaz}} = 2 - 4 = -2 < 0$.<br>Thermodynamique : une <strong>basse température</strong> et une <strong>haute pression</strong> favorisent $NH_3$. Mais à basse $T$ la réaction est trop lente : compromis vers <strong>400–500 °C</strong>, <strong>200 bar</strong>, avec catalyseur au fer. $NH_3$ est liquéfié et soutiré pour déplacer l'équilibre.` },
        { type:'ex', label:'EX', titre:'Calcul d\'un rendement à l\'équilibre',
          contenu:`Soit $A(g) \\rightleftharpoons 2\\,B(g)$ partant de $n_0$ de $A$ pur sous $P$ totale, avec un avancement $\\xi$. Quantités : $A : n_0 - \\xi$, $B : 2\\xi$, total $n_0 + \\xi$.<br>$$K^\\circ = \\frac{(P_B/P^\\circ)^2}{P_A/P^\\circ} = \\frac{4\\xi^2}{(n_0-\\xi)(n_0+\\xi)}\\cdot\\frac{P}{P^\\circ}$$<br>On résout en $\\xi$ ; le <strong>taux de dissociation</strong> $\\alpha = \\xi/n_0$ <strong>augmente</strong> quand $P$ <strong>diminue</strong> (Le Chatelier, sens du plus grand nombre de moles).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// CINÉTIQUE CHIMIQUE
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-cinetique', matiere: 'ch',
  titre: 'Cinétique chimique', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Vitesse de réaction',
      cartes: [
        { type:'def', label:'DEF', titre:'Vitesse de réaction',
          contenu:`Pour une réaction $\\sum_i \\nu_i A_i = 0$ en milieu homogène à volume constant, la <strong>vitesse volumique</strong> est définie de façon unique :<br>$$v = \\frac{1}{\\nu_i}\\frac{\\mathrm{d}[A_i]}{\\mathrm{d}t} = \\frac{1}{V}\\frac{\\mathrm{d}\\xi}{\\mathrm{d}t} \\ge 0$$<br>($\\nu_i$ algébrique : $<0$ pour les réactifs). Unité : $\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$. La vitesse de <strong>disparition</strong> d'un réactif et de <strong>formation</strong> d'un produit s'en déduisent par les coefficients stœchiométriques.` },
        { type:'def', label:'DEF', titre:'Loi de vitesse et ordre',
          contenu:`Lorsque la vitesse s'écrit sous forme monomiale :<br>$$v = k(T)\\,[A]^\\alpha\\,[B]^\\beta\\cdots$$<br>la réaction <strong>admet un ordre</strong> : $\\alpha$ est l'<strong>ordre partiel</strong> par rapport à $A$, et $n = \\alpha + \\beta + \\cdots$ l'<strong>ordre global</strong>. $k$ est la <strong>constante de vitesse</strong>.<br>L'ordre est une grandeur <strong>expérimentale</strong> : il ne se déduit <strong>pas</strong> de la stœchiométrie (sauf actes élémentaires).` },
        { type:'def', label:'DEF', titre:'Acte élémentaire et molécularité',
          contenu:`Un <strong>acte élémentaire</strong> se déroule à l'échelle moléculaire en une seule étape, sans intermédiaire. Sa <strong>molécularité</strong> est le nombre d'entités qui y participent (1, 2, rarement 3).<br><strong>Loi de Van't Hoff</strong> : pour un acte élémentaire <strong>seulement</strong>, l'ordre partiel de chaque réactif est égal à son coefficient stœchiométrique ; l'ordre global égale la molécularité.` },
      ]
    },

    {
      titre: 'Intégration des ordres simples',
      cartes: [
        { type:'form', label:'FORM', titre:'Ordre 0',
          contenu:`Pour $v = k$ (indépendante de la concentration) :<br>$$[A](t) = [A]_0 - k\\,t \\qquad t_{1/2} = \\frac{[A]_0}{2k}$$<br><strong>Identification</strong> : $[A]$ est une fonction <strong>affine décroissante</strong> du temps. Unité de $k$ : $\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$. Cas rencontré en catalyse hétérogène saturée.` },
        { type:'form', label:'FORM', titre:'Ordre 1',
          contenu:`Pour $v = k[A]$ :<br>$$[A](t) = [A]_0\\,\\mathrm{e}^{-kt} \\qquad t_{1/2} = \\frac{\\ln 2}{k}$$<br><strong>Identification</strong> : $\\ln[A]$ est <strong>affine</strong> en $t$ (pente $-k$). Le temps de demi-réaction est <strong>indépendant</strong> de $[A]_0$ (caractéristique de l'ordre 1, comme la décroissance radioactive). Unité de $k$ : $\\mathrm{s}^{-1}$.` },
        { type:'form', label:'FORM', titre:'Ordre 2',
          contenu:`Pour $v = k[A]^2$ :<br>$$\\frac{1}{[A](t)} = \\frac{1}{[A]_0} + k\\,t \\qquad t_{1/2} = \\frac{1}{k\\,[A]_0}$$<br><strong>Identification</strong> : $1/[A]$ est <strong>affine croissante</strong> en $t$ (pente $k$). Le temps de demi-réaction <strong>dépend</strong> de $[A]_0$ (il double quand $[A]_0$ est divisée par deux). Unité de $k$ : $\\mathrm{mol^{-1}\\cdot L\\cdot s^{-1}}$.` },
        { type:'meth', label:'METH', titre:'Reconnaître l\'ordre par linéarisation',
          contenu:`On dispose du suivi $[A](t)$ et l'on cherche la représentation <strong>linéaire</strong> :<br><ul><li>$[A]$ vs $t$ linéaire $\\Rightarrow$ <strong>ordre 0</strong> ;</li><li>$\\ln[A]$ vs $t$ linéaire $\\Rightarrow$ <strong>ordre 1</strong> ;</li><li>$1/[A]$ vs $t$ linéaire $\\Rightarrow$ <strong>ordre 2</strong>.</li></ul>La pente de la droite obtenue fournit $k$. On valide par le coefficient de corrélation.` },
      ]
    },

    {
      titre: 'Méthodes de détermination de l\'ordre',
      cartes: [
        { type:'meth', label:'METH', titre:'Méthode intégrale',
          contenu:`On <strong>postule</strong> un ordre, on intègre la loi de vitesse, et l'on vérifie si la représentation linéaire associée ($[A]$, $\\ln[A]$ ou $1/[A]$ vs $t$) donne une <strong>droite</strong>.<br>L'ordre retenu est celui qui linéarise correctement les données ; la pente donne $k$. Méthode adaptée quand on dispose d'un suivi temporel complet d'une expérience.` },
        { type:'meth', label:'METH', titre:'Méthode différentielle',
          contenu:`On mesure la <strong>vitesse initiale</strong> $v_0$ pour différentes concentrations initiales $[A]_0$. En écrivant $\\ln v_0 = \\ln k + \\alpha\\ln[A]_0$, le tracé de $\\ln v_0$ vs $\\ln[A]_0$ est une droite de <strong>pente l'ordre $\\alpha$</strong>.<br>Avantage : pas de produits formés au départ, pas de réactions inverses ; on accède directement à l'ordre <strong>partiel</strong>.` },
        { type:'meth', label:'METH', titre:'Dégénérescence de l\'ordre',
          contenu:`Pour isoler l'ordre par rapport à un réactif $A$, on place tous les <strong>autres en large excès</strong>. Leurs concentrations restent quasi constantes :<br>$$v = k\\,[A]^\\alpha[B]^\\beta \\approx k_{\\text{app}}\\,[A]^\\alpha, \\qquad k_{\\text{app}} = k\\,[B]_0^\\beta$$<br>On détermine alors $\\alpha$ par méthode intégrale, puis $\\beta$ par une seconde série en excès de $A$. C'est la méthode d'<strong>isolement d'Ostwald</strong>.` },
        { type:'meth', label:'METH', titre:'Exploitation du temps de demi-réaction',
          contenu:`La <strong>dépendance de $t_{1/2}$</strong> en $[A]_0$ distingue les ordres : indépendant ($\\Rightarrow$ ordre 1), proportionnel à $[A]_0$ ($\\Rightarrow$ ordre 0), inversement proportionnel ($\\Rightarrow$ ordre 2).<br>En mesurant $t_{1/2}$ pour plusieurs $[A]_0$, on identifie l'ordre sans intégrer la loi complète.` },
      ]
    },

    {
      titre: 'Influence de la température',
      cartes: [
        { type:'form', label:'FORM', titre:'Loi d\'Arrhenius',
          contenu:`La constante de vitesse dépend de la température selon la <strong>loi d'Arrhenius</strong> :<br>$$k(T) = A\\,\\exp\\!\\left(-\\frac{E_a}{RT}\\right)$$<br>$A$ est le <strong>facteur préexponentiel</strong> (ou facteur de fréquence), $E_a$ l'<strong>énergie d'activation</strong> (en $\\mathrm{J\\cdot mol^{-1}}$, toujours $\\ge 0$). La vitesse croît fortement avec $T$ : règle empirique, $k$ environ double par élévation de 10 °C.` },
        { type:'meth', label:'METH', titre:'Détermination de l\'énergie d\'activation',
          contenu:`En linéarisant : $\\ln k = \\ln A - \\dfrac{E_a}{R}\\cdot\\dfrac{1}{T}$.<br>Le tracé de $\\ln k$ en fonction de $1/T$ (<strong>graphe d'Arrhenius</strong>) est une droite de <strong>pente $-E_a/R$</strong> et d'ordonnée à l'origine $\\ln A$.<br>Pour deux températures : $\\ln\\dfrac{k_2}{k_1} = -\\dfrac{E_a}{R}\\left(\\dfrac{1}{T_2} - \\dfrac{1}{T_1}\\right)$.` },
        { type:'def', label:'DEF', titre:'Énergie d\'activation et état de transition',
          contenu:`L'<strong>énergie d'activation</strong> représente la barrière énergétique à franchir pour passer des réactifs aux produits, via un <strong>état de transition</strong> (complexe activé) de haute énergie.<br>Plus $E_a$ est grande, plus la réaction est <strong>sensible</strong> à la température et plus elle est lente à $T$ donnée. La thermodynamique ($\\Delta_r G^\\circ$) ne dit rien de $E_a$ : une réaction très favorable peut être cinétiquement <strong>bloquée</strong>.` },
      ]
    },

    {
      titre: 'Mécanismes réactionnels',
      cartes: [
        { type:'def', label:'DEF', titre:'Mécanisme et intermédiaire réactionnel',
          contenu:`Un <strong>mécanisme réactionnel</strong> décompose la réaction globale en une succession d'<strong>actes élémentaires</strong>. Leur somme redonne le bilan.<br>Un <strong>intermédiaire réactionnel</strong> (IR) est une espèce <strong>formée puis consommée</strong> au cours du mécanisme, n'apparaissant pas dans le bilan (radical, ion...). Sa concentration reste généralement <strong>faible</strong>.` },
        { type:'prop', label:'PROP', titre:'Étape cinétiquement déterminante',
          contenu:`Si un acte élémentaire est <strong>beaucoup plus lent</strong> que tous les autres, il <strong>impose</strong> sa vitesse à la réaction globale : c'est l'<strong>étape cinétiquement déterminante</strong> (ECD).<br>La loi de vitesse globale est alors celle de cette étape. Les étapes <strong>rapides antérieures</strong> sont traitées comme des <strong>pré-équilibres</strong>, ce qui permet d'exprimer les IR en fonction des réactifs.` },
        { type:'th', label:'THM', titre:'Approximation de l\'état quasi-stationnaire (AEQS)',
          contenu:`Pour un intermédiaire réactionnel $I$ <strong>très réactif</strong> (donc en faible concentration constante après une brève phase d'induction) :<br>$$\\frac{\\mathrm{d}[I]}{\\mathrm{d}t} \\approx 0$$<br>Cette <strong>AEQS</strong> (principe de Bodenstein) fournit une équation algébrique reliant $[I]$ aux concentrations des réactifs, dont on tire $[I]$ pour obtenir la loi de vitesse globale en fonction des seuls réactifs.` },
        { type:'ex', label:'EX', titre:'Mécanisme en chaîne (radicalaire)',
          contenu:`La synthèse de $HBr$ ($H_2 + Br_2 \\to 2\\,HBr$) procède par un mécanisme <strong>en chaîne</strong> : <strong>initiation</strong> ($Br_2 \\to 2\\,Br^\\bullet$), <strong>propagation</strong> ($Br^\\bullet + H_2 \\to HBr + H^\\bullet$, $H^\\bullet + Br_2 \\to HBr + Br^\\bullet$), <strong>terminaison</strong> ($2\\,Br^\\bullet \\to Br_2$).<br>L'AEQS sur $Br^\\bullet$ et $H^\\bullet$ conduit à une loi de vitesse <strong>non entière</strong>, en accord avec l'expérience.` },
      ]
    },

    {
      titre: 'Catalyse',
      cartes: [
        { type:'def', label:'DEF', titre:'Catalyseur',
          contenu:`Un <strong>catalyseur</strong> est une espèce qui <strong>accélère</strong> une réaction (en abaissant l'énergie d'activation par un nouveau chemin réactionnel) sans figurer dans le bilan : il est <strong>régénéré</strong> en fin de cycle.<br>Il ne modifie <strong>ni</strong> l'état d'équilibre, <strong>ni</strong> $K^\\circ$, <strong>ni</strong> $\\Delta_r G^\\circ$ : il accélère identiquement les sens direct et inverse. Il agit en quantité <strong>catalytique</strong> (sous-stœchiométrique).` },
        { type:'prop', label:'PROP', titre:'Catalyse homogène et hétérogène',
          contenu:`<ul><li><strong>Catalyse homogène</strong> : catalyseur et réactifs dans la <strong>même phase</strong> (ex. catalyse acido-basique en solution). Cinétique souvent d'ordre simple en catalyseur.</li><li><strong>Catalyse hétérogène</strong> : catalyseur en phase différente (solide / réactifs gazeux ou liquides). La réaction a lieu en <strong>surface</strong> (adsorption), d'où parfois un ordre apparent 0 par saturation des sites.</li></ul>` },
        { type:'def', label:'DEF', titre:'Catalyse enzymatique (Michaelis-Menten)',
          contenu:`Les <strong>enzymes</strong> sont des catalyseurs biologiques très efficaces et sélectifs. Le modèle de <strong>Michaelis-Menten</strong> ($E + S \\rightleftharpoons ES \\to E + P$, AEQS sur $ES$) donne :<br>$$v = \\frac{v_{\\max}\\,[S]}{K_M + [S]}$$<br>$K_M$ est la <strong>constante de Michaelis</strong>. Deux régimes : $[S] \\ll K_M$ (ordre 1) et $[S] \\gg K_M$ (ordre 0, vitesse maximale $v_{\\max}$).` },
        { type:'ex', label:'EX', titre:'Catalyse acide d\'une hydrolyse',
          contenu:`L'hydrolyse d'un ester est <strong>catalysée</strong> par les ions $H_3O^+$. En leur absence, la réaction est extrêmement lente ; ajoutés en faible quantité, ils ouvrent une voie de plus faible $E_a$ (protonation du carbonyle) et sont <strong>régénérés</strong>.<br>La vitesse devient proportionnelle à $[H_3O^+]$ : catalyse <strong>spécifique</strong> par les ions oxonium. L'équilibre final d'estérification/hydrolyse, lui, est <strong>inchangé</strong>.` },
      ]
    },

  ]
},

];
