// CPGE — Informatique · Dictionnaires/PD, représentation des nombres, Python, bases de données
// Programme officiel CPGE scientifiques (2021/2022) — tronc commun informatique
// matiere: 'info' · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════════════════════
// 1. DICTIONNAIRES & PROGRAMMATION DYNAMIQUE   (id: info-dico)
// ══════════════════════════════════════════════════════════════════════════════
{
  id: 'info-dico', matiere: 'info',
  titre: 'Dictionnaires et programmation dynamique', ordre: 7, enrich: true,
  sections: [

    {
      titre: 'Type abstrait dictionnaire',
      cartes: [
        { type:'def', label:'DEF', titre:'Dictionnaire (tableau associatif)',
          contenu:`Un <strong>dictionnaire</strong> est une structure de données abstraite stockant un ensemble de couples $(\\text{clé}, \\text{valeur})$, où chaque clé est <strong>unique</strong>. Les opérations exigibles sont :<br><ul><li><strong>recherche</strong> : étant donnée une clé $k$, renvoyer la valeur associée (ou signaler son absence) ;</li><li><strong>insertion</strong> : ajouter ou modifier le couple $(k, v)$ ;</li><li><strong>suppression</strong> : retirer la clé $k$.</li></ul>Les clés ne sont pas ordonnées : un dictionnaire n'offre aucune garantie de parcours trié. En Python, le type natif <code>dict</code> implémente cette interface.` },
        { type:'prop', label:'PROP', titre:'Implémentations possibles et coûts',
          contenu:`Le type dictionnaire admet plusieurs réalisations, de complexités différentes pour une recherche :<br><ul><li><strong>Tableau / liste de couples</strong> non trié : recherche $O(n)$ ;</li><li><strong>Tableau trié sur la clé</strong> : recherche $O(\\log n)$ par dichotomie, mais insertion $O(n)$ ;</li><li><strong>Arbre binaire de recherche équilibré</strong> : $O(\\log n)$ pour toutes les opérations ;</li><li><strong>Table de hachage</strong> : $O(1)$ en <strong>moyenne / amorti</strong>, $O(n)$ au pire.</li></ul>La table de hachage est l'implémentation de référence quand l'ordre des clés est sans importance.` },
        { type:'def', label:'DEF', titre:'Clé hachable',
          contenu:`Une clé doit pouvoir être hachée et comparée à l'égalité. En Python, une clé doit être <strong>hachable</strong> : son <code>hash</code> doit être constant durant sa vie. Sont hachables les objets <strong>immuables</strong> (<code>int</code>, <code>float</code>, <code>str</code>, <code>tuple</code> d'immuables, <code>frozenset</code>) ; ne le sont <strong>pas</strong> les objets mutables (<code>list</code>, <code>dict</code>, <code>set</code>).<br><strong>Contrainte cohérence</strong> : si $a = b$ alors $h(a) = h(b)$ ; deux objets égaux doivent avoir le même haché.` },
      ]
    },

    {
      titre: 'Tables de hachage : principe',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction de hachage',
          contenu:`Une <strong>fonction de hachage</strong> est une application $h : \\mathcal{U} \\to \\{ 0, 1, \\dots, m-1 \\}$ qui à toute clé de l'univers $\\mathcal{U}$ associe un indice dans un tableau de $m$ alvéoles (<em>buckets</em>).<br>Une <strong>bonne</strong> fonction de hachage doit :<br><ul><li>être <strong>rapide</strong> à calculer (idéalement $O(1)$) ;</li><li><strong>répartir uniformément</strong> les clés sur $\\{0, \\dots, m-1\\}$ (hypothèse de hachage uniforme simple) ;</li><li>être <strong>déterministe</strong>.</li></ul>` },
        { type:'form', label:'FORM', titre:'Méthodes de construction usuelles',
          contenu:`Pour une clé entière $k$ :<br><ul><li><strong>Méthode de division</strong> : $h(k) = k \\bmod m$. On choisit $m$ premier, loin d'une puissance de $2$.</li><li><strong>Méthode de multiplication</strong> : $h(k) = \\lfloor m\\,(k A \\bmod 1) \\rfloor$ avec $0 < A < 1$ (souvent $A \\approx (\\sqrt5-1)/2$).</li></ul>Pour une chaîne $s = s_0 s_1 \\dots s_{p-1}$, hachage polynomial :<br>$$h(s) = \\Big( \\sum_{i=0}^{p-1} s_i \\, b^{\\,i} \\Big) \\bmod m,$$<br>avec une base $b$ (souvent $31$ ou $b$ premier).` },
        { type:'def', label:'DEF', titre:'Facteur de charge',
          contenu:`Le <strong>facteur de charge</strong> d'une table de hachage à $n$ éléments stockés dans $m$ alvéoles est :<br>$$\\alpha = \\frac{n}{m}.$$<br>Il mesure le taux de remplissage. Les performances se dégradent quand $\\alpha$ augmente : on impose un <strong>seuil</strong> (typiquement $\\alpha_{\\max} \\approx 0{,}75$) au-delà duquel la table est redimensionnée.` },
      ]
    },

    {
      titre: 'Collisions et résolution',
      cartes: [
        { type:'def', label:'DEF', titre:'Collision',
          contenu:`Une <strong>collision</strong> survient lorsque deux clés distinctes $k_1 \\neq k_2$ ont la même image : $h(k_1) = h(k_2)$. Comme $|\\mathcal{U}| \\gg m$, les collisions sont <strong>inévitables</strong> (principe des tiroirs). Toute table de hachage doit donc disposer d'une <strong>stratégie de résolution</strong>.` },
        { type:'meth', label:'METH', titre:'Résolution par chaînage séparé',
          contenu:`Chaque alvéole $i$ contient une <strong>liste chaînée</strong> de tous les couples dont la clé vérifie $h(k) = i$.<br><ul><li><strong>Insertion</strong> : ajouter en tête de la liste de l'alvéole $h(k)$, en $O(1)$ ;</li><li><strong>Recherche / suppression</strong> : parcourir la liste de l'alvéole $h(k)$.</li></ul>Sous hachage uniforme, la longueur moyenne d'une liste vaut $\\alpha$ : recherche en $\\Theta(1 + \\alpha)$ en moyenne, donc $O(1)$ tant que $\\alpha$ est borné.` },
        { type:'meth', label:'METH', titre:'Résolution par adressage ouvert',
          contenu:`Tous les couples sont stockés <strong>dans le tableau lui-même</strong> ; en cas de collision, on <strong>sonde</strong> d'autres alvéoles selon une séquence :<br><ul><li><strong>sondage linéaire</strong> : $h_i(k) = (h(k) + i) \\bmod m$ — souffre du regroupement primaire ;</li><li><strong>sondage quadratique</strong> : $h_i(k) = (h(k) + c_1 i + c_2 i^2) \\bmod m$ ;</li><li><strong>double hachage</strong> : $h_i(k) = (h_1(k) + i\\, h_2(k)) \\bmod m$.</li></ul>Contrainte : $\\alpha < 1$ obligatoirement (le tableau ne peut être plus rempli que sa taille).` },
        { type:'prop', label:'PROP', titre:'Coût en adressage ouvert',
          contenu:`Sous hypothèse de hachage uniforme, le nombre moyen de sondages pour une recherche infructueuse en adressage ouvert est borné par :<br>$$\\frac{1}{1 - \\alpha}.$$<br>Ce coût explose quand $\\alpha \\to 1$ : pour $\\alpha = 0{,}9$, on sonde en moyenne $10$ alvéoles. Cela justifie de maintenir $\\alpha$ nettement inférieur à $1$ et de redimensionner.` },
      ]
    },

    {
      titre: 'Complexité amortie et redimensionnement',
      cartes: [
        { type:'def', label:'DEF', titre:'Complexité amortie',
          contenu:`La <strong>complexité amortie</strong> d'une opération est le coût <strong>moyen par opération</strong> sur une séquence d'opérations, dans le pire des cas pour la séquence. Elle lisse le coût d'opérations occasionnellement chères (ici, le redimensionnement). Méthode usuelle : l'<strong>analyse par agrégat</strong> (coût total d'une suite / nombre d'opérations).` },
        { type:'th', label:'THM', titre:'Coût amorti de l\'insertion dynamique',
          contenu:`Considérons une table doublant sa capacité ($m \\to 2m$) lorsque $\\alpha$ dépasse le seuil, avec réinsertion des $n$ éléments en $O(n)$.<br><strong>Théorème</strong> : sur une suite de $N$ insertions à partir d'une table vide, le coût total est $\\Theta(N)$. Donc le <strong>coût amorti d'une insertion est $O(1)$</strong>, bien qu'une insertion isolée puisse coûter $O(n)$.<br><strong>Idée</strong> : les redimensionnements ont lieu aux tailles $1, 2, 4, \\dots, 2^p$ ; coût total des copies $\\le 1 + 2 + \\dots + 2^p < 2^{p+1} \\le 2N$.` },
        { type:'prop', label:'PROP', titre:'Bilan des complexités d\'un dictionnaire par hachage',
          contenu:`<table><tr><td></td><td><strong>Moyenne / amorti</strong></td><td><strong>Pire cas</strong></td></tr><tr><td>recherche</td><td>$O(1)$</td><td>$O(n)$</td></tr><tr><td>insertion</td><td>$O(1)$</td><td>$O(n)$</td></tr><tr><td>suppression</td><td>$O(1)$</td><td>$O(n)$</td></tr></table>Le pire cas $O(n)$ correspond à une fonction de hachage dégénérée (toutes les clés dans la même alvéole). En pratique, sous une bonne fonction de hachage, on raisonne sur le coût moyen $O(1)$.` },
      ]
    },

    {
      titre: 'Programmation dynamique : principes',
      cartes: [
        { type:'def', label:'DEF', titre:'Programmation dynamique',
          contenu:`La <strong>programmation dynamique</strong> (PD) résout un problème d'optimisation en le décomposant en <strong>sous-problèmes qui se recouvrent</strong>, dont les solutions sont stockées (<em>mémoïsées</em>) pour n'être calculées qu'une fois. Deux ingrédients sont requis :<br><ul><li><strong>sous-structure optimale</strong> : une solution optimale se construit à partir de solutions optimales de sous-problèmes ;</li><li><strong>chevauchement des sous-problèmes</strong> : les mêmes sous-problèmes réapparaissent (sinon : diviser-pour-régner).</li></ul>` },
        { type:'meth', label:'METH', titre:'Descendante (mémoïsation) vs ascendante (tabulation)',
          contenu:`Deux mises en œuvre équivalentes :<br><ul><li><strong>Top-down (mémoïsation)</strong> : on écrit la récursion naturelle, en mémorisant les résultats déjà calculés dans un dictionnaire / tableau pour éviter de les recalculer ;</li><li><strong>Bottom-up (tabulation)</strong> : on remplit itérativement un tableau des sous-problèmes du plus petit au plus grand, sans récursion.</li></ul>L'approche ascendante évite le coût de la pile d'appels ; l'approche descendante ne calcule que les sous-problèmes utiles.` },
        { type:'ex', label:'EX', titre:'Fibonacci : de l\'exponentiel au linéaire',
          contenu:`La récursion naïve $F(n) = F(n-1) + F(n-2)$ recalcule les mêmes valeurs : coût $\\Theta(\\varphi^n)$ (exponentiel). Avec mémoïsation, chaque $F(k)$ n'est calculé qu'une fois → $\\Theta(n)$ temps.<br><pre><code>def fib(n, memo={}):
    if n < 2: return n
    if n in memo: return memo[n]
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]</code></pre>Version tabulée : un tableau <code>F[0..n]</code> rempli de gauche à droite, $\\Theta(n)$ temps et $O(1)$ espace possible.` },
      ]
    },

    {
      titre: 'Problèmes classiques de PD',
      cartes: [
        { type:'meth', label:'METH', titre:'Rendu de monnaie (nombre minimal de pièces)',
          contenu:`Système de pièces $(c_1, \\dots, c_k)$, somme $S$ à rendre. On cherche le nombre minimal de pièces.<br><strong>Récurrence</strong> ($N(s)$ = nb minimal de pièces pour rendre $s$) :<br>$$N(0) = 0, \\qquad N(s) = 1 + \\min_{\\,c_i \\le s} N(s - c_i).$$<br><strong>Complexité</strong> : $O(S\\,k)$ temps, $O(S)$ espace.<br><strong>Remarque</strong> : l'algorithme <strong>glouton</strong> (prendre la plus grosse pièce) n'est optimal que pour certains systèmes (dits canoniques, ex. euro) ; la PD est correcte pour tout système.` },
        { type:'meth', label:'METH', titre:'Plus longue sous-suite commune (LCS)',
          contenu:`Mots $X = x_1 \\dots x_m$ et $Y = y_1 \\dots y_n$. On note $c[i][j]$ la longueur de la LCS des préfixes $x_{1..i}$ et $y_{1..j}$ :<br>$$c[i][j] = \\begin{cases} 0 & \\text{si } i=0 \\text{ ou } j=0, \\\\ c[i-1][j-1] + 1 & \\text{si } x_i = y_j, \\\\ \\max\\!\\big(c[i-1][j],\\, c[i][j-1]\\big) & \\text{sinon.} \\end{cases}$$<br><strong>Complexité</strong> : $\\Theta(mn)$ temps et espace. On reconstruit une LCS en remontant la table. Application : <code>diff</code>, bio-informatique.` },
        { type:'meth', label:'METH', titre:'Sac à dos 0/1 (knapsack)',
          contenu:`$n$ objets ; objet $i$ de poids $w_i$ et valeur $v_i$ ; capacité $W$. Maximiser $\\sum v_i$ sans dépasser $W$, chaque objet pris au plus une fois.<br>$dp[i][j]$ = valeur max avec les $i$ premiers objets et capacité $j$ :<br>$$dp[i][j] = \\begin{cases} dp[i-1][j] & \\text{si } w_i > j, \\\\ \\max\\!\\big(dp[i-1][j],\\ dp[i-1][j - w_i] + v_i\\big) & \\text{sinon.} \\end{cases}$$<br><strong>Complexité</strong> : $O(nW)$ — <strong>pseudo-polynomiale</strong> (le problème est NP-difficile, $W$ intervient et non $\\log W$).` },
        { type:'meth', label:'METH', titre:'Distance d\'édition (Levenshtein)',
          contenu:`Nombre minimal d'opérations élémentaires (insertion, suppression, substitution) transformant $s_1$ en $s_2$. $d[i][j]$ = distance des préfixes de longueurs $i$ et $j$ :<br>$$d[i][j] = \\begin{cases} i & \\text{si } j = 0, \\\\ j & \\text{si } i = 0, \\\\ d[i-1][j-1] & \\text{si } s_1[i] = s_2[j], \\\\ 1 + \\min\\!\\big(d[i-1][j],\\, d[i][j-1],\\, d[i-1][j-1]\\big) & \\text{sinon.} \\end{cases}$$<br><strong>Complexité</strong> : $\\Theta(mn)$. Applications : correcteurs orthographiques, alignement de séquences.` },
        { type:'ex', label:'EX', titre:'Rendu de monnaie en Python (tabulation)',
          contenu:`<pre><code>def rendu(pieces, S):
    INF = float('inf')
    N = [0] + [INF]*S
    for s in range(1, S+1):
        for c in pieces:
            if c <= s and N[s-c] + 1 < N[s]:
                N[s] = N[s-c] + 1
    return N[S] if N[S] < INF else -1</code></pre>Pour <code>pieces = [1,2,5]</code> et <code>S = 11</code> : renvoie $3$ (à savoir $5+5+1$). La double boucle donne bien $O(S\\,k)$.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════════════════════
// 2. REPRÉSENTATION DES NOMBRES   (id: info-nombres)
// ══════════════════════════════════════════════════════════════════════════════
{
  id: 'info-nombres', matiere: 'info',
  titre: 'Représentation des nombres', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Bases de numération',
      cartes: [
        { type:'def', label:'DEF', titre:'Écriture en base $b$',
          contenu:`Tout entier $N \\in \\mathbb{N}$ s'écrit de façon unique en <strong>base</strong> $b \\ge 2$ :<br>$$N = \\sum_{i=0}^{p-1} a_i\\, b^{\\,i}, \\qquad a_i \\in \\{0, 1, \\dots, b-1\\},\\ a_{p-1} \\neq 0.$$<br>Les $a_i$ sont les <strong>chiffres</strong> de $N$. En informatique on utilise surtout la base $2$ (<strong>binaire</strong>, chiffres = <em>bits</em>), la base $16$ (<strong>hexadécimale</strong>, chiffres $0$–$9$ puis $A$–$F$) et la base $10$.` },
        { type:'meth', label:'METH', titre:'Conversion décimal → base $b$ (divisions successives)',
          contenu:`Pour écrire $N$ en base $b$ : on divise $N$ par $b$, on note le reste ; on recommence avec le quotient jusqu'à obtenir $0$. Les restes, <strong>lus de bas en haut</strong>, donnent l'écriture.<br><strong>Exemple</strong> : $N = 156$ en base $2$.<br>$156 = 2\\cdot78 + 0$, $78 = 2\\cdot39 + 0$, $39 = 2\\cdot19 + 1$, $19 = 2\\cdot9+1$, $9 = 2\\cdot4+1$, $4=2\\cdot2+0$, $2=2\\cdot1+0$, $1=2\\cdot0+1$.<br>Donc $156 = (10011100)_2$.` },
        { type:'meth', label:'METH', titre:'Binaire ↔ hexadécimal (regroupement par 4)',
          contenu:`Comme $16 = 2^4$, chaque chiffre hexadécimal correspond <strong>exactement</strong> à $4$ bits (<em>quartet</em> / nibble). Pour convertir, on regroupe les bits par paquets de $4$ <strong>à partir de la droite</strong> :<br>$$(1001\\,1100)_2 = (\\underbrace{1001}_{9}\\ \\underbrace{1100}_{\\mathrm C})_2 = (9\\mathrm C)_{16} = 156.$$<br>Cette correspondance fait de l'hexadécimal une notation compacte et lisible du binaire (1 octet = 2 chiffres hex).` },
      ]
    },

    {
      titre: 'Entiers non signés et arithmétique binaire',
      cartes: [
        { type:'def', label:'DEF', titre:'Entier non signé sur $n$ bits',
          contenu:`Un entier <strong>non signé</strong> codé sur $n$ bits représente une valeur de l'intervalle :<br>$$[\\,0,\\ 2^n - 1\\,].$$<br>Par exemple sur $8$ bits (un octet) : valeurs de $0$ à $255$ ; sur $16$ bits : $0$ à $65\\,535$ ; sur $32$ bits : $0$ à $\\approx 4{,}29 \\times 10^9$. Le bit de poids fort est à gauche (<em>MSB</em>), de poids faible à droite (<em>LSB</em>).` },
        { type:'meth', label:'METH', titre:'Addition binaire et retenue',
          contenu:`L'addition binaire suit les règles : $0+0=0$, $0+1=1$, $1+1 = 10$ (on pose $0$, retenue $1$), $1+1+1 = 11$ (on pose $1$, retenue $1$).<br><strong>Exemple</strong> sur $4$ bits :<br><pre><code>  1011   (11)
+ 0110   ( 6)
------
 10001   (17)</code></pre>Le résultat $17$ ne tient pas sur $4$ bits : la retenue sortante signale un <strong>dépassement</strong> (voir plus bas).` },
        { type:'prop', label:'PROP', titre:'Multiplication / division par $2^k$',
          contenu:`En binaire, multiplier par $2^k$ revient à <strong>décaler les bits de $k$ rangs vers la gauche</strong> (en complétant par des zéros à droite) ; diviser par $2^k$ (division entière) revient à décaler de $k$ rangs vers la <strong>droite</strong>. En Python : <code>x &lt;&lt; k</code> et <code>x &gt;&gt; k</code>.<br>De même, $x \\bmod 2^k$ s'obtient en ne gardant que les $k$ bits de poids faible : <code>x &amp; (2**k - 1)</code>.` },
      ]
    },

    {
      titre: 'Entiers signés : complément à deux',
      cartes: [
        { type:'def', label:'DEF', titre:'Complément à deux',
          contenu:`Sur $n$ bits, le <strong>complément à deux</strong> code un entier relatif. Un mot $(a_{n-1} \\dots a_0)$ représente :<br>$$x = -a_{n-1}\\,2^{n-1} + \\sum_{i=0}^{n-2} a_i\\, 2^{\\,i}.$$<br>Le bit de poids fort $a_{n-1}$ est le <strong>bit de signe</strong> ($0$ = positif, $1$ = négatif). Les valeurs représentables sont :<br>$$[\\,-2^{n-1},\\ 2^{n-1} - 1\\,].$$<br>Sur $8$ bits : de $-128$ à $+127$.` },
        { type:'meth', label:'METH', titre:'Calcul de l\'opposé en complément à deux',
          contenu:`Pour obtenir $-x$ à partir de $x$ : on <strong>inverse tous les bits</strong> (complément à un) puis on <strong>ajoute $1$</strong>.<br><strong>Exemple</strong> sur $8$ bits, $x = 5 = (00000101)_2$ :<br>inversion → $(11111010)_2$, plus $1$ → $(11111011)_2 = -5$.<br>Vérification : $-128 + 64 + 32 + 16 + 8 + 2 + 1 = -5$. L'opération est <strong>involutive</strong> : l'appliquer deux fois redonne $x$.` },
        { type:'prop', label:'PROP', titre:'Pourquoi le complément à deux ?',
          contenu:`Le complément à deux est <strong>universel</strong> car :<br><ul><li>il existe un <strong>unique zéro</strong> ($00\\dots0$), contrairement au signe-magnitude qui a $+0$ et $-0$ ;</li><li>l'<strong>addition</strong> signée utilise exactement le même circuit que l'addition non signée (l'arithmétique se fait modulo $2^n$) ;</li><li>la soustraction $a - b$ se ramène à $a + (-b)$.</li></ul>C'est la représentation des entiers signés dans tous les processeurs modernes.` },
        { type:'ex', label:'EX', titre:'Addition de signés',
          contenu:`Sur $8$ bits, calculer $5 + (-3)$ :<br>$5 = (00000101)_2$, $-3 = (11111101)_2$.<br><pre><code>  00000101   ( 5)
+ 11111101   (-3)
---------
 100000010</code></pre>La retenue sortante (le $9^e$ bit) est <strong>ignorée</strong> : il reste $(00000010)_2 = 2$. Le résultat est correct, ce qui illustre que l'addition se fait modulo $2^8$.` },
      ]
    },

    {
      titre: 'Dépassements de capacité',
      cartes: [
        { type:'def', label:'DEF', titre:'Dépassement (overflow)',
          contenu:`Un <strong>dépassement de capacité</strong> survient quand le résultat exact d'une opération sort de l'intervalle représentable. Le résultat machine est alors <strong>faux</strong> (arithmétique modulaire $\\bmod 2^n$).<br>Pour les entiers <strong>signés</strong> en complément à deux : il y a dépassement ssi les deux opérandes ont le <strong>même signe</strong> et le résultat un signe <strong>opposé</strong>. Détection matérielle : retenue entrante $\\neq$ retenue sortante du bit de signe.` },
        { type:'ex', label:'EX', titre:'Dépassement signé classique',
          contenu:`Sur $8$ bits signés ($-128$ à $127$), calculons $100 + 50 = 150$ :<br>$100 = (01100100)_2$, $50 = (00110010)_2$, somme $= (10010110)_2$.<br>Le bit de signe vaut $1$ : la machine lit $-128 + 16 + 4 + 2 = -106$. Deux positifs donnent un négatif → <strong>overflow</strong>. La valeur $150$ ne tient pas sur $8$ bits signés.` },
        { type:'prop', label:'PROP', titre:'Le cas particulier de Python',
          contenu:`En <strong>Python</strong>, le type <code>int</code> est de <strong>précision arbitraire</strong> (entiers « longs ») : il n'y a <strong>jamais de dépassement</strong>, la taille s'adapte automatiquement à la valeur. <code>2**1000</code> est calculé exactement.<br>Ce confort a un coût : les opérations sur grands entiers sont plus lentes que sur des entiers machine de taille fixe. Les langages comme C ou Java, eux, ont des entiers de taille bornée et donc des dépassements.` },
      ]
    },

    {
      titre: 'Nombres flottants (norme IEEE 754)',
      cartes: [
        { type:'def', label:'DEF', titre:'Représentation en virgule flottante',
          contenu:`Un nombre <strong>flottant</strong> normalisé s'écrit :<br>$$x = (-1)^s \\times m \\times 2^{\\,e},$$<br>où $s$ est le <strong>signe</strong> ($1$ bit), $m$ la <strong>mantisse</strong> (significande) et $e$ l'<strong>exposant</strong>. La norme <strong>IEEE 754</strong> fixe l'encodage. En double précision (<code>float</code> Python, $64$ bits) : $1$ bit de signe, $11$ bits d'exposant, $52$ bits de mantisse.` },
        { type:'form', label:'FORM', titre:'Encodage IEEE 754 double précision',
          contenu:`Pour un flottant <strong>normalisé</strong> sur $64$ bits, d'exposant biaisé $E \\in \\{1, \\dots, 2046\\}$ et de mantisse fractionnaire $f$ (les $52$ bits) :<br>$$x = (-1)^s \\times (1{.}f)_2 \\times 2^{\\,E - 1023}.$$<br>Le <strong>1 implicite</strong> (bit caché) précède la mantisse. Le <strong>biais</strong> vaut $1023$. Cas spéciaux : $E = 0$ → dénormalisés et $\\pm 0$ ; $E = 2047$ → $\\pm\\infty$ (mantisse nulle) et <code>NaN</code> (mantisse non nulle).` },
        { type:'def', label:'DEF', titre:'Ordres de grandeur (double précision)',
          contenu:`En double précision :<br><ul><li>plus grand fini $\\approx 1{,}80 \\times 10^{308}$ ; au-delà : $+\\infty$ (<strong>overflow</strong>) ;</li><li>plus petit normalisé $\\approx 2{,}23 \\times 10^{-308}$ ; en dessous : dénormalisés puis $0$ (<strong>underflow</strong>) ;</li><li><strong>précision relative</strong> $\\approx 15$–$16$ chiffres décimaux significatifs ;</li><li><strong>epsilon machine</strong> $\\varepsilon = 2^{-52} \\approx 2{,}22 \\times 10^{-16}$ : plus petit $\\varepsilon$ tel que $1 + \\varepsilon \\neq 1$.</li></ul>` },
      ]
    },

    {
      titre: 'Erreurs d\'arrondi et caractères',
      cartes: [
        { type:'th', label:'THM', titre:'Arrondi et non-exactitude',
          contenu:`L'ensemble des flottants est <strong>fini</strong> et <strong>non uniformément réparti</strong> : tout réel est arrondi au flottant le plus proche, avec une erreur relative bornée par $\\varepsilon / 2$ (arrondi au plus proche). Conséquences exigibles :<br><ul><li><strong>$0{,}1$ n'est pas représentable exactement</strong> en binaire (développement infini) ;</li><li>l'<strong>addition flottante n'est pas associative</strong> en général ;</li><li>tester l'égalité de deux flottants est <strong>déconseillé</strong>.</li></ul>` },
        { type:'ex', label:'EX', titre:'Le piège de $0{,}1 + 0{,}2$',
          contenu:`En Python :<br><pre><code>>>> 0.1 + 0.2
0.30000000000000004
>>> 0.1 + 0.2 == 0.3
False</code></pre>$0{,}1$ et $0{,}2$ sont arrondis, leur somme aussi : le résultat diffère de $0{,}3$ d'environ $5{,}5 \\times 10^{-17}$.<br><strong>Bon réflexe</strong> : comparer à epsilon près, <code>abs(a - b) &lt; 1e-9</code>, plutôt que <code>a == b</code>.` },
        { type:'meth', label:'METH', titre:'Limiter l\'erreur numérique',
          contenu:`Quelques règles pratiques :<br><ul><li>éviter la <strong>soustraction de nombres proches</strong> (<em>cancellation</em> : perte de chiffres significatifs) ;</li><li>sommer les termes du <strong>plus petit au plus grand</strong> ;</li><li>préférer des formes numériquement stables (ex. $\\log(1+x)$ via <code>log1p</code>) ;</li><li>ne jamais tester l'égalité stricte de flottants.</li></ul>` },
        { type:'def', label:'DEF', titre:'Représentation des caractères : ASCII et Unicode',
          contenu:`Un <strong>caractère</strong> est codé par un entier.<br><ul><li><strong>ASCII</strong> : code sur $7$ bits ($0$ à $127$) ; couvre lettres latines non accentuées, chiffres, ponctuation. Ex. <code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48.</li><li><strong>Unicode</strong> : répertoire universel attribuant un <em>point de code</em> à chaque caractère de toutes les écritures (plus de $10^5$). <strong>UTF-8</strong> est l'encodage dominant : longueur variable ($1$ à $4$ octets), compatible ASCII sur les $128$ premiers caractères.</li></ul>En Python : <code>ord('A')</code> $\\to 65$, <code>chr(233)</code> $\\to$ <code>'é'</code>.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════════════════════
// 3. LANGAGE PYTHON (exigible)   (id: info-python)
// ══════════════════════════════════════════════════════════════════════════════
{
  id: 'info-python', matiere: 'info',
  titre: 'Langage Python (exigible)', ordre: 9, enrich: true,
  sections: [

    {
      titre: 'Types et structures séquentielles',
      cartes: [
        { type:'def', label:'DEF', titre:'Types natifs et mutabilité',
          contenu:`Python distingue objets <strong>immuables</strong> (non modifiables en place) et <strong>mutables</strong> :<br><ul><li><strong>Immuables</strong> : <code>int</code>, <code>float</code>, <code>bool</code>, <code>str</code>, <code>tuple</code>, <code>frozenset</code> ;</li><li><strong>Mutables</strong> : <code>list</code>, <code>dict</code>, <code>set</code>.</li></ul><strong>Précision entière</strong> : <code>int</code> est de précision arbitraire (pas d'overflow). <strong>Division</strong> : <code>/</code> renvoie un flottant, <code>//</code> est la division entière (floor), <code>%</code> le modulo, <code>**</code> la puissance.` },
        { type:'prop', label:'PROP', titre:'Listes : opérations et coûts',
          contenu:`La <code>list</code> est un <strong>tableau dynamique</strong> ordonné et mutable.<br><table><tr><td><code>L[i]</code> accès / écriture</td><td>$O(1)$</td></tr><tr><td><code>L.append(x)</code></td><td>$O(1)$ amorti</td></tr><tr><td><code>L.pop()</code> (fin)</td><td>$O(1)$</td></tr><tr><td><code>L.insert(0,x)</code>, <code>L.pop(0)</code></td><td>$O(n)$</td></tr><tr><td><code>x in L</code></td><td>$O(n)$</td></tr><tr><td><code>len(L)</code></td><td>$O(1)$</td></tr></table>Insérer / supprimer en tête est coûteux : c'est tout le tableau qui se décale.` },
        { type:'def', label:'DEF', titre:'Tuples et chaînes',
          contenu:`Le <code>tuple</code> est une séquence <strong>immuable</strong> : <code>t = (1, 2, 3)</code>. Utile pour des données fixes, des clés de dictionnaire, ou le retour multiple de fonctions (<code>return a, b</code>).<br>La <code>str</code> est une séquence <strong>immuable</strong> de caractères : toute « modification » crée une nouvelle chaîne. Concaténation par <code>+</code>, répétition par <code>*</code>, sous-chaîne par tranche.` },
        { type:'meth', label:'METH', titre:'Tranches (slicing)',
          contenu:`Pour une séquence <code>s</code>, la tranche <code>s[a:b:p]</code> extrait les éléments d'indice $a$ inclus à $b$ exclu, avec un pas $p$ :<br><ul><li><code>s[1:4]</code> → indices 1, 2, 3 ;</li><li><code>s[:n]</code> → $n$ premiers ; <code>s[n:]</code> → à partir de $n$ ;</li><li><code>s[::-1]</code> → séquence inversée ;</li><li><code>s[::2]</code> → un élément sur deux.</li></ul>Sur une liste, une tranche renvoie une <strong>nouvelle liste</strong> (copie superficielle).` },
      ]
    },

    {
      titre: 'Dictionnaires et ensembles',
      cartes: [
        { type:'def', label:'DEF', titre:'Dictionnaires',
          contenu:`Le <code>dict</code> associe des <strong>clés hachables</strong> à des valeurs : <code>d = {'a': 1, 'b': 2}</code>. Implémenté par table de hachage → accès, insertion, suppression en $O(1)$ moyen.<br><pre><code>d['c'] = 3          # insertion / modification
v = d.get('x', 0)   # valeur ou défaut
for k, v in d.items():   # parcours clés+valeurs
    ...
'a' in d            # test d'appartenance O(1)</code></pre>Depuis Python 3.7, l'ordre d'<strong>insertion</strong> des clés est préservé au parcours.` },
        { type:'def', label:'DEF', titre:'Ensembles',
          contenu:`Le <code>set</code> est une collection <strong>non ordonnée</strong> d'éléments hachables <strong>distincts</strong>, implémentée par hachage : appartenance, ajout, retrait en $O(1)$ moyen.<br><pre><code>s = {1, 2, 3}
s.add(4); s.discard(2)
3 in s              # O(1)</code></pre>Opérations ensemblistes : union <code>|</code>, intersection <code>&amp;</code>, différence <code>-</code>, différence symétrique <code>^</code>. Variante immuable : <code>frozenset</code> (hachable, donc utilisable comme clé).` },
        { type:'meth', label:'METH', titre:'Dédoublonnage et comptage',
          contenu:`Idiomes fréquents reposant sur les ensembles / dictionnaires :<br><ul><li><strong>éliminer les doublons</strong> d'une liste : <code>list(set(L))</code> (ordre non garanti) ;</li><li><strong>tester l'unicité</strong> : <code>len(set(L)) == len(L)</code> ;</li><li><strong>compter les occurrences</strong> : <code>collections.Counter(L)</code> ou un <code>dict</code> incrémenté.</li></ul>Remplacer un <code>x in L</code> (liste, $O(n)$) par <code>x in s</code> (ensemble, $O(1)$) est une optimisation classique.` },
      ]
    },

    {
      titre: 'Compréhensions',
      cartes: [
        { type:'meth', label:'METH', titre:'Compréhensions de liste',
          contenu:`Une <strong>compréhension</strong> construit une liste de façon concise :<br><pre><code>carres = [x**2 for x in range(10)]
pairs  = [x for x in L if x % 2 == 0]
grille = [[0]*n for _ in range(m)]   # matrice m×n</code></pre>Forme générale : <code>[expr for var in iterable if condition]</code>.<br><strong>Piège</strong> : <code>[[0]*n]*m</code> crée $m$ références vers <strong>la même</strong> ligne ; utiliser la compréhension pour des lignes indépendantes.` },
        { type:'meth', label:'METH', titre:'Compréhensions de dict et de set',
          contenu:`La syntaxe s'étend aux dictionnaires et ensembles :<br><pre><code>carres = {x: x**2 for x in range(5)}   # dict
distincts = {x % 3 for x in L}         # set
inverse = {v: k for k, v in d.items()} # dict inversé</code></pre>Plus lisibles et souvent plus rapides qu'une boucle <code>for</code> avec <code>append</code> / affectation.` },
        { type:'ex', label:'EX', titre:'Produit cartésien et filtrage',
          contenu:`Compréhension à deux boucles imbriquées :<br><pre><code>couples = [(i, j) for i in range(3)
                  for j in range(3) if i != j]
# [(0,1),(0,2),(1,0),(1,2),(2,0),(2,1)]</code></pre>L'ordre des <code>for</code> est le même qu'en boucles imbriquées classiques : le premier <code>for</code> est la boucle externe.` },
      ]
    },

    {
      titre: 'Fonctions et portée des variables',
      cartes: [
        { type:'def', label:'DEF', titre:'Définition de fonction',
          contenu:`Une fonction se définit par <code>def</code> ; elle peut avoir des paramètres positionnels, des paramètres par <strong>défaut</strong>, et renvoyer une valeur (ou <code>None</code> implicitement) :<br><pre><code>def puissance(x, n=2):
    return x ** n

puissance(3)      # 9   (n vaut 2)
puissance(3, 3)   # 27
puissance(n=4, x=2)  # 16 (arguments nommés)</code></pre>Une fonction sans <code>return</code> renvoie <code>None</code>.` },
        { type:'prop', label:'PROP', titre:'Portée : règle LEGB',
          contenu:`Python résout un nom selon la règle <strong>LEGB</strong> : <strong>L</strong>ocal → <strong>E</strong>nglobant (fonctions imbriquées) → <strong>G</strong>lobal → <strong>B</strong>uilt-in.<br>Par défaut, une affectation dans une fonction crée une variable <strong>locale</strong>. Pour modifier une variable globale depuis une fonction, il faut la déclarer avec <code>global</code> ; pour une variable d'une fonction englobante, <code>nonlocal</code>. <em>Lire</em> une globale ne nécessite aucune déclaration.` },
        { type:'th', label:'THM', titre:'Piège de l\'argument par défaut mutable',
          contenu:`La valeur par défaut d'un paramètre est <strong>évaluée une seule fois</strong>, à la définition de la fonction. Un défaut <strong>mutable</strong> est donc <strong>partagé</strong> entre tous les appels :<br><pre><code>def ajoute(x, L=[]):   # DANGER
    L.append(x); return L
ajoute(1)   # [1]
ajoute(2)   # [1, 2]  (!)</code></pre><strong>Correctif</strong> : utiliser <code>L=None</code> puis <code>if L is None: L = []</code> dans le corps.` },
      ]
    },

    {
      titre: 'Mutabilité, références et exceptions',
      cartes: [
        { type:'prop', label:'PROP', titre:'Passage des arguments et alias',
          contenu:`Python passe les arguments <strong>par référence d'objet</strong> (l'identité de l'objet est transmise).<br><ul><li>Modifier un objet <strong>mutable</strong> reçu (ex. <code>L.append</code>) affecte l'appelant ;</li><li>Réaffecter le paramètre (ex. <code>L = [...]</code>) ne change <strong>pas</strong> la variable de l'appelant ;</li><li>Les objets <strong>immuables</strong> donnent l'illusion d'un passage par valeur.</li></ul>Deux variables peuvent être <strong>alias</strong> du même objet : <code>a is b</code> teste l'identité, <code>a == b</code> l'égalité de valeur.` },
        { type:'meth', label:'METH', titre:'Copies : superficielle vs profonde',
          contenu:`Pour une structure imbriquée :<br><ul><li><code>L2 = L</code> : <strong>alias</strong> (même objet) ;</li><li><code>L2 = L[:]</code> ou <code>list(L)</code> : copie <strong>superficielle</strong> (les sous-objets restent partagés) ;</li><li><code>copy.deepcopy(L)</code> : copie <strong>profonde</strong> (récursive, objets indépendants).</li></ul>Modifier une sous-liste après copie superficielle affecte les deux structures — source de bugs fréquents.` },
        { type:'meth', label:'METH', titre:'Gestion des exceptions',
          contenu:`Une <strong>exception</strong> interrompt le flux normal ; on la capture par <code>try</code>/<code>except</code> :<br><pre><code>try:
    x = int(input())
    y = 10 / x
except ValueError:
    print("entrée non entière")
except ZeroDivisionError:
    print("division par zéro")
else:
    print("ok", y)   # si aucune exception
finally:
    print("toujours exécuté")</code></pre>On lève une exception par <code>raise</code>. Exceptions usuelles : <code>ValueError</code>, <code>IndexError</code>, <code>KeyError</code>, <code>TypeError</code>, <code>ZeroDivisionError</code>.` },
        { type:'meth', label:'METH', titre:'Lecture et écriture de fichiers',
          contenu:`Le gestionnaire de contexte <code>with</code> garantit la fermeture du fichier :<br><pre><code>with open("data.txt", "r", encoding="utf-8") as f:
    for ligne in f:          # parcours ligne à ligne
        traiter(ligne.rstrip())

with open("out.txt", "w", encoding="utf-8") as f:
    f.write("résultat\\n")</code></pre>Modes : <code>"r"</code> lecture, <code>"w"</code> écriture (écrase), <code>"a"</code> ajout. Toujours préciser <code>encoding="utf-8"</code> pour les accents.` },
      ]
    },

    {
      titre: 'Modules scientifiques (notions)',
      cartes: [
        { type:'def', label:'DEF', titre:'Importation de modules',
          contenu:`La bibliothèque standard et les paquets externes s'utilisent via <code>import</code> :<br><pre><code>import math
import numpy as np
import matplotlib.pyplot as plt
from random import randint</code></pre><code>import m</code> donne accès à <code>m.objet</code> ; <code>from m import x</code> importe directement <code>x</code>. L'alias <code>as</code> raccourcit les noms (convention <code>np</code>, <code>plt</code>).` },
        { type:'meth', label:'METH', titre:'numpy : tableaux numériques',
          contenu:`<code>numpy</code> fournit le tableau homogène <code>ndarray</code>, plus rapide et compact que les listes pour le calcul numérique :<br><pre><code>import numpy as np
a = np.array([1.0, 2.0, 3.0])
b = np.zeros(5);  c = np.linspace(0, 1, 11)
a * 2            # opérations vectorisées (sans boucle)
a.sum(), a.mean(), a @ a   # somme, moyenne, prod. scalaire</code></pre>Les opérations sont <strong>vectorisées</strong> : on applique l'opération à tout le tableau d'un coup, sans boucle Python explicite.` },
        { type:'meth', label:'METH', titre:'matplotlib : tracé de courbes',
          contenu:`<code>matplotlib.pyplot</code> trace des graphiques :<br><pre><code>import numpy as np
import matplotlib.pyplot as plt
x = np.linspace(0, 2*np.pi, 200)
plt.plot(x, np.sin(x), label="sin")
plt.xlabel("x"); plt.ylabel("y")
plt.legend(); plt.grid(True)
plt.show()</code></pre>On superpose plusieurs <code>plot</code> avant <code>show()</code>. Sert à visualiser des données ou des résultats de simulation.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════════════════════
// 4. BASES DE DONNÉES & SQL   (id: info-bdd)
// ══════════════════════════════════════════════════════════════════════════════
{
  id: 'info-bdd', matiere: 'info',
  titre: 'Bases de données et SQL', ordre: 6, enrich: true,
  sections: [

    {
      titre: 'Modèle relationnel',
      cartes: [
        { type:'def', label:'DEF', titre:'Relation, attribut, schéma',
          contenu:`Une <strong>base de données relationnelle</strong> organise les données en <strong>relations</strong> (tables). Vocabulaire :<br><ul><li>une <strong>relation</strong> = une table ; chaque <strong>ligne</strong> est un <em>n</em>-uplet (enregistrement) ;</li><li>une <strong>colonne</strong> = un <strong>attribut</strong>, de <strong>domaine</strong> (type) fixé ;</li><li>le <strong>schéma</strong> d'une relation est la donnée de son nom et de ses attributs typés, ex. $\\text{Eleve}(\\underline{\\text{id}}, \\text{nom}, \\text{classe})$.</li></ul>L'ordre des lignes n'a pas de sens ; deux lignes d'une même relation sont en principe distinctes.` },
        { type:'def', label:'DEF', titre:'Clé primaire',
          contenu:`Une <strong>clé primaire</strong> (<em>primary key</em>) est un attribut (ou un groupe d'attributs) qui <strong>identifie de façon unique</strong> chaque ligne d'une table. Elle vérifie :<br><ul><li><strong>unicité</strong> : deux lignes ne peuvent partager la même valeur de clé ;</li><li><strong>non-nullité</strong> : la valeur ne peut être <code>NULL</code>.</li></ul>Par convention on la souligne dans le schéma. Ex. <code>id</code> dans $\\text{Eleve}(\\underline{\\text{id}}, \\dots)$.` },
        { type:'def', label:'DEF', titre:'Clé étrangère',
          contenu:`Une <strong>clé étrangère</strong> (<em>foreign key</em>) est un attribut d'une table qui <strong>référence la clé primaire</strong> d'une autre table (ou de la même). Elle matérialise un <strong>lien</strong> entre tables et impose une <strong>intégrité référentielle</strong> : toute valeur de la clé étrangère doit exister dans la table référencée (ou être <code>NULL</code>).<br>Ex. dans $\\text{Note}(\\underline{\\text{id}}, \\text{eleve\\_id}, \\text{valeur})$, l'attribut <code>eleve_id</code> référence <code>Eleve.id</code>.` },
      ]
    },

    {
      titre: 'Contraintes d\'intégrité',
      cartes: [
        { type:'def', label:'DEF', titre:'Contraintes d\'intégrité',
          contenu:`Les <strong>contraintes d'intégrité</strong> garantissent la cohérence des données. On distingue :<br><ul><li><strong>de domaine</strong> : type et valeurs admissibles d'un attribut (ex. <code>note BETWEEN 0 AND 20</code>) ;</li><li><strong>de clé (entité)</strong> : unicité et non-nullité de la clé primaire ;</li><li><strong>référentielle</strong> : une clé étrangère pointe vers une ligne existante ;</li><li><strong>utilisateur</strong> : <code>NOT NULL</code>, <code>UNIQUE</code>, <code>CHECK</code>, valeurs par défaut.</li></ul>Le SGBD <strong>rejette</strong> toute opération violant une contrainte.` },
        { type:'prop', label:'PROP', titre:'Intégrité référentielle et suppressions',
          contenu:`L'intégrité référentielle contraint les suppressions et mises à jour : on ne peut supprimer une ligne référencée par une clé étrangère sans gérer les références pendantes. Politiques usuelles déclarées avec la clé étrangère :<br><ul><li><code>ON DELETE RESTRICT</code> : interdit la suppression ;</li><li><code>ON DELETE CASCADE</code> : supprime aussi les lignes référençantes ;</li><li><code>ON DELETE SET NULL</code> : met la clé étrangère à <code>NULL</code>.</li></ul>` },
        { type:'def', label:'DEF', titre:'La valeur NULL',
          contenu:`<code>NULL</code> représente une <strong>absence de valeur</strong> (inconnue ou inapplicable) — ce n'est ni $0$ ni la chaîne vide. Conséquences :<br><ul><li>les comparaisons avec <code>NULL</code> renvoient <strong>inconnu</strong> (logique ternaire) ;</li><li>on teste avec <code>IS NULL</code> / <code>IS NOT NULL</code>, jamais <code>= NULL</code> ;</li><li>les fonctions d'agrégation (sauf <code>COUNT(*)</code>) <strong>ignorent</strong> les <code>NULL</code>.</li></ul>` },
      ]
    },

    {
      titre: 'Algèbre relationnelle',
      cartes: [
        { type:'def', label:'DEF', titre:'Sélection et projection',
          contenu:`L'<strong>algèbre relationnelle</strong> est le langage théorique des requêtes ; ses opérations prennent des relations et renvoient une relation.<br><ul><li><strong>Sélection</strong> $\\sigma_{\\varphi}(R)$ : garde les lignes de $R$ vérifiant le prédicat $\\varphi$ (filtre sur les lignes) ;</li><li><strong>Projection</strong> $\\pi_{A_1, \\dots, A_k}(R)$ : ne garde que les attributs $A_1, \\dots, A_k$ (filtre sur les colonnes), en éliminant les doublons.</li></ul>Ex. $\\pi_{\\text{nom}}\\big(\\sigma_{\\text{classe} = \\text{'MP'}}(\\text{Eleve})\\big)$ : noms des élèves de MP.` },
        { type:'def', label:'DEF', titre:'Jointure',
          contenu:`La <strong>jointure</strong> $R \\bowtie_{\\varphi} S$ combine les lignes de $R$ et $S$ qui vérifient le prédicat $\\varphi$ : c'est une sélection appliquée au produit cartésien $R \\times S$.<br>La <strong>jointure naturelle</strong> apparie les lignes sur l'égalité des attributs de même nom. C'est l'opération qui <strong>recroise</strong> l'information répartie dans plusieurs tables via clés primaires / étrangères.<br>Ex. $\\text{Eleve} \\bowtie_{\\text{Eleve.id} = \\text{Note.eleve\\_id}} \\text{Note}$.` },
        { type:'prop', label:'PROP', titre:'Opérations ensemblistes et renommage',
          contenu:`L'algèbre relationnelle comporte aussi :<br><ul><li><strong>union</strong> $R \\cup S$, <strong>intersection</strong> $R \\cap S$, <strong>différence</strong> $R \\setminus S$ — exigent des schémas <strong>compatibles</strong> (mêmes attributs) ;</li><li><strong>produit cartésien</strong> $R \\times S$ : toutes les paires de lignes ;</li><li><strong>renommage</strong> $\\rho$ : change le nom d'un attribut ou d'une relation.</li></ul>Toute requête SQL « pure » se traduit en une expression de l'algèbre relationnelle.` },
      ]
    },

    {
      titre: 'SQL : interrogation de base',
      cartes: [
        { type:'meth', label:'METH', titre:'Le squelette SELECT … FROM … WHERE',
          contenu:`La requête de base sélectionne des colonnes, depuis une table, en filtrant les lignes :<br><pre><code>SELECT nom, classe
FROM Eleve
WHERE classe = 'MP';</code></pre>Correspondance avec l'algèbre : <code>SELECT</code> = projection $\\pi$, <code>FROM</code> = relation, <code>WHERE</code> = sélection $\\sigma$. <code>SELECT *</code> garde toutes les colonnes ; <code>SELECT DISTINCT</code> élimine les doublons.` },
        { type:'meth', label:'METH', titre:'Filtres, tri et limitation',
          contenu:`La clause <code>WHERE</code> combine des prédicats :<br><pre><code>SELECT nom, moyenne
FROM Eleve
WHERE moyenne >= 12 AND classe IN ('MP','PC')
ORDER BY moyenne DESC
LIMIT 10;</code></pre>Opérateurs utiles : <code>AND</code>, <code>OR</code>, <code>NOT</code>, <code>BETWEEN</code>, <code>IN</code>, <code>LIKE</code> (motifs avec <code>%</code> et <code>_</code>), <code>IS NULL</code>. <code>ORDER BY</code> trie (<code>ASC</code> par défaut), <code>LIMIT</code> borne le nombre de lignes.` },
        { type:'meth', label:'METH', titre:'Jointures en SQL',
          contenu:`On recroise deux tables avec <code>JOIN … ON</code> :<br><pre><code>SELECT Eleve.nom, Note.valeur
FROM Eleve
JOIN Note ON Note.eleve_id = Eleve.id
WHERE Note.valeur >= 15;</code></pre>Variantes : <code>INNER JOIN</code> (par défaut : lignes appariées des deux côtés), <code>LEFT JOIN</code> (toutes les lignes de gauche, complétées par <code>NULL</code> à droite). On peut renommer les tables par des alias : <code>FROM Eleve e JOIN Note n ON n.eleve_id = e.id</code>.` },
      ]
    },

    {
      titre: 'SQL : agrégation et regroupement',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonctions d\'agrégation',
          contenu:`Une <strong>fonction d'agrégation</strong> condense un ensemble de lignes en une valeur :<br><ul><li><code>COUNT(*)</code> : nombre de lignes ; <code>COUNT(col)</code> : nombre de valeurs non <code>NULL</code> ;</li><li><code>SUM(col)</code>, <code>AVG(col)</code> : somme, moyenne ;</li><li><code>MIN(col)</code>, <code>MAX(col)</code> : extrema.</li></ul>Sans <code>GROUP BY</code>, l'agrégat porte sur toute la table. Les <code>NULL</code> sont ignorés (sauf <code>COUNT(*)</code>).` },
        { type:'meth', label:'METH', titre:'GROUP BY et HAVING',
          contenu:`<code>GROUP BY</code> partitionne les lignes en groupes ; l'agrégat est calculé <strong>par groupe</strong>. <code>HAVING</code> filtre les <strong>groupes</strong> (après agrégation), là où <code>WHERE</code> filtre les <strong>lignes</strong> (avant) :<br><pre><code>SELECT classe, AVG(moyenne) AS moy
FROM Eleve
WHERE moyenne IS NOT NULL
GROUP BY classe
HAVING COUNT(*) >= 5
ORDER BY moy DESC;</code></pre>Moyenne par classe, restreinte aux classes d'au moins $5$ élèves.` },
        { type:'prop', label:'PROP', titre:'Ordre d\'évaluation logique d\'une requête',
          contenu:`Bien que l'on <strong>écrive</strong> <code>SELECT</code> en premier, le SGBD <strong>évalue</strong> dans cet ordre :<br>$$\\text{FROM} \\to \\text{WHERE} \\to \\text{GROUP BY} \\to \\text{HAVING} \\to \\text{SELECT} \\to \\text{ORDER BY} \\to \\text{LIMIT}.$$<br>Conséquences exigibles : un alias défini dans <code>SELECT</code> n'est pas disponible dans <code>WHERE</code> ; <code>WHERE</code> ne peut pas contenir d'agrégat (utiliser <code>HAVING</code>) ; les colonnes du <code>SELECT</code> doivent figurer dans le <code>GROUP BY</code> ou être agrégées.` },
        { type:'ex', label:'EX', titre:'Requête complète corrigée',
          contenu:`Énoncé : « nombre de notes $\\ge 10$ par classe, pour les classes en ayant plus de $3$, triées par effectif décroissant ».<br><pre><code>SELECT e.classe, COUNT(*) AS nb
FROM Eleve e
JOIN Note n ON n.eleve_id = e.id
WHERE n.valeur >= 10
GROUP BY e.classe
HAVING COUNT(*) > 3
ORDER BY nb DESC;</code></pre>On note l'enchaînement : jointure, filtrage des lignes (<code>WHERE</code>), regroupement, filtrage des groupes (<code>HAVING</code>), tri.` },
      ]
    },

    {
      titre: 'Conception et normalisation',
      cartes: [
        { type:'def', label:'DEF', titre:'Redondance et anomalies',
          contenu:`Une mauvaise conception <strong>duplique</strong> l'information, d'où des <strong>anomalies</strong> :<br><ul><li>d'<strong>insertion</strong> : impossible d'ajouter un fait sans un autre ;</li><li>de <strong>mise à jour</strong> : une donnée répétée doit être modifiée partout (risque d'incohérence) ;</li><li>de <strong>suppression</strong> : effacer une ligne fait perdre une information non liée.</li></ul>La <strong>normalisation</strong> décompose les tables pour éliminer ces redondances, au prix de jointures à la lecture.` },
        { type:'def', label:'DEF', titre:'Dépendance fonctionnelle',
          contenu:`Une <strong>dépendance fonctionnelle</strong> $X \\to Y$ signifie : la valeur de l'ensemble d'attributs $X$ <strong>détermine</strong> celle de $Y$ (deux lignes ayant même $X$ ont même $Y$). Ex. $\\text{id} \\to \\text{nom}$.<br>Les dépendances fonctionnelles formalisent les contraintes métier et guident la décomposition en formes normales : on cherche à ce que tout attribut dépende de la <strong>clé, de toute la clé, et de rien que la clé</strong>.` },
        { type:'prop', label:'PROP', titre:'Formes normales (notions)',
          contenu:`Hiérarchie usuelle :<br><ul><li><strong>1FN</strong> : tout attribut est <strong>atomique</strong> (pas de liste ni de groupe répétitif dans une cellule) ;</li><li><strong>2FN</strong> : 1FN et aucun attribut non-clé ne dépend d'une <strong>partie</strong> seulement de la clé ;</li><li><strong>3FN</strong> : 2FN et aucune dépendance <strong>transitive</strong> d'un attribut non-clé vers la clé (un non-clé ne détermine pas un autre non-clé).</li></ul>Objectif pratique : atteindre la 3FN pour limiter la redondance tout en gardant un schéma exploitable.` },
        { type:'ex', label:'EX', titre:'Décomposition en deux tables',
          contenu:`Table non normalisée $\\text{Inscription}(\\underline{\\text{eleve\\_id}}, \\text{nom}, \\text{classe}, \\text{prof\\_classe})$ : le nom du professeur est répété pour chaque élève d'une même classe (dépendance transitive $\\text{classe} \\to \\text{prof\\_classe}$).<br><strong>Décomposition (3FN)</strong> :<br>$\\text{Eleve}(\\underline{\\text{id}}, \\text{nom}, \\text{classe})$ et $\\text{Classe}(\\underline{\\text{classe}}, \\text{prof\\_classe})$, reliées par la clé étrangère <code>classe</code>. La redondance disparaît ; on retrouve le professeur d'un élève par jointure.` },
      ]
    },

  ]
}

];
