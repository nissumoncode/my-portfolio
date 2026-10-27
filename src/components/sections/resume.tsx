import { Download, FileText } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <Section id="resume" className="border-b border-border">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-sm text-muted-foreground">
            MY EXPERIENCE & QUALIFICATIONS
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            My <span className="text-gradient">Resume</span>
          </h2>

          <p className="max-w-xl text-muted-foreground">
            Explore my resume to learn more about my education, technical
            skills, and web development experience.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <FileText className="size-6 text-violet-500" />

            <div className="flex-1">
              <h3 className="font-semibold">Nafiz Iqbal Sumon</h3>
              <p className="text-sm text-muted-foreground">
                Junior Full Stack Developer
              </p>
            </div>

            <Button variant="outline" asChild>
              <a href="/resume.pdf" download="Nafiz-Iqbal-Sumon-Resume.pdf">
                <Download aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </div>

          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0"
            title="Nafiz Iqbal Sumon's Resume"
            className="h-[600px] w-full bg-white sm:h-[800px]"
          />
        </div>
      </div>
    </Section>
  );
}
