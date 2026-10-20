# Plan d'Implémentation : Refonte Structurelle & Graphique du Portfolio

**Objectif :** Restructurer le portfolio Astro de Badr Achich en adoptant la direction artistique et l'architecture interactive du template de référence (Hero déchiré, curseur sur-mesure, ticker continu, cartes de projets empilées avec métadonnées, 4 pôles d'expertise géométriques, statistiques et typographie éditoriale) tout en préservant l'intégralité des données professionnelles et le bilinguisme FR/EN.

**Architecture :** Découpage modulaire en composants Astro indépendants (`Cursor.astro`, `Loader.astro`, `Ticker.astro`, `Hero.astro`, `Projects.astro`, `About.astro`, `Expertise.astro`, `Experience.astro`, `Contact.astro`) orchestrés par `Layout.astro` et alimentés par les fichiers de configuration fortement typés `src/config/fr.ts` et `src/config/en.ts`.

**Stack technique :** Astro 6, Tailwind CSS v4, TypeScript 5.6, Google Fonts (`Bebas Neue`, `Space Grotesk`, `Space Mono`, `Permanent Marker`), pnpm.

---

### Tâche 1 : Mise à niveau des typographies, variables CSS et styles globaux

**Fichiers affectés :**
* Modifier : `src/layouts/Layout.astro`
* Modifier : `src/styles/global.css`

- [x] **Étape 1 : Importer les polices Google Fonts dans `Layout.astro`**
Ajouter les liens `preconnect` et la feuille de styles Google Fonts (`Bebas Neue`, `Space Grotesk`, `Space Mono`, `Permanent Marker`) dans la balise `<head>` de `src/layouts/Layout.astro`.

- [x] **Étape 2 : Déclarer les variables CSS et classes utilitaires dans `src/styles/global.css`**
Définir les variables de thème (`--font-display`, `--font-hand`, `--font-body`, `--font-mono`, `--black: #0a0a0a`, `--cream: #f0ebe0`, `--off-white: #e8e3d8`, `--red: #e8281e`, etc.), la règle pour `torn-frame` avec le polygone exact du clip-path, les animations de rotation continue (`spinSlow`), de pulse (`pulseRing`), d'orbes flottantes (`orbFloat`, `float`) et de ticker (`ticker`).

- [x] **Étape 3 : Lancer la vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur CSS ou de parsing.

- [x] **Étape 4 : Commit Git**
```powershell
git add src/layouts/Layout.astro src/styles/global.css
git commit -m "style: configure design system fonts and global css variables"
```

---

### Tâche 2 : Extension du modèle de données TypeScript

**Fichiers affectés :**
* Modifier : `src/types/index.ts`

- [x] **Étape 1 : Ajouter les interfaces `TickerItem`, `StatItem`, `ExpertiseItem`, `ProjectMeta` et mettre à jour `ProjectProps` et `SiteContent`**
Mettre à jour `src/types/index.ts` avec la structure validée en spécification :
```typescript
export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
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
  titleColorClass?: string;
  visualClass?: string;
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

export interface AboutProps {
  description: string;
  image: string;
  headline?: string;
  subheadline?: string;
  stats?: StatItem[];
  skills?: BadgeProps[];
  certifications?: string[];
  badges?: BadgeProps[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface ContactProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  email: string;
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
  about: AboutProps;
  expertise: ExpertiseItem[];
  experience: ExperienceProps[];
  contact: ContactProps;
}
```

- [x] **Étape 2 : Vérification TypeScript**
Commande à exécuter : `pnpm astro check`
Résultat attendu : Détection des champs manquants dans `fr.ts` et `en.ts` (confirmation du bon fonctionnement du vérificateur de types).

- [x] **Étape 3 : Commit Git**
```powershell
git add src/types/index.ts
git commit -m "feat(types): expand data contracts for ticker, stats, expertise and project meta"
```

---

### Tâche 3 : Enrichissement des données de contenu (FR et EN)

**Fichiers affectés :**
* Modifier : `src/config/fr.ts`
* Modifier : `src/config/en.ts`

