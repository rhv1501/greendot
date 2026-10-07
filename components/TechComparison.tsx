import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TechComparison() {
  const techMatrix = [
    {
      system: "LGSF Structural Frame",
      role: "Precision load-bearing skeleton",
      strength: "75% lighter than RCC masonry; CAD accuracy",
      idealUse: "Rooftop additions, structural expansions"
    },
    {
      system: "PUF Insulation Panels",
      role: "Thermal climate control core",
      strength: "Low thermal conductivity (0.022 W/mK)",
      idealUse: "Sun-exposed rooftops, cafés & offices"
    },
    {
      system: "Fibre Cement Boards",
      role: "Weatherproof exterior facade skin",
      strength: "Non-combustible, termite & moisture proof",
      idealUse: "Exterior cladding, coastal villas"
    },
    {
      system: "GreenDot Hybrid Assembly",
      role: "Integrated structural + fit-out system",
      strength: "Optimized thermal, acoustic & structural performance",
      idealUse: "Custom residential & commercial spaces"
    }
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 space-y-6 text-[#111827] shadow-lg">
      <div>
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#153E2B] block mb-1">
          Material &amp; Structural Comparison
        </span>
        <h3 className="text-2xl md:text-3xl font-serif-editorial text-[#111827]">
          Selecting the Appropriate Construction Technology
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-[#FAF9F5]">
              <th className="p-3.5 font-mono font-semibold uppercase tracking-wider text-[#111827]">System</th>
              <th className="p-3.5 font-mono font-semibold uppercase tracking-wider text-[#111827]">Structural Role</th>
              <th className="p-3.5 font-mono font-semibold uppercase tracking-wider text-[#111827]">Primary Advantage</th>
              <th className="p-3.5 font-mono font-semibold uppercase tracking-wider text-[#111827]">Recommended Use</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {techMatrix.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-3.5 font-bold text-[#111827]">{item.system}</td>
                <td className="p-3.5 text-[#4B5563]">{item.role}</td>
                <td className="p-3.5 text-[#4B5563]">{item.strength}</td>
                <td className="p-3.5 text-[#153E2B] font-bold">{item.idealUse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#6B7280]">
          Need advice on site loading or insulation specs?
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-colors"
        >
          <span>Consult Engineering Team</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}


