import { Zap, ShieldCheck, ThermometerSnowflake, FileCheck2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "3x Faster Completion",
      desc: "Offsite precision CAD fabrication and dry-assembly erection reduce construction timelines from months to weeks with minimal site disruption.",
      stat: "4 to 6 Weeks Handover"
    },
    {
      icon: ShieldCheck,
      title: "75% Lower Dead Weight",
      desc: "High-strength Cold-Formed Steel (LGSF) framing delivers engineered structural stability without overloading existing terrace slabs.",
      stat: "Ideal for Rooftop Slabs"
    },
    {
      icon: ThermometerSnowflake,
      title: "Climate-Tuned Insulation",
      desc: "High-density PUF sandwich panels reject South India’s extreme solar radiation, dramatically cutting indoor HVAC energy consumption.",
      stat: "Built for Tropical Heat"
    },
    {
      icon: FileCheck2,
      title: "Single-Point Turnkey Delivery",
      desc: "From structural steel framing to electrical, plumbing, micro-cement flooring, and interior fit-outs—one team, one contract.",
      stat: "Zero Subcontractor Finger-Pointing"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-gray-200 pb-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B]">
            The GreenDot Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
            Customized Prefabrication + Integrated Turnkey Fit-Outs
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
            We work backwards from your spatial goal to engineer a high-performance prefab structure with agreed scope, fixed commercial terms, and planned execution.
          </p>
        </div>

        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-lg bg-[#153E2B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0E291C] transition-all shadow-md shrink-0"
        >
          <span>Explore All Typologies</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 hover:border-[#153E2B]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#153E2B]/10 border border-[#153E2B]/20 text-[#153E2B]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif-editorial text-[#111827]">{s.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-[11px] font-mono text-[#153E2B] font-semibold">
                ✓ {s.stat}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
