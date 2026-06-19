import { api } from '../api.js';

const PAGE_RESULTS = [
  { label: 'Cours', href: 'cours.html', desc: 'Définitions, théorèmes, propriétés et formules.' },
  { label: 'Méthodes', href: 'methodes.html', desc: 'Démarches types, exemples et points de vigilance.' },
  { label: 'Sujets et exercices', href: 'ressources.html', desc: 'Ressources de travail et consolidation.' },
  { label: 'Annales concours', href: 'annales.html', desc: 'Sujets de concours CPGE par banque, filière, chapitre et mot-clé.' },
  { label: 'Annales bac', href: 'annales-bac.html', desc: 'Sujets du bac par série, spécialité, matière, chapitre et mot-clé.' },
  { label: 'Annales brevet', href: 'annales-brevet.html', desc: 'Sujets du DNB par série, matière, chapitre et mot-clé.' },
  { label: 'Concours et écoles', href: 'concours.html', desc: 'Écoles, banques de concours, frais et orientation.' },
  { label: 'Choisir mon niveau', href: 'choisir-niveau.html', desc: 'Point d’entrée par parcours scolaire.' },
  { label: 'Créer un compte guidé', href: 'inscription.html', desc: 'Création guidée selon le profil et le besoin.' },
  { label: 'Orientation', href: 'orientation.html', desc: 'Repères collège, lycée et post-bac avec liens publics de référence.' },
  { label: 'Attendus officiels', href: 'attendus-officiels.html', desc: 'Programmes reformulés en gestes de travail, mots-clés et sources officielles.' },
  { label: 'État des contenus', href: 'etat-contenus.html', desc: 'Couverture, disponibilité et mise à jour des contenus.' },
  { label: 'Élèves', href: 'eleves.html', desc: 'Accès direct aux contenus, au parcours et aux outils de travail.' },
  { label: 'Priorités élève', href: 'priorites-eleve.html', desc: 'Générer trois actions de travail simples pour aujourd’hui.' },
  { label: 'Parents', href: 'parents.html', desc: 'Comprendre le suivi, accompagner sans surveiller en continu.' },
  { label: 'Bilan parent', href: 'bilan-parent.html', desc: 'Préparer un bilan volontaire et imprimable à partager avec la famille.' },
  { label: 'Enseignants', href: 'enseignants.html', desc: 'Recommander des contenus et suivre une classe.' },
  { label: 'Séquences pédagogiques', href: 'sequences-pedagogiques.html', desc: 'Modèles de séances pour relier objectif, ressource et trace de travail.' },
  { label: 'Établissements', href: 'etablissements.html', desc: 'Déployer un cadre de travail gratuit et lisible.' },
  { label: 'Pilotage établissement', href: 'pilotage-etablissement.html', desc: 'Tableau local anonymisé pour suivre un déploiement.' },
  { label: 'Déploiement établissement', href: 'deploiement-etablissement.html', desc: 'Étapes, rôles et points à cadrer avant un usage collectif.' },
  { label: 'Matrice RGPD', href: 'matrice-rgpd.html', desc: 'Finalités, données, garanties et conservation indicative.' },
  { label: 'Fiche de présentation', href: 'fiche-presentation.html', desc: 'Fiche imprimable pour présenter le service.' },
  { label: 'Espace enseignant', href: 'espace-enseignant.html', desc: 'Préparer des recommandations et exporter un bilan de classe.' },
  { label: 'Alignement DSFR', href: 'conformite-dsfr.html', desc: 'Alignement visuel et fonctionnel avec les principes du Système de Design de l’État.' },
  { label: 'Sécurité', href: 'securite.html', desc: 'Données, sécurité, conservation, incidents et contact.' },
  { label: 'Transparence', href: 'transparence.html', desc: 'Indicateurs publics, couverture et engagements de correction.' },
  { label: 'Accès institutionnel', href: 'connexion-institutionnelle.html', desc: 'Préparation FranceConnect, EduConnect et rôles d’accès.' },
  { label: 'Statut du service', href: 'statut-service.html', desc: 'Disponibilité, incidents, limites connues et suivi opérationnel.' },
  { label: 'Contact et signalement', href: 'contact-signalement.html', desc: 'Signaler une erreur, une difficulté d’accès, un incident ou une demande établissement.' },
];

export async function initRecherchePage() {
  const form = document.getElementById('search-page-form');
  const input = document.getElementById('search-q');
  const filiereSelect = document.getElementById('search-filiere');
  const matiereSelect = document.getElementById('search-matiere');
  const typeSelect = document.getElementById('search-type');
  const results = document.getElementById('search-results');
  if (!form || !input || !results) return;

  const params = new URLSearchParams(location.search);
  const initial = (params.get('q') || '').trim();
  input.value = initial;
  await hydrateFilters(filiereSelect, params);
  if (matiereSelect) matiereSelect.value = params.get('matiere') || '';
  if (typeSelect) typeSelect.value = params.get('type') || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUrlAndRender(input, filiereSelect, matiereSelect, typeSelect, results);
  });

  document.querySelectorAll('[data-search-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      let preset = {};
      try { preset = JSON.parse(btn.dataset.searchPreset || '{}'); } catch {}
      input.value = preset.q || '';
      if (preset.filiere && filiereSelect) filiereSelect.value = preset.filiere;
      if (preset.matiere && matiereSelect) matiereSelect.value = preset.matiere;
      if (preset.type && typeSelect) typeSelect.value = preset.type;
      updateUrlAndRender(input, filiereSelect, matiereSelect, typeSelect, results);
    });
  });

  render(getQuery(input, filiereSelect, matiereSelect, typeSelect), results);
}

