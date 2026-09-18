import * as React from "react";
import { findTechDefinition } from "@/domain/tech-icons";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface TechBadgeProps {
  name: string;
  highlight?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function TechBadge({
  name,
  highlight,
  className,
  size = "md",
}: TechBadgeProps) {
  const tech = findTechDefinition(name);

  return (
    <span
      className={cn(
        "group/tag inline-flex items-center rounded-md font-mono border border-border/60 transition-all duration-200 hover:border-border-highlight hover:bg-surface hover:-translate-y-0.5",
        size === "sm" ? "px-2 py-0.5 text-xs gap-1.5" : "px-2.5 py-1 text-xs gap-2",
        "bg-muted/60 text-foreground/90",
        className
      )}
    >
      {tech ? (
        <svg
          role="img"
          viewBox={tech.viewBox || "0 0 24 24"}
          className={cn(
            "shrink-0 transition-colors duration-200 fill-current text-muted-foreground group-hover/tag:text-[var(--hover-color)]",
            size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"
          )}
          style={{ "--hover-color": tech.color } as React.CSSProperties}
          aria-hidden="true"
        >
          <path d={tech.path} />
        </svg>
      ) : highlight ? (
        <span
          className={cn(
            "rounded-full bg-foreground/60 shrink-0",
            size === "sm" ? "h-1 w-1" : "h-1.5 w-1.5"
          )}
        />
      ) : null}
      <span className="leading-none">{name}</span>
    </span>
  );
}