- [x] **Étape 1 : Mettre à jour `src/config/fr.ts`**
Renseigner les sections :
* `hero` : ajout de `tagline: "Sécuriser, automatiser, bâtir."`, `label: "Badr Achich · Ingénieur Réseaux & Cybersécurité · 2026"`, `ctaText: "EXPLORER / CV"`, `cvLink: "/cv.pdf"`.
* `ticker` : 4 définitions techniques réseau/cyber (FORTINET, CISCO, DEVNET, TAILSCALE).
* `projects` : enrichir chaque projet existant avec son objet `meta: { domain, format, tools, year }`, sa `visualClass` (`visual-brol-1`, `visual-brol-2`, `visual-brol-3`) et sa `titleColorClass` (`title-lavender`, `title-pink`, `title-red`, etc.).
* `about` : ajout de `headline: "INGÉNIEUR"`, `subheadline: "RÉSEAU & CYBERSÉCURITÉ"`, et du tableau `stats` (`5+`, `3`, `10+`).
* `expertise` : 4 pôles (Sécurité Périmétrique, Architecture Réseau, Automatisation DevNet, Virtualisation & Cloud) avec formes SVG associées.
* `contact` : `eyebrow: "Travaillons ensemble"`, `titleLine1: "BÂTISSONS"`, `titleLine2: "ENSEMBLE"`, `email: "badr.achich.contact@gmail.com"`.

- [x] **Étape 2 : Mettre à jour `src/config/en.ts`**
Traduire les données correspondantes en anglais dans `src/config/en.ts`.

- [x] **Étape 3 : Vérification TypeScript**
Commande à exécuter : `pnpm astro check`
Résultat attendu : 0 erreur, conformité totale avec les types.

- [x] **Étape 4 : Commit Git**
```powershell
git add src/config/fr.ts src/config/en.ts
git commit -m "feat(content): enrich fr and en configs with ticker, expertise and project metadata"
```

---

### Tâche 4 : Composants visuels d'arrière-plan et d'interaction (Cursor, Loader, Noise)

**Fichiers affectés :**
* Créer : `src/components/Cursor.astro`
* Créer : `src/components/Loader.astro`
* Modifier : `src/layouts/Layout.astro`

- [x] **Étape 1 : Créer `src/components/Cursor.astro`**
Intégrer les éléments `#cursor` et `#cursor-ring` avec la logique d'animation fluide `requestAnimationFrame` et lerp à 0.12, avec gestion propre des survols de liens et des terminaux tactiles.

- [x] **Étape 2 : Créer `src/components/Loader.astro`**
Intégrer l'écran de chargement avec le logo SVG monogramme animé (`drawPath`), la barre de progression temporelle et le texte « Initialisation des univers et protocoles ».

- [x] **Étape 3 : Intégrer `Cursor.astro`, `Loader.astro` et le filtre Noise SVG dans `src/layouts/Layout.astro`**
Placer le curseur, le loader et la couche de bruit dans le Layout, ainsi que l'intersection observer pour les animations `.reveal`.

- [x] **Étape 4 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 5 : Commit Git**
```powershell
git add src/components/Cursor.astro src/components/Loader.astro src/layouts/Layout.astro
git commit -m "feat(ui): add custom cursor, animated svg loader, and noise overlay"
```

---

### Tâche 5 : Composants Ticker et Header révisés

**Fichiers affectés :**
* Créer : `src/components/Ticker.astro`
* Modifier : `src/components/Header.astro`

- [x] **Étape 1 : Créer `src/components/Ticker.astro`**
Composant autonome recevant `items: TickerItem[]`, affichant la bande crème pleine largeur avec boucle d'animation continue fluide.

