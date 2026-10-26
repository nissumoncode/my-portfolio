import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";

import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-1">
            <p className="text-lg font-bold tracking-tight">
              {profile.name.split(" ")[0]}
              <span className="text-gradient">.</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {year} {profile.name}
              {" · "}
              Built with Next.js, Tailwind CSS &amp; shadcn/ui
            </p>
          </div>
          <SocialLinks links={profile.socials} />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded-full"
          >
            <Link href="#home">
              Back to top
              <ArrowUpIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <Separator className="my-6 opacity-60" />
        <p className="text-center text-xs text-muted-foreground">
          Some links and personal details on this site are clearly-labeled
          placeholders pending real content.
        </p>
      </div>
    </footer>
  );
}
