import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategorySolution {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  system: string;
  href: string;
}

const SOLUTIONS: CategorySolution[] = [
  {
    id: "rooftop",
    title: "Rooftop Extensions & Annexes",
    subtitle: "Turn terrace slabs into living space",
    desc: "Engineered with 75% lower dead weight than RCC masonry, preventing structural stress on existing building foundations.",
    image: "/images/hero_rooftop.jpg",
    system: "LGSF Steel + PUF Insulation + Fibre Cement",
    href: "/solutions/rooftop-projects"
  },
  {
    id: "cafe",
    title: "Cafés & Commercial Shells",
    subtitle: "Fast-track launch for dining spaces",
    desc: "Factory-fabricated dry assembly minimizes pre-opening rental burn while incorporating heavy MEP utility conduits from day one.",
    image: "/images/hero_cafe.jpg",
    system: "Clear-Span Framing + Glazed Facade",
    href: "/solutions/cafes-restaurants"
  },
  {
    id: "farmhouse",
    title: "Coastal Farmhouses & Villas",
    subtitle: "Resilient retreats along ECR & coastal plots",
    desc: "Built with corrosion-resistant galvanised steel and weatherboards engineered to withstand monsoon downpours and humid salt air.",
    image: "/images/hero_farmhouse.jpg",
    system: "Heavy Galvanised Frame + Weatherboard Cladding",
    href: "/solutions/farmhouses-hospitality"
  }
];

export default function InteractiveOutcomes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SOLUTIONS.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#153E2B]/40 hover:shadow-xl shadow-sm"
        >
          <div>
            <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 bg-[#FAF9F5]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#153E2B] block mb-2 font-bold">
              {item.system}
            </span>

            <h3 className="text-xl font-serif-editorial text-[#111827] mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-[#4B5563] leading-relaxed mb-4 font-sans">
              {item.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link
              href={item.href}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-colors"
            >
              <span>Explore Solution</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}


