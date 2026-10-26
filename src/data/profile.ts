/**
 * Personal profile configuration.
 * Update contact details, social links, and resume as needed.
 */
import type { Profile } from "./types";

export const profile: Profile = {
  // PLACEHOLDER name/role/tagline — replace with your own

  name: "Nafiz Iqbal Sumon",
  role: "Full-Stack Developer",
  tagline:
    "Building end-to-end web applications with modern frontend and backend technologies.",

  bio: [
    "I'm a Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS to build engaging frontend experiences, along with Node.js and MongoDB to develop backend functionality and manage data.",
    "I enjoy creating complete web applications, from designing clean and intuitive user interfaces to building server-side features and integrating databases. I'm continuously learning, improving my development skills, and exploring new technologies to turn ideas into practical web solutions.",
  ],
  // Contact information

  email: "nissumon13@gmail.com",
  phone: "01312388111",
  whatsapp: "8801312388111",
  location: "Rajshahi, Bangladesh",

  // Real portrait photo provided by the owner (public/image.png)
  avatarUrl: "/image.png",

  // Add your resume PDF .
  resumeUrl: null,

  // Social media profiles
  socials: [
    { label: "GitHub", url: "https://github.com/nissumoncode" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR_USERNAME" },
    { label: "X", url: "https://x.com/NafizIqbalSumon" },
    { label: "Email", url: "mailto:nissumon13@gmail.com" },
    { label: "WhatsApp", url: "https://wa.me/8801312388111" },
  ],
};