async function hydrateFilters(select, params) {
  if (!select) return;
  try {
    const niveaux = await api.getNiveaux();
    select.innerHTML = '<option value="">Tous les niveaux</option>' + niveaux.map(n =>
      `<optgroup label="${escapeHtml(n.nom)}">${(n.filieres || []).map(f =>
        `<option value="${escapeHtml(f.id)}">${escapeHtml(f.nom)}</option>`
      ).join('')}</optgroup>`
    ).join('');
    select.value = params.get('filiere') || '';
  } catch {
    select.innerHTML = '<option value="">Tous les niveaux</option>';
  }
}

function getQuery(input, filiereSelect, matiereSelect, typeSelect) {
  return {
    q: input.value.trim(),
    filiere: filiereSelect?.value || '',
    matiere: matiereSelect?.value || '',
    type: typeSelect?.value || '',
  };
}

function updateUrlAndRender(input, filiereSelect, matiereSelect, typeSelect, results) {
  const query = getQuery(input, filiereSelect, matiereSelect, typeSelect);
  const params = new URLSearchParams();
  if (query.q) params.set('q', query.q);
  if (query.filiere) params.set('filiere', query.filiere);
  if (query.matiere) params.set('matiere', query.matiere);
  if (query.type) params.set('type', query.type);
  history.replaceState(null, '', params.toString() ? `recherche.html?${params}` : 'recherche.html');
  render(query, results);
}

async function render(query, results) {
  const { q, filiere, matiere, type } = query;
  if (!q || q.length < 2) {
    results.innerHTML = `
      <div class="info-card">
        <h2>Rechercher dans le service</h2>
        <p>Saisissez au moins deux caractères pour rechercher dans les cours. Les filtres permettent ensuite de limiter les résultats à un niveau, une matière ou un type de contenu.</p>
      </div>
      ${renderPages('')}`;
    return;
  }

  results.innerHTML = '<div class="loading">Recherche en cours...</div>';
  let rows = [];
  try {
    rows = await api.searchAdvanced({ q, filiere, matiere, type, limit: 80 });
  } catch {
    results.innerHTML = '<div class="no-results">La recherche est momentanément indisponible.</div>';
    return;
  }

  const pageMatches = renderPages(q);
  const courseMatches = rows.length ? `
    <section class="info-card">
      <h2>Résultats dans les cours</h2>
      <p>${rows.length} résultat${rows.length > 1 ? 's' : ''}. Les résultats affichent le chapitre, la matière et le type de contenu lorsque l’information est disponible.</p>
      <div class="search-results-grid">
        ${rows.slice(0, 20).map(r => renderCourseResult(r, q)).join('')}
      </div>
    </section>` : '<div class="no-results">Aucun résultat direct dans les cours.</div>';

  results.innerHTML = `${courseMatches}${pageMatches}`;
}

function renderPages(q) {
  const query = q.toLowerCase();
  const pages = PAGE_RESULTS.filter(p => !query || `${p.label} ${p.desc}`.toLowerCase().includes(query));
  if (!pages.length) return '';
  return `
    <section class="info-card">
      <h2>Rubriques utiles</h2>
      <div class="search-results-grid">
        ${pages.map(p => `
          <a class="search-result-card" href="${p.href}">
            <h2>${p.label}</h2>
            <p>${p.desc}</p>
          </a>`).join('')}
      </div>
    </section>`;
}

function renderCourseResult(row, q) {
  const title = [row.label, row.titre].filter(Boolean).join(' — ') || row.chapitre_titre;
  const text = stripHtml(row.contenu).slice(0, 220);
  const href = `cours.html?filiere=${row.filiere_id || 'mp'}&matiere=${row.matiere_id || ''}#${row.chapitre_id}`;
  return `
    <a class="search-result-card" href="${href}">
      <span class="search-result-meta">${escapeHtml(row.matiere_id || 'cours')} · ${escapeHtml(row.type || 'contenu')}</span>
      <h2>${highlight(title, q)}</h2>
      <p>${highlight(text, q)}</p>
      <p style="margin-top:0.55rem;color:var(--text-2);font-weight:800">${row.chapitre_titre || 'Cours'}</p>
    </a>`;
}

function stripHtml(value) {
  const tmp = document.createElement('div');
  tmp.innerHTML = value || '';
  return (tmp.textContent || '').replace(/\s+/g, ' ').trim();
}

function highlight(value, q) {
  const safe = escapeHtml(value || '');
  if (!q) return safe;
  const re = new RegExp(`(${escapeRegex(q)})`, 'ig');
  return safe.replace(re, '<mark>$1</mark>');
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
