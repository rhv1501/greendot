import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Prefab Construction Case Studies & Projects | GreenDot Chennai",
  description: "Explore verified architectural case studies of prefabricated construction (LGSF, PUF, Hybrid) and commercial interior fit-outs in Chennai & South India."
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
      <Breadcrumbs items={[{ name: "Projects", url: "/projects" }]} />

      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#34D399]">
          Verified Case Studies
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#FBFBFA]">
          Architectural Projects &amp; Prefab Shell Showcase
        </h1>
        <p className="text-sm md:text-base text-[#A1A8A3] leading-relaxed">
          Every project represents a unique site constraint solved through customized LGSF framing, PUF insulation, and turnkey interior fit-outs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1C1A] to-[#111312] p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-serif-editorial text-[#FBFBFA]">Have a site with unique constraints?</h2>
        <p className="text-xs text-[#A1A8A3] max-w-md mx-auto leading-relaxed">
          We work backwards from your spatial requirement, site access, and budget.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C85A32] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b54f2a] transition-all"
          >
            <span>Tell Us What You Want To Build</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
