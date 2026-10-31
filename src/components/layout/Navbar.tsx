"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { SketchButton } from "@/components/brand/SketchDoodles";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoVariant, setLogoVariant] = useState<"chakra" | "ring">("chakra");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-paper/95 backdrop-blur-md border-b",
        scrolled ? "border-graphite-300 shadow-sketch-sm py-3" : "border-graphite-200 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Variant Toggle */}
        <div className="flex items-center gap-3">
          <Logo variant={logoVariant} size="md" />

          {/* Discreet Chakra/Ring treatment toggle */}
          <button
            type="button"
            onClick={() => setLogoVariant((prev) => (prev === "chakra" ? "ring" : "chakra"))}
            title={`Current outer treatment: ${logoVariant}. Click to switch to ${logoVariant === "chakra" ? "Double Ring" : "Sudarshan Chakra"}`}
            className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-graphite-500 hover:text-graphite-900 border border-graphite-200 hover:border-graphite-400 bg-paper-warm transition-colors"
          >
            <Compass className="w-3 h-3 text-graphite-600" />
            <span className="uppercase">{logoVariant}</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-sm tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-graphite-950 font-bold"
                    : "text-graphite-600 hover:text-graphite-950"
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-graphite-900 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <SketchButton href="/contact" variant="primary" className="text-xs px-5 py-2.5">
            <span>Start an Idea</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </SketchButton>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded text-graphite-800 hover:bg-graphite-100 border border-graphite-200 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-paper border-b border-graphite-300 shadow-sketch-md px-6 py-8 space-y-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-lg tracking-wide py-2 border-b border-dashed border-graphite-200",
                  pathname === link.href
                    ? "text-graphite-950 font-bold"
                    : "text-graphite-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <SketchButton href="/contact" variant="primary" className="w-full text-center py-3">
              <span>Start an Idea →</span>
            </SketchButton>

            {/* Emblem variant toggle in mobile */}
            <div className="flex items-center justify-between text-xs font-mono text-graphite-500 pt-2">
              <span>Emblem Style:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLogoVariant("chakra")}
                  className={cn(
                    "px-2.5 py-1 rounded border",
                    logoVariant === "chakra"
                      ? "bg-graphite-900 text-paper border-graphite-900 font-bold"
                      : "bg-paper text-graphite-700 border-graphite-300"
                  )}
                >
                  Chakra
                </button>
                <button
                  type="button"
                  onClick={() => setLogoVariant("ring")}
                  className={cn(
                    "px-2.5 py-1 rounded border",
                    logoVariant === "ring"
                      ? "bg-graphite-900 text-paper border-graphite-900 font-bold"
                      : "bg-paper text-graphite-700 border-graphite-300"
                  )}
                >
                  Double Ring
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

