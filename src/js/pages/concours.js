import { api } from '../api.js';

export async function initConcoursPage() {
  initAnnalesSearch();

  const container = document.getElementById('concours-content');
  if (!container) return;

  const searchInput = document.getElementById('ecole-search');
  const sortSelect = document.getElementById('ecole-sort');
  const tagButtons = [...document.querySelectorAll('[data-ecole-tag]')];
  let activeTag = '';

  let ecoles = await api.getEcoles();
  render(ecoles);

  if (searchInput) searchInput.addEventListener('input', () => filter());
  if (sortSelect) sortSelect.addEventListener('change', () => filter());
  tagButtons.forEach(btn => btn.addEventListener('click', () => {
    activeTag = btn.dataset.ecoleTag || '';
    tagButtons.forEach(item => item.classList.toggle('active', item === btn));
    filter();
  }));

  function filter() {
    const q = (searchInput?.value || '').toLowerCase();
    const sort = sortSelect?.value || 'rang';
    let filtered = ecoles;

    if (q) {
      filtered = filtered.filter(e =>
        e.nom.toLowerCase().includes(q) ||
        (e.ville || '').toLowerCase().includes(q) ||
        (e.region || '').toLowerCase().includes(q) ||
        (e.banque || '').toLowerCase().includes(q) ||
        (e.specialites || []).some(s => s.toLowerCase().includes(q)) ||
        (e.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }
    if (activeTag) filtered = filtered.filter(e => domainMatch(e, activeTag));

    if (sort === 'rang') filtered.sort((a, b) => a.rang - b.rang);
    else if (sort === 'nom') filtered.sort((a, b) => a.nom.localeCompare(b.nom));

    render(filtered);
  }

  function render(list) {
    if (!list.length) {
      container.innerHTML = '<div class="no-results">Aucune école trouvée.</div>';
      return;
    }

    container.innerHTML = `
      <div class="ecoles-count">${list.length} école${list.length > 1 ? 's' : ''} référencée${list.length > 1 ? 's' : ''}</div>
      <div class="ecoles-list">
        ${list.map(e => renderRow(e)).join('')}
      </div>`;

    // Toggle expand on click
    container.querySelectorAll('.ecole-row').forEach(row => {
      row.addEventListener('click', (ev) => {
        if (ev.target.closest('a')) return; // don't toggle if clicking a link
        const details = row.querySelector('.ecole-details');
        const isOpen = row.classList.toggle('expanded');
        if (details) details.style.maxHeight = isOpen ? details.scrollHeight + 'px' : '0';
        // Close others
        container.querySelectorAll('.ecole-row.expanded').forEach(other => {
          if (other !== row) {
            other.classList.remove('expanded');
            const d = other.querySelector('.ecole-details');
            if (d) d.style.maxHeight = '0';
          }
        });
      });
    });
  }
}

const SUBJECT_TEMPLATES = [
  {
    banque: 'x-ens',
    banqueLabel: 'X-ENS',
    filieres: ['mp', 'mpi'],
    matiere: 'maths',
    epreuve: 'Mathématiques A',
    themes: ['analyse', 'algebre'],
    chapitres: ['Séries entières', 'Suites et séries de fonctions', 'Réduction des endomorphismes'],
    mots: ['series entieres', 'developpement asymptotique', 'rayon de convergence', 'diagonalisation', 'endomorphisme'],
    difficulte: 'selectif',
  },
  {
    banque: 'mines-ponts',
    banqueLabel: 'Mines-Ponts',
    filieres: ['mp', 'pc', 'psi'],
    matiere: 'physique',
    epreuve: 'Physique 1',
    themes: ['mecanique', 'ondes'],
    chapitres: ['Mécanique du point', 'Énergie mécanique', 'Oscillateurs', 'Ondes mécaniques'],
    mots: ['mecanique', 'energie', 'oscillateur', 'equilibre', 'ondes', 'resonance'],
    difficulte: 'selectif',
  },
  {
    banque: 'centrale-supelec',
    banqueLabel: 'Centrale-Supélec',
    filieres: ['mp', 'pc', 'psi', 'mpi'],
    matiere: 'maths',
    epreuve: 'Mathématiques 2',
    themes: ['probabilites', 'analyse'],
    chapitres: ['Variables aléatoires', 'Convergence', 'Intégrales à paramètre'],
    mots: ['probabilites', 'loi', 'esperance', 'variance', 'integrale a parametre', 'convergence dominee'],
    difficulte: 'standard',
  },
  {
    banque: 'ccinp',
    banqueLabel: 'CCINP',
    filieres: ['mp', 'pc', 'psi', 'pt'],
    matiere: 'physique',
    epreuve: 'Physique-Chimie',
    themes: ['thermodynamique', 'ondes'],
    chapitres: ['Premier principe', 'Machines thermiques', 'Optique ondulatoire', 'Interférences'],
    mots: ['thermodynamique', 'machine thermique', 'rendement', 'optique', 'interferences', 'diffraction'],
    difficulte: 'standard',
  },
  {
    banque: 'e3a-polytech',
    banqueLabel: 'e3a-Polytech',
    filieres: ['mp', 'pc', 'psi', 'pt'],
    matiere: 'si',
    epreuve: 'Sciences industrielles',
    themes: ['mecanique'],
    chapitres: ['Cinématique', 'Statique', 'Asservissements', 'Énergétique'],
    mots: ['cinematique', 'statique', 'asservissement', 'correcteur', 'chaine energie'],
    difficulte: 'progressif',
  },
  {
    banque: 'ccinp',
    banqueLabel: 'CCINP',
    filieres: ['mp', 'mpi'],
    matiere: 'info',
    epreuve: 'Informatique',
    themes: ['algorithmique'],
    chapitres: ['Graphes', 'Programmation dynamique', 'Complexité', 'Bases de données'],
    mots: ['graphes', 'dijkstra', 'parcours', 'programmation dynamique', 'complexite', 'sql'],
    difficulte: 'standard',
  },
  {
    banque: 'agro-veto',
    banqueLabel: 'Agro-Véto',
    filieres: ['bcpst'],
    matiere: 'svt',
    epreuve: 'Biologie-Géologie',
    themes: ['geologie', 'biologie'],
    chapitres: ['Génétique', 'Métabolisme', 'Géodynamique', 'Écosystèmes'],
    mots: ['genetique', 'metabolisme', 'geodynamique', 'ecosysteme', 'photosynthese'],
    difficulte: 'standard',
  },
  {
    banque: 'centrale-supelec',
    banqueLabel: 'Centrale-Supélec',
    filieres: ['pc'],
    matiere: 'chimie',
    epreuve: 'Chimie',
    themes: ['chimie-organique', 'thermodynamique'],
    chapitres: ['Chimie organique', 'Cinétique', 'Équilibres chimiques', 'Orbitales'],
    mots: ['chimie organique', 'mecanisme', 'substitution', 'cinétique', 'equilibre', 'orbitales'],
    difficulte: 'selectif',
  },
];

const ANNALES = buildAnnales();

function buildAnnales() {
  const years = Array.from({ length: 20 }, (_, index) => 2025 - index);
  const list = [];
  years.forEach((annee, yearIndex) => {
    SUBJECT_TEMPLATES.forEach((template, templateIndex) => {
      const filiere = template.filieres[(yearIndex + templateIndex) % template.filieres.length];
      const variant = template.chapitres[(yearIndex + templateIndex) % template.chapitres.length];
      list.push({
        id: `${template.banque}-${template.matiere}-${filiere}-${annee}-${templateIndex}`,
        annee,
        filiere,
        matiere: template.matiere,
        banque: template.banque,
        banqueLabel: template.banqueLabel,
        epreuve: template.epreuve,
        titre: `${template.banqueLabel} ${filiere.toUpperCase()} ${annee} — ${template.epreuve}`,
        themes: template.themes,
        chapitres: template.chapitres,
        focus: variant,
        mots: [...template.mots, ...template.chapitres, ...template.themes],
        difficulte: template.difficulte,
        duree: template.matiere === 'info' ? '3 h' : '4 h',
        statut: yearIndex < 2 ? 'À indexer' : 'Indexé',
      });
    });
  });
  return list;
}

function initAnnalesSearch() {
  const form = document.getElementById('annales-form');
  const results = document.getElementById('annales-results');
  if (!form || !results) return;

  const controls = {
    q: document.getElementById('annales-q'),
    filiere: document.getElementById('annales-filiere'),
    matiere: document.getElementById('annales-matiere'),
    banque: document.getElementById('annales-banque'),
    annee: document.getElementById('annales-annee'),
    theme: document.getElementById('annales-theme'),
    difficulte: document.getElementById('annales-difficulte'),
  };

  hydrateYears(controls.annee);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runSearch();
  });
  Object.values(controls).forEach(control => {
    control?.addEventListener('input', runSearch);
    control?.addEventListener('change', runSearch);
  });
  document.querySelectorAll('[data-annales-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      controls.q.value = btn.dataset.annalesPreset || '';
      runSearch();
    });
  });

  runSearch();

  function runSearch() {
    const query = normalize(controls.q?.value || '');
    const filters = {
      filiere: controls.filiere?.value || '',
      matiere: controls.matiere?.value || '',
      banque: controls.banque?.value || '',
      annee: controls.annee?.value || '',
      theme: controls.theme?.value || '',
      difficulte: controls.difficulte?.value || '',
    };
    const terms = query.split(/\s+/).filter(Boolean);
    const filtered = ANNALES
      .map(item => ({ item, score: scoreAnnale(item, terms) }))
      .filter(({ item, score }) => {
        if (terms.length && score === 0) return false;
        if (filters.filiere && item.filiere !== filters.filiere) return false;
        if (filters.matiere && item.matiere !== filters.matiere) return false;
        if (filters.banque && item.banque !== filters.banque) return false;
        if (filters.annee && String(item.annee) !== filters.annee) return false;
        if (filters.theme && !item.themes.includes(filters.theme)) return false;
        if (filters.difficulte && item.difficulte !== filters.difficulte) return false;
        return true;
      })
      .sort((a, b) => b.score - a.score || b.item.annee - a.item.annee)
      .slice(0, 18);
    renderAnnales(filtered, terms);
  }
}

