import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Uniform heading block for every portfolio section:
 * mono eyebrow + gradient-accented title + optional description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-3.5",
        align === "center" && "mx-auto items-center text-center",
      )}
    >
      <span className="font-mono text-sm font-medium tracking-widest text-primary uppercase">
        {"// "}
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
