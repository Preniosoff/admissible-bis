# Déploiement d'Admiscible

Architecture (rapport qualité/prix optimal, ~70 €/an + frais Stripe) :

```
  Cloudflare (DNS, gratuit)
        │
        ├── admiscible.fr ........... Cloudflare Pages (front Vite, gratuit)
        ├── api.admiscible.fr ....... Railway (back Express + volume SQLite, ~5 €/mois)
        └── MX / mail ................ Zoho Mail (boîtes humaines, gratuit)
                                       Brevo (e-mails transactionnels, gratuit)
```

Le front est statique et appelle l'API via `VITE_API_BASE`. Le back garde la base
SQLite sur un **disque persistant** (volume Railway) et la sauvegarde chaque nuit sur
Cloudflare R2.

---

## 0. Prérequis
- Créer la **micro-entreprise** (→ SIRET) et un **compte bancaire dédié** (→ IBAN).
- Pousser ce dépôt sur **GitHub** (privé).
- Vérifier que `server/db/prepamp.seed.sqlite` est bien commité (image de départ).

## 1. Domaine + Cloudflare
1. Acheter `admiscible.fr` (Porkbun ou Cloudflare Registrar, ~10 €/an).
2. Créer un compte **Cloudflare**, y ajouter le domaine, suivre les instructions pour
   pointer les *nameservers* du registrar vers Cloudflare.

## 2. Backend → Railway
1. Sur **railway.app** : *New Project → Deploy from GitHub repo* → ce dépôt.
2. Railway détecte Node et lance `npm start` (via le `Procfile`).
3. **Volume** : *Add Volume*, point de montage **`/data`**.
4. **Variables** (onglet *Variables*) — voir `.env.example` :
   - `NODE_ENV=production`
   - `DB_PATH=/data/prepamp.sqlite`
   - `CLIENT_URL=https://admiscible.fr,https://www.admiscible.fr`
   - `JWT_SECRET=…` (générer : `openssl rand -hex 32`)
   - `SMTP_*` (Brevo, étape 4) · `STRIPE_*` (étape 5) · `S3_*` (étape 6)
5. **Domaine** : *Settings → Networking → Custom Domain* → `api.admiscible.fr`
   (Railway donne un CNAME à coller dans Cloudflare).
6. **Sauvegarde nocturne** : *New → Cron Service* sur le même repo,
   schedule `0 3 * * *`, commande `npm run backup`, mêmes variables `S3_*` + `DB_PATH`.

## 3. Frontend → Cloudflare Pages
1. Cloudflare → **Pages** → *Connect to Git* → ce dépôt.
2. Build : commande `npm run build`, dossier de sortie **`dist`**.
3. **Variables de build** :
   - `VITE_API_BASE=https://api.admiscible.fr`
   - `VITE_STRIPE_PUBLIC_KEY=pk_live_…`
4. **Domaine** : ajouter `admiscible.fr` et `www` (*Custom domains*).

## 4. E-mails
**Boîtes humaines — Zoho Mail (gratuit)** : créer `contact@admiscible.fr`, suivre
l'assistant Zoho qui fournit les **MX** + un TXT de vérification.

**Transactionnel — Brevo (gratuit, 300/j)** : créer un compte, *Senders & domains →
authentifier admiscible.fr*. Brevo fournit une clé **SMTP** (→ variables `SMTP_*` de
Railway) et des enregistrements **DKIM** à ajouter.

### Enregistrements DNS (dans Cloudflare)
| Type | Nom | Valeur | Rôle |
|---|---|---|---|
| CNAME | `www` | (cible Pages) | front |
| CNAME | `api` | (cible Railway) | back |
| MX | `@` | (fournis par Zoho) | réception mail |
| TXT | `@` | `v=spf1 include:spf.brevo.com include:zoho.eu ~all` | SPF (autorise Brevo+Zoho) |
| TXT | `brevo._domainkey` | (fourni par Brevo) | DKIM Brevo |
| TXT | (fourni par Zoho) | (fourni par Zoho) | DKIM Zoho |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:contact@admiscible.fr` | DMARC |

> ⚠️ Un seul enregistrement SPF (`v=spf1 …`) par domaine : fusionne les `include:` si
> tu as plusieurs fournisseurs.

## 5. Stripe
1. Compte **entrepreneur individuel** (SIRET + IBAN).
2. Clés `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` → variables Railway.
3. **Webhook** : endpoint `https://api.admiscible.fr/api/billing/webhook`.
4. Sur les factures : *« TVA non applicable, art. 293 B du CGI »*.

## 6. Sauvegardes (Cloudflare R2)
1. Cloudflare → **R2** → créer le bucket `admiscible-backups`.
2. Créer un *API Token* R2 → renseigner `S3_ENDPOINT`, `S3_BUCKET`,
   `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY` (Railway, sur le web ET le cron).
3. Tester une fois à la main : `npm run backup`.

---

## Mettre à jour le contenu des cours
Le contenu vit dans la base. Après l'avoir enrichi en local :
```bash
npm run snapshot          # copie la base de travail → base d'amorçage commitée
git add server/db/prepamp.seed.sqlite && git commit -m "maj contenu" && git push
```
> Le **volume** garde les données des utilisateurs ; il n'est PAS écrasé par la base
> d'amorçage (qui ne sert qu'au tout premier démarrage). Pour pousser du nouveau contenu
> en prod sur un volume déjà initialisé, prévois une petite migration (je peux te la coder).

## Après le premier déploiement
- [ ] Supprimer les **comptes de test** (`demo`, etc.) de la base de prod.
- [ ] Vérifier l'envoi d'un e-mail (reset de mot de passe) → pas en spam.
- [ ] Tester un **paiement Stripe** en mode test puis live.
- [ ] Vérifier qu'une **sauvegarde** apparaît dans R2.
- [ ] Remplir mentions légales / CGV (clause mineurs + rétractation) / RGPD.
