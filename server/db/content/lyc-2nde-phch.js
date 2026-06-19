// Seconde générale — Physique-Chimie
// Programme officiel MEN 2019 (réforme du lycée)
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ══════════════════════════════════════════════════════════════
// CONSTITUTION ET TRANSFORMATIONS DE LA MATIÈRE
// ══════════════════════════════════════════════════════════════

{
  id: 'phch-2e-constit', filiere: '2nde', matiere: 'phch',
  titre: 'Constitution de la matière', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Corps purs, mélanges et espèces chimiques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Espèce chimique et corps pur',
          contenu: `Une <strong>espèce chimique</strong> est un ensemble d'entités identiques (atomes, molécules ou ions) caractérisé par un nom, une formule et des propriétés physiques propres (température de fusion, d'ébullition, masse volumique, densité).<br>Un <strong>corps pur</strong> est constitué d'une seule espèce chimique. Exemples : eau distillée ($H_2O$), dioxygène ($O_2$), fer ($Fe$).` },
        { type: 'def', label: 'DEF', titre: 'Mélange : homogène ou hétérogène',
          contenu: `Un <strong>mélange</strong> contient au moins deux espèces chimiques différentes.<br>— <strong>Homogène</strong> : on ne distingue qu'une seule phase à l'œil nu (eau salée, air, alliage).<br>— <strong>Hétérogène</strong> : on distingue plusieurs phases ou constituants (eau + huile, eau boueuse, granite).<br>Une <strong>solution</strong> est un mélange homogène obtenu par dissolution d'une espèce (le <strong>soluté</strong>) dans un liquide (le <strong>solvant</strong>).` },
        { type: 'prop', label: 'PROP', titre: 'Identifier une espèce par ses propriétés physiques',
          contenu: `Une espèce chimique pure se caractérise par des grandeurs physiques mesurables et tabulées :<br>— <strong>température de fusion</strong> $T_{fus}$ et d'<strong>ébullition</strong> $T_{eb}$ (sous pression atmosphérique) ;<br>— <strong>masse volumique</strong> $\\rho = \\dfrac{m}{V}$ (en $\\text{g/mL}$ ou $\\text{kg/m}^3$) ;<br>— <strong>densité</strong> $d = \\dfrac{\\rho_{corps}}{\\rho_{eau}}$ (sans unité, $\\rho_{eau} = 1{,}00$ g/mL).<br>La comparaison aux valeurs de référence permet d'identifier l'espèce.` },
        { type: 'meth', label: 'METH', titre: 'Calculer une masse volumique et une densité',
          contenu: `<strong>Méthode</strong> : mesurer la masse $m$ (balance) et le volume $V$ (éprouvette), puis appliquer $\\rho = \\dfrac{m}{V}$.<br>Exemple : un échantillon de masse $m = 27{,}0$ g occupe $V = 10{,}0$ mL.<br>$$\\rho = \\frac{27{,}0}{10{,}0} = 2{,}70 \\text{ g/mL}$$ $$d = \\frac{2{,}70}{1{,}00} = 2{,}70$$ La densité $2{,}70$ correspond à l'aluminium : l'échantillon est probablement de l'aluminium.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : corps pur ou mélange ?',
          contenu: `Classer : (a) air, (b) eau distillée, (c) eau minérale, (d) cuivre, (e) vinaigrette.<br><br><strong>Solution :</strong><br>— (b) eau distillée et (d) cuivre : <strong>corps purs</strong> (une seule espèce).<br>— (a) air et (c) eau minérale : <strong>mélanges homogènes</strong> (plusieurs espèces, une seule phase).<br>— (e) vinaigrette : <strong>mélange hétérogène</strong> (huile + vinaigre, deux phases).` }
      ]
    },
    {
      titre: 'Techniques de séparation et d\'identification',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Filtration, décantation, distillation',
          contenu: `Pour séparer les constituants d'un mélange :<br>— <strong>Décantation</strong> : séparation par gravité d'un solide et d'un liquide, ou de deux liquides non miscibles (ampoule à décanter).<br>— <strong>Filtration</strong> : retient le solide insoluble sur un filtre, le liquide (filtrat) passe.<br>— <strong>Distillation</strong> : sépare des liquides miscibles selon leur température d'ébullition (le plus volatil s'évapore et se condense en premier).` },
        { type: 'meth', label: 'METH', titre: 'Chromatographie sur couche mince (CCM)',
          contenu: `La <strong>CCM</strong> identifie les espèces d'un mélange par migration d'un éluant sur une plaque.<br>— Chaque espèce migre à sa propre vitesse → tache à une hauteur caractéristique.<br>— <strong>Rapport frontal</strong> : $R_f = \\dfrac{h}{H}$ où $h$ est la distance parcourue par la tache et $H$ celle du front de l'éluant. $0 \\le R_f \\le 1$.<br>Deux taches de même $R_f$ (mêmes conditions) correspondent à la même espèce.` },
        { type: 'def', label: 'DEF', titre: 'Espèce naturelle et synthétique',
          contenu: `Une espèce <strong>naturelle</strong> est présente dans la nature et extraite d'un être vivant ou d'un minéral. Une espèce <strong>synthétique</strong> est fabriquée par l'Homme au laboratoire ou en industrie.<br>Une espèce synthétisée peut être <strong>identique</strong> à son équivalent naturel (mêmes propriétés, même formule) : la vanilline de synthèse est strictement identique à la vanilline naturelle.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : exploiter une CCM',
          contenu: `Sur une plaque, le front de l'éluant a parcouru $H = 8{,}0$ cm. Une tache du colorant inconnu est à $h = 6{,}0$ cm.<br><br><strong>Solution :</strong> $$R_f = \\frac{6{,}0}{8{,}0} = 0{,}75$$ Si un colorant de référence présente aussi $R_f = 0{,}75$ dans les mêmes conditions, l'inconnu contient ce colorant.` }
      ]
    },
    {
      titre: 'L\'atome et l\'élément chimique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Structure de l\'atome',
          contenu: `Un <strong>atome</strong> est constitué d'un <strong>noyau</strong> (protons + neutrons, les <em>nucléons</em>) entouré d'un nuage d'<strong>électrons</strong>.<br>— charge du proton : $+e$, charge de l'électron : $-e$, avec $e = 1{,}6 \\times 10^{-19}$ C ;<br>— le neutron est électriquement neutre ;<br>— l'atome est globalement <strong>neutre</strong> : il possède autant d'électrons que de protons.<br>Ordre de grandeur : noyau $\\sim 10^{-15}$ m, atome $\\sim 10^{-10}$ m. L'atome est essentiellement constitué de vide (structure lacunaire).` },
        { type: 'def', label: 'DEF', titre: 'Numéro atomique, nombre de masse, notation',
          contenu: `— <strong>Numéro atomique</strong> $Z$ : nombre de protons (= nombre d'électrons de l'atome neutre).<br>— <strong>Nombre de masse</strong> $A$ : nombre total de nucléons, $A = Z + N$ où $N$ est le nombre de neutrons.<br>Notation symbolique du noyau : $^{A}_{Z}X$.<br>Exemple : $^{23}_{11}Na$ possède $Z = 11$ protons, $N = 23 - 11 = 12$ neutrons et $11$ électrons.` },
        { type: 'def', label: 'DEF', titre: 'Élément chimique et isotopes',
          contenu: `L'<strong>élément chimique</strong> est caractérisé par son numéro atomique $Z$ : tous les atomes (et ions) ayant le même $Z$ appartiennent au même élément.<br>Des <strong>isotopes</strong> sont des atomes de même $Z$ mais de nombres de masse $A$ différents (nombres de neutrons différents).<br>Exemple : $^{12}_{6}C$, $^{13}_{6}C$ et $^{14}_{6}C$ sont trois isotopes du carbone.<br>Au cours des transformations chimiques, les éléments se <strong>conservent</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'La masse de l\'atome est concentrée dans le noyau',
          contenu: `La masse de l'électron est environ $1836$ fois plus petite que celle d'un nucléon :<br>$$m_e \\approx 9{,}1 \\times 10^{-31} \\text{ kg} \\qquad m_p \\approx m_n \\approx 1{,}67 \\times 10^{-27} \\text{ kg}$$ Conséquence : la <strong>masse de l'atome est quasiment égale à celle du noyau</strong>. On peut négliger la masse des électrons : $m_{atome} \\approx A \\times m_{nucléon}$.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : composition d\'un atome',
          contenu: `Donner la composition de l'atome de chlore $^{35}_{17}Cl$.<br><br><strong>Solution :</strong><br>— protons : $Z = 17$ ;<br>— électrons (atome neutre) : $17$ ;<br>— neutrons : $N = A - Z = 35 - 17 = 18$.<br>Masse approchée : $m \\approx 35 \\times 1{,}67 \\times 10^{-27} \\approx 5{,}8 \\times 10^{-26}$ kg.` }
      ]
    },
    {
      titre: 'Configuration électronique et classification périodique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Couches et sous-couches électroniques',
          contenu: `Les électrons se répartissent dans des sous-couches notées $1s, 2s, 2p, 3s, 3p$ ... Capacités : $s$ accueille au maximum $2$ électrons, $p$ en accueille $6$.<br>Le remplissage suit l'ordre croissant d'énergie : $1s, 2s, 2p, 3s, 3p$ (programme de Seconde limité aux $18$ premiers éléments).<br>Les électrons de la <strong>couche externe</strong> (numéro $n$ le plus élevé) sont les <strong>électrons de valence</strong> : ils gouvernent la réactivité.` },
        { type: 'meth', label: 'METH', titre: 'Établir une configuration électronique',
          contenu: `<strong>Règle</strong> : remplir les sous-couches dans l'ordre $1s, 2s, 2p, 3s, 3p$ jusqu'à placer les $Z$ électrons.<br>Exemples :<br>— $H$ ($Z=1$) : $1s^1$<br>— $C$ ($Z=6$) : $1s^2\\,2s^2\\,2p^2$<br>— $Na$ ($Z=11$) : $1s^2\\,2s^2\\,2p^6\\,3s^1$<br>— $Cl$ ($Z=17$) : $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$<br>Le sodium a $1$ électron de valence ; le chlore en a $7$.` },
        { type: 'def', label: 'DEF', titre: 'Classification périodique des éléments',
          contenu: `Dans le <strong>tableau périodique</strong>, les éléments sont rangés par numéro atomique $Z$ croissant.<br>— une <strong>ligne (période)</strong> = même couche externe en cours de remplissage ;<br>— une <strong>colonne (famille)</strong> = même nombre d'électrons de valence, donc des <strong>propriétés chimiques voisines</strong>.<br>Familles notables : colonne 1 = <strong>alcalins</strong> ; colonne 17 = <strong>halogènes</strong> ; colonne 18 = <strong>gaz nobles</strong> (très stables).` },
        { type: 'prop', label: 'PROP', titre: 'Lien configuration ↔ position dans le tableau',
          contenu: `Pour les $18$ premiers éléments :<br>— le <strong>numéro de ligne</strong> = numéro de la couche externe (la plus grande valeur de $n$) ;<br>— le <strong>numéro de colonne</strong> est lié au nombre d'électrons de valence.<br>Exemple : $Cl$ ($1s^2 2s^2 2p^6 3s^2 3p^5$) → couche externe $n=3$ (3ᵉ période), $7$ électrons de valence (colonne des halogènes).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : prévoir des propriétés par famille',
          contenu: `Le sodium $Na$ ($Z=11$) appartient à la colonne des alcalins. Le lithium $Li$ ($Z=3$) a pour configuration $1s^2\\,2s^1$. À quelle famille appartient-il ?<br><br><strong>Solution :</strong> $Li$ a $1$ électron de valence, comme $Na$ : il appartient à la même colonne (alcalins). On prévoit des <strong>propriétés chimiques semblables</strong> (réactions analogues avec l'eau, formation d'ions $X^+$).` }
      ]
    },
    {
      titre: 'Ions et molécules stables',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Stabilité chimique : règles du duet et de l\'octet',
          contenu: `Les <strong>gaz nobles</strong> (colonne 18) sont chimiquement très stables car leur couche externe est saturée.<br>— <strong>Règle du duet</strong> : les éléments proches de l'hélium ($Z \\le 4$) tendent vers $2$ électrons de valence.<br>— <strong>Règle de l'octet</strong> : les autres tendent vers $8$ électrons de valence.<br>Pour atteindre cette stabilité, un atome <strong>gagne ou perd des électrons</strong> (formation d'ions) ou <strong>partage des électrons</strong> (liaisons covalentes).` },
        { type: 'meth', label: 'METH', titre: 'Prévoir l\'ion monoatomique formé',
          contenu: `<strong>Méthode</strong> : l'atome perd ou gagne le nombre minimal d'électrons pour atteindre la configuration du gaz noble le plus proche.<br>Exemples :<br>— $Na$ ($3s^1$) perd $1$ électron → $Na^+$ (config de $Ne$) ;<br>— $Cl$ ($3p^5$) gagne $1$ électron → $Cl^-$ (config de $Ar$) ;<br>— $Mg$ ($Z=12$) perd $2$ électrons → $Mg^{2+}$ ;<br>— $O$ ($Z=8$) gagne $2$ électrons → $O^{2-}$.` },
        { type: 'def', label: 'DEF', titre: 'Liaison covalente et molécule',
          contenu: `Une <strong>liaison covalente</strong> résulte de la mise en commun de deux électrons (un de chaque atome) formant un <strong>doublet liant</strong>. Une <strong>molécule</strong> est un assemblage neutre d'atomes liés par covalence.<br>Le <strong>nombre de liaisons</strong> d'un atome est le nombre d'électrons qui lui manquent pour respecter le duet/octet : $H \\to 1$, $O \\to 2$, $N \\to 3$, $C \\to 4$.<br>Les électrons de valence non liants forment des <strong>doublets non liants</strong>.` },
        { type: 'meth', label: 'METH', titre: 'Établir une formule de Lewis',
          contenu: `<strong>Méthode</strong> : (1) compter les électrons de valence de chaque atome ; (2) relier les atomes par des doublets liants pour respecter duet/octet ; (3) compléter par les doublets non liants.<br>Exemple — $H_2O$ : l'oxygène ($6$ él. de valence) forme $2$ liaisons avec deux $H$ et conserve $2$ doublets non liants. Chaque $H$ respecte le duet, l'oxygène respecte l'octet.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : ion et molécule',
          contenu: `(a) Quel ion l'aluminium $Al$ ($Z=13$) forme-t-il ? (b) Combien de liaisons l'azote forme-t-il dans $NH_3$ ?<br><br><strong>Solution :</strong><br>(a) $Al$ : $1s^2 2s^2 2p^6 3s^2 3p^1$, soit $3$ électrons de valence → perd $3$ électrons → <strong>$Al^{3+}$</strong>.<br>(b) $N$ a $5$ électrons de valence, il lui en manque $3$ → il forme <strong>$3$ liaisons</strong> (avec $3$ atomes $H$) et garde $1$ doublet non liant.` }
      ]
    }
  ]
},

{
  id: 'phch-2e-quantite', filiere: '2nde', matiere: 'phch',
  titre: 'Quantité de matière et concentration', ordre: 2, enrich: false,
  sections: [
    {
      titre: 'La mole et la masse molaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Quantité de matière, mole',
          contenu: `La <strong>quantité de matière</strong> $n$ mesure le nombre d'entités (atomes, molécules, ions) d'un échantillon. Son unité est la <strong>mole</strong> (mol).<br>Une mole contient un nombre d'entités égal à la <strong>constante d'Avogadro</strong> :<br>$$N_A = 6{,}02 \\times 10^{23} \\text{ mol}^{-1}$$ Lien avec le nombre d'entités $N$ :<br>$$n = \\frac{N}{N_A}$$ avec $n$ en mol et $N$ sans unité.` },
        { type: 'def', label: 'DEF', titre: 'Masse molaire atomique et moléculaire',
          contenu: `La <strong>masse molaire</strong> $M$ est la masse d'une mole d'une espèce, en $\\text{g/mol}$.<br>— atomique : lue dans le tableau périodique (ex. $M(C) = 12{,}0$ g/mol) ;<br>— moléculaire : somme des masses molaires atomiques des atomes de la molécule.<br>Exemple : $M(H_2O) = 2 \\times 1{,}0 + 16{,}0 = 18{,}0$ g/mol.` },
        { type: 'form', label: 'FORM', titre: 'Relation masse — quantité de matière',
          contenu: `$$\\boxed{n = \\frac{m}{M}}$$ avec $n$ en mol, $m$ en g, $M$ en g/mol.<br>Formules dérivées : $m = n \\times M$ et $M = \\dfrac{m}{n}$.` },
        { type: 'meth', label: 'METH', titre: 'Calculer une masse molaire moléculaire',
          contenu: `<strong>Méthode</strong> : repérer la formule, multiplier chaque $M$ atomique par le nombre d'atomes, additionner.<br>Exemple — glucose $C_6H_{12}O_6$ :<br>$$M = 6 \\times 12{,}0 + 12 \\times 1{,}0 + 6 \\times 16{,}0$$ $$M = 72 + 12 + 96 = 180 \\text{ g/mol}$$` },
        { type: 'ex', label: 'EX', titre: 'Exercice : de la masse à la quantité',
          contenu: `Quelle quantité de matière contient $m = 9{,}0$ g d'eau ?<br><br><strong>Solution :</strong> $M(H_2O) = 18{,}0$ g/mol.<br>$$n = \\frac{m}{M} = \\frac{9{,}0}{18{,}0} = 0{,}50 \\text{ mol}$$ Nombre de molécules : $N = n \\times N_A = 0{,}50 \\times 6{,}02 \\times 10^{23} \\approx 3{,}0 \\times 10^{23}$.` }
      ]
    },
    {
      titre: 'Le cas des gaz : volume molaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Volume molaire d\'un gaz',
          contenu: `Le <strong>volume molaire</strong> $V_m$ est le volume occupé par une mole de gaz dans des conditions fixées de température et de pression. Il est le <strong>même pour tous les gaz</strong> (loi d'Avogadro).<br>Exemple courant : à $20\\,^{\\circ}$C et $1013$ hPa, $V_m \\approx 24{,}0$ L/mol.` },
        { type: 'form', label: 'FORM', titre: 'Quantité de matière d\'un gaz',
          contenu: `$$\\boxed{n = \\frac{V}{V_m}}$$ avec $n$ en mol, $V$ le volume du gaz en L, $V_m$ en L/mol (dans les conditions indiquées).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : quantité d\'un gaz',
          contenu: `Quelle quantité de dioxygène contient $V = 6{,}0$ L de gaz, avec $V_m = 24{,}0$ L/mol ?<br><br><strong>Solution :</strong> $$n = \\frac{V}{V_m} = \\frac{6{,}0}{24{,}0} = 0{,}25 \\text{ mol}$$` }
      ]
    },
    {
      titre: 'Concentration en masse et concentration molaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Concentration en masse',
          contenu: `La <strong>concentration en masse</strong> $C_m$ (ou $t$, titre massique) d'un soluté est la masse de soluté dissous par litre de solution :<br>$$C_m = \\frac{m_{soluté}}{V_{solution}}$$ unité : $\\text{g/L}$. Attention : $V$ est le volume de <strong>solution</strong>, pas de solvant.` },
        { type: 'def', label: 'DEF', titre: 'Concentration en quantité de matière',
          contenu: `La <strong>concentration molaire</strong> $C$ est la quantité de soluté par litre de solution :<br>$$C = \\frac{n_{soluté}}{V_{solution}}$$ unité : $\\text{mol/L}$. Lien avec la concentration en masse :<br>$$C_m = C \\times M$$ où $M$ est la masse molaire du soluté.` },
        { type: 'meth', label: 'METH', titre: 'Préparer une solution par dissolution',
          contenu: `<strong>Méthode</strong> pour préparer un volume $V$ à concentration $C$ :<br>1. calculer $n = C \\times V$ ;<br>2. calculer $m = n \\times M$ ;<br>3. peser la masse $m$ de soluté ;<br>4. dissoudre dans un peu de solvant en fiole jaugée, puis compléter au trait de jauge.<br>La <strong>fiole jaugée</strong> fixe précisément le volume de solution.` },
        { type: 'meth', label: 'METH', titre: 'Préparer une solution par dilution',
          contenu: `Lors d'une <strong>dilution</strong>, la quantité de soluté se conserve : $n_{mère} = n_{fille}$, soit<br>$$\\boxed{C_0 \\times V_0 = C_1 \\times V_1}$$ <strong>Méthode</strong> : prélever le volume $V_0 = \\dfrac{C_1 V_1}{C_0}$ de solution mère à la pipette jaugée, le verser en fiole de volume $V_1$, compléter au trait. Le <strong>facteur de dilution</strong> est $F = \\dfrac{C_0}{C_1} = \\dfrac{V_1}{V_0}$.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : dilution',
          contenu: `On dispose d'une solution mère à $C_0 = 0{,}50$ mol/L. Quel volume prélever pour préparer $V_1 = 100$ mL à $C_1 = 0{,}10$ mol/L ?<br><br><strong>Solution :</strong> $$V_0 = \\frac{C_1 V_1}{C_0} = \\frac{0{,}10 \\times 100}{0{,}50} = 20 \\text{ mL}$$ On prélève $20$ mL de solution mère et on complète à $100$ mL. Facteur de dilution $F = 5$.` }
      ]
    },
    {
      titre: 'Solubilité, saturation et dosages par étalonnage',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Solubilité et solution saturée',
          contenu: `La <strong>solubilité</strong> $s$ d'un soluté est la masse (ou quantité) maximale que l'on peut dissoudre dans un litre de solvant à une température donnée.<br>Une solution est <strong>saturée</strong> lorsque cette limite est atteinte : tout ajout supplémentaire de soluté ne se dissout plus.<br>La solubilité dépend de la nature du couple soluté/solvant et de la <strong>température</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Dosage par étalonnage',
          contenu: `Un <strong>dosage par étalonnage</strong> détermine la concentration inconnue d'une solution en comparant une de ses propriétés physiques à celle de solutions de concentrations connues (la <strong>gamme d'étalonnage</strong>).<br>Grandeur souvent utilisée : l'<strong>absorbance</strong> $A$ mesurée au spectrophotomètre pour une espèce colorée.` },
        { type: 'prop', label: 'PROP', titre: 'Loi de Beer-Lambert (approche de seconde)',
          contenu: `Pour une espèce colorée en solution diluée, l'<strong>absorbance</strong> $A$ est <strong>proportionnelle</strong> à la concentration $C$ :<br>$$A = k \\times C$$ La courbe d'étalonnage $A = f(C)$ est une <strong>droite passant par l'origine</strong>. On y lit la concentration de l'échantillon à partir de son absorbance mesurée.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : exploiter une courbe d\'étalonnage',
          contenu: `La droite d'étalonnage vérifie $A = 5{,}0 \\times C$ ($C$ en mol/L). Une solution inconnue a une absorbance $A = 0{,}40$. Déterminer sa concentration.<br><br><strong>Solution :</strong> $$C = \\frac{A}{5{,}0} = \\frac{0{,}40}{5{,}0} = 0{,}080 \\text{ mol/L}$$` }
      ]
    }
  ]
},

