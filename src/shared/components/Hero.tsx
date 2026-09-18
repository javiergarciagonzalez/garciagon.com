import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { PROFILE, getExperienceTag } from "@/domain/profile";
import {
  ArrowRight,
  EnvelopeSimple,
  ArrowSquareOut,
  MapPin,
  Cpu,
  GitMerge,
  Code,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

const PILLARS = [
  {
    icon: Cpu,
    title: "Distributed Backend & Node.js",
    desc: "Robust micro-services, high-concurrency APIs, and event-driven architectures with strict type safety.",
  },
  {
    icon: GitMerge,
    title: "Build Systems & CI/CD",
    desc: "Optimizing developer feedback loops, automated build pipelines, and C++ cloud CI environments at Autodesk.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Architecture & SOLID",
    desc: "Separation of concerns, domain-driven patterns, and decoupled layers engineered for long-term maintainability.",
  },
  {
    icon: Code,
    title: "Full-Stack Craftsmanship",
    desc: "Mastery of web standards, browser rendering efficiency, and modern TypeScript ecosystems from UI to infra.",
  },
];

export function Hero() {
  return (
    <section id="about" className="relative pt-6 sm:pt-10 pb-16 scroll-mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Highlights */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="dot" dotColor="green">
                Sr. Full Stack Engineer @ Autodesk
              </Badge>
              <Badge variant="default">{getExperienceTag()}</Badge>
              <Badge variant="outline" className="hidden sm:inline-flex">
                Seville, Spain (Remote)
              </Badge>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <Typography.H1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {PROFILE.name}
              </Typography.H1>
              <p className="text-lg sm:text-xl font-medium text-foreground/90 tracking-tight">
                Senior Full Stack Engineer &middot;{" "}
                <span className="text-muted-foreground">TypeScript, Node.js &amp; CI Specialist</span>
              </p>
            </div>

            {/* Core Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                With over {getExperienceTag().replace(" Exp", "")} of engineering experience, I specialize in architecting scalable web services, resilient backend systems, and developer-first CI/CD infrastructure.
              </p>
              <p>
                Currently at <strong className="text-foreground font-semibold">Autodesk</strong>, I drive technical decision-making within the Fusion CI team, focusing on build system optimization and developer experience for C++ and cloud environments.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/90">
                My approach unites deep backend engineering with distributed systems knowledge, clean architecture principles, strict type safety, and verifiable system reliability.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                href="#experience"
                rightIcon={<ArrowRight size={16} />}
              >
                View Career Timeline
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                leftIcon={<EnvelopeSimple size={16} />}
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                href={PROFILE.socials.linkedin}
                external
                rightIcon={<ArrowSquareOut size={15} />}
              >
                LinkedIn
              </Button>
            </div>

            {/* Quick Metadata */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-foreground" />
                <span>{PROFILE.location} &middot; {PROFILE.workMode}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-500" />
                <span>MSc Cloud Apps &middot; BSc Software Eng</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Profile Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-border-highlight">
                {/* Image Frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/images/profile.webp"
                    alt={PROFILE.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                    priority
                  />
                  {/* Subtle Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Status Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-lg border border-border/80 bg-background/90 px-3 py-2 text-xs backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="font-mono font-medium text-foreground text-[11px]">
                        Fusion360 CI Team
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      Autodesk
                    </span>
                  </div>
                </div>

                {/* Card Subtitle Info */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Seville &middot; Amsterdam</span>
                  <Link href="#contact" className="hover:text-foreground transition-colors underline-offset-2 hover:underline">
                    javier@garciagon.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Competencies / Pillars Grid */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-border/60">
          <div className="mb-6 flex items-center justify-between">
            <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px]">
              Core Engineering Focus
            </Typography.Subtle>
            <span className="text-[11px] font-mono text-muted-foreground">
              Architecture &middot; Reliability &middot; Scale
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-xl border border-border bg-surface/50 p-5 transition-all duration-200 hover:border-border-highlight hover:bg-surface hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
