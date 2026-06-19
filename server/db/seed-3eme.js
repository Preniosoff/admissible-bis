// Seed — Cours de Maths 3ème
// Source : Cours3eme.pdf (81 pages) — Collège Jean-Baptiste Clément
// Run : node server/db/seed-3eme.js

import initSqlJs from 'sql.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = resolve(__dirname, 'prepamp.sqlite');

const SQL = await initSqlJs();
let db;
if (existsSync(DB_PATH)) {
  db = new SQL.Database(readFileSync(DB_PATH));
} else {
  console.error('Base introuvable :', DB_PATH); process.exit(1);
}

function run(sql, params = []) { db.run(sql, params); }
function get(sql, params = []) {
  const stmt = db.prepare(sql); stmt.bind(params);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free(); return row;
}
function lastId() { return get('SELECT last_insert_rowid() as id').id; }

// ── Données ──────────────────────────────────────────────────────────────────

const FILIERE = '3eme';
const MATIERE = 'ma';

const chapitres = [
  { id: 'ma-3e-arith',    titre: 'Arithmétique' },
  { id: 'ma-3e-pytha',    titre: 'Outils pour le triangle rectangle' },
  { id: 'ma-3e-calclit1', titre: 'Calcul littéral (1) — Développements et factorisations' },
  { id: 'ma-3e-thales',   titre: 'Thalès' },
  { id: 'ma-3e-fonc',     titre: 'Notions de fonction' },
  { id: 'ma-3e-trisiml',  titre: 'Triangles semblables' },
  { id: 'ma-3e-stats',    titre: 'Statistiques' },
  { id: 'ma-3e-calclit2', titre: 'Calcul littéral (2) — Équations et inéquations' },
  { id: 'ma-3e-fonlin',   titre: 'Fonctions linéaires et proportionnalité' },
  { id: 'ma-3e-geom3d',   titre: 'Géométrie dans l\'espace' },
  { id: 'ma-3e-proba',    titre: 'Probabilités' },
  { id: 'ma-3e-agrand',   titre: 'Agrandissements et réductions' },
  { id: 'ma-3e-fonaffine',titre: 'Fonctions affines' },
  { id: 'ma-3e-calcnum',  titre: 'Calculs numériques' },
];

