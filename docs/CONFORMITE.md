# Conformité juridique & RGPD — Admiscible

Document **interne** (ne pas publier). Sert de registre des traitements et de checklist.
Le responsable de traitement = toi (entrepreneur individuel).

## 1. Registre des activités de traitement (art. 30 RGPD)

| Traitement | Données | Finalité | Base légale | Conservation | Destinataires |
|---|---|---|---|---|---|
| Comptes | prénom, identifiant, e-mail, mot de passe haché, classe | créer/gérer le compte | contrat | compte + 1 an | Railway |
| Apprentissage | progression, notes, to-do, planning, focus, erreurs, séries | fonctionnalités de révision | contrat | compte + 6 mois | Railway |
| Consentements | horodatages CGU, majorité/représentant légal | preuve | obligation légale / intérêt légitime | 5 ans | — |
| Sécurité | adresse IP, date/heure | anti-fraude, rate-limit | intérêt légitime | 12 mois | Railway |
| E-mails | e-mail, prénom | réinitialisation | contrat | durée du compte | Brevo |

## 2. Sous-traitants / prestataires (signer/garder leurs DPA)

| Prestataire | Rôle | Lieu | DPA / politique |
|---|---|---|---|
| Brevo (Sendinblue) | e-mails transactionnels | UE | brevo.com/legal/privacypolicy |
| Railway | hébergement app + base | UE | railway.app (DPA sur demande) |
| Cloudflare | front, DNS, sauvegardes R2 | UE/US (CCT) | cloudflare.com/cloudflare-customer-dpa |
| jsDelivr | CDN MathJax | international | (ressource publique) |
| Google Fonts | police | US | (voir ci-dessous) |

> CCT = clauses contractuelles types (encadrent les transferts hors UE).

## 3. Mineurs — ce qui est implémenté

- Le **compte** exige une case « majeur / parent-représentant légal + CGU » (bloquant côté serveur).
- Preuves **horodatées** en base (`adult_confirmed`, `cgu_accepted_at`).
- Clauses dédiées dans les CGU et section 3 de la politique de confidentialité.
- Fondements : art. 8 RGPD, art. 45 loi I&L (consentement parental < 15 ans).

## 4. Ce qu'il reste à compléter (placeholders `[...]`)

- [ ] **Mentions légales** : Prénom NOM, SIRET, adresse (ou domiciliation), directeur de publication.
- [ ] **Politique de confidentialité** : identité du responsable + SIRET.
- [ ] **Adresse e-mail** : remplacer `contact@admiscible.fr` par `contact@admiscible.fr` après config du domaine.

## 5. Améliorations de conformité recommandées

- **Auto-héberger la police** (retirer Google Fonts) : la CSS retombe déjà sur les polices système ;
  supprimer le `preconnect` Google Fonts d'`onboarding.html` évite tout transfert d'IP vers les serveurs Google.
  (Ressource MathJax via jsDelivr : pourrait aussi être auto-hébergée à terme — disclosée pour l'instant.)
- **Registre tenu à jour** : compléter ce fichier à chaque nouveau prestataire ou traitement.
- **Sauvegardes** : chiffrées + accès restreint (R2) — déjà prévu (`scripts/backup-db.js`).
- **Faire relire** CGU/mentions/RGPD une fois par un professionnel (service éducatif + mineurs).

## 6. Pas obligatoire (à ta taille), mais bon à savoir

- **Pas de DPO obligatoire** (micro, pas de traitement à grande échelle de données sensibles).
- **Pas d'AIPD (analyse d'impact)** obligatoire a priori (pas de profilage à grande échelle, pas de données sensibles).
- **Déclaration CNIL** : non requise (le RGPD a remplacé les déclarations par la responsabilité + registre).
