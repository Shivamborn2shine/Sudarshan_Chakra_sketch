"use client";

import React from "react";
import { Logo } from "@/components/brand/Logo";
import { MeasurementBracket, HandwrittenNote, SketchUnderline, SketchArrow } from "@/components/brand/SketchDoodles";
import { siteSettings } from "@/data/content";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-paper border-b border-graphite-300 overflow-hidden">
      
      {/* Background ruled draft paper lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:100%_28px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Draft Sheet Container */}
        <div className="relative p-8 sm:p-14 md:p-16 rounded-xl bg-paper-warm border-2 border-graphite-800 shadow-sketch-lg">
          
          {/* Draft sheet header */}
          <div className="flex items-center justify-between border-b-2 border-dashed border-graphite-300 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="07 / STUDIO MANIFESTO" />
              <span className="font-mono text-xs text-graphite-400">// BLACKTHRONE DISCIPLINE</span>
            </div>
            <HandwrittenNote text="✎ working principles" className="hidden sm:inline-flex" />
          </div>

          {/* Core Statement */}
          <div className="space-y-6 mb-12">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-graphite-950 tracking-tight leading-[1.1]">
              We don&apos;t wait for perfect ideas. <br />
              <span className="font-serif italic font-normal text-graphite-800">
                We make useful things from imperfect beginnings.
              </span>
            </h2>

            <div className="w-56">
              <SketchUnderline />
            </div>

            <p className="font-body text-base sm:text-lg text-graphite-700 leading-relaxed max-w-2xl">
              Most products die in committee meetings or endless slide decks. At BlackThrone, we test hypotheses immediately with sketches, physical hardware standees, and real code. If an idea has merit, we build the way to make it real.
            </p>
          </div>

          {/* Three Operating Verbs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t-2 border-dashed border-graphite-300">
            
            {/* Verb 1 */}
            <div className="p-6 rounded bg-paper border border-graphite-300 space-y-3 shadow-sketch-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-graphite-400">VERB 01</span>
                <span className="font-hand text-base text-graphite-500">interrogate</span>
              </div>
              <h3 className="font-display font-black text-2xl text-graphite-950">
                Question.
              </h3>
              <p className="font-body text-xs text-graphite-600 leading-relaxed">
                Why do customers churn? Why is ordering slow? We challenge assumptions before writing a single line of code.
              </p>
            </div>

            {/* Verb 2 */}
            <div className="p-6 rounded bg-paper border border-graphite-300 space-y-3 shadow-sketch-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-graphite-400">VERB 02</span>
                <span className="font-hand text-base text-graphite-500">model</span>
              </div>
              <h3 className="font-display font-black text-2xl text-graphite-950">
                Sketch.
              </h3>
              <p className="font-body text-xs text-graphite-600 leading-relaxed">
                Draw the customer touchpoints, test standee angles, map the data schemas, and iterate without fear of making mistakes.
              </p>
            </div>

            {/* Verb 3 */}
            <div className="p-6 rounded bg-paper border border-graphite-300 space-y-3 shadow-sketch-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-graphite-400">VERB 03</span>
                <span className="font-hand text-base text-graphite-500">engineer</span>
              </div>
              <h3 className="font-display font-black text-2xl text-graphite-950">
                Build.
              </h3>
              <p className="font-body text-xs text-graphite-600 leading-relaxed">
                Ship laser-etched physical materials, resilient serverless architecture, and software that creates measurable revenue.
              </p>
            </div>

          </div>

          {/* Resolution into the clean emblem */}
          <div className="mt-12 pt-8 border-t border-dashed border-graphite-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Logo variant="chakra" size="md" isLink={false} />
              <div>
                <p className="font-display font-bold text-sm text-graphite-950">
                  BLACKTHRONE — WE BUILD THE WAY.
                </p>
                <p className="font-mono text-[11px] text-graphite-500">
                  Every scribble resolves into a functioning system.
                </p>
              </div>
            </div>

            <div className="font-hand text-base text-graphite-600">
              ✎ Bengaluru · New Delhi · Global
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

