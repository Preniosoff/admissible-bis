export const DATA = [
  {
    id: 'nsi-reseaux',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Du clic au paquet : adressage, routage et fiabilité',
            contenu: `<strong>Énoncé.</strong> Un poste de travail d'adresse IP <code>192.168.1.42</code> avec le masque <code>255.255.255.0</code> souhaite charger la page <code>http://www.exemple.fr/index.html</code> hébergée sur un serveur d'adresse <code>93.184.216.34</code>. La passerelle du réseau local a pour adresse <code>192.168.1.1</code>.
<br><br>
<strong>1.</strong> Déterminer l'adresse réseau du poste de travail et le nombre maximal de machines adressables sur ce réseau local. Le serveur <code>93.184.216.34</code> appartient-il au même réseau local ? Justifier.
<br><br>
<strong>2.</strong> Avant tout échange, le poste doit obtenir l'adresse IP correspondant au nom <code>www.exemple.fr</code>. Quel protocole applicatif réalise cette traduction ? À quelle couche du modèle TCP/IP appartient-il et sur quel protocole de transport s'appuie-t-il habituellement ?
<br><br>
<strong>3.</strong> Le poste utilise <code>HTTP</code> au-dessus de <code>TCP</code> (port 80). Expliquer pourquoi <code>TCP</code> est dit « fiable » et citer deux mécanismes qui assurent cette fiabilité. Pourquoi le <code>DNS</code> peut-il, lui, se contenter d'<code>UDP</code> ?
<br><br>
<strong>4.</strong> On capture le trajet d'un paquet : il traverse 3 routeurs avant d'atteindre le serveur. Expliquer le rôle d'un routeur et indiquer ce que devient le champ <code>TTL</code> (durée de vie) du paquet à chaque traversée. À quoi sert ce champ ?
<br><br>
<strong>5.</strong> La connexion réelle se fait en <code>HTTPS</code>. Quel apport de sécurité <code>TLS</code> apporte-t-il par rapport à <code>HTTP</code> ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Le masque <code>255.255.255.0</code> (soit /24) garde les 24 premiers bits comme partie réseau. Adresse réseau : on met à 0 les bits hôte, donc <code>192.168.1.0</code>. Les hôtes occupent les 8 derniers bits, soit $2^{8}=256$ adresses, dont 2 réservées (adresse réseau <code>.0</code> et adresse de diffusion <code>.255</code>) : il reste donc <strong>254 machines adressables</strong>.<br>
Le serveur <code>93.184.216.34</code> appartient au réseau <code>93.184.216.0/24</code>, différent de <code>192.168.1.0</code> : il <strong>n'est pas</strong> sur le réseau local. Les paquets devront passer par la passerelle <code>192.168.1.1</code>.<br><br>
<strong>2.</strong> La traduction nom → adresse IP est assurée par le <strong>DNS</strong> (Domain Name System). C'est un protocole de la <strong>couche application</strong>, qui s'appuie habituellement sur <strong>UDP</strong> (port 53).<br><br>
<strong>3.</strong> <code>TCP</code> est fiable car il garantit que les données arrivent <strong>complètes, sans erreur et dans l'ordre</strong>. Mécanismes : (a) <strong>numérotation des segments</strong> et réassemblage dans l'ordre côté récepteur ; (b) <strong>accusés de réception (ACK) et retransmission</strong> en cas de non-réception (avec délais d'attente). On peut aussi citer la somme de contrôle et le contrôle de flux. Le <code>DNS</code> se contente d'<code>UDP</code> car une requête/réponse tient en un seul petit message : pas besoin d'établir une connexion ni de garantir l'ordre, et si la réponse se perd, on réémet simplement la requête — la rapidité prime.<br><br>
<strong>4.</strong> Un <strong>routeur</strong> relie plusieurs réseaux ; il examine l'adresse IP de destination de chaque paquet et le transmet, selon sa table de routage, vers le routeur suivant le plus proche du but (saut par saut). À <strong>chaque traversée de routeur</strong>, le champ <code>TTL</code> est <strong>décrémenté de 1</strong>. S'il atteint 0, le paquet est détruit : cela évite qu'un paquet ne tourne <strong>indéfiniment</strong> en boucle dans le réseau en cas d'erreur de routage.<br><br>
<strong>5.</strong> <code>TLS</code> (couche au-dessus de TCP) apporte le <strong>chiffrement</strong> des échanges (confidentialité : un espion ne lit pas le contenu), l'<strong>authentification</strong> du serveur via son certificat (on parle bien au vrai <code>www.exemple.fr</code>) et l'<strong>intégrité</strong> des données (détection de toute altération en route).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-struct',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Pile, file, dictionnaire : vérifier un balisage',
            contenu: `<strong>Énoncé.</strong> On manipule des structures de données via leurs <em>interfaces</em> (types abstraits), sans présupposer leur implémentation.
<br><br>
On dispose d'une <strong>pile</strong> avec <code>empiler(p, x)</code>, <code>depiler(p)</code> (renvoie et retire le sommet), <code>est_vide(p)</code> ; d'une <strong>file</strong> avec <code>enfiler(f, x)</code>, <code>defiler(f)</code>, <code>est_vide(f)</code> ; et d'un <strong>dictionnaire</strong> Python ordinaire.
<br><br>
<strong>1.</strong> Rappeler la différence de politique d'accès entre une pile (LIFO) et une file (FIFO). Pour la suite d'opérations <code>empiler(p,'A')</code>, <code>empiler(p,'B')</code>, <code>empiler(p,'C')</code>, <code>depiler(p)</code>, <code>empiler(p,'D')</code>, <code>depiler(p)</code>, donner les deux valeurs dépilées <strong>dans l'ordre</strong>.
<br><br>
<strong>2.</strong> On veut vérifier qu'une chaîne de balises comme <code>"([{}])"</code> est <strong>bien parenthésée</strong> (chaque fermeture correspond à la dernière ouverture non encore fermée). Expliquer pourquoi une <strong>pile</strong> est la structure adaptée, et pourquoi une file ne conviendrait pas.
<br><br>
<strong>3.</strong> Écrire en Python une fonction <code>bien_parenthese(ch)</code> qui renvoie <code>True</code> ou <code>False</code>. On utilisera un dictionnaire associant chaque fermante à sa correspondante ouvrante.
<br><br>
<strong>4.</strong> Dérouler l'exécution sur <code>"([)]"</code> et conclure.
<br><br>
<strong>5.</strong> Quelle est la complexité de votre fonction en fonction de la longueur $n$ de la chaîne ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Une <strong>pile</strong> est <em>LIFO</em> (Last In, First Out) : on retire toujours le dernier élément inséré. Une <strong>file</strong> est <em>FIFO</em> (First In, First Out) : on retire le plus ancien.<br>
Déroulé : empile A, B, C → sommet C ; <code>depiler</code> renvoie <strong>'C'</strong> (reste A,B) ; empile D (reste A,B,D) ; <code>depiler</code> renvoie <strong>'D'</strong>. Valeurs dépilées dans l'ordre : <strong>C puis D</strong>.<br><br>
<strong>2.</strong> Quand on lit une fermante, elle doit correspondre à la <strong>dernière ouvrante non encore fermée</strong> — c'est exactement la politique LIFO : on dépile le sommet. Une file rendrait l'ouvrante la plus ancienne, ce qui casserait l'imbrication (ex. <code>"([)]"</code>).<br><br>
<strong>3.</strong><br>
<code>def bien_parenthese(ch):</code><br>
<code>&nbsp;&nbsp;paires = </code>$\\{$<code> ')':'(', ']':'[', '}':'</code>$\\{$<code>' </code>$\\}$<br>
<code>&nbsp;&nbsp;p = []  # pile (liste Python)</code><br>
<code>&nbsp;&nbsp;for c in ch:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;if c in '([</code>$\\{$<code>':</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.append(c)        # empiler</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;elif c in paires:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(p)==0 or p.pop() != paires[c]:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False</code><br>
<code>&nbsp;&nbsp;return len(p)==0</code><br><br>
<strong>4.</strong> Sur <code>"([)]"</code> : lit <code>'('</code> → pile <code>['(']</code> ; lit <code>'['</code> → pile <code>['(','[']</code> ; lit <code>')'</code> → on dépile <code>'['</code>, or <code>paires[')']='('</code> ≠ <code>'['</code> → renvoie <strong>False</strong>. La chaîne est <strong>mal parenthésée</strong> (mauvaise imbrication), ce qui est correct.<br><br>
<strong>5.</strong> Chaque caractère est lu une seule fois ; <code>append</code> et <code>pop</code> sur une pile sont en temps constant $O(1)$. La complexité est donc <strong>linéaire</strong>, en $O(n)$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'nsi-systeme',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Processus, ordonnancement et interblocage',
            contenu: `<strong>Énoncé.</strong> Sur un système d'exploitation classique, on étudie l'exécution de plusieurs programmes.
<br><br>
<strong>1.</strong> Citer trois rôles fondamentaux assurés par un système d'exploitation. Préciser ce qu'on appelle un <strong>processus</strong> et en quoi il diffère d'un programme.
<br><br>
<strong>2.</strong> Sur un ordinateur à un seul cœur, trois processus P1, P2, P3 sont « en cours » simultanément du point de vue de l'utilisateur. Expliquer comment le système crée cette illusion. Quel composant du système décide quel processus s'exécute à un instant donné ?
<br><br>
<strong>3.</strong> On utilise un ordonnancement à <strong>tourniquet</strong> (round-robin) de quantum 2 ms. Les processus arrivent à $t=0$ dans l'ordre P1, P2, P3 et demandent respectivement 5 ms, 3 ms et 1 ms de calcul. Donner l'ordre d'exécution par tranches et l'instant de fin de chaque processus.
<br><br>
<strong>4.</strong> Deux processus A et B ont chacun besoin de deux ressources R1 et R2. A obtient R1 et attend R2 ; B obtient R2 et attend R1. Décrire la situation. Comment l'appelle-t-on ? Proposer une règle simple évitant ce problème.
<br><br>
<strong>5.</strong> Le fichier <code>/etc/secret</code> a les permissions <code>rw-r-----</code> et appartient à l'utilisateur <code>root</code>, groupe <code>admin</code>. L'utilisateur <code>alice</code> (membre du groupe <code>admin</code>) peut-elle modifier ce fichier ? Le lire ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> Rôles du SE : (a) <strong>gérer le matériel</strong> et offrir une interface aux programmes (abstraction du processeur, de la mémoire, des disques) ; (b) <strong>gérer les processus</strong> (création, ordonnancement, terminaison) ; (c) <strong>gérer les fichiers et les droits</strong> (système de fichiers, permissions). On peut aussi citer la gestion de la mémoire. Un <strong>programme</strong> est un fichier passif sur disque ; un <strong>processus</strong> est un programme <em>en cours d'exécution</em>, avec son propre état (mémoire, registres, compteur d'instructions).<br><br>
<strong>2.</strong> Le système pratique le <strong>temps partagé</strong> : il exécute très rapidement chaque processus pendant une courte tranche de temps, puis bascule vers le suivant (<em>commutation de contexte</em>). Les bascules étant très fréquentes, l'utilisateur a l'illusion du parallélisme alors qu'il y a en réalité <strong>pseudo-parallélisme</strong>. C'est l'<strong>ordonnanceur</strong> (scheduler) qui choisit le processus à exécuter.<br><br>
<strong>3.</strong> Quantum 2 ms, restes initiaux : P1=5, P2=3, P3=1.<br>
Tranche [0,2] P1 (reste 3) ; [2,4] P2 (reste 1) ; [4,5] P3 (reste 0 → <strong>P3 finit à 5 ms</strong>) ; [5,7] P1 (reste 1) ; [7,8] P2 (reste 0 → <strong>P2 finit à 8 ms</strong>) ; [8,9] P1 (reste 0 → <strong>P1 finit à 9 ms</strong>).<br>
Ordre des tranches : P1, P2, P3, P1, P2, P1.<br><br>
<strong>4.</strong> Chaque processus détient une ressource et attend celle que l'autre détient : aucun ne peut progresser, ils sont bloqués pour toujours. C'est un <strong>interblocage</strong> (deadlock). Règle simple d'évitement : imposer un <strong>ordre global d'acquisition</strong> des ressources (tout processus demande toujours R1 avant R2). Ainsi le cycle d'attente devient impossible.<br><br>
<strong>5.</strong> Permissions <code>rw-r-----</code> : propriétaire (<code>root</code>) lecture+écriture ; groupe (<code>admin</code>) <strong>lecture seule</strong> ; autres aucun droit. <code>alice</code> n'est pas <code>root</code> mais appartient au groupe <code>admin</code> : elle peut <strong>lire</strong> le fichier mais <strong>ne peut pas le modifier</strong> (pas de droit d'écriture pour le groupe).
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-deriv',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Tangente, variations et optimisation d\'une boîte',
            contenu: `<strong>Énoncé.</strong> On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^{3} - 3x^{2} + 4$.
<br><br>
<strong>1.</strong> Calculer le nombre dérivé $f'(2)$. En déduire l'équation de la tangente $T$ à la courbe au point d'abscisse $2$.
<br><br>
<strong>2.</strong> Déterminer la fonction dérivée $f'$, puis étudier son signe sur $\\mathbb{R}$.
<br><br>
<strong>3.</strong> Dresser le tableau de variations de $f$ en précisant les valeurs des extremums locaux.
<br><br>
<strong>4.</strong> <em>Application.</em> On fabrique une boîte sans couvercle en découpant un carré de côté $x$ (en cm) à chaque coin d'une plaque carrée de côté $12$ cm, puis en repliant. Le volume vaut $V(x) = x(12 - 2x)^{2}$ pour $x \\in [0\\,;\\,6]$. Calculer $V'(x)$ et déterminer la valeur de $x$ qui rend le volume maximal. Donner ce volume maximal.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $f'(x) = 3x^{2} - 6x$, donc $f'(2) = 3\\times 4 - 12 = 0$. La tangente a pour coefficient directeur $0$ : elle est horizontale. Comme $f(2) = 8 - 12 + 4 = 0$, l'équation est $T : y = 0$.<br><br>
<strong>2.</strong> $f'(x) = 3x^{2} - 6x = 3x(x - 2)$. C'est un trinôme de racines $0$ et $2$, de coefficient dominant positif : $f'(x) > 0$ sur $]-\\infty\\,;0[$, $f'(x) < 0$ sur $]0\\,;2[$, $f'(x) > 0$ sur $]2\\,;+\\infty[$.<br><br>
<strong>3.</strong> $f$ est croissante sur $]-\\infty\\,;0]$, décroissante sur $[0\\,;2]$, croissante sur $[2\\,;+\\infty[$. En $x=0$ : <strong>maximum local</strong> $f(0) = 4$. En $x=2$ : <strong>minimum local</strong> $f(2) = 0$.<br><br>
<strong>4.</strong> $V(x) = x(12 - 2x)^{2}$. On dérive avec la formule du produit, $u = x$ et $v = (12-2x)^{2}$, $v' = 2\\times(-2)(12-2x) = -4(12-2x)$ :<br>
$V'(x) = 1\\cdot(12-2x)^{2} + x\\cdot\\big(-4(12-2x)\\big) = (12-2x)\\big[(12-2x) - 4x\\big] = (12-2x)(12 - 6x)$.<br>
Sur $[0\\,;6]$, $12 - 2x \\ge 0$ ; $V'(x)$ a le signe de $12 - 6x$, positif pour $x < 2$, négatif pour $x > 2$. $V$ atteint donc son maximum en $x = 2$.<br>
$V(2) = 2\\times(12 - 4)^{2} = 2\\times 64 = 128$. Le volume maximal est <strong>$128$ cm³</strong>, obtenu pour des coins de côté <strong>$2$ cm</strong>.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-expo',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Exponentielle : algèbre, dérivation et inéquation',
            contenu: `<strong>Énoncé.</strong> On rappelle que la fonction exponentielle vérifie $e^{0}=1$, $e^{a+b}=e^{a}e^{b}$ et $e^{x}>0$ pour tout réel $x$.
<br><br>
<strong>1.</strong> Simplifier au maximum l'expression $A = \\dfrac{e^{2x}\\times e^{3}}{e^{x-1}}$, puis donner sa valeur exacte pour $x = 0$.
<br><br>
<strong>2.</strong> Résoudre dans $\\mathbb{R}$ l'équation $e^{x^{2}} = e^{3x - 2}$.
<br><br>
<strong>3.</strong> On considère $g(x) = (2x - 1)\\,e^{-x}$. Calculer $g'(x)$ et la mettre sous forme factorisée.
<br><br>
<strong>4.</strong> Étudier le signe de $g'(x)$ et dresser le tableau de variations de $g$ sur $\\mathbb{R}$.
<br><br>
<strong>5.</strong> Résoudre l'inéquation $g(x) > 0$.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $A = \\dfrac{e^{2x}\\,e^{3}}{e^{x-1}} = e^{2x + 3 - (x-1)} = e^{x + 4}$. Pour $x=0$ : $A = e^{4}$.<br><br>
<strong>2.</strong> La fonction exponentielle est strictement croissante donc injective : $e^{u}=e^{v} \\iff u=v$. D'où $x^{2} = 3x - 2$, soit $x^{2} - 3x + 2 = 0$. Discriminant $\\Delta = 9 - 8 = 1$, racines $x = \\dfrac{3 \\pm 1}{2}$, donc $x = 1$ ou $x = 2$. Solutions : $\\{1\\,;\\,2\\}$.<br><br>
<strong>3.</strong> $g(x) = (2x-1)e^{-x}$, produit $u v$ avec $u = 2x-1$, $u' = 2$, $v = e^{-x}$, $v' = -e^{-x}$ (dérivée de $e^{u}$ avec $u=-x$).<br>
$g'(x) = 2e^{-x} + (2x-1)(-e^{-x}) = e^{-x}\\big[2 - (2x-1)\\big] = e^{-x}(3 - 2x)$.<br><br>
<strong>4.</strong> Comme $e^{-x} > 0$, le signe de $g'(x)$ est celui de $3 - 2x$ : positif pour $x < \\dfrac{3}{2}$, négatif pour $x > \\dfrac{3}{2}$. Donc $g$ est croissante sur $\\big]{-\\infty}\\,;\\tfrac{3}{2}\\big]$ puis décroissante sur $\\big[\\tfrac{3}{2}\\,;+\\infty\\big[$. Maximum en $x=\\tfrac{3}{2}$ : $g\\!\\left(\\tfrac{3}{2}\\right) = (3-1)e^{-3/2} = 2e^{-3/2}$.<br><br>
<strong>5.</strong> $e^{-x} > 0$ toujours, donc $g(x) > 0 \\iff 2x - 1 > 0 \\iff x > \\dfrac{1}{2}$. Ensemble solution : $\\big]\\tfrac{1}{2}\\,;+\\infty\\big[$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-geo-rep',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Vecteurs, droites et cercle dans un repère',
            contenu: `<strong>Énoncé.</strong> Dans un repère orthonormé, on donne les points $A(1\\,;2)$, $B(5\\,;4)$ et $C(3\\,;6)$.
<br><br>
<strong>1.</strong> Calculer les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{AC}$. Les points $A$, $B$, $C$ sont-ils alignés ? Justifier par un calcul de colinéarité.
<br><br>
<strong>2.</strong> Déterminer une équation cartésienne de la droite $(AB)$.
<br><br>
<strong>3.</strong> Soit $I$ le milieu de $[AB]$. Calculer ses coordonnées, puis déterminer une équation du cercle $\\mathcal{C}$ de diamètre $[AB]$.
<br><br>
<strong>4.</strong> Le point $C$ appartient-il au cercle $\\mathcal{C}$ ? Quelle propriété géométrique cela traduit-il pour le triangle $ABC$ ?
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $\\vec{AB}\\,(5-1\\,;4-2) = (4\\,;2)$ et $\\vec{AC}\\,(3-1\\,;6-2) = (2\\,;4)$. Test de colinéarité par le déterminant : $4\\times 4 - 2\\times 2 = 16 - 4 = 12 \\neq 0$. Les vecteurs ne sont pas colinéaires : $A$, $B$, $C$ <strong>ne sont pas alignés</strong>.<br><br>
<strong>2.</strong> La droite $(AB)$ passe par $A(1\\,;2)$ et a pour vecteur directeur $\\vec{AB}(4\\,;2)$. Un point $M(x\\,;y)$ est sur $(AB)$ ssi $\\vec{AM}$ et $\\vec{AB}$ sont colinéaires : $\\,(x-1)\\times 2 - (y-2)\\times 4 = 0$, soit $2x - 2 - 4y + 8 = 0$, d'où $2x - 4y + 6 = 0$, ou encore $x - 2y + 3 = 0$.<br><br>
<strong>3.</strong> Milieu $I\\left(\\dfrac{1+5}{2}\\,;\\dfrac{2+4}{2}\\right) = (3\\,;3)$. Le rayon est $\\dfrac{AB}{2}$ avec $AB = \\sqrt{4^{2}+2^{2}} = \\sqrt{20}$, donc $r = \\dfrac{\\sqrt{20}}{2}$ et $r^{2} = \\dfrac{20}{4} = 5$. Équation du cercle de centre $I(3\\,;3)$ et de rayon au carré $5$ : $(x-3)^{2} + (y-3)^{2} = 5$.<br><br>
<strong>4.</strong> On teste $C(3\\,;6)$ : $(3-3)^{2} + (6-3)^{2} = 0 + 9 = 9 \\neq 5$. Donc $C$ <strong>n'appartient pas</strong> au cercle. Par conséquent l'angle $\\widehat{ACB}$ <strong>n'est pas droit</strong> (sinon, par la réciproque sur le cercle de diamètre $[AB]$, $C$ serait sur $\\mathcal{C}$). On le vérifie : $\\vec{CA}\\,(-2\\,;-4)$ et $\\vec{CB}\\,(2\\,;-2)$ donnent un produit scalaire $(-2)(2)+(-4)(-2) = -4+8 = 4 \\neq 0$ : le triangle n'est pas rectangle en $C$.
</details>`
          }
        ]
      }
    ]
  },
  {
    id: 'ma-1e-proba',
    append: true,
    sections: [
      {
        titre: '🎯 Exercice charnière',
        cartes: [
          {
            type: 'exo', label: 'EXERCICE',
            titre: 'Arbre, probabilités totales et indépendance',
            contenu: `<strong>Énoncé.</strong> Une usine fabrique des composants sur deux chaînes. La chaîne $A$ produit $60\\,\\%$ des composants, la chaîne $B$ les $40\\,\\%$ restants. Parmi les composants de $A$, $2\\,\\%$ sont défectueux ; parmi ceux de $B$, $5\\,\\%$ sont défectueux. On prélève un composant au hasard. On note $D$ l'événement « le composant est défectueux ».
<br><br>
<strong>1.</strong> Traduire les données en probabilités, puis construire un arbre pondéré.
<br><br>
<strong>2.</strong> Calculer la probabilité que le composant provienne de $A$ et soit défectueux.
<br><br>
<strong>3.</strong> En utilisant la formule des probabilités totales, calculer $P(D)$.
<br><br>
<strong>4.</strong> Un composant prélevé est défectueux. Quelle est la probabilité qu'il provienne de la chaîne $B$ ? (Donner une valeur arrondie à $10^{-3}$.)
<br><br>
<strong>5.</strong> Les événements « provenir de la chaîne $A$ » et « être défectueux » sont-ils indépendants ? Justifier.
<details class="exo-corrige"><summary>Voir le corrigé</summary>
<strong>1.</strong> $P(A) = 0{,}6$, $P(B) = 0{,}4$. Probabilités conditionnelles : $P_A(D) = 0{,}02$ et $P_B(D) = 0{,}05$. L'arbre a deux branches principales ($A$, $B$), chacune se subdivisant en $D$ et $\\overline{D}$.<br><br>
<strong>2.</strong> $P(A \\cap D) = P(A)\\times P_A(D) = 0{,}6 \\times 0{,}02 = 0{,}012$.<br><br>
<strong>3.</strong> Les événements $A$ et $B$ forment une partition. Par les probabilités totales :<br>
$P(D) = P(A\\cap D) + P(B\\cap D) = 0{,}6\\times 0{,}02 + 0{,}4\\times 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032$.<br><br>
<strong>4.</strong> On cherche $P_D(B) = \\dfrac{P(B \\cap D)}{P(D)} = \\dfrac{0{,}020}{0{,}032} = 0{,}625$. Arrondi à $10^{-3}$ : $\\mathbf{0{,}625}$. Ainsi, parmi les composants défectueux, près de $62{,}5\\,\\%$ viennent de la chaîne $B$ alors qu'elle ne fournit que $40\\,\\%$ de la production.<br><br>
<strong>5.</strong> $A$ et $D$ sont indépendants ssi $P(A\\cap D) = P(A)\\times P(D)$. Or $P(A)\\times P(D) = 0{,}6 \\times 0{,}032 = 0{,}0192$, tandis que $P(A\\cap D) = 0{,}012$. Comme $0{,}012 \\neq 0{,}0192$, les événements <strong>ne sont pas indépendants</strong> (ce qui est cohérent : la qualité dépend de la chaîne).
</details>`
          }
        ]
      }
    ]
  }
]
