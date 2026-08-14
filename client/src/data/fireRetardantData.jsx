import { CONTACT_SECTIONS, HOME_SECTIONS, PRODUCT_ROUTES, ROUTES } from "../app/routes.js";
import heroBg from "../assets/product/fire-retardant/fire_retardant_hero_bg.jpg";
import productImage from "../assets/product/fire-retardant/fire_retardant_plywood_sheet.jpg";
import panellingImage from "../assets/product/fire-retardant/fire_retardant_panelling.jpg";
import edgeImage from "../assets/product/mr plywood/Wood veneer layers on plywood edge.png";

export const quickFactsData = [
  { label: "SPECIAL PERFORMANCE", value: "Fire-retardant treatment", icon: "Shield" },
  { label: "STANDARD", value: "IS 5509:2021 Certified", icon: "Layers" },
  { label: "TESTING", value: "Flammability & Rate of burning", icon: "Drop" },
  { label: "RAW BASE", value: "IS 303 BWR Grade Plywood", icon: "Factory" },
  { label: "THICKNESS", value: "3 mm to 25 mm", icon: "Ruler" },
];

export const benefitsData = [
  {
    number: "01",
    title: "Improved Fire Behaviour",
    copy: "Special treatment is used to reduce the plywood's tendency to ignite and support the spread of fire compared with untreated plywood.",
  },
  {
    number: "02",
    title: "Tested Fire-Retardant Properties",
    copy: "IS 5509 evaluates characteristics including flammability, flame penetration and rate of burning.",
  },
  {
    number: "03",
    title: "Suitable for Interior Fabrication",
    copy: "It can provide a plywood base for selected furniture, partitions, panelling and decorative interior applications.",
  },
  {
    number: "04",
    title: "Useful for Project Specifications",
    copy: "Fire-retardant plywood can be considered where architects, consultants or project specifications require a plywood product with defined fire-performance characteristics.",
  },
  {
    number: "05",
    title: "Maintains the Practicality of Plywood",
    copy: "The material continues to provide the fabrication possibilities associated with plywood while adding specialised treatment for fire performance.",
  },
];

export const applicationsData = [
  {
    title: "Interior Wall Panelling",
    copy: "Decorative panelling and wall cladding specified for improved fire behaviour.",
    image: panellingImage,
    alt: "Fire Retardant wood wall panelling",
  },
  {
    title: "Office Interiors & Partitions",
    copy: "Commercial workstations, dividers, partitions and executive interiors.",
    image: null,
    alt: null,
  },
  {
    title: "Commercial & Retail Spaces",
    copy: "Retail displays, wall features and high-occupancy commercial furniture.",
    image: null,
    alt: null,
  },
  {
    title: "Hospitality & Reception Areas",
    copy: "Hotel lobby furniture, wall panelling, reception desks and public space fixtures.",
    image: null,
    alt: null,
  },
  {
    title: "Institutional & Public Buildings",
    copy: "Schools, auditoriums, government institutions and public-space interior projects.",
    image: null,
    alt: null,
  },
  {
    title: "Furniture & Cabinetry",
    copy: "Storage cabinets, desks and furniture specified with defined fire-retardant performance.",
    image: null,
    alt: null,
  },
];

export const limitationsData = [
  "Cannot catch fire; it reduces ignition rate, but is not non-combustible.",
  "Cannot burn under unlimited fire exposure.",
  "Makes the entire finished furniture or wall system automatically fireproof.",
  "Replaces proper building fire safety systems, sprinklers, or emergency planning.",
  "Ignores adhesive, laminate, veneer, or coating fire performance in completed assemblies.",
];

