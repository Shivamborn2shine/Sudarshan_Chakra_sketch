"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MeasurementBracket, HandwrittenNote, SketchUnderline, SketchArrow } from "@/components/brand/SketchDoodles";
import { Sparkles, Layers, Compass, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  scribbleNote: string;
  badge: string;
}

const STAGES: StoryStage[] = [
  {
    id: "imagine",
    step: "01",
    title: "IMAGINE",
    subtitle: "Messy ideation strokes & unfiltered questions",
    description:
      "Every project starts with raw friction: why are customers hesitating at the counter? Why do loyalty systems get ignored? We dump every assumption on paper without premature polish.",
    scribbleNote: "✎ No bad questions yet",
    badge: "Graphite Ideation",
  },
  {
    id: "figure-out",
    step: "02",
    title: "FIGURE IT OUT",
    subtitle: "Arrows, system topology & user journeys",
    description:
      "We trace how humans actually move through space and software. Paper wireframes map the 3-second scan journey, reducing 12 confusing steps into 1 seamless touchpoint.",
    scribbleNote: "✎ Connect physical to digital",
    badge: "UX Blueprint",
  },
  {
    id: "build",
    step: "03",
    title: "BUILD",
    subtitle: "Wireframes snap into modular, high-velocity code",
    description:
      "We replace napkin sketches with typed schemas, sub-second edge routing, laser-etched physical prototypes, and rigorous real-world stress testing.",
    scribbleNote: "✎ Sub-second latency",
    badge: "Engineering Architecture",
  },
  {
    id: "make-real",
    step: "04",
    title: "MAKE IT REAL",
    subtitle: "Full-color solutions deployed on real counters",
    description:
      "Color bursts into the frame as the solution ships: OneScan360 standees on cafe counters, Loopa loyalty ledgers in restaurant hands, and businesses accelerating forward.",
    scribbleNote: "✎ Deployed in the wild!",
    badge: "Shipped & Living",
  },
];

