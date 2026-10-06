import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Badr Achich | Network & Cybersecurity Engineer",
  author: "Badr Achich",
  description:
    "Network & Cybersecurity Engineer based in Belgium. Specialized in automation, infrastructure security, and network administration (Fortinet, Cisco, Check Point).",
  lang: "en",
  siteLogo: "/bxdr-logo.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Tech Stack", href: "#tech" },
    { text: "Certifications", href: "#certifications" },
    { text: "About", href: "#about-me" },
    { text: "🇫🇷 FR", href: "/" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/badr-achich" },
    { text: "Github", href: "https://github.com/BadrAchich" },
  ],
  socialImage: "/bxdr-og.jpg",
  canonicalURL: "https://portfolio-badr-achich.vercel.app/en",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Badr Achich",
    specialty: "Network and Cybersecurity Engineer",
    summary:
      "Network and Cybersecurity Engineer, CCNA and Fortinet (NSE4/NSE6) certified. With a proven track record in deploying infrastructures (FortiGate, Check Point), I also design automation tools in Python. I am looking for a dynamic team to take on new challenges in network security.",
    email: "badr.achich.contact@gmail.com",
    downloadCvText: "Download Resume",
  },
  experience: [
    {
      company: "Shinka IT",
      position: "Network & Cybersecurity Engineer",
      startDate: "Feb 2025",
      endDate: "Mar 2026",
      summary: [
        "Integration & Migration: Replacement of existing equipment with FortiGate HA clusters. Advanced routing and connectivity configuration (LACP).",
        "Network Automation (DevNet): End-to-end design and development of a Python application to automate and optimize maintenance tasks (Fortinet, Check Point).",
        "Audit & Compliance: Creation of multi-site consolidation matrices (VLANs, SVI, firewalls) to ensure architectural compliance.",
        "Support & Maintenance: Incident management (L1/L2), advanced network troubleshooting, firmware upgrades, and server administration (Windows/Linux) and Azure.",
      ],
    },
    {
      company: "CHBA, Artable, Colona, Trafic...",
      position: "Various Student Jobs & Versatile Experiences",
      startDate: "2018",
      endDate: "2025",
      summary: [
        "Reception Manager, Head Bartender, Inventory Manager, and Versatile Worker.",
        "Customer service, stress management, and reactivity in dynamic environments (Hospitality/Events/Healthcare).",
        "Organization, rigor, and strong team spirit within multidisciplinary groups.",
      ],
    },
    {
      company: "HEPL",
      position: "Bachelor in IT, Network and Telecommunications",
      startDate: "2020",
      endDate: "2025",
      summary:
        "Graduated with honors. Comprehensive training in network administration, operating systems, network protocols, and cybersecurity.",
    },
  ],
  projects: [
    {
      name: "Infra & Virtualization (Proxmox VE)",
      summary:
        "Deployment and administration of a physical server (Homelab). Advanced virtualization management via virtual machines (VMs) as well as LXC containers and Docker.",
      image: "/proj-scripts.jpg",
    },
    {
      name: "Network & Security",
      summary:
        "Configuration of a reverse proxy (Nginx Proxy Manager) and securing remote access via Tailscale. Dynamic DNS management (DuckDNS) and network filtering (AdGuard Home).",
      image: "/proj-homelab.jpg",
    },
    {
      name: "Simulations & Cybersecurity",
      summary:
        "Deployment of test environments with PNETLab to simulate complex network topologies (Cisco, Fortinet). Regular practice on platforms (Hack The Box, OverTheWire).",
      image: "/proj-migr.jpg",
    },
  ],
  about: {
    description: `
      Network and Cybersecurity Engineer, CCNA and Fortinet (NSE4/NSE6) certified. I acquired solid technical skills through my degree (graduated with honors), my experience deploying infrastructures (FortiGate, Check Point), and Python automation. My profile is complemented by several years of versatile experience (Hospitality/Logistics), forging my stress management and adaptability.

      **🌍 Languages:** French (C2 - Native) • English (B2 - Professional) • Italian (B1)

      *Professional references (Shinka IT) are available upon request.*
    `,
    image: "/bxdr-logo.jpg",
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg",
        skills: ["Windows Server", "Active Directory", "Group Policies"]
      },
      {
        name: "Azure",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
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
