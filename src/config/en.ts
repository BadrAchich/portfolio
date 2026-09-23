import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Badr Achich — Network & Cybersecurity Engineer",
  author: "Badr Achich",
  description:
    "Network & Cybersecurity Engineer based in Belgium. Specialized in automation, infrastructure security, and network administration (Fortinet, Cisco, Check Point).",
  lang: "en",
  siteLogo: "/badr-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "🇫🇷 FR", href: "/" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/badr-achich" },
    { text: "Github", href: "https://github.com/BadrAchich" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://portfolio-badr-achich.vercel.app/en",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Badr Achich",
    specialty: "Network and Cybersecurity Engineer",
    summary:
      "Passionate and curious junior, I learn fast and adapt easily. I'm looking for an experienced and tightly knit team to develop my expertise in network security while investing myself in concrete missions.",
    email: "", // Non divulgué
  },
  experience: [
    {
      company: "Shinka IT",
      position: "Network & Cybersecurity Engineer",
      startDate: "Feb 2025",
      endDate: "Mar 2026",
      summary: [
        "Integration & Deployment: Setup and configuration of network and security infrastructures (Fortinet, Check Point Firewalls).",
        "Support & Maintenance: Incident management (L1/L2), network troubleshooting, and maintaining equipment in operational condition.",
        "System Administration: Basic management of server environments (Windows/Linux), hypervisors, and cloud services (Microsoft Azure).",
        "Network Automation: End-to-end design and development of an application dedicated to automating maintenance tasks for Fortinet and Check Point environments.",
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
      name: "Fortinet / Check Point Automation",
      summary:
        "Python application developed from scratch to automate the maintenance and diagnostics of Fortinet and Check Point environments. Reduces up to 1 day of manual work into an automated process.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/spotifu.png",
    },
    {
      name: "Stormshield → FortiGate Migration",
      summary:
        "Migration project of a Stormshield cluster to FortiGate with complete configuration of firewall rules, security policies, routing, and VPNs in a production environment.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/shopify-clon.png",
    },
    {
      name: "Network Automation Scripts",
      summary:
        "Collection of Python, Bash, and PowerShell scripts to automate network administration tasks: monitoring, configuration, reporting, and diagnostics on Cisco, Fortinet, and Linux infrastructures.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hello, I'm Badr Achich, a Network & Cybersecurity Engineer based in Waremme, Belgium. Passionate about networking technologies and IT security, I love transforming complex problems into simple, effective, and sustainable solutions.

      I master a wide technological ecosystem: Fortinet (NSE 4 & NSE 6), Check Point, Stormshield, Cisco (CCNA), as well as Linux, Windows, Proxmox, Python, PowerShell, and Azure. My approach is automation-oriented: I'm always looking to eliminate repetitive tasks to focus on what brings real value.

      Certified Fortinet NSE 4, NSE 6, Cisco CCNA, and Cato CCA, I actively continue to improve my skills through regular tech watch and new personal projects.
    `,
    image: "/badr-big.jpg",
  },
};

// #5755ff
