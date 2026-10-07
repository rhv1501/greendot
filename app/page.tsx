import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { PROJECTS } from "@/lib/data/projects";
import { FOUNDER_DATA } from "@/lib/data/founder";

import HeroVideoSection from "@/components/HeroVideoSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import InteractiveOutcomes from "@/components/InteractiveOutcomes";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechComparison from "@/components/TechComparison";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 md:gap-32 md:pb-32 bg-[#FAF9F5] text-[#111827]">
      
      {/* 1. HERO SECTION WITH CLARITY */}
      <HeroVideoSection />

      {/* 2. THE PROBLEM */}
      <ProblemSection />

      {/* 3. THE SOLUTION */}
      <SolutionSection />

      {/* 4. HOW WE SOLVE IT BETTER (DIFFERENTIATION & PROOF) */}
      
      {/* 4A. TECHNICAL & MATERIAL COMPARISON MATRIX */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B]">
            System Superiority
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
            How We Solve It Better: Engineering Comparison
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
            See how GreenDot&apos;s customized prefabrication compares head-to-head against conventional brick masonry and uncoordinated contractors.
          </p>
        </div>

        <TechComparison />
      </section>

      {/* 4B. SPATIAL SOLUTIONS & TYPOLOGIES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block mb-1">
              Space Typologies
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
              What We Build
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-xs font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-all flex items-center gap-1.5 font-mono"
          >
            <span>View All Space Typologies</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <InteractiveOutcomes />
      </section>

      {/* 4C. 9-STEP PREDICTABLE EXECUTION PROTOCOL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="border-b border-gray-200 pb-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block mb-1">
            Execution Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
            Predictable Step-by-Step Delivery
          </h2>
        </div>

        <ProcessTimeline />
      </section>

      {/* 4D. SELECTED BUILT CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block mb-1">
              Verified Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
              Selected Built Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-all flex items-center gap-1.5 font-mono"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 4E. LEADERSHIP & FIELD CREDIBILITY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 space-y-6 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block">
                Leadership &amp; Field Credibility
              </span>
              <h2 className="text-3xl font-serif-editorial text-[#111827]">
                Founded by Hakash R
              </h2>
              <p className="text-xs font-mono text-[#153E2B] font-bold">
                {FOUNDER_DATA.role} • {FOUNDER_DATA.background}
              </p>

              <blockquote className="border-l-2 border-[#153E2B] pl-4 text-xs text-[#4B5563] leading-relaxed italic">
                &ldquo;{FOUNDER_DATA.quote}&rdquo;
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 text-xs font-mono">
                <div>
                  <span className="font-bold text-[#111827] text-base block">{FOUNDER_DATA.yearsExperience}</span>
                  <span className="text-[11px] text-[#6B7280]">Field Experience</span>
                </div>
                <div>
                  <span className="font-bold text-[#111827] text-base block">{FOUNDER_DATA.sitesSupervised}</span>
                  <span className="text-[11px] text-[#6B7280]">{FOUNDER_DATA.geographicSpan}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 text-xs text-[#4B5563] leading-relaxed font-sans">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#111827] font-bold mb-2">
                Field Background &amp; Site-First Approach
              </h3>
              {FOUNDER_DATA.bioNarrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4F. COMMERCIAL GOVERNANCE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 space-y-6 shadow-lg">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block mb-1">
              Commercial Governance
            </span>
            <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">
              Transparent Execution Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            <div className="space-y-1.5">
              <span className="font-bold text-[#111827] block flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#153E2B]" />
                <span>01. Defined Scope</span>
              </span>
              <p className="text-[#4B5563] leading-relaxed">Itemized bill of quantities with zero unpriced generic allowances.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-[#111827] block flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#153E2B]" />
                <span>02. Defined Specs</span>
              </span>
              <p className="text-[#4B5563] leading-relaxed">Steel gauge, PUF panel density, and cladding specs locked prior to signing.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-[#111827] block flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#153E2B]" />
                <span>03. Variation Protocol</span>
              </span>
              <p className="text-[#4B5563] leading-relaxed">Cost adjustments occur only upon explicit written client request.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-[#111827] block flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#153E2B]" />
                <span>04. Milestone Handover</span>
              </span>
              <p className="text-[#4B5563] leading-relaxed">Joint inspection and key handover upon full utility verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CONVERSION CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-14 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20 font-bold">
              Project Feasibility Intake
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827] leading-tight">
              Ready to Build Your Space with Total Certainty?
            </h2>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed font-sans">
              Share your site location, spatial purpose, and target budget in Chennai or South India. Our engineering team will review your requirement and evaluate structural feasibility.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C85A32] px-8 py-4 text-xs font-bold text-white hover:bg-[#b54f2a] transition-all shadow-lg uppercase tracking-wider"
            >
              <span>Tell Us What You Want To Build</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}



