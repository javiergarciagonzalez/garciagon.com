import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Typography = {
  H1: ({ className, as: Component = "h1", children, ...props }: TypographyProps) => (
    <Component
      className={cn(
        "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),

  H2: ({ className, as: Component = "h2", children, ...props }: TypographyProps) => (
    <Component
      className={cn(
        "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),

  H3: ({ className, as: Component = "h3", children, ...props }: TypographyProps) => (
    <Component
      className={cn(
        "text-lg sm:text-xl font-medium tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),

  Lead: ({ className, as: Component = "p", children, ...props }: TypographyProps) => (
    <Component
      className={cn(
        "text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),

  Body: ({
    className,
    as: Component = "p",
    tone = "default",
    children,
    ...props
  }: TypographyProps & { tone?: "default" | "muted" }) => (
    <Component
      className={cn(
        "text-sm sm:text-base leading-relaxed",
        tone === "default" ? "text-foreground" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),

  Subtle: ({ className, as: Component = "span", children, ...props }: TypographyProps) => (
    <Component
      className={cn("text-xs text-muted-foreground tracking-wide font-normal", className)}
      {...props}
    >
      {children}
    </Component>
  ),

  Code: ({ className, as: Component = "code", children, ...props }: TypographyProps) => (
    <Component
      className={cn(
        "font-mono text-xs px-1.5 py-0.5 rounded bg-muted text-foreground border border-border",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  ),
};
