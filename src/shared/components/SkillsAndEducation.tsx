"use client";

import * as React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Badge } from "./Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card";
import {
  SKILL_CATEGORIES,
  EDUCATION_HISTORY,
  type SkillCategory,
} from "@/domain/skills";
import {
  Wrench,
  GraduationCap,
  Stack,
  ShieldCheck,
  CheckCircle,
  MapPin,
  CalendarBlank,
} from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function SkillsAndEducation() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const displayedCategories = React.useMemo(() => {
    if (activeCategory === "all") return SKILL_CATEGORIES;
    return SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="scroll-mt-24 pt-20 pb-24 border-t border-border/60">
      <Container size="xl" className="space-y-20">
        {/* ================================================================= */}
        {/* 1. TECHNICAL ARSENAL & ARCHITECTURAL COMPETENCIES                 */}
        {/* ================================================================= */}
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-muted text-foreground">
                  <Wrench size={16} />
                </span>
                <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
                  Core Competencies &amp; Tooling
                </Typography.Subtle>
              </div>
              <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Technical Arsenal &amp; Architecture
              </Typography.H2>
              <Typography.Body tone="muted" className="text-base sm:text-lg">
                Engineered with deep focus on clean architecture, strict type safety, predictable testing, and high-concurrency cloud infrastructure.
              </Typography.Body>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface p-1 shadow-xs self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer",
                  activeCategory === "all"
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                All Focus Areas
              </button>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer hidden sm:inline-block",
                    activeCategory === cat.id
                      ? "bg-foreground text-background font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat.name.split(" & ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedCategories.map((cat: SkillCategory, idx: number) => (
              <Card
                key={cat.id}
                interactive
                className="bg-surface/60 backdrop-blur-sm border-border hover:border-border-highlight transition-all duration-300"
              >
                <CardHeader className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-muted text-foreground">
                        <Stack size={18} />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        Domain 0{idx + 1}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      Senior Proficiency
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{cat.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {cat.headline}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border",
                          skill.highlight
                            ? "bg-muted text-foreground border-foreground/20 font-semibold shadow-2xs"
                            : "bg-surface/80 text-muted-foreground border-border hover:text-foreground"
                        )}
                      >
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. ACADEMIC CREDENTIALS & FORMAL EDUCATION                        */}
        {/* ================================================================= */}
        <div className="space-y-10 pt-12 border-t border-border/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-muted text-foreground">
                  <GraduationCap size={16} />
                </span>
                <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
                  Academic Foundation
                </Typography.Subtle>
              </div>
              <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Education &amp; Credentials
              </Typography.H2>
              <Typography.Body tone="muted" className="text-sm sm:text-base">
                Formally educated with a Master of Science in Cloud Apps and a 5-year Software Engineering degree from Madrid&rsquo;s leading engineering university.
              </Typography.Body>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Verified Degrees &middot; Madrid (Spain)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EDUCATION_HISTORY.map((edu) => (
              <Card
                key={edu.id}
                interactive
                className="flex flex-col justify-between bg-surface/50 border-border hover:border-border-highlight transition-all duration-200"
              >
                <div>
                  <CardHeader className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="dot" dotColor="blue" className="text-[11px]">
                        {edu.highlight}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground inline-flex items-center gap-1">
                        <CalendarBlank size={12} />
                        {edu.period}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{edu.degree}</CardTitle>
                    <p className="text-sm font-medium text-foreground/90 mt-0.5">
                      {edu.field}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground mt-2">
                      <MapPin size={12} />
                      <span>{edu.institution} &middot; {edu.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                    Curriculum Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
                      >
                        <CheckCircle size={11} className="text-foreground/60" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
