export const DATA = [
  {
    id: 'ma-4e-frac',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Nombres relatifs en écriture fractionnaire',
    ordre: 1,
    enrich: false,
    sections: [
      {
        titre: 'Quotients et signes',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Quotient de deux relatifs',
            contenu: `Le <strong>quotient</strong> de deux nombres relatifs $a$ et $b$ (avec $b \\neq 0$) est le nombre $\\frac{a}{b}$ qui, multiplié par $b$, redonne $a$.<br><br>Une fraction est <strong>négative</strong> dès qu'un seul de ses termes est négatif :<br>$$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}, \\qquad \\frac{-a}{-b} = \\frac{a}{b}.$$<br>On place toujours le signe « $-$ » devant la fraction, et on choisit un dénominateur positif.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Règle des signes',
            contenu: `La règle des signes du quotient est identique à celle du produit :<br>$$\\frac{+}{+} = +, \\quad \\frac{-}{-} = +, \\quad \\frac{+}{-} = -, \\quad \\frac{-}{+} = -.$$<br>Un quotient (ou produit) est <strong>positif</strong> si les deux termes ont le même signe, <strong>négatif</strong> sinon.<br><br><em>Exemple :</em> $\\frac{-12}{-3} = +4$ et $\\frac{15}{-5} = -3$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Simplifier une fraction',
            contenu: `Pour simplifier $\\frac{a}{b}$ :<br>1. Repérer le signe global (règle des signes), le placer devant.<br>2. Diviser numérateur et dénominateur par un diviseur commun (idéalement le PGCD).<br>3. Continuer jusqu'à obtenir une fraction <strong>irréductible</strong>.<br><br><em>Exemple :</em> $\\dfrac{-42}{56} = -\\dfrac{42}{56} = -\\dfrac{42 \\div 14}{56 \\div 14} = -\\dfrac{3}{4}.$`
          }
        ]
      },
      {
        titre: 'Addition et soustraction',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Réduire au même dénominateur',
            contenu: `Pour additionner ou soustraire deux fractions, on les met au <strong>même dénominateur</strong>, puis on ajoute (ou soustrait) les numérateurs :<br>$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}, \\qquad \\frac{a}{d} - \\frac{b}{d} = \\frac{a-b}{d}.$$<br>On choisit comme dénominateur commun un multiple commun (souvent le PPCM) des deux dénominateurs.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode pas à pas',
            contenu: `1. Chercher un dénominateur commun.<br>2. Transformer chaque fraction (multiplier haut et bas par le même facteur).<br>3. Ajouter / soustraire les numérateurs, garder le dénominateur.<br>4. Simplifier le résultat.<br><br><em>Attention aux signes :</em> $-\\dfrac{3}{4}$ se réécrit $\\dfrac{-3}{4}$ avant calcul.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de somme',
            contenu: `Calculer $A = \\dfrac{5}{6} - \\dfrac{7}{4}$.<br><br>
Dénominateur commun : $\\mathrm{PPCM}(6,4) = 12$.<br>
$A = \\dfrac{5 \\times 2}{12} - \\dfrac{7 \\times 3}{12} = \\dfrac{10}{12} - \\dfrac{21}{12} = \\dfrac{10 - 21}{12} = \\dfrac{-11}{12} = -\\dfrac{11}{12}.$`
          }
        ]
      },
      {
        titre: 'Multiplication et division',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Produit et quotient de fractions',
            contenu: `<strong>Produit :</strong> on multiplie les numérateurs entre eux et les dénominateurs entre eux :<br>$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}.$$<br><strong>Quotient :</strong> diviser revient à multiplier par l'inverse :<br>$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c} \\quad (c \\neq 0).$$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Simplifier avant de multiplier',
            contenu: `Pour éviter les grands nombres, on <strong>simplifie en croix</strong> avant de multiplier :<br>$$\\frac{7}{15} \\times \\frac{10}{21} = \\frac{7}{15} \\times \\frac{10}{21}.$$<br>$7$ et $21$ se simplifient par $7$ ; $10$ et $15$ par $5$ :<br>$$= \\frac{1}{3} \\times \\frac{2}{3} = \\frac{2}{9}.$$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Quotient avec signes',
            contenu: `Calculer $B = \\dfrac{-8}{9} \\div \\dfrac{4}{-3}$.<br><br>
$\\dfrac{4}{-3} = -\\dfrac{4}{3}$, donc on multiplie par l'inverse $-\\dfrac{3}{4}$ :<br>
$B = -\\dfrac{8}{9} \\times \\left(-\\dfrac{3}{4}\\right) = +\\dfrac{8 \\times 3}{9 \\times 4} = \\dfrac{24}{36} = \\dfrac{2}{3}.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Expression à plusieurs opérations',
            contenu: `Calculer $C = \\dfrac{2}{3} - \\dfrac{1}{4} \\times \\dfrac{8}{5}$.<br><br>
<strong>Priorité à la multiplication :</strong><br>
$\\dfrac{1}{4} \\times \\dfrac{8}{5} = \\dfrac{8}{20} = \\dfrac{2}{5}.$<br>
$C = \\dfrac{2}{3} - \\dfrac{2}{5} = \\dfrac{10}{15} - \\dfrac{6}{15} = \\dfrac{4}{15}.$`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-puiss',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Puissances et notation scientifique',
    ordre: 2,
    enrich: true,
    sections: [
      {
        titre: 'Puissances d\'exposant entier',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Puissance entière positive',
            contenu: `Pour un nombre relatif $a$ et un entier $n \\geq 1$ :<br>$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ facteurs}}.$$<br>On lit « $a$ exposant $n$ ». Cas particuliers :<br>$a^1 = a$ et, par convention, $a^0 = 1$ (pour $a \\neq 0$).<br><br><em>Exemple :</em> $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Puissance d\'exposant négatif',
            contenu: `Pour $a \\neq 0$ et un entier $n \\geq 1$ :<br>$$a^{-n} = \\frac{1}{a^n}.$$<br>Une puissance négative est l'<strong>inverse</strong> de la puissance positive correspondante.<br><br><em>Exemples :</em> $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$ ; $\\quad 10^{-3} = \\dfrac{1}{1000} = 0{,}001$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Signe d\'une puissance',
            contenu: `Si $a > 0$, alors $a^n > 0$ pour tout $n$.<br>Si $a < 0$ :<br>— $a^n > 0$ quand $n$ est <strong>pair</strong> ;<br>— $a^n < 0$ quand $n$ est <strong>impair</strong>.<br><br><em>Exemple :</em> $(-3)^2 = 9 > 0$ mais $(-3)^3 = -27 < 0$.<br><strong>Attention :</strong> $-3^2 = -(3^2) = -9 \\neq (-3)^2$.`
          }
        ]
      },
      {
        titre: 'Règles de calcul',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Lois des exposants',
            contenu: `Pour $a \\neq 0$, $b \\neq 0$ et $m, n$ entiers :<br>
