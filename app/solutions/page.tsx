import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SOLUTIONS } from "@/lib/data/solutions";
import { ArrowUpRight, ShieldCheck, Layers, Clock } from "lucide-react";

export const metadata = {
  title: "Prefabricated Space Solutions in Chennai & South India | GreenDot",
  description: "Explore GreenDot's customized prefabricated space solutions: rooftop extensions, garden cafés, coastal farmhouses, and commercial office annexes."
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen pb-20 md:pb-32">
      {/* Page Header */}
      <section className="border-b border-gray-200 py-12 md:py-16 bg-[#FAF9F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ name: "Space Solutions", url: "/solutions" }]} />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] block">
            Space Typology Directory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial text-[#111827] max-w-3xl leading-tight">
            Engineered Prefabricated Space Solutions
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed max-w-2xl font-sans">
            From terrace slab additions with 75% lower dead weight to fast-track commercial café shells and humidity-resilient coastal farmhouses.
          </p>
        </div>
      </section>

      {/* Main Directory Bento Showcase */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all hover:border-[#153E2B] shadow-md hover:shadow-xl"
            >
              <div>
                {/* Photo Viewport */}
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute top-3 right-3 bg-[#153E2B] text-white px-3 py-1 rounded-md text-[10px] font-mono font-bold">
                    {item.typicalAreaRange}
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#153E2B] font-bold block mb-1">
                  System: {item.recommendedSystem.split("+")[0]}
                </span>

                <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827] group-hover:text-[#153E2B] transition-colors mb-2">
                  {item.title}
                </h2>

                <p className="text-xs text-[#C85A32] font-mono font-semibold mb-3 italic">
                  &ldquo;{item.tagline}&rdquo;
                </p>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Challenges Solved Highlights */}
                <div className="space-y-2.5 pt-6 border-t border-gray-100 text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#111827] font-bold block mb-3">
                    Key Site Problems Solved:
                  </span>
                  {item.challengesSolved.slice(0, 2).map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[#4B5563]">
                      <ShieldCheck className="h-4 w-4 text-[#153E2B] shrink-0 mt-0.5" />
                      <span><strong className="text-[#111827] font-semibold">{c.challenge}:</strong> {c.solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-[#6B7280] flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#153E2B]" />
                  <span>Timeline: {item.typicalTimeline}</span>
                </span>
                <Link
                  href={`/solutions/${item.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-all"
                >
                  <span>View Solution Specs</span>
                  <ArrowUpRight className="h-4 w-4 text-[#C85A32]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20">
            Custom Plot &amp; Terrace Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#111827]">
            Have a unique site constraint in South India?
          </h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed font-sans">
            We engineer 100% customized CAD floorplans and structural steel framing tailored to your exact plot geometry, slab load limits, and functional goals.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C85A32] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all font-mono"
            >
              <span>Consult Engineering Team</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

