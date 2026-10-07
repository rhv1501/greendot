import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FOUNDER_DATA } from "@/lib/data/founder";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Clock } from "lucide-react";

export const metadata = {
  title: "About GreenDot Build & Interiors | Customized Prefab Construction",
  description: "Learn about GreenDot Build & Interiors — Chennai's premier customized prefab construction partner. Founder Hakash R's background, GREEN/DOT philosophy, and site-first execution model."
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
        <Breadcrumbs items={[{ name: "About", url: "/about" }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] block">
            About GreenDot Build &amp; Interiors
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#111827]">
            Bridging Architectural Vision &amp; Predictable Execution
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
            GreenDot is a Chennai-focused customized prefabricated construction and interior fit-out company serving Chennai and South India. We exist to replace construction uncertainty with defined scope, agreed cost, and planned timelines.
          </p>
        </div>

        {/* Brand Ethos: GREEN / DOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 space-y-4 hover:border-[#153E2B] transition-all shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#153E2B] text-white font-mono font-bold shadow-md">
              GREEN
            </div>
            <h2 className="text-2xl font-serif-editorial text-[#111827]">Sustainable &amp; Site-Adaptive</h2>
            <p className="text-xs text-[#4B5563] leading-relaxed font-sans">
              Our construction methodology prioritizes high-performance thermal insulation (PUF), precision cold-formed steel (LGSF), and weather-resilient fibre cement. By minimizing site water usage, heavy dead weight, and wet masonry waste, we build spaces that adapt seamlessly to urban slabs and coastal microclimates.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 space-y-4 hover:border-[#C85A32] transition-all shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C85A32] text-white font-mono font-bold shadow-md">
              DOT
            </div>
            <h2 className="text-2xl font-serif-editorial text-[#111827]">Planned Timeline + Agreed Cost</h2>
            <p className="text-xs text-[#4B5563] leading-relaxed font-sans">
              The &lsquo;DOT&rsquo; symbolizes precision, agreement, and completion. Before site kickoff, we provide an itemized specification and commercial schedule. We take single-point responsibility for structural shell erection and turnkey interior finishing, ensuring no contractor finger-pointing.
            </p>
          </div>
        </div>

        {/* Founder Story */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B]">
                Founder &amp; Technical Leadership
              </span>
              <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827] mt-1">
                Hakash R — Story &amp; Credibility
              </h2>
            </div>
            <div className="rounded-xl bg-[#153E2B]/10 border border-[#153E2B]/20 px-4 py-2 text-xs font-mono font-bold text-[#153E2B]">
              5+ YEARS FIELD EXPERIENCE • 100+ SITES
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4 font-mono text-xs">
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-gray-200 space-y-1.5">
                <span className="text-[10px] text-[#6B7280] uppercase block">Education &amp; Background</span>
                <p className="font-bold text-[#111827]">{FOUNDER_DATA.background}</p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-gray-200 space-y-1.5">
                <span className="text-[10px] text-[#6B7280] uppercase block">Geographic Footprint</span>
                <p className="font-bold text-[#153E2B]">{FOUNDER_DATA.geographicSpan}</p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-gray-200 space-y-1.5">
                <span className="text-[10px] text-[#6B7280] uppercase block">Site Exposure</span>
                <p className="font-bold text-[#111827]">Urban City Centers, Rooftops &amp; Remote Coastal Terrain</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-xs text-[#4B5563] leading-relaxed font-sans">
              {FOUNDER_DATA.bioNarrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">
                  Core Systems Exposure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUNDER_DATA.coreExposures.map((exp, i) => (
                    <div key={i} className="flex items-center gap-2.5 rounded-xl bg-[#FAF9F5] p-3.5 border border-gray-200">
                      <CheckCircle2 className="h-4 w-4 text-[#153E2B] shrink-0" />
                      <span className="text-xs font-medium text-[#111827]">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20">
            Start Your Project Assessment
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#111827]">
            Ready to work with a team that respects your vision and schedule?
          </h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed font-sans">
            Tell us about your rooftop, café, farmhouse, or commercial space requirement in Chennai or South India.
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

