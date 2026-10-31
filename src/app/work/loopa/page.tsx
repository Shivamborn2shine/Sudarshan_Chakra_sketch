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
  Clock,
  CheckCircle2,
  UtensilsCrossed,
  Sparkles,
  ArrowLeft,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Loopa Product Story — BlackThrone",
  description:
    "The Full-Cycle Dining, Loyalty & Merchant Operations Engine. Development journey, zero-download loyalty ledger, tableside ordering, and private alpha waitlist.",
};

export default function LoopaPage() {
  const product = products.find((p) => p.slug === "loopa") || products[1];

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
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-mono text-xs font-bold uppercase">
                  {product.statusLabel}
                </span>
                <span className="font-mono text-xs text-graphite-400">ACTIVE ENGINEERING PHASE</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
                Loopa
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-graphite-700">
                {product.descriptor}
              </p>
            </div>

            {/* Authentic Brand Badge Container */}
            <div className="relative w-44 h-16 rounded border border-purple-300 bg-white p-2.5 flex items-center justify-center shadow-sm">
              <div className="relative w-full h-full">
                <Image
                  src={product.logoPath}
                  alt="Loopa official vivid purple/lime gradient loop logo"
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
            <SketchButton href="/contact?product=loopa" variant="primary">
              <span>Join Private Alpha Waitlist →</span>
            </SketchButton>

            <a
              href={product.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-graphite-300 hover:border-purple-500 bg-paper font-display text-sm font-semibold text-graphite-800 transition-colors shadow-sketch-sm"
            >
              <Instagram className="w-4 h-4 text-purple-600" />
              <span>Official Instagram @loopacards ↗</span>
            </a>
          </div>

        </div>

        {/* 5-Step Customer Loop Architecture */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-3">
            <h3 className="font-display font-black text-2xl text-graphite-950">
              The 5-Stage Frictionless Dining Loop
            </h3>
            <span className="font-mono text-xs text-graphite-500">SYSTEM FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                name: "Browse",
                desc: "Customer scans table QR to open rich visual menu with high-res photos and allergen tags in under 0.3s.",
              },
              {
                step: "02",
                name: "Order",
                desc: "Customizes modifiers, adds notes, and places order directly to the merchant kitchen display.",
              },
              {
                step: "03",
                name: "Pay",
                desc: "Split bills or settle immediately via UPI / card with zero app install or account creation.",
              },
              {
                step: "04",
                name: "Earn",
                desc: "Cashback and visit stamps accumulate instantly tied to customer mobile number.",
              },
              {
                step: "05",
                name: "Redeem",
                desc: "Rewards apply seamlessly on the next visit, creating high-frequency repeat habits.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-purple-600 block mb-1">
                    PHASE {st.step}
                  </span>
                  <h4 className="font-display font-bold text-lg text-graphite-950">
                    {st.name}
                  </h4>
                </div>
                <p className="font-body text-xs text-graphite-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-dashed border-graphite-300 pb-3">
            <h3 className="font-display font-black text-2xl text-graphite-950">
              Planned Platform Capabilities
            </h3>
            <span className="font-mono text-xs text-graphite-500">IN ACTIVE DEVELOPMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
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

        {/* Development Disclosure Box */}
        <div className="p-8 rounded-lg bg-amber-50/70 border border-amber-300 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-display font-bold text-sm">
            <Clock className="w-4 h-4" />
            <span>Development Transparency Note</span>
          </div>
          <p className="font-body text-xs text-amber-800 leading-relaxed max-w-3xl">
            Loopa is currently in active architecture and pilot development. Features shown above represent our functional prototype pipeline and private alpha testing with select merchant partners. General commercial availability is slated for 2027.
          </p>
        </div>

      </div>
    </div>
  );
}
