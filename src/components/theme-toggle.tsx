"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Theme toggle WITHOUT client state:
 * - Uses setTheme(resolved → opposite) on the single next-themes system.
 * - Both icons are always rendered; CSS shows the right one for the active
 *   theme (.dark present or not). This is hydration-safe by construction —
 *   server and client markup are identical — so there is no mounted-flag
 *   state, no flash, and no hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className={className}
    >
      <SunIcon
        aria-hidden="true"
        className="hidden dark:block size-[18px]"
      />
      <MoonIcon
        aria-hidden="true"
        className="block dark:hidden size-[18px]"
      />
    </Button>
  );
}
