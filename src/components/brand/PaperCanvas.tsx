"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PaperCanvasProps {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
  showCornerMarks?: boolean;
}

export const PaperCanvas: React.FC<PaperCanvasProps> = ({
  children,
  className,
  showGrid = true,
  showCornerMarks = true,
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-paper text-graphite-900 font-body selection:bg-graphite-200 selection:text-graphite-950",
        className
      )}
    >
      {/* Subtle Technical Graph Grid Background */}
      {showGrid && (
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[linear-gradient(to_right,#EAEAE6_1px,transparent_1px),linear-gradient(to_bottom,#EAEAE6_1px,transparent_1px)] bg-[size:32px_32px]"
          aria-hidden="true"
        />
      )}

      {/* Technical Drafting Registration Marks on Corners */}
      {showCornerMarks && (
        <div className="fixed inset-0 pointer-events-none z-20 select-none hidden md:block" aria-hidden="true">
          {/* Top-Left Corner */}
          <div className="absolute top-4 left-4 text-[9px] font-mono text-graphite-400 flex items-center gap-2">
            <span className="font-bold text-graphite-500">+</span>
            <span>00.00° / GRID.26</span>
          </div>

          {/* Top-Right Corner */}
          <div className="absolute top-4 right-4 text-[9px] font-mono text-graphite-400 flex items-center gap-2">
            <span>SCALE 1:1 [DRAFT]</span>
            <span className="font-bold text-graphite-500">+</span>
          </div>

          {/* Bottom-Left Corner */}
          <div className="absolute bottom-4 left-4 text-[9px] font-mono text-graphite-400 flex items-center gap-2">
            <span className="font-bold text-graphite-500">+</span>
            <span>BLACKTHRONE // SKETCHBOOK v2.0</span>
          </div>

          {/* Bottom-Right Corner */}
          <div className="absolute bottom-4 right-4 text-[9px] font-mono text-graphite-400 flex items-center gap-2">
            <span>WE BUILD THE WAY.</span>
            <span className="font-bold text-graphite-500">+</span>
          </div>
        </div>
      )}

      {/* Main Content Flow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
