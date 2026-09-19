import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { TechBadge } from "./TechBadge";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn } from "./FadeIn";
import { EXPERIENCES } from "@/domain/experience";
import {
  Briefcase,
  GitBranch,
  ListDashes,
  Terminal,
  MapPin,
} from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function ExperienceTimeline() {
  const [viewMode, setViewMode] = React.useState<"ledger" | "git">("ledger");
  const [activeCommitId, setActiveCommitId] = React.useState<string>("autodesk");

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 sm:py-24 border-t border-border/60"
    >
      <Container size="xl" className="space-y-12">
        {/* Section Header with View Switcher */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-muted text-foreground">
                <Briefcase size={16} />
              </span>
              <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
                Career History
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Experience
            </Typography.H2>
            <Typography.Body tone="muted" className="text-base">
              13 years of full-stack engineering, continuous integration, and distributed systems.
            </Typography.Body>
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-xl border border-border bg-surface p-1 shadow-2xs shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("ledger")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer",
                viewMode === "ledger"
                  ? "bg-foreground text-background font-semibold shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <ListDashes size={14} />
              <span>Chronological Ledger</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("git")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer",
                viewMode === "git"
                  ? "bg-foreground text-background font-semibold shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <GitBranch size={14} />
              <span>Git Graph</span>
            </button>
          </div>
        </FadeIn>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: EDITORIAL CHRONOLOGICAL LEDGER (NO CARDS)              */}
        {/* ------------------------------------------------------------- */}
        {viewMode === "ledger" ? (
          <div className="divide-y divide-border/60">
            {EXPERIENCES.map((exp, index) => {
              const isCurrent = exp.endYear === "Present";

              return (
                <FadeIn key={exp.id} delay={index * 0.06}>
                  <article
                    className="py-10 first:pt-2 last:pb-2 transition-colors group"
                  >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left Column: Metadata & Tenure (4 cols) */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="flex items-start gap-3.5">
                        {exp.logo && (
                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-white p-1.5 shadow-2xs overflow-hidden mt-0.5">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={40}
                              height={40}
                              className="h-full w-full object-contain rounded-sm"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                              {exp.company}
                            </span>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-foreground/90 pt-0.5">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {exp.teamOrScope && (
                        <p className="text-xs font-mono text-muted-foreground">
                          Scope: {exp.teamOrScope}
                        </p>
                      )}

                      <div className="pt-2 flex flex-col gap-1 text-xs font-mono text-muted-foreground">
                        <span>{exp.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location} &middot; {exp.workMode}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Mission, Key Impacts & Stack (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      {/* Summary */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                        {exp.summary}
                      </p>

                      {/* Measurable Impacts */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-foreground/70 block">
                          Key Deliverables &amp; Architectural Impact:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-foreground/85 leading-relaxed font-sans">
                          {exp.impacts.map((impact, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-muted-foreground select-none mt-0.5 font-mono text-xs">
                                &mdash;
                              </span>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stack Tags */}
                      <div className="pt-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
                          Stack:
                        </span>
                        {exp.skills.map((skill) => (
                          <TechBadge
                            key={skill}
                            name={skill}
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      ) : (
        /* ------------------------------------------------------------- */
        /* VIEW 2: MONOSPACE GIT GRAPH TERMINAL                          */
        /* ------------------------------------------------------------- */
        <FadeIn>
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.08)"
            borderColor="rgba(52, 211, 153, 0.3)"
            className="rounded-2xl border border-border bg-[#0d1117] text-zinc-300 p-6 sm:p-8 font-mono shadow-2xl space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <Terminal size={16} className="text-emerald-400" />
                <span>git log --graph --all --oneline</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>Branch: <span className="text-zinc-300">career/main</span></span>
                <span>Author: <span className="text-zinc-300">Javier Garcia Gonzalez</span></span>
              </div>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => {
                const commitHash = `c8f${idx}9${exp.startYear.toString().slice(2)}`;
                const isHead = exp.endYear === "Present";
                const isSelected = activeCommitId === exp.id;

                return (
                  <button
                    type="button"
                    key={exp.id}
                    onClick={() => setActiveCommitId(exp.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "w-full text-left rounded-xl p-4 transition-all duration-200 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                      isSelected
                        ? "border-emerald-500/80 bg-zinc-900/90 shadow-lg shadow-emerald-500/5"
                        : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-400 font-bold">*</span>
                        <span className="text-zinc-400 font-mono text-xs">{commitHash}</span>
                        <span className="font-semibold text-zinc-100">{exp.role}</span>
                        <span className="text-zinc-500">@</span>
                        <span className="text-emerald-300">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                        {isHead && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            HEAD
                          </span>
                        )}
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="mt-2 text-xs text-zinc-400 line-clamp-2 pl-4 border-l border-zinc-800">
                      {exp.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 pl-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-zinc-800 text-xs text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </SpotlightCard>
        </FadeIn>
      )}
      </Container>
    </section>
  );
}
