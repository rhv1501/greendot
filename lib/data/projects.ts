export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  systemUsed: string;
  scopeSummary: string;
  problem: string;
  siteCondition: string;
  requirement: string;
  approach: string;
  executionHighlights: string[];
  timelineStatus: string;
  result: string;
  imageUrl?: string;
  imagePlaceholder: {
    title: string;
    caption: string;
    aspectRatio: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "urban-rooftop-studio-chennai",
    title: "Urban Rooftop Studio & Workspace Extension",
    category: "Rooftop Projects",
    location: "Chennai, Tamil Nadu",
    systemUsed: "LGSF Framework + Insulated PUF Envelope + Fibre Cement Cladding",
    scopeSummary: "Turnkey rooftop construction including lightweight steel framing, wall insulation, and complete interior fit-out.",
    problem: "The client needed a quiet 600 sq.ft. executive workspace addition above an existing 2-story residential building in a congested Chennai neighborhood. Traditional brick construction was rejected due to heavy slab load, water usage, and narrow street access constraints.",
    siteCondition: "Existing concrete slab with restricted narrow access stairwell; severe overhead sunlight exposure during summer months.",
    requirement: "A structurally safe, thermally insulated rooftop room with private entrance, high-ceilings, large windows, and fast handover.",
    approach: "GreenDot conducted a structural slab evaluation and engineered an LGSF framing layout resting directly on load-bearing column points. High-density PUF wall panels and fibre cement cladding were selected for thermal comfort and low dead weight.",
    executionHighlights: [
      "Precision-cut LGSF members transported via standard vehicles and assembled on site within 4 days",
      "Interlocking PUF roof panels installed with continuous weatherproofing flashings",
      "Interior gypsum lining with concealed MEP electrical conduit pre-routing",
      "Commercial SPC flooring and energy-efficient LED ambient lighting"
    ],
    timelineStatus: "Completed on schedule as per agreed project milestone plan",
    result: "A sleek, climate-controlled rooftop workspace with 75% less dead weight than a brick alternative and superior heat resistance.",
    imageUrl: "/images/hero_rooftop.jpg",
    imagePlaceholder: {
      title: "Rooftop Studio Architectural Structure",
      caption: "LGSF structure with exterior fibre cement cladding and glass aperture.",
      aspectRatio: "16:9"
    }
  },
  {
    slug: "boutique-cafe-shell-chennai",
    title: "Boutique Garden Café & QSR Enclosure",
    category: "Cafés & Restaurants",
    location: "Chennai, Tamil Nadu",
    systemUsed: "LGSF Structural Frame + Glass Facade + Turnkey Hospitality Fit-out",
    scopeSummary: "Full structural prefab shell and commercial interior fit-out for a specialty coffee shop.",
    problem: "A hospitality client secured a leased outdoor plot in Chennai and needed an operational café shell within a strict launch deadline to minimize rental burn prior to opening.",
    siteCondition: "Open outdoor plot requiring quick foundation pads, rain-proofing, and heavy kitchen electrical utility infrastructure.",
    requirement: "An eye-catching modern architectural shell with indoor counter seating, outdoor garden deck integration, kitchen exhaust provisions, and fast turnaround.",
    approach: "GreenDot designed a clear-span LGSF frame with high glass apertures, wood-grain external paneling, and an integrated kitchen utility plan.",
    executionHighlights: [
      "Modular LGSF frame erected over reinforced concrete pad footings",
      "Durable non-combustible partition walls separating kitchen and guest areas",
      "Heavy-duty utility rough-ins for espresso machines, refrigeration, and drainage",
      "Turnkey interior counter joinery, ambient pendant lighting, and non-slip commercial flooring"
    ],
    timelineStatus: "Executed within planned commercial timeline",
    result: "A striking, operational café destination built cleanly with zero wet-site delays.",
    imageUrl: "/images/hero_cafe.jpg",
    imagePlaceholder: {
      title: "Prefab Café Architectural Facade",
      caption: "Modern black steel LGSF frame with warm timber-finish cladding and floor-to-ceiling glass.",
      aspectRatio: "16:9"
    }
  },
  {
    slug: "weekend-farmhouse-ecr",
    title: "Coastal Weekend Farmhouse Retreat",
    category: "Farmhouses & Hospitality",
    location: "East Coast Road (ECR), Tamil Nadu",
    systemUsed: "LGSF Heavy Duty Frame + Fibre Cement Weatherboards + Insulated Roof",
    scopeSummary: "Customized prefabricated weekend home featuring elevated veranda decks and coastal weatherproofing.",
    problem: "The client wanted a durable weekend getaway on an ECR plot near the coast, resistant to humid salt air and monsoon downpours, without managing a long multi-month civil construction project.",
    siteCondition: "Sandy soil conditions near the coast; exposed to salt humidity and high wind loads.",
    requirement: "A spacious 2-bedroom farmhouse with high vaulted ceilings, wide shaded verandas, low maintenance exterior, and rapid site handover.",
    approach: "GreenDot engineered a galvanised LGSF structure anchored to pier foundations. Moisture-proof fibre cement weatherboard cladding was combined with insulated roof sheets to combat coastal humidity.",
    executionHighlights: [
      "Pier foundation to elevate structure above ground moisture",
      "High-tensile galvanised steel framing designed for regional coastal wind speeds",
      "Weatherboard exterior finished with UV-stable architectural paint",
      "Spacious living area with floor-to-ceiling sliding glass doors opening to a timber-polymer deck"
    ],
    timelineStatus: "Delivered as per scheduled milestone agreement",
    result: "A serene, weather-resilient coastal sanctuary built with minimal environmental disruption to the surrounding plot.",
    imageUrl: "/images/hero_farmhouse.jpg",
    imagePlaceholder: {
      title: "Coastal Farmhouse Elevation",
      caption: "Elevated LGSF farmhouse structure with shaded veranda deck along ECR.",
      aspectRatio: "16:9"
    }
  },
  {
    slug: "commercial-studio-annex-chennai",
    title: "Commercial Design Studio Annex",
    category: "Commercial Spaces",
    location: "Chennai, Tamil Nadu",
    systemUsed: "PUF Wall Panels + LGSF Roof Structure + Acoustic Interior Lining",
    scopeSummary: "Turnkey commercial workspace extension within a commercial compound.",
    problem: "A growing creative firm required additional client meeting rooms and a high-focus design studio annex without interrupting daily office operations in the primary building.",
    siteCondition: "Adjoining commercial courtyard with strict noise limits and zero space for heavy construction machinery.",
    requirement: "A clean, quiet, acoustically insulated workspace with high aesthetic appeal and concealed cable management.",
    approach: "GreenDot utilized high-density PUF wall panels lined internally with acoustic drywall to insulate against urban traffic and courtyard noise.",
    executionHighlights: [
      "Quiet off-site panel assembly with zero dust or heavy masonry noise on site",
      "Double-glazed glass window units for natural light and sound dampening",
      "Concealed networking channels and modular wall outlets",
      "Seamless ceiling grid with recessed LED task lighting"
    ],
    timelineStatus: "Completed on schedule",
    result: "An acoustic studio annex providing a quiet, premium environment for client presentation and creative work.",
    imageUrl: "/images/hero_rooftop.jpg",
    imagePlaceholder: {
      title: "Commercial Studio Interior & Facade",
      caption: "Minimalist commercial prefab annex with glass acoustic partitions.",
      aspectRatio: "16:9"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

