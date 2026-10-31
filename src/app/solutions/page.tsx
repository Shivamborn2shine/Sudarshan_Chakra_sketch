import React from "react";
import Link from "next/link";
import { services } from "@/data/content";
import {
  MeasurementBracket,
  HandwrittenNote,
  SketchUnderline,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import { CheckCircle2, ArrowUpRight, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Solutions & Services — BlackThrone",
  description:
    "Outcome-led technology capabilities for local businesses, hospitality concepts, and ambitious founders. Customer engagement, loyalty, operations, and bespoke flagships.",
};

export default function SolutionsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <MeasurementBracket label="CAPABILITIES & SYSTEMS" />
            <div className="h-[1px] w-12 bg-graphite-300" />
            <HandwrittenNote text="✎ measured commercial velocity" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
            Outcome-Led Systems. <br />
            <span className="font-hand text-graphite-700 font-normal text-4xl sm:text-6xl">
              Engineered to solve real friction.
            </span>
          </h1>

          <div className="w-56">
            <SketchUnderline />
          </div>

          <p className="font-body text-base sm:text-lg text-graphite-700 leading-relaxed">
            We don&apos;t sell generic consulting hours or bloated retainers. Each solution below is an engineered system designed to solve a specific business obstacle—from walk-in customer dropoff to kitchen ticket chaos.
          </p>
        </div>

        {/* Detailed Solutions Stack */}
        <div className="space-y-16">
          {services.map((srv, idx) => {
            const isComingSoon = srv.status === "coming-soon";
            const isBespoke = srv.status === "bespoke";

            return (
              <div
                key={srv.slug}
                id={srv.slug}
                className={cn(
                  "p-8 sm:p-12 rounded-xl bg-paper border-2 transition-all scroll-mt-24",
                  isComingSoon
                    ? "border-dashed border-graphite-400 bg-paper-warm"
                    : "border-graphite-900 shadow-sketch-lg"
                )}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-graphite-200 pb-6 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase",
                          isComingSoon
                            ? "bg-purple-100 text-purple-800"
                            : isBespoke
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-emerald-800"
                        )}
                      >
                        {srv.statusLabel}
                      </span>
                      <span className="font-mono text-xs text-graphite-400">SOLUTION 0{idx + 1}</span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-4xl text-graphite-950">
                      {srv.title}
                    </h2>
                    <p className="font-serif italic text-lg text-graphite-600">
                      {srv.tagline}
                    </p>
                  </div>

                  <SketchButton
                    href={isComingSoon ? "/contact?topic=social" : `/contact?solution=${srv.slug}`}
                    variant={isComingSoon ? "secondary" : "primary"}
                    className="text-xs px-6 py-3"
                  >
                    <span>{srv.ctaLabel} →</span>
                  </SketchButton>
                </div>

                {/* Problem vs Approach Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  
                  {/* The Problem */}
                  <div className="p-6 rounded-lg bg-paper-warm border border-graphite-200 space-y-2">
                    <span className="font-mono text-xs font-bold text-graphite-500 uppercase flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-graphite-400" />
                      <span>The Business Problem</span>
                    </span>
                    <p className="font-body text-sm text-graphite-700 leading-relaxed">
                      {srv.problem}
                    </p>
                  </div>

                  {/* Our Approach */}
                  <div className="p-6 rounded-lg bg-paper-warm border border-graphite-200 space-y-2">
                    <span className="font-mono text-xs font-bold text-graphite-500 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-graphite-600" />
                      <span>The BlackThrone Approach</span>
                    </span>
                    <p className="font-body text-sm text-graphite-700 leading-relaxed">
                      {srv.approach}
                    </p>
                  </div>

                </div>

                {/* Outcomes & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-dashed border-graphite-200">
                  
                  {/* Measured Outcomes */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold uppercase text-graphite-900 block">
                      Target Measurable Outcomes:
                    </span>
                    <ul className="space-y-2 text-xs font-body text-graphite-700">
                      {srv.outcomes.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold uppercase text-graphite-900 block">
                      What You Actually Receive:
                    </span>
                    <ul className="space-y-2 text-xs font-body text-graphite-700">
                      {srv.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="font-bold text-graphite-400">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-xl bg-paper-warm border-2 border-graphite-800 text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-graphite-950">
            Need a bespoke engineering solution?
          </h3>
          <p className="font-body text-sm text-graphite-600 max-w-md mx-auto">
            Bring your messiest operational or customer challenge. We will sketch the architecture with you.
          </p>
          <div className="pt-2">
            <SketchButton href="/contact" variant="primary">
              <span>Tell Us What You&apos;re Imagining →</span>
            </SketchButton>
          </div>
        </div>

      </div>
    </div>
  );
}
