// Contenu cours — 4ème — Physique-Chimie
// Format : DATA exporté, consommé par le seed

export const DATA = [

// ════════════════════════════════════════════════════════════════════════════
// CHAPITRES ENRICHIS (id déjà existants)
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'phch-4e-mecaflui',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Mécanique et fluides',
  ordre: 1,
  enrich: true,
  sections: [
    {
      titre: 'Forces et actions mécaniques',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Force et action mécanique',
          contenu: `Une <strong>action mécanique</strong> est capable de :<br>— mettre en mouvement ou modifier le mouvement d'un objet ;<br>— le déformer ;<br>— le maintenir en équilibre.<br>On modélise une action mécanique par une <strong>force</strong>, caractérisée par 4 éléments : son <strong>point d'application</strong>, sa <strong>direction</strong>, son <strong>sens</strong> et sa <strong>valeur</strong> (en newtons, symbole N).<br>Une force se représente par un <strong>vecteur</strong> (une flèche).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Poids d\'un objet',
          contenu: `Le <strong>poids</strong> $P$ d'un objet est la force d'attraction gravitationnelle exercée par la Terre (ou un astre) sur cet objet.<br>Caractéristiques du poids :<br>— direction : <strong>verticale</strong> ;<br>— sens : <strong>vers le bas</strong> (vers le centre de la Terre) ;<br>— point d'application : le <strong>centre de gravité</strong> de l'objet ;<br>— valeur : en newtons (N).`
        },
        {
          type: 'form', label: 'FORM', titre: 'Relation poids-masse',
          contenu: `$$P = m \\times g$$$P$ : poids en newtons (N) &nbsp;·&nbsp; $m$ : masse en kilogrammes (kg) &nbsp;·&nbsp; $g$ : intensité de la pesanteur en N/kg.<br>Sur Terre, $g \\approx 9{,}8$ N/kg (souvent arrondi à $10$ N/kg).<br>La <strong>masse</strong> $m$ (en kg) est invariable : elle est la même partout. Le <strong>poids</strong> $P$ dépend du lieu (il diffère sur la Lune, où $g_{Lune} \\approx 1{,}6$ N/kg).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul d\'un poids',
          contenu: `Un objet a une masse $m = 2{,}5$ kg. Calculer son poids sur Terre ($g = 9{,}8$ N/kg) puis sur la Lune ($g_{Lune} = 1{,}6$ N/kg).<br><br><strong>Solution :</strong><br>Sur Terre : $P = m \\times g = 2{,}5 \\times 9{,}8 = 24{,}5$ N.<br>Sur la Lune : $P_{Lune} = 2{,}5 \\times 1{,}6 = 4{,}0$ N.<br>La masse reste $2{,}5$ kg dans les deux cas ; seul le poids change.`
        }
      ]
    },
    {
      titre: 'Pression et fluides',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Pression',
          contenu: `La <strong>pression</strong> mesure la répartition d'une force pressante sur une surface.<br>$$P = \\frac{F}{S}$$$P$ : pression en pascals (Pa) &nbsp;·&nbsp; $F$ : force pressante en newtons (N) &nbsp;·&nbsp; $S$ : surface en mètres carrés (m²).<br>Pour une même force, plus la surface est petite, plus la pression est grande (d'où l'efficacité d'un couteau aiguisé ou d'un clou pointu).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Pression atmosphérique',
          contenu: `L'air qui nous entoure exerce une pression : la <strong>pression atmosphérique</strong>.<br>Au niveau de la mer : $P_{atm} \\approx 10^5$ Pa $= 1013$ hPa $= 1$ atm.<br>Elle <strong>diminue avec l'altitude</strong> (l'air est moins dense en altitude).<br>Elle s'exerce dans <strong>toutes les directions</strong> et se mesure avec un <strong>baromètre</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Compressibilité des fluides',
          contenu: `Un <strong>fluide</strong> est un corps qui peut s'écouler (liquide ou gaz).<br>— Un <strong>gaz</strong> est <strong>compressible</strong> : son volume diminue quand on augmente la pression (les molécules sont éloignées).<br>— Un <strong>liquide</strong> est <strong>quasi incompressible</strong> : son volume varie très peu sous l'effet de la pression (les molécules sont au contact).<br>À température constante, pour une masse de gaz : si $P$ augmente, $V$ diminue.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Pression exercée par un objet posé',
          contenu: `Un pavé de poids $P = 200$ N repose sur une face de surface $S = 0{,}5$ m². Calculer la pression exercée sur le sol.<br><br><strong>Solution :</strong><br>$$P_{pression} = \\frac{F}{S} = \\frac{200}{0{,}5} = 400 \\text{ Pa}$$Si on le pose sur une face plus petite ($S = 0{,}1$ m²), la pression devient $200 / 0{,}1 = 2000$ Pa : elle augmente quand la surface diminue.`
        }
      ]
    },
    {
      titre: 'Masse volumique et flottabilité',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Masse volumique',
          contenu: `La <strong>masse volumique</strong> $\\rho$ (lettre grecque « rhô ») est la masse d'un corps par unité de volume.<br>$$\\rho = \\frac{m}{V}$$$\\rho$ : en kg/m³ ou g/cm³ ou g/mL &nbsp;·&nbsp; $m$ : masse &nbsp;·&nbsp; $V$ : volume.<br>Exemples : eau $\\rho_{eau} = 1000$ kg/m³ $= 1$ g/cm³ ; fer $\\approx 7{,}9$ g/cm³ ; huile $\\approx 0{,}92$ g/cm³ ; air $\\approx 1{,}2$ kg/m³.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer la masse volumique d\'un solide',
          contenu: `<strong>1.</strong> Mesurer la <strong>masse</strong> $m$ du solide avec une balance.<br><strong>2.</strong> Mesurer son <strong>volume</strong> $V$ par déplacement d'eau dans une éprouvette graduée : $V = V_{final} - V_{initial}$.<br><strong>3.</strong> Calculer $\\rho = \\dfrac{m}{V}$.<br>Attention aux unités : si $m$ est en g et $V$ en mL (= cm³), alors $\\rho$ est en g/mL.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Condition de flottabilité',
          contenu: `Un corps <strong>flotte</strong> sur un liquide si sa masse volumique est <strong>inférieure</strong> à celle du liquide ; il <strong>coule</strong> si elle est <strong>supérieure</strong>.<br>— $\\rho_{corps} < \\rho_{liquide}$ → le corps flotte ;<br>— $\\rho_{corps} > \\rho_{liquide}$ → le corps coule.<br>L'huile ($0{,}92$ g/cm³) flotte sur l'eau ($1$ g/cm³). Un glaçon (glace $\\approx 0{,}92$ g/cm³) flotte sur l'eau liquide.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Le corps flotte-t-il ?',
          contenu: `Un cube de plastique de masse $m = 18$ g et de volume $V = 20$ cm³ est plongé dans l'eau. Flotte-t-il ?<br><br><strong>Solution :</strong><br>$$\\rho = \\frac{m}{V} = \\frac{18}{20} = 0{,}9 \\text{ g/cm}^3$$Comme $\\rho = 0{,}9$ g/cm³ $<$ $\\rho_{eau} = 1$ g/cm³, le cube <strong>flotte</strong>.`
        }
      ]
    },
    {
      titre: 'Mouvements et trajectoires',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Référentiel et relativité du mouvement',
          contenu: `Décrire le mouvement d'un objet nécessite de choisir un <strong>référentiel</strong> (objet de référence supposé fixe).<br>Le mouvement est <strong>relatif</strong> : un même objet peut être immobile dans un référentiel et en mouvement dans un autre.<br>Exemple : un passager assis dans un train est immobile par rapport au wagon, mais en mouvement par rapport au sol (au quai).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Trajectoire',
          contenu: `La <strong>trajectoire</strong> d'un point est l'ensemble des positions successives occupées par ce point au cours du temps, dans un référentiel donné.<br>— Trajectoire <strong>rectiligne</strong> : ligne droite.<br>— Trajectoire <strong>circulaire</strong> : cercle.<br>— Trajectoire <strong>curviligne</strong> : courbe quelconque.<br>La forme de la trajectoire dépend du référentiel choisi.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Vitesse moyenne',
          contenu: `La <strong>vitesse moyenne</strong> est la distance parcourue divisée par la durée du parcours :<br>$$v = \\frac{d}{t}$$$v$ : vitesse &nbsp;·&nbsp; $d$ : distance &nbsp;·&nbsp; $t$ : durée.<br>Unités : si $d$ en mètres et $t$ en secondes, $v$ en m/s. En km/h si $d$ en km et $t$ en h.<br>Conversion : $1$ m/s $= 3{,}6$ km/h.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Calcul de vitesse et conversion',
          contenu: `Une voiture parcourt $d = 150$ km en $t = 2$ h. Calculer sa vitesse moyenne en km/h puis en m/s.<br><br><strong>Solution :</strong><br>$$v = \\frac{d}{t} = \\frac{150}{2} = 75 \\text{ km/h}$$Conversion : $v = \\dfrac{75}{3{,}6} \\approx 20{,}8$ m/s.`
        }
      ]
    }
  ]
},

{
  id: 'phch-4e-chimorg',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Chimie — Réactions et transformations',
  ordre: 5,
  enrich: true,
  sections: [
    {
      titre: 'Transformation chimique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Transformation chimique',
          contenu: `Une <strong>transformation chimique</strong> est une modification de la matière au cours de laquelle des <strong>espèces chimiques</strong> disparaissent (les <strong>réactifs</strong>) tandis que d'autres apparaissent (les <strong>produits</strong>).<br>Elle se distingue d'une <strong>transformation physique</strong> (changement d'état) où la nature des espèces ne change pas (l'eau qui gèle reste de l'eau).<br>Indices d'une transformation chimique : changement de couleur, dégagement de gaz, formation d'un solide, variation de température.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Réactifs et produits',
          contenu: `— Les <strong>réactifs</strong> sont les espèces chimiques présentes avant la transformation : elles sont consommées.<br>— Les <strong>produits</strong> sont les espèces chimiques formées au cours de la transformation.<br>On schématise par un bilan :<br>$$\\text{réactifs} \\longrightarrow \\text{produits}$$Exemple : carbone + dioxygène $\\longrightarrow$ dioxyde de carbone.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conservation de la masse',
          contenu: `Au cours d'une transformation chimique, la <strong>masse totale est conservée</strong> : la masse des produits est égale à la masse des réactifs.<br><strong>Loi de Lavoisier</strong> : « Rien ne se perd, rien ne se crée, tout se transforme. »<br>Si un gaz s'échappe (système ouvert), la masse semble diminuer : il faut réaliser la transformation en <strong>système fermé</strong> pour vérifier la conservation.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Conservation de la masse',
          contenu: `Dans un ballon fermé, on fait réagir $4{,}0$ g de fer avec $2{,}3$ g de soufre. On obtient du sulfure de fer. Quelle est la masse de produit formé ?<br><br><strong>Solution :</strong><br>D'après la conservation de la masse :<br>$$m_{produit} = m_{fer} + m_{soufre} = 4{,}0 + 2{,}3 = 6{,}3 \\text{ g}$$`
        }
      ]
    },
    {
      titre: 'Équation de réaction',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Conservation des atomes',
          contenu: `Au cours d'une transformation chimique, les <strong>atomes se conservent</strong> : ils ne sont ni créés ni détruits, ils se <strong>réorganisent</strong> en formant de nouvelles molécules.<br>Le nombre d'atomes de chaque élément est donc <strong>identique</strong> avant et après la réaction.<br>C'est cette conservation des atomes qui explique la conservation de la masse.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Équation de réaction',
          contenu: `L'<strong>équation de réaction</strong> traduit la transformation à l'aide des formules chimiques :<br>$$\\text{réactifs} \\longrightarrow \\text{produits}$$Elle doit être <strong>ajustée</strong> (équilibrée) : on place des <strong>nombres stœchiométriques</strong> devant les formules pour que chaque élément soit en même quantité de part et d'autre.<br>Exemple ajusté : $2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Ajuster une équation de réaction',
          contenu: `<strong>1.</strong> Écrire les formules correctes des réactifs et des produits (on ne les modifie jamais).<br><strong>2.</strong> Compter les atomes de chaque élément à gauche et à droite.<br><strong>3.</strong> Placer des <strong>nombres stœchiométriques</strong> devant les formules pour égaliser chaque élément.<br><strong>4.</strong> Vérifier : chaque type d'atome doit être en nombre égal des deux côtés.<br>Astuce : ajuster en dernier les atomes d'oxygène et d'hydrogène.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Ajuster la combustion du méthane',
          contenu: `Ajuster : $\\mathrm{CH_4} + \\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} + \\mathrm{H_2O}$.<br><br><strong>Solution :</strong><br>Carbone : 1 = 1 (OK). Hydrogène : 4 à gauche → mettre $2\\,\\mathrm{H_2O}$ (4 H). Oxygène : à droite $2 + 2 = 4$ O → mettre $2\\,\\mathrm{O_2}$ (4 O).<br>$$\\mathrm{CH_4} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} + 2\\,\\mathrm{H_2O}$$Vérification : C : 1=1 ; H : 4=4 ; O : 4=4. Équation ajustée.`
        }
      ]
    },
    {
      titre: 'Les combustions',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Combustion',
          contenu: `Une <strong>combustion</strong> est une transformation chimique au cours de laquelle un <strong>combustible</strong> réagit avec un <strong>comburant</strong> (le dioxygène $\\mathrm{O_2}$ de l'air), en libérant de l'énergie (chaleur, lumière).<br>Le <strong>triangle du feu</strong> réunit les 3 conditions nécessaires : combustible, comburant et une source de chaleur (énergie d'activation). Supprimer un côté éteint le feu.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Combustion du carbone',
          contenu: `Le carbone brûle dans le dioxygène en produisant du <strong>dioxyde de carbone</strong> $\\mathrm{CO_2}$ :<br>$$\\mathrm{C} + \\mathrm{O_2} \\longrightarrow \\mathrm{CO_2}$$Le $\\mathrm{CO_2}$ se reconnaît car il <strong>trouble l'eau de chaux</strong>.<br>En cas de manque de dioxygène (combustion incomplète), il se forme du <strong>monoxyde de carbone</strong> $\\mathrm{CO}$, gaz toxique et mortel.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Combustion du méthane',
          contenu: `La combustion complète du méthane (gaz naturel) produit du dioxyde de carbone et de l'eau :<br>$$\\mathrm{CH_4} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} + 2\\,\\mathrm{H_2O}$$Tests des produits : l'<strong>eau de chaux se trouble</strong> ($\\mathrm{CO_2}$) ; le <strong>sulfate de cuivre anhydre</strong> blanc devient bleu (présence d'eau).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Identifier les produits d\'une combustion',
          contenu: `Lors de la combustion d'une bougie (cire = hydrocarbure), on place un bécher froid au-dessus de la flamme et de l'eau de chaux à proximité.<br><br><strong>Observations et conclusion :</strong><br>— De la buée se forme sur le bécher → présence d'<strong>eau</strong> $\\mathrm{H_2O}$.<br>— L'eau de chaux se trouble → présence de <strong>dioxyde de carbone</strong> $\\mathrm{CO_2}$.<br>La cire contient donc du carbone et de l'hydrogène : c'est un hydrocarbure.`
        }
      ]
    },
    {
      titre: 'Acides, bases et pH',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Échelle de pH',
          contenu: `Le <strong>pH</strong> mesure l'acidité d'une solution aqueuse. Il varie de $0$ à $14$ :<br>— pH $< 7$ : solution <strong>acide</strong> ;<br>— pH $= 7$ : solution <strong>neutre</strong> (eau pure) ;<br>— pH $> 7$ : solution <strong>basique</strong>.<br>On le mesure avec du <strong>papier pH</strong> ou un <strong>pH-mètre</strong>.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Ions responsables de l\'acidité',
          contenu: `L'acidité d'une solution est due à la présence d'ions <strong>hydrogène</strong> $\\mathrm{H^+}$ (ou oxonium $\\mathrm{H_3O^+}$).<br>La basicité est due aux ions <strong>hydroxyde</strong> $\\mathrm{OH^-}$.<br>— Plus une solution est <strong>acide</strong>, plus elle contient d'ions $\\mathrm{H^+}$ et plus son pH est <strong>faible</strong>.<br>— Diluer une solution acide avec de l'eau <strong>rapproche son pH de 7</strong>.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Sécurité avec les acides',
          contenu: `Les solutions acides ou basiques concentrées sont <strong>corrosives</strong> et dangereuses.<br>Règles de sécurité :<br>— porter <strong>lunettes</strong> et <strong>gants</strong> ;<br>— <strong>toujours verser l'acide dans l'eau</strong>, jamais l'eau dans l'acide (risque de projection) ;<br>— en cas de contact, rincer abondamment à l'eau.`
        }
      ]
    },
    {
      titre: 'Tests d\'identification des ions',
      cartes: [
        {
          type: 'meth', label: 'METH', titre: 'Tests des ions métalliques',
          contenu: `On identifie certains ions en solution par ajout de soude (hydroxyde de sodium) qui forme un précipité coloré :<br>— ion <strong>cuivre II</strong> $\\mathrm{Cu^{2+}}$ → précipité <strong>bleu</strong> ;<br>— ion <strong>fer II</strong> $\\mathrm{Fe^{2+}}$ → précipité <strong>vert</strong> ;<br>— ion <strong>fer III</strong> $\\mathrm{Fe^{3+}}$ → précipité <strong>rouille (orangé)</strong> ;<br>— ion <strong>zinc</strong> $\\mathrm{Zn^{2+}}$ → précipité <strong>blanc</strong>.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Tests d\'autres ions',
          contenu: `— ion <strong>chlorure</strong> $\\mathrm{Cl^-}$ : ajout de nitrate d'argent → précipité <strong>blanc</strong> qui noircit à la lumière ;<br>— ion <strong>hydrogène</strong> $\\mathrm{H^+}$ : le papier pH vire au rouge (pH $< 7$) ;<br>— ion <strong>hydroxyde</strong> $\\mathrm{OH^-}$ : le papier pH vire au bleu (pH $> 7$).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Identifier un ion par test',
          contenu: `On ajoute de la soude à une solution inconnue : un précipité <strong>bleu</strong> apparaît. On ajoute du nitrate d'argent à un autre échantillon : un précipité <strong>blanc</strong> se forme.<br><br><strong>Conclusion :</strong><br>Le précipité bleu indique l'ion cuivre $\\mathrm{Cu^{2+}}$ ; le précipité blanc (nitrate d'argent) indique l'ion chlorure $\\mathrm{Cl^-}$. La solution contient du chlorure de cuivre $\\mathrm{CuCl_2}$.`
        }
      ]
    }
  ]
},