export const specificationsData = [
  ["Product", "Fire Retardant Plywood"],
  ["Product category", "Special-performance plywood"],
  ["Performance focus", "Improved fire-retardant behaviour"],
  ["Applicable standard", "IS 5509:2021 Fire Retardant Plywood Specification"],
  ["Base plywood", "BWR Grade plywood conforming to IS 303"],
  ["Treatment", "Fire-retardant chemical treatment (Pressure impregnation / soaking)"],
  ["Fire-performance tests", "Flammability, flame penetration and rate of burning"],
  ["Other evaluated properties", "Moisture content, water resistance and static bending strength"],
  ["Standard thickness coverage", "3 mm to 25 mm"],
  ["Dimensions", "Standard/project dimensions according to requirement"],
  ["Common applications", "Furniture, partitions, panelling and selected interiors"],
];

export const thicknessesData = [
  { size: "3 - 6 mm", strength: 25, use: "Suitable backing, lining and supported decorative applications", duty: "Thinner Panels" },
  { size: "9 - 12 mm", strength: 60, use: "Wall panelling, office partitions, cabinetry and general interior components", duty: "Medium Panels" },
  { size: "15 - 25 mm", strength: 100, use: "Furniture bodies, heavy storage shelves, partitions and structural components", duty: "Thicker Panels" },
];

export const comparisonsData = [
  ["Primary Purpose", "General furniture & dry interiors", "Moisture-conscious interiors & kitchens", "High-moisture & marine conditions", "Specialised fire-retardant performance"],
  ["Core Focus", "Everyday interior durability", "Water resistance under IS 303", "High-moisture IS 710 specification", "Fire behaviour & flame retardation"],
  ["Fire Treatment", "Not inherent", "Not inherent", "Not inherent", "Special fire-retardant chemical treatment"],
  ["Key Evaluation", "Workmanship & bonding", "Boiling water resistance", "Water resistance & ply adhesion", "Flammability, penetration & rate of burning"],
  ["Applicable Standard", "IS 303:2024", "IS 303:2024", "IS 710:2024", "IS 5509:2021"],
];

export const standardVsFireRetardantData = [
  ["Primary purpose", "General furniture/interior use", "Interior use with additional fire-performance requirement"],
  ["Fire-retardant treatment", "Not inherent", "Special treatment applied"],
  ["Flammability evaluation", "Not its defining classification", "Evaluated under IS 5509"],
  ["Flame penetration", "Not its defining classification", "Evaluated under IS 5509"],
  ["Rate of burning", "Not its defining classification", "Evaluated under IS 5509"],
  ["Furniture fabrication", "Yes", "Yes, according to application"],
  ["Fireproof", "No", "No, fire retardant reduces flame spread"],
  ["Relevant standard", "Depends on category", "IS 5509:2021"],
];

export const finishesData = [
  "Decorative laminates",
  "Natural veneers",
  "Decorative veneers",
  "Paint systems",
  "Polishes",
  "Edge finishes",
  "Interior surface treatments",
];

export const fabricationChecksData = [
  "Compatibility of decorative finish with fire rating",
  "Adhesive system fire performance",
  "Edge treatment and joint sealing",
  "Panel cut-outs and electrical openings",
  "Hardware installation and screw holding",
  "Surface coating flame spread rating",
  "Required project fire classification",
];

export const whyPentagonData = [
  {
    number: "01",
    title: "Application-Led Selection",
    copy: "Start with where and how the plywood will be used before selecting the product.",
  },
  {
    number: "02",
    title: "Project-Focused Support",
    copy: "Share the specification, application, thickness, quantity and installation conditions so the material requirement can be discussed as a complete project need.",
  },
  {
    number: "03",
    title: "Multiple Plywood Solutions",
    copy: "Pentagon's plywood range allows customers to consider moisture resistance, demanding environmental conditions and specialised performance requirements.",
  },
  {
    number: "04",
    title: "Furniture & Interior Focus",
    copy: "Select the plywood around what it will ultimately become from cabinets and partitions to furniture and decorative panelling.",
  },
  {
    number: "05",
    title: "Manufacturing Experience",
    copy: "Pentagon's core business includes plywood manufacturing from its Yamunanagar operations, alongside blockboard and flush-door manufacturing.",
  },
];

