"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SketchUnderline,
  SketchCircle,
  SketchArrow,
  HandwrittenNote,
  MeasurementBracket,
  SketchButton,
} from "@/components/brand/SketchDoodles";
import { Logo } from "@/components/brand/Logo";
import { ArrowDown, Sparkles, Compass } from "lucide-react";
import { siteSettings } from "@/data/content";

export const HeroSection: React.FC = () => {
  const [activeEmblem, setActiveEmblem] = useState<"chakra" | "ring">("chakra");

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden">
      
      {/* Draft watermark label */}
      <div className="absolute top-8 right-6 md:right-12 pointer-events-none select-none opacity-40 hidden sm:block">
        <div className="font-mono text-xs text-graphite-400 border border-dashed border-graphite-300 p-2 text-right">
          <p>PAGE: 01 // OVERVIEW</p>
          <p>STATUS: DRAFT → PRODUCTION</p>
          <p>COORDS: 12.9716° N, 77.5946° E</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Annotation Line */}
        <div className="flex items-center gap-4 mb-6">
          <MeasurementBracket label="CANVAS 1920 × ∞" />
          <div className="h-[1px] flex-1 bg-graphite-200" />
          <HandwrittenNote text="ideas begin here ↗" className="hidden sm:inline-flex" />
        </div>

        {/* Main Grid: Headline Left, Interactive Sketch Emblem Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-graphite-300 bg-paper-warm text-xs font-mono uppercase tracking-wider text-graphite-700 shadow-sketch-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-graphite-900 animate-pulse" />
              <span>Technology & Digital Solutions Flagship</span>
            </div>

            {/* Primary Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-graphite-950 tracking-tight leading-[1.08]">
                EVERY BIG IDEA <br className="hidden sm:inline" />
                STARTS <SketchCircle color="#2D2D2D">SMALL.</SketchCircle>
              </h1>

              {/* Resolution Tagline */}
              <div className="pt-2">
                <span className="block font-display font-black text-3xl sm:text-5xl lg:text-6xl text-graphite-900 tracking-tight">
                  WE BUILD THE WAY.
                </span>
                <div className="w-64 sm:w-80 pt-2">
                  <SketchUnderline />
                </div>
              </div>
            </div>

            {/* Support Copy */}
            <p className="font-body text-base sm:text-lg text-graphite-700 max-w-xl leading-relaxed">
              From a rough thought on paper to technology people actually use. We sketch, experiment, design, and build solutions that help businesses move forward.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <SketchButton href="/work" variant="primary" className="text-base px-8 py-3.5">
                <span>Explore What We&apos;ve Built</span>
              </SketchButton>
              <SketchButton href="/contact" variant="secondary" className="text-base px-8 py-3.5">
                <span>Sketch an Idea With Us →</span>
              </SketchButton>
            </div>

            {/* Microcopy Quote */}
            <div className="pt-4 flex items-center gap-3">
              <span className="font-hand text-lg text-graphite-600">
                &ldquo;Got a messy problem? Good. Let&apos;s draw a way through.&rdquo;
              </span>
            </div>

          </div>

          {/* Right Column: Hand-Drawn Emblem Showcase & Outer Treatment Selector */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-full max-w-sm sm:max-w-md p-8 rounded-lg bg-paper-warm border-2 border-dashed border-graphite-300 shadow-sketch-md">
              
              {/* Corner measurement callouts */}
              <div className="absolute -top-3 left-6 bg-paper px-2 font-mono text-[10px] text-graphite-500 uppercase border border-graphite-200">
                FIGURE 01: IDENTITY ENGINE
              </div>
              <div className="absolute -bottom-3 right-6 bg-paper px-2 font-mono text-[10px] text-graphite-500 uppercase border border-graphite-200">
                TOLERANCE ±0.01mm
              </div>

              {/* Large Centered Logo */}
              <div className="flex flex-col items-center py-6 text-center space-y-4">
                <Logo variant={activeEmblem} size="xl" isLink={false} />

                <div className="space-y-1">
                  <p className="font-display font-bold text-lg text-graphite-900">
                    The BlackThrone Identity
                  </p>
                  <p className="font-mono text-xs text-graphite-500">
                    Interwoven Infinity + Guiding Spark
                  </p>
                </div>

                {/* Treatment Selector */}
                <div className="pt-2 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveEmblem("chakra")}
                    className={`px-3 py-1.5 text-xs font-mono rounded border transition-all ${
                      activeEmblem === "chakra"
                        ? "bg-graphite-900 text-paper border-graphite-900 font-bold shadow-sketch-sm"
                        : "bg-paper text-graphite-700 border-graphite-300 hover:border-graphite-500"
                    }`}
                  >
                    16-Spoke Chakra
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveEmblem("ring")}
                    className={`px-3 py-1.5 text-xs font-mono rounded border transition-all ${
                      activeEmblem === "ring"
                        ? "bg-graphite-900 text-paper border-graphite-900 font-bold shadow-sketch-sm"
                        : "bg-paper text-graphite-700 border-graphite-300 hover:border-graphite-500"
                    }`}
                  >
                    Double Ring
                  </button>
                </div>
                
                <p className="font-hand text-sm text-graphite-500 pt-1">
                  ✎ Tap to toggle outer drafted treatment
                </p>
              </div>

              {/* Connecting Sketch Path Downward */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden lg:block">
                <SketchArrow direction="curved-down-right" className="w-16 h-12 text-graphite-400" />
              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="pt-16 md:pt-24 flex justify-center">
          <a
            href="#problem-wall"
            className="group flex flex-col items-center gap-2 font-mono text-xs text-graphite-400 hover:text-graphite-900 transition-colors"
          >
            <span>SCROLL DOWN TO DRAFT</span>
            <div className="p-2 rounded-full border border-dashed border-graphite-300 group-hover:border-graphite-900 group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

