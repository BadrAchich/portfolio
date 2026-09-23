import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Badr Achich — Ingénieur Réseaux & Cybersécurité",
  author: "Badr Achich",
  description:
    "Ingénieur Réseaux & Cybersécurité basé en Belgique. Spécialisé en automatisation, sécurisation d'infrastructures et administration réseau (Fortinet, Cisco, Check Point).",
  lang: "fr",
  siteLogo: "/badr-small.jpg",
  navLinks: [
    { text: "Expérience", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "À propos", href: "#about" },
    { text: "🇬🇧 EN", href: "/en" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/badr-achich" },
    { text: "Github", href: "https://github.com/BadrAchich" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://portfolio-badr-achich.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Badr Achich",
    specialty: "Ingénieur Réseau et Cybersécurité",
    summary:
      "Junior passionné et curieux, j'apprends vite et m'adapte facilement. Je recherche une équipe expérimentée et soudée pour développer mon expertise en sécurité des réseaux tout en m'investissant dans des missions concrètes.",
    email: "", // Non divulgué
  },
  experience: [
    {
      company: "Shinka IT",
      position: "Ingénieur Réseaux & Cybersécurité",
      startDate: "Févr. 2025",
      endDate: "Mars 2026",
      summary: [
        "Intégration & Déploiement : Mise en place et configuration d'infrastructures réseaux et sécurité (Firewalls Fortinet, Check Point).",
        "Support & Maintenance : Gestion des incidents (L1/L2), troubleshooting réseau et maintien en conditions opérationnelles des équipements.",
        "Administration Système : Gestion de base des environnements serveurs (Windows/Linux), des hyperviseurs et des services cloud (Microsoft Azure).",
        "Network Automation : Conception et développement de A à Z d'une application dédiée à l'automatisation des tâches de maintenance pour les environnements Fortinet et Check Point.",
      ],
    },
    {
      company: "HEPL",
      position: "Bachelier en informatique, orientation réseau et télécom",
      startDate: "2020",
      endDate: "2025",
      summary:
        "Diplôme obtenu avec distinction. Formation approfondie en administration réseau, systèmes d'exploitation, protocoles réseau et cybersécurité.",
    },
  ],
  projects: [
    {
      name: "Automatisation Fortinet / Check Point",
      summary:
        "Application Python développée de A à Z pour automatiser la maintenance et le diagnostic d'environnements Fortinet et Check Point. Réduit jusqu'à 1 journée de travail manuel en un processus automatisé.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/spotifu.png",
    },
    {
      name: "Migration Stormshield → FortiGate",
      summary:
        "Projet de migration d'un cluster Stormshield vers FortiGate avec configuration complète des règles firewall, politiques de sécurité, routage et VPN en environnement de production.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/shopify-clon.png",
    },
    {
      name: "Scripts d'automatisation réseau",
      summary:
        "Collection de scripts Python, Bash et PowerShell pour automatiser des tâches d'administration réseau : supervision, configuration, reporting et diagnostics sur infrastructures Cisco, Fortinet et Linux.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Bonjour, je suis Badr Achich, Ingénieur Réseaux & Cybersécurité basé à Waremme, en Belgique. Passionné par les technologies réseau et la sécurité informatique, j'aime transformer des problèmes complexes en solutions simples, efficaces et durables.

      Je maîtrise un large écosystème technologique : Fortinet (NSE 4 & NSE 6), Check Point, Stormshield, Cisco (CCNA), ainsi que Linux, Windows, Proxmox, Python, PowerShell et Azure. Mon approche est orientée automatisation : je cherche toujours à éliminer les tâches répétitives pour me concentrer sur ce qui a de la valeur.

      Certifié Fortinet NSE 4, NSE 6, Cisco CCNA et Cato CCA, je continue activement ma montée en compétences avec une veille technologique régulière et de nouveaux projets personnels.
    `,
    image: "/badr-big.jpg",
  },
};

// #5755ff
