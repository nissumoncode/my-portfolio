import { BriefcaseIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/experience";

/**
 * Experience timeline. Every entry below is a 🚧 placeholder —
 * replace with real work history in src/data/experience.ts.
 */
export function Experience() {
  return (
    <Section id="experience" className="border-b border-border">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Work <span className="text-gradient">experience</span>
          </>
        }
        description="Roles I've held and what I delivered — placeholder entries until real employment history is provided."
      />

      <ol className="relative space-y-6 border-l border-border pl-6">
        {experience.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1/2 -left-[31px] h-3 w-3 -translate-y-1/2 rounded-full border-2 border-background"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-violet), var(--brand-cyan))",
              }}
            />
            <Card className="gap-4 py-6 transition-colors hover:border-primary/40">
              <CardContent className="space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
                    <BriefcaseIcon
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                    {item.role}
                  </h3>
                  <Badge variant="secondary" className="font-mono">
                    {item.period}
                  </Badge>
                </div>
                <p className="font-medium text-primary">{item.company}</p>

                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label="Technologies used"
                >
                  {item.tech.map((tech) => (
                    <li key={tech}>
                      <Badge variant="outline" className="font-normal">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
