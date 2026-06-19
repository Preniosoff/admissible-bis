// Renforcement qualité — chapitres qui étaient trop courts pour être réellement exploitables.
// Rechargement forcé après correction du loader des dépendances de cartes.
// Contenu original Admiscible, format cours + méthode + exercice.

export const DATA = [
  {
    id: 'ma-3e-calclit1', filiere: '3eme', matiere: 'ma',
    titre: 'Calcul littéral (1) — Développements et factorisations', ordre: 3, enrich: true,
    sections: [
      { titre: 'Expressions littérales', cartes: [
        { type:'def', label:'DEF', titre:'Expression littérale', contenu:`Une <strong>expression littérale</strong> contient des nombres, des lettres et des opérations. Les lettres représentent des nombres inconnus ou variables.<br>Exemple : $3x+5$ dépend de la valeur choisie pour $x$.` },
        { type:'prop', label:'PROP', titre:'Réduire une expression', contenu:`Réduire consiste à regrouper les termes de même nature :<br>$$3x+5x=8x,\\qquad 7a-2a+4=5a+4.$$<br>On ne peut pas additionner directement des termes différents comme $3x$ et $4x^2$.` },
        { type:'meth', label:'METH', titre:'Supprimer des parenthèses', contenu:`Devant une parenthèse précédée de $+$, les signes ne changent pas : $a+(b-c)=a+b-c$.<br>Devant une parenthèse précédée de $-$, tous les signes changent : $a-(b-c)=a-b+c$.` },
      ] },
      { titre: 'Développer', cartes: [
        { type:'def', label:'DEF', titre:'Développer', contenu:`<strong>Développer</strong>, c'est transformer un produit en somme ou différence. On utilise la distributivité :<br>$$k(a+b)=ka+kb.$$` },
        { type:'form', label:'FORM', titre:'Double distributivité', contenu:`Pour deux parenthèses :<br>$$(a+b)(c+d)=ac+ad+bc+bd.$$<br>Chaque terme de la première parenthèse multiplie chaque terme de la seconde.` },
        { type:'ex', label:'EX', titre:'Exemple développé', contenu:`Développer : $(2x-3)(x+5)$.<br>$(2x-3)(x+5)=2x^2+10x-3x-15=2x^2+7x-15$.` },
      ] },
      { titre: 'Identités remarquables', cartes: [
        { type:'form', label:'FORM', titre:'Les trois identités', contenu:`$$(a+b)^2=a^2+2ab+b^2$$$$(a-b)^2=a^2-2ab+b^2$$$$(a+b)(a-b)=a^2-b^2$$` },
        { type:'meth', label:'METH', titre:'Reconnaître une identité remarquable', contenu:`Chercher d'abord les carrés : $x^2$, $9=3^2$, $25=5^2$. Puis repérer le terme double $2ab$. Exemple : $x^2+10x+25=(x+5)^2$.` },
        { type:'ex', label:'EX', titre:'Application', contenu:`Factoriser $4x^2-12x+9$.<br>On reconnaît $a=2x$, $b=3$ :<br>$$4x^2-12x+9=(2x-3)^2.$$` },
      ] },
      { titre: 'Factoriser', cartes: [
        { type:'def', label:'DEF', titre:'Factoriser', contenu:`<strong>Factoriser</strong>, c'est transformer une somme en produit. C'est l'opération inverse du développement.` },
        { type:'meth', label:'METH', titre:'Chercher un facteur commun', contenu:`Dans $6x+9$, le facteur commun est $3$ :<br>$$6x+9=3(2x+3).$$<br>Dans $5x^2-10x$, le facteur commun est $5x$ :<br>$$5x^2-10x=5x(x-2).$$` },
        { type:'ex', label:'EX', titre:'Exercice type', contenu:`Factoriser puis calculer pour $x=10$ : $7x+21=7(x+3)$.<br>Pour $x=10$ : $7(10+3)=91$.` },
      ] },
    ]
  },
  {
    id: 'ma-3e-fonc', filiere: '3eme', matiere: 'ma',
    titre: 'Notions de fonction', ordre: 6, enrich: true,
    sections: [
      { titre: 'Vocabulaire', cartes: [
        { type:'def', label:'DEF', titre:'Fonction', contenu:`Une <strong>fonction</strong> est un procédé qui associe à un nombre de départ un unique nombre d'arrivée. On note souvent $f(x)$ l'image de $x$ par la fonction $f$.` },
        { type:'def', label:'DEF', titre:'Image', contenu:`L'<strong>image</strong> de $x$ par $f$ est le nombre obtenu en appliquant la fonction à $x$. Si $f(x)=2x+3$, alors l'image de $4$ est $f(4)=11$.` },
        { type:'def', label:'DEF', titre:'Antécédent', contenu:`Un <strong>antécédent</strong> de $y$ par $f$ est un nombre $x$ tel que $f(x)=y$. Un nombre peut avoir aucun, un ou plusieurs antécédents selon la fonction.` },
      ] },
      { titre: 'Calculer avec une formule', cartes: [
        { type:'meth', label:'METH', titre:'Calculer une image', contenu:`Pour calculer $f(a)$, remplacer $x$ par $a$ dans l'expression de $f(x)$, puis effectuer les calculs dans l'ordre.` },
        { type:'ex', label:'EX', titre:'Exemple', contenu:`Si $f(x)=x^2-4x+1$, alors :<br>$$f(3)=3^2-4\\times3+1=9-12+1=-2.$$` },
        { type:'meth', label:'METH', titre:'Chercher un antécédent', contenu:`Chercher un antécédent revient souvent à résoudre une équation. Si $f(x)=2x+5$ et qu'on cherche les antécédents de $17$, on résout $2x+5=17$, donc $x=6$.` },
      ] },
      { titre: 'Tableaux et graphiques', cartes: [
        { type:'def', label:'DEF', titre:'Tableau de valeurs', contenu:`Un tableau de valeurs présente quelques nombres $x$ et leurs images $f(x)$. Il permet de calculer des points de la courbe, mais il ne donne pas toujours toute l'information sur la fonction.` },
        { type:'prop', label:'PROP', titre:'Courbe représentative', contenu:`La courbe représentative de $f$ est l'ensemble des points de coordonnées $(x;f(x))$. Lire une image revient à partir de l'abscisse ; lire un antécédent revient à partir de l'ordonnée.` },
        { type:'meth', label:'METH', titre:'Lire graphiquement', contenu:`Pour lire $f(2)$, partir de $2$ sur l'axe horizontal, rejoindre la courbe, puis lire l'ordonnée. Pour chercher les antécédents de $3$, tracer mentalement la ligne horizontale d'ordonnée $3$ et lire les abscisses d'intersection.` },
      ] },
      { titre: 'Pièges fréquents', cartes: [
        { type:'prop', label:'PROP', titre:'Image unique', contenu:`Pour une fonction, un nombre de départ ne peut avoir qu'une seule image. En revanche, un même nombre d'arrivée peut avoir plusieurs antécédents.` },
        { type:'meth', label:'METH', titre:'Ne pas confondre $x$ et $f(x)$', contenu:`$x$ désigne l'entrée, $f(x)$ désigne la sortie. Sur un graphique, $x$ se lit horizontalement, $f(x)$ verticalement.` },
        { type:'ex', label:'EX', titre:'Exercice type', contenu:`Soit $f(x)=3x-2$. Calculer l'image de $5$ et chercher un antécédent de $10$.<br>$f(5)=13$. Pour $10$ : $3x-2=10$, donc $x=4$.` },
      ] },
    ]
  },
  {
    id: 'ma-3e-trisiml', filiere: '3eme', matiere: 'ma',
    titre: 'Triangles semblables', ordre: 7, enrich: true,
    sections: [
      { titre: 'Définition', cartes: [
        { type:'def', label:'DEF', titre:'Triangles semblables', contenu:`Deux triangles sont <strong>semblables</strong> lorsqu'ils ont la même forme : leurs angles correspondants sont égaux et leurs longueurs correspondantes sont proportionnelles.` },
        { type:'prop', label:'PROP', titre:'Angles correspondants', contenu:`Si deux triangles ont deux angles deux à deux égaux, alors ils sont semblables. Le troisième angle est automatiquement égal car la somme des angles d'un triangle vaut $180^\\circ$.` },
        { type:'def', label:'DEF', titre:'Rapport de similitude', contenu:`Le <strong>rapport de similitude</strong> est le coefficient qui multiplie les longueurs d'un triangle pour obtenir les longueurs correspondantes de l'autre.` },
      ] },
      { titre: 'Longueurs proportionnelles', cartes: [
        { type:'form', label:'FORM', titre:'Égalité des rapports', contenu:`Si $ABC$ et $DEF$ sont semblables avec correspondances $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$, alors :<br>$$\\frac{AB}{DE}=\\frac{AC}{DF}=\\frac{BC}{EF}.$$` },
        { type:'meth', label:'METH', titre:'Trouver les côtés correspondants', contenu:`Commencer par associer les angles égaux. Le côté opposé à un angle correspond au côté opposé à l'angle égal dans l'autre triangle.` },
        { type:'ex', label:'EX', titre:'Calcul type', contenu:`Deux triangles semblables ont des côtés correspondants $4$ cm et $10$ cm. Le rapport d'agrandissement vaut $10/4=2{,}5$. Un côté correspondant à $6$ cm devient $15$ cm.` },
      ] },
      { titre: 'Démontrer une similitude', cartes: [
        { type:'meth', label:'METH', titre:'Méthode par les angles', contenu:`Pour démontrer que deux triangles sont semblables, chercher des angles égaux : angles alternes-internes avec des parallèles, angles opposés par le sommet, angles droits, angles communs.` },
        { type:'meth', label:'METH', titre:'Méthode par les longueurs', contenu:`Si les trois rapports de côtés correspondants sont égaux, alors les triangles sont semblables. Il faut être très rigoureux dans l'ordre des côtés comparés.` },
        { type:'prop', label:'PROP', titre:'Lien avec Thalès', contenu:`Une configuration de Thalès produit souvent des triangles semblables : les parallèles créent des angles égaux et donc des longueurs proportionnelles.` },
      ] },
    ]
  },
  {
    id: 'ma-3e-agrand', filiere: '3eme', matiere: 'ma',
    titre: 'Agrandissements et réductions', ordre: 13, enrich: true,
    sections: [
      { titre: 'Coefficient', cartes: [
        { type:'def', label:'DEF', titre:'Agrandissement ou réduction', contenu:`Un agrandissement ou une réduction multiplie toutes les longueurs d'une figure par un même nombre positif $k$. Si $k>1$, c'est un agrandissement ; si $0<k<1$, c'est une réduction.` },
        { type:'form', label:'FORM', titre:'Longueurs', contenu:`Les longueurs sont multipliées par $k$ :<br>$$L_{nouvelle}=k\\times L_{ancienne}.$$` },
        { type:'ex', label:'EX', titre:'Exemple', contenu:`Un segment de $8$ cm est réduit avec $k=0{,}75$. Sa nouvelle longueur vaut $8\\times0{,}75=6$ cm.` },
      ] },
      { titre: 'Aires et volumes', cartes: [
        { type:'form', label:'FORM', titre:'Aires', contenu:`Lors d'un agrandissement ou d'une réduction de coefficient $k$, les <strong>aires</strong> sont multipliées par $k^2$.` },
        { type:'form', label:'FORM', titre:'Volumes', contenu:`Lors d'un agrandissement ou d'une réduction de coefficient $k$, les <strong>volumes</strong> sont multipliés par $k^3$.` },
        { type:'ex', label:'EX', titre:'Application', contenu:`Si une figure est agrandie avec $k=3$, ses longueurs sont multipliées par $3$, ses aires par $9$ et ses volumes par $27$.` },
      ] },
      { titre: 'Méthodes', cartes: [
        { type:'meth', label:'METH', titre:'Retrouver le coefficient', contenu:`Comparer deux longueurs correspondantes :<br>$$k=\\frac{\\text{longueur nouvelle}}{\\text{longueur ancienne}}.$$` },
        { type:'meth', label:'METH', titre:'Choisir la bonne puissance', contenu:`Pour une longueur, utiliser $k$. Pour une aire, utiliser $k^2$. Pour un volume, utiliser $k^3$. Beaucoup d'erreurs viennent d'une confusion entre ces trois cas.` },
        { type:'ex', label:'EX', titre:'Exercice type', contenu:`Un solide a un volume de $40$ cm³. On l'agrandit avec $k=2$. Le nouveau volume vaut $40\\times2^3=320$ cm³.` },
      ] },
    ]
  },
  {
    id: 'ma-tm-algebre', filiere: 'term-spe-maths', matiere: 'ma',
    titre: 'Algèbre linéaire — matrices', ordre: 9, enrich: true,
    sections: [
      { titre: 'Matrices', cartes: [
        { type:'def', label:'DEF', titre:'Matrice', contenu:`Une <strong>matrice</strong> est un tableau de nombres organisé en lignes et colonnes. Une matrice à $n$ lignes et $p$ colonnes est dite de taille $n\\times p$.` },
        { type:'def', label:'DEF', titre:'Coefficient', contenu:`Le coefficient $a_{ij}$ d'une matrice $A$ est le nombre placé à la ligne $i$ et à la colonne $j$. Les indices permettent de repérer précisément une entrée de la matrice.` },
        { type:'prop', label:'PROP', titre:'Égalité de matrices', contenu:`Deux matrices sont égales si elles ont la même taille et si tous leurs coefficients correspondants sont égaux.` },
      ] },
      { titre: 'Opérations', cartes: [
        { type:'form', label:'FORM', titre:'Somme et produit par un réel', contenu:`On additionne deux matrices de même taille coefficient par coefficient. On multiplie une matrice par un réel en multipliant chacun de ses coefficients.` },
        { type:'form', label:'FORM', titre:'Produit matriciel', contenu:`Si $A$ est de taille $n\\times p$ et $B$ de taille $p\\times q$, alors $AB$ existe et est de taille $n\\times q$. Le coefficient $(i,j)$ est la somme des produits ligne $i$ de $A$ par colonne $j$ de $B$.` },
        { type:'prop', label:'PROP', titre:'Non-commutativité', contenu:`En général, $AB\\ne BA$. Parfois même, l'un des deux produits existe et pas l'autre. Il faut donc respecter l'ordre des matrices.` },
      ] },
      { titre: 'Matrices carrées et inverse', cartes: [
        { type:'def', label:'DEF', titre:'Matrice identité', contenu:`La matrice identité $I_n$ est la matrice carrée qui a des $1$ sur la diagonale et des $0$ ailleurs. Elle joue le rôle de $1$ pour le produit matriciel : $AI=IA=A$.` },
        { type:'def', label:'DEF', titre:'Matrice inverse', contenu:`Une matrice carrée $A$ est inversible s'il existe une matrice $A^{-1}$ telle que :<br>$$AA^{-1}=A^{-1}A=I.$$` },
        { type:'form', label:'FORM', titre:"Inverse d'une matrice $2\\times2$", contenu:`Pour $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, si $ad-bc\\ne0$ :<br>$$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.$$` },
      ] },
      { titre: 'Systèmes linéaires', cartes: [
        { type:'prop', label:'PROP', titre:'Écriture matricielle', contenu:`Un système linéaire peut s'écrire sous la forme :<br>$$AX=B,$$<br>où $A$ est la matrice des coefficients, $X$ la colonne des inconnues et $B$ la colonne des seconds membres.` },
        { type:'meth', label:'METH', titre:"Résoudre avec l'inverse", contenu:`Si $A$ est inversible, alors le système $AX=B$ possède une unique solution :<br>$$X=A^{-1}B.$$` },
        { type:'ex', label:'EX', titre:'Point de vigilance', contenu:`Avant d'utiliser $A^{-1}$, vérifier que la matrice est carrée et inversible. Pour une matrice $2\\times2$, cela revient à vérifier que $ad-bc\\ne0$.` },
      ] },
    ]
  },
];
