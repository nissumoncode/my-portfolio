import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

/**
 * Single-page portfolio. Every section is an anchor target (#home … #contact)
 * handled by the shared Navbar; projects link out to /projects/[id].
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />

      <Projects />
      <Contact />
    </>
  );
}
