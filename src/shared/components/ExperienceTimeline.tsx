"use client";

import * as React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Badge } from "./Badge";
import { EXPERIENCES } from "@/domain/experience";
import {
  Briefcase,
  GitBranch,
  Terminal,
  MapPin,
  CheckCircle,
  Eye,
} from "@phosphor-icons/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function ExperienceTimeline() {
  const [viewMode, setViewMode] = React.useState<"story" | "git">("story");
  const [activeId, setActiveId] = React.useState<string>("autodesk");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [cardTabs, setCardTabs] = React.useState<Record<string, "impact" | "stack" | "terminal">>({
    autodesk: "impact",
    typeform: "impact",
    schiphol: "impact",
  });

  const timelineContainerRef = React.useRef<HTMLDivElement>(null);

  // Scroll progress for the laser line
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const categories = ["All", "Enterprise", "Product & Growth", "Aviation & Systems"];

  const filteredExperiences = React.useMemo(() => {
    if (selectedCategory === "All") return EXPERIENCES;
    return EXPERIENCES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleTabChange = (roleId: string, tab: "impact" | "stack" | "terminal") => {
    setCardTabs((prev) => ({ ...prev, [roleId]: tab }));
  };

  return (
    <section
      id="experience"
      ref={timelineContainerRef}
      className="scroll-mt-24 pt-20 pb-24 border-t border-border/60 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/5 via-sky-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <Container size="xl" className="relative space-y-12">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-muted text-foreground">
                <Briefcase size={16} />
              </span>
              <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
                13 Years Proven Engineering Leadership
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Work Experience
            </Typography.H2>
            <Typography.Body tone="muted" className="text-base sm:text-lg">
              From high-concurrency CI/CD for C++ at Autodesk to airport kiosk fleets and growth micro-services.
            </Typography.Body>
          </div>

          {/* Controls: Mode Switcher & Category Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher: Storyline vs Git Graph */}
            <div className="inline-flex rounded-xl border border-border bg-surface p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("story")}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer",
                  viewMode === "story"
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Eye size={14} />
                <span>Interactive Timeline</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("git")}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer",
                  viewMode === "git"
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <GitBranch size={14} />
                <span>Git Graph</span>
              </button>
            </div>

            {/* Category Filter Pills (when in Story Mode) */}
            {viewMode === "story" && (
              <div className="hidden sm:inline-flex rounded-xl border border-border bg-surface/80 p-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer",
                      selectedCategory === cat
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: GIT GRAPH MODE ("WOW" FACTOR FOR ENGINEERS)           */}
        {/* ------------------------------------------------------------- */}
        {viewMode === "git" ? (
          <div className="rounded-2xl border border-border bg-[#0d1117] text-zinc-300 p-6 sm:p-8 font-mono shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <Terminal size={16} className="text-emerald-400" />
                <span>git log --graph --all --decorate --stat</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-zinc-500">
                <span>Branch: <span className="text-zinc-300">career/main</span></span>
                <span>Author: <span className="text-zinc-300">Javier Garcia Gonzalez</span></span>
              </div>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => {
                const commitHash = `c8f${idx}9${exp.startYear.toString().slice(2)}`;
                const isHead = exp.endYear === "Present";
                return (
                  <div
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={cn(
                      "group rounded-xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer",
                      activeId === exp.id
                        ? "border-emerald-500/80 bg-zinc-900/90 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">* commit {commitHash}</span>
                        {isHead && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                            HEAD -&gt; current
                          </span>
                        )}
                        <span className="text-zinc-400 text-[11px]">({exp.period})</span>
                      </div>
                      <span className="text-zinc-500 text-[11px]">{exp.location}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {exp.role} @ {exp.company}
                        </h4>
                        {exp.teamOrScope && (
                          <span className="text-xs text-zinc-400 font-mono">[{exp.teamOrScope}]</span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {exp.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-3 mt-3 border-t border-zinc-800/60">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ------------------------------------------------------------- */
          /* VIEW 2: INTERACTIVE STORYLINE WITH LASER PROGRESS BEAM        */
          /* ------------------------------------------------------------- */
          <div className="space-y-12">
            {/* Quick Interactive Era Bar */}
            <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md py-3 border-y border-border/80">
              <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-none">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mr-1">
                    Era:
                  </span>
                  {EXPERIENCES.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => {
                        setActiveId(exp.id);
                        document.getElementById(`role-${exp.id}`)?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border cursor-pointer shrink-0",
                        activeId === exp.id
                          ? "border-foreground bg-foreground text-background font-semibold shadow-xs"
                          : "border-border bg-surface text-muted-foreground hover:text-foreground hover:border-border-highlight"
                      )}
                    >
                      <span>{exp.company}</span>
                      <span className="text-[10px] opacity-60">({exp.startYear})</span>
                    </button>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Interactive Deep Dive</span>
                </div>
              </div>
            </div>

            {/* Timeline Vertical Track with Laser Beam */}
            <div className="relative pl-8 sm:pl-12 lg:pl-16 space-y-12">
              {/* Static Background Rail */}
              <div className="absolute left-3.5 sm:left-5 lg:left-7 top-4 bottom-4 w-0.5 bg-border" />

              {/* Dynamic Scroll Laser Progress Beam */}
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute left-3.5 sm:left-5 lg:left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              />

              {filteredExperiences.map((exp, idx) => {
                const isCurrent = exp.endYear === "Present";
                const isSelected = activeId === exp.id;
                const currentTab = cardTabs[exp.id] || "impact";

                return (
                  <div
                    key={exp.id}
                    id={`role-${exp.id}`}
                    onMouseEnter={() => setActiveId(exp.id)}
                    className="relative scroll-mt-36 transition-all duration-300 group"
                  >
                    {/* Glowing Milestone Node */}
                    <div
                      className={cn(
                        "absolute -left-8 sm:-left-12 lg:-left-16 top-6 flex items-center justify-center -translate-x-1/2 rounded-full transition-all duration-300 bg-background z-10",
                        isSelected || isCurrent
                          ? "h-7 w-7 border-2 border-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.5)]"
                          : "h-5 w-5 border border-border group-hover:border-foreground"
                      )}
                    >
                      {isCurrent ? (
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                      ) : (
                        <span
                          className={cn(
                            "h-2 w-2 rounded-full transition-colors",
                            isSelected ? "bg-emerald-500" : "bg-muted-foreground/50 group-hover:bg-foreground"
                          )}
                        />
                      )}
                    </div>

                    {/* Rich Interactive Experience Card */}
                    <div
                      className={cn(
                        "relative rounded-2xl border bg-surface/70 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 shadow-sm overflow-hidden",
                        isSelected
                          ? "border-border-highlight bg-surface shadow-xl ring-1 ring-border-highlight -translate-y-0.5"
                          : "border-border hover:border-border-highlight hover:bg-surface/90"
                      )}
                    >
                      {/* Subtle Corner Year Tag */}
                      <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl border-l border-b border-border/80 bg-muted/40 font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </div>

                      {/* Top Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pr-16 sm:pr-24">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                            <h3 className="text-2xl font-bold tracking-tight text-foreground">
                              {exp.company}
                            </h3>
                            {isCurrent && (
                              <Badge variant="dot" dotColor="green">
                                Current
                              </Badge>
                            )}
                            {exp.teamOrScope && (
                              <Badge variant="default" className="text-xs font-mono">
                                {exp.teamOrScope}
                              </Badge>
                            )}
                          </div>
                          <p className="text-base font-semibold text-foreground/90">
                            {exp.role}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground sm:text-right">
                          <MapPin size={14} />
                          <span>{exp.location} &middot; {exp.workMode}</span>
                        </div>
                      </div>

                      {/* Executive Summary */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-sans">
                        {exp.summary}
                      </p>

                      {/* Card Navigation Tabs: Impact vs Tech Stack vs Terminal Log */}
                      <div className="border-t border-border/60 pt-4">
                        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                          <div className="inline-flex rounded-lg border border-border bg-muted/40 p-0.5 text-xs font-mono">
                            <button
                              type="button"
                              onClick={() => handleTabChange(exp.id, "impact")}
                              className={cn(
                                "px-3 py-1 rounded-md transition-colors cursor-pointer",
                                currentTab === "impact"
                                  ? "bg-surface text-foreground font-semibold shadow-xs"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              Key Architecture
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTabChange(exp.id, "stack")}
                              className={cn(
                                "px-3 py-1 rounded-md transition-colors cursor-pointer",
                                currentTab === "stack"
                                  ? "bg-surface text-foreground font-semibold shadow-xs"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              Stack &amp; Infra
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTabChange(exp.id, "terminal")}
                              className={cn(
                                "px-3 py-1 rounded-md transition-colors cursor-pointer inline-flex items-center gap-1",
                                currentTab === "terminal"
                                  ? "bg-surface text-foreground font-semibold shadow-xs"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              <Terminal size={12} />
                              <span>Console Spec</span>
                            </button>
                          </div>

                          <span className="text-[11px] font-mono text-muted-foreground">
                            Role 0{idx + 1} / 0{filteredExperiences.length}
                          </span>
                        </div>

                        {/* Tab Content 1: Key Architecture & Impacts */}
                        {currentTab === "impact" && (
                          <ul className="space-y-2.5 animate-in fade-in duration-200">
                            {exp.impacts.map((impact, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                              >
                                <span className="mt-1 shrink-0 text-emerald-500">
                                  <CheckCircle size={15} weight="fill" />
                                </span>
                                <span>{impact}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tab Content 2: Stack & Infra Badges */}
                        {currentTab === "stack" && (
                          <div className="space-y-3 animate-in fade-in duration-200">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                              Technologies, Libraries &amp; Infrastructure Deployed:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-xs font-mono text-foreground border border-border"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tab Content 3: Terminal Console Spec */}
                        {currentTab === "terminal" && (
                          <div className="rounded-xl border border-border bg-[#090d13] p-4 font-mono text-xs text-zinc-300 space-y-2 animate-in fade-in duration-200">
                            <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-zinc-800 pb-2 mb-2">
                              <span>role.config.json</span>
                              <span>ID: {exp.id}</span>
                            </div>
                            <div className="space-y-1 text-emerald-400">
                              <p>$ profile.getExperience(&apos;{exp.id}&apos;)</p>
                            </div>
                            <pre className="text-zinc-300 text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
{JSON.stringify(
  {
    company: exp.company,
    role: exp.role,
    tenure: exp.period,
    team: exp.teamOrScope || "Core Engineering",
    category: exp.category,
    skills_count: exp.skills.length,
    status: isCurrent ? "Active (Autodesk Fusion CI)" : "Successfully Concluded",
  },
  null,
  2
)}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
