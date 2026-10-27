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
import profile from "@/data/profile.json";

const floatingChips = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
].map((label, i) => ({
  label,
  delay: `${i * 0.15}s`,
}));

export function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full glow-violet blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -left-40 h-[26rem] w-[26rem] rounded-full glow-cyan blur-3xl"
      />

      <div className="grid grid-cols-1 items-center gap-12 py-10 sm:gap-14 sm:py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Profile information */}
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-sm text-muted-foreground">
            Hi, my name is
          </p>

          <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {profile.name}
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

          {/* Action buttons */}
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
                  Placeholder — add public/resume.pdf and set resumeUrl in
                  src/data/profile.ts to enable this.
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          {/* Social links */}
          <div
            className="animate-fade-up flex items-center gap-3 pt-1"
            style={{ animationDelay: "0.32s" }}
          >
            <SocialLinks links={profile.socials} />
          </div>
        </div>

        {/* Responsive portrait with floating technology labels */}
        <div
          className="relative mx-auto w-full max-w-[280px] animate-fade-in sm:max-w-[340px] lg:max-w-[420px]"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Image with premium Purple Violet border */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-500 p-[3px] shadow-xl shadow-violet-500/25">
            <div className="overflow-hidden rounded-[calc(2rem-3px)] bg-black">
              <Image
                src="/image.png"
                alt={`Professional portrait of ${profile.name}`}
                width={640}
                height={640}
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Technology labels */}
          {floatingChips.map((chip, i) => {
            const positions = [
              "top-[10%] -left-4",
              "top-[18%] -right-4",
              "top-[42%] -left-5",
              "bottom-[22%] -right-4",
              "bottom-[8%] left-1/2 -translate-x-1/2",
            ];

            return (
              <span
                key={chip.label}
                aria-hidden="true"
                className={`absolute z-20 flex animate-float items-center rounded-full border border-violet-400/50 bg-violet-950 px-3 py-2 font-mono text-xs font-semibold text-white shadow-lg shadow-violet-500/30 backdrop-blur-md ${positions[i]}`}
                style={{ animationDelay: chip.delay }}
              >
                <span className="mr-1.5 text-violet-400">✦</span>
                {chip.label}
              </span>
            );
          })}

          {/* Portfolio badge */}
          <Badge
            variant="secondary"
            className="absolute right-0 top-0 z-20 border border-violet-400/30 bg-violet-950 text-violet-100"
          >
            Portfolio
          </Badge>
        </div>
      </div>
    </Section>
  );
}
