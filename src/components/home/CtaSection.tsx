"use client";

import React, { useState } from "react";
import {
  SketchUnderline,
  MeasurementBracket,
  HandwrittenNote,
  SketchButton,
  SketchCircle,
} from "@/components/brand/SketchDoodles";
import { CheckCircle2, Send, Sparkles, AlertCircle } from "lucide-react";
import { siteSettings } from "@/data/content";

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    challengeType: "Customer Discovery & Reviews",
    notes: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent spam block

    if (!formData.name.trim() || !formData.contact.trim() || !formData.notes.trim()) {
      setStatus("error");
      setErrorMessage("Please complete your name, contact method, and a short note on what you are imagining.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate reliable API submission with natural feedback
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-paper-warm border-b border-graphite-300 overflow-hidden">
      
      {/* Background delicate graph grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form Container */}
        <div className="relative rounded-xl bg-paper border-2 border-graphite-900 p-8 sm:p-12 md:p-14 shadow-sketch-lg">
          
          {/* Header */}
          <div className="space-y-4 mb-10 text-center">
            <div className="inline-flex items-center gap-2">
              <MeasurementBracket label="08 / START AN IDEA" />
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-graphite-950 tracking-tight">
              GOT AN IDEA THAT&apos;S <br />
              STILL A <SketchCircle color="#2D2D2D">SCRIBBLE?</SketchCircle>
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-graphite-800">
              Let&apos;s make it real.
            </p>

            <div className="w-48 mx-auto">
              <SketchUnderline />
            </div>

            <p className="font-body text-sm text-graphite-600 max-w-lg mx-auto">
              Tell us about your business, the friction you are experiencing, or the product you want to build. We reply within 24 hours with an actionable drawing and next steps.
            </p>
          </div>

          {/* Submission Success State */}
          {status === "success" ? (
            <div className="p-8 rounded-lg border-2 border-dashed border-emerald-500 bg-emerald-50/50 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-paper flex items-center justify-center mx-auto shadow-sketch-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display font-black text-2xl text-graphite-950">
                Scribble Received & Stamped.
              </h3>

              <p className="font-body text-sm text-graphite-700 max-w-md mx-auto">
                Thank you, <span className="font-bold">{formData.name}</span>. We have logged your enquiry. Our team is already sketching potential routes and will reach out to <span className="font-bold">{formData.contact}</span> promptly.
              </p>

              <div className="pt-2 font-hand text-base text-graphite-600">
                ✎ &ldquo;WE BUILD THE WAY.&rdquo;
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      contact: "",
                      challengeType: "Customer Discovery & Reviews",
                      notes: "",
                      honeypot: "",
                    });
                  }}
                  className="px-5 py-2 text-xs font-mono rounded border border-graphite-300 bg-paper hover:bg-graphite-50 transition-colors"
                >
                  Submit Another Thought →
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Spam honeypot hidden field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Alert */}
              {status === "error" && (
                <div className="p-3 rounded border border-red-300 bg-red-50 text-red-700 text-xs font-body flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs uppercase font-bold text-graphite-700">
                    Your Name / Business Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Maya Sharma / BlueDoor Bakery"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-graphite-300 bg-paper-warm text-graphite-900 placeholder:text-graphite-400 font-body text-sm outline-none focus:border-graphite-900 focus:bg-paper transition-all"
                  />
                </div>

                {/* Contact (Email or WhatsApp Phone) */}
                <div className="space-y-2">
                  <label htmlFor="contact" className="block font-mono text-xs uppercase font-bold text-graphite-700">
                    Contact (Email or WhatsApp) *
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    placeholder="e.g. maya@bluedoor.in or +91 98765..."
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-graphite-300 bg-paper-warm text-graphite-900 placeholder:text-graphite-400 font-body text-sm outline-none focus:border-graphite-900 focus:bg-paper transition-all"
                  />
                </div>
              </div>

              {/* Challenge Type Dropdown */}
              <div className="space-y-2">
                <label htmlFor="challenge" className="block font-mono text-xs uppercase font-bold text-graphite-700">
                  What kind of challenge is this?
                </label>
                <select
                  id="challenge"
                  value={formData.challengeType}
                  onChange={(e) => setFormData({ ...formData, challengeType: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-graphite-300 bg-paper-warm text-graphite-900 font-body text-sm outline-none focus:border-graphite-900 focus:bg-paper transition-all"
                >
                  <option value="Customer Discovery & Reviews">OneScan360 Counter Stand & Google Reviews</option>
                  <option value="Loyalty & Retention">Loopa Tableside Ordering & Zero-App Loyalty</option>
                  <option value="Intelligent Business Operations">Kitchen Automation & Operations Pipeline</option>
                  <option value="Bespoke Digital Product">Bespoke Web Flagship / Custom Application</option>
                  <option value="Unstructured Idea">I have a rough thought and need an engineering partner</option>
                </select>
              </div>

              {/* Note / Scribble */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="notes" className="block font-mono text-xs uppercase font-bold text-graphite-700">
                    Scribble the problem or possibility *
                  </label>
                  <span className="font-hand text-sm text-graphite-500">
                    ✎ bullet points or rough thoughts welcome
                  </span>
                </div>
                <textarea
                  id="notes"
                  required
                  rows={4}
                  placeholder="Tell us what you're imagining: current bottlenecks, footfall goals, target launch timeline, or why existing tools failed you..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-graphite-300 bg-paper-warm text-graphite-900 placeholder:text-graphite-400 font-body text-sm outline-none focus:border-graphite-900 focus:bg-paper transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-graphite-950 text-paper hover:bg-black font-display font-bold text-sm tracking-wide shadow-sketch transition-all duration-200 hover:shadow-sketch-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Sketching & Submitting...</span>
                  ) : (
                    <>
                      <span>Tell Us What You&apos;re Imagining →</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs font-mono text-graphite-500">
                  Direct review by BlackThrone founders. Zero spam.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

