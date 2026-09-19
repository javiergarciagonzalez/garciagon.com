"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";
import { PROFILE } from "@/domain/profile";
import {
  ArrowRight,
  EnvelopeSimple,
  ArrowSquareOut,
  MapPin,
  Code,
  User,
  Check,
  Copy,
} from "@phosphor-icons/react";

const SYSTEM_CONFIG_CODE = `// system.config.ts
export const engineer = {
  name: "Javier García González",
  role: "Senior Full Stack Engineer",
  roots: ["Frontend Craft", "UI Systems"],
  stack: {
    core: ["TypeScript", "React", "Node.js"],
    cloud: ["Azure Functions", "AKS", "Vault"],
    quality: ["Playwright", "CI/CD"],
    aiWorkflow: ["Claude Code", "Cursor AI"],
  },
  current: {
    company: "Autodesk",
    team: "Fusion CI",
    scope: "Internal platforms & tooling",
  },
} as const;`;

export function Hero() {
  const [viewMode, setViewMode] = React.useState<"portrait" | "config">("portrait");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SYSTEM_CONFIG_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-8 sm:pt-14 pb-16 scroll-mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left / Main Narrative Column (7 cols) */}
          <FadeIn duration={650} className="lg:col-span-7 space-y-8">
            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground px-2.5 py-1 rounded-full border border-border/80 bg-surface/50">
                <MapPin size={14} className="text-amber-500 shrink-0" />
                <span>Seville, Spain &middot; Remote Engineer</span>
              </div>
              <Typography.H1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {PROFILE.name}
              </Typography.H1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
                Senior Full Stack Engineer &middot;{" "}
                <span className="text-muted-foreground font-normal">
                  TypeScript, React &amp; Node.js
                </span>
              </p>
            </div>

            {/* Core Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
              <p>
                Rooted in frontend engineering and UI craftsmanship, I evolved into a
                full stack engineer building end-to-end web applications with{" "}
                <strong className="text-foreground font-semibold">
                  TypeScript, React, and Node.js
                </strong>
                . I bridge polished, accessible interfaces with resilient backend
                services and automated developer tooling.
              </p>
              <p>
                Currently at{" "}
                <strong className="text-foreground font-semibold">
                  Autodesk
                </strong>
                , I build full-stack internal platforms and developer tools that
                empower the Fusion CI team to manage and scale large-scale,
                multi-platform build infrastructure. Over the past 13 years,
                I&rsquo;ve delivered production systems for high-growth SaaS,
                airport digital kiosks, and client-side utilities.
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
          </FadeIn>

          {/* Right Column: Interactive Engineering Console with Fixed Viewport Anchor (5 cols) */}
          <FadeIn
            duration={750}
            delay={0.15}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] sm:max-w-[390px] flex flex-col items-center">
              {/* Fixed Top Tab Switcher */}
              <div
                role="tablist"
                aria-label="Profile view switcher"
                className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-surface/80 backdrop-blur-xs text-xs font-mono shadow-xs mb-4"
              >
                <button
                  role="tab"
                  type="button"
                  aria-selected={viewMode === "portrait"}
                  onClick={() => setViewMode("portrait")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground ${
                    viewMode === "portrait"
                      ? "bg-foreground text-background font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User size={13} />
                  <span>Portrait</span>
                </button>
                <button
                  role="tab"
                  type="button"
                  aria-selected={viewMode === "config"}
                  onClick={() => setViewMode("config")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground ${
                    viewMode === "config"
                      ? "bg-foreground text-background font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Code size={13} />
                  <span>system.config.ts</span>
                </button>
              </div>

              {/* Display Area: Rigid Fixed-Height Stage (h-[430px]) with smooth crossfade */}
              <div className="w-full h-[430px] relative">
                {/* 1. Portrait Layer */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out ${
                    viewMode === "portrait"
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={viewMode !== "portrait"}
                >
                  <div className="relative group flex flex-col items-center">
                    {/* Soft Ambient Halo */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-foreground/10 via-foreground/5 to-transparent blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Circular Avatar Container */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-2 ring-border/80 shadow-xl bg-muted">
                      <Image
                        src="/images/profile.webp"
                        alt={PROFILE.name}
                        fill
                        sizes="(max-width: 640px) 256px, 288px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Live Status Pill with Ambient Emerald Bloom */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="relative">
                        {/* Faint breathing emerald radial bloom */}
                        <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-md dark:bg-emerald-400/25 animate-pulse" />
                        <div className="relative inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-3.5 py-1.5 shadow-md backdrop-blur-sm text-xs font-mono text-foreground">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                          </span>
                          <span>Autodesk &middot; Fusion CI team</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Code Console Layer with Refined IDE Syntax Colors */}
                <div
                  className={`absolute inset-0 flex flex-col rounded-2xl border border-border bg-surface/95 shadow-xl backdrop-blur-md overflow-hidden font-mono text-xs transition-opacity duration-200 ease-out ${
                    viewMode === "config"
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={viewMode !== "config"}
                >
                  {/* Terminal / Editor Header Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border/80 bg-muted/40 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                      <span className="ml-1 text-xs text-muted-foreground font-medium">
                        system.config.ts
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopy}
                      aria-label="Copy configuration snippet"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-surface cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-500" />
                          <span className="text-emerald-500 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code Editor Body - Sublime/Tokyo Night Style Syntax Palette */}
                  <div className="p-4 text-xs leading-relaxed overflow-hidden text-muted-foreground select-text flex-1 flex flex-col justify-center bg-surface/50">
                    <pre className="font-mono">
                      <code>
                        <span className="text-muted-foreground/60 italic">{"// system.config.ts"}</span>
                        {"\n"}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">export const</span>{" "}
                        <span className="text-blue-600 dark:text-sky-400 font-medium">engineer</span> = &#123;
                        {"\n"}  <span className="text-foreground/90">name</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Javier García González&quot;</span>,
                        {"\n"}  <span className="text-foreground/90">role</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Sr. Full Stack Engineer&quot;</span>,
                        {"\n"}  <span className="text-foreground/90">roots</span>: [<span className="text-emerald-600 dark:text-emerald-400">&quot;Frontend Craft&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;UI Systems&quot;</span>],
                        {"\n"}  <span className="text-foreground/90">stack</span>: &#123;
                        {"\n"}    <span className="text-foreground/80">core</span>: [<span className="text-emerald-600 dark:text-emerald-400">&quot;TypeScript&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;React&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Node.js&quot;</span>],
                        {"\n"}    <span className="text-foreground/80">cloud</span>: [<span className="text-emerald-600 dark:text-emerald-400">&quot;Azure Functions&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;AKS&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Vault&quot;</span>],
                        {"\n"}    <span className="text-foreground/80">quality</span>: [<span className="text-emerald-600 dark:text-emerald-400">&quot;Playwright&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;CI/CD&quot;</span>],
                        {"\n"}    <span className="text-foreground/80">aiWorkflow</span>: [<span className="text-emerald-600 dark:text-emerald-400">&quot;Claude Code&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Cursor AI&quot;</span>],
                        {"\n"}  &#125;,
                        {"\n"}  <span className="text-foreground/90">current</span>: &#123;
                        {"\n"}    <span className="text-foreground/80">company</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Autodesk&quot;</span>,
                        {"\n"}    <span className="text-foreground/80">team</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Fusion CI&quot;</span>,
                        {"\n"}    <span className="text-foreground/80">scope</span>: <span className="text-emerald-600 dark:text-emerald-400">&quot;Internal platforms &amp; tooling&quot;</span>,
                        {"\n"}  &#125;,
                        {"\n"}&#125; <span className="text-purple-600 dark:text-purple-400 font-semibold">as const</span>;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
