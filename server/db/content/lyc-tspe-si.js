// Terminale générale — Spécialité Sciences de l'Ingénieur (SI)
// Programme officiel MEN 2020 (réforme du lycée, classe terminale)
// IDs enrichis (enrich:true) : si-tsi-model, si-tsi-cin, si-tsi-asserv
// Autres chapitres nouveaux (enrich:false)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// CHAPITRE 1 — MODÉLISATION & ANALYSE DES SYSTÈMES (enrichi)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-model',
  matiere: 'si',
  titre: 'Modélisation et analyse des systèmes',
  ordre: 1,
  filiere: 'term-spe-si',
  enrich: true,
  sections: [
    {
      titre: 'Démarche de l\'ingénieur et approche systémique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Système pluritechnique',
          contenu: `Un <strong>système pluritechnique</strong> est un ensemble organisé de composants (mécaniques, électriques, informatiques, hydrauliques...) qui interagissent pour <strong>répondre à un besoin</strong> en réalisant une ou plusieurs fonctions.<br>L'analyse suit l'enchaînement : <strong>Besoin → Fonctions → Solutions techniques</strong>.<br>On distingue les <strong>performances attendues</strong> (cahier des charges) des <strong>performances mesurées</strong> (système réel) et des <strong>performances simulées</strong> (modèle).` },
        { type: 'def', label: 'DEF', titre: 'Démarche de l\'ingénieur',
          contenu: `La <strong>démarche de l'ingénieur</strong> consiste à <strong>résoudre un problème technique</strong> en passant par trois représentations d'un même système :<br><ul><li>le <strong>système réel</strong> (le produit existant) ;</li><li>le <strong>système souhaité</strong> (cahier des charges, exigences) ;</li><li>le <strong>système simulé</strong> (modèles de comportement).</li></ul>Objectif : <strong>vérifier</strong> que les performances simulées et mesurées satisfont les exigences, et <strong>quantifier les écarts</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Les trois écarts',
          contenu: `La validation d'un système repose sur l'analyse de <strong>trois écarts</strong> :<br><ul><li><strong>Écart 1</strong> (souhaité ↔ mesuré) : le produit réel respecte-t-il le cahier des charges ?</li><li><strong>Écart 2</strong> (souhaité ↔ simulé) : le modèle prédit-il les performances attendues ?</li><li><strong>Écart 3</strong> (simulé ↔ mesuré) : le modèle est-il fidèle au réel (validité du modèle) ?</li></ul>Réduire l'écart 3 valide le modèle ; analyser l'écart 1 valide le produit.` },
        { type: 'ex', label: 'EX', titre: 'Interpréter un écart de performance',
          contenu: `<strong>Énoncé</strong> : le cahier des charges d'un drone impose une autonomie $\\geq 25$ min. La mesure donne 22 min, la simulation 27 min. Conclure.<br><strong>Résolution</strong> : <strong>écart 1</strong> (souhaité↔mesuré) $= 25 - 22 = 3$ min : le produit <strong>ne respecte pas</strong> le cahier des charges.<br><strong>Écart 3</strong> (simulé↔mesuré) $= 27 - 22 = 5$ min : le modèle <strong>surestime</strong> l'autonomie (pertes négligées). Il faut affiner le modèle (rendement réel, masse embarquée) puis revoir la solution technique.` },
      ]
    },
    {
      titre: 'Chaîne d\'énergie et chaîne d\'information',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Chaîne d\'énergie',
          contenu: `La <strong>chaîne d'énergie</strong> assure la mise en mouvement ou l'action sur la matière. Elle enchaîne quatre fonctions :<br><strong>ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE</strong>, le tout pour <strong>AGIR</strong> sur la matière d'œuvre.<br>Exemples de composants : alimenter (batterie, secteur), distribuer (hacheur, variateur, distributeur), convertir (moteur, vérin), transmettre (réducteur, courroie, vis).` },
        { type: 'def', label: 'DEF', titre: 'Chaîne d\'information',
          contenu: `La <strong>chaîne d'information</strong> acquiert, traite et transmet les informations qui <strong>pilotent</strong> la chaîne d'énergie. Elle enchaîne :<br><strong>ACQUÉRIR → TRAITER → COMMUNIQUER</strong>.<br>Composants : acquérir (capteurs), traiter (microcontrôleur, calculateur), communiquer (bus, IHM, réseau).<br>L'information circule de la chaîne d'énergie (grandeurs mesurées) vers la chaîne d'information, qui renvoie les <strong>ordres</strong> (consignes) aux préactionneurs.` },
        { type: 'prop', label: 'PROP', titre: 'Couplage des deux chaînes',
          contenu: `La chaîne d'information <strong>commande</strong> la chaîne d'énergie : la fonction <em>traiter</em> élabore des ordres envoyés à la fonction <em>distribuer</em> (préactionneurs).<br>Réciproquement, les <strong>capteurs</strong> mesurent l'état de la chaîne d'énergie (position, vitesse, courant) et renvoient l'information vers <em>acquérir</em>.<br>Ce couplage permet la <strong>commande en boucle fermée</strong> (asservissement).` },
        { type: 'ex', label: 'EX', titre: 'Décomposer un portail automatique',
          contenu: `<strong>Énoncé</strong> : identifier les chaînes d'un portail motorisé à badge.<br><strong>Résolution — chaîne d'énergie</strong> : ALIMENTER (secteur 230 V) → DISTRIBUER (relais/variateur) → CONVERTIR (motoréducteur) → TRANSMETTRE (pignon-crémaillère) → AGIR (déplacer le vantail).<br><strong>Chaîne d'information</strong> : ACQUÉRIR (lecteur de badge, capteurs fin de course) → TRAITER (carte à microcontrôleur) → COMMUNIQUER (signal vers le relais). Les fins de course renvoient la position au traitement.` },
      ]
    },
    {
      titre: 'Modélisation SysML — exigences et structure',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Diagramme d\'exigences (req)',
          contenu: `Le <strong>diagramme d'exigences</strong> (<em>requirement diagram</em>, <strong>req</strong>) recense les <strong>exigences</strong> du cahier des charges sous forme de blocs liés.<br>Chaque exigence possède un <strong>identifiant</strong>, un <strong>texte</strong> et des <strong>critères</strong> mesurables.<br>Relations principales : <strong>contient</strong> (décomposition), <strong>derive</strong> (exigence dérivée), <strong>satisfy</strong> (un élément la satisfait), <strong>verify</strong> (un test la vérifie).` },
        { type: 'def', label: 'DEF', titre: 'Diagramme de définition de blocs (bdd)',
          contenu: `Le <strong>bdd</strong> (<em>block definition diagram</em>) décrit la <strong>structure</strong> du système : les <strong>blocs</strong> (composants) et leurs relations de <strong>composition</strong> et d'<strong>association</strong>.<br>La <strong>composition</strong> (losange plein) exprime « est constitué de ». Les <strong>multiplicités</strong> indiquent le nombre d'instances ($1$, $0..1$, $1..*$).<br>Il donne la vue d'<strong>arborescence matérielle</strong> du produit.` },
        { type: 'def', label: 'DEF', titre: 'Diagramme de blocs internes (ibd)',
          contenu: `Le <strong>ibd</strong> (<em>internal block diagram</em>) montre les <strong>flux</strong> (énergie, matière, information) échangés <strong>entre les blocs</strong> via des <strong>ports</strong>.<br>Il complète le bdd : là où le bdd liste les composants, le ibd décrit <strong>comment ils communiquent</strong>.<br>Outil clé pour tracer les chaînes d'énergie et d'information à l'intérieur du système.` },
        { type: 'prop', label: 'PROP', titre: 'Diagrammes comportementaux',
          contenu: `SysML propose aussi des diagrammes de <strong>comportement</strong> :<br><ul><li><strong>uc</strong> (cas d'utilisation) : interactions acteur ↔ système ;</li><li><strong>stm</strong> (états-transitions) : états successifs d'un composant et événements de transition ;</li><li><strong>sd</strong> (séquence) : chronologie des messages échangés ;</li><li><strong>act</strong> (activité) : enchaînement d'actions et de flux.</li></ul>Ils modélisent <strong>ce que fait</strong> le système, là où bdd/ibd modélisent ce qu'il <strong>est</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Lire un diagramme états-transitions',
          contenu: `<strong>Énoncé</strong> : un store automatique a les états <em>Replié</em>, <em>En extension</em>, <em>Déployé</em>, <em>En repli</em>. Décrire les transitions sur appui « ouvrir ».<br><strong>Résolution</strong> : depuis <em>Replié</em>, l'événement <strong>« ouvrir »</strong> déclenche la transition vers <em>En extension</em> (action : moteur sens 1). L'événement <strong>« fin de course haute »</strong> fait passer à <em>Déployé</em> (action : arrêt moteur). Un diagramme stm associe à chaque transition un <strong>événement</strong> [garde] / <strong>action</strong>.` },
      ]
    },
    {
      titre: 'Analyse fonctionnelle et performances',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction de service et critères',
          contenu: `Une <strong>fonction de service</strong> traduit une attente de l'utilisateur ; elle se décline en <strong>critères</strong> caractérisés par un <strong>niveau</strong> et une <strong>flexibilité</strong> (tolérance).<br>Exemple : « se déplacer en autonomie » → critère <em>autonomie</em>, niveau $25$ min, flexibilité $\\pm 2$ min.<br>Le <strong>cahier des charges fonctionnel</strong> (CdCF) rassemble ces fonctions et critères.` },
        { type: 'def', label: 'DEF', titre: 'Matière d\'œuvre et valeur ajoutée',
          contenu: `La <strong>matière d'œuvre (MO)</strong> est ce sur quoi le système agit : matière, énergie ou information.<br>Le système apporte une <strong>valeur ajoutée (VA)</strong> : il transforme la matière d'œuvre entrante en matière d'œuvre sortante (MO + VA).<br>Exemple : un sèche-cheveux reçoit de l'air froid (MO entrante) et fournit de l'air chaud et pulsé (MO + VA).` },
        { type: 'prop', label: 'PROP', titre: 'Critères de performance courants',
          contenu: `Les performances d'un système se mesurent par des grandeurs physiques :<br><ul><li><strong>Énergie / puissance</strong> : rendement, autonomie, consommation ;</li><li><strong>Cinématique</strong> : vitesse, course, précision de position ;</li><li><strong>Dynamique / temporel</strong> : temps de réponse, accélération ;</li><li><strong>Asservissement</strong> : stabilité, précision, rapidité.</li></ul>Ces grandeurs sont <strong>quantifiées</strong> et comparées au CdCF.` },
        { type: 'ex', label: 'EX', titre: 'Valider une exigence chiffrée',
          contenu: `<strong>Énoncé</strong> : exigence « temps de fermeture $\\leq 6$ s pour une course de $3$ m ». Le vantail se déplace à $0,4$ m/s. L'exigence est-elle satisfaite ?<br><strong>Résolution</strong> : temps $= \\dfrac{\\text{course}}{\\text{vitesse}} = \\dfrac{3}{0,4} = 7,5$ s.<br>Or $7,5 > 6$ : l'exigence <strong>n'est pas satisfaite</strong>. Pour la respecter, il faudrait une vitesse $v \\geq \\dfrac{3}{6} = 0,5$ m/s (revoir le réducteur ou la vitesse moteur).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 2 — STATIQUE & ACTIONS MÉCANIQUES (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-statique',
  matiere: 'si',
  titre: 'Statique et actions mécaniques',
  ordre: 2,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Modélisation des actions mécaniques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Action mécanique et force',
          contenu: `Une <strong>action mécanique</strong> est toute cause capable de <strong>modifier le mouvement</strong> d'un solide ou de le <strong>déformer</strong>.<br>Une action ponctuelle se modélise par une <strong>force</strong>, vecteur $\\vec{F}$ caractérisé par : <strong>point d'application</strong>, <strong>direction</strong>, <strong>sens</strong> et <strong>norme</strong> (en newtons, N).<br>On distingue les actions <strong>à distance</strong> (poids, magnétisme) et de <strong>contact</strong> (liaisons, pression).` },
        { type: 'def', label: 'DEF', titre: 'Moment d\'une force',
          contenu: `Le <strong>moment</strong> d'une force $\\vec{F}$ appliquée en $A$, par rapport à un point $B$, mesure son <strong>aptitude à faire tourner</strong> le solide autour de $B$ :<br>$$\\vec{M}_B(\\vec{F}) = \\vec{BA} \\wedge \\vec{F}$$<br>Sa norme vaut $\\lVert \\vec{M}_B \\rVert = d \\times \\lVert \\vec{F} \\rVert$, où $d$ est le <strong>bras de levier</strong> (distance de $B$ à la droite d'action). Unité : le newton-mètre (N·m).` },
        { type: 'def', label: 'DEF', titre: 'Torseur d\'action mécanique',
          contenu: `Une action mécanique se modélise par un <strong>torseur</strong>, réduit en un point $A$ :<br>$$\\{\\mathcal{T}\\} = \\left\\{ \\begin{array}{c} \\vec{R} \\\\ \\vec{M}_A \\end{array} \\right\\}_A$$<br>$\\vec{R}$ est la <strong>résultante</strong> (somme des forces), $\\vec{M}_A$ le <strong>moment résultant</strong> en $A$.<br><strong>Changement de point</strong> : $\\vec{M}_B = \\vec{M}_A + \\vec{BA} \\wedge \\vec{R}$ (relation de transport / équiprojectivité).` },
        { type: 'ex', label: 'EX', titre: 'Calculer un moment par bras de levier',
          contenu: `<strong>Énoncé</strong> : on serre un écrou avec une clé de $0,25$ m, en appliquant une force $\\vec{F}$ de $80$ N <strong>perpendiculaire</strong> à la clé. Moment de serrage ?<br><strong>Résolution</strong> : la force étant perpendiculaire, le bras de levier vaut $d = 0,25$ m.<br>$\\lVert \\vec{M} \\rVert = d \\times F = 0,25 \\times 80 = 20$ N·m.<br>Si la force faisait un angle $\\alpha$ avec la clé : $\\lVert \\vec{M} \\rVert = d \\times F \\times \\sin\\alpha$.` },
      ]
    },
    {
      titre: 'Actions courantes : poids, ressort, pression',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Poids d\'un solide',
          contenu: `Le <strong>poids</strong> $\\vec{P}$ est l'action de la pesanteur, appliquée au <strong>centre de gravité</strong> $G$ :<br>$$\\vec{P} = m\\,\\vec{g}, \\qquad \\lVert \\vec{P} \\rVert = m\\,g$$<br>avec $m$ la masse (kg) et $g \\approx 9{,}81$ m·s$^{-2}$ l'intensité de la pesanteur.<br>Direction : <strong>verticale</strong>, sens vers le bas. Exemple : $m = 5$ kg $\\Rightarrow P \\approx 49$ N.` },
        { type: 'form', label: 'FORM', titre: 'Action d\'un ressort',
          contenu: `Un <strong>ressort</strong> de raideur $k$ (N·m$^{-1}$) exerce une force proportionnelle à son <strong>allongement</strong> $x = \\ell - \\ell_0$ (loi de Hooke) :<br>$$F = k\\,|x| = k\\,|\\ell - \\ell_0|$$<br>La force est dirigée de manière à <strong>ramener le ressort vers sa longueur libre</strong> $\\ell_0$ (force de rappel).<br>Exemple : $k = 200$ N/m, allongement $x = 3$ cm $= 0,03$ m $\\Rightarrow F = 6$ N.` },
        { type: 'form', label: 'FORM', titre: 'Action d\'une pression',
          contenu: `Une <strong>pression</strong> $p$ (Pa) uniforme sur une surface plane $S$ (m$^2$) crée une force <strong>perpendiculaire</strong> à la surface :<br>$$F = p \\times S$$<br>Pour un <strong>vérin</strong> de piston de diamètre $D$ : $S = \\dfrac{\\pi D^2}{4}$ donc $F = p\\,\\dfrac{\\pi D^2}{4}$.<br>Exemple : $p = 6$ bar $= 6\\times10^5$ Pa, $D = 40$ mm $\\Rightarrow F = 6\\times10^5 \\times \\dfrac{\\pi (0,04)^2}{4} \\approx 754$ N.` },
        { type: 'ex', label: 'EX', titre: 'Dimensionner un vérin',
          contenu: `<strong>Énoncé</strong> : on veut une poussée de $2000$ N avec un vérin alimenté à $p = 7$ bar. Diamètre minimal du piston ?<br><strong>Résolution</strong> : $F = p\\,\\dfrac{\\pi D^2}{4} \\Rightarrow D = \\sqrt{\\dfrac{4F}{\\pi p}}$.<br>$D = \\sqrt{\\dfrac{4 \\times 2000}{\\pi \\times 7\\times10^5}} = \\sqrt{3,64\\times10^{-3}} \\approx 0,060$ m $= 60$ mm.<br>On choisit le diamètre normalisé immédiatement <strong>supérieur</strong> (ex. $63$ mm) pour garantir la poussée.` },
      ]
    },
    {
      titre: 'Principe fondamental de la statique (PFS)',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Système en équilibre',
          contenu: `Un solide (ou ensemble de solides) est en <strong>équilibre</strong> dans un référentiel galiléen s'il reste <strong>immobile</strong> au cours du temps (vitesse et accélération nulles de tous ses points).<br>On <strong>isole</strong> le système d'étude et on recense <strong>toutes les actions extérieures</strong> qui s'y appliquent (bilan des actions mécaniques extérieures, BAME).` },
        { type: 'th', label: 'THM', titre: 'Principe fondamental de la statique',
          contenu: `Pour un solide en <strong>équilibre</strong>, la somme des actions mécaniques extérieures est <strong>nulle</strong> :<br>$$\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\qquad \\text{(théorème de la résultante)}$$<br>$$\\sum \\vec{M}_A(\\vec{F}_{\\text{ext}}) = \\vec{0} \\qquad \\text{(théorème du moment, en tout point } A)$$<br>En notation torsorielle : $\\{\\mathcal{T}_{\\text{ext} \\to S}\\} = \\{0\\}$. Dans le plan, cela donne <strong>3 équations scalaires</strong> ($\\sum F_x$, $\\sum F_y$, $\\sum M_z$).` },
        { type: 'meth', label: 'METH', titre: 'Résoudre un problème de statique plane',
          contenu: `<strong>Méthode (PFS plan) :</strong><br>1. <strong>Isoler</strong> le solide étudié.<br>2. Faire le <strong>bilan des actions extérieures</strong> (poids, liaisons, charges).<br>3. Choisir un repère et un <strong>point de réduction</strong> judicieux (souvent là où passent le plus d'inconnues, pour annuler leur moment).<br>4. Écrire les <strong>3 équations</strong> : $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_z = 0$.<br>5. <strong>Résoudre</strong> le système. Vérifier l'homogénéité et le signe.` },
        { type: 'prop', label: 'PROP', titre: 'Solide soumis à deux ou trois forces',
          contenu: `<strong>Solide soumis à 2 forces</strong> en équilibre : les forces sont <strong>égales, opposées et de même droite d'action</strong> (colinéaires, passant par les deux points d'application).<br><strong>Solide soumis à 3 forces</strong> non parallèles : leurs droites d'action sont <strong>concourantes</strong> en un même point, et la somme vectorielle est nulle (triangle des forces fermé).<br>Ces propriétés simplifient grandement la résolution graphique.` },
        { type: 'ex', label: 'EX', titre: 'Équilibre d\'une poutre sur deux appuis',
          contenu: `<strong>Énoncé</strong> : une poutre $AB$ de longueur $4$ m, de poids négligeable, repose sur deux appuis $A$ et $B$. Une charge $\\vec{F} = 600$ N s'applique à $1$ m de $A$. Réactions $R_A$ et $R_B$ ?<br><strong>Résolution</strong> : $\\sum M_A = 0 : R_B \\times 4 - 600 \\times 1 = 0 \\Rightarrow R_B = 150$ N.<br>$\\sum F_y = 0 : R_A + R_B - 600 = 0 \\Rightarrow R_A = 600 - 150 = 450$ N.<br>Vérification : la charge proche de $A$ → $A$ supporte davantage. Cohérent.` },
      ]
    },
    {
      titre: 'Liaisons et adhérence',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Torseur transmissible par une liaison',
          contenu: `Chaque <strong>liaison mécanique</strong> ne transmet que certaines composantes d'effort : à chaque <strong>degré de liberté supprimé</strong> correspond une <strong>inconnue de liaison</strong> transmissible (force ou moment).<br>Exemples (dans le plan) :<br><ul><li><strong>Pivot</strong> (axe $z$) : transmet $\\vec{R}$ (2 composantes), libère le moment selon $z$.</li><li><strong>Glissière</strong> (axe $x$) : transmet l'effort perpendiculaire et le moment, libère $F_x$.</li><li><strong>Appui ponctuel</strong> : transmet une seule force, normale au contact.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Adhérence et frottement (loi de Coulomb)',
          contenu: `Au contact de deux solides, la réaction $\\vec{R}$ se décompose en composante <strong>normale</strong> $\\vec{N}$ et <strong>tangentielle</strong> $\\vec{T}$.<br><strong>Sans glissement</strong> (adhérence) : $\\lVert \\vec{T} \\rVert \\leq f \\, \\lVert \\vec{N} \\rVert$, avec $f$ le coefficient d'adhérence.<br><strong>Au glissement</strong> : $\\lVert \\vec{T} \\rVert = f \\, \\lVert \\vec{N} \\rVert$, et $\\vec{T}$ s'oppose au mouvement.<br>L'angle $\\varphi$ tel que $\\tan\\varphi = f$ définit le <strong>cône de frottement</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Condition de non-glissement sur un plan incliné',
          contenu: `<strong>Énoncé</strong> : un objet de masse $m$ est posé sur un plan incliné d'angle $\\alpha$, coefficient d'adhérence $f = 0,4$. Glisse-t-il pour $\\alpha = 20°$ ?<br><strong>Résolution</strong> : à la limite du glissement, $\\tan\\alpha_{\\lim} = f$, soit $\\alpha_{\\lim} = \\arctan(0,4) \\approx 21,8°$.<br>Comme $20° < 21,8°$, l'objet <strong>reste immobile</strong> : l'adhérence suffit. Au-delà de $21,8°$, il glisserait.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 3 — CINÉMATIQUE DU SOLIDE (enrichi)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-cin',
  matiere: 'si',
  titre: 'Cinématique du solide',
  ordre: 3,
  filiere: 'term-spe-si',
  enrich: true,
  sections: [
    {
      titre: 'Repérage du mouvement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Position, vitesse, accélération',
          contenu: `Le mouvement d'un point $M$ se décrit dans un référentiel par :<br><ul><li>le <strong>vecteur position</strong> $\\vec{OM}(t)$ ;</li><li>le <strong>vecteur vitesse</strong> $\\vec{V}(M) = \\dfrac{\\mathrm{d}\\vec{OM}}{\\mathrm{d}t}$ (m·s$^{-1}$), tangent à la trajectoire ;</li><li>le <strong>vecteur accélération</strong> $\\vec{a}(M) = \\dfrac{\\mathrm{d}\\vec{V}}{\\mathrm{d}t}$ (m·s$^{-2}$).</li></ul>La dérivation se fait <strong>par rapport au référentiel choisi</strong>, précisé en indice.` },
        { type: 'def', label: 'DEF', titre: 'Mouvement de translation',
          contenu: `Un solide est en <strong>translation</strong> si tout vecteur lié au solide garde une <strong>direction fixe</strong>. Tous les points ont alors <strong>même vitesse et même accélération</strong> à chaque instant :<br>$$\\vec{V}(A) = \\vec{V}(B) \\quad \\text{et} \\quad \\vec{a}(A) = \\vec{a}(B)$$<br>La translation peut être <strong>rectiligne</strong> (trajectoires droites) ou <strong>circulaire</strong> (trajectoires des cercles identiques, ex. nacelle de grande roue).` },
        { type: 'def', label: 'DEF', titre: 'Mouvement de rotation autour d\'un axe fixe',
          contenu: `Un solide est en <strong>rotation autour d'un axe fixe</strong> $(\\Delta)$ si tous ses points décrivent des cercles centrés sur $(\\Delta)$.<br>On définit la <strong>vitesse angulaire</strong> $\\omega = \\dot{\\theta}$ (rad·s$^{-1}$) et l'accélération angulaire $\\dot{\\omega}$.<br>Un point $M$ à la distance $r$ de l'axe a une vitesse $V = r\\,\\omega$, <strong>orthogonale</strong> au rayon, et croissante avec $r$.` },
        { type: 'ex', label: 'EX', titre: 'Vitesse d\'un point sur un disque',
          contenu: `<strong>Énoncé</strong> : un disque tourne à $N = 1500$ tr/min. Vitesse d'un point situé à $r = 8$ cm de l'axe ?<br><strong>Résolution</strong> : $\\omega = \\dfrac{2\\pi N}{60} = \\dfrac{2\\pi \\times 1500}{60} = 157$ rad/s.<br>$V = r\\,\\omega = 0,08 \\times 157 \\approx 12,6$ m/s.<br>Astuce : $\\omega\\ (\\text{rad/s}) = N\\ (\\text{tr/min}) \\times \\dfrac{\\pi}{30}$.` },
      ]
    },
    {
      titre: 'Torseur cinématique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Torseur cinématique',
          contenu: `Le mouvement d'un solide $S$ par rapport à un référentiel $R_0$ se décrit par le <strong>torseur cinématique</strong>, réduit en un point $A$ :<br>$$\\{\\mathcal{V}_{S/R_0}\\} = \\left\\{ \\begin{array}{c} \\vec{\\Omega}_{S/R_0} \\\\ \\vec{V}(A \\in S/R_0) \\end{array} \\right\\}_A$$<br>$\\vec{\\Omega}_{S/R_0}$ est le <strong>vecteur rotation</strong> (résultante), $\\vec{V}(A)$ la <strong>vitesse du point $A$</strong> du solide (moment).` },
        { type: 'th', label: 'THM', titre: 'Champ des vitesses (relation de Varignon)',
          contenu: `Les vitesses de deux points $A$ et $B$ d'un <strong>même solide</strong> sont liées par :<br>$$\\vec{V}(B \\in S/R_0) = \\vec{V}(A \\in S/R_0) + \\vec{\\Omega}_{S/R_0} \\wedge \\vec{AB}$$<br>Le champ des vitesses d'un solide est <strong>équiprojectif</strong> : $\\vec{V}(A) \\cdot \\vec{AB} = \\vec{V}(B) \\cdot \\vec{AB}$.<br>Cette relation permet de <strong>transporter</strong> une vitesse d'un point à un autre.` },
        { type: 'prop', label: 'PROP', titre: 'Torseurs des liaisons usuelles',
          contenu: `Le torseur cinématique d'une liaison ne contient que les <strong>mouvements autorisés</strong> :<br><ul><li><strong>Pivot</strong> (axe $z$) : $\\vec{\\Omega} = \\omega\\,\\vec{z}$, $\\vec{V} = \\vec{0}$ sur l'axe → 1 ddl.</li><li><strong>Glissière</strong> (axe $x$) : $\\vec{\\Omega} = \\vec{0}$, $\\vec{V} = v\\,\\vec{x}$ → 1 ddl.</li><li><strong>Pivot glissant</strong> (axe $x$) : $\\vec{\\Omega} = \\omega\\,\\vec{x}$, $\\vec{V} = v\\,\\vec{x}$ → 2 ddl.</li><li><strong>Appui plan</strong> ($\\perp z$) : $\\vec{\\Omega} = \\omega\\,\\vec{z}$, $\\vec{V}$ dans le plan → 3 ddl.</li></ul>` },
        { type: 'ex', label: 'EX', titre: 'Transporter une vitesse',
          contenu: `<strong>Énoncé</strong> : un solide tourne à $\\vec{\\Omega} = 10\\,\\vec{z}$ rad/s. Le point $A$ a une vitesse nulle (centre). Vitesse de $B$ tel que $\\vec{AB} = 0,2\\,\\vec{x}$ (m) ?<br><strong>Résolution</strong> : $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\Omega} \\wedge \\vec{AB} = \\vec{0} + 10\\,\\vec{z} \\wedge 0,2\\,\\vec{x}$.<br>Or $\\vec{z} \\wedge \\vec{x} = \\vec{y}$, donc $\\vec{V}(B) = 10 \\times 0,2\\,\\vec{y} = 2\\,\\vec{y}$ m/s.<br>La vitesse est <strong>perpendiculaire</strong> à $\\vec{AB}$, de norme $r\\,\\omega = 0,2 \\times 10 = 2$ m/s.` },
      ]
    },
    {
      titre: 'Composition des mouvements',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Composition des vecteurs rotation',
          contenu: `Pour trois solides (chaîne $0$, $1$, $2$), les vecteurs rotation se <strong>composent par addition</strong> :<br>$$\\vec{\\Omega}_{2/0} = \\vec{\\Omega}_{2/1} + \\vec{\\Omega}_{1/0}$$<br>Plus généralement, dans une chaîne cinématique, $\\vec{\\Omega}_{n/0} = \\sum_k \\vec{\\Omega}_{k/k-1}$.<br>Cette relation (relation de Chasles des rotations) est <strong>fondamentale</strong> pour les mécanismes à plusieurs étages.` },
        { type: 'th', label: 'THM', titre: 'Composition des vitesses',
          contenu: `La vitesse d'un point $M$ du solide $2$ par rapport à $0$ se décompose :<br>$$\\vec{V}(M \\in 2/0) = \\vec{V}(M \\in 2/1) + \\vec{V}(M \\in 1/0)$$<br>$\\vec{V}(M/2/1)$ est la vitesse <strong>relative</strong>, $\\vec{V}(M/1/0)$ la vitesse <strong>d'entraînement</strong>.<br>En termes de torseurs : $\\{\\mathcal{V}_{2/0}\\} = \\{\\mathcal{V}_{2/1}\\} + \\{\\mathcal{V}_{1/0}\\}$ (somme au même point de réduction).` },
        { type: 'meth', label: 'METH', titre: 'Fermeture cinématique d\'une chaîne fermée',
          contenu: `<strong>Méthode (chaîne fermée) :</strong> pour un mécanisme bouclé (ex. bielle-manivelle), la somme des torseurs cinématiques le long de la boucle est <strong>nulle</strong> :<br>$$\\{\\mathcal{V}_{1/0}\\} + \\{\\mathcal{V}_{2/1}\\} + \\dots + \\{\\mathcal{V}_{0/n}\\} = \\{0\\}$$<br>On projette cette équation torsorielle sur les axes → relations <strong>entre les vitesses</strong> des différentes liaisons. Permet d'obtenir la <strong>loi entrée-sortie</strong> cinématique.` },
        { type: 'ex', label: 'EX', titre: 'Vitesse de sortie d\'un réducteur',
          contenu: `<strong>Énoncé</strong> : un réducteur à engrenages de rapport $r = 1/20$ reçoit en entrée $\\omega_e = 3000$ tr/min. Vitesse de sortie ?<br><strong>Résolution</strong> : le rapport de réduction relie les vitesses angulaires : $\\omega_s = r \\times \\omega_e = \\dfrac{1}{20} \\times 3000 = 150$ tr/min.<br>Le couple est <strong>multiplié</strong> par l'inverse (avant rendement) : $C_s \\approx 20 \\, C_e$. Un réducteur <strong>diminue</strong> la vitesse et <strong>augmente</strong> le couple.` },
      ]
    },
    {
      titre: 'Liaisons mécaniques normalisées',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Degrés de liberté et liaisons',
          contenu: `Dans l'espace, un solide libre possède <strong>6 degrés de liberté</strong> (3 translations + 3 rotations). Une <strong>liaison</strong> supprime certains de ces mouvements.<br><strong>Encastrement</strong> : 0 ddl (aucun mouvement).<br><strong>Pivot</strong> : 1 rotation autour d'un axe.<br><strong>Glissière</strong> : 1 translation selon un axe.<br><strong>Pivot glissant</strong> : 1 rotation + 1 translation coaxiales (2 ddl).<br><strong>Appui plan</strong> : 2 translations + 1 rotation (3 ddl).` },
        { type: 'prop', label: 'PROP', titre: 'Liaisons à plusieurs degrés de liberté',
          contenu: `<strong>Rotule</strong> (sphérique) : 3 rotations concourantes, 0 translation (3 ddl).<br><strong>Linéaire annulaire</strong> (sphère-cylindre) : 3 rotations + 1 translation (4 ddl).<br><strong>Linéaire rectiligne</strong> : 2 rotations + 2 translations (4 ddl).<br><strong>Ponctuelle</strong> (sphère-plan) : 3 rotations + 2 translations (5 ddl) ; ne transmet qu'une force normale.<br>Chaque liaison a une <strong>désignation normalisée</strong>, un schéma cinématique et un torseur associé.` },
        { type: 'def', label: 'DEF', titre: 'Schéma cinématique',
          contenu: `Le <strong>schéma cinématique</strong> représente un mécanisme par ses <strong>liaisons</strong> normalisées entre solides (classes d'équivalence), indépendamment de la technologie réelle.<br>Il sert à <strong>analyser les mouvements</strong> : identifier les solides en mouvement relatif, repérer les entrées/sorties, établir le graphe des liaisons.<br>Les solides liés par encastrement forment une <strong>même classe d'équivalence</strong> (même couleur).` },
        { type: 'ex', label: 'EX', titre: 'Identifier une liaison réelle',
          contenu: `<strong>Énoncé</strong> : un arbre tourne dans un palier à roulements à billes qui le guide en rotation mais le maintient axialement. Quelle liaison modélise ce guidage ?<br><strong>Résolution</strong> : l'arbre peut <strong>tourner</strong> autour de son axe mais ne peut ni translater axialement ni basculer → <strong>1 seul ddl en rotation</strong> : c'est une <strong>liaison pivot</strong>.<br>Si l'arbre pouvait aussi coulisser axialement (palier lisse long), ce serait une liaison <strong>pivot glissant</strong>.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 4 — DYNAMIQUE & ÉNERGÉTIQUE (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-dynamique',
  matiere: 'si',
  titre: 'Dynamique et énergétique',
  ordre: 4,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Principe fondamental de la dynamique (PFD)',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Référentiel galiléen et inertie',
          contenu: `Un <strong>référentiel galiléen</strong> est un référentiel dans lequel le principe d'inertie est vérifié (un solide isolé conserve un mouvement rectiligne uniforme).<br>La <strong>masse</strong> $m$ mesure l'inertie en translation ; le <strong>moment d'inertie</strong> $J$ (kg·m$^2$) mesure l'inertie en rotation autour d'un axe.<br>Pour un cylindre plein de masse $m$ et de rayon $R$ : $J = \\dfrac{1}{2} m R^2$.` },
        { type: 'th', label: 'THM', titre: 'PFD en translation',
          contenu: `Pour un solide en translation, de masse $m$ et de centre de gravité $G$, dans un référentiel galiléen :<br>$$\\sum \\vec{F}_{\\text{ext}} = m\\,\\vec{a}(G)$$<br>La somme des forces extérieures est égale au produit <strong>masse × accélération</strong> du centre de gravité.<br>La statique est le cas particulier $\\vec{a} = \\vec{0}$.` },
        { type: 'th', label: 'THM', titre: 'PFD en rotation (moment dynamique)',
          contenu: `Pour un solide en rotation autour d'un axe fixe $(\\Delta)$ de moment d'inertie $J$ :<br>$$\\sum M_\\Delta(\\vec{F}_{\\text{ext}}) = J \\, \\dot{\\omega} = J\\,\\ddot{\\theta}$$<br>La somme des moments par rapport à l'axe est égale au produit <strong>moment d'inertie × accélération angulaire</strong>.<br>C'est l'analogue rotatif de $F = ma$, avec $J \\leftrightarrow m$ et $\\dot{\\omega} \\leftrightarrow a$.` },
        { type: 'ex', label: 'EX', titre: 'Accélération d\'un véhicule',
          contenu: `<strong>Énoncé</strong> : un véhicule de masse $m = 1200$ kg subit une force motrice nette de $3600$ N (résistances déduites). Accélération ?<br><strong>Résolution</strong> : PFD en translation : $F = m\\,a \\Rightarrow a = \\dfrac{F}{m} = \\dfrac{3600}{1200} = 3$ m/s$^2$.<br>Temps pour atteindre $100$ km/h $= 27,8$ m/s depuis l'arrêt : $t = \\dfrac{v}{a} = \\dfrac{27,8}{3} \\approx 9,3$ s.` },
      ]
    },
    {
      titre: 'Énergie cinétique et théorème de l\'énergie',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Énergie cinétique',
          contenu: `<strong>Translation</strong> (masse $m$, vitesse $v$) : $$E_c = \\frac{1}{2} m v^2$$<br><strong>Rotation</strong> (moment d'inertie $J$, vitesse angulaire $\\omega$) : $$E_c = \\frac{1}{2} J \\omega^2$$<br>Pour un solide en <strong>mouvement quelconque</strong> : $E_c = \\dfrac{1}{2} m v_G^2 + \\dfrac{1}{2} J_G \\omega^2$ (translation de $G$ + rotation propre). Unité : le joule (J).` },
        { type: 'th', label: 'THM', titre: 'Théorème de l\'énergie cinétique',
          contenu: `La <strong>variation d'énergie cinétique</strong> d'un solide entre deux instants est égale à la <strong>somme des travaux</strong> de toutes les forces extérieures :<br>$$\\Delta E_c = E_c(t_2) - E_c(t_1) = \\sum W(\\vec{F}_{\\text{ext}})$$<br>Le <strong>travail</strong> d'une force constante sur un déplacement $\\vec{d}$ vaut $W = \\vec{F} \\cdot \\vec{d} = F\\,d\\cos\\alpha$.<br>Une force <strong>perpendiculaire</strong> au déplacement ne travaille pas.` },
        { type: 'def', label: 'DEF', titre: 'Puissance mécanique',
          contenu: `La <strong>puissance</strong> est le travail fourni par unité de temps : $P = \\dfrac{\\mathrm{d}W}{\\mathrm{d}t}$ (watt, W).<br><strong>En translation</strong> : $P = \\vec{F} \\cdot \\vec{V} = F\\,V\\cos\\alpha$.<br><strong>En rotation</strong> : $P = C \\, \\omega$ (couple × vitesse angulaire).<br>Relation utile pour un moteur : $P = C\\,\\omega = C \\times \\dfrac{2\\pi N}{60}$ avec $N$ en tr/min.` },
        { type: 'ex', label: 'EX', titre: 'Puissance d\'un moteur en rotation',
          contenu: `<strong>Énoncé</strong> : un moteur délivre un couple $C = 4$ N·m à $N = 2400$ tr/min. Puissance mécanique ?<br><strong>Résolution</strong> : $\\omega = \\dfrac{2\\pi N}{60} = \\dfrac{2\\pi \\times 2400}{60} = 251$ rad/s.<br>$P = C\\,\\omega = 4 \\times 251 \\approx 1005$ W $\\approx 1$ kW.<br>Ordre de grandeur : $P\\ (\\text{W}) \\approx C\\ (\\text{N·m}) \\times N\\ (\\text{tr/min}) \\times 0,105$.` },
      ]
    },
    {
      titre: 'Bilan de puissance et rendement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Rendement énergétique',
          contenu: `Le <strong>rendement</strong> $\\eta$ d'un composant est le rapport de la puissance <strong>utile</strong> (sortie) sur la puissance <strong>absorbée</strong> (entrée) :<br>$$\\eta = \\frac{P_{\\text{utile}}}{P_{\\text{absorbée}}} = \\frac{P_s}{P_e}$$<br>Toujours $0 < \\eta \\leq 1$ (souvent exprimé en %). La différence $P_e - P_s = P_{\\text{pertes}}$ est <strong>dissipée</strong> (chaleur, frottements).` },
        { type: 'prop', label: 'PROP', titre: 'Rendement d\'une chaîne en série',
          contenu: `Pour des composants en <strong>cascade</strong> (ex. moteur → réducteur → roue), les rendements se <strong>multiplient</strong> :<br>$$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\dots \\times \\eta_n$$<br>Le rendement global est donc <strong>toujours inférieur</strong> au plus faible des rendements.<br>Conséquence : pour optimiser une chaîne d'énergie, on identifie le maillon le moins efficace.` },
        { type: 'meth', label: 'METH', titre: 'Établir un bilan de puissance',
          contenu: `<strong>Méthode (chaîne d'énergie) :</strong><br>1. Identifier <strong>l'entrée</strong> (puissance absorbée) et <strong>la sortie</strong> (puissance utile).<br>2. Pour chaque bloc, écrire $P_s = \\eta \\, P_e$.<br>3. Remonter ou descendre la chaîne en propageant les puissances.<br>4. Calculer $\\eta_{\\text{global}} = \\prod \\eta_i$ et les <strong>pertes</strong> $P_{\\text{pertes}} = P_e(1 - \\eta_{\\text{global}})$.<br>5. Vérifier l'homogénéité (tout en watts).` },
        { type: 'ex', label: 'EX', titre: 'Rendement global d\'un motoréducteur',
          contenu: `<strong>Énoncé</strong> : un moteur ($\\eta_m = 0,85$) entraîne un réducteur ($\\eta_r = 0,90$) qui entraîne une courroie ($\\eta_c = 0,95$). Puissance absorbée $1500$ W. Puissance utile en sortie ?<br><strong>Résolution</strong> : $\\eta_{\\text{global}} = 0,85 \\times 0,90 \\times 0,95 = 0,727$.<br>$P_{\\text{utile}} = \\eta_{\\text{global}} \\times P_e = 0,727 \\times 1500 \\approx 1090$ W.<br>Pertes totales : $1500 - 1090 = 410$ W dissipées en chaleur.` },
      ]
    },
    {
      titre: 'Inertie et équation du mouvement',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Moments d\'inertie usuels',
          contenu: `Moment d'inertie autour de l'axe de révolution :<br><ul><li><strong>Cylindre plein</strong> (rayon $R$) : $J = \\dfrac{1}{2} m R^2$ ;</li><li><strong>Cylindre creux mince</strong> (rayon $R$) : $J = m R^2$ ;</li><li><strong>Sphère pleine</strong> : $J = \\dfrac{2}{5} m R^2$ ;</li><li><strong>Tige</strong> (longueur $L$, axe au centre $\\perp$) : $J = \\dfrac{1}{12} m L^2$.</li></ul>Plus la masse est <strong>éloignée de l'axe</strong>, plus $J$ est grand.` },
        { type: 'meth', label: 'METH', titre: 'Équation du mouvement par énergie',
          contenu: `<strong>Méthode (théorème de l'énergie cinétique en puissance) :</strong> $$\\frac{\\mathrm{d}E_c}{\\mathrm{d}t} = \\sum P_{\\text{ext}}$$<br>1. Exprimer $E_c$ du système (toutes les masses et inerties, ramenées à une seule vitesse).<br>2. Dériver par rapport au temps.<br>3. Exprimer la somme des puissances (moteur, résistances, poids).<br>4. Égaler → <strong>équation différentielle</strong> du mouvement.<br>Avantage : <strong>élimine</strong> les efforts de liaison qui ne travaillent pas.` },
        { type: 'ex', label: 'EX', titre: 'Mise en mouvement d\'un volant d\'inertie',
          contenu: `<strong>Énoncé</strong> : un volant ($J = 0,5$ kg·m$^2$) initialement à l'arrêt reçoit un couple constant $C = 2$ N·m. Vitesse angulaire après $t = 4$ s ?<br><strong>Résolution</strong> : PFD en rotation : $C = J\\,\\dot\\omega \\Rightarrow \\dot\\omega = \\dfrac{C}{J} = \\dfrac{2}{0,5} = 4$ rad/s$^2$.<br>Mouvement uniformément accéléré : $\\omega(t) = \\dot\\omega \\, t = 4 \\times 4 = 16$ rad/s.<br>Énergie cinétique acquise : $E_c = \\dfrac{1}{2} J \\omega^2 = \\dfrac{1}{2} \\times 0,5 \\times 16^2 = 64$ J.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 5 — TRANSFORMÉE DE LAPLACE & FONCTION DE TRANSFERT (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-laplace',
  matiere: 'si',
  titre: 'Transformée de Laplace et schéma-blocs',
  ordre: 5,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Transformée de Laplace',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Transformée de Laplace',
          contenu: `À une fonction du temps $f(t)$ causale (nulle pour $t < 0$), on associe sa <strong>transformée de Laplace</strong> $F(p)$ :<br>$$F(p) = \\mathcal{L}[f(t)] = \\int_0^{+\\infty} f(t)\\,e^{-pt}\\,\\mathrm{d}t$$<br>La variable $p$ est complexe. Cette transformation convertit les <strong>équations différentielles</strong> en <strong>équations algébriques</strong>, bien plus simples à manipuler.` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés fondamentales',
          contenu: `<strong>Linéarité</strong> : $\\mathcal{L}[a f + b g] = a F(p) + b G(p)$.<br><strong>Dérivation</strong> (conditions initiales nulles) : $\\mathcal{L}[f'(t)] = p\\,F(p)$, et $\\mathcal{L}[f''(t)] = p^2 F(p)$.<br><strong>Intégration</strong> : $\\mathcal{L}\\left[\\int_0^t f\\,\\mathrm{d}u\\right] = \\dfrac{F(p)}{p}$.<br>Ainsi, <strong>dériver</strong> ↔ multiplier par $p$ ; <strong>intégrer</strong> ↔ diviser par $p$.` },
        { type: 'form', label: 'FORM', titre: 'Transformées usuelles',
          contenu: `$$\\begin{array}{c|c} f(t)\\ (t\\geq 0) & F(p) \\\\ \\hline \\delta(t)\\ \\text{(impulsion)} & 1 \\\\ u(t)\\ \\text{(échelon)} & \\dfrac{1}{p} \\\\ t & \\dfrac{1}{p^2} \\\\ e^{-at} & \\dfrac{1}{p+a} \\\\ \\sin(\\omega t) & \\dfrac{\\omega}{p^2+\\omega^2} \\\\ \\cos(\\omega t) & \\dfrac{p}{p^2+\\omega^2} \\end{array}$$` },
        { type: 'th', label: 'THM', titre: 'Théorèmes des valeurs initiale et finale',
          contenu: `Sous réserve d'existence des limites :<br><strong>Valeur initiale</strong> : $$\\lim_{t \\to 0^+} f(t) = \\lim_{p \\to +\\infty} p\\,F(p)$$<br><strong>Valeur finale</strong> : $$\\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} p\\,F(p)$$<br>Le théorème de la valeur finale est <strong>essentiel</strong> pour calculer la <strong>valeur en régime permanent</strong> sans inverser la transformée.` },
        { type: 'ex', label: 'EX', titre: 'Réponse indicielle d\'un système du 1er ordre',
          contenu: `<strong>Énoncé</strong> : soit $S(p) = \\dfrac{K}{1+\\tau p} \\cdot \\dfrac{1}{p}$ (réponse à un échelon unitaire). Valeur finale de $s(t)$ ?<br><strong>Résolution</strong> : théorème de la valeur finale :<br>$\\displaystyle\\lim_{t\\to\\infty} s(t) = \\lim_{p\\to 0} p\\,S(p) = \\lim_{p\\to 0} \\dfrac{K}{1+\\tau p} = K$.<br>Le système atteint la valeur $K$ en régime permanent (gain statique). L'original est $s(t) = K(1 - e^{-t/\\tau})$.` },
      ]
    },
    {
      titre: 'Fonction de transfert',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction de transfert',
          contenu: `Pour un système <strong>linéaire</strong> à conditions initiales nulles, la <strong>fonction de transfert</strong> $H(p)$ est le rapport de la sortie sur l'entrée dans le domaine de Laplace :<br>$$H(p) = \\frac{S(p)}{E(p)}$$<br>Elle s'écrit comme un <strong>quotient de polynômes</strong> en $p$. Le <strong>degré du dénominateur</strong> donne l'<strong>ordre</strong> du système.<br>Elle caractérise <strong>entièrement</strong> le comportement dynamique du système.` },
        { type: 'def', label: 'DEF', titre: 'Gain statique, pôles et zéros',
          contenu: `Le <strong>gain statique</strong> $K = H(0)$ donne le rapport sortie/entrée en régime permanent.<br>Les <strong>pôles</strong> sont les racines du <strong>dénominateur</strong> ; ils déterminent la <strong>stabilité</strong> et la dynamique.<br>Les <strong>zéros</strong> sont les racines du <strong>numérateur</strong>.<br>La <strong>forme canonique</strong> fait apparaître $K$ : ex. $H(p) = \\dfrac{K}{1+\\tau p}$ (1er ordre).` },
        { type: 'meth', label: 'METH', titre: 'De l\'équation différentielle à H(p)',
          contenu: `<strong>Méthode :</strong><br>1. Écrire l'<strong>équation différentielle</strong> liant $s(t)$ et $e(t)$.<br>2. Appliquer la transformée de Laplace, conditions initiales <strong>nulles</strong> ($f^{(k)}(0) = 0$).<br>3. Remplacer chaque dérivée $s^{(n)}$ par $p^n S(p)$.<br>4. Factoriser $S(p)$ et $E(p)$, former $H(p) = \\dfrac{S(p)}{E(p)}$.<br>5. Mettre sous <strong>forme canonique</strong> pour lire $K$, $\\tau$ ou $\\omega_0$, $\\xi$.` },
        { type: 'ex', label: 'EX', titre: 'Fonction de transfert d\'un circuit RC',
          contenu: `<strong>Énoncé</strong> : circuit RC, entrée $u_e(t)$, sortie $u_s(t)$ aux bornes de $C$. L'équation est $RC\\,\\dfrac{\\mathrm{d}u_s}{\\mathrm{d}t} + u_s = u_e$. Donner $H(p)$.<br><strong>Résolution</strong> : Laplace (CI nulles) : $RC\\,p\\,U_s(p) + U_s(p) = U_e(p)$.<br>$U_s(p)(1 + RCp) = U_e(p) \\Rightarrow H(p) = \\dfrac{U_s}{U_e} = \\dfrac{1}{1 + RC\\,p}$.<br>Système du <strong>1er ordre</strong>, gain $K = 1$, constante de temps $\\tau = RC$.` },
      ]
    },
    {
      titre: 'Algèbre des schéma-blocs',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Schéma-blocs',
          contenu: `Un <strong>schéma-blocs</strong> représente graphiquement les relations entre signaux d'un système. Éléments :<br><ul><li><strong>bloc</strong> : une fonction de transfert $H(p)$ (multiplie le signal) ;</li><li><strong>comparateur</strong> (sommateur) : additionne/soustrait des signaux ;</li><li><strong>point de prélèvement</strong> : duplique un signal (retour).</li></ul>Il traduit visuellement la structure d'un asservissement.` },
        { type: 'prop', label: 'PROP', titre: 'Blocs en série et en parallèle',
          contenu: `<strong>En série (cascade)</strong> : les fonctions de transfert se <strong>multiplient</strong> :<br>$$H_{\\text{eq}} = H_1 \\times H_2$$<br><strong>En parallèle</strong> (mêmes entrée et sortie sommées) : elles s'<strong>additionnent</strong> :<br>$$H_{\\text{eq}} = H_1 + H_2$$<br>Ces règles permettent de <strong>simplifier</strong> progressivement un schéma complexe.` },
        { type: 'th', label: 'THM', titre: 'Formule de la boucle fermée (FTBF)',
          contenu: `Pour une boucle à retour, de chaîne directe $H(p)$ et chaîne de retour $G(p)$, la <strong>fonction de transfert en boucle fermée</strong> est :<br>$$\\text{FTBF} = \\frac{S(p)}{E(p)} = \\frac{H(p)}{1 + H(p)\\,G(p)}$$<br>(signe $+$ pour un <strong>retour négatif</strong>). Le produit $H(p)G(p)$ est la <strong>fonction de transfert en boucle ouverte</strong> (FTBO).<br><strong>Retour unitaire</strong> ($G = 1$) : $\\text{FTBF} = \\dfrac{H}{1 + H}$.` },
        { type: 'ex', label: 'EX', titre: 'Réduire un schéma à retour unitaire',
          contenu: `<strong>Énoncé</strong> : chaîne directe $H(p) = \\dfrac{10}{p}$, retour unitaire. FTBF ?<br><strong>Résolution</strong> : $\\text{FTBF} = \\dfrac{H}{1+H} = \\dfrac{\\frac{10}{p}}{1 + \\frac{10}{p}} = \\dfrac{10}{p + 10}$.<br>C'est un <strong>1er ordre</strong> de gain statique $\\dfrac{10}{10} = 1$ et de constante de temps $\\tau = \\dfrac{1}{10} = 0,1$ s.<br>La boucle fermée a <strong>stabilisé</strong> un intégrateur pur en un 1er ordre stable.` },
      ]
    },
    {
      titre: 'Transformée inverse et perturbations',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Retour au domaine temporel',
          contenu: `<strong>Méthode (transformée inverse) :</strong> pour obtenir $s(t)$ à partir de $S(p)$ :<br>1. <strong>Décomposer</strong> $S(p)$ en éléments simples (fractions à dénominateur du 1er degré).<br>2. Reconnaître chaque terme dans la <strong>table</strong> des transformées usuelles.<br>3. Sommer les originaux (linéarité).<br>Exemple : $\\dfrac{1}{p(p+a)} = \\dfrac{1/a}{p} - \\dfrac{1/a}{p+a} \\;\\to\\; \\dfrac{1}{a}\\left(1 - e^{-at}\\right)$.` },
        { type: 'def', label: 'DEF', titre: 'Effet d\'une perturbation',
          contenu: `Une <strong>perturbation</strong> est une entrée <strong>indésirable</strong> qui agit sur le système (couple résistant, charge, variation d'alimentation).<br>Dans un schéma-blocs, elle s'ajoute en un point de la chaîne directe via un <strong>sommateur</strong>.<br>Grâce à la <strong>linéarité</strong>, la sortie est la somme de la réponse à la consigne et de la réponse à la perturbation (théorème de superposition).` },
        { type: 'prop', label: 'PROP', titre: 'Rejet de perturbation',
          contenu: `Un bon asservissement doit <strong>rejeter</strong> l'effet des perturbations sur la sortie.<br>La présence d'un <strong>intégrateur</strong> dans la chaîne directe <strong>en amont</strong> du point d'entrée de la perturbation annule son effet en régime permanent.<br>Plus le <strong>gain de boucle</strong> est élevé, plus la perturbation est atténuée : la boucle fermée <strong>compense</strong> automatiquement.` },
        { type: 'ex', label: 'EX', titre: 'Calculer une réponse temporelle',
          contenu: `<strong>Énoncé</strong> : $S(p) = \\dfrac{2}{p(p+2)}$. Donner $s(t)$.<br><strong>Résolution</strong> : décomposition : $\\dfrac{2}{p(p+2)} = \\dfrac{A}{p} + \\dfrac{B}{p+2}$ avec $A = 1$, $B = -1$.<br>Donc $S(p) = \\dfrac{1}{p} - \\dfrac{1}{p+2}$, d'où $s(t) = 1 - e^{-2t}$ pour $t \\geq 0$.<br>Vérification (valeur finale) : $\\lim_{p\\to0} p\\,S(p) = \\dfrac{2}{2} = 1$. Cohérent avec $s(\\infty) = 1$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 6 — SYSTÈMES ASSERVIS & PERFORMANCES (enrichi)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-asserv',
  matiere: 'si',
  titre: 'Systèmes asservis et performances',
  ordre: 6,
  filiere: 'term-spe-si',
  enrich: true,
  sections: [
    {
      titre: 'Structure d\'un système asservi',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Boucle ouverte / boucle fermée',
          contenu: `En <strong>boucle ouverte</strong>, la commande est élaborée <strong>sans mesurer</strong> la sortie : aucune correction des perturbations.<br>En <strong>boucle fermée</strong> (asservissement), un <strong>capteur</strong> mesure la sortie, comparée à la consigne par un <strong>comparateur</strong> qui élabore l'<strong>écart</strong> $\\varepsilon$. Le correcteur agit pour <strong>annuler cet écart</strong>.<br>La boucle fermée <strong>corrige</strong> automatiquement les perturbations et les imperfections.` },
        { type: 'def', label: 'DEF', titre: 'Asservissement et régulation',
          contenu: `Un <strong>asservissement</strong> a une consigne <strong>variable</strong> : la sortie doit <strong>suivre</strong> la consigne (ex. suivi de trajectoire d'un bras robot).<br>Une <strong>régulation</strong> a une consigne <strong>constante</strong> : la sortie doit être <strong>maintenue</strong> malgré les perturbations (ex. température d'un four).<br>Les deux reposent sur la même structure en boucle fermée à <strong>retour négatif</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Signal d\'écart',
          contenu: `Le <strong>comparateur</strong> calcule l'<strong>écart</strong> (ou erreur) :<br>$$\\varepsilon(t) = e(t) - m(t)$$<br>où $e(t)$ est l'image de la consigne et $m(t)$ l'image de la mesure (retour).<br>L'<strong>erreur en régime permanent</strong> $\\varepsilon_\\infty = \\lim_{t\\to\\infty} \\varepsilon(t)$ caractérise la <strong>précision</strong> : un système précis a $\\varepsilon_\\infty$ faible ou nul.` },
        { type: 'ex', label: 'EX', titre: 'Identifier les blocs d\'un asservissement de vitesse',
          contenu: `<strong>Énoncé</strong> : décrire la boucle d'asservissement de vitesse d'un moteur à courant continu.<br><strong>Résolution</strong> : <strong>consigne</strong> (tension image de la vitesse voulue) → <strong>comparateur</strong> (écart) → <strong>correcteur</strong> → <strong>variateur</strong> (préactionneur) → <strong>moteur</strong> → vitesse $\\omega$. La <strong>génératrice tachymétrique</strong> (ou codeur) mesure $\\omega$ et renvoie l'image au comparateur. Le retour ferme la boucle et permet de corriger toute baisse de vitesse en charge.` },
      ]
    },
    {
      titre: 'Performances : stabilité, précision, rapidité',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Stabilité',
          contenu: `Un système est <strong>stable</strong> si, écarté de son point d'équilibre, il y <strong>revient</strong> (sa sortie reste bornée pour une entrée bornée).<br><strong>Critère sur les pôles</strong> : un système est stable si <strong>tous les pôles</strong> de sa FTBF ont une <strong>partie réelle strictement négative</strong>.<br>Un système instable diverge (oscillations croissantes) : <strong>inacceptable</strong> en pratique.` },
        { type: 'def', label: 'DEF', titre: 'Précision (erreur statique)',
          contenu: `La <strong>précision</strong> se mesure par l'<strong>erreur en régime permanent</strong> $\\varepsilon_\\infty$ entre consigne et mesure.<br><strong>Erreur statique</strong> $\\varepsilon_s$ : réponse à un <strong>échelon</strong>. <strong>Erreur de traînage</strong> $\\varepsilon_v$ : réponse à une <strong>rampe</strong>.<br>La présence d'un <strong>intégrateur</strong> ($\\frac{1}{p}$) dans la boucle ouverte <strong>annule</strong> l'erreur statique (système de classe $\\geq 1$).` },
        { type: 'def', label: 'DEF', titre: 'Rapidité',
          contenu: `La <strong>rapidité</strong> caractérise la vitesse d'établissement de la sortie. Indicateurs :<br><ul><li><strong>Temps de réponse à 5 %</strong> $t_{5\\%}$ : temps pour entrer (et rester) dans $\\pm 5\\%$ de la valeur finale ;</li><li><strong>Temps de montée</strong> : de 10 % à 90 % de la valeur finale.</li></ul>Plus $t_{5\\%}$ est petit, plus le système est rapide.` },
        { type: 'prop', label: 'PROP', titre: 'Dilemme stabilité - précision',
          contenu: `Augmenter le <strong>gain</strong> de la boucle améliore la <strong>précision</strong> et la <strong>rapidité</strong>, mais <strong>dégrade la stabilité</strong> (oscillations, dépassements).<br>Inversement, un gain faible est très stable mais lent et peu précis.<br>Le réglage d'un asservissement est donc un <strong>compromis</strong> : c'est le rôle du <strong>correcteur</strong> d'améliorer simultanément plusieurs performances.` },
        { type: 'ex', label: 'EX', titre: 'Calculer une erreur statique',
          contenu: `<strong>Énoncé</strong> : FTBO $= \\dfrac{5}{1 + 2p}$ (classe 0), retour unitaire. Erreur statique pour une consigne échelon unitaire ?<br><strong>Résolution</strong> : gain statique de la FTBO : $K_{BO} = 5$.<br>Erreur statique : $\\varepsilon_s = \\dfrac{1}{1 + K_{BO}} = \\dfrac{1}{1+5} = \\dfrac{1}{6} \\approx 0,17$ (soit $17\\%$).<br>Pour annuler $\\varepsilon_s$, il faudrait ajouter un <strong>intégrateur</strong> (correcteur PI) dans la boucle.` },
      ]
    },
    {
      titre: 'Correcteurs',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Correcteur PID',
          contenu: `Le <strong>correcteur PID</strong> combine trois actions sur l'écart $\\varepsilon(t)$ :<br>$$u(t) = K_p\\,\\varepsilon(t) + K_i \\int_0^t \\varepsilon\\,\\mathrm{d}u + K_d\\,\\frac{\\mathrm{d}\\varepsilon}{\\mathrm{d}t}$$<br>En Laplace : $C(p) = K_p + \\dfrac{K_i}{p} + K_d\\,p$.<br>Chaque terme agit sur une performance distincte (proportionnel, intégral, dérivé).` },
        { type: 'prop', label: 'PROP', titre: 'Rôle de chaque action',
          contenu: `<strong>Proportionnel (P)</strong> : augmente le gain → améliore précision et rapidité, mais peut <strong>déstabiliser</strong> et laisse une erreur statique.<br><strong>Intégral (I)</strong> : <strong>annule l'erreur statique</strong> (mémoire de l'écart), mais ralentit et peut déstabiliser.<br><strong>Dérivé (D)</strong> : <strong>anticipe</strong> les variations → améliore la stabilité et la rapidité (amortit les dépassements), mais sensible au bruit.` },
        { type: 'meth', label: 'METH', titre: 'Choisir un correcteur',
          contenu: `<strong>Méthode (selon le défaut à corriger) :</strong><br>• Erreur statique non nulle → ajouter une action <strong>intégrale</strong> (PI).<br>• Dépassement / instabilité → ajouter une action <strong>dérivée</strong> (PD) ou réduire le gain.<br>• Lenteur → augmenter $K_p$ (en surveillant la stabilité) ou ajouter du dérivé.<br>On ajuste les gains et on <strong>vérifie par simulation</strong> que les trois performances respectent le cahier des charges.` },
        { type: 'ex', label: 'EX', titre: 'Effet d\'un correcteur intégral',
          contenu: `<strong>Énoncé</strong> : un asservissement de position présente une erreur statique de $8\\%$ avec un correcteur proportionnel seul. Quel correcteur choisir, et quel effet ?<br><strong>Résolution</strong> : on ajoute une <strong>action intégrale</strong> (correcteur PI). L'intégrateur ($\\frac{1}{p}$) rend la FTBO de <strong>classe 1</strong>, ce qui <strong>annule l'erreur statique</strong> ($\\varepsilon_s = 0$).<br>Contrepartie : le système devient plus lent et son réglage doit préserver la <strong>stabilité</strong> (limiter $K_i$).` },
      ]
    },
    {
      titre: 'Systèmes du 1er et du 2e ordre',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Système du 1er ordre',
          contenu: `Fonction de transfert : $H(p) = \\dfrac{K}{1 + \\tau p}$ ($K$ gain statique, $\\tau$ constante de temps).<br><strong>Réponse à un échelon</strong> $E_0$ : $$s(t) = K E_0\\left(1 - e^{-t/\\tau}\\right)$$<br>Pas de dépassement. Valeur finale $K E_0$. À $t = \\tau$ : $63\\%$ de la valeur finale.<br><strong>Temps de réponse</strong> à 5 % : $t_{5\\%} \\approx 3\\tau$.` },
        { type: 'th', label: 'THM', titre: 'Système du 2e ordre',
          contenu: `Forme canonique : $$H(p) = \\frac{K}{1 + \\dfrac{2\\xi}{\\omega_0}p + \\dfrac{1}{\\omega_0^2}p^2}$$<br>$K$ gain statique, $\\omega_0$ pulsation propre, $\\xi$ <strong>coefficient d'amortissement</strong>.<br>• $\\xi > 1$ : régime <strong>apériodique</strong> (lent, sans dépassement) ;<br>• $\\xi = 1$ : régime <strong>critique</strong> (le plus rapide sans dépassement) ;<br>• $0 < \\xi < 1$ : régime <strong>pseudo-périodique</strong> (oscillations amorties, <strong>dépassement</strong>).` },
        { type: 'prop', label: 'PROP', titre: 'Dépassement et amortissement',
          contenu: `Pour un 2e ordre <strong>pseudo-périodique</strong> ($0 < \\xi < 1$), le <strong>premier dépassement</strong> relatif vaut :<br>$$D_1 = e^{-\\frac{\\pi \\xi}{\\sqrt{1-\\xi^2}}}$$<br>Plus $\\xi$ est <strong>petit</strong>, plus le dépassement est <strong>grand</strong> (système peu amorti).<br>Valeurs repères : $\\xi = 0,7 \\Rightarrow D_1 \\approx 5\\%$ (bon compromis rapidité/dépassement).` },
        { type: 'ex', label: 'EX', titre: 'Lire les paramètres d\'un 2e ordre',
          contenu: `<strong>Énoncé</strong> : $H(p) = \\dfrac{4}{1 + 0,2\\,p + 0,01\\,p^2}$. Donner $K$, $\\omega_0$, $\\xi$ et la nature du régime.<br><strong>Résolution</strong> : $K = 4$ (terme constant).<br>$\\dfrac{1}{\\omega_0^2} = 0,01 \\Rightarrow \\omega_0 = 10$ rad/s.<br>$\\dfrac{2\\xi}{\\omega_0} = 0,2 \\Rightarrow \\xi = \\dfrac{0,2 \\times 10}{2} = 1$.<br>$\\xi = 1$ : régime <strong>critique</strong> (le plus rapide sans dépassement).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 7 — MODÉLISATION MULTIPHYSIQUE (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-multiphysique',
  matiere: 'si',
  titre: 'Modélisation multiphysique',
  ordre: 7,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Modélisation des circuits électriques',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Lois fondamentales',
          contenu: `<strong>Loi d'Ohm</strong> (résistance) : $u = R\\,i$.<br><strong>Condensateur</strong> : $i = C\\,\\dfrac{\\mathrm{d}u}{\\mathrm{d}t}$, soit $u = \\dfrac{1}{C}\\int i\\,\\mathrm{d}t$.<br><strong>Bobine</strong> (inductance) : $u = L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}$.<br><strong>Lois de Kirchhoff</strong> : la somme des courants à un nœud est nulle (loi des nœuds), la somme des tensions dans une maille est nulle (loi des mailles).` },
        { type: 'form', label: 'FORM', titre: 'Puissance et énergie électriques',
          contenu: `<strong>Puissance instantanée</strong> : $p(t) = u(t)\\,i(t)$ (watt).<br>En continu : $P = U\\,I = R\\,I^2 = \\dfrac{U^2}{R}$.<br><strong>Énergie</strong> dissipée par effet Joule sur une durée $\\Delta t$ : $W = P\\,\\Delta t = R\\,I^2\\,\\Delta t$ (joule).<br>Une résistance <strong>dissipe</strong> toute l'énergie en chaleur ; bobine et condensateur la <strong>stockent</strong> (magnétique / électrique).` },
        { type: 'def', label: 'DEF', titre: 'Impédance en régime sinusoïdal',
          contenu: `En régime sinusoïdal de pulsation $\\omega$, on associe une <strong>impédance complexe</strong> $\\underline{Z}$ :<br><ul><li>résistance : $\\underline{Z}_R = R$ ;</li><li>bobine : $\\underline{Z}_L = jL\\omega$ ;</li><li>condensateur : $\\underline{Z}_C = \\dfrac{1}{jC\\omega}$.</li></ul>La loi d'Ohm complexe $\\underline{U} = \\underline{Z}\\,\\underline{I}$ permet de traiter les associations série/parallèle comme en continu.` },
        { type: 'ex', label: 'EX', titre: 'Établir l\'équation d\'un circuit RL',
          contenu: `<strong>Énoncé</strong> : circuit série $R$, $L$ alimenté par $u(t)$. Établir l'équation différentielle du courant $i(t)$.<br><strong>Résolution</strong> : loi des mailles : $u = u_R + u_L = R\\,i + L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t}$.<br>D'où : $L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t} + R\\,i = u(t)$.<br>C'est un <strong>1er ordre</strong> de constante de temps $\\tau = \\dfrac{L}{R}$. Fonction de transfert : $\\dfrac{I(p)}{U(p)} = \\dfrac{1/R}{1 + \\frac{L}{R}p}$.` },
      ]
    },
    {
      titre: 'Moteur à courant continu',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Équations du MCC',
          contenu: `Un <strong>moteur à courant continu</strong> est régi par :<br><strong>Électrique</strong> : $u = R\\,i + L\\,\\dfrac{\\mathrm{d}i}{\\mathrm{d}t} + e$, avec $e = K_e\\,\\omega$ (force contre-électromotrice).<br><strong>Couple</strong> : $C_m = K_c\\,i$ (couple proportionnel au courant).<br><strong>Mécanique</strong> : $J\\,\\dfrac{\\mathrm{d}\\omega}{\\mathrm{d}t} = C_m - C_r$ (PFD en rotation).<br>En unités SI cohérentes, $K_e = K_c = K$ (constante du moteur).` },
        { type: 'prop', label: 'PROP', titre: 'Couplage électromécanique',
          contenu: `Le MCC <strong>couple</strong> deux domaines : l'électrique fournit le courant $i$, qui crée le couple $C_m = K\\,i$ ; la rotation $\\omega$ crée en retour la fcem $e = K\\,\\omega$ qui s'oppose à la tension.<br>Ce couplage se modélise par un <strong>schéma-blocs</strong> avec une boucle interne (la fcem est un <strong>retour</strong> naturel).<br>À vide en régime permanent : $u \\approx K\\,\\omega$ donc $\\omega \\approx \\dfrac{u}{K}$ : la vitesse est <strong>proportionnelle à la tension</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Vitesse à vide d\'un MCC',
          contenu: `<strong>Énoncé</strong> : MCC de constante $K = 0,05$ V·s/rad alimenté sous $u = 12$ V, fonctionnant à vide (résistance et courant négligeables). Vitesse de rotation ?<br><strong>Résolution</strong> : à vide et en régime permanent, $u \\approx e = K\\,\\omega$.<br>$\\omega = \\dfrac{u}{K} = \\dfrac{12}{0,05} = 240$ rad/s, soit $N = \\dfrac{60\\,\\omega}{2\\pi} = \\dfrac{60 \\times 240}{2\\pi} \\approx 2292$ tr/min.` },
      ]
    },
    {
      titre: 'Modélisation thermique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Analogie thermique-électrique',
          contenu: `Les transferts thermiques se modélisent par <strong>analogie avec l'électricité</strong> :<br><ul><li>la <strong>température</strong> $T$ joue le rôle de la tension ;</li><li>le <strong>flux thermique</strong> $\\varphi$ (W) celui du courant ;</li><li>la <strong>résistance thermique</strong> $R_{th}$ (K/W) celui de la résistance électrique ;</li><li>la <strong>capacité thermique</strong> $C_{th}$ (J/K) celui du condensateur.</li></ul>Loi : $\\varphi = \\dfrac{T_1 - T_2}{R_{th}}$ (analogue de la loi d'Ohm).` },
        { type: 'form', label: 'FORM', titre: 'Bilan thermique d\'un corps',
          contenu: `Pour un corps de capacité thermique $C_{th} = m\\,c$ ($c$ : capacité massique, J·kg$^{-1}$·K$^{-1}$), le <strong>bilan d'énergie</strong> s'écrit :<br>$$C_{th}\\,\\frac{\\mathrm{d}T}{\\mathrm{d}t} = \\varphi_{\\text{reçu}} - \\varphi_{\\text{perdu}}$$<br>Avec des pertes par conduction $\\varphi_{\\text{perdu}} = \\dfrac{T - T_{\\text{ext}}}{R_{th}}$, on obtient un système du <strong>1er ordre</strong> de constante de temps $\\tau = R_{th}\\,C_{th}$.` },
        { type: 'ex', label: 'EX', titre: 'Chauffage d\'un local (1er ordre thermique)',
          contenu: `<strong>Énoncé</strong> : un local ($C_{th} = 5\\times10^5$ J/K, $R_{th} = 0,01$ K/W) chauffé par un radiateur. Constante de temps thermique ?<br><strong>Résolution</strong> : $\\tau = R_{th}\\,C_{th} = 0,01 \\times 5\\times10^5 = 5000$ s $\\approx 1$ h 23 min.<br>Le local atteint $63\\%$ de l'écart de température en $\\tau$, et le régime permanent (à $5\\%$) en $\\approx 3\\tau \\approx 4$ h. Le comportement thermique est <strong>lent</strong> (grande inertie).` },
      ]
    },
    {
      titre: 'Énergie hydraulique et pneumatique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Grandeurs hydrauliques',
          contenu: `En hydraulique/pneumatique, les grandeurs analogues sont :<br><ul><li>la <strong>pression</strong> $p$ (Pa) ↔ tension ;</li><li>le <strong>débit volumique</strong> $Q_v$ (m$^3$·s$^{-1}$) ↔ courant.</li></ul>Conservation : pour un fluide incompressible, le débit se conserve ($Q_v$ entrant = sortant).<br>Pour un vérin de section $S$ se déplaçant à vitesse $v$ : $Q_v = S \\times v$.` },
        { type: 'form', label: 'FORM', titre: 'Puissance hydraulique',
          contenu: `La <strong>puissance hydraulique</strong> transportée par un fluide vaut :<br>$$P = p \\times Q_v$$<br>($p$ en pascals, $Q_v$ en m$^3$/s, $P$ en watts).<br>Pour un vérin : $P = p \\times S \\times v = F \\times v$ — on retrouve la puissance mécanique, confirmant la conversion énergie hydraulique → énergie mécanique.` },
        { type: 'ex', label: 'EX', titre: 'Débit pour une vitesse de vérin',
          contenu: `<strong>Énoncé</strong> : un vérin de section $S = 12$ cm$^2$ doit sortir à $v = 0,15$ m/s. Débit à fournir ? Puissance sous $p = 5$ bar ?<br><strong>Résolution</strong> : $Q_v = S \\times v = 12\\times10^{-4} \\times 0,15 = 1,8\\times10^{-4}$ m$^3$/s $= 10,8$ L/min.<br>$P = p\\,Q_v = 5\\times10^5 \\times 1,8\\times10^{-4} = 90$ W.<br>Cohérence : $F = pS = 5\\times10^5 \\times 12\\times10^{-4} = 600$ N et $P = Fv = 600 \\times 0,15 = 90$ W.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 8 — TRAITEMENT DE L'INFORMATION & LOGIQUE (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-logique',
  matiere: 'si',
  titre: 'Traitement de l\'information et logique',
  ordre: 8,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Logique combinatoire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Variables et fonctions logiques',
          contenu: `Une <strong>variable logique</strong> (booléenne) ne prend que deux valeurs : $0$ (faux) ou $1$ (vrai).<br>Une <strong>fonction logique combinatoire</strong> a une sortie qui ne dépend <strong>que de l'état présent</strong> des entrées (pas de mémoire).<br>Opérateurs de base : <strong>NON</strong> ($\\bar{a}$), <strong>ET</strong> ($a \\cdot b$), <strong>OU</strong> ($a + b$). On les combine pour réaliser toute fonction.` },
        { type: 'form', label: 'FORM', titre: 'Algèbre de Boole',
          contenu: `Propriétés fondamentales :<br><strong>Identités</strong> : $a + 0 = a$, $a \\cdot 1 = a$, $a + \\bar{a} = 1$, $a \\cdot \\bar{a} = 0$.<br><strong>Idempotence</strong> : $a + a = a$, $a \\cdot a = a$.<br><strong>De Morgan</strong> : $\\overline{a + b} = \\bar{a} \\cdot \\bar{b}$ et $\\overline{a \\cdot b} = \\bar{a} + \\bar{b}$.<br><strong>Distributivité</strong> : $a \\cdot (b + c) = a\\cdot b + a\\cdot c$.` },
        { type: 'meth', label: 'METH', titre: 'Table de vérité et équation',
          contenu: `<strong>Méthode :</strong><br>1. Lister toutes les <strong>combinaisons</strong> des entrées ($2^n$ lignes pour $n$ entrées).<br>2. Déterminer la sortie pour chaque ligne (cahier des charges).<br>3. Écrire l'équation en <strong>somme de produits</strong> : un terme produit par ligne où la sortie vaut $1$.<br>4. <strong>Simplifier</strong> avec l'algèbre de Boole (ou un tableau de Karnaugh).<br>5. Traduire en <strong>logigramme</strong> (portes logiques).` },
        { type: 'ex', label: 'EX', titre: 'Établir l\'équation d\'une sécurité',
          contenu: `<strong>Énoncé</strong> : une presse démarre ($S=1$) si les deux mains appuient ($a=1$ ET $b=1$) ET que le capot est fermé ($c=1$). Équation ?<br><strong>Résolution</strong> : la condition « toutes vraies » est un <strong>ET</strong> : $$S = a \\cdot b \\cdot c$$<br>Si l'on voulait aussi un arrêt d'urgence $u$ (actif à $0$ pour couper), on écrirait $S = a \\cdot b \\cdot c \\cdot u$. Le ET garantit qu'<strong>aucune</strong> condition manquante ne permet le démarrage.` },
      ]
    },
    {
      titre: 'Logique séquentielle',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Système séquentiel',
          contenu: `Un <strong>système séquentiel</strong> a une sortie qui dépend de l'état des entrées <strong>et de l'historique</strong> (états passés) : il possède une <strong>mémoire</strong>.<br>L'élément mémoire de base est la <strong>bascule</strong> (flip-flop), qui mémorise un bit.<br>Le comportement se décrit par un <strong>diagramme états-transitions</strong> : à chaque <strong>état</strong> sont associées des actions, et les <strong>transitions</strong> sont déclenchées par des événements.` },
        { type: 'def', label: 'DEF', titre: 'Description par GRAFCET / états-transitions',
          contenu: `Le <strong>GRAFCET</strong> (et le diagramme stm de SysML) décrit le fonctionnement séquentiel par :<br><ul><li>des <strong>étapes</strong> (états), dont une <strong>étape initiale</strong> ;</li><li>des <strong>transitions</strong> portant une <strong>réceptivité</strong> (condition logique) ;</li><li>des <strong>actions</strong> associées aux étapes actives.</li></ul>Une transition est <strong>franchie</strong> si l'étape amont est active <strong>et</strong> la réceptivité vraie. C'est l'outil de référence pour la <strong>commande</strong> des systèmes automatisés.` },
        { type: 'prop', label: 'PROP', titre: 'Règles d\'évolution',
          contenu: `<strong>Franchissement d'une transition</strong> : la transition est franchie si <strong>(1)</strong> toutes ses étapes amont sont actives <strong>et (2)</strong> sa réceptivité est vraie.<br>Lors du franchissement : les étapes <strong>amont</strong> sont désactivées, les étapes <strong>aval</strong> activées, <strong>simultanément</strong>.<br>Plusieurs transitions simultanément franchissables le sont <strong>en même temps</strong> (évolution synchrone).` },
        { type: 'ex', label: 'EX', titre: 'Décrire un cycle de perçage',
          contenu: `<strong>Énoncé</strong> : à l'appui « départ » ($dcy$), une perceuse descend (jusqu'au capteur bas $b$), puis remonte (jusqu'au capteur haut $h$), puis s'arrête. Décrire par étapes.<br><strong>Résolution</strong> : <strong>Étape 0</strong> (initiale, attente) ; transition réceptivité $dcy$ → <strong>Étape 1</strong> (action : descendre) ; transition $b$ → <strong>Étape 2</strong> (action : monter) ; transition $h$ → retour à l'<strong>Étape 0</strong>. Chaque transition n'est franchie que si l'étape amont est active et la condition (capteur) atteinte.` },
      ]
    },
    {
      titre: 'Codage et représentation de l\'information',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Numération binaire et hexadécimale',
          contenu: `En <strong>binaire</strong> (base 2), un nombre s'écrit avec des <strong>bits</strong> (0/1). La valeur d'un mot de $n$ bits $b_{n-1}\\dots b_0$ est $\\sum_{k=0}^{n-1} b_k\\,2^k$.<br>L'<strong>hexadécimal</strong> (base 16, chiffres $0$–$9$, $A$–$F$) regroupe les bits par <strong>4</strong> (un chiffre hexa = un quartet).<br>Exemple : $1011_2 = 8 + 0 + 2 + 1 = 11_{10} = \\mathrm{B}_{16}$.` },
        { type: 'form', label: 'FORM', titre: 'Conversions et capacité',
          contenu: `Un mot de $n$ bits code $2^n$ <strong>valeurs distinctes</strong>, de $0$ à $2^n - 1$.<br>Exemples : $8$ bits (octet) → $256$ valeurs ($0$ à $255$) ; $10$ bits → $1024$ valeurs.<br><strong>Conversion décimal → binaire</strong> : divisions successives par 2, les restes lus de bas en haut donnent les bits.<br>Exemple : $19 = 16 + 2 + 1 = 10011_2$.` },
        { type: 'ex', label: 'EX', titre: 'Convertir et coder une mesure',
          contenu: `<strong>Énoncé</strong> : convertir $45_{10}$ en binaire puis en hexadécimal.<br><strong>Résolution — binaire</strong> : $45 = 32 + 8 + 4 + 1 = 101101_2$.<br><strong>Hexadécimal</strong> : on regroupe par quartets à partir de la droite : $0010\\,1101 = 2\\mathrm{D}_{16}$.<br>Vérification : $2 \\times 16 + 13 = 32 + 13 = 45$. Cohérent.` },
      ]
    },
    {
      titre: 'Portes logiques et logigrammes',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Portes logiques fondamentales',
          contenu: `Une <strong>porte logique</strong> réalise matériellement une fonction booléenne :<br><ul><li><strong>NON</strong> (inverseur) : $S = \\bar{a}$ ;</li><li><strong>ET</strong> : $S = a \\cdot b$ (sortie 1 si toutes les entrées à 1) ;</li><li><strong>OU</strong> : $S = a + b$ (sortie 1 si au moins une entrée à 1).</li></ul>Le <strong>logigramme</strong> assemble ces portes pour réaliser une fonction complexe à partir de son équation.` },
        { type: 'def', label: 'DEF', titre: 'Portes universelles NAND / NOR',
          contenu: `Les portes <strong>NAND</strong> (NON-ET, $S = \\overline{a \\cdot b}$) et <strong>NOR</strong> (NON-OU, $S = \\overline{a + b}$) sont dites <strong>universelles</strong> : à elles seules, elles permettent de réaliser <strong>toutes</strong> les autres fonctions logiques.<br>La porte <strong>OU exclusif (XOR)</strong>, $S = a \\oplus b = \\bar{a}\\,b + a\\,\\bar{b}$, vaut 1 si les entrées sont <strong>différentes</strong> (détecteur de différence, demi-additionneur).` },
        { type: 'ex', label: 'EX', titre: 'Simplifier puis réaliser une fonction',
          contenu: `<strong>Énoncé</strong> : simplifier $S = a\\cdot b + a\\cdot \\bar{b}$ et donner le logigramme.<br><strong>Résolution</strong> : factorisation : $S = a\\,(b + \\bar{b}) = a \\cdot 1 = a$.<br>La fonction se réduit à un simple <strong>fil</strong> ($S = a$) : aucune porte n'est nécessaire ! La simplification booléenne <strong>réduit le nombre de composants</strong>, le coût et la consommation. C'est l'objectif systématique avant câblage.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 9 — CHAÎNE D'ACQUISITION NUMÉRIQUE (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-acquisition',
  matiere: 'si',
  titre: 'Chaîne d\'acquisition numérique',
  ordre: 9,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Capteurs et conditionnement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Capteur et grandeurs caractéristiques',
          contenu: `Un <strong>capteur</strong> transforme une grandeur physique (mesurande) en un <strong>signal exploitable</strong> (souvent électrique).<br>Caractéristiques :<br><ul><li><strong>Étendue de mesure</strong> : plage de fonctionnement ;</li><li><strong>Sensibilité</strong> $s = \\dfrac{\\Delta(\\text{signal})}{\\Delta(\\text{mesurande})}$ ;</li><li><strong>Résolution</strong> : plus petite variation détectable ;</li><li><strong>Précision</strong>, <strong>linéarité</strong>, <strong>temps de réponse</strong>.</li></ul>` },
        { type: 'def', label: 'DEF', titre: 'Capteurs TOR, analogiques, numériques',
          contenu: `On distingue trois familles selon la nature du signal :<br><ul><li><strong>TOR</strong> (tout ou rien) : deux états (présence/absence) — ex. fin de course, détecteur ;</li><li><strong>analogique</strong> : signal continu image de la grandeur — ex. thermocouple, potentiomètre ;</li><li><strong>numérique</strong> : signal codé en binaire — ex. codeur incrémental/absolu.</li></ul>Le <strong>codeur absolu</strong> délivre directement la position codée ; l'<strong>incrémental</strong> compte des impulsions.` },
        { type: 'def', label: 'DEF', titre: 'Conditionnement du signal',
          contenu: `Le signal brut d'un capteur doit souvent être <strong>conditionné</strong> avant numérisation :<br><ul><li><strong>amplification</strong> (signaux faibles) ;</li><li><strong>filtrage</strong> (éliminer le bruit, anti-repliement) ;</li><li><strong>mise à l'échelle</strong> / décalage (adapter à la plage du convertisseur).</li></ul>Objectif : fournir un signal <strong>propre et adapté</strong> à l'entrée du convertisseur analogique-numérique.` },
        { type: 'ex', label: 'EX', titre: 'Exploiter la sensibilité d\'un capteur',
          contenu: `<strong>Énoncé</strong> : un capteur de température a une sensibilité $s = 10$ mV/°C et délivre $0$ V à $0$ °C. Tension à $25$ °C ? Température si la mesure vaut $0,42$ V ?<br><strong>Résolution</strong> : $U = s \\times T = 10\\times10^{-3} \\times 25 = 0,25$ V.<br>Inversement : $T = \\dfrac{U}{s} = \\dfrac{0,42}{0,01} = 42$ °C.<br>La relation est <strong>linéaire</strong> (capteur idéal), ce qui simplifie l'étalonnage.` },
      ]
    },
    {
      titre: 'Conversion analogique-numérique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Échantillonnage et quantification',
          contenu: `La numérisation d'un signal comporte deux opérations :<br><ul><li><strong>Échantillonnage</strong> : prélèvement de la valeur à intervalles réguliers $T_e$ (période d'échantillonnage), à la fréquence $f_e = 1/T_e$ ;</li><li><strong>Quantification</strong> : approximation de chaque échantillon par une valeur parmi $2^n$ niveaux ($n$ = résolution du CAN).</li></ul>Le résultat est une suite de <strong>nombres binaires</strong>.` },
        { type: 'form', label: 'FORM', titre: 'Quantum (pas de quantification)',
          contenu: `Pour un convertisseur de <strong>résolution $n$ bits</strong> et de pleine échelle $U_{\\text{ref}}$, le <strong>quantum</strong> (plus petite variation représentable) vaut :<br>$$q = \\frac{U_{\\text{ref}}}{2^n}$$<br>C'est la <strong>résolution en tension</strong>. La valeur numérique d'une tension $U$ est $N = \\text{partie entière}\\left(\\dfrac{U}{q}\\right)$.<br>Plus $n$ est grand, plus $q$ est petit → meilleure résolution.` },
        { type: 'th', label: 'THM', titre: 'Critère de Shannon-Nyquist',
          contenu: `Pour reconstituer fidèlement un signal de fréquence maximale $f_{\\max}$, la <strong>fréquence d'échantillonnage</strong> doit vérifier :<br>$$f_e > 2\\,f_{\\max}$$<br>Si $f_e$ est trop faible, apparaît le <strong>repliement de spectre</strong> (aliasing) : des fréquences parasites faussent le signal reconstruit.<br>En pratique, on place un <strong>filtre anti-repliement</strong> (passe-bas) avant l'échantillonneur.` },
        { type: 'ex', label: 'EX', titre: 'Résolution d\'un convertisseur',
          contenu: `<strong>Énoncé</strong> : un CAN de $n = 10$ bits a une pleine échelle $U_{\\text{ref}} = 5$ V. Quantum ? Valeur numérique pour $U = 2,5$ V ?<br><strong>Résolution</strong> : $q = \\dfrac{U_{\\text{ref}}}{2^n} = \\dfrac{5}{2^{10}} = \\dfrac{5}{1024} \\approx 4,9$ mV.<br>$N = \\dfrac{U}{q} = \\dfrac{2,5}{4,9\\times10^{-3}} \\approx 512$, soit $1000000000_2$ ($= 512$).<br>Cohérent : $2,5$ V est la <strong>mi-échelle</strong>, qui correspond à $2^{10}/2 = 512$.` },
      ]
    },
    {
      titre: 'Communication et réseaux',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Transmission série / parallèle',
          contenu: `En transmission <strong>parallèle</strong>, les bits d'un mot sont envoyés <strong>simultanément</strong> sur plusieurs fils (rapide mais coûteux, courte distance).<br>En transmission <strong>série</strong>, les bits sont envoyés <strong>les uns après les autres</strong> sur un seul fil (économique, longue distance) — ex. UART, $\\mathrm{I^2C}$, SPI, CAN.<br>Le <strong>débit</strong> se mesure en <strong>bits par seconde</strong> (bit/s ou bauds).` },
        { type: 'form', label: 'FORM', titre: 'Débit et temps de transmission',
          contenu: `Le <strong>temps de transmission</strong> d'un message de $N$ bits à un débit $D$ (bit/s) vaut :<br>$$t = \\frac{N}{D}$$<br>Pour transmettre une grandeur échantillonnée à $f_e$ et codée sur $n$ bits, le débit nécessaire est au moins $D = n \\times f_e$ (hors bits de contrôle).<br>Exemple : audio $16$ bits à $f_e = 44,1$ kHz → $D = 16 \\times 44100 \\approx 706$ kbit/s par voie.` },
        { type: 'ex', label: 'EX', titre: 'Calculer un temps de transmission',
          contenu: `<strong>Énoncé</strong> : transmettre une trame de $200$ octets sur une liaison à $D = 9600$ bit/s. Durée ?<br><strong>Résolution</strong> : $N = 200 \\times 8 = 1600$ bits.<br>$t = \\dfrac{N}{D} = \\dfrac{1600}{9600} \\approx 0,167$ s $= 167$ ms.<br>En réalité, chaque octet est encadré de bits de start/stop ; le temps réel est légèrement supérieur (overhead du protocole).` },
      ]
    },
    {
      titre: 'Restitution et chaîne complète',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Conversion numérique-analogique (CNA)',
          contenu: `Le <strong>convertisseur numérique-analogique</strong> (CNA) réalise l'opération <strong>inverse</strong> du CAN : il transforme un mot binaire en une <strong>tension analogique</strong>.<br>Tension de sortie : $U = N \\times q$ avec $q = \\dfrac{U_{\\text{ref}}}{2^n}$ le quantum.<br>Il sert à <strong>restituer</strong> un signal (commande d'actionneur, son, affichage) à partir de valeurs calculées numériquement.` },
        { type: 'prop', label: 'PROP', titre: 'Architecture d\'une chaîne d\'information',
          contenu: `Une <strong>chaîne d'acquisition et de traitement</strong> complète enchaîne :<br><strong>capteur → conditionnement → CAN → traitement numérique (calculateur) → CNA → actionneur</strong>.<br>La partie numérique permet des <strong>traitements puissants</strong> (filtrage, calcul de correcteur, décision logique) impossibles en analogique.<br>Le calculateur exécute un <strong>algorithme</strong> cadencé par une horloge (période d'échantillonnage).` },
        { type: 'ex', label: 'EX', titre: 'Reconstituer une tension',
          contenu: `<strong>Énoncé</strong> : un CNA de $8$ bits, pleine échelle $U_{\\text{ref}} = 5$ V, reçoit le mot $N = 192$. Tension de sortie ?<br><strong>Résolution</strong> : quantum $q = \\dfrac{5}{2^8} = \\dfrac{5}{256} \\approx 19,5$ mV.<br>$U = N \\times q = 192 \\times 19,5\\times10^{-3} \\approx 3,75$ V.<br>Vérification : $\\dfrac{192}{256} = 0,75$, soit $75\\%$ de la pleine échelle $= 0,75 \\times 5 = 3,75$ V. Cohérent.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// CHAPITRE 10 — MODÉLISATION NUMÉRIQUE & SIMULATION (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-tsi-simulation',
  matiere: 'si',
  titre: 'Modélisation numérique et simulation',
  ordre: 10,
  filiere: 'term-spe-si',
  enrich: false,
  sections: [
    {
      titre: 'Modèles et validation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Modèle de comportement',
          contenu: `Un <strong>modèle de comportement</strong> est une représentation (équations, schéma-blocs, multiphysique) qui <strong>prédit</strong> les performances d'un système sans avoir à le construire.<br>Il permet de <strong>simuler</strong>, c'est-à-dire calculer la réponse à des sollicitations, et de <strong>dimensionner</strong> avant réalisation.<br>Un modèle est toujours une <strong>approximation</strong> : on choisit son niveau de finesse selon le besoin (hypothèses simplificatrices).` },
        { type: 'def', label: 'DEF', titre: 'Validation d\'un modèle (écart simulé-mesuré)',
          contenu: `Un modèle est <strong>validé</strong> si ses prédictions sont suffisamment proches des <strong>mesures</strong> sur le système réel : l'<strong>écart simulé–mesuré</strong> (écart 3) doit rester dans une tolérance.<br>Si l'écart est trop grand, on <strong>affine le modèle</strong> : ajout de phénomènes négligés (frottements, pertes, inertie, saturation), recalage des paramètres.<br>Un modèle validé devient un outil <strong>prédictif fiable</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Hypothèses simplificatrices',
          contenu: `Pour rendre un modèle exploitable, on pose des <strong>hypothèses</strong> : solides indéformables, liaisons parfaites (sans jeu ni frottement), comportement linéaire, régime établi...<br>Chaque hypothèse <strong>réduit la complexité</strong> mais <strong>éloigne du réel</strong>.<br>L'ingénieur arbitre entre <strong>simplicité</strong> (modèle calculable) et <strong>fidélité</strong> (écart faible), selon la précision attendue.` },
        { type: 'ex', label: 'EX', titre: 'Affiner un modèle pour réduire l\'écart',
          contenu: `<strong>Énoncé</strong> : un modèle prédit un temps de réponse de $0,8$ s ; la mesure donne $1,1$ s. Le modèle néglige les frottements. Comment réduire l'écart ?<br><strong>Résolution</strong> : le modèle est <strong>trop optimiste</strong> car il omet une dissipation. On <strong>ajoute un frottement visqueux</strong> $-f\\,\\omega$ dans l'équation, ce qui <strong>ralentit</strong> la réponse simulée. On <strong>recale</strong> $f$ jusqu'à retrouver $\\approx 1,1$ s. L'écart 3 diminue : le modèle est davantage validé.` },
      ]
    },
    {
      titre: 'Résolution et simulation numériques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Résolution numérique d\'une équation différentielle',
          contenu: `Quand une équation différentielle n'a pas de solution analytique simple, on la résout <strong>numériquement</strong> : on calcule la solution <strong>pas à pas</strong> dans le temps.<br>On discrétise le temps en instants $t_k = k\\,h$ ($h$ = <strong>pas de calcul</strong>) et on approche la dérivée par un <strong>taux de variation</strong>.<br>Outils : tableur, Python (bibliothèques scientifiques), logiciels de simulation multiphysique.` },
        { type: 'meth', label: 'METH', titre: 'Méthode d\'Euler explicite',
          contenu: `Pour résoudre $\\dot{y} = f(t, y)$ avec $y(t_0) = y_0$, la <strong>méthode d'Euler</strong> approxime :<br>$$y_{k+1} = y_k + h \\, f(t_k, y_k)$$<br>On part de $y_0$ et on avance de pas en pas. <strong>Plus le pas $h$ est petit</strong>, plus la solution est précise, mais plus le calcul est long.<br>Un pas trop grand peut rendre la méthode <strong>imprécise</strong> voire instable.` },
        { type: 'ex', label: 'EX', titre: 'Un pas de la méthode d\'Euler',
          contenu: `<strong>Énoncé</strong> : on résout $\\dot{y} = -2y$, $y(0) = 1$, avec un pas $h = 0,1$. Calculer $y_1$ et $y_2$.<br><strong>Résolution</strong> : $f(t,y) = -2y$.<br>$y_1 = y_0 + h\\,f(t_0,y_0) = 1 + 0,1 \\times (-2 \\times 1) = 1 - 0,2 = 0,8$.<br>$y_2 = y_1 + h\\,f(t_1,y_1) = 0,8 + 0,1 \\times (-2 \\times 0,8) = 0,8 - 0,16 = 0,64$.<br>La solution exacte est $y = e^{-2t}$ ; à $t=0,2$, $e^{-0,4} \\approx 0,67$ : Euler donne $0,64$, écart dû au pas.` },
      ]
    },
    {
      titre: 'Exploitation des résultats de simulation',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Lire une réponse simulée',
          contenu: `<strong>Méthode (exploitation d'un graphe de réponse) :</strong><br>1. Repérer la <strong>valeur finale</strong> (régime permanent) → précision/gain.<br>2. Mesurer le <strong>temps de réponse à 5 %</strong> → rapidité.<br>3. Repérer un éventuel <strong>dépassement</strong> et sa valeur → stabilité/amortissement.<br>4. Comparer aux <strong>exigences</strong> du cahier des charges (écart souhaité–simulé).<br>5. Conclure sur le respect ou non des performances.` },
        { type: 'prop', label: 'PROP', titre: 'Optimisation par simulation',
          contenu: `La simulation permet d'<strong>optimiser</strong> un système <strong>sans prototypage</strong> : on fait varier des paramètres (gain du correcteur, raideur, masse, rapport de réduction) et on observe l'effet sur les performances.<br>On recherche le jeu de paramètres qui <strong>satisfait toutes les exigences</strong> (compromis stabilité/précision/rapidité).<br>Gain majeur : <strong>réduction des coûts</strong> et du temps de développement.` },
        { type: 'ex', label: 'EX', titre: 'Valider un réglage par simulation',
          contenu: `<strong>Énoncé</strong> : exigences — temps de réponse $t_{5\\%} \\leq 0,5$ s, dépassement $\\leq 10\\%$, erreur statique nulle. La simulation d'un correcteur PI donne $t_{5\\%} = 0,4$ s, dépassement $7\\%$, erreur statique $0$. Conclure.<br><strong>Résolution</strong> : on compare chaque critère : $0,4 \\leq 0,5$ ✔, $7\\% \\leq 10\\%$ ✔, erreur nulle ✔ (grâce à l'action intégrale). <strong>Toutes les exigences sont satisfaites</strong> : le réglage est validé. On pourra le mettre en œuvre puis vérifier sur le système réel (écart simulé–mesuré).` },
      ]
    },
    {
      titre: 'Modèles causaux et limites',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Modèle causal et acausal',
          contenu: `Un <strong>modèle causal</strong> (schéma-blocs) impose un <strong>sens de circulation</strong> de l'information : chaque bloc a des entrées et des sorties définies (orienté cause → effet).<br>Un <strong>modèle acausal</strong> (multiphysique, à composants) décrit les <strong>relations physiques</strong> entre grandeurs sans imposer de sens : le solveur détermine les inconnues.<br>Le causal convient à la <strong>commande</strong> ; l'acausal au <strong>comportement physique</strong> détaillé.` },
        { type: 'prop', label: 'PROP', titre: 'Limites d\'un modèle',
          contenu: `Tout modèle a un <strong>domaine de validité</strong> : hors de ce domaine, ses prédictions sont fausses.<br>Phénomènes souvent négligés et sources d'écart : <strong>saturations</strong> (limites physiques), <strong>non-linéarités</strong>, <strong>jeux mécaniques</strong>, <strong>retards</strong>, <strong>bruit de mesure</strong>.<br>Un modèle linéaire n'est valable qu'<strong>autour d'un point de fonctionnement</strong> : pour de grandes variations, il faut un modèle plus riche.` },
        { type: 'ex', label: 'EX', titre: 'Détecter une saturation négligée',
          contenu: `<strong>Énoncé</strong> : un modèle prédit que la commande d'un moteur monte à $40$ V, mais le variateur réel est limité à $24$ V. Conséquence sur l'écart simulé–mesuré ?<br><strong>Résolution</strong> : le modèle <strong>ignore la saturation</strong> à $24$ V, il surestime donc la rapidité (la commande réelle est <strong>écrêtée</strong>). La mesure sera <strong>plus lente</strong> que la simulation. Il faut <strong>ajouter un bloc de saturation</strong> $[-24; +24]$ V dans le modèle pour réduire l'écart 3 et obtenir une prédiction fiable.` },
      ]
    },
  ]
},

];
