"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/content";
import { MeasurementBracket, HandwrittenNote, SketchButton } from "@/components/brand/SketchDoodles";
import { ArrowUpRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const ServicesSection: React.FC = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-36 bg-paper-warm border-b border-graphite-300 overflow-hidden">
      
      {/* Background delicate graph grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="06 / WHAT WE CAN HELP WITH" />
              <div className="h-[1px] w-12 bg-graphite-300" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              Outcome-Led Capabilities. <br />
              <span className="font-hand text-graphite-700 font-normal text-3xl sm:text-5xl">
                Tidy blueprints for commercial velocity.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <HandwrittenNote text="honest availability status on every card ↗" className="hidden sm:inline-flex" />
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-graphite-800 hover:text-black transition-colors"
            >
              <span>Explore All Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tidy Sketch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const isComingSoon = srv.status === "coming-soon";
            const isBespoke = srv.status === "bespoke";

            return (
              <div
                key={srv.slug}
                className={cn(
                  "relative rounded-lg bg-paper p-8 border-2 transition-all duration-300 flex flex-col justify-between group",
                  isComingSoon
                    ? "border-dashed border-graphite-300 opacity-80 hover:opacity-100"
                    : "border-graphite-800 shadow-sketch hover:shadow-sketch-md hover:-translate-y-1"
                )}
              >
                {/* Status Header */}
                <div className="flex items-center justify-between border-b border-dashed border-graphite-200 pb-3 mb-6">
                  <span className="font-mono text-xs font-bold text-graphite-400">
                    SERVICE 0{idx + 1}
                  </span>
                  
                  <span
                    className={cn(
                      "font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded",
                      isComingSoon
                        ? "bg-purple-100 text-purple-800"
                        : isBespoke
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    )}
                  >
                    {srv.statusLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="font-display font-black text-2xl text-graphite-950 group-hover:text-black tracking-tight">
                    {srv.title}
                  </h3>
                  
                  <p className="font-serif italic text-base text-graphite-600">
                    {srv.tagline}
                  </p>

                  <p className="font-body text-xs text-graphite-600 leading-relaxed">
                    {srv.problem}
                  </p>

                  {/* Measurable Outcomes */}
                  <div className="pt-2 border-t border-dashed border-graphite-200 space-y-2">
                    <span className="font-mono text-[11px] font-bold text-graphite-800 uppercase block">
                      Target Outcomes:
                    </span>
                    <ul className="space-y-1 text-xs font-body text-graphite-600">
                      {srv.outcomes.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-graphite-700 mt-0.5 shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-dashed border-graphite-200">
                  <Link
                    href={isComingSoon ? "/contact?topic=social" : `/solutions#${srv.slug}`}
                    className="inline-flex items-center justify-between w-full font-display text-xs font-bold tracking-wider uppercase text-graphite-900 group-hover:text-black"
                  >
                    <span>{srv.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Decorative graphite corner tick */}
                <div className="absolute top-2 right-2 text-graphite-300 font-mono text-[9px] pointer-events-none">
                  +
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