{
  id: 'phch-4e-elec',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Électricité avancée',
  ordre: 7,
  enrich: true,
  sections: [
    {
      titre: 'Intensité du courant et loi des nœuds',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Intensité du courant électrique',
          contenu: `L'<strong>intensité</strong> $I$ du courant mesure le débit de charges électriques dans un circuit.<br>Elle se mesure en <strong>ampères</strong> (A) avec un <strong>ampèremètre</strong> branché <strong>en série</strong> dans le circuit.<br>Sous-multiples : $1$ A $= 1000$ mA. L'ampèremètre se branche par sa borne « A » (entrée) et « COM » (sortie).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Intensité dans un circuit série',
          contenu: `Dans un circuit en <strong>série</strong> (un seul chemin), l'intensité du courant est <strong>la même en tout point</strong> :<br>$$I_1 = I_2 = I_3 = \\dots$$Le courant n'est pas « consommé » : il a la même valeur avant et après chaque dipôle. C'est la loi d'unicité de l'intensité.`
        },
        {
          type: 'th', label: 'THM', titre: 'Loi des nœuds',
          contenu: `Un <strong>nœud</strong> est un point du circuit où se rejoignent au moins trois fils.<br><strong>Loi des nœuds</strong> : la somme des intensités des courants qui <strong>arrivent</strong> à un nœud est égale à la somme des intensités des courants qui en <strong>repartent</strong>.<br>$$I = I_1 + I_2$$Conséquence : dans un circuit en dérivation, l'intensité dans la branche principale est la somme des intensités des branches dérivées.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Appliquer la loi des nœuds',
          contenu: `Au nœud A arrive un courant principal $I = 0{,}45$ A. Il se sépare en deux branches : la première porte $I_1 = 0{,}30$ A. Quelle est l'intensité $I_2$ dans la seconde branche ?<br><br><strong>Solution :</strong><br>Loi des nœuds : $I = I_1 + I_2$, donc<br>$$I_2 = I - I_1 = 0{,}45 - 0{,}30 = 0{,}15 \\text{ A}$$`
        }
      ]
    },
    {
      titre: 'Tension et loi des mailles',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Tension électrique',
          contenu: `La <strong>tension</strong> $U$ entre deux points est une grandeur mesurant l'énergie transportée par le courant entre ces points.<br>Elle se mesure en <strong>volts</strong> (V) avec un <strong>voltmètre</strong> branché <strong>en dérivation</strong> (en parallèle) aux bornes du dipôle.<br>Une tension est orientée : $U_{AB}$ se note avec une flèche de B vers A.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Tension dans un circuit en dérivation',
          contenu: `Des dipôles branchés <strong>en dérivation</strong> (en parallèle) sont soumis à la <strong>même tension</strong> :<br>$$U_1 = U_2 = U_{générateur}$$C'est la loi d'unicité de la tension aux bornes de dipôles en parallèle.`
        },
        {
          type: 'th', label: 'THM', titre: 'Loi des mailles (loi d\'additivité des tensions)',
          contenu: `Dans une <strong>maille</strong> (boucle fermée du circuit), la tension du générateur est égale à la <strong>somme des tensions</strong> des dipôles en série :<br>$$U_{générateur} = U_1 + U_2 + \\dots$$Pour un circuit série à deux récepteurs : $U_g = U_1 + U_2$.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Appliquer la loi des mailles',
          contenu: `Un générateur de tension $U_g = 6{,}0$ V alimente deux lampes en série. Aux bornes de la première lampe, on mesure $U_1 = 2{,}5$ V. Quelle est la tension $U_2$ aux bornes de la seconde ?<br><br><strong>Solution :</strong><br>Loi des mailles : $U_g = U_1 + U_2$, donc<br>$$U_2 = U_g - U_1 = 6{,}0 - 2{,}5 = 3{,}5 \\text{ V}$$`
        }
      ]
    },
    {
      titre: 'Loi d\'Ohm et résistance',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Résistance électrique',
          contenu: `Une <strong>résistance</strong> (ou conducteur ohmique) est un dipôle qui s'oppose au passage du courant.<br>Sa valeur $R$ s'exprime en <strong>ohms</strong> (symbole $\\Omega$).<br>Plus $R$ est grande, plus l'intensité du courant qui la traverse est faible (à tension donnée). On la mesure avec un <strong>ohmmètre</strong> (hors circuit) ou par un code de couleurs.`
        },
        {
          type: 'th', label: 'THM', titre: 'Loi d\'Ohm',
          contenu: `Pour un conducteur ohmique, la tension à ses bornes est <strong>proportionnelle</strong> à l'intensité qui le traverse :<br>$$U = R \\times I$$$U$ : tension en volts (V) &nbsp;·&nbsp; $R$ : résistance en ohms ($\\Omega$) &nbsp;·&nbsp; $I$ : intensité en ampères (A).<br>La caractéristique $U = f(I)$ d'un conducteur ohmique est une <strong>droite passant par l'origine</strong> de coefficient directeur $R$.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Formules dérivées de la loi d\'Ohm',
          contenu: `À partir de $U = R \\times I$, on tire :<br>$$I = \\frac{U}{R} \\qquad R = \\frac{U}{I}$$Attention aux unités : $U$ en V, $I$ en A, $R$ en $\\Omega$.<br>Si $I$ est donné en mA, le convertir en A avant le calcul ($1$ mA $= 0{,}001$ A).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Appliquer la loi d\'Ohm',
          contenu: `Une résistance $R = 220\\ \\Omega$ est parcourue par un courant $I = 20$ mA. Calculer la tension $U$ à ses bornes.<br><br><strong>Solution :</strong><br>Convertir : $I = 20$ mA $= 0{,}020$ A.<br>$$U = R \\times I = 220 \\times 0{,}020 = 4{,}4 \\text{ V}$$`
        }
      ]
    },
    {
      titre: 'Puissance et énergie électrique',
      cartes: [
        {
          type: 'form', label: 'FORM', titre: 'Puissance électrique',
          contenu: `La <strong>puissance</strong> $P$ consommée par un dipôle est :<br>$$P = U \\times I$$$P$ : puissance en watts (W) &nbsp;·&nbsp; $U$ : tension en V &nbsp;·&nbsp; $I$ : intensité en A.<br>Tout appareil porte sur sa plaque signalétique sa puissance nominale (ex. : ampoule $60$ W, four $2000$ W).`
        },
        {
          type: 'form', label: 'FORM', titre: 'Énergie électrique',
          contenu: `L'<strong>énergie</strong> $E$ consommée pendant une durée $t$ est :<br>$$E = P \\times t$$Si $P$ en watts et $t$ en secondes, $E$ est en <strong>joules</strong> (J).<br>En pratique, l'énergie électrique se facture en <strong>kilowattheures</strong> : $1$ kWh $= 3{,}6 \\times 10^6$ J. On utilise alors $E$ (kWh) $= P$ (kW) $\\times t$ (h).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Effet Joule',
          contenu: `Le passage du courant dans une résistance dissipe de l'énergie sous forme de <strong>chaleur</strong> : c'est l'<strong>effet Joule</strong>.<br>La puissance dissipée vaut :<br>$$P = R \\times I^2$$Cet effet est utile (radiateur, grille-pain, fer à repasser) mais peut être indésirable (échauffement des câbles, risque d'incendie).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Énergie consommée par un appareil',
          contenu: `Un radiateur de puissance $P = 1500$ W fonctionne pendant $t = 3$ h. Calculer l'énergie consommée en kWh.<br><br><strong>Solution :</strong><br>$P = 1500$ W $= 1{,}5$ kW.<br>$$E = P \\times t = 1{,}5 \\times 3 = 4{,}5 \\text{ kWh}$$Soit en joules : $4{,}5 \\times 3{,}6 \\times 10^6 = 1{,}62 \\times 10^7$ J.`
        }
      ]
    },
    {
      titre: 'Sécurité électrique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Courant continu et courant alternatif',
          contenu: `— Le <strong>courant continu</strong> (CC ou DC) circule toujours dans le même sens (piles, batteries).<br>— Le <strong>courant alternatif</strong> (CA ou AC) change périodiquement de sens (secteur EDF, $230$ V, $50$ Hz).<br>La <strong>fréquence</strong> $50$ Hz signifie $50$ alternances complètes par seconde.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Dangers et protections',
          contenu: `Le courant électrique présente deux dangers principaux : l'<strong>électrisation</strong> (passage du courant dans le corps) et les <strong>courts-circuits</strong> (surintensité, échauffement, incendie).<br>Protections : le <strong>fusible</strong> et le <strong>disjoncteur</strong> coupent le circuit en cas de surintensité ; le <strong>fil de terre</strong> et le <strong>disjoncteur différentiel</strong> protègent des électrisations.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Court-circuit',
          contenu: `Un <strong>court-circuit</strong> se produit quand on relie directement les deux bornes d'un générateur (ou d'un dipôle) par un fil de résistance quasi nulle.<br>L'intensité devient très grande ($I = U/R$ avec $R \\to 0$), ce qui provoque un échauffement dangereux.<br>Règle : ne jamais relier directement les bornes d'une pile ; toujours inclure un récepteur.`
        }
      ]
    }
  ]
},

