// CPGE — Informatique pour tous & option info · Algorithmique, complexité, graphes, IA
// Programme officiel CPGE scientifiques (2021/2022)
// matiere: 'info' · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. BASES ALGORITHMIQUES ET COMPLEXITÉ   (id: info-s1)
// ══════════════════════════════════════════════════════════════
{
  id: 'info-s1', matiere: 'info',
  titre: 'Bases algorithmiques et complexité', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Algorithme, terminaison et correction',
      cartes: [
        { type:'def', label:'DEF', titre:'Algorithme',
          contenu:`Un <strong>algorithme</strong> est une suite finie et non ambiguë d'instructions permettant, à partir de données d'<strong>entrée</strong>, de produire un résultat de <strong>sortie</strong> en un nombre fini d'étapes.<br>On en attend trois propriétés :<br><ul><li><strong>finitude</strong> : il se termine après un nombre fini d'opérations ;</li><li><strong>déterminisme</strong> : à entrée fixée, l'exécution est reproductible ;</li><li><strong>généralité</strong> : il traite toute une classe d'instances.</li></ul>Démontrer un algorithme, c'est établir sa <strong>terminaison</strong> et sa <strong>correction</strong>.` },
        { type:'def', label:'DEF', titre:'Variant de boucle (terminaison)',
          contenu:`Un <strong>variant</strong> d'une boucle est une quantité entière $v$, dépendant de l'état des variables, telle que :<br><ul><li>$v \\in \\mathbb{N}$ (minorée) à chaque entrée dans le corps ;</li><li>$v$ <strong>décroît strictement</strong> à chaque itération.</li></ul>Une suite d'entiers naturels strictement décroissante étant finie, l'existence d'un variant <strong>garantit la terminaison</strong> de la boucle.<br><em>Exemple</em> : pour <code>while i &lt; n</code>, le variant $n - i$ décroît si $i$ croît strictement.` },
        { type:'def', label:'DEF', titre:'Invariant de boucle (correction)',
          contenu:`Un <strong>invariant</strong> d'une boucle est une propriété $P$ portant sur les variables, telle que :<br><ul><li><strong>initialisation</strong> : $P$ est vraie avant la première itération ;</li><li><strong>conservation</strong> : si $P$ est vraie avant une itération, elle l'est après ;</li><li><strong>terminaison</strong> : à la sortie, $P$ combinée à la condition d'arrêt entraîne le résultat voulu.</li></ul>C'est une <strong>récurrence</strong> sur le nombre d'itérations : l'invariant fournit la <strong>correction partielle</strong>, le variant la terminaison ; ensemble ils donnent la <strong>correction totale</strong>.` },
        { type:'ex', label:'EX', titre:'Correction de la somme des $n$ premiers entiers',
          contenu:`<code>s = 0</code><br><code>for k in range(1, n+1):</code><br>&nbsp;&nbsp;<code>s = s + k</code><br><strong>Invariant</strong> $P_k$ : « après traitement de $k$, on a $s = \\sum_{j=1}^{k} j = \\frac{k(k+1)}{2}$ ».<br><strong>Init</strong> : avant la boucle $s=0=\\frac{0\\cdot 1}{2}$. <strong>Hérédité</strong> : si $s=\\frac{k(k+1)}{2}$, après <code>s += k+1</code> on a $\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2}$. <strong>Sortie</strong> : pour $k=n$, $s=\\frac{n(n+1)}{2}$. L'algorithme est correct.` },
      ]
    },

    {
      titre: 'Notations de Landau',
      cartes: [
        { type:'def', label:'DEF', titre:'Domination : grand $O$',
          contenu:`Soient $f, g : \\mathbb{N} \\to \\mathbb{R}_+$. On dit que $f = O(g)$ (<strong>$f$ est dominée par $g$</strong>) s'il existe une constante $C > 0$ et un rang $n_0$ tels que :<br>$$\\forall n \\geq n_0,\\quad f(n) \\leq C\\, g(n).$$<br>$O(g)$ majore le coût : c'est la borne utilisée pour annoncer la complexité « au pire » d'un algorithme. On écrit par abus $f = O(g)$ pour $f \\in O(g)$.` },
        { type:'def', label:'DEF', titre:'Ordre exact : $\\Theta$ (et $\\Omega$)',
          contenu:`<ul><li>$f = \\Omega(g)$ : il existe $c>0$, $n_0$ tels que $\\forall n \\geq n_0,\\ f(n) \\geq c\\, g(n)$ (<strong>minoration</strong>).</li><li>$f = \\Theta(g)$ : $f = O(g)$ <strong>et</strong> $f = \\Omega(g)$, soit $\\exists\\, c, C > 0,\\ n_0,\\ \\forall n \\geq n_0,\\ c\\,g(n) \\leq f(n) \\leq C\\,g(n)$.</li></ul>$\\Theta$ donne l'<strong>ordre de grandeur exact</strong>. Dire qu'un tri est en $\\Theta(n^2)$ affirme que ce coût est à la fois un majorant et un minorant à constante près.` },
        { type:'prop', label:'PROP', titre:'Règles de calcul asymptotique',
          contenu:`Pour des fonctions positives :<br><ul><li><strong>somme</strong> : $O(f) + O(g) = O(\\max(f,g))$ ;</li><li><strong>produit</strong> : $O(f) \\cdot O(g) = O(f g)$ ;</li><li><strong>constante</strong> : $O(\\lambda f) = O(f)$ pour $\\lambda > 0$ ;</li><li><strong>transitivité</strong> : $f=O(g)$ et $g=O(h) \\Rightarrow f=O(h)$.</li></ul>On <strong>néglige les termes d'ordre inférieur</strong> et les constantes : $3n^2 + 5n + 7 = O(n^2) = \\Theta(n^2)$.` },
        { type:'form', label:'FORM', titre:'Hiérarchie des complexités usuelles',
          contenu:`Par ordre de croissance strictement croissant (pour $n \\to +\\infty$) :<br>$$O(1) \\subset O(\\log n) \\subset O(\\sqrt{n}) \\subset O(n) \\subset O(n\\log n) \\subset O(n^2) \\subset O(n^3) \\subset O(2^n) \\subset O(n!).$$<br>Vocabulaire : <strong>constant, logarithmique, linéaire, quasi-linéaire, quadratique, cubique, exponentiel, factoriel</strong>. Un algorithme exponentiel devient impraticable dès $n \\approx 50$.` },
      ]
    },

    {
      titre: 'Coût d\'un algorithme : pire et meilleur cas',
      cartes: [
        { type:'def', label:'DEF', titre:'Complexité temporelle et spatiale',
          contenu:`La <strong>complexité temporelle</strong> compte le nombre d'<strong>opérations élémentaires</strong> (comparaisons, affectations, opérations arithmétiques) en fonction de la taille $n$ de l'entrée.<br>La <strong>complexité spatiale</strong> compte la <strong>mémoire</strong> auxiliaire utilisée, hors entrée. Un algorithme est dit <strong>en place</strong> si sa complexité spatiale auxiliaire est $O(1)$.<br>On choisit une opération <em>fondamentale</em> représentative (souvent la comparaison pour les tris).` },
        { type:'def', label:'DEF', titre:'Pire cas, meilleur cas, cas moyen',
          contenu:`Pour une taille $n$ fixée, le coût dépend de l'instance. On note :<br><ul><li>$C_{\\max}(n) = \\max$ du coût sur les entrées de taille $n$ : <strong>pire cas</strong> ;</li><li>$C_{\\min}(n) = \\min$ du coût : <strong>meilleur cas</strong> ;</li><li>$C_{\\text{moy}}(n) = \\mathbb{E}[\\text{coût}]$ sous une loi sur les entrées : <strong>cas moyen</strong>.</li></ul>La <strong>garantie</strong> donnée par un algorithme est son pire cas ; c'est la complexité annoncée par défaut.` },
        { type:'meth', label:'METH', titre:'Calculer la complexité d\'une boucle',
          contenu:`<strong>Méthode</strong> :<br><ul><li>une boucle <code>for</code> de $1$ à $n$ à corps en $O(1)$ coûte $\\Theta(n)$ ;</li><li>deux boucles imbriquées indépendantes : $\\Theta(n^2)$ ;</li><li>boucle interne dépendante $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} = \\Theta(n^2)$ ;</li><li>une grandeur divisée par $2$ à chaque tour : $\\Theta(\\log n)$.</li></ul>On somme les coûts des blocs successifs et on garde le terme dominant.` },
        { type:'ex', label:'EX', titre:'Recherche séquentielle',
          contenu:`Rechercher $x$ dans un tableau <code>t</code> de taille $n$ : on parcourt jusqu'à trouver.<br><strong>Meilleur cas</strong> : $x$ en première position, $\\Theta(1)$.<br><strong>Pire cas</strong> : $x$ absent ou en dernière position, $\\Theta(n)$ comparaisons.<br><strong>Cas moyen</strong> (présence équiprobable) : $\\frac{1}{n}\\sum_{k=1}^n k = \\frac{n+1}{2} = \\Theta(n)$. La recherche séquentielle est donc <strong>linéaire</strong>.` },
      ]
    },

    {
      titre: 'Algorithmes de tri',
      cartes: [
        { type:'meth', label:'METH', titre:'Tri par insertion',
          contenu:`On construit un préfixe trié : à l'étape $i$, on insère <code>t[i]</code> à sa place dans <code>t[0..i-1]</code> déjà trié.<br><code>for i in range(1, n):</code><br>&nbsp;&nbsp;<code>x = t[i]; j = i-1</code><br>&nbsp;&nbsp;<code>while j &gt;= 0 and t[j] &gt; x:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>t[j+1] = t[j]; j -= 1</code><br>&nbsp;&nbsp;<code>t[j+1] = x</code><br><strong>Coût</strong> : $\\Theta(n)$ au meilleur cas (déjà trié), $\\Theta(n^2)$ au pire. <strong>En place</strong>, <strong>stable</strong>. Excellent sur petites entrées ou tableaux presque triés.` },
        { type:'meth', label:'METH', titre:'Tri fusion (merge sort)',
          contenu:`Paradigme <strong>diviser pour régner</strong> : on coupe le tableau en deux moitiés, on les trie récursivement, puis on <strong>fusionne</strong> les deux moitiés triées en temps linéaire.<br>La fusion compare les têtes des deux sous-tableaux et recopie le plus petit.<br><strong>Récurrence</strong> : $T(n) = 2\\,T(n/2) + \\Theta(n)$, d'où $T(n) = \\Theta(n \\log n)$ dans <strong>tous les cas</strong>. <strong>Stable</strong>, mais nécessite $\\Theta(n)$ d'espace auxiliaire (non en place).` },
        { type:'meth', label:'METH', titre:'Tri rapide (quicksort)',
          contenu:`On choisit un <strong>pivot</strong>, on <strong>partitionne</strong> le tableau en éléments $\\leq$ pivot et $>$ pivot, puis on trie récursivement chaque partie.<br><strong>Récurrence</strong> moyenne $T(n) = 2\\,T(n/2) + \\Theta(n) \\Rightarrow \\Theta(n\\log n)$ <strong>en moyenne</strong>.<br><strong>Pire cas</strong> $\\Theta(n^2)$ (pivot toujours extrémal, tableau déjà trié). <strong>En place</strong>, très rapide en pratique grâce à de faibles constantes ; non stable.` },
        { type:'prop', label:'PROP', titre:'Borne inférieure des tris par comparaison',
          contenu:`Tout tri fondé uniquement sur des <strong>comparaisons</strong> d'éléments effectue, au pire cas, au moins $\\Theta(n \\log n)$ comparaisons.<br><strong>Preuve</strong> : l'arbre de décision a $n!$ feuilles (les permutations possibles) ; un arbre binaire de hauteur $h$ a au plus $2^h$ feuilles, donc $2^h \\geq n! \\Rightarrow h \\geq \\log_2(n!) = \\Theta(n\\log n)$ (Stirling). Le tri fusion atteint cette borne : il est <strong>optimal</strong>.` },
        { type:'ex', label:'EX', titre:'Tableau comparatif des tris',
          contenu:`<ul><li><strong>Insertion</strong> : pire $\\Theta(n^2)$, meilleur $\\Theta(n)$, en place, stable.</li><li><strong>Fusion</strong> : $\\Theta(n\\log n)$ partout, $O(n)$ d'espace, stable.</li><li><strong>Rapide</strong> : moyen $\\Theta(n\\log n)$, pire $\\Theta(n^2)$, en place, non stable.</li></ul>Pour de gros volumes avec garantie, on préfère le <strong>tri fusion</strong> ; pour la vitesse pratique en place, le <strong>tri rapide</strong>.` },
      ]
    },

    {
      titre: 'Recherche dichotomique',
      cartes: [
        { type:'th', label:'THM', titre:'Recherche dichotomique dans un tableau trié',
          contenu:`Soit <code>t</code> un tableau <strong>trié par ordre croissant</strong>. La recherche d'une valeur $x$ par <strong>dichotomie</strong> compare $x$ à l'élément médian et restreint la recherche à la moitié pertinente.<br>Le nombre de comparaisons est en $\\Theta(\\log_2 n)$ au pire cas : à chaque étape la zone de recherche est <strong>divisée par deux</strong>.<br><strong>Hypothèse indispensable</strong> : le tableau doit être trié.` },
        { type:'meth', label:'METH', titre:'Implémentation itérative',
          contenu:`<code>def recherche(t, x):</code><br>&nbsp;&nbsp;<code>g, d = 0, len(t)-1</code><br>&nbsp;&nbsp;<code>while g &lt;= d:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = (g + d) // 2</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[m] == x: return m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>elif t[m] &lt; x: g = m + 1</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else: d = m - 1</code><br>&nbsp;&nbsp;<code>return -1</code>` },
        { type:'prop', label:'PROP', titre:'Terminaison et correction par invariant',
          contenu:`<strong>Variant</strong> : la largeur $d - g + 1$ de l'intervalle est un entier qui <strong>décroît strictement</strong> à chaque tour, donc la boucle termine.<br><strong>Invariant</strong> : « si $x$ figure dans <code>t</code>, alors son indice est dans $[g, d]$ ». Conservé car on n'élimine qu'une moitié ne pouvant contenir $x$ (tableau trié). À la sortie avec $g > d$, l'intervalle est vide : $x$ est absent.` },
        { type:'ex', label:'EX', titre:'Nombre d\'étapes',
          contenu:`Pour $n = 10^6$ éléments, la dichotomie effectue au plus $\\lceil \\log_2(10^6) \\rceil = 20$ comparaisons, contre $10^6$ pour la recherche séquentielle au pire cas.<br><strong>Application</strong> : recherche d'une racine par dichotomie sur une fonction continue monotone — même principe de réduction d'intervalle, convergence en $\\log_2\\!\\big(\\frac{b-a}{\\varepsilon}\\big)$ étapes pour une précision $\\varepsilon$.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 2. COMPLEXITÉ ET CLASSES FORMELLES   (id: info-complexite)
// ══════════════════════════════════════════════════════════════
{
  id: 'info-complexite', matiere: 'info',
  titre: 'Complexité et classes formelles', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Récurrences et théorème maître',
      cartes: [
        { type:'def', label:'DEF', titre:'Récurrence de partition (diviser pour régner)',
          contenu:`La complexité d'un algorithme <strong>diviser pour régner</strong> qui découpe un problème de taille $n$ en $a$ sous-problèmes de taille $n/b$, avec un coût de découpe/recombinaison $f(n)$, vérifie :<br>$$T(n) = a\\, T\\!\\left(\\frac{n}{b}\\right) + f(n), \\qquad a \\geq 1,\\ b > 1.$$<br>Résoudre cette récurrence donne l'ordre de grandeur de $T(n)$.` },
        { type:'th', label:'THM', titre:'Théorème maître (master theorem)',
          contenu:`Pour $T(n) = a\\,T(n/b) + f(n)$, on pose l'exposant critique $\\alpha = \\log_b a$. Alors :<br><ul><li>si $f(n) = O(n^{\\alpha - \\varepsilon})$ pour un $\\varepsilon > 0$ : $T(n) = \\Theta(n^{\\alpha})$ ;</li><li>si $f(n) = \\Theta(n^{\\alpha})$ : $T(n) = \\Theta(n^{\\alpha} \\log n)$ ;</li><li>si $f(n) = \\Omega(n^{\\alpha + \\varepsilon})$ (et condition de régularité) : $T(n) = \\Theta(f(n))$.</li></ul>Le terme dominant l'emporte ; en cas d'égalité un facteur $\\log n$ apparaît.` },
        { type:'ex', label:'EX', titre:'Applications du théorème maître',
          contenu:`<ul><li><strong>Tri fusion</strong> : $T(n)=2T(n/2)+\\Theta(n)$, $\\alpha=\\log_2 2 = 1$, cas d'égalité $\\Rightarrow \\Theta(n\\log n)$.</li><li><strong>Dichotomie</strong> : $T(n)=T(n/2)+\\Theta(1)$, $\\alpha=0$, égalité $\\Rightarrow \\Theta(\\log n)$.</li><li><strong>Karatsuba</strong> : $T(n)=3T(n/2)+\\Theta(n)$, $\\alpha=\\log_2 3 \\approx 1{,}585 > 1 \\Rightarrow \\Theta(n^{\\log_2 3})$.</li></ul>` },
        { type:'meth', label:'METH', titre:'Récurrence par soustraction',
          contenu:`Pour une récurrence du type $T(n) = T(n-1) + f(n)$ (réduction <strong>additive</strong>, non multiplicative), on <strong>déroule</strong> :<br>$$T(n) = T(0) + \\sum_{k=1}^{n} f(k).$$<br>Ainsi $T(n)=T(n-1)+\\Theta(1) \\Rightarrow \\Theta(n)$, et $T(n)=T(n-1)+\\Theta(n) \\Rightarrow \\Theta(n^2)$. Cette technique s'applique typiquement à une récursivité simple (factorielle, parcours linéaire récursif).` },
        { type:'meth', label:'METH', titre:'Résolution par déroulement (télescopage)',
          contenu:`Pour résoudre une récurrence sans le théorème maître, on <strong>déroule</strong> les premiers termes pour <strong>conjecturer</strong> une forme close, puis on la <strong>prouve par récurrence</strong>.<br><em>Exemple</em> : $T(n) = 2T(n/2) + n$ donne, en posant $n = 2^k$, $T(2^k) = 2^k T(1) + k\\,2^k$, soit $T(n) = n\\,T(1) + n\\log_2 n = \\Theta(n\\log n)$. Le déroulement reste l'outil de secours quand les hypothèses du théorème maître ne sont pas réunies.` },
      ]
    },

    {
      titre: 'Problèmes de décision et langages',
      cartes: [
        { type:'def', label:'DEF', titre:'Problème de décision',
          contenu:`Un <strong>problème de décision</strong> est un problème dont la réponse est <strong>oui</strong> ou <strong>non</strong>. À toute instance (codée comme un mot) il associe une réponse booléenne.<br><em>Exemples</em> : « le graphe $G$ est-il connexe ? », « l'entier $n$ est-il premier ? », « la formule $\\varphi$ est-elle satisfiable ? ».<br>On lui associe le <strong>langage</strong> des instances positives ; <em>résoudre</em> le problème, c'est <em>décider</em> ce langage.` },
        { type:'def', label:'DEF', titre:'Problème d\'optimisation vs décision',
          contenu:`Un <strong>problème d'optimisation</strong> cherche une solution de coût extrémal (minimal ou maximal). On lui associe une <strong>version décision</strong> en ajoutant un seuil $k$ : « existe-t-il une solution de coût $\\leq k$ (resp. $\\geq k$) ? ».<br><em>Exemple</em> : optimisation « plus courte tournée du voyageur » $\\leadsto$ décision « existe-t-il une tournée de longueur $\\leq k$ ? ». Les classes de complexité se définissent sur les problèmes de décision.` },
        { type:'prop', label:'PROP', titre:'Taille de l\'entrée et codage',
          contenu:`La complexité se mesure en fonction de la <strong>taille du codage</strong> de l'entrée (nombre de bits), pas de la valeur.<br>Coder un entier $N$ demande $\\Theta(\\log N)$ bits. Un algorithme en $\\Theta(N)$ est donc <strong>exponentiel</strong> en la taille $n = \\log N$ : c'est la <strong>complexité pseudo-polynomiale</strong> (cas du sac à dos). La distinction est essentielle pour classer un problème.` },
      ]
    },

    {
      titre: 'Classes P et NP',
      cartes: [
        { type:'def', label:'DEF', titre:'Classe P',
          contenu:`La classe <strong>P</strong> (temps <strong>polynomial</strong>) est l'ensemble des problèmes de décision pour lesquels il existe un algorithme déterministe les résolvant en temps $O(n^k)$ pour un certain $k$ fixé, $n$ étant la taille de l'entrée.<br>P est la classe des problèmes considérés comme <strong>efficacement résolubles</strong>.<br><em>Exemples</em> : tri, plus court chemin, primalité (AKS, 2002), connexité d'un graphe.` },
        { type:'def', label:'DEF', titre:'Classe NP',
          contenu:`La classe <strong>NP</strong> (<em>Non-deterministic Polynomial</em>) est l'ensemble des problèmes de décision pour lesquels une réponse <strong>« oui »</strong> admet un <strong>certificat</strong> (une preuve) <strong>vérifiable en temps polynomial</strong>.<br>Autrement dit : si une solution est donnée, on peut <strong>vérifier</strong> sa validité rapidement, même si la <strong>trouver</strong> semble difficile.<br><em>Exemple</em> : pour SAT, une assignation des variables est un certificat vérifiable en temps linéaire.` },
        { type:'prop', label:'PROP', titre:'Inclusion P ⊂ NP et la question P = NP',
          contenu:`On a <strong>$\\mathrm{P} \\subseteq \\mathrm{NP}$</strong> : un problème résoluble en temps polynomial est aussi vérifiable en temps polynomial (on recalcule la solution, ignorant le certificat).<br>La question <strong>$\\mathrm{P} = \\mathrm{NP}$ ?</strong> — vérifier rapidement implique-t-il résoudre rapidement ? — est l'un des <strong>problèmes du millénaire</strong>, ouvert. La plupart des spécialistes conjecturent $\\mathrm{P} \\neq \\mathrm{NP}$.` },
        { type:'ex', label:'EX', titre:'Vérification d\'un certificat pour le sac à dos',
          contenu:`<strong>Décision sac à dos</strong> : « existe-t-il un sous-ensemble d'objets de valeur totale $\\geq V$ et de poids $\\leq P$ ? »<br><strong>Certificat</strong> : la liste des objets choisis. <strong>Vérification</strong> : sommer poids et valeurs et comparer aux seuils, en $O(n)$. C'est polynomial $\\Rightarrow$ le problème est dans <strong>NP</strong>. Trouver ce sous-ensemble, en revanche, n'a pas d'algorithme polynomial connu.` },
        { type:'prop', label:'PROP', titre:'La classe co-NP',
          contenu:`La classe <strong>co-NP</strong> rassemble les problèmes dont une réponse <strong>« non »</strong> admet un certificat vérifiable en temps polynomial (les complémentaires des problèmes de NP).<br><em>Exemple</em> : « la formule $\\varphi$ est-elle une <strong>tautologie</strong> ? » est dans co-NP. On a $\\mathrm{P} \\subseteq \\mathrm{NP} \\cap \\mathrm{co\\text{-}NP}$, et la question $\\mathrm{NP} = \\mathrm{co\\text{-}NP}$ est elle aussi <strong>ouverte</strong>. Distinguer « certifier le oui » et « certifier le non » est un point de vigilance.` },
      ]
    },

    {
      titre: 'Réductions polynomiales',
      cartes: [
        { type:'def', label:'DEF', titre:'Réduction polynomiale',
          contenu:`Un problème $A$ se <strong>réduit polynomialement</strong> à un problème $B$, noté $A \\leq_p B$, s'il existe une fonction $\\varphi$ <strong>calculable en temps polynomial</strong> transformant toute instance $x$ de $A$ en une instance $\\varphi(x)$ de $B$ telle que :<br>$$x \\text{ est une instance positive de } A \\iff \\varphi(x) \\text{ l'est de } B.$$<br>Résoudre $B$ permet alors de résoudre $A$ : $B$ est « au moins aussi dur » que $A$.` },
        { type:'prop', label:'PROP', titre:'Propriétés de la réduction',
          contenu:`<ul><li><strong>Transitivité</strong> : $A \\leq_p B$ et $B \\leq_p C \\Rightarrow A \\leq_p C$.</li><li><strong>Transfert d'appartenance</strong> : si $A \\leq_p B$ et $B \\in \\mathrm{P}$, alors $A \\in \\mathrm{P}$.</li><li><strong>Transfert de difficulté</strong> : si $A$ est difficile, $B$ l'est aussi.</li></ul>La réduction <strong>compare</strong> la difficulté de deux problèmes et structure toute la théorie de la NP-complétude.` },
        { type:'meth', label:'METH', titre:'Prouver qu\'un problème est dans une classe',
          contenu:`<strong>Pour montrer $X \\in \\mathrm{NP}$</strong> : exhiber un certificat de taille polynomiale et un algorithme de vérification polynomial.<br><strong>Pour montrer $X$ NP-difficile</strong> : choisir un problème $Y$ déjà connu NP-complet et construire une réduction $Y \\leq_p X$.<br><strong>Pour la NP-complétude</strong> : combiner les deux ($X \\in \\mathrm{NP}$ <em>et</em> $X$ NP-difficile). L'orientation de la réduction est l'erreur classique à éviter.` },
      ]
    },

    {
      titre: 'NP-complétude (notions)',
      cartes: [
        { type:'def', label:'DEF', titre:'NP-difficile et NP-complet',
          contenu:`Un problème $X$ est :<br><ul><li><strong>NP-difficile</strong> si <em>tout</em> problème de NP se réduit polynomialement à $X$ : $\\forall A \\in \\mathrm{NP},\\ A \\leq_p X$ ;</li><li><strong>NP-complet</strong> s'il est NP-difficile <strong>et</strong> appartient lui-même à NP.</li></ul>Les problèmes NP-complets sont les <strong>plus durs</strong> de NP : ils sont tous équivalents entre eux par réduction.` },
        { type:'th', label:'THM', titre:'Théorème de Cook-Levin',
          contenu:`Le problème <strong>SAT</strong> (satisfiabilité d'une formule booléenne) est <strong>NP-complet</strong>.<br>C'est le <strong>premier</strong> problème prouvé NP-complet (Cook 1971, Levin indépendamment). Sa portée est fondamentale : il sert de <strong>point de départ</strong> à toutes les autres preuves de NP-complétude, par réduction depuis SAT (ou sa restriction <strong>3-SAT</strong>, elle aussi NP-complète).` },
        { type:'prop', label:'PROP', titre:'Conséquence pour P = NP',
          contenu:`Si <strong>un seul</strong> problème NP-complet admettait un algorithme polynomial, alors par réduction <strong>tous</strong> les problèmes de NP en admettraient un, et l'on aurait $\\mathrm{P} = \\mathrm{NP}$.<br>Inversement, si $\\mathrm{P} \\neq \\mathrm{NP}$, alors aucun problème NP-complet n'est dans P. Les problèmes NP-complets sont donc le <strong>cœur</strong> de la question ouverte.` },
        { type:'ex', label:'EX', titre:'Problèmes NP-complets classiques',
          contenu:`<ul><li><strong>SAT / 3-SAT</strong> : satisfiabilité d'une formule logique.</li><li><strong>Sac à dos</strong> (version décision) : <em>knapsack</em>.</li><li><strong>Voyageur de commerce</strong> (TSP, version décision) : tournée de longueur $\\leq k$.</li><li><strong>Coloration de graphe</strong> ($k$-coloration, $k \\geq 3$), <strong>clique</strong>, <strong>couverture par sommets</strong>, <strong>cycle hamiltonien</strong>.</li></ul>En pratique, on les attaque par heuristiques, approximation ou programmation dynamique pseudo-polynomiale.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 3. MÉTHODES DE PROGRAMMATION   (id: info-methprog)
// ══════════════════════════════════════════════════════════════
{
  id: 'info-methprog', matiere: 'info',
  titre: 'Méthodes de programmation', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Récursivité',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction récursive',
          contenu:`Une fonction est <strong>récursive</strong> si elle <strong>s'appelle elle-même</strong> sur une instance plus petite. Sa définition comporte :<br><ul><li>un ou plusieurs <strong>cas de base</strong> (arrêt direct, sans appel) ;</li><li>un ou plusieurs <strong>cas récursifs</strong> se ramenant à des sous-problèmes <strong>strictement plus petits</strong>.</li></ul>La <strong>terminaison</strong> repose sur la décroissance d'un variant vers un cas de base ; la <strong>correction</strong> se prouve par récurrence sur ce variant.` },
        { type:'def', label:'DEF', titre:'Récursivité simple, multiple, terminale',
          contenu:`<ul><li><strong>simple</strong> : au plus un appel récursif par exécution (factorielle) ;</li><li><strong>multiple</strong> : plusieurs appels (Fibonacci, parcours d'arbre) — l'arbre des appels se ramifie ;</li><li><strong>terminale</strong> (<em>tail recursion</em>) : l'appel récursif est la <strong>dernière</strong> opération, rien n'est calculé au retour. Elle peut être transformée mécaniquement en boucle.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Pile d\'appels et coût mémoire',
          contenu:`Chaque appel récursif empile un <strong>bloc d'activation</strong> (paramètres, variables locales, adresse de retour) sur la <strong>pile d'appels</strong>. La profondeur maximale de récursion fixe la <strong>complexité spatiale</strong>.<br>Une récursion de profondeur $n$ coûte $\\Theta(n)$ en mémoire de pile ; une récursion trop profonde provoque un <strong>débordement de pile</strong> (<em>stack overflow</em>). En Python la profondeur est limitée par défaut (~1000).` },
        { type:'ex', label:'EX', titre:'Factorielle et Fibonacci',
          contenu:`<code>def fact(n):</code> &nbsp; <code>return 1 if n == 0 else n * fact(n-1)</code> &nbsp; — récursivité <strong>simple</strong>, $\\Theta(n)$.<br><code>def fib(n):</code> &nbsp; <code>return n if n &lt; 2 else fib(n-1) + fib(n-2)</code> — récursivité <strong>multiple</strong>. Coût $\\Theta(\\varphi^{n})$ (exponentiel !) car les sous-problèmes sont <strong>recalculés</strong> : on a $T(n)=T(n-1)+T(n-2)+\\Theta(1)$. D'où l'intérêt de la mémoïsation.` },
      ]
    },

    {
      titre: 'Diviser pour régner',
      cartes: [
        { type:'def', label:'DEF', titre:'Paradigme diviser pour régner',
          contenu:`Le paradigme <strong>diviser pour régner</strong> (<em>divide and conquer</em>) résout un problème en trois temps :<br><ul><li><strong>diviser</strong> : découper l'instance en sous-instances <strong>indépendantes</strong> de taille moindre ;</li><li><strong>régner</strong> : résoudre récursivement chaque sous-instance ;</li><li><strong>combiner</strong> : fusionner les solutions partielles en une solution globale.</li></ul>La complexité suit une récurrence $T(n)=a\\,T(n/b)+f(n)$ résolue par le théorème maître.` },
        { type:'meth', label:'METH', titre:'Exponentiation rapide',
          contenu:`Calcul de $x^n$ en $\\Theta(\\log n)$ multiplications grâce à $x^n = (x^{n/2})^2$ si $n$ pair, $x \\cdot (x^{(n-1)/2})^2$ si $n$ impair.<br><code>def puissance(x, n):</code><br>&nbsp;&nbsp;<code>if n == 0: return 1</code><br>&nbsp;&nbsp;<code>y = puissance(x, n // 2)</code><br>&nbsp;&nbsp;<code>if n % 2 == 0: return y * y</code><br>&nbsp;&nbsp;<code>return x * y * y</code><br>$T(n)=T(n/2)+\\Theta(1)=\\Theta(\\log n)$ : exponentiel gain sur la méthode naïve linéaire.` },
        { type:'ex', label:'EX', titre:'Algorithmes diviser-pour-régner classiques',
          contenu:`<ul><li><strong>Tri fusion</strong> : $\\Theta(n\\log n)$.</li><li><strong>Recherche dichotomique</strong> : $\\Theta(\\log n)$.</li><li><strong>Exponentiation rapide</strong> : $\\Theta(\\log n)$.</li><li><strong>Karatsuba</strong> (multiplication d'entiers) : $\\Theta(n^{\\log_2 3})$, plus rapide que l'algorithme scolaire en $\\Theta(n^2)$.</li></ul>Condition de pertinence : la phase de <strong>combinaison</strong> doit rester peu coûteuse.` },
      ]
    },

    {
      titre: 'Programmation dynamique',
      cartes: [
        { type:'def', label:'DEF', titre:'Sous-structure optimale et chevauchement',
          contenu:`La <strong>programmation dynamique</strong> s'applique quand un problème possède :<br><ul><li>une <strong>sous-structure optimale</strong> : la solution optimale s'exprime à partir de solutions optimales de sous-problèmes ;</li><li>des <strong>sous-problèmes qui se chevauchent</strong> : les mêmes sous-instances réapparaissent de nombreuses fois.</li></ul>On <strong>calcule chaque sous-problème une seule fois</strong> et on stocke son résultat, évitant la ré-explosion exponentielle de la récursivité naïve.` },
        { type:'meth', label:'METH', titre:'Mémoïsation (top-down)',
          contenu:`La <strong>mémoïsation</strong> conserve l'algorithme récursif mais <strong>mémorise</strong> les résultats déjà calculés dans une table (dictionnaire), interrogée avant tout recalcul.<br><code>memo = {}</code><br><code>def fib(n):</code><br>&nbsp;&nbsp;<code>if n &lt; 2: return n</code><br>&nbsp;&nbsp;<code>if n not in memo:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>memo[n] = fib(n-1) + fib(n-2)</code><br>&nbsp;&nbsp;<code>return memo[n]</code><br>Coût ramené de $\\Theta(\\varphi^n)$ à $\\Theta(n)$. Approche <strong>descendante</strong> (à la demande).` },
        { type:'meth', label:'METH', titre:'Tabulation (bottom-up)',
          contenu:`La <strong>tabulation</strong> remplit <strong>itérativement</strong> un tableau des sous-problèmes, du plus petit au plus grand, sans récursion.<br><code>def fib(n):</code><br>&nbsp;&nbsp;<code>t = [0, 1] + [0]*(n-1)</code><br>&nbsp;&nbsp;<code>for k in range(2, n+1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>t[k] = t[k-1] + t[k-2]</code><br>&nbsp;&nbsp;<code>return t[n]</code><br>Approche <strong>ascendante</strong> : pas de pile d'appels, ordre de remplissage explicite. On peut souvent réduire l'espace en ne gardant que les dernières valeurs utiles.` },
        { type:'ex', label:'EX', titre:'Sac à dos par programmation dynamique',
          contenu:`Objets de poids $w_i$, valeur $v_i$, capacité $C$. On note $K(i, c)$ la valeur maximale avec les $i$ premiers objets et capacité $c$ :<br>$$K(i,c) = \\max\\big(\\, K(i-1,c),\\ \\ v_i + K(i-1,\\,c-w_i)\\,\\big) \\ \\text{ si } w_i \\leq c.$$<br>Table de taille $n \\times C$ remplie en $\\Theta(nC)$ : complexité <strong>pseudo-polynomiale</strong> (polynomiale en $C$, exponentielle en sa taille binaire).` },
      ]
    },

    {
      titre: 'Approche gloutonne',
      cartes: [
        { type:'def', label:'DEF', titre:'Algorithme glouton',
          contenu:`Un <strong>algorithme glouton</strong> (<em>greedy</em>) construit une solution <strong>par étapes</strong>, en faisant à chaque étape le choix qui paraît <strong>localement optimal</strong>, sans jamais revenir sur une décision passée.<br>Rapide et simple, il ne fournit la solution <strong>globalement optimale</strong> que pour certains problèmes possédant une structure particulière (matroïde, propriété d'échange). Sinon il donne une solution approchée.` },
        { type:'prop', label:'PROP', titre:'Glouton vs programmation dynamique',
          contenu:`Les deux exploitent une <strong>sous-structure optimale</strong>, mais :<br><ul><li>le <strong>glouton</strong> fait un choix local <strong>définitif</strong> avant de résoudre le sous-problème restant — pas d'exploration ;</li><li>la <strong>programmation dynamique</strong> <strong>essaie tous les choix</strong> et combine les optima.</li></ul>Le glouton est plus rapide mais n'est correct que si la <strong>propriété du choix glouton</strong> est démontrée. Il faut <strong>prouver</strong> l'optimalité, jamais la supposer.` },
        { type:'ex', label:'EX', titre:'Rendu de monnaie et problème du sac à dos fractionnaire',
          contenu:`<strong>Rendu de monnaie</strong> : rendre une somme avec le moins de pièces. Le glouton (prendre la plus grosse pièce possible) est <strong>optimal</strong> pour le système euro, mais <strong>échoue</strong> pour des systèmes quelconques (ex. pièces $1, 3, 4$ pour rendre $6$).<br><strong>Sac à dos fractionnaire</strong> (objets sécables) : le glouton par <strong>ratio $v_i/w_i$ décroissant</strong> est <strong>optimal</strong> — contrairement au sac à dos entier.` },
      ]
    },

    {
      titre: 'Retour sur trace (backtracking)',
      cartes: [
        { type:'def', label:'DEF', titre:'Backtracking',
          contenu:`Le <strong>retour sur trace</strong> explore systématiquement l'<strong>arbre des solutions partielles</strong> : on étend une solution candidat pas à pas, et dès qu'une extension viole une contrainte, on <strong>abandonne</strong> cette branche et on <strong>revient en arrière</strong> (<em>backtrack</em>) pour essayer une autre possibilité.<br>C'est une recherche en <strong>profondeur</strong> de l'espace d'états avec <strong>élagage</strong> des branches sans issue. Très utilisé pour les problèmes de satisfaction de contraintes.` },
        { type:'meth', label:'METH', titre:'Schéma générique récursif',
          contenu:`<code>def explorer(solution):</code><br>&nbsp;&nbsp;<code>if complete(solution): traiter(solution); return</code><br>&nbsp;&nbsp;<code>for choix in candidats(solution):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if valide(solution, choix):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>solution.append(choix)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>explorer(solution)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>solution.pop()</code> &nbsp; <em># retour arrière</em><br>L'élagage précoce (test <code>valide</code>) conditionne l'efficacité face à l'explosion combinatoire.` },
        { type:'ex', label:'EX', titre:'Problème des $n$ reines',
          contenu:`Placer $n$ reines sur un échiquier $n \\times n$ sans qu'aucune n'en menace une autre. On place une reine <strong>par colonne</strong> ; à chaque colonne on essaie chaque ligne, en vérifiant l'absence de conflit (même ligne ou même diagonale) avec les reines déjà posées. Si aucune position n'est valide, on <strong>revient</strong> à la colonne précédente. Le backtracking élague massivement par rapport à l'énumération brute des $n^n$ placements.` },
      ]
    },

    {
      titre: 'Comparaison des paradigmes',
      cartes: [
        { type:'prop', label:'PROP', titre:'Synthèse des paradigmes',
          contenu:`<ul><li><strong>Diviser pour régner</strong> : sous-problèmes <strong>indépendants</strong>, on combine.</li><li><strong>Programmation dynamique</strong> : sous-problèmes <strong>chevauchants</strong>, on mémorise.</li><li><strong>Glouton</strong> : un seul choix local, jamais remis en cause — rapide mais à prouver.</li><li><strong>Backtracking</strong> : exploration exhaustive <strong>avec retour arrière</strong> et élagage.</li></ul>Le choix dépend de la structure du problème (indépendance, chevauchement, propriété de choix).` },
        { type:'meth', label:'METH', titre:'Comment choisir un paradigme',
          contenu:`<strong>Démarche</strong> :<br><ul><li>les sous-problèmes se <strong>répètent</strong> ? $\\to$ programmation dynamique (mémoïsation/tabulation) ;</li><li>ils sont <strong>disjoints</strong> et se recombinent simplement ? $\\to$ diviser pour régner ;</li><li>un choix local optimal est <strong>prouvable</strong> ? $\\to$ glouton ;</li><li>il faut <strong>énumérer</strong> en respectant des contraintes ? $\\to$ backtracking.</li></ul>Toujours valider par une preuve de correction et une analyse de complexité.` },
        { type:'ex', label:'EX', titre:'Un même problème, plusieurs approches',
          contenu:`<strong>Suite de Fibonacci</strong> illustre la gradation :<br><ul><li>récursivité naïve : $\\Theta(\\varphi^n)$ (sous-problèmes recalculés) ;</li><li>mémoïsation / tabulation : $\\Theta(n)$ temps, $\\Theta(n)$ puis $\\Theta(1)$ espace ;</li><li>exponentiation rapide de la matrice $\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$ : $\\Theta(\\log n)$.</li></ul>Le bon paradigme transforme un coût exponentiel en coût logarithmique.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 4. GRAPHES ET PLUS COURTS CHEMINS   (id: info-graphes)
// ══════════════════════════════════════════════════════════════
{
  id: 'info-graphes', matiere: 'info',
  titre: 'Graphes et plus courts chemins', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Définitions et représentations',
      cartes: [
        { type:'def', label:'DEF', titre:'Graphe orienté, non orienté, pondéré',
          contenu:`Un <strong>graphe</strong> $G = (S, A)$ est la donnée d'un ensemble fini de <strong>sommets</strong> $S$ et d'un ensemble d'<strong>arêtes</strong> (ou <strong>arcs</strong>) $A$.<br><ul><li><strong>non orienté</strong> : les arêtes sont des paires $\\{u, v\\}$ ;</li><li><strong>orienté</strong> : les arcs sont des couples $(u, v)$ avec un sens ;</li><li><strong>pondéré</strong> : chaque arête porte un <strong>poids</strong> $w(u,v) \\in \\mathbb{R}$ (coût, distance, capacité).</li></ul>Le <strong>degré</strong> d'un sommet est son nombre d'arêtes incidentes.` },
        { type:'def', label:'DEF', titre:'Chemin, cycle, connexité',
          contenu:`Un <strong>chemin</strong> de $u$ à $v$ est une suite de sommets reliés par des arêtes. Un <strong>cycle</strong> est un chemin fermé (retour au départ) sans répétition d'arête.<br>Un graphe non orienté est <strong>connexe</strong> si tout couple de sommets est relié par un chemin. Une <strong>composante connexe</strong> est une partie connexe maximale. En orienté on parle de <strong>forte connexité</strong> (chemin dans les deux sens).` },
        { type:'def', label:'DEF', titre:'Matrice d\'adjacence',
          contenu:`La <strong>matrice d'adjacence</strong> $M$ d'un graphe à $n$ sommets est la matrice $n \\times n$ définie par $M_{i,j} = 1$ s'il y a une arête de $i$ vers $j$, $0$ sinon (le poids pour un graphe pondéré).<br><strong>Coût</strong> : espace $\\Theta(n^2)$ ; test d'adjacence en $\\Theta(1)$ ; énumération des voisins en $\\Theta(n)$. Adaptée aux graphes <strong>denses</strong> ($|A| \\approx n^2$).` },
        { type:'def', label:'DEF', titre:'Listes d\'adjacence',
          contenu:`Les <strong>listes d'adjacence</strong> associent à chaque sommet $u$ la liste de ses voisins.<br><strong>Coût</strong> : espace $\\Theta(n + m)$ avec $m = |A|$ ; énumération des voisins de $u$ en $\\Theta(\\deg u)$ ; test d'adjacence en $\\Theta(\\deg u)$. Adaptée aux graphes <strong>creux</strong> ($m \\ll n^2$), les plus fréquents en pratique. C'est la représentation de choix pour les parcours.` },
      ]
    },

    {
      titre: 'Parcours en largeur (BFS)',
      cartes: [
        { type:'def', label:'DEF', titre:'Parcours en largeur',
          contenu:`Le <strong>parcours en largeur</strong> (BFS, <em>Breadth-First Search</em>) explore le graphe par <strong>cercles concentriques</strong> autour du sommet de départ : d'abord les voisins directs, puis les voisins des voisins, etc.<br>Il utilise une <strong>file</strong> (FIFO) : on enfile le sommet source, puis on défile un sommet, on enfile ses voisins non encore visités, et on recommence.` },
        { type:'meth', label:'METH', titre:'Algorithme BFS',
          contenu:`<code>def bfs(G, s):</code><br>&nbsp;&nbsp;<code>vus = {s}; file = deque([s])</code><br>&nbsp;&nbsp;<code>while file:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>u = file.popleft()</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>for v in G[u]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if v not in vus:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>vus.add(v); file.append(v)</code><br><strong>Complexité</strong> : $\\Theta(n + m)$ en listes d'adjacence (chaque sommet et chaque arête traités une fois).` },
        { type:'th', label:'THM', titre:'BFS et plus courts chemins non pondérés',
          contenu:`Dans un graphe <strong>non pondéré</strong>, le BFS calcule, depuis la source $s$, la <strong>distance minimale</strong> (en nombre d'arêtes) de $s$ à tout sommet atteignable.<br>En enregistrant pour chaque sommet $v$ son <strong>prédécesseur</strong> dans le parcours, on reconstruit un <strong>plus court chemin</strong> de $s$ à $v$. C'est l'application phare du BFS (labyrinthes, réseaux, jeux de plateau).` },
        { type:'ex', label:'EX', titre:'Distance dans un labyrinthe',
          contenu:`Un labyrinthe est un graphe : sommets = cases libres, arêtes = passages entre cases voisines. Un BFS depuis l'entrée donne, case par case, le <strong>nombre minimal de pas</strong> jusqu'à la sortie, et le chemin le plus court via les prédécesseurs. Comme toutes les arêtes ont un poids $1$, la garantie d'optimalité du BFS s'applique directement.` },
      ]
    },

    {
      titre: 'Parcours en profondeur (DFS)',
      cartes: [
        { type:'def', label:'DEF', titre:'Parcours en profondeur',
          contenu:`Le <strong>parcours en profondeur</strong> (DFS, <em>Depth-First Search</em>) explore aussi <strong>loin que possible</strong> le long de chaque branche avant de revenir en arrière. Il s'écrit naturellement de façon <strong>récursive</strong> (ou itérative avec une <strong>pile</strong> LIFO).<br>On marque un sommet visité, puis on lance le DFS sur chacun de ses voisins non visités. <strong>Complexité</strong> : $\\Theta(n + m)$.` },
        { type:'meth', label:'METH', titre:'Algorithme DFS récursif',
          contenu:`<code>def dfs(G, u, vus):</code><br>&nbsp;&nbsp;<code>vus.add(u)</code><br>&nbsp;&nbsp;<code>for v in G[u]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if v not in vus:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>dfs(G, v, vus)</code><br>La profondeur de la pile d'appels peut atteindre $n$ : pour de très grands graphes on préfère la version itérative avec une pile explicite afin d'éviter le débordement.` },
        { type:'prop', label:'PROP', titre:'Composantes connexes et détection de cycles',
          contenu:`<ul><li><strong>Composantes connexes</strong> : on lance un DFS (ou BFS) depuis chaque sommet non encore visité ; chaque lancement révèle une composante. Total $\\Theta(n+m)$.</li><li><strong>Détection de cycle</strong> (non orienté) : un cycle existe ssi le DFS rencontre un voisin <strong>déjà visité</strong> autre que le père.</li><li>En <strong>orienté</strong> : un cycle correspond à un arc vers un sommet <strong>en cours de traitement</strong> (gris).</li></ul>` },
        { type:'ex', label:'EX', titre:'Nombre de composantes d\'un graphe',
          contenu:`<code>def nb_composantes(G):</code><br>&nbsp;&nbsp;<code>vus = set(); c = 0</code><br>&nbsp;&nbsp;<code>for s in G:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if s not in vus:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>dfs(G, s, vus); c += 1</code><br>&nbsp;&nbsp;<code>return c</code><br>Chaque appel à <code>dfs</code> marque entièrement une composante ; le compteur <code>c</code> donne leur nombre, en $\\Theta(n+m)$.` },
      ]
    },

    {
      titre: 'Tri topologique',
      cartes: [
        { type:'def', label:'DEF', titre:'DAG et ordre topologique',
          contenu:`Un <strong>graphe orienté acyclique</strong> (DAG, <em>Directed Acyclic Graph</em>) est un graphe orienté <strong>sans cycle</strong>.<br>Un <strong>tri topologique</strong> est un ordre total sur les sommets tel que pour tout arc $(u,v)$, $u$ <strong>précède</strong> $v$. Il modélise un ordonnancement de tâches respectant les dépendances (« $u$ doit être fait avant $v$ »).` },
        { type:'th', label:'THM', titre:'Existence d\'un tri topologique',
          contenu:`Un graphe orienté admet un <strong>tri topologique si et seulement s'il est acyclique</strong> (DAG).<br><strong>Sens direct</strong> : un cycle interdit tout ordre cohérent (chaque sommet devrait précéder lui-même). <strong>Réciproque</strong> : un DAG possède toujours un sommet de degré entrant nul, qu'on peut placer en tête, et le retrait préserve l'acyclicité (récurrence).` },
        { type:'meth', label:'METH', titre:'Tri topologique par DFS',
          contenu:`On effectue un <strong>DFS</strong> et l'on empile chaque sommet <strong>au moment où son exploration se termine</strong> (post-ordre). L'ordre topologique est la <strong>liste inversée</strong> des fins de traitement.<br>Variante (Kahn) : retirer itérativement les sommets de <strong>degré entrant nul</strong>, en les ajoutant à l'ordre. Les deux méthodes sont en $\\Theta(n + m)$.` },
        { type:'ex', label:'EX', titre:'Ordonnancement de cours',
          contenu:`Des modules ont des prérequis : « Analyse 1 avant Analyse 2 », « Algèbre avant Réduction ». Le graphe des prérequis est un DAG. Un tri topologique fournit un <strong>ordre de validation</strong> possible respectant toutes les dépendances. S'il existe un cycle de prérequis (incohérence), aucun ordre n'existe — le tri topologique le détecte.` },
      ]
    },

    {
      titre: 'Plus courts chemins : Dijkstra',
      cartes: [
        { type:'th', label:'THM', titre:'Algorithme de Dijkstra',
          contenu:`L'algorithme de <strong>Dijkstra</strong> calcule les plus courts chemins depuis une source $s$ dans un graphe <strong>pondéré à poids positifs</strong> ($w \\geq 0$).<br>Il maintient un ensemble de sommets <strong>définitivement traités</strong> et, à chaque étape, <strong>fixe</strong> le sommet non traité de distance provisoire minimale, puis <strong>relâche</strong> ses arcs. C'est un algorithme <strong>glouton</strong> : un sommet fixé ne sera jamais réamélioré.` },
        { type:'meth', label:'METH', titre:'Relâchement et file de priorité',
          contenu:`Le <strong>relâchement</strong> de l'arc $(u,v)$ : si $d[u] + w(u,v) &lt; d[v]$, on met à jour $d[v] = d[u] + w(u,v)$.<br>Avec une <strong>file de priorité</strong> (tas) pour extraire le minimum, la complexité est :<br>$$\\Theta\\big((n + m)\\log n\\big).$$<br>Sans tas (recherche linéaire du minimum) : $\\Theta(n^2)$, préférable sur graphes denses.` },
        { type:'prop', label:'PROP', titre:'Pourquoi les poids doivent être positifs',
          contenu:`La correction de Dijkstra repose sur l'invariant : quand un sommet est <strong>fixé</strong>, sa distance est <strong>définitive</strong>. Cet argument <strong>échoue avec des poids négatifs</strong> : un chemin plus long en arêtes mais passant par un arc négatif pourrait améliorer une distance déjà figée.<br>Pour des poids négatifs (sans cycle négatif), on emploie <strong>Bellman-Ford</strong>.` },
        { type:'ex', label:'EX', titre:'Itinéraire routier optimal',
          contenu:`Réseau routier : sommets = villes, arcs = routes pondérées par le temps de trajet (positif). Dijkstra depuis une ville source donne le <strong>temps minimal</strong> vers toutes les destinations et, via les prédécesseurs, l'<strong>itinéraire optimal</strong>. C'est le cœur des calculateurs d'itinéraires (souvent accéléré par A* avec une heuristique de distance à vol d'oiseau).` },
      ]
    },

    {
      titre: 'Bellman-Ford et Floyd-Warshall',
      cartes: [
        { type:'th', label:'THM', titre:'Algorithme de Bellman-Ford',
          contenu:`<strong>Bellman-Ford</strong> calcule les plus courts chemins depuis une source en présence de <strong>poids négatifs</strong> (mais sans cycle de poids négatif).<br>On <strong>relâche toutes les arêtes</strong> $n-1$ fois successivement. Après $n-1$ passes, toutes les distances sont optimales.<br><strong>Complexité</strong> : $\\Theta(n \\cdot m)$. Plus lent que Dijkstra, mais tolère les poids négatifs.` },
        { type:'prop', label:'PROP', titre:'Détection de cycle de poids négatif',
          contenu:`Après les $n-1$ passes de Bellman-Ford, on effectue une <strong>passe supplémentaire</strong> : si une distance peut <strong>encore être réduite</strong>, c'est qu'il existe un <strong>cycle de poids négatif</strong> accessible depuis la source.<br>Dans ce cas il n'y a <strong>pas de plus court chemin</strong> bien défini (on peut diminuer indéfiniment le coût en bouclant). Bellman-Ford est le seul des trois à <strong>signaler</strong> cette situation.` },
        { type:'th', label:'THM', titre:'Algorithme de Floyd-Warshall',
          contenu:`<strong>Floyd-Warshall</strong> calcule les plus courts chemins entre <strong>toutes les paires</strong> de sommets. Par programmation dynamique, on note $d_k(i,j)$ le plus court chemin de $i$ à $j$ n'utilisant que les sommets intermédiaires $\\leq k$ :<br>$$d_k(i,j) = \\min\\big(d_{k-1}(i,j),\\ d_{k-1}(i,k) + d_{k-1}(k,j)\\big).$$<br><strong>Complexité</strong> : $\\Theta(n^3)$ en temps, $\\Theta(n^2)$ en espace. Admet aussi les poids négatifs (sans cycle négatif).` },
        { type:'ex', label:'EX', titre:'Choisir le bon algorithme',
          contenu:`<ul><li>poids $\\geq 0$, une source, graphe creux $\\to$ <strong>Dijkstra</strong> avec tas, $\\Theta((n+m)\\log n)$ ;</li><li>poids négatifs possibles, une source $\\to$ <strong>Bellman-Ford</strong>, $\\Theta(nm)$ ;</li><li>toutes les paires, graphe dense $\\to$ <strong>Floyd-Warshall</strong>, $\\Theta(n^3)$ ;</li><li>graphe non pondéré $\\to$ <strong>BFS</strong>, $\\Theta(n+m)$.</li></ul>` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 5. ALGORITHMIQUE DES JEUX ET IA   (id: info-ia)
// ══════════════════════════════════════════════════════════════
{
  id: 'info-ia', matiere: 'info',
  titre: 'Algorithmique des jeux et IA', ordre: 5, enrich: true,
  sections: [

    {
      titre: 'Espace d\'états et arbres de jeux',
      cartes: [
        { type:'def', label:'DEF', titre:'Espace d\'états',
          contenu:`Un <strong>espace d'états</strong> modélise un problème par :<br><ul><li>un ensemble d'<strong>états</strong> (configurations) ;</li><li>un état <strong>initial</strong> et un ou des états <strong>buts</strong> ;</li><li>des <strong>transitions</strong> (actions) reliant un état à ses successeurs, éventuellement pondérées par un coût.</li></ul>Résoudre le problème, c'est trouver un <strong>chemin</strong> de l'état initial à un état but. De nombreux problèmes (taquin, labyrinthe, planification) s'y ramènent.` },
        { type:'def', label:'DEF', titre:'Arbre de jeu',
          contenu:`Pour un <strong>jeu à deux joueurs, à somme nulle et information complète</strong> (échecs, morpion, puissance 4), l'<strong>arbre de jeu</strong> a pour racine la position courante ; ses fils sont les positions atteignables par un coup. Les niveaux <strong>alternent</strong> entre le joueur qui <strong>maximise</strong> son gain et l'adversaire qui le <strong>minimise</strong>. Les feuilles sont les positions terminales, évaluées par un score (gain, nul, perte).` },
        { type:'prop', label:'PROP', titre:'Explosion combinatoire',
          contenu:`Si chaque position offre $b$ coups (<strong>facteur de branchement</strong>) et la partie dure $p$ coups (<strong>profondeur</strong>), l'arbre comporte $\\Theta(b^{p})$ nœuds.<br>Aux échecs, $b \\approx 35$ : l'arbre complet est <strong>inexplorable</strong>. On limite donc la profondeur d'analyse et l'on <strong>évalue</strong> les positions non terminales par une <strong>heuristique</strong>, au lieu de descendre jusqu'aux feuilles réelles.` },
      ]
    },

    {
      titre: 'Algorithme Minimax',
      cartes: [
        { type:'th', label:'THM', titre:'Principe du Minimax',
          contenu:`Le <strong>Minimax</strong> détermine le coup optimal en supposant les deux joueurs <strong>parfaits</strong>. La valeur d'un nœud est :<br><ul><li>aux nœuds <strong>MAX</strong> (notre joueur) : le <strong>maximum</strong> des valeurs des fils ;</li><li>aux nœuds <strong>MIN</strong> (adversaire) : le <strong>minimum</strong> des valeurs des fils ;</li><li>aux feuilles : la valeur (heuristique ou réelle) de la position.</li></ul>On propage les valeurs des feuilles vers la racine ; le meilleur coup est celui menant au fils de valeur maximale.` },
        { type:'meth', label:'METH', titre:'Minimax récursif',
          contenu:`<code>def minimax(e, prof, joueurMax):</code><br>&nbsp;&nbsp;<code>if prof == 0 or terminal(e): return eval(e)</code><br>&nbsp;&nbsp;<code>if joueurMax:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return max(minimax(f, prof-1, False) for f in fils(e))</code><br>&nbsp;&nbsp;<code>else:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return min(minimax(f, prof-1, True) for f in fils(e))</code><br>C'est un <strong>parcours en profondeur</strong> de l'arbre de jeu jusqu'à la profondeur fixée.` },
        { type:'prop', label:'PROP', titre:'Complexité du Minimax',
          contenu:`Le Minimax explore <strong>tout</strong> l'arbre jusqu'à la profondeur $p$, soit $\\Theta(b^{p})$ nœuds, pour une mémoire $\\Theta(p)$ (pile de récursion).<br>Cette complexité exponentielle limite la profondeur atteignable. Le coût total dépend du produit <strong>facteur de branchement</strong> × <strong>profondeur</strong> ; on cherche à le réduire sans changer le résultat, d'où l'élagage alpha-bêta.` },
        { type:'ex', label:'EX', titre:'Morpion (tic-tac-toe)',
          contenu:`Au morpion, l'arbre complet a moins de $9! = 362880$ feuilles : il est <strong>entièrement explorable</strong>. Le Minimax y joue <strong>parfaitement</strong> et garantit au minimum le <strong>match nul</strong> (le morpion est un jeu nul avec deux joueurs parfaits). On évalue les feuilles à $+1$ (victoire MAX), $-1$ (victoire MIN), $0$ (nul).` },
      ]
    },

    {
      titre: 'Élagage alpha-bêta',
      cartes: [
        { type:'def', label:'DEF', titre:'Bornes alpha et bêta',
          contenu:`L'<strong>élagage alpha-bêta</strong> accélère le Minimax en maintenant deux bornes le long du parcours :<br><ul><li>$\\alpha$ : meilleure valeur déjà <strong>garantie</strong> pour MAX sur le chemin courant ;</li><li>$\\beta$ : meilleure valeur déjà garantie pour MIN.</li></ul>Dès que $\\alpha \\geq \\beta$, la branche en cours ne peut <strong>plus influencer</strong> le choix de la racine : on l'<strong>élague</strong> (coupure), sans en explorer les autres fils.` },
        { type:'th', label:'THM', titre:'Correction de l\'élagage',
          contenu:`L'élagage alpha-bêta renvoie <strong>exactement la même valeur</strong> que le Minimax : il ne supprime que des branches <strong>prouvées inutiles</strong> (l'adversaire ne les laissera jamais se produire, ou MAX a déjà mieux).<br>Le résultat est donc <strong>identique</strong>, seul le nombre de nœuds explorés change. C'est un élagage <strong>exact</strong>, pas une approximation.` },
        { type:'prop', label:'PROP', titre:'Gain de complexité',
          contenu:`Dans le <strong>meilleur cas</strong> (coups examinés dans l'ordre optimal), l'élagage alpha-bêta ramène la complexité de $\\Theta(b^{p})$ à $\\Theta(b^{p/2}) = \\Theta\\big((\\sqrt{b})^{p}\\big)$.<br>On peut alors explorer une profondeur <strong>deux fois plus grande</strong> à coût égal. Un bon <strong>ordonnancement des coups</strong> (les plus prometteurs d'abord) est crucial pour s'approcher de ce gain optimal.` },
        { type:'meth', label:'METH', titre:'Minimax avec coupures alpha-bêta',
          contenu:`<code>def alphabeta(e, prof, a, b, joueurMax):</code><br>&nbsp;&nbsp;<code>if prof == 0 or terminal(e): return eval(e)</code><br>&nbsp;&nbsp;<code>if joueurMax:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>v = -inf</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>for f in fils(e):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>v = max(v, alphabeta(f, prof-1, a, b, False))</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>a = max(a, v)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if a &gt;= b: break</code> &nbsp;<em># coupure bêta</em><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return v</code><br>Le cas MIN est symétrique (mise à jour de <code>b</code>, coupure si <code>a &gt;= b</code>).` },
      ]
    },

    {
      titre: 'Heuristiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction d\'évaluation heuristique',
          contenu:`Une <strong>heuristique</strong> est une fonction qui <strong>estime</strong> la qualité d'une position (ou sa proximité du but) sans calcul exhaustif. Pour un jeu, elle attribue un score à une position non terminale, permettant d'arrêter l'exploration à profondeur limitée.<br>Une bonne heuristique est <strong>rapide à calculer</strong> et <strong>fortement corrélée</strong> à l'issue réelle. Elle encode la connaissance du domaine (matériel, mobilité, contrôle du centre aux échecs).` },
        { type:'def', label:'DEF', titre:'Heuristique admissible',
          contenu:`Dans une recherche de <strong>plus court chemin</strong>, une heuristique $h$ qui estime le coût restant jusqu'au but est <strong>admissible</strong> si elle ne le <strong>surestime jamais</strong> :<br>$$\\forall n,\\quad 0 \\leq h(n) \\leq h^*(n),$$<br>où $h^*(n)$ est le coût optimal réel de $n$ au but. L'admissibilité est la condition qui rend la recherche A* <strong>optimale</strong>. Si de plus $h$ vérifie l'inégalité triangulaire, elle est dite <strong>cohérente</strong> (monotone).` },
        { type:'ex', label:'EX', titre:'Heuristiques classiques',
          contenu:`<ul><li><strong>Échecs</strong> : somme pondérée du matériel (pion $1$, cavalier/fou $3$, tour $5$, dame $9$) plus des termes positionnels.</li><li><strong>Taquin</strong> : nombre de cases mal placées, ou <strong>distance de Manhattan</strong> totale (admissible).</li><li><strong>Pathfinding sur grille</strong> : distance de Manhattan ($L^1$) ou euclidienne ($L^2$) à vol d'oiseau, toujours admissibles.</li></ul>` },
      ]
    },

    {
      titre: 'Recherche A* et exploration d\'états',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction de coût de A*',
          contenu:`L'algorithme <strong>A*</strong> (<em>A-étoile</em>) cherche un plus court chemin dans un espace d'états en explorant en priorité les nœuds minimisant :<br>$$f(n) = g(n) + h(n),$$<br>où $g(n)$ est le <strong>coût réel</strong> depuis le départ jusqu'à $n$, et $h(n)$ l'<strong>estimation heuristique</strong> du coût restant de $n$ au but. A* combine ainsi le passé certain et le futur estimé.` },
        { type:'th', label:'THM', titre:'Optimalité de A*',
          contenu:`Si l'heuristique $h$ est <strong>admissible</strong> (jamais de surestimation), alors A* <strong>trouve un chemin de coût minimal</strong> vers le but.<br>Si $h$ est de plus <strong>cohérente</strong>, A* n'a jamais besoin de rouvrir un nœud déjà fermé et reste optimal. A* est en outre <strong>optimalement efficace</strong> : aucun algorithme garantissant l'optimalité avec la même heuristique n'explore moins de nœuds.` },
        { type:'meth', label:'METH', titre:'Algorithme A* avec file de priorité',
          contenu:`On gère une <strong>file de priorité</strong> (tas) ordonnée par $f(n) = g(n) + h(n)$ :<br><ul><li>extraire le nœud de $f$ minimal ; si c'est le but, terminer ;</li><li>pour chaque successeur $v$, calculer $g(v) = g(u) + w(u,v)$ ;</li><li>si ce coût améliore le $g[v]$ connu, mettre à jour et (ré)insérer $v$ avec priorité $g(v) + h(v)$.</li></ul>On enregistre les prédécesseurs pour reconstruire le chemin.` },
        { type:'prop', label:'PROP', titre:'A*, Dijkstra et recherche gloutonne',
          contenu:`A* <strong>généralise</strong> deux algorithmes selon l'heuristique :<br><ul><li>si $h \\equiv 0$ : $f = g$, A* <strong>devient Dijkstra</strong> (correct mais sans guidage) ;</li><li>si l'on ne garde que $h$ ($f = h$) : <strong>recherche gloutonne</strong> par meilleur d'abord, rapide mais <strong>non optimale</strong>.</li></ul>Une heuristique admissible <strong>plus informée</strong> (proche de $h^*$) réduit le nombre de nœuds explorés tout en préservant l'optimalité.` },
        { type:'ex', label:'EX', titre:'Plus court chemin sur grille',
          contenu:`Sur une grille avec obstacles (jeu vidéo, robotique), A* avec heuristique de <strong>distance de Manhattan</strong> trouve le chemin optimal en explorant bien moins de cases que Dijkstra : l'heuristique <strong>oriente</strong> la recherche vers la cible. C'est l'algorithme de référence du <em>pathfinding</em>, combinant garantie d'optimalité et efficacité pratique.` },
      ]
    },

  ]
}

];
