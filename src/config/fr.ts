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
    email: "",
  },
  experience: [
    {
      company: "Shinka IT",
      position: "Ingénieur Réseaux & Cybersécurité",
      startDate: "Févr. 2025",
      endDate: "Mars 2026",
      summary: [
        "Support & Maintenance : Gestion des incidents (L1/L2), troubleshooting réseau et maintien en conditions opérationnelles des équipements de sécurité.",
        "Administration Système : Gestion de base des environnements serveurs (Windows/Linux), des hyperviseurs et des services cloud (Microsoft Azure).",
      ],
    },
    {
      company: "Secteur Horeca & Logistique",
      position: "Responsable d'accueil, Chef de bar & Ouvrier polyvalent",
      startDate: "2018",
      endDate: "2025",
      summary: [
        "Diverses expériences (CHBA, Brasserie de Laveleye, Colona...) développant une forte capacité d'adaptation, le sens des responsabilités, le travail en équipe et la gestion du stress en environnement exigeant.",
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
      name: "Automatisation Fortinet & Check Point",
      summary:
        "Conception et développement de A à Z d'une application Python dédiée à l'automatisation des tâches de maintenance. Permet de réduire jusqu'à 1 journée de travail manuel en un processus automatisé.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/spotifu.png",
    },
    {
      name: "Migration Stormshield → FortiGate",
      summary:
        "Projet d'intégration et déploiement : migration complète d'un cluster Stormshield vers FortiGate incluant la configuration des règles firewall, du routage et des tunnels VPN.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/shopify-clon.png",
    },
    {
      name: "Scripts & Network Automation",
      summary:
        "Création de scripts d'automatisation (Python, PowerShell, Bash) pour la gestion et le monitoring d'infrastructures. Une approche orientée solution pour optimiser le temps et réduire les erreurs humaines.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Passionné par l'informatique depuis toujours, j'ai récemment validé mon Bachelier avec distinction. Mon profil technique est complété par plusieurs années d'expérience dans l'Horeca, m'ayant forgé un excellent relationnel et une grande rigueur.

      **🛠️ Compétences Informatiques :**
      • Réseaux & Télécommunications
      • Cybersécurité (Fortinet, Check Point, Cisco, Stormshield)
      • Virtualisation (Proxmox)
      • Scripting et programmation (Python, PowerShell, Bash)

      **📜 Certifications :**
      • Cisco CCNA
      • Fortinet NSE4 (FortiOS 7.6) & NSE6 (FortiManager)
      • Cato CCA

      **🌍 Langues :**
      • Français (C2 - Maternelle)
      • Anglais (B2 - Professionnel)
      • Italien (B1)

      *Des références professionnelles (Shinka IT) sont disponibles sur demande.*
    `,
    image: "/badr-big.jpg",
  },
};

// #5755ff
