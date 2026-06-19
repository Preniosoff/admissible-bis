// Prépa CPGE — Analyse (2e année & compléments 1re année)
// Programmes officiels MPSI/MP, PCSI/PC, PSI, PT (2021/2022)
// matiere: 'ma' — enrichissement de chapitres existants (enrich: true)
// Les liens filières sont préservés automatiquement (pas de champ filiere ici).

export const DATA = [

// ══════════════════════════════════════════════════════════════
// 1. INTÉGRATION SUR UN INTERVALLE QUELCONQUE  (id: ma-cvg)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-cvg', matiere: 'ma', ordre: 1, enrich: true,
  titre: 'Intégration sur un intervalle quelconque',
  sections: [
    {
      titre: 'Fonctions intégrables',
      cartes: [
        { type:'def', label:'DEF', titre:'Intégrabilité d\'une fonction positive',
          contenu:`Soit $I$ un intervalle de $\\mathbb{R}$ et $f : I \\to \\mathbb{R}_+$ continue par morceaux. On dit que $f$ est <strong>intégrable</strong> sur $I$ lorsque<br>$$\\sup_{[a,b] \\subset I} \\int_a^b f(t)\\,\\mathrm{d}t < +\\infty,$$<br>la borne supérieure portant sur tous les segments $[a,b]$ inclus dans $I$. On note alors $\\int_I f$ cette borne supérieure.<br>Pour une fonction positive, intégrabilité et convergence de l'intégrale impropre coïncident.` },
        { type:'def', label:'DEF', titre:'Fonction intégrable (cas général)',
          contenu:`Soit $f : I \\to \\mathbb{K}$ ($\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$) continue par morceaux. On dit que $f$ est <strong>intégrable</strong> sur $I$ lorsque $|f|$ est intégrable, c'est-à-dire $\\int_I |f| < +\\infty$.<br>On dit aussi que $\\int_I f$ est <strong>absolument convergente</strong>. On définit alors $\\int_I f$ par recollement des intégrales sur segments. L'ensemble des fonctions intégrables sur $I$ est noté $L^1(I)$.` },
        { type:'prop', label:'PROP', titre:'Linéarité, positivité, inégalité triangulaire',
          contenu:`Si $f, g$ sont intégrables sur $I$ et $\\lambda, \\mu \\in \\mathbb{K}$ :<br><ul><li><strong>Linéarité</strong> : $\\lambda f + \\mu g$ est intégrable et $\\int_I (\\lambda f + \\mu g) = \\lambda \\int_I f + \\mu \\int_I g$.</li><li><strong>Croissance</strong> : si $f \\le g$ (réelles), alors $\\int_I f \\le \\int_I g$.</li><li><strong>Inégalité triangulaire</strong> : $\\left| \\int_I f \\right| \\le \\int_I |f|$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Annulation d\'une intégrale de fonction positive',
          contenu:`Soit $f : I \\to \\mathbb{R}_+$ <strong>continue</strong> et intégrable. Alors<br>$$\\int_I f = 0 \\iff f = 0 \\text{ sur } I.$$<br>La continuité est essentielle : pour une fonction seulement continue par morceaux, $\\int_I f = 0$ n'impose la nullité qu'en dehors des points de discontinuité.` },
      ]
    },
    {
      titre: 'Critères d\'intégrabilité',
      cartes: [
        { type:'th', label:'THM', titre:'Comparaison de fonctions positives',
          contenu:`Soient $f, g : I \\to \\mathbb{R}_+$ continues par morceaux avec $0 \\le f \\le g$ sur $I$.<br><ul><li>Si $g$ est intégrable sur $I$, alors $f$ l'est aussi.</li><li>Si $f$ n'est pas intégrable, alors $g$ ne l'est pas.</li></ul>Plus finement, si $f \\le g$ <strong>au voisinage</strong> de la borne problématique, la conclusion sur l'intégrabilité subsiste.` },
        { type:'th', label:'THM', titre:'Critère par équivalents',
          contenu:`Soient $f, g$ continues par morceaux et <strong>positives</strong> au voisinage de la borne $b$ (finie ou infinie) de $I$. Si $f(t) \\underset{t \\to b}{\\sim} g(t)$, alors :<br>$$f \\text{ intégrable au voisinage de } b \\iff g \\text{ intégrable au voisinage de } b.$$<br><strong>Attention</strong> : l'hypothèse de signe constant est indispensable (le critère est faux pour des fonctions oscillantes).` },
        { type:'form', label:'FORM', titre:'Intégrales de Riemann (référence)',
          contenu:`<strong>En $+\\infty$</strong> : $\\displaystyle \\int_1^{+\\infty} \\frac{\\mathrm{d}t}{t^\\alpha}$ converge $\\iff \\alpha > 1$.<br><strong>En $0$</strong> : $\\displaystyle \\int_0^1 \\frac{\\mathrm{d}t}{t^\\alpha}$ converge $\\iff \\alpha < 1$.<br><strong>Bertrand</strong> : $\\displaystyle \\int_2^{+\\infty} \\frac{\\mathrm{d}t}{t^\\alpha (\\ln t)^\\beta}$ converge $\\iff (\\alpha > 1)$ ou $(\\alpha = 1$ et $\\beta > 1)$.` },
        { type:'meth', label:'METH', titre:'Étudier l\'intégrabilité sur un intervalle',
          contenu:`<strong>1.</strong> Repérer les bornes <em>problématiques</em> : bornes infinies, et bornes finies où $f$ n'est pas définie/bornée.<br><strong>2.</strong> Séparer l'intervalle pour n'avoir qu'<strong>un seul problème par morceau</strong>.<br><strong>3.</strong> Sur chaque morceau : chercher un <strong>équivalent</strong> ou une <strong>majoration</strong> par une intégrale de Riemann (croissances comparées, $t^\\alpha f(t) \\to 0$...).<br><strong>4.</strong> Conclure : $f$ intégrable sur $I$ ssi elle l'est au voisinage de chaque borne.` },
        { type:'ex', label:'EX', titre:'Intégrabilité de $t \\mapsto e^{-t}/\\sqrt{t}$',
          contenu:`<strong>Énoncé</strong> : la fonction $f(t) = \\dfrac{e^{-t}}{\\sqrt{t}}$ est-elle intégrable sur $]0, +\\infty[$ ?<br><strong>En $0^+$</strong> : $f(t) \\sim \\dfrac{1}{\\sqrt{t}} = t^{-1/2}$, et $\\alpha = \\tfrac12 < 1$, donc intégrable en $0$.<br><strong>En $+\\infty$</strong> : $t^2 f(t) = t^{3/2} e^{-t} \\to 0$, donc $f(t) = o(1/t^2)$ : intégrable en $+\\infty$.<br><strong>Conclusion</strong> : $f$ est intégrable sur $]0,+\\infty[$ (c'est $\\Gamma(1/2) = \\sqrt{\\pi}$).` },
      ]
    },
    {
      titre: 'Théorème de convergence dominée',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème de convergence dominée (Lebesgue)',
          contenu:`Soit $(f_n)$ une suite de fonctions continues par morceaux sur $I$, à valeurs dans $\\mathbb{K}$, telle que :<br><strong>(1) Convergence simple</strong> : $f_n \\to f$ simplement sur $I$, avec $f$ continue par morceaux ;<br><strong>(2) Domination</strong> : il existe $\\varphi : I \\to \\mathbb{R}_+$ continue par morceaux, <strong>intégrable</strong> et indépendante de $n$, telle que $|f_n| \\le \\varphi$ sur $I$ pour tout $n$.<br>Alors $f$ et tous les $f_n$ sont intégrables, et<br>$$\\lim_{n \\to +\\infty} \\int_I f_n = \\int_I f = \\int_I \\lim_{n\\to+\\infty} f_n.$$` },
        { type:'prop', label:'PROP', titre:'Rôle de l\'hypothèse de domination',
          contenu:`L'hypothèse de domination par une fonction <strong>fixe et intégrable</strong> ne peut être supprimée. Contre-exemple : $f_n = \\mathbf{1}_{[n, n+1]}$ sur $\\mathbb{R}_+$ converge simplement vers $0$, mais $\\int_{\\mathbb{R}_+} f_n = 1 \\not\\to 0$.<br>La domination empêche la « fuite de la masse » vers l'infini ou vers une singularité.` },
        { type:'meth', label:'METH', titre:'Appliquer le théorème de convergence dominée',
          contenu:`Pour calculer $\\lim_n \\int_I f_n$ :<br><strong>1.</strong> Déterminer la limite simple $f(t) = \\lim_n f_n(t)$ pour chaque $t \\in I$ fixé.<br><strong>2.</strong> Trouver une domination $|f_n(t)| \\le \\varphi(t)$, $\\varphi$ intégrable, <em>valable pour tout $n$</em> (souvent par une majoration uniforme du type $|f_n| \\le g$ où $g$ est l'enveloppe).<br><strong>3.</strong> Rédiger les trois hypothèses (continuité par morceaux, CV simple, domination) puis conclure.` },
        { type:'ex', label:'EX', titre:'Calcul de $\\lim_n \\int_0^{+\\infty} \\frac{n\\,e^{-t}}{1+n^2 t^2}\\,\\mathrm{d}t$',
          contenu:`Posons $f_n(t) = \\dfrac{n e^{-t}}{1 + n^2 t^2}$. <strong>CV simple</strong> : pour $t > 0$ fixé, $f_n(t) \\sim \\dfrac{e^{-t}}{n t^2} \\to 0$ ; et $f_n(0) = n \\to +\\infty$, mais $\\{0\\}$ est négligeable. La limite simple est $f = 0$ sur $]0,+\\infty[$. <strong>Domination</strong> : $f_n(t) \\le \\dfrac{n}{1+n^2 t^2} e^{-t}$... ici la masse ne fuit pas vers $0$ au sens de l'intégrale car $\\int_0^\\infty \\frac{n}{1+n^2t^2}\\mathrm{d}t = \\frac\\pi2$ ne tend pas vers $0$ : il faut traiter le voisinage de $0$ à part. Sur $[\\varepsilon,+\\infty[$, $f_n \\le \\frac{1}{n\\varepsilon^2}e^{-t}$ domine vers $0$. <strong>Conclusion</strong> : on montre que la limite vaut $0$ (la concentration en $0$ donne une contribution $\\to 0$ car pondérée par $e^{-t}\\to1$, compensée par la largeur $1/n$). On retient surtout la méthode de découpe.` },
      ]
    },
    {
      titre: 'Intégration terme à terme',
      cartes: [
        { type:'th', label:'THM', titre:'Intégration terme à terme d\'une série de fonctions',
          contenu:`Soit $(u_n)$ une suite de fonctions continues par morceaux et <strong>intégrables</strong> sur $I$, telle que :<br><strong>(1)</strong> $\\sum u_n$ converge simplement sur $I$ vers une fonction $S$ continue par morceaux ;<br><strong>(2)</strong> $\\displaystyle\\sum_n \\int_I |u_n| < +\\infty$ (convergence de la série des intégrales des valeurs absolues).<br>Alors $S$ est intégrable sur $I$ et<br>$$\\int_I S = \\int_I \\sum_{n=0}^{+\\infty} u_n = \\sum_{n=0}^{+\\infty} \\int_I u_n.$$` },
        { type:'prop', label:'PROP', titre:'Lien avec la convergence dominée',
          contenu:`Le théorème d'intégration terme à terme se déduit du théorème de convergence dominée appliqué aux sommes partielles $S_N = \\sum_{n=0}^N u_n$, la domination étant assurée par $\\sum_n |u_n|$ dont l'intégrabilité résulte de l'hypothèse (2).<br>L'hypothèse <strong>(2)</strong> (et non la simple CV de $\\sum \\int_I u_n$) est ce qui permet de permuter $\\sum$ et $\\int$.` },
        { type:'ex', label:'EX', titre:'$\\int_0^1 \\frac{\\ln t}{t-1}\\,\\mathrm{d}t = \\frac{\\pi^2}{6}$',
          contenu:`Pour $t \\in ]0,1[$ : $\\dfrac{1}{1-t} = \\sum_{n \\ge 0} t^n$, d'où $\\dfrac{-\\ln t}{1-t} = \\sum_{n\\ge0} (-\\ln t)\\, t^n$, termes positifs.<br>$\\int_0^1 (-\\ln t)\\,t^n\\,\\mathrm{d}t = \\dfrac{1}{(n+1)^2}$ (IPP). La série $\\sum \\frac{1}{(n+1)^2}$ converge, donc on peut intégrer terme à terme :<br>$$\\int_0^1 \\frac{-\\ln t}{1-t}\\,\\mathrm{d}t = \\sum_{n=0}^{+\\infty} \\frac{1}{(n+1)^2} = \\sum_{k=1}^{+\\infty}\\frac{1}{k^2} = \\frac{\\pi^2}{6}.$$` },
      ]
    },
    {
      titre: 'Intégrales à paramètre',
      cartes: [
        { type:'th', label:'THM', titre:'Continuité sous le signe intégrale',
          contenu:`Soit $f : A \\times I \\to \\mathbb{K}$ où $A$ est un intervalle (ou une partie de $\\mathbb{R}^p$) et $I$ un intervalle. On suppose :<br><strong>(1)</strong> pour tout $x \\in A$, $t \\mapsto f(x,t)$ est continue par morceaux et intégrable sur $I$ ;<br><strong>(2)</strong> pour tout $t \\in I$, $x \\mapsto f(x,t)$ est continue sur $A$ ;<br><strong>(3) Domination</strong> : il existe $\\varphi$ intégrable sur $I$ telle que $\\forall (x,t),\\ |f(x,t)| \\le \\varphi(t)$.<br>Alors $g(x) = \\int_I f(x,t)\\,\\mathrm{d}t$ est <strong>continue</strong> sur $A$.` },
        { type:'th', label:'THM', titre:'Dérivation sous le signe intégrale (Leibniz)',
          contenu:`Soit $f : A \\times I \\to \\mathbb{K}$ telle que :<br><strong>(1)</strong> $t \\mapsto f(x,t)$ intégrable sur $I$ pour tout $x \\in A$ ;<br><strong>(2)</strong> $\\dfrac{\\partial f}{\\partial x}$ existe, est continue par morceaux en $t$ et continue en $x$ ;<br><strong>(3) Domination de la dérivée</strong> : $\\left|\\dfrac{\\partial f}{\\partial x}(x,t)\\right| \\le \\varphi(t)$ avec $\\varphi$ intégrable sur $I$.<br>Alors $g(x) = \\int_I f(x,t)\\,\\mathrm{d}t$ est de classe $\\mathcal{C}^1$ sur $A$ et<br>$$g'(x) = \\int_I \\frac{\\partial f}{\\partial x}(x,t)\\,\\mathrm{d}t.$$` },
        { type:'prop', label:'PROP', titre:'Classe $\\mathcal{C}^k$ et domination locale',
          contenu:`En itérant, si $f$ admet des dérivées partielles $\\dfrac{\\partial^j f}{\\partial x^j}$ ($0 \\le j \\le k$) continues en $x$, continues par morceaux en $t$, chacune dominée par une fonction intégrable, alors $g$ est de classe $\\mathcal{C}^k$ et l'on dérive $k$ fois sous le signe $\\int$.<br><strong>Domination locale</strong> : il suffit que la domination soit valable sur tout segment de $A$ (la fonction $\\varphi$ peut dépendre du segment).` },
        { type:'meth', label:'METH', titre:'Calculer une intégrale à paramètre',
          contenu:`Technique classique pour évaluer $g(x) = \\int_I f(x,t)\\,\\mathrm{d}t$ :<br><strong>1.</strong> Justifier que $g$ est $\\mathcal{C}^1$ (théorème de Leibniz, domination).<br><strong>2.</strong> Calculer $g'(x) = \\int_I \\partial_x f$, souvent plus simple.<br><strong>3.</strong> Intégrer $g'$ pour retrouver $g$ à une constante près.<br><strong>4.</strong> Déterminer la constante par une <strong>valeur ou une limite connue</strong> de $g$ (souvent $g(0)$, ou $\\lim_{x\\to+\\infty} g$).` },
        { type:'ex', label:'EX', titre:'Intégrale de Gauss par paramètre',
          contenu:`Soit $g(x) = \\displaystyle\\int_0^{+\\infty} \\frac{e^{-x^2(1+t^2)}}{1+t^2}\\,\\mathrm{d}t$ pour $x \\ge 0$.<br>$g$ est $\\mathcal{C}^1$ ; $g'(x) = -2x\\,e^{-x^2}\\int_0^\\infty e^{-x^2 t^2}\\mathrm{d}t = -2 e^{-x^2} \\int_0^\\infty e^{-u^2}\\mathrm{d}u$ (poser $u=xt$). Avec $I = \\int_0^\\infty e^{-u^2}\\mathrm{d}u$, on a $g'(x) = -2 I\\, e^{-x^2}\\cdot \\!$ et $\\big(\\int_0^x e^{-u^2}\\big)' $ apparaît. En intégrant de $0$ à $+\\infty$ : $g(0) = \\frac\\pi2$, $g(+\\infty)=0$, ce qui donne $I^2 = \\frac\\pi4$, soit<br>$$\\int_0^{+\\infty} e^{-u^2}\\,\\mathrm{d}u = \\frac{\\sqrt{\\pi}}{2}.$$` },
      ]
    },
    {
      titre: 'Théorème de Fubini',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème de Fubini (intégrales doubles)',
          contenu:`Soit $f$ continue sur $[a,b] \\times [c,d]$ à valeurs dans $\\mathbb{K}$. Alors les deux intégrales itérées existent et sont égales :<br>$$\\int_a^b \\!\\!\\left( \\int_c^d f(x,y)\\,\\mathrm{d}y \\right)\\mathrm{d}x = \\int_c^d \\!\\!\\left( \\int_a^b f(x,y)\\,\\mathrm{d}x \\right)\\mathrm{d}y.$$<br>On peut donc <strong>intervertir l'ordre d'intégration</strong> sur un pavé pour une fonction continue.` },
        { type:'prop', label:'PROP', titre:'Fubini-Tonelli (cas positif / intégrable)',
          contenu:`Pour une fonction continue par morceaux sur un produit d'intervalles, l'interversion des intégrales itérées est licite dès que :<br><ul><li>$f \\ge 0$ (théorème de Tonelli) — l'égalité vaut dans $[0,+\\infty]$ ;</li><li>ou $\\displaystyle\\iint |f| < +\\infty$ (fonction intégrable).</li></ul>En pratique on vérifie l'interversion sur $|f|$ (Tonelli), ce qui légitime ensuite l'interversion sur $f$.` },
        { type:'ex', label:'EX', titre:'Interversion somme-intégrale via Fubini',
          contenu:`Calculons $\\displaystyle J = \\int_0^1 \\frac{t-1}{\\ln t}\\,\\mathrm{d}t$. On écrit $\\dfrac{t-1}{\\ln t} = \\int_0^1 t^x\\,\\mathrm{d}x$ (car $\\int_0^1 t^x \\mathrm{d}x = \\frac{t-1}{\\ln t}$). Alors, $f(x,t)=t^x \\ge 0$ sur $[0,1]^2$, Fubini-Tonelli s'applique :<br>$$J = \\int_0^1\\!\\!\\int_0^1 t^x\\,\\mathrm{d}x\\,\\mathrm{d}t = \\int_0^1\\!\\!\\left(\\int_0^1 t^x\\,\\mathrm{d}t\\right)\\mathrm{d}x = \\int_0^1 \\frac{\\mathrm{d}x}{x+1} = \\ln 2.$$` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 2. SUITES ET SÉRIES DE FONCTIONS  (id: ma-sfn)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-sfn', matiere: 'ma', ordre: 2, enrich: true,
  titre: 'Suites et séries de fonctions',
  sections: [
    {
      titre: 'Modes de convergence',
      cartes: [
        { type:'def', label:'DEF', titre:'Convergence simple',
          contenu:`Une suite de fonctions $(f_n)$ définies sur $A$ <strong>converge simplement</strong> vers $f$ sur $A$ si<br>$$\\forall x \\in A,\\quad \\lim_{n \\to +\\infty} f_n(x) = f(x).$$<br>De façon quantifiée : $\\forall x \\in A,\\ \\forall \\varepsilon > 0,\\ \\exists N(x,\\varepsilon),\\ \\forall n \\ge N,\\ |f_n(x) - f(x)| \\le \\varepsilon$. Le rang $N$ dépend ici <strong>de $x$</strong>.` },
        { type:'def', label:'DEF', titre:'Convergence uniforme',
          contenu:`$(f_n)$ <strong>converge uniformément</strong> vers $f$ sur $A$ si<br>$$\\|f_n - f\\|_{\\infty, A} = \\sup_{x \\in A} |f_n(x) - f(x)| \\xrightarrow[n\\to+\\infty]{} 0.$$<br>De façon quantifiée : $\\forall \\varepsilon > 0,\\ \\exists N(\\varepsilon),\\ \\forall n \\ge N,\\ \\forall x \\in A,\\ |f_n(x)-f(x)| \\le \\varepsilon$. Le rang $N$ est <strong>uniforme</strong> en $x$. La CV uniforme entraîne la CV simple.` },
        { type:'def', label:'DEF', titre:'Convergence normale d\'une série',
          contenu:`La série de fonctions $\\sum u_n$ <strong>converge normalement</strong> sur $A$ si la série numérique $\\sum_n \\|u_n\\|_{\\infty,A}$ converge, i.e. il existe $(a_n)$ avec $\\sum a_n < +\\infty$ et $\\forall x \\in A,\\ |u_n(x)| \\le a_n$.<br><strong>Hiérarchie</strong> :<br>$$\\text{CV normale} \\Rightarrow \\text{CV uniforme} \\Rightarrow \\text{CV simple}.$$<br>Aucune réciproque n'est vraie en général.` },
        { type:'prop', label:'PROP', titre:'Norme infinie et structure d\'espace',
          contenu:`Sur l'espace $\\mathcal{B}(A, \\mathbb{K})$ des fonctions <strong>bornées</strong> de $A$ dans $\\mathbb{K}$, $\\|f\\|_\\infty = \\sup_{x \\in A} |f(x)|$ définit une norme. La convergence uniforme de $(f_n)$ vers $f$ équivaut à la convergence de $(f_n)$ vers $f$ <strong>pour cette norme</strong>.<br>L'espace $(\\mathcal{B}(A,\\mathbb{K}), \\|\\cdot\\|_\\infty)$ est <strong>complet</strong> : c'est le cadre naturel du critère de Cauchy uniforme.` },
        { type:'meth', label:'METH', titre:'Étudier la convergence uniforme',
          contenu:`Pour montrer/réfuter la CV uniforme de $(f_n)$ vers $f$ :<br><strong>1.</strong> Calculer la limite simple $f$.<br><strong>2.</strong> Poser $g_n = f_n - f$ et chercher $\\|g_n\\|_\\infty = \\sup_A |g_n|$ (étude de fonction : dériver, trouver le max).<br><strong>3.</strong> Si $\\|g_n\\|_\\infty \\to 0$ : CV uniforme. Sinon (ex. $\\|g_n\\|_\\infty \\to \\ell > 0$) : pas CV uniforme.<br><strong>Astuce</strong> : exhiber une suite $(x_n)$ avec $|g_n(x_n)| \\not\\to 0$ suffit à réfuter.` },
      ]
    },
    {
      titre: 'Critères et exemples',
      cartes: [
        { type:'prop', label:'PROP', titre:'Critère de Cauchy uniforme',
          contenu:`$(f_n)$ converge uniformément sur $A$ si et seulement si elle vérifie le <strong>critère de Cauchy uniforme</strong> :<br>$$\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall p,q \\ge N,\\ \\sup_{x \\in A} |f_p(x) - f_q(x)| \\le \\varepsilon.$$<br>Utile quand la limite n'est pas connue explicitement (espace complet des fonctions bornées).` },
        { type:'prop', label:'PROP', titre:'Critère pratique de non-convergence uniforme',
          contenu:`Si $(f_n)$ converge simplement vers $f$ mais que chaque $f_n$ est continue alors que $f$ ne l'est pas, la convergence <strong>n'est pas uniforme</strong> (par le théorème de continuité, contraposée).<br>Exemple : $f_n(x) = x^n$ sur $[0,1]$ converge simplement vers $f$ valant $0$ sur $[0,1[$ et $1$ en $1$ ; $f$ discontinue $\\Rightarrow$ pas CV uniforme sur $[0,1]$.` },
        { type:'ex', label:'EX', titre:'$f_n(x) = n x e^{-n x}$ sur $[0,+\\infty[$',
          contenu:`<strong>CV simple</strong> : pour $x = 0$, $f_n(0)=0$ ; pour $x>0$, $f_n(x) = nx\\,e^{-nx} \\to 0$. Donc $f = 0$.<br><strong>CV uniforme ?</strong> $f_n'(x) = n e^{-nx}(1-nx)$ s'annule en $x_n = 1/n$ ; $f_n(x_n) = n \\cdot \\frac1n e^{-1} = e^{-1}$. Donc $\\|f_n\\|_\\infty = e^{-1} \\not\\to 0$ : <strong>pas de CV uniforme</strong> sur $[0,+\\infty[$.<br>En revanche, sur $[a,+\\infty[$ avec $a>0$, la CV est uniforme.` },
        { type:'ex', label:'EX', titre:'CV normale de $\\sum \\frac{\\cos(n x)}{n^2}$',
          contenu:`Pour tout $x \\in \\mathbb{R}$, $\\left| \\dfrac{\\cos(nx)}{n^2} \\right| \\le \\dfrac{1}{n^2}$, terme général d'une série de Riemann convergente. Donc<br>$$\\sum_{n\\ge 1} \\|u_n\\|_\\infty \\le \\sum_{n \\ge 1} \\frac{1}{n^2} < +\\infty.$$<br>La série converge <strong>normalement</strong> sur $\\mathbb{R}$, donc uniformément : sa somme est continue sur $\\mathbb{R}$.` },
        { type:'ex', label:'EX', titre:'CV uniforme sans CV normale',
          contenu:`La série $\\sum_{n \\ge 1} \\dfrac{(-1)^n}{n}\\, x^n$ sur $[0,1]$ converge uniformément (critère des séries alternées : le reste est majoré par $\\frac{x^{n+1}}{n+1} \\le \\frac{1}{n+1}$, uniformément), mais <strong>pas normalement</strong> car $\\|u_n\\|_\\infty = \\frac1n$ et $\\sum \\frac1n$ diverge.<br>Cela illustre que la réciproque « CV uniforme $\\Rightarrow$ CV normale » est <strong>fausse</strong>.` },
      ]
    },
    {
      titre: 'Théorèmes de continuité et double limite',
      cartes: [
        { type:'th', label:'THM', titre:'Continuité de la limite uniforme',
          contenu:`Soit $(f_n)$ une suite de fonctions <strong>continues</strong> sur $A$ convergeant <strong>uniformément</strong> vers $f$ sur $A$ (ou uniformément sur tout segment, ou sur tout compact). Alors $f$ est <strong>continue</strong> sur $A$.<br>Pour une série : si $\\sum u_n$ converge uniformément (en particulier normalement) avec $u_n$ continues, alors $S = \\sum u_n$ est continue.` },
        { type:'th', label:'THM', titre:'Théorème de la double limite',
          contenu:`Soit $(f_n)$ convergeant uniformément vers $f$ sur $A$, et $a$ un point adhérent à $A$ (éventuellement $\\pm\\infty$). Si chaque $f_n$ admet une limite finie $\\ell_n$ en $a$, alors $(\\ell_n)$ converge, $f$ admet une limite en $a$, et<br>$$\\lim_{x \\to a} \\lim_{n \\to +\\infty} f_n(x) = \\lim_{n \\to +\\infty} \\lim_{x \\to a} f_n(x).$$<br>Autrement dit, les deux limites <strong>commutent</strong>.` },
        { type:'prop', label:'PROP', titre:'Convergence uniforme locale et continuité',
          contenu:`Pour conclure à la continuité de $f$ (propriété <strong>locale</strong>), il suffit que la convergence soit uniforme <strong>au voisinage de chaque point</strong>, ou uniforme sur tout segment / tout compact de $A$.<br>C'est une simplification majeure : on n'a pas besoin de la CV uniforme globale, souvent fausse sur un intervalle non borné.` },
      ]
    },
    {
      titre: 'Intégration et dérivation terme à terme',
      cartes: [
        { type:'th', label:'THM', titre:'Intégration sur un segment',
          contenu:`Soit $(f_n)$ continue sur le segment $[a,b]$, convergeant <strong>uniformément</strong> vers $f$ sur $[a,b]$. Alors<br>$$\\int_a^b f_n(t)\\,\\mathrm{d}t \\xrightarrow[n\\to+\\infty]{} \\int_a^b f(t)\\,\\mathrm{d}t.$$<br>Pour une série uniformément convergente : $\\displaystyle\\int_a^b \\sum_{n} u_n = \\sum_n \\int_a^b u_n$. <strong>La CV uniforme suffit sur un segment</strong> (pas besoin de domination).` },
        { type:'th', label:'THM', titre:'Dérivation terme à terme',
          contenu:`Soit $(f_n)$ une suite de fonctions de classe $\\mathcal{C}^1$ sur l'intervalle $I$, telle que :<br><strong>(1)</strong> $(f_n)$ converge simplement sur $I$ vers $f$ (il suffit même en un point) ;<br><strong>(2)</strong> $(f_n')$ converge <strong>uniformément</strong> sur tout segment de $I$ vers une fonction $g$.<br>Alors $f$ est de classe $\\mathcal{C}^1$ sur $I$, $(f_n) \\to f$ uniformément sur tout segment, et $f' = g$, i.e.<br>$$\\left(\\lim_n f_n\\right)' = \\lim_n f_n'.$$` },
        { type:'prop', label:'PROP', titre:'Version $\\mathcal{C}^k$ et séries',
          contenu:`Par récurrence : si $(f_n)$ est $\\mathcal{C}^k$, si $(f_n^{(j)})$ converge simplement pour $0 \\le j \\le k-1$ et $(f_n^{(k)})$ converge uniformément sur tout segment, alors $f$ est $\\mathcal{C}^k$ et $f^{(j)} = \\lim_n f_n^{(j)}$.<br>Pour une série : $S = \\sum u_n$ est $\\mathcal{C}^k$ si $\\sum u_n^{(j)}$ converge (simplement pour $j<k$, uniformément pour $j=k$ sur tout segment), et $S^{(j)} = \\sum u_n^{(j)}$.` },
        { type:'ex', label:'EX', titre:'Régularité de $\\sum \\frac{x^n}{n^2}$',
          contenu:`Soit $S(x) = \\sum_{n \\ge 1} \\dfrac{x^n}{n^2}$ sur $[-1,1]$. La série converge normalement sur $[-1,1]$ ($|u_n| \\le 1/n^2$), donc $S$ est continue.<br>La série dérivée $\\sum \\dfrac{x^{n-1}}{n}$ converge normalement sur tout $[-r,r]$ ($r<1$), donc $S$ est $\\mathcal{C}^1$ sur $]-1,1[$ et $S'(x) = \\sum_{n\\ge1}\\dfrac{x^{n-1}}{n} = -\\dfrac{\\ln(1-x)}{x}$ pour $x \\ne 0$.` },
      ]
    },
    {
      titre: 'Approximation uniforme',
      cartes: [
        { type:'th', label:'THM', titre:'Théorème de Weierstrass (polynomial)',
          contenu:`Toute fonction $f$ <strong>continue</strong> sur un segment $[a,b]$ à valeurs réelles (ou complexes) est <strong>limite uniforme</strong> d'une suite de fonctions <strong>polynomiales</strong> sur $[a,b]$ :<br>$$\\forall \\varepsilon > 0,\\ \\exists P \\in \\mathbb{R}[X],\\ \\|f - P\\|_{\\infty,[a,b]} \\le \\varepsilon.$$<br>Les polynômes sont denses dans $(\\mathcal{C}([a,b]), \\|\\cdot\\|_\\infty)$.` },
        { type:'th', label:'THM', titre:'Théorème de Weierstrass trigonométrique',
          contenu:`Toute fonction $f$ continue $2\\pi$-périodique sur $\\mathbb{R}$ est limite uniforme d'une suite de <strong>polynômes trigonométriques</strong> (combinaisons de $\\cos(kx)$, $\\sin(kx)$).<br>Outil naturel : les sommes de Fejér (moyennes de Cesàro des sommes de Fourier) convergent uniformément vers $f$.` },
        { type:'prop', label:'PROP', titre:'Approximation par fonctions en escalier / affines',
          contenu:`Toute fonction continue par morceaux sur $[a,b]$ est limite uniforme de <strong>fonctions en escalier</strong>. Toute fonction continue sur $[a,b]$ est limite uniforme de fonctions <strong>continues affines par morceaux</strong>.<br>Ces résultats sous-tendent la construction de l'intégrale et de nombreuses majorations.` },
        { type:'ex', label:'EX', titre:'Application : moments nuls $\\Rightarrow$ fonction nulle',
          contenu:`<strong>Énoncé</strong> : soit $f$ continue sur $[0,1]$ telle que $\\int_0^1 f(t)\\,t^n\\,\\mathrm{d}t = 0$ pour tout $n \\in \\mathbb{N}$. Montrer $f = 0$.<br><strong>Preuve</strong> : par linéarité, $\\int_0^1 f P = 0$ pour tout polynôme $P$. Par Weierstrass, il existe $P_k \\to f$ uniformément ; alors $\\int_0^1 f^2 = \\lim_k \\int_0^1 f P_k = 0$. Comme $f^2 \\ge 0$ continue, $f^2 = 0$, donc $f = 0$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 3. SÉRIES ENTIÈRES  (id: ma-se)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-se', matiere: 'ma', ordre: 3, enrich: true,
  titre: 'Séries entières',
  sections: [
    {
      titre: 'Rayon de convergence',
      cartes: [
        { type:'def', label:'DEF', titre:'Série entière',
          contenu:`On appelle <strong>série entière</strong> de la variable $z \\in \\mathbb{C}$ (ou $x \\in \\mathbb{R}$) toute série de fonctions de la forme<br>$$\\sum_{n \\ge 0} a_n z^n,\\qquad (a_n) \\in \\mathbb{C}^{\\mathbb{N}}.$$<br>Les $a_n$ sont les <strong>coefficients</strong> de la série. On s'intéresse à l'ensemble des $z$ pour lesquels elle converge.` },
        { type:'th', label:'THM', titre:'Lemme d\'Abel',
          contenu:`Soit $\\sum a_n z^n$ une série entière. S'il existe $z_0 \\ne 0$ tel que la suite $(a_n z_0^n)$ soit <strong>bornée</strong>, alors pour tout $z$ tel que $|z| < |z_0|$, la série $\\sum a_n z^n$ converge <strong>absolument</strong>.<br><strong>Conséquence</strong> : l'ensemble de convergence est « presque » un disque, ce qui justifie l'existence du rayon de convergence.` },
        { type:'def', label:'DEF', titre:'Rayon de convergence',
          contenu:`Le <strong>rayon de convergence</strong> de $\\sum a_n z^n$ est<br>$$R = \\sup\\{\\, r \\ge 0 : (a_n r^n)_n \\text{ est bornée} \\,\\} \\in [0, +\\infty].$$<br>Alors :<br><ul><li>si $|z| < R$ : la série converge absolument ;</li><li>si $|z| > R$ : la série diverge grossièrement ($a_n z^n \\not\\to 0$).</li></ul>Le <strong>disque ouvert</strong> $D(0,R)$ est le disque de convergence ; le comportement sur le cercle $|z| = R$ est indéterminé a priori.` },
        { type:'meth', label:'METH', titre:'Calculer le rayon de convergence',
          contenu:`<strong>Règle de d'Alembert</strong> : si $\\left| \\dfrac{a_{n+1}}{a_n} \\right| \\to \\ell$, alors $R = \\dfrac{1}{\\ell}$ (avec $R = +\\infty$ si $\\ell = 0$, $R = 0$ si $\\ell = +\\infty$).<br><strong>Règle de Cauchy</strong> : si $|a_n|^{1/n} \\to \\ell$, alors $R = 1/\\ell$ (formule d'Hadamard avec $\\limsup$ dans le cas général).<br><strong>Comparaison</strong> : encadrer $|a_n|$ par des suites de rayon connu. <strong>Astuce</strong> : tester si $(a_n r^n)$ est bornée.` },
        { type:'ex', label:'EX', titre:'Rayons de quelques séries usuelles',
          contenu:`<strong>(a)</strong> $\\sum \\dfrac{z^n}{n!}$ : $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{n+1} \\to 0$, donc $R = +\\infty$.<br><strong>(b)</strong> $\\sum n!\\, z^n$ : $\\left|\\frac{a_{n+1}}{a_n}\\right| = n+1 \\to +\\infty$, donc $R = 0$.<br><strong>(c)</strong> $\\sum \\dfrac{z^n}{n}$ et $\\sum z^n$ : $R = 1$ dans les deux cas (rayon insensible aux facteurs polynomiaux en $n$).` },
      ]
    },
    {
      titre: 'Opérations sur les séries entières',
      cartes: [
        { type:'prop', label:'PROP', titre:'Somme et combinaison linéaire',
          contenu:`Soient $\\sum a_n z^n$ et $\\sum b_n z^n$ de rayons $R_a, R_b$. La série somme $\\sum (a_n + b_n) z^n$ a un rayon $R \\ge \\min(R_a, R_b)$, avec égalité si $R_a \\ne R_b$. Sur $D(0,\\min(R_a,R_b))$ :<br>$$\\sum (\\lambda a_n + \\mu b_n) z^n = \\lambda \\sum a_n z^n + \\mu \\sum b_n z^n.$$` },
        { type:'th', label:'THM', titre:'Produit de Cauchy',
          contenu:`Le <strong>produit de Cauchy</strong> des séries entières $\\sum a_n z^n$ et $\\sum b_n z^n$ est $\\sum c_n z^n$ avec<br>$$c_n = \\sum_{k=0}^{n} a_k\\, b_{n-k}.$$<br>Son rayon vérifie $R_c \\ge \\min(R_a, R_b)$, et sur le disque commun :<br>$$\\left(\\sum a_n z^n\\right)\\left(\\sum b_n z^n\\right) = \\sum c_n z^n.$$` },
        { type:'prop', label:'PROP', titre:'Rayon des séries dérivée et intégrée',
          contenu:`La série dérivée $\\sum_{n \\ge 1} n a_n z^{n-1}$ et la série intégrée $\\sum_{n \\ge 0} \\dfrac{a_n}{n+1} z^{n+1}$ ont le <strong>même rayon de convergence</strong> $R$ que $\\sum a_n z^n$.<br>Multiplier les coefficients par une fraction rationnelle en $n$ ne change pas le rayon.` },
      ]
    },
    {
      titre: 'Régularité de la somme',
      cartes: [
        { type:'th', label:'THM', titre:'Convergence normale sur tout compact',
          contenu:`Soit $\\sum a_n z^n$ de rayon $R > 0$. Pour tout $0 \\le r < R$, la série converge <strong>normalement</strong> sur le disque fermé $\\overline{D}(0,r)$ :<br>$$\\sum_{n} \\sup_{|z| \\le r} |a_n z^n| = \\sum_n |a_n| r^n < +\\infty.$$<br>La convergence est donc uniforme sur tout compact de $D(0,R)$. <strong>Attention</strong> : en général <em>pas</em> normale sur $D(0,R)$ tout entier.` },
        { type:'th', label:'THM', titre:'Continuité de la somme',
          contenu:`La somme $S(z) = \\sum_{n \\ge 0} a_n z^n$ d'une série entière de rayon $R > 0$ est <strong>continue</strong> sur le disque ouvert de convergence $D(0,R)$.<br>Cela résulte de la convergence uniforme sur tout compact et de la continuité de chaque terme $z \\mapsto a_n z^n$.` },
        { type:'th', label:'THM', titre:'Dérivation et primitivation (variable réelle)',
          contenu:`Soit $f(x) = \\sum_{n \\ge 0} a_n x^n$, $x \\in ]-R, R[$, $R>0$. Alors $f$ est de classe $\\mathcal{C}^\\infty$ sur $]-R,R[$ et se dérive terme à terme :<br>$$f'(x) = \\sum_{n \\ge 1} n a_n x^{n-1}, \\qquad \\int_0^x f(t)\\,\\mathrm{d}t = \\sum_{n \\ge 0} \\frac{a_n}{n+1} x^{n+1}.$$<br>De plus $a_n = \\dfrac{f^{(n)}(0)}{n!}$ : les coefficients sont les <strong>coefficients de Taylor</strong> en $0$.` },
        { type:'prop', label:'PROP', titre:'Unicité du développement',
          contenu:`Si deux séries entières de rayons strictement positifs ont la même somme sur un voisinage de $0$, alors elles ont les <strong>mêmes coefficients</strong>.<br>En particulier, le développement en série entière d'une fonction, lorsqu'il existe, est <strong>unique</strong>. C'est l'outil clé pour identifier des coefficients (équations différentielles, relations de récurrence).` },
        { type:'th', label:'THM', titre:'Théorème d\'Abel radial (hors programme commun, utile)',
          contenu:`Si $\\sum a_n R^n$ converge (en un point du cercle, ici $x = R$ réel), alors $S(x) \\to \\sum a_n R^n$ lorsque $x \\to R^-$. La somme est <strong>continue jusqu'au bord</strong> dans la direction radiale.<br><strong>Exemple</strong> : $\\sum \\frac{(-1)^{n-1}}{n} x^n = \\ln(1+x)$ sur $]-1,1[$, prolongée en $x=1$ donne $\\sum \\frac{(-1)^{n-1}}{n} = \\ln 2$.` },
      ]
    },
    {
      titre: 'Développements en série entière usuels',
      cartes: [
        { type:'form', label:'FORM', titre:'Exponentielle, sinus, cosinus',
          contenu:`Pour tout $x \\in \\mathbb{R}$ (rayon $R = +\\infty$) :<br>$$e^x = \\sum_{n=0}^{+\\infty} \\frac{x^n}{n!},\\qquad \\cos x = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n x^{2n}}{(2n)!},\\qquad \\sin x = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}.$$<br>De même $\\cosh x = \\sum \\frac{x^{2n}}{(2n)!}$ et $\\sinh x = \\sum \\frac{x^{2n+1}}{(2n+1)!}$, $R = +\\infty$.` },
        { type:'form', label:'FORM', titre:'Série géométrique, logarithme, arctangente',
          contenu:`Pour $|x| < 1$ (rayon $R = 1$) :<br>$$\\frac{1}{1-x} = \\sum_{n=0}^{+\\infty} x^n,\\qquad \\ln(1+x) = \\sum_{n=1}^{+\\infty} \\frac{(-1)^{n-1}}{n} x^n,$$<br>$$\\frac{1}{1+x^2} = \\sum_{n=0}^{+\\infty} (-1)^n x^{2n},\\qquad \\arctan x = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{2n+1} x^{2n+1}.$$` },
        { type:'form', label:'FORM', titre:'Série du binôme (exposant réel)',
          contenu:`Pour $\\alpha \\in \\mathbb{R}$ et $|x| < 1$ :<br>$$(1+x)^\\alpha = \\sum_{n=0}^{+\\infty} \\binom{\\alpha}{n} x^n,\\quad \\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}.$$<br>Cas particulier $\\alpha = -\\tfrac12$ : $\\dfrac{1}{\\sqrt{1+x}} = \\sum_n \\binom{-1/2}{n} x^n$. Rayon $R = 1$ (sauf si $\\alpha \\in \\mathbb{N}$, polynôme).` },
        { type:'meth', label:'METH', titre:'Obtenir un DSE',
          contenu:`Pour développer $f$ en série entière :<br><strong>1.</strong> Reconnaître une <strong>fonction usuelle</strong> ou une composée/produit (substituer, multiplier des DSE connus).<br><strong>2.</strong> <strong>Dériver/primitiver</strong> : si $f'$ se développe facilement, intégrer terme à terme.<br><strong>3.</strong> <strong>Décomposition en éléments simples</strong> pour les fractions rationnelles, puis série géométrique.<br><strong>4.</strong> <strong>Équation différentielle</strong> : poser $f = \\sum a_n x^n$, injecter, identifier une récurrence sur $(a_n)$.` },
        { type:'ex', label:'EX', titre:'DSE de $\\frac{1}{(1-x)^2}$ et de $\\arctan$',
          contenu:`<strong>(a)</strong> En dérivant $\\frac{1}{1-x} = \\sum x^n$ : $\\dfrac{1}{(1-x)^2} = \\sum_{n \\ge 1} n x^{n-1} = \\sum_{n \\ge 0} (n+1) x^n$, $R=1$.<br><strong>(b)</strong> $\\arctan'(x) = \\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ ; en primitivant ($\\arctan 0 = 0$) :<br>$$\\arctan x = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{2n+1} x^{2n+1}.$$ En $x = 1$ (Abel) : $\\frac\\pi4 = 1 - \\frac13 + \\frac15 - \\dots$` },
      ]
    },
    {
      titre: 'Exponentielle complexe et applications',
      cartes: [
        { type:'def', label:'DEF', titre:'Exponentielle complexe',
          contenu:`Pour $z \\in \\mathbb{C}$, on définit<br>$$\\exp(z) = e^z = \\sum_{n=0}^{+\\infty} \\frac{z^n}{n!},$$<br>série entière de rayon $R = +\\infty$, donc définie et continue sur tout $\\mathbb{C}$. Elle prolonge l'exponentielle réelle.` },
        { type:'th', label:'THM', titre:'Propriété fondamentale et formule d\'Euler',
          contenu:`Pour tous $z, w \\in \\mathbb{C}$ : $e^{z+w} = e^z\\, e^w$ (par produit de Cauchy). En particulier $e^z \\ne 0$ et $1/e^z = e^{-z}$.<br><strong>Formule d'Euler</strong> : pour $\\theta \\in \\mathbb{R}$,<br>$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta,$$<br>d'où $\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}$, $\\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}$.` },
        { type:'ex', label:'EX', titre:'Linéarisation et sommes trigonométriques',
          contenu:`<strong>Linéarisation</strong> : $\\cos^3\\theta = \\left(\\frac{e^{i\\theta}+e^{-i\\theta}}{2}\\right)^3 = \\frac{1}{4}\\cos(3\\theta) + \\frac34 \\cos\\theta$.<br><strong>Somme géométrique complexe</strong> : pour $\\theta \\notin 2\\pi\\mathbb{Z}$,<br>$$\\sum_{k=0}^{n} e^{ik\\theta} = \\frac{e^{i(n+1)\\theta}-1}{e^{i\\theta}-1} = e^{in\\theta/2}\\,\\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}},$$ d'où en prenant la partie réelle la valeur de $\\sum_{k=0}^n \\cos(k\\theta)$.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 4. INTÉGRALES GÉNÉRALISÉES  (id: ma-int)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-int', matiere: 'ma', ordre: 4, enrich: true,
  titre: 'Intégrales généralisées',
  sections: [
    {
      titre: 'Définition et convergence',
      cartes: [
        { type:'def', label:'DEF', titre:'Intégrale impropre en une borne',
          contenu:`Soit $f$ continue par morceaux sur $[a, b[$ ($b$ fini ou $+\\infty$). L'<strong>intégrale impropre</strong> $\\displaystyle\\int_a^b f(t)\\,\\mathrm{d}t$ <strong>converge</strong> si<br>$$\\lim_{x \\to b^-} \\int_a^x f(t)\\,\\mathrm{d}t \\text{ existe et est finie}.$$<br>Cette limite est alors la valeur de l'intégrale. Sinon l'intégrale <strong>diverge</strong>. Définition analogue à la borne gauche.` },
        { type:'def', label:'DEF', titre:'Intégrale doublement impropre',
          contenu:`Si $f$ est continue par morceaux sur $]a,b[$ avec deux bornes problématiques, on dit que $\\int_a^b f$ converge si, pour un (donc tout) $c \\in ]a,b[$, <strong>les deux</strong> intégrales $\\int_a^c f$ et $\\int_c^b f$ convergent. Alors<br>$$\\int_a^b f = \\int_a^c f + \\int_c^b f.$$<br><strong>Erreur classique</strong> : ne pas séparer les deux problèmes (la valeur principale ne définit pas la convergence).` },
        { type:'prop', label:'PROP', titre:'Linéarité et relation de Chasles',
          contenu:`Si $\\int_a^b f$ et $\\int_a^b g$ convergent, alors $\\int_a^b (\\lambda f + \\mu g)$ converge et vaut $\\lambda \\int_a^b f + \\mu \\int_a^b g$.<br>Relation de Chasles : pour $a < c < b$, $\\int_a^b f$ converge ssi $\\int_a^c f$ et $\\int_c^b f$ convergent, et la somme est additive.<br><strong>Attention</strong> : $\\int (f+g)$ peut converger sans que $\\int f$ ni $\\int g$ ne convergent.` },
      ]
    },
    {
      titre: 'Intégrales de référence',
      cartes: [
        { type:'form', label:'FORM', titre:'Intégrales de Riemann',
          contenu:`$$\\int_1^{+\\infty} \\frac{\\mathrm{d}t}{t^\\alpha} \\text{ converge} \\iff \\alpha > 1,\\qquad \\int_0^1 \\frac{\\mathrm{d}t}{t^\\alpha} \\text{ converge} \\iff \\alpha < 1.$$<br>En cas de convergence : $\\int_1^{+\\infty} t^{-\\alpha}\\mathrm{d}t = \\dfrac{1}{\\alpha - 1}$ et $\\int_0^1 t^{-\\alpha}\\mathrm{d}t = \\dfrac{1}{1-\\alpha}$.` },
        { type:'form', label:'FORM', titre:'Exponentielle et logarithme',
          contenu:`$$\\int_0^{+\\infty} e^{-\\lambda t}\\,\\mathrm{d}t = \\frac{1}{\\lambda}\\ (\\lambda > 0),\\qquad \\int_0^1 \\ln t\\,\\mathrm{d}t = -1.$$<br>Plus généralement $\\int_0^{+\\infty} t^n e^{-t}\\,\\mathrm{d}t = n!$ (fonction $\\Gamma$). L'exponentielle décroissante « bat » toute puissance : $\\int_0^{+\\infty} t^\\alpha e^{-t}\\mathrm{d}t$ converge pour tout $\\alpha > -1$.` },
        { type:'ex', label:'EX', titre:'Intégrale de Dirichlet (semi-convergence)',
          contenu:`$\\displaystyle\\int_0^{+\\infty} \\frac{\\sin t}{t}\\,\\mathrm{d}t$ <strong>converge</strong> (vers $\\frac\\pi2$) mais <strong>n'est pas absolument convergente</strong>.<br>CV : IPP sur $[1,X]$, $\\int_1^X \\frac{\\sin t}{t}\\mathrm{d}t = [\\frac{-\\cos t}{t}]_1^X - \\int_1^X \\frac{\\cos t}{t^2}\\mathrm{d}t$, termes convergents.<br>Non-AC : $\\int_0^{+\\infty}\\frac{|\\sin t|}{t}\\mathrm{d}t = +\\infty$ (minoration par $\\sum \\frac1n$). C'est l'archétype de l'intégrale <strong>semi-convergente</strong>.` },
        { type:'form', label:'FORM', titre:'Intégrales de Wallis et lien factoriel',
          contenu:`Les <strong>intégrales de Wallis</strong> $W_n = \\displaystyle\\int_0^{\\pi/2} \\cos^n t\\,\\mathrm{d}t = \\int_0^{\\pi/2}\\sin^n t\\,\\mathrm{d}t$ (propres, mais fondamentales) vérifient<br>$$W_{n+2} = \\frac{n+1}{n+2}\\,W_n,\\qquad W_0 = \\frac\\pi2,\\ W_1 = 1.$$<br>Elles donnent $W_n \\sim \\sqrt{\\dfrac{\\pi}{2n}}$ et fournissent la <strong>formule de Stirling</strong> $n! \\sim \\sqrt{2\\pi n}\\,(n/e)^n$.` },
      ]
    },
    {
      titre: 'Critères pour fonctions positives',
      cartes: [
        { type:'th', label:'THM', titre:'Comparaison et majoration',
          contenu:`Soient $f, g$ continues par morceaux et <strong>positives</strong> sur $[a,b[$ avec $0 \\le f \\le g$ au voisinage de $b$.<br><ul><li>$\\int_a^b g$ converge $\\Rightarrow \\int_a^b f$ converge ;</li><li>$\\int_a^b f$ diverge $\\Rightarrow \\int_a^b g$ diverge.</li></ul>Pour une fonction positive, l'intégrale converge ssi la fonction $x \\mapsto \\int_a^x f$ est <strong>majorée</strong>.` },
        { type:'th', label:'THM', titre:'Critère des équivalents',
          contenu:`Soient $f, g$ continues par morceaux <strong>de signe constant</strong> au voisinage de $b$, avec $f(t) \\underset{t \\to b}{\\sim} g(t)$. Alors $\\int_a^b f$ et $\\int_a^b g$ sont de <strong>même nature</strong>.<br><strong>Mise en garde</strong> : si $f$ change de signe (ex. $\\frac{\\sin t}{t}$), l'équivalent ne suffit pas pour conclure à la convergence.` },
        { type:'th', label:'THM', titre:'Comparaison série-intégrale',
          contenu:`Soit $f$ continue par morceaux, <strong>positive et décroissante</strong> sur $[1,+\\infty[$. Alors la série $\\sum_n f(n)$ et l'intégrale $\\int_1^{+\\infty} f(t)\\,\\mathrm{d}t$ sont de <strong>même nature</strong>, via l'encadrement $\\int_n^{n+1} f \\le f(n) \\le \\int_{n-1}^n f$.<br><strong>Application</strong> : retrouve la nature des séries de Riemann et de Bertrand.` },
        { type:'meth', label:'METH', titre:'Étudier la nature d\'une intégrale impropre',
          contenu:`<strong>1.</strong> Identifier les bornes problématiques, séparer (un problème par morceau).<br><strong>2.</strong> <strong>Si signe constant</strong> : équivalent ou majoration par une intégrale de Riemann/exponentielle.<br><strong>3.</strong> <strong>Si signe variable</strong> : tester l'<em>absolue convergence</em> ($\\int |f|$) ; si elle échoue, tenter une <em>IPP</em> (pour faire apparaître un facteur intégrable) ou le critère d'Abel.<br><strong>4.</strong> Conclure morceau par morceau.` },
      ]
    },
    {
      titre: 'Convergence absolue et signe variable',
      cartes: [
        { type:'def', label:'DEF', titre:'Convergence absolue',
          contenu:`L'intégrale $\\int_a^b f$ est <strong>absolument convergente</strong> si $\\int_a^b |f|$ converge. Une intégrale convergente mais non absolument convergente est dite <strong>semi-convergente</strong>.` },
        { type:'th', label:'THM', titre:'L\'absolue convergence implique la convergence',
          contenu:`Si $\\int_a^b |f|$ converge, alors $\\int_a^b f$ converge et<br>$$\\left| \\int_a^b f \\right| \\le \\int_a^b |f|.$$<br>Pratiquement : pour $f$ de signe quelconque, majorer $|f|$ par une fonction positive intégrable suffit à conclure à la convergence (mais ne dit rien en cas de semi-convergence).` },
        { type:'prop', label:'PROP', titre:'Règle d\'Abel pour les intégrales',
          contenu:`Soit $\\int_a^{+\\infty} f(t) g(t)\\,\\mathrm{d}t$ avec $g$ de classe $\\mathcal{C}^1$, <strong>décroissante</strong> et tendant vers $0$ en $+\\infty$, et $F(x) = \\int_a^x f$ <strong>bornée</strong>. Alors l'intégrale converge.<br><strong>Exemple</strong> : $\\int_1^{+\\infty} \\frac{\\sin t}{t^\\alpha}\\mathrm{d}t$ converge pour tout $\\alpha > 0$ ($f = \\sin$ à primitive bornée, $g = t^{-\\alpha} \\downarrow 0$).` },
        { type:'meth', label:'METH', titre:'Distinguer convergence et absolue convergence',
          contenu:`Face à $\\int_a^b f$ avec $f$ de signe variable :<br><strong>1.</strong> Tester d'abord l'<strong>absolue convergence</strong> : si $\\int_a^b |f|$ converge (majoration de $|f|$), c'est gagné.<br><strong>2.</strong> Si $\\int |f|$ diverge, ne pas conclure à la divergence de $\\int f$ ! Tenter une <strong>IPP</strong> ou la <strong>règle d'Abel</strong> pour établir une éventuelle semi-convergence.<br><strong>3.</strong> Pour prouver la <em>non</em>-absolue convergence : minorer $|f|$ sur des intervalles périodiques par une série divergente.` },
      ]
    },
    {
      titre: 'Techniques de calcul',
      cartes: [
        { type:'th', label:'THM', titre:'Intégration par parties généralisée',
          contenu:`Soient $u, v$ de classe $\\mathcal{C}^1$ sur $[a,b[$. Si deux des trois objets $\\big[uv\\big]_a^b$, $\\int_a^b u'v$, $\\int_a^b uv'$ ont une limite finie, le troisième aussi et<br>$$\\int_a^b u(t) v'(t)\\,\\mathrm{d}t = \\Big[ u(t) v(t) \\Big]_a^b - \\int_a^b u'(t) v(t)\\,\\mathrm{d}t,$$<br>le crochet désignant $\\lim_{x \\to b^-} u(x)v(x) - u(a)v(a)$.` },
        { type:'th', label:'THM', titre:'Changement de variable',
          contenu:`Soit $\\varphi : ]\\alpha, \\beta[ \\to ]a, b[$ une bijection de classe $\\mathcal{C}^1$, strictement monotone. Alors $\\int_a^b f(t)\\,\\mathrm{d}t$ et $\\int_\\alpha^\\beta f(\\varphi(u)) \\varphi'(u)\\,\\mathrm{d}u$ sont de <strong>même nature</strong>, et égales en cas de convergence :<br>$$\\int_a^b f(t)\\,\\mathrm{d}t = \\int_\\alpha^\\beta f(\\varphi(u))\\,\\varphi'(u)\\,\\mathrm{d}u.$$` },
        { type:'ex', label:'EX', titre:'Calcul de $\\int_0^{+\\infty} \\frac{\\mathrm{d}t}{1+t^2}$ et $\\int_0^{+\\infty} e^{-t^2}\\mathrm{d}t$',
          contenu:`<strong>(a)</strong> $\\int_0^{+\\infty} \\dfrac{\\mathrm{d}t}{1+t^2} = \\lim_{X\\to+\\infty} [\\arctan t]_0^X = \\dfrac{\\pi}{2}$.<br><strong>(b)</strong> L'<strong>intégrale de Gauss</strong> $\\int_0^{+\\infty} e^{-t^2}\\mathrm{d}t = \\dfrac{\\sqrt\\pi}{2}$ converge ($t^2 e^{-t^2} \\to 0$ donne $e^{-t^2}=o(1/t^2)$) ; sa valeur s'obtient par intégrale double (passage en polaires) ou intégrale à paramètre.` },
        { type:'ex', label:'EX', titre:'Fonction Gamma',
          contenu:`Pour $x > 0$, $\\Gamma(x) = \\displaystyle\\int_0^{+\\infty} t^{x-1} e^{-t}\\,\\mathrm{d}t$ converge : en $0$, $t^{x-1}$ intégrable car $x-1 > -1$ ; en $+\\infty$, domination par $e^{-t/2}$.<br>Par IPP : $\\Gamma(x+1) = x\\,\\Gamma(x)$, et $\\Gamma(1) = 1$, donc $\\Gamma(n+1) = n!$ pour $n \\in \\mathbb{N}$. La fonction $\\Gamma$ <strong>interpole la factorielle</strong>.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 5. FONCTIONS VECTORIELLES ET ARCS  (id: ma-fvect)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-fvect', matiere: 'ma', ordre: 5, enrich: true,
  titre: 'Fonctions vectorielles et arcs paramétrés',
  sections: [
    {
      titre: 'Dérivation des fonctions vectorielles',
      cartes: [
        { type:'def', label:'DEF', titre:'Dérivabilité d\'une fonction à valeurs vectorielles',
          contenu:`Soit $f : I \\to E$ ($E$ espace vectoriel normé de dimension finie) et $t_0 \\in I$. On dit que $f$ est <strong>dérivable</strong> en $t_0$ si<br>$$f'(t_0) = \\lim_{h \\to 0} \\frac{f(t_0 + h) - f(t_0)}{h}$$<br>existe dans $E$. Dans une base $(e_1, \\dots, e_p)$, en écrivant $f = \\sum f_i\\, e_i$ : $f$ est dérivable ssi chaque <strong>fonction coordonnée</strong> $f_i$ l'est, et $f' = \\sum f_i'\\, e_i$.` },
        { type:'prop', label:'PROP', titre:'Règles de dérivation',
          contenu:`Soient $f, g : I \\to E$ dérivables, $\\lambda : I \\to \\mathbb{R}$ dérivable, $\\langle \\cdot,\\cdot\\rangle$ un produit scalaire, $B$ bilinéaire :<br><ul><li>$(f + g)' = f' + g'$, $(\\lambda f)' = \\lambda' f + \\lambda f'$ ;</li><li>$\\langle f, g \\rangle' = \\langle f', g \\rangle + \\langle f, g' \\rangle$ ;</li><li>$B(f,g)' = B(f', g) + B(f, g')$ ; en dimension 3, $(f \\wedge g)' = f' \\wedge g + f \\wedge g'$.</li></ul>` },
        { type:'prop', label:'PROP', titre:'Dérivée de la norme et vecteur de norme constante',
          contenu:`Si $f$ est dérivable et de <strong>norme euclidienne constante</strong> ($\\|f(t)\\| = $ cte), alors $f'(t) \\perp f(t)$ pour tout $t$ : le vecteur dérivé est orthogonal au vecteur.<br><strong>Preuve</strong> : dériver $\\langle f, f \\rangle = $ cte donne $2\\langle f', f \\rangle = 0$.<br><strong>Application</strong> : mouvement sur une sphère, repère de Frenet.` },
        { type:'th', label:'THM', titre:'Composition et théorème fondamental',
          contenu:`<strong>Composition</strong> : si $\\varphi : J \\to I$ est dérivable (à valeurs réelles) et $f : I \\to E$ dérivable, alors $f \\circ \\varphi$ est dérivable et $(f \\circ \\varphi)'(t) = \\varphi'(t)\\, f'(\\varphi(t))$.<br><strong>Théorème fondamental</strong> : si $f : I \\to E$ est continue, $x \\mapsto \\int_a^x f$ est une primitive de $f$ (de classe $\\mathcal{C}^1$, de dérivée $f$).` },
      ]
    },
    {
      titre: 'Classe $\\mathcal{C}^k$ et Taylor',
      cartes: [
        { type:'def', label:'DEF', titre:'Fonction de classe $\\mathcal{C}^k$',
          contenu:`$f : I \\to E$ est de <strong>classe $\\mathcal{C}^k$</strong> si elle est $k$ fois dérivable et $f^{(k)}$ est continue. Dans une base, cela équivaut à : chaque coordonnée $f_i$ est $\\mathcal{C}^k$.<br>$f$ est de classe $\\mathcal{C}^\\infty$ si elle est $\\mathcal{C}^k$ pour tout $k$. Les opérations usuelles (combinaisons, produits scalaires) préservent la classe $\\mathcal{C}^k$.` },
        { type:'th', label:'THM', titre:'Inégalité des accroissements finis (version vectorielle)',
          contenu:`Soit $f : [a,b] \\to E$ de classe $\\mathcal{C}^1$ (ou continue sur $[a,b]$, dérivable sur $]a,b[$). Si $\\|f'(t)\\| \\le M$ pour tout $t$, alors<br>$$\\|f(b) - f(a)\\| \\le M\\,(b - a).$$<br><strong>Important</strong> : l'<em>égalité</em> des accroissements finis est <strong>fausse</strong> pour les fonctions vectorielles ; seule l'inégalité subsiste.` },
        { type:'th', label:'THM', titre:'Formules de Taylor',
          contenu:`Pour $f : I \\to E$ de classe $\\mathcal{C}^{n+1}$ et $a, a+h \\in I$ :<br><strong>Taylor avec reste intégral</strong> :<br>$$f(a+h) = \\sum_{k=0}^{n} \\frac{h^k}{k!} f^{(k)}(a) + \\int_a^{a+h} \\frac{(a+h-t)^n}{n!} f^{(n+1)}(t)\\,\\mathrm{d}t.$$<br><strong>Inégalité de Taylor-Lagrange</strong> : $\\left\\| f(a+h) - \\sum_{k=0}^n \\frac{h^k}{k!} f^{(k)}(a) \\right\\| \\le \\dfrac{|h|^{n+1}}{(n+1)!} \\sup \\|f^{(n+1)}\\|$.` },
      ]
    },
    {
      titre: 'Arcs paramétrés et tangente',
      cartes: [
        { type:'def', label:'DEF', titre:'Arc paramétré, point régulier',
          contenu:`Un <strong>arc paramétré</strong> de classe $\\mathcal{C}^k$ est une application $\\gamma : I \\to \\mathbb{R}^2$ (ou $\\mathbb{R}^3$), $t \\mapsto M(t) = (x(t), y(t))$ de classe $\\mathcal{C}^k$. Le point $M(t)$ est <strong>régulier</strong> si $\\gamma'(t) \\ne 0$ ; sinon il est <strong>stationnaire</strong> (singulier).<br>Le support de l'arc est l'image $\\gamma(I)$.` },
        { type:'prop', label:'PROP', titre:'Tangente en un point',
          contenu:`En un point <strong>régulier</strong> $M(t_0)$, l'arc admet une tangente dirigée par le vecteur vitesse $\\gamma'(t_0) = (x'(t_0), y'(t_0))$.<br>En un point <strong>stationnaire</strong>, la tangente (si elle existe) est dirigée par la <strong>première dérivée non nulle</strong> $\\gamma^{(p)}(t_0)$. L'allure locale (rebroussement, méplat) se lit sur le couple $(p, q)$ des deux premières dérivées non colinéaires.` },
        { type:'meth', label:'METH', titre:'Étudier et tracer une courbe paramétrée',
          contenu:`<strong>1.</strong> Domaine de définition ; réductions (parité, périodicité) pour restreindre l'intervalle d'étude.<br><strong>2.</strong> Tableau de variations conjoint de $x(t)$ et $y(t)$ (signes de $x'$ et $y'$).<br><strong>3.</strong> Points <strong>réguliers / stationnaires</strong>, tangentes (horizontale si $y'=0$, verticale si $x'=0$).<br><strong>4.</strong> Branches infinies (asymptotes, directions asymptotiques).<br><strong>5.</strong> Tracé en respectant tangentes et concavités.` },
        { type:'prop', label:'PROP', titre:'Position locale et classification des points',
          contenu:`Soit $M(t_0)$ un point d'un arc $\\mathcal{C}^\\infty$. Notons $p$ le plus petit ordre de dérivée non nulle (direction de la <strong>tangente</strong>) et $q > p$ le plus petit ordre tel que $\\gamma^{(q)}(t_0)$ ne soit pas colinéaire à $\\gamma^{(p)}(t_0)$. La parité de $(p,q)$ donne l'allure :<br><ul><li>$p$ impair, $q$ pair : <strong>point ordinaire</strong> ;</li><li>$p$ pair, $q$ impair : <strong>rebroussement de 1re espèce</strong> ;</li><li>$p$ pair, $q$ pair : <strong>rebroussement de 2e espèce</strong> ;</li><li>$p$ impair, $q$ impair : <strong>point d'inflexion</strong>.</li></ul>` },
        { type:'ex', label:'EX', titre:'Étude locale d\'une cycloïde',
          contenu:`Soit $\\gamma(t) = (t - \\sin t,\\ 1 - \\cos t)$, $t \\in \\mathbb{R}$ (cycloïde). $\\gamma'(t) = (1 - \\cos t,\\ \\sin t)$.<br>$\\gamma'(t) = 0 \\iff \\cos t = 1$ et $\\sin t = 0 \\iff t \\in 2\\pi\\mathbb{Z}$ : points <strong>stationnaires</strong>. Au voisinage de $t = 0$ : $x(t) \\sim \\frac{t^3}{6}$, $y(t) \\sim \\frac{t^2}{2}$, d'où $\\gamma'' = (\\sin t, \\cos t)$ non nul et $\\gamma'''$ : <strong>point de rebroussement de première espèce</strong>, tangente verticale.` },
      ]
    },
    {
      titre: 'Longueur d\'arc',
      cartes: [
        { type:'def', label:'DEF', titre:'Abscisse curviligne',
          contenu:`Pour un arc régulier $\\gamma$ de classe $\\mathcal{C}^1$, l'<strong>abscisse curviligne</strong> $s$ vérifie<br>$$\\frac{\\mathrm{d}s}{\\mathrm{d}t} = \\|\\gamma'(t)\\| = \\sqrt{x'(t)^2 + y'(t)^2}.$$<br>C'est, à une constante additive près, la longueur algébrique parcourue le long de l'arc. Le vecteur tangent unitaire est $T = \\dfrac{\\gamma'(t)}{\\|\\gamma'(t)\\|} = \\dfrac{\\mathrm{d}\\gamma}{\\mathrm{d}s}$.` },
        { type:'th', label:'THM', titre:'Longueur d\'un arc',
          contenu:`La <strong>longueur</strong> de l'arc $\\mathcal{C}^1$ $\\gamma : [a,b] \\to \\mathbb{R}^n$ est<br>$$L = \\int_a^b \\| \\gamma'(t) \\|\\,\\mathrm{d}t = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2 + \\dots}\\;\\mathrm{d}t.$$<br>Pour un graphe $y = f(x)$ sur $[a,b]$ : $L = \\int_a^b \\sqrt{1 + f'(x)^2}\\,\\mathrm{d}x$. En polaires $r = r(\\theta)$ : $L = \\int \\sqrt{r^2 + r'^2}\\,\\mathrm{d}\\theta$.` },
        { type:'ex', label:'EX', titre:'Longueur d\'une arche de cycloïde',
          contenu:`Reprenons $\\gamma(t) = (t - \\sin t, 1 - \\cos t)$. Alors $\\|\\gamma'(t)\\|^2 = (1-\\cos t)^2 + \\sin^2 t = 2(1 - \\cos t) = 4\\sin^2\\frac{t}{2}$, donc $\\|\\gamma'(t)\\| = 2\\left|\\sin\\frac{t}{2}\\right|$.<br>Longueur d'une arche ($t \\in [0, 2\\pi]$) :<br>$$L = \\int_0^{2\\pi} 2\\sin\\frac{t}{2}\\,\\mathrm{d}t = \\Big[ -4\\cos\\frac{t}{2} \\Big]_0^{2\\pi} = 8.$$` },
      ]
    },
    {
      titre: 'Intégration des fonctions vectorielles',
      cartes: [
        { type:'def', label:'DEF', titre:'Intégrale d\'une fonction vectorielle',
          contenu:`Pour $f : [a,b] \\to E$ continue (par morceaux), de coordonnées $(f_1, \\dots, f_p)$ dans une base, on définit<br>$$\\int_a^b f(t)\\,\\mathrm{d}t = \\left( \\int_a^b f_1(t)\\,\\mathrm{d}t,\\ \\dots,\\ \\int_a^b f_p(t)\\,\\mathrm{d}t \\right) \\in E.$$<br>Cette définition ne dépend pas de la base choisie.` },
        { type:'th', label:'THM', titre:'Inégalité de la moyenne (vectorielle)',
          contenu:`Pour $f : [a,b] \\to E$ continue :<br>$$\\left\\| \\int_a^b f(t)\\,\\mathrm{d}t \\right\\| \\le \\int_a^b \\| f(t) \\|\\,\\mathrm{d}t \\le (b-a) \\sup_{[a,b]} \\|f\\|.$$<br>Cette inégalité (norme de l'intégrale $\\le$ intégrale de la norme) est l'analogue vectoriel de l'inégalité triangulaire.` },
        { type:'prop', label:'PROP', titre:'Théorème fondamental, version vectorielle',
          contenu:`Si $f : I \\to E$ est continue, la fonction $F(x) = \\int_a^x f(t)\\,\\mathrm{d}t$ est de classe $\\mathcal{C}^1$ et $F' = f$. Réciproquement, si $g$ est $\\mathcal{C}^1$ :<br>$$g(b) - g(a) = \\int_a^b g'(t)\\,\\mathrm{d}t.$$<br>Toutes les primitives de $f$ diffèrent d'un vecteur constant.` },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════════
// 6. ESPACES VECTORIELS NORMÉS ET TOPOLOGIE  (id: ma-evn)
// ══════════════════════════════════════════════════════════════
{
  id: 'ma-evn', matiere: 'ma', ordre: 6, enrich: true,
  titre: 'Espaces vectoriels normés et topologie',
  sections: [
    {
      titre: 'Normes et distances',
      cartes: [
        { type:'def', label:'DEF', titre:'Norme',
          contenu:`Une <strong>norme</strong> sur un $\\mathbb{K}$-espace vectoriel $E$ est une application $N : E \\to \\mathbb{R}_+$ telle que, pour tous $x, y \\in E$ et $\\lambda \\in \\mathbb{K}$ :<br><ul><li><strong>Séparation</strong> : $N(x) = 0 \\Rightarrow x = 0_E$ ;</li><li><strong>Homogénéité</strong> : $N(\\lambda x) = |\\lambda|\\, N(x)$ ;</li><li><strong>Inégalité triangulaire</strong> : $N(x + y) \\le N(x) + N(y)$.</li></ul>Le couple $(E, N)$ est un <strong>espace vectoriel normé</strong> (evn).` },
        { type:'form', label:'FORM', titre:'Normes usuelles sur $\\mathbb{K}^n$',
          contenu:`Pour $x = (x_1, \\dots, x_n)$ :<br>$$\\|x\\|_1 = \\sum_{i=1}^n |x_i|,\\quad \\|x\\|_2 = \\sqrt{\\sum_{i=1}^n |x_i|^2},\\quad \\|x\\|_\\infty = \\max_{1 \\le i \\le n} |x_i|.$$<br>Sur $\\mathcal{C}([a,b])$ : $\\|f\\|_1 = \\int_a^b |f|$, $\\|f\\|_2 = \\big(\\int_a^b |f|^2\\big)^{1/2}$, $\\|f\\|_\\infty = \\sup |f|$.` },
        { type:'def', label:'DEF', titre:'Distance et boules',
          contenu:`La <strong>distance</strong> associée à $N$ est $d(x,y) = N(x - y)$. La <strong>boule ouverte</strong> de centre $a$ et de rayon $r > 0$ est<br>$$B(a, r) = \\{\\, x \\in E : \\|x - a\\| < r \\,\\},$$<br>la boule fermée $\\overline{B}(a,r) = \\{ x : \\|x - a\\| \\le r \\}$, la sphère $S(a,r) = \\{ x : \\|x-a\\| = r \\}$.` },
        { type:'prop', label:'PROP', titre:'Seconde inégalité triangulaire',
          contenu:`Pour tous $x, y \\in E$ :<br>$$\\big| \\,\\|x\\| - \\|y\\|\\, \\big| \\le \\|x - y\\|.$$<br>Conséquence directe : l'application $x \\mapsto \\|x\\|$ est <strong>$1$-lipschitzienne</strong>, donc continue sur $E$.` },
      ]
    },
    {
      titre: 'Ouverts, fermés, adhérence',
      cartes: [
        { type:'def', label:'DEF', titre:'Ouvert et fermé',
          contenu:`Une partie $U \\subset E$ est <strong>ouverte</strong> si elle est voisinage de chacun de ses points :<br>$$\\forall a \\in U,\\ \\exists r > 0,\\ B(a, r) \\subset U.$$<br>Une partie $F$ est <strong>fermée</strong> si son complémentaire $E \\setminus F$ est ouvert. $\\varnothing$ et $E$ sont à la fois ouverts et fermés. Une réunion quelconque d'ouverts est ouverte ; une intersection finie d'ouverts est ouverte.` },
        { type:'def', label:'DEF', titre:'Intérieur, adhérence, frontière',
          contenu:`L'<strong>intérieur</strong> $\\mathring{A}$ est le plus grand ouvert inclus dans $A$ ; l'<strong>adhérence</strong> $\\overline{A}$ est le plus petit fermé contenant $A$. La <strong>frontière</strong> est $\\partial A = \\overline{A} \\setminus \\mathring{A}$.<br>$x \\in \\overline{A} \\iff$ toute boule $B(x,r)$ rencontre $A \\iff x$ est limite d'une suite d'éléments de $A$.` },
        { type:'th', label:'THM', titre:'Caractérisation séquentielle des fermés',
          contenu:`Une partie $F \\subset E$ est <strong>fermée</strong> si et seulement si : pour toute suite $(x_n)$ d'éléments de $F$ qui converge dans $E$, sa limite appartient à $F$.<br>C'est l'outil le plus efficace pour prouver qu'un ensemble est fermé (passage à la limite dans des inégalités larges, des égalités...).` },
        { type:'def', label:'DEF', titre:'Densité',
          contenu:`Une partie $A$ est <strong>dense</strong> dans $E$ si $\\overline{A} = E$, c'est-à-dire si tout point de $E$ est limite d'une suite de points de $A$, ou encore si tout ouvert non vide rencontre $A$.<br><strong>Exemples</strong> : $\\mathbb{Q}$ dense dans $\\mathbb{R}$ ; les polynômes denses dans $(\\mathcal{C}([a,b]), \\|\\cdot\\|_\\infty)$ (Weierstrass) ; $GL_n(\\mathbb{R})$ dense dans $\\mathcal{M}_n(\\mathbb{R})$.` },
      ]
    },
    {
      titre: 'Suites et valeurs d\'adhérence',
      cartes: [
        { type:'def', label:'DEF', titre:'Convergence d\'une suite dans un evn',
          contenu:`Une suite $(x_n)$ de $E$ <strong>converge</strong> vers $\\ell \\in E$ si $\\|x_n - \\ell\\| \\to 0$, i.e.<br>$$\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall n \\ge N,\\ \\|x_n - \\ell\\| \\le \\varepsilon.$$<br>La limite, si elle existe, est <strong>unique</strong>. Toute suite convergente est bornée.` },
        { type:'def', label:'DEF', titre:'Valeur d\'adhérence',
          contenu:`$a \\in E$ est <strong>valeur d'adhérence</strong> de $(x_n)$ s'il existe une suite extraite $(x_{\\varphi(n)})$ convergeant vers $a$. De façon équivalente :<br>$$\\forall \\varepsilon > 0,\\ \\forall N,\\ \\exists n \\ge N,\\ \\|x_n - a\\| \\le \\varepsilon$$<br>(la suite passe infiniment souvent près de $a$). Une suite converge ssi elle est bornée et possède une <strong>unique</strong> valeur d'adhérence.` },
        { type:'prop', label:'PROP', titre:'Convergence par coordonnées (dimension finie)',
          contenu:`En dimension finie, fixons une base. Une suite $(x_n)$ converge vers $\\ell$ <strong>si et seulement si</strong> chaque suite de coordonnées converge vers la coordonnée correspondante de $\\ell$.<br>Ce résultat (conséquence de l'équivalence des normes) ramène la convergence vectorielle à des convergences scalaires.` },
      ]
    },
    {
      titre: 'Continuité',
      cartes: [
        { type:'def', label:'DEF', titre:'Continuité (définitions équivalentes)',
          contenu:`Soit $f : (E, N_E) \\to (F, N_F)$ et $a \\in E$. Sont équivalents :<br><ul><li><strong>$\\varepsilon$-$\\delta$</strong> : $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\|x - a\\|_E \\le \\delta \\Rightarrow \\|f(x) - f(a)\\|_F \\le \\varepsilon$ ;</li><li><strong>séquentielle</strong> : pour toute suite $x_n \\to a$, $f(x_n) \\to f(a)$.</li></ul>$f$ est continue sur $E$ si elle l'est en tout point.` },
        { type:'th', label:'THM', titre:'Caractérisation topologique de la continuité',
          contenu:`$f : E \\to F$ est <strong>continue sur $E$</strong> si et seulement si l'image réciproque de tout ouvert de $F$ est un ouvert de $E$ (de façon équivalente, l'image réciproque de tout fermé est un fermé).<br><strong>Application</strong> : $\\{ x : f(x) < c \\}$ est ouvert, $\\{ x : g(x) = 0 \\}$ est fermé, dès que $f, g$ sont continues.` },
        { type:'def', label:'DEF', titre:'Application lipschitzienne, continuité uniforme',
          contenu:`$f : E \\to F$ est <strong>$k$-lipschitzienne</strong> si $\\|f(x) - f(y)\\| \\le k\\,\\|x - y\\|$ pour tous $x, y$. Toute application lipschitzienne est <strong>uniformément continue</strong>, donc continue.<br>La continuité uniforme : $\\forall \\varepsilon,\\ \\exists \\delta,\\ \\forall x,y,\\ \\|x-y\\| \\le \\delta \\Rightarrow \\|f(x)-f(y)\\| \\le \\varepsilon$ ($\\delta$ indépendant du point).` },
        { type:'th', label:'THM', titre:'Continuité des applications linéaires',
          contenu:`Soit $u : E \\to F$ <strong>linéaire</strong>. Sont équivalents : $u$ continue ; $u$ continue en $0$ ; $u$ bornée sur la boule unité ; il existe $k \\ge 0$ tel que $\\|u(x)\\| \\le k\\,\\|x\\|$ pour tout $x$.<br><strong>En dimension finie</strong> : <em>toute</em> application linéaire (et plus généralement multilinéaire) au départ d'un evn de dimension finie est continue.` },
      ]
    },
    {
      titre: 'Compacité',
      cartes: [
        { type:'def', label:'DEF', titre:'Partie compacte (caractérisation séquentielle)',
          contenu:`Une partie $K \\subset E$ est <strong>compacte</strong> si de toute suite d'éléments de $K$ on peut extraire une sous-suite convergeant <strong>dans $K$</strong> (propriété de Bolzano-Weierstrass).<br>Toute partie compacte est <strong>fermée et bornée</strong>.` },
        { type:'th', label:'THM', titre:'Compacts de la dimension finie (Borel-Lebesgue / B-W)',
          contenu:`Dans un evn de <strong>dimension finie</strong>, une partie est compacte <strong>si et seulement si</strong> elle est fermée et bornée.<br>En particulier, les segments $[a,b]$, les boules fermées, les sphères sont compacts. <strong>Faux en dimension infinie</strong> : la boule unité fermée n'y est jamais compacte.` },
        { type:'th', label:'THM', titre:'Image continue d\'un compact, théorème des bornes',
          contenu:`Soit $f : K \\to F$ continue, $K$ compact. Alors $f(K)$ est <strong>compact</strong>.<br><strong>Conséquence</strong> (théorème des bornes atteintes) : une fonction <strong>continue à valeurs réelles</strong> sur un compact non vide est <strong>bornée et atteint ses bornes</strong>. <strong>Théorème de Heine</strong> : $f$ continue sur un compact y est <strong>uniformément continue</strong>.` },
        { type:'meth', label:'METH', titre:'Exploiter la compacité',
          contenu:`<strong>Schéma classique</strong> : pour prouver l'existence d'un minimum/maximum, d'un point fixe, d'une distance atteinte...<br><strong>1.</strong> Se ramener à une fonction continue à valeurs réelles sur un <strong>compact</strong>.<br><strong>2.</strong> Invoquer le théorème des bornes atteintes (existence d'un point où le min/max est réalisé).<br><strong>3.</strong> Exploiter ce point. Alternative : extraction d'une sous-suite convergente à partir d'une suite bornée (en dimension finie).` },
      ]
    },
    {
      titre: 'Dimension finie, complétude, connexité',
      cartes: [
        { type:'th', label:'THM', titre:'Équivalence des normes en dimension finie',
          contenu:`Sur un espace vectoriel de <strong>dimension finie</strong>, toutes les normes sont <strong>équivalentes</strong> : pour deux normes $N_1, N_2$, il existe $\\alpha, \\beta > 0$ tels que<br>$$\\alpha\\, N_1(x) \\le N_2(x) \\le \\beta\\, N_1(x),\\quad \\forall x.$$<br><strong>Conséquences</strong> : les notions topologiques (ouverts, fermés, compacts, limites, continuité) ne dépendent <strong>pas</strong> du choix de la norme. Faux en dimension infinie.` },
        { type:'def', label:'DEF', titre:'Suite de Cauchy, espace complet',
          contenu:`$(x_n)$ est une <strong>suite de Cauchy</strong> si $\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall p,q \\ge N,\\ \\|x_p - x_q\\| \\le \\varepsilon$. Toute suite convergente est de Cauchy.<br>Un evn est <strong>complet</strong> (espace de Banach) si toute suite de Cauchy y converge.` },
        { type:'th', label:'THM', titre:'Complétude de la dimension finie',
          contenu:`Tout espace vectoriel normé de <strong>dimension finie</strong> est <strong>complet</strong>. Plus généralement, tout sous-espace de dimension finie d'un evn est fermé.<br>$\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{R}^n$, $\\mathcal{M}_n(\\mathbb{K})$ sont complets. $(\\mathcal{C}([a,b]), \\|\\cdot\\|_\\infty)$ est complet (mais pas pour $\\|\\cdot\\|_1$).` },
        { type:'def', label:'DEF', titre:'Connexité par arcs',
          contenu:`Une partie $A \\subset E$ est <strong>connexe par arcs</strong> si deux points quelconques peuvent être reliés par un <strong>chemin continu</strong> tracé dans $A$ : pour $a, b \\in A$, il existe $\\gamma : [0,1] \\to A$ continue avec $\\gamma(0) = a$, $\\gamma(1) = b$.<br>Tout <strong>convexe</strong> (et plus généralement étoilé) est connexe par arcs.` },
        { type:'th', label:'THM', titre:'Image continue et TVI généralisé',
          contenu:`L'image d'une partie <strong>connexe par arcs</strong> par une application continue est connexe par arcs.<br><strong>Conséquence</strong> (théorème des valeurs intermédiaires) : si $f : A \\to \\mathbb{R}$ est continue et $A$ connexe par arcs, alors $f(A)$ est un <strong>intervalle</strong>. Les parties connexes par arcs de $\\mathbb{R}$ sont exactement les intervalles.` },
      ]
    },
  ]
},

];
