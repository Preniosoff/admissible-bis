# Déploiement d'Admiscible

Objectif : publier tout le site, garder les pages rapides en statique, et héberger le vrai backend Node sur OVH pour les comptes, les espaces payants, Stripe, les emails et la base de données.

Architecture recommandée :

```txt
GitHub Pages ou Cloudflare Pages
  admiscible.fr / www.admiscible.fr
  Front Vite : HTML, CSS, JS, static-api, images

OVH VPS Ubuntu
  api.admiscible.fr
  Backend Express : /api/auth, /api/billing, /api/dashboard...
  SQLite persistante : /var/www/admiscible/data/prepamp.sqlite
  PM2 + Nginx + HTTPS

Stripe
  Checkout + abonnements + webhook vers /api/billing/webhook
```

Le front est statique et appelle l'API via `VITE_API_BASE=https://api.admiscible.fr`. Sans cette variable au build, les pages publiées appellent `/api` sur GitHub Pages et les comptes ne peuvent pas fonctionner.

---

## 1. Front sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` build automatiquement `dist/` à chaque push sur `main`.

À vérifier dans GitHub :

- `Settings > Pages` : source `GitHub Actions`.
- Domaine personnalisé : `admiscible.fr` ou `www.admiscible.fr`.
- Secret optionnel : `VITE_STRIPE_PUBLIC_KEY`, si Stripe est utilisé côté front plus tard.

Le build utilise déjà :

```txt
VITE_API_BASE=https://api.admiscible.fr
```

Important : garder partout la même orthographe de marque et de domaine : `Admiscible`, `admiscible.fr`, `api.admiscible.fr`.

## 2. DNS OVH

Dans la zone DNS du domaine :

```txt
Type : A
Sous-domaine : api
Cible : IP_DU_VPS
```

Le front doit pointer vers GitHub Pages ou Cloudflare Pages selon ton choix :

```txt
Type : CNAME
Sous-domaine : www
Cible : cible GitHub Pages / Cloudflare Pages
```

Garde le `CNAME` dans `public/` si GitHub Pages sert le domaine personnalisé.

## 3. VPS OVH

Sur un VPS Ubuntu 24.04 :

```bash
ssh ubuntu@IP_DU_VPS
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git ufw
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Pare-feu :

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 4. Installer le backend

```bash
sudo mkdir -p /var/www/admiscible
sudo chown -R ubuntu:ubuntu /var/www/admiscible
cd /var/www/admiscible
git clone URL_DU_REPO .
npm ci --omit=dev
mkdir -p data
```

Créer `/var/www/admiscible/.env` :

```txt
NODE_ENV=production
PORT=3001
CLIENT_URL=https://admiscible.fr,https://www.admiscible.fr
PUBLIC_SITE_URL=https://www.admiscible.fr
DB_PATH=/var/www/admiscible/data/prepamp.sqlite
JWT_SECRET=une_longue_chaine_generee

SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM=Admiscible <no-reply@admiscible.fr>

STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ELEVE_PLUS=price_...
STRIPE_PRICE_FAMILLE=price_...
STRIPE_PRICE_ENSEIGNANT_PRO=price_...
STRIPE_PRICE_PROF_PARTICULIER_PRO=price_...
```

Générer `JWT_SECRET` :

```bash
openssl rand -hex 32
```

Lancer :

```bash
pm2 start server/index.js --name admiscible-api
pm2 save
pm2 startup
```

## 5. Nginx pour `api.admiscible.fr`

Créer `/etc/nginx/sites-available/admiscible-api` :

```nginx
server {
  listen 80;
  server_name api.admiscible.fr;

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Activer :

```bash
sudo ln -s /etc/nginx/sites-available/admiscible-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

HTTPS :

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.admiscible.fr
```

## 6. Stripe

Dans Stripe :

1. Créer les produits/prix :
   - Élève Plus : 7,99 €/mois
   - Famille : 11,99 €/mois
   - Enseignant Pro : 14,99 €/mois
   - Prof particulier Pro : 19,99 €/mois
2. Copier les `price_...` dans `.env`.
3. Créer le webhook :

```txt
https://api.admiscible.fr/api/billing/webhook
```

Événements utiles :

```txt
checkout.session.completed
customer.subscription.deleted
customer.subscription.paused
```

Puis copier le `whsec_...` dans `STRIPE_WEBHOOK_SECRET`.

## 7. Mettre à jour le site

Pour le front :

```bash
git add .
git commit -m "prepare commercial launch"
git push
```

GitHub Actions publie automatiquement `dist/`.

Pour le backend sur OVH :

```bash
ssh ubuntu@IP_DU_VPS
cd /var/www/admiscible
git pull
npm ci --omit=dev
pm2 restart admiscible-api
```

## 8. Checklist avant ouverture

- [ ] `https://www.admiscible.fr` affiche toutes les pages.
- [ ] `https://api.admiscible.fr/api/health` répond.
- [ ] Création de compte réelle testée.
- [ ] Connexion réelle testée.
- [ ] Paiement Stripe test en mode test.
- [ ] Webhook Stripe reçu.
- [ ] L'utilisateur passe bien en plan `personal`, `family`, `pro` ou `tutor`.
- [ ] Pages payantes bloquées sans abonnement.
- [ ] Pages de présentation ouvertes sans abonnement.
- [ ] Sauvegarde régulière de `/var/www/admiscible/data/prepamp.sqlite`.
- [ ] Mentions légales, CGU, confidentialité et CGV relues.
