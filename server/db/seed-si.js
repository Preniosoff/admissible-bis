// Seed — Sciences de l'Ingénieur (prépa MP/MPSI/PCSI/PC/PSI/PTSI/PT/TSI)
// Source : tipe/index2.html + programme officiel SI prépa 2013
// Run : node server/db/seed-si.js

import initSqlJs from 'sql.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = resolve(__dirname, 'prepamp.sqlite');

const SQL = await initSqlJs();
if (!existsSync(DB_PATH)) { console.error('Base introuvable :', DB_PATH); process.exit(1); }
const db = new SQL.Database(readFileSync(DB_PATH));

function run(sql, params = []) { db.run(sql, params); }
function get(sql, params = []) {
  const stmt = db.prepare(sql); stmt.bind(params);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free(); return row;
}
function lastId() { return get('SELECT last_insert_rowid() as id').id; }

// ── Données ──────────────────────────────────────────────────────────────────

const FILIERES = ['mp','mpsi','pc','pcsi','psi','ptsi','pt','tsi'];

const chapitres = [
  { id: 'si-syscont',     titre: 'Systèmes linéaires continus invariants', ordre: 1 },
  { id: 'si-laplace',     titre: 'Transformée de Laplace',                 ordre: 2 },
  { id: 'si-ftbf',        titre: 'Schéma-blocs et fonctions de transfert', ordre: 3 },
  { id: 'si-ordre12',     titre: 'Systèmes du 1er et 2e ordre',            ordre: 4 },
  { id: 'si-bode',        titre: 'Réponse fréquentielle — Bode',           ordre: 5 },
  { id: 'si-asservi',     titre: 'Systèmes asservis — Performances',       ordre: 6 },
  { id: 'si-correcteurs', titre: 'Correcteurs',                            ordre: 7 },
  { id: 'si-cinematique', titre: 'Cinématique du solide indéformable',     ordre: 8 },
  { id: 'si-liaisons',    titre: 'Liaisons mécaniques',                    ordre: 9 },
  { id: 'si-statique',    titre: 'Statique — PFS',                         ordre: 10 },
  { id: 'si-dynamique',   titre: 'Dynamique — PFD et TEC',                 ordre: 11 },
  { id: 'si-transmetteurs',titre: 'Transmetteurs de puissance',            ordre: 12 },
  { id: 'si-sequentiel',  titre: 'Systèmes séquentiels',                   ordre: 13 },
  { id: 'si-num',         titre: 'Méthodes numériques',                    ordre: 14 },
];

