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

      **🌍 Langues :** Français (C2 - Maternelle) • Anglais (B2 - Professionnel) • Italien (B1)

      *Des références professionnelles (Shinka IT) sont disponibles sur demande.*
    `,
    image: "/badr-big.jpg",
    skills: [
      {
        name: "Fortinet",
        image: "https://cdn.simpleicons.org/fortinet/white",
        skills: ["FortiGate", "FortiManager", "Firewalls", "VPN", "SD-WAN"]
      },
      {
        name: "Check Point",
        image: "https://www.google.com/s2/favicons?domain=checkpoint.com&sz=128",
        skills: ["Security Gateway", "SmartConsole", "Threat Prevention", "VPN"]
      },
      {
        name: "Cisco",
        image: "https://cdn.simpleicons.org/cisco/white",
        skills: ["Routing", "Switching", "IOS", "Network Security"]
      },
      {
        name: "Stormshield",
        image: "https://www.google.com/s2/favicons?domain=stormshield.com&sz=128",
        skills: ["SNS", "Endpoint Security", "IPS/IDS", "Network Protection"]
      },
      {
        name: "Proxmox",
        image: "https://cdn.simpleicons.org/proxmox/white",
        skills: ["Virtualization", "LXC", "KVM", "Cluster Management"]
      },
      {
        name: "Python",
        image: "https://cdn.simpleicons.org/python/white",
        skills: ["Scripting", "Automation", "API REST", "Data Parsing"]
      },
      {
        name: "PowerShell",
        image: "https://cdn.simpleicons.org/powershell/white",
        skills: ["Windows Admin", "Active Directory", "Scripting", "Automation"]
      },
      {
        name: "Bash",
        image: "https://cdn.simpleicons.org/gnubash/white",
        skills: ["Shell Scripting", "Linux Admin", "Cron", "Automation"]
      },
      {
        name: "Linux",
        image: "https://cdn.simpleicons.org/linux/white",
        skills: ["Ubuntu", "Debian", "System Administration", "Security"]
      },
      {
        name: "Windows",
        image: "https://cdn.simpleicons.org/windows/white",
        skills: ["Windows Server", "Active Directory", "Group Policies"]
      },
      {
        name: "Azure",
        image: "https://cdn.simpleicons.org/microsoftazure/white",
        skills: ["Cloud Security", "Entra ID", "Networking", "IAM"]
      }
    ],
    badges: [
      {
        name: "Fortinet FortiManager 7.6 Administrator",
        image: "https://images.credly.com/images/b0885dbc-a96a-4d87-ba7a-d5339c543346/blob",
        url: "https://www.credly.com/badges/805f73b4-4859-4104-8ced-661eb7f6911b/public_url",
        skills: ["Administrative Domains", "Central Management", "Device Provisioning", "FortiGuard", "Object Management", "Policy Management", "Security Administration"]
      },
      {
        name: "Fortinet NSE 6 Certified in Secure Networking",
        image: "https://images.credly.com/images/f9429e70-1150-4cea-9e73-f0758b32624b/blob",
        url: "https://www.credly.com/badges/2733fbce-c8ed-48ef-93e0-8dc3adf175c7/public_url",
        skills: ["Administrative Domains", "Central Management", "Device Management", "Fortinet", "Log Data", "NAC", "Network Admin", "Network Security", "Policy Management", "Security Systems"]
      },
      {
        name: "Cato Certified Associate",
        image: "https://images.credly.com/images/6b7d1518-5326-4f6e-8931-c8b15d689655/blob",
        url: "https://www.credly.com/badges/ccdb1f6a-dddc-4d5e-8428-4a62f257485c/public_url",
        skills: ["SD-WAN", "SDP", "ZTNA"]
      },
      {
        name: "Fortinet FortiOS 7.6 Administrator",
        image: "https://images.credly.com/images/903ba5f9-3093-47d7-9c7c-83a4a95cb59a/blob",
        url: "https://www.credly.com/badges/8a54c370-8293-4da0-8854-d04bbad86196/public_url",
        skills: ["Antivirus", "Authentication", "Firewall", "FortiCNF", "FortiGate Cloud", "FortiOS", "FortiSASE", "High Availability", "IPS", "Logging", "NAT", "Routing", "VPN", "Web Filtering"]
      },
      {
        name: "Fortinet NSE 4 Certified in FortiOS",
        image: "https://images.credly.com/images/7413400c-4630-40ab-b8ac-200eaee90e58/blob",
        url: "https://www.credly.com/badges/286a0d83-8708-4090-8902-0d366f3e9afe/public_url",
        skills: ["Antivirus", "Authentication", "Firewalls", "FortiGate", "High Availability", "IPS", "Log Analysis", "Network Security", "Routing", "SASE", "SD-WAN", "VPN", "ZTNA", "Zero Trust"]
      },
      {
        name: "Cisco Certified Network Associate",
        image: "https://images.credly.com/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png",
        url: "https://www.credly.com/badges/05a0154c-a45a-450b-85ae-8d8a5e86b058/public_url",
        skills: ["Access Connectivity", "IP Services", "Network Access", "Network Fundamentals", "Security Fundamentals", "Automation", "Routing", "IP", "Programmability"]
      },
      {
        name: "CCNA: Enterprise Networking, Security & Automation",
        image: "https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
        url: "https://www.credly.com/badges/18ade446-a79f-4b7f-825a-ba4107524548/public_url",
        skills: ["Dynamic Routing", "NAT", "Network Automation", "QoS", "Security Threat Mitigation", "SDN", "Virtualization", "WAN"]
      }
    ],
  },
};

// #5755ff
