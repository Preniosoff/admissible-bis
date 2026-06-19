import { api } from '../api.js';
import { skeletonCards } from '../skeleton.js';
import { initResourceGateway } from '../components/resource-gateway.js';
import { getUser } from '../auth.js';

export async function initMethodesPage() {
  const container = document.getElementById('methodes-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  let filiere = params.get('filiere') || '';
  let currentMatiere = params.get('matiere') || '';

  if (filiere && currentMatiere) {
    showWorkspace();
    await loadMatiere(filiere, currentMatiere, true);
  } else {
    showGateway();
    await initResourceGateway({
      root: '#methodes-gateway',
      resourceLabel: 'Méthodes',
      resourceName: 'les méthodes',
      intro: 'Commencez par votre niveau, puis votre filière, puis la matière qui vous intéresse.',
      preferredFiliereId: getUser()?.filiere_id || '',
      onComplete: async ({ filiere: selectedFiliere, matiere }) => {
        filiere = selectedFiliere.id;
        currentMatiere = matiere.id;
        updateUrl(filiere, currentMatiere);
        showWorkspace();
        await loadMatiere(filiere, currentMatiere, false);
      },
    });
  }

  async function loadMatiere(filiereId, matiereId, normalizeUrl) {
    container.innerHTML = skeletonCards(3, 'compact');

    const filiereData = await api.getFiliere(filiereId);
    const matiereExists = (filiereData.matieres || []).some(m => m.id === matiereId);
    const matiere = matiereExists
      ? matiereId
      : ((filiereData.matieres || []).find(m => m.id === 'ma') || filiereData.matieres?.[0])?.id || matiereId;
    if (normalizeUrl || matiere !== matiereId) updateUrl(filiereId, matiere);

    const methodes = await api.getMethodes(filiereId, matiere);

    if (!methodes.length) {
      container.innerHTML = '<div class="no-results">Aucune méthode pour cette matière.</div>';
      return;
    }

    const grouped = {};
    for (const m of methodes) {
      const chapter = firstChapter(m);
      const key = chapter ? `${chapter.ordre || 999}::${chapter.titre}` : `999::Méthodes générales`;
      (grouped[key] = grouped[key] || []).push(m);
    }

    const typeColors = {
      methode: 'var(--accent)',
      technique: 'var(--accent)',
      piege: 'var(--negative)',
      astuce: 'var(--info)',
      exemple: 'var(--info)',
    };
    const typeLabels = {
      methode: 'Méthode',
      technique: 'Méthode',
      piege: 'Point de vigilance',
      astuce: 'Repère',
      exemple: 'Exemple type',
    };

    const presentTypes = [...new Set(methodes.map(m => m.type))];
    const legendDefs = [
      { types: ['methode', 'technique'], color: 'var(--accent)', label: 'Méthode' },
      { types: ['piege'], color: 'var(--negative)', label: 'Point de vigilance' },
      { types: ['astuce'], color: 'var(--info)', label: 'Repère' },
      { types: ['exemple'], color: 'var(--info)', label: 'Exemple type' },
    ];
    const legend = legendDefs
      .filter(d => d.types.some(t => presentTypes.includes(t)))
      .map(d => `<div class="leg"><div class="dot" style="background:${d.color}"></div>${d.label}</div>`)
      .join('');
    const orderedGroups = Object.entries(grouped)
      .sort(([a], [b]) => Number(a.split('::')[0]) - Number(b.split('::')[0]));
    const chapters = orderedGroups.map(([key]) => ({
      id: slugify(key.split('::').slice(1).join('::')),
      title: key.split('::').slice(1).join('::'),
    }));

    container.innerHTML = `
      ${legend ? `<div class="legend">${legend}</div>` : ''}
      <div class="methodes-result-meta" id="methodes-result-meta"></div>
      <div class="methodes-layout">
        <aside class="methodes-sidebar" aria-label="Chapitres des méthodes">
          <strong>Chapitres</strong>
          <button type="button" class="methodes-side-link active" data-chapter-nav="">Tous les chapitres</button>
          ${chapters.map(ch => `<button type="button" class="methodes-side-link" data-chapter-nav="${escapeAttr(ch.title)}">${ch.title}</button>`).join('')}
        </aside>
        <div class="methodes-main">
          ${orderedGroups.map(([cat, items]) => {
            const title = cat.split('::').slice(1).join('::');
            return `<section class="methode-chapter" id="methode-${slugify(title)}" data-chapter-title="${escapeAttr(title)}">
              <h2>${title}</h2>
              ${items.map(m => renderCard(m, typeColors, typeLabels, title)).join('')}
            </section>`;
          }).join('')}
        </div>
      </div>
    `;

    hydrateMethodesControls(methodes, chapters);

    if (window.MathJax && typeof MathJax.typeset === 'function') {
      MathJax.typeset();
    }
  }
}

function firstChapter(methode) {
  const chapters = Array.isArray(methode.chapitres) ? methode.chapitres : [];
  return chapters[0] || null;
}

function showGateway() {
  document.getElementById('methodes-gateway')?.removeAttribute('hidden');
  document.getElementById('methodes-page-header')?.setAttribute('hidden', '');
  document.getElementById('methodes-controls')?.setAttribute('hidden', '');
  document.getElementById('methodes-workspace')?.setAttribute('hidden', '');
}

function showWorkspace() {
  document.getElementById('methodes-gateway')?.setAttribute('hidden', '');
  document.getElementById('methodes-page-header')?.removeAttribute('hidden');
  document.getElementById('methodes-controls')?.removeAttribute('hidden');
  document.getElementById('methodes-workspace')?.removeAttribute('hidden');
}

function updateUrl(filiere, matiere) {
  const url = new URL(window.location);
  url.searchParams.set('filiere', filiere);
  url.searchParams.set('matiere', matiere);
  history.pushState(null, '', url);
}

// Le contenu des méthodes vient de la base en HTML brut : certaines fiches ont
// des balises </div> orphelines qui, injectées telles quelles, ferment le grid
// trop tôt et éjectent les chapitres suivants (sidebar sticky cassée). On
// re-sérialise via un élément détaché — le parseur du navigateur équilibre tout.
function balanceHTML(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  return tmp.innerHTML;
}

function renderCard(m, typeColors, typeLabels, chapterTitle) {
  const color = typeColors[m.type] || 'var(--accent)';
  const label = typeLabels[m.type] || 'Méthode';
  const status = programmeMeta(m);

  return `
    <div class="card methode-card" data-method-type="${escapeAttr(m.type)}" data-method-status="${escapeAttr(status.key)}" data-method-chapter="${escapeAttr(chapterTitle)}" style="margin-bottom:1.5rem;border-left:3px solid ${color}">
      <div class="card-head" style="display:flex;align-items:center;gap:8px">
        <span style="font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;
                     padding:2px 8px;border-radius:var(--r-sm);background:${color};color:var(--text-inv)">
          ${label}
        </span>
        <span class="program-badge ${status.key}">${status.label}</span>
        ${m.titre}
      </div>
      <div class="card-body">${balanceHTML(m.contenu)}</div>
    </div>`;
}

function hydrateMethodesControls(methodes, chapters) {
  const search = document.getElementById('methodes-search');
  const chapterInput = document.getElementById('methodes-chapter');
  const suggestions = document.getElementById('methodes-chapter-suggestions');
  const meta = document.getElementById('methodes-result-meta');
  const filters = document.querySelectorAll('[data-method-filter]');
  const navLinks = document.querySelectorAll('[data-chapter-nav]');
  let activeType = 'all';

  if (suggestions) {
    suggestions.innerHTML = chapters.map(ch => `<option value="${escapeAttr(ch.title)}"></option>`).join('');
  }

  filters.forEach(btn => {
    btn.onclick = () => {
      filters.forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.dataset.methodFilter || 'all';
      apply();
    };
  });

  navLinks.forEach(btn => {
    btn.onclick = () => {
      const value = btn.dataset.chapterNav || '';
      if (chapterInput) chapterInput.value = value;
      document.querySelectorAll('[data-chapter-nav]').forEach(item => item.classList.toggle('active', item === btn));
      apply();
      if (value) document.getElementById(`methode-${slugify(value)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  });

  search.oninput = apply;
  chapterInput.oninput = () => {
    const wanted = normalize(chapterInput.value);
    document.querySelectorAll('[data-chapter-nav]').forEach(item => {
      item.classList.toggle('active', normalize(item.dataset.chapterNav || '') === wanted);
    });
    apply();
  };

  apply();

  function apply() {
    const q = normalize(search?.value || '');
    const chapter = normalize(chapterInput?.value || '');
    let visible = 0;

    document.querySelectorAll('.methode-card').forEach(card => {
      const cardText = normalize(card.textContent);
      const cardChapter = normalize(card.dataset.methodChapter || '');
      const typeOk = activeType === 'all' || card.dataset.methodType === activeType;
      const chapterOk = !chapter || cardChapter.includes(chapter);
      const queryOk = !q || cardText.includes(q) || cardChapter.includes(q);
      const show = typeOk && chapterOk && queryOk;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    document.querySelectorAll('.methode-chapter').forEach(section => {
      const hasVisible = section.querySelector('.methode-card:not([style*="display: none"])');
      section.style.display = hasVisible ? '' : 'none';
    });

    if (meta) {
      meta.textContent = `${visible} méthode${visible > 1 ? 's' : ''} affichée${visible > 1 ? 's' : ''} sur ${methodes.length}`;
    }
  }
}

function programmeMeta(methode) {
  if (methode.programme_status) {
    return {
      key: methode.programme_status,
      label: methode.programme_label || 'Programme',
    };
  }
  if (/hors programme/i.test(methode.contenu || '')) return { key: 'outside', label: 'Hors programme' };
  if (methode.type === 'astuce') return { key: 'extension', label: 'Approfondissement' };
  return { key: 'programme', label: 'Programme' };
}

function normalize(value) {
  return String(value || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'general';
}

function escapeAttr(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}
