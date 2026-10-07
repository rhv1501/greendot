export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Technologies" | "Commercials" | "Approvals & Warranty" | "Execution";
  requiresVerification?: boolean;
  verificationNote?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "General",
    question: "What does GreenDot Build & Interiors do?",
    answer: "GreenDot is a Chennai-focused customized prefabricated construction and interior fit-out company. We evaluate your spatial requirement, engineer the right prefab system (LGSF, PUF panels, or Hybrid), and manage the project end-to-end from initial requirement to final handover."
  },
  {
    category: "General",
    question: "How is GreenDot different from traditional civil contractors?",
    answer: "Traditional construction often involves fragmented sub-contractors, unpredictable delays, uncoordinated interior handoffs, and escalating costs. GreenDot provides a single coordinated team with a defined scope, agreed project cost, planned timeline, and factory-engineered dry construction."
  },
  {
    category: "General",
    question: "Where does GreenDot operate?",
    answer: "Our primary operational focus is Chennai and surrounding South Indian regions including ECR, Mahabalipuram, Kanchipuram, Chengalpattu, and broader South India for select commercial projects."
  },
  {
    category: "Technologies",
    question: "What construction technologies does GreenDot use?",
    answer: "We specialize in Light Gauge Steel Framing (LGSF), Polyurethane Foam (PUF) sandwich panels, Fibre Cement Boards, and Hybrid combinations tailored to the specific thermal, structural, and aesthetic requirements of your space."
  },
  {
    category: "Technologies",
    question: "How do I know whether my project needs LGSF or PUF panels?",
    answer: "You do not need to figure that out yourself! During our initial assessment, we analyze your space requirements, structural constraints, and budget, then recommend the most suitable system or hybrid combination."
  },
  {
    category: "Technologies",
    question: "Is prefab construction hot or noisy inside?",
    answer: "No. Unlike bare sheet-metal sheds, GreenDot structures incorporate high-density PUF insulation cores, rockwool wall cavity insulation, double-pane glass, and acoustic ceiling grids engineered for heat reduction and noise dampening."
  },
  {
    category: "Commercials",
    question: "How are project costs determined?",
    answer: "Costs are calculated based on finalized architectural floor plans, selected material specifications (LGSF thickness, insulation density, cladding type, interior finishes), site access conditions, and total square footage."
  },
  {
    category: "Commercials",
    question: "Do you offer a fixed-price guarantee?",
    answer: "We provide an agreed project cost based on the mutually approved scope of work and technical specifications prior to kickoff. Any variations only occur if the client requests structural or finish scope changes during execution."
  },
  {
    category: "Approvals & Warranty",
    question: "Are government approvals required for rooftop prefab structures in Chennai?",
    answer: "Approval requirements depend on local municipal zoning regulations, building height limits, and the permanent or temporary nature of the structure. We assist in evaluating structural feasibility and guidance regarding local compliance.",
    requiresVerification: true,
    verificationNote: "Building approval procedures vary by local authority jurisdiction and existing structure classification. [VERIFY WITH GREENDOT]"
  },
  {
    category: "Approvals & Warranty",
    question: "What warranties apply to GreenDot structures and materials?",
    answer: "Material manufacturer warranties apply to LGSF galvanised steel members, PUF panels, cladding boards, and roof sheets. Structural installation quality is verified during handover.",
    requiresVerification: true,
    verificationNote: "Exact warranty periods and terms for specific structural components require formal policy confirmation. [VERIFY WITH GREENDOT]"
  },
  {
    category: "Execution",
    question: "How long does a typical prefabricated project take to execute?",
    answer: "Execution timelines vary based on project scale, site access, foundation complexity, and interior finish scope. Prefab structural assembly is significantly faster than traditional wet masonry, with off-site fabrication running concurrently with site preparation."
  },
  {
    category: "Execution",
    question: "Can GreenDot execute turnkey commercial interiors for an existing building?",
    answer: "Yes. In addition to full structural prefab + interiors execution, we handle standalone commercial interior fit-outs for cafés, retail outlets, offices, and custom spatial renovations."
  }
];
