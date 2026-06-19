export const DATA = [
  {
    id: 'nsi-arbres',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Arbre binaire de recherche : construction, parcours et hauteur',
            contenu: `<strong>Énoncé.</strong> On manipule des arbres binaires dont les nœuds portent un entier (la <em>clé</em>). On adopte l'implémentation Python suivante :
<pre><code>class Noeud:
    def __init__(self, cle, gauche=None, droit=None):
        self.cle = cle
        self.gauche = gauche
        self.droit = droit</code></pre>
On insère successivement dans un <strong>arbre binaire de recherche</strong> (ABR), initialement vide, les clés : $8,\\ 3,\\ 10,\\ 1,\\ 6,\\ 14,\\ 4,\\ 7,\\ 13$.

<strong>1.</strong> Dessiner l'ABR obtenu et donner sa hauteur (le nombre d'arêtes du plus long chemin de la racine à une feuille).

<strong>2.</strong> Donner la liste des clés produite par le parcours <strong>infixe</strong> (gauche, racine, droit) de cet arbre. Que constate-t-on et pourquoi ?

<strong>3.</strong> Écrire une fonction récursive <code>inserer(racine, cle)</code> qui renvoie la racine de l'ABR après insertion de <code>cle</code> (insertion en feuille, doublons ignorés).

<strong>4.</strong> Écrire une fonction récursive <code>hauteur(racine)</code> renvoyant la hauteur de l'arbre (par convention $-1$ pour l'arbre vide, $0$ pour une feuille).

<strong>5.</strong> Écrire une fonction <code>recherche(racine, cle)</code> renvoyant <code>True</code> si la clé est présente, et préciser sa complexité dans le pire cas en fonction de la hauteur $h$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Insertion à la racine de $8$, puis $3<8$ à gauche, $10>8$ à droite, etc. On obtient :
<pre>
            8
          /   \\
         3      10
        / \\       \\
       1   6       14
          / \\     /
         4   7   13
</pre>
Le plus long chemin est $8 \\to 3 \\to 6 \\to 4$ (ou $\\to 7$), soit $3$ arêtes. La <strong>hauteur vaut $3$</strong>.

<strong>2.</strong> Le parcours infixe donne : $1,\\ 3,\\ 4,\\ 6,\\ 7,\\ 8,\\ 10,\\ 13,\\ 14$. La liste est <strong>triée par ordre croissant</strong> : c'est une propriété caractéristique de l'ABR, car en tout nœud les clés du sous-arbre gauche sont inférieures à la clé du nœud, elles-mêmes inférieures à celles du sous-arbre droit.

<strong>3.</strong>
<pre><code>def inserer(racine, cle):
    if racine is None:
        return Noeud(cle)
    if cle < racine.cle:
        racine.gauche = inserer(racine.gauche, cle)
    elif cle > racine.cle:
        racine.droit = inserer(racine.droit, cle)
    return racine   # cle deja presente : on ne change rien</code></pre>

<strong>4.</strong>
<pre><code>def hauteur(racine):
    if racine is None:
        return -1
    return 1 + max(hauteur(racine.gauche), hauteur(racine.droit))</code></pre>

<strong>5.</strong>
<pre><code>def recherche(racine, cle):
    if racine is None:
        return False
    if cle == racine.cle:
        return True
    if cle < racine.cle:
        return recherche(racine.gauche, cle)
    return recherche(racine.droit, cle)</code></pre>
À chaque appel on descend d'un niveau, donc on fait au plus $h+1$ comparaisons : la complexité dans le pire cas est en $O(h)$. Pour un ABR équilibré $h \\approx \\log_2 n$, d'où $O(\\log n)$ ; mais si l'arbre est dégénéré (clés insérées déjà triées), $h = n-1$ et la recherche devient $O(n)$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-architecture',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du von Neumann aux portes logiques : un additionneur 1 bit',
            contenu: `<strong>Énoncé.</strong> Un processeur suit le modèle de <strong>von Neumann</strong> : il exécute le cycle <em>chargement → décodage → exécution</em> en allant chercher instructions et données dans une mémoire unique. On s'intéresse à l'unité arithmétique qui réalise l'addition binaire.

<strong>1.</strong> Citer les quatre grandes unités du modèle de von Neumann et expliquer en une phrase ce qu'on appelle le « goulot d'étranglement de von Neumann ».

<strong>2.</strong> Convertir l'entier $-6$ en complément à deux sur $8$ bits, puis vérifier en calculant $(\\text{code de } +6) + (\\text{code de } -6)$ sur $8$ bits.

<strong>3.</strong> On veut additionner deux bits $a$ et $b$ avec une retenue entrante $r_e$, et produire un bit de somme $s$ et une retenue sortante $r_s$ (additionneur 1 bit complet). Donner la table de vérité des deux sorties $s$ et $r_s$ en fonction de $a,\\ b,\\ r_e$.

<strong>4.</strong> En déduire les expressions logiques de $s$ et $r_s$ à l'aide des portes ET ($\\cdot$), OU ($+$) et OU EXCLUSIF ($\\oplus$).

<strong>5.</strong> On enchaîne $32$ tels additionneurs pour former l'ALU $32$ bits du processeur. Quel phénomène physique limite la fréquence d'horloge ? Comment relier cela à la notion de performance vue en cours ?

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Les quatre unités : <strong>unité de commande</strong>, <strong>unité arithmétique et logique (UAL/ALU)</strong>, <strong>mémoire</strong>, <strong>unités d'entrée/sortie</strong>. Le « goulot d'étranglement de von Neumann » : instructions et données transitant par le même bus entre la mémoire et le processeur, le débit de ce bus limite la vitesse globale, le processeur attendant souvent la mémoire.

<strong>2.</strong> $+6 = 0000\\,0110$. Complément à deux : on inverse tous les bits ($1111\\,1001$) puis on ajoute $1$, d'où $-6 = 1111\\,1010$. Vérification :
$$0000\\,0110 + 1111\\,1010 = 1\\,0000\\,0000.$$
Sur $8$ bits la retenue finale est ignorée, le résultat est $0000\\,0000 = 0$. Cohérent.

<strong>3.</strong> Table de vérité :
<pre>
a b re | s rs
0 0 0  | 0 0
0 0 1  | 1 0
0 1 0  | 1 0
0 1 1  | 0 1
1 0 0  | 1 0
1 0 1  | 0 1
1 1 0  | 0 1
1 1 1  | 1 1
</pre>

<strong>4.</strong> La somme vaut $1$ quand un nombre <em>impair</em> d'entrées vaut $1$ : $s = a \\oplus b \\oplus r_e$. La retenue sortante vaut $1$ dès qu'au moins deux entrées valent $1$ :
$$r_s = (a \\cdot b) + (a \\cdot r_e) + (b \\cdot r_e).$$

<strong>5.</strong> Dans un additionneur à propagation de retenue, la retenue doit traverser les $32$ étages l'un après l'autre : c'est le <strong>temps de propagation</strong> des portes (délai des transistors) qui fixe la durée du chemin critique. La fréquence d'horloge ne peut dépasser l'inverse de ce délai, sinon le résultat n'est pas stabilisé. Performance = travail par seconde ; on l'augmente en réduisant ce chemin critique (additionneurs à anticipation de retenue), en montant la fréquence ou en parallélisant (plusieurs cœurs/pipeline).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-bdd',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Base relationnelle d\'une médiathèque : du modèle aux requêtes SQL',
            contenu: `<strong>Énoncé.</strong> Une médiathèque gère ses prêts avec le schéma relationnel suivant (les clés primaires sont soulignées, les clés étrangères suivies de #) :
<pre>
Adherent(<u>id_adh</u>, nom, ville)
Livre(<u>id_livre</u>, titre, auteur, annee)
Pret(<u>id_pret</u>, id_adh#, id_livre#, date_pret, date_retour)
</pre>
Une <code>date_retour</code> valant <code>NULL</code> signifie que le livre n'est pas encore rendu.

<strong>1.</strong> Quel attribut de <code>Pret</code> garantit l'unicité d'une ligne ? Expliquer le rôle des deux clés étrangères et donner une contrainte d'intégrité référentielle qu'elles imposent.

<strong>2.</strong> Écrire une requête SQL listant les titres des livres publiés après $2010$, triés par année décroissante.

<strong>3.</strong> Écrire une requête affichant le nom de chaque adhérent et le titre des livres qu'il a empruntés mais <em>pas encore rendus</em>.

<strong>4.</strong> Écrire une requête donnant, pour chaque ville, le nombre total de prêts effectués par les adhérents de cette ville, en ne gardant que les villes ayant strictement plus de $5$ prêts.

<strong>5.</strong> Écrire l'instruction qui enregistre le retour aujourd'hui (<code>'2026-06-14'</code>) du prêt d'identifiant $42$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> L'attribut <code>id_pret</code> est la clé primaire : il identifie de façon unique chaque ligne de <code>Pret</code>. <code>id_adh</code> et <code>id_livre</code> sont des clés étrangères référençant respectivement <code>Adherent</code> et <code>Livre</code>. Contrainte d'intégrité référentielle : toute valeur de <code>id_adh</code> dans <code>Pret</code> doit exister comme <code>id_adh</code> dans <code>Adherent</code> (idem pour les livres) — impossible de prêter à un adhérent ou un livre inexistant.

<strong>2.</strong>
<pre><code>SELECT titre
FROM Livre
WHERE annee > 2010
ORDER BY annee DESC;</code></pre>

<strong>3.</strong> On joint les trois tables et on filtre les prêts en cours :
<pre><code>SELECT Adherent.nom, Livre.titre
FROM Pret
JOIN Adherent ON Pret.id_adh = Adherent.id_adh
JOIN Livre    ON Pret.id_livre = Livre.id_livre
WHERE Pret.date_retour IS NULL;</code></pre>
On teste bien <code>IS NULL</code> (et non <code>= NULL</code>, qui est toujours faux en SQL).

<strong>4.</strong> Agrégat avec regroupement par ville et filtre sur le groupe :
<pre><code>SELECT Adherent.ville, COUNT(*) AS nb_prets
FROM Pret
JOIN Adherent ON Pret.id_adh = Adherent.id_adh
GROUP BY Adherent.ville
HAVING COUNT(*) > 5;</code></pre>
<code>WHERE</code> filtre les lignes <em>avant</em> regroupement, <code>HAVING</code> filtre <em>après</em> agrégation : c'est ici <code>HAVING</code> qu'il faut.

<strong>5.</strong> Mise à jour :
<pre><code>UPDATE Pret
SET date_retour = '2026-06-14'
WHERE id_pret = 42;</code></pre>
La clause <code>WHERE</code> est indispensable : sans elle, toutes les lignes seraient modifiées.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-calculabilite',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Terminaison, correction et le problème de l\'arrêt',
            contenu: `<strong>Énoncé.</strong> On considère la fonction suivante, qui calcule le PGCD par l'algorithme d'Euclide :
<pre><code>def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a</code></pre>
On rappelle que pour $a \\ge 0$ et $b > 0$, $a \\bmod b$ est un entier de $\\{0, 1, \\dots, b-1\\}$.

<strong>1.</strong> Donner un <strong>variant de boucle</strong> (quantité entière positive strictement décroissante) prouvant la <strong>terminaison</strong> de la boucle <code>while</code>. Justifier.

<strong>2.</strong> Donner un <strong>invariant de boucle</strong> reliant la valeur courante de $\\pgcd(a,b)$ à la valeur cherchée, et expliquer en quoi il assure la <strong>correction</strong> de l'algorithme.

<strong>3.</strong> On suppose qu'existe une fonction <code>termine(f, x)</code> qui renvoie <code>True</code> si l'appel <code>f(x)</code> s'arrête, <code>False</code> sinon, et ce <strong>pour toute</strong> fonction <code>f</code> et entrée <code>x</code>. Construire la fonction « diagonale » :
<pre><code>def piege(f):
    if termine(f, f):
        while True:
            pass
    else:
        return 0</code></pre>
Étudier ce qui se passe lors de l'appel <code>piege(piege)</code>. Quelle conclusion en tirer sur l'existence de <code>termine</code> ?

<strong>4.</strong> Une fois ce résultat établi, peut-on espérer un programme qui, donné le code de n'importe quelle fonction, détecte automatiquement et sans erreur si elle boucle ? Comment nomme-t-on une telle propriété ?

<strong>5.</strong> Distinguer en une phrase chacun : <em>terminaison</em>, <em>correction</em>, <em>décidabilité</em>.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> On prend pour variant la valeur de $b$. À chaque tour, $b$ devient $a \\bmod b$, qui appartient à $\\{0,\\dots,b-1\\}$ : il est positif et <strong>strictement inférieur</strong> à l'ancien $b$. Une suite d'entiers naturels strictement décroissante est finie ; donc $b$ atteint $0$ et la boucle s'arrête. La terminaison est prouvée.

<strong>2.</strong> Invariant : <em>« $\\pgcd(a, b)$ est égal au PGCD des deux entiers d'origine $a_0, b_0$ »</em>. Il est vrai avant la boucle. Il se maintient car $\\pgcd(a, b) = \\pgcd(b, a \\bmod b)$ (propriété d'Euclide), exactement la mise à jour effectuée. À la sortie, $b = 0$ et $\\pgcd(a, 0) = a$ ; l'invariant donne alors $a = \\pgcd(a_0, b_0)$ : la valeur renvoyée est correcte.

<strong>3.</strong> Examinons <code>piege(piege)</code>. Par définition de <code>termine</code> :
<ul>
<li>Si <code>termine(piege, piege)</code> vaut <code>True</code>, alors <code>piege(piege)</code> entre dans la boucle <code>while True</code> et <strong>ne s'arrête pas</strong> — contradiction avec <code>True</code>.</li>
<li>Si <code>termine(piege, piege)</code> vaut <code>False</code>, alors <code>piege(piege)</code> exécute <code>return 0</code> et <strong>s'arrête</strong> — contradiction avec <code>False</code>.</li>
</ul>
Dans les deux cas, contradiction. L'hypothèse « <code>termine</code> existe et est toujours correcte » est donc absurde : <strong>une telle fonction n'existe pas</strong>.

<strong>4.</strong> Non : le <strong>problème de l'arrêt est indécidable</strong>. Aucun programme ne peut décider, pour tout couple (code, entrée), s'il s'arrête. On dit que cette propriété (ce langage) est <strong>indécidable</strong>.

<strong>5.</strong> <em>Terminaison</em> : le programme s'arrête sur toute entrée valide. <em>Correction</em> : quand il s'arrête, il renvoie le bon résultat (conforme à la spécification). <em>Décidabilité</em> : il existe un algorithme qui répond toujours, en temps fini, par oui ou non à un problème de décision donné.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-graphes',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Réseau de métro : représentation, parcours et plus court chemin',
            contenu: `<strong>Énoncé.</strong> On modélise un petit réseau par un graphe <strong>non orienté</strong> dont les sommets sont des stations $A, B, C, D, E$ et les arêtes sont les liaisons directes :
$$A\\!-\\!B,\\quad A\\!-\\!C,\\quad B\\!-\\!C,\\quad B\\!-\\!D,\\quad C\\!-\\!E,\\quad D\\!-\\!E.$$

<strong>1.</strong> Donner le <strong>degré</strong> de chaque sommet. Le graphe est-il connexe ? Justifier.

<strong>2.</strong> Donner la <strong>matrice d'adjacence</strong> du graphe (sommets dans l'ordre $A,B,C,D,E$), puis sa représentation par <strong>listes d'adjacence</strong> (dictionnaire Python).

<strong>3.</strong> Dérouler un parcours en <strong>largeur (BFS)</strong> depuis $A$ : donner l'ordre de visite des sommets (voisins explorés dans l'ordre alphabétique). En déduire la distance (en nombre d'arêtes) de $A$ à chaque autre sommet.

<strong>4.</strong> Donner un plus court chemin de $A$ à $E$ et expliquer pourquoi le BFS le trouve sur un graphe <strong>non pondéré</strong>.

<strong>5.</strong> On pondère maintenant chaque arête par un temps de trajet : $A\\!-\\!B:2$, $A\\!-\\!C:5$, $B\\!-\\!C:1$, $B\\!-\\!D:4$, $C\\!-\\!E:2$, $D\\!-\\!E:1$. À l'aide de l'algorithme de <strong>Dijkstra</strong> depuis $A$, donner le temps minimal pour rejoindre chaque station et le chemin optimal de $A$ à $E$.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Degrés : $\\deg(A)=2$ ($B,C$), $\\deg(B)=3$ ($A,C,D$), $\\deg(C)=3$ ($A,B,E$), $\\deg(D)=2$ ($B,E$), $\\deg(E)=2$ ($C,D$). Tous les sommets sont atteignables depuis $A$ (par exemple $A\\!-\\!B\\!-\\!D\\!-\\!E$ et $A\\!-\\!C$), donc le graphe est <strong>connexe</strong>.

<strong>2.</strong> Matrice d'adjacence (symétrique, diagonale nulle) :
<pre>
   A B C D E
A  0 1 1 0 0
B  1 0 1 1 0
C  1 1 0 0 1
D  0 1 0 0 1
E  0 0 1 1 0
</pre>
Listes d'adjacence :
<pre><code>G = {
  'A': ['B', 'C'],
  'B': ['A', 'C', 'D'],
  'C': ['A', 'B', 'E'],
  'D': ['B', 'E'],
  'E': ['C', 'D']
}</code></pre>

<strong>3.</strong> BFS depuis $A$ (file FIFO) : on visite $A$, on enfile $B,C$ ; on visite $B$, on enfile $D$ ; on visite $C$, on enfile $E$ ; on visite $D$ ; on visite $E$. Ordre : $A, B, C, D, E$. Distances en arêtes : $d(A)=0$, $d(B)=1$, $d(C)=1$, $d(D)=2$, $d(E)=2$.

<strong>4.</strong> Un plus court chemin de $A$ à $E$ : $A\\!-\\!C\\!-\\!E$ (longueur $2$). Le BFS explore les sommets par couches de distance croissante : la première fois qu'il atteint un sommet, c'est par un chemin de longueur minimale en nombre d'arêtes. Sur un graphe <strong>non pondéré</strong>, ce nombre d'arêtes <em>est</em> la distance, donc le BFS donne bien les plus courts chemins.

<strong>5.</strong> Dijkstra depuis $A$ (on note les distances provisoires, on fixe à chaque étape le sommet de distance minimale) :
<ul>
<li>$A$ fixé à $0$ ; voisins : $B=2$, $C=5$.</li>
<li>On fixe $B=2$ ; via $B$ : $C = \\min(5, 2+1)=3$, $D = 2+4 = 6$.</li>
<li>On fixe $C=3$ ; via $C$ : $E = 3+2 = 5$.</li>
<li>On fixe $E=5$ ; via $E$ : $D = \\min(6, 5+1)=6$ (inchangé).</li>
<li>On fixe $D=6$.</li>
</ul>
Temps minimaux : $A:0$, $B:2$, $C:3$, $E:5$, $D:6$. Chemin optimal de $A$ à $E$ : $A\\!-\\!B\\!-\\!C\\!-\\!E$, de coût $2+1+2 = 5$. On remarque qu'il diffère du plus court en nombre d'arêtes ($A\\!-\\!C\\!-\\!E$, coût $5+2=7$) : la pondération change le chemin optimal.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-poo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Comptes bancaires : encapsulation, héritage et polymorphisme',
            contenu: `<strong>Énoncé.</strong> On modélise des comptes bancaires en Python.

<strong>1.</strong> Écrire une classe <code>Compte</code> avec un constructeur prenant un <code>titulaire</code> et un <code>solde</code> initial (par défaut $0$). Le solde sera stocké dans un attribut <em>encapsulé</em> <code>_solde</code>. Ajouter une méthode <code>deposer(montant)</code> et une méthode <code>retirer(montant)</code> qui interdit de descendre sous $0$ (et renvoie alors <code>False</code> sans modifier le solde, <code>True</code> sinon).

<strong>2.</strong> Ajouter une méthode spéciale <code>__str__</code> renvoyant une chaîne du type <code>"Compte de Alice : 150 €"</code>. Expliquer la différence entre cet attribut <code>_solde</code> « protégé » et un attribut public.

<strong>3.</strong> Créer une classe <code>CompteEpargne</code> qui <strong>hérite</strong> de <code>Compte</code> et ajoute un <code>taux</code> annuel. Son constructeur réutilisera celui de la classe mère. Ajouter une méthode <code>appliquer_interets()</code> qui crédite le solde des intérêts.

<strong>4.</strong> Redéfinir (override) <code>retirer</code> dans <code>CompteEpargne</code> pour interdire <em>tout</em> retrait (un livret d'épargne sans retrait), en renvoyant toujours <code>False</code>. Illustrer le <strong>polymorphisme</strong> : écrire une fonction <code>bilan(comptes)</code> parcourant une liste de comptes hétérogènes et affichant chacun via <code>print</code>.

<strong>5.</strong> On exécute le scénario : Alice ouvre un <code>Compte</code> à $100$, dépose $50$, retire $200$ ; Bob ouvre un <code>CompteEpargne</code> à $1000$ au taux $3\\%$, applique les intérêts, tente de retirer $100$. Donner les soldes finaux et la valeur de retour de chaque retrait.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong>
<pre><code>class Compte:
    def __init__(self, titulaire, solde=0):
        self.titulaire = titulaire
        self._solde = solde

    def deposer(self, montant):
        self._solde += montant

    def retirer(self, montant):
        if montant > self._solde:
            return False
        self._solde -= montant
        return True</code></pre>

<strong>2.</strong>
<pre><code>    def __str__(self):
        return f"Compte de {self.titulaire} : {self._solde} €"</code></pre>
L'<strong>encapsulation</strong> : le préfixe <code>_</code> signale par convention que <code>_solde</code> est interne à la classe ; on n'est censé le modifier qu'au travers des méthodes <code>deposer</code>/<code>retirer</code>, qui garantissent l'invariant « solde $\\ge 0$ ». Un attribut public pourrait être mis à n'importe quelle valeur de l'extérieur, brisant cet invariant.

<strong>3.</strong>
<pre><code>class CompteEpargne(Compte):
    def __init__(self, titulaire, solde=0, taux=0.03):
        super().__init__(titulaire, solde)
        self.taux = taux

    def appliquer_interets(self):
        self._solde += self._solde * self.taux</code></pre>
<code>super().__init__</code> appelle le constructeur de la classe mère pour ne pas dupliquer le code d'initialisation.

<strong>4.</strong>
<pre><code>    def retirer(self, montant):
        return False   # aucun retrait autorise

def bilan(comptes):
    for c in comptes:
        print(c)</code></pre>
<strong>Polymorphisme</strong> : <code>bilan</code> appelle <code>print(c)</code> donc <code>c.__str__()</code> sans connaître le type exact ; chaque objet répond avec sa propre version de la méthode. De même, un appel à <code>retirer</code> sur un élément de la liste exécute la version adaptée à la classe réelle de l'objet.

<strong>5.</strong> Alice : $100 + 50 = 150$, puis retrait de $200 > 150$ refusé → <code>retirer</code> renvoie <code>False</code>, solde final <strong>$150$</strong>. Bob : $1000$ puis intérêts $1000 \\times 0{,}03 = 30$, solde $1030$ ; retrait de $100$ sur un <code>CompteEpargne</code> renvoie <strong><code>False</code></strong> (override), solde final <strong>$1030$</strong>.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-recursivite',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Fibonacci : récursivité, modularité et tests',
            contenu: `<strong>Énoncé.</strong> On rappelle la suite de Fibonacci : $F_0 = 0$, $F_1 = 1$, et $F_n = F_{n-1} + F_{n-2}$ pour $n \\ge 2$.

<strong>1.</strong> Écrire une fonction <strong>récursive</strong> <code>fib(n)</code> traduisant directement la définition. Identifier le ou les <strong>cas de base</strong> et le cas récursif.

<strong>2.</strong> Combien d'appels récursifs déclenche <code>fib(5)</code> ? Dessiner (ou décrire) l'arbre des appels et expliquer pourquoi cette version est <strong>inefficace</strong> (recalcul des mêmes valeurs).

<strong>3.</strong> Proposer une version récursive plus efficace utilisant un <strong>dictionnaire de mémoïsation</strong> passé en paramètre par défaut, et indiquer l'ordre de grandeur du nombre d'appels désormais nécessaires.

<strong>4.</strong> Dans un souci de <strong>modularité</strong>, on souhaite réutiliser <code>fib</code> dans plusieurs fichiers. Écrire l'instruction Python qui importe la fonction <code>fib</code> depuis un module <code>suites.py</code>, et expliquer l'intérêt de découper le code en modules.

<strong>5.</strong> Écrire un jeu de <strong>tests</strong> avec <code>assert</code> vérifiant les premières valeurs ($F_0$ à $F_7$) ainsi qu'un cas limite. Que se passe-t-il si l'on appelle <code>fib(-1)</code> ? Proposer une protection.

<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong>
<pre><code>def fib(n):
    if n < 2:        # cas de base : F0 = 0, F1 = 1
        return n
    return fib(n-1) + fib(n-2)   # cas recursif</code></pre>
Les cas de base sont $n=0$ et $n=1$ (regroupés par <code>n < 2</code> qui renvoie $n$). Le cas récursif applique la relation $F_n = F_{n-1} + F_{n-2}$.

<strong>2.</strong> L'arbre des appels de <code>fib(5)</code> :
<pre>
fib(5) -> fib(4) + fib(3)
fib(4) -> fib(3) + fib(2)
fib(3) -> fib(2) + fib(1)
fib(2) -> fib(1) + fib(0)
</pre>
On compte $15$ appels au total (les nœuds de l'arbre). C'est <strong>inefficace</strong> : <code>fib(3)</code> est calculé $2$ fois, <code>fib(2)</code> trois fois, etc. Le nombre d'appels croît exponentiellement (en $O(\\varphi^n)$, où $\\varphi$ est le nombre d'or), car les mêmes sous-problèmes sont recalculés.

<strong>3.</strong> Mémoïsation :
<pre><code>def fib(n, memo={}):
    if n < 2:
        return n
    if n not in memo:
        memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]</code></pre>
Chaque valeur $F_k$ n'est calculée qu'une seule fois : le nombre d'appels « utiles » devient <strong>linéaire</strong>, en $O(n)$.

<strong>4.</strong>
<pre><code>from suites import fib</code></pre>
La <strong>modularité</strong> consiste à regrouper des fonctions cohérentes dans des modules réutilisables : on évite la duplication, on teste et on maintient chaque module indépendamment, et le code appelant reste lisible (chaque fichier a une responsabilité claire).

<strong>5.</strong>
<pre><code>assert fib(0) == 0
assert fib(1) == 1
assert fib(2) == 1
assert fib(3) == 2
assert fib(4) == 3
assert fib(5) == 5
assert fib(6) == 8
assert fib(7) == 13
print("Tous les tests passent")</code></pre>
Si l'on appelle <code>fib(-1)</code>, la condition <code>n < 2</code> est vraie et la fonction renvoie $-1$, ce qui n'a pas de sens. Protection :
<pre><code>def fib(n, memo={}):
    if n < 0:
        raise ValueError("n doit etre positif")
    if n < 2:
        return n
    if n not in memo:
        memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]</code></pre>
On valide ainsi les préconditions et on signale clairement une utilisation incorrecte.
</details>`
          }
        ]
      }
    ]
  }
]
