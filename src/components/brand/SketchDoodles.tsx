"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn SVG wavy underline
 */
export const SketchUnderline: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = "#2D2D2D",
}) => (
  <svg
    viewBox="0 0 240 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-full h-3 md:h-4 overflow-visible pointer-events-none", className)}
    aria-hidden="true"
  >
    <path
      d="M 3 10 C 35 15, 65 6, 105 11 C 145 16, 185 7, 237 9"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="sketch-path"
    />
    <path
      d="M 12 13 C 50 16, 95 9, 140 13 C 180 16, 215 11, 230 12"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

/**
 * Hand-drawn imperfect graphite circle for highlighting words
 */
export const SketchCircle: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ children, className, color = "#2D2D2D" }) => (
  <span className={cn("relative inline-block px-2.5 py-0.5", className)}>
    <span className="relative z-10">{children}</span>
    <svg
      viewBox="0 0 160 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full -top-1 -left-1 pointer-events-none overflow-visible"
      aria-hidden="true"
    >
      <path
        d="M 14 30 C 14 10, 45 4, 85 4 C 125 4, 154 12, 152 32 C 150 48, 115 56, 75 56 C 30 56, 8 46, 12 28 C 14 20, 24 16, 38 12"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  </span>
);

/**
 * Hand-drawn arrow with multiple directional curves
 */
export const SketchArrow: React.FC<{
  direction?: "curved-down-right" | "curved-up-right" | "loop" | "straight-right";
  className?: string;
  color?: string;
}> = ({ direction = "curved-down-right", className, color = "#2D2D2D" }) => {
  if (direction === "curved-up-right") {
    return (
      <svg
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-16 h-10 overflow-visible pointer-events-none", className)}
        aria-hidden="true"
      >
        <path
          d="M 6 44 C 20 42, 45 35, 65 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 52 12 L 67 12 L 67 27"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "loop") {
    return (
      <svg
        viewBox="0 0 90 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-20 h-14 overflow-visible pointer-events-none", className)}
        aria-hidden="true"
      >
        <path
          d="M 8 50 C 35 15, 60 15, 55 45 C 50 65, 30 55, 38 35 C 45 15, 75 25, 82 48"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 72 45 L 83 50 L 86 38"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-10 overflow-visible pointer-events-none", className)}
      aria-hidden="true"
    >
      <path
        d="M 6 8 C 18 10, 44 18, 64 38"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 51 38 L 66 40 L 66 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * Translucent drafting tape corner strip for mounting photos
 */
export const SketchTape: React.FC<{
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center";
  className?: string;
}> = ({ position = "top-left", className }) => {
  const rotation = {
    "top-left": "-rotate-12 -top-3 -left-4",
    "top-right": "rotate-12 -top-3 -right-4",
    "bottom-left": "rotate-6 -bottom-3 -left-4",
    "bottom-right": "-rotate-6 -bottom-3 -right-4",
    "top-center": "-rotate-1 -top-3.5 left-1/2 -translate-x-1/2",
  }[position];

  return (
    <div
      className={cn(
        "absolute z-20 w-16 h-5 bg-[#ECECE6]/80 backdrop-blur-[1px] border-t border-b border-[#D8D8D0] shadow-xs pointer-events-none transform select-none",
        rotation,
        className
      )}
      aria-hidden="true"
    />
  );
};

/**
 * Handwritten margin note / annotation
 */
export const HandwrittenNote: React.FC<{
  text: string;
  className?: string;
  rotation?: string;
}> = ({ text, className, rotation = "-rotate-2" }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-hand text-base md:text-lg text-graphite-700 select-none pointer-events-none",
        rotation,
        className
      )}
    >
      <span className="text-graphite-400">✎</span>
      <span>{text}</span>
    </div>
  );
};

/**
 * Technical measurement drafting label
 */
export const MeasurementBracket: React.FC<{
  label: string;
  className?: string;
}> = ({ label, className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-graphite-500 uppercase select-none",
        className
      )}
    >
      <span className="text-graphite-400 font-bold">[</span>
      <span>{label}</span>
      <span className="text-graphite-400 font-bold">]</span>
    </div>
  );
};

/**
 * Hand-drawn pencil bordered button with hover line redrawing
 */
export const SketchButton: React.FC<{
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "minimal";
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}> = ({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  target,
  rel,
}) => {
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-display text-sm font-semibold tracking-wide transition-all duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-graphite-800 focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-graphite-900 text-paper hover:bg-graphite-950 shadow-sketch hover:shadow-sketch-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sketch-sm rounded-sm",
    secondary:
      "bg-paper text-graphite-900 border-2 border-graphite-800 hover:bg-graphite-50 shadow-sketch-sm hover:shadow-sketch hover:-translate-y-0.5 active:translate-y-0 rounded-sm",
    minimal:
      "bg-transparent text-graphite-800 hover:text-graphite-950 underline decoration-graphite-400 underline-offset-4 hover:decoration-graphite-900",
  }[variant];

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "secondary" && (
        <span
          className="absolute -bottom-1 -right-1 w-full h-full border border-dashed border-graphite-400 pointer-events-none rounded-sm -z-0 opacity-40 group-hover:opacity-75 transition-opacity"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses, className)}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variantClasses, className)}
    >
      {content}
    </button>
  );
};

