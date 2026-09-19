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
  const [isHovered, setIsHovered] = React.useState(false);

  // Subtle brand tint & border glow on hover
  const hoverStyle: React.CSSProperties =
    tech && isHovered
      ? {
          borderColor: `${tech.color}40`,
          backgroundColor: `${tech.color}14`,
          boxShadow: `0 0 12px ${tech.color}20`,
        }
      : {};

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={hoverStyle}
      className={cn(
        "group/tag inline-flex items-center rounded-md font-mono border border-border/60 transition-all duration-200 hover:-translate-y-0.5",
        size === "sm" ? "px-2 py-0.5 text-xs gap-1.5" : "px-2.5 py-1 text-xs gap-2",
        !isHovered && "bg-muted/60 hover:bg-surface hover:border-border-highlight",
        "text-foreground/90 cursor-default select-none",
        className
      )}
    >
      {tech ? (
        <svg
          role="img"
          viewBox={tech.viewBox || "0 0 24 24"}
          className={cn(
            "shrink-0 transition-colors duration-200 fill-current",
            size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5",
            isHovered ? "text-[var(--brand-color)]" : "text-muted-foreground"
          )}
          style={{ "--brand-color": tech.color } as React.CSSProperties}
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
      <span
        className={cn(
          "leading-none transition-colors duration-200",
          isHovered ? "text-foreground" : "text-foreground/90"
        )}
      >
        {name}
      </span>
    </span>
  );
}
