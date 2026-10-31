"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SketchUnderline } from "@/components/brand/SketchDoodles";
import { ArrowUp, Instagram, ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-paper border-t border-graphite-300 py-16 md:py-20 overflow-hidden">
      {/* Background delicate grid line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-dashed border-graphite-300">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="chakra" size="lg" />
            
            <div className="pt-2">
              <p className="font-display font-extrabold text-2xl text-graphite-950 tracking-tight">
                WE BUILD THE WAY.
              </p>
              <div className="w-48 pt-1">
                <SketchUnderline />
              </div>
            </div>

            <p className="font-body text-sm text-graphite-600 max-w-sm leading-relaxed">
              Every solution begins as a sketch. We take unstructured ideas, test them on paper, and engineer technology that works in the real world.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-graphite-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for select engineering & product commissions</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-400 font-bold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-display">
              <li>
                <Link href="/" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Home (Sketchbook)
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Work & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Solutions & Systems
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  About BlackThrone
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Start an Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Products */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-400 font-bold">
              Creations
            </p>
            <ul className="space-y-2 text-sm font-display">
              <li>
                <Link href="/work/onescan360" className="text-graphite-700 hover:text-graphite-950 transition-colors flex items-center gap-1.5">
                  <span>OneScan360</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/work/loopa" className="text-graphite-700 hover:text-graphite-950 transition-colors flex items-center gap-1.5">
                  <span>Loopa</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 font-mono font-bold">ALPHA</span>
                </Link>
              </li>
              <li>
                <Link href="/work#scoop-n-brew" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Scoop n Brew Case
                </Link>
              </li>
              <li>
                <Link href="/work#wireless" className="text-graphite-700 hover:text-graphite-950 transition-colors">
                  Wireless Tech Case
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Social Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-400 font-bold">
              Official Channels
            </p>
            <div className="space-y-2.5">
              <a
                href="https://www.instagram.com/onescan360"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded border border-graphite-200 bg-paper hover:bg-graphite-50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-graphite-600 group-hover:text-pink-600 transition-colors" />
                  <div>
                    <p className="font-display text-xs font-bold text-graphite-900">OneScan360</p>
                    <p className="font-mono text-[10px] text-graphite-500">@onescan360</p>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-graphite-400 group-hover:text-graphite-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.instagram.com/loopacards"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded border border-graphite-200 bg-paper hover:bg-graphite-50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-graphite-600 group-hover:text-purple-600 transition-colors" />
                  <div>
                    <p className="font-display text-xs font-bold text-graphite-900">Loopa Cards</p>
                    <p className="font-mono text-[10px] text-graphite-500">@loopacards</p>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-graphite-400 group-hover:text-graphite-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-graphite-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} BlackThrone Technologies. All rights reserved.</span>
            <span className="text-graphite-300">|</span>
            <Link href="/privacy" className="hover:text-graphite-900 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-graphite-300">|</span>
            <Link href="/terms" className="hover:text-graphite-900 transition-colors">
              Terms of Service
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-graphite-700 hover:text-graphite-950 font-display transition-colors py-1 px-2.5 rounded border border-graphite-200 hover:border-graphite-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
