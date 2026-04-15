# Site Update Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Mettre à jour index.html et style.css pour adopter le ton LinkedIn (accroche problème-client, méthode 3 étapes, audience) et enrichir les descriptions de missions depuis le CV.

**Architecture:** Site statique vanilla — uniquement index.html et style.css sont touchés. Aucun framework, aucun build. Tester en ouvrant index.html dans un navigateur.

**Tech Stack:** HTML5, CSS3 vanilla (variables CSS, flexbox, grid, media queries)

---

## Task 1 : Ajouter les styles CSS pour les nouveaux composants hero

**Files:**
- Modify: `style.css` — ajouter après le bloc `/* ── Bio multi-paragraphes ── */` (ligne ~373)

**Step 1 : Ajouter `.hero-hook`**

Dans style.css, après le bloc `.bio { ... }`, ajouter :

```css
/* ── Hero hook (accroche problème-client) ─────────────── */
.hero-hook {
  margin-bottom: var(--space-md);
}

.hero-hook-question {
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.hero-hook-cta {
  font-size: 1rem;
  color: var(--color-accent);
  font-weight: 500;
}

/* ── Hero pitch ──────────────────────────────────────── */
.hero-pitch {
  max-width: 620px;
  color: var(--color-muted);
  margin-bottom: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* ── Hero method (3 étapes) ──────────────────────────── */
.hero-method {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem var(--space-sm);
  margin-bottom: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.hero-method-step {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.hero-method-step strong {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
}

.hero-method-step span {
  font-size: 0.78rem;
  color: var(--color-muted);
}

.hero-method-sep {
  color: var(--color-accent);
  font-weight: 700;
  font-size: 1.1rem;
  align-self: center;
}

@media (max-width: 540px) {
  .hero-method {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-method-sep {
    display: none;
  }
}

/* ── Hero audience ───────────────────────────────────── */
.hero-audience {
  margin-bottom: var(--space-md);
}

.hero-audience-label {
  font-size: 0.78rem;
  color: var(--color-muted);
  margin-bottom: 0.4rem;
}
```

**Step 2 : Vérifier visuellement**

Ouvrir index.html dans un navigateur. Aucun changement visible pour l'instant (classes pas encore utilisées).

**Step 3 : Commit**

```bash
git add style.css
git commit -m "style: ajouter composants hero-hook, hero-method, hero-audience"
```

---

## Task 2 : Ajouter les styles CSS pour les sous-rôles de missions

**Files:**
- Modify: `style.css` — ajouter après le bloc `/* ── Logo mission ── */`

**Step 1 : Ajouter `.mission-subrole`**

Dans style.css, après `.mission-period { ... }`, ajouter :

```css
/* ── Sous-rôles dans une carte mission ───────────────── */
.mission-subroles {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  flex: 1;
}

.mission-subrole {
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
}

.mission-subrole:first-child {
  padding-top: 0;
  border-top: none;
}

.mission-subrole-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.15rem;
}

.mission-subrole-period {
  font-size: 0.75rem;
  color: var(--color-accent);
  font-family: var(--font-mono);
  margin-bottom: 0.4rem;
}

.mission-subrole ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mission-subrole ul li {
  font-size: 0.83rem;
  color: var(--color-muted);
  padding-left: 1rem;
  position: relative;
  line-height: 1.4;
}

.mission-subrole ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.7rem;
  top: 0.15em;
}
```

**Step 2 : Commit**

```bash
git add style.css
git commit -m "style: ajouter composant mission-subrole pour rôles multiples"
```

---

## Task 3 : Réécrire le hero dans index.html

**Files:**
- Modify: `index.html` — section `#hero`, remplacer le contenu de `.hero-text`

**Step 1 : Remplacer le contenu de `.hero-text`**

Localiser dans index.html (lignes 114-134) le bloc `.hero-text` et remplacer **entièrement** son contenu par :

