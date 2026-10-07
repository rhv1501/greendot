import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/lib/data/services";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Prefabricated Construction & Interior Services in Chennai | GreenDot",
  description: "Explore GreenDot's customized construction services in Chennai: LGSF steel framing, PUF insulated sandwich panels, fibre cement weatherboards & commercial interiors."
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#111827] min-h-screen pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
        <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] block">
            GreenDot Construction Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#111827]">
            Engineered Prefab Systems &amp; Integrated Fit-Outs
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
            We combine structural steel framing, thermal envelope panels, and commercial interior fit-outs into a single coordinated service model across Chennai and South India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#153E2B] transition-all space-y-6 shadow-md hover:shadow-xl"
            >
              <div className="space-y-4">
                <span className="inline-block rounded-md bg-[#153E2B]/10 px-3 py-1 text-xs font-mono font-bold text-[#153E2B] border border-[#153E2B]/20">
                  {service.primarySystem}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">{service.title}</h2>
                <p className="text-xs text-[#4B5563] leading-relaxed font-sans">{service.description}</p>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-4">
                    Ideal Applications
                  </h3>
                  <ul className="space-y-2.5">
                    {service.idealFor.map((item, index) => (
                      <li key={index} className="flex items-center gap-2.5 text-xs text-[#4B5563] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-[#153E2B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] text-[#6B7280]">Engineered for South India</span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-all"
                >
                  <span>Full Technical Specs</span>
                  <ArrowUpRight className="h-4 w-4 text-[#C85A32]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/10 px-3.5 py-1 rounded-full border border-[#153E2B]/20">
            Technical Engineering Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#111827]">
            Need a custom material system for your site?
          </h2>
          <p className="text-xs md:text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed font-sans">
            Our structural engineers evaluate site load capacity, thermal goals, and wind speed parameters to recommend the perfect LGSF / PUF panel configuration.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C85A32] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all font-mono"
            >
              <span>Consult Technical Team</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