- [x] **Étape 2 : Adapter `src/components/Header.astro`**
Adapter le style pour correspondre à la barre de navigation du template : structure en 3 zones (Menu hamburger à gauche, Monogramme textuel stylisé au centre, Liens d'ancrage et switcher de langue à droite en Space Mono), avec flou au scroll.

- [x] **Étape 3 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 4 : Commit Git**
```powershell
git add src/components/Ticker.astro src/components/Header.astro
git commit -m "feat(ui): implement continuous ticker and update header styling"
```

---

### Tâche 6 : Refonte du composant Hero (Torn-Frame, orbes et punchline)

**Fichiers affectés :**
* Modifier : `src/components/Hero.astro`

- [x] **Étape 1 : Réécrire `src/components/Hero.astro`**
Implémenter :
* Le conteneur `.torn-frame` avec clip-path polygonal.
* Le fond dynamique avec dégradé sombre et particules/orbes flottantes animées.
* Le bouton central interactif « EXPLORER / CV » avec onde pulsante (`pulseRing`).
* L'étiquette mono en bas à gauche.
* La punchline en typographie manuscrite `Permanent Marker` en dessous du cadre.

- [x] **Étape 2 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 3 : Commit Git**
```powershell
git add src/components/Hero.astro
git commit -m "feat(hero): redesign hero with torn frame, particles and dynamic cta"
```

---

### Tâche 7 : Refonte du composant Projets (Stack avec métadonnées et titres géants)

**Fichiers affectés :**
* Modifier : `src/components/Projects.astro`

- [x] **Étape 1 : Réécrire `src/components/Projects.astro`**
Implémenter la section de projets :
* En-tête sur fond crème avec sous-titre manuscrit (« Coup d'œil ») et titre géant en Bebas Neue (« NOS RÉALISATIONS »).
* Empilement vertical des projets (`project-stack`) avec en-tête de métadonnées à 4 colonnes (Genre/Domaine, Format/Type, Technos, Année).
* Zone visuelle large avec orbes d'arrière-plan, image de projet et titre monumental incrusté en bas à gauche en Bebas Neue.
* Script client léger pour l'effet de focus au survol (diminution d'opacité à 50% des cartes non survolées).

- [x] **Étape 2 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 3 : Commit Git**
```powershell
git add src/components/Projects.astro
git commit -m "feat(projects): redesign project stack with metadata grid and overlay titles"
```

---

### Tâche 8 : Création du composant 4 Pôles d'Expertise (Géométries SVG rotatives)

**Fichiers affectés :**
* Créer : `src/components/Expertise.astro`

- [x] **Étape 1 : Créer `src/components/Expertise.astro`**
Adapter la section « Les Artistes » en 4 pôles d'expertise clés :
* Grille responsive de 4 cartes (aspect-ratio 3/4) avec arrière-plans en dégradés distincts.
* Rendu vectoriel SVG rotatif pour chaque forme (cercle avec tirets, polygone triangle, rectangle arrondi, ellipse avec tirets).
* Panneau inférieur glissant au survol avec nom du pôle, rôle/spécialité et description succincte.

- [x] **Étape 2 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 3 : Commit Git**
```powershell
git add src/components/Expertise.astro
git commit -m "feat(expertise): create 4 expertise poles with animated rotating svg avatars"
```

---

### Tâche 9 : Refonte des composants À Propos, Expérience, Contact et Footer

**Fichiers affectés :**
* Modifier : `src/components/About.astro`
* Modifier : `src/components/Experience.astro`
* Créer : `src/components/Contact.astro`
* Modifier : `src/components/Footer.astro`

- [x] **Étape 1 : Mettre à jour `src/components/About.astro`**
Intégrer le grand titre d'accroche en Bebas Neue, le corps de texte bilingue, la grille de compteurs clés (5+, 3, 10+) et conserver les carrousels de badges (Tech Stack et Certifications).

- [x] **Étape 2 : Mettre à jour `src/components/Experience.astro`**
Créer une timeline éditoriale avec dates en `Space Mono`, nom d'entreprise et postes en `Bebas Neue` et résumé des missions avec puces stylisées.

- [x] **Étape 3 : Créer `src/components/Contact.astro`**
Créer la section Contact finale avec fond radial rougeoyant, sous-titre manuscrit (« Travaillons ensemble »), titre géant (« BÂTISSONS ENSEMBLE ») et lien mail interactif.

- [x] **Étape 4 : Mettre à jour `src/components/Footer.astro`**
Harmoniser avec la grille 3 colonnes du template (Copyright, monogramme central, liens réseaux sociaux en Space Mono).

- [x] **Étape 5 : Vérification de build**
Commande à exécuter : `pnpm run build`
Résultat attendu : Build réussi sans erreur.

- [x] **Étape 6 : Commit Git**
```powershell
git add src/components/About.astro src/components/Experience.astro src/components/Contact.astro src/components/Footer.astro
git commit -m "feat(sections): update about stats, experience timeline, contact section and footer"
```

---

### Tâche 10 : Assemblage final des pages et validation bilingue (FR et EN)

**Fichiers affectés :**
* Modifier : `src/pages/index.astro`
* Modifier : `src/pages/en/index.astro`

- [ ] **Étape 1 : Assembler les composants dans `src/pages/index.astro`**
Agencer :
1. `Hero`
2. `Ticker`
3. `Projects`
4. `About`
5. `Expertise`
6. `Experience`
7. `Contact`

- [ ] **Étape 2 : Assembler les composants dans `src/pages/en/index.astro`**
Agencer de manière identique la version anglaise avec `SITE_CONTENT` et `SITE_CONFIG` anglais.

- [ ] **Étape 3 : Vérification complète de compilation et vérification de type**
Commande à exécuter : `pnpm run build`
Résultat attendu : `2 page(s) built` générées sans avertissement ni erreur TypeScript.

- [ ] **Étape 4 : Commit Git**
```powershell
git add src/pages/index.astro src/pages/en/index.astro
git commit -m "feat(pages): assemble new portfolio structure on fr and en pages"
```
