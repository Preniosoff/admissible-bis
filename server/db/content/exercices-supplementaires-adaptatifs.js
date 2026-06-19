// Exercices supplémentaires gradués.
// Mode append : ajoute des sections dans des chapitres existants sans réécrire le cours.

export const DATA = [
  {
    id: 'ph-indu',
    append: true,
    sections: [
      {
        titre: 'Exercices supplémentaires gradués',
        cartes: [
          {
            type: 'ex', label: 'EX', titre: 'Niveau 1 - Flux dans une spire carrée',
            contenu: `<strong>Énoncé</strong> : une spire carrée de côté $a = 4{,}0\\,\\mathrm{cm}$ est placée dans un champ uniforme $B = 0{,}20\\,\\mathrm{T}$ perpendiculaire au plan de la spire. Calculer le flux.<br><strong>Correction</strong> : la surface vaut $S = a^2 = (4{,}0\\times10^{-2})^2 = 1{,}6\\times10^{-3}\\,\\mathrm{m^2}$. Comme le champ est perpendiculaire, $\\Phi = BS = 0{,}20\\times1{,}6\\times10^{-3} = 3{,}2\\times10^{-4}\\,\\mathrm{Wb}$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 2 - F.é.m. induite par champ variable',
            contenu: `<strong>Énoncé</strong> : une bobine de $N=200$ spires, de surface $S=12\\,\\mathrm{cm^2}$, est traversée par un champ $B(t)=0{,}30\\cos(100t)$ perpendiculaire aux spires. Donner $e(t)$.<br><strong>Correction</strong> : le flux total vaut $\\Phi(t)=NSB(t)$. Avec $S=12\\times10^{-4}\\,\\mathrm{m^2}$, $\\Phi(t)=200\\times12\\times10^{-4}\\times0{,}30\\cos(100t)=0{,}072\\cos(100t)$. Donc $e(t)=-\\Phi'(t)=7{,}2\\sin(100t)\\,\\mathrm{V}$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 3 - Barre mobile sur rails',
            contenu: `<strong>Énoncé</strong> : une barre de longueur $\\ell$ glisse à vitesse constante $v$ sur deux rails dans un champ $\\vec B$ uniforme perpendiculaire au circuit. La résistance totale vaut $R$. Déterminer le courant et la force de Laplace.<br><strong>Correction</strong> : la surface augmente à la vitesse $\\ell v$, donc $|e|=B\\ell v$. Le courant induit a pour intensité $i=\\dfrac{B\\ell v}{R}$. La force de Laplace vaut en norme $F=i\\ell B=\\dfrac{B^2\\ell^2}{R}v$ et s'oppose au mouvement d'après Lenz.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 4 - Freinage et temps caractéristique',
            contenu: `<strong>Énoncé</strong> : une barre de masse $m$ se déplace sans frottement sur rails dans un champ $B$. On la lâche avec une vitesse $v_0$. Montrer que $v(t)$ décroît exponentiellement.<br><strong>Correction</strong> : le courant vaut $i=B\\ell v/R$. La force magnétique est opposée au mouvement : $m\\dot v=-B^2\\ell^2 v/R$. Donc $\\dot v+\\dfrac{1}{\\tau}v=0$ avec $\\tau=\\dfrac{mR}{B^2\\ell^2}$. Ainsi $v(t)=v_0e^{-t/\\tau}$.`
          },
        ],
      },
    ],
  },
  {
    id: 'ph-osc',
    append: true,
    sections: [
      {
        titre: 'Exercices supplémentaires gradués',
        cartes: [
          {
            type: 'ex', label: 'EX', titre: 'Niveau 1 - Pulsation masse-ressort',
            contenu: `<strong>Énoncé</strong> : une masse $m=250\\,\\mathrm{g}$ est reliée à un ressort de raideur $k=10\\,\\mathrm{N\\,m^{-1}}$. Calculer $\\omega_0$ et $T_0$.<br><strong>Correction</strong> : $\\omega_0=\\sqrt{k/m}=\\sqrt{10/0{,}250}=\\sqrt{40}\\approx6{,}32\\,\\mathrm{rad\\,s^{-1}}$. Donc $T_0=2\\pi/\\omega_0\\approx0{,}99\\,\\mathrm{s}$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 2 - Régime d’un RLC série',
            contenu: `<strong>Énoncé</strong> : un circuit RLC série a $L=50\\,\\mathrm{mH}$, $C=20\\,\\mu\\mathrm{F}$ et $R=20\\,\\Omega$. Déterminer $\\omega_0$, $Q$ et le régime libre.<br><strong>Correction</strong> : $\\omega_0=1/\\sqrt{LC}=1/\\sqrt{50\\times10^{-3}\\times20\\times10^{-6}}=1000\\,\\mathrm{rad\\,s^{-1}}$. Puis $Q=L\\omega_0/R=50\\times10^{-3}\\times1000/20=2{,}5$. Comme $Q>1/2$, le régime est pseudo-périodique.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 3 - Résonance en amplitude',
            contenu: `<strong>Énoncé</strong> : un oscillateur forcé a $\\omega_0=100\\,\\mathrm{rad\\,s^{-1}}$ et $Q=2$. Existe-t-il une résonance d'élongation ? Si oui, calculer $\\omega_r$.<br><strong>Correction</strong> : la résonance d'élongation existe si $Q>1/\\sqrt2$, ce qui est vrai. $\\omega_r=\\omega_0\\sqrt{1-1/(2Q^2)}=100\\sqrt{1-1/8}\\approx93{,}5\\,\\mathrm{rad\\,s^{-1}}$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 4 - Énergie et amortissement',
            contenu: `<strong>Énoncé</strong> : pour un oscillateur faiblement amorti, l'amplitude est multipliée par $0{,}80$ après une période. Par quel facteur l'énergie mécanique est-elle multipliée ?<br><strong>Correction</strong> : l'énergie est proportionnelle au carré de l'amplitude. Si $A$ devient $0{,}80A$, alors $E$ devient $0{,}80^2E=0{,}64E$. L'oscillateur perd donc $36\\%$ de son énergie par période.`
          },
        ],
      },
    ],
  },
  {
    id: 'ma-cvg',
    append: true,
    sections: [
      {
        titre: 'Exercices supplémentaires gradués',
        cartes: [
          {
            type: 'ex', label: 'EX', titre: 'Niveau 1 - Intégrale de Riemann en zéro',
            contenu: `<strong>Énoncé</strong> : discuter l'intégrabilité de $t\\mapsto t^{-3/4}$ sur $]0,1]$.<br><strong>Correction</strong> : c'est une intégrale de Riemann en $0$ : $\\int_0^1 t^{-\\alpha}\\,dt$ converge si $\\alpha<1$. Ici $\\alpha=3/4<1$, donc la fonction est intégrable au voisinage de $0$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 2 - Comparaison à l’infini',
            contenu: `<strong>Énoncé</strong> : étudier l'intégrabilité de $f(t)=\\dfrac{\\ln t}{t^2}$ sur $[2,+\\infty[$.<br><strong>Correction</strong> : pour tout $\\varepsilon>0$, $\\ln t=o(t^\\varepsilon)$. En prenant $\\varepsilon=1/2$, $f(t)=o(t^{-3/2})$. Or $\\int_2^{+\\infty} t^{-3/2}\\,dt$ converge, donc $f$ est intégrable.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 3 - Singularité logarithmique',
            contenu: `<strong>Énoncé</strong> : la fonction $t\\mapsto |\\ln t|$ est-elle intégrable sur $]0,1]$ ?<br><strong>Correction</strong> : on sait que $|\\ln t|=o(t^{-\\alpha})$ en $0^+$ pour tout $\\alpha>0$. En choisissant $\\alpha=1/2$, on a $|\\ln t|\\le Ct^{-1/2}$ au voisinage de $0$, et $t^{-1/2}$ est intégrable. Donc $|\\ln t|$ est intégrable sur $]0,1]$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 4 - Découper deux problèmes',
            contenu: `<strong>Énoncé</strong> : étudier l'intégrabilité de $f(t)=\\dfrac{1}{\\sqrt t(1+t)}$ sur $]0,+\\infty[$.<br><strong>Correction</strong> : en $0^+$, $f(t)\\sim t^{-1/2}$, intégrable. En $+\\infty$, $f(t)\\sim t^{-3/2}$, intégrable. Les deux seules bornes problématiques sont donc maîtrisées : $f$ est intégrable sur $]0,+\\infty[$.`
          },
        ],
      },
    ],
  },
  {
    id: 'ma-sfn',
    append: true,
    sections: [
      {
        titre: 'Exercices supplémentaires gradués',
        cartes: [
          {
            type: 'ex', label: 'EX', titre: 'Niveau 1 - Convergence simple',
            contenu: `<strong>Énoncé</strong> : déterminer la limite simple de $f_n(x)=x^n$ sur $[0,1]$.<br><strong>Correction</strong> : si $0\\le x<1$, alors $x^n\\to0$. Si $x=1$, alors $x^n=1$. La limite simple vaut donc $f(x)=0$ sur $[0,1[$ et $f(1)=1$.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 2 - Non convergence uniforme',
            contenu: `<strong>Énoncé</strong> : montrer que $x^n$ ne converge pas uniformément vers sa limite simple sur $[0,1]$.<br><strong>Correction</strong> : chaque $f_n$ est continue, mais la limite simple est discontinue en $1$. Or une limite uniforme de fonctions continues sur un segment est continue. Donc la convergence n'est pas uniforme.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 3 - Norme infinie explicite',
            contenu: `<strong>Énoncé</strong> : étudier la convergence uniforme de $f_n(x)=nx(1-x)^n$ sur $[0,1]$.<br><strong>Correction</strong> : $f_n\\to0$ simplement. Le maximum de $x(1-x)^n$ est atteint en $x=1/(n+1)$. Donc $\\|f_n\\|_\\infty=n\\dfrac{1}{n+1}\\left(\\dfrac{n}{n+1}\\right)^n\\to e^{-1}\\ne0$. Pas de convergence uniforme.`
          },
          {
            type: 'ex', label: 'EX', titre: 'Niveau 4 - Convergence normale',
            contenu: `<strong>Énoncé</strong> : montrer que $\\sum_{n\\ge1}\\dfrac{\\sin(nx)}{n^2}$ converge normalement sur $\\mathbb R$.<br><strong>Correction</strong> : pour tout $x$, $|\\sin(nx)/n^2|\\le1/n^2$. Comme $\\sum1/n^2$ converge, la série converge normalement sur $\\mathbb R$, donc uniformément, et sa somme est continue.`
          },
        ],
      },
    ],
  },
];
