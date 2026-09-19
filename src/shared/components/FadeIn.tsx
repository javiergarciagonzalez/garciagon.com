"use client";

import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  id?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 600,
  id,
  style,
  ...props
}: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getDirectionClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-5 opacity-0";
      case "down":
        return "-translate-y-5 opacity-0";
      case "left":
        return "translate-x-5 opacity-0";
      case "right":
        return "-translate-x-5 opacity-0";
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay * 1000}ms`,
        ...style,
      }}
      className={cn(
        "transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]",
        getDirectionClass(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function FadeInStagger({
  children,
  className,
  id,
  ...props
}: {
  children: React.ReactNode;
  faster?: boolean;
  className?: string;
  id?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div id={id} className={className} {...props}>
      {children}
    </div>
  );
}
