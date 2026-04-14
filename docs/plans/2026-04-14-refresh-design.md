# Design — Rafraîchissement visuel ciblé (Option 1 : Éditorial chaleureux)

Date : 2026-04-14  
Statut : Approuvé

## Contexte

Site portfolio statique vanilla (HTML/CSS/JS) de Clément Bichel, coach agile & produit à Bordeaux.
Objectif : rafraîchissement ciblé sans modifier la structure HTML de fond. Conserver tout le travail SEO existant.

## Direction esthétique

**Éditorial chaleureux** — Fraunces (serif) + DM Sans + palette terracotta.  
Communique : expérience, chaleur humaine, confiance. Différencie d'un portfolio tech générique.

---

## 1. Typographie

- **Police titres** : [Fraunces](https://fonts.google.com/specimen/Fraunces) — variable, italic-capable, mémorable
  - `h1`, `h2`, `h3` en Fraunces 700
  - `h2` avec `font-style: italic` optionnel pour les sections
- **Police corps** : [DM Sans](https://fonts.google.com/specimen/DM+Sans) — lisible, moderne, neutre
- Import via Google Fonts avec `<link rel="preconnect">` pour la performance
- Variable CSS : `--font-display: 'Fraunces', Georgia, serif` et `--font-sans: 'DM Sans', system-ui, sans-serif`

---

## 2. Palette de couleurs

| Token CSS         | Light mode   | Dark mode    | Notes                        |
|-------------------|--------------|--------------|------------------------------|
| `--color-bg`      | `#faf8f5`    | `#111009`    | Blanc chaud / noir chaud     |
| `--color-surface` | `#f0ece5`    | `#1c1a16`    | Surface légèrement teintée   |
| `--color-accent`  | `#c8602a`    | `#e07a4a`    | Terracotta — remplace le bleu|
| `--color-border`  | `#e0d9d0`    | `#2e2a24`    | Bordure chaude               |
| `--color-text`    | `#1c1917`    | `#f0ece5`    | Quasi-noir chaud             |
| `--color-muted`   | `#78716c`    | `#a8a29e`    | Texte secondaire             |

---

## 3. Changements HTML

### Hero
- Ajouter un bouton CTA sous `.social-links` :
  ```html
  <a href="#contact" class="cta-btn">Première consultation offerte →</a>
  ```

### Navigation
- Ajouter le nom à gauche de la nav :
  ```html
  <nav>
    <a href="#hero" class="nav-brand">Clément Bichel</a>
    <div class="nav-links">
      <a href="#missions">Missions</a>
      ...
    </div>
  </nav>
  ```

### Témoignages
- Garder les 3 premiers blockquotes hors du `<details>`
- Entourer les 22 autres dans :
  ```html
  <details class="testimonials-more">
    <summary>Voir les 22 autres recommandations</summary>
    <div class="testimonials-grid">...</div>
  </details>
  ```

---

## 4. Changements CSS

- Importer les polices Google Fonts
- Mettre à jour les variables `:root` (palette + polices)
- Ajouter `.cta-btn` (bouton terracotta plein)
- Ajouter `.nav-brand` (nom à gauche, couleur texte)
- Ajouter hover lift sur `.project-card` et `.testimonial`
- Ajouter styles `details/summary` pour les témoignages repliés
- Ajouter quote décorative sur `.testimonial.featured`

---

## 5. Fichiers modifiés

- `index.html` — ajout CTA, nav brand, details/summary témoignages
- `style.css` — palette, polices, CTA, hover, details

## 6. Non modifié

- `main.js` — aucun changement
- Structure des sections (id, classes principales)
- SEO (JSON-LD, OG, canonical) — intact
