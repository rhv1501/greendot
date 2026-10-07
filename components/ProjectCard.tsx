import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#153E2B]/40 hover:shadow-xl">
      <div>
        {/* Photo Container */}
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 bg-[#FAF9F5]">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs text-[#6B7280]">
              {project.imagePlaceholder.caption}
            </div>
          )}

          {/* Location Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono text-[#153E2B] border border-gray-200 font-semibold shadow-sm">
            {project.location}
          </div>
        </div>

        {/* Category & Title */}
        <span className="text-xs font-mono uppercase tracking-wider text-[#153E2B] block mb-2 font-bold">
          {project.category}
        </span>

        <h3 className="text-xl font-serif-editorial text-[#111827] group-hover:text-[#153E2B] transition-colors mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Summary Narrative */}
        <p className="text-xs text-[#4B5563] leading-relaxed mb-4 line-clamp-3 font-sans">
          {project.scopeSummary}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-mono">
        <span className="text-[11px] text-[#6B7280]">{project.timelineStatus}</span>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#153E2B] hover:text-[#0E291C] transition-colors"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}



