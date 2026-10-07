export interface FounderInfo {
  name: string;
  role: string;
  background: string;
  yearsExperience: string;
  sitesSupervised: string;
  geographicSpan: string;
  coreExposures: string[];
  quote: string;
  bioNarrative: string[];
}

export const FOUNDER_DATA: FounderInfo = {
  name: "Hakash R",
  role: "Founder & Technical Lead",
  background: "Construction & Project Management",
  yearsExperience: "5+ Years",
  sitesSupervised: "100+ Sites Supervised",
  geographicSpan: "Across 6 States (Urban & Remote)",
  coreExposures: [
    "Light Gauge Steel Framing (LGSF) engineering",
    "Polyurethane Foam (PUF) panel systems",
    "Turnkey commercial & space interior execution",
    "Site-constrained urban & rooftop project management"
  ],
  quote: "Construction shouldn't feel like a series of unexpected compromises. When you start with the client's actual requirement and apply the right pre-engineered system, you turn an uncertain journey into a predictable, high-quality result.",
  bioNarrative: [
    "Hakash R founded GreenDot Build & Interiors after observing the pervasive friction in traditional Indian construction — uncoordinated contractors, opaque pricing, chronic delays, and continuous site rework.",
    "With a background in Construction & Project Management, over 5 years of hands-on field experience, and more than 100 site supervisions spanning urban city centers and remote terrain across six states, Hakash recognized that customized prefabrication offers a superior alternative.",
    "Under his leadership, GreenDot operates not as a technology vendor selling standard kits, but as an architectural construction partner that aligns LGSF, PUF panels, and turnkey interior fit-outs around the client's exact spatial requirement."
  ]
};
