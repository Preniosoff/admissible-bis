// Terminale — Spécialité Mathématiques
// Programme officiel MEN (réforme 2019, BO 2020)
// matiere: 'ma' · filiere: 'term-spe-maths'

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. COMBINATOIRE ET DÉNOMBREMENT  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-combi', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Combinatoire et dénombrement', ordre: 1, enrich: false,
  sections: [
    {
      titre: 'Cardinal, produit et listes',
      cartes: [
        { type:'def', label:'DEF', titre:'Cardinal d\'un ensemble fini',
          contenu:`Le <strong>cardinal</strong> d'un ensemble fini $E$, noté $\\mathrm{Card}(E)$ ou $|E|$, est son nombre d'éléments.<br><strong>Réunion disjointe</strong> : si $A \\cap B = \\varnothing$, alors $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B)$.<br><strong>Cas général</strong> : $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)$.<br><strong>Complémentaire</strong> : $\\mathrm{Card}(\\bar{A}) = \\mathrm{Card}(E) - \\mathrm{Card}(A)$.` },
        { type:'prop', label:'PROP', titre:'Principe multiplicatif',
          contenu:`Le cardinal d'un produit cartésien est le produit des cardinaux :<br>$$\\mathrm{Card}(A_1 \\times A_2 \\times \\dots \\times A_k) = \\mathrm{Card}(A_1) \\times \\mathrm{Card}(A_2) \\times \\dots \\times \\mathrm{Card}(A_k).$$<br><strong>Interprétation</strong> : si un choix se fait en $k$ étapes successives indépendantes offrant respectivement $n_1, n_2, \\dots, n_k$ possibilités, le nombre total de choix est $n_1 \\times n_2 \\times \\dots \\times n_k$.` },
        { type:'def', label:'DEF', titre:'$k$-uplets et $k$-listes',
          contenu:`Un <strong>$k$-uplet</strong> (ou $k$-liste) d'éléments de $E$ est un élément de $E^k$ : une suite ordonnée de $k$ éléments, <strong>avec répétitions autorisées</strong>.<br>Si $\\mathrm{Card}(E) = n$, le nombre de $k$-uplets est :<br>$$\\mathrm{Card}(E^k) = n^k.$$<br><strong>Exemple</strong> : nombre de codes PIN de 4 chiffres : $10^4 = 10\\,000$.` },
        { type:'ex', label:'EX', titre:'Tirages successifs avec remise',
          contenu:`<strong>Énoncé</strong> : une urne contient $5$ boules numérotées. On tire successivement $3$ boules <strong>avec remise</strong>. Combien de résultats possibles ?<br><strong>Solution</strong> : chaque tirage est une $3$-liste d'un ensemble à $5$ éléments. Avec remise, il y a répétition possible et l'ordre compte :<br>$$5^3 = 125 \\text{ résultats.}$$` },
      ]
    },
    {
      titre: 'Permutations et arrangements',
      cartes: [
        { type:'def', label:'DEF', titre:'Factorielle',
          contenu:`Pour $n \\in \\mathbb{N}^*$, la <strong>factorielle</strong> de $n$ est :<br>$$n! = 1 \\times 2 \\times 3 \\times \\dots \\times n = \\prod_{k=1}^{n} k.$$<br>Par convention $0! = 1$. Relation de récurrence : $(n+1)! = (n+1) \\times n!$.<br><strong>Valeurs</strong> : $1!=1$, $2!=2$, $3!=6$, $4!=24$, $5!=120$, $6!=720$.` },
        { type:'prop', label:'PROP', titre:'Permutations d\'un ensemble',
          contenu:`Une <strong>permutation</strong> d'un ensemble à $n$ éléments est un rangement ordonné de tous ses éléments (une $n$-liste sans répétition utilisant chaque élément une fois).<br>Le nombre de permutations d'un ensemble à $n$ éléments est :<br>$$n!$$<br><strong>Exemple</strong> : nombre de façons d'ordonner $5$ livres sur une étagère : $5! = 120$.` },
        { type:'def', label:'DEF', titre:'Arrangements (listes sans répétition)',
          contenu:`Un <strong>arrangement</strong> de $k$ éléments parmi $n$ est une $k$-liste <strong>sans répétition</strong> ($k \\le n$) : l'ordre compte, sans remise. Leur nombre est :<br>$$A_n^k = n \\times (n-1) \\times \\dots \\times (n-k+1) = \\frac{n!}{(n-k)!}.$$<br><strong>Exemple</strong> : nombre de podiums (or, argent, bronze) parmi $8$ athlètes : $A_8^3 = 8 \\times 7 \\times 6 = 336$.` },
        { type:'meth', label:'METH', titre:'Choisir : avec ou sans ordre, avec ou sans remise ?',
          contenu:`<strong>Avant de compter, identifier le type de tirage :</strong><br><ul><li><strong>Ordonné + avec remise</strong> $\\to$ $k$-listes : $n^k$.</li><li><strong>Ordonné + sans remise</strong> $\\to$ arrangements : $A_n^k = \\dfrac{n!}{(n-k)!}$.</li><li><strong>Non ordonné + sans remise</strong> $\\to$ combinaisons : $\\dbinom{n}{k}$.</li></ul>Question-clé : <em>« si j'échange deux éléments, est-ce un résultat différent ? »</em> Si oui, l'ordre compte.` },
      ]
    },
    {
      titre: 'Combinaisons',
      cartes: [
        { type:'def', label:'DEF', titre:'Combinaisons (parties à $k$ éléments)',
          contenu:`Une <strong>combinaison</strong> de $k$ éléments parmi $n$ est une partie à $k$ éléments d'un ensemble à $n$ éléments : <strong>l'ordre ne compte pas, sans répétition</strong>. Leur nombre, le <strong>coefficient binomial</strong>, est :<br>$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!} = \\frac{A_n^k}{k!} \\quad (0 \\le k \\le n).$$<br>On lit « $k$ parmi $n$ ». $\\dbinom{n}{k}$ compte le nombre de tirages simultanés de $k$ objets parmi $n$.` },
        { type:'prop', label:'PROP', titre:'Valeurs et symétrie',
          contenu:`<strong>Valeurs particulières</strong> :<br>$$\\binom{n}{0} = \\binom{n}{n} = 1, \\qquad \\binom{n}{1} = \\binom{n}{n-1} = n.$$<br><strong>Symétrie</strong> : choisir les $k$ éléments retenus revient à choisir les $n-k$ exclus :<br>$$\\binom{n}{k} = \\binom{n}{n-k}.$$` },
        { type:'th', label:'THM', titre:'Relation de Pascal',
          contenu:`Pour $1 \\le k \\le n-1$ :<br>$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$<br><strong>Idée de preuve</strong> : on fixe un élément $a$. Les parties à $k$ éléments se répartissent en celles contenant $a$ (il reste $k-1$ à choisir parmi $n-1$) et celles ne le contenant pas ($k$ parmi $n-1$).<br>Cette relation engendre le <strong>triangle de Pascal</strong>.` },
        { type:'ex', label:'EX', titre:'Comité et dénombrement par cas',
          contenu:`<strong>Énoncé</strong> : dans un groupe de $7$ filles et $5$ garçons, on forme un comité de $4$ personnes. Combien de comités comptent <strong>exactement 2 garçons</strong> ?<br><strong>Solution</strong> : choisir $2$ garçons parmi $5$ ET $2$ filles parmi $7$ (principe multiplicatif) :<br>$$\\binom{5}{2} \\times \\binom{7}{2} = 10 \\times 21 = 210.$$` },
      ]
    },
    {
      titre: 'Binôme de Newton',
      cartes: [
        { type:'th', label:'THM', titre:'Formule du binôme de Newton',
          contenu:`Pour tous réels (ou complexes) $a, b$ et tout $n \\in \\mathbb{N}$ :<br>$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k\\, b^{n-k}.$$<br>Les coefficients sont ceux de la $n$-ième ligne du triangle de Pascal.<br><strong>Exemple</strong> : $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$.` },
        { type:'prop', label:'PROP', titre:'Somme des coefficients binomiaux',
          contenu:`En posant $a = b = 1$ dans la formule du binôme :<br>$$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$<br><strong>Interprétation</strong> : un ensemble à $n$ éléments possède exactement $2^n$ parties (chaque élément est pris ou non).<br>En posant $a = 1, b = -1$ : $\\displaystyle\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0$ (pour $n \\ge 1$).` },
        { type:'meth', label:'METH', titre:'Extraire un coefficient d\'un développement',
          contenu:`Pour trouver le coefficient d'un terme précis dans $(a+b)^n$ :<br><strong>1.</strong> Écrire le terme général $\\dbinom{n}{k} a^k b^{n-k}$.<br><strong>2.</strong> Déterminer $k$ par identification des exposants.<br><strong>3.</strong> Calculer le coefficient binomial.<br><strong>Exemple</strong> : coefficient de $x^2$ dans $(2x+3)^5$. Terme : $\\dbinom{5}{2}(2x)^2 3^3 = 10 \\cdot 4 \\cdot 27\\, x^2 = 1080\\,x^2$.` },
        { type:'ex', label:'EX', titre:'Calcul d\'une somme alternée',
          contenu:`<strong>Énoncé</strong> : calculer $\\displaystyle S = \\sum_{k=0}^{4} \\binom{4}{k} 2^k$.<br><strong>Solution</strong> : on reconnaît le binôme avec $a = 2$, $b = 1$, $n = 4$ :<br>$$S = \\sum_{k=0}^{4} \\binom{4}{k} 2^k\\, 1^{4-k} = (2+1)^4 = 3^4 = 81.$$` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. RAISONNEMENT PAR RÉCURRENCE  (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-recurr', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Raisonnement par récurrence', ordre: 2, enrich: true,
  sections: [
    {
      titre: 'Principe de récurrence',
      cartes: [
        { type:'th', label:'THM', titre:'Principe de récurrence',
          contenu:`Soit $P(n)$ une propriété dépendant de l'entier $n$, et $n_0 \\in \\mathbb{N}$. Si :<br><strong>(1) Initialisation</strong> : $P(n_0)$ est vraie ;<br><strong>(2) Hérédité</strong> : pour tout $n \\ge n_0$, $P(n) \\Rightarrow P(n+1)$ ;<br>alors $P(n)$ est vraie pour tout entier $n \\ge n_0$.<br><strong>Image</strong> : une échelle dont on peut atteindre le premier barreau et passer de chaque barreau au suivant.` },
        { type:'meth', label:'METH', titre:'Rédiger une récurrence',
          contenu:`<strong>Plan type :</strong><br><strong>1.</strong> Énoncer clairement $P(n)$ et le rang initial $n_0$.<br><strong>2.</strong> <em>Initialisation</em> : vérifier $P(n_0)$ par calcul direct.<br><strong>3.</strong> <em>Hérédité</em> : « Soit $n \\ge n_0$. Supposons $P(n)$ vraie (HR). Montrons $P(n+1)$. »<br><strong>4.</strong> <em>Conclusion</em> : « D'après le principe de récurrence, $P(n)$ est vraie pour tout $n \\ge n_0$. »<br><strong>Piège</strong> : ne jamais oublier l'initialisation ni l'usage explicite de l'hypothèse de récurrence.` },
        { type:'ex', label:'EX', titre:'Somme des $n$ premiers entiers',
          contenu:`<strong>Énoncé</strong> : montrer $\\displaystyle\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$ pour tout $n \\ge 1$.<br><strong>Init.</strong> $n=1$ : $\\sum = 1$ et $\\frac{1 \\cdot 2}{2} = 1$. OK.<br><strong>Hérédité</strong> : supposons $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$. Alors<br>$\\sum_{k=1}^{n+1} k = \\frac{n(n+1)}{2} + (n+1) = (n+1)\\frac{n+2}{2} = \\frac{(n+1)(n+2)}{2}$. C'est $P(n+1)$. CQFD.` },
      ]
    },
    {
      titre: 'Récurrences classiques',
      cartes: [
        { type:'ex', label:'EX', titre:'Inégalité de Bernoulli',
          contenu:`<strong>Énoncé</strong> : pour $a > -1$ et tout $n \\in \\mathbb{N}$, $(1+a)^n \\ge 1 + na$.<br><strong>Init.</strong> $n=0$ : $1 \\ge 1$. OK.<br><strong>Hérédité</strong> : $(1+a)^{n+1} = (1+a)^n (1+a) \\ge (1+na)(1+a)$ car $1+a > 0$.<br>$(1+na)(1+a) = 1 + (n+1)a + na^2 \\ge 1 + (n+1)a$ car $na^2 \\ge 0$. CQFD.` },
        { type:'ex', label:'EX', titre:'Divisibilité par récurrence',
          contenu:`<strong>Énoncé</strong> : montrer que $4^n - 1$ est divisible par $3$ pour tout $n \\ge 0$.<br><strong>Init.</strong> $n=0$ : $4^0 - 1 = 0 = 3 \\times 0$. OK.<br><strong>Hérédité</strong> : supposons $4^n - 1 = 3k$. Alors $4^{n+1} - 1 = 4 \\cdot 4^n - 1 = 4(3k+1) - 1 = 12k + 3 = 3(4k+1)$.<br>Donc $4^{n+1} - 1$ est divisible par $3$. CQFD.` },
        { type:'meth', label:'METH', titre:'Récurrence pour majorer/encadrer une suite',
          contenu:`Pour montrer par récurrence qu'une suite $(u_n)$ vérifie un encadrement (ex. $0 \\le u_n \\le 2$) :<br><strong>1.</strong> Vérifier l'encadrement au rang initial.<br><strong>2.</strong> Supposer $a \\le u_n \\le b$ ; appliquer la fonction $f$ telle que $u_{n+1} = f(u_n)$.<br><strong>3.</strong> Utiliser la <strong>monotonie de $f$</strong> sur $[a,b]$ pour conclure $a \\le u_{n+1} \\le b$.<br>Cet encadrement sert ensuite à prouver convergence/monotonie.` },
      ]
    },
    {
      titre: 'Récurrence et structures',
      cartes: [
        { type:'prop', label:'PROP', titre:'Somme géométrique',
          contenu:`Pour $q \\ne 1$ et $n \\in \\mathbb{N}$ :<br>$$\\sum_{k=0}^{n} q^k = 1 + q + q^2 + \\dots + q^n = \\frac{1 - q^{n+1}}{1-q}.$$<br>Cette formule se démontre par récurrence (ou par télescopage). Elle est centrale pour les sommes de suites géométriques et l'étude de leurs limites.` },
        { type:'ex', label:'EX', titre:'Terme général d\'une suite récurrente',
          contenu:`<strong>Énoncé</strong> : $u_0 = 1$ et $u_{n+1} = 2u_n + 1$. Montrer $u_n = 2^{n+1} - 1$.<br><strong>Init.</strong> $n=0$ : $2^1 - 1 = 1 = u_0$. OK.<br><strong>Hérédité</strong> : $u_{n+1} = 2u_n + 1 = 2(2^{n+1}-1) + 1 = 2^{n+2} - 2 + 1 = 2^{n+2} - 1$. C'est $P(n+1)$. CQFD.` },
        { type:'meth', label:'METH', titre:'Récurrence forte',
          contenu:`Parfois $P(n+1)$ dépend de plusieurs rangs antérieurs (ex. suites $u_{n+2} = au_{n+1} + bu_n$). On utilise la <strong>récurrence forte</strong> :<br><strong>Hypothèse</strong> : $P(k)$ vraie pour <strong>tous</strong> les $k$ de $n_0$ à $n$.<br><strong>But</strong> : en déduire $P(n+1)$.<br>L'initialisation doit alors couvrir <strong>autant de rangs</strong> que nécessaire (souvent $n_0$ et $n_0+1$).` },
      ]
    },
    {
      titre: 'Pièges et erreurs classiques',
      cartes: [
        { type:'meth', label:'METH', titre:'Pourquoi l\'initialisation est indispensable',
          contenu:`L'hérédité seule ne suffit jamais. Considérons $P(n)$ : « $10^n + 1$ est divisible par $9$ ».<br><strong>Hérédité</strong> : si $10^n + 1 = 9k$, alors $10^{n+1}+1 = 10(9k - 1) + 1 = 90k - 9 = 9(10k-1)$ : héréditaire !<br>Pourtant $P(0)$ : $10^0 + 1 = 2$ n'est <strong>pas</strong> divisible par $9$. La propriété est <strong>fausse pour tout $n$</strong> : sans initialisation valide, l'hérédité ne prouve rien.` },
        { type:'meth', label:'METH', titre:'Utiliser réellement l\'hypothèse de récurrence',
          contenu:`Une erreur fréquente est de « prouver » $P(n+1)$ par un calcul direct <strong>sans se servir</strong> de $P(n)$ : c'est alors une démonstration directe, pas une récurrence (et souvent un raisonnement circulaire caché).<br><strong>Règle</strong> : dans l'hérédité, le passage décisif doit <strong>substituer</strong> l'expression fournie par $P(n)$. Surligner l'endroit où l'on emploie l'HR.` },
        { type:'ex', label:'EX', titre:'Somme des carrés',
          contenu:`<strong>Énoncé</strong> : montrer $\\displaystyle\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$ pour $n \\ge 1$.<br><strong>Init.</strong> $n=1$ : $1 = \\frac{1\\cdot2\\cdot3}{6}=1$. OK.<br><strong>Hérédité</strong> : $\\sum_{k=1}^{n+1}k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)\\big[n(2n+1)+6(n+1)\\big]}{6} = \\frac{(n+1)(n+2)(2n+3)}{6}$. CQFD.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. SUITES : LIMITES ET CONVERGENCE  (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-suite2', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Suites : limites et convergence', ordre: 3, enrich: true,
  sections: [
    {
      titre: 'Limite d\'une suite',
      cartes: [
        { type:'def', label:'DEF', titre:'Suite convergente',
          contenu:`$(u_n)$ <strong>converge vers $\\ell$</strong> ($\\ell \\in \\mathbb{R}$) si tout intervalle ouvert contenant $\\ell$ contient tous les termes de la suite à partir d'un certain rang.<br><strong>Formellement</strong> : $\\forall \\varepsilon > 0,\\ \\exists N \\in \\mathbb{N},\\ \\forall n \\ge N,\\ |u_n - \\ell| < \\varepsilon$.<br>On note $\\displaystyle\\lim_{n \\to +\\infty} u_n = \\ell$. Une suite non convergente est <strong>divergente</strong>.` },
        { type:'def', label:'DEF', titre:'Limite infinie',
          contenu:`$(u_n)$ <strong>tend vers $+\\infty$</strong> si tout intervalle $]A, +\\infty[$ contient tous les termes à partir d'un certain rang :<br>$\\forall A \\in \\mathbb{R},\\ \\exists N,\\ \\forall n \\ge N,\\ u_n > A$.<br>De même pour $-\\infty$ avec $u_n < A$.<br><strong>Attention</strong> : une suite peut diverger <strong>sans</strong> tendre vers l'infini (ex. $u_n = (-1)^n$ oscille).` },
        { type:'prop', label:'PROP', titre:'Limites de référence',
          contenu:`$$\\lim_{n\\to+\\infty} \\frac{1}{n} = \\lim_{n\\to+\\infty} \\frac{1}{\\sqrt{n}} = \\lim_{n\\to+\\infty} \\frac{1}{n^2} = 0,$$<br>$$\\lim_{n\\to+\\infty} n = \\lim_{n\\to+\\infty} \\sqrt{n} = \\lim_{n\\to+\\infty} n^2 = +\\infty.$$<br>Les opérations sur les limites (somme, produit, quotient) s'appliquent comme pour les fonctions, avec les mêmes <strong>formes indéterminées</strong> : $\\infty - \\infty$, $0 \\times \\infty$, $\\frac{\\infty}{\\infty}$, $\\frac{0}{0}$.` },
      ]
    },
    {
      titre: 'Théorèmes de convergence',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème des gendarmes (suites)',
          contenu:`Si à partir d'un certain rang $v_n \\le u_n \\le w_n$, et si $\\displaystyle\\lim v_n = \\lim w_n = \\ell$ ($\\ell \\in \\mathbb{R}$), alors $\\displaystyle\\lim u_n = \\ell$.<br><strong>Corollaire (comparaison)</strong> : si $u_n \\ge v_n$ et $\\lim v_n = +\\infty$, alors $\\lim u_n = +\\infty$.<br><strong>Exemple</strong> : $-\\frac{1}{n} \\le \\frac{\\sin n}{n} \\le \\frac{1}{n}$ donc $\\frac{\\sin n}{n} \\to 0$.` },
        { type:'th', label:'THM', titre:'Théorème de la limite monotone',
          contenu:`<strong>Toute suite croissante et majorée converge.</strong> Toute suite décroissante et minorée converge.<br>Une suite <strong>croissante non majorée tend vers $+\\infty$</strong>.<br><strong>Attention</strong> : ce théorème garantit l'existence de la limite mais ne la donne pas (la limite est $\\le$ au majorant, pas forcément égale).` },
        { type:'th', label:'THM', titre:'Limite d\'une suite géométrique',
          contenu:`Soit $q \\in \\mathbb{R}$. La suite $(q^n)$ vérifie :<br><ul><li>si $q > 1$ : $\\displaystyle\\lim q^n = +\\infty$ ;</li><li>si $q = 1$ : $\\lim q^n = 1$ ;</li><li>si $-1 < q < 1$ : $\\displaystyle\\lim q^n = 0$ ;</li><li>si $q \\le -1$ : $(q^n)$ <strong>diverge</strong> (pas de limite).</li></ul>Preuve de $q^n \\to +\\infty$ pour $q>1$ via l'inégalité de Bernoulli.` },
        { type:'meth', label:'METH', titre:'Déterminer la limite d\'une suite',
          contenu:`<strong>Stratégies usuelles :</strong><br><strong>1.</strong> Reconnaître une suite géométrique ou de référence.<br><strong>2.</strong> Factoriser par le terme dominant (FI $\\frac{\\infty}{\\infty}$).<br><strong>3.</strong> Encadrer (gendarmes) si présence de $\\sin$, $\\cos$, $(-1)^n$.<br><strong>4.</strong> Si $u_{n+1}=f(u_n)$ converge vers $\\ell$ et $f$ continue : $\\ell$ vérifie $f(\\ell) = \\ell$ (point fixe).<br><strong>5.</strong> Théorème de la limite monotone pour prouver l'existence.` },
      ]
    },
    {
      titre: 'Suites adjacentes',
      cartes: [
        { type:'def', label:'DEF', titre:'Suites adjacentes',
          contenu:`Deux suites $(u_n)$ et $(v_n)$ sont <strong>adjacentes</strong> si :<br><strong>(1)</strong> $(u_n)$ est croissante ;<br><strong>(2)</strong> $(v_n)$ est décroissante ;<br><strong>(3)</strong> $\\displaystyle\\lim_{n\\to+\\infty} (v_n - u_n) = 0$.<br>Intuitivement, les deux suites se « rapprochent » et encadrent une valeur commune.` },
        { type:'th', label:'THM', titre:'Théorème des suites adjacentes',
          contenu:`Si $(u_n)$ et $(v_n)$ sont <strong>adjacentes</strong>, alors elles <strong>convergent vers une même limite $\\ell$</strong>, et pour tout $n$ :<br>$$u_n \\le \\ell \\le v_n.$$<br>Ce théorème fournit un <strong>encadrement</strong> de $\\ell$ et une vitesse de convergence ($|v_n - u_n|$ majore l'erreur). Il sert à définir des constantes (ex. approximations de $e$, dichotomie).` },
        { type:'ex', label:'EX', titre:'Application : convergence par dichotomie',
          contenu:`<strong>Énoncé</strong> : $f$ continue, $f(a)<0<f(b)$. On définit $a_n, b_n$ par dichotomie (milieu $m=\\frac{a_n+b_n}{2}$, on garde la moitié changeant de signe).<br><strong>Analyse</strong> : $(a_n)$ croît, $(b_n)$ décroît, et $b_n - a_n = \\frac{b-a}{2^n} \\to 0$. Donc $(a_n)$ et $(b_n)$ sont adjacentes : elles convergent vers la racine $c$ de $f$, avec une erreur $\\le \\frac{b-a}{2^n}$.` },
      ]
    },
    {
      titre: 'Suites récurrentes',
      cartes: [
        { type:'meth', label:'METH', titre:'Étude d\'une suite $u_{n+1} = f(u_n)$',
          contenu:`<strong>Démarche complète :</strong><br><strong>1.</strong> Stabilité : montrer par récurrence que $u_n$ reste dans un intervalle $I$ stable par $f$.<br><strong>2.</strong> Monotonie : étudier le signe de $u_{n+1} - u_n$, ou utiliser la monotonie de $f$.<br><strong>3.</strong> Bornitude : déduire que $(u_n)$ est majorée/minorée.<br><strong>4.</strong> Convergence : théorème de la limite monotone.<br><strong>5.</strong> Valeur : résoudre $f(\\ell) = \\ell$ (points fixes) si $f$ continue.` },
        { type:'ex', label:'EX', titre:'Suite récurrente convergente',
          contenu:`<strong>Énoncé</strong> : $u_0 = 0$, $u_{n+1} = \\sqrt{2 + u_n}$. Étudier $(u_n)$.<br><strong>Bornes</strong> : par récurrence $0 \\le u_n \\le 2$ (car $f(x)=\\sqrt{2+x}$ croît, $f(2)=2$).<br><strong>Monotonie</strong> : $u_1 = \\sqrt 2 > u_0$ et $f$ croissante $\\Rightarrow (u_n)$ croissante.<br><strong>Conv.</strong> : croissante majorée $\\Rightarrow$ converge vers $\\ell$ tel que $\\ell = \\sqrt{2+\\ell}$, soit $\\ell^2 - \\ell - 2 = 0$, $\\ell = 2$.` },
        { type:'prop', label:'PROP', titre:'Limite et point fixe',
          contenu:`Si $u_{n+1} = f(u_n)$ avec $f$ <strong>continue</strong> en $\\ell$, et si $(u_n)$ converge vers $\\ell$, alors $\\ell$ est un <strong>point fixe</strong> de $f$ :<br>$$f(\\ell) = \\ell.$$<br><strong>Justification</strong> : passage à la limite dans $u_{n+1} = f(u_n)$, en utilisant la continuité de $f$.<br><strong>Réciproque fausse</strong> : un point fixe n'est pas toujours limite (point fixe répulsif si $|f'(\\ell)| > 1$).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. LIMITES DE FONCTIONS ET CONTINUITÉ  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-limcont', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Limites de fonctions et continuité', ordre: 4, enrich: false,
  sections: [
    {
      titre: 'Limites de fonctions',
      cartes: [
        { type:'def', label:'DEF', titre:'Limite en l\'infini',
          contenu:`$\\displaystyle\\lim_{x\\to+\\infty} f(x) = \\ell$ ($\\ell \\in \\mathbb{R}$) signifie : tout intervalle ouvert autour de $\\ell$ contient $f(x)$ pour $x$ assez grand. La droite $y = \\ell$ est alors <strong>asymptote horizontale</strong>.<br>$\\displaystyle\\lim_{x\\to+\\infty} f(x) = +\\infty$ : $f(x)$ dépasse tout réel $A$ pour $x$ assez grand.<br><strong>Références</strong> : $\\lim_{+\\infty}\\frac{1}{x}=0$, $\\lim_{+\\infty} x^n = +\\infty$, $\\lim_{+\\infty}\\sqrt x = +\\infty$.` },
        { type:'def', label:'DEF', titre:'Limite infinie en un point — asymptote verticale',
          contenu:`Si $\\displaystyle\\lim_{x\\to a} f(x) = \\pm\\infty$, la droite $x = a$ est une <strong>asymptote verticale</strong>.<br><strong>Limites unilatérales</strong> : $\\lim_{x\\to a^+}$ (par valeurs $>a$) et $\\lim_{x\\to a^-}$ (par valeurs $<a$) peuvent différer.<br><strong>Exemple</strong> : $\\displaystyle\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty$, $\\displaystyle\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty$.` },
        { type:'prop', label:'PROP', titre:'Opérations et formes indéterminées',
          contenu:`Les limites s'additionnent, se multiplient et se divisent comme attendu, <strong>sauf</strong> dans les quatre <strong>formes indéterminées</strong> (FI) :<br>$$\\infty - \\infty, \\quad 0 \\times \\infty, \\quad \\frac{\\infty}{\\infty}, \\quad \\frac{0}{0}.$$<br>Une FI exige un traitement spécifique (factorisation, conjugué, croissances comparées).` },
        { type:'meth', label:'METH', titre:'Lever une forme indéterminée',
          contenu:`<strong>Fraction rationnelle en $\\pm\\infty$</strong> : factoriser par le terme de plus haut degré.<br>$\\dfrac{3x^2 - x}{2x^2 + 1} = \\dfrac{x^2(3 - \\frac1x)}{x^2(2 + \\frac1{x^2})} \\to \\dfrac{3}{2}$.<br><strong>FI $\\frac00$ en $a$</strong> : factoriser $(x-a)$ au numérateur et dénominateur.<br><strong>Avec racines ($\\infty-\\infty$)</strong> : multiplier par la quantité conjuguée.<br><strong>Exp/ln/poly</strong> : croissances comparées.` },
      ]
    },
    {
      titre: 'Continuité',
      cartes: [
        { type:'def', label:'DEF', titre:'Continuité en un point, sur un intervalle',
          contenu:`$f$ est <strong>continue en $a$</strong> si $\\displaystyle\\lim_{x\\to a} f(x) = f(a)$.<br>$f$ est continue sur $I$ si elle l'est en chaque point de $I$.<br><strong>Fonctions continues usuelles</strong> : polynômes, fractions rationnelles, $\\sqrt{\\ }$, $\\exp$, $\\ln$, $\\sin$, $\\cos$, $|\\cdot|$ sur leur domaine. Sommes, produits, quotients et composées de fonctions continues sont continues.` },
        { type:'prop', label:'PROP', titre:'Continuité et dérivabilité',
          contenu:`<strong>Toute fonction dérivable sur $I$ est continue sur $I$.</strong><br>La <strong>réciproque est fausse</strong> : $x \\mapsto |x|$ est continue en $0$ mais non dérivable en $0$ (pente $-1$ à gauche, $+1$ à droite).<br>De même $x \\mapsto \\sqrt{x}$ est continue en $0$ mais y a une tangente verticale (non dérivable).` },
        { type:'meth', label:'METH', titre:'Suite $u_{n+1}=f(u_n)$ et continuité',
          contenu:`La continuité justifie le passage à la limite dans une suite récurrente : si $u_{n+1}=f(u_n)$, $f$ continue en $\\ell$, et $u_n \\to \\ell$, alors $f(\\ell)=\\ell$.<br>C'est l'outil qui relie l'étude des suites récurrentes à la résolution d'une équation $f(x)=x$.<br>Sans continuité, ce passage à la limite est <strong>injustifié</strong>.` },
      ]
    },
    {
      titre: 'Théorème des valeurs intermédiaires',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème des valeurs intermédiaires (TVI)',
          contenu:`Soit $f$ <strong>continue</strong> sur $[a,b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe (au moins) un $c \\in [a,b]$ tel que $f(c) = k$.<br><strong>Conséquence (cas $k=0$)</strong> : si $f$ continue change de signe sur $[a,b]$ (i.e. $f(a)f(b) < 0$), alors $f$ s'annule au moins une fois sur $]a,b[$.` },
        { type:'th', label:'THM', titre:'Corollaire : théorème de la bijection',
          contenu:`Si $f$ est <strong>continue et strictement monotone</strong> sur $[a,b]$, alors pour tout $k$ entre $f(a)$ et $f(b)$, l'équation $f(x)=k$ admet une <strong>unique</strong> solution dans $[a,b]$.<br>Autrement dit, $f$ réalise une <strong>bijection</strong> de $[a,b]$ sur $[f(a),f(b)]$ (ou $[f(b),f(a)]$). S'étend aux intervalles ouverts/infinis avec les limites aux bornes.` },
        { type:'meth', label:'METH', titre:'Prouver existence et unicité d\'une solution',
          contenu:`Pour montrer que $f(x)=k$ a une solution <strong>unique</strong> sur $I$ :<br><strong>1.</strong> $f$ continue sur $I$ (souvent dérivable).<br><strong>2.</strong> $f$ strictement monotone (étudier le signe de $f'$).<br><strong>3.</strong> $k$ est compris entre les valeurs/limites de $f$ aux bornes de $I$.<br><strong>4.</strong> Conclure par le théorème de la bijection.<br>Encadrer ensuite la solution par balayage ou dichotomie.` },
        { type:'ex', label:'EX', titre:'Localiser une racine',
          contenu:`<strong>Énoncé</strong> : montrer que $f(x) = x^3 + x - 1$ admet une unique racine réelle, et l'encadrer à $10^{-1}$ près.<br><strong>Solution</strong> : $f'(x) = 3x^2 + 1 > 0$ donc $f$ strictement croissante et continue sur $\\mathbb{R}$. Or $\\lim_{-\\infty} f = -\\infty$, $\\lim_{+\\infty} f = +\\infty$ : par le théorème de la bijection, racine unique $\\alpha$.<br>$f(0)=-1<0$, $f(1)=1>0$, $f(0{,}6) \\approx -0{,}18 < 0$, $f(0{,}7) \\approx 0{,}04 > 0$ : $\\alpha \\in ]0{,}6\\,;\\,0{,}7[$.` },
      ]
    },
    {
      titre: 'Asymptotes et étude de courbe',
      cartes: [
        { type:'def', label:'DEF', titre:'Asymptote horizontale et verticale',
          contenu:`<strong>Asymptote horizontale</strong> : si $\\displaystyle\\lim_{x\\to\\pm\\infty} f(x) = \\ell$ (fini), la droite $y=\\ell$ est asymptote horizontale en $\\pm\\infty$.<br><strong>Asymptote verticale</strong> : si $\\displaystyle\\lim_{x\\to a} f(x) = \\pm\\infty$, la droite $x=a$ est asymptote verticale.<br>L'asymptote décrit le comportement de la courbe « à l'infini » ou près d'une valeur interdite.` },
        { type:'meth', label:'METH', titre:'Position courbe / asymptote horizontale',
          contenu:`Pour situer $\\mathcal C_f$ par rapport à son asymptote $y=\\ell$, étudier le <strong>signe de $f(x) - \\ell$</strong> :<br><ul><li>$f(x) - \\ell > 0$ : courbe au-dessus de l'asymptote ;</li><li>$f(x) - \\ell < 0$ : courbe en dessous.</li></ul><strong>Ex.</strong> : $f(x) = 2 + \\frac1x$, asymptote $y=2$. $f(x)-2 = \\frac1x > 0$ pour $x>0$ : courbe au-dessus en $+\\infty$.` },
        { type:'ex', label:'EX', titre:'Limites par croissances comparées',
          contenu:`<strong>Énoncé</strong> : déterminer $\\displaystyle\\lim_{x\\to+\\infty} \\frac{x^2 + 1}{e^x}$ et $\\displaystyle\\lim_{x\\to 0^+} x\\ln x$.<br><strong>Solution</strong> : $\\frac{x^2+1}{e^x} = \\frac{x^2}{e^x} + \\frac{1}{e^x} \\to 0 + 0 = 0$ (l'exponentielle l'emporte).<br>$x\\ln x \\to 0$ par croissances comparées (la puissance l'emporte sur le $\\ln$ en $0^+$).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. DÉRIVATION ET CONVEXITÉ  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-deriv', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Compléments sur la dérivation et convexité', ordre: 5, enrich: false,
  sections: [
    {
      titre: 'Dérivées et compositions',
      cartes: [
        { type:'form', label:'FORM', titre:'Dérivées usuelles',
          contenu:`$$\\begin{array}{c|c} f(x) & f'(x) \\\\ \\hline x^n & nx^{n-1} \\\\ \\sqrt{x} & \\dfrac{1}{2\\sqrt{x}} \\\\ \\dfrac{1}{x} & -\\dfrac{1}{x^2} \\\\ e^x & e^x \\\\ \\ln x & \\dfrac{1}{x} \\\\ \\sin x & \\cos x \\\\ \\cos x & -\\sin x \\end{array}$$` },
        { type:'th', label:'THM', titre:'Dérivée d\'une composée',
          contenu:`Si $u$ est dérivable en $x$ et $f$ dérivable en $u(x)$, alors $f \\circ u$ est dérivable et :<br>$$(f \\circ u)'(x) = u'(x)\\,\\cdot\\, f'\\big(u(x)\\big).$$<br><strong>Cas usuels</strong> :<br>$(e^u)' = u'e^u$, $\\quad (\\ln u)' = \\dfrac{u'}{u}$ (si $u>0$), $\\quad (u^n)' = n u' u^{n-1}$, $\\quad (\\sqrt u)' = \\dfrac{u'}{2\\sqrt u}$.` },
        { type:'meth', label:'METH', titre:'Dériver une fonction composée',
          contenu:`<strong>Identifier la structure</strong> : repérer la fonction « extérieure » $f$ et « intérieure » $u$.<br><strong>Appliquer</strong> : $(f\\circ u)' = u' \\times f'(u)$.<br><strong>Exemple</strong> : $g(x) = e^{x^2 - 3x}$. Ici $u = x^2 - 3x$, $u' = 2x - 3$, $f = \\exp$.<br>$g'(x) = (2x-3)\\,e^{x^2 - 3x}$.<br><strong>Autre</strong> : $h(x)=\\ln(x^2+1)$, $h'(x)=\\dfrac{2x}{x^2+1}$.` },
      ]
    },
    {
      titre: 'Variations et extremums',
      cartes: [
        { type:'th', label:'THM', titre:'Sens de variation',
          contenu:`Soit $f$ dérivable sur un intervalle $I$ :<br><ul><li>$f' > 0$ sur $I$ $\\Rightarrow$ $f$ <strong>strictement croissante</strong> ;</li><li>$f' < 0$ sur $I$ $\\Rightarrow$ $f$ strictement décroissante ;</li><li>$f' = 0$ sur $I$ $\\Rightarrow$ $f$ constante.</li></ul>(Un nombre fini de points où $f'=0$ ne change pas la stricte monotonie.)` },
        { type:'prop', label:'PROP', titre:'Extremum local',
          contenu:`Si $f$ admet un extremum local en $c$ intérieur à $I$ et $f$ dérivable en $c$, alors $f'(c) = 0$.<br><strong>Réciproque fausse</strong> : $f'(c)=0$ n'implique pas un extremum (ex. $x \\mapsto x^3$ en $0$).<br><strong>Critère</strong> : $f'$ <strong>change de signe</strong> en $c$ $\\Rightarrow$ extremum (maximum si $+$ puis $-$, minimum si $-$ puis $+$).` },
        { type:'meth', label:'METH', titre:'Étude complète d\'une fonction',
          contenu:`<strong>Plan d'étude :</strong><br><strong>1.</strong> Domaine de définition.<br><strong>2.</strong> Limites aux bornes (asymptotes).<br><strong>3.</strong> Dérivée $f'$ et signe de $f'$.<br><strong>4.</strong> Tableau de variations.<br><strong>5.</strong> Extremums, points particuliers, et tracé.<br>Compléter avec convexité ($f''$) pour la forme de la courbe.` },
      ]
    },
    {
      titre: 'Dérivée seconde et convexité',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction convexe, fonction concave',
          contenu:`$f$ est <strong>convexe</strong> sur $I$ si sa courbe est <strong>au-dessus de chacune de ses tangentes</strong> (et en dessous de ses cordes). Elle est <strong>concave</strong> dans le cas opposé.<br>Convexité $\\leftrightarrow$ la courbe « tourne sa concavité vers le haut » (forme de cuvette $\\smile$). Concavité : forme de cloche $\\frown$.` },
        { type:'th', label:'THM', titre:'Convexité et dérivée seconde',
          contenu:`Soit $f$ deux fois dérivable sur $I$ :<br><ul><li>$f$ convexe sur $I$ $\\iff$ $f'$ croissante sur $I$ $\\iff$ $f'' \\ge 0$ sur $I$ ;</li><li>$f$ concave sur $I$ $\\iff$ $f'$ décroissante $\\iff$ $f'' \\le 0$ sur $I$.</li></ul><strong>Exemples</strong> : $x \\mapsto x^2$ et $\\exp$ sont convexes sur $\\mathbb{R}$ ; $\\ln$ et $\\sqrt{\\ }$ sont concaves sur $]0,+\\infty[$.` },
        { type:'def', label:'DEF', titre:'Point d\'inflexion',
          contenu:`Un <strong>point d'inflexion</strong> est un point où $f$ <strong>change de convexité</strong> (de convexe à concave ou inversement). En ce point, la courbe <strong>traverse sa tangente</strong>.<br><strong>Caractérisation</strong> : si $f''$ <strong>s'annule en changeant de signe</strong> en $a$, alors le point $\\big(a, f(a)\\big)$ est un point d'inflexion.` },
        { type:'ex', label:'EX', titre:'Convexité et point d\'inflexion',
          contenu:`<strong>Énoncé</strong> : étudier la convexité de $f(x) = x^3 - 3x$.<br><strong>Solution</strong> : $f'(x) = 3x^2 - 3$, $f''(x) = 6x$.<br>$f''(x) < 0$ sur $]-\\infty, 0[$ (concave), $f''(x) > 0$ sur $]0, +\\infty[$ (convexe).<br>$f''$ s'annule en changeant de signe en $0$ : <strong>point d'inflexion</strong> en $(0, 0)$.` },
      ]
    },
    {
      titre: 'Tangentes et applications',
      cartes: [
        { type:'form', label:'FORM', titre:'Équation de la tangente',
          contenu:`La tangente à $\\mathcal C_f$ au point d'abscisse $a$ (si $f$ dérivable en $a$) a pour équation :<br>$$y = f'(a)(x - a) + f(a).$$<br>$f'(a)$ est le <strong>coefficient directeur</strong> (la pente) de cette tangente.<br>La tangente est l'approximation affine de $f$ au voisinage de $a$ : $f(x) \\approx f'(a)(x-a)+f(a)$.` },
        { type:'prop', label:'PROP', titre:'Convexité et position des tangentes',
          contenu:`Si $f$ est <strong>convexe</strong> sur $I$, sa courbe est <strong>au-dessus de toutes ses tangentes</strong> sur $I$.<br>Si $f$ est <strong>concave</strong>, la courbe est <strong>en dessous</strong> de ses tangentes.<br>C'est l'outil géométrique pour démontrer des inégalités : ex. la tangente à $\\exp$ en $0$ est $y=x+1$, et par convexité $e^x \\ge x+1$.` },
        { type:'ex', label:'EX', titre:'Optimisation : volume maximal',
          contenu:`<strong>Énoncé</strong> : une boîte sans couvercle est faite d'un carré de côté $12$ dont on découpe des coins de côté $x$. Maximiser le volume $V(x) = x(12-2x)^2$ sur $]0,6[$.<br><strong>Solution</strong> : $V'(x) = (12-2x)^2 + x\\cdot2(12-2x)(-2) = (12-2x)(12-6x)$.<br>$V'$ s'annule en $x=2$ (dans l'intervalle). $V'>0$ avant, $V'<0$ après : maximum $V(2) = 2\\cdot8^2 = 128$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. LOGARITHME NÉPÉRIEN  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-ln', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Fonction logarithme népérien', ordre: 6, enrich: false,
  sections: [
    {
      titre: 'Définition et propriétés algébriques',
      cartes: [
        { type:'def', label:'DEF', titre:'Logarithme népérien',
          contenu:`La fonction <strong>logarithme népérien</strong> $\\ln$ est définie sur $]0,+\\infty[$ comme la <strong>réciproque de la fonction exponentielle</strong> :<br>$$y = \\ln x \\iff x = e^y \\quad (x>0).$$<br>Conséquences directes : $\\ln 1 = 0$, $\\ln e = 1$, et pour tout $x>0$, $y\\in\\mathbb{R}$ :<br>$$e^{\\ln x} = x, \\qquad \\ln(e^y) = y.$$` },
        { type:'form', label:'FORM', titre:'Relation fonctionnelle',
          contenu:`Pour tous $a, b > 0$ et $n \\in \\mathbb{Z}$ :<br>$$\\ln(ab) = \\ln a + \\ln b, \\qquad \\ln\\!\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b,$$<br>$$\\ln\\!\\left(\\frac{1}{a}\\right) = -\\ln a, \\qquad \\ln(a^n) = n\\ln a, \\qquad \\ln(\\sqrt a) = \\tfrac{1}{2}\\ln a.$$<br>Le logarithme <strong>transforme produits en sommes</strong>.` },
        { type:'meth', label:'METH', titre:'Résoudre une équation/inéquation avec $\\ln$',
          contenu:`<strong>1.</strong> Déterminer les <strong>conditions d'existence</strong> (arguments des $\\ln$ strictement positifs).<br><strong>2.</strong> Utiliser les propriétés pour regrouper en un seul $\\ln$.<br><strong>3.</strong> Utiliser la stricte croissance : $\\ln A = \\ln B \\iff A = B$ ; $\\ln A < \\ln B \\iff A < B$ (avec $A,B>0$).<br><strong>4.</strong> Vérifier la compatibilité avec les conditions d'existence.<br><strong>Ex.</strong> : $\\ln(x) + \\ln(x-1) = \\ln 6$, CE $x>1$ : $x(x-1)=6 \\Rightarrow x=3$.` },
      ]
    },
    {
      titre: 'Étude de la fonction',
      cartes: [
        { type:'th', label:'THM', titre:'Dérivée et variations',
          contenu:`$\\ln$ est dérivable sur $]0,+\\infty[$ et :<br>$$(\\ln x)' = \\frac{1}{x} > 0.$$<br>Donc $\\ln$ est <strong>strictement croissante</strong> sur $]0,+\\infty[$.<br>Plus généralement, pour $u>0$ dérivable : $\\big(\\ln u\\big)' = \\dfrac{u'}{u}$.<br>Comme $\\frac1x$ décroît, $\\ln$ est <strong>concave</strong> sur $]0,+\\infty[$.` },
        { type:'prop', label:'PROP', titre:'Limites aux bornes',
          contenu:`$$\\lim_{x\\to+\\infty} \\ln x = +\\infty, \\qquad \\lim_{x\\to 0^+} \\ln x = -\\infty.$$<br>L'axe des ordonnées ($x=0$) est <strong>asymptote verticale</strong>.<br><strong>Limite remarquable</strong> (nombre dérivé en $1$) :<br>$$\\lim_{x\\to 0} \\frac{\\ln(1+x)}{x} = 1.$$` },
        { type:'prop', label:'PROP', titre:'Croissances comparées',
          contenu:`Le logarithme croît <strong>moins vite</strong> que toute puissance :<br>$$\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0, \\qquad \\lim_{x\\to+\\infty} \\frac{\\ln x}{x^n} = 0 \\ (n\\ge 1),$$<br>$$\\lim_{x\\to 0^+} x\\ln x = 0, \\qquad \\lim_{x\\to 0^+} x^n \\ln x = 0.$$<br>Mnémonique : « la puissance l'emporte sur le logarithme ».` },
        { type:'ex', label:'EX', titre:'Étude d\'une fonction avec $\\ln$',
          contenu:`<strong>Énoncé</strong> : étudier $f(x) = x - \\ln x$ sur $]0,+\\infty[$.<br><strong>Solution</strong> : $f'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}$. Signe : $f'<0$ sur $]0,1[$, $f'>0$ sur $]1,+\\infty[$.<br>Minimum en $x=1$ : $f(1) = 1 > 0$. Comme $f \\ge 1$, on a montré $\\boxed{\\ln x \\le x - 1}$ pour tout $x>0$ (inégalité de convexité classique).` },
      ]
    },
    {
      titre: 'Logarithme et suites',
      cartes: [
        { type:'meth', label:'METH', titre:'Résoudre $q^n < \\varepsilon$ (seuil)',
          contenu:`Pour trouver le rang à partir duquel une suite géométrique $q^n$ ($0<q<1$) passe sous un seuil $\\varepsilon$ :<br>$$q^n < \\varepsilon \\iff n \\ln q < \\ln \\varepsilon \\iff n > \\frac{\\ln \\varepsilon}{\\ln q}$$<br>(l'inégalité <strong>change de sens</strong> car $\\ln q < 0$ pour $0<q<1$).<br><strong>Ex.</strong> : $0{,}9^n < 0{,}01 \\iff n > \\frac{\\ln 0{,}01}{\\ln 0{,}9} \\approx 43{,}7$, donc $n \\ge 44$.` },
        { type:'form', label:'FORM', titre:'Logarithme décimal',
          contenu:`Le <strong>logarithme décimal</strong> est défini par :<br>$$\\log x = \\frac{\\ln x}{\\ln 10}.$$<br>Propriété : $\\log 10 = 1$, $\\log(10^n) = n$. Mêmes règles algébriques que $\\ln$.<br>Utile en sciences (pH, échelle de Richter, décibels) : $\\log$ compte les <strong>ordres de grandeur</strong>.` },
        { type:'ex', label:'EX', titre:'Nombre de chiffres d\'un entier',
          contenu:`<strong>Énoncé</strong> : combien de chiffres compte $2^{100}$ en écriture décimale ?<br><strong>Solution</strong> : le nombre de chiffres de $N$ est $\\lfloor \\log N \\rfloor + 1$.<br>$\\log(2^{100}) = 100 \\log 2 \\approx 100 \\times 0{,}30103 = 30{,}103$.<br>Donc $2^{100}$ a $\\lfloor 30{,}103 \\rfloor + 1 = 31$ chiffres.` },
      ]
    },
    {
      titre: 'Dérivation composée et primitives',
      cartes: [
        { type:'form', label:'FORM', titre:'Dérivée de $\\ln u$ et primitive de $u\'/u$',
          contenu:`Pour $u$ dérivable strictement positive :<br>$$\\big(\\ln u\\big)' = \\frac{u'}{u}.$$<br>Réciproquement, une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$ :<br>$$\\int \\frac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C.$$<br>Reconnaître la forme $\\frac{u'}{u}$ est essentiel pour intégrer les fractions rationnelles.` },
        { type:'ex', label:'EX', titre:'Dérivée et primitive avec $\\ln$',
          contenu:`<strong>Dérivée</strong> : $f(x) = \\ln(x^2 + 1)$, $f'(x) = \\dfrac{2x}{x^2+1}$.<br><strong>Primitive</strong> : une primitive de $g(x) = \\dfrac{x}{x^2+1}$ est $\\dfrac12\\ln(x^2+1)$ (on fait apparaître $u'=2x$).<br><strong>Calcul</strong> : $\\displaystyle\\int_0^1 \\frac{x}{x^2+1}\\,dx = \\Big[\\tfrac12\\ln(x^2+1)\\Big]_0^1 = \\tfrac12\\ln 2$.` },
        { type:'meth', label:'METH', titre:'Démontrer une inégalité avec $\\ln$',
          contenu:`L'inégalité de convexité de référence est :<br>$$\\ln x \\le x - 1 \\quad (x>0), \\qquad \\ln(1+x) \\le x \\quad (x>-1).$$<br>Pour comparer $\\ln$ à une autre expression, étudier le signe de la différence $g(x) = \\ln x - (\\dots)$ via $g'$.<br><strong>Astuce</strong> : la concavité de $\\ln$ place sa courbe sous toutes ses tangentes, notamment $y = x-1$ en $x=1$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. FONCTION EXPONENTIELLE  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-exp', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Fonction exponentielle', ordre: 7, enrich: false,
  sections: [
    {
      titre: 'Définition et caractérisation',
      cartes: [
        { type:'th', label:'THM', titre:'Définition par l\'équation différentielle',
          contenu:`Il existe une <strong>unique</strong> fonction $f$ dérivable sur $\\mathbb{R}$ telle que :<br>$$f' = f \\quad \\text{et} \\quad f(0) = 1.$$<br>Cette fonction est la <strong>fonction exponentielle</strong>, notée $\\exp$ ou $x \\mapsto e^x$, avec $e = \\exp(1) \\approx 2{,}718$.<br>Elle vérifie : $\\exp(x) > 0$ pour tout $x \\in \\mathbb{R}$.` },
        { type:'form', label:'FORM', titre:'Relation fonctionnelle',
          contenu:`Pour tous réels $a, b$ et $n \\in \\mathbb{Z}$ :<br>$$e^{a+b} = e^a\\, e^b, \\qquad e^{-a} = \\frac{1}{e^a}, \\qquad e^{a-b} = \\frac{e^a}{e^b}, \\qquad (e^a)^n = e^{na}.$$<br>L'exponentielle <strong>transforme sommes en produits</strong> : c'est l'inverse du comportement du logarithme.` },
        { type:'prop', label:'PROP', titre:'Lien réciproque avec $\\ln$',
          contenu:`$\\exp$ et $\\ln$ sont <strong>réciproques</strong> l'une de l'autre :<br>$$e^{\\ln x} = x \\ (x>0), \\qquad \\ln(e^x) = x \\ (x\\in\\mathbb{R}).$$<br>Leurs courbes sont <strong>symétriques par rapport à la droite $y=x$</strong>.<br>On en déduit : $a^b = e^{b\\ln a}$ pour $a>0$ (définition de la puissance réelle).` },
      ]
    },
    {
      titre: 'Étude de la fonction',
      cartes: [
        { type:'th', label:'THM', titre:'Dérivée et variations',
          contenu:`$(e^x)' = e^x > 0$, donc $\\exp$ est <strong>strictement croissante</strong> sur $\\mathbb{R}$.<br>De plus $(e^x)'' = e^x > 0$ : $\\exp$ est <strong>convexe</strong> (sa courbe est au-dessus de toutes ses tangentes, notamment $y = x+1$ en $0$).<br>Pour $u$ dérivable : $\\big(e^u\\big)' = u'\\,e^u$.` },
        { type:'prop', label:'PROP', titre:'Limites et croissances comparées',
          contenu:`$$\\lim_{x\\to+\\infty} e^x = +\\infty, \\qquad \\lim_{x\\to-\\infty} e^x = 0^+.$$<br>(L'axe des abscisses est asymptote horizontale en $-\\infty$.)<br><strong>Croissances comparées</strong> (l'exponentielle l'emporte sur toute puissance) :<br>$$\\lim_{x\\to+\\infty} \\frac{e^x}{x^n} = +\\infty, \\qquad \\lim_{x\\to-\\infty} x^n e^x = 0, \\qquad \\lim_{x\\to 0}\\frac{e^x - 1}{x} = 1.$$` },
        { type:'meth', label:'METH', titre:'Résoudre équations et inéquations',
          contenu:`Utiliser la <strong>stricte croissance</strong> de $\\exp$ :<br>$$e^A = e^B \\iff A = B, \\qquad e^A < e^B \\iff A < B.$$<br>Pour une équation du type $e^{2x} - 3e^x + 2 = 0$ : poser $X = e^x > 0$, résoudre $X^2 - 3X + 2 = 0$ ($X=1$ ou $X=2$), puis revenir à $x = \\ln X$.<br>Ne <strong>garder</strong> que les solutions avec $X>0$.` },
        { type:'ex', label:'EX', titre:'Étude d\'une fonction exponentielle',
          contenu:`<strong>Énoncé</strong> : étudier $f(x) = (x-1)e^x$ sur $\\mathbb{R}$.<br><strong>Solution</strong> : $f'(x) = e^x + (x-1)e^x = x\\,e^x$. Comme $e^x>0$, le signe de $f'$ est celui de $x$.<br>$f$ décroît sur $]-\\infty,0]$, croît sur $[0,+\\infty[$, minimum $f(0) = -1$.<br>Limites : $\\lim_{-\\infty} f = 0^-$ (croissances comparées), $\\lim_{+\\infty} f = +\\infty$.` },
      ]
    },
    {
      titre: 'Modélisation et compléments',
      cartes: [
        { type:'prop', label:'PROP', titre:'Fonctions $t \\mapsto e^{kt}$',
          contenu:`Les fonctions $f(t) = C e^{kt}$ ($C, k$ constantes) sont les solutions de $f' = kf$.<br><ul><li>$k>0$ : <strong>croissance exponentielle</strong> (population, intérêts composés) ;</li><li>$k<0$ : <strong>décroissance exponentielle</strong> (désintégration radioactive, refroidissement, charge/décharge).</li></ul>Le <strong>temps de demi-vie</strong> (si $k<0$) vérifie $e^{k\\,t_{1/2}} = \\tfrac12$, soit $t_{1/2} = \\dfrac{\\ln 2}{|k|}$.` },
        { type:'ex', label:'EX', titre:'Demi-vie et décroissance',
          contenu:`<strong>Énoncé</strong> : une quantité $N(t) = N_0\\, e^{-0{,}1 t}$ (en années). Calculer la demi-vie.<br><strong>Solution</strong> : on cherche $t$ tel que $N(t) = \\frac{N_0}{2}$ :<br>$e^{-0{,}1t} = \\tfrac12 \\Rightarrow -0{,}1t = \\ln \\tfrac12 = -\\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0{,}1} \\approx 6{,}93$ ans.` },
        { type:'meth', label:'METH', titre:'Position courbe / tangente par convexité',
          contenu:`La convexité de $\\exp$ donne l'inégalité de référence :<br>$$e^x \\ge x + 1 \\quad \\text{pour tout } x \\in \\mathbb{R}$$<br>(égalité ssi $x=0$). Pour comparer une courbe à une droite, on étudie le signe de $g(x) = e^x - (x+1)$ : $g'(x) = e^x - 1$, $g$ minimale en $0$, $g(0)=0$, donc $g \\ge 0$.<br>Cette technique (étude d'une différence) sert à prouver toute inégalité fonctionnelle.` },
      ]
    },
    {
      titre: 'Puissances réelles et dérivées composées',
      cartes: [
        { type:'def', label:'DEF', titre:'Puissance réelle $a^b$',
          contenu:`Pour $a > 0$ et $b \\in \\mathbb{R}$, on définit la <strong>puissance réelle</strong> par :<br>$$a^b = e^{b\\ln a}.$$<br>Cette définition prolonge les puissances entières et vérifie les règles usuelles : $a^{b+c}=a^b a^c$, $(a^b)^c = a^{bc}$.<br><strong>Ex.</strong> : $2^{\\sqrt2} = e^{\\sqrt2\\ln 2}$.` },
        { type:'form', label:'FORM', titre:'Dérivée de $e^u$',
          contenu:`Pour $u$ dérivable : $\\big(e^u\\big)' = u'\\,e^u$.<br>Une primitive de $u'e^u$ est donc $e^u$ :<br>$$\\int u'(x)\\,e^{u(x)}\\,dx = e^{u(x)} + C.$$<br><strong>Ex.</strong> : $\\big(e^{-x^2}\\big)' = -2x\\,e^{-x^2}$ ; primitive de $x\\,e^{-x^2}$ : $-\\tfrac12 e^{-x^2}$.` },
        { type:'ex', label:'EX', titre:'Étude de $e^{-x^2}$ (gaussienne)',
          contenu:`<strong>Énoncé</strong> : étudier les variations de $f(x) = e^{-x^2}$.<br><strong>Solution</strong> : $f'(x) = -2x\\,e^{-x^2}$, du signe de $-x$. Donc $f$ croît sur $]-\\infty,0]$, décroît sur $[0,+\\infty[$, maximum $f(0)=1$.<br>$f$ est <strong>paire</strong> ; $\\lim_{\\pm\\infty} f = 0$ (axe des abscisses asymptote). Courbe en cloche symétrique.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. PRIMITIVES ET CALCUL INTÉGRAL  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-integ', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Primitives et calcul intégral', ordre: 8, enrich: false,
  sections: [
    {
      titre: 'Primitives',
      cartes: [
        { type:'def', label:'DEF', titre:'Primitive d\'une fonction',
          contenu:`$F$ est une <strong>primitive</strong> de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F' = f$.<br><strong>Théorème</strong> : toute fonction continue sur un intervalle admet des primitives.<br>Deux primitives de $f$ diffèrent d'une <strong>constante</strong> : si $F$ est une primitive, l'ensemble des primitives est $\\{F + C \\mid C \\in \\mathbb{R}\\}$.` },
        { type:'form', label:'FORM', titre:'Primitives usuelles',
          contenu:`$$\\begin{array}{c|c} f(x) & F(x) \\\\ \\hline x^n\\ (n\\ne -1) & \\dfrac{x^{n+1}}{n+1} \\\\ \\dfrac{1}{x} & \\ln|x| \\\\ e^x & e^x \\\\ \\cos x & \\sin x \\\\ \\sin x & -\\cos x \\\\ \\dfrac{1}{\\sqrt x} & 2\\sqrt x \\end{array}$$` },
        { type:'form', label:'FORM', titre:'Primitives de formes composées',
          contenu:`Reconnaître ces formes accélère le calcul :<br>$$u'u^n \\to \\frac{u^{n+1}}{n+1}, \\qquad \\frac{u'}{u} \\to \\ln|u|, \\qquad u'e^u \\to e^u,$$<br>$$\\frac{u'}{\\sqrt u} \\to 2\\sqrt u, \\qquad u'\\cos u \\to \\sin u, \\qquad u'\\sin u \\to -\\cos u.$$` },
        { type:'meth', label:'METH', titre:'Primitive avec condition initiale',
          contenu:`<strong>1.</strong> Trouver une primitive $F$ de $f$.<br><strong>2.</strong> Écrire la forme générale $F(x) + C$.<br><strong>3.</strong> Imposer la condition (ex. $G(x_0) = y_0$) pour déterminer $C$.<br><strong>Ex.</strong> : primitive de $f(x)=\\frac{2x}{x^2+1}$ valant $0$ en $0$. $F(x)=\\ln(x^2+1)+C$, $F(0)=C=0$, donc $F(x)=\\ln(x^2+1)$.` },
      ]
    },
    {
      titre: 'Intégrale et propriétés',
      cartes: [
        { type:'def', label:'DEF', titre:'Intégrale d\'une fonction continue',
          contenu:`Soit $f$ continue sur $[a,b]$ et $F$ une primitive de $f$. L'<strong>intégrale</strong> de $f$ de $a$ à $b$ est :<br>$$\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a).$$<br>Ce nombre ne dépend pas de la primitive choisie. Si $f \\ge 0$, c'est l'<strong>aire</strong> (en unités d'aire) du domaine sous la courbe entre $x=a$ et $x=b$.` },
        { type:'prop', label:'PROP', titre:'Linéarité, Chasles, positivité',
          contenu:`<strong>Linéarité</strong> : $\\displaystyle\\int_a^b (\\lambda f + \\mu g) = \\lambda\\!\\int_a^b f + \\mu\\!\\int_a^b g$.<br><strong>Chasles</strong> : $\\displaystyle\\int_a^c f = \\int_a^b f + \\int_b^c f$.<br><strong>Positivité</strong> : si $f \\ge 0$ sur $[a,b]$ ($a\\le b$), alors $\\int_a^b f \\ge 0$.<br><strong>Croissance</strong> : si $f \\le g$, alors $\\int_a^b f \\le \\int_a^b g$.` },
        { type:'th', label:'THM', titre:'Théorème fondamental de l\'analyse',
          contenu:`Soit $f$ continue sur $I$ et $a \\in I$. La fonction $\\displaystyle x \\mapsto \\int_a^x f(t)\\,dt$ est l'<strong>unique primitive de $f$ qui s'annule en $a$</strong>.<br>En particulier elle est dérivable et :<br>$$\\frac{d}{dx}\\!\\left(\\int_a^x f(t)\\,dt\\right) = f(x).$$<br>Ce théorème relie dérivation et intégration.` },
        { type:'def', label:'DEF', titre:'Valeur moyenne',
          contenu:`La <strong>valeur moyenne</strong> de $f$ sur $[a,b]$ (avec $a<b$) est :<br>$$\\mu = \\frac{1}{b-a}\\int_a^b f(x)\\,dx.$$<br>C'est la hauteur du rectangle de base $[a,b]$ ayant la même aire que l'intégrale.<br><strong>Ex.</strong> : valeur moyenne de $\\sin$ sur $[0,\\pi]$ : $\\frac{1}{\\pi}\\int_0^\\pi \\sin x\\,dx = \\frac{2}{\\pi}$.` },
      ]
    },
    {
      titre: 'Intégration par parties et aires',
      cartes: [
        { type:'th', label:'THM', titre:'Intégration par parties (IPP)',
          contenu:`Si $u, v$ sont dérivables à dérivées continues sur $[a,b]$ :<br>$$\\int_a^b u(x)\\,v'(x)\\,dx = \\big[u(x)\\,v(x)\\big]_a^b - \\int_a^b u'(x)\\,v(x)\\,dx.$$<br><strong>Choix de $u$</strong> (à dériver) selon la priorité ALPES : <strong>A</strong>lgèbre $>$ <strong>L</strong>og $>$ <strong>P</strong>uissance $>$ <strong>E</strong>xp $>$ <strong>S</strong>inus/cos. On choisit $v'$ facile à primitiver.` },
        { type:'ex', label:'EX', titre:'IPP : $\\int x e^x$ et $\\int \\ln x$',
          contenu:`<strong>(a)</strong> $\\displaystyle\\int_0^1 x e^x\\,dx$ : $u=x$, $v'=e^x$, donc $u'=1$, $v=e^x$.<br>$= [xe^x]_0^1 - \\int_0^1 e^x dx = e - (e-1) = 1.$<br><strong>(b)</strong> $\\displaystyle\\int_1^e \\ln x\\,dx$ : $u=\\ln x$, $v'=1$, donc $u'=\\frac1x$, $v=x$.<br>$= [x\\ln x]_1^e - \\int_1^e 1\\,dx = e - (e-1) = 1.$` },
        { type:'meth', label:'METH', titre:'Aire entre deux courbes',
          contenu:`Pour l'aire entre $\\mathcal C_f$ et $\\mathcal C_g$ sur $[a,b]$ :<br><strong>1.</strong> Déterminer le signe de $f - g$ (laquelle est au-dessus).<br><strong>2.</strong> Aire $= \\displaystyle\\int_a^b |f(x) - g(x)|\\,dx$, en décomposant aux points d'intersection.<br><strong>Ex.</strong> : aire entre $y=x$ et $y=x^2$ sur $[0,1]$ ($x \\ge x^2$) :<br>$\\int_0^1 (x - x^2)\\,dx = [\\frac{x^2}{2}-\\frac{x^3}{3}]_0^1 = \\frac16$ u.a.` },
        { type:'ex', label:'EX', titre:'Calcul d\'aire sous une courbe',
          contenu:`<strong>Énoncé</strong> : calculer l'aire sous $\\mathcal C : y = e^{-x}$ entre $x=0$ et $x=2$.<br><strong>Solution</strong> : $e^{-x} \\ge 0$, donc<br>$$A = \\int_0^2 e^{-x}\\,dx = \\big[-e^{-x}\\big]_0^2 = -e^{-2} + 1 = 1 - e^{-2} \\approx 0{,}865 \\text{ u.a.}$$` },
      ]
    },
    {
      titre: 'Encadrements et suites d\'intégrales',
      cartes: [
        { type:'prop', label:'PROP', titre:'Inégalité de la moyenne',
          contenu:`Si $m \\le f(x) \\le M$ sur $[a,b]$ (avec $a<b$), alors :<br>$$m(b-a) \\le \\int_a^b f(x)\\,dx \\le M(b-a).$$<br>En particulier, la valeur moyenne $\\mu$ vérifie $m \\le \\mu \\le M$.<br>Cet encadrement sert à <strong>majorer</strong> une intégrale qu'on ne sait pas calculer exactement.` },
        { type:'meth', label:'METH', titre:'Étudier une suite d\'intégrales',
          contenu:`Pour $I_n = \\displaystyle\\int_a^b f_n(x)\\,dx$ :<br><strong>1.</strong> <em>Signe</em> : par positivité de l'intégrale si $f_n \\ge 0$.<br><strong>2.</strong> <em>Monotonie</em> : comparer $f_{n+1}$ et $f_n$ sur $[a,b]$ (croissance de l'intégrale).<br><strong>3.</strong> <em>Encadrement</em> pour la limite (gendarmes).<br>Souvent une <strong>relation de récurrence</strong> entre $I_n$ et $I_{n+1}$ s'obtient par IPP.` },
        { type:'ex', label:'EX', titre:'Suite d\'intégrales décroissante',
          contenu:`<strong>Énoncé</strong> : $I_n = \\displaystyle\\int_0^1 x^n e^{-x}\\,dx$. Montrer que $(I_n)$ décroît et converge vers $0$.<br><strong>Solution</strong> : pour $x\\in[0,1]$, $x^{n+1} \\le x^n$, donc $x^{n+1}e^{-x} \\le x^n e^{-x}$ : par croissance, $I_{n+1} \\le I_n$.<br>De plus $0 \\le x^n e^{-x} \\le x^n$, d'où $0 \\le I_n \\le \\int_0^1 x^n dx = \\frac{1}{n+1} \\to 0$. Par gendarmes, $I_n \\to 0$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. ÉQUATIONS DIFFÉRENTIELLES  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-eqdiff', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Équations différentielles', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Équation $y\' = ay$',
      cartes: [
        { type:'def', label:'DEF', titre:'Équation différentielle',
          contenu:`Une <strong>équation différentielle</strong> est une équation reliant une fonction inconnue $y$ et ses dérivées. Au programme : équations du premier ordre du type<br>$$y' = ay \\qquad \\text{et} \\qquad y' = ay + b \\quad (a \\ne 0,\\ b \\text{ constantes}).$$<br>Une <strong>solution</strong> est une fonction $y$ dérivable sur un intervalle vérifiant l'équation pour tout $x$.` },
        { type:'th', label:'THM', titre:'Solutions de $y\' = ay$',
          contenu:`Les solutions sur $\\mathbb{R}$ de l'équation $y' = ay$ ($a \\in \\mathbb{R}$) sont exactement les fonctions :<br>$$y(x) = C e^{ax}, \\qquad C \\in \\mathbb{R}.$$<br>Le réel $C$ est déterminé par une <strong>condition initiale</strong> $y(x_0) = y_0$.<br><strong>Cas $a>0$</strong> : croissance exponentielle ; <strong>$a<0$</strong> : décroissance vers $0$.` },
        { type:'ex', label:'EX', titre:'Problème de Cauchy simple',
          contenu:`<strong>Énoncé</strong> : résoudre $y' = 3y$ avec $y(0) = 2$.<br><strong>Solution</strong> : solution générale $y(x) = Ce^{3x}$.<br>Condition : $y(0) = C = 2$.<br>Donc $\\boxed{y(x) = 2e^{3x}}$. C'est l'<strong>unique</strong> solution vérifiant la condition initiale.` },
      ]
    },
    {
      titre: 'Équation $y\' = ay + b$',
      cartes: [
        { type:'th', label:'THM', titre:'Solutions de $y\' = ay + b$',
          contenu:`Soit $a \\ne 0$. Les solutions de $y' = ay + b$ sont :<br>$$y(x) = C e^{ax} - \\frac{b}{a}, \\qquad C \\in \\mathbb{R}.$$<br><strong>Structure</strong> : solution générale de $y'=ay$ ($Ce^{ax}$) $+$ solution particulière constante $y_p = -\\frac{b}{a}$ (obtenue en cherchant une solution constante : $0 = ay_p + b$).` },
        { type:'meth', label:'METH', titre:'Résoudre $y\' = ay + b$ avec condition',
          contenu:`<strong>1.</strong> Solution particulière constante : $y_p = -\\frac{b}{a}$.<br><strong>2.</strong> Solution générale homogène : $y_h = Ce^{ax}$.<br><strong>3.</strong> Solution générale : $y = y_h + y_p = Ce^{ax} - \\frac{b}{a}$.<br><strong>4.</strong> Déterminer $C$ par la condition initiale.<br><strong>Limite</strong> : si $a<0$, $y(x) \\to -\\frac{b}{a}$ (régime permanent) quand $x\\to+\\infty$.` },
        { type:'ex', label:'EX', titre:'Refroidissement (loi de Newton)',
          contenu:`<strong>Énoncé</strong> : un corps refroidit selon $\\theta' = -0{,}2(\\theta - 20)$, $\\theta(0) = 80$ (en °C).<br><strong>Solution</strong> : posons l'équation $\\theta' = -0{,}2\\theta + 4$. Solution particulière $\\theta_p = \\frac{4}{0{,}2} = 20$. Général : $\\theta(t) = Ce^{-0{,}2t} + 20$.<br>Condition : $\\theta(0) = C + 20 = 80 \\Rightarrow C = 60$. Donc $\\theta(t) = 60e^{-0{,}2t} + 20$, et $\\theta \\to 20$°C.` },
      ]
    },
    {
      titre: 'Modélisation',
      cartes: [
        { type:'meth', label:'METH', titre:'Mettre un problème en équation',
          contenu:`<strong>Démarche de modélisation :</strong><br><strong>1.</strong> Identifier la grandeur $y(t)$ et le <strong>taux de variation</strong> $y'(t)$.<br><strong>2.</strong> Traduire l'énoncé : « la vitesse de variation est proportionnelle à... » $\\to$ $y' = ay(+b)$.<br><strong>3.</strong> Résoudre, puis utiliser la condition initiale.<br><strong>4.</strong> Interpréter (limite, demi-vie, régime permanent).` },
        { type:'prop', label:'PROP', titre:'Unicité de la solution (Cauchy)',
          contenu:`Pour $y' = ay + b$, le problème avec condition initiale $y(x_0) = y_0$ admet <strong>une unique solution</strong> sur $\\mathbb{R}$.<br>C'est ce qui légitime la modélisation : à un état initial donné correspond une <strong>évolution déterminée</strong>.<br>Le paramètre $C$ est fixé de façon unique par la condition initiale.` },
        { type:'ex', label:'EX', titre:'Charge d\'un condensateur',
          contenu:`<strong>Énoncé</strong> : la tension $u$ aux bornes d'un condensateur vérifie $u' = -\\frac{1}{\\tau}(u - E)$, $u(0)=0$.<br><strong>Solution</strong> : équation $u' = -\\frac1\\tau u + \\frac E\\tau$. Particulière $u_p = E$. Général : $u(t) = Ce^{-t/\\tau} + E$.<br>$u(0) = C + E = 0 \\Rightarrow C = -E$. Donc $u(t) = E\\big(1 - e^{-t/\\tau}\\big)$, croissance vers $E$.` },
      ]
    },
    {
      titre: 'Lien avec les primitives',
      cartes: [
        { type:'prop', label:'PROP', titre:'Cas $y\' = f$ : recherche de primitive',
          contenu:`L'équation la plus simple est $y' = f(x)$ : ses solutions sont exactement les <strong>primitives</strong> de $f$, soit $y(x) = F(x) + C$ où $F' = f$.<br>C'est un cas particulier d'équation différentielle où la dérivée ne dépend pas de $y$. La condition initiale fixe $C$.` },
        { type:'meth', label:'METH', titre:'Vérifier qu\'une fonction est solution',
          contenu:`Pour vérifier qu'une fonction donnée $y$ est solution de $y' = ay + b$ :<br><strong>1.</strong> Calculer $y'$.<br><strong>2.</strong> Calculer $ay + b$.<br><strong>3.</strong> Vérifier l'<strong>égalité pour tout $x$</strong>.<br>Cette vérification est demandée quand l'énoncé « suggère » une solution sans la faire résoudre.` },
        { type:'ex', label:'EX', titre:'Vérification d\'une solution',
          contenu:`<strong>Énoncé</strong> : montrer que $y(x) = 3e^{2x} - 1$ est solution de $y' = 2y + 2$.<br><strong>Solution</strong> : $y'(x) = 6e^{2x}$.<br>$2y + 2 = 2(3e^{2x} - 1) + 2 = 6e^{2x} - 2 + 2 = 6e^{2x}$.<br>On a $y' = 2y + 2$ pour tout $x$ : $y$ est bien solution.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 10. GÉOMÉTRIE DANS L'ESPACE  (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-vect', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Géométrie dans l\'espace : produit scalaire, droites et plans', ordre: 10, enrich: true,
  sections: [
    {
      titre: 'Vecteurs et produit scalaire',
      cartes: [
        { type:'def', label:'DEF', titre:'Repère orthonormé et coordonnées',
          contenu:`Dans un repère orthonormé $(O,\\vec\\imath,\\vec\\jmath,\\vec k)$ de l'espace, tout vecteur s'écrit $\\vec u = (x,y,z)$.<br><strong>Norme</strong> : $\\|\\vec u\\| = \\sqrt{x^2 + y^2 + z^2}$.<br><strong>Coordonnées d'un vecteur</strong> $\\vec{AB} = (x_B - x_A,\\ y_B - y_A,\\ z_B - z_A)$.<br>$\\vec u, \\vec v, \\vec w$ sont <strong>coplanaires</strong> s'il existe une combinaison linéaire liant l'un aux deux autres.` },
        { type:'def', label:'DEF', titre:'Produit scalaire dans l\'espace',
          contenu:`Pour $\\vec u=(x,y,z)$ et $\\vec v=(x',y',z')$ :<br>$$\\vec u \\cdot \\vec v = xx' + yy' + zz' = \\|\\vec u\\|\\,\\|\\vec v\\|\\cos(\\vec u, \\vec v).$$<br><strong>Orthogonalité</strong> : $\\vec u \\perp \\vec v \\iff \\vec u \\cdot \\vec v = 0$.<br><strong>Norme</strong> : $\\vec u \\cdot \\vec u = \\|\\vec u\\|^2$. Le produit scalaire est bilinéaire et symétrique.` },
        { type:'meth', label:'METH', titre:'Calculer un angle, montrer une orthogonalité',
          contenu:`<strong>Angle</strong> entre $\\vec u$ et $\\vec v$ : $\\cos\\theta = \\dfrac{\\vec u \\cdot \\vec v}{\\|\\vec u\\|\\,\\|\\vec v\\|}$.<br><strong>Orthogonalité de deux droites/segments</strong> : calculer le produit scalaire des vecteurs directeurs ; nul $\\Rightarrow$ perpendiculaires.<br><strong>Ex.</strong> : $\\vec u=(1,2,2)$, $\\vec v=(2,-2,1)$ : $\\vec u\\cdot\\vec v = 2-4+2 = 0$, donc $\\vec u \\perp \\vec v$.` },
      ]
    },
    {
      titre: 'Droites et plans',
      cartes: [
        { type:'form', label:'FORM', titre:'Représentation paramétrique d\'une droite',
          contenu:`La droite passant par $A(x_A,y_A,z_A)$ de vecteur directeur $\\vec u=(\\alpha,\\beta,\\gamma)$ a pour représentation paramétrique :<br>$$\\begin{cases} x = x_A + t\\alpha \\\\ y = y_A + t\\beta \\\\ z = z_A + t\\gamma \\end{cases} \\quad (t \\in \\mathbb{R}).$$<br>Un point $M$ appartient à la droite ssi il existe $t$ vérifiant ce système.` },
        { type:'def', label:'DEF', titre:'Vecteur normal et équation d\'un plan',
          contenu:`Un <strong>vecteur normal</strong> $\\vec n=(a,b,c)$ d'un plan $\\mathcal P$ est orthogonal à tout vecteur de $\\mathcal P$.<br>Le plan de vecteur normal $\\vec n$ passant par $A$ a pour <strong>équation cartésienne</strong> :<br>$$ax + by + cz + d = 0,$$<br>où $d = -(a x_A + b y_A + c z_A)$. Réciproquement, $ax+by+cz+d=0$ est un plan de vecteur normal $(a,b,c)$.` },
        { type:'th', label:'THM', titre:'Caractérisation par produit scalaire',
          contenu:`$M \\in \\mathcal P$ (plan passant par $A$, normal $\\vec n$) $\\iff \\vec{AM} \\cdot \\vec n = 0$.<br><strong>Orthogonalité droite/plan</strong> : une droite de vecteur directeur $\\vec u$ est orthogonale à $\\mathcal P$ ssi $\\vec u$ est colinéaire à $\\vec n$.<br><strong>Parallélisme droite/plan</strong> : $\\vec u \\cdot \\vec n = 0$ (et la droite n'est pas incluse).` },
        { type:'meth', label:'METH', titre:'Déterminer l\'équation d\'un plan',
          contenu:`<strong>Si l'on connaît un point $A$ et $\\vec n=(a,b,c)$ :</strong> écrire $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$.<br><strong>Si l'on connaît trois points $A,B,C$ :</strong> trouver $\\vec n$ orthogonal à $\\vec{AB}$ et $\\vec{AC}$ (résoudre $\\vec n\\cdot\\vec{AB}=0$, $\\vec n\\cdot\\vec{AC}=0$), puis utiliser un point.` },
      ]
    },
    {
      titre: 'Intersections et distances',
      cartes: [
        { type:'meth', label:'METH', titre:'Intersection droite / plan',
          contenu:`<strong>1.</strong> Prendre la représentation paramétrique de la droite ($x,y,z$ en fonction de $t$).<br><strong>2.</strong> Substituer dans l'équation cartésienne du plan.<br><strong>3.</strong> Résoudre en $t$ :<br><ul><li>une solution $t_0$ $\\to$ point d'intersection unique ;</li><li>aucune solution $\\to$ droite strictement parallèle au plan ;</li><li>infinité de solutions $\\to$ droite incluse dans le plan.</li></ul>` },
        { type:'form', label:'FORM', titre:'Distance d\'un point à un plan',
          contenu:`La distance du point $M(x_0,y_0,z_0)$ au plan $\\mathcal P : ax+by+cz+d=0$ est :<br>$$d(M,\\mathcal P) = \\frac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^2+b^2+c^2}}.$$<br>Le projeté orthogonal $H$ de $M$ sur $\\mathcal P$ s'obtient via la droite passant par $M$ de vecteur directeur $\\vec n$.` },
        { type:'ex', label:'EX', titre:'Projeté orthogonal et distance',
          contenu:`<strong>Énoncé</strong> : distance de $M(1,1,1)$ au plan $\\mathcal P : 2x - y + 2z - 3 = 0$.<br><strong>Solution</strong> : $\\vec n=(2,-1,2)$, $\\|\\vec n\\| = 3$.<br>$$d(M,\\mathcal P) = \\frac{|2 - 1 + 2 - 3|}{3} = \\frac{0}{3} = 0.$$<br>La distance nulle signifie que $M \\in \\mathcal P$ (on vérifie : $2-1+2-3=0$).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 11. NOMBRES COMPLEXES  (ENRICH)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-complexe', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Nombres complexes', ordre: 11, enrich: true,
  sections: [
    {
      titre: 'Forme algébrique',
      cartes: [
        { type:'def', label:'DEF', titre:'Nombre complexe, forme algébrique',
          contenu:`Un <strong>nombre complexe</strong> s'écrit de façon unique $z = a + ib$ avec $a, b \\in \\mathbb{R}$ et $i^2 = -1$.<br>$a = \\mathrm{Re}(z)$ : <strong>partie réelle</strong> ; $b = \\mathrm{Im}(z)$ : <strong>partie imaginaire</strong>.<br>$z$ réel $\\iff \\mathrm{Im}(z)=0$ ; $z$ imaginaire pur $\\iff \\mathrm{Re}(z)=0$.<br>L'ensemble des complexes est noté $\\mathbb{C}$.` },
        { type:'def', label:'DEF', titre:'Conjugué et module',
          contenu:`<strong>Conjugué</strong> : $\\bar z = a - ib$. Propriétés : $\\overline{z+z'}=\\bar z+\\bar z'$, $\\overline{zz'}=\\bar z\\,\\bar z'$, $z\\bar z = a^2+b^2$.<br><strong>Module</strong> : $|z| = \\sqrt{a^2+b^2} = \\sqrt{z\\bar z}$. Propriétés : $|zz'|=|z||z'|$, $\\left|\\frac{z}{z'}\\right|=\\frac{|z|}{|z'|}$.<br>$z$ réel $\\iff \\bar z = z$ ; $z$ imaginaire pur $\\iff \\bar z = -z$.` },
        { type:'meth', label:'METH', titre:'Quotient sous forme algébrique',
          contenu:`Pour mettre $\\dfrac{z_1}{z_2}$ sous forme $a+ib$, <strong>multiplier par le conjugué du dénominateur</strong> :<br>$$\\frac{z_1}{z_2} = \\frac{z_1\\,\\overline{z_2}}{z_2\\,\\overline{z_2}} = \\frac{z_1\\,\\overline{z_2}}{|z_2|^2}.$$<br><strong>Ex.</strong> : $\\dfrac{2+i}{1-i} = \\dfrac{(2+i)(1+i)}{(1-i)(1+i)} = \\dfrac{2+2i+i-1}{2} = \\dfrac{1+3i}{2}$.` },
      ]
    },
    {
      titre: 'Formes trigonométrique et exponentielle',
      cartes: [
        { type:'def', label:'DEF', titre:'Module-argument, forme exponentielle',
          contenu:`Pour $z \\ne 0$, on écrit $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$ (<strong>forme exponentielle</strong>) avec :<br>$r = |z|$ (<strong>module</strong>) et $\\theta = \\arg(z)$ (<strong>argument</strong>, défini modulo $2\\pi$).<br>$\\cos\\theta = \\frac{a}{r}$, $\\sin\\theta = \\frac{b}{r}$. La formule $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ est la <strong>formule d'Euler</strong>.` },
        { type:'form', label:'FORM', titre:'Propriétés de l\'argument',
          contenu:`Pour $z, z' \\ne 0$ :<br>$$\\arg(zz') = \\arg z + \\arg z' \\ [2\\pi], \\qquad \\arg\\!\\left(\\frac{z}{z'}\\right) = \\arg z - \\arg z' \\ [2\\pi],$$<br>$$\\arg(\\bar z) = -\\arg z\\ [2\\pi], \\qquad \\arg(z^n) = n\\arg z\\ [2\\pi].$$<br>Multiplier par $e^{i\\theta}$ revient à <strong>tourner d'un angle $\\theta$</strong>.` },
        { type:'th', label:'THM', titre:'Formule de Moivre',
          contenu:`Pour tout $\\theta \\in \\mathbb{R}$ et $n \\in \\mathbb{Z}$ :<br>$$\\big(\\cos\\theta + i\\sin\\theta\\big)^n = \\cos(n\\theta) + i\\sin(n\\theta), \\qquad \\text{soit} \\quad (e^{i\\theta})^n = e^{in\\theta}.$$<br>Elle permet de linéariser $\\cos^n,\\sin^n$ et d'exprimer $\\cos(n\\theta),\\sin(n\\theta)$.<br><strong>Formules d'Euler</strong> : $\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}$, $\\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}$.` },
        { type:'meth', label:'METH', titre:'Passer d\'une forme à l\'autre',
          contenu:`<strong>Algébrique $\\to$ exponentielle</strong> : calculer $r=|z|=\\sqrt{a^2+b^2}$, puis $\\theta$ tel que $\\cos\\theta=\\frac ar$, $\\sin\\theta=\\frac br$.<br><strong>Ex.</strong> : $z = 1+i$ : $r = \\sqrt 2$, $\\cos\\theta = \\sin\\theta = \\frac{1}{\\sqrt2}$, donc $\\theta = \\frac\\pi4$. Ainsi $z = \\sqrt2\\,e^{i\\pi/4}$.<br><strong>Exponentielle $\\to$ algébrique</strong> : $re^{i\\theta} = r\\cos\\theta + i\\,r\\sin\\theta$.` },
      ]
    },
    {
      titre: 'Équations dans $\\mathbb{C}$',
      cartes: [
        { type:'th', label:'THM', titre:'Équation du second degré à coefficients réels',
          contenu:`Soit $az^2 + bz + c = 0$ ($a,b,c$ réels, $a\\ne0$), de discriminant $\\Delta = b^2 - 4ac$.<br><ul><li>$\\Delta > 0$ : deux racines réelles $\\frac{-b\\pm\\sqrt\\Delta}{2a}$ ;</li><li>$\\Delta = 0$ : racine double $-\\frac{b}{2a}$ ;</li><li>$\\Delta < 0$ : deux racines <strong>complexes conjuguées</strong> $\\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a}$.</li></ul>` },
        { type:'ex', label:'EX', titre:'Résolution avec $\\Delta<0$',
          contenu:`<strong>Énoncé</strong> : résoudre $z^2 - 2z + 5 = 0$ dans $\\mathbb{C}$.<br><strong>Solution</strong> : $\\Delta = 4 - 20 = -16 < 0$. $\\sqrt{-\\Delta} = 4$.<br>$$z = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i.$$<br>Les solutions $1+2i$ et $1-2i$ sont conjuguées.` },
        { type:'prop', label:'PROP', titre:'Racines $n$-ièmes de l\'unité',
          contenu:`Les solutions de $z^n = 1$ sont les $n$ <strong>racines $n$-ièmes de l'unité</strong> :<br>$$z_k = e^{2ik\\pi/n}, \\quad k = 0, 1, \\dots, n-1.$$<br>Elles forment un <strong>polygone régulier</strong> à $n$ sommets sur le cercle unité.<br><strong>Ex.</strong> : racines cubiques de l'unité : $1$, $j = e^{2i\\pi/3}$, $j^2 = e^{-2i\\pi/3}$, avec $1+j+j^2 = 0$.` },
      ]
    },
    {
      titre: 'Interprétation géométrique',
      cartes: [
        { type:'def', label:'DEF', titre:'Affixe d\'un point, d\'un vecteur',
          contenu:`Au point $M(x,y)$ on associe son <strong>affixe</strong> $z_M = x + iy$ ; au vecteur $\\vec{AB}$ l'affixe $z_B - z_A$.<br><strong>Distance</strong> : $AB = |z_B - z_A|$.<br><strong>Milieu</strong> de $[AB]$ : affixe $\\dfrac{z_A + z_B}{2}$.<br>Le plan ainsi repéré est le <strong>plan complexe</strong>.` },
        { type:'th', label:'THM', titre:'Angles et arguments',
          contenu:`Pour $A, B, C, D$ d'affixes distinctes :<br>$$\\big(\\vec{AB},\\vec{CD}\\big) = \\arg\\!\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\ [2\\pi].$$<br><strong>Conséquences</strong> : $A,B,C$ alignés $\\iff \\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}$.<br>$(AB)\\perp(CD) \\iff \\frac{z_D-z_C}{z_B-z_A}$ imaginaire pur.` },
        { type:'meth', label:'METH', titre:'Caractériser un ensemble de points',
          contenu:`Traduire une condition sur $z=x+iy$ en condition géométrique :<br><ul><li>$|z - z_A| = r$ : <strong>cercle</strong> de centre $A$, rayon $r$.</li><li>$|z - z_A| = |z - z_B|$ : <strong>médiatrice</strong> de $[AB]$.</li><li>$\\arg(z - z_A) = \\theta$ : <strong>demi-droite</strong> issue de $A$.</li></ul><strong>Ex.</strong> : $|z - 2i| = 3$ est le cercle de centre $(0,2)$, rayon $3$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 12. PROBABILITÉS  (NOUVEAU)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-tm-proba', filiere: 'term-spe-maths', matiere: 'ma',
  titre: 'Probabilités : variables aléatoires et loi binomiale', ordre: 12, enrich: false,
  sections: [
    {
      titre: 'Conditionnement et indépendance',
      cartes: [
        { type:'def', label:'DEF', titre:'Probabilité conditionnelle',
          contenu:`Pour $A, B$ avec $P(A) > 0$, la <strong>probabilité de $B$ sachant $A$</strong> est :<br>$$P_A(B) = \\frac{P(A \\cap B)}{P(A)}.$$<br>On en déduit la <strong>formule des probabilités composées</strong> : $P(A\\cap B) = P(A)\\,P_A(B)$.<br><strong>Indépendance</strong> : $A$ et $B$ indépendants $\\iff P(A\\cap B) = P(A)P(B) \\iff P_A(B)=P(B)$.` },
        { type:'th', label:'THM', titre:'Formule des probabilités totales',
          contenu:`Si $\\{A_1, \\dots, A_n\\}$ forme une <strong>partition</strong> de l'univers (événements incompatibles de réunion $\\Omega$, de probabilités non nulles), alors pour tout $B$ :<br>$$P(B) = \\sum_{i=1}^{n} P(A_i \\cap B) = \\sum_{i=1}^{n} P(A_i)\\,P_{A_i}(B).$$<br>Outil central pour les <strong>arbres pondérés</strong> : on somme sur toutes les branches menant à $B$.` },
        { type:'meth', label:'METH', titre:'Arbre pondéré et formule de Bayes',
          contenu:`<strong>Arbre</strong> : le produit des probabilités le long d'une branche donne $P(A_i \\cap B)$ ; la somme des branches menant à $B$ donne $P(B)$.<br><strong>Formule de Bayes</strong> (inverser le conditionnement) :<br>$$P_B(A_i) = \\frac{P(A_i)\\,P_{A_i}(B)}{P(B)}.$$<br><strong>Ex.</strong> : tests médicaux, « sachant le résultat $B$, probabilité de la cause $A_i$ ».` },
      ]
    },
    {
      titre: 'Variables aléatoires',
      cartes: [
        { type:'def', label:'DEF', titre:'Variable aléatoire, loi de probabilité',
          contenu:`Une <strong>variable aléatoire</strong> $X$ associe un réel à chaque issue de l'expérience. Sa <strong>loi de probabilité</strong> donne les $P(X = x_i)$ pour toutes les valeurs $x_i$ possibles, avec $\\sum_i P(X=x_i) = 1$.<br>La <strong>fonction de répartition</strong> est $F(x) = P(X \\le x)$.` },
        { type:'def', label:'DEF', titre:'Espérance, variance, écart-type',
          contenu:`$$E(X) = \\sum_i x_i\\, P(X = x_i) \\quad (\\text{moyenne théorique}),$$<br>$$V(X) = E\\big((X - E(X))^2\\big) = E(X^2) - E(X)^2 \\ge 0, \\qquad \\sigma(X) = \\sqrt{V(X)}.$$<br>$V(X)$ et $\\sigma(X)$ mesurent la <strong>dispersion</strong> autour de la moyenne.` },
        { type:'prop', label:'PROP', titre:'Linéarité de l\'espérance',
          contenu:`Pour tous réels $a, b$ :<br>$$E(aX + b) = a\\,E(X) + b, \\qquad V(aX + b) = a^2\\,V(X), \\qquad \\sigma(aX+b) = |a|\\,\\sigma(X).$$<br>L'espérance est <strong>linéaire</strong> : $E(X+Y) = E(X) + E(Y)$ (toujours vrai).<br>La variance n'est additive que pour des variables <strong>indépendantes</strong>.` },
        { type:'ex', label:'EX', titre:'Calcul d\'espérance et variance',
          contenu:`<strong>Énoncé</strong> : $X$ prend les valeurs $0, 1, 2$ avec $P(X{=}0)=\\frac12$, $P(X{=}1)=\\frac13$, $P(X{=}2)=\\frac16$.<br><strong>Solution</strong> : $E(X) = 0\\cdot\\frac12 + 1\\cdot\\frac13 + 2\\cdot\\frac16 = \\frac23$.<br>$E(X^2) = 0 + \\frac13 + 4\\cdot\\frac16 = 1$. $V(X) = 1 - \\frac49 = \\frac59$, $\\sigma(X) = \\frac{\\sqrt5}{3}$.` },
      ]
    },
    {
      titre: 'Schéma de Bernoulli et loi binomiale',
      cartes: [
        { type:'def', label:'DEF', titre:'Épreuve de Bernoulli, schéma de Bernoulli',
          contenu:`Une <strong>épreuve de Bernoulli</strong> de paramètre $p$ a deux issues : succès (probabilité $p$) et échec (probabilité $1-p=q$).<br>Un <strong>schéma de Bernoulli</strong> est la <strong>répétition de $n$ épreuves identiques et indépendantes</strong>.<br>$X$ = nombre de succès suit alors la <strong>loi binomiale</strong> $\\mathcal B(n,p)$.` },
        { type:'th', label:'THM', titre:'Loi binomiale $\\mathcal B(n,p)$',
          contenu:`Si $X \\sim \\mathcal B(n,p)$, alors pour $k \\in \\{0,1,\\dots,n\\}$ :<br>$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}.$$<br>Le coefficient $\\dbinom{n}{k}$ compte les positions des $k$ succès parmi les $n$ épreuves.<br><strong>Espérance et variance</strong> : $E(X) = np$, $\\quad V(X) = np(1-p)$, $\\quad \\sigma(X) = \\sqrt{np(1-p)}$.` },
        { type:'meth', label:'METH', titre:'Calculs « au moins », « au plus »',
          contenu:`Pour $X \\sim \\mathcal B(n,p)$ :<br><strong>« au moins un succès »</strong> : $P(X \\ge 1) = 1 - P(X=0) = 1 - (1-p)^n$ (passer par l'événement contraire).<br><strong>« au plus $k$ »</strong> : $P(X \\le k) = \\sum_{j=0}^{k} P(X=j)$.<br><strong>« entre $a$ et $b$ »</strong> : $P(a \\le X \\le b) = P(X\\le b) - P(X \\le a-1)$.` },
        { type:'ex', label:'EX', titre:'Application de la loi binomiale',
          contenu:`<strong>Énoncé</strong> : on lance $10$ fois une pièce équilibrée. $X$ = nombre de « pile ». Probabilité d'obtenir exactement $6$ piles ? Au moins un pile ?<br><strong>Solution</strong> : $X \\sim \\mathcal B(10, \\frac12)$.<br>$P(X=6) = \\binom{10}{6}\\left(\\frac12\\right)^{10} = \\frac{210}{1024} \\approx 0{,}205$.<br>$P(X\\ge1) = 1 - \\left(\\frac12\\right)^{10} = 1 - \\frac{1}{1024} \\approx 0{,}999$.` },
      ]
    },
    {
      titre: 'Concentration et loi des grands nombres',
      cartes: [
        { type:'th', label:'THM', titre:'Inégalité de Bienaymé-Tchebychev',
          contenu:`Pour une variable aléatoire $X$ d'espérance $\\mu$ et de variance $V$, pour tout $\\delta > 0$ :<br>$$P\\big(|X - \\mu| \\ge \\delta\\big) \\le \\frac{V}{\\delta^2}.$$<br>Elle <strong>majore</strong> la probabilité de s'écarter de la moyenne de plus de $\\delta$, sans connaître la loi exacte. Plus la variance est petite, plus $X$ est concentrée autour de $\\mu$.` },
        { type:'th', label:'THM', titre:'Inégalité de concentration (moyenne)',
          contenu:`Soit $M_n = \\frac{X_1 + \\dots + X_n}{n}$ la moyenne de $n$ variables <strong>indépendantes et de même loi</strong> d'espérance $\\mu$ et variance $V$. Alors $E(M_n) = \\mu$, $V(M_n) = \\frac{V}{n}$, et :<br>$$P\\big(|M_n - \\mu| \\ge \\delta\\big) \\le \\frac{V}{n\\,\\delta^2}.$$<br>Le majorant tend vers $0$ quand $n \\to +\\infty$.` },
        { type:'th', label:'THM', titre:'Loi des grands nombres',
          contenu:`Pour la moyenne $M_n$ de $n$ variables indépendantes de même loi, pour tout $\\delta > 0$ :<br>$$\\lim_{n\\to+\\infty} P\\big(|M_n - \\mu| \\ge \\delta\\big) = 0.$$<br><strong>Interprétation</strong> : la <strong>moyenne empirique</strong> se rapproche de l'espérance $\\mu$ quand le nombre d'expériences augmente. Justifie l'estimation d'une probabilité par une <strong>fréquence observée</strong>.` },
        { type:'ex', label:'EX', titre:'Taille d\'échantillon par concentration',
          contenu:`<strong>Énoncé</strong> : $X \\sim \\mathcal B(1,p)$, fréquence $F_n$ de succès sur $n$ tirages. Combien faut-il de tirages pour garantir $P(|F_n - p| \\ge 0{,}05) \\le 0{,}05$ ?<br><strong>Solution</strong> : $V(X) = p(1-p) \\le \\frac14$. Inégalité : $\\frac{V}{n\\,\\delta^2} \\le \\frac{1}{4n(0{,}05)^2} = \\frac{100}{n}$.<br>On veut $\\frac{100}{n} \\le 0{,}05$, soit $n \\ge 2000$.` },
      ]
    },
  ]
},

];