$$a^m \\times a^n = a^{m+n}, \\qquad \\frac{a^m}{a^n} = a^{m-n},$$<br>
$$(a^m)^n = a^{m \\times n}, \\qquad (a \\times b)^n = a^n \\times b^n,$$<br>
$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}.$$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Appliquer les règles',
            contenu: `Identifier la même <strong>base</strong>, puis appliquer la règle correspondant à l'opération (× → additionner, ÷ → soustraire, puissance de puissance → multiplier).<br><br><em>Exemple :</em><br>
$\\dfrac{a^7 \\times a^{-2}}{a^3} = \\dfrac{a^{7+(-2)}}{a^3} = \\dfrac{a^5}{a^3} = a^{5-3} = a^2.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'une expression',
            contenu: `Écrire $D = \\dfrac{2^5 \\times 2^{-3}}{2^{-4}}$ sous la forme $2^n$.<br><br>
Numérateur : $2^5 \\times 2^{-3} = 2^{5-3} = 2^2$.<br>
$D = \\dfrac{2^2}{2^{-4}} = 2^{2-(-4)} = 2^{6} = 64.$`
          }
        ]
      },
      {
        titre: 'Puissances de 10',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Écriture des puissances de 10',
            contenu: `Pour un entier $n \\geq 1$ :<br>
$10^n = 1\\underbrace{0\\ldots0}_{n \\text{ zéros}}$ (un $1$ suivi de $n$ zéros),<br>
$10^{-n} = 0{,}\\underbrace{0\\ldots0}_{n-1}1$ (le $1$ est à la $n$-ième décimale).<br><br>
<em>Exemples :</em> $10^4 = 10\\,000$ ; $\\;10^{-2} = 0{,}01$ ; $\\;10^0 = 1$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Multiplier / diviser par une puissance de 10',
            contenu: `Multiplier par $10^n$ décale la virgule de $n$ rangs vers la <strong>droite</strong> ; diviser (ou multiplier par $10^{-n}$) la décale de $n$ rangs vers la <strong>gauche</strong>.<br><br>
<em>Exemple :</em> $3{,}25 \\times 10^3 = 3250$ ; $\\;4{,}7 \\times 10^{-2} = 0{,}047$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Produit de puissances de 10',
            contenu: `Calculer $\\dfrac{10^6 \\times 10^{-2}}{10^{3}}$.<br><br>
$10^6 \\times 10^{-2} = 10^{6-2} = 10^4$.<br>
$\\dfrac{10^4}{10^3} = 10^{4-3} = 10^1 = 10.$`
          }
        ]
      },
      {
        titre: 'Notation scientifique',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Notation scientifique',
            contenu: `Tout nombre décimal non nul s'écrit de façon unique sous la forme<br>$$a \\times 10^n,$$<br>où $1 \\leq |a| < 10$ ($a$ a un seul chiffre non nul avant la virgule) et $n$ est un entier relatif.<br>$a$ est le <strong>mantisse</strong> ; $n$ l'<strong>ordre de grandeur</strong> en puissance de $10$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Mettre en notation scientifique',
            contenu: `1. Placer la virgule juste après le premier chiffre non nul → on obtient $a$.<br>2. Compter de combien de rangs la virgule a bougé → valeur de $n$.<br>3. Vers la gauche : $n$ positif ; vers la droite : $n$ négatif.<br><br>
<em>Exemple :</em> $58\\,000 = 5{,}8 \\times 10^4$ ; $\\;0{,}0036 = 3{,}6 \\times 10^{-3}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Produit en notation scientifique',
            contenu: `Donner $E = (4 \\times 10^5) \\times (2{,}5 \\times 10^{-2})$ en notation scientifique.<br><br>
$E = (4 \\times 2{,}5) \\times (10^5 \\times 10^{-2}) = 10 \\times 10^{3}.$<br>
Or $10 = 10^1$, donc $E = 10^1 \\times 10^3 = 10^4 = 1 \\times 10^4.$`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-littéral',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Calcul littéral : développement et factorisation',
    ordre: 3,
    enrich: false,
    sections: [
      {
        titre: 'Réduction et distributivité simple',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Réduire une expression',
            contenu: `<strong>Réduire</strong> une expression, c'est regrouper les termes de même nature :<br>— les termes en $x$ entre eux,<br>— les termes constants entre eux.<br><br>
<em>Exemple :</em> $3x + 5 - 7x + 2 = (3 - 7)x + (5 + 2) = -4x + 7.$`
          },
          {
            type: 'form', label: 'FORM',
            titre: 'Distributivité simple',
            contenu: `Pour tous nombres $k$, $a$, $b$ :<br>$$k(a + b) = ka + kb, \\qquad k(a - b) = ka - kb.$$<br>