export const faqsData = [
  {
    question: "What is Fire Retardant Plywood?",
    answer: "Fire Retardant Plywood is plywood treated with suitable fire-retardant chemicals to improve its behaviour when exposed to flame. The applicable Indian Standard is IS 5509:2021.",
  },
  {
    question: "Is Fire Retardant Plywood fireproof?",
    answer: "No. Fire retardant and fireproof are not the same thing. Fire-retardant treatment is intended to reduce and slow fire development; it does not make wood non-combustible.",
  },
  {
    question: "How is Fire Retardant Plywood tested?",
    answer: "IS 5509 includes evaluation of flammability, flame penetration and rate of burning, along with other plywood physical and bonding requirements.",
  },
  {
    question: "How is plywood made fire retardant?",
    answer: "BIS describes chemical treatment of the plywood or its veneers during the manufacturing process or after plywood manufacture. Treatment methods recognised in the current product manual include pressure impregnation and soaking.",
  },
  {
    question: "Is Fire Retardant Plywood the same as Marine Plywood?",
    answer: "No. They address different performance requirements. Marine Plywood is selected around demanding moisture conditions under IS 710, while Fire Retardant Plywood is specifically treated and evaluated for fire-retardant behaviour under IS 5509.",
  },
  {
    question: "Is Fire Retardant Plywood the same as BWP Plywood?",
    answer: "No. BWP is a water-resistance grade under general-purpose plywood (IS 303). Under the BIS certification manual for IS 5509:2021, BWR plywood conforming to IS 303 is used as the plywood base before specialised fire-retardant treatment is applied.",
  },
  {
    question: "Where can Fire Retardant Plywood be used?",
    answer: "It can be considered for furniture, partitions, wall panelling, decorative interiors and selected commercial, hospitality, retail and institutional applications where fire-retardant plywood is part of the project specification.",
  },
  {
    question: "Can Fire Retardant Plywood be laminated or veneered?",
    answer: "It can be used with suitable decorative finishes, but adhesives, laminates, veneers and coatings become part of the finished system. Their compatibility with the required project fire performance should be considered.",
  },
  {
    question: "What thicknesses are available?",
    answer: "IS 5509:2021 certification grouping covers plywood from 3 mm to 25 mm. Pentagon can supply the appropriate available thickness according to the project requirement.",
  },
  {
    question: "Do I need Fire Retardant Plywood for every interior?",
    answer: "No. It is a specialised product. The need depends on the project, intended application, fire-safety specification and applicable architectural requirements.",
  },
];

