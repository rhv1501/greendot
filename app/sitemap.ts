import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/data/services";
import { SOLUTIONS } from "@/lib/data/solutions";
import { PROJECTS } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greendotbuild.com";
  const buildDate = "2026-10-07";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/process",
    "/faq",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const solutionRoutes = SOLUTIONS.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...projectRoutes];
}
