import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  MeasurementBracket,
  HandwrittenNote,
  SketchUnderline,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import { Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { siteSettings } from "@/data/content";

export const metadata = {
  title: "About BlackThrone — Studio Story & Philosophy",
  description:
    "We don't wait for perfect ideas. We make useful things from imperfect beginnings. Discover BlackThrone, our creative discipline, and our flagship products.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <MeasurementBracket label="STUDIO ARCHIVE" />
            <div className="h-[1px] w-12 bg-graphite-300" />
            <HandwrittenNote text="✎ human, experimental, competent" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
            We Build The Way. <br />
            <span className="font-hand text-graphite-700 font-normal text-4xl sm:text-6xl">
              From rough paper to living systems.
            </span>
          </h1>

          <div className="w-56">
            <SketchUnderline />
          </div>

          <p className="font-body text-base sm:text-lg text-graphite-700 leading-relaxed">
            BlackThrone is a technology and digital innovation company based in Bengaluru and New Delhi. We are the studio behind OneScan360 and Loopa.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="p-8 sm:p-14 rounded-xl bg-paper-warm border-2 border-graphite-900 shadow-sketch-lg space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-graphite-950">
              The White Sketchbook Philosophy
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-graphite-700">
              Every solution begins as a sketch. We bring it to life.
            </p>
          </div>

          <div className="space-y-4 font-body text-sm sm:text-base text-graphite-700 leading-relaxed">
            <p>
              In an industry obsessed with slick, cookie-cutter templates and buzzword-heavy agency pitches, we chose a fundamentally different discipline: <strong>the designer&apos;s living sketchbook</strong>.
            </p>
            <p>
              When a business owner or founder approaches us with a messy operational obstacle—walk-in customers not leaving reviews, fragmented POS tablets, or an idea trapped in a notebook—we don&apos;t open a PowerPoint deck. We draw the problem on graph paper.
            </p>
            <p>
              We measure physical counter angles, draft user touchpoints with pencil and ruler, challenge assumptions, and turn rough outlines into high-velocity digital products. Saturated color enters our work only as proof of what was built.
            </p>
          </div>

          {/* Three Verbs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-dashed border-graphite-300">
            <div className="p-5 rounded bg-paper border border-graphite-300 space-y-2">
              <span className="font-mono text-xs font-bold text-graphite-400 block">01 / QUESTION</span>
              <h3 className="font-display font-bold text-lg text-graphite-900">Interrogate First</h3>
              <p className="font-body text-xs text-graphite-600">
                Identify the root commercial friction before writing code.
              </p>
            </div>
            <div className="p-5 rounded bg-paper border border-graphite-300 space-y-2">
              <span className="font-mono text-xs font-bold text-graphite-400 block">02 / SKETCH</span>
              <h3 className="font-display font-bold text-lg text-graphite-900">Rapid Modeling</h3>
              <p className="font-body text-xs text-graphite-600">
                Iterate user paths, hardware geometries, and API topologies on paper.
              </p>
            </div>
            <div className="p-5 rounded bg-paper border border-graphite-300 space-y-2">
              <span className="font-mono text-xs font-bold text-graphite-400 block">03 / BUILD</span>
              <h3 className="font-display font-bold text-lg text-graphite-900">Ship to Counters</h3>
              <p className="font-body text-xs text-graphite-600">
                Deliver laser-etched hardware, sub-second web hubs, and measurable velocity.
              </p>
            </div>
          </div>

        </div>

        {/* Identity & Symbolism */}
        <div className="p-8 sm:p-12 rounded-xl bg-paper border-2 border-graphite-800 shadow-sketch space-y-6">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-200 pb-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-graphite-950">
              The BlackThrone Identity
            </h2>
            <span className="font-mono text-xs text-graphite-400">HERITAGE & GEOMETRY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="p-6 rounded-full border-2 border-dashed border-graphite-300 bg-paper-warm">
                <Logo variant="chakra" size="xl" isLink={false} />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 font-body text-sm text-graphite-700 leading-relaxed">
              <p>
                Our emblem consists of the <strong>Interwoven Infinity Ribbon</strong> and the <strong>Guiding Spark</strong>, encased in selectable outer drafting treatments:
              </p>
              <ul className="space-y-2 text-xs font-mono text-graphite-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-graphite-900">• The Sudarshan Chakra:</span>
                  <span>16 precision radial blades representing relentless engineering focus and circular renewal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-graphite-900">• The Double Ring:</span>
                  <span>Architectural compass circles anchored by 4 cardinal ticks for stability and clarity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-graphite-900">• The Guiding Spark:</span>
                  <span>The origin of every great idea—a spark that guides execution into reality.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-xl bg-paper-warm border-2 border-graphite-800 text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-graphite-950">
            Let&apos;s draw a way forward together.
          </h3>
          <p className="font-body text-sm text-graphite-600 max-w-md mx-auto">
            Got an idea or a problem waiting to be solved? Tell us what you&apos;re imagining.
          </p>
          <div className="pt-2">
            <SketchButton href="/contact" variant="primary">
              <span>Start a Conversation →</span>
            </SketchButton>
          </div>
        </div>

      </div>
    </div>
  );
}

