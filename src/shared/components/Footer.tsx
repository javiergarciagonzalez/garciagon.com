import * as React from "react";
import { Container } from "./Container";
import { PROFILE } from "@/domain/profile";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/60 py-10 transition-colors duration-200">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Colophon & Identity */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {PROFILE.name}
              </span>
              <span className="text-xs text-muted-foreground/60 font-mono">
                &middot;
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {PROFILE.title}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              &copy; {currentYear} &middot; Seville, Spain
            </p>
          </div>

          {/* Actions & Outbound Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="py-1 hover:text-foreground focus-visible:outline-none focus-visible:underline transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="py-1 hover:text-foreground focus-visible:outline-none focus-visible:underline transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send Email"
              className="py-1 hover:text-foreground focus-visible:outline-none focus-visible:underline transition-colors"
            >
              Email
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 py-1 hover:text-foreground focus-visible:outline-none focus-visible:underline transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp
                size={12}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
