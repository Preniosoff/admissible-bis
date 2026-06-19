// Terminale Générale — Mathématiques & Physique-Chimie
// Programme officiel MEN 2020

export const DATA = [

// ══════════════════════════════════════════════════════════════
// MATHS TERMINALE GÉNÉRALE
// ══════════════════════════════════════════════════════════════

{
  id: 'ma-tg-lim', filiere: 'term-gen', matiere: 'ma',
  titre: 'Limites de fonctions et continuité', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Limite en l\'infini',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Limite en $+\\infty$ (intuition $\\varepsilon$-$\\delta$)',
          contenu: `$\\displaystyle\\lim_{x \\to +\\infty} f(x) = L$ signifie que $f(x)$ peut être rendu aussi proche de $L$ que l'on veut en prenant $x$ suffisamment grand.<br><strong>Formellement</strong> : pour tout $\\varepsilon > 0$, il existe $A$ tel que $x > A \\Rightarrow |f(x) - L| < \\varepsilon$.<br>Si $L \\in \\mathbb{R}$ : limite finie. Si $L = \\pm\\infty$ : limite infinie.` },
        { type: 'def', label: 'DEF', titre: 'Limite en $-\\infty$',
          contenu: `$\\displaystyle\\lim_{x \\to -\\infty} f(x) = L$ signifie que pour tout $\\varepsilon > 0$, il existe $A$ tel que $x < A \\Rightarrow |f(x) - L| < \\varepsilon$.<br><strong>Exemples clés</strong> :<br>$\\displaystyle\\lim_{x \\to +\\infty} \\frac{1}{x} = 0$, $\\displaystyle\\lim_{x \\to +\\infty} x^n = +\\infty$ ($n \\ge 1$), $\\displaystyle\\lim_{x \\to -\\infty} e^x = 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Croissances comparées en $+\\infty$',
          contenu: `Pour tout $n \\ge 1$ :<br>$$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0 \\qquad \\lim_{x \\to +\\infty} \\frac{x^n}{e^x} = 0$$<br>Autrement dit : <strong>l'exponentielle l'emporte sur tout polynôme</strong>, qui l'emporte sur le logarithme.<br>En $0^+$ : $\\displaystyle\\lim_{x \\to 0^+} x^n \\ln x = 0$.` },
        { type: 'meth', label: 'METH', titre: 'Déterminer la limite en $\\pm\\infty$ d\'une fraction rationnelle',
          contenu: `<strong>Méthode</strong> : factoriser par le monôme de plus haut degré au numérateur et au dénominateur.<br>Exemple : $\\dfrac{3x^2 - x + 1}{2x^2 + 5} = \\dfrac{x^2(3 - 1/x + 1/x^2)}{x^2(2 + 5/x^2)} \\xrightarrow[x\\to+\\infty]{} \\dfrac{3}{2}$.<br>Si deg(num) $>$ deg(dén) : limite infinie. Si deg(num) $<$ deg(dén) : limite nulle.` },
      ]
    },
    {
      titre: 'Limite en un point',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Limite en un point $a$',
          contenu: `$\\displaystyle\\lim_{x \\to a} f(x) = L$ signifie que $f(x)$ se rapproche de $L$ quand $x$ tend vers $a$ (sans forcément que $f$ soit définie en $a$).<br><strong>Limite à droite</strong> : $\\displaystyle\\lim_{x \\to a^+} f(x)$ (on approche par valeurs $> a$).<br><strong>Limite à gauche</strong> : $\\displaystyle\\lim_{x \\to a^-} f(x)$ (on approche par valeurs $< a$).<br>La limite bilatérale existe ssi les deux limites unilatérales existent et sont égales.` },
        { type: 'def', label: 'DEF', titre: 'Limite infinie en un point — asymptote verticale',
          contenu: `Si $\\displaystyle\\lim_{x \\to a} f(x) = \\pm\\infty$, la droite $x = a$ est une <strong>asymptote verticale</strong> à la courbe.<br>Exemple : $\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$, donc $x = 0$ est asymptote verticale de $\\ln$.<br>$\\displaystyle\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$ et $\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$.` },
        { type: 'prop', label: 'PROP', titre: 'Opérations sur les limites',
          contenu: `Si $\\lim f = L$ et $\\lim g = M$ (finis ou infinis) :<br><strong>Somme</strong> : $\\lim(f+g) = L+M$ (sauf FI $\\infty - \\infty$).<br><strong>Produit</strong> : $\\lim(f \\cdot g) = LM$ (sauf FI $0 \\times \\infty$).<br><strong>Quotient</strong> : $\\lim(f/g) = L/M$ si $M \\ne 0$ (sauf FI $\\infty/\\infty$ et $0/0$).<br>Les <strong>formes indéterminées</strong> (FI) nécessitent un traitement particulier.` },
        { type: 'meth', label: 'METH', titre: 'Lever une forme indéterminée $0/0$',
          contenu: `<strong>Stratégie</strong> : factoriser pour simplifier.<br>Exemple : $\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$.<br>Autre forme $\\infty - \\infty$ : mettre au même dénominateur ou factoriser par le terme dominant.<br>Forme $0 \\cdot \\infty$ : écrire $f \\cdot g = \\dfrac{f}{1/g}$ pour se ramener à $0/0$ ou $\\infty/\\infty$.` },
      ]
    },
    {
      titre: 'Théorèmes fondamentaux',
      cartes: [
        { type: 'thm', label: 'THM', titre: 'Théorème des gendarmes',
          contenu: `Si sur un voisinage de $a$ (ou en $\\pm\\infty$) on a $g(x) \\le f(x) \\le h(x)$, et si $\\displaystyle\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, alors $\\displaystyle\\lim_{x \\to a} f(x) = L$.<br><strong>Application typique</strong> : montrer que $\\displaystyle\\lim_{x \\to +\\infty} \\frac{\\sin x}{x} = 0$ car $-\\frac{1}{x} \\le \\frac{\\sin x}{x} \\le \\frac{1}{x}$.` },
        { type: 'thm', label: 'THM', titre: 'Théorème des valeurs intermédiaires (TVI)',
          contenu: `Soit $f$ continue sur $[a, b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un $c \\in [a, b]$ tel que $f(c) = k$.<br><strong>Corollaire</strong> : si de plus $f$ est <strong>strictement monotone</strong>, il existe un unique $c$ tel que $f(c) = k$.<br>Application : montrer l'existence de solutions à des équations.` },
        { type: 'thm', label: 'THM', titre: 'Théorème de Rolle',
          contenu: `Soit $f$ continue sur $[a,b]$, dérivable sur $]a,b[$, avec $f(a) = f(b)$.<br>Alors il existe $c \\in ]a,b[$ tel que $f'(c) = 0$.<br><strong>Interprétation</strong> : la courbe admet une tangente horizontale entre $a$ et $b$.<br>Conséquence : si $f'$ ne s'annule pas sur $]a,b[$, alors $f(a) \\ne f(b)$ (injection utile pour unicité).` },
        { type: 'meth', label: 'METH', titre: 'Appliquer le TVI pour localiser une racine',
          contenu: `<strong>Étapes</strong> :<br>1. Vérifier que $f$ est continue sur $[a, b]$.<br>2. Calculer $f(a)$ et $f(b)$, vérifier qu'ils sont de <strong>signes opposés</strong>.<br>3. Conclure : il existe $c \\in ]a,b[$ tel que $f(c) = 0$.<br>4. Si $f$ est strictement monotone : unicité de $c$.<br>Exemple : $f(x) = x^3 - 2$, $f(1) = -1 < 0$, $f(2) = 6 > 0$ donc $\\exists c \\in ]1,2[$ avec $f(c) = 0$.` },
      ]
    },
    {
      titre: 'Continuité et prolongement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Continuité en un point',
          contenu: `$f$ est <strong>continue en $a$</strong> si $\\displaystyle\\lim_{x \\to a} f(x) = f(a)$, ce qui suppose :<br>1. $f$ est définie en $a$.<br>2. La limite de $f$ en $a$ existe (et est finie).<br>3. Cette limite est égale à $f(a)$.<br>$f$ est continue sur un intervalle si elle est continue en chaque point de cet intervalle.` },
        { type: 'prop', label: 'PROP', titre: 'Continuité et opérations',
          contenu: `Si $f$ et $g$ sont continues en $a$, alors $f+g$, $f \\cdot g$, $f/g$ (si $g(a) \\ne 0$) et $g \\circ f$ sont continues en $a$.<br>Les fonctions <strong>usuelles</strong> (polynômes, rationnelles, $\\exp$, $\\ln$, $\\ sin$, $\\cos$, $\\sqrt{\\phantom{x}}$, valeur absolue) sont continues sur leur domaine de définition.` },
        { type: 'def', label: 'DEF', titre: 'Prolongement par continuité',
          contenu: `Si $f$ est définie sur $D \\setminus \\{a\\}$ et si $\\displaystyle\\lim_{x \\to a} f(x) = L \\in \\mathbb{R}$, on peut définir $\\tilde{f}$ sur $D$ en posant $\\tilde{f}(a) = L$.<br>$\\tilde{f}$ est alors continue en $a$ : c'est le <strong>prolongement par continuité</strong> de $f$ en $a$.<br>Exemple : $f(x) = \\dfrac{\\sin x}{x}$ non définie en $0$, $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, donc on pose $\\tilde{f}(0) = 1$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : continuité et limites',
          contenu: `<strong>Énoncé</strong> : soit $f(x) = \\dfrac{e^x - 1}{x}$ pour $x \\ne 0$.<br>1. Calculer $\\displaystyle\\lim_{x \\to 0} f(x)$ (utiliser la définition de la dérivée de $e^x$ en $0$).<br>2. En déduire un prolongement par continuité de $f$ en $0$.<br><strong>Réponse</strong> : $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1}{x} = (e^x)'|_{x=0} = 1$. On pose $\\tilde{f}(0) = 1$.` },
      ]
    },
  ]
},

