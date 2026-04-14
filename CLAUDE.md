# clementbichel.fr

Portfolio personnel de Clément Bichel — site statique vanilla déployé sur GitHub Pages.

## Stack

- **HTML / CSS / JS vanilla** — aucun framework, aucun outil de build, aucune dépendance npm
- **Hébergement** : GitHub Pages, domaine personnalisé `clementbichel.fr` (fichier `CNAME`)
- Fonctionne en ouvrant `index.html` directement dans le navigateur

## Structure

```
clementbichel.fr/
├── index.html        # Page unique : sections hero, projects, contact
├── style.css         # Tous les styles (variables CSS, mobile-first, dark mode)
├── main.js           # JS minimal : IntersectionObserver, smooth scroll
├── assets/
│   ├── images/       # Photo de profil, captures de projets
│   └── icons/        # Favicon, SVG inline
└── CNAME             # "clementbichel.fr" pour GitHub Pages
```

## Conventions CSS

- Variables définies dans `:root` — préfixe `--color-*`, `--font-*`, `--space-*`
- Mobile-first : styles de base pour mobile, `@media (min-width: 768px)` pour desktop
- Dark mode via `@media (prefers-color-scheme: dark)` — redéfinir les variables de couleur

## Ajouter un projet

Les projets sont des éléments `<article class="project-card">` dans la section `#projects` de `index.html`. Chaque carte contient :
- Un titre `<h3>`
- Une courte description `<p>`
- Un lien `<a>` vers le projet (GitHub ou démo live)
- Des tags technos sous forme de `<span class="tag">`

## Déploiement

1. Pousser sur la branche `main` du repo GitHub
2. Activer GitHub Pages dans Settings → Pages → Source: `main` / `/ (root)`
3. Le fichier `CNAME` configure automatiquement le domaine personnalisé
4. DNS chez le registrar : ajouter un enregistrement `CNAME` `www` → `<username>.github.io` et un `A` apex vers les IPs de GitHub Pages

## Commandes utiles

```bash
# Ouvrir localement (macOS)
open index.html

# Serveur local simple si besoin (Python)
python3 -m http.server 8080
```
