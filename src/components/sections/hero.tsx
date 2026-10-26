import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

// Small floating chips around the portrait — generic tech names, no claims
const floatingChips = ["TypeScript", "React", "Next.js", "Tailwind CSS"]
  .map((label, i) => ({ label, delay: `${i * 1.6}s` }))
  .slice(0, 3);

export function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full glow-violet blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -left-40 h-[26rem] w-[26rem] rounded-full glow-cyan blur-3xl"
      />

      <div className="grid items-center gap-14 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-sm text-muted-foreground">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            {profile.name}
            <span className="text-gradient">.</span>
          </h1>
          <p
            className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="text-gradient">{profile.role}</span>
          </p>
          <p
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.16s" }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-3 pt-1"
            style={{ animationDelay: "0.24s" }}
          >
            <Button size="lg" asChild>
              <Link href="#projects">
                View my work
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </Button>

            {/* 🚧 PLACEHOLDER: resume PDF — drop your CV at public/resume.pdf
                and set `resumeUrl` in src/data/profile.ts */}
            {profile.resumeUrl ? (
              <Button size="lg" variant="outline" asChild>
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
                    className="inline-flex h-12 cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-border bg-card/50 px-7 text-base font-medium text-muted-foreground"
                  >
                    Download CV
                    <DownloadIcon aria-hidden="true" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  Placeholder — add public/resume.pdf and set `resumeUrl` in
                  src/data/profile.ts to enable this
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          <div
            className="animate-fade-up flex items-center gap-3 pt-1"
            style={{ animationDelay: "0.32s" }}
          >
            <SocialLinks links={profile.socials} />
          </div>
        </div>

        {/* Portrait with glow frame + floating tech chips */}
        <div
          className="relative mx-auto w-full max-w-[420px] animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[3rem] glow-violet blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-1.5 rounded-[2rem] opacity-80"
            style={{
              background:
                "linear-gradient(135deg, rgba(106,91,255,0.9), rgba(39,217,242,0.7))",
            }}
          />
          <Image
            src="/image.png"
            alt={`Professional portrait of ${profile.name}`}
            width={640}
            height={640}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
            className="relative aspect-square w-full rounded-[1.85rem] border border-border object-cover"
          />

          {floatingChips.map((chip, i) => (
            <span
              key={chip.label}
              aria-hidden="true"
              className={`absolute hidden animate-float items-center rounded-xl border border-border bg-card/90 px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-lg backdrop-blur-sm sm:flex ${
                i === 0
                  ? "top-10 -left-4"
                  : i === 1
                    ? "-right-3 bottom-28"
                    : "bottom-6 left-8"
              }`}
              style={{ animationDelay: chip.delay }}
            >
              {chip.label}
            </span>
          ))}

          <Badge
            variant="secondary"
            className="absolute top-4 right-4 bg-background/70 backdrop-blur-sm"
          >
            Portfolio
          </Badge>
        </div>
      </div>
    </Section>
  );
}