{
  id: 'ma-tg-integ', filiere: 'term-gen', matiere: 'ma',
  titre: 'Intégration', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Primitives',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Primitive d\'une fonction',
          contenu: `$F$ est une <strong>primitive</strong> de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$.<br>Si $F$ est une primitive de $f$, toutes les primitives de $f$ sont de la forme $F + C$, avec $C \\in \\mathbb{R}$.<br><strong>Existence</strong> : toute fonction continue sur un intervalle admet des primitives.` },
        { type: 'form', label: 'FORM', titre: 'Tableau des primitives usuelles',
          contenu: `$$\\begin{array}{c|c} f(x) & F(x) \\\\ \\hline x^n\\ (n\\ne-1) & \\dfrac{x^{n+1}}{n+1} \\\\ \\dfrac{1}{x} & \\ln|x| \\\\ e^x & e^x \\\\ \\cos x & \\sin x \\\\ \\sin x & -\\cos x \\\\ \\dfrac{1}{1+x^2} & \\arctan x \\\\ \\dfrac{1}{\\sqrt{x}} & 2\\sqrt{x} \\end{array}$$` },
        { type: 'form', label: 'FORM', titre: 'Primitives de fonctions composées',
          contenu: `Formes usuelles à reconnaître :<br>$[u^{n+1}/(n+1)]' = u' \\cdot u^n$<br>$[e^u]' = u' e^u$<br>$[\\ln|u|]' = u'/u$<br>$[\\sin u]' = u' \\cos u$, $[-\\cos u]' = u' \\sin u$<br>Exemple : primitive de $\\dfrac{2x}{x^2+1}$ est $\\ln(x^2+1)$ car $(x^2+1)' = 2x$.` },
        { type: 'meth', label: 'METH', titre: 'Trouver la primitive vérifiant une condition initiale',
          contenu: `<strong>Méthode</strong> : trouver $F$ primitive de $f$, puis déterminer $C$ via la condition.<br>Exemple : trouver $F$ primitive de $f(x) = 3x^2 - 2$ telle que $F(1) = 0$.<br>$F(x) = x^3 - 2x + C$. Condition : $F(1) = 1 - 2 + C = 0 \\Rightarrow C = 1$.<br>Donc $F(x) = x^3 - 2x + 1$.` },
      ]
    },
    {
      titre: 'Intégrale de Riemann',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Définition de l\'intégrale',
          contenu: `Soit $f$ continue sur $[a,b]$ et $F$ une primitive de $f$. L'<strong>intégrale de Riemann</strong> est :<br>$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$<br>Cette valeur est indépendante du choix de la primitive.<br>Lien avec les sommes de Riemann : $\\displaystyle\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} \\sum_{k=0}^{n-1} f(x_k) \\cdot \\frac{b-a}{n}$.` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés de l\'intégrale',
          contenu: `<strong>Linéarité</strong> : $\\displaystyle\\int_a^b (\\lambda f + \\mu g) = \\lambda \\int_a^b f + \\mu \\int_a^b g$.<br><strong>Relation de Chasles</strong> : $\\displaystyle\\int_a^c f = \\int_a^b f + \\int_b^c f$ pour tout $b \\in \\mathbb{R}$.<br><strong>Positivité</strong> : si $f \\ge 0$ sur $[a,b]$, alors $\\displaystyle\\int_a^b f \\ge 0$.<br><strong>Croissance</strong> : si $f \\le g$ sur $[a,b]$, alors $\\displaystyle\\int_a^b f \\le \\int_a^b g$.` },
        { type: 'prop', label: 'PROP', titre: 'Interprétation géométrique',
          contenu: `Si $f \\ge 0$ sur $[a,b]$, $\\displaystyle\\int_a^b f(x)\\,dx$ est l'<strong>aire</strong> sous la courbe (en unités d'aire).<br>En général, c'est une <strong>aire algébrique</strong> : les zones sous l'axe comptent négativement.<br>Aire totale entre la courbe et l'axe des abscisses :<br>$$A = \\int_a^b |f(x)|\\,dx$$` },
        { type: 'def', label: 'DEF', titre: 'Valeur moyenne d\'une fonction',
          contenu: `La <strong>valeur moyenne</strong> de $f$ sur $[a,b]$ est :<br>$$\\bar{f} = \\frac{1}{b-a} \\int_a^b f(x)\\,dx$$<br>Interprétation : c'est la hauteur du rectangle de base $[a,b]$ ayant la même aire que l'intégrale.<br>Exemple : valeur moyenne de $\\cos$ sur $[0, \\pi/2]$ : $\\dfrac{1}{\\pi/2}\\int_0^{\\pi/2} \\cos x\\,dx = \\dfrac{2}{\\pi}$.` },
      ]
    },
    {
      titre: 'Techniques d\'intégration',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Intégration par parties (IPP)',
          contenu: `Si $u$ et $v'$ sont continues sur $[a,b]$ :<br>$$\\int_a^b u(x)\\,v'(x)\\,dx = \\Big[u(x)\\,v(x)\\Big]_a^b - \\int_a^b u'(x)\\,v(x)\\,dx$$<br><strong>Règle ALPES</strong> pour choisir $u$ : Algèbre $>$ Logarithme $>$ Puissance $>$ Exponentielle $>$ Sinus/Cosinus.<br>Exemple : $\\displaystyle\\int_0^1 x e^x\\,dx = [xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - [e^x]_0^1 = e - (e-1) = 1$.` },
        { type: 'meth', label: 'METH', titre: 'Changement de variable',
          contenu: `Pour $\\displaystyle\\int_a^b f(g(x))\\,g'(x)\\,dx$, poser $t = g(x)$ :<br>$dt = g'(x)\\,dx$, changer les bornes : $x=a \\Rightarrow t=g(a)$, $x=b \\Rightarrow t=g(b)$.<br>$$\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(t)\\,dt$$<br>Exemple : $\\displaystyle\\int_0^1 2x\\sqrt{1+x^2}\\,dx$. Poser $t = 1+x^2$, $dt = 2x\\,dx$. Bornes : $1 \\to 2$. Résultat : $\\displaystyle\\int_1^2 \\sqrt{t}\\,dt = \\left[\\frac{2}{3}t^{3/2}\\right]_1^2 = \\frac{2}{3}(2\\sqrt{2}-1)$.` },
        { type: 'meth', label: 'METH', titre: 'Calcul d\'une intégrale : méthode générale',
          contenu: `<strong>Étape 1</strong> : identifier si la fonction est une dérivée d'une fonction composée (forme $u'/u$, $u'e^u$, etc.).<br><strong>Étape 2</strong> : si oui, écrire directement la primitive.<br><strong>Étape 3</strong> : si non, tenter IPP ou changement de variable.<br><strong>Étape 4</strong> : calculer $[F]_a^b = F(b) - F(a)$.<br><strong>Vérification</strong> : les unités, la cohérence du signe.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : aire entre deux courbes',
          contenu: `<strong>Énoncé</strong> : calculer l'aire entre $f(x) = x^2$ et $g(x) = x$ sur $[0,1]$.<br><strong>Solution</strong> : sur $[0,1]$, $g(x) \\ge f(x)$ car $x \\ge x^2$.<br>$$A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\text{ u.a.}$$` },
      ]
    },
    {
      titre: 'Fonction primitive et théorème fondamental',
      cartes: [
        { type: 'thm', label: 'THM', titre: 'Théorème fondamental de l\'analyse',
          contenu: `Soit $f$ continue sur $[a,b]$. La fonction $F$ définie par $F(x) = \\displaystyle\\int_a^x f(t)\\,dt$ est l'unique primitive de $f$ sur $[a,b]$ qui s'annule en $a$.<br>En particulier : $F'(x) = f(x)$ pour tout $x \\in [a,b]$.<br>Ce théorème établit le lien fondamental entre dérivation et intégration.` },
        { type: 'prop', label: 'PROP', titre: 'Inégalité de la moyenne',
          contenu: `Si $m \\le f(x) \\le M$ sur $[a,b]$ (avec $a < b$), alors :<br>$$m(b-a) \\le \\int_a^b f(x)\\,dx \\le M(b-a)$$<br>En particulier : $\\left|\\displaystyle\\int_a^b f(x)\\,dx\\right| \\le \\int_a^b |f(x)|\\,dx \\le M(b-a)$.<br>Utile pour encadrer une intégrale difficile à calculer exactement.` },
        { type: 'meth', label: 'METH', titre: 'Calculer une intégrale avec IPP — exemple $\\ln$',
          contenu: `Calculer $\\displaystyle\\int_1^e \\ln x\\,dx$.<br>Poser $u = \\ln x$, $v' = 1$, donc $u' = 1/x$, $v = x$.<br>$\\displaystyle\\int_1^e \\ln x\\,dx = [x\\ln x]_1^e - \\int_1^e \\frac{x}{x}\\,dx = e \\cdot 1 - 1 \\cdot 0 - [x]_1^e = e - (e - 1) = 1$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : valeur moyenne et IPP',
          contenu: `<strong>Énoncé</strong> : calculer la valeur moyenne de $f(x) = x\\sin x$ sur $[0, \\pi]$.<br>$\\bar{f} = \\dfrac{1}{\\pi}\\displaystyle\\int_0^\\pi x\\sin x\\,dx$. IPP : $u = x$, $v' = \\sin x$, $u' = 1$, $v = -\\cos x$.<br>$\\displaystyle\\int_0^\\pi x\\sin x\\,dx = [-x\\cos x]_0^\\pi + \\int_0^\\pi \\cos x\\,dx = \\pi + [\\sin x]_0^\\pi = \\pi$.<br>Donc $\\bar{f} = 1$.` },
      ]
    },
  ]
},

{
  id: 'ma-tg-log', filiere: 'term-gen', matiere: 'ma',
  titre: 'Logarithme naturel et ln', ordre: 3, enrich: true,
  sections: [
    {
      titre: 'Définition et premières propriétés',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Définition du logarithme naturel',
          contenu: `Le <strong>logarithme naturel</strong> est défini par :<br>$$\\ln x = \\int_1^x \\frac{1}{t}\\,dt \\quad (x > 0)$$<br>C'est l'unique primitive de $t \\mapsto 1/t$ qui s'annule en $1$.<br>Propriétés immédiates : $\\ln 1 = 0$, $\\ln e = 1$, domaine $= ]0, +\\infty[$, dérivée $= 1/x > 0$ donc $\\ln$ est <strong>strictement croissante</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés algébriques',
          contenu: `Pour tous $a, b > 0$ et $n \\in \\mathbb{Z}$ :<br>$$\\ln(ab) = \\ln a + \\ln b$$<br>$$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$$<br>$$\\ln(a^n) = n\\ln a$$<br>En particulier : $\\ln(1/a) = -\\ln a$, $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln a$.` },
        { type: 'form', label: 'FORM', titre: 'Dérivée de $\\ln u$',
          contenu: `Si $u$ est dérivable et $u > 0$ :<br>$$(\\ln u)' = \\frac{u'}{u}$$<br>Exemples :<br>$(\\ln(x^2+1))' = \\dfrac{2x}{x^2+1}$<br>$(\\ln|\\sin x|)' = \\dfrac{\\cos x}{\\sin x} = \\cot x$<br>$(\\ln(ax+b))' = \\dfrac{a}{ax+b}$<br>Cas particulier : $(\\ln|x|)' = \\dfrac{1}{x}$ pour $x \\ne 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Limites aux bornes du domaine',
          contenu: `$$\\lim_{x \\to 0^+} \\ln x = -\\infty \\qquad \\lim_{x \\to +\\infty} \\ln x = +\\infty$$<br>Croissances comparées :<br>$$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0 \\qquad \\lim_{x \\to 0^+} x\\ln x = 0$$<br>Limite fondamentale : $\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$.` },
      ]
    },
    {
      titre: 'Étude de la fonction $\\ln$',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Tableau de variations de $\\ln$',
          contenu: `$f(x) = \\ln x$ sur $]0, +\\infty[$.<br>$f'(x) = 1/x > 0$ : $f$ est <strong>strictement croissante</strong>.<br>$f''(x) = -1/x^2 < 0$ : $f$ est <strong>concave</strong>.<br>$$\\begin{array}{c|ccc} x & 0^+ & & +\\infty \\\\ \\hline f'(x) & & + & \\\\ \\hline f(x) & -\\infty & \\nearrow & +\\infty \\end{array}$$<br>Passage par $(1, 0)$ et $(e, 1)$.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre $\\ln(f(x)) \\le \\ln(g(x))$',
          contenu: `Puisque $\\ln$ est <strong>strictement croissante</strong> :<br>$\\ln(f(x)) \\le \\ln(g(x)) \\Leftrightarrow f(x) \\le g(x)$ (sous réserve que $f(x) > 0$ et $g(x) > 0$).<br>Méthode : 1. Déterminer le domaine où $f > 0$ et $g > 0$. 2. Résoudre l'inéquation algébrique. 3. Intersecter avec le domaine.<br>Exemple : $\\ln(2x-1) < \\ln(x+3) \\Leftrightarrow \\begin{cases} 2x-1 > 0 \\\\ x+3 > 0 \\\\ 2x-1 < x+3 \\end{cases} \\Rightarrow x \\in ]1/2, 4[$.` },
        { type: 'meth', label: 'METH', titre: 'Étude de $f(x) = x \\ln x$',
          contenu: `Domaine : $]0, +\\infty[$. $f'(x) = \\ln x + x \\cdot \\dfrac{1}{x} = \\ln x + 1$.<br>$f'(x) = 0 \\Leftrightarrow \\ln x = -1 \\Leftrightarrow x = e^{-1} = 1/e$.<br>Minimum en $x = 1/e$ : $f(1/e) = \\dfrac{1}{e} \\cdot (-1) = -\\dfrac{1}{e}$.<br>$\\displaystyle\\lim_{x \\to 0^+} x\\ln x = 0$ (croissances comparées). Donc $f$ se prolonge par $\\tilde{f}(0) = 0$.` },
        { type: 'def', label: 'DEF', titre: 'Logarithme décimal et changement de base',
          contenu: `Le <strong>logarithme décimal</strong> est $\\log_{10} x = \\dfrac{\\ln x}{\\ln 10}$.<br>Plus généralement, pour $a > 0$, $a \\ne 1$ : $\\log_a x = \\dfrac{\\ln x}{\\ln a}$.<br>Lien $\\ln$ et $\\ exp$ : $\\ln$ et $\\ exp$ sont des bijections réciproques.<br>$\\ln(e^x) = x$ pour tout $x \\in \\mathbb{R}$, $e^{\\ln x} = x$ pour tout $x > 0$.` },
      ]
    },
    {
      titre: 'Équations et inéquations',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Résoudre $e^{f(x)} = k$',
          contenu: `$e^{f(x)} = k$ avec $k > 0 \\Leftrightarrow f(x) = \\ln k$.<br>Si $k \\le 0$ : pas de solution ($e^{f(x)} > 0$ toujours).<br>Exemple : $e^{2x-1} = 5 \\Leftrightarrow 2x - 1 = \\ln 5 \\Leftrightarrow x = \\dfrac{1 + \\ln 5}{2}$.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre $\\ln(f(x)) = k$',
          contenu: `$\\ln(f(x)) = k \\Leftrightarrow \\begin{cases} f(x) > 0 \\\\ f(x) = e^k \\end{cases}$.<br>Exemple : $\\ln(x^2 - 3) = 0 \\Leftrightarrow x^2 - 3 = e^0 = 1 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$.<br>Vérification du domaine : $x^2 - 3 > 0 \\Leftrightarrow x < -\\sqrt{3}$ ou $x > \\sqrt{3}$. Les deux solutions sont valides.` },
        { type: 'meth', label: 'METH', titre: 'Comparer $\\ln$ et polynômes',
          contenu: `Grâce aux croissances comparées, pour montrer qu'une inéquation est vérifiée au voisinage de $+\\infty$ :<br>$\\ln x \\ll x^\\alpha \\ll e^x$ pour tout $\\alpha > 0$.<br>Exemple : $\\ln x < x$ pour $x > 0$ (vérifiable : $f(x) = x - \\ln x$, $f'(x) = 1 - 1/x > 0$ pour $x > 1$, $f(1) = 1 > 0$).` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : tableau de variations avec $\\ln$',
          contenu: `<strong>Étudier</strong> $f(x) = \\dfrac{\\ln x}{x}$ sur $]0, +\\infty[$.<br>$f'(x) = \\dfrac{1/x \\cdot x - \\ln x}{x^2} = \\dfrac{1 - \\ln x}{x^2}$.<br>$f'(x) > 0 \\Leftrightarrow \\ln x < 1 \\Leftrightarrow x < e$.<br>Maximum en $x = e$ : $f(e) = 1/e$.<br>$\\displaystyle\\lim_{x \\to 0^+} f(x) = -\\infty$, $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$.` },
      ]
    },
    {
      titre: 'Applications à l\'exponentielle',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Propriétés de la fonction exponentielle',
          contenu: `$\\exp$ est la réciproque de $\\ln$ : $e^{\\ln x} = x$ ($x > 0$), $\\ln(e^x) = x$ ($x \\in \\mathbb{R}$).<br>$(e^x)' = e^x$. Plus généralement : $(e^{u(x)})' = u'(x)\\,e^{u(x)}$.<br>$e^a \\cdot e^b = e^{a+b}$, $e^{a-b} = e^a/e^b$, $(e^a)^n = e^{na}$.<br>$e^x > 0$ pour tout $x$, $e^x > x$ pour tout $x$.` },
        { type: 'form', label: 'FORM', titre: 'Dérivées mêlant $\\exp$ et $\\ln$',
          contenu: `Fonctions puissances : pour $a \\in \\mathbb{R}$, $x^a = e^{a\\ln x}$.<br>$(x^a)' = a x^{a-1}$ pour $x > 0$.<br>$(a^x)' = a^x \\ln a$ pour $a > 0$, $a \\ne 1$.<br>Exemple : $(2^x)' = 2^x \\ln 2$. Primitive : $\\displaystyle\\int 2^x\\,dx = \\dfrac{2^x}{\\ln 2} + C$.` },
        { type: 'meth', label: 'METH', titre: 'Étude de $f(x) = e^{-x^2}$ (courbe de Gauss)',
          contenu: `$f'(x) = -2x\\,e^{-x^2}$. Signe de $f'$ : même signe que $-x$.<br>Maximum en $x = 0$ : $f(0) = 1$. $f$ est paire (symétrie $Oy$).<br>$\\displaystyle\\lim_{x \\to \\pm\\infty} f(x) = 0$ (asymptote $y=0$).<br>$f''(x) = (4x^2-2)e^{-x^2}$ : points d'inflexion en $x = \\pm 1/\\sqrt{2}$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : équation mêlant $\\ln$ et $\\exp$',
          contenu: `<strong>Résoudre</strong> $e^x - 2e^{-x} = 1$. Poser $X = e^x > 0$.<br>$X - 2/X = 1 \\Rightarrow X^2 - X - 2 = 0 \\Rightarrow (X-2)(X+1) = 0$.<br>$X = 2$ (car $X > 0$, donc $X = -1$ rejeté).<br>$e^x = 2 \\Rightarrow x = \\ln 2$.` },
      ]
    },
  ]
},

{
  id: 'ma-tg-contloi', filiere: 'term-gen', matiere: 'ma',
  titre: 'Variables aléatoires continues', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Densité de probabilité',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Variable aléatoire continue — densité',
          contenu: `$X$ est une <strong>variable aléatoire continue</strong> s'il existe une fonction $f \\ge 0$ telle que :<br>$$\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1 \\quad \\text{et} \\quad P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$$<br>$f$ est la <strong>densité de probabilité</strong> de $X$.<br>Attention : $P(X = a) = 0$ pour toute valeur $a$ (contrairement aux variables discrètes).` },
        { type: 'def', label: 'DEF', titre: 'Espérance et variance',
          contenu: `<strong>Espérance</strong> : $\\mu = E(X) = \\displaystyle\\int_{-\\infty}^{+\\infty} x\\,f(x)\\,dx$.<br><strong>Moment d'ordre 2</strong> : $E(X^2) = \\displaystyle\\int_{-\\infty}^{+\\infty} x^2\\,f(x)\\,dx$.<br><strong>Variance</strong> : $V(X) = E(X^2) - [E(X)]^2 = E[(X-\\mu)^2]$.<br><strong>Écart-type</strong> : $\\sigma = \\sqrt{V(X)}$ (même unité que $X$).` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés de l\'espérance et de la variance',
          contenu: `Linéarité de l'espérance : $E(aX + b) = aE(X) + b$.<br>Variance : $V(aX + b) = a^2 V(X)$ (translation n'affecte pas la dispersion).<br>Écart-type : $\\sigma(aX + b) = |a|\\,\\sigma(X)$.<br>Si $X$ et $Y$ sont <strong>indépendantes</strong> : $E(XY) = E(X)E(Y)$, $V(X+Y) = V(X) + V(Y)$.` },
        { type: 'meth', label: 'METH', titre: 'Vérifier qu\'une fonction est une densité',
          contenu: `<strong>Conditions à vérifier</strong> :<br>1. $f(x) \\ge 0$ pour tout $x$ dans le support.<br>2. $\\displaystyle\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$.<br>Exemple : $f(x) = \\lambda e^{-\\lambda x}$ pour $x \\ge 0$, $f(x) = 0$ sinon ($\\lambda > 0$).<br>$\\displaystyle\\int_0^{+\\infty} \\lambda e^{-\\lambda x}\\,dx = \\lambda \\cdot \\frac{1}{\\lambda} = 1$. ✓` },
      ]
    },
    {
      titre: 'Loi uniforme et exponentielle',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Loi uniforme $\\mathcal{U}([a,b])$',
          contenu: `$X \\sim \\mathcal{U}([a,b])$ si :<br>$$f(x) = \\begin{cases} \\dfrac{1}{b-a} & \\text{si } a \\le x \\le b \\\\ 0 & \\text{sinon} \\end{cases}$$<br>$E(X) = \\dfrac{a+b}{2}$ (milieu de l'intervalle).<br>$V(X) = \\dfrac{(b-a)^2}{12}$, $\\sigma = \\dfrac{b-a}{2\\sqrt{3}}$.<br>$P(c \\le X \\le d) = \\dfrac{d-c}{b-a}$ pour $[c,d] \\subset [a,b]$.` },
        { type: 'def', label: 'DEF', titre: 'Loi exponentielle $\\mathcal{E}(\\lambda)$',
          contenu: `$X \\sim \\mathcal{E}(\\lambda)$ ($\\lambda > 0$) si :<br>$$f(x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\ge 0 \\\\ 0 & x < 0 \\end{cases}$$<br>$E(X) = \\dfrac{1}{\\lambda}$ (durée de vie moyenne), $V(X) = \\dfrac{1}{\\lambda^2}$.<br>$P(X > t) = e^{-\\lambda t}$, $P(a \\le X \\le b) = e^{-\\lambda a} - e^{-\\lambda b}$.` },
        { type: 'prop', label: 'PROP', titre: 'Propriété sans mémoire de la loi exponentielle',
          contenu: `La loi exponentielle est la seule loi continue <strong>sans mémoire</strong> :<br>$$P(X > s + t \\mid X > s) = P(X > t)$$<br>Interprétation : si un composant électronique est encore en état de marche après $s$ heures, la durée de vie résiduelle a la même loi qu'à l'origine.<br>Calcul : $P(X > s+t \\mid X > s) = \\dfrac{P(X > s+t)}{P(X > s)} = \\dfrac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t}$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : loi exponentielle',
          contenu: `La durée de vie (en heures) d'une ampoule suit $\\mathcal{E}(0{,}01)$.<br>1. $E(X) = 1/0{,}01 = 100$ heures.<br>2. $P(X > 200) = e^{-0{,}01 \\times 200} = e^{-2} \\approx 0{,}135$.<br>3. $P(50 \\le X \\le 150) = e^{-0{,}5} - e^{-1{,}5} \\approx 0{,}607 - 0{,}223 = 0{,}384$.` },
      ]
    },
    {
      titre: 'Loi normale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Loi normale $\\mathcal{N}(\\mu, \\sigma^2)$',
          contenu: `$X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ a pour densité :<br>$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$$<br>Courbe de Gauss, symétrique par rapport à $x = \\mu$.<br>$E(X) = \\mu$ (centre), $V(X) = \\sigma^2$, $\\sigma$ = écart-type.<br>La loi normale est la plus importante en statistiques (théorème central limite).` },
        { type: 'prop', label: 'PROP', titre: 'Règle des 68-95-99,7 %',
          contenu: `Pour $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ :<br>$$P(\\mu - \\sigma \\le X \\le \\mu + \\sigma) \\approx 68{,}3\\%$$<br>$$P(\\mu - 2\\sigma \\le X \\le \\mu + 2\\sigma) \\approx 95{,}4\\%$$<br>$$P(\\mu - 3\\sigma \\le X \\le \\mu + 3\\sigma) \\approx 99{,}7\\%$$<br>Valeurs à retenir absolument pour les applications pratiques.` },
        { type: 'def', label: 'DEF', titre: 'Standardisation — loi normale centrée réduite',
          contenu: `Si $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, alors $Z = \\dfrac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.<br>$Z$ suit la <strong>loi normale centrée réduite</strong> : $E(Z) = 0$, $V(Z) = 1$.<br>On utilise la table $\\Phi(z) = P(Z \\le z)$ pour calculer des probabilités.<br>$P(X \\le x) = P\\!\\left(Z \\le \\dfrac{x-\\mu}{\\sigma}\\right) = \\Phi\\!\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$.` },
        { type: 'meth', label: 'METH', titre: 'Lire une table de la loi normale',
          contenu: `<strong>Lecture de $\\Phi(z)$</strong> (probabilité $P(Z \\le z)$) :<br>1. Si $z \\ge 0$ : lire directement dans la table.<br>2. Si $z < 0$ : $\\Phi(z) = 1 - \\Phi(-z)$ (symétrie).<br>3. $P(a \\le Z \\le b) = \\Phi(b) - \\Phi(a)$.<br>4. $P(Z \\ge z) = 1 - \\Phi(z)$.<br>Valeurs utiles : $\\Phi(1{,}96) \\approx 0{,}975$, $\\Phi(2{,}58) \\approx 0{,}995$.` },
      ]
    },
    {
      titre: 'Applications et calculs',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Calculer $P(a \\le X \\le b)$ pour une loi normale',
          contenu: `<strong>Étapes</strong> : $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, calculer $P(a \\le X \\le b)$.<br>1. Standardiser : $P\\!\\left(\\dfrac{a-\\mu}{\\sigma} \\le Z \\le \\dfrac{b-\\mu}{\\sigma}\\right)$.<br>2. Poser $z_1 = \\dfrac{a-\\mu}{\\sigma}$, $z_2 = \\dfrac{b-\\mu}{\\sigma}$.<br>3. $P = \\Phi(z_2) - \\Phi(z_1)$.<br>Si $z_1 < 0$ : $\\Phi(z_1) = 1 - \\Phi(-z_1)$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : loi normale',
          contenu: `Les notes d'un examen suivent $\\mathcal{N}(12; 4)$ (donc $\\sigma = 2$).<br>$P(10 \\le X \\le 14) = P\\!\\left(\\dfrac{10-12}{2} \\le Z \\le \\dfrac{14-12}{2}\\right) = P(-1 \\le Z \\le 1) \\approx 68{,}3\\%$.<br>$P(X \\ge 16) = P\\!\\left(Z \\ge \\dfrac{16-12}{2}\\right) = P(Z \\ge 2) = 1 - \\Phi(2) \\approx 2{,}3\\%$.` },
        { type: 'prop', label: 'PROP', titre: 'Approximation normale de la loi binomiale',
          contenu: `Si $X \\sim \\mathcal{B}(n, p)$ avec $n$ grand ($n \\ge 30$, $np \\ge 5$, $n(1-p) \\ge 5$), alors :<br>$$X \\approx \\mathcal{N}(np,\\ np(1-p))$$<br>On peut ainsi approximer $P(X = k) \\approx P\\!\\left(k - \\tfrac{1}{2} \\le Y \\le k + \\tfrac{1}{2}\\right)$ (correction de continuité).<br>Utile pour les grands échantillons.` },
        { type: 'meth', label: 'METH', titre: 'Intervalle de fluctuation',
          contenu: `Soit $X \\sim \\mathcal{B}(n, p)$. Pour $n$ grand, $\\hat{p} = X/n$ est la fréquence observée.<br>Intervalle de fluctuation au niveau $95\\%$ : $\\left[p - \\dfrac{1{,}96\\sigma}{\\sqrt{n}};\\; p + \\dfrac{1{,}96\\sigma}{\\sqrt{n}}\\right]$ où $\\sigma = \\sqrt{p(1-p)}$.<br>Approximation souvent utilisée : $\\left[p - \\dfrac{1}{\\sqrt{n}};\\ p + \\dfrac{1}{\\sqrt{n}}\\right]$ (valable si $np(1-p) \\ge 9$).` },
      ]
    },
  ]
},