const sections = {

// ══════════════════════════════════════════════════════════════
// 1. SLCI
// ══════════════════════════════════════════════════════════════
'si-syscont': [
  { titre: 'Définitions fondamentales', cartes: [
    { type:'def', label:'DEF', titre:'Système linéaire continu invariant (SLCI)',
      contenu:`Un système est <strong>linéaire</strong> si sa relation entrée-sortie vérifie le principe de superposition :<br>
$e_1 \\to s_1$ et $e_2 \\to s_2$ implique $\\alpha e_1 + \\beta e_2 \\to \\alpha s_1 + \\beta s_2$.<br>
Il est <strong>continu</strong> si ses variables sont des fonctions de $t \\in \\mathbb{R}$.<br>
Il est <strong>invariant</strong> si ses paramètres sont constants dans le temps : un retard $\\tau$ à l'entrée produit le même retard $\\tau$ en sortie.` },
    { type:'def', label:'DEF', titre:'Équation différentielle d\'un SLCI d\'ordre $n$',
      contenu:`$$a_n s^{(n)}(t) + \\dots + a_1 \\dot{s}(t) + a_0 s(t) = b_m e^{(m)}(t) + \\dots + b_0 e(t)$$
avec $a_i, b_j \\in \\mathbb{R}$ constants et $m \\le n$ (causalité).` },
    { type:'def', label:'DEF', titre:'Gain statique, ordre, classe',
      contenu:`<strong>Gain statique</strong> : $K = H(0) = \\lim_{t\\to\\infty} s(t)$ pour $e(t)$ échelon unité (CI nulles).<br>
<strong>Ordre</strong> : degré du polynôme dénominateur de $H(p)$.<br>
<strong>Classe</strong> (type) : nombre de pôles nuls de $H(p)$, i.e. puissance de $p$ au dénominateur. Un système de classe $\\alpha$ annule l'erreur pour toute entrée polynomiale de degré $< \\alpha$.` },
    { type:'def', label:'DEF', titre:'Stabilité — conditions',
      contenu:`Un SLCI est <strong>stable</strong> si et seulement si tous ses pôles (racines du dénominateur de $H(p)$) ont une <strong>partie réelle strictement négative</strong>.<br>
Condition nécessaire et suffisante : tous les coefficients du dénominateur sont de même signe.<br>
Critère de Routh : construit un tableau à partir des coefficients pour tester la stabilité sans calculer les racines.` },
  ]},
  { titre: 'Signaux canoniques d\'entrée', cartes: [
    { type:'form', label:'FORM', titre:'Transformées de Laplace des entrées de test',
      contenu:`<table>
<tr><th>Signal</th><th>$e(t)$</th><th>$E(p)$</th></tr>
<tr><td>Impulsion de Dirac</td><td>$\\delta(t)$</td><td>$1$</td></tr>
<tr><td>Échelon unité</td><td>$\\gamma(t)$</td><td>$\\dfrac{1}{p}$</td></tr>
<tr><td>Rampe unitaire</td><td>$t\\,\\gamma(t)$</td><td>$\\dfrac{1}{p^2}$</td></tr>
<tr><td>Accélération</td><td>$\\frac{t^2}{2}\\gamma(t)$</td><td>$\\dfrac{1}{p^3}$</td></tr>
<tr><td>Sinusoïde</td><td>$A\\sin(\\omega t)$</td><td>$\\dfrac{A\\omega}{p^2+\\omega^2}$</td></tr>
</table>` },
    { type:'prop', label:'PROP', titre:'Réponse impulsionnelle et indicielle',
      contenu:`La <strong>réponse impulsionnelle</strong> $h(t) = \\mathcal{L}^{-1}\\{H(p)\\}$ caractérise complètement le système.<br>
La <strong>réponse indicielle</strong> $s_\\gamma(t)$ vérifie $h(t) = \\dfrac{\\mathrm{d}s_\\gamma}{\\mathrm{d}t}$.<br>
Convolution : $s(t) = (h * e)(t) = \\int_0^t h(\\tau)\\,e(t-\\tau)\\,\\mathrm{d}\\tau$.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 2. Transformée de Laplace
// ══════════════════════════════════════════════════════════════
'si-laplace': [
  { titre: 'Définition et propriétés', cartes: [
    { type:'def', label:'DEF', titre:'Transformée de Laplace',
      contenu:`Pour $f$ causale ($f(t) = 0$ pour $t < 0$) :
$$F(p) = \\mathcal{L}\\{f(t)\\} = \\int_{0}^{+\\infty} f(t)\\,\\mathrm{e}^{-pt}\\,\\mathrm{d}t, \\quad p \\in \\mathbb{C}$$
Transforme une équation différentielle en une équation algébrique en $p$.` },
    { type:'prop', label:'PROP', titre:'Propriétés de dérivation et d\'intégration',
      contenu:`<strong>Dérivation</strong> (CI nulles) : $\\mathcal{L}\\{f^{(n)}(t)\\} = p^n F(p)$<br>
<strong>Avec conditions initiales</strong> : $\\mathcal{L}\\{\\dot{f}\\} = pF(p) - f(0^+)$<br>
$\\mathcal{L}\\{\\ddot{f}\\} = p^2 F(p) - pf(0^+) - \\dot{f}(0^+)$<br>
<strong>Intégration</strong> : $\\mathcal{L}\\!\\left\\{\\int_0^t f(\\tau)\\,\\mathrm{d}\\tau\\right\\} = \\dfrac{F(p)}{p}$<br>
<strong>Retard</strong> pur $T_r$ : $\\mathcal{L}\\{f(t-T_r)\\gamma(t-T_r)\\} = \\mathrm{e}^{-T_r p}F(p)$` },
    { type:'th', label:'THM', titre:'Théorèmes des valeurs initiale et finale',
      contenu:`<strong>Valeur initiale :</strong> $f(0^+) = \\lim_{p \\to +\\infty} p\\,F(p)$<br>
<strong>Valeur finale</strong> (si $f$ admet une limite finie) : $\\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} p\\,F(p)$<br>
⚠ La valeur finale n'existe que si tous les pôles de $pF(p)$ sont à partie réelle strictement négative.` },
  ]},
  { titre: 'Table des transformées usuelles', cartes: [
    { type:'form', label:'FORM', titre:'Table de Laplace',
      contenu:`<table>
<tr><th>$f(t)$</th><th>$F(p)$</th></tr>
<tr><td>$\\delta(t)$</td><td>$1$</td></tr>
<tr><td>$\\gamma(t)$</td><td>$\\dfrac{1}{p}$</td></tr>
<tr><td>$t^n\\gamma(t)$</td><td>$\\dfrac{n!}{p^{n+1}}$</td></tr>
<tr><td>$\\mathrm{e}^{-at}\\gamma(t)$</td><td>$\\dfrac{1}{p+a}$</td></tr>
<tr><td>$\\sin(\\omega t)\\gamma(t)$</td><td>$\\dfrac{\\omega}{p^2+\\omega^2}$</td></tr>
<tr><td>$\\cos(\\omega t)\\gamma(t)$</td><td>$\\dfrac{p}{p^2+\\omega^2}$</td></tr>
<tr><td>$t\\,\\mathrm{e}^{-at}\\gamma(t)$</td><td>$\\dfrac{1}{(p+a)^2}$</td></tr>
<tr><td>$\\mathrm{e}^{-at}\\sin(\\omega t)\\gamma(t)$</td><td>$\\dfrac{\\omega}{(p+a)^2+\\omega^2}$</td></tr>
</table>` },
    { type:'meth', label:'METH', titre:'Décomposition en éléments simples (DES)',
      contenu:`Pour inverser $F(p) = \\frac{N(p)}{D(p)}$ (deg $N$ < deg $D$) :<br>
<strong>1.</strong> Factoriser $D(p)$ : pôles simples réels $p_k$, pôles complexes conjugués $a \\pm j\\omega$, pôles multiples.<br>
<strong>2.</strong> Écrire : $F(p) = \\sum_k \\frac{A_k}{p-p_k} + \\dots$<br>
<strong>3.</strong> Calculer les résidus : $A_k = \\lim_{p\\to p_k}(p-p_k)F(p)$<br>
<strong>4.</strong> Lire la table : $\\frac{A_k}{p-p_k} \\longleftrightarrow A_k\\,\\mathrm{e}^{p_k t}\\gamma(t)$` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 3. Schéma-blocs
// ══════════════════════════════════════════════════════════════
'si-ftbf': [
  { titre: 'Algèbre des schéma-blocs', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert',
      contenu:`Rapport (en Laplace, CI nulles) de la sortie sur l'entrée :
$$H(p) = \\frac{S(p)}{E(p)}$$
Représente complètement le comportement entrée-sortie d'un SLCI.` },
    { type:'prop', label:'PROP', titre:'Associations en série et en parallèle',
      contenu:`<strong>Série</strong> : $H_{\\text{eq}}(p) = H_1(p) \\cdot H_2(p)$<br>
<strong>Parallèle</strong> (même sens) : $H_{\\text{eq}}(p) = H_1(p) + H_2(p)$` },
    { type:'th', label:'THM', titre:'Formule de Black — boucle fermée',
      contenu:`Pour un système en boucle fermée (retour négatif), chaîne directe $H(p)$, chaîne de retour $B(p)$ :
$$\\text{FTBF}(p) = \\frac{H(p)}{1 + H(p)\\,B(p)}$$
<strong>FTBO</strong> (boucle ouverte) : $\\text{FTBO}(p) = H(p) \\cdot B(p)$<br>
<strong>Fonction de sensibilité</strong> : $S(p) = \\frac{1}{1+\\text{FTBO}(p)}$<br>
<strong>Rétro-action unitaire</strong> ($B=1$) : $\\text{FTBF} = \\frac{H}{1+H}$` },
    { type:'meth', label:'METH', titre:'Réduction d\'un schéma-blocs',
      contenu:`<strong>1.</strong> Identifier les blocs en série et les simplifier d'abord.<br>
<strong>2.</strong> Déplacer les nœuds de sommation ou de prélèvement en appliquant les règles d'équivalence.<br>
<strong>3.</strong> Appliquer la formule de Black pour chaque boucle (de la plus interne vers la plus externe).<br>
<strong>Règle de déplacement d'un nœud de prélèvement</strong> : déplacer en amont d'un bloc $G$ revient à ajouter un bloc $\\frac{1}{G}$ sur la branche.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 4. Systèmes du 1er et 2e ordre
// ══════════════════════════════════════════════════════════════
'si-ordre12': [
  { titre: 'Système du premier ordre', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert du 1er ordre',
      contenu:`$$H(p) = \\frac{K}{1 + \\tau p}$$
$K$ : gain statique &nbsp;·&nbsp; $\\tau > 0$ : constante de temps (s)<br>
Unique pôle réel : $p = -\\frac{1}{\\tau}$ (stable si $\\tau > 0$).` },
    { type:'prop', label:'PROP', titre:'Réponse indicielle du 1er ordre',
      contenu:`Réponse à un échelon d'amplitude $E_0$ :
$$s(t) = K\\,E_0\\left(1 - \\mathrm{e}^{-t/\\tau}\\right) \\quad (t \\ge 0)$$
— Tangente à l'origine coupe la valeur finale en $t = \\tau$<br>
— À $t = \\tau$ : $s = 63\\%$ de la valeur finale<br>
— À $t = 3\\tau$ : $s \\approx 95\\%$ &nbsp;·&nbsp; à $t = 5\\tau$ : $s \\approx 99\\%$<br>
— Temps de réponse à 5 % : $t_{r5\\%} = 3\\tau$` },
  ]},
  { titre: 'Système du second ordre', cartes: [
    { type:'def', label:'DEF', titre:'Fonction de transfert du 2e ordre',
      contenu:`$$H(p) = \\frac{K\\,\\omega_0^2}{p^2 + 2\\xi\\omega_0\\,p + \\omega_0^2} = \\frac{K}{1 + \\frac{2\\xi}{\\omega_0}p + \\frac{p^2}{\\omega_0^2}}$$
$K$ : gain statique &nbsp;·&nbsp; $\\omega_0$ : pulsation propre (rad/s) &nbsp;·&nbsp; $\\xi$ : coefficient d'amortissement<br>
<strong>Pôles :</strong> $p_{1,2} = -\\xi\\omega_0 \\pm \\omega_0\\sqrt{\\xi^2-1}$` },
    { type:'prop', label:'PROP', titre:'Régimes selon $\\xi$',
      contenu:`$\\xi > 1$ : <strong>apériodique</strong> — 2 pôles réels négatifs, pas d'oscillation<br>
$\\xi = 1$ : <strong>critique</strong> — pôle double $-\\omega_0$, retour le plus rapide sans dépassement<br>
$0 < \\xi < 1$ : <strong>pseudo-périodique</strong> — pôles complexes conjugués $-\\xi\\omega_0 \\pm j\\omega_0\\sqrt{1-\\xi^2}$<br>
$\\xi = 0$ : oscillateur harmonique (instable en BO, marginalement stable)<br>
<strong>Pseudo-période</strong> : $T_p = \\dfrac{2\\pi}{\\omega_0\\sqrt{1-\\xi^2}}$` },
    { type:'form', label:'FORM', titre:'Dépassement et temps de réponse',
      contenu:`<strong>Premier dépassement relatif :</strong>
$$D_1\\% = 100\\,\\exp\\!\\left(-\\frac{\\pi\\xi}{\\sqrt{1-\\xi^2}}\\right)$$
<strong>Pulsation de résonance</strong> ($\\xi < 1/\\sqrt{2}$) : $\\omega_r = \\omega_0\\sqrt{1-2\\xi^2}$<br>
<strong>Facteur de résonance</strong> : $Q_r = \\dfrac{1}{2\\xi\\sqrt{1-\\xi^2}}$<br>
<strong>Temps de réponse à 5 %</strong> (abaque ou $\\xi \\approx 0{,}7$) : $t_{r5\\%} \\approx \\dfrac{3}{\\xi\\omega_0}$` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 5. Bode
// ══════════════════════════════════════════════════════════════
'si-bode': [
  { titre: 'Définitions', cartes: [
    { type:'def', label:'DEF', titre:'Diagramme de Bode',
      contenu:`Tracé de la réponse fréquentielle $H(j\\omega)$ en fonction de $\\omega$ en échelle logarithmique :<br>
<strong>Gain</strong> : $G_{\\text{dB}}(\\omega) = 20\\log_{10}|H(j\\omega)|$ (décibels, dB)<br>
<strong>Phase</strong> : $\\varphi(\\omega) = \\arg(H(j\\omega))$ (degrés ou radians)<br>
Pulsation de coupure à $-3$ dB : $|H(j\\omega_c)| = \\dfrac{|H(0)|}{\\sqrt{2}}$, soit $G_{\\text{dB}}(\\omega_c) = G_{\\text{dB}}(0) - 3$.` },
  ]},
  { titre: 'Tracé asymptotique — cas usuels', cartes: [
    { type:'prop', label:'PROP', titre:'Gain pur, intégrateur, dérivateur',
      contenu:`<strong>Gain pur $K$</strong> : droite horizontale à $20\\log K$ dB, phase $0°$<br>
<strong>Intégrateur $\\frac{1}{jp\\tau}$</strong> : droite de pente $-20$ dB/déc, phase $-90°$<br>
<strong>Dérivateur $jp\\tau$</strong> : droite de pente $+20$ dB/déc, phase $+90°$<br>
<strong>Retard pur $\\mathrm{e}^{-T_r p}$</strong> : gain = 0 dB, phase $= -T_r \\omega$ (rad)` },
    { type:'prop', label:'PROP', titre:'1er ordre $\\frac{1}{1+j\\omega\\tau}$',
      contenu:`<strong>Asymptote basse fréquence</strong> ($\\omega \\ll 1/\\tau$) : $G_{\\text{dB}} = 0$ dB, $\\varphi = 0°$<br>
<strong>Asymptote haute fréquence</strong> ($\\omega \\gg 1/\\tau$) : pente $-20$ dB/déc, $\\varphi \\to -90°$<br>
<strong>À la cassure</strong> $\\omega = 1/\\tau$ : erreur réelle $-3$ dB, phase exacte $-45°$<br>
Dénominateur de degré $n$ : erreur à la cassure $= -n \\times 3$ dB.` },
    { type:'prop', label:'PROP', titre:'2e ordre $\\frac{1}{1+2\\xi u+u^2}$ avec $u=j\\omega/\\omega_0$',
      contenu:`<strong>Asymptotes</strong> : 0 dB/déc pour $\\omega \\ll \\omega_0$, puis $-40$ dB/déc pour $\\omega \\gg \\omega_0$.<br>
Phase de $0°$ à $-180°$ (passe $-90°$ à $\\omega_0$).<br>
<strong>Résonance</strong> ($\\xi < 0{,}707$) : pic de gain à $\\omega_r = \\omega_0\\sqrt{1-2\\xi^2}$, valeur $Q_r = \\frac{1}{2\\xi\\sqrt{1-\\xi^2}}$.` },
    { type:'meth', label:'METH', titre:'Méthode de tracé asymptotique',
      contenu:`<strong>1.</strong> Mettre $H(p)$ en forme canonique : identifier $K$, les pôles et zéros.<br>
<strong>2.</strong> Tracer la droite de départ à $G = 20\\log K$ dB.<br>
<strong>3.</strong> Pour chaque pôle simple à $\\omega_k = 1/\\tau_k$ : pente $-20$ dB/déc à partir de $\\omega_k$.<br>
<strong>4.</strong> Pour chaque zéro simple à $\\omega_k$ : pente $+20$ dB/déc à partir de $\\omega_k$.<br>
<strong>5.</strong> Sommer les phases individuelles.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 6. Asservissements
// ══════════════════════════════════════════════════════════════
'si-asservi': [
  { titre: 'Stabilité', cartes: [
    { type:'def', label:'DEF', titre:'Marges de stabilité',
      contenu:`<strong>Marge de phase</strong> $M\\varphi$ : phase de la FTBO à la pulsation de gain unitaire $\\omega_u$ (telle que $|\\text{FTBO}(j\\omega_u)| = 1$) :
$$M\\varphi = 180° + \\arg\\!\\left[\\text{FTBO}(j\\omega_u)\\right]$$
Valeur recommandée : $M\\varphi \\ge 45°$. Lien avec le 2e ordre : $M\\varphi \\approx 100\\xi$.<br><br>
<strong>Marge de gain</strong> $MG$ : gain (en dB) à la pulsation de déphasage $-180°$, $\\omega_\\pi$ :
$$MG = -20\\log|\\text{FTBO}(j\\omega_\\pi)|$$
Valeur recommandée : $MG \\ge 6$ dB (facteur 2 en gain).` },
    { type:'th', label:'THM', titre:'Critère de Nyquist simplifié',
      contenu:`Pour un système à FTBO stable : le système bouclé est stable si et seulement si le lieu de Nyquist de $\\text{FTBO}(j\\omega)$ ne tourne pas autour du point $-1$ dans le sens direct.<br>
En pratique : le lieu ne doit pas passer à gauche du point critique $(-1, 0)$.` },
  ]},
  { titre: 'Précision et rapidité', cartes: [
    { type:'def', label:'DEF', titre:'Écarts statiques',
      contenu:`Pour un retour unitaire ($B = 1$) et une FTBO de classe $\\alpha$ et de gain basse fréquence $K_{BO}$ :<br>
<table>
<tr><th>Entrée</th><th>$\\alpha = 0$ (classe 0)</th><th>$\\alpha = 1$ (classe 1)</th><th>$\\alpha \\ge 2$</th></tr>
<tr><td>Échelon ($1/p$)</td><td>$\\varepsilon_\\infty = \\frac{1}{1+K_{BO}}$</td><td>$0$</td><td>$0$</td></tr>
<tr><td>Rampe ($1/p^2$)</td><td>$+\\infty$</td><td>$\\frac{1}{K_{BO}}$</td><td>$0$</td></tr>
<tr><td>Parabole ($1/p^3$)</td><td>$+\\infty$</td><td>$+\\infty$</td><td>$\\frac{1}{K_{BO}}$</td></tr>
</table>` },
    { type:'def', label:'DEF', titre:'Rapidité — bande passante et temps de réponse',
      contenu:`<strong>Bande passante à $-3$ dB</strong> $\\omega_{BP}$ : plage de fréquences où le gain FTBF est supérieur à $\\frac{|H(0)|}{\\sqrt{2}}$ (soit $-3$ dB).<br>
Plus $\\omega_{BP}$ est grand, plus le système est rapide.<br>
<strong>Lien avec les marges</strong> : $\\omega_{BP} \\approx \\omega_u$ (pulsation de gain unité de la FTBO).<br>
<strong>Temps de réponse à 5 %</strong> : $t_{r5\\%} \\approx \\dfrac{3}{\\xi\\omega_0}$ pour un 2e ordre.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 7. Correcteurs
// ══════════════════════════════════════════════════════════════
'si-correcteurs': [
  { titre: 'Correcteurs PID', cartes: [
    { type:'def', label:'DEF', titre:'Correcteur proportionnel P',
      contenu:`$$C(p) = K_p$$
Effet : améliore la rapidité et réduit l'erreur statique, mais peut dégrader la stabilité (diminue $M\\varphi$).` },
    { type:'def', label:'DEF', titre:'Correcteur Proportionnel Intégral (PI)',
      contenu:`$$C(p) = K_p\\left(1 + \\frac{1}{T_i p}\\right) = K_p\\,\\frac{T_i p + 1}{T_i p}$$
<strong>Effet</strong> : ajoute un intégrateur (classe $+1$) → annule l'erreur statique pour une entrée échelon.<br>
<strong>Inconvénient</strong> : ajoute de la phase négative ($-90°$ à basse fréquence), peut diminuer $M\\varphi$.` },
    { type:'def', label:'DEF', titre:'Correcteur Proportionnel Dérivé (PD) et PID',
      contenu:`$$C_{PD}(p) = K_p(1 + T_d p) \\ ; \\quad C_{PID}(p) = K_p\\left(1 + \\frac{1}{T_i p} + T_d p\\right)$$
<strong>PD</strong> : ajoute de la phase positive, améliore $M\\varphi$ et la rapidité. Sensible au bruit (amplification des hautes fréquences).<br>
<strong>PID</strong> : combine les effets P, I (précision) et D (rapidité, stabilité). Forme réelle : $C(p) = K_p\\frac{(1+T_i p)(1+T_d p)}{T_i p}$.` },
  ]},
  { titre: 'Correcteurs par avance/retard de phase', cartes: [
    { type:'def', label:'DEF', titre:'Correcteur à avance de phase',
      contenu:`$$C(p) = K\\,\\frac{1 + a\\tau p}{1 + \\tau p} \\quad \\text{avec } a > 1$$
<strong>Effet</strong> : apporte une avance de phase positive entre $\\omega_1 = \\frac{1}{a\\tau}$ et $\\omega_2 = \\frac{1}{\\tau}$.<br>
Phase maximale à $\\omega_m = \\frac{1}{\\tau\\sqrt{a}}$ : $\\varphi_{\\max} = \\arcsin\\!\\left(\\frac{a-1}{a+1}\\right)$<br>
<strong>Usage</strong> : améliorer $M\\varphi$ sans trop modifier la précision.` },
    { type:'def', label:'DEF', titre:'Correcteur à retard de phase',
      contenu:`$$C(p) = K\\,\\frac{1 + b\\tau p}{1 + \\tau p} \\quad \\text{avec } b < 1$$
<strong>Effet</strong> : atténue les hautes fréquences (améliore la marge de gain) en introduisant un retard de phase.<br>
<strong>Usage</strong> : améliorer la précision (augmenter le gain basse fréquence) sans trop dégrader $M\\varphi$.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 8. Cinématique
// ══════════════════════════════════════════════════════════════
'si-cinematique': [
  { titre: 'Torseur cinématique', cartes: [
    { type:'def', label:'DEF', titre:'Torseur cinématique',
      contenu:`Le torseur cinématique du solide $\\mathcal{S}_2$ par rapport à $\\mathcal{S}_1$, exprimé au point $A$ :
$$\\left\\{\\mathcal{V}(\\mathcal{S}_2/\\mathcal{S}_1)\\right\\} = \\begin{Bmatrix} \\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_1) \\\\ \\overrightarrow{V}(A \\in \\mathcal{S}_2/\\mathcal{S}_1) \\end{Bmatrix}_A$$
$\\vec{\\Omega}$ : vecteur rotation instantanée (indépendant du point) &nbsp;·&nbsp; $\\vec{V}$ : vitesse du point de $\\mathcal{S}_2$ coïncidant avec $A$.` },
    { type:'th', label:'THM', titre:'Champ des vecteurs vitesse — formule de Babal',
      contenu:`Pour deux points $A$ et $B$ d'un même solide $\\mathcal{S}_2$ :
$$\\overrightarrow{V}(B \\in \\mathcal{S}_2/\\mathcal{S}_1) = \\overrightarrow{V}(A \\in \\mathcal{S}_2/\\mathcal{S}_1) + \\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_1) \\wedge \\overrightarrow{AB}$$
<strong>Équiprojectivité</strong> : $\\overrightarrow{V}(A) \\cdot \\overrightarrow{AB} = \\overrightarrow{V}(B) \\cdot \\overrightarrow{AB}$ (projection sur $\\overrightarrow{AB}$).` },
  ]},
  { titre: 'Composition et contact', cartes: [
    { type:'th', label:'THM', titre:'Composition des mouvements',
      contenu:`Pour trois solides $\\mathcal{S}_0, \\mathcal{S}_1, \\mathcal{S}_2$ :
$$\\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_0) = \\vec{\\Omega}(\\mathcal{S}_2/\\mathcal{S}_1) + \\vec{\\Omega}(\\mathcal{S}_1/\\mathcal{S}_0)$$
$$\\overrightarrow{V}(M \\in \\mathcal{S}_2/\\mathcal{S}_0) = \\overrightarrow{V}(M \\in \\mathcal{S}_2/\\mathcal{S}_1) + \\overrightarrow{V}(M \\in \\mathcal{S}_1/\\mathcal{S}_0)$$
$\\overrightarrow{V}_{abs}$ = $\\overrightarrow{V}_{rel}$ + $\\overrightarrow{V}_{entr}$` },
    { type:'def', label:'DEF', titre:'Contact ponctuel — roulement et glissement',
      contenu:`En un point de contact $I$ entre $\\mathcal{S}_1$ et $\\mathcal{S}_2$ :<br>
<strong>Vitesse de glissement</strong> : $\\overrightarrow{V}_g = \\overrightarrow{V}(I \\in \\mathcal{S}_2/\\mathcal{S}_1)$<br>
<strong>Roulement sans glissement (RSG)</strong> : $\\overrightarrow{V}_g = \\vec{0}$, le point de contact instantané est le centre de rotation instantané.<br>
<strong>Vitesse angulaire de roulement</strong> et vitesse de pivotement s'obtiennent à partir de $\\vec{\\Omega}$.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 9. Liaisons mécaniques
// ══════════════════════════════════════════════════════════════
'si-liaisons': [
  { titre: 'Liaisons normalisées', cartes: [
    { type:'prop', label:'PROP', titre:'Tableau des liaisons normalisées',
      contenu:`<table>
<tr><th>Liaison</th><th>DDL</th><th>Mouvements autorisés</th><th>TAMT non nuls</th></tr>
<tr><td>Encastrement</td><td>0</td><td>—</td><td>3 forces + 3 moments</td></tr>
<tr><td>Pivot d'axe $\\Delta$</td><td>1</td><td>$R_\\Delta$</td><td>3 forces + 2 moments $\\perp \\Delta$</td></tr>
<tr><td>Glissière d'axe $\\Delta$</td><td>1</td><td>$T_\\Delta$</td><td>2 forces $\\perp \\Delta$ + 3 moments</td></tr>
<tr><td>Pivot-glissant</td><td>2</td><td>$R_\\Delta + T_\\Delta$</td><td>2 forces $\\perp + 2$ moments $\\perp$</td></tr>
<tr><td>Rotule</td><td>3</td><td>3 rotations</td><td>3 forces seulement</td></tr>
<tr><td>Appui-plan</td><td>3</td><td>2 $T$ dans le plan + $R$ normale</td><td>1 force normale + 2 moments</td></tr>
<tr><td>Linéaire annulaire</td><td>3</td><td>$T_\\Delta + 2R$</td><td>2 forces $\\perp \\Delta + $ 1 moment</td></tr>
<tr><td>Ponctuelle</td><td>5</td><td>2 $T$ + 3 $R$</td><td>1 force normale seulement</td></tr>
</table>` },
  ]},
  { titre: 'Torseur transmissible et associations', cartes: [
    { type:'def', label:'DEF', titre:'Torseur des Actions Mécaniques Transmissibles (TAMT)',
      contenu:`Dual du torseur cinématique : chaque mobilité bloquée génère une composante non nulle du TAMT.<br>
Règle : $\\text{nb de composantes TAMT} = 6 - \\text{DDL}$.<br>
<strong>Expression au point $A$</strong> :
$$\\left\\{\\mathcal{T}(1 \\to 2)\\right\\}_A = \\begin{Bmatrix} \\vec{R} \\\\ \\vec{M}(A) \\end{Bmatrix}_A$$
Transport : $\\vec{M}(B) = \\vec{M}(A) + \\overrightarrow{BA} \\wedge \\vec{R}$` },
    { type:'prop', label:'PROP', titre:'Associations de liaisons',
      contenu:`<strong>En série</strong> (solide intermédiaire entre $\\mathcal{S}_0$ et $\\mathcal{S}_2$ via $\\mathcal{S}_1$) :<br>
$\\left\\{\\mathcal{V}_{\\text{éq}}\\right\\} = \\left\\{\\mathcal{V}(\\mathcal{S}_1/\\mathcal{S}_0)\\right\\} + \\left\\{\\mathcal{V}(\\mathcal{S}_2/\\mathcal{S}_1)\\right\\}$<br><br>
<strong>En parallèle</strong> (deux liaisons entre mêmes solides) :<br>
$\\left\\{\\mathcal{T}_{\\text{éq}}\\right\\} = \\left\\{\\mathcal{T}_1\\right\\} + \\left\\{\\mathcal{T}_2\\right\\}$ (somme des TAMT).` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 10. Statique
// ══════════════════════════════════════════════════════════════
'si-statique': [
  { titre: 'Torseurs et équilibre', cartes: [
    { type:'def', label:'DEF', titre:'Torseur d\'une action mécanique',
      contenu:`$$\\left\\{\\mathcal{A}\\right\\}_A = \\begin{Bmatrix} \\vec{R} \\\\ \\vec{M}(A) \\end{Bmatrix}_A$$
$\\vec{R}$ : résultante (force, N) &nbsp;·&nbsp; $\\vec{M}(A)$ : moment résultant en $A$ (N·m)<br>
<strong>Transport au point $B$</strong> : $\\vec{M}(B) = \\vec{M}(A) + \\overrightarrow{BA} \\wedge \\vec{R}$` },
    { type:'th', label:'THM', titre:'Principe Fondamental de la Statique (PFS)',
      contenu:`Pour un solide $S$ isolé en équilibre dans un référentiel galiléen :
$$\\sum_i \\vec{R}_i = \\vec{0} \\quad \\text{et} \\quad \\sum_i \\vec{M}_i(A) = \\vec{0} \\quad \\text{pour tout point } A$$
Fournit au maximum 6 équations scalaires (3 de force + 3 de moment).` },
    { type:'def', label:'DEF', titre:'Frottement de Coulomb',
      contenu:`Au contact entre deux solides, la réaction $\\vec{R}$ se décompose en :<br>
$\\vec{R} = N\\,\\vec{n} + \\vec{T}$ ($\\vec{n}$ normale, $\\vec{T}$ tangentielle = frottement)<br>
<strong>Glissement</strong> : $T = f_d N$ avec $\\vec{T}$ opposée au glissement.<br>
<strong>Équilibre (pas de glissement)</strong> : $T \\le f_s N$ (cône de frottement de demi-angle $\\rho = \\arctan f_s$).` },
    { type:'meth', label:'METH', titre:'Méthode d\'application du PFS',
      contenu:`<strong>1.</strong> Choisir le solide ou le système à isoler.<br>
<strong>2.</strong> Faire l'inventaire de toutes les actions mécaniques extérieures.<br>
<strong>3.</strong> Modéliser chaque liaison par son TAMT (avec les inconnues de liaison).<br>
<strong>4.</strong> Écrire le PFS : $\\Sigma\\vec{R} = \\vec{0}$ (3 éq.) et $\\Sigma\\vec{M}(A) = \\vec{0}$ (3 éq.).<br>
<strong>5.</strong> Résoudre le système. Si hyperstatique : nb d'inconnues > nb d'équations.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 11. Dynamique
// ══════════════════════════════════════════════════════════════
'si-dynamique': [
  { titre: 'Énergie cinétique et torseur dynamique', cartes: [
    { type:'def', label:'DEF', titre:'Énergie cinétique d\'un solide',
      contenu:`$$E_c = \\frac{1}{2}m\\vec{V}^2(G) + \\frac{1}{2}\\vec{\\Omega}^T\\,[I_G]\\,\\vec{\\Omega}$$
$m$ : masse &nbsp;·&nbsp; $G$ : centre de gravité &nbsp;·&nbsp; $[I_G]$ : matrice d'inertie en $G$<br>
<strong>Rotation autour d'un axe fixe $\\Delta$</strong> : $E_c = \\frac{1}{2}I_\\Delta\\,\\dot{\\theta}^2$<br>
<strong>Théorème de Huygens</strong> : $I_\\Delta = I_{G,\\Delta'} + m\\,d^2$ ($d$ = distance $G$-axe $\\Delta$).` },
    { type:'def', label:'DEF', titre:'Torseur dynamique',
      contenu:`$$\\left\\{\\mathcal{D}(\\mathcal{S}/R_0)\\right\\}_G = \\begin{Bmatrix} m\\,\\vec{a}(G) \\\\ \\vec{\\delta}(G) = \\left.\\dfrac{\\mathrm{d}\\vec{\\sigma}(G)}{\\mathrm{d}t}\\right|_{R_0} \\end{Bmatrix}_G$$
$\\vec{\\sigma}(G) = [I_G]\\cdot\\vec{\\Omega}$ : moment cinétique en $G$.<br>
Pour une rotation autour d'un axe fixe : $\\delta_\\Delta = I_\\Delta\\,\\ddot{\\theta}$.` },
  ]},
  { titre: 'Principes fondamentaux', cartes: [
    { type:'th', label:'THM', titre:'Principe Fondamental de la Dynamique (PFD)',
      contenu:`Dans un référentiel galiléen $R_0$, pour tout solide $\\mathcal{S}$ :
$$\\sum_i \\left\\{\\mathcal{A}_i\\right\\} = \\left\\{\\mathcal{D}(\\mathcal{S}/R_0)\\right\\}$$
Projection sur un axe de rotation fixe $\\Delta$ :
$$\\sum_i M_{\\Delta}(\\mathcal{A}_i) = I_\\Delta\\,\\ddot{\\theta}$$` },
    { type:'th', label:'THM', titre:'Théorème de l\'énergie cinétique (TEC)',
      contenu:`$$\\frac{\\mathrm{d}E_c}{\\mathrm{d}t} = \\mathcal{P}_\\text{ext} + \\mathcal{P}_\\text{int}$$
Pour un solide indéformable : $\\mathcal{P}_\\text{int} = 0$.<br>
Forme intégrale : $\\Delta E_c = W_\\text{ext} + W_\\text{int}$<br>
Utile pour éliminer les efforts inconnus perpendiculaires au mouvement (pas de puissance).` },
    { type:'form', label:'FORM', titre:'Inertie équivalente',
      contenu:`Ramener tous les inerties à l'axe moteur en conservant l'énergie cinétique :
$$I_\\text{éq} = I_\\text{moteur} + \\sum_i I_i\\left(\\frac{\\omega_i}{\\omega_m}\\right)^2 + \\sum_j m_j\\left(\\frac{V_j}{\\omega_m}\\right)^2$$
Équation de mouvement :
$$I_\\text{éq}\\,\\ddot{\\theta}_m = C_\\text{moteur} - C_\\text{résistant, éq}$$` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 12. Transmetteurs de puissance
// ══════════════════════════════════════════════════════════════
'si-transmetteurs': [
  { titre: 'Engrenages et courroies', cartes: [
    { type:'prop', label:'PROP', titre:'Train d\'engrenages simple',
      contenu:`<strong>Rapport de transmission</strong> : $r = \\dfrac{\\omega_S}{\\omega_E} = \\prod_i \\left(-\\dfrac{Z_{m,i}}{Z_{d,i}}\\right)$<br>
(le signe $-$ signale un inversement de sens à chaque engrenage intermédiaire pair)<br>
<strong>Puissance transmise</strong> (sans pertes) : $P = C_E\\,\\omega_E = C_S\\,\\omega_S$<br>
<strong>Avec rendement $\\eta$</strong> : $C_S = \\eta\\,|r|\\,C_E$` },
    { type:'prop', label:'PROP', titre:'Courroies et chaînes',
      contenu:`<strong>Rapport de transmission</strong> : $r = \\dfrac{\\omega_S}{\\omega_E} = \\dfrac{D_E}{D_S} = \\dfrac{R_E}{R_S}$<br>
(même sens de rotation si courroie ouverte, sens inversé si croisée)<br>
<strong>Condition de non-glissement</strong> : $V_\\text{courroie} = R_E\\,\\omega_E = R_S\\,\\omega_S$.` },
  ]},
  { titre: 'Vis-écrou et rendement', cartes: [
    { type:'prop', label:'PROP', titre:'Système vis-écrou',
      contenu:`<strong>Relation cinématique</strong> : $v = p_\\text{vis} \\cdot \\dot{n} = \\dfrac{p_\\text{vis}}{2\\pi}\\,\\omega$<br>
($p_\\text{vis}$ : pas en m/tr, $v$ : vitesse de translation, $\\omega$ : vitesse angulaire)<br>
<strong>Bilan de puissance</strong> (rendement $\\eta$) :<br>
— Mouvement direct (rotation → translation) : $F\\cdot v = \\eta\\,C\\,\\omega$<br>
— Mouvement inverse (translation → rotation) : possible si $\\eta > 0{,}5$ (vis non auto-bloquante).` },
    { type:'def', label:'DEF', titre:'Rendement mécanique',
      contenu:`$$\\eta = \\frac{P_\\text{utile}}{P_\\text{entrée}} = \\frac{P_\\text{entrée} - P_\\text{pertes}}{P_\\text{entrée}}$$
Pour des transmetteurs en série : $\\eta_\\text{global} = \\prod_i \\eta_i$.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 13. Systèmes séquentiels
// ══════════════════════════════════════════════════════════════
'si-sequentiel': [
  { titre: 'Diagramme d\'états (SysML / Grafcet)', cartes: [
    { type:'def', label:'DEF', titre:'Diagramme d\'états SysML',
      contenu:`Le comportement d'un système séquentiel dépend de son <strong>état courant</strong>.<br>
<strong>État</strong> : situation stable du système (action : $\\text{do}/\\text{action}$).<br>
<strong>Transition</strong> : passage d'un état à un autre, déclenché par un événement.<br>
Syntaxe : $\\text{Événement}\\,[\\text{Garde}]\\,/\\,\\text{Action}$<br>
<strong>État initial</strong> : marqué par une flèche sans état source (pastille noire).` },
    { type:'def', label:'DEF', titre:'Grafcet (norme IEC 61131)',
      contenu:`<strong>Éléments</strong> :<br>
— <strong>Étape</strong> : représentée par un carré numéroté (active ou inactive).<br>
— <strong>Transition</strong> : ligne horizontale avec une condition réceptivité.<br>
— <strong>Action</strong> : associée à une étape (continue, impulsionnelle, conditionnelle).<br>
<strong>Franchissement</strong> : une transition est franchie si l'étape amont est active ET la réceptivité est vraie.<br>
<strong>Structuration</strong> : séquences, divergences et convergences en ET ($\\Vert$) ou en OU.` },
  ]},
],

// ══════════════════════════════════════════════════════════════
// 14. Méthodes numériques
// ══════════════════════════════════════════════════════════════
'si-num': [
  { titre: 'Résolution numérique d\'équations', cartes: [
    { type:'def', label:'DEF', titre:'Méthode d\'Euler explicite (EDO)',
      contenu:`Pour $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = f(t, y)$ avec $y(t_0) = y_0$ :<br>
$$y_{n+1} = y_n + h\\,f(t_n, y_n)$$
$h$ : pas de calcul. Erreur locale $\\mathcal{O}(h^2)$, erreur globale $\\mathcal{O}(h)$.<br>
Stable si $h < \\dfrac{2}{|\\lambda|}$ pour $f = \\lambda y$.` },
    { type:'def', label:'DEF', titre:'Méthode de Newton — zéros',
      contenu:`Pour résoudre $f(x) = 0$ :
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
Convergence quadratique (le nombre de décimales exactes double à chaque itération) si $f'(x^*) \\ne 0$.` },
  ]},
  { titre: 'Discrétisation et intégration numérique', cartes: [
    { type:'prop', label:'PROP', titre:'Intégration numérique',
      contenu:`<strong>Méthode des rectangles</strong> (gauche ou droite) : $\\int_a^b f \\approx h\\sum_k f(x_k)$, erreur $\\mathcal{O}(h)$.<br>
<strong>Méthode des trapèzes</strong> : $\\int_a^b f \\approx \\dfrac{h}{2}[f(a)+2\\sum_k f(x_k)+f(b)]$, erreur $\\mathcal{O}(h^2)$.<br>
<strong>Méthode de Simpson</strong> : erreur $\\mathcal{O}(h^4)$ — utilise 3 points.` },
    { type:'def', label:'DEF', titre:'Discrétisation d\'un correcteur (transformée en $z$)',
      contenu:`Pour implémenter numériquement un correcteur continu $C(p)$ avec une période $T_e$ :<br>
<strong>Euler explicite</strong> : $p \\approx \\dfrac{z-1}{T_e}$<br>
<strong>Euler implicite</strong> : $p \\approx \\dfrac{z-1}{T_e z}$<br>
<strong>Tustin (bilinéaire)</strong> : $p \\approx \\dfrac{2}{T_e}\\dfrac{z-1}{z+1}$ — conserve la stabilité, recommandé.` },
  ]},
],

}; // fin sections

// ── Insertion ────────────────────────────────────────────────────────────────

let chapCount = 0, secCount = 0, carteCount = 0;

for (const chap of chapitres) {
  // Insérer le chapitre (ignoré si déjà présent)
  try { run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)', [chap.id, 'si', chap.titre]); chapCount++; } catch {}
  // Lier à toutes les filières SI
  for (const fid of FILIERES) {
    try { run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)', [fid, chap.id, chap.ordre]); } catch {}
  }

  const secs = sections[chap.id] || [];
  for (let si = 0; si < secs.length; si++) {
    const sec = secs[si];
    run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)', [chap.id, sec.titre, si + 1]);
    const secId = lastId();
    secCount++;
    for (let ki = 0; ki < sec.cartes.length; ki++) {
      const c = sec.cartes[ki];
      run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
        [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
      carteCount++;
    }
  }
}

const data = db.export();
writeFileSync(DB_PATH, Buffer.from(data));
console.log(`✅ SI : ${chapCount} chapitres, ${secCount} sections, ${carteCount} cartes insérées.`);