{
  id: 'phch-2e-transfo', filiere: '2nde', matiere: 'phch',
  titre: 'Transformations de la matière', ordre: 3, enrich: false,
  sections: [
    {
      titre: 'Les trois types de transformations',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Transformation physique',
          contenu: `Une <strong>transformation physique</strong> modifie l'état physique ou l'organisation des espèces, mais <strong>les espèces chimiques sont conservées</strong> : aucune nouvelle espèce n'apparaît.<br>Exemples : changements d'état (fusion, vaporisation, solidification...), dissolution. Lors d'une fusion de la glace, on a toujours de l'eau $H_2O$.` },
        { type: 'def', label: 'DEF', titre: 'Transformation chimique',
          contenu: `Une <strong>transformation chimique</strong> consomme des espèces (<strong>réactifs</strong>) et en forme de nouvelles (<strong>produits</strong>). Les <strong>noyaux sont conservés</strong> (les éléments se conservent), mais les molécules sont réorganisées.<br>Exemple : combustion du méthane qui forme de l'eau et du dioxyde de carbone.` },
        { type: 'def', label: 'DEF', titre: 'Transformation nucléaire',
          contenu: `Une <strong>transformation nucléaire</strong> modifie le <strong>noyau</strong> des atomes : le numéro atomique $Z$ et/ou le nombre de masse $A$ changent. Il y a <strong>changement d'élément chimique</strong>.<br>Exemples : radioactivité, fission, fusion. Ces transformations libèrent des énergies considérables (centrales nucléaires, étoiles).` },
        { type: 'prop', label: 'PROP', titre: 'Comparer les trois transformations',
          contenu: `Critère de distinction :<br>— <strong>physique</strong> : mêmes espèces chimiques (noyaux et molécules conservés) ;<br>— <strong>chimique</strong> : nouvelles molécules, mais noyaux/éléments conservés ;<br>— <strong>nucléaire</strong> : noyaux modifiés, changement d'élément.<br>Les énergies mises en jeu croissent fortement : physique $<$ chimique $\\ll$ nucléaire.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : classer des transformations',
          contenu: `Classer : (a) l'eau bout, (b) le fer rouille, (c) l'uranium $^{238}U$ se désintègre, (d) le sucre se dissout.<br><br><strong>Solution :</strong><br>— (a) et (d) : <strong>physiques</strong> (espèces conservées) ;<br>— (b) rouille : <strong>chimique</strong> (formation d'oxyde de fer) ;<br>— (c) désintégration : <strong>nucléaire</strong> (noyau modifié).` }
      ]
    },
    {
      titre: 'Modéliser une transformation chimique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réactifs, produits, équation de réaction',
          contenu: `L'<strong>équation de réaction</strong> modélise la transformation :<br>$$\\text{réactifs} \\longrightarrow \\text{produits}$$ Les <strong>réactifs</strong> sont consommés, les <strong>produits</strong> formés. On précise éventuellement l'état physique : $(s)$ solide, $(l)$ liquide, $(g)$ gaz, $(aq)$ en solution aqueuse.` },
        { type: 'meth', label: 'METH', titre: 'Équilibrer (ajuster) une équation chimique',
          contenu: `<strong>Principe</strong> (conservation des éléments et de la charge) : il doit y avoir autant d'atomes de chaque élément à gauche qu'à droite. On ajuste les <strong>nombres stœchiométriques</strong> devant les formules.<br>Exemple — combustion du méthane :<br>$$CH_4 + 2\\,O_2 \\longrightarrow CO_2 + 2\\,H_2O$$ Vérification : $C$ : 1=1 ; $H$ : 4=4 ; $O$ : 4=4. ✔` },
        { type: 'prop', label: 'PROP', titre: 'Conservation de la masse (loi de Lavoisier)',
          contenu: `Au cours d'une transformation chimique, la <strong>masse totale se conserve</strong> : « Rien ne se perd, rien ne se crée, tout se transforme. »<br>$$m_{\\text{réactifs (consommés)}} = m_{\\text{produits (formés)}}$$ Conséquence pratique : en système fermé, la masse mesurée avant et après réaction est identique.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : ajuster une équation',
          contenu: `Ajuster la combustion de l'éthane : $C_2H_6 + O_2 \\to CO_2 + H_2O$.<br><br><strong>Solution :</strong> on obtient<br>$$2\\,C_2H_6 + 7\\,O_2 \\longrightarrow 4\\,CO_2 + 6\\,H_2O$$ Vérification : $C$ : 4=4 ; $H$ : 12=12 ; $O$ : 14=14. ✔` }
      ]
    },
    {
      titre: 'Bilan de matière et réactif limitant',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réactif limitant',
          contenu: `Le <strong>réactif limitant</strong> est celui qui est entièrement consommé en premier ; il <strong>fixe la quantité maximale de produit</strong> formé. Les autres réactifs sont en <strong>excès</strong>.<br>On le repère en comparant les rapports $\\dfrac{n_{\\text{réactif}}}{\\text{nombre stœchiométrique}}$ : le plus petit désigne le limitant.` },
        { type: 'meth', label: 'METH', titre: 'Déterminer le réactif limitant',
          contenu: `Pour $a\\,A + b\\,B \\to \\text{produits}$ avec $n_A$ et $n_B$ initiales :<br>1. calculer $\\dfrac{n_A}{a}$ et $\\dfrac{n_B}{b}$ ;<br>2. le <strong>plus petit rapport</strong> correspond au réactif limitant ;<br>3. en déduire les quantités de produits via les proportions stœchiométriques.` },
        { type: 'prop', label: 'PROP', titre: 'Proportions stœchiométriques',
          contenu: `Si tous les réactifs sont introduits exactement dans le rapport des nombres stœchiométriques, le mélange est dit <strong>stœchiométrique</strong> : tous les réactifs sont totalement consommés ensemble, sans excès.<br>Pour $a\\,A + b\\,B \\to \\dots$ : mélange stœchiométrique si $\\dfrac{n_A}{a} = \\dfrac{n_B}{b}$.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : réactif limitant',
          contenu: `Réaction $2\\,H_2 + O_2 \\to 2\\,H_2O$ avec $n(H_2) = 0{,}30$ mol et $n(O_2) = 0{,}20$ mol. Quel est le limitant ?<br><br><strong>Solution :</strong> $\\dfrac{n(H_2)}{2} = 0{,}15$ et $\\dfrac{n(O_2)}{1} = 0{,}20$. Le plus petit est $0{,}15$ → <strong>$H_2$ est limitant</strong>. Eau formée : $n(H_2O) = n(H_2) = 0{,}30$ mol ; il reste $0{,}20 - 0{,}15 = 0{,}05$ mol de $O_2$ en excès.` }
      ]
    },
    {
      titre: 'Transformations nucléaires',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Radioactivité et écriture d\'une désintégration',
          contenu: `Un noyau <strong>radioactif</strong> est instable : il se transforme spontanément en émettant des particules ou un rayonnement.<br>L'écriture d'une réaction nucléaire respecte les <strong>lois de conservation</strong> :<br>— conservation du nombre de nucléons $A$ ;<br>— conservation de la charge $Z$.<br>$$^{A_1}_{Z_1}X \\longrightarrow {}^{A_2}_{Z_2}Y + {}^{A_3}_{Z_3}W$$ avec $A_1 = A_2 + A_3$ et $Z_1 = Z_2 + Z_3$.` },
        { type: 'def', label: 'DEF', titre: 'Fission et fusion',
          contenu: `— <strong>Fission</strong> : un noyau lourd se scinde en noyaux plus légers sous l'impact d'un neutron (réacteurs nucléaires).<br>— <strong>Fusion</strong> : deux noyaux légers s'unissent pour former un noyau plus lourd (cœur des étoiles, Soleil).<br>Ces réactions libèrent une énergie colossale, sans commune mesure avec les réactions chimiques.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : compléter une réaction nucléaire',
          contenu: `Compléter : $^{14}_{6}C \\longrightarrow {}^{14}_{7}N + {}^{A}_{Z}X$.<br><br><strong>Solution :</strong> conservation de $A$ : $14 = 14 + A \\Rightarrow A = 0$. Conservation de $Z$ : $6 = 7 + Z \\Rightarrow Z = -1$. La particule $^{0}_{-1}X$ est un <strong>électron</strong> : c'est une désintégration $\\beta^-$.` }
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// MOUVEMENTS ET INTERACTIONS
// ══════════════════════════════════════════════════════════════

{
  id: 'phch-2e-mouvt', filiere: '2nde', matiere: 'phch',
  titre: 'Mouvements et interactions', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Décrire un mouvement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Système, référentiel et relativité du mouvement',
          contenu: `Le <strong>système</strong> est l'objet (ou le point) dont on étudie le mouvement.<br>Le <strong>référentiel</strong> est l'objet par rapport auquel on observe le mouvement, muni d'une horloge.<br>Le mouvement est <strong>relatif</strong> : il dépend du référentiel choisi. Un passager assis est immobile dans le référentiel du train mais en mouvement dans le référentiel terrestre.<br>Référentiels usuels : <strong>terrestre</strong> (lié au sol), <strong>géocentrique</strong> (centre de la Terre), <strong>héliocentrique</strong> (Soleil).` },
        { type: 'def', label: 'DEF', titre: 'Trajectoire',
          contenu: `La <strong>trajectoire</strong> est l'ensemble des positions successives occupées par le système au cours du temps, dans un référentiel donné.<br>— <strong>rectiligne</strong> : trajectoire en ligne droite ;<br>— <strong>circulaire</strong> : trajectoire en arc de cercle ;<br>— <strong>curviligne</strong> : trajectoire quelconque.<br>La forme de la trajectoire dépend du référentiel.` },
        { type: 'def', label: 'DEF', titre: 'Vitesse moyenne et vitesse instantanée',
          contenu: `La <strong>vitesse moyenne</strong> entre deux instants est :<br>$$v = \\frac{d}{\\Delta t}$$ ($d$ = distance parcourue, $\\Delta t$ = durée), en m/s.<br>La <strong>vitesse instantanée</strong> est la vitesse à un instant précis ; on l'approche par $v \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$ sur une chronophotographie de période $\\tau$.<br>Conversion : $1$ m/s $= 3{,}6$ km/h.` },
        { type: 'def', label: 'DEF', titre: 'Vecteur vitesse',
          contenu: `La vitesse est une grandeur <strong>vectorielle</strong> $\\vec{v}$ : elle possède une <strong>direction</strong> (tangente à la trajectoire), un <strong>sens</strong> (celui du mouvement) et une <strong>valeur</strong> (la vitesse en m/s).<br>Deux mouvements peuvent avoir la même valeur de vitesse mais des vecteurs vitesse différents (directions distinctes).` },
        { type: 'meth', label: 'METH', titre: 'Construire un vecteur vitesse sur une chronophotographie',
          contenu: `<strong>Méthode</strong> au point $M_i$ (positions équidistantes en temps, période $\\tau$) :<br>1. calculer $v_i = \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$ (distance réelle via l'échelle) ;<br>2. tracer le vecteur depuis $M_i$, <strong>tangent</strong> à la trajectoire, dans le sens du mouvement ;<br>3. lui donner une longueur proportionnelle à $v_i$ selon une échelle choisie (ex. $1$ cm ↔ $1$ m/s).` }
      ]
    },
    {
      titre: 'Mouvements types et principe d\'inertie',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Mouvement uniforme, accéléré, ralenti',
          contenu: `Selon l'évolution de la valeur de la vitesse :<br>— <strong>uniforme</strong> : valeur de $v$ constante ;<br>— <strong>accéléré</strong> : valeur de $v$ qui augmente ;<br>— <strong>ralenti (décéléré)</strong> : valeur de $v$ qui diminue.<br>Sur une chronophotographie à intervalle de temps constant, l'<strong>écart entre positions successives</strong> renseigne : constant → uniforme, croissant → accéléré, décroissant → ralenti.` },
        { type: 'th', label: 'THM', titre: 'Principe d\'inertie',
          contenu: `<strong>Principe d'inertie (1ère loi de Newton)</strong> : dans un référentiel galiléen, si les forces qui s'exercent sur un système se <strong>compensent</strong> (résultante nulle), alors son vecteur vitesse reste <strong>constant</strong> : il est soit immobile, soit en <strong>mouvement rectiligne uniforme</strong>.<br>Réciproquement : si le vecteur vitesse est constant, les forces se compensent.` },
        { type: 'prop', label: 'PROP', titre: 'Contraposée du principe d\'inertie',
          contenu: `Si le <strong>vecteur vitesse varie</strong> (en valeur ou en direction), alors les forces <strong>ne se compensent pas</strong> : la résultante des forces est non nulle.<br>Cas typiques : un mouvement circulaire uniforme a une vitesse de valeur constante mais de direction qui change → les forces ne se compensent pas.` },
        { type: 'meth', label: 'METH', titre: 'Appliquer le principe d\'inertie',
          contenu: `<strong>Méthode</strong> : (1) définir le système et le référentiel (supposé galiléen) ; (2) observer le vecteur vitesse — constant ou variable ; (3) conclure :<br>— vitesse constante → forces compensées ;<br>— vitesse variable → forces non compensées.<br>On peut ainsi prouver qu'une force inconnue existe (ex. frottements qui ralentissent un mobile).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : interpréter un mouvement',
          contenu: `Un palet glisse sur un coussin d'air en ligne droite, les positions étant équidistantes. Que peut-on dire des forces ?<br><br><strong>Solution :</strong> positions équidistantes (temps constant) → mouvement <strong>rectiligne uniforme</strong> → vecteur vitesse constant → d'après le principe d'inertie, les forces se <strong>compensent</strong> (le poids est compensé par la réaction du support, et les frottements sont négligeables).` }
      ]
    },
    {
      titre: 'Les actions mécaniques et les forces',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Action mécanique et force',
          contenu: `Une <strong>action mécanique</strong> peut mettre en mouvement, modifier un mouvement ou déformer un corps. On la modélise par une <strong>force</strong>, grandeur vectorielle $\\vec{F}$ caractérisée par :<br>— un <strong>point d'application</strong> ;<br>— une <strong>direction</strong> et un <strong>sens</strong> ;<br>— une <strong>valeur</strong> (norme) en <strong>newtons</strong> (N), mesurée au dynamomètre.<br>On distingue actions de <strong>contact</strong> et actions <strong>à distance</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Le poids',
          contenu: `Le <strong>poids</strong> $\\vec{P}$ est l'action à distance exercée par la Terre sur un corps. Caractéristiques :<br>— direction : <strong>verticale</strong> ;<br>— sens : <strong>vers le bas</strong> (vers le centre de la Terre) ;<br>— point d'application : le centre de gravité $G$.<br>Sa valeur :<br>$$\\boxed{P = m \\times g}$$ avec $P$ en N, $m$ en kg, $g \\approx 9{,}81$ N/kg (intensité de pesanteur terrestre).` },
        { type: 'def', label: 'DEF', titre: 'Distinction masse / poids',
          contenu: `La <strong>masse</strong> $m$ (en kg) mesure la quantité de matière : elle est <strong>invariable</strong>, indépendante du lieu.<br>Le <strong>poids</strong> $P$ (en N) dépend de l'intensité de pesanteur $g$ : il varie selon le lieu (Terre, Lune, altitude). Sur la Lune, $g_{Lune} \\approx 1{,}6$ N/kg : un même corps y pèse environ $6$ fois moins, mais sa masse est inchangée.` },
        { type: 'th', label: 'THM', titre: 'Loi de gravitation universelle de Newton',
          contenu: `Deux corps ponctuels de masses $m_A$ et $m_B$ séparés d'une distance $d$ s'attirent avec une force de valeur :<br>$$\\boxed{F = G\\,\\frac{m_A \\times m_B}{d^2}}$$ avec $G = 6{,}67 \\times 10^{-11}$ N·m²·kg⁻² (constante de gravitation).<br>Cette force est <strong>attractive</strong>, dirigée selon la droite joignant les deux corps. Le poids n'est qu'un cas particulier (attraction Terre–objet).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : poids et gravitation',
          contenu: `Un objet de masse $m = 2{,}0$ kg. (a) Calculer son poids sur Terre ($g = 9{,}81$ N/kg). (b) Sur la Lune ($g = 1{,}6$ N/kg).<br><br><strong>Solution :</strong><br>(a) $P = m g = 2{,}0 \\times 9{,}81 \\approx 20$ N.<br>(b) $P = 2{,}0 \\times 1{,}6 = 3{,}2$ N.<br>La masse reste $2{,}0$ kg dans les deux cas.` }
      ]
    },
    {
      titre: 'Représenter et bilanter les forces',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Faire un bilan des forces',
          contenu: `<strong>Méthode</strong> : (1) définir le système ; (2) lister les forces extérieures (contact : support, fil, frottements... ; distance : poids) ; (3) tracer chaque vecteur force à l'échelle depuis son point d'application ; (4) déterminer si la résultante est nulle (forces compensées) ou non.` },
        { type: 'prop', label: 'PROP', titre: 'Principe des actions réciproques (3ᵉ loi)',
          contenu: `Si un corps $A$ exerce une force $\\vec{F}_{A/B}$ sur un corps $B$, alors $B$ exerce sur $A$ une force $\\vec{F}_{B/A}$ de <strong>même valeur</strong>, de <strong>même direction</strong>, mais de <strong>sens opposé</strong> :<br>$$\\vec{F}_{A/B} = -\\vec{F}_{B/A}$$ Exemple : la Terre attire la Lune, la Lune attire la Terre avec une force identique en valeur.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : bilan des forces sur un objet posé',
          contenu: `Un livre de masse $m = 0{,}50$ kg est posé immobile sur une table ($g = 9{,}81$ N/kg). Faire le bilan des forces.<br><br><strong>Solution :</strong> immobile → forces compensées. Deux forces :<br>— le poids $\\vec{P}$ vertical vers le bas, $P = 0{,}50 \\times 9{,}81 \\approx 4{,}9$ N ;<br>— la réaction $\\vec{R}$ de la table, verticale vers le haut, de même valeur $R = 4{,}9$ N.<br>Elles se compensent : $\\vec{P} + \\vec{R} = \\vec{0}$.` }
      ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// ONDES ET SIGNAUX
// ══════════════════════════════════════════════════════════════

{
  id: 'phch-2e-sons', filiere: '2nde', matiere: 'phch',
  titre: 'Signaux sonores', ordre: 5, enrich: false,
  sections: [
    {
      titre: 'Émission et propagation du son',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Signal sonore',
          contenu: `Un <strong>signal sonore</strong> est produit par la <strong>vibration</strong> d'un objet (corde, membrane, colonne d'air) qui met en mouvement les particules du milieu de proche en proche.<br>Le son est une <strong>onde mécanique</strong> : il a besoin d'un <strong>milieu matériel</strong> (air, eau, solide) pour se propager. Il <strong>ne se propage pas dans le vide</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Vitesse (célérité) du son',
          contenu: `La <strong>célérité</strong> $v$ du son est la vitesse de propagation du signal. Elle dépend du milieu :<br>— dans l'air à $20\\,^{\\circ}$C : $v \\approx 340$ m/s ;<br>— dans l'eau : $\\approx 1500$ m/s ;<br>— dans les solides : encore plus grande.<br>$$v = \\frac{d}{\\Delta t}$$` },
        { type: 'meth', label: 'METH', titre: 'Mesurer une distance par écho',
          contenu: `<strong>Principe</strong> : un son émis parcourt la distance aller-retour jusqu'à un obstacle. Si $\\Delta t$ est la durée mesurée entre émission et retour de l'écho :<br>$$d = \\frac{v \\times \\Delta t}{2}$$ (le facteur $2$ vient de l'aller-retour). C'est le principe du sonar et de l'échographie.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : calcul d\'une distance',
          contenu: `Un écho revient $\\Delta t = 2{,}0$ s après l'émission, $v = 340$ m/s. À quelle distance est l'obstacle ?<br><br><strong>Solution :</strong> $$d = \\frac{v \\times \\Delta t}{2} = \\frac{340 \\times 2{,}0}{2} = 340 \\text{ m}$$` }
      ]
    },
    {
      titre: 'Période, fréquence et caractéristiques du son',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Signal périodique : période et fréquence',
          contenu: `Un signal est <strong>périodique</strong> s'il se reproduit identique à lui-même à intervalles de temps réguliers.<br>— la <strong>période</strong> $T$ est la durée d'un motif, en secondes (s) ;<br>— la <strong>fréquence</strong> $f$ est le nombre de motifs par seconde, en hertz (Hz).<br>$$\\boxed{f = \\frac{1}{T}}$$` },
        { type: 'def', label: 'DEF', titre: 'Hauteur d\'un son',
          contenu: `La <strong>hauteur</strong> d'un son est liée à sa <strong>fréquence</strong> :<br>— son <strong>grave</strong> ↔ <strong>faible</strong> fréquence ;<br>— son <strong>aigu</strong> ↔ <strong>haute</strong> fréquence.<br>L'oreille humaine perçoit les sons audibles entre environ $20$ Hz et $20\\,000$ Hz ($20$ kHz). En dessous : <strong>infrasons</strong> ; au-dessus : <strong>ultrasons</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Intensité sonore et niveau sonore',
          contenu: `L'<strong>intensité sonore</strong> traduit l'énergie transportée par l'onde ; la perception correspondante est le <strong>volume</strong> (fort/faible).<br>Le <strong>niveau sonore</strong> $L$ se mesure en <strong>décibels</strong> (dB) avec un sonomètre. Au-delà de $\\sim 85$ dB, l'exposition prolongée devient dangereuse pour l'audition.` },
        { type: 'meth', label: 'METH', titre: 'Lire période et fréquence sur un oscillogramme',
          contenu: `<strong>Méthode</strong> : (1) repérer un motif qui se répète ; (2) mesurer la durée $T$ d'un motif à partir de la base de temps ; (3) calculer $f = \\dfrac{1}{T}$.<br>Exemple : si un motif occupe $T = 2{,}0$ ms $= 2{,}0 \\times 10^{-3}$ s, alors $f = \\dfrac{1}{2{,}0 \\times 10^{-3}} = 500$ Hz.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : période et fréquence',
          contenu: `Un diapason émet un son de fréquence $f = 440$ Hz. Quelle est sa période ?<br><br><strong>Solution :</strong> $$T = \\frac{1}{f} = \\frac{1}{440} \\approx 2{,}3 \\times 10^{-3} \\text{ s} = 2{,}3 \\text{ ms}$$` }
      ]
    },
    {
      titre: 'Domaines de fréquence et perception',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Sons audibles, infrasons et ultrasons',
          contenu: `Selon leur fréquence $f$, on classe les signaux sonores :<br>— <strong>infrasons</strong> : $f < 20$ Hz (non audibles, perçus par certains animaux) ;<br>— <strong>sons audibles</strong> : $20$ Hz $\\le f \\le 20\\,000$ Hz pour l'oreille humaine ;<br>— <strong>ultrasons</strong> : $f > 20$ kHz (chauves-souris, sonar, échographie médicale).<br>Le domaine audible se rétrécit avec l'âge (perte des hautes fréquences).` },
        { type: 'prop', label: 'PROP', titre: 'Timbre d\'un son',
          contenu: `Deux instruments jouant la même note (même hauteur, donc même fréquence fondamentale) se distinguent par leur <strong>timbre</strong>.<br>Le timbre est lié à la <strong>forme du signal</strong> : un son pur a un signal sinusoïdal, un son complexe a un signal périodique de forme plus riche (présence d'harmoniques). C'est ce qui permet de reconnaître une voix ou un instrument.` },
        { type: 'meth', label: 'METH', titre: 'Estimer si un son est audible',
          contenu: `<strong>Méthode</strong> : déterminer la fréquence $f = \\dfrac{1}{T}$ à partir de la période lue, puis comparer à l'intervalle $[20\\ \\text{Hz} ;\\ 20\\ \\text{kHz}]$.<br>Exemple : un signal de période $T = 1{,}0 \\times 10^{-5}$ s a une fréquence $f = 10^{5}$ Hz $= 100$ kHz $> 20$ kHz : c'est un <strong>ultrason</strong>, non audible.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : classer un signal',
          contenu: `Un sonar émet un signal de fréquence $f = 50$ kHz. Est-il audible par l'Homme ?<br><br><strong>Solution :</strong> $f = 50\\,000$ Hz $> 20\\,000$ Hz : il s'agit d'un <strong>ultrason</strong>, donc <strong>non audible</strong> par l'oreille humaine. Cela explique l'emploi des ultrasons en imagerie sans gêne sonore.` }
        ]
    },
    {
      titre: 'Applications : du son à la mesure',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Échographie et sonar',
          contenu: `L'<strong>échographie</strong> et le <strong>sonar</strong> utilisent l'émission d'<strong>ultrasons</strong> puis la détection de leur <strong>écho</strong> sur un obstacle (organe, fond marin).<br>La mesure de la durée de l'aller-retour, connaissant la célérité dans le milieu, permet de calculer la distance à l'obstacle et de reconstruire une image.` },
        { type: 'meth', label: 'METH', titre: 'Mesurer la célérité du son dans l\'air',
          contenu: `<strong>Méthode</strong> (deux microphones) : placer deux micros distants de $d$ connue, mesurer le décalage temporel $\\Delta t$ d'arrivée d'un même son, puis :<br>$$v = \\frac{d}{\\Delta t}$$ On vérifie une valeur proche de $340$ m/s à $20\\,^{\\circ}$C.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : épaisseur par échographie',
          contenu: `Dans un milieu où $v = 1500$ m/s, l'écho d'un ultrason revient après $\\Delta t = 4{,}0 \\times 10^{-5}$ s. Quelle est la profondeur de l'interface ?<br><br><strong>Solution :</strong> $$d = \\frac{v \\times \\Delta t}{2} = \\frac{1500 \\times 4{,}0 \\times 10^{-5}}{2} = 3{,}0 \\times 10^{-2} \\text{ m} = 3{,}0 \\text{ cm}$$` }
        ]
    }
  ]
},

