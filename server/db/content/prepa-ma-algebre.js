// CPGE — Mathématiques · Algèbre, réduction, arithmétique, probabilités
// Programme officiel CPGE scientifiques (2021/2022)
// matiere: 'ma' · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. STRUCTURES ALGÉBRIQUES : GROUPES   (id: ma-gr)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-gr', matiere: 'ma',
  titre: 'Structures algébriques : groupes', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Loi de composition interne et structure de groupe',
      cartes: [
        { type:'def', label:'DEF', titre:'Loi de composition interne',
          contenu:`Une <strong>loi de composition interne</strong> (l.c.i.) sur un ensemble $E$ est une application $* : E \\times E \\to E$, $(x,y) \\mapsto x*y$.<br>Elle est :<br><ul><li><strong>associative</strong> si $\\forall x,y,z \\in E,\\ (x*y)*z = x*(y*z)$ ;</li><li><strong>commutative</strong> si $\\forall x,y \\in E,\\ x*y = y*x$ ;</li><li>admet un <strong>élément neutre</strong> $e$ si $\\forall x \\in E,\\ x*e = e*x = x$.</li></ul>Quand il existe, le neutre est <strong>unique</strong>.` },
        { type:'def', label:'DEF', titre:'Groupe',
          contenu:`Un <strong>groupe</strong> est un couple $(G, *)$ où $*$ est une l.c.i. sur $G$ telle que :<br><ul><li>$*$ est <strong>associative</strong> ;</li><li>$*$ admet un <strong>élément neutre</strong> $e$ ;</li><li>tout élément $x$ admet un <strong>symétrique</strong> $x'$ : $x*x' = x'*x = e$.</li></ul>Le groupe est dit <strong>commutatif</strong> (ou <strong>abélien</strong>) si $*$ est commutative. En notation multiplicative, le symétrique de $x$ est noté $x^{-1}$ ; en notation additive, $-x$.` },
        { type:'prop', label:'PROP', titre:'Unicité du neutre et du symétrique',
          contenu:`Dans un groupe $(G,*)$ :<br><ul><li>l'<strong>élément neutre est unique</strong> ;</li><li>le <strong>symétrique de chaque élément est unique</strong> ;</li><li>$(x^{-1})^{-1} = x$ et $(x*y)^{-1} = y^{-1} * x^{-1}$ (attention à l'ordre).</li></ul><strong>Régularité</strong> : tout élément est simplifiable : $a*x = a*y \\Rightarrow x = y$ (et de même à droite).` },
        { type:'ex', label:'EX', titre:'Exemples fondamentaux de groupes',
          contenu:`<ul><li>$(\\mathbb{Z},+)$, $(\\mathbb{Q},+)$, $(\\mathbb{R},+)$, $(\\mathbb{C},+)$ : groupes abéliens.</li><li>$(\\mathbb{R}^*,\\times)$, $(\\mathbb{C}^*,\\times)$, $(\\mathbb{Q}^*,\\times)$ : abéliens.</li><li>$(\\mathbb{U},\\times)$ où $\\mathbb{U} = \\{ z \\in \\mathbb{C} \\mid |z|=1 \\}$, et $\\mathbb{U}_n$ (racines $n$-ièmes de l'unité).</li><li>$(GL_n(\\mathbb{K}),\\times)$ : groupe linéaire, <strong>non abélien</strong> pour $n \\ge 2$.</li><li>$(\\mathfrak{S}_n, \\circ)$ : groupe symétrique, non abélien pour $n \\ge 3$.</li></ul>` },
      ]
    },

    {
      titre: 'Sous-groupes',
      cartes: [
        { type:'def', label:'DEF', titre:'Sous-groupe',
          contenu:`Une partie $H$ de $(G,*)$ est un <strong>sous-groupe</strong> de $G$ si :<br><ul><li>$e \\in H$ (le neutre appartient à $H$) ;</li><li>$\\forall x,y \\in H,\\ x*y \\in H$ (stabilité par la loi) ;</li><li>$\\forall x \\in H,\\ x^{-1} \\in H$ (stabilité par symétrique).</li></ul>On note $H \\le G$. Muni de la loi induite, $(H,*)$ est alors lui-même un groupe.` },
        { type:'th', label:'THM', titre:'Caractérisation d\'un sous-groupe',
          contenu:`Une partie $H \\subset G$ est un sous-groupe de $G$ si et seulement si :<br>$$H \\neq \\varnothing \\quad \\text{et} \\quad \\forall x,y \\in H,\\ x * y^{-1} \\in H.$$<br>C'est le critère pratique de référence. <strong>Conséquence</strong> : une intersection quelconque de sous-groupes de $G$ est un sous-groupe de $G$ (la réunion, en général, non).` },
        { type:'th', label:'THM', titre:'Sous-groupes de $(\\mathbb{Z},+)$',
          contenu:`Les sous-groupes de $(\\mathbb{Z},+)$ sont <strong>exactement</strong> les ensembles de la forme :<br>$$n\\mathbb{Z} = \\{ nk \\mid k \\in \\mathbb{Z} \\}, \\qquad n \\in \\mathbb{N}.$$<br><strong>Preuve</strong> : si $H \\neq \\{0\\}$, on pose $n = \\min(H \\cap \\mathbb{N}^*)$ ; la division euclidienne de tout élément de $H$ par $n$ montre $H = n\\mathbb{Z}$. Ce résultat est la clé de l'arithmétique de $\\mathbb{Z}$.` },
        { type:'def', label:'DEF', titre:'Sous-groupe engendré',
          contenu:`Le <strong>sous-groupe engendré</strong> par une partie $A \\subset G$, noté $\\langle A \\rangle$, est le plus petit sous-groupe de $G$ contenant $A$ ; c'est l'intersection de tous les sous-groupes contenant $A$.<br>Pour un seul élément $a$ :<br>$$\\langle a \\rangle = \\{ a^k \\mid k \\in \\mathbb{Z} \\}$$<br>(en notation additive $\\langle a \\rangle = \\{ ka \\mid k \\in \\mathbb{Z} \\}$). C'est le sous-groupe <strong>monogène</strong> engendré par $a$.` },
      ]
    },

    {
      titre: 'Morphismes de groupes',
      cartes: [
        { type:'def', label:'DEF', titre:'Morphisme de groupes',
          contenu:`Soient $(G,*)$ et $(G',\\star)$ deux groupes. Une application $f : G \\to G'$ est un <strong>morphisme</strong> (ou homomorphisme) de groupes si :<br>$$\\forall x,y \\in G,\\quad f(x*y) = f(x) \\star f(y).$$<br><strong>Conséquences automatiques</strong> : $f(e_G) = e_{G'}$ et $f(x^{-1}) = f(x)^{-1}$.<br>Un morphisme bijectif est un <strong>isomorphisme</strong> ; un isomorphisme de $G$ dans $G$ est un <strong>automorphisme</strong>.` },
        { type:'def', label:'DEF', titre:'Noyau et image',
          contenu:`Soit $f : G \\to G'$ un morphisme. On définit :<br><ul><li>le <strong>noyau</strong> $\\ker f = \\{ x \\in G \\mid f(x) = e_{G'} \\} = f^{-1}(\\{e_{G'}\\})$ ;</li><li>l'<strong>image</strong> $\\mathrm{Im}\\, f = f(G) = \\{ f(x) \\mid x \\in G \\}$.</li></ul>$\\ker f$ est un sous-groupe de $G$ et $\\mathrm{Im}\\, f$ un sous-groupe de $G'$.` },
        { type:'th', label:'THM', titre:'Injectivité et surjectivité par noyau/image',
          contenu:`Soit $f : G \\to G'$ un morphisme de groupes.<br><ul><li>$f$ est <strong>injectif</strong> $\\iff \\ker f = \\{ e_G \\}$ ;</li><li>$f$ est <strong>surjectif</strong> $\\iff \\mathrm{Im}\\, f = G'$.</li></ul>La caractérisation de l'injectivité par le noyau est l'outil de référence (analogue à $\\ker u = \\{0\\}$ en algèbre linéaire).` },
        { type:'ex', label:'EX', titre:'Morphismes usuels',
          contenu:`<ul><li>$\\exp : (\\mathbb{R},+) \\to (\\mathbb{R}_+^*,\\times)$ est un isomorphisme (réciproque $\\ln$).</li><li>$\\theta \\mapsto e^{i\\theta}$ de $(\\mathbb{R},+)$ dans $(\\mathbb{U},\\times)$ : morphisme surjectif, de noyau $2\\pi\\mathbb{Z}$.</li><li>$\\det : (GL_n(\\mathbb{K}),\\times) \\to (\\mathbb{K}^*,\\times)$ : morphisme surjectif, de noyau $SL_n(\\mathbb{K})$.</li><li>$\\varepsilon : (\\mathfrak{S}_n,\\circ) \\to (\\{-1,1\\},\\times)$ : la signature.</li></ul>` },
      ]
    },

    {
      titre: 'Ordre d\'un élément et groupes cycliques',
      cartes: [
        { type:'def', label:'DEF', titre:'Ordre d\'un élément',
          contenu:`Soit $G$ un groupe (noté multiplicativement) et $a \\in G$. L'<strong>ordre</strong> de $a$ est, s'il existe, le plus petit entier $n \\ge 1$ tel que $a^n = e$ ; sinon $a$ est dit d'ordre infini.<br>L'ordre de $a$ est aussi le <strong>cardinal du sous-groupe</strong> $\\langle a \\rangle$ engendré par $a$ :<br>$$\\mathrm{ord}(a) = \\mathrm{Card}\\,\\langle a \\rangle.$$` },
        { type:'prop', label:'PROP', titre:'Propriété fondamentale de l\'ordre',
          contenu:`Soit $a$ d'ordre fini $n$. Alors pour $k \\in \\mathbb{Z}$ :<br>$$a^k = e \\iff n \\mid k.$$<br>Plus précisément, l'ensemble $\\{ k \\in \\mathbb{Z} \\mid a^k = e \\}$ est le sous-groupe $n\\mathbb{Z}$ de $\\mathbb{Z}$. <strong>Corollaire</strong> : l'ordre de $a^k$ vaut $\\dfrac{n}{\\mathrm{pgcd}(n,k)}$.` },
        { type:'def', label:'DEF', titre:'Groupe cyclique / monogène',
          contenu:`Un groupe $G$ est <strong>monogène</strong> s'il est engendré par un seul élément : $G = \\langle a \\rangle$. S'il est de plus <strong>fini</strong>, on le dit <strong>cyclique</strong>.<br><strong>Théorème de classification</strong> : tout groupe monogène infini est isomorphe à $(\\mathbb{Z},+)$ ; tout groupe cyclique de cardinal $n$ est isomorphe à $(\\mathbb{Z}/n\\mathbb{Z},+)$.` },
        { type:'ex', label:'EX', titre:'Le groupe $\\mathbb{U}_n$ des racines de l\'unité',
          contenu:`$\\mathbb{U}_n = \\{ z \\in \\mathbb{C} \\mid z^n = 1 \\} = \\{ e^{2ik\\pi/n} \\mid 0 \\le k \\le n-1 \\}$ est un groupe cyclique de cardinal $n$ pour $\\times$.<br>Il est engendré par $\\omega = e^{2i\\pi/n}$. Un élément $\\omega^k$ engendre $\\mathbb{U}_n$ (générateur, dit racine <strong>primitive</strong>) si et seulement si $\\mathrm{pgcd}(k,n) = 1$ : il y a $\\varphi(n)$ générateurs ($\\varphi$ = indicatrice d'Euler).` },
      ]
    },

    {
      titre: 'Le groupe symétrique $\\mathfrak{S}_n$',
      cartes: [
        { type:'def', label:'DEF', titre:'Permutations et groupe symétrique',
          contenu:`Une <strong>permutation</strong> de $\\{1,\\dots,n\\}$ est une bijection de $\\{1,\\dots,n\\}$ sur lui-même. L'ensemble $\\mathfrak{S}_n$ de ces permutations, muni de la composition $\\circ$, est un groupe de cardinal :<br>$$\\mathrm{Card}\\,\\mathfrak{S}_n = n!.$$<br>Il est <strong>non commutatif</strong> dès que $n \\ge 3$. On note une permutation par sa table à deux lignes.` },
        { type:'def', label:'DEF', titre:'Cycles et transpositions',
          contenu:`Un <strong>$p$-cycle</strong> $\\sigma = (a_1\\ a_2\\ \\dots\\ a_p)$ envoie $a_1 \\mapsto a_2 \\mapsto \\dots \\mapsto a_p \\mapsto a_1$ et fixe les autres éléments. Son <strong>support</strong> est $\\{a_1,\\dots,a_p\\}$ et son <strong>ordre</strong> est $p$.<br>Une <strong>transposition</strong> est un $2$-cycle $(i\\ j)$ : elle échange $i$ et $j$. <strong>Deux cycles à supports disjoints commutent.</strong>` },
        { type:'th', label:'THM', titre:'Décomposition en cycles et en transpositions',
          contenu:`<strong>Décomposition en cycles</strong> : toute permutation $\\sigma \\in \\mathfrak{S}_n$, distincte de l'identité, se décompose de manière <strong>unique</strong> (à l'ordre près) en produit de cycles à supports deux à deux disjoints.<br><strong>Génération</strong> : toute permutation est un produit de transpositions ; $\\mathfrak{S}_n$ est <strong>engendré par les transpositions</strong> (par exemple par les transpositions $(1\\ i)$, ou par les transpositions adjacentes $(i\\ i{+}1)$).` },
        { type:'def', label:'DEF', titre:'Signature',
          contenu:`La <strong>signature</strong> $\\varepsilon : \\mathfrak{S}_n \\to \\{-1,1\\}$ est l'<strong>unique morphisme de groupes</strong> non trivial de $(\\mathfrak{S}_n,\\circ)$ dans $(\\{-1,1\\},\\times)$ : $\\varepsilon(\\sigma \\circ \\tau) = \\varepsilon(\\sigma)\\,\\varepsilon(\\tau)$.<br>Toute transposition a pour signature $-1$. Si $\\sigma$ s'écrit comme produit de $k$ transpositions, alors $\\varepsilon(\\sigma) = (-1)^k$ (la parité de $k$ ne dépend pas de la décomposition). Un $p$-cycle a pour signature $(-1)^{p-1}$.` },
        { type:'meth', label:'METH', titre:'Calculer une signature en pratique',
          contenu:`<strong>Méthode</strong> : décomposer $\\sigma$ en cycles à supports disjoints, puis utiliser :<br>$$\\varepsilon(\\sigma) = \\prod_i (-1)^{p_i - 1} = (-1)^{\\,n - r}$$<br>où les $p_i$ sont les longueurs des cycles et $r$ le nombre d'orbites (cycles, points fixes compris).<br><strong>Exemple</strong> : $\\sigma = (1\\ 3\\ 5)(2\\ 4)$ dans $\\mathfrak{S}_5$ : $\\varepsilon = (-1)^{3-1}\\times(-1)^{2-1} = (+1)(-1) = -1$.` },
      ]
    },

    {
      titre: 'Théorème de Lagrange',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème de Lagrange',
          contenu:`Soit $G$ un groupe <strong>fini</strong> et $H$ un sous-groupe de $G$. Alors :<br>$$\\mathrm{Card}(H) \\ \\text{divise}\\ \\mathrm{Card}(G).$$<br>Le quotient $[G:H] = \\dfrac{\\mathrm{Card}(G)}{\\mathrm{Card}(H)}$ est l'<strong>indice</strong> de $H$ dans $G$. (Au programme, le cas commutatif est exigible ; l'énoncé général reste vrai.)` },
        { type:'prop', label:'PROP', titre:'Conséquences : ordre d\'un élément',
          contenu:`Soit $G$ un groupe fini de cardinal $n$ et $a \\in G$.<br><ul><li>L'<strong>ordre de tout élément divise $n = \\mathrm{Card}(G)$</strong> (car $\\mathrm{ord}(a) = \\mathrm{Card}\\langle a\\rangle$).</li><li><strong>Théorème de Lagrange (forme exponentielle)</strong> : $a^{n} = e$ pour tout $a \\in G$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Groupes d\'ordre premier',
          contenu:`Si $\\mathrm{Card}(G) = p$ est un nombre <strong>premier</strong>, alors $G$ est <strong>cyclique</strong>, isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$.<br><strong>Preuve</strong> : tout $a \\neq e$ a un ordre $> 1$ divisant $p$, donc égal à $p$ ; ainsi $\\langle a \\rangle = G$. Les seuls sous-groupes de $G$ sont alors $\\{e\\}$ et $G$.` },
        { type:'ex', label:'EX', titre:'Application au petit théorème de Fermat',
          contenu:`Le groupe $((\\mathbb{Z}/p\\mathbb{Z})^*,\\times)$ a pour cardinal $p-1$ ($p$ premier). Par Lagrange, tout élément $\\bar a$ vérifie $\\bar a^{\\,p-1} = \\bar 1$, d'où le <strong>petit théorème de Fermat</strong> :<br>$$a^{p-1} \\equiv 1 \\ [p] \\quad \\text{si } p \\nmid a, \\qquad a^{p} \\equiv a \\ [p] \\ \\text{pour tout } a.$$<br>C'est l'archétype d'une application arithmétique de Lagrange.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 2. RÉDUCTION : POLYNÔMES D'ENDOMORPHISMES   (id: ma-poly)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-poly', matiere: 'ma',
  titre: 'Réduction : polynômes d\'endomorphismes', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Polynôme d\'un endomorphisme',
      cartes: [
        { type:'def', label:'DEF', titre:'Évaluation d\'un polynôme en un endomorphisme',
          contenu:`Soit $u \\in \\mathcal{L}(E)$ et $P = \\sum_{k=0}^{d} a_k X^k \\in \\mathbb{K}[X]$. On pose :<br>$$P(u) = \\sum_{k=0}^{d} a_k\\, u^k \\in \\mathcal{L}(E), \\qquad u^0 = \\mathrm{id}_E.$$<br>De même pour une matrice $A$ : $P(A) = \\sum a_k A^k$. Si $u$ a pour matrice $A$ dans une base, alors $P(u)$ a pour matrice $P(A)$.` },
        { type:'th', label:'THM', titre:'Morphisme d\'évaluation',
          contenu:`L'application $\\Phi_u : \\mathbb{K}[X] \\to \\mathcal{L}(E)$, $P \\mapsto P(u)$, est un <strong>morphisme d'algèbres</strong> :<br>$$(P+Q)(u) = P(u)+Q(u), \\quad (\\lambda P)(u) = \\lambda P(u), \\quad (PQ)(u) = P(u)\\circ Q(u).$$<br><strong>Conséquence majeure</strong> : pour tous $P,Q$, $P(u)$ et $Q(u)$ <strong>commutent</strong> ($P(u)Q(u) = Q(u)P(u)$), car $PQ = QP$ dans $\\mathbb{K}[X]$.` },
        { type:'def', label:'DEF', titre:'Sous-espaces stables et polynômes',
          contenu:`Un sous-espace $F$ est <strong>stable</strong> par $u$ si $u(F) \\subset F$.<br><strong>Propriété</strong> : si $F$ est stable par $u$, il l'est par tout $P(u)$. Réciproquement, pour tout polynôme $P$, $\\ker P(u)$ et $\\mathrm{Im}\\, P(u)$ sont <strong>stables par $u$</strong> (car $u$ commute avec $P(u)$). C'est le mécanisme central de la réduction.` },
      ]
    },

    {
      titre: 'Polynôme annulateur et polynôme minimal',
      cartes: [
        { type:'def', label:'DEF', titre:'Polynôme annulateur',
          contenu:`Un polynôme $P \\in \\mathbb{K}[X]$ est <strong>annulateur</strong> de $u$ si $P(u) = 0$ (l'endomorphisme nul).<br>L'ensemble des polynômes annulateurs de $u$ est $\\ker \\Phi_u$ : c'est un <strong>idéal</strong> de $\\mathbb{K}[X]$. En dimension finie, cet idéal n'est pas réduit à $\\{0\\}$ (car la famille $(\\mathrm{id}, u, \\dots, u^{n^2})$ est liée dans $\\mathcal{L}(E)$).` },
        { type:'def', label:'DEF', titre:'Polynôme minimal',
          contenu:`En dimension finie, l'idéal des annulateurs de $u$ est de la forme $\\pi_u\\,\\mathbb{K}[X]$ pour un unique polynôme <strong>unitaire</strong> $\\pi_u$ : le <strong>polynôme minimal</strong> de $u$.<br><strong>Caractérisation</strong> : $\\pi_u$ est l'annulateur unitaire de plus bas degré, et :<br>$$P(u) = 0 \\iff \\pi_u \\mid P.$$` },
        { type:'prop', label:'PROP', titre:'Valeurs propres et polynôme annulateur',
          contenu:`Si $\\lambda$ est une valeur propre de $u$ et $P$ un polynôme annulateur, alors $P(\\lambda) = 0$.<br><strong>Conséquence</strong> : les valeurs propres de $u$ sont <strong>racines</strong> de tout polynôme annulateur, en particulier de $\\pi_u$. Mieux : les valeurs propres de $u$ sont <strong>exactement</strong> les racines de $\\pi_u$.` },
        { type:'ex', label:'EX', titre:'Lecture d\'un projecteur / symétrie',
          contenu:`<strong>Projecteur</strong> : $p^2 = p$, donc $X^2 - X = X(X-1)$ annule $p$. Si $p \\neq 0, \\mathrm{id}$, alors $\\pi_p = X(X-1)$ : $p$ est diagonalisable, valeurs propres $0$ et $1$.<br><strong>Symétrie</strong> : $s^2 = \\mathrm{id}$, $X^2 - 1 = (X-1)(X+1)$ annule $s$ : diagonalisable, valeurs propres $\\pm 1$.` },
      ]
    },

    {
      titre: 'Théorème de Cayley-Hamilton',
      cartes: [
        { type:'def', label:'DEF', titre:'Polynôme caractéristique',
          contenu:`Le <strong>polynôme caractéristique</strong> de $A \\in \\mathcal{M}_n(\\mathbb{K})$ est :<br>$$\\chi_A(X) = \\det(X I_n - A).$$<br>C'est un polynôme unitaire de degré $n$, dont les racines sont exactement les <strong>valeurs propres</strong> de $A$. On a $\\chi_A(X) = X^n - \\mathrm{tr}(A)\\,X^{n-1} + \\dots + (-1)^n \\det(A)$. Deux matrices semblables ont le même polynôme caractéristique.` },
        { type:'th', label:'THM', titre:'Théorème de Cayley-Hamilton',
          contenu:`Pour tout endomorphisme $u$ d'un espace de <strong>dimension finie</strong> (resp. toute matrice $A \\in \\mathcal{M}_n(\\mathbb{K})$), le polynôme caractéristique est annulateur :<br>$$\\chi_u(u) = 0 \\qquad (\\chi_A(A) = 0).$$<br><strong>Corollaire</strong> : le polynôme minimal <strong>divise</strong> le polynôme caractéristique : $\\pi_u \\mid \\chi_u$. En particulier $\\deg \\pi_u \\le n$.` },
        { type:'prop', label:'PROP', titre:'Mêmes racines pour $\\pi_u$ et $\\chi_u$',
          contenu:`$\\pi_u$ et $\\chi_u$ ont les <strong>mêmes racines</strong> (sans multiplicité) : ce sont les valeurs propres de $u$.<br>Ils diffèrent en général par les <strong>multiplicités</strong> : dans $\\chi_u$, l'exposant de $(X-\\lambda)$ est la multiplicité algébrique ; dans $\\pi_u$, c'est la taille du plus grand bloc de Jordan associé à $\\lambda$ (au programme : $\\pi_u$ a chaque valeur propre comme racine simple ssi $u$ diagonalisable).` },
        { type:'ex', label:'EX', titre:'Calcul de l\'inverse via Cayley-Hamilton',
          contenu:`Si $A$ est inversible et $\\chi_A(X) = X^n + c_{n-1}X^{n-1} + \\dots + c_1 X + c_0$ (avec $c_0 = (-1)^n\\det A \\neq 0$), alors $\\chi_A(A) = 0$ donne :<br>$$A^{-1} = -\\frac{1}{c_0}\\left( A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I_n \\right).$$<br>Méthode classique pour exprimer $A^{-1}$ comme polynôme en $A$.` },
      ]
    },

    {
      titre: 'Lemme des noyaux',
      cartes: [
        { type:'th', label:'THM', titre:'Lemme de décomposition des noyaux',
          contenu:`Soient $P_1, \\dots, P_r \\in \\mathbb{K}[X]$ <strong>deux à deux premiers entre eux</strong>, et $P = P_1 P_2 \\cdots P_r$. Alors :<br>$$\\ker P(u) = \\ker P_1(u) \\oplus \\ker P_2(u) \\oplus \\dots \\oplus \\ker P_r(u).$$<br>De plus, le projecteur sur $\\ker P_i(u)$ associé à cette décomposition est un <strong>polynôme en $u$</strong>. Chaque facteur $\\ker P_i(u)$ est <strong>stable par $u$</strong>.` },
        { type:'prop', label:'PROP', titre:'Décomposition par un annulateur scindé',
          contenu:`Si $P = \\prod_{i=1}^{r} (X - \\lambda_i)^{m_i}$ annule $u$ (les $\\lambda_i$ distincts), alors :<br>$$E = \\bigoplus_{i=1}^{r} \\ker\\big( (u - \\lambda_i\\,\\mathrm{id})^{m_i} \\big).$$<br>Ces sous-espaces sont les <strong>sous-espaces caractéristiques</strong>. C'est le point de départ de la décomposition de Dunford et de la trigonalisation.` },
        { type:'meth', label:'METH', titre:'Utiliser le lemme des noyaux',
          contenu:`<strong>Stratégie</strong> : pour étudier $u$, on cherche un annulateur $P$ et on le <strong>factorise</strong> en facteurs premiers entre eux. Le lemme des noyaux décompose alors $E$ en somme directe de sous-espaces stables, sur chacun desquels $u$ a un comportement simple.<br>Si l'annulateur est <strong>scindé à racines simples</strong>, chaque facteur est $\\ker(u-\\lambda_i\\,\\mathrm{id}) = E_{\\lambda_i}$ : $u$ est diagonalisable.` },
      ]
    },

    {
      titre: 'Diagonalisabilité par polynôme annulateur',
      cartes: [
        { type:'def', label:'DEF', titre:'Endomorphisme diagonalisable',
          contenu:`$u$ est <strong>diagonalisable</strong> s'il existe une base de $E$ formée de vecteurs propres de $u$, c'est-à-dire si $E = \\bigoplus_{\\lambda} E_\\lambda$ (somme directe des sous-espaces propres).<br>Matriciellement : $A$ est diagonalisable s'il existe $P \\in GL_n(\\mathbb{K})$ telle que $P^{-1}AP$ soit diagonale.` },
        { type:'th', label:'THM', titre:'Critère par polynôme annulateur scindé à racines simples',
          contenu:`<strong>Théorème (critère fondamental)</strong> : $u$ est diagonalisable si et seulement s'il existe un polynôme <strong>annulateur scindé à racines simples</strong>, c'est-à-dire :<br>$$\\exists\\, \\lambda_1, \\dots, \\lambda_r \\text{ distincts},\\quad \\prod_{i=1}^{r} (u - \\lambda_i\\,\\mathrm{id}) = 0.$$<br>De façon équivalente : <strong>$u$ est diagonalisable $\\iff \\pi_u$ est scindé à racines simples</strong> (dans $\\mathbb{K}$).` },
        { type:'prop', label:'PROP', titre:'Diagonalisabilité induite sur un sous-espace stable',
          contenu:`Si $u$ est diagonalisable et $F$ un sous-espace <strong>stable</strong> par $u$, alors l'endomorphisme induit $u_{|F}$ est diagonalisable.<br><strong>Raison</strong> : un annulateur scindé à racines simples de $u$ annule aussi $u_{|F}$. Ce résultat sert à montrer la <strong>codiagonalisation</strong> de deux endomorphismes qui commutent.` },
        { type:'ex', label:'EX', titre:'Étude de $A$ vérifiant $A^3 = A$',
          contenu:`<strong>Énoncé</strong> : $A \\in \\mathcal{M}_n(\\mathbb{R})$ vérifie $A^3 = A$. Est-elle diagonalisable ?<br><strong>Solution</strong> : $X^3 - X = X(X-1)(X+1)$ annule $A$ ; ce polynôme est <strong>scindé sur $\\mathbb{R}$ à racines simples</strong>. Donc $A$ est diagonalisable, et $\\mathrm{Sp}(A) \\subset \\{-1, 0, 1\\}$.` },
      ]
    },

    {
      titre: 'Trigonalisation',
      cartes: [
        { type:'def', label:'DEF', titre:'Endomorphisme trigonalisable',
          contenu:`$u$ est <strong>trigonalisable</strong> s'il existe une base de $E$ dans laquelle sa matrice est <strong>triangulaire supérieure</strong>. Matriciellement : $A$ est semblable à une matrice triangulaire supérieure $T$.<br>Sur la diagonale de $T$ figurent les valeurs propres de $u$, comptées avec leur <strong>multiplicité</strong>.` },
        { type:'th', label:'THM', titre:'Critère de trigonalisation',
          contenu:`$u$ est trigonalisable si et seulement si son polynôme <strong>caractéristique $\\chi_u$ est scindé</strong> sur $\\mathbb{K}$.<br><strong>De façon équivalente</strong> : $u$ est trigonalisable ssi $\\pi_u$ est scindé sur $\\mathbb{K}$.<br><strong>Corollaire majeur</strong> : sur $\\mathbb{K} = \\mathbb{C}$, <strong>tout</strong> endomorphisme (toute matrice) est trigonalisable, puisque tout polynôme y est scindé.` },
        { type:'prop', label:'PROP', titre:'Trace, déterminant et valeurs propres',
          contenu:`Si $\\chi_u$ est scindé, en notant $\\lambda_1, \\dots, \\lambda_n$ les valeurs propres comptées avec multiplicité :<br>$$\\mathrm{tr}(u) = \\sum_{i=1}^n \\lambda_i, \\qquad \\det(u) = \\prod_{i=1}^n \\lambda_i.$$<br>Plus généralement, pour tout $P$, les valeurs propres de $P(u)$ sont les $P(\\lambda_i)$ (avec multiplicités) : $\\mathrm{tr}(P(u)) = \\sum P(\\lambda_i)$.` },
        { type:'meth', label:'METH', titre:'Calculer $A^n$ par réduction',
          contenu:`<strong>Si $A$ diagonalisable</strong> : $A = PDP^{-1}$, $D = \\mathrm{diag}(\\lambda_i)$, alors $A^n = P D^n P^{-1}$ avec $D^n = \\mathrm{diag}(\\lambda_i^n)$.<br><strong>Si $A$ seulement trigonalisable</strong> : écrire $A = D + N$ (Dunford, $D$ diagonalisable, $N$ nilpotente, $DN=ND$) puis la formule du binôme, $N^k = 0$ au-delà d'un rang. Alternative : division euclidienne de $X^n$ par un annulateur.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 3. ANNEAUX, CORPS ET ARITHMÉTIQUE DE K[X]   (id: ma-ann)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-ann', matiere: 'ma',
  titre: 'Anneaux, corps et arithmétique de K[X]', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Anneaux et corps',
      cartes: [
        { type:'def', label:'DEF', titre:'Anneau',
          contenu:`Un <strong>anneau</strong> est un triplet $(A, +, \\times)$ où :<br><ul><li>$(A,+)$ est un groupe abélien (neutre $0_A$) ;</li><li>$\\times$ est associative, distributive sur $+$, et admet un neutre $1_A$.</li></ul>L'anneau est <strong>commutatif</strong> si $\\times$ l'est. On suppose toujours $1_A \\neq 0_A$ (anneau non nul). Exemples : $\\mathbb{Z}$, $\\mathbb{K}[X]$, $\\mathcal{M}_n(\\mathbb{K})$ (non commutatif).` },
        { type:'def', label:'DEF', titre:'Inversibles, diviseurs de zéro, intègre',
          contenu:`Un élément $a$ est <strong>inversible</strong> s'il existe $b$ tel que $ab = ba = 1$ ; les inversibles forment un groupe $(A^\\times, \\times)$.<br>$a \\neq 0$ est un <strong>diviseur de zéro</strong> s'il existe $b \\neq 0$ avec $ab = 0$.<br>Un anneau commutatif <strong>intègre</strong> est un anneau non nul <strong>sans diviseur de zéro</strong> : $ab = 0 \\Rightarrow a=0$ ou $b=0$. $\\mathbb{Z}$ et $\\mathbb{K}[X]$ sont intègres.` },
        { type:'def', label:'DEF', titre:'Corps',
          contenu:`Un <strong>corps</strong> est un anneau commutatif non nul dans lequel <strong>tout élément non nul est inversible</strong> : $A^\\times = A \\setminus \\{0\\}$.<br>Exemples : $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$, et $\\mathbb{Z}/p\\mathbb{Z}$ pour $p$ premier. <strong>Tout corps est intègre.</strong>` },
        { type:'form', label:'FORM', titre:'Formules dans un anneau commutatif',
          contenu:`Dans un anneau commutatif, pour $a, b$ et $n \\in \\mathbb{N}$ :<br>$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k} \\quad (\\text{binôme de Newton}),$$<br>$$a^n - b^n = (a-b)\\sum_{k=0}^{n-1} a^k b^{n-1-k}.$$<br>Ces identités exigent la <strong>commutativité</strong> de $a$ et $b$ (vraies dans un anneau quelconque si $ab = ba$).` },
      ]
    },

    {
      titre: 'Idéaux et morphismes d\'anneaux',
      cartes: [
        { type:'def', label:'DEF', titre:'Idéal',
          contenu:`Dans un anneau <strong>commutatif</strong> $A$, un <strong>idéal</strong> est une partie $I$ telle que :<br><ul><li>$(I,+)$ est un sous-groupe de $(A,+)$ ;</li><li>$\\forall a \\in A,\\ \\forall x \\in I,\\ a x \\in I$ (absorption).</li></ul>Exemples : $\\{0\\}$, $A$, et pour $a \\in A$ l'<strong>idéal principal</strong> $(a) = aA = \\{ ax \\mid x \\in A \\}$.` },
        { type:'def', label:'DEF', titre:'Morphisme d\'anneaux',
          contenu:`$f : A \\to B$ est un <strong>morphisme d'anneaux</strong> si :<br>$$f(x+y) = f(x)+f(y), \\quad f(xy) = f(x)f(y), \\quad f(1_A) = 1_B.$$<br>Le <strong>noyau</strong> $\\ker f = f^{-1}(\\{0_B\\})$ est un <strong>idéal</strong> de $A$ ; l'<strong>image</strong> est un sous-anneau de $B$. $f$ est injectif ssi $\\ker f = \\{0\\}$.` },
        { type:'th', label:'THM', titre:'Idéaux de $\\mathbb{Z}$ et de $\\mathbb{K}[X]$',
          contenu:`<strong>$\\mathbb{Z}$ et $\\mathbb{K}[X]$ sont principaux</strong> : tout idéal y est de la forme $(a)$.<br><ul><li>Idéaux de $\\mathbb{Z}$ : $n\\mathbb{Z}$, $n \\in \\mathbb{N}$.</li><li>Idéaux de $\\mathbb{K}[X]$ : $(P)$, $P$ unitaire ou nul, unique.</li></ul>Cette propriété est le fondement de l'<strong>arithmétique</strong> de ces deux anneaux (PGCD, Bézout, etc.).` },
      ]
    },

    {
      titre: 'Arithmétique de $\\mathbb{Z}$',
      cartes: [
        { type:'th', label:'THM', titre:'Division euclidienne dans $\\mathbb{Z}$',
          contenu:`Pour tous $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$, il existe un <strong>unique</strong> couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que :<br>$$a = bq + r \\quad \\text{avec} \\quad 0 \\le r < b.$$<br>$q$ est le <strong>quotient</strong>, $r$ le <strong>reste</strong>. C'est l'outil qui rend $\\mathbb{Z}$ principal et permet l'algorithme d'Euclide.` },
        { type:'def', label:'DEF', titre:'PGCD et théorème de Bézout',
          contenu:`Le <strong>PGCD</strong> de $a, b$ (non tous nuls) est l'unique $d \\in \\mathbb{N}^*$ tel que $a\\mathbb{Z} + b\\mathbb{Z} = d\\mathbb{Z}$.<br><strong>Théorème de Bézout</strong> : il existe $(u,v) \\in \\mathbb{Z}^2$ tels que :<br>$$au + bv = \\mathrm{pgcd}(a,b).$$<br>$a$ et $b$ sont <strong>premiers entre eux</strong> ($\\mathrm{pgcd}=1$) ssi $\\exists\\, u,v,\\ au+bv = 1$.` },
        { type:'th', label:'THM', titre:'Lemme de Gauss',
          contenu:`<strong>Lemme de Gauss</strong> : si $a \\mid bc$ et $a \\wedge b = 1$ (premiers entre eux), alors $a \\mid c$.<br><strong>Corollaires</strong> : si $a \\wedge b = 1$ et $a \\mid n$, $b \\mid n$, alors $ab \\mid n$.<br><strong>Lemme d'Euclide</strong> : si $p$ premier et $p \\mid ab$, alors $p \\mid a$ ou $p \\mid b$.` },
        { type:'meth', label:'METH', titre:'Algorithme d\'Euclide étendu',
          contenu:`<strong>Calcul du PGCD</strong> : suite des divisions $a = bq_0 + r_0$, $b = r_0 q_1 + r_1, \\dots$ ; le PGCD est le <strong>dernier reste non nul</strong>.<br><strong>Coefficients de Bézout</strong> : remonter l'algorithme exprime $d = au + bv$.<br><strong>Exemple</strong> : $\\mathrm{pgcd}(126, 35)$ : $126 = 3\\cdot 35 + 21$, $35 = 1\\cdot 21 + 14$, $21 = 1\\cdot 14 + 7$, $14 = 2\\cdot 7$. PGCD $= 7$.` },
      ]
    },

    {
      titre: 'Arithmétique de $\\mathbb{K}[X]$',
      cartes: [
        { type:'th', label:'THM', titre:'Division euclidienne des polynômes',
          contenu:`Pour $A, B \\in \\mathbb{K}[X]$ avec $B \\neq 0$, il existe un <strong>unique</strong> couple $(Q, R)$ tel que :<br>$$A = BQ + R \\quad \\text{avec} \\quad R = 0 \\ \\text{ou}\\ \\deg R < \\deg B.$$<br>Le degré joue ici le rôle de la valeur absolue dans $\\mathbb{Z}$. Cela fait de $\\mathbb{K}[X]$ un anneau principal.` },
        { type:'def', label:'DEF', titre:'PGCD, Bézout et Gauss dans $\\mathbb{K}[X]$',
          contenu:`Le <strong>PGCD</strong> de deux polynômes (non tous nuls) est le générateur <strong>unitaire</strong> de l'idéal $(A) + (B)$.<br><strong>Bézout</strong> : $A \\wedge B = 1 \\iff \\exists\\, U, V \\in \\mathbb{K}[X],\\ AU + BV = 1$.<br><strong>Gauss</strong> : si $A \\mid BC$ et $A \\wedge B = 1$, alors $A \\mid C$. L'algorithme d'Euclide s'applique mot pour mot.` },
        { type:'def', label:'DEF', titre:'Polynômes irréductibles',
          contenu:`$P \\in \\mathbb{K}[X]$ est <strong>irréductible</strong> si $\\deg P \\ge 1$ et ses seuls diviseurs sont les constantes non nulles et les $\\lambda P$ ($\\lambda \\in \\mathbb{K}^*$).<br><strong>Factorisation</strong> : tout polynôme non constant se décompose, de manière unique (à l'ordre et aux constantes près), en produit d'irréductibles. C'est l'analogue de la décomposition en facteurs premiers.` },
        { type:'th', label:'THM', titre:'Irréductibles sur $\\mathbb{C}$ et sur $\\mathbb{R}$',
          contenu:`<strong>Théorème de d'Alembert-Gauss</strong> : $\\mathbb{C}$ est algébriquement clos ; les irréductibles de $\\mathbb{C}[X]$ sont les $X - a$ (degré $1$).<br>Les <strong>irréductibles de $\\mathbb{R}[X]$</strong> sont :<br><ul><li>les degré $1$ : $X - a$ ;</li><li>les degré $2$ à <strong>discriminant strictement négatif</strong> : $X^2 + pX + q$, $p^2 - 4q < 0$.</li></ul>` },
      ]
    },

    {
      titre: 'Racines et multiplicité',
      cartes: [
        { type:'def', label:'DEF', titre:'Racine et ordre de multiplicité',
          contenu:`$a$ est <strong>racine</strong> de $P$ si $P(a) = 0$, ce qui équivaut à $(X - a) \\mid P$.<br>$a$ est racine de <strong>multiplicité $m$</strong> ($m \\ge 1$) si :<br>$$(X-a)^m \\mid P \\quad \\text{et} \\quad (X-a)^{m+1} \\nmid P.$$<br>Racine <strong>simple</strong> : $m = 1$ ; <strong>double</strong> : $m = 2$, etc.` },
        { type:'th', label:'THM', titre:'Caractérisation par les dérivées',
          contenu:`$a$ est racine de multiplicité $m$ de $P$ si et seulement si :<br>$$P(a) = P'(a) = \\dots = P^{(m-1)}(a) = 0 \\quad \\text{et} \\quad P^{(m)}(a) \\neq 0.$$<br>(En caractéristique nulle, programme.) <strong>Cas pratique</strong> : $a$ est racine au moins double ssi $P(a) = P'(a) = 0$.` },
        { type:'prop', label:'PROP', titre:'Nombre de racines et relations coefficients-racines',
          contenu:`Un polynôme non nul de degré $n$ a <strong>au plus $n$ racines</strong> comptées avec multiplicité. Sur $\\mathbb{C}$, il en a exactement $n$ (scindé).<br>Si $P = a_n \\prod (X - x_i)$, les <strong>relations de Viète</strong> donnent par exemple :<br>$$\\sum_i x_i = -\\frac{a_{n-1}}{a_n}, \\qquad \\prod_i x_i = (-1)^n \\frac{a_0}{a_n}.$$` },
        { type:'ex', label:'EX', titre:'Détecter une racine multiple',
          contenu:`<strong>Énoncé</strong> : pour quelles valeurs de $a$ le polynôme $P = X^3 - 3X + a$ a-t-il une racine double ?<br><strong>Solution</strong> : racine double en $r$ $\\Rightarrow P'(r) = 3r^2 - 3 = 0 \\Rightarrow r = \\pm 1$. Puis $P(r) = 0$ : $P(1) = a - 2 = 0$ ou $P(-1) = a + 2 = 0$. Donc $a = 2$ (racine double $1$) ou $a = -2$ (racine double $-1$).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 4. ESPACES PROBABILISÉS ET VARIABLES ALÉATOIRES   (id: ma-proba)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-proba', matiere: 'ma',
  titre: 'Espaces probabilisés et variables aléatoires', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Espaces probabilisés',
      cartes: [
        { type:'def', label:'DEF', titre:'Tribu (sigma-algèbre)',
          contenu:`Soit $\\Omega$ un ensemble (l'<strong>univers</strong>). Une <strong>tribu</strong> sur $\\Omega$ est une partie $\\mathcal{A}$ de $\\mathcal{P}(\\Omega)$ telle que :<br><ul><li>$\\Omega \\in \\mathcal{A}$ ;</li><li>stabilité par complémentaire : $A \\in \\mathcal{A} \\Rightarrow \\bar A \\in \\mathcal{A}$ ;</li><li>stabilité par réunion <strong>dénombrable</strong> : $(A_n)_{n\\in\\mathbb{N}} \\in \\mathcal{A}^{\\mathbb{N}} \\Rightarrow \\bigcup_n A_n \\in \\mathcal{A}$.</li></ul>Les éléments de $\\mathcal{A}$ sont les <strong>événements</strong>.` },
        { type:'def', label:'DEF', titre:'Mesure de probabilité',
          contenu:`Une <strong>probabilité</strong> sur $(\\Omega, \\mathcal{A})$ est une application $P : \\mathcal{A} \\to [0,1]$ telle que :<br><ul><li>$P(\\Omega) = 1$ ;</li><li><strong>$\\sigma$-additivité</strong> : pour toute famille $(A_n)$ d'événements <strong>deux à deux incompatibles</strong>, $$P\\Big(\\bigsqcup_{n} A_n\\Big) = \\sum_{n} P(A_n).$$</li></ul>Le triplet $(\\Omega, \\mathcal{A}, P)$ est un <strong>espace probabilisé</strong>.` },
        { type:'prop', label:'PROP', titre:'Propriétés élémentaires',
          contenu:`Pour des événements $A, B$ :<br><ul><li>$P(\\bar A) = 1 - P(A)$, $P(\\varnothing) = 0$ ;</li><li><strong>croissance</strong> : $A \\subset B \\Rightarrow P(A) \\le P(B)$ ;</li><li>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ ;</li><li><strong>continuité croissante</strong> : si $A_n \\uparrow A$, alors $P(A_n) \\to P(A)$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Sous-additivité et limite supérieure',
          contenu:`<strong>Sous-additivité</strong> (Boole) : pour toute suite d'événements,<br>$$P\\Big(\\bigcup_n A_n\\Big) \\le \\sum_n P(A_n).$$<br><strong>Continuité décroissante</strong> : si $A_n \\downarrow A$, alors $P(A_n) \\to P(A)$. Un événement <strong>négligeable</strong> est de probabilité nulle ; <strong>presque sûr</strong> de probabilité $1$.` },
      ]
    },

    {
      titre: 'Probabilités conditionnelles et indépendance',
      cartes: [
        { type:'def', label:'DEF', titre:'Probabilité conditionnelle',
          contenu:`Soit $B$ un événement tel que $P(B) > 0$. La <strong>probabilité conditionnelle</strong> de $A$ sachant $B$ est :<br>$$P_B(A) = P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}.$$<br>$P_B$ est elle-même une probabilité sur $(\\Omega, \\mathcal{A})$. On en déduit la <strong>formule des probabilités composées</strong> : $P(A \\cap B) = P(B)\\,P(A \\mid B)$.` },
        { type:'def', label:'DEF', titre:'Indépendance d\'événements',
          contenu:`Deux événements $A, B$ sont <strong>indépendants</strong> si :<br>$$P(A \\cap B) = P(A)\\,P(B).$$<br>(Si $P(B)>0$, cela équivaut à $P(A\\mid B) = P(A)$.)<br>Une famille $(A_i)$ est <strong>mutuellement indépendante</strong> si pour toute sous-famille finie, $P\\big(\\bigcap_i A_i\\big) = \\prod_i P(A_i)$. L'indépendance mutuelle est <strong>plus forte</strong> que l'indépendance deux à deux.` },
        { type:'th', label:'THM', titre:'Formule des probabilités totales',
          contenu:`Soit $(B_n)_{n}$ un <strong>système complet d'événements</strong> (partition de $\\Omega$ en événements, $P(B_n)>0$). Pour tout événement $A$ :<br>$$P(A) = \\sum_{n} P(A \\cap B_n) = \\sum_{n} P(B_n)\\, P(A \\mid B_n).$$<br>Outil central pour conditionner selon les « cas possibles ».` },
        { type:'th', label:'THM', titre:'Formule de Bayes',
          contenu:`Soit $(B_n)$ un système complet d'événements et $A$ un événement de probabilité non nulle. Pour tout $k$ :<br>$$P(B_k \\mid A) = \\frac{P(B_k)\\,P(A \\mid B_k)}{\\sum_{n} P(B_n)\\,P(A \\mid B_n)}.$$<br>Elle « renverse » le conditionnement : des <strong>causes</strong> $B_k$ vers l'<strong>effet</strong> observé $A$. $P(B_k)$ est la probabilité <em>a priori</em>, $P(B_k\\mid A)$ la probabilité <em>a posteriori</em>.` },
      ]
    },

    {
      titre: 'Variables aléatoires discrètes',
      cartes: [
        { type:'def', label:'DEF', titre:'Variable aléatoire discrète et loi',
          contenu:`Une <strong>variable aléatoire discrète</strong> (v.a.d.) $X$ est une application de $\\Omega$ dans un ensemble <strong>au plus dénombrable</strong> $X(\\Omega)$, telle que $(X = x) \\in \\mathcal{A}$ pour tout $x$.<br>Sa <strong>loi</strong> est la donnée des $P(X = x)$ pour $x \\in X(\\Omega)$ ; ces nombres sont positifs de somme $1$ :<br>$$\\sum_{x \\in X(\\Omega)} P(X = x) = 1.$$` },
        { type:'def', label:'DEF', titre:'Indépendance de variables aléatoires',
          contenu:`Deux v.a.d. $X, Y$ sont <strong>indépendantes</strong> si :<br>$$\\forall (x,y),\\quad P(X = x,\\, Y = y) = P(X = x)\\,P(Y = y).$$<br>Une famille $(X_i)$ est mutuellement indépendante si toute sous-famille finie se factorise de même. Si $X, Y$ indépendantes, alors $f(X)$ et $g(Y)$ le sont aussi.` },
        { type:'prop', label:'PROP', titre:'Fonction d\'une variable aléatoire',
          contenu:`Si $X$ est une v.a.d. et $f$ une fonction définie sur $X(\\Omega)$, alors $Y = f(X)$ est une v.a.d. de loi :<br>$$P(Y = y) = \\sum_{x\\,:\\, f(x) = y} P(X = x) = P\\big(X \\in f^{-1}(\\{y\\})\\big).$$<br><strong>Méthode du transfert</strong> pour déterminer la loi de $f(X)$ : regrouper les antécédents.` },
      ]
    },

    {
      titre: 'Lois usuelles',
      cartes: [
        { type:'def', label:'DEF', titre:'Loi de Bernoulli et loi binomiale',
          contenu:`<strong>Bernoulli</strong> $\\mathcal{B}(p)$ : $X(\\Omega) = \\{0,1\\}$, $P(X=1) = p$, $P(X=0) = 1-p$. Modélise un succès/échec.<br><strong>Binomiale</strong> $\\mathcal{B}(n,p)$ : nombre de succès lors de $n$ épreuves de Bernoulli <strong>indépendantes</strong> de paramètre $p$ :<br>$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad 0 \\le k \\le n.$$<br>$E(X) = np$, $V(X) = np(1-p)$.` },
        { type:'def', label:'DEF', titre:'Loi géométrique',
          contenu:`$X \\sim \\mathcal{G}(p)$ ($0 < p \\le 1$) : <strong>rang du premier succès</strong> dans une suite d'épreuves de Bernoulli indépendantes. $X(\\Omega) = \\mathbb{N}^*$ et :<br>$$P(X = k) = (1-p)^{k-1}\\, p.$$<br>$E(X) = \\dfrac{1}{p}$, $V(X) = \\dfrac{1-p}{p^2}$. <strong>Absence de mémoire</strong> : $P(X > n+k \\mid X > n) = P(X > k)$.` },
        { type:'def', label:'DEF', titre:'Loi de Poisson',
          contenu:`$X \\sim \\mathcal{P}(\\lambda)$ ($\\lambda > 0$) : $X(\\Omega) = \\mathbb{N}$ et :<br>$$P(X = k) = e^{-\\lambda}\\,\\frac{\\lambda^k}{k!}.$$<br>$E(X) = V(X) = \\lambda$. C'est la <strong>loi des événements rares</strong> : limite de $\\mathcal{B}(n, \\lambda/n)$ quand $n \\to +\\infty$. Si $X \\sim \\mathcal{P}(\\lambda)$, $Y \\sim \\mathcal{P}(\\mu)$ indépendantes, alors $X+Y \\sim \\mathcal{P}(\\lambda+\\mu)$.` },
        { type:'meth', label:'METH', titre:'Reconnaître la loi adaptée',
          contenu:`<strong>Décrire l'expérience pour identifier la loi :</strong><br><ul><li>Une épreuve oui/non $\\to$ <strong>Bernoulli</strong>.</li><li>Nombre de succès en $n$ essais indépendants identiques $\\to$ <strong>binomiale</strong>.</li><li>Temps/rang d'attente du premier succès $\\to$ <strong>géométrique</strong>.</li><li>Comptage d'événements rares sur une durée $\\to$ <strong>Poisson</strong>.</li></ul>Vérifier ensuite l'<strong>indépendance</strong> et la constance des paramètres.` },
      ]
    },

    {
      titre: 'Espérance et variance',
      cartes: [
        { type:'def', label:'DEF', titre:'Espérance',
          contenu:`Une v.a.d. $X$ est <strong>d'espérance finie</strong> si la famille $(x\\, P(X=x))$ est sommable. On pose alors :<br>$$E(X) = \\sum_{x \\in X(\\Omega)} x\\, P(X = x).$$<br><strong>Théorème de transfert</strong> : pour $f$ telle que $f(X)$ ait une espérance,<br>$$E\\big(f(X)\\big) = \\sum_{x} f(x)\\, P(X = x).$$` },
        { type:'prop', label:'PROP', titre:'Linéarité et positivité de l\'espérance',
          contenu:`L'espérance est <strong>linéaire</strong> : $E(aX + bY) = a\\,E(X) + b\\,E(Y)$ (dès que les espérances existent), et <strong>positive</strong> : $X \\ge 0 \\Rightarrow E(X) \\ge 0$ ; $X \\le Y \\Rightarrow E(X) \\le E(Y)$.<br><strong>Produit</strong> : si $X, Y$ sont <strong>indépendantes</strong> et d'espérance finie, alors $E(XY) = E(X)\\,E(Y)$ (la réciproque est fausse).` },
        { type:'def', label:'DEF', titre:'Variance et écart-type',
          contenu:`Si $X^2$ est d'espérance finie, la <strong>variance</strong> est :<br>$$V(X) = E\\big( (X - E(X))^2 \\big) = E(X^2) - E(X)^2 \\ \\ (\\text{König-Huygens}).$$<br>L'<strong>écart-type</strong> est $\\sigma(X) = \\sqrt{V(X)}$. Propriétés : $V(aX + b) = a^2 V(X)$ et $V(X) \\ge 0$, avec $V(X) = 0$ ssi $X$ est presque sûrement constante.` },
        { type:'th', label:'THM', titre:'Variance d\'une somme',
          contenu:`Pour deux v.a. admettant une variance :<br>$$V(X + Y) = V(X) + V(Y) + 2\\,\\mathrm{Cov}(X,Y),$$<br>où $\\mathrm{Cov}(X,Y) = E(XY) - E(X)E(Y)$. Si $X, Y$ sont <strong>indépendantes</strong>, $\\mathrm{Cov}(X,Y) = 0$ et $V(X+Y) = V(X) + V(Y)$. Pour $n$ v.a. indépendantes : $V\\big(\\sum X_i\\big) = \\sum V(X_i)$.` },
      ]
    },

    {
      titre: 'Inégalités et loi des grands nombres',
      cartes: [
        { type:'th', label:'THM', titre:'Inégalité de Markov',
          contenu:`Soit $X$ une v.a.d. <strong>positive</strong> d'espérance finie. Pour tout $a > 0$ :<br>$$P(X \\ge a) \\le \\frac{E(X)}{a}.$$<br>Inégalité de concentration la plus simple : elle majore la probabilité que $X$ prenne de grandes valeurs à partir de sa seule moyenne.` },
        { type:'th', label:'THM', titre:'Inégalité de Bienaymé-Tchebychev',
          contenu:`Soit $X$ une v.a.d. admettant une variance. Pour tout $\\varepsilon > 0$ :<br>$$P\\big( |X - E(X)| \\ge \\varepsilon \\big) \\le \\frac{V(X)}{\\varepsilon^2}.$$<br><strong>Preuve</strong> : appliquer Markov à la v.a. positive $(X - E(X))^2$ avec le seuil $\\varepsilon^2$. Elle quantifie la concentration de $X$ autour de sa moyenne.` },
        { type:'th', label:'THM', titre:'Loi faible des grands nombres',
          contenu:`Soit $(X_n)$ une suite de v.a. <strong>indépendantes</strong>, de <strong>même loi</strong>, d'espérance $m$ et de variance $\\sigma^2$ finies. On pose $\\overline{X}_n = \\dfrac{1}{n}\\sum_{k=1}^n X_k$. Alors pour tout $\\varepsilon > 0$ :<br>$$P\\big( |\\overline{X}_n - m| \\ge \\varepsilon \\big) \\xrightarrow[n \\to +\\infty]{} 0.$$<br>La moyenne empirique <strong>converge en probabilité</strong> vers l'espérance $m$.` },
        { type:'ex', label:'EX', titre:'Application : estimation d\'une fréquence',
          contenu:`<strong>Énoncé</strong> : on répète $n$ fois une épreuve de Bernoulli de paramètre $p$ inconnu, $S_n$ = nombre de succès. Encadrer la probabilité que la fréquence $S_n/n$ s'écarte de $p$ de plus de $\\varepsilon$.<br><strong>Solution</strong> : $E(S_n/n) = p$, $V(S_n/n) = \\dfrac{p(1-p)}{n} \\le \\dfrac{1}{4n}$. Par Bienaymé-Tchebychev :<br>$$P\\Big( \\Big| \\tfrac{S_n}{n} - p \\Big| \\ge \\varepsilon \\Big) \\le \\frac{p(1-p)}{n\\varepsilon^2} \\le \\frac{1}{4 n \\varepsilon^2} \\to 0.$$` },
      ]
    },

  ]
}

];