{
  id: 'ma-tg-combin', filiere: 'term-gen', matiere: 'ma',
  titre: 'Dénombrement et probabilités', ordre: 5, enrich: true,
  sections: [
    {
      titre: 'Principes de dénombrement',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Principes fondamentaux',
          contenu: `<strong>Principe additif</strong> : si $A$ et $B$ sont disjoints, $|A \\cup B| = |A| + |B|$.<br><strong>Principe multiplicatif</strong> : si un choix se fait en $k$ étapes indépendantes ($n_1, n_2, \\ldots, n_k$ options chacune), le nombre total de choix est $n_1 \\times n_2 \\times \\cdots \\times n_k$.<br>Exemple : 3 chemises et 4 pantalons donnent $3 \\times 4 = 12$ tenues possibles.` },
        { type: 'def', label: 'DEF', titre: 'Permutations et factorielle',
          contenu: `Le nombre de façons d'ordonner $n$ objets distincts est :<br>$$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$$<br>Convention : $0! = 1$, $1! = 1$.<br>Valeurs : $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $10! = 3\\,628\\,800$.<br>Exemple : 7 coureurs, $7! = 5040$ classements possibles.` },
        { type: 'def', label: 'DEF', titre: 'Arrangements $A_n^k$',
          contenu: `Un <strong>arrangement</strong> de $k$ éléments parmi $n$ est une liste ordonnée de $k$ éléments distincts tirés parmi $n$ :<br>$$A_n^k = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$$<br>Exemple : nombre de podiums (or, argent, bronze) parmi 10 athlètes :<br>$A_{10}^3 = 10 \\times 9 \\times 8 = 720$.` },
        { type: 'def', label: 'DEF', titre: 'Combinaisons $\\binom{n}{k}$',
          contenu: `Le nombre de façons de choisir $k$ éléments parmi $n$ (sans ordre) est :<br>$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!} = \\frac{A_n^k}{k!}$$<br>Propriétés : $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, $\\binom{n}{k} = \\binom{n}{n-k}$.<br>Exemple : $\\binom{5}{2} = \\dfrac{5!}{2! \\cdot 3!} = 10$.` },
      ]
    },
    {
      titre: 'Triangle de Pascal et binôme',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Relation de Pascal',
          contenu: `$$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$$<br>Cette relation permet de construire le <strong>triangle de Pascal</strong> :<br>$$\\begin{array}{ccccccc} & & 1 & & \\\\ & 1 & & 1 & \\\\ 1 & & 2 & & 1 \\\\ 1 & & 3 & & 3 & & 1 \\\\ 1 & & 4 & & 6 & & 4 & & 1 \\end{array}$$<br>Chaque terme est la somme des deux termes au-dessus.` },
        { type: 'form', label: 'FORM', titre: 'Formule du binôme de Newton',
          contenu: `Pour $n \\in \\mathbb{N}$ :<br>$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$$<br>Exemples :<br>$(a+b)^2 = a^2 + 2ab + b^2$ ✓<br>$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ ✓<br>$(1+x)^4 = 1 + 4x + 6x^2 + 4x^3 + x^4$<br>Cas particulier : $\\displaystyle\\sum_{k=0}^n \\binom{n}{k} = 2^n$ (poser $a=b=1$).` },
        { type: 'meth', label: 'METH', titre: 'Développer $(1+x)^n$ à l\'ordre $n$',
          contenu: `Lire les coefficients dans le triangle de Pascal (ligne $n$).<br>Exemple : $(2+x)^4 = \\displaystyle\\sum_{k=0}^4 \\binom{4}{k} 2^{4-k} x^k = 16 + 32x + 24x^2 + 8x^3 + x^4$.<br><strong>Terme général</strong> : le terme en $x^k$ est $\\binom{n}{k} a^{n-k} b^k$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : dénombrement',
          contenu: `Un comité de 4 personnes est formé parmi 6 hommes et 4 femmes.<br>1. Nombre de comités sans contrainte : $\\binom{10}{4} = 210$.<br>2. Au moins une femme : $210 - \\binom{6}{4} = 210 - 15 = 195$.<br>3. Exactement 2 femmes : $\\binom{4}{2} \\times \\binom{6}{2} = 6 \\times 15 = 90$.` },
      ]
    },
    {
      titre: 'Loi binomiale',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Schéma de Bernoulli et loi binomiale',
          contenu: `On répète $n$ fois une épreuve de Bernoulli (succès de proba $p$, échec de proba $1-p$), de façon indépendante.<br>$X$ = nombre de succès suit la <strong>loi binomiale</strong> $\\mathcal{B}(n, p)$ :<br>$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k} \\quad (k = 0, 1, \\ldots, n)$$<br>$E(X) = np$, $V(X) = np(1-p)$, $\\sigma = \\sqrt{np(1-p)}$.` },
        { type: 'meth', label: 'METH', titre: 'Calculer des probabilités avec $\\mathcal{B}(n,p)$',
          contenu: `$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$.<br>$P(X \\le k) = \\displaystyle\\sum_{i=0}^k P(X=i)$ (somme).<br>$P(X \\ge k) = 1 - P(X \\le k-1)$.<br>Exemple : $X \\sim \\mathcal{B}(5, 0{,}3)$.<br>$P(X = 2) = \\binom{5}{2}(0{,}3)^2(0{,}7)^3 = 10 \\times 0{,}09 \\times 0{,}343 = 0{,}3087$.` },
        { type: 'prop', label: 'PROP', titre: 'Propriétés de la loi binomiale',
          contenu: `$X \\sim \\mathcal{B}(n, p)$ :<br>$E(X) = np$ : si $n = 20$, $p = 0{,}4$, alors $E(X) = 8$.<br>$V(X) = np(1-p)$ : variance maximale quand $p = 0{,}5$.<br>Si $X \\sim \\mathcal{B}(n,p)$ et $Y \\sim \\mathcal{B}(m,p)$ indépendants : $X+Y \\sim \\mathcal{B}(n+m, p)$.<br>Approximation de Poisson : si $n$ grand et $p$ petit, $X \\approx \\mathcal{P}(\\lambda = np)$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : loi binomiale complète',
          contenu: `Un QCM a 10 questions, chacune avec 4 choix dont un seul correct. Un étudiant répond au hasard.<br>$X \\sim \\mathcal{B}(10, 0{,}25)$.<br>$E(X) = 10 \\times 0{,}25 = 2{,}5$ bonnes réponses en moyenne.<br>$P(X \\ge 5) = 1 - P(X \\le 4)$. Avec une table ou calculatrice : $P(X \\le 4) \\approx 0{,}922$, donc $P(X \\ge 5) \\approx 0{,}078$.` },
      ]
    },
    {
      titre: 'Probabilités conditionnelles',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Probabilité conditionnelle',
          contenu: `La probabilité de $A$ sachant $B$ (avec $P(B) > 0$) est :<br>$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$<br>$A$ et $B$ sont <strong>indépendants</strong> ssi $P(A \\cap B) = P(A) \\cdot P(B)$, i.e. $P(A \\mid B) = P(A)$.<br>Formule des probabilités composées : $P(A \\cap B) = P(B) \\cdot P(A \\mid B)$.` },
        { type: 'thm', label: 'THM', titre: 'Formule des probabilités totales',
          contenu: `Soit $(B_1, \\ldots, B_n)$ un système complet d'événements ($B_i$ disjoints, $\\bigcup B_i = \\Omega$, $P(B_i) > 0$) :<br>$$P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)$$<br>Arbre de probabilité : chemin = produit, réunion = somme.` },
        { type: 'thm', label: 'THM', titre: 'Formule de Bayes',
          contenu: `Dans les mêmes conditions :<br>$$P(B_j \\mid A) = \\frac{P(B_j) \\cdot P(A \\mid B_j)}{\\displaystyle\\sum_{i=1}^n P(B_i) \\cdot P(A \\mid B_i)}$$<br><strong>Application classique</strong> : test médical. Si maladie (proba $p$), test positif avec proba $s$ (sensibilité) ; si saine, faux positif avec proba $1-s'$ (spécificité). Calcul de $P(\\text{malade} \\mid \\text{test}+)$ via Bayes.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : arbre et Bayes',
          contenu: `Une urne contient 3R, 2B. On tire deux boules sans remise.<br>$P(R_1) = 3/5$, $P(B_1) = 2/5$.<br>$P(R_2 \\mid R_1) = 2/4 = 1/2$, $P(R_2 \\mid B_1) = 3/4$.<br>$P(R_2) = \\frac{3}{5} \\cdot \\frac{1}{2} + \\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{3}{10} + \\frac{6}{20} = \\frac{3}{5}$.<br>$P(B_1 \\mid R_2) = \\dfrac{2/5 \\cdot 3/4}{3/5} = \\dfrac{6/20}{3/5} = \\dfrac{1}{2}$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// PHYSIQUE-CHIMIE TERMINALE GÉNÉRALE
// ══════════════════════════════════════════════════════════════

{
  id: 'phch-tg-meca', filiere: 'term-gen', matiere: 'phch',
  titre: 'Mécanique — énergie et travail', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Travail d\'une force',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Travail d\'une force constante',
          contenu: `Le <strong>travail</strong> de la force $\\vec{F}$ lors d'un déplacement $\\vec{d}$ est :<br>$$W = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos\\alpha$$<br>où $\\alpha$ est l'angle entre $\\vec{F}$ et $\\vec{d}$.<br>Unité : le <strong>joule</strong> (J = N·m).<br>$W > 0$ : force motrice (même sens que le déplacement).<br>$W < 0$ : force résistante (sens opposé au déplacement).<br>$W = 0$ : force perpendiculaire au déplacement (ex. réaction normale, force centripète).` },
        { type: 'def', label: 'DEF', titre: 'Travail d\'une force variable',
          contenu: `Pour une force variable, le travail élémentaire est $\\delta W = \\vec{F} \\cdot d\\vec{r}$.<br>Travail sur un trajet de $A$ à $B$ :<br>$$W_{A \\to B} = \\int_A^B \\vec{F} \\cdot d\\vec{r}$$<br>Exemple : ressort de constante $k$. Force $F = -kx$.<br>$W = \\displaystyle\\int_0^{x_0} kx\\,dx = \\dfrac{1}{2}kx_0^2$ (travail de la force opposée à la force du ressort).` },
        { type: 'prop', label: 'PROP', titre: 'Travaux des forces usuelles',
          contenu: `<strong>Poids</strong> $\\vec{P} = m\\vec{g}$ : $W_P = mg(z_A - z_B) = -\\Delta(mgh)$ (dépend seulement du déplacement vertical).<br><strong>Réaction normale</strong> : $W_N = 0$ (perpendiculaire au déplacement).<br><strong>Force de frottement</strong> $f$ : $W_f = -f \\cdot d < 0$ (toujours négatif, force résistante).<br><strong>Tension d'un fil inextensible</strong> : $W_T = 0$ dans un système isolé.` },
        { type: 'def', label: 'DEF', titre: 'Puissance d\'une force',
          contenu: `La <strong>puissance</strong> instantanée d'une force $\\vec{F}$ est :<br>$$P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$$<br>Unité : le <strong>watt</strong> (W = J/s).<br>Relation : $W = \\displaystyle\\int_{t_1}^{t_2} P(t)\\,dt$.<br>Si $P$ constante : $W = P \\cdot \\Delta t$.` },
      ]
    },
    {
      titre: 'Énergie cinétique et mécanique',
      cartes: [
        { type: 'thm', label: 'THM', titre: 'Théorème de l\'énergie cinétique',
          contenu: `La variation d'énergie cinétique d'un système entre deux instants est égale au travail total des forces appliquées :<br>$$W_{\\text{total}} = \\Delta E_c = E_{cB} - E_{cA} = \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2$$<br>C'est le théorème fondamental de la mécanique énergétique.<br>Si $W_{\\text{total}} > 0$ : le système accélère. Si $W_{\\text{total}} < 0$ : il ralentit.` },
        { type: 'def', label: 'DEF', titre: 'Énergies potentielles',
          contenu: `<strong>Énergie potentielle de pesanteur</strong> : $E_p = mgh$ (référence choisie librement, $h$ en mètres).<br><strong>Énergie potentielle élastique</strong> : $E_e = \\dfrac{1}{2}kx^2$ ($k$ : constante de raideur N/m, $x$ : allongement).<br>Ces énergies sont associées aux forces conservatives (le travail ne dépend que des positions initiale et finale).` },
        { type: 'thm', label: 'THM', titre: 'Conservation de l\'énergie mécanique',
          contenu: `L'<strong>énergie mécanique</strong> est $E_m = E_c + E_p$.<br>Si les seules forces qui travaillent sont conservatives :<br>$$E_m = \\text{const} \\quad \\Leftrightarrow \\quad \\Delta E_m = 0$$<br>En présence de frottements : $\\Delta E_m = W_{\\text{frottements}} < 0$ (l'énergie mécanique diminue, transformée en chaleur).` },
        { type: 'meth', label: 'METH', titre: 'Résoudre un problème d\'énergie',
          contenu: `<strong>Méthode</strong> :<br>1. Définir le système et choisir la référence d'énergie potentielle.<br>2. Identifier les forces et leurs travaux (forces conservatives, frottements).<br>3. Appliquer TEC : $\\Delta E_c = W_{\\text{total}}$, ou conservation de $E_m$ si sans frottements.<br>4. En déduire la vitesse, la hauteur, etc.<br>Exemple : chute libre depuis $h$. $E_m$ conservée : $\\frac{1}{2}mv^2 = mgh \\Rightarrow v = \\sqrt{2gh}$.` },
      ]
    },
    {
      titre: 'Quantité de mouvement et impulsion',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Quantité de mouvement',
          contenu: `La <strong>quantité de mouvement</strong> (ou impulsion mécanique) d'un point matériel est :<br>$$\\vec{p} = m\\vec{v}$$<br>Unité : kg·m/s.<br>C'est une grandeur vectorielle. La 2ème loi de Newton peut s'écrire :<br>$$\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$$` },
        { type: 'thm', label: 'THM', titre: 'Conservation de la quantité de mouvement',
          contenu: `Si la résultante des forces extérieures est nulle sur un système, la quantité de mouvement totale est conservée :<br>$$\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\Rightarrow \\vec{p}_{\\text{total}} = \\text{const}$$<br>Application : chocs (élastique, inélastique), explosions, propulsion par réaction.<br>Pour deux objets : $m_1\\vec{v}_1 + m_2\\vec{v}_2 = m_1\\vec{v}_1' + m_2\\vec{v}_2'$.` },
        { type: 'def', label: 'DEF', titre: 'Impulsion d\'une force',
          contenu: `L'<strong>impulsion</strong> d'une force $\\vec{F}$ pendant $\\Delta t$ est :<br>$$\\vec{J} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i$$<br>Unité : N·s = kg·m/s.<br>Utile pour les chocs (force de contact très intense sur très courte durée) : on ne peut pas toujours connaître $\\vec{F}(t)$, mais on peut mesurer $\\Delta \\vec{p}$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : choc et conservation',
          contenu: `Deux patineurs : $m_1 = 60$ kg à $v_1 = 3$ m/s et $m_2 = 80$ kg à $v_2 = -1$ m/s (sens contraire).<br>Choc inélastique total (ils s'agrippent) :<br>$p_\\text{avant} = 60 \\times 3 + 80 \\times (-1) = 180 - 80 = 100$ kg·m/s.<br>$v_f = \\dfrac{100}{60 + 80} = \\dfrac{100}{140} \\approx 0{,}71$ m/s.` },
      ]
    },
    {
      titre: 'Oscillateur mécanique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Pendule et ressort — équation du mouvement',
          contenu: `<strong>Masse-ressort horizontal</strong> : $m\\ddot{x} + kx = 0$, soit $\\ddot{x} + \\omega_0^2 x = 0$ avec $\\omega_0 = \\sqrt{k/m}$.<br><strong>Pendule simple</strong> (petites oscillations) : $\\ddot{\\theta} + \\omega_0^2 \\theta = 0$ avec $\\omega_0 = \\sqrt{g/L}$.<br>Solution : $x(t) = A\\cos(\\omega_0 t + \\varphi)$, période $T_0 = \\dfrac{2\\pi}{\\omega_0}$.` },
        { type: 'prop', label: 'PROP', titre: 'Énergie de l\'oscillateur harmonique',
          contenu: `Pour un ressort sans frottements :<br>$E_c = \\dfrac{1}{2}m\\dot{x}^2$, $E_p = \\dfrac{1}{2}kx^2$.<br>$E_m = E_c + E_p = \\dfrac{1}{2}kA^2 = \\text{const}$.<br>Lorsque $x = A$ (extrémité) : $E_c = 0$, $E_p = E_m$.<br>En position centrale ($x = 0$) : $E_p = 0$, $E_c = E_m$ (vitesse maximale $v_{max} = A\\omega_0$).` },
        { type: 'def', label: 'DEF', titre: 'Amortissement',
          contenu: `En présence de frottements fluides ($f = -\\lambda v$) :<br>$$m\\ddot{x} + \\lambda\\dot{x} + kx = 0$$<br>Comportements selon $\\lambda$ :<br>- <strong>Sous-amorti</strong> ($\\lambda < 2\\sqrt{mk}$) : oscillations atténuées.<br>- <strong>Critique</strong> ($\\lambda = 2\\sqrt{mk}$) : retour à l'équilibre le plus rapide sans oscillation.<br>- <strong>Sur-amorti</strong> ($\\lambda > 2\\sqrt{mk}$) : retour lent sans oscillation.` },
        { type: 'meth', label: 'METH', titre: 'Analyser un oscillateur — bilan énergétique',
          contenu: `<strong>Sans frottements</strong> : $E_m = $ const, échange $E_c \\ \\leftrightarrow\\ E_p$.<br><strong>Avec frottements</strong> : $\\dfrac{dE_m}{dt} = P_{\\text{frottements}} < 0$.<br>L'énergie mécanique décroît, convertie en énergie thermique.<br>Quantifier la perte : $\\Delta E_m = W_{\\text{frottements}} = -f \\cdot d$ (si frottement constant).` },
      ]
    },
  ]
},

