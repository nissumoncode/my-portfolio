import type { SocialLink } from "@/data/types/types";
import { Mail, LinkIcon } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function IconForLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  switch (label.toLowerCase()) {
    case "github":
      return <GitHubIcon className={className} />;
    case "x":
    case "twitter":
      return <FaXTwitter aria-hidden="true" className={className} />;
    case "whatsapp":
      return <FaWhatsapp aria-hidden="true" className={className} />;
    case "email":
    case "mail":
      return <Mail aria-hidden="true" className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    default:
      return <LinkIcon aria-hidden="true" className={className} />;
  }
}

/**
 * Social link list.
 * Real URLs → proper external links with safe attributes.
 * Placeholder URLs ("#") → *non-interactive* items labeled via tooltip,
 * so nothing on the page pretends to work when it doesn't.
 */
export function SocialLinks({
  links,
  className = "",
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-1.5", className)}>
      {links.map((social) => {
        // 🚧 PLACEHOLDER: "#" until a real profile URL is set in src/data/profile.ts
        const isPlaceholder = !social.url || social.url === "#";
        const external = isPlaceholder ? undefined : "_blank";
        const rel = isPlaceholder ? undefined : "noopener noreferrer";
        const href = isPlaceholder ? undefined : social.url;
        // Email placeholders keep a usable mailto action pointing at the
        // profile's (placeholder) email — the address itself is labeled.
        const fallback = social.label.toLowerCase().includes("mail")
          ? "mailto:hello@example.com"
          : undefined;

        const base = cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:outline-none",
          isPlaceholder
            ? "border-dashed cursor-help opacity-70"
            : "hover:border-primary/40 hover:text-primary hover:shadow-sm",
        );

        return (
          <li key={social.label}>
            <Tooltip>
              <TooltipTrigger
                aria-disabled={isPlaceholder ? "true" : undefined}
                asChild
              >
                {href ? (
                  <a
                    href={href}
                    target={external}
                    rel={rel}
                    aria-label={`${social.label} profile`}
                    className={base}
                  >
                    <IconForLabel label={social.label} className="size-4" />
                  </a>
                ) : (
                  <a
                    href={fallback}
                    aria-label={`Placeholder ${social.label} link — not configured yet`}
                    className={base}
                  >
                    <IconForLabel label={social.label} className="size-4" />
                  </a>
                )}
              </TooltipTrigger>
              {isPlaceholder && (
                <TooltipContent>
                  Placeholder — add the real {social.label} URL in
                  src/data/profile.ts
                </TooltipContent>
              )}
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
}
