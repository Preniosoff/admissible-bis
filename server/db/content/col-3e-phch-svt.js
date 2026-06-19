// Contenu cours — 3ème — Physique-Chimie & SVT
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// PHYSIQUE-CHIMIE
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'phch-3e-atome',
  filiere: '3eme',
  matiere: 'phch',
  titre: 'Structure de la matière et atome',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'Le modèle de l\'atome',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Atome',
          contenu: 'Un <strong>atome</strong> est la plus petite entité chimique d\'un élément. Il est constitué d\'un <strong>noyau</strong> central (de taille ~$10^{-15}$ m) entouré d\'un <strong>cortège électronique</strong>. La taille totale d\'un atome est de l\'ordre de $10^{-10}$ m = 1 Å.<br>Le modèle planétaire de Rutherford-Bohr représente les électrons en orbite autour du noyau sur des couches d\'énergie fixées.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Noyau atomique : protons et neutrons',
          contenu: 'Le noyau est composé de deux types de particules appelées <strong>nucléons</strong> :<br>— <strong>Protons</strong> : charge électrique $+e$ (avec $e = 1{,}6 \times 10^{-19}$ C), masse $m_p \approx 1{,}67 \times 10^{-27}$ kg<br>— <strong>Neutrons</strong> : charge nulle, masse $m_n \approx m_p$<br>Le nombre de protons est noté $Z$ (<strong>numéro atomique</strong>) et le nombre de neutrons $N$.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Nombre de masse et notation symbolique',
          contenu: 'Le <strong>nombre de masse</strong> $A$ est le nombre total de nucléons : $$A = Z + N$$Un atome est noté $^A_Z X$ où $X$ est le symbole chimique de l\'élément.<br>Exemple : $^{12}_6 C$ (carbone-12 : 6 protons, 6 neutrons) ; $^{16}_8 O$ (oxygène-16 : 8 protons, 8 neutrons).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Cortège électronique et électroneutralité',
          contenu: 'Les <strong>électrons</strong> portent chacun une charge $-e$. Un atome <strong>neutre</strong> possède autant d\'électrons que de protons :<br>$$\text{nombre d\'électrons} = Z$$Les électrons se répartissent sur des <strong>couches</strong> (K, L, M, …) avec des capacités : K → 2 ; L → 8 ; M → 18.<br>La couche la plus externe (couche de valence) détermine les propriétés chimiques.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Écrire la configuration électronique d\'un atome',
          contenu: '<strong>Règle de remplissage :</strong> remplir les couches de l\'intérieur vers l\'extérieur.<br>Exemples :<br>— $^1_1$H : (K)$^1$ — 1 électron sur K<br>— $^6_6$C : (K)$^2$(L)$^4$ — 2 sur K, 4 sur L<br>— $^{11}_{11}$Na : (K)$^2$(L)$^8$(M)$^1$ — 2 sur K, 8 sur L, 1 sur M<br>L\'atome est stable quand sa dernière couche est complète (structure en duet ou octet).'
        }
      ]
    },
    {
      titre: 'Isotopes et masse atomique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Isotopes',
          contenu: 'Deux atomes sont des <strong>isotopes</strong> d\'un même élément s\'ils ont le même numéro atomique $Z$ mais des nombres de masse $A$ différents (donc des nombres de neutrons $N$ différents).<br>Exemples :<br>— $^1_1$H, $^2_1$H (deutérium), $^3_1$H (tritium) : isotopes de l\'hydrogène<br>— $^{12}_6$C et $^{14}_6$C : isotopes du carbone (le $^{14}$C est radioactif, utilisé en datation)'
        },
        {
          type: 'def', label: 'DEF', titre: 'Masse atomique relative',
          contenu: 'La <strong>masse atomique relative</strong> (ou masse molaire atomique) d\'un élément est la moyenne des masses de ses isotopes pondérée par leur abondance naturelle.<br>Exemple pour le chlore : $^{35}$Cl (75,77 %) et $^{37}$Cl (24,23 %) donnent :<br>$$M(Cl) = 0{,}7577 \times 35 + 0{,}2423 \times 37 \approx 35{,}5 \text{ g/mol}$$'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Propriétés des isotopes',
          contenu: 'Les isotopes d\'un élément ont :<br>— <strong>mêmes</strong> propriétés <strong>chimiques</strong> (même configuration électronique de valence)<br>— <strong>propriétés physiques différentes</strong> (masses différentes, donc densités, points de fusion légèrement différents)<br>— certains isotopes sont <strong>radioactifs</strong> (noyau instable, émission de rayonnements $\alpha$, $\beta$ ou $\gamma$).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : identifier les isotopes',
          contenu: 'Parmi les noyaux suivants, identifier les paires d\'isotopes :<br>$^{16}_8$O, $^{18}_8$O, $^{14}_7$N, $^{18}_9$F, $^{12}_6$C<br><br><strong>Solution :</strong> $^{16}_8$O et $^{18}_8$O sont isotopes (même $Z=8$, différent $A$).<br>Les autres n\'ont pas le même $Z$ entre eux, donc ne sont pas isotopes.'
        }
      ]
    },
    {
      titre: 'Ions',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Ion — définition et formation',
          contenu: 'Un <strong>ion</strong> est un atome (ou groupe d\'atomes) ayant perdu ou gagné des électrons :<br>— <strong>Cation</strong> : perte d\'électrons → charge positive. Ex. : Na$^+$ (Na perd 1 e$^-$), Ca$^{2+}$ (Ca perd 2 e$^-$)<br>— <strong>Anion</strong> : gain d\'électrons → charge négative. Ex. : Cl$^-$ (Cl gagne 1 e$^-$), O$^{2-}$ (O gagne 2 e$^-$)<br>Un ion monoatomique de charge $q$ possède $Z - q$ électrons.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Règle du duet et de l\'octet',
          contenu: 'Les atomes tendent à acquérir la configuration électronique du gaz noble le plus proche :<br>— H, He → 2 électrons sur K (règle du <strong>duet</strong>)<br>— Li à Ne, Na à Ar → 8 électrons sur la couche externe (règle de l\'<strong>octet</strong>)<br>Cela explique la formation des ions : Na (2,8,1) → Na$^+$ (2,8) ; Cl (2,8,7) → Cl$^-$ (2,8,8).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Ions polyatomiques courants',
          contenu: 'Un <strong>ion polyatomique</strong> est formé de plusieurs atomes liés avec une charge globale.<br>À connaître :<br>— OH$^-$ (hydroxyde), H$_3$O$^+$ (oxonium)<br>— NO$_3^-$ (nitrate), SO$_4^{2-}$ (sulfate)<br>— CO$_3^{2-}$ (carbonate), NH$_4^+$ (ammonium)<br>— PO$_4^{3-}$ (phosphate), HCO$_3^-$ (hydrogénocarbonate)'
        },
        {
          type: 'meth', label: 'METH', titre: 'Écrire la formule d\'un composé ionique',
          contenu: 'Un composé ionique est <strong>électriquement neutre</strong> : les charges se compensent.<br>Méthode : trouver les coefficients stœchiométriques pour que la somme des charges soit nulle.<br>Exemples :<br>— Na$^+$ + Cl$^-$ → NaCl (1 pour 1)<br>— Ca$^{2+}$ + 2 Cl$^-$ → CaCl$_2$ (1 Ca pour 2 Cl)<br>— 3 Ca$^{2+}$ + 2 PO$_4^{3-}$ → Ca$_3$(PO$_4$)$_2$'
        }
      ]
    },
    {
      titre: 'Molécules et tableau de Mendeleïev',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Molécule — formule brute et développée',
          contenu: 'Une <strong>molécule</strong> est un édifice électriquement neutre formé d\'atomes liés par des <strong>liaisons covalentes</strong> (partage de doublets d\'électrons).<br>— <strong>Formule brute</strong> : indique la nature et le nombre de chaque atome. Ex. : H$_2$O, CH$_4$, C$_2$H$_5$OH<br>— <strong>Formule développée</strong> : représente toutes les liaisons. Ex. H–O–H pour l\'eau.<br>— <strong>Formule semi-développée</strong> : regroupe les liaisons avec H. Ex. CH$_3$–CH$_3$.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Règle des liaisons covalentes',
          contenu: 'Chaque atome forme un nombre de liaisons déterminé pour compléter son octet (ou duet) :<br>— H : 1 liaison<br>— O : 2 liaisons<br>— N : 3 liaisons<br>— C : 4 liaisons<br>— Cl, F, Br, I : 1 liaison<br>Une molécule peut avoir des liaisons simples (—), doubles (=) ou triples (≡).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Tableau périodique de Mendeleïev',
          contenu: 'Le <strong>tableau périodique</strong> classe les éléments par $Z$ croissant en <strong>périodes</strong> (lignes) et <strong>groupes</strong> (colonnes) :<br>— Les éléments d\'une même <strong>colonne</strong> ont le même nombre d\'électrons de valence → propriétés chimiques similaires<br>— La <strong>période</strong> correspond au numéro de la couche externe en cours de remplissage<br>— Groupe 1 : alcalins (1 e$^-$ de valence) ; Groupe 17 : halogènes (7 e$^-$) ; Groupe 18 : gaz nobles (couche complète)'
        },
        {
          type: 'meth', label: 'METH', titre: 'Lire la position d\'un élément dans le tableau',
          contenu: 'Connaissant $Z$, on détermine la configuration électronique, puis :<br>— <strong>Période</strong> = numéro de la couche externe<br>— <strong>Groupe</strong> = nombre d\'électrons de valence (pour les éléments des blocs s et p)<br>Exemple : S ($Z=16$, config. 2,8,6) → période 3, groupe 16 (VIA).<br>Lecture inverse : un élément du groupe 1, période 3 a config. 2,8,1 → Na.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : identifier atome, ion, molécule',
          contenu: 'Classer les espèces chimiques : H$_2$O, Na$^+$, O$_2$, Fe, Cl$^-$, NH$_3$, Ca$^{2+}$<br><br><strong>Atomes</strong> : Fe (atome de fer neutre)<br><strong>Ions</strong> : Na$^+$, Cl$^-$, Ca$^{2+}$<br><strong>Molécules</strong> : H$_2$O, O$_2$, NH$_3$<br>Un ion polyatomique comme NH$_4^+$ combinerait molécule et ion.'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'phch-3e-electricite',
  filiere: '3eme',
  matiere: 'phch',
  titre: 'Électricité — lois et circuits',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Loi d\'Ohm et résistance',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Résistance électrique',
          contenu: 'La <strong>résistance</strong> $R$ d\'un dipôle est une grandeur caractérisant son opposition au passage du courant. L\'unité est l\'<strong>ohm</strong> (Ω).<br>Elle dépend de la nature du matériau, de ses dimensions (longueur $l$, section $S$) et de la température.<br>La résistance d\'un conducteur ohmique est constante dans des conditions données.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Loi d\'Ohm',
          contenu: 'Pour un <strong>conducteur ohmique</strong> (résistance $R$) :<br>$$U = R \cdot I$$où $U$ est la tension aux bornes en volts (V), $I$ l\'intensité du courant en ampères (A), $R$ la résistance en ohms (Ω).<br>Formules dérivées : $$R = \frac{U}{I} \qquad I = \frac{U}{R}$$<br>La caractéristique $U = f(I)$ est une droite passant par l\'origine, de pente $R$.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Caractéristique d\'un dipôle',
          contenu: 'La <strong>caractéristique</strong> d\'un dipôle est la courbe $U = f(I)$ (ou $I = f(U)$) obtenue expérimentalement.<br>— Conducteur ohmique : droite de pente $R$ passant par O<br>— Diode : courbe non linéaire (ne conduit que dans un sens)<br>— DEL (diode électroluminescente) : caractéristique de diode + émission de lumière<br>— Générateur : caractéristique décroissante $U = E - r \cdot I$.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Utiliser un ohmmètre / voltmètre / ampèremètre',
          contenu: '<strong>Voltmètre</strong> : mesure la tension, branché en <strong>dérivation</strong> (en parallèle), résistance interne très grande.<br><strong>Ampèremètre</strong> : mesure l\'intensité, branché en <strong>série</strong>, résistance interne très faible.<br><strong>Ohmmètre</strong> : mesure la résistance, dipôle hors tension.<br>Sécurité : calibre supérieur à la valeur attendue, adapter si nécessaire.'
        }
      ]
    },
    {
      titre: 'Lois des circuits',
      cartes: [
        {
          type: 'th', label: 'THM', titre: 'Loi des nœuds (courant)',
          contenu: 'En un <strong>nœud</strong> (point de jonction de plusieurs fils), la somme des intensités entrantes est égale à la somme des intensités sortantes :<br>$$\sum I_{entrant} = \sum I_{sortant}$$<br>En dérivation avec deux branches : $I = I_1 + I_2$.<br>Conséquence : en série, l\'intensité est la <strong>même</strong> en tout point du circuit.'
        },
        {
          type: 'th', label: 'THM', titre: 'Loi des mailles (tension)',
          contenu: 'Dans une <strong>maille</strong> (boucle fermée), la somme algébrique des tensions est nulle :<br>$$\sum U_k = 0$$<br>Application : dans un circuit série avec générateur de FEM $E$ et résistances $R_1$, $R_2$ :<br>$$E = U_{R_1} + U_{R_2} = R_1 I + R_2 I$$<br>En dérivation : les tensions aux bornes de dipôles en parallèle sont <strong>égales</strong>.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Résistances en série et en dérivation',
          contenu: '<strong>En série</strong> : les résistances s\'additionnent :<br>$$R_{eq} = R_1 + R_2 + \cdots + R_n$$<br><strong>En dérivation</strong> : les inverses s\'additionnent :<br>$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}$$<br>Pour deux résistances en dérivation : $R_{eq} = \dfrac{R_1 \cdot R_2}{R_1 + R_2}$'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : circuit mixte',
          contenu: '$R_1 = 20\ \Omega$ en série avec un groupe de $R_2 = 30\ \Omega$ et $R_3 = 60\ \Omega$ en parallèle. Tension totale $U = 12$ V.<br><br>$R_{23} = \dfrac{30 \times 60}{30+60} = 20\ \Omega$<br>$R_{eq} = R_1 + R_{23} = 20 + 20 = 40\ \Omega$<br>$I = \dfrac{12}{40} = 0{,}3$ A<br>$U_1 = 0{,}3 \times 20 = 6$ V ; $U_{23} = 6$ V<br>$I_2 = 6/30 = 0{,}2$ A ; $I_3 = 6/60 = 0{,}1$ A'
        }
      ]
    },
    {
      titre: 'Puissance et énergie électrique',
      cartes: [
        {
          type: 'form', label: 'FORM', titre: 'Puissance électrique',
          contenu: 'La <strong>puissance</strong> $P$ dissipée (ou fournie) par un dipôle est :<br>$$P = U \cdot I$$<br>Unité : watt (W). Avec la loi d\'Ohm, on obtient des expressions équivalentes :<br>$$P = R \cdot I^2 = \frac{U^2}{R}$$<br>Exemple : une résistance de $100\ \Omega$ traversée par $0{,}5$ A : $P = 100 \times 0{,}25 = 25$ W.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Énergie électrique',
          contenu: 'L\'<strong>énergie</strong> consommée (ou produite) pendant une durée $\Delta t$ est :<br>$$E = P \cdot \Delta t = U \cdot I \cdot \Delta t$$<br>Unités : joule (J) si $t$ en secondes ; kilowattheure (kWh) si $t$ en heures.<br>Conversion : $1 \text{ kWh} = 3{,}6 \times 10^6 \text{ J} = 3600 \text{ kJ}$.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Générateur réel — FEM et résistance interne',
          contenu: 'Un générateur réel est modélisé par une <strong>force électromotrice</strong> (FEM) $E$ en série avec une <strong>résistance interne</strong> $r$.<br>La tension aux bornes du générateur en charge (débit de courant $I$) est :<br>$$U = E - r \cdot I$$<br>Quand $I = 0$ (circuit ouvert) : $U = E$.<br>La différence $r \cdot I$ représente la chute de tension interne (énergie dissipée dans le générateur).'
        },
        {
          type: 'meth', label: 'METH', titre: 'Calculer la facture d\'électricité',
          contenu: '<strong>Étapes :</strong><br>1. Calculer la puissance : $P = U \cdot I$ (en W)<br>2. Convertir en kW : $P(\text{kW}) = P(\text{W}) / 1000$<br>3. Calculer l\'énergie : $E = P \times t$ (en kWh, $t$ en heures)<br>4. Coût = $E \times \text{prix unitaire}$<br>Exemple : ampoule 60 W allumée 5 h/j pendant 30 j : $E = 0{,}060 \times 5 \times 30 = 9$ kWh.'
        }
      ]
    },
    {
      titre: 'Sécurité électrique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Effet Joule et risques',
          contenu: 'L\'<strong>effet Joule</strong> est l\'échauffement d\'un conducteur parcouru par un courant. L\'énergie dissipée sous forme de chaleur est $E_{th} = R \cdot I^2 \cdot \Delta t$.<br>Risques : surchauffe, incendie en cas de court-circuit ou surcharge.<br>Protection : <strong>fusibles</strong> (fondent au-delà d\'un seuil d\'intensité), <strong>disjoncteurs</strong> (déclenchement magnéto-thermique).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Court-circuit et tension dangereuse',
          contenu: 'Un <strong>court-circuit</strong> se produit lorsqu\'un chemin de résistance quasi nulle connecte les deux bornes d\'un générateur : $I = E/r$ peut devenir très grand, détruisant le générateur et risquant un incendie.<br>La tension du secteur (230 V en France) est <strong>dangereuse</strong> pour le corps humain (résistance ~1 kΩ → courant ~230 mA, mortel au-delà de ~10 mA traversant le cœur).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Prise de terre et différentiel',
          contenu: 'La <strong>prise de terre</strong> relie les masses métalliques des appareils au potentiel de la Terre (0 V), évitant qu\'une carcasse sous tension soit electrocutante.<br>Le <strong>disjoncteur différentiel</strong> détecte toute différence entre courant aller et courant retour (fuite vers la terre) et coupe le circuit en ~30 ms (seuil 30 mA).'
        },
        {
          type: 'meth', label: 'METH', titre: 'Règles de sécurité électrique',
          contenu: '1. Ne jamais toucher un conducteur sous tension.<br>2. Ne pas effectuer de branchements circuit sous tension : couper le disjoncteur.<br>3. Ne pas surcharger une prise (multiprise) au-delà de sa capacité nominale.<br>4. Utiliser des appareils aux normes CE.<br>5. Ne jamais mouiller du matériel électrique : l\'eau est conductrice (électrolytes dissous).<br>6. En cas d\'incendie électrique : couper l\'alimentation avant d\'intervenir.'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'phch-3e-mecanique',
  filiere: '3eme',
  matiere: 'phch',
  titre: 'Mécanique — mouvement et forces',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'Référentiel et mouvement',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Référentiel',
          contenu: 'Un <strong>référentiel</strong> est l\'ensemble {solide de référence + horloge} par rapport auquel on étudie un mouvement. Le mouvement d\'un objet n\'a de sens que <strong>relativement</strong> à un référentiel choisi.<br>Référentiels courants :<br>— <strong>Terrestre</strong> : référentiel lié à la Terre (lab, salle, sol)<br>— <strong>Géocentrique</strong> : lié au centre de la Terre (orbites satellites)<br>— <strong>Héliocentrique</strong> : lié au Soleil (orbites planètes)'
        },
        {
          type: 'def', label: 'DEF', titre: 'Trajectoire',
          contenu: 'La <strong>trajectoire</strong> d\'un point est l\'ensemble des positions successives occupées par ce point dans un référentiel donné.<br>Types de trajectoires :<br>— <strong>Rectiligne</strong> : droite<br>— <strong>Circulaire</strong> : cercle (vitesse scalaire constante possible)<br>— <strong>Curviligne</strong> (ou quelconque) : courbe quelconque (ex. parabolique pour un projectile)<br>La trajectoire dépend du référentiel choisi.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Vitesse scalaire et vecteur vitesse',
          contenu: 'La <strong>vitesse scalaire moyenne</strong> est $v = d / \Delta t$ (m/s).<br>Le <strong>vecteur vitesse</strong> $\vec{v}$ est tangent à la trajectoire, orienté dans le sens du mouvement, de norme $v = \|\vec{v}\|$.<br>Conversions : $1 \text{ m/s} = 3{,}6 \text{ km/h}$<br>Un mouvement est :<br>— <strong>uniforme</strong> : $v = $ cste<br>— <strong>accéléré</strong> : $v$ augmente<br>— <strong>décéléré (freiné)</strong> : $v$ diminue'
        },
        {
          type: 'form', label: 'FORM', titre: 'Relation espace-vitesse-temps',
          contenu: 'Pour un mouvement rectiligne uniforme :<br>$$d = v \cdot \Delta t$$<br>La distance $d$ est en mètres (m), la vitesse $v$ en m/s, le temps $\Delta t$ en secondes (s).<br>Exemple : un train roule à $v = 70 \text{ m/s}$ pendant $\Delta t = 2 \text{ h} = 7200 \text{ s}$ :<br>$d = 70 \times 7200 = 504\ 000 \text{ m} = 504 \text{ km}$'
        }
      ]
    },
    {
      titre: 'Forces',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Force — caractéristiques du vecteur',
          contenu: 'Une <strong>force</strong> est une action mécanique exercée par un objet sur un autre. Elle est représentée par un vecteur $\vec{F}$ caractérisé par :<br>— <strong>Point d\'application</strong> : où s\'applique la force<br>— <strong>Direction</strong> : droite portant le vecteur<br>— <strong>Sens</strong> : orientation sur cette droite<br>— <strong>Norme (intensité)</strong> : valeur en newtons (N)<br>Exemples : poids $\vec{P}$, réaction normale $\vec{N}$, frottement $\vec{f}$, tension $\vec{T}$.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Poids et force gravitationnelle',
          contenu: 'Le <strong>poids</strong> $\vec{P}$ d\'un objet de masse $m$ est l\'attraction gravitationnelle exercée par la Terre :<br>$$P = m \cdot g$$<br>avec $g \approx 9{,}8 \text{ N/kg}$ (intensité de la pesanteur). Direction : vertical, sens : vers le bas.<br>Attention : la <strong>masse</strong> $m$ (en kg) est une propriété intrinsèque de la matière (invariante) ; le <strong>poids</strong> $P$ (en N) dépend du champ gravitationnel local.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Résultante des forces — équilibre',
          contenu: 'La <strong>résultante</strong> (ou somme vectorielle) des forces appliquées à un objet est :<br>$$\vec{R} = \vec{F}_1 + \vec{F}_2 + \cdots$$<br>Un objet est en <strong>équilibre</strong> si et seulement si $\vec{R} = \vec{0}$ (toutes les forces se compensent).<br>Exemple : livre sur table → poids $\vec{P}$ vers le bas + réaction $\vec{N}$ vers le haut = $\vec{0}$.'
        },
        {
          type: 'th', label: 'THM', titre: 'Troisième loi de Newton — action-réaction',
          contenu: 'Si un objet A exerce une force $\vec{F}_{A/B}$ sur B, alors B exerce sur A une force $\vec{F}_{B/A}$ telle que :<br>$$\vec{F}_{B/A} = -\vec{F}_{A/B}$$<br>Les deux forces sont égales en norme, opposées en sens, de même direction, mais <strong>ne s\'appliquent pas sur le même objet</strong> (donc ne se compensent pas pour l\'étude de l\'un d\'eux).'
        }
      ]
    },
    {
      titre: 'Lois de Newton',
      cartes: [
        {
          type: 'th', label: 'THM', titre: 'Première loi de Newton — principe d\'inertie',
          contenu: 'Dans un référentiel galiléen, si la résultante des forces appliquées à un objet est nulle, alors son vecteur vitesse est constant (norme et direction inchangées) :<br>$$\vec{R} = \vec{0} \Leftrightarrow \vec{v} = \text{constante}$$<br>Cela inclut le repos ($v = 0$) et le mouvement rectiligne uniforme ($v = $ cste, direction fixe).<br><em>Un objet ne change pas de mouvement spontanément.</em>'
        },
        {
          type: 'th', label: 'THM', titre: 'Deuxième loi de Newton',
          contenu: 'Dans un référentiel galiléen, la résultante des forces est proportionnelle à l\'accélération :<br>$$\sum \vec{F} = m \cdot \vec{a}$$<br>$m$ = masse en kg, $\vec{a}$ = vecteur accélération en m/s².<br>Sens : $\vec{a}$ a la même direction et le même sens que $\sum \vec{F}$.<br>Conséquence : plus un objet est massif, plus il faut de force pour l\'accélérer.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Chute libre',
          contenu: 'La <strong>chute libre</strong> est le mouvement d\'un objet soumis uniquement à son poids (sans frottement).<br>En chute libre : $\sum \vec{F} = \vec{P} = m\vec{g}$, donc $\vec{a} = \vec{g}$ (accélération constante vers le bas).<br>La trajectoire est rectiligne verticale si l\'objet est lâché sans vitesse initiale horizontale, ou parabolique si une vitesse initiale horizontale existe (projectile).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Forces de frottement',
          contenu: 'Les <strong>forces de frottement</strong> s\'opposent au mouvement relatif de deux surfaces en contact.<br>— Frottement <strong>solide</strong> (Coulomb) : $f \leq \mu_s N$ (statique) ou $f = \mu_c N$ (cinétique), $\mu$ coefficient de frottement.<br>— Frottement <strong>fluide</strong> (air, eau) : proportionnel à la vitesse pour les faibles vitesses, $f = k \cdot v$.<br>Elles dissipent de l\'énergie cinétique en chaleur (effet Joule mécanique).'
        }
      ]
    },
    {
      titre: 'Applications et méthode de résolution',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Méthode : appliquer la 2ème loi de Newton',
          contenu: '<strong>Étapes :</strong><br>1. Choisir le système étudié et le référentiel.<br>2. Faire le bilan des forces (poids, réactions, frottements, tension…).<br>3. Choisir un repère (x, y), projeter $\sum \vec{F} = m\vec{a}$.<br>4. Résoudre l\'équation scalaire obtenue.<br>5. Vérifier la cohérence (unités, signe, ordre de grandeur).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : plan incliné',
          contenu: 'Un objet de 2 kg glisse sans frottement sur un plan incliné à $\theta = 30°$. Quelle est son accélération ?<br><br>Forces : poids $P = mg = 2 \times 9{,}8 = 19{,}6$ N ; réaction normale $N$ perpendiculaire au plan.<br>Projection axe $x$ (dans la pente) : $P \sin\theta = ma$<br>$$a = g \sin 30° = 9{,}8 \times 0{,}5 = 4{,}9 \text{ m/s}^2$$'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Mouvement circulaire uniforme',
          contenu: 'Un objet en mouvement <strong>circulaire uniforme</strong> a une vitesse scalaire $v$ constante mais son vecteur vitesse change de direction à chaque instant.<br>Il subit une accélération centripète (vers le centre du cercle) : $$a_c = \frac{v^2}{R}$$<br>La force centripète nécessaire est $F_c = \frac{mv^2}{R}$ (fournie par la tension du fil, la réaction de la route, la gravitation…).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : distance de freinage',
          contenu: 'Une voiture de 1200 kg roule à 90 km/h $= 25$ m/s. Une force de freinage de 6000 N est appliquée.<br><br>Décélération : $a = -F/m = -6000/1200 = -5 \text{ m/s}^2$<br>Distance d\'arrêt : $v^2 = v_0^2 + 2a \cdot d$ avec $v=0$<br>$$d = \frac{v_0^2}{2|a|} = \frac{625}{10} = 62{,}5 \text{ m}$$'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'phch-3e-chimie',
  filiere: '3eme',
  matiere: 'phch',
  titre: 'Chimie — réactions et dosages',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Réactions de combustion',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Combustion — définition',
          contenu: 'Une <strong>combustion</strong> est une réaction chimique exothermique entre un <strong>combustible</strong> (corps qui brûle) et un <strong>comburant</strong> (corps qui entretient la combustion, généralement le dioxygène O$_2$ de l\'air).<br>La combustion nécessite trois conditions simultanées (triangle du feu) : combustible, comburant, énergie d\'activation.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Combustion complète du carbone et des hydrocarbures',
          contenu: 'Combustion <strong>complète</strong> (excès de O$_2$) : tous les atomes de C donnent CO$_2$, tous les H donnent H$_2$O.<br>$$C + O_2 \to CO_2$$<br>$$CH_4 + 2O_2 \to CO_2 + 2H_2O$$<br>Pour un alcane $C_nH_{2n+2}$ :<br>$$C_nH_{2n+2} + \frac{3n+1}{2}O_2 \to nCO_2 + (n+1)H_2O$$'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Combustion incomplète',
          contenu: 'Combustion <strong>incomplète</strong> (manque de O$_2$) : formation de monoxyde de carbone CO (toxique, inodore) et/ou de carbone suie C.<br>$$2C + O_2 \to 2CO$$<br>$$CH_4 + \frac{3}{2}O_2 \to CO + 2H_2O$$<br>Risques : empoisonnement au CO (se fixe sur l\'hémoglobine à la place de O$_2$). Détecteurs de CO obligatoires.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Équilibrer une équation de combustion',
          contenu: '<strong>Étapes :</strong><br>1. Écrire les réactifs et produits (combustion complète : CO$_2$ + H$_2$O).<br>2. Équilibrer C (coefficient de CO$_2$).<br>3. Équilibrer H (coefficient de H$_2$O).<br>4. Équilibrer O (coefficient de O$_2$, peut être demi-entier → multiplier tout par 2).<br>Exemple : $C_3H_8 + 5O_2 \to 3CO_2 + 4H_2O$'
        }
      ]
    },
    {
      titre: 'Réactions acide-base et pH',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Acide, base, pH',
          contenu: 'Un <strong>acide</strong> est une espèce chimique capable de libérer des ions H$^+$ (ou H$_3$O$^+$, oxonium) en solution aqueuse.<br>Une <strong>base</strong> libère des ions OH$^-$ (hydroxyde).<br>Le <strong>pH</strong> est une mesure de l\'acidité : $\text{pH} = -\log[\text{H}_3\text{O}^+]$<br>— pH < 7 : solution acide ; pH = 7 : solution neutre ; pH > 7 : solution basique (alcaline).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Indicateurs colorés',
          contenu: 'Un <strong>indicateur coloré acide-base</strong> est une substance dont la couleur dépend du pH.<br>Exemples courants :<br>— <strong>BBT</strong> (bleu de bromothymol) : jaune (acide) / vert (neutre) / bleu (basique)<br>— <strong>Phénolphtaléine</strong> : incolore (acide/neutre) / rose fuchsia (basique, pH > 8,2)<br>— <strong>Hélianthine</strong> : rouge (acide) / orange (neutre) / jaune (basique)<br>— Papier pH universel : donne une estimation par comparaison de couleurs.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Neutralisation acide-base',
          contenu: 'La <strong>neutralisation</strong> est la réaction entre un acide et une base qui produit de l\'eau et un sel :<br>$$H_3O^+ + OH^- \to 2H_2O$$<br>Exemple : acide chlorhydrique + soude (NaOH) :<br>$$HCl + NaOH \to NaCl + H_2O$$<br>À l\'équivalence, les réactifs sont en proportions stœchiométriques : ni excès d\'acide, ni excès de base → pH = 7 pour un couple fort/fort.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer un pH expérimentalement',
          contenu: '<strong>pH-mètre :</strong><br>1. Rincer l\'électrode à l\'eau distillée, essuyer avec papier absorbant.<br>2. Étalonner avec deux solutions tampons de pH connu.<br>3. Plonger l\'électrode dans la solution à mesurer.<br>4. Lire la valeur stabilisée.<br><br><strong>Papier pH :</strong> tremper la bandelette, comparer à l\'échelle de couleurs. Précision ±1 unité pH.<br>Sécurité : acides et bases concentrés sont corrosifs (port de gants et lunettes obligatoire).'
        }
      ]
    },
    {
      titre: 'Dosages et titrages',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Dosage par étalonnage',
          contenu: 'Le <strong>dosage par étalonnage</strong> consiste à déterminer la concentration d\'une solution inconnue en la comparant à une série de solutions de concentrations connues (<strong>gamme étalon</strong>).<br>On mesure une propriété physique (absorbance, conductivité, pH) en fonction de la concentration connue pour tracer une courbe d\'étalonnage, puis on lit la concentration inconnue sur cette courbe.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Titrage — principe général',
          contenu: 'Le <strong>titrage</strong> (ou dosage par réaction) consiste à faire réagir la solution à doser (de concentration inconnue) avec une solution titrante (de concentration connue) jusqu\'au point d\'<strong>équivalence</strong>.<br>À l\'équivalence : les réactifs ont été introduits en proportions stœchiométriques. On mesure le volume versé ($V_{éq}$) pour en déduire la concentration inconnue.'
        },
        {
          type: 'form', label: 'FORM', titre: 'Relation à l\'équivalence',
          contenu: 'Pour une réaction $a A + b B \to$ produits, à l\'équivalence :<br>$$\frac{n_A}{a} = \frac{n_B}{b}$$<br>avec $n = C \times V$ (concentration en mol/L, volume en L).<br>Cas particulier (a = b = 1) : $C_A \cdot V_A = C_B \cdot V_{éq}$<br>Donc : $C_A = \dfrac{C_B \cdot V_{éq}}{V_A}$'
        },
        {
          type: 'def', label: 'DEF', titre: 'Oxydoréduction — notion',
          contenu: 'Une <strong>réaction d\'oxydoréduction</strong> est un transfert d\'électrons entre deux espèces.<br>— L\'<strong>oxydant</strong> capte des électrons (il se réduit).<br>— Le <strong>réducteur</strong> cède des électrons (il s\'oxyde).<br>Exemples : rouille du fer ($Fe \to Fe^{2+} + 2e^-$), combustion, réaction avec l\'eau oxygénée.<br>La <strong>corrosion</strong> est une oxydoréduction lente du métal par l\'humidité et l\'oxygène.'
        }
      ]
    },
    {
      titre: 'Corrosion et protection',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Corrosion des métaux',
          contenu: 'La <strong>corrosion</strong> est la dégradation d\'un métal par réaction avec son environnement (eau, oxygène, acides, sel).<br>Rouille du fer : $4Fe + 3O_2 + 6H_2O \to 4Fe(OH)_3$ → rouille hydratée Fe$_2$O$_3\cdot nH_2O$.<br>Corrosion accélérée par : acidité, présence de sel (eau de mer), contact entre deux métaux différents (pile galvanique).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Méthodes de protection contre la corrosion',
          contenu: 'Différentes stratégies pour protéger un métal :<br>— <strong>Barrière physique</strong> : peinture, vernis, laque, plastification<br>— <strong>Revêtement métallique</strong> : galvanisation (dépôt de zinc sur acier), chromage, nickelage<br>— <strong>Protection cathodique</strong> : relier le métal à un <strong>anode sacrificielle</strong> (zinc, magnésium) qui s\'oxyde à sa place<br>— <strong>Alliage</strong> : acier inoxydable (fer + chrome + nickel), inaltérable à l\'air et à l\'eau'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : titrage acide-base',
          contenu: 'On titre 20 mL de soude $C_B$ inconnue par HCl à $C_A = 0{,}10$ mol/L. L\'équivalence est atteinte pour $V_{éq} = 15$ mL.<br><br>À l\'équivalence : $C_A \cdot V_A = C_B \cdot V_B$<br>$$C_B = \frac{C_A \times V_A}{V_B} = \frac{0{,}10 \times 15}{20} = 0{,}075 \text{ mol/L}$$'
        },
        {
          type: 'meth', label: 'METH', titre: 'Repérer le point d\'équivalence d\'un titrage',
          contenu: '<strong>Méthodes :</strong><br>— <strong>Indicateur coloré</strong> : noter le changement de couleur permanent (1 goutte en excès)<br>— <strong>Courbe pH = f(V)</strong> : chercher le point d\'inflexion (dérivée maximale)<br>— <strong>Méthode des tangentes parallèles</strong> : tracer deux tangentes parallèles à la courbe encadrant le saut de pH, tracer la médiatrice → abscisse = $V_{éq}$<br>— <strong>Conductimétrie</strong> : point de minimum ou de changement de pente.'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'phch-3e-energie',
  filiere: '3eme',
  matiere: 'phch',
  titre: 'Énergie et conversions',
  ordre: 5,
  enrich: false,
  sections: [
    {
      titre: 'Formes d\'énergie',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Énergie cinétique',
          contenu: 'L\'<strong>énergie cinétique</strong> est l\'énergie associée au mouvement d\'un objet de masse $m$ animé d\'une vitesse $v$ :<br>$$E_c = \frac{1}{2} m v^2$$<br>Unité : joule (J). $E_c$ est toujours positive ou nulle. Elle est nulle quand l\'objet est au repos.<br>Exemple : voiture 1000 kg à 30 m/s : $E_c = \frac{1}{2} \times 1000 \times 900 = 450\ 000$ J = 450 kJ.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Énergie potentielle de pesanteur',
          contenu: 'L\'<strong>énergie potentielle de pesanteur</strong> est l\'énergie stockée par un objet en raison de sa position en altitude :<br>$$E_p = m \cdot g \cdot h$$<br>$h$ = hauteur par rapport à un niveau de référence choisi (J), $g = 9{,}8$ N/kg.<br>Elle peut être nulle, positive ou négative selon le niveau de référence.<br>Exemple : livre 0,5 kg à 1,5 m de hauteur : $E_p = 0{,}5 \times 9{,}8 \times 1{,}5 = 7{,}35$ J.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Autres formes d\'énergie',
          contenu: 'Il existe de nombreuses formes d\'énergie :<br>— <strong>Électrique</strong> : liée au courant électrique ($E = P \cdot t$)<br>— <strong>Chimique</strong> : stockée dans les liaisons chimiques (pile, combustible, aliments)<br>— <strong>Thermique</strong> : liée à l\'agitation des particules (chaleur)<br>— <strong>Lumineuse (rayonnante)</strong> : transportée par les ondes électromagnétiques (photons)<br>— <strong>Nucléaire</strong> : stockée dans le noyau atomique, libérée par fission ou fusion<br>— <strong>Mécanique</strong> : $E_c + E_p$'
        },
        {
          type: 'th', label: 'THM', titre: 'Conservation et dégradation de l\'énergie',
          contenu: 'L\'énergie se <strong>conserve</strong> globalement (1er principe de la thermodynamique) : elle ne se crée pas, ne se détruit pas, mais se <strong>transforme</strong> d\'une forme en une autre.<br>Cependant, dans toute conversion, une partie de l\'énergie est dissipée en chaleur (énergie thermique non récupérable utile) : c\'est la <strong>dégradation</strong> de l\'énergie.<br>Exemples : frottements, effet Joule, bruit.'
        }
      ]
    },
    {
      titre: 'Rendement et bilan énergétique',
      cartes: [
        {
          type: 'form', label: 'FORM', titre: 'Rendement d\'un convertisseur',
          contenu: 'Le <strong>rendement</strong> $\eta$ (êta) d\'un convertisseur d\'énergie est le rapport de l\'énergie utile produite sur l\'énergie totale reçue :<br>$$\eta = \frac{E_{utile}}{E_{totale}} = \frac{P_{utile}}{P_{totale}}$$<br>$\eta$ est sans unité, compris entre 0 et 1 (ou entre 0 % et 100 %).<br>Un rendement $\eta = 1$ (100 %) est impossible (toujours des pertes).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : rendement d\'un moteur',
          contenu: 'Un moteur électrique reçoit $P_{élec} = 2$ kW et fournit $P_{méca} = 1{,}6$ kW.<br><br>$$\eta = \frac{1{,}6}{2{,}0} = 0{,}80 = 80\%$$<br>Les $P_{pertes} = 2 - 1{,}6 = 0{,}4$ kW sont dissipées en chaleur (effet Joule + frottements).<br><br>Rendements typiques : ampoule à incandescence ~5 %, LED ~30 %, moteur électrique ~90 %, panneau solaire ~20 %.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Sources d\'énergie renouvelables et non renouvelables',
          contenu: '<strong>Non renouvelables</strong> (stocks finis, formation sur millions d\'années) :<br>— Combustibles fossiles : charbon, pétrole, gaz naturel (90 % des émissions de CO$_2$)<br>— Uranium (fission nucléaire)<br><br><strong>Renouvelables</strong> (flux continu, non épuisables à l\'échelle humaine) :<br>— Solaire (photovoltaïque, thermique), éolien, hydraulique, géothermique, biomasse, marémotrice<br>Transition énergétique : passage des fossiles vers les renouvelables.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Bilan énergétique mondial',
          contenu: 'À l\'échelle mondiale (chiffres indicatifs, début XXI$^e$ siècle) :<br>— ~80 % de l\'énergie primaire d\'origine fossile<br>— CO$_2$ et effet de serre : augmentation de la température moyenne mondiale (+1,1 °C depuis 1850)<br>— Objectif Accord de Paris : limiter le réchauffement à +1,5°C–+2°C<br>Bilan énergétique d\'un pays : $E_{produite} + E_{importée} = E_{consommée} + E_{exportée} + E_{stockée}$'
        }
      ]
    },
    {
      titre: 'Conversions d\'énergie courantes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Centrale thermique — chaîne de conversion',
          contenu: 'Dans une centrale thermique (charbon, gaz, nucléaire) :<br>$$E_{chimique/nucléaire} \to E_{thermique} \to E_{mécanique} \to E_{électrique}$$<br>Chaque conversion entraîne des pertes thermiques. Le rendement global d\'une centrale à flamme est ~33-40 %, d\'une centrale nucléaire ~33 %, d\'une turbine à gaz à cycle combiné ~55 %.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Panneau photovoltaïque et éolienne',
          contenu: '<strong>Panneau photovoltaïque</strong> : $E_{lumineuse} \to E_{électrique}$ via l\'effet photoélectrique dans les semi-conducteurs (silicium). Rendement ~15-20 %.<br><strong>Éolienne</strong> : $E_{cinétique\ vent} \to E_{mécanique\ (rotation)} \to E_{électrique}$ via un générateur. Rendement ~40-50 % (limite de Betz ~59 %).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Énergie mécanique totale',
          contenu: 'L\'<strong>énergie mécanique totale</strong> est la somme de l\'énergie cinétique et de l\'énergie potentielle :<br>$$E_{mec} = E_c + E_p = \frac{1}{2}mv^2 + mgh$$<br>En l\'absence de frottements, $E_{mec}$ se <strong>conserve</strong> : la conversion entre $E_c$ et $E_p$ est totale.<br>Avec frottements : $E_{mec}$ diminue, l\'énergie perdue est transférée vers l\'énergie thermique.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : conservation de l\'énergie mécanique',
          contenu: 'Une bille de 100 g tombe d\'une hauteur $h = 2$ m (vitesse initiale nulle). Calculer sa vitesse juste avant l\'impact (sans frottements).<br><br>Conservation : $E_{mec,i} = E_{mec,f}$<br>$mgh + 0 = 0 + \frac{1}{2}mv^2$<br>$$v = \sqrt{2gh} = \sqrt{2 \times 9{,}8 \times 2} = \sqrt{39{,}2} \approx 6{,}26 \text{ m/s}$$'
        }
      ]
    },
    {
      titre: 'Unités et ordres de grandeur',
      cartes: [
        {
          type: 'form', label: 'FORM', titre: 'Tableau des unités d\'énergie',
          contenu: 'Conversions importantes :<br>$$1 \text{ kWh} = 3{,}6 \times 10^6 \text{ J} = 3600 \text{ kJ}$$<br>$$1 \text{ cal} = 4{,}18 \text{ J} \quad ; \quad 1 \text{ kcal} = 4180 \text{ J}$$<br>$$1 \text{ tep (tonne équivalent pétrole)} \approx 42 \text{ GJ}$$<br>Préfixes : kilo (k, $10^3$), méga (M, $10^6$), giga (G, $10^9$), téra (T, $10^{12}$), péta (P, $10^{15}$).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : puissance d\'un panneau solaire',
          contenu: 'Un panneau solaire de surface $S = 2 \text{ m}^2$ reçoit un flux solaire de $E = 900$ W/m². Son rendement est $\eta = 18\%$. Quelle énergie électrique produit-il en 6 heures ?<br><br>$P_{reçue} = E \times S = 900 \times 2 = 1800$ W<br>$P_{élec} = \eta \times P_{reçue} = 0{,}18 \times 1800 = 324$ W<br>$E_{élec} = 324 \times 6 = 1944$ Wh $\approx 1{,}94$ kWh'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Ordres de grandeur à connaître',
          contenu: 'Quelques repères :<br>— Énergie d\'un repas (~2000 kcal) ≈ 8,4 MJ ≈ 2,3 kWh<br>— Consommation électrique annuelle d\'un Français : ~2300 kWh<br>— Énergie libérée par 1 L d\'essence (combustion) ≈ 32 MJ ≈ 8,9 kWh<br>— Puissance d\'un humain au repos : ~100 W ; à l\'effort : 200-400 W<br>— Puissance d\'une centrale nucléaire (1 réacteur) : ~1 GW = $10^9$ W'
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// SVT
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'svt-3e-genetique',
  filiere: '3eme',
  matiere: 'svt',
  titre: 'Génétique et hérédité',
  ordre: 1,
  enrich: false,
  sections: [
    {
      titre: 'L\'ADN et le gène',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'ADN — structure',
          contenu: 'L\'<strong>ADN</strong> (acide désoxyribonucléique) est la molécule support de l\'information génétique.<br>Structure : <strong>double hélice</strong> composée de deux brins antiparallèles reliés par des paires de <strong>bases azotées</strong> complémentaires :<br>— Adénine (A) — Thymine (T)<br>— Guanine (G) — Cytosine (C)<br>L\'enchaînement de ces bases forme un code (séquence nucléotidique) qui contient l\'information génétique.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Nucléotide',
          contenu: 'Chaque maillon d\'un brin d\'ADN est un <strong>nucléotide</strong>, composé de :<br>— Un sucre (désoxyribose)<br>— Un groupement phosphate<br>— Une base azotée (A, T, G ou C)<br>Les nucléotides s\'enchaînent par des liaisons phosphodiester entre le sucre et le phosphate. Les deux brins sont liés par des liaisons hydrogène entre bases complémentaires (A–T : 2 liaisons ; G–C : 3 liaisons).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Gène',
          contenu: 'Un <strong>gène</strong> est une portion d\'ADN (séquence de nucléotides) codant pour une protéine ou une molécule fonctionnelle (ARN).<br>— Un gène occupe une position précise sur un chromosome : le <strong>locus</strong> (pluriel : loci).<br>— Le génome humain contient environ 20 000-25 000 gènes.<br>— La longueur d\'un gène varie de quelques centaines à plusieurs millions de paires de bases.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Complémentarité des bases et réplication',
          contenu: 'La règle de complémentarité (A-T, G-C) permet la <strong>réplication</strong> fidèle de l\'ADN lors de la division cellulaire :<br>1. Dénaturation (ouverture de la double hélice)<br>2. Chaque brin sert de <strong>matrice</strong><br>3. Des nucléotides complémentaires s\'assemblent sur chaque brin<br>→ 2 molécules d\'ADN identiques à l\'original<br>Cette fidélité garantit la transmission de l\'information génétique.'
        }
      ]
    },
    {
      titre: 'Chromosomes et caryotype',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Chromosome et caryotype humain',
          contenu: 'Un <strong>chromosome</strong> est une longue molécule d\'ADN associée à des protéines (histones), visible en microscopie lors de la division cellulaire.<br>L\'espèce humaine possède <strong>46 chromosomes</strong> organisés en <strong>23 paires</strong> :<br>— 22 paires d\'<strong>autosomes</strong> (paires 1 à 22)<br>— 1 paire de <strong>chromosomes sexuels</strong> : XX (femme) ou XY (homme)<br>Le <strong>caryotype</strong> est l\'arrangement photographié des chromosomes classés par paire.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Paires homologues et allèles',
          contenu: 'Les deux chromosomes d\'une paire sont dits <strong>homologues</strong> : ils portent les mêmes gènes aux mêmes loci, mais peuvent porter des versions différentes.<br>Les différentes versions d\'un même gène sont appelées <strong>allèles</strong>.<br>— Si les deux allèles sont identiques : individu <strong>homozygote</strong> pour ce gène<br>— S\'ils sont différents : individu <strong>hétérozygote</strong>'
        },
        {
          type: 'def', label: 'DEF', titre: 'Diploïdie et haploïdie',
          contenu: 'Les cellules somatiques (du corps) humaines sont <strong>diploïdes</strong> (2n = 46 chromosomes, deux exemplaires de chaque chromosome).<br>Les <strong>gamètes</strong> (spermatozoïdes, ovocytes) sont <strong>haploïdes</strong> (n = 23 chromosomes, un seul exemplaire de chaque paire).<br>La fécondation (spermatozoïde + ovocyte) rétablit la diploïdie : $n + n = 2n$.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Lire et interpréter un caryotype',
          contenu: '<strong>Étapes :</strong><br>1. Compter le nombre total de chromosomes (normalement 46).<br>2. Identifier les paires homologues (taille, forme, bandes).<br>3. Identifier les chromosomes sexuels (paire 23 : XX ou XY).<br>4. Détecter d\'éventuelles anomalies : trisomie (3 chromosomes pour une paire), monosomie, translocation.<br>Exemple : trisomie 21 (syndrome de Down) : 3 chromosomes 21 → 47 chromosomes au total.'
        }
      ]
    },
    {
      titre: 'Génotype, phénotype et lois de Mendel',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Génotype et phénotype',
          contenu: 'Le <strong>génotype</strong> est l\'ensemble des allèles portés par un individu (information génétique).<br>Le <strong>phénotype</strong> est l\'ensemble des caractères observables (morphologiques, physiologiques, moléculaires) résultant de l\'expression du génotype dans un environnement donné.<br>$$\text{Phénotype} = f(\text{Génotype} \times \text{Environnement})$$<br>Un même génotype peut donner des phénotypes différents selon les conditions de vie.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dominance et récessivité',
          contenu: 'Chez un individu hétérozygote (Aa) :<br>— L\'allèle <strong>dominant</strong> (noté en majuscule, A) s\'exprime dans le phénotype même en un seul exemplaire.<br>— L\'allèle <strong>récessif</strong> (noté en minuscule, a) ne s\'exprime que chez un homozygote (aa).<br>Exemples : yeux bruns (B) dominants sur yeux bleus (b) ; maladie récessive → ne s\'exprime que si aa.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Lois de Mendel — croisements',
          contenu: '<strong>1ère loi (ségrégation) :</strong> les deux allèles d\'un parent se séparent lors de la formation des gamètes ; chaque gamète ne porte qu\'un seul allèle de chaque gène.<br><strong>2ème loi (assortiment indépendant) :</strong> les paires d\'allèles se transmettent indépendamment les unes des autres (pour des gènes sur des chromosomes différents).<br>Croisement Aa × Aa → 1/4 AA : 2/4 Aa : 1/4 aa → phénotype : 3/4 [A] : 1/4 [a].'
        },
        {
          type: 'meth', label: 'METH', titre: 'Construire et utiliser un échiquier de Punnett',
          contenu: '<strong>Méthode :</strong><br>1. Déterminer les génotypes des parents et leurs gamètes possibles.<br>2. Placer les gamètes d\'un parent en ligne, ceux de l\'autre en colonne.<br>3. Remplir le tableau avec les génotypes des descendants (combinaisons).<br>4. Déduire les proportions phénotypiques.<br>Exemple : Bb × Bb → BB (1/4), Bb (1/2), bb (1/4) → 3 bruns : 1 bleu.'
        }
      ]
    },
    {
      titre: 'Arbres généalogiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Conventions des arbres généalogiques',
          contenu: 'Un <strong>arbre généalogique</strong> représente les liens familiaux et la transmission d\'un caractère héréditaire.<br>Conventions :<br>— Carré □ : individu de sexe masculin<br>— Cercle ○ : individu de sexe féminin<br>— Symbole plein (■ ou ●) : individu atteint (exprimant le caractère étudié)<br>— Trait horizontal : couple ; trait vertical : descendance<br>— Générations numérotées en chiffres romains (I, II, III…) de haut en bas.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Analyser un arbre généalogique',
          contenu: '<strong>Questions à se poser :</strong><br>1. Le caractère est-il <strong>dominant ou récessif</strong> ? (Parents non atteints → enfant atteint : caractère récessif)<br>2. Le gène est-il <strong>autosomique ou lié au sexe</strong> ? (Transmission différente garçons/filles → lié au sexe X)<br>3. Déterminer les génotypes de chaque individu en partant des cas certains.<br>4. Calculer les probabilités pour les descendants.'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : arbre généalogique',
          contenu: 'Deux parents non daltoniens ont un fils daltonien. Le daltonisme est-il dominant ou récessif ? Lié au X ?<br><br>— Parents non atteints → fils atteint : le caractère est <strong>récessif</strong>.<br>— Le fils reçoit son chromosome X de sa mère uniquement : si gène sur X → la mère est conductrice (X$^D$X$^d$), le père non atteint (X$^D$Y). Le fils hérite X$^d$Y → <strong>daltonien</strong>.<br>Conclusion : le daltonisme est récessif lié à l\'X (transmission hémizygote chez les garçons).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Maladies génétiques — exemples',
          contenu: 'Quelques maladies génétiques étudiées en 3ème :<br>— <strong>Mucoviscidose</strong> : autosomique récessive (gène CFTR)<br>— <strong>Drépanocytose</strong> : autosomique codominante (hémoglobine S)<br>— <strong>Hémophilie</strong> : récessive liée à l\'X (facteur de coagulation)<br>— <strong>Daltonisme</strong> : récessif lié à l\'X (photorécepteurs cônes)<br>— <strong>Trisomie 21</strong> : anomalie chromosomique (non héréditaire au sens strict, accident méiotique)'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'svt-3e-evolution',
  filiere: '3eme',
  matiere: 'svt',
  titre: 'Évolution des êtres vivants',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Théorie de l\'évolution',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Théorie darwinienne de l\'évolution',
          contenu: 'La théorie de l\'évolution, proposée par <strong>Charles Darwin</strong> (<em>De l\'origine des espèces</em>, 1859), repose sur :<br>1. La <strong>variation</strong> : les individus d\'une même population ne sont pas identiques.<br>2. L\'<strong>hérédité</strong> : les caractères se transmettent aux descendants.<br>3. La <strong>sélection naturelle</strong> : les individus les mieux adaptés à leur environnement ont une meilleure survie et reproduction.<br>4. La <strong>spéciation</strong> : accumulation de changements → apparition de nouvelles espèces.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Sélection naturelle',
          contenu: 'La <strong>sélection naturelle</strong> est le mécanisme par lequel certains individus, porteurs de variants héréditaires avantageux, laissent plus de descendants que les autres.<br>— <strong>Pression de sélection</strong> : facteurs environnementaux (prédation, ressources, parasites, température).<br>— Au fil des générations, les allèles avantageux augmentent en fréquence dans la population.<br>Exemple : mélanisme industriel du Phalène du bouleau (Biston betularia).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Dérive génétique',
          contenu: 'La <strong>dérive génétique</strong> est la variation aléatoire des fréquences alléliques dans une population, indépendamment de la valeur adaptative.<br>Elle est d\'autant plus importante que la population est <strong>petite</strong> (goulot d\'étranglement, effet fondateur).<br>Conséquence : un allèle peut disparaître ou se fixer par pur hasard, même s\'il n\'est ni avantageux ni désavantageux.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Variation génétique — sources',
          contenu: 'La variation génétique au sein des populations provient de :<br>— <strong>Mutations</strong> : modifications de la séquence d\'ADN (substitution, insertion, délétion), source première de nouveaux allèles<br>— <strong>Recombinaisons génétiques</strong> : brassages lors de la méiose (crossing-over, ségrégation indépendante)<br>— <strong>Flux de gènes</strong> : migration d\'individus entre populations<br>Cette diversité est la matière première sur laquelle agit la sélection naturelle.'
        }
      ]
    },
    {
      titre: 'Preuves de l\'évolution',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Preuves paléontologiques (fossiles)',
          contenu: 'Les <strong>fossiles</strong> sont des restes ou traces d\'organismes du passé conservés dans les roches sédimentaires.<br>Ils apportent des preuves de l\'évolution en montrant :<br>— L\'existence passée d\'espèces disparues<br>— Des formes intermédiaires entre groupes (ex. Archaeopteryx entre reptiles et oiseaux)<br>— Une complexification progressive au fil du temps géologique<br>Datation par radiochronologie (ex. $^{14}$C jusqu\'à 50 000 ans ; uranium/plomb pour roches anciennes).'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Homologies anatomiques',
          contenu: 'Des organes <strong>homologues</strong> ont la même origine embryologique et le même plan d\'organisation, même si leurs fonctions diffèrent : ils témoignent d\'un <strong>ancêtre commun</strong>.<br>Exemple : membre antérieur des tétrapodes (humérus + radius/ulna + main) :<br>— Bras humain (préhension), aile de chauve-souris (vol), nageoire de dauphin (nage), patte de cheval (locomotion)<br>→ Plan architectural identique malgré des fonctions très différentes.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Preuves moléculaires et génomiques',
          contenu: 'La comparaison des séquences d\'ADN ou de protéines entre espèces montre que :<br>— Plus deux espèces sont proches phylogénétiquement, plus leurs séquences sont similaires.<br>— Le gène de l\'hémoglobine humaine ressemble à ~98 % à celui du chimpanzé.<br>— Certains gènes sont <strong>universellement conservés</strong> (ARN ribosomaux, histones) → ancêtre commun universel (LUCA).<br>Ces données permettent de construire des arbres phylogénétiques moléculaires.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Preuves biogéographiques',
          contenu: 'La <strong>biogéographie</strong> étudie la répartition des espèces à la surface du globe.<br>Observations en faveur de l\'évolution :<br>— Les îles hébergent des espèces endémiques proches des espèces continentales voisines (radiation adaptative, ex. pinsons de Darwin aux Galápagos).<br>— La dérive des continents explique des distributions disjointes (marsupieux en Australie et Amérique du Sud).<br>— Les espèces invasives démontrent la rapidité de l\'adaptation.'
        }
      ]
    },
    {
      titre: 'Spéciation et arbres phylogénétiques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Spéciation',
          contenu: 'La <strong>spéciation</strong> est le processus par lequel une population donne naissance à une ou plusieurs nouvelles espèces.<br>Mécanisme le plus courant : <strong>spéciation allopatrique</strong><br>1. Une population est divisée par une barrière géographique (montagne, mer).<br>2. Les deux sous-populations évoluent indépendamment (sélection différente, dérive).<br>3. Accumulation de différences → deux espèces qui ne peuvent plus se reproduire entre elles (<strong>isolement reproducteur</strong>).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Arbre phylogénétique',
          contenu: 'Un <strong>arbre phylogénétique</strong> représente les relations de parenté évolutive entre organismes (ou gènes).<br>— Les <strong>nœuds</strong> représentent les ancêtres communs hypothétiques.<br>— Les <strong>branches</strong> représentent les lignées évolutives.<br>— Les <strong>feuilles</strong> (extrémités) représentent les taxons actuels ou fossiles.<br>La longueur des branches peut être proportionnelle au temps ou aux divergences moléculaires.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Caractères partagés et groupes monophylétiques',
          contenu: 'Les arbres phylogénétiques sont construits en identifiant des <strong>caractères dérivés partagés</strong> (synapomorphies) entre groupes.<br>Un <strong>groupe monophylétique</strong> (clade) inclut un ancêtre commun et <strong>tous</strong> ses descendants.<br>Exemples de clades :<br>— Vertébrés (crane + vertèbres)<br>— Tétrapodes (4 membres)<br>— Amniotes (œuf amniotique)<br>— Mammifères (poils + allaitement)'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : lire un arbre phylogénétique',
          contenu: 'Arbre simplifié : ((Humain, Chimpanzé), Gorille), Orang-outan)<br><br>Interprétation :<br>— Humain et Chimpanzé partagent un ancêtre commun plus récent que celui qu\'ils partagent avec le Gorille.<br>— L\'Orang-outan s\'est séparé en premier.<br>— Tous partagent un ancêtre commun (nœud de base).<br>Conclusion : l\'Humain est plus proche parent du Chimpanzé que du Gorille.'
        }
      ]
    },
    {
      titre: 'Parenté et unité du vivant',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Caractéristiques universelles du vivant',
          contenu: 'Tous les êtres vivants partagent :<br>— Le même code génétique (quasi universel) : même triplet → même acide aminé<br>— L\'ADN comme support de l\'information génétique<br>— La cellule comme unité structurale et fonctionnelle<br>— L\'ATP comme monnaie énergétique universelle<br>— Des ribosomes pour la synthèse des protéines<br>Ces universaux témoignent d\'un <strong>ancêtre commun universel</strong> (LUCA, ~3,8 milliards d\'années).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Biodiversité et menaces',
          contenu: 'La <strong>biodiversité</strong> englobe la diversité des gènes, des espèces et des écosystèmes.<br>L\'évolution continue : de nouvelles espèces apparaissent tandis que d\'autres s\'éteignent.<br><strong>Extinction massive actuelle</strong> (6ème crise) : taux d\'extinction 100 à 1000 fois supérieur au taux naturel, causé par :<br>— Destruction et fragmentation des habitats<br>— Surexploitation, espèces invasives, pollution, changement climatique'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Évolution et santé : antibiorésistance',
          contenu: 'La résistance aux antibiotiques est un exemple d\'évolution en temps réel :<br>1. Des bactéries portent aléatoirement des mutations conférant une résistance.<br>2. L\'antibiothérapie élimine les bactéries sensibles (<strong>pression de sélection</strong>).<br>3. Les bactéries résistantes se reproduisent et dominent la population.<br>Conséquence : usage raisonné des antibiotiques obligatoire. Ne pas arrêter un traitement prématurément (laisse survivre les bactéries les plus résistantes).'
        },
        {
          type: 'ex', label: 'EX', titre: 'Exercice : sélection naturelle',
          contenu: 'Dans une population de lapins, un allèle R confère une fourrure plus épaisse. En région froide, les lapins R survivent mieux l\'hiver. Décrire l\'évolution de la population sur 50 générations.<br><br>— Chaque génération, les porteurs de R ont plus de descendants survivants.<br>— La fréquence de R augmente progressivement dans la population (sélection directionnelle).<br>— Après de nombreuses générations, R pourrait devenir l\'allèle majoritaire voire seul présent (fixation).<br>— Si une population est isolée, cela peut conduire à une nouvelle espèce adaptée au froid.'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'svt-3e-corps-humain',
  filiere: '3eme',
  matiere: 'svt',
  titre: 'Corps humain et santé',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'Appareil reproducteur et puberté',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Appareils reproducteurs mâle et femelle',
          contenu: '<strong>Appareil mâle</strong> : testicules (production des spermatozoïdes et testostérone), épididyme (maturation), canal déférent, vésicules séminales, prostate (liquides séminaux), urètre, pénis.<br><strong>Appareil femelle</strong> : ovaires (production des ovocytes et hormones : œstrogènes, progestérone), trompes de Fallope (transport ovocyte/embryon), utérus (nidation, gestation), col utérin, vagin.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Puberté',
          contenu: 'La <strong>puberté</strong> est la période de transition vers la maturité sexuelle, déclenchée par la sécrétion accrue d\'hormones sexuelles (testostérone chez le garçon, œstrogènes chez la fille).<br>Garçon : 10-15 ans. Modifications : pilosité, mue de la voix, développement génital, érections, production de spermatozoïdes.<br>Fille : 8-13 ans. Modifications : développement mammaire, pilosité pubienne, règles (ménarche), maturation ovarienne cyclique.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Cycle menstruel',
          contenu: 'Le <strong>cycle menstruel</strong> (durée moyenne 28 jours) prépare chaque mois l\'utérus à une éventuelle grossesse :<br>— Jours 1-5 : menstruations (desquamation de l\'endomètre)<br>— Jours 1-14 : phase folliculaire (maturation d\'un follicule ovarien, sécrétion d\'œstrogènes)<br>— Jour ~14 : ovulation (libération d\'un ovocyte secondaire)<br>— Jours 14-28 : phase lutéale (corps jaune sécrète progestérone, épaississement endomètre)'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Régulation hormonale de la reproduction',
          contenu: 'La reproduction est contrôlée par un axe hypothalamo-hypophyso-gonadique :<br>— L\'<strong>hypothalamus</strong> sécrète la GnRH<br>— L\'<strong>hypophyse</strong> sécrète FSH (stimulation folliculaire) et LH (déclenchement ovulation)<br>— Les <strong>gonades</strong> sécrètent les hormones sexuelles (œstrogènes, progestérone, testostérone)<br>Rétrocontrôle (feed-back) : les hormones sexuelles régulent en retour l\'hypophyse et l\'hypothalamus.'
        }
      ]
    },
    {
      titre: 'Fécondation et développement',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Fécondation',
          contenu: 'La <strong>fécondation</strong> est la fusion d\'un spermatozoïde (n = 23 chromosomes) et d\'un ovocyte II (n = 23 chromosomes) pour former un <strong>zygote</strong> diploïde (2n = 46 chromosomes).<br>Elle a lieu dans les trompes de Fallope dans les 12-24 h suivant l\'ovulation.<br>Un seul spermatozoïde pénètre l\'ovocyte (réaction de la zone pellucide bloque les suivants).<br>Le zygote commence immédiatement à se diviser (segmentation).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Développement embryonnaire',
          contenu: 'Après la fécondation :<br>— J1-J4 : segmentation (zygote → morula, 16 cellules)<br>— J5-J6 : blastocyste (cavité interne)<br>— J7-J10 : nidation (implantation dans la muqueuse utérine)<br>— Semaines 3-8 : embryogenèse (mise en place de tous les organes)<br>— À partir de la 9ème semaine : stade <strong>fœtal</strong> (développement et croissance des organes formés)<br>— Durée totale : ~40 semaines de grossesse (= 9 mois)'
        },
        {
          type: 'def', label: 'DEF', titre: 'Placenta et échanges',
          contenu: 'Le <strong>placenta</strong> est l\'organe d\'échanges entre la mère et l\'embryon/fœtus. Il assure :<br>— Apport de nutriments (glucose, acides aminés, lipides) et de O$_2$ à l\'embryon<br>— Élimination des déchets (CO$_2$, urée)<br>— Sécrétion hormonale (HCG, œstrogènes, progestérone) pour maintenir la grossesse<br>La circulation fœtale et maternelle ne se mélangent <strong>pas</strong> : les échanges se font par diffusion à travers la membrane placentaire.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Contraception — mécanismes',
          contenu: 'La <strong>contraception</strong> vise à empêcher la grossesse. Mécanismes :<br>— <strong>Hormonale</strong> (pilule, patch, implant) : inhibition de l\'ovulation par les hormones de synthèse + épaississement glaire cervicale<br>— <strong>Barrière</strong> (préservatif) : blocage physique des spermatozoïdes ; seule méthode protégeant aussi des IST<br>— <strong>DIU (stérilet)</strong> : empêche la nidation (cuivre → toxique pour spermatozoïdes ; hormonal → épaissit glaire)<br>— <strong>Contraception d\'urgence</strong> (pilule du lendemain) : forte dose de progestatif, retarde ou bloque l\'ovulation'
        }
      ]
    },
    {
      titre: 'IST et comportements à risque',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'VIH et SIDA',
          contenu: 'Le <strong>VIH</strong> (Virus de l\'Immunodéficience Humaine) est un <strong>rétrovirus</strong> qui détruit progressivement les lymphocytes T4 (CD4), affaiblissant le système immunitaire.<br>Le <strong>SIDA</strong> (Syndrome d\'ImmunoDeficience Acquise) est le stade avancé de l\'infection : le système immunitaire est trop affaibli pour combattre des infections opportunistes.<br>Transmission : sang, sécrétions sexuelles, lait maternel. Traitement : antirétroviraux (ARV) = charge virale indétectable.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Prévention des IST',
          contenu: 'Les <strong>infections sexuellement transmissibles</strong> (IST) comprennent :<br>— Bactériennes : chlamydiose, gonorrhée, syphilis (traitables par antibiotiques)<br>— Virales : VIH, HPV (papillomavirus), herpès, hépatite B (non guérissables, mais traitables)<br>Prévention :<br>— <strong>Préservatif</strong> : seul moyen de protection contre les IST (efficacité ~97 % si bien utilisé)<br>— Dépistage régulier<br>— Vaccination : HPV, hépatite B'
        },
        {
          type: 'def', label: 'DEF', titre: 'Système nerveux — structure générale',
          contenu: 'Le <strong>système nerveux</strong> comprend :<br>— <strong>Système nerveux central (SNC)</strong> : cerveau (traitement de l\'info), cervelet (coordination), tronc cérébral (fonctions vitales), moelle épinière<br>— <strong>Système nerveux périphérique (SNP)</strong> : nerfs sensitifs (capteurs → SNC) et moteurs (SNC → effecteurs)<br>Le message nerveux est un <strong>influx nerveux</strong> (signal électrique) se propageant le long des neurones à la vitesse de 1-120 m/s.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Neurone, synapse et arc réflexe',
          contenu: 'Un <strong>neurone</strong> est constitué d\'un corps cellulaire, de dendrites (entrée du signal) et d\'un axone (sortie, parfois gainé de myéline).<br>La <strong>synapse</strong> est la jonction entre deux neurones : l\'influx est transmis chimiquement par des <strong>neurotransmetteurs</strong> (dopamine, sérotonine, acétylcholine…).<br><strong>Arc réflexe</strong> : récepteur → neurone sensitif → moelle épinière → neurone moteur → effecteur (muscle). Réponse rapide involontaire.'
        }
      ]
    },
    {
      titre: 'Alimentation et santé',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Besoins nutritionnels',
          contenu: 'L\'organisme a besoin de :<br>— <strong>Macronutriments</strong> : glucides (énergie rapide), lipides (énergie de réserve, membranes), protéines (construction, enzymes, anticorps)<br>— <strong>Micronutriments</strong> : vitamines (cofacteurs enzymatiques), minéraux (Ca$^{2+}$ pour os, Fe pour hémoglobine, Na$^+$/K$^+$ pour neurones)<br>— <strong>Eau</strong> : ~1,5-2 L/j<br>Apports journaliers recommandés (AJR) varient selon l\'âge, le sexe, l\'activité physique.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Comportements à risque et conséquences',
          contenu: 'Comportements pouvant nuire à la santé :<br>— <strong>Tabac</strong> : nicotine addictive, CO réduit transport O$_2$, cancérogènes → cancers pulmonaire, cardiovasculaire<br>— <strong>Alcool</strong> : neurotoxique, hépatotoxique, dépresseur du SNC, tératogène<br>— <strong>Drogues illicites</strong> : perturbation des neurotransmetteurs, dépendance physique et psychologique<br>— <strong>Sédentarité + alimentation déséquilibrée</strong> → obésité, diabète de type 2, maladies cardiovasculaires'
        },
        {
          type: 'def', label: 'DEF', titre: 'Digestion et absorption',
          contenu: 'La <strong>digestion</strong> dégrade les macronutriments en molécules absorbables :<br>— Glucides → glucose (intestin grêle)<br>— Protéines → acides aminés (estomac + intestin)<br>— Lipides → acides gras + glycérol (intestin)<br>L\'<strong>absorption</strong> se fait au niveau des villosités intestinales vers le sang (glucose, AA) ou la lymphe (lipides).<br>Les nutriments sont ensuite distribués à toutes les cellules par la circulation sanguine.'
        },
        {
          type: 'meth', label: 'METH', titre: 'Interpréter un bilan de santé nutritionnel',
          contenu: '<strong>Indicateurs à connaître :</strong><br>— <strong>IMC</strong> (Indice de Masse Corporelle) = $\dfrac{masse(kg)}{taille^2(m)}$<br>— Valeurs : < 18,5 (insuffisance pondérale), 18,5-25 (normal), 25-30 (surpoids), > 30 (obésité)<br>— <strong>Glycémie</strong> à jeun normale : 0,7-1,1 g/L (diabète si > 1,26 g/L à deux reprises)<br>— <strong>Tour de taille</strong> : indicateur du risque cardiovasculaire (obésité abdominale > 88 cm F, > 102 cm H)'
        }
      ]
    }
  ]
},

