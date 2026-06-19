// Terminale — spécialité NSI (Numérique et Sciences Informatiques)
// Programme officiel MEN 2019 (réforme du lycée)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. STRUCTURES DE DONNÉES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-struct', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Structures de données', ordre: 1, enrich: true,
  sections: [
    {
      titre: 'Types abstraits et interfaces',
      cartes: [
        { type:'def', label:'DEF', titre:'Type abstrait de données (TAD)',
          contenu:`Un <strong>type abstrait de données</strong> (TAD) décrit un ensemble de valeurs et les <strong>opérations</strong> qui les manipulent, indépendamment de toute implémentation.<br>On distingue :<br>— l'<strong>interface</strong> (signature des opérations, ce qu'elles font) ;<br>— l'<strong>implémentation</strong> (comment elles sont réalisées concrètement).<br>Cette séparation permet de changer l'implémentation sans modifier le code utilisateur (<em>encapsulation</em>).` },
        { type:'def', label:'DEF', titre:'Coût et notation $O$',
          contenu:`Le <strong>coût</strong> (ou complexité) d'une opération mesure son nombre d'étapes en fonction de la taille $n$ des données.<br>Notation de Landau : $f(n) = O(g(n))$ signifie qu'il existe $C > 0$ et $n_0$ tels que pour tout $n \\geq n_0$, $|f(n)| \\leq C\\,g(n)$.<br>Coûts usuels : $O(1)$ constant, $O(\\log n)$ logarithmique, $O(n)$ linéaire, $O(n\\log n)$, $O(n^2)$ quadratique.` },
        { type:'prop', label:'PROP', titre:'Choisir une structure',
          contenu:`Le choix d'une structure dépend des opérations <strong>fréquentes</strong> :<br>— accès par indice fréquent → <strong>tableau</strong> ($O(1)$ en lecture) ;<br>— insertions/suppressions en bout fréquentes → <strong>liste chaînée</strong>, pile ou file ;<br>— recherche par clé fréquente → <strong>dictionnaire</strong> (table de hachage, $O(1)$ en moyenne) ;<br>— données ordonnées + recherche → <strong>ABR</strong>.` },
        { type:'ex', label:'EX', titre:'Comparer deux structures',
          contenu:`<strong>Énoncé</strong> : pour stocker une file d'attente où l'on ajoute en fin et retire en tête très souvent, faut-il un tableau Python ou une <code>deque</code> ?<br><strong>Résolution</strong> : sur une <code>list</code>, retirer en tête (<code>pop(0)</code>) décale tous les éléments → $O(n)$. Sur une <code>deque</code>, <code>popleft()</code> est en $O(1)$. La <code>deque</code> est donc nettement préférable ici.` },
      ]
    },
    {
      titre: 'Listes et tableaux',
      cartes: [
        { type:'def', label:'DEF', titre:'Tableau (tableau dynamique)',
          contenu:`Un <strong>tableau</strong> stocke des éléments dans des cases contiguës en mémoire, indexées de $0$ à $n-1$.<br>Accès et modification par indice en $O(1)$.<br>En Python, le type <code>list</code> est un <strong>tableau dynamique</strong> : la taille s'ajuste automatiquement. L'ajout en fin (<code>append</code>) est en $O(1)$ <em>amorti</em>, l'insertion en tête en $O(n)$.` },
        { type:'def', label:'DEF', titre:'Liste chaînée',
          contenu:`Une <strong>liste chaînée</strong> est une suite de <strong>maillons</strong> (nœuds), chacun contenant une valeur et une référence (pointeur) vers le maillon suivant. Le dernier pointe vers <code>None</code>.<br>Insertion/suppression en tête : $O(1)$ (on ne déplace rien).<br>Accès au $i$-ème élément : $O(n)$ (parcours depuis la tête).<br>Inconvénient vs tableau : pas d'accès direct par indice.` },
        { type:'meth', label:'METH', titre:'Implémenter une liste chaînée (POO)',
          contenu:`<code>class Maillon:</code><br>&nbsp;&nbsp;<code>def __init__(self, v, suiv=None):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.valeur = v</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.suivant = suiv</code><br><br><code>class Liste:</code><br>&nbsp;&nbsp;<code>def __init__(self): self.tete = None</code><br>&nbsp;&nbsp;<code>def ajoute_tete(self, v):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.tete = Maillon(v, self.tete)</code>` },
        { type:'ex', label:'EX', titre:'Longueur d\'une liste chaînée',
          contenu:`<strong>Énoncé</strong> : écrire une méthode renvoyant le nombre de maillons.<br><strong>Résolution</strong> :<br><code>def longueur(self):</code><br>&nbsp;&nbsp;<code>n, m = 0, self.tete</code><br>&nbsp;&nbsp;<code>while m is not None:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n += 1</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = m.suivant</code><br>&nbsp;&nbsp;<code>return n</code><br>Coût : $O(n)$, on parcourt tous les maillons une fois.` },
      ]
    },
    {
      titre: 'Piles (LIFO)',
      cartes: [
        { type:'def', label:'DEF', titre:'Pile',
          contenu:`Une <strong>pile</strong> (<em>stack</em>) est une structure <strong>LIFO</strong> (Last In, First Out) : le dernier élément empilé est le premier dépilé.<br>Interface : <code>empiler(x)</code> (push), <code>depiler()</code> (pop), <code>est_vide()</code>, <code>sommet()</code>.<br>Toutes ces opérations sont en $O(1)$.<br>Usages : pile d'appels récursifs, retour arrière (<em>undo</em>), évaluation d'expressions, parcours DFS.` },
        { type:'meth', label:'METH', titre:'Implémenter une pile avec une liste Python',
          contenu:`<code>class Pile:</code><br>&nbsp;&nbsp;<code>def __init__(self): self.elements = []</code><br>&nbsp;&nbsp;<code>def empiler(self, x): self.elements.append(x)</code><br>&nbsp;&nbsp;<code>def depiler(self): return self.elements.pop()</code><br>&nbsp;&nbsp;<code>def est_vide(self): return self.elements == []</code><br>&nbsp;&nbsp;<code>def sommet(self): return self.elements[-1]</code><br><code>append</code> et <code>pop()</code> agissant en fin de liste sont en $O(1)$ amorti.` },
        { type:'ex', label:'EX', titre:'Parenthésage correct',
          contenu:`<strong>Énoncé</strong> : vérifier qu'une chaîne de parenthèses est bien équilibrée.<br><strong>Résolution</strong> : on empile chaque <code>(</code> ; à chaque <code>)</code> on dépile.<br><code>def equilibre(ch):</code><br>&nbsp;&nbsp;<code>p = Pile()</code><br>&nbsp;&nbsp;<code>for c in ch:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if c == '(': p.empiler(c)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>elif c == ')':</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if p.est_vide(): return False</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>p.depiler()</code><br>&nbsp;&nbsp;<code>return p.est_vide()</code>` },
      ]
    },
    {
      titre: 'Files (FIFO)',
      cartes: [
        { type:'def', label:'DEF', titre:'File',
          contenu:`Une <strong>file</strong> (<em>queue</em>) est une structure <strong>FIFO</strong> (First In, First Out) : le premier élément enfilé est le premier défilé.<br>Interface : <code>enfiler(x)</code> (enqueue, à l'arrière), <code>defiler()</code> (dequeue, à l'avant), <code>est_vide()</code>.<br>Usages : file d'attente, gestion de tâches, parcours en largeur (BFS), tampons.` },
        { type:'meth', label:'METH', titre:'Implémenter une file efficace',
          contenu:`Avec une <code>list</code>, défiler en tête (<code>pop(0)</code>) coûte $O(n)$. On préfère <code>collections.deque</code> :<br><code>from collections import deque</code><br><code>class File:</code><br>&nbsp;&nbsp;<code>def __init__(self): self.d = deque()</code><br>&nbsp;&nbsp;<code>def enfiler(self, x): self.d.append(x)</code><br>&nbsp;&nbsp;<code>def defiler(self): return self.d.popleft()</code><br><code>append</code> et <code>popleft</code> sont en $O(1)$.` },
        { type:'ex', label:'EX', titre:'File avec deux piles',
          contenu:`<strong>Énoncé</strong> : simuler une file à l'aide de deux piles $E$ (entrée) et $S$ (sortie).<br><strong>Résolution</strong> : <code>enfiler(x)</code> empile $x$ sur $E$.<br><code>defiler()</code> : si $S$ est vide, on transvase tout $E$ dans $S$ (ce qui inverse l'ordre), puis on dépile $S$.<br>Coût amorti $O(1)$ par opération : chaque élément n'est transvasé qu'une seule fois.` },
      ]
    },
    {
      titre: 'Dictionnaires',
      cartes: [
        { type:'def', label:'DEF', titre:'Dictionnaire (tableau associatif)',
          contenu:`Un <strong>dictionnaire</strong> associe à des <strong>clés</strong> uniques des <strong>valeurs</strong>. Interface : <code>d[cle] = valeur</code> (insertion/modification), <code>d[cle]</code> (accès), <code>cle in d</code> (test), <code>del d[cle]</code>.<br>En Python, le type <code>dict</code> est implémenté par une <strong>table de hachage</strong> : accès, insertion et suppression en $O(1)$ en moyenne.` },
        { type:'def', label:'DEF', titre:'Table de hachage',
          contenu:`Une <strong>table de hachage</strong> stocke les paires dans un tableau de taille $m$. Une <strong>fonction de hachage</strong> $h$ transforme une clé en indice $h(\\text{cle}) \\bmod m$.<br>Deux clés différentes peuvent donner le même indice : c'est une <strong>collision</strong>, gérée par chaînage (liste par case) ou adressage ouvert.<br>Un bon facteur de remplissage garantit un coût moyen $O(1)$.` },
        { type:'meth', label:'METH', titre:'Compter les occurrences',
          contenu:`<strong>Méthode-type</strong> : comptage avec un dictionnaire.<br><code>def occurrences(seq):</code><br>&nbsp;&nbsp;<code>compte = {}</code><br>&nbsp;&nbsp;<code>for x in seq:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>compte[x] = compte.get(x, 0) + 1</code><br>&nbsp;&nbsp;<code>return compte</code><br><code>get(x, 0)</code> renvoie $0$ si $x$ est absent : on évite le <code>KeyError</code>. Coût $O(n)$.` },
        { type:'ex', label:'EX', titre:'Deux nombres de somme cible',
          contenu:`<strong>Énoncé</strong> : trouver dans une liste deux éléments dont la somme vaut $s$.<br><strong>Résolution</strong> : on mémorise les valeurs vues dans un dictionnaire (valeur → indice).<br><code>def paire(t, s):</code><br>&nbsp;&nbsp;<code>vus = {}</code><br>&nbsp;&nbsp;<code>for i, x in enumerate(t):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if s - x in vus: return (vus[s-x], i)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>vus[x] = i</code><br>&nbsp;&nbsp;<code>return None</code><br>Coût $O(n)$ au lieu de $O(n^2)$ par double boucle.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. PROGRAMMATION OBJET  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-poo', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Programmation orientée objet', ordre: 2, enrich: false,
  sections: [
    {
      titre: 'Classes et objets',
      cartes: [
        { type:'def', label:'DEF', titre:'Classe et instance',
          contenu:`Une <strong>classe</strong> est un modèle décrivant une catégorie d'objets par leurs <strong>attributs</strong> (données) et leurs <strong>méthodes</strong> (fonctions associées).<br>Un <strong>objet</strong> (ou <strong>instance</strong>) est un exemplaire concret créé à partir d'une classe.<br>La <strong>POO</strong> regroupe données et traitements dans une même entité : c'est l'<strong>encapsulation</strong>.` },
        { type:'def', label:'DEF', titre:'Attribut et méthode',
          contenu:`Un <strong>attribut</strong> est une variable rattachée à un objet (attribut d'instance) ou à la classe.<br>Une <strong>méthode</strong> est une fonction définie dans la classe ; son premier paramètre, <code>self</code>, désigne l'instance qui l'appelle.<br>On accède aux deux par la notation pointée : <code>objet.attribut</code>, <code>objet.methode(...)</code>.` },
        { type:'meth', label:'METH', titre:'Définir une classe en Python',
          contenu:`<code>class Vecteur:</code><br>&nbsp;&nbsp;<code>def __init__(self, x, y):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.x = x</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.y = y</code><br>&nbsp;&nbsp;<code>def norme(self):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return (self.x**2 + self.y**2)**0.5</code><br><br>Création et usage :<br><code>v = Vecteur(3, 4)</code><br><code>print(v.norme())   # 5.0</code>` },
        { type:'ex', label:'EX', titre:'Classe Compte bancaire',
          contenu:`<strong>Énoncé</strong> : modéliser un compte avec dépôt et retrait.<br><strong>Résolution</strong> :<br><code>class Compte:</code><br>&nbsp;&nbsp;<code>def __init__(self, solde=0):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.solde = solde</code><br>&nbsp;&nbsp;<code>def deposer(self, m): self.solde += m</code><br>&nbsp;&nbsp;<code>def retirer(self, m):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if m <= self.solde: self.solde -= m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else: raise ValueError("solde insuffisant")</code>` },
      ]
    },
    {
      titre: 'Constructeur et méthodes spéciales',
      cartes: [
        { type:'def', label:'DEF', titre:'Le constructeur __init__',
          contenu:`La méthode <code>__init__</code> est le <strong>constructeur</strong> : appelée automatiquement à la création d'un objet, elle initialise ses attributs.<br>Elle ne renvoie rien (pas de <code>return</code> de valeur).<br>L'appel <code>Vecteur(3, 4)</code> crée l'objet puis exécute <code>__init__(self, 3, 4)</code> avec <code>self</code> = le nouvel objet.` },
        { type:'def', label:'DEF', titre:'Méthodes spéciales',
          contenu:`Les méthodes dont le nom est encadré de doubles soulignés (<em>dunder</em>) personnalisent le comportement de l'objet :<br>— <code>__str__</code> : chaîne lisible (utilisée par <code>print</code>) ;<br>— <code>__repr__</code> : représentation technique ;<br>— <code>__eq__</code> : égalité (<code>==</code>) ;<br>— <code>__add__</code> : addition (<code>+</code>) ;<br>— <code>__len__</code> : longueur (<code>len</code>).` },
        { type:'meth', label:'METH', titre:'Surcharger l\'affichage et l\'addition',
          contenu:`<code>class Vecteur:</code><br>&nbsp;&nbsp;<code>def __init__(self, x, y): self.x, self.y = x, y</code><br>&nbsp;&nbsp;<code>def __str__(self):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return f"({self.x}, {self.y})"</code><br>&nbsp;&nbsp;<code>def __add__(self, autre):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return Vecteur(self.x+autre.x, self.y+autre.y)</code><br>Désormais <code>print(Vecteur(1,2) + Vecteur(3,4))</code> affiche <code>(4, 6)</code>.` },
        { type:'ex', label:'EX', titre:'Égalité de fractions',
          contenu:`<strong>Énoncé</strong> : deux fractions $\\frac{a}{b}$ et $\\frac{c}{d}$ sont égales ssi $ad = bc$.<br><strong>Résolution</strong> :<br><code>class Fraction:</code><br>&nbsp;&nbsp;<code>def __init__(self, n, d): self.n, self.d = n, d</code><br>&nbsp;&nbsp;<code>def __eq__(self, f):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return self.n * f.d == f.n * self.d</code><br><code>Fraction(1,2) == Fraction(2,4)</code> renvoie <code>True</code>.` },
      ]
    },
    {
      titre: 'Encapsulation et abstraction',
      cartes: [
        { type:'def', label:'DEF', titre:'Encapsulation',
          contenu:`L'<strong>encapsulation</strong> regroupe données et méthodes et restreint l'accès direct aux attributs : on passe par des méthodes (<em>accesseurs</em>) pour préserver la cohérence interne.<br>En Python, la convention est un préfixe <em>underscore</em> : <code>self._solde</code> signale un attribut « privé » qu'on ne modifie pas directement de l'extérieur (convention, non imposée par le langage).` },
        { type:'prop', label:'PROP', titre:'Intérêt de la POO',
          contenu:`La POO favorise :<br>— la <strong>réutilisation</strong> (une classe sert de brique réutilisable) ;<br>— la <strong>modularité</strong> (chaque classe gère sa propre logique) ;<br>— la <strong>maintenance</strong> (modifier l'implémentation sans toucher au code client si l'interface est stable) ;<br>— la <strong>lisibilité</strong> (le code reflète le domaine modélisé).` },
        { type:'meth', label:'METH', titre:'Implémenter une pile en POO',
          contenu:`On expose une <strong>interface</strong> claire en masquant le tableau interne :<br><code>class Pile:</code><br>&nbsp;&nbsp;<code>def __init__(self): self._t = []</code><br>&nbsp;&nbsp;<code>def empiler(self, x): self._t.append(x)</code><br>&nbsp;&nbsp;<code>def depiler(self): return self._t.pop()</code><br>&nbsp;&nbsp;<code>def est_vide(self): return len(self._t) == 0</code><br>Le client n'accède jamais à <code>_t</code> directement : il peut changer d'implémentation.` },
        { type:'ex', label:'EX', titre:'Accesseur contrôlé',
          contenu:`<strong>Énoncé</strong> : empêcher un solde négatif via un accesseur.<br><strong>Résolution</strong> :<br><code>class Compte:</code><br>&nbsp;&nbsp;<code>def __init__(self): self._solde = 0</code><br>&nbsp;&nbsp;<code>def get_solde(self): return self._solde</code><br>&nbsp;&nbsp;<code>def crediter(self, m):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>assert m >= 0, "montant négatif"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self._solde += m</code><br>L'<code>assert</code> garantit l'invariant à chaque crédit.` },
      ]
    },
    {
      titre: 'Héritage et polymorphisme',
      cartes: [
        { type:'def', label:'DEF', titre:'Héritage',
          contenu:`L'<strong>héritage</strong> permet de définir une classe <strong>fille</strong> à partir d'une classe <strong>mère</strong> : la fille récupère ses attributs et méthodes, et peut en ajouter ou en modifier.<br>En Python : <code>class Carre(Forme):</code>. On exprime ainsi une relation « <strong>est un</strong> » (un carré <em>est une</em> forme).<br>Intérêt : factoriser le code commun, éviter les répétitions.` },
        { type:'def', label:'DEF', titre:'Redéfinition et polymorphisme',
          contenu:`Une classe fille peut <strong>redéfinir</strong> (surcharger) une méthode héritée pour l'adapter.<br>Le <strong>polymorphisme</strong> est la capacité d'objets de classes différentes à répondre au même appel de méthode, chacun à sa manière.<br><code>super().__init__(...)</code> appelle le constructeur de la classe mère depuis la fille.` },
        { type:'meth', label:'METH', titre:'Définir une classe fille',
          contenu:`<code>class Forme:</code><br>&nbsp;&nbsp;<code>def aire(self): return 0</code><br><br><code>class Carre(Forme):</code><br>&nbsp;&nbsp;<code>def __init__(self, c): self.c = c</code><br>&nbsp;&nbsp;<code>def aire(self): return self.c ** 2</code><br><br><code>Carre(3).aire()</code> renvoie $9$ : la méthode <code>aire</code> redéfinie remplace celle de <code>Forme</code>.` },
        { type:'ex', label:'EX', titre:'Polymorphisme en action',
          contenu:`<strong>Énoncé</strong> : calculer l'aire totale d'une liste de formes hétérogènes.<br><strong>Résolution</strong> : chaque forme expose une méthode <code>aire()</code>.<br><code>formes = [Carre(2), Cercle(1)]</code><br><code>total = sum(f.aire() for f in formes)</code><br>Le même appel <code>f.aire()</code> déclenche le calcul propre à chaque classe : c'est le polymorphisme.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. RÉCURSIVITÉ, MODULARITÉ & MISE AU POINT  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-recursivite', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Récursivité, modularité et tests', ordre: 3, enrich: false,
  sections: [
    {
      titre: 'Récursivité',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction récursive',
          contenu:`Une <strong>fonction récursive</strong> s'appelle elle-même sur des données plus petites. Elle comporte :<br>— un ou plusieurs <strong>cas de base</strong> (arrêt, sans appel récursif) ;<br>— un ou plusieurs <strong>cas récursifs</strong> qui se rapprochent du cas de base.<br>Sans cas de base atteignable, on obtient une récursion infinie (<code>RecursionError</code> en Python).` },
        { type:'meth', label:'METH', titre:'Écrire une fonction récursive',
          contenu:`<strong>Démarche</strong> :<br>1. Identifier le <strong>cas de base</strong> (le plus petit cas trivial).<br>2. Exprimer le résultat de taille $n$ en fonction de tailles plus petites.<br>3. Vérifier que chaque appel <strong>converge</strong> vers le cas de base.<br><strong>Exemple (factorielle)</strong> :<br><code>def fact(n):</code><br>&nbsp;&nbsp;<code>if n == 0: return 1</code><br>&nbsp;&nbsp;<code>return n * fact(n - 1)</code>` },
        { type:'def', label:'DEF', titre:'Pile d\'exécution',
          contenu:`Chaque appel de fonction empile un <strong>contexte</strong> (paramètres, variables locales, point de retour) sur la <strong>pile d'exécution</strong>.<br>En récursivité, la profondeur d'imbrication détermine la hauteur de cette pile, donc le coût en mémoire $O(\\text{profondeur})$.<br>Python limite la récursion (par défaut $\\approx 1000$) pour éviter un débordement de pile.` },
        { type:'ex', label:'EX', titre:'Somme des chiffres',
          contenu:`<strong>Énoncé</strong> : somme des chiffres d'un entier $n \\geq 0$, récursivement.<br><strong>Résolution</strong> : le dernier chiffre est $n \\bmod 10$, le reste $n // 10$.<br><code>def somme_chiffres(n):</code><br>&nbsp;&nbsp;<code>if n < 10: return n</code><br>&nbsp;&nbsp;<code>return (n % 10) + somme_chiffres(n // 10)</code><br>Pour $n = 1234$ : $4 + 3 + 2 + 1 = 10$. La taille décroît à chaque appel.` },
      ]
    },
    {
      titre: 'Récursivité avancée',
      cartes: [
        { type:'def', label:'DEF', titre:'Récursivité multiple',
          contenu:`Une fonction est à <strong>récursivité multiple</strong> quand elle fait plusieurs appels récursifs.<br>Exemple : Fibonacci, $F(n) = F(n-1) + F(n-2)$.<br>La version naïve recalcule les mêmes valeurs : son coût est <strong>exponentiel</strong> $O(\\varphi^n)$. On l'améliore par <strong>mémoïsation</strong> (cf. programmation dynamique) pour passer en $O(n)$.` },
        { type:'meth', label:'METH', titre:'Tours de Hanoï',
          contenu:`Déplacer $n$ disques de la tige $A$ vers $C$ via $B$ :<br><code>def hanoi(n, A, B, C):</code><br>&nbsp;&nbsp;<code>if n == 0: return</code><br>&nbsp;&nbsp;<code>hanoi(n-1, A, C, B)</code><br>&nbsp;&nbsp;<code>print(A, "->", C)</code><br>&nbsp;&nbsp;<code>hanoi(n-1, B, A, C)</code><br>Le nombre de déplacements est $2^n - 1$ : coût exponentiel, optimal pour ce problème.` },
        { type:'ex', label:'EX', titre:'Inverser une chaîne',
          contenu:`<strong>Énoncé</strong> : renvoyer la chaîne $s$ à l'envers, récursivement.<br><strong>Résolution</strong> : on place le premier caractère en dernier.<br><code>def miroir(s):</code><br>&nbsp;&nbsp;<code>if s == "": return ""</code><br>&nbsp;&nbsp;<code>return miroir(s[1:]) + s[0]</code><br>Pour <code>"abc"</code> : <code>miroir("bc") + "a"</code> = <code>"cba"</code>.` },
      ]
    },
    {
      titre: 'Modularité',
      cartes: [
        { type:'def', label:'DEF', titre:'Module et bibliothèque',
          contenu:`Un <strong>module</strong> est un fichier <code>.py</code> regroupant des fonctions, classes et constantes réutilisables.<br>On l'importe : <code>import math</code>, <code>from math import pi, sqrt</code>.<br>La <strong>modularité</strong> consiste à découper un programme en composants indépendants, testables et réutilisables. Elle améliore lisibilité, maintenance et travail en équipe.` },
        { type:'def', label:'DEF', titre:'Spécification d\'une fonction',
          contenu:`<strong>Spécifier</strong> une fonction, c'est décrire son contrat sans dire comment elle le réalise :<br>— ses <strong>paramètres</strong> et leur type ;<br>— sa <strong>valeur de retour</strong> ;<br>— ses <strong>préconditions</strong> (ce que l'appelant garantit) et <strong>postconditions</strong> (ce que la fonction garantit).<br>En Python, on documente via une <em>docstring</em> entre triples guillemets.` },
        { type:'meth', label:'METH', titre:'Documenter avec une docstring',
          contenu:`<code>def moyenne(t):</code><br>&nbsp;&nbsp;<code>"""Renvoie la moyenne de la liste t.</code><br>&nbsp;&nbsp;<code>Précondition : t est une liste non vide de nombres.</code><br>&nbsp;&nbsp;<code>Renvoie : un float."""</code><br>&nbsp;&nbsp;<code>return sum(t) / len(t)</code><br>La docstring est accessible via <code>help(moyenne)</code> ou <code>moyenne.__doc__</code>.` },
        { type:'ex', label:'EX', titre:'Importer son propre module',
          contenu:`<strong>Énoncé</strong> : réutiliser des fonctions géométriques.<br><strong>Résolution</strong> : dans <code>geo.py</code> on définit <code>aire_cercle(r)</code>. Dans un autre fichier :<br><code>from geo import aire_cercle</code><br><code>print(aire_cercle(2))</code><br>Le bloc <code>if __name__ == "__main__":</code> dans <code>geo.py</code> permet de séparer le code de test du code importable.` },
      ]
    },
    {
      titre: 'Tests et mise au point',
      cartes: [
        { type:'def', label:'DEF', titre:'Test et jeu de tests',
          contenu:`Un <strong>test</strong> vérifie qu'une fonction produit le résultat attendu sur une entrée donnée.<br>Un bon <strong>jeu de tests</strong> couvre : des cas <strong>généraux</strong>, des cas <strong>limites</strong> (liste vide, $0$, valeurs extrêmes), et des cas d'<strong>erreur</strong>.<br>Les tests ne prouvent pas l'absence de bug, mais détectent leur présence (cf. citation de Dijkstra).` },
        { type:'def', label:'DEF', titre:'Assertion',
          contenu:`L'instruction <code>assert condition, message</code> lève une <code>AssertionError</code> si la condition est fausse.<br>On l'utilise pour :<br>— vérifier les <strong>préconditions</strong> en début de fonction ;<br>— écrire des <strong>tests</strong> automatiques ;<br>— contrôler un <strong>invariant</strong> en cours d'exécution.<br>Une assertion violée signale un bug à corriger.` },
        { type:'meth', label:'METH', titre:'Écrire des tests par assertions',
          contenu:`<code>def maxi(t):</code><br>&nbsp;&nbsp;<code>assert len(t) > 0, "liste vide"</code><br>&nbsp;&nbsp;<code>m = t[0]</code><br>&nbsp;&nbsp;<code>for x in t: m = max(m, x)</code><br>&nbsp;&nbsp;<code>return m</code><br><br><strong>Tests</strong> :<br><code>assert maxi([3, 1, 4]) == 4</code><br><code>assert maxi([-2]) == -2   # cas limite : 1 élément</code>` },
        { type:'ex', label:'EX', titre:'Déboguer une fonction',
          contenu:`<strong>Énoncé</strong> : <code>def somme(t):</code> <code>s=0</code> ; <code>for i in range(1,len(t)): s+=t[i]</code> ; <code>return s</code> oublie <code>t[0]</code>.<br><strong>Mise au point</strong> : le test <code>assert somme([5, 2]) == 7</code> échoue (renvoie $2$). On localise l'erreur : <code>range(1, ...)</code> doit être <code>range(len(t))</code> ou <code>range(0, len(t))</code>. Après correction, le test passe.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. STRUCTURES ARBORESCENTES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-arbres', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Arbres', ordre: 4, enrich: true,
  sections: [
    {
      titre: 'Vocabulaire des arbres',
      cartes: [
        { type:'def', label:'DEF', titre:'Arbre enraciné',
          contenu:`Un <strong>arbre</strong> est une structure hiérarchique de <strong>nœuds</strong>. Il possède un nœud particulier, la <strong>racine</strong>.<br>Chaque nœud (sauf la racine) a un unique <strong>parent</strong> ; ses descendants directs sont ses <strong>fils</strong>.<br>Un nœud sans fils est une <strong>feuille</strong> ; un nœud non-feuille est un <strong>nœud interne</strong>.` },
        { type:'def', label:'DEF', titre:'Taille, hauteur, profondeur',
          contenu:`— <strong>Taille</strong> : nombre total de nœuds.<br>— <strong>Profondeur</strong> d'un nœud : nombre d'arêtes de la racine jusqu'à lui (racine à profondeur $0$).<br>— <strong>Hauteur</strong> de l'arbre : profondeur maximale, soit la longueur de la plus longue branche.<br>Un arbre réduit à une racine a une hauteur $0$ ; convention : arbre vide de hauteur $-1$.` },
        { type:'def', label:'DEF', titre:'Arbre binaire',
          contenu:`Un <strong>arbre binaire</strong> est un arbre où chaque nœud possède au plus deux fils : un <strong>sous-arbre gauche</strong> et un <strong>sous-arbre droit</strong> (éventuellement vides).<br>Un arbre binaire est <strong>complet</strong> (parfait) si tous les niveaux sont entièrement remplis.<br>Définition récursive : un arbre binaire est soit vide, soit un nœud avec deux arbres binaires.` },
        { type:'prop', label:'PROP', titre:'Nombre de nœuds et hauteur',
          contenu:`Pour un arbre binaire de hauteur $h$ :<br>— nombre maximal de nœuds : $2^{h+1} - 1$ (arbre parfait) ;<br>— nombre maximal de feuilles : $2^h$.<br>Réciproquement, un arbre binaire à $n$ nœuds a une hauteur $h \\geq \\lfloor \\log_2 n \\rfloor$.<br>Plus un arbre est <strong>équilibré</strong>, plus sa hauteur est proche de $\\log_2 n$.` },
      ]
    },
    {
      titre: 'Implémentation des arbres binaires',
      cartes: [
        { type:'meth', label:'METH', titre:'Classe Nœud',
          contenu:`<code>class Noeud:</code><br>&nbsp;&nbsp;<code>def __init__(self, val, g=None, d=None):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.valeur = val</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.gauche = g</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>self.droit = d</code><br><br>Un arbre vide est représenté par <code>None</code>. Exemple :<br><code>a = Noeud(1, Noeud(2), Noeud(3))</code>` },
        { type:'meth', label:'METH', titre:'Taille et hauteur récursives',
          contenu:`<code>def taille(a):</code><br>&nbsp;&nbsp;<code>if a is None: return 0</code><br>&nbsp;&nbsp;<code>return 1 + taille(a.gauche) + taille(a.droit)</code><br><br><code>def hauteur(a):</code><br>&nbsp;&nbsp;<code>if a is None: return -1</code><br>&nbsp;&nbsp;<code>return 1 + max(hauteur(a.gauche), hauteur(a.droit))</code><br>Coût $O(n)$ : chaque nœud est visité une fois.` },
        { type:'ex', label:'EX', titre:'Compter les feuilles',
          contenu:`<strong>Énoncé</strong> : compter les feuilles d'un arbre binaire.<br><strong>Résolution</strong> : une feuille a ses deux fils vides.<br><code>def nb_feuilles(a):</code><br>&nbsp;&nbsp;<code>if a is None: return 0</code><br>&nbsp;&nbsp;<code>if a.gauche is None and a.droit is None: return 1</code><br>&nbsp;&nbsp;<code>return nb_feuilles(a.gauche) + nb_feuilles(a.droit)</code>` },
      ]
    },
    {
      titre: 'Parcours d\'arbres',
      cartes: [
        { type:'def', label:'DEF', titre:'Parcours en profondeur (DFS)',
          contenu:`Les <strong>parcours en profondeur</strong> explorent une branche complètement avant de remonter. Trois ordres :<br>— <strong>préfixe</strong> : racine, puis gauche, puis droite ;<br>— <strong>infixe</strong> : gauche, racine, droite ;<br>— <strong>suffixe (postfixe)</strong> : gauche, droite, racine.<br>Naturellement récursifs.` },
        { type:'meth', label:'METH', titre:'Parcours infixe',
          contenu:`<code>def infixe(a):</code><br>&nbsp;&nbsp;<code>if a is None: return</code><br>&nbsp;&nbsp;<code>infixe(a.gauche)</code><br>&nbsp;&nbsp;<code>print(a.valeur)</code><br>&nbsp;&nbsp;<code>infixe(a.droit)</code><br>Pour les autres ordres, on déplace simplement la ligne <code>print</code> :<br>— avant les appels → préfixe ;<br>— après les appels → suffixe.` },
        { type:'meth', label:'METH', titre:'Parcours en largeur (BFS)',
          contenu:`Le <strong>parcours en largeur</strong> visite les nœuds niveau par niveau, à l'aide d'une <strong>file</strong> :<br><code>from collections import deque</code><br><code>def largeur(a):</code><br>&nbsp;&nbsp;<code>if a is None: return</code><br>&nbsp;&nbsp;<code>f = deque([a])</code><br>&nbsp;&nbsp;<code>while f:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n = f.popleft()</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print(n.valeur)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if n.gauche: f.append(n.gauche)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if n.droit: f.append(n.droit)</code>` },
        { type:'ex', label:'EX', titre:'Ordre des parcours',
          contenu:`<strong>Énoncé</strong> : arbre de racine $A$, fils gauche $B$ (feuilles $D$, $E$), fils droit $C$. Donner les trois parcours.<br><strong>Résolution</strong> :<br>— Préfixe : $A, B, D, E, C$<br>— Infixe : $D, B, E, A, C$<br>— Suffixe : $D, E, B, C, A$<br>— Largeur : $A, B, C, D, E$` },
      ]
    },
    {
      titre: 'Arbres binaires de recherche (ABR)',
      cartes: [
        { type:'def', label:'DEF', titre:'Arbre binaire de recherche',
          contenu:`Un <strong>ABR</strong> est un arbre binaire vérifiant, pour <em>tout</em> nœud de clé $c$ :<br>— toutes les clés du sous-arbre <strong>gauche</strong> sont $< c$ ;<br>— toutes les clés du sous-arbre <strong>droit</strong> sont $> c$.<br>Conséquence majeure : le <strong>parcours infixe</strong> d'un ABR liste les clés dans l'<strong>ordre croissant</strong>.` },
        { type:'th', label:'THM', titre:'Coût des opérations',
          contenu:`Recherche, insertion et suppression dans un ABR de hauteur $h$ coûtent $O(h)$.<br>— ABR <strong>équilibré</strong> : $h = O(\\log n)$, donc opérations en $O(\\log n)$.<br>— ABR <strong>dégénéré</strong> (en peigne, insertion d'une suite triée) : $h = n - 1$, opérations en $O(n)$.<br>L'efficacité de l'ABR dépend donc de son équilibre.` },
        { type:'meth', label:'METH', titre:'Recherche dans un ABR',
          contenu:`<code>def recherche(a, x):</code><br>&nbsp;&nbsp;<code>if a is None: return False</code><br>&nbsp;&nbsp;<code>if x == a.valeur: return True</code><br>&nbsp;&nbsp;<code>if x < a.valeur:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return recherche(a.gauche, x)</code><br>&nbsp;&nbsp;<code>return recherche(a.droit, x)</code><br>À chaque étape, on élimine un sous-arbre : on suit un seul chemin de la racine vers le bas.` },
        { type:'ex', label:'EX', titre:'Insertion dans un ABR',
          contenu:`<strong>Énoncé</strong> : insérer la valeur $x$ en conservant la propriété d'ABR.<br><strong>Résolution</strong> :<br><code>def inserer(a, x):</code><br>&nbsp;&nbsp;<code>if a is None: return Noeud(x)</code><br>&nbsp;&nbsp;<code>if x < a.valeur:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>a.gauche = inserer(a.gauche, x)</code><br>&nbsp;&nbsp;<code>elif x > a.valeur:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>a.droit = inserer(a.droit, x)</code><br>&nbsp;&nbsp;<code>return a</code><br>On descend jusqu'à un emplacement vide où l'on greffe le nouveau nœud.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. GRAPHES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-graphes', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Graphes', ordre: 5, enrich: true,
  sections: [
    {
      titre: 'Vocabulaire des graphes',
      cartes: [
        { type:'def', label:'DEF', titre:'Graphe',
          contenu:`Un <strong>graphe</strong> $G = (S, A)$ est défini par un ensemble de <strong>sommets</strong> $S$ et un ensemble d'<strong>arêtes</strong> $A$ reliant des paires de sommets.<br>— <strong>Non orienté</strong> : les arêtes sont symétriques ($\\{u, v\\}$).<br>— <strong>Orienté</strong> : les arcs ont un sens ($u \\to v$).<br>— <strong>Pondéré</strong> : chaque arête porte un poids (distance, coût).` },
        { type:'def', label:'DEF', titre:'Degré, voisins, chemin',
          contenu:`— <strong>Voisins</strong> d'un sommet $u$ : sommets reliés à $u$ par une arête.<br>— <strong>Degré</strong> de $u$ : nombre d'arêtes incidentes (en orienté : degré entrant et sortant).<br>— <strong>Chemin</strong> : suite de sommets reliés successivement par des arêtes.<br>— <strong>Cycle</strong> : chemin revenant à son point de départ.<br>— Graphe <strong>connexe</strong> : tout couple de sommets est relié par un chemin.` },
        { type:'prop', label:'PROP', titre:'Lemme des poignées de main',
          contenu:`Dans un graphe non orienté, la somme des degrés vaut deux fois le nombre d'arêtes :<br>$$\\sum_{u \\in S} \\deg(u) = 2\\,|A|$$<br>Chaque arête est comptée dans le degré de ses deux extrémités.<br>Conséquence : le nombre de sommets de degré impair est toujours <strong>pair</strong>.` },
      ]
    },
    {
      titre: 'Représentations',
      cartes: [
        { type:'def', label:'DEF', titre:'Matrice d\'adjacence',
          contenu:`La <strong>matrice d'adjacence</strong> $M$ d'un graphe à $n$ sommets est de taille $n \\times n$ :<br>$M[i][j] = 1$ s'il existe une arête de $i$ vers $j$, sinon $0$ (ou le poids si pondéré).<br>Pour un graphe non orienté, $M$ est <strong>symétrique</strong>.<br>Espace $O(n^2)$. Test d'arête en $O(1)$, mais parcours des voisins en $O(n)$.` },
        { type:'def', label:'DEF', titre:'Liste d\'adjacence',
          contenu:`La <strong>liste d'adjacence</strong> associe à chaque sommet la liste de ses voisins. En Python, on utilise un dictionnaire :<br>$\\{u : [\\text{voisins de } u]\\}$<br>Espace $O(n + m)$ ($m$ = nombre d'arêtes). Adaptée aux graphes <strong>creux</strong> ($m \\ll n^2$).<br>Parcours des voisins de $u$ en $O(\\deg u)$, mais test d'arête en $O(\\deg u)$.` },
        { type:'meth', label:'METH', titre:'Choisir la représentation',
          contenu:`<strong>Critère</strong> : densité du graphe et opérations dominantes.<br>— Graphe <strong>dense</strong> ($m \\approx n^2$), tests d'arêtes fréquents → <strong>matrice</strong>.<br>— Graphe <strong>creux</strong>, parcours de voisins fréquents → <strong>liste d'adjacence</strong>.<br>Les parcours BFS/DFS sont en $O(n^2)$ avec une matrice, mais $O(n + m)$ avec une liste.` },
        { type:'ex', label:'EX', titre:'Construire une liste d\'adjacence',
          contenu:`<strong>Énoncé</strong> : graphe non orienté d'arêtes $(A,B), (A,C), (B,C)$.<br><strong>Résolution</strong> :<br><code>g = {'A': ['B', 'C'], 'B': ['A', 'C'], 'C': ['A', 'B']}</code><br>Chaque arête apparaît <strong>deux fois</strong> (une par extrémité). Le degré de $A$ se lit : <code>len(g['A'])</code> $= 2$.` },
      ]
    },
    {
      titre: 'Parcours de graphes',
      cartes: [
        { type:'meth', label:'METH', titre:'Parcours en profondeur (DFS)',
          contenu:`On marque les sommets visités pour éviter les cycles.<br><code>def dfs(g, s, vus=None):</code><br>&nbsp;&nbsp;<code>if vus is None: vus = set()</code><br>&nbsp;&nbsp;<code>vus.add(s)</code><br>&nbsp;&nbsp;<code>for v in g[s]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if v not in vus:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>dfs(g, v, vus)</code><br>&nbsp;&nbsp;<code>return vus</code><br>Coût $O(n + m)$. Usages : composantes connexes, détection de cycle, tri topologique.` },
        { type:'meth', label:'METH', titre:'Parcours en largeur (BFS)',
          contenu:`On utilise une <strong>file</strong> : les sommets sont visités par distance croissante à la source.<br><code>from collections import deque</code><br><code>def bfs(g, s):</code><br>&nbsp;&nbsp;<code>vus, f = {s}, deque([s])</code><br>&nbsp;&nbsp;<code>while f:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>u = f.popleft()</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>for v in g[u]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if v not in vus:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>vus.add(v); f.append(v)</code>` },
        { type:'prop', label:'PROP', titre:'BFS et plus court chemin non pondéré',
          contenu:`Le <strong>BFS</strong> depuis une source $s$ visite les sommets par <strong>distance croissante</strong> (en nombre d'arêtes).<br>Il calcule donc le <strong>plus court chemin</strong> (non pondéré) de $s$ vers tous les autres sommets.<br>En mémorisant le <strong>prédécesseur</strong> de chaque sommet découvert, on reconstruit le chemin en remontant.` },
        { type:'ex', label:'EX', titre:'Détecter un cycle (graphe orienté)',
          contenu:`<strong>Énoncé</strong> : tester la présence d'un cycle par DFS.<br><strong>Résolution</strong> : un cycle existe si, durant le DFS, on rencontre un sommet déjà <strong>en cours d'exploration</strong> (dans la pile d'appels). On colore les sommets en blanc (non vu), gris (en cours), noir (terminé) : un arc vers un sommet <strong>gris</strong> révèle un cycle.` },
      ]
    },
    {
      titre: 'Plus courts chemins',
      cartes: [
        { type:'def', label:'DEF', titre:'Problème du plus court chemin',
          contenu:`Dans un graphe <strong>pondéré</strong> à poids positifs, on cherche le chemin de poids total minimal d'une source $s$ vers un (ou tous les) sommet(s).<br>Le poids d'un chemin est la somme des poids de ses arêtes.<br>Applications : itinéraires GPS, routage réseau, réseaux logistiques.` },
        { type:'meth', label:'METH', titre:'Algorithme de Dijkstra',
          contenu:`<strong>Principe (glouton)</strong> : on maintient les distances provisoires depuis $s$.<br>1. Distance de $s$ à $0$, des autres à $+\\infty$.<br>2. Choisir le sommet $u$ non traité de plus petite distance.<br>3. <strong>Relâcher</strong> chaque voisin $v$ : si $d(u) + p(u,v) < d(v)$, mettre à jour $d(v)$.<br>4. Marquer $u$ comme traité ; répéter.<br>Hypothèse essentielle : poids $\\geq 0$.` },
        { type:'ex', label:'EX', titre:'Dérouler Dijkstra',
          contenu:`<strong>Énoncé</strong> : arcs $A\\!\\to\\!B$ (poids $1$), $A\\!\\to\\!C$ ($4$), $B\\!\\to\\!C$ ($2$). Distances depuis $A$.<br><strong>Résolution</strong> : $d(A)=0$. On traite $A$ : $d(B)=1$, $d(C)=4$. On traite $B$ (min) : $d(C) = \\min(4,\\,1+2) = 3$. On traite $C$.<br>Résultat : $d(A)=0$, $d(B)=1$, $d(C)=3$ (par $A \\to B \\to C$).` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. ALGORITHMIQUE AVANCÉE  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-algo', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Algorithmique avancée', ordre: 6, enrich: true,
  sections: [
    {
      titre: 'Recherche et tris',
      cartes: [
        { type:'meth', label:'METH', titre:'Recherche dichotomique',
          contenu:`Sur un tableau <strong>trié</strong>, on compare à l'élément central et on élimine une moitié :<br><code>def dicho(t, x):</code><br>&nbsp;&nbsp;<code>g, d = 0, len(t) - 1</code><br>&nbsp;&nbsp;<code>while g <= d:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = (g + d) // 2</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[m] == x: return m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[m] < x: g = m + 1</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else: d = m - 1</code><br>&nbsp;&nbsp;<code>return -1</code><br>Coût $O(\\log n)$. Prérequis : tableau trié.` },
        { type:'th', label:'THM', titre:'Terminaison et coût de la dichotomie',
          contenu:`<strong>Terminaison</strong> : la quantité $d - g$ <strong>décroît strictement</strong> à chaque tour (variant de boucle), donc la boucle s'arrête.<br><strong>Coût</strong> : l'intervalle de recherche est divisé par $2$ à chaque étape. Après $k$ étapes il reste $n / 2^k$ éléments ; la recherche s'arrête quand $n/2^k < 1$, soit $k \\approx \\log_2 n$ : coût $O(\\log n)$.` },
        { type:'meth', label:'METH', titre:'Tri par insertion',
          contenu:`On insère chaque élément à sa place dans la partie déjà triée à gauche :<br><code>def tri_insertion(t):</code><br>&nbsp;&nbsp;<code>for i in range(1, len(t)):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>cle, j = t[i], i - 1</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>while j >= 0 and t[j] > cle:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>t[j+1] = t[j]; j -= 1</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>t[j+1] = cle</code><br>Coût $O(n^2)$ au pire, $O(n)$ si déjà trié.` },
        { type:'ex', label:'EX', titre:'Tri par sélection',
          contenu:`<strong>Énoncé</strong> : trier en cherchant à chaque tour le minimum du reste.<br><strong>Résolution</strong> :<br><code>def tri_selection(t):</code><br>&nbsp;&nbsp;<code>for i in range(len(t)):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>k = i</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>for j in range(i+1, len(t)):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[j] < t[k]: k = j</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>t[i], t[k] = t[k], t[i]</code><br>Coût $O(n^2)$ dans tous les cas.` },
      ]
    },
    {
      titre: 'Diviser pour régner',
      cartes: [
        { type:'def', label:'DEF', titre:'Paradigme diviser pour régner',
          contenu:`Stratégie en trois temps :<br>1. <strong>Diviser</strong> le problème en sous-problèmes indépendants de même nature.<br>2. <strong>Régner</strong> : résoudre récursivement chaque sous-problème (cas de base si assez petit).<br>3. <strong>Combiner</strong> les solutions partielles en une solution globale.<br>Exemples : tri fusion, recherche dichotomique, exponentiation rapide.` },
        { type:'meth', label:'METH', titre:'Tri fusion',
          contenu:`On coupe le tableau en deux, on trie récursivement, on <strong>fusionne</strong> :<br><code>def tri_fusion(t):</code><br>&nbsp;&nbsp;<code>if len(t) <= 1: return t</code><br>&nbsp;&nbsp;<code>m = len(t) // 2</code><br>&nbsp;&nbsp;<code>g = tri_fusion(t[:m])</code><br>&nbsp;&nbsp;<code>d = tri_fusion(t[m:])</code><br>&nbsp;&nbsp;<code>return fusion(g, d)</code><br>La fusion de deux listes triées est en $O(n)$, d'où un coût total $O(n \\log n)$.` },
        { type:'th', label:'THM', titre:'Coût du tri fusion',
          contenu:`Le coût $C(n)$ vérifie $C(n) = 2\\,C(n/2) + O(n)$ : deux moitiés plus une fusion linéaire.<br>L'arbre de récursion a $\\log_2 n$ niveaux, chacun coûtant $O(n)$ au total.<br>D'où $C(n) = O(n \\log n)$ dans <strong>tous les cas</strong> (contrairement au tri rapide, $O(n^2)$ au pire). Inconvénient : mémoire auxiliaire $O(n)$.` },
        { type:'ex', label:'EX', titre:'Exponentiation rapide',
          contenu:`<strong>Énoncé</strong> : calculer $x^n$ en $O(\\log n)$ multiplications.<br><strong>Résolution</strong> : $x^n = (x^{n/2})^2$ si $n$ pair, $x \\cdot x^{n-1}$ si impair.<br><code>def puissance(x, n):</code><br>&nbsp;&nbsp;<code>if n == 0: return 1</code><br>&nbsp;&nbsp;<code>if n % 2 == 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>p = puissance(x, n // 2); return p * p</code><br>&nbsp;&nbsp;<code>return x * puissance(x, n - 1)</code>` },
      ]
    },
    {
      titre: 'Programmation dynamique',
      cartes: [
        { type:'def', label:'DEF', titre:'Programmation dynamique',
          contenu:`La <strong>programmation dynamique</strong> résout un problème en combinant les solutions de <strong>sous-problèmes qui se chevauchent</strong>, calculées une seule fois et mémorisées.<br>Conditions : <strong>sous-structure optimale</strong> (la solution optimale se compose de solutions optimales de sous-problèmes) et <strong>recouvrement</strong> des sous-problèmes.` },
        { type:'meth', label:'METH', titre:'Mémoïsation vs tabulation',
          contenu:`Deux approches :<br>— <strong>Top-down (mémoïsation)</strong> : récursion + cache (dictionnaire) pour ne pas recalculer.<br>— <strong>Bottom-up (tabulation)</strong> : on remplit itérativement un tableau des plus petits sous-problèmes vers les plus grands.<br>Fibonacci passe ainsi d'un coût exponentiel $O(\\varphi^n)$ à un coût linéaire $O(n)$.` },
        { type:'meth', label:'METH', titre:'Fibonacci par mémoïsation',
          contenu:`<code>def fib(n, memo=None):</code><br>&nbsp;&nbsp;<code>if memo is None: memo = {}</code><br>&nbsp;&nbsp;<code>if n < 2: return n</code><br>&nbsp;&nbsp;<code>if n in memo: return memo[n]</code><br>&nbsp;&nbsp;<code>memo[n] = fib(n-1, memo) + fib(n-2, memo)</code><br>&nbsp;&nbsp;<code>return memo[n]</code><br>Chaque valeur n'est calculée qu'une fois : coût $O(n)$.` },
        { type:'ex', label:'EX', titre:'Sac à dos (rendu de monnaie)',
          contenu:`<strong>Énoncé</strong> : nombre minimal de pièces pour rendre $s$ avec des valeurs données.<br><strong>Résolution (tabulation)</strong> : $t[k]$ = nb minimal pour la somme $k$.<br><code>t = [0] + [float('inf')] * s</code><br><code>for k in range(1, s+1):</code><br>&nbsp;&nbsp;<code>for p in pieces:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if p <= k: t[k] = min(t[k], 1 + t[k-p])</code><br>Optimal, contrairement au glouton sur certains jeux de pièces.` },
      ]
    },
    {
      titre: 'Algorithmes gloutons',
      cartes: [
        { type:'def', label:'DEF', titre:'Algorithme glouton',
          contenu:`Un <strong>algorithme glouton</strong> construit une solution pas à pas en faisant, à chaque étape, le <strong>choix localement optimal</strong> (le meilleur sur l'instant), sans jamais revenir en arrière.<br>Rapide et simple, mais ne donne pas toujours l'optimum global : il faut <strong>prouver</strong> l'optimalité au cas par cas.` },
        { type:'meth', label:'METH', titre:'Rendu de monnaie glouton',
          contenu:`On rend toujours la plus grande pièce possible :<br><code>def rendu(s, pieces):</code><br>&nbsp;&nbsp;<code>pieces = sorted(pieces, reverse=True)</code><br>&nbsp;&nbsp;<code>res = []</code><br>&nbsp;&nbsp;<code>for p in pieces:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>while s >= p:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>res.append(p); s -= p</code><br>&nbsp;&nbsp;<code>return res</code><br>Optimal pour le système euro, pas pour un système quelconque.` },
        { type:'ex', label:'EX', titre:'Quand le glouton échoue',
          contenu:`<strong>Énoncé</strong> : pièces $\\{1, 3, 4\\}$, rendre $6$.<br><strong>Résolution</strong> : le glouton prend $4$, puis $1 + 1$ → <strong>3 pièces</strong> ($4+1+1$).<br>L'optimum est $3 + 3$ → <strong>2 pièces</strong>.<br>Conclusion : le glouton est <em>localement</em> optimal mais pas <em>globalement</em>. La programmation dynamique, elle, trouve l'optimum.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 7. BASES DE DONNÉES  (enrich)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-bdd', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Bases de données', ordre: 7, enrich: true,
  sections: [
    {
      titre: 'Modèle relationnel',
      cartes: [
        { type:'def', label:'DEF', titre:'Relation et attributs',
          contenu:`Une <strong>base de données relationnelle</strong> organise les données en <strong>relations</strong> (tables).<br>Une table possède des <strong>attributs</strong> (colonnes, avec un type) et contient des <strong>enregistrements</strong> (lignes, ou n-uplets).<br>Le <strong>schéma</strong> d'une relation est la liste de ses attributs et de leurs domaines.` },
        { type:'def', label:'DEF', titre:'Clé primaire et clé étrangère',
          contenu:`La <strong>clé primaire</strong> est un attribut (ou un groupe) identifiant <strong>de façon unique</strong> chaque enregistrement : elle ne peut être ni nulle, ni dupliquée.<br>Une <strong>clé étrangère</strong> est un attribut qui référence la clé primaire d'une autre table, établissant un lien entre les tables.` },
        { type:'def', label:'DEF', titre:'Contraintes d\'intégrité',
          contenu:`Le SGBD impose des <strong>contraintes</strong> garantissant la cohérence :<br>— <strong>d'entité</strong> : la clé primaire est unique et non nulle ;<br>— <strong>référentielle</strong> : une clé étrangère pointe vers une clé primaire existante ;<br>— <strong>de domaine</strong> : chaque valeur respecte le type de l'attribut.<br>Ces règles évitent les incohérences (doublons, références orphelines).` },
        { type:'prop', label:'PROP', titre:'Intérêt d\'un SGBD',
          contenu:`Un <strong>SGBD</strong> (système de gestion de bases de données, ex. SQLite, PostgreSQL) apporte par rapport à de simples fichiers :<br>— <strong>persistance</strong> et organisation structurée ;<br>— <strong>requêtes</strong> déclaratives via SQL ;<br>— <strong>intégrité</strong> et contraintes automatiques ;<br>— accès <strong>concurrent</strong> sécurisé et gestion des droits.` },
      ]
    },
    {
      titre: 'SQL — interrogation simple',
      cartes: [
        { type:'form', label:'FORM', titre:'Structure d\'un SELECT',
          contenu:`<code>SELECT</code> attributs <code>FROM</code> table <code>WHERE</code> condition<br><code>ORDER BY</code> attribut [<code>ASC</code> | <code>DESC</code>] <code>LIMIT</code> n<br><br><strong>Exemple</strong> :<br><code>SELECT nom, age FROM eleve</code><br><code>WHERE age >= 18 ORDER BY nom ASC;</code><br><code>SELECT *</code> sélectionne tous les attributs.` },
        { type:'def', label:'DEF', titre:'Conditions et opérateurs',
          contenu:`Dans la clause <code>WHERE</code> :<br>— comparaisons : <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> ;<br>— logiques : <code>AND</code>, <code>OR</code>, <code>NOT</code> ;<br>— motifs : <code>LIKE 'A%'</code> (commence par A) ;<br>— ensembles : <code>IN (...)</code>, <code>BETWEEN a AND b</code> ;<br>— valeur absente : <code>IS NULL</code>.` },
        { type:'meth', label:'METH', titre:'Éliminer les doublons',
          contenu:`Le mot-clé <code>DISTINCT</code> supprime les lignes en double dans le résultat :<br><code>SELECT DISTINCT ville FROM eleve;</code><br>renvoie chaque ville une seule fois.<br>Sans <code>DISTINCT</code>, une ville apparaît autant de fois qu'il y a d'élèves qui y habitent.` },
        { type:'ex', label:'EX', titre:'Filtrer et trier',
          contenu:`<strong>Énoncé</strong> : table <code>livre(titre, auteur, annee)</code>. Lister les titres parus après 2000, par année décroissante.<br><strong>Résolution</strong> :<br><code>SELECT titre, annee FROM livre</code><br><code>WHERE annee > 2000</code><br><code>ORDER BY annee DESC;</code>` },
      ]
    },
    {
      titre: 'Jointures et agrégats',
      cartes: [
        { type:'def', label:'DEF', titre:'Jointure',
          contenu:`Une <strong>jointure</strong> combine les lignes de deux tables selon une condition reliant une clé étrangère à une clé primaire :<br><code>SELECT ... FROM A JOIN B ON A.fk = B.pk</code><br>Elle rassemble dans une même ligne les informations réparties sur plusieurs tables. C'est l'opération centrale du modèle relationnel.` },
        { type:'def', label:'DEF', titre:'Fonctions d\'agrégat',
          contenu:`Les <strong>agrégats</strong> calculent une valeur sur un groupe de lignes :<br>— <code>COUNT(*)</code> : nombre de lignes ;<br>— <code>SUM(col)</code> : somme ;<br>— <code>AVG(col)</code> : moyenne ;<br>— <code>MIN(col)</code>, <code>MAX(col)</code> : extrema.<br>Combinés à <code>GROUP BY</code>, ils produisent un résultat par groupe.` },
        { type:'meth', label:'METH', titre:'GROUP BY et HAVING',
          contenu:`<code>GROUP BY</code> regroupe les lignes partageant une même valeur ; <code>HAVING</code> filtre <em>après</em> regroupement (alors que <code>WHERE</code> filtre <em>avant</em>) :<br><code>SELECT ville, COUNT(*) FROM eleve</code><br><code>GROUP BY ville</code><br><code>HAVING COUNT(*) >= 3;</code><br>renvoie les villes comptant au moins 3 élèves.` },
        { type:'ex', label:'EX', titre:'Jointure avec agrégat',
          contenu:`<strong>Énoncé</strong> : <code>emprunt(id_livre, id_eleve)</code> et <code>livre(id, titre)</code>. Nombre d'emprunts par titre.<br><strong>Résolution</strong> :<br><code>SELECT livre.titre, COUNT(*) AS n</code><br><code>FROM emprunt JOIN livre</code><br><code>ON emprunt.id_livre = livre.id</code><br><code>GROUP BY livre.titre ORDER BY n DESC;</code>` },
      ]
    },
    {
      titre: 'Mise à jour des données',
      cartes: [
        { type:'form', label:'FORM', titre:'INSERT, UPDATE, DELETE',
          contenu:`<strong>Insérer</strong> :<br><code>INSERT INTO eleve (nom, age) VALUES ('Léa', 17);</code><br><strong>Modifier</strong> :<br><code>UPDATE eleve SET age = 18 WHERE nom = 'Léa';</code><br><strong>Supprimer</strong> :<br><code>DELETE FROM eleve WHERE age < 15;</code><br><em>Attention</em> : sans <code>WHERE</code>, l'opération touche <strong>toutes</strong> les lignes.` },
        { type:'form', label:'FORM', titre:'CREATE TABLE',
          contenu:`<code>CREATE TABLE eleve (</code><br>&nbsp;&nbsp;<code>id INTEGER PRIMARY KEY,</code><br>&nbsp;&nbsp;<code>nom TEXT NOT NULL,</code><br>&nbsp;&nbsp;<code>classe_id INTEGER,</code><br>&nbsp;&nbsp;<code>FOREIGN KEY (classe_id) REFERENCES classe(id)</code><br><code>);</code><br>On déclare le type de chaque attribut, la clé primaire et les clés étrangères.` },
        { type:'ex', label:'EX', titre:'Mettre à jour sous condition',
          contenu:`<strong>Énoncé</strong> : augmenter de $1$ l'âge de tous les élèves de la classe d'identifiant $3$.<br><strong>Résolution</strong> :<br><code>UPDATE eleve</code><br><code>SET age = age + 1</code><br><code>WHERE classe_id = 3;</code><br>La clause <code>WHERE</code> limite la mise à jour aux seules lignes concernées.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 8. ARCHITECTURES MATÉRIELLES  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-architecture', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Architectures matérielles', ordre: 8, enrich: false,
  sections: [
    {
      titre: 'Modèle de von Neumann',
      cartes: [
        { type:'def', label:'DEF', titre:'Architecture de von Neumann',
          contenu:`L'<strong>architecture de von Neumann</strong> (1945) structure un ordinateur en quatre composants :<br>— l'<strong>unité de commande</strong> (séquenceur des instructions) ;<br>— l'<strong>unité arithmétique et logique</strong> (UAL/ALU, calculs) ;<br>— la <strong>mémoire</strong> (programme <em>et</em> données dans le même espace) ;<br>— les <strong>entrées/sorties</strong>.<br>Idée clé : le <strong>programme est stocké en mémoire</strong> comme les données.` },
        { type:'def', label:'DEF', titre:'Processeur (CPU) et registres',
          contenu:`Le <strong>processeur</strong> (CPU) exécute les instructions. Il contient :<br>— l'<strong>UAL</strong> pour les opérations ;<br>— des <strong>registres</strong> (mémoires internes très rapides), dont le <strong>compteur ordinal</strong> (adresse de la prochaine instruction) et le <strong>registre d'instruction</strong> ;<br>— l'unité de commande qui orchestre le tout.` },
        { type:'meth', label:'METH', titre:'Cycle d\'exécution',
          contenu:`Chaque instruction suit un cycle en trois phases :<br>1. <strong>Fetch</strong> : lire l'instruction à l'adresse du compteur ordinal.<br>2. <strong>Decode</strong> : décoder l'opération et ses opérandes.<br>3. <strong>Execute</strong> : exécuter (calcul, accès mémoire, branchement).<br>Le compteur ordinal est ensuite incrémenté (ou modifié par un saut).` },
        { type:'def', label:'DEF', titre:'Hiérarchie mémoire',
          contenu:`Les mémoires forment une hiérarchie, du plus rapide/cher/petit au plus lent/grand :<br>registres → <strong>cache</strong> (L1, L2, L3) → <strong>mémoire vive</strong> (RAM, volatile) → <strong>stockage</strong> (SSD/disque, persistant).<br>Plus on s'éloigne du processeur, plus la capacité augmente mais plus l'accès est lent.` },
      ]
    },
    {
      titre: 'Portes logiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Portes logiques',
          contenu:`Les circuits sont bâtis sur des <strong>portes logiques</strong> manipulant des bits ($0$/$1$) :<br>— <strong>NON</strong> (NOT) : inverse ;<br>— <strong>ET</strong> (AND) : $1$ ssi les deux entrées valent $1$ ;<br>— <strong>OU</strong> (OR) : $1$ si au moins une entrée vaut $1$ ;<br>— <strong>OU EXCLUSIF</strong> (XOR) : $1$ ssi les entrées diffèrent.<br>Toute fonction booléenne se construit avec ces portes.` },
        { type:'meth', label:'METH', titre:'Table de vérité',
          contenu:`Une <strong>table de vérité</strong> donne la sortie pour chaque combinaison d'entrées. Pour ET et OU :<br><code>a b | ET | OU | XOR</code><br><code>0 0 |  0 |  0 |  0</code><br><code>0 1 |  0 |  1 |  1</code><br><code>1 0 |  0 |  1 |  1</code><br><code>1 1 |  1 |  1 |  0</code>` },
        { type:'prop', label:'PROP', titre:'Lois de l\'algèbre de Boole',
          contenu:`Les opérations logiques obéissent à des lois utiles pour simplifier les circuits :<br>— <strong>commutativité</strong> : $a \\cdot b = b \\cdot a$ ;<br>— <strong>distributivité</strong> : $a \\cdot (b + c) = a\\cdot b + a\\cdot c$ ;<br>— <strong>De Morgan</strong> : $\\overline{a \\cdot b} = \\overline{a} + \\overline{b}$ et $\\overline{a + b} = \\overline{a} \\cdot \\overline{b}$.<br>(Ici $+$ note le OU, $\\cdot$ le ET, la barre le NON.)` },
        { type:'ex', label:'EX', titre:'Additionneur 1 bit',
          contenu:`<strong>Énoncé</strong> : additionner deux bits $a$ et $b$ (demi-additionneur).<br><strong>Résolution</strong> : la <strong>somme</strong> $s = a \\oplus b$ (XOR) et la <strong>retenue</strong> $r = a \\cdot b$ (ET).<br>Pour $a=1, b=1$ : $s = 0$, $r = 1$, soit le résultat binaire $10$ ($=2$). En enchaînant des additionneurs, on construit l'addition sur $n$ bits.` },
      ]
    },
    {
      titre: 'Représentation des données',
      cartes: [
        { type:'def', label:'DEF', titre:'Bit, octet, codage binaire',
          contenu:`Toute donnée est codée en <strong>binaire</strong> (base $2$). L'unité de base est le <strong>bit</strong> ($0$ ou $1$) ; un <strong>octet</strong> regroupe $8$ bits et code $2^8 = 256$ valeurs.<br>Un entier naturel sur $n$ bits varie de $0$ à $2^n - 1$.<br>Texte, images, sons : tout est <em>in fine</em> une suite de bits, interprétée selon un format.` },
        { type:'meth', label:'METH', titre:'Conversion décimal ↔ binaire',
          contenu:`<strong>Décimal → binaire</strong> : divisions successives par $2$, on lit les restes de bas en haut.<br>$13 = 8 + 4 + 1 = 1101_2$.<br><strong>Binaire → décimal</strong> : somme des puissances de $2$.<br>$1101_2 = 1\\!\\cdot\\!8 + 1\\!\\cdot\\!4 + 0\\!\\cdot\\!2 + 1\\!\\cdot\\!1 = 13$.<br>En Python : <code>bin(13)</code> donne <code>'0b1101'</code>, <code>int('1101', 2)</code> donne $13$.` },
        { type:'def', label:'DEF', titre:'Hexadécimal',
          contenu:`La base <strong>16</strong> (hexadécimal) utilise les chiffres $0$ à $9$ puis $A$ à $F$ (pour $10$ à $15$).<br>Chaque chiffre hexadécimal code exactement <strong>4 bits</strong>, d'où une écriture compacte : un octet tient en deux chiffres hexa.<br>Exemple : $1101\\,1110_2 = \\text{DE}_{16}$. Très utilisé pour les couleurs, les adresses mémoire.` },
        { type:'ex', label:'EX', titre:'Capacité d\'adressage',
          contenu:`<strong>Énoncé</strong> : combien d'adresses distinctes avec un bus d'adresses de $16$ bits ?<br><strong>Résolution</strong> : chaque adresse est une combinaison de $16$ bits, soit $2^{16} = 65\\,536$ adresses possibles. Avec un octet par case, cela correspond à $64$ Kio de mémoire adressable.` },
      ]
    },
    {
      titre: 'Périphériques et performance',
      cartes: [
        { type:'def', label:'DEF', titre:'Bus et périphériques',
          contenu:`Les composants communiquent par des <strong>bus</strong> : le <strong>bus de données</strong> transporte les valeurs, le <strong>bus d'adresses</strong> désigne les cases mémoire, le <strong>bus de commande</strong> les signaux de contrôle.<br>Les <strong>périphériques</strong> (clavier, écran, disque, réseau) échangent avec le processeur via des <strong>contrôleurs</strong> d'entrée/sortie.` },
        { type:'def', label:'DEF', titre:'Mémoire cache',
          contenu:`La <strong>mémoire cache</strong> est une petite mémoire très rapide intercalée entre le processeur et la RAM.<br>Elle exploite la <strong>localité</strong> : les données récemment ou prochainement utilisées y sont gardées.<br>Un accès trouvé dans le cache (<em>hit</em>) est bien plus rapide qu'un accès à la RAM (<em>miss</em>), d'où un gain de performance majeur.` },
        { type:'ex', label:'EX', titre:'Fréquence et débit',
          contenu:`<strong>Énoncé</strong> : un processeur à $3$ GHz exécute idéalement combien d'instructions simples par seconde ?<br><strong>Résolution</strong> : $3$ GHz $= 3 \\times 10^9$ cycles/seconde. Si une instruction simple s'exécute en $1$ cycle, cela fait jusqu'à $3$ milliards d'instructions/seconde. En pratique, les accès mémoire et dépendances réduisent ce débit théorique.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 9. SYSTÈMES D'EXPLOITATION & PROCESSUS  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-systeme', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Systèmes d\'exploitation et processus', ordre: 9, enrich: false,
  sections: [
    {
      titre: 'Rôle du système d\'exploitation',
      cartes: [
        { type:'def', label:'DEF', titre:'Système d\'exploitation',
          contenu:`Un <strong>système d'exploitation</strong> (OS, ex. Linux, Windows, macOS) est le logiciel qui gère les ressources de la machine et fait l'interface entre le matériel et les applications.<br>Ses fonctions : gestion des <strong>processus</strong>, de la <strong>mémoire</strong>, des <strong>fichiers</strong>, des <strong>périphériques</strong> et des <strong>droits</strong> des utilisateurs.` },
        { type:'def', label:'DEF', titre:'Système de fichiers',
          contenu:`Le <strong>système de fichiers</strong> organise les données du stockage en <strong>fichiers</strong> et <strong>répertoires</strong> (dossiers) formant une arborescence dont la base est la <strong>racine</strong>.<br>— <strong>Chemin absolu</strong> : depuis la racine (<code>/home/lea/tp.py</code>).<br>— <strong>Chemin relatif</strong> : depuis le répertoire courant (<code>../tp.py</code>).` },
        { type:'meth', label:'METH', titre:'Commandes shell de base',
          contenu:`Dans un terminal Unix :<br>— <code>pwd</code> : répertoire courant ;<br>— <code>ls</code> : lister le contenu ;<br>— <code>cd dossier</code> : changer de répertoire ;<br>— <code>mkdir</code> / <code>rm</code> : créer / supprimer ;<br>— <code>cp</code> / <code>mv</code> : copier / déplacer.<br><code>.</code> = répertoire courant, <code>..</code> = parent.` },
      ]
    },
    {
      titre: 'Processus et ordonnancement',
      cartes: [
        { type:'def', label:'DEF', titre:'Processus',
          contenu:`Un <strong>processus</strong> est un programme <strong>en cours d'exécution</strong>, avec son espace mémoire propre, ses registres et son état.<br>Identifié par un <strong>PID</strong>. Un même programme peut donner plusieurs processus.<br>États possibles : <strong>élu</strong> (s'exécute), <strong>prêt</strong> (attend le processeur), <strong>bloqué</strong> (attend une ressource, ex. une E/S).` },
        { type:'def', label:'DEF', titre:'Ordonnancement',
          contenu:`Comme les processus sont plus nombreux que les cœurs, l'<strong>ordonnanceur</strong> de l'OS répartit le temps processeur entre eux, donnant l'illusion du <strong>parallélisme</strong>.<br>Politiques courantes : <strong>tourniquet</strong> (<em>round-robin</em>, quantum de temps à chacun), <strong>par priorité</strong>, <strong>premier arrivé premier servi</strong> (FIFO).` },
        { type:'def', label:'DEF', titre:'Interblocage (deadlock)',
          contenu:`Un <strong>interblocage</strong> survient quand des processus s'attendent mutuellement et restent bloqués indéfiniment.<br>Exemple : $P_1$ détient la ressource $A$ et attend $B$, tandis que $P_2$ détient $B$ et attend $A$.<br>Conditions classiques (Coffman) : exclusion mutuelle, détention et attente, non-préemption, attente circulaire.` },
        { type:'ex', label:'EX', titre:'Gérer les processus',
          contenu:`<strong>Énoncé</strong> : observer et arrêter un processus sous Unix.<br><strong>Résolution</strong> : <code>ps</code> (ou <code>top</code>) liste les processus avec leur PID. Pour arrêter le processus de PID $4242$ : <code>kill 4242</code>.<br>S'il ne répond pas, <code>kill -9 4242</code> force la terminaison. Une multiplication anarchique de processus (<em>fork bomb</em>) peut saturer la machine.` },
      ]
    },
    {
      titre: 'Concurrence et synchronisation',
      cartes: [
        { type:'def', label:'DEF', titre:'Ressource partagée',
          contenu:`Plusieurs processus (ou fils d'exécution) peuvent accéder à une même <strong>ressource partagée</strong> (variable, fichier, périphérique).<br>Sans précaution, des accès simultanés produisent des résultats <strong>incohérents</strong> selon l'ordre d'exécution : c'est une <strong>situation de compétition</strong> (<em>race condition</em>).` },
        { type:'def', label:'DEF', titre:'Section critique et verrou',
          contenu:`Une <strong>section critique</strong> est une portion de code accédant à une ressource partagée et qui ne doit pas être exécutée par deux processus à la fois.<br>On la protège par un <strong>verrou</strong> (<em>mutex</em>) garantissant l'<strong>exclusion mutuelle</strong> : un seul processus à la fois y entre, les autres attendent.` },
        { type:'ex', label:'EX', titre:'Compteur partagé erroné',
          contenu:`<strong>Énoncé</strong> : deux processus exécutent chacun $1000$ fois <code>c = c + 1</code> sur un compteur commun initialisé à $0$. Résultat ?<br><strong>Résolution</strong> : l'opération n'est pas atomique (lecture, calcul, écriture). Des incréments peuvent se <strong>perdre</strong> si les deux lisent la même valeur. Le total final peut être $< 2000$. Un verrou autour de l'incrément corrige le problème.` },
      ]
    },
    {
      titre: 'Droits et permissions',
      cartes: [
        { type:'def', label:'DEF', titre:'Utilisateurs et permissions',
          contenu:`Un système multi-utilisateurs associe à chaque fichier un <strong>propriétaire</strong> et des <strong>droits</strong> distincts pour trois catégories : le propriétaire, son <strong>groupe</strong>, les <strong>autres</strong>.<br>Trois permissions par catégorie : <strong>lecture</strong> (r), <strong>écriture</strong> (w), <strong>exécution</strong> (x).<br>Le super-utilisateur (<code>root</code>) possède tous les droits.` },
        { type:'meth', label:'METH', titre:'Lire et modifier les droits',
          contenu:`<code>ls -l</code> affiche les droits sous la forme <code>rwxr-xr--</code> :<br>— <code>rwx</code> propriétaire (lecture, écriture, exécution) ;<br>— <code>r-x</code> groupe ;<br>— <code>r--</code> autres.<br><code>chmod</code> modifie ces droits, p. ex. <code>chmod u+x script.py</code> ajoute l'exécution au propriétaire.` },
        { type:'ex', label:'EX', titre:'Interpréter une ligne de droits',
          contenu:`<strong>Énoncé</strong> : que signifie <code>-rw-r-----</code> pour <code>notes.txt</code> ?<br><strong>Résolution</strong> : le tiret initial indique un fichier ordinaire. Le propriétaire peut lire et écrire (<code>rw-</code>), le groupe peut seulement lire (<code>r--</code>), les autres n'ont aucun droit (<code>---</code>). Un membre extérieur au groupe ne peut donc pas ouvrir le fichier.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 10. RÉSEAUX  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-reseaux', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Réseaux et protocoles', ordre: 10, enrich: false,
  sections: [
    {
      titre: 'Modèle en couches et adressage',
      cartes: [
        { type:'def', label:'DEF', titre:'Protocole et modèle en couches',
          contenu:`Un <strong>protocole</strong> est un ensemble de règles régissant l'échange de données entre machines.<br>Le <strong>modèle TCP/IP</strong> organise la communication en <strong>couches</strong> indépendantes :<br>application (HTTP, DNS) → transport (TCP, UDP) → réseau/Internet (IP) → accès réseau (Ethernet, Wi-Fi).<br>Chaque couche ne dialogue qu'avec ses voisines (<strong>encapsulation</strong> des données).` },
        { type:'def', label:'DEF', titre:'Adresse IP et masque',
          contenu:`Une <strong>adresse IP</strong> identifie une interface réseau. En <strong>IPv4</strong> : 4 octets, ex. <code>192.168.1.10</code> (de $0$ à $255$ chacun).<br>Le <strong>masque de sous-réseau</strong> sépare la partie <strong>réseau</strong> de la partie <strong>hôte</strong>. En notation CIDR <code>/24</code> : les 24 premiers bits désignent le réseau.<br><strong>IPv6</strong> (128 bits) répond à la pénurie d'adresses IPv4.` },
        { type:'def', label:'DEF', titre:'Adresse MAC et DNS',
          contenu:`L'<strong>adresse MAC</strong> identifie physiquement une carte réseau (couche accès), fixée par le constructeur, ex. <code>3C:5A:B4:...</code>.<br>Le <strong>DNS</strong> (Domain Name System) traduit un nom de domaine (<code>lycee.fr</code>) en adresse IP : c'est l'annuaire d'Internet.` },
      ]
    },
    {
      titre: 'Transport et routage',
      cartes: [
        { type:'def', label:'DEF', titre:'TCP et UDP',
          contenu:`Au niveau <strong>transport</strong> :<br>— <strong>TCP</strong> est <strong>fiable</strong> et <strong>connecté</strong> : accusés de réception, retransmission des paquets perdus, remise en ordre. Pour le web, les mails, les transferts.<br>— <strong>UDP</strong> est <strong>non fiable</strong> et sans connexion : plus rapide, sans garantie. Pour la voix, la vidéo en direct, le jeu.` },
        { type:'def', label:'DEF', titre:'Paquets et commutation',
          contenu:`Les données sont découpées en <strong>paquets</strong> transmis indépendamment sur le réseau, puis réassemblés à l'arrivée (<strong>commutation de paquets</strong>).<br>Chaque paquet porte les adresses IP <strong>source</strong> et <strong>destination</strong>. Deux paquets d'un même message peuvent emprunter des routes différentes.` },
        { type:'def', label:'DEF', titre:'Routage',
          contenu:`Le <strong>routage</strong> détermine le chemin des paquets de proche en proche à travers les <strong>routeurs</strong>.<br>Chaque routeur consulte sa <strong>table de routage</strong> pour décider du prochain saut.<br>Des protocoles (RIP fondé sur le nombre de sauts, OSPF sur des coûts) construisent et mettent à jour ces tables, en cherchant les meilleurs chemins.` },
        { type:'ex', label:'EX', titre:'Même réseau local ?',
          contenu:`<strong>Énoncé</strong> : <code>192.168.1.10</code> et <code>192.168.1.50</code> avec masque <code>/24</code> sont-ils sur le même réseau ?<br><strong>Résolution</strong> : <code>/24</code> fige les trois premiers octets <code>192.168.1</code>. Ils sont identiques pour les deux machines : elles sont sur le <strong>même sous-réseau</strong> et communiquent <strong>sans routeur</strong>. Avec <code>192.168.2.50</code>, il faudrait un routage.` },
      ]
    },
    {
      titre: 'Protocoles applicatifs',
      cartes: [
        { type:'def', label:'DEF', titre:'HTTP et HTTPS',
          contenu:`<strong>HTTP</strong> (HyperText Transfer Protocol) régit les échanges entre un <strong>client</strong> (navigateur) et un <strong>serveur</strong> web, selon un modèle <strong>requête → réponse</strong>.<br>Le client envoie une requête (méthode <code>GET</code>, <code>POST</code>...), le serveur renvoie un code de statut (<code>200</code> OK, <code>404</code> introuvable) et le contenu.<br><strong>HTTPS</strong> ajoute le chiffrement (TLS) pour la confidentialité.` },
        { type:'def', label:'DEF', titre:'Client-serveur et ports',
          contenu:`Le modèle <strong>client-serveur</strong> oppose un serveur, qui offre un service en permanence, à des clients qui le sollicitent.<br>Un <strong>port</strong> (entier sur 16 bits) identifie un service sur une machine : $80$ pour HTTP, $443$ pour HTTPS, $53$ pour DNS, $22$ pour SSH.<br>Le couple (adresse IP, port) identifie précisément un point de communication.` },
        { type:'ex', label:'EX', titre:'Décomposer une URL',
          contenu:`<strong>Énoncé</strong> : analyser <code>https://www.site.fr:443/cours/nsi.html</code>.<br><strong>Résolution</strong> : <code>https</code> = protocole (chiffré) ; <code>www.site.fr</code> = nom de domaine (résolu en IP par le DNS) ; <code>443</code> = port ; <code>/cours/nsi.html</code> = chemin de la ressource sur le serveur. Le navigateur ouvre une connexion TCP vers cette IP sur le port 443.` },
      ]
    },
    {
      titre: 'Fiabilité et sécurité',
      cartes: [
        { type:'def', label:'DEF', titre:'Acquittement et retransmission',
          contenu:`Pour assurer la <strong>fiabilité</strong>, TCP utilise des <strong>accusés de réception</strong> (ACK) : le destinataire confirme chaque segment reçu.<br>Si l'émetteur ne reçoit pas l'ACK avant un délai, il <strong>retransmet</strong> le segment supposé perdu.<br>Les numéros de séquence permettent de <strong>réordonner</strong> les segments arrivés dans le désordre.` },
        { type:'def', label:'DEF', titre:'Chiffrement',
          contenu:`Le <strong>chiffrement</strong> rend un message illisible sans la <strong>clé</strong> de déchiffrement, garantissant la <strong>confidentialité</strong>.<br>— <strong>Symétrique</strong> : même clé pour chiffrer et déchiffrer (rapide).<br>— <strong>Asymétrique</strong> : clé <strong>publique</strong> pour chiffrer, clé <strong>privée</strong> pour déchiffrer. Fonde HTTPS et les signatures numériques.` },
        { type:'ex', label:'EX', titre:'Pourquoi HTTPS sur un réseau public',
          contenu:`<strong>Énoncé</strong> : pourquoi éviter HTTP simple sur un Wi-Fi public ?<br><strong>Résolution</strong> : en HTTP, les données circulent <strong>en clair</strong> ; un attaquant sur le même réseau peut les intercepter (mots de passe, cookies). HTTPS <strong>chiffre</strong> l'échange : même intercepté, le contenu reste illisible sans la clé privée du serveur.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 11. CALCULABILITÉ & DÉCIDABILITÉ  (nouveau)
// ══════════════════════════════════════════════════════════════
{
  id: 'nsi-calculabilite', filiere: 'term-spe-nsi', matiere: 'info',
  titre: 'Calculabilité et décidabilité', ordre: 11, enrich: false,
  sections: [
    {
      titre: 'Notion de calculabilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Programme comme donnée',
          contenu:`Un <strong>programme</strong> est lui-même une <strong>donnée</strong> : du texte, qui peut être manipulé, transmis, ou pris en entrée par un autre programme.<br>Un <strong>interpréteur</strong> ou un <strong>compilateur</strong> prend un programme en entrée. Cette idée (programme = donnée) fonde l'informatique théorique et la machine de von Neumann.` },
        { type:'def', label:'DEF', titre:'Fonction calculable',
          contenu:`Une fonction est <strong>calculable</strong> s'il existe un algorithme qui, pour toute entrée, produit le résultat en un nombre <strong>fini</strong> d'étapes.<br><strong>Thèse de Church-Turing</strong> : tout ce qui est « effectivement calculable » l'est par une machine de Turing (modèle abstrait équivalent à un ordinateur idéal à mémoire illimitée).` },
        { type:'prop', label:'PROP', titre:'Tous les problèmes ne sont pas calculables',
          contenu:`Il existe des fonctions <strong>non calculables</strong> : aucun algorithme ne peut les calculer pour toutes les entrées.<br>Argument : les programmes forment un ensemble <strong>dénombrable</strong>, alors que les fonctions de $\\mathbb{N}$ vers $\\{0, 1\\}$ sont en quantité <strong>non dénombrable</strong>. Il y a donc « plus » de fonctions que de programmes.` },
      ]
    },
    {
      titre: 'Indécidabilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Problème décidable',
          contenu:`Un <strong>problème de décision</strong> attend une réponse oui/non.<br>Il est <strong>décidable</strong> s'il existe un algorithme qui répond correctement et <strong>s'arrête toujours</strong> sur toute entrée.<br>Sinon, il est <strong>indécidable</strong> : aucun algorithme ne peut trancher dans tous les cas.` },
        { type:'th', label:'THM', titre:'Problème de l\'arrêt (Turing)',
          contenu:`Le <strong>problème de l'arrêt</strong> — décider si un programme $P$ s'arrête sur une entrée $e$ — est <strong>indécidable</strong> (Turing, 1936).<br>Il n'existe aucun programme universel <code>arrete(P, e)</code> qui renvoie correctement <code>True</code>/<code>False</code> pour <em>tout</em> couple $(P, e)$. C'est l'exemple historique fondateur d'un problème indécidable.` },
        { type:'meth', label:'METH', titre:'Idée de la preuve (diagonale)',
          contenu:`Par l'absurde, supposons que <code>arrete(P, e)</code> existe. On construit :<br><code>def paradoxe(P):</code><br>&nbsp;&nbsp;<code>if arrete(P, P): while True: pass  # boucle</code><br>&nbsp;&nbsp;<code>else: return  # s'arrête</code><br>Que fait <code>paradoxe(paradoxe)</code> ? S'il s'arrête, la définition le fait boucler ; s'il boucle, elle le fait s'arrêter. <strong>Contradiction</strong> : <code>arrete</code> ne peut exister.` },
        { type:'ex', label:'EX', titre:'Portée pratique',
          contenu:`<strong>Énoncé</strong> : pourquoi ne peut-on écrire un détecteur universel de boucles infinies ?<br><strong>Résolution</strong> : ce serait résoudre le problème de l'arrêt, prouvé <strong>indécidable</strong>. Aucun outil ne peut donc garantir, pour <em>tout</em> programme, la détection des boucles infinies. On se contente d'analyses partielles (heuristiques, vérification sur des cas restreints).` },
      ]
    },
    {
      titre: 'Terminaison et correction',
      cartes: [
        { type:'def', label:'DEF', titre:'Terminaison d\'un programme',
          contenu:`Un programme <strong>termine</strong> s'il s'arrête après un nombre fini d'étapes pour toute entrée valide.<br>Pour une boucle, on exhibe un <strong>variant</strong> : une quantité entière positive qui <strong>décroît strictement</strong> à chaque tour. Comme elle ne peut décroître indéfiniment en restant positive, la boucle s'arrête.` },
        { type:'def', label:'DEF', titre:'Correction et invariant',
          contenu:`Un programme est <strong>correct</strong> s'il calcule bien le résultat spécifié.<br>Pour une boucle, on prouve la correction avec un <strong>invariant</strong> : une propriété <strong>vraie avant la boucle et préservée par chaque tour</strong>. À la sortie, l'invariant combiné à la condition d'arrêt donne le résultat attendu.` },
        { type:'ex', label:'EX', titre:'Prouver une boucle',
          contenu:`<strong>Énoncé</strong> : <code>s=0</code> ; <code>for i in range(1,n+1): s+=i</code>. Prouver $s = \\frac{n(n+1)}{2}$.<br><strong>Résolution</strong> : <strong>invariant</strong> « après le tour $i$, $s = \\frac{i(i+1)}{2}$ ». Vrai au début ($i=1$, $s=1$), préservé : $s_{i} = s_{i-1} + i = \\frac{(i-1)i}{2} + i = \\frac{i(i+1)}{2}$. <strong>Variant</strong> : $n - i$ décroît. En sortie ($i = n$) : $s = \\frac{n(n+1)}{2}$.` },
      ]
    },
    {
      titre: 'Complexité et limites pratiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Calculable vs praticable',
          contenu:`Un problème <strong>calculable</strong> n'est pas forcément résolu <strong>en pratique</strong> : tout dépend du <strong>coût</strong> de l'algorithme.<br>Un algorithme de complexité <strong>polynomiale</strong> ($O(n^k)$) est jugé efficace.<br>Un algorithme <strong>exponentiel</strong> ($O(2^n)$) devient inutilisable dès que $n$ est grand, même si le problème est calculable.` },
        { type:'prop', label:'PROP', titre:'Explosion combinatoire',
          contenu:`Certains problèmes (ex. le voyageur de commerce par force brute) exigent d'explorer un nombre <strong>exponentiel</strong> ou <strong>factoriel</strong> de cas.<br>Pour $n = 20$ villes, $20! \\approx 2{,}4 \\times 10^{18}$ trajets : hors de portée. On recourt alors à des <strong>heuristiques</strong> donnant une bonne solution approchée, sans garantie d'optimalité.` },
        { type:'ex', label:'EX', titre:'Comparer deux complexités',
          contenu:`<strong>Énoncé</strong> : un algorithme A en $O(n^2)$, un algorithme B en $O(2^n)$. Pour $n = 50$ ?<br><strong>Résolution</strong> : A effectue $\\approx 2500$ opérations, négligeable. B en effectue $\\approx 2^{50} \\approx 10^{15}$, soit des jours de calcul. Un algorithme polynomial reste praticable là où un algorithme exponentiel explose : la complexité, et non la seule calculabilité, dicte la faisabilité.` },
      ]
    },
  ]
},

]
