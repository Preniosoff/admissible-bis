# Admiscible

Plateforme de révision pour les concours scientifiques français, du collège aux classes préparatoires. Fiches de cours (LaTeX natif), méthodes de concours, suivi de progression, emploi du temps, timer Pomodoro, cahier d'erreurs.

## Stack

- **Frontend** : HTML/CSS/JS vanilla, Vite (multi-page, root = `src/`)
- **Backend** : Express.js (port 3001), Node.js ESM
- **Base de données** : SQLite via sql.js, fichier `server/db/prepamp.sqlite`
- **Auth** : JWT (jsonwebtoken + bcryptjs)
- **Emails** : Nodemailer

## Commandes

```bash
npm run dev          # lance client (3000) + serveur (3001) en parallèle
npm run dev:server   # serveur seul
npm run dev:client   # Vite seul
npm run build        # build production dans dist/
npm run seed         # peuple la base de données
```

## Structure

```
src/                  # frontend (racine Vite)
  *.html              # pages (index, cours, dashboard, etc.)
  css/                # tokens.css, base.css, components.css, layout.css, pages.css
  js/                 # main.js, auth.js, theme.js, skeleton.js, components/
  assets/             # images, fonts

server/
  index.js            # point d'entrée Express
  middleware/auth.js  # vérification JWT
  routes/             # une route par domaine fonctionnel
  db/
    connection.js     # init sql.js
    schema.sql        # schéma complet
    prepamp.sqlite    # base de données
    seed.js           # données initiales
```

## Pages

index, cours, methodes, concours, ressources, dashboard, schedule, todos, focus, notes, erreurs, onboarding, profil, 404, mentions-legales, cgu, politique-confidentialite

## Conventions

- Pas de framework JS côté client — vanilla uniquement
- CSS organisé en tokens → base → components → layout → pages
- Les routes API sont toutes sous `/api/`
- Le proxy Vite redirige `/api` → `localhost:3001`
- Pas de TypeScript
