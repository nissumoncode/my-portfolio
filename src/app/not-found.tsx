import Link from "next/link";
import { CompassIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 py-32 text-center sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full glow-violet blur-3xl"
      />
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg shadow-primary/10">
        <CompassIcon aria-hidden="true" className="size-8" />
      </span>
      <p className="font-mono text-sm text-muted-foreground">
        404 — not found
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        This page <span className="text-gradient">doesn&apos;t exist</span>
      </h1>
      <p className="max-w-md leading-relaxed text-muted-foreground">
        The page or project you&apos;re looking for doesn&apos;t exist — maybe
        the link was mistyped, or the project was renamed.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