{
  id: 'phch-tg-elec', filiere: 'term-gen', matiere: 'phch',
  titre: 'Électrocinétique — circuits RC et RL', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Condensateur',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Condensateur — définitions',
          contenu: `Un <strong>condensateur</strong> de capacité $C$ (en farads, F) vérifie :<br>$$Q = C \\cdot U_C$$<br>La relation courant-tension est :<br>$$i = C \\frac{dU_C}{dt}$$<br>Énergie stockée : $E = \\dfrac{1}{2}CU_C^2$.<br>En régime continu permanent : $i = 0$ (le condensateur se comporte comme un interrupteur ouvert).` },
        { type: 'prop', label: 'PROP', titre: 'Charge du condensateur — circuit RC',
          contenu: `Circuit RC en charge (pile $E$, résistance $R$, condensateur $C$) :<br>$$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right) \\quad \\text{avec } \\tau = RC$$<br>$$i(t) = \\frac{E}{R}\\,e^{-t/\\tau}$$<br>Constante de temps $\\tau = RC$ : temps pour que $u_C$ atteigne $63\\%$ de $E$.<br>Après $5\\tau$, le condensateur est considéré chargé ($u_C \\approx 99\\% \\cdot E$).` },
        { type: 'prop', label: 'PROP', titre: 'Décharge du condensateur',
          contenu: `Circuit RC en décharge (condensateur chargé à $U_0$, résistance $R$) :<br>$$u_C(t) = U_0\\,e^{-t/\\tau} \\quad (\\tau = RC)$$<br>$$i(t) = -\\frac{U_0}{R}\\,e^{-t/\\tau}$$<br>Le courant est négatif (sens inversé par rapport à la charge).<br>Après $5\\tau$ : $u_C \\approx 0{,}67\\%$ de $U_0$ (décharge quasi-complète).` },
        { type: 'meth', label: 'METH', titre: 'Déterminer $\\tau$ graphiquement',
          contenu: `Sur le graphe de $u_C(t)$ lors d'une charge :<br>1. $\\tau$ est l'abscisse où $u_C = E(1 - e^{-1}) \\approx 0{,}63 E$.<br>2. Alternativement : la tangente à l'origine coupe la droite $y = E$ en $t = \\tau$.<br>Sur la décharge : $\\tau$ = abscisse où $u_C = U_0 / e \\approx 0{,}37\\,U_0$.` },
      ]
    },
    {
      titre: 'Bobine et circuit RL',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Bobine — définitions',
          contenu: `Une <strong>bobine</strong> d'inductance $L$ (en henrys, H) vérifie :<br>$$u_L = L \\frac{di}{dt}$$<br>Énergie stockée : $E = \\dfrac{1}{2}Li^2$.<br>En régime continu permanent : $u_L = 0$ (la bobine se comporte comme un fil).<br>La bobine s'oppose à toute variation de courant (effet inductif).` },
        { type: 'prop', label: 'PROP', titre: 'Circuit RL en régime transitoire',
          contenu: `Circuit RL (pile $E$, résistance $R$, bobine $L$) :<br>$$i(t) = \\frac{E}{R}\\left(1 - e^{-t/\\tau}\\right) \\quad \\text{avec } \\tau = \\frac{L}{R}$$<br>$$u_L(t) = E\\,e^{-t/\\tau}$$<br>Au démarrage ($t=0$) : $i = 0$ (la bobine s'oppose à l'établissement du courant).<br>En régime permanent ($t \\gg \\tau$) : $i = E/R$, $u_L = 0$.` },
        { type: 'meth', label: 'METH', titre: 'Analyser un circuit RC ou RL — méthode',
          contenu: `<strong>Étape 1</strong> : écrire la loi des mailles pour obtenir l'équation différentielle.<br><strong>Étape 2</strong> : identifier la forme $\\tau \\dfrac{dy}{dt} + y = y_\\infty$.<br><strong>Étape 3</strong> : solution $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$ avec $y_0 = y(0)$.<br><strong>Étape 4</strong> : vérifier les conditions initiales ($u_C$ continue, $i_L$ continu).` },
        { type: 'prop', label: 'PROP', titre: 'Continuité de $u_C$ et $i_L$',
          contenu: `Propriétés fondamentales :<br>- La tension aux bornes d'un condensateur est <strong>continue</strong> : $u_C(0^+) = u_C(0^-)$.<br>- Le courant dans une bobine est <strong>continu</strong> : $i_L(0^+) = i_L(0^-)$.<br>Ces propriétés donnent les conditions initiales lors de l'analyse des régimes transitoires.<br>En revanche : la tension aux bornes d'une bobine et le courant dans un condensateur peuvent être discontinus.` },
      ]
    },
    {
      titre: 'Oscillations LC libres',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Circuit LC — oscillations libres',
          contenu: `Un circuit $LC$ idéal (sans résistance) satisfait :<br>$$LC\\frac{d^2u}{dt^2} + u = 0 \\quad \\Leftrightarrow \\quad \\frac{d^2u}{dt^2} + \\omega_0^2 u = 0$$<br>$$\\omega_0 = \\frac{1}{\\sqrt{LC}} \\quad T_0 = 2\\pi\\sqrt{LC}$$<br>Solution : $u(t) = U_m \\cos(\\omega_0 t + \\varphi)$.<br>Analogie mécanique : $L \\leftrightarrow m$, $1/C \\leftrightarrow k$, $i \\leftrightarrow v$, $u_C \\leftrightarrow x$.` },
        { type: 'prop', label: 'PROP', titre: 'Échanges énergétiques dans LC',
          contenu: `$E_C = \\dfrac{1}{2}Cu_C^2$ (condensateur) ↔ $E_L = \\dfrac{1}{2}Li^2$ (bobine).<br>$E_{\\ totale} = E_C + E_L = \\dfrac{1}{2}CU_m^2 = \\text{const}$ (conservation en LC idéal).<br>Quand $u_C$ est maximal : $i = 0$, $E_L = 0$.<br>Quand $i$ est maximal : $u_C = 0$, $E_C = 0$.<br>Les oscillations sont entretenues indéfiniment (sans frottements électriques).` },
        { type: 'def', label: 'DEF', titre: 'Circuit RLC — amortissement',
          contenu: `En présence d'une résistance $R$ dans le circuit $LC$ :<br>$$L\\frac{d^2i}{dt^2} + R\\frac{di}{dt} + \\frac{i}{C} = 0$$<br>Le discriminant $\\Delta = R^2 - 4L/C$ détermine le régime :<br>- $\\Delta < 0$ : <strong>pseudo-oscillatoire</strong> (sous-amorti).<br>- $\\Delta = 0$ : <strong>critique</strong>.<br>- $\\Delta > 0$ : <strong>apériodique</strong> (sur-amorti).` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : circuit LC',
          contenu: `Circuit LC : $L = 0{,}1$ H, $C = 10\\ \\mu$F = $10^{-5}$ F.<br>$\\omega_0 = \\dfrac{1}{\\sqrt{0{,}1 \\times 10^{-5}}} = \\dfrac{1}{\\sqrt{10^{-6}}} = \\dfrac{1}{10^{-3}} = 1000$ rad/s.<br>$T_0 = \\dfrac{2\\pi}{1000} \\approx 6{,}28 \\times 10^{-3}$ s $\\approx 6{,}3$ ms.<br>$f_0 = 1/T_0 \\approx 159$ Hz.` },
      ]
    },
    {
      titre: 'Régime sinusoïdal forcé',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Régime sinusoïdal — grandeurs caractéristiques',
          contenu: `En régime sinusoïdal de pulsation $\\omega$ : $u(t) = U_m\\cos(\\omega t + \\varphi_u)$.<br><strong>Valeur efficace</strong> : $U_{\\text{eff}} = U_m/\\sqrt{2}$ (en V, mesurée par un voltmètre).<br><strong>Fréquence</strong> : $f = \\omega/(2\\pi)$, période $T = 1/f$.<br>En France : secteur $230$ V efficace, $50$ Hz.` },
        { type: 'prop', label: 'PROP', titre: 'Impédances complexes',
          contenu: `En notation complexe ($j^2 = -1$) :<br>Résistance : $\\underline{Z}_R = R$.<br>Condensateur : $\\underline{Z}_C = \\dfrac{1}{jC\\omega}$.<br>Bobine : $\\underline{Z}_L = jL\\omega$.<br>Loi d'Ohm complexe : $\\underline{U} = \\underline{Z} \\cdot \\underline{I}$.<br>Résonance en courant : $\\omega_0 L = 1/(\\omega_0 C) \\Rightarrow \\omega_0 = 1/\\sqrt{LC}$.` },
        { type: 'prop', label: 'PROP', titre: 'Puissance en régime sinusoïdal',
          contenu: `Puissance moyenne (active) : $P = U_{\\text{eff}} I_{\\text{eff}} \\cos\\varphi$.<br>$\\cos\\varphi$ est le <strong>facteur de puissance</strong>.<br>Pour un résistor : $P = RI_{\\text{eff}}^2 = U_{\\text{eff}}^2/R$.<br>Pour un condensateur ou une bobine idéale : $P = 0$ (pas de dissipation).` },
        { type: 'meth', label: 'METH', titre: 'Étudier un filtre RC',
          contenu: `Filtre RC passe-bas (sortie sur $C$) :<br>$H = \\dfrac{U_S}{U_E} = \\dfrac{1}{1 + jRC\\omega}$.<br>$|H| = \\dfrac{1}{\\sqrt{1 + (RC\\omega)^2}}$.<br>Fréquence de coupure : $f_c = \\dfrac{1}{2\\pi RC}$ (où $|H| = 1/\\sqrt{2} \\approx -3$ dB).<br>En dessous de $f_c$ : le signal passe. Au-dessus : il est atténué.` },
      ]
    },
  ]
},

