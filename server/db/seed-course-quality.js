const LABELS_BY_TYPE = {
  def: 'Définition',
  df: 'Définition',
  th: 'Théorème',
  prop: 'Propriété',
  pr: 'Propriété',
  form: 'Formule',
  fo: 'Formule',
  meth: 'Méthode',
  methode: 'Méthode',
  ex: 'Exercice',
  exo: 'Exercice',
};

const LABELS_BY_LABEL = {
  DEF: 'Définition',
  DF: 'Définition',
  TH: 'Théorème',
  THM: 'Théorème',
  PROP: 'Propriété',
  PR: 'Propriété',
  FORM: 'Formule',
  FO: 'Formule',
  METH: 'Méthode',
  METHODE: 'Méthode',
  EX: 'Exercice',
  EXO: 'Exercice',
  EXERCICE: 'Exercice',
};

function getAll(db, sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

export function seedCourseQuality(db) {
  const rows = getAll(db, 'SELECT id, type, label FROM cartes');
  let updated = 0;

  for (const row of rows) {
    const byLabel = LABELS_BY_LABEL[String(row.label || '').trim().toUpperCase()];
    const byType = LABELS_BY_TYPE[String(row.type || '').trim().toLowerCase()];
    const label = byLabel || byType || row.label;
    if (!label || label === row.label) continue;
    db.run('UPDATE cartes SET label = ? WHERE id = ?', [label, row.id]);
    updated++;
  }

  console.log(`[course-quality] ${updated} labels de cartes normalisés.`);
}