function hydrateYears(select) {
  if (!select || select.dataset.ready) return;
  for (let year = 2025; year >= 2006; year -= 1) {
    const option = document.createElement('option');
    option.value = String(year);
    option.textContent = String(year);
    select.appendChild(option);
  }
  select.dataset.ready = 'true';
}

function scoreAnnale(item, terms) {
  if (!terms.length) return 1;
  const haystack = normalize([
    item.titre,
    item.epreuve,
    item.banqueLabel,
    item.filiere,
    item.matiere,
    item.focus,
    item.difficulte,
    ...item.themes,
    ...item.chapitres,
    ...item.mots,
  ].join(' '));
  return terms.reduce((score, term) => {
    if (!haystack.includes(term)) return score;
    if (normalize(item.focus).includes(term)) return score + 6;
    if (item.chapitres.some(chapitre => normalize(chapitre).includes(term))) return score + 5;
    if (item.themes.some(theme => normalize(theme).includes(term))) return score + 4;
    return score + 2;
  }, 0);
}

function renderAnnales(rows, terms) {
  const results = document.getElementById('annales-results');
  if (!results) return;
  if (!rows.length) {
    results.innerHTML = `
      <div class="annales-empty">
        <strong>Aucun sujet trouvé.</strong>
        <span>Essayez un thème plus large, une autre banque ou retirez le filtre d'année.</span>
      </div>`;
    return;
  }
  results.innerHTML = `
    <div class="annales-result-head">
      <strong>${rows.length} sujet${rows.length > 1 ? 's' : ''} recommandé${rows.length > 1 ? 's' : ''}</strong>
      <span>${terms.length ? `Trié par pertinence sur ${terms.length} mot${terms.length > 1 ? 's' : ''}-clé${terms.length > 1 ? 's' : ''}` : 'Dernières annales indexées'}</span>
    </div>
    <div class="annales-list">
      ${rows.map(({ item, score }) => renderAnnale(item, score)).join('')}
    </div>`;
}

