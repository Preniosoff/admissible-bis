import '../main.js';

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function init() {
  const root = document.getElementById('parent-report-app');
  if (!root) return;
  root.innerHTML = `
    <div class="info-layout">
      <div class="info-content">
        <section class="info-card">
          <h2>Créer un bilan court</h2>
          <form class="utility-form" id="parent-report-form">
            <label>Prénom ou initiales
              <input name="student" placeholder="Ex. Camille">
            </label>
            <label>Niveau
              <select name="level">
                <option>Collège</option>
                <option>Seconde</option>
                <option>Première générale</option>
                <option>Terminale générale</option>
                <option>CPGE scientifique</option>
              </select>
            </label>
            <label>Travail réalisé
              <select name="done">
                <option>Une fiche de cours relue et reformulée</option>
                <option>Deux exercices corrigés proprement</option>
                <option>Une méthode appliquée sur un exemple</option>
                <option>Une erreur récurrente identifiée et corrigée</option>
                <option>Une séance de travail chronométrée réalisée</option>
              </select>
            </label>
            <label>Point à reprendre
              <select name="next">
                <option>Revoir le cours avant de refaire des exercices</option>
                <option>Travailler la rédaction de la solution</option>
                <option>Refaire un exercice court sans aide</option>
                <option>Noter les erreurs dans le cahier d'erreurs</option>
                <option>Demander une précision à l'enseignant</option>
              </select>
            </label>
            <label>Besoin d'aide
              <select name="help">
                <option>Autonome pour la prochaine séance</option>
                <option>Besoin d'un rappel de cours</option>
                <option>Besoin d'un exercice guidé</option>
                <option>Besoin d'un échange avec l'enseignant</option>
              </select>
            </label>
            <button type="submit">Prévisualiser le bilan</button>
          </form>
        </section>
        <section class="info-card" id="parent-report-preview">
          <h2>Exemple de bilan</h2>
          <p>Remplissez le formulaire pour générer un bilan volontaire, lisible et imprimable.</p>
        </section>
      </div>
      <aside class="info-side">
        <div class="info-side-card">
          <h2>Principe</h2>
          <span>Le parent reçoit une synthèse, pas un accès permanent à l'activité détaillée de l'élève.</span>
        </div>
      </aside>
    </div>`;

  root.querySelector('#parent-report-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const preview = root.querySelector('#parent-report-preview');
    preview.innerHTML = `
      <div class="report-head">
        <div>
          <h2>Bilan de travail</h2>
          <p>${esc(fd.get('student') || 'Élève')} · ${esc(fd.get('level') || 'Niveau à préciser')} · ${new Date().toLocaleDateString('fr-FR')}</p>
        </div>
        <button class="btn btn-primary" id="print-parent-report" type="button">Imprimer</button>
      </div>
      <div class="report-grid">
        <div><strong>Travail réalisé</strong><p>${esc(fd.get('done') || 'Aucune information renseignée.')}</p></div>
        <div><strong>Prochaine priorité</strong><p>${esc(fd.get('next') || 'Aucune information renseignée.')}</p></div>
        <div><strong>Besoin identifié</strong><p>${esc(fd.get('help'))}</p></div>
      </div>`;
    preview.querySelector('#print-parent-report')?.addEventListener('click', () => window.print());
  });
}

document.addEventListener('DOMContentLoaded', init);