```html
<div class="hero-text">
  <h1>Clément Bichel — coach agile et coach produit</h1>
  <p class="tagline">Coach produit &amp; coach agile · Bordeaux</p>

  <div class="hero-hook">
    <p class="hero-hook-question">Retards de livraison. Mauvaise communication entre équipes. Faible réactivité face aux changements ?</p>
    <p class="hero-hook-cta">Appelez-moi au <a href="tel:+33616412907">06 16 41 29 07</a> pour une solution immédiate.</p>
  </div>

  <div class="hero-pitch">
    <p>Expert en résolution de crises organisationnelles. Je ne suis pas juste un coach agile — je suis le remède à vos maux organisationnels. Avec plus de 15 ans d'expérience, y compris des interventions réussies chez Airbus, EDF, Crédit Mutuel Arkéa et Worldline, je sais comment transformer le chaos en efficacité.</p>
    <p>Je ne vous laisse pas avec des outils génériques et des bonnes pratiques qui ne s'appliquent pas à vous. Je reste avec vous, sur le terrain, pour assurer une mise en œuvre réussie.</p>
  </div>

  <div class="hero-method">
    <div class="hero-method-step">
      <strong>🔍 Diagnostic</strong>
      <span>Identifier les blocages</span>
    </div>
    <span class="hero-method-sep">→</span>
    <div class="hero-method-step">
      <strong>🛠 Solutions</strong>
      <span>Adaptées à votre contexte</span>
    </div>
    <span class="hero-method-sep">→</span>
    <div class="hero-method-step">
      <strong>📍 Terrain</strong>
      <span>Présent pour la mise en œuvre</span>
    </div>
  </div>

  <div class="hero-audience">
    <p class="hero-audience-label">Vous êtes :</p>
    <div class="tags">
      <span class="tag">DSI</span>
      <span class="tag">CTO</span>
      <span class="tag">VP Engineering</span>
      <span class="tag">Manager</span>
    </div>
  </div>

  <ul class="certs">
    <li class="certs-label">Certifications :</li>
    <li>Lead Product — Thiga (2025)</li>
    <li>ICAgile Systems Coaching (2024)</li>
    <li>SAFe® 6 Practice Consultant (2023)</li>
    <li>Certified ScrumMaster® (CSM®)</li>
  </ul>
  <ul class="social-links">
    <li><a href="https://www.linkedin.com/in/coach-produit-agile" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><a href="mailto:clement.bichel@gmail.com">clement.bichel@gmail.com</a></li>
    <li><a href="tel:+33616412907">06 16 41 29 07</a></li>
  </ul>
  <a href="#contact" class="cta-btn">Première consultation offerte →</a>
</div>
```

**Step 2 : Vérifier dans le navigateur**

- L'accroche apparaît en gras au-dessus du pitch
- Le bloc méthode 3 étapes s'affiche horizontalement (desktop) / vertical (mobile)
- Les tags audience s'affichent correctement
- Sur mobile, tout reste lisible

**Step 3 : Commit**

```bash
git add index.html
git commit -m "feat: hero avec accroche problème-client, méthode 3 étapes et audience"
```

---

## Task 4 : Mettre à jour les missions EDF et Groupama

**Files:**
- Modify: `index.html` — section `#missions`, cartes EDF et Groupama

**Step 1 : EDF — ajouter le 4e bullet**

Localiser la carte EDF. Remplacer le `<p>` de description par une liste :

```html
<ul class="mission-bullets">
  <li>Acculturation et formation des équipes produit à l'adoption de méthodes agiles et de la culture produit</li>
  <li>Co-construction de métriques alignées avec les objectifs stratégiques s'inscrivant dans une approche produit</li>
  <li>Animation d'ateliers du découpage du périmètre jusqu'à la définition du backlog</li>
  <li>Contribution à la définition des méthodes d'organisation de l'équipe produit</li>
</ul>
```

**Step 2 : Groupama — ajouter les 2 bullets manquants**

Localiser la carte Groupama. Remplacer le `<p>` de description par :

```html
<ul class="mission-bullets">
  <li>Coaching d'une équipe Scrum pour améliorer sa prédictibilité et sa transversalité</li>
  <li>Accompagnement de la direction de programme dans la transformation agile</li>
  <li>Accompagnement du Product Management</li>
  <li>Participation aux activités du centre d'expertise agile</li>
  <li>Coaching des Scrum Masters dans leurs prises de fonctions</li>
</ul>
```

**Step 3 : Ajouter le style `.mission-bullets` dans style.css**

Après `.mission-period { ... }`, ajouter :

```css
/* ── Bullets de mission ──────────────────────────────── */
.mission-bullets {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.mission-bullets li {
  font-size: 0.85rem;
  color: var(--color-muted);
  padding-left: 1rem;
  position: relative;
  line-height: 1.4;
}

.mission-bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.7rem;
  top: 0.15em;
}
```

**Step 4 : Vérifier dans le navigateur**

Les cartes EDF et Groupama affichent bien des listes à puces.

**Step 5 : Commit**

```bash
git add index.html style.css
git commit -m "feat: enrichir descriptions EDF et Groupama depuis CV"
```

---

## Task 5 : Mettre à jour les missions Airbus et Crédit Mutuel Arkéa

