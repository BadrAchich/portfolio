# Spécifications de Conception : Refonte Structurelle & Graphique du Portfolio

- **Date** : 2026-10-21
- **Auteur** : Antigravity & Badr Achich
- **Statut** : En attente de validation utilisateur
- **Cible** : Portfolio personnel Astro ([`Portefolio`](file:///c:/Users/Badr/Documents/web/Portefolio))

---

## 1. Contexte & Objectif

L'objectif est de transformer la structure et la direction artistique du portfolio personnel de **Badr Achich** (Ingénieur Réseaux & Cybersécurité) en s'appuyant sur l'esthétique audacieuse, brutaliste et interactive du fichier de référence `index.html` (style studio créatif "BROL Collective").

Le projet conserve l'intégralité du contenu technique de Badr (expériences chez Shinka IT, projets d'infrastructure Fortinet / Cisco / DevNet, certifications CCNA/Fortinet, compétences techniques), tout en adoptant :
1. Une identité visuelle forte (palette noir profond `#0a0a0a`, blanc cassé `#e8e3d8`, crème `#f0ebe0`, rouge vif `#e8281e`, accents lavande/rose/or).
2. Une typographie éditoriale percutante (Bebas Neue, Space Grotesk, Space Mono, Permanent Marker).
3. Des micro-interactions soignées (curseur double cercle interactif, texture de bruit analogique, écran de chargement avec animation de tracé SVG, bandeau dictionnaire défilant, cartes de projets empilées avec focus interactif, cartes d'expertises avec géométries SVG animées).
4. Le maintien rigoureux de l'architecture Astro existante et du support bilingue (Français `/` et Anglais `/en`).

---

## 2. Architecture Visuelle & Design System

### 2.1 Typographies
* **Display / Titres XXL** : `Bebas Neue` (`--font-display`), sans-serif, majuscule, interlettrage serré.
* **Accent / Punchlines** : `Permanent Marker` (`--font-hand`), cursive, style manuscrit / tag.
* **Texte courant / Corps** : `Space Grotesk` (`--font-body`), sans-serif moderne, lisibilité optimale.
* **Technique / Données** : `Space Mono` (`--font-mono`), monospace, pour les étiquettes, dates, puces et métadonnées.

### 2.2 Palette Chromatique
* `--black` : `#0a0a0a` (fond principal du site, cartes sombres)
* `--cream` : `#f0ebe0` (fond contrasté pour le ruban ticker et les titres sur fond clair)
* `--off-white` : `#e8e3d8` (couleur primaire du texte sur fond noir)
* `--red` : `#e8281e` (accentuation vive, curseur en hover, points clés, CTA)
* `--lavender` : `#a78bff` (accentuation secondaire, titres et halos projet 1)
* `--pink` : `#ff7eb3` (accentuation secondaire, titres et halos projet 2)
* `--gold` : `#c8a96e` (accentuation secondaire, titres et halos projet 3)

### 2.3 Micro-interactions et Effets Globaux
* **Curseur sur-mesure (`Cursor.astro`)** :
  * Point central (`#cursor`, 10px) blanc qui suit instantanément la souris.
  * Anneau extérieur (`#cursor-ring`, 38px) avec interpolation fluide (lerp à 0.12).
  * Survol de liens et boutons (`a:hover`, `button:hover`) : agrandissement x3 et transition en rouge vif.
  * Détection d'écran tactile : masqué proprement sur les appareils ne supportant pas `(hover: hover)`.
* **Grain analogique (Noise Overlay)** :
  * Filtre SVG fractal léger superposé à `fixed inset: 0` avec une opacité de 3.5%, non cliquable (`pointer-events: none`).
* **Écran de chargement (`Loader.astro`)** :
  * Tracé vectoriel animé représentant le monogramme/logo via `stroke-dashoffset`.
  * Barre de chargement avec progression temporelle et message « Initialisation des systèmes / univers ».
  * Transition d'opacité vers 0 et masquage automatique après chargement complet.
* **Révélation au défilement (Scroll Reveal)** :
  * `IntersectionObserver` avec seuil de visibilité déclenchant l'apparition fluide (`opacity: 1`, `transform: translateY(0)`).

---

## 3. Structure & Agencement des Pages

La page d'accueil (`/` et `/en`) s'articule selon l'ordre strict suivant :

1. **Navigation (`Header.astro`)** :
   * Barre fixe avec effet de flou dynamique (`backdrop-filter: blur(10px)` après 60px de scroll).
   * Gauche : Bouton menu hamburger.
   * Centre : Monogramme vectoriel "BXDR" ou "BADR ACHICH".
   * Droite : Liens d'ancrage (`#projects`, `#about`, `#expertise`, `#experience`, `#contact`) + basculeur bilingue `FR / EN`.
2. **Hero (`Hero.astro`)** :
   * Cadre média aux bords déchirés (`torn-frame` via un `clip-path: polygon(...)` identique au template).
   * Arrière-plan sombre avec orbes lumineuses animées en dérive flottante.
   * Bouton central avec cercles d'ondes pulsantes (« EXPLORER / CV »).
   * Étiquette technique en bas à gauche (`Badr Achich · Ingénieur Réseaux & Cybersécurité · 2026`).
   * Punchline manuscrite en bas : « Sécuriser, automatiser, bâtir. ».
3. **Ticker Dictionnaire (`Ticker.astro`)** :
   * Ruban horizontal pleine largeur sur fond crème (`--cream`), texte noir.
   * Animation continue `ticker` sans à-coups (boucle infinie avec duplication).
   * Mots clés techniques structurés en entrées de dictionnaire :
     * `FORTINET [N] /fɔʁ.ti.nɛt/ — Clusters HA, pare-feu nouvelle génération et segmentation`
     * `CISCO [N] /ˈsɪs.koʊ/ — Routage, switching L2/L3 et architecture résiliente`
     * `DEVNET [N] /ˈdɛv.nɛt/ — Automatisation Python, API REST et infrastructure as code`
     * `TAILSCALE [N] /ˈteɪl.skeɪl/ — Réseau maillé WireGuard et accès distant Zero Trust`
4. **Projets Réalisés (`Projects.astro`)** :
   * En-tête sur fond crème avec sous-titre manuscrit (« Coup d'œil ») et titre monumental en Bebas Neue (« NOS RÉALISATIONS » / « PROJECTS »).
   * Stack de cartes de projets verticales :
     * Grille de métadonnées supérieure à 4 cellules (Domaine, Type/Contexte, Technologies, Année).
     * Zone visuelle large avec dégradé personnalisé, orbes flottantes et titre incrusté en bas à gauche en Bebas Neue.
     * Effet d'atténuation : le survol d'un projet passe les autres à 50% d'opacité.
5. **À Propos & Statistiques (`About.astro`)** :
   * Titre colossal sur 3 lignes : « INGÉNIEUR / RÉSEAU & CYBER / CERTIFIÉ ».
   * Paragraphe de présentation professionnel et percutant.
   * Grille de 3 compteurs clés :
     * `5+` (Années d'études & pratique)
     * `3` (Certifications majeures Cisco & Fortinet)
     * `10+` (Projets, migrations & labs réalisés)
   * Carrousels défilants de compétences (`Tech Stack`) et de badges de certifications (`CCNA`, `NSE4`, `NSE6`, etc.).
6. **Les 4 Pôles d'Expertise (`Expertise.astro`)** :
   * Section adaptée de la grille « Les Artistes » du template.
   * 4 cartes verticales (aspect-ratio 3/4) avec arrière-plans en dégradé distincts et avatars géométriques SVG en rotation lente continue (`spinSlow`) :
     1. **Sécurité Périmétrique** (Firewalls FortiGate HA, Check Point, Stormshield, politiques de filtrage).
     2. **Architecture Réseau** (Cisco L2/L3, agrégation LACP, VLANs, SVI, routage).
     3. **Automatisation DevNet** (Python, API REST FortiOS/Check Point, scripts de maintenance).
     4. **Virtualisation & Cloud** (Proxmox VE, conteneurs Docker/LXC, Tailscale, Nginx Reverse Proxy).
   * Tiroir inférieur avec libellé et spécialité montant au survol.
7. **Parcours & Expérience (`Experience.astro`)** :
   * Présentation éditoriale stylisée avec dates en Space Mono, nom de l'entreprise et rôle en Bebas Neue, détails des missions avec puces géométriques soignées.
8. **Contact Majestueux (`Contact.astro`)** :
   * Halo radial rougeoyant d'arrière-plan.
   * Titre XXL : « BÂTISSONS / ENSEMBLE » (avec "ENSEMBLE" en rouge vif).
   * Lien e-mail interactif géant souligné : `badr.achich.contact@gmail.com`.
9. **Footer (`Footer.astro`)** :
   * Copyright, monogramme central et liens vers LinkedIn & GitHub.

---

## 4. Contrats de Données TypeScript

### 4.1 Fichier [`src/types/index.ts`](file:///c:/Users/Badr/Documents/web/Portefolio/src/types/index.ts)

```typescript
export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface TickerItem {
  word: string;
  pos: string;
  phon: string;
  def: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExpertiseItem {
  title: string;
  role: string;
  description: string;
  gradientClass: string;
  shape: 'circle' | 'triangle' | 'square' | 'ellipse';
}

export interface ProjectMeta {
  domain: string;
  format: string;
  tools: string;
  year: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image?: string;
  titleColorClass: string;
  visualClass: string;
  meta: ProjectMeta;
  linkPreview?: string;
  linkSource?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface BadgeProps {
  name: string;
  image: string;
  url?: string;
  skills?: string[];
}

export interface SiteContent {
  hero: {
    name: string;
    specialty: string;
    summary: string;
    email: string;
    tagline: string;
    label: string;
    ctaText: string;
    cvLink: string;
  };
  ticker: TickerItem[];
  projects: ProjectProps[];
  about: {
    headline: string;
    accentWord: string;
    subheadline: string;
    body: string;
    stats: StatItem[];
    skills?: BadgeProps[];
    badges?: BadgeProps[];
  };
  expertise: ExpertiseItem[];
  experience: ExperienceProps[];
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    email: string;
  };
}
```

---

## 5. Découpage & Plan d'Implémentation

1. **Typographies et Styles Globaux** :
   * Importation des polices Google Fonts (`Bebas Neue`, `Space Grotesk`, `Space Mono`, `Permanent Marker`) dans [`Layout.astro`](file:///c:/Users/Badr/Documents/web/Portefolio/src/layouts/Layout.astro).
   * Mise à jour de [`src/styles/global.css`](file:///c:/Users/Badr/Documents/web/Portefolio/src/styles/global.css) avec les variables CSS, classes utilitaires (`torn-frame`, keyframes d'orbes, ticker, rotations).
2. **Composants d'effets & structure** :
   * Création de `Cursor.astro` et `Loader.astro`.
   * Création de `Ticker.astro`.
   * Refonte de `Header.astro` et `Footer.astro`.
3. **Composants de contenu** :
   * Refonte de `Hero.astro`.
   * Refonte de `Projects.astro`.
   * Refonte de `About.astro` (avec stats et carrousels existants).
   * Création de `Expertise.astro` (4 pôles avec SVG rotatifs).
   * Refonte de `Experience.astro` (timeline stylisée).
   * Création de `Contact.astro`.
4. **Mise à jour des Données & Bilinguisme** :
   * Mise à jour des types dans [`src/types/index.ts`](file:///c:/Users/Badr/Documents/web/Portefolio/src/types/index.ts).
   * Enrichissement de [`src/config/fr.ts`](file:///c:/Users/Badr/Documents/web/Portefolio/src/config/fr.ts) et [`src/config/en.ts`](file:///c:/Users/Badr/Documents/web/Portefolio/src/config/en.ts).
5. **Intégration dans les Pages** :
   * Assemblage dans [`src/pages/index.astro`](file:///c:/Users/Badr/Documents/web/Portefolio/src/pages/index.astro) et [`src/pages/en/index.astro`](file:///c:/Users/Badr/Documents/web/Portefolio/src/pages/en/index.astro).
6. **Vérification & Validation** :
   * Validation de la compilation Astro (`pnpm run build` ou `astro check`).
   * Test du responsive et des interactions.
