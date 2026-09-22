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
    specialty: "Ingénieur Réseaux & Cybersécurité",
    summary:
      "Passionné par les technologies réseau et la cybersécurité, je transforme des problèmes complexes en solutions simples, efficaces et durables. Basé à Waremme, Belgique.",
    email: "badrbadr25.06@gmail.com",
  },
  experience: [
    {
      company: "Shinka",
      position: "Cyber Security Engineer",
      startDate: "2025",
      endDate: "2026",
      summary: [
        "Déploiement et sécurisation d'infrastructures réseau en environnement professionnel. Configuration de règles firewall, routage et VPN sur des équipements Fortinet, Check Point et Stormshield.",
        "Migration d'un cluster Stormshield vers FortiGate, avec mise en place d'une politique de sécurité complète, surveillance des flux et durcissement des configurations.",
        "Développement d'un script Python d'automatisation permettant de réduire jusqu'à 1 journée de travail manuel en un processus entièrement automatisé pour la maintenance et le diagnostic des environnements Fortinet et Check Point.",
      ],
    },
    {
      company: "Shinka",
      position: "Stagiaire Infrastructure & Automatisation",
      startDate: "2025",
      endDate: "2025",
      summary: [
        "Participation active à des projets d'infrastructure réseau et d'automatisation. Découverte et prise en main des environnements Fortinet, Check Point et Stormshield en conditions réelles.",
        "Contribution à l'écriture de scripts d'automatisation en Python et PowerShell pour simplifier les tâches répétitives d'administration système.",
      ],
    },
    {
      company: "HEPL",
      position: "Bachelier en Informatique — Systèmes, Réseaux & Télécommunications",
      startDate: "2020",
      endDate: "2025",
      summary:
        "Formation approfondie en administration réseau, systèmes d'exploitation (Linux, Windows), protocoles réseau et télécommunications. Obtention du diplôme de Bachelier en Informatique option Réseaux & Télécommunications.",
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
