"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, ChevronRight, Layers, Clock, Sparkles, Check } from "lucide-react";

const SPACE_TYPOLOGIES = [
  {
    id: "rooftop",
    title: "Rooftop Extension",
    subtitle: "Terrace Studios & Slab Additions",
    timeline: "3 – 4 Weeks",
    image: "/images/hero_rooftop.jpg",
    link: "/solutions/rooftop-projects",
    tag: "75% LIGHTER"
  },
  {
    id: "cafe",
    title: "Café & Commercial",
    subtitle: "Fast-Track Outlets & Dining Shells",
    timeline: "3 – 5 Weeks",
    image: "/images/hero_cafe.jpg",
    link: "/solutions/cafes-restaurants",
    tag: "TURNKEY SHELLS"
  },
  {
    id: "farmhouse",
    title: "Coastal Farmhouse",
    subtitle: "Weather-Resilient Villas",
    timeline: "4 – 6 Weeks",
    image: "/images/hero_farmhouse.jpg",
    link: "/solutions/farmhouses-hospitality",
    tag: "R-18 THERMAL"
  },
  {
    id: "office",
    title: "Studio Annex",
    subtitle: "Modular Workspaces",
    timeline: "2 – 4 Weeks",
    image: "/images/hero_rooftop.jpg",
    link: "/solutions/commercial-spaces",
    tag: "QUICK ASSEMBLY"
  }
];

export default function HeroVideoSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] flex flex-col justify-between bg-[#FAF9F5] text-[#111827] py-6 md:py-8 border-b border-gray-200 overflow-hidden">
      
      {/* Background Video Canvas with Vibrant Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_rooftop.jpg"
          className="h-full w-full object-cover filter contrast-[1.08] brightness-[0.98]"
        >
          <source src="/greendot.mp4" type="video/mp4" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Subtle Vignette Gradient Overlay so Video is Clearly Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/60 via-[#FAF9F5]/30 to-[#FAF9F5]/90"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 flex-1 flex flex-col justify-center space-y-6 md:space-y-8 text-center my-auto">
        
        {/* Minimal Centered Hero Header with Glass Backdrop for High Text Contrast */}
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-5 rounded-3xl bg-white/40 backdrop-blur-md p-6 md:p-8 border border-white/60 shadow-lg">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#153E2B]/10 border border-[#153E2B]/20 px-4 py-1.5 text-xs font-mono text-[#153E2B]">
            <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse"></span>
            <span className="font-bold uppercase tracking-wider text-[11px] md:text-xs">CHENNAI &amp; SOUTH INDIA • CUSTOM PREFABRICATION</span>
          </div>

          {/* Minimal Bold Architectural Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial text-[#111827] leading-[1.1] tracking-tight">
            Architectural Steel &amp; <br />
            <span className="text-[#153E2B] italic">Modern Modular Spaces.</span>
          </h1>

          {/* Concise Sub-copy */}
          <p className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-2xl mx-auto font-sans font-medium">
            Custom structural steel shells and turnkey interior fit-outs in Chennai. Engineered for <span className="text-[#111827] font-bold">75% lighter load</span>, <span className="text-[#111827] font-bold">3-week assembly</span>, and guaranteed BOQ costs.
          </p>

          {/* Centered CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C85A32] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#b54f2a] transition-all font-mono"
            >
              <span>Tell Us What You Want To Build</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:bg-gray-50 transition-all shadow-sm font-mono"
            >
              <span>View Built Projects</span>
              <ChevronRight className="h-4 w-4 text-[#6B7280]" />
            </Link>
          </div>

          {/* Minimal Subtext */}
          <p className="text-[11px] md:text-xs font-mono text-[#4B5563] flex items-center justify-center gap-2 font-semibold pt-1">
            <ShieldCheck className="h-4 w-4 text-[#153E2B] shrink-0" />
            <span>100% Itemized BOQ • Zero Surprise Costs • Site Feasibility in 24 Hours</span>
          </p>

        </div>

        {/* Minimal Stats Row (Centered) */}
        <div className="pt-4 border-t border-gray-200/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-2.5 md:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-sm">
            <span className="block text-lg md:text-xl font-bold font-serif-editorial text-[#111827]">75% Lighter</span>
            <span className="text-[10px] md:text-[11px] font-mono text-[#6B7280]">Slab Dead Weight</span>
          </div>
          <div className="p-2.5 md:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-sm">
            <span className="block text-lg md:text-xl font-bold font-serif-editorial text-[#111827]">3 – 4 Weeks</span>
            <span className="text-[10px] md:text-[11px] font-mono text-[#6B7280]">Dry Assembly</span>
          </div>
          <div className="p-2.5 md:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-sm">
            <span className="block text-lg md:text-xl font-bold font-serif-editorial text-[#111827]">R-18 Rating</span>
            <span className="text-[10px] md:text-[11px] font-mono text-[#6B7280]">Thermal Protection</span>
          </div>
          <div className="p-2.5 md:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-sm">
            <span className="block text-lg md:text-xl font-bold font-serif-editorial text-[#111827]">Fixed Scope</span>
            <span className="text-[10px] md:text-[11px] font-mono text-[#6B7280]">Itemized BOQ</span>
          </div>
        </div>

      </div>
    </section>
  );
}