**Files:**
- Modify: `index.html` — cartes Airbus et Crédit Mutuel Arkéa

**Step 1 : Airbus — remplacer la description**

```html
<ul class="mission-bullets">
  <li>Accompagnement d'un responsable de portfolio en matière de gouvernance agile et d'optimisation des rituels de son périmètre</li>
  <li>Accompagnement des responsables des solutions et des trains dans la mise en œuvre de pratiques agiles</li>
  <li>Animation de la communauté de pratiques agiles, en favorisant l'échange des connaissances et des meilleures pratiques</li>
  <li>Conception et animation d'ateliers d'amélioration continue, axés sur des KPIs spécifiques</li>
  <li>Formations à l'agilité adaptées aux besoins des nouveaux arrivants et des équipes en place</li>
</ul>
```

**Step 2 : Crédit Mutuel Arkéa — remplacer la description**

```html
<ul class="mission-bullets">
  <li>Accompagnement des managers et facilitateurs dans la mise en œuvre de pratiques agiles</li>
  <li>Coaching d'équipes pour optimiser la performance et la collaboration</li>
  <li>Conception et animation d'ateliers individuels et collectifs axés sur des objectifs spécifiques</li>
</ul>
```

**Step 3 : Commit**

```bash
git add index.html
git commit -m "feat: enrichir descriptions Airbus et Crédit Mutuel Arkéa depuis CV"
```

---

## Task 6 : Restructurer la carte MACIF (2 sous-rôles)

**Files:**
- Modify: `index.html` — carte MACIF

**Step 1 : Remplacer entièrement la carte MACIF**

Localiser `<article class="project-card reveal">` contenant `<h3>MACIF</h3>` et remplacer par :

```html
<article class="project-card reveal">
  <img src="assets/icons/macif.png" alt="MACIF — mission coach agile Niort" class="mission-logo" loading="lazy" />
  <h3>MACIF</h3>
  <p class="mission-period">2020 – 2021 · Niort</p>
  <div class="mission-subroles">
    <div class="mission-subrole">
      <p class="mission-subrole-title">Scrum Master / Mentor agile</p>
      <p class="mission-subrole-period">juil. 2020 – mars 2021</p>
      <ul>
        <li>Accompagnement d'une équipe Scrum dans un environnement SAFe, avec un focus sur l'autonomisation de l'équipe</li>
        <li>Mentorat ciblé de 2 Scrum Masters pour accélérer leur montée en compétence</li>
        <li>Animation de la communauté de pratiques agiles</li>
        <li>Conception et animation d'ateliers d'amélioration continue, axés sur des KPIs spécifiques</li>
      </ul>
    </div>
    <div class="mission-subrole">
      <p class="mission-subrole-title">Release Train Engineer</p>
      <p class="mission-subrole-period">avr. – oct. 2021</p>
      <ul>
        <li>Orchestration d'un train SAFe de 5 équipes, intégré à une large solution</li>
        <li>Facilitation et animation des événements et processus du train</li>
        <li>Maintien du cadre SAFe tout en impulsant une culture d'amélioration continue</li>
        <li>Aide à la collaboration entre les différentes équipes</li>
        <li>Accompagnement du Product Manager dans la prise de ses fonctions</li>
      </ul>
    </div>
  </div>
  <div class="tags">
    <span class="tag">SAFe RTE</span>
    <span class="tag">Scrum</span>
    <span class="tag">Mentorat</span>
  </div>
</article>
```

**Step 2 : Vérifier dans le navigateur**

La carte MACIF affiche bien 2 sous-rôles séparés par un trait horizontal léger.

**Step 3 : Commit**

```bash
git add index.html
git commit -m "feat: restructurer carte MACIF avec 2 sous-rôles (SM/Mentor + RTE)"
```

---

## Task 7 : Restructurer la carte Banque Casino (2 sous-rôles)

**Files:**
- Modify: `index.html` — carte Banque Casino

**Step 1 : Remplacer entièrement la carte Banque Casino**

