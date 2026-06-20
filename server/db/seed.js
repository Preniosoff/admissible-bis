import initSqlJs from 'sql.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = resolve(__dirname, 'prepamp.sqlite');
const schemaPath = resolve(__dirname, 'schema.sql');

const SQL = await initSqlJs();
let db;
if (existsSync(DB_PATH)) {
  db = new SQL.Database(readFileSync(DB_PATH));
} else {
  db = new SQL.Database();
}

const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

function run(sql, params) { db.run(sql, params); }

// --- Niveaux ---
run('INSERT OR IGNORE INTO niveaux VALUES (?, ?, ?)', ['college', 'Collège', 1]);
run('INSERT OR IGNORE INTO niveaux VALUES (?, ?, ?)', ['lycee', 'Lycée', 2]);
run('INSERT OR IGNORE INTO niveaux VALUES (?, ?, ?)', ['prepa', 'Classes préparatoires', 3]);

// --- Filières ---
const filieres = [
  ['6eme', '6ème', 'college', 1], ['5eme', '5ème', 'college', 2],
  ['4eme', '4ème', 'college', 3], ['3eme', '3ème', 'college', 4],
  ['2nde', 'Seconde', 'lycee', 1], ['1ere-gen', 'Première générale', 'lycee', 2],
  ['term-gen', 'Terminale générale', 'lycee', 3],
  ['term-spe-maths', 'Terminale spé Maths', 'lycee', 4],
  ['term-spe-pc', 'Terminale spé Physique-Chimie', 'lycee', 5],
  ['term-spe-si', 'Terminale spé SI', 'lycee', 6],
  ['term-spe-nsi', 'Terminale spé NSI', 'lycee', 7],
  ['mpsi', 'MPSI', 'prepa', 1], ['mp', 'MP', 'prepa', 2],
  ['pcsi', 'PCSI', 'prepa', 3], ['pc', 'PC', 'prepa', 4],
  ['psi', 'PSI', 'prepa', 5], ['ptsi', 'PTSI', 'prepa', 6],
  ['pt', 'PT', 'prepa', 7], ['mpi', 'MPI', 'prepa', 8],
  ['tsi', 'TSI', 'prepa', 9], ['bcpst', 'BCPST', 'prepa', 10],
];
for (const [id, nom, nid, o] of filieres) {
  run('INSERT OR IGNORE INTO filieres VALUES (?, ?, ?, ?)', [id, nom, nid, o]);
}

// --- Matières ---
const matieres = [
  ['ma', 'Mathématiques'], ['ph', 'Physique'], ['ch', 'Chimie'],
  ['si', 'Sciences de l\'Ingénieur'], ['info', 'Informatique'],
  ['fr', 'Français / Philosophie'], ['ang', 'Anglais'],
  ['svt', 'SVT'], ['hg', 'Histoire-Géographie'],
  ['phch', 'Physique-Chimie'],
];
for (const [id, nom] of matieres) {
  run('INSERT OR IGNORE INTO matieres VALUES (?, ?, ?)', [id, nom, null]);
}

// --- Filière-Matières ---
const fm = {
  mp:   ['ph', 'ma', 'ch', 'si', 'info', 'fr'],
  mpsi: ['ph', 'ma', 'ch', 'si', 'info', 'fr'],
  pc:   ['ph', 'ma', 'ch', 'fr'],
  pcsi: ['ph', 'ma', 'ch', 'si', 'fr'],
  psi:  ['ph', 'ma', 'ch', 'si', 'fr'],
  mpi:  ['ma', 'ph', 'info', 'fr'],
  tsi:  ['ph', 'ma', 'ch', 'si', 'fr'],
  pt:   ['ph', 'ma', 'si', 'fr'],
  bcpst:['ph', 'ma', 'ch', 'svt', 'fr'],
  // Collège
  '6eme': ['ma', 'fr', 'hg', 'svt', 'ang'],
  '5eme': ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  '4eme': ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  '3eme': ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  // Lycée
  '2nde':     ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  '1ere-gen': ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  'term-gen': ['ma', 'fr', 'phch', 'svt', 'hg', 'ang'],
  'term-spe-maths': ['ma'],
  'term-spe-pc':    ['ph', 'ch'],
  'term-spe-si':    ['si'],
  'term-spe-nsi':   ['info'],
};
for (const [fid, mids] of Object.entries(fm)) {
  mids.forEach((mid, i) => {
    run('INSERT OR IGNORE INTO filiere_matieres VALUES (?, ?, ?)', [fid, mid, i + 1]);
  });
}

// ═══════════════════════════════════════════════
// CHAPITRES, SECTIONS & CARTES — Physique (MP)
// ═══════════════════════════════════════════════

