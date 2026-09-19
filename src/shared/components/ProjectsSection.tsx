"use client";

import * as React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn } from "./FadeIn";
import { TechBadge } from "./TechBadge";
import { PROJECTS, type ProjectItem } from "@/domain/projects";
import {
  FolderSimple,
  ArrowSquareOut,
  ArrowRight,
} from "@phosphor-icons/react";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 pt-16 pb-20 border-t border-border/60">
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <FadeIn className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-muted text-foreground">
              <FolderSimple size={16} />
            </span>
            <Typography.Subtle className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              Independent Systems &amp; Labs
            </Typography.Subtle>
          </div>
          <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Side projects
          </Typography.H2>
          <Typography.Body tone="muted" className="text-base">
            Production web platforms and bare-metal infrastructure engineered outside of corporate responsibilities.
          </Typography.Body>
        </FadeIn>

        {/* Projects Spotlight Cards */}
        <div className="space-y-6">
          {PROJECTS.map((project: ProjectItem, index: number) => {
            return (
              <FadeIn key={project.id} delay={index * 0.1}>
                <SpotlightCard className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left Column: Title, Subtitle, Status & Actions (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-mono bg-muted/60 text-muted-foreground border border-border/60">
                          {project.status === "Live" && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          )}
                          {project.status}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-foreground/85 leading-snug">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.showcaseUrl}
                        rightIcon={<ArrowRight size={14} />}
                      >
                        Architecture Deep Dive
                      </Button>

                      {project.externalLink && (
                        <Button
                          variant="ghost"
                          size="sm"
                          href={project.externalLink}
                          external
                          rightIcon={<ArrowSquareOut size={14} />}
                        >
                          Visit Live
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights & Stack (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-foreground/70 block">
                        Core Technical Implementations:
                      </span>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed font-sans">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-muted-foreground select-none mt-0.5 font-mono text-xs">
                              &mdash;
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
                        Technologies:
                      </span>
                      {project.tags.map((tag) => (
                        <TechBadge key={tag} name={tag} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          );
        })}
        </div>
      </Container>
    </section>
  );
}
