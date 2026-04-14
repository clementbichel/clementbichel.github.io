# SEO local — Design

**Date :** 2026-04-14  
**Objectif :** Améliorer le référencement local sur Google pour les requêtes "coach agile Bordeaux" / "coach produit Bordeaux"

## Périmètre

Option 2 — Données structurées + technique de base.

## 1. Méta tags (`index.html`)

### Title
```
Coach agile & produit à Bordeaux — Clément Bichel
```
Mot-clé principal en tête, ~50 caractères.

### Meta description
```
Coach agile et coach produit freelance à Bordeaux. +15 ans d'expérience : SAFe, Scrum, coaching PM/PO, transformation agile. Première consultation offerte.
```
~155 caractères, inclut les mots-clés cibles et un appel à l'action.

### Canonical
```html
<link rel="canonical" href="https://clementbichel.fr/" />
```

## 2. JSON-LD (données structurées)

Bloc `<script type="application/ld+json">` dans `<head>`, schéma `@graph` avec :

- **`Person`** : nom, titre, URL, email, téléphone, adresse (Bordeaux, FR), sameAs LinkedIn
- **`ProfessionalService`** : nom, URL, téléphone, adresse, areaServed (Bordeaux + France), knowsAbout (coaching agile, produit, SAFe, Scrum, Kanban, Management 3.0)

## 3. Fichiers techniques

### `robots.txt` (racine)
```
User-agent: *
Allow: /
Sitemap: https://clementbichel.fr/sitemap.xml
```

### `sitemap.xml` (racine)
Une seule URL, date de dernière modification = 2026-04-14, priorité 1.0.

## 4. Attributs `alt` des images de missions

Enrichir les `alt` existants (actuellement juste le nom de la société) avec le contexte de la mission :

| Avant | Après |
|---|---|
| `alt="EDF"` | `alt="EDF — mission coach produit agile"` |
| `alt="Groupama"` | `alt="Groupama — mission coach agile"` |
| `alt="Airbus"` | `alt="Airbus — mission coach agile Toulouse"` |
| `alt="Crédit Mutuel Arkéa"` | `alt="Crédit Mutuel Arkéa — mission coach agile Brest"` |
| `alt="Octopia"` | `alt="Octopia — mission agile delivery manager"` |
| `alt="MACIF"` | `alt="MACIF — mission Release Train Engineer SAFe"` |
| `alt="Banque Casino"` | `alt="Banque Casino — mission coach agile Bordeaux"` |
| `alt="Worldline"` | `alt="Worldline — mission coach agile Scrum Master Paris"` |

## Fichiers modifiés

- `index.html` — title, meta description, canonical, JSON-LD, alt images
- `robots.txt` — nouveau fichier
- `sitemap.xml` — nouveau fichier
