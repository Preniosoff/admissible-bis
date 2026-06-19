export const DATA = [
  // ════════════════════════════════════════════════════════════════════════
  // CHAPITRES ENRICHIS (id déjà existants)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'ma-5e-rel',
    matiere: 'ma',
    titre: 'Nombres relatifs',
    ordre: 1,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Définitions et repérage',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Nombre relatif',
            contenu: `Un <strong>nombre relatif</strong> est un nombre précédé d'un signe : $+$ (positif) ou $-$ (négatif).<br>Exemples : $+5$ (ou simplement $5$), $-3$, $+2{,}4$, $-7{,}1$.<br><br>$0$ est à la fois positif et négatif : c'est le seul nombre dont le signe est neutre.<br>Les relatifs servent à coder des situations opposées : altitude/profondeur, gain/perte, température au-dessus/en dessous de $0$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Distance à zéro et opposé',
            contenu: `La <strong>distance à zéro</strong> d'un relatif est le nombre obtenu en supprimant son signe.<br>Distance à zéro de $-7$ : $7$ ; de $+3{,}2$ : $3{,}2$.<br><br>Deux relatifs sont <strong>opposés</strong> s'ils ont la même distance à zéro mais des signes contraires.<br>L'opposé de $-5$ est $+5$ ; l'opposé de $+8$ est $-8$. La somme de deux opposés vaut toujours $0$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Repérer un point sur une droite graduée',
            contenu: `Sur une droite graduée orientée, chaque point est repéré par son <strong>abscisse</strong> (un relatif).<br>1. L'origine $O$ a pour abscisse $0$.<br>2. Vers la droite : abscisses positives ; vers la gauche : négatives.<br>3. La distance entre deux points est la différence de leurs abscisses, comptée positivement.<br><br>Si $A$ a pour abscisse $-3$ et $B$ pour abscisse $+2$, la distance $AB = 2 - (-3) = 5$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Lecture d\'abscisses',
            contenu: `Sur une droite graduée d'unité $1$, placer $A(-4)$, $B(+1{,}5)$, $C(-2)$.<br><br>Calcul de distances :<br>$AC = -2 - (-4) = -2 + 4 = 2$.<br>$AB = 1{,}5 - (-4) = 5{,}5$.<br>$BC = 1{,}5 - (-2) = 3{,}5$.`
          }
        ]
      },
      {
        titre: 'Comparer les relatifs',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Règles de comparaison',
            contenu: `<strong>Deux positifs :</strong> le plus grand est celui de plus grande distance à zéro.<br>$+3 < +7$.<br><strong>Deux négatifs :</strong> le plus grand est celui de plus <em>petite</em> distance à zéro.<br>$-7 < -3$ (car $7 > 3$).<br><strong>Un négatif et un positif :</strong> le négatif est toujours le plus petit.<br>$-2 < +1$.<br><br>Tout négatif est inférieur à $0$, tout positif est supérieur à $0$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Ranger des relatifs',
            contenu: `Pour ranger une liste dans l'ordre croissant :<br>1. Séparer négatifs et positifs.<br>2. Ranger les négatifs : du plus éloigné de $0$ au plus proche.<br>3. Placer $0$.<br>4. Ranger les positifs du plus proche au plus éloigné de $0$.<br><br>La droite graduée est un appui visuel : un relatif est plus petit s'il est situé plus à gauche.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Rangement croissant',
            contenu: `Ranger dans l'ordre croissant : $-3 \\,;\\, +2 \\,;\\, -5 \\,;\\, 0 \\,;\\, -1 \\,;\\, +4$.<br><br>Négatifs (du plus petit) : $-5 < -3 < -1$.<br>Puis $0$.<br>Puis positifs : $+2 < +4$.<br><br>Résultat : $-5 < -3 < -1 < 0 < +2 < +4$.`
          }
        ]
      },
      {
        titre: 'Addition et soustraction',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Additionner deux relatifs',
            contenu: `<strong>Même signe :</strong> on additionne les distances à zéro et on garde le signe commun.<br>$(-3) + (-5) = -8$ ; $(+4) + (+6) = +10$.<br><br><strong>Signes contraires :</strong> on soustrait la plus petite distance à zéro de la plus grande et on garde le signe du relatif de plus grande distance à zéro.<br>$(-7) + (+3) = -4$ ; $(+9) + (-2) = +7$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Soustraire = ajouter l\'opposé',
            contenu: `Soustraire un relatif revient à ajouter son opposé :<br>$$a - b = a + (-b).$$<br>$(+5) - (+8) = (+5) + (-8) = -3$.<br>$(+4) - (-3) = (+4) + (+3) = +7$.<br>$(-2) - (-6) = (-2) + (+6) = +4$.<br><br>Règle pratique : <strong>moins moins fait plus</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Simplifier une suite d\'additions',
            contenu: `Pour calculer une longue somme algébrique :<br>1. Transformer toutes les soustractions en additions de l'opposé.<br>2. Regrouper les positifs entre eux, les négatifs entre eux.<br>3. Faire les deux sommes, puis additionner les deux résultats.<br><br><em>Astuce :</em> on peut changer l'ordre des termes librement (commutativité de l'addition).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Somme algébrique',
            contenu: `Calculer $A = -8 + 5 - 3 + 12 - 6$.<br><br>$A = (-8) + (+5) + (-3) + (+12) + (-6)$.<br>Positifs : $5 + 12 = 17$.<br>Négatifs : $-8 - 3 - 6 = -17$.<br>$A = 17 + (-17) = 0$.`
          }
        ]
      },
      {
        titre: 'Multiplication et division',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Règle des signes',
            contenu: `Pour un <strong>produit</strong> ou un <strong>quotient</strong> de deux relatifs :<br>$(+) \\times (+) = (+)$ et $(-) \\times (-) = (+)$.<br>$(+) \\times (-) = (-)$ et $(-) \\times (+) = (-)$.<br><br>Mémo : <strong>signes identiques → résultat positif</strong> ; <strong>signes différents → résultat négatif</strong>.<br>On calcule d'abord le signe, puis le produit des distances à zéro.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Produit de plusieurs facteurs',
            contenu: `Le signe d'un produit dépend du <strong>nombre de facteurs négatifs</strong> :<br>— nombre <strong>pair</strong> de facteurs négatifs → produit <strong>positif</strong> ;<br>— nombre <strong>impair</strong> → produit <strong>négatif</strong>.<br><br>$(-2) \\times (-3) \\times (-1) = -6$ (trois facteurs négatifs, impair).<br>$(-2) \\times (-5) = +10$ (deux facteurs, pair).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer un produit de relatifs',
            contenu: `1. Compter les facteurs négatifs pour déterminer le signe du résultat.<br>2. Multiplier les distances à zéro.<br>3. Appliquer le signe trouvé.<br><br>Pour un quotient : même règle de signe, puis on divise les distances à zéro.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Produit et quotient',
            contenu: `Calculer $P = (-4) \\times (+3) \\times (-2)$.<br>Deux facteurs négatifs (pair) → signe $+$.<br>$P = +(4 \\times 3 \\times 2) = +24$.<br><br>Calculer $Q = \\dfrac{-36}{+9}$.<br>Signes différents → signe $-$ : $Q = -4$.`
          }
        ]
      },
      {
        titre: 'Applications concrètes',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Modéliser une situation par des relatifs',
            contenu: `1. Choisir une origine et une orientation (gains $+$, pertes $-$ ; au-dessus de $0$ $+$, en dessous $-$).<br>2. Traduire chaque donnée par un relatif.<br>3. Poser une somme algébrique.<br>4. Interpréter le signe du résultat dans le contexte.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Variations de température',
            contenu: `À $6$ h, il fait $-3\\,^{\\circ}\\mathrm{C}$. La température monte de $7$ degrés à midi, puis baisse de $4$ degrés le soir.<br><br>$T = -3 + 7 - 4 = 0\\,^{\\circ}\\mathrm{C}$.<br>La température du soir est $0\\,^{\\circ}\\mathrm{C}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Compte bancaire',
            contenu: `Un compte affiche $+45$ €. On retire $60$ €, puis on dépose $20$ €.<br><br>Solde : $45 - 60 + 20 = +5$ €.<br>Le compte est créditeur de $5$ €. Si l'on avait retiré $80$ € au lieu de $60$, le solde serait $45 - 80 + 20 = -15$ € (à découvert).`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-pytha',
    matiere: 'ma',
    titre: 'Fractions et priorités opératoires',
    ordre: 2,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Priorités opératoires',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Règles de priorité',
            contenu: `Dans un calcul, on effectue dans l'ordre :<br>1. les calculs entre <strong>parenthèses</strong> (en commençant par les plus intérieures) ;<br>2. les <strong>multiplications et divisions</strong>, de gauche à droite ;<br>3. les <strong>additions et soustractions</strong>, de gauche à droite.<br><br>« $\\times$ et $\\div$ avant $+$ et $-$. »`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une expression numérique',
            contenu: `1. Repérer et traiter d'abord chaque paire de parenthèses.<br>2. Souligner les multiplications/divisions et les effectuer.<br>3. Terminer par les additions et soustractions, de gauche à droite.<br><br>On réécrit l'expression à chaque étape pour ne rien oublier.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Avec et sans parenthèses',
            contenu: `$A = 5 + 3 \\times 4 = 5 + 12 = 17$ (multiplication d'abord).<br><br>$B = (5 + 3) \\times 4 = 8 \\times 4 = 32$ (parenthèse d'abord).<br><br>$C = 20 - 2 \\times (3 + 1) = 20 - 2 \\times 4 = 20 - 8 = 12$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Expression à plusieurs niveaux',
            contenu: `$D = 7 + 2 \\times (10 - 3 \\times 2)$.<br>Parenthèse : $3 \\times 2 = 6$, puis $10 - 6 = 4$.<br>$D = 7 + 2 \\times 4 = 7 + 8 = 15$.`
          }
        ]
      },
      {
        titre: 'Fractions égales et simplification',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Égalité de fractions',
            contenu: `On ne change pas une fraction en multipliant (ou divisant) son numérateur et son dénominateur par un même nombre non nul :<br>$$\\frac{a}{b} = \\frac{a \\times k}{b \\times k} \\quad (k \\neq 0).$$<br>$\\dfrac{2}{3} = \\dfrac{2 \\times 4}{3 \\times 4} = \\dfrac{8}{12}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Simplifier une fraction',
            contenu: `1. Chercher un diviseur commun au numérateur et au dénominateur.<br>2. Diviser les deux par ce diviseur.<br>3. Répéter jusqu'à ce qu'aucun diviseur commun (autre que $1$) ne subsiste : la fraction est <strong>irréductible</strong>.<br><br>$\\dfrac{36}{48} = \\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Réduire au même dénominateur',
            contenu: `Mettre $\\dfrac{2}{3}$ et $\\dfrac{3}{4}$ au même dénominateur.<br>Dénominateur commun : $12$.<br>$\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$.`
          }
        ]
      },
      {
        titre: 'Somme et différence de fractions',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Addition de fractions',
            contenu: `Même dénominateur :<br>$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}.$$<br>Dénominateurs différents : on réduit d'abord au même dénominateur, puis on additionne les numérateurs.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Additionner deux fractions',
            contenu: `1. Trouver un dénominateur commun (souvent le plus petit multiple commun).<br>2. Écrire chaque fraction avec ce dénominateur.<br>3. Additionner (ou soustraire) les numérateurs.<br>4. Simplifier le résultat si possible.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Somme avec dénominateurs différents',
            contenu: `$\\dfrac{1}{6} + \\dfrac{3}{4}$.<br>Dénominateur commun : $12$.<br>$\\dfrac{1}{6} = \\dfrac{2}{12}$, $\\dfrac{3}{4} = \\dfrac{9}{12}$.<br>$\\dfrac{2}{12} + \\dfrac{9}{12} = \\dfrac{11}{12}$ (irréductible).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Différence de fractions',
            contenu: `$\\dfrac{5}{6} - \\dfrac{1}{2} = \\dfrac{5}{6} - \\dfrac{3}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}$.`
          }
        ]
      },
      {
        titre: 'Produit et quotient de fractions',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Multiplication de fractions',
            contenu: `$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}.$$<br>On multiplie numérateurs entre eux et dénominateurs entre eux. Penser à simplifier <strong>avant</strong> de multiplier.`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Division de fractions',
            contenu: `Diviser par une fraction, c'est multiplier par son inverse :<br>$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}.$$<br>L'inverse de $\\dfrac{c}{d}$ est $\\dfrac{d}{c}$ (avec $c \\neq 0$).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Produit simplifié',
            contenu: `$\\dfrac{4}{9} \\times \\dfrac{3}{8}$.<br>Simplification : $\\dfrac{4}{8} = \\dfrac{1}{2}$ et $\\dfrac{3}{9} = \\dfrac{1}{3}$.<br>$\\dfrac{4}{9} \\times \\dfrac{3}{8} = \\dfrac{1 \\times 1}{3 \\times 2} = \\dfrac{1}{6}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Quotient de fractions',
            contenu: `$\\dfrac{2}{3} \\div \\dfrac{4}{5} = \\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-prct',
    matiere: 'ma',
    titre: 'Proportionnalité, pourcentages, vitesses',
    ordre: 3,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Notion de proportionnalité',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Situation de proportionnalité',
            contenu: `Deux grandeurs sont <strong>proportionnelles</strong> si l'on passe de l'une à l'autre en multipliant toujours par un même nombre, appelé <strong>coefficient de proportionnalité</strong>.<br><br>Dans un tableau de proportionnalité, les quotients (valeur du bas $\\div$ valeur du haut) sont tous égaux à ce coefficient.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Reconnaître la proportionnalité',
            contenu: `Calculer le quotient de chaque colonne ($y \\div x$).<br>— Si tous les quotients sont <strong>égaux</strong>, il y a proportionnalité, et ce quotient commun est le coefficient.<br>— S'ils diffèrent, il n'y a pas proportionnalité.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Test de proportionnalité',
            contenu: `Tableau : $3 \\to 7{,}5$ ; $4 \\to 10$ ; $6 \\to 15$.<br>$7{,}5 \\div 3 = 2{,}5$ ; $10 \\div 4 = 2{,}5$ ; $15 \\div 6 = 2{,}5$.<br>Quotients égaux → proportionnalité, coefficient $2{,}5$.`
          }
        ]
      },
      {
        titre: 'Calculer une quatrième proportionnelle',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Produit en croix',
            contenu: `Dans un tableau de proportionnalité, pour une case inconnue $x$ :<br>$$\\frac{a}{b} = \\frac{x}{d} \\;\\Rightarrow\\; x = \\frac{a \\times d}{b}.$$<br>On multiplie en diagonale les deux nombres connus, puis on divise par le troisième.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Passage par l\'unité',
            contenu: `1. Ramener à une seule unité en divisant.<br>2. Multiplier par la quantité voulue.<br><br>Très efficace pour les problèmes de prix ou de recette.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Prix proportionnel',
            contenu: `$5$ kg de pommes coûtent $9$ €. Combien coûtent $8$ kg ?<br><br>Prix de $1$ kg : $9 \\div 5 = 1{,}80$ €.<br>Prix de $8$ kg : $1{,}80 \\times 8 = 14{,}40$ €.`
          }
        ]
      },
      {
        titre: 'Pourcentages',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Appliquer un pourcentage',
            contenu: `Appliquer $t\\,\\%$ à une quantité, c'est la multiplier par $\\dfrac{t}{100}$ :<br>$$t\\% \\text{ de } N = \\frac{t}{100} \\times N.$$<br>Un pourcentage est une proportion rapportée à $100$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Augmentation et réduction',
            contenu: `<strong>Augmenter</strong> de $t\\,\\%$ : multiplier par $\\left(1 + \\dfrac{t}{100}\\right)$.<br><strong>Diminuer</strong> de $t\\,\\%$ : multiplier par $\\left(1 - \\dfrac{t}{100}\\right)$.<br><br>Augmenter de $20\\,\\%$ : $\\times 1{,}2$. Réduire de $30\\,\\%$ : $\\times 0{,}7$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Réduction de prix',
            contenu: `Un article à $80$ € subit une réduction de $25\\,\\%$.<br><br>Réduction : $\\dfrac{25}{100} \\times 80 = 20$ €.<br>Prix soldé : $80 - 20 = 60$ €.<br>Méthode directe : $80 \\times 0{,}75 = 60$ €.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calculer un pourcentage',
            contenu: `Dans une classe de $25$ élèves, $15$ font de l'anglais. Quel pourcentage ?<br><br>$\\dfrac{15}{25} = \\dfrac{60}{100} = 60\\,\\%$.`
          }
        ]
      },
      {
        titre: 'Échelles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Échelle d\'un plan',
            contenu: `L'<strong>échelle</strong> est le coefficient de proportionnalité entre les distances sur le plan et les distances réelles (exprimées dans la <strong>même unité</strong>) :<br>$$\\text{échelle} = \\frac{\\text{distance sur le plan}}{\\text{distance réelle}}.$$<br>Une échelle $\\dfrac{1}{200}$ signifie : $1$ cm sur le plan représente $200$ cm réels.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Distance réelle',
            contenu: `Sur une carte à l'échelle $\\dfrac{1}{25\\,000}$, deux villes sont distantes de $8$ cm.<br><br>Distance réelle : $8 \\times 25\\,000 = 200\\,000$ cm $= 2\\,000$ m $= 2$ km.`
          }
        ]
      },
      {
        titre: 'Vitesse moyenne',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Formule de la vitesse',
            contenu: `La <strong>vitesse moyenne</strong> relie distance et durée :<br>$$v = \\frac{d}{t}, \\qquad d = v \\times t, \\qquad t = \\frac{d}{v}.$$<br>Une vitesse en km/h se lit « kilomètres par heure » : distance parcourue en $1$ h.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Convertir durées et vitesses',
            contenu: `Penser à utiliser des unités compatibles.<br>$1$ h $= 60$ min ; $30$ min $= 0{,}5$ h ; $15$ min $= 0{,}25$ h.<br>Pour passer de km/h à m/s : diviser par $3{,}6$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de vitesse',
            contenu: `Un cycliste parcourt $45$ km en $2$ h $30$ min.<br><br>$t = 2{,}5$ h.<br>$v = \\dfrac{45}{2{,}5} = 18$ km/h.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-geom',
    matiere: 'ma',
    titre: 'Triangles et angles',
    ordre: 7,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Somme des angles d\'un triangle',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Somme des angles',
            contenu: `Dans tout triangle, la somme des mesures des trois angles est égale à $180^{\\circ}$ :<br>$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^{\\circ}.$$<br>Conséquence : connaissant deux angles, on calcule toujours le troisième.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Triangles particuliers',
            contenu: `<strong>Équilatéral :</strong> trois angles de $60^{\\circ}$.<br><strong>Isocèle :</strong> les deux angles à la base sont égaux.<br><strong>Rectangle :</strong> un angle droit ($90^{\\circ}$), donc les deux autres sont complémentaires (somme $90^{\\circ}$).<br><strong>Rectangle isocèle :</strong> deux angles de $45^{\\circ}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul du troisième angle',
            contenu: `Dans un triangle, $\\widehat{A} = 73^{\\circ}$ et $\\widehat{B} = 48^{\\circ}$.<br><br>$\\widehat{C} = 180^{\\circ} - 73^{\\circ} - 48^{\\circ} = 59^{\\circ}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Angles d\'un triangle isocèle',
            contenu: `Triangle isocèle en $A$ avec $\\widehat{A} = 40^{\\circ}$.<br>Les angles à la base sont égaux : $\\widehat{B} = \\widehat{C}$.<br>$\\widehat{B} + \\widehat{C} = 180^{\\circ} - 40^{\\circ} = 140^{\\circ}$, donc $\\widehat{B} = \\widehat{C} = 70^{\\circ}$.`
          }
        ]
      },
      {
        titre: 'Inégalité triangulaire',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Inégalité triangulaire',
            contenu: `Dans un triangle, la longueur de chaque côté est <strong>inférieure</strong> à la somme des deux autres :<br>$$AB < AC + CB.$$<br>Un triangle est constructible si et seulement si la plus grande longueur est inférieure à la somme des deux autres.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Tester la constructibilité',
            contenu: `1. Repérer la <strong>plus grande</strong> des trois longueurs.<br>2. La comparer à la somme des deux autres.<br>3. Si plus grande $<$ somme des deux autres : triangle constructible. Si égale : points alignés (triangle « plat »). Si plus grande : impossible.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Triangle constructible ?',
            contenu: `Côtés $3$ cm, $4$ cm, $9$ cm ?<br>Plus grand côté : $9$. Somme des autres : $3 + 4 = 7$.<br>$9 > 7$ → <strong>impossible</strong>.<br><br>Côtés $5$, $6$, $8$ ? $8 < 5 + 6 = 11$ → <strong>constructible</strong>.`
          }
        ]
      },
      {
        titre: 'Construction de triangles',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Construire connaissant trois longueurs',
            contenu: `1. Tracer un côté à la règle (ex. $[BC]$).<br>2. Tracer un arc de cercle de centre $B$ et de rayon la longueur de $[BA]$.<br>3. Tracer un arc de centre $C$ et de rayon $[CA]$.<br>4. Le point $A$ est l'intersection des deux arcs.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire avec un angle',
            contenu: `Connaissant deux côtés et l'angle entre eux :<br>1. Tracer un côté.<br>2. Au sommet, reporter l'angle au rapporteur.<br>3. Reporter la longueur du second côté sur la demi-droite.<br>4. Relier pour fermer le triangle.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Programme de construction',
            contenu: `Construire $ABC$ avec $AB = 5$ cm, $\\widehat{BAC} = 50^{\\circ}$, $AC = 4$ cm.<br>1. Tracer $[AB]$ de $5$ cm.<br>2. En $A$, tracer une demi-droite faisant $50^{\\circ}$ avec $[AB]$.<br>3. Placer $C$ sur cette demi-droite à $4$ cm de $A$.<br>4. Tracer $[BC]$.`
          }
        ]
      },
      {
        titre: 'Angles formés par des parallèles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Angles alternes-internes et correspondants',
            contenu: `Deux droites coupées par une sécante forment :<br>— des angles <strong>alternes-internes</strong> : de part et d'autre de la sécante, entre les deux droites ;<br>— des angles <strong>correspondants</strong> : du même côté de la sécante, l'un entre les droites, l'autre à l'extérieur, en position « identique ».`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés avec deux parallèles',
            contenu: `Si deux droites sont <strong>parallèles</strong>, alors :<br>— les angles alternes-internes sont <strong>égaux</strong> ;<br>— les angles correspondants sont <strong>égaux</strong>.<br><br>Réciproque : si deux angles alternes-internes (ou correspondants) sont égaux, les droites sont parallèles.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Angles opposés par le sommet',
            contenu: `Deux angles <strong>opposés par le sommet</strong> (formés par deux droites sécantes) ont la même mesure.<br>Deux angles <strong>adjacents</strong> formant un angle plat sont <strong>supplémentaires</strong> (somme $180^{\\circ}$).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'angles entre parallèles',
            contenu: `$(d) \\parallel (d')$ sont coupées par une sécante. Un angle vaut $112^{\\circ}$.<br><br>Son alterne-interne vaut aussi $112^{\\circ}$.<br>L'angle adjacent (sur la même droite) vaut $180^{\\circ} - 112^{\\circ} = 68^{\\circ}$.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-calclit',
    matiere: 'ma',
    titre: 'Calcul littéral et équations',
    ordre: 4,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Expressions littérales',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Expression littérale',
            contenu: `Une <strong>expression littérale</strong> contient une ou plusieurs lettres représentant des nombres.<br>Conventions d'écriture :<br>— on omet le signe $\\times$ devant une lettre : $3 \\times a = 3a$ ;<br>— $a \\times a = a^2$ ;<br>— $1 \\times a = a$ et $0 \\times a = 0$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Substituer une valeur',
            contenu: `Pour <strong>calculer</strong> une expression pour une valeur donnée :<br>1. Remplacer chaque lettre par sa valeur (entre parenthèses si négative).<br>2. Rétablir les signes $\\times$ sous-entendus.<br>3. Appliquer les priorités opératoires.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Évaluer une expression',
            contenu: `Calculer $E = 3x^2 - 5x + 2$ pour $x = 4$.<br><br>$E = 3 \\times 4^2 - 5 \\times 4 + 2 = 3 \\times 16 - 20 + 2 = 48 - 20 + 2 = 30$.`
          }
        ]
      },
      {
        titre: 'Réduction',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Termes semblables',
            contenu: `Des <strong>termes semblables</strong> ont la même partie littérale (même lettre, même exposant).<br>$3x$ et $5x$ sont semblables ; $3x$ et $3x^2$ ne le sont pas.<br><strong>Réduire</strong> une expression, c'est regrouper les termes semblables.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Réduire une expression',
            contenu: `1. Identifier les groupes de termes semblables.<br>2. Additionner leurs coefficients.<br>3. Conserver séparément les termes non semblables.<br><br>On n'additionne que ce qui « va ensemble » ($x$ avec $x$, $x^2$ avec $x^2$, constantes ensemble).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Réduction complète',
            contenu: `$A = 4x + 7 - 2x + 3 + x^2 - 5$.<br>Termes en $x^2$ : $x^2$.<br>Termes en $x$ : $4x - 2x = 2x$.<br>Constantes : $7 + 3 - 5 = 5$.<br>$A = x^2 + 2x + 5$.`
          }
        ]
      },
      {
        titre: 'Distributivité',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Distributivité simple',
            contenu: `$$k(a + b) = ka + kb, \\qquad k(a - b) = ka - kb.$$<br>On multiplie le facteur de devant par <strong>chaque</strong> terme de la parenthèse. Attention aux signes.`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Double distributivité',
            contenu: `$$(a + b)(c + d) = ac + ad + bc + bd.$$<br>Chaque terme de la première parenthèse multiplie chaque terme de la seconde : $4$ produits, puis on réduit.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Développer (simple)',
            contenu: `$5(2x + 3) = 5 \\times 2x + 5 \\times 3 = 10x + 15$.<br><br>$-3(x - 4) = -3x + 12$ (attention au signe).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Développer (double)',
            contenu: `$(x + 2)(x + 5) = x \\times x + x \\times 5 + 2 \\times x + 2 \\times 5$<br>$= x^2 + 5x + 2x + 10 = x^2 + 7x + 10$.`
          }
        ]
      },
      {
        titre: 'Équations à une inconnue',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Équation et solution',
            contenu: `Une <strong>équation</strong> est une égalité contenant une inconnue (souvent $x$).<br>Une <strong>solution</strong> est une valeur de l'inconnue qui rend l'égalité vraie.<br>Résoudre une équation, c'est trouver toutes ses solutions.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Règles de transformation',
            contenu: `Une équation garde les mêmes solutions si l'on :<br>— ajoute (ou retranche) un même nombre aux deux membres ;<br>— multiplie (ou divise) les deux membres par un même nombre non nul.<br><br>Ces règles permettent d'isoler $x$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Résoudre une équation du type ax+b=c',
            contenu: `1. Regrouper les termes en $x$ d'un côté, les constantes de l'autre.<br>2. Réduire chaque membre.<br>3. Diviser par le coefficient de $x$.<br>4. Vérifier en remplaçant dans l'équation de départ.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Résolution complète',
            contenu: `Résoudre $5x - 3 = 2x + 9$.<br>$5x - 2x = 9 + 3$<br>$3x = 12$<br>$x = \\dfrac{12}{3} = 4$.<br><br>Vérification : $5 \\times 4 - 3 = 17$ et $2 \\times 4 + 9 = 17$. ✓ La solution est $x = 4$.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-vol',
    matiere: 'ma',
    titre: 'Aires, périmètres et volumes',
    ordre: 11,
    filiere: '5eme',
    enrich: true,
    sections: [
      {
        titre: 'Périmètres',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Périmètres usuels',
            contenu: `<strong>Carré</strong> de côté $c$ : $P = 4c$.<br><strong>Rectangle</strong> $L \\times \\ell$ : $P = 2(L + \\ell)$.<br><strong>Triangle</strong> : $P = a + b + c$.<br><strong>Cercle</strong> de rayon $r$ : $P = 2 \\pi r = \\pi D$ ($D$ diamètre).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Périmètre d\'un cercle',
            contenu: `Rayon $r = 5$ cm.<br>$P = 2 \\pi \\times 5 = 10\\pi \\approx 31{,}4$ cm.`
          }
        ]
      },
      {
        titre: 'Aires',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Aires usuelles',
            contenu: `<strong>Carré :</strong> $\\mathcal{A} = c^2$.<br><strong>Rectangle :</strong> $\\mathcal{A} = L \\times \\ell$.<br><strong>Triangle :</strong> $\\mathcal{A} = \\dfrac{b \\times h}{2}$ ($h$ hauteur relative à la base $b$).<br><strong>Parallélogramme :</strong> $\\mathcal{A} = b \\times h$.<br><strong>Disque :</strong> $\\mathcal{A} = \\pi r^2$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Aire d\'une figure composée',
            contenu: `1. Décomposer la figure en figures simples (rectangles, triangles, demi-disques).<br>2. Calculer l'aire de chaque morceau.<br>3. Additionner (ou soustraire pour un trou).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Aire d\'un disque',
            contenu: `Disque de rayon $r = 4$ cm.<br>$\\mathcal{A} = \\pi \\times 4^2 = 16\\pi \\approx 50{,}3$ cm$^2$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Aire d\'un triangle',
            contenu: `Triangle de base $6$ cm et hauteur $4$ cm.<br>$\\mathcal{A} = \\dfrac{6 \\times 4}{2} = 12$ cm$^2$.`
          }
        ]
      },
      {
        titre: 'Volume du prisme droit',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Prisme droit',
            contenu: `Un <strong>prisme droit</strong> a deux bases parallèles et superposables (polygones) reliées par des faces rectangulaires.<br>La <strong>hauteur</strong> est la distance entre les deux bases.<br>Le pavé droit et le cube sont des prismes droits particuliers.`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Volume d\'un prisme',
            contenu: `$$V = \\mathcal{A}_{\\text{base}} \\times h.$$<br>Le volume est le produit de l'aire d'une base par la hauteur. Pour un pavé droit : $V = L \\times \\ell \\times h$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Volume d\'un prisme triangulaire',
            contenu: `Base : triangle d'aire $15$ cm$^2$. Hauteur du prisme : $10$ cm.<br>$V = 15 \\times 10 = 150$ cm$^3$.`
          }
        ]
      },
      {
        titre: 'Volume du cylindre',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Volume d\'un cylindre',
            contenu: `Le cylindre de révolution de rayon $r$ et de hauteur $h$ a pour base un disque :<br>$$V = \\mathcal{A}_{\\text{base}} \\times h = \\pi r^2 \\times h.$$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Conversions d\'unités de volume',
            contenu: `$1$ dm$^3 = 1$ L ; $1$ cm$^3 = 1$ mL.<br>$1$ m$^3 = 1\\,000$ L.<br>Pour passer de cm$^3$ à dm$^3$ : diviser par $1\\,000$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Volume et contenance',
            contenu: `Cylindre de rayon $3$ cm et hauteur $10$ cm.<br>$V = \\pi \\times 3^2 \\times 10 = 90\\pi \\approx 282{,}7$ cm$^3$.<br>Contenance : environ $282{,}7$ mL $\\approx 0{,}28$ L.`
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════════════════════
  // CHAPITRES NOUVEAUX
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'ma-5e-parallelo',
    matiere: 'ma',
    titre: 'Parallélogrammes',
    ordre: 8,
    filiere: '5eme',
    enrich: false,
    sections: [
      {
        titre: 'Définition et propriétés',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Parallélogramme',
            contenu: `Un <strong>parallélogramme</strong> est un quadrilatère dont les côtés opposés sont <strong>parallèles</strong> deux à deux.<br>$ABCD$ est un parallélogramme si $(AB) \\parallel (DC)$ et $(AD) \\parallel (BC)$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés caractéristiques',
            contenu: `Dans un parallélogramme :<br>— les côtés opposés ont la même longueur ;<br>— les angles opposés sont égaux ;<br>— les diagonales se coupent en leur <strong>milieu</strong> ;<br>— il a un centre de symétrie (le point d'intersection des diagonales).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Reconnaître un parallélogramme',
            contenu: `Un quadrilatère <strong>non croisé</strong> est un parallélogramme si l'une des conditions est vérifiée :<br>— ses diagonales ont le même milieu ;<br>— ses côtés opposés ont deux à deux la même longueur ;<br>— deux côtés opposés sont à la fois parallèles et de même longueur.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Démontrer avec les diagonales',
            contenu: `$ABCD$ a ses diagonales $[AC]$ et $[BD]$ se coupant en $O$, milieu commun.<br>Donc $O$ est le milieu de $[AC]$ et de $[BD]$.<br>D'après la propriété des diagonales, $ABCD$ est un <strong>parallélogramme</strong>.`
          }
        ]
      },
      {
        titre: 'Parallélogrammes particuliers',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Rectangle, losange, carré',
            contenu: `<strong>Rectangle :</strong> parallélogramme à quatre angles droits ; diagonales de même longueur.<br><strong>Losange :</strong> parallélogramme à quatre côtés égaux ; diagonales perpendiculaires.<br><strong>Carré :</strong> à la fois rectangle et losange ; diagonales égales <em>et</em> perpendiculaires.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Reconnaître par les diagonales',
            contenu: `Un parallélogramme est :<br>— un <strong>rectangle</strong> si ses diagonales ont la même longueur ;<br>— un <strong>losange</strong> si ses diagonales sont perpendiculaires ;<br>— un <strong>carré</strong> si ses diagonales sont à la fois égales et perpendiculaires.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Nature d\'un quadrilatère',
            contenu: `$ABCD$ est un parallélogramme dont les diagonales $[AC]$ et $[BD]$ sont perpendiculaires mais de longueurs différentes.<br>Diagonales perpendiculaires → <strong>losange</strong>.<br>Diagonales inégales → ce n'est pas un carré.`
          }
        ]
      },
      {
        titre: 'Aire du parallélogramme',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Aire',
            contenu: `$$\\mathcal{A} = b \\times h,$$<br>où $b$ est la longueur d'un côté (la base) et $h$ la <strong>hauteur</strong> correspondante (distance entre la base et le côté opposé).<br>Attention : $h$ n'est pas la longueur du côté oblique.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Repérer base et hauteur',
            contenu: `1. Choisir un côté comme base.<br>2. La hauteur est le segment perpendiculaire à cette base, joignant le côté opposé.<br>3. Multiplier base $\\times$ hauteur.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'aire',
            contenu: `Parallélogramme de base $7$ cm et de hauteur $4$ cm.<br>$\\mathcal{A} = 7 \\times 4 = 28$ cm$^2$.<br>Le côté oblique de $5$ cm n'intervient pas dans le calcul de l'aire.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-symcentrale',
    matiere: 'ma',
    titre: 'Symétrie centrale',
    ordre: 9,
    filiere: '5eme',
    enrich: false,
    sections: [
      {
        titre: 'Définition',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Symétrique d\'un point',
            contenu: `Le <strong>symétrique</strong> d'un point $M$ par rapport à un point $O$ est le point $M'$ tel que $O$ soit le <strong>milieu</strong> du segment $[MM']$.<br>$O$ est le <strong>centre de symétrie</strong>. Le symétrique de $O$ est $O$ lui-même.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire un symétrique',
            contenu: `Pour construire $M'$, symétrique de $M$ par rapport à $O$ :<br>1. Tracer la demi-droite $[MO)$.<br>2. Reporter la longueur $OM$ au-delà de $O$ (au compas).<br>3. $M'$ est le point obtenu : $OM' = OM$ et $M$, $O$, $M'$ alignés.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Construction pas à pas',
            contenu: `$O$ milieu de $[MM']$ avec $OM = 3$ cm.<br>On trace $(MO)$, on prolonge, et on place $M'$ tel que $OM' = 3$ cm, de l'autre côté de $O$.<br>Ainsi $MM' = 6$ cm.`
          }
        ]
      },
      {
        titre: 'Propriétés de conservation',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'La symétrie centrale conserve',
            contenu: `La symétrie centrale conserve :<br>— les <strong>longueurs</strong> (et les distances) ;<br>— les <strong>angles</strong> et la mesure des angles ;<br>— les <strong>aires</strong> ;<br>— l'<strong>alignement</strong> et le parallélisme.<br>Une figure et son symétrique sont <strong>superposables</strong>.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Image d\'une droite',
            contenu: `Le symétrique d'une droite par rapport à un point est une droite <strong>parallèle</strong> à la première.<br>Le symétrique d'un segment est un segment de même longueur ; le symétrique d'un cercle est un cercle de même rayon.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Conservation des longueurs',
            contenu: `Un triangle $ABC$ a pour symétrique $A'B'C'$ par rapport à $O$.<br>Si $AB = 5$ cm, alors $A'B' = 5$ cm.<br>L'aire de $A'B'C'$ est égale à celle de $ABC$.`
          }
        ]
      },
      {
        titre: 'Centre de symétrie d\'une figure',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Figure à centre de symétrie',
            contenu: `Une figure admet un <strong>centre de symétrie</strong> $O$ si son symétrique par rapport à $O$ est la figure elle-même.<br>Le parallélogramme, le cercle, le rectangle, le losange et le carré possèdent un centre de symétrie.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Centre du parallélogramme',
            contenu: `Le parallélogramme $ABCD$ admet pour centre de symétrie le point d'intersection $O$ de ses diagonales.<br>Le symétrique de $A$ par rapport à $O$ est $C$, et le symétrique de $B$ est $D$.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-5e-statproba',
    matiere: 'ma',
    titre: 'Statistiques et probabilités',
    ordre: 12,
    filiere: '5eme',
    enrich: false,
    sections: [
      {
        titre: 'Effectifs et fréquences',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Effectif et effectif total',
            contenu: `L'<strong>effectif</strong> d'une valeur est le nombre de fois où elle apparaît dans une série.<br>L'<strong>effectif total</strong> $N$ est le nombre total de données (somme de tous les effectifs).`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Fréquence',
            contenu: `La <strong>fréquence</strong> d'une valeur est la proportion de cette valeur dans la série :<br>$$f = \\frac{\\text{effectif}}{\\text{effectif total}} = \\frac{n}{N}.$$<br>Elle s'exprime sous forme de fraction, de décimal ou de pourcentage. La somme de toutes les fréquences vaut $1$ (soit $100\\,\\%$).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de fréquence',
            contenu: `Sur $50$ élèves, $12$ ont choisi l'option théâtre.<br>Fréquence : $\\dfrac{12}{50} = 0{,}24 = 24\\,\\%$.`
          }
        ]
      },
      {
        titre: 'Moyenne',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Moyenne d\'une série',
            contenu: `La <strong>moyenne</strong> est la somme de toutes les valeurs divisée par l'effectif total :<br>$$\\bar{x} = \\frac{\\text{somme des valeurs}}{N}.$$`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Moyenne pondérée',
            contenu: `Quand chaque valeur $x_i$ a un effectif $n_i$ :<br>$$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\cdots + n_p x_p}{N},$$<br>où $N = n_1 + n_2 + \\cdots + n_p$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une moyenne pondérée',
            contenu: `1. Multiplier chaque valeur par son effectif.<br>2. Additionner tous ces produits.<br>3. Diviser par l'effectif total.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Moyenne de notes',
            contenu: `Notes : $8$ (coef $1$), $12$ (coef $2$), $15$ (coef $1$).<br>Somme pondérée : $8 \\times 1 + 12 \\times 2 + 15 \\times 1 = 8 + 24 + 15 = 47$.<br>Total des coefficients : $1 + 2 + 1 = 4$.<br>Moyenne : $\\dfrac{47}{4} = 11{,}75$.`
          }
        ]
      },
      {
        titre: 'Initiation aux probabilités',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Expérience aléatoire et issue',
            contenu: `Une <strong>expérience aléatoire</strong> a plusieurs résultats possibles, sans qu'on puisse prévoir lequel se produira (lancer un dé, tirer une carte).<br>Chaque résultat possible est une <strong>issue</strong>. Un <strong>événement</strong> est un ensemble d'issues.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Probabilité',
            contenu: `La <strong>probabilité</strong> d'un événement est un nombre entre $0$ et $1$ qui mesure sa chance de se réaliser.<br>$0$ : événement impossible. $1$ : événement certain.<br>Dans une situation d'<strong>équiprobabilité</strong> :<br>$$p = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}.$$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une probabilité simple',
            contenu: `1. Dénombrer toutes les issues possibles (équiprobables).<br>2. Dénombrer les issues favorables à l'événement.<br>3. Faire le quotient favorables $\\div$ total.<br>4. Simplifier ou convertir en pourcentage si demandé.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Lancer d\'un dé',
            contenu: `On lance un dé équilibré à $6$ faces.<br>Probabilité d'obtenir un nombre pair ($2$, $4$ ou $6$) :<br>$p = \\dfrac{3}{6} = \\dfrac{1}{2} = 50\\,\\%$.<br>Probabilité d'obtenir $5$ : $p = \\dfrac{1}{6}$.`
          }
        ]
      }
    ]
  }
]
