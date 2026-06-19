// Seconde générale — Mathématiques
// Programme officiel MEN (réforme 2019)
// Fiches de révision rigoureuses — Admiscible

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. ENSEMBLES DE NOMBRES ET INTERVALLES (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-ens', filiere: '2nde', matiere: 'ma',
  titre: 'Ensembles de nombres et intervalles', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Les ensembles de nombres',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Les cinq ensembles fondamentaux',
          contenu: `On distingue, par inclusions croissantes :<br><strong>$\\mathbb{N}$</strong> entiers naturels : $0, 1, 2, 3, \\dots$<br><strong>$\\mathbb{Z}$</strong> entiers relatifs : $\\dots, -2, -1, 0, 1, 2, \\dots$<br><strong>$\\mathbb{D}$</strong> décimaux : quotients $\\dfrac{a}{10^n}$ avec $a \\in \\mathbb{Z}$, $n \\in \\mathbb{N}$.<br><strong>$\\mathbb{Q}$</strong> rationnels : quotients $\\dfrac{p}{q}$ avec $p \\in \\mathbb{Z}$, $q \\in \\mathbb{Z}^*$.<br><strong>$\\mathbb{R}$</strong> réels : tous les nombres de la droite graduée.` },
        { type: 'prop', label: 'PROP', titre: 'Chaîne d\'inclusions',
          contenu: `On a la chaîne stricte :<br>$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$<br>Chaque inclusion est <strong>stricte</strong> : il existe un élément du plus grand qui n'est pas dans le plus petit.<br>Exemples : $-3 \\in \\mathbb{Z}$ mais $-3 \\notin \\mathbb{N}$ ; $0{,}5 = \\tfrac{1}{2} \\in \\mathbb{D}$ mais $\\notin \\mathbb{Z}$ ; $\\tfrac{1}{3} \\in \\mathbb{Q}$ mais $\\notin \\mathbb{D}$ ; $\\sqrt{2} \\in \\mathbb{R}$ mais $\\notin \\mathbb{Q}$.` },
        { type: 'th', label: 'THM', titre: 'Irrationalité de $\\sqrt{2}$',
          contenu: `<strong>Théorème</strong> : $\\sqrt{2}$ n'est pas un nombre rationnel.<br><strong>Preuve (par l'absurde)</strong> : supposons $\\sqrt{2} = \\dfrac{p}{q}$ fraction irréductible. Alors $p^2 = 2q^2$, donc $p^2$ est pair, donc $p$ est pair : $p = 2k$. D'où $4k^2 = 2q^2$, soit $q^2 = 2k^2$, donc $q$ est pair. Or $p$ et $q$ pairs contredisent l'irréductibilité. Donc $\\sqrt{2} \\notin \\mathbb{Q}$.` },
        { type: 'ex', label: 'EX', titre: 'Appartenance à un ensemble',
          contenu: `<strong>Énoncé</strong> : à quel(s) ensemble(s) appartient $\\dfrac{12}{4}$ ? Et $\\dfrac{7}{2}$ ? Et $\\pi$ ?<br><strong>Solution</strong> :<br>$\\dfrac{12}{4} = 3 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.<br>$\\dfrac{7}{2} = 3{,}5 \\in \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ mais $\\notin \\mathbb{Z}$.<br>$\\pi \\in \\mathbb{R}$ seulement (irrationnel).` },
      ]
    },
    {
      titre: 'Les intervalles de $\\mathbb{R}$',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Intervalles bornés',
          contenu: `Pour $a \\le b$ :<br>$[a;b] = \\lbrace x \\in \\mathbb{R}\\ :\\ a \\le x \\le b \\rbrace$ (fermé).<br>$]a;b[ = \\lbrace x\\ :\\ a < x < b \\rbrace$ (ouvert).<br>$[a;b[ = \\lbrace x\\ :\\ a \\le x < b \\rbrace$, $]a;b] = \\lbrace x\\ :\\ a < x \\le b \\rbrace$ (semi-ouverts).<br>Le crochet <strong>vers le nombre</strong> $[$ inclut la borne ; le crochet <strong>tourné vers l'extérieur</strong> $]$ l'exclut.` },
        { type: 'def', label: 'DEF', titre: 'Intervalles non bornés',
          contenu: `Avec le symbole $\\infty$ (toujours côté crochet ouvert) :<br>$[a;+\\infty[ = \\lbrace x\\ :\\ x \\ge a \\rbrace$<br>$]a;+\\infty[ = \\lbrace x\\ :\\ x > a \\rbrace$<br>$]-\\infty;b] = \\lbrace x\\ :\\ x \\le b \\rbrace$<br>$]-\\infty;b[ = \\lbrace x\\ :\\ x < b \\rbrace$<br>Enfin $]-\\infty;+\\infty[ = \\mathbb{R}$.` },
        { type: 'def', label: 'DEF', titre: 'Réunion et intersection',
          contenu: `L'<strong>intersection</strong> $A \\cap B$ : les éléments communs à $A$ <em>et</em> $B$.<br>La <strong>réunion</strong> $A \\cup B$ : les éléments de $A$ <em>ou</em> $B$ (au moins l'un).<br>Exemples :<br>$[2;7] \\cap [5;9] = [5;7]$.<br>$]-\\infty;3] \\cup [1;+\\infty[ = \\mathbb{R}$ (les deux se recouvrent).<br>$[0;2] \\cap [5;6] = \\varnothing$ (disjoints).` },
        { type: 'meth', label: 'METH', titre: 'Traduire une condition en intervalle',
          contenu: `<strong>Méthode</strong> : placer les bornes sur un axe, hachurer la zone décrite, lire l'intervalle.<br>« $x$ compris entre $-1$ inclus et $4$ exclu » $\\Rightarrow x \\in [-1;4[$.<br>« $x$ strictement supérieur à $3$ » $\\Rightarrow x \\in ]3;+\\infty[$.<br>« $x \\le -2$ ou $x \\ge 5$ » $\\Rightarrow x \\in ]-\\infty;-2] \\cup [5;+\\infty[$.` },
        { type: 'ex', label: 'EX', titre: 'Réunion et intersection d\'intervalles',
          contenu: `<strong>Énoncé</strong> : déterminer $A \\cap B$ et $A \\cup B$ pour $A = ]-3;4]$ et $B = [1;+\\infty[$.<br><strong>Solution</strong> : sur un axe, $A$ va de $-3$ (exclu) à $4$ (inclus), $B$ de $1$ (inclus) à l'infini.<br>Zone commune : $A \\cap B = [1;4]$.<br>Zone totale : $A \\cup B = ]-3;+\\infty[$.` },
      ]
    },
    {
      titre: 'Valeur absolue et distance',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Valeur absolue',
          contenu: `La <strong>valeur absolue</strong> de $x$ est :<br>$$|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$<br>$|x|$ est toujours positif ou nul. Elle représente la <strong>distance de $x$ à $0$</strong> sur la droite réelle.<br>Exemples : $|5| = 5$, $|-3| = 3$, $|0| = 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Distance entre deux réels',
          contenu: `La <strong>distance</strong> entre $a$ et $b$ est $d(a;b) = |b - a| = |a - b|$.<br>Propriétés : $|x| \\ge 0$ ; $|x| = 0 \\Leftrightarrow x = 0$ ; $|-x| = |x|$ ; $|x|^2 = x^2$ donc $\\sqrt{x^2} = |x|$.<br>Exemple : $d(-2;3) = |3 - (-2)| = 5$.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre $|x - a| \\le r$',
          contenu: `$|x - a| \\le r$ signifie « la distance de $x$ à $a$ est au plus $r$ », donc :<br>$$|x - a| \\le r \\iff a - r \\le x \\le a + r \\iff x \\in [a-r;a+r]$$<br>Exemple : $|x - 3| \\le 2 \\iff 1 \\le x \\le 5 \\iff x \\in [1;5]$.<br>De même $|x - a| \\ge r \\iff x \\le a-r$ ou $x \\ge a+r$.` },
        { type: 'ex', label: 'EX', titre: 'Intervalle centré et valeur absolue',
          contenu: `<strong>Énoncé</strong> : écrire $x \\in [-1;7]$ à l'aide d'une valeur absolue.<br><strong>Solution</strong> : le centre est $c = \\dfrac{-1+7}{2} = 3$, le rayon $r = \\dfrac{7-(-1)}{2} = 4$.<br>Donc $x \\in [-1;7] \\iff |x - 3| \\le 4$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. CALCUL NUMÉRIQUE ET ALGÉBRIQUE (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-calc', filiere: '2nde', matiere: 'ma',
  titre: 'Calcul numérique et algébrique', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Puissances',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Puissances entières',
          contenu: `Pour $a \\ne 0$ et $n \\in \\mathbb{N}^*$ :<br>$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ facteurs}}$, $a^0 = 1$, $a^{-n} = \\dfrac{1}{a^n}$.<br>Exemples : $2^3 = 8$, $5^0 = 1$, $10^{-2} = \\dfrac{1}{100} = 0{,}01$.<br>Attention : $-3^2 = -9$ (la puissance prime sur le signe) alors que $(-3)^2 = 9$.` },
        { type: 'form', label: 'FORM', titre: 'Règles de calcul sur les puissances',
          contenu: `Pour $a, b \\ne 0$ et $m, n \\in \\mathbb{Z}$ :<br>$$a^m \\times a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n} \\qquad (a^m)^n = a^{mn}$$<br>$$(ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$<br><strong>Piège</strong> : $a^m + a^n$ ne se simplifie pas, et $(a+b)^n \\ne a^n + b^n$.` },
        { type: 'meth', label: 'METH', titre: 'Notation scientifique',
          contenu: `Tout décimal s'écrit $a \\times 10^n$ avec $1 \\le |a| < 10$ et $n \\in \\mathbb{Z}$.<br><strong>Méthode</strong> : déplacer la virgule jusqu'à un seul chiffre non nul avant elle ; $n$ = nombre de décalages (positif si on recule, négatif si on avance).<br>Exemples : $34\\,500 = 3{,}45 \\times 10^4$ ; $0{,}000\\,72 = 7{,}2 \\times 10^{-4}$.` },
        { type: 'ex', label: 'EX', titre: 'Simplifier une expression à puissances',
          contenu: `<strong>Énoncé</strong> : simplifier $A = \\dfrac{2^5 \\times 2^{-2}}{2^3}$ et $B = \\dfrac{(3 \\times 10^{4}) \\times (2 \\times 10^{-7})}{6 \\times 10^{-2}}$.<br><strong>Solution</strong> :<br>$A = 2^{5-2-3} = 2^0 = 1$.<br>$B = \\dfrac{3 \\times 2}{6} \\times 10^{4-7-(-2)} = 1 \\times 10^{-1} = 0{,}1$.` },
      ]
    },
    {
      titre: 'Racines carrées',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Racine carrée',
          contenu: `Pour $a \\ge 0$, $\\sqrt{a}$ est l'<strong>unique réel positif</strong> dont le carré vaut $a$ : $(\\sqrt{a})^2 = a$ et $\\sqrt{a} \\ge 0$.<br>$\\sqrt{a}$ n'existe <strong>que pour $a \\ge 0$</strong>.<br>Important : $\\sqrt{x^2} = |x|$ (et non $x$). Ainsi $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$.` },
        { type: 'form', label: 'FORM', titre: 'Règles sur les racines',
          contenu: `Pour $a \\ge 0$ et $b \\ge 0$ :<br>$$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab} \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}\\ (b>0)$$<br><strong>Piège majeur</strong> : en général $\\sqrt{a+b} \\ne \\sqrt{a} + \\sqrt{b}$.<br>Contre-exemple : $\\sqrt{9+16} = \\sqrt{25} = 5 \\ne \\sqrt{9}+\\sqrt{16} = 3+4 = 7$.` },
        { type: 'meth', label: 'METH', titre: 'Simplifier et rendre rationnel',
          contenu: `<strong>Simplifier $\\sqrt{n}$</strong> : extraire les carrés parfaits. $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.<br><strong>Rendre rationnel un dénominateur</strong> : multiplier par la quantité conjuguée.<br>$\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$ ; $\\dfrac{1}{\\sqrt{5}-1} = \\dfrac{\\sqrt{5}+1}{(\\sqrt{5}-1)(\\sqrt{5}+1)} = \\dfrac{\\sqrt{5}+1}{4}$.` },
        { type: 'ex', label: 'EX', titre: 'Calcul avec radicaux',
          contenu: `<strong>Énoncé</strong> : écrire $A = \\sqrt{50} - 3\\sqrt{8} + \\sqrt{18}$ sous la forme $k\\sqrt{2}$.<br><strong>Solution</strong> : $\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{8} = 2\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$.<br>$A = 5\\sqrt{2} - 3 \\times 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2} - 6\\sqrt{2} + 3\\sqrt{2} = 2\\sqrt{2}$.` },
      ]
    },
    {
      titre: 'Calcul littéral et identités remarquables',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Les trois identités remarquables',
          contenu: `$$(a+b)^2 = a^2 + 2ab + b^2$$<br>$$(a-b)^2 = a^2 - 2ab + b^2$$<br>$$(a+b)(a-b) = a^2 - b^2$$<br>Elles se lisent dans les <strong>deux sens</strong> : de gauche à droite pour <em>développer</em>, de droite à gauche pour <em>factoriser</em>.` },
        { type: 'meth', label: 'METH', titre: 'Développer et réduire',
          contenu: `<strong>Distributivité simple</strong> : $k(a+b) = ka + kb$.<br><strong>Double distributivité</strong> : $(a+b)(c+d) = ac + ad + bc + bd$.<br><strong>Réduire</strong> : regrouper les termes de même degré.<br>Exemple : $(2x+3)(x-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.` },
        { type: 'meth', label: 'METH', titre: 'Factoriser une expression',
          contenu: `<strong>Trois techniques</strong> :<br>1. <strong>Facteur commun</strong> : $6x^2 + 9x = 3x(2x+3)$.<br>2. <strong>Identité remarquable</strong> : $x^2 - 25 = (x-5)(x+5)$ ; $x^2 + 6x + 9 = (x+3)^2$.<br>3. <strong>Facteur commun caché</strong> : $(x+1)(x-2) + (x+1)(3x) = (x+1)(4x-2)$.<br>But : transformer une somme en produit (utile pour les équations).` },
        { type: 'ex', label: 'EX', titre: 'Factorisation mixte',
          contenu: `<strong>Énoncé</strong> : factoriser $E = (2x-1)^2 - 9$.<br><strong>Solution</strong> : on reconnaît $A^2 - B^2$ avec $A = 2x-1$ et $B = 3$.<br>$E = (2x-1-3)(2x-1+3) = (2x-4)(2x+2) = 4(x-2)(x+1)$.` },
      ]
    },
    {
      titre: 'Fractions et proportions',
      cartes: [
        { type: 'form', label: 'FORM', titre: 'Opérations sur les fractions',
          contenu: `Pour $b, d \\ne 0$ :<br>$$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\qquad \\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$$<br>$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}\\quad (c \\ne 0)$$<br>Toujours <strong>simplifier</strong> le résultat (diviser par le PGCD).` },
        { type: 'def', label: 'DEF', titre: 'Pourcentage et coefficient multiplicateur',
          contenu: `Augmenter de $t\\%$ revient à multiplier par $1 + \\dfrac{t}{100}$.<br>Diminuer de $t\\%$ revient à multiplier par $1 - \\dfrac{t}{100}$.<br>Exemple : une hausse de $20\\%$ puis une baisse de $20\\%$ donne $\\times 1{,}2 \\times 0{,}8 = \\times 0{,}96$, soit une <strong>baisse globale de $4\\%$</strong> (et non un retour au départ).` },
        { type: 'ex', label: 'EX', titre: 'Évolutions successives',
          contenu: `<strong>Énoncé</strong> : un prix de $80$ € augmente de $15\\%$ puis baisse de $10\\%$. Prix final ?<br><strong>Solution</strong> : coefficient global $= 1{,}15 \\times 0{,}90 = 1{,}035$.<br>Prix final $= 80 \\times 1{,}035 = 82{,}80$ €, soit une hausse globale de $3{,}5\\%$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. ÉQUATIONS ET INÉQUATIONS (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-eq', filiere: '2nde', matiere: 'ma',
  titre: 'Équations et inéquations', ordre: 3, enrich: false,
  sections: [
    {
      titre: 'Équations du premier degré',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Équation et solution',
          contenu: `Une <strong>équation</strong> d'inconnue $x$ est une égalité à vérifier. Une <strong>solution</strong> est une valeur de $x$ rendant l'égalité vraie. <strong>Résoudre</strong> = trouver toutes les solutions.<br>On garde l'équilibre en faisant la même opération des deux côtés (ajouter, soustraire, multiplier ou diviser par un nombre non nul).` },
        { type: 'meth', label: 'METH', titre: 'Résoudre $ax + b = cx + d$',
          contenu: `<strong>Étapes</strong> :<br>1. Regrouper les $x$ d'un côté, les constantes de l'autre.<br>2. Réduire.<br>3. Diviser par le coefficient de $x$ (s'il est $\\ne 0$).<br>Exemple : $3x + 5 = x - 7 \\Rightarrow 2x = -12 \\Rightarrow x = -6$.<br>$S = \\lbrace -6 \\rbrace$.` },
        { type: 'ex', label: 'EX', titre: 'Mise en équation d\'un problème',
          contenu: `<strong>Énoncé</strong> : Paul a le triple de l'âge de Léa. Dans $5$ ans, il aura le double. Quel est l'âge de Léa ?<br><strong>Solution</strong> : soit $x$ l'âge de Léa. Paul a $3x$. Dans $5$ ans : $3x + 5 = 2(x+5)$.<br>$3x + 5 = 2x + 10 \\Rightarrow x = 5$. Léa a $5$ ans, Paul $15$ ans.` },
      ]
    },
    {
      titre: 'Équations produit et quotient',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Théorème du produit nul',
          contenu: `Un produit de facteurs est nul <strong>si et seulement si</strong> au moins l'un des facteurs est nul :<br>$$A \\times B = 0 \\iff A = 0 \\ \\text{ou} \\ B = 0$$<br>C'est l'outil central pour résoudre les équations factorisées.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre une équation produit',
          contenu: `<strong>Étapes</strong> :<br>1. Tout passer du même côté pour avoir $\\dots = 0$.<br>2. <strong>Factoriser</strong> le membre de gauche.<br>3. Appliquer le théorème du produit nul.<br>Exemple : $x^2 = 4x \\Rightarrow x^2 - 4x = 0 \\Rightarrow x(x-4) = 0 \\Rightarrow x = 0$ ou $x = 4$. $S = \\lbrace 0;4 \\rbrace$.` },
        { type: 'meth', label: 'METH', titre: 'Équation quotient',
          contenu: `Une fraction est nulle ssi son <strong>numérateur est nul</strong> et son dénominateur non nul :<br>$$\\frac{A}{B} = 0 \\iff A = 0 \\ \\text{et} \\ B \\ne 0$$<br>Toujours déterminer d'abord les valeurs interdites (annulant $B$).<br>Exemple : $\\dfrac{x-3}{x+1} = 0$. Valeur interdite : $x = -1$. Numérateur nul : $x = 3$. $S = \\lbrace 3 \\rbrace$.` },
        { type: 'ex', label: 'EX', titre: 'Équation produit à factoriser',
          contenu: `<strong>Énoncé</strong> : résoudre $(2x-6)(x+1) = (2x-6)(3x)$.<br><strong>Solution</strong> : tout à gauche : $(2x-6)\\big[(x+1)-3x\\big] = 0$, soit $(2x-6)(1-2x) = 0$.<br>$2x-6 = 0 \\Rightarrow x = 3$ ; $1-2x = 0 \\Rightarrow x = \\tfrac{1}{2}$. $S = \\lbrace 3 ; \\tfrac{1}{2} \\rbrace$.` },
      ]
    },
    {
      titre: 'Inéquations et tableaux de signes',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Règle de l\'inégalité',
          contenu: `On peut ajouter ou soustraire un même nombre aux deux membres sans changer le sens.<br>On peut multiplier ou diviser par un nombre <strong>strictement positif</strong> sans changer le sens.<br><strong>Multiplier ou diviser par un nombre strictement négatif INVERSE le sens</strong> de l'inégalité.<br>Exemple : $-2x < 6 \\Rightarrow x > -3$.` },
        { type: 'meth', label: 'METH', titre: 'Signe d\'une expression affine $ax+b$',
          contenu: `$ax+b$ s'annule en $x = -\\dfrac{b}{a}$.<br>Si $a > 0$ : négatif avant, positif après (signe de $a$ « après le zéro »).<br>Si $a < 0$ : positif avant, négatif après.<br>Mémo : <strong>du signe de $-a$ avant la racine, du signe de $a$ après</strong>.` },
        { type: 'meth', label: 'METH', titre: 'Tableau de signes d\'un produit',
          contenu: `<strong>Étapes</strong> :<br>1. Trouver les valeurs annulant chaque facteur.<br>2. Les ranger dans l'ordre croissant sur la première ligne.<br>3. Étudier le signe de chaque facteur, ligne par ligne.<br>4. Multiplier les signes colonne par colonne (règle des signes).<br>Ce tableau résout les inéquations $\\text{produit} \\ge 0$ ou $\\le 0$.` },
        { type: 'ex', label: 'EX', titre: 'Résoudre une inéquation produit',
          contenu: `<strong>Énoncé</strong> : résoudre $(x-2)(3-x) > 0$.<br><strong>Solution</strong> : racines $x = 2$ et $x = 3$.<br>$x-2$ : $-$ jusqu'à $2$, puis $+$. $3-x$ : $+$ jusqu'à $3$, puis $-$.<br>Le produit est $+$ uniquement entre $2$ et $3$ : $S = \\ ]2;3[$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. FONCTIONS : GÉNÉRALITÉS ET RÉFÉRENCE (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-fonc', filiere: '2nde', matiere: 'ma',
  titre: 'Fonctions : généralités et fonctions de référence', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Généralités sur les fonctions',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction, image, antécédent',
          contenu: `Une <strong>fonction</strong> $f$ associe à chaque réel $x$ d'un ensemble $D$ (domaine) un unique réel $f(x)$.<br>$f(x)$ est l'<strong>image</strong> de $x$ ; tout $x$ tel que $f(x) = y$ est un <strong>antécédent</strong> de $y$.<br>Un réel a au plus une image, mais un réel peut avoir <strong>plusieurs antécédents ou aucun</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Domaine de définition',
          contenu: `Le <strong>domaine de définition</strong> $D_f$ est l'ensemble des $x$ pour lesquels $f(x)$ existe.<br>Contraintes usuelles :<br>– pas de division par $0$ ;<br>– pas de racine carrée d'un nombre négatif.<br>Exemple : $f(x) = \\dfrac{1}{x-2}$ a pour domaine $D_f = \\mathbb{R} \\setminus \\lbrace 2 \\rbrace$.` },
        { type: 'meth', label: 'METH', titre: 'Lire un graphique',
          contenu: `<strong>Image de $a$</strong> : se placer en $x = a$, monter/descendre jusqu'à la courbe, lire l'ordonnée.<br><strong>Antécédent(s) de $b$</strong> : tracer la droite horizontale $y = b$, lire les abscisses des points d'intersection avec la courbe.<br><strong>Résoudre $f(x) = b$</strong> graphiquement = chercher ces antécédents.` },
        { type: 'ex', label: 'EX', titre: 'Calcul d\'image et d\'antécédent',
          contenu: `<strong>Énoncé</strong> : soit $f(x) = x^2 - 3$. Calculer $f(-2)$ et les antécédents de $1$.<br><strong>Solution</strong> : $f(-2) = (-2)^2 - 3 = 1$.<br>Antécédents de $1$ : $x^2 - 3 = 1 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$ ou $x = -2$. Deux antécédents.` },
      ]
    },
    {
      titre: 'Variations et extremums',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction croissante, décroissante',
          contenu: `$f$ est <strong>croissante</strong> sur $I$ si elle conserve l'ordre : pour tous $a, b \\in I$, $a \\le b \\Rightarrow f(a) \\le f(b)$.<br>$f$ est <strong>décroissante</strong> sur $I$ si elle inverse l'ordre : $a \\le b \\Rightarrow f(a) \\ge f(b)$.<br>« Strictement » avec des inégalités strictes. Une fonction <strong>monotone</strong> garde le même sens de variation sur $I$.` },
        { type: 'def', label: 'DEF', titre: 'Maximum et minimum',
          contenu: `$f$ admet un <strong>maximum</strong> $M$ en $x_0$ sur $I$ si $f(x_0) = M$ et $f(x) \\le M$ pour tout $x \\in I$.<br>De même pour un <strong>minimum</strong> $m$ (avec $f(x) \\ge m$).<br>Un extremum est atteint à un changement de sens de variation. On précise toujours <strong>la valeur</strong> de l'extremum et <strong>où</strong> il est atteint.` },
        { type: 'meth', label: 'METH', titre: 'Lire et dresser un tableau de variations',
          contenu: `Le <strong>tableau de variations</strong> résume le comportement de $f$ :<br>– 1re ligne : les valeurs de $x$ délimitant les intervalles de monotonie ;<br>– 2e ligne : des flèches montantes (croissance) ou descendantes (décroissance) ;<br>– on inscrit les images des bornes au bout des flèches.<br>Les extremums apparaissent aux « sommets » et « creux » des flèches.` },
        { type: 'ex', label: 'EX', titre: 'Comparer des images via les variations',
          contenu: `<strong>Énoncé</strong> : $f$ est croissante sur $[0;10]$. Comparer $f(3)$ et $f(7)$.<br><strong>Solution</strong> : $3 \\le 7$ et $f$ croissante conserve l'ordre, donc $f(3) \\le f(7)$.<br>On peut conclure <strong>sans connaître l'expression</strong> de $f$.` },
      ]
    },
    {
      titre: 'Fonctions carré et inverse',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Fonction carré $x \\mapsto x^2$',
          contenu: `Définie sur $\\mathbb{R}$. Courbe : <strong>parabole</strong> de sommet $O$, symétrique par rapport à l'axe des ordonnées (fonction <strong>paire</strong> : $f(-x) = f(x)$).<br>Variations : <strong>décroissante</strong> sur $]-\\infty;0]$, <strong>croissante</strong> sur $[0;+\\infty[$.<br>Minimum $0$ atteint en $x = 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Fonction inverse $x \\mapsto \\dfrac{1}{x}$',
          contenu: `Définie sur $\\mathbb{R}^* = \\mathbb{R} \\setminus \\lbrace 0 \\rbrace$. Courbe : <strong>hyperbole</strong>, symétrique par rapport à $O$ (fonction <strong>impaire</strong> : $f(-x) = -f(x)$).<br>Variations : <strong>décroissante</strong> sur $]-\\infty;0[$ et <strong>décroissante</strong> sur $]0;+\\infty[$ (mais PAS sur $\\mathbb{R}^*$ entier).<br>Aucun extremum.` },
        { type: 'meth', label: 'METH', titre: 'Résoudre $x^2 = k$ et $x^2 \\le k$',
          contenu: `Pour $k > 0$ : $x^2 = k \\iff x = \\sqrt{k}$ ou $x = -\\sqrt{k}$.<br>$x^2 \\le k \\iff -\\sqrt{k} \\le x \\le \\sqrt{k}$, soit $x \\in [-\\sqrt{k};\\sqrt{k}]$.<br>$x^2 \\ge k \\iff x \\le -\\sqrt{k}$ ou $x \\ge \\sqrt{k}$.<br>Pour $k < 0$ : $x^2 = k$ n'a pas de solution ; $x^2 \\ge k$ est toujours vrai.` },
        { type: 'ex', label: 'EX', titre: 'Inéquation avec la fonction carré',
          contenu: `<strong>Énoncé</strong> : résoudre $x^2 < 9$.<br><strong>Solution</strong> : $x^2 < 9 \\iff -3 < x < 3 \\iff x \\in \\ ]-3;3[$.<br><em>Attention</em> : écrire seulement « $x < 3$ » est faux (oublie les négatifs).` },
      ]
    },
    {
      titre: 'Fonction racine carrée et comparaisons',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Fonction racine carrée $x \\mapsto \\sqrt{x}$',
          contenu: `Définie sur $[0;+\\infty[$. <strong>Croissante</strong> sur tout son domaine.<br>Courbe : demi-parabole d'axe horizontal, passant par $O$ et $(1;1)$.<br>$\\sqrt{0} = 0$, $\\sqrt{x} \\ge 0$ toujours. Minimum $0$ en $x = 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Comparaison de $x$, $x^2$ et $\\sqrt{x}$',
          contenu: `Sur $[0;1]$ : $x^2 \\le x \\le \\sqrt{x}$.<br>Sur $[1;+\\infty[$ : $\\sqrt{x} \\le x \\le x^2$.<br>Le point de bascule est $x = 1$ (où les trois valent $1$), ainsi que $x = 0$.<br>Utile pour encadrer rapidement des expressions.` },
        { type: 'ex', label: 'EX', titre: 'Comparer $\\sqrt{a}$ et $\\sqrt{b}$',
          contenu: `<strong>Énoncé</strong> : comparer $\\sqrt{50}$ et $7$ sans calculatrice.<br><strong>Solution</strong> : $7 = \\sqrt{49}$. Comme $50 > 49$ et $\\sqrt{\\ }$ est croissante, $\\sqrt{50} > \\sqrt{49} = 7$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. FONCTIONS AFFINES ET ÉQUATIONS DE DROITES (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-affine', filiere: '2nde', matiere: 'ma',
  titre: 'Fonctions affines et droites', ordre: 5, enrich: false,
  sections: [
    {
      titre: 'Fonctions affines et linéaires',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Fonction affine',
          contenu: `Une <strong>fonction affine</strong> est de la forme $f(x) = ax + b$, avec $a$ et $b$ réels.<br>$a$ est le <strong>coefficient directeur</strong> (la pente), $b$ l'<strong>ordonnée à l'origine</strong> ($f(0) = b$).<br>Si $b = 0$ : fonction <strong>linéaire</strong> ($f(x) = ax$, passe par $O$). Si $a = 0$ : fonction <strong>constante</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Sens de variation et signe',
          contenu: `$f(x) = ax + b$ est :<br>– <strong>croissante</strong> si $a > 0$ ;<br>– <strong>décroissante</strong> si $a < 0$ ;<br>– <strong>constante</strong> si $a = 0$.<br>Le signe de $f$ : $f$ s'annule en $x = -\\dfrac{b}{a}$ (si $a \\ne 0$), du signe de $-a$ avant, du signe de $a$ après.` },
        { type: 'form', label: 'FORM', titre: 'Calcul du coefficient directeur',
          contenu: `Le taux de variation entre deux points $A(x_A; y_A)$ et $B(x_B; y_B)$ de la droite est :<br>$$a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{\\Delta y}{\\Delta x} \\quad (x_A \\ne x_B)$$<br>Une fonction affine a un taux d'accroissement <strong>constant</strong> : c'est sa caractéristique.` },
        { type: 'ex', label: 'EX', titre: 'Déterminer une fonction affine',
          contenu: `<strong>Énoncé</strong> : trouver $f$ affine telle que $f(1) = 5$ et $f(3) = 11$.<br><strong>Solution</strong> : $a = \\dfrac{11-5}{3-1} = 3$. Puis $f(1) = 3 \\times 1 + b = 5 \\Rightarrow b = 2$.<br>Donc $f(x) = 3x + 2$.` },
      ]
    },
    {
      titre: 'Équations de droites',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Équation réduite d\'une droite',
          contenu: `Toute droite <strong>non verticale</strong> a une équation réduite $y = mx + p$ : $m$ pente, $p$ ordonnée à l'origine.<br>Une droite <strong>verticale</strong> a une équation de la forme $x = c$ (pas de fonction associée).<br>Une droite horizontale : $y = p$ (cas $m = 0$).` },
        { type: 'meth', label: 'METH', titre: 'Trouver l\'équation d\'une droite',
          contenu: `<strong>À partir de deux points</strong> $A$ et $B$ :<br>1. Calculer $m = \\dfrac{y_B - y_A}{x_B - x_A}$.<br>2. Remplacer dans $y = mx + p$ les coordonnées d'un point pour trouver $p$.<br>Exemple : $A(0;3)$, $B(2;7)$. $m = 2$, $p = 3$ (car $A$ sur l'axe). Équation : $y = 2x + 3$.` },
        { type: 'prop', label: 'PROP', titre: 'Droites parallèles',
          contenu: `Deux droites non verticales sont <strong>parallèles</strong> si et seulement si elles ont le <strong>même coefficient directeur</strong> : $m = m'$.<br>Si de plus $p = p'$, elles sont confondues.<br>Deux droites verticales ($x = c$ et $x = c'$) sont toujours parallèles.` },
        { type: 'ex', label: 'EX', titre: 'Intersection de deux droites',
          contenu: `<strong>Énoncé</strong> : où se coupent $d : y = 2x - 1$ et $d' : y = -x + 5$ ?<br><strong>Solution</strong> : $2x - 1 = -x + 5 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, puis $y = 2 \\times 2 - 1 = 3$.<br>Point d'intersection : $(2;3)$.` },
      ]
    },
    {
      titre: 'Résolution graphique et systèmes',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Système de deux équations affines',
          contenu: `Résoudre $\\begin{cases} y = ax + b \\\\ y = cx + d \\end{cases}$ revient à chercher le <strong>point d'intersection</strong> des deux droites.<br><strong>Méthode par substitution</strong> : égaler les deux expressions de $y$, résoudre en $x$, puis remplacer.<br>Si $a = c$ et $b \\ne d$ : droites parallèles, <strong>aucune solution</strong>.` },
        { type: 'meth', label: 'METH', titre: 'Résolution par combinaison',
          contenu: `Pour un système $\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$ :<br>multiplier les lignes pour que les coefficients d'une inconnue soient opposés, puis additionner pour l'éliminer.<br>On obtient une équation à une inconnue, qu'on résout, puis on remonte.` },
        { type: 'ex', label: 'EX', titre: 'Résoudre un système',
          contenu: `<strong>Énoncé</strong> : résoudre $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$.<br><strong>Solution</strong> : addition des deux lignes : $3x = 9 \\Rightarrow x = 3$. Puis $3 - y = 2 \\Rightarrow y = 1$.<br>$S = \\lbrace (3;1) \\rbrace$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. GÉOMÉTRIE REPÉRÉE (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-geom', filiere: '2nde', matiere: 'ma',
  titre: 'Géométrie repérée', ordre: 6, enrich: true,
  sections: [
    {
      titre: 'Coordonnées dans le plan',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Repère du plan',
          contenu: `Un <strong>repère</strong> $(O;I;J)$ est défini par une origine $O$ et deux axes. Tout point $M$ a un unique couple de <strong>coordonnées</strong> $(x_M; y_M)$ : $x_M$ abscisse, $y_M$ ordonnée.<br>Le repère est <strong>orthonormé</strong> si les axes sont perpendiculaires et $OI = OJ = 1$ : indispensable pour les calculs de distances.` },
        { type: 'form', label: 'FORM', titre: 'Coordonnées du milieu',
          contenu: `Le milieu $M$ du segment $[AB]$ a pour coordonnées :<br>$$x_M = \\frac{x_A + x_B}{2} \\qquad y_M = \\frac{y_A + y_B}{2}$$<br>C'est la moyenne des coordonnées des extrémités.` },
        { type: 'form', label: 'FORM', titre: 'Distance entre deux points',
          contenu: `Dans un repère <strong>orthonormé</strong>, la distance entre $A(x_A;y_A)$ et $B(x_B;y_B)$ est :<br>$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$<br>C'est l'application directe du théorème de Pythagore.` },
        { type: 'ex', label: 'EX', titre: 'Nature d\'un triangle par les longueurs',
          contenu: `<strong>Énoncé</strong> : $A(1;2)$, $B(4;6)$, $C(8;3)$. Montrer que $ABC$ est rectangle.<br><strong>Solution</strong> : $AB^2 = 3^2 + 4^2 = 25$ ; $BC^2 = 4^2 + (-3)^2 = 25$ ; $AC^2 = 7^2 + 1^2 = 50$.<br>Comme $AB^2 + BC^2 = 50 = AC^2$, par la réciproque de Pythagore, $ABC$ est rectangle en $B$ (et même isocèle).` },
      ]
    },
    {
      titre: 'Configurations classiques',
      cartes: [
        { type: 'meth', label: 'METH', titre: 'Montrer qu\'un quadrilatère est un parallélogramme',
          contenu: `$ABCD$ est un <strong>parallélogramme</strong> si et seulement si $[AC]$ et $[BD]$ ont le <strong>même milieu</strong> (les diagonales se coupent en leur milieu).<br><strong>Méthode</strong> : calculer le milieu de $[AC]$ et celui de $[BD]$ ; conclure s'ils coïncident.<br>Équivalent vectoriel : $\\vec{AB} = \\vec{DC}$.` },
        { type: 'meth', label: 'METH', titre: 'Reconnaître losange, rectangle, carré',
          contenu: `À partir d'un parallélogramme :<br>– <strong>Losange</strong> : deux côtés consécutifs égaux ($AB = BC$).<br>– <strong>Rectangle</strong> : diagonales de même longueur ($AC = BD$).<br>– <strong>Carré</strong> : losange ET rectangle.<br>On calcule donc longueurs de côtés et de diagonales avec la formule de distance.` },
        { type: 'ex', label: 'EX', titre: 'Quatrième sommet d\'un parallélogramme',
          contenu: `<strong>Énoncé</strong> : $A(1;1)$, $B(5;2)$, $C(6;5)$. Trouver $D$ tel que $ABCD$ soit un parallélogramme.<br><strong>Solution</strong> : milieu de $[AC] = (3{,}5;3)$. Ce doit être le milieu de $[BD]$ : $\\dfrac{5+x_D}{2} = 3{,}5$ et $\\dfrac{2+y_D}{2} = 3$.<br>D'où $x_D = 2$, $y_D = 4$. $D(2;4)$.` },
      ]
    },
    {
      titre: 'Trigonométrie du triangle rectangle',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Cosinus, sinus, tangente',
          contenu: `Dans un triangle rectangle, pour un angle aigu $\\widehat{\\alpha}$ :<br>$$\\cos \\alpha = \\frac{\\text{adjacent}}{\\text{hypoténuse}} \\quad \\sin \\alpha = \\frac{\\text{opposé}}{\\text{hypoténuse}} \\quad \\tan \\alpha = \\frac{\\text{opposé}}{\\text{adjacent}}$$<br>Moyen mnémotechnique : <strong>CAH–SOH–TOA</strong>.` },
        { type: 'prop', label: 'PROP', titre: 'Relations trigonométriques',
          contenu: `Pour tout angle aigu $\\alpha$ :<br>$$\\cos^2 \\alpha + \\sin^2 \\alpha = 1 \\qquad \\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$$<br>De plus $0 < \\cos \\alpha < 1$ et $0 < \\sin \\alpha < 1$.<br>Valeurs remarquables : $\\cos 60° = \\sin 30° = \\tfrac{1}{2}$, $\\cos 45° = \\sin 45° = \\tfrac{\\sqrt{2}}{2}$, $\\cos 30° = \\sin 60° = \\tfrac{\\sqrt{3}}{2}$.` },
        { type: 'meth', label: 'METH', titre: 'Calculer un côté ou un angle',
          contenu: `<strong>Calculer un côté</strong> : choisir la relation reliant l'angle connu, le côté connu et le côté cherché, puis isoler.<br><strong>Calculer un angle</strong> : utiliser la touche $\\cos^{-1}$, $\\sin^{-1}$ ou $\\tan^{-1}$ de la calculatrice sur le rapport adéquat.<br>Vérifier que la calculatrice est en mode <strong>degrés</strong>.` },
        { type: 'ex', label: 'EX', titre: 'Hauteur via la tangente',
          contenu: `<strong>Énoncé</strong> : à $20$ m du pied d'un arbre, on vise le sommet sous un angle de $35°$ (œil au sol). Hauteur de l'arbre ?<br><strong>Solution</strong> : $\\tan 35° = \\dfrac{h}{20}$, donc $h = 20 \\tan 35° \\approx 20 \\times 0{,}700 \\approx 14{,}0$ m.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. VECTEURS (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-vect', filiere: '2nde', matiere: 'ma',
  titre: 'Vecteurs', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Notion de vecteur',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Vecteur et translation',
          contenu: `Un <strong>vecteur</strong> $\\vec{AB}$ est caractérisé par une <strong>direction</strong>, un <strong>sens</strong> et une <strong>longueur</strong> (sa norme $\\|\\vec{AB}\\| = AB$).<br>$\\vec{AB}$ représente la <strong>translation</strong> qui amène $A$ sur $B$.<br>Deux vecteurs sont <strong>égaux</strong> s'ils ont mêmes direction, sens et norme : $\\vec{AB} = \\vec{CD} \\iff ABDC$ est un parallélogramme.` },
        { type: 'form', label: 'FORM', titre: 'Coordonnées d\'un vecteur',
          contenu: `Dans un repère, le vecteur $\\vec{AB}$ a pour coordonnées :<br>$$\\vec{AB}\\ \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$<br>Sa norme (en repère orthonormé) : $\\|\\vec{AB}\\| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$.<br>Le vecteur nul $\\vec{0}$ a pour coordonnées $(0;0)$.` },
        { type: 'ex', label: 'EX', titre: 'Égalité de vecteurs',
          contenu: `<strong>Énoncé</strong> : $A(1;2)$, $B(4;3)$, $C(0;-1)$. Trouver $D$ tel que $\\vec{AB} = \\vec{CD}$.<br><strong>Solution</strong> : $\\vec{AB}\\ (3;1)$. On veut $\\vec{CD}\\ (x_D - 0; y_D + 1) = (3;1)$.<br>Donc $x_D = 3$, $y_D = 0$. $D(3;0)$.` },
      ]
    },
    {
      titre: 'Opérations sur les vecteurs',
      cartes: [
        { type: 'th', label: 'THM', titre: 'Relation de Chasles',
          contenu: `Pour tous points $A$, $B$, $C$ :<br>$$\\vec{AB} + \\vec{BC} = \\vec{AC}$$<br>Le point d'arrivée du premier vecteur sert de point de départ au second.<br>Conséquence : $\\vec{AB} = -\\vec{BA}$ et $\\vec{AA} = \\vec{0}$.` },
        { type: 'form', label: 'FORM', titre: 'Somme et produit par un réel (coordonnées)',
          contenu: `Si $\\vec{u}\\ (x;y)$ et $\\vec{v}\\ (x';y')$, et $k \\in \\mathbb{R}$ :<br>$$\\vec{u} + \\vec{v}\\ \\begin{pmatrix} x + x' \\\\ y + y' \\end{pmatrix} \\qquad k\\vec{u}\\ \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$$<br>$k\\vec{u}$ a la même direction que $\\vec{u}$ ; même sens si $k > 0$, sens opposé si $k < 0$.` },
        { type: 'ex', label: 'EX', titre: 'Calcul vectoriel',
          contenu: `<strong>Énoncé</strong> : $\\vec{u}\\ (2;-3)$ et $\\vec{v}\\ (1;4)$. Calculer les coordonnées de $3\\vec{u} - 2\\vec{v}$.<br><strong>Solution</strong> : $3\\vec{u}\\ (6;-9)$, $2\\vec{v}\\ (2;8)$.<br>$3\\vec{u} - 2\\vec{v}\\ (6-2;-9-8) = (4;-17)$.` },
      ]
    },
    {
      titre: 'Colinéarité',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Vecteurs colinéaires',
          contenu: `$\\vec{u}$ et $\\vec{v}$ (non nuls) sont <strong>colinéaires</strong> s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ : ils ont la <strong>même direction</strong>.<br>Le vecteur nul est colinéaire à tout vecteur.<br>Colinéarité $\\Leftrightarrow$ parallélisme ou alignement.` },
        { type: 'th', label: 'THM', titre: 'Critère de colinéarité (déterminant)',
          contenu: `$\\vec{u}\\ (x;y)$ et $\\vec{v}\\ (x';y')$ sont colinéaires <strong>si et seulement si</strong> :<br>$$xy' - x'y = 0$$<br>Le nombre $xy' - x'y$ est le <strong>déterminant</strong> de $(\\vec{u},\\vec{v})$. S'il est nul, les vecteurs sont colinéaires.` },
        { type: 'meth', label: 'METH', titre: 'Prouver alignement ou parallélisme',
          contenu: `<strong>Trois points $A$, $B$, $C$ alignés</strong> $\\iff \\vec{AB}$ et $\\vec{AC}$ colinéaires $\\iff$ déterminant nul.<br><strong>Droites $(AB)$ et $(CD)$ parallèles</strong> $\\iff \\vec{AB}$ et $\\vec{CD}$ colinéaires.<br>On calcule les coordonnées des vecteurs puis le déterminant.` },
        { type: 'ex', label: 'EX', titre: 'Alignement de trois points',
          contenu: `<strong>Énoncé</strong> : $A(1;2)$, $B(3;5)$, $C(7;11)$ sont-ils alignés ?<br><strong>Solution</strong> : $\\vec{AB}\\ (2;3)$, $\\vec{AC}\\ (6;9)$.<br>Déterminant : $2 \\times 9 - 6 \\times 3 = 18 - 18 = 0$. Les vecteurs sont colinéaires, donc $A$, $B$, $C$ sont <strong>alignés</strong>.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. STATISTIQUES (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-stat', filiere: '2nde', matiere: 'ma',
  titre: 'Statistiques', ordre: 8, enrich: true,
  sections: [
    {
      titre: 'Indicateurs de position',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Moyenne',
          contenu: `Pour une série de valeurs $x_1, \\dots, x_n$, la <strong>moyenne</strong> est :<br>$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$<br>Avec des effectifs $n_i$ (moyenne pondérée) :<br>$$\\bar{x} = \\frac{\\sum n_i x_i}{\\sum n_i}$$<br>La moyenne est sensible aux <strong>valeurs extrêmes</strong>.` },
        { type: 'def', label: 'DEF', titre: 'Médiane',
          contenu: `La <strong>médiane</strong> $Me$ partage la série ordonnée en deux moitiés de même effectif : au moins $50\\%$ des valeurs lui sont $\\le$, au moins $50\\%$ lui sont $\\ge$.<br>Si $n$ est impair : valeur de rang $\\dfrac{n+1}{2}$.<br>Si $n$ est pair : moyenne des deux valeurs centrales.<br>Elle est <strong>peu sensible</strong> aux valeurs extrêmes.` },
        { type: 'meth', label: 'METH', titre: 'Calculer la médiane',
          contenu: `<strong>Étapes</strong> :<br>1. Ordonner les valeurs dans l'ordre croissant.<br>2. Compter l'effectif total $n$.<br>3. Si $n$ impair : prendre la $\\big(\\tfrac{n+1}{2}\\big)$-ième valeur. Si $n$ pair : moyenne des $\\tfrac{n}{2}$-ième et $\\big(\\tfrac{n}{2}+1\\big)$-ième.<br>Exemple : $2, 4, 5, 9, 12$ ($n=5$) $\\Rightarrow Me = 5$ (3e valeur).` },
        { type: 'ex', label: 'EX', titre: 'Moyenne vs médiane',
          contenu: `<strong>Énoncé</strong> : salaires (k€) : $20, 22, 23, 25, 110$. Comparer moyenne et médiane.<br><strong>Solution</strong> : moyenne $= \\dfrac{200}{5} = 40$ k€ ; médiane $= 23$ k€.<br>La valeur extrême ($110$) tire fortement la moyenne vers le haut : la <strong>médiane est plus représentative</strong> ici.` },
      ]
    },
    {
      titre: 'Quartiles et dispersion',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Quartiles',
          contenu: `$Q_1$ (premier quartile) : plus petite valeur telle qu'au moins $25\\%$ des données lui sont $\\le$.<br>$Q_3$ (troisième quartile) : plus petite valeur telle qu'au moins $75\\%$ lui sont $\\le$.<br>L'<strong>écart interquartile</strong> $Q_3 - Q_1$ mesure la dispersion de la moitié centrale (insensible aux extrêmes).` },
        { type: 'meth', label: 'METH', titre: 'Déterminer $Q_1$ et $Q_3$',
          contenu: `Sur la série ordonnée d'effectif $n$ :<br>$Q_1$ : valeur de rang $\\big\\lceil \\tfrac{n}{4} \\big\\rceil$ (on arrondit $\\tfrac{n}{4}$ au rang supérieur s'il n'est pas entier).<br>$Q_3$ : valeur de rang $\\big\\lceil \\tfrac{3n}{4} \\big\\rceil$.<br>Exemple : $n = 12$ $\\Rightarrow Q_1$ au rang $3$, $Q_3$ au rang $9$.` },
        { type: 'def', label: 'DEF', titre: 'Étendue et écart-type',
          contenu: `L'<strong>étendue</strong> = valeur max $-$ valeur min : mesure grossière de la dispersion.<br>L'<strong>écart-type</strong> $\\sigma$ mesure la dispersion autour de la moyenne :<br>$$\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i} n_i (x_i - \\bar{x})^2}$$<br>Plus $\\sigma$ est grand, plus les valeurs sont dispersées. Se calcule à la calculatrice.` },
        { type: 'ex', label: 'EX', titre: 'Lecture d\'un diagramme en boîte',
          contenu: `<strong>Énoncé</strong> : un diagramme en boîte affiche min $=5$, $Q_1 = 8$, $Me = 12$, $Q_3 = 15$, max $=20$. Interpréter.<br><strong>Solution</strong> : la moitié centrale des données est dans $[8;15]$ (écart interquartile $=7$). Au moins $50\\%$ valent $\\le 12$. L'étendue totale est $20 - 5 = 15$.` },
      ]
    },
    {
      titre: 'Linéarité de la moyenne',
      cartes: [
        { type: 'prop', label: 'PROP', titre: 'Transformation affine d\'une série',
          contenu: `Si on transforme chaque donnée par $y_i = a x_i + b$ :<br>$$\\bar{y} = a\\bar{x} + b \\qquad \\sigma_y = |a|\\,\\sigma_x$$<br>La moyenne suit la transformation affine ; l'écart-type est multiplié par $|a|$ (le décalage $b$ ne change pas la dispersion).` },
        { type: 'prop', label: 'PROP', titre: 'Moyenne de deux groupes',
          contenu: `Pour deux groupes d'effectifs $n_1$, $n_2$ et de moyennes $\\bar{x}_1$, $\\bar{x}_2$, la moyenne globale est :<br>$$\\bar{x} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$<br>C'est une moyenne <strong>pondérée par les effectifs</strong>, pas la moyenne des deux moyennes.` },
        { type: 'ex', label: 'EX', titre: 'Moyenne pondérée de deux classes',
          contenu: `<strong>Énoncé</strong> : classe A ($30$ élèves, moyenne $12$), classe B ($20$ élèves, moyenne $14$). Moyenne de l'ensemble ?<br><strong>Solution</strong> : $\\bar{x} = \\dfrac{30 \\times 12 + 20 \\times 14}{50} = \\dfrac{360 + 280}{50} = \\dfrac{640}{50} = 12{,}8$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. PROBABILITÉS ET ÉCHANTILLONNAGE (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-proba', filiere: '2nde', matiere: 'ma',
  titre: 'Probabilités et échantillonnage', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Modèle probabiliste',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Univers et événements',
          contenu: `L'<strong>univers</strong> $\\Omega$ est l'ensemble des issues possibles d'une expérience aléatoire.<br>Un <strong>événement</strong> est une partie de $\\Omega$ ; un événement <strong>élémentaire</strong> ne contient qu'une issue.<br>L'événement <strong>certain</strong> est $\\Omega$, l'événement <strong>impossible</strong> est $\\varnothing$.<br>Exemple (dé à 6 faces) : $\\Omega = \\lbrace 1,2,3,4,5,6 \\rbrace$, « obtenir un pair » $= \\lbrace 2,4,6 \\rbrace$.` },
        { type: 'def', label: 'DEF', titre: 'Loi de probabilité',
          contenu: `Une <strong>loi de probabilité</strong> attribue à chaque issue $\\omega_i$ un nombre $p_i \\in [0;1]$ tel que la somme vaut $1$ :<br>$$p_1 + p_2 + \\cdots + p_n = 1$$<br>La probabilité d'un événement $A$ est la <strong>somme des probabilités</strong> des issues qui le composent.<br>$P(\\Omega) = 1$, $P(\\varnothing) = 0$.` },
        { type: 'prop', label: 'PROP', titre: 'Équiprobabilité',
          contenu: `Si les $n$ issues sont <strong>équiprobables</strong>, chacune a probabilité $\\dfrac{1}{n}$, et :<br>$$P(A) = \\frac{\\text{nombre d'issues favorables à } A}{\\text{nombre d'issues possibles}}$$<br>Exemple : tirer un roi dans un jeu de $32$ cartes : $P = \\dfrac{4}{32} = \\dfrac{1}{8}$.` },
        { type: 'ex', label: 'EX', titre: 'Calcul de probabilité (dé)',
          contenu: `<strong>Énoncé</strong> : on lance un dé équilibré. Probabilité d'obtenir un multiple de $3$ ?<br><strong>Solution</strong> : multiples de $3$ dans $\\lbrace 1,\\dots,6 \\rbrace$ : $\\lbrace 3;6 \\rbrace$, soit $2$ issues favorables.<br>$P = \\dfrac{2}{6} = \\dfrac{1}{3}$.` },
      ]
    },
    {
      titre: 'Opérations sur les événements',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Réunion, intersection, contraire',
          contenu: `$A \\cup B$ (« $A$ ou $B$ ») : au moins l'un se réalise.<br>$A \\cap B$ (« $A$ et $B$ ») : les deux se réalisent.<br>$\\bar{A}$ (contraire) : $A$ ne se réalise pas.<br>$A$ et $B$ sont <strong>incompatibles</strong> si $A \\cap B = \\varnothing$.` },
        { type: 'form', label: 'FORM', titre: 'Formules de probabilité',
          contenu: `$$P(\\bar{A}) = 1 - P(A)$$<br>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$<br>Si $A$ et $B$ sont incompatibles : $P(A \\cup B) = P(A) + P(B)$.<br>Le terme $P(A \\cap B)$ corrige le double comptage de la zone commune.` },
        { type: 'ex', label: 'EX', titre: 'Réunion d\'événements',
          contenu: `<strong>Énoncé</strong> : carte tirée d'un jeu de $32$. $A$ = « cœur », $B$ = « roi ». Calculer $P(A \\cup B)$.<br><strong>Solution</strong> : $P(A) = \\dfrac{8}{32}$, $P(B) = \\dfrac{4}{32}$, $A \\cap B$ = roi de cœur, $P = \\dfrac{1}{32}$.<br>$P(A \\cup B) = \\dfrac{8 + 4 - 1}{32} = \\dfrac{11}{32}$.` },
      ]
    },
    {
      titre: 'Échantillonnage et fluctuation',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Échantillon et fréquence',
          contenu: `Un <strong>échantillon</strong> de taille $n$ est obtenu par $n$ répétitions indépendantes d'une expérience.<br>La <strong>fréquence</strong> d'un caractère est $f = \\dfrac{\\text{effectif observé}}{n}$.<br><strong>Fluctuation d'échantillonnage</strong> : la fréquence observée varie d'un échantillon à l'autre, autour de la probabilité théorique $p$.` },
        { type: 'prop', label: 'PROP', titre: 'Loi des grands nombres (intuition)',
          contenu: `Lorsque la taille $n$ de l'échantillon <strong>augmente</strong>, la fréquence observée $f$ se rapproche (en général) de la probabilité théorique $p$, et les fluctuations diminuent.<br>C'est ce qui justifie l'estimation d'une probabilité inconnue par une fréquence sur un grand échantillon.` },
        { type: 'meth', label: 'METH', titre: 'Simuler avec un tableur ou Python',
          contenu: `Pour étudier la fluctuation : générer plusieurs échantillons aléatoires de taille $n$, calculer la fréquence dans chacun, observer leur dispersion.<br>En Python, on utilise <strong>random.random()</strong> ($\\in [0;1[$) : l'issue est « succès » si le tirage est $< p$.<br>Plus $n$ grandit, plus les fréquences se resserrent autour de $p$.` },
        { type: 'ex', label: 'EX', titre: 'Estimer une probabilité',
          contenu: `<strong>Énoncé</strong> : sur $500$ lancers d'une pièce, on obtient $260$ « pile ». Estimer $P(\\text{pile})$ et commenter.<br><strong>Solution</strong> : $f = \\dfrac{260}{500} = 0{,}52$. Proche de $0{,}5$ attendu pour une pièce équilibrée : l'écart $0{,}02$ relève de la fluctuation d'échantillonnage.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 10. ALGORITHMIQUE ET PROGRAMMATION PYTHON (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-2e-algo', filiere: '2nde', matiere: 'ma',
  titre: 'Algorithmique et programmation Python', ordre: 10, enrich: false,
  sections: [
    {
      titre: 'Variables et instructions',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Variable et affectation',
          contenu: `Une <strong>variable</strong> est un nom associé à une valeur stockée en mémoire.<br>L'<strong>affectation</strong> se note <strong>=</strong> : <strong>x = 5</strong> range $5$ dans <strong>x</strong>.<br>Attention : <strong>x = x + 1</strong> n'est pas une équation, c'est « prendre l'ancien <strong>x</strong>, ajouter $1$, ranger dans <strong>x</strong> ».<br>Types de base : <strong>int</strong> (entier), <strong>float</strong> (décimal), <strong>str</strong> (chaîne), <strong>bool</strong> (booléen).` },
        { type: 'meth', label: 'METH', titre: 'Entrées / sorties',
          contenu: `<strong>Afficher</strong> : <strong>print(x)</strong>.<br><strong>Saisir</strong> : <strong>input()</strong> renvoie une chaîne ; convertir avec <strong>int(...)</strong> ou <strong>float(...)</strong>.<br>Exemple :<br><strong>n = int(input("Entrez un entier : "))</strong><br><strong>print(2 * n)</strong>` },
        { type: 'meth', label: 'METH', titre: 'Définir une fonction',
          contenu: `Une <strong>fonction</strong> regroupe des instructions réutilisables ; le mot-clé est <strong>def</strong>, le résultat est renvoyé par <strong>return</strong>.<br>Exemple :<br><strong>def carre(x):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>return x * x</strong><br>L'<strong>indentation</strong> (4 espaces) délimite le corps de la fonction : elle est obligatoire en Python.` },
        { type: 'ex', label: 'EX', titre: 'Fonction affine en Python',
          contenu: `<strong>Énoncé</strong> : écrire une fonction calculant $f(x) = 3x + 2$.<br><strong>Solution</strong> :<br><strong>def f(x):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>return 3 * x + 2</strong><br><strong>print(f(5))</strong> affiche $17$.` },
      ]
    },
    {
      titre: 'Conditions',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Instruction conditionnelle',
          contenu: `Un <strong>test</strong> exécute des instructions selon qu'une condition est vraie ou fausse :<br><strong>if condition:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>bloc 1</strong><br><strong>else:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>bloc 2</strong><br>On peut enchaîner avec <strong>elif</strong>. La condition est un booléen.` },
        { type: 'form', label: 'FORM', titre: 'Opérateurs de comparaison et logiques',
          contenu: `Comparaisons : <strong>==</strong> (égal), <strong>!=</strong> (différent), <strong>&lt;</strong>, <strong>&gt;</strong>, <strong>&lt;=</strong>, <strong>&gt;=</strong>.<br>Logiques : <strong>and</strong> (et), <strong>or</strong> (ou), <strong>not</strong> (non).<br>Attention : <strong>=</strong> est l'affectation, <strong>==</strong> est le test d'égalité — ne pas confondre.` },
        { type: 'ex', label: 'EX', titre: 'Parité d\'un nombre',
          contenu: `<strong>Énoncé</strong> : écrire une fonction qui dit si un entier est pair.<br><strong>Solution</strong> :<br><strong>def est_pair(n):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>if n % 2 == 0:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>return True</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>else:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>return False</strong><br>L'opérateur <strong>%</strong> donne le reste de la division euclidienne.` },
      ]
    },
    {
      titre: 'Boucles',
      cartes: [
        { type: 'def', label: 'DEF', titre: 'Boucle bornée (for)',
          contenu: `La boucle <strong>for</strong> répète un bloc un nombre <strong>connu</strong> de fois :<br><strong>for i in range(n):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>bloc</strong><br><strong>range(n)</strong> parcourt $0, 1, \\dots, n-1$ ($n$ valeurs).<br><strong>range(a, b)</strong> parcourt $a, \\dots, b-1$.` },
        { type: 'def', label: 'DEF', titre: 'Boucle non bornée (while)',
          contenu: `La boucle <strong>while</strong> répète <strong>tant qu'une condition</strong> est vraie :<br><strong>while condition:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>bloc</strong><br>Il faut s'assurer que la condition finit par devenir fausse, sinon la boucle est <strong>infinie</strong>.` },
        { type: 'meth', label: 'METH', titre: 'Accumuler une somme',
          contenu: `Schéma classique : initialiser un accumulateur, puis l'enrichir dans la boucle.<br><strong>s = 0</strong><br><strong>for i in range(1, n + 1):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>s = s + i</strong><br>À la fin, <strong>s</strong> contient $1 + 2 + \\cdots + n$.` },
        { type: 'ex', label: 'EX', titre: 'Somme des carrés',
          contenu: `<strong>Énoncé</strong> : calculer $1^2 + 2^2 + \\cdots + n^2$ en Python.<br><strong>Solution</strong> :<br><strong>def somme_carres(n):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>s = 0</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>for k in range(1, n + 1):</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>s = s + k * k</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>return s</strong>` },
        { type: 'ex', label: 'EX', titre: 'Seuil avec while',
          contenu: `<strong>Énoncé</strong> : trouver le plus petit $n$ tel que $2^n > 1000$.<br><strong>Solution</strong> :<br><strong>n = 0</strong><br><strong>while 2 ** n <= 1000:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;<strong>n = n + 1</strong><br><strong>print(n)</strong> affiche $10$ (car $2^{10} = 1024$). L'opérateur <strong>**</strong> est la puissance.` },
      ]
    },
  ]
},

];
