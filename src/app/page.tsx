import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemWall } from "@/components/home/ProblemWall";
import { ScribbleToShipped } from "@/components/home/ScribbleToShipped";
import { CreationsSection } from "@/components/home/CreationsSection";
import { RealWorldGallery } from "@/components/home/RealWorldGallery";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 01 — Sketchbook hero */}
      <HeroSection />

      {/* 02 — The problem wall */}
      <ProblemWall />

      {/* 03 — From scribble to shipped */}
      <ScribbleToShipped />

      {/* 04 — Our creations / ecosystem */}
      <CreationsSection />

      {/* 05 — Work in the real world */}
      <RealWorldGallery />

      {/* 06 — What we can help with */}
      <ServicesSection />

      {/* 07 — The BlackThrone way */}
      <PhilosophySection />

      {/* 08 — Open-ended creative CTA */}
      <CtaSection />
    </div>
  );
}

