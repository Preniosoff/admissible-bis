// Prépa CPGE — Sciences de l'Ingénieur (mécanique & systèmes)
// Programmes officiels 2021/2022 des classes préparatoires scientifiques
// (MPSI/MP, PCSI/PC, PTSI/PT, PSI, TSI, MPI)
// matière : si · enrichissement de chapitres existants (enrich:true)

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. STATIQUE — PRINCIPE FONDAMENTAL
// ══════════════════════════════════════════════════════════════
{
  id: 'si-statique', matiere: 'si',
  titre: 'Statique — Principe fondamental', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Modélisation des actions mécaniques',
      cartes: [
        { type:'def', label:'DEF', titre:'Action mécanique et torseur',
          contenu:`Une <strong>action mécanique</strong> est toute cause susceptible de maintenir un corps au repos, de modifier son mouvement ou de le déformer. On la modélise par un <strong>torseur d'action mécanique</strong> de $1$ sur $2$, réduit en un point $A$ :<br>$$\\{\\mathcal{T}_{1\\to 2}\\} = \\left\\{ \\begin{array}{c} \\vec{R}_{1\\to 2} \\\\ \\vec{M}_{A,\\,1\\to 2} \\end{array} \\right\\}_A$$<br>$\\vec{R}_{1\\to 2}$ est la <strong>résultante</strong> (somme des forces, en N), $\\vec{M}_{A,1\\to 2}$ le <strong>moment résultant</strong> au point $A$ (en N$\\cdot$m). Le torseur condense en deux vecteurs toute l'information sur l'action.` },
        { type:'form', label:'FORM', titre:'Changement de point de réduction',
          contenu:`Le moment d'un torseur dépend du point ; sa résultante non. Pour passer de $A$ à $B$ :<br>$$\\vec{M}_{B} = \\vec{M}_{A} + \\vec{R}\\wedge \\overrightarrow{AB} \\quad\\Longleftrightarrow\\quad \\vec{M}_{B} = \\vec{M}_{A} + \\overrightarrow{BA}\\wedge\\vec{R}$$<br>C'est la <strong>relation de transport (Varignon) des moments</strong>. Conséquence : le produit $\\vec{R}\\cdot\\vec{M}_A$, appelé <strong>automoment</strong> (ou invariant scalaire), est indépendant de $A$.` },
        { type:'def', label:'DEF', titre:'Action à distance : pesanteur',
          contenu:`L'action de la pesanteur sur un solide $S$ de masse $m$ est un champ de forces volumiques réparti. Son torseur se réduit en son <strong>centre de gravité</strong> $G$ à une simple résultante :<br>$$\\{\\mathcal{T}_{\\text{pes}\\to S}\\} = \\left\\{ \\begin{array}{c} m\\,\\vec{g} \\\\ \\vec{0} \\end{array} \\right\\}_G$$<br>Le moment en $G$ est nul : c'est ce qui <strong>définit</strong> le centre de gravité (confondu avec le centre d'inertie dans un champ $\\vec{g}$ uniforme). C'est un <strong>glisseur</strong>.` },
        { type:'prop', label:'PROP', titre:'Glisseur, couple, torseur quelconque',
          contenu:`Trois familles selon l'invariant scalaire $\\vec{R}\\cdot\\vec{M}_A$ :<br><ul><li><strong>Glisseur</strong> : $\\vec{R}\\neq\\vec{0}$ et $\\exists$ un point où $\\vec{M}=\\vec{0}$ (force pure, axe central). Cas $\\vec{R}\\cdot\\vec{M}_A=0$ avec $\\vec R\\neq\\vec 0$.</li><li><strong>Couple</strong> : $\\vec{R}=\\vec{0}$, $\\vec{M}$ identique en tout point ($\\neq\\vec0$). Action de moment pur.</li><li><strong>Torseur quelconque</strong> : $\\vec{R}\\cdot\\vec{M}_A\\neq 0$, réductible à un glisseur $+$ un couple le long de l'axe central.</li></ul>` },
      ]
    },

    {
      titre: 'Actions transmissibles par les liaisons',
      cartes: [
        { type:'def', label:'DEF', titre:'Torseur statique d\'une liaison',
          contenu:`Le <strong>torseur des actions transmissibles</strong> par une liaison parfaite contient des composantes <strong>non nulles dans les directions où le mouvement relatif est bloqué</strong>, et nulles dans les directions libres.<br>Règle de dualité fondamentale : la liaison transmet un effort (resp. un moment) précisément là où elle interdit la translation (resp. la rotation). Le torseur statique a $6-n$ inconnues, où $n$ est le nombre de degrés de liberté.` },
        { type:'prop', label:'PROP', titre:'Liaison parfaite et puissance dissipée',
          contenu:`Une liaison est <strong>parfaite</strong> (sans frottement, contacts géométriques) si la <strong>puissance dissipée</strong> dans la liaison est nulle :<br>$$\\mathcal{P}_{\\text{diss}} = \\{\\mathcal{T}_{1\\to 2}\\}\\otimes\\{\\mathcal{V}_{2/1}\\} = 0$$<br>Le comoment du torseur d'action et du torseur cinématique est nul. C'est l'expression de l'<strong>orthogonalité énergétique</strong> entre efforts transmis et mobilités : torseur statique et torseur cinématique d'une même liaison parfaite sont duaux.` },
        { type:'ex', label:'EX', titre:'Torseur d\'une liaison pivot d\'axe $(A,\\vec{z})$',
          contenu:`La pivot d'axe $(A,\\vec{z})$ autorise la seule rotation autour de $\\vec{z}$ : elle transmet $3$ composantes de force et $2$ composantes de moment, mais <strong>pas</strong> le moment selon $\\vec z$ :<br>$$\\{\\mathcal{T}\\}=\\left\\{\\begin{array}{ccc} X & L \\\\ Y & M \\\\ Z & 0 \\end{array}\\right\\}_{A,(\\vec x,\\vec y,\\vec z)}$$<br>$5$ inconnues statiques ($X,Y,Z,L,M$), cohérent avec $6-1=5$ ($1$ ddl de rotation). Le terme de moment selon $\\vec z$ est nul : la pivot « ne retient pas » la rotation propre.` },
        { type:'form', label:'FORM', titre:'Action d\'un ressort',
          contenu:`Un ressort de raideur $k$ et de longueur à vide $\\ell_0$, de longueur actuelle $\\ell$, exerce une action de rappel le long de son axe :<br>$$F = -k\\,(\\ell - \\ell_0)$$<br>Effort de <strong>traction</strong> si $\\ell>\\ell_0$ (ressort tendu, il tire), de <strong>compression</strong> si $\\ell<\\ell_0$. Énergie potentielle élastique stockée : $E_p = \\dfrac12 k(\\ell-\\ell_0)^2$.` },
      ]
    },

    {
      titre: 'Principe fondamental de la statique',
      cartes: [
        { type:'th', label:'THM', titre:'PFS — Principe fondamental de la statique',
          contenu:`Un solide (ou un ensemble de solides) $E$ est en <strong>équilibre</strong> dans un référentiel <strong>galiléen</strong> si et seulement si le torseur des actions mécaniques <strong>extérieures</strong> qui lui sont appliquées est <strong>nul</strong> :<br>$$\\{\\mathcal{T}_{\\overline{E}\\to E}\\} = \\{0\\} \\quad\\Longleftrightarrow\\quad \\left\\{\\begin{array}{l} \\vec{R}_{\\overline{E}\\to E} = \\vec{0} \\\\ \\vec{M}_{A,\\,\\overline{E}\\to E} = \\vec{0} \\end{array}\\right.$$<br>Les actions intérieures à $E$ se compensent deux à deux (principe des actions réciproques) et n'apparaissent pas.` },
        { type:'prop', label:'PROP', titre:'Théorèmes de la résultante et du moment statiques',
          contenu:`Le PFS se projette en <strong>deux</strong> équations vectorielles, soit jusqu'à <strong>$6$ équations scalaires</strong> dans l'espace (3 + 3) :<br><ul><li><strong>Théorème de la résultante statique (TRS)</strong> : $\\sum \\vec{F}_{\\text{ext}} = \\vec{0}$ ;</li><li><strong>Théorème du moment statique (TMS)</strong> en $A$ : $\\sum \\vec{M}_{A,\\text{ext}} = \\vec{0}$.</li></ul>En problème <strong>plan</strong>, il reste $3$ équations utiles : $2$ de résultante ($x,y$) et $1$ de moment (selon $\\vec z$).` },
        { type:'prop', label:'PROP', titre:'Solide soumis à 2 ou 3 forces',
          contenu:`Résultats très utiles pour la résolution graphique :<br><ul><li><strong>2 forces</strong> : un solide en équilibre sous deux forces a ces forces <strong>égales, opposées et de même droite d'action</strong> (portées par la droite joignant les deux points d'application).</li><li><strong>3 forces</strong> non parallèles : leurs droites d'action sont <strong>concourantes</strong> en un même point, et la somme vectorielle est nulle (dynamique fermé : le triangle des forces se ferme).</li></ul>` },
        { type:'meth', label:'METH', titre:'Méthode de résolution d\'un problème de statique',
          contenu:`<strong>1. Isolement</strong> : choisir le système à isoler (un solide ou un ensemble).<br><strong>2. Bilan des actions extérieures</strong> (BAME) : recenser TOUTES les actions extérieures (liaisons, pesanteur, ressorts, contacts).<br><strong>3. Choix des inconnues</strong> : exprimer chaque torseur, compter les inconnues.<br><strong>4. Application du PFS</strong> au bon point (minimiser les bras de levier inconnus) et dans la bonne base.<br><strong>5. Résolution</strong> du système ; vérifier l'<strong>isostatisme</strong> (inconnues = équations).<br><strong>6. Vérification</strong> physique (signes, ordres de grandeur).` },
        { type:'def', label:'DEF', titre:'Degré d\'hyperstatisme',
          contenu:`Pour un mécanisme à $p$ solides ($+$ bâti) et liaisons cumulant $N_s$ inconnues statiques, l'analyse fournit $E_s = 6(p-1)$ équations (3D) ou $3(p-1)$ (plan). Le <strong>degré d'hyperstatisme</strong> est :<br>$$h = N_s - E_s + m_c$$<br>où $m_c$ est la <strong>mobilité</strong> (nombre de mouvements indépendants). Système <strong>isostatique</strong> si $h=0$ (toutes les inconnues sont déterminables par la statique), <strong>hyperstatique</strong> si $h>0$ (efforts indéterminés sans loi de comportement).` },
      ]
    },

    {
      titre: 'Frottement et lois de Coulomb',
      cartes: [
        { type:'th', label:'THM', titre:'Lois de Coulomb du frottement sec',
          contenu:`Au contact ponctuel de normale $\\vec{n}$, l'action de contact se décompose en composante normale $\\vec{N}$ et tangentielle $\\vec{T}$. Avec $f=\\tan\\varphi$ le <strong>coefficient de frottement</strong> ($\\varphi$ angle de frottement) :<br><ul><li><strong>Adhérence</strong> (pas de glissement, $\\vec{v}_g=\\vec0$) : $\\;\\|\\vec{T}\\| \\le f\\,\\|\\vec{N}\\|$ ;</li><li><strong>Glissement</strong> ($\\vec{v}_g\\neq\\vec0$) : $\\;\\|\\vec{T}\\| = f\\,\\|\\vec{N}\\|$, et $\\vec{T}$ est <strong>opposé</strong> à $\\vec{v}_g$.</li></ul>Le contact n'a pas de cohésion : $\\vec N$ est toujours répulsif ($N\\ge0$).` },
        { type:'def', label:'DEF', titre:'Cône de frottement',
          contenu:`L'ensemble des directions admissibles pour l'action de contact $\\vec R=\\vec N+\\vec T$ forme le <strong>cône de frottement</strong>, de demi-angle au sommet $\\varphi$ tel que $\\tan\\varphi=f$, d'axe la normale $\\vec n$.<br>À l'<strong>équilibre</strong>, $\\vec R$ reste <strong>dans</strong> le cône. À la <strong>limite du glissement</strong>, $\\vec R$ est sur le cône ($\\angle(\\vec R,\\vec n)=\\varphi$). Au-delà, l'équilibre est rompu : c'est un critère géométrique très puissant.` },
        { type:'meth', label:'METH', titre:'Étudier l\'équilibre avec frottement',
          contenu:`<strong>1.</strong> Supposer l'<strong>adhérence</strong> et résoudre le PFS (les composantes $N$ et $T$ sont des inconnues).<br><strong>2.</strong> Vérifier le critère $\\|\\vec T\\|\\le f\\,\\|\\vec N\\|$ :<br>&nbsp;&nbsp;• si vérifié → équilibre possible (adhérence) ;<br>&nbsp;&nbsp;• si violé → glissement, repartir avec $\\|\\vec T\\|=f\\|\\vec N\\|$ et $\\vec T$ opposé à $\\vec v_g$.<br><strong>3.</strong> Pour une condition limite, écrire directement $\\|\\vec T\\|=f\\|\\vec N\\|$ et en déduire la grandeur seuil cherchée.` },
        { type:'ex', label:'EX', titre:'Solide sur plan incliné',
          contenu:`Un bloc de masse $m$ posé sur un plan incliné d'angle $\\alpha$. Équilibre selon le plan : $mg\\sin\\alpha = T$ ; perpendiculairement : $N=mg\\cos\\alpha$.<br>Condition d'équilibre : $T\\le f N \\Rightarrow \\tan\\alpha \\le f = \\tan\\varphi$, soit $\\boxed{\\alpha \\le \\varphi}$.<br>Le bloc glisse dès que l'angle de la pente dépasse l'<strong>angle de frottement</strong> $\\varphi$. C'est la mesure expérimentale classique de $f$.` },
      ]
    },

    {
      titre: 'Arc-boutement et adhérence',
      cartes: [
        { type:'def', label:'DEF', titre:'Phénomène d\'arc-boutement',
          contenu:`L'<strong>arc-boutement</strong> est un blocage par adhérence qui persiste <strong>quelle que soit l'intensité</strong> de l'effort moteur : augmenter la force qui « pousse » augmente <strong>simultanément</strong> l'effort normal de contact, donc la capacité d'adhérence. Le système se coince d'autant plus fort qu'on insiste.<br>Le blocage dépend alors de la <strong>géométrie</strong> (position, longueurs) et du coefficient $f$, mais <strong>pas</strong> de l'intensité de l'action.` },
        { type:'prop', label:'PROP', titre:'Condition géométrique de blocage',
          contenu:`L'arc-boutement se produit lorsque la <strong>droite d'action</strong> de l'effort résultant nécessaire à l'équilibre passe à l'<strong>intérieur du cône de frottement</strong> en chaque point de contact : aucun glissement n'est alors géométriquement possible.<br>La résolution donne une condition du type $L \\ge L_{\\min}(f)$ ou $f \\ge f_{\\min}$ portant uniquement sur des longueurs et coefficients, indépendamment de la charge appliquée.` },
        { type:'ex', label:'EX', titre:'Tiroir qui se coince',
          contenu:`Un tiroir tiré par une poignée excentrée se bloque s'il est <strong>trop court</strong> par rapport à son guidage. En isolant le tiroir avec frottement aux deux glissières et en écrivant l'équilibre, on obtient une condition de la forme :<br>$$\\frac{a}{\\ell} > \\frac{1}{2f}$$<br>($a$ : excentration de la poignée, $\\ell$ : longueur en prise). Si elle est satisfaite, tirer plus fort ne fait que renforcer le coincement : c'est l'arc-boutement. Sinon le tiroir coulisse normalement.` },
        { type:'meth', label:'METH', titre:'Détecter un risque d\'arc-boutement',
          contenu:`<strong>1.</strong> Isoler la pièce mobile, recenser les contacts susceptibles d'adhérer.<br><strong>2.</strong> Écrire l'équilibre <strong>à la limite</strong> du glissement ($\\|T\\|=f\\|N\\|$ à chaque contact).<br><strong>3.</strong> Constater si l'effort moteur <strong>se simplifie</strong> dans l'inéquation finale : s'il disparaît, le blocage est indépendant de l'intensité → arc-boutement.<br><strong>4.</strong> En déduire le rapport géométrique critique pour <strong>éviter</strong> (conception) ou <strong>provoquer</strong> (came, serrage) le blocage.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 2. DYNAMIQUE — PFD ET ÉNERGÉTIQUE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-dynamique', matiere: 'si',
  titre: 'Dynamique — PFD et énergétique', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Centre d\'inertie et masse',
      cartes: [
        { type:'def', label:'DEF', titre:'Centre d\'inertie',
          contenu:`Le <strong>centre d'inertie</strong> $G$ d'un solide $S$ de masse $m$ est le barycentre des masses :<br>$$\\overrightarrow{OG} = \\frac{1}{m}\\int_S \\overrightarrow{OP}\\;\\mathrm{d}m \\quad\\Longleftrightarrow\\quad \\int_S \\overrightarrow{GP}\\;\\mathrm{d}m = \\vec{0}$$<br>Dans un champ de pesanteur uniforme, $G$ coïncide avec le centre de gravité. Pour un solide à <strong>plan, axe ou centre de symétrie</strong> (matérielle), $G$ appartient à cet élément de symétrie.` },
        { type:'meth', label:'METH', titre:'Centre d\'inertie d\'un solide composé',
          contenu:`Pour un solide réunion de parties $S_i$ de masses $m_i$ et centres $G_i$, le centre d'inertie global s'obtient par barycentre :<br>$$\\overrightarrow{OG}=\\frac{\\sum_i m_i\\,\\overrightarrow{OG_i}}{\\sum_i m_i}$$<br>Pour un <strong>perçage</strong> (trou), on affecte une <strong>masse négative</strong> à la partie retirée. Méthode systématique : décomposer en formes simples (cylindre, plaque, sphère) dont les $G_i$ sont connus.` },
        { type:'def', label:'DEF', titre:'Référentiel barycentrique',
          contenu:`Le <strong>référentiel barycentrique</strong> $R^*$ est le référentiel de centre $G$, en <strong>translation</strong> par rapport au référentiel d'étude $R$ (ses axes restent parallèles à ceux de $R$). Sa vitesse est $\\vec v(G/R)$.<br>Dans $R^*$, la résultante cinétique est nulle : $\\sum m_i\\,\\vec v_i^{\\,*}=\\vec0$. C'est le cadre naturel des théorèmes de König, qui séparent mouvement d'ensemble (de $G$) et mouvement propre (autour de $G$).` },
      ]
    },

    {
      titre: 'Matrice d\'inertie',
      cartes: [
        { type:'def', label:'DEF', titre:'Opérateur et matrice d\'inertie',
          contenu:`La <strong>matrice d'inertie</strong> en $A$ dans la base $(\\vec x,\\vec y,\\vec z)$ rassemble moments et produits d'inertie :<br>$$\\overline{\\overline{I}}_A(S)=\\begin{pmatrix} A & -F & -E \\\\ -F & B & -D \\\\ -E & -D & C \\end{pmatrix}$$<br>avec $A=\\int (y^2+z^2)\\mathrm{d}m$ (moment selon $\\vec x$), de même $B,C$, et $D=\\int yz\\,\\mathrm{d}m$, $E=\\int xz\\,\\mathrm{d}m$, $F=\\int xy\\,\\mathrm{d}m$ les <strong>produits d'inertie</strong>. Matrice <strong>symétrique</strong> ($3$ moments $+$ $3$ produits).` },
        { type:'prop', label:'PROP', titre:'Symétries et axes principaux',
          contenu:`Les symétries annulent des produits d'inertie :<br><ul><li>si $(A,\\vec x,\\vec y)$ est <strong>plan de symétrie</strong> matérielle, alors $D=E=0$ ;</li><li>un <strong>axe de symétrie</strong> de révolution est <strong>axe principal</strong> ; les deux moments transverses sont égaux.</li></ul>Une <strong>base principale d'inertie</strong> diagonalise $\\overline{\\overline I}_A$ : $\\mathrm{diag}(A,B,C)$, les $A,B,C$ étant les <strong>moments principaux</strong>. Tout solide admet en chaque point une base principale (matrice réelle symétrique).` },
        { type:'th', label:'THM', titre:'Théorème de Huygens',
          contenu:`Le moment d'inertie par rapport à un axe $\\Delta$ quelconque se déduit de celui par rapport à l'axe parallèle $\\Delta_G$ passant par $G$ :<br>$$I_{\\Delta} = I_{\\Delta_G} + m\\,d^2$$<br>où $d$ est la distance entre les deux axes. Le moment d'inertie est <strong>minimal</strong> pour l'axe passant par $G$. Indispensable pour transporter une matrice d'inertie d'un point $G$ à un point $A$ quelconque.` },
        { type:'form', label:'FORM', titre:'Moments d\'inertie usuels',
          contenu:`Solides homogènes de masse $m$ :<br><ul><li>Cylindre plein rayon $R$, axe de révolution : $J=\\dfrac12 mR^2$ ;</li><li>Sphère pleine rayon $R$, par un diamètre : $J=\\dfrac25 mR^2$ ;</li><li>Tige de longueur $L$, axe transverse par $G$ : $J=\\dfrac1{12}mL^2$ (par une extrémité : $\\dfrac13 mL^2$) ;</li><li>Cerceau / anneau mince rayon $R$, axe : $J=mR^2$.</li></ul>` },
      ]
    },

    {
      titre: 'Torseurs cinétique et dynamique',
      cartes: [
        { type:'def', label:'DEF', titre:'Torseur cinétique',
          contenu:`Le <strong>torseur cinétique</strong> de $S$ dans $R$, réduit en $A$ :<br>$$\\{\\mathcal{C}_{S/R}\\}=\\left\\{\\begin{array}{c} \\vec{p}=m\\,\\vec{v}(G/R) \\\\ \\vec{\\sigma}_A = \\displaystyle\\int_S \\overrightarrow{AP}\\wedge\\vec{v}(P/R)\\,\\mathrm{d}m \\end{array}\\right\\}_A$$<br>$\\vec{p}$ est la <strong>résultante cinétique</strong> (quantité de mouvement), $\\vec\\sigma_A$ le <strong>moment cinétique</strong>. Au centre d'inertie : $\\vec{\\sigma}_G = \\overline{\\overline{I}}_G(S)\\cdot\\vec{\\Omega}_{S/R}$.` },
        { type:'def', label:'DEF', titre:'Torseur dynamique',
          contenu:`Le <strong>torseur dynamique</strong> de $S$ dans $R$ :<br>$$\\{\\mathcal{D}_{S/R}\\}=\\left\\{\\begin{array}{c} \\vec{R}_d=m\\,\\vec{a}(G/R) \\\\ \\vec{\\delta}_A = \\displaystyle\\int_S \\overrightarrow{AP}\\wedge\\vec{a}(P/R)\\,\\mathrm{d}m \\end{array}\\right\\}_A$$<br>$\\vec R_d$ : <strong>résultante dynamique</strong>, $\\vec\\delta_A$ : <strong>moment dynamique</strong>. Il s'obtient par dérivation du torseur cinétique (voir relation ci-dessous), pas par simple dérivation terme à terme du moment.` },
        { type:'form', label:'FORM', titre:'Relation cinétique → dynamique',
          contenu:`La résultante dynamique est la dérivée de la résultante cinétique : $\\vec R_d=\\dfrac{\\mathrm d\\vec p}{\\mathrm dt}$.<br>Pour le moment, attention au terme correctif si $A$ est mobile :<br>$$\\vec{\\delta}_A = \\frac{\\mathrm{d}\\vec{\\sigma}_A}{\\mathrm{d}t}\\bigg|_R + \\vec{v}(A/R)\\wedge m\\,\\vec{v}(G/R)$$<br>Le terme correctif <strong>s'annule</strong> si $A=G$, si $A$ est fixe, ou si $\\vec v(A)\\parallel\\vec v(G)$. Cas le plus simple : $\\vec\\delta_G=\\dfrac{\\mathrm d\\vec\\sigma_G}{\\mathrm dt}$.` },
        { type:'th', label:'THM', titre:'Théorèmes de König',
          contenu:`Ils relient les grandeurs dans $R$ à celles du barycentrique $R^*$ :<br><ul><li><strong>Moment cinétique</strong> : $\\vec{\\sigma}_A = \\overrightarrow{AG}\\wedge m\\,\\vec{v}(G/R) + \\vec{\\sigma}_G^{\\,*}$ ;</li><li><strong>Énergie cinétique</strong> : $E_c = \\dfrac12 m\\,v^2(G/R) + E_c^{\\,*}$.</li></ul>Le mouvement se décompose en <strong>translation de $G$</strong> $+$ <strong>mouvement autour de $G$</strong>. Pour un solide : $\\vec\\sigma_G^{\\,*}=\\overline{\\overline I}_G\\vec\\Omega$ et $E_c^{\\,*}=\\tfrac12\\vec\\Omega\\cdot\\overline{\\overline I}_G\\vec\\Omega$.` },
      ]
    },

    {
      titre: 'Principe fondamental de la dynamique',
      cartes: [
        { type:'th', label:'THM', titre:'PFD — Principe fondamental de la dynamique',
          contenu:`Dans un référentiel <strong>galiléen</strong> $R_g$, pour tout système matériel $E$ :<br>$$\\{\\mathcal{D}_{E/R_g}\\} = \\{\\mathcal{T}_{\\overline{E}\\to E}\\}$$<br>Le torseur dynamique de $E$ est égal au torseur des actions mécaniques <strong>extérieures</strong> à $E$. Une seule égalité torsorielle qui condense les six équations scalaires de la mécanique. Les actions intérieures se compensent (réciprocité).` },
        { type:'prop', label:'PROP', titre:'Théorèmes de la résultante et du moment dynamiques',
          contenu:`Projection du PFD en deux théorèmes vectoriels :<br><ul><li><strong>Théorème de la résultante dynamique (TRD)</strong> : $m\\,\\vec{a}(G/R_g)=\\displaystyle\\sum\\vec F_{\\text{ext}}$ ;</li><li><strong>Théorème du moment dynamique (TMD)</strong> en $A$ : $\\vec{\\delta}_A=\\displaystyle\\sum\\vec M_{A,\\text{ext}}$.</li></ul>Choisir $A=G$ ou un point fixe simplifie $\\vec\\delta_A$. Cas du solide en rotation autour d'un axe fixe $(\\Delta)$ : $J_\\Delta\\,\\ddot\\theta = \\sum M_{\\Delta,\\text{ext}}$ (équation scalaire « $J\\ddot\\theta=\\Gamma$ »).` },
        { type:'def', label:'DEF', titre:'Référentiel non galiléen et forces d\'inertie',
          contenu:`Dans un référentiel $R'$ <strong>non galiléen</strong>, le PFD reste valable en ajoutant aux forces réelles les <strong>forces d'inertie</strong> :<br>$$m\\,\\vec a_{/R'} = \\sum\\vec F_{\\text{réelles}} + \\vec F_{ie} + \\vec F_{ic}$$<br>avec $\\vec F_{ie}=-m\\,\\vec a_e$ (force d'inertie d'<strong>entraînement</strong>) et $\\vec F_{ic}=-m\\,\\vec a_c=-2m\\,\\vec\\Omega\\wedge\\vec v_{/R'}$ (force de <strong>Coriolis</strong>). $\\vec a_e$ et $\\vec a_c$ sont issues de la composition des accélérations.` },
        { type:'meth', label:'METH', titre:'Stratégie de résolution en dynamique',
          contenu:`<strong>1.</strong> Définir le système, le référentiel galiléen, le paramétrage (nombre de mobilités).<br><strong>2.</strong> <strong>Isoler</strong> et faire le bilan des actions extérieures.<br><strong>3.</strong> Choisir le théorème qui <strong>élimine</strong> les inconnues de liaison : TMD au centre/axe d'une pivot pour évacuer ses réactions.<br><strong>4.</strong> Projeter et obtenir l'<strong>équation du mouvement</strong>.<br><strong>5.</strong> Si seuls les efforts intéressent et le mouvement est connu, appliquer directement le PFD.` },
      ]
    },

    {
      titre: 'Approche énergétique',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème de l\'énergie cinétique (TEC)',
          contenu:`Dans un référentiel galiléen, la dérivée de l'énergie cinétique d'un solide $S$ égale la <strong>puissance galiléenne</strong> de TOUTES les actions extérieures qui lui sont appliquées :<br>$$\\frac{\\mathrm{d}E_c(S/R_g)}{\\mathrm{d}t} = \\mathcal{P}_{\\text{ext}\\to S}$$<br>Pour un <strong>ensemble</strong> de solides, il faut ajouter la puissance des <strong>inter-efforts</strong> : $\\dfrac{\\mathrm dE_c}{\\mathrm dt}=\\mathcal P_{\\text{ext}}+\\mathcal P_{\\text{int}}$. Les inter-efforts de liaisons <strong>parfaites</strong> ont une puissance nulle.` },
        { type:'form', label:'FORM', titre:'Puissance d\'une action mécanique',
          contenu:`La <strong>puissance</strong> développée par le torseur d'action $\\{\\mathcal T_{1\\to2}\\}$ dans le mouvement de $2/1$ est le <strong>comoment</strong> avec le torseur cinématique :<br>$$\\mathcal{P}_{1\\to 2/1} = \\{\\mathcal{T}_{1\\to 2}\\}\\otimes\\{\\mathcal{V}_{2/1}\\} = \\vec{R}_{1\\to2}\\cdot\\vec{v}(A,2/1) + \\vec{M}_{A,1\\to2}\\cdot\\vec{\\Omega}_{2/1}$$<br>Cas usuels : $\\mathcal P=\\vec F\\cdot\\vec v$ (force et translation), $\\mathcal P=\\Gamma\\,\\omega$ (couple et rotation, en W). C'est un <strong>invariant</strong> (indépendant du point de réduction).` },
        { type:'def', label:'DEF', titre:'Énergie cinétique d\'un solide',
          contenu:`L'énergie cinétique d'un solide $S$ vaut le <strong>demi-comoment</strong> des torseurs cinétique et cinématique :<br>$$E_c(S/R)=\\frac12\\{\\mathcal C_{S/R}\\}\\otimes\\{\\mathcal V_{S/R}\\}=\\frac12\\left(m\\,v^2(G)+\\vec\\Omega\\cdot\\overline{\\overline I}_G\\vec\\Omega\\right)$$<br>Cas particuliers : <strong>translation</strong> $E_c=\\tfrac12 mv^2$ ; <strong>rotation</strong> autour d'un axe fixe $E_c=\\tfrac12 J_\\Delta\\,\\omega^2$.` },
        { type:'def', label:'DEF', titre:'Rendement énergétique',
          contenu:`Le <strong>rendement</strong> d'une chaîne de transmission est le rapport de la puissance utile en sortie à la puissance absorbée en entrée :<br>$$\\eta = \\frac{\\mathcal{P}_{\\text{utile}}}{\\mathcal{P}_{\\text{absorbée}}} = 1 - \\frac{\\mathcal{P}_{\\text{pertes}}}{\\mathcal{P}_{\\text{absorbée}}} \\le 1$$<br>Pour des étages en <strong>série</strong>, les rendements se <strong>multiplient</strong> : $\\eta_{\\text{tot}}=\\eta_1\\,\\eta_2\\cdots\\eta_n$. Les pertes (frottements, Joule, hystérésis) dissipent en chaleur.` },
        { type:'ex', label:'EX', titre:'Roue qui roule sans glisser sur un plan incliné',
          contenu:`Un disque (masse $m$, rayon $R$, $J_G=\\tfrac12 mR^2$) roule sans glisser sur une pente d'angle $\\alpha$, lâché sans vitesse. Le RSG donne $v=R\\dot\\theta$. TEC :<br>$$\\frac{\\mathrm d}{\\mathrm dt}\\!\\left(\\tfrac12 mv^2+\\tfrac12 J_G\\dot\\theta^2\\right)=mg\\sin\\alpha\\;v$$<br>D'où l'accélération du centre : $\\boxed{a=\\dfrac{g\\sin\\alpha}{1+J_G/(mR^2)}=\\dfrac{2}{3}g\\sin\\alpha}$. La réaction de contact (RSG, parfait) ne travaille pas : elle n'apparaît pas dans le bilan.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 3. CINÉMATIQUE DU SOLIDE INDÉFORMABLE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-cinematique', matiere: 'si',
  titre: 'Cinématique du solide indéformable', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Torseur cinématique',
      cartes: [
        { type:'def', label:'DEF', titre:'Torseur cinématique',
          contenu:`Le mouvement d'un solide $S$ par rapport à $R$ est entièrement décrit par son <strong>torseur cinématique</strong>, réduit en un point $A$ de $S$ :<br>$$\\{\\mathcal{V}_{S/R}\\} = \\left\\{ \\begin{array}{c} \\vec{\\Omega}_{S/R} \\\\ \\vec{v}(A \\in S/R) \\end{array} \\right\\}_A$$<br>$\\vec{\\Omega}_{S/R}$ est le <strong>vecteur rotation</strong> (résultante du torseur, identique en tout point), $\\vec v(A)$ la vitesse du point $A$ appartenant à $S$. Deux vecteurs suffisent : le champ des vitesses d'un solide est un <strong>champ de moments</strong>.` },
        { type:'th', label:'THM', titre:'Relation de Varignon (champ des vitesses)',
          contenu:`La vitesse d'un point $B$ d'un solide se déduit de celle d'un point $A$ du <strong>même</strong> solide par la <strong>relation de Varignon</strong> (ou relation du champ des vitesses) :<br>$$\\vec{v}(B\\in S/R) = \\vec{v}(A\\in S/R) + \\vec{\\Omega}_{S/R}\\wedge\\overrightarrow{AB}$$<br>C'est la traduction de la <strong>rigidité</strong> du solide : les distances entre points sont conservées. Le terme $\\vec\\Omega\\wedge\\overrightarrow{AB}$ décrit la contribution de la rotation.` },
        { type:'prop', label:'PROP', titre:'Équiprojectivité',
          contenu:`Le champ des vitesses d'un solide est <strong>équiprojectif</strong> : pour tous points $A,B$ de $S$,<br>$$\\vec{v}(A\\in S/R)\\cdot\\overrightarrow{AB} = \\vec{v}(B\\in S/R)\\cdot\\overrightarrow{AB}$$<br>Les projections des vitesses de deux points sur la droite qui les joint sont <strong>égales</strong> (sinon le solide se déformerait). Réciproquement, tout champ équiprojectif est un torseur. Très utile en <strong>résolution graphique</strong>.` },
        { type:'def', label:'DEF', titre:'Mouvements particuliers',
          contenu:`Selon le torseur cinématique :<br><ul><li><strong>Translation</strong> : $\\vec\\Omega_{S/R}=\\vec0$ → tous les points ont la même vitesse (le torseur est un couple cinématique).</li><li><strong>Rotation</strong> autour d'un axe fixe $(\\Delta)$ : $\\vec\\Omega=\\dot\\theta\\,\\vec u$ et $\\vec v(P)=\\vec0$ pour tout $P\\in\\Delta$ (glisseur cinématique).</li><li>Mouvement <strong>quelconque</strong> : torseur à automoment non nul (vissage instantané).</li></ul>` },
      ]
    },

    {
      titre: 'Dérivation vectorielle dans un repère mobile',
      cartes: [
        { type:'th', label:'THM', titre:'Formule de la base mobile (Bour)',
          contenu:`Pour un vecteur $\\vec{u}$ quelconque, exprimé dans une base liée à $R_1$ tournant à $\\vec\\Omega_{R_1/R_0}$ par rapport à $R_0$ :<br>$$\\left.\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right|_{R_0} = \\left.\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right|_{R_1} + \\vec{\\Omega}_{R_1/R_0}\\wedge\\vec{u}$$<br>C'est la <strong>relation de dérivation en repère mobile</strong>. Si $\\vec u$ est <strong>fixe</strong> dans $R_1$, sa dérivée dans $R_0$ se réduit à $\\vec\\Omega_{R_1/R_0}\\wedge\\vec u$. Outil de base pour dériver $\\vec x_1,\\vec y_1$ tournants.` },
        { type:'prop', label:'PROP', titre:'Composition des vecteurs rotation',
          contenu:`Les vecteurs rotation se <strong>composent par addition</strong> (relation de Chasles cinématique) :<br>$$\\vec{\\Omega}_{S/R_0} = \\vec{\\Omega}_{S/R_1} + \\vec{\\Omega}_{R_1/R_0}$$<br>et l'<strong>antisymétrie</strong> : $\\vec\\Omega_{R_1/R_0}=-\\vec\\Omega_{R_0/R_1}$. Très utile pour décomposer un mouvement complexe en mouvements intermédiaires (angles d'Euler, paramétrage par étages).` },
        { type:'form', label:'FORM', titre:'Vitesse et accélération en polaires',
          contenu:`En coordonnées polaires $(r,\\theta)$, base mobile $(\\vec u_r,\\vec u_\\theta)$ avec $\\dot{\\vec u}_r=\\dot\\theta\\,\\vec u_\\theta$, $\\dot{\\vec u}_\\theta=-\\dot\\theta\\,\\vec u_r$ :<br>$$\\vec v = \\dot r\\,\\vec u_r + r\\dot\\theta\\,\\vec u_\\theta$$<br>$$\\vec a = (\\ddot r - r\\dot\\theta^2)\\,\\vec u_r + (r\\ddot\\theta + 2\\dot r\\dot\\theta)\\,\\vec u_\\theta$$<br>$-r\\dot\\theta^2$ : accélération <strong>centripète</strong> ; $2\\dot r\\dot\\theta$ : terme de <strong>Coriolis</strong>. Pour un mouvement circulaire ($r=R$ cte) : $\\vec a=-R\\dot\\theta^2\\vec u_r+R\\ddot\\theta\\,\\vec u_\\theta$.` },
      ]
    },

    {
      titre: 'Composition des mouvements',
      cartes: [
        { type:'th', label:'THM', titre:'Composition des vitesses',
          contenu:`Pour un point $M$ mobile, observé depuis $R_0$ via un référentiel intermédiaire $R_1$ :<br>$$\\vec{v}(M/R_0) = \\vec{v}(M/R_1) + \\vec{v}_e(M)$$<br>où $\\vec v(M/R_1)$ est la vitesse <strong>relative</strong> et $\\vec v_e(M)=\\vec v(M\\in R_1/R_0)$ la vitesse d'<strong>entraînement</strong> (vitesse du point coïncident de $R_1$). La vitesse d'entraînement se calcule par Varignon sur $R_1$ : $\\vec v_e(M)=\\vec v(O_1/R_0)+\\vec\\Omega_{R_1/R_0}\\wedge\\overrightarrow{O_1M}$.` },
        { type:'th', label:'THM', titre:'Composition des accélérations',
          contenu:`$$\\vec{a}(M/R_0) = \\vec{a}(M/R_1) + \\vec{a}_e(M) + \\vec{a}_c(M)$$<br>avec l'<strong>accélération de Coriolis</strong> (ou complémentaire) :<br>$$\\vec{a}_c(M) = 2\\,\\vec{\\Omega}_{R_1/R_0}\\wedge\\vec{v}(M/R_1)$$<br>$\\vec a_e$ est l'accélération d'entraînement. À la différence des vitesses, <strong>un troisième terme apparaît</strong> : $\\vec a_c$ s'annule si $\\vec\\Omega_{R_1/R_0}=\\vec0$ (entraînement en translation) ou si $\\vec v(M/R_1)\\parallel\\vec\\Omega$.` },
        { type:'prop', label:'PROP', titre:'Composition des torseurs cinématiques',
          contenu:`Les torseurs cinématiques s'<strong>additionnent</strong> (relation de Chasles) :<br>$$\\{\\mathcal{V}_{S/R_0}\\} = \\{\\mathcal{V}_{S/R_1}\\} + \\{\\mathcal{V}_{R_1/R_0}\\}$$<br>(réduits au <strong>même point</strong>). On en déduit à la fois la composition des vecteurs rotation (résultantes) et celle des vitesses (moments). C'est l'outil de la <strong>fermeture cinématique</strong> dans une chaîne fermée : $\\sum_i\\{\\mathcal V_{i/i+1}\\}=\\{0\\}$.` },
        { type:'meth', label:'METH', titre:'Fermeture géométrique et cinématique',
          contenu:`Pour une <strong>chaîne fermée</strong> de solides :<br><strong>1.</strong> Écrire la <strong>fermeture géométrique</strong> $\\sum_i\\overrightarrow{A_iA_{i+1}}=\\vec0$ (relation de Chasles bouclée), puis la projeter.<br><strong>2.</strong> La dériver $\\Rightarrow$ relations entre vitesses, ou écrire directement la <strong>fermeture cinématique</strong> $\\sum\\{\\mathcal V_{i/i+1}\\}=\\{0\\}$.<br><strong>3.</strong> Projeter sur une base bien choisie pour obtenir les <strong>lois entrée-sortie</strong> reliant les paramètres.` },
      ]
    },

    {
      titre: 'Contacts et roulement sans glissement',
      cartes: [
        { type:'def', label:'DEF', titre:'Vitesse de glissement',
          contenu:`Pour deux solides $1$ et $2$ en contact au point géométrique $I$, la <strong>vitesse de glissement</strong> de $2$ par rapport à $1$ est :<br>$$\\vec{v}_g(I,2/1) = \\vec{v}(I\\in 2/R) - \\vec{v}(I\\in 1/R)$$<br>Elle est <strong>indépendante</strong> du référentiel $R$ d'observation et <strong>tangente</strong> au plan de contact (les composantes normales s'annulent par non-pénétration). C'est la vitesse relative des deux points matériels coïncidant en $I$.` },
        { type:'def', label:'DEF', titre:'Roulement sans glissement (RSG)',
          contenu:`Il y a <strong>roulement sans glissement</strong> de $2$ sur $1$ au point $I$ si :<br>$$\\vec{v}_g(I,2/1) = \\vec{0}$$<br>C'est une <strong>condition cinématique</strong> (relation entre paramètres et leurs dérivées), pas une équation d'effort. Elle fournit autant d'équations scalaires que de composantes tangentielles (jusqu'à $2$). Le contact peut en plus <strong>pivoter</strong> et <strong>rouler</strong> (composantes de $\\vec\\Omega$).` },
        { type:'ex', label:'EX', titre:'Roue de rayon $R$ sur le sol',
          contenu:`Une roue de centre $C$, rayon $R$, roule sur le sol fixe ($\\vec\\Omega=\\dot\\theta\\,\\vec z$). Au point de contact $I$ : $\\vec v(I\\in\\text{roue})=\\vec v(C)+\\vec\\Omega\\wedge\\overrightarrow{CI}$.<br>Avec $\\vec v(C)=\\dot x_C\\,\\vec x$ et $\\overrightarrow{CI}=-R\\,\\vec y$ : $\\vec v(I)=(\\dot x_C + R\\dot\\theta)\\vec x$.<br>Le RSG impose $\\boxed{\\dot x_C = -R\\dot\\theta}$ : la relation classique vitesse du centre $=$ rayon $\\times$ vitesse de rotation. Le point $I$ a une vitesse <strong>nulle</strong> à cet instant.` },
        { type:'prop', label:'PROP', titre:'Roulement, pivotement, glissement',
          contenu:`Le torseur cinématique au contact décompose $\\vec\\Omega_{2/1}$ et $\\vec v_g$ :<br><ul><li><strong>Glissement</strong> : $\\vec v_g\\neq\\vec0$ (composante tangentielle de vitesse) ;</li><li><strong>Roulement</strong> : composante de $\\vec\\Omega_{2/1}$ <strong>tangente</strong> au plan de contact ;</li><li><strong>Pivotement</strong> : composante de $\\vec\\Omega_{2/1}$ selon la <strong>normale</strong> au contact.</li></ul>Le RSG annule $\\vec v_g$ mais <strong>autorise</strong> roulement et pivotement.` },
      ]
    },

    {
      titre: 'Centre instantané de rotation (CIR)',
      cartes: [
        { type:'def', label:'DEF', titre:'Centre instantané de rotation',
          contenu:`Dans un mouvement <strong>plan</strong> ($\\vec\\Omega_{S/R}=\\omega\\,\\vec z\\neq\\vec0$), il existe à chaque instant un unique point $I$ du plan, le <strong>centre instantané de rotation</strong>, de vitesse nulle :<br>$$\\vec{v}(I\\in S/R) = \\vec{0}$$<br>À cet instant, le mouvement est une <strong>rotation pure</strong> autour de $I$ : $\\vec v(M)=\\vec\\Omega\\wedge\\overrightarrow{IM}$, donc $\\|\\vec v(M)\\|=\\omega\\cdot IM$. Le CIR n'existe pas si le mouvement est une translation ($\\omega=0$, CIR « à l'infini »).` },
        { type:'meth', label:'METH', titre:'Construire le CIR graphiquement',
          contenu:`<strong>1.</strong> Les vitesses étant orthogonales aux rayons issus de $I$, le CIR est à l'<strong>intersection des perpendiculaires</strong> aux vecteurs vitesses de deux points.<br><strong>2.</strong> Si on connaît une vitesse en direction et norme, on en déduit toutes les autres ($v\\propto$ distance au CIR).<br><strong>3.</strong> Au point de RSG entre un solide et le bâti, le point de contact <strong>est</strong> le CIR (vitesse nulle).<br><strong>4.</strong> Théorème des trois CIR (Kennedy) : pour 3 solides, les 3 CIR relatifs sont <strong>alignés</strong>.` },
        { type:'ex', label:'EX', titre:'Échelle glissant contre un mur',
          contenu:`Une échelle (extrémités $A$ sur le sol horizontal, $B$ sur le mur vertical) glisse. $\\vec v(A)$ est horizontale, $\\vec v(B)$ verticale.<br>Le CIR est à l'intersection de la verticale par $A$ et de l'horizontale par $B$ : il décrit un <strong>quart de cercle</strong>. On en déduit immédiatement le rapport des vitesses des extrémités selon leur distance au CIR, sans calcul de dérivée.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 4. TRANSMETTEURS DE PUISSANCE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-transmetteurs', matiere: 'si',
  titre: 'Transmetteurs de puissance', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Engrenages — généralités',
      cartes: [
        { type:'def', label:'DEF', titre:'Engrenage et rapport de transmission',
          contenu:`Un <strong>engrenage</strong> est l'ensemble de deux roues dentées en prise. Les roues de $Z_1$ et $Z_2$ dents tournent à $\\omega_1,\\omega_2$. Le <strong>rapport de transmission</strong> est :<br>$$i = \\frac{\\omega_{\\text{sortie}}}{\\omega_{\\text{entrée}}}$$<br>Pour un contact extérieur, les vitesses de rotation sont en raison inverse des nombres de dents (RSG aux primitifs) : $\\dfrac{\\omega_2}{\\omega_1}=-\\dfrac{Z_1}{Z_2}$. Engrenage <strong>réducteur</strong> si $|i|<1$, <strong>multiplicateur</strong> si $|i|>1$.` },
        { type:'form', label:'FORM', titre:'Module, pas et entraxe',
          contenu:`Les roues conjuguées partagent le même <strong>module</strong> $m$. Diamètre primitif : $d=m\\,Z$. Pas (sur la primitive) : $p=\\pi m$. Entraxe de deux roues à contact extérieur :<br>$$a = \\frac{d_1+d_2}{2}=\\frac{m(Z_1+Z_2)}{2}$$<br>Condition d'engrènement : <strong>même module</strong> $m$ et même angle de pression (usuellement $20°$). Le module normalise la denture (séries normalisées).` },
        { type:'prop', label:'PROP', titre:'Signe et contacts extérieur / intérieur',
          contenu:`Le signe du rapport dépend du type de contact :<br><ul><li>Contact <strong>extérieur</strong> (deux roues dentées extérieures) : les roues tournent en sens <strong>opposés</strong>, $i<0$.</li><li>Contact <strong>intérieur</strong> (pignon dans une couronne à denture intérieure) : <strong>même sens</strong>, $i>0$.</li></ul>Une <strong>roue folle</strong> (pignon intercalaire) inverse le sens sans changer le module du rapport (elle ne sert qu'à régler le sens ou l'entraxe).` },
      ]
    },

    {
      titre: 'Trains d\'engrenages simples',
      cartes: [
        { type:'def', label:'DEF', titre:'Train simple (axes fixes)',
          contenu:`Un <strong>train d'engrenages simple</strong> est une suite de roues dentées d'<strong>axes fixes</strong> par rapport au bâti. Le rapport global est le <strong>produit</strong> des rapports élémentaires :<br>$$i = \\frac{\\omega_{\\text{sortie}}}{\\omega_{\\text{entrée}}} = (-1)^k\\,\\frac{\\prod Z_{\\text{menantes}}}{\\prod Z_{\\text{menées}}}$$<br>$k$ = nombre de contacts <strong>extérieurs</strong> (donne le signe). Les roues « menantes » (motrices) sont au numérateur, les « menées » (réceptrices) au dénominateur. Les roues folles n'apparaissent pas dans le module du rapport.` },
        { type:'form', label:'FORM', titre:'Roue baladeuse double / engrenage étagé',
          contenu:`Quand deux roues sont <strong>solidaires</strong> sur un même axe (bloc baladeur), elles partagent la même vitesse mais des nombres de dents différents. Pour un train à deux étages roues $(Z_1\\to Z_2)$ puis $(Z_2'\\to Z_3)$ avec $Z_2,Z_2'$ solidaires :<br>$$i=\\frac{\\omega_3}{\\omega_1}=\\left(-\\frac{Z_1}{Z_2}\\right)\\left(-\\frac{Z_2'}{Z_3}\\right)=\\frac{Z_1 Z_2'}{Z_2 Z_3}$$<br>Le rapport résulte de la multiplication des étages, permettant de fortes réductions avec peu de roues.` },
        { type:'ex', label:'EX', titre:'Réducteur à deux étages',
          contenu:`Étage 1 : pignon $Z_1=20$ menant une roue $Z_2=60$. Étage 2 : pignon $Z_2'=15$ (solidaire de $Z_2$) menant $Z_3=45$.<br>$$i=\\left(\\frac{20}{60}\\right)\\left(\\frac{15}{45}\\right)=\\frac13\\times\\frac13=\\frac19$$<br>La sortie tourne $9$ fois moins vite que l'entrée. Le couple de sortie est (idéalement) multiplié par $9$ : $C_s=C_e/|i|$ à puissance conservée. Deux contacts extérieurs $\\Rightarrow i>0$ (même sens entrée/sortie).` },
      ]
    },

    {
      titre: 'Trains épicycloïdaux',
      cartes: [
        { type:'def', label:'DEF', titre:'Train épicycloïdal',
          contenu:`Un <strong>train épicycloïdal</strong> comporte des roues dont l'axe est <strong>mobile</strong> : les <strong>satellites</strong> sont portés par un <strong>porte-satellites</strong> (bras) tournant. Éléments typiques : un <strong>planétaire</strong> central, une <strong>couronne</strong> à denture intérieure, le <strong>porte-satellites</strong>. C'est un système à <strong>2 degrés de liberté</strong> : deux entrées indépendantes déterminent la troisième sortie.` },
        { type:'th', label:'THM', titre:'Formule de Willis',
          contenu:`En se plaçant dans le repère du <strong>porte-satellites</strong> $(ps)$, le train redevient à axes fixes. La <strong>formule de Willis</strong> relie les vitesses du planétaire $(1)$, de la couronne $(3)$ et du porte-satellites :<br>$$\\lambda = \\frac{\\omega_1 - \\omega_{ps}}{\\omega_3 - \\omega_{ps}} = (-1)^k\\,\\frac{\\prod Z_{\\text{menantes}}}{\\prod Z_{\\text{menées}}}$$<br>$\\lambda$ est la <strong>raison basique</strong> (rapport du train rendu fixe). C'est l'équation fondamentale des trains épicycloïdaux : une seule relation à trois inconnues de vitesse.` },
        { type:'meth', label:'METH', titre:'Résoudre un train épicycloïdal',
          contenu:`<strong>1.</strong> Identifier planétaire(s), couronne, porte-satellites ; repérer les satellites (qui n'apparaissent pas dans $\\lambda$).<br><strong>2.</strong> Calculer la <strong>raison basique</strong> $\\lambda$ en imaginant le porte-satellites bloqué (train à axes fixes).<br><strong>3.</strong> Écrire la <strong>formule de Willis</strong>.<br><strong>4.</strong> Ajouter les conditions imposées (un élément bloqué $\\omega=0$, ou une entrée connue) pour lever l'indétermination et obtenir le rapport.` },
        { type:'ex', label:'EX', titre:'Couronne bloquée, entrée planétaire',
          contenu:`Train avec planétaire $Z_1=30$, couronne $Z_3=90$ <strong>bloquée</strong> ($\\omega_3=0$), entrée sur le planétaire $\\omega_1$, sortie sur le porte-satellites $\\omega_{ps}$. Raison basique $\\lambda=-Z_1/Z_3=-1/3$. Willis :<br>$$\\frac{\\omega_1-\\omega_{ps}}{0-\\omega_{ps}}=-\\frac13 \\;\\Rightarrow\\; \\frac{\\omega_{ps}}{\\omega_1}=\\frac{1}{1+Z_3/Z_1}=\\frac{1}{4}$$<br>Réduction de $4$ avec un encombrement compact : c'est l'intérêt des trains épicycloïdaux (boîtes automatiques, réducteurs planétaires).` },
      ]
    },

    {
      titre: 'Systèmes vis-écrou',
      cartes: [
        { type:'def', label:'DEF', titre:'Transformation rotation → translation',
          contenu:`Un <strong>système vis-écrou</strong> transforme un mouvement de <strong>rotation</strong> en <strong>translation</strong> (ou inversement). Pour une vis de <strong>pas</strong> $p$ tournant de $\\theta$ (en tour) dans un écrou guidé en translation, le déplacement axial est :<br>$$x = p\\,\\frac{\\theta}{2\\pi}\\quad(\\theta\\text{ en rad})\\qquad\\text{ou}\\qquad x = p\\cdot n\\;(n\\text{ tours})$$<br>Vitesse : $\\dot x = \\dfrac{p}{2\\pi}\\,\\dot\\theta$. Le pas $p$ est l'avance par tour. Une <strong>vis à plusieurs filets</strong> avance de $p$ par filet $\\times$ nombre de filets par tour.` },
        { type:'form', label:'FORM', titre:'Loi entrée-sortie et liaison hélicoïdale',
          contenu:`La <strong>liaison hélicoïdale</strong> couple rotation et translation par le pas. En notant $h=p/(2\\pi)$ (pas réduit), le torseur cinématique impose $v_x = h\\,\\omega$. La loi entrée-sortie vis-écrou :<br>$$\\boxed{v_{\\text{translation}} = \\frac{p}{2\\pi}\\,\\omega_{\\text{vis}}}$$<br>C'est une transmission à très forte <strong>réduction</strong> (un grand $\\omega$ pour une petite $v$) et capable de fournir un grand effort axial : intérêt en serrage, levage, positionnement précis.` },
        { type:'prop', label:'PROP', titre:'Réversibilité et rendement',
          contenu:`Le système vis-écrou peut être <strong>irréversible</strong> (l'effort axial ne peut faire tourner la vis) si l'angle d'hélice $\\beta$ est inférieur à l'angle de frottement $\\varphi$ : $\\tan\\beta < f$. C'est le principe du <strong>maintien en position</strong> sans frein (cric, étau).<br>Le rendement chute fortement avec le frottement : pour une vis triangulaire à filet trapézoïdal, $\\eta$ peut être inférieur à $50\\%$. Les <strong>vis à billes</strong> récupèrent un rendement élevé ($>90\\%$).` },
      ]
    },

    {
      titre: 'Poulies-courroies et adaptation d\'énergie',
      cartes: [
        { type:'form', label:'FORM', titre:'Rapport de transmission poulies-courroies',
          contenu:`Pour deux poulies de diamètres $D_1,D_2$ reliées par une courroie (sans glissement), la vitesse <strong>linéaire</strong> de la courroie est commune : $v = \\dfrac{D_1}{2}\\omega_1 = \\dfrac{D_2}{2}\\omega_2$. D'où :<br>$$i=\\frac{\\omega_2}{\\omega_1}=\\frac{D_1}{D_2}=\\frac{R_1}{R_2}$$<br>Même <strong>sens</strong> de rotation (courroie droite). Avantages : silence, souplesse, absorption des à-coups ; limite : risque de <strong>glissement</strong> si le couple dépasse l'adhérence courroie-poulie. Les courroies <strong>crantées</strong> garantissent le synchronisme.` },
        { type:'def', label:'DEF', titre:'Adaptation d\'énergie',
          contenu:`Un <strong>réducteur</strong> (engrenages, courroies, vis) réalise l'<strong>adaptation d'énergie</strong> entre un actionneur et une charge : à puissance conservée, il <strong>échange vitesse et couple</strong>. La puissance reste $\\mathcal P = C\\,\\omega$ (aux pertes près) :<br>$$C_2\\,\\omega_2 = \\eta\\, C_1\\,\\omega_1$$<br>Diminuer la vitesse ($|i|<1$) <strong>augmente</strong> le couple disponible. On dimensionne le réducteur pour que le moteur travaille à son point de meilleur rendement tout en délivrant le couple exigé par la charge.` },
        { type:'form', label:'FORM', titre:'Couple et inertie ramenés',
          contenu:`Vu de l'entrée, un réducteur de rapport $i=\\omega_s/\\omega_e$ <strong>ramène</strong> les grandeurs de la charge :<br><ul><li>Couple résistant ramené : $C_{r,\\text{ramené}} = i\\cdot C_{r}/\\eta$ ;</li><li>Inertie ramenée : $J_{\\text{ramené}} = i^2\\, J_{\\text{charge}}$ (le carré du rapport !).</li></ul>L'inertie d'une charge lente paraît <strong>très faible</strong> vue du moteur rapide : c'est pourquoi un réducteur facilite aussi l'accélération du système.` },
        { type:'ex', label:'EX', titre:'Bilan de puissance d\'une chaîne complète',
          contenu:`Un moteur fournit $\\mathcal P_m=200$ W via un réducteur de rendement $\\eta_1=0{,}9$ puis un système vis-écrou $\\eta_2=0{,}4$. Puissance utile en sortie :<br>$$\\mathcal P_u=\\eta_1\\,\\eta_2\\,\\mathcal P_m = 0{,}9\\times0{,}4\\times200 = 72\\;\\text{W}$$<br>Rendement global $\\eta=0{,}36$ : la vis-écrou domine les pertes. Pour lever une charge à $v=0{,}05$ m/s, l'effort axial disponible vaut $F=\\mathcal P_u/v=72/0{,}05=1440$ N.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 5. LIAISONS MÉCANIQUES
// ══════════════════════════════════════════════════════════════
{
  id: 'si-liaisons', matiere: 'si',
  titre: 'Liaisons mécaniques', ordre: 5, enrich: true,
  sections: [

    {
      titre: 'Degrés de liberté et dualité',
      cartes: [
        { type:'def', label:'DEF', titre:'Degrés de liberté',
          contenu:`Une <strong>liaison</strong> entre deux solides restreint leurs mouvements relatifs. Le <strong>nombre de degrés de liberté</strong> $n$ est le nombre de mouvements relatifs indépendants autorisés : $0\\le n\\le 6$ (3 translations $T_x,T_y,T_z$ + 3 rotations $R_x,R_y,R_z$).<br>Encastrement : $n=0$ (aucun mouvement). Liaison libre : $n=6$. Le torseur cinématique a $n$ composantes non nulles, le torseur statique en a $6-n$.` },
        { type:'prop', label:'PROP', titre:'Dualité cinématique / statique',
          contenu:`Pour une liaison <strong>parfaite</strong>, torseurs cinématique et statique sont <strong>duaux</strong> : ils ont des composantes <strong>non nulles dans des directions complémentaires</strong>.<br>$$\\{\\mathcal{T}\\}\\otimes\\{\\mathcal{V}\\} = 0 \\quad(\\text{comoment nul})$$<br>Là où une mobilité existe (ddl), l'effort dual est <strong>nul</strong> ; là où un mouvement est bloqué, un effort de liaison apparaît. Total constant : $n + (6-n) = 6$ composantes réparties entre les deux torseurs.` },
        { type:'meth', label:'METH', titre:'Écrire les torseurs d\'une liaison',
          contenu:`<strong>1.</strong> Identifier les $n$ mouvements relatifs autorisés (les ddl).<br><strong>2.</strong> Torseur cinématique : placer les composantes non nulles sur les ddl, zéro ailleurs.<br><strong>3.</strong> Torseur statique : par dualité, composantes non nulles exactement là où les mouvements sont <strong>bloqués</strong>.<br><strong>4.</strong> Choisir une base et un point adaptés à la <strong>géométrie</strong> de la liaison (axe, centre, normale) pour annuler un maximum de termes croisés.` },
      ]
    },

    {
      titre: 'Liaisons à un degré de liberté',
      cartes: [
        { type:'def', label:'DEF', titre:'Liaison pivot',
          contenu:`La <strong>liaison pivot</strong> d'axe $(A,\\vec z)$ n'autorise qu'<strong>une rotation</strong> autour de $\\vec z$ ($n=1$).<br>Torseur cinématique : $\\{\\mathcal V\\}=\\left\\{\\begin{array}{ccc}0&0\\\\0&0\\\\ \\omega_z&0\\end{array}\\right\\}_A$. Torseur statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}X&L\\\\Y&M\\\\Z&0\\end{array}\\right\\}_A$ ($5$ inconnues).<br>Réalisation : roulements, paliers. C'est la liaison la plus courante (axe de rotation guidé).` },
        { type:'def', label:'DEF', titre:'Liaison glissière',
          contenu:`La <strong>liaison glissière</strong> de direction $\\vec x$ n'autorise qu'<strong>une translation</strong> selon $\\vec x$ ($n=1$).<br>Cinématique : $\\{\\mathcal V\\}=\\left\\{\\begin{array}{ccc}0&v_x\\\\0&0\\\\0&0\\end{array}\\right\\}_A$. Statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}0&L\\\\Y&M\\\\Z&N\\end{array}\\right\\}_A$ ($5$ inconnues : $X=0$ car translation libre selon $\\vec x$).<br>Réalisation : rails, queues d'aronde. Transmet effort transverse et tous les moments.` },
        { type:'def', label:'DEF', titre:'Liaison hélicoïdale',
          contenu:`La <strong>liaison hélicoïdale</strong> d'axe $(A,\\vec x)$ et de pas $p$ couple rotation et translation : translation et rotation ne sont <strong>pas indépendantes</strong> ($n=1$) avec $v_x = \\dfrac{p}{2\\pi}\\,\\omega_x$.<br>Cinématique : un seul paramètre ($\\omega_x$, et $v_x$ lié). Statique : $5$ inconnues, mais le couple et l'effort axial sont <strong>liés</strong> par le pas. C'est le modèle du système vis-écrou.` },
      ]
    },

    {
      titre: 'Liaisons à plusieurs degrés de liberté',
      cartes: [
        { type:'def', label:'DEF', titre:'Liaison pivot glissant',
          contenu:`La <strong>liaison pivot glissant</strong> d'axe $(A,\\vec x)$ autorise <strong>rotation ET translation</strong> autour/le long de $\\vec x$ ($n=2$).<br>Cinématique : $\\{\\mathcal V\\}=\\left\\{\\begin{array}{ccc}\\omega_x&v_x\\\\0&0\\\\0&0\\end{array}\\right\\}_A$. Statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}0&0\\\\Y&M\\\\Z&N\\end{array}\\right\\}_A$ ($4$ inconnues : ni effort ni moment selon $\\vec x$).<br>Réalisation : arbre coulissant dans un palier lisse.` },
        { type:'def', label:'DEF', titre:'Liaison rotule (sphérique)',
          contenu:`La <strong>liaison rotule</strong> de centre $A$ autorise les <strong>3 rotations</strong> mais aucune translation ($n=3$).<br>Cinématique : $\\{\\mathcal V\\}=\\left\\{\\begin{array}{ccc}\\omega_x&0\\\\ \\omega_y&0\\\\ \\omega_z&0\\end{array}\\right\\}_A$. Statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}X&0\\\\Y&0\\\\Z&0\\end{array}\\right\\}_A$ ($3$ inconnues de force, moment <strong>nul</strong> au centre).<br>Transmet une force quelconque passant par $A$, aucun moment : c'est un <strong>glisseur</strong> passant par $A$.` },
        { type:'def', label:'DEF', titre:'Liaison appui plan',
          contenu:`La <strong>liaison appui plan</strong> de normale $\\vec z$ autorise $2$ translations dans le plan $+ 1$ rotation autour de $\\vec z$ ($n=3$).<br>Cinématique : $\\{\\mathcal V\\}=\\left\\{\\begin{array}{ccc}0&v_x\\\\0&v_y\\\\ \\omega_z&0\\end{array}\\right\\}_A$. Statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}0&L\\\\0&M\\\\Z&0\\end{array}\\right\\}_A$ ($3$ inconnues).<br>Transmet l'effort <strong>normal</strong> $Z$ et les moments de <strong>basculement</strong> $L,M$, mais aucun effort dans le plan.` },
        { type:'def', label:'DEF', titre:'Sphère-cylindre, sphère-plan',
          contenu:`Liaisons à contact ponctuel ou linéique :<br><ul><li><strong>Sphère-cylindre</strong> (linéaire annulaire) : centre $A$ sur l'axe $\\vec x$ ; $n=4$ ($\\omega_x,\\omega_y,\\omega_z,v_x$). Statique : seulement $Y,Z$ ($2$ inconnues), force perpendiculaire à l'axe.</li><li><strong>Sphère-plan</strong> (ponctuelle) de normale $\\vec z$ : $n=5$. Statique : une seule composante $Z$ (effort normal), $1$ inconnue.</li></ul>Ce sont les liaisons les moins « bloquantes ».` },
      ]
    },

    {
      titre: 'Encastrement et tableau de synthèse',
      cartes: [
        { type:'def', label:'DEF', titre:'Liaison encastrement',
          contenu:`La <strong>liaison encastrement</strong> (complète, fixe) supprime <strong>tous</strong> les degrés de liberté ($n=0$) : les deux solides sont solidaires.<br>Cinématique : $\\{\\mathcal V\\}=\\{0\\}$. Statique : $\\{\\mathcal T\\}=\\left\\{\\begin{array}{ccc}X&L\\\\Y&M\\\\Z&N\\end{array}\\right\\}_A$ ($6$ inconnues : transmet tout effort et tout moment).<br>Réalisation : vissage, soudure, frettage, collage. C'est la liaison « maximale » duale de la liaison libre.` },
        { type:'prop', label:'PROP', titre:'Tableau des liaisons normalisées',
          contenu:`Récapitulatif (degrés de liberté $n$ / inconnues statiques $6-n$) :<br><ul><li>Encastrement : $0$ / $6$ ;</li><li>Pivot, Glissière, Hélicoïdale : $1$ / $5$ ;</li><li>Pivot glissant : $2$ / $4$ ;</li><li>Rotule, Appui plan : $3$ / $3$ ;</li><li>Sphère-cylindre (linéaire annulaire) : $4$ / $2$ ;</li><li>Sphère-plan (ponctuelle) : $5$ / $1$.</li></ul>La somme ddl + inconnues vaut toujours $6$ (dualité).` },
        { type:'def', label:'DEF', titre:'Liaison linéaire rectiligne',
          contenu:`La <strong>liaison linéaire rectiligne</strong> (contact selon une ligne, dans un plan de normale $\\vec z$, ligne selon $\\vec x$) autorise $4$ ddl ($n=4$) : $v_x, v_y, \\omega_x, \\omega_z$.<br>Statique : transmet l'effort normal $Z$ et le moment de roulis $M$ (autour de $\\vec y$) : $2$ inconnues. C'est une liaison intermédiaire entre appui plan et ponctuelle, modélisant un cylindre sur un plan.` },
      ]
    },

    {
      titre: 'Liaisons équivalentes',
      cartes: [
        { type:'def', label:'DEF', titre:'Liaisons en parallèle',
          contenu:`Deux liaisons sont en <strong>parallèle</strong> si elles relient les <strong>mêmes</strong> deux solides. La liaison équivalente :<br><ul><li>autorise <strong>seulement</strong> les mouvements communs aux deux (intersection des mobilités) ;</li><li>transmet la <strong>somme</strong> des torseurs statiques.</li></ul>$$\\{\\mathcal V_{\\text{éq}}\\}=\\{\\mathcal V_1\\}\\cap\\{\\mathcal V_2\\},\\qquad \\{\\mathcal T_{\\text{éq}}\\}=\\{\\mathcal T_1\\}+\\{\\mathcal T_2\\}$$<br>La mise en parallèle <strong>réduit</strong> (ou conserve) le nombre de ddl : le montage est plus rigide, souvent <strong>hyperstatique</strong>.` },
        { type:'def', label:'DEF', titre:'Liaisons en série',
          contenu:`Des liaisons sont en <strong>série</strong> (chaîne ouverte) si elles s'enchaînent via des solides intermédiaires ($1\\to2\\to3$). La liaison équivalente entre les extrêmes :<br><ul><li>autorise la <strong>somme</strong> (composition) des mouvements (les torseurs cinématiques s'<strong>ajoutent</strong>) ;</li><li>transmet un torseur statique <strong>commun</strong> (le même effort traverse toute la chaîne).</li></ul>$$\\{\\mathcal V_{\\text{éq}}\\}=\\sum_i\\{\\mathcal V_{i/i+1}\\}$$<br>La mise en série <strong>augmente</strong> (ou conserve) le nombre de ddl.` },
        { type:'meth', label:'METH', titre:'Déterminer une liaison équivalente',
          contenu:`<strong>Série</strong> : sommer les torseurs <strong>cinématiques</strong> (au même point) ; le ddl résultant est la somme des mobilités compatibles.<br><strong>Parallèle</strong> : sommer les torseurs <strong>statiques</strong> ; les inconnues s'additionnent, attention aux redondances (hyperstatisme).<br><strong>Vérification</strong> : la liaison équivalente trouvée doit respecter la dualité ($n_{\\text{éq}} + $ inconnues $= 6$). Identifier ensuite la liaison normalisée correspondante par son torseur.` },
        { type:'ex', label:'EX', titre:'Deux pivots coaxiaux',
          contenu:`Deux liaisons <strong>pivot</strong> de même axe $(A,\\vec z)$, montées en <strong>parallèle</strong> entre les mêmes solides (deux paliers). Mobilité commune : la rotation autour de $\\vec z$. La liaison équivalente est une <strong>pivot</strong> d'axe $\\vec z$ ($n=1$).<br>Mais statiquement, on a $2\\times5=10$ inconnues pour seulement $5$ équations utiles → degré d'hyperstatisme $h=10-5=5$... ramené à $1$ par les contraintes d'axe : montage <strong>hyperstatique</strong> (nécessite un alignement précis des deux paliers).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 6. SYSTÈMES SÉQUENTIELS ET LOGIQUE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-sequentiel', matiere: 'si',
  titre: 'Systèmes séquentiels et logique', ordre: 6, enrich: true,
  sections: [

    {
      titre: 'Algèbre de Boole et fonctions logiques',
      cartes: [
        { type:'def', label:'DEF', titre:'Variables et fonctions logiques',
          contenu:`Une <strong>variable logique</strong> (booléenne) ne prend que deux valeurs : $0$ ou $1$. Une <strong>fonction logique</strong> de $n$ variables associe à chaque combinaison d'entrées une sortie binaire.<br>Opérateurs de base : <strong>ET</strong> (conjonction $\\cdot$, AND), <strong>OU</strong> (disjonction $+$, OR), <strong>NON</strong> (complément $\\bar{a}$, NOT). Toute fonction se réalise avec ces trois opérateurs (système complet), voire avec le seul <strong>NAND</strong> ou <strong>NOR</strong> (universels).` },
        { type:'form', label:'FORM', titre:'Théorèmes de l\'algèbre de Boole',
          contenu:`Lois fondamentales :<br><ul><li>Identités : $a+0=a$, $a\\cdot1=a$, $a+1=1$, $a\\cdot0=0$ ;</li><li>Complément : $a+\\bar a=1$, $a\\cdot\\bar a=0$, $\\bar{\\bar a}=a$ ;</li><li>Idempotence : $a+a=a$, $a\\cdot a=a$ ;</li><li>Distributivité : $a(b+c)=ab+ac$ ;</li><li>Absorption : $a+ab=a$.</li></ul>` },
        { type:'th', label:'THM', titre:'Lois de De Morgan',
          contenu:`Les <strong>lois de De Morgan</strong> relient complément, ET et OU :<br>$$\\overline{a\\cdot b} = \\bar{a} + \\bar{b} \\qquad \\overline{a+b} = \\bar{a}\\cdot\\bar{b}$$<br>« Le complément d'un produit est la somme des compléments » et réciproquement. Elles permettent de <strong>transformer</strong> toute expression et de tout réaliser avec uniquement des portes NAND (ou NOR), ce qui est précieux en conception de circuits intégrés.` },
        { type:'def', label:'DEF', titre:'Formes canoniques',
          contenu:`Toute fonction logique admet deux <strong>formes canoniques</strong> :<br><ul><li><strong>Somme de produits</strong> (minterms) : OU des combinaisons où la sortie vaut $1$ ;</li><li><strong>Produit de sommes</strong> (maxterms) : ET des combinaisons où la sortie vaut $0$.</li></ul>Ex. : $S = \\bar a b + a\\bar b$ (somme de produits) est la fonction <strong>OU exclusif</strong> $a\\oplus b$. Les formes canoniques se lisent directement sur la table de vérité.` },
      ]
    },

    {
      titre: 'Logique combinatoire et Karnaugh',
      cartes: [
        { type:'def', label:'DEF', titre:'Système combinatoire',
          contenu:`Un système est <strong>combinatoire</strong> si l'état de ses sorties à un instant donné ne dépend QUE de l'état de ses entrées <strong>au même instant</strong> : $S = f(E)$, sans mémoire.<br>Sa table de vérité décrit exhaustivement le comportement. Exemples : additionneur, multiplexeur, décodeur, comparateur. Par opposition, un système <strong>séquentiel</strong> dépend aussi de l'historique (états antérieurs).` },
        { type:'meth', label:'METH', titre:'Tableau de Karnaugh',
          contenu:`Le <strong>tableau de Karnaugh</strong> simplifie une fonction logique graphiquement :<br><strong>1.</strong> Disposer les combinaisons d'entrées de sorte que deux cases adjacentes ne diffèrent que d'<strong>une variable</strong> (code de Gray).<br><strong>2.</strong> Reporter les $1$ de la table de vérité.<br><strong>3.</strong> Regrouper les $1$ adjacents par paquets de $2^k$ (le plus grand possible), y compris par les bords (tore).<br><strong>4.</strong> Chaque groupement donne un terme produit ; leur OU est l'expression <strong>minimale</strong>.` },
        { type:'ex', label:'EX', titre:'Simplification par Karnaugh',
          contenu:`Soit $S(a,b,c)=1$ pour les combinaisons $\\bar a\\bar b c$, $\\bar a b c$, $a\\bar b c$, $ab c$ (toutes celles où $c=1$). Le tableau de Karnaugh révèle un grand groupement de $4$ cases : toutes ont $c=1$, $a$ et $b$ y prennent toutes leurs valeurs.<br>$$S = c$$<br>La fonction se réduit à la seule variable $c$ : les variables $a,b$ disparaissent. Le regroupement maximal a éliminé les redondances.` },
        { type:'def', label:'DEF', titre:'États indifférents',
          contenu:`Certaines combinaisons d'entrées ne se produisent <strong>jamais</strong> (impossibles) ou dont la sortie est <strong>sans importance</strong> : ce sont les <strong>états indifférents</strong>, notés $\\times$ (ou $\\varphi$) dans la table.<br>Dans un tableau de Karnaugh, on peut leur attribuer la valeur $0$ <strong>ou</strong> $1$ <strong>au choix</strong>, selon ce qui agrandit les groupements et simplifie davantage l'expression. C'est un levier puissant de minimisation.` },
      ]
    },

    {
      titre: 'Logique séquentielle et bascules',
      cartes: [
        { type:'def', label:'DEF', titre:'Système séquentiel',
          contenu:`Un système <strong>séquentiel</strong> possède une <strong>mémoire</strong> : ses sorties dépendent des entrées actuelles ET de l'<strong>état interne</strong> (résultat de l'historique). On distingue :<br><ul><li><strong>Asynchrone</strong> : les changements d'état suivent immédiatement les entrées ;</li><li><strong>Synchrone</strong> : les changements ne se produisent qu'aux <strong>fronts d'une horloge</strong> $H$.</li></ul>L'élément mémoire de base est la <strong>bascule</strong> (flip-flop).` },
        { type:'def', label:'DEF', titre:'Bascules RS, D, JK',
          contenu:`Principales <strong>bascules</strong> (cellules mémoire à $1$ bit) :<br><ul><li><strong>RS</strong> : Set ($S$) met à $1$, Reset ($R$) met à $0$ ; combinaison $R=S=1$ <strong>interdite</strong>.</li><li><strong>D</strong> (Data) : recopie l'entrée $D$ sur la sortie au front d'horloge ($Q^+ = D$) : mémorisation simple.</li><li><strong>JK</strong> : comme RS mais $J=K=1$ provoque une <strong>bascule</strong> (toggle, $Q^+=\\bar Q$) au lieu d'un état interdit.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Synchronisation par horloge',
          contenu:`Une bascule <strong>synchrone</strong> ne change d'état que sur un <strong>front</strong> (montant ↑ ou descendant ↓) du signal d'horloge $H$. Entre deux fronts, elle <strong>mémorise</strong> son état quels que soient les changements d'entrée.<br>Cette synchronisation évite les <strong>aléas</strong> (commutations parasites) et permet de cadencer un système complexe. L'assemblage de bascules forme registres, <strong>compteurs</strong>, et machines à états.` },
        { type:'ex', label:'EX', titre:'Compteur binaire',
          contenu:`Un <strong>compteur binaire</strong> modulo $2^n$ s'obtient par $n$ bascules. Avec des bascules JK en mode toggle ($J=K=1$), la sortie de chaque bascule sert d'horloge à la suivante (compteur asynchrone) : chaque étage divise la fréquence par $2$.<br>Pour $3$ bascules : la sortie compte $0,1,2,\\dots,7$ puis revient à $0$. La fréquence de sortie du dernier étage est $f_H/2^3 = f_H/8$ : un compteur est aussi un <strong>diviseur de fréquence</strong>.` },
      ]
    },

    {
      titre: 'GRAFCET',
      cartes: [
        { type:'def', label:'DEF', titre:'GRAFCET — éléments de base',
          contenu:`Le <strong>GRAFCET</strong> (GRAphe Fonctionnel de Commande Étape-Transition) modélise un système à <strong>événements discrets</strong>. Éléments :<br><ul><li><strong>Étapes</strong> (carrés) : situations stables ; une étape est <strong>active</strong> ou inactive. Étape initiale : double carré.</li><li><strong>Transitions</strong> (barres) : passage entre étapes, conditionné par une <strong>réceptivité</strong> (condition logique).</li><li><strong>Actions</strong> : associées aux étapes actives.</li><li><strong>Liaisons orientées</strong> reliant étapes et transitions.</li></ul>` },
        { type:'th', label:'THM', titre:'Règles d\'évolution du GRAFCET',
          contenu:`Le franchissement obéit à des règles strictes :<br><ul><li>Une transition est <strong>validée</strong> si <strong>toutes</strong> les étapes immédiatement en amont sont actives.</li><li>Elle est <strong>franchie</strong> ssi elle est validée ET sa réceptivité est <strong>vraie</strong>.</li><li>Le franchissement <strong>désactive</strong> les étapes amont ET <strong>active</strong> les étapes aval, <strong>simultanément</strong>.</li><li>Plusieurs transitions franchissables le sont en même temps.</li></ul>` },
        { type:'def', label:'DEF', titre:'Divergences et convergences',
          contenu:`Structures de branchement :<br><ul><li><strong>Divergence en OU</strong> (sélection de séquence) : plusieurs transitions exclusives après une étape ; une seule branche est choisie selon les réceptivités.</li><li><strong>Divergence en ET</strong> (parallélisme) : une transition active <strong>plusieurs</strong> branches simultanées (double trait horizontal). La <strong>convergence en ET</strong> resynchronise les branches.</li></ul>Les actions peuvent être <strong>continues</strong>, <strong>mémorisées</strong>, <strong>conditionnelles</strong> ou <strong>temporisées</strong>.` },
        { type:'ex', label:'EX', titre:'Cycle d\'un vérin',
          contenu:`Sortie puis rentrée d'un vérin commandée par un bouton $dcy$ et des capteurs de fin de course $S_0$ (rentré), $S_1$ (sorti) :<br><ul><li>Étape 0 (initiale) : attente, réceptivité $dcy$.</li><li>Étape 1 : action « sortir tige », réceptivité $S_1$.</li><li>Étape 2 : action « rentrer tige », réceptivité $S_0$ → retour à l'étape 0.</li></ul>Le cycle est <strong>séquentiel</strong> : chaque transition attend le capteur correspondant, garantissant l'ordre des opérations.` },
      ]
    },

    {
      titre: 'Chaîne d\'acquisition numérique',
      cartes: [
        { type:'def', label:'DEF', titre:'Chaîne d\'acquisition',
          contenu:`La <strong>chaîne d'acquisition</strong> convertit une grandeur physique en information numérique exploitable :<br>$$\\text{Capteur} \\to \\text{Conditionneur} \\to \\text{Filtre} \\to \\text{Échantillonneur-bloqueur} \\to \\text{CAN} \\to \\text{Traitement}$$<br>Le <strong>capteur</strong> transduit (température, position...) en signal électrique ; le <strong>conditionneur</strong> amplifie/met en forme ; le <strong>CAN</strong> (convertisseur analogique-numérique) numérise. Maillon entre le monde physique (analogique) et le calculateur (numérique).` },
        { type:'def', label:'DEF', titre:'Échantillonnage et quantification',
          contenu:`Numériser comporte deux opérations :<br><ul><li><strong>Échantillonnage</strong> : prélèvement de la valeur du signal à intervalles réguliers $T_e$ (période d'échantillonnage, fréquence $f_e=1/T_e$) — discrétisation du <strong>temps</strong>.</li><li><strong>Quantification</strong> : arrondi de l'amplitude sur $2^n$ niveaux ($n$ = nombre de bits) — discrétisation de l'<strong>amplitude</strong>.</li></ul>La quantification introduit une erreur (<strong>bruit de quantification</strong>) bornée par $\\pm q/2$ avec $q$ le quantum.` },
        { type:'th', label:'THM', titre:'Théorème de Shannon-Nyquist',
          contenu:`Le <strong>théorème de l'échantillonnage</strong> (Shannon-Nyquist) : pour reconstituer fidèlement un signal de fréquence maximale $f_{\\max}$, la fréquence d'échantillonnage doit vérifier :<br>$$f_e > 2\\,f_{\\max}$$<br>Sinon apparaît le <strong>repliement de spectre</strong> (aliasing) : des fréquences hautes se replient en basses fréquences parasites, irrécupérables. D'où un <strong>filtre anti-repliement</strong> (passe-bas) <strong>avant</strong> l'échantillonneur.` },
        { type:'form', label:'FORM', titre:'Résolution et quantum d\'un CAN',
          contenu:`Un CAN à $n$ bits sur une pleine échelle (étendue de mesure) $E$ découpe en $2^n$ niveaux. Le <strong>quantum</strong> (résolution, plus petite variation détectable) est :<br>$$q = \\frac{E}{2^n}$$<br>Ex. : $n=12$ bits, $E=10$ V → $q=10/4096 \\approx 2{,}4$ mV. Plus $n$ est grand, plus la résolution est fine et le bruit de quantification faible, au prix d'un convertisseur plus lent/coûteux.` },
      ]
    },

  ]
},

];
