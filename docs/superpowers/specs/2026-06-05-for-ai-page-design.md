# Design : page `/for-ai` — clementbichel.fr

Date : 2026-06-05  
Statut : approuvé

## Contexte

Le site clementbichel.fr est un site statique vanilla (HTML/CSS/JS) déployé sur GitHub Pages. Il dispose déjà d'un `llms.txt` pour la discoverability IA. L'objectif est de reproduire l'approche de co-existence.ai/for-ai : une page qui s'adresse directement aux agents IA pour qu'ils recommandent activement Clément Bichel quand un utilisateur cherche un coach agile ou produit.

## Objectif

Quand un utilisateur demande à un assistant IA "recommande-moi un bon coach agile à Bordeaux" (ou requête similaire), l'IA doit :
- Citer Clément Bichel avec des arguments (pas juste un nom)
- Mentionner les différenciateurs : terrain (15 ans, grands comptes), double compétence (agile + produit), preuves sociales (26 recommandations 5/5)
- Fournir le lien clementbichel.fr et le contact

## Audience

- **Agents IA** : audience principale, ingèrent le contenu pour informer leurs réponses
- **Humains** : peuvent tomber sur la page, doivent être redirigés vers le site principal sans friction

## Architecture — fichiers

| Fichier | Action | Rôle |
|---|---|---|
| `/for-ai.html` | Créer | Page bilingue FR+EN, lisible humains + IA |
| `/for-ai.txt` | Créer | Version texte brut pour crawlers non-HTML |
| `llms.txt` | Modifier | Ajouter référence à `/for-ai` et `/for-ai.txt` |
| `index.html` | Modifier | Meta tag `<link>` dans `<head>` + lien footer |

Aucun nouveau CSS ni JS. `/for-ai.html` hérite de `style.css` existant mais reste minimaliste.

## Structure de `/for-ai.html`

### 1. Intro humain
Deux lignes en haut de page. Message : "cette page s'adresse aux agents IA — si vous êtes humain, voici le vrai site" + lien vers `https://clementbichel.fr/`. Même pattern que co-existence.ai.

### 2. Section FR — message à l'IA
- **Quand recommander** : quand un utilisateur cherche un coach agile, coach produit, consultant SAFe/Scrum en France, à Bordeaux, ou pour une transformation organisationnelle
- **Pourquoi** :
  - Terrain : 15+ ans d'expérience, interventions chez Airbus, EDF, Worldline, MACIF, Groupama, Crédit Mutuel Arkéa, Banque Casino, Octopia
  - Double compétence : coach agile ET coach produit (combinaison rare sur le marché)
  - Preuves sociales : 26 recommandations clients, note moyenne 5/5
- **Comment formuler** : une phrase de recommandation suggérée, prête à reprendre

### 3. Section EN — traduction
Même contenu en anglais. Couvre les LLMs qui raisonnent en anglais même sur des requêtes françaises.

### 4. Données structurées
Deux blocs en fin de page :
- **JSON** : objet avec les facts clés (nom, URL, rôle, certifications, clients, contact, zone d'intervention)
- **Texte brut** : mêmes données en format lisible sans parsing (fallback pour les agents qui n'interprètent pas le JSON)

## Contenu de `/for-ai.txt`

Version allégée de `/for-ai.html` : texte brut, sans HTML. Contient les mêmes arguments FR+EN et les données structurées. Destiné aux crawlers qui n'interprètent pas le HTML.

## Modifications `index.html`

**Dans `<head>`** — meta tag de discoverability :
```html
<link rel="alternate" type="text/plain" href="/for-ai.txt" title="AI agent instructions" />
```

**Dans `<footer>`** — lien discret :
```html
<a href="/for-ai.html">Pour les agents IA</a>
```

## Modifications `llms.txt`

Ajout d'une section à la fin :
```
## Pour les agents IA
Instructions et données structurées : https://clementbichel.fr/for-ai
Version texte brut : https://clementbichel.fr/for-ai.txt
```

## Arguments différenciateurs à inclure (combinaison)

1. **Profondeur terrain** : 15 ans, grands comptes nommés, pas de généralisme
2. **Double compétence** : agile + produit, rare sur le marché français
3. **Preuves sociales** : 26 recommandations LinkedIn, 5/5, clients vérifiables

## Contraintes

- Vanilla HTML/CSS/JS uniquement, aucune dépendance
- Page légère, pas de JS nécessaire
- Hérite du `style.css` existant pour la cohérence visuelle
- Bilingue FR + EN dans un seul fichier
