"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InteractiveTechAssembly() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const assemblySteps = [
    {
      title: "1. Primary LGSF Structural Skeleton",
      tech: "Light Gauge Galvanised Steel (Z275)",
      desc: "Cold-formed steel studs precision CAD-manufactured to exact dimensions. High strength-to-weight ratio for zero structural slab overload.",
      role: "Structural Load-Bearing Core"
    },
    {
      title: "2. Rigid PUF Thermal Insulation Core",
      tech: "40 kg/m³ High-Density Polyurethane Foam",
      desc: "Sandwiched insulation layer providing ultra-low thermal transfer (0.022 W/mK), drastically reducing air conditioning energy load.",
      role: "Climate & Heat Defense"
    },
    {
      title: "3. Fibre Cement Exterior Weatherboards",
      tech: "Heavy-Duty Non-Combustible Cement Boards",
      desc: "Weatherproof, termite-proof exterior cladding engineered to resist Chennai coastal humidity and monsoon rain.",
      role: "Weather-Tight Envelope"
    },
    {
      title: "4. Concealed MEP & Turnkey Interior Lining",
      tech: "Pre-Punched Service Channels + Gypsum / Timber Lining",
      desc: "Factory pre-punched service holes for electrical conduits, plumbing, acoustic drop ceilings, and commercial flooring.",
      role: "Operational Interior Fit-Out"
    }
  ];

  return (
    <div className="rounded-2xl border border-architectural bg-white p-6 md:p-10 shadow-sm space-y-8">
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#153E2B]"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B]">
            Wall &amp; Roof Assembly Diagram
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#181B19]">
          Exploded Structural Layer Breakdown
        </h3>
        <p className="text-xs md:text-sm text-[#4A524D]">
          Our prefab structures are engineered as multi-layer building envelopes — combining steel strength, thermal insulation, weather barriers, and interior fit-out.
        </p>
      </div>

      {/* Assembly Steps Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Buttons List */}
        <div className="lg:col-span-5 space-y-3">
          {assemblySteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isActive
                    ? "border-[#153E2B] bg-[#153E2B]/5 shadow-sm"
                    : "border-architectural bg-paper hover:bg-[#F4F3ED]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isActive ? "text-[#153E2B]" : "text-[#181B19]"}`}>
                    {step.title}
                  </span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[#D96B43]"></span>}
                </div>
                <span className="text-[11px] text-[#79827B] block mt-1">{step.role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Technical Card */}
        <div className="lg:col-span-7 rounded-xl border border-architectural bg-paper p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-architectural pb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D96B43]">
              Layer 0{activeStep + 1} of 04
            </span>
            <span className="text-xs font-mono text-[#153E2B]">
              {assemblySteps[activeStep].role}
            </span>
          </div>

          <h4 className="text-xl font-bold text-[#181B19]">
            {assemblySteps[activeStep].title}
          </h4>

          <p className="text-xs font-mono font-bold text-[#153E2B]">
            Specification: {assemblySteps[activeStep].tech}
          </p>

          <p className="text-xs text-[#4A524D] leading-relaxed">
            {assemblySteps[activeStep].desc}
          </p>

          <div className="pt-4 border-t border-architectural flex items-center justify-between">
            <span className="text-[11px] text-[#79827B]">Engineered by GreenDot Build</span>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#153E2B] hover:underline"
            >
              <span>Explore All Construction Systems</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
