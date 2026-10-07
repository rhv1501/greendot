export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  primarySystem: string;
  idealFor: string[];
  keyBenefits: { title: string; desc: string }[];
  technicalOverview: string;
  specifications: { label: string; value: string }[];
  processOverview: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "prefabricated-construction",
    title: "Customized Prefabricated Construction",
    shortTitle: "Prefabricated Construction",
    metaTitle: "Customized Prefabricated Construction in Chennai | GreenDot",
    metaDescription: "Predictable, customized prefabricated construction in Chennai & South India. We engineer LGSF, PUF, and hybrid systems tailored to your site and purpose.",
    tagline: "Customized prefab structures engineered for site constraints, speed, and structural integrity.",
    description: "GreenDot provides end-to-end customized prefabricated construction across Chennai and South India. Rather than pushing a rigid pre-made kit, we start with your site condition and architectural requirement, selecting the optimal combination of steel framing, insulated panels, and weatherboarding.",
    primarySystem: "LGSF + PUF + Cement Board Hybrid",
    idealFor: [
      "Site-constrained urban plots & rooftop additions",
      "Cafés, quick-service restaurants & retail pop-ups",
      "Farmhouses, weekend retreats & eco-resorts",
      "Commercial site offices & institutional facilities",
      "Additional rooms & specialized structural enclosures"
    ],
    keyBenefits: [
      {
        title: "Predictable Scope & Agreed Cost",
        desc: "Detailed structural planning and fixed itemized quotation prior to site execution."
      },
      {
        title: "Site-Adaptive Engineering",
        desc: "Designed to minimize foundation load and overcome difficult urban access or height constraints."
      },
      {
        title: "Thermal & Weather Resilient",
        desc: "Envelopes engineered for South India's climate with high insulation and weatherproofing."
      },
      {
        title: "Coordinated Handover",
        desc: "Single-point execution covering structural shell, weatherboarding, and interior finishing."
      }
    ],
    technicalOverview: "Our prefabricated construction system combines Light Gauge Steel Framing (LGSF) for primary load-bearing structures with PUF insulated sandwich panels and heavy-duty fibre cement board claddings. Off-site component precision guarantees tight tolerance and minimal site disruption.",
    specifications: [
      { label: "Structural Framing", value: "Cold-formed Light Gauge Steel Framing (LGSF)" },
      { label: "Wall Envelope", value: "PUF Sandwich Panels / Fiber Cement Board with insulation" },
      { label: "Roofing Options", value: "Insulated sandwich roof sheets / Standing seam metal roof" },
      { label: "Execution Geography", value: "Chennai & South India" },
      { label: "Foundation Impact", value: "Low dead weight; suitable for existing slabs & rooftops" }
    ],
    processOverview: [
      "Requirement capture & site constraint evaluation",
      "Structural feasibility assessment & 3D layout approval",
      "Engineering calculation & system selection (LGSF / PUF / Hybrid)",
      "Factory fabrication of structural framing & panels",
      "Rapid site assembly & weather-tight envelope sealing",
      "Turnkey interior finishing & utility integration"
    ],
    faq: [
      {
        q: "Is prefabricated construction suitable for Chennai's coastal climate?",
        a: "Yes. We specify high-grade galvanised or zinc-aluminium coated steel members combined with non-corrosive fibre cement and sealed sandwich panels engineered to resist coastal humidity."
      },
      {
        q: "Can prefab structures be built on top of existing concrete slabs?",
        a: "Absolutely. Due to the lightweight nature of LGSF and PUF systems compared to heavy RCC, prefab is ideal for rooftop additions, subject to a structural feasibility verification of your existing slab."
      }
    ]
  },
  {
    slug: "lgsf-construction",
    title: "Light Gauge Steel Frame (LGSF) Construction",
    shortTitle: "LGSF Construction",
    metaTitle: "LGSF Construction in Chennai | Light Gauge Steel Frame | GreenDot",
    metaDescription: "High-precision LGSF construction in Chennai. Cold-formed steel frames engineered for multi-story strength, dimensional accuracy, and fast assembly.",
    tagline: "High-precision structural steel framing for durable, multi-story and customized spatial designs.",
    description: "Light Gauge Steel Framing (LGSF) utilizes computer-designed, cold-formed steel sections produced with pinpoint accuracy. GreenDot leverages LGSF to deliver high-strength structural skeletons that assemble rapidly with zero material waste.",
    primarySystem: "Cold-Formed Galvanised Steel Sections (LGSF)",
    idealFor: [
      "Multi-level rooftop structures & annexes",
      "Commercial office extensions & studio spaces",
      "Architectural residential extensions & villas",
      "Customized clear-span halls & institutional rooms"
    ],
    keyBenefits: [
      {
        title: "High Strength-to-Weight Ratio",
        desc: "Delivers immense structural stability while applying significantly less dead load than traditional brickwork or RCC."
      },
      {
        title: "Precision Engineering",
        desc: "CAD-designed sections result in straight walls, exact 90-degree corners, and seamless interior fit-out alignment."
      },
      {
        title: "Termite & Pest Proof",
        desc: "Steel components are non-combustible, inorganic, and completely immune to termite attack or fungal degradation."
      },
      {
        title: "Architectural Flexibility",
        desc: "Supports wide spans, custom roof profiles, and versatile cladding options."
      }
    ],
    technicalOverview: "LGSF sections are manufactured from high-tensile galvanised steel coils. Frames are pre-punched for electrical and plumbing conduits, enabling rapid, clean assembly on site with bolted connections.",
    specifications: [
      { label: "Steel Grade", value: "High tensile galvanised steel (AZ150 / Z275 coating)" },
      { label: "Design Standards", value: "Engineered to withstand local wind loads & seismic conditions" },
      { label: "Wall Thickness", value: "Custom engineered (typically 89mm - 150mm frame depth)" },
      { label: "Fire Rating", value: "Compliant with non-combustible material guidelines when encased" }
    ],
    processOverview: [
      "Architectural requirement analysis",
      "3D structural frame modeling & load analysis",
      "Precision roll-forming of LGSF members",
      "On-site frame erection & anchorage",
      "Cladding, insulation layer installation & interior execution"
    ],
    faq: [
      {
        q: "How long does an LGSF structure last?",
        a: "When properly clad and protected from direct continuous moisture exposure, galvanised LGSF framing offers structural durability comparable to conventional steel and concrete structures."
      },
      {
        q: "Can LGSF be combined with traditional finishes?",
        a: "Yes. LGSF frames easily accept gypsum board, fibre cement board, timber paneling, tile backer boards, and exterior stone/texture renders."
      }
    ]
  },
  {
    slug: "puf-panel-construction",
    title: "PUF Panel Construction",
    shortTitle: "PUF Panel Construction",
    metaTitle: "PUF Panel Construction in Chennai | Insulated Sandwich Panels | GreenDot",
    metaDescription: "Thermal insulated PUF panel construction in Chennai. Fast-assembly polyurethane foam sandwich wall & roof systems for climate-controlled comfort.",
    tagline: "Superior thermal insulation and rapid envelope assembly for heat-sensitive and quick-turnaround spaces.",
    description: "Polyurethane Foam (PUF) sandwich panels feature a rigid insulating core sandwiched between durable metal or composite sheets. GreenDot uses PUF panel systems to create highly energy-efficient rooftop enclosures, commercial rooms, and climate-resilient units across South India.",
    primarySystem: "Rigid Polyurethane Foam (PUF) Sandwich Panels",
    idealFor: [
      "Rooftop rooms & heat-exposed top floor structures",
      "Temperature-sensitive commercial utility rooms",
      "Quick-deploy site offices & security cabins",
      "Café kitchen enclosures & acoustic partitioning"
    ],
    keyBenefits: [
      {
        title: "Exceptional Thermal Insulation",
        desc: "Drastically reduces heat ingress from Chennai's harsh sun, keeping indoor spaces cool and lowering AC power consumption."
      },
      {
        title: "All-in-One Wall System",
        desc: "Combines exterior skin, thermal core, and finished interior surface in a single lightweight panel."
      },
      {
        title: "Waterproof & Airtight Jointing",
        desc: "Tongue-and-groove interlocking profiles with specialized weather seals prevent water ingress."
      },
      {
        title: "Rapid Deployment",
        desc: "Large panel coverage enables full wall and roof enclosure within days."
      }
    ],
    technicalOverview: "PUF panels feature high-density CFC-free polyurethane foam (typically 40 kg/m³ density) injected between pre-painted galvanised iron (PPGI) or aluminium sheets. Standard wall thickness ranges from 50mm to 100mm based on insulation requirements.",
    specifications: [
      { label: "Core Density", value: "40 kg/m³ (+/- 2 kg/m³) rigid PUF foam" },
      { label: "Facing Sheets", value: "Pre-painted Galvanised Iron (PPGI) / Aluminium" },
      { label: "Panel Thickness", value: "50mm, 75mm, 100mm options" },
      { label: "Thermal Conductivity", value: "Approx. 0.022 W/mK (ultra-low thermal transfer)" }
    ],
    processOverview: [
      "Insulation requirement & panel thickness specification",
      "Sub-structure frame preparation",
      "Interlocking panel alignment & mechanical fastening",
      "Joint sealing & flashings installation",
      "Utility ducting & interior surface treatment"
    ],
    faq: [
      {
        q: "Do PUF panel walls require plastering or painting?",
        a: "No. Standard PPGI PUF panels come pre-finished with weather-resistant factory coatings. However, decorative claddings or internal gypsum board overlays can be added for custom aesthetics."
      },
      {
        q: "Does PUF help reduce air conditioning electricity bills?",
        a: "Yes. Due to its extremely low thermal conductivity, a PUF panel room requires significantly less energy to cool compared to uninsulated brick or sheet metal rooms."
      }
    ]
  },
  {
    slug: "commercial-interiors",
    title: "Turnkey Commercial & Space Interiors",
    shortTitle: "Commercial Interiors",
    metaTitle: "Commercial Interiors Chennai | Turnkey Office & Café Interiors | GreenDot",
    metaDescription: "Turnkey commercial interiors in Chennai for cafés, offices, retail & customized spaces. Integrated with structural execution for seamless handover.",
    tagline: "End-to-end space interiors designed and coordinated in lockstep with structural execution.",
    description: "A shell is only as functional as its interior execution. GreenDot provides complete commercial and customized interior solutions, bridging the gap between structural prefab assembly and refined, operational indoor spaces.",
    primarySystem: "Turnkey Interior Fit-out & Utility Integration",
    idealFor: [
      "Café, restaurant & QSR indoor/outdoor seating areas",
      "Modern office spaces, meeting rooms & co-working pods",
      "Boutique retail outlets & experience centers",
      "Rooftop lounge rooms & private leisure studios"
    ],
    keyBenefits: [
      {
        title: "Single-Point Coordination",
        desc: "Eliminates the friction between civil contractors, interior designers, and utility technicians."
      },
      {
        title: "Integrated MEP Ducting",
        desc: "Electrical, plumbing, and HVAC conduits are planned during structural framing for invisible integration."
      },
      {
        title: "Acoustic & Aesthetic Finishes",
        desc: "Custom ceiling treatments, acoustic wall paneling, modular joinery, and lighting design."
      },
      {
        title: "Defined Delivery Schedule",
        desc: "Interiors commence immediately as structural assembly finishes, ensuring predictable handover."
      }
    ],
    technicalOverview: "Our interior fit-out process utilizes modular partition walls, suspended acoustic ceilings, heavy-duty commercial flooring (vinyl, SPC, tile), integrated task/ambient LED lighting, and custom joinery tailored to commercial footfall.",
    specifications: [
      { label: "Services Included", value: "Electrical, Plumbing, HVAC, Partitions, Ceilings, Lighting, Flooring" },
      { label: "Wall Systems", value: "Gypsum partitions, acoustic timber paneling, glass partitions" },
      { label: "Flooring Options", value: "Commercial SPC flooring, porcelain tile, anti-skid vinyl" },
      { label: "Handover Standard", value: "Ready-to-occupy operational space" }
    ],
    processOverview: [
      "Spatial layout & utility workflow planning",
      "Material board & lighting concept selection",
      "Electrical & plumbing rough-in work",
      "Ceiling grid, wall partitions & joinery installation",
      "Flooring, fixture fitments & final cleanup"
    ],
    faq: [
      {
        q: "Do you handle standalone commercial interiors or only prefab interiors?",
        a: "While our core strength is turnkey prefab + interiors execution, we also take up standalone commercial interior fit-outs for existing retail, café, and office buildings in Chennai."
      },
      {
        q: "How are electrical wires and pipes run inside prefab walls?",
        a: "LGSF studs feature factory pre-punched service holes, and double-stud or panel chases are designed specifically for concealed, safe wire and pipe conduit routing."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