On multiplie le facteur extérieur par <strong>chaque</strong> terme de la parenthèse.<br><br>
<em>Exemple :</em> $5(2x - 3) = 10x - 15.$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Attention au signe « moins »',
            contenu: `Devant une parenthèse, un signe « $-$ » équivaut à multiplier par $-1$ et change <strong>tous</strong> les signes :<br>$$-(a - b) = -a + b.$$<br>
<em>Exemple :</em> $7x - (2x - 4) = 7x - 2x + 4 = 5x + 4.$`
          }
        ]
      },
      {
        titre: 'Double distributivité',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Développer un produit de deux sommes',
            contenu: `Pour tous nombres $a, b, c, d$ :<br>$$(a + b)(c + d) = ac + ad + bc + bd.$$<br>
On multiplie chaque terme de la première parenthèse par chaque terme de la seconde (quatre produits).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Développement complet',
            contenu: `Développer et réduire $(2x + 3)(x - 5)$.<br><br>
$= 2x \\times x + 2x \\times (-5) + 3 \\times x + 3 \\times (-5)$<br>
$= 2x^2 - 10x + 3x - 15$<br>
$= 2x^2 - 7x - 15.$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Organiser ses calculs',
            contenu: `1. Écrire les <strong>quatre</strong> produits sans en oublier.<br>2. Surveiller les signes (un « $-$ » multiplié donne un « $-$ »).<br>3. Réduire les termes semblables (souvent les deux termes « du milieu »).<br><br>Vérification rapide : tester avec une valeur, p. ex. $x = 1$.`
          }
        ]
      },
      {
        titre: 'Identités remarquables',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Les trois identités',
            contenu: `Pour tous nombres $a$ et $b$ :<br>
$$(a + b)^2 = a^2 + 2ab + b^2,$$<br>
$$(a - b)^2 = a^2 - 2ab + b^2,$$<br>
$$(a + b)(a - b) = a^2 - b^2.$$<br>
Elles servent à <strong>développer</strong> (de gauche à droite) ou à <strong>factoriser</strong> (de droite à gauche).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Développer avec une identité',
            contenu: `Développer $(3x + 4)^2$.<br><br>
On applique $(a+b)^2 = a^2 + 2ab + b^2$ avec $a = 3x$, $b = 4$ :<br>
$(3x)^2 + 2 \\times 3x \\times 4 + 4^2 = 9x^2 + 24x + 16.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul mental astucieux',
            contenu: `Calculer $101 \\times 99$ sans poser l'opération.<br><br>
$101 \\times 99 = (100 + 1)(100 - 1) = 100^2 - 1^2 = 10\\,000 - 1 = 9\\,999.$`
          }
        ]
      },
      {
        titre: 'Factorisation',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Factoriser',
            contenu: `<strong>Factoriser</strong> une expression, c'est l'écrire sous forme d'un <strong>produit</strong> de facteurs. C'est l'opération inverse du développement.<br><br>
<em>Exemple :</em> $12x + 18 = 6 \\times 2x + 6 \\times 3 = 6(2x + 3).$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Repérer un facteur commun',
            contenu: `1. Identifier un facteur présent dans <strong>tous</strong> les termes (un nombre, une lettre, une parenthèse).<br>2. Le mettre en facteur ; écrire entre parenthèses ce qui reste.<br><br>
<em>Exemple avec parenthèse commune :</em><br>
$(x+2)(x-1) + (x+2) \\times 3 = (x+2)\\big[(x-1) + 3\\big] = (x+2)(x+2) = (x+2)^2.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Factoriser avec une identité',
            contenu: `Factoriser $9x^2 - 25$.<br><br>
On reconnaît $a^2 - b^2$ avec $a = 3x$ et $b = 5$ (car $9x^2 = (3x)^2$ et $25 = 5^2$) :<br>
$9x^2 - 25 = (3x + 5)(3x - 5).$`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-eqineg',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Équations du premier degré',
    ordre: 4,
    enrich: true,
    sections: [
      {
        titre: 'Notion d\'équation',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Équation et solution',
            contenu: `Une <strong>équation</strong> est une égalité contenant une inconnue (souvent $x$). <strong>Résoudre</strong> l'équation, c'est trouver toutes les valeurs de $x$ qui rendent l'égalité vraie : ce sont les <strong>solutions</strong>.<br><br>
<em>Exemple :</em> $x = 3$ est solution de $2x + 1 = 7$ car $2 \\times 3 + 1 = 7$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Règles de transformation',
            contenu: `Une équation garde les mêmes solutions si :<br>— on <strong>ajoute</strong> (ou soustrait) un même nombre aux deux membres ;<br>— on <strong>multiplie</strong> (ou divise) les deux membres par un même nombre <strong>non nul</strong>.<br><br>
Ce sont ces deux opérations qui permettent d'isoler $x$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Vérifier une solution',
            contenu: `Pour vérifier qu'une valeur est solution, on calcule <strong>séparément</strong> le membre de gauche et le membre de droite avec cette valeur, et on compare.<br><br>
<em>Exemple :</em> $x = 5$ dans $3x - 4 = 11$ : gauche $= 3 \\times 5 - 4 = 11$, droite $= 11$. ✓`
          }
        ]
      },
      {
        titre: 'Résolution de ax + b = c',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode générale',
            contenu: `Pour résoudre $ax + b = c$ (avec $a \\neq 0$) :<br>1. Isoler le terme en $x$ : retrancher $b$ aux deux membres.<br>2. Diviser les deux membres par $a$.<br>3. Conclure et vérifier.<br><br>
$$ax + b = c \\;\\Rightarrow\\; ax = c - b \\;\\Rightarrow\\; x = \\frac{c - b}{a}.$$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Équation simple',
            contenu: `Résoudre $5x - 7 = 18$.<br><br>
$5x - 7 = 18$<br>
$5x = 18 + 7 = 25$<br>
$x = \\dfrac{25}{5} = 5.$<br><br>
<em>Vérification :</em> $5 \\times 5 - 7 = 18$. ✓ La solution est $x = 5$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Inconnue dans les deux membres',
            contenu: `Résoudre $7x - 3 = 2x + 12$.<br><br>
On regroupe les $x$ à gauche, les nombres à droite :<br>
$7x - 2x = 12 + 3$<br>
$5x = 15$<br>
$x = 3.$`
          }
        ]
      },
      {
        titre: 'Équations produit nul',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Théorème du produit nul',
            contenu: `Un produit de facteurs est nul <strong>si et seulement si</strong> l'un au moins de ses facteurs est nul :<br>$$A \\times B = 0 \\iff A = 0 \\ \\text{ou} \\ B = 0.$$<br>
C'est l'outil clé pour résoudre les équations factorisées.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Résolution d\'une équation produit',
            contenu: `Résoudre $(x - 4)(2x + 6) = 0$.<br><br>
Un produit est nul si un facteur est nul :<br>
$x - 4 = 0 \\Rightarrow x = 4$,<br>
$2x + 6 = 0 \\Rightarrow 2x = -6 \\Rightarrow x = -3$.<br><br>
Les solutions sont $x = 4$ et $x = -3$.`
          }
        ]
      },
      {
        titre: 'Mise en équation de problèmes',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Étapes de résolution d\'un problème',
            contenu: `1. <strong>Choisir l'inconnue</strong> : « Soit $x$ le nombre cherché ».<br>2. <strong>Traduire</strong> l'énoncé par une équation.<br>3. <strong>Résoudre</strong> l'équation.<br>4. <strong>Vérifier</strong> et <strong>conclure</strong> par une phrase répondant à la question.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème d\'âges',
            contenu: `Un père a $40$ ans, son fils $10$ ans. Dans combien d'années l'âge du père sera-t-il le double de celui du fils ?<br><br>
Soit $x$ ce nombre d'années. On traduit : $40 + x = 2(10 + x)$.<br>
$40 + x = 20 + 2x \\Rightarrow 40 - 20 = 2x - x \\Rightarrow x = 20.$<br><br>
<em>Conclusion :</em> dans $20$ ans (père $60$, fils $30$, $60 = 2 \\times 30$). ✓`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Problème géométrique',
            contenu: `Un rectangle a un périmètre de $34$ cm. Sa longueur dépasse sa largeur de $5$ cm. Quelles sont ses dimensions ?<br><br>
Soit $x$ la largeur. Longueur $= x + 5$. Périmètre $: 2(x + x + 5) = 34$.<br>
$2(2x + 5) = 34 \\Rightarrow 4x + 10 = 34 \\Rightarrow 4x = 24 \\Rightarrow x = 6.$<br><br>
<em>Conclusion :</em> largeur $6$ cm, longueur $11$ cm.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-pythagore',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Théorème de Pythagore et racine carrée',
    ordre: 5,
    enrich: false,
    sections: [
      {
        titre: 'Racine carrée',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Racine carrée d\'un nombre positif',
            contenu: `La <strong>racine carrée</strong> d'un nombre positif $a$, notée $\\sqrt{a}$, est l'unique nombre <strong>positif</strong> dont le carré vaut $a$ :<br>$$\\sqrt{a} \\geq 0 \\quad \\text{et} \\quad (\\sqrt{a})^2 = a.$$<br>
<em>Exemples :</em> $\\sqrt{9} = 3$, $\\sqrt{0} = 0$, $\\sqrt{2} \\approx 1{,}414$.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés utiles',
            contenu: `Pour $a \\geq 0$ :<br>
$$(\\sqrt{a})^2 = a, \\qquad \\sqrt{a^2} = a.$$<br>
Les <strong>carrés parfaits</strong> ont une racine entière :<br>
$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 \\ldots$<br>
donc $\\sqrt{144} = 12$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Encadrer une racine carrée',
            contenu: `Pour encadrer $\\sqrt{a}$, on encadre $a$ entre deux carrés parfaits consécutifs.<br><br>
<em>Exemple :</em> $\\sqrt{30}$ : comme $25 < 30 < 36$, on a $5 < \\sqrt{30} < 6$.<br>
Plus finement : $5{,}4^2 = 29{,}16$ et $5{,}5^2 = 30{,}25$, donc $5{,}4 < \\sqrt{30} < 5{,}5$.`
          }
        ]
      },
      {
        titre: 'Théorème de Pythagore (direct)',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Théorème de Pythagore',
            contenu: `Si un triangle $ABC$ est <strong>rectangle en $A$</strong>, alors :<br>$$BC^2 = AB^2 + AC^2.$$<br>
Le carré de l'<strong>hypoténuse</strong> (le côté opposé à l'angle droit, le plus long) est égal à la somme des carrés des deux autres côtés.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une longueur',
            contenu: `1. Repérer l'angle droit et nommer l'hypoténuse.<br>2. Écrire l'égalité de Pythagore.<br>3. Remplacer les longueurs connues, isoler l'inconnue.<br>4. Prendre la racine carrée.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de l\'hypoténuse',
            contenu: `$ABC$ rectangle en $A$, $AB = 3$ cm, $AC = 4$ cm. Calculer $BC$.<br><br>
