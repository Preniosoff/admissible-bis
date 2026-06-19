// Seed — Informatique (prépa MP/MPI/MPSI)
// Programme officiel CPGE informatique (2021)
// Run : node server/db/seed-info.js

import initSqlJs from 'sql.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = resolve(__dirname, 'prepamp.sqlite');

const SQL = await initSqlJs();
if (!existsSync(DB_PATH)) { console.error('Base introuvable :', DB_PATH); process.exit(1); }
const db = new SQL.Database(readFileSync(DB_PATH));

function run(sql, params = []) { db.run(sql, params); }
function get(sql, params = []) {
  const stmt = db.prepare(sql); stmt.bind(params);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free(); return row;
}
function lastId() { return get('SELECT last_insert_rowid() as id').id; }

const FILIERES = ['mp', 'mpi', 'mpsi'];

const chapitres = [
  { id: 'info-s1',        titre: 'Bases algorithmiques & complexité', ordre: 1 },
  { id: 'info-methprog',  titre: 'Méthodes de programmation',         ordre: 2 },
  { id: 'info-complexite',titre: 'Complexité formelle',               ordre: 3 },
  { id: 'info-nombres',   titre: 'Représentation des nombres',        ordre: 4 },
  { id: 'info-graphes',   titre: 'Graphes & plus courts chemins',     ordre: 5 },
  { id: 'info-bdd',       titre: 'Bases de données & SQL',            ordre: 6 },
  { id: 'info-dico',      titre: 'Dictionnaires & programmation dynamique', ordre: 7 },
  { id: 'info-ia',        titre: 'Algorithmique IA & jeux',           ordre: 8 },
  { id: 'info-python',    titre: 'Annexe — Langage Python exigible',  ordre: 9 },
];