const chapitresData = [
  {
    id: "ph-vect", matiere: "ph", titre: "Analyse vectorielle", ordre: 1,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Définitions", cartes: [
        { type: "def", titre: "Champ scalaire / vectoriel", contenu: `Champ scalaire : application qui à chaque point de l'espace associe un scalaire. Champ vectoriel : application qui à chaque point associe un vecteur.` },
        { type: "def", titre: "Circulation d'un champ vectoriel", contenu: `Sur un contour $\\mathcal{C}$ orienté : $C = \\int_{\\mathcal{C}} \\vec{A} \\cdot \\d\\vec{l}$` },
        { type: "def", titre: "Flux d'un champ vectoriel", contenu: `À travers une surface $\\mathcal{S}$ orientée : $\\varphi = \\iint_{\\mathcal{S}} \\vec{A} \\cdot \\d\\vec{S}$` },
        { type: "def", titre: "Ligne de champ", contenu: `Ligne $L$ telle qu'en tout point $M$, le vecteur tangent est colinéaire au champ vectoriel $\\vec{A}(M)$.` },
        { type: "def", titre: "Surface de niveau", contenu: `Pour un champ scalaire $f$, ensemble de points $\\mathcal{S}$ tels qu'il existe $k$ vérifiant $f(\\mathcal{S}) \\subset \\{k\\}$.` },
      ]},
      { titre: "Opérateurs fondamentaux", cartes: [
        { type: "def", titre: "Gradient", contenu: `Grandeur vectorielle définie par $\\d f = \\vec{\\grad} f \\cdot \\d\\vec{r}$. En notation $\\nabla$ : $\\vec{\\grad} f = \\vec{\\nabla}f$<br>
$\\vec{A}$ dérive d'un potentiel scalaire $f$ si $\\vec{A} = \\vec{\\grad} f$</div>` },
        { type: "form", titre: "Gradient — coordonnées", contenu: `Cartésien : $\\vec{\\grad} f = \\frac{\\partial f}{\\partial x} \\vec{u}_x + \\frac{\\partial f}{\\partial y} \\vec{u}_y + \\frac{\\partial f}{\\partial z} \\vec{u}_z$<br>
Cylindrique : $\\vec{\\grad} f = \\frac{\\partial f}{\\partial r} \\vec{u}_r + \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta} \\vec{u}_\\theta + \\frac{\\partial f}{\\partial z} \\vec{u}_z$<br>
Sphérique : $\\vec{\\grad} f = \\frac{\\partial f}{\\partial r} \\vec{u}_r + \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta} \\vec{u}_\\theta + \\frac{1}{r \\sin\\theta}\\frac{\\partial f}{\\partial \\varphi} \\vec{u}_\\varphi$</div></div>` },
        { type: "def", titre: "Rotationnel", contenu: `Grandeur vectorielle : $\\vec{\\rot} \\vec{A} = \\vec{\\nabla} \\wedge \\vec{A}$<br>
Si $\\vec{\\rot} \\vec{A} = \\vec{0}$ sur un volume convexe, $\\vec{A}$ dérive d'un potentiel scalaire.</div>` },
        { type: "def", titre: "Divergence", contenu: `$\\div \\vec{A} = \\vec{\\nabla} \\cdot \\vec{A} = \\frac{\\partial A_x}{\\partial x} + \\frac{\\partial A_y}{\\partial y} + \\frac{\\partial A_z}{\\partial z}$<br>
Si $\\div \\vec{A} = 0$ sur un volume convexe, $\\vec{A}$ dérive d'un potentiel vectoriel.</div>` },
        { type: "def", titre: "Laplacien scalaire", contenu: `$\\Delta f = \\div(\\vec{\\grad} f) = \\nabla^2f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}$` },
      ]},
      { titre: "Théorèmes fondamentaux", cartes: [
        { type: "th", titre: "Théorème de Stokes", contenu: `Pour une surface orientée $\\mathcal{S}$ et son bord $\\partial\\mathcal{S}$ :
$$\\oint_{\\partial\\mathcal{S}} \\vec{A} \\cdot \\d\\vec{l} = \\iint_{\\mathcal{S}} \\vec{\\rot} \\vec{A} \\cdot \\d\\vec{S}$$` },
        { type: "th", titre: "Théorème d'Ostrogradski", contenu: `Pour un volume $\\mathcal{V}$ et sa surface fermée $\\partial\\mathcal{V}$ :
$$\\iint_{\\partial\\mathcal{V}} \\vec{A} \\cdot \\d\\vec{S} = \\iiint_{\\mathcal{V}} \\div \\vec{A} \\, \\d\\tau$$` },
        { type: "prop", titre: "Propriétés remarquables", contenu: `$\\vec{\\rot}(\\vec{\\grad} f) = \\vec{0}$ &nbsp;·&nbsp; $\\div(\\vec{\\rot} \\vec{A}) = 0$` },
        { type: "form", titre: "Formules d'analyse vectorielle", contenu: `Gradient : $\\iiint_{\\mathcal{V}} \\vec{\\grad} f \\, \\d\\tau = \\iint_{\\partial\\mathcal{V}} f \\d\\vec{S}$<br>
Kelvin : $\\oint_{\\partial\\mathcal{S}} f \\d\\vec{l} = \\iint_{\\mathcal{S}} \\d\\vec{S} \\wedge \\vec{\\grad} f$<br>
Rotationnel : $\\iiint_{\\mathcal{V}} \\vec{\\rot} \\vec{A} \\, \\d\\tau = \\iint_{\\partial\\mathcal{V}} \\d\\vec{S} \\wedge \\vec{A}$</div></div>` },
      ]},
    ]
  },
  {
    id: "ph-ondes", matiere: "ph", titre: "Ondes", ordre: 2,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Généralités", cartes: [
        { type: "def", titre: "Équation de d'Alembert (1D)", contenu: `$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$
Solution générale : $u(x,t) = g(x-ct) + h(x+ct)$ (onde se propageant dans les deux sens à vitesse $c$)` },
        { type: "def", titre: "Onde progressive harmonique", contenu: `$u(x,t) = u_0\\cos(\\omega t - kx + \\varphi)$ avec $k = \\frac{\\omega}{c}$<br>
Période : $T = \\frac{2\\pi}{\\omega}$ &nbsp;·&nbsp; Longueur d'onde : $\\lambda = cT = \\frac{2\\pi c}{\\omega}$</div>` },
        { type: "def", titre: "Onde stationnaire", contenu: `$u(x,t) = u_0\\cos(kx+\\varphi)\\cos(\\omega t+\\psi)$<br>Nœuds et ventres à positions fixes.</div>` },
        { type: "def", titre: "OPPH* et relation de dispersion", contenu: `Onde $\\underline{u} = A\\e^{\\i(\\omega t - kx)}$ avec $k \\in \\mathbb{C}$. En écrivant $k = k' + \\i k''$ :<br>
Si $k'' < 0$ : milieu absorbant, amortissement spatial $\\delta = \\frac{1}{|k''|}$<br>
Vitesse de phase : $v_\\varphi = \\frac{\\omega}{k'}$ &nbsp;·&nbsp; Vitesse de groupe : $v_g = \\left(\\frac{\\d k}{\\d\\omega}\\right)^{-1}$</div></div>` },
        { type: "def", titre: "Paquet d'ondes", contenu: `La vitesse de phase est $v_\\varphi = \\frac{\\omega_0}{k_0}$ et la vitesse de groupe est $v_g = \\left.\\left(\\frac{\\d k}{\\d\\omega}\\right)^{-1}\\right|_{\\omega_0}$.` },
      ]},
      { titre: "Ondes EM dans le vide", cartes: [
        { type: "th", titre: "Équation de propagation", contenu: `$$\\Delta \\vec{E} - \\varepsilon_0\\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0} \\quad (\\text{idem pour } \\vec{B})$$
Vitesse : $c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\approx 3\\times 10^8 \\text{ m/s}$` },
        { type: "prop", titre: "Relations de structure des OemPPH", contenu: `$\\vec{u} \\cdot \\vec{E} = 0$ (onde transverse) &nbsp;·&nbsp; $\\vec{B} = \\frac{\\vec{u}}{c} \\wedge \\vec{E}$<br>
Onde TEM : $\\vec{E}$ et $\\vec{B}$ $\\perp$ à la direction de propagation.</div>` },
        { type: "def", titre: "Polarisation", contenu: `Polarisation rectiligne : $\\varphi_1-\\varphi_2 \\in \\{0,\\pi\\}$. Polarisation elliptique (gauche ou droite) sinon.` },
      ]},
      { titre: "Propagation dans d'autres milieux", cartes: [
        { type: "form", titre: "Lois de Snell-Descartes (dioptre plan)", contenu: `Réflexion : $i = r$ &nbsp;·&nbsp; Réfraction : $n_1 \\sin i = n_2 \\sin t$` },
        { type: "def", titre: "Indice complexe", contenu: `$\\underline{n} = \\frac{c}{\\omega}\\underline{k} = n' + \\i n''$. Vitesse de phase : $v_\\varphi = \\frac{c}{n'}$. Milieu transparent : $n'' = 0$.<br>Loi de Beer-Lambert : $A(x) = -2k''x$</div>` },
        { type: "prop", titre: "Propagation dans un plasma", contenu: `Relation de dispersion :
$$k^2 = \\frac{\\omega^2-\\omega_p^2}{c^2} \\quad \\text{avec} \\quad \\omega_p = \\sqrt{\\frac{n_e e^2}{\\varepsilon_0 m_e}}$$
$\\omega > \\omega_p$ : propagation sans amortissement. $\\omega < \\omega_p$ : onde évanescente.</div></div>` },
        { type: "prop", titre: "Effet de peau (métal)", contenu: `Épaisseur de peau : $\\delta = \\sqrt{\\frac{2}{\\gamma\\mu_0\\omega}}$. Le champ est confiné sur une épaisseur $\\delta$ en surface.` },
        { type: "prop", titre: "Guide d'ondes — pulsation de coupure", contenu: `Entre deux plans conducteurs espacés de $a$, seules les modes tels que $\\omega > \\omega_n = \\frac{n\\pi c}{a}$ ($n \\in \\mathbb{N}^*$) se propagent.` },
      ]},
    ]
  },
  {
    id: "ph-meca", matiere: "ph", titre: "Mécanique du point matériel", ordre: 3,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Cinématique", cartes: [
        { type: "def", titre: "Vitesse et accélération", contenu: `Vitesse : $\\vec{v} = \\frac{\\d\\vec{OM}}{\\d t}$ &nbsp;·&nbsp; Accélération : $\\vec{a} = \\frac{\\d\\vec{v}}{\\d t} = \\frac{\\d^2\\vec{OM}}{\\d t^2}$` },
        { type: "form", titre: "Expressions en coordonnées", contenu: `Cartésien : $\\vec{v} = \\dot{x}\\vec{u}_x + \\dot{y}\\vec{u}_y + \\dot{z}\\vec{u}_z$<br>
Cylindrique : $\\vec{v} = \\dot{r}\\vec{u}_r + r\\dot{\\theta}\\vec{u}_\\theta$ &nbsp;·&nbsp; $\\vec{a} = (\\ddot{r}-r\\dot{\\theta}^2)\\vec{u}_r + (2\\dot{r}\\dot{\\theta}+r\\ddot{\\theta})\\vec{u}_\\theta$</div>` },
      ]},
      { titre: "Éléments cinétiques", cartes: [
        { type: "def", titre: "Quantité de mouvement", contenu: `$\\vec{p} = m\\vec{v}$` },
        { type: "def", titre: "Énergie cinétique", contenu: `$E_C = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$` },
        { type: "def", titre: "Moment cinétique en O", contenu: `$\\vec{L}_O = \\vec{OM} \\wedge \\vec{p} = m\\,\\vec{OM} \\wedge \\vec{v}$` },
        { type: "def", titre: "Puissance et travail d'une force", contenu: `Puissance : $\\mathcal{P} = \\vec{F} \\cdot \\vec{v}$ &nbsp;·&nbsp; Travail élémentaire : $\\delta W = \\vec{F} \\cdot \\d\\vec{OM}$<br>
Travail $A \\to B$ : $W_{A \\to B} = \\int_A^B \\vec{F} \\cdot \\d\\vec{l}$</div>` },
      ]},
      { titre: "Lois de Newton", cartes: [
        { type: "th", titre: "Principe fondamental de la dynamique (PFD)", contenu: `Dans un référentiel galiléen :
$$\\frac{\\d\\vec{p}}{\\d t} = \\vec{F} \\iff m\\vec{a} = \\vec{F} \\quad (\\text{masse constante})$$` },
        { type: "th", titre: "Principe des actions réciproques", contenu: `$\\vec{F}_{A \\to B} + \\vec{F}_{B \\to A} = \\vec{0}$` },
        { type: "prop", titre: "Conservation de la quantité de mouvement", contenu: `Pour un système isolé de particules (actions intérieures uniquement) : $\\sum \\vec{p}_k = \\text{cte}$` },
      ]},
      { titre: "Théorèmes énergétiques", cartes: [
        { type: "th", titre: "TEC — Théorème de l'énergie cinétique", contenu: `$\\frac{\\d E_C}{\\d t} = \\mathcal{P}_{\\vec{F}}$ &nbsp;·&nbsp; Forme intégrale : $\\Delta E_C = W_{\\vec{F}, A \\to B}$` },
        { type: "th", titre: "TMC — Théorème du moment cinétique", contenu: `$\\frac{\\d\\vec{L}_O}{\\d t} = \\vec{\\mathcal{M}}_{O,\\vec{F}}$ où $\\vec{\\mathcal{M}}_{O,\\vec{F}} = \\vec{OM} \\wedge \\vec{F}$` },
        { type: "def", titre: "Force conservative et énergie potentielle", contenu: `$\\vec{F}$ conservative si $\\delta W = -\\d E_P$, i.e. $\\vec{\\rot} \\vec{F} = \\vec{0}$. Alors : $\\vec{F} = -\\vec{\\grad} E_P$<br>
Travail : $W_{A \\to B} = -\\Delta E_P = E_P(A)-E_P(B)$</div>` },
        { type: "th", titre: "Théorème de l'énergie mécanique", contenu: `$E_M = E_C + E_P$. Avec forces non conservatives de puissance $\\mathcal{P}_{nc}$ :
$$\\frac{\\d E_M}{\\d t} = \\mathcal{P}_{nc} \\iff \\Delta E_M = W_{\\vec{F}_{nc}, A \\to B}$$
Si toutes les forces sont conservatives : $E_M = \\text{cte}$.` },
      ]},
      { titre: "Changement de référentiel", cartes: [
        { type: "form", titre: "Formule de Varignon", contenu: `Pour $\\vec{\\Omega}$ vecteur rotation de $\\mathcal{R}'$ par rapport à $\\mathcal{R}$ :
$$\\left(\\frac{\\d\\vec{A}}{\\d t}\\right)_{\\mathcal{R}} = \\left(\\frac{\\d\\vec{A}}{\\d t}\\right)_{\\mathcal{R}'} + \\vec{\\Omega} \\wedge \\vec{A}$$` },
        { type: "prop", titre: "Relation fondamentale de cinématique du solide", contenu: `$\\vec{v}_B - \\vec{v}_A = \\vec{\\Omega} \\wedge \\vec{AB}$` },
        { type: "form", titre: "Composition des vitesses", contenu: `$\\vec{v}_{abs} = \\vec{v}_{rel} + \\vec{v}_{entr}$ &nbsp;·&nbsp; $\\vec{v}_{entr} = \\vec{v}_{\\mathcal{R}}(O') + \\vec{\\Omega} \\wedge \\vec{O'M}$` },
        { type: "form", titre: "Composition des accélérations", contenu: `$\\vec{a}_{abs} = \\vec{a}_{rel} + \\vec{a}_{entr} + \\vec{a}_{Cor}$<br>
Coriolis : $\\vec{a}_{Cor} = 2\\vec{\\Omega} \\wedge \\vec{v}_{rel}$</div>` },
        { type: "th", titre: "PFD dans un référentiel non galiléen", contenu: `$$m\\vec{a}_{rel} = \\vec{F}_{ext} - m\\vec{a}_{entr} - 2m\\vec{\\Omega} \\wedge \\vec{v}_{rel}$$
Les termes $-m\\vec{a}_{entr}$ et $-m\\vec{a}_{Cor}$ sont des forces d'inertie fictives.` },
        { type: "th", titre: "TMC dans un référentiel non galiléen", contenu: `$\\frac{\\d\\vec{L}_O}{\\d t} = \\vec{\\mathcal{M}}_{O,\\vec{F}_{ext}} + \\vec{\\mathcal{M}}_{O,\\vec{F}_{ie}} + \\vec{\\mathcal{M}}_{O,\\vec{F}_{ic}}$` },
        { type: "prop", titre: "Influence de la rotation terrestre sur le poids", contenu: `$\\vec{g} = \\vec{g}_0 + \\Omega^2\\,\\vec{HM}$ où $H$ est le projeté de $M$ sur l'axe terrestre et $\\Omega$ la vitesse de rotation de la Terre.` },
      ]},
    ]
  },
  {
    id: "ph-sys", matiere: "ph", titre: "Mécanique des systèmes & Solides", ordre: 4,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Éléments cinétiques des systèmes", cartes: [
        { type: "def", titre: "Centre d'inertie G", contenu: `$\\vec{OG} = \\frac{1}{M}\\iiint_{\\mathcal{S}} \\vec{OP} \\, \\d m(P)$<br>Propriété : $G$ appartient à tout plan de symétrie de $\\mathcal{S}$.</div>` },
        { type: "form", titre: "Grandeurs cinétiques", contenu: `Quantité de mouvement : $\\vec{p} = \\iiint_{\\mathcal{S}} \\vec{v}_P \\, \\d m = M\\vec{v}_G$<br>
Moment cinétique en O : $\\vec{L}_O = \\iiint_{\\mathcal{S}} \\vec{OP} \\wedge \\vec{v}_P \\, \\d m$<br>
Énergie cinétique : $E_C = \\iiint_{\\mathcal{S}} \\frac{1}{2}v_P^2 \\, \\d m$</div></div>` },
        { type: "prop", titre: "Changement de point — moment cinétique", contenu: `$\\vec{L}_A = \\vec{L}_B + \\vec{AB} \\wedge \\vec{p}$` },
      ]},
      { titre: "Référentiel barycentrique & Théorèmes de Kœnig", cartes: [
        { type: "def", titre: "Référentiel barycentrique R*", contenu: `Référentiel d'origine $G$, translation de $\\mathcal{R}$. Quantité de mouvement barycentrique : $\\vec{p}^* = \\vec{0}$.` },
        { type: "th", titre: "Kœnig — moment cinétique", contenu: `$$\\vec{L}_A = \\vec{L}^* + \\vec{AG} \\wedge \\vec{p}$$
$\\vec{L}^*$ (moment cinétique barycentrique) ne dépend pas du point d'expression.` },
        { type: "th", titre: "Kœnig — énergie cinétique", contenu: `$$E_C = E_C^* + \\frac{1}{2}Mv_G^2$$` },
      ]},
      { titre: "Théorèmes généraux des systèmes", cartes: [
        { type: "prop", titre: "Actions intérieures", contenu: `D'après la loi des actions réciproques : la résultante et le moment des actions intérieures à un système sont nuls.` },
        { type: "th", titre: "Théorème de la quantité de mouvement", contenu: `$$\\frac{\\d\\vec{p}}{\\d t} = \\vec{R}_{ext} \\iff M\\frac{\\d\\vec{v}_G}{\\d t} = \\vec{R}_{ext}$$` },
        { type: "th", titre: "TMC en un point fixe A", contenu: `$\\frac{\\d\\vec{L}_A}{\\d t} = \\vec{\\mathcal{M}}_{A,ext}$` },
        { type: "th", titre: "TMC au centre d'inertie G", contenu: `$\\frac{\\d\\vec{L}_G}{\\d t} = \\vec{\\mathcal{M}}_{G,ext}$ (valable même si $G$ est en mouvement)` },
        { type: "th", titre: "TEC des systèmes", contenu: `$\\frac{\\d E_C}{\\d t} = \\mathcal{P}_{ext} + \\mathcal{P}_{int}$ (La puissance des actions intérieures n'est pas nulle en général)` },
        { type: "th", titre: "TEC barycentrique", contenu: `$\\frac{\\d E_C^*}{\\d t} = \\mathcal{P}_{ext}^* + \\mathcal{P}_{int}^*$` },
        { type: "th", titre: "Énergie mécanique des systèmes", contenu: `$\\frac{\\d E_M}{\\d t} = \\mathcal{P}_{nc}$ (puissance des forces non conservatives)` },
      ]},
      { titre: "Cinématique des solides indéformables", cartes: [
        { type: "def", titre: "Solide indéformable", contenu: `Système matériel où la distance entre deux points quelconques est constante : $AB = \\text{cte}$ pour tout couple $(A,B)$.` },
        { type: "def", titre: "Degrés de liberté", contenu: `Un solide libre possède 6 degrés de liberté : 3 en translation, 3 en rotation.` },
        { type: "form", titre: "Relation fondamentale — torseur cinématique", contenu: `Pour deux points $A, B$ d'un même solide :
$$\\vec{v}_B = \\vec{v}_A + \\vec{\\Omega} \\wedge \\vec{AB}$$
Le torseur cinématique $\\{\\vec{\\Omega}, \\vec{v}_A\\}_A$ caractérise entièrement le mouvement.<br>
Composition : $\\vec{\\Omega}_{2/0} = \\vec{\\Omega}_{2/1} + \\vec{\\Omega}_{1/0}$</div>` },
        { type: "def", titre: "Roulement sans glissement", contenu: `En $I$ point de contact de $S_1$ et $S_2$ : $\\vec{v}_{I,1/2} = \\vec{0}$ et vecteur pivotement $\\vec{\\Omega}_p = \\vec{0}$` },
      ]},
      { titre: "Dynamique des solides", cartes: [
        { type: "def", titre: "Moment d'inertie", contenu: `Par rapport à un axe $\\Delta$ :
$$J(S/\\Delta) = \\iiint_S d(P,\\Delta)^2 \\, \\d m(P)$$` },
        { type: "form", titre: "Rotation autour d'un axe fixe Δ", contenu: `Moment cinétique : $L_\\Delta = J(S/\\Delta) \\Omega$<br>
Énergie cinétique : $E_C = \\frac{1}{2}J(S/\\Delta) \\Omega^2$<br>
TMC projeté : $J(S/\\Delta)\\frac{\\d\\Omega}{\\d t} = \\mathcal{M}_{\\Delta,ext}$</div></div>` },
        { type: "th", titre: "TEC pour un solide", contenu: `$\\frac{\\d E_C}{\\d t} = \\mathcal{P}_{ext}$ (la puissance des actions intérieures à un solide est nulle)` },
        { type: "form", titre: "Puissance d'une action sur un solide", contenu: `$\\mathcal{P} = \\vec{v}_A \\cdot \\vec{R} + \\vec{\\Omega} \\cdot \\vec{\\mathcal{M}}_A$<br>
Puissance des contacts : $\\mathcal{P}_c = \\vec{R}_T \\cdot \\vec{v}_{I,2/1} \\le 0$ (perte par frottement)</div>` },
      ]},
      { titre: "Lois de Coulomb (contact)", cartes: [
        { type: "prop", titre: "Non-glissement", contenu: `Si $\\vec{v}_{I,1/2} = \\vec{0}$ : $\\|\\vec{R}_T\\| \\le f_s\\|\\vec{R}_N\\|$` },
        { type: "prop", titre: "Glissement", contenu: `$\\vec{R}_T = -f_d\\|\\vec{R}_N\\|\\vec{u}_g$ (opposé à la direction de glissement)` },
        { type: "def", titre: "Liaison parfaite", contenu: `Liaison parfaite si la puissance des actions de contact est nulle.` },
      ]},
    ]
  },
  {
    id: "ph-osc", matiere: "ph", titre: "Oscillateurs", ordre: 5,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Oscillateur harmonique", cartes: [
        { type: "def", titre: "Oscillateur harmonique", contenu: `Variable $u$ vérifiant :
$$\\frac{\\d^2u}{\\d t^2} + \\omega_0^2 u = 0$$
$\\omega_0$ : pulsation propre` },
        { type: "prop", titre: "Isochronisme — portrait de phase", contenu: `Période : $T_0 = \\frac{2\\pi}{\\omega_0}$ (indépendante de l'amplitude)<br>
Portrait de phase elliptique : $\\frac{u^2}{U^2} + \\frac{\\dot{u}^2}{(U\\omega_0)^2} = 1$<br>
Énergie mécanique conservée.</div></div>` },
      ]},
      { titre: "Oscillateur amorti (frottement fluide)", cartes: [
        { type: "def", titre: "Équation de l'oscillateur amorti", contenu: `$$\\frac{\\d^2u}{\\d t^2} + \\frac{\\omega_0}{Q} \\frac{\\d u}{\\d t} + \\omega_0^2 u = 0$$
Équation caractéristique : $r^2 + \\frac{\\omega_0}{Q}r + \\omega_0^2 = 0$ &nbsp;·&nbsp; $\\Delta = \\omega_0^2\\left(\\frac{1}{4Q^2}-1\\right)$` },
        { type: "prop", titre: "Régimes selon Δ", contenu: `$\\Delta > 0$ ($Q < \\frac{1}{2}$) : régime apériodique, pas d'oscillation.<br>
$\\Delta = 0$ ($Q = \\frac{1}{2}$) : régime apériodique critique.<br>
$\\Delta < 0$ ($Q > \\frac{1}{2}$) : régime oscillatoire amorti, pseudo-période $T = \\frac{2\\pi}{\\omega_0\\sqrt{1-\\frac{1}{4Q^2}}}$</div></div>` },
        { type: "form", titre: "Décrément logarithmique", contenu: `$\\delta = \\frac{1}{n}\\ln\\left[\\frac{u(t)}{u(t+nT)}\\right] = \\frac{\\pi}{Q\\sqrt{1-\\frac{1}{4Q^2}}}$<br>
Pour $Q$ grand : $\\delta \\approx \\frac{\\pi}{Q}$<br>
Portrait de phase : spirale convergente vers l'origine.</div></div>` },
      ]},
    ]
  },
  {
    id: "ph-newton", matiere: "ph", titre: "Forces centrales & Interaction newtonienne", ordre: 6,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Système à deux corps", cartes: [
        { type: "def", titre: "Masse réduite", contenu: `$\\mu = \\frac{m_1 m_2}{m_1+m_2}$ &nbsp;·&nbsp; Mobile fictif : $\\vec{r} = \\vec{M_1 M_2}$<br>
Dans $\\mathcal{R}^*$ : $\\vec{L}^*_S = \\vec{r} \\wedge \\mu\\vec{v}$ &nbsp;·&nbsp; $E^*_C = \\frac{1}{2}\\mu v^2$</div>` },
      ]},
      { titre: "Force centrale", cartes: [
        { type: "def", titre: "Force centrale", contenu: `Force de la forme $\\vec{f} = f(r)\\vec{u}_r$ (dirigée vers un centre fixe $O$).` },
        { type: "prop", titre: "Constante des aires (2e loi de Kepler)", contenu: `$\\frac{\\d\\vec{L}_O}{\\d t} = \\vec{0} \\implies \\vec{C} = \\vec{r} \\wedge \\vec{v} = r^2\\dot{\\theta}\\vec{k} = \\text{cste}$<br>
Mouvement plan. Vitesse aréolaire : $\\frac{\\d\\mathcal{A}}{\\d t} = \\frac{C}{2} = \\text{cste}$</div>` },
        { type: "form", titre: "Formules de Binet", contenu: `Vitesse : $v^2 = C^2\\left[\\left(\\frac{\\d u}{\\d\\theta}\\right)^2 + u^2\\right]$ ($u = \\frac{1}{r}$)<br>
Accélération : $\\vec{a} = -C^2 u^2 \\left(\\frac{\\d^2 u}{\\d\\theta^2} + u\\right)\\vec{u}_r$</div>` },
        { type: "form", titre: "Énergie potentielle effective", contenu: `$E_M = \\frac{1}{2}\\mu\\dot{r}^2 + E_{P,\\text{eff}}(r)$ avec $E_{P,\\text{eff}} = \\frac{\\mu C^2}{2r^2} + E_P(r)$` },
      ]},
      { titre: "Interaction newtonienne", cartes: [
        { type: "def", titre: "Force newtonienne", contenu: `$\\vec{f} = \\varepsilon\\frac{k}{r^2}\\vec{u}_r$ avec $\\varepsilon \\in \\{-1,+1\\}$, $k > 0$<br>
Énergie potentielle : $E_P(r) = \\varepsilon\\frac{k}{r}$</div>` },
        { type: "form", titre: "Équation de la trajectoire (conique)", contenu: `$$r = \\frac{p}{-\\varepsilon + e\\cos(\\theta-\\theta_0)}$$
$p = \\frac{\\mu C^2}{k}$ &nbsp;·&nbsp; $e > 1$ : hyperbole &nbsp;·&nbsp; $e = 1$ : parabole &nbsp;·&nbsp; $0 \\lt e \\lt 1$ : ellipse &nbsp;·&nbsp; $e = 0$ : cercle` },
        { type: "form", titre: "3e loi de Kepler (ellipse)", contenu: `$\\frac{a^3}{T^2} = \\frac{k}{4\\pi^2\\mu}$ où $a$ est le demi grand-axe.<br>
Énergie : $E_M = -\\frac{k}{2a}$ pour l'ellipse, $E_M = \\frac{k}{2p}(e^2-1)$ en général.</div>` },
      ]},
    ]
  },
  {
    id: "ph-elec", matiere: "ph", titre: "Électrostatique", ordre: 7,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Champ et potentiel", cartes: [
        { type: "form", titre: "Champ et potentiel d'une charge ponctuelle", contenu: `$\\vec{E}(\\vec{r}) = \\frac{q}{4\\pi\\varepsilon_0 r^2}\\vec{u}_r$ &nbsp;·&nbsp; $V(\\vec{r}) = \\frac{q}{4\\pi\\varepsilon_0 r}$<br>
Relation : $\\vec{E} = -\\vec{\\grad} V$<br>
Distribution continue : $V(M) = \\iiint \\frac{\\rho(P)\\d\\tau}{4\\pi\\varepsilon_0 PM}$ &nbsp;·&nbsp; $\\vec{E}(M) = \\iiint \\frac{\\rho(P)\\d\\tau}{4\\pi\\varepsilon_0 PM^2}\\vec{u}_{PM}$</div></div>` },
        { type: "prop", titre: "Superposition et invariance", contenu: `Le champ électrostatique possède toutes les propriétés d'invariance de la distribution de charges.<br>
Le champ et le potentiel satisfont le principe de superposition.</div>` },
        { type: "form", titre: "Équation de Poisson", contenu: `$\\Delta V = -\\frac{\\rho}{\\varepsilon_0}$` },
      ]},
      { titre: "Propriétés du champ", cartes: [
        { type: "prop", titre: "Circulation conservative", contenu: `$\\int_A^B \\vec{E}\\cdot\\d\\vec{l} = V(A)-V(B)$ &nbsp;·&nbsp; Sur un contour fermé : $\\oint \\vec{E}\\cdot\\d\\vec{l} = 0$` },
        { type: "prop", titre: "Symétries du champ électrostatique", contenu: `Plan de symétrie de $\\mathcal{D}$ $\\to$ $\\vec{E}$ est dans ce plan.<br>
Plan d'antisymétrie de $\\mathcal{D}$ $\\to$ $\\vec{E}$ est perpendiculaire à ce plan.</div>` },
        { type: "th", titre: "Théorème de Gauss", contenu: `Pour une surface fermée $\\mathcal{S}$ orientée vers l'extérieur, $Q_{int}$ la charge intérieure :
$$\\oiint_{\\mathcal{S}} \\vec{E}\\cdot\\d\\vec{S} = \\frac{Q_{int}}{\\varepsilon_0}$$
Forme locale : $\\div \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$` },
      ]},
      { titre: "Dipôle électrostatique", cartes: [
        { type: "def", titre: "Moment dipolaire", contenu: `$\\vec{p} = q\\,\\vec{NP}$ (de la charge $-$ vers la charge $+$)` },
        { type: "form", titre: "Potentiel et champ du dipôle (grande distance)", contenu: `Potentiel : $V(\\vec{r}) = \\frac{\\vec{p}\\cdot\\vec{u}_r}{4\\pi\\varepsilon_0 r^2}$<br>
Champ : $\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0 r^3}[2p\\cos\\theta\\,\\vec{u}_r + p\\sin\\theta\\,\\vec{u}_\\theta]$<br>
Lignes de champ : $r = \\lambda\\sin^2\\theta$ &nbsp;·&nbsp; Équipotentielles : $r^2 = \\lambda\\cos\\theta$</div></div>` },
        { type: "form", titre: "Dipôle dans un champ extérieur uniforme", contenu: `Force : $\\vec{F} = \\vec{0}$ &nbsp;·&nbsp; Moment : $\\vec{\\mathcal{M}} = \\vec{p} \\wedge \\vec{E}$ &nbsp;·&nbsp; Énergie : $E_P = -\\vec{p}\\cdot\\vec{E}$` },
        { type: "form", titre: "Énergie électrostatique", contenu: `Charge dans un champ : $E_P = qV(\\vec{r})$<br>
Deux charges : $E = \\frac{q_1 q_2}{4\\pi\\varepsilon_0 d}$ &nbsp;·&nbsp; Densité volumique : $u_e = \\frac{\\varepsilon_0 E^2}{2}$</div>` },
      ]},
      { titre: "Milieux conducteurs", cartes: [
        { type: "prop", titre: "Conducteur en équilibre", contenu: `$\\vec{E} = \\vec{0}$ à l'intérieur. Les charges se répartissent en surface. $V = \\text{cste}$ dans tout le conducteur.<br>
$\\vec{E}$ normal à la surface : $\\vec{E} = \\frac{\\sigma}{\\varepsilon_0}\\vec{n}$</div>` },
        { type: "form", titre: "Loi d'Ohm locale & conservation de la charge", contenu: `Loi d'Ohm : $\\vec{j} = \\gamma\\vec{E}$ ($\\gamma$ : conductivité)<br>
Conservation : $\\div \\vec{j} + \\frac{\\partial\\rho}{\\partial t} = 0$ &nbsp;·&nbsp; Régime stationnaire : $\\div \\vec{j} = 0$</div>` },
      ]},
    ]
  },
  {
    id: "ph-mag", matiere: "ph", titre: "Magnétostatique", ordre: 8,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Champ magnétostatique", cartes: [
        { type: "form", titre: "Loi de Biot et Savart", contenu: `Distribution volumique :
$$\\vec{B}(M) = \\frac{\\mu_0}{4\\pi} \\iiint \\frac{\\vec{j}(P) \\wedge \\vec{u}_{PM}}{PM^2} \\d\\tau$$
Pour un fil : $\\d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\d\\vec{l} \\wedge \\vec{u}_r}{r^2}$` },
        { type: "prop", titre: "Invariance et symétries de $\\vec{B}$", contenu: `$\\vec{B}$ possède toutes les propriétés d'invariance de la distribution de courants.<br>
Plan de symétrie de $\\mathcal{D}$ $\\to$ $\\vec{B}$ $\\perp$ à ce plan.<br>
Plan d'antisymétrie $\\to$ $\\vec{B}$ colinéaire à ce plan.</div></div>` },
        { type: "th", titre: "Théorème d'Ampère", contenu: `$$\\oint_{\\mathcal{C}} \\vec{B}\\cdot\\d\\vec{l} = \\mu_0\\,I_{\\text{enlacé}}$$
Forme locale : $\\vec{\\rot} \\vec{B} = \\mu_0\\vec{j}$` },
        { type: "prop", titre: "Conservation du flux magnétique", contenu: `$\\oiint_{\\mathcal{S}} \\vec{B}\\cdot\\d\\vec{S} = 0$ (flux conservatif) &nbsp;·&nbsp; Forme locale : $\\div \\vec{B} = 0$<br>
$\\implies$ Il existe un potentiel vecteur $\\vec{A}$ tel que $\\vec{B} = \\vec{\\rot} \\vec{A}$</div>` },
        { type: "prop", titre: "Superposition", contenu: `Pour avoir le champ créé par la somme de deux distributions, on somme les champs de chaque distribution.` },
      ]},
      { titre: "Mouvement d'une particule chargée", cartes: [
        { type: "form", titre: "Force de Lorentz", contenu: `$$\\vec{F}_L = q(\\vec{E} + \\vec{v} \\wedge \\vec{B})$$
Puissance : $\\mathcal{P}_L = q\\vec{v}\\cdot\\vec{E}$ (la partie magnétique ne travaille pas)` },
        { type: "def", titre: "Gyropulsation", contenu: `$\\vec{\\omega} = \\frac{q}{m}\\vec{B}$` },
        { type: "prop", titre: "Nature de la trajectoire dans $\\vec{B}$ uniforme", contenu: `$\\vec{v}_0 \\parallel \\vec{B}$ : rectiligne uniforme. $\\vec{v}_0 \\perp \\vec{B}$ : circulaire, rayon $R = \\frac{mv_0}{|q|B}$. Cas général : hélicoïdale.` },
        { type: "prop", titre: "Conservation de l'énergie mécanique", contenu: `$E_M = \\frac{1}{2}mv^2 + qV = \\text{cste}$ (le champ $\\vec{B}$ ne modifie pas l'énergie)` },
      ]},
      { titre: "Dipôle magnétique", cartes: [
        { type: "def", titre: "Moment magnétique", contenu: `$\\vec{M} = i\\vec{S}$ ($\\vec{S}$ : vecteur surface du circuit orienté)` },
        { type: "form", titre: "Champ créé par un dipôle magnétique", contenu: `Potentiel vecteur : $\\vec{A} = \\frac{\\mu_0}{4\\pi r^2}(\\vec{M} \\wedge \\vec{u}_r)$<br>
Champ : $\\vec{B} = \\frac{\\mu_0}{4\\pi r^3}[2M\\cos\\theta\\,\\vec{u}_r + M\\sin\\theta\\,\\vec{u}_\\theta]$</div>` },
        { type: "form", titre: "Dipôle magnétique dans un champ uniforme", contenu: `Force : $\\vec{F} = \\vec{0}$ &nbsp;·&nbsp; Moment : $\\vec{\\mathcal{M}} = \\vec{M} \\wedge \\vec{B}$ &nbsp;·&nbsp; Énergie : $E_P = -\\vec{M}\\cdot\\vec{B}$` },
      ]},
    ]
  },
  {
    id: "ph-max", matiere: "ph", titre: "Équations de Maxwell", ordre: 9,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Postulats — Équations locales", cartes: [
        { type: "th", titre: "Équations de Maxwell (formes locales)", contenu: `$$
\\begin{aligned}
&\\text{Maxwell-Gauss} : & \\div \\vec{E} &= \\frac{\\rho}{\\varepsilon_0} \\\\
&\\text{Maxwell-Thomson} : & \\div \\vec{B} &= 0 \\\\
&\\text{Maxwell-Faraday} : & \\vec{\\rot} \\vec{E} &= -\\frac{\\partial\\vec{B}}{\\partial t} \\\\
&\\text{Maxwell-Ampère} : & \\vec{\\rot} \\vec{B} &= \\mu_0\\vec{j} + \\varepsilon_0\\mu_0 \\frac{\\partial\\vec{E}}{\\partial t}
\\end{aligned}
$$` },
        { type: "form", titre: "Conservation de la charge (locale)", contenu: `$\\div \\vec{j} + \\frac{\\partial\\rho}{\\partial t} = 0$` },
        { type: "def", titre: "Potentiels et jauges", contenu: `On pose $\\vec{B} = \\vec{\\rot} \\vec{A}$ et $\\vec{E} = -\\vec{\\grad} V - \\frac{\\partial\\vec{A}}{\\partial t}$<br>
Jauge de Coulomb (régime permanent) : $\\div \\vec{A} = 0$</div>` },
      ]},
      { titre: "Énergie électromagnétique", cartes: [
        { type: "form", titre: "Densité d'énergie EM", contenu: `$u_{em} = \\frac{B^2}{2\\mu_0} + \\frac{\\varepsilon_0 E^2}{2}$` },
        { type: "def", titre: "Vecteur de Poynting", contenu: `$\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$ (courant d'énergie électromagnétique)` },
        { type: "th", titre: "Équation locale de Poynting (bilan énergétique)", contenu: `$$\\div \\vec{\\Pi} + \\frac{\\partial u_{em}}{\\partial t} = -\\vec{j}\\cdot\\vec{E}$$
$\\vec{j}\\cdot\\vec{E}$ : puissance volumique cédée aux porteurs de charge.` },
      ]},
      { titre: "Relations de passage", cartes: [
        { type: "prop", titre: "Conditions aux interfaces", contenu: `Champ $\\vec{E}$ : $\\vec{E}_2 - \\vec{E}_1 = \\frac{\\sigma}{\\varepsilon_0}\\vec{n}_{1\\to 2}$<br>
Champ $\\vec{B}$ : $\\vec{B}_2 - \\vec{B}_1 = \\mu_0\\vec{j}_s \\wedge \\vec{n}_{1\\to 2}$</div>` },
      ]},
      { titre: "ARQS — Approximation des régimes quasi-permanents", cartes: [
        { type: "prop", titre: "Équations ARQS dans un métal", contenu: `Valables quand les dimensions caractéristiques $\\ll \\lambda$ :
$$\\div \\vec{j} = 0 \\quad \\div \\vec{E} = \\frac{\\rho}{\\varepsilon_0} \\quad \\vec{\\rot} \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t} \\quad \\div \\vec{B} = 0 \\quad \\vec{\\rot} \\vec{B} = \\mu_0\\vec{j}$$` },
      ]},
    ]
  },
  {
    id: "ph-indu", matiere: "ph", titre: "Induction électromagnétique", ordre: 10,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Loi de Faraday", cartes: [
        { type: "th", titre: "Loi de Faraday", contenu: `$$e = -\\frac{\\d\\Phi}{\\d t} \\quad \\text{où} \\quad \\Phi = \\iint_{\\mathcal{S}} \\vec{B}\\cdot\\d\\vec{S}$$
Force électromotrice induite dans tout circuit, circuit mobile ou fixe.` },
        { type: "prop", titre: "Loi de Lenz", contenu: `Les conséquences des phénomènes d'induction s'opposent aux phénomènes qui leur ont donné naissance.` },
        { type: "form", titre: "Champ électromoteur (circuit mobile)", contenu: `$\\vec{E}_m = \\vec{v} \\wedge \\vec{B}$ &nbsp;·&nbsp; FEM : $e_{A\\to B} = \\int_{A\\to B}(\\vec{v} \\wedge \\vec{B})\\cdot\\d\\vec{l}$` },
      ]},
      { titre: "Inductances", cartes: [
        { type: "def", titre: "Inductance propre L et mutuelle M", contenu: `Flux propre : $\\varphi_p = Li$<br>
Mutuelle : $\\varphi_{1\\to 2} = Mi_1$ et $\\varphi_{2\\to 1} = Mi_2$ ($M_{12} = M_{21} = M$)</div>` },
        { type: "form", titre: "Énergie magnétique (deux circuits)", contenu: `$$U_m = \\frac{1}{2}L_1 i_1^2 + \\frac{1}{2}L_2 i_2^2 + M i_1 i_2$$` },
      ]},
    ]
  },
  {
    id: "ph-circ", matiere: "ph", titre: "Électricité & Systèmes linéaires", ordre: 11,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Lois de Kirchhoff & Dipôles", cartes: [
        { type: "th", titre: "Lois des nœuds et des mailles", contenu: `Nœuds : $\\sum I_k = 0$ &nbsp;·&nbsp; Mailles : $\\sum U_k = 0$` },
        { type: "form", titre: "Résistance, Bobine, Condensateur", contenu: `R : $u = Ri$ &nbsp;·&nbsp; $\\mathcal{P} = Ri^2$ &nbsp;·&nbsp; L : $u = L\\frac{\\d i}{\\d t}$ &nbsp;·&nbsp; $W = \\frac{1}{2}Li^2$ &nbsp;·&nbsp; C : $i = C\\frac{\\d u}{\\d t}$ &nbsp;·&nbsp; $W = \\frac{1}{2}Cu^2$` },
        { type: "th", titre: "Théorème de Thévenin", contenu: `Tout réseau dipolaire linéaire est équivalent à une source de tension $E$ en série avec une résistance $R$ : $u = Ri - E$` },
        { type: "th", titre: "Théorème de Millman", contenu: `Pour un nœud $N$ relié aux nœuds $A_k$ via $R_k$ :
$$V_N = \\frac{\\sum_k \\frac{V_k}{R_k}}{\\sum_k \\frac{1}{R_k}}$$` },
      ]},
      { titre: "Régime sinusoïdal forcé", cartes: [
        { type: "def", titre: "Représentation complexe", contenu: `Signal : $a(t) = A\\cos(\\omega t+\\varphi)$ $\\leftrightarrow$ $\\underline{a} = A\\e^{\\i\\varphi}$<br>
Dérivation $\\leftrightarrow$ $\\times \\i\\omega$ &nbsp;·&nbsp; Intégration $\\leftrightarrow$ $\\div \\i\\omega$<br>
Valeur efficace : $U_{\\text{eff}} = \\frac{U}{\\sqrt{2}}$</div></div>` },
        { type: "form", titre: "Impédances complexes", contenu: `R : $\\underline{Z} = R$ &nbsp;·&nbsp; L : $\\underline{Z} = \\i L\\omega$ &nbsp;·&nbsp; C : $\\underline{Z} = \\frac{1}{\\i C\\omega}$<br>
Série : $\\underline{Z}_{\\text{eq}} = \\sum \\underline{Z}_k$ &nbsp;·&nbsp; Parallèle : $\\frac{1}{\\underline{Z}_{\\text{eq}}} = \\sum \\frac{1}{\\underline{Z}_k}$</div>` },
        { type: "form", titre: "Puissance moyenne", contenu: `$P_m = U_{\\text{eff}}I_{\\text{eff}}\\cos(\\varphi_u - \\varphi_i) = \\frac{1}{2}\\Re(\\underline{u}\\cdot\\underline{i}^*)$` },
        { type: "th", titre: "Thévenin et Millman complexes", contenu: `Mêmes formules avec impédances complexes $\\underline{Z}$ à la place de résistances $R$.` },
      ]},
      { titre: "Systèmes linéaires invariants", cartes: [
        { type: "def", titre: "Fonction de transfert", contenu: `$\\underline{H}(\\i\\omega) = \\frac{\\underline{s}}{\\underline{e}}$ pour un signal sinusoïdal d'entrée $e$, de sortie $s$.` },
        { type: "def", titre: "Diagramme de Bode", contenu: `Gain : $|\\underline{H}|_{\\text{dB}}(\\omega) = 20\\log|\\underline{H}(\\i\\omega)|$ &nbsp;·&nbsp; Phase : $\\varphi(\\omega)$ — les deux en fonction de $\\log(\\omega)$.` },
        { type: "def", titre: "Diagramme de Nyquist", contenu: `Représentation de l'arc paramétré $\\underline{H}(\\i\\omega)$ dans le plan complexe.` },
        { type: "def", titre: "AOP idéal", contenu: `Temps de réponse $\\tau = 0$, gain $\\mu \\to +\\infty$.<br>
Régime linéaire (bouclé sur entrée $-$) : $\\varepsilon = V_+ - V_- = 0$<br>
Saturation : $V_s = \\pm V_{\\text{sat}}$</div></div>` },
      ]},
    ]
  },
  {
    id: "ph-opt", matiere: "ph", titre: "Optique", ordre: 12,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Optique géométrique", cartes: [
        { type: "def", titre: "Lumière et indice de refraçtion", contenu: `Ondes EM : $400 \\text{ nm} \\lt \\lambda \\lt 800 \\text{ nm}$. Vitesse : $v_\\varphi = \\frac{c}{n}$.` },
        { type: "prop", titre: "Stigmatisme et aplanétisme", contenu: `Stigmatisme rigoureux : tout rayon passant par $A$ passe par $A'$ après le système.<br>Conditions de Gauss : rayons proches de l'axe et peu inclinés.</div>` },
        { type: "form", titre: "Lois de Snell-Descartes", contenu: `Réflexion : $i = r$ &nbsp;·&nbsp; Réfraction : $n_1\\sin i = n_2\\sin t$` },
        { type: "form", titre: "Prisme — formules", contenu: `$\\sin i = n\\sin r$ &nbsp;·&nbsp; $\\sin i' = n\\sin r'$ &nbsp;·&nbsp; $A = r+r'$ &nbsp;·&nbsp; $D = i+i'-A$<br>
Déviation minimale : $$n = \\frac{\\sin\\left(\\frac{A+D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$$</div>` },
        { type: "form", titre: "Miroir sphérique — Descartes (origine S)", contenu: `$\\frac{1}{\\overline{SA'}} + \\frac{1}{\\overline{SA}} = \\frac{2}{\\overline{SC}}$ &nbsp;·&nbsp; $\\gamma = -\\frac{\\overline{SA'}}{\\overline{SA}}$<br>
Newton : $\\overline{FA}\\cdot\\overline{FA'} = \\overline{FS}^2$</div>` },
        { type: "form", titre: "Lentille mince — Descartes (origine O)", contenu: `$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}$ &nbsp;·&nbsp; $\\gamma = \\frac{\\overline{OA'}}{\\overline{OA}}$<br>
Newton : $\\overline{FA}\\cdot\\overline{F'A'} = -\\overline{OF'}^2$</div>` },
        { type: "th", titre: "Théorème de Malus", contenu: `Les rayons lumineux issus d'une même source sont orthogonaux aux surfaces d'onde. Entre deux surfaces d'onde, le chemin optique est indépendant du rayon.` },
      ]},
      { titre: "Interférences", cartes: [
        { type: "def", titre: "Chemin optique", contenu: `$(SM) = \\int_{\\mathcal{C}} n(P)\\d l$ &nbsp;·&nbsp; Temps de parcours : $\\tau = \\frac{(SM)}{c}$` },
        { type: "form", titre: "Éclairement — interférences à deux ondes", contenu: `$$\\mathcal{E} = \\mathcal{E}_1 + \\mathcal{E}_2 + 2\\sqrt{\\mathcal{E}_1\\mathcal{E}_2}\\cos(\\Delta\\varphi)$$
$\\delta$ = différence de marche = $(S_2 M)-(S_1 M)$. $\\Delta\\varphi = \\frac{2\\pi\\delta}{\\lambda_0}$. Ordre : $p = \\frac{\\delta}{\\lambda_0}$<br>
Frange brillante : $\\delta = p\\lambda_0$ &nbsp;·&nbsp; Frange sombre : $\\delta = (p+\\frac{1}{2})\\lambda_0$<br>
Condition de cohérence : ondes issues d'une même source, $|\\delta| \\lt l^*$ (longueur de cohérence).</div></div>` },
      ]},
      { titre: "Diffraction", cartes: [
        { type: "prop", titre: "Principe de Huygens-Fresnel", contenu: `Tout point d'une surface d'onde est une source secondaire de même fréquence. Le champ en un point est la superposition de toutes ces contributions.` },
        { type: "form", titre: "Diffraction de Fraunhofer — fente de largeur a", contenu: `Amplitude : $A(\\theta) \\propto \\operatorname{sinc}\\left(\\frac{\\pi a \\sin\\theta}{\\lambda}\\right)$<br>
Minima (extinctions) : $a \\sin\\theta = p\\lambda$ ($p \\neq 0$)</div>` },
        { type: "th", titre: "Théorème de Babinet", contenu: `La figure de diffraction d'un écran opaque est identique (hors axe) à celle de l'ouverture complémentaire.` },
      ]},
    ]
  },
  {
    id: "ph-thermo", matiere: "ph", titre: "Thermodynamique", ordre: 13,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt"],
    sections: [
      { titre: "Gaz parfait & Théorie cinétique", cartes: [
        { type: "form", titre: "Équation d'état du gaz parfait", contenu: `$PV = nRT = Nk_B T$<br>
Énergie interne : $U = nC_v T$ &nbsp;·&nbsp; Enthalpie : $H = nC_p T$<br>
Relation de Mayer : $C_p - C_v = R$ &nbsp;·&nbsp; $\\gamma = \\frac{C_p}{C_v}$<br>
Monoatomique : $\\gamma = \\frac{5}{3}$ &nbsp;·&nbsp; Diatomique : $\\gamma = \\frac{7}{5}$</div></div>` },
        { type: "form", titre: "Théorie cinétique", contenu: `Pression cinétique : $P = \\frac{1}{3}nm\\langle v^2\\rangle$<br>
Vitesse quadratique moyenne : $v_q = \\sqrt{\\frac{3RT}{M}}$<br>
Énergie cinétique par molécule : $\\frac{1}{2}m\\langle v^2\\rangle = \\frac{3}{2}k_B T$</div></div>` },
      ]},
      { titre: "Premier principe", cartes: [
        { type: "th", titre: "Premier principe de la thermodynamique", contenu: `L'énergie totale est conservative :
$$\\Delta E = W + Q \\iff \\Delta U = W + Q \\quad (\\text{système au repos})$$
Travail mécanique : $\\delta W = -P_{ext} \\d V$ (évolution quasi-statique : $P = P_{ext}$)<br>
Enthalpie : $H = U + PV$ &nbsp;·&nbsp; Évolution isobare : $\\Delta H = Q_P$</div>` },
        { type: "form", titre: "Lois de Joule (gaz parfait)", contenu: `1re : $\\d U = C_V \\d T$ ($U$ ne dépend que de $T$)<br>
2e : $\\d H = C_P \\d T$<br>
$C_V = \\frac{nR}{\\gamma-1}$ &nbsp;·&nbsp; $C_P = \\frac{nR\\gamma}{\\gamma-1}$</div></div>` },
      ]},
      { titre: "Second principe & Entropie", cartes: [
        { type: "th", titre: "Second principe de la thermodynamique", contenu: `Il existe une fonction d'état $S$ (entropie) : $\\d S = \\delta S_e + \\delta S_c$ avec $\\delta S_c \\ge 0$<br>
Entropie échangée : $\\delta S_e = \\frac{\\delta Q}{T_{ext}}$ &nbsp;·&nbsp; Inégalité de Clausius : $\\Delta S \\ge \\int \\frac{\\delta Q}{T_{ext}}$</div>` },
        { type: "form", titre: "Identités thermodynamiques", contenu: `$\\d U = T\\d S - P\\d V$ &nbsp;·&nbsp; $\\d H = T\\d S + V\\d P$` },
        { type: "form", titre: "Lois de Laplace (isentropique)", contenu: `$PV^\\gamma = \\text{cte}$ &nbsp;·&nbsp; $TV^{\\gamma-1} = \\text{cte}$ &nbsp;·&nbsp; $T^\\gamma P^{1-\\gamma} = \\text{cte}$` },
        { type: "form", titre: "Entropie du gaz parfait", contenu: `$\\d S = nC_V \\frac{\\d T}{T} + nR \\frac{\\d V}{V}$` },
      ]},
      { titre: "Machines thermiques", cartes: [
        { type: "prop", titre: "Bilan d'une machine ditherme", contenu: `Énergie : $W + Q_C + Q_F = 0$ &nbsp;·&nbsp; Inégalité de Clausius : $\\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} \\le 0$` },
        { type: "form", titre: "Efficacité de Carnot", contenu: `Moteur ditherme : $e = -\\frac{W}{Q_C} \\le e_C = 1 - \\frac{T_F}{T_C}$` },
        { type: "prop", titre: "Représentation des cycles", contenu: `Diagramme $(P,V)$ : aire = travail reçu &nbsp;·&nbsp; Diagramme $(T,S)$ : aire = chaleur reçue` },
      ]},
      { titre: "Corps pur sous deux phases", cartes: [
        { type: "prop", titre: "Variance (règle de Gibbs)", contenu: `1 phase : $v = 2$ &nbsp;·&nbsp; 2 phases : $v = 1$ &nbsp;·&nbsp; 3 phases (point triple) : $v = 0$` },
        { type: "form", titre: "Formule de Clapeyron", contenu: `$$l_{1\\to 2} = T(v_2-v_1)\\left(\\frac{\\d P}{\\d T}\\right)_{eq}$$
Relation : $h_{1\\to 2} = T\\cdot s_{1\\to 2}$` },
        { type: "prop", titre: "Diagrammes de changement d'état", contenu: `Point triple $T$ : seul point de coexistence des 3 phases.<br>
Point critique $C$ : au-delà, phases liquide et vapeur indiscernables (état fluide).<br>
Pression de vapeur saturante $P_{sat}(T)$ : ne dépend que de $T$.</div></div>` },
      ]},
      { titre: "Diffusion thermique & Rayonnement", cartes: [
        { type: "form", titre: "Loi de Fourier", contenu: `$\\vec{j}_{th} = -\\kappa\\vec{\\grad} T$ &nbsp;·&nbsp; Équation de la chaleur : $\\rho c \\frac{\\partial T}{\\partial t} = \\kappa\\Delta T + \\sigma$` },
        { type: "form", titre: "Résistance thermique", contenu: `$R_{th} = \\frac{T_1-T_2}{\\Phi_{th}}$ &nbsp;·&nbsp; Barreau : $R_{th} = \\frac{L}{\\kappa S}$<br>Série : s'additionnent &nbsp;·&nbsp; Parallèle : inverses s'additionnent</div>` },
        { type: "def", titre: "Corps noir", contenu: `Corps opaque absorbant intégralement tout rayonnement reçu. Émet le rayonnement d'équilibre thermique à la température $T$.` },
        { type: "form", titre: "Lois du rayonnement thermique", contenu: `Stefan-Boltzmann : $\\Phi(T) = \\sigma T^4$ &nbsp;&nbsp;($\\sigma = 5{,}67\\times 10^{-8} \\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$)<br>
Planck : $\\Phi(\\lambda,T) = \\frac{2\\pi hc^2}{\\lambda^5} \\frac{1}{\\exp\\left(\\frac{hc}{\\lambda k_B T}\\right)-1}$<br>
Wien : $\\lambda_m T = 2{,}898\\times 10^{-3} \\text{ m}\\cdot\\text{K}$<br>
Flux radiatif corps noir convexe : $\\Phi_{rad} = \\sigma(T^4-T_0^4)$</div></div>
</div>` },
      ]},
    ]
  },
  {
    id: "ma-series", matiere: "ma", titre: "Séries", ordre: 1,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Définitions et premières propriétés", cartes: [
        { type: "def", titre: "Série convergente / divergente", contenu: `Série $\\sum u_n$ converge si la suite des sommes partielles $S_n$ converge.<br>La limite est la somme de la série. Sinon : divergente.</div>` },
        { type: "prop", titre: "Série géométrique", contenu: `$\\sum q^n$ converge $\\iff |q| \\lt 1$. Si $|q| \\lt 1$ : $\\sum_{n \\ge 0} q^n = \\frac{1}{1-q}$` },
        { type: "prop", titre: "Condition nécessaire de convergence", contenu: `Si $\\sum u_n$ converge, alors $u_n \\to 0$. La réciproque est fausse (série harmonique).` },
        { type: "prop", titre: "Linéarité", contenu: `L'ensemble des suites $(u_n)$ telles que $\\sum u_n$ converge est un sous-espace vectoriel. La somme est une application linéaire.` },
        { type: "th", titre: "Reste d'une série convergente", contenu: `La suite des restes $R_n \\to 0$ quand $n \\to +\\infty$.` },
      ]},
      { titre: "Séries à termes positifs (SATP)", cartes: [
        { type: "th", titre: "Convergence d'une SATP", contenu: `Une SATP converge $\\iff$ la suite des sommes partielles est majorée.` },
        { type: "th", titre: "Série de Riemann", contenu: `$\\sum \\frac{1}{n^\\alpha}$ converge $\\iff \\alpha > 1$.` },
        { type: "th", titre: "Théorème de comparaison", contenu: `Si $0 \\le a_n \\le b_n$ (à partir d'un certain rang) : $\\sum b_n$ conv. $\\implies \\sum a_n$ conv. &nbsp;&nbsp; $\\sum a_n$ div. $\\implies \\sum b_n$ div.` },
        { type: "th", titre: "Comparaison par équivalent / grand O", contenu: `Si $a_n \\sim b_n$ ($b_n > 0$), les deux séries sont de même nature.<br>Si $a_n = \\mathcal{O}(b_n)$ et $\\sum b_n$ conv., alors $\\sum a_n$ conv.</div>` },
        { type: "th", titre: "Règle de d'Alembert", contenu: `Si $a_n > 0$ et $\\frac{a_{n+1}}{a_n} \\to l$ : $l \\lt 1 \\implies$ conv. &nbsp;&nbsp; $l > 1 \\implies$ div. &nbsp;&nbsp; $l = 1$ : indéterminé.` },
        { type: "th", titre: "Formule de Stirling", contenu: `$n! \\sim \\sqrt{2\\pi n} \\left(\\frac{n}{\\e}\\right)^n$` },
      ]},
      { titre: "Convergence absolue & Séries alternées", cartes: [
        { type: "th", titre: "Convergence absolue implique convergence", contenu: `Si $\\sum |u_n|$ converge (conv. absolue), alors $\\sum u_n$ converge et $\\left|\\sum u_n\\right| \\le \\sum |u_n|$.` },
        { type: "th", titre: "CSSA — Critère des séries alternées", contenu: `Si $(|a_n|)$ décroissante $\\to 0$ et $\\sum a_n$ alternée, alors $\\sum a_n$ converge.<br>Reste : $|R_n| \\le |a_{n+1}|$ (du signe de son premier terme).</div>` },
        { type: "th", titre: "Théorème de Cesàro", contenu: `Si $u_n \\to l \\in \\mathbb{R}$ (ou $\\pm\\infty$), alors les moyennes $v_n = \\frac{1}{n}\\sum_{k=1}^n u_k \\to l$.` },
      ]},
      { titre: "Sommation des relations de comparaison", cartes: [
        { type: "th", titre: "Intégration des o, O, ~", contenu: `Si $a_n \\sim b_n$ ($b_n > 0$) : $\\sum b_n$ conv. $\\implies \\sum_{k=n+1}^\\infty a_k \\sim \\sum_{k=n+1}^\\infty b_k$ &nbsp;&nbsp; $\\sum b_n$ div. $\\implies \\sum_{k=0}^n a_k \\sim \\sum_{k=0}^n b_k$` },
      ]},
      { titre: "Familles sommables", cartes: [
        { type: "def", titre: "Famille sommable", contenu: `Famille $(u_i)_{i\\in I}$ de $\\mathbb{C}$ sommable si $(|u_i|)_{i\\in I}$ l'est (borne supérieure des sommes finies finie).` },
        { type: "th", titre: "Invariance par permutation", contenu: `Soit $\\sigma$ une bijection de $I$ : $(u_i)$ sommable $\\iff (u_{\\sigma(i)})$ sommable, avec la même somme.` },
        { type: "th", titre: "Sommation par paquets", contenu: `Si $I = \\bigcup_j I_j$ (disjoints) et $(u_i)$ sommable : $\\sum_{i\\in I} u_i = \\sum_j \\left(\\sum_{i\\in I_j} u_i\\right)$` },
        { type: "th", titre: "Théorème de Fubini", contenu: `$(u_{i,j})_{I\\times J}$ sommable $\\iff$ pour tout $j$, $(u_{i,j})_i$ sommable et la famille des sommes est sommable.<br>
Alors : $\\sum_{I\\times J} u_{i,j} = \\sum_j\\left(\\sum_i u_{i,j}\\right) = \\sum_i\\left(\\sum_j u_{i,j}\\right)$</div>` },
        { type: "th", titre: "Produit de Cauchy", contenu: `Si $\\sum a_n$ et $\\sum b_n$ absolument convergentes, et $c_n = \\sum_{k=0}^n a_k b_{n-k}$, alors $\\sum c_n$ converge absolument et $\\left(\\sum a_n\\right)\\left(\\sum b_n\\right) = \\sum c_n$` },
      ]},
    ]
  },
  {
    id: "ma-int", matiere: "ma", titre: "Intégrales généralisées", ordre: 2,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Définitions et exemples", cartes: [
        { type: "th", titre: "Intégrales de Riemann", contenu: `$\\int_1^{+\\infty} \\frac{\\d t}{t^\\alpha}$ converge $\\iff \\alpha > 1$.<br>
$\\int_0^1 \\frac{\\d t}{t^\\alpha}$ converge $\\iff \\alpha \\lt 1$.<br>
$\\int_0^{+\\infty} \\e^{-at} \\d t$ converge $\\iff a > 0$.</div></div>` },
        { type: "prop", titre: "Linéarité, relation de Chasles", contenu: `Les intégrales généralisées sont linéaires. Chasles : $\\int_a^{+\\infty} f = \\int_a^c f + \\int_c^{+\\infty} f$ si l'un des membres est défini.` },
      ]},
      { titre: "Intégrabilité (convergence absolue)", cartes: [
        { type: "def", titre: "Fonction intégrable", contenu: `$f$ intégrable sur $I$ si $\\int_I |f(t)|\\d t$ converge (convergence absolue).` },
        { type: "th", titre: "Convergence absolue $\\implies$ convergence", contenu: `Si $\\int |f|$ converge, alors $\\int f$ converge et $\\left|\\int f\\right| \\le \\int |f|$.` },
        { type: "th", titre: "Comparaison (intégrabilité)", contenu: `Si $|f| \\le |g|$ et $g$ intégrable $\\implies f$ intégrable. Si $f \\sim g$ ($g > 0$) $\\implies$ même nature.` },
      ]},
      { titre: "Intégrales à paramètres", cartes: [
        { type: "th", titre: "Continuité sous le signe $\\int$", contenu: `Si $f(x,t)$ continue en $x$ pour tout $t$, continue par morceaux en $t$, et $|f(x,t)| \\le \\varphi(t)$ intégrable :<br>
$g(x) = \\int_J f(x,t)\\d t$ est continue sur $I$.</div>` },
        { type: "th", titre: "Dérivation sous le signe $\\int$", contenu: `Si de plus $\\frac{\\partial f}{\\partial x}$ existe, continue en $x$, et $\\left|\\frac{\\partial f}{\\partial x}(x,t)\\right| \\le \\varphi(t)$ intégrable :<br>
$g'(x) = \\int_J \\frac{\\partial f}{\\partial x}(x,t)\\d t$</div>` },
        { type: "th", titre: "Convergence dominée (version paramètre continu)", contenu: `Si $f(x,t) \\to l(t)$ quand $x \\to a$, et $|f(x,t)| \\le \\varphi(t)$ intégrable :<br>
$\\lim_{x\\to a} \\int_J f(x,t)\\d t = \\int_J l(t)\\d t$</div>` },
      ]},
      { titre: "Sommation des relations de comparaison (intégrales)", cartes: [
        { type: "th", titre: "Intégration des $\\sim$ (intégrales)", contenu: `Si $f \\sim g$ ($g > 0$) quand $x \\to +\\infty$ : $\\int g$ conv. $\\implies \\int_x^{+\\infty} f \\sim \\int_x^{+\\infty} g$ &nbsp;&nbsp; $\\int g$ div. $\\implies \\int_a^x f \\sim \\int_a^x g$` },
        { type: "th", titre: "Intégration par parties généralisée", contenu: `Si $fg$ a des limites finies en $a$ et $b$, et si l'une des intégrales $\\int fg'$ ou $\\int f'g$ converge, l'autre aussi :
$$\\int_a^b fg' = [fg]_a^b - \\int_a^b f'g$$` },
      ]},
    ]
  },
  {
    id: "ma-ed", matiere: "ma", titre: "Équations différentielles", ordre: 3,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Ordre 1 scalaire", cartes: [
        { type: "def", titre: "EDL scalaire d'ordre 1", contenu: `$a, b \\in \\mathcal{C}(I,\\mathbb{K})$. Équation : $(E) : x' + a(t)x = b(t)$. Homogène : $x' + a(t)x = 0$.` },
        { type: "th", titre: "Structure des solutions", contenu: `$\\mathcal{S}_H$ engendrée par $t \\mapsto \\e^{-A(t)}$ ($A$ primitive de $a$). Si $f_P$ solution particulière :
$$\\mathcal{S}_E = \\{t \\mapsto \\lambda\\e^{-A(t)} + f_P(t) \\mid \\lambda \\in \\mathbb{R}\\}$$` },
        { type: "th", titre: "Théorème de Cauchy (ordre 1)", contenu: `Pour $(t_0,x_0) \\in I\\times\\mathbb{K}$, il existe une unique solution au problème de Cauchy $\\{x' + a(t)x = b(t) \\,;\\, x(t_0) = x_0\\}$.` },
      ]},
      { titre: "Cas général vectoriel", cartes: [
        { type: "def", titre: "EDL vectorielle", contenu: `$E$ : espace vectoriel normé de dimension finie, $a \\in \\mathcal{C}(I,\\mathcal{L}(E))$, $b \\in \\mathcal{C}(I,E)$.<br>
Équation : $(E) : x' = a(t)\\cdot x + b(t)$ &nbsp;·&nbsp; Matricielle : $(E_M) : X' = A(t)X + B(t)$</div>` },
        { type: "prop", titre: "Principe de superposition", contenu: `Si $f_1$ sol. de $x' = a(t)\\cdot x + b_1(t)$ et $f_2$ sol. de $x' = a(t)\\cdot x + b_2(t)$, alors $f_1+\\lambda f_2$ sol. de $x' = a(t)\\cdot x + b_1(t)+\\lambda b_2(t)$` },
        { type: "prop", titre: "Structure de $\\mathcal{S}_E$", contenu: `$\\mathcal{S}_H$ (solutions de l'homogène) est un SEV de $\\mathcal{D}(I;E)$. Si $f_P$ solution particulière :
$$\\mathcal{S}_E = \\{h + f_P \\mid h \\in \\mathcal{S}_H\\}$$` },
      ]},
      { titre: "Théorème de Cauchy linéaire", cartes: [
        { type: "th", titre: "Cauchy linéaire — forme générale", contenu: `Pour $a : I\\to\\mathcal{L}(E)$, $b : I\\to E$ continues, et $(t_0,x_0) \\in I\\times E$, il existe une unique solution au problème $\\{x' = a(t)\\cdot x+b(t) \\,;\\, x(t_0)=x_0\\}$.` },
        { type: "th", titre: "Cauchy linéaire — ordre n scalaire", contenu: `Pour $a_0,\\dots,a_{n-1},b$ continues sur $I$ et conditions initiales $(x_0,\\dots,x_{n-1}) \\in \\mathbb{K}^n$, il existe une unique solution au problème :
$$\\left\\{ x^{(n)} = a_{n-1}(t)x^{(n-1)} + \\dots + a_0(t)x + b(t) \\,;\\, x^{(i)}(t_0) = x_i \\;\\forall i \\right\\}$$` },
        { type: "th", titre: "Dimension de l'espace des solutions", contenu: `$\\mathcal{S}_H$ est un espace vectoriel de dimension $n$ ($\\dim E$ ou ordre de l'équation).<br>L'application $x \\in \\mathcal{S}_H \\mapsto x(t_0)$ est un isomorphisme de $\\mathcal{S}_H$ sur $E$.</div>` },
      ]},
      { titre: "Coefficients constants", cartes: [
        { type: "th", titre: "Solution par exponentielle de matrice", contenu: `L'unique solution de $\\{X' = AX \\,;\\, X(t_0)=X_0\\}$ est $t \\mapsto \\e^{(t-t_0)A}X_0$` },
        { type: "prop", titre: "Équation caractéristique — ordre 2", contenu: `Pour $(H) : y''+ay'+by = 0$, équation caractéristique $r^2+ar+b = 0$ :<br>
Deux racines distinctes $r_1,r_2$ : $y = \\lambda\\e^{r_1 t}+\\mu\\e^{r_2 t}$<br>
Racine double $r_0$ : $y = (\\lambda t+\\mu)\\e^{r_0 t}$<br>
Racines complexes $\\alpha\\pm\\i\\beta$ : $y = \\e^{\\alpha t}(A\\cos\\beta t+B\\sin\\beta t)$</div></div>
</div>` },
      ]},
      { titre: "Variation des constantes", cartes: [
        { type: "def", titre: "Wronskien", contenu: `Pour deux solutions $\\varphi, \\psi$ de $E$ : $w_{\\varphi,\\psi}(t) = \\det\\begin{pmatrix} \\varphi(t) & \\psi(t) \\\\ \\varphi'(t) & \\psi'(t) \\end{pmatrix}$` },
        { type: "th", titre: "Propriété du wronskien", contenu: `$w_{\\varphi,\\psi}$ est solution de $y' + a(t)y = 0$.<br>
$(\\varphi,\\psi)$ base de $\\mathcal{S}_E \\iff \\exists t_0$ tel que $w_{\\varphi,\\psi}(t_0) \\neq 0 \\iff$ pour tout $t \\in I$, $w_{\\varphi,\\psi}(t) \\neq 0$.</div>` },
        { type: "prop", titre: "Méthode de variation des constantes", contenu: `Pour trouver une solution particulière de $y''+a(t)y'+b(t)y = c(t)$ :<br>
On cherche $f = \\lambda(t)\\varphi+\\mu(t)\\psi$ avec le système :
$$
\\begin{aligned}
\\lambda'(t)\\varphi(t) + \\mu'(t)\\psi(t) &= 0 \\\\
\\lambda'(t)\\varphi'(t) + \\mu'(t)\\psi'(t) &= c(t)
\\end{aligned}
$$</div>` },
      ]},
    ]
  },
  {
    id: "ma-fvect", matiere: "ma", titre: "Fonctions vectorielles", ordre: 4,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Dérivabilité", cartes: [
        { type: "def", titre: "Dérivée d'une fonction vectorielle", contenu: `$f : I \\to E$ dérivable en $a$ si $\\frac{f(t)-f(a)}{t-a}$ admet une limite finie quand $t\\to a$, notée $f'(a)$.<br>
$f$ dérivable $\\iff$ toutes ses coordonnées dans une base le sont. Classe $\\mathcal{C}^k$ définie par récurrence.</div>` },
        { type: "prop", titre: "f constante $\\iff f' = 0$", contenu: `$f : I \\to E$ dérivable est constante sur $I$ si et seulement si $f' = 0$.` },
        { type: "th", titre: "Règles de dérivation", contenu: `Pour $L \\in \\mathcal{L}(E,F)$ : $(L\\circ f)' = L\\circ f'$<br>
Pour $B$ bilinéaire : $(B(f,g))' = B(f',g)+B(f,g')$<br>
Pour une application $n$-linéaire $M$ : $\\Phi'(t) = \\sum_i M(f_1,\\dots,f'_i,\\dots,f_n)$</div></div>` },
      ]},
      { titre: "Intégration", cartes: [
        { type: "def", titre: "Intégrale vectorielle", contenu: `$\\int_a^b f(t)\\d t$ définie composante par composante dans une base (indépendant de la base).` },
        { type: "prop", titre: "Propriétés de l'intégrale vectorielle", contenu: `Linéarité. Chasles. Commutation avec les appli. linéaires : $\\int (L\\circ f) = L\\circ \\int f$<br>
Inégalité : $\\left\\|\\int_a^b f(t)\\d t\\right\\| \\le \\int_a^b \\|f(t)\\|\\d t$<br>
Sommes de Riemann : $\\frac{b-a}{n} \\sum_{k=0}^{n-1} f\\left(a+k\\frac{b-a}{n}\\right) \\to \\int_a^b f$</div></div>` },
        { type: "th", titre: "Théorème fondamental du calcul intégral", contenu: `Si $f : I \\to E$ continue, $g : x \\mapsto \\int_a^x f(t)\\d t$ est l'unique primitive de $f$ s'annulant en $a$.<br>
Pour toute primitive $g$ : $\\int_a^b f(t)\\d t = g(b)-g(a)$</div>` },
        { type: "prop", titre: "Changement de variable (vectoriel)", contenu: `Pour $\\varphi : J \\to I$ de classe $\\mathcal{C}^1$ : $\\int_{\\varphi(a)}^{\\varphi(b)} f(t)\\d t = \\int_a^b \\varphi'(s)f(\\varphi(s))\\d s$` },
      ]},
      { titre: "Accroissements finis & Taylor", cartes: [
        { type: "th", titre: "Inégalité des accroissements finis (IAF)", contenu: `Si $\\|f'(t)\\| \\le C$ pour tout $t \\in I$ : $\\|f(b)-f(a)\\| \\le C|b-a|$<br>
<em>Attention : le théorème de Rolle et des accroissements finis exacts ne s'étendent pas aux fonctions vectorielles.</em></div>` },
        { type: "prop", titre: "Formule de Taylor-Young", contenu: `$$f(a+h) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} h^k + o(h^n)$$` },
        { type: "prop", titre: "Formule de Taylor avec reste intégral", contenu: `$$f(b) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(b-a)^k + \\int_a^b \\frac{(b-t)^n}{n!} f^{(n+1)}(t)\\d t$$` },
        { type: "prop", titre: "Inégalité de Taylor-Lagrange", contenu: `Si $\\|f^{(n+1)}(t)\\| \\le M$ sur $[a,b]$ :
$$\\left\\|f(b) - \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(b-a)^k\\right\\| \\le \\frac{|b-a|^{n+1}}{(n+1)!} M$$` },
      ]},
    ]
  },
  {
    id: "ma-se", matiere: "ma", titre: "Séries entières", ordre: 5,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Rayon de convergence", cartes: [
        { type: "def", titre: "Rayon de convergence $R$", contenu: `Pour $\\sum a_n z^n$, $R = \\sup\\{\\rho \\ge 0 : (a_n \\rho^n) \\text{ bornée}\\}$. Disque ouvert de convergence : $|z| \\lt R$.` },
        { type: "th", titre: "Lemme d'Abel", contenu: `Si $(a_n z_0^n)$ bornée, alors pour $|z| \\lt |z_0|$, $\\sum a_n z^n$ converge absolument.` },
        { type: "th", titre: "Comportement selon $|z|$", contenu: `$|z| \\lt R$ : $\\sum a_n z^n$ converge absolument. $|z| > R$ : $(a_n z^n)$ non bornée, série diverge.` },
        { type: "prop", titre: "Règle de d'Alembert pour le rayon", contenu: `Si $\\left|\\frac{a_{n+1}}{a_n}\\right| \\to l$ : $R = \\frac{1}{l}$ si $l \\in ]0,+\\infty[$, $R = +\\infty$ si $l = 0$, $R = 0$ si $l = +\\infty$.` },
        { type: "th", titre: "Opérations sur les rayons", contenu: `Somme : $R\\left(\\sum(a_n+b_n)z^n\\right) \\ge \\min(R_a,R_b)$. Si $R_a \\neq R_b$, égalité.<br>
Produit de Cauchy : rayon $\\ge \\min(R_a,R_b)$.</div>` },
      ]},
      { titre: "Régularité de la somme", cartes: [
        { type: "th", titre: "Convergence normale — continuité", contenu: `Sur tout disque $D(0,r)$ avec $r \\lt R$, $\\sum a_n z^n$ converge normalement.<br>
La somme $S$ est continue sur $D(0,R)$.</div>` },
        { type: "th", titre: "Abel radial", contenu: `Si $\\sum a_n R^n$ converge, alors $\\lim_{x\\to R^-} S(x) = \\sum_{n=0}^{\\infty} a_n R^n$` },
        { type: "th", titre: "Intégration — rayon conservé", contenu: `Le rayon de $\\sum \\frac{a_n}{n+1} z^{n+1}$ est $R$. Cette série est une primitive de $S$ sur $]-R,R[$.` },
        { type: "th", titre: "Dérivation — rayon conservé", contenu: `Le rayon de $\\sum n a_n z^{n-1}$ est $R$. $S$ est de classe $\\mathcal{C}^\\infty$ sur $]-R,R[$ et $S^{(k)}(x) = \\sum_{n \\ge k} n(n-1)\\dots(n-k+1)a_n x^{n-k}$<br>
En particulier : $f^{(k)}(0) = k!a_k$</div>` },
        { type: "th", titre: "Unicité du DSE", contenu: `Si $f$ développable en série entière sur $]-r,r[$, $f$ est $\\mathcal{C}^\\infty$ et l'unique développement est la série de Taylor :
$$f(x) = \\sum_{n \\ge 0} \\frac{f^{(n)}(0)}{n!} x^n$$` },
      ]},
      { titre: "Développements à connaître", cartes: [
        { type: "form", titre: "DSE fondamentaux", contenu: `$$
\\begin{aligned}
\\e^x &= \\sum_{n \\ge 0} \\frac{x^n}{n!} \\quad (R=+\\infty) \\\\
\\cos x &= \\sum_{n \\ge 0} (-1)^n \\frac{x^{2n}}{(2n)!} \\quad (R=+\\infty) \\\\
\\sin x &= \\sum_{n \\ge 0} (-1)^n \\frac{x^{2n+1}}{(2n+1)!} \\quad (R=+\\infty) \\\\
\\cosh x &= \\sum_{n \\ge 0} \\frac{x^{2n}}{(2n)!} \\quad (R=+\\infty) \\\\
\\sinh x &= \\sum_{n \\ge 0} \\frac{x^{2n+1}}{(2n+1)!} \\quad (R=+\\infty) \\\\
\\ln(1+x) &= \\sum_{n \\ge 0} (-1)^n \\frac{x^{n+1}}{n+1} \\quad (R=1) \\\\
\\arctan x &= \\sum_{n \\ge 0} (-1)^n \\frac{x^{2n+1}}{2n+1} \\quad (R=1) \\\\
(1+t)^\\alpha &= 1 + \\alpha t + \\sum_{n \\ge 2} \\frac{\\alpha(\\alpha-1)\\dots(\\alpha-n+1)}{n!} t^n \\quad (R=1 \\text{ si } \\alpha \\notin \\mathbb{N})
\\end{aligned}
$$` },
      ]},
    ]
  },
  {
    id: "ma-cvg", matiere: "ma", titre: "Convergence dominée", ordre: 6,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Théorème de convergence dominée", cartes: [
        { type: "th", titre: "TCD — Convergence dominée", contenu: `Si $(f_n)$ converge simplement vers $f$ sur $I$, $f_n$ continue par morceaux, $f$ continue par morceaux, et il existe $\\varphi$ intégrable telle que $|f_n(x)| \\le \\varphi(x)$ pour tout $n$ et tout $x$ :
$$\\int_I f = \\lim_{n\\to+\\infty} \\int_I f_n$$` },
      ]},
      { titre: "Intégration terme à terme", cartes: [
        { type: "th", titre: "Intégration terme à terme (positif)", contenu: `Si $f_n \\ge 0$, $\\sum f_n$ converge simplement vers $S$, et $S$ et $f_n$ continues par morceaux :
$$\\int_I S = \\sum_{n \\ge 0} \\int_I f_n$$
(dans $[0,+\\infty]$)` },
        { type: "th", titre: "Intégration terme à terme (général)", contenu: `Si de plus $\\sum \\int_I |f_n|$ converge, alors $S$ intégrable sur $I$ et $\\int_I S = \\sum \\int_I f_n$` },
      ]},
      { titre: "Intégrales à paramètres — rappel synthétique", cartes: [
        { type: "th", titre: "Régularité C^k sous le signe $\\int$", contenu: `Si $x \\mapsto f(x,t)$ est $\\mathcal{C}^k$ et $\\left|\\frac{\\partial^k f}{\\partial x^k}(x,t)\\right| \\le \\varphi(t)$ intégrable, alors $g(x) = \\int_J f(x,t)\\d t$ est $\\mathcal{C}^k$ et :
$$g^{(k)}(x) = \\int_J \\frac{\\partial^k f}{\\partial x^k} (x,t)\\d t$$` },
      ]},
    ]
  },
  {
    id: "ma-sfn", matiere: "ma", titre: "Suites et séries de fonctions", ordre: 7,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Convergences", cartes: [
        { type: "def", titre: "Convergences simple et uniforme", contenu: `CS : pour tout $x \\in A$, $(f_n(x))$ converge.<br>
CU : $\\forall \\varepsilon > 0, \\exists n_0, n \\ge n_0 \\implies \\forall x, \\|f_n(x)-f(x)\\| \\le \\varepsilon$<br>
Caractérisation CU : $(f_n)$ conv. unif. $\\iff \\|f_n-f\\|_\\infty \\to 0$.</div></div>` },
        { type: "prop", titre: "CU $\\implies$ CS (réciproque fausse)", contenu: `La convergence uniforme implique la convergence simple.` },
        { type: "def", titre: "Convergence normale", contenu: `$\\sum u_n$ converge normalement si $\\sum \\|u_n\\|_\\infty$ converge. CN $\\implies$ CU.` },
      ]},
      { titre: "Régularité de la limite / somme", cartes: [
        { type: "th", titre: "Continuité — passage à la limite", contenu: `Si $f_n$ continues et $(f_n)$ converge uniformément vers $f$, alors $f$ est continue.` },
        { type: "th", titre: "Double limite", contenu: `Si $(f_n) \\to f$ uniformément et $f_n \\to l_n$ en $a$, alors $(l_n)$ et $f$ ont la même limite $l$ en $a$ :
$$\\lim_{x\\to a} \\lim_n f_n(x) = \\lim_n \\lim_{x\\to a} f_n(x)$$` },
        { type: "th", titre: "Intégration de la limite uniforme", contenu: `Si $f_n$ continues et $(f_n) \\to f$ uniformément sur $[a,b]$ :
$$\\lim_{n\\to+\\infty} \\int_a^b f_n(t)\\d t = \\int_a^b f(t)\\d t$$` },
        { type: "th", titre: "Dérivation — passage à la limite", contenu: `Si $f_n$ de classe $\\mathcal{C}^1$, $(f_n)$ converge simplement, $(f_n')$ converge uniformément vers $g$ :<br>
Alors $(f_n)$ converge uniformément vers $f$, $f$ est $\\mathcal{C}^1$ et $f' = g$.</div>` },
        { type: "th", titre: "Weierstrass", contenu: `Toute fonction continue sur un segment est limite uniforme d'une suite de fonctions polynomiales.` },
      ]},
    ]
  },
  {
    id: "ma-evn", matiere: "ma", titre: "Espaces vectoriels normés & Topologie", ordre: 8,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Normes", cartes: [
        { type: "def", titre: "Norme sur un espace vectoriel E", contenu: `Application $N : E \\to \\mathbb{R}^+$ telle que : $N$ définie positive, $N(x+y) \\le N(x)+N(y)$, $N(x)=0 \\iff x=0_E$, $N(\\lambda x)=|\\lambda|N(x)$.` },
        { type: "prop", titre: "Normes usuelles sur $\\mathbb{K}^n$", contenu: `$N_1 = \\sum |x_i|$ &nbsp;·&nbsp; $N_2 = \\sqrt{\\sum x_i^2}$ &nbsp;·&nbsp; $N_\\infty = \\max |x_i|$` },
        { type: "def", titre: "Normes équivalentes", contenu: `$N$ et $N'$ équivalentes si $\\exists \\alpha,\\beta > 0$ tels que $\\alpha N(x) \\le N'(x) \\le \\beta N(x)$ pour tout $x$.` },
        { type: "th", titre: "Équivalence en dimension finie", contenu: `Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes.<br>
$\\implies$ Convergence d'une suite et valeur de la limite ne dépendent pas de la norme.</div>` },
      ]},
      { titre: "Topologie", cartes: [
        { type: "def", titre: "Parties ouvertes et fermées", contenu: `Ouvert $U$ : pour tout $x \\in U$, $\\exists r > 0$ tel que $B(x,r) \\subset U$.<br>
Fermé $F$ : le complémentaire est ouvert.<br>
Toute union d'ouverts est un ouvert. Intersection finie d'ouverts = ouvert.<br>
Toute intersection de fermés est un fermé. Union finie de fermés = fermé.</div></div>` },
        { type: "th", titre: "Caractérisation séquentielle des fermés", contenu: `$F$ fermé $\\iff$ pour toute suite $(x_n) \\in F^\\mathbb{N}$ convergente, sa limite est dans $F$.` },
        { type: "def", titre: "Adhérence et densité", contenu: `$x$ adhérent à $A$ si $\\forall r>0, B(x,r)\\cap A \\neq \\emptyset \\iff \\exists (x_n) \\in A^\\mathbb{N}, x_n\\to x$.<br>
$A$ est dense dans $E$ si $\\overline{A} = E \\iff$ tout point de $E$ est limite d'une suite d'éléments de $A$.</div>` },
      ]},
      { titre: "Continuité des applications linéaires", cartes: [
        { type: "th", titre: "Caractérisation de la continuité", contenu: `$u \\in \\mathcal{L}(E,F)$ continue $\\iff$ continue en $0 \\iff \\exists C \\ge 0, \\forall x, \\|u(x)\\|_F \\le C\\|x\\|_E \\iff u$ lipschitzienne.` },
        { type: "def", titre: "Norme subordonnée (norme triple)", contenu: `$|||u||| = \\sup_{x\\neq 0} \\frac{\\|u(x)\\|}{\\|x\\|} = \\sup_{\\|x\\|=1} \\|u(x)\\|$<br>
C'est la plus petite constante $C$ vérifiant $\\|u(x)\\| \\le C\\|x\\|$.<br>
$|||v\\circ u||| \\le |||v|||\\cdot|||u|||$</div></div>` },
        { type: "th", titre: "Continuité en dimension finie", contenu: `Si $E$ est de dimension finie, toute application linéaire de $E$ vers $F$ est continue.` },
        { type: "th", titre: "Applications multilinéaires continues", contenu: `$\\varphi : E_1\\times\\dots\\times E_p \\to F$ multilinéaire continue $\\iff \\exists C, \\|\\varphi(x)\\| \\le C\\|x_1\\|\\cdot\\dots\\cdot\\|x_p\\|$<br>
Toute application multilinéaire sur un produit de dimensions finies est continue.</div>` },
      ]},
    ]
  },
  {
    id: "ma-ps", matiere: "ma", titre: "Produit scalaire & Espaces euclidiens", ordre: 9,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Définitions", cartes: [
        { type: "def", titre: "Produit scalaire", contenu: `Application bilinéaire symétrique définie positive sur $E\\times E \\to \\mathbb{R}$ satisfaisant :<br>
1. bilinéarité en chaque argument &nbsp;2. symétrie $\\langle x,y\\rangle=\\langle y,x\\rangle$ &nbsp;3. $\\langle x,x\\rangle\\ge 0$ &nbsp;4. $\\langle x,x\\rangle=0\\iff x=0_E$</div>` },
        { type: "prop", titre: "Identités algébriques", contenu: `Parallélogramme : $\\|x+y\\|^2+\\|x-y\\|^2 = 2(\\|x\\|^2+\\|y\\|^2)$<br>
Polarisation : $\\langle x,y\\rangle = \\frac{1}{2}(\\|x+y\\|^2-\\|x\\|^2-\\|y\\|^2) = \\frac{1}{4}(\\|x+y\\|^2-\\|x-y\\|^2)$</div>` },
      ]},
      { titre: "Inégalités et normes", cartes: [
        { type: "th", titre: "Inégalité de Cauchy-Schwarz", contenu: `$|\\langle x,y\\rangle| \\le \\|x\\|\\cdot\\|y\\|$ avec égalité $\\iff x$ et $y$ colinéaires.` },
        { type: "th", titre: "Inégalité triangulaire", contenu: `$\\|x+y\\| \\le \\|x\\|+\\|y\\|$` },
        { type: "th", titre: "La norme issue d'un produit scalaire", contenu: `$x \\mapsto \\sqrt{\\langle x,x\\rangle}$ est une norme sur $E$ (norme euclidienne).` },
      ]},
      { titre: "Orthogonalité et bases orthonormales", cartes: [
        { type: "def", titre: "Orthogonalité, orthogonal d'une partie", contenu: `$x$ et $y$ orthogonaux si $\\langle x,y\\rangle = 0$. $A^\\perp = \\{x \\in E : \\forall y \\in A, \\langle x,y\\rangle = 0\\}$.<br>
$A^\\perp$ est un sous-espace vectoriel de $E$.</div>` },
        { type: "th", titre: "Relation de Pythagore", contenu: `Pour une famille orthogonale : $\\|\\sum x_i\\|^2 = \\sum \\|x_i\\|^2$` },
        { type: "th", titre: "Famille orthogonale libre", contenu: `Toute famille orthogonale ne contenant pas $0$ est libre.` },
        { type: "def", titre: "Base orthonormale (BON)", contenu: `Base $(e_1,\\dots,e_n)$ telle que $\\langle e_i,e_j\\rangle = \\delta_{ij}$.` },
        { type: "prop", titre: "Coordonnées dans une BON", contenu: `Pour $x = \\sum x_i e_i$ : $\\langle x,y\\rangle = \\sum x_i y_i$ &nbsp;·&nbsp; $\\|x\\| = \\sqrt{\\sum x_i^2}$<br>
Et : $x = \\sum \\langle e_i,x\\rangle e_i$</div>` },
      ]},
      { titre: "Projecteurs orthogonaux", cartes: [
        { type: "th", titre: "Supplémentaire orthogonal", contenu: `Pour $F$ sous-espace de dimension finie de $E$ : $F^\\perp$ est un supplémentaire de $F$ dans $E$.` },
        { type: "prop", titre: "Caractérisation du projecteur orthogonal", contenu: `$p$ est un projecteur orthogonal $\\iff p$ autoadjoint ($p^* = p$) $\\iff \\ker(p)$ et $\\operatorname{Im}(p)$ supplémentaires orthogonaux.` },
        { type: "th", titre: "Meilleure approximation", contenu: `$\\|u - p_F(u)\\| = \\min_{v\\in F} \\|u-v\\|$ ($p_F(u)$ est le plus proche élément de $F$ à $u$)` },
        { type: "th", titre: "Gram-Schmidt", contenu: `De toute base de $E$, on peut extraire une BON par le procédé de Gram-Schmidt, en préservant l'espace engendré par les $k$ premiers vecteurs.` },
      ]},
    ]
  },
  {
    id: "ma-red", matiere: "ma", titre: "Réduction des endomorphismes", ordre: 10,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Valeurs et vecteurs propres", cartes: [
        { type: "def", titre: "Valeur propre, vecteur propre, sous-espace propre", contenu: `$\\lambda$ valeur propre de $f$ si $\\exists x\\neq 0, f(x)=\\lambda x$. Spectre $\\operatorname{Sp}(f)$ = ensemble des valeurs propres.<br>
Sous-espace propre : $E_\\lambda(f) = \\ker(f-\\lambda\\operatorname{id}_E)$.</div>` },
        { type: "th", titre: "Vecteurs propres associés à des VP distinctes", contenu: `Des vecteurs propres associés à des valeurs propres distinctes forment une famille libre.` },
        { type: "th", titre: "Somme directe des sous-espaces propres", contenu: `Les sous-espaces propres associés à des valeurs propres distinctes sont en somme directe.` },
      ]},
      { titre: "Polynôme caractéristique", cartes: [
        { type: "def", titre: "Polynôme caractéristique", contenu: `$\\chi_f(\\lambda) = \\det(\\lambda\\operatorname{id}_E - f)$ : polynôme de degré $n$, coefficient dominant $1$.<br>
Les valeurs propres sont ses racines.</div>` },
        { type: "prop", titre: "Trace et déterminant", contenu: `Si $\\chi_f$ scindé de racines $\\lambda_1,\\dots,\\lambda_n$ :<br>
$\\det(f) = \\prod \\lambda_i$ &nbsp;·&nbsp; $\\operatorname{tr}(f) = \\sum \\lambda_i$<br>
Pour $n=2$ : $\\chi_A = X^2-\\operatorname{tr}(A)X+\\det(A)$</div></div>` },
        { type: "prop", titre: "Multiplicité et dimension du SEP", contenu: `Pour $\\lambda$ valeur propre de multiplicité $m$ : $1 \\le \\dim E_\\lambda(f) \\le m$` },
        { type: "prop", titre: "Matrices semblables", contenu: `Deux matrices semblables ont le même polynôme caractéristique, la même trace, le même déterminant.` },
      ]},
      { titre: "Diagonalisation", cartes: [
        { type: "th", titre: "Critère de diagonalisation", contenu: `$f$ diagonalisable $\\iff \\exists$ base de vecteurs propres $\\iff \\dim$ de la somme des SEP = $\\dim E \\iff \\chi_f$ scindé et $\\dim E_\\lambda = m_\\lambda$ pour tout $\\lambda$.` },
        { type: "prop", titre: "Condition suffisante", contenu: `Si $f$ a $n$ valeurs propres distinctes ($n = \\dim E$), alors $f$ est diagonalisable.` },
      ]},
      { titre: "Trigonalisation et nilpotence", cartes: [
        { type: "th", titre: "Critère de trigonalisation", contenu: `$f$ trigonalisable $\\iff \\chi_f$ scindé sur $\\mathbb{K}$. Toute matrice complexe est trigonalisable dans $\\mathbb{C}$.` },
        { type: "def", titre: "Endomorphisme nilpotent", contenu: `$f$ nilpotent si $\\exists p, f^p = 0$. Indice de nilpotence : le plus petit $p$. On a $p \\le \\dim E$.` },
        { type: "th", titre: "Caractérisation des nilpotents", contenu: `$f$ nilpotent $\\iff f$ trigonalisable avec seule VP $0 \\iff \\chi_f = X^n$.` },
        { type: "th", titre: "Décomposition de Dunford", contenu: `Si $\\chi_f scindé$, il existe $d$ diagonalisable et $n$ nilpotent tels que $f = d + n$ ($d$ et $n$ commutent).` },
        { type: "th", titre: "Décomposition en SEP caractéristiques", contenu: `Si $\\chi_f = \\prod(X-\\lambda_i)^{m_i}$, alors $E = \\bigoplus_i \\ker(f-\\lambda_i\\operatorname{id})^{m_i}$ avec $\\dim \\ker(f-\\lambda_i\\operatorname{id})^{m_i} = m_i$.` },
      ]},
    ]
  },
  {
    id: "ma-poly", matiere: "ma", titre: "Polynômes d'endomorphismes", ordre: 11,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Définitions et propriétés", cartes: [
        { type: "def", titre: "Polynôme d'un endomorphisme", contenu: `Pour $P = \\sum a_k X^k$, $P(f) = \\sum a_k f^k$. $\\mathbb{K}[f]$ est une sous-algèbre de $\\mathcal{L}(E)$.` },
        { type: "prop", titre: "Règles de calcul", contenu: `$(P+Q)(f) = P(f)+Q(f)$ &nbsp;·&nbsp; $(PQ)(f) = P(f)\\circ Q(f)$<br>
Deux polynômes en $f$ commutent toujours. $\\ker(P(f))$ est stable par $f$.</div>` },
        { type: "def", titre: "Polynôme annulateur et polynôme minimal", contenu: `$P$ annulateur de $f$ si $P(f) = 0$. Le polynôme minimal $\\mu_f$ est le polynôme annulateur unitaire de plus petit degré.<br>
$P$ annulateur $\\iff \\mu_f$ divise $P$. Les valeurs propres de $f$ sont les racines de $\\mu_f$.</div>` },
        { type: "th", titre: "Théorème de Cayley-Hamilton", contenu: `Le polynôme caractéristique $\\chi_f$ est un polynôme annulateur de $f$ : $\\chi_f(f) = 0$<br>
$\\implies \\mu_f$ divise $\\chi_f$. Tout endomorphisme de dim $n$ admet un annulateur de degré $\\le n$.</div>` },
      ]},
      { titre: "Lemme de décomposition des noyaux", cartes: [
        { type: "th", titre: "Lemme de décomposition des noyaux", contenu: `Si $P_1,\\dots,P_r$ premiers entre eux deux à deux et $P = \\prod P_i$ :
$$\\ker(P(f)) = \\bigoplus_i \\ker(P_i(f))$$
Les projecteurs associés sont des polynômes en $f$.` },
        { type: "th", titre: "Diagonalisation via polynôme annulateur", contenu: `$f$ diagonalisable $\\iff f$ admet un annulateur scindé à racines simples $\\iff \\mu_f$ scindé à racines simples.` },
        { type: "prop", titre: "Valeurs propres via un annulateur", contenu: `Si $P(f)(x) = P(\\lambda)x$ pour tout vecteur propre $x$ associé à $\\lambda$.<br>
Si $P$ est annulateur de $f$, toute valeur propre de $f$ est racine de $P$.</div>` },
      ]},
    ]
  },
  {
    id: "ma-eucl", matiere: "ma", titre: "Endomorphismes dans un espace euclidien", ordre: 12,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Adjoint", cartes: [
        { type: "th", titre: "Existence de l'adjoint", contenu: `Pour tout $f \\in \\mathcal{L}(E)$, il existe un unique $f^* \\in \\mathcal{L}(E)$ tel que $\\forall(x,y), \\langle f(x),y\\rangle = \\langle x,f^*(y)\\rangle$<br>
$f^*$ est l'adjoint de $f$. En base orthonormée $\\mathcal{B}$ : $\\operatorname{Mat}_\\mathcal{B}(f^*) = \\operatorname{Mat}_\\mathcal{B}(f)^T$</div>` },
        { type: "prop", titre: "Propriétés de l'adjoint", contenu: `Linéarité. $(f^*)^* = f$. $(f\\circ g)^* = g^*\\circ f^*$.<br>
$\\det(f^*) = \\det(f)$ &nbsp;·&nbsp; $\\operatorname{rg}(f^*) = \\operatorname{rg}(f)$ &nbsp;·&nbsp; $\\operatorname{tr}(f^*) = \\operatorname{tr}(f)$ &nbsp;·&nbsp; $f$ et $f^*$ ont les mêmes VP.<br>
$\\ker(f^*) = (\\operatorname{Im} f)^\\perp$ &nbsp;·&nbsp; $\\operatorname{Im}(f^*) = (\\ker f)^\\perp$<br>
$F$ stable par $f \\iff F^\\perp$ stable par $f^*$.</div></div>
</div>` },
      ]},
      { titre: "Isométries vectorielles", cartes: [
        { type: "def", titre: "Isométrie vectorielle — groupe orthogonal O(E)", contenu: `$f$ isométrie si $\\|f(x)\\| = \\|x\\|$ pour tout $x \\in E$.<br>
$\\operatorname{O}(E)$ = ensemble des isométries de $E$ (sous-groupe de $\\operatorname{GL}(E)$).<br>
$\\operatorname{SO}(E)$ = isométries directes ($\\det = 1$).</div></div>` },
        { type: "prop", titre: "Caractérisations équivalentes", contenu: `$f$ isométrie $\\iff f^*\\circ f = \\operatorname{id}_E \\iff f^{-1} = f^* \\iff f$ conserve le produit scalaire $\\iff$ l'image d'une BON est une BON.<br>
En matrice : $M \\in O_n(\\mathbb{R}) \\iff M^T M = I_n \\iff$ colonnes (ou lignes) BON.</div>` },
        { type: "prop", titre: "Valeurs propres réelles d'une isométrie", contenu: `Si $\\lambda \\in \\mathbb{R}$ est valeur propre d'une isométrie, alors $\\lambda \\in \\{-1, +1\\}$.` },
        { type: "def", titre: "Réflexion", contenu: `Symétrie orthogonale par rapport à un hyperplan. Toute réflexion est une isométrie indirecte ($\\det = -1$).` },
        { type: "th", titre: "Classification en dim 2", contenu: `Pour $f$ isométrie de $E$ euclidien de dim 2 :<br>
$\\det(f) = 1 \\implies f$ est une rotation vectorielle d'angle $\\theta$.<br>
$\\det(f) = -1 \\implies f$ est une réflexion.<br>
Matrice d'une rotation en BON directe : $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$</div></div>` },
        { type: "th", titre: "Réduction des isométries (dim 3, directe)", contenu: `Si $f \\in \\operatorname{SO}(E)$ avec $\\dim E = 3$, il existe une base orthonormée directe et $\\theta \\in \\mathbb{R}$ tels que :
$$\\operatorname{Mat}_\\mathcal{B}(f) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}$$` },
        { type: "th", titre: "Réduction générale (th. des blocs)", contenu: `Toute isométrie $f$ admet une base orthonormée dans laquelle sa matrice est $\\operatorname{diag}(I_k, -I_l, R_{\\theta_1}, \\dots, R_{\\theta_m})$` },
      ]},
      { titre: "Endomorphismes autoadjoints", cartes: [
        { type: "def", titre: "Endomorphisme autoadjoint (symétrique)", contenu: `$f$ autoadjoint si $f^* = f$, i.e. $\\langle f(x),y\\rangle = \\langle x,f(y)\\rangle$ pour tout $(x,y)$.<br>
En BON : matrice symétrique réelle.</div>` },
        { type: "prop", titre: "Propriétés des autoadjoints", contenu: `Les sous-espaces propres sont deux à deux orthogonaux.<br>
Le polynôme caractéristique est scindé dans $\\mathbb{R}$.<br>
$f$ positif si $\\langle f(x),x\\rangle \\ge 0 \\;\\forall x \\iff$ toutes les VP $\\ge 0$.<br>
$f$ défini positif si $\\langle f(x),x\\rangle > 0 \\;\\forall x\\neq 0 \\iff$ toutes les VP $> 0$.</div></div>` },
        { type: "th", titre: "Théorème spectral", contenu: `Tout endomorphisme autoadjoint est diagonalisable dans une base orthonormée.<br>
Version matricielle : $M$ symétrique réelle $\\iff \\exists P \\in O_n(\\mathbb{R})$ et $D$ diagonale telles que $M = PDP^T$.</div>` },
      ]},
    ]
  },
  {
    id: "ma-alg", matiere: "ma", titre: "Compléments d'algèbre linéaire", ordre: 13,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Somme directe et supplémentaires", cartes: [
        { type: "th", titre: "Théorème du rang", contenu: `Pour $f \\in \\mathcal{L}(E,F)$ avec $\\dim E$ finie :
$$\\dim E = \\dim \\ker(f) + \\dim \\operatorname{Im}(f) = \\dim \\ker(f) + \\operatorname{rg}(f)$$` },
        { type: "th", titre: "Iso en dimension égale", contenu: `Si $\\dim E = \\dim F$, $f \\in \\mathcal{L}(E,F)$ est bijective $\\iff$ injective $\\iff$ surjective.` },
        { type: "prop", titre: "Formule de Grassmann", contenu: `$\\dim(F+G) = \\dim F + \\dim G - \\dim(F\\cap G)$` },
        { type: "th", titre: "Caractérisation de la somme directe", contenu: `$E_1+\\dots+E_p$ directe $\\iff \\sum x_i = 0_E \\implies x_1=\\dots=x_p=0_E$.<br>
$\\dim(\\bigoplus E_i) = \\sum \\dim(E_i)$.</div>` },
        { type: "prop", titre: "Projecteurs associés à une décomposition", contenu: `Si $E = E_1\\oplus\\dots\\oplus E_p$, les projecteurs $p_i$ vérifient : $\\sum p_i = \\operatorname{id}_E$ et $p_i\\circ p_j = 0$ pour $i \\neq j$.` },
      ]},
      { titre: "Changement de bases et matrices", cartes: [
        { type: "prop", titre: "Changement de base (endomorphisme)", contenu: `Si $P$ est la matrice de passage de $\\mathcal{B}$ à $\\mathcal{B}'$, la matrice $A'$ de $f$ dans $\\mathcal{B}'$ vaut :
$$A' = P^{-1}AP$$
$A$ et $B$ semblables si $\\exists P \\in \\operatorname{GL}_n(\\mathbb{K}), B = P^{-1}AP$. Même $\\chi$, trace, det, VP.` },
        { type: "def", titre: "Trace", contenu: `$\\operatorname{tr}(A) = \\sum a_{ii}$. Linéaire. $\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$. Deux matrices semblables ont même trace.` },
        { type: "form", titre: "Déterminant", contenu: `$\\det(M) = \\sum_{\\sigma\\in\\mathfrak{S}_n} \\varepsilon(\\sigma)\\prod m_{i,\\sigma(i)}$<br>
Propriétés : $\\det(I_n)=1$, $\\det(\\lambda M)=\\lambda^n\\det(M)$, $\\det(MN)=\\det(M)\\det(N)$, $\\det(M^T)=\\det(M)$.<br>
$M$ inversible $\\iff \\det(M) \\neq 0$.</div></div>` },
        { type: "form", titre: "Développement par rapport à une colonne / ligne", contenu: `$\\det(M) = \\sum_{i=1}^n a_{ij} A_{ij}$ (colonne $j$ fixée)<br>
Cofacteur : $A_{ij} = (-1)^{i+j} \\det(M_{ij})$<br>
Inverse : $M^{-1} = \\frac{1}{\\det(M)} \\operatorname{com}(M)^T$</div></div>` },
        { type: "prop", titre: "Déterminant par blocs", contenu: `Matrice triangulaire par blocs $\\begin{pmatrix} A & C \\\\ 0 & B \\end{pmatrix}$ : $\\det = \\det(A)\\cdot\\det(B)$` },
        { type: "form", titre: "Déterminant de Vandermonde", contenu: `Pour la matrice de coefficients $(a_i^{j-1})$ : $\\det = \\prod_{1 \\le i \\lt j \\le n}(a_j-a_i)$` },
      ]},
      { titre: "Exponentielle de matrice", cartes: [
        { type: "def", titre: "Exponentielle de matrice", contenu: `$\\e^A = \\sum_{n \\ge 0} \\frac{A^n}{n!}$ (converge pour toute matrice $A$)` },
        { type: "prop", titre: "Propriétés de l'exponentielle", contenu: `Si $A$ et $B$ commutent : $\\e^{A+B} = \\e^A \\e^B$<br>
$\\e^A$ toujours inversible, d'inverse $\\e^{-A}$.<br>
Si $A = PBP^{-1}$ : $\\e^A = P\\e^B P^{-1}$<br>
Si $D$ diagonale $(\\lambda_1,\\dots,\\lambda_n)$ : $\\e^D = \\operatorname{diag}(\\e^{\\lambda_1},\\dots,\\e^{\\lambda_n})$<br>
VP de $\\e^A$ : $\\e^{\\lambda_i}$ si $\\lambda_i$ VP de $A$.</div></div>
</div>` },
      ]},
      { titre: "Interpolation de Lagrange", cartes: [
        { type: "prop", titre: "Polynôme interpolateur de Lagrange", contenu: `Pour $a_0,\\dots,a_n$ distincts, les $L_i = \\prod_{j\\neq i} \\frac{X-a_j}{a_i-a_j}$ forment une base de $\\mathbb{K}_n[X]$.<br>
Pour $P \\in \\mathbb{K}_n[X]$ : $P = \\sum_i P(a_i)L_i$</div>` },
      ]},
    ]
  },
  {
    id: "ma-proba", matiere: "ma", titre: "Espaces probabilisés", ordre: 14,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Tribu et probabilité", cartes: [
        { type: "def", titre: "Tribu et espace probabilisable", contenu: `$\\mathcal{A} \\subset \\mathcal{P}(\\Omega)$ est une tribu si : $\\Omega \\in \\mathcal{A}$, stable par complémentaire, stable par union dénombrable.<br>
$(\\Omega,\\mathcal{A})$ : espace probabilisable. Éléments de $\\mathcal{A}$ : événements.</div>` },
        { type: "def", titre: "Probabilité", contenu: `$P : \\mathcal{A} \\to [0,1]$ telle que $P(\\Omega)=1$ et $\\sigma$-additivité (pour $A_n$ deux à deux incompatibles) : $P\\left(\\bigcup A_n\\right) = \\sum P(A_n)$` },
        { type: "prop", titre: "Propriétés fondamentales", contenu: `$P(\\emptyset)=0$. $P(\\overline{A})=1-P(A)$. $P(A\\setminus B)=P(A)-P(A\\cap B)$. $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br>
Croissance : $A_1\\subset A_2 \\implies P(A_1)\\le P(A_2)$. Sous-additivité : $P(\\cup A_n) \\le \\sum P(A_n)$.</div>` },
        { type: "th", titre: "Continuité croissante / décroissante", contenu: `Si $A_n \\uparrow A$ : $P(A_n) \\to P(A)$. Si $A_n \\downarrow A$ : $P(A_n) \\to P(A)$.` },
      ]},
      { titre: "Probabilités conditionnelles et indépendance", cartes: [
        { type: "def", titre: "Probabilité conditionnelle", contenu: `$P_B(A) = P(A|B) = \\frac{P(A\\cap B)}{P(B)}$ (pour $P(B) > 0$). $P(\\cdot|B)$ est une probabilité sur $(\\Omega,\\mathcal{A})$.` },
        { type: "def", titre: "Événements indépendants", contenu: `$A$ et $B$ indépendants si $P(A\\cap B) = P(A)P(B)$.<br>
$A_1,\\dots,A_n$ mutuellement indépendants si pour tout $I \\subset \\{1,\\dots,n\\}$ : $P\\left(\\bigcap_{i\\in I} A_i\\right) = \\prod_{i\\in I} P(A_i)$</div>` },
        { type: "th", titre: "Formule des probabilités totales", contenu: `Pour $\\{A_i\\}$ système complet d'événements de prob. non nulles :
$$P(B) = \\sum P(A_i)P(B|A_i)$$` },
        { type: "th", titre: "Formule de Bayes", contenu: `$$P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum_j P(A_j)P(B|A_j)}$$` },
        { type: "th", titre: "Formule des probabilités composées", contenu: `$P(A_1\\cap\\dots\\cap A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1\\cap A_2)\\dots P(A_n|A_1\\cap\\dots\\cap A_{n-1})$` },
      ]},
    ]
  },
  {
    id: "ma-va", matiere: "ma", titre: "Variables aléatoires discrètes", ordre: 15,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Loi, espérance, variance", cartes: [
        { type: "def", titre: "Variable aléatoire discrète", contenu: `Application $X : \\Omega \\to E$ avec $X(\\Omega)$ fini ou dénombrable et $X^{-1}(\\{x\\}) \\in \\mathcal{A}$ pour tout $x$. Loi : famille $(P(X=x))_{x\\in X(\\Omega)}$, de somme $1$.` },
        { type: "def", titre: "Indépendance de VA", contenu: `$X$ et $Y$ indépendantes si $\\forall(A,B), P((X\\in A)\\cap(Y\\in B)) = P(X\\in A)P(Y\\in B)$<br>$\\iff \\forall(x,y), P(X=x,Y=y) = P(X=x)P(Y=y)$</div>` },
        { type: "th", titre: "Formule de transfert", contenu: `$E(f(X)) = \\sum_{x\\in X(\\Omega)} f(x)P(X=x)$` },
        { type: "prop", titre: "Propriétés de l'espérance", contenu: `Linéarité. Positivité. Croissance. Si $X$ et $Y$ indépendantes : $E(XY) = E(X)E(Y)$.` },
        { type: "def", titre: "Variance et écart-type", contenu: `$V(X) = E((X-E(X))^2) = E(X^2)-E(X)^2$<br>
$V(aX+b) = a^2 V(X)$ &nbsp;·&nbsp; $\\sigma(X) = \\sqrt{V(X)}$</div>` },
        { type: "th", titre: "Variance d'une somme — covariance", contenu: `$\\operatorname{cov}(X,Y) = E(XY)-E(X)E(Y)$<br>
$V(X+Y) = V(X)+V(Y)+2\\operatorname{cov}(X,Y)$<br>
$X,Y$ indépendantes $\\implies \\operatorname{cov}(X,Y)=0$ (réciproque fausse).<br>
Si $X_1,\\dots,X_p$ 2-à-2 indép. : $V\\left(\\sum X_i\\right) = \\sum V(X_i)$</div></div>
</div>` },
      ]},
      { titre: "Inégalités et loi faible des grands nombres", cartes: [
        { type: "th", titre: "Inégalité de Markov", contenu: `Pour $X$ à valeurs positives, $\\lambda > 0$ : $P(X \\ge \\lambda) \\le \\frac{E(X)}{\\lambda}$` },
        { type: "th", titre: "Inégalité de Bienaymé-Tchebychev", contenu: `Pour $\\varepsilon > 0$ : $P(|X-E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$` },
        { type: "th", titre: "Loi faible des grands nombres", contenu: `Pour $(X_n)$ suite de VA 2-à-2 indép., même loi, dans $L^2$, $m = E(X_1)$ :
$$\\lim_{n\\to+\\infty} P\\left(\\left|\\frac{S_n}{n} - m\\right| \\ge \\varepsilon\\right) = 0 \\quad \\text{pour tout } \\varepsilon > 0$$` },
        { type: "th", titre: "Inégalité de Cauchy-Schwarz (VA)", contenu: `Si $X,Y \\in L^2$ : $E(XY)^2 \\le E(X^2)E(Y^2)$` },
      ]},
      { titre: "Fonctions génératrices et lois usuelles", cartes: [
        { type: "def", titre: "Série génératrice", contenu: `Pour $X$ à valeurs dans $\\mathbb{N}$ : $G_X(t) = \\sum_{n \\ge 0} P(X=n)t^n = E(t^X)$ (converge sur $[-1,1]$)<br>
Deux VA de même série génératrice ont même loi.<br>
$E(X) = G'_X(1)$ &nbsp;·&nbsp; $V(X) = G''_X(1)+G'_X(1)-G'_X(1)^2$</div></div>` },
        { type: "th", titre: "Génératrice d'une somme", contenu: `Si $X,Y$ indépendantes : $G_{X+Y} = G_X G_Y$` },
        { type: "form", titre: "Lois usuelles (tableau)", contenu: `Bernoulli $\\mathcal{B}(p)$ : $P(X=1)=p$, $E=p$, $V=p(1-p)$, $G=(1-p+pt)$<br>
Binomiale $\\mathcal{B}(n,p)$ : $P(X=k)=\\binom{n}{k} p^k(1-p)^{n-k}$, $E=np$, $V=np(1-p)$, $G=(pt+1-p)^n$<br>
Poisson $\\mathcal{P}(\\lambda)$ : $P(X=k)=\\e^{-\\lambda}\\frac{\\lambda^k}{k!}$, $E=\\lambda$, $V=\\lambda$, $G=\\e^{\\lambda(t-1)}$<br>
Géométrique $\\mathcal{G}(p)$ : $P(X=k)=(1-p)^{k-1}p$, $E=\\frac{1}{p}$, $V=\\frac{1-p}{p^2}$, $G=\\frac{pt}{1-(1-p)t}$<br>
Uniforme $\\mathcal{U}([\\![1,n]\\!])$ : $E=\\frac{n+1}{2}$, $V=\\frac{n^2-1}{12}$<br>
Formule antirépartition : $E(X) = \\sum_{n \\ge 1} P(X \\ge n)$</div></div>` },
        { type: "th", titre: "Stabilité par convolution", contenu: `$X\\sim\\mathcal{B}(n,p)$, $Y\\sim\\mathcal{B}(m,p)$ indép. $\\implies X+Y\\sim\\mathcal{B}(n+m,p)$<br>
$X\\sim\\mathcal{P}(\\lambda)$, $Y\\sim\\mathcal{P}(\\mu)$ indép. $\\implies X+Y\\sim\\mathcal{P}(\\lambda+\\mu)$</div>` },
      ]},
    ]
  },
  {
    id: "ma-ann", matiere: "ma", titre: "Anneaux & Corps & K[X]", ordre: 16,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Idéaux et PGCD", cartes: [
        { type: "def", titre: "Idéal d'un anneau commutatif A", contenu: `$I \\subset A$ est un idéal si $I$ est un sous-groupe de $(A,+)$ et $\\forall x\\in I, \\forall a\\in A, ax\\in I$.` },
        { type: "prop", titre: "Idéaux de $\\mathbb{Z}$ et PGCD", contenu: `Les idéaux de $\\mathbb{Z}$ sont les $n\\mathbb{Z}$, $n \\in \\mathbb{N}$. PGCD de $(n_1,\\dots,n_p)$ = unique $d\\in\\mathbb{N}$ tel que $n_1\\mathbb{Z}+\\dots+n_p\\mathbb{Z} = d\\mathbb{Z}$.<br>
Relation de Bézout : $\\exists u_1,\\dots,u_p \\in \\mathbb{Z}$ tels que $\\sum u_i n_i = d$.</div>` },
        { type: "th", titre: "Idéaux de $\\mathbb{K}[X]$", contenu: `Les idéaux de $\\mathbb{K}[X]$ sont les $A\\mathbb{K}[X]$ pour $A \\in \\mathbb{K}[X]$. Tout idéal admet un générateur unitaire unique (PGCD).<br>
Bézout dans $\\mathbb{K}[X]$ : $\\exists A_1,\\dots,A_r$ tels que $\\operatorname{PGCD} = \\sum P_i A_i$.</div>` },
        { type: "th", titre: "Irréductibles de $\\mathbb{R}[X]$ et $\\mathbb{C}[X]$", contenu: `$\\mathbb{C}[X]$ : irréductibles = polynômes de degré 1.<br>
$\\mathbb{R}[X]$ : irréductibles = polynômes de degré 1 ou degré 2 de discriminant $\\lt 0$.</div>` },
        { type: "th", titre: "Décomposition en facteurs irréductibles", contenu: `Tout polynôme $P \\in \\mathbb{K}[X]$ non constant se décompose de façon unique (ordre des facteurs près) : $P = c\\prod P_i^{\\alpha_i}$` },
      ]},
      { titre: "$\\mathbb{Z}/n\\mathbb{Z}$ et corps finis", cartes: [
        { type: "th", titre: "Inversibles dans $\\mathbb{Z}/n\\mathbb{Z}$", contenu: `$k$ inversible dans $\\mathbb{Z}/n\\mathbb{Z} \\iff k \\land n = 1$. $\\mathbb{Z}/n\\mathbb{Z}$ est un corps $\\iff n$ premier.` },
        { type: "th", titre: "Théorème chinois des restes", contenu: `Si $m$ et $n$ premiers entre eux : $\\mathbb{Z}/mn\\mathbb{Z} \\simeq \\mathbb{Z}/n\\mathbb{Z} \\times \\mathbb{Z}/m\\mathbb{Z}$ (isomorphisme d'anneaux).` },
        { type: "th", titre: "Théorème d'Euler — indicatrice d'Euler", contenu: `$\\varphi(n) = |\\{k \\in [\\![1,n]\\!] : k \\land n = 1\\}|$. Pour $a \\land n = 1$ : $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$<br>
$\\varphi(p^k) = p^k - p^{k-1}$. $\\varphi$ multiplicative. $\\varphi(n) = n\\prod_{p|n}\\left(1-\\frac{1}{p}\\right)$</div>` },
      ]},
    ]
  },
  {
    id: "ma-gr", matiere: "ma", titre: "Compléments sur les groupes", ordre: 17,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","tsi","ptsi","pt","bcpst"],
    sections: [
      { titre: "Sous-groupes engendrés", cartes: [
        { type: "th", titre: "Intersection de sous-groupes", contenu: `Toute intersection de sous-groupes de $G$ est un sous-groupe de $G$.` },
        { type: "def", titre: "Sous-groupe engendré", contenu: `$\\langle A\\rangle$ = plus petit sous-groupe de $G$ contenant $A$. $G$ est monogène s'il est engendré par un élément, cyclique s'il est monogène et fini.` },
        { type: "prop", titre: "Sous-groupes de $\\mathbb{Z}$", contenu: `Les sous-groupes de $(\\mathbb{Z},+)$ sont les $n\\mathbb{Z}$, $n \\in \\mathbb{N}$.` },
        { type: "th", titre: "Classification des groupes monogènes", contenu: `Tout groupe monogène infini est isomorphe à $(\\mathbb{Z},+)$.<br>
Tout groupe cyclique de cardinal $n$ est isomorphe à $(\\mathbb{Z}/n\\mathbb{Z},+)$.</div>` },
      ]},
      { titre: "Ordre d'un élément", cartes: [
        { type: "def", titre: "Ordre d'un élément", contenu: `$x$ d'ordre fini si $\\langle x\\rangle$ est fini. L'ordre est le cardinal de $\\langle x\\rangle$.` },
        { type: "prop", titre: "Propriétés de l'ordre", contenu: `Si $x$ est d'ordre $r$ : $x^r = e$. Si $x^n = e$ : l'ordre de $x$ divise $n$.` },
        { type: "th", titre: "Théorème de Lagrange (groupes finis)", contenu: `Dans un groupe fini $G$, l'ordre de tout élément divise $|G|$.` },
      ]},
    ]
  },
  {
    id: "ch-ch-thermo", matiere: "ch", titre: "Thermodynamique chimique", ordre: 1,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Fonctions d'état thermochimiques", cartes: [
        { type: "def", titre: "Enthalpie standard de réaction", contenu: `Pour $\\sum_i \\nu_i A_i = 0$ ($\\nu_i > 0$ pour les produits) :
$$\\Delta_r H^\\circ = \\sum_i \\nu_i \\Delta_f H^\\circ(A_i)$$
Relation de Hess : $\\Delta_r H^\\circ$ est additive sur des réactions que l'on combine algébriquement.` },
        { type: "def", titre: "Enthalpie standard de formation", contenu: `$\\Delta_f H^\\circ$ : enthalpie de la réaction de formation d'une mole de composé à partir des corps simples dans leur état standard à 298 K. Convention : $\\Delta_f H^\\circ = 0$ pour les corps simples dans leur état de référence.` },
        { type: "form", titre: "Loi de Kirchhoff", contenu: `$$\\frac{\\mathrm{d}(\\Delta_r H^\\circ)}{\\mathrm{d}T} = \\Delta_r C_p^\\circ = \\sum_i \\nu_i C_{p,i}^\\circ$$
Forme intégrée : $\\Delta_r H^\\circ(T_2) = \\Delta_r H^\\circ(T_1) + \\int_{T_1}^{T_2} \\Delta_r C_p^\\circ \\, \\mathrm{d}T$` },
        { type: "def", titre: "Énergie de Gibbs et constante d'équilibre", contenu: `$$\\Delta_r G^\\circ = \\Delta_r H^\\circ - T\\Delta_r S^\\circ = -RT\\ln K^\\circ$$
Entropie absolue (3e principe) : $S^\\circ_m \\ge 0$, nulle pour un cristal parfait à 0 K.<br>
$\\Delta_r S^\\circ = \\sum_i \\nu_i S^\\circ_m(A_i)$</div>` },
      ]},
      { titre: "Potentiel chimique et équilibre", cartes: [
        { type: "def", titre: "Potentiel chimique et activité", contenu: `$$\\mu_i = \\mu_i^\\circ + RT\\ln a_i$$
Gaz parfait : $a_i = P_i/P^\\circ$ &nbsp;·&nbsp; Soluté dilué : $a_i = c_i/c^\\circ$ &nbsp;·&nbsp; Solvant pur ou solide pur : $a_i = 1$` },
        { type: "def", titre: "Quotient de réaction $Q_r$", contenu: `$$Q_r = \\prod_i a_i^{\\nu_i} \\qquad \\Delta_r G = \\Delta_r G^\\circ + RT\\ln Q_r$$
Équilibre : $Q_r = K^\\circ$. &nbsp;Si $Q_r < K^\\circ$ : sens direct. &nbsp;Si $Q_r > K^\\circ$ : sens indirect.</div>` },
        { type: "th", titre: "Loi de van't Hoff", contenu: `$$\\frac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{RT^2}$$
Forme intégrée : $\\ln\\dfrac{K^\\circ(T_2)}{K^\\circ(T_1)} = -\\dfrac{\\Delta_r H^\\circ}{R}\\!\\left(\\dfrac{1}{T_2}-\\dfrac{1}{T_1}\\right)$<br>
Endothermique : $K^\\circ$ croît avec $T$. Exothermique : $K^\\circ$ décroît.</div>` },
        { type: "prop", titre: "Règle de Le Chatelier & Couplage", contenu: `Tout système à l'équilibre soumis à une perturbation évolue dans le sens qui la modère. Couplage : $\\Delta_r G^\\circ_{\\text{global}} = \\Delta_r G^\\circ_1 + \\Delta_r G^\\circ_2$. Un couplage très exergonique ($\\Delta_r G^\\circ_2 \\ll 0$) peut rendre une réaction endergonique spontanée.` },
      ]},
      { titre: "Diagrammes d'Ellingham", cartes: [
        { type: "def", titre: "Diagramme d'Ellingham", contenu: `Représentation de $\\Delta_r G^\\circ(T)$ vs $T$ pour des réactions d'oxydation normalisées à 1 mol de $O_2$. Pente $= -\\Delta_r S^\\circ$ (généralement négative : $\\Delta_r G^\\circ$ augmente avec $T$). Le métal dont la droite est la plus basse à une température donnée réduit les oxydes situés au-dessus.` },
      ]},
    ]
  },
  {
    id: "ch-ch-cinetique", matiere: "ch", titre: "Cinétique chimique", ordre: 2,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Définitions", cartes: [
        { type: "def", titre: "Vitesse de réaction", contenu: `Pour une réaction homogène en solution à volume constant :
$$v = \\frac{1}{\\nu_i}\\frac{\\mathrm{d}[A_i]}{\\mathrm{d}t} \\ge 0$$
$v$ est positive ; $\\nu_i$ est algébrique (négatif pour les réactifs, positif pour les produits).` },
        { type: "def", titre: "Loi de vitesse — ordre de réaction", contenu: `Si $v = k(T)\\cdot[A]^\\alpha[B]^\\beta\\cdots$ : ordre $\\alpha$ par rapport à $A$, ordre global $n = \\alpha+\\beta+\\cdots$.<br>
Unité de $k$ : $\\mathrm{mol}^{1-n}\\cdot\\mathrm{L}^{n-1}\\cdot\\mathrm{s}^{-1}$. L'ordre ne se déduit pas de la stœchiométrie.</div>` },
        { type: "form", titre: "Loi d'Arrhenius", contenu: `$$k(T) = A\\,\\exp\\!\\left(-\\frac{E_a}{RT}\\right)$$
Linéarisation : $\\ln k = \\ln A - \\dfrac{E_a}{R}\\cdot\\dfrac{1}{T}$ (pente $= -E_a/R$ dans le graphe $\\ln k$ vs $1/T$).` },
      ]},
      { titre: "Ordres simples — intégration", cartes: [
        { type: "form", titre: "Ordre 1 : $v = k[A]$", contenu: `$$[A](t) = [A]_0\\,\\mathrm{e}^{-kt} \\qquad t_{1/2} = \\frac{\\ln 2}{k}$$
Identification : $\\ln[A]$ linéaire en $t$. Demi-vie indépendante de $[A]_0$.` },
        { type: "form", titre: "Ordre 2 : $v = k[A]^2$", contenu: `$$\\frac{1}{[A](t)} = \\frac{1}{[A]_0} + kt \\qquad t_{1/2} = \\frac{1}{k[A]_0}$$
Identification : $1/[A]$ linéaire en $t$. Demi-vie dépend de $[A]_0$.` },
        { type: "form", titre: "Ordre 0 : $v = k$", contenu: `$$[A](t) = [A]_0 - kt \\qquad t_{1/2} = \\frac{[A]_0}{2k}$$` },
      ]},
      { titre: "Méthodes et approximations", cartes: [
        { type: "prop", titre: "Dégénérescence de l'ordre", contenu: `Si $[B]\\gg[A]$ : $v\\approx k_{\\mathrm{app}}[A]^\\alpha$ avec $k_{\\mathrm{app}}=k[B]^\\beta$. Permet de déterminer l'ordre partiel en $A$, puis en $B$ par une seconde expérience en excès de $A$.` },
        { type: "prop", titre: "AEQS — Approximation de l'état quasi-stationnaire", contenu: `Pour un intermédiaire réactionnel $I$ en faible concentration :
$$\\frac{\\mathrm{d}[I]}{\\mathrm{d}t} \\approx 0$$
Élimine $[I]$ et donne la loi de vitesse en fonction des seuls réactifs.` },
        { type: "prop", titre: "Étape cinétiquement déterminante (ECD)", contenu: `Si une étape élémentaire est beaucoup plus lente que toutes les autres, elle impose sa loi de vitesse. Les étapes rapides antérieures sont traitées à l'équilibre (pré-équilibre). La loi de vitesse globale est celle de l'ECD.` },
        { type: "def", titre: "Catalyse — Michaelis-Menten", contenu: `Un catalyseur abaisse l'énergie d'activation sans modifier $K^\\circ$. Catalyse enzymatique : $v = \\dfrac{v_{\\max}[S]}{K_M+[S]}$ ($K_M$ : constante de Michaelis). Deux régimes : $[S]\\ll K_M$ (ordre 1) et $[S]\\gg K_M$ (ordre 0, vitesse maximale).` },
      ]},
    ]
  },
  {
    id: "ch-ch-acido", matiere: "ch", titre: "Équilibres acido-basiques", ordre: 3,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Définitions", cartes: [
        { type: "def", titre: "Couple acide-base de Brønsted", contenu: `$$AH \\rightleftharpoons A^- + H^+ \\qquad K_a = \\frac{[A^-][H^+]}{[AH]} \\qquad pK_a = -\\log K_a$$
Acide fort : $K_a\\to+\\infty$, dissociation totale. Force : $pK_a$ petit $\\Rightarrow$ acide fort.` },
        { type: "prop", titre: "Produit ionique de l'eau", contenu: `$$K_e = [H^+][OH^-] = 10^{-14} \\text{ à } 25{°}C \\qquad pK_e = 14$$
Neutre : $pH = 7$. Acide : $pH < 7$. Basique : $pH > 7$ (à 25°C).</div>` },
        { type: "form", titre: "Relation $K_a \\cdot K_b = K_e$", contenu: `$$pK_a + pK_b = pK_e = 14 \\quad \\text{(à 25°C)}$$` },
      ]},
      { titre: "Calcul de pH", cartes: [
        { type: "form", titre: "Acide fort / Base forte", contenu: `Acide fort $C$ (si $C\\gg10^{-7}$) : $pH = -\\log C$<br>
Base forte $C$ : $pH = 14+\\log C$</div>` },
        { type: "form", titre: "Acide faible de concentration $C$", contenu: `Si $C\\gg K_a$ (taux de dissociation $\\tau=\\sqrt{K_a/C}\\ll1$) :
$$pH \\approx \\frac{1}{2}(pK_a - \\log C)$$
Validité : $C/K_a > 400$. Sinon résoudre $[H^+]^2+K_a[H^+]-K_aC=0$.` },
        { type: "form", titre: "Solution tampon — Henderson-Hasselbalch", contenu: `Mélange $AH$ ($C_a$) et $A^-$ ($C_b$) :
$$pH = pK_a + \\log\\frac{C_b}{C_a}$$
Zone tampon efficace : $|pH-pK_a|<1$. Demi-équivalence d'un titrage : $pH = pK_a$.</div></div>` },
        { type: "form", titre: "Base faible / Ampholyte", contenu: `Base faible $A^-$ de concentration $C$ (si $C\\gg K_b$) :
$$pH \\approx \\frac{1}{2}(pK_e + pK_a + \\log C)$$
Ampholyte $HA^-$ d'un diacide ($pK_{a1},pK_{a2}$) : $pH \\approx \\dfrac{pK_{a1}+pK_{a2}}{2}$` },
      ]},
      { titre: "Titrages", cartes: [
        { type: "prop", titre: "pH aux points remarquables", contenu: `Acide fort / Base forte : $pH_{éq}=7$<br>
Acide faible / Base forte : $pH_{éq}=\\frac{1}{2}(pK_e+pK_a)$ (basique)<br>
Base faible / Acide fort : $pH_{éq}=\\frac{1}{2}pK_a$ (acide)</div></div>` },
        { type: "prop", titre: "Indicateurs colorés", contenu: `Zone de virage : $[pK_{In}-1\\,;\\,pK_{In}+1]$. Choisir l'indicateur dont la zone contient le pH à l'équivalence.` },
      ]},
    ]
  },
  {
    id: "ch-ch-redox", matiere: "ch", titre: "Oxydo-réduction", ordre: 4,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Généralités", cartes: [
        { type: "def", titre: "Couple oxydant / réducteur", contenu: `Demi-équation de réduction : $\\mathrm{Ox} + n\\,e^- \\rightleftharpoons \\mathrm{Red}$<br>
Oxydant : capte des électrons (se réduit). Réducteur : cède des électrons (s'oxyde). Nombre d'oxydation : charge formelle obtenue en attribuant les électrons à l'atome le plus électronégatif.</div>` },
        { type: "form", titre: "Équation de Nernst", contenu: `$$E = E^\\circ + \\frac{RT}{nF}\\ln\\frac{a_{\\mathrm{Ox}}}{a_{\\mathrm{Red}}} \\approx E^\\circ + \\frac{0{,}059}{n}\\log\\frac{[\\mathrm{Ox}]}{[\\mathrm{Red}]} \\quad (25{°}C)$$
$F = 96485$ C/mol &nbsp;·&nbsp; $R/F = 8{,}617\\times10^{-5}$ V/K` },
        { type: "prop", titre: "Règle du gamma — sens d'évolution", contenu: `L'oxydant du couple de potentiel le plus élevé réagit spontanément avec le réducteur du couple le plus bas. Réaction possible si $\\Delta E^\\circ = E^\\circ_{\\mathrm{Ox}_1}-E^\\circ_{\\mathrm{Ox}_2} > 0$.` },
        { type: "form", titre: "Constante d'équilibre d'une réaction redox", contenu: `$$\\log K^\\circ = \\frac{n\\,\\Delta E^\\circ}{0{,}059} \\quad (25{°}C) \\qquad \\Delta_r G^\\circ = -nF\\Delta E^\\circ$$` },
      ]},
      { titre: "Électrochimie", cartes: [
        { type: "def", titre: "Pile électrochimique", contenu: `Borne $+$ (cathode) : réduction. Borne $-$ (anode) : oxydation. FEM : $E = E_+-E_- > 0$. Travail électrique : $|W_{\\mathrm{él}}| = nFE$ par mole.` },
        { type: "prop", titre: "Électrolyse — loi de Faraday", contenu: `Réaction forcée par un courant imposé. Cathode : réduction. Anode : oxydation.
$$m = \\frac{MIt}{nF}$$
$M$ : masse molaire, $I$ : courant (A), $t$ : durée (s), $n$ : électrons échangés.` },
      ]},
      { titre: "Diagrammes potentiel-pH (Pourbaix)", cartes: [
        { type: "prop", titre: "Frontières dans un diagramme E-pH", contenu: `Frontière horizontale : pas de proton, $E$ indépendant du pH.<br>
Frontière verticale : pas d'électron, équilibre acido-basique pur ($pH = pK_a$).<br>
Frontière oblique : pente $= -0{,}059\\,p/n$ ($p$ = nb de $H^+$ par électron).</div></div>` },
        { type: "prop", titre: "Domaine de stabilité de l'eau", contenu: `Limite supérieure ($O_2/H_2O$) : $E = 1{,}23 - 0{,}059\\,pH$ V<br>
Limite inférieure ($H_2O/H_2$) : $E = -0{,}059\\,pH$ V<br>
Réducteur sous la limite basse : réduit l'eau. Oxydant au-dessus : oxyde l'eau.</div></div>` },
      ]},
    ]
  },
  {
    id: "ch-ch-precip", matiere: "ch", titre: "Précipitation & Complexation", ordre: 5,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Équilibres de précipitation", cartes: [
        { type: "def", titre: "Produit de solubilité $K_s$", contenu: `Pour $M_p X_q(s) \\rightleftharpoons p\\,M^{n+}(aq) + q\\,X^{m-}(aq)$ :
$$K_s = [M^{n+}]^p[X^{m-}]^q$$
Solubilité $s$ : $K_s = p^p q^q s^{p+q}$ &nbsp;·&nbsp; Précipitation si produit ionique $Q > K_s$.` },
        { type: "prop", titre: "Effet d'ion commun", contenu: `La présence d'un ion commun à concentration $c$ réduit la solubilité. Si $c\\gg s$ : $s\\approx K_s/c^q$. Utilisé pour précipiter quantitativement un ion.` },
        { type: "prop", titre: "Influence du pH sur la solubilité", contenu: `Si $X^{m-}$ est une base faible, la solubilité augmente quand le pH diminue (protonation de $X^{m-}$, équilibre déplacé vers la dissolution). Ex : $\\mathrm{CaCO_3}$ se dissout dans les acides.` },
      ]},
      { titre: "Complexation", cartes: [
        { type: "def", titre: "Constante de formation $\\beta_n$", contenu: `Formation globale $M + nL \\rightleftharpoons ML_n$ :
$$\\beta_n = \\frac{[ML_n]}{[M][L]^n} = \\prod_{i=1}^n K_i$$
$K_i$ : constante de formation successive de rang $i$.` },
        { type: "prop", titre: "Compétition précipitation / complexation", contenu: `Un ligand dissout un précipité si $K_s\\cdot\\beta_n\\cdot[L]^n > 1$. Constante globale de dissolution-complexation : $K = K_s\\cdot\\beta_n$.` },
        { type: "def", titre: "Chélates — EDTA", contenu: `Chélate : complexe formé par un ligand polydenté. L'EDTA ($H_4Y$) est hexadenté (2N + 4O), forme des complexes 1:1 très stables ($\\log\\beta_1\\sim 8$–$20$) avec la plupart des métaux. Utilisé en dosages complexométriques.` },
      ]},
    ]
  },
  {
    id: "ch-ch-structure", matiere: "ch", titre: "Structure de la matière", ordre: 6,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Atome et orbitales", cartes: [
        { type: "def", titre: "Nombres quantiques", contenu: `$n\\ge1$ (couche) &nbsp;·&nbsp; $0\\le l\\le n-1$ (sous-couche : $s,p,d,f$) &nbsp;·&nbsp; $-l\\le m_l\\le l$ (orbitale) &nbsp;·&nbsp; $m_s=\\pm\\frac{1}{2}$ (spin)` },
        { type: "prop", titre: "Règles de remplissage", contenu: `Pauli : 4 nombres quantiques distincts par électron. Klechkowski : remplissage par $(n+l)$ croissant puis $n$ croissant. Hund : multiplicité de spin maximale (spins parallèles dans les orbitales dégénérées).` },
        { type: "form", titre: "Niveaux d'énergie de l'hydrogène", contenu: `$$E_n = -\\frac{E_1}{n^2} \\quad E_1 = 13{,}6\\text{ eV} \\qquad \\bar\\nu = R_H\\!\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)$$
$R_H = 1{,}097\\times10^7$ m$^{-1}$` },
      ]},
      { titre: "Liaison chimique", cartes: [
        { type: "def", titre: "VSEPR — géométrie moléculaire", contenu: `Notation $AX_nE_m$ : paires liantes $X$, paires libres $E$. Répulsions $E{-}E > E{-}X > X{-}X$.<br>
$AX_2$ : linéaire (180°) &nbsp;·&nbsp; $AX_3$ : plan trigonal (120°) &nbsp;·&nbsp; $AX_4$ : tétraédrique (109,5°)<br>
$AX_3E$ : pyramidale &nbsp;·&nbsp; $AX_2E_2$ : angulaire &nbsp;·&nbsp; $AX_6$ : octaédrique</div></div>` },
        { type: "def", titre: "Hybridation des OA", contenu: `$sp^3$ : 4 liaisons $\\sigma$, angle 109,5°, tétraédrique. &nbsp;$sp^2$ : 3 liaisons $\\sigma$ + 1 liaison $\\pi$, plan, 120°. &nbsp;$sp$ : 2 liaisons $\\sigma$ + 2 liaisons $\\pi$, linéaire, 180°.` },
        { type: "def", titre: "Théorie des OM (CLOA)", contenu: `Chaque paire d'OA donne une OM liante + une OM antiliante. Indice de liaison : $b = \\frac{1}{2}(N_l-N_{al})$. Ordre des OM pour les homodiatomiques ($Z\\le7$) : $\\sigma_{1s}&lt;\\sigma^*_{1s}&lt;\\sigma_{2s}&lt;\\sigma^*_{2s}&lt;\\pi_{2p}&lt;\\sigma_{2p}&lt;\\pi^*_{2p}&lt;\\sigma^*_{2p}$` },
        { type: "prop", titre: "Électronégativité et interactions intermoléculaires", contenu: `Pauling : $F(4{,}0)>O(3{,}4)>N(3{,}0)\\approx Cl(3{,}2)>Br(3{,}0)>C(2{,}5)>H(2{,}1)$. Liaison polaire si $\\Delta\\chi>0{,}4$.<br>
Liaison hydrogène $X{-}H\\cdots Y$ ($X,Y\\in\\{F,O,N\\}$) : ~20 kJ/mol.<br>
London (dispersion) : $\\propto\\alpha^2/r^6$, universelles, dominantes pour grandes molécules apolaires.</div></div>` },
      ]},
    ]
  },
  {
    id: "ch-ch-cristallo", matiere: "ch", titre: "Cristallographie", ordre: 7,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Réseaux et mailles", cartes: [
        { type: "form", titre: "Structures cubiques — bilan", contenu: `Cubique simple (CS) : $Z=1$, $r=a/2$, coord. 6, compacité $\\approx52\\%$<br>
Cubique centré (CC) : $Z=2$, $4r=a\\sqrt3$, coord. 8, compacité $\\approx68\\%$<br>
Cubique faces centrées (CFC) : $Z=4$, $4r=a\\sqrt2$, coord. 12, compacité $\\approx74\\%$<br>
($Z$ = nb d'atomes par maille, $r$ = rayon atomique, $a$ = paramètre de maille)</div></div>` },
        { type: "form", titre: "Sites interstitiels (CFC)", contenu: `Sites octaédriques : $r/R=0{,}414$, nombre $= Z = 4$ par maille.<br>
Sites tétraédriques : $r/R=0{,}225$, nombre $= 2Z = 8$ par maille.<br>
Cristaux ioniques : coordinence déterminée par le rapport $r_+/r_-$.</div></div>` },
        { type: "prop", titre: "Cycle de Born-Haber", contenu: `Calcule l'énergie de réseau d'un solide ionique par loi de Hess : $\\Delta_f H^\\circ = E_{\\mathrm{sub}} + E_{\\mathrm{diss}} + \\sum E_I - \\sum A_e - E_{\\mathrm{rés}}$. Permet d'obtenir $E_{\\mathrm{rés}}$ non mesurable directement.` },
      ]},
      { titre: "Diffraction des rayons X", cartes: [
        { type: "th", titre: "Loi de Bragg", contenu: `$$2\\,d_{hkl}\\sin\\theta = n\\lambda \\qquad d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}} \\text{ (cubique)}$$
$\\theta$ : angle de Bragg, $\\lambda$ : longueur d'onde des rayons X, $n\\in\\mathbb{N}^*$.` },
        { type: "prop", titre: "Règles d'extinction systématique", contenu: `CFC : extinctions si $(h,k,l)$ de parités mixtes.<br>
CC : extinctions si $h+k+l$ impair.<br>
CS : pas d'extinction systématique.</div></div>` },
      ]},
    ]
  },
  {
    id: "ch-ch-orga", matiere: "ch", titre: "Chimie organique", ordre: 8,
    filieres: ["mp","mpsi","pc","pcsi","bcpst"],
    sections: [
      { titre: "Stéréochimie", cartes: [
        { type: "def", titre: "Isoméries et stéréocentres", contenu: `Isomérie de constitution : même formule brute, enchaînement différent. Stéréoisomères : même enchaînement, disposition spatiale différente.<br>
Centre stéréogène $sp^3$ : 4 substituants différents. Configuration $R/S$ : règles CIP (priorité par numéro atomique). Énantiomères ($\\alpha$ et $-\\alpha$) : images miroir non superposables. Diastéréoisomères : stéréoisomères non énantiomères.</div>` },
        { type: "def", titre: "Isomérie $Z/E$ — Conformations", contenu: `$Z/E$ (alcènes) : $Z$ si substituants prioritaires (CIP) du même côté du plan de la double liaison, $E$ sinon. La double liaison est rigide (pas de rotation libre).<br>
Cyclohexane : conformation chaise stable (6 ax + 6 éq). Substituants équatoriaux préférés (moins de gêne 1,3-diaxiale).</div>` },
      ]},
      { titre: "Réactivité des fonctions", cartes: [
        { type: "def", titre: "Addition électrophile sur les alcènes", contenu: `$E^+$ s'additionne sur le C le moins substitué (carbocation le plus stable $\\Rightarrow$ règle de Markovnikov). $Br_2$ : stéréochimie anti (via ion bromonium). Hydrogénation ($H_2$/Pd) : addition syn.` },
        { type: "def", titre: "Substitution nucléophile $S_N$", contenu: `$S_N 2$ : bimoléculaire, inversion de Walden, $v = k[R\\text{-}X][Nu]$, favorisée sur carbone primaire non encombré.<br>
$S_N 1$ : carbocation intermédiaire, $v = k[R\\text{-}X]$, favorisée sur carbone tertiaire, racémisation partielle.</div>` },
        { type: "def", titre: "Élimination $E1$ et $E2$", contenu: `$E2$ : bimoléculaire, anti-périplanaire, $v = k[R\\text{-}X][B]$. Zaïtsev : alcène le plus substitué (le plus stable). Hofmann : base encombrée $\\Rightarrow$ alcène le moins substitué.<br>
$E1$ : via carbocation, compète avec $S_N 1$. Favorisé par $T$ élevée, base faible.</div>` },
        { type: "def", titre: "Addition nucléophile sur $C{=}O$ — Dérivés d'acide", contenu: `Aldéhydes/cétones : attaque $Nu^-$ sur le carbone électrophile. Réactivité : $\\mathrm{RCHO} > \\mathrm{RCOR'}$.<br>
Dérivés d'acide (addition-élimination) : $\\text{chlorure} > \\text{anhydride} > \\text{ester} > \\text{acide} > \\text{amide}$</div>` },
        { type: "def", titre: "Aromaticité — SEAr", contenu: `Règle de Hückel : $4n+2$ électrons $\\pi$ ($n\\in\\mathbb{N}$), cyclique plan conjugué.<br>
SEAr : complexe $\\sigma$ (arénonium) puis déprotonation. Donneurs $+M$ : orienteurs ortho/para (activants). Attracteurs $-M$ : orienteurs méta (désactivants). Exception : halogènes (désactivants mais ortho/para).</div>` },
      ]},
      { titre: "Grandes réactions à maîtriser", cartes: [
        { type: "form", titre: "Réactions clés de synthèse", contenu: `Grignard : $R\\text{-}MgX + C{=}O \\xrightarrow{H_2O}$ alcool (addition $Nu$ sur carbonyle)<br>
Estérification-Fischer : $R\\text{-}COOH + R'OH \\rightleftharpoons R\\text{-}COOR' + H_2O$ &nbsp;($K\\approx4$, équilibre)<br>
Saponification : $R\\text{-}COOR' + HO^- \\to R\\text{-}COO^- + R'OH$ (totale, irréversible)<br>
Acylation Friedel-Crafts : $ArH + RCOCl \\xrightarrow{AlCl_3} Ar\\text{-}COR + HCl$<br>
Réduction LiAlH$_4$ : acides, esters, amides, nitriles $\\to$ alcools / amines<br>
Oxydation Jones : alcool $1°\\to$ acide ; $2°\\to$ cétone ; $3°$ inerte<br>
Condensation aldolique : $2\\,RCHO \\xrightarrow{HO^-} \\beta\\text{-hydroxy-aldéhyde} \\to$ alcène conjugué (aldol)</div></div>
</div>
</div>
</div>` },
      ]},
    ]
  },
  {
    id: "si-syscont", matiere: "si", titre: "Systèmes linéaires continus invariants", ordre: 1,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-laplace", matiere: "si", titre: "Transformée de Laplace", ordre: 2,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-ftbf", matiere: "si", titre: "Schéma-blocs et fonctions de transfert", ordre: 3,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-ordre12", matiere: "si", titre: "Systèmes du 1er et 2e ordre", ordre: 4,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-bode", matiere: "si", titre: "Réponse fréquentielle — Bode", ordre: 5,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-asservi", matiere: "si", titre: "Systèmes asservis — Performances", ordre: 6,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-correcteurs", matiere: "si", titre: "Correcteurs", ordre: 7,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-cinematique", matiere: "si", titre: "Cinématique du solide indéformable", ordre: 8,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-liaisons", matiere: "si", titre: "Liaisons mécaniques", ordre: 9,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-statique", matiere: "si", titre: "Statique — PFS", ordre: 10,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-dynamique", matiere: "si", titre: "Dynamique — PFD et TEC", ordre: 11,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-transmetteurs", matiere: "si", titre: "Transmetteurs de puissance", ordre: 12,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-sequentiel", matiere: "si", titre: "Systèmes séquentiels", ordre: 13,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "si-num", matiere: "si", titre: "Méthodes numériques", ordre: 14,
    filieres: ["mp","mpsi","pc","pcsi","psi","ptsi","pt","tsi"],
    sections: [
    ]
  },
  {
    id: "info-s1", matiere: "info", titre: "Bases algorithmiques & complexité", ordre: 1,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-methprog", matiere: "info", titre: "Méthodes de programmation", ordre: 2,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-complexite", matiere: "info", titre: "Complexité formelle", ordre: 3,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-nombres", matiere: "info", titre: "Représentation des nombres", ordre: 4,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-graphes", matiere: "info", titre: "Graphes & plus courts chemins", ordre: 5,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-bdd", matiere: "info", titre: "Bases de données & SQL", ordre: 6,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-dico", matiere: "info", titre: "Dictionnaires & programmation dynamique", ordre: 7,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-ia", matiere: "info", titre: "Algorithmique IA & jeux", ordre: 8,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "info-python", matiere: "info", titre: "Annexe — Langage Python exigible", ordre: 9,
    filieres: ["mp","mpi","mpsi"],
    sections: [
    ]
  },
  {
    id: "fr-haushofer", matiere: "fr", titre: "haushofer", ordre: 1,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","ptsi","pt","tsi","bcpst"],
    sections: [
    ]
  },
  {
    id: "fr-verne", matiere: "fr", titre: "verne", ordre: 2,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","ptsi","pt","tsi","bcpst"],
    sections: [
    ]
  },
  {
    id: "fr-canguilhem", matiere: "fr", titre: "canguilhem", ordre: 3,
    filieres: ["mp","mpsi","pc","pcsi","psi","mpi","ptsi","pt","tsi","bcpst"],
    sections: [
    ]
  },
];

