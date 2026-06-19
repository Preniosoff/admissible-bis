// Seed SI + Info — appelé au démarrage du serveur si les données n'existent pas encore
// Guards: vérifie si les sections SI/info existent déjà avant d'insérer.

// ── Données SI ───────────────────────────────────────────────────────────────

const SI_FILIERES = ['mp','mpsi','pc','pcsi','psi','ptsi','pt','tsi'];
const INFO_FILIERES = ['mp','mpi','mpsi'];

const SI_SECTIONS = {
'si-syscont': [
  { titre: 'Définitions fondamentales', cartes: [
    { type:'def', label:'DEF', titre:'Système linéaire continu invariant (SLCI)',
      contenu:`Un système est <strong>linéaire</strong> si sa relation entrée-sortie vérifie le principe de superposition :<br>$e_1\\to s_1$ et $e_2\\to s_2$ implique $\\alpha e_1+\\beta e_2\\to\\alpha s_1+\\beta s_2$.<br>Il est <strong>continu</strong> si ses variables sont des fonctions de $t\\in\\mathbb{R}$.<br>Il est <strong>invariant</strong> si ses paramètres sont constants dans le temps.` },
    { type:'def', label:'DEF', titre:'Équation différentielle d\'un SLCI d\'ordre $n$',
      contenu:`$$a_n s^{(n)}(t)+\\dots+a_1\\dot{s}(t)+a_0 s(t)=b_m e^{(m)}(t)+\\dots+b_0 e(t)$$avec $a_i,b_j\\in\\mathbb{R}$ constants et $m\\le n$ (causalité).` },
    { type:'def', label:'DEF', titre:'Gain statique, ordre, classe',
      contenu:`<strong>Gain statique</strong> : $K=H(0)=\\lim_{t\\to\\infty}s(t)$ pour $e(t)$ échelon unité (CI nulles).<br><strong>Ordre</strong> : degré du polynôme dénominateur de $H(p)$.<br><strong>Classe</strong> (type) : nombre de pôles nuls de $H(p)$. Un système de classe $\\alpha$ annule l'erreur pour toute entrée polynomiale de degré $<\\alpha$.` },
    { type:'def', label:'DEF', titre:'Stabilité — conditions',
      contenu:`Un SLCI est <strong>stable</strong> si et seulement si tous ses pôles ont une <strong>partie réelle strictement négative</strong>.<br>Condition nécessaire : tous les coefficients du dénominateur sont de même signe.<br>Critère de Routh : tableau à partir des coefficients pour tester la stabilité sans calculer les racines.` },
  ]},
  { titre: 'Signaux canoniques d\'entrée', cartes: [
    { type:'form', label:'FORM', titre:'Transformées de Laplace des entrées de test',
      contenu:`<table><tr><th>Signal</th><th>$e(t)$</th><th>$E(p)$</th></tr><tr><td>Impulsion de Dirac</td><td>$\\delta(t)$</td><td>$1$</td></tr><tr><td>Échelon unité</td><td>$\\gamma(t)$</td><td>$\\dfrac{1}{p}$</td></tr><tr><td>Rampe unitaire</td><td>$t\\,\\gamma(t)$</td><td>$\\dfrac{1}{p^2}$</td></tr><tr><td>Sinusoïde</td><td>$A\\sin(\\omega t)$</td><td>$\\dfrac{A\\omega}{p^2+\\omega^2}$</td></tr></table>` },
    { type:'prop', label:'PROP', titre:'Réponse impulsionnelle et indicielle',
      contenu:`La <strong>réponse impulsionnelle</strong> $h(t)=\\mathcal{L}^{-1}\\{H(p)\\}$ caractérise complètement le système.<br>La <strong>réponse indicielle</strong> $s_\\gamma(t)$ vérifie $h(t)=\\dfrac{\\mathrm{d}s_\\gamma}{\\mathrm{d}t}$.<br>Convolution : $s(t)=(h*e)(t)=\\int_0^t h(\\tau)\\,e(t-\\tau)\\,\\mathrm{d}\\tau$.` },
  ]},
],
'si-laplace': [
  { titre: 'Définition et propriétés', cartes: [
    { type:'def', label:'DEF', titre:'Transformée de Laplace',
      contenu:`Pour $f$ causale ($f(t)=0$ pour $t<0$) :$$F(p)=\\mathcal{L}\\{f(t)\\}=\\int_{0}^{+\\infty}f(t)\\,\\mathrm{e}^{-pt}\\,\\mathrm{d}t$$Transforme une équation différentielle en une équation algébrique en $p$.` },
    { type:'prop', label:'PROP', titre:'Propriétés de dérivation et d\'intégration',
      contenu:`<strong>Dérivation</strong> (CI nulles) : $\\mathcal{L}\\{f^{(n)}(t)\\}=p^n F(p)$<br><strong>Avec conditions initiales</strong> : $\\mathcal{L}\\{\\dot{f}\\}=pF(p)-f(0^+)$<br><strong>Intégration</strong> : $\\mathcal{L}\\!\\left\\{\\int_0^t f(\\tau)\\,\\mathrm{d}\\tau\\right\\}=\\dfrac{F(p)}{p}$<br><strong>Retard</strong> pur $T_r$ : $\\mathcal{L}\\{f(t-T_r)\\gamma(t-T_r)\\}=\\mathrm{e}^{-T_r p}F(p)$` },
    { type:'th', label:'THM', titre:'Théorèmes des valeurs initiale et finale',
      contenu:`<strong>Valeur initiale :</strong> $f(0^+)=\\lim_{p\\to+\\infty}p\\,F(p)$<br><strong>Valeur finale</strong> (si $f$ admet une limite finie) : $\\lim_{t\\to+\\infty}f(t)=\\lim_{p\\to 0}p\\,F(p)$<br>⚠ La valeur finale n'existe que si tous les pôles de $pF(p)$ sont à partie réelle strictement négative.` },
  ]},
  { titre: 'Table des transformées usuelles', cartes: [
    { type:'form', label:'FORM', titre:'Table de Laplace',
      contenu:`<table><tr><th>$f(t)$</th><th>$F(p)$</th></tr><tr><td>$\\delta(t)$</td><td>$1$</td></tr><tr><td>$\\gamma(t)$</td><td>$\\dfrac{1}{p}$</td></tr><tr><td>$t^n\\gamma(t)$</td><td>$\\dfrac{n!}{p^{n+1}}$</td></tr><tr><td>$\\mathrm{e}^{-at}\\gamma(t)$</td><td>$\\dfrac{1}{p+a}$</td></tr><tr><td>$\\sin(\\omega t)\\gamma(t)$</td><td>$\\dfrac{\\omega}{p^2+\\omega^2}$</td></tr><tr><td>$\\cos(\\omega t)\\gamma(t)$</td><td>$\\dfrac{p}{p^2+\\omega^2}$</td></tr><tr><td>$t\\,\\mathrm{e}^{-at}\\gamma(t)$</td><td>$\\dfrac{1}{(p+a)^2}$</td></tr></table>` },
    { type:'meth', label:'METH', titre:'Décomposition en éléments simples (DES)',
      contenu:`Pour inverser $F(p)=\\frac{N(p)}{D(p)}$ :<br><strong>1.</strong> Factoriser $D(p)$.<br><strong>2.</strong> Écrire : $F(p)=\\sum_k\\frac{A_k}{p-p_k}+\\dots$<br><strong>3.</strong> Calculer les résidus : $A_k=\\lim_{p\\to p_k}(p-p_k)F(p)$<br><strong>4.</strong> Lire la table : $\\frac{A_k}{p-p_k}\\longleftrightarrow A_k\\,\\mathrm{e}^{p_k t}\\gamma(t)$` },
  ]},
],
'si-ftbf': [
  { titre: 'Algèbre des schéma-blocs', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert',
      contenu:`Rapport (en Laplace, CI nulles) de la sortie sur l'entrée :$$H(p)=\\frac{S(p)}{E(p)}$$Représente complètement le comportement entrée-sortie d'un SLCI.` },
    { type:'prop', label:'PROP', titre:'Associations en série et en parallèle',
      contenu:`<strong>Série</strong> : $H_{\\text{eq}}(p)=H_1(p)\\cdot H_2(p)$<br><strong>Parallèle</strong> (même sens) : $H_{\\text{eq}}(p)=H_1(p)+H_2(p)$` },
    { type:'th', label:'THM', titre:'Formule de Black — boucle fermée',
      contenu:`Pour un système en boucle fermée (retour négatif), chaîne directe $H(p)$, chaîne de retour $B(p)$ :$$\\text{FTBF}(p)=\\frac{H(p)}{1+H(p)\\,B(p)}$$<strong>FTBO</strong> : $\\text{FTBO}(p)=H(p)\\cdot B(p)$<br><strong>Rétro-action unitaire</strong> ($B=1$) : $\\text{FTBF}=\\dfrac{H}{1+H}$` },
    { type:'meth', label:'METH', titre:'Réduction d\'un schéma-blocs',
      contenu:`<strong>1.</strong> Identifier les blocs en série et les simplifier d'abord.<br><strong>2.</strong> Déplacer les nœuds de sommation/prélèvement selon les règles d'équivalence.<br><strong>3.</strong> Appliquer la formule de Black pour chaque boucle (de la plus interne vers la plus externe).` },
  ]},
],
'si-ordre12': [
  { titre: 'Système du premier ordre', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert du 1er ordre',
      contenu:`$$H(p)=\\frac{K}{1+\\tau p}$$\n$K$ : gain statique &nbsp;·&nbsp; $\\tau>0$ : constante de temps (s)<br>Unique pôle réel : $p=-\\frac{1}{\\tau}$ (stable si $\\tau>0$).` },
    { type:'prop', label:'PROP', titre:'Réponse indicielle du 1er ordre',
      contenu:`Réponse à un échelon d'amplitude $E_0$ :$$s(t)=K\\,E_0\\left(1-\\mathrm{e}^{-t/\\tau}\\right)\\quad(t\\ge0)$$— À $t=\\tau$ : $s=63\\%$ de la valeur finale<br>— À $t=3\\tau$ : $s\\approx95\\%$ &nbsp;·&nbsp; à $t=5\\tau$ : $s\\approx99\\%$<br>— Temps de réponse à 5 % : $t_{r5\\%}=3\\tau$` },
  ]},
  { titre: 'Système du second ordre', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert du 2e ordre',
      contenu:`$$H(p)=\\frac{K\\,\\omega_0^2}{p^2+2\\xi\\omega_0\\,p+\\omega_0^2}$$\n$K$ : gain statique &nbsp;·&nbsp; $\\omega_0$ : pulsation propre (rad/s) &nbsp;·&nbsp; $\\xi$ : coefficient d'amortissement<br><strong>Pôles :</strong> $p_{1,2}=-\\xi\\omega_0\\pm\\omega_0\\sqrt{\\xi^2-1}$` },
    { type:'prop', label:'PROP', titre:'Régimes selon $\\xi$',
      contenu:`$\\xi>1$ : <strong>apériodique</strong> — 2 pôles réels négatifs, pas d'oscillation<br>$\\xi=1$ : <strong>critique</strong> — pôle double $-\\omega_0$, retour le plus rapide sans dépassement<br>$0<\\xi<1$ : <strong>pseudo-périodique</strong> — pôles complexes conjugués<br><strong>Pseudo-période</strong> : $T_p=\\dfrac{2\\pi}{\\omega_0\\sqrt{1-\\xi^2}}$` },
    { type:'form', label:'FORM', titre:'Dépassement et temps de réponse',
      contenu:`<strong>Premier dépassement relatif :</strong>$$D_1\\%=100\\,\\exp\\!\\left(-\\frac{\\pi\\xi}{\\sqrt{1-\\xi^2}}\\right)$$<strong>Pulsation de résonance</strong> ($\\xi<1/\\sqrt{2}$) : $\\omega_r=\\omega_0\\sqrt{1-2\\xi^2}$<br><strong>Temps de réponse à 5 %</strong> : $t_{r5\\%}\\approx\\dfrac{3}{\\xi\\omega_0}$` },
  ]},
],
'si-bode': [
  { titre: 'Définitions', cartes: [
    { type:'def', label:'DEF', titre:'Diagramme de Bode',
      contenu:`Tracé de la réponse fréquentielle $H(j\\omega)$ en fonction de $\\omega$ en échelle logarithmique :<br><strong>Gain</strong> : $G_{\\text{dB}}(\\omega)=20\\log_{10}|H(j\\omega)|$ (dB)<br><strong>Phase</strong> : $\\varphi(\\omega)=\\arg(H(j\\omega))$ (°)<br>Pulsation de coupure à $-3$ dB : $|H(j\\omega_c)|=\\dfrac{|H(0)|}{\\sqrt{2}}$` },
  ]},
  { titre: 'Tracé asymptotique — cas usuels', cartes: [
    { type:'prop', label:'PROP', titre:'Gain pur, intégrateur, dérivateur',
      contenu:`<strong>Gain pur $K$</strong> : droite horizontale à $20\\log K$ dB, phase $0°$<br><strong>Intégrateur $\\frac{1}{jp\\tau}$</strong> : pente $-20$ dB/déc, phase $-90°$<br><strong>Dérivateur $jp\\tau$</strong> : pente $+20$ dB/déc, phase $+90°$<br><strong>Retard pur $\\mathrm{e}^{-T_r p}$</strong> : gain = 0 dB, phase $=-T_r\\omega$ (rad)` },
    { type:'prop', label:'PROP', titre:'1er ordre $\\frac{1}{1+j\\omega\\tau}$',
      contenu:`<strong>BF</strong> ($\\omega\\ll1/\\tau$) : $G_{\\text{dB}}=0$ dB, $\\varphi=0°$<br><strong>HF</strong> ($\\omega\\gg1/\\tau$) : pente $-20$ dB/déc, $\\varphi\\to-90°$<br><strong>À la cassure</strong> $\\omega=1/\\tau$ : erreur réelle $-3$ dB, phase exacte $-45°$` },
    { type:'prop', label:'PROP', titre:'2e ordre $\\frac{1}{1+2\\xi u+u^2}$ avec $u=j\\omega/\\omega_0$',
      contenu:`<strong>Asymptotes</strong> : 0 dB/déc pour $\\omega\\ll\\omega_0$, puis $-40$ dB/déc pour $\\omega\\gg\\omega_0$.<br>Phase de $0°$ à $-180°$ (passe $-90°$ à $\\omega_0$).<br><strong>Résonance</strong> ($\\xi<0{,}707$) : pic de gain à $\\omega_r=\\omega_0\\sqrt{1-2\\xi^2}$.` },
    { type:'meth', label:'METH', titre:'Méthode de tracé asymptotique',
      contenu:`<strong>1.</strong> Mettre $H(p)$ en forme canonique.<br><strong>2.</strong> Tracer la droite de départ à $G=20\\log K$ dB.<br><strong>3.</strong> Pour chaque pôle simple à $\\omega_k=1/\\tau_k$ : pente $-20$ dB/déc à partir de $\\omega_k$.<br><strong>4.</strong> Pour chaque zéro simple à $\\omega_k$ : pente $+20$ dB/déc à partir de $\\omega_k$.<br><strong>5.</strong> Sommer les phases individuelles.` },
  ]},
],
'si-asservi': [
  { titre: 'Stabilité', cartes: [
    { type:'def', label:'DEF', titre:'Marges de stabilité',
      contenu:`<strong>Marge de phase</strong> $M\\varphi$ : phase de la FTBO à la pulsation de gain unitaire $\\omega_u$ :$$M\\varphi=180°+\\arg\\!\\left[\\text{FTBO}(j\\omega_u)\\right]$$Valeur recommandée : $M\\varphi\\ge45°$. Lien avec le 2e ordre : $M\\varphi\\approx100\\xi$.<br><strong>Marge de gain</strong> $MG=-20\\log|\\text{FTBO}(j\\omega_\\pi)|$ à $\\omega_\\pi$ (déphasage $-180°$). Recommandée : $MG\\ge6$ dB.` },
    { type:'th', label:'THM', titre:'Critère de Nyquist simplifié',
      contenu:`Pour un système à FTBO stable : le système bouclé est stable si et seulement si le lieu de Nyquist de $\\text{FTBO}(j\\omega)$ ne tourne pas autour du point $-1$ dans le sens direct.` },
  ]},
  { titre: 'Précision et rapidité', cartes: [
    { type:'def', label:'DEF', titre:'Écarts statiques',
      contenu:`Pour un retour unitaire et une FTBO de classe $\\alpha$ et de gain $K_{BO}$ :<br><table><tr><th>Entrée</th><th>$\\alpha=0$</th><th>$\\alpha=1$</th><th>$\\alpha\\ge2$</th></tr><tr><td>Échelon</td><td>$\\frac{1}{1+K_{BO}}$</td><td>$0$</td><td>$0$</td></tr><tr><td>Rampe</td><td>$+\\infty$</td><td>$\\frac{1}{K_{BO}}$</td><td>$0$</td></tr></table>` },
    { type:'def', label:'DEF', titre:'Rapidité — bande passante',
      contenu:`<strong>Bande passante à $-3$ dB</strong> $\\omega_{BP}$ : plage où le gain FTBF est supérieur à $\\frac{|H(0)|}{\\sqrt{2}}$.<br>Plus $\\omega_{BP}$ est grand, plus le système est rapide.<br>Lien : $\\omega_{BP}\\approx\\omega_u$ (pulsation de gain unité de la FTBO).` },
  ]},
],
'si-correcteurs': [
  { titre: 'Correcteurs PID', cartes: [
    { type:'def', label:'DEF', titre:'Correcteur P',
      contenu:`$$C(p)=K_p$$Améliore la rapidité et réduit l'erreur statique, mais peut dégrader la stabilité (diminue $M\\varphi$).` },
    { type:'def', label:'DEF', titre:'Correcteur PI',
      contenu:`$$C(p)=K_p\\left(1+\\frac{1}{T_i p}\\right)=K_p\\,\\frac{T_i p+1}{T_i p}$$<strong>Effet</strong> : ajoute un intégrateur (classe $+1$) → annule l'erreur statique pour une entrée échelon.` },
    { type:'def', label:'DEF', titre:'Correcteur PD et PID',
      contenu:`$$C_{PD}(p)=K_p(1+T_d p)\\qquad C_{PID}(p)=K_p\\left(1+\\frac{1}{T_i p}+T_d p\\right)$$<strong>PD</strong> : ajoute de la phase positive, améliore $M\\varphi$ et la rapidité. Sensible au bruit.<br><strong>PID</strong> : combine précision (I) et rapidité/stabilité (D).` },
  ]},
  { titre: 'Correcteurs par avance/retard de phase', cartes: [
    { type:'def', label:'DEF', titre:'Correcteur à avance de phase',
      contenu:`$$C(p)=K\\,\\frac{1+a\\tau p}{1+\\tau p}\\quad(a>1)$$Phase maximale à $\\omega_m=\\frac{1}{\\tau\\sqrt{a}}$ : $\\varphi_{\\max}=\\arcsin\\!\\left(\\frac{a-1}{a+1}\\right)$<br><strong>Usage</strong> : améliorer $M\\varphi$ sans trop modifier la précision.` },
    { type:'def', label:'DEF', titre:'Correcteur à retard de phase',
      contenu:`$$C(p)=K\\,\\frac{1+b\\tau p}{1+\\tau p}\\quad(b<1)$$<strong>Effet</strong> : atténue les hautes fréquences, améliore la précision (gain BF plus élevé) sans trop dégrader $M\\varphi$.` },
  ]},
],
'si-cinematique': [
  { titre: 'Torseur cinématique', cartes: [
    { type:'def', label:'DEF', titre:'Torseur cinématique',
      contenu:`$$\\left\\{\\mathcal{V}(\\mathcal{S}_2/\\mathcal{S}_1)\\right\\}=\\begin{Bmatrix}\\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_1)\\\\\\overrightarrow{V}(A\\in\\mathcal{S}_2/\\mathcal{S}_1)\\end{Bmatrix}_A$$\n$\\vec{\\Omega}$ : vecteur rotation instantanée (indépendant du point).` },
    { type:'th', label:'THM', titre:'Formule de Babal',
      contenu:`Pour deux points $A$ et $B$ d'un même solide $\\mathcal{S}_2$ :$$\\overrightarrow{V}(B\\in\\mathcal{S}_2/\\mathcal{S}_1)=\\overrightarrow{V}(A\\in\\mathcal{S}_2/\\mathcal{S}_1)+\\vec{\\Omega}\\wedge\\overrightarrow{AB}$$<strong>Équiprojectivité</strong> : $\\overrightarrow{V}(A)\\cdot\\overrightarrow{AB}=\\overrightarrow{V}(B)\\cdot\\overrightarrow{AB}$.` },
  ]},
  { titre: 'Composition et contact', cartes: [
    { type:'th', label:'THM', titre:'Composition des mouvements',
      contenu:`$$\\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_0)=\\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_1)+\\vec{\\Omega}(\\mathcal{S}_1/\\mathcal{S}_0)$$$$\\overrightarrow{V}(M\\in\\mathcal{S}_2/\\mathcal{S}_0)=\\overrightarrow{V}(M\\in\\mathcal{S}_2/\\mathcal{S}_1)+\\overrightarrow{V}(M\\in\\mathcal{S}_1/\\mathcal{S}_0)$$\n$\\overrightarrow{V}_{abs}=\\overrightarrow{V}_{rel}+\\overrightarrow{V}_{entr}$` },
    { type:'def', label:'DEF', titre:'Contact ponctuel — RSG',
      contenu:`En un point de contact $I$ entre $\\mathcal{S}_1$ et $\\mathcal{S}_2$ :<br><strong>Vitesse de glissement</strong> : $\\overrightarrow{V}_g=\\overrightarrow{V}(I\\in\\mathcal{S}_2/\\mathcal{S}_1)$<br><strong>Roulement sans glissement (RSG)</strong> : $\\overrightarrow{V}_g=\\vec{0}$.` },
  ]},
],
'si-liaisons': [
  { titre: 'Liaisons normalisées', cartes: [
    { type:'prop', label:'PROP', titre:'Tableau des liaisons normalisées',
      contenu:`<table><tr><th>Liaison</th><th>DDL</th><th>Mouvements</th></tr><tr><td>Encastrement</td><td>0</td><td>—</td></tr><tr><td>Pivot d'axe $\\Delta$</td><td>1</td><td>$R_\\Delta$</td></tr><tr><td>Glissière d'axe $\\Delta$</td><td>1</td><td>$T_\\Delta$</td></tr><tr><td>Pivot-glissant</td><td>2</td><td>$R_\\Delta+T_\\Delta$</td></tr><tr><td>Rotule</td><td>3</td><td>3 rotations</td></tr><tr><td>Appui-plan</td><td>3</td><td>2 $T$ dans le plan + $R$ normale</td></tr><tr><td>Ponctuelle</td><td>5</td><td>2 $T$ + 3 $R$</td></tr></table>` },
  ]},
  { titre: 'Torseur transmissible', cartes: [
    { type:'def', label:'DEF', titre:'Torseur des Actions Mécaniques Transmissibles (TAMT)',
      contenu:`$$\\left\\{\\mathcal{T}(1\\to2)\\right\\}_A=\\begin{Bmatrix}\\vec{R}\\\\\\vec{M}(A)\\end{Bmatrix}_A$$Règle : nb de composantes TAMT $=6-\\text{DDL}$.<br><strong>Transport au point $B$</strong> : $\\vec{M}(B)=\\vec{M}(A)+\\overrightarrow{BA}\\wedge\\vec{R}$` },
    { type:'prop', label:'PROP', titre:'Associations de liaisons',
      contenu:`<strong>En série</strong> : $\\left\\{\\mathcal{V}_{\\text{éq}}\\right\\}=\\left\\{\\mathcal{V}(\\mathcal{S}_1/\\mathcal{S}_0)\\right\\}+\\left\\{\\mathcal{V}(\\mathcal{S}_2/\\mathcal{S}_1)\\right\\}$<br><strong>En parallèle</strong> : $\\left\\{\\mathcal{T}_{\\text{éq}}\\right\\}=\\left\\{\\mathcal{T}_1\\right\\}+\\left\\{\\mathcal{T}_2\\right\\}$` },
  ]},
],
'si-statique': [
  { titre: 'Torseurs et équilibre', cartes: [
    { type:'def', label:'DEF', titre:'Torseur d\'une action mécanique',
      contenu:`$$\\left\\{\\mathcal{A}\\right\\}_A=\\begin{Bmatrix}\\vec{R}\\\\\\vec{M}(A)\\end{Bmatrix}_A$$\n$\\vec{R}$ : résultante (N) &nbsp;·&nbsp; $\\vec{M}(A)$ : moment résultant en $A$ (N·m)<br><strong>Transport au point $B$</strong> : $\\vec{M}(B)=\\vec{M}(A)+\\overrightarrow{BA}\\wedge\\vec{R}$` },
    { type:'th', label:'THM', titre:'Principe Fondamental de la Statique (PFS)',
      contenu:`Pour un solide $S$ isolé en équilibre dans un référentiel galiléen :$$\\sum_i\\vec{R}_i=\\vec{0}\\quad\\text{et}\\quad\\sum_i\\vec{M}_i(A)=\\vec{0}\\quad\\text{pour tout }A$$Fournit au maximum 6 équations scalaires.` },
    { type:'def', label:'DEF', titre:'Frottement de Coulomb',
      contenu:`Au contact : $\\vec{R}=N\\,\\vec{n}+\\vec{T}$<br><strong>Glissement</strong> : $T=f_d N$ (opposée au glissement).<br><strong>Équilibre</strong> : $T\\le f_s N$ (cône de frottement de demi-angle $\\rho=\\arctan f_s$).` },
    { type:'meth', label:'METH', titre:'Méthode d\'application du PFS',
      contenu:`<strong>1.</strong> Isoler le solide ou le système.<br><strong>2.</strong> Inventaire de toutes les actions extérieures.<br><strong>3.</strong> Modéliser chaque liaison par son TAMT.<br><strong>4.</strong> Écrire : $\\Sigma\\vec{R}=\\vec{0}$ (3 éq.) et $\\Sigma\\vec{M}(A)=\\vec{0}$ (3 éq.).<br><strong>5.</strong> Résoudre. Si hyperstatique : nb d'inconnues > nb d'équations.` },
  ]},
],
'si-dynamique': [
  { titre: 'Énergie cinétique et torseur dynamique', cartes: [
    { type:'def', label:'DEF', titre:'Énergie cinétique d\'un solide',
      contenu:`$$E_c=\\frac{1}{2}m\\vec{V}^2(G)+\\frac{1}{2}\\vec{\\Omega}^T\\,[I_G]\\,\\vec{\\Omega}$$\n<strong>Rotation autour d'un axe fixe $\\Delta$</strong> : $E_c=\\frac{1}{2}I_\\Delta\\,\\dot{\\theta}^2$<br><strong>Théorème de Huygens</strong> : $I_\\Delta=I_{G,\\Delta'}+m\\,d^2$` },
    { type:'def', label:'DEF', titre:'Torseur dynamique',
      contenu:`$$\\left\\{\\mathcal{D}(\\mathcal{S}/R_0)\\right\\}_G=\\begin{Bmatrix}m\\,\\vec{a}(G)\\\\\\dot{\\vec{\\sigma}}(G)\\end{Bmatrix}_G$$\n$\\vec{\\sigma}(G)=[I_G]\\cdot\\vec{\\Omega}$ : moment cinétique en $G$.<br>Rotation autour d'axe fixe : $\\delta_\\Delta=I_\\Delta\\,\\ddot{\\theta}$.` },
  ]},
  { titre: 'Principes fondamentaux', cartes: [
    { type:'th', label:'THM', titre:'Principe Fondamental de la Dynamique (PFD)',
      contenu:`Dans un référentiel galiléen $R_0$, pour tout solide $\\mathcal{S}$ :$$\\sum_i\\left\\{\\mathcal{A}_i\\right\\}=\\left\\{\\mathcal{D}(\\mathcal{S}/R_0)\\right\\}$$Projection sur un axe fixe $\\Delta$ : $\\sum_i M_{\\Delta}(\\mathcal{A}_i)=I_\\Delta\\,\\ddot{\\theta}$` },
    { type:'th', label:'THM', titre:'Théorème de l\'énergie cinétique (TEC)',
      contenu:`$$\\frac{\\mathrm{d}E_c}{\\mathrm{d}t}=\\mathcal{P}_\\text{ext}+\\mathcal{P}_\\text{int}$$Pour un solide indéformable : $\\mathcal{P}_\\text{int}=0$.<br>Utile pour éliminer les efforts perpendiculaires au mouvement (pas de puissance).` },
    { type:'form', label:'FORM', titre:'Inertie équivalente',
      contenu:`$$I_\\text{éq}=I_\\text{moteur}+\\sum_i I_i\\left(\\frac{\\omega_i}{\\omega_m}\\right)^2+\\sum_j m_j\\left(\\frac{V_j}{\\omega_m}\\right)^2$$Équation de mouvement : $I_\\text{éq}\\,\\ddot{\\theta}_m=C_\\text{moteur}-C_\\text{résistant, éq}$` },
  ]},
],
'si-transmetteurs': [
  { titre: 'Engrenages et courroies', cartes: [
    { type:'prop', label:'PROP', titre:'Train d\'engrenages simple',
      contenu:`<strong>Rapport de transmission</strong> : $r=\\dfrac{\\omega_S}{\\omega_E}=\\prod_i\\left(-\\dfrac{Z_{m,i}}{Z_{d,i}}\\right)$<br><strong>Puissance</strong> (sans pertes) : $P=C_E\\,\\omega_E=C_S\\,\\omega_S$<br>Avec rendement $\\eta$ : $C_S=\\eta\\,|r|\\,C_E$` },
    { type:'prop', label:'PROP', titre:'Courroies et chaînes',
      contenu:`<strong>Rapport de transmission</strong> : $r=\\dfrac{\\omega_S}{\\omega_E}=\\dfrac{D_E}{D_S}=\\dfrac{R_E}{R_S}$<br><strong>Condition de non-glissement</strong> : $V_\\text{courroie}=R_E\\,\\omega_E=R_S\\,\\omega_S$` },
  ]},
  { titre: 'Vis-écrou et rendement', cartes: [
    { type:'prop', label:'PROP', titre:'Système vis-écrou',
      contenu:`<strong>Relation cinématique</strong> : $v=p_\\text{vis}\\cdot\\dot{n}=\\dfrac{p_\\text{vis}}{2\\pi}\\,\\omega$<br><strong>Bilan de puissance</strong> (rendement $\\eta$) :<br>— Mouvement direct : $F\\cdot v=\\eta\\,C\\,\\omega$<br>— Mouvement inverse possible si $\\eta>0{,}5$ (vis non auto-bloquante).` },
    { type:'def', label:'DEF', titre:'Rendement mécanique',
      contenu:`$$\\eta=\\frac{P_\\text{utile}}{P_\\text{entrée}}$$Pour des transmetteurs en série : $\\eta_\\text{global}=\\prod_i\\eta_i$.` },
  ]},
],
'si-sequentiel': [
  { titre: 'Diagramme d\'états et Grafcet', cartes: [
    { type:'def', label:'DEF', titre:'Diagramme d\'états SysML',
      contenu:`<strong>État</strong> : situation stable du système (action : $\\text{do}/\\text{action}$).<br><strong>Transition</strong> : passage déclenché par un événement.<br>Syntaxe : $\\text{Événement}\\,[\\text{Garde}]\\,/\\,\\text{Action}$<br><strong>État initial</strong> : flèche sans état source (pastille noire).` },
    { type:'def', label:'DEF', titre:'Grafcet (norme IEC 61131)',
      contenu:`<strong>Étape</strong> : carré numéroté (active ou inactive).<br><strong>Transition</strong> : ligne horizontale avec réceptivité.<br><strong>Franchissement</strong> : étape amont active ET réceptivité vraie.<br><strong>Structuration</strong> : divergences/convergences en ET ($\\Vert$) ou en OU.` },
  ]},
],
'si-num': [
  { titre: 'Résolution numérique d\'équations', cartes: [
    { type:'def', label:'DEF', titre:'Méthode d\'Euler explicite (EDO)',
      contenu:`Pour $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=f(t,y)$ avec $y(t_0)=y_0$ :$$y_{n+1}=y_n+h\\,f(t_n,y_n)$$Erreur locale $\\mathcal{O}(h^2)$, erreur globale $\\mathcal{O}(h)$. Stable si $h<\\dfrac{2}{|\\lambda|}$ pour $f=\\lambda y$.` },
    { type:'def', label:'DEF', titre:'Méthode de Newton — zéros',
      contenu:`Pour résoudre $f(x)=0$ :$$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$$Convergence quadratique si $f'(x^*)\\ne0$.` },
  ]},
  { titre: 'Intégration numérique et discrétisation', cartes: [
    { type:'prop', label:'PROP', titre:'Intégration numérique',
      contenu:`<strong>Rectangles</strong> : erreur $\\mathcal{O}(h)$.<br><strong>Trapèzes</strong> : $\\int_a^b f\\approx\\dfrac{h}{2}[f(a)+2\\sum_k f(x_k)+f(b)]$, erreur $\\mathcal{O}(h^2)$.<br><strong>Simpson</strong> : erreur $\\mathcal{O}(h^4)$ — utilise 3 points.` },
    { type:'def', label:'DEF', titre:'Discrétisation d\'un correcteur (transformée en $z$)',
      contenu:`Pour implémenter numériquement un correcteur continu $C(p)$ avec période $T_e$ :<br><strong>Euler explicite</strong> : $p\\approx\\dfrac{z-1}{T_e}$<br><strong>Tustin (bilinéaire)</strong> : $p\\approx\\dfrac{2}{T_e}\\dfrac{z-1}{z+1}$ — conserve la stabilité, recommandé.` },
  ]},
],
};

