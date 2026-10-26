"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * THE one theme mechanism in this project (shadcn standard).
 * - `attribute="class"` → toggles `.dark` on <html>, matching the
 *   `@custom-variant dark` in globals.css.
 * - `defaultTheme="dark"` → the designed midnight-navy identity.
 * - next-themes injects its own pre-paint initialization script, so the
 *   persisted choice applies without flashing and without hydration errors
 *   (the `suppressHydrationWarning` on <html> absorbs the class attribute).
 */
export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