// Insert all chapitres, sections, cartes
let sectionId = 1;
let carteId = 1;

for (const chap of chapitresData) {
  run('INSERT OR IGNORE INTO chapitres VALUES (?, ?, ?)', [chap.id, chap.matiere, chap.titre]);

  for (const fid of chap.filieres) {
    run('INSERT OR IGNORE INTO filiere_chapitres VALUES (?, ?, ?)', [fid, chap.id, chap.ordre]);
  }

  for (let si = 0; si < chap.sections.length; si++) {
    const sec = chap.sections[si];
    run('INSERT OR IGNORE INTO sections VALUES (?, ?, ?, ?)', [sectionId, chap.id, sec.titre, si + 1]);

    for (let ci = 0; ci < sec.cartes.length; ci++) {
      const c = sec.cartes[ci];
      run('INSERT OR IGNORE INTO cartes VALUES (?, ?, ?, ?, ?, ?, ?)',
        [carteId, sectionId, c.type, c.type.toUpperCase(), c.titre, c.contenu, ci + 1]);
      carteId++;
    }
    sectionId++;
  }
}

console.log(`  → ${chapitresData.length} chapitres, ${sectionId - 1} sections, ${carteId - 1} cartes insérées.`);


// ═══════════════════════════════════════════════
// METHODES — 91 fiches méthodes extraites du site source
// ═══════════════════════════════════════════════

