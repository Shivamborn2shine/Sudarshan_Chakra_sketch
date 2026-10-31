import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/content";
import {
  SketchTape,
  MeasurementBracket,
  HandwrittenNote,
  SketchUnderline,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import {
  ArrowUpRight,
  Instagram,
  CheckCircle2,
  QrCode,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "OneScan360 Case Study — BlackThrone",
  description:
    "One QR. Frictionless Business Discovery & Direct Customer Action. Complete solution detail, physical countertop hardware, and Google review workflow.",
};

export default function OneScan360Page() {
  const product = products.find((p) => p.slug === "onescan360") || products[0];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-graphite-600 hover:text-graphite-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Work Archive</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-14 rounded-xl bg-paper-warm border-2 border-graphite-900 shadow-sketch-lg space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-dashed border-graphite-300 pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-mono text-xs font-bold uppercase">
                  {product.statusLabel}
                </span>
                <span className="font-mono text-xs text-graphite-400">HARDWARE & MOBILE HUB</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
                OneScan360
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-graphite-700">
                {product.descriptor}
              </p>
            </div>

            {/* Authentic Brand Badge Container */}
            <div className="relative w-44 h-16 rounded border border-cyan-400/30 bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 p-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-full h-full">
                <Image
                  src={product.logoPath}
                  alt="OneScan360 official neon badge branding"
                  fill
                  className="object-contain"
                  sizes="200px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Tagline & Deep Narrative */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-graphite-900">
              {product.tagline}
            </h2>
            <p className="font-body text-base text-graphite-700 leading-relaxed">
              {product.detailedDescription}
            </p>
          </div>

          {/* Official Instagram Action */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <SketchButton href="/contact?product=onescan360" variant="primary">
              <span>Deploy OneScan360 for Your Business →</span>
            </SketchButton>

            <a
              href={product.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-graphite-300 hover:border-pink-500 bg-paper font-display text-sm font-semibold text-graphite-800 transition-colors shadow-sketch-sm"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Official Instagram @onescan360 ↗</span>
            </a>
          </div>

        </div>

        {/* Real Hardware & UI Deployment Photos */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-3">
            <h3 className="font-display font-black text-2xl text-graphite-950">
              Photographic Deployment Proof
            </h3>
            <span className="font-mono text-xs text-graphite-500">REAL-WORLD COUNTERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Scoop n Brew Physical Stand */}
            <div className="p-4 rounded-lg bg-paper border border-graphite-300 shadow-sketch space-y-4">
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden border border-graphite-200">
                <Image
                  src="/assets/scoop-n-brew/WhatsApp Image 2026-10-29 at 6.57.51 PM.jpeg"
                  alt="OneScan360 architectural physical standee at Scoop n Brew order desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-graphite-900 block">
                  Scoop n Brew Gelato & Coffee
                </span>
                <p className="font-body text-xs text-graphite-600">
                  Dual-material acrylic standee placed directly in the customer line of sight at the ordering terminal.
                </p>
              </div>
            </div>

            {/* Wireless Customer Review Route */}
            <div className="p-4 rounded-lg bg-paper border border-graphite-300 shadow-sketch space-y-4">
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden border border-graphite-200 bg-white">
                <Image
                  src="/assets/wireless/exact-top-ui.png"
                  alt="OneScan360 direct Google Maps review routing mobile flow"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-graphite-900 block">
                  Wireless Tech Concierge
                </span>
                <p className="font-body text-xs text-graphite-600">
                  Assisted review interface giving satisfied walk-in patrons an immediate 1-tap route to verified Google reviews.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-3">
            <h3 className="font-display font-black text-2xl text-graphite-950">
              Core Technical Capabilities
            </h3>
            <span className="font-mono text-xs text-graphite-500">SPECIFICATION MATRIX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-display font-bold text-lg text-graphite-950">
                    {feat.title}
                  </h4>
                </div>
                <p className="font-body text-sm text-graphite-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Deployments Badge List */}
        <div className="p-8 rounded-lg bg-graphite-50 border border-graphite-300 space-y-3">
          <span className="font-mono text-xs uppercase font-bold text-graphite-700 block">
            Confirmed Active Deployments:
          </span>
          <div className="flex flex-wrap gap-3">
            {product.deployments?.map((dep, dIdx) => (
              <span
                key={dIdx}
                className="px-3 py-1.5 rounded bg-paper border border-graphite-300 font-display text-xs font-semibold text-graphite-800 shadow-xs"
              >
                ✓ {dep}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
