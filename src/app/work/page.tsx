import React from "react";
import Image from "next/image";
import Link from "next/link";
import { works, products } from "@/data/content";
import {
  SketchTape,
  MeasurementBracket,
  HandwrittenNote,
  SketchUnderline,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import { ArrowUpRight, CheckCircle2, QrCode, Layers, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Work & Portfolio — BlackThrone",
  description:
    "Selected real-world deployments and product engineering across Scoop n Brew, Wireless Tech, Bluedoor Cafe, and BlackThrone creations.",
};

export default function WorkPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <MeasurementBracket label="PORTFOLIO ARCHIVE" />
            <div className="h-[1px] w-12 bg-graphite-300" />
            <HandwrittenNote text="✎ real counters & live software" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
            Proof on Paper. <br />
            <span className="font-hand text-graphite-700 font-normal text-4xl sm:text-6xl">
              Proof in the real world.
            </span>
          </h1>

          <div className="w-56">
            <SketchUnderline />
          </div>

          <p className="font-body text-base sm:text-lg text-graphite-700 leading-relaxed">
            We don&apos;t build hypothetical demo concepts. Every case study below represents real hardware stands deployed on retail counters, genuine customer review routes, and active software systems.
          </p>
        </div>

        {/* Featured Flagship Product Deep-Dives Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Link
            href="/work/onescan360"
            className="group p-8 rounded-lg bg-paper-warm border-2 border-graphite-800 shadow-sketch hover:shadow-sketch-md hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">
                  Active Solution
                </span>
                <span className="font-mono text-xs text-graphite-400">PRODUCT CASE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-graphite-950 group-hover:text-black">
                OneScan360 Deep Dive →
              </h2>
              <p className="font-body text-xs sm:text-sm text-graphite-600 leading-relaxed">
                The architectural physical-to-digital customer hub deployed across Scoop n Brew, Bluedoor, and Wireless.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs font-bold text-cyan-700 flex items-center gap-1">
              <span>Read Full Architecture & Deployment Spec</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/work/loopa"
            className="group p-8 rounded-lg bg-paper-warm border-2 border-graphite-800 shadow-sketch hover:shadow-sketch-md hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-[10px] font-bold uppercase">
                  In Development
                </span>
                <span className="font-mono text-xs text-graphite-400">PRODUCT STORY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-graphite-950 group-hover:text-black">
                Loopa Development Journey →
              </h2>
              <p className="font-body text-xs sm:text-sm text-graphite-600 leading-relaxed">
                The full-cycle dining, zero-download loyalty engine, and merchant kitchen operations hub.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs font-bold text-purple-700 flex items-center gap-1">
              <span>Read Product Evolution & Alpha Waitlist</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

        </div>

        {/* Selected Client Deployments Section */}
        <div className="space-y-16">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-graphite-950">
              Selected Merchant Deployments
            </h2>
            <span className="font-mono text-xs text-graphite-500">3 VERIFIED CASE STUDIES</span>
          </div>

          <div className="space-y-20">
            {works.map((item, idx) => (
              <div
                key={item.slug}
                id={item.slug}
                className="p-8 sm:p-12 rounded-xl bg-paper border-2 border-graphite-800 shadow-sketch-lg space-y-8 scroll-mt-24"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-graphite-200 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">
                        {item.permissionStatus}
                      </span>
                      <span className="font-mono text-xs text-graphite-500">
                        {item.category} · {item.location}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-4xl text-graphite-950">
                      {item.title}
                    </h3>
                  </div>

                  <span className="font-mono text-sm font-bold text-graphite-400">
                    DEPLOYMENT #0{idx + 1}
                  </span>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Challenge & Solution */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold text-graphite-500 uppercase block">
                        The Friction
                      </span>
                      <p className="font-body text-sm text-graphite-700 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold text-graphite-500 uppercase block">
                        The BlackThrone Solution
                      </span>
                      <p className="font-body text-sm text-graphite-700 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>

                    {/* Execution Steps */}
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold text-graphite-500 uppercase block">
                        Execution Details
                      </span>
                      <ul className="space-y-1.5 text-xs font-body text-graphite-600">
                        {item.execution.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-graphite-400 font-bold">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="p-4 rounded border border-graphite-300 bg-paper-warm space-y-2">
                      <span className="font-mono text-xs font-bold text-graphite-900 uppercase block">
                        Shipped Deliverables:
                      </span>
                      <ul className="space-y-1 text-xs font-body text-graphite-600">
                        {item.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Approved Media Gallery */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {item.approvedMedia.map((media, mIdx) => (
                      <div
                        key={mIdx}
                        className="relative p-3 rounded bg-paper-warm border border-graphite-300 shadow-sketch"
                      >
                        <SketchTape position={mIdx === 0 ? "top-left" : "top-right"} />
                        <div className="relative aspect-[4/3] w-full rounded overflow-hidden bg-graphite-100 border border-graphite-200">
                          <Image
                            src={media.src}
                            alt={media.caption}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 350px"
                          />
                        </div>
                        <div className="pt-3 space-y-1">
                          {media.annotation && (
                            <span className="font-hand text-sm text-graphite-700 font-bold block">
                              ✎ {media.annotation}
                            </span>
                          )}
                          <p className="font-mono text-[11px] text-graphite-500 leading-snug">
                            {media.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-xl bg-paper-warm border-2 border-graphite-800 text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-graphite-950">
            Have a retail counter or product challenge?
          </h3>
          <p className="font-body text-sm text-graphite-600 max-w-md mx-auto">
            We sketch and build custom physical standees and software workflows that elevate customer engagement.
          </p>
          <div className="pt-2">
            <SketchButton href="/contact" variant="primary">
              <span>Commission a Deployment →</span>
            </SketchButton>
          </div>
        </div>

      </div>
    </div>
  );
}
