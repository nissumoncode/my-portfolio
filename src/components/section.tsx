import type { ReactNode } from "react";

/**
 * Shared section wrapper: uniform rhythm + sticky-navbar-safe anchor target.
 * Server component.
 */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-16 sm:py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
