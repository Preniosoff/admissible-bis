# PrepaMP - Système de Connexion

## Comptes de test

Voici les comptes disponibles pour tester le système de connexion :

### Élèves
- **eleve1** / **pass123** / **MPSI** → Accès restreint aux cours MPSI
- **eleve2** / **pass123** / **MP** → Accès standard MP

### Professeurs
- **prof1** / **prof123** / **Professeur** → Accès complet à toutes les matières
- **admin** / **admin123** / **Professeur** → Accès complet

## Fonctionnalités

### Contrôle d'accès par classe
- **MPSI** : Accès aux cours Mathématiques, Physique, Chimie, SI, Info, Citations + MPSI
- **MP/PSI/TSI** : Accès standard à toutes les matières sauf MPSI
- **Professeur** : Accès complet à toutes les sections

### Interface
- Bouton "Se connecter" dans la barre de navigation
- Modal de connexion avec formulaire (nom d'utilisateur, mot de passe, classe)
- Bouton devient vert avec le nom de l'utilisateur une fois connecté
- Possibilité de se déconnecter en cliquant sur le bouton

## Utilisation

1. Cliquez sur "Se connecter" dans la barre de navigation
2. Remplissez le formulaire avec un compte de test
3. Sélectionnez la classe appropriée
4. Cliquez sur "Se connecter"
5. Le contenu s'adapte automatiquement selon vos droits d'accès

## Développement

Le système utilise :
- `localStorage` pour la persistance des sessions
- JavaScript pour la logique de contrôle d'accès
- CSS pour l'interface du modal
- Contrôle d'accès appliqué dynamiquement selon la classe