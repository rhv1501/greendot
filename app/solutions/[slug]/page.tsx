import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/data/solutions";
import { ArrowUpRight, CheckCircle, ShieldCheck, Layers, Clock } from "lucide-react";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: [solution.title, solution.shortTitle, "Chennai construction", "prefab Chennai"]
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen pb-20 md:pb-32">
      {/* Top Header & Overview */}
      <section className="border-b border-gray-200 py-10 md:py-16 bg-[#FAF9F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Space Solutions", url: "/solutions" },
              { name: solution.shortTitle, url: `/solutions/${solution.slug}` }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3 py-1 rounded-md border border-[#153E2B]/20 font-bold">
                System: {solution.recommendedSystem}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial text-[#111827] leading-tight">
                {solution.title}
              </h1>

              <p className="text-base text-[#C85A32] font-mono font-semibold italic">
                &ldquo;{solution.tagline}&rdquo;
              </p>

              <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
                {solution.description}
              </p>
            </div>

            {/* Architectural Photo Viewport */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-lg">
                {solution.imageUrl && (
                  <Image
                    src={solution.imageUrl}
                    alt={solution.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                )}
                <div className="absolute bottom-3 left-3 bg-[#153E2B] text-white px-3 py-1 rounded-md text-[10px] font-mono font-bold">
                  Target Scale: {solution.typicalAreaRange}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Site Challenges Solved */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] block mb-1">
              Problem / Solution Analysis
            </span>
            <h2 className="text-2xl md:text-4xl font-serif-editorial text-[#111827]">
              Site Frustrations &amp; How GreenDot Solves Them
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.challengesSolved.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 space-y-3 shadow-md hover:border-[#153E2B] transition-all">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C85A32] font-bold block flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>Challenge 0{idx + 1}: {item.challenge}</span>
                </span>
                <p className="text-xs text-[#4B5563] leading-relaxed font-sans">
                  <strong className="text-[#111827] font-semibold">GreenDot Engineering Solution: </strong>
                  <span>{item.solution}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights & Specs Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">
              Key Architectural Features
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-3.5 shadow-md">
              {solution.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-[#4B5563] font-sans">
                  <CheckCircle className="h-4 w-4 text-[#153E2B] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium text-[#111827]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specs Box */}
          <div className="lg:col-span-5 rounded-2xl border border-gray-200 bg-white p-6 space-y-5 shadow-lg">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-gray-100 pb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#153E2B]" />
              <span>Project Parameters</span>
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-[10px] text-[#6B7280] uppercase block">Typical Area Scale</span>
                <span className="font-bold text-[#111827] text-sm">{solution.typicalAreaRange}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B7280] uppercase block">Timeline Target</span>
                <span className="font-bold text-[#153E2B] text-sm">{solution.typicalTimeline}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B7280] uppercase block">Execution Scope</span>
                <span className="text-xs text-[#4B5563] font-sans block mt-0.5">Turnkey Prefab Shell + Interior Fit-Out</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C85A32] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b54f2a] transition-all shadow-lg font-mono"
              >
                <span>Consult Engineering Team</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {solution.faq.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-gray-200 pb-3">
              <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.faq.map((f, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 space-y-2 shadow-sm hover:border-[#153E2B] transition-all">
                  <h3 className="text-sm font-semibold text-[#111827]">{f.q}</h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed font-sans">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conversion CTA Box */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20">
            Project Intake
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#111827]">
            Planning a {solution.shortTitle}?
          </h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed font-sans">
            Share your plot or terrace slab location in Chennai or South India. We will handle site evaluation and itemized scope planning.
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
        </section>

      </div>
    </div>
  );
}


