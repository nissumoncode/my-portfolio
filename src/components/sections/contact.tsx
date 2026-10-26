import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full glow-violet blur-3xl"
      />

      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s work <span className="text-gradient">together</span>
          </>
        }
        description="The fastest way to reach me is by email — or connect with me on any platform below."
        align="center"
      />

      <div className="flex flex-col items-center gap-8">
        {/* Email — a real action, wired to mailto: */}
        <Button size="lg" className="h-13 px-8 text-base" asChild>
          <a href={`mailto:${profile.email}`}>
            <MailIcon aria-hidden="true" />
            Say hello at {profile.email}
          </a>
        </Button>

        <SocialLinks
          links={profile.socials.filter(
            (social) => social.label.toLowerCase() !== "whatsapp",
          )}
          className="[&>a]:h-10 [&>a]:w-10"
        />

        {/* Phone / WhatsApp support — shown only when real numbers exist.
            🚧 Both are null in src/data/profile.ts, so they render as
            clearly labeled placeholders (no fake dialable links). */}
        <Card className="w-full max-w-md border-border/70 bg-card/80 py-6 shadow-lg backdrop-blur-sm">
          <CardContent className="space-y-3">
            <p className="text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Direct Contact
            </p>
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {profile.phone ? (
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                    <PhoneIcon aria-hidden="true" />
                    {profile.phone}
                  </a>
                </Button>
              ) : (
                <Badge variant="coming" className="gap-1.5 px-3 py-1.5">
                  <PhoneIcon aria-hidden="true" className="size-3.5" />
                  Phone — not configured yet
                </Badge>
              )}
              {profile.whatsapp ? (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircleIcon aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
              ) : (
                <Badge variant="coming" className="gap-1.5 px-3 py-1.5">
                  <MessageCircleIcon aria-hidden="true" className="size-3.5" />
                  WhatsApp — not configured yet
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