function renderAnnale(item, score) {
  return `
    <article class="annale-card">
      <div class="annale-main">
        <div class="annale-meta">
          <span>${item.banqueLabel}</span>
          <span>${item.filiere.toUpperCase()}</span>
          <span>${labelMatiere(item.matiere)}</span>
          <span>${item.annee}</span>
        </div>
        <h3>${item.titre}</h3>
        <p>Focus recommandé : <strong>${item.focus}</strong>. Recherche utile pour travailler ${item.chapitres.slice(0, 3).join(', ')}.</p>
        <div class="annale-tags">
          ${item.themes.map(theme => `<span>${labelTheme(theme)}</span>`).join('')}
          ${item.chapitres.slice(0, 4).map(chapitre => `<span>${chapitre}</span>`).join('')}
        </div>
      </div>
      <div class="annale-side">
        <span class="annale-score">${score || '—'} pertinence</span>
        <span class="annale-difficulty">${labelDifficulty(item.difficulte)}</span>
        <span class="annale-status">${item.statut}</span>
        <button type="button" class="annale-open" disabled>PDF à relier</button>
      </div>
    </article>`;
}

function labelMatiere(value) {
  return {
    maths: 'Mathématiques',
    physique: 'Physique',
    chimie: 'Chimie',
    info: 'Informatique',
    si: 'SI',
    svt: 'SVT',
  }[value] || value;
}

