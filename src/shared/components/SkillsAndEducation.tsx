import * as React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { TechBadge } from "./TechBadge";
import {
  SKILL_CATEGORIES,
  EDUCATION_HISTORY,
  type SkillCategory,
} from "@/domain/skills";
import {
  Wrench,
  GraduationCap,
  MapPin,
  CalendarBlank,
} from "@phosphor-icons/react/dist/ssr";

export function SkillsAndEducation() {
  return (
    <section id="skills" className="scroll-mt-24 pt-16 pb-20 border-t border-border/60">
      <Container size="xl" className="space-y-20">
        {/* ================================================================= */}
        {/* 1. TECHNICAL ARSENAL & ARCHITECTURAL COMPETENCIES                 */}
        {/* ================================================================= */}
        <div className="space-y-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-muted text-foreground">
                <Wrench size={16} />
              </span>
              <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
                Competencies &amp; Tooling
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Technical Arsenal
            </Typography.H2>
            <Typography.Body tone="muted" className="text-base">
              Core competencies spanning scalable backend services, C++ CI automation, and browser performance.
            </Typography.Body>
          </div>

          {/* Clean 2-Column Editorial Grid (No Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {SKILL_CATEGORIES.map((cat: SkillCategory) => (
              <div
                key={cat.id}
                className="space-y-4 pb-8 border-b border-border/60 last:border-b-0 lg:last:border-b-0"
              >
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cat.headline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      highlight={skill.highlight}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. ACADEMIC CREDENTIALS & FORMAL EDUCATION (EDITORIAL RESUME)      */}
        {/* ================================================================= */}
        <div className="space-y-8 pt-12 border-t border-border/60">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-muted text-foreground">
                <GraduationCap size={16} />
              </span>
              <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
                Academic Background
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Education &amp; Credentials
            </Typography.H2>
            <Typography.Body tone="muted" className="text-sm sm:text-base">
              Formal software engineering education from Madrid&rsquo;s leading engineering institutions.
            </Typography.Body>
          </div>

          {/* Editorial Academic Ledger (Zero Pricing Cards, Zero Hype Pills) */}
          <div className="divide-y divide-border/60">
            {EDUCATION_HISTORY.map((edu) => (
              <article key={edu.id} className="py-8 first:pt-2 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Degree & University (5 cols) */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-foreground/85">
                      {edu.field}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {edu.institution}
                    </p>
                    <div className="pt-1 flex items-center gap-4 text-xs font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarBlank size={12} />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Description & Topics (7 cols) */}
                  <div className="lg:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center text-xs font-mono px-2 py-0.5 rounded bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