// ── Données Info ──────────────────────────────────────────────────────────────

const INFO_SECTIONS = {
'info-s1': [
  { titre: 'Notion d\'algorithme et de complexité', cartes: [
    { type:'def', label:'DEF', titre:'Algorithme',
      contenu:`Procédure finie, déterministe et non ambiguë qui résout un problème pour tout élément d'un ensemble d'entrées valides et se termine en un nombre fini d'étapes.` },
    { type:'def', label:'DEF', titre:'Complexité temporelle',
      contenu:`Nombre d'opérations élémentaires effectuées en fonction de la taille $n$ de l'entrée.<br><strong>Pire cas</strong> $T_\\text{worst}(n)$ — garantie sur le temps max ; <strong>cas moyen</strong> $T_\\text{avg}(n)$ — sous distribution aléatoire.` },
    { type:'def', label:'DEF', titre:'Notations de Landau $O$, $\\Omega$, $\\Theta$',
      contenu:`$f(n)=O(g(n))$ : $\\exists c>0,\\ n_0,\\ \\forall n\\ge n_0,\\ f(n)\\le c\\,g(n)$ (<em>au plus</em>)<br>$f(n)=\\Omega(g(n))$ : au moins.<br>$f(n)=\\Theta(g(n))$ : $f=O(g)$ et $f=\\Omega(g)$ (équivalent)<br><strong>Classes</strong> : $O(1)\\subset O(\\log n)\\subset O(n)\\subset O(n\\log n)\\subset O(n^2)\\subset O(2^n)$` },
  ]},
  { titre: 'Algorithmes de tri', cartes: [
    { type:'prop', label:'PROP', titre:'Tris élémentaires',
      contenu:`<table><tr><th>Tri</th><th>Pire cas</th><th>En place</th><th>Stable</th></tr><tr><td>Sélection</td><td>$\\Theta(n^2)$</td><td>Oui</td><td>Non</td></tr><tr><td>Insertion</td><td>$\\Theta(n^2)$</td><td>Oui</td><td>Oui</td></tr></table>` },
    { type:'prop', label:'PROP', titre:'Tri rapide (Quicksort)',
      contenu:`Pire cas : $O(n^2)$ (pivot extrême). Moyen : $O(n\\log n)$ — optimal en pratique. En place : oui. Stable : non.<br>Recurrence (moyen) : $T(n)=2T(n/2)+n\\Rightarrow T(n)=O(n\\log n)$.` },
    { type:'prop', label:'PROP', titre:'Tri fusion (Merge Sort)',
      contenu:`Toujours $\\Theta(n\\log n)$ en pire cas. Stable : oui. En place : non ($O(n)$ mémoire).<br>Recurrence : $T(n)=2T(n/2)+n\\Rightarrow T(n)=\\Theta(n\\log n)$.` },
    { type:'th', label:'THM', titre:'Borne inférieure des tris par comparaison',
      contenu:`Tout algorithme de tri par comparaisons nécessite au moins $\\Omega(n\\log n)$ comparaisons dans le pire cas.<br>Preuve par arbre de décision : $n!$ feuilles, hauteur $\\ge\\log_2(n!)=\\Theta(n\\log n)$ (Stirling).` },
  ]},
],
'info-methprog': [
  { titre: 'Récursivité', cartes: [
    { type:'def', label:'DEF', titre:'Fonction récursive',
      contenu:`Une fonction récursive doit avoir :<br>1. Un ou plusieurs <strong>cas de base</strong> (sans appel récursif).<br>2. Un ou plusieurs <strong>cas récursifs</strong> où le problème est ramené à une instance strictement plus petite.<br><strong>Pile d'appels</strong> : chaque appel alloue un cadre.` },
    { type:'meth', label:'METH', titre:'Prouver la terminaison par un variant',
      contenu:`Définir un <strong>variant</strong> : une expression entière $v$ telle que :<br>1. $v\\ge0$ toujours,<br>2. $v$ décroît strictement à chaque appel récursif (ou itération).<br><strong>Exemple</strong> : pour <code>pgcd(a,b)</code>, le variant $b$ décroît (car $a\\bmod b<b$).` },
  ]},
  { titre: 'Diviser pour régner', cartes: [
    { type:'def', label:'DEF', titre:'Paradigme diviser pour régner',
      contenu:`<strong>1. Diviser</strong> : décomposer en $a$ sous-problèmes de taille $n/b$.<br><strong>2. Régner</strong> : résoudre récursivement.<br><strong>3. Combiner</strong> : fusionner en $O(n^d)$.<br>Recurrence : $T(n)=aT(n/b)+O(n^d)$, résolue par le <strong>théorème maître</strong>.` },
    { type:'th', label:'THM', titre:'Théorème maître',
      contenu:`Pour $T(n)=aT(n/b)+O(n^d)$ avec $a\\ge1$, $b>1$, $d\\ge0$ :$$T(n)=\\begin{cases}O(n^d\\log n)&\\text{si }a=b^d\\\\O(n^{\\log_b a})&\\text{si }a>b^d\\\\O(n^d)&\\text{si }a<b^d\\end{cases}$$<strong>Exemple (tri-fusion)</strong> : $a=2$, $b=2$, $d=1$ → $a=b^d$ → $T(n)=O(n\\log n)$.` },
  ]},
  { titre: 'Programmation dynamique', cartes: [
    { type:'def', label:'DEF', titre:'Programmation dynamique',
      contenu:`Applicable quand :<br>1. <strong>Sous-structure optimale</strong> : solution optimale contient des solutions optimales aux sous-problèmes.<br>2. <strong>Sous-problèmes chevauchants</strong> : les mêmes sous-problèmes apparaissent plusieurs fois.<br>On mémoïse (top-down) ou on remplit un tableau (bottom-up).` },
    { type:'meth', label:'METH', titre:'Bottom-up (exemple Fibonacci)',
      contenu:`<pre><code>def fib(n):
    if n <= 1: return n
    dp = [0, 1]
    for i in range(2, n+1):
        dp.append(dp[-1] + dp[-2])
    return dp[n]   # O(n) temps</code></pre>` },
  ]},
],
'info-complexite': [
  { titre: 'Classes de complexité', cartes: [
    { type:'def', label:'DEF', titre:'Classes P et NP',
      contenu:`<strong>P</strong> : problèmes de décision solubles en temps polynomial (machine de Turing déterministe).<br><strong>NP</strong> : problèmes dont toute solution peut être vérifiée en temps polynomial.<br>$P\\subseteq NP$. La question $P=NP$ est le problème du millénaire non résolu.` },
    { type:'def', label:'DEF', titre:'NP-complétude et réduction polynomiale',
      contenu:`$Q$ est <strong>NP-complet</strong> si $Q\\in$ NP et tout problème de NP se réduit polynomialement à $Q$.<br><strong>Théorème de Cook-Levin</strong> : SAT est NP-complet (1971).` },
    { type:'prop', label:'PROP', titre:'Récurrences classiques',
      contenu:`<table><tr><th>Récurrence</th><th>Complexité</th></tr><tr><td>$T(n)=T(n-1)+O(1)$</td><td>$O(n)$</td></tr><tr><td>$T(n)=2T(n/2)+O(n)$</td><td>$O(n\\log n)$</td></tr><tr><td>$T(n)=T(n/2)+O(1)$</td><td>$O(\\log n)$</td></tr><tr><td>$T(n)=2T(n-1)+O(1)$</td><td>$O(2^n)$</td></tr></table>` },
  ]},
],
'info-nombres': [
  { titre: 'Entiers — bases et conversions', cartes: [
    { type:'prop', label:'PROP', titre:'Représentation en base $b$',
      contenu:`Tout entier $n\\ge0$ s'écrit de manière unique :$$n=\\sum_{k=0}^{p}d_k\\cdot b^k,\\quad0\\le d_k<b$$<strong>Algorithme décimal→base $b$</strong> : divisions successives par $b$.<br><strong>Exemple</strong> : $42=(101010)_2$` },
    { type:'def', label:'DEF', titre:'Complément à deux (entiers signés sur $n$ bits)',
      contenu:`L'entier négatif $-k$ est représenté par $2^n-k$ (inverser les bits et ajouter 1).<br><strong>Plage</strong> : $[-2^{n-1},\\ 2^{n-1}-1]$<br><strong>Avantage</strong> : l'addition est la même pour signés et non-signés.` },
    { type:'prop', label:'PROP', titre:'Opérations bit-à-bit',
      contenu:`<code>a & b</code> : ET (masque) &nbsp;·&nbsp; <code>a | b</code> : OU &nbsp;·&nbsp; <code>a ^ b</code> : XOR &nbsp;·&nbsp; <code>~a</code> : NON<br><code>a << k</code> : multiplication par $2^k$ &nbsp;·&nbsp; <code>a >> k</code> : division entière par $2^k$<br><strong>Test de parité</strong> : <code>n & 1</code> vaut 1 si $n$ impair.` },
  ]},
  { titre: 'Flottants — norme IEEE 754', cartes: [
    { type:'def', label:'DEF', titre:'Norme IEEE 754 — simple précision (32 bits)',
      contenu:`Format : $(-1)^s\\times1.m\\times2^{e-127}$<br>— 1 bit de signe, 8 bits d'exposant biaisé, 23 bits de mantisse.<br><strong>Epsilon machine</strong> $\\varepsilon_m=2^{-23}\\approx1.2\\times10^{-7}$ (simple) ou $2^{-52}$ (double).` },
    { type:'prop', label:'PROP', titre:'Erreurs d\'arrondi',
      contenu:`$0.1$ n'est pas représentable exactement en binaire.<br>Ne jamais comparer deux flottants avec <code>==</code> — utiliser $|a-b|<\\varepsilon$.<br><strong>Catastrophe par annulation</strong> : soustraire deux grands flottants proches → perte de précision.` },
  ]},
],
'info-graphes': [
  { titre: 'Définitions et représentations', cartes: [
    { type:'def', label:'DEF', titre:'Graphe orienté / non orienté',
      contenu:`$G=(V,E)$ : $V$ = sommets, $E\\subseteq V\\times V$ = arcs (orienté) ou arêtes (non orienté).<br><strong>Degré</strong> : nombre de voisins. En orienté : degré entrant et sortant.<br><strong>Chemin simple</strong> : suite de sommets adjacents sans répétition.<br><strong>DAG</strong> = Directed Acyclic Graph.` },
    { type:'prop', label:'PROP', titre:'Représentations d\'un graphe',
      contenu:`<strong>Matrice d'adjacence</strong> ($n\\times n$) : $A[i][j]=1$ si $(i,j)\\in E$. Test arête $O(1)$, espace $O(n^2)$.<br><strong>Liste d'adjacence</strong> : <code>adj[v]</code> = liste des voisins. Espace $O(n+m)$, parcours $O(n+m)$.<br>À utiliser pour graphes creux ($m\\ll n^2$).` },
  ]},
  { titre: 'Parcours BFS et DFS', cartes: [
    { type:'prop', label:'PROP', titre:'BFS — Breadth-First Search',
      contenu:`Explore par niveaux croissants de distance depuis la source $s$.<br><strong>Structure</strong> : file (FIFO). <strong>Complexité</strong> : $O(n+m)$.<br>Calcule les <strong>plus courtes distances</strong> (en nombre d'arêtes) dans un graphe non pondéré.` },
    { type:'prop', label:'PROP', titre:'DFS — Depth-First Search',
      contenu:`Explore en profondeur, revient sur ses pas quand blocage.<br><strong>Structure</strong> : pile ou récursion. <strong>Complexité</strong> : $O(n+m)$.<br>Détecte les <strong>cycles</strong> (arête arrière), permet le <strong>tri topologique</strong> (DAG), calcule les <strong>composantes fortement connexes</strong>.` },
  ]},
  { titre: 'Plus courts chemins', cartes: [
    { type:'prop', label:'PROP', titre:'Algorithme de Dijkstra',
      contenu:`<strong>Hypothèse</strong> : poids $\\ge0$.<br><strong>Principe</strong> : file de priorité sur la distance $d[v]$. Extrait le sommet de distance minimale et relâche ses voisins.<br><strong>Complexité</strong> avec tas binaire : $O((n+m)\\log n)$.<br><strong>Relâchement</strong> : si $d[u]+w(u,v)<d[v]$ alors $d[v]\\leftarrow d[u]+w(u,v)$.` },
    { type:'prop', label:'PROP', titre:'Algorithme de Bellman-Ford',
      contenu:`Autorise les poids négatifs, détecte les cycles négatifs.<br>$n-1$ passes de relâchement sur toutes les arêtes. <strong>Complexité</strong> : $O(n\\cdot m)$.` },
    { type:'prop', label:'PROP', titre:'Algorithme de Floyd-Warshall',
      contenu:`Calcule les plus courts chemins entre toutes les paires.<br>$$d^{(k)}[i][j]=\\min\\!\\left(d^{(k-1)}[i][j],\\ d^{(k-1)}[i][k]+d^{(k-1)}[k][j]\\right)$$\n<strong>Complexité</strong> : $\\Theta(n^3)$.` },
  ]},
],
'info-bdd': [
  { titre: 'Modèle relationnel', cartes: [
    { type:'def', label:'DEF', titre:'Modèle relationnel — vocabulaire',
      contenu:`<strong>Relation</strong> (table) : ensemble de $n$-uplets partageant le même schéma.<br><strong>Clé primaire</strong> : identifie de manière unique chaque $n$-uplet.<br><strong>Clé étrangère</strong> : référence la clé primaire d'une autre table (intégrité référentielle).` },
    { type:'def', label:'DEF', titre:'Formes normales',
      contenu:`<strong>1NF</strong> : chaque attribut est atomique.<br><strong>2NF</strong> : 1NF + dépendance totale à la clé primaire.<br><strong>3NF</strong> : 2NF + pas de dépendance transitive entre attributs non-clés.<br><strong>BCNF</strong> : tout déterminant est une super-clé.` },
  ]},
  { titre: 'Requêtes SQL', cartes: [
    { type:'form', label:'FORM', titre:'Structure d\'une requête SELECT',
      contenu:`<pre><code>SELECT   [DISTINCT] colonnes | *
FROM     table [JOIN ... ON ...]
WHERE    condition_lignes
GROUP BY colonne(s)
HAVING   condition_groupes
ORDER BY colonne [ASC|DESC]
LIMIT    n;</code></pre>Ordre d'exécution logique : FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.` },
    { type:'prop', label:'PROP', titre:'Jointures',
      contenu:`<strong>INNER JOIN</strong> : paires où la condition est vraie des deux côtés.<br><strong>LEFT JOIN</strong> : toutes les lignes gauche + NULL pour colonnes droite sans correspondance.<br><strong>CROSS JOIN</strong> : produit cartésien ($O(n\\times m)$ lignes).` },
    { type:'prop', label:'PROP', titre:'Fonctions d\'agrégation',
      contenu:`<code>COUNT(*)</code>, <code>SUM(col)</code>, <code>AVG(col)</code>, <code>MIN(col)</code>, <code>MAX(col)</code><br><strong>Règle</strong> : toute colonne dans SELECT non-agrégée doit être dans GROUP BY.<br><strong>Filtrer sur un agrégat</strong> : HAVING (pas WHERE, qui précède l'agrégation).` },
    { type:'meth', label:'METH', titre:'Sous-requêtes et opérateurs ensemblistes',
      contenu:`<strong>IN / NOT IN</strong> : <code>WHERE id IN (SELECT...)</code><br><strong>EXISTS</strong> : vrai si la sous-requête retourne au moins une ligne.<br><strong>UNION / INTERSECT / EXCEPT</strong> : opérateurs ensemblistes (colonnes compatibles).` },
  ]},
],
'info-dico': [
  { titre: 'Tables de hachage', cartes: [
    { type:'def', label:'DEF', titre:'Table de hachage',
      contenu:`Structure associant des <strong>clés</strong> à des <strong>valeurs</strong> via une <strong>fonction de hachage</strong> $h(k)\\in[0,m-1]$.<br><strong>Complexité amortie</strong> : $O(1)$ en insertion, recherche et suppression.<br><strong>Collision</strong> : gestion par chaînage séparé ou adressage ouvert.` },
    { type:'prop', label:'PROP', titre:'Facteur de charge',
      contenu:`<strong>Facteur de charge</strong> : $\\alpha=n/m$ ($n$ = nb éléments, $m$ = taille du tableau).<br>Avec chaînage, longueur moyenne d'une liste $=\\alpha$.<br>Pour maintenir $O(1)$ amorti : redimensionner quand $\\alpha>$ seuil.` },
  ]},
  { titre: 'Problèmes classiques de programmation dynamique', cartes: [
    { type:'meth', label:'METH', titre:'Plus longue sous-séquence commune (LCS)',
      contenu:`$$c[i][j]=\\begin{cases}0&\\text{si }i=0\\text{ ou }j=0\\\\c[i-1][j-1]+1&\\text{si }x_i=y_j\\\\\\max(c[i-1][j],c[i][j-1])&\\text{sinon}\\end{cases}$$\n<strong>Complexité</strong> : $\\Theta(mn)$ temps et espace.` },
    { type:'meth', label:'METH', titre:'Sac à dos 0/1',
      contenu:`$n$ objets, objet $i$ de poids $w_i$ et valeur $v_i$, capacité $W$ :$$dp[i][j]=\\begin{cases}dp[i-1][j]&\\text{si }w_i>j\\\\\\max(dp[i-1][j],dp[i-1][j-w_i]+v_i)&\\text{sinon}\\end{cases}$$\n<strong>Complexité</strong> : $O(nW)$ — pseudo-polynomiale.` },
    { type:'meth', label:'METH', titre:'Distance d\'édition (Levenshtein)',
      contenu:`$$d[i][j]=\\begin{cases}i&\\text{si }j=0\\\\j&\\text{si }i=0\\\\d[i-1][j-1]&\\text{si }s_1[i]=s_2[j]\\\\1+\\min(d[i-1][j],d[i][j-1],d[i-1][j-1])&\\text{sinon}\\end{cases}$$\n<strong>Complexité</strong> : $O(mn)$.` },
  ]},
],
'info-ia': [
  { titre: 'Arbres de jeu et Minimax', cartes: [
    { type:'def', label:'DEF', titre:'Jeu à somme nulle à deux joueurs',
      contenu:`Deux joueurs (MAX et MIN) s'affrontent. Les gains sont opposés.<br><strong>Représentation</strong> : arbre de jeu (nœuds = états, arêtes = coups).<br><strong>Valeur d'un état terminal</strong> : $+1$ (victoire MAX), $-1$ (victoire MIN), $0$ (nul).` },
    { type:'prop', label:'PROP', titre:'Algorithme Minimax',
      contenu:`$$\\text{minimax}(s)=\\begin{cases}\\text{heuristique}(s)&\\text{si }s\\text{ terminal}\\\\\\max_{s'}\\text{minimax}(s')&\\text{si MAX joue}\\\\\\min_{s'}\\text{minimax}(s')&\\text{si MIN joue}\\end{cases}$$\n<strong>Complexité</strong> : $O(b^d)$ ($b$ = facteur de branchement, $d$ = profondeur).` },
    { type:'prop', label:'PROP', titre:'Élagage alpha-bêta',
      contenu:`<strong>Fenêtre $[\\alpha,\\beta]$</strong> : $\\alpha$ = meilleur score MAX, $\\beta$ = meilleur score MIN.<br><strong>Coupure alpha</strong> (nœud MIN) : si score $\\le\\alpha$, couper.<br><strong>Coupure bêta</strong> (nœud MAX) : si score $\\ge\\beta$, couper.<br>Réduit la profondeur effective à $d/2$ en moyenne.` },
  ]},
  { titre: 'Recherche heuristique', cartes: [
    { type:'prop', label:'PROP', titre:'Algorithme A*',
      contenu:`Extension de Dijkstra avec heuristique $h(n)$ estimant le coût restant.<br><strong>Priorité</strong> : $f(n)=g(n)+h(n)$ ($g(n)$ = coût parcouru).<br><strong>Admissibilité</strong> : $h(n)\\le h^*(n)$ → A* est optimal.<br><strong>Exemple</strong> : $h$ = distance de Manhattan pour la grille.` },
  ]},
],
'info-python': [
  { titre: 'Types et structures de données Python', cartes: [
    { type:'prop', label:'PROP', titre:'Types natifs essentiels',
      contenu:`<strong>Immuables</strong> : <code>int</code>, <code>float</code>, <code>bool</code>, <code>str</code>, <code>tuple</code>, <code>frozenset</code><br><strong>Mutables</strong> : <code>list</code>, <code>dict</code>, <code>set</code><br><strong>Précision entière</strong> : en Python, <code>int</code> est de précision arbitraire (pas d'overflow).` },
    { type:'form', label:'FORM', titre:'Complexité des opérations sur list et dict',
      contenu:`<table><tr><th>Opération</th><th>list</th><th>dict</th></tr><tr><td>Accès <code>a[i]</code></td><td>$O(1)$</td><td>$O(1)$*</td></tr><tr><td>Recherche <code>x in a</code></td><td>$O(n)$</td><td>$O(1)$*</td></tr><tr><td><code>append</code></td><td>$O(1)$*</td><td>$O(1)$*</td></tr><tr><td>Tri <code>sort()</code></td><td>$O(n\\log n)$</td><td>—</td></tr></table>* amorti` },
  ]},
  { titre: 'Constructions Python importantes', cartes: [
    { type:'form', label:'FORM', titre:'Compréhensions et générateurs',
      contenu:`<pre><code># Compréhension de liste
carres = [x**2 for x in range(n) if x % 2 == 0]

# Compréhension de dictionnaire
d = {k: v for k, v in zip(keys, vals)}

# Générateur (mémoire O(1))
total = sum(x**2 for x in range(n))</code></pre>` },
    { type:'form', label:'FORM', titre:'Fonctions importantes à connaître',
      contenu:`<code>range(start, stop, step)</code> · <code>enumerate(it)</code> · <code>zip(a, b)</code><br><code>sorted(it, key=f, reverse=True)</code> — tri stable<br><code>heapq.heappush/heappop</code> — file de priorité min<br><code>collections.deque</code> — file double-ended $O(1)$<br><code>collections.defaultdict(type)</code> — dictionnaire avec valeur par défaut<br><code>functools.lru_cache</code> — mémoïsation automatique` },
    { type:'meth', label:'METH', titre:'Implémentation de structures courantes',
      contenu:`<pre><code># Pile
pile = []; pile.append(x); x = pile.pop()

# File
from collections import deque
q = deque(); q.append(x); x = q.popleft()

# File de priorité min
import heapq
tas = []
heapq.heappush(tas, (priorité, val))
p, v = heapq.heappop(tas)

# Graphe liste d'adjacence
from collections import defaultdict
G = defaultdict(list)
G[u].append(v)</code></pre>` },
  ]},
],
};

