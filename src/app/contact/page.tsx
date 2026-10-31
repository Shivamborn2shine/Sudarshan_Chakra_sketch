import React from "react";
import { CtaSection } from "@/components/home/CtaSection";
import {
  MeasurementBracket,
  HandwrittenNote,
  SketchUnderline,
} from "@/components/brand/SketchDoodles";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/data/content";

export const metadata = {
  title: "Contact & Enquiry — BlackThrone",
  description:
    "Start an idea with BlackThrone. Enquiry form, official product Instagram channels, contact details, and studio location.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <MeasurementBracket label="INITIATION TERMINAL" />
            <div className="h-[1px] w-12 bg-graphite-300" />
            <HandwrittenNote text="✎ 24-hour response turnaround" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-graphite-950 tracking-tight">
            Start An Idea. <br />
            <span className="font-hand text-graphite-700 font-normal text-4xl sm:text-6xl">
              We&apos;ll build the way through.
            </span>
          </h1>

          <div className="w-56">
            <SketchUnderline />
          </div>

          <p className="font-body text-base sm:text-lg text-graphite-700 leading-relaxed">
            Whether you want to deploy OneScan360 hardware on your counters, pilot Loopa tableside loyalty, or commission a bespoke digital flagship—reach out below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email */}
          <div className="p-6 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-3">
            <div className="w-10 h-10 rounded border border-graphite-300 bg-paper flex items-center justify-center">
              <Mail className="w-5 h-5 text-graphite-800" />
            </div>
            <div>
              <span className="font-mono text-xs text-graphite-400 block uppercase">Direct Inbox</span>
              <a
                href={`mailto:${siteSettings.contactEmail}`}
                className="font-display font-bold text-base text-graphite-900 hover:text-black transition-colors"
              >
                {siteSettings.contactEmail}
              </a>
            </div>
            <p className="font-body text-xs text-graphite-500">
              Founder review within 24 hours.
            </p>
          </div>

          {/* Location */}
          <div className="p-6 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-3">
            <div className="w-10 h-10 rounded border border-graphite-300 bg-paper flex items-center justify-center">
              <MapPin className="w-5 h-5 text-graphite-800" />
            </div>
            <div>
              <span className="font-mono text-xs text-graphite-400 block uppercase">Studio Base</span>
              <p className="font-display font-bold text-base text-graphite-900">
                Indiranagar, Bengaluru
              </p>
            </div>
            <p className="font-body text-xs text-graphite-500">
              Karnataka, India · Active deployments nationwide.
            </p>
          </div>

          {/* Official Channels */}
          <div className="p-6 rounded-lg bg-paper-warm border border-graphite-300 shadow-sketch-sm space-y-3">
            <div className="w-10 h-10 rounded border border-graphite-300 bg-paper flex items-center justify-center">
              <Instagram className="w-5 h-5 text-graphite-800" />
            </div>
            <div>
              <span className="font-mono text-xs text-graphite-400 block uppercase">Official Product Channels</span>
              <div className="flex flex-col gap-1 pt-1 font-display text-xs font-bold">
                <a
                  href="https://www.instagram.com/onescan360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors flex items-center gap-1"
                >
                  <span>@onescan360</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.instagram.com/loopacards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors flex items-center gap-1"
                >
                  <span>@loopacards</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Interactive CTA Form */}
        <div>
          <CtaSection />
        </div>

      </div>
    </div>
  );
}

