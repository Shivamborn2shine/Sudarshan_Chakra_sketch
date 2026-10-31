"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "chakra" | "ring" | "minimal";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isLink?: boolean;
  onVariantChange?: (variant: "chakra" | "ring" | "minimal") => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "chakra",
  showWordmark = true,
  size = "md",
  className,
  isLink = true,
}) => {
  const sizeMap = {
    sm: { box: 36, text: "text-base tracking-[0.18em]", sub: "text-[8px] tracking-[0.25em]" },
    md: { box: 44, text: "text-lg tracking-[0.2em]", sub: "text-[9px] tracking-[0.28em]" },
    lg: { box: 60, text: "text-2xl tracking-[0.22em]", sub: "text-[10px] tracking-[0.3em]" },
    xl: { box: 80, text: "text-3xl tracking-[0.25em]", sub: "text-[12px] tracking-[0.32em]" },
  };

  const { box, text, sub } = sizeMap[size];

  const EmblemSVG = (
    <svg
      width={box}
      height={box}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
      aria-label="BlackThrone Emblem (Graphite Sketch Edition)"
      role="img"
    >
      {/* CHAKRA ENCLOSURE: 16 Precision Radial Blades & Pencil Compass Rings */}
      {variant === "chakra" && (
        <g className="transition-opacity duration-300">
          {/* Outer compass faint dashed circle */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="#C8C8C8"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            opacity="0.8"
          />
          {/* Inner drafted alignment circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#2D2D2D"
            strokeWidth="0.5"
            opacity="0.4"
          />

          {/* 16 Radial Sudarshan Chakra Blades */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const isCardinal = i % 4 === 0;
            return (
              <line
                key={i}
                x1="50"
                y1={isCardinal ? "4" : "6"}
                x2="50"
                y2="9.5"
                stroke="#2D2D2D"
                strokeWidth={isCardinal ? "1.6" : "0.9"}
                strokeLinecap="round"
                opacity={isCardinal ? "0.95" : "0.55"}
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}

          {/* Inner drafted perimeter */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#747474"
            strokeWidth="0.75"
            opacity="0.35"
          />
        </g>
      )}

      {/* DOUBLE RING ENCLOSURE: Drafting compass double rings with 4 anchor points */}
      {variant === "ring" && (
        <g className="transition-opacity duration-300">
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="#2D2D2D"
            strokeWidth="1.2"
            opacity="0.75"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#747474"
            strokeWidth="0.8"
            strokeDasharray="4 2"
            opacity="0.5"
          />
          {/* 4 Cardinal Anchor Ticks */}
          {[0, 90, 180, 270].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="2"
              x2="50"
              y2="6.5"
              stroke="#2D2D2D"
              strokeWidth="1.6"
              strokeLinecap="round"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
        </g>
      )}

      {/* INTERWOVEN INFINITY RIBBON IN GRAPHITE LEAD */}
      {/* Loop 1: Charcoal lead band (left loop crossing) */}
      <path
        d="M 50 54 C 42 66, 22 66, 22 54 C 22 42, 42 42, 50 54 C 58 66, 78 66, 78 54"
        stroke="#2D2D2D"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Loop 2: Graphite counter-path with optical overlap dash */}
      <path
        d="M 78 54 C 78 42, 58 42, 50 54 C 42 66, 22 66, 22 54"
        stroke="#1A1A1A"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="38 3"
      />

      {/* Central crossing graphite node */}
      <circle cx="50" cy="54" r="1.6" fill="#1A1A1A" />

      {/* GUIDING SPARK / 4-POINT STAR (Graphite/Ink monochrome) */}
      <g transform="translate(50, 25)">
        {/* Soft graphite aura */}
        <circle cx="0" cy="0" r="7" fill="#EAEAE6" opacity="0.6" />
        {/* Vertical diamond beam */}
        <path d="M 0 -8.5 L 2 0 L 0 8.5 L -2 0 Z" fill="#1A1A1A" />
        {/* Horizontal diamond beam */}
        <path d="M -8.5 0 L 0 2 L 8.5 0 L 0 -2 Z" fill="#5E5E5E" />
        {/* Core spark highlight */}
        <circle cx="0" cy="0" r="1.2" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.5" />
      </g>
    </svg>
  );

  const content = (
    <div className={cn("inline-flex items-center gap-3 group select-none", className)}>
      <div className="relative flex items-center justify-center p-1.5 rounded-full bg-paper border border-graphite-300 shadow-sketch-sm transition-all duration-300 group-hover:border-graphite-800 group-hover:shadow-sketch">
        {EmblemSVG}
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-black text-graphite-950 leading-none transition-colors duration-200 group-hover:text-black",
              text
            )}
          >
            BLACKTHRONE
          </span>
          <span
            className={cn(
              "font-mono font-medium uppercase text-graphite-500 mt-1 transition-colors duration-200 group-hover:text-graphite-800",
              sub
            )}
          >
            WE BUILD THE WAY.
          </span>
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-graphite-800 focus-visible:ring-offset-2 rounded-sm"
      >
        {content}
      </Link>
    );
  }

  return content;
};