const sections = {

// ══════════════════════════════════════════════════════════════
// 1. Bases algorithmiques & complexité
// ══════════════════════════════════════════════════════════════
'info-s1': [
  { titre: 'Notion d\'algorithme et de complexité', cartes: [
    { type:'def', label:'DEF', titre:'Algorithme',
      contenu:`Procédure finie, déterministe et non ambiguë qui résout un problème pour tout élément d'un ensemble d'entrées valides et se termine en un nombre fini d'étapes.<br>
<strong>Critère d'évaluation</strong> : correction (produit la sortie voulue), terminaison, complexité temporelle et spatiale.` },
    { type:'def', label:'DEF', titre:'Complexité temporelle',
      contenu:`Nombre d'opérations élémentaires effectuées en fonction de la taille $n$ de l'entrée.<br>
On distingue :
<ul>
<li><strong>Pire cas</strong> $T_{\text{worst}}(n)$ — garantie sur le temps max ;</li>
<li><strong>Cas moyen</strong> $T_{\text{avg}}(n)$ — sous distribution aléatoire ;</li>
<li><strong>Meilleur cas</strong> $T_{\text{best}}(n)$ — peu utile en pratique.</li>
</ul>
On s'intéresse presque toujours au <strong>pire cas</strong>.` },
    { type:'def', label:'DEF', titre:'Notations de Landau $O$, $\\Omega$, $\\Theta$',
      contenu:`$f(n) = O(g(n))$ : $\\exists c > 0,\\ n_0,\\ \\forall n \\ge n_0,\\ f(n) \\le c\\,g(n)$ (<em>au plus</em>)<br>
$f(n) = \\Omega(g(n))$ : $\\exists c > 0,\\ n_0,\\ \\forall n \\ge n_0,\\ f(n) \\ge c\\,g(n)$ (<em>au moins</em>)<br>
$f(n) = \\Theta(g(n))$ : $f = O(g)$ et $f = \\Omega(g)$ (<em>équivalent</em>)<br><br>
<strong>Classes usuelles</strong> (du plus rapide au plus lent) :<br>
$O(1) \\subset O(\\log n) \\subset O(n) \\subset O(n \\log n) \\subset O(n^2) \\subset O(n^k) \\subset O(2^n) \\subset O(n!)$` },
  ]},
  { titre: 'Algorithmes de tri', cartes: [
    { type:'prop', label:'PROP', titre:'Tris élémentaires',
      contenu:`<table>
<tr><th>Tri</th><th>Pire cas</th><th>Moyen</th><th>En place ?</th><th>Stable ?</th></tr>
<tr><td>Sélection</td><td>$\\Theta(n^2)$</td><td>$\\Theta(n^2)$</td><td>Oui</td><td>Non</td></tr>
<tr><td>Insertion</td><td>$\\Theta(n^2)$</td><td>$\\Theta(n^2)$</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Bulles</td><td>$\\Theta(n^2)$</td><td>$\\Theta(n^2)$</td><td>Oui</td><td>Oui</td></tr>
</table>
<strong>Stable</strong> : conserve l'ordre relatif des éléments égaux.` },
    { type:'prop', label:'PROP', titre:'Tri rapide (Quicksort)',
      contenu:`Algorithme <em>diviser pour régner</em> : on choisit un pivot, on partitionne, on trie récursivement.<br>
<strong>Pire cas</strong> : $O(n^2)$ (pivot extrême, ex. tableau déjà trié avec pivot = 1er élément)<br>
<strong>Moyen</strong> : $O(n \\log n)$ — optimal en pratique<br>
<strong>En place</strong> : oui &nbsp;·&nbsp; <strong>Stable</strong> : non<br>
Recurrence (moyen) : $T(n) = 2T(n/2) + n \\Rightarrow T(n) = O(n\\log n)$ (théorème maître).` },
    { type:'prop', label:'PROP', titre:'Tri fusion (Merge Sort)',
      contenu:`Divise en deux moitiés, trie récursivement, fusionne en temps linéaire.<br>
<strong>Toujours $\\Theta(n \\log n)$</strong> en pire cas, cas moyen et meilleur cas.<br>
<strong>Stable</strong> : oui &nbsp;·&nbsp; <strong>En place</strong> : non ($O(n)$ mémoire auxiliaire)<br>
Recurrence : $T(n) = 2T(n/2) + n \\Rightarrow T(n) = \\Theta(n\\log n)$.` },
    { type:'th', label:'THM', titre:'Borne inférieure des tris par comparaison',
      contenu:`Tout algorithme de tri fondé sur des <strong>comparaisons</strong> nécessite au moins $\\Omega(n \\log n)$ comparaisons dans le pire cas.<br>
<strong>Preuve par arbre de décision</strong> : l'arbre a $n!$ feuilles (toutes les permutations) ; sa hauteur est au moins $\\log_2(n!) = \\Theta(n \\log n)$ par la formule de Stirling ($n! \\approx (n/e)^n\\sqrt{2\\pi n}$).` },
  ]},
  { titre: 'Recherche dichotomique', cartes: [
    { type:'prop', label:'PROP', titre:'Recherche par dichotomie',
      contenu:`Dans un tableau trié de taille $n$, on compare l'élément médian à la cible et on divise l'intervalle de recherche par 2 à chaque étape.<br>
<strong>Complexité</strong> : $O(\\log_2 n)$ comparaisons.<br>
<strong>Invariant de boucle</strong> : la cible, si elle est présente, est dans <code>tab[gauche..droite]</code>.<br>
<strong>Terminaison</strong> : $droite - gauche$ décroît strictement à chaque tour.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 2. Méthodes de programmation
// ══════════════════════════════════════════════════════════════
'info-methprog': [
  { titre: 'Récursivité', cartes: [
    { type:'def', label:'DEF', titre:'Fonction récursive',
      contenu:`Une fonction est récursive si elle s'appelle elle-même directement (récursivité directe) ou via une chaîne d'appels (récursivité mutuelle).<br>
Elle doit comporter :
<ol>
<li>Un ou plusieurs <strong>cas de base</strong> (sans appel récursif).</li>
<li>Un ou plusieurs <strong>cas récursifs</strong> où le problème est ramené à une instance <em>strictement plus petite</em>.</li>
</ol>
<strong>Pile d'appels</strong> : chaque appel alloue un cadre. Profondeur max = récursion maximale.` },
    { type:'prop', label:'PROP', titre:'Récursion terminale (tail recursion)',
      contenu:`L'appel récursif est la <strong>dernière opération</strong> de la fonction (aucun calcul après le retour).<br>
Transformable en itération par un compilateur/interprète qui réutilise le même cadre de pile — profondeur mémoire constante.<br>
Python n'optimise pas nativement la récursion terminale (limite à 1000 appels par défaut).` },
    { type:'meth', label:'METH', titre:'Prouver la terminaison par un variant',
      contenu:`Définir un <strong>variant</strong> : une expression entière $v$ telle que :<br>
1. $v \\ge 0$ toujours,<br>
2. $v$ décroît strictement à chaque appel récursif (ou chaque itération de boucle).<br>
Si un tel $v$ existe, la fonction se termine.<br>
<strong>Exemple</strong> : pour <code>pgcd(a, b)</code>, le variant $b$ décroît strictement car $a \\bmod b < b$.` },
  ]},
  { titre: 'Diviser pour régner', cartes: [
    { type:'def', label:'DEF', titre:'Paradigme diviser pour régner',
      contenu:`<strong>1. Diviser</strong> : décomposer le problème de taille $n$ en $a$ sous-problèmes de taille $n/b$.<br>
<strong>2. Régner</strong> : résoudre chaque sous-problème récursivement (cas de base si $n$ petit).<br>
<strong>3. Combiner</strong> : fusionner les solutions en $O(n^d)$.<br>
Recurrence : $T(n) = aT(n/b) + O(n^d)$, résolue par le <strong>théorème maître</strong>.` },
    { type:'th', label:'THM', titre:'Théorème maître',
      contenu:`Pour $T(n) = aT(n/b) + O(n^d)$ avec $a \\ge 1$, $b > 1$, $d \\ge 0$ :
$$T(n) = \\begin{cases}
O(n^d \\log n) & \\text{si } a = b^d \\\\
O(n^{\\log_b a}) & \\text{si } a > b^d \\\\
O(n^d) & \\text{si } a < b^d
\\end{cases}$$
<strong>Exemple (tri-fusion)</strong> : $a=2$, $b=2$, $d=1$ → $a = b^d$ → $T(n) = O(n\\log n)$.` },
  ]},
  { titre: 'Programmation dynamique', cartes: [
    { type:'def', label:'DEF', titre:'Programmation dynamique',
      contenu:`Technique d'optimisation applicable quand le problème vérifie :<br>
1. <strong>Sous-structure optimale</strong> : la solution optimale contient des solutions optimales aux sous-problèmes.<br>
2. <strong>Sous-problèmes chevauchants</strong> : les mêmes sous-problèmes apparaissent plusieurs fois.<br>
On mémoïse (top-down) ou on remplit un tableau (bottom-up) pour éviter les recalculs.` },
    { type:'meth', label:'METH', titre:'Méthode bottom-up (exemple : suite de Fibonacci)',
      contenu:`Calculer $F(n)$ récursivement sans mémo : $O(2^n)$. Avec tableau :<br>
<pre><code>def fib(n):
    if n <= 1: return n
    dp = [0, 1]
    for i in range(2, n+1):
        dp.append(dp[-1] + dp[-2])
    return dp[n]   # O(n) temps, O(n) espace
# Optimisation espace : ne garder que les 2 derniers → O(1)</code></pre>` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 3. Complexité formelle
// ══════════════════════════════════════════════════════════════
'info-complexite': [
  { titre: 'Classes de complexité', cartes: [
    { type:'def', label:'DEF', titre:'Classes P et NP',
      contenu:`<strong>P</strong> : problèmes de décision solubles en <em>temps polynomial</em> par une machine de Turing déterministe.<br>
<strong>NP</strong> : problèmes de décision dont toute solution peut être <em>vérifiée en temps polynomial</em>.<br>
<strong>Propriété</strong> : $P \\subseteq NP$. La question $P = NP$ est le problème du millénaire non résolu.<br>
<strong>Exemples</strong> : Chemin hamiltonien, SAT, Clique — dans NP. Tri, PGCD, Dijkstra — dans P.` },
    { type:'def', label:'DEF', titre:'NP-complétude et réduction polynomiale',
      contenu:`Un problème $Q$ est <strong>NP-difficile</strong> si tout problème de NP se réduit polynomialement à $Q$.<br>
$Q$ est <strong>NP-complet</strong> si de plus $Q \\in$ NP.<br>
<strong>Réduction polynomiale</strong> $A \\le_P B$ : résoudre $A$ se ramène à résoudre $B$ avec une transformation de taille polynomiale.<br>
<strong>Théorème de Cook-Levin</strong> : SAT est NP-complet (premier résultat, 1971).` },
    { type:'prop', label:'PROP', titre:'Récurrences classiques et leur complexité',
      contenu:`<table>
<tr><th>Récurrence</th><th>Complexité</th><th>Exemple</th></tr>
<tr><td>$T(n) = T(n-1) + O(1)$</td><td>$O(n)$</td><td>Factorielle</td></tr>
<tr><td>$T(n) = T(n-1) + O(n)$</td><td>$O(n^2)$</td><td>Tri insertion</td></tr>
<tr><td>$T(n) = 2T(n/2) + O(n)$</td><td>$O(n\\log n)$</td><td>Tri fusion</td></tr>
<tr><td>$T(n) = T(n/2) + O(1)$</td><td>$O(\\log n)$</td><td>Dichotomie</td></tr>
<tr><td>$T(n) = 2T(n/2) + O(1)$</td><td>$O(n)$</td><td>Somme arbre binaire</td></tr>
<tr><td>$T(n) = 2T(n-1) + O(1)$</td><td>$O(2^n)$</td><td>Tours de Hanoï</td></tr>
</table>` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 4. Représentation des nombres
// ══════════════════════════════════════════════════════════════
'info-nombres': [
  { titre: 'Entiers — bases et conversions', cartes: [
    { type:'prop', label:'PROP', titre:'Représentation en base $b$',
      contenu:`Tout entier $n \\ge 0$ s'écrit de manière unique :
$$n = \\sum_{k=0}^{p} d_k \\cdot b^k, \\quad 0 \\le d_k < b$$
<strong>Algorithme de conversion décimal → base $b$</strong> : divisions successives par $b$, les restes donnent les chiffres de droite à gauche.<br>
<strong>Exemple</strong> : $42 = 32 + 8 + 2 = 2^5 + 2^3 + 2^1 = (101010)_2$.` },
    { type:'def', label:'DEF', titre:'Complément à deux (entiers signés sur $n$ bits)',
      contenu:`Représentation sur $n$ bits :<br>
— Les entiers $0$ à $2^{n-1}-1$ ont leur bit de poids fort (MSB) à 0.<br>
— L'entier négatif $-k$ est représenté par $2^n - k$ (i.e. inverser les bits et ajouter 1).<br>
<strong>Plage</strong> : $[-2^{n-1},\\ 2^{n-1}-1]$<br>
<strong>Avantage</strong> : l'addition entière est la même pour signés et non-signés.` },
    { type:'prop', label:'PROP', titre:'Opérations bit-à-bit',
      contenu:`<code>a & b</code> : ET bit-à-bit (masque)<br>
<code>a | b</code> : OU bit-à-bit<br>
<code>a ^ b</code> : XOR bit-à-bit (bascule, détection différences)<br>
<code>~a</code> : NON bit-à-bit ($\\approx -(a+1)$ en complément à 2)<br>
<code>a << k</code> : décalage gauche → multiplication par $2^k$<br>
<code>a >> k</code> : décalage droit logique → division entière par $2^k$<br>
<strong>Test de parité</strong> : <code>n & 1</code> vaut 1 si $n$ impair.` },
  ]},
  { titre: 'Flottants — norme IEEE 754', cartes: [
    { type:'def', label:'DEF', titre:'Norme IEEE 754 — simple précision (32 bits)',
      contenu:`Format : $(-1)^s \\times 1.m \\times 2^{e-127}$<br>
— 1 bit de signe $s$<br>
— 8 bits d'exposant biaisé $e$ (biais 127)<br>
— 23 bits de mantisse $m$ (le bit implicite "1." n'est pas stocké)<br>
<strong>Valeurs spéciales</strong> : $e=0$ (dénormalisés, zéro), $e=255$ (infini, NaN).<br>
<strong>Double précision</strong> (64 bits) : biais 1023, 11 bits exposant, 52 bits mantisse.` },
    { type:'prop', label:'PROP', titre:'Erreurs d\'arrondi et précision machine',
      contenu:`Tout réel est approximé par le flottant le plus proche.<br>
<strong>Epsilon machine</strong> $\\varepsilon_m = 2^{-23} \\approx 1.2 \\times 10^{-7}$ (simple) ou $2^{-52} \\approx 2.2 \\times 10^{-16}$ (double).<br>
<strong>Pièges courants</strong> :<br>
— $0.1$ n'est pas représentable exactement en binaire.<br>
— Ne pas comparer deux flottants avec <code>==</code>, mais avec $|a-b| < \\varepsilon$.<br>
— Catastrophe par annulation : soustraire deux grands flottants proches → perte de précision.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 5. Graphes & plus courts chemins
// ══════════════════════════════════════════════════════════════
'info-graphes': [
  { titre: 'Définitions et représentations', cartes: [
    { type:'def', label:'DEF', titre:'Graphe orienté / non orienté',
      contenu:`Un graphe $G = (V, E)$ : $V$ = ensemble de sommets, $E \\subseteq V \\times V$ = arcs (orienté) ou arêtes (non orienté).<br>
<strong>Degré</strong> d'un sommet : nombre de voisins. En orienté : degré entrant et sortant.<br>
<strong>Chemin</strong> : suite de sommets adjacents (sans répétition pour un chemin simple).<br>
<strong>Cycle</strong> : chemin dont les extrémités coïncident. <strong>DAG</strong> = Directed Acyclic Graph.` },
    { type:'prop', label:'PROP', titre:'Représentations d\'un graphe',
      contenu:`<strong>Matrice d'adjacence</strong> $A$ ($n \\times n$, $n = |V|$) : $A[i][j] = 1$ si $(i,j) \\in E$.<br>
Avantage : test d'arête en $O(1)$. Inconvénient : $O(n^2)$ espace.<br><br>
<strong>Liste d'adjacence</strong> : dictionnaire ou tableau <code>adj[v]</code> = liste des voisins de $v$.<br>
Avantage : $O(n + m)$ espace ($m = |E|$), parcours en $O(n + m)$.<br>
À utiliser pour graphes creux ($m \\ll n^2$).` },
  ]},
  { titre: 'Parcours en largeur (BFS) et profondeur (DFS)', cartes: [
    { type:'prop', label:'PROP', titre:'BFS — Breadth-First Search',
      contenu:`Explore les sommets par niveaux croissants de distance depuis la source $s$.<br>
<strong>Structure</strong> : file (FIFO).<br>
<strong>Complexité</strong> : $O(n + m)$.<br>
<strong>Propriétés</strong> :<br>
— Calcule les <strong>plus courtes distances</strong> (en nombre d'arêtes) depuis $s$ dans un graphe <em>non pondéré</em>.<br>
— Détecte la connexité d'un graphe non orienté.` },
    { type:'prop', label:'PROP', titre:'DFS — Depth-First Search',
      contenu:`Explore en profondeur, revient sur ses pas quand blocage.<br>
<strong>Structure</strong> : pile (LIFO) ou récursion.<br>
<strong>Complexité</strong> : $O(n + m)$.<br>
<strong>Propriétés</strong> :<br>
— Détecte les <strong>cycles</strong> (arête arrière dans l'arbre DFS).<br>
— Permet le <strong>tri topologique</strong> (DAG) : numéroter par ordre décroissant de fin de visite.<br>
— Calcule les <strong>composantes fortement connexes</strong> (algorithme de Kosaraju : 2 DFS).` },
  ]},
  { titre: 'Plus courts chemins', cartes: [
    { type:'prop', label:'PROP', titre:'Algorithme de Dijkstra',
      contenu:`<strong>Hypothèse</strong> : poids des arêtes $\\ge 0$.<br>
<strong>Principe</strong> : file de priorité (min-heap) sur la distance provisoire $d[v]$. À chaque étape, on extrait le sommet de distance minimale et on relâche ses voisins.<br>
<strong>Complexité</strong> avec tas binaire : $O((n + m) \\log n)$.<br>
<strong>Invariant</strong> : quand un sommet est extrait, sa distance est définitive.
<strong>Relâchement</strong> : si $d[u] + w(u,v) < d[v]$ alors $d[v] \\leftarrow d[u] + w(u,v)$.` },
    { type:'prop', label:'PROP', titre:'Algorithme de Bellman-Ford',
      contenu:`<strong>Hypothèse</strong> : autorise les poids négatifs, détecte les cycles négatifs.<br>
<strong>Principe</strong> : $n-1$ passes de relâchement sur toutes les arêtes.<br>
<strong>Complexité</strong> : $O(n \\cdot m)$.<br>
<strong>Détection de cycle négatif</strong> : si une $n$-ième passe améliore encore une distance, il existe un cycle de poids négatif.<br>
Moins efficace que Dijkstra mais plus général.` },
    { type:'prop', label:'PROP', titre:'Algorithme de Floyd-Warshall',
      contenu:`Calcule les <strong>plus courts chemins entre toutes les paires</strong> de sommets.<br>
<strong>Recurrence</strong> :
$$d^{(k)}[i][j] = \\min\\!\\left(d^{(k-1)}[i][j],\\ d^{(k-1)}[i][k] + d^{(k-1)}[k][j]\\right)$$
On ajoute progressivement les sommets comme sommets intermédiaires autorisés.<br>
<strong>Complexité</strong> : $\\Theta(n^3)$ — adapté aux graphes denses.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 6. Bases de données & SQL
// ══════════════════════════════════════════════════════════════
'info-bdd': [
  { titre: 'Modèle relationnel', cartes: [
    { type:'def', label:'DEF', titre:'Modèle relationnel — vocabulaire',
      contenu:`<strong>Relation</strong> (table) : ensemble de $n$-uplets (lignes) partageant le même schéma.<br>
<strong>Attribut</strong> : colonne, caractérisée par un nom et un domaine (type).<br>
<strong>Clé primaire</strong> : attribut(s) dont la valeur identifie de manière unique chaque $n$-uplet.<br>
<strong>Clé étrangère</strong> : attribut qui référence la clé primaire d'une autre table (contrainte d'intégrité référentielle).` },
    { type:'def', label:'DEF', titre:'Formes normales',
      contenu:`<strong>1NF</strong> : chaque attribut est atomique (pas de valeur multiple ou imbriquée).<br>
<strong>2NF</strong> : 1NF + chaque attribut non-clé dépend de la <em>totalité</em> de la clé primaire.<br>
<strong>3NF</strong> : 2NF + aucun attribut non-clé ne dépend transitivement d'un autre attribut non-clé.<br>
<strong>BCNF</strong> (Boyce-Codd) : tout déterminant d'une dépendance fonctionnelle est une super-clé.` },
  ]},
  { titre: 'Requêtes SQL', cartes: [
    { type:'form', label:'FORM', titre:'Structure d\'une requête SELECT',
      contenu:`<pre><code>SELECT   [DISTINCT] colonnes | expressions | *
FROM     table [AS alias] [JOIN ... ON ...]
WHERE    condition_lignes
GROUP BY colonne(s)
HAVING   condition_groupes
ORDER BY colonne [ASC|DESC]
LIMIT    n;</code></pre>
L'ordre d'exécution logique : FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.` },
    { type:'prop', label:'PROP', titre:'Jointures',
      contenu:`<strong>INNER JOIN</strong> : paires où la condition est vraie des deux côtés.<br>
<strong>LEFT JOIN</strong> : toutes les lignes de la table gauche + NULL pour les colonnes droite sans correspondance.<br>
<strong>RIGHT JOIN</strong> : symétrique.<br>
<strong>FULL OUTER JOIN</strong> : union des LEFT et RIGHT JOIN.<br>
<strong>CROSS JOIN</strong> : produit cartésien (rarement utile, $O(n \\times m)$ lignes).` },
    { type:'prop', label:'PROP', titre:'Fonctions d\'agrégation',
      contenu:`<code>COUNT(*)</code> : nombre de lignes<br>
<code>COUNT(DISTINCT col)</code> : nombre de valeurs distinctes non-NULL<br>
<code>SUM(col)</code>, <code>AVG(col)</code>, <code>MIN(col)</code>, <code>MAX(col)</code><br>
<strong>Règle</strong> : toute colonne dans SELECT non-agrégée doit être dans GROUP BY.<br>
<strong>Filtrer sur un agrégat</strong> : utiliser HAVING (pas WHERE qui précède l'agrégation).` },
    { type:'meth', label:'METH', titre:'Sous-requêtes et opérateurs ensemblistes',
      contenu:`<strong>Sous-requête scalaire</strong> : retourne une valeur unique, utilisable dans WHERE ou SELECT.<br>
<strong>IN / NOT IN</strong> : <code>WHERE id IN (SELECT ...)</code><br>
<strong>EXISTS</strong> : vrai si la sous-requête retourne au moins une ligne.<br>
<strong>Opérateurs ensemblistes</strong> : <code>UNION</code>, <code>INTERSECT</code>, <code>EXCEPT</code> — les colonnes doivent être compatibles.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 7. Dictionnaires & programmation dynamique
// ══════════════════════════════════════════════════════════════
'info-dico': [
  { titre: 'Tables de hachage', cartes: [
    { type:'def', label:'DEF', titre:'Table de hachage',
      contenu:`Structure associant des <strong>clés</strong> à des <strong>valeurs</strong> via une <strong>fonction de hachage</strong> $h(k) \\in [0, m-1]$.<br>
<strong>Complexité amortie</strong> : $O(1)$ en insertion, recherche et suppression (sous hypothèse uniforme).<br>
<strong>Collision</strong> : deux clés ont même image par $h$. Gestion :<br>
— <em>Chaînage séparé</em> : liste chaînée par case.<br>
— <em>Adressage ouvert</em> : sondage linéaire/quadratique dans le tableau.` },
    { type:'prop', label:'PROP', titre:'Facteur de charge et performance',
      contenu:`<strong>Facteur de charge</strong> : $\\alpha = n/m$ ($n$ = nb éléments, $m$ = taille du tableau).<br>
Avec chaînage, longueur moyenne d'une liste = $\\alpha$.<br>
Pour maintenir $O(1)$ amorti : redimensionner quand $\\alpha > $ seuil (ex. 0.75).<br>
Redimensionnement : doubler $m$, réinsérer tous les éléments → $O(n)$ mais amorti $O(1)$ par insertion.` },
  ]},
  { titre: 'Problèmes classiques de programmation dynamique', cartes: [
    { type:'meth', label:'METH', titre:'Plus longue sous-séquence commune (LCS)',
      contenu:`$X = x_1 \\dots x_m$, $Y = y_1 \\dots y_n$. On cherche la longueur de leur LCS.<br>
<strong>Recurrence</strong> :
$$c[i][j] = \\begin{cases}
0 & \\text{si } i=0 \\text{ ou } j=0 \\\\
c[i-1][j-1] + 1 & \\text{si } x_i = y_j \\\\
\\max(c[i-1][j],\\ c[i][j-1]) & \\text{sinon}
\\end{cases}$$
<strong>Complexité</strong> : $\\Theta(mn)$ temps et espace ($O(\\min(m,n))$ espace optimisé).` },
    { type:'meth', label:'METH', titre:'Sac à dos 0/1 (Knapsack)',
      contenu:`$n$ objets, objet $i$ de poids $w_i$ et valeur $v_i$, capacité $W$. Maximiser $\\sum v_i$ sans dépasser $W$.<br>
<strong>Recurrence</strong> ($dp[i][j]$ = valeur max avec les $i$ premiers objets et capacité $j$) :
$$dp[i][j] = \\begin{cases}
dp[i-1][j] & \\text{si } w_i > j \\\\
\\max(dp[i-1][j],\\ dp[i-1][j-w_i] + v_i) & \\text{sinon}
\\end{cases}$$
<strong>Complexité</strong> : $O(nW)$ — pseudo-polynomiale (NP-difficile en général).` },
    { type:'meth', label:'METH', titre:'Distance d\'édition (Levenshtein)',
      contenu:`Distance min entre deux chaînes par insertions, suppressions, substitutions.<br>
<strong>Recurrence</strong> :
$$d[i][j] = \\begin{cases}
i & \\text{si } j=0 \\\\
j & \\text{si } i=0 \\\\
d[i-1][j-1] & \\text{si } s_1[i] = s_2[j] \\\\
1 + \\min(d[i-1][j], d[i][j-1], d[i-1][j-1]) & \\text{sinon}
\\end{cases}$$
<strong>Complexité</strong> : $O(mn)$. Application : correcteur orthographique, diff.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 8. Algorithmique IA & jeux
// ══════════════════════════════════════════════════════════════
'info-ia': [
  { titre: 'Arbres de jeu et Minimax', cartes: [
    { type:'def', label:'DEF', titre:'Jeu à somme nulle à deux joueurs',
      contenu:`Deux joueurs (MAX et MIN) s'affrontent. Les gains sont opposés : ce que MAX gagne, MIN le perd.<br>
<strong>Hypothèse</strong> : jeu à information parfaite, tours alternés, horizon fini.<br>
<strong>Représentation</strong> : arbre de jeu où les nœuds sont des états et les arêtes des coups.<br>
<strong>Valeur d'un état terminal</strong> : $+1$ (victoire MAX), $-1$ (victoire MIN), $0$ (match nul).` },
    { type:'prop', label:'PROP', titre:'Algorithme Minimax',
      contenu:`Évalue récursivement tous les états :<br>
$$\\text{minimax}(s) = \\begin{cases}
\\text{heuristique}(s) & \\text{si } s \\text{ terminal ou profondeur 0} \\\\
\\max_{s' \\in \text{successeurs}(s)} \\text{minimax}(s') & \\text{si MAX joue} \\\\
\\min_{s' \\in \\text{successeurs}(s)} \\text{minimax}(s') & \\text{si MIN joue}
\\end{cases}$$
<strong>Complexité</strong> : $O(b^d)$ où $b$ = facteur de branchement, $d$ = profondeur.` },
    { type:'prop', label:'PROP', titre:'Élagage alpha-bêta',
      contenu:`Optimisation du minimax qui évite d'explorer des branches inutiles.<br>
<strong>Fenêtre</strong> $[\\alpha, \\beta]$ : $\\alpha$ = meilleur score garanti pour MAX, $\\beta$ = meilleur score garanti pour MIN.<br>
<strong>Coupure alpha</strong> (nœud MIN) : si score courant $\\le \\alpha$, couper — MAX n'ira pas ici.<br>
<strong>Coupure bêta</strong> (nœud MAX) : si score courant $\\ge \\beta$, couper — MIN n'ira pas ici.<br>
<strong>Gain</strong> : en moyenne, réduit la profondeur effective à $d/2$ (facteur $\\sqrt{b}$ sur la taille).` },
  ]},
  { titre: 'Algorithmes de recherche heuristique', cartes: [
    { type:'prop', label:'PROP', titre:'Algorithme A*',
      contenu:`Extension de Dijkstra avec une <strong>heuristique</strong> $h(n)$ estimant le coût restant jusqu'au but.<br>
<strong>Priorité</strong> : $f(n) = g(n) + h(n)$ où $g(n)$ = coût déjà parcouru.<br>
<strong>Admissibilité</strong> : $h(n) \\le h^*(n)$ (heuristique jamais surestimée) $\\Rightarrow$ A* est optimal.<br>
<strong>Consistance</strong> (monotonie) : $h(n) \\le c(n, n') + h(n')$ — garantit que chaque sommet n'est traité qu'une fois.<br>
<strong>Exemple</strong> : $h$ = distance de Manhattan pour la grille.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 9. Annexe Python
// ══════════════════════════════════════════════════════════════
'info-python': [
  { titre: 'Types et structures de données Python', cartes: [
    { type:'prop', label:'PROP', titre:'Types natifs essentiels',
      contenu:`<strong>Immuables</strong> : <code>int</code>, <code>float</code>, <code>bool</code>, <code>str</code>, <code>tuple</code>, <code>frozenset</code>, <code>bytes</code><br>
<strong>Mutables</strong> : <code>list</code>, <code>dict</code>, <code>set</code>, <code>bytearray</code><br>
<strong>Précision entière</strong> : en Python, <code>int</code> est de précision arbitraire (pas d'overflow).<br>
<strong>Division</strong> : <code>//</code> division entière, <code>/</code> flottante, <code>%</code> modulo.` },
    { type:'form', label:'FORM', titre:'Complexité des opérations sur list et dict',
      contenu:`<table>
<tr><th>Opération</th><th>list</th><th>dict</th></tr>
<tr><td>Accès indexé <code>a[i]</code></td><td>$O(1)$</td><td>$O(1)$*</td></tr>
<tr><td>Recherche <code>x in a</code></td><td>$O(n)$</td><td>$O(1)$*</td></tr>
<tr><td>Insertion en fin <code>append</code></td><td>$O(1)$*</td><td>$O(1)$*</td></tr>
<tr><td>Insertion au début</td><td>$O(n)$</td><td>—</td></tr>
<tr><td>Suppression <code>del a[i]</code></td><td>$O(n)$</td><td>$O(1)$*</td></tr>
<tr><td>Tri <code>sort()</code></td><td>$O(n\\log n)$</td><td>—</td></tr>
</table>
* amorti` },
  ]},
  { titre: 'Constructions Python importantes', cartes: [
    { type:'form', label:'FORM', titre:'Compréhensions et générateurs',
      contenu:`<pre><code># Compréhension de liste
carres = [x**2 for x in range(n) if x % 2 == 0]

# Compréhension de dictionnaire
d = {k: v for k, v in zip(keys, vals)}

# Générateur (mémoire O(1))
gen = (x**2 for x in range(n))

# sum, min, max avec générateur
total = sum(x**2 for x in range(n))</code></pre>` },
    { type:'form', label:'FORM', titre:'Fonctions importantes à connaître',
      contenu:`<code>range(start, stop, step)</code> — itérateur entiers<br>
<code>enumerate(it)</code> — paires (index, valeur)<br>
<code>zip(a, b)</code> — paires d'éléments<br>
<code>sorted(it, key=f, reverse=True)</code> — tri stable, retourne une nouvelle liste<br>
<code>heapq.heappush / heappop</code> — file de priorité min<br>
<code>collections.deque</code> — file double-ended $O(1)$ aux deux extrémités<br>
<code>collections.defaultdict(type)</code> — dictionnaire avec valeur par défaut<br>
<code>functools.lru_cache</code> — mémoïsation automatique` },
    { type:'meth', label:'METH', titre:'Implémentation de structures courantes',
      contenu:`<pre><code># Pile → list
pile = []; pile.append(x); x = pile.pop()

# File → deque
from collections import deque
q = deque(); q.append(x); x = q.popleft()

# File de priorité min
import heapq
tas = []; heapq.heappush(tas, (priorité, val))
p, v = heapq.heappop(tas)

# Graphe liste d'adjacence
from collections import defaultdict
G = defaultdict(list)
G[u].append(v)</code></pre>` },
  ]},
],

}; // fin sections

// ── Insertion ────────────────────────────────────────────────────────────────

let chapCount = 0, secCount = 0, carteCount = 0;

for (const chap of chapitres) {
  try { run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)', [chap.id, 'info', chap.titre]); chapCount++; } catch {}
  for (const fid of FILIERES) {
    try { run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)', [fid, chap.id, chap.ordre]); } catch {}
  }

  const secs = sections[chap.id] || [];
  for (let si = 0; si < secs.length; si++) {
    const sec = secs[si];
    run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)', [chap.id, sec.titre, si + 1]);
    const secId = lastId();
    secCount++;
    for (let ki = 0; ki < sec.cartes.length; ki++) {
      const c = sec.cartes[ki];
      run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
        [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
      carteCount++;
    }
  }
}

const data = db.export();
writeFileSync(DB_PATH, Buffer.from(data));
console.log(`✅ Info : ${chapCount} chapitres, ${secCount} sections, ${carteCount} cartes insérées.`);
