export const DATA = [
  {
    id: 'info-graphes',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du réseau routier au plus court trajet',
            contenu: `<strong>Énoncé.</strong> On modélise un réseau de villes par un graphe orienté pondéré. Les sommets sont numérotés de $0$ à $n-1$ et le graphe est donné par sa liste d'adjacence : <code>G[u]</code> est la liste des couples <code>(v, p)</code> signifiant qu'il existe un arc de $u$ vers $v$ de poids $p > 0$ (distance en km).

On considère le graphe à $n=6$ sommets suivant :
$$0\\to1\\ (7),\\quad 0\\to2\\ (9),\\quad 0\\to5\\ (14),\\quad 1\\to2\\ (10),\\quad 1\\to3\\ (15),\\quad 2\\to3\\ (11),\\quad 2\\to5\\ (2),\\quad 3\\to4\\ (6),\\quad 5\\to4\\ (9).$$

1. Représenter ce graphe par sa liste d'adjacence en Python (variable <code>G</code>).
2. Le réseau étant non orienté en réalité (chaque route se parcourt dans les deux sens), à quoi faut-il faire attention pour construire <code>G</code> ? Donner le nombre d'arcs alors stockés.
3. On veut tester si le sommet $4$ est <em>atteignable</em> depuis le sommet $0$ en ignorant les poids. Écrire une fonction <code>accessible(G, s, t)</code> par un parcours en largeur (BFS) renvoyant un booléen.
4. Appliquer l'algorithme de Dijkstra <em>à la main</em> depuis la source $0$ sur le graphe orienté ci-dessus : donner, étape par étape, le sommet extrait et le tableau des distances. En déduire la plus courte distance de $0$ à $4$ et un plus court chemin.
5. Pourquoi Dijkstra exige-t-il des poids positifs ? Quel algorithme vu en cours faudrait-il utiliser si certains poids pouvaient être négatifs ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Liste d'adjacence (dictionnaire ou liste de listes) :
<pre>G = [
  [(1,7),(2,9),(5,14)],   # 0
  [(2,10),(3,15)],        # 1
  [(3,11),(5,2)],         # 2
  [(4,6)],                # 3
  [],                     # 4
  [(4,9)]                 # 5
]</pre>

<strong>2.</strong> Pour un graphe non orienté, chaque arête $\\{u,v\\}$ de poids $p$ doit apparaître <em>deux fois</em> : <code>(v,p)</code> dans <code>G[u]</code> et <code>(u,p)</code> dans <code>G[v]</code>. Le graphe a $9$ arêtes, donc on stockerait $2\\times 9 = 18$ arcs. (Sur le graphe orienté de l'énoncé, on garde les $9$ arcs donnés.)

<strong>3.</strong> BFS avec une file (<code>collections.deque</code>) et un tableau de visite :
<pre>from collections import deque
def accessible(G, s, t):
    vu = [False]*len(G)
    vu[s] = True
    file = deque([s])
    while file:
        u = file.popleft()
        if u == t:
            return True
        for (v, _) in G[u]:
            if not vu[v]:
                vu[v] = True
                file.append(v)
    return False</pre>
Le BFS visite chaque sommet et chaque arc une fois : complexité $O(|S|+|A|)$. Ici <code>accessible(G,0,4)</code> renvoie <code>True</code> (chemin $0\\to2\\to5\\to4$ par exemple).

<strong>4.</strong> Dijkstra depuis $0$. On note $d$ le tableau des distances provisoires, initialisé à $+\\infty$ sauf $d[0]=0$. À chaque étape on extrait le sommet non marqué de distance minimale et on relâche ses arcs.

<table border="1" cellpadding="4">
<tr><th>Étape</th><th>Extrait</th><th>d[0]</th><th>d[1]</th><th>d[2]</th><th>d[3]</th><th>d[4]</th><th>d[5]</th></tr>
<tr><td>init</td><td>—</td><td>0</td><td>∞</td><td>∞</td><td>∞</td><td>∞</td><td>∞</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>7</td><td>9</td><td>∞</td><td>∞</td><td>14</td></tr>
<tr><td>2</td><td>1</td><td>0</td><td>7</td><td>9</td><td>22</td><td>∞</td><td>14</td></tr>
<tr><td>3</td><td>2</td><td>0</td><td>7</td><td>9</td><td>20</td><td>∞</td><td>11</td></tr>
<tr><td>4</td><td>5</td><td>0</td><td>7</td><td>9</td><td>20</td><td>20</td><td>11</td></tr>
<tr><td>5</td><td>4</td><td>0</td><td>7</td><td>9</td><td>20</td><td>20</td><td>11</td></tr>
<tr><td>6</td><td>3</td><td>0</td><td>7</td><td>9</td><td>20</td><td>20</td><td>11</td></tr>
</table>

Détails : à l'étape 3 (extraction de $2$), on relâche $2\\to3$ : $d[3]=\\min(22,\\,9+11)=20$ et $2\\to5$ : $d[5]=\\min(14,\\,9+2)=11$. À l'étape 4 (extraction de $5$), $5\\to4$ donne $d[4]=11+9=20$.

La plus courte distance de $0$ à $4$ vaut $\\boxed{20}$ km, via le chemin $0\\to2\\to5\\to4$ (poids $9+2+9$).

<strong>5.</strong> Dijkstra suppose qu'une fois un sommet extrait (de distance minimale), sa distance est définitive : c'est faux si des poids négatifs existent, car un détour ultérieur pourrait raccourcir le chemin. Avec des poids négatifs (sans cycle négatif), on utilise <strong>Bellman-Ford</strong> ($O(|S|\\cdot|A|)$), ou <strong>Floyd-Warshall</strong> ($O(|S|^3)$) pour toutes les paires.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'info-ia',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Minimax et élagage alpha-bêta sur un arbre de jeu',
            contenu: `<strong>Énoncé.</strong> On considère un jeu à deux joueurs à somme nulle. MAX joue à la racine, MIN au niveau suivant, etc. L'arbre de jeu ci-dessous a une racine MAX, ses 3 fils sont des nœuds MIN, et chaque nœud MIN a 3 fils feuilles dont les valeurs (évaluation pour MAX) sont, de gauche à droite :
$$\\text{A} : [3,\\,5,\\,6], \\qquad \\text{B} : [9,\\,1,\\,2], \\qquad \\text{C} : [0,\\,8,\\,7].$$

1. Rappeler le principe de l'algorithme Minimax. Calculer la valeur de chacun des nœuds MIN A, B, C, puis la valeur Minimax de la racine. Quel coup MAX doit-il jouer ?
2. Écrire en Python (ou pseudo-code précis) la fonction <code>minimax(noeud, est_max)</code> pour un arbre représenté par : une feuille est un entier, un nœud interne est une liste de ses fils.
3. On applique l'élagage alpha-bêta en parcourant les fils <em>de gauche à droite</em>. Pour chaque nœud MIN, indiquer quelles feuilles sont effectivement évaluées et lesquelles sont coupées. Justifier chaque coupure par la condition $\\beta \\le \\alpha$.
4. L'ordre des fils influence-t-il le résultat ? influence-t-il le nombre de coupures ? Donner pour le nœud B un ordre des feuilles qui maximiserait l'élagage.
5. En quoi une heuristique d'évaluation est-elle nécessaire dans un vrai jeu (échecs) ? Quel est le lien conceptuel avec l'algorithme A* ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Minimax explore l'arbre : MAX choisit la valeur maximale parmi ses fils, MIN la minimale, en supposant un adversaire optimal.
$$A=\\min(3,5,6)=3,\\quad B=\\min(9,1,2)=1,\\quad C=\\min(0,8,7)=0.$$
Racine $=\\max(3,1,0)=\\boxed{3}$. MAX doit jouer le coup menant à A.

<strong>2.</strong>
<pre>def minimax(noeud, est_max):
    if isinstance(noeud, int):      # feuille
        return noeud
    if est_max:
        return max(minimax(f, False) for f in noeud)
    else:
        return min(minimax(f, True)  for f in noeud)</pre>

<strong>3.</strong> Élagage alpha-bêta, $\\alpha$ = meilleure valeur garantie à MAX, $\\beta$ = meilleure garantie à MIN. Au départ $\\alpha=-\\infty$, $\\beta=+\\infty$.

<em>Nœud A</em> (MIN) : on évalue $3$ ($\\beta=3$), $5$ ($\\beta=3$), $6$ ($\\beta=3$). Aucune coupure (les valeurs ne descendent jamais sous $\\alpha=-\\infty$). $A=3$. Remontée : $\\alpha=3$ à la racine.

<em>Nœud B</em> (MIN) avec $\\alpha=3$, $\\beta=+\\infty$ : on évalue $9$ ($\\beta=9$), puis $1$ ($\\beta=1$). Or $\\beta=1 \\le \\alpha=3$ : <strong>coupure</strong>. La feuille $2$ n'est <em>pas évaluée</em>. En effet B vaudra $\\le 1 < 3$, donc MAX ne choisira jamais B : inutile de continuer. $B\\le 1$.

<em>Nœud C</em> (MIN) avec $\\alpha=3$ : on évalue $0$ ($\\beta=0$). Or $\\beta=0\\le\\alpha=3$ : <strong>coupure immédiate</strong>. Les feuilles $8$ et $7$ ne sont <em>pas évaluées</em>. $C\\le 0$.

Feuilles évaluées : A : $3,5,6$ ; B : $9,1$ ; C : $0$. Coupées : la $3^e$ de B et les $2^e,3^e$ de C. Résultat racine $=3$, identique à Minimax.

<strong>4.</strong> L'élagage ne change <em>jamais</em> le résultat (même valeur Minimax), seulement le <em>nombre</em> de nœuds visités. Il est d'autant plus efficace que les bons coups sont examinés en premier. Pour B, placer d'abord la plus petite feuille : ordre $[1,2,9]$ ou $[1,9,2]$ : après $1$, $\\beta=1\\le\\alpha=3$, coupure dès la première feuille (gain maximal).

<strong>5.</strong> Aux échecs l'arbre complet est inexplorable (facteur de branchement $\\approx 35$, profondeur énorme) : on arrête à une profondeur limite et on remplace la valeur exacte d'une feuille par une <em>heuristique</em> d'évaluation de la position. Lien avec A* : A* utilise aussi une heuristique $h$ estimant le coût restant vers le but pour guider la recherche dans un espace d'états ; dans les deux cas l'heuristique remplace une exploration exhaustive impossible et sa <em>qualité</em> conditionne l'efficacité.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'info-methprog',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Le rendu de monnaie : quatre paradigmes',
            contenu: `<strong>Énoncé.</strong> On dispose d'un système de pièces <code>P</code> (liste d'entiers strictement positifs) en quantité illimitée. Étant donné une somme $S\\in\\mathbb{N}$, on veut rendre $S$ avec le <em>nombre minimal</em> de pièces. Ce problème va servir de fil rouge pour comparer les grands paradigmes du chapitre.

1. <strong>Glouton.</strong> Écrire une fonction <code>rendu_glouton(P, S)</code> qui, à chaque étape, choisit la plus grosse pièce $\\le$ reste. L'appliquer à $P=[1,2,5]$, $S=11$ : combien de pièces ? Le glouton est-il toujours optimal ? Donner un contre-exemple avec $P=[1,3,4]$, $S=6$.
2. <strong>Récursivité / diviser pour régner.</strong> Écrire <code>rendu_rec(P, S)</code> renvoyant le nombre minimal de pièces par récurrence : $f(S)=1+\\min_{p\\in P,\\ p\\le S} f(S-p)$, avec $f(0)=0$. Pourquoi cette version est-elle exponentielle ?
3. <strong>Programmation dynamique.</strong> Transformer en une version <code>rendu_dp(P, S)</code> ascendante en $O(S\\cdot|P|)$ remplissant un tableau <code>dp[0..S]</code>. Donner le tableau <code>dp</code> pour $P=[1,3,4]$, $S=6$ et le résultat.
4. <strong>Backtracking.</strong> Expliquer en quoi le retour sur trace diffère de la programmation dynamique, et sur quel type de variante du problème (ex. : nombre de pièces de chaque type <em>limité</em>) il devient pertinent.
5. Dresser un tableau comparatif : complexité, garantie d'optimalité, et cas d'usage de chaque paradigme.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Glouton.</strong>
<pre>def rendu_glouton(P, S):
    P = sorted(P, reverse=True)
    n = 0
    for p in P:
        n += S // p
        S %= p
    return n if S == 0 else None</pre>
Sur $P=[1,2,5]$, $S=11$ : $5+5+1$, soit $3$ pièces. <em>Pas toujours optimal</em> : pour $P=[1,3,4]$, $S=6$, le glouton prend $4$ puis $1+1$, soit $3$ pièces, alors que $3+3$ ne fait que $\\boxed{2}$ pièces.

<strong>2. Récursif.</strong>
<pre>def rendu_rec(P, S):
    if S == 0:
        return 0
    best = float('inf')
    for p in P:
        if p <= S:
            best = min(best, 1 + rendu_rec(P, S - p))
    return best</pre>
Exponentiel car les mêmes sous-problèmes $f(S-p)$ sont recalculés un nombre exponentiel de fois (arbre d'appels redondant) : aucune mémorisation.

<strong>3. Programmation dynamique (ascendante).</strong>
<pre>def rendu_dp(P, S):
    INF = float('inf')
    dp = [0] + [INF]*S
    for s in range(1, S+1):
        for p in P:
            if p <= s and dp[s-p] + 1 < dp[s]:
                dp[s] = dp[s-p] + 1
    return dp[S]</pre>
Pour $P=[1,3,4]$, $S=6$ :
$$dp=[0,\\,1,\\,2,\\,1,\\,1,\\,2,\\,2].$$
Détail : $dp[1]=1$ (une pièce de 1), $dp[2]=2$, $dp[3]=1$ (pièce 3), $dp[4]=1$ (pièce 4), $dp[5]=\\min(dp[4],dp[2],dp[1])+1=2$, $dp[6]=\\min(dp[5],dp[3],dp[2])+1=dp[3]+1=2$. Résultat : $\\boxed{2}$ pièces (optimal, contrairement au glouton). Complexité $O(S\\cdot|P|)$.

<strong>4. Backtracking.</strong> La DP exploite la <em>structure</em> du problème (sous-problèmes indépendants chevauchants) et calcule directement l'optimum. Le backtracking <em>énumère</em> les combinaisons en construisant une solution pièce par pièce et en <em>élaguant</em> les branches sans espoir (ex. : reste $<0$, ou nombre courant $\\ge$ meilleur connu). Il devient pertinent quand l'état n'est plus un simple entier $S$ : par exemple si chaque type de pièce existe en quantité <em>limitée</em>, l'état inclut les stocks restants et la DP simple ne suffit plus ; le backtracking explore alors l'espace des choix avec contraintes.

<strong>5. Comparatif.</strong>
<table border="1" cellpadding="4">
<tr><th>Paradigme</th><th>Complexité</th><th>Optimal ?</th><th>Usage</th></tr>
<tr><td>Glouton</td><td>$O(|P|\\log|P|)$</td><td>Non (sauf systèmes canoniques)</td><td>Rapide, choix localement optimal</td></tr>
<tr><td>Récursif naïf</td><td>exponentielle</td><td>Oui</td><td>Spécification claire, inutilisable tel quel</td></tr>
<tr><td>Prog. dynamique</td><td>$O(S\\cdot|P|)$</td><td>Oui</td><td>Sous-problèmes chevauchants</td></tr>
<tr><td>Backtracking</td><td>exp. (avec élagage)</td><td>Oui</td><td>Contraintes, espace d'états complexe</td></tr>
</table>
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'info-nombres',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du binaire au flottant : conversions, complément à deux et arrondi',
            contenu: `<strong>Énoncé.</strong> Cet exercice parcourt la représentation machine des nombres, des entiers aux flottants.

1. <strong>Bases.</strong> Convertir $214$ (décimal) en binaire sur $8$ bits, puis en hexadécimal. Inversement, donner la valeur décimale de <code>0b10110011</code>.
2. <strong>Complément à deux.</strong> Sur $8$ bits signés, donner la représentation de $-42$. Quel est l'intervalle des entiers représentables ? Effectuer l'addition binaire $(-42)+(70)$ en complément à deux et vérifier le résultat.
3. <strong>Dépassement.</strong> Sur $8$ bits signés, on calcule $100+50$. Que vaut le résultat machine ? Expliquer le phénomène de <em>dépassement de capacité (overflow)</em> et comment il se détecte sur les bits de signe.
4. <strong>Flottants IEEE 754.</strong> En simple précision (1 bit de signe, 8 bits d'exposant biaisé de $127$, 23 bits de mantisse), donner la représentation du réel $-6{,}5$. Détailler le calcul.
5. <strong>Erreurs d'arrondi.</strong> Expliquer pourquoi <code>0.1 + 0.2 == 0.3</code> renvoie <code>False</code> en Python. Que vaut alors <code>0.1 + 0.2</code> à très peu près, et comment teste-t-on correctement l'égalité de deux flottants ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $214 = 128+64+16+4+2 = 11010110_2$. Par paquets de 4 bits : $1101\\,0110 = \\text{D6}_{16}$. Inversement $10110011_2 = 128+32+16+2+1 = \\boxed{179}$.

<strong>2. Complément à deux.</strong> $42 = 00101010_2$. Inversion bit à bit : $11010101$, $+1$ : $11010110_2$, donc $-42 = 11010110_2$ (soit $\\text{D6}$). Intervalle sur 8 bits signés : $[-128,\\,127]$.
Addition $(-42)+70$ : $70=01000110_2$.
$$11010110 + 01000110 = 1\\,00011100_2.$$
Le $9^e$ bit (retenue) est ignoré : il reste $00011100_2 = 28$. Vérification : $-42+70=\\boxed{28}$. Pas d'overflow car les deux opérandes sont de signes opposés.

<strong>3. Dépassement.</strong> $100=01100100_2$, $50=00110010_2$.
$$01100100+00110010 = 10010110_2.$$
Ce résultat, interprété en signé, vaut $10010110_2 \\to -(01101010_2)=-106$. Le résultat machine est donc $-106$ au lieu de $150$ : <strong>overflow</strong>, car $150 > 127$ sort de l'intervalle. Détection : on additionne deux nombres positifs (bit de signe $0$) et on obtient un bit de signe $1$ ; plus généralement, overflow ssi les opérandes ont le même signe et le résultat le signe opposé.

<strong>4. IEEE 754 simple précision pour $-6{,}5$.</strong>
$6{,}5 = 110{,}1_2 = 1{,}101_2 \\times 2^{2}$.
Signe : $1$ (négatif). Exposant biaisé : $2+127 = 129 = 10000001_2$. Mantisse (les bits après la virgule, complétés de zéros) : $101\\,0000\\ldots0$ (23 bits).
$$-6{,}5 \\;=\\; \\underbrace{1}_{\\text{signe}}\\ \\underbrace{10000001}_{\\text{exposant}}\\ \\underbrace{10100000000000000000000}_{\\text{mantisse}}.$$
En hexadécimal : <code>0xC0D00000</code>.

<strong>5. Erreurs d'arrondi.</strong> Les réels $0{,}1$, $0{,}2$, $0{,}3$ n'ont pas d'écriture binaire <em>finie</em> (développement périodique) : ils sont stockés arrondis. La somme des arrondis de $0{,}1$ et $0{,}2$ diffère de l'arrondi de $0{,}3$. Concrètement <code>0.1 + 0.2</code> $\\approx 0{,}30000000000000004$, donc le test d'égalité stricte échoue. On teste l'égalité à une tolérance près :
<pre>abs((0.1 + 0.2) - 0.3) < 1e-9   # True
# ou  math.isclose(0.1+0.2, 0.3)</pre>
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'info-python',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Analyse de texte : structures, mutabilité et compréhensions',
            contenu: `<strong>Énoncé.</strong> On dispose d'un texte sous forme d'une liste de mots (chaînes en minuscules), par exemple :
<pre>mots = ["le", "chat", "le", "chien", "et", "le", "chat", "dort"]</pre>
Cet exercice mobilise les types séquentiels, les dictionnaires/ensembles, les compréhensions, la portée et la mutabilité.

1. <strong>Ensembles &amp; compréhensions.</strong> Écrire une expression construisant l'<em>ensemble</em> des mots distincts, puis la liste des mots de longueur $\\ge 4$ (par compréhension). Donner les résultats sur l'exemple.
2. <strong>Dictionnaire de fréquences.</strong> Écrire une fonction <code>frequences(mots)</code> renvoyant un dictionnaire mot $\\to$ nombre d'occurrences. Donner le dictionnaire obtenu.
3. <strong>Mutabilité &amp; références.</strong> Expliquer ce qu'affiche le code suivant et pourquoi :
<pre>def ajoute(x, liste=[]):
    liste.append(x)
    return liste
print(ajoute(1))
print(ajoute(2))</pre>
Corriger la fonction pour qu'elle ait le comportement attendu.
4. <strong>Portée.</strong> Expliquer l'erreur du code ci-dessous et la corriger :
<pre>compteur = 0
def incr():
    compteur = compteur + 1
incr()</pre>
5. <strong>Exceptions.</strong> Écrire <code>freq_mot(mots, m)</code> qui renvoie la fréquence relative (entre 0 et 1) du mot <code>m</code>, et lève une <code>ValueError</code> avec un message clair si la liste est vide. Encadrer un appel par un <code>try/except</code>.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong>
<pre>distincts = set(mots)
longs = [m for m in mots if len(m) >= 4]</pre>
Résultats : <code>distincts = {'le','chat','chien','et','dort'}</code> (5 éléments, ordre non garanti) ; <code>longs = ['chat','chien','chat','dort']</code>.

<strong>2.</strong>
<pre>def frequences(mots):
    d = {}
    for m in mots:
        d[m] = d.get(m, 0) + 1
    return d</pre>
Résultat : <code>{'le': 3, 'chat': 2, 'chien': 1, 'et': 1, 'dort': 1}</code>.

<strong>3.</strong> Affichage : <code>[1]</code> puis <code>[1, 2]</code>. Piège classique : la valeur par défaut <code>liste=[]</code> est évaluée <em>une seule fois</em> à la définition ; cette même liste mutable est réutilisée et conserve son contenu entre les appels. Correction :
<pre>def ajoute(x, liste=None):
    if liste is None:
        liste = []
    liste.append(x)
    return liste</pre>
Désormais <code>ajoute(1)</code> $\\to$ <code>[1]</code> et <code>ajoute(2)</code> $\\to$ <code>[2]</code>.

<strong>4.</strong> Erreur : <code>UnboundLocalError</code>. Comme <code>incr</code> <em>affecte</em> <code>compteur</code>, Python le considère comme une variable <em>locale</em> ; sa lecture <code>compteur + 1</code> a lieu avant toute affectation locale. Correction avec <code>global</code> (ou en passant/retournant la valeur) :
<pre>compteur = 0
def incr():
    global compteur
    compteur = compteur + 1</pre>

<strong>5.</strong>
<pre>def freq_mot(mots, m):
    if not mots:
        raise ValueError("liste de mots vide")
    return mots.count(m) / len(mots)

try:
    print(freq_mot([], "le"))
except ValueError as e:
    print("Erreur :", e)</pre>
Sur l'exemple, <code>freq_mot(mots, "le")</code> renvoie $3/8 = 0{,}375$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'info-s1',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Tri par insertion : correction, terminaison et complexité',
            contenu: `<strong>Énoncé.</strong> On étudie le <em>tri par insertion</em> d'un tableau d'entiers <code>t</code> de longueur $n$, puis la recherche dichotomique dans le tableau trié. L'exercice croise terminaison, correction (invariant), notations de Landau et coûts.

<pre>def tri_insertion(t):
    for i in range(1, len(t)):
        cle = t[i]
        j = i - 1
        while j >= 0 and t[j] > cle:
            t[j+1] = t[j]
            j = j - 1
        t[j+1] = cle</pre>

1. <strong>Terminaison.</strong> Justifier que la boucle <code>while</code> interne termine en exhibant un <em>variant</em> de boucle (quantité entière qui décroît strictement et reste minorée).
2. <strong>Correction.</strong> Énoncer l'<em>invariant</em> de la boucle <code>for</code> externe et expliquer pourquoi il prouve que <code>t</code> est trié à la fin.
3. <strong>Complexité.</strong> Déterminer le coût en nombre de comparaisons dans le <em>meilleur cas</em> et dans le <em>pire cas</em>, en fonction de $n$. Donner pour chacun la classe de Landau ($\\Theta$). Quel est le pire cas (forme du tableau d'entrée) ?
4. Comparer cette complexité au pire cas à celle du tri fusion. Pourquoi le tri par insertion reste-t-il utilisé en pratique pour de petits tableaux ?
5. <strong>Recherche dichotomique.</strong> Écrire <code>recherche_dicho(t, x)</code> sur un tableau <em>trié</em>, renvoyant un indice de <code>x</code> ou <code>-1</code>. Donner sa complexité et la justifier par la taille de l'intervalle de recherche.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1. Terminaison.</strong> Considérons $V = j+1$ dans la boucle <code>while</code>. À chaque itération <code>j = j-1</code> donc $V$ <em>décroît strictement</em> de 1. De plus la condition de boucle impose $j\\ge 0$, donc $V\\ge 1 > 0$ : $V$ est un entier minoré qui décroît strictement, la boucle s'arrête après un nombre fini d'itérations (au plus $i$).

<strong>2. Correction.</strong> Invariant de la boucle externe : <em>au début de l'itération d'indice $i$, le sous-tableau <code>t[0..i-1]</code> contient les mêmes éléments qu'initialement, triés par ordre croissant.</em>
— Initialisation ($i=1$) : <code>t[0..0]</code> est trivialement trié.
— Conservation : le corps insère <code>t[i]</code> à sa place parmi <code>t[0..i-1]</code> en décalant les éléments plus grands, d'où <code>t[0..i]</code> trié.
— Terminaison ($i=n$) : <code>t[0..n-1]</code> est trié, donc tout le tableau l'est.

<strong>3. Complexité.</strong>
— <em>Meilleur cas</em> : tableau déjà trié. La condition <code>t[j] > cle</code> est fausse d'emblée, $1$ comparaison par tour : $n-1$ comparaisons, soit $\\Theta(n)$.
— <em>Pire cas</em> : tableau trié <em>en ordre décroissant</em>. À l'étape $i$ on fait $i$ comparaisons :
$$\\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2} = \\Theta(n^2).$$

<strong>4.</strong> Le tri fusion est en $\\Theta(n\\log n)$ au pire, bien meilleur asymptotiquement. Mais le tri par insertion a des constantes faibles, fonctionne en place et sans récursion ; il est efficace sur de petits tableaux ou des tableaux <em>presque triés</em> (quasi $\\Theta(n)$). D'où son usage comme cas de base dans les tris hybrides.

<strong>5. Recherche dichotomique.</strong>
<pre>def recherche_dicho(t, x):
    g, d = 0, len(t) - 1
    while g <= d:
        m = (g + d) // 2
        if t[m] == x:
            return m
        elif t[m] < x:
            g = m + 1
        else:
            d = m - 1
    return -1</pre>
À chaque tour la taille de l'intervalle $[g,d]$ est divisée par $2$. Partant de $n$, le nombre de tours est $\\lfloor\\log_2 n\\rfloor + 1$, d'où une complexité $\\Theta(\\log n)$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-algo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'La plus longue sous-séquence : trois stratégies',
            contenu: `<strong>Énoncé (Terminale NSI).</strong> Cet exercice mobilise recherche/tri, diviser pour régner, programmation dynamique et approche gloutonne.

<strong>Partie A — Recherche et tri.</strong> On considère le tableau <code>t = [5, 2, 8, 1, 9, 3]</code>.
1. Écrire une fonction <code>maximum(t)</code> qui renvoie le plus grand élément, et donner sa complexité.
2. On trie <code>t</code> par <em>tri par sélection</em>. Décrire les 3 premières étapes (état du tableau après chaque sélection) et donner la complexité au pire cas.

<strong>Partie B — Diviser pour régner.</strong>
3. Écrire une fonction récursive <code>somme_max(t, g, d)</code> calculant la somme des éléments de l'indice <code>g</code> à <code>d</code> par division en deux moitiés. Quel est l'intérêt (et la limite) de l'approche diviser pour régner ici ?

<strong>Partie C — Programmation dynamique.</strong> On cherche la longueur de la plus longue sous-séquence <em>strictement croissante</em> de <code>t</code> (les éléments choisis gardent leur ordre mais ne sont pas forcément contigus).
4. On pose <code>L[i]</code> = longueur de la plus longue sous-séquence croissante <em>se terminant</em> à l'indice <code>i</code>. Donner la relation de récurrence définissant <code>L[i]</code>, puis remplir le tableau <code>L</code> pour <code>t = [5, 2, 8, 1, 9, 3]</code>. En déduire la réponse.
5. Comparer brièvement : pour quel type de problème la programmation dynamique est-elle préférable à une approche gloutonne ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong>
<pre>def maximum(t):
    m = t[0]
    for x in t[1:]:
        if x > m:
            m = x
    return m</pre>
Un seul parcours : complexité $\\Theta(n)$. Ici <code>maximum(t) = 9</code>.

<strong>2. Tri par sélection.</strong> On place à chaque étape le plus petit élément restant en tête.
— Étape 1 : min $=1$ échangé avec $t[0]$ : $[1,\\,2,\\,8,\\,5,\\,9,\\,3]$.
— Étape 2 : min du reste $=2$, déjà en place : $[1,\\,2,\\,8,\\,5,\\,9,\\,3]$.
— Étape 3 : min du reste $=3$ échangé avec $t[2]$ : $[1,\\,2,\\,3,\\,5,\\,9,\\,8]$.
Complexité : $\\sum_{i} (n-i) = \\Theta(n^2)$ comparaisons dans tous les cas.

<strong>3. Diviser pour régner.</strong>
<pre>def somme_max(t, g, d):
    if g == d:
        return t[g]
    m = (g + d) // 2
    return somme_max(t, g, m) + somme_max(t, m+1, d)</pre>
On découpe l'intervalle en deux, on résout chaque moitié, on combine (ici par addition). L'intérêt est la structure récursive claire ; la limite est qu'une simple somme se calcule tout aussi bien par un parcours linéaire $\\Theta(n)$ : diviser pour régner n'apporte un gain que lorsque la combinaison est plus efficace que le recalcul (cf. tri fusion).

<strong>4. Plus longue sous-séquence croissante.</strong> Récurrence :
$$L[i] = 1 + \\max\\,\\{\\,L[j]\\ :\\ j<i \\text{ et } t[j] < t[i]\\,\\},$$
et $L[i]=1$ si aucun tel $j$ n'existe.
Pour $t=[5,2,8,1,9,3]$ :
<table border="1" cellpadding="4">
<tr><th>i</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><th>t[i]</th><td>5</td><td>2</td><td>8</td><td>1</td><td>9</td><td>3</td></tr>
<tr><th>L[i]</th><td>1</td><td>1</td><td>2</td><td>1</td><td>3</td><td>2</td></tr>
</table>
Détail : $L[2]=2$ (via $5{\\to}8$ ou $2{\\to}8$), $L[4]=3$ (ex. $5{\\to}8{\\to}9$), $L[5]=2$ (via $2{\\to}3$ ou $1{\\to}3$). Réponse : $\\max L = \\boxed{3}$ (sous-séquence $[5,8,9]$ ou $[2,8,9]$).

<strong>5.</strong> La programmation dynamique est nécessaire quand un choix glouton local ne garantit pas l'optimum global et que les sous-problèmes se <em>chevauchent</em> (comme ici : $L[i]$ dépend de tous les $L[j]$ antérieurs). L'approche gloutonne ne convient que lorsqu'un choix localement optimal mène prouvablement à l'optimum global (propriété du choix glouton), ce qui n'est pas le cas pour la plus longue sous-séquence croissante.
</details>`
          }
        ]
      }
    ]
  }
]
