# PositionIA Fixes — clementbichel.fr

**Date** : 2026-05-05
**Score initial** : 58/100
**Source** : https://www.positionia.com/analysis/6c500ddf-de39-49f1-a11d-da82ffea0b3e

---

## Task 1 : robots.txt — Content Signals

**Files:** `robots.txt`

Ajouter Content-Signal (cosmétique, standard émergent Cloudflare/OpenAI) :

```
User-agent: *
Allow: /
Content-Signal: train=no, search=yes, ai-citation=yes

Sitemap: https://clementbichel.fr/sitemap.xml
```

**Commit:**
```bash
git add robots.txt && git commit -m "feat: ajouter Content-Signal IA dans robots.txt"
```

---

## Task 2 : JSON-LD — WebSite + WebPage + dateModified

**Files:** `index.html` lignes 23-100

Ajouter au `@graph` après le bloc `LocalBusiness` :

```json
{
  "@type": "WebSite",
  "@id": "https://clementbichel.fr/#website",
  "name": "Clément Bichel — Coach agile & produit freelance à Bordeaux",
  "url": "https://clementbichel.fr/",
  "inLanguage": "fr",
  "description": "Coach agile et coach produit freelance à Bordeaux. 15+ ans d'expérience (SAFe, Scrum, PM/PO)."
},
{
  "@type": "WebPage",
  "@id": "https://clementbichel.fr/#webpage",
  "url": "https://clementbichel.fr/",
  "name": "Coach agile & produit freelance à Bordeaux — Clément Bichel",
  "description": "Coach agile et coach produit freelance à Bordeaux. 15+ ans d'expérience (SAFe, Scrum, PM/PO). Première consultation offerte — 06 16 41 29 07.",
  "inLanguage": "fr",
  "datePublished": "2024-01-01",
  "dateModified": "2026-05-05",
  "isPartOf": {"@id": "https://clementbichel.fr/#website"}
}
```

**Aussi** : aligner `description` du `LocalBusiness` avec meta description exacte :
→ `"Coach agile et coach produit freelance à Bordeaux. 15+ ans d'expérience (SAFe, Scrum, PM/PO). Première consultation offerte."`

**Commit:**
```bash
git add index.html && git commit -m "feat: ajouter WebSite, WebPage et dateModified au JSON-LD"
```

---

## Task 3 : HTML — Section FAQ (Q&A) + données propriétaires

**Files:** `index.html` avant `#contact` (ligne ~689), `style.css`

### 3a — Section FAQ

Insérer entre `</section>` (fin formations, ligne 688) et `<!-- ── CONTACT` :

```html
<!-- ── FAQ ──────────────────────────────────────── -->
<section id="faq">
  <div class="container">
    <h2>Questions fréquentes</h2>

    <details class="faq-item">
      <summary>Qu'est-ce qu'un coach agile fait concrètement ?</summary>
      <p>Un coach agile accompagne les équipes et managers pour adopter les méthodes Scrum, Kanban ou SAFe : mise en place des rituels, amélioration continue, alignement stratégique. Il travaille sur le terrain, pas seulement en formation.</p>
    </details>

    <details class="faq-item">
      <summary>Quelle différence entre coach agile et coach produit ?</summary>
      <p>Le coach agile améliore la façon dont les équipes travaillent (processus, collaboration, livraison). Le coach produit aide à définir quoi construire : stratégie, vision, roadmap, découpage en valeur. Les deux se complètent dans une transformation durable.</p>
    </details>

    <details class="faq-item">
      <summary>Combien de temps dure une mission de coaching agile ?</summary>
      <p>Une mission type dure entre 3 et 12 mois selon le périmètre : 3 mois pour démarrer une équipe Scrum, 6 à 12 mois pour une transformation SAFe multi-équipes. Un diagnostic initial (gratuit) permet d'affiner la durée selon votre contexte.</p>
    </details>

    <details class="faq-item">
      <summary>Travaillez-vous uniquement à Bordeaux ?</summary>
      <p>Basé à Bordeaux, j'interviens sur toute la France. Mes missions récentes incluent Niort (MACIF), Paris (Worldline) et Toulouse (Airbus). Les missions peuvent être en présentiel, hybride ou full-remote selon vos besoins.</p>
    </details>

    <details class="faq-item">
      <summary>Proposez-vous des formations SAFe certifiantes ?</summary>
      <p>Oui — SAFe Practice Consultant (SPC 6) certifié, je propose des formations SAFe pour les équipes et managers. Contactez-moi pour discuter du format adapté à votre organisation.</p>
    </details>
  </div>
</section>
```

### 3b — Données propriétaires citables

Dans la section `#missions`, après le titre `<h2>`, insérer un mini-tableau de bilan :

