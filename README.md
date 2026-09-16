# Application de recettes

Application web réalisée avec **React**, **TypeScript** et **React Router** dans le cadre d'un TP.

## Installation

Cloner ou récupérer le projet, puis ouvrir un terminal à la racine du projet.

Installer les dépendances :

```bash
npm install
```

## Exécution

Lancer le serveur de développement :

```bash
npm run dev
```

Une adresse locale sera affichée dans le terminal. Ouvrir cette adresse dans un navigateur pour accéder à l'application.

## Fonctionnalités

L'application permet de :

- consulter une page d'accueil avec une liste de recettes ;
- voir le temps de préparation et l'image de chaque recette ;
- consulter le détail d'une recette ;
- consulter l'annuaire des utilisateurs ;
- accéder au profil public d'un utilisateur grâce à son identifiant ;
- se connecter avec un email et un mot de passe présents dans `users.json` ;
- être redirigé vers le profil correspondant après une connexion réussie ;
- afficher le prénom, le nom et l'image du profil connecté ;
- afficher une page 404 lorsqu'une URL n'existe pas ;
- utiliser une navigation commune présente sur les différentes pages.

## Structure du projet

node_modules/
public/
├── favicon.svg
└── icons.svg
src/
├──assets/
├── components/
│ ├── HelloWorld.tsx
│ └── RecipeCard.tsx
│
├── data/
│ ├── recipes.json
│ └── users.json
│
├── pages/
│ ├── Menu.tsx
│ ├── UserList.tsx
│ ├── User.tsx
│ ├── Recipe.tsx
│ ├── Login.tsx
│ ├── Profile.tsx
│ └── NotFound.tsx
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx

## Technologies utilisées

- React
- TypeScript
- Vite
- React Router
- HTML / CSS
- JSON

## Données

Les recettes sont stockées dans :

src/data/recipes.json

Les utilisateurs sont stockés dans :

src/data/users.json

Les informations des utilisateurs sont utilisées côté client pour la connexion et l'affichage des profils.

## Routes principales

| Route          | Description                       |
| -------------- | --------------------------------- |
| `/`            | Accueil et catalogue des recettes |
| `/recipe/:id`  | Détail d'une recette              |
| `/userList`    | Liste des utilisateurs            |
| `/user/:id`    | Profil public d'un utilisateur    |
| `/login`       | Page de connexion                 |
| `/profile/:id` | Profil de l'utilisateur connecté  |
| `*`            | Page 404                          |

## Exemple de connexion

Pour tester la connexion, utiliser les identifiants présents dans `src/data/users.json`.

Par exemple :

Email : emily.johnson@x.dummyjson.com
Mot de passe : emilyspass

Après une connexion réussie, l'utilisateur est automatiquement redirigé vers le profil correspondant à son identifiant.
