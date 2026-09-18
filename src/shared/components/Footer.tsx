import * as React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PROFILE } from "@/domain/profile";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUp } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-surface/30 pt-12 pb-16 transition-colors duration-200">
      <Container size="xl">
        <div className="flex flex-col gap-10">
          {/* Top Row: Info and Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-base font-semibold tracking-tight text-foreground">
                {PROFILE.name}
              </span>
              <p className="text-xs text-muted-foreground font-mono">
                {PROFILE.title} &middot; {PROFILE.location}
              </p>
            </div>

            {/* Social / Contact Links */}
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-border-highlight hover:text-foreground"
              >
                <GithubLogo size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-border-highlight hover:text-foreground"
              >
                <LinkedinLogo size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send Email"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-border-highlight hover:text-foreground"
              >
                <EnvelopeSimple size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Subtle / Hidden Notes: Home Server & RamenTask */}
          <div className="rounded-lg border border-border/60 bg-muted/40 px-4 py-3 text-[11px] font-mono text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Served with Next.js SSG &middot; Tested in self-hosted home lab</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                Creator of{" "}
                <a
                  href="https://ramentask.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  ramentask.com
                </a>
              </span>
              <span>&middot;</span>
              <a
                href="#top"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp size={12} />
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
            <span>&copy; {currentYear} Javier García González. Clean Architecture & Solid Code.</span>
            <div className="flex items-center gap-4">
              <Link href="/#about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/#experience" className="hover:text-foreground transition-colors">Experience</Link>
              <Link href="/#projects" className="hover:text-foreground transition-colors">Projects</Link>
              <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
