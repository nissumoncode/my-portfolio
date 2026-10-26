import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CircleAlertIcon,
  ExternalLinkIcon,
  LightbulbIcon,
  ListChecksIcon,
  ScrollTextIcon,
} from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Params = Promise<{ id: string }>;

/**
 * Pre-renders every project at build time (fully static, no backend).
 * Unknown ids fall through to the custom 404 page.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case study`,
    description: project.tagline,
  };
}

const thumbs = [
  "linear-gradient(135deg, #6a5bff 0%, #27d9f2 100%)",
  "linear-gradient(135deg, #3b2ec8 0%, #6a5bff 100%)",
  "linear-gradient(135deg, #0e7490 0%, #27d9f2 100%)",
  "linear-gradient(135deg, #4338ca 0%, #7e70ff 100%)",
  "linear-gradient(135deg, #155e75 0%, #0ea5e9 100%)",
  "linear-gradient(135deg, #5b21b6 0%, #6a5bff 100%)",
];

function DetailHeading({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight sm:text-2xl">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:size-4">
        {icon}
      </span>
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);
  // Two-letter monogram from the title's letters ("TaskFlow" → "TA")
  const monogram = project.title.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="-ml-2 text-muted-foreground hover:text-foreground"
      >
        <Link href="/#projects">
          <ArrowLeftIcon aria-hidden="true" />
          All projects
        </Link>
      </Button>

      {/* Header */}
      <header className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="font-mono">Case study</Badge>
          {project.featured && (
            <Badge variant="brand" className="font-mono">
              Featured
            </Badge>
          )}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          {project.title}
          <span className="text-gradient">.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        {/* Actions: real links only. `null` URLs render an explicit
            "not configured yet" badge — never a dead "#" button. 🚧 */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.liveUrl ? (
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
                <ExternalLinkIcon aria-hidden="true" />
              </a>
            </Button>
          ) : (
            <Badge variant="coming" className="gap-1.5 px-3 py-1.5">
              <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
              Live demo — URL not configured yet
            </Badge>
          )}
          {project.githubUrl ? (
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="size-4" />
                GitHub repository
              </a>
            </Button>
          ) : (
            <Badge variant="coming" className="gap-1.5 px-3 py-1.5">
              <GitHubIcon className="size-3.5" />
              GitHub — repo not published yet
            </Badge>
          )}
        </div>
      </header>

      {/* Thumbnail */}
      <div
        className="relative mt-10 flex h-56 items-center justify-center overflow-hidden rounded-3xl border border-border sm:h-72"
        style={{ background: thumbs[projects.indexOf(project) % thumbs.length] }}
      >
        {project.screenshots[0] ? (
          <Image
            src={project.screenshots[0]}
            alt={`${project.title} main screenshot`}
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="text-6xl font-bold text-white/90"
          >
            {monogram}
          </span>
        )}
      </div>
      {!project.screenshots[0] && (
        <p className="mt-3 text-sm text-muted-foreground/70 italic">
          Thumbnail placeholder — drop screenshots into
          {" "}
          <span className="font-mono">
            /public/images/projects/{project.id}/
          </span>{" "}
          and list them in src/data/projects.ts
        </p>
      )}

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_250px] md:gap-12">
        <div className="space-y-12">
          <section>
            <DetailHeading icon={<ScrollTextIcon aria-hidden="true" />}>
              Overview
            </DetailHeading>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>{project.overview}</p>
              <p>
                <span className="font-medium text-foreground">My role: </span>
                {project.role}
              </p>
            </div>
          </section>

          <section>
            <DetailHeading icon={<ListChecksIcon aria-hidden="true" />}>
              Key features
            </DetailHeading>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--brand-cyan)" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <DetailHeading icon={<CircleAlertIcon aria-hidden="true" />}>
              Challenges &amp; solutions
            </DetailHeading>
            <ul className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CircleAlertIcon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <DetailHeading icon={<LightbulbIcon aria-hidden="true" />}>
              Future improvements
            </DetailHeading>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {project.ideas.map((idea, i) => (
                <li key={i} className="flex gap-2.5">
                  <LightbulbIcon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                    style={{ color: "var(--brand-cyan)" }}
                  />
                  {idea}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Tech stack sidebar */}
        <aside className="h-fit md:border-l md:border-border md:pl-8">
          <h2 className="font-semibold tracking-tight">Tech stack</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5 md:flex-col md:items-start">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <Badge variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Related projects */}
      <section className="mt-16 border-t border-border pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            More projects
          </h2>
          <Button variant="link" size="sm" asChild>
            <Link href="/#projects">
              View all
              <ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    </article>
  );
}