const methodesData = [
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Algorithme de décision pour une série", contenu: `<div class="step"><div class="step-n">1</div><div>Vérifier la <strong>CNC</strong> : si $u_n \\not\\to 0$, la série diverge. Fin.</div></div>
        <div class="step"><div class="step-n">2</div><div>Si <strong>termes positifs</strong> : comparaison, équivalent, règles de Riemann/d'Alembert/Raabe-Duhamel.</div></div>
        <div class="step"><div class="step-n">3</div><div>Si <strong>signe quelconque</strong> : tester la convergence absolue ($\\sum|u_n|$). Si oui, conclure.</div></div>
        <div class="step"><div class="step-n">4</div><div>Si <strong>alternée décroissante</strong> ($|u_n|$ décroissant $\\to 0$) : CSSA. Majoration du reste : $|R_n| \\le |u_{n+1}|$.</div></div>
        <div class="step"><div class="step-n">5</div><div>En cas d'échec : transformation d'Abel, sommation par parties, ou regroupement de termes.</div></div>
        <div class="tip">Réflexe : calculer $\\ln(u_n/u_{n+1})$ ou $u_n/v_n$ pour trouver l'équivalent adapté.</div>`, ordre: 1, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Règle de Raabe-Duhamel", contenu: `Quand d'Alembert donne $l=1$ (règle indéterminée) : poser $\\frac{u_{n+1}}{u_n} = 1 - \\frac{\\alpha}{n} + o(1/n)$.
      $$\\alpha > 1 \\implies \\text{convergence absolue} \\qquad \\alpha < 1 \\implies \\text{divergence} \\qquad \\alpha = 1 \\implies \\text{indéterminé}$$
      <strong>Exemple</strong> : $u_n = \\binom{2n}{n}/4^n \\sim 1/\\sqrt{\\pi n}$, d'Alembert $\\to 1$, Raabe donne $\\alpha = 1/2 < 1$ : diverge.</div>
    </div>`, ordre: 2, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "Équivalent de $u_n$ n'implique pas même nature", contenu: `Si $u_n \\sim v_n$ mais <strong>les deux peuvent changer de signe</strong>, on ne peut pas conclure à même nature.
      <div class="warn">$u_n = (-1)^n/n$ et $v_n = (-1)^n/n + 1/n^2$ sont équivalents, mais $\\sum u_n$ converge (CSSA) et $\\sum v_n$ diverge (harmonique).</div>
      La comparaison par équivalent n'est valide que pour des <strong>SATP</strong>.`, ordre: 3, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Calculer la somme d'une série", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Télescopage</strong> : chercher $u_n = f(n+1) - f(n)$. Somme $= f(N+1) - f(0)$.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Série géométrique</strong> : $\\sum_{n=0}^{N} aq^n = a\\frac{1-q^{N+1}}{1-q}$. Dériver ou intégrer pour obtenir d'autres sommes.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>DSE</strong> : évaluer une série entière connue en un point : $\\sum n x^n = \\frac{x}{(1-x)^2}$ pour $|x|<1$.</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Interversion</strong> (familles sommables) : $\\sum_n \\sum_m a_{n,m} = \\sum_m \\sum_n a_{n,m}$ si absolument convergente.</div></div>
        <div class="step"><div class="step-n">5</div><div><strong>Intégrale</strong> : si $u_n = \\int_0^1 f(x) x^n \\d x$, alors $\\sum u_n = \\int_0^1 \\frac{f(x)}{1-x}\\d x$ sous réserve d'interversion.</div></div>
      </div>
    </div>`, ordre: 4, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Équivalent de $S - S_n$ (reste d'une SATP)", contenu: `Si $u_n \\sim \\frac{c}{n^\\alpha}$ avec $\\alpha > 1$ (Riemann), alors par intégration de l'équivalent :
      $$R_n = \\sum_{k=n+1}^\\infty u_k \\sim \\int_n^{+\\infty} \\frac{c}{t^\\alpha} \\d t = \\frac{c}{(\\alpha-1)n^{\\alpha-1}}$$
      <strong>Attention</strong> : valable seulement si $u_n$ est monotone à partir d'un certain rang.`, ordre: 5, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "exemple", titre: "Calcul de $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$", contenu: `Décomposition en éléments simples : $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ (télescopique).
      $$S_N = \\sum_{n=1}^N \\left(\\frac{1}{n}-\\frac{1}{n+1}\\right) = 1 - \\frac{1}{N+1} \\xrightarrow[N\\to\\infty]{} 1$$
      Généralisation : $\\sum_{n=1}^\\infty \\frac{1}{n(n+k)} = \\frac{1}{k}\\sum_{j=1}^{k}\\frac{1}{j}$ par décomposition similaire.`, ordre: 6, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Familles sommables — quand intervertir ?", contenu: `<div class="step"><div class="step-n">1</div><div>Vérifier que $\\sum_{i,j} |a_{i,j}|$ est finie (Fubini discret).</div></div>
        <div class="step"><div class="step-n">2</div><div>Cas pratique : si $a_{i,j} \\ge 0$, toujours possible (Tonelli discret).</div></div>
        <div class="step"><div class="step-n">3</div><div>Produit de Cauchy : si $\\sum a_n$ et $\\sum b_n$ absolument convergentes, $\\sum c_n = \\left(\\sum a_n\\right)\\left(\\sum b_n\\right)$ où $c_n = \\sum_{k=0}^n a_k b_{n-k}$.</div></div>
        <div class="tip">Application clé : $\\left(\\sum \\frac{x^n}{n!}\\right)^2 = \\sum \\frac{(2n)!}{(n!)^2} \\frac{x^{2n}}{(2n)!}$ pour obtenir des identités sur les binômes.</div>`, ordre: 7, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Trouver un équivalent de $u_n$", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Quotient</strong> : $u_n \\sim v_n \\iff u_n/v_n \\to 1$.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Fonctions usuelles</strong> : $\\ln(1+u_n) \\sim u_n$, $\\e^{u_n}-1 \\sim u_n$, $(1+u_n)^\\alpha - 1 \\sim \\alpha u_n$ si $u_n \\to 0$.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Stirling</strong> : $n! \\sim \\sqrt{2\\pi n}(n/\\e)^n$. Utile pour les suites à factorielles.</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Taylor</strong> : développer au bon ordre pour identifier le terme dominant.</div></div>
        <div class="warn">Ne jamais écrire $u_n \\sim 0$ : l'équivalent nul n'a pas de sens. Écrire plutôt $u_n = o(v_n)$.</div>`, ordre: 8, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Cesàro et suite des moyennes", contenu: `Si $u_n \\to l$ alors $\\frac{1}{n}\\sum_{k=1}^n u_k \\to l$ (théorème de Cesàro).
      Corollaire (<strong>Cesàro géométrique</strong>) : si $u_n > 0$ et $u_n \\to l > 0$, alors $(u_1 \\cdots u_n)^{1/n} \\to l$.
      <div class="tip">Si $u_{n+1}/u_n \\to l$, alors $u_n^{1/n} \\to l$ (même limite). Utile pour trouver le rayon de convergence d'une série entière.</div>`, ordre: 9, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Étudier $\\int_a^{+\\infty} f(t)\\,\\d t$", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Identifier les singularités</strong> : en $+\\infty$, ou en un point intérieur si $f$ non bornée.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Comparaison</strong> : si $f(t) \\sim c/t^\\alpha$ en $+\\infty$, même nature que $\\int_A^{+\\infty} t^{-\\alpha}\\d t$, qui converge $\\iff \\alpha > 1$.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>En 0</strong> : si $f(t) \\sim c/t^\\alpha$, converge $\\iff \\alpha < 1$.</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Convergence absolue</strong> : si $\\int|f|$ converge, alors $\\int f$ converge.</div></div>
        <div class="step"><div class="step-n">5</div><div><strong>Intégration par parties</strong> : pour les intégrales non absolument convergentes, trouver une primitive approchée.</div></div>
        <div class="warn">$\\int_0^{+\\infty} \\sin(t)/t\\,\\d t$ converge mais pas absolument ! Ne pas conclure à la convergence absolue sans vérification.</div>
      </div>
    </div>`, ordre: 10, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Dériver sous le signe intégral — vérifications", contenu: `Pour $F(x) = \\int_J f(x,t)\\,\\d t$, $F$ est $\\mathcal{C}^1$ et $F'(x) = \\int_J \\partial_x f(x,t)\\,\\d t$ si :
        <ol>
          <li>$f(\\cdot,t)$ est $\\mathcal{C}^1$ en $x$ pour tout $t$</li>
          <li>$\\partial_x f$ est continue par morceaux en $t$</li>
          <li>Il existe $\\varphi$ <strong>intégrable</strong> sur $J$ telle que $|\\partial_x f(x,t)| \\le \\varphi(t)$ pour tout $x \\in I$, tout $t \\in J$</li>
        </ol>
        <div class="tip">En pratique : trouver $\\varphi$ ne dépendant que de $t$, bornant $|\\partial_x f|$ sur tout le segment d'étude en $x$.</div>`, ordre: 11, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "Convergence uniforme ≠ intégrabilité de la domination", contenu: `La convergence uniforme de $f_n \\to f$ sur $[a,b]$ suffit pour $\\int_a^b f_n \\to \\int_a^b f$. Mais sur un intervalle <strong>non borné</strong>, la convergence uniforme ne suffit pas : il faut aussi la domination intégrable.
      <div class="warn">Contre-exemple : $f_n(t) = \\mathbf{1}_{[n,n+1]}(t)$ converge uniformément vers 0 mais $\\int_0^\\infty f_n = 1 \\not\\to 0$.</div>`, ordre: 12, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Intégrale de Gauss et variantes", contenu: `Résultats fondamentaux à connaître :
      $$\\int_0^{+\\infty} \\e^{-t^2}\\d t = \\frac{\\sqrt{\\pi}}{2} \\quad \\int_0^{+\\infty} \\e^{-at^2}\\d t = \\frac{1}{2}\\sqrt{\\frac{\\pi}{a}} \\quad (a>0)$$
      $$\\int_0^{+\\infty} t^{n} \\e^{-t} \\d t = n! \\quad \\text{(fonction } \\Gamma\\text{)} \\qquad \\Gamma(1/2) = \\sqrt{\\pi}$$
      Dériver sous $\\int$ par rapport à $a$ donne $\\int_0^\\infty t^2 \\e^{-at^2}\\d t$, etc.`, ordre: 13, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Intégration par parties généralisée", contenu: `Pour $\\int_a^{+\\infty} f'g$ : écrire $\\int_a^A f'g = [fg]_a^A - \\int_a^A fg'$, puis faire $A \\to +\\infty$.
      La formule est valide si $fg$ a une limite finie en $+\\infty$ et si l'une des deux intégrales converge.
      <div class="tip">Usage classique : $\\int_1^\\infty \\frac{\\sin t}{t}\\d t = \\left[-\\frac{\\cos t}{t}\\right]_1^\\infty - \\int_1^\\infty \\frac{\\cos t}{t^2}\\d t$. Le premier terme vaut $\\cos(1)$ et la deuxième intégrale converge absolument.</div>`, ordre: 14, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Calculer le rayon de convergence $R$", contenu: `<div class="step"><div class="step-n">1</div><div><strong>d'Alembert</strong> : si $|a_{n+1}/a_n| \\to l$, alors $R = 1/l$ ($R=+\\infty$ si $l=0$, $R=0$ si $l=+\\infty$).</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Hadamard</strong> : $1/R = \\limsup |a_n|^{1/n}$ (toujours valide).</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Changement de variable</strong> : si la série est $\\sum a_n (x-a)^{2n}$, poser $u = (x-a)^2$, rayon en $u$ = $R'$, rayon en $x$ = $\\sqrt{R'}$.</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Opérations</strong> : $R(\\sum (a_n+b_n)x^n) \\ge \\min(R_a,R_b)$, avec égalité si $R_a \\ne R_b$. Dérivation et intégration conservent $R$.</div></div>
        <div class="warn">Le comportement <strong>sur le cercle de convergence</strong> ($|x|=R$) est à étudier à part, cas par cas.</div>`, ordre: 15, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Calculer la somme d'une série entière", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Reconnaître</strong> un DSE connu : $\\e^x$, $\\cos x$, $\\sin x$, $\\ln(1+x)$, $(1+x)^\\alpha$, $\\frac{1}{1-x}$.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Dériver/intégrer</strong> la série pour se ramener à un cas connu, puis intégrer/dériver la somme.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Identifier une EDO</strong> : si $S$ vérifie $S' = f(x,S)$, résoudre et vérifier les CI ($S(0) = a_0$).</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Décomposition</strong> : $\\sum a_n x^n + \\sum b_n x^n$ séparément si l'un est connu.</div></div>
        <div class="tip">Exemple fréquent : $\\sum_{n=1}^\\infty n x^n = x \\frac{\\d}{\\d x}\\left(\\frac{1}{1-x}\\right) = \\frac{x}{(1-x)^2}$ pour $|x|<1$.</div>
      </div>
    </div>`, ordre: 16, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Théorème d'Abel radial", contenu: `Si $\\sum a_n R^n$ converge (en $x = R$, bord du disque), alors :
      $$\\lim_{x \\to R^-} \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n R^n$$
      <strong>Application</strong> : $\\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1} = \\frac{\\pi}{4}$ en évaluant $\\arctan(x) = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ en $x=1$, valide par Abel (CSSA).`, ordre: 17, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "DSE unique mais développement en $x=a$ différent", contenu: `L'unicité du DSE dit que si $f(x) = \\sum a_n x^n$ sur $]-R,R[$, alors nécessairement $a_n = f^{(n)}(0)/n!$.
      <div class="warn">Si on développe au voisinage de $x = a \\ne 0$, les coefficients sont $f^{(n)}(a)/n!$, et le rayon de convergence change. Ne pas confondre $\\sum a_n x^n$ et $\\sum a_n (x-a)^n$.</div>`, ordre: 18, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Résoudre une EDO par série entière", contenu: `Pour $y'' + p(x)y' + q(x)y = r(x)$ avec $p,q,r$ DSE en 0 :
        <div class="step"><div class="step-n">1</div><div>Poser $y = \\sum_{n=0}^\\infty a_n x^n$ et calculer $y'$, $y''$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Substituer et identifier les coefficients de chaque puissance de $x$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Exprimer $a_{n+2}$ (ou $a_{n+1}$) en fonction des précédents : relation de récurrence.</div></div>
        <div class="step"><div class="step-n">4</div><div>Vérifier le rayon de convergence de la série obtenue.</div></div>
        <div class="tip">Les CI donnent $a_0 = y(0)$ et $a_1 = y'(0)$. L'équation détermine tous les autres $a_n$.</div>`, ordre: 19, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Montrer la convergence uniforme", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Norme sup</strong> : calculer $\\|f_n - f\\|_\\infty = \\sup_{x \\in A}|f_n(x)-f(x)|$ et montrer qu'elle tend vers 0.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Borne uniforme</strong> : trouver $M_n \\to 0$ indépendant de $x$ tel que $|f_n(x)-f(x)| \\le M_n$.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Convergence normale</strong> : si $\\sum \\|u_n\\|_\\infty < +\\infty$, la série converge normalement (donc uniformément).</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Critère de Weierstrass</strong> : si $|u_n(x)| \\le M_n$ pour tout $x$ et $\\sum M_n < +\\infty$, la série converge normalement.</div></div>
        <div class="warn">La convergence uniforme sur tout compact ne suffit pas pour la régularité sur $\\mathbb{R}$ entier. Bien préciser le domaine.</div>
      </div>
    </div>`, ordre: 20, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Intervertir limite et intégrale/dérivée", contenu: `Pour la série $S = \\sum u_n$ :
        <ul>
          <li><strong>Continuité</strong> : $u_n$ continues + convergence uniforme $\\implies S$ continue.</li>
          <li><strong>Intégration</strong> : convergence uniforme sur $[a,b]$ $\\implies \\int_a^b S = \\sum \\int_a^b u_n$.</li>
          <li><strong>Dérivation</strong> : $u_n \\in \\mathcal{C}^1$, $\\sum u_n$ converge simplement, $\\sum u_n'$ converge uniformément $\\implies S' = \\sum u_n'$.</li>
        </ul>
        <div class="tip">Pour la dérivation : la condition porte sur $\\sum u_n'$, pas sur $\\sum u_n$. Souvent la convergence normale de $\\sum u_n'$ suffit.</div>`, ordre: 21, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "La limite d'une suite de fonctions dérivables peut ne pas l'être", contenu: `Contre-exemple classique : $f_n(x) = \\sqrt{x^2 + 1/n}$ converge uniformément vers $|x|$ sur $\\mathbb{R}$, mais $|x|$ n'est pas dérivable en 0.
      <div class="warn">Il faut la convergence uniforme de $(f_n')$, pas seulement de $(f_n)$, pour conclure que la limite est dérivable.</div>`, ordre: 22, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Contre-exemple canonique de non-interversion", contenu: `$f_n(x) = n x \\e^{-nx^2}$ sur $[0,1]$ : $f_n \\to 0$ simplement, mais $\\int_0^1 f_n(x)\\d x = \\frac{1}{2}(1-\\e^{-n}) \\to 1/2 \\ne 0$.
      Cause : $\\|f_n\\|_\\infty = \\sqrt{n/4\\e} \\to +\\infty$, pas de domination uniforme. À citer systématiquement quand on justifie pourquoi on vérifie les hypothèses.`, ordre: 23, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Appliquer le TCD (Théorème de convergence dominée)", contenu: `Pour montrer que $\\int_I f_n \\to \\int_I f$ :
        <div class="step"><div class="step-n">1</div><div><strong>Convergence simple</strong> : $f_n(t) \\to f(t)$ pour (presque) tout $t \\in I$.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Domination</strong> : $|f_n(t)| \\le \\varphi(t)$ pour tout $n$ et tout $t$, avec $\\varphi$ <strong>intégrable</strong> sur $I$.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Conclure</strong> : $\\int_I f_n \\to \\int_I f$ et $\\int_I |f_n - f| \\to 0$.</div></div>
        <div class="tip">Chercher $\\varphi$ : majorer $|f_n|$ uniformément en $n$ par une fonction intégrable. Souvent $\\varphi(t) = c \\cdot g(t)$ avec $g$ référence (Riemann, exponentielle...).</div>`, ordre: 24, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Calculer une limite via le TCD", contenu: `Pour $\\lim_{x \\to a} \\int_J f(x,t)\\d t$ :
        <div class="step"><div class="step-n">1</div><div>Prendre une suite $x_n \\to a$ quelconque. Poser $g_n(t) = f(x_n, t)$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Calculer $g_n(t) \\to f(a,t)$ (convergence simple, souvent par continuité en $x$).</div></div>
        <div class="step"><div class="step-n">3</div><div>Trouver une domination $|g_n(t)| \\le \\varphi(t)$ intégrable indépendante de $n$.</div></div>
        <div class="step"><div class="step-n">4</div><div>Conclure : $\\int_J f(x_n,t)\\d t \\to \\int_J f(a,t)\\d t$. Valable pour toute suite, donc pour la limite.</div></div>`, ordre: 25, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "exemple", titre: "Calculer $\\lim_{n\\to\\infty} \\int_0^1 \\frac{n t^{n-1}}{1+t}\\d t$", contenu: `Poser $f_n(t) = \\frac{n t^{n-1}}{1+t}$. Pour $t \\in [0,1)$, $f_n(t) \\to 0$ (car $nt^{n-1} \\to 0$).
      En $t=1$ : $f_n(1) = n/2 \\to +\\infty$. Mais l'ensemble $\\{1\\}$ est de mesure nulle : convergence presque partout.
      Domination ? $f_n(t) = nt^{n-1}/(1+t) \\le nt^{n-1}$. Or $\\int_0^1 nt^{n-1}\\d t = 1$, domination non intégrable uniformément...
      <div class="tip">Calcul direct : $\\int_0^1 \\frac{nt^{n-1}}{1+t}\\d t = \\sum_{k=0}^{\\infty}(-1)^k \\int_0^1 nt^{n+k-1}\\d t = \\sum_{k=0}^\\infty \\frac{(-1)^k n}{n+k} \\to \\ln 2$ par Cesàro.</div>`, ordre: 26, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Intégrale de Frullani", contenu: `$$\\int_0^{+\\infty} \\frac{f(at)-f(bt)}{t}\\d t = (f(0)-f(+\\infty))\\ln\\frac{b}{a}$$
      (sous conditions de régularité). Cas particulier : $\\int_0^\\infty \\frac{\\e^{-at}-\\e^{-bt}}{t}\\d t = \\ln(b/a)$ pour $a,b > 0$.`, ordre: 27, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Résoudre une EDL d'ordre 2 à coefficients constants", contenu: `$(H)$: $ay'' + by' + cy = 0$.
        <div class="step"><div class="step-n">1</div><div>Équation caractéristique $ar^2 + br + c = 0$, discriminant $\\Delta = b^2 - 4ac$.</div></div>
        <div class="step"><div class="step-n">2</div><div>$\\Delta > 0$ : deux racines réelles $r_1, r_2$. Solution : $y = A\\e^{r_1 t} + B\\e^{r_2 t}$.</div></div>
        <div class="step"><div class="step-n">3</div><div>$\\Delta = 0$ : racine double $r_0$. Solution : $y = (At+B)\\e^{r_0 t}$.</div></div>
        <div class="step"><div class="step-n">4</div><div>$\\Delta < 0$ : racines complexes $\\alpha \\pm i\\beta$. Solution : $y = \\e^{\\alpha t}(A\\cos\\beta t + B\\sin\\beta t)$.</div></div>
        <div class="step"><div class="step-n">5</div><div>Solution particulière de $(E)$: $ay''+by'+cy=f(t)$ par variation des constantes ou méthode polynomiale si $f$ est exponentielle-polynôme.</div></div>
      </div>
    </div>`, ordre: 28, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Variation des constantes (ordre 2)", contenu: `Si $\\varphi_1, \\varphi_2$ sont deux solutions indépendantes de $(H)$, chercher $y_P = \\lambda(t)\\varphi_1 + \\mu(t)\\varphi_2$ en imposant :
      $$\\lambda'\\varphi_1 + \\mu'\\varphi_2 = 0 \\quad \\text{et} \\quad \\lambda'\\varphi_1' + \\mu'\\varphi_2' = f(t)/a$$
      Le wronskien $W = \\varphi_1\\varphi_2' - \\varphi_2\\varphi_1' \\ne 0$ (c.i. fondamentale) permet de résoudre :
      $$\\lambda' = -\\frac{\\varphi_2 f}{aW} \\qquad \\mu' = \\frac{\\varphi_1 f}{aW}$$`, ordre: 29, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Second membre exponentiel-polynôme", contenu: `Si $f(t) = P(t)\\e^{\\alpha t}$, chercher une solution particulière de la forme $t^m Q(t)\\e^{\\alpha t}$ où :
      <ul>
        <li>$\\deg Q = \\deg P$</li>
        <li>$m = 0$ si $\\alpha$ n'est pas racine de l'équation caractéristique</li>
        <li>$m = $ multiplicité de $\\alpha$ comme racine sinon</li>
      </ul>
      <strong>Cas complexe</strong> : si $f(t) = P(t)\\e^{\\alpha t}\\cos(\\beta t)$, utiliser $f = \\text{Re}(P(t)\\e^{(\\alpha+i\\beta)t})$ et travailler en complexe.`, ordre: 30, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "Existence globale vs locale — équations non linéaires", contenu: `Pour $y' = f(x,y)$ non linéaire, Cauchy-Lipschitz donne une solution <strong>locale</strong>. Elle peut exploser en temps fini.
      <div class="warn">Exemple : $y' = y^2$, $y(0) = 1$ donne $y(t) = 1/(1-t)$, qui explose en $t=1$. Ne jamais supposer l'existence globale sans le vérifier.</div>
      Pour l'existence globale : chercher une inégalité $|y'| \\le C(1+|y|)$, ce qui donne une borne linéaire (lemme de Grönwall).`, ordre: 31, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Lemme de Grönwall", contenu: `Si $u(t) \\le \\alpha + \\int_0^t \\beta(s)u(s)\\d s$ avec $\\alpha \\ge 0$ et $\\beta \\ge 0$, alors :
      $$u(t) \\le \\alpha \\exp\\!\\left(\\int_0^t \\beta(s)\\d s\\right)$$
      Application : unicité des solutions, borne sur l'erreur entre deux solutions, existence globale.`, ordre: 32, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Système différentiel $X' = AX$", contenu: `<div class="step"><div class="step-n">1</div><div>Si $A$ diagonalisable : $A = PDP^{-1}$, solution $X(t) = P\\e^{Dt}P^{-1}X(0)$ avec $\\e^{Dt} = \\text{diag}(\\e^{\\lambda_i t})$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Si $A$ non diagonalisable : utiliser la décomposition de Dunford $A = D + N$ (commutent), $\\e^{At} = \\e^{Dt}\\e^{Nt}$, $\\e^{Nt}$ est un polynôme en $N$ (nilpotent).</div></div>
        <div class="step"><div class="step-n">3</div><div>Solution générale : $X(t) = \\e^{At}C$ pour $C \\in \\mathbb{R}^n$ quelconque. CI : $X(0) = \\e^{A \\cdot 0}C = C$.</div></div>`, ordre: 33, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Utiliser l'IAF vectorielle", contenu: `Si $\\|f'(t)\\| \\le M$ sur $[a,b]$ :
      $$\\|f(b) - f(a)\\| \\le M|b-a|$$
      <strong>Applications</strong> :
        <ul>
          <li>Prouver la continuité lipschitzienne d'une fonction.</li>
          <li>Montrer que deux solutions d'une EDO coïncident (unicité).</li>
          <li>Majorer une erreur $\\|f(x) - f(a)\\|$ au voisinage de $a$.</li>
        </ul>
        <div class="warn">Le TAF scalaire classique (avec une égalité) ne s'étend pas aux fonctions vectorielles. $f(b)-f(a) = f'(c)(b-a)$ est faux en général.</div>`, ordre: 34, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Développement de Taylor-Lagrange", contenu: `Si $f$ est $\\mathcal{C}^{n+1}$ sur $[a,b]$ et $\\|f^{(n+1)}\\| \\le M$ :
      $$\\left\\|f(b) - \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(b-a)^k\\right\\| \\le \\frac{M|b-a|^{n+1}}{(n+1)!}$$
      Utilisation : majorer l'erreur d'approximation polynomiale. Le reste intégral $\\int_a^b \\frac{(b-t)^n}{n!}f^{(n+1)}(t)\\d t$ est plus précis mais moins facile à majorer.`, ordre: 35, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Développements limités composés — ordre correct", contenu: `Pour trouver le DL de $f(g(x))$ à l'ordre $n$ en 0 :
        <div class="step"><div class="step-n">1</div><div>Calculer le DL de $g(x)$ à l'ordre $n$ : $g(x) = a_1 x + a_2 x^2 + \\ldots + o(x^n)$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Si $g(0) = 0$, substituer dans le DL de $f$ à l'ordre $n$ et regrouper par puissances de $x$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Si $g(0) = c \\ne 0$, écrire $g(x) = c + h(x)$ avec $h(0) = 0$ et développer $f(c+h(x))$ en $h$.</div></div>
        <div class="warn">Ne pas oublier que $(o(x^k))^2 = o(x^{2k})$, etc. Éliminer les termes d'ordre $> n$ au fur et à mesure.</div>`, ordre: 36, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Montrer qu'un ensemble est compact", contenu: `En dimension finie (ou dans un evn de dim finie) : $K$ compact $\\iff$ $K$ fermé et borné.
      <div class="step"><div class="step-n">1</div><div><strong>Fermé</strong> : image réciproque d'un fermé par une appli continue, ou intersection de fermés.</div></div>
      <div class="step"><div class="step-n">2</div><div><strong>Borné</strong> : inclus dans une boule fermée.</div></div>
      <div class="step"><div class="step-n">3</div><div>Alternative : image d'un compact par une application continue.</div></div>
      <div class="tip">En dim infinie : fermé + borné $\\not\\Rightarrow$ compact en général. Ex : boule unité de $\\ell^2$.</div>`, ordre: 37, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "methode", titre: "Montrer qu'un espace est complet (espace de Banach)", contenu: `Montrer que toute suite de Cauchy converge :
        <div class="step"><div class="step-n">1</div><div>Prendre $(x_n)$ de Cauchy : $\\forall\\eps>0,\\exists N,\\forall p,q\\ge N, \\|x_p-x_q\\|\\le\\eps$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Construire la limite candidate (souvent coordinate par coordinate en dimension finie).</div></div>
        <div class="step"><div class="step-n">3</div><div>Montrer que la suite converge vers cette limite.</div></div>
        <div class="step"><div class="step-n">4</div><div>Vérifier que la limite appartient à l'espace.</div></div>`, ordre: 38, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "astuce", titre: "Théorème du point fixe de Banach", contenu: `Si $(E, d)$ complet et $f : E \\to E$ est $k$-lipschitzienne avec $k < 1$ (contractante), alors $f$ admet un unique point fixe $x^* = \\lim f^n(x_0)$.
      <strong>Applications</strong> : existence-unicité des solutions d'équations intégrales, méthode de Newton, résolution d'EDO par itération.
      <div class="tip">Vérification pratique : si $\\|f(x)-f(y)\\| \\le k\\|x-y\\|$ avec $k<1$ sur un fermé stable par $f$, conclure.</div></div>
    </div>`, ordre: 39, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Analyse", type: "piege", titre: "Normes équivalentes en dim finie — mais pas les topologies", contenu: `En dimension finie, toutes les normes sont équivalentes : elles définissent la même topologie (mêmes ouverts, mêmes suites convergentes). Mais les normes subordonnées sur $\\mathcal{L}(E)$ dépendent de la norme choisie sur $E$.
      <div class="warn">L'équivalence des normes ne s'étend pas à la dimension infinie. $\\ell^1$ et $\\ell^2$ ne sont pas homéomorphes.</div>`, ordre: 40, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Diagonaliser une matrice $A$", contenu: `<div class="step"><div class="step-n">1</div><div>Calculer $\\chi_A(\\lambda) = \\det(\\lambda I - A)$. Factoriser sur $\\mathbb{K}$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Pour chaque valeur propre $\\lambda_i$ (de multiplicité $m_i$) : calculer $E_{\\lambda_i} = \\ker(A - \\lambda_i I)$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Vérifier $\\dim E_{\\lambda_i} = m_i$ pour chaque $i$. Si oui : $A$ diagonalisable.</div></div>
        <div class="step"><div class="step-n">4</div><div>Former $P$ dont les colonnes sont des vecteurs propres. Alors $P^{-1}AP = D = \\text{diag}(\\lambda_i)$.</div></div>
        <div class="tip">Condition suffisante rapide : $n$ valeurs propres distinctes $\\implies$ diagonalisable. Pas besoin de calculer les dimensions.</div>`, ordre: 41, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Calculer $A^n$ ou $\\e^A$", contenu: `Si $A = PDP^{-1}$ avec $D = \\text{diag}(\\lambda_1,\\ldots,\\lambda_n)$ :
      $$A^n = PD^nP^{-1} \\quad \\text{avec} \\quad D^n = \\text{diag}(\\lambda_1^n,\\ldots,\\lambda_n^n)$$
      $$\\e^A = P\\e^DP^{-1} \\quad \\text{avec} \\quad \\e^D = \\text{diag}(\\e^{\\lambda_1},\\ldots,\\e^{\\lambda_n})$$
      Si $A$ non diagonalisable, utiliser la décomposition de Dunford $A = D + N$ :
      $$\\e^A = \\e^D \\e^N = \\e^D\\left(I + N + \\frac{N^2}{2!} + \\cdots\\right) \\quad (\\text{finie car } N \\text{ nilpotent})$$`, ordre: 42, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "piege", titre: "$A$ et $B$ diagonalisables qui commutent ne sont pas forcément co-diagonalisables", contenu: `<div class="warn">FAUX : "Si $A$ et $B$ sont diagonalisables et $AB = BA$, alors elles sont simultanément diagonalisables." C'est VRAI. Mais si elles ne commutent pas, le résultat tombe.</div>
      Résultat correct : $A$ et $B$ diagonalisables avec $AB=BA$ $\\implies$ il existe $P$ telle que $P^{-1}AP$ et $P^{-1}BP$ sont toutes deux diagonales.`, ordre: 43, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "astuce", titre: "Diagonaliser via un polynôme annulateur", contenu: `Si on trouve un polynôme $P$ scindé à racines simples tel que $P(A) = 0$, alors $A$ est diagonalisable (sur $\\mathbb{K}$ si $P$ est scindé sur $\\mathbb{K}$).
      Méthode : chercher $P(A) = 0$ en testant des polynômes simples. Ex : $A^2 = A \\implies P(X)=X(X-1)$ annule $A$ $\\implies$ VPs dans $\\{0,1\\}$ $\\implies$ diagonalisable.
      <div class="tip">Cas fréquent : $A^2 = I$ (involution), $A^2 = 0$ (nilpotent d'indice 2), $A^k = I$ (cyclique).</div>`, ordre: 44, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "exemple", titre: "Calculer $A^n$ pour $A = \\begin{pmatrix}3&1\\\\-2&0\\end{pmatrix}$", contenu: `$\\chi_A = \\lambda^2 - 3\\lambda + 2 = (\\lambda-1)(\\lambda-2)$. VPs : $1$ et $2$, distinctes $\\implies$ $A$ diagonalisable.
      $E_1 = \\ker(A-I) = \\text{Vect}\\begin{pmatrix}1\\\\-2\\end{pmatrix}$, $E_2 = \\ker(A-2I) = \\text{Vect}\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.
      $P = \\begin{pmatrix}1&1\\\\-2&-1\\end{pmatrix}$, $P^{-1} = \\begin{pmatrix}-1&-1\\\\2&1\\end{pmatrix}$.
      $$A^n = P\\begin{pmatrix}1&0\\\\0&2^n\\end{pmatrix}P^{-1} = \\begin{pmatrix}-1+2^{n+1}&-1+2^n\\\\2-2^{n+1}&2-2^n\\end{pmatrix}$$`, ordre: 45, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Trigonaliser une matrice", contenu: `$A$ est trigonalisable $\\iff \\chi_A$ est scindé sur $\\mathbb{K}$.
        <div class="step"><div class="step-n">1</div><div>Factoriser $\\chi_A = \\prod (\\lambda - \\lambda_i)^{m_i}$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Pour chaque VP $\\lambda_i$ : calculer les espaces $\\ker(A-\\lambda_i I)^k$ pour $k = 1, 2, \\ldots, m_i$ jusqu'à stabilisation.</div></div>
        <div class="step"><div class="step-n">3</div><div>Construire une base adaptée (base de Jordan) en choisissant des vecteurs de façon ascendante dans les noyaux emboîtés.</div></div>
        <div class="tip">En concours, la trigonalisation complète de Jordan est rare. On se contente souvent de la décomposition $A = D + N$ (Dunford) et d'utiliser $\\e^{At} = \\e^{Dt}\\e^{Nt}$.</div>`, ordre: 46, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Décomposition de Dunford $A = D + N$", contenu: `$\\chi_A$ scindé $\\implies A = D + N$ avec $D$ diagonalisable, $N$ nilpotent, $DN = ND$.
        <div class="step"><div class="step-n">1</div><div>Décomposer $E = \\bigoplus E_i$ où $E_i = \\ker(A-\\lambda_i I)^{m_i}$ (SEP caractéristiques).</div></div>
        <div class="step"><div class="step-n">2</div><div>Sur chaque $E_i$ : $A|_{E_i} = \\lambda_i I + N_i$ avec $N_i = (A-\\lambda_i I)|_{E_i}$ nilpotente.</div></div>
        <div class="step"><div class="step-n">3</div><div>$D$ agit comme $\\lambda_i \\cdot \\text{Id}$ sur $E_i$, $N$ comme $N_i$.</div></div>
        <div class="tip">En pratique : $D = \\sum \\lambda_i P_i$ (projecteurs spectraux = polynômes en $A$, calculés par interpolation de Lagrange), $N = A - D$.</div>`, ordre: 47, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "astuce", titre: "Projecteurs spectraux via interpolation de Lagrange", contenu: `Si $\\chi_A = \\prod_{i=1}^r (X-\\lambda_i)^{m_i}$, les projecteurs sur les sous-espaces caractéristiques sont :
      $$P_i = \\prod_{j \\ne i} \\frac{(A-\\lambda_j I)^{m_j}}{\\prod_{j\\ne i}(\\lambda_i-\\lambda_j)^{m_j}} \\quad (\\text{à adapter selon la forme exacte})$$
      Plus simplement : trouver des polynômes $Q_i$ tels que $\\sum Q_i = 1$ et $Q_i(\\lambda_j) = \\delta_{ij}$ pour les VPs. Alors $P_i = Q_i(A)$.`, ordre: 48, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Déterminer le polynôme minimal $\\mu_f$", contenu: `<div class="step"><div class="step-n">1</div><div>Par Cayley-Hamilton : $\\mu_f | \\chi_f$. Donc $\\deg \\mu_f \\le n$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Les racines de $\\mu_f$ sont exactement les valeurs propres (même spectre que $\\chi_f$).</div></div>
        <div class="step"><div class="step-n">3</div><div>Pour chaque VP $\\lambda_i$ de multiplicité $m_i$ dans $\\chi_f$ : $\\mu_f$ contient $(\\lambda - \\lambda_i)^{s_i}$ avec $1 \\le s_i \\le m_i$.</div></div>
        <div class="step"><div class="step-n">4</div><div>Tester : calculer $(f-\\lambda_i \\text{Id})^k$ pour $k = 1, \\ldots, m_i$ jusqu'à trouver $s_i$ tel que $(f-\\lambda_i\\text{Id})^{s_i} \\ne 0$ et $(f-\\lambda_i\\text{Id})^{s_i+1} = 0$ (ou $k = m_i$).</div></div>
        <div class="tip">Si $A$ est diagonalisable, $\\mu_A$ est le PPCM des $(X-\\lambda_i)$, donc scindé à racines simples.</div>`, ordre: 49, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Appliquer le lemme de décomposition des noyaux", contenu: `Si $P_1, \\ldots, P_r$ sont premiers entre eux deux à deux et $P = P_1 \\cdots P_r$ :
      $$\\ker P(f) = \\ker P_1(f) \\oplus \\cdots \\oplus \\ker P_r(f)$$
      <strong>Utilisation pratique</strong> :
        <ul>
          <li>Décomposer $E$ selon les facteurs de $\\mu_f$ ou $\\chi_f$.</li>
          <li>Montrer que $f$ est diagonalisable : $\\mu_f$ scindé à racines simples $\\iff$ les $P_i = X - \\lambda_i$ sont premiers entre eux $\\iff$ noyaux en somme directe = $E$.</li>
          <li>Construire des projecteurs : $\\sum P_i = \\text{Id}$ avec $P_i = Q_i(f)$ polynôme en $f$.</li>
        </ul>`, ordre: 50, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "piege", titre: "Cayley-Hamilton ne donne pas le polynôme minimal", contenu: `$\\chi_A(A) = 0$ garantit que $\\chi_A$ annule $A$, mais $\\mu_A$ peut être de degré strictement inférieur.
      <div class="warn">Exemple : $A = I_n$ a $\\chi_A = (X-1)^n$ mais $\\mu_A = X-1$. Ne jamais confondre les deux.</div>`, ordre: 51, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Trouver la matrice de l'adjoint", contenu: `En base orthonormée $\\mathcal{B}$ : $\\text{Mat}_\\mathcal{B}(f^*) = \\text{Mat}_\\mathcal{B}(f)^\\top$.
      En base quelconque $\\mathcal{B}$ : $\\text{Mat}(f^*) = G^{-1}[\\text{Mat}(f)]^\\top G$ où $G = (\\langle e_i, e_j\\rangle)$ est la matrice de Gram.
      <div class="tip">Dans les calculs, toujours se placer en BON pour éviter la matrice de Gram.</div>`, ordre: 52, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Classifier les isométries en dimension 2 et 3", contenu: `<strong>Dim 2</strong> ($f \\in O(E)$, $\\dim E = 2$) :
        <ul>
          <li>$\\det f = +1$ : rotation d'angle $\\theta$. Matrice $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$ en BON directe.</li>
          <li>$\\det f = -1$ : réflexion par rapport à une droite. Matrice : $\\begin{pmatrix}\\cos\\theta&\\sin\\theta\\\\\\sin\\theta&-\\cos\\theta\\end{pmatrix}$.</li>
        </ul>
        <strong>Dim 3</strong> ($f \\in SO(E)$) : rotation d'axe $\\Delta$ et d'angle $\\theta$. Trouver : VP $1$ (axe), angle via $\\text{tr}(f) = 1 + 2\\cos\\theta$.`, ordre: 53, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Diagonaliser un endomorphisme autoadjoint", contenu: `Théorème spectral : $f$ autoadjoint ($f^* = f$) $\\implies$ $f$ est diagonalisable en BON.
        <div class="step"><div class="step-n">1</div><div>Calculer les VPs (toutes réelles !).</div></div>
        <div class="step"><div class="step-n">2</div><div>Les SEPs associés sont deux à deux orthogonaux : inutile de vérifier.</div></div>
        <div class="step"><div class="step-n">3</div><div>Orthonormaliser chaque SEP par Gram-Schmidt (si $\\dim E_\\lambda > 1$).</div></div>
        <div class="step"><div class="step-n">4</div><div>Réunir : la matrice de passage est orthogonale ($P^{-1} = P^\\top$).</div></div>
        <div class="tip">Pour montrer qu'une forme quadratique est positive : calculer les VPs (toutes $\\ge 0$) ou les mineurs principaux de la matrice (critère de Sylvester).</div>`, ordre: 54, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "astuce", titre: "Caractériser $f$ via $\\langle f(x),x\\rangle$", contenu: `Pour $f$ autoadjoint :
      <ul>
        <li>$f$ est positif ($\\ge 0$) $\\iff \\langle f(x),x\\rangle \\ge 0$ pour tout $x \\iff$ toutes VPs $\\ge 0$.</li>
        <li>$f$ est défini positif $\\iff \\langle f(x),x\\rangle > 0$ pour $x\\ne 0 \\iff$ toutes VPs $> 0$.</li>
      </ul>
      Pour une isométrie $f$ : $\\langle f(x),f(y)\\rangle = \\langle x,y\\rangle$ pour tout $x,y$ $\\iff f^*f = \\text{Id}$.`, ordre: 55, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Calculer un déterminant", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Pivot de Gauss</strong> : opérations élémentaires sur les lignes/colonnes (attention aux signes), réduire à une forme triangulaire.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Développement par rapport à une ligne/colonne creuse</strong> : choisir la ligne avec le plus de zéros.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Structure spéciale</strong> : Vandermonde, triangulaire par blocs ($\\det = \\det A \\cdot \\det B$), circulante.</div></div>
        <div class="step"><div class="step-n">4</div><div><strong>Rang 1 perturbation</strong> : $\\det(A + uv^\\top) = \\det A \\cdot (1 + v^\\top A^{-1} u)$ (formule de Sherman-Morrison).</div></div>
        <div class="tip">$\\det(AB) = \\det A \\cdot \\det B$. $\\det(A^\\top) = \\det A$. $\\det(\\lambda A) = \\lambda^n \\det A$ en dimension $n$.</div>`, ordre: 56, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "astuce", titre: "Déterminant de Vandermonde", contenu: `$$\\det\\begin{pmatrix}1&a_1&a_1^2&\\cdots&a_1^{n-1}\\\\1&a_2&a_2^2&\\cdots&a_2^{n-1}\\\\\\vdots&&&&\\vdots\\\\1&a_n&a_n^2&\\cdots&a_n^{n-1}\\end{pmatrix} = \\prod_{1\\le i < j \\le n}(a_j - a_i)$$
      Corollaire : ce déterminant est nul $\\iff$ deux des $a_i$ sont égaux.
      Application : les $n$ points $(a_i, b_i)$ définissent un unique polynôme de degré $\\le n-1$ si les $a_i$ sont distincts.</div>
    </div>`, ordre: 57, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "piege", titre: "$\\det(A+B) \\ne \\det A + \\det B$", contenu: `<div class="warn">Le déterminant est multilinéaire en les colonnes (ou lignes) séparément, mais pas en $A$ globalement. $\\det(A+B) \\ne \\det A + \\det B$ en général.</div>
      Par contre : $\\det(A+tB)$ est un polynôme en $t$ (utile pour calculer des dérivées ou variations).`, ordre: 58, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Calculer $\\dim(F + G)$ et $\\dim(F \\cap G)$", contenu: `Formule de Grassmann : $\\dim(F+G) = \\dim F + \\dim G - \\dim(F\\cap G)$.
        <div class="step"><div class="step-n">1</div><div>Écrire des bases de $F$ et $G$.</div></div>
        <div class="step"><div class="step-n">2</div><div>Pour $F \\cap G$ : résoudre $x \\in F$ et $x \\in G$ simultanément (système linéaire).</div></div>
        <div class="step"><div class="step-n">3</div><div>Ou utiliser Grassmann si $\\dim(F+G)$ est connue (ex : $F+G = E$).</div></div>
        <div class="tip">Si $\\dim F + \\dim G = n$ et $F \\cap G = \\{0\\}$, alors $F$ et $G$ sont supplémentaires ($E = F \\oplus G$).</div>`, ordre: 59, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "methode", titre: "Montrer que $E = F_1 \\oplus \\cdots \\oplus F_k$", contenu: `Trois conditions équivalentes à vérifier :
        <ol>
          <li>$F_1 + \\cdots + F_k = E$ (famille génératrice).</li>
          <li>Si $x_1 + \\cdots + x_k = 0$ avec $x_i \\in F_i$, alors $x_i = 0$ pour tout $i$.</li>
          <li>$\\sum \\dim F_i = \\dim E$ et $F_1 + \\cdots + F_k = E$.</li>
        </ol>
        En pratique : utiliser (3) quand on connaît les dimensions, (2) quand on cherche l'indépendance.`, ordre: 60, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Algèbre linéaire", type: "astuce", titre: "Le rang et ses formulations", contenu: `Pour $f \\in \\mathcal{L}(E,F)$ :
      $$\\text{rg}(f) = \\dim \\text{Im}(f) = n - \\dim\\ker(f) \\quad (\\text{th. du rang})$$
      <strong>Utile pour</strong> :
      <ul>
        <li>Calculer $\\dim\\ker f$ si $\\text{rg}(f)$ est connu (ou l'inverse).</li>
        <li>Montrer la bijectivité : rg$(f) = n = \\dim E = \\dim F$.</li>
        <li>$\\text{rg}(AB) \\le \\min(\\text{rg}(A), \\text{rg}(B))$.</li>
      </ul>`, ordre: 61, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Calculer une probabilité par dénombrement", contenu: `<div class="step"><div class="step-n">1</div><div>Identifier l'espace $\\Omega$ et vérifier qu'il est muni d'une probabilité uniforme.</div></div>
        <div class="step"><div class="step-n">2</div><div>Calculer $|\\Omega|$ : arrangements ($A_n^k = n!/(n-k)!$) ou combinaisons ($\\binom{n}{k}$) selon que l'ordre compte.</div></div>
        <div class="step"><div class="step-n">3</div><div>Calculer $|A|$ pour l'événement $A$.</div></div>
        <div class="step"><div class="step-n">4</div><div>$P(A) = |A|/|\\Omega|$.</div></div>
        <div class="tip">Mémo : arrangements sans répétition = ordre compte + sans remise. Combinaisons = ordre ne compte pas + sans remise. Arrangements avec répétition = $n^k$ (tirages avec remise ordonnés).</div>`, ordre: 62, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Utiliser les probabilités totales et Bayes", contenu: `Système complet d'événements $(A_i)$ : $A_i$ deux à deux incompatibles, $\\cup A_i = \\Omega$, $P(A_i) > 0$.
        <div class="step"><div class="step-n">1</div><div>$P(B) = \\sum_i P(A_i)P(B|A_i)$ (probabilités totales).</div></div>
        <div class="step"><div class="step-n">2</div><div>$P(A_j|B) = \\frac{P(A_j)P(B|A_j)}{\\sum_i P(A_i)P(B|A_i)}$ (Bayes).</div></div>
        <div class="tip">Bayes = "remontée de cause à effet". Utile pour les tests médicaux, les arbres de décision, les modèles à états cachés.</div>`, ordre: 63, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "piege", titre: "Indépendance deux à deux ≠ indépendance mutuelle", contenu: `<div class="warn">Trois événements $A$, $B$, $C$ peuvent être indépendants deux à deux sans être mutuellement indépendants. Il faut vérifier aussi $P(A\\cap B\\cap C) = P(A)P(B)P(C)$.</div>
      Contre-exemple classique : lancer deux pièces. $A$ = "1ère pile", $B$ = "2ème pile", $C$ = "résultats identiques". Ils sont 2 à 2 indépendants mais $A\\cap B\\cap C = A\\cap B$ donc $P(A\\cap B\\cap C) = 1/4 = P(A)P(B)P(C)$... Chercher un contre-exemple plus fin avec 8 éléments.`, ordre: 64, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "astuce", titre: "Probabilité d'une réunion (inclusion-exclusion)", contenu: `$$P\\!\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_i P(A_i) - \\sum_{i &lt; j}P(A_i\\cap A_j) + \\cdots + (-1)^{n+1}P(A_1\\cap\\cdots\\cap A_n)$$
      Minoration (Bonferroni 1ère) : $P(\\cup A_i) \\ge \\sum P(A_i) - \\sum_{i &lt; j} P(A_i\\cap A_j)$.
      <div class="tip">Pour le problème des chapeaux (dérangements) : $P(\\text{aucun en place}) \\to 1/\\e$ par ce principe.</div>`, ordre: 65, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Calculer $E[f(X)]$ — formule de transfert", contenu: `$E[f(X)] = \\sum_{x \\in X(\\Omega)} f(x) P(X=x)$.
      <strong>Astuces de calcul</strong> :
        <ul>
          <li><strong>Linéarité</strong> : $E[aX+b] = aE[X]+b$, $E[X+Y] = E[X]+E[Y]$ (toujours, même si $X,Y$ non indépendantes).</li>
          <li><strong>Indicatrices</strong> : $E[\\mathbf{1}_A] = P(A)$. Décomposer $X = \\sum X_i$ avec $X_i$ indicatrices pour exploiter la linéarité.</li>
          <li><strong>Formule antirépartition</strong> : $E[X] = \\sum_{n\\ge1} P(X \\ge n)$ si $X$ à valeurs dans $\\mathbb{N}$.</li>
        </ul>`, ordre: 66, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "astuce", titre: "Méthode des indicatrices", contenu: `Pour compter le nombre d'éléments vérifiant une propriété :
      $$X = \\sum_{i=1}^n \\mathbf{1}_{A_i} \\implies E[X] = \\sum_{i=1}^n P(A_i)$$
      <strong>Exemple</strong> : nombre de points fixes d'une permutation aléatoire. $X = \\sum_{i=1}^n \\mathbf{1}_{[\\sigma(i)=i]}$. $P(\\sigma(i)=i) = (n-1)!/n! = 1/n$. Donc $E[X] = n \\cdot 1/n = 1$.
      <div class="tip">Pour la variance : $V[X] = \\sum V[\\mathbf{1}_{A_i}] + 2\\sum_{i<j}\\text{cov}(\\mathbf{1}_{A_i}, \\mathbf{1}_{A_j})$. Ne pas oublier les covariances !</div></div>
    </div>`, ordre: 67, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Calculer la variance", contenu: `$V[X] = E[X^2] - E[X]^2$.
        <div class="step"><div class="step-n">1</div><div>Calculer $E[X]$ par la formule de transfert ou des formules connues.</div></div>
        <div class="step"><div class="step-n">2</div><div>Calculer $E[X^2]$ de même, ou utiliser $E[X(X-1)] = E[X^2] - E[X]$ (moment factoriel, utile pour Poisson et binomiale).</div></div>
        <div class="step"><div class="step-n">3</div><div>$V[aX+b] = a^2V[X]$. $V[X+Y] = V[X]+V[Y]+2\\text{cov}(X,Y)$.</div></div>
        <div class="step"><div class="step-n">4</div><div>Si $X$ et $Y$ indépendantes : $V[XY]$ est plus complexe; $V[X+Y] = V[X]+V[Y]$.</div></div>`, ordre: 68, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "piege", titre: "$\\text{cov}(X,Y)=0$ n'implique pas l'indépendance", contenu: `<div class="warn">Deux variables décorrélées ne sont pas nécessairement indépendantes. Exemple : $X$ uniforme sur $\\{-1,0,1\\}$, $Y = X^2$. $E[XY] = E[X^3] = 0 = E[X]E[Y]$ donc $\\text{cov} = 0$, mais $Y$ est déterminé par $X$.</div>
      L'indépendance implique la décorrélation, mais pas la réciproque (sauf pour les gaussiennes).`, ordre: 69, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Identifier la loi d'une variable", contenu: `<div class="step"><div class="step-n">1</div><div><strong>Chercher la série génératrice</strong> : $G_X(t) = E[t^X]$. Unicité : deux VA de même série génératrice ont même loi.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Reconnaître un schéma</strong> : Bernoulli, binomiale, Poisson, géométrique, hypergéométrique selon le contexte.</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Calcul direct de la loi</strong> : $P(X=k) = \\ldots$ et vérifier $\\sum P(X=k) = 1$.</div></div>
        <div class="tip">Somme de VA indépendantes : $G_{X+Y} = G_X \\cdot G_Y$. Utile pour reconnaître des lois stables.</div>`, ordre: 70, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "exemple", titre: "Loi du maximum de $n$ VA uniformes", contenu: `$X_1, \\ldots, X_n$ iid de loi uniforme sur $\\{1, \\ldots, m\\}$. $M_n = \\max(X_1,\\ldots,X_n)$.
      $$P(M_n \\le k) = P(X_1 \\le k)^n = \\left(\\frac{k}{m}\\right)^n$$
      $$P(M_n = k) = \\left(\\frac{k}{m}\\right)^n - \\left(\\frac{k-1}{m}\\right)^n$$
      $E[M_n] = \\sum_{k=1}^m k\\left[\\left(\\frac{k}{m}\\right)^n - \\left(\\frac{k-1}{m}\\right)^n\\right]$ ou via antirépartition : $E[M_n] = m - \\sum_{k=0}^{m-1}\\left(\\frac{k}{m}\\right)^n$.`, ordre: 71, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Choisir la bonne inégalité", contenu: `<ul>
          <li><strong>Markov</strong> : $P(X \\ge \\lambda) \\le E[X]/\\lambda$ pour $X \\ge 0$. Seulement l'espérance.</li>
          <li><strong>Bienaymé-Tchebychev</strong> : $P(|X-E[X]| \\ge \\varepsilon) \\le V[X]/\\varepsilon^2$. Espérance + variance.</li>
          <li><strong>Cauchy-Schwarz</strong> : $E[XY]^2 \\le E[X^2]E[Y^2]$. Corrélation.</li>
          <li><strong>Jensen</strong> : si $\\varphi$ convexe, $\\varphi(E[X]) \\le E[\\varphi(X)]$. Ex : $E[X]^2 \\le E[X^2]$.</li>
        </ul>
        <div class="tip">Markov $\\subset$ Bienaymé-Tchebychev (BT s'obtient en appliquant Markov à $(X-E[X])^2$). BT est plus précise mais nécessite la variance.</div>`, ordre: 72, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Appliquer la loi faible des grands nombres (LFGN)", contenu: `$(X_n)$ iid, $E[X_1] = m$, $V[X_1] < +\\infty$ (hypothèse suffisante mais non nécessaire) :
      $$\\frac{X_1+\\cdots+X_n}{n} \\xrightarrow[n\\to\\infty]{P} m$$
      <strong>Preuve par BT</strong> : $P\\left(\\left|\\bar X_n - m\\right| \\ge \\varepsilon\\right) \\le \\frac{V[X_1]}{n\\varepsilon^2} \\to 0$.
      <div class="tip">Application : approximation d'une intégrale par Monte-Carlo. $\\frac{1}{n}\\sum f(U_i) \\to \\int_0^1 f$ si $U_i$ iid uniformes.</div>`, ordre: 73, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "astuce", titre: "Inégalité de Jensen et convexité", contenu: `$\\varphi$ convexe $\\implies \\varphi(E[X]) \\le E[\\varphi(X)]$ (Jensen).
      <strong>Applications directes</strong> :
      <ul>
        <li>$E[X]^2 \\le E[X^2]$ (prendre $\\varphi = x^2$).</li>
        <li>$\\e^{E[X]} \\le E[\\e^X]$ (prendre $\\varphi = \\e^x$).</li>
        <li>$\\log E[X] \\ge E[\\log X]$ si $X > 0$ (prendre $\\varphi = -\\log$, convexe).</li>
      </ul>
      <div class="tip">Pour l'inégalité dans l'autre sens : $\\varphi$ concave $\\implies \\varphi(E[X]) \\ge E[\\varphi(X)]$.</div>`, ordre: 74, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "methode", titre: "Utiliser la série génératrice $G_X(t) = E[t^X]$", contenu: `<div class="step"><div class="step-n">1</div><div>Calculer $G_X(t) = \\sum_{k\\ge0} P(X=k)t^k$ (série convergente pour $|t| \\le 1$).</div></div>
        <div class="step"><div class="step-n">2</div><div>$E[X] = G_X'(1)$ &nbsp;·&nbsp; $V[X] = G_X''(1) + G_X'(1) - G_X'(1)^2$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Identifier la loi : comparer $G_X(t)$ aux séries génératrices connues.</div></div>
        <div class="step"><div class="step-n">4</div><div>Si $X$ et $Y$ indépendantes : $G_{X+Y}(t) = G_X(t) \\cdot G_Y(t)$.</div></div>
        <div class="tip">Lois stables par convolution : Binomiale$(n,p)$ + Binomiale$(m,p)$ = Binomiale$(n+m,p)$. Poisson$(\\lambda)$ + Poisson$(\\mu)$ = Poisson$(\\lambda+\\mu)$.</div>`, ordre: 75, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "astuce", titre: "Séries génératrices des lois usuelles", contenu: `<ul>
        <li>Bernoulli $\\mathcal{B}(p)$ : $G(t) = 1-p+pt$</li>
        <li>Binomiale $\\mathcal{B}(n,p)$ : $G(t) = (1-p+pt)^n$</li>
        <li>Poisson $\\mathcal{P}(\\lambda)$ : $G(t) = \\e^{\\lambda(t-1)}$</li>
        <li>Géométrique $\\mathcal{G}(p)$ (à partir de 1) : $G(t) = \\frac{pt}{1-(1-p)t}$</li>
        <li>Uniforme $\\mathcal{U}(\\{1,\\ldots,n\\})$ : $G(t) = \\frac{t(1-t^n)}{n(1-t)}$</li>
      </ul>
      <div class="tip">Mémo Poisson : $G(t) = \\e^{\\lambda t - \\lambda} = \\e^{\\lambda(t-1)}$. Dériver deux fois en $t=1$ pour les moments.</div>`, ordre: 76, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Probabilités & VA", type: "exemple", titre: "Loi de la somme de VA Géométriques indépendantes", contenu: `$X_1, \\ldots, X_n$ iid $\\mathcal{G}(p)$. $S_n = X_1 + \\cdots + X_n$.
      $$G_{S_n}(t) = \\left(\\frac{pt}{1-(1-p)t}\\right)^n$$
      On reconnaît la série génératrice de la loi binomiale négative (loi du rang du $n$-ième succès dans une suite de Bernoulli). $E[S_n] = n/p$, $V[S_n] = n(1-p)/p^2$.`, ordre: 77, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Calculer $\\text{PGCD}(P, Q)$ dans $\\mathbb{K}[X]$", contenu: `Algorithme d'Euclide : effectuer la division euclidienne répétée.
        <div class="step"><div class="step-n">1</div><div>$P = Q \\cdot q_1 + r_1$ avec $\\deg r_1 < \\deg Q$.</div></div>
        <div class="step"><div class="step-n">2</div><div>$Q = r_1 \\cdot q_2 + r_2$ avec $\\deg r_2 < \\deg r_1$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Continuer jusqu'à $r_k = 0$. Alors $\\text{PGCD} = r_{k-1}$ (normalisé).</div></div>
        <div class="step"><div class="step-n">4</div><div>Remonter pour exprimer $\\text{PGCD} = UP + VQ$ (Bézout).</div></div>
        <div class="tip">Si $P$ et $Q$ sont premiers entre eux : $P \\wedge Q = 1 \\iff \\nexists \\alpha \\in \\overline{\\mathbb{K}}$ tel que $P(\\alpha) = Q(\\alpha) = 0$.</div>
      </div>
    </div>`, ordre: 78, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Déterminer la multiplicité d'une racine", contenu: `$\\alpha$ est racine de multiplicité $m$ de $P \\iff P(\\alpha) = P'(\\alpha) = \\cdots = P^{(m-1)}(\\alpha) = 0$ et $P^{(m)}(\\alpha) \\ne 0$.
      Équivalent : $(X-\\alpha)^m | P$ et $(X-\\alpha)^{m+1} \\nmid P$.
      <div class="tip">Calcul pratique : $P = (X-\\alpha)^m Q$ avec $Q(\\alpha) \\ne 0$. Dériver et évaluer en $\\alpha$.</div>`, ordre: 79, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "astuce", titre: "Décomposition en éléments simples dans $\\mathbb{K}[X]$", contenu: `Pour $P/Q$ avec $\\deg P < \\deg Q$ et $Q = \\prod (X-\\alpha_i)^{m_i}$ :
      $$\\frac{P(X)}{Q(X)} = \\sum_i \\sum_{j=1}^{m_i} \\frac{a_{i,j}}{(X-\\alpha_i)^j}$$
      <strong>Calcul des coefficients</strong> :
      <ul>
        <li>Résidu simple : $a_{i,1} = \\lim_{X\\to\\alpha_i} (X-\\alpha_i)\\frac{P(X)}{Q(X)} = \\frac{P(\\alpha_i)}{Q'(\\alpha_i)}$ si $m_i = 1$.</li>
        <li>Multiplicité $m_i$ : $a_{i,m_i-k} = \\frac{1}{k!}\\left[\\frac{\\d^k}{\\d X^k}\\left((X-\\alpha_i)^{m_i}\\frac{P(X)}{Q(X)}\\right)\\right]_{X=\\alpha_i}$.</li>
        <li>Identifier par valeur en un point simple puis égalité des polynômes.</li>
      </ul>`, ordre: 80, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Factoriser un polynôme sur $\\mathbb{R}$ et $\\mathbb{C}$", contenu: `<div class="step"><div class="step-n">1</div><div>Sur $\\mathbb{C}$ : factorisation complète en facteurs du 1er degré (th. de d'Alembert-Gauss).</div></div>
        <div class="step"><div class="step-n">2</div><div>Sur $\\mathbb{R}$ : les racines non réelles vont par paires conjuguées. Chaque paire $\\alpha, \\bar\\alpha$ donne un facteur irréductible $(X-\\alpha)(X-\\bar\\alpha) = X^2 - 2\\text{Re}(\\alpha)X + |\\alpha|^2$.</div></div>
        <div class="step"><div class="step-n">3</div><div>Factorisation sur $\\mathbb{R}$ : produit de facteurs de degré 1 et de facteurs irréductibles de degré 2.</div></div>
        <div class="tip">Pour trouver les racines : chercher des racines évidentes, puis effectuer la division euclidienne. Ou utiliser les formules cardinales (Viète).</div>`, ordre: 81, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "piege", titre: "Polynômes nuls vs polynômes identiquement nuls", contenu: `<div class="warn">Un polynôme peut s'annuler en un nombre infini de points sans être le polynôme nul (dans un corps fini). En revanche, dans $\\mathbb{R}$ ou $\\mathbb{C}$ : un polynôme de degré $n$ a au plus $n$ racines. Si $P$ a une infinité de racines, alors $P = 0$.</div>
      Application : si $P(n) = 0$ pour tout $n \\in \\mathbb{N}$ et $\\deg P < +\\infty$, alors $P$ est le polynôme nul.</div>
    </div>`, ordre: 82, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Résoudre $ax \\equiv b \\pmod{n}$", contenu: `<div class="step"><div class="step-n">1</div><div>Calculer $d = \\text{PGCD}(a,n)$ par l'algorithme d'Euclide.</div></div>
        <div class="step"><div class="step-n">2</div><div>Si $d \\nmid b$ : pas de solution.</div></div>
        <div class="step"><div class="step-n">3</div><div>Si $d | b$ : diviser par $d$. L'équation $\\frac{a}{d}x \\equiv \\frac{b}{d} \\pmod{n/d}$ a une unique solution modulo $n/d$.</div></div>
        <div class="step"><div class="step-n">4</div><div>Trouver l'inverse de $a/d$ modulo $n/d$ via Bézout : $ua/d + v(n/d) = 1$, donc $x \\equiv u(b/d) \\pmod{n/d}$.</div></div>
        <div class="step"><div class="step-n">5</div><div>Les solutions forment $d$ classes modulo $n$ : $x \\equiv x_0 + k(n/d) \\pmod n$ pour $k = 0,1,\\ldots,d-1$.</div></div>`, ordre: 83, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Système de congruences — Théorème chinois des restes", contenu: `Si $n_1, \\ldots, n_r$ sont deux à deux premiers entre eux, le système :
      $$x \\equiv a_1 \\pmod{n_1}, \\quad \\ldots, \\quad x \\equiv a_r \\pmod{n_r}$$
      admet une unique solution modulo $N = n_1 \\cdots n_r$.
      <strong>Construction</strong> : $N_i = N/n_i$, trouver $y_i$ tel que $N_i y_i \\equiv 1 \\pmod{n_i}$, alors $x \\equiv \\sum a_i N_i y_i \\pmod N$.`, ordre: 84, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "astuce", titre: "Petit théorème de Fermat et indicatrice d'Euler", contenu: `Si $p$ premier et $p \\nmid a$ : $a^{p-1} \\equiv 1 \\pmod p$ (Fermat).
      Plus généralement, si $\\text{PGCD}(a,n)=1$ : $a^{\\varphi(n)} \\equiv 1 \\pmod n$ (Euler).
      $$\\varphi(n) = n\\prod_{p|n}\\left(1-\\frac{1}{p}\\right) \\quad \\varphi(p^k) = p^k - p^{k-1}$$
      <div class="tip">Application : calculer $a^N \\pmod p$ pour grand $N$. Réduire $N$ modulo $p-1$ si $p$ premier et $p\\nmid a$. Exemple : $3^{100} \\pmod 7$ : $\\varphi(7)=6$, $100 = 16\\cdot6+4$, donc $3^{100} \\equiv 3^4 = 81 \\equiv 4 \\pmod 7$.</div>`, ordre: 85, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "piege", titre: "$\\mathbb{Z}/n\\mathbb{Z}$ n'est un corps que si $n$ est premier", contenu: `<div class="warn">Dans $\\mathbb{Z}/n\\mathbb{Z}$, l'élément $a$ est inversible $\\iff \\text{PGCD}(a,n) = 1$. Si $n$ est composé ($n = ab$), alors $a$ et $b$ sont des diviseurs de zéro : $\\bar a \\cdot \\bar b = \\overline{ab} = \\bar 0$ dans $\\mathbb{Z}/n\\mathbb{Z}$.</div>
      Seuls les $\\mathbb{Z}/p\\mathbb{Z}$ pour $p$ premier sont des corps (et des corps finis).`, ordre: 86, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Montrer qu'un ensemble est un groupe", contenu: `Vérifier les 4 axiomes :
        <ol>
          <li><strong>Fermeture</strong> : $\\forall a,b \\in G, a \\star b \\in G$.</li>
          <li><strong>Associativité</strong> : $\\forall a,b,c, (a\\star b)\\star c = a\\star(b\\star c)$.</li>
          <li><strong>Élément neutre</strong> : $\\exists e \\in G, \\forall a, e\\star a = a\\star e = a$.</li>
          <li><strong>Inverses</strong> : $\\forall a \\in G, \\exists a^{-1} \\in G, a\\star a^{-1} = a^{-1}\\star a = e$.</li>
        </ol>
        <div class="tip">Astuce pratique : si $G$ est fini et associatif avec élément neutre, vérifier la fermeture et que les tables montrent que tout élément est régulier (inversible).</div>`, ordre: 87, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Déterminer les sous-groupes de $\\mathbb{Z}$", contenu: `Les sous-groupes de $(\\mathbb{Z},+)$ sont exactement les $n\\mathbb{Z}$ pour $n \\in \\mathbb{N}$.
      <strong>Conséquence</strong> : $a\\mathbb{Z} + b\\mathbb{Z} = d\\mathbb{Z}$ où $d = \\text{PGCD}(a,b)$ — c'est la preuve de l'existence des coefficients de Bézout.
      <div class="tip">Plus généralement : dans un anneau principal, tout idéal est principal (engendré par un élément). $\\mathbb{Z}$ et $\\mathbb{K}[X]$ sont des anneaux principaux.</div>`, ordre: 88, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "astuce", titre: "Ordre d'un élément et théorème de Lagrange", contenu: `L'ordre de $g \\in G$ (fini) est le plus petit $k \\ge 1$ tel que $g^k = e$. Il divise $|G|$ (Lagrange).
      Corollaires :
      <ul>
        <li>$g^{|G|} = e$ pour tout $g \\in G$ fini.</li>
        <li>Si $|G| = p$ premier, $G$ est cyclique et $G \\simeq \\mathbb{Z}/p\\mathbb{Z}$.</li>
        <li>Tout groupe d'ordre $p^2$ est abélien.</li>
      </ul>
      <div class="tip">Pour calculer l'ordre de $\\bar a$ dans $\\mathbb{Z}/n\\mathbb{Z}$ : $\\text{ord}(\\bar a) = n/\\text{PGCD}(a,n)$.</div>`, ordre: 89, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "methode", titre: "Montrer qu'un morphisme est un isomorphisme", contenu: `$f : G \\to H$ est un isomorphisme $\\iff f$ est un morphisme bijectif.
        <div class="step"><div class="step-n">1</div><div><strong>Morphisme</strong> : $f(a \\star b) = f(a) \\star f(b)$ pour tout $a,b$.</div></div>
        <div class="step"><div class="step-n">2</div><div><strong>Injectif</strong> : $\\ker f = \\{e_G\\}$ (car $f$ morphisme, donc $f^{-1}(\\{e_H\\}) = \\ker f$).</div></div>
        <div class="step"><div class="step-n">3</div><div><strong>Surjectif</strong> : tout $h \\in H$ a un antécédent. Si $G$ et $H$ finis de même ordre, injectif $\\iff$ surjectif.</div></div>
        <div class="tip">$G/\\ker f \\simeq \\text{Im}(f)$ (1er théorème d'isomorphisme).</div>`, ordre: 90, filieres: ["mp","mpsi"] },
  { matiere: "ma", categorie: "Polynômes & Structures", type: "piege", titre: "$G$ et $H$ de même ordre ne sont pas nécessairement isomorphes", contenu: `<div class="warn">$\\mathbb{Z}/4\\mathbb{Z}$ et $\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}$ sont tous deux d'ordre 4 mais non isomorphes : le premier a un élément d'ordre 4 (le générateur), le second non (tous les éléments non nuls ont ordre 2).</div>
      L'invariant discriminant est le nombre d'éléments de chaque ordre.`, ordre: 91, filieres: ["mp","mpsi"] },
];

let methodeId = 1;
for (const m of methodesData) {
  run('INSERT OR IGNORE INTO methodes VALUES (?, ?, ?, ?, ?, ?, ?)',
    [methodeId, m.matiere, m.categorie, m.type, m.titre, m.contenu, m.ordre]);
  for (const fid of m.filieres) {
    run('INSERT OR IGNORE INTO filiere_methodes VALUES (?, ?)', [fid, methodeId]);
  }
  methodeId++;
}

console.log(`  → ${methodeId - 1} méthodes insérées.`);

// ═══════════════════════════════════════════════
// ECOLES (si vide)
// ═══════════════════════════════════════════════

const ecolesCount = getAll_seed(db, 'SELECT COUNT(*) as c FROM ecoles');
if (ecolesCount === 0) {
  const ecoles = [
    ['Polytechnique (X)', 'Palaiseau', 'Île-de-France', 'A+', 1, '55 000 €', '0 € (solde)', 'X-ENS', 'Top 5,Généraliste,Militaire', 'HEC;ENSAE', 'Campus 100ha,Lacs', 'Toutes', 'https://www.polytechnique.edu'],
    ['CentraleSupélec', 'Gif-sur-Yvette', 'Île-de-France', 'A+', 2, '48 000 €', '2 500 €/an', 'Centrale', 'Top 5,Généraliste', 'ESSEC;Columbia', 'Campus moderne', 'Énergie,Numérique,IA', 'https://www.centralesupelec.fr'],
    ['Mines Paris - PSL', 'Paris', 'Île-de-France', 'A+', 3, '50 000 €', '2 500 €/an', 'Mines-Ponts', 'Top 5,Généraliste,Corps des Mines', 'Imperial;MIT', 'Paris 6e', 'Énergie,Data,Géosciences', 'https://www.minesparis.psl.eu'],
    ['ENS Paris-Saclay', 'Gif-sur-Yvette', 'Île-de-France', 'A+', 4, '40 000 €', 'Normalien rémunéré', 'X-ENS', 'Top 5,Recherche,Agrégation', null, 'Campus Saclay', 'Maths,Physique,Info,Mécanique', 'https://ens-paris-saclay.fr'],
    ['Ponts ParisTech', 'Champs-sur-Marne', 'Île-de-France', 'A+', 5, '47 000 €', '2 200 €/an', 'Mines-Ponts', 'Top 10,Génie civil,Transport', 'Columbia', 'Campus verdoyant', 'BTP,Transport,Urbanisme,Finance', 'https://www.ecoledesponts.fr'],
    ['ISAE-Supaéro', 'Toulouse', 'Occitanie', 'A+', 6, '45 000 €', '2 000 €/an', 'Mines-Ponts', 'Top 10,Aéronautique,Spatial', 'Caltech;Georgia Tech', 'Campus 30ha', 'Aéronautique,Spatial,Défense', 'https://www.isae-supaero.fr'],
    ['Télécom Paris', 'Palaiseau', 'Île-de-France', 'A', 7, '44 000 €', '2 500 €/an', 'Mines-Ponts', 'Top 10,Numérique,IA', 'Stanford (échanges)', 'Campus IP Paris', 'IA,Cybersécurité,Data,Réseaux', 'https://www.telecom-paris.fr'],
    ['ESPCI Paris - PSL', 'Paris', 'Île-de-France', 'A', 8, '42 000 €', 'Gratuit', 'X-ESPCI', 'Top 10,Recherche,5 Nobel', null, 'Paris 5e,Quartier Latin', 'Physique,Chimie,Bio', 'https://www.espci.psl.eu'],
    ['ENSTA Paris', 'Palaiseau', 'Île-de-France', 'A', 9, '43 000 €', '2 000 €/an', 'Mines-Ponts', 'Défense,Transport,Énergie', null, 'Campus IP Paris', 'Défense,Véhicules,Robotique', 'https://www.ensta-paris.fr'],
    ['Centrale Lyon', 'Écully', 'Auvergne-Rhône-Alpes', 'A', 10, '42 000 €', '2 500 €/an', 'Centrale', 'Top 15,Généraliste', 'TU Munich', 'Campus 17ha,Lyon', 'Énergie,Transport,Numérique', 'https://www.ec-lyon.fr'],
    ['Mines Saint-Étienne', 'Saint-Étienne', 'Auvergne-Rhône-Alpes', 'A', 11, '38 000 €', '2 500 €/an', 'Mines-Ponts', 'Mines,Santé,Micro-électronique', null, 'Campus Gardanne+St-É', 'Microélectronique,Santé,Environnement', 'https://www.mines-stetienne.fr'],
    ['Mines Nancy', 'Nancy', 'Grand Est', 'A', 12, '37 000 €', '2 500 €/an', 'Mines-Ponts', 'Mines,Matériaux', null, 'Campus Artem', 'Matériaux,Data,Énergie', 'https://mines-nancy.univ-lorraine.fr'],
    ['Centrale Nantes', 'Nantes', 'Pays de la Loire', 'A', 13, '40 000 €', '2 500 €/an', 'Centrale', 'Top 20,Mécanique,Océan', null, 'Campus 16ha', 'Mécanique,Océan,Ville,Usine du futur', 'https://www.ec-nantes.fr'],
    ['Centrale Marseille', 'Marseille', 'PACA', 'A', 14, '38 000 €', '2 500 €/an', 'Centrale', 'Méditerranée,Généraliste', null, 'Campus Luminy,Calanques', 'Énergie,IA,Mécanique', 'https://www.centrale-marseille.fr'],
    ['Arts et Métiers', 'Paris + 8 campus', 'National', 'A', 15, '38 000 €', '2 500 €/an', 'ENSAM', 'Industrie,Mécanique,Réseau alumni', null, '8 campus en France', 'Mécanique,Production,Énergie', 'https://artsetmetiers.fr'],
    ['IMT Atlantique', 'Brest/Nantes', 'Bretagne', 'A', 16, '37 000 €', '2 500 €/an', 'Mines-Télécom', 'Télécom,Énergie,Environnement', null, 'Campus Brest+Nantes', 'Numérique,Énergie,Environnement', 'https://www.imt-atlantique.fr'],
    ['ENSIMAG', 'Grenoble', 'Auvergne-Rhône-Alpes', 'A', 17, '42 000 €', '600 €/an', 'INP', 'Informatique,Maths appliquées,Finance', null, 'Campus Grenoble', 'Info,Finance quantitative,Data', 'https://ensimag.grenoble-inp.fr'],
    ['Grenoble INP - Phelma', 'Grenoble', 'Auvergne-Rhône-Alpes', 'A', 18, '38 000 €', '600 €/an', 'INP', 'Physique,Matériaux,Nanotech', null, 'Campus Grenoble,Minatec', 'Nanotech,Matériaux,Photonique', 'https://phelma.grenoble-inp.fr'],
    ['ENSC Bordeaux', 'Bordeaux', 'Nouvelle-Aquitaine', 'B+', 19, '35 000 €', '600 €/an', 'INP', 'Chimie,Matériaux', null, 'Campus Talence', 'Chimie,Polymères,Formulation', 'https://www.enscbp.fr'],
    ['Supmeca', 'Paris', 'Île-de-France', 'B+', 20, '34 000 €', '600 €/an', 'CCINP', 'Mécanique,Ingénierie numérique', null, 'Saint-Ouen', 'Mécanique,Simulation,CAO', 'https://www.supmeca.fr'],
    // ── Rang 21-50 ──
    ['Centrale Lille', 'Villeneuve-d\'Ascq', 'Hauts-de-France', 'A', 21, '40 000 €', '2 500 €/an', 'Centrale', 'Top 20,Généraliste', null, 'Campus Cité Scientifique', 'IA,Énergie,BTP', 'https://centralelille.fr'],
    ['ENSAE Paris', 'Palaiseau', 'Île-de-France', 'A', 22, '55 000 €', '2 600 €/an', 'X-ENS', 'Statistique,Data Science,Finance', null, 'Campus IP Paris', 'Statistique,Actuariat,Data,Finance', 'https://www.ensae.fr'],
    ['Chimie ParisTech - PSL', 'Paris', 'Île-de-France', 'A', 23, '40 000 €', '2 500 €/an', 'Mines-Ponts', 'Chimie,Recherche,PSL', null, 'Paris 5e', 'Chimie,Matériaux,Biotechnologies', 'https://www.chimieparistech.psl.eu'],
    ['INSA Lyon', 'Villeurbanne', 'Auvergne-Rhône-Alpes', 'A', 24, '39 000 €', '600 €/an', 'INSA', 'Top 20,Post-bac,Grande école', null, 'Campus La Doua', 'Mécanique,GE,Télécom,Bio', 'https://www.insa-lyon.fr'],
    ['INSA Toulouse', 'Toulouse', 'Occitanie', 'A', 25, '37 000 €', '600 €/an', 'INSA', 'Post-bac,Aéronautique', null, 'Campus Rangueil', 'Mécanique,Info,Génie civil', 'https://www.insa-toulouse.fr'],
    ['ENSEIRB-MATMECA', 'Bordeaux', 'Nouvelle-Aquitaine', 'A', 26, '39 000 €', '600 €/an', 'INP', 'Informatique,Électronique', null, 'Campus Talence', 'Info,Électronique,Matmeca', 'https://enseirb-matmeca.bordeaux-inp.fr'],
    ['Télécom SudParis', 'Évry', 'Île-de-France', 'A', 27, '40 000 €', '2 500 €/an', 'Mines-Télécom', 'Numérique,Réseaux', null, 'Campus Évry', 'Réseaux,Cybersécurité,IA', 'https://www.telecom-sudparis.eu'],
    ['ENAC', 'Toulouse', 'Occitanie', 'A', 28, '42 000 €', 'Gratuit (fonctionnaire)', 'ENAC', 'Aviation civile,Transport aérien', null, 'Campus 30ha Toulouse', 'Aviation,Contrôle aérien,Drones', 'https://www.enac.fr'],
    ['ENSEEIHT (INP Toulouse)', 'Toulouse', 'Occitanie', 'A', 29, '38 000 €', '600 €/an', 'INP', 'Électronique,Hydraulique,Informatique', null, 'Centre-ville Toulouse', 'Électronique,Informatique,Hydraulique', 'https://www.enseeiht.fr'],
    ['ESTP Paris', 'Cachan', 'Île-de-France', 'A', 30, '42 000 €', '7 600 €/an', 'ESTP', 'BTP,Génie civil,Topographie', null, 'Campus Cachan', 'BTP,Génie civil,Urbanisme', 'https://www.estp.fr'],
    ['UTC (Compiègne)', 'Compiègne', 'Hauts-de-France', 'A', 31, '38 000 €', '600 €/an', 'UT', 'Post-bac,Technologie', null, 'Campus centre-ville', 'Mécanique,Bio,Info,Chimie', 'https://www.utc.fr'],
    ['UTBM', 'Belfort-Montbéliard', 'Bourgogne-FC', 'B+', 32, '36 000 €', '600 €/an', 'UT', 'Post-bac,Énergie', null, 'Campus Belfort+Sévenans', 'Énergie,Mécanique,Info', 'https://www.utbm.fr'],
    ['UTT (Troyes)', 'Troyes', 'Grand Est', 'B+', 33, '36 000 €', '600 €/an', 'UT', 'Post-bac,Systèmes', null, 'Campus centre-ville', 'Systèmes,Matériaux,Info', 'https://www.utt.fr'],
    ['INSA Rennes', 'Rennes', 'Bretagne', 'B+', 34, '36 000 €', '600 €/an', 'INSA', 'Post-bac,Électronique', null, 'Campus Beaulieu', 'Électronique,Info,Mécatronique', 'https://www.insa-rennes.fr'],
    ['INSA Rouen', 'Rouen', 'Normandie', 'B+', 35, '35 000 €', '600 €/an', 'INSA', 'Post-bac,Chimie,Énergie', null, 'Campus Saint-Étienne-du-Rouvray', 'Chimie,Énergie,Mécanique', 'https://www.insa-rouen.fr'],
    ['INSA Strasbourg', 'Strasbourg', 'Grand Est', 'B+', 36, '36 000 €', '600 €/an', 'INSA', 'Post-bac,Architecture', null, 'Campus centre Strasbourg', 'Mécanique,GC,Topographie', 'https://www.insa-strasbourg.fr'],
    ['ENSMA (Poitiers)', 'Poitiers', 'Nouvelle-Aquitaine', 'B+', 37, '37 000 €', '600 €/an', 'CCINP', 'Aéronautique,Mécanique', null, 'Campus Futuroscope', 'Aéronautique,Thermique,Matériaux', 'https://www.ensma.fr'],
    ['ENSGSI Nancy', 'Nancy', 'Grand Est', 'B+', 38, '35 000 €', '600 €/an', 'CCINP', 'Génie des systèmes,Innovation', null, 'Campus Artem', 'Innovation,Systèmes industriels', 'https://ensgsi.univ-lorraine.fr'],
    ['ENSEM Nancy', 'Nancy', 'Grand Est', 'B+', 39, '36 000 €', '600 €/an', 'CCINP', 'Électricité,Mécanique,Énergie', null, 'Campus Brabois', 'Énergie,Mécanique,Électricité', 'https://ensem.univ-lorraine.fr'],
    ['ENIM Metz', 'Metz', 'Grand Est', 'B+', 40, '34 000 €', '600 €/an', 'CCINP', 'Mécanique,Production', null, 'Campus Technopôle', 'Mécanique,Production,Logistique', 'https://www.enim.univ-lorraine.fr'],
    ['CPE Lyon', 'Villeurbanne', 'Auvergne-Rhône-Alpes', 'B+', 41, '38 000 €', '8 200 €/an', 'CCINP', 'Chimie,Numérique', null, 'Campus La Doua', 'Chimie,Électronique,Numérique', 'https://www.cpe.fr'],
    ['ECE Paris', 'Paris', 'Île-de-France', 'B+', 42, '40 000 €', '9 200 €/an', 'CCINP', 'Numérique,Systèmes embarqués', null, 'Campus Paris 15e+Lyon', 'IA,Cybersécurité,Systèmes embarqués', 'https://www.ece.fr'],
    ['ESILV', 'Paris-La Défense', 'Île-de-France', 'B+', 43, '42 000 €', '9 000 €/an', 'CCINP', 'Post-bac,Finance,Numérique', null, 'Campus La Défense', 'Finance,IA,Mécanique numérique', 'https://www.esilv.fr'],
    ['EIGSI La Rochelle', 'La Rochelle', 'Nouvelle-Aquitaine', 'B', 44, '34 000 €', '7 500 €/an', 'CCINP', 'Généraliste', null, 'Campus La Rochelle+Casablanca', 'Mécatronique,BTP,Environnement', 'https://www.eigsi.fr'],
    ['ESIGELEC Rouen', 'Rouen', 'Normandie', 'B', 45, '35 000 €', '7 800 €/an', 'CCINP', 'Électronique,Systèmes', null, 'Campus Saint-Étienne-du-Rouvray', 'Électronique,Systèmes embarqués,IA', 'https://www.esigelec.fr'],
    ['ESIEE Paris', 'Noisy-le-Grand', 'Île-de-France', 'B', 46, '38 000 €', '7 000 €/an', 'CCINP', 'Électronique,Data,Santé', null, 'Campus Noisy', 'Data,Cybersécurité,Biotechnologies', 'https://www.esiee.fr'],
    ['ESME', 'Paris/Lyon/Bordeaux/Lille', 'National', 'B', 47, '37 000 €', '8 700 €/an', 'CCINP', 'Numérique,Énergie', null, 'Campus multi-villes', 'IA,Énergie,Mécatronique', 'https://www.esme.fr'],
    ['Polytech Sorbonne', 'Paris', 'Île-de-France', 'B', 48, '36 000 €', '600 €/an', 'Polytech', 'Réseau Polytech,Sorbonne', null, 'Campus Jussieu', 'Électronique,Mécanique,Maths', 'https://www.polytech.sorbonne-universite.fr'],
    ['Polytech Montpellier', 'Montpellier', 'Occitanie', 'B', 49, '34 000 €', '600 €/an', 'Polytech', 'Réseau Polytech', null, 'Campus Triolet', 'IA,Eau,Matériaux,Mécanique', 'https://www.polytech.umontpellier.fr'],
    ['Polytech Nantes', 'Nantes', 'Pays de la Loire', 'B', 50, '35 000 €', '600 €/an', 'Polytech', 'Réseau Polytech', null, 'Campus Chantrerie', 'Électronique,Informatique,GC,Énergie', 'https://polytech.univ-nantes.fr'],
  ];

  for (const [nom, ville, region, type, rang, salaire, cout, banque, tags, doubles, campus, spes, site] of ecoles) {
    run('INSERT INTO ecoles (nom, ville, region, type, rang, salaire, cout, banque, tags, doubles_diplomes, campus, specialites, site_web) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [nom, ville, region, type, rang, salaire, cout, banque, tags, doubles, campus, spes, site]);
  }
  console.log(`  → ${ecoles.length} écoles insérées.`);
}

function getAll_seed(db, sql) {
  const stmt = db.prepare(sql);
  let result = 0;
  if (stmt.step()) result = stmt.getAsObject().c;
  stmt.free();
  return result;
}

// ═══════════════════════════════════════════════
// USERS (demo)
// ═══════════════════════════════════════════════
try {
  run(`INSERT OR IGNORE INTO users (id, username, password_hash, nom, role, filiere_id)
    VALUES (1, 'demo', '$2b$10$8K1p/a0dL1LXMIgoEDFrwOfMQkf9zBQHFmI0m8QLpH2RyNJ2.hXbK', 'Eleve Test', 'eleve', 'mp')`);
  run(`INSERT OR IGNORE INTO streaks (user_id, current, longest, last_date)
    VALUES (1, 1, 1, date('now'))`);
} catch { /* already exists */ }

// Save
const data = db.export();
writeFileSync(DB_PATH, Buffer.from(data));
db.close();

console.log('Seed complete!');
console.log(`Database: ${DB_PATH}`);
