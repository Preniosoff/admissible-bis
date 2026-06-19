const OUTSIDE = new Set([
  'Règle de Raabe-Duhamel',
  "Théorème d'Abel radial",
  'Intégrale de Frullani',
  'Lemme de Grönwall',
  'Théorème du point fixe de Banach',
]);

const EXTENSION = new Set([
  'Intégrale de Gauss et variantes',
  'Décomposition de Dunford $A = D + N$',
  'Projecteurs spectraux via interpolation de Lagrange',
  'Inégalité de Jensen et convexité',
  "Petit théorème de Fermat et indicatrice d'Euler",
  "Ordre d'un élément et théorème de Lagrange",
  'Système de congruences — Théorème chinois des restes',
]);

export function getMethodeProgrammeMeta(methode) {
  if (!methode) return programme();
  if (OUTSIDE.has(methode.titre)) return outside();
  if (EXTENSION.has(methode.titre)) return extension();
  if (Number(methode.id) >= 92) return programme('Programme collège');
  return programme();
}

function programme(label = 'Programme') {
  return {
    programme_status: 'programme',
    programme_label: label,
  };
}

function extension() {
  return {
    programme_status: 'extension',
    programme_label: 'Approfondissement',
  };
}

function outside() {
  return {
    programme_status: 'outside',
    programme_label: 'Hors programme',
  };
}