// ── Fonction principale ───────────────────────────────────────────────────────

export function seedSiInfoIfNeeded(db) {
  // Guard: skip if SI data already exists
  const stmt = db.prepare("SELECT COUNT(*) as n FROM sections WHERE chapitre_id = 'si-syscont'");
  const existingSI = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  if (existingSI && existingSI.n > 0) {
    console.log('[seed-si-info] SI data already present, skip.');
    return;
  }

  console.log('[seed-si-info] Inserting SI + Info content...');

  function lastId() {
    const stmt = db.prepare("SELECT last_insert_rowid() as id");
    const row = stmt.step() ? stmt.getAsObject() : null;
    stmt.free();
    return row ? row.id : null;
  }

  let secCount = 0, carteCount = 0;

  function insertSections(chapId, sectionData, filieres) {
    // Ensure chapitre exists
    try {
      db.run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)',
        [chapId, chapId.startsWith('si-') ? 'si' : 'info', chapId]);
    } catch {}
    // Link to filieres
    for (const fid of filieres) {
      const ord = sectionData._ordre || 1;
      try {
        db.run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)', [fid, chapId, ord]);
      } catch {}
    }

    const secs = sectionData[chapId] || [];
    for (let si = 0; si < secs.length; si++) {
      const sec = secs[si];
      db.run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)', [chapId, sec.titre, si + 1]);
      const secId = lastId();
      secCount++;
      for (let ki = 0; ki < sec.cartes.length; ki++) {
        const c = sec.cartes[ki];
        db.run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
          [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
        carteCount++;
      }
    }
  }

  // Insert SI
  for (const chapId of Object.keys(SI_SECTIONS)) {
    insertSections(chapId, SI_SECTIONS, SI_FILIERES);
  }

  // Insert Info
  for (const chapId of Object.keys(INFO_SECTIONS)) {
    insertSections(chapId, INFO_SECTIONS, INFO_FILIERES);
  }

  console.log(`[seed-si-info] Done: ${secCount} sections, ${carteCount} cartes.`);
}
