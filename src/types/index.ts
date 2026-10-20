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
  accentWord?: string;
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

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  tagline: string;
  label: string;
  ctaText: string;
  cvLink: string;
  downloadCvText?: string;
}

export interface SiteContent {
  hero: HeroProps;
  ticker: TickerItem[];
  projects: ProjectProps[];
  about: AboutProps;
  expertise: ExpertiseItem[];
  experience: ExperienceProps[];
  contact: ContactProps;
}