{
  id: 'phch-2e-lumiere', filiere: '2nde', matiere: 'phch',
  titre: 'Lumière, lentilles et ondes', ordre: 6, enrich: false,
  sections: [
    {
      titre: 'Propagation de la lumière',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Propagation rectiligne et vitesse de la lumière',
          contenu: `Dans un milieu <strong>homogène et transparent</strong>, la lumière se propage en <strong>ligne droite</strong> (modèle du rayon lumineux).<br>Contrairement au son, la lumière se propage <strong>dans le vide</strong>, à la vitesse :<br>$$c = 3{,}00 \\times 10^{8} \\text{ m/s}$$ C'est la plus grande vitesse possible. Dans un milieu matériel, la lumière est plus lente.` },
        { type: 'def', label: 'DEF', titre: 'Année-lumière',
          contenu: `L'<strong>année-lumière</strong> (a.l.) est la distance parcourue par la lumière dans le vide en un an. C'est une unité de distance (pas de durée) utilisée en astronomie :<br>$$1 \\text{ a.l.} = c \\times \\Delta t = 3{,}00 \\times 10^{8} \\times (365{,}25 \\times 24 \\times 3600)$$ $$1 \\text{ a.l.} \\approx 9{,}46 \\times 10^{15} \\text{ m}$$` },
        { type: 'ex', label: 'EX', titre: 'Exercice : distance d\'une étoile',
          contenu: `La lumière d'une étoile met $4{,}2$ ans pour nous parvenir. À quelle distance est-elle (en m) ?<br><br><strong>Solution :</strong> $\\Delta t = 4{,}2 \\times 365{,}25 \\times 24 \\times 3600 \\approx 1{,}33 \\times 10^{8}$ s.<br>$$d = c \\times \\Delta t = 3{,}00 \\times 10^{8} \\times 1{,}33 \\times 10^{8} \\approx 4{,}0 \\times 10^{16} \\text{ m}$$ Soit environ $4{,}2$ années-lumière.` }
      ]
    },
    {
      titre: 'Réfraction de la lumière',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réfraction et indice de réfraction',
          contenu: `La <strong>réfraction</strong> est le changement de direction d'un rayon lumineux lorsqu'il passe d'un milieu transparent à un autre (ex. air → eau).<br>L'<strong>indice de réfraction</strong> $n$ d'un milieu (sans unité, $n \\ge 1$) traduit le ralentissement de la lumière :<br>$$n = \\frac{c}{v}$$ où $v$ est la vitesse de la lumière dans le milieu. Pour l'air $n \\approx 1$, l'eau $n \\approx 1{,}33$, le verre $n \\approx 1{,}5$.` },
        { type: 'def', label: 'DEF', titre: 'Angles d\'incidence et de réfraction',
          contenu: `Les angles sont repérés par rapport à la <strong>normale</strong> (perpendiculaire à la surface au point d'incidence).<br>— angle d'<strong>incidence</strong> $i_1$ : entre rayon incident et normale ;<br>— angle de <strong>réfraction</strong> $i_2$ : entre rayon réfracté et normale.<br>Le rayon incident, le rayon réfracté et la normale sont dans un même plan.` },
        { type: 'th', label: 'THM', titre: 'Loi de Snell-Descartes (réfraction)',
          contenu: `Au passage d'un milieu d'indice $n_1$ à un milieu d'indice $n_2$ :<br>$$\\boxed{n_1 \\sin i_1 = n_2 \\sin i_2}$$ Conséquences :<br>— si $n_2 > n_1$ (vers un milieu plus réfringent), le rayon se rapproche de la normale ($i_2 < i_1$) ;<br>— si $n_2 < n_1$, il s'en écarte.` },
        { type: 'meth', label: 'METH', titre: 'Appliquer la loi de Snell-Descartes',
          contenu: `<strong>Méthode</strong> : (1) identifier les indices $n_1$, $n_2$ et l'angle connu ; (2) écrire $n_1 \\sin i_1 = n_2 \\sin i_2$ ; (3) isoler l'angle cherché et calculer son sinus, puis utiliser $\\sin^{-1}$ (arcsin) à la calculatrice (en mode degrés).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : angle de réfraction',
          contenu: `Un rayon passe de l'air ($n_1 = 1{,}00$) à l'eau ($n_2 = 1{,}33$) avec $i_1 = 30^{\\circ}$. Calculer $i_2$.<br><br><strong>Solution :</strong> $$\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2} = \\frac{1{,}00 \\times \\sin 30^{\\circ}}{1{,}33} = \\frac{0{,}500}{1{,}33} \\approx 0{,}376$$ $$i_2 = \\sin^{-1}(0{,}376) \\approx 22^{\\circ}$$ Le rayon se rapproche de la normale, conforme à $n_2 > n_1$.` }
      ]
    },
    {
      titre: 'Lentilles minces convergentes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Lentille convergente, centre optique et foyer',
          contenu: `Une <strong>lentille convergente</strong> (bords minces) fait converger en un point les rayons parallèles à son axe.<br>— le <strong>centre optique</strong> $O$ : un rayon qui le traverse n'est pas dévié ;<br>— le <strong>foyer image</strong> $F'$ : point où convergent les rayons parallèles à l'axe ;<br>— la <strong>distance focale</strong> $f' = \\overline{OF'} > 0$, en mètres.` },
        { type: 'def', label: 'DEF', titre: 'Vergence d\'une lentille',
          contenu: `La <strong>vergence</strong> $C$ caractérise le pouvoir de convergence :<br>$$C = \\frac{1}{f'}$$ avec $f'$ en mètres et $C$ en <strong>dioptries</strong> ($\\delta$). Plus $f'$ est petite, plus la lentille est convergente, plus $C$ est grande.` },
        { type: 'meth', label: 'METH', titre: 'Construire l\'image d\'un objet (3 rayons)',
          contenu: `<strong>Méthode</strong> pour un objet $AB$ perpendiculaire à l'axe ($A$ sur l'axe) : tracer depuis $B$ deux des trois rayons particuliers :<br>1. rayon passant par $O$ : non dévié ;<br>2. rayon parallèle à l'axe : ressort en passant par $F'$ ;<br>3. rayon passant par $F$ (foyer objet) : ressort parallèle à l'axe.<br>Leur intersection donne l'image $B'$ ; $A'$ est sa projection sur l'axe.` },
        { type: 'form', label: 'FORM', titre: 'Relation de conjugaison et grandissement',
          contenu: `Relation de conjugaison (origine au centre $O$, grandeurs algébriques) :<br>$$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'}$$ <strong>Grandissement</strong> :<br>$$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$ Si $|\\gamma| > 1$ l'image est agrandie ; si $\\gamma < 0$ elle est renversée.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : position de l\'image',
          contenu: `Lentille de distance focale $f' = 10$ cm, objet placé à $\\overline{OA} = -30$ cm. Où se forme l'image ?<br><br><strong>Solution :</strong> $$\\frac{1}{\\overline{OA'}} = \\frac{1}{f'} + \\frac{1}{\\overline{OA}} = \\frac{1}{10} + \\frac{1}{-30} = \\frac{3-1}{30} = \\frac{2}{30}$$ $$\\overline{OA'} = 15 \\text{ cm}$$ L'image est réelle, à $15$ cm après la lentille. Grandissement $\\gamma = \\dfrac{15}{-30} = -0{,}5$ : image renversée, deux fois plus petite.` }
      ]
    },
    {
      titre: 'Lumière, couleurs et spectres',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Lumière blanche et spectre',
          contenu: `La <strong>lumière blanche</strong> (Soleil, lampe à incandescence) est composée d'une infinité de radiations colorées. Un prisme ou un réseau la <strong>disperse</strong> en un <strong>spectre continu</strong> allant du rouge au violet.<br>Chaque radiation est caractérisée par sa <strong>longueur d'onde</strong> $\\lambda$ ; le domaine visible s'étend d'environ $400$ nm (violet) à $800$ nm (rouge).` },
        { type: 'def', label: 'DEF', titre: 'Spectres d\'émission et d\'absorption',
          contenu: `— <strong>Spectre continu</strong> : émis par un corps chaud dense (filament), toutes les couleurs présentes.<br>— <strong>Spectre de raies d'émission</strong> : un gaz chaud peu dense émet des raies colorées caractéristiques de ses éléments.<br>— <strong>Spectre d'absorption</strong> : raies noires sur fond continu, là où un gaz froid a absorbé certaines radiations. Ces raies identifient les éléments (analyse de la lumière des étoiles).` },
        { type: 'prop', label: 'PROP', titre: 'Dispersion par réfraction',
          contenu: `L'indice de réfraction $n$ d'un milieu dépend légèrement de la longueur d'onde : le <strong>violet</strong> est plus dévié que le <strong>rouge</strong>. C'est la <strong>dispersion</strong> qui explique la décomposition par un prisme et la formation de l'<strong>arc-en-ciel</strong> (réfraction de la lumière solaire dans les gouttes d'eau).` },
        { type: 'ex', label: 'EX', titre: 'Exercice : nature d\'un spectre',
          contenu: `On observe, sur fond coloré continu, des raies noires fines. De quel type de spectre s'agit-il et qu'indique-t-il ?<br><br><strong>Solution :</strong> c'est un <strong>spectre d'absorption</strong>. Les raies noires révèlent les éléments chimiques d'un gaz froid traversé par la lumière (méthode utilisée pour déterminer la composition de l'atmosphère des étoiles).` }
        ]
    }
  ]
},

// ══════════════════════════════════════════════════════════════
// ÉNERGIE : CONVERSIONS ET TRANSFERTS
// ══════════════════════════════════════════════════════════════

{
  id: 'phch-2e-energie', filiere: '2nde', matiere: 'phch',
  titre: 'Énergie : conversions et transferts', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Formes d\'énergie et conversions',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Énergie et ses formes',
          contenu: `L'<strong>énergie</strong> mesure la capacité d'un système à produire un effet (mouvement, chaleur, lumière...). Son unité est le <strong>joule</strong> (J).<br>Formes principales : énergie <strong>cinétique</strong> (mouvement), <strong>potentielle de pesanteur</strong> (position/altitude), <strong>thermique</strong>, <strong>électrique</strong>, <strong>chimique</strong>, <strong>lumineuse</strong>, <strong>nucléaire</strong>.` },
        { type: 'form', label: 'FORM', titre: 'Énergie cinétique',
          contenu: `L'<strong>énergie cinétique</strong> d'un corps de masse $m$ se déplaçant à la vitesse $v$ :<br>$$\\boxed{E_c = \\frac{1}{2}\\,m\\,v^2}$$ avec $E_c$ en joules (J), $m$ en kg, $v$ en m/s. Elle croît avec le <strong>carré</strong> de la vitesse.` },
        { type: 'form', label: 'FORM', titre: 'Énergie potentielle de pesanteur',
          contenu: `L'<strong>énergie potentielle de pesanteur</strong> d'un corps à l'altitude $z$ (par rapport à une référence) :<br>$$\\boxed{E_{pp} = m\\,g\\,z}$$ avec $E_{pp}$ en J, $m$ en kg, $g$ en N/kg, $z$ en m. Elle dépend du choix de l'origine des altitudes.` },
        { type: 'prop', label: 'PROP', titre: 'Conservation et conversion de l\'énergie',
          contenu: `L'énergie ne se crée ni ne se détruit : elle se <strong>conserve</strong> et se <strong>convertit</strong> d'une forme à une autre ou se <strong>transfère</strong> d'un système à un autre.<br>Dans une <strong>chaîne énergétique</strong>, on suit ces conversions. Exemple (chute libre, sans frottement) : l'énergie potentielle se convertit en énergie cinétique, l'énergie mécanique $E_m = E_c + E_{pp}$ se conservant.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : conversion d\'énergie en chute',
          contenu: `Une bille de masse $m = 0{,}20$ kg tombe d'une hauteur $z = 5{,}0$ m ($g = 9{,}81$ N/kg, sans frottement). Quelle est sa vitesse en bas ?<br><br><strong>Solution :</strong> conservation : $E_{pp}$ en haut $= E_c$ en bas.<br>$$m g z = \\frac{1}{2} m v^2 \\Rightarrow v = \\sqrt{2 g z} = \\sqrt{2 \\times 9{,}81 \\times 5{,}0} \\approx 9{,}9 \\text{ m/s}$$` }
      ]
    },
    {
      titre: 'Travail, puissance et rendement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Puissance',
          contenu: `La <strong>puissance</strong> $P$ est l'énergie $E$ transférée ou convertie par unité de temps :<br>$$\\boxed{P = \\frac{E}{\\Delta t}}$$ avec $P$ en <strong>watts</strong> (W), $E$ en joules (J), $\\Delta t$ en secondes (s).<br>Réciproquement, l'énergie consommée pendant $\\Delta t$ : $E = P \\times \\Delta t$.` },
        { type: 'form', label: 'FORM', titre: 'Énergie électrique et kilowattheure',
          contenu: `Une puissance électrique $P$ pendant une durée $\\Delta t$ correspond à une énergie $E = P \\times \\Delta t$.<br>Unité usuelle de facturation : le <strong>kilowattheure</strong> (kWh) :<br>$$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3{,}6 \\times 10^{6} \\text{ J}$$` },
        { type: 'def', label: 'DEF', titre: 'Rendement d\'une conversion',
          contenu: `Le <strong>rendement</strong> $\\eta$ d'un dispositif est le rapport de l'énergie (ou puissance) <strong>utile</strong> à l'énergie <strong>reçue</strong> :<br>$$\\eta = \\frac{E_{utile}}{E_{reçue}}$$ Sans unité, $0 \\le \\eta \\le 1$ (souvent exprimé en %). La différence est <strong>perdue</strong>, le plus souvent sous forme thermique.` },
        { type: 'meth', label: 'METH', titre: 'Calculer une énergie consommée',
          contenu: `<strong>Méthode</strong> : (1) relever la puissance $P$ (en W) ; (2) convertir la durée $\\Delta t$ en secondes (ou utiliser des heures pour des kWh) ; (3) appliquer $E = P \\times \\Delta t$ ; (4) convertir l'unité si besoin.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : énergie et rendement',
          contenu: `Une ampoule de puissance $P = 60$ W fonctionne $2{,}0$ h. (a) Énergie consommée en J et kWh ? (b) Si seulement $9{,}0$ W servent à éclairer, quel rendement ?<br><br><strong>Solution :</strong><br>(a) $\\Delta t = 2{,}0 \\times 3600 = 7200$ s. $E = 60 \\times 7200 = 4{,}3 \\times 10^{5}$ J $= 0{,}12$ kWh.<br>(b) $\\eta = \\dfrac{9{,}0}{60} = 0{,}15 = 15\\,\\%$. Le reste est dissipé en chaleur.` }
      ]
    },
    {
      titre: 'Transferts thermiques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Transfert thermique et température',
          contenu: `Un <strong>transfert thermique</strong> est un transfert d'énergie d'un corps <strong>chaud</strong> vers un corps <strong>froid</strong>, qui se produit spontanément tant qu'il existe une différence de température.<br>La <strong>température</strong> traduit l'agitation des particules ; à l'équilibre thermique, les corps en contact atteignent la même température.` },
        { type: 'def', label: 'DEF', titre: 'Trois modes de transfert thermique',
          contenu: `— <strong>Conduction</strong> : transfert dans un solide (ou au contact), de proche en proche, sans déplacement de matière (cuillère qui chauffe).<br>— <strong>Convection</strong> : transfert dans un fluide par déplacement de matière (air chaud qui monte, radiateur).<br>— <strong>Rayonnement</strong> : transfert par ondes, sans support matériel (chaleur du Soleil traversant le vide).` },
        { type: 'prop', label: 'PROP', titre: 'Isolation thermique',
          contenu: `Un bon <strong>isolant thermique</strong> limite les transferts (laine de verre, polystyrène, air immobile). Un bon <strong>conducteur</strong> les favorise (métaux).<br>Réduire les pertes thermiques d'un logement (isolation des murs, double vitrage) diminue l'énergie nécessaire au chauffage : c'est un enjeu d'<strong>économie d'énergie</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : identifier le mode de transfert',
          contenu: `Indiquer le mode de transfert dominant : (a) la poignée métallique d'une casserole chauffe ; (b) on sent la chaleur d'un feu de cheminée à distance ; (c) l'eau d'une casserole chauffe par le bas et bout.<br><br><strong>Solution :</strong> (a) <strong>conduction</strong> ; (b) <strong>rayonnement</strong> ; (c) <strong>convection</strong> (mouvement du fluide).` }
        ]
    },
    {
      titre: 'Chaînes énergétiques et sources d\'énergie',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Chaîne énergétique',
          contenu: `Une <strong>chaîne énergétique</strong> représente, par un schéma, les <strong>transferts</strong> et <strong>conversions</strong> d'énergie d'un dispositif : du réservoir source, à travers le convertisseur, vers l'utilisation. On y fait apparaître l'énergie <strong>utile</strong> et les <strong>pertes</strong> (souvent thermiques).<br>Exemple — lampe : énergie électrique → (lampe) → énergie lumineuse (utile) + énergie thermique (perdue).` },
        { type: 'def', label: 'DEF', titre: 'Sources renouvelables et non renouvelables',
          contenu: `— <strong>Renouvelables</strong> : se reconstituent à l'échelle humaine (solaire, éolien, hydraulique, géothermie, biomasse).<br>— <strong>Non renouvelables</strong> : en stock limité (charbon, pétrole, gaz, uranium fissile).<br>Les <strong>énergies fossiles</strong> libèrent du $CO_2$ par combustion, contribuant au réchauffement climatique.` },
        { type: 'prop', label: 'PROP', titre: 'Dégradation de l\'énergie',
          contenu: `À chaque conversion, une partie de l'énergie est <strong>dissipée</strong> sous forme thermique vers le milieu extérieur : l'énergie se conserve mais se <strong>dégrade</strong> (devient moins exploitable).<br>C'est pourquoi le rendement $\\eta < 1$ : on ne récupère jamais sous forme utile toute l'énergie reçue.` },
        { type: 'ex', label: 'EX', titre: 'Exercice : chaîne énergétique d\'un panneau solaire',
          contenu: `Décrire la chaîne énergétique d'un panneau photovoltaïque alimentant une lampe.<br><br><strong>Solution :</strong> énergie <strong>lumineuse</strong> (Soleil) → panneau (convertisseur) → énergie <strong>électrique</strong> + pertes thermiques → lampe → énergie <strong>lumineuse</strong> utile + pertes thermiques. À chaque étape une part de l'énergie est dégradée en chaleur.` }
        ]
    }
  ]
}

]
