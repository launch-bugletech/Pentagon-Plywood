/* Formaldehyde Product Detail Data Module */

import HeroBgImage from "@/assets/product/industrial-chemicals-hero-bg.jpg";
import FormaldehydeShowcase from "@/assets/product/formaldehyde-showcase.jpg";
import ResinProcessImage from "@/assets/product/resin-synthesis-process.jpg";

export const formaldehydeProductData = {
  pageTitle: "Formaldehyde Solution (CH₂O / HCHO)",

  breadcrumbs: [
    ["Home", "/"],
    ["Products", "/products"],
    ["Industrial Chemicals", "/products/industrial-chemicals"],
    ["Formaldehyde", null],
  ],

  hero: {
    categoryBadge: "MADE BY PENTAGON · INDUSTRIAL CHEMICALS",
    gradeBadge: "CH₂O · CAS 50-00-0 · IS 3321",
    title: "Industrial Formaldehyde for Manufacturing That Depends on Chemistry.",
    description:
      "Pentagon manufactures Formaldehyde for industrial requirements from chemical manufacturing units in Yamunanagar, Haryana and Morbi, Gujarat.",
    subDescription:
      "Formaldehyde is an essential chemical building block used in synthesizing resins, adhesives, and binders across plywood, particleboard, MDF, laminates, and specialty chemical industries.",
    primaryCta: { text: "Request Formaldehyde Quote", href: "#enquiry" },
    secondaryCta: { text: "Discuss Technical Specification", href: "#specifications" },
    heroBg: HeroBgImage,
    productImage: FormaldehydeShowcase,
    productImageBadge: "IS 3321 CoA CERTIFIED",
  },

  quickFacts: [
    { label: "Product", value: "Formaldehyde Solution", icon: "FlaskConical" },
    { label: "Chemical Formula", value: "CH₂O / HCHO", icon: "Beaker" },
    { label: "CAS Number", value: "50-00-0 (Formalin)", icon: "FileSpreadsheet" },
    { label: "Available Concentrations", value: "37% and 43% Solutions", icon: "Activity" },
    { label: "Manufacturing Units", value: "Yamunanagar (HR) & Morbi (GJ)", icon: "Factory" },
    { label: "Standard Reference", value: "IS 3321 : 1973 Specification", icon: "Shield" },
    { label: "Primary Relevance", value: "UF, PF, & MF Resins", icon: "Layers" },
    { label: "Supply Model", value: "Industrial Tanker Bulk", icon: "Truck" },
  ],

  overview: {
    eyebrow: "UNDERSTAND FORMALDEHYDE",
    title: "A Chemical Building Block Behind Many Manufactured Materials.",
    paragraphs: [
      "Formaldehyde is a simple industrial chemical used as an intermediate in the manufacture of a wide range of products. For the wood-products industry, its most important role is in the production of resins and adhesives used to bond wood veneers, fibres and particles into finished structural panels.",
      "The U.S. EPA specifically identifies Formaldehyde as being used in synthetic resins for hardwood plywood, particleboard and MDF manufacturing. That connection is particularly relevant to Pentagon because the company operates across both wood-product manufacturing and industrial Formaldehyde chemical synthesis.",
    ],
    edgeImage: FormaldehydeShowcase,
    edgeCaption: "Quality Control Laboratory Sampling & Batch Certificate of Analysis (CoA)",
    callout: {
      title: "Pure Clear Solution (Formalin 37% / 43%)",
      copy: "Commercial aqueous formaldehyde is handled industrially as a clear, colorless liquid free from suspended matter. NIOSH notes that a 37% aqueous solution by weight is commonly referred to as formalin.",
    },
    cta: { text: "Explore Industrial Chemicals Overview", href: "/products/industrial-chemicals" },
  },

  processChain: {
    eyebrow: "BEFORE THE BOARD IS PRESSED, THE BOND IS CREATED",
    title: "Where Formaldehyde Fits Into Manufacturing",
    lead: "Formaldehyde is converted into several major synthetic resin families that act as structural adhesives and surface impregnating binders.",
    steps: [
      {
        title: "01 · Formaldehyde Feedstock",
        desc: "High-purity aqueous formaldehyde solution (CH₂O) manufactured under strict catalyst temperature control.",
      },
      {
        title: "02 · Resin Adhesive Synthesis",
        desc: "Polymerized with Urea, Phenol, or Melamine to formulate UF, PF, and MF synthetic resin binders.",
      },
      {
        title: "03 · Composite Wood Bonding",
        desc: "Applied onto timber veneers or wood particles prior to high-pressure hot pressing into finished panels.",
      },
    ],
  },

  applications: {
    eyebrow: "INDUSTRIAL APPLICATIONS",
    title: "One Chemical Intermediate. Multiple Manufacturing Pathways.",
    copy: "Formaldehyde chemistry serves as an essential feedstock across composite wood, laminate, and chemical industries.",
    items: [
      {
        title: "Plywood Manufacturing",
        copy: "Formaldehyde chemistry is used in phenolic and amino resins that bond veneer layers during plywood production.",
        image: ResinProcessImage,
        alt: "Plywood veneer resin application",
      },
      {
        title: "Particleboard & MDF Production",
        copy: "Resins containing formaldehyde chemistry are widely used to bond wood particles and fibres into engineered panels.",
        image: HeroBgImage,
        alt: "Engineered panel plant",
      },
      {
        title: "Decorative Laminates",
        copy: "Formaldehyde-based melamine and phenolic resins form part of the chemistry used in high-pressure surface laminates.",
        image: FormaldehydeShowcase,
        alt: "Laminate surface resin synthesis",
      },
      {
        title: "Synthetic Resin Plants",
        copy: "Primary industrial raw material for chemical units formulating UF, PF, MF, and specialty resins.",
      },
      {
        title: "Industrial Binders & Adhesives",
        copy: "Used in producing industrial glues, paper impregnation resins, and textile treatment binders.",
      },
      {
        title: "Chemical Intermediates & Coatings",
        copy: "Serves as a building block for polyols, chelating agents, plastics, and industrial surface coatings.",
      },
    ],
  },

  concentrations: {
    eyebrow: "AVAILABLE FORMALDEHYDE SOLUTIONS",
    title: "Start With the Concentration Your Process Requires",
    copy: "Pentagon supplies commercial aqueous formaldehyde in standardized concentrations and custom technical specifications.",
    items: [
      {
        title: "Formaldehyde 37%",
        spec: "37% Solution",
        copy: "Commercial aqueous concentration (Formalin) widely used in resin plants and industrial chemical synthesis.",
        status: "Standard Grade",
      },
      {
        title: "Formaldehyde 43%",
        spec: "43% Solution",
        copy: "Higher-concentration industrial option for large-scale resin synthesis and chemical processing.",
        status: "High Concentration",
      },
      {
        title: "Custom Technical Specification",
        spec: "Custom Spec",
        copy: "Tailored concentration, acidity, or stabilizer content as agreed with technical procurement teams.",
        status: "Client Specification",
      },
    ],
  },

  specifications: {
    eyebrow: "TECHNICAL PRODUCT SPECIFICATION",
    title: "Industrial Formaldehyde Specification (IS 3321)",
    items: [
      ["Product Name", "Formaldehyde Solution"],
      ["Chemical Formula", "CH₂O / HCHO"],
      ["CAS Number", "50-00-0"],
      ["Physical Appearance", "Clear, colorless liquid free from foreign matter"],
      ["Standard Reference", "IS 3321 : 1973 Specification"],
      ["Enquiry Concentrations", "37% and 43% Solution by weight"],
      ["Acidity (as Formic Acid)", "Controlled within IS test parameters"],
      ["Methanol Stabilizer", "Specified as per storage & season requirement"],
      ["Batch Verification", "Certificate of Analysis (CoA) provided per tanker"],
    ],
    alert: {
      eyebrow: "IS 3321 : 1973 SPECIFICATION",
      title: "Indian Standard Reference for Formaldehyde Solution",
      paragraph1:
        "IS 3321 covers specification parameters for industrial formaldehyde solution, evaluating aldehyde content, acidity, ash, and methanol stabilization.",
      paragraph2:
        "Batch-wise Certificate of Analysis (CoA) records ensure consistent reaction behavior during downstream resin cooking.",
    },
  },

  locations: {
    eyebrow: "TWO INDUSTRIAL MANUFACTURING LOCATIONS",
    title: "Yamunanagar & Morbi Manufacturing Facilities",
    items: [
      {
        city: "Yamunanagar",
        state: "Haryana",
        tag: "North India Facility",
        desc: "Chemical unit connected directly with northern India's major wood-products and resin manufacturing belt.",
      },
      {
        city: "Morbi",
        state: "Gujarat",
        tag: "West India Facility",
        desc: "Western India manufacturing facility supplying bulk industrial formaldehyde across chemical corridors and ports.",
      },
    ],
  },

  safety: {
    eyebrow: "RESPONSIBLE CHEMICAL HANDLING & SAFETY",
    title: "Safety, Storage & Handling Controls",
    warning:
      "Formaldehyde is a controlled hazardous chemical. Industrial users must follow the product Safety Data Sheet (SDS), site engineering controls, and occupational safety regulations.",
    controls: [
      "Adequate local exhaust ventilation & chemical fume hood controls",
      "Prevention of unnecessary vapor inhalation exposure",
      "Chemical-resistant gloves, aprons, and eye/face goggles",
      "Sealed stainless steel transfer piping and storage vessels",
      "Spill containment berms and emergency shower/eyewash stations",
      "Access to current SDS and trained chemical handling personnel",
    ],
    cta: { text: "Request Safety Data Sheet (SDS)", href: "#enquiry" },
  },

  faqs: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Questions About Formaldehyde Supply",
    items: [
      {
        question: "Does Pentagon manufacture Formaldehyde?",
        answer: "Yes. Pentagon operates Formaldehyde manufacturing units in Yamunanagar, Haryana and Morbi, Gujarat.",
      },
      {
        question: "What is Formaldehyde?",
        answer: "Formaldehyde is a simple chemical compound with formula CH₂O / HCHO and CAS number 50-00-0, commonly handled industrially as an aqueous solution.",
      },
      {
        question: "What is Formaldehyde used for?",
        answer: "It is a primary chemical intermediate used in producing UF, PF, and MF resins, adhesives, composite wood panels, laminates, and specialty chemicals.",
      },
      {
        question: "Why is Formaldehyde important to plywood manufacturing?",
        answer: "It is the key chemical feedstock used in synthesizing adhesives that bond timber veneers during high-pressure hot pressing.",
      },
      {
        question: "What concentrations does Pentagon offer?",
        answer: "Pentagon's enquiry options include Formaldehyde 37% and Formaldehyde 43%, as well as custom technical specifications.",
      },
      {
        question: "What is formalin?",
        answer: "NIOSH describes formalin as an aqueous solution containing approximately 37% Formaldehyde by weight.",
      },
      {
        question: "What standard applies to Formaldehyde solution in India?",
        answer: "The Indian Standard reference is IS 3321:1973 Specification for Formaldehyde Solution.",
      },
      {
        question: "Can I request a Certificate of Analysis (CoA)?",
        answer: "Yes. Industrial buyers receive batch-wise Certificate of Analysis (CoA) documentation for quality verification.",
      },
      {
        question: "Can I request a Safety Data Sheet (SDS)?",
        answer: "Yes. The current Safety Data Sheet (SDS) is provided for workplace handling and compliance.",
      },
      {
        question: "Does Pentagon supply tanker quantities?",
        answer: "Yes. Supply is structured for industrial road tanker loads and recurring monthly procurement contracts.",
      },
    ],
  },

  enquiry: {
    eyebrow: "INDUSTRIAL FORMALDEHYDE QUOTE",
    title: "Request Formaldehyde Quote & Technical Spec",
    copy: "Share your required concentration, quantity, application, delivery frequency and destination with Pentagon.",
    productName: "Formaldehyde Solution",
    category: "Industrial Chemicals",
    phoneText: "+91 70150 85556",
    phoneLink: "tel:+917015085556",
  },
};