const sections = {
// ════════════════════════════════════════════════════════
'ma-3e-arith': [
  {
    titre: 'Diviseurs',
    cartes: [
      { type:'def', label:'DEF', titre:'Diviseur et multiple',
        contenu:'$b$ est un <strong>diviseur</strong> de $a$ (ou $a$ est un <strong>multiple</strong> de $b$) si la division de $a$ par $b$ est exacte, c\'est-à-dire si le reste est nul.<br>Notation : $b \\mid a$. Exemple : $7 \\mid 63$ car $63 = 7 \\times 9$.' },
      { type:'meth', label:'METH', titre:'Dresser la liste des diviseurs de $n$',
        contenu:'<strong>Étapes :</strong><br>1. Écrire $1$ à gauche et $n$ à droite.<br>2. Tester $2, 3, 4, \\ldots$ : si la division est exacte, noter le quotient vis-à-vis.<br>3. S\'arrêter dès que le nombre testé apparaît déjà dans la colonne de droite.<br><em>Les diviseurs sont tous les nombres lus dans les deux colonnes.</em>' },
    ]
  },
  {
    titre: 'Nombres premiers',
    cartes: [
      { type:'def', label:'DEF', titre:'Nombre premier',
        contenu:'Un entier $n \\geq 2$ est <strong>premier</strong> s\'il admet exactement <strong>deux</strong> diviseurs : $1$ et $n$.<br>Premiers $< 100$ : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97$.<br>Attention : $1$ n\'est <em>pas</em> premier (un seul diviseur).' },
      { type:'prop', label:'PROP', titre:'Décomposition en facteurs premiers',
        contenu:'Tout entier $n \\geq 2$ se décompose de façon <strong>unique</strong> en produit de nombres premiers.<br>Exemple : $180 = 2^2 \\times 3^2 \\times 5$ &nbsp;·&nbsp; $1600 = 2^6 \\times 5^2$.' },
      { type:'meth', label:'METH', titre:'Décomposer $n$ en produit de facteurs premiers',
        contenu:'Diviser successivement par les premiers dans l\'ordre croissant ($2, 3, 5, 7, \\ldots$) jusqu\'à obtenir $1$.<br>Exemple : $180 \\xrightarrow{\\div 2} 90 \\xrightarrow{\\div 2} 45 \\xrightarrow{\\div 3} 15 \\xrightarrow{\\div 3} 5 \\xrightarrow{\\div 5} 1$<br>Donc $180 = 2^2 \\times 3^2 \\times 5$.' },
      { type:'prop', label:'PROP', titre:'Rendre une fraction irréductible',
        contenu:'Décomposer numérateur et dénominateur en produits de facteurs premiers, puis simplifier les facteurs communs.<br>$$\\frac{1600}{180} = \\frac{2^6 \\times 5^2}{2^2 \\times 3^2 \\times 5} = \\frac{2^4 \\times 5}{3^2} = \\frac{80}{9}$$' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-pytha': [
  {
    titre: 'Théorème de Pythagore',
    cartes: [
      { type:'th', label:'TH', titre:'Théorème de Pythagore',
        contenu:'Si $ABC$ est un triangle <strong>rectangle en $A$</strong>, alors $$BC^2 = AB^2 + AC^2$$<em>(le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés)</em>' },
      { type:'meth', label:'METH', titre:'Calculer l\'hypoténuse',
        contenu:'<strong>D :</strong> nommer le triangle et l\'angle droit.<br><strong>P :</strong> D\'après le théorème de Pythagore :<br>$$BC^2 = AB^2 + AC^2$$<strong>C :</strong> Remplacer, calculer, prendre la racine.<br>Exemple : $AB = 3$ cm, $AC = 5$ cm $\\Rightarrow BC^2 = 9 + 25 = 34 \\Rightarrow BC = \\sqrt{34} \\approx 5{,}8$ cm.' },
      { type:'meth', label:'METH', titre:'Calculer un côté adjacent à l\'angle droit',
        contenu:'Si l\'hypoténuse $BC$ et le côté $AB$ sont connus, isoler $AC^2$ :<br>$$AC^2 = BC^2 - AB^2 \\quad (\\text{grand}^2 - \\text{petit}^2)$$puis $AC = \\sqrt{BC^2 - AB^2}$.' },
      { type:'th', label:'TH', titre:'Réciproque du théorème de Pythagore',
        contenu:'Si dans un triangle $ABC$, l\'égalité $$BC^2 = AB^2 + AC^2$$ est vérifiée, alors $ABC$ est <strong>rectangle en $A$</strong>.<br><em>Toujours vérifier que $BC$ est bien le plus grand côté avant d\'appliquer cette réciproque.</em>' },
      { type:'meth', label:'METH', titre:'Montrer qu\'un triangle est rectangle',
        contenu:'<strong>D :</strong> Identifier le plus grand côté (ex. $BC$).<br><strong>P :</strong> Calculer séparément $BC^2$ et $AB^2 + AC^2$.<br><strong>C :</strong> Si égalité → d\'après la réciproque, $ABC$ est rectangle en $A$.<br>Si inégalité → d\'après la contraposée, $ABC$ n\'est pas rectangle.' },
    ]
  },
  {
    titre: 'Trigonométrie dans le triangle rectangle',
    cartes: [
      { type:'def', label:'DEF', titre:'Cosinus, sinus, tangente',
        contenu:'Dans un triangle rectangle, pour un angle $\\hat{A}$ (autre que l\'angle droit) :<br>$$\\cos \\hat{A} = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} \\quad \\sin \\hat{A} = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} \\quad \\tan \\hat{A} = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$$<em>Moyen mnémotechnique : <strong>SOH-CAH-TOA</strong></em>' },
      { type:'form', label:'FORM', titre:'Formules trigonométriques',
        contenu:'Dans un triangle $ABC$ rectangle en $C$ :<br>$$\\cos \\hat{A} = \\frac{AC}{AB} \\qquad \\sin \\hat{A} = \\frac{BC}{AB} \\qquad \\tan \\hat{A} = \\frac{BC}{AC}$$Propriété liée : $\\cos^2 \\hat{A} + \\sin^2 \\hat{A} = 1$' },
      { type:'meth', label:'METH', titre:'Calculer un côté avec la trigonométrie',
        contenu:'1. Identifier l\'angle connu $\\hat{A}$ et les côtés concernés.<br>2. Choisir la formule : si l\'hypoténuse est impliquée → $\\cos$ ou $\\sin$ ; sinon → $\\tan$.<br>3. Résoudre l\'équation.<br>Exemple : $\\cos \\hat{A} = \\frac{AC}{AB}$ donc $AC = AB \\times \\cos \\hat{A}$.' },
      { type:'meth', label:'METH', titre:'Calculer un angle avec la trigonométrie',
        contenu:'1. Calculer le rapport trigonométrique (ex. $\\cos \\hat{A} = \\frac{AC}{AB}$).<br>2. Utiliser la fonction réciproque à la calculatrice : $\\hat{A} = \\cos^{-1}\\!\\left(\\frac{AC}{AB}\\right)$.<br>Touches : <code>2nde</code> puis <code>cos</code> (ou <code>sin</code>, <code>tan</code>) selon le rapport.' },
      { type:'prop', label:'PROP', titre:'Relations dans un triangle rectangle (bilan)',
        contenu:'Somme des angles : $\\hat{A} + \\hat{B} + \\hat{C} = 180°$, donc si $\\hat{C} = 90°$, alors $\\hat{A} + \\hat{B} = 90°$ (les angles $\\hat{A}$ et $\\hat{B}$ sont <strong>complémentaires</strong>).<br>Conséquence : $\\cos \\hat{A} = \\sin \\hat{B}$ et $\\sin \\hat{A} = \\cos \\hat{B}$.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-calclit1': [
  {
    titre: 'Développements',
    cartes: [
      { type:'meth', label:'METH', titre:'Développer $a(bx + c)$',
        contenu:'Multiplier $a$ par chaque terme entre parenthèses :<br>$$a(bx + c) = a \\times bx + a \\times c = abx + ac$$Exemple : $5(8x + 2) = 40x + 10$.' },
      { type:'meth', label:'METH', titre:'Développer $(a + b)(c + d)$',
        contenu:'Chaque terme du premier facteur multiplie chaque terme du second :<br>$$(a+b)(c+d) = ac + ad + bc + bd$$Exemple : $(3x+1)(2x-5) = 6x^2 - 15x + 2x - 5 = 6x^2 - 13x - 5$.' },
    ]
  },
  {
    titre: 'Identités remarquables',
    cartes: [
      { type:'form', label:'FORM', titre:'Trois identités remarquables',
        contenu:'$$(a+b)^2 = a^2 + 2ab + b^2$$<br>$$(a-b)^2 = a^2 - 2ab + b^2$$<br>$$(a+b)(a-b) = a^2 - b^2$$<em>À connaître par cœur dans les deux sens (développement et factorisation).</em>' },
      { type:'meth', label:'METH', titre:'Reconnaître et utiliser les identités remarquables',
        contenu:'<strong>Au développement :</strong> reconnaître la forme $(\ldots)^2$ ou $(\ldots)(\ldots)$.<br>Exemple : $(2x+3)^2 = 4x^2 + 12x + 9$.<br><strong>À la factorisation :</strong> reconnaître $a^2 - b^2$, $a^2 + 2ab + b^2$, etc.<br>Exemple : $9x^2 - 25 = (3x)^2 - 5^2 = (3x-5)(3x+5)$.' },
    ]
  },
  {
    titre: 'Factorisations',
    cartes: [
      { type:'meth', label:'METH', titre:'Factoriser par un facteur commun',
        contenu:'Identifier le facteur commun à tous les termes et le mettre en évidence :<br>$$ab + ac = a(b+c)$$Exemple : $6x^2 + 15x = 3x(2x + 5)$.' },
      { type:'meth', label:'METH', titre:'Factoriser par une expression commune',
        contenu:'Si le même facteur apparaît dans plusieurs termes, le factoriser :<br>$A = (4x+1)(3x-2) - (5x-7)(4x+1)$<br>$= (4x+1)[(3x-2) - (5x-7)]$&nbsp;&nbsp;← facteur commun $(4x+1)$<br>$= (4x+1)(3x - 2 - 5x + 7)$<br>$= (4x+1)(-2x+5)$' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-thales': [
  {
    titre: 'Homothéties',
    cartes: [
      { type:'def', label:'DEF', titre:'Homothétie de centre $O$ et de rapport $k$',
        contenu:'L\'<strong>homothétie</strong> de centre $O$ et de rapport $k$ associe à tout point $A$ le point $A\'$ tel que $\\overrightarrow{OA\'} = k\\,\\overrightarrow{OA}$.<br>• Si $k > 0$ : $A\'$ est du même côté que $A$ par rapport à $O$.<br>• Si $k < 0$ : $A\'$ est du côté opposé à $A$ par rapport à $O$.' },
      { type:'prop', label:'PROP', titre:'Effets d\'une homothétie de rapport $k$',
        contenu:'Si toutes les longueurs d\'une figure sont multipliées par $|k|$ :<br>• Les <strong>longueurs</strong> sont multipliées par $|k|$.<br>• Les <strong>aires</strong> sont multipliées par $k^2$.<br>• Les <strong>volumes</strong> sont multipliés par $k^3$.<br>• Les <strong>angles</strong> sont conservés.<br>• Le <strong>parallélisme</strong> est conservé.' },
    ]
  },
  {
    titre: 'Théorème de Thalès',
    cartes: [
      { type:'th', label:'TH', titre:'Théorème de Thalès',
        contenu:'Si $(DE) \\parallel (BC)$ avec $D$ sur $[AB]$ et $E$ sur $[AC]$, alors :<br>$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$<em>Les rapports des longueurs correspondantes sont égaux.</em>' },
      { type:'meth', label:'METH', titre:'Calculer une longueur avec Thalès',
        contenu:'<strong>D :</strong> Vérifier la configuration (deux droites parallèles coupant deux sécantes).<br><strong>P :</strong> D\'après le théorème de Thalès :<br>$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$<strong>C :</strong> Identifier les longueurs connues et inconnues, puis résoudre l\'équation (produit en croix).' },
      { type:'th', label:'TH', titre:'Réciproque du théorème de Thalès',
        contenu:'Si $D$ est sur $[AB]$, $E$ est sur $[AC]$ et si $$\\frac{AD}{AB} = \\frac{AE}{AC}$$alors $(DE) \\parallel (BC)$.' },
      { type:'th', label:'TH', titre:'Contraposée du théorème de Thalès',
        contenu:'Si $D$ est sur $[AB]$, $E$ est sur $[AC]$ et si $$\\frac{AD}{AB} \\neq \\frac{AE}{AC}$$alors $(DE)$ et $(BC)$ ne sont <strong>pas parallèles</strong>.' },
      { type:'meth', label:'METH', titre:'Montrer que deux droites sont (ou non) parallèles',
        contenu:'Calculer les deux rapports $\\dfrac{AD}{AB}$ et $\\dfrac{AE}{AC}$.<br>• S\'ils sont <strong>égaux</strong> → d\'après la réciproque, $(DE) \\parallel (BC)$.<br>• S\'ils sont <strong>différents</strong> → d\'après la contraposée, $(DE)$ et $(BC)$ ne sont pas parallèles.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-fonc': [
  {
    titre: 'Définitions',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction, image, antécédent',
        contenu:'Une <strong>fonction</strong> $f$ associe à tout nombre $x$ (l\'<strong>antécédent</strong>) un unique nombre $f(x)$ (l\'<strong>image</strong>).<br>Notations : $f(x)$ se lit « $f$ de $x$ » ou « image de $x$ par $f$ ».<br>Forme alternative : $f : x \\longmapsto \\ldots$' },
      { type:'def', label:'DEF', titre:'Représentations d\'une fonction',
        contenu:'Une fonction peut être donnée par :<br>• une <strong>expression algébrique</strong> : ex. $f(x) = 3x^2 - 2x + 1$<br>• un <strong>tableau de valeurs</strong> : $(x, f(x))$<br>• une <strong>courbe représentative</strong> dans un repère<br>Dans tous les cas, à chaque antécédent correspond une et une seule image.' },
    ]
  },
  {
    titre: 'Calcul et lecture de valeurs',
    cartes: [
      { type:'meth', label:'METH', titre:'Calculer une image à partir d\'une expression',
        contenu:'Remplacer $x$ par le nombre donné dans l\'expression de $f$ (substitution).<br>Exemple : $f(x) = 3x^2 - 2x + 1$, calculer $f(5)$ :<br>$f(5) = 3 \\times 5^2 - 2 \\times 5 + 1 = 75 - 10 + 1 = 66$.' },
      { type:'meth', label:'METH', titre:'Lire image et antécédent dans un tableau',
        contenu:'• Pour trouver <strong>l\'image</strong> de $a$ : chercher $a$ sur la ligne des $x$, lire $f(a)$ en dessous.<br>• Pour trouver <strong>un antécédent</strong> de $b$ : chercher $b$ sur la ligne des $f(x)$, lire $x$ au-dessus.<br><em>Attention : une image est unique ; un antécédent peut ne pas exister ou ne pas être unique.</em>' },
      { type:'meth', label:'METH', titre:'Lire image et antécédent sur une courbe',
        contenu:'• <strong>Image de $a$</strong> : partir de $x = a$ sur l\'axe des abscisses → monter verticalement jusqu\'à la courbe → lire l\'ordonnée $f(a)$.<br>• <strong>Antécédent de $b$</strong> : partir de $y = b$ sur l\'axe des ordonnées → aller horizontalement jusqu\'à la courbe → lire l\'abscisse $x$.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-trisiml': [
  {
    titre: 'Critère de similitude',
    cartes: [
      { type:'def', label:'DEF', titre:'Triangles semblables',
        contenu:'Deux triangles sont <strong>semblables</strong> si leurs angles sont deux à deux égaux.<br>Si $\\triangle ABC \\sim \\triangle DEF$ : $\\hat{A} = \\hat{D}$, $\\hat{B} = \\hat{E}$, $\\hat{C} = \\hat{F}$.<br>On appelle <strong>côtés homologues</strong> les côtés situés en face d\'angles homologues.' },
      { type:'prop', label:'PROP', titre:'Côtés homologues proportionnels',
        contenu:'Si $\\triangle ABC \\sim \\triangle DEF$, alors les côtés homologues sont proportionnels :<br>$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$$où $k$ est le <strong>rapport de similitude</strong>.<br><em>Conséquence : si on connaît $k$ et trois côtés d\'un triangle, on calcule les trois côtés de l\'autre.</em>' },
    ]
  },
  {
    titre: 'Application',
    cartes: [
      { type:'meth', label:'METH', titre:'Calculer une longueur par similitude',
        contenu:'1. Montrer que les deux triangles sont semblables (angles égaux deux à deux).<br>2. Identifier correctement les sommets homologues.<br>3. Écrire la proportion et résoudre par produit en croix.<br>Exemple : si $\\frac{AB}{DE} = \\frac{BC}{EF}$, alors $AB = \\frac{DE \\times BC}{EF}$.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-stats': [
  {
    titre: 'Organisation des données',
    cartes: [
      { type:'def', label:'DEF', titre:'Effectif et fréquence',
        contenu:'Pour une série statistique :<br>• L\'<strong>effectif</strong> d\'une valeur est le nombre de fois qu\'elle apparaît dans la série.<br>• L\'<strong>effectif total</strong> $N$ est la somme de tous les effectifs.<br>• La <strong>fréquence</strong> d\'une valeur est le quotient de son effectif par $N$ (résultat entre $0$ et $1$).' },
      { type:'def', label:'DEF', titre:'Effectifs cumulés croissants (ECC)',
        contenu:'Les <strong>effectifs cumulés croissants</strong> s\'obtiennent en additionnant les effectifs les uns après les autres dans l\'ordre croissant des valeurs.<br>Ils permettent de savoir directement combien de valeurs sont inférieures ou égales à une valeur donnée.' },
    ]
  },
  {
    titre: 'Paramètres statistiques',
    cartes: [
      { type:'def', label:'DEF', titre:'Étendue',
        contenu:'L\'<strong>étendue</strong> d\'une série statistique est la différence entre la valeur maximale et la valeur minimale :<br>$$\\text{étendue} = \\text{max} - \\text{min}$$Elle mesure la dispersion globale de la série.' },
      { type:'def', label:'DEF', titre:'Médiane',
        contenu:'La <strong>médiane</strong> est la valeur qui partage la série <em>ordonnée</em> en deux groupes de même effectif.<br>• Si $N$ est impair : la médiane est la valeur du rang $\\frac{N+1}{2}$.<br>• Si $N$ est pair : la médiane est la moyenne des valeurs de rangs $\\frac{N}{2}$ et $\\frac{N}{2}+1$.' },
      { type:'def', label:'DEF', titre:'Quartiles',
        contenu:'• Le <strong>premier quartile $Q_1$</strong> est la plus petite valeur pour laquelle au moins $\\frac{1}{4}$ des valeurs de la série lui sont inférieures ou égales.<br>• Le <strong>troisième quartile $Q_3$</strong> est la plus petite valeur pour laquelle au moins $\\frac{3}{4}$ des valeurs lui sont inférieures ou égales.<br>• L\'<strong>écart interquartile</strong> est $Q_3 - Q_1$.' },
      { type:'def', label:'DEF', titre:'Moyenne',
        contenu:'La <strong>moyenne</strong> d\'une série est la somme de toutes les valeurs divisée par l\'effectif total :<br>$$\\bar{x} = \\frac{\\sum n_i \\times x_i}{N} = \\frac{n_1 x_1 + n_2 x_2 + \\cdots + n_k x_k}{N}$$où $n_i$ est l\'effectif de la valeur $x_i$ et $N = \\sum n_i$.' },
      { type:'meth', label:'METH', titre:'Calculer la moyenne pondérée',
        contenu:'Multiplier chaque valeur par son effectif, additionner, puis diviser par l\'effectif total.<br>Exemple : valeurs $10, 15, 20, 25$ avec effectifs $4, 7, 9, 3$ (total $N = 23$) :<br>$$\\bar{x} = \\frac{10 \\times 4 + 15 \\times 7 + 20 \\times 9 + 25 \\times 3}{23} = \\frac{40 + 105 + 180 + 75}{23} = \\frac{400}{23} \\approx 17{,}4$$' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-calclit2': [
  {
    titre: 'Équations',
    cartes: [
      { type:'prop', label:'PROP', titre:'Règle du produit nul',
        contenu:'Pour tous réels $a$ et $b$ :<br>$$ab = 0 \\iff a = 0 \\text{ ou } b = 0$$<em>Un produit est nul si et seulement si l\'un au moins de ses facteurs est nul.</em>' },
      { type:'meth', label:'METH', titre:'Résoudre une équation-produit nul',
        contenu:'Mettre l\'équation sous la forme $(\ldots)(\ldots) = 0$, puis appliquer la règle du produit nul.<br>Exemple : $(4x+8)(3x-21) = 0$<br>$\\Leftrightarrow 4x+8 = 0$ ou $3x-21 = 0$<br>$\\Leftrightarrow x = -2$ ou $x = 7$<br>Ensemble solution : $\\mathcal{S} = \\{-2 ; 7\\}$.' },
      { type:'prop', label:'PROP', titre:'Équation $x^2 = a$',
        contenu:'Pour $a > 0$ : l\'équation $x^2 = a$ admet <strong>deux solutions</strong> $\\sqrt{a}$ et $-\\sqrt{a}$.<br>Pour $a = 0$ : l\'unique solution est $x = 0$.<br>Pour $a < 0$ : <strong>aucune solution</strong> réelle.<br>Exemple : $x^2 = 49 \\Rightarrow x = 7$ ou $x = -7$.' },
      { type:'meth', label:'METH', titre:'Résoudre une équation du premier degré',
        contenu:'Objectif : isoler $x$ seul d\'un côté du signe $=$.<br>Règles : on peut ajouter/soustraire le même nombre des deux membres, ou multiplier/diviser les deux membres par un même nombre <strong>non nul</strong>.<br>Étapes types : développer → rassembler les $x$ d\'un côté, les nombres de l\'autre → diviser.' },
    ]
  },
  {
    titre: 'Inéquations',
    cartes: [
      { type:'def', label:'DEF', titre:'Inéquation',
        contenu:'Une <strong>inéquation</strong> est une inégalité qui dépend d\'une variable $x$. On cherche les valeurs de $x$ qui la vérifient : c\'est l\'<strong>ensemble solution</strong>, souvent un intervalle.<br>Exemples : $2x + 3 < 7$ ou $-x \\geq 4$.' },
      { type:'meth', label:'METH', titre:'Résoudre une inéquation du premier degré',
        contenu:'Mêmes règles que pour les équations, avec une <strong>règle supplémentaire cruciale</strong> :<br>$$\\textbf{Multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité.}$$Exemple : $-3x < 6 \\Rightarrow x > -2$ (le sens $<$ devient $>$).<br>La solution s\'écrit en général sous forme d\'intervalle : $]-2 ; +\\infty[$.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-fonlin': [
  {
    titre: 'Fonctions linéaires',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction linéaire',
        contenu:'Une <strong>fonction linéaire</strong> est de la forme $f(x) = ax$ où $a$ est un nombre réel appelé <strong>coefficient</strong>.<br>Sa représentation graphique est une <strong>droite passant par l\'origine</strong> $O$.<br>Exemples : $f(x) = 4x$ ; $g(x) = -6x$ ; $h(x) = \\sqrt{5}\\,x$.' },
      { type:'prop', label:'PROP', titre:'Représentation graphique d\'une fonction linéaire',
        contenu:'La représentation de $f(x) = ax$ est la droite d\'équation $y = ax$.<br>• Elle passe toujours par <strong>l\'origine</strong> $O(0, 0)$.<br>• Si $a > 0$ : droite croissante (monte de gauche à droite).<br>• Si $a < 0$ : droite décroissante (descend de gauche à droite).<br>• $|a|$ est la pente : plus grand → droite plus pentue.' },
      { type:'meth', label:'METH', titre:'Déterminer l\'expression d\'une fonction linéaire',
        contenu:'Puisque $f(x) = ax$, il suffit de trouver $a$ à partir d\'une valeur connue :<br>Si $f(c) = d$ alors $ac = d$ donc $a = \\dfrac{d}{c}$.<br>Exemple : $f(5) = 6 \\Rightarrow a = \\dfrac{6}{5} \\Rightarrow f(x) = \\dfrac{6}{5}x$.' },
    ]
  },
  {
    titre: 'Proportionnalité',
    cartes: [
      { type:'def', label:'DEF', titre:'Grandeurs proportionnelles',
        contenu:'Deux grandeurs sont <strong>proportionnelles</strong> si l\'on peut passer de l\'une à l\'autre en multipliant par un même nombre $k$, appelé <strong>coefficient de proportionnalité</strong>.<br>Dans un tableau de proportionnalité, chaque valeur de la 2e ligne est obtenue en multipliant la valeur correspondante de la 1re ligne par $k$.' },
      { type:'prop', label:'PROP', titre:'Lien avec les fonctions linéaires',
        contenu:'Toute situation de proportionnalité de coefficient $k$ est modélisée par la fonction linéaire $f(x) = kx$.<br>Exemple : le prix de $x$ baguettes à $0{,}90$€ l\'une est $f(x) = 0{,}90 \\times x$.' },
      { type:'meth', label:'METH', titre:'Vérifier et compléter un tableau de proportionnalité',
        contenu:'<strong>Vérifier :</strong> calculer les quotients ligne 2 ÷ ligne 1. S\'ils sont tous égaux, le tableau est de proportionnalité.<br><strong>Compléter :</strong> multiplier la valeur manquante de la ligne 1 par $k$ pour obtenir la ligne 2, ou utiliser le produit en croix : $\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow ad = bc$.' },
      { type:'def', label:'DEF', titre:'Grandeurs inversement proportionnelles',
        contenu:'Deux grandeurs sont <strong>inversement proportionnelles</strong> si leur produit est constant : $x \\times y = k$, soit $y = \\dfrac{k}{x}$.<br>Exemple : vitesse et temps de trajet pour une distance fixée ($v \\times t = d$).' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-geom3d': [
  {
    titre: 'Sphères et boules',
    cartes: [
      { type:'def', label:'DEF', titre:'Sphère et boule',
        contenu:'• La <strong>sphère</strong> de centre $O$ et de rayon $r$ est l\'ensemble des points de l\'espace situés à la distance $r$ de $O$ (c\'est la surface).<br>• La <strong>boule</strong> de centre $O$ et de rayon $r$ est l\'ensemble des points à distance <em>inférieure ou égale</em> à $r$ de $O$ (surface + intérieur).' },
      { type:'form', label:'FORM', titre:'Aire de la sphère et volume de la boule',
        contenu:'Pour une sphère/boule de rayon $r$ :<br>$$\\mathcal{A}_{\\text{sphère}} = 4\\pi r^2$$$$\\mathcal{V}_{\\text{boule}} = \\frac{4}{3}\\pi r^3$$' },
    ]
  },
  {
    titre: 'Volumes des solides usuels',
    cartes: [
      { type:'form', label:'FORM', titre:'Volumes — cube, pavé, prisme et cylindre',
        contenu:'• <strong>Cube</strong> de côté $a$ : $\\mathcal{V} = a^3$<br>• <strong>Pavé droit</strong> $L \\times l \\times h$ : $\\mathcal{V} = L \\times l \\times h$<br>• <strong>Prisme droit</strong> : $\\mathcal{V} = \\mathcal{A}_{\\text{base}} \\times h$<br>• <strong>Cylindre</strong> de rayon $r$ et hauteur $h$ : $\\mathcal{V} = \\pi r^2 h$' },
      { type:'form', label:'FORM', titre:'Volumes — pyramide et cône',
        contenu:'$$\\mathcal{V}_{\\text{pyramide}} = \\frac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$$$$\\mathcal{V}_{\\text{cône}} = \\frac{1}{3} \\times \\pi r^2 \\times h$$<em>Le coefficient $\\frac{1}{3}$ s\'applique à tout solide à sommet (pyramide ou cône).</em>' },
    ]
  },
  {
    titre: 'Sections de solides',
    cartes: [
      { type:'prop', label:'PROP', titre:'Section d\'une pyramide par un plan parallèle à la base',
        contenu:'Si on coupe une pyramide (ou un cône) par un plan parallèle à la base, à hauteur $h\'$ avec une hauteur totale $h$, le rapport de similitude est $k = \\dfrac{h\'}{h}$.<br>• L\'aire de la section est $k^2 \\times \\mathcal{A}_{\\text{base}}$.<br>• La section est une figure semblable à la base.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-proba': [
  {
    titre: 'Vocabulaire des probabilités',
    cartes: [
      { type:'def', label:'DEF', titre:'Expérience aléatoire, univers, issue',
        contenu:'• Une <strong>expérience aléatoire</strong> est une expérience dont on ne peut pas prévoir le résultat.<br>• L\'<strong>univers</strong> $\\Omega$ est l\'ensemble de tous les résultats possibles.<br>• Chaque résultat possible est une <strong>issue</strong>.<br>• Un <strong>événement</strong> est un ensemble d\'issues (une partie de $\\Omega$).' },
      { type:'def', label:'DEF', titre:'Événement certain, impossible, contraire',
        contenu:'• L\'<strong>événement certain</strong> est $\\Omega$ lui-même : il se réalise toujours.<br>• L\'<strong>événement impossible</strong> est $\\emptyset$ : il ne se réalise jamais.<br>• L\'<strong>événement contraire</strong> de $A$, noté $\\bar{A}$, est l\'ensemble des issues qui ne sont pas dans $A$.' },
    ]
  },
  {
    titre: 'Calcul de probabilités',
    cartes: [
      { type:'def', label:'DEF', titre:'Probabilité d\'un événement',
        contenu:'La <strong>probabilité</strong> de l\'événement $A$ est le réel $p(A) \\in [0, 1]$ mesurant la « chance » que $A$ se réalise.<br>En cas d\'<strong>équiprobabilité</strong> (toutes les issues ont la même probabilité) :<br>$$p(A) = \\frac{\\text{nombre d\'issues favorables à } A}{\\text{nombre total d\'issues}}$$' },
      { type:'prop', label:'PROP', titre:'Propriétés des probabilités',
        contenu:'• $0 \\leq p(A) \\leq 1$ pour tout événement $A$.<br>• $p(\\Omega) = 1$ &nbsp;·&nbsp; $p(\\emptyset) = 0$.<br>• $p(\\bar{A}) = 1 - p(A)$ &nbsp;&nbsp;← très utile en pratique.<br>• Si $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$) : $p(A \\cup B) = p(A) + p(B)$.' },
    ]
  },
  {
    titre: 'Expériences à plusieurs épreuves',
    cartes: [
      { type:'meth', label:'METH', titre:'Arbre de probabilités',
        contenu:'Pour une expérience à deux épreuves :<br>1. Dessiner un arbre avec une branche par issue à chaque étape.<br>2. Inscrire la probabilité sur chaque branche.<br>3. La probabilité d\'un chemin = <strong>produit</strong> des probabilités des branches.<br>4. La probabilité d\'un événement = <strong>somme</strong> des probabilités des chemins favorables.' },
      { type:'prop', label:'PROP', titre:'Probabilités totales (arbre)',
        contenu:'La somme des probabilités de toutes les branches issues d\'un même nœud vaut $1$.<br>La somme des probabilités de toutes les « feuilles » (chemins complets) vaut $1$.<br>Ces deux propriétés permettent de vérifier un arbre ou de retrouver une probabilité manquante.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-agrand': [
  {
    titre: 'Définition et propriétés',
    cartes: [
      { type:'def', label:'DEF', titre:'Agrandissement et réduction',
        contenu:'En multipliant toutes les longueurs d\'une figure $F$ par un réel <strong>strictement positif</strong> $k$, on obtient une figure $F\'$ :<br>• <strong>agrandissement</strong> si $k > 1$<br>• <strong>réduction</strong> si $k < 1$<br>$k$ est le <strong>rapport d\'agrandissement/réduction</strong> (ou coefficient).' },
      { type:'prop', label:'PROP', titre:'Conservation du parallélisme',
        contenu:'Un agrandissement ou une réduction <strong>conserve le parallélisme</strong> : si deux droites sont parallèles dans $F$, leurs images dans $F\'$ le sont aussi.' },
      { type:'prop', label:'PROP', titre:'Effets sur les aires et volumes',
        contenu:'Si toutes les longueurs sont multipliées par $k$ :<br>$$\\text{aire} \\times k^2 \\qquad \\text{volume} \\times k^3$$Les angles sont conservés.<br>Exemple : si $k = 3$, l\'aire est multipliée par $9$ et le volume par $27$.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-fonaffine': [
  {
    titre: 'Définitions et valeurs',
    cartes: [
      { type:'def', label:'DEF', titre:'Fonction affine',
        contenu:'Une <strong>fonction affine</strong> est de la forme $f(x) = ax + b$ où $a$ et $b$ sont des réels.<br>• $a$ : <strong>coefficient directeur</strong> (ou pente)<br>• $b$ : <strong>ordonnée à l\'origine</strong><br>Si $b = 0$ : fonction linéaire. Si $a = 0$ : fonction constante.' },
      { type:'prop', label:'PROP', titre:'Sens de variation d\'une fonction affine',
        contenu:'Pour $f(x) = ax + b$ :<br>• $a > 0$ : $f$ est <strong>strictement croissante</strong> sur $\\mathbb{R}$.<br>• $a < 0$ : $f$ est <strong>strictement décroissante</strong> sur $\\mathbb{R}$.<br>• $a = 0$ : $f$ est <strong>constante</strong> (droite horizontale).' },
    ]
  },
  {
    titre: 'Représentation graphique',
    cartes: [
      { type:'prop', label:'PROP', titre:'Représentation graphique d\'une fonction affine',
        contenu:'La représentation graphique de $f(x) = ax + b$ est la <strong>droite $\\mathcal{D}$ d\'équation $y = ax + b$</strong>.<br>• Elle coupe l\'axe des ordonnées au point $(0, b)$.<br>• Le coefficient directeur $a$ mesure l\'inclinaison : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$ pour deux points de la droite.' },
      { type:'meth', label:'METH', titre:'Tracer une droite à partir de son équation',
        contenu:'1. Choisir deux valeurs de $x$ (ex. $x = 0$ et $x = 1$).<br>2. Calculer les $y$ correspondants.<br>3. Placer les deux points dans le repère et les relier.<br>Exemple : $y = 3x + 2$ → $(0, 2)$ et $(1, 5)$.' },
      { type:'meth', label:'METH', titre:'Déterminer l\'équation d\'une droite passant par deux points',
        contenu:'Soient $A(x_A, y_A)$ et $B(x_B, y_B)$ deux points de la droite.<br>1. Calculer $a = \\dfrac{y_B - y_A}{x_B - x_A}$.<br>2. Calculer $b$ : $b = y_A - a x_A$.<br>3. Écrire $y = ax + b$.' },
      { type:'meth', label:'METH', titre:'Résoudre $f(x) = g(x)$ graphiquement',
        contenu:'Les solutions de $f(x) = g(x)$ sont les abscisses des points d\'<strong>intersection</strong> des courbes de $f$ et $g$.<br>Pour deux fonctions affines : les courbes sont deux droites et se coupent en (au plus) un point.' },
    ]
  },
],
// ════════════════════════════════════════════════════════
'ma-3e-calcnum': [
  {
    titre: 'Ensemble des nombres',
    cartes: [
      { type:'def', label:'DEF', titre:'Types de nombres',
        contenu:'• <strong>Entiers naturels</strong> $\\mathbb{N}$ : $0, 1, 2, 3, \\ldots$<br>• <strong>Entiers relatifs</strong> $\\mathbb{Z}$ : $\\ldots, -2, -1, 0, 1, 2, \\ldots$<br>• <strong>Décimaux</strong> : fraction dont le dénominateur est une puissance de $10$ ; écriture finie après la virgule.<br>• <strong>Rationnels</strong> $\\mathbb{Q}$ : peuvent s\'écrire $\\frac{p}{q}$ avec $p, q \\in \\mathbb{Z}$, $q \\neq 0$.<br>• <strong>Irrationnels</strong> : non rationnels. Ex. $\\sqrt{2}$, $\\pi$.<br>• <strong>Réels</strong> $\\mathbb{R}$ : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.' },
      { type:'prop', label:'PROP', titre:'Critères de divisibilité',
        contenu:'• par $2$ : le chiffre des unités est $0, 2, 4, 6$ ou $8$.<br>• par $3$ : la somme des chiffres est divisible par $3$.<br>• par $5$ : le chiffre des unités est $0$ ou $5$.<br>• par $9$ : la somme des chiffres est divisible par $9$.<br>• par $10$ : le chiffre des unités est $0$.' },
      { type:'form', label:'FORM', titre:'Règles de priorité opératoire',
        contenu:'1. Calculs entre <strong>parenthèses</strong> (de l\'intérieur vers l\'extérieur).<br>2. <strong>Puissances et racines carrées</strong>.<br>3. <strong>Multiplications et divisions</strong> (de gauche à droite).<br>4. <strong>Additions et soustractions</strong> (de gauche à droite).' },
    ]
  },
  {
    titre: 'Puissances',
    cartes: [
      { type:'def', label:'DEF', titre:'Puissance d\'un nombre',
        contenu:'Pour $a \\in \\mathbb{R}$ et $n \\in \\mathbb{N}^*$ :<br>$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ fois}}$$Conventions : $a^0 = 1$ (pour $a \\neq 0$) &nbsp;·&nbsp; $a^1 = a$.<br>Pour $n \\geq 1$ : $a^{-n} = \\dfrac{1}{a^n}$ (pour $a \\neq 0$).' },
      { type:'form', label:'FORM', titre:'Règles de calcul sur les puissances',
        contenu:'Pour $a \\neq 0$ et $m, n \\in \\mathbb{Z}$ :<br>$$a^m \\times a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n}$$$$\\left(a^m\\right)^n = a^{mn} \\qquad (ab)^n = a^n b^n$$Exemple : $10^3 \\times 10^4 = 10^7$ &nbsp;·&nbsp; $(2^3)^2 = 2^6 = 64$.' },
      { type:'form', label:'FORM', titre:'Notation scientifique',
        contenu:'Tout réel non nul s\'écrit sous la forme $a \\times 10^n$ avec $1 \\leq |a| < 10$ et $n \\in \\mathbb{Z}$.<br>Exemples : $3\\,456 = 3{,}456 \\times 10^3$ &nbsp;·&nbsp; $0{,}00072 = 7{,}2 \\times 10^{-4}$.<br>Pour additionner : mettre la même puissance de $10$. Pour multiplier : $a \\times 10^m \\times b \\times 10^n = ab \\times 10^{m+n}$.' },
    ]
  },
  {
    titre: 'Racines carrées',
    cartes: [
      { type:'def', label:'DEF', titre:'Racine carrée',
        contenu:'Pour $a \\geq 0$, la <strong>racine carrée</strong> de $a$, notée $\\sqrt{a}$, est le réel positif (ou nul) dont le carré est $a$ :<br>$$\\sqrt{a} \\geq 0 \\quad \\text{et} \\quad (\\sqrt{a})^2 = a$$Exemples : $\\sqrt{25} = 5$ &nbsp;·&nbsp; $\\sqrt{2} \\approx 1{,}414$ &nbsp;·&nbsp; $\\sqrt{0} = 0$.' },
      { type:'prop', label:'PROP', titre:'Propriétés des racines carrées',
        contenu:'Pour $a \\geq 0$ et $b \\geq 0$ :<br>$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (b > 0)$$$$\\left(\\sqrt{a}\\right)^2 = a \\qquad \\sqrt{a^2} = |a| = a \\text{ si } a \\geq 0$$<strong>Attention :</strong> $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ en général.' },
      { type:'meth', label:'METH', titre:'Simplifier $\\sqrt{n}$',
        contenu:'Chercher le plus grand carré parfait qui divise $n$.<br>Si $n = k^2 \\times m$ alors $\\sqrt{n} = k\\sqrt{m}$.<br>Exemples : $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$ &nbsp;·&nbsp; $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.<br>Pour comparer : $\\sqrt{5} \\approx 2{,}236$ &nbsp;·&nbsp; $\\sqrt{3} \\approx 1{,}732$.' },
    ]
  },
],
};

// ── Insertion ────────────────────────────────────────────────────────────────

// Vérifier que la filière 3ème existe
const filiereRow = get('SELECT id FROM filieres WHERE id = ?', [FILIERE]);
if (!filiereRow) { console.error(`Filière "${FILIERE}" introuvable`); process.exit(1); }

let chapitreCount = 0, sectionCount = 0, carteCount = 0;

for (let ci = 0; ci < chapitres.length; ci++) {
  const { id, titre } = chapitres[ci];

  // Insérer le chapitre (ignoré si déjà présent)
  try {
    run('INSERT OR IGNORE INTO chapitres (id, matiere_id, titre) VALUES (?, ?, ?)', [id, MATIERE, titre]);
    chapitreCount++;
  } catch {}

  // Lier la filière au chapitre
  try {
    run('INSERT OR IGNORE INTO filiere_chapitres (filiere_id, chapitre_id, ordre) VALUES (?, ?, ?)',
      [FILIERE, id, ci + 1]);
  } catch {}

  // Sections et cartes
  const secs = sections[id] || [];
  for (let si = 0; si < secs.length; si++) {
    const sec = secs[si];

    // Insérer la section
    run('INSERT INTO sections (chapitre_id, titre, ordre) VALUES (?, ?, ?)', [id, sec.titre, si + 1]);
    const secId = lastId();
    sectionCount++;

    // Insérer les cartes
    for (let ki = 0; ki < sec.cartes.length; ki++) {
      const c = sec.cartes[ki];
      run('INSERT INTO cartes (section_id, type, label, titre, contenu, ordre) VALUES (?, ?, ?, ?, ?, ?)',
        [secId, c.type, c.label, c.titre, c.contenu, ki + 1]);
      carteCount++;
    }
  }
}

// Sauvegarde
const data = db.export();
writeFileSync(DB_PATH, Buffer.from(data));

console.log(`✅ Seed 3ème terminé :`);
console.log(`   ${chapitreCount} chapitres`);
console.log(`   ${sectionCount} sections`);
console.log(`   ${carteCount} cartes`);
console.log(`   DB sauvegardée → ${DB_PATH}`);