export const fireRetardantProductData = {
  pageTitle: "Fire Retardant Plywood (IS 5509:2021)",
  breadcrumbs: [
    ["Home", ROUTES.home],
    ["Products", ROUTES.products],
    ["Plywood", ROUTES.plywoodOverview || ROUTES.plywood],
    ["Fire Retardant Plywood", null],
  ],
  hero: {
    categoryBadge: "SPECIAL PERFORMANCE PLYWOOD",
    gradeBadge: "IS 5509:2021 CERTIFIED",
    title: (
      <>
        Added Fire-Retardant Performance{" "}
        <span className="text-[#E7B572]">for Interiors That Demand More.</span>
      </>
    ),
    description:
      "Pentagon Fire Retardant Plywood is intended for furniture, panelling and interior applications where the material specification includes additional fire-retardant performance.",
    subDescription:
      "Fire Retardant Plywood is treated with suitable fire-retardant chemicals under IS 5509:2021 to reduce the ease and rate at which fire can develop through the plywood. Its purpose is to improve the fire behaviour of plywood while retaining practical fabrication characteristics.",
    primaryCta: { text: "Request a Fire Retardant Quote", href: "#mr-enquiry" },
    secondaryCta: { text: "Discuss Your Project", href: ROUTES.contact },
    productImage: productImage,
    productImageAlt: "Pentagon IS 5509 Fire Retardant Plywood sheet stack",
    productImageBadge: "IS 5509:2021 · FIRE RETARDANT",
    heroBg: heroBg,
  },
  quickFacts: quickFactsData,
  overview: {
    eyebrow: "Understand Fire Retardant Plywood",
    title: "It Is Still Plywood. The Difference Is How It Responds to Fire.",
    edgeImage: edgeImage,
    edgeCaption: "Treated hardwood core plies",
    paragraphs: [
      "Ordinary plywood is a wood-based material and can burn when exposed to sufficient heat and flame. Fire Retardant Plywood receives additional chemical treatment intended to improve its behaviour during fire exposure.",
      "According to BIS, plywood or its veneers can be treated with suitable fire-retardant chemicals during the manufacturing process or treated after manufacture.",
      "The resulting plywood is evaluated for key fire-retardant properties under IS 5509:2021 including Flammability, Flame Penetration, and Rate of Burning. This makes Fire Retardant Plywood useful where a project specification calls for plywood with defined fire-performance characteristics.",
    ],
    callout: {
      title: "Choose Fire Retardant Plywood When",
      copy: "Choose Fire Retardant Plywood when the project requires the versatility of plywood together with improved fire behaviour.",
    },
    cta: {
      text: "Ask whether Fire Retardant fits my project",
      href: "#mr-enquiry",
    },
  },
  benefits: {
    eyebrow: "Why Consider It",
    title: "Improved Fire Behaviour & Tested Performance.",
    items: benefitsData,
  },
  applications: {
    eyebrow: "Suitable Applications",
    title: "Designed for Project & Public Space Interiors.",
    copy: "BIS specifically notes interior design and decorative panelling among common uses. Final selection should consider the complete project fire-safety requirements.",
    items: applicationsData,
    cta: {
      text: "Select Panel Thickness",
      href: "#thickness-guide",
    },
  },
  limitations: {
    eyebrow: "Fire Retardant Does Not Mean Fireproof",
    title: "An Important Difference to Understand Before You Specify It.",
    copy: "Fire Retardant Plywood is designed to improve the behaviour of plywood when exposed to fire. It does not mean the plywood is non-combustible or that the finished room is fireproof.",
    items: limitationsData,
    footnote:
      "A finished interior system contains plywood, laminates, veneers, adhesives, coatings, and framing. Fire performance needs to be considered for the complete application.",
    cta: {
      text: "Compare Plywood Standards",
      href: "#grade-comparison",
    },
  },
  specifications: {
    eyebrow: "Technical Specifications",
    title: "Product Information & IS 5509:2021 Standard Parameters.",
    items: specificationsData,
    alert: {
      eyebrow: "IS 5509:2021 Standard",
      title: "Indian Standard for Fire Retardant Plywood.",
      paragraph1:
        "The BIS product manual identifies BWR Grade plywood conforming to IS 303 as the raw plywood basis for certification under IS 5509:2021 and covers thicknesses from 3 mm to 25 mm.",
      paragraph2:
        "Evaluated for flammability, flame penetration, rate of burning, moisture content, water resistance, and static bending strength.",
      linkText: "View quality certifications",
      linkHref: HOME_SECTIONS.quality,
    },
  },
  thicknessGuide: {
    eyebrow: "Select the Right Thickness",
    title: "Fire Performance and Panel Thickness Are Two Different Decisions.",
    items: thicknessesData,
    note: "Fire-retardant treatment addresses how the material behaves during fire exposure. Thickness still needs to be chosen according to what the panel must do in the finished application.",
    cta: {
      text: "Get Thickness Advice",
      href: "#mr-enquiry",
    },
  },
  comparison: {
    eyebrow: "Fire Retardant vs MR, BWP & Marine Plywood",
    title: "They Solve Different Problems.",
    copy: "MR, BWP and Marine primarily help you select plywood around moisture and water exposure. Fire Retardant Plywood adds a different performance requirement: fire behaviour.",
    columns: ["Comparison Criteria", "MR Grade Plywood", "BWP Grade Plywood", "Marine Plywood (IS 710)", "Fire Retardant (IS 5509)"],
    rows: comparisonsData,
    cta: {
      text: "Help Me Select Plywood",
      href: CONTACT_SECTIONS.form,
    },
  },
  finishes: {
    eyebrow: "Fabrication & Finishing",
    title: "Fire-Retardant Performance Should Be Considered Through the Complete Finish.",
    copy: "Fire Retardant Plywood may form the substrate for decorative laminates, veneers, paint systems, and polishes. However, adding another material over the plywood creates a finished system.",
    surfaceImage: panellingImage,
    surfaceCaption: "Decorative wall panelling substrate",
    items: finishesData,
    checksTitle: "Before Fabrication, Consider:",
    checks: fabricationChecksData,
    cta: {
      text: "Discuss Project Fabrication Needs",
      href: "#mr-enquiry",
    },
  },
  quality: {
    eyebrow: "Understanding IS 5509:2021",
    title: "The Indian Standard for Fire Retardant Plywood.",
    paragraphs: [
      "The Bureau of Indian Standards publishes IS 5509:2021 Fire Retardant Plywood Specification (Third Revision).",
      "The standard addresses fire-retardant chemicals, treatment methods, conditioning after treatment, dimensions, tolerances, workmanship, moisture content, flammability, flame penetration, rate of burning, water resistance, static bending strength, and marking requirements.",
      "BIS revised the earlier IS 5509:2000 standard in 2021, with the previous version subsequently withdrawn.",
    ],
    badge: {
      isNumber: "5509",
      year: "2021",
      label: "Fire Retardant Plywood Specification",
      sub: "IS 5509 Certified Standard",
    },
    cta: {
      text: "Explore Quality & Certifications",
      href: HOME_SECTIONS.quality,
    },
  },
  whyPentagon: {
    eyebrow: "Why Choose Pentagon Fire Retardant Plywood?",
    title: "Special Requirements Deserve More Than an Ordinary Material Selection.",
    items: whyPentagonData,
  },
  bulkSection: {
    eyebrow: "For Architects, Dealers & Projects",
    title: (
      <>
        Have a Fire-Retardant Plywood{" "}
        <em className="text-[#F4D8B4]">Project Requirement?</em>
      </>
    ),
    copy: "Fire-retardant requirements are often more specific than an ordinary plywood enquiry. Share your application, thickness, sheet size, quantity, delivery location, and project specification with Pentagon.",
    primaryCta: { text: "Discuss a Project Requirement", href: "#mr-enquiry" },
    secondaryCta: { text: "Talk to Our Team", href: ROUTES.contact },
    useCases: [
      "Commercial Interiors",
      "Hospitality Interiors",
      "Retail Spaces & Displays",
      "Office Partitions & Panelling",
      "Institutional & School Projects",
      "Public-Space Interiors",
      "Residential Projects",
      "Tender Specification Procurement",
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers before you specify Fire Retardant Plywood.",
    items: faqsData,
  },
  enquiry: {
    eyebrow: "Building an Interior With Specific Fire-Performance Requirements?",
    title: "From furniture and partitions to wall panelling, start with the project specification.",
    copy: "Share your application, required thickness, sheet size, quantity, delivery location and any fire-performance requirements with the Pentagon team.",
    phoneLink: "tel:+917015085556",
    phoneText: "Call +91 70150 85556",
    whatsappLink: "https://wa.me/917015085556?text=Hello%20Pentagon%20Plywood%2C%20I%20would%20like%20to%20discuss%20Fire%20Retardant%20Plywood%20for%20a%20project.",
    whatsappText: "WhatsApp our team",
    thicknesses: ["3 mm", "6 mm", "9 mm", "12 mm", "15 mm", "18 mm", "25 mm"],
    sheetSizes: ["8×4 ft", "8×3 ft", "7×4 ft", "7×3 ft", "6×4 ft", "6×3 ft"],
  },
};