export const ScribbleToShipped: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = STAGES[activeStep];

  return (
    <section className="relative py-24 md:py-36 bg-paper border-b border-graphite-200 overflow-hidden">
      
      {/* Background drafting lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:36px_36px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="03 / THE CONTINUOUS NARRATIVE" />
              <div className="h-[1px] w-12 bg-graphite-300" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              From Scribble to Shipped. <br />
              <span className="font-hand text-graphite-700 font-normal text-3xl sm:text-5xl">
                How an unfinished thought becomes real.
              </span>
            </h2>
          </div>
          <HandwrittenNote text="scrub through the 4 stages ↘" className="hidden md:inline-flex" />
        </div>

        {/* 4-Stage Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STAGES.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-4 rounded border text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-graphite-900",
                  isActive
                    ? "bg-graphite-900 text-paper border-graphite-900 shadow-sketch"
                    : "bg-paper-warm text-graphite-800 border-graphite-300 hover:border-graphite-500"
                )}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-1">
                  <span className={isActive ? "text-graphite-300" : "text-graphite-400"}>
                    STAGE {st.step}
                  </span>
                  {isActive && <span className="text-[10px] text-emerald-400 font-bold">● ACTIVE</span>}
                </div>
                <p className="font-display font-bold text-sm sm:text-base tracking-wide">
                  {st.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stage Interactive Canvas Container */}
        <div className="relative rounded-lg bg-paper-warm border-2 border-graphite-800 p-6 sm:p-10 shadow-sketch-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Stage Story Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-graphite-100 text-graphite-700 font-mono text-xs uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-graphite-400 tracking-wider">
                  PHASE {current.step} OF 04
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-graphite-950 tracking-tight">
                  {current.title}
                </h3>
                <p className="font-display font-semibold text-lg text-graphite-700">
                  {current.subtitle}
                </p>
              </div>

              <p className="font-body text-sm sm:text-base text-graphite-600 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="font-hand text-lg text-graphite-700 font-bold">
                  {current.scribbleNote}
                </span>
              </div>

              {/* Step Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-mono rounded border border-graphite-300 hover:border-graphite-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeStep === STAGES.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-mono rounded bg-graphite-900 text-paper hover:bg-black disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right: Visual Evolution Canvas */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full rounded-md bg-paper border border-graphite-300 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                
                {/* Stage 01 Visual: Loose Sketch Lines */}
                {activeStep === 0 && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
                    <svg viewBox="0 0 300 160" className="w-full max-w-xs h-36" fill="none">
                      <path
                        d="M 20 80 Q 70 20, 150 80 T 280 80"
                        stroke="#747474"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                      <circle cx="80" cy="50" r="22" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="220" cy="90" r="30" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="5 3" />
                      <path d="M 80 72 L 140 110 L 200 95" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />
                      <text x="70" y="55" font-family="cursive" font-size="12" fill="#747474">Why QR?</text>
                      <text x="200" y="95" font-family="cursive" font-size="12" fill="#747474">Retention?</text>
                    </svg>
                    <p className="font-hand text-base text-graphite-500">
                      Unstructured brainstorm on graph paper
                    </p>
                  </div>
                )}

                {/* Stage 02 Visual: UX Wireframe & Topology */}
                {activeStep === 1 && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                      <div className="p-3 rounded border border-graphite-400 bg-paper-warm text-left">
                        <span className="font-mono text-[9px] text-graphite-400 block">STEP 1</span>
                        <span className="font-display text-xs font-bold text-graphite-900">Physical QR</span>
                      </div>
                      <div className="p-3 rounded border border-graphite-400 bg-paper-warm text-left">
                        <span className="font-mono text-[9px] text-graphite-400 block">STEP 2</span>
                        <span className="font-display text-xs font-bold text-graphite-900">Mobile Hub</span>
                      </div>
                      <div className="p-3 rounded border border-graphite-400 bg-paper-warm text-left">
                        <span className="font-mono text-[9px] text-graphite-400 block">STEP 3</span>
                        <span className="font-display text-xs font-bold text-graphite-900">1-Tap Review</span>
                      </div>
                    </div>
                    <div className="w-48">
                      <SketchUnderline />
                    </div>
                    <p className="font-hand text-base text-graphite-600">
                      ✎ Frictionless path engineered: 0.2s load, zero app downloads
                    </p>
                  </div>
                )}

                {/* Stage 03 Visual: Modular Architecture & Tech Specs */}
                {activeStep === 2 && (
                  <div className="w-full h-full flex flex-col justify-center space-y-3 font-mono text-xs text-graphite-700 bg-graphite-50 p-4 rounded border border-graphite-200">
                    <div className="flex items-center justify-between border-b border-graphite-200 pb-2">
                      <span className="text-graphite-500">// SPECIFICATION ENGINE</span>
                      <span className="text-emerald-700 font-bold">● COMPILED</span>
                    </div>
                    <div className="space-y-1 text-[11px]">
                      <p><span className="text-graphite-400">01</span> type MerchantHub = DynamicProfile & ReviewRoute;</p>
                      <p><span className="text-graphite-400">02</span> const standee = &apos;Laser-etched Dual Acrylic / Wood&apos;;</p>
                      <p><span className="text-graphite-400">03</span> latency.target &lt; 200ms; // Edge CDN cached</p>
                      <p><span className="text-graphite-400">04</span> reviews.assistedMode = true; // Direct to Maps</p>
                    </div>
                    <p className="font-hand text-sm text-graphite-600 pt-2 border-t border-graphite-200">
                      ✎ Snaps into robust Next.js and physical CNC production
                    </p>
                  </div>
                )}

                {/* Stage 04 Visual: COLOR BURST - Authentic Product Reality */}
                {activeStep === 3 && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
                    <div className="relative w-full h-48 sm:h-56 rounded border-2 border-graphite-800 overflow-hidden shadow-sketch">
                      <Image
                        src="/assets/scoop-n-brew/WhatsApp Image 2026-10-29 at 6.57.51 PM.jpeg"
                        alt="Authentic Scoop n Brew OneScan360 physical stand deployment"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                        <div className="text-paper">
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-mono font-bold uppercase">
                            Shipped & Verified
                          </span>
                          <p className="font-display font-bold text-base mt-1">
                            Scoop n Brew Countertop Stand
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="font-hand text-sm text-graphite-600 pt-2">
                      ✎ Full color enters ONLY as proof of what was built
                    </p>
                  </div>
                )}

                {/* Footer canvas coordinates */}
                <div className="flex items-center justify-between text-[10px] font-mono text-graphite-400 border-t border-dashed border-graphite-200 pt-2 mt-auto">
                  <span>CANVAS: ACTIVE</span>
                  <span>VIEWPORT: STAGE {current.step}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
