"use client";

import * as React from "react";
import Image from "next/image";
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
  HardDrives,
  Cpu,
  Terminal,
} from "@phosphor-icons/react";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24 border-t border-border/60">
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
            Projects
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
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          {/* Project Icon or Logo */}
                          {project.logo ? (
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-white p-1 shrink-0 shadow-2xs">
                              <Image
                                src={project.logo}
                                alt={`${project.title} logo`}
                                width={24}
                                height={24}
                                className="h-6 w-6 object-contain"
                              />
                            </div>
                          ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-surface text-sky-500 shrink-0 shadow-2xs">
                              {project.iconName === "HardDrives" ? (
                                <HardDrives size={18} />
                              ) : project.iconName === "Cpu" ? (
                                <Cpu size={18} />
                              ) : (
                                <Terminal size={18} />
                              )}
                            </div>
                          )}

                          <h3 className="text-2xl font-bold tracking-tight text-foreground">
                            {project.title}
                          </h3>

                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-mono bg-muted/60 text-muted-foreground border border-border/60">
                            {project.status === "Live" && (
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                            )}
                            {project.status === "Self-Hosted" && (
                              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_6px_rgba(14,165,233,0.6)]" />
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
                          {project.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 shrink-0 mt-2" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-border/60 space-y-2.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-foreground/70 block">
                          Architectural Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <TechBadge key={tag} name={tag} size="sm" />
                          ))}
                        </div>
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
