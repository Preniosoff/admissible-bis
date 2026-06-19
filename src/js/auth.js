import { api } from './api.js';

export function getUser() {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
}

export function getToken() {
  return localStorage.getItem('token');
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.reload();
}

export async function login(username, password) {
  const data = await api.login(username, password);
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data.user;
}

export function initAuthUI() {
  const btn = document.getElementById('login-btn');
  const modal = document.getElementById('login-modal');
  const nav = document.querySelector('nav');
  if (!btn) return;

  const user = getUser();
  if (user) {
    nav?.classList.add('nav-is-authenticated');
    nav?.classList.remove('nav-is-guest');
    const initials = user.nom.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const profileBlock = document.createElement('div');
    profileBlock.className = 'nav-profile';
    profileBlock.innerHTML = `
      <a href="dashboard.html" class="nav-profile-btn" title="${user.nom}">
        <div class="nav-avatar">${initials}</div>
      </a>
      <button class="nav-logout" title="Se déconnecter">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      </button>
    `;
    btn.replaceWith(profileBlock);
    profileBlock.querySelector('.nav-logout').addEventListener('click', () => {
      if (confirm('Se déconnecter ?')) logout();
    });
    return;
  }

  nav?.classList.add('nav-is-guest');
  nav?.classList.remove('nav-is-authenticated');

  if (modal) buildModal(modal);

  btn.addEventListener('click', () => modal?.classList.add('open'));
}

const NIVEAU_META = {
  college: { icon: 'COL', desc: '6ème → 3ème' },
  lycee:   { icon: 'LYC', desc: 'Seconde → Terminale' },
  prepa:   { icon: 'CPGE', desc: 'MPSI, MP, PCSI…' },
};

