import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

// Bespoke brand-family gradient per card — tasteful CSS placeholder art
// for projects that don't have real screenshots yet (no broken images).
const thumbs = [
  "linear-gradient(135deg, #6a5bff 0%, #27d9f2 100%)",
  "linear-gradient(135deg, #3b2ec8 0%, #6a5bff 100%)",
  "linear-gradient(135deg, #0e7490 0%, #27d9f2 100%)",
  "linear-gradient(135deg, #4338ca 0%, #7e70ff 100%)",
  "linear-gradient(135deg, #155e75 0%, #0ea5e9 100%)",
  "linear-gradient(135deg, #5b21b6 0%, #6a5bff 100%)",
];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Two-letter monogram from the title's letters ("TaskFlow" → "TA")
  const monogram = project.title.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();

  return (
    <Link
      href={`/projects/${project.id}`}
      aria-label={`${project.title} — view case study`}
      className="group block h-full rounded-2xl focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:outline-none"
    >
      <Card className="h-full gap-4 overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
        {/* Thumbnail: real screenshot when available, gradient monogram otherwise */}
        <div
          className={cn(
            "relative flex h-40 items-center justify-center transition-transform duration-500",
          )}
          style={{ background: thumbs[index % thumbs.length] }}
        >
          {project.screenshots[0] ? (
            <Image
              src={project.screenshots[0]}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <>
              <span aria-hidden="true" className="text-4xl font-bold tracking-tight text-white/90">
                {monogram}
              </span>
              <span className="absolute bottom-2 right-3 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-medium text-white/85 backdrop-blur-sm">
                Thumbnail placeholder
              </span>
            </>
          )}
          {project.featured && (
            <Badge className="absolute top-3 left-3 bg-black/40 text-white backdrop-blur-sm">
              Featured
            </Badge>
          )}
        </div>

        <CardContent className="flex flex-1 flex-col gap-2.5 px-5">
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.techStack.slice(0, 3).map((tech) => (
              <li key={tech}>
                <Badge variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              </li>
            ))}
            {project.techStack.length > 3 && (
              <li>
                <Badge variant="secondary" className="font-normal">
                  +{project.techStack.length - 3}
                </Badge>
              </li>
            )}
          </ul>
        </CardContent>

        <CardFooter className="px-5 pb-5">
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1"
          >
            View case study
            <ArrowUpRightIcon className="size-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
