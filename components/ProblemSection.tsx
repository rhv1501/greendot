import { Clock, AlertTriangle, Scale, Layers, ShieldAlert } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      id: "01",
      icon: Clock,
      title: "Endless Site Delays & Weather Interruptions",
      desc: "Conventional brick-and-mortar building depends on monsoon weather, manual cement mixing, and long wet-curing cycles. What should be a quick 2-month space extension routinely turns into a 6-month site nightmare.",
      warning: "4–6 Months Average Delay in Wet Construction",
      illustration: {
        badLabel: "Traditional Masonry Construction",
        badVal: "6+ Months Curing & Rain Delays",
        badWidth: "w-full",
        goodLabel: "GreenDot Engineered Prefab System",
        goodVal: "3–4 Weeks On-Site Dry Erection",
        goodWidth: "w-[25%]"
      }
    },
    {
      id: "02",
      icon: Scale,
      title: "Roof Slab Overloading & Structural Cracks",
      desc: "Heavy concrete pillars and red clay bricks add thousands of kilograms of dead weight to existing terrace slabs. This threatens building structural safety, risks ceiling cracks below, and triggers local municipal clearance issues.",
      warning: "Heavy Dead Load Threatens Terrace Slabs",
      illustration: {
        badLabel: "Heavy Brick & Concrete Slab Load",
        badVal: "100% Full Structural Dead Weight",
        badWidth: "w-full",
        goodLabel: "LGSF Light Gauge Steel Framing",
        goodVal: "75% Lighter Slab Load Reduction",
        goodWidth: "w-[25%]"
      }
    },
    {
      id: "03",
      icon: AlertTriangle,
      title: "Unclear Price Estimates & Mid-Project Cost Hikes",
      desc: "Traditional contractors give vague verbal quotes with missing line items. Halfway through construction, unexpected costs for steel reinforcement, plastering, and electrical wiring force 25% to 40% budget overruns.",
      warning: "25% to 40% Unexpected Budget Hikes",
      illustration: {
        badLabel: "Unpriced Estimates & Verbal Quotes",
        badVal: "+25% to +40% Mid-Site Price Spikes",
        badWidth: "w-full",
        goodLabel: "GreenDot Itemized BOQ Contract",
        goodVal: "Fixed Price & Zero Hidden Costs",
        goodWidth: "w-[100%]"
      }
    },
    {
      id: "04",
      icon: Layers,
      title: "Fragmented Contractors & Blame Games",
      desc: "Hiring separate civil masonry workers, interior carpenters, electricians, and plumbers leads to poor coordination. When leaks or delays happen, no single contractor takes responsibility for final quality.",
      warning: "Fragmented Quality & No Single Accountability",
      illustration: {
        badLabel: "3-4 Uncoordinated Local Contractors",
        badVal: "Blame Gaps & Defect Finger-Pointing",
        goodLabel: "GreenDot Single-Point Turnkey Team",
        goodVal: "100% End-to-End Responsibility",
        goodWidth: "w-[100%]"
      }
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
      
      {/* Header with High-Impact SEO Keywords & Layman Clarity */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] bg-[#C85A32]/10 px-3.5 py-1 rounded-full border border-[#C85A32]/20 inline-block">
          CONSTRUCTION FAULTS VS. ENGINEERED STEEL SOLUTIONS • CHENNAI
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-[#111827]">
          Why Traditional Brick Construction Fails Modern Rooftop &amp; Space Extensions
        </h2>
        <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-sans">
          Building a rooftop room, terrace garden café, or commercial annex in Chennai shouldn&apos;t mean risking lower-ceiling cracks, enduring 6 months of noisy site chaos, or facing surprise price hikes. Conventional brick masonry adds massive dead load to existing slabs and relies on unpredictable wet curing. Discover how GreenDot&apos;s Light Gauge Steel Framing (LGSF) and dry modular assembly deliver 75% lighter, leak-proof, fixed-budget spaces in just 3 to 4 weeks.
        </p>
      </div>

      {/* Illustrative Problem Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-6 shadow-lg hover:border-[#C85A32] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Card Top Row: Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/20 font-mono font-bold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#6B7280]">
                    PROBLEM 0{p.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#111827]">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed font-sans font-normal">
                    {p.desc}
                  </p>
                </div>

                {/* Visual Illustrative Comparison Bar / Diagram */}
                <div className="rounded-xl bg-[#FAF9F5] border border-gray-200 p-4 space-y-3 font-mono text-xs">
                  
                  {/* Traditional Pain Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#DC2626] font-bold">
                      <span>{p.illustration.badLabel}</span>
                      <span>{p.illustration.badVal}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-red-100 overflow-hidden">
                      <div className="h-full bg-[#DC2626] rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* GreenDot Solution Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] text-[#153E2B] font-bold">
                      <span>{p.illustration.goodLabel}</span>
                      <span>{p.illustration.goodVal}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-emerald-100 overflow-hidden">
                      <div className={`h-full bg-[#153E2B] rounded-full ${p.illustration.goodWidth || "w-full"}`}></div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Warning Stat Footnote */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[#C85A32] font-bold flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 shrink-0" />
                  <span>⚠️ {p.warning}</span>
                </span>
                <span className="text-[10px] text-[#6B7280] uppercase tracking-wider font-bold">
                  Site Risk Factor
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}


