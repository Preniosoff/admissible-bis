// Calcul différentiel (fonctions de plusieurs variables) — CPGE 2e année
// Nouveau chapitre maths, rattaché à toutes les filières prépa.

export const DATA = [
  {
    id: 'ma-diff',
    matiere: 'ma',
    titre: 'Calcul différentiel',
    ordre: 18,
    filieres: ['mp', 'mpsi', 'pc', 'pcsi', 'psi', 'pt', 'ptsi', 'tsi', 'mpi', 'bcpst'],
    enrich: false,
    sections: [
      {
        titre: 'Fonctions de plusieurs variables',
        cartes: [
          { type:'def', label:'DEF', titre:'Ouvert de R^n et fonction de plusieurs variables',
            contenu:`On munit $\\mathbb{R}^n$ d'une norme (toutes équivalentes en dimension finie). Une partie $U \\subset \\mathbb{R}^n$ est un <strong>ouvert</strong> si pour tout $a \\in U$, il existe $r>0$ tel que la boule $B(a,r) \\subset U$.<br>Une <strong>fonction de plusieurs variables</strong> est une application $f : U \\to \\mathbb{R}^p$ avec $U$ ouvert de $\\mathbb{R}^n$. On écrit $f(x_1,\\ldots,x_n)$, et $f=(f_1,\\ldots,f_p)$ via ses fonctions coordonnées.` },
          { type:'def', label:'DEF', titre:'Limite et continuité',
            contenu:`$f$ admet pour <strong>limite</strong> $\\ell$ en $a$ si $\\|f(x)-\\ell\\| \\to 0$ quand $\\|x-a\\| \\to 0$. $f$ est <strong>continue</strong> en $a$ si $\\lim_{x \\to a} f(x) = f(a)$.<br>$f=(f_1,\\ldots,f_p)$ est continue si et seulement si chaque $f_i$ l'est. Les sommes, produits, quotients (à dénominateur non nul) et composées de fonctions continues sont continues.` },
          { type:'def', label:'DEF', titre:'Applications partielles',
            contenu:`La $i$-ème <strong>application partielle</strong> de $f$ en $a=(a_1,\\ldots,a_n)$ est$$t \\longmapsto f(a_1,\\ldots,a_{i-1},\\,t,\\,a_{i+1},\\ldots,a_n),$$obtenue en fixant toutes les variables sauf la $i$-ème. La continuité de $f$ entraîne celle de ses applications partielles, mais <strong>la réciproque est fausse</strong>.` },
          { type:'ex', label:'EX', titre:'Continuité séparée n\'implique pas continuité',
            contenu:`Soit $f(x,y)=\\dfrac{xy}{x^2+y^2}$ pour $(x,y)\\neq(0,0)$ et $f(0,0)=0$.<br>Les deux applications partielles en $(0,0)$ sont nulles donc continues. Pourtant, sur la droite $y=x$ : $f(x,x)=\\tfrac12 \\not\\to 0$. Donc $f$ n'est <strong>pas continue</strong> en $(0,0)$.` },
        ],
      },
      {
        titre: 'Dérivées partielles et classe C¹',
        cartes: [
          { type:'def', label:'DEF', titre:'Dérivée partielle',
            contenu:`La <strong>dérivée partielle</strong> de $f$ par rapport à la $i$-ème variable en $a$ est la dérivée de la $i$-ème application partielle :$$\\frac{\\partial f}{\\partial x_i}(a) = \\lim_{t \\to 0} \\frac{f(a+t\\,e_i)-f(a)}{t},$$où $e_i$ est le $i$-ème vecteur de la base canonique. On note aussi $\\partial_i f(a)$.` },
          { type:'def', label:'DEF', titre:'Fonction de classe C¹',
            contenu:`$f$ est de <strong>classe $C^1$ sur l'ouvert $U$</strong> si toutes ses dérivées partielles $\\partial_i f$ existent et sont <strong>continues</strong> sur $U$.<br>C'est la bonne hypothèse de régularité : elle assure l'existence de la différentielle et la validité des formules de calcul (chaîne, Schwarz…).` },
          { type:'th', label:'THM', titre:'C¹ implique continue (et différentiable)',
            contenu:`Si $f$ est de classe $C^1$ sur $U$, alors $f$ est <strong>continue</strong> sur $U$ et même <strong>différentiable</strong> en tout point (voir section suivante).<br><em>Attention :</em> l'existence des seules dérivées partielles ne suffit pas à la continuité — c'est la continuité des $\\partial_i f$ qui fait tout.` },
          { type:'def', label:'DEF', titre:'Gradient',
            contenu:`Pour $f:U \\to \\mathbb{R}$ de classe $C^1$, le <strong>gradient</strong> de $f$ en $a$ est le vecteur des dérivées partielles :$$\\nabla f(a) = \\left( \\frac{\\partial f}{\\partial x_1}(a),\\ \\ldots,\\ \\frac{\\partial f}{\\partial x_n}(a) \\right).$$Il est orthogonal aux lignes de niveau et pointe dans la direction de plus forte croissance de $f$.` },
          { type:'ex', label:'EX', titre:'Calcul de dérivées partielles',
            contenu:`Soit $f(x,y)=x^2 y + \\sin(xy)$.<br>$\\dfrac{\\partial f}{\\partial x} = 2xy + y\\cos(xy)$ &nbsp;·&nbsp; $\\dfrac{\\partial f}{\\partial y} = x^2 + x\\cos(xy)$.<br>Ces deux fonctions sont continues sur $\\mathbb{R}^2$, donc $f$ est de classe $C^1$, et $\\nabla f(x,y) = \\big(2xy+y\\cos(xy),\\ x^2+x\\cos(xy)\\big)$.` },
        ],
      },
      {
        titre: 'Différentielle et dérivée directionnelle',
        cartes: [
          { type:'def', label:'DEF', titre:'Différentielle',
            contenu:`$f:U\\to\\mathbb{R}^p$ est <strong>différentiable</strong> en $a$ s'il existe une application linéaire $\\mathrm{d}f_a : \\mathbb{R}^n \\to \\mathbb{R}^p$ telle que$$f(a+h) = f(a) + \\mathrm{d}f_a(h) + o(\\|h\\|).$$$\\mathrm{d}f_a$ est la <strong>différentielle</strong> (ou application linéaire tangente) de $f$ en $a$. Si elle existe, elle est unique.` },
          { type:'th', label:'THM', titre:'Différentielle et dérivées partielles',
            contenu:`Si $f:U\\to\\mathbb{R}$ est différentiable en $a$, alors$$\\mathrm{d}f_a(h) = \\sum_{i=1}^{n} \\frac{\\partial f}{\\partial x_i}(a)\\, h_i = \\langle \\nabla f(a),\\, h \\rangle.$$Toute fonction de classe $C^1$ est différentiable, et la matrice de $\\mathrm{d}f_a$ dans les bases canoniques est la <strong>matrice jacobienne</strong> $\\big(\\partial_j f_i(a)\\big)_{i,j}$.` },
          { type:'def', label:'DEF', titre:'Dérivée selon un vecteur',
            contenu:`La <strong>dérivée de $f$ en $a$ selon le vecteur $v$</strong> est$$D_v f(a) = \\lim_{t\\to 0}\\frac{f(a+tv)-f(a)}{t} = \\mathrm{d}f_a(v).$$Pour $f$ à valeurs réelles de classe $C^1$ : $D_v f(a) = \\langle \\nabla f(a),\\, v\\rangle$.` },
          { type:'form', label:'FORM', titre:'Plan tangent et approximation affine',
            contenu:`Au voisinage de $a$, le graphe de $f:\\mathbb{R}^2\\to\\mathbb{R}$ est approché par son <strong>plan tangent</strong> :$$z = f(a,b) + \\frac{\\partial f}{\\partial x}(a,b)(x-a) + \\frac{\\partial f}{\\partial y}(a,b)(y-b).$$C'est le développement limité à l'ordre $1$.` },
        ],
      },
      {
        titre: 'Règle de la chaîne',
        cartes: [
          { type:'th', label:'THM', titre:'Dérivée d\'une composée le long d\'un arc',
            contenu:`Soit $\\gamma:I\\to U$ dérivable et $f:U\\to\\mathbb{R}$ de classe $C^1$. Alors $g=f\\circ\\gamma$ est dérivable et$$g'(t) = \\sum_{i=1}^{n} \\frac{\\partial f}{\\partial x_i}\\big(\\gamma(t)\\big)\\,\\gamma_i'(t) = \\big\\langle \\nabla f(\\gamma(t)),\\, \\gamma'(t)\\big\\rangle.$$` },
          { type:'form', label:'FORM', titre:'Règle de la chaîne (cas général)',
            contenu:`Si $x=(x_1,\\ldots,x_n)$ dépend de variables $(u_1,\\ldots,u_m)$ via des fonctions $C^1$, alors pour $f$ de classe $C^1$ :$$\\frac{\\partial (f\\circ x)}{\\partial u_j} = \\sum_{i=1}^{n} \\frac{\\partial f}{\\partial x_i}\\,\\frac{\\partial x_i}{\\partial u_j}.$$Matriciellement : la jacobienne d'une composée est le produit des jacobiennes (composition des différentielles : $\\mathrm{d}(f\\circ g)_a = \\mathrm{d}f_{g(a)} \\circ \\mathrm{d}g_a$).` },
          { type:'ex', label:'EX', titre:'Passage en coordonnées polaires',
            contenu:`Soit $f(x,y)$ de classe $C^1$ et $g(r,\\theta)=f(r\\cos\\theta,\\ r\\sin\\theta)$. La règle de la chaîne donne :<br>$\\dfrac{\\partial g}{\\partial r} = \\cos\\theta\\,\\dfrac{\\partial f}{\\partial x} + \\sin\\theta\\,\\dfrac{\\partial f}{\\partial y}$<br>$\\dfrac{\\partial g}{\\partial \\theta} = -r\\sin\\theta\\,\\dfrac{\\partial f}{\\partial x} + r\\cos\\theta\\,\\dfrac{\\partial f}{\\partial y}$.` },
          { type:'meth', label:'METH', titre:'Recherche de fonctions vérifiant une EDP',
            contenu:`Pour résoudre une équation aux dérivées partielles simple (ex. $x\\,\\partial_x f + y\\,\\partial_y f = 0$), on effectue un <strong>changement de variables</strong> bien choisi (souvent polaire ou affine) et on applique la règle de la chaîne pour transformer l'EDP en une équation où une dérivée partielle est nulle, ce qui révèle la dépendance fonctionnelle.` },
        ],
      },
      {
        titre: 'Dérivées d\'ordre 2 et théorème de Schwarz',
        cartes: [
          { type:'def', label:'DEF', titre:'Dérivées partielles secondes, classe C²',
            contenu:`On note $\\dfrac{\\partial^2 f}{\\partial x_j \\partial x_i} = \\partial_j(\\partial_i f)$ les <strong>dérivées partielles secondes</strong>. $f$ est de <strong>classe $C^2$</strong> sur $U$ si toutes ses dérivées partielles secondes existent et sont continues sur $U$.` },
          { type:'th', label:'THM', titre:'Théorème de Schwarz',
            contenu:`Si $f$ est de classe $C^2$ sur l'ouvert $U$, alors pour tous $i,j$ les dérivées croisées coïncident :$$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}.$$L'ordre de dérivation n'a donc pas d'importance pour une fonction $C^2$.` },
          { type:'def', label:'DEF', titre:'Matrice hessienne',
            contenu:`Pour $f:U\\to\\mathbb{R}$ de classe $C^2$, la <strong>hessienne</strong> en $a$ est la matrice symétrique (Schwarz)$$H_f(a) = \\left( \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a) \\right)_{1\\le i,j\\le n}.$$` },
          { type:'form', label:'FORM', titre:'Formule de Taylor à l\'ordre 2',
            contenu:`Pour $f$ de classe $C^2$ au voisinage de $a$ :$$f(a+h) = f(a) + \\langle \\nabla f(a),h\\rangle + \\tfrac{1}{2}\\, {}^{t}h\\, H_f(a)\\, h + o(\\|h\\|^2).$$Le terme quadratique gouverne la nature locale des points critiques.` },
        ],
      },
      {
        titre: 'Extrema et optimisation',
        cartes: [
          { type:'def', label:'DEF', titre:'Extremum local et point critique',
            contenu:`$f$ admet un <strong>maximum local</strong> (resp. minimum) en $a$ s'il existe un voisinage de $a$ où $f(x)\\le f(a)$ (resp. $\\ge$). Un <strong>point critique</strong> de $f$ ($C^1$) est un point où $\\nabla f(a)=0$.` },
          { type:'th', label:'THM', titre:'Condition nécessaire du premier ordre',
            contenu:`Si $f$ de classe $C^1$ sur un ouvert $U$ admet un <strong>extremum local</strong> en un point $a \\in U$, alors $a$ est un <strong>point critique</strong> : $\\nabla f(a)=0$.<br><em>La réciproque est fausse</em> : un point critique peut être un point-selle (ex. $f(x,y)=x^2-y^2$ en $0$).` },
          { type:'meth', label:'METH', titre:'Nature d\'un point critique (n=2)',
            contenu:`En un point critique $a$, posons (notations de Monge) $r=\\partial_{xx}f(a)$, $s=\\partial_{xy}f(a)$, $t=\\partial_{yy}f(a)$, et $\\det H_f(a)=rt-s^2$.<br>— Si $rt-s^2>0$ et $r>0$ : <strong>minimum</strong> local.<br>— Si $rt-s^2>0$ et $r<0$ : <strong>maximum</strong> local.<br>— Si $rt-s^2<0$ : <strong>point-selle</strong> (pas d'extremum).<br>— Si $rt-s^2=0$ : cas douteux, étude directe.` },
          { type:'th', label:'THM', titre:'Existence d\'extrema sur un compact',
            contenu:`Une fonction <strong>continue</strong> sur une partie <strong>compacte</strong> (fermée bornée) $K$ de $\\mathbb{R}^n$ est bornée et <strong>atteint ses bornes</strong>. Les extrema sont alors à chercher parmi les points critiques intérieurs et les points du bord $\\partial K$.` },
          { type:'ex', label:'EX', titre:'Recherche d\'extrema',
            contenu:`Soit $f(x,y)=x^3+y^3-3xy$. Points critiques : $\\nabla f=(3x^2-3y,\\ 3y^2-3x)=0$ donne $y=x^2$ et $x=y^2$, d'où $(0,0)$ et $(1,1)$.<br>En $(1,1)$ : $r=6,\\ s=-3,\\ t=6$, $rt-s^2=27>0$ et $r>0$ → <strong>minimum local</strong>.<br>En $(0,0)$ : $r=0,\\ s=-3,\\ t=0$, $rt-s^2=-9<0$ → <strong>point-selle</strong>.` },
        ],
      },
    ],
  },
];