function buildModal(modal) {
  modal.querySelector('.modal-content').innerHTML = `
    <div class="modal-header">
      <div class="modal-tabs">
        <button class="modal-tab active" data-tab="login">Se connecter</button>
        <button class="modal-tab" data-tab="register">Créer un compte</button>
      </div>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">

      <!-- LOGIN -->
      <div class="tab-panel active" id="tab-login">
        <form id="login-form">
          <div class="form-group">
            <label for="login-username">Nom d'utilisateur</label>
            <input type="text" id="login-username" required autocomplete="username">
          </div>
          <div class="form-group">
            <label for="login-password">Mot de passe</label>
            <input type="password" id="login-password" required autocomplete="current-password">
          </div>
          <button type="submit" class="login-submit">Se connecter</button>
        </form>
        <div id="login-message" class="login-message"></div>
        <button id="forgot-link" type="button" style="background:none;border:none;font-family:inherit;
          font-size:0.78rem;color:var(--text-3);cursor:pointer;text-decoration:underline;
          text-underline-offset:3px;margin-top:0.5rem;display:block;text-align:center;width:100%">
          Mot de passe oublié ?
        </button>

        <!-- Panel reset password (caché par défaut) -->
        <div id="forgot-panel" style="display:none;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border-1)">
          <p style="font-size:0.8rem;color:var(--text-2);margin-bottom:0.75rem">
            Saisissez le nom d'utilisateur ; un code sera fourni.
          </p>
          <form id="forgot-form">
            <div class="form-group">
              <label>Nom d'utilisateur</label>
              <input type="text" id="forgot-username" required autocomplete="username">
            </div>
            <button type="submit" class="login-submit" style="background:var(--bg-2);color:var(--text-0);border:1px solid var(--border-0)">Obtenir un code</button>
          </form>
          <div id="forgot-message" class="login-message"></div>
          <form id="reset-form" style="display:none;margin-top:0.75rem">
            <div class="form-group">
              <label>Code reçu</label>
              <input type="text" id="reset-code" required placeholder="123456" maxlength="6">
            </div>
            <div class="form-group">
              <label>Nouveau mot de passe</label>
              <input type="password" id="reset-password" required minlength="6">
            </div>
            <button type="submit" class="login-submit">Réinitialiser</button>
          </form>
          <div id="reset-message" class="login-message"></div>
        </div>
      </div>

      <!-- REGISTER -->
      <div class="tab-panel" id="tab-register">
        <form id="register-form">

          <!-- Étape 1 : choix du niveau -->
          <div class="reg-step" id="reg-step-1">
            <p class="reg-step-label">Quelle est la classe concernée ?</p>
            <div class="reg-niveau-cards" id="reg-niveau-cards">
              <div class="reg-loading">Chargement…</div>
            </div>
          </div>

          <!-- Étape 2 : choix dans le niveau -->
          <div class="reg-step" id="reg-step-2" style="display:none">
            <button type="button" class="reg-back" id="reg-back-1">← Retour</button>
            <p class="reg-step-label" id="reg-step2-label"></p>
            <div class="reg-classe-grid" id="reg-classe-grid"></div>
          </div>

          <!-- Étape 3 : infos du compte -->
          <div class="reg-step" id="reg-step-3" style="display:none">
            <button type="button" class="reg-back" id="reg-back-2">← Retour</button>
            <div class="reg-recap" id="reg-recap"></div>
            <div class="form-group">
              <label for="reg-nom">Prénom</label>
              <input type="text" id="reg-nom" required autocomplete="given-name">
            </div>
            <div class="form-group">
              <label for="reg-username">Nom d'utilisateur</label>
              <input type="text" id="reg-username" required autocomplete="username">
            </div>
            <div class="form-group">
              <label for="reg-email">Email <span style="font-weight:400;opacity:0.6;font-size:0.78rem">(pour récupérer le compte)</span></label>
              <input type="email" id="reg-email" autocomplete="email" placeholder="adresse@email.fr">
            </div>
            <div class="form-group">
              <label for="reg-password">Mot de passe</label>
              <input type="password" id="reg-password" required minlength="6" autocomplete="new-password">
            </div>
            <label style="display:flex;gap:0.55rem;align-items:flex-start;font-size:0.8rem;line-height:1.45;margin:0.4rem 0 1rem;cursor:pointer">
              <input type="checkbox" id="reg-adult" required style="margin-top:3px;flex-shrink:0">
              <span>Je suis <strong>majeur(e)</strong>, ou le <strong>parent/représentant légal</strong> qui crée ce compte pour un élève mineur, et j'accepte les <a href="cgu.html" target="_blank">CGU</a> et la <a href="politique-confidentialite.html" target="_blank">politique de confidentialité</a>.</span>
            </label>
            <button type="submit" class="login-submit">Créer un compte</button>
          </div>

        </form>
        <div id="register-message" class="login-message"></div>
      </div>

    </div>
  `;

  // Close
  modal.querySelector('#modal-close').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

  // Tabs
  modal.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.tab === 'register') {
        window.location.href = 'inscription.html';
        return;
      }
      modal.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      modal.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      modal.querySelector(`#tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Login
  modal.querySelector('#login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = modal.querySelector('#login-message');
    try {
      await login(
        modal.querySelector('#login-username').value,
        modal.querySelector('#login-password').value
      );
      msg.textContent = 'Connecté !'; msg.className = 'login-message success';
      setTimeout(() => window.location.reload(), 500);
    } catch (err) {
      msg.textContent = err.message; msg.className = 'login-message error';
    }
  });

  // Mot de passe oublié — toggle panel
  modal.querySelector('#forgot-link').addEventListener('click', () => {
    const panel = modal.querySelector('#forgot-panel');
    panel.style.display = panel.style.display === 'none' ? '' : 'none';
  });

  // Forgot — demande de code
  modal.querySelector('#forgot-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = modal.querySelector('#forgot-message');
    const username = modal.querySelector('#forgot-username').value.trim();
    msg.textContent = 'Envoi...'; msg.className = 'login-message';
    try {
      const res = await api.forgotPassword(username);
      if (res.dev_code) {
        // Mode dev : afficher le code directement
        msg.innerHTML = `Code de réinitialisation : <strong style="font-size:1.1rem;letter-spacing:0.1em">${res.dev_code}</strong><br><span style="font-size:0.75rem;color:var(--text-3)">(mode dev — en prod ce code est envoyé par email)</span>`;
      } else if (res.email_sent) {
        msg.textContent = 'Code envoyé par email. Vérifiez la boîte de réception et les spams.';
      } else {
        msg.textContent = 'Si ce compte existe et a un email, un code lui a été envoyé.';
      }
      msg.className = 'login-message success';
      modal.querySelector('#reset-form').style.display = '';
    } catch (err) {
      msg.textContent = err.message; msg.className = 'login-message error';
    }
  });

  // Reset — nouveau mot de passe
  modal.querySelector('#reset-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = modal.querySelector('#reset-message');
    const code = modal.querySelector('#reset-code').value.trim();
    const password = modal.querySelector('#reset-password').value;
    msg.textContent = 'Réinitialisation...'; msg.className = 'login-message';
    try {
      await api.resetPassword(code, password);
      msg.textContent = 'Mot de passe réinitialisé. Vous pouvez vous connecter.';
      msg.className = 'login-message success';
      modal.querySelector('#forgot-panel').style.display = 'none';
      modal.querySelector('#reset-form').style.display = 'none';
    } catch (err) {
      msg.textContent = err.message; msg.className = 'login-message error';
    }
  });

  // Register flow state
  let selectedNiveau = null;
  let selectedFiliere = null;
  let niveaux = [];

  // Load niveaux → render step 1
  api.getNiveaux().then(data => {
    niveaux = data;
    const container = modal.querySelector('#reg-niveau-cards');
    container.innerHTML = '';
    niveaux.forEach(n => {
      const meta = NIVEAU_META[n.id] || { icon: 'NIV', desc: '' };
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'reg-niveau-card';
      card.innerHTML = `
        <span class="reg-niveau-icon" aria-hidden="true">${meta.icon}</span>
        <span class="reg-niveau-nom">${n.nom}</span>
        <span class="reg-niveau-desc">${meta.desc}</span>
      `;
      card.addEventListener('click', () => {
        selectedNiveau = n;
        selectedFiliere = null;
        showStep2(n);
      });
      container.appendChild(card);
    });
  }).catch(() => {
    modal.querySelector('#reg-niveau-cards').innerHTML =
      '<p style="color:var(--negative);font-size:0.82rem">Erreur de chargement</p>';
  });

  function showStep2(niveau) {
    modal.querySelector('#reg-step-1').style.display = 'none';
    modal.querySelector('#reg-step-2').style.display = '';
    modal.querySelector('#reg-step-3').style.display = 'none';

    const meta = NIVEAU_META[niveau.id] || {};
    modal.querySelector('#reg-step2-label').textContent = `Sélectionner une classe en ${niveau.nom}`;

    const grid = modal.querySelector('#reg-classe-grid');
    grid.innerHTML = '';
    niveau.filieres.forEach(f => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'reg-classe-btn';
      btn.textContent = f.nom;
      btn.addEventListener('click', () => {
        selectedFiliere = f;
        showStep3();
      });
      grid.appendChild(btn);
    });
  }

  function showStep3() {
    modal.querySelector('#reg-step-1').style.display = 'none';
    modal.querySelector('#reg-step-2').style.display = 'none';
    modal.querySelector('#reg-step-3').style.display = '';
    modal.querySelector('#reg-recap').innerHTML = `
      <div class="reg-recap-pill">${selectedFiliere.nom} · ${selectedNiveau.nom}</div>
    `;
  }

  modal.querySelector('#reg-back-1').addEventListener('click', () => {
    modal.querySelector('#reg-step-2').style.display = 'none';
    modal.querySelector('#reg-step-1').style.display = '';
  });

  modal.querySelector('#reg-back-2').addEventListener('click', () => {
    modal.querySelector('#reg-step-3').style.display = 'none';
    modal.querySelector('#reg-step-2').style.display = '';
  });

  // Submit register
  modal.querySelector('#register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = modal.querySelector('#register-message');
    if (!selectedFiliere) {
      msg.textContent = 'Sélectionnez une classe.'; msg.className = 'login-message error'; return;
    }
    if (!modal.querySelector('#reg-adult').checked) {
      msg.textContent = 'Cochez la case pour confirmer et accepter les CGU.'; msg.className = 'login-message error'; return;
    }
    try {
      const data = await api.register({
        nom: modal.querySelector('#reg-nom').value.trim(),
        username: modal.querySelector('#reg-username').value.trim(),
        email: modal.querySelector('#reg-email').value.trim() || undefined,
        password: modal.querySelector('#reg-password').value,
        filiere_id: selectedFiliere.id,
        adult_confirmed: true,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.removeItem('onboarding-done');
      msg.textContent = 'Compte créé ! Bienvenue 🎉'; msg.className = 'login-message success';
      setTimeout(() => window.location.href = 'onboarding.html', 600);
    } catch (err) {
      msg.textContent = err.message; msg.className = 'login-message error';
    }
  });
}