{
  id: 'phch-tg-optiq', filiere: 'term-gen', matiere: 'phch',
  titre: 'Optique géométrique — lentilles', ordre: 3, enrich: true,
  sections: [
    {
      titre: 'Réflexion et réfraction',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Lois de Snell-Descartes',
          contenu: `<strong>Réflexion</strong> : le rayon réfléchi est dans le plan d'incidence et l'angle de réflexion égale l'angle d'incidence : $i_r = i_1$.<br><strong>Réfraction</strong> : à l'interface entre deux milieux d'indices $n_1$ et $n_2$ :<br>$$n_1 \\sin i_1 = n_2 \\sin i_2$$<br>Le rayon réfracté est dans le plan d'incidence. Si $n_2 > n_1$ : le rayon se rapproche de la normale.` },
        { type: 'def', label: 'DEF', titre: 'Réflexion totale interne',
          contenu: `Lorsqu'un rayon passe d'un milieu dense vers un milieu moins dense ($n_1 > n_2$), si l'angle d'incidence dépasse l'<strong>angle limite</strong> :<br>$$\\sin i_L = \\frac{n_2}{n_1}$$<br>il n'y a plus de rayon réfracté : c'est la <strong>réflexion totale interne</strong>.<br>Application : fibre optique (guidage de la lumière), diamant (scintillement).` },
        { type: 'prop', label: 'PROP', titre: 'Indice de réfraction',
          contenu: `L'indice de réfraction d'un milieu est $n = c/v$ où $c = 3 \\times 10^8$ m/s et $v$ est la vitesse de la lumière dans le milieu.<br>$n \\ge 1$ toujours (air $\\approx 1$, eau $\\approx 1{,}33$, verre $\\approx 1{,}5$).<br>Dispersion : $n$ dépend de la longueur d'onde (différent pour le rouge et le violet $\\Rightarrow$ prisme, arc-en-ciel).` },
        { type: 'exo', label: 'EXO', titre: 'Application : calcul d\'angle réfracté',
          contenu: `Un rayon passe de l'eau ($n_1 = 1{,}33$) dans le verre ($n_2 = 1{,}50$) avec $i_1 = 30°$.<br>$n_1 \\sin i_1 = n_2 \\sin i_2 \\Rightarrow \\sin i_2 = \\dfrac{1{,}33 \\times 0{,}5}{1{,}50} \\approx 0{,}443$.<br>$i_2 \\approx 26°$ (le rayon se rapproche de la normale : $n_2 > n_1$).` },
      ]
    },
    {
      titre: 'Lentilles minces',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Lentilles minces — vocabulaire',
          contenu: `Une <strong>lentille mince</strong> a deux surfaces sphériques (ou une plane) très proches.<br><strong>Convergente</strong> (biconvexe) : fait converger les rayons. Foyer image $F'$ est réel (après la lentille).<br><strong>Divergente</strong> (biconcave) : fait diverger les rayons. Foyer image $F'$ est virtuel (avant la lentille).<br>Centre optique $O$ : au milieu. Axe optique : axe de symétrie.` },
        { type: 'form', label: 'FORM', titre: 'Formule de conjugaison et vergence',
          contenu: `<strong>Formule de conjugaison</strong> (avec origine au centre $O$) :<br>$$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'}$$<br>$\\overline{OA}$ : position algébrique de l'objet, $\\overline{OA'}$ : image, $f'$ : distance focale.<br><strong>Vergence</strong> : $V = \\dfrac{1}{f'}$ en dioptries (D), $f'$ en mètres.<br>Convergente : $f' > 0$, $V > 0$. Divergente : $f' < 0$, $V < 0$.` },
        { type: 'def', label: 'DEF', titre: 'Grandissement transversal',
          contenu: `Le <strong>grandissement algébrique</strong> est :<br>$$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$<br>$|\\gamma| > 1$ : image plus grande que l'objet.<br>$|\\gamma| < 1$ : image plus petite.<br>$\\gamma > 0$ : image droite. $\\gamma < 0$ : image renversée.<br>Exemple : $\\gamma = -2$ signifie image renversée et deux fois plus grande.` },
        { type: 'meth', label: 'METH', titre: 'Construction géométrique d\'une image',
          contenu: `<strong>Trois rayons constructeurs</strong> (lentille convergente de centre $O$, foyers $F$ et $F'$) :<br>1. Rayon passant par $O$ : non dévié.<br>2. Rayon parallèle à l'axe : passe par $F'$ après la lentille.<br>3. Rayon passant par $F$ : ressort parallèle à l'axe.<br>L'image est à l'intersection de deux rayons quelconques. Si divergente, prolonger les rayons vers l'avant.` },
      ]
    },
    {
      titre: 'Instruments d\'optique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'L\'œil et la vision',
          contenu: `L'<strong>œil</strong> est modélisé par une lentille convergente de vergence variable (accommodation).<br><strong>Punctum remotum (PR)</strong> : objet le plus loin vu nettement (à l'infini pour un œil normal).<br><strong>Punctum proximum (PP)</strong> : objet le plus proche vu nettement ($25$ cm pour un œil emmétrope).<br>Myopie : $PR$ trop proche. Hypermétropie : accommodation requise même au loin.` },
        { type: 'def', label: 'DEF', titre: 'Loupe',
          contenu: `Une <strong>loupe</strong> est une lentille convergente utilisée avec l'objet entre $F$ et $O$.<br>L'image est virtuelle, droite, agrandie, du même côté que l'objet.<br>Grossissement commercial : $G = d_0/f'$ avec $d_0 = 25$ cm.<br>La loupe grossit les objets et améliore le pouvoir séparateur de l'œil.` },
        { type: 'def', label: 'DEF', titre: 'Microscope',
          contenu: `Le <strong>microscope</strong> associe deux lentilles convergentes :<br>- <strong>Objectif</strong> ($f'_{ob}$ très courte) : donne une image réelle agrandie de l'objet proche.<br>- <strong>Oculaire</strong> (loupe) : examine cette image intermédiaire.<br>Grossissement total : $G_t = G_{ob} \\times G_{oc} = \\dfrac{\\Delta}{f'_{ob}} \\times \\dfrac{d_0}{f'_{oc}}$, où $\\Delta$ = intervalle optique.` },
        { type: 'def', label: 'DEF', titre: 'Lunette et télescope',
          contenu: `La <strong>lunette astronomique</strong> (objectif convergent + oculaire convergent) observe les objets à l'infini.<br>L'objet est au foyer objet de l'objectif = foyer image de l'oculaire (image finale à l'infini).<br>Grossissement : $G = f'_{ob}/f'_{oc}$.<br>Le <strong>télescope</strong> remplace l'objectif par un miroir parabolique concave (pas d'aberration chromatique).` },
      ]
    },
    {
      titre: 'Prisme et dispersion',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Prisme — déviation',
          contenu: `Un prisme d'angle au sommet $A$ et d'indice $n$ dévie un rayon lumineux.<br>Angle de déviation : $D = i_1 + i_2 - A$.<br>Relations : $r_1 + r_2 = A$, $n\\sin r_1 = \\sin i_1$, $n\\sin r_2 = \\sin i_2$.<br>La déviation dépend de la longueur d'onde (dispersion) : le violet est plus dévié que le rouge.` },
        { type: 'def', label: 'DEF', titre: 'Minimum de déviation',
          contenu: `Le <strong>minimum de déviation</strong> $D_m$ est atteint quand le rayon traverse le prisme symétriquement ($i_1 = i_2$, $r_1 = r_2 = A/2$).<br>$$n = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$$<br>Cette formule permet de mesurer précisément l'indice $n$ d'un matériau.` },
        { type: 'prop', label: 'PROP', titre: 'Dispersion et spectres',
          contenu: `La dispersion d'un prisme sépare les couleurs car $n$ dépend de $\\lambda$ (plus grand pour les petites longueurs d'onde).<br>Spectre visible : $\\lambda \\approx 400$ nm (violet) à $800$ nm (rouge).<br>Applications : spectroscopie, mesure de composition chimique, identification d'éléments par leurs raies d'émission.<br>Réseau de diffraction : alternative moderne au prisme.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : lentille — formation d\'image',
          contenu: `Lentille convergente $f' = 10$ cm. Objet à $\\overline{OA} = -15$ cm.<br>$\\dfrac{1}{\\overline{OA'}} = \\dfrac{1}{f'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{10} + \\dfrac{1}{-15} = \\dfrac{3-2}{30} = \\dfrac{1}{30}$.<br>$\\overline{OA'} = 30$ cm (image réelle, au-delà de $F'$).<br>$\\gamma = \\dfrac{30}{-15} = -2$ (renversée, deux fois plus grande).` },
      ]
    },
  ]
},

