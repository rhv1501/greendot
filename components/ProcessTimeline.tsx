"use client";

import { useState } from "react";
import { FIVE_STEP_PROCESS } from "@/lib/data/process";
import { Check, Clock, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="space-y-8 text-[#111827]">
      
      {/* 5-Step Tab Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {FIVE_STEP_PROCESS.map((step) => {
          const isActive = step.stepNumber === activeStep;
          return (
            <button
              key={step.stepNumber}
              type="button"
              onClick={() => setActiveStep(step.stepNumber)}
              className={`rounded-xl p-3.5 text-left border transition-all ${
                isActive
                  ? "bg-[#153E2B] border-[#153E2B] text-white shadow-lg ring-2 ring-[#153E2B]/20"
                  : "bg-white border-gray-200 text-[#4B5563] hover:border-[#153E2B]/50 hover:bg-[#FAF9F5]"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={`font-bold ${isActive ? "text-[#34D399]" : "text-[#153E2B]"}`}>
                  STEP 0{step.stepNumber}
                </span>
                <span className={`text-[10px] ${isActive ? "text-gray-300" : "text-gray-400"}`}>
                  {step.duration}
                </span>
              </div>
              <h4 className="text-xs font-serif-editorial font-bold line-clamp-1">
                {step.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Selected Step Pointer Detail Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-6 shadow-xl">
        {(() => {
          const current = FIVE_STEP_PROCESS.find((s) => s.stepNumber === activeStep) || FIVE_STEP_PROCESS[0];
          return (
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#153E2B] font-bold block mb-1">
                    STAGE 0{current.stepNumber} OF 05 • {current.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">
                    {current.title}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg bg-[#FAF9F5] border border-gray-200 px-3.5 py-2 text-xs font-mono text-[#153E2B] font-bold">
                  <Clock className="h-4 w-4 text-[#C85A32]" />
                  <span>Timeline: {current.duration}</span>
                </div>
              </div>

              {/* 3 Key Pointer Bullet Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {current.pointers.map((pointer, i) => (
                  <div key={i} className="rounded-xl bg-[#FAF9F5] border border-gray-200 p-4 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#153E2B] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#153E2B] uppercase">Pointer 0{i + 1}</span>
                    </div>
                    <p className="text-xs text-[#374151] leading-relaxed font-sans font-normal">
                      {pointer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 5))}
                  className="text-[#6B7280] hover:text-[#111827] font-semibold"
                >
                  ← Step 0{activeStep > 1 ? activeStep - 1 : 5}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 1))}
                  className="font-bold text-[#153E2B] flex items-center gap-1.5 hover:underline"
                >
                  <span>Step 0{activeStep < 5 ? activeStep + 1 : 1}</span>
                  <ArrowRight className="h-4 w-4 text-[#C85A32]" />
                </button>
              </div>

            </div>
          );
        })()}
      </div>

      {/* Complete 5-Step Overview Grid for Quick Scanning */}
      <div className="pt-4 space-y-4">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280]">
          Complete 5-Step Summary Overview
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs font-sans">
          {FIVE_STEP_PROCESS.map((s) => (
            <div
              key={s.stepNumber}
              onClick={() => setActiveStep(s.stepNumber)}
              className={`cursor-pointer rounded-xl border p-4 space-y-2 transition-all ${
                s.stepNumber === activeStep
                  ? "bg-[#153E2B]/5 border-[#153E2B]"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="font-bold text-[#153E2B]">0{s.stepNumber}</span>
                <span className="text-[#6B7280]">{s.duration}</span>
              </div>
              <h5 className="font-serif-editorial font-bold text-[#111827]">{s.title}</h5>
              <ul className="space-y-1.5 text-[11px] text-[#4B5563] pt-1">
                {s.pointers.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="h-3 w-3 text-[#153E2B] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}