function labelTheme(value) {
  return {
    analyse: 'Analyse',
    algebre: 'Algèbre',
    probabilites: 'Probabilités',
    mecanique: 'Mécanique',
    ondes: 'Ondes',
    thermodynamique: 'Thermodynamique',
    algorithmique: 'Algorithmique',
    'chimie-organique': 'Chimie organique',
  }[value] || value;
}

function labelDifficulty(value) {
  return {
    progressif: 'Progressif',
    standard: 'Standard concours',
    selectif: 'Très sélectif',
  }[value] || value;
}

function normalize(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function domainMatch(ecole, tag) {
  const text = normalize([
    ecole.nom,
    ecole.banque,
    ...(ecole.tags || []),
    ...(ecole.specialites || []),
  ].join(' '));
  const map = {
    aero: ['aero', 'aeronautique', 'spatial', 'aviation', 'drones'],
    info: ['info', 'informatique', 'numerique', 'ia', 'data', 'cyber', 'reseaux'],
    energie: ['energie', 'hydraulique', 'electricite', 'thermique'],
    sante: ['sante', 'bio', 'biotech', 'biotechnologies'],
    environnement: ['environnement', 'eau', 'ocean', 'geosciences', 'durable'],
    btp: ['btp', 'genie civil', 'urbanisme', 'topographie'],
  };
  return (map[tag] || [tag]).some(word => text.includes(word));
}

function renderSalaire(val) {
  const display = (!val || val === '—') ? '—' : val;
  return `<div class="ecole-stat"><div class="ecole-stat-label">Salaire indicatif</div><div class="ecole-stat-val">${display}</div></div>`;
}

function renderFrais(val) {
  const num = parseInt((val || '').replace(/\s/g, '').replace(/[^\d]/g, ''), 10);
  const display = (!val || val === '—') ? '—' : (num === 0 || (val.toLowerCase().includes('solde'))) ? 'Gratuit' : val;
  return `<div class="ecole-stat"><div class="ecole-stat-label">Frais annuels</div><div class="ecole-stat-val">${display}</div></div>`;
}

function renderRow(e) {
  const top3 = e.rang <= 3;
  const rankColor = top3 ? 'var(--accent)' : e.rang <= 10 ? 'var(--info)' : 'var(--text-3)';

  const specBadges = (e.specialites || []).slice(0, 5).map(s =>
    `<span class="ecole-spec">${s}</span>`
  ).join('');

  const tagBadges = (e.tags || []).map(t =>
    `<span class="ecole-tag">${t}</span>`
  ).join('');

  const ddChips = (e.doubles_diplomes || []).map(d =>
    `<span class="ecole-dd-chip">${d}</span>`
  ).join('');

  return `
  <div class="ecole-row" data-id="${e.id}">
    <div class="ecole-summary">
      <div class="ecole-rank" style="color:${rankColor}">${e.rang}</div>
      <div class="ecole-info">
        <div class="ecole-name">${e.nom}</div>
        <div class="ecole-meta">
          <span>${e.ville || ''}</span>
          ${e.banque ? `<span class="ecole-banque">${e.banque}</span>` : ''}
          <span class="ecole-type-chip">${e.type || ''}</span>
        </div>
      </div>
      <div class="ecole-stats">
        ${renderSalaire(e.salaire)}
        ${renderFrais(e.cout)}
      </div>
      <div class="ecole-chevron">&#9662;</div>
    </div>
    <div class="ecole-details" style="max-height:0">
      <div class="ecole-details-inner">
        <div class="ecole-details-grid">
          <div class="ecole-detail-section">
            <div class="ecole-detail-title">Spécialisations</div>
            <div class="ecole-tags">${specBadges || '<span class="ecole-empty">—</span>'}</div>
          </div>
          <div class="ecole-detail-section">
            <div class="ecole-detail-title">Repères</div>
            <div class="ecole-tags">${tagBadges || '<span class="ecole-empty">—</span>'}</div>
          </div>
          ${ddChips ? `<div class="ecole-detail-section">
            <div class="ecole-detail-title">Doubles diplômes</div>
            <div class="ecole-tags">${ddChips}</div>
          </div>` : ''}
          ${(e.campus || []).length ? `<div class="ecole-detail-section">
            <div class="ecole-detail-title">Campus</div>
            <div class="ecole-campus-text">${e.campus.join(' · ')}</div>
          </div>` : ''}
        </div>
        ${e.site_web ? `<a href="${e.site_web}" target="_blank" rel="noopener" class="ecole-link">
          Visiter le site officiel <span>&#8599;</span>
        </a>` : ''}
      </div>
    </div>
  </div>`;
}
