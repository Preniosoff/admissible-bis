CREATE TABLE IF NOT EXISTS niveaux (
  id    TEXT PRIMARY KEY,
  nom   TEXT NOT NULL,
  ordre INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS filieres (
  id        TEXT PRIMARY KEY,
  nom       TEXT NOT NULL,
  niveau_id TEXT NOT NULL REFERENCES niveaux(id),
  ordre     INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS matieres (
  id    TEXT PRIMARY KEY,
  nom   TEXT NOT NULL,
  icone TEXT
);

CREATE TABLE IF NOT EXISTS filiere_matieres (
  filiere_id TEXT NOT NULL REFERENCES filieres(id),
  matiere_id TEXT NOT NULL REFERENCES matieres(id),
  ordre      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (filiere_id, matiere_id)
);

CREATE TABLE IF NOT EXISTS chapitres (
  id         TEXT PRIMARY KEY,
  matiere_id TEXT NOT NULL REFERENCES matieres(id),
  titre      TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS filiere_chapitres (
  filiere_id  TEXT NOT NULL REFERENCES filieres(id),
  chapitre_id TEXT NOT NULL REFERENCES chapitres(id),
  ordre       INTEGER NOT NULL,
  PRIMARY KEY (filiere_id, chapitre_id)
);

CREATE TABLE IF NOT EXISTS sections (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  chapitre_id TEXT NOT NULL REFERENCES chapitres(id),
  titre       TEXT NOT NULL,
  ordre       INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS cartes (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER NOT NULL REFERENCES sections(id),
  type       TEXT NOT NULL,
  label      TEXT,
  titre      TEXT,
  contenu    TEXT NOT NULL,
  ordre      INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  nom           TEXT NOT NULL,
  email         TEXT,
  role          TEXT NOT NULL DEFAULT 'eleve',
  plan          TEXT NOT NULL DEFAULT 'free',
  filiere_id    TEXT REFERENCES filieres(id),
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS progression (
  user_id       INTEGER NOT NULL REFERENCES users(id),
  carte_id      INTEGER NOT NULL REFERENCES cartes(id),
  status        TEXT NOT NULL DEFAULT 'todo',
  last_reviewed DATETIME,
  PRIMARY KEY (user_id, carte_id)
);

CREATE TABLE IF NOT EXISTS ecoles (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  nom              TEXT NOT NULL,
  ville            TEXT,
  region           TEXT,
  type             TEXT,
  rang             INTEGER,
  salaire          TEXT,
  cout             TEXT,
  banque           TEXT,
  tags             TEXT,
  doubles_diplomes TEXT,
  campus           TEXT,
  specialites      TEXT,
  site_web         TEXT
);

CREATE TABLE IF NOT EXISTS methodes (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  matiere_id TEXT NOT NULL REFERENCES matieres(id),
  categorie  TEXT NOT NULL,
  type       TEXT NOT NULL,
  titre      TEXT NOT NULL,
  contenu    TEXT NOT NULL,
  ordre      INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS filiere_methodes (
  filiere_id TEXT NOT NULL REFERENCES filieres(id),
  methode_id INTEGER NOT NULL REFERENCES methodes(id),
  PRIMARY KEY (filiere_id, methode_id)
);

-- Emplois du temps
CREATE TABLE IF NOT EXISTS schedules (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER REFERENCES users(id),
  name        TEXT NOT NULL,
  template_id TEXT,
  slots       TEXT NOT NULL DEFAULT '[]',
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_schedules_user ON schedules(user_id);

-- To-do list
CREATE TABLE IF NOT EXISTS todos (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL REFERENCES users(id),
  text        TEXT NOT NULL,
  done        INTEGER NOT NULL DEFAULT 0,
  priority    TEXT NOT NULL DEFAULT 'normal',
  due_date    TEXT,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_todos_user ON todos(user_id);
-- Sessions de travail chronométrées
CREATE TABLE IF NOT EXISTS focus_sessions (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL REFERENCES users(id),
  subject    TEXT NOT NULL,
  duration   INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_focus_user ON focus_sessions(user_id);

-- Streaks
CREATE TABLE IF NOT EXISTS streaks (
  user_id      INTEGER PRIMARY KEY REFERENCES users(id),
  current      INTEGER NOT NULL DEFAULT 0,
  longest      INTEGER NOT NULL DEFAULT 0,
  last_date    TEXT
);
-- Notes (grades)
CREATE TABLE IF NOT EXISTS grades (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL REFERENCES users(id),
  subject     TEXT NOT NULL,
  label       TEXT NOT NULL,
  grade       REAL NOT NULL,
  grade_max   REAL NOT NULL DEFAULT 20,
  coefficient REAL NOT NULL DEFAULT 1,
  class_avg   REAL,
  confidence  INTEGER,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_grades_user ON grades(user_id);
CREATE INDEX IF NOT EXISTS idx_cartes_section ON cartes(section_id);
CREATE INDEX IF NOT EXISTS idx_sections_chapitre ON sections(chapitre_id);
CREATE INDEX IF NOT EXISTS idx_filiere_chapitres_filiere ON filiere_chapitres(filiere_id);
CREATE INDEX IF NOT EXISTS idx_progression_user ON progression(user_id);

-- Cahier d'erreurs
CREATE TABLE IF NOT EXISTS erreurs (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL REFERENCES users(id),
  subject     TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'calcul',
  description TEXT NOT NULL,
  solution    TEXT,
  resolved    INTEGER NOT NULL DEFAULT 0,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_erreurs_user ON erreurs(user_id);
