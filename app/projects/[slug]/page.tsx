import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS, getProjectBySlug } from "@/lib/data/projects";
import { ArrowUpRight, MapPin, CheckSquare } from "lucide-react";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study | GreenDot Build`,
    description: project.scopeSummary
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-16 space-y-16">
      <Breadcrumbs
        items={[
          { name: "Projects", url: "/projects" },
          { name: project.title, url: `/projects/${project.slug}` }
        ]}
      />

      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-[#153E2B] px-3 py-1 text-xs font-mono font-bold text-[#34D399] uppercase border border-[#34D399]/20">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#A1A8A3]">
            <MapPin className="h-3.5 w-3.5 text-[#C85A32]" />
            <span>{project.location}</span>
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif-editorial tracking-tight text-[#FBFBFA]">
          {project.title}
        </h1>
        <p className="text-sm md:text-base text-[#A1A8A3] leading-relaxed">{project.scopeSummary}</p>
      </div>

      {/* Visual Header Showcase Card */}
      <div className="relative flex h-72 md:h-96 w-full flex-col justify-between rounded-2xl border border-white/10 bg-[#1A1C1A] p-8 text-center shadow-lg">
        <div className="flex items-center justify-between text-xs font-mono text-[#6B7280]">
          <span>SYSTEM: {project.systemUsed}</span>
          <span className="text-[#34D399] font-bold">VERIFIED CASE DATA</span>
        </div>
        <div className="my-auto space-y-2">
          <span className="text-base font-serif-editorial text-[#FBFBFA] block">
            Architectural Case Study — {project.title}
          </span>
          <p className="text-xs text-[#A1A8A3] max-w-md mx-auto italic">
            {project.imagePlaceholder.caption}
          </p>
        </div>
        <div className="text-[11px] font-mono text-[#6B7280]">
          Location: {project.location}
        </div>
      </div>

      {/* Case Study Narrative Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Problem & Site */}
          <div className="rounded-xl border border-white/10 bg-[#1A1C1A] p-6 space-y-4 hover:border-[#34D399]/30 transition-all">
            <h2 className="text-xl font-serif-editorial text-[#FBFBFA]">1. The Initial Problem &amp; Site Conditions</h2>
            <p className="text-xs text-[#A1A8A3] leading-relaxed">
              <strong className="text-[#FBFBFA]">The Problem: </strong>{project.problem}
            </p>
            <p className="text-xs text-[#A1A8A3] leading-relaxed">
              <strong className="text-[#FBFBFA]">Site Condition: </strong>{project.siteCondition}
            </p>
          </div>

          {/* Requirement & Approach */}
          <div className="rounded-xl border border-white/10 bg-[#1A1C1A] p-6 space-y-4 hover:border-[#34D399]/30 transition-all">
            <h2 className="text-xl font-serif-editorial text-[#FBFBFA]">2. Client Requirement &amp; Engineering Approach</h2>
            <p className="text-xs text-[#A1A8A3] leading-relaxed">
              <strong className="text-[#FBFBFA]">Client Requirement: </strong>{project.requirement}
            </p>
            <p className="text-xs text-[#A1A8A3] leading-relaxed">
              <strong className="text-[#FBFBFA]">GreenDot Approach: </strong>{project.approach}
            </p>
          </div>

          {/* Execution Highlights */}
          <div className="rounded-xl border border-white/10 bg-[#1A1C1A] p-6 space-y-4 hover:border-[#34D399]/30 transition-all">
            <h2 className="text-xl font-serif-editorial text-[#FBFBFA]">3. Key Execution Highlights</h2>
            <ul className="space-y-3">
              {project.executionHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[#A1A8A3]">
                  <CheckSquare className="h-4 w-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="rounded-xl border border-[#34D399]/30 bg-[#153E2B]/20 p-6 space-y-2">
            <h2 className="text-xl font-serif-editorial text-[#34D399]">4. Project Result &amp; Handover</h2>
            <p className="text-xs text-[#FBFBFA] font-medium leading-relaxed">{project.result}</p>
          </div>
        </div>

        {/* Project Meta Card */}
        <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#1A1C1A] p-6 space-y-6">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FBFBFA] border-b border-white/10 pb-3">
            Case Overview
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#6B7280] block">Category</span>
              <span className="font-semibold text-[#FBFBFA]">{project.category}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#6B7280] block">Location</span>
              <span className="font-semibold text-[#FBFBFA]">{project.location}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#6B7280] block">System Employed</span>
              <span className="font-semibold text-[#34D399]">{project.systemUsed}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#6B7280] block">Timeline Performance</span>
              <span className="font-semibold text-[#C85A32]">{project.timelineStatus}</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C85A32] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b54f2a] transition-all shadow-lg"
            >
              <span>Build A Similar Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
