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
    email: "",
  },
  experience: [
    {
      company: "Shinka IT",
      position: "Network & Cybersecurity Engineer",
      startDate: "Feb 2025",
      endDate: "Mar 2026",
      summary: [
        "Support & Maintenance: Incident management (L1/L2), network troubleshooting, and maintaining security equipment in operational condition.",
        "System Administration: Basic management of server environments (Windows/Linux), hypervisors, and cloud services (Microsoft Azure).",
      ],
    },
    {
      company: "Hospitality & Logistics Sector",
      position: "Reception Manager, Head Bartender & Versatile Worker",
      startDate: "2018",
      endDate: "2025",
      summary: [
        "Various experiences (CHBA, Laveleye Brasserie, Colona...) developing strong adaptability, a sense of responsibility, teamwork, and stress management in demanding environments.",
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
      name: "Fortinet & Check Point Automation",
      summary:
        "End-to-end design and development of a Python application dedicated to automating maintenance tasks. Reduces up to 1 day of manual work into a fully automated process.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/spotifu.png",
    },
    {
      name: "Stormshield → FortiGate Migration",
      summary:
        "Integration and deployment project: full migration of a Stormshield cluster to FortiGate, including firewall rules configuration, routing, and VPN tunnels.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/shopify-clon.png",
    },
    {
      name: "Scripts & Network Automation",
      summary:
        "Creation of automation scripts (Python, PowerShell, Bash) for infrastructure management and monitoring. A solution-oriented approach to optimize time and reduce human error.",
      linkPreview: "/",
      linkSource: "https://github.com/BadrAchich",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Always passionate about IT, I recently graduated with honors with my Bachelor's degree. My technical profile is complemented by several years of experience in the hospitality industry, which gave me excellent interpersonal skills and great rigor.

      **🛠️ Technical Skills:**
      • Networks & Telecommunications
      • Cybersecurity (Fortinet, Check Point, Cisco, Stormshield)
      • Virtualization (Proxmox)
      • Scripting & Programming (Python, PowerShell, Bash)

      **📜 Certifications:**
      • Cisco CCNA
      • Fortinet NSE4 (FortiOS 7.6) & NSE6 (FortiManager)
      • Cato CCA

      **🌍 Languages:**
      • French (C2 - Native)
      • English (B2 - Professional)
      • Italian (B1)

      *Professional references (Shinka IT) are available upon request.*
    `,
    image: "/badr-big.jpg",
  },
};

// #5755ff
