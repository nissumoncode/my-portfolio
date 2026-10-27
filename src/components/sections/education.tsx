import { GraduationCapIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import education from "@/data/education.json";

/**
 * Education timeline. Every entry below is a 🚧 placeholder —
 * replace with real academic history in src/data/education.ts.
 */
export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title={
          <>
            Academic <span className="text-gradient">journey</span>
          </>
        }
        description="My academic background and formal training — placeholder entries until real credentials are provided."
      />

      <ol className="relative space-y-6 border-l border-border pl-6">
        {education.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1/2 -left-[31px] h-3 w-3 -translate-y-1/2 rounded-full border-2 border-background"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-violet), var(--brand-cyan))",
              }}
            />
            <Card className="gap-3 py-5 transition-colors hover:border-primary/40">
              <CardContent className="space-y-2.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 font-semibold tracking-tight">
                    <GraduationCapIcon
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                    {item.degree}
                  </h3>
                  <Badge variant="secondary" className="font-mono">
                    {item.period}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-primary">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
