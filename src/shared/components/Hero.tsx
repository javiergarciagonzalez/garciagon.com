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
                I build high-throughput backend services, CI/CD build
                infrastructure, and reliable web applications with{" "}
                <strong className="text-foreground font-semibold">
                  TypeScript &amp; Node.js
                </strong>
                .
              </p>
              <p>
                Currently at{" "}
                <strong className="text-foreground font-semibold">
                  Autodesk
                </strong>
                , optimizing large-scale C++ build systems and CI pipelines for
                Fusion. Over the past 13 years, I&rsquo;ve engineered systems
                for enterprise platforms, airport digital solutions, and
                high-growth SaaS.
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

          {/* Right Column: Warm Circular Avatar with Ambient Halo & Live Status (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group">
              {/* Soft Ambient Halo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-foreground/10 via-foreground/5 to-transparent blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Circular Avatar Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-border/80 shadow-xl bg-muted">
                <Image
                  src="/images/profile.webp"
                  alt={PROFILE.name}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Live Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-3.5 py-1.5 shadow-md backdrop-blur-sm text-xs font-mono text-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Autodesk &middot; Fusion CI team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
