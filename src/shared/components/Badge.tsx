import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "dot";
  dotColor?: "green" | "blue" | "amber" | "zinc";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", dotColor = "green", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors";

    const variantStyles = {
      default: "bg-surface text-foreground border border-border",
      outline: "bg-transparent text-muted-foreground border border-border",
      accent: "bg-foreground text-background font-semibold",
      dot: "bg-surface text-foreground border border-border pl-2",
    };

    const dotColors = {
      green: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
      blue: "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]",
      amber: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
      zinc: "bg-zinc-400",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {variant === "dot" && (
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                dotColors[dotColor]
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full h-1.5 w-1.5",
                dotColors[dotColor]
              )}
            />
          </span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