// ════════════════════════════════════════════════════════════════════════════
// NOUVEAUX CHAPITRES
// ════════════════════════════════════════════════════════════════════════════

{
  id: 'phch-4e-vitesse',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Vitesse de la lumière et du son',
  ordre: 2,
  enrich: false,
  sections: [
    {
      titre: 'Propagation de la lumière',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Propagation rectiligne de la lumière',
          contenu: `Dans un milieu <strong>transparent et homogène</strong> (air, eau, verre), la lumière se propage <strong>en ligne droite</strong> : c'est la propagation rectiligne.<br>On modélise le trajet de la lumière par un <strong>rayon lumineux</strong> (une demi-droite orientée dans le sens de propagation).<br>Cette propriété explique la formation des ombres.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Vitesse de la lumière',
          contenu: `La lumière se propage à une vitesse très grande. Dans le vide (et quasiment dans l'air) :<br>$$c \\approx 3{,}00 \\times 10^8 \\text{ m/s} = 300\\,000 \\text{ km/s}$$C'est la vitesse la plus grande possible dans l'Univers.<br>Dans un milieu matériel (eau, verre), la lumière va <strong>moins vite</strong> que dans le vide.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Année-lumière',
          contenu: `L'<strong>année-lumière</strong> (a.l.) est la distance parcourue par la lumière dans le vide en <strong>une année</strong>. C'est une unité de distance (pas de temps) utilisée en astronomie.<br>$$1 \\text{ a.l.} = c \\times t_{1\\,an} \\approx 9{,}5 \\times 10^{15} \\text{ m}$$Voir une étoile à 100 a.l., c'est la voir telle qu'elle était il y a 100 ans.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Distance Terre-Soleil',
          contenu: `La lumière du Soleil met $t = 500$ s pour atteindre la Terre. Calculer la distance Terre-Soleil.<br><br><strong>Solution :</strong><br>$$d = c \\times t = 3{,}00 \\times 10^8 \\times 500 = 1{,}5 \\times 10^{11} \\text{ m}$$Soit $150$ millions de kilomètres.`
        }
      ]
    },
    {
      titre: 'Propagation du son',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Nature et milieu de propagation du son',
          contenu: `Un <strong>son</strong> est une vibration de la matière (de l'air, d'un solide, d'un liquide) qui se propage de proche en proche.<br>Le son a besoin d'un <strong>milieu matériel</strong> pour se propager : il <strong>ne se propage pas dans le vide</strong> (contrairement à la lumière).<br>Une source sonore met en vibration le milieu qui l'entoure.`
        },
        {
          type: 'form', label: 'FORM', titre: 'Vitesse du son',
          contenu: `La vitesse du son dépend du milieu. Dans l'air à $20$ °C :<br>$$v_{son} \\approx 340 \\text{ m/s}$$Elle est plus grande dans l'eau ($\\approx 1500$ m/s) et dans les solides ($\\approx 5000$ m/s dans l'acier).<br>La vitesse du son est <strong>très inférieure</strong> à celle de la lumière (environ un million de fois plus lente).`
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer une distance par un écho',
          contenu: `On peut déterminer une distance en mesurant la durée d'un trajet aller-retour du son (écho, sonar).<br>Le son parcourt l'<strong>aller-retour</strong>, soit $2d$, pendant la durée $t$ :<br>$$2d = v_{son} \\times t \\quad\\Rightarrow\\quad d = \\frac{v_{son} \\times t}{2}$$`
        },
        {
          type: 'ex', label: 'EX', titre: 'Distance d\'un orage',
          contenu: `On voit un éclair, puis on entend le tonnerre $6$ s plus tard. À quelle distance est l'orage ? (On néglige le temps de trajet de la lumière.)<br><br><strong>Solution :</strong><br>$$d = v_{son} \\times t = 340 \\times 6 = 2040 \\text{ m} \\approx 2 \\text{ km}$$La lumière de l'éclair arrive quasi instantanément, le son met $6$ s : c'est lui qui donne la distance.`
        }
      ]
    },
    {
      titre: 'Comparer son et lumière',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Lumière et son : différences essentielles',
          contenu: `Comparaison à retenir :<br>— la <strong>lumière</strong> se propage dans le <strong>vide</strong> et les milieux transparents, à $c \\approx 3{,}00 \\times 10^8$ m/s ;<br>— le <strong>son</strong> a besoin d'un <strong>milieu matériel</strong> et se propage bien plus lentement ($\\approx 340$ m/s dans l'air).<br>Conséquence : lors d'un phénomène (orage, feu d'artifice), on perçoit toujours la lumière <strong>avant</strong> le son.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer la vitesse du son par un décalage',
          contenu: `<strong>1.</strong> Se placer à une distance $d$ connue d'une source sonore et lumineuse simultanée.<br><strong>2.</strong> Mesurer la durée $t$ entre la perception du signal lumineux (instantané) et celle du son.<br><strong>3.</strong> Calculer $v_{son} = \\dfrac{d}{t}$.<br>La lumière étant quasi instantanée sur de courtes distances, le décalage mesuré correspond au trajet du son.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Calculer la vitesse du son',
          contenu: `À $680$ m d'une cible, un observateur voit l'impact d'un projectile puis entend le bruit $2{,}0$ s plus tard. Calculer la vitesse du son.<br><br><strong>Solution :</strong><br>$$v_{son} = \\frac{d}{t} = \\frac{680}{2{,}0} = 340 \\text{ m/s}$$Valeur cohérente avec la vitesse du son dans l'air.`
        }
      ]
    }
  ]
},

