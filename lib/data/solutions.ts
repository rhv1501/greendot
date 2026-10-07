export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  recommendedSystem: string;
  challengesSolved: { challenge: string; solution: string }[];
  keyFeatures: string[];
  typicalAreaRange: string;
  typicalTimeline: string;
  imageUrl?: string;
  faq: { q: string; a: string }[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "rooftop-projects",
    title: "Rooftop Construction & Room Extensions",
    shortTitle: "Rooftop Projects",
    metaTitle: "Rooftop Construction & Room Extensions in Chennai | GreenDot",
    metaDescription: "Lightweight rooftop construction in Chennai using LGSF & PUF panels. Turn unused slab space into studio rooms, offices, or leisure spaces without structural strain.",
    tagline: "Transform unused terrace slabs into structural, fully insulated, lightweight living or commercial spaces.",
    description: "Building on an existing terrace slab requires extreme care regarding structural dead load, weatherproofing, and material transport access. GreenDot specializes in engineered rooftop rooms and full terrace extensions across Chennai, leveraging lightweight LGSF framing and high-insulation PUF panel systems.",
    recommendedSystem: "LGSF Frame + PUF Wall/Roof Panels or Fibre Cement Cladding",
    imageUrl: "/images/hero_rooftop.jpg",
    challengesSolved: [
      {
        challenge: "Excessive Dead Weight on Existing Slab",
        solution: "LGSF + PUF systems weigh less than 20-25% of traditional brickwork and concrete, preserving your building's structural integrity."
      },
      {
        challenge: "Chennai's Extreme Overhead Sun & Heat",
        solution: "High-density PUF insulation reduces heat transfer through the rooftop, maintaining comfortable indoor temperatures."
      },
      {
        challenge: "Narrow Access & Stairwell Constraints",
        solution: "Modular steel sections and panels are compact to transport through tight urban streets and stairs without heavy cranes."
      },
      {
        challenge: "Monsoon Water Ingress & Terrace Leakage",
        solution: "Integrated waterproofing membrane layers, flashing trims, and custom gutter channels prevent water seepage."
      }
    ],
    keyFeatures: [
      "Custom room sizes tailored to slab columns and load points",
      "Seamless integration with existing staircases or private lifts",
      "Option for large glass windows, skylights, and terrace deck extensions",
      "Turnkey interiors including flooring, electricals, and AC ducting"
    ],
    typicalAreaRange: "250 sq.ft. – 2,500+ sq.ft.",
    typicalTimeline: "Subject to finalized scope & structural verification",
    faq: [
      {
        q: "Will building on my rooftop cause structural cracks downstairs?",
        a: "Because LGSF and PUF panel construction applies a fraction of the weight of conventional RCC and brick walls, structural strain is minimized. We perform structural verification of load distribution before commencing design."
      },
      {
        q: "Can I use a rooftop structure as a permanent bedroom or home office?",
        a: "Yes. Our rooftop projects are fully weather-sealed, insulated, wired, and finished internally with gypsum or timber panels to feel identical to a luxury permanent room."
      }
    ]
  },
  {
    slug: "cafes-restaurants",
    title: "Cafés, Restaurants & QSR Outlets",
    shortTitle: "Cafés & Restaurants",
    metaTitle: "Café & Restaurant Prefab Construction in Chennai | GreenDot",
    metaDescription: "Rapid prefabricated construction & interior fit-outs for cafés, QSRs & dining spaces in Chennai. Fast-track setup to start operations sooner.",
    tagline: "Distinctive, fast-track dining and retail spaces built for commercial footfall and memorable brand identity.",
    description: "In the hospitality industry, every day spent under construction is a day of lost rental and revenue. GreenDot delivers customized prefabricated café shells and interior fit-outs in Chennai, allowing operators to launch quickly with striking architectural aesthetics and durable, commercial-grade interiors.",
    recommendedSystem: "LGSF Architectural Shell + Glass & Timber Cladding + Turnkey MEP",
    imageUrl: "/images/hero_cafe.jpg",
    challengesSolved: [
      {
        challenge: "High Commercial Rental & Delayed Launch",
        solution: "Off-site fabrication and rapid site erection allow faster turnarounds compared to traditional wet-construction."
      },
      {
        challenge: "Unique Architectural Aesthetics",
        solution: "Steel framing accommodates cantilevered canopies, high ceilings, large glazed facades, and outdoor dining transitions."
      },
      {
        challenge: "Heavy Kitchen MEP Requirements",
        solution: "Dedicated service channels for heavy-duty electrical loads, exhaust hood ducting, plumbing drains, and non-slip flooring."
      }
    ],
    keyFeatures: [
      "Striking exterior facade paneling & custom sign framing",
      "Indoor-outdoor dining layout integration",
      "Commercial kitchen partition walls & acoustic ceiling treatments",
      "Durable SPC flooring engineered for heavy commercial foot traffic"
    ],
    typicalAreaRange: "400 sq.ft. – 4,000+ sq.ft.",
    typicalTimeline: "Subject to finalized design & kitchen utility requirements",
    faq: [
      {
        q: "Can you build pop-up or relocatable café structures?",
        a: "Yes. LGSF and modular panel systems can be designed with bolted connections for dismantleable or expandable commercial configurations."
      },
      {
        q: "Do you supply and install commercial kitchen exhaust & plumbing?",
        a: "We execute complete MEP (Mechanical, Electrical, Plumbing) rough-ins and utility integration tailored to your commercial kitchen layout."
      }
    ]
  },
  {
    slug: "farmhouses-hospitality",
    title: "Farmhouses, Cottages & Eco-Resorts",
    shortTitle: "Farmhouses & Hospitality",
    metaTitle: "Prefab Farmhouse & Cottage Construction in Chennai & ECR | GreenDot",
    metaDescription: "Customized prefab farmhouses, weekend cottages & resort units in Chennai, ECR, Mahabalipuram & South India. Eco-friendly, insulated & durable.",
    tagline: "Serene, climate-controlled retreats engineered for remote, scenic, or coastal landscapes.",
    description: "Building a farmhouse or weekend retreat on outskirts like ECR, Mahabalipuram, or rural plots often presents logistical issues like labor availability, material transport, and water supply. GreenDot builds customized prefabricated farmhouses and resort cottages that install cleanly with minimal environmental footprint.",
    recommendedSystem: "LGSF Framework + Fibre Cement Weatherboard Cladding + PUF Roof Insulation",
    imageUrl: "/images/hero_farmhouse.jpg",
    challengesSolved: [
      {
        challenge: "Remote Site Logistics & Skilled Labor Shortage",
        solution: "Pre-engineered structural components arrive ready for rapid assembly by our trained team."
      },
      {
        challenge: "Harsh Coastal Weather & Corrosion",
        solution: "Corrosion-resistant steel framing, weatherboard cladding, and insulated roofing built for salt-air resilience."
      },
      {
        challenge: "Site Disturbance & Environmental Impact",
        solution: "Dry construction methods require minimal water, produce zero site debris, and preserve existing trees and soil."
      }
    ],
    keyFeatures: [
      "Sloped roof profiles, high ceilings & expansive veranda decks",
      "Wood-grain texture fibre cement cladding for natural warmth",
      "Large panoramic windows framing landscape views",
      "Low maintenance exterior surfaces requiring minimal repainting"
    ],
    typicalAreaRange: "600 sq.ft. – 5,000+ sq.ft.",
    typicalTimeline: "Subject to site location & custom architectural scope",
    faq: [
      {
        q: "Are prefab farmhouses sturdy enough for cyclonic winds near coastal Chennai?",
        a: "Yes. All LGSF structures engineered by GreenDot are calculated for regional wind speeds and anchored into concrete foundation pads or piers."
      },
      {
        q: "Can we customize the interior layout of the farmhouse?",
        a: "100%. Every project is built to a custom architectural plan — from open-plan living rooms to ensuite bedrooms and timber verandas."
      }
    ]
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Offices & Studio Enclosures",
    shortTitle: "Commercial Spaces",
    metaTitle: "Commercial Prefab Offices & Studio Construction in Chennai | GreenDot",
    metaDescription: "Customized commercial offices, site offices & workspace enclosures in Chennai. Fast-track LGSF structural framing with turnkey interior execution.",
    tagline: "Professional, acoustically insulated commercial environments delivered on tight schedules.",
    description: "Whether you need a modern administrative office, site control room, experience center, or multi-desk workspace, GreenDot delivers commercial enclosures combining steel strength, thermal comfort, and acoustic privacy.",
    recommendedSystem: "LGSF Steel Structure + Acoustic Wall Insulation + Commercial Interiors",
    imageUrl: "/images/hero_rooftop.jpg",
    challengesSolved: [
      {
        challenge: "Acoustic Noise Transmission between Workspaces",
        solution: "Multi-layer drywall partitions filled with dense rockwool acoustic insulation control sound bleed."
      },
      {
        challenge: "Scalability & Future Workspace Expansion",
        solution: "Modular LGSF structural grids allow seamless horizontal or vertical extension as teams grow."
      },
      {
        challenge: "Professional Corporate Identity",
        solution: "Clean architectural lines, glass partition walls, concealed cable management, and architectural LED lighting."
      }
    ],
    keyFeatures: [
      "Executive cabins, conference rooms & open workstation layouts",
      "Concealed networking, power, and HVAC ducting",
      "Acoustic drop ceilings & glass wall partitions",
      "Energy-efficient insulated exterior building envelope"
    ],
    typicalAreaRange: "500 sq.ft. – 6,000+ sq.ft.",
    typicalTimeline: "Subject to occupancy scope & interior detail level",
    faq: [
      {
        q: "Can prefab commercial offices be installed inside an existing warehouse or factory hall?",
        a: "Yes! We frequently build mezzanine or enclosed 'office-in-a-factory' units inside industrial spaces without disrupting ongoing operations."
      }
    ]
  },
  {
    slug: "customized-spaces",
    title: "Specialized & Unique Spatial Structures",
    shortTitle: "Customized Spaces",
    metaTitle: "Customized Prefab Structures in Chennai | Gyms, Studios, Clinics | GreenDot",
    metaDescription: "Customized prefab structures in Chennai for fitness gyms, music studios, clinics, guest annexes & site-constrained projects. Tailored engineering by GreenDot.",
    tagline: "Purpose-built structures engineered around unique physical, acoustic, or site constraints.",
    description: "Have an unusual plot dimension, an odd site constraint, or a highly specialized space requirement like a heavy-equipment gym, soundproof recording studio, or healthcare annex? GreenDot works backwards from your specific functional objective.",
    recommendedSystem: "Tailored LGSF + PUF + Specialized Acoustic / Cladding Systems",
    imageUrl: "/images/hero_cafe.jpg",
    challengesSolved: [
      {
        challenge: "Unconventional Plot Geometry or Narrow Side-Yards",
        solution: "CAD-driven LGSF framing allows custom non-rectangular floorplates and tailored height profiles."
      },
      {
        challenge: "High Structural Vibration or Dynamic Load (e.g. Gyms)",
        solution: "Engineered sub-floor framing and reinforced steel members distribute weight and absorb dynamic energy."
      },
      {
        challenge: "Strict Acoustic Isolation (e.g. Studios / Clinics)",
        solution: "Double-stud decoupled walls, rubber damping layers, and specialized acoustic insulation."
      }
    ],
    keyFeatures: [
      "100% custom architectural floorplan & structural framing",
      "Specialized wall, floor, and ceiling performance layers",
      "Integrated utility distribution tailored to equipment",
      "Turnkey completion from foundation to final paint"
    ],
    typicalAreaRange: "300 sq.ft. – 3,500+ sq.ft.",
    typicalTimeline: "Subject to technical requirements & site constraints",
    faq: [
      {
        q: "What if I don't know whether my project requires LGSF or PUF panels?",
        a: "You don't need to know! Share your requirement, site location, and space goal with us during initial consultation. We will analyze the requirements and recommend the optimal system."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}

