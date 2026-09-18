"use client";

import * as React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card";
import { PROJECTS, type ProjectItem } from "@/domain/projects";
import {
  FolderSimple,
  ArrowSquareOut,
  ArrowRight,
  HardDrives,
  CheckCircle,
  Broadcast,
} from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 pt-20 pb-24 border-t border-border/60">
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-muted text-foreground">
                <FolderSimple size={16} />
              </span>
              <Typography.Subtle className="font-mono uppercase tracking-widest text-[11px] text-muted-foreground">
                Solo Engineering Work
              </Typography.Subtle>
            </div>
            <Typography.H2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Side projects
            </Typography.H2>
            <Typography.Body tone="muted" className="text-base sm:text-lg">
              Independent systems, production web applications, and self-hosted infrastructure built with engineering rigor.
            </Typography.Body>
          </div>

          <Badge variant="outline" className="font-mono text-xs self-start sm:self-end">
            2 Featured Projects
          </Badge>
        </div>

        {/* Projects Grid: Exactly 2 real projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project: ProjectItem) => {
            const isRamenTask = project.id === "ramentask";
            const isHomeLab = project.id === "home-lab";

            return (
              <Card
                key={project.id}
                glow={project.featured}
                className={cn(
                  "flex flex-col justify-between transition-all duration-300 bg-surface/70 backdrop-blur-sm border-border hover:border-border-highlight p-6 sm:p-8",
                  project.featured && "ring-1 ring-border/80"
                )}
              >
                <div>
                  <CardHeader className="mb-4 p-0">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        {isHomeLab ? (
                          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            <HardDrives size={20} />
                          </div>
                        ) : isRamenTask ? (
                          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Broadcast size={20} />
                          </div>
                        ) : null}
                        <Badge variant="outline" className="text-[11px] font-mono">
                          {project.badge}
                        </Badge>
                      </div>

                      <Badge
                        variant={project.status === "Live" ? "dot" : "outline"}
                        dotColor="green"
                        className="text-[11px]"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm font-medium text-foreground/85 mt-1">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 p-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bulleted Architecture Highlights */}
                    <div className="space-y-2 pt-3 border-t border-border/50">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                        Key Engineering Highlights:
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                          >
                            <span className="mt-1 shrink-0 text-emerald-500">
                              <CheckCircle size={14} weight="fill" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                {/* Card Footer: Tech tags and Showcase buttons */}
                <div className="pt-6 mt-6 border-t border-border/50 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded bg-muted/60 px-2 py-0.5 text-[11px] font-mono text-foreground/80 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.showcaseUrl}
                      rightIcon={<ArrowRight size={14} />}
                    >
                      View Showcase &amp; Architecture
                    </Button>

                    {project.externalLink && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.externalLink}
                        external
                        rightIcon={<ArrowSquareOut size={14} />}
                      >
                        Visit Website
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
