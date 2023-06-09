# LABORATOIRE (du 05 au 19 Juin 2023)
## Demandes du client :
- Coder une app, "Gestionnaire d'évènements"
- Création de compte - login
- Options d'évènements:
   * Création
   * Modification
   * Suppression
- Infos d'évènements:
   * Date de début
   * Date de fin
   * Durée
   * Description
- Option supplémentaire:
   * Récursif ou fixe?

## Contraintes :
- Dev Front End:
   * React Native
- Dev Back End:
   * Node / ExpressJs

# Documentation de Dev

## Initialisation du projet
   - npx react-native@latest init mel_lab_front
## Initialisation de Git
   - Création du repo github
   - $ git init
   - $ git add .
   - $ git commit -m "Project's init"
   - $ git branch -M main
   - $ git remote add origin https://github.com/MelYuki/mel_lab.git
   - $ git push -u origin main
## Créa du dossier ./src/ (<i>Dans ce dossier</i>) :
   - screens/
      * login/
         * login.jsx
         * registering.jsx
      * home/
         * home.jsx
         * events-list.jsx
         * events-details.jsx
         * events-add.jsx
         * events-shared.jsx
   - components/
      * login/
         * signIn-component.jsx
         * signUp-component.jsx
      * registering/
         * form-component.jsx
   - services
   - styles/
      * global.style.js
   - utilities
## Installation des dépendances :
   - npm install @react-navigation/native
   - npm install @react-navigation/stack
   - npm install react-native-gesture-handler
   - npm install react-native-screens react-native-safe-area-context
   - npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
## Run le projet :
   - npx react-native start