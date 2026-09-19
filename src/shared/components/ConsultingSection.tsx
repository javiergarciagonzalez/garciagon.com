import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { TechBadge } from "./TechBadge";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn } from "./FadeIn";
import { CONSULTING_ENGAGEMENTS } from "@/domain/consulting";
import {
  Compass,
  ArrowSquareOut,
  MapPin,
  CalendarBlank,
} from "@phosphor-icons/react";

export function ConsultingSection() {
  return (
    <section
      id="consulting"
      className="scroll-mt-24 pt-16 pb-20 border-t border-border/60"
    >
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <FadeIn className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-muted text-foreground">
              <Compass size={16} />
            </span>
            <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              Freelance &amp; Technical Advisory
            </Typography.Subtle>
          </div>
          <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Consulting Engagements
          </Typography.H2>
          <Typography.Body tone="muted" className="text-base sm:text-lg">
            Advising engineering teams on cloud CI/CD automation, distributed
            data architectures, and specialized 3D BIM &amp; Digital Twin platforms.
          </Typography.Body>
        </FadeIn>

        {/* Engagements Spotlight Container */}
        <div className="space-y-6">
          {CONSULTING_ENGAGEMENTS.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <SpotlightCard className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Client, Role & Metadata (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-white p-1.5 shadow-2xs overflow-hidden mt-0.5">
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain rounded-sm"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={item.clientUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors group/link"
                        >
                          <span>{item.client}</span>
                          <ArrowSquareOut
                            size={16}
                            className="text-muted-foreground group-hover/link:text-foreground transition-colors shrink-0"
                          />
                        </a>
                      </div>
                      <p className="text-sm font-medium text-foreground/90 pt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border border-zinc-500/20">
                    <span>{item.engagementType}</span>
                  </div>

                  <p className="text-xs font-mono text-muted-foreground">
                    Scope: {item.scope}
                  </p>

                  <div className="pt-1 flex flex-col gap-1 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarBlank size={12} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {item.location} &middot; {item.workMode}
                    </span>
                  </div>
                </div>

                {/* Right Column: Narrative, Key Deliverables & Stack (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  {/* Summary */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                    {item.summary}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-3 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-foreground/70 block">
                      Key Deliverables &amp; Consulting Impact:
                    </span>
                    <ul className="space-y-3 text-xs sm:text-sm text-foreground/85 leading-relaxed font-sans">
                      {item.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-muted-foreground select-none mt-0.5 font-mono text-xs">
                            &mdash;
                          </span>
                          <div>
                            <strong className="text-foreground font-semibold">
                              {d.title}:
                            </strong>{" "}
                            <span className="text-muted-foreground">
                              {d.description}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Tags */}
                  <div className="pt-3 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
                      Stack:
                    </span>
                    {item.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
        </div>
      </Container>
    </section>
  );
}
