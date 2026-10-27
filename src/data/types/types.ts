/**
 * Shared data contracts for the portfolio.
 *
 * ⚠️ ALL DATA FILES IN `src/data/` CONTAIN PLACEHOLDER CONTENT.
 * Nothing here describes a real person — replace every field before
 * publishing. Placeholder URLs intentionally point to "#" or example.com
 * and must never be presented as working links.
 */

export interface SocialLink {
  /** Display/aria name, e.g. "GitHub" */
  label: string;
  /** PLACEHOLDER href until real profile URLs are provided */
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  /** Short one-liner shown in the hero */
  tagline: string;
  /** 1–2 short paragraphs for the About section */
  bio: string[];
  email: string;
  /** Phone/WhatsApp: null until real numbers are provided (then shown in Contact) */
  phone: string | null;
  /** International format, e.g. "+8801XXXXXXXXX" */
  whatsapp: string | null;
  location: string;
  /** Path to avatar image in /public, or null to use the fallback visual */
  avatarUrl: string | null;
  /** Path to CV PDF in /public, or null to hide the resume button */
  resumeUrl: string | null;
  socials: SocialLink[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  tech: string[];
}

export interface Project {
  /** URL slug used by /projects/[id] */
  id: string;
  title: string;
  /** Short one-liner shown on the card and in metadata */
  tagline: string;
  /** Longer overview shown on the detail page */
  overview: string;
  /** Your responsibility on the project */
  role: string;
  techStack: string[];
  features: string[];
  /** Obstacles faced and how they were overcome */
  challenges: string[];
  ideas: string[];
  /** PLACEHOLDER hrefs — "#" until real links are provided; null hides the button */
  liveUrl: string | null;
  githubUrl: string | null;
  /** Paths under /public/images/projects/<id>/ — empty falls back to a gradient */
  screenshots: string[];
  featured?: boolean;
}
