export function seedMethodesQuality(db) {
  const raabeDuhamel = `
    <div class="program-note program-note--outside">
      <strong>Hors programme commun, mais important.</strong>
      La règle de Raabe-Duhamel n'est pas un réflexe à citer comme théorème officiel sans justification.
      Elle sert surtout à traiter proprement les séries positives quand d'Alembert donne une limite égale à 1.
    </div>
    <div class="step"><div class="step-n">1</div><div>On suppose $u_n &gt; 0$ et
      $$\\frac{u_{n+1}}{u_n}=1-\\frac{\\alpha}{n}+o\\!\\left(\\frac1n\\right).$$</div></div>
    <div class="step"><div class="step-n">2</div><div>En prenant le logarithme :
      $$\\ln u_{n+1}-\\ln u_n=\\ln\\left(1-\\frac{\\alpha}{n}+o\\left(\\frac1n\\right)\\right)
      =-\\frac{\\alpha}{n}+o\\left(\\frac1n\\right).$$</div></div>
    <div class="step"><div class="step-n">3</div><div>Par sommation,
      $$\\ln u_n=-\\alpha\\ln n+o(\\ln n),$$
      donc $u_n$ se comporte comme une puissance proche de $n^{-\\alpha}$ au sens logarithmique.</div></div>
    <div class="step"><div class="step-n">4</div><div>On compare alors à une série de Riemann :
      si $\\alpha &gt; 1$, la série converge ; si $\\alpha &lt; 1$, elle diverge. Le cas $\\alpha=1$ reste indéterminé.</div></div>
    <div class="tip"><strong>Exemple.</strong> Pour $u_n=\\binom{2n}{n}/4^n$, on obtient $\\alpha=1/2$ : la série diverge, ce qui est cohérent avec $u_n\\sim 1/\\sqrt{\\pi n}$.</div>`;

  db.run(
    `UPDATE methodes
     SET contenu = ?, type = 'astuce'
     WHERE titre = 'Règle de Raabe-Duhamel'`,
    [raabeDuhamel]
  );

  update(db, 'Algorithme de décision pour une série', `
    <div class="program-note">
      <strong>Programme.</strong> Les tests usuels sont au programme ; Raabe-Duhamel est seulement un repère hors programme à justifier si on l'utilise.
    </div>
    <div class="step"><div class="step-n">1</div><div>Vérifier la <strong>condition nécessaire de convergence</strong> : si $u_n\\not\\to0$, alors $\\sum u_n$ diverge.</div></div>
    <div class="step"><div class="step-n">2</div><div>Si les termes sont positifs : comparaison, équivalent, domination, séries de Riemann, règle de d'Alembert si elle est concluante.</div></div>
    <div class="step"><div class="step-n">3</div><div>Si le signe varie : tester d'abord la convergence absolue, puis les outils adaptés aux séries alternées ou aux transformations.</div></div>
    <div class="step"><div class="step-n">4</div><div>Si d'Alembert donne $1$, chercher un équivalent de $u_n$, utiliser une comparaison série-intégrale ou justifier un critère plus fin.</div></div>`);

  update(db, "Théorème d'Abel radial", `
    <div class="program-note program-note--outside">
      <strong>Hors programme commun, mais utile.</strong>
      À utiliser comme résultat démontré dans une solution, ou à replacer en exercice guidé.
    </div>
    <div class="step"><div class="step-n">1</div><div>Si $\\sum a_n R^n$ converge, on étudie $S(x)=\\sum a_nx^n$ lorsque $x\\to R^-$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Par changement $t=x/R$, on se ramène à $\\sum b_nt^n$ avec $\\sum b_n$ convergente.</div></div>
    <div class="step"><div class="step-n">3</div><div>Une transformation d'Abel exprime $\\sum b_nt^n$ avec les restes de la série, puis le contrôle des restes donne la limite.</div></div>
    <div class="tip"><strong>Application.</strong> On peut justifier $\\arctan(1)=\\sum_{n\\ge0}\\frac{(-1)^n}{2n+1}=\\frac{\\pi}{4}$ à partir du DSE de $\\arctan x$.</div>`);

  update(db, 'Intégrale de Gauss et variantes', `
    <div class="program-note">
      <strong>Approfondissement.</strong>
      La valeur de l'intégrale de Gauss peut être admise ou démontrée selon le cadre ; les changements de variable restent au programme.
    </div>
    <div class="step"><div class="step-n">1</div><div>Poser $I=\\int_{-\\infty}^{+\\infty}e^{-x^2}\\,dx$. Alors $I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dx\\,dy$.</div></div>
    <div class="step"><div class="step-n">2</div><div>En coordonnées polaires : $$I^2=\\int_0^{2\\pi}\\int_0^{+\\infty}e^{-r^2}r\\,dr\\,d\\theta=2\\pi\\cdot\\frac12=\\pi.$$</div></div>
    <div class="step"><div class="step-n">3</div><div>Donc $I=\\sqrt\\pi$ et $$\\int_0^{+\\infty}e^{-t^2}\\,dt=\\frac{\\sqrt\\pi}{2}.$$</div></div>
    <div class="tip">Par $u=\\sqrt a\,t$, on obtient $\\int_0^{+\\infty}e^{-at^2}\\,dt=\\frac12\\sqrt{\\pi/a}$ pour $a&gt;0$.</div>`);

  update(db, 'Calculer $\\lim_{n\\to\\infty} \\int_0^1 \\frac{n t^{n-1}}{1+t}\\d t$', `
    <div class="program-note">
      <strong>Programme.</strong> Exemple important : une masse qui se concentre près de $1$ ; le théorème de convergence dominée ne s'applique pas directement.
    </div>
    <div class="step"><div class="step-n">1</div><div>Écrire l'intégrale comme une moyenne pondérée : $nt^{n-1}\\,dt$ est la densité d'une variable qui se concentre près de $1$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Comme $t\\mapsto\\frac1{1+t}$ est continue en $1$, on s'attend à la limite $\\frac1{1+1}=\\frac12$.</div></div>
    <div class="step"><div class="step-n">3</div><div>Démonstration : pour tout $\\varepsilon&gt;0$, couper $[0,1]$ en $[0,1-\\delta]$ et $[1-\\delta,1]$. Le premier morceau tend vers $0$, le second est proche de $1/2$ par continuité.</div></div>
    <div class="tip"><strong>Conclusion correcte.</strong> $$\\lim_{n\\to\\infty}\\int_0^1\\frac{nt^{n-1}}{1+t}\\,dt=\\frac12.$$</div>`);

  update(db, 'Intégrale de Frullani', `
    <div class="program-note program-note--outside">
      <strong>Hors programme commun, mais classique en concours.</strong>
      À présenter avec ses hypothèses ; sinon, le traiter comme exercice.
    </div>
    <div class="step"><div class="step-n">1</div><div>Cas sûr : pour $a,b&gt;0$, poser $$I(a,b)=\\int_0^{+\\infty}\\frac{e^{-at}-e^{-bt}}{t}\\,dt.$$</div></div>
    <div class="step"><div class="step-n">2</div><div>Dériver par rapport à $b$ sous l'intégrale : $$\\partial_b I(a,b)=\\int_0^{+\\infty}e^{-bt}\\,dt=\\frac1b.$$</div></div>
    <div class="step"><div class="step-n">3</div><div>Donc $I(a,b)=\\ln b+C(a)$. Comme $I(a,a)=0$, on obtient $C(a)=-\\ln a$.</div></div>
    <div class="tip">Ainsi $$\\int_0^{+\\infty}\\frac{e^{-at}-e^{-bt}}{t}\\,dt=\\ln\\frac ba.$$</div>`);

  update(db, 'Lemme de Grönwall', `
    <div class="program-note program-note--outside">
      <strong>Hors programme commun, mais important.</strong>
      C'est un outil d'encadrement utile en EDO ; il doit être démontré si le sujet ne l'admet pas.
    </div>
    <div class="step"><div class="step-n">1</div><div>Si $u(t)\\le \\alpha+\\int_0^t\\beta(s)u(s)\\,ds$, poser $v(t)=\\alpha+\\int_0^t\\beta(s)u(s)\\,ds$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Alors $u\\le v$ et $v'(t)=\\beta(t)u(t)\\le\\beta(t)v(t)$.</div></div>
    <div class="step"><div class="step-n">3</div><div>Donc $\\frac{v'}v\\le\\beta$, puis par intégration $$v(t)\\le \\alpha\\exp\\!\\left(\\int_0^t\\beta(s)\\,ds\\right).$$</div></div>
    <div class="tip">On en déduit $u(t)\\le \\alpha\\exp\\!\\left(\\int_0^t\\beta(s)\\,ds\\right)$.</div>`);

  update(db, 'Théorème du point fixe de Banach', `
    <div class="program-note program-note--outside">
      <strong>Hors programme commun, mais structurant.</strong>
      À utiliser comme exercice d'approfondissement sur suites, complétude et contractions.
    </div>
    <div class="step"><div class="step-n">1</div><div>Soit $(E,d)$ complet et $f:E\\to E$ contractante : $d(f(x),f(y))\\le k d(x,y)$ avec $0\\le k&lt;1$.</div></div>
    <div class="step"><div class="step-n">2</div><div>La suite $x_{n+1}=f(x_n)$ vérifie $d(x_{n+1},x_n)\\le k^n d(x_1,x_0)$ ; elle est donc de Cauchy.</div></div>
    <div class="step"><div class="step-n">3</div><div>Par complétude, $x_n\\to\\ell$. Par continuité de $f$, $f(\\ell)=\\ell$.</div></div>
    <div class="step"><div class="step-n">4</div><div>Unicité : si $a,b$ sont fixes, $d(a,b)=d(f(a),f(b))\\le k d(a,b)$, donc $a=b$.</div></div>`);

  db.run(
    `UPDATE methodes
     SET titre = ?, contenu = ?, type = 'piege'
     WHERE id = 43`,
    [
      'Co-diagonalisation : la commutation est la condition clé',
      `<div class="program-note">
        <strong>Programme.</strong> Point de vigilance classique en réduction.
      </div>
      <div class="warn">Énoncé correct : si $A$ et $B$ sont diagonalisables et commutent, alors elles sont simultanément diagonalisables. Sans commutation, c'est faux en général.</div>
      <div class="step"><div class="step-n">1</div><div>Si $AB=BA$, alors chaque sous-espace propre de $A$ est stable par $B$.</div></div>
      <div class="step"><div class="step-n">2</div><div>Sur chaque sous-espace propre de $A$, l'endomorphisme induit par $B$ reste diagonalisable.</div></div>
      <div class="step"><div class="step-n">3</div><div>On choisit donc une base de vecteurs propres de $B$ dans chaque sous-espace propre de $A$ ; réunies, ces bases diagonalisent simultanément $A$ et $B$.</div></div>`,
    ]
  );

  update(db, 'Décomposition de Dunford $A = D + N$', `
    <div class="program-note">
      <strong>Approfondissement.</strong>
      Utile en réduction et exponentielle de matrice ; à vérifier selon la filière et le degré d'exigence du sujet.
    </div>
    <div class="step"><div class="step-n">1</div><div>Quand le polynôme caractéristique est scindé, on décompose l'espace en sous-espaces caractéristiques : $$E=\\bigoplus_i\\ker(A-\\lambda_i I)^{m_i}.$$</div></div>
    <div class="step"><div class="step-n">2</div><div>Sur le bloc associé à $\\lambda_i$, écrire $A=\\lambda_i I+N_i$, où $N_i$ est nilpotent.</div></div>
    <div class="step"><div class="step-n">3</div><div>Définir $D$ par $D=\\lambda_i I$ sur chaque sous-espace caractéristique, et $N=A-D$.</div></div>
    <div class="tip">Alors $D$ est diagonalisable, $N$ est nilpotent et $DN=ND$.</div>`);

  update(db, 'Projecteurs spectraux via interpolation de Lagrange', `
    <div class="program-note">
      <strong>Approfondissement.</strong>
      Très utile pour comprendre Dunford ; la formule naïve par valeurs propres seules ne suffit pas toujours avec multiplicités.
    </div>
    <div class="step"><div class="step-n">1</div><div>Pour projeter sur le sous-espace caractéristique associé à $\\lambda_i$, utiliser le lemme chinois sur les polynômes $(X-\\lambda_i)^{m_i}$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Construire des polynômes $P_i$ tels que $$P_i\\equiv1\\pmod{(X-\\lambda_i)^{m_i}},\\qquad P_i\\equiv0\\pmod{(X-\\lambda_j)^{m_j}}\\ (j\\ne i).$$</div></div>
    <div class="step"><div class="step-n">3</div><div>Alors $P_i(A)$ est le projecteur spectral sur le sous-espace caractéristique de $\\lambda_i$.</div></div>`);

  update(db, 'Inégalité de Jensen et convexité', `
    <div class="program-note">
      <strong>Approfondissement utile.</strong>
      Jensen est très efficace en probabilités et analyse ; à démontrer ou à citer seulement si le sujet l'autorise.
    </div>
    <div class="step"><div class="step-n">1</div><div>Pour une fonction convexe $\\varphi$ et des poids $p_i\\ge0$ de somme $1$, on a $$\\varphi\\!\\left(\\sum_i p_ix_i\\right)\\le \\sum_i p_i\\varphi(x_i).$$</div></div>
    <div class="step"><div class="step-n">2</div><div>La version probabiliste s'obtient en appliquant cette inégalité à la loi discrète de $X$, puis par approximation dans le cas général.</div></div>
    <div class="step"><div class="step-n">3</div><div>Donc, si $\\varphi$ est convexe : $$\\varphi(E[X])\\le E[\\varphi(X)].$$</div></div>
    <div class="tip">Exemples : $E[X]^2\\le E[X^2]$ avec $\\varphi(x)=x^2$ ; si $X&gt;0$, $E[\\log X]\\le\\log E[X]$ car $\\log$ est concave.</div>`);

  update(db, 'Système de congruences — Théorème chinois des restes', `
    <div class="program-note">
      <strong>Approfondissement / arithmétique.</strong>
      Très utile, mais à cadrer selon la filière et le sujet.
    </div>
    <div class="step"><div class="step-n">1</div><div>Si $n_1,\\ldots,n_r$ sont deux à deux premiers entre eux, poser $N=n_1\\cdots n_r$ et $N_i=N/n_i$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Comme $N_i$ et $n_i$ sont premiers entre eux, il existe $y_i$ tel que $N_i y_i\\equiv1\\pmod{n_i}$.</div></div>
    <div class="step"><div class="step-n">3</div><div>Alors $$x\\equiv\\sum_i a_iN_iy_i\\pmod N$$ vérifie $x\\equiv a_i\\pmod{n_i}$ pour tout $i$.</div></div>
    <div class="step"><div class="step-n">4</div><div>Unicité modulo $N$ : si deux solutions existent, leur différence est divisible par chaque $n_i$, donc par leur produit $N$.</div></div>`);

  update(db, "Petit théorème de Fermat et indicatrice d'Euler", `
    <div class="program-note">
      <strong>Approfondissement / arithmétique.</strong>
      À utiliser avec justification si le théorème n'est pas explicitement admis.
    </div>
    <div class="step"><div class="step-n">1</div><div>Si $\\mathrm{PGCD}(a,n)=1$, la multiplication par $a$ permute les classes inversibles modulo $n$.</div></div>
    <div class="step"><div class="step-n">2</div><div>En multipliant toutes ces classes, on obtient $$a^{\\varphi(n)}\\prod u\\equiv\\prod u\\pmod n.$$</div></div>
    <div class="step"><div class="step-n">3</div><div>Le produit des classes inversibles est lui-même inversible, donc on simplifie et $$a^{\\varphi(n)}\\equiv1\\pmod n.$$</div></div>
    <div class="tip">Si $n=p$ premier, $\\varphi(p)=p-1$ : c'est le petit théorème de Fermat.</div>`);

  update(db, "Ordre d'un élément et théorème de Lagrange", `
    <div class="program-note">
      <strong>Approfondissement / structures.</strong>
      Résultat naturel dès que les groupes finis apparaissent.
    </div>
    <div class="step"><div class="step-n">1</div><div>Le sous-groupe engendré par $g$ est $$\\langle g\\rangle=\\{e,g,g^2,\\ldots,g^{k-1}\\},$$ où $k$ est l'ordre de $g$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Les classes à gauche de $\\langle g\\rangle$ partitionnent le groupe fini $G$ et ont toutes $k$ éléments.</div></div>
    <div class="step"><div class="step-n">3</div><div>Donc $k$ divise $|G|$ : c'est le théorème de Lagrange appliqué au sous-groupe engendré.</div></div>
    <div class="tip">Conséquence : $g^{|G|}=e$ pour tout élément $g$ d'un groupe fini.</div>`);

  update(db, 'Normes équivalentes en dim finie — mais pas les topologies', `
    <div class="program-note">
      <strong>Programme.</strong> Résultat central en espaces vectoriels normés de dimension finie.
    </div>
    <div class="warn">Formulation correcte : en dimension finie, toutes les normes sont équivalentes et définissent la même topologie. En dimension infinie, ce n'est plus vrai.</div>
    <div class="step"><div class="step-n">1</div><div>Sur un espace de dimension finie, comparer toute norme à une norme de référence à l'aide de la compacité de la sphère unité.</div></div>
    <div class="step"><div class="step-n">2</div><div>On obtient des constantes $a,b&gt;0$ telles que $$a\\|x\\|_1\\le\\|x\\|_2\\le b\\|x\\|_1.$$</div></div>
    <div class="tip">Conséquence : convergence, continuité et compacité ne dépendent pas du choix de la norme en dimension finie.</div>`);

  update(db, 'Polynômes nuls vs polynômes identiquement nuls', `
    <div class="program-note">
      <strong>Programme.</strong> Point de vigilance sur les racines d'un polynôme.
    </div>
    <div class="warn">Sur un corps infini, par exemple $\\mathbb R$ ou $\\mathbb C$, un polynôme de degré $n$ a au plus $n$ racines, sauf s'il est nul.</div>
    <div class="step"><div class="step-n">1</div><div>Si un polynôme non nul $P$ a une racine $a$, alors $(X-a)$ divise $P$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Par récurrence, $k$ racines distinctes imposent un diviseur de degré $k$.</div></div>
    <div class="step"><div class="step-n">3</div><div>Si $P$ a plus de racines que son degré, contradiction : donc $P=0$.</div></div>`);

  update(db, 'Reconnaître et appliquer les identités remarquables', `
    <div class="program-note">
      <strong>Programme collège.</strong> Méthode fondamentale de développement et factorisation.
    </div>
    <strong>Développer :</strong> reconnaître $(a+b)^2$, $(a-b)^2$ ou $(a+b)(a-b)$.<br>
    $$(a+b)^2=a^2+2ab+b^2,\qquad (a-b)^2=a^2-2ab+b^2,\qquad (a+b)(a-b)=a^2-b^2.$$
    <strong>Factoriser :</strong> reconnaître $a^2-b^2$ ou $a^2\\pm2ab+b^2$.<br>
    <em>Exemple :</em> $9x^2-25=(3x-5)(3x+5)$.`);

  update(db, '$G$ et $H$ de même ordre ne sont pas nécessairement isomorphes', `
    <div class="program-note">
      <strong>Programme / approfondissement selon filière.</strong> Point de vigilance utile dès que les groupes sont manipulés.
    </div>
    <div class="warn">$\\mathbb Z/4\\mathbb Z$ et $\\mathbb Z/2\\mathbb Z\\times\\mathbb Z/2\\mathbb Z$ ont tous deux $4$ éléments, mais ne sont pas isomorphes.</div>
    <div class="step"><div class="step-n">1</div><div>Dans $\\mathbb Z/4\\mathbb Z$, la classe de $1$ est d'ordre $4$.</div></div>
    <div class="step"><div class="step-n">2</div><div>Dans $\\mathbb Z/2\\mathbb Z\\times\\mathbb Z/2\\mathbb Z$, tout élément non nul est d'ordre $2$.</div></div>
    <div class="step"><div class="step-n">3</div><div>L'ordre des éléments est préservé par isomorphisme, donc les deux groupes ne sont pas isomorphes.</div></div>`);
}

function update(db, title, contenu) {
  db.run('UPDATE methodes SET contenu = ? WHERE titre = ?', [contenu, title]);
}