// ────────────────────────────────────────────────────────────────────────────

{
  id: 'svt-3e-immunite',
  filiere: '3eme',
  matiere: 'svt',
  titre: 'Immunité et santé',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Barrières naturelles et immunité innée',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Barrières physiques et chimiques',
          contenu: 'La première ligne de défense comprend :<br>— <strong>Peau</strong> : kératine imperméable, pH acide (4,5-5,5), flore commensale<br>— <strong>Muqueuses</strong> : mucus (piège les agents pathogènes), cils vibratiles (expulsion), IgA sécrétoires<br>— <strong>Larmes, salive, sueur</strong> : contiennent du lysozyme (enzyme bactéricide)<br>— <strong>Suc gastrique</strong> (pH ~2) : détruit la plupart des pathogènes ingérés<br>Ces barrières sont <strong>non spécifiques</strong> : elles agissent contre tous les agents étrangers.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Réponse inflammatoire (immunité innée)',
          contenu: 'Quand un pathogène franchit les barrières, l\'<strong>inflammation</strong> se déclenche :<br>Signes : rougeur (vasodilatation), chaleur, gonflement (oedème), douleur.<br>Mécanismes :<br>— Libération d\'<strong>histamine</strong> et de cytokines par les cellules lésées<br>— Afflux de globules blancs au site d\'infection<br>— <strong>Phagocytose</strong> par les macrophages et polynucléaires neutrophiles<br>— Cellules NK (Natural Killer) : détruisent les cellules infectées et tumorales.'
        },
        {
          type: 'def', label: 'DEF', titre: 'Phagocytose',
          contenu: 'La <strong>phagocytose</strong> est l\'ingestion et la destruction de microorganismes par des cellules spécialisées (phagocytes) :<br>1. <strong>Chimiotactisme</strong> : le phagocyte est attiré vers l\'agent pathogène<br>2. <strong>Adhésion</strong> : reconnaissance via des récepteurs (PAMP)<br>3. <strong>Ingestion</strong> : formation d\'un phagosome<br>4. <strong>Digestion</strong> : fusion lysosomale → enzymes et radicaux libres détruisent le pathogène<br>5. <strong>Présentation</strong> : fragments antigéniques exprimés à la surface (CPA)'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Caractéristiques de l\'immunité innée',
          contenu: 'L\'immunité innée est :<br>— <strong>Non spécifique</strong> : reconnaît des motifs moléculaires communs aux pathogènes (PAMPs : peptidoglycane bactérien, ARN double brin viral, LPS…)<br>— <strong>Rapide</strong> : réaction en quelques minutes à heures<br>— <strong>Sans mémoire</strong> : ne s\'améliore pas lors de contacts répétés avec le même pathogène<br>— <strong>Présente chez tous les animaux</strong> (même invertébrés)<br>Elle prépare et active la réponse immunitaire adaptative.'
        }
      ]
    },
    {
      titre: 'Immunité adaptative',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Antigène et anticorps',
          contenu: 'Un <strong>antigène</strong> est toute molécule étrangère reconnue par le système immunitaire (protéine virale, bactérienne, toxine…). Il possède un ou plusieurs <strong>épitopes</strong> (sites reconnus).<br>Un <strong>anticorps</strong> (immunoglobuline, Ig) est une protéine en Y sécrétée par les plasmocytes (lymphocytes B activés). Chaque anticorps est spécifique d\'un épitope :<br>$$\text{anticorps} + \text{antigène} \to \text{complexe immun}$$'
        },
        {
          type: 'def', label: 'DEF', titre: 'Lymphocytes B — réponse humorale',
          contenu: 'Les <strong>lymphocytes B</strong> (maturés dans la moelle osseuse) assurent la <strong>réponse humorale</strong> :<br>1. Reconnaissance de l\'antigène par le récepteur BCR spécifique<br>2. Activation (avec aide des LT auxiliaires) → prolifération clonale<br>3. Différenciation en <strong>plasmocytes</strong> (sécrètent massivement des anticorps) et en <strong>lymphocytes B mémoire</strong><br>Les anticorps neutralisent les pathogènes, activent le complément et facilitent la phagocytose (opsonisation).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Lymphocytes T — réponse cellulaire',
          contenu: 'Les <strong>lymphocytes T</strong> (maturés dans le Thymus) comprennent :<br>— <strong>LT auxiliaires (CD4)</strong> : reconnaissent les antigènes présentés sur CMH II, sécrètent des cytokines pour activer LB et LTc<br>— <strong>LT cytotoxiques (CD8)</strong> : reconnaissent les antigènes sur CMH I, détruisent les cellules infectées par contact direct (perforine + granzyme)<br>C\'est ces LT4 qui sont détruits par le VIH, conduisant au SIDA.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Mémoire immunitaire',
          contenu: 'Lors d\'un premier contact avec un antigène (<strong>primo-infection</strong>) :<br>— Réponse lente (5-10 j) et modérée (phase de latence)<br>— Formation de <strong>cellules mémoire</strong> (lymphocytes B et T mémoire) à longue durée de vie<br>Lors d\'un second contact (<strong>réponse secondaire</strong>) :<br>— Réponse très rapide (~2-3 j) et de grande ampleur<br>— Les pathogènes sont éliminés avant d\'induire les symptômes<br>C\'est le fondement de la <strong>vaccination</strong>.'
        }
      ]
    },
    {
      titre: 'Vaccination et immunopathologies',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Vaccination — principe',
          contenu: 'La <strong>vaccination</strong> consiste à introduire dans l\'organisme un antigène inoffensif (ou atténué) pour déclencher une réponse immunitaire primaire et créer une <strong>mémoire immunitaire</strong> sans subir la maladie.<br>Types de vaccins :<br>— Vivants atténués (BCG, ROR) : forte immunité durable<br>— Anatoxines (tétanos, diphtérie) : toxine inactivée<br>— Sous-unitaires (hépatite B) : protéines antigéniques purifiées<br>— ARNm (COVID-19) : ARN codant pour la protéine spike'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Immunité collective (immunité de troupeau)',
          contenu: 'Quand une fraction suffisante de la population est immunisée (par vaccination ou infection naturelle), les individus non immunisés sont protégés indirectement car le pathogène ne peut plus circuler.<br>Le seuil d\'immunité collective varie selon le $R_0$ (taux de reproduction de base) :<br>$$\text{Seuil} = 1 - \frac{1}{R_0}$$<br>Exemples : rougeole ($R_0 \approx 15$, seuil ~93 %), polio ($R_0 \approx 5$, seuil ~80 %).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Allergies',
          contenu: 'Une <strong>allergie</strong> est une réponse immunitaire exagérée dirigée contre des substances inoffensives (<strong>allergènes</strong> : pollen, acariens, aliments, médicaments).<br>Mécanisme de type I (hypersensibilité immédiate) :<br>1. Sensibilisation : production d\'IgE spécifiques fixées sur les mastocytes<br>2. Second contact : dégranulation massive des mastocytes → histamine → signes allergiques<br>Manifestations : rhinite, urticaire, asthme, choc anaphylactique (cas grave).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Greffes et rejet',
          contenu: 'Lors d\'une <strong>greffe</strong>, le système immunitaire du receveur peut reconnaître le greffon comme étranger (<strong>rejet</strong>) via les molécules du <strong>CMH</strong> (Complexe Majeur d\'Histocompatibilité, ou HLA chez l\'Homme).<br>Types de rejet :<br>— Hyperaigu (minutes) : anticorps préformés<br>— Aigu (jours-semaines) : LT cytotoxiques<br>— Chronique (mois-années) : inflammation progressive<br>Prévention : typage HLA (compatibilité), immunosuppresseurs (cyclosporine, corticoïdes).'
        }
      ]
    },
    {
      titre: 'Maladies auto-immunes et séropositivité',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Maladies auto-immunes',
          contenu: 'Dans les <strong>maladies auto-immunes</strong>, le système immunitaire attaque les cellules de l\'organisme lui-même (perte de tolérance au soi).<br>Exemples :<br>— <strong>Diabète de type 1</strong> : LT détruisent les cellules β du pancréas (plus de production d\'insuline)<br>— <strong>Sclérose en plaques</strong> : attaque de la myéline des neurones<br>— <strong>Polyarthrite rhumatoïde</strong> : inflammation des articulations<br>— <strong>Lupus</strong> : anticorps anti-ADN propre<br>Traitement : immunosuppresseurs (effets secondaires : infections opportunistes).'
        },
        {
          type: 'def', label: 'DEF', titre: 'Séropositivité VIH — évolution',
          contenu: '<strong>Séropositif</strong> signifie que des anticorps anti-VIH sont détectables dans le sang (signe d\'infection, apparaissent 3-12 semaines après contamination = fenêtre sérologique).<br>Évolution sans traitement :<br>— Phase aiguë (~3 semaines) : symptômes grippaux, charge virale élevée<br>— Phase chronique (~10 ans) : asymptomatique mais LT4 diminuent progressivement<br>— Phase SIDA : LT4 < 200/μL → infections opportunistes (pneumocystose, toxoplasmose)<br>Avec les ARV : charge virale indétectable, vie quasi normale, non transmissible.'
        },
        {
          type: 'prop', label: 'PROP', titre: 'Dépistage et prévention VIH',
          contenu: 'Dépistage du VIH :<br>— <strong>Test ELISA</strong> : détection des anticorps anti-VIH (résultat en quelques heures)<br>— <strong>Western Blot</strong> : confirmation (détection de protéines virales spécifiques)<br>— <strong>Autotest</strong> : disponible en pharmacie sans prescription<br>Prévention :<br>— Préservatif (efficacité ~97 %)<br>— <strong>PrEP</strong> (prophylaxie pré-exposition) : antirétroviraux en prévention chez les personnes à risque<br>— <strong>TPE</strong> (traitement post-exposition) : dans les 48h après exposition'
        },
        {
          type: 'meth', label: 'METH', titre: 'Comparer immunité innée et adaptative',
          contenu: '<table style="width:100%; border-collapse:collapse;">\n<tr><th>Critère</th><th>Innée</th><th>Adaptative</th></tr>\n<tr><td>Spécificité</td><td>Faible (PAMPs)</td><td>Très haute (épitope)</td></tr>\n<tr><td>Rapidité</td><td>Minutes-heures</td><td>Jours</td></tr>\n<tr><td>Mémoire</td><td>Non</td><td>Oui</td></tr>\n<tr><td>Acteurs</td><td>Macrophages, NK, complément</td><td>LB, LT, anticorps</td></tr>\n<tr><td>Évolution</td><td>Tous animaux</td><td>Vertébrés uniquement</td></tr>\n</table>'
        }
      ]
    }
  ]
}

];