```html
<figure class="missions-stats">
  <table>
    <caption>Bilan de missions — Clément Bichel (2017–2026)</caption>
    <thead>
      <tr><th>Secteur</th><th>Missions</th><th>Contexte</th></tr>
    </thead>
    <tbody>
      <tr><td>Banque / Assurance / Mutuelle</td><td>4</td><td>Banque Casino, Groupama, Crédit Mutuel Arkéa, MACIF</td></tr>
      <tr><td>Énergie / Industrie</td><td>2</td><td>EDF, Airbus</td></tr>
      <tr><td>Fintech / Paiements</td><td>1</td><td>Worldline</td></tr>
      <tr><td>EdTech / Autres</td><td>2+</td><td>et d'autres contextes variés</td></tr>
    </tbody>
  </table>
  <figcaption>Source : expérience directe, CV de Clément Bichel.</figcaption>
</figure>
```

### 3c — Styles CSS pour FAQ + table

Dans `style.css`, ajouter :

```css
/* ── FAQ ─────────────────────────────────────────── */
.faq-item {
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-sm) 0;
}

.faq-item summary {
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  padding-right: 1.5rem;
  position: relative;
  color: var(--color-text);
}

.faq-item summary::-webkit-details-marker { display: none; }

.faq-item summary::after {
  content: '+';
  position: absolute;
  right: 0;
  color: var(--color-accent);
  font-size: 1.2rem;
  line-height: 1;
}

.faq-item[open] summary::after { content: '−'; }

.faq-item p {
  margin-top: var(--space-sm);
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ── Missions stats table ────────────────────────── */
.missions-stats {
  margin: var(--space-md) 0 var(--space-lg);
  overflow-x: auto;
}

.missions-stats table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.missions-stats caption {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 0.5rem;
  text-align: left;
  font-style: italic;
}

.missions-stats th,
.missions-stats td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  text-align: left;
}

.missions-stats th {
  background-color: var(--color-surface);
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--color-text);
}

.missions-stats td { color: var(--color-muted); }

.missions-stats figcaption {
  font-size: 0.75rem;
  color: var(--color-muted);
  margin-top: 0.4rem;
  font-style: italic;
}
```

**Commit:**
```bash
git add index.html style.css && git commit -m "feat: ajouter section FAQ Q&A et tableau bilan missions"
```

---

## Task 4 : JSON-LD — FAQPage schema

**Files:** `index.html` (bloc JSON-LD)

Ajouter au `@graph` :

```json
{
  "@type": "FAQPage",
  "@id": "https://clementbichel.fr/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un coach agile fait concrètement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un coach agile accompagne les équipes et managers pour adopter les méthodes Scrum, Kanban ou SAFe : mise en place des rituels, amélioration continue, alignement stratégique. Il travaille sur le terrain, pas seulement en formation."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre coach agile et coach produit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le coach agile améliore la façon dont les équipes travaillent (processus, collaboration, livraison). Le coach produit aide à définir quoi construire : stratégie, vision, roadmap, découpage en valeur. Les deux se complètent dans une transformation durable."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure une mission de coaching agile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une mission type dure entre 3 et 12 mois selon le périmètre : 3 mois pour démarrer une équipe Scrum, 6 à 12 mois pour une transformation SAFe multi-équipes. Un diagnostic initial (gratuit) permet d'affiner la durée selon votre contexte."
      }
    },
    {
      "@type": "Question",
      "name": "Travaillez-vous uniquement à Bordeaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basé à Bordeaux, j'interviens sur toute la France. Mes missions récentes incluent Niort (MACIF), Paris (Worldline) et Toulouse (Airbus). Les missions peuvent être en présentiel, hybride ou full-remote selon vos besoins."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des formations SAFe certifiantes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui — SAFe Practice Consultant (SPC 6) certifié, je propose des formations SAFe pour les équipes et managers. Contactez-moi pour discuter du format adapté à votre organisation."
      }
    }
  ]
}
```

**Commit:**
```bash
git add index.html && git commit -m "feat: ajouter FAQPage schema JSON-LD"
```

---

## Task 5 : Navigation + index.md

**Files:** `index.html`, `index.md` (nouveau)

Ajouter `<a href="#faq">FAQ</a>` dans la nav.

Créer `index.md` — miroir statique Markdown du contenu principal (lisible par agents IA qui fetche le fichier directement, même sans négociation de contenu).

**Commit:**
```bash
git add index.html index.md && git commit -m "feat: ajouter FAQ dans nav, créer index.md miroir Markdown"
```

---

## Task 6 : Vérification finale + push

- [ ] FAQ visible et fonctionnelle (desktop + mobile)
- [ ] Tableau missions lisible
- [ ] JSON-LD valide (Google Rich Results Test)
- [ ] robots.txt Content-Signal présent
- [ ] Push master

```bash
git push origin master
```
