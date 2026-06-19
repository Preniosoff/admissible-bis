// Première Générale — Mathématiques (spécialité)
// Programme officiel MEN 2019

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. SECOND DEGRÉ
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-second-degre', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Second degré', ordre: 1, enrich: false,
  sections: [
    {
      titre: 'Forme canonique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction polynôme du second degré',
          contenu: `Une <strong>fonction polynôme du second degré</strong> (ou trinôme) est une fonction définie sur $\\mathbb{R}$ par $f(x) = ax^2 + bx + c$ avec $a \\neq 0$, et $a, b, c$ réels.<br>Cette écriture est la <strong>forme développée</strong>.<br>Sa courbe représentative est une <strong>parabole</strong>, tournée vers le haut si $a > 0$, vers le bas si $a < 0$.` },
        { type: 'th', label: 'THM', titre: 'Existence de la forme canonique',
          contenu: `Tout trinôme $f(x) = ax^2 + bx + c$ ($a \\neq 0$) s'écrit de manière unique sous <strong>forme canonique</strong> :<br>$$f(x) = a(x - \\alpha)^2 + \\beta$$<br>avec $\\displaystyle \\alpha = -\\frac{b}{2a}$ et $\\beta = f(\\alpha) = c - \\frac{b^2}{4a}$.<br>Le point $S(\\alpha\\,;\\,\\beta)$ est le <strong>sommet</strong> de la parabole, et la droite $x = \\alpha$ son axe de symétrie.` },
        { type: 'meth', label: 'METH', titre: 'Mettre un trinôme sous forme canonique',
          contenu: `On factorise par $a$ puis on complète le carré.<br><strong>Exemple</strong> : $f(x) = 2x^2 - 8x + 5$.<br>$f(x) = 2(x^2 - 4x) + 5 = 2\\big[(x-2)^2 - 4\\big] + 5$<br>$= 2(x-2)^2 - 8 + 5 = 2(x-2)^2 - 3$.<br>Sommet : $S(2\\,;\\,-3)$, axe $x = 2$.` },
        { type: 'ex', label: 'EX', titre: 'Sommet et extremum',
          contenu: `<strong>Énoncé</strong> : déterminer l'extremum de $f(x) = -x^2 + 6x - 1$.<br><strong>Résolution</strong> : $\\alpha = -\\dfrac{b}{2a} = -\\dfrac{6}{-2} = 3$, $\\beta = f(3) = -9 + 18 - 1 = 8$.<br>Comme $a = -1 < 0$, la parabole est tournée vers le bas : $f$ admet un <strong>maximum</strong> égal à $8$, atteint en $x = 3$.` },
      ]
    },
    {
      titre: 'Discriminant et racines',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Discriminant',
          contenu: `Le <strong>discriminant</strong> du trinôme $ax^2 + bx + c$ ($a \\neq 0$) est :<br>$$\\Delta = b^2 - 4ac$$<br>Son signe détermine le nombre de solutions réelles de l'équation $ax^2 + bx + c = 0$.` },
        { type: 'th', label: 'THM', titre: 'Résolution de $ax^2 + bx + c = 0$',
          contenu: `Selon le signe de $\\Delta = b^2 - 4ac$ :<br><strong>Si $\\Delta > 0$</strong> : deux racines distinctes $\\displaystyle x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.<br><strong>Si $\\Delta = 0$</strong> : une racine double $\\displaystyle x_0 = -\\frac{b}{2a}$.<br><strong>Si $\\Delta < 0$</strong> : aucune racine réelle.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre une équation du second degré',
          contenu: `1. Mettre sous la forme $ax^2 + bx + c = 0$.<br>2. Calculer $\\Delta = b^2 - 4ac$.<br>3. Selon le signe de $\\Delta$, appliquer les formules.<br><strong>Exemple</strong> : $2x^2 - 3x - 2 = 0$.<br>$\\Delta = 9 + 16 = 25 > 0$, $\\sqrt{\\Delta} = 5$.<br>$x_1 = \\dfrac{3 - 5}{4} = -\\dfrac{1}{2}$, $x_2 = \\dfrac{3 + 5}{4} = 2$.` },
        { type: 'ex', label: 'EX', titre: 'Racine double',
          contenu: `<strong>Énoncé</strong> : résoudre $9x^2 - 6x + 1 = 0$.<br><strong>Résolution</strong> : $\\Delta = 36 - 36 = 0$.<br>Racine double : $x_0 = -\\dfrac{-6}{2 \\times 9} = \\dfrac{6}{18} = \\dfrac{1}{3}$.<br>On reconnaît $(3x - 1)^2 = 0$, ce qui confirme $x = \\dfrac{1}{3}$.` },
      ]
    },
    {
      titre: 'Factorisation et somme-produit',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Forme factorisée',
          contenu: `Si $\\Delta > 0$ avec racines $x_1, x_2$ :<br>$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$<br>Si $\\Delta = 0$ avec racine double $x_0$ :<br>$$ax^2 + bx + c = a(x - x_0)^2$$<br>Si $\\Delta < 0$ : le trinôme n'admet pas de factorisation dans $\\mathbb{R}$.` },
        { type: 'prop', label: 'PROP', titre: 'Somme et produit des racines',
          contenu: `Si le trinôme $ax^2 + bx + c$ admet deux racines $x_1$ et $x_2$ (éventuellement confondues) :<br>$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\times x_2 = \\frac{c}{a}$$<br>Utile pour trouver la seconde racine quand on en connaît une, ou pour vérifier un calcul.` },
        { type: 'meth', label: 'METH', titre: 'Trouver deux nombres connaissant somme et produit',
          contenu: `Deux nombres de somme $S$ et de produit $P$ sont les racines de :<br>$$X^2 - SX + P = 0$$<br><strong>Exemple</strong> : deux nombres de somme $7$ et de produit $12$.<br>$X^2 - 7X + 12 = 0$, $\\Delta = 49 - 48 = 1$, racines $3$ et $4$.` },
        { type: 'ex', label: 'EX', titre: 'Factoriser un trinôme',
          contenu: `<strong>Énoncé</strong> : factoriser $f(x) = 3x^2 + 5x - 2$.<br><strong>Résolution</strong> : $\\Delta = 25 + 24 = 49$, $\\sqrt{\\Delta} = 7$.<br>$x_1 = \\dfrac{-5 - 7}{6} = -2$, $x_2 = \\dfrac{-5 + 7}{6} = \\dfrac{1}{3}$.<br>Donc $f(x) = 3(x + 2)\\left(x - \\dfrac{1}{3}\\right) = (x+2)(3x - 1)$.` },
      ]
    },
    {
      titre: 'Signe du trinôme et inéquations',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Signe du trinôme',
          contenu: `Le trinôme $ax^2 + bx + c$ est <strong>du signe de $a$ partout, sauf entre les racines</strong> (lorsqu'elles existent) où il est du signe de $-a$.<br>Mémo : <strong>« signe de $a$ à l'extérieur des racines, signe de $-a$ à l'intérieur »</strong>.<br>Si $\\Delta < 0$ : le trinôme garde le signe de $a$ sur tout $\\mathbb{R}$.<br>Si $\\Delta = 0$ : du signe de $a$, sauf nul en $x_0$.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre une inéquation du second degré',
          contenu: `1. Tout ramener à $ax^2 + bx + c \\;\\square\\; 0$.<br>2. Calculer $\\Delta$ et les éventuelles racines.<br>3. Dresser le tableau de signe.<br>4. Lire l'ensemble solution.<br><strong>Exemple</strong> : $x^2 - x - 6 \\geq 0$. Racines $-2$ et $3$ ($a > 0$).<br>Solution : $S = ]{-\\infty}\\,;\\,-2] \\cup [3\\,;\\,+\\infty[$.` },
        { type: 'ex', label: 'EX', titre: 'Inéquation avec $\\Delta < 0$',
          contenu: `<strong>Énoncé</strong> : résoudre $x^2 + x + 1 > 0$.<br><strong>Résolution</strong> : $\\Delta = 1 - 4 = -3 < 0$.<br>Le trinôme garde le signe de $a = 1 > 0$ sur $\\mathbb{R}$.<br>Donc $x^2 + x + 1 > 0$ pour tout réel : $S = \\mathbb{R}$.` },
        { type: 'ex', label: 'EX', titre: 'Position relative de deux courbes',
          contenu: `<strong>Énoncé</strong> : positions de $\\mathcal{C}_f$ ($f(x)=x^2$) et $\\mathcal{D}$ ($y = 2x - 1$).<br><strong>Résolution</strong> : on étudie $f(x) - (2x-1) = x^2 - 2x + 1 = (x-1)^2 \\geq 0$.<br>Donc $\\mathcal{C}_f$ est toujours au-dessus de $\\mathcal{D}$, avec contact (tangence) en $x = 1$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. SUITES NUMÉRIQUES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-suites', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Suites numériques', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Généralités sur les suites',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Suite numérique',
          contenu: `Une <strong>suite numérique</strong> $(u_n)$ est une fonction de $\\mathbb{N}$ (ou d'une partie de $\\mathbb{N}$) dans $\\mathbb{R}$ : à chaque entier $n$ on associe un réel $u_n$, appelé <strong>terme de rang $n$</strong>.<br>Deux modes de définition :<br><strong>Explicite</strong> : $u_n = f(n)$ (ex. $u_n = n^2 + 1$).<br><strong>Récurrence</strong> : $u_{n+1} = g(u_n)$ et $u_0$ donné.` },
        { type: 'def', label: 'DEF', titre: 'Sens de variation',
          contenu: `La suite $(u_n)$ est :<br><strong>croissante</strong> si $u_{n+1} \\geq u_n$ pour tout $n$ ;<br><strong>décroissante</strong> si $u_{n+1} \\leq u_n$ pour tout $n$ ;<br><strong>constante</strong> si $u_{n+1} = u_n$ pour tout $n$.<br>Une suite croissante ou décroissante est dite <strong>monotone</strong>.` },
        { type: 'meth', label: 'METH', titre: 'Étudier le sens de variation',
          contenu: `Trois méthodes :<br>1. <strong>Signe de $u_{n+1} - u_n$</strong>.<br>2. Si tous les $u_n > 0$ : comparer $\\dfrac{u_{n+1}}{u_n}$ à $1$.<br>3. Si $u_n = f(n)$ avec $f$ monotone sur $[0\\,;\\,+\\infty[$ : même sens que $f$.<br><strong>Exemple</strong> : $u_n = n^2 - n$. $u_{n+1} - u_n = (n+1)^2 - (n+1) - n^2 + n = 2n \\geq 0$ : croissante.` },
        { type: 'ex', label: 'EX', titre: 'Calcul des premiers termes (récurrence)',
          contenu: `<strong>Énoncé</strong> : $u_0 = 2$ et $u_{n+1} = 3u_n - 1$. Calculer $u_1, u_2, u_3$.<br><strong>Résolution</strong> :<br>$u_1 = 3\\times 2 - 1 = 5$<br>$u_2 = 3\\times 5 - 1 = 14$<br>$u_3 = 3\\times 14 - 1 = 41$.` },
      ]
    },
    {
      titre: 'Suites arithmétiques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Suite arithmétique',
          contenu: `$(u_n)$ est <strong>arithmétique</strong> de <strong>raison</strong> $r$ s'il existe un réel $r$ tel que pour tout $n$ :<br>$$u_{n+1} = u_n + r$$<br>On passe d'un terme au suivant en <strong>ajoutant toujours $r$</strong>.<br>Caractérisation : $(u_n)$ est arithmétique ssi $u_{n+1} - u_n$ est constant.` },
        { type: 'form', label: 'FORM', titre: 'Terme général',
          contenu: `Pour une suite arithmétique de raison $r$ :<br>$$u_n = u_0 + n\\,r \\qquad u_n = u_p + (n - p)\\,r$$<br><strong>Variation</strong> : croissante si $r > 0$, décroissante si $r < 0$, constante si $r = 0$.<br>Représentation : les points $(n\\,;\\,u_n)$ sont <strong>alignés</strong>.` },
        { type: 'form', label: 'FORM', titre: 'Somme de termes consécutifs',
          contenu: `La somme de termes consécutifs vaut <strong>nombre de termes $\\times$ moyenne des extrêmes</strong> :<br>$$\\sum_{k=0}^{n} u_k = (n+1)\\,\\frac{u_0 + u_n}{2}$$<br>En particulier : $\\displaystyle \\sum_{k=1}^{n} k = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.` },
        { type: 'ex', label: 'EX', titre: 'Somme arithmétique',
          contenu: `<strong>Énoncé</strong> : $u_n$ arithmétique, $u_0 = 3$, $r = 2$. Calculer $S = u_0 + u_1 + \\dots + u_{20}$.<br><strong>Résolution</strong> : $u_{20} = 3 + 20\\times 2 = 43$. Il y a $21$ termes.<br>$S = 21 \\times \\dfrac{3 + 43}{2} = 21 \\times 23 = 483$.` },
      ]
    },
    {
      titre: 'Suites géométriques',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Suite géométrique',
          contenu: `$(u_n)$ est <strong>géométrique</strong> de <strong>raison</strong> $q$ s'il existe un réel $q$ tel que pour tout $n$ :<br>$$u_{n+1} = q \\times u_n$$<br>On passe d'un terme au suivant en <strong>multipliant toujours par $q$</strong>.<br>Si tous les $u_n \\neq 0$ : caractérisation par $\\dfrac{u_{n+1}}{u_n} = q$ constant.` },
        { type: 'form', label: 'FORM', titre: 'Terme général',
          contenu: `Pour une suite géométrique de raison $q$ :<br>$$u_n = u_0 \\times q^n \\qquad u_n = u_p \\times q^{\\,n-p}$$<br>Avec $u_0 > 0$ : croissante si $q > 1$, décroissante si $0 < q < 1$, constante si $q = 1$.` },
        { type: 'form', label: 'FORM', titre: 'Somme de termes consécutifs',
          contenu: `Pour $q \\neq 1$ :<br>$$\\sum_{k=0}^{n} q^k = 1 + q + q^2 + \\dots + q^n = \\frac{1 - q^{\\,n+1}}{1 - q}$$<br>Plus généralement : $\\displaystyle \\sum_{k=0}^{n} u_k = u_0 \\times \\frac{1 - q^{\\,n+1}}{1 - q}$ (somme $=$ premier terme $\\times \\frac{1 - q^{\\text{nb termes}}}{1-q}$).` },
        { type: 'ex', label: 'EX', titre: 'Somme géométrique',
          contenu: `<strong>Énoncé</strong> : $u_n$ géométrique, $u_0 = 5$, $q = 2$. Calculer $S = u_0 + \\dots + u_9$.<br><strong>Résolution</strong> : il y a $10$ termes.<br>$S = 5 \\times \\dfrac{1 - 2^{10}}{1 - 2} = 5 \\times \\dfrac{1 - 1024}{-1} = 5 \\times 1023 = 5115$.` },
      ]
    },
    {
      titre: 'Modélisation et algorithmique',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Reconnaître la nature d\'une suite',
          contenu: `Face à $u_{n+1} = a\\,u_n + b$ :<br>Si $a = 1$ : suite <strong>arithmétique</strong> de raison $b$.<br>Si $b = 0$ : suite <strong>géométrique</strong> de raison $a$.<br>Sinon (<strong>arithmético-géométrique</strong>) : on introduit souvent une suite auxiliaire $v_n = u_n - \\ell$ avec $\\ell = \\dfrac{b}{1-a}$ (le point fixe), qui est géométrique de raison $a$.` },
        { type: 'ex', label: 'EX', titre: 'Suite auxiliaire géométrique',
          contenu: `<strong>Énoncé</strong> : $u_0 = 1$, $u_{n+1} = 0{,}5\\,u_n + 3$. On pose $v_n = u_n - 6$.<br><strong>Résolution</strong> : $v_{n+1} = u_{n+1} - 6 = 0{,}5\\,u_n + 3 - 6 = 0{,}5(u_n - 6) = 0{,}5\\,v_n$.<br>$(v_n)$ est géométrique de raison $0{,}5$, $v_0 = -5$. Donc $u_n = 6 - 5\\times 0{,}5^{\\,n}$.` },
        { type: 'ex', label: 'EX', titre: 'Évolution en pourcentage',
          contenu: `<strong>Énoncé</strong> : un capital de $1000$ € augmente de $4\\%$ par an. Modéliser.<br><strong>Résolution</strong> : augmenter de $4\\%$ revient à multiplier par $1{,}04$.<br>$(C_n)$ géométrique de raison $1{,}04$ : $C_n = 1000 \\times 1{,}04^{\\,n}$.<br>Au bout de $5$ ans : $C_5 = 1000 \\times 1{,}04^5 \\approx 1216{,}65$ €.` },
        { type: 'meth', label: 'METH', titre: 'Seuil avec une boucle « Tant que »',
          contenu: `Pour trouver le plus petit $n$ tel que $u_n$ dépasse un seuil $S$ :<br><ul><li>$n \\leftarrow 0$ ; $u \\leftarrow u_0$</li><li><strong>Tant que</strong> $u < S$ : $u \\leftarrow$ (relation de récurrence) ; $n \\leftarrow n + 1$</li><li>Renvoyer $n$</li></ul>À la sortie de la boucle, $n$ est le premier rang vérifiant $u_n \\geq S$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. DÉRIVATION  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-deriv', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Dérivation', ordre: 3, enrich: true,
  sections: [
    {
      titre: 'Nombre dérivé et tangente',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Taux de variation',
          contenu: `Le <strong>taux de variation</strong> (ou taux d'accroissement) de $f$ entre $a$ et $a + h$ est :<br>$$\\tau(h) = \\frac{f(a + h) - f(a)}{h}$$<br>C'est le coefficient directeur de la droite (sécante) passant par les points $A(a\\,;\\,f(a))$ et $M(a+h\\,;\\,f(a+h))$.` },
        { type: 'def', label: 'DEF', titre: 'Nombre dérivé',
          contenu: `$f$ est <strong>dérivable en $a$</strong> si le taux de variation admet une limite finie quand $h \\to 0$. Cette limite est le <strong>nombre dérivé</strong> :<br>$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$<br>Interprétation : $f'(a)$ est le <strong>coefficient directeur de la tangente</strong> à $\\mathcal{C}_f$ au point d'abscisse $a$.` },
        { type: 'form', label: 'FORM', titre: 'Équation de la tangente',
          contenu: `La tangente à $\\mathcal{C}_f$ au point d'abscisse $a$ a pour équation :<br>$$y = f'(a)(x - a) + f(a)$$<br>C'est la droite passant par $A(a\\,;\\,f(a))$ et de coefficient directeur $f'(a)$.` },
        { type: 'ex', label: 'EX', titre: 'Calcul d\'un nombre dérivé par définition',
          contenu: `<strong>Énoncé</strong> : $f(x) = x^2$. Calculer $f'(3)$ par définition.<br><strong>Résolution</strong> : $\\dfrac{f(3+h) - f(3)}{h} = \\dfrac{(3+h)^2 - 9}{h} = \\dfrac{6h + h^2}{h} = 6 + h$.<br>Quand $h \\to 0$ : $f'(3) = 6$. Tangente en $x=3$ : $y = 6(x - 3) + 9 = 6x - 9$.` },
      ]
    },
    {
      titre: 'Fonction dérivée et dérivées usuelles',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction dérivée',
          contenu: `Si $f$ est dérivable en tout point d'un intervalle $I$, la fonction qui à $x$ associe $f'(x)$ est la <strong>fonction dérivée</strong> de $f$, notée $f'$.<br>On note aussi $\\dfrac{\\mathrm{d}f}{\\mathrm{d}x}$.` },
        { type: 'form', label: 'FORM', titre: 'Dérivées des fonctions usuelles',
          contenu: `$$\\begin{array}{c|c|c} f(x) & f'(x) & \\text{domaine} \\\\ \\hline k & 0 & \\mathbb{R} \\\\ x & 1 & \\mathbb{R} \\\\ x^n & n\\,x^{n-1} & \\mathbb{R} \\\\ \\dfrac{1}{x} & -\\dfrac{1}{x^2} & x \\neq 0 \\\\ \\sqrt{x} & \\dfrac{1}{2\\sqrt{x}} & x > 0 \\end{array}$$` },
        { type: 'form', label: 'FORM', titre: 'Dérivées trigonométriques et exponentielle',
          contenu: `$$(\\cos x)' = -\\sin x \\qquad (\\sin x)' = \\cos x$$<br>$$(e^x)' = e^x$$<br>Ces résultats sont valables sur tout $\\mathbb{R}$.` },
        { type: 'ex', label: 'EX', titre: 'Dériver un polynôme',
          contenu: `<strong>Énoncé</strong> : dériver $f(x) = 4x^3 - 2x^2 + 5x - 7$.<br><strong>Résolution</strong> : terme à terme,<br>$f'(x) = 4 \\times 3x^2 - 2 \\times 2x + 5 = 12x^2 - 4x + 5$.` },
      ]
    },
    {
      titre: 'Opérations sur les dérivées',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Somme, produit, inverse, quotient',
          contenu: `$$(u + v)' = u' + v' \\qquad (k\\,u)' = k\\,u'$$<br>$$(uv)' = u'v + uv'$$<br>$$\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2} \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$<br>(les formules en $v$ supposent $v(x) \\neq 0$.)` },
        { type: 'form', label: 'FORM', titre: 'Dérivée de $\\sqrt{u}$ et $u^n$',
          contenu: `$$(u^n)' = n\\,u'\\,u^{n-1} \\qquad (\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$$<br>La seconde formule suppose $u(x) > 0$.<br>Ces formes de composition sont au programme de Première.` },
        { type: 'meth', label: 'METH', titre: 'Dériver un quotient',
          contenu: `On identifie $u$ et $v$, on calcule $u'$ et $v'$, puis on applique la formule.<br><strong>Exemple</strong> : $f(x) = \\dfrac{2x - 1}{x + 3}$.<br>$u = 2x - 1$, $u' = 2$ ; $v = x + 3$, $v' = 1$.<br>$f'(x) = \\dfrac{2(x+3) - (2x-1)\\times 1}{(x+3)^2} = \\dfrac{7}{(x+3)^2}$.` },
        { type: 'ex', label: 'EX', titre: 'Dériver un produit',
          contenu: `<strong>Énoncé</strong> : dériver $f(x) = (3x + 1)e^x$.<br><strong>Résolution</strong> : $u = 3x+1$, $u' = 3$ ; $v = e^x$, $v' = e^x$.<br>$f'(x) = 3e^x + (3x+1)e^x = (3x + 4)e^x$.` },
      ]
    },
    {
      titre: 'Dérivation et variations',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Signe de la dérivée et variations',
          contenu: `Soit $f$ dérivable sur un intervalle $I$ :<br>Si $f'(x) \\geq 0$ sur $I$ : $f$ est <strong>croissante</strong> sur $I$.<br>Si $f'(x) \\leq 0$ sur $I$ : $f$ est <strong>décroissante</strong> sur $I$.<br>Si $f'(x) = 0$ sur $I$ : $f$ est <strong>constante</strong> sur $I$.<br>(Croissance stricte si $f' > 0$ sauf en un nombre fini de points.)` },
        { type: 'th', label: 'THM', titre: 'Extremum local',
          contenu: `Si $f'$ <strong>s'annule en changeant de signe</strong> en $x_0$, alors $f$ admet un <strong>extremum local</strong> en $x_0$ :<br>maximum si $f'$ passe du $+$ au $-$, minimum si elle passe du $-$ au $+$.<br>Attention : $f'(x_0) = 0$ sans changement de signe ne donne pas d'extremum (ex. $x^3$ en $0$).` },
        { type: 'meth', label: 'METH', titre: 'Dresser un tableau de variations',
          contenu: `1. Déterminer le domaine et calculer $f'(x)$.<br>2. Étudier le signe de $f'(x)$ (résoudre $f'(x) = 0$, tableau de signe).<br>3. En déduire les variations de $f$.<br>4. Compléter avec les valeurs aux bornes et aux extremums.` },
        { type: 'ex', label: 'EX', titre: 'Étude complète',
          contenu: `<strong>Énoncé</strong> : variations de $f(x) = x^3 - 3x$ sur $\\mathbb{R}$.<br><strong>Résolution</strong> : $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$.<br>$f' > 0$ sur $]{-\\infty}\\,;\\,-1[$, $f' < 0$ sur $]{-1}\\,;\\,1[$, $f' > 0$ sur $]1\\,;\\,+\\infty[$.<br>Maximum local $f(-1) = 2$, minimum local $f(1) = -2$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. FONCTION EXPONENTIELLE  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-expo', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Fonction exponentielle', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Définition et premières propriétés',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Existence de la fonction exponentielle',
          contenu: `Il existe une <strong>unique fonction</strong> $f$ dérivable sur $\\mathbb{R}$ telle que :<br>$$f' = f \\qquad \\text{et} \\qquad f(0) = 1$$<br>Cette fonction est appelée <strong>fonction exponentielle</strong>, notée $\\exp$ ou $x \\mapsto e^x$.` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés fondamentales',
          contenu: `Pour tout réel $x$ :<br>$$e^x > 0 \\qquad (e^x)' = e^x \\qquad e^0 = 1$$<br>La fonction exponentielle est <strong>strictement croissante</strong> sur $\\mathbb{R}$ (car sa dérivée $e^x > 0$).<br>On note $e = e^1 \\approx 2{,}718$.` },
        { type: 'def', label: 'DEF', titre: 'Notation puissance',
          contenu: `Le nombre $e \\approx 2{,}718$ est tel que $\\exp(1) = e$. On note alors $\\exp(x) = e^x$.<br>Cette notation est cohérente avec les puissances : $\\exp(n) = e^n$ pour tout entier $n$, et les règles de calcul des puissances s'étendent à tout exposant réel.` },
        { type: 'ex', label: 'EX', titre: 'Tangente à l\'origine',
          contenu: `<strong>Énoncé</strong> : équation de la tangente à $\\mathcal{C}_{\\exp}$ en $x = 0$.<br><strong>Résolution</strong> : $f(0) = e^0 = 1$, $f'(0) = e^0 = 1$.<br>$y = f'(0)(x - 0) + f(0) = x + 1$.<br>La courbe est au-dessus de cette tangente : $e^x \\geq x + 1$ pour tout $x$.` },
      ]
    },
    {
      titre: 'Propriétés algébriques',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Relation fonctionnelle',
          contenu: `Pour tous réels $a$ et $b$ :<br>$$e^{a+b} = e^a \\times e^b$$<br>C'est la propriété caractéristique : l'exponentielle transforme les <strong>sommes en produits</strong>.` },
        { type: 'form', label: 'FORM', titre: 'Règles de calcul',
          contenu: `Pour tous réels $a, b$ et tout entier $n$ :<br>$$e^{-a} = \\frac{1}{e^a} \\qquad e^{a-b} = \\frac{e^a}{e^b}$$<br>$$\\left(e^a\\right)^n = e^{\\,na}$$` },
        { type: 'meth', label: 'METH', titre: 'Simplifier une expression exponentielle',
          contenu: `On regroupe les exposants en utilisant les règles ci-dessus.<br><strong>Exemple</strong> : $\\dfrac{e^{2x} \\times e^{3}}{e^{x-1}}$.<br>$= e^{2x + 3 - (x - 1)} = e^{x + 4}$.` },
        { type: 'ex', label: 'EX', titre: 'Démontrer une identité',
          contenu: `<strong>Énoncé</strong> : montrer que $\\dfrac{e^{2x} - 1}{e^x} = e^x - e^{-x}$.<br><strong>Résolution</strong> : $\\dfrac{e^{2x} - 1}{e^x} = \\dfrac{e^{2x}}{e^x} - \\dfrac{1}{e^x} = e^{x} - e^{-x}$.` },
      ]
    },
    {
      titre: 'Dérivation de $e^{u}$',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Dérivée de $e^{u}$',
          contenu: `Si $u$ est dérivable sur $I$ :<br>$$\\left(e^{u}\\right)' = u' \\, e^{u}$$<br>Cas particulier fréquent : $\\left(e^{kx}\\right)' = k\\,e^{kx}$ pour $k$ constant réel.` },
        { type: 'meth', label: 'METH', titre: 'Dériver une composée avec l\'exponentielle',
          contenu: `On identifie $u$, on calcule $u'$, on applique $\\left(e^u\\right)' = u'e^u$.<br><strong>Exemple</strong> : $f(x) = e^{-x^2}$. Ici $u = -x^2$, $u' = -2x$.<br>$f'(x) = -2x\\,e^{-x^2}$.` },
        { type: 'ex', label: 'EX', titre: 'Variations de $x\\,e^{-x}$',
          contenu: `<strong>Énoncé</strong> : étudier $f(x) = x\\,e^{-x}$ sur $\\mathbb{R}$.<br><strong>Résolution</strong> : $f'(x) = e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}$.<br>Comme $e^{-x} > 0$, $f'(x)$ a le signe de $1 - x$.<br>$f$ croît sur $]{-\\infty}\\,;\\,1]$, décroît sur $[1\\,;\\,+\\infty[$. Maximum $f(1) = e^{-1}$.` },
        { type: 'ex', label: 'EX', titre: 'Tangente à une exponentielle',
          contenu: `<strong>Énoncé</strong> : tangente à $\\mathcal{C}_f$ ($f(x) = e^{2x}$) en $x = 0$.<br><strong>Résolution</strong> : $f(0) = 1$, $f'(x) = 2e^{2x}$ donc $f'(0) = 2$.<br>$y = 2(x - 0) + 1 = 2x + 1$.` },
      ]
    },
    {
      titre: 'Équations et inéquations',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Équivalences fondamentales',
          contenu: `Par stricte croissance de l'exponentielle, pour tous réels $a, b$ :<br>$$e^a = e^b \\iff a = b$$<br>$$e^a < e^b \\iff a < b$$<br>De plus $e^x > 0$ pour tout $x$ : une équation $e^{\\,\\ldots} = k$ n'a de solution que si $k > 0$.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre une équation exponentielle',
          contenu: `1. Tout exprimer comme égalité de deux exponentielles, ou poser $X = e^x$ si besoin.<br>2. Utiliser $e^a = e^b \\iff a = b$.<br><strong>Exemple</strong> : $e^{3x - 1} = e^{x + 5}$ donne $3x - 1 = x + 5$, soit $x = 3$.` },
        { type: 'ex', label: 'EX', titre: 'Équation par changement de variable',
          contenu: `<strong>Énoncé</strong> : résoudre $e^{2x} - 3e^x + 2 = 0$.<br><strong>Résolution</strong> : on pose $X = e^x > 0$. $X^2 - 3X + 2 = 0$, racines $X = 1$ et $X = 2$.<br>$e^x = 1 \\Rightarrow x = 0$ ; $e^x = 2 \\Rightarrow x = \\ln 2$.<br>$S = \\{0\\,;\\,\\ln 2\\}$.` },
        { type: 'ex', label: 'EX', titre: 'Inéquation exponentielle',
          contenu: `<strong>Énoncé</strong> : résoudre $e^{x + 1} \\geq 1$.<br><strong>Résolution</strong> : $1 = e^0$, donc $e^{x+1} \\geq e^0 \\iff x + 1 \\geq 0 \\iff x \\geq -1$.<br>$S = [-1\\,;\\,+\\infty[$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. FONCTIONS TRIGONOMÉTRIQUES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-trigo', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Fonctions trigonométriques', ordre: 5, enrich: true,
  sections: [
    {
      titre: 'Radian et cercle trigonométrique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Radian',
          contenu: `Le <strong>radian</strong> est l'unité d'angle telle qu'un angle au centre interceptant un arc de longueur égale au rayon mesure $1$ rad.<br>Conversion : $180° = \\pi$ rad. Donc<br>$$\\text{angle en rad} = \\text{angle en degrés} \\times \\frac{\\pi}{180}$$<br>Valeurs : $90° = \\dfrac{\\pi}{2}$, $60° = \\dfrac{\\pi}{3}$, $45° = \\dfrac{\\pi}{4}$, $30° = \\dfrac{\\pi}{6}$.` },
        { type: 'def', label: 'DEF', titre: 'Cercle trigonométrique et enroulement',
          contenu: `Le <strong>cercle trigonométrique</strong> est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct (sens inverse des aiguilles d'une montre).<br>À tout réel $x$ on associe un point $M$ du cercle obtenu en « enroulant » la droite réelle : $M$ a pour coordonnées $(\\cos x\\,;\\,\\sin x)$.` },
        { type: 'def', label: 'DEF', titre: 'Cosinus et sinus',
          contenu: `Pour un réel $x$ repéré par le point $M$ sur le cercle trigonométrique :<br>$\\cos x$ est l'<strong>abscisse</strong> de $M$, $\\sin x$ son <strong>ordonnée</strong>.<br>Conséquences : $-1 \\leq \\cos x \\leq 1$ et $-1 \\leq \\sin x \\leq 1$, et la <strong>relation fondamentale</strong>:<br>$$\\cos^2 x + \\sin^2 x = 1$$` },
        { type: 'ex', label: 'EX', titre: 'Conversion d\'angle',
          contenu: `<strong>Énoncé</strong> : convertir $135°$ en radians.<br><strong>Résolution</strong> : $135 \\times \\dfrac{\\pi}{180} = \\dfrac{135\\pi}{180} = \\dfrac{3\\pi}{4}$ rad.` },
      ]
    },
    {
      titre: 'Valeurs remarquables et symétries',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Valeurs remarquables',
          contenu: `$$\\begin{array}{c|c|c|c|c|c} x & 0 & \\frac{\\pi}{6} & \\frac{\\pi}{4} & \\frac{\\pi}{3} & \\frac{\\pi}{2} \\\\ \\hline \\cos x & 1 & \\frac{\\sqrt{3}}{2} & \\frac{\\sqrt{2}}{2} & \\frac{1}{2} & 0 \\\\ \\sin x & 0 & \\frac{1}{2} & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} & 1 \\end{array}$$` },
        { type: 'form', label: 'FORM', titre: 'Angles associés',
          contenu: `$$\\cos(-x) = \\cos x \\qquad \\sin(-x) = -\\sin x$$<br>$$\\cos(\\pi - x) = -\\cos x \\qquad \\sin(\\pi - x) = \\sin x$$<br>$$\\cos(\\pi + x) = -\\cos x \\qquad \\sin(\\pi + x) = -\\sin x$$<br>$$\\cos\\!\\left(\\frac{\\pi}{2} - x\\right) = \\sin x \\qquad \\sin\\!\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$$` },
        { type: 'prop', label: 'PROP', titre: 'Périodicité',
          contenu: `Pour tout réel $x$ et tout entier $k$ :<br>$$\\cos(x + 2k\\pi) = \\cos x \\qquad \\sin(x + 2k\\pi) = \\sin x$$<br>Les fonctions $\\cos$ et $\\sin$ sont <strong>$2\\pi$-périodiques</strong>.<br>$\\cos$ est <strong>paire</strong>, $\\sin$ est <strong>impaire</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Utiliser les angles associés',
          contenu: `<strong>Énoncé</strong> : calculer $\\cos\\!\\left(\\dfrac{2\\pi}{3}\\right)$.<br><strong>Résolution</strong> : $\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$, donc $\\cos\\!\\left(\\dfrac{2\\pi}{3}\\right) = -\\cos\\!\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2}$.` },
      ]
    },
    {
      titre: 'Fonctions cosinus et sinus',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Courbes représentatives',
          contenu: `Les courbes de $\\cos$ et $\\sin$ sont des <strong>sinusoïdes</strong> bornées entre $-1$ et $1$, de période $2\\pi$.<br>La courbe de $\\cos$ est symétrique par rapport à l'axe des ordonnées (fonction paire).<br>La courbe de $\\sin$ est symétrique par rapport à l'origine (fonction impaire).<br>On a $\\cos x = \\sin\\!\\left(x + \\dfrac{\\pi}{2}\\right)$ : la courbe de $\\cos$ se déduit de celle de $\\sin$ par translation.` },
        { type: 'form', label: 'FORM', titre: 'Dérivées',
          contenu: `Sur $\\mathbb{R}$ :<br>$$(\\sin x)' = \\cos x \\qquad (\\cos x)' = -\\sin x$$<br>Par composition :<br>$$(\\sin u)' = u'\\cos u \\qquad (\\cos u)' = -u'\\sin u$$` },
        { type: 'meth', label: 'METH', titre: 'Étudier $\\cos$ sur $[0\\,;\\,\\pi]$',
          contenu: `Sa dérivée est $-\\sin x$. Sur $[0\\,;\\,\\pi]$, $\\sin x \\geq 0$ donc $-\\sin x \\leq 0$ : $\\cos$ est <strong>décroissante</strong> sur $[0\\,;\\,\\pi]$, de $\\cos 0 = 1$ à $\\cos \\pi = -1$.<br>Par parité et périodicité, on en déduit le comportement sur tout $\\mathbb{R}$.` },
        { type: 'ex', label: 'EX', titre: 'Dérivée d\'une fonction trigonométrique',
          contenu: `<strong>Énoncé</strong> : dériver $f(x) = \\sin(3x)$.<br><strong>Résolution</strong> : $u = 3x$, $u' = 3$.<br>$f'(x) = 3\\cos(3x)$.` },
      ]
    },
    {
      titre: 'Équations trigonométriques',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Résolution de $\\cos x = \\cos a$',
          contenu: `$$\\cos x = \\cos a \\iff x = a + 2k\\pi \\;\\text{ou}\\; x = -a + 2k\\pi \\quad (k \\in \\mathbb{Z})$$<br>$$\\sin x = \\sin a \\iff x = a + 2k\\pi \\;\\text{ou}\\; x = \\pi - a + 2k\\pi \\quad (k \\in \\mathbb{Z})$$` },
        { type: 'meth', label: 'METH', titre: 'Résoudre une équation trigonométrique',
          contenu: `1. Se ramener à $\\cos x = \\cos a$ ou $\\sin x = \\sin a$ avec $a$ remarquable.<br>2. Appliquer la formule de résolution.<br>3. Sélectionner les solutions dans l'intervalle demandé (en faisant varier $k$).` },
        { type: 'ex', label: 'EX', titre: 'Équation en cosinus',
          contenu: `<strong>Énoncé</strong> : résoudre $\\cos x = \\dfrac{1}{2}$ sur $[0\\,;\\,2\\pi[$.<br><strong>Résolution</strong> : $\\dfrac{1}{2} = \\cos\\dfrac{\\pi}{3}$.<br>$x = \\dfrac{\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{\\pi}{3} + 2k\\pi$.<br>Dans $[0\\,;\\,2\\pi[$ : $S = \\left\\{\\dfrac{\\pi}{3}\\,;\\,\\dfrac{5\\pi}{3}\\right\\}$.` },
        { type: 'ex', label: 'EX', titre: 'Équation en sinus',
          contenu: `<strong>Énoncé</strong> : résoudre $\\sin x = \\dfrac{\\sqrt{2}}{2}$ sur $[0\\,;\\,2\\pi[$.<br><strong>Résolution</strong> : $\\dfrac{\\sqrt{2}}{2} = \\sin\\dfrac{\\pi}{4}$.<br>$x = \\dfrac{\\pi}{4} + 2k\\pi$ ou $x = \\pi - \\dfrac{\\pi}{4} + 2k\\pi = \\dfrac{3\\pi}{4} + 2k\\pi$.<br>$S = \\left\\{\\dfrac{\\pi}{4}\\,;\\,\\dfrac{3\\pi}{4}\\right\\}$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. PRODUIT SCALAIRE
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-prod-scal', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Produit scalaire', ordre: 6, enrich: false,
  sections: [
    {
      titre: 'Définitions du produit scalaire',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Avec norme et angle',
          contenu: `Le <strong>produit scalaire</strong> de deux vecteurs $\\vec{u}$ et $\\vec{v}$ non nuls est :<br>$$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$$<br>où $\\theta = (\\widehat{\\vec{u}, \\vec{v}})$ est l'angle entre les vecteurs.<br>Si $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$ : $\\vec{u}\\cdot\\vec{v} = 0$.` },
        { type: 'def', label: 'DEF', titre: 'Avec les coordonnées',
          contenu: `Dans un repère <strong>orthonormé</strong>, si $\\vec{u}\\,(x\\,;\\,y)$ et $\\vec{v}\\,(x'\\,;\\,y')$ :<br>$$\\vec{u} \\cdot \\vec{v} = xx' + yy'$$<br>En particulier $\\vec{u} \\cdot \\vec{u} = x^2 + y^2 = \\|\\vec{u}\\|^2$.` },
        { type: 'def', label: 'DEF', titre: 'Avec la projection orthogonale',
          contenu: `Soit $H$ le projeté orthogonal de l'extrémité de $\\vec{v}$ sur la droite portant $\\vec{u}$. Alors :<br>$$\\vec{u} \\cdot \\vec{v} = \\vec{u} \\cdot \\vec{u'}$$<br>où $\\vec{u'}$ est la projection de $\\vec{v}$ sur $\\vec{u}$. Le produit scalaire est positif si la projection est dans le sens de $\\vec{u}$, négatif sinon.` },
        { type: 'ex', label: 'EX', titre: 'Calcul par coordonnées',
          contenu: `<strong>Énoncé</strong> : $\\vec{u}\\,(3\\,;\\,-2)$ et $\\vec{v}\\,(1\\,;\\,4)$ (repère orthonormé). Calculer $\\vec{u}\\cdot\\vec{v}$.<br><strong>Résolution</strong> : $\\vec{u}\\cdot\\vec{v} = 3\\times 1 + (-2)\\times 4 = 3 - 8 = -5$.` },
      ]
    },
    {
      titre: 'Propriétés et orthogonalité',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Règles de calcul',
          contenu: `Le produit scalaire est <strong>symétrique</strong> et <strong>bilinéaire</strong> :<br>$$\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}$$<br>$$\\vec{u}\\cdot(\\vec{v} + \\vec{w}) = \\vec{u}\\cdot\\vec{v} + \\vec{u}\\cdot\\vec{w}$$<br>$$(k\\vec{u})\\cdot\\vec{v} = k(\\vec{u}\\cdot\\vec{v})$$` },
        { type: 'th', label: 'THM', titre: 'Caractérisation de l\'orthogonalité',
          contenu: `Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> si et seulement si :<br>$$\\vec{u} \\cdot \\vec{v} = 0$$<br>(le vecteur nul est orthogonal à tout vecteur).<br>En coordonnées orthonormées : $\\vec{u}\\perp\\vec{v} \\iff xx' + yy' = 0$.` },
        { type: 'form', label: 'FORM', titre: 'Identités de polarisation',
          contenu: `$$\\vec{u}\\cdot\\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2 - \\|\\vec{u} - \\vec{v}\\|^2\\right)$$<br>$$\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u}\\cdot\\vec{v} + \\|\\vec{v}\\|^2$$` },
        { type: 'ex', label: 'EX', titre: 'Tester l\'orthogonalité',
          contenu: `<strong>Énoncé</strong> : les vecteurs $\\vec{u}\\,(2\\,;\\,3)$ et $\\vec{v}\\,(-3\\,;\\,2)$ sont-ils orthogonaux ?<br><strong>Résolution</strong> : $\\vec{u}\\cdot\\vec{v} = 2\\times(-3) + 3\\times 2 = -6 + 6 = 0$.<br>Oui, ils sont orthogonaux.` },
      ]
    },
    {
      titre: 'Applications aux angles et longueurs',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Cosinus d\'un angle',
          contenu: `À partir de la définition, l'angle $\\theta$ entre $\\vec{u}$ et $\\vec{v}$ (non nuls) vérifie :<br>$$\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\times\\|\\vec{v}\\|}$$<br>Permet de déterminer un angle à partir des coordonnées.` },
        { type: 'th', label: 'THM', titre: 'Théorème d\'Al-Kashi',
          contenu: `Dans un triangle $ABC$, avec $a = BC$, $b = CA$, $c = AB$, et $\\widehat{A}$ l'angle en $A$ :<br>$$a^2 = b^2 + c^2 - 2bc\\cos\\widehat{A}$$<br>C'est la généralisation du théorème de Pythagore (cas $\\widehat{A} = 90°$).` },
        { type: 'meth', label: 'METH', titre: 'Calculer un côté ou un angle avec Al-Kashi',
          contenu: `Pour un <strong>côté</strong> : appliquer directement la formule avec l'angle opposé connu.<br>Pour un <strong>angle</strong> : isoler $\\cos\\widehat{A} = \\dfrac{b^2 + c^2 - a^2}{2bc}$, puis calculer $\\widehat{A}$.` },
        { type: 'ex', label: 'EX', titre: 'Application d\'Al-Kashi',
          contenu: `<strong>Énoncé</strong> : triangle $ABC$, $AB = 5$, $AC = 7$, $\\widehat{A} = 60°$. Calculer $BC$.<br><strong>Résolution</strong> : $BC^2 = 5^2 + 7^2 - 2\\times 5\\times 7\\times\\cos 60°$<br>$= 25 + 49 - 70\\times 0{,}5 = 74 - 35 = 39$.<br>$BC = \\sqrt{39} \\approx 6{,}24$.` },
      ]
    },
    {
      titre: 'Formules de duplication et géométrie',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Formules d\'addition',
          contenu: `Démontrables avec le produit scalaire :<br>$$\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b$$<br>$$\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b$$<br>$$\\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b$$` },
        { type: 'form', label: 'FORM', titre: 'Formules de duplication',
          contenu: `En posant $a = b$ :<br>$$\\cos(2a) = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$$<br>$$\\sin(2a) = 2\\sin a\\cos a$$` },
        { type: 'meth', label: 'METH', titre: 'Déterminer une mesure d\'angle dans une figure',
          contenu: `Pour l'angle entre deux vecteurs définis par des points :<br>1. Calculer les coordonnées des vecteurs.<br>2. Calculer $\\vec{u}\\cdot\\vec{v}$ et les normes.<br>3. En déduire $\\cos\\theta$ puis $\\theta$.` },
        { type: 'ex', label: 'EX', titre: 'Calculer un angle géométrique',
          contenu: `<strong>Énoncé</strong> : $A(1\\,;\\,1)$, $B(4\\,;\\,2)$, $C(2\\,;\\,5)$. Calculer $\\cos\\widehat{BAC}$.<br><strong>Résolution</strong> : $\\vec{AB}\\,(3\\,;\\,1)$, $\\vec{AC}\\,(1\\,;\\,4)$.<br>$\\vec{AB}\\cdot\\vec{AC} = 3 + 4 = 7$, $\\|\\vec{AB}\\| = \\sqrt{10}$, $\\|\\vec{AC}\\| = \\sqrt{17}$.<br>$\\cos\\widehat{BAC} = \\dfrac{7}{\\sqrt{10}\\sqrt{17}} = \\dfrac{7}{\\sqrt{170}} \\approx 0{,}537$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. GÉOMÉTRIE REPÉRÉE
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-geo-rep', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Géométrie repérée', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Vecteurs et colinéarité',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Coordonnées et norme',
          contenu: `Pour $A(x_A\\,;\\,y_A)$ et $B(x_B\\,;\\,y_B)$ :<br>$$\\vec{AB}\\,(x_B - x_A\\,;\\,y_B - y_A)$$<br>$$\\|\\vec{AB}\\| = AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$<br>Milieu de $[AB]$ : $I\\left(\\dfrac{x_A + x_B}{2}\\,;\\,\\dfrac{y_A + y_B}{2}\\right)$.` },
        { type: 'def', label: 'DEF', titre: 'Déterminant et colinéarité',
          contenu: `Le <strong>déterminant</strong> de $\\vec{u}\\,(x\\,;\\,y)$ et $\\vec{v}\\,(x'\\,;\\,y')$ est :<br>$$\\det(\\vec{u}, \\vec{v}) = xy' - x'y$$<br>$\\vec{u}$ et $\\vec{v}$ sont <strong>colinéaires</strong> si et seulement si $\\det(\\vec{u}, \\vec{v}) = 0$.` },
        { type: 'meth', label: 'METH', titre: 'Tester l\'alignement de trois points',
          contenu: `$A$, $B$, $C$ sont alignés ssi $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires, c'est-à-dire $\\det(\\vec{AB}, \\vec{AC}) = 0$.<br><strong>Exemple</strong> : $A(1\\,;\\,2)$, $B(3\\,;\\,5)$, $C(5\\,;\\,8)$.<br>$\\vec{AB}\\,(2\\,;\\,3)$, $\\vec{AC}\\,(4\\,;\\,6)$, $\\det = 2\\times 6 - 4\\times 3 = 0$ : alignés.` },
        { type: 'ex', label: 'EX', titre: 'Distance entre deux points',
          contenu: `<strong>Énoncé</strong> : $A(-1\\,;\\,2)$, $B(3\\,;\\,5)$. Calculer $AB$.<br><strong>Résolution</strong> : $AB = \\sqrt{(3-(-1))^2 + (5-2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.` },
      ]
    },
    {
      titre: 'Équations de droites',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Vecteur directeur',
          contenu: `Un <strong>vecteur directeur</strong> d'une droite $d$ est un vecteur non nul dont la direction est celle de $d$.<br>Si $d$ a pour équation réduite $y = mx + p$, un vecteur directeur est $\\vec{u}\\,(1\\,;\\,m)$.<br>Pour $ax + by + c = 0$, un vecteur directeur est $\\vec{u}\\,(-b\\,;\\,a)$.` },
        { type: 'form', label: 'FORM', titre: 'Équation cartésienne',
          contenu: `Toute droite admet une <strong>équation cartésienne</strong> de la forme :<br>$$ax + by + c = 0 \\quad (a, b)\\neq(0,0)$$<br>Le vecteur $\\vec{n}\\,(a\\,;\\,b)$ est un <strong>vecteur normal</strong> à la droite.<br>Si $b \\neq 0$, on retrouve la forme réduite $y = -\\dfrac{a}{b}x - \\dfrac{c}{b}$, de coefficient directeur $m = -\\dfrac{a}{b}$.` },
        { type: 'meth', label: 'METH', titre: 'Équation d\'une droite passant par deux points',
          contenu: `Pour la droite $(AB)$ : un vecteur directeur est $\\vec{AB}$. Un point $M(x\\,;\\,y)$ est sur $(AB)$ ssi $\\det(\\vec{AM}, \\vec{AB}) = 0$.<br><strong>Exemple</strong> : $A(1\\,;\\,2)$, $B(3\\,;\\,6)$. $\\vec{AB}\\,(2\\,;\\,4)$.<br>$\\det(\\vec{AM}, \\vec{AB}) = (x-1)\\times 4 - (y-2)\\times 2 = 0 \\Rightarrow 2x - y = 0$.` },
        { type: 'ex', label: 'EX', titre: 'Droites parallèles et perpendiculaires',
          contenu: `<strong>Énoncé</strong> : $d_1 : 2x - 3y + 1 = 0$. Donner une parallèle et une perpendiculaire passant par $A(0\\,;\\,1)$.<br><strong>Résolution</strong> : parallèle : même direction $\\Rightarrow 2x - 3y + c = 0$ avec $A$ : $-3 + c = 0$, $c = 3$, soit $2x - 3y + 3 = 0$.<br>Perpendiculaire : $\\vec{n}_1(2\\,;\\,-3)$ devient directeur $\\Rightarrow 3x + 2y + c = 0$, avec $A$ : $2 + c = 0$, soit $3x + 2y - 2 = 0$.` },
      ]
    },
    {
      titre: 'Cercles',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Équation d\'un cercle',
          contenu: `Le cercle de centre $\\Omega(a\\,;\\,b)$ et de rayon $R$ a pour équation :<br>$$(x - a)^2 + (y - b)^2 = R^2$$<br>Un point $M(x\\,;\\,y)$ est sur le cercle ssi $\\Omega M = R$.` },
        { type: 'meth', label: 'METH', titre: 'Identifier un cercle par sa forme développée',
          contenu: `À partir de $x^2 + y^2 + \\alpha x + \\beta y + \\gamma = 0$, on regroupe et on complète les carrés.<br><strong>Exemple</strong> : $x^2 + y^2 - 4x + 6y - 3 = 0$.<br>$(x-2)^2 - 4 + (y+3)^2 - 9 - 3 = 0 \\Rightarrow (x-2)^2 + (y+3)^2 = 16$.<br>Centre $\\Omega(2\\,;\\,-3)$, rayon $R = 4$.` },
        { type: 'th', label: 'THM', titre: 'Cercle de diamètre $[AB]$',
          contenu: `Le cercle de diamètre $[AB]$ est l'ensemble des points $M$ tels que :<br>$$\\vec{MA} \\cdot \\vec{MB} = 0$$<br>(propriété de l'angle droit inscrit dans un demi-cercle.)<br>Cela fournit directement une équation du cercle.` },
        { type: 'ex', label: 'EX', titre: 'Équation à partir du diamètre',
          contenu: `<strong>Énoncé</strong> : cercle de diamètre $[AB]$, $A(1\\,;\\,2)$, $B(5\\,;\\,4)$.<br><strong>Résolution</strong> : centre = milieu $\\Omega(3\\,;\\,3)$. Rayon $R = \\dfrac{AB}{2}$, $AB = \\sqrt{16 + 4} = \\sqrt{20}$, donc $R^2 = 5$.<br>Équation : $(x-3)^2 + (y-3)^2 = 5$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. PROBABILITÉS CONDITIONNELLES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-proba', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Probabilités conditionnelles', ordre: 8, enrich: true,
  sections: [
    {
      titre: 'Probabilité conditionnelle',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Probabilité conditionnelle',
          contenu: `Soit $A$ et $B$ deux événements avec $P(A) \\neq 0$. La <strong>probabilité de $B$ sachant $A$</strong> est :<br>$$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$$<br>C'est la probabilité que $B$ se réalise, sachant que $A$ est réalisé.` },
        { type: 'form', label: 'FORM', titre: 'Probabilité d\'une intersection',
          contenu: `De la définition on tire la formule des probabilités composées :<br>$$P(A \\cap B) = P(A) \\times P_A(B) = P(B) \\times P_B(A)$$<br>Utile pour calculer la probabilité d'une succession d'événements.` },
        { type: 'meth', label: 'METH', titre: 'Calculer une probabilité conditionnelle',
          contenu: `1. Identifier les événements et leurs probabilités.<br>2. Calculer ou repérer $P(A \\cap B)$ et $P(A)$.<br>3. Appliquer $P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}$.` },
        { type: 'ex', label: 'EX', titre: 'Conditionnelle dans un tableau',
          contenu: `<strong>Énoncé</strong> : dans une classe, $60\\%$ de filles, et $30\\%$ des élèves sont des filles qui font de l'allemand. Quelle est la probabilité qu'une fille fasse de l'allemand ?<br><strong>Résolution</strong> : $A$ = « fille », $B$ = « allemand ». $P(A) = 0{,}6$, $P(A\\cap B) = 0{,}3$.<br>$P_A(B) = \\dfrac{0{,}3}{0{,}6} = 0{,}5$, soit $50\\%$.` },
      ]
    },
    {
      titre: 'Arbres pondérés',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Règles des arbres pondérés',
          contenu: `<ul><li>La somme des probabilités des branches issues d'un même nœud vaut $1$.</li><li>La probabilité d'un chemin = <strong>produit</strong> des probabilités des branches du chemin.</li><li>La probabilité d'un événement = <strong>somme</strong> des probabilités des chemins qui y mènent.</li></ul>` },
        { type: 'prop', label: 'PROP', titre: 'Lecture d\'un arbre',
          contenu: `Sur la première branche figurent $P(A)$ et $P(\\overline{A})$ ; sur les branches suivantes figurent les probabilités <strong>conditionnelles</strong> $P_A(B)$, $P_A(\\overline{B})$, etc.<br>Ainsi un chemin $A$ puis $B$ donne $P(A) \\times P_A(B) = P(A\\cap B)$.` },
        { type: 'ex', label: 'EX', titre: 'Calcul sur un arbre',
          contenu: `<strong>Énoncé</strong> : une urne $A$ ($P = 0{,}4$) contient $70\\%$ de boules rouges ; une urne $B$ ($P = 0{,}6$) en contient $20\\%$. On tire une urne au hasard puis une boule. Probabilité de tirer rouge ?<br><strong>Résolution</strong> : $P(R) = 0{,}4\\times 0{,}7 + 0{,}6\\times 0{,}2 = 0{,}28 + 0{,}12 = 0{,}40$.` },
        { type: 'meth', label: 'METH', titre: 'Probabilité « à rebours »',
          contenu: `Pour calculer $P_R(A)$ (cause sachant l'effet), on utilise :<br>$$P_R(A) = \\frac{P(A \\cap R)}{P(R)}$$<br>où $P(R)$ s'obtient par la formule des probabilités totales. C'est l'idée de la formule de Bayes (hors programme stricto sensu mais accessible).` },
      ]
    },
    {
      titre: 'Probabilités totales',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Partition de l\'univers',
          contenu: `Des événements $A_1, A_2, \\dots, A_n$ de probabilités non nulles forment une <strong>partition</strong> de l'univers $\\Omega$ si :<br>ils sont deux à deux incompatibles ($A_i \\cap A_j = \\varnothing$ pour $i\\neq j$) et leur réunion est $\\Omega$.<br>Cas simple : $\\{A, \\overline{A}\\}$.` },
        { type: 'th', label: 'THM', titre: 'Formule des probabilités totales',
          contenu: `Si $A_1, \\dots, A_n$ forment une partition de $\\Omega$, alors pour tout événement $B$ :<br>$$P(B) = \\sum_{i=1}^{n} P(A_i \\cap B) = \\sum_{i=1}^{n} P(A_i)\\,P_{A_i}(B)$$<br>Cas à deux branches : $P(B) = P(A)P_A(B) + P(\\overline{A})P_{\\overline{A}}(B)$.` },
        { type: 'meth', label: 'METH', titre: 'Appliquer la formule des probabilités totales',
          contenu: `1. Choisir une partition adaptée (souvent $\\{A, \\overline{A}\\}$).<br>2. Construire un arbre pondéré.<br>3. Sommer les probabilités des chemins menant à $B$.` },
        { type: 'ex', label: 'EX', titre: 'Test de dépistage',
          contenu: `<strong>Énoncé</strong> : maladie touchant $2\\%$ de la population. Test positif chez $95\\%$ des malades et $3\\%$ des sains. Probabilité d'un test positif ?<br><strong>Résolution</strong> : $M$ = malade, $T$ = positif.<br>$P(T) = 0{,}02\\times 0{,}95 + 0{,}98\\times 0{,}03 = 0{,}019 + 0{,}0294 = 0{,}0484$.` },
      ]
    },
    {
      titre: 'Indépendance',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Événements indépendants',
          contenu: `Deux événements $A$ et $B$ sont <strong>indépendants</strong> si :<br>$$P(A \\cap B) = P(A) \\times P(B)$$<br>Si $P(A) \\neq 0$, cela équivaut à $P_A(B) = P(B)$ : la réalisation de $A$ ne change pas la probabilité de $B$.` },
        { type: 'prop', label: 'PROP', titre: 'Propriété de stabilité',
          contenu: `Si $A$ et $B$ sont indépendants, alors $A$ et $\\overline{B}$, $\\overline{A}$ et $B$, $\\overline{A}$ et $\\overline{B}$ le sont aussi.<br><strong>Attention</strong> : ne pas confondre <strong>indépendants</strong> et <strong>incompatibles</strong> ($A\\cap B = \\varnothing$). Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.` },
        { type: 'meth', label: 'METH', titre: 'Tester l\'indépendance',
          contenu: `1. Calculer $P(A)$, $P(B)$ et $P(A\\cap B)$.<br>2. Comparer $P(A\\cap B)$ et $P(A)\\times P(B)$.<br>3. Égalité $\\Rightarrow$ indépendants ; sinon, dépendants.` },
        { type: 'ex', label: 'EX', titre: 'Étude d\'indépendance',
          contenu: `<strong>Énoncé</strong> : $P(A) = 0{,}5$, $P(B) = 0{,}4$, $P(A\\cap B) = 0{,}2$. $A$ et $B$ sont-ils indépendants ?<br><strong>Résolution</strong> : $P(A)\\times P(B) = 0{,}5\\times 0{,}4 = 0{,}2 = P(A\\cap B)$.<br>Oui, $A$ et $B$ sont indépendants.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. VARIABLES ALÉATOIRES
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-1e-var-alea', filiere: '1ere-gen', matiere: 'ma',
  titre: 'Variables aléatoires', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Variable aléatoire et loi',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Variable aléatoire',
          contenu: `Une <strong>variable aléatoire</strong> (réelle) $X$ est une fonction qui, à chaque issue de l'univers $\\Omega$, associe un nombre réel.<br>L'événement « $X = k$ » est l'ensemble des issues dont l'image par $X$ vaut $k$.` },
        { type: 'def', label: 'DEF', titre: 'Loi de probabilité',
          contenu: `La <strong>loi de probabilité</strong> de $X$ associe à chaque valeur $x_i$ prise par $X$ la probabilité $p_i = P(X = x_i)$.<br>Elle se présente sous forme de tableau, et vérifie :<br>$$\\sum_i p_i = 1, \\qquad 0 \\leq p_i \\leq 1$$` },
        { type: 'meth', label: 'METH', titre: 'Établir la loi d\'une variable aléatoire',
          contenu: `1. Déterminer toutes les valeurs possibles de $X$.<br>2. Calculer $P(X = x_i)$ pour chacune (souvent via un arbre ou un dénombrement).<br>3. Vérifier que la somme des probabilités vaut $1$.` },
        { type: 'ex', label: 'EX', titre: 'Loi pour un jeu',
          contenu: `<strong>Énoncé</strong> : on lance deux pièces. $X$ = nombre de « Pile ». Donner la loi de $X$.<br><strong>Résolution</strong> : issues équiprobables $PP, PF, FP, FF$.<br>$P(X=0) = \\dfrac{1}{4}$, $P(X=1) = \\dfrac{2}{4} = \\dfrac{1}{2}$, $P(X=2) = \\dfrac{1}{4}$.` },
      ]
    },
    {
      titre: 'Espérance',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Espérance',
          contenu: `L'<strong>espérance</strong> de $X$ prenant les valeurs $x_1, \\dots, x_n$ avec probabilités $p_1, \\dots, p_n$ est :<br>$$E(X) = \\sum_{i=1}^{n} p_i\\,x_i = p_1 x_1 + \\dots + p_n x_n$$<br>C'est la <strong>moyenne</strong> des valeurs pondérées par leurs probabilités : la valeur « espérée » en moyenne sur un grand nombre de répétitions.` },
        { type: 'form', label: 'FORM', titre: 'Linéarité de l\'espérance',
          contenu: `Pour tous réels $a$ et $b$ :<br>$$E(aX + b) = a\\,E(X) + b$$<br>Cette propriété permet de calculer rapidement l'espérance d'une transformation affine de $X$.` },
        { type: 'meth', label: 'METH', titre: 'Étudier l\'équité d\'un jeu',
          contenu: `Un jeu est <strong>équitable</strong> si l'espérance du gain algébrique est nulle : $E(G) = 0$.<br>Si $E(G) > 0$ le jeu est favorable au joueur, si $E(G) < 0$ il est défavorable.` },
        { type: 'ex', label: 'EX', titre: 'Espérance de gain',
          contenu: `<strong>Énoncé</strong> : un jeu coûte $2$ €. On gagne $5$ € avec probabilité $0{,}3$, sinon rien. Calculer l'espérance du gain net.<br><strong>Résolution</strong> : gain net $G$ : $+3$ avec $p=0{,}3$, $-2$ avec $p=0{,}7$.<br>$E(G) = 0{,}3\\times 3 + 0{,}7\\times(-2) = 0{,}9 - 1{,}4 = -0{,}5$ € : jeu défavorable.` },
      ]
    },
    {
      titre: 'Variance et écart-type',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Variance',
          contenu: `La <strong>variance</strong> mesure la dispersion de $X$ autour de son espérance $\\mu = E(X)$ :<br>$$V(X) = \\sum_{i} p_i\\,(x_i - \\mu)^2 = E\\big((X - \\mu)^2\\big)$$<br>La variance est toujours positive ou nulle.` },
        { type: 'form', label: 'FORM', titre: 'Formule de König-Huygens',
          contenu: `Formule de calcul pratique :<br>$$V(X) = E(X^2) - \\big(E(X)\\big)^2$$<br>où $E(X^2) = \\sum_i p_i\\,x_i^2$.<br>Transformation affine : $V(aX + b) = a^2\\,V(X)$.` },
        { type: 'def', label: 'DEF', titre: 'Écart-type',
          contenu: `L'<strong>écart-type</strong> de $X$ est :<br>$$\\sigma(X) = \\sqrt{V(X)}$$<br>Il s'exprime dans la même unité que $X$ et mesure la dispersion « moyenne » autour de l'espérance.` },
        { type: 'ex', label: 'EX', titre: 'Calcul de variance',
          contenu: `<strong>Énoncé</strong> : $X$ vaut $0$ ($p=0{,}5$), $2$ ($p=0{,}3$), $4$ ($p=0{,}2$). Calculer $V(X)$ et $\\sigma(X)$.<br><strong>Résolution</strong> : $E(X) = 0 + 0{,}6 + 0{,}8 = 1{,}4$.<br>$E(X^2) = 0 + 0{,}3\\times 4 + 0{,}2\\times 16 = 1{,}2 + 3{,}2 = 4{,}4$.<br>$V(X) = 4{,}4 - 1{,}4^2 = 4{,}4 - 1{,}96 = 2{,}44$, $\\sigma(X) = \\sqrt{2{,}44} \\approx 1{,}56$.` },
      ]
    },
    {
      titre: 'Échantillon et simulation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Échantillon de taille $n$',
          contenu: `Un <strong>échantillon de taille $n$</strong> de la loi de $X$ est la donnée de $n$ variables aléatoires $X_1, \\dots, X_n$ indépendantes et de même loi que $X$ (répétition de la même expérience).<br>On note souvent $S_n = X_1 + \\dots + X_n$ la somme.` },
        { type: 'form', label: 'FORM', titre: 'Espérance et variance d\'une somme',
          contenu: `Pour des variables indépendantes de même loi que $X$ :<br>$$E(S_n) = n\\,E(X) \\qquad V(S_n) = n\\,V(X)$$<br>Pour la moyenne $M_n = \\dfrac{S_n}{n}$ : $E(M_n) = E(X)$ et $V(M_n) = \\dfrac{V(X)}{n}$.` },
        { type: 'meth', label: 'METH', titre: 'Interpréter la concentration de la moyenne',
          contenu: `Comme $V(M_n) = \\dfrac{V(X)}{n}$ tend vers $0$ quand $n$ grandit, la moyenne d'un grand échantillon se <strong>concentre</strong> autour de $E(X)$.<br>C'est l'idée intuitive de la loi des grands nombres : la moyenne observée se rapproche de l'espérance théorique.` },
        { type: 'ex', label: 'EX', titre: 'Somme de dés',
          contenu: `<strong>Énoncé</strong> : $X$ = résultat d'un dé équilibré, $E(X) = 3{,}5$, $V(X) = \\dfrac{35}{12}$. On lance $10$ dés. Espérance et variance de la somme $S_{10}$ ?<br><strong>Résolution</strong> : $E(S_{10}) = 10\\times 3{,}5 = 35$ ; $V(S_{10}) = 10\\times\\dfrac{35}{12} = \\dfrac{350}{12} \\approx 29{,}2$.` },
      ]
    },
  ]
},

]