$BC^2 = AB^2 + AC^2 = 3^2 + 4^2 = 9 + 16 = 25.$<br>
$BC = \\sqrt{25} = 5$ cm.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'un côté de l\'angle droit',
            contenu: `$DEF$ rectangle en $D$, $EF = 13$ cm, $DE = 5$ cm. Calculer $DF$.<br><br>
$EF^2 = DE^2 + DF^2 \\Rightarrow 13^2 = 5^2 + DF^2.$<br>
$DF^2 = 169 - 25 = 144 \\Rightarrow DF = \\sqrt{144} = 12$ cm.`
          }
        ]
      },
      {
        titre: 'Réciproque de Pythagore',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Réciproque',
            contenu: `Dans un triangle $ABC$, si<br>$$BC^2 = AB^2 + AC^2$$<br>(où $[BC]$ est le plus grand côté), alors le triangle est <strong>rectangle en $A$</strong>.<br><br>
La <strong>contraposée</strong> permet de montrer qu'un triangle <em>n'est pas</em> rectangle : si $BC^2 \\neq AB^2 + AC^2$, le triangle n'est pas rectangle.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Prouver qu\'un triangle est rectangle',
            contenu: `1. Identifier le <strong>plus grand côté</strong> (candidat hypoténuse).<br>2. Calculer séparément le carré du plus grand côté.<br>3. Calculer la somme des carrés des deux autres.<br>4. Comparer : égaux → rectangle ; différents → non rectangle.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Application de la réciproque',
            contenu: `Un triangle a pour côtés $6$ cm, $8$ cm et $10$ cm. Est-il rectangle ?<br><br>
Plus grand côté : $10$. On compare $10^2$ et $6^2 + 8^2$ :<br>
$10^2 = 100$ ; $\\;6^2 + 8^2 = 36 + 64 = 100.$<br>
Égalité → le triangle est <strong>rectangle</strong> (l'angle droit est opposé au côté de $10$ cm).`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-thales',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Théorème de Thalès',
    ordre: 6,
    enrich: false,
    sections: [
      {
        titre: 'Configuration et énoncé',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Configuration de Thalès',
            contenu: `On considère deux droites $(BM)$ et $(CN)$ sécantes en $A$. Les points $B$, $M$ sont sur la première, $C$, $N$ sur la seconde, avec $(BC)$ et $(MN)$ deux droites.<br>
Au collège (4ème), on travaille la <strong>configuration triangle</strong> : $M \\in (AB)$, $N \\in (AC)$ et $(MN) \\parallel (BC)$.`
          },
          {
            type: 'th', label: 'THM',
            titre: 'Théorème de Thalès',
            contenu: `Soit un triangle $ABC$. $M$ un point de $(AB)$ et $N$ un point de $(AC)$.<br>
Si $(MN) \\parallel (BC)$, alors :<br>$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}.$$<br>
Les longueurs des côtés sont <strong>proportionnelles</strong>.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Lecture des rapports',
            contenu: `Les trois rapports sont égaux : c'est le <strong>coefficient de réduction / agrandissement</strong> $k$ qui transforme le grand triangle $ABC$ en petit triangle $AMN$ (ou inversement).<br><br>
Si $k < 1$ : réduction ; si $k > 1$ : agrandissement.`
          }
        ]
      },
      {
        titre: 'Calcul de longueurs',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode de calcul',
            contenu: `1. Vérifier la configuration (parallélisme, points alignés).<br>2. Écrire l'égalité des trois rapports.<br>3. Ne garder que les <strong>deux rapports</strong> contenant l'inconnue et trois longueurs connues.<br>4. Résoudre par <strong>produit en croix</strong>.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Application directe',
            contenu: `Triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$, $(MN) \\parallel (BC)$.<br>
$AM = 3$, $AB = 5$, $AN = 4{,}2$. Calculer $AC$.<br><br>
$\\dfrac{AM}{AB} = \\dfrac{AN}{AC} \\Rightarrow \\dfrac{3}{5} = \\dfrac{4{,}2}{AC}.$<br>
Produit en croix : $3 \\times AC = 5 \\times 4{,}2 = 21 \\Rightarrow AC = 7.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul du troisième côté',
            contenu: `Avec $AB = 8$, $AM = 6$, $BC = 12$, et $(MN) \\parallel (BC)$. Calculer $MN$.<br><br>
$\\dfrac{AM}{AB} = \\dfrac{MN}{BC} \\Rightarrow \\dfrac{6}{8} = \\dfrac{MN}{12}.$<br>
$MN = \\dfrac{6 \\times 12}{8} = \\dfrac{72}{8} = 9.$`
          }
        ]
      },
      {
        titre: 'Réciproque et parallélisme',
        cartes: [
          {
            type: 'th', label: 'THM',
            titre: 'Réciproque du théorème de Thalès',
            contenu: `Soit un triangle $ABC$, $M \\in (AB)$ et $N \\in (AC)$, les points placés <strong>dans le même ordre</strong> ($A$, $M$, $B$ et $A$, $N$, $C$).<br>
Si $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$, alors les droites $(MN)$ et $(BC)$ sont <strong>parallèles</strong>.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Prouver un parallélisme',
            contenu: `1. Vérifier l'alignement et l'<strong>ordre</strong> des points.<br>2. Calculer les deux rapports $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$ séparément.<br>3. Comparer : égaux → droites parallèles ; différents → non parallèles.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Vérifier le parallélisme',
            contenu: `$AM = 4$, $AB = 10$, $AN = 6$, $AC = 15$ (points dans le bon ordre). $(MN) \\parallel (BC)$ ?<br><br>
$\\dfrac{AM}{AB} = \\dfrac{4}{10} = 0{,}4$ ; $\\;\\dfrac{AN}{AC} = \\dfrac{6}{15} = 0{,}4.$<br>
Les rapports sont égaux → $(MN) \\parallel (BC)$.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-trigo',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Cosinus d\'un angle aigu',
    ordre: 7,
    enrich: true,
    sections: [
      {
        titre: 'Définition du cosinus',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Cosinus dans le triangle rectangle',
            contenu: `Dans un triangle rectangle, le <strong>cosinus</strong> d'un angle aigu est le rapport :<br>$$\\cos(\\widehat{\\text{angle}}) = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}}.$$<br>
Le côté <strong>adjacent</strong> est le côté de l'angle qui n'est pas l'hypoténuse. L'hypoténuse est le côté opposé à l'angle droit.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Encadrement du cosinus',
            contenu: `Pour tout angle aigu $\\alpha$ (avec $0° < \\alpha < 90°$) :<br>$$0 < \\cos(\\alpha) < 1.$$<br>
Plus l'angle est <strong>grand</strong>, plus son cosinus est <strong>petit</strong> (le cosinus décroît de $1$ vers $0$).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Repérer adjacent et hypoténuse',
            contenu: `Pour un angle aigu donné dans un triangle rectangle :<br>1. L'<strong>hypoténuse</strong> = côté face à l'angle droit.<br>2. Le côté <strong>adjacent</strong> = le côté qui « touche » l'angle (autre que l'hypoténuse).<br>3. Le côté <strong>opposé</strong> = celui face à l'angle (non utilisé pour le cosinus).`
          }
        ]
      },
      {
        titre: 'Calculer une longueur',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Méthode',
            contenu: `1. Faire un schéma, repérer l'angle, l'adjacent, l'hypoténuse.<br>2. Écrire $\\cos(\\alpha) = \\dfrac{\\text{adj}}{\\text{hyp}}$.<br>3. Remplacer par les valeurs connues.<br>4. Résoudre (produit en croix). Utiliser la touche $\\cos$ de la calculatrice (mode degré).`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Longueur du côté adjacent',
            contenu: `Triangle rectangle en $A$, $\\widehat{B} = 40°$, hypoténuse $BC = 10$ cm. Calculer $AB$ (adjacent à $\\widehat{B}$).<br><br>
$\\cos(40°) = \\dfrac{AB}{BC} = \\dfrac{AB}{10}.$<br>
$AB = 10 \\times \\cos(40°) \\approx 10 \\times 0{,}766 \\approx 7{,}66$ cm.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de l\'hypoténuse',
            contenu: `Triangle rectangle en $A$, $\\widehat{C} = 35°$, $AC = 6$ cm (adjacent à $\\widehat{C}$). Calculer $BC$.<br><br>
$\\cos(35°) = \\dfrac{AC}{BC} = \\dfrac{6}{BC} \\Rightarrow BC = \\dfrac{6}{\\cos(35°)} \\approx \\dfrac{6}{0{,}819} \\approx 7{,}33$ cm.`
          }
        ]
      },
      {
        titre: 'Calculer un angle',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Utiliser la touche cos⁻¹',
            contenu: `Si on connaît le cosinus d'un angle, on retrouve l'angle avec la touche $\\cos^{-1}$ (ou $\\text{Arccos}$) de la calculatrice :<br>$$\\cos(\\alpha) = r \\;\\Rightarrow\\; \\alpha = \\cos^{-1}(r).$$<br>
Vérifier que la calculatrice est en mode <strong>degré</strong>.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Trouver la mesure d\'un angle',
            contenu: `Triangle rectangle en $A$, $AB = 4$ cm (adjacent), $BC = 9$ cm (hypoténuse). Calculer $\\widehat{B}$.<br><br>
$\\cos(\\widehat{B}) = \\dfrac{AB}{BC} = \\dfrac{4}{9} \\approx 0{,}444.$<br>
$\\widehat{B} = \\cos^{-1}(0{,}444) \\approx 63{,}6°.$`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-translation',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Translations',
    ordre: 8,
    enrich: false,
    sections: [
      {
        titre: 'Définition et propriétés',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Translation',
            contenu: `Une <strong>translation</strong> est un glissement défini par une direction, un sens et une longueur (un « déplacement »). L'image $M'$ d'un point $M$ par la translation qui transforme $A$ en $B$ est telle que $[MM']$ et $[AB]$ ont :<br>— même direction (parallèles),<br>— même sens,<br>— même longueur.`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Propriétés conservées',
            contenu: `Une translation <strong>conserve</strong> :<br>— les longueurs (figure de même taille) ;<br>— les angles ;<br>— l'alignement, le parallélisme, le milieu ;<br>— les aires.<br><br>
C'est une <strong>isométrie</strong> : la figure image est superposable à la figure de départ (sans retournement).`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Parallélogramme',
            contenu: `Si $M'$ est l'image de $M$ par la translation transformant $A$ en $B$, alors $ABM'M$ est un <strong>parallélogramme</strong> (éventuellement aplati).<br>
Cela traduit l'égalité des « déplacements » : le glissement de $M$ vers $M'$ est identique à celui de $A$ vers $B$ (même direction, sens et longueur).`
          }
        ]
      },
      {
        titre: 'Construction',
        cartes: [
          {
            type: 'meth', label: 'METH',
            titre: 'Construire l\'image d\'un point',
            contenu: `Pour construire l'image $M'$ de $M$ par la translation qui amène $A$ sur $B$ :<br>1. Tracer la demi-droite issue de $M$, parallèle à $(AB)$, dans le même sens que $A \\to B$.<br>2. Reporter la longueur $AB$ à partir de $M$.<br>3. Le point obtenu est $M'$ (et $ABM'M$ est un parallélogramme).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Construire l\'image d\'une figure',
            contenu: `On translate chaque point « clé » (sommets) puis on relie les images dans le même ordre. Les segments image sont parallèles, de même longueur et même sens que les originaux.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Composition de translations',
            contenu: `Appliquer à un point $M$ la translation $t_1$ (de $A$ vers $B$) puis la translation $t_2$ (de $B$ vers $C$).<br><br>
$M \\xrightarrow{t_1} M_1 \\xrightarrow{t_2} M_2$. Le résultat est la translation qui amène $A$ sur $C$ : enchaîner deux translations revient à une seule translation (de $A$ vers $C$).`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-proport',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Proportionnalité et pourcentages',
    ordre: 9,
    enrich: false,
    sections: [
      {
        titre: 'Coefficient et 4ᵉ proportionnelle',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Tableau de proportionnalité',
            contenu: `Deux grandeurs sont <strong>proportionnelles</strong> si on passe de l'une à l'autre en multipliant toujours par le même nombre, le <strong>coefficient de proportionnalité</strong>.<br>
Dans un tableau de proportionnalité, les <strong>produits en croix</strong> sont égaux : $a \\times d = b \\times c$.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer une quatrième proportionnelle',
            contenu: `Pour trouver la valeur manquante $x$ d'un tableau de proportionnalité, on utilise le <strong>produit en croix</strong> :<br>
si $\\dfrac{a}{b} = \\dfrac{c}{x}$ alors $a \\times x = b \\times c$, donc $x = \\dfrac{b \\times c}{a}$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Application (recette)',
            contenu: `Pour $4$ personnes il faut $300$ g de farine. Combien pour $7$ personnes ?<br><br>
$\\dfrac{300}{4} = \\dfrac{x}{7} \\Rightarrow x = \\dfrac{300 \\times 7}{4} = \\dfrac{2100}{4} = 525$ g.`
          }
        ]
      },
      {
        titre: 'Pourcentages',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Appliquer un pourcentage',
            contenu: `Appliquer $t\\%$ à une quantité $Q$ :<br>$$t\\% \\text{ de } Q = \\frac{t}{100} \\times Q.$$<br>
<em>Exemple :</em> $15\\%$ de $80 = \\dfrac{15}{100} \\times 80 = 12.$`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Augmentation et réduction',
            contenu: `<strong>Augmenter</strong> de $t\\%$ : multiplier par $\\left(1 + \\dfrac{t}{100}\\right)$.<br>
<strong>Réduire</strong> de $t\\%$ : multiplier par $\\left(1 - \\dfrac{t}{100}\\right)$.<br><br>
<em>Exemple :</em> $+20\\% \\to \\times 1{,}20$ ; $\\;-30\\% \\to \\times 0{,}70$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul d\'un prix soldé',
            contenu: `Un article coûte $80$ € et subit une remise de $25\\%$. Prix soldé ?<br><br>
Coefficient : $1 - \\dfrac{25}{100} = 0{,}75.$<br>
Prix soldé $= 80 \\times 0{,}75 = 60$ €.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Trouver un pourcentage',
            contenu: `Sur $250$ élèves, $90$ font de l'allemand. Quel pourcentage ?<br><br>
$\\dfrac{90}{250} = 0{,}36 = \\dfrac{36}{100} = 36\\%.$`
          }
        ]
      },
      {
        titre: 'Vitesse et grandeurs composées',
        cartes: [
          {
            type: 'form', label: 'FORM',
            titre: 'Vitesse moyenne',
            contenu: `La <strong>vitesse moyenne</strong> relie distance et durée :<br>$$v = \\frac{d}{t}, \\qquad d = v \\times t, \\qquad t = \\frac{d}{v}.$$<br>
Unités cohérentes : km/h avec km et h ; m/s avec m et s.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Calcul de durée',
            contenu: `Un train parcourt $315$ km à la vitesse moyenne de $90$ km/h. Durée du trajet ?<br><br>
$t = \\dfrac{d}{v} = \\dfrac{315}{90} = 3{,}5$ h $= 3$ h $30$ min.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-fonc',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Introduction aux fonctions',
    ordre: 10,
    enrich: true,
    sections: [
      {
        titre: 'Notion de fonction',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Fonction et image',
            contenu: `Une <strong>fonction</strong> $f$ est un procédé qui, à chaque nombre $x$, associe un unique nombre noté $f(x)$, appelé <strong>image</strong> de $x$.<br>
On note $f : x \\mapsto f(x)$.<br><br>
<em>Exemple :</em> $f : x \\mapsto 3x + 2$. L'image de $4$ est $f(4) = 3 \\times 4 + 2 = 14$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Antécédent',
            contenu: `Un <strong>antécédent</strong> d'un nombre $y$ par $f$ est un nombre $x$ tel que $f(x) = y$.<br>
Trouver un antécédent revient à <strong>résoudre une équation</strong> $f(x) = y$.<br><br>
Un nombre peut avoir $0$, $1$ ou plusieurs antécédents.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer image et antécédent',
            contenu: `<strong>Image de $a$ :</strong> remplacer $x$ par $a$ dans $f(x)$ et calculer.<br>
<strong>Antécédent de $b$ :</strong> résoudre l'équation $f(x) = b$ d'inconnue $x$.`
          }
        ]
      },
      {
        titre: 'Représentations',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Représentation graphique',
            contenu: `La <strong>courbe représentative</strong> de $f$ est l'ensemble des points de coordonnées $(x\\,;\\,f(x))$ dans un repère.<br>
Lire une <strong>image</strong> : abscisse $x$ donnée → ordonnée du point. Lire un <strong>antécédent</strong> : ordonnée $y$ donnée → abscisse(s) du/des point(s).`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Tableau de valeurs',
            contenu: `Pour tracer ou étudier une fonction, on dresse un <strong>tableau de valeurs</strong> : on choisit des valeurs de $x$, on calcule les images, on place les points.<br><br>
Pour $f : x \\mapsto 2x - 1$ : $f(0) = -1$, $f(1) = 1$, $f(2) = 3$, $f(3) = 5$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Image et antécédent',
            contenu: `Soit $f : x \\mapsto x^2 - 1$.<br><br>
<strong>Image de $3$ :</strong> $f(3) = 3^2 - 1 = 8$.<br>
<strong>Antécédents de $3$ :</strong> résoudre $x^2 - 1 = 3$, soit $x^2 = 4$, donc $x = 2$ ou $x = -2$. Deux antécédents.`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-stat',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Statistiques',
    ordre: 11,
    enrich: true,
    sections: [
      {
        titre: 'Indicateurs de position',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Moyenne',
            contenu: `La <strong>moyenne</strong> d'une série est la somme de toutes les valeurs divisée par leur nombre :<br>$$\\bar{x} = \\frac{\\text{somme des valeurs}}{\\text{effectif total}}.$$<br>
Pour des valeurs pondérées par des effectifs $n_i$ : $\\bar{x} = \\dfrac{\\sum n_i x_i}{\\sum n_i}$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Médiane',
            contenu: `La <strong>médiane</strong> est une valeur qui partage la série <strong>ordonnée</strong> en deux moitiés de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures ou égales.<br><br>
Effectif impair : valeur centrale. Effectif pair : moyenne des deux valeurs centrales.`
          },
          {
            type: 'meth', label: 'METH',
            titre: 'Calculer la médiane',
            contenu: `1. <strong>Ordonner</strong> les valeurs dans l'ordre croissant.<br>2. Compter l'effectif $N$.<br>3. Si $N$ impair : la médiane est la $\\dfrac{N+1}{2}$-ième valeur.<br>4. Si $N$ pair : moyenne des $\\dfrac{N}{2}$-ième et $\\left(\\dfrac{N}{2}+1\\right)$-ième valeurs.`
          }
        ]
      },
      {
        titre: 'Dispersion et calculs',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Étendue',
            contenu: `L'<strong>étendue</strong> d'une série est la différence entre la plus grande et la plus petite valeur :<br>$$\\text{étendue} = x_{\\max} - x_{\\min}.$$<br>
Elle mesure la <strong>dispersion</strong> (l'amplitude) de la série.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Moyenne, médiane, étendue',
            contenu: `Notes : $8, 12, 15, 9, 14, 11, 16$.<br><br>
<strong>Moyenne :</strong> $\\dfrac{8+12+15+9+14+11+16}{7} = \\dfrac{85}{7} \\approx 12{,}1.$<br>
<strong>Ordonnées :</strong> $8, 9, 11, 12, 14, 15, 16$. $N = 7$ impair → médiane = $4^{\\text{e}}$ valeur $= 12$.<br>
<strong>Étendue :</strong> $16 - 8 = 8$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Moyenne pondérée',
            contenu: `Effectifs : $5$ élèves ont $10$, $8$ ont $12$, $7$ ont $15$.<br><br>
$\\bar{x} = \\dfrac{5 \\times 10 + 8 \\times 12 + 7 \\times 15}{5 + 8 + 7} = \\dfrac{50 + 96 + 105}{20} = \\dfrac{251}{20} = 12{,}55.$`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-4e-proba',
    filiere: '4eme',
    matiere: 'ma',
    titre: 'Probabilités',
    ordre: 12,
    enrich: true,
    sections: [
      {
        titre: 'Vocabulaire',
        cartes: [
          {
            type: 'def', label: 'DEF',
            titre: 'Expérience aléatoire et issues',
            contenu: `Une <strong>expérience aléatoire</strong> est une expérience dont on ne peut prévoir le résultat avec certitude (lancer un dé, tirer une carte).<br>
Chaque résultat possible est une <strong>issue</strong>. L'ensemble des issues forme l'<strong>univers</strong>.<br><br>
<em>Exemple :</em> lancer d'un dé → issues $\\{1, 2, 3, 4, 5, 6\\}$.`
          },
          {
            type: 'def', label: 'DEF',
            titre: 'Événement',
            contenu: `Un <strong>événement</strong> est un ensemble d'issues.<br>
— Événement <strong>certain</strong> : toujours réalisé (probabilité $1$).<br>
— Événement <strong>impossible</strong> : jamais réalisé (probabilité $0$).<br><br>
<em>Exemple :</em> « obtenir un nombre pair » avec un dé $= \\{2, 4, 6\\}$.`
          }
        ]
      },
      {
        titre: 'Calcul de probabilités',
        cartes: [
          {
            type: 'prop', label: 'PROP',
            titre: 'Probabilité d\'un événement',
            contenu: `La probabilité $p(A)$ d'un événement $A$ vérifie $0 \\leq p(A) \\leq 1$.<br>
Dans une situation d'<strong>équiprobabilité</strong> (issues également probables) :<br>$$p(A) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}.$$`
          },
          {
            type: 'prop', label: 'PROP',
            titre: 'Événement contraire',
            contenu: `L'<strong>événement contraire</strong> de $A$, noté $\\bar{A}$, est réalisé exactement quand $A$ ne l'est pas. On a :<br>$$p(\\bar{A}) = 1 - p(A).$$<br>
La somme des probabilités de toutes les issues vaut $1$.`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Lancer d\'un dé',
            contenu: `On lance un dé équilibré à $6$ faces.<br><br>
$p(\\text{« obtenir un } 4\\text{ »}) = \\dfrac{1}{6}.$<br>
$p(\\text{« obtenir un nombre pair »}) = \\dfrac{3}{6} = \\dfrac{1}{2}.$<br>
$p(\\text{« obtenir au moins } 2\\text{ »}) = 1 - p(\\text{« obtenir } 1\\text{ »}) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}.$`
          },
          {
            type: 'ex', label: 'EX',
            titre: 'Tirage dans une urne',
            contenu: `Une urne contient $4$ boules rouges, $3$ vertes, $5$ bleues ($12$ boules). On tire une boule au hasard.<br><br>
$p(\\text{rouge}) = \\dfrac{4}{12} = \\dfrac{1}{3}$ ; $\\;p(\\text{verte}) = \\dfrac{3}{12} = \\dfrac{1}{4}$.<br>
$p(\\text{« pas bleue »}) = 1 - \\dfrac{5}{12} = \\dfrac{7}{12}.$`
          }
        ]
      }
    ]
  }
]