{
  id: 'phch-tg-chimie', filiere: 'term-gen', matiere: 'phch',
  titre: 'Chimie — équilibres et synthèse', ordre: 4, enrich: false,
  sections: [
    {
      titre: 'Équilibre chimique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réaction réversible et équilibre',
          contenu: `Une réaction est <strong>réversible</strong> si elle peut se produire dans les deux sens : $A + B \\rightleftharpoons C + D$.<br>L'<strong>équilibre chimique</strong> est l'état où les vitesses des réactions directe et inverse sont égales : les concentrations des espèces sont constantes (mais non nulles).<br>Le symbole $\\rightleftharpoons$ indique un équilibre. Le signe $\\to$ indique une réaction totale.` },
        { type: 'def', label: 'DEF', titre: 'Constante d\'équilibre $K_c$',
          contenu: `Pour $aA + bB \\rightleftharpoons cC + dD$ à l'équilibre :<br>$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$<br>$K_c$ ne dépend que de la <strong>température</strong> (pas des concentrations initiales).<br>$K_c$ grand ($\\gg 1$) : équilibre déplacé vers les produits.<br>$K_c$ petit ($\\ll 1$) : équilibre déplacé vers les réactifs.` },
        { type: 'def', label: 'DEF', titre: 'Quotient de réaction $Q_r$',
          contenu: `Le <strong>quotient de réaction</strong> a la même expression que $K_c$ mais hors équilibre.<br>Comparaison avec $K_c$ :<br>- $Q_r < K_c$ : la réaction évolue dans le <strong>sens direct</strong> (formation de produits).<br>- $Q_r > K_c$ : la réaction évolue dans le <strong>sens inverse</strong>.<br>- $Q_r = K_c$ : le système est à <strong>l'équilibre</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Taux d\'avancement',
          contenu: `Le <strong>taux d'avancement</strong> à l'équilibre est :<br>$$\\tau = \\frac{x_{\\text{éq}}}{x_{\\text{max}}}$$<br>$x_{\\text{éq}}$ : avancement à l'équilibre. $x_{\\text{max}}$ : avancement maximal (réaction totale).<br>$\\tau \\in [0, 1]$ : $\\tau = 1$ pour une réaction totale, $\\tau \\approx 0$ pour une réaction quasi-inexistante.<br>Lié à $K_c$ : plus $K_c$ est grand, plus $\\tau$ est proche de $1$.` },
      ]
    },
    {
      titre: 'Principe de Le Chatelier',
      cartes: [
        { type: 'thm', label: 'THM', titre: 'Principe de Le Chatelier',
          contenu: `Si un système à l'équilibre est soumis à une perturbation extérieure, il évolue de façon à <strong>minimiser l'effet de cette perturbation</strong>.<br>Perturbations possibles :<br>- Ajout d'un réactif : équilibre se déplace vers les produits.<br>- Augmentation de pression : équilibre favorise le côté avec moins de moles gazeuses.<br>- Augmentation de température : équilibre favorise la réaction endothermique.` },
        { type: 'meth', label: 'METH', titre: 'Appliquer Le Chatelier',
          contenu: `<strong>Méthode</strong> :<br>1. Identifier la perturbation (concentration, pression, température).<br>2. Déterminer dans quel sens l'équilibre doit se déplacer pour contrecarrer.<br>3. Conclure sur l'évolution des concentrations.<br>Exemples : $\\mathrm{N_2 + 3H_2 \\rightleftharpoons 2NH_3}$ ($\\Delta H < 0$) : haute pression et basse température favorisent $\\mathrm{NH_3}$ (procédé Haber).` },
        { type: 'prop', label: 'PROP', titre: 'Effet de la température sur $K_c$',
          contenu: `Le Chatelier s'applique aussi à $K_c$ :<br>- Réaction exothermique ($\\Delta H < 0$) : augmenter $T$ déplace l'équilibre vers les réactifs $\\Rightarrow$ $K_c$ diminue.<br>- Réaction endothermique ($\\Delta H > 0$) : augmenter $T$ déplace vers les produits $\\Rightarrow$ $K_c$ augmente.<br>Loi de Van't Hoff : $\\ln K_c \\propto -\\Delta H / (RT)$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : état d\'équilibre',
          contenu: `$\\mathrm{H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)}$ à 500°C avec $K_c = 50$.<br>Concentrations initiales : $[H_2]_0 = [I_2]_0 = 1$ mol/L, $[HI]_0 = 0$.<br>$Q_r = 0 < K_c$ : réaction dans le sens direct.<br>À l'équilibre : $[HI] = 2x$, $[H_2] = [I_2] = 1-x$. $K_c = \\dfrac{4x^2}{(1-x)^2} = 50$.<br>$\\dfrac{2x}{1-x} = \\sqrt{50} \\approx 7{,}07 \\Rightarrow x \\approx 0{,}78$. Taux : $\\tau = x/1 = 78\\%$.` },
      ]
    },
    {
      titre: 'Synthèse organique',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Stratégie de synthèse',
          contenu: `Une <strong>synthèse organique</strong> transforme des réactifs en un produit cible par une ou plusieurs étapes.<br>Critères de choix : sélectivité, rendement, sécurité, coût, impact environnemental (chimie verte).<br><strong>Rétrosynthèse</strong> : partir du produit souhaité et remonter vers des réactifs disponibles.<br>Étapes clés : protection des groupes fonctionnels sensibles, réactions en séquence.` },
        { type: 'def', label: 'DEF', titre: 'Rendement d\'une synthèse',
          contenu: `Le <strong>rendement</strong> d'une synthèse est :<br>$$\\eta = \\frac{n_{\\text{obtenu}}}{n_{\\text{théorique}}} \\times 100\\%$$<br>$n_{\\text{théorique}}$ est calculé à partir du réactif limitant (si réaction totale).<br>En synthèse multi-étapes : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots$.<br>Un faible rendement peut être dû à des réactions parasites, une purification incomplète, ou des pertes lors du traitement.` },
        { type: 'def', label: 'DEF', titre: 'Techniques de purification',
          contenu: `<strong>Recristallisation</strong> : dissoudre à chaud dans un solvant, refroidir pour faire cristalliser le produit pur. Séparation par filtration.<br><strong>Distillation</strong> : séparer par différences de températures d'ébullition. Distillation fractionnée pour des mélanges proches.<br><strong>Extraction par solvant</strong> : utiliser deux solvants non miscibles (ampoule à décanter). Le produit se partage selon sa solubilité.` },
        { type: 'def', label: 'DEF', titre: 'Chromatographie sur couche mince (CCM)',
          contenu: `La <strong>CCM</strong> permet d'identifier et de vérifier la pureté d'un produit.<br>Phase stationnaire (silice) et phase mobile (éluant).<br>$R_f = \\dfrac{\\text{distance migrée par le produit}}{\\text{distance migrée par le solvant}}$.<br>Deux taches identiques sur la même plaque suggèrent que les substances sont identiques.<br>Après synthèse : la disparition de la tache du réactif et l'apparition de la tache du produit confirment l'avancement de la réaction.` },
      ]
    },
    {
      titre: 'Acides et bases — rappels et approfondissements',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Théorie de Brønsted',
          contenu: `Un <strong>acide de Brønsted</strong> est un donneur de proton $H^+$. Une <strong>base de Brønsted</strong> est un accepteur de proton.<br>Couple acide/base conjugué : $\\mathrm{AH \\rightleftharpoons A^- + H^+}$.<br>Exemples : $\\mathrm{CH_3COOH/CH_3COO^-}$, $\\mathrm{NH_4^+/NH_3}$, $\\mathrm{H_2O/OH^-}$.<br>L'eau est amphotère (acide ou base selon le partenaire).` },
        { type: 'def', label: 'DEF', titre: 'pH et constante d\'acidité $Ka$',
          contenu: `$\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$, $[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$.<br>Constante d'acidité : $K_a = \\dfrac{[\\mathrm{A^-}][\\mathrm{H_3O^+}]}{[\\mathrm{AH}]}$.<br>$\\mathrm{p}K_a = -\\log K_a$. Si $\\mathrm{pH} = \\mathrm{p}K_a$ : $[\\mathrm{AH}] = [\\mathrm{A^-}]$ (demi-neutralisation).<br>Acide fort ($K_a \\to \\infty$) : dissociation totale. Acide faible ($K_a$ petit) : dissociation partielle.` },
        { type: 'meth', label: 'METH', titre: 'Calculer le pH d\'une solution tampon',
          contenu: `<strong>Solution tampon</strong> : mélange acide faible + base conjuguée (même $pK_a$).<br>Formule d'Henderson-Hasselbalch :<br>$$\\mathrm{pH} = \\mathrm{p}K_a + \\log\\frac{[\\mathrm{A^-}]}{[\\mathrm{AH}]}$$<br>Le pH varie peu lors d'ajout modéré d'acide ou de base.<br>Zone tampon efficace : $\\mathrm{p}K_a \\pm 1$.` },
        { type: 'exo', label: 'EXO', titre: 'Exercice type : titrage pH-métrique',
          contenu: `On titre $V_A = 20$ mL d'acide acétique ($C_A = 0{,}1$ mol/L) par NaOH $C_B = 0{,}1$ mol/L.<br>Volume équivalent : $V_{Beq} = C_A V_A / C_B = 20$ mL.<br>À la demi-équivalence ($V_B = 10$ mL) : $\\mathrm{pH} = \\mathrm{p}K_a(\\mathrm{CH_3COOH}) = 4{,}75$.<br>Au point d'équivalence : solution d'acétate de sodium (base faible) : $\\mathrm{pH} > 7$.` },
      ]
    },
  ]
},

];
