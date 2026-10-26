"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const sectionIds = links.map((l) => l.href.slice(1));

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  // Scroll-aware navbar surface
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view (home page only)
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-background",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        {/* Brand */}
        <Link
          href="#home"
          className="rounded-md text-lg font-bold tracking-tight focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:outline-none"
        >
          {profile.name}
          <span className="text-gradient"></span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 text-sm md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const active = isHome && activeId === id;
            return (
              <li key={l.href}>
                <Link
                  href={hrefFor(l.href)}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:outline-none",
                    active
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(93deg, var(--brand-violet), var(--brand-cyan))",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          {/* Mobile navigation drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Open navigation menu"
                className="md:hidden"
              >
                <MenuIcon aria-hidden="true" className="size-[18px]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  {profile.name}
                  <span className="text-gradient">.</span>
                </SheetTitle>
                <SheetDescription>{profile.role} portfolio</SheetDescription>
              </SheetHeader>
              <Separator />
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {links.map((l) => {
                  const id = l.href.slice(1);
                  const active = isHome && activeId === id;
                  return (
                    <SheetClose asChild key={l.href}>
                      <Link
                        href={hrefFor(l.href)}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:outline-none",
                          active
                            ? "font-medium text-primary"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <SheetFooter>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Connect with me
                  </p>
                  <SocialLinks links={profile.socials} />
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