{
  id: 'phch-4e-matiere',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Constitution de la matière : molécules et atomes',
  ordre: 3,
  enrich: false,
  sections: [
    {
      titre: 'États et constitution de la matière',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Modèle moléculaire de la matière',
          contenu: `La matière est constituée de <strong>particules</strong> extrêmement petites : les <strong>molécules</strong> et les <strong>atomes</strong>.<br>Selon l'état physique, leur organisation diffère :<br>— <strong>solide</strong> : particules ordonnées, serrées, qui vibrent sur place ;<br>— <strong>liquide</strong> : particules au contact mais désordonnées et mobiles ;<br>— <strong>gaz</strong> : particules très espacées, désordonnées et rapides.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Corps pur et mélange',
          contenu: `— Un <strong>corps pur</strong> est constitué d'une seule espèce chimique (eau pure, dioxygène, fer).<br>— Un <strong>mélange</strong> est constitué de plusieurs espèces chimiques (air, eau salée, jus de fruit).<br>Un corps pur peut être <strong>simple</strong> (un seul type d'atome, ex. $\\mathrm{O_2}$) ou <strong>composé</strong> (plusieurs types d'atomes, ex. $\\mathrm{H_2O}$).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Conservation de la masse lors d\'un changement d\'état',
          contenu: `Lors d'un <strong>changement d'état</strong> (fusion, vaporisation, solidification...), la <strong>masse se conserve</strong> mais le <strong>volume change</strong> (sauf pour l'eau, exception remarquable : la glace occupe plus de volume).<br>C'est une transformation <strong>physique</strong> : les molécules ne sont pas modifiées, seule leur organisation change.`
        }
      ]
    },
    {
      titre: 'Atomes et molécules',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Atome',
          contenu: `L'<strong>atome</strong> est le constituant élémentaire de la matière. Sa taille est de l'ordre de $10^{-10}$ m.<br>Chaque type d'atome correspond à un <strong>élément chimique</strong> représenté par un <strong>symbole</strong> : une majuscule éventuellement suivie d'une minuscule.<br>Exemples : H (hydrogène), O (oxygène), C (carbone), N (azote), Fe (fer), Cu (cuivre), Na (sodium), Cl (chlore).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Molécule et formule chimique',
          contenu: `Une <strong>molécule</strong> est un assemblage d'atomes liés entre eux.<br>Sa <strong>formule chimique</strong> indique la nature et le nombre de chaque atome. L'<strong>indice</strong> en bas à droite donne le nombre d'atomes :<br>— $\\mathrm{H_2O}$ : 2 atomes H et 1 atome O ;<br>— $\\mathrm{CO_2}$ : 1 atome C et 2 atomes O ;<br>— $\\mathrm{CH_4}$ : 1 atome C et 4 atomes H.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Molécules courantes à connaître',
          contenu: `Quelques molécules essentielles :<br>— eau $\\mathrm{H_2O}$ ;<br>— dioxygène $\\mathrm{O_2}$ ;<br>— diazote $\\mathrm{N_2}$ ;<br>— dioxyde de carbone $\\mathrm{CO_2}$ ;<br>— méthane $\\mathrm{CH_4}$ ;<br>— dihydrogène $\\mathrm{H_2}$.<br>L'air est un mélange gazeux : environ $78\\%$ de diazote et $21\\%$ de dioxygène.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Compter les atomes d\'une molécule',
          contenu: `Combien d'atomes de chaque élément compte une molécule de glucose $\\mathrm{C_6H_{12}O_6}$ ? Combien d'atomes au total ?<br><br><strong>Solution :</strong><br>— Carbone C : 6 atomes ;<br>— Hydrogène H : 12 atomes ;<br>— Oxygène O : 6 atomes.<br>Total : $6 + 12 + 6 = 24$ atomes par molécule.`
        }
      ]
    },
    {
      titre: 'Espèces chimiques et symboles',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Espèce chimique',
          contenu: `Une <strong>espèce chimique</strong> est un ensemble d'entités identiques (mêmes molécules ou mêmes atomes).<br>Chaque espèce a des <strong>propriétés caractéristiques</strong> (température de fusion et d'ébullition, masse volumique, couleur) qui permettent de l'identifier.<br>Une espèce peut être <strong>naturelle</strong> (présente dans la nature) ou <strong>synthétique</strong> (fabriquée par l'Homme).`
        },
        {
          type: 'meth', label: 'METH', titre: 'Lire et écrire une formule chimique',
          contenu: `<strong>1.</strong> Le symbole de l'atome se lit avec sa majuscule (et minuscule éventuelle) : Na, Cl, O...<br><strong>2.</strong> L'indice (chiffre en bas à droite) donne le nombre d'atomes de l'élément qui le précède.<br><strong>3.</strong> Le coefficient (chiffre devant la formule) multiplie toute la molécule : $3\\,\\mathrm{H_2O}$ = 3 molécules d'eau, soit $6$ H et $3$ O.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Dénombrer les atomes',
          contenu: `Combien d'atomes d'oxygène compte $2\\,\\mathrm{CO_2}$ ? Et combien dans $3\\,\\mathrm{H_2O}$ ?<br><br><strong>Solution :</strong><br>$2\\,\\mathrm{CO_2}$ : chaque molécule a 2 O, donc $2 \\times 2 = 4$ atomes O.<br>$3\\,\\mathrm{H_2O}$ : chaque molécule a 1 O, donc $3 \\times 1 = 3$ atomes O.`
        }
      ]
    },
    {
      titre: 'Ordres de grandeur et dimensions',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Taille des atomes et des molécules',
          contenu: `Les atomes et molécules sont extrêmement petits :<br>— diamètre d'un atome : de l'ordre de $10^{-10}$ m ($0{,}1$ nm) ;<br>— une molécule mesure quelques $10^{-10}$ m.<br>La matière est essentiellement constituée de <strong>vide</strong> : le noyau d'un atome est environ $100\\,000$ fois plus petit que l'atome lui-même.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Notation scientifique',
          contenu: `Pour écrire des nombres très grands ou très petits, on utilise la <strong>notation scientifique</strong> : $a \\times 10^n$ où $1 \\le a < 10$.<br>Exemples :<br>— $300\\,000\\,000 = 3 \\times 10^8$ ;<br>— $0{,}000\\,000\\,1 = 1 \\times 10^{-7}$.<br>Elle facilite la comparaison des ordres de grandeur (taille des atomes, distances astronomiques).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Nombre d\'atomes alignés',
          contenu: `Combien d'atomes de diamètre $10^{-10}$ m faut-il aligner pour atteindre $1$ mm $= 10^{-3}$ m ?<br><br><strong>Solution :</strong><br>$$N = \\frac{10^{-3}}{10^{-10}} = 10^{7} = 10\\,000\\,000$$Il faut environ dix millions d'atomes alignés pour atteindre un millimètre.`
        }
      ]
    }
  ]
},

