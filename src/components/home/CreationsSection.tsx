"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/content";
import { MeasurementBracket, HandwrittenNote, SketchUnderline, SketchButton } from "@/components/brand/SketchDoodles";
import { ArrowUpRight, Instagram, CheckCircle2, Clock, Pause, Play, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const CreationsSection: React.FC = () => {
  const [onescan, loopa] = products;
  const [isDrifting, setIsDrifting] = useState(true);

  return (
    <section id="creations" className="relative py-24 md:py-36 bg-paper-warm border-b border-graphite-300 overflow-hidden">
      
      {/* Background delicate graph grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Loose graphite orbit connector path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-visible opacity-35"
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 250 200 C 450 100, 750 650, 950 500"
          stroke="#747474"
          strokeWidth="1.8"
          strokeDasharray="6 6"
        />
        <circle cx="250" cy="200" r="4" fill="#2D2D2D" />
        <circle cx="950" cy="500" r="4" fill="#2D2D2D" />
        <text x="560" y="380" font-family="cursive" font-size="14" fill="#747474">
          ✎ continuous engineering orbit
        </text>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <MeasurementBracket label="04 / PRODUCT ECOSYSTEM" />
              <div className="h-[1px] w-12 bg-graphite-300" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              Our Creations. <br />
              <span className="font-hand text-graphite-700 font-normal text-3xl sm:text-5xl">
                Two flagship products. One cohesive standard.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Drift Pause Control */}
            <button
              type="button"
              onClick={() => setIsDrifting(!isDrifting)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-graphite-300 bg-paper text-graphite-600 hover:text-graphite-900 transition-colors"
              title="Pause or resume ambient card drift animation"
            >
              {isDrifting ? (
                <>
                  <Pause className="w-3 h-3" />
                  <span>Pause Motion</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Resume Drift</span>
                </>
              )}
            </button>
            <HandwrittenNote text="surrounding site stays white ↗" className="hidden sm:inline-flex" />
          </div>
        </div>

        {/* Two Large Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* PRODUCT 1: ONESCAN360 (ACTIVE SOLUTION) */}
          <div
            className={cn(
              "group relative rounded-xl bg-paper border-2 border-graphite-800 p-8 sm:p-10 shadow-sketch-lg transition-transform duration-500 flex flex-col justify-between",
              isDrifting ? "hover:rotate-0 rotate-[-0.75deg]" : ""
            )}
          >
            {/* Top Draft Registration */}
            <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active Solution · Verified</span>
              </div>
              <span className="font-mono text-xs text-graphite-400">DEPLOYMENT READY</span>
            </div>

            <div className="space-y-6">
              
              {/* Product Header & Original Branding Container */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-graphite-950 tracking-tight">
                    {onescan.name}
                  </h3>
                  <p className="font-serif italic text-lg text-graphite-600">
                    {onescan.descriptor}
                  </p>
                </div>

                {/* Saturated Original Branding Badge (Bounded Intentional Box) */}
                <div className="relative w-36 h-12 rounded border border-cyan-400/30 bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 p-2 flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={onescan.logoPath}
                      alt="OneScan360 official neon badge branding"
                      fill
                      className="object-contain"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>

              {/* Tagline & Summary */}
              <div className="space-y-2">
                <p className="font-display font-bold text-base text-graphite-800">
                  {onescan.tagline}
                </p>
                <p className="font-body text-sm text-graphite-600 leading-relaxed">
                  {onescan.summary}
                </p>
              </div>

              {/* Real Imagery Showcase Window (Genuine Stand + UI) */}
              <div className="relative rounded-lg border border-graphite-300 bg-graphite-50 p-4 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-graphite-500 border-b border-graphite-200 pb-2">
                  <span>DEPLOYED HARDWARE & UI</span>
                  <span>SCOOP N BREW COUNTER</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Real Countertop Stand Photo */}
                  <div className="relative h-44 rounded border border-graphite-300 overflow-hidden group/img">
                    <Image
                      src="/assets/scoop-n-brew/WhatsApp Image 2026-10-29 at 6.57.51 PM.jpeg"
                      alt="OneScan360 physical acrylic countertop stand at Scoop n Brew"
                      fill
                      className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                    <div className="absolute bottom-1 left-1 bg-graphite-900/80 backdrop-blur-xs text-paper px-2 py-0.5 rounded text-[9px] font-mono">
                      Physical Acrylic Stand
                    </div>
                  </div>

                  {/* Real UI Screen */}
                  <div className="relative h-44 rounded border border-graphite-300 overflow-hidden group/img">
                    <Image
                      src="/assets/wireless/exact-top-ui.png"
                      alt="OneScan360 review generation mobile interface UI"
                      fill
                      className="object-contain bg-white transition-transform duration-300 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                    <div className="absolute bottom-1 left-1 bg-graphite-900/80 backdrop-blur-xs text-paper px-2 py-0.5 rounded text-[9px] font-mono">
                      Customer Review Flow
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono text-graphite-600">
                  <span className="font-bold text-graphite-800">Verified at:</span>
                  <span className="px-2 py-0.5 rounded bg-paper border border-graphite-200">Scoop n Brew</span>
                  <span className="px-2 py-0.5 rounded bg-paper border border-graphite-200">Bluedoor Cafe</span>
                  <span className="px-2 py-0.5 rounded bg-paper border border-graphite-200">Wireless Tech</span>
                </div>
              </div>

            </div>

            {/* CTAs & Official Links */}
            <div className="pt-8 border-t border-dashed border-graphite-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <SketchButton href="/work/onescan360" variant="primary" className="w-full sm:w-auto text-xs px-6 py-2.5">
                <span>View OneScan360 Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </SketchButton>

              <a
                href={onescan.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-graphite-700 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram ↗</span>
              </a>
            </div>

          </div>

          {/* PRODUCT 2: LOOPA (IN DEVELOPMENT) */}
          <div
            className={cn(
              "group relative rounded-xl bg-paper border-2 border-graphite-800 p-8 sm:p-10 shadow-sketch-lg transition-transform duration-500 flex flex-col justify-between",
              isDrifting ? "hover:rotate-0 rotate-[0.75deg]" : ""
            )}
          >
            {/* Top Draft Registration */}
            <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-300 text-xs font-mono font-bold uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>In Development · Private Alpha</span>
              </div>
              <span className="font-mono text-xs text-graphite-400">ROADMAP 2027</span>
            </div>

            <div className="space-y-6">
              
              {/* Product Header & Original Branding Container */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-graphite-950 tracking-tight">
                    {loopa.name}
                  </h3>
                  <p className="font-serif italic text-lg text-graphite-600">
                    {loopa.descriptor}
                  </p>
                </div>

                {/* Saturated Original Branding Badge (Bounded Intentional Box) */}
                <div className="relative w-36 h-12 rounded border border-purple-300 bg-white p-2 flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={loopa.logoPath}
                      alt="Loopa official vivid purple/lime gradient loop logo"
                      fill
                      className="object-contain"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>

              {/* Tagline & Summary */}
              <div className="space-y-2">
                <p className="font-display font-bold text-base text-graphite-800">
                  {loopa.tagline}
                </p>
                <p className="font-body text-sm text-graphite-600 leading-relaxed">
                  {loopa.summary}
                </p>
              </div>

              {/* Loopa Interactive Architecture & Flow Diagram */}
              <div className="relative rounded-lg border border-graphite-300 bg-graphite-50 p-4 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-graphite-500 border-b border-graphite-200 pb-2">
                  <span>5-STAGE LOOP ARCHITECTURE</span>
                  <span>ZERO APP INSTALL</span>
                </div>

                {/* 5-step loop diagram */}
                <div className="grid grid-cols-5 gap-1.5 text-center">
                  {[
                    { step: "01", name: "Browse" },
                    { step: "02", name: "Order" },
                    { step: "03", name: "Pay" },
                    { step: "04", name: "Earn" },
                    { step: "05", name: "Redeem" },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="p-2 rounded bg-paper border border-graphite-200 group-hover:border-purple-300 transition-colors"
                    >
                      <span className="font-mono text-[9px] text-purple-600 font-bold block">{s.step}</span>
                      <span className="font-display text-[11px] font-bold text-graphite-900 block">{s.name}</span>
                    </div>
                  ))}
                </div>

                {/* Real UI Snapshot of Menu & Ledger */}
                <div className="relative h-32 rounded border border-graphite-300 overflow-hidden">
                  <Image
                    src="/assets/bluedoor/hero-food-collage.jpg"
                    alt="Loopa digital tableside dining menu preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] font-mono text-paper">
                      Visual Menu Ordering & Customer Reward Ledger
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-graphite-600">
                  <span>Merchant Control Hub: Live Kitchen Display & Retention Telemetry</span>
                  <span className="text-purple-600 font-bold">Alpha Waitlist</span>
                </div>
              </div>

            </div>

            {/* CTAs & Official Links */}
            <div className="pt-8 border-t border-dashed border-graphite-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <SketchButton href="/work/loopa" variant="primary" className="w-full sm:w-auto text-xs px-6 py-2.5">
                <span>View Loopa Product Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </SketchButton>

              <a
                href={loopa.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-graphite-700 hover:text-purple-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram ↗</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

