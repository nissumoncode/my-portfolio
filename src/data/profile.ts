/**
 * 🚧 PLACEHOLDER PROFILE — every field below is fictional.
 * Replace with your real details before deployment.
 * Real asset expected: public/avatar.jpg, public/resume.pdf
 */
import type { Profile } from "./types";

export const profile: Profile = {
  // PLACEHOLDER name/role/tagline — replace with your own
  name: "Sam Sterling",
  role: "Full-Stack Developer",
  tagline:
    "I turn ideas into fast, accessible web experiences — from pixel to production.",
  bio: [
    "PLACEHOLDER — I'm a developer focused on building clean, performant interfaces with React and Next.js, and pairing them with pragmatic backends.",
    "PLACEHOLDER — Off the keyboard I enjoy contributing to open source, writing about what I learn, and mentoring developers who are starting out.",
  ],
  // 🚧 PLACEHOLDER contact details (email/phone/location) — replace with your own.
  // Phone/WhatsApp stay null until you provide real numbers.
  email: "hello@example.com",
  phone: null,
  whatsapp: null,
  location: "City, Country",
  // Real portrait photo provided by the owner (public/image.png)
  avatarUrl: "/image.png",
  // PLACEHOLDER resume — drop your CV at public/resume.pdf and update
  resumeUrl: null,
  // PLACEHOLDER social links — "url" must be replaced with real profiles
  socials: [
    { label: "GitHub", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "Email", url: "#" },
  ],
};