{
  id: 'phch-4e-lumiere',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Lumière, couleurs et lentilles',
  ordre: 4,
  enrich: false,
  sections: [
    {
      titre: 'Décomposition de la lumière blanche',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Lumière blanche et spectre',
          contenu: `La <strong>lumière blanche</strong> (lumière du Soleil, d'une lampe à incandescence) est composée de <strong>toutes les couleurs</strong>.<br>Un <strong>prisme</strong> ou un réseau la <strong>décompose</strong> : c'est la <strong>dispersion</strong>. On obtient un <strong>spectre continu</strong> où les couleurs se succèdent : rouge, orange, jaune, vert, bleu, indigo, violet.<br>L'arc-en-ciel est une décomposition naturelle de la lumière par les gouttes d'eau.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Lumière colorée et lumière polychromatique',
          contenu: `— Une lumière <strong>monochromatique</strong> est constituée d'une seule couleur (lumière d'un laser).<br>— Une lumière <strong>polychromatique</strong> est constituée de plusieurs couleurs (la lumière blanche est polychromatique).<br>La couleur d'une lumière est liée à sa <strong>longueur d'onde</strong> : du rouge (grande longueur d'onde) au violet (petite longueur d'onde).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Synthèse additive des couleurs',
          contenu: `La <strong>synthèse additive</strong> superpose des lumières colorées.<br>Les trois couleurs <strong>primaires</strong> sont le <strong>rouge</strong>, le <strong>vert</strong> et le <strong>bleu</strong> (RVB).<br>— rouge + vert = jaune ;<br>— rouge + bleu = magenta ;<br>— vert + bleu = cyan ;<br>— rouge + vert + bleu = blanc.<br>C'est le principe des écrans (TV, smartphone).`
        }
      ]
    },
    {
      titre: 'Couleur des objets',
      cartes: [
        {
          type: 'prop', label: 'PROP', titre: 'Origine de la couleur d\'un objet',
          contenu: `La couleur perçue d'un objet dépend de la lumière qu'il <strong>diffuse</strong> (renvoie) et de la lumière qui l'éclaire.<br>Un objet <strong>diffuse</strong> les couleurs qu'il ne peut pas absorber et <strong>absorbe</strong> les autres.<br>Exemple : un objet <strong>rouge</strong> éclairé en lumière blanche diffuse le rouge et absorbe les autres couleurs.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Couleur d\'un objet sous lumière colorée',
          contenu: `De quelle couleur apparaît un objet blanc éclairé en lumière rouge ? Et un objet rouge éclairé en lumière bleue ?<br><br><strong>Solution :</strong><br>— Un objet <strong>blanc</strong> diffuse toutes les couleurs : sous lumière rouge il diffuse le rouge → il apparaît <strong>rouge</strong>.<br>— Un objet <strong>rouge</strong> absorbe le bleu et ne peut diffuser que le rouge : sous lumière bleue, rien n'est diffusé → il apparaît <strong>noir</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Filtres colorés',
          contenu: `Un <strong>filtre coloré</strong> ne laisse passer que la lumière de sa propre couleur et absorbe les autres.<br>— un filtre rouge ne transmet que le rouge ;<br>— un filtre vert ne transmet que le vert.<br>Placer deux filtres de couleurs différentes (rouge puis vert) bloque toute la lumière : on obtient le noir.`
        }
      ]
    },
    {
      titre: 'Lentilles convergentes',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Lentille convergente',
          contenu: `Une <strong>lentille convergente</strong> est plus épaisse au centre que sur les bords. Elle <strong>fait converger</strong> les rayons lumineux parallèles en un point.<br>— Le <strong>centre optique</strong> $O$ est le centre de la lentille : un rayon passant par $O$ n'est pas dévié.<br>— Le <strong>foyer image</strong> $F'$ est le point où convergent les rayons parallèles à l'axe optique.<br>— La <strong>distance focale</strong> $f' = OF'$ se mesure en mètres.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Marche des rayons remarquables',
          contenu: `Pour construire l'image d'un objet à travers une lentille convergente, on utilise deux rayons remarquables :<br>— un rayon passant par le <strong>centre optique</strong> $O$ n'est pas dévié ;<br>— un rayon <strong>parallèle à l'axe optique</strong> ressort en passant par le <strong>foyer image</strong> $F'$.<br>Leur intersection donne la position de l'image.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Mesurer la distance focale',
          contenu: `Pour déterminer la distance focale d'une lentille convergente :<br><strong>1.</strong> Viser un objet très éloigné (le Soleil ou une fenêtre lointaine).<br><strong>2.</strong> Placer un écran derrière la lentille et le déplacer jusqu'à obtenir une image <strong>nette</strong>.<br><strong>3.</strong> La distance entre la lentille et l'écran est égale à la <strong>distance focale</strong> $f'$ (car l'objet est « à l'infini »).`
        },
        {
          type: 'ex', label: 'EX', titre: 'Image d\'un objet éloigné',
          contenu: `On place une lentille convergente de distance focale $f' = 10$ cm face à une fenêtre lointaine. À quelle distance derrière la lentille faut-il placer l'écran pour obtenir une image nette ?<br><br><strong>Solution :</strong><br>Pour un objet « à l'infini », l'image se forme dans le plan focal image, donc à la distance focale :<br>$$d = f' = 10 \\text{ cm}$$`
        }
      ]
    },
    {
      titre: 'Vision et œil',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Modèle de l\'œil',
          contenu: `L'<strong>œil</strong> peut être modélisé comme un système optique simple :<br>— le <strong>cristallin</strong> joue le rôle d'une <strong>lentille convergente</strong> ;<br>— la <strong>rétine</strong> joue le rôle d'un <strong>écran</strong> sur lequel se forme l'image ;<br>— l'<strong>iris</strong> (diaphragme) règle la quantité de lumière entrant par la pupille.<br>L'image formée sur la rétine est réelle et renversée.`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Accommodation',
          contenu: `L'<strong>accommodation</strong> est la capacité de l'œil à voir net des objets situés à des distances différentes.<br>Le cristallin se <strong>déforme</strong> : il se bombe pour voir de près et s'aplatit pour voir de loin, ce qui modifie sa distance focale et maintient l'image nette sur la rétine.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Défauts de vision',
          contenu: `Certains défauts de l'œil empêchent une image nette sur la rétine :<br>— la <strong>myopie</strong> : l'œil voit mal de loin (image avant la rétine) ; corrigée par une lentille <strong>divergente</strong> ;<br>— l'<strong>hypermétropie</strong> : l'œil voit mal de près (image derrière la rétine) ; corrigée par une lentille <strong>convergente</strong>.<br>Les lunettes ou lentilles de contact corrigent ces défauts.`
        }
      ]
    }
  ]
},

{
  id: 'phch-4e-circuits',
  filiere: '4eme',
  matiere: 'phch',
  titre: 'Circuits électriques : série et dérivation',
  ordre: 6,
  enrich: false,
  sections: [
    {
      titre: 'Le circuit électrique',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Circuit électrique et sens du courant',
          contenu: `Un <strong>circuit électrique</strong> est une boucle fermée comprenant un <strong>générateur</strong> (qui fournit l'énergie), des <strong>récepteurs</strong> (lampe, moteur, résistance) et des fils de connexion.<br>Le courant ne circule que si le circuit est <strong>fermé</strong>.<br>Par convention, le <strong>sens du courant</strong> à l'extérieur du générateur va de la borne <strong>+</strong> vers la borne <strong>−</strong>.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Dipôles et symboles normalisés',
          contenu: `Un <strong>dipôle</strong> est un composant possédant deux bornes.<br>On représente les circuits avec des <strong>symboles normalisés</strong> :<br>— générateur (pile), lampe (cercle barré), interrupteur, résistance (rectangle), moteur (M), ampèremètre (A), voltmètre (V), diode.<br>Un schéma électrique normalisé permet de communiquer un montage de façon universelle.`
        },
        {
          type: 'def', label: 'DEF', titre: 'Conducteurs et isolants',
          contenu: `— Un <strong>conducteur</strong> laisse passer le courant électrique (métaux : cuivre, fer, aluminium ; eau salée, graphite).<br>— Un <strong>isolant</strong> ne laisse pas passer le courant (plastique, verre, bois sec, air, caoutchouc).<br>Dans un métal, le courant est dû au déplacement des <strong>électrons libres</strong> ; dans une solution, au déplacement des <strong>ions</strong>.`
        }
      ]
    },
    {
      titre: 'Montage en série et en dérivation',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Circuit en série',
          contenu: `Dans un circuit <strong>en série</strong>, les dipôles sont branchés les uns à la suite des autres, formant une <strong>seule boucle</strong>.<br>Le courant suit un <strong>chemin unique</strong>.<br>Conséquence : si un dipôle est défectueux ou retiré (circuit ouvert), <strong>tout s'éteint</strong> (les anciennes guirlandes en série).`
        },
        {
          type: 'def', label: 'DEF', titre: 'Circuit en dérivation',
          contenu: `Dans un circuit <strong>en dérivation</strong> (en parallèle), les dipôles sont branchés sur des <strong>branches</strong> distinctes reliées par des <strong>nœuds</strong>.<br>Le courant se <strong>répartit</strong> entre les branches.<br>Conséquence : si un dipôle d'une branche est retiré, les autres <strong>continuent de fonctionner</strong> (installation domestique).`
        },
        {
          type: 'prop', label: 'PROP', titre: 'Influence du nombre de lampes',
          contenu: `— En <strong>série</strong> : ajouter une lampe augmente la résistance totale, l'intensité diminue, les lampes brillent <strong>moins</strong>.<br>— En <strong>dérivation</strong> : chaque lampe est soumise à la tension du générateur et brille <strong>normalement</strong> ; ajouter une branche augmente l'intensité totale débitée.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Comparer deux montages',
          contenu: `On dispose de deux lampes identiques et d'une pile. Dans quel montage brillent-elles le plus ?<br><br><strong>Solution :</strong><br>En <strong>dérivation</strong>, chaque lampe reçoit la pleine tension de la pile : elles brillent fort.<br>En <strong>série</strong>, la tension se partage entre les deux lampes : elles brillent moins. Le montage en dérivation donne l'éclairage le plus intense.`
        }
      ]
    },
    {
      titre: 'Protection et dysfonctionnements',
      cartes: [
        {
          type: 'def', label: 'DEF', titre: 'Circuit ouvert et circuit fermé',
          contenu: `— Un circuit est <strong>fermé</strong> si la boucle est complète : le courant circule.<br>— Un circuit est <strong>ouvert</strong> si la boucle est interrompue (interrupteur ouvert, fil débranché) : aucun courant ne circule.<br>L'<strong>interrupteur</strong> permet d'ouvrir ou de fermer volontairement le circuit.`
        },
        {
          type: 'meth', label: 'METH', titre: 'Diagnostiquer une panne',
          contenu: `Pour trouver pourquoi une lampe ne s'allume pas :<br><strong>1.</strong> Vérifier que le générateur fonctionne (tension à ses bornes).<br><strong>2.</strong> Vérifier que le circuit est bien fermé (interrupteur, connexions).<br><strong>3.</strong> Tester chaque dipôle. En série, une lampe grillée coupe tout ; en dérivation, seule sa branche est affectée.`
        },
        {
          type: 'ex', label: 'EX', titre: 'Court-circuit d\'une lampe',
          contenu: `Dans un circuit série avec deux lampes, on relie directement les deux bornes de la lampe L1 par un fil. Que se passe-t-il ?<br><br><strong>Solution :</strong><br>La lampe L1 est <strong>court-circuitée</strong> : le courant passe par le fil de résistance quasi nulle, L1 <strong>s'éteint</strong>. L'autre lampe L2 brille plus fort car elle reçoit désormais toute la tension du générateur.`
        }
      ]
    }
  ]
}

]
