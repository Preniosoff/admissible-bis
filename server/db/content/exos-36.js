export const DATA = [
  {
    id: 'phch-5e-atome',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La combustion du carbone',
            contenu: `<strong>Énoncé.</strong> On brûle un morceau de carbone (charbon de bois, constitué d'atomes de carbone notés C) dans un flacon contenant du dioxygène. Le carbone réagit avec le dioxygène (molécule formée de deux atomes d'oxygène, notée O₂) pour former du dioxyde de carbone (molécule notée CO₂).
On dispose des informations suivantes : la masse de carbone brûlé est de 3 g, la masse de dioxygène consommé est de 8 g.
1. Le carbone est-il un corps pur ou un mélange ? Justifier en parlant de l'échelle microscopique.
2. Faire un schéma à l'échelle microscopique (avec des ronds représentant les atomes) montrant les molécules avant et après la réaction. Combien d'atomes de chaque sorte y a-t-il avant ? Après ?
3. Énoncer la loi de conservation des atomes lors d'une combustion.
4. En déduire la masse de dioxyde de carbone formé. Justifier le calcul.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le carbone est un <em>corps pur</em> : à l'échelle microscopique, il est constitué d'une seule sorte d'atomes (les atomes de carbone C), tous identiques. Un mélange contiendrait au contraire plusieurs sortes de constituants différents.
<strong>2.</strong> Avant la réaction : un atome de carbone C et une molécule de dioxygène O₂ (deux ronds d'oxygène liés). Il y a donc <strong>1 atome de carbone et 2 atomes d'oxygène</strong>.
Après la réaction : une molécule de dioxyde de carbone CO₂ (un atome de carbone au centre lié à deux atomes d'oxygène). Il y a toujours <strong>1 atome de carbone et 2 atomes d'oxygène</strong>.
Les atomes se sont simplement réorganisés : aucun n'a été créé ni détruit.
<strong>3.</strong> Loi de conservation : lors d'une combustion (et plus généralement de toute transformation chimique), les atomes se conservent. Le nombre d'atomes de chaque sorte est le même avant et après la réaction ; ils se réarrangent pour former de nouvelles molécules.
<strong>4.</strong> Puisque les atomes se conservent, la masse totale se conserve aussi. La masse des produits est égale à la masse des réactifs :
$$m_{CO_2} = m_C + m_{O_2} = 3 + 8 = 11 \\text{ g}.$$
Il se forme donc <strong>11 g de dioxyde de carbone</strong>.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-elec',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Guirlande : série, dérivation et court-circuit',
            contenu: `<strong>Énoncé.</strong> Pour décorer la classe, on dispose d'une pile, de fils de connexion, d'un interrupteur et de trois lampes identiques L1, L2 et L3.
1. On réalise d'abord un circuit en <em>série</em> avec la pile, l'interrupteur et les trois lampes. Faire le schéma normalisé. Que se passe-t-il si on dévisse la lampe L2 ? Pourquoi ?
2. On réalise maintenant un circuit où les trois lampes sont branchées en <em>dérivation</em> (en parallèle) sur la pile. Faire le schéma. Si on dévisse L2, que deviennent L1 et L3 ?
3. Comparer l'éclat des lampes entre le montage en série et le montage en dérivation (la pile étant la même). Quel montage choisirais-tu pour une guirlande et pourquoi ?
4. Par erreur, on relie directement les deux bornes de la pile par un fil. Comment s'appelle cette situation ? Pourquoi est-elle dangereuse ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Schéma série : la pile, l'interrupteur et les trois lampes forment <em>une seule boucle</em>, reliés les uns à la suite des autres. Si on dévisse L2, le circuit est <strong>ouvert</strong> : il n'y a plus de boucle fermée, donc le courant ne peut plus circuler et <strong>les trois lampes s'éteignent</strong>. En série, tous les composants dépendent les uns des autres.
<strong>2.</strong> Schéma dérivation : chaque lampe est branchée sur ses propres fils entre les deux mêmes nœuds, en parallèle. Chaque lampe est sur une branche indépendante. Si on dévisse L2, sa branche est ouverte mais <strong>L1 et L3 restent allumées</strong> : leur boucle avec la pile est toujours fermée.
<strong>3.</strong> En série, la tension de la pile se partage entre les trois lampes : chacune reçoit peu de tension et <strong>brille faiblement</strong>. En dérivation, chaque lampe reçoit la pleine tension de la pile et <strong>brille normalement (plus fort)</strong>. Pour une guirlande, on préfère la <strong>dérivation</strong> : les lampes brillent bien et si l'une grille, les autres continuent de fonctionner.
<strong>4.</strong> C'est un <strong>court-circuit</strong> : on relie les bornes de la pile par un fil de très faible résistance, sans récepteur. Un courant très intense traverse alors le circuit ; les fils et la pile <strong>chauffent fortement</strong>, ce qui peut provoquer une brûlure ou un début d'incendie. C'est pourquoi un fusible ou un disjoncteur sert à couper le courant en cas de court-circuit.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-etats',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'L\'eau qui gèle : masse et volume',
            contenu: `<strong>Énoncé.</strong> On remplit une bouteille en plastique souple avec 1 L d'eau liquide. On place la bouteille bien fermée au congélateur. Le lendemain, l'eau est entièrement gelée et la bouteille est déformée, gonflée.
On donne : la masse de l'eau liquide versée est de 1000 g ; le volume de la glace obtenue est de 1090 mL.
1. Comment s'appelle le changement d'état subi par l'eau ? Préciser l'état physique avant et après.
2. Décrire, à l'échelle microscopique, comment sont organisées les particules d'eau dans l'état liquide et dans l'état solide.
3. La masse de la glace est-elle égale, plus petite ou plus grande que 1000 g ? Justifier par une loi.
4. Le volume a-t-il été conservé ? Calculer la variation de volume. Expliquer pourquoi la bouteille a gonflé.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le changement d'état est la <strong>solidification</strong> : l'eau passe de l'état <em>liquide</em> à l'état <em>solide</em> (la glace).
<strong>2.</strong> Dans l'état <em>liquide</em>, les particules d'eau sont serrées les unes contre les autres mais peuvent glisser et se déplacer : le liquide n'a pas de forme propre. Dans l'état <em>solide</em>, les particules sont rangées de façon ordonnée et ne peuvent plus se déplacer (elles vibrent seulement sur place) : le solide a une forme propre.
<strong>3.</strong> Lors d'un changement d'état, la <strong>masse se conserve</strong>. La masse de la glace est donc <strong>égale à 1000 g</strong> : aucune particule d'eau n'a été ajoutée ni enlevée.
<strong>4.</strong> Le volume <strong>n'est pas conservé</strong>. Variation de volume :
$$\\Delta V = 1090 - 1000 = 90 \\text{ mL}.$$
Le volume a <strong>augmenté de 90 mL</strong>. L'eau est un cas particulier : en gelant, ses particules s'organisent en occupant plus de place qu'à l'état liquide. Le volume augmentant à masse constante, la glace pousse les parois : la bouteille gonfle et se déforme.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-lumiere',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Lumière, ombre et éclipse de Lune',
            contenu: `<strong>Énoncé.</strong> Le Soleil est une source de lumière. Il éclaire la Terre et la Lune. On rappelle que la vitesse de la lumière est d'environ 300 000 km/s et que la distance Terre–Lune vaut environ 380 000 km.
1. Le Soleil est-il une source primaire ou un objet diffusant ? Et la Lune ? Comment voit-on la Lune dans le ciel la nuit ?
2. La lumière se propage en ligne droite dans le vide. Expliquer, à l'aide d'un schéma avec des rayons lumineux, comment se forme l'ombre de la Terre derrière elle.
3. Une éclipse de Lune se produit lorsque la Lune passe dans l'ombre de la Terre. Faire un schéma de l'alignement Soleil – Terre – Lune correspondant.
4. Calculer la durée que met la lumière pour parcourir la distance Terre–Lune. On utilisera $t = \\frac{d}{v}$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le Soleil est une <strong>source primaire</strong> de lumière : il produit lui-même la lumière qu'il émet. La Lune est un <strong>objet diffusant</strong> : elle ne produit pas de lumière, elle <em>renvoie</em> (diffuse) la lumière qu'elle reçoit du Soleil. On voit la Lune la nuit parce qu'une partie de la lumière solaire qu'elle diffuse arrive jusqu'à notre œil.
<strong>2.</strong> La lumière se propage en ligne droite. On trace les rayons issus du Soleil arrivant sur la Terre : la Terre, opaque, les arrête. Derrière la Terre, du côté opposé au Soleil, se trouve une zone où aucun rayon n'arrive : c'est <strong>l'ombre</strong> de la Terre, en forme de cône qui s'étend dans l'espace.
<strong>3.</strong> Pour une éclipse de Lune, l'alignement est <strong>Soleil – Terre – Lune</strong> (la Terre est entre le Soleil et la Lune). La Lune entre dans le cône d'ombre de la Terre : elle n'est plus éclairée et s'assombrit.
<strong>4.</strong> Avec $d = 380\\,000$ km et $v = 300\\,000$ km/s :
$$t = \\frac{d}{v} = \\frac{380\\,000}{300\\,000} \\approx 1{,}3 \\text{ s}.$$
La lumière met donc environ <strong>1,3 seconde</strong> pour aller de la Lune à la Terre. Cela montre que les distances dans l'Univers sont si grandes qu'on les mesure souvent par le temps de trajet de la lumière.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-masse-volume',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Reconnaître un métal par sa masse volumique',
            contenu: `<strong>Énoncé.</strong> Un bijoutier veut savoir si une bague est en or pur ou en cuivre. Il pèse la bague : elle a une masse de 96,5 g. Il la plonge dans une éprouvette graduée contenant 20 mL d'eau ; le niveau monte alors jusqu'à 25 mL.
On donne les masses volumiques : or $\\rho_{or} = 19{,}3$ g/mL ; cuivre $\\rho_{cuivre} = 8{,}9$ g/mL.
1. Quelle technique le bijoutier utilise-t-il pour mesurer le volume de la bague ? Déterminer ce volume.
2. Rappeler la relation entre masse, volume et masse volumique.
3. Calculer la masse volumique de la bague. Donner le résultat avec son unité.
4. La bague est-elle en or pur ou en cuivre ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le bijoutier utilise la <strong>méthode par déplacement d'eau</strong>. Le volume de la bague est égal à la montée du niveau d'eau :
$$V = 25 - 20 = 5 \\text{ mL}.$$
<strong>2.</strong> La masse volumique est la masse d'une unité de volume. La relation est :
$$\\rho = \\frac{m}{V} \\qquad \\text{soit} \\qquad m = \\rho \\times V.$$
<strong>3.</strong> Avec $m = 96{,}5$ g et $V = 5$ mL :
$$\\rho = \\frac{m}{V} = \\frac{96{,}5}{5} = 19{,}3 \\text{ g/mL}.$$
<strong>4.</strong> La masse volumique mesurée (19,3 g/mL) est égale à celle de l'or pur et très différente de celle du cuivre (8,9 g/mL). La bague est donc en <strong>or pur</strong>. La masse volumique est une grandeur qui permet d'identifier un matériau, car elle ne dépend pas de la quantité de matière.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-melanges',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Purifier de l\'eau boueuse et salée',
            contenu: `<strong>Énoncé.</strong> On dispose d'un bécher contenant de l'eau dans laquelle on a mélangé du sable et du sel de cuisine. Le mélange est trouble : on y voit des grains de sable en suspension, et l'eau a un goût salé.
1. Le mélange « eau + sable » est-il homogène ou hétérogène ? Et le mélange « eau + sel » ? Justifier dans chaque cas.
2. On ajoute peu à peu du sel à un verre d'eau en remuant. Au bout d'un moment, le sel ne se dissout plus et tombe au fond. Comment s'appelle cet état de la solution ?
3. Proposer une technique pour séparer le sable de l'eau salée. Décrire le matériel et le résultat (que récupère-t-on ?).
4. Après cette première séparation, comment récupérer le sel dissous dans l'eau ? Nommer la technique et expliquer ce qu'on obtient.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le mélange « eau + sable » est <strong>hétérogène</strong> : on distingue à l'œil nu plusieurs constituants (les grains de sable et l'eau). Le mélange « eau + sel » est <strong>homogène</strong> : une fois le sel dissous, on ne distingue plus qu'un seul liquide transparent, on ne voit plus le sel.
<strong>2.</strong> Quand le sel ne se dissout plus et se dépose au fond, la solution est <strong>saturée</strong> : elle a atteint la quantité maximale de sel qu'elle peut dissoudre dans ce volume d'eau.
<strong>3.</strong> Pour séparer le sable de l'eau salée, on réalise une <strong>filtration</strong> : on verse le mélange sur un filtre (papier filtre dans un entonnoir posé sur un bécher). Le sable, solide, reste sur le filtre (c'est le <em>résidu</em>) ; l'eau salée passe à travers et est récupérée dans le bécher (c'est le <em>filtrat</em>). À ce stade, l'eau salée est limpide mais reste salée.
<strong>4.</strong> Pour récupérer le sel dissous, on réalise une <strong>évaporation</strong> : on chauffe doucement l'eau salée. L'eau se vaporise et part dans l'air ; le sel, lui, ne s'évapore pas et reste au fond sous forme de cristaux blancs solides. On obtient ainsi le sel séparé de l'eau.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'phch-5e-mouvement',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le trajet à vélo de Léa',
            contenu: `<strong>Énoncé.</strong> Léa part de chez elle à vélo pour aller au collège, situé à 6 km. Elle met 20 minutes pour faire le trajet.
1. Décrire le mouvement de Léa par rapport au collège, puis par rapport à elle-même sur son vélo : le mouvement dépend-il du point de vue choisi (le référentiel) ? Expliquer.
2. Pendant le trajet, Léa accélère dans une descente puis ralentit dans une montée. Comment qualifie-t-on chacun de ces deux mouvements ?
3. Rappeler la relation permettant de calculer une vitesse moyenne, puis calculer la vitesse moyenne de Léa en km/h.
4. À cette vitesse moyenne, combien de temps mettrait-elle pour parcourir 9 km ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Par rapport au collège (immobile), Léa est <strong>en mouvement</strong> : la distance qui les sépare change. Par rapport à son propre vélo, Léa est <strong>immobile</strong> : elle ne bouge pas par rapport à lui. Le mouvement <strong>dépend donc du référentiel choisi</strong> : décrire un mouvement n'a de sens que si l'on précise par rapport à quoi on l'étudie.
<strong>2.</strong> Dans la descente, sa vitesse augmente : le mouvement est <strong>accéléré</strong>. Dans la montée, sa vitesse diminue : le mouvement est <strong>ralenti (décéléré)</strong>.
<strong>3.</strong> La vitesse moyenne se calcule par :
$$v = \\frac{d}{t}.$$
Il faut une durée en heures : $t = 20$ min $= \\frac{20}{60}$ h $= \\frac{1}{3}$ h. Avec $d = 6$ km :
$$v = \\frac{6}{1/3} = 6 \\times 3 = 18 \\text{ km/h}.$$
La vitesse moyenne de Léa est de <strong>18 km/h</strong>.
<strong>4.</strong> On utilise $t = \\frac{d}{v}$ avec $d = 9$ km et $v = 18$ km/h :
$$t = \\frac{9}{18} = 0{,}5 \\text{ h} = 30 \\text{ min}.$$
Elle mettrait <strong>30 minutes</strong> pour parcourir 9 km.
</details>`
          }
        ]
      }
    ]
  }
]