```html
<article class="project-card reveal">
  <img src="assets/icons/banquecasino.png" alt="Banque Casino — mission coach agile Bordeaux" class="mission-logo" loading="lazy" />
  <h3>Banque Casino</h3>
  <p class="mission-period">2019 · Bordeaux</p>
  <div class="mission-subroles">
    <div class="mission-subrole">
      <p class="mission-subrole-title">Coach agile</p>
      <p class="mission-subrole-period">fév. – déc. 2019</p>
      <ul>
        <li>Accompagnement des équipes et managers dans la transformation agile</li>
        <li>Coaching individuel ciblé de managers</li>
        <li>Présentation de la démarche agile au top management</li>
        <li>Instauration d'une culture d'amélioration continue au sein de la DSI</li>
        <li>Formation aux outils du management 3.0 pour renforcer le leadership managérial</li>
        <li>Coaching pratique de 2 équipes en Kanban pour améliorer le flux de travail</li>
        <li>Animation de la communauté de pratiques agiles</li>
        <li>Conception et animation d'ateliers axés sur des objectifs spécifiques</li>
      </ul>
    </div>
    <div class="mission-subrole">
      <p class="mission-subrole-title">Scrum Master</p>
      <p class="mission-subrole-period">fév. – oct. 2019</p>
      <ul>
        <li>Accompagnement d'une équipe Scrum depuis sa genèse jusqu'à ses premières réussites</li>
        <li>Mise en place et facilitation des cérémonies Scrum</li>
        <li>Intégration de pratiques agiles complémentaires pour renforcer l'efficacité</li>
        <li>En 9 mois, l'équipe livrait de la valeur chaque semaine</li>
      </ul>
    </div>
  </div>
  <div class="tags">
    <span class="tag">Coaching</span>
    <span class="tag">Kanban</span>
    <span class="tag">Management 3.0</span>
  </div>
</article>
```

**Step 2 : Commit**

```bash
git add index.html
git commit -m "feat: restructurer carte Banque Casino avec 2 sous-rôles (Coach + SM)"
```

---

## Task 8 : Restructurer la carte Worldline (2 sous-rôles)

**Files:**
- Modify: `index.html` — carte Worldline

**Step 1 : Remplacer entièrement la carte Worldline**

```html
<article class="project-card reveal">
  <img src="assets/icons/worldline.png" alt="Worldline — mission coach agile Scrum Master Paris" class="mission-logo" loading="lazy" />
  <h3>Worldline</h3>
  <p class="mission-period">2017 – 2018 · Paris</p>
  <div class="mission-subroles">
    <div class="mission-subrole">
      <p class="mission-subrole-title">Scrum Master / SAFe Agilist</p>
      <p class="mission-subrole-period">juil. 2017 – nov. 2018</p>
      <ul>
        <li>Accompagnement d'une équipe Scrum dans un environnement SAFe, de sa création à ses premières réussites</li>
        <li>Mise en place et facilitation des cérémonies de l'équipe</li>
        <li>Conseil en méthodologie Scrum pour renforcer l'efficacité de l'équipe</li>
        <li>Impulsion d'une culture d'amélioration continue</li>
        <li>Animation d'ateliers de résolution de problèmes spécifiques</li>
      </ul>
    </div>
    <div class="mission-subrole">
      <p class="mission-subrole-title">Coach agile</p>
      <p class="mission-subrole-period">sept. – déc. 2018</p>
      <ul>
        <li>Accompagnement d'un programme SAFe</li>
        <li>Animation de la communauté de pratiques des Scrum Masters</li>
        <li>Accompagnement ciblé du RTE</li>
      </ul>
    </div>
  </div>
  <div class="tags">
    <span class="tag">SAFe</span>
    <span class="tag">Scrum Master</span>
    <span class="tag">Inspect &amp; Adapt</span>
  </div>
</article>
```

**Step 2 : Vérifier l'ensemble de la section missions dans le navigateur**

- Toutes les cartes s'affichent correctement
- La grille 2 colonnes reste intacte (desktop)
- Les cartes avec sous-rôles restent lisibles sur mobile

**Step 3 : Commit**

```bash
git add index.html
git commit -m "feat: restructurer carte Worldline avec 2 sous-rôles (SM/SAFe + Coach)"
```

---

## Task 9 : Vérification finale et push

**Step 1 : Test desktop**

Ouvrir index.html dans un navigateur. Vérifier :
- [ ] Hero : accroche visible, méthode 3 étapes, tags audience
- [ ] Toutes les cartes de missions s'affichent
- [ ] MACIF, Banque Casino, Worldline ont chacun 2 sous-rôles lisibles
- [ ] EDF, Groupama, Airbus, Arkéa ont des listes à puces

**Step 2 : Test mobile** (redimensionner à 375px)

- [ ] Hero accroche lisible
- [ ] Méthode 3 étapes en colonne
- [ ] Grille missions en 1 colonne
- [ ] Cartes sous-rôles pas trop denses

**Step 3 : Test dark mode**

Activer le dark mode système. Vérifier que tous les nouveaux composants respectent les couleurs dark.

**Step 4 : Push**

```bash
git push origin master
```
