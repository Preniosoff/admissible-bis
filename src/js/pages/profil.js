import '../main.js';
import { api } from '../api.js';
import { getUser, logout } from '../auth.js';
import { toast } from '../toast.js';

export async function initProfilPage() {
  const container = document.getElementById('profil-content');
  if (!container) return;

  const user = getUser();
  if (!user) {
    container.innerHTML = `
      <div style="text-align:center;padding:3rem">
        <p style="color:var(--text-2)">Connectez-vous pour accéder au profil.</p>
        <button onclick="document.getElementById('login-btn')?.click()"
          style="margin-top:1rem;padding:0.5rem 1.5rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">
          Se connecter
        </button>
      </div>`;
    return;
  }

  // Charger les filières disponibles
  let niveaux = [];
  try { niveaux = await api.getNiveaux(); } catch {}
  const filieres = niveaux.flatMap(n => n.filieres || []);

  render(container, user, filieres);
}

function card(title, content) {
  return `
    <div style="background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);overflow:hidden;margin-bottom:1.25rem">
      <div style="padding:var(--s-4) var(--s-5);border-bottom:1px solid var(--border-1);background:rgba(0,0,0,0.03)">
        <h3 style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-2);margin:0">${title}</h3>
      </div>
      <div style="padding:var(--s-5)">${content}</div>
    </div>`;
}

function fieldStyle() {
  return `width:100%;padding:0.55rem 0.8rem;border:1px solid var(--border-0);border-radius:var(--r-sm);background:var(--bg-1);color:var(--text-0);font-family:inherit;font-size:0.88rem;box-sizing:border-box`;
}

