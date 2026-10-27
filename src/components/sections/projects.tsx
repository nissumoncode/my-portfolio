import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import projects from "@/data/projects.json";
import type { Project } from "@/data/types/types";

/**
 * Projects grid — cards link to pre-rendered case-study routes
 * (/projects/[id]). Screenshot gradients are labeled placeholders.
 */
export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve <span className="text-gradient">built</span>
          </>
        }
        description="A selection of projects — open any card for the full case study: the challenge, the approach, and what comes next."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project, i: number) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
