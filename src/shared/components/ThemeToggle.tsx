"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Desktop } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const emptySubscribe = () => () => {};

function useIsMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex items-center p-0.5 rounded-full border border-border bg-surface text-muted-foreground w-[88px] h-[30px]",
          className
        )}
      />
    );
  }

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Desktop, label: "System" },
  ] as const;

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className={cn(
        "inline-flex items-center p-0.5 rounded-full border border-border bg-surface text-muted-foreground shadow-xs",
        className
      )}
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            aria-label={`Switch to ${opt.label} theme`}
            title={`Switch to ${opt.label} theme`}
            className={cn(
              "flex items-center justify-center p-1.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground",
              isActive
                ? "bg-foreground text-background shadow-xs font-semibold scale-105"
                : "hover:text-foreground text-muted-foreground"
            )}
          >
            <Icon size={14} weight={isActive ? "fill" : "regular"} />
          </button>
        );
      })}
    </div>
  );
}
