export const DATA = [
  {
    id: 'ma-6e-arith',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Arithmétique — divisibilité',
    ordre: 1,
    enrich: false,
    sections: [
      {
        titre: 'Multiples et diviseurs',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Multiple et diviseur',
            contenu: `Un entier $b$ est un <strong>multiple</strong> de $a$ s'il existe un entier $k$ tel que $b = a \\times k$.<br>On dit alors aussi que $a$ est un <strong>diviseur</strong> (ou facteur) de $b$, et on note $a \\mid b$.<br><br><em>Exemple :</em> $42 = 6 \\times 7$, donc $6 \\mid 42$ et $7 \\mid 42$. Les multiples de $6$ sont $0, 6, 12, 18, 24, \\ldots$`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés des diviseurs',
            contenu: `Si $a \\mid b$ et $a \\mid c$, alors $a \\mid (b + c)$ et $a \\mid (b - c)$.<br>Si $a \\mid b$ et $b \\mid c$, alors $a \\mid c$ (transitivité).<br>Tout entier $a$ admet toujours $1$ et $a$ comme diviseurs.<br><br>L'ensemble des diviseurs de $n$ est fini et symétrique : si $d \\mid n$ alors $\\frac{n}{d} \\mid n$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Trouver tous les diviseurs d\'un entier',
            contenu: `Pour trouver tous les diviseurs de $n$ :<br>1. Tester les entiers $d$ de $1$ à $\\sqrt{n}$.<br>2. Si $d \\mid n$, alors $\\frac{n}{d}$ est aussi un diviseur.<br>3. Lister les paires $(d,\\, \\frac{n}{d})$.<br><br><em>Exemple :</em> Diviseurs de $36$ : on teste jusqu'à $6$.<br>$1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$.<br>Diviseurs : $\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Application',
            contenu: `Donner tous les diviseurs de $60$.<br><br>On teste $d = 1, 2, 3, 4, 5, 6, 7$ (car $\\sqrt{60} \\approx 7{,}7$).<br>$1 \\times 60$, $2 \\times 30$, $3 \\times 20$, $4 \\times 15$, $5 \\times 12$, $6 \\times 10$.<br>($7$ ne divise pas $60$.)<br><br>Diviseurs de $60$ : $\\{1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\\}$ — soit $12$ diviseurs.`
          }
        ]
      },
      {
        titre: 'Critères de divisibilité',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Critères usuels',
            contenu: `Un entier est divisible par :<br>
<strong>2</strong> si son chiffre des unités est $0, 2, 4, 6$ ou $8$ (nombre pair).<br>
<strong>5</strong> si son chiffre des unités est $0$ ou $5$.<br>
<strong>10</strong> si son chiffre des unités est $0$.<br>
<strong>3</strong> si la somme de ses chiffres est divisible par $3$.<br>
<strong>9</strong> si la somme de ses chiffres est divisible par $9$.<br>
<strong>4</strong> si le nombre formé par ses deux derniers chiffres est divisible par $4$.<br>
<strong>6</strong> si le nombre est divisible à la fois par $2$ et par $3$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Application des critères',
            contenu: `Étudier la divisibilité de $2\\ 376$ :<br><br>
— Par $2$ : chiffre des unités $= 6$ (pair) → <strong>oui</strong>.<br>
— Par $5$ : chiffre des unités $= 6$ → <strong>non</strong>.<br>
— Par $3$ : $2+3+7+6 = 18$, divisible par $3$ → <strong>oui</strong>.<br>
— Par $9$ : $18$ divisible par $9$ → <strong>oui</strong>.<br>
— Par $6$ : divisible par $2$ et $3$ → <strong>oui</strong>.<br>
— Par $4$ : deux derniers chiffres $= 76$, $76 \\div 4 = 19$ → <strong>oui</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Critère de divisibilité par 9 — preuve intuitive',
            contenu: `Tout chiffre $c$ à la position $10^k$ vaut $c \\times 10^k = c \\times (9 \\times \\underbrace{11\\ldots1}_{k} + 1)$.<br>La partie $c \\times 9 \\times \\ldots$ est toujours divisible par $9$.<br>Il reste donc $c \\times 1 = c$, ce qui justifie que seule la <strong>somme des chiffres</strong> détermine la divisibilité par $9$ (et par $3$).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Trouver des multiples',
            contenu: `Trouver le plus petit multiple de $6$ strictement supérieur à $100$.<br><br>Un multiple de $6$ doit être pair et sa somme de chiffres divisible par $3$.<br>$102$ : pair, $1+0+2=3$ → divisible par $3$. ✓<br><br>Vérification : $102 = 6 \\times 17$. Le plus petit multiple de $6$ supérieur à $100$ est $\\mathbf{102}$.`
          }
        ]
      },
      {
        titre: 'Nombres premiers',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Nombre premier',
            contenu: `Un entier $p \\geq 2$ est dit <strong>premier</strong> s'il admet exactement deux diviseurs : $1$ et lui-même.<br><br>Les premiers nombres premiers sont : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, \\ldots$<br><br><em>Remarques :</em><br>— $1$ n'est <strong>pas</strong> premier (un seul diviseur).<br>— $2$ est le seul nombre premier pair.<br>— Tout entier $\\geq 2$ qui n'est pas premier est dit <strong>composé</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Crible d\'Ératosthène',
            contenu: `Pour trouver tous les nombres premiers jusqu'à $N$ :<br>1. Écrire tous les entiers de $2$ à $N$.<br>2. Le premier nombre non barré est premier. Barrer tous ses multiples (sauf lui-même).<br>3. Répéter jusqu'à $\\sqrt{N}$.<br>4. Tous les nombres non barrés sont premiers.<br><br><em>Exemple jusqu'à $30$ :</em> On conserve $2,3,5,7,11,13,17,19,23,29$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Tester si un nombre est premier',
            contenu: `Pour tester si $n$ est premier :<br>Tester la divisibilité par tous les nombres premiers $p \\leq \\sqrt{n}$.<br>Si aucun ne divise $n$, alors $n$ est premier.<br><br><em>Exemple :</em> $n = 97$. $\\sqrt{97} \\approx 9{,}8$. Tester $2, 3, 5, 7$.<br>$97$ n'est divisible par aucun → $97$ est <strong>premier</strong>.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Infinité des nombres premiers',
            contenu: `Il existe une <strong>infinité</strong> de nombres premiers.<br><br><em>Preuve d'Euclide (à comprendre) :</em> Supposons qu'il n'en existe qu'un nombre fini $p_1, p_2, \\ldots, p_k$. Posons $N = p_1 \\times p_2 \\times \\cdots \\times p_k + 1$. Alors $N$ n'est divisible par aucun $p_i$ (reste $1$). Or tout entier $\\geq 2$ a un diviseur premier — contradiction.`
          }
        ]
      },
      {
        titre: 'Décomposition en facteurs premiers',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Théorème fondamental de l\'arithmétique',
            contenu: `Tout entier $n \\geq 2$ s'écrit de façon <strong>unique</strong> (à l'ordre des facteurs près) comme produit de nombres premiers :<br><br>$$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\cdots \\times p_k^{\\alpha_k}$$<br>où $p_1 < p_2 < \\cdots < p_k$ sont des nombres premiers et $\\alpha_i \\geq 1$.<br><br><em>Exemple :</em> $360 = 2^3 \\times 3^2 \\times 5$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode des divisions successives',
            contenu: `Pour décomposer $n$ en facteurs premiers :<br>1. Diviser $n$ par le plus petit premier qui le divise.<br>2. Recommencer avec le quotient.<br>3. S'arrêter quand le quotient est $1$.<br><br><em>Exemple :</em> $n = 360$<br>$360 \\div 2 = 180$<br>$180 \\div 2 = 90$<br>$90 \\div 2 = 45$<br>$45 \\div 3 = 15$<br>$15 \\div 3 = 5$<br>$5 \\div 5 = 1$<br>Donc $360 = 2^3 \\times 3^2 \\times 5$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'PGCD — Plus Grand Commun Diviseur',
            contenu: `Le <strong>PGCD</strong> de deux entiers $a$ et $b$ (notés $\\text{PGCD}(a,b)$ ou $a \\wedge b$) est le plus grand entier qui divise à la fois $a$ et $b$.<br><br>Si $\\text{PGCD}(a,b) = 1$, on dit que $a$ et $b$ sont <strong>premiers entre eux</strong> (ou copremiers).<br><br><em>Via la décomposition :</em> $\\ \\text{PGCD}(a,b)$ = produit des facteurs premiers communs, chacun à la plus petite puissance.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Algorithme d\'Euclide',
            contenu: `Pour calculer $\\text{PGCD}(a, b)$ avec $a \\geq b > 0$ :<br>1. Effectuer la division euclidienne : $a = b \\times q + r$.<br>2. Si $r = 0$, alors $\\text{PGCD}(a,b) = b$.<br>3. Sinon, recommencer avec $\\text{PGCD}(b, r)$.<br><br><em>Exemple :</em> $\\text{PGCD}(252, 180)$<br>$252 = 180 \\times 1 + 72$<br>$180 = 72 \\times 2 + 36$<br>$72 = 36 \\times 2 + 0$<br>Donc $\\text{PGCD}(252, 180) = 36$.`
          }
        ]
      },
      {
        titre: 'Applications du PGCD',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'PGCD et simplification de fractions',
            contenu: `Pour simplifier une fraction $\\frac{a}{b}$ :<br>Diviser numérateur et dénominateur par $\\text{PGCD}(a,b)$.<br><br>$$\\frac{a}{b} = \\frac{a \\div d}{b \\div d} \\quad \\text{où } d = \\text{PGCD}(a,b)$$<br><br><em>Exemple :</em> $\\frac{252}{180}$ : $\\text{PGCD}(252,180) = 36$, donc $\\frac{252}{180} = \\frac{7}{5}$ (fraction irréductible car $\\text{PGCD}(7,5)=1$).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Problème de partage équitable',
            contenu: `<em>Problème type :</em> On veut découper deux rubans de $252$ cm et $180$ cm en morceaux de même longueur maximale, sans chute.<br><br>La longueur cherchée est $\\text{PGCD}(252, 180) = 36$ cm.<br>Premier ruban : $252 \\div 36 = 7$ morceaux.<br>Deuxième ruban : $180 \\div 36 = 5$ morceaux.<br><br>Ce type de problème se résout toujours par le PGCD.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Décomposition et PGCD',
            contenu: `Calculer $\\text{PGCD}(2\\ 520,\\ 1\\ 764)$ par décomposition en facteurs premiers.<br><br>$2520 = 2^3 \\times 3^2 \\times 5 \\times 7$<br>$1764 = 2^2 \\times 3^2 \\times 7^2$<br><br>Facteurs communs (petite puissance) : $2^2 \\times 3^2 \\times 7 = 4 \\times 9 \\times 7 = 252$.<br><br>$\\text{PGCD}(2520, 1764) = 252$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Nombre de diviseurs',
            contenu: `Si $n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\cdots \\times p_k^{\\alpha_k}$, alors le nombre de diviseurs de $n$ est :<br><br>$$\\tau(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\cdots (\\alpha_k + 1)$$<br><br><em>Exemple :</em> $360 = 2^3 \\times 3^2 \\times 5^1$<br>$\\tau(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$ diviseurs.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-nb',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Nombres décimaux et fractions décimales',
    ordre: 2,
    enrich: true,
    sections: [
      {
        titre: 'Écriture décimale et valeur positionnelle',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Nombre décimal',
            contenu: `Un <strong>nombre décimal</strong> est un nombre qui peut s'écrire avec un nombre fini de chiffres après la virgule.<br><br>Chaque position a une <strong>valeur</strong> :<br>
$\\ldots$ | milliers | centaines | dizaines | unités | <strong>,</strong> | dixièmes | centièmes | millièmes | $\\ldots$<br><br>
<em>Exemple :</em> Dans $3\\ 047{,}85$ :<br>
— $3$ est aux milliers ($3000$), $0$ aux centaines, $4$ aux dizaines ($40$), $7$ aux unités ($7$).<br>
— $8$ aux dixièmes ($0{,}8$), $5$ aux centièmes ($0{,}05$).`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Fraction décimale',
            contenu: `Une <strong>fraction décimale</strong> est une fraction dont le dénominateur est une puissance de $10$ : $10, 100, 1000, \\ldots$<br><br>Correspondances fondamentales :<br>
$$\\frac{1}{10} = 0{,}1 \\qquad \\frac{1}{100} = 0{,}01 \\qquad \\frac{1}{1000} = 0{,}001$$<br>
$$\\frac{37}{100} = 0{,}37 \\qquad \\frac{5}{10} = 0{,}5 \\qquad \\frac{253}{1000} = 0{,}253$$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Convertir fraction décimale ↔ écriture décimale',
            contenu: `<strong>Fraction → décimal :</strong> Le nombre de zéros au dénominateur donne le nombre de décimales.<br>
$\\frac{47}{1000}$ : dénominateur $= 1000$ (3 zéros) → $0{,}047$ (3 décimales).<br><br>
<strong>Décimal → fraction :</strong> Compter les décimales, mettre ce nombre de zéros au dénominateur.<br>
$0{,}36 = \\frac{36}{100}$ (2 décimales → dénominateur $100$).<br>
Simplifier si possible : $\\frac{36}{100} = \\frac{9}{25}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Zéros inutiles',
            contenu: `On peut ajouter ou supprimer des zéros :<br>
— <strong>À gauche</strong> d'un nombre entier : $007 = 7$.<br>
— <strong>À droite</strong> de la partie décimale : $3{,}50 = 3{,}5 = 3{,}500$.<br><br>
Ces zéros n'ont aucun effet sur la valeur du nombre.<br><br>
<em>Attention :</em> Un zéro intercalé change la valeur : $0{,}305 \\neq 0{,}35$.`
          }
        ]
      },
      {
        titre: 'Comparaison et rangement',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Comparer deux décimaux',
            contenu: `Pour comparer $a$ et $b$ :<br>
1. Comparer les parties entières. Si elles sont différentes, le plus grand entier donne le plus grand nombre.<br>
2. Si les parties entières sont égales, comparer les dixièmes, puis centièmes, etc.<br><br>
<em>Exemple :</em> Comparer $3{,}07$ et $3{,}1$.<br>
Parties entières égales ($3$). Dixièmes : $0 < 1$, donc $3{,}07 < 3{,}1$.<br><br>
<em>Astuce :</em> Aligner sur le même nombre de décimales : $3{,}07$ vs $3{,}10$ → $3{,}07 < 3{,}10$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Intercaler un décimal entre deux autres',
            contenu: `Pour trouver un nombre entre $2{,}3$ et $2{,}4$ :<br>
— Zoomer : entre $2{,}30$ et $2{,}40$.<br>
— Exemples valides : $2{,}31$, $2{,}35$, $2{,}39$, etc.<br><br>
Il y a une <strong>infinité</strong> de décimaux entre deux décimaux distincts quelconques : la droite numérique est <em>dense</em>.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Ranger dans l\'ordre croissant',
            contenu: `Ranger dans l'ordre croissant : $0{,}9$, $1{,}02$, $0{,}99$, $1{,}2$, $0{,}089$.<br><br>
Aligner : $0{,}900$, $1{,}020$, $0{,}990$, $1{,}200$, $0{,}089$.<br><br>
Ordre : $\\mathbf{0{,}089 < 0{,}9 < 0{,}99 < 1{,}02 < 1{,}2}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Encadrement et arrondi',
            contenu: `<strong>Encadrer</strong> $n$ à l'unité près : trouver deux entiers consécutifs tels que $k \\leq n < k+1$.<br><br>
<strong>Arrondir</strong> à un rang :<br>
— Regarder le chiffre <em>suivant</em> le rang d'arrondi.<br>
— Si ce chiffre $\\geq 5$ : arrondi supérieur (on augmente de $1$).<br>
— Si ce chiffre $< 5$ : arrondi inférieur (on conserve).<br><br>
<em>Exemple :</em> $3{,}467$ arrondi au centième : chiffre suivant $= 7 \\geq 5$ → $3{,}47$.`
          }
        ]
      },
      {
        titre: 'Addition et soustraction de décimaux',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Technique opératoire — addition',
            contenu: `Pour additionner des décimaux en colonne :<br>
1. <strong>Aligner les virgules</strong> (et donc les rangs de même valeur).<br>
2. Compléter par des zéros si nécessaire.<br>
3. Additionner de droite à gauche comme pour les entiers en gérant les retenues.<br>
4. Placer la virgule dans le résultat.<br><br>
<em>Exemple :</em> $12{,}7 + 4{,}053$<br>
$\\quad 12{,}700$<br>
$+\\quad 4{,}053$<br>
$= 16{,}753$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Technique opératoire — soustraction',
            contenu: `Même technique qu'à l'addition, en complétant par des zéros.<br><br>
<em>Exemple :</em> $8{,}3 - 2{,}47$<br>
$\\quad 8{,}30$<br>
$-\\quad 2{,}47$<br>
$= 5{,}83$<br><br>
<em>Vérification :</em> $5{,}83 + 2{,}47 = 8{,}30$ ✓`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés de l\'addition',
            contenu: `L'addition est :<br>
— <strong>Commutative</strong> : $a + b = b + a$<br>
— <strong>Associative</strong> : $(a + b) + c = a + (b + c)$<br>
— Admet $0$ comme <strong>élément neutre</strong> : $a + 0 = a$<br><br>
Ces propriétés permettent de <em>regrouper astucieusement</em> les calculs.<br>
<em>Exemple :</em> $3{,}7 + 1{,}5 + 6{,}3 = (3{,}7 + 6{,}3) + 1{,}5 = 10 + 1{,}5 = 11{,}5$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème — périmètre',
            contenu: `Un terrain rectangulaire mesure $15{,}4$ m de long et $8{,}75$ m de large. Calculer son périmètre.<br><br>
$P = 2 \\times (L + l) = 2 \\times (15{,}4 + 8{,}75) = 2 \\times 24{,}15 = \\mathbf{48{,}3 \\text{ m}}$.`
          }
        ]
      },
      {
        titre: 'Multiplication et division de décimaux',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Multiplier deux décimaux',
            contenu: `1. Ignorer les virgules, multiplier les entiers correspondants.<br>
2. Compter le nombre total de décimales dans les deux facteurs.<br>
3. Placer la virgule dans le produit pour avoir ce nombre total de décimales.<br><br>
<em>Exemple :</em> $3{,}4 \\times 2{,}15$<br>
$34 \\times 215 = 7\\ 310$<br>
Décimales : $1 + 2 = 3$ → $7{,}310 = \\mathbf{7{,}31}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Multiplier par 10, 100, 1000…',
            contenu: `Multiplier par $10^n$ déplace la virgule de $n$ rangs vers la <strong>droite</strong>.<br>
Diviser par $10^n$ déplace la virgule de $n$ rangs vers la <strong>gauche</strong>.<br><br>
$3{,}47 \\times 10 = 34{,}7$<br>
$3{,}47 \\times 100 = 347$<br>
$3{,}47 \\div 10 = 0{,}347$<br>
$3{,}47 \\div 1000 = 0{,}00347$`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Division euclidienne',
            contenu: `La <strong>division euclidienne</strong> de $a$ par $b$ ($b \\neq 0$) donne un quotient entier $q$ et un reste $r$ avec $0 \\leq r < b$ tels que :<br><br>
$$a = b \\times q + r$$<br>
<em>Exemple :</em> $137 \\div 6$ : $137 = 6 \\times 22 + 5$, donc quotient $= 22$, reste $= 5$.<br><br>
La division est dite <strong>exacte</strong> si $r = 0$ (i.e. $b \\mid a$).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Division décimale — obtenir des décimales',
            contenu: `Si la division euclidienne donne un reste non nul, on peut continuer :<br>
1. Ajouter un zéro au reste (équivaut à multiplier par $10$).<br>
2. Continuer la division.<br>
3. Placer la virgule dans le quotient quand on commence à "descendre" des zéros.<br><br>
<em>Exemple :</em> $7 \\div 4$<br>
$7 = 4 \\times 1 + 3$ → quotient commence à $1$, virgule.<br>
$30 = 4 \\times 7 + 2$ → $1{,}7$<br>
$20 = 4 \\times 5 + 0$ → $\\mathbf{1{,}75}$ (reste nul).`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-frac',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Fractions',
    ordre: 3,
    enrich: true,
    sections: [
      {
        titre: 'Notion de fraction',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Fraction — définition',
            contenu: `Une <strong>fraction</strong> $\\frac{a}{b}$ (avec $b \\neq 0$) représente $a$ parts lorsqu'on divise un tout en $b$ parts égales.<br><br>
— $a$ est le <strong>numérateur</strong>.<br>
— $b$ est le <strong>dénominateur</strong>.<br><br>
<em>Exemples :</em><br>
$\\frac{3}{4}$ : on prend $3$ parts sur $4$ équipollentes.<br>
$\\frac{7}{3}$ : fraction supérieure à $1$ (fraction impropre).<br>
$\\frac{2}{2} = 1$, $\\frac{0}{5} = 0$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Fractions égales',
            contenu: `Deux fractions sont <strong>égales</strong> si on peut passer de l'une à l'autre en multipliant (ou divisant) numérateur et dénominateur par un même entier non nul :<br><br>
$$\\frac{a}{b} = \\frac{a \\times k}{b \\times k} \\qquad (k \\neq 0)$$<br>
<em>Exemples :</em> $\\frac{2}{3} = \\frac{4}{6} = \\frac{6}{9} = \\frac{10}{15}$<br><br>
<em>Critère croisé :</em> $\\frac{a}{b} = \\frac{c}{d} \\iff a \\times d = b \\times c$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Simplifier une fraction — fraction irréductible',
            contenu: `Pour simplifier $\\frac{a}{b}$, diviser numérateur et dénominateur par leur PGCD :<br><br>
$$\\frac{a}{b} = \\frac{a \\div d}{b \\div d} \\quad \\text{où } d = \\text{PGCD}(a,b)$$<br>
La fraction obtenue est <strong>irréductible</strong> (PGCD du numérateur et dénominateur $= 1$).<br><br>
<em>Exemple :</em> $\\frac{36}{48}$ : $\\text{PGCD}(36,48) = 12$, donc $\\frac{36}{48} = \\frac{3}{4}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Fraction d\'une quantité',
            contenu: `$\\frac{a}{b}$ de la quantité $Q$ signifie $Q \\times \\frac{a}{b} = \\frac{Q \\times a}{b}$.<br><br>
<em>Exemple 1 :</em> $\\frac{3}{4}$ de $60$ kg $= \\frac{60 \\times 3}{4} = \\frac{180}{4} = 45$ kg.<br><br>
<em>Exemple 2 :</em> Une classe a $30$ élèves. $\\frac{2}{5}$ sont des filles. Nombre de filles $= 30 \\times \\frac{2}{5} = \\frac{60}{5} = 12$.`
          }
        ]
      },
      {
        titre: 'Comparer des fractions',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Comparer deux fractions de même dénominateur',
            contenu: `Si les dénominateurs sont égaux, on compare les numérateurs :<br><br>
$$\\frac{a}{c} < \\frac{b}{c} \\iff a < b \\quad (c > 0)$$<br>
<em>Exemple :</em> $\\frac{5}{9} < \\frac{7}{9}$ car $5 < 7$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Réduction au même dénominateur',
            contenu: `Pour comparer $\\frac{a}{b}$ et $\\frac{c}{d}$, trouver un dénominateur commun (le PPCM de $b$ et $d$).<br><br>
<em>Exemple :</em> Comparer $\\frac{3}{4}$ et $\\frac{5}{6}$.<br>
PPCM$(4, 6) = 12$.<br>
$\\frac{3}{4} = \\frac{9}{12}$ et $\\frac{5}{6} = \\frac{10}{12}$.<br>
Comme $9 < 10$ : $\\frac{3}{4} < \\frac{5}{6}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Fraction et position sur la droite numérique',
            contenu: `Toute fraction se place sur la droite numérique. On peut l'encadrer par deux entiers consécutifs :<br><br>
$$\\left\\lfloor \\frac{a}{b} \\right\\rfloor \\leq \\frac{a}{b} < \\left\\lfloor \\frac{a}{b} \\right\\rfloor + 1$$<br>
<em>Exemple :</em> $\\frac{17}{5} = 3{,}4$, donc $3 < \\frac{17}{5} < 4$.<br><br>
On peut aussi convertir en décimal : $\\frac{a}{b} = a \\div b$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Ranger des fractions',
            contenu: `Ranger dans l'ordre croissant : $\\frac{1}{2},\\ \\frac{3}{5},\\ \\frac{2}{3},\\ \\frac{7}{10}$.<br><br>
Dénominateur commun $= 30$ :<br>
$\\frac{1}{2} = \\frac{15}{30}$, $\\frac{3}{5} = \\frac{18}{30}$, $\\frac{2}{3} = \\frac{20}{30}$, $\\frac{7}{10} = \\frac{21}{30}$.<br><br>
Ordre : $\\mathbf{\\frac{1}{2} < \\frac{3}{5} < \\frac{2}{3} < \\frac{7}{10}}$.`
          }
        ]
      },
      {
        titre: 'Addition et soustraction de fractions',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Additionner des fractions de même dénominateur',
            contenu: `$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$<br>
On additionne les numérateurs, le dénominateur reste inchangé.<br><br>
<em>Exemple :</em> $\\frac{3}{7} + \\frac{2}{7} = \\frac{5}{7}$<br><br>
De même pour la soustraction : $\\frac{5}{7} - \\frac{2}{7} = \\frac{3}{7}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Additionner des fractions de dénominateurs différents',
            contenu: `1. Trouver un dénominateur commun (PPCM ou produit).<br>
2. Convertir chaque fraction à ce dénominateur.<br>
3. Additionner les numérateurs.<br>
4. Simplifier si possible.<br><br>
<em>Exemple :</em> $\\frac{2}{3} + \\frac{3}{4}$. Dénominateur commun $= 12$.<br>
$\\frac{2}{3} = \\frac{8}{12}$, $\\frac{3}{4} = \\frac{9}{12}$.<br>
$\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Nombre mixte',
            contenu: `Une fraction supérieure à $1$ peut s'écrire comme un <strong>nombre mixte</strong> (entier + fraction propre) :<br><br>
$\\frac{17}{5} = 3 + \\frac{2}{5} = 3\\frac{2}{5}$ (car $17 = 5 \\times 3 + 2$).<br><br>
<em>Conversion inverse :</em> $2\\frac{3}{7} = 2 + \\frac{3}{7} = \\frac{14}{7} + \\frac{3}{7} = \\frac{17}{7}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul avec fractions',
            contenu: `Calculer $A = \\frac{5}{6} - \\frac{1}{4} + \\frac{1}{3}$.<br><br>
Dénominateur commun $= 12$ :<br>
$A = \\frac{10}{12} - \\frac{3}{12} + \\frac{4}{12} = \\frac{10 - 3 + 4}{12} = \\frac{11}{12}$.`
          }
        ]
      },
      {
        titre: 'Multiplication et division de fractions',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Multiplication de fractions',
            contenu: `$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$<br>
On multiplie les numérateurs entre eux et les dénominateurs entre eux.<br><br>
<em>Exemple :</em> $\\frac{3}{5} \\times \\frac{4}{7} = \\frac{12}{35}$.<br><br>
<em>Simplification croisée préalable :</em> $\\frac{3}{8} \\times \\frac{4}{9} = \\frac{\\cancel{3}^1}{\\cancel{8}^2} \\times \\frac{\\cancel{4}^1}{\\cancel{9}^3} = \\frac{1}{6}$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Inverse d\'une fraction',
            contenu: `L'<strong>inverse</strong> de $\\frac{a}{b}$ (avec $a \\neq 0$) est $\\frac{b}{a}$.<br><br>
Propriété : $\\frac{a}{b} \\times \\frac{b}{a} = 1$.<br><br>
<em>Exemples :</em><br>
Inverse de $\\frac{3}{7}$ est $\\frac{7}{3}$.<br>
Inverse de $5 = \\frac{5}{1}$ est $\\frac{1}{5}$.<br>
Inverse de $\\frac{1}{4}$ est $4$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Division de fractions',
            contenu: `Diviser par une fraction revient à multiplier par son inverse :<br><br>
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}$$<br>
<em>Exemple :</em> $\\frac{3}{4} \\div \\frac{9}{8} = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème — partage',
            contenu: `Un récipient contient $\\frac{7}{2}$ litres de jus. On remplit des verres de $\\frac{3}{8}$ L chacun. Combien de verres peut-on remplir ?<br><br>
Nombre de verres $= \\frac{7}{2} \\div \\frac{3}{8} = \\frac{7}{2} \\times \\frac{8}{3} = \\frac{56}{6} = \\frac{28}{3} \\approx 9{,}3$.<br><br>
On peut remplir $\\mathbf{9}$ verres entiers (et il reste $\\frac{28}{3} - 9 = \\frac{1}{3}$ de verre).`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-prop',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Proportionnalité',
    ordre: 4,
    enrich: true,
    sections: [
      {
        titre: 'Tableau de proportionnalité',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Situation de proportionnalité',
            contenu: `Deux grandeurs $x$ et $y$ sont <strong>proportionnelles</strong> si le rapport $\\frac{y}{x}$ est <strong>constant</strong> pour toutes les valeurs non nulles de $x$.<br><br>
Ce rapport constant $k = \\frac{y}{x}$ s'appelle le <strong>coefficient de proportionnalité</strong> (ou coefficient directeur).<br><br>
<em>Exemple :</em> Prix ($y$) et quantité ($x$) à $3$ €/kg : $k = 3$.<br>
$1 \\text{ kg} \\to 3\\text{ €}$, $2 \\text{ kg} \\to 6\\text{ €}$, $5 \\text{ kg} \\to 15\\text{ €}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Reconnaître un tableau de proportionnalité',
            contenu: `Un tableau est proportionnel si et seulement si tous les rapports $\\frac{\\text{2e ligne}}{\\text{1re ligne}}$ sont égaux.<br><br>
<em>Exemple :</em><br>
| $x$ | 3 | 5 | 8 |<br>
| $y$ | 12 | 20 | 32 |<br>
$\\frac{12}{3} = 4$, $\\frac{20}{5} = 4$, $\\frac{32}{8} = 4$ → <strong>oui</strong>, $k = 4$.<br><br>
<em>Contre-exemple :</em> Si $y = 12, 21, 32$ pour $x = 3, 5, 8$ : $4 \\neq 4{,}2 \\neq 4$ → <strong>non</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Compléter un tableau de proportionnalité',
            contenu: `<strong>Méthode 1 — coefficient :</strong> Trouver $k$, puis $y = k \\times x$.<br><br>
<strong>Méthode 2 — linéarité :</strong><br>
— Si on multiplie $x$ par $n$, on multiplie $y$ par $n$ (passage au multiple).<br>
— Si on divise $x$ par $n$, on divise $y$ par $n$.<br>
— On peut additionner les colonnes entre elles.<br><br>
<em>Exemple :</em> Si $3 \\to 7{,}5$, trouver l'image de $7$.<br>
$k = \\frac{7{,}5}{3} = 2{,}5$. Donc $7 \\to 7 \\times 2{,}5 = 17{,}5$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème concret',
            contenu: `Une voiture consomme $6{,}5$ L d'essence pour $100$ km. Combien consomme-t-elle pour $350$ km ?<br><br>
$k = \\frac{6{,}5}{100} = 0{,}065$ L/km.<br>
Consommation $= 0{,}065 \\times 350 = 22{,}75$ L.<br><br>
<em>Ou par règle de trois :</em><br>
$100 \\text{ km} \\to 6{,}5 \\text{ L}$<br>
$350 \\text{ km} \\to \\frac{6{,}5 \\times 350}{100} = \\mathbf{22{,}75 \\text{ L}}$.`
          }
        ]
      },
      {
        titre: 'Règle de trois',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Règle de trois (produit en croix)',
            contenu: `Si $\\frac{a}{b} = \\frac{c}{d}$, alors $a \\times d = b \\times c$ (produit en croix).<br><br>
Application : Si $a \\to b$ et $c \\to \\ ?$ dans un tableau proportionnel :<br>
$$? = \\frac{b \\times c}{a}$$<br>
<em>Exemple :</em> $4$ stylos coûtent $6{,}40$ €. Prix de $7$ stylos :<br>
$? = \\frac{6{,}40 \\times 7}{4} = \\frac{44{,}80}{4} = \\mathbf{11{,}20}$ €.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriété fondamentale de proportionnalité',
            contenu: `Dans un tableau de proportionnalité, le <strong>produit en croix</strong> est constant :<br><br>
$$\\frac{a}{b} = \\frac{c}{d} \\iff a \\times d = b \\times c$$<br>
Cette propriété est également utilisée pour vérifier si deux fractions sont égales.<br><br>
<em>Attention :</em> La règle de trois ne s'applique qu'à des situations <em>proportionnelles</em>. La température ou l'âge, par exemple, ne sont pas proportionnels à la taille.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Recette de cuisine',
            contenu: `Une recette pour $6$ personnes nécessite $450$ g de farine. Quelle quantité pour $10$ personnes ?<br><br>
$\\frac{450}{6} = \\frac{x}{10}$<br>
$x = \\frac{450 \\times 10}{6} = \\frac{4500}{6} = \\mathbf{750 \\text{ g}}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Vitesse — cas particulier',
            contenu: `La <strong>vitesse moyenne</strong> est le coefficient de proportionnalité entre la distance et la durée :<br><br>
$$v = \\frac{d}{t} \\quad \\Rightarrow \\quad d = v \\times t \\quad \\Rightarrow \\quad t = \\frac{d}{v}$$<br>
<em>Exemple :</em> Un train roule à $200$ km/h pendant $1$ h $30$ min.<br>
$t = 1{,}5$ h.<br>
$d = 200 \\times 1{,}5 = \\mathbf{300}$ km.`
          }
        ]
      },
      {
        titre: 'Pourcentages',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Pourcentage',
            contenu: `Un <strong>pourcentage</strong> $p\\%$ représente $\\frac{p}{100}$.<br><br>
$p\\%$ d'une quantité $Q = \\frac{p}{100} \\times Q$.<br><br>
<em>Exemples :</em><br>
$20\\%$ de $150 = \\frac{20}{100} \\times 150 = 0{,}20 \\times 150 = 30$.<br>
$15\\%$ de $80 = 0{,}15 \\times 80 = 12$.<br><br>
<em>Conversions utiles :</em> $50\\% = \\frac{1}{2}$, $25\\% = \\frac{1}{4}$, $10\\% = \\frac{1}{10}$, $1\\% = \\frac{1}{100}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer un taux de pourcentage',
            contenu: `Pour exprimer $a$ en pourcentage de $b$ :<br><br>
$$\\text{taux} = \\frac{a}{b} \\times 100$$<br>
<em>Exemple :</em> Sur $40$ élèves, $14$ ont la moyenne. Quel pourcentage ?<br>
$\\frac{14}{40} \\times 100 = \\frac{1400}{40} = 35\\%$.<br><br>
<em>Augmentation/réduction :</em><br>
Augmentation de $p\\%$ : multiplier par $1 + \\frac{p}{100}$.<br>
Réduction de $p\\%$ : multiplier par $1 - \\frac{p}{100}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Soldes',
            contenu: `Un article coûte $85$ € avant les soldes. Il est réduit de $30\\%$. Quel est le nouveau prix ?<br><br>
Réduction $= 30\\% \\times 85 = 0{,}30 \\times 85 = 25{,}50$ €.<br>
Nouveau prix $= 85 - 25{,}50 = \\mathbf{59{,}50}$ €.<br><br>
<em>Méthode directe :</em> $85 \\times (1 - 0{,}30) = 85 \\times 0{,}70 = 59{,}50$ €.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Représentation graphique — droite par l\'origine',
            contenu: `Deux grandeurs proportionnelles ont une représentation graphique qui est une <strong>droite passant par l'origine</strong> du repère.<br><br>
L'équation est de la forme $y = k \\times x$ (ou $y = kx$).<br><br>
— Si $k > 0$ : droite croissante.<br>
— Plus $k$ est grand, plus la droite est pentue.<br>
— Une droite ne passant pas par l'origine correspond à une situation <em>non proportionnelle</em>.`
          }
        ]
      },
      {
        titre: 'Échelle et agrandissement',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Échelle',
            contenu: `L'<strong>échelle</strong> d'un plan ou d'une carte est le rapport entre la distance dessinée et la distance réelle :<br><br>
$$\\text{Échelle} = \\frac{\\text{distance dessinée}}{\\text{distance réelle}}$$<br>
<em>Exemple :</em> Échelle $1/25\\ 000$ signifie que $1$ cm sur la carte représente $25\\ 000$ cm $= 250$ m dans la réalité.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculs avec l\'échelle',
            contenu: `<strong>Distance réelle → distance dessinée :</strong><br>
$d_{\\text{dessin}} = d_{\\text{réelle}} \\times \\text{échelle}$<br><br>
<strong>Distance dessinée → distance réelle :</strong><br>
$d_{\\text{réelle}} = d_{\\text{dessin}} \\div \\text{échelle}$<br><br>
<em>Exemple :</em> Échelle $1/50$. Longueur dessinée $= 8$ cm.<br>
Longueur réelle $= 8 \\div \\frac{1}{50} = 8 \\times 50 = 400$ cm $= 4$ m.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Plan de chambre',
            contenu: `Sur un plan à l'échelle $1/20$, une chambre mesure $15$ cm $\\times$ $12$ cm. Quelles sont ses dimensions réelles ?<br><br>
Longueur réelle $= 15 \\times 20 = 300$ cm $= \\mathbf{3}$ m.<br>
Largeur réelle $= 12 \\times 20 = 240$ cm $= \\mathbf{2{,}4}$ m.<br><br>
Aire réelle $= 3 \\times 2{,}4 = 7{,}2$ m² (l'aire n'est <em>pas</em> simplement multipliée par $20$ mais par $20^2 = 400$).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Agrandissement et réduction',
            contenu: `Un agrandissement de rapport $k > 1$ (ou réduction $0 < k < 1$) :<br>
— Multiplie toutes les <strong>longueurs</strong> par $k$.<br>
— Multiplie les <strong>aires</strong> par $k^2$.<br>
— Multiplie les <strong>volumes</strong> par $k^3$.<br><br>
<em>Exemple :</em> Un triangle est agrandi de rapport $3$.<br>
Si le périmètre initial était $12$ cm, le nouveau est $36$ cm.<br>
Si l'aire initiale était $10$ cm², la nouvelle est $90$ cm².`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-geo',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Géométrie — figures et angles',
    ordre: 5,
    enrich: true,
    sections: [
      {
        titre: 'Droites et positions relatives',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Droites parallèles et sécantes',
            contenu: `Dans un plan :<br>
— Deux droites sont <strong>parallèles</strong> si elles n'ont aucun point en commun (ou sont confondues). On note $d \\parallel d'$.<br>
— Deux droites sont <strong>sécantes</strong> si elles se coupent en exactement un point (leur point d'intersection).<br>
— Deux droites sont <strong>perpendiculaires</strong> si elles sont sécantes et forment un angle droit ($90°$). On note $d \\perp d'$.<br><br>
<em>Propriété :</em> Par un point extérieur à une droite, il passe une unique droite parallèle à celle-ci.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés des droites parallèles',
            contenu: `— Si $d_1 \\parallel d_2$ et $d_2 \\parallel d_3$, alors $d_1 \\parallel d_3$ (transitivité).<br>
— Si $d_1 \\perp d_3$ et $d_2 \\perp d_3$, alors $d_1 \\parallel d_2$.<br>
— Si $d_1 \\parallel d_2$ et $d_3 \\perp d_1$, alors $d_3 \\perp d_2$.<br><br>
Ces propriétés permettent de démontrer le parallélisme ou la perpendicularité de droites sans mesurer.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Médiatrice d\'un segment',
            contenu: `La <strong>médiatrice</strong> d'un segment $[AB]$ est la droite perpendiculaire à $[AB]$ passant par son milieu $M$.<br><br>
<em>Propriété caractéristique :</em> Un point $P$ appartient à la médiatrice de $[AB]$ si et seulement si $PA = PB$.<br><br>
Construction : tracer deux arcs de cercle de même rayon $r > \\frac{AB}{2}$ centrés en $A$ et en $B$ ; relier les deux points d'intersection.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire des droites perpendiculaires et parallèles',
            contenu: `<strong>Perpendiculaire :</strong> Utiliser l'équerre. Poser l'angle droit sur la droite et tracer.<br><br>
<strong>Parallèle :</strong> Utiliser l'équerre et la règle en tandem. Bloquer la règle sur la droite donnée, faire glisser l'équerre le long de la règle jusqu'au point voulu, tracer.<br><br>
<strong>Vérification :</strong> Mesurer l'angle à la rapporteur (doit être exactement $90°$) ou utiliser la propriété des distances égales.`
          }
        ]
      },
      {
        titre: 'Angles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Définition et types d\'angles',
            contenu: `Un <strong>angle</strong> est une portion de plan délimitée par deux demi-droites (les côtés) issues d'un même point (le sommet).<br><br>
Classification par mesure (en degrés, $°$) :<br>
— <strong>Nul</strong> : $0°$<br>
— <strong>Aigu</strong> : entre $0°$ et $90°$<br>
— <strong>Droit</strong> : exactement $90°$ (matérialisé par un carré)<br>
— <strong>Obtus</strong> : entre $90°$ et $180°$<br>
— <strong>Plat</strong> : exactement $180°$ (deux demi-droites opposées)<br>
— <strong>Rentrant</strong> (ou reflex) : entre $180°$ et $360°$<br>
— <strong>Plein</strong> : $360°$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Mesurer et construire un angle au rapporteur',
            contenu: `<strong>Mesurer un angle $\\widehat{BAC}$ :</strong><br>
1. Placer le centre du rapporteur sur le sommet $A$.<br>
2. Aligner la droite de base ($0°$) sur le côté $[AB$).<br>
3. Lire la graduation sur la ligne $[AC$).<br>
4. Choisir la bonne échelle (intérieure ou extérieure selon que l'angle est aigu ou obtus).<br><br>
<strong>Construire un angle de $53°$ :</strong> Tracer un côté, placer le rapporteur, marquer $53°$, relier au sommet.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Angles formés par deux droites sécantes',
            contenu: `Quand deux droites se coupent en $O$, elles forment $4$ angles :<br>
— Les angles <strong>opposés par le sommet</strong> (angles verticaux) sont égaux.<br>
— Les angles <strong>adjacents</strong> sont supplémentaires : leur somme est $180°$.<br><br>
Si les deux droites sont perpendiculaires, les $4$ angles sont tous droits ($90°$).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Angles alternes-internes (parallèles)',
            contenu: `Quand une <strong>sécante</strong> coupe deux droites parallèles :<br>
— Les angles <strong>alternes-internes</strong> sont égaux.<br>
— Les angles <strong>co-internes</strong> (de même côté de la sécante, entre les parallèles) sont supplémentaires (somme $= 180°$).<br>
— Les angles <strong>correspondants</strong> sont égaux.<br><br>
Réciproquement, si des angles alternes-internes sont égaux, les droites sont parallèles.`
          }
        ]
      },
      {
        titre: 'Triangles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Classification des triangles',
            contenu: `Un <strong>triangle</strong> $ABC$ a trois côtés et trois angles.<br><br>
<strong>Par les côtés :</strong><br>
— <strong>Scalène</strong> : trois côtés inégaux.<br>
— <strong>Isocèle</strong> : deux côtés égaux (les angles à la base sont égaux).<br>
— <strong>Équilatéral</strong> : trois côtés égaux (tous les angles sont de $60°$).<br><br>
<strong>Par les angles :</strong><br>
— <strong>Rectangle</strong> : un angle de $90°$.<br>
— <strong>Acutangle</strong> : tous les angles sont aigus.<br>
— <strong>Obtusangle</strong> : un angle obtus.`
          },
          {
            type: 'th', label: 'THM',
            titre: 'Somme des angles d\'un triangle',
            contenu: `La somme des trois angles d'un triangle est toujours égale à $180°$ :<br><br>
$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180°$$<br>
<em>Conséquences :</em><br>
— Un triangle ne peut avoir qu'<strong>un seul</strong> angle droit ou obtus.<br>
— Dans un triangle rectangle, les deux angles aigus sont complémentaires : $\\widehat{B} + \\widehat{C} = 90°$.<br>
— Si deux angles sont connus, le troisième est déterminé.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Inégalité triangulaire',
            contenu: `Trois longueurs $a, b, c$ forment un triangle si et seulement si chacune est <strong>inférieure à la somme des deux autres</strong> :<br><br>
$a < b + c$, $b < a + c$, $c < a + b$.<br><br>
En pratique, vérifier seulement que le plus grand côté est inférieur à la somme des deux autres.<br><br>
<em>Exemple :</em> $a=5, b=3, c=7$ : $7 < 5+3 = 8$ ✓ → triangle possible.<br>
$a=5, b=2, c=8$ : $8 < 5+2=7$ ✗ → impossible.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'angle',
            contenu: `Dans un triangle $ABC$, $\\widehat{A} = 47°$ et $\\widehat{B} = 68°$. Calculer $\\widehat{C}$.<br><br>
$\\widehat{C} = 180° - \\widehat{A} - \\widehat{B} = 180° - 47° - 68° = \\mathbf{65°}$.<br><br>
Le triangle est acutangle (tous les angles $< 90°$).`
          }
        ]
      },
      {
        titre: 'Quadrilatères et cercle',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Quadrilatères usuels',
            contenu: `— <strong>Parallélogramme</strong> : deux paires de côtés parallèles. Côtés opposés égaux, angles opposés égaux, diagonales se coupent en leur milieu.<br>
— <strong>Rectangle</strong> : parallélogramme avec $4$ angles droits. Diagonales égales.<br>
— <strong>Losange</strong> : parallélogramme avec $4$ côtés égaux. Diagonales perpendiculaires et bissectrices des angles.<br>
— <strong>Carré</strong> : rectangle <em>et</em> losange ($4$ côtés égaux + $4$ angles droits).<br>
— <strong>Trapèze</strong> : exactement une paire de côtés parallèles (les bases).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Somme des angles d\'un quadrilatère',
            contenu: `La somme des angles d'un quadrilatère est toujours $360°$ :<br><br>
$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360°$$<br>
<em>Justification :</em> Toute diagonale divise le quadrilatère en $2$ triangles, chacun contribuant $180°$, soit $2 \\times 180° = 360°$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Cercle — vocabulaire',
            contenu: `Un <strong>cercle</strong> de centre $O$ et de rayon $r$ est l'ensemble des points à distance $r$ de $O$.<br><br>
— <strong>Rayon</strong> $[OA]$ : segment de $O$ à un point du cercle.<br>
— <strong>Diamètre</strong> $[AB]$ : corde passant par $O$, longueur $d = 2r$.<br>
— <strong>Corde</strong> : segment reliant deux points du cercle.<br>
— <strong>Arc</strong> $\\overset{\\frown}{AB}$ : portion du cercle entre $A$ et $B$.<br>
— <strong>Disque</strong> : intérieur du cercle (surface).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés du cercle',
            contenu: `— Le diamètre est la plus longue corde d'un cercle.<br>
— Tout angle inscrit dans un demi-cercle est droit (théorème de Thalès-diamètre) : si $[AB]$ est un diamètre et $C$ un point du cercle ($C \\neq A, B$), alors $\\widehat{ACB} = 90°$.<br>
— La médiatrice de toute corde passe par le centre du cercle.<br>
— Périmètre (circonférence) : $C = 2\\pi r = \\pi d$<br>
— Aire du disque : $A = \\pi r^2$`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-sym',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Symétrie axiale',
    ordre: 6,
    enrich: true,
    sections: [
      {
        titre: 'Définition et vocabulaire',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Symétrique d\'un point par rapport à une droite',
            contenu: `Le <strong>symétrique</strong> du point $A$ par rapport à la droite $d$ est le point $A'$ tel que $d$ est la <strong>médiatrice</strong> du segment $[AA']$.<br><br>
Autrement dit :<br>
— $d$ est perpendiculaire à $[AA']$.<br>
— $d$ passe par le milieu de $[AA']$.<br><br>
Si $A$ est sur $d$, alors $A$ est son propre symétrique ($A' = A$).`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Axe de symétrie d\'une figure',
            contenu: `Une droite $d$ est un <strong>axe de symétrie</strong> d'une figure $\\mathcal{F}$ si la figure est superposable à son image par la symétrie d'axe $d$ : chaque point de $\\mathcal{F}$ a son symétrique dans $\\mathcal{F}$.<br><br>
<em>Exemples d'axes de symétrie :</em><br>
— Carré : $4$ axes (les 2 médiatrices + les 2 diagonales).<br>
— Rectangle non carré : $2$ axes (les 2 médiatrices).<br>
— Losange non carré : $2$ axes (les 2 diagonales).<br>
— Cercle : <strong>infinité</strong> d'axes (tous les diamètres).<br>
— Triangle équilatéral : $3$ axes.<br>
— Triangle isocèle (non équilatéral) : $1$ axe.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire le symétrique d\'un point',
            contenu: `<strong>Méthode à l'équerre et la règle :</strong><br>
1. Tracer la perpendiculaire à $d$ passant par $A$ (équerre).<br>
2. Mesurer la distance de $A$ à $d$ (noter $h$).<br>
3. Reporter la même distance $h$ de l'autre côté de $d$ sur la perpendiculaire → point $A'$.<br><br>
<strong>Méthode au compas :</strong><br>
1. Tracer deux arcs de cercle centrés en $A$ de même rayon, coupant $d$ en $I$ et $J$.<br>
2. Tracer les arcs de cercle centrés en $I$ et $J$ de même rayon. Leur intersection est $A'$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Conservation par la symétrie axiale',
            contenu: `La symétrie axiale d'axe $d$ conserve :<br>
— Les <strong>distances</strong> : $A'B' = AB$.<br>
— Les <strong>angles</strong> : $\\widehat{A'B'C'} = \\widehat{ABC}$.<br>
— Les <strong>longueurs</strong> (périmètres, rayons).<br>
— Le <strong>parallélisme</strong> : si $AB \\parallel CD$, alors $A'B' \\parallel C'D'$.<br><br>
En revanche, la symétrie <strong>inverse l'orientation</strong> des figures (une figure et son image sont de sens contraires).`
          }
        ]
      },
      {
        titre: 'Construction de symétriques',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Symétrique d\'un segment',
            contenu: `Pour construire le symétrique d'un segment $[AB]$ d'axe $d$ :<br>
1. Construire $A'$, symétrique de $A$.<br>
2. Construire $B'$, symétrique de $B$.<br>
3. Tracer le segment $[A'B']$.<br><br>
<em>Propriété :</em> $A'B' = AB$ (la symétrie conserve les longueurs).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Symétrique d\'une droite',
            contenu: `Pour construire la symétrique d'une droite $\\Delta$ d'axe $d$ :<br>
1. Choisir deux points $A$ et $B$ sur $\\Delta$.<br>
2. Construire $A'$ et $B'$, symétriques respectifs de $A$ et $B$.<br>
3. La droite $(A'B')$ est le symétrique de $\\Delta$.<br><br>
<em>Cas particuliers :</em><br>
— Si $\\Delta \\parallel d$ : le symétrique de $\\Delta$ est une droite parallèle à $d$, à la même distance de l'autre côté.<br>
— Si $\\Delta = d$ ou $\\Delta \\perp d$ : le symétrique de $\\Delta$ est $\\Delta$ elle-même.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Symétrique d\'une figure complexe',
            contenu: `Pour construire le symétrique d'une figure quelconque :<br>
1. Identifier les points caractéristiques (sommets, centres).<br>
2. Construire le symétrique de chacun de ces points.<br>
3. Relier les images dans le même ordre que les originaux.<br><br>
<em>Conseil :</em> Pour un triangle, il suffit de construire les symétriques des $3$ sommets, puis de tracer le triangle image.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Reconnaître la symétrie axiale',
            contenu: `Parmi les lettres de l'alphabet, lesquelles ont un axe de symétrie vertical ? Horizontal ?<br><br>
<strong>Axe vertical :</strong> A, H, I, M, O, T, U, V, W, X, Y<br>
<strong>Axe horizontal :</strong> B, C, D, E, H, I, K, O, X<br>
<strong>Deux axes :</strong> H, I, O, X<br><br>
<em>Remarque :</em> Le cercle (lettre O) a une infinité d'axes de symétrie.`
          }
        ]
      },
      {
        titre: 'Médiatrice et applications',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Caractérisation de la médiatrice',
            contenu: `Un point $M$ est sur la médiatrice du segment $[AB]$ si et seulement si $MA = MB$.<br><br>
<em>Preuve :</em><br>
($\\Rightarrow$) Si $M$ est sur la médiatrice, alors par définition $M$ est à égale distance de $A$ et de $B$ (propriété de la symétrie axiale).<br>
($\\Leftarrow$) Si $MA = MB$, alors $M$ appartient à l'axe de symétrie de $A$ et $B$, qui est leur médiatrice.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Centre du cercle circonscrit',
            contenu: `Les médiatrices des trois côtés d'un triangle sont <strong>concourantes</strong> en un point $O$ appelé <strong>centre du cercle circonscrit</strong>.<br><br>
Ce point $O$ est équidistant des trois sommets : $OA = OB = OC = R$ (rayon du cercle circonscrit).<br><br>
<em>Application :</em> Pour construire le cercle passant par trois points non alignés $A, B, C$, tracer les médiatrices de $[AB]$ et $[BC]$ ; leur intersection est le centre $O$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Tracer la médiatrice d\'un segment',
            contenu: `<strong>Au compas :</strong><br>
1. Ouvrir le compas à une ouverture supérieure à la moitié de $[AB]$.<br>
2. Tracer deux arcs centrés en $A$ et en $B$ qui se croisent en $P$ et $Q$.<br>
3. La droite $(PQ)$ est la médiatrice de $[AB]$.<br><br>
<strong>À l'équerre :</strong><br>
Trouver le milieu $I$ de $[AB]$ (mesure), puis tracer la perpendiculaire à $[AB]$ en $I$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème de lieu géométrique',
            contenu: `Une centrale électrique doit être placée à égale distance de deux villes $A$ et $B$. Quel est l'ensemble des emplacements possibles ?<br><br>
L'ensemble des points équidistants de $A$ et $B$ est la <strong>médiatrice</strong> de $[AB]$.<br><br>
Si en plus la centrale doit être à égale distance de $B$ et $C$ (une troisième ville), elle doit se trouver à l'intersection des médiatrices de $[AB]$ et $[BC]$, c'est-à-dire au <strong>centre du cercle circonscrit</strong> au triangle $ABC$.`
          }
        ]
      },
      {
        titre: 'Symétrie et figures usuelles',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Axes de symétrie des polygones réguliers',
            contenu: `Un polygone régulier à $n$ côtés possède $n$ axes de symétrie :<br>
— Triangle équilatéral ($n=3$) : $3$ axes (chaque médiatrice = bissectrice d'un angle).<br>
— Carré ($n=4$) : $4$ axes.<br>
— Pentagone régulier ($n=5$) : $5$ axes.<br>
— Hexagone régulier ($n=6$) : $6$ axes.<br><br>
Le cercle ($n \\to \\infty$) : infinité d'axes.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Compléter une figure par symétrie',
            contenu: `Étapes pour compléter la moitié d'une figure connaissant l'axe $d$ :<br>
1. Identifier tous les points sommets de la partie donnée.<br>
2. Construire le symétrique de chaque sommet par rapport à $d$.<br>
3. Tracer la partie manquante en reliant les images.<br><br>
<em>Astuce papier quadrillé :</em> Sur quadrillage, compter les carreaux horizontalement et verticalement pour trouver chaque symétrique.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Axe de symétrie d\'un triangle isocèle',
            contenu: `Triangle $ABC$ isocèle en $A$ : $AB = AC$. Montrer que la médiatrice de $[BC]$ est axe de symétrie.<br><br>
Soit $I$ le milieu de $[BC]$ et $d$ la médiatrice de $[BC]$.<br>
Symétrique de $B$ par $d$ : comme $IB = IC$, le symétrique de $B$ est $C$ et réciproquement.<br>
Symétrique de $A$ : $A$ est sur $d$ (car $AB = AC$ → $A$ sur la médiatrice de $[BC]$).<br>
Donc le triangle est symétrique à lui-même par rapport à $d$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Symétrie et congruence',
            contenu: `Deux figures sont <strong>symétriques</strong> par rapport à une droite si et seulement si l'une est l'image de l'autre par la symétrie axiale.<br><br>
Deux figures symétriques sont <strong>superposables</strong> (même forme, même taille) — elles sont <em>isométriques</em>.<br><br>
<em>Attention :</em> La symétrie axiale change l'orientation (une main gauche devient une main droite), contrairement à la translation et la rotation qui conservent l'orientation.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-repere',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Repérage et coordonnées',
    ordre: 7,
    enrich: true,
    sections: [
      {
        titre: 'Le repère orthogonal',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Repère orthogonal du plan',
            contenu: `Un <strong>repère orthogonal</strong> $(O;\, I;\, J)$ est formé de :<br>
— Un point origine $O$.<br>
— Un axe horizontal, l'<strong>axe des abscisses</strong> $(Ox)$, orienté vers la droite.<br>
— Un axe vertical, l'<strong>axe des ordonnées</strong> $(Oy)$, orienté vers le haut.<br>
— Les deux axes sont perpendiculaires et se coupent en $O$.<br><br>
Si $OI = OJ = 1$ (même unité sur les deux axes), le repère est dit <strong>orthonormé</strong>.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Coordonnées d\'un point',
            contenu: `Tout point $M$ du plan a des coordonnées $(x_M;\, y_M)$ où :<br>
— $x_M$ est l'<strong>abscisse</strong> : projection sur l'axe $Ox$.<br>
— $y_M$ est l'<strong>ordonnée</strong> : projection sur l'axe $Oy$.<br><br>
<em>Lecture :</em> À partir de $O$, aller de $x_M$ unités horizontalement puis $y_M$ unités verticalement.<br><br>
$O = (0;\, 0)$, $I = (1;\, 0)$, $J = (0;\, 1)$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Placer et lire des points',
            contenu: `<strong>Placer $M(3;\, -2)$ :</strong><br>
1. Depuis $O$, aller de $3$ unités vers la droite (abscisse $= +3$).<br>
2. Puis $2$ unités vers le bas (ordonnée $= -2$).<br>
3. Marquer le point $M$.<br><br>
<strong>Lire les coordonnées d'un point tracé :</strong><br>
1. Tracer la verticale du point jusqu'à l'axe $Ox$ → lire $x$.<br>
2. Tracer l'horizontale du point jusqu'à l'axe $Oy$ → lire $y$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Les quatre quadrants',
            contenu: `Les axes divisent le plan en quatre <strong>quadrants</strong> :<br>
— Quadrant I : $x > 0$ et $y > 0$ (en haut à droite).<br>
— Quadrant II : $x < 0$ et $y > 0$ (en haut à gauche).<br>
— Quadrant III : $x < 0$ et $y < 0$ (en bas à gauche).<br>
— Quadrant IV : $x > 0$ et $y < 0$ (en bas à droite).<br><br>
Points sur $Ox$ : $y = 0$. Points sur $Oy$ : $x = 0$.`
          }
        ]
      },
      {
        titre: 'Milieu et distance',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Milieu d\'un segment',
            contenu: `Le <strong>milieu</strong> $M$ du segment $[AB]$ a pour coordonnées la moyenne de celles de $A$ et $B$ :<br><br>
$$x_M = \\frac{x_A + x_B}{2} \\qquad y_M = \\frac{y_A + y_B}{2}$$<br>
<em>Exemple :</em> $A(1;\, 5)$ et $B(7;\, -1)$.<br>
$x_M = \\frac{1+7}{2} = 4$, $y_M = \\frac{5 + (-1)}{2} = 2$.<br>
$M = (4;\, 2)$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Distance entre deux points',
            contenu: `Dans un repère orthonormé, la distance entre $A(x_A;\, y_A)$ et $B(x_B;\, y_B)$ est :<br><br>
$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$<br>
C'est le <strong>théorème de Pythagore</strong> appliqué au triangle rectangle de cathètes $|x_B - x_A|$ et $|y_B - y_A|$.<br><br>
<em>Exemple :</em> $A(1;\, 2)$, $B(4;\, 6)$.<br>
$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Vérifier qu\'un point est sur un segment',
            contenu: `Pour vérifier si $C$ est le milieu de $[AB]$ :<br>
Calculer $\\frac{x_A + x_B}{2}$ et $\\frac{y_A + y_B}{2}$, vérifier que ça donne bien $(x_C;\, y_C)$.<br><br>
Pour vérifier si $C$ est sur la droite $(AB)$ (alignement) :<br>
Calculer les pentes $\\frac{y_B - y_A}{x_B - x_A}$ et $\\frac{y_C - y_A}{x_C - x_A}$ — si elles sont égales, les trois points sont alignés.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Figures dans le repère',
            contenu: `$A(-2;\, 1)$, $B(4;\, 1)$, $C(4;\, 5)$, $D(-2;\, 5)$.<br><br>
<strong>Nature de $ABCD$ :</strong><br>
$AB = |4-(-2)| = 6$, $BC = |5-1| = 4$, $AB \\parallel DC$ (même ordonnée), $AD \\parallel BC$ (même abscisse).<br>
$AB \\perp BC$ (un côté horizontal, l'autre vertical).<br>
$ABCD$ est un <strong>rectangle</strong> de dimensions $6 \\times 4$.<br><br>
Milieu de $[AC]$ : $\\left(\\frac{-2+4}{2};\, \\frac{1+5}{2}\\right) = (1;\, 3)$.<br>
Milieu de $[BD]$ : $\\left(\\frac{4+(-2)}{2};\, \\frac{1+5}{2}\\right) = (1;\, 3)$ — les diagonales se coupent en leur milieu.`
          }
        ]
      },
      {
        titre: 'Représentation graphique de données',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Représenter une relation dans un repère',
            contenu: `Pour représenter graphiquement une table de valeurs :<br>
1. Choisir un repère adapté (échelle sur chaque axe).<br>
2. Placer chaque point $(x;\, y)$ de la table.<br>
3. Si la relation est linéaire (proportionnelle), relier les points par une droite.<br>
4. Légender les axes (grandeur et unité).<br><br>
<em>Remarque :</em> Une relation de proportionnalité donne une droite <strong>passant par l'origine</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Lire un graphique',
            contenu: `À partir d'un graphique :<br>
— Pour lire $y$ connaissant $x$ : tracer une verticale depuis $x$ jusqu'à la courbe, puis une horizontale jusqu'à l'axe $Oy$.<br>
— Pour lire $x$ connaissant $y$ : procédure inverse.<br><br>
<em>Interpolation :</em> Si le point cherché est entre deux points donnés, on peut estimer sa valeur graphiquement.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Lecture graphique — croissance',
            contenu: `Un arbre mesure $1{,}5$ m à la plantation et grandit de $0{,}4$ m par an.<br>
Tableau (âge en années / hauteur en m) :<br>
| $t$ | 0 | 1 | 2 | 3 | 5 |<br>
| $h$ | 1,5 | 1,9 | 2,3 | 2,7 | 3,5 |<br><br>
Ce n'est <em>pas</em> une proportionnalité ($h/t$ n'est pas constant), mais c'est une droite : $h = 0{,}4t + 1{,}5$ (affine).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Symétries dans le repère',
            contenu: `Dans un repère orthonormé :<br>
— Symétrique de $(x;\, y)$ par rapport à l'axe $Ox$ : $(x;\, -y)$.<br>
— Symétrique de $(x;\, y)$ par rapport à l'axe $Oy$ : $(-x;\, y)$.<br>
— Symétrique de $(x;\, y)$ par rapport à l'origine $O$ : $(-x;\, -y)$.<br><br>
<em>Exemple :</em> Symétrique de $A(3;\, -2)$ par rapport à $Oy$ : $A'(-3;\, -2)$.`
          }
        ]
      },
      {
        titre: 'Repérage sur une droite et dans l\'espace',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Repère sur une droite',
            contenu: `Sur une droite graduée, un point $M$ est repéré par son <strong>abscisse</strong> $x_M$, un nombre réel.<br><br>
La <strong>distance</strong> entre deux points d'abscisses $a$ et $b$ est $|b - a|$.<br>
Le <strong>milieu</strong> des points d'abscisses $a$ et $b$ a pour abscisse $\\frac{a+b}{2}$.<br><br>
<em>Exemple :</em> Sur la droite des réels, le milieu de $[-3;\, 7]$ est $\\frac{-3+7}{2} = 2$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Repère dans l\'espace (introduction)',
            contenu: `Dans l'espace, on utilise un repère $(O;\, I;\, J;\, K)$ avec trois axes perpendiculaires deux à deux.<br><br>
Chaque point a trois coordonnées $(x;\, y;\, z)$.<br><br>
<em>Exemples de points caractéristiques d'un cube de côté $1$ posé sur $O$ :</em><br>
Sommets : $(0;0;0)$, $(1;0;0)$, $(0;1;0)$, $(0;0;1)$, $(1;1;0)$, $(1;0;1)$, $(0;1;1)$, $(1;1;1)$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Trouver le milieu dans le repère',
            contenu: `<strong>Méthode numérique :</strong> Appliquer la formule du milieu.<br><br>
<strong>Méthode graphique :</strong> Tracer le segment, plier le papier pour faire coïncider les deux extrémités, ou utiliser un compas pour reporter la même distance.<br><br>
<em>Vérification :</em> Si $M$ est le milieu de $[AB]$, alors $MA = MB = \\frac{AB}{2}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Centre de gravité d\'un triangle',
            contenu: `Le <strong>centre de gravité</strong> (barycentre) $G$ d'un triangle $ABC$ a pour coordonnées :<br><br>
$$x_G = \\frac{x_A + x_B + x_C}{3} \\qquad y_G = \\frac{y_A + y_B + y_C}{3}$$<br>
<em>Exemple :</em> $A(0;\, 0)$, $B(6;\, 0)$, $C(3;\, 6)$.<br>
$x_G = \\frac{0+6+3}{3} = 3$, $y_G = \\frac{0+0+6}{3} = 2$.<br>
$G = (3;\, 2)$.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-aires',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Périmètres et aires',
    ordre: 8,
    enrich: false,
    sections: [
      {
        titre: 'Périmètres des figures usuelles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Périmètre',
            contenu: `Le <strong>périmètre</strong> d'une figure plane est la longueur totale de son contour.<br><br>
Pour un <strong>polygone</strong>, c'est la somme des longueurs de tous ses côtés.<br><br>
Unités de longueur : mm, cm, dm, m, km.<br>
$1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm} = 1000 \\text{ mm}$<br>
$1 \\text{ km} = 1000 \\text{ m}$`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Périmètres des polygones usuels',
            contenu: `— <strong>Carré</strong> de côté $a$ : $P = 4a$<br>
— <strong>Rectangle</strong> de longueur $L$ et largeur $l$ : $P = 2(L + l)$<br>
— <strong>Triangle</strong> de côtés $a, b, c$ : $P = a + b + c$<br>
— <strong>Triangle équilatéral</strong> de côté $a$ : $P = 3a$<br>
— <strong>Losange</strong> de côté $a$ : $P = 4a$<br>
— <strong>Parallélogramme</strong> de côtés $a$ et $b$ : $P = 2(a + b)$<br>
— <strong>Cercle</strong> (circonférence) de rayon $r$ : $C = 2\\pi r = \\pi d$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Périmètre d\'une figure composée',
            contenu: `Une figure est formée d'un rectangle de $8$ cm $\\times$ $5$ cm surmonté d'un demi-cercle de diamètre $8$ cm.<br><br>
Contour : $2 \\times 5 + 8 + \\frac{2\\pi \\times 4}{2} = 10 + 8 + 4\\pi \\approx 10 + 8 + 12{,}57 \\approx \\mathbf{30{,}57}$ cm.<br><br>
<em>Note :</em> Le côté du haut du rectangle est remplacé par le demi-cercle, donc on ne l'inclut pas.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Utiliser $\\pi$ dans les calculs',
            contenu: `$\\pi \\approx 3{,}14159\\ldots$ est un nombre irrationnel.<br><br>
<strong>Valeur approchée :</strong> $\\pi \\approx 3{,}14$ (au centième).<br><br>
<em>Astuce :</em> Pour un calcul exact, laisser $\\pi$ dans l'expression. Pour une valeur approchée, utiliser $\\pi \\approx 3{,}14$.<br><br>
<em>Exemple :</em> Cercle de rayon $5$ cm.<br>
Circonférence exacte : $C = 2 \\times \\pi \\times 5 = 10\\pi$ cm $\\approx 31{,}4$ cm.`
          }
        ]
      },
      {
        titre: 'Aires des figures usuelles',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Aire (surface)',
            contenu: `L'<strong>aire</strong> (ou surface) d'une figure plane est la mesure de la portion de plan qu'elle occupe.<br><br>
Unités d'aire :<br>
$1 \\text{ cm}^2 = 100 \\text{ mm}^2$ (car $1 \\text{ cm} = 10 \\text{ mm}$, donc $10^2 = 100$)<br>
$1 \\text{ dm}^2 = 100 \\text{ cm}^2$<br>
$1 \\text{ m}^2 = 100 \\text{ dm}^2 = 10\\ 000 \\text{ cm}^2$<br>
$1 \\text{ km}^2 = 1\\ 000\\ 000 \\text{ m}^2$<br>
$1 \\text{ ha (hectare)} = 10\\ 000 \\text{ m}^2$`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Formules d\'aires',
            contenu: `— <strong>Carré</strong> de côté $a$ : $A = a^2$<br>
— <strong>Rectangle</strong> de longueur $L$ et largeur $l$ : $A = L \\times l$<br>
— <strong>Triangle</strong> de base $b$ et hauteur $h$ : $A = \\frac{b \\times h}{2}$<br>
— <strong>Parallélogramme</strong> de base $b$ et hauteur $h$ : $A = b \\times h$<br>
— <strong>Trapèze</strong> de bases $a, b$ et hauteur $h$ : $A = \\frac{(a+b) \\times h}{2}$<br>
— <strong>Disque</strong> de rayon $r$ : $A = \\pi r^2$`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Additivité des aires',
            contenu: `Si une figure est décomposée en parties non superposées, son aire est la <strong>somme</strong> des aires de ses parties.<br><br>
<em>Exemple :</em> Aire d'un L formé de deux rectangles :<br>
Découper en rectangles, calculer chaque aire, additionner.<br><br>
<em>Aire d'une figure avec trou :</em> Aire totale − Aire du trou.<br>
<em>Exemple :</em> Rectangle $10 \\times 8$ avec un disque de rayon $2$ enlevé :<br>
$A = 10 \\times 8 - \\pi \\times 2^2 = 80 - 4\\pi \\approx 67{,}4$ cm².`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'aire',
            contenu: `Un triangle a une base de $12$ cm et une hauteur de $7{,}5$ cm. Calculer son aire.<br><br>
$A = \\frac{b \\times h}{2} = \\frac{12 \\times 7{,}5}{2} = \\frac{90}{2} = \\mathbf{45 \\text{ cm}^2}$.<br><br>
<em>Vérification unités :</em> cm $\\times$ cm $=$ cm$^2$ ✓`
          }
        ]
      },
      {
        titre: 'Conversions d\'unités d\'aire',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Tableau de conversions d\'aires',
            contenu: `Les unités d'aire sont des <strong>carrés</strong> des unités de longueur. Chaque passage d'une unité à la suivante correspond à une multiplication ou division par $100$ (et non $10$).<br><br>
$\\text{km}^2 \\quad | \\quad \\text{hm}^2 \\quad | \\quad \\text{dam}^2 \\quad | \\quad \\text{m}^2 \\quad | \\quad \\text{dm}^2 \\quad | \\quad \\text{cm}^2 \\quad | \\quad \\text{mm}^2$<br><br>
Chaque case correspond à $\\times 100$ (vers la droite) ou $\\div 100$ (vers la gauche).<br><br>
<em>Exemple :</em> $3{,}5 \\text{ m}^2 = 350 \\text{ dm}^2 = 35\\ 000 \\text{ cm}^2$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Convertir via la définition',
            contenu: `Méthode sûre : utiliser la définition.<br><br>
<em>Exemple :</em> $2{,}4 \\text{ m}^2 = ?\\text{ cm}^2$<br>
$1 \\text{ m} = 100 \\text{ cm}$, donc $1 \\text{ m}^2 = (100)^2 \\text{ cm}^2 = 10\\ 000 \\text{ cm}^2$.<br>
$2{,}4 \\text{ m}^2 = 2{,}4 \\times 10\\ 000 = \\mathbf{24\\ 000 \\text{ cm}^2}$.<br><br>
<em>Attention aux erreurs fréquentes :</em> Ne pas multiplier par $10$ au lieu de $100$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Unités agraires',
            contenu: `Convertir :<br>
a) $0{,}5 \\text{ km}^2$ en $\\text{m}^2$ : $0{,}5 \\times (1000)^2 = 0{,}5 \\times 10^6 = 500\\ 000 \\text{ m}^2$.<br>
b) $500\\ 000 \\text{ m}^2$ en hectares : $500\\ 000 \\div 10\\ 000 = 50$ ha.<br>
c) $3 \\text{ ha}$ en $\\text{m}^2$ : $3 \\times 10\\ 000 = 30\\ 000 \\text{ m}^2$.<br><br>
<em>Rappel :</em> $1 \\text{ are} = 100 \\text{ m}^2$, $1 \\text{ hectare} = 100 \\text{ ares} = 10\\ 000 \\text{ m}^2$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Aire et homogénéité',
            contenu: `Dans une formule d'aire, toutes les longueurs doivent être dans la <strong>même unité</strong> avant le calcul.<br><br>
<em>Exemple d'erreur :</em> Triangle avec base $3$ m et hauteur $50$ cm.<br>
Mauvais : $A = \\frac{3 \\times 50}{2} = 75$ (unité incohérente !)<br>
Bon : Convertir $50$ cm $= 0{,}5$ m, puis $A = \\frac{3 \\times 0{,}5}{2} = 0{,}75 \\text{ m}^2$.`
          }
        ]
      },
      {
        titre: 'Problèmes concrets',
        cartes: [
          {
            type: 'ex', label: 'EX',
            titre: 'Carrelage',
            contenu: `Une pièce rectangulaire mesure $4{,}2$ m $\\times$ $3{,}5$ m. On veut la carreler avec des carreaux de $20$ cm $\\times$ $20$ cm. Combien de carreaux faut-il (sans chute) ?<br><br>
Aire de la pièce : $4{,}2 \\times 3{,}5 = 14{,}7 \\text{ m}^2$.<br>
Aire d'un carreau : $0{,}20 \\times 0{,}20 = 0{,}04 \\text{ m}^2$.<br>
Nombre de carreaux : $\\frac{14{,}7}{0{,}04} = \\mathbf{367{,}5}$.<br>
Il faudra donc au minimum $\\mathbf{368}$ carreaux (arrondi supérieur).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Peinture',
            contenu: `Un mur rectangulaire de $4$ m $\\times$ $2{,}5$ m contient une fenêtre de $1{,}2$ m $\\times$ $0{,}8$ m. La peinture couvre $8 \\text{ m}^2$/litre. Quelle quantité acheter ?<br><br>
Aire du mur : $4 \\times 2{,}5 = 10 \\text{ m}^2$.<br>
Aire fenêtre : $1{,}2 \\times 0{,}8 = 0{,}96 \\text{ m}^2$.<br>
Aire à peindre : $10 - 0{,}96 = 9{,}04 \\text{ m}^2$.<br>
Volume de peinture : $9{,}04 \\div 8 = \\mathbf{1{,}13}$ L (arrondi, acheter $2$ L).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Terrain circulaire',
            contenu: `Un jardin circulaire a un diamètre de $10$ m. Calculer son périmètre et son aire.<br><br>
Rayon : $r = 5$ m.<br>
Périmètre : $C = 2\\pi r = 10\\pi \\approx 31{,}4$ m.<br>
Aire : $A = \\pi r^2 = 25\\pi \\approx 78{,}5 \\text{ m}^2$.<br><br>
Si on entoure ce jardin d'une allée de $1$ m de large :<br>
Rayon extérieur $= 6$ m, aire allée $= \\pi \\times 6^2 - \\pi \\times 5^2 = 11\\pi \\approx 34{,}6 \\text{ m}^2$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode générale pour les problèmes d\'aires',
            contenu: `1. <strong>Identifier</strong> la ou les figures en jeu.<br>
2. <strong>Convertir</strong> toutes les mesures dans la même unité.<br>
3. <strong>Décomposer</strong> la figure si nécessaire (addition ou soustraction d'aires).<br>
4. <strong>Appliquer</strong> la formule appropriée.<br>
5. <strong>Vérifier</strong> l'unité du résultat (doit être une unité d'aire).<br>
6. <strong>Arrondir</strong> si demandé ou nécessaire.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-solides',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Solides et volumes',
    ordre: 9,
    enrich: false,
    sections: [
      {
        titre: 'Vocabulaire des solides',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Faces, arêtes et sommets',
            contenu: `Un solide est délimité par des <strong>faces</strong>.<br>
— <strong>Face</strong> : surface plane (ou courbe) limitant le solide.<br>
— <strong>Arête</strong> : segment de droite où se rencontrent deux faces.<br>
— <strong>Sommet</strong> : point où se rencontrent au moins trois arêtes.<br><br>
<em>Formule d'Euler (polyèdres convexes) :</em><br>
$$S - A + F = 2$$<br>
où $S$ = nombre de sommets, $A$ = arêtes, $F$ = faces.<br>
<em>Vérification cube :</em> $8 - 12 + 6 = 2$ ✓`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Polyèdres usuels',
            contenu: `— <strong>Cube</strong> : 6 faces carrées, 12 arêtes, 8 sommets.<br>
— <strong>Pavé droit</strong> (parallélépipède rectangle) : 6 faces rectangulaires, 12 arêtes, 8 sommets.<br>
— <strong>Prisme droit</strong> : 2 bases polygonales identiques + faces latérales rectangulaires.<br>
— <strong>Pyramide</strong> : une base polygonale, faces latérales triangulaires se rejoignant en un sommet (apex).<br>
— <strong>Tétraèdre</strong> : 4 faces triangulaires, 6 arêtes, 4 sommets.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Solides de révolution',
            contenu: `— <strong>Cylindre</strong> : deux bases circulaires parallèles identiques, face latérale courbe.<br>
— <strong>Cône</strong> : une base circulaire, face latérale conique se terminant en un sommet (apex).<br>
— <strong>Sphère</strong> : surface à égale distance d'un centre $O$. Tous les points sont à distance $r$ (rayon) de $O$.<br><br>
Ces solides ont un axe de symétrie de révolution (rotation d'une courbe plane autour d'un axe).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Reconnaître un solide',
            contenu: `Identifier un solide par ses caractéristiques :<br>
1. Y a-t-il des faces planes ? → polyèdre. Faces courbes → solide de révolution.<br>
2. Compter faces, arêtes, sommets et vérifier la formule d'Euler.<br>
3. Les bases sont-elles des polygones réguliers ou des cercles ?<br>
4. Les faces latérales sont-elles rectangulaires (prisme) ou triangulaires (pyramide) ?`
          }
        ]
      },
      {
        titre: 'Patrons',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Patron d\'un solide',
            contenu: `Le <strong>patron</strong> d'un solide est un développement plan : on "déplie" le solide de façon à obtenir une figure plane qui, replié, redonne exactement le solide.<br><br>
Un même solide peut avoir plusieurs patrons différents.<br><br>
<em>Patron du cube :</em> Il existe $11$ patrons différents pour le cube.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Vérifier qu\'un patron est valide',
            contenu: `Pour vérifier si une figure plane est un patron valide d'un solide :<br>
1. Compter les faces — doit correspondre au nombre de faces du solide.<br>
2. Vérifier que les faces adjacentes ont des côtés de longueurs compatibles.<br>
3. Mentalement plier le patron et vérifier qu'aucune face ne se superpose à une autre.<br><br>
<em>Pour le cube :</em> Les 11 patrons valides ont des formes particulières — aucun carré n'est isolé, et la "croix" est la plus connue.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Patron du pavé droit',
            contenu: `Pavé droit de dimensions $L = 5$ cm, $l = 3$ cm, $h = 2$ cm.<br><br>
Faces : deux $5 \\times 3$, deux $5 \\times 2$, deux $3 \\times 2$.<br>
Un patron : une rangée centrale de 4 rectangles (dessus, devant, dessous, derrière) + 2 rectangles latéraux (gauche et droite).<br><br>
Aire totale du patron = aire totale du pavé :<br>
$2(5\\times3) + 2(5\\times2) + 2(3\\times2) = 30 + 20 + 12 = 62 \\text{ cm}^2$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Patron du cylindre et du cône',
            contenu: `<strong>Cylindre</strong> de rayon $r$ et hauteur $h$ :<br>
— 2 disques de rayon $r$.<br>
— 1 rectangle de largeur $h$ et longueur $2\\pi r$ (développement de la surface latérale).<br><br>
<strong>Cône</strong> de rayon $r$ et apothème (génératrice) $g$ :<br>
— 1 disque de rayon $r$ (base).<br>
— 1 secteur de cercle de rayon $g$ et d'arc $2\\pi r$.`
          }
        ]
      },
      {
        titre: 'Volumes',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Formules de volumes',
            contenu: `— <strong>Cube</strong> de côté $a$ : $V = a^3$<br>
— <strong>Pavé droit</strong> $L \\times l \\times h$ : $V = L \\times l \\times h$<br>
— <strong>Prisme droit</strong> de base $\\mathcal{B}$ et hauteur $h$ : $V = \\mathcal{A}_{\\text{base}} \\times h$<br>
— <strong>Pyramide</strong> de base $\\mathcal{B}$ et hauteur $h$ : $V = \\frac{1}{3} \\mathcal{A}_{\\text{base}} \\times h$<br>
— <strong>Cylindre</strong> de rayon $r$ et hauteur $h$ : $V = \\pi r^2 h$<br>
— <strong>Cône</strong> de rayon $r$ et hauteur $h$ : $V = \\frac{1}{3}\\pi r^2 h$<br>
— <strong>Sphère</strong> de rayon $r$ : $V = \\frac{4}{3}\\pi r^3$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Conversions d\'unités de volume',
            contenu: `Les unités de volume sont des <strong>cubes</strong> des unités de longueur. Chaque passage correspond à $\\times 1000$.<br><br>
$1 \\text{ m}^3 = 1000 \\text{ dm}^3 = 10^6 \\text{ cm}^3 = 10^9 \\text{ mm}^3$<br><br>
<strong>Lien avec les litres :</strong><br>
$1 \\text{ dm}^3 = 1 \\text{ L}$ (litre)<br>
$1 \\text{ cm}^3 = 1 \\text{ mL}$ (millilitre)<br>
$1 \\text{ m}^3 = 1000 \\text{ L}$<br><br>
<em>Exemple :</em> $2{,}5 \\text{ L} = 2{,}5 \\text{ dm}^3 = 2500 \\text{ cm}^3$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Volume d\'un pavé droit',
            contenu: `Un aquarium rectangulaire mesure $60$ cm $\\times$ $30$ cm $\\times$ $40$ cm. Quel est son volume ? Combien de litres d'eau peut-il contenir ?<br><br>
$V = 60 \\times 30 \\times 40 = 72\\ 000 \\text{ cm}^3$.<br>
$72\\ 000 \\text{ cm}^3 = 72\\ 000 \\text{ mL} = 72 \\text{ L}$.<br><br>
L'aquarium peut contenir <strong>$72$ litres</strong> d'eau (si rempli à ras bord).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Volume d\'un cylindre',
            contenu: `Un cylindre a un rayon de $4$ cm et une hauteur de $10$ cm. Calculer son volume.<br><br>
$V = \\pi r^2 h = \\pi \\times 4^2 \\times 10 = 160\\pi \\approx 502{,}7 \\text{ cm}^3$.<br><br>
En litres : $502{,}7 \\text{ cm}^3 = 0{,}5027 \\text{ L} \\approx 503 \\text{ mL}$.`
          }
        ]
      },
      {
        titre: 'Aires latérales et totales',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Aires des solides usuels',
            contenu: `— <strong>Cube</strong> de côté $a$ : $A_{\\text{tot}} = 6a^2$<br>
— <strong>Pavé droit</strong> $L \\times l \\times h$ : $A_{\\text{tot}} = 2(Ll + Lh + lh)$<br>
— <strong>Cylindre</strong> (rayon $r$, hauteur $h$) :<br>
$\\quad A_{\\text{lat}} = 2\\pi r h$ (surface latérale)<br>
$\\quad A_{\\text{tot}} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(h + r)$<br>
— <strong>Sphère</strong> de rayon $r$ : $A = 4\\pi r^2$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Emballage',
            contenu: `On veut emballer une boîte cylindrique de rayon $5$ cm et de hauteur $12$ cm. Quelle surface de carton faut-il ?<br><br>
$A_{\\text{lat}} = 2\\pi \\times 5 \\times 12 = 120\\pi \\approx 376{,}9 \\text{ cm}^2$.<br>
$A_{\text{bases}} = 2 \\times \\pi \\times 5^2 = 50\\pi \\approx 157{,}1 \\text{ cm}^2$.<br>
$A_{\\text{tot}} = 170\\pi \\approx \\mathbf{534 \\text{ cm}^2}$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Distinguer aire et volume',
            contenu: `<strong>Aire</strong> (surface) : mesure en $\\text{cm}^2$, $\\text{m}^2$, etc. → notion 2D appliquée à la peau du solide.<br>
<strong>Volume</strong> : mesure en $\\text{cm}^3$, $\\text{m}^3$, L, etc. → notion 3D, l'intérieur du solide.<br><br>
<em>Analogie :</em> L'aire d'une boîte, c'est la surface de carton nécessaire pour la fabriquer. Le volume, c'est la quantité de liquide qu'elle peut contenir.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Principe de Cavalieri',
            contenu: `Deux solides de même hauteur dont toutes les sections parallèles à la base ont la même aire ont le même volume.<br><br>
<em>Application :</em> Un prisme et un cylindre de même base et même hauteur ont le même volume (remplacer la section carrée par une section circulaire).<br><br>
Ce principe justifie que $V_{\\text{prisme}} = \\mathcal{A}_{\\text{base}} \\times h$ pour toute forme de base.`
          }
        ]
      }
    ]
  },

  {
    id: 'ma-6e-stat',
    filiere: '6eme',
    matiere: 'ma',
    titre: 'Statistiques et données',
    ordre: 10,
    enrich: false,
    sections: [
      {
        titre: 'Collecte et organisation des données',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Vocabulaire statistique',
            contenu: `La <strong>statistique</strong> est la science de la collecte, l'organisation, l'analyse et l'interprétation de données.<br><br>
— <strong>Population</strong> : ensemble de tous les individus étudiés.<br>
— <strong>Individu</strong> (ou unité statistique) : chaque élément de la population.<br>
— <strong>Caractère</strong> : la propriété mesurée ou observée. Il peut être <em>qualitatif</em> (couleur, catégorie) ou <em>quantitatif</em> (nombre, mesure).<br>
— <strong>Série statistique</strong> : la liste des valeurs du caractère pour chaque individu.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Effectif et fréquence',
            contenu: `Pour une valeur (ou modalité) $v_i$ du caractère :<br>
— <strong>Effectif</strong> $n_i$ : nombre d'individus ayant la valeur $v_i$.<br>
— <strong>Effectif total</strong> : $N = \\sum n_i$.<br>
— <strong>Fréquence</strong> $f_i = \\frac{n_i}{N}$ (nombre entre $0$ et $1$).<br>
— <strong>Fréquence en pourcentage</strong> : $f_i \\times 100\\%$.<br><br>
<em>Vérification :</em> $\\sum f_i = 1$ (ou $\\sum f_i \\times 100 = 100\\%$).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire un tableau de fréquences',
            contenu: `1. Recenser toutes les valeurs distinctes du caractère.<br>
2. Compter l'effectif de chaque valeur.<br>
3. Calculer la fréquence : $f_i = \\frac{n_i}{N}$.<br>
4. Vérifier que la somme des effectifs $= N$ et la somme des fréquences $= 1$.<br><br>
<em>Exemple :</em> Notes de 20 élèves : $\\{8, 10, 12, 10, 14, 12, 10, 16, 12, 10, \\ldots\\}$<br>
Note $10$ : effectif $= 4$, fréquence $= 4/20 = 0{,}20 = 20\\%$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Tableau de distribution',
            contenu: `Résultats d'un sondage sur le sport préféré de $40$ élèves :<br><br>
| Sport | Effectif | Fréquence |<br>
|-------|----------|-----------|<br>
| Football | 16 | $\\frac{16}{40} = 0{,}4 = 40\\%$ |<br>
| Natation | 10 | $0{,}25 = 25\\%$ |<br>
| Tennis | 8 | $0{,}2 = 20\\%$ |<br>
| Autre | 6 | $0{,}15 = 15\\%$ |<br>
| Total | 40 | $1 = 100\\%$ |`
          }
        ]
      },
      {
        titre: 'Représentations graphiques',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Diagramme en barres (bâtons)',
            contenu: `Le <strong>diagramme en barres</strong> représente chaque valeur (ou modalité) par une barre verticale dont la hauteur est proportionnelle à l'effectif (ou la fréquence).<br><br>
<em>Utilisation :</em> Convient aux caractères qualitatifs et aux caractères quantitatifs discrets.<br><br>
<em>Règles de construction :</em><br>
— Axe des abscisses : les valeurs du caractère.<br>
— Axe des ordonnées : les effectifs (ou fréquences).<br>
— Barres de largeur égale, non jointives (pour les qualitatifs).`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Diagramme circulaire (camembert)',
            contenu: `Le <strong>diagramme circulaire</strong> représente les modalités par des secteurs d'un disque. L'angle de chaque secteur est proportionnel à la fréquence :<br><br>
$$\\alpha_i = f_i \\times 360° = \\frac{n_i}{N} \\times 360°$$<br>
<em>Construction :</em><br>
1. Calculer $\\alpha_i$ pour chaque modalité.<br>
2. Tracer le disque, puis les secteurs avec le rapporteur.<br>
3. Légender et titrer.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Diagramme en ligne brisée',
            contenu: `Le <strong>diagramme en ligne brisée</strong> relie par des segments les points représentant les données en fonction du temps (ou d'une variable ordonnée).<br><br>
<em>Utilisation :</em> Surtout pour l'évolution temporelle (températures, ventes par mois, croissance, etc.).<br><br>
<em>Construction :</em> Placer chaque point $(t_i;\, v_i)$ dans un repère, puis relier les points dans l'ordre.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Choisir le bon graphique',
            contenu: `— <strong>Diagramme en barres</strong> : comparer des catégories, effectifs ou fréquences.<br>
— <strong>Diagramme circulaire</strong> : montrer des parts d'un tout (fréquences relatives).<br>
— <strong>Ligne brisée</strong> : montrer une évolution dans le temps.<br>
— <strong>Histogramme</strong> (au lycée) : données continues regroupées par intervalles.<br><br>
<em>Règle générale :</em> Le graphique doit rendre la lecture des données <em>plus facile</em>, pas plus complexe.`
          }
        ]
      },
      {
        titre: 'Moyenne',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Moyenne d\'une série statistique',
            contenu: `La <strong>moyenne</strong> (ou moyenne arithmétique) d'une série de $N$ valeurs $x_1, x_2, \\ldots, x_N$ est :<br><br>
$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_N}{N} = \\frac{\\sum_{i=1}^{N} x_i}{N}$$<br>
La moyenne est le <strong>centre de gravité</strong> de la série : si on retranche la moyenne à chaque valeur, la somme des écarts est nulle.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une moyenne pondérée',
            contenu: `Si les valeurs sont regroupées (tableau de fréquences), utiliser la formule pondérée :<br><br>
$$\\bar{x} = \\frac{\\sum n_i \\times v_i}{N} = \\sum f_i \\times v_i$$<br>
<em>Exemple :</em> Notes (sur 20) de $n$ élèves :<br>
| Note | 8 | 10 | 12 | 16 |<br>
| Effectif | 3 | 5 | 7 | 5 |<br>
$N = 20$, $\\bar{x} = \\frac{3\\times8 + 5\\times10 + 7\\times12 + 5\\times16}{20} = \\frac{24+50+84+80}{20} = \\frac{238}{20} = \\mathbf{11{,}9}$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés de la moyenne',
            contenu: `— La moyenne est comprise entre le minimum et le maximum de la série : $x_{\\min} \\leq \\bar{x} \\leq x_{\\max}$.<br>
— Si on ajoute une constante $k$ à toutes les valeurs, la nouvelle moyenne est $\\bar{x} + k$.<br>
— Si on multiplie toutes les valeurs par $k$, la nouvelle moyenne est $k \\times \\bar{x}$.<br><br>
<em>Attention :</em> La moyenne ne reflète pas nécessairement la valeur la plus fréquente (mode) ou la valeur centrale (médiane).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème de moyenne',
            contenu: `Un élève a obtenu les notes suivantes en maths : $12, 15, 8, 14, 11$. Quelle note doit-il avoir au prochain devoir pour avoir une moyenne de $13$ sur $6$ devoirs ?<br><br>
Somme actuelle : $12+15+8+14+11 = 60$.<br>
Somme nécessaire pour $\\bar{x} = 13$ sur $6$ devoirs : $13 \\times 6 = 78$.<br>
Note nécessaire : $78 - 60 = \\mathbf{18}$.`
          }
        ]
      },
      {
        titre: 'Lecture et interprétation de graphiques',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Lire un graphique statistique',
            contenu: `Pour lire et interpréter un graphique :<br>
1. <strong>Titre :</strong> Quel phénomène est représenté ? Sur quelle population ?<br>
2. <strong>Axes :</strong> Quelles grandeurs ? Quelles unités ? Quelle échelle ?<br>
3. <strong>Lecture directe :</strong> Lire une valeur pour une donnée particulière.<br>
4. <strong>Comparaison :</strong> Quelle catégorie est la plus fréquente ? La moins ?<br>
5. <strong>Tendance :</strong> Y a-t-il une évolution ? Croissante, décroissante ?`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Températures mensuelles',
            contenu: `Températures moyennes mensuelles (°C) à Paris :<br>
J: 5 | F: 6 | M: 9 | A: 12 | M: 16 | J: 19 | J: 22 | A: 22 | S: 18 | O: 14 | N: 9 | D: 6<br><br>
Moyenne annuelle : $\\bar{T} = \\frac{5+6+9+12+16+19+22+22+18+14+9+6}{12} = \\frac{158}{12} \\approx 13{,}2°C$.<br><br>
Mois le plus chaud : juillet et août ($22°C$). Plus froid : janvier ($5°C$).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Médiane et mode (introduction)',
            contenu: `La <strong>médiane</strong> est la valeur qui partage la série en deux parties égales (50% au-dessous, 50% au-dessus).<br><br>
Le <strong>mode</strong> est la valeur (ou modalité) de plus grand effectif.<br><br>
<em>Exemple :</em> Série ordonnée : $3, 5, 7, 8, 8, 10, 12$.<br>
Médiane $= 8$ (4e valeur sur 7).<br>
Mode $= 8$ (apparaît deux fois).<br>
Moyenne $= \\frac{53}{7} \\approx 7{,}57$.<br><br>
Ces trois indicateurs peuvent différer significativement.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Angle d\'un diagramme circulaire',
            contenu: `Dans un sondage, $35\\%$ des élèves préfèrent les mathématiques, $25\\%$ le français, $20\\%$ le sport, $20\\%$ autre.<br><br>
Angles des secteurs :<br>
Maths : $0{,}35 \\times 360° = 126°$<br>
Français : $0{,}25 \\times 360° = 90°$<br>
Sport : $0{,}20 \\times 360° = 72°$<br>
Autre : $0{,}20 \\times 360° = 72°$<br><br>
Vérification : $126 + 90 + 72 + 72 = 360°$ ✓`
          }
        ]
      }
    ]
  }

];
