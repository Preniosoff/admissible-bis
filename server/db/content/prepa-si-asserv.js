// Prépa CPGE — Sciences de l'Ingénieur (SI) : Automatique / Asservissements
// Programmes officiels 2021/2022 des classes préparatoires scientifiques
// (MPSI/MP, PCSI/PC, PTSI/PT, PSI, TSI, MPI)
// matière : si · enrichissement de chapitres existants (enrich:true)
// Convention : variable de Laplace notée p (usage CPGE français).

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. SYSTÈMES LINÉAIRES CONTINUS INVARIANTS (SLCI)
// ══════════════════════════════════════════════════════════════
{
  id: 'si-syscont', matiere: 'si',
  titre: 'Systèmes linéaires continus invariants (SLCI)', ordre: 1, enrich: true,
  sections: [

    {
      titre: 'Définition et hypothèses du modèle SLCI',
      cartes: [
        { type:'def', label:'DEF', titre:'Système, entrée, sortie',
          contenu:`Un <strong>système</strong> transforme une grandeur d'<strong>entrée</strong> (consigne, commande) $e(t)$ en une grandeur de <strong>sortie</strong> $s(t)$. On le note par un bloc orienté $e(t) \\rightarrow [\\text{système}] \\rightarrow s(t)$.<br>L'objectif de l'automatique est de <strong>prévoir</strong> et de <strong>maîtriser</strong> la sortie $s(t)$ connaissant l'entrée $e(t)$ et le modèle du système.<br>Un système est <strong>monovariable</strong> (SISO) s'il possède une seule entrée et une seule sortie ; c'est le cadre du cours.` },
        { type:'def', label:'DEF', titre:'Linéarité',
          contenu:`Un système est <strong>linéaire</strong> s'il vérifie le <strong>principe de superposition</strong> :<br>si $e_1(t) \\mapsto s_1(t)$ et $e_2(t) \\mapsto s_2(t)$, alors pour tous réels $\\lambda, \\mu$ :<br>$$\\lambda\\, e_1(t) + \\mu\\, e_2(t) \\;\\longmapsto\\; \\lambda\\, s_1(t) + \\mu\\, s_2(t)$$<br>Conséquences : <strong>additivité</strong> (la réponse d'une somme est la somme des réponses) et <strong>homogénéité</strong> (proportionnalité). En pratique, on linéarise autour d'un point de fonctionnement les systèmes faiblement non linéaires.` },
        { type:'def', label:'DEF', titre:'Invariance (stationnarité)',
          contenu:`Un système est <strong>invariant</strong> (ou <strong>stationnaire</strong>) si ses caractéristiques ne dépendent pas du temps : un décalage temporel de l'entrée produit le même décalage de la sortie.<br>$$e(t) \\mapsto s(t) \\quad\\Longrightarrow\\quad e(t - \\tau) \\mapsto s(t - \\tau)$$<br>Mathématiquement, l'équation différentielle qui régit le système est à <strong>coefficients constants</strong>. C'est l'hypothèse qui justifie l'usage de la transformée de Laplace et la notion de fonction de transfert.` },
        { type:'prop', label:'PROP', titre:'Causalité et continuité',
          contenu:`Un système physique réel est <strong>causal</strong> : la sortie à l'instant $t$ ne dépend que des valeurs de l'entrée aux instants <strong>antérieurs ou égaux</strong> à $t$ (pas d'anticipation). On suppose les signaux <strong>causaux</strong> : $e(t) = 0$ pour $t < 0$.<br>Un système physique est aussi <strong>continu</strong> : entrées et sorties sont des fonctions du temps à valeurs réelles (par opposition aux systèmes échantillonnés/numériques).<br>L'ensemble des hypothèses <strong>Linéaire + Continu + Invariant</strong> définit un <strong>SLCI</strong>.` },
      ]
    },

    {
      titre: 'Modélisation par équation différentielle',
      cartes: [
        { type:'def', label:'DEF', titre:'Équation différentielle d\'un SLCI',
          contenu:`Le comportement d'un SLCI est régi par une <strong>équation différentielle linéaire à coefficients constants</strong> reliant entrée $e(t)$ et sortie $s(t)$ :<br>$$a_n \\frac{\\mathrm{d}^n s}{\\mathrm{d}t^n} + \\dots + a_1 \\frac{\\mathrm{d}s}{\\mathrm{d}t} + a_0\\, s = b_m \\frac{\\mathrm{d}^m e}{\\mathrm{d}t^m} + \\dots + b_0\\, e$$<br>L'<strong>ordre</strong> du système est le degré $n$ de la plus haute dérivée de la sortie. Pour un système physique <strong>propre</strong>, $m \\le n$.` },
        { type:'meth', label:'METH', titre:'Établir l\'équation différentielle',
          contenu:`<strong>1.</strong> Identifier les <strong>lois physiques</strong> du domaine : loi des mailles (élec.), PFD/théorème du moment cinétique (méca.), bilan thermique...<br><strong>2.</strong> Écrire les <strong>relations constitutives</strong> des composants ($u = Ri$, $u_L = L\\,\\mathrm{d}i/\\mathrm{d}t$, $q = C u$, $F = k x$, $F = f\\dot x$...).<br><strong>3.</strong> Éliminer les <strong>variables internes</strong> pour ne garder que $e(t)$ et $s(t)$.<br><strong>4.</strong> Ordonner par dérivées décroissantes ; vérifier l'<strong>homogénéité</strong> dimensionnelle.` },
        { type:'ex', label:'EX', titre:'Masse-ressort-amortisseur',
          contenu:`<strong>Énoncé</strong> : une masse $m$ soumise à une force $F(t)$, rappel ressort de raideur $k$, frottement visqueux $f$. Sortie : position $x(t)$.<br><strong>Résolution</strong> : le PFD projeté donne $m\\ddot x = F - k x - f \\dot x$, soit :<br>$$m\\,\\frac{\\mathrm{d}^2 x}{\\mathrm{d}t^2} + f\\,\\frac{\\mathrm{d}x}{\\mathrm{d}t} + k\\, x = F(t)$$<br>Système d'<strong>ordre 2</strong>. On reconnaît la forme canonique du second ordre avec $\\omega_0 = \\sqrt{k/m}$ et amortissement lié à $f$.` },
        { type:'prop', label:'PROP', titre:'Régime libre et régime forcé',
          contenu:`La solution générale est la somme :<br><ul><li>du <strong>régime libre</strong> (solution de l'équation homogène, $e = 0$) : il dépend des conditions initiales et tend vers $0$ si le système est stable — c'est le <strong>régime transitoire</strong> ;</li><li>du <strong>régime forcé</strong> (solution particulière liée à $e(t)$) : il subsiste — c'est le <strong>régime permanent</strong> (ou établi).</li></ul>La <strong>stabilité</strong> assure l'extinction du régime libre, donc l'établissement du régime permanent.` },
      ]
    },

    {
      titre: 'Signaux d\'entrée canoniques',
      cartes: [
        { type:'def', label:'DEF', titre:'Échelon (fonction de Heaviside)',
          contenu:`L'<strong>échelon unité</strong> (fonction de Heaviside) modélise une consigne appliquée brutalement et maintenue :<br>$$u(t) = \\begin{cases} 0 & \\text{si } t < 0 \\\\ 1 & \\text{si } t \\ge 0 \\end{cases}$$<br>Un échelon d'amplitude $E_0$ s'écrit $e(t) = E_0\\, u(t)$. C'est l'entrée de test la plus utilisée : la sortie associée est la <strong>réponse indicielle</strong>, qui renseigne sur la rapidité, le dépassement et la précision.` },
        { type:'def', label:'DEF', titre:'Rampe et impulsion',
          contenu:`La <strong>rampe</strong> (entrée à vitesse constante) : $e(t) = a\\, t\\, u(t)$, de pente $a$. La sortie associée révèle l'<strong>erreur de traînage</strong> (poursuite d'une consigne qui évolue).<br>L'<strong>impulsion de Dirac</strong> $\\delta(t)$ est la limite idéale d'une impulsion d'aire $1$ et de durée tendant vers $0$. Elle vérifie $\\displaystyle\\int_{-\\infty}^{+\\infty}\\delta(t)\\,\\mathrm{d}t = 1$ et est la <strong>dérivée</strong> de l'échelon : $\\delta(t) = \\dfrac{\\mathrm{d}u}{\\mathrm{d}t}$.` },
        { type:'prop', label:'PROP', titre:'Relations entre les réponses',
          contenu:`Par <strong>linéarité et invariance</strong>, les réponses aux entrées canoniques sont liées par dérivation/intégration :<br><ul><li>la réponse <strong>impulsionnelle</strong> $h(t)$ est la <strong>dérivée</strong> de la réponse <strong>indicielle</strong> ;</li><li>la réponse à la <strong>rampe</strong> est l'<strong>intégrale</strong> de la réponse indicielle.</li></ul>Connaître une réponse canonique permet donc de déduire les autres. La réponse impulsionnelle $h(t)$ caractérise entièrement le SLCI (produit de convolution : $s = h * e$).` },
        { type:'def', label:'DEF', titre:'Entrée harmonique',
          contenu:`L'<strong>entrée sinusoïdale</strong> $e(t) = E_0 \\cos(\\omega t)$ sert à l'analyse <strong>fréquentielle</strong>. En régime permanent, un SLCI stable répond par une sinusoïde de <strong>même pulsation</strong> $\\omega$, d'amplitude et de phase modifiées :<br>$$s(t) = S_0 \\cos(\\omega t + \\varphi)$$<br>Le rapport $S_0/E_0$ (gain) et le déphasage $\\varphi$ dépendent de $\\omega$ : c'est la <strong>réponse harmonique</strong>, base des diagrammes de Bode.` },
      ]
    },

    {
      titre: 'Notion de fonction de transfert',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction de transfert',
          contenu:`Pour un SLCI à <strong>conditions initiales nulles</strong>, la <strong>fonction de transfert</strong> $H(p)$ est le rapport des transformées de Laplace de la sortie et de l'entrée :<br>$$H(p) = \\frac{S(p)}{E(p)}$$<br>C'est une <strong>fraction rationnelle</strong> $H(p) = \\dfrac{N(p)}{D(p)}$ en la variable de Laplace $p$. Elle caractérise <strong>entièrement</strong> le comportement dynamique du système, indépendamment de l'entrée appliquée.` },
        { type:'prop', label:'PROP', titre:'Pôles, zéros, ordre, classe',
          contenu:`Avec $H(p) = N(p)/D(p)$ :<br><ul><li>les <strong>zéros</strong> sont les racines de $N(p)$ ;</li><li>les <strong>pôles</strong> sont les racines de $D(p)$ : ils gouvernent la <strong>stabilité</strong> et la dynamique ;</li><li>l'<strong>ordre</strong> est $\\deg D(p)$ ;</li><li>la <strong>classe</strong> $\\alpha$ est le nombre de pôles nuls : $H(p) = \\dfrac{1}{p^{\\alpha}}\\,\\dfrac{N(p)}{D_1(p)}$ avec $D_1(0) \\ne 0$.</li></ul>` },
        { type:'form', label:'FORM', titre:'Forme canonique et gain statique',
          contenu:`On met $H(p)$ sous <strong>forme canonique</strong> faisant apparaître le <strong>gain statique</strong> $K$ :<br>$$H(p) = \\frac{K}{p^{\\alpha}}\\cdot\\frac{1 + \\dots}{1 + \\dots}$$<br>Pour un système de <strong>classe 0</strong>, le gain statique est $K = H(0)$ : c'est le rapport sortie/entrée en régime permanent pour un échelon. Exemples : $H(p) = \\dfrac{K}{1 + \\tau p}$ (1er ordre), $H(p) = \\dfrac{K}{1 + \\frac{2\\xi}{\\omega_0}p + \\frac{1}{\\omega_0^2}p^2}$ (2e ordre).` },
        { type:'meth', label:'METH', titre:'Obtenir H(p) depuis l\'équation différentielle',
          contenu:`<strong>1.</strong> Partir de l'équation différentielle liant $s(t)$ et $e(t)$.<br><strong>2.</strong> Appliquer la transformée de Laplace avec <strong>conditions initiales nulles</strong> : chaque $\\dfrac{\\mathrm{d}^k s}{\\mathrm{d}t^k}$ devient $p^k S(p)$.<br><strong>3.</strong> Factoriser : $D(p)\\,S(p) = N(p)\\,E(p)$.<br><strong>4.</strong> Former $H(p) = \\dfrac{S(p)}{E(p)} = \\dfrac{N(p)}{D(p)}$, puis mettre sous forme canonique pour lire $K$, $\\tau$, $\\omega_0$, $\\xi$.` },
      ]
    },

    {
      titre: 'Linéarisation et limites du modèle',
      cartes: [
        { type:'meth', label:'METH', titre:'Linéariser autour d\'un point de fonctionnement',
          contenu:`Un système réel $s = g(e)$ non linéaire se <strong>linéarise</strong> autour d'un point de fonctionnement $(e_0, s_0)$ :<br>$$s - s_0 \\approx g'(e_0)\\,(e - e_0)$$<br>On travaille alors sur les <strong>variations</strong> $\\Delta e = e - e_0$ et $\\Delta s = s - s_0$, qui obéissent à un modèle <strong>linéaire</strong> valable au <strong>voisinage</strong> du point. La pente $g'(e_0)$ devient le gain local.` },
        { type:'prop', label:'PROP', titre:'Non-linéarités courantes',
          contenu:`Les principales non-linéarités rencontrées :<br><ul><li><strong>saturation</strong> : la sortie d'un actionneur est bornée (limite de couple, de tension) ;</li><li><strong>seuil / zone morte</strong> : pas de réponse en deçà d'une entrée minimale (jeux mécaniques) ;</li><li><strong>hystérésis</strong> : la sortie dépend du sens de variation ;</li><li><strong>frottement sec</strong> (Coulomb), <strong>quantification</strong>.</li></ul>Le modèle SLCI ne les décrit pas : il faut rester dans le domaine linéaire ou les modéliser à part.` },
        { type:'ex', label:'EX', titre:'Domaine de validité d\'un modèle linéaire',
          contenu:`<strong>Énoncé</strong> : un moteur à courant continu est piloté en tension. Au-delà de $U_{max}$, l'alimentation sature. Discuter le modèle.<br><strong>Résolution</strong> : tant que $|u(t)| < U_{max}$, le moteur se comporte comme un SLCI (fonction de transfert vitesse/tension du 1er ordre). Si la commande exige $u > U_{max}$, la <strong>saturation</strong> rend le système non linéaire : le modèle SLCI <strong>surestime</strong> la rapidité (l'effort réel est plafonné). Le cahier des charges doit garantir le fonctionnement dans la zone linéaire.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 2. TRANSFORMÉE DE LAPLACE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-laplace', matiere: 'si',
  titre: 'Transformée de Laplace', ordre: 2, enrich: true,
  sections: [

    {
      titre: 'Définition et existence',
      cartes: [
        { type:'def', label:'DEF', titre:'Transformée de Laplace',
          contenu:`À une fonction <strong>causale</strong> $f(t)$ (nulle pour $t < 0$), on associe sa <strong>transformée de Laplace</strong> $F(p)$, fonction de la variable complexe $p$ :<br>$$F(p) = \\mathcal{L}[f(t)] = \\int_0^{+\\infty} f(t)\\, e^{-pt}\\,\\mathrm{d}t$$<br>L'intérêt majeur : elle transforme <strong>dérivation et intégration</strong> en opérations <strong>algébriques</strong> sur $p$, convertissant les équations différentielles en équations rationnelles.` },
        { type:'prop', label:'PROP', titre:'Convergence et abscisse de sommabilité',
          contenu:`L'intégrale définissant $F(p)$ converge dans un <strong>demi-plan</strong> $\\mathrm{Re}(p) > \\sigma_0$, où $\\sigma_0$ est l'<strong>abscisse de convergence</strong>.<br>En pratique en SI, les signaux considérés (échelons, exponentielles décroissantes, sinusoïdes) admettent tous une transformée. On ne se préoccupe pas du domaine de convergence : on utilise des <strong>tables</strong> de transformées usuelles et leurs propriétés.` },
        { type:'prop', label:'PROP', titre:'Linéarité',
          contenu:`La transformée de Laplace est <strong>linéaire</strong> : pour tous réels (ou complexes) $\\lambda, \\mu$,<br>$$\\mathcal{L}[\\lambda f(t) + \\mu g(t)] = \\lambda\\, F(p) + \\mu\\, G(p)$$<br>Cette propriété, jointe à la décomposition en éléments simples, est la clé du calcul des transformées inverses : on décompose $F(p)$ en somme de termes dont on connaît l'original.` },
      ]
    },

    {
      titre: 'Propriétés opérationnelles',
      cartes: [
        { type:'form', label:'FORM', titre:'Théorème de la dérivation',
          contenu:`Pour la dérivée d'ordre $n$, avec les conditions initiales :<br>$$\\mathcal{L}\\!\\left[\\frac{\\mathrm{d}f}{\\mathrm{d}t}\\right] = p\\,F(p) - f(0^+)$$<br>$$\\mathcal{L}\\!\\left[\\frac{\\mathrm{d}^2 f}{\\mathrm{d}t^2}\\right] = p^2 F(p) - p\\,f(0^+) - f'(0^+)$$<br>À <strong>conditions initiales nulles</strong>, dériver dans le domaine temporel revient à <strong>multiplier par $p$</strong> dans le domaine de Laplace : $\\mathcal{L}[f^{(n)}] = p^n F(p)$.` },
        { type:'form', label:'FORM', titre:'Théorème de l\'intégration',
          contenu:`L'intégration depuis $0$ revient à <strong>diviser par $p$</strong> :<br>$$\\mathcal{L}\\!\\left[\\int_0^t f(\\tau)\\,\\mathrm{d}\\tau\\right] = \\frac{F(p)}{p}$$<br>Cohérent avec le théorème de dérivation (opérations réciproques). C'est pourquoi un intégrateur pur a pour fonction de transfert $1/p$ et un dérivateur pur $p$.` },
        { type:'form', label:'FORM', titre:'Théorème du retard',
          contenu:`Un <strong>retard pur</strong> $T$ dans le temps se traduit par un facteur exponentiel :<br>$$\\mathcal{L}[f(t - T)\\,u(t-T)] = e^{-Tp}\\,F(p)$$<br>La fonction de transfert d'un retard pur est donc $e^{-Tp}$. Ce terme transcendant (non rationnel) complique l'étude de stabilité ; on l'approche parfois par un développement (approximation de Padé).` },
        { type:'form', label:'FORM', titre:'Théorème de la valeur initiale et finale',
          contenu:`Ces deux théorèmes donnent les valeurs aux <strong>extrémités</strong> sans inversion :<br>$$\\boxed{\\;\\lim_{t \\to 0^+} f(t) = \\lim_{p \\to +\\infty} p\\,F(p)\\;}\\quad\\text{(valeur initiale)}$$<br>$$\\boxed{\\;\\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} p\\,F(p)\\;}\\quad\\text{(valeur finale)}$$<br><strong>Attention</strong> : le théorème de la valeur finale n'est valable que si $f(t)$ <strong>admet une limite finie</strong> (système stable, pas de pôle de $pF(p)$ à partie réelle $\\ge 0$).` },
      ]
    },

    {
      titre: 'Transformées usuelles',
      cartes: [
        { type:'form', label:'FORM', titre:'Impulsion, échelon, rampe',
          contenu:`<ul><li>Impulsion de Dirac : $\\mathcal{L}[\\delta(t)] = 1$ ;</li><li>Échelon unité : $\\mathcal{L}[u(t)] = \\dfrac{1}{p}$ ;</li><li>Rampe unité : $\\mathcal{L}[t\\, u(t)] = \\dfrac{1}{p^2}$ ;</li><li>Puissance : $\\mathcal{L}\\!\\left[\\dfrac{t^n}{n!}\\,u(t)\\right] = \\dfrac{1}{p^{n+1}}$.</li></ul>On retrouve ainsi : dériver l'échelon ($\\times p$) donne le Dirac ; l'intégrer ($\\div p$) donne la rampe.` },
        { type:'form', label:'FORM', titre:'Exponentielle et amortissement',
          contenu:`<ul><li>Exponentielle : $\\mathcal{L}[e^{-at}\\,u(t)] = \\dfrac{1}{p + a}$ ;</li><li>Rampe amortie : $\\mathcal{L}[t\\,e^{-at}\\,u(t)] = \\dfrac{1}{(p + a)^2}$.</li></ul><strong>Théorème du décalage en $p$</strong> (modulation) : multiplier $f(t)$ par $e^{-at}$ décale l'argument de $F$ :<br>$$\\mathcal{L}[e^{-at} f(t)] = F(p + a)$$` },
        { type:'form', label:'FORM', titre:'Sinusoïde et amortie',
          contenu:`<ul><li>$\\mathcal{L}[\\sin(\\omega t)\\,u(t)] = \\dfrac{\\omega}{p^2 + \\omega^2}$ ;</li><li>$\\mathcal{L}[\\cos(\\omega t)\\,u(t)] = \\dfrac{p}{p^2 + \\omega^2}$ ;</li><li>$\\mathcal{L}[e^{-at}\\sin(\\omega t)\\,u(t)] = \\dfrac{\\omega}{(p + a)^2 + \\omega^2}$ ;</li><li>$\\mathcal{L}[e^{-at}\\cos(\\omega t)\\,u(t)] = \\dfrac{p + a}{(p + a)^2 + \\omega^2}$.</li></ul>Les pôles complexes conjugués $-a \\pm j\\omega$ correspondent à des oscillations amorties de pseudo-pulsation $\\omega$.` },
        { type:'prop', label:'PROP', titre:'Lecture pôles → comportement temporel',
          contenu:`Les <strong>pôles</strong> de $F(p)$ déterminent l'allure de $f(t)$ :<br><ul><li>pôle réel $-a$ ($a>0$) → terme $e^{-at}$ (décroissance) ;</li><li>pôle réel $+a$ → terme $e^{+at}$ (divergence : instabilité) ;</li><li>pôles complexes $-a \\pm j\\omega$ ($a>0$) → oscillations amorties ;</li><li>pôles imaginaires purs $\\pm j\\omega$ → oscillations entretenues ;</li><li>pôle nul → terme constant ou rampe (intégration).</li></ul>` },
      ]
    },

    {
      titre: 'Transformée inverse',
      cartes: [
        { type:'meth', label:'METH', titre:'Décomposition en éléments simples',
          contenu:`Pour inverser $F(p) = \\dfrac{N(p)}{D(p)}$ (fraction rationnelle, $\\deg N < \\deg D$) :<br><strong>1.</strong> Factoriser $D(p)$ (pôles réels et/ou complexes).<br><strong>2.</strong> <strong>Décomposer en éléments simples</strong> : $F(p) = \\sum \\dfrac{A_k}{p - p_k} + \\dots$<br><strong>3.</strong> Calculer les résidus $A_k$ (par identification ou multiplication par $(p - p_k)$ puis $p \\to p_k$).<br><strong>4.</strong> Inverser <strong>terme à terme</strong> grâce à la table : $\\dfrac{A}{p+a} \\to A\\, e^{-at}\\,u(t)$.` },
        { type:'ex', label:'EX', titre:'Inverser une fraction du 1er ordre',
          contenu:`<strong>Énoncé</strong> : inverser $S(p) = \\dfrac{K}{p\\,(1 + \\tau p)}$ (réponse indicielle d'un 1er ordre).<br><strong>Résolution</strong> : décomposition $S(p) = \\dfrac{A}{p} + \\dfrac{B}{1 + \\tau p}$. On trouve $A = K$ et $B = -K\\tau$, soit $S(p) = \\dfrac{K}{p} - \\dfrac{K\\tau}{1 + \\tau p} = \\dfrac{K}{p} - \\dfrac{K}{p + 1/\\tau}$.<br>Inversion : $s(t) = K\\left(1 - e^{-t/\\tau}\\right) u(t)$. On reconnaît la réponse indicielle du premier ordre.` },
        { type:'prop', label:'PROP', titre:'Cas des pôles complexes conjugués',
          contenu:`Pour un dénominateur du second degré à racines complexes $-a \\pm j\\omega$, on <strong>ne décompose pas</strong> en éléments du premier degré complexes : on garde le bloc<br>$$\\frac{\\alpha p + \\beta}{(p + a)^2 + \\omega^2}$$<br>que l'on identifie à une combinaison de $\\mathcal{L}[e^{-at}\\cos\\omega t]$ et $\\mathcal{L}[e^{-at}\\sin\\omega t]$. La sortie temporelle est alors une <strong>sinusoïde amortie</strong>.` },
      ]
    },

    {
      titre: 'Résolution d\'équations différentielles',
      cartes: [
        { type:'meth', label:'METH', titre:'Méthode opérationnelle',
          contenu:`Pour résoudre une équation différentielle linéaire à coefficients constants :<br><strong>1.</strong> Appliquer $\\mathcal{L}$ à toute l'équation, en intégrant les <strong>conditions initiales</strong> via le théorème de dérivation.<br><strong>2.</strong> Résoudre l'<strong>équation algébrique</strong> obtenue pour isoler la transformée de la sortie $S(p)$.<br><strong>3.</strong> Décomposer $S(p)$ en éléments simples.<br><strong>4.</strong> Inverser terme à terme pour obtenir $s(t)$. Les CI sont déjà incorporées (pas de constante à déterminer a posteriori).` },
        { type:'ex', label:'EX', titre:'Circuit RC avec échelon',
          contenu:`<strong>Énoncé</strong> : $RC\\,\\dfrac{\\mathrm{d}s}{\\mathrm{d}t} + s = E_0$ pour $t \\ge 0$, condition initiale $s(0) = 0$.<br><strong>Résolution</strong> : Laplace : $RC\\,(p S(p) - s(0)) + S(p) = \\dfrac{E_0}{p}$, soit $S(p)(1 + RCp) = \\dfrac{E_0}{p}$.<br>$S(p) = \\dfrac{E_0}{p\\,(1 + RCp)}$. Décomposition puis inversion :<br>$$s(t) = E_0\\left(1 - e^{-t/RC}\\right),\\quad t \\ge 0.$$` },
        { type:'ex', label:'EX', titre:'Vérification par valeurs initiale et finale',
          contenu:`<strong>Énoncé</strong> : sur l'exemple précédent $S(p) = \\dfrac{E_0}{p(1 + RCp)}$, vérifier les bornes.<br><strong>Résolution</strong> : valeur initiale $\\displaystyle\\lim_{p\\to+\\infty} p\\,S(p) = \\lim_{p\\to+\\infty}\\dfrac{E_0}{1 + RCp} = 0 = s(0^+)$. ✓<br>Valeur finale $\\displaystyle\\lim_{p\\to 0} p\\,S(p) = \\dfrac{E_0}{1} = E_0 = s(\\infty)$. ✓<br>Ces tests rapides valident l'expression sans tracer la courbe.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 3. SCHÉMA-BLOCS ET FONCTIONS DE TRANSFERT
// ══════════════════════════════════════════════════════════════
{
  id: 'si-ftbf', matiere: 'si',
  titre: 'Schéma-blocs et fonctions de transfert', ordre: 3, enrich: true,
  sections: [

    {
      titre: 'Éléments d\'un schéma-blocs',
      cartes: [
        { type:'def', label:'DEF', titre:'Bloc, sommateur, prélèvement',
          contenu:`Un <strong>schéma-blocs</strong> (ou schéma fonctionnel) représente graphiquement les relations entre les transformées de Laplace des signaux. Trois éléments :<br><ul><li><strong>bloc</strong> : porte une fonction de transfert $H(p)$ et <strong>multiplie</strong> le signal qui le traverse : $S(p) = H(p)\\, E(p)$ ;</li><li><strong>sommateur / comparateur</strong> (cercle) : additionne ou soustrait des signaux ($+$ ou $-$) ;</li><li><strong>point de prélèvement</strong> : <strong>duplique</strong> un signal (sans le modifier) pour le réinjecter ailleurs.</li></ul>` },
        { type:'def', label:'DEF', titre:'Chaîne directe, chaîne de retour',
          contenu:`Dans un système asservi (bouclé) :<br><ul><li>la <strong>chaîne directe</strong> (chaîne d'action) $H(p)$ relie le signal d'écart $\\varepsilon$ à la sortie $S$ ;</li><li>la <strong>chaîne de retour</strong> $K_r(p)$ ramène la sortie vers le comparateur (capteur + conditionnement) ;</li><li>le <strong>comparateur</strong> forme l'<strong>écart</strong> $\\varepsilon(p) = E(p) - K_r(p)\\,S(p)$.</li></ul>Le bouclage par le retour est ce qui distingue la <strong>boucle fermée</strong> (asservissement) de la <strong>boucle ouverte</strong> (commande).` },
        { type:'prop', label:'PROP', titre:'Convention de signe du comparateur',
          contenu:`Le <strong>comparateur</strong> calcule la différence entre la consigne (transformée) et la mesure de retour :<br>$$\\varepsilon(p) = E(p) - R(p)$$<br>où $R(p) = K_r(p)\\,S(p)$ est le <strong>retour</strong>. Le signe $-$ traduit la <strong>contre-réaction</strong> (rétroaction négative), gage de régulation. Une rétroaction positive ($+$) tend à amplifier les écarts et déstabilise le système.` },
      ]
    },

    {
      titre: 'Algèbre des schémas-blocs',
      cartes: [
        { type:'form', label:'FORM', titre:'Blocs en série (cascade)',
          contenu:`Deux blocs en <strong>série</strong> (la sortie de l'un alimente l'entrée de l'autre) ont pour fonction de transfert équivalente le <strong>produit</strong> :<br>$$H_{eq}(p) = H_1(p)\\cdot H_2(p)$$<br>L'ordre des blocs en cascade est <strong>commutatif</strong> sur le plan du calcul (mais attention en pratique : saturations, charges...). Cette règle se généralise à $n$ blocs : on multiplie toutes les fonctions de transfert.` },
        { type:'form', label:'FORM', titre:'Blocs en parallèle',
          contenu:`Deux blocs en <strong>parallèle</strong> (même entrée, sorties sommées) ont pour fonction de transfert équivalente la <strong>somme</strong> :<br>$$H_{eq}(p) = H_1(p) + H_2(p)$$<br>(ou la différence si le sommateur soustrait). Cette structure apparaît par exemple dans un correcteur PID, où les actions P, I, D sont en parallèle.` },
        { type:'th', label:'THM', titre:'Formule de Black (boucle fermée)',
          contenu:`Pour une boucle à <strong>retour</strong> $K_r(p)$ et chaîne directe $H(p)$, la fonction de transfert en <strong>boucle fermée</strong> est :<br>$$\\boxed{\\;\\mathrm{FTBF}(p) = \\frac{S(p)}{E(p)} = \\frac{H(p)}{1 + H(p)\\,K_r(p)}\\;}$$<br>C'est la <strong>formule de Black</strong> : <em>chaîne directe sur un plus la boucle ouverte</em>. Le dénominateur $1 + H K_r$ est l'<strong>équation caractéristique</strong> du système bouclé (ses racines sont les pôles de la FTBF, donc la stabilité).` },
        { type:'prop', label:'PROP', titre:'Cas du retour unitaire',
          contenu:`Lorsque le <strong>retour est unitaire</strong> ($K_r(p) = 1$, capteur idéal de gain $1$), la formule de Black se simplifie :<br>$$\\mathrm{FTBF}(p) = \\frac{H(p)}{1 + H(p)}$$<br>On ramène souvent un schéma à retour quelconque à un <strong>retour unitaire équivalent</strong> pour faciliter l'étude de la précision (calcul des erreurs en boucle fermée).` },
      ]
    },

    {
      titre: 'FTBO et FTBF',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction de transfert en boucle ouverte',
          contenu:`La <strong>FTBO</strong> (fonction de transfert en boucle ouverte) est le produit de <strong>toutes</strong> les fonctions de transfert rencontrées en parcourant la boucle, retour compris :<br>$$\\mathrm{FTBO}(p) = H(p)\\,K_r(p)$$<br>Elle se calcule en « ouvrant » la boucle au niveau du comparateur. La FTBO est l'outil central de l'étude de <strong>stabilité</strong> (critère du revers, marges de gain et de phase sur les diagrammes de Bode/Nyquist).` },
        { type:'prop', label:'PROP', titre:'Lien FTBO ↔ FTBF',
          contenu:`La FTBF s'exprime directement à partir de la FTBO :<br>$$\\mathrm{FTBF}(p) = \\frac{H(p)}{1 + \\mathrm{FTBO}(p)}$$<br>et pour un retour unitaire $\\mathrm{FTBF} = \\dfrac{\\mathrm{FTBO}}{1 + \\mathrm{FTBO}}$.<br>L'<strong>équation caractéristique</strong> $1 + \\mathrm{FTBO}(p) = 0$ fixe les pôles de la boucle fermée : toute l'analyse de stabilité du système bouclé se ramène à l'étude de la FTBO.` },
        { type:'prop', label:'PROP', titre:'Classe de la FTBO et précision',
          contenu:`La <strong>classe</strong> $\\alpha$ de la FTBO (nombre d'intégrateurs $1/p^{\\alpha}$ dans la boucle ouverte) conditionne la <strong>précision</strong> du système bouclé :<br><ul><li>classe $0$ : erreur statique <strong>finie</strong> non nulle (échelon), traînage infini ;</li><li>classe $1$ : erreur statique <strong>nulle</strong>, erreur de traînage finie ;</li><li>classe $2$ : erreurs statique et de traînage <strong>nulles</strong>.</li></ul>Chaque intégrateur ajouté annule un ordre d'erreur supplémentaire.` },
        { type:'meth', label:'METH', titre:'Calculer la FTBF d\'un schéma simple',
          contenu:`<strong>1.</strong> Identifier la <strong>chaîne directe</strong> $H(p)$ (du comparateur à la sortie) et la <strong>chaîne de retour</strong> $K_r(p)$.<br><strong>2.</strong> Écrire la <strong>FTBO</strong> $= H\\,K_r$.<br><strong>3.</strong> Appliquer la <strong>formule de Black</strong> : $\\mathrm{FTBF} = \\dfrac{H}{1 + H K_r}$.<br><strong>4.</strong> Développer et mettre sous <strong>forme canonique</strong> pour lire ordre, classe, gain statique et identifier le comportement (1er/2e ordre).` },
      ]
    },

    {
      titre: 'Manipulation et réduction de schémas',
      cartes: [
        { type:'meth', label:'METH', titre:'Déplacer un point de sommation',
          contenu:`Pour <strong>déplacer un sommateur</strong> à travers un bloc $G(p)$ <strong>en aval</strong> (dans le sens du signal), il faut conserver l'égalité des signaux :<br><ul><li>déplacer un sommateur <strong>après</strong> un bloc $G$ : la branche entrante doit être <strong>multipliée par $G$</strong> ;</li><li>déplacer un sommateur <strong>avant</strong> un bloc $G$ : la branche entrante doit être <strong>divisée par $G$</strong> (multipliée par $1/G$).</li></ul>Règle : ce qui était additionné après amplification doit l'être avant en compensant le gain.` },
        { type:'meth', label:'METH', titre:'Déplacer un point de prélèvement',
          contenu:`Pour <strong>déplacer un point de prélèvement</strong> (qui duplique un signal) à travers un bloc $G(p)$ :<br><ul><li>déplacer un prélèvement <strong>après</strong> un bloc $G$ : la branche prélevée doit être <strong>divisée par $G$</strong> pour retrouver le signal d'avant le bloc ;</li><li>déplacer un prélèvement <strong>avant</strong> un bloc $G$ : la branche prélevée doit être <strong>multipliée par $G$</strong>.</li></ul>Symétrique de la règle des sommateurs (le facteur s'inverse).` },
        { type:'meth', label:'METH', titre:'Réduire un schéma complexe',
          contenu:`<strong>1.</strong> Repérer les <strong>boucles simples</strong> et les réduire par la formule de Black.<br><strong>2.</strong> Fusionner les <strong>blocs en série</strong> (produit) et en <strong>parallèle</strong> (somme).<br><strong>3.</strong> Pour les <strong>boucles imbriquées/croisées</strong> : déplacer points de sommation et de prélèvement pour <strong>découpler</strong> les boucles, puis réduire de l'intérieur vers l'extérieur.<br><strong>4.</strong> Alternative systématique : <strong>formule de Mason</strong> (si plusieurs chemins et boucles).` },
        { type:'ex', label:'EX', titre:'Réduction d\'une boucle à retour non unitaire',
          contenu:`<strong>Énoncé</strong> : chaîne directe $H(p) = \\dfrac{10}{1 + 0{,}5\\,p}$, retour $K_r = 0{,}2$ constant. Donner la FTBF.<br><strong>Résolution</strong> : FTBO $= H K_r = \\dfrac{2}{1 + 0{,}5 p}$. Black :<br>$$\\mathrm{FTBF} = \\frac{H}{1 + H K_r} = \\frac{\\frac{10}{1+0{,}5p}}{1 + \\frac{2}{1+0{,}5p}} = \\frac{10}{(1 + 0{,}5p) + 2} = \\frac{10}{3 + 0{,}5 p}.$$<br>Forme canonique : $\\mathrm{FTBF} = \\dfrac{10/3}{1 + \\frac{0{,}5}{3} p}$ : 1er ordre, gain $K = 10/3 \\approx 3{,}33$, $\\tau = 1/6$ s.` },
      ]
    },

    {
      titre: 'Perturbations et superposition',
      cartes: [
        { type:'def', label:'DEF', titre:'Perturbation',
          contenu:`Une <strong>perturbation</strong> $P(p)$ est une entrée <strong>indésirable</strong> qui agit sur le système (couple résistant, variation de charge, à-coup...) en un point intermédiaire de la chaîne directe.<br>L'asservissement doit, idéalement, <strong>rejeter</strong> cette perturbation : maintenir la sortie à sa consigne malgré $P$. Le système se modélise alors avec <strong>deux entrées</strong> : la consigne $E(p)$ et la perturbation $P(p)$.` },
        { type:'meth', label:'METH', titre:'Théorème de superposition',
          contenu:`Le système étant <strong>linéaire</strong>, on applique le <strong>principe de superposition</strong> pour deux entrées $E$ et $P$ :<br>$$S(p) = \\underbrace{H_E(p)\\,E(p)}_{P=0} + \\underbrace{H_P(p)\\,P(p)}_{E=0}$$<br><strong>1.</strong> Annuler $P$ : calculer la FTBF consigne→sortie $H_E$.<br><strong>2.</strong> Annuler $E$ : calculer la FTBF perturbation→sortie $H_P$.<br><strong>3.</strong> Sommer les deux contributions.` },
        { type:'ex', label:'EX', titre:'Rejet de perturbation et rôle de l\'intégrateur',
          contenu:`<strong>Énoncé</strong> : chaîne directe $C(p)\\,G(p)$, perturbation $P$ injectée juste avant $G$, retour unitaire. Effet en régime permanent d'un échelon de perturbation ?<br><strong>Résolution</strong> : la transmittance perturbation→sortie est $H_P = \\dfrac{G}{1 + C G}$. L'erreur due à $P$ en régime permanent (théorème de la valeur finale) est d'autant plus faible que le <strong>gain de boucle $|C(0)G(0)|$ est grand</strong>. Si le <strong>correcteur $C$ contient un intégrateur</strong> ($1/p$), $H_P(0) = 0$ : la perturbation constante est <strong>totalement rejetée</strong> en régime permanent.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 4. SYSTÈMES DU 1er ET DU 2e ORDRE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-ordre12', matiere: 'si',
  titre: 'Systèmes du 1er et du 2e ordre', ordre: 4, enrich: true,
  sections: [

    {
      titre: 'Système du premier ordre',
      cartes: [
        { type:'def', label:'DEF', titre:'Forme canonique du 1er ordre',
          contenu:`Un <strong>système du premier ordre</strong> a pour fonction de transfert :<br>$$H(p) = \\frac{K}{1 + \\tau\\, p}$$<br>où $K$ est le <strong>gain statique</strong> et $\\tau > 0$ la <strong>constante de temps</strong> (en secondes). Il possède un <strong>unique pôle réel</strong> $p = -1/\\tau$, toujours à partie réelle négative : un système du premier ordre est <strong>toujours stable</strong>.<br>Équation différentielle associée : $\\tau\\,\\dfrac{\\mathrm{d}s}{\\mathrm{d}t} + s = K\\, e(t)$.` },
        { type:'form', label:'FORM', titre:'Réponse indicielle du 1er ordre',
          contenu:`Pour un échelon d'amplitude $E_0$, la réponse est :<br>$$s(t) = K E_0 \\left(1 - e^{-t/\\tau}\\right),\\quad t \\ge 0$$<br>Propriétés remarquables :<br><ul><li>valeur finale : $s(\\infty) = K E_0$ ;</li><li><strong>tangente à l'origine</strong> de pente $K E_0/\\tau$ : elle coupe l'asymptote en $t = \\tau$ ;</li><li>à $t = \\tau$ : $s = 0{,}63\\,K E_0$ (63 %) ; à $t = 3\\tau$ : 95 % ; à $t = 5\\tau$ : 99 %.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Temps de réponse à 5 %',
          contenu:`Le <strong>temps de réponse à 5 %</strong> $t_{r,5\\%}$ est l'instant à partir duquel la sortie reste dans la bande $\\pm 5\\%$ de sa valeur finale.<br>Pour le premier ordre : $0{,}95 = 1 - e^{-t/\\tau}$ donne<br>$$\\boxed{\\;t_{r,5\\%} = 3\\,\\tau\\;}$$<br>La <strong>rapidité</strong> est donc directement gouvernée par $\\tau$ : plus $\\tau$ est petit, plus le système est rapide.` },
        { type:'form', label:'FORM', titre:'Réponse fréquentielle du 1er ordre',
          contenu:`En régime harmonique, on remplace $p$ par $j\\omega$ :<br>$$H(j\\omega) = \\frac{K}{1 + j\\tau\\omega}$$<br>Gain : $|H(j\\omega)| = \\dfrac{K}{\\sqrt{1 + (\\tau\\omega)^2}}$, phase : $\\varphi = -\\arctan(\\tau\\omega)$.<br>La <strong>pulsation de coupure</strong> est $\\omega_c = 1/\\tau$ : à cette pulsation, le gain est divisé par $\\sqrt 2$ (chute de $-3$ dB) et la phase vaut $-45°$. C'est un filtre <strong>passe-bas</strong>.` },
      ]
    },

    {
      titre: 'Système du second ordre — définitions',
      cartes: [
        { type:'def', label:'DEF', titre:'Forme canonique du 2e ordre',
          contenu:`Un <strong>système du second ordre</strong> a pour fonction de transfert canonique :<br>$$H(p) = \\frac{K}{1 + \\dfrac{2\\xi}{\\omega_0}\\,p + \\dfrac{1}{\\omega_0^2}\\,p^2}$$<br>avec :<br><ul><li>$K$ : <strong>gain statique</strong> ;</li><li>$\\omega_0 > 0$ : <strong>pulsation propre</strong> (non amortie) ;</li><li>$\\xi \\ge 0$ (ou $z$, $m$) : <strong>coefficient d'amortissement</strong> (sans dimension).</li></ul>` },
        { type:'prop', label:'PROP', titre:'Nature des pôles selon l\'amortissement',
          contenu:`Le dénominateur $p^2 + 2\\xi\\omega_0 p + \\omega_0^2$ a un discriminant de signe celui de $\\xi^2 - 1$ :<br><ul><li>$\\xi > 1$ : deux pôles <strong>réels</strong> distincts → régime <strong>apériodique</strong> (deux 1ers ordres) ;</li><li>$\\xi = 1$ : pôle double réel $-\\omega_0$ → régime <strong>critique</strong> (le plus rapide sans dépassement) ;</li><li>$0 < \\xi < 1$ : pôles <strong>complexes conjugués</strong> $-\\xi\\omega_0 \\pm j\\omega_0\\sqrt{1 - \\xi^2}$ → régime <strong>pseudo-périodique</strong> (oscillations amorties) ;</li><li>$\\xi = 0$ : pôles imaginaires purs → oscillations <strong>entretenues</strong>.</li></ul>` },
        { type:'def', label:'DEF', titre:'Pseudo-pulsation et pseudo-période',
          contenu:`En régime pseudo-périodique ($0 < \\xi < 1$), la sortie oscille à la <strong>pseudo-pulsation</strong> :<br>$$\\omega_p = \\omega_0\\sqrt{1 - \\xi^2}$$<br>de <strong>pseudo-période</strong> $T_p = \\dfrac{2\\pi}{\\omega_p}$. Les oscillations sont enveloppées par $e^{-\\xi\\omega_0 t}$ : leur amplitude décroît exponentiellement, d'autant plus vite que $\\xi\\omega_0$ (partie réelle des pôles) est grand.` },
      ]
    },

    {
      titre: 'Réponse indicielle du 2e ordre',
      cartes: [
        { type:'form', label:'FORM', titre:'Premier dépassement',
          contenu:`En régime pseudo-périodique ($0 < \\xi < 1$), la réponse indicielle <strong>dépasse</strong> sa valeur finale. Le <strong>premier dépassement relatif</strong> ne dépend que de $\\xi$ :<br>$$\\boxed{\\;D_1\\% = 100 \\, \\exp\\!\\left(\\frac{-\\pi\\,\\xi}{\\sqrt{1 - \\xi^2}}\\right)\\;}$$<br>Il est atteint à l'instant $t_{pic} = \\dfrac{\\pi}{\\omega_p} = \\dfrac{\\pi}{\\omega_0\\sqrt{1-\\xi^2}}$. Valeurs repères : $\\xi = 0{,}7 \\Rightarrow D_1 \\approx 5\\%$ ; $\\xi = 0{,}43 \\Rightarrow D_1 \\approx 23\\%$.` },
        { type:'prop', label:'PROP', titre:'Temps de réponse à 5 % et amortissement optimal',
          contenu:`Le temps de réponse à 5 % réduit $\\omega_0\\, t_{r,5\\%}$ passe par un <strong>minimum</strong> pour :<br>$$\\xi \\approx 0{,}69 \\;(\\text{souvent arrondi à } 0{,}7),\\qquad \\omega_0\\, t_{r,5\\%} \\approx 3.$$<br>C'est l'<strong>amortissement optimal</strong> : il réalise le meilleur compromis rapidité / dépassement (dépassement de l'ordre de 5 %). Pour $\\xi \\ge 1$ (apériodique), le système est plus lent ; on lit $t_{r,5\\%}$ sur des <strong>abaques</strong> $\\omega_0 t_r = f(\\xi)$.` },
        { type:'prop', label:'PROP', titre:'Tangente à l\'origine et pente nulle',
          contenu:`Contrairement au premier ordre, la réponse indicielle du second ordre démarre avec une <strong>tangente horizontale</strong> (pente nulle à l'origine) :<br>$$s'(0^+) = 0.$$<br>C'est la signature graphique d'un système d'ordre $\\ge 2$ : la sortie « part doucement » (inertie). Cette propriété permet de <strong>distinguer visuellement</strong> un premier ordre (pente initiale non nulle) d'un second ordre.` },
        { type:'ex', label:'EX', titre:'Lire ξ et ω₀ sur une réponse indicielle',
          contenu:`<strong>Énoncé</strong> : une réponse indicielle présente un premier dépassement de $16\\%$ atteint à $t_{pic} = 0{,}30$ s. Identifier $\\xi$ et $\\omega_0$.<br><strong>Résolution</strong> : de $D_1 = 16\\%$, on inverse $\\ln(0{,}16) = -\\dfrac{\\pi\\xi}{\\sqrt{1-\\xi^2}}$ → $\\xi \\approx 0{,}5$.<br>Puis $t_{pic} = \\dfrac{\\pi}{\\omega_0\\sqrt{1-\\xi^2}}$ donne $\\omega_0 = \\dfrac{\\pi}{t_{pic}\\sqrt{1 - 0{,}25}} = \\dfrac{\\pi}{0{,}30 \\times 0{,}866} \\approx 12{,}1$ rad/s.` },
      ]
    },

    {
      titre: 'Réponse fréquentielle du 2e ordre',
      cartes: [
        { type:'form', label:'FORM', titre:'Gain et phase harmoniques',
          contenu:`En posant $p = j\\omega$ et $x = \\omega/\\omega_0$ :<br>$$H(j\\omega) = \\frac{K}{1 - x^2 + 2j\\xi x}$$<br>Module : $|H| = \\dfrac{K}{\\sqrt{(1 - x^2)^2 + (2\\xi x)^2}}$. Phase : $\\varphi = -\\arctan\\!\\left(\\dfrac{2\\xi x}{1 - x^2}\\right)$, allant de $0$ à $-180°$ (passage par $-90°$ en $\\omega = \\omega_0$). C'est un filtre passe-bas du 2e ordre.` },
        { type:'def', label:'DEF', titre:'Résonance et facteur de qualité',
          contenu:`Le gain présente une <strong>résonance</strong> (maximum > gain statique) si et seulement si :<br>$$\\xi < \\frac{1}{\\sqrt 2} \\approx 0{,}707.$$<br>La <strong>pulsation de résonance</strong> est $\\omega_r = \\omega_0\\sqrt{1 - 2\\xi^2}$ et le <strong>facteur de résonance</strong> (surtension) $Q = \\dfrac{|H(\\omega_r)|}{K} = \\dfrac{1}{2\\xi\\sqrt{1 - \\xi^2}}$.<br>Pour $\\xi \\ge 1/\\sqrt2$ : pas de résonance, le gain décroît dès $\\omega = 0$.` },
        { type:'prop', label:'PROP', titre:'Asymptotes à haute fréquence',
          contenu:`À <strong>haute fréquence</strong> ($\\omega \\gg \\omega_0$), $|H| \\sim \\dfrac{K\\,\\omega_0^2}{\\omega^2}$ : le gain décroît en <strong>$-40$ dB/décade</strong> (pente double de celle du 1er ordre) et la phase tend vers $-180°$.<br>À <strong>basse fréquence</strong> ($\\omega \\ll \\omega_0$), $|H| \\to K$ (gain statique) et $\\varphi \\to 0$. La cassure se produit autour de $\\omega_0$.` },
      ]
    },

    {
      titre: 'Identification des paramètres',
      cartes: [
        { type:'meth', label:'METH', titre:'Identifier un 1er ordre',
          contenu:`Depuis une <strong>réponse indicielle</strong> mesurée à un échelon $E_0$ :<br><strong>1.</strong> Lire la <strong>valeur finale</strong> $s_\\infty$ → gain $K = s_\\infty / E_0$.<br><strong>2.</strong> Lire $\\tau$ par l'une des méthodes : abscisse à $63\\%$ de $s_\\infty$, ou intersection de la <strong>tangente à l'origine</strong> avec l'asymptote, ou $\\tau = t_{r,5\\%}/3$.<br><strong>3.</strong> Vérifier la cohérence : pente initiale non nulle (sinon ordre supérieur).` },
        { type:'meth', label:'METH', titre:'Identifier un 2e ordre pseudo-périodique',
          contenu:`<strong>1.</strong> Gain : $K = s_\\infty/E_0$.<br><strong>2.</strong> Mesurer le <strong>premier dépassement</strong> $D_1$ → en déduire $\\xi$ par $D_1 = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}}$ (ou abaque).<br><strong>3.</strong> Mesurer la <strong>pseudo-période</strong> $T_p$ (entre deux dépassements) → $\\omega_p = 2\\pi/T_p$ puis $\\omega_0 = \\dfrac{\\omega_p}{\\sqrt{1 - \\xi^2}}$.<br><strong>4.</strong> Recouper avec $t_{pic}$ ou $t_{r,5\\%}$.` },
        { type:'ex', label:'EX', titre:'Identification complète d\'un 1er ordre',
          contenu:`<strong>Énoncé</strong> : échelon d'entrée $4$ V, sortie qui se stabilise à $10$ V et passe par $6{,}3$ V à $t = 0{,}2$ s. Donner $H(p)$.<br><strong>Résolution</strong> : gain $K = 10/4 = 2{,}5$. La sortie atteint $63\\%$ de $10$ V (soit $6{,}3$ V) à $t = \\tau$, donc $\\tau = 0{,}2$ s.<br>$$H(p) = \\frac{2{,}5}{1 + 0{,}2\\,p}.$$<br>Vérification : $t_{r,5\\%} = 3\\tau = 0{,}6$ s ; pulsation de coupure $\\omega_c = 1/\\tau = 5$ rad/s.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 5. RÉPONSE FRÉQUENTIELLE — DIAGRAMMES DE BODE
// ══════════════════════════════════════════════════════════════
{
  id: 'si-bode', matiere: 'si',
  titre: 'Réponse fréquentielle — Diagrammes de Bode', ordre: 5, enrich: true,
  sections: [

    {
      titre: 'Réponse harmonique',
      cartes: [
        { type:'th', label:'THM', titre:'Régime sinusoïdal forcé',
          contenu:`Pour un SLCI <strong>stable</strong> soumis à $e(t) = E_0\\cos(\\omega t)$, la sortie en régime permanent est sinusoïdale de <strong>même pulsation</strong> :<br>$$s(t) = E_0\\,|H(j\\omega)|\\,\\cos\\big(\\omega t + \\arg H(j\\omega)\\big)$$<br>On obtient la <strong>transmittance harmonique</strong> $H(j\\omega)$ en remplaçant $p$ par $j\\omega$ dans $H(p)$. Le système agit comme un <strong>filtre</strong> : il modifie l'amplitude (gain) et la phase selon $\\omega$.` },
        { type:'def', label:'DEF', titre:'Gain en décibels et phase',
          contenu:`On caractérise la réponse harmonique par deux courbes en fonction de $\\omega$ (échelle log) :<br><ul><li>le <strong>gain en décibels</strong> : $G_{dB}(\\omega) = 20\\log_{10}|H(j\\omega)|$ ;</li><li>la <strong>phase</strong> : $\\varphi(\\omega) = \\arg H(j\\omega)$ (en degrés).</li></ul>Le facteur $20$ (et non $10$) vient de ce que le décibel s'applique à un rapport de <strong>puissances</strong> ($\\propto$ amplitude$^2$). Une multiplication du gain par $10$ ajoute $+20$ dB.` },
        { type:'prop', label:'PROP', titre:'Avantage du logarithme : produits → sommes',
          contenu:`Le logarithme transforme les <strong>produits en sommes</strong>. Pour une FTBO en cascade $H = H_1 H_2 \\dots$ :<br>$$G_{dB} = \\sum_i 20\\log_{10}|H_i|, \\qquad \\varphi = \\sum_i \\arg H_i$$<br>On trace donc le diagramme de Bode global en <strong>additionnant</strong> les diagrammes élémentaires (gain intégrateur, 1er ordre, 2e ordre...). C'est tout l'intérêt de l'échelle log/dB.` },
      ]
    },

    {
      titre: 'Diagrammes de Bode des termes élémentaires',
      cartes: [
        { type:'form', label:'FORM', titre:'Gain pur et intégrateur',
          contenu:`<ul><li><strong>Gain constant</strong> $K$ : $G_{dB} = 20\\log_{10}|K|$ (droite horizontale), $\\varphi = 0$ (ou $-180°$ si $K<0$).</li><li><strong>Intégrateur</strong> $\\dfrac{1}{p}$ : $G_{dB} = -20\\log_{10}\\omega$, droite de pente <strong>$-20$ dB/décade</strong> passant par $0$ dB en $\\omega = 1$ ; $\\varphi = -90°$ (constant).</li><li><strong>Dérivateur</strong> $p$ : pente $+20$ dB/déc, $\\varphi = +90°$.</li></ul>` },
        { type:'form', label:'FORM', titre:'Diagramme asymptotique du 1er ordre',
          contenu:`Pour $H(p) = \\dfrac{K}{1 + \\tau p}$, avec $\\omega_c = 1/\\tau$ :<br><strong>Gain</strong> :<br><ul><li>$\\omega \\ll \\omega_c$ : asymptote horizontale à $20\\log_{10}|K|$ ;</li><li>$\\omega \\gg \\omega_c$ : asymptote de pente $-20$ dB/déc ;</li><li>en $\\omega = \\omega_c$ : écart réel $-3$ dB sous l'asymptote.</li></ul><strong>Phase</strong> : de $0°$ à $-90°$, valant $-45°$ en $\\omega_c$ (transition sur ~2 décades).` },
        { type:'form', label:'FORM', titre:'Diagramme asymptotique du 2e ordre',
          contenu:`Pour $H(p) = \\dfrac{K}{1 + \\frac{2\\xi}{\\omega_0}p + \\frac{1}{\\omega_0^2}p^2}$ :<br><strong>Gain</strong> : asymptote horizontale à $20\\log|K|$ pour $\\omega \\ll \\omega_0$, puis pente <strong>$-40$ dB/déc</strong> au-delà de $\\omega_0$. Si $\\xi < 1/\\sqrt2$, <strong>bosse de résonance</strong> au voisinage de $\\omega_0$ d'autant plus marquée que $\\xi$ est faible.<br><strong>Phase</strong> : de $0°$ à $-180°$, valant <strong>$-90°$ en $\\omega_0$</strong> (quel que soit $\\xi$).` },
        { type:'meth', label:'METH', titre:'Tracer un diagramme de Bode asymptotique',
          contenu:`<strong>1.</strong> Mettre $H(p)$ sous forme canonique ; identifier $K$, la classe, les pulsations de cassure $\\omega_i = 1/\\tau_i$ et $\\omega_0$.<br><strong>2.</strong> Tracer le terme <strong>basse fréquence</strong> ($K$ et intégrateurs) : pente $-20\\alpha$ dB/déc, position en $\\omega = 1$.<br><strong>3.</strong> À chaque pulsation de cassure, <strong>ajouter</strong> la pente du terme correspondant ($-20$ par 1er ordre, $-40$ par 2e ordre au dénom.).<br><strong>4.</strong> Sommer les phases ; corriger aux cassures ($-3$ dB, bosse de résonance).` },
      ]
    },

    {
      titre: 'Plans de Black et de Nyquist',
      cartes: [
        { type:'def', label:'DEF', titre:'Diagramme de Nyquist',
          contenu:`Le <strong>diagramme de Nyquist</strong> est le lieu de $H(j\\omega)$ dans le <strong>plan complexe</strong> lorsque $\\omega$ varie de $0$ à $+\\infty$. On reporte $\\mathrm{Re}(H)$ en abscisse et $\\mathrm{Im}(H)$ en ordonnée.<br>C'est une courbe paramétrée par $\\omega$. La position relative au <strong>point critique $(-1, 0)$</strong> renseigne sur la stabilité du système bouclé (critère de Nyquist).` },
        { type:'def', label:'DEF', titre:'Diagramme de Black-Nichols',
          contenu:`Le <strong>diagramme de Black</strong> (ou Black-Nichols) trace le <strong>gain en dB en ordonnée</strong> en fonction de la <strong>phase en degrés en abscisse</strong>, paramétré par $\\omega$.<br>Il réunit en une seule courbe les informations des deux diagrammes de Bode. Le <strong>point critique</strong> y est $(-180°, 0\\,\\text{dB})$. Les marges de stabilité s'y lisent directement, ainsi que les contours d'iso-gain en boucle fermée (abaque de Nichols).` },
        { type:'prop', label:'PROP', titre:'Critère du revers',
          contenu:`Énoncé pratique de stabilité pour une FTBO stable en boucle ouverte (critère du <strong>revers</strong>) : le système bouclé est <strong>stable</strong> si, en parcourant le lieu de la FTBO dans le sens des $\\omega$ croissants, on laisse le <strong>point critique</strong> <strong>à droite</strong>.<br><ul><li>Bode : au passage à $-180°$ de phase, le gain doit être $< 0$ dB ;</li><li>Black : la courbe passe à droite du point $(-180°, 0\\,\\text{dB})$.</li></ul>` },
      ]
    },

    {
      titre: 'Marges de stabilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Marge de gain',
          contenu:`La <strong>marge de gain</strong> $M_G$ se mesure à la pulsation $\\omega_{180}$ où la <strong>phase de la FTBO vaut $-180°$</strong> :<br>$$M_G = -\\,G_{dB}(\\omega_{180}) = -20\\log_{10}|\\mathrm{FTBO}(j\\omega_{180})|$$<br>C'est le gain (en dB) que l'on peut encore <strong>ajouter</strong> avant que le système ne devienne instable. Un système stable a $M_G > 0$. Valeur de conception courante : $M_G \\ge 10$ à $12$ dB.` },
        { type:'def', label:'DEF', titre:'Marge de phase',
          contenu:`La <strong>marge de phase</strong> $M_\\varphi$ se mesure à la pulsation $\\omega_{c0}$ de <strong>gain unité</strong> (gain de la FTBO $= 0$ dB) :<br>$$M_\\varphi = 180° + \\varphi(\\omega_{c0})$$<br>(avec $\\varphi(\\omega_{c0})$ négatif). C'est le retard de phase supplémentaire admissible avant instabilité. Valeur de conception courante : $M_\\varphi \\ge 45°$. La marge de phase est <strong>liée au dépassement</strong> de la boucle fermée (règle approchée : $\\xi \\approx M_\\varphi/100$).` },
        { type:'prop', label:'PROP', titre:'Bande passante',
          contenu:`La <strong>bande passante à $-3$ dB</strong> de la boucle fermée est l'intervalle de pulsations où $|\\mathrm{FTBF}(j\\omega)|$ reste au-dessus de $|\\mathrm{FTBF}(0)| - 3$ dB.<br>Elle conditionne la <strong>rapidité</strong> : plus la bande passante $\\omega_{bp}$ est large, plus le système suit des consignes rapides (règle approchée $\\omega_{bp}\\, t_{r} \\approx$ const). Pour un retour unitaire, $\\omega_{bp}$ est de l'ordre de la <strong>pulsation de coupure à $0$ dB $\\omega_{c0}$</strong> de la FTBO.` },
        { type:'ex', label:'EX', titre:'Lire les marges sur un Bode de FTBO',
          contenu:`<strong>Énoncé</strong> : sur le Bode de la FTBO, la phase atteint $-180°$ à $\\omega_{180} = 20$ rad/s où le gain vaut $-8$ dB ; le gain coupe $0$ dB à $\\omega_{c0} = 8$ rad/s où la phase vaut $-130°$. Conclure.<br><strong>Résolution</strong> : marge de gain $M_G = -(-8) = 8$ dB ($>0$, stable mais un peu juste). Marge de phase $M_\\varphi = 180° - 130° = 50°$ (confortable, $\\ge 45°$). Le système est <strong>stable</strong>, dépassement modéré attendu ($\\xi \\approx 0{,}5$).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 6. MÉTHODES NUMÉRIQUES
// ══════════════════════════════════════════════════════════════
{
  id: 'si-num', matiere: 'si',
  titre: 'Méthodes numériques', ordre: 6, enrich: true,
  sections: [

    {
      titre: 'Résolution numérique d\'équations différentielles',
      cartes: [
        { type:'def', label:'DEF', titre:'Problème de Cauchy et discrétisation',
          contenu:`On cherche $y(t)$ vérifiant $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = f(t, y)$ avec $y(t_0) = y_0$ (<strong>problème de Cauchy</strong>).<br>La résolution numérique <strong>discrétise</strong> le temps : $t_n = t_0 + n h$, où $h$ est le <strong>pas</strong>. On construit une suite $(y_n)$ approchant $y(t_n)$, par une <strong>relation de récurrence</strong> qui remplace l'équation différentielle par une équation aux différences.` },
        { type:'form', label:'FORM', titre:'Schéma d\'Euler explicite',
          contenu:`Le <strong>schéma d'Euler explicite</strong> approche la dérivée par un taux d'accroissement à droite :<br>$$y_{n+1} = y_n + h\\, f(t_n,\\, y_n)$$<br>Il est <strong>explicite</strong> ($y_{n+1}$ se calcule directement à partir de $y_n$). Géométriquement, on avance le long de la <strong>tangente</strong> au point courant. C'est la méthode la plus simple, d'<strong>ordre 1</strong> : l'erreur globale est en $O(h)$.` },
        { type:'prop', label:'PROP', titre:'Erreur, ordre et stabilité numérique',
          contenu:`<ul><li>l'<strong>erreur de troncature locale</strong> d'Euler explicite est en $O(h^2)$ par pas, donc une <strong>erreur globale</strong> en $O(h)$ : diviser $h$ par 2 divise l'erreur par ~2 ;</li><li><strong>stabilité</strong> : sur $y' = -\\lambda y$ ($\\lambda > 0$), Euler explicite n'est stable que si $h < 2/\\lambda$. Un pas trop grand fait <strong>diverger</strong> la solution numérique alors que la solution exacte décroît.</li></ul>D'où l'intérêt de schémas d'ordre supérieur (Euler implicite, Runge-Kutta).` },
        { type:'meth', label:'METH', titre:'Système d\'ordre n → système du 1er ordre',
          contenu:`Pour appliquer Euler à une équation d'<strong>ordre $n$</strong>, on la met sous forme d'un <strong>système du premier ordre</strong> en posant le vecteur d'état.<br>Exemple ordre 2 $\\ddot x = g(x, \\dot x, t)$ : poser $X_1 = x$, $X_2 = \\dot x$ :<br>$$\\begin{cases} \\dot X_1 = X_2 \\\\ \\dot X_2 = g(X_1, X_2, t) \\end{cases}$$<br>puis appliquer Euler à <strong>chaque</strong> composante : $X_{1,n+1} = X_{1,n} + h X_{2,n}$, $X_{2,n+1} = X_{2,n} + h\\, g(\\dots)$.` },
      ]
    },

    {
      titre: 'Schémas d\'intégration améliorés',
      cartes: [
        { type:'form', label:'FORM', titre:'Euler implicite et point milieu',
          contenu:`<strong>Euler implicite</strong> : $y_{n+1} = y_n + h\\, f(t_{n+1}, y_{n+1})$. La pente est évaluée à l'arrivée ; il faut <strong>résoudre une équation</strong> en $y_{n+1}$ (d'où « implicite »). Avantage : <strong>inconditionnellement stable</strong> pour $y' = -\\lambda y$.<br><strong>Point milieu</strong> (ordre 2) : on évalue la pente au milieu de l'intervalle, $y_{n+1} = y_n + h\\, f\\!\\left(t_n + \\frac h2,\\, y_n + \\frac h2 f(t_n, y_n)\\right)$.` },
        { type:'def', label:'DEF', titre:'Méthode de Runge-Kutta d\'ordre 4',
          contenu:`La méthode <strong>RK4</strong> combine quatre évaluations de pente pour une précision d'<strong>ordre 4</strong> (erreur globale $O(h^4)$) :<br>$$y_{n+1} = y_n + \\frac{h}{6}\\,(k_1 + 2k_2 + 2k_3 + k_4)$$<br>avec $k_1 = f(t_n, y_n)$, $k_2 = f(t_n + \\frac h2, y_n + \\frac h2 k_1)$, $k_3 = f(t_n + \\frac h2, y_n + \\frac h2 k_2)$, $k_4 = f(t_n + h, y_n + h k_3)$. C'est le schéma de référence (bon compromis précision/coût), utilisé par les solveurs (ex. <code>odeint</code>, <code>solve_ivp</code>).` },
        { type:'ex', label:'EX', titre:'Euler explicite sur un 1er ordre',
          contenu:`<strong>Énoncé</strong> : simuler $\\tau y' + y = K$ ($y(0) = 0$, $\\tau = 1$, $K = 1$), pas $h = 0{,}1$. Donner $y_1, y_2$.<br><strong>Résolution</strong> : $y' = (K - y)/\\tau = 1 - y$. Euler : $y_{n+1} = y_n + h(1 - y_n)$.<br>$y_1 = 0 + 0{,}1\\times(1 - 0) = 0{,}1$ ; $y_2 = 0{,}1 + 0{,}1\\times(1 - 0{,}1) = 0{,}19$.<br>La solution exacte $y(t) = 1 - e^{-t}$ donne $y(0{,}2) \\approx 0{,}181$ : l'écart traduit l'erreur d'ordre 1 du schéma.` },
      ]
    },

    {
      titre: 'Résolution numérique d\'équations',
      cartes: [
        { type:'meth', label:'METH', titre:'Méthode de dichotomie',
          contenu:`Pour résoudre $g(x) = 0$ sur $[a, b]$ avec $g$ continue et $g(a)\\,g(b) < 0$ (<strong>changement de signe</strong>) :<br><strong>1.</strong> Calculer le milieu $m = (a+b)/2$.<br><strong>2.</strong> Si $g(a)\\,g(m) < 0$, la racine est dans $[a, m]$ : poser $b \\leftarrow m$ ; sinon $a \\leftarrow m$.<br><strong>3.</strong> Répéter jusqu'à $b - a < \\varepsilon$.<br>L'intervalle est <strong>divisé par 2</strong> à chaque étape : convergence <strong>linéaire</strong>, environ $\\log_2((b-a)/\\varepsilon)$ itérations. Robuste mais lente.` },
        { type:'form', label:'FORM', titre:'Méthode de Newton',
          contenu:`La <strong>méthode de Newton</strong> (tangente) construit la suite :<br>$$x_{n+1} = x_n - \\frac{g(x_n)}{g'(x_n)}$$<br>On remplace localement $g$ par sa tangente et on prend l'abscisse de son zéro. Convergence <strong>quadratique</strong> (le nombre de décimales exactes double à chaque itération) <strong>si</strong> on part assez près de la racine et $g'(x_n) \\ne 0$. Beaucoup plus rapide que la dichotomie, mais peut <strong>diverger</strong> si l'initialisation est mauvaise.` },
        { type:'prop', label:'PROP', titre:'Comparaison dichotomie / Newton',
          contenu:`<ul><li><strong>Dichotomie</strong> : convergence garantie (sous changement de signe), lente (linéaire), n'utilise pas la dérivée.</li><li><strong>Newton</strong> : convergence rapide (quadratique) mais locale ; nécessite $g'$ ; sensible au point de départ.</li></ul>Stratégie robuste : <strong>dichotomie</strong> pour localiser grossièrement la racine, puis <strong>Newton</strong> pour raffiner. C'est l'esprit des solveurs hybrides (méthode de Brent).` },
        { type:'ex', label:'EX', titre:'Newton sur √2',
          contenu:`<strong>Énoncé</strong> : approcher $\\sqrt 2$, racine de $g(x) = x^2 - 2$, par Newton depuis $x_0 = 2$.<br><strong>Résolution</strong> : $g'(x) = 2x$, donc $x_{n+1} = x_n - \\dfrac{x_n^2 - 2}{2 x_n} = \\dfrac12\\left(x_n + \\dfrac{2}{x_n}\\right)$.<br>$x_1 = \\frac12(2 + 1) = 1{,}5$ ; $x_2 = \\frac12(1{,}5 + 1{,}333) = 1{,}41\\overline{6}$ ; $x_3 \\approx 1{,}41422$. Trois itérations suffisent pour 5 décimales : convergence quadratique.` },
      ]
    },

    {
      titre: 'Interpolation et dérivation numérique',
      cartes: [
        { type:'def', label:'DEF', titre:'Interpolation linéaire',
          contenu:`Entre deux points connus $(x_0, y_0)$ et $(x_1, y_1)$, l'<strong>interpolation linéaire</strong> estime une valeur intermédiaire :<br>$$y(x) = y_0 + (x - x_0)\\,\\frac{y_1 - y_0}{x_1 - x_0}$$<br>C'est l'équation de la <strong>corde</strong>. Très utilisée pour exploiter des <strong>relevés expérimentaux</strong> tabulés (caractéristique capteur, courbe de rendement) ou lire une valeur entre deux points d'un abaque.` },
        { type:'form', label:'FORM', titre:'Dérivation numérique (différences finies)',
          contenu:`On approche une dérivée à partir d'échantillons espacés de $h$ :<br><ul><li><strong>différence avant</strong> : $f'(x) \\approx \\dfrac{f(x+h) - f(x)}{h}$ (ordre 1) ;</li><li><strong>différence centrée</strong> : $f'(x) \\approx \\dfrac{f(x+h) - f(x-h)}{2h}$ (ordre 2, plus précise) ;</li><li><strong>dérivée seconde</strong> : $f''(x) \\approx \\dfrac{f(x+h) - 2f(x) + f(x-h)}{h^2}$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Compromis pas / bruit',
          contenu:`En dérivation numérique, <strong>réduire $h$</strong> diminue l'erreur de <strong>troncature</strong> (modèle), mais <strong>amplifie</strong> l'erreur d'<strong>arrondi</strong> et le <strong>bruit</strong> de mesure (on divise par un petit nombre la différence de deux valeurs proches et bruitées).<br>Il existe donc un <strong>pas optimal</strong> : trop grand, le modèle est faux ; trop petit, le bruit domine. En pratique, on <strong>filtre</strong> ou on <strong>lisse</strong> le signal avant de dériver.` },
      ]
    },

    {
      titre: 'Application aux systèmes asservis simulés',
      cartes: [
        { type:'meth', label:'METH', titre:'Simuler une boucle d\'asservissement',
          contenu:`Pour simuler un système bouclé par Euler :<br><strong>1.</strong> Écrire l'équation différentielle du système à partir de sa fonction de transfert (ou la mettre sous forme d'état).<br><strong>2.</strong> À chaque pas $t_n$ : calculer l'<strong>écart</strong> $\\varepsilon_n = e_n - s_n$, puis la <strong>commande</strong> du correcteur $u_n = C(\\varepsilon_n)$.<br><strong>3.</strong> Intégrer l'état du procédé par Euler avec $u_n$ en entrée → $s_{n+1}$.<br><strong>4.</strong> Itérer et tracer $s(t)$, comparer au cahier des charges (dépassement, $t_{r,5\\%}$).` },
        { type:'form', label:'FORM', titre:'Discrétisation d\'un correcteur PID',
          contenu:`Le correcteur PID continu $u(t) = K_p\\varepsilon + K_i\\!\\int\\!\\varepsilon\\,\\mathrm{d}t + K_d\\,\\dot\\varepsilon$ se discrétise au pas $h$ :<br><ul><li>intégrale : $I_n = I_{n-1} + h\\,\\varepsilon_n$ (somme cumulée, méthode des rectangles) ;</li><li>dérivée : $D_n = \\dfrac{\\varepsilon_n - \\varepsilon_{n-1}}{h}$ (différence arrière).</li></ul>$$u_n = K_p\\,\\varepsilon_n + K_i\\, I_n + K_d\\, D_n$$<br>C'est la forme implantée dans un microcontrôleur (à la période d'échantillonnage $h = T_e$).` },
        { type:'ex', label:'EX', titre:'Influence du pas sur la simulation',
          contenu:`<strong>Énoncé</strong> : on simule un 2e ordre $\\omega_0 = 100$ rad/s par Euler explicite. Quelle contrainte sur $h$ ?<br><strong>Résolution</strong> : la pseudo-période est $T_p \\approx 2\\pi/\\omega_0 \\approx 63$ ms. Il faut <strong>plusieurs dizaines de points par période</strong> pour décrire les oscillations, et respecter la stabilité numérique : on choisit $h \\ll 1/\\omega_0 = 10$ ms, par exemple $h = 0{,}5$ ms. Un pas trop grand <strong>fausse</strong> le dépassement, voire fait <strong>diverger</strong> la simulation (instabilité du schéma, pas du système réel).` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 7. CORRECTEURS
// ══════════════════════════════════════════════════════════════
{
  id: 'si-correcteurs', matiere: 'si',
  titre: 'Correcteurs', ordre: 7, enrich: true,
  sections: [

    {
      titre: 'Objectifs de la correction',
      cartes: [
        { type:'def', label:'DEF', titre:'Rôle du correcteur',
          contenu:`Un <strong>correcteur</strong> (de fonction de transfert $C(p)$) est inséré dans la <strong>chaîne directe</strong>, en général juste après le comparateur, pour <strong>élaborer la commande</strong> à partir de l'écart $\\varepsilon$ :<br>$$U(p) = C(p)\\,\\varepsilon(p)$$<br>Il modifie la FTBO ($\\mathrm{FTBO} = C\\,H\\,K_r$) afin que la boucle fermée satisfasse le <strong>cahier des charges</strong> en stabilité, précision et rapidité.` },
        { type:'prop', label:'PROP', titre:'Les trois performances visées',
          contenu:`Un asservissement doit concilier <strong>trois exigences</strong> souvent antagonistes :<br><ul><li><strong>Stabilité</strong> : la sortie ne diverge pas, oscillations amorties → marges de gain/phase suffisantes ;</li><li><strong>Précision</strong> : l'écart en régime permanent est faible (erreurs statique et de traînage) ;</li><li><strong>Rapidité</strong> : temps de réponse court, bande passante large.</li></ul>Corriger consiste à <strong>déformer la FTBO</strong> pour trouver le meilleur <strong>compromis</strong>.` },
        { type:'prop', label:'PROP', titre:'Dilemme stabilité-précision',
          contenu:`<strong>Augmenter le gain</strong> de boucle améliore la <strong>précision</strong> (réduit les erreurs) et la <strong>rapidité</strong>, mais <strong>dégrade la stabilité</strong> (réduit les marges, augmente le dépassement).<br>Inversement, ajouter un <strong>intégrateur</strong> annule l'erreur statique mais <strong>déphase de $-90°$</strong> (déstabilise). Tout l'art de la correction est de gagner sur un critère sans trop perdre sur les autres → correcteurs combinés (PI, PID, avance de phase).` },
      ]
    },

    {
      titre: 'Correcteurs élémentaires P, I, D',
      cartes: [
        { type:'def', label:'DEF', titre:'Correcteur proportionnel (P)',
          contenu:`Le <strong>correcteur proportionnel</strong> : $C(p) = K_p$.<br>Il <strong>multiplie l'écart</strong> par un gain constant. Effets :<br><ul><li>$\\nearrow K_p$ → <strong>diminue l'erreur</strong> statique (sans l'annuler pour une classe 0) et <strong>accélère</strong> le système ;</li><li>mais <strong>réduit les marges</strong> de stabilité et <strong>augmente le dépassement</strong>.</li></ul>Ne modifie <strong>pas la phase</strong> (translation verticale du gain dans Bode). Seul, il ne peut annuler l'erreur statique.` },
        { type:'def', label:'DEF', titre:'Correcteur intégral (I)',
          contenu:`Le <strong>correcteur intégral</strong> : $C(p) = \\dfrac{K_i}{p}$ (souvent écrit $\\dfrac{1}{T_i p}$).<br>Il <strong>ajoute un intégrateur</strong> (augmente la classe de 1) :<br><ul><li>avantage : <strong>annule l'erreur statique</strong> (précision parfaite en régime permanent pour un échelon) ;</li><li>inconvénient : <strong>déphasage de $-90°$</strong> sur toute la bande → <strong>déstabilisant</strong>, ralentit la réponse.</li></ul>Rarement utilisé seul ; on l'associe au proportionnel (PI).` },
        { type:'def', label:'DEF', titre:'Correcteur dérivé (D)',
          contenu:`Le <strong>correcteur dérivé</strong> : $C(p) = K_d\\, p$.<br>Il <strong>anticipe</strong> en réagissant à la <strong>vitesse de variation</strong> de l'écart :<br><ul><li>avantage : <strong>déphasage de $+90°$</strong> → <strong>stabilisant</strong>, amortit, réduit le dépassement, accélère ;</li><li>inconvénient : <strong>amplifie le bruit</strong> haute fréquence (gain $\\propto \\omega$), non réalisable seul.</li></ul>On l'utilise toujours <strong>filtré</strong> ($\\frac{K_d p}{1 + \\tau_d p}$) et combiné (PD, PID).` },
        { type:'prop', label:'PROP', titre:'Synthèse des effets (mémo)',
          contenu:`<table><tr><td><strong>Action</strong></td><td><strong>Précision</strong></td><td><strong>Stabilité</strong></td><td><strong>Rapidité</strong></td></tr></table><ul><li><strong>P</strong> ($\\nearrow K_p$) : précision ↗, stabilité ↘, rapidité ↗ ;</li><li><strong>I</strong> : précision ↗↗ (erreur statique nulle), stabilité ↘, rapidité ↘ ;</li><li><strong>D</strong> : précision ≈, stabilité ↗ (amortit), rapidité ↗ ; mais sensible au bruit.</li></ul>` },
      ]
    },

    {
      titre: 'Correcteurs combinés PI et PID',
      cartes: [
        { type:'def', label:'DEF', titre:'Correcteur proportionnel-intégral (PI)',
          contenu:`Le <strong>correcteur PI</strong> combine P et I :<br>$$C(p) = K_p\\left(1 + \\frac{1}{T_i\\, p}\\right) = K_p\\,\\frac{1 + T_i p}{T_i p}$$<br>Il <strong>annule l'erreur statique</strong> (intégrateur) tout en limitant le ralentissement grâce au terme proportionnel et au <strong>zéro</strong> en $-1/T_i$.<br><strong>Réglage</strong> : placer le zéro $1/T_i$ <strong>bien en dessous</strong> de la pulsation de coupure pour ne pas dégrader la marge de phase. Correcteur le plus répandu en régulation industrielle.` },
        { type:'def', label:'DEF', titre:'Correcteur PID',
          contenu:`Le <strong>correcteur PID</strong> réunit les trois actions :<br>$$C(p) = K_p\\left(1 + \\frac{1}{T_i\\, p} + T_d\\, p\\right)$$<br>L'<strong>intégrale</strong> assure la précision (erreur statique nulle), la <strong>dérivée</strong> assure la stabilité et la rapidité (amortissement, anticipation), le <strong>proportionnel</strong> règle le niveau global.<br>C'est le correcteur le plus complet : il agit sur les <strong>trois performances</strong>. En pratique, le terme dérivé est <strong>filtré</strong> pour limiter la sensibilité au bruit.` },
        { type:'prop', label:'PROP', titre:'Forme parallèle et forme mixte',
          contenu:`Le PID admet plusieurs écritures équivalentes :<br><ul><li><strong>forme parallèle</strong> (additive) : $C(p) = K_p + \\dfrac{K_i}{p} + K_d\\, p$ ;</li><li><strong>forme mixte</strong> (standard ISA) : $C(p) = K_p\\left(1 + \\dfrac{1}{T_i p} + T_d p\\right)$, avec $K_i = K_p/T_i$ et $K_d = K_p T_d$.</li></ul>Les constantes $T_i$ (temps intégral) et $T_d$ (temps dérivé) ont la dimension d'un temps.` },
        { type:'meth', label:'METH', titre:'Régler un PID (principe)',
          contenu:`<strong>1.</strong> Régler $K_p$ pour la <strong>rapidité</strong> visée (pulsation de coupure $\\omega_{c0}$), en surveillant la marge de phase.<br><strong>2.</strong> Ajouter l'action <strong>I</strong> ($T_i$) pour annuler l'erreur statique, en plaçant le zéro <strong>une décade sous</strong> $\\omega_{c0}$ (préserver $M_\\varphi$).<br><strong>3.</strong> Ajouter l'action <strong>D</strong> ($T_d$) pour <strong>remonter la marge de phase</strong> autour de $\\omega_{c0}$ (amortir le dépassement).<br><strong>4.</strong> Vérifier sur la réponse indicielle simulée (dépassement, $t_{r,5\\%}$) et itérer.` },
      ]
    },

    {
      titre: 'Correcteur à avance de phase',
      cartes: [
        { type:'def', label:'DEF', titre:'Correcteur à avance de phase',
          contenu:`Le <strong>correcteur à avance de phase</strong> apporte un <strong>déphasage positif</strong> localisé (effet stabilisant proche du dérivé, sans amplifier autant le bruit) :<br>$$C(p) = K\\,\\frac{1 + a\\,\\tau\\, p}{1 + \\tau\\, p},\\qquad a > 1$$<br>Il possède un <strong>zéro</strong> en $-1/(a\\tau)$ et un <strong>pôle</strong> en $-1/\\tau$ (le zéro <em>avant</em> le pôle). Entre ces deux pulsations, la phase est positive : on l'utilise pour <strong>remonter la marge de phase</strong>.` },
        { type:'form', label:'FORM', titre:'Avance maximale et pulsation centrale',
          contenu:`L'<strong>avance de phase maximale</strong> ne dépend que de $a$ :<br>$$\\varphi_{max} = \\arcsin\\!\\left(\\frac{a - 1}{a + 1}\\right)$$<br>Elle est obtenue à la <strong>pulsation centrale</strong> (moyenne géométrique du zéro et du pôle) :<br>$$\\omega_m = \\frac{1}{\\tau\\sqrt a}$$<br>À cette pulsation, le gain apporté vaut $10\\log_{10} a$ dB. On choisit $a$ pour l'avance voulue, puis $\\tau$ pour centrer $\\omega_m$ sur la pulsation de coupure.` },
        { type:'meth', label:'METH', titre:'Régler une avance de phase',
          contenu:`<strong>1.</strong> Déterminer l'<strong>avance $\\Delta\\varphi$ manquante</strong> pour atteindre la marge de phase visée (avec une petite marge de sécurité).<br><strong>2.</strong> En déduire $a$ par $\\sin\\varphi_{max} = \\dfrac{a-1}{a+1}$.<br><strong>3.</strong> Placer $\\omega_m$ sur la nouvelle <strong>pulsation de coupure</strong> $\\omega_{c0}$ → $\\tau = \\dfrac{1}{\\omega_{c0}\\sqrt a}$.<br><strong>4.</strong> Ajuster le gain $K$ pour replacer $\\omega_{c0}$ (l'avance ajoute $+10\\log a$ dB). Vérifier les marges finales.` },
        { type:'prop', label:'PROP', titre:'Avance vs retard de phase',
          contenu:`<ul><li><strong>Avance de phase</strong> ($a > 1$) : remonte la phase autour de $\\omega_{c0}$ → améliore <strong>stabilité et rapidité</strong> (analogue à l'action D filtrée).</li><li><strong>Retard de phase</strong> ($a < 1$) : augmente le gain en <strong>basses fréquences</strong> → améliore la <strong>précision</strong> (erreurs réduites), sans toucher la coupure ; à utiliser loin de $\\omega_{c0}$ pour ne pas dégrader $M_\\varphi$ (analogue à l'action I).</li></ul>` },
      ]
    },

    {
      titre: 'Influence sur les performances — synthèse',
      cartes: [
        { type:'prop', label:'PROP', titre:'Lecture de l\'effet dans Bode',
          contenu:`Insérer un correcteur revient à <strong>déformer le diagramme de Bode de la FTBO</strong> :<br><ul><li>un <strong>gain</strong> translate verticalement la courbe de gain ;</li><li>un <strong>intégrateur</strong> baisse le gain BF avec pente $-20$ dB/déc et retire $90°$ ;</li><li>un <strong>zéro</strong> (avance) remonte gain et phase à partir de sa pulsation.</li></ul>On vise une FTBO qui coupe $0$ dB à la pulsation voulue avec une <strong>marge de phase $\\ge 45°$</strong>.` },
        { type:'ex', label:'EX', titre:'Choisir le correcteur selon le besoin',
          contenu:`<strong>Énoncé</strong> : un système de classe 0 présente une erreur statique de $8\\%$ et un dépassement de $40\\%$. Quel correcteur ?<br><strong>Résolution</strong> : l'erreur statique non nulle (classe 0) appelle un <strong>intégrateur</strong> → action <strong>I</strong> (ou PI) pour l'annuler. Le dépassement excessif révèle un manque d'amortissement → action <strong>D</strong> (ou avance de phase) pour remonter la marge de phase. Un <strong>PID</strong> (ou PI + avance de phase) traite simultanément précision et stabilité. On règle ensuite gains et constantes par simulation.` },
        { type:'ex', label:'EX', titre:'Effet d\'un PI sur l\'erreur statique',
          contenu:`<strong>Énoncé</strong> : FTBO initiale $\\dfrac{5}{(1 + p)(1 + 0{,}2p)}$ (classe 0). On ajoute un PI $C(p) = K_p\\dfrac{1 + T_i p}{T_i p}$. Effet sur l'erreur de position ?<br><strong>Résolution</strong> : sans correction, classe 0 → erreur statique $\\varepsilon_p = \\dfrac{1}{1 + K_v}$ avec $K_v = 5$, soit $\\varepsilon_p \\approx 17\\%$. Avec le PI, la FTBO devient de <strong>classe 1</strong> (intégrateur) → $K_v \\to \\infty$ et <strong>$\\varepsilon_p = 0$</strong> : l'erreur statique est annulée. Le zéro en $-1/T_i$ est placé bas pour préserver la stabilité.` },
      ]
    },

  ]
},

// ══════════════════════════════════════════════════════════════
// 8. PERFORMANCES DES SYSTÈMES ASSERVIS
// ══════════════════════════════════════════════════════════════
{
  id: 'si-asservi', matiere: 'si',
  titre: 'Performances des systèmes asservis', ordre: 8, enrich: true,
  sections: [

    {
      titre: 'Structure et grandeurs de l\'asservissement',
      cartes: [
        { type:'def', label:'DEF', titre:'Asservissement et régulation',
          contenu:`Un <strong>système asservi</strong> est un système bouclé qui <strong>compare en permanence</strong> sa sortie à une consigne et corrige l'écart.<br><ul><li><strong>Asservissement</strong> (suivi) : la consigne <strong>varie</strong>, la sortie doit la suivre (ex. position d'un bras robotisé).</li><li><strong>Régulation</strong> : la consigne est <strong>constante</strong>, il s'agit de rejeter les perturbations (ex. maintien d'une température).</li></ul>Dans les deux cas, la boucle fermée confère <strong>précision, robustesse et rejet de perturbation</strong>.` },
        { type:'def', label:'DEF', titre:'Écart et signal d\'erreur',
          contenu:`Le <strong>signal d'écart</strong> (ou d'erreur) en sortie du comparateur est :<br>$$\\varepsilon(p) = E(p) - R(p) = E(p) - K_r(p)\\,S(p)$$<br>À retour unitaire, $\\varepsilon = E - S$ représente directement l'<strong>écart entre consigne et sortie</strong>. Son comportement en régime permanent (théorème de la valeur finale) définit la <strong>précision</strong> ; son régime transitoire reflète la <strong>rapidité</strong> et la <strong>stabilité</strong>.` },
        { type:'prop', label:'PROP', titre:'FTBO et FTBF : rôles',
          contenu:`<ul><li>la <strong>FTBO</strong> $= C\\,H\\,K_r$ sert à étudier la <strong>stabilité</strong> (critère du revers, marges) et la <strong>précision</strong> (gain et classe) ;</li><li>la <strong>FTBF</strong> $= \\dfrac{CH}{1 + CHK_r}$ décrit le comportement <strong>réel observé</strong> (réponse indicielle, dépassement, $t_{r,5\\%}$, bande passante).</li></ul>L'analyse se mène le plus souvent sur la <strong>FTBO</strong> (additivité dans Bode), les conclusions se vérifient sur la <strong>FTBF</strong>.` },
      ]
    },

    {
      titre: 'Stabilité',
      cartes: [
        { type:'def', label:'DEF', titre:'Critère de stabilité (pôles)',
          contenu:`Un SLCI est <strong>stable</strong> (au sens BIBO : entrée bornée → sortie bornée) si et seulement si <strong>tous les pôles</strong> de sa fonction de transfert sont à <strong>partie réelle strictement négative</strong> (demi-plan gauche).<br>Pour la boucle fermée, ce sont les racines de l'<strong>équation caractéristique</strong> :<br>$$1 + \\mathrm{FTBO}(p) = 0.$$<br>Un seul pôle à partie réelle $\\ge 0$ suffit à rendre le système instable (divergence ou oscillations entretenues).` },
        { type:'prop', label:'PROP', titre:'Critère de Routh-Hurwitz',
          contenu:`Pour savoir si un polynôme $D(p) = a_n p^n + \\dots + a_0$ a toutes ses racines à partie réelle négative <strong>sans les calculer</strong> :<br><strong>Condition nécessaire</strong> : tous les coefficients $a_i$ <strong>présents</strong> et de <strong>même signe</strong>.<br><strong>Condition nécessaire et suffisante</strong> : tous les termes de la <strong>première colonne du tableau de Routh</strong> sont strictement positifs. Le <strong>nombre de changements de signe</strong> dans cette colonne égale le nombre de pôles instables.` },
        { type:'prop', label:'PROP', titre:'Stabilité par les marges',
          contenu:`Sur la <strong>FTBO</strong> (stable en boucle ouverte), la stabilité de la boucle fermée se lit par le <strong>critère du revers</strong> et se <strong>quantifie</strong> par les marges :<br><ul><li><strong>marge de gain</strong> $M_G > 0$ (typiquement $\\ge 10$–$12$ dB) ;</li><li><strong>marge de phase</strong> $M_\\varphi > 0$ (typiquement $\\ge 45°$).</li></ul>Des marges <strong>positives mais faibles</strong> indiquent un système stable mais <strong>peu amorti</strong> (fort dépassement) : marges et dépassement sont liés.` },
        { type:'ex', label:'EX', titre:'Stabilité par Routh',
          contenu:`<strong>Énoncé</strong> : FTBO $= \\dfrac{K}{p(1 + p)(1 + 2p)}$, retour unitaire. Pour quel $K > 0$ la boucle fermée est-elle stable ?<br><strong>Résolution</strong> : équation caractéristique $p(1+p)(1+2p) + K = 0$, soit $2p^3 + 3p^2 + p + K = 0$.<br>Tableau de Routh : la condition de première colonne donne $3\\times 1 - 2K > 0$, soit $\\boxed{0 < K < 1{,}5}$. Au-delà ($K = 1{,}5$), pôles imaginaires purs → oscillations entretenues ; $K > 1{,}5$ → instable.` },
      ]
    },

    {
      titre: 'Précision',
      cartes: [
        { type:'def', label:'DEF', titre:'Erreur statique (de position)',
          contenu:`L'<strong>erreur statique</strong> (ou de position) $\\varepsilon_p$ est l'écart en régime permanent pour une consigne en <strong>échelon</strong>. Par le théorème de la valeur finale (retour unitaire) :<br>$$\\varepsilon_p = \\lim_{t\\to\\infty}\\varepsilon(t) = \\lim_{p\\to 0} p\\,\\frac{E(p)}{1 + \\mathrm{FTBO}(p)}$$<br>Pour un échelon unité et une FTBO de gain de boucle $K_v = \\lim_{p\\to 0}\\mathrm{FTBO}(p)$ (classe 0) : $\\varepsilon_p = \\dfrac{1}{1 + K_v}$.` },
        { type:'def', label:'DEF', titre:'Erreur de traînage (de vitesse)',
          contenu:`L'<strong>erreur de traînage</strong> $\\varepsilon_v$ est l'écart en régime permanent pour une consigne en <strong>rampe</strong> (vitesse constante). Pour un retour unitaire et une rampe de pente $a$ :<br>$$\\varepsilon_v = \\lim_{p\\to 0} p\\cdot \\frac{a/p^2}{1 + \\mathrm{FTBO}(p)} = \\lim_{p\\to 0}\\frac{a}{p\\,(1 + \\mathrm{FTBO}(p))}$$<br>Elle est <strong>finie</strong> pour une FTBO de classe 1 ($\\varepsilon_v = a/K_v$ avec $K_v$ le gain de l'intégrateur), <strong>infinie</strong> pour une classe 0, <strong>nulle</strong> pour une classe $\\ge 2$.` },
        { type:'prop', label:'PROP', titre:'Précision selon classe et gain',
          contenu:`Synthèse (retour unitaire) — erreur en régime permanent :<br><table><tr><td><strong>Classe</strong></td><td><strong>Échelon</strong></td><td><strong>Rampe</strong></td></tr></table><ul><li><strong>classe 0</strong> : $\\varepsilon_p = \\dfrac{1}{1+K_v}$ (finie), $\\varepsilon_v = \\infty$ ;</li><li><strong>classe 1</strong> : $\\varepsilon_p = 0$, $\\varepsilon_v = \\dfrac{a}{K_v}$ (finie) ;</li><li><strong>classe 2</strong> : $\\varepsilon_p = 0$, $\\varepsilon_v = 0$.</li></ul>Augmenter la <strong>classe</strong> (intégrateurs) ou le <strong>gain</strong> de boucle améliore la précision.` },
        { type:'ex', label:'EX', titre:'Calcul d\'erreurs statique et de traînage',
          contenu:`<strong>Énoncé</strong> : FTBO $= \\dfrac{20}{p(1 + 0{,}5p)}$ (classe 1), retour unitaire. Erreurs pour un échelon unité, puis une rampe de pente $a = 2$ ?<br><strong>Résolution</strong> : classe 1 → <strong>erreur statique nulle</strong> $\\varepsilon_p = 0$ (l'intégrateur suit l'échelon exactement).<br>Erreur de traînage : $K_v = \\lim_{p\\to 0} p\\cdot\\mathrm{FTBO} = 20$, donc $\\varepsilon_v = \\dfrac{a}{K_v} = \\dfrac{2}{20} = 0{,}1$. La sortie suit la rampe avec un retard constant de $0{,}1$.` },
      ]
    },

    {
      titre: 'Rapidité',
      cartes: [
        { type:'def', label:'DEF', titre:'Temps de réponse à 5 %',
          contenu:`La <strong>rapidité</strong> se mesure par le <strong>temps de réponse à 5 %</strong> $t_{r,5\\%}$ de la <strong>boucle fermée</strong> : durée au bout de laquelle la sortie reste à $\\pm 5\\%$ de sa valeur finale après un échelon.<br>Repères : 1er ordre $t_{r,5\\%} = 3\\tau$ ; 2e ordre optimal ($\\xi \\approx 0{,}7$) $t_{r,5\\%} \\approx \\dfrac{3}{\\omega_0}$. Plus $t_{r,5\\%}$ est court, plus le système est rapide.` },
        { type:'prop', label:'PROP', titre:'Lien rapidité ↔ bande passante',
          contenu:`La <strong>rapidité</strong> est directement liée à la <strong>bande passante</strong> de la boucle fermée : un système rapide a une <strong>large bande passante</strong>, c'est-à-dire qu'il « laisse passer » des consignes à variation rapide.<br>Règle approchée : $t_{r,5\\%} \\cdot \\omega_{bp} \\approx$ constante. On augmente la rapidité en <strong>repoussant la pulsation de coupure $\\omega_{c0}$</strong> de la FTBO (augmentation du gain ou avance de phase), au prix d'une vigilance sur la stabilité.` },
        { type:'ex', label:'EX', titre:'Effet du gain sur la rapidité d\'un 1er ordre bouclé',
          contenu:`<strong>Énoncé</strong> : chaîne directe $\\dfrac{K}{1 + \\tau p}$, retour unitaire. Comment $K$ agit-il sur la rapidité en boucle fermée ?<br><strong>Résolution</strong> : FTBF $= \\dfrac{K/(1+K)}{1 + \\frac{\\tau}{1+K}p}$. La constante de temps en boucle fermée devient $\\tau_{BF} = \\dfrac{\\tau}{1 + K}$ : elle <strong>diminue</strong> quand $K$ augmente.<br>Donc $t_{r,5\\%} = 3\\tau_{BF} = \\dfrac{3\\tau}{1 + K}$ : le bouclage et un gain fort <strong>accélèrent</strong> le système (et réduisent l'erreur statique). Le 1er ordre reste toujours stable.` },
      ]
    },

    {
      titre: 'Le compromis des performances',
      cartes: [
        { type:'prop', label:'PROP', titre:'Compromis stabilité-précision-rapidité',
          contenu:`Les trois performances sont <strong>antagonistes</strong> et se règlent par compromis :<br><ul><li><strong>augmenter le gain</strong> de boucle : ↗ précision, ↗ rapidité, mais ↘ stabilité (marges, dépassement) ;</li><li><strong>ajouter un intégrateur</strong> : ↗↗ précision (erreur statique nulle), mais ↘ stabilité ($-90°$) et ↘ rapidité ;</li><li><strong>ajouter une dérivée / avance de phase</strong> : ↗ stabilité et ↗ rapidité, mais sensible au bruit.</li></ul>Corriger = trouver le <strong>meilleur équilibre</strong> au regard du cahier des charges.` },
        { type:'meth', label:'METH', titre:'Démarche d\'analyse des performances',
          contenu:`<strong>1.</strong> Établir la <strong>FTBO</strong> et la <strong>FTBF</strong> (forme canonique : ordre, classe, gain).<br><strong>2.</strong> <strong>Stabilité</strong> : Routh sur l'équation caractéristique, ou marges sur le Bode de la FTBO.<br><strong>3.</strong> <strong>Précision</strong> : classe et gain → erreurs statique et de traînage (valeur finale).<br><strong>4.</strong> <strong>Rapidité</strong> : $t_{r,5\\%}$ via $\\tau$ ou ($\\omega_0, \\xi$), bande passante.<br><strong>5.</strong> Comparer au <strong>cahier des charges</strong> ; conclure sur le correcteur à introduire.` },
        { type:'ex', label:'EX', titre:'Analyse complète d\'un asservissement',
          contenu:`<strong>Énoncé</strong> : FTBO $= \\dfrac{K}{p(1 + 0{,}1p)}$, retour unitaire, $K = 40$. Évaluer stabilité, précision (rampe pente 1), rapidité.<br><strong>Résolution</strong> : FTBF $= \\dfrac{K}{0{,}1p^2 + p + K}$, soit forme 2e ordre $\\omega_0 = \\sqrt{K/0{,}1} = 20$ rad/s, $2\\xi\\omega_0 = 1/0{,}1 = 10$ → $\\xi = 0{,}25$. <strong>Stable</strong> mais peu amorti (dépassement $\\approx 44\\%$, $\\xi$ faible).<br><strong>Précision</strong> : classe 1 → $\\varepsilon_p = 0$ ; rampe : $\\varepsilon_v = 1/K = 0{,}025$.<br><strong>Rapidité</strong> : $\\omega_0 = 20$ rad/s (rapide). Bilan : précis et rapide mais <strong>trop oscillant</strong> → ajouter une correction dérivée (avance de phase) pour remonter $\\xi$.` },
      ]
    },

  ]
},

];
