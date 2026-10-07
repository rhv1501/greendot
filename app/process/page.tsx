import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "5-Step Execution Process | GreenDot Build & Interiors",
  description: "Learn how GreenDot moves your construction project from requirement to handover with defined scope, agreed cost, and planned timelines."
};

export default function ProcessPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
        <Breadcrumbs items={[{ name: "Process", url: "/process" }]} />

        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B]">
            Predictable Construction System
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#111827]">
            Our 5-Step Execution Framework
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
            We replace fragmented contractor handoffs and vague estimates with a transparent, milestone-driven 5-step execution model.
          </p>
        </div>

        <ProcessTimeline />

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-serif-editorial text-[#111827]">Ready to Start Step 1 (Discovery &amp; Feasibility)?</h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed font-sans">
            Share your space goals and site location in Chennai or South India for a free feasibility assessment.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C85A32] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all font-mono"
            >
              <span>Tell Us What You Want To Build</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

