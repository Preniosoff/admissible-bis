import { api } from '../api.js';

export async function initEtatContenusPage() {
  const root = document.getElementById('content-status-root');
  if (!root) return;
  root.innerHTML = '<div class="loading">Chargement de l’état des contenus...</div>';

  try {
    const niveaux = await api.getNiveaux();
    const rows = [];
    let totalFilieres = 0;
    let totalChapitres = 0;

    for (const niveau of niveaux) {
      let niveauChapitres = 0;
      let niveauMatieres = new Set();
      for (const filiere of niveau.filieres || []) {
        totalFilieres += 1;
        const data = await api.getFiliere(filiere.id);
        for (const matiere of data.matieres || []) {
          niveauMatieres.add(matiere.nom);
          const chaps = await api.getChapitres(filiere.id, matiere.id).catch(() => []);
          niveauChapitres += chaps.length;
        }
      }
      totalChapitres += niveauChapitres;
      rows.push({ niveau, matieres: niveauMatieres.size, chapitres: niveauChapitres });
    }

    root.innerHTML = `
      <section class="status-grid" aria-label="Synthèse des contenus">
        <div class="status-card"><h2>${totalFilieres}</h2><p>filières ou niveaux référencés</p></div>
        <div class="status-card"><h2>${totalChapitres}</h2><p>chapitres accessibles selon les parcours</p></div>
        <div class="status-card"><h2>Juin 2026</h2><p>repère de mise à jour de cette version</p></div>
      </section>

      <section class="info-card" style="margin-top:1rem">
        <h2>Couverture par niveau</h2>
        <div class="status-line">
          ${rows.map(({ niveau, matieres, chapitres }) => `
            <a href="choisir-niveau.html">
              <span>${niveau.nom}</span>
              <span>${matieres} matière${matieres > 1 ? 's' : ''} · ${chapitres} chapitre${chapitres > 1 ? 's' : ''}</span>
            </a>`).join('')}
        </div>
      </section>

      <section class="info-card">
        <h2>Statuts utilisés</h2>
        <ul>
          <li><strong>Disponible :</strong> contenu consultable dans le service.</li>
          <li><strong>En enrichissement :</strong> rubrique présente, couverture à compléter progressivement.</li>
          <li><strong>À vérifier :</strong> contenu à relire ou à compléter après signalement.</li>
        </ul>
      </section>

      <section class="info-card">
        <h2>Signaler une erreur ou un manque</h2>
        <p>Chaque chapitre de cours comporte désormais un lien de signalement. Vous pouvez aussi écrire directement à <a href="mailto:contact@admiscible.fr">contact@admiscible.fr</a>.</p>
      </section>`;
  } catch {
    root.innerHTML = '<div class="no-results">Impossible de charger l’état des contenus pour le moment.</div>';
  }
}
