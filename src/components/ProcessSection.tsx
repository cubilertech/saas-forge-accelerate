"use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { ProcessSectionProps } from "@/types";

interface Beam {
  id: number;
  x: number;
  duration: number;
}

export default function ProcessSection({
  processSteps,
  isVisible,
}: ProcessSectionProps) {
  return (
    <section
      id="process"
      data-animate
      className={`relative px-6 py-20 bg-grid-pattern transition-all duration-1000 ${
        isVisible("process")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/95"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Launch-Ready Process{" "}
            <span className="text-primary">Powered by AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We streamline every step with AI, taking you from concept to live
            product fast and ready for your first users in 4 weeks.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-6 group">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 mt-20 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
