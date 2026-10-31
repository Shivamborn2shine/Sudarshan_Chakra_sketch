import React from "react";
import Link from "next/link";
import { MeasurementBracket, HandwrittenNote, SketchUnderline } from "@/components/brand/SketchDoodles";

export const metadata = {
  title: "Terms of Service — BlackThrone",
  description: "BlackThrone terms of service, merchant software agreements, and physical standee warranties.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-4">
          <MeasurementBracket label="LEGAL COMPLIANCE // TERMS" />
          <h1 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
            Terms of Service
          </h1>
          <div className="w-48">
            <SketchUnderline />
          </div>
          <p className="font-mono text-xs text-graphite-500">
            LAST REVISED: OCTOBER 2026 · APPLIES TO BLACKTHRONE, ONESCAN360 &amp; LOOPA
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-xl bg-paper-warm border-2 border-graphite-800 shadow-sketch space-y-6 font-body text-sm text-graphite-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">1. Acceptance of Terms</h2>
            <p>
              By accessing the BlackThrone platform, ordering OneScan360 physical standees, or enrolling in Loopa merchant programs, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">2. Authentic Merchant Conduct &amp; Reviews</h2>
            <p>
              OneScan360 provides a direct routing conduit to Google Maps listings. Merchants agree not to use the service to incentivize false, fraudulent, or coerced reviews. All review actions must reflect genuine customer sentiment in compliance with Google Maps review guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">3. Physical Hardware Warranty &amp; Ownership</h2>
            <p>
              OneScan360 laser-etched acrylic and wooden standees are manufactured for durability in indoor hospitality and retail environments. Damaged hardware due to normal wear-and-tear within 90 days of delivery qualifies for expedited replacement under our merchant warranty.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">4. Intellectual Property</h2>
            <p>
              The BlackThrone name, &ldquo;WE BUILD THE WAY&rdquo; trademark, Sudarshan Chakra emblem design, OneScan360 branding, and Loopa identity are protected proprietary assets of BlackThrone Technologies Pvt. Ltd.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
