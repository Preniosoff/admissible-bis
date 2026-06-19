// Prépa CPGE — Chimie
// Programmes officiels 2021/2022 des classes préparatoires scientifiques
// (MPSI/MP, PCSI/PC, PTSI/PT, PSI, TSI, MPI, BCPST)
// matière : ch · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. STRUCTURE DE LA MATIÈRE   (id: ch-ch-structure)
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-structure', matiere: 'ch',
  titre: 'Structure de la matière', ordre: 6, enrich: true,
  sections: [

    {
      titre: 'Atomistique et quantification',
      cartes: [
        { type:'def', label:'DEF', titre:'Quantification de l\'énergie',
          contenu:`Dans un atome, l'énergie d'un électron ne peut prendre que des <strong>valeurs discrètes</strong> (niveaux d'énergie). On dit que l'énergie est <strong>quantifiée</strong>.<br>Pour l'atome d'hydrogène (modèle de Bohr) :<br>$$E_n = -\\frac{E_0}{n^2}, \\qquad E_0 = 13{,}6\\ \\text{eV}, \\quad n \\in \\mathbb{N}^*$$<br>$n$ est le <strong>nombre quantique principal</strong>. L'état $n=1$ est l'état <strong>fondamental</strong> ; $n \\geq 2$ sont les états <strong>excités</strong>. La limite $n\\to\\infty$ correspond à l'<strong>ionisation</strong> ($E_\\infty = 0$).` },
        { type:'form', label:'FORM', titre:'Transitions et relation de Planck-Einstein',
          contenu:`Lors d'une transition entre deux niveaux $n_i$ et $n_f$, l'atome échange un photon d'énergie :<br>$$\\Delta E = |E_{n_f} - E_{n_i}| = h\\nu = \\frac{hc}{\\lambda}$$<br>Émission si $n_i > n_f$, absorption si $n_i < n_f$. Pour l'hydrogène :<br>$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$$<br>$R_H \\approx 1{,}097\\times 10^7\\ \\text{m}^{-1}$ est la <strong>constante de Rydberg</strong>. Constantes : $h = 6{,}63\\times 10^{-34}\\ \\text{J·s}$, $c = 3{,}00\\times 10^8\\ \\text{m·s}^{-1}$.` },
        { type:'def', label:'DEF', titre:'Nombres quantiques',
          contenu:`L'état d'un électron dans un atome est décrit par <strong>quatre nombres quantiques</strong> :<br><ul><li>$n \\in \\mathbb{N}^*$ : nombre quantique <strong>principal</strong> (couche) ;</li><li>$\\ell \\in \\{0, 1, \\dots, n-1\\}$ : <strong>secondaire / azimutal</strong> (sous-couche $s, p, d, f$) ;</li><li>$m_\\ell \\in \\{-\\ell, \\dots, +\\ell\\}$ : <strong>magnétique</strong> (orientation, $2\\ell+1$ valeurs) ;</li><li>$m_s = \\pm\\tfrac{1}{2}$ : nombre quantique <strong>de spin</strong>.</li></ul>Une <strong>orbitale atomique</strong> (OA) est définie par le triplet $(n, \\ell, m_\\ell)$ et contient au plus <strong>2 électrons</strong>.` },
        { type:'prop', label:'PROP', titre:'Principe de Pauli et règle de Hund',
          contenu:`<strong>Principe d'exclusion de Pauli</strong> : deux électrons d'un même atome ne peuvent avoir leurs quatre nombres quantiques identiques. Une OA contient donc au plus 2 électrons, de spins opposés (appariés).<br><strong>Règle de Hund</strong> : pour une sous-couche partiellement remplie, l'état fondamental correspond au <strong>maximum d'électrons célibataires</strong> (spins parallèles), occupant le plus d'OA possible.<br>Conséquence : une sous-couche se remplit d'abord avec un électron par case, puis on apparie.` },
      ]
    },

    {
      titre: 'Configuration électronique',
      cartes: [
        { type:'prop', label:'PROP', titre:'Principe de construction (Klechkowski)',
          contenu:`Les OA se remplissent par <strong>énergie croissante</strong>, suivant la <strong>règle de Klechkowski</strong> : par ordre de $(n+\\ell)$ croissant, et à $(n+\\ell)$ égal par $n$ croissant.<br>Ordre de remplissage :<br>$$1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ 6s\\ 4f\\ 5d\\ 6p\\ 7s\\dots$$<br>Noter l'inversion $4s$ avant $3d$. Les électrons de la couche de plus grand $n$ sont les électrons de <strong>valence</strong>.` },
        { type:'meth', label:'METH', titre:'Établir une configuration électronique',
          contenu:`<strong>1.</strong> Compter le nombre $Z$ d'électrons (atome neutre) ou $Z - q$ (ion de charge $q$).<br><strong>2.</strong> Remplir dans l'ordre de Klechkowski jusqu'à épuisement.<br><strong>3.</strong> Pour un <strong>cation</strong>, retirer les électrons de la couche de plus grand $n$ d'abord (et non l'ordre inverse de Klechkowski !).<br><strong>4.</strong> Surveiller les <strong>exceptions</strong> $Cr$ et $Cu$.<br><em>Exemple</em> : $Fe\\ (Z=26)$ : $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^6$. $Fe^{2+}$ : on retire les deux $4s$ → $\\dots 3p^6\\,3d^6$.` },
        { type:'ex', label:'EX', titre:'Exceptions chrome et cuivre',
          contenu:`Les configurations $\\ldots 4s^1\\,3d^5$ (chrome) et $\\ldots 4s^1\\,3d^{10}$ (cuivre) sont plus stables que celles prévues par Klechkowski, car une sous-couche $d$ <strong>demi-remplie</strong> ($d^5$) ou <strong>totalement remplie</strong> ($d^{10}$) confère une stabilité particulière.<br>$Cr\\ (Z=24)$ : $[Ar]\\,4s^1\\,3d^5$ (et non $4s^2\\,3d^4$).<br>$Cu\\ (Z=29)$ : $[Ar]\\,4s^1\\,3d^{10}$ (et non $4s^2\\,3d^9$).` },
        { type:'def', label:'DEF', titre:'Électrons de cœur et de valence',
          contenu:`Les électrons de <strong>valence</strong> sont ceux de la couche de nombre quantique principal le plus élevé, ainsi que les électrons de la sous-couche $d$ en cours de remplissage. Ce sont eux qui interviennent dans les liaisons chimiques.<br>Les électrons de <strong>cœur</strong> sont les autres (configuration du gaz noble précédent, notée entre crochets).<br><em>Exemple</em> : pour $Cl\\ (Z=17) = [Ne]\\,3s^2\\,3p^5$, les 7 électrons de valence sont $3s^2\\,3p^5$.` },
      ]
    },

    {
      titre: 'Classification périodique et propriétés',
      cartes: [
        { type:'prop', label:'PROP', titre:'Structure du tableau périodique',
          contenu:`Le tableau périodique classe les éléments par $Z$ croissant en <strong>périodes</strong> (lignes, même $n$ maximal) et <strong>groupes</strong> (colonnes, même configuration de valence).<br><ul><li><strong>Bloc s</strong> : colonnes 1-2 (alcalins, alcalino-terreux) ;</li><li><strong>Bloc p</strong> : colonnes 13-18 (dont halogènes col. 17, gaz nobles col. 18) ;</li><li><strong>Bloc d</strong> : colonnes 3-12 (métaux de transition) ;</li><li><strong>Bloc f</strong> : lanthanides et actinides.</li></ul>Les éléments d'un même groupe ont des propriétés chimiques voisines (même nombre d'électrons de valence).` },
        { type:'def', label:'DEF', titre:'Énergie d\'ionisation et affinité électronique',
          contenu:`L'<strong>énergie de première ionisation</strong> $E_{i1}$ est l'énergie nécessaire pour arracher un électron à l'atome gazeux : $X_{(g)} \\to X^+_{(g)} + e^-$, $\\Delta_r H = E_{i1} > 0$.<br>L'<strong>affinité électronique</strong> $A_e$ est l'énergie libérée lors de la capture d'un électron : $X_{(g)} + e^- \\to X^-_{(g)}$.<br><strong>Évolution</strong> : $E_{i1}$ <strong>augmente</strong> de gauche à droite sur une période et <strong>diminue</strong> de haut en bas dans un groupe (l'électron de valence est de plus en plus loin du noyau).` },
        { type:'def', label:'DEF', titre:'Électronégativité',
          contenu:`L'<strong>électronégativité</strong> $\\chi$ d'un élément mesure sa tendance à <strong>attirer les électrons</strong> d'une liaison covalente vers lui.<br>Échelle de <strong>Pauling</strong> (sans dimension). Évolution dans le tableau :<br><ul><li>elle <strong>augmente</strong> de gauche à droite sur une période ;</li><li>elle <strong>diminue</strong> de haut en bas dans un groupe.</li></ul>Le fluor est l'élément le plus électronégatif ($\\chi = 4{,}0$). Les métaux sont peu électronégatifs (électropositifs), les non-métaux le sont fortement.` },
        { type:'prop', label:'PROP', titre:'Rayon atomique et caractère métallique',
          contenu:`Le <strong>rayon atomique</strong> <strong>diminue</strong> de gauche à droite sur une période (la charge nucléaire augmente, attire davantage les électrons) et <strong>augmente</strong> de haut en bas dans un groupe (nouvelle couche).<br>Le <strong>caractère métallique</strong> (tendance à céder des électrons) suit l'inverse de l'électronégativité : il augmente de droite à gauche et de haut en bas. Les éléments les plus métalliques sont en bas à gauche (Cs, Fr).` },
      ]
    },

    {
      titre: 'Modèle de Lewis et géométrie VSEPR',
      cartes: [
        { type:'def', label:'DEF', titre:'Schéma de Lewis',
          contenu:`Le <strong>schéma de Lewis</strong> représente les électrons de valence d'une molécule : <strong>doublets liants</strong> (liaisons covalentes, traits entre atomes) et <strong>doublets non liants</strong> (paires libres sur un atome).<br>Règle de l'<strong>octet</strong> : les atomes de la 2e période (C, N, O, F) tendent à s'entourer de 8 électrons. L'hydrogène suit la règle du <strong>duet</strong> (2 électrons).<br>Au-delà de la 2e période, l'octet peut être dépassé (hypervalence : $PCl_5$, $SF_6$).` },
        { type:'meth', label:'METH', titre:'Construire un schéma de Lewis',
          contenu:`<strong>1.</strong> Compter le nombre total $N$ d'électrons de valence (somme des atomes ± charge).<br><strong>2.</strong> Calculer le nombre de doublets : $N/2$.<br><strong>3.</strong> Placer l'atome central (le moins électronégatif, sauf H), relier les atomes par des liaisons simples.<br><strong>4.</strong> Compléter les octets avec les doublets restants (d'abord en non-liants, puis en liaisons multiples si octet incomplet).<br><strong>5.</strong> Vérifier les <strong>charges formelles</strong> et choisir la forme la plus stable (charges minimales, négatives sur l'atome le plus électronégatif).` },
        { type:'def', label:'DEF', titre:'Charge formelle',
          contenu:`La <strong>charge formelle</strong> d'un atome dans un schéma de Lewis est :<br>$$CF = N_v - N_{nl} - \\frac{N_l}{2}$$<br>où $N_v$ est le nombre d'électrons de valence de l'atome isolé, $N_{nl}$ le nombre d'électrons non liants portés, et $N_l$ le nombre d'électrons liants (partagés).<br>La somme des charges formelles égale la charge globale de l'édifice. On privilégie le schéma minimisant les charges formelles.` },
        { type:'prop', label:'PROP', titre:'Méthode VSEPR (Gillespie)',
          contenu:`La méthode <strong>VSEPR</strong> (Valence Shell Electron Pair Repulsion) prédit la géométrie : les doublets autour de l'atome central se repoussent et s'orientent pour <strong>maximiser leurs distances</strong>.<br>On note la figure de répulsion $AX_nE_m$ : $A$ atome central, $n$ doublets liants, $m$ doublets non liants. La géométrie dépend de $p = n + m$ :<br><ul><li>$p=2$ : linéaire (180°) ;</li><li>$p=3$ : trigonale plane (120°) ;</li><li>$p=4$ : tétraédrique (109,5°) ;</li><li>$p=5$ : bipyramide trigonale ; $p=6$ : octaédrique.</li></ul>Les doublets non liants occupent plus de place et <strong>compriment</strong> les angles.` },
        { type:'ex', label:'EX', titre:'Géométrie de l\'eau et de l\'ammoniac',
          contenu:`<strong>$H_2O$</strong> : O central, 2 liaisons O–H et 2 doublets non liants → type $AX_2E_2$, $p=4$. Géométrie de base tétraédrique mais molécule <strong>coudée</strong>. Les deux doublets libres compriment l'angle à $\\approx 104{,}5°$ (au lieu de 109,5°).<br><strong>$NH_3$</strong> : N central, 3 liaisons et 1 doublet non liant → $AX_3E_1$, $p=4$. Molécule <strong>pyramide trigonale</strong>, angle $\\approx 107°$.<br><strong>$CH_4$</strong> : $AX_4$, tétraèdre régulier, 109,5°.` },
      ]
    },

    {
      titre: 'Polarité et moment dipolaire',
      cartes: [
        { type:'def', label:'DEF', titre:'Liaison polarisée et moment dipolaire',
          contenu:`Une liaison entre deux atomes de $\\chi$ différentes est <strong>polarisée</strong> : l'atome le plus électronégatif porte une charge partielle $-\\delta$, l'autre $+\\delta$.<br>Le <strong>moment dipolaire</strong> de la liaison est un vecteur orienté du pôle $-$ vers le pôle $+$ (convention physicien) ou de $+$ vers $-$ (convention chimiste) :<br>$$\\vec{p} = q\\,\\vec{d}, \\qquad p = \\delta\\, e\\, d$$<br>Unité usuelle : le <strong>debye</strong>, $1\\ \\text{D} \\approx 3{,}33\\times 10^{-30}\\ \\text{C·m}$.` },
        { type:'meth', label:'METH', titre:'Déterminer la polarité d\'une molécule',
          contenu:`<strong>1.</strong> Identifier les liaisons polarisées (différence d'électronégativité).<br><strong>2.</strong> Associer à chacune un vecteur moment dipolaire.<br><strong>3.</strong> Effectuer la <strong>somme vectorielle</strong> en tenant compte de la géométrie (VSEPR).<br><strong>4.</strong> Si la résultante est nulle, la molécule est <strong>apolaire</strong> ; sinon elle est <strong>polaire</strong>.<br>Une molécule peut avoir des liaisons polarisées et être globalement apolaire par symétrie.` },
        { type:'ex', label:'EX', titre:'CO₂ apolaire vs H₂O polaire',
          contenu:`<strong>$CO_2$</strong> : molécule <strong>linéaire</strong> $O=C=O$. Les deux moments dipolaires C–O sont <strong>opposés et égaux</strong> : leur somme est nulle. La molécule est <strong>apolaire</strong> malgré des liaisons fortement polarisées.<br><strong>$H_2O$</strong> : molécule <strong>coudée</strong>. Les deux moments O–H ne se compensent pas : la résultante est non nulle, dirigée selon la bissectrice. $p(H_2O) \\approx 1{,}85\\ \\text{D}$, l'eau est fortement <strong>polaire</strong>.` },
        { type:'prop', label:'PROP', titre:'Polarisabilité',
          contenu:`La <strong>polarisabilité</strong> $\\alpha$ mesure l'aptitude du nuage électronique d'un édifice à se <strong>déformer</strong> sous l'effet d'un champ électrique extérieur, créant un moment dipolaire <strong>induit</strong> :<br>$$\\vec{p}_{\\text{ind}} = \\alpha\\,\\vec{E}$$<br>Elle augmente avec le nombre d'électrons et le volume de l'édifice (nuage plus déformable). Les gros atomes/molécules (I₂, hydrocarbures longs) sont très polarisables.` },
      ]
    },

    {
      titre: 'Interactions intermoléculaires et solvants',
      cartes: [
        { type:'def', label:'DEF', titre:'Interactions de Van der Waals',
          contenu:`Les interactions de <strong>Van der Waals</strong> sont des forces attractives faibles entre molécules, d'énergie $\\sim$ qq kJ·mol⁻¹, variant en $1/r^6$. Trois contributions :<br><ul><li><strong>Keesom</strong> : dipôle permanent / dipôle permanent ;</li><li><strong>Debye</strong> : dipôle permanent / dipôle induit ;</li><li><strong>London</strong> (dispersion) : dipôle instantané / dipôle induit, toujours présent, croît avec la polarisabilité.</li></ul>Elles expliquent la cohésion des solides moléculaires et l'augmentation de $T_{\\text{eb}}$ avec la masse molaire dans une série d'alcanes.` },
        { type:'def', label:'DEF', titre:'Liaison hydrogène',
          contenu:`La <strong>liaison hydrogène</strong> est une interaction attractive entre un atome d'hydrogène lié à un atome très électronégatif (F, O, N) et un doublet non liant d'un autre atome électronégatif :<br>$$X\\!-\\!H \\cdots Y \\quad (X, Y \\in \\{F, O, N\\})$$<br>Plus forte que les forces de Van der Waals ($\\sim 10$–$40\\ \\text{kJ·mol}^{-1}$) mais plus faible qu'une liaison covalente. Elle est <strong>directionnelle</strong>.` },
        { type:'ex', label:'EX', titre:'Anomalies de l\'eau',
          contenu:`Les liaisons hydrogène expliquent les propriétés exceptionnelles de l'eau :<br><ul><li><strong>Température d'ébullition élevée</strong> (100 °C) comparée à $H_2S$ ($-60$ °C), pourtant plus lourd ;</li><li>la <strong>glace moins dense que l'eau liquide</strong> (réseau ouvert imposé par les liaisons H) ;</li><li>forte capacité thermique et tension superficielle.</li></ul>Le réseau tridimensionnel de liaisons H confère à l'eau sa cohésion exceptionnelle.` },
        { type:'def', label:'DEF', titre:'Solvants : classification',
          contenu:`Un solvant est caractérisé par :<br><ul><li><strong>Polarité</strong> (moment dipolaire, permittivité $\\varepsilon_r$) : <em>polaire</em> ($\\varepsilon_r$ élevée, ex. eau $\\varepsilon_r \\approx 80$) ou <em>apolaire</em> (cyclohexane) ;</li><li><strong>Caractère protique</strong> : <em>protique</em> s'il possède un H mobile pouvant former des liaisons H (eau, alcools, acides) ; <em>aprotique</em> sinon (acétone, DMSO, DMF) ;</li><li><strong>Pouvoir dissociant et solvatant</strong>.</li></ul>Règle : <em>« qui se ressemble se dissout »</em> — un soluté polaire se dissout dans un solvant polaire.` },
        { type:'prop', label:'PROP', titre:'Miscibilité et dissolution',
          contenu:`La <strong>dissolution</strong> d'un soluté résulte d'interactions soluté-solvant (<strong>solvatation</strong>) plus favorables que les interactions soluté-soluté et solvant-solvant rompues.<br><ul><li>Composé <strong>ionique</strong> (NaCl) : se dissout dans l'eau, fortement polaire et dissociante, qui solvate les ions ;</li><li>Composé <strong>apolaire</strong> (I₂, graisses) : soluble dans les solvants apolaires ;</li><li>Deux liquides sont <strong>miscibles</strong> s'ils ont des polarités voisines (eau/éthanol miscibles ; eau/cyclohexane non).</li></ul>` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. CRISTALLOGRAPHIE   (id: ch-ch-cristallo)
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-cristallo', matiere: 'ch',
  titre: 'Cristallographie', ordre: 7, enrich: true,
  sections: [

    {
      titre: 'Modèle du cristal parfait',
      cartes: [
        { type:'def', label:'DEF', titre:'Cristal parfait, réseau et motif',
          contenu:`Un <strong>cristal parfait</strong> est un empilement <strong>périodique</strong>, infini et ordonné d'entités (atomes, ions, molécules).<br>On distingue :<br><ul><li>le <strong>réseau</strong> : ensemble périodique de points (nœuds) repérés par $\\vec{r} = u\\vec{a} + v\\vec{b} + w\\vec{c}$, $(u,v,w)\\in\\mathbb{Z}^3$ ;</li><li>le <strong>motif</strong> : entité chimique répétée à chaque nœud ;</li><li><strong>Cristal = Réseau + Motif</strong>.</li></ul>La <strong>maille</strong> est le parallélépipède construit sur $(\\vec{a}, \\vec{b}, \\vec{c})$ qui, par translations, pave tout l'espace.` },
        { type:'def', label:'DEF', titre:'Maille, multiplicité, coordinence, compacité',
          contenu:`Pour une maille, on définit :<br><ul><li>la <strong>multiplicité</strong> (ou population) $Z$ : nombre d'entités <em>réellement</em> contenues dans la maille (en comptant les partages) ;</li><li>la <strong>coordinence</strong> : nombre de plus proches voisins d'une entité ;</li><li>la <strong>compacité</strong> $C$ : fraction du volume de la maille effectivement occupée par les entités (assimilées à des sphères dures) :</li></ul>$$C = \\frac{Z \\cdot \\tfrac{4}{3}\\pi r^3}{V_{\\text{maille}}}$$` },
        { type:'meth', label:'METH', titre:'Décompte des atomes d\'une maille cubique',
          contenu:`Selon la position dans une maille cubique, un atome est partagé entre plusieurs mailles :<br><ul><li>atome au <strong>sommet</strong> : partagé entre 8 mailles → compte pour $1/8$ ;</li><li>atome sur une <strong>arête</strong> : partagé entre 4 → $1/4$ ;</li><li>atome sur une <strong>face</strong> : partagé entre 2 → $1/2$ ;</li><li>atome au <strong>centre</strong> (intérieur) : compte pour $1$.</li></ul>La multiplicité est la somme de ces contributions sur toute la maille.` },
        { type:'form', label:'FORM', titre:'Masse volumique d\'un cristal',
          contenu:`La <strong>masse volumique</strong> d'un cristal de maille de volume $V_{\\text{maille}}$ et de multiplicité $Z$ (motif de masse molaire $M$) est :<br>$$\\rho = \\frac{Z\\,M}{\\mathcal{N}_A\\, V_{\\text{maille}}}$$<br>où $\\mathcal{N}_A = 6{,}02\\times 10^{23}\\ \\text{mol}^{-1}$ est le nombre d'Avogadro. Pour une maille cubique d'arête $a$ : $V_{\\text{maille}} = a^3$. Cette relation permet, à l'inverse, de déterminer $\\mathcal{N}_A$ ou $a$ expérimentalement.` },
      ]
    },

    {
      titre: 'Maille cubique centrée (CC)',
      cartes: [
        { type:'def', label:'DEF', titre:'Description de la maille CC',
          contenu:`La maille <strong>cubique centrée</strong> (CC) possède un atome à chaque sommet du cube et un atome au centre.<br><strong>Multiplicité</strong> : $Z = 8 \\times \\tfrac{1}{8} + 1 = 2$ atomes par maille.<br><strong>Coordinence</strong> : $8$ (l'atome central touche les 8 sommets).<br>Exemples : métaux alcalins (Na, K), fer $\\alpha$, chrome, tungstène.` },
        { type:'form', label:'FORM', titre:'Relation rayon-arête (CC)',
          contenu:`Dans la structure CC, les atomes se touchent le long de la <strong>grande diagonale</strong> du cube (longueur $a\\sqrt{3}$), qui contient $4$ rayons :<br>$$a\\sqrt{3} = 4r \\quad\\Longrightarrow\\quad r = \\frac{a\\sqrt{3}}{4}$$<br>Le contact n'a <strong>pas</strong> lieu le long de l'arête : les atomes des sommets ne se touchent pas entre eux.` },
        { type:'ex', label:'EX', titre:'Compacité de la structure CC',
          contenu:`Avec $Z = 2$, $r = \\dfrac{a\\sqrt{3}}{4}$ et $V_{\\text{maille}} = a^3$ :<br>$$C = \\frac{2 \\cdot \\tfrac{4}{3}\\pi r^3}{a^3} = \\frac{\\tfrac{8}{3}\\pi \\left(\\tfrac{a\\sqrt{3}}{4}\\right)^3}{a^3} = \\frac{\\pi\\sqrt{3}}{8} \\approx 0{,}68$$<br>La structure CC occupe <strong>68 %</strong> du volume : ce n'est <strong>pas</strong> une structure compacte.` },
      ]
    },

    {
      titre: 'Maille cubique à faces centrées (CFC)',
      cartes: [
        { type:'def', label:'DEF', titre:'Description de la maille CFC',
          contenu:`La maille <strong>cubique à faces centrées</strong> (CFC) possède un atome à chaque sommet et un atome au centre de chacune des 6 faces.<br><strong>Multiplicité</strong> : $Z = 8 \\times \\tfrac{1}{8} + 6 \\times \\tfrac{1}{2} = 4$ atomes par maille.<br><strong>Coordinence</strong> : $12$ (c'est le maximum possible).<br>Exemples : Cu, Al, Ag, Au, Ni, Pb, fer $\\gamma$. C'est l'un des deux empilements <strong>compacts</strong>.` },
        { type:'form', label:'FORM', titre:'Relation rayon-arête (CFC)',
          contenu:`Dans la structure CFC, les atomes se touchent le long de la <strong>diagonale d'une face</strong> (longueur $a\\sqrt{2}$), qui contient $4$ rayons :<br>$$a\\sqrt{2} = 4r \\quad\\Longrightarrow\\quad r = \\frac{a\\sqrt{2}}{4}$$<br>Le contact a lieu sur la diagonale de la face, pas sur l'arête.` },
        { type:'ex', label:'EX', titre:'Compacité de la structure CFC',
          contenu:`Avec $Z = 4$, $r = \\dfrac{a\\sqrt{2}}{4}$ :<br>$$C = \\frac{4 \\cdot \\tfrac{4}{3}\\pi r^3}{a^3} = \\frac{\\tfrac{16}{3}\\pi\\left(\\tfrac{a\\sqrt{2}}{4}\\right)^3}{a^3} = \\frac{\\pi\\sqrt{2}}{6} \\approx 0{,}74$$<br>La compacité de <strong>74 %</strong> est la valeur <strong>maximale</strong> pour un empilement de sphères identiques (conjecture de Kepler). Le CFC et l'hexagonal compact (hc) sont les deux empilements compacts.` },
        { type:'prop', label:'PROP', titre:'Empilements compacts ABCABC vs ABAB',
          contenu:`Les empilements compacts résultent d'un empilement de plans de sphères jointives :<br><ul><li>séquence <strong>ABCABC…</strong> → réseau <strong>CFC</strong> (les plans compacts sont les plans (111)) ;</li><li>séquence <strong>ABAB…</strong> → réseau <strong>hexagonal compact</strong> (hc).</li></ul>Les deux ont coordinence 12 et compacité 0,74. Ils ne diffèrent que par l'ordre d'empilement des plans denses.` },
      ]
    },

    {
      titre: 'Sites interstitiels',
      cartes: [
        { type:'def', label:'DEF', titre:'Sites tétraédriques et octaédriques',
          contenu:`Dans un empilement compact, les espaces vides entre sphères forment des <strong>sites interstitiels</strong> :<br><ul><li>site <strong>tétraédrique</strong> [T] : cavité entourée de 4 atomes formant un tétraèdre ;</li><li>site <strong>octaédrique</strong> [O] : cavité entourée de 6 atomes formant un octaèdre.</li></ul>Ces sites peuvent accueillir des atomes/ions plus petits (alliages d'insertion, cristaux ioniques).` },
        { type:'prop', label:'PROP', titre:'Dénombrement des sites dans le CFC',
          contenu:`Pour une maille CFC ($Z=4$ atomes) :<br><ul><li><strong>Sites octaédriques</strong> : au centre du cube ($1$) et au milieu des 12 arêtes ($12\\times\\tfrac14 = 3$), soit <strong>4 sites O</strong> par maille → <em>1 site O par atome</em> ;</li><li><strong>Sites tétraédriques</strong> : <strong>8 sites T</strong> par maille (un à chaque sous-cube d'arête $a/2$) → <em>2 sites T par atome</em>.</li></ul>Ces dénombrements sont essentiels pour décrire les structures ioniques dérivées.` },
        { type:'form', label:'FORM', titre:'Habitabilité d\'un site',
          contenu:`Le rayon maximal $r$ d'une sphère qui s'insère sans déformation dans un site, entouré de sphères de rayon $R$, est donné par les conditions de tangence :<br><ul><li>site <strong>octaédrique</strong> : $\\dfrac{r}{R} = \\sqrt{2} - 1 \\approx 0{,}414$ ;</li><li>site <strong>tétraédrique</strong> : $\\dfrac{r}{R} = \\sqrt{\\dfrac{3}{2}} - 1 \\approx 0{,}225$.</li></ul>Si l'ion inséré est plus gros, la structure se dilate (les sphères de l'empilement ne se touchent plus).` },
        { type:'meth', label:'METH', titre:'Choisir le type de site occupé',
          contenu:`Pour prévoir la structure d'un cristal ionique $C^+A^-$ :<br><strong>1.</strong> Calculer le rapport $\\rho = r_+ / r_-$ (cation/anion).<br><strong>2.</strong> Comparer aux valeurs critiques : si $0{,}225 < \\rho < 0{,}414$, coordinence 4 (sites T) ; si $0{,}414 < \\rho < 0{,}732$, coordinence 6 (sites O) ; si $\\rho > 0{,}732$, coordinence 8 (cubique).<br><strong>3.</strong> En déduire le nombre de sites à occuper pour respecter la stœchiométrie.` },
      ]
    },

    {
      titre: 'Cristaux ioniques',
      cartes: [
        { type:'def', label:'DEF', titre:'Modèle du cristal ionique',
          contenu:`Un <strong>cristal ionique</strong> est constitué de cations et d'anions en interaction <strong>électrostatique</strong> (liaison ionique). On le décrit comme un empilement compact des plus gros ions (souvent les anions), les plus petits ions occupant les sites interstitiels.<br>La structure est régie par :<br><ul><li>la <strong>neutralité électrique</strong> (stœchiométrie) ;</li><li>le <strong>contact</strong> cation-anion (tangence) ;</li><li>la <strong>non-pénétration</strong> des ions de même signe.</li></ul>` },
        { type:'ex', label:'EX', titre:'Structure du chlorure de sodium NaCl',
          contenu:`Dans <strong>NaCl</strong>, les ions $Cl^-$ forment un réseau <strong>CFC</strong> et les ions $Na^+$ occupent <strong>tous les sites octaédriques</strong>.<br>Population : $4\\ Cl^-$ et $4\\ Na^+$ par maille → $Z = 4$ motifs « NaCl ». Coordinence <strong>6/6</strong> (chaque ion est entouré de 6 ions de signe opposé).<br>Le contact a lieu le long de l'arête : $a = 2(r_+ + r_-)$.` },
        { type:'ex', label:'EX', titre:'Structures CsCl et blende ZnS',
          contenu:`<strong>CsCl</strong> : les $Cl^-$ forment un cube simple, $Cs^+$ au centre (coordinence <strong>8/8</strong>). $Z=1$ motif. Contact sur la grande diagonale : $a\\sqrt{3} = 2(r_+ + r_-)$.<br><strong>Blende ZnS</strong> : $S^{2-}$ en CFC, $Zn^{2+}$ dans <strong>la moitié des sites tétraédriques</strong>. Coordinence <strong>4/4</strong>, $Z=4$ motifs.<br>Le type de structure dépend du rapport des rayons ioniques.` },
        { type:'prop', label:'PROP', titre:'Propriétés des solides ioniques',
          contenu:`Les liaisons ioniques étant fortes et non directionnelles :<br><ul><li><strong>températures de fusion élevées</strong> (NaCl : 801 °C) ;<br></li><li><strong>durs mais fragiles</strong> (le glissement des plans amène des ions de même signe en regard → clivage) ;</li><li><strong>isolants à l'état solide</strong>, mais <strong>conducteurs fondus ou en solution</strong> (ions mobiles) ;</li><li>souvent <strong>solubles</strong> dans les solvants polaires (solvatation des ions).</li></ul>` },
      ]
    },

    {
      titre: 'Cristaux métalliques, covalents et moléculaires',
      cartes: [
        { type:'def', label:'DEF', titre:'Cristal métallique',
          contenu:`Dans un <strong>cristal métallique</strong>, les cations occupent les nœuds du réseau et les électrons de valence sont <strong>délocalisés</strong> dans tout le cristal (« gaz » ou « mer » d'électrons libres).<br>Conséquences : <strong>bonne conductivité</strong> électrique et thermique, <strong>ductilité et malléabilité</strong> (les plans peuvent glisser, la liaison n'est pas directionnelle), éclat métallique. Structures usuelles : CFC, CC, hc.` },
        { type:'def', label:'DEF', titre:'Cristal covalent (macromoléculaire)',
          contenu:`Dans un <strong>cristal covalent</strong>, les atomes sont liés par un réseau tridimensionnel de <strong>liaisons covalentes</strong> fortes et directionnelles.<br>Exemple : le <strong>diamant</strong> (carbone tétravalent, chaque C lié à 4 voisins en sites T d'un réseau CFC de C). Propriétés : <strong>très dur</strong>, <strong>très haute température de fusion</strong>, <strong>isolant</strong> (diamant), <strong>insoluble</strong>. Autres : silicium, $SiO_2$ (quartz).` },
        { type:'def', label:'DEF', titre:'Cristal moléculaire',
          contenu:`Dans un <strong>cristal moléculaire</strong>, des molécules (ou atomes pour les gaz nobles solides) occupent les nœuds, liées entre elles par des interactions <strong>faibles</strong> (Van der Waals, liaisons hydrogène).<br>Exemples : glace ($H_2O$), $CO_2$ solide (« neige carbonique »), $I_2$.<br>Propriétés : <strong>faibles températures de fusion</strong>, <strong>tendres</strong>, <strong>isolants</strong>. La cohésion est d'autant plus forte que les interactions intermoléculaires (polarité, liaisons H) sont importantes.` },
        { type:'prop', label:'PROP', titre:'Variétés allotropiques du carbone',
          contenu:`Le carbone existe sous plusieurs <strong>variétés allotropiques</strong> (même élément, structures différentes) :<br><ul><li><strong>diamant</strong> : réseau covalent 3D, isolant, très dur ;</li><li><strong>graphite</strong> : feuillets de cycles hexagonaux liés par Van der Waals, électrons délocalisés dans les plans → conducteur dans le plan, tendre (clivage) ;</li><li><strong>fullerènes</strong> ($C_{60}$), <strong>graphène</strong>, <strong>nanotubes</strong>.</li></ul>Les propriétés très différentes illustrent le lien <strong>structure → propriétés</strong>.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. CHIMIE ORGANIQUE   (id: ch-ch-orga)
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-orga', matiere: 'ch',
  titre: 'Chimie organique', ordre: 8, enrich: true,
  sections: [

    {
      titre: 'Nomenclature et groupes caractéristiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Principe de la nomenclature systématique',
          contenu:`Le nom d'une molécule organique se construit ainsi :<br><strong>préfixes (substituants) + chaîne principale + suffixe (fonction principale)</strong>.<br><strong>1.</strong> Identifier la <strong>chaîne carbonée la plus longue</strong> contenant la fonction prioritaire (racine : <em>méth, éth, prop, but, pent, hex…</em>).<br><strong>2.</strong> Numéroter pour donner les indices les plus <strong>petits</strong> à la fonction principale, puis aux insaturations, puis aux substituants.<br><strong>3.</strong> Nommer les substituants par ordre alphabétique avec leur indice de position.` },
        { type:'prop', label:'PROP', titre:'Groupes caractéristiques usuels',
          contenu:`Principaux groupes (par priorité décroissante de fonction principale) :<br><ul><li>acide carboxylique $-COOH$ (suffixe <em>-oïque</em>) ;</li><li>ester $-COO-$ (<em>-oate de …yle</em>) ;</li><li>amide $-CONH_2$ ; nitrile $-C\\!\\equiv\\!N$ ;</li><li>aldéhyde $-CHO$ (<em>-al</em>) ; cétone $>\\!C\\!=\\!O$ (<em>-one</em>) ;</li><li>alcool $-OH$ (<em>-ol</em>) ; amine $-NH_2$ (<em>-amine</em>).</li></ul>Les halogénés et l'éther-oxyde ne sont nommés qu'en préfixe (halogéno-, alcoxy-).` },
        { type:'def', label:'DEF', titre:'Insaturations : alcènes et alcynes',
          contenu:`Le <strong>degré d'insaturation</strong> (ou nombre d'instaurations) d'une molécule $C_nH_mN_pO_q$ vaut :<br>$$DoI = \\frac{2n + 2 + p - m}{2}$$<br>Chaque double liaison ou cycle compte pour 1, chaque triple liaison pour 2.<br>Les <strong>alcènes</strong> ($C=C$, suffixe <em>-ène</em>) et <strong>alcynes</strong> ($C\\!\\equiv\\!C$, suffixe <em>-yne</em>) sont nommés en indiquant la position de l'insaturation.` },
        { type:'ex', label:'EX', titre:'Exemple de nomenclature',
          contenu:`Soit la molécule $CH_3\\!-\\!CH(CH_3)\\!-\\!CH_2\\!-\\!CH_2\\!-\\!OH$.<br><strong>1.</strong> Fonction principale : alcool → suffixe <em>-ol</em>, chaîne de 4 carbones (but).<br><strong>2.</strong> Numérotation depuis l'extrémité côté OH pour indice minimal : OH en position 1.<br><strong>3.</strong> Substituant méthyle en position 3.<br>Nom : <strong>3-méthylbutan-1-ol</strong>.` },
      ]
    },

    {
      titre: 'Isomérie de constitution',
      cartes: [
        { type:'def', label:'DEF', titre:'Isomères de constitution',
          contenu:`Deux <strong>isomères de constitution</strong> ont la <strong>même formule brute</strong> mais des <strong>enchaînements d'atomes différents</strong>. Trois types :<br><ul><li><strong>de chaîne</strong> : squelette carboné différent (butane / 2-méthylpropane) ;</li><li><strong>de position</strong> : même squelette, fonction à une position différente (propan-1-ol / propan-2-ol) ;</li><li><strong>de fonction</strong> : groupes caractéristiques différents (éthanol $C_2H_6O$ / diméthyléther).</li></ul>` },
        { type:'def', label:'DEF', titre:'Représentations des molécules',
          contenu:`Plusieurs représentations coexistent :<br><ul><li><strong>formule semi-développée</strong> : toutes les liaisons sauf C–H ;</li><li><strong>formule topologique</strong> : chaîne en zigzag, sommets = carbones, H des carbones implicites ;</li><li><strong>projection de Cram</strong> : trait plein dans le plan, coin plein vers l'avant, coin hachuré vers l'arrière — indispensable pour la stéréochimie.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Squelette carboné et nomenclature des substituants',
          contenu:`Un carbone est dit <strong>primaire</strong> (lié à 1 autre C), <strong>secondaire</strong> (2 C), <strong>tertiaire</strong> (3 C) ou <strong>quaternaire</strong> (4 C). Cette classe contrôle fortement la <strong>réactivité</strong> (stabilité des carbocations, encombrement stérique).<br>Substituants courants : méthyle ($-CH_3$), éthyle ($-C_2H_5$), isopropyle, tert-butyle, phényle ($-C_6H_5$).` },
      ]
    },

    {
      titre: 'Stéréochimie : conformations et configurations',
      cartes: [
        { type:'def', label:'DEF', titre:'Conformations',
          contenu:`Les <strong>conformations</strong> sont les différentes formes spatiales d'une molécule obtenues par <strong>rotation autour des liaisons simples</strong> $\\sigma$, sans rompre de liaison.<br>Pour l'éthane, la projection de <strong>Newman</strong> distingue les conformations <strong>décalée</strong> (la plus stable, angle dièdre 60°) et <strong>éclipsée</strong> (la moins stable, répulsion maximale). Les conformères s'interconvertissent librement à température ambiante : ce ne sont <strong>pas</strong> des isomères séparables.` },
        { type:'def', label:'DEF', titre:'Stéréoisomères : énantiomères et diastéréoisomères',
          contenu:`Les <strong>stéréoisomères</strong> de configuration ont même constitution mais une disposition spatiale différente, non superposable par rotation autour des liaisons simples.<br><ul><li><strong>Énantiomères</strong> : images l'un de l'autre dans un miroir, <strong>non superposables</strong> (molécules chirales) ;</li><li><strong>Diastéréoisomères</strong> : stéréoisomères <strong>non énantiomères</strong> (ex. Z/E, ou deux stéréocentres avec une seule configuration changée).</li></ul>Les diastéréoisomères ont des propriétés physiques <strong>différentes</strong> (séparables), les énantiomères des propriétés identiques sauf vis-à-vis de la lumière polarisée et d'un environnement chiral.` },
        { type:'def', label:'DEF', titre:'Chiralité et carbone asymétrique',
          contenu:`Une molécule est <strong>chirale</strong> si elle n'est pas superposable à son image dans un miroir (absence de plan ou centre de symétrie).<br>Le cas le plus courant est la présence d'un <strong>carbone asymétrique</strong> (stéréocentre) : un carbone $sp^3$ portant <strong>quatre substituants différents</strong>, noté $C^*$.<br>Un mélange équimolaire des deux énantiomères est un <strong>mélange racémique</strong>, optiquement inactif.` },
        { type:'prop', label:'PROP', titre:'Activité optique',
          contenu:`Une molécule chirale en solution fait <strong>tourner le plan de polarisation</strong> d'une lumière polarisée rectiligne : elle est <strong>optiquement active</strong>.<br>Un énantiomère est <strong>dextrogyre</strong> ($+$, rotation à droite), son image <strong>lévogyre</strong> ($-$), avec des pouvoirs rotatoires opposés. Le racémique ($\\pm$) est inactif par <strong>compensation</strong>. Attention : le signe ($+$/$-$) n'a aucun lien avec la configuration $R$/$S$.` },
      ]
    },

    {
      titre: 'Descripteurs stéréochimiques R/S et Z/E',
      cartes: [
        { type:'prop', label:'PROP', titre:'Règles de Cahn-Ingold-Prelog (CIP)',
          contenu:`Les <strong>règles CIP</strong> classent les substituants par <strong>priorité</strong> :<br><strong>1.</strong> Comparer le <strong>numéro atomique $Z$</strong> du premier atome lié : le plus grand est prioritaire.<br><strong>2.</strong> En cas d'égalité, comparer les atomes suivants de proche en proche (par ordre décroissant).<br><strong>3.</strong> Une liaison multiple compte comme autant d'atomes <strong>dupliqués</strong> (un $C=O$ équivaut, pour C, à deux liaisons vers O).` },
        { type:'meth', label:'METH', titre:'Déterminer la configuration R ou S',
          contenu:`Pour un carbone asymétrique :<br><strong>1.</strong> Classer les 4 substituants par priorité CIP : $a > b > c > d$.<br><strong>2.</strong> Placer le substituant de plus <strong>faible priorité</strong> ($d$) vers l'<strong>arrière</strong> (à l'opposé de l'observateur).<br><strong>3.</strong> Observer le sens de rotation $a \\to b \\to c$ : sens <strong>horaire</strong> → <strong>$R$</strong> (rectus) ; sens <strong>anti-horaire</strong> → <strong>$S$</strong> (sinister).<br>Si $d$ est vers l'avant, déterminer le sens puis <strong>inverser</strong> la conclusion.` },
        { type:'meth', label:'METH', titre:'Déterminer la configuration Z ou E',
          contenu:`Pour une double liaison $C=C$ portant des substituants différents :<br><strong>1.</strong> Sur <strong>chaque</strong> carbone de la double liaison, déterminer le substituant <strong>prioritaire</strong> (CIP).<br><strong>2.</strong> Si les deux groupes prioritaires sont du <strong>même côté</strong> de la double liaison → <strong>$Z$</strong> (zusammen, ensemble) ; s'ils sont <strong>opposés</strong> → <strong>$E$</strong> (entgegen).<br>La double liaison <strong>bloque</strong> la rotation : $Z$ et $E$ sont des diastéréoisomères distincts, séparables.` },
        { type:'ex', label:'EX', titre:'Acide tartrique et formes méso',
          contenu:`Avec $n$ carbones asymétriques, on attend au plus $2^n$ stéréoisomères. Mais une <strong>symétrie interne</strong> peut en réduire le nombre.<br>L'acide tartrique ($HOOC\\!-\\!CHOH\\!-\\!CHOH\\!-\\!COOH$) a 2 stéréocentres : on attend 4 isomères, mais il n'en existe que <strong>3</strong> : un couple d'énantiomères ($R,R$ et $S,S$) et une forme <strong>méso</strong> ($R,S$), <strong>achirale</strong> (possède un plan de symétrie interne, superposable à son image).` },
      ]
    },

    {
      titre: 'Substitution nucléophile et élimination',
      cartes: [
        { type:'def', label:'DEF', titre:'Nucléophile, électrophile, groupe partant',
          contenu:`Un <strong>nucléophile</strong> (Nu) est une espèce riche en électrons (doublet libre ou charge négative) qui attaque un site pauvre en électrons.<br>Un <strong>électrophile</strong> est pauvre en électrons (site $\\delta^+$).<br>Un <strong>groupe partant</strong> (nucléofuge, GP) part avec le doublet de la liaison ; il est d'autant meilleur que la base conjuguée est stable (halogénures $I^- > Br^- > Cl^-$, tosylate).` },
        { type:'th', label:'THM', titre:'Mécanisme SN2',
          contenu:`La <strong>substitution nucléophile bimoléculaire $S_N2$</strong> est concertée, en une seule étape : le nucléophile attaque l'atome de carbone à l'<strong>opposé</strong> du groupe partant.<br>$$\\text{Nu}^- + R\\!-\\!GP \\longrightarrow \\text{Nu}\\!-\\!R + GP^-$$<br><ul><li>cinétique d'<strong>ordre 2</strong> : $v = k[R\\!-\\!GP][\\text{Nu}]$ ;</li><li><strong>inversion de Walden</strong> (la configuration du carbone est inversée) ;</li><li>favorisée par les carbones <strong>peu encombrés</strong> (primaires), un bon nucléophile, un solvant <strong>aprotique polaire</strong>.</li></ul>` },
        { type:'th', label:'THM', titre:'Mécanisme SN1',
          contenu:`La <strong>substitution nucléophile monomoléculaire $S_N1$</strong> se déroule en deux étapes :<br><strong>1.</strong> ionisation lente : départ du GP, formation d'un <strong>carbocation</strong> (étape cinétiquement déterminante) ;<br><strong>2.</strong> attaque rapide du nucléophile.<br><ul><li>cinétique d'<strong>ordre 1</strong> : $v = k[R\\!-\\!GP]$ ;</li><li><strong>racémisation</strong> (le carbocation plan est attaqué sur ses deux faces) ;</li><li>favorisée par les carbones <strong>tertiaires</strong> (carbocation stable), un solvant <strong>protique polaire</strong> (stabilise le carbocation).</li></ul>` },
        { type:'th', label:'THM', titre:'Éliminations E1 et E2',
          contenu:`L'<strong>élimination</strong> forme un alcène par départ d'un groupe partant et d'un H porté par le carbone voisin ($\\beta$).<br><ul><li><strong>E2</strong> : concertée, ordre 2, nécessite un H et le GP en position <strong>anti-périplanaire</strong> ; favorisée par une <strong>base forte</strong> et la chaleur ;</li><li><strong>E1</strong> : deux étapes via un carbocation (mêmes conditions que $S_N1$), ordre 1.</li></ul><strong>Règle de Zaïtsev</strong> : l'alcène le plus <strong>substitué</strong> (plus stable) est majoritaire.<br>Substitution et élimination sont souvent en <strong>compétition</strong>.` },
        { type:'meth', label:'METH', titre:'Prévoir SN1/SN2/E1/E2',
          contenu:`<strong>Classe du substrat</strong> : primaire → plutôt $S_N2$ ; tertiaire → $S_N1$/$E1$ (ou $E2$ avec base forte) ; secondaire → cas intermédiaire.<br><strong>Nucléophile/base</strong> : bon nucléophile peu basique → $S_N2$ ; base forte encombrée → $E2$.<br><strong>Solvant</strong> : aprotique polaire favorise $S_N2$ ; protique polaire favorise $S_N1$/$E1$.<br><strong>Température</strong> : élevée → favorise l'<strong>élimination</strong> (gain entropique).` },
      ]
    },

    {
      titre: 'Additions et réactivité fonctionnelle',
      cartes: [
        { type:'th', label:'THM', titre:'Addition électrophile sur les alcènes',
          contenu:`La double liaison $C=C$, riche en électrons ($\\pi$), réagit avec les <strong>électrophiles</strong> par <strong>addition</strong>.<br>Exemple — addition de $HBr$ : protonation de la double liaison formant le carbocation le plus stable, puis attaque de $Br^-$.<br><strong>Règle de Markovnikov</strong> : lors de l'addition de $H\\!-\\!X$ sur un alcène dissymétrique, l'hydrogène se fixe sur le carbone le plus <strong>hydrogéné</strong> (formation du carbocation le plus stable).` },
        { type:'def', label:'DEF', titre:'Carbocation et stabilité',
          contenu:`Un <strong>carbocation</strong> est un carbone trivalent chargé positivement ($sp^2$, plan, lacune électronique).<br>Sa stabilité croît avec le nombre de groupes alkyle voisins (effet <strong>inductif donneur</strong> $+I$ et <strong>hyperconjugaison</strong>) :<br>$$\\text{tertiaire} > \\text{secondaire} > \\text{primaire} > \\text{méthyle}$$<br>Cette hiérarchie explique la régiosélectivité ($S_N1$, additions, éliminations).` },
        { type:'prop', label:'PROP', titre:'Effets électroniques : inductif et mésomère',
          contenu:`Deux effets gouvernent la réactivité :<br><ul><li><strong>effet inductif</strong> : polarisation transmise par les liaisons $\\sigma$, lié à l'électronégativité ($+I$ donneur : alkyles ; $-I$ attracteur : halogènes, $-NO_2$) ;</li><li><strong>effet mésomère</strong> : délocalisation des électrons $\\pi$ et doublets non liants par <strong>conjugaison</strong> ($+M$ donneur : $-OH$, $-NH_2$ ; $-M$ attracteur : $-C=O$, $-NO_2$).</li></ul>L'effet mésomère, quand il existe, l'emporte généralement sur l'effet inductif.` },
        { type:'def', label:'DEF', titre:'Mésomérie et formes limites',
          contenu:`La <strong>mésomérie</strong> décrit la <strong>délocalisation</strong> électronique lorsqu'une seule structure de Lewis est insuffisante. On écrit des <strong>formes limites</strong> (mésomères) reliées par des flèches à double pointe $\\leftrightarrow$.<br>La molécule réelle est un <strong>hybride de résonance</strong> de ces formes. La délocalisation <strong>stabilise</strong> l'édifice (ex. : ion carboxylate, benzène, systèmes conjugués). Seuls les <strong>électrons</strong> se déplacent, jamais les noyaux.` },
        { type:'ex', label:'EX', titre:'Stabilisation de l\'ion carboxylate',
          contenu:`L'ion carboxylate $R\\!-\\!COO^-$ possède deux formes limites équivalentes :<br>$$R\\!-\\!\\overset{O^-}{\\underset{\\|}{C}}\\!-\\!O \\;\\;\\leftrightarrow\\;\\; R\\!-\\!\\overset{O}{\\underset{\\|}{C}}\\!-\\!O^-$$<br>La charge négative est <strong>délocalisée</strong> sur les deux oxygènes (équivalents), les deux liaisons C–O étant identiques. Cette stabilisation par mésomérie explique l'<strong>acidité</strong> notable des acides carboxyliques (base conjuguée stabilisée).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. OXYDORÉDUCTION   (id: ch-ch-redox)
// ══════════════════════════════════════════════════════════════
{
  id: 'ch-ch-redox', matiere: 'ch',
  titre: 'Oxydoréduction', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Couples redox et nombre d\'oxydation',
      cartes: [
        { type:'def', label:'DEF', titre:'Oxydant, réducteur, couple redox',
          contenu:`Une réaction d'<strong>oxydoréduction</strong> est un transfert d'électrons.<br><ul><li>un <strong>réducteur</strong> (Red) cède des électrons : il s'<strong>oxyde</strong> ;</li><li>un <strong>oxydant</strong> (Ox) capte des électrons : il se <strong>réduit</strong>.</li></ul>À chaque couple est associée une <strong>demi-équation électronique</strong> :<br>$$\\text{Ox} + n\\,e^- = \\text{Red}$$<br>Une réaction redox est l'échange d'électrons entre l'oxydant d'un couple et le réducteur d'un autre.` },
        { type:'def', label:'DEF', titre:'Nombre d\'oxydation',
          contenu:`Le <strong>nombre d'oxydation</strong> (n.o. ou degré d'oxydation) d'un élément est la charge fictive qu'il porterait si toutes les liaisons étaient ioniques (électrons attribués à l'atome le plus électronégatif). Il est noté en chiffres romains.<br>Règles :<br><ul><li>corps simple : n.o. $= 0$ ;</li><li>ion monoatomique : n.o. $=$ charge ;</li><li>O : généralement $-II$ (sauf peroxydes $-I$) ; H : $+I$ (sauf hydrures $-I$) ;</li><li>la somme des n.o. = charge globale de l'édifice.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Variation du n.o. et oxydation/réduction',
          contenu:`Le nombre d'oxydation permet d'identifier les transferts électroniques :<br><ul><li>une <strong>oxydation</strong> correspond à une <strong>augmentation</strong> du n.o. (perte d'électrons) ;</li><li>une <strong>réduction</strong> correspond à une <strong>diminution</strong> du n.o. (gain d'électrons).</li></ul>Le nombre d'électrons échangés par atome égale la <strong>variation</strong> $|\\Delta n.o.|$. Une <strong>dismutation</strong> est une réaction où un même élément est à la fois oxydé et réduit.` },
        { type:'meth', label:'METH', titre:'Calculer un nombre d\'oxydation',
          contenu:`<strong>1.</strong> Attribuer O $= -II$, H $= +I$ (sauf exceptions).<br><strong>2.</strong> Écrire que la somme des n.o. pondérés par les indices égale la charge de l'édifice.<br><strong>3.</strong> Résoudre pour l'élément inconnu.<br><em>Exemples</em> : dans $MnO_4^-$, $n.o.(Mn) + 4\\times(-II) = -1 \\Rightarrow n.o.(Mn) = +VII$.<br>Dans $Cr_2O_7^{2-}$, $2\\,x + 7\\times(-II) = -2 \\Rightarrow x = +VI$.` },
      ]
    },

    {
      titre: 'Équilibrage des réactions redox',
      cartes: [
        { type:'meth', label:'METH', titre:'Équilibrer une demi-équation',
          contenu:`Pour équilibrer $\\text{Ox} + n e^- = \\text{Red}$ en milieu aqueux acide :<br><strong>1.</strong> Équilibrer l'élément qui change de n.o.<br><strong>2.</strong> Équilibrer l'oxygène avec des molécules d'<strong>$H_2O$</strong>.<br><strong>3.</strong> Équilibrer l'hydrogène avec des ions <strong>$H^+$</strong>.<br><strong>4.</strong> Équilibrer les charges avec les <strong>électrons</strong> $e^-$.<br>En milieu basique, ajouter $OH^-$ de chaque côté pour neutraliser les $H^+$.` },
        { type:'ex', label:'EX', titre:'Demi-équation du permanganate',
          contenu:`Couple $MnO_4^-/Mn^{2+}$ en milieu acide. Mn passe de $+VII$ à $+II$, soit 5 électrons :<br>$$MnO_4^- + 8\\,H^+ + 5\\,e^- = Mn^{2+} + 4\\,H_2O$$<br>Vérification : charges à gauche $-1 + 8 - 5 = +2$, à droite $+2$. ✔ Oxygène : 4 = 4. ✔ Hydrogène : 8 = 8. ✔` },
        { type:'meth', label:'METH', titre:'Combiner deux demi-équations',
          contenu:`Pour obtenir la réaction globale entre l'oxydant du couple 1 et le réducteur du couple 2 :<br><strong>1.</strong> Écrire les deux demi-équations dans le bon sens.<br><strong>2.</strong> Les multiplier par des coefficients pour <strong>égaliser le nombre d'électrons</strong> échangés.<br><strong>3.</strong> Additionner membre à membre : les électrons <strong>disparaissent</strong>.<br><strong>4.</strong> Simplifier les espèces communes ($H^+$, $H_2O$).` },
        { type:'ex', label:'EX', titre:'Oxydation du fer(II) par le permanganate',
          contenu:`Couples $MnO_4^-/Mn^{2+}$ (5 e⁻) et $Fe^{3+}/Fe^{2+}$ (1 e⁻). On multiplie la seconde par 5 :<br>$$MnO_4^- + 8H^+ + 5\\,Fe^{2+} \\longrightarrow Mn^{2+} + 4H_2O + 5\\,Fe^{3+}$$<br>C'est la base du dosage manganimétrique : l'équivalence est repérée par la <strong>persistance de la teinte violette</strong> du permanganate (indicateur de fin de réaction).` },
      ]
    },

    {
      titre: 'Potentiel d\'électrode et relation de Nernst',
      cartes: [
        { type:'def', label:'DEF', titre:'Potentiel d\'électrode et ESH',
          contenu:`Le <strong>potentiel d'électrode</strong> $E$ d'un couple redox caractérise son pouvoir oxydant. Il se mesure par rapport à l'<strong>électrode standard à hydrogène</strong> (ESH), couple $H^+/H_2$, dont le potentiel est <strong>fixé à $0$ V</strong> par convention.<br>Le <strong>potentiel standard</strong> $E^\\circ$ d'un couple est tabulé : plus $E^\\circ$ est grand, plus l'oxydant du couple est <strong>fort</strong>.` },
        { type:'form', label:'FORM', titre:'Relation de Nernst',
          contenu:`Pour un couple $\\text{Ox} + n e^- = \\text{Red}$, le potentiel s'écrit :<br>$$E = E^\\circ + \\frac{RT}{nF}\\ln\\frac{a_{\\text{Ox}}}{a_{\\text{Red}}}$$<br>À $T = 298\\ \\text{K}$, en décimal :<br>$$E = E^\\circ + \\frac{0{,}059}{n}\\log\\frac{[\\text{Ox}]}{[\\text{Red}]}$$<br>$F = 96\\,500\\ \\text{C·mol}^{-1}$ (Faraday), $R = 8{,}314\\ \\text{J·K}^{-1}\\text{·mol}^{-1}$. Les espèces solides et le solvant ont une activité égale à 1.` },
        { type:'meth', label:'METH', titre:'Écrire une relation de Nernst',
          contenu:`<strong>1.</strong> Écrire la demi-équation équilibrée (avec $H^+$, $H_2O$).<br><strong>2.</strong> Au numérateur : produit des activités des espèces du côté <strong>oxydant</strong> (dont $H^+$) ; au dénominateur : côté <strong>réducteur</strong>, chacune élevée à son coefficient.<br><strong>3.</strong> Diviser par $n$ (électrons échangés).<br><em>Exemple</em> : $MnO_4^-/Mn^{2+}$ :<br>$$E = E^\\circ + \\frac{0{,}059}{5}\\log\\frac{[MnO_4^-][H^+]^8}{[Mn^{2+}]}$$` },
        { type:'prop', label:'PROP', titre:'Influence du pH',
          contenu:`Lorsque des ions $H^+$ interviennent dans la demi-équation, le potentiel <strong>dépend du pH</strong>. Pour le couple $MnO_4^-/Mn^{2+}$ :<br>$$E = E^\\circ + \\frac{0{,}059}{5}\\log\\frac{[MnO_4^-]}{[Mn^{2+}]} - \\frac{0{,}059\\times 8}{5}\\,\\text{pH}$$<br>Le pouvoir oxydant diminue quand le pH augmente. C'est la base de la construction des <strong>diagrammes potentiel-pH</strong>.` },
      ]
    },

    {
      titre: 'Prévision des réactions et piles',
      cartes: [
        { type:'th', label:'THM', titre:'Règle du gamma (prévision)',
          contenu:`Pour prévoir le sens d'une réaction redox, on classe les couples sur un axe de potentiels croissants.<br><strong>Règle du gamma ($\\gamma$)</strong> : l'oxydant du couple de <strong>plus haut potentiel</strong> réagit spontanément avec le réducteur du couple de <strong>plus bas potentiel</strong>.<br>La réaction est <strong>thermodynamiquement favorable</strong> lorsque $E^\\circ(\\text{oxydant}) > E^\\circ(\\text{réducteur})$. L'écart $\\Delta E^\\circ$ mesure l'ampleur de la réaction.` },
        { type:'form', label:'FORM', titre:'Constante d\'équilibre et f.é.m.',
          contenu:`À l'équilibre, les potentiels des deux couples s'<strong>égalisent</strong> ($E_1 = E_2$). On en déduit la constante d'équilibre :<br>$$\\log K^\\circ = \\frac{n\\,(E_1^\\circ - E_2^\\circ)}{0{,}059}$$<br>où $n$ est le nombre d'électrons échangés dans la réaction globale. Un grand $\\Delta E^\\circ$ donne un $K^\\circ$ très grand : la réaction est <strong>quasi-totale</strong>.` },
        { type:'def', label:'DEF', titre:'Pile électrochimique',
          contenu:`Une <strong>pile</strong> convertit l'énergie chimique d'une réaction redox spontanée en énergie électrique. Elle comporte deux <strong>demi-piles</strong> reliées par un <strong>pont salin</strong> (assure la neutralité électrique et ferme le circuit).<br><ul><li>l'<strong>anode</strong> est le siège de l'<strong>oxydation</strong> (pôle $-$) ;</li><li>la <strong>cathode</strong> est le siège de la <strong>réduction</strong> (pôle $+$).</li></ul>La <strong>force électromotrice</strong> (f.é.m.) est $e = E_{\\text{cathode}} - E_{\\text{anode}} > 0$.` },
        { type:'ex', label:'EX', titre:'Pile Daniell',
          contenu:`La <strong>pile Daniell</strong> associe les couples $Zn^{2+}/Zn$ ($E^\\circ = -0{,}76$ V) et $Cu^{2+}/Cu$ ($E^\\circ = +0{,}34$ V).<br>Cu est la <strong>cathode</strong> ($+$) : $Cu^{2+} + 2e^- \\to Cu$. Zn est l'<strong>anode</strong> ($-$) : $Zn \\to Zn^{2+} + 2e^-$.<br>Réaction : $Zn + Cu^{2+} \\to Zn^{2+} + Cu$, f.é.m. standard $e^\\circ = 0{,}34 - (-0{,}76) = 1{,}10$ V.` },
        { type:'prop', label:'PROP', titre:'Lien thermodynamique : enthalpie libre',
          contenu:`L'enthalpie libre de réaction est reliée à la f.é.m. :<br>$$\\Delta_r G = -n F\\,e, \\qquad \\Delta_r G^\\circ = -n F\\,e^\\circ = -RT\\ln K^\\circ$$<br>Une réaction spontanée ($\\Delta_r G < 0$) correspond à $e > 0$. La pile débite tant que $e > 0$ ; elle est <strong>usée</strong> quand l'équilibre est atteint ($e = 0$, $\\Delta_r G = 0$).` },
      ]
    },

    {
      titre: 'Diagrammes potentiel-pH (Pourbaix)',
      cartes: [
        { type:'def', label:'DEF', titre:'Principe d\'un diagramme E-pH',
          contenu:`Un <strong>diagramme potentiel-pH</strong> (ou de Pourbaix) représente, dans le plan $(\\text{pH}, E)$, les <strong>domaines de prédominance</strong> (espèces dissoutes) ou d'<strong>existence</strong> (solides, gaz) des différentes espèces d'un élément.<br>Conventions à préciser : <strong>concentration de tracé</strong> $c_{\\text{tra}}$ (frontière entre espèces dissoutes) et convention à la frontière (égalité des concentrations, ou des atomes de l'élément).` },
        { type:'prop', label:'PROP', titre:'Nature des frontières',
          contenu:`Les frontières du diagramme E-pH traduisent :<br><ul><li><strong>verticales</strong> : équilibres <strong>acido-basiques</strong> ou de précipitation (dépendent du pH, pas de $E$) ;</li><li><strong>horizontales</strong> : équilibres <strong>redox sans $H^+$</strong> (dépendent de $E$, pas du pH) ;</li><li><strong>obliques</strong> : équilibres redox <strong>faisant intervenir $H^+$</strong> (pente $-0{,}059\\,p/n$ où $p$ = nombre de $H^+$, $n$ = électrons).</li></ul>` },
        { type:'meth', label:'METH', titre:'Construire un diagramme E-pH',
          contenu:`<strong>1.</strong> Recenser les espèces de l'élément et leur n.o. ; les placer (n.o. croissant vers le haut).<br><strong>2.</strong> Classer par pH les espèces de même n.o. (équilibres acido-basiques → frontières verticales).<br><strong>3.</strong> Écrire les demi-équations entre espèces de n.o. différents et appliquer Nernst (frontières horizontales/obliques).<br><strong>4.</strong> Reporter la <strong>convention de tracé</strong> aux frontières.<br><strong>5.</strong> Superposer les frontières de l'eau.` },
        { type:'prop', label:'PROP', titre:'Diagramme E-pH de l\'eau et stabilité',
          contenu:`L'eau possède deux couples :<br><ul><li>$O_2/H_2O$ : $E = 1{,}23 - 0{,}059\\,\\text{pH}$ (frontière supérieure) ;</li><li>$H^+/H_2$ (ou $H_2O/H_2$) : $E = -0{,}059\\,\\text{pH}$ (frontière inférieure).</li></ul>Une espèce dont le domaine est <strong>au-dessus</strong> de la droite $O_2/H_2O$ oxyde l'eau (dégagement de $O_2$) ; en <strong>dessous</strong> de $H^+/H_2$, elle réduit l'eau (dégagement de $H_2$). Une espèce stable dans l'eau a son domaine <strong>recouvrant</strong> celui de l'eau.` },
        { type:'ex', label:'EX', titre:'Diagramme du fer et corrosion',
          contenu:`Le diagramme E-pH du fer fait apparaître $Fe$, $Fe^{2+}$, $Fe^{3+}$, $Fe(OH)_2$, $Fe(OH)_3$.<br>On distingue trois zones :<br><ul><li><strong>immunité</strong> : domaine du métal $Fe$ (stable) ;</li><li><strong>corrosion</strong> : domaines des ions $Fe^{2+}$, $Fe^{3+}$ (le métal est attaqué) ;</li><li><strong>passivation</strong> : domaines des hydroxydes/oxydes (couche protectrice).</li></ul>Le fer se corrode en milieu acide aéré (formation de rouille).` },
      ]
    },

    {
      titre: 'Électrolyse et courbes intensité-potentiel',
      cartes: [
        { type:'def', label:'DEF', titre:'Électrolyse',
          contenu:`L'<strong>électrolyse</strong> est une transformation redox <strong>forcée</strong> par un générateur extérieur : on impose une réaction <strong>non spontanée</strong> ($\\Delta_r G > 0$).<br>Conventions inversées par rapport à la pile :<br><ul><li>l'<strong>anode</strong> (oxydation) est reliée au pôle $+$ du générateur ;</li><li>la <strong>cathode</strong> (réduction) est reliée au pôle $-$.</li></ul>Une <strong>tension minimale</strong> (supérieure à $e^\\circ$, à cause des surtensions) doit être appliquée pour amorcer l'électrolyse.` },
        { type:'form', label:'FORM', titre:'Lois de Faraday (quantité d\'électricité)',
          contenu:`La quantité de matière transformée à une électrode est proportionnelle à la charge $Q$ ayant traversé la cellule :<br>$$Q = I\\,t = n_{e^-}\\,F \\quad\\Longrightarrow\\quad n_{\\text{esp}} = \\frac{I\\,t}{n\\,F}$$<br>où $n$ est le nombre d'électrons échangés par entité, $F = 96\\,500\\ \\text{C·mol}^{-1}$. Ces <strong>lois de Faraday</strong> permettent de relier intensité, durée et masse déposée (galvanoplastie, affinage des métaux).` },
        { type:'def', label:'DEF', titre:'Courbes intensité-potentiel et surtension',
          contenu:`Une <strong>courbe intensité-potentiel</strong> $I = f(E)$ traduit la <strong>cinétique</strong> électrochimique à une électrode.<br>La <strong>surtension</strong> $\\eta = E - E_{\\text{eq}}$ est l'écart entre le potentiel appliqué et le potentiel d'équilibre nécessaire pour qu'un courant notable circule. Un système est dit <strong>rapide</strong> (courbe verticale près de $E_{\\text{eq}}$) ou <strong>lent</strong> (forte surtension requise).` },
        { type:'def', label:'DEF', titre:'Palier de diffusion et système rapide/lent',
          contenu:`Quand le courant est limité par l'<strong>apport de réactif</strong> à l'électrode (diffusion), la courbe présente un <strong>palier de diffusion</strong> : $|I|$ plafonne (courant limite proportionnel à la concentration).<br>Un <strong>système rapide</strong> présente une vague atteinte sans surtension notable ; un <strong>système lent</strong> exige une surtension importante. Le caractère rapide/lent dépend du couple et de la nature de l'électrode.` },
        { type:'meth', label:'METH', titre:'Prévoir les réactions aux électrodes',
          contenu:`Lors d'une électrolyse, plusieurs couples peuvent réagir. On utilise les courbes $I$-$E$ :<br><strong>À la cathode</strong> (réduction) : se réduit le plus facilement l'oxydant dont le potentiel (corrigé de la surtension) est le plus <strong>élevé</strong>.<br><strong>À l'anode</strong> (oxydation) : s'oxyde le plus facilement le réducteur de potentiel le plus <strong>bas</strong>.<br>Les <strong>surtensions</strong> peuvent inverser l'ordre thermodynamique : par exemple, la surtension du dégagement de $O_2$/$H_2$ explique l'électrolyse d'une solution de $NaCl$.` },
      ]
    },
  ]
},

];
