import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";
import { generateServiceSchema } from "@/lib/seo";
import { ArrowUpRight, CheckCircle2, Layers, HelpCircle, ShieldCheck } from "lucide-react";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.title, service.shortTitle, "Chennai prefab construction", "LGSF Chennai", "PUF panels Chennai"]
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug
  });

  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: service.shortTitle, url: `/services/${service.slug}` }
          ]}
        />

        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="inline-block rounded-md bg-[#153E2B]/10 px-3 py-1 text-xs font-mono font-bold text-[#153E2B] border border-[#153E2B]/20">
            {service.primarySystem}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#111827]">
            {service.title}
          </h1>
          <p className="text-lg text-[#C85A32] font-mono font-semibold italic">{service.tagline}</p>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">{service.description}</p>
        </div>

        {/* Grid: Benefits & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Key Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">Key Architectural &amp; Project Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.keyBenefits.map((b, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 space-y-2 hover:border-[#153E2B] transition-all shadow-md">
                  <h3 className="text-sm font-bold text-[#153E2B] flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C85A32] shrink-0" />
                    <span>{b.title}</span>
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed font-sans">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-3 shadow-md">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">Technical Overview</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed font-sans">{service.technicalOverview}</p>
            </div>
          </div>

          {/* Technical Specs Card */}
          <div className="lg:col-span-5 rounded-2xl border border-gray-200 bg-white p-6 space-y-6 shadow-lg">
            <h3 className="text-base font-serif-editorial text-[#111827] flex items-center gap-2.5 border-b border-gray-100 pb-4">
              <Layers className="h-5 w-5 text-[#153E2B]" />
              <span>Technical Specifications</span>
            </h3>

            <dl className="space-y-4 text-xs font-mono">
              {service.specifications.map((spec, index) => (
                <div key={index} className="flex flex-col border-b border-gray-100 pb-3">
                  <dt className="text-[10px] uppercase tracking-wider text-[#6B7280]">
                    {spec.label}
                  </dt>
                  <dd className="font-bold text-[#111827] mt-1">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="pt-2">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C85A32] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b54f2a] transition-all shadow-lg font-mono"
              >
                <span>Request Technical Feasibility</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 space-y-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">System Execution Sequence</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.processOverview.map((step, idx) => (
              <li key={idx} className="rounded-xl border border-gray-200 bg-[#FAF9F5] p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-[#C85A32]">Step 0{idx + 1}</span>
                <p className="text-xs font-medium text-[#111827] font-sans">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Service FAQs */}
        {service.faq.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827] flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-[#153E2B]" />
              <span>Service Specific Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.faq.map((f, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 space-y-2 shadow-sm hover:border-[#153E2B] transition-all">
                  <h3 className="text-sm font-semibold text-[#111827]">{f.q}</h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed font-sans">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20">
            Project Intake
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#111827]">Have a project requiring {service.shortTitle}?</h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed font-sans">
            Contact our technical engineering team for a site assessment and itemized quotation.
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

