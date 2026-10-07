export interface ProcessStep5 {
  stepNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  pointers: string[];
}

export const FIVE_STEP_PROCESS: ProcessStep5[] = [
  {
    stepNumber: 1,
    title: "Discovery & Feasibility",
    subtitle: "Site Check & Requirement Intake",
    duration: "24 – 48 Hours",
    pointers: [
      "Share your spatial vision, site location, target area & budget",
      "Free site feasibility check & structural slab load evaluation",
      "Initial spatial concept direction & timeline assessment"
    ]
  },
  {
    stepNumber: 2,
    title: "Concept & 3D Layout",
    subtitle: "Architectural Planning & Specs",
    duration: "3 – 5 Days",
    pointers: [
      "Tailored 3D architectural floor plans & spatial elevations",
      "Material system selection (LGSF steel, PUF panels, cladding)",
      "Client layout review and spatial flow optimization"
    ]
  },
  {
    stepNumber: 3,
    title: "Fixed BOQ & Agreement",
    subtitle: "Transparent Commercial Lock",
    duration: "1 – 2 Days",
    pointers: [
      "100% itemized BOQ pricing with zero unpriced surprise costs",
      "Locked material specifications, steel gauge, and handover date",
      "Formal agreement signing with clear milestone schedule"
    ]
  },
  {
    stepNumber: 4,
    title: "Factory Pre-Engineering",
    subtitle: "Precision Off-Site Fabrication",
    duration: "1 – 2 Weeks",
    pointers: [
      "Millimetre-precision steel frame roll-forming in factory",
      "Insulated PUF wall & roof panel manufacturing under strict QC",
      "Parallel site preparation while components are produced"
    ]
  },
  {
    stepNumber: 5,
    title: "Rapid Assembly & Handover",
    subtitle: "Dry Erection & Turnkey Fit-Out",
    duration: "2 – 3 Weeks",
    pointers: [
      "Rapid dry structural frame & envelope erection on site",
      "Turnkey interior fit-outs, wiring, plumbing & finishes",
      "Joint quality inspection, utility testing & key handover"
    ]
  }
];

// Retain legacy export for backwards compatibility
export const PROCESS_STEPS = FIVE_STEP_PROCESS.map((s) => ({
  stepNumber: s.stepNumber,
  title: s.title,
  tagline: s.subtitle,
  description: s.subtitle,
  deliverables: s.pointers,
  clientRole: s.pointers[0],
  greenDotRole: s.pointers[1]
}));