function render(container, user, filieres) {
  const initials = (user.nom || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const plan = user.plan || 'free';
  const planLabels = {
    free: 'Contenus gratuits',
    personal: 'Espace personnel',
    parent: 'Espace parent',
    family: 'Espace famille',
    premium: 'Premium',
    pro: 'Pro',
    admin: 'Administration',
  };
  const planLabel = planLabels[plan] || 'Contenus gratuits';
  const isPaidPlan = !['free'].includes(plan);
  const planColor = isPaidPlan ? 'var(--accent)' : 'var(--positive)';
  const planBg = isPaidPlan ? 'var(--accent-soft)' : 'var(--positive-soft)';

  const filiereOptions = filieres.map(f =>
    `<option value="${f.id}" ${f.id === user.filiere_id ? 'selected' : ''}>${f.nom}</option>`
  ).join('');

  container.innerHTML = `
    <!-- Avatar + infos rapides -->
    <div style="display:flex;align-items:center;gap:1rem;padding:1.5rem;background:var(--bg-card);border:1px solid var(--border-1);border-radius:var(--r-lg);margin-bottom:1.25rem">
      <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--accent-active),var(--accent));display:flex;align-items:center;justify-content:center;color:var(--text-inv);font-size:1.3rem;font-weight:800;flex-shrink:0">
        ${initials}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:1.05rem;font-weight:700;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${user.nom}</div>
        <div style="font-size:0.78rem;color:var(--text-3);margin-top:2px">@${user.username}</div>
      </div>
      <div style="font-size:0.75rem;font-weight:600;color:${planColor};background:${planBg};padding:0.3rem 0.7rem;border-radius:var(--r-full);white-space:nowrap">${planLabel}</div>
    </div>

    <!-- Informations du compte -->
    ${card('Informations du compte', `
      <form id="profile-form">
        <div style="margin-bottom:var(--s-4)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Nom d'affichage</label>
          <input id="pf-nom" type="text" value="${user.nom || ''}" style="${fieldStyle()}" required>
        </div>
        <div style="margin-bottom:var(--s-4)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Email <span style="font-weight:400;color:var(--text-3)">(pour récupération de compte)</span></label>
          <input id="pf-email" type="email" value="${user.email || ''}" placeholder="adresse@email.fr" style="${fieldStyle()}">
        </div>
        <div style="margin-bottom:var(--s-5)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Filière</label>
          <select id="pf-filiere" style="${fieldStyle()}">
            ${filiereOptions || `<option value="${user.filiere_id || ''}">${user.filiere_id || 'Non définie'}</option>`}
          </select>
        </div>
        <div style="display:flex;align-items:center;gap:var(--s-3)">
          <button type="submit" style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">
            Enregistrer
          </button>
          <span id="pf-msg" style="font-size:0.8rem"></span>
        </div>
      </form>
    `)}

    <!-- Mot de passe -->
    ${card('Mot de passe', `
      <form id="password-form">
        <div style="margin-bottom:var(--s-3)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Mot de passe actuel</label>
          <input id="pw-current" type="password" autocomplete="current-password" style="${fieldStyle()}" required>
        </div>
        <div style="margin-bottom:var(--s-3)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Nouveau mot de passe</label>
          <input id="pw-new" type="password" autocomplete="new-password" style="${fieldStyle()}" required minlength="6">
        </div>
        <div style="margin-bottom:var(--s-5)">
          <label style="display:block;font-size:0.72rem;font-weight:600;color:var(--text-2);margin-bottom:6px">Confirmer</label>
          <input id="pw-confirm" type="password" autocomplete="new-password" style="${fieldStyle()}" required>
        </div>
        <div style="display:flex;align-items:center;gap:var(--s-3)">
          <button type="submit" style="padding:0.5rem 1.4rem;border-radius:var(--r-full);background:var(--accent);color:var(--text-inv);border:none;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit">
            Changer
          </button>
          <span id="pw-msg" style="font-size:0.8rem"></span>
        </div>
      </form>
    `)}

    <!-- Compte -->
    ${card('Compte', `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-2)">
        <span style="font-size:0.85rem;color:var(--text-2)">Offre</span>
        <span style="font-size:0.85rem;font-weight:600;color:${planColor}">${planLabel}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-2)">
        <span style="font-size:0.85rem;color:var(--text-2)">Gestion</span>
        <a href="abonnement.html" style="font-size:0.85rem;font-weight:600;color:var(--accent)">Voir les offres</a>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-2)">
        <span style="font-size:0.85rem;color:var(--text-2)">Nom d'utilisateur</span>
        <span style="font-size:0.85rem;font-weight:500;color:var(--text-1)">@${user.username}</span>
      </div>
    `)}

    <!-- Déconnexion -->
    <div style="text-align:center;padding:1rem 0 0">
      <button id="logout-btn" style="background:none;border:none;color:var(--negative);font-size:0.82rem;font-weight:600;cursor:pointer;font-family:inherit;padding:0.4rem 1rem;border-radius:var(--r-sm);transition:background 0.15s">
        Se déconnecter
      </button>
    </div>
  `;

  // ── Formulaire profil ──
  container.querySelector('#profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = container.querySelector('#pf-msg');
    const nom = container.querySelector('#pf-nom').value.trim();
    const email = container.querySelector('#pf-email').value.trim();
    const filiere_id = container.querySelector('#pf-filiere').value;

    msg.style.color = 'var(--text-3)';
    msg.textContent = 'Enregistrement...';

    try {
      const res = await api.updateProfile({ nom, email, filiere_id });
      // Mettre à jour localStorage
      const stored = JSON.parse(localStorage.getItem('user') || '{}');
      stored.nom = res.user.nom;
      stored.filiere_id = res.user.filiere_id;
      localStorage.setItem('user', JSON.stringify(stored));

      // Rafraîchir l'avatar et le nom affiché
      const avatarEl = container.querySelector('div[style*="56px"]');
      if (avatarEl) {
        const newInitials = nom.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
        avatarEl.textContent = newInitials;
      }
      container.querySelector('div[style*="1.05rem"]').textContent = nom;
      msg.textContent = '';
      toast('Profil enregistré ✓', 'ok');
    } catch (err) {
      msg.textContent = '';
      toast(err.message || 'Erreur lors de la sauvegarde', 'error');
    }
  });

  // ── Formulaire mot de passe ──
  container.querySelector('#password-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = container.querySelector('#pw-msg');
    const current = container.querySelector('#pw-current').value;
    const nouveau = container.querySelector('#pw-new').value;
    const confirm = container.querySelector('#pw-confirm').value;

    if (nouveau !== confirm) {
      toast('Les mots de passe ne correspondent pas', 'error');
      return;
    }

    msg.style.color = 'var(--text-3)';
    msg.textContent = 'Mise à jour...';

    try {
      await api.changePassword(current, nouveau);
      container.querySelector('#password-form').reset();
      msg.textContent = '';
      toast('Mot de passe modifié ✓', 'ok');
    } catch (err) {
      msg.textContent = '';
      toast(err.message || 'Erreur', 'error');
    }
  });

  // ── Déconnexion ──
  container.querySelector('#logout-btn').addEventListener('click', () => {
    if (confirm('Se déconnecter ?')) logout();
  });
}

document.addEventListener('DOMContentLoaded', initProfilPage);
