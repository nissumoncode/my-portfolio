import { MailIcon, MapPinIcon, UserRoundIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

const facts = [
  {
    icon: MapPinIcon,
    label: "Location",
    value: profile.location,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
  },
] as const;

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            About <span className="text-gradient">me</span>
          </>
        }
        description="A quick introduction — who I am, how I work, and where to find me."
      />

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          {profile.bio.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-muted-foreground first:text-lg first:text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="w-full min-w-0 gap-4 overflow-hidden p-2 lg:-translate-y-30">
          <CardHeader className="px-4 pt-4 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UserRoundIcon aria-hidden="true" className="size-4" />
              </span>
              <CardTitle className="text-base">Quick profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="min-w-0 space-y-4 px-4 pb-4">
            <dl className="space-y-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 px-3.5 py-2.5"
                >
                  <fact.icon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {fact.label}
                    </dt>
                    <dd className="truncate text-sm text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Resume download button */}
            {profile.resumeUrl ? (
              <Button className="w-full" asChild>
                <a href={profile.resumeUrl} download>
                  Download CV
                  <DownloadIcon aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    aria-disabled="true"
                    tabIndex={0}
                    className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-dashed border-border px-5 py-2.5 text-sm font-medium text-muted-foreground"
                  >
                    Download CV
                    <DownloadIcon aria-hidden="true" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  Add your resume PDF to enable the download.
                </TooltipContent>
              </Tooltip>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
