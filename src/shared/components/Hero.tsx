import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { PROFILE } from "@/domain/profile";
import {
  ArrowRight,
  EnvelopeSimple,
  ArrowSquareOut,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section id="about" className="relative pt-8 sm:pt-14 pb-16 scroll-mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left / Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <MapPin size={14} className="text-foreground" />
                <span>Seville, Spain &middot; Remote Engineer</span>
              </div>
              <Typography.H1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {PROFILE.name}
              </Typography.H1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
                Senior Full Stack Engineer &middot;{" "}
                <span className="text-muted-foreground font-normal">
                  TypeScript &amp; Node.js Specialist
                </span>
              </p>
            </div>

            {/* Core Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
              <p>
                Specialized in{" "}
                <strong className="text-foreground font-semibold">
                  TypeScript &amp; Node.js
                </strong>
                , distributed backend architecture, and developer-first build
                infrastructure.
              </p>
              <p>
                Currently at{" "}
                <strong className="text-foreground font-semibold">
                  Autodesk
                </strong>
                , driving technical build systems within the Fusion CI
                team—optimizing developer feedback loops, automated CI/CD
                pipelines, and multi-platform compilation environments for
                large-scale C++ and cloud codebases.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/85">
                With 13 years of engineering experience across enterprise
                software, high-scale growth products, and self-hosted
                infrastructure, I focus on systems that are verifiable,
                decoupled, and built for long-term reliability.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                href="#experience"
                rightIcon={<ArrowRight size={16} />}
              >
                View Experience
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                leftIcon={<EnvelopeSimple size={16} />}
              >
                Get in Touch
              </Button>
              <Button
                variant="ghost"
                href={PROFILE.socials.linkedin}
                external
                rightIcon={<ArrowSquareOut size={15} />}
              >
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                href={PROFILE.socials.github}
                external
                rightIcon={<ArrowSquareOut size={15} />}
              >
                GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: Clean Framed Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-lg transition-all duration-300 hover:border-border-highlight">
                {/* Image Frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/images/profile.webp"
                    alt={PROFILE.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-102"
                    priority
                  />
                </div>

                {/* Clean Subtitle Caption */}
                <div className="mt-3 px-1.5 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Autodesk</span>
                  <span>Seville, Spain (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
