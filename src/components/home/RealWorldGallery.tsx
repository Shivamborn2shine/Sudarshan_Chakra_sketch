"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/content";
import {
  SketchTape,
  MeasurementBracket,
  HandwrittenNote,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import { ArrowUpRight, Camera, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const RealWorldGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>("scoop-n-brew");
  const activeWork = works.find((w) => w.slug === selectedCase) || works[0];

  return (
    <section id="work" className="relative py-24 md:py-36 bg-paper border-b border-graphite-300 overflow-hidden">
      
      {/* Background drafting lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="05 / WORK IN THE REAL WORLD" />
              <div className="h-[1px] w-12 bg-graphite-300" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              Taped to the wall. <br />
              <span className="font-hand text-graphite-700 font-normal text-3xl sm:text-5xl">
                Actual deployments & verified proofs.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <HandwrittenNote text="genuine photo-prints with pencil notes ↗" className="hidden sm:inline-flex" />
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-graphite-800 hover:text-black transition-colors"
            >
              <span>View Full Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Client Selection Stepper Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {works.map((item) => {
            const isCurrent = item.slug === selectedCase;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setSelectedCase(item.slug)}
                className={cn(
                  "px-4 py-2 text-xs font-display font-semibold rounded border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-graphite-900",
                  isCurrent
                    ? "bg-graphite-900 text-paper border-graphite-900 shadow-sketch-sm"
                    : "bg-paper-warm text-graphite-700 border-graphite-300 hover:border-graphite-600 hover:text-graphite-950"
                )}
              >
                <span>{item.clientOrProduct}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Photo-Print Showcase Container */}
        <div className="relative rounded-lg bg-paper-warm border-2 border-graphite-800 p-6 sm:p-10 shadow-sketch-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Case Details & Outcomes */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">
                    {activeWork.permissionStatus}
                  </span>
                  <span className="font-mono text-xs text-graphite-500">
                    {activeWork.category}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-graphite-950 tracking-tight">
                  {activeWork.title}
                </h3>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-sm font-body text-graphite-700 leading-relaxed border-l-2 border-graphite-300 pl-4">
                <div>
                  <span className="font-mono text-xs font-bold text-graphite-500 block uppercase">
                    The Friction
                  </span>
                  <p>{activeWork.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-graphite-500 block uppercase">
                    The Built Solution
                  </span>
                  <p>{activeWork.solution}</p>
                </div>
              </div>

              {/* Actual Results Note */}
              {activeWork.actualResults && (
                <div className="p-4 rounded border border-graphite-300 bg-paper space-y-2">
                  <span className="font-mono text-xs uppercase font-bold text-graphite-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Real-World Results:</span>
                  </span>
                  <ul className="space-y-1.5 text-xs font-body text-graphite-600">
                    {activeWork.actualResults.map((res, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-graphite-400 font-bold">•</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deep Dive Action */}
              <div className="pt-2">
                <SketchButton
                  href={`/work#${activeWork.slug}`}
                  variant="primary"
                  className="w-full sm:w-auto text-xs px-6 py-2.5"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </SketchButton>
              </div>

            </div>

            {/* Right: Taped Photo Prints Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeWork.approvedMedia.map((media, mIdx) => {
                const tapePosition = mIdx === 0 ? "top-left" : "top-right";
                const tilt = mIdx === 0 ? "-rotate-1" : "rotate-1";

                return (
                  <div
                    key={mIdx}
                    className={cn(
                      "relative p-3 rounded bg-paper border border-graphite-300 shadow-sketch transition-transform duration-300 hover:rotate-0 hover:shadow-sketch-md",
                      tilt
                    )}
                  >
                    {/* Drafting Tape Mount */}
                    <SketchTape position={tapePosition} />

                    {/* Photo Container */}
                    <div className="relative aspect-[4/3] w-full rounded overflow-hidden bg-graphite-100 border border-graphite-200">
                      <Image
                        src={media.src}
                        alt={media.caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    </div>

                    {/* Pencil Caption */}
                    <div className="pt-3 space-y-1">
                      {media.annotation && (
                        <span className="font-hand text-sm text-graphite-600 font-bold block">
                          ✎ {media.annotation}
                        </span>
                      )}
                      <p className="font-mono text-[11px] text-graphite-500 leading-snug">
                        {media.caption}
                      </p>
                    </div>

                    {/* Corner Photo Index */}
                    <div className="absolute bottom-2 right-2 font-mono text-[9px] text-graphite-400">
                      IMG_0{mIdx + 1}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
