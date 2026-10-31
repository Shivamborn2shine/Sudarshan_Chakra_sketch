"use client";

import React, { useState } from "react";
import { problemCards } from "@/data/content";
import { Logo } from "@/components/brand/Logo";
import { SketchArrow, HandwrittenNote, MeasurementBracket } from "@/components/brand/SketchDoodles";
import { ChevronDown, ArrowRight, HelpCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProblemWall: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>("01");

  return (
    <section id="problem-wall" className="relative py-20 md:py-32 bg-paper-warm border-y border-graphite-200">
      
      {/* Background delicate graph grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="02 / THE PROBLEM WALL" />
              <div className="h-[1px] w-12 bg-graphite-300" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              Scribble the problem. <br />
              <span className="font-hand text-graphite-700 font-normal text-3xl sm:text-5xl">
                We&apos;ll draw a way through.
              </span>
            </h2>
          </div>
          <HandwrittenNote text="click or tap any note to reveal the sketch ↘" className="hidden md:inline-flex" />
        </div>

        {/* Scattered Sticky-Outline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, idx) => {
            const isSelected = activeCardId === card.id;
            // slight organic sketch tilt
            const tiltClasses = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"][idx % 4];

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                onMouseEnter={() => setActiveCardId(card.id)}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCardId(card.id);
                  }
                }}
                className={cn(
                  "relative p-6 rounded-md bg-paper border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between group outline-none focus-visible:ring-2 focus-visible:ring-graphite-900",
                  tiltClasses,
                  isSelected
                    ? "border-graphite-900 shadow-sketch-md -translate-y-1 z-20 scale-[1.02]"
                    : "border-graphite-300 shadow-sketch-sm hover:border-graphite-600 hover:shadow-sketch"
                )}
              >
                {/* Pin / Card Header */}
                <div className="flex items-center justify-between border-b border-dashed border-graphite-200 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-graphite-400">
                    CARD {card.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-graphite-100 text-graphite-700">
                    {card.subtext}
                  </span>
                </div>

                {/* Question */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-display font-bold text-xl text-graphite-950 group-hover:text-black leading-snug">
                    {card.question}
                  </h3>
                  
                  {/* Revealed Answer Content */}
                  <p className="font-body text-xs text-graphite-600 leading-relaxed">
                    {card.answer}
                  </p>
                </div>

                {/* Footer Note with Hand-drawn link */}
                <div className="pt-3 border-t border-dashed border-graphite-200 flex items-center justify-between">
                  <span className="font-hand text-sm text-graphite-600 font-medium">
                    {card.sketchArrowNote}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[11px] font-bold transition-colors",
                      isSelected ? "text-graphite-950" : "text-graphite-400 group-hover:text-graphite-700"
                    )}
                  >
                    {card.resolvedTo}
                  </span>
                </div>

                {/* Selection pin badge */}
                {isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-graphite-900 text-paper flex items-center justify-center text-[10px] font-mono shadow-sm">
                    ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transition: Lines converge into one hand-drawn BlackThrone mark */}
        <div className="mt-20 pt-10 border-t-2 border-dashed border-graphite-300 flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-4 text-graphite-400 font-mono text-xs">
            <span>——</span>
            <Logo variant="chakra" size="sm" isLink={false} />
            <span>——</span>
          </div>

          <p className="font-display font-extrabold text-xl sm:text-2xl text-graphite-950 tracking-tight">
            Different problems. One place to start.
          </p>
          <p className="font-hand text-base sm:text-lg text-graphite-600 max-w-md">
            Whether it&apos;s customer footfall, messy operations, or a blank piece of paper—BlackThrone draws the path forward.
          </p>
        </div>

      </div>
    </section>
  );
};

