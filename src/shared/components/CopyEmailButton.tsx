"use client";

import * as React from "react";
import { Check, Copy, EnvelopeSimple } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PROFILE } from "@/domain/profile";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface CopyEmailButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIconOnly?: boolean;
}

export function CopyEmailButton({
  variant = "primary",
  size = "md",
  className,
  showIconOnly = false,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground cursor-pointer select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-foreground text-background hover:opacity-90 shadow-sm border border-foreground/10",
    secondary:
      "bg-surface text-foreground hover:bg-surface-hover border border-border shadow-xs",
    outline:
      "bg-transparent text-foreground hover:bg-surface-hover border border-border",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied to clipboard" : `Copy email address ${PROFILE.email}`}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {copied ? (
        <>
          <Check
            size={size === "sm" ? 14 : 18}
            weight="bold"
            className="text-emerald-500 shrink-0 animate-in zoom-in duration-200"
          />
          {!showIconOnly && (
            <span className="font-mono text-emerald-500 font-semibold animate-in fade-in duration-200">
              Copied to Clipboard!
            </span>
          )}
        </>
      ) : (
        <>
          <EnvelopeSimple size={size === "sm" ? 14 : 18} className="shrink-0" />
          {!showIconOnly && <span>{PROFILE.email}</span>}
          <span className="opacity-60 text-xs pl-0.5">
            <Copy size={size === "sm" ? 12 : 14} />
          </span>
        </>
      )}
    </button>
  );
}
