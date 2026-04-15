# Design : Mise à jour du site clementbichel.fr

**Date :** 2026-04-15  
**Sources :** CV (5 pages), Profil LinkedIn, site Strikingly

---

## Objectif

Mettre à jour le site pour qu'il reflète fidèlement le CV et le profil LinkedIn, avec un ton plus direct et orienté problème-client (ton LinkedIn, option C).

---

## Section 1 — Hero

### Structure (de haut en bas)

1. **En-tête** : nom + tagline (inchangés)
2. **Accroche** (`.hero-hook`) : grands caractères, ton problème-client
   > « Retards de livraison. Mauvaise communication entre équipes. Faible réactivité face aux changements ? »  
   > → Appelez-moi pour une solution immédiate.
3. **Pitch** : expert en résolution de crises, 15+ ans, missions Airbus/EDF/MACIF/Worldline, présence terrain
4. **Méthode 3 étapes** (`.hero-method`) : Diagnostic → Solutions → Terrain
5. **Audience** (`.hero-audience`) : DSI · CTO · VP Engineering · Manager
6. **Certifications** : badges existants (inchangés)
7. **CTA** : « Première consultation offerte → » (inchangé)

### Nouveaux composants CSS
- `.hero-hook` : grande accroche, couleur accent, font-size clamp
- `.hero-method` : 3 blocs flex inline avec séparateur →
- `.hero-audience` : chips horizontaux (style `.tag` existant)

---

## Section 2 — Missions

### Cartes modifiées

| Carte | Changement |
|-------|-----------|
| EDF | +1 bullet : "Contribution à la définition des méthodes d'organisation de l'équipe produit" |
| Groupama | +2 bullets : "Participation aux activités du centre d'expertise agile" + "Coaching des Scrum Masters dans leurs prises de fonctions" |
| Airbus | Description enrichie depuis CV (5 bullets complets) |
| Crédit Mutuel Arkéa | Description enrichie depuis CV (3 bullets complets) |
| MACIF | 2 sous-rôles empilés : Scrum Master/Mentor agile (juil. 2020–mars 2021) + RTE (avr.–oct. 2021) |
| Banque Casino | 2 sous-rôles empilés : Coach agile (fév.–déc. 2019) + Scrum Master (fév.–oct. 2019) |
| Worldline | 2 sous-rôles empilés : SM/SAFe Agilist (juil. 2017–nov. 2018) + Coach agile (sept.–déc. 2018) |

### OpenClassrooms
Exclu à la demande de l'utilisateur.

### Nouveau composant CSS
- `.mission-subrole` : en-tête de sous-rôle dans une carte (titre + période, séparateur visuel léger)

---

## Sections 3 & 4 — Témoignages + Formations

Aucun changement.

---

## Contraintes techniques

- Vanilla HTML/CSS/JS — aucun framework, aucun build
- Mobile-first, dark mode via `prefers-color-scheme`
- Seuls `index.html` et `style.css` sont modifiés
