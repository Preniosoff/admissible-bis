// Compléments éditoriaux de cours — lot 1.
// Objectif : renforcer les chapitres les plus faibles sans écraser le contenu existant.
// Les formulations sont adaptées au niveau : exemples concrets au collège, notation plus dense en prépa.

export const DATA = [
  {
    id: 'svt-6e-energie',
    append: true,
    sections: [
      {
        titre: 'Compléments essentiels',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Une énergie se transforme',
            contenu: `L'énergie ne disparaît pas : elle <strong>change de forme</strong>.<br>Exemples simples : une lampe transforme de l'énergie électrique en lumière et en chaleur ; un vélo transforme l'énergie des muscles en mouvement ; une éolienne transforme le vent en électricité.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Décrire une chaîne d’énergie',
            contenu: `Pour décrire une situation, on peut répondre à trois questions :<br><ul><li><strong>D’où vient</strong> l’énergie ?</li><li>Quel objet ou être vivant <strong>l’utilise</strong> ?</li><li>En quoi est-elle <strong>transformée</strong> ?</li></ul>Exemple : Soleil → panneau solaire → électricité → lampe → lumière.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Renouvelable ou non renouvelable',
            contenu: `Une source d’énergie est <strong>renouvelable</strong> si elle se reconstitue naturellement à l’échelle d’une vie humaine : Soleil, vent, eau en mouvement, biomasse bien gérée.<br>Elle est <strong>non renouvelable</strong> si elle met très longtemps à se former : pétrole, gaz, charbon, uranium.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Classer des sources d’énergie',
            contenu: `Classe les sources suivantes : vent, pétrole, Soleil, charbon, eau d’un barrage, gaz naturel.<br><strong>Correction :</strong> renouvelables : vent, Soleil, eau d’un barrage. Non renouvelables : pétrole, charbon, gaz naturel.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-puberte',
    append: true,
    sections: [
      {
        titre: 'Repères pour bien comprendre',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Un rythme différent selon les personnes',
            contenu: `La puberté ne commence pas au même âge pour tout le monde. Deux élèves du même âge peuvent donc avoir des corps très différents : c’est <strong>normal</strong>. Ce qui compte, c’est de comprendre que ces changements sont progressifs et liés au développement du corps.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Distinguer transformation physique et émotionnelle',
            contenu: `Quand tu lis un document sur l’adolescence, sépare les informations en deux colonnes :<br><ul><li><strong>corps</strong> : croissance, pilosité, règles, mue de la voix ;</li><li><strong>ressenti</strong> : émotions plus fortes, besoin d’autonomie, relations qui changent.</li></ul>Cette séparation évite de tout mélanger.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Identifier un changement',
            contenu: `Phrase : « Lina grandit vite, ses seins se développent et elle se sent parfois plus sensible qu’avant. »<br><strong>Correction :</strong> croissance et développement des seins = transformations physiques ; sensibilité plus forte = transformation émotionnelle possible.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-contraception',
    append: true,
    sections: [
      {
        titre: 'Prévention et choix responsables',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Contraception et protection ne veulent pas dire la même chose',
            contenu: `Une contraception sert à <strong>éviter une grossesse</strong>. Une protection contre les IST sert à <strong>éviter une infection</strong>.<br>Le préservatif est particulier : il aide à éviter une grossesse et protège aussi contre de nombreuses IST.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Lire une situation sans juger',
            contenu: `En SVT, on raisonne de façon factuelle :<br><ul><li>quel est le risque de grossesse ?</li><li>quel est le risque d’IST ?</li><li>quelle solution protège contre quel risque ?</li></ul>Le but du cours n’est pas de juger une personne, mais de comprendre les moyens de prévention.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Choisir la bonne information',
            contenu: `Un couple utilise une pilule contraceptive mais pas de préservatif. Quel risque reste possible ?<br><strong>Correction :</strong> la pilule limite le risque de grossesse, mais elle ne protège pas des IST. Le risque d’infection reste donc possible.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-transmission-vie',
    append: true,
    sections: [
      {
        titre: 'Étapes à retenir',
        cartes: [
          {
            type: 'meth', label: 'Méthode', titre: 'Remettre les étapes dans l’ordre',
            contenu: `Pour suivre le début d’une grossesse, retiens cet ordre :<br><strong>ovulation</strong> → rencontre des gamètes dans une trompe → <strong>fécondation</strong> → cellule-œuf → divisions → <strong>nidation</strong> dans l’utérus.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Le placenta est un lieu d’échanges',
            contenu: `Le placenta permet des échanges entre la mère et le futur bébé : dioxygène et nutriments vont vers le fœtus ; certains déchets repartent vers la mère. Les deux sangs sont proches, mais ils <strong>ne se mélangent pas directement</strong>.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Compléter une phrase',
            contenu: `Complète : la fécondation a lieu dans une ______ ; la nidation a lieu dans l’______.<br><strong>Correction :</strong> la fécondation a lieu dans une <strong>trompe</strong> ; la nidation a lieu dans l’<strong>utérus</strong>.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-tectonique',
    append: true,
    sections: [
      {
        titre: 'Comprendre les plaques',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Plaque lithosphérique',
            contenu: `Une <strong>plaque lithosphérique</strong> est une grande portion rigide de la surface de la Terre. Elle se déplace très lentement, de quelques centimètres par an, sur une couche plus chaude et plus déformable située en dessous.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Les limites de plaques sont actives',
            contenu: `Les séismes et les volcans ne sont pas répartis au hasard : ils se concentrent surtout aux <strong>limites des plaques</strong>. C’est un indice important pour retrouver la position des plaques sur une carte.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Lire une carte de la tectonique',
            contenu: `Sur une carte, commence par repérer les alignements de séismes et de volcans. Ces alignements dessinent souvent les limites entre deux plaques. Ensuite, regarde les flèches : elles indiquent le sens du déplacement.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Interpréter une zone active',
            contenu: `Une région présente de nombreux séismes alignés et plusieurs volcans. Que peut-on en déduire ?<br><strong>Correction :</strong> cette région se situe probablement près d’une limite de plaques.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-seismes',
    append: true,
    sections: [
      {
        titre: 'Ondes et risques',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Foyer et épicentre',
            contenu: `Le <strong>foyer</strong> est l’endroit en profondeur où la rupture des roches commence. L’<strong>épicentre</strong> est le point situé à la surface, juste au-dessus du foyer. C’est souvent près de l’épicentre que les secousses sont les plus fortes.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Un séisme libère de l’énergie',
            contenu: `Lors d’un séisme, des roches cassent brutalement en profondeur. Cette rupture libère de l’énergie qui se propage sous forme d’<strong>ondes sismiques</strong>. Ces ondes font vibrer le sol.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Ne pas confondre magnitude et dégâts',
            contenu: `La <strong>magnitude</strong> mesure l’énergie libérée par le séisme. Les <strong>dégâts</strong> dépendent aussi de la profondeur, de la distance à l’épicentre, des bâtiments et de la préparation de la population. Un même séisme ne cause donc pas les mêmes dégâts partout.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-risques-geologiques',
    append: true,
    sections: [
      {
        titre: 'Prévenir les risques',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Aléa, enjeu, risque',
            contenu: `Un <strong>aléa</strong> est un événement naturel possible : séisme, éruption, glissement de terrain. Un <strong>enjeu</strong> est ce qui peut être touché : habitants, écoles, routes, hôpitaux. Le <strong>risque</strong> existe quand un aléa menace des enjeux.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Prévoir n’est pas toujours possible',
            contenu: `On ne sait pas toujours prévoir précisément le jour et l’heure d’un séisme. En revanche, on peut réduire le risque : construire selon des normes adaptées, informer la population, préparer des consignes et surveiller les zones dangereuses.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Analyser une situation de risque',
            contenu: `Pour analyser un document :<br><ul><li>repère l’<strong>aléa</strong> ;</li><li>repère les <strong>enjeux</strong> exposés ;</li><li>propose une mesure de <strong>prévention</strong>.</li></ul>Exemple : volcan + ville proche + plan d’évacuation.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Distinguer aléa et enjeu',
            contenu: `Dans une ville située près d’un volcan, le volcan correspond-il à l’aléa ou à l’enjeu ? Et les habitants ?<br><strong>Correction :</strong> le volcan est l’aléa ; les habitants sont des enjeux.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-5e-reproduction-asexuee',
    append: true,
    sections: [
      {
        titre: 'Exemples et méthode',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Reproduction asexuée',
            contenu: `La <strong>reproduction asexuée</strong> permet de former un nouvel être vivant à partir d’un seul parent, sans rencontre entre deux cellules reproductrices. Le nouvel individu ressemble beaucoup au parent.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Des exemples fréquents',
            contenu: `Chez les végétaux, une nouvelle plante peut parfois se former à partir d’une tige, d’un bulbe, d’un tubercule ou d’un fragment. Exemple : un fraisier produit des stolons ; une pomme de terre peut donner une nouvelle plante à partir d’un tubercule.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Reconnaître une reproduction asexuée',
            contenu: `Pose-toi deux questions :<br><ul><li>y a-t-il un seul parent au départ ?</li><li>observe-t-on une nouvelle plante ou un nouvel organisme formé à partir d’un morceau, d’un bourgeon ou d’une structure du parent ?</li></ul>Si oui, il s’agit probablement d’une reproduction asexuée.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-3e-agrand',
    append: true,
    sections: [
      {
        titre: 'Repères de méthode',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Agrandissement et réduction',
            contenu: `Quand toutes les longueurs d’une figure sont multipliées par le même nombre, on obtient une figure de même forme.<br>Si ce nombre est plus grand que 1, c’est un <strong>agrandissement</strong>. S’il est entre 0 et 1, c’est une <strong>réduction</strong>.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Les angles ne changent pas',
            contenu: `Dans un agrandissement ou une réduction, les longueurs changent, mais les <strong>angles restent les mêmes</strong>. C’est pour cela que la figure garde la même forme.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Trouver le coefficient',
            contenu: `Compare deux longueurs qui se correspondent.<br>Exemple : un segment mesure 4 cm sur la petite figure et 10 cm sur la grande. Le coefficient est $10 \\div 4 = 2{,}5$. Toutes les longueurs ont donc été multipliées par 2,5.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Calculer une longueur manquante',
            contenu: `Une figure est agrandie avec un coefficient 3. Un côté mesurait 5 cm. Quelle est sa nouvelle longueur ?<br><strong>Correction :</strong> $5 \\times 3 = 15$. Le nouveau côté mesure 15 cm.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-3e-calclit2',
    append: true,
    sections: [
      {
        titre: 'Équations : méthode claire',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Une équation garde son équilibre',
            contenu: `Une équation fonctionne comme une balance : si on ajoute, enlève, multiplie ou divise par le même nombre des deux côtés, l’égalité reste vraie. Le but est d’isoler l’inconnue.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Résoudre une équation simple',
            contenu: `Pour résoudre $3x + 5 = 20$ :<br>1. On enlève 5 des deux côtés : $3x = 15$.<br>2. On divise par 3 : $x = 5$.<br>3. On vérifie : $3 \\times 5 + 5 = 20$.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Éviter l’erreur de signe',
            contenu: `Quand un terme change de côté, son signe change parce qu’on effectue la même opération des deux côtés.<br>Exemple : $x - 7 = 12$. On ajoute 7 des deux côtés : $x = 19$.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Résoudre pas à pas',
            contenu: `Résoudre $4x - 3 = 25$.<br><strong>Correction :</strong> on ajoute 3 : $4x = 28$. On divise par 4 : $x = 7$. Vérification : $4 \\times 7 - 3 = 25$.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-3e-fonaffine',
    append: true,
    sections: [
      {
        titre: 'Lire et utiliser une fonction affine',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Fonction affine',
            contenu: `Une fonction affine est une fonction dont la représentation graphique est une <strong>droite</strong>. Elle peut s’écrire sous la forme $x \\mapsto ax + b$, mais en troisième on peut surtout retenir : elle ajoute une valeur de départ et évolue toujours au même rythme.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Le coefficient directeur',
            contenu: `Le coefficient directeur indique comment la valeur change quand on avance de 1 sur l’axe horizontal.<br>Exemple : si le prix augmente de 2 euros à chaque cahier ajouté, le coefficient directeur est 2.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Lire une droite à partir de deux points',
            contenu: `Pour comprendre une droite, choisis deux points faciles à lire. Regarde de combien on avance horizontalement, puis de combien on monte ou descend verticalement. Cela donne le rythme de la fonction.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Interpréter une situation',
            contenu: `Un abonnement coûte 10 euros au départ, puis 3 euros par séance. Quel est le prix pour 4 séances ?<br><strong>Correction :</strong> prix = 10 + 3 × 4 = 22 euros.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-3e-trisiml',
    append: true,
    sections: [
      {
        titre: 'Identifier des triangles semblables',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Triangles semblables',
            contenu: `Deux triangles sont <strong>semblables</strong> s’ils ont la même forme. Ils peuvent avoir des tailles différentes, mais leurs angles correspondants sont égaux et leurs côtés correspondants sont proportionnels.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Trouver les côtés qui se correspondent',
            contenu: `Commence par repérer les angles égaux. Le côté situé entre deux angles connus correspond au côté situé entre les deux mêmes angles dans l’autre triangle. Cette étape évite de mélanger les longueurs.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Utiliser un rapport',
            contenu: `Dans deux triangles semblables, un côté de 4 cm correspond à un côté de 10 cm. Un autre côté mesure 6 cm dans le petit triangle. Quelle est sa longueur dans le grand ?<br><strong>Correction :</strong> coefficient $= 10 \\div 4 = 2{,}5$. Donc $6 \\times 2{,}5 = 15$ cm.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-tm-algebre',
    append: true,
    sections: [
      {
        titre: 'Compléments de calcul matriciel',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Matrice et coefficients',
            contenu: `Une matrice est un tableau de nombres. Une matrice à $m$ lignes et $n$ colonnes est dite de taille $m \\times n$. Le coefficient situé à la ligne $i$ et à la colonne $j$ est souvent noté $a_{ij}$.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Produit de matrices',
            contenu: `Le produit $AB$ est défini lorsque le nombre de colonnes de $A$ est égal au nombre de lignes de $B$. Le coefficient ligne $i$, colonne $j$ de $AB$ s’obtient en multipliant la ligne $i$ de $A$ par la colonne $j$ de $B$, puis en additionnant.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Multiplier deux matrices sans se tromper',
            contenu: `1. Vérifier que le produit existe.<br>2. Prévoir la taille du résultat.<br>3. Calculer chaque coefficient ligne par colonne.<br>4. Relire les signes et les ordres : en général, $AB$ et $BA$ ne donnent pas le même résultat.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Calcul d’un coefficient',
            contenu: `Si la première ligne de $A$ est $(2, -1)$ et la première colonne de $B$ est $\\binom{3}{4}$, alors le coefficient correspondant de $AB$ vaut $2 \\times 3 + (-1) \\times 4 = 2$.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-ps',
    append: true,
    sections: [
      {
        titre: 'Méthodes de produit scalaire',
        cartes: [
          {
            type: 'meth', label: 'Méthode', titre: 'Choisir l’expression du produit scalaire',
            contenu: `Selon le problème, on choisit la forme la plus efficace :<br><ul><li>coordonnées : $\\langle x,y\\rangle = \\sum_i x_i y_i$ ;</li><li>norme : $\\langle x,y\\rangle = \\frac12(\\|x+y\\|^2-\\|x\\|^2-\\|y\\|^2)$ ;</li><li>angle : $\\langle x,y\\rangle = \\|x\\|\\,\\|y\\|\\cos\\theta$ en géométrie euclidienne.</li></ul>Le choix doit réduire le calcul, pas l’alourdir.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Montrer une orthogonalité',
            contenu: `Pour prouver que deux vecteurs ou sous-espaces sont orthogonaux, on revient presque toujours à la définition :<br>$$x \\perp y \\iff \\langle x,y\\rangle = 0.$$<br>Pour deux sous-espaces $F$ et $G$, il faut vérifier $\\langle f,g\\rangle=0$ pour tous $f\\in F$ et $g\\in G$, souvent à partir de bases de $F$ et $G$.`
          },
          {
            type: 'th', label: 'Théorème', titre: 'Projection orthogonale',
            contenu: `Si $F$ est un sous-espace vectoriel de dimension finie d’un espace euclidien $E$, alors tout $x\\in E$ se décompose de manière unique :<br>$$x = p_F(x) + r, \\qquad p_F(x)\\in F,\\quad r\\in F^\\perp.$$<br>Le vecteur $p_F(x)$ est la projection orthogonale de $x$ sur $F$, et il est caractérisé par $x-p_F(x)\\in F^\\perp$.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Projeter sur une base orthonormée',
            contenu: `Si $(e_1,\\dots,e_p)$ est une base orthonormée de $F$, alors :<br>$$p_F(x)=\\sum_{k=1}^{p}\\langle x,e_k\\rangle e_k.$$<br>Si la base n’est pas orthonormée, on commence par orthonormaliser ou on résout le système donné par $x-p_F(x)\\in F^\\perp$.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-red',
    append: true,
    sections: [
      {
        titre: 'Méthodes de réduction',
        cartes: [
          {
            type: 'meth', label: 'Méthode', titre: 'Décider si une matrice est diagonalisable',
            contenu: `Stratégie standard en dimension finie :<br><ol><li>calculer ou factoriser $\\chi_A$ ;</li><li>trouver les valeurs propres ;</li><li>comparer, pour chaque $\\lambda$, la dimension de $E_\\lambda=\\ker(A-\\lambda I)$ à la multiplicité algébrique ;</li><li>conclure : $A$ est diagonalisable si la somme des dimensions des sous-espaces propres vaut $n$.</li></ol>`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Critère par polynôme annulateur',
            contenu: `Un endomorphisme $u$ est diagonalisable sur $\\mathbb K$ si et seulement s’il possède un polynôme annulateur <strong>scindé à racines simples</strong> sur $\\mathbb K$. En pratique, ce critère est très puissant quand l’énoncé donne une relation comme $A^2=A$, $A^3=A$ ou $(A-I)(A+2I)=0$.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Exploiter une relation polynomiale',
            contenu: `Si l’énoncé donne $P(A)=0$, factorise $P$. Les racines possibles de $P$ contiennent les valeurs propres de $A$. Si $P$ est scindé à racines simples, la diagonalisabilité est immédiate. Si une racine est multiple, il faut continuer l’étude avec noyaux, dimensions ou polynôme minimal.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Cas $A^3=A$',
            contenu: `Soit $A\\in\\mathcal M_n(\\mathbb R)$ telle que $A^3=A$. Alors $A$ est annulée par $P(X)=X^3-X=X(X-1)(X+1)$. Ce polynôme est scindé sur $\\mathbb R$ et ses racines sont simples. Donc $A$ est diagonalisable et ses valeurs propres sont dans $\\{-1,0,1\\}$.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-volcanisme',
    append: true,
    sections: [
      {
        titre: 'Volcans : reconnaître et expliquer',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Magma et lave',
            contenu: `Le <strong>magma</strong> est de la roche fondue située en profondeur, mélangée à des gaz. Quand il arrive à la surface, on parle de <strong>lave</strong>. Cette distinction est importante : magma en profondeur, lave à la surface.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Deux grands types d’éruptions',
            contenu: `Une éruption <strong>effusive</strong> produit surtout des coulées de lave fluide. Une éruption <strong>explosive</strong> projette des cendres, des gaz et des blocs ; elle peut former des nuées ardentes très dangereuses.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Identifier le type d’éruption',
            contenu: `Dans un document, cherche les indices : coulées longues et lave fluide → éruption effusive ; panache de cendres, explosions, nuées ardentes → éruption explosive. Ne te base pas seulement sur la forme du volcan.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Lire une description',
            contenu: `Un volcan émet une lave fluide qui descend lentement sur ses pentes, sans grande explosion. Quel type d’éruption est décrit ?<br><strong>Correction :</strong> c’est une éruption effusive.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-4e-structure-terre',
    append: true,
    sections: [
      {
        titre: 'Structure interne : repères',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Croûte, manteau, noyau',
            contenu: `La Terre est organisée en grandes enveloppes : la <strong>croûte</strong> en surface, le <strong>manteau</strong> en dessous, puis le <strong>noyau</strong>. Ces enveloppes n’ont pas la même composition, ni le même comportement.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Lithosphère et asthénosphère',
            contenu: `La <strong>lithosphère</strong> est rigide : elle forme les plaques. L’<strong>asthénosphère</strong>, située en dessous, est plus chaude et peut se déformer lentement. Les plaques se déplacent sur cette zone plus déformable.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Relier structure et tectonique',
            contenu: `Pour expliquer un mouvement de plaques, commence par rappeler que les plaques appartiennent à la lithosphère rigide. Elles peuvent se déplacer car la zone située dessous se comporte de façon plus déformable sur de longues durées.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-6e-nutrition',
    append: true,
    sections: [
      {
        titre: 'Bien distinguer les besoins',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Les végétaux ne mangent pas comme les animaux',
            contenu: `Un animal doit manger d’autres êtres vivants ou des produits issus d’êtres vivants. Une plante verte, elle, fabrique sa matière grâce à la lumière, à l’eau, aux sels minéraux et au dioxyde de carbone.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Construire une chaîne alimentaire',
            contenu: `Commence toujours par un végétal vert ou un producteur. Puis ajoute l’animal qui le mange, puis l’animal qui mange cet animal. La flèche va de ce qui est mangé vers celui qui mange.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Trouver le producteur',
            contenu: `Dans la chaîne herbe → criquet → grenouille → couleuvre, quel être vivant est le producteur ?<br><strong>Correction :</strong> l’herbe, car c’est un végétal vert qui fabrique sa matière.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-5e-appareil-respiratoire',
    append: true,
    sections: [
      {
        titre: 'Respiration : trajet et échanges',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Respirer',
            contenu: `Respirer, ce n’est pas seulement faire entrer et sortir de l’air. C’est aussi permettre au corps de prendre du <strong>dioxygène</strong> et de rejeter du <strong>dioxyde de carbone</strong>.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Les alvéoles pulmonaires',
            contenu: `Les alvéoles pulmonaires sont de très petits sacs entourés de vaisseaux sanguins. Leur paroi fine permet les échanges : le dioxygène passe vers le sang, et le dioxyde de carbone passe du sang vers l’air expiré.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Suivre le trajet de l’air',
            contenu: `Pour ne pas te perdre, récite le trajet dans l’ordre : nez ou bouche → trachée → bronches → bronchioles → alvéoles pulmonaires.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Comprendre un échange',
            contenu: `Dans quel sens passe le dioxygène au niveau des alvéoles ?<br><strong>Correction :</strong> il passe de l’air contenu dans les alvéoles vers le sang.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-activite-physique',
    append: true,
    sections: [
      {
        titre: 'Effort et réponses de l’organisme',
        cartes: [
          {
            type: 'prop', label: 'Propriété', titre: 'Pendant l’effort, les besoins augmentent',
            contenu: `Lors d’un effort, les muscles consomment davantage de dioxygène et de nutriments. L’organisme répond en augmentant la fréquence respiratoire et la fréquence cardiaque afin d’apporter plus rapidement ce dont les muscles ont besoin.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Lire des mesures avant/après effort',
            contenu: `Compare toujours les valeurs au repos et après l’effort : fréquence cardiaque, fréquence respiratoire, consommation de dioxygène. Puis relie l’augmentation à une demande plus forte des muscles.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Interpréter une fréquence cardiaque',
            contenu: `Un élève passe de 70 battements par minute au repos à 140 après une course. Que montre cette hausse ?<br><strong>Correction :</strong> le cœur envoie plus de sang vers les organes, notamment les muscles, pour répondre à leurs besoins accrus.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-communication-nerveuse',
    append: true,
    sections: [
      {
        titre: 'Messages nerveux et réaction',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Message nerveux',
            contenu: `Un <strong>message nerveux</strong> est une information transmise par les nerfs. Il permet à l’organisme de recevoir une information, de la traiter, puis de produire une réponse adaptée.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Du stimulus à la réponse',
            contenu: `Un stimulus est détecté par un récepteur sensoriel. Un message nerveux sensitif va vers le centre nerveux, puis un message nerveux moteur repart vers un muscle ou un organe effecteur.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Schématiser une réponse nerveuse',
            contenu: `Utilise une chaîne simple : stimulus → récepteur → nerf sensitif → centre nerveux → nerf moteur → organe effecteur → réponse. Cette méthode aide à organiser un schéma ou une explication.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Identifier l’effecteur',
            contenu: `Quand tu retires ta main d’un objet très chaud, quel est l’organe effecteur principal ?<br><strong>Correction :</strong> ce sont les muscles du bras et de la main, car ils réalisent le mouvement de retrait.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-microbiote',
    append: true,
    sections: [
      {
        titre: 'Microbiote et santé',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Microbiote',
            contenu: `Le <strong>microbiote</strong> est l’ensemble des micro-organismes vivant dans ou sur notre corps. Le microbiote intestinal est le plus connu : il participe à la digestion et interagit avec le système immunitaire.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Un équilibre fragile',
            contenu: `Le microbiote peut être modifié par l’alimentation, les infections, certains médicaments comme les antibiotiques, ou le mode de vie. Un déséquilibre durable peut être associé à certains troubles de santé.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Interpréter une expérience sur le microbiote',
            contenu: `Repère le groupe témoin, le groupe testé, puis la seule condition qui change. Ensuite, compare les résultats. Sans témoin, il est difficile d’affirmer qu’un effet vient réellement du microbiote.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-agrosystemes',
    append: true,
    sections: [
      {
        titre: 'Agrosystèmes : bilans simples',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Agrosystème',
            contenu: `Un <strong>agrosystème</strong> est un écosystème modifié et géré par l’être humain pour produire de la nourriture, des fibres ou d’autres ressources : champ de blé, élevage, verger, serre.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Un agrosystème reçoit des apports',
            contenu: `Contrairement à un écosystème naturel, un agrosystème reçoit souvent des apports : irrigation, engrais, énergie, pesticides, travail mécanique. Il exporte aussi de la matière lorsque la récolte est retirée du milieu.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Faire le bilan d’un agrosystème',
            contenu: `Sépare les <strong>entrées</strong> et les <strong>sorties</strong> : entrées = eau, engrais, énergie, semences ; sorties = récolte, déchets, pertes possibles. Cette lecture permet d’évaluer le rendement et l’impact environnemental.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Repérer une sortie',
            contenu: `Dans un champ de maïs, la récolte est-elle une entrée ou une sortie de l’agrosystème ?<br><strong>Correction :</strong> c’est une sortie, car de la matière produite est retirée du champ.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-ecosystemes-services',
    append: true,
    sections: [
      {
        titre: 'Fonctionnement et services',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Écosystème',
            contenu: `Un <strong>écosystème</strong> regroupe un milieu de vie et les êtres vivants qui y habitent, avec toutes leurs interactions : alimentation, compétition, coopération, recyclage de la matière.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Les services écosystémiques',
            contenu: `Les écosystèmes rendent des services aux sociétés humaines : production de nourriture, pollinisation, stockage de carbone, filtration de l’eau, protection contre l’érosion, cadre de vie.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Relier biodiversité et service rendu',
            contenu: `Pour analyser un exemple, repère d’abord les êtres vivants impliqués, puis le service rendu. Exemple : abeilles et autres pollinisateurs → pollinisation → production de fruits et maintien de nombreuses plantes.`
          }
        ]
      }
    ]
  },

  {
    id: 'svt-2nde-erosion-biodiversite',
    append: true,
    sections: [
      {
        titre: 'Érosion de la biodiversité',
        cartes: [
          {
            type: 'def', label: 'Définition', titre: 'Érosion de la biodiversité',
            contenu: `L’<strong>érosion de la biodiversité</strong> désigne la diminution de la diversité du vivant : disparition d’espèces, baisse des populations, appauvrissement des milieux et diminution de la diversité génétique.`
          },
          {
            type: 'prop', label: 'Propriété', titre: 'Causes principales',
            contenu: `Les grandes causes sont la destruction des habitats, la surexploitation, les pollutions, les espèces exotiques envahissantes et le changement climatique. Dans une situation réelle, plusieurs causes peuvent agir en même temps.`
          },
          {
            type: 'meth', label: 'Méthode', titre: 'Analyser un document sur la biodiversité',
            contenu: `Commence par identifier ce qui diminue : nombre d’individus, aire de répartition, nombre d’espèces, qualité du milieu. Puis cherche la cause proposée et une conséquence possible pour l’écosystème.`
          },
          {
            type: 'ex', label: 'Exercice', titre: 'Identifier une cause',
            contenu: `Une zone humide est asséchée pour construire une route, puis plusieurs espèces d’amphibiens disparaissent localement. Quelle cause principale est mise en jeu ?<br><strong>Correction :</strong> la destruction ou transformation de l’habitat.`
          }
        ]
      }
    ]
  }
];
