import { CodeIcon, ServerIcon, TerminalIcon, MonitorSmartphoneIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/data/types";

const categoryIcons: Record<string, typeof CodeIcon> = {
  Languages: CodeIcon,
  Frontend: MonitorSmartphoneIcon,
  Backend: ServerIcon,
  "Tools & Platforms": TerminalIcon,
};

function CategoryIcon({ name }: { name: string }) {
  const Icon = categoryIcons[name] ?? TerminalIcon;
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-cyan-brand/15 text-primary">
      <Icon aria-hidden="true" className="size-5" />
    </span>
  );
}

/**
 * Skills grouped by category. The strings come from src/data/skills.ts
 * (🚧 placeholders) — no fabricated proficiency levels or claims.
 */
export function Skills() {
  return (
    <Section id="skills" className="border-b border-border">
      <SectionHeading
        eyebrow="Skills"
        title={<>Tools of the <span className="text-gradient">trade</span></>}
        description="The technologies I use to design, build, and ship web applications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((category: SkillCategory) => (
          <Card
            key={category.name}
            className="group gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <CategoryIcon name={category.name} />
                <h3 className="font-semibold tracking-tight">
                  {category.name}
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
