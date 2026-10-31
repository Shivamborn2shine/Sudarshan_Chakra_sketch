import React from "react";
import Link from "next/link";
import { MeasurementBracket, HandwrittenNote, SketchUnderline } from "@/components/brand/SketchDoodles";

export const metadata = {
  title: "Privacy Policy — BlackThrone",
  description: "BlackThrone privacy policy, DPDP Act 2023 compliance, data retention, and merchant protection standards.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-4">
          <MeasurementBracket label="LEGAL COMPLIANCE // DPDP 2023" />
          <h1 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
            Privacy Policy
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
            <h2 className="font-display font-bold text-lg text-graphite-950">1. Data Minimization by Design</h2>
            <p>
              BlackThrone operates under a strict principle of data minimization. When customers interact with a OneScan360 physical stand, we do not require mobile application downloads, biometric tracking, or intrusive device fingerprinting. Dynamic redirects to verified Google review pages occur directly in the user&apos;s default mobile browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">2. Customer Phone &amp; Loyalty Data (Loopa)</h2>
            <p>
              For our Loopa loyalty platform, customer telephone numbers are collected strictly with explicit consent at the point of ordering to maintain stamp balances and milestone rewards. We never sell, lease, or syndicate customer data to third-party ad networks or data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">3. DPDP Act 2023 &amp; Security Compliance</h2>
            <p>
              In accordance with the Digital Personal Data Protection (DPDP) Act 2023, users maintain the right to review, rectify, and permanently erase their recorded data. Ledger transactions are stored in encrypted cloud repositories with audit logging.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-graphite-950">4. Contact &amp; Grievance Redressal</h2>
            <p>
              For questions regarding privacy practices or data deletion requests, contact our privacy officer at{" "}
              <a href="mailto:privacy@blackthrone.tech" className="text-graphite-950 font-bold underline">
                privacy@blackthrone.tech
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
