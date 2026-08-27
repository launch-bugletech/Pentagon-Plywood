import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  ExternalLink,
  Factory,
  Flame,
  FlaskConical,
  Hammer,
  Layers,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target,
  Trees,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ABOUT_SECTIONS,
  APPLICATION_SECTIONS,
  CONTACT_SECTIONS,
  DEALER_SECTIONS,
  HOME_SECTIONS,
  PRODUCT_ROUTES,
  ROUTES,
} from "../../app/routes.js";
// import manufacturingImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.jpg";
import manufacturingImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.png"; 
import heroInteriorImage from "../../assets/homepage/hero_wood_interior_plants.jpg";
import leadershipOfficeImage from "../../assets/homepage/pentagon_leadership_office.jpg";
import pressFactoryImage from "../../assets/homepage/plywood_press_factory.jpg";
import plywoodImage from "../../assets/homepage/products/Marine-plywood-1000x1000.webp";
import interiorImage from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import edgeImage from "../../assets/product/mr plywood/Wood veneer layers on plywood edge.png";

const c = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const section = "py-16 sm:py-20 lg:py-28";
const primary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#8E510D] hover:shadow-lg hover:-translate-y-0.5";
const outline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#8E510D]/40 text-[#8E510D] px-5 py-3 text-sm font-bold transition-all duration-300 hover:bg-[#143D2B] hover:text-white hover:border-[#143D2B]";

// HERO PERSONAS (PUNCHY, USER-CONNECTED COPY)
const PERSONAS = [
  {
    id: "dealers",
    label: "Dealers & Distributors",
    icon: Briefcase,
    title: "Genuine Margins & Dependable Supply",
    desc: "Grow your trade business with IS-certified plywood, blockboard, and doors. Enjoy strong dealer margins, steady stock, and honest delivery commitments.",
    ctaText: "Become a Dealer Partner",
    ctaLink: ROUTES.dealers,
    secondaryText: "View Products",
    secondaryLink: HOME_SECTIONS.products,
    badge: "Trade Partnership",
    highlights: [
      "Tier-1 Dealer Margins",
      "IS Grade Certified",
      "Direct Factory Supply",
    ],
  },
  {
    id: "architects",
    label: "Architects & Designers",
    icon: Ruler,
    title: "Precision Specs for Visionary Spaces",
    desc: "Specify calibrated core thickness and 100% Boiling Waterproof (BWP IS:710) panels engineered for warping resistance, stability, and flawless finishing.",
    ctaText: "Request Specifications",
    ctaLink: CONTACT_SECTIONS.form,
    secondaryText: "Explore Applications",
    secondaryLink: ROUTES.applications,
    badge: "Design Specifications",
    highlights: [
      "Calibrated Core Thickness",
      "Zero Core Voids",
      "BWP IS:710 Certified",
    ],
  },
  {
    id: "contractors",
    label: "Builders & Contractors",
    icon: Building2,
    title: "Direct Mill Supply for Large Projects",
    desc: "Keep your sites running on schedule with direct factory dispatches, volume project pricing, and reliable structural panel strength.",
    ctaText: "Get Bulk Project Quote",
    ctaLink: CONTACT_SECTIONS.form,
    secondaryText: "Manufacturing Scale",
    secondaryLink: "#journey",
    badge: "Project Procurement",
    highlights: [
      "3.3+ Lakh sq.ft. Facilities",
      "Direct Factory Dispatch",
      "Volume Project Pricing",
    ],
  },
  {
    id: "industrial",
    label: "Industrial Chemical Buyers",
    icon: Factory,
    title: "High-Purity Formaldehyde & Resin Supply",
    desc: "Direct chemical supply from Patson Industries (Morbi, GJ) & Synochem Organics (Yamunanagar, HR) with 200 MT/day installed capacity.",
    ctaText: "Discuss Chemical Supply",
    ctaLink: CONTACT_SECTIONS.form,
    secondaryText: "Chemical Facilities",
    secondaryLink: "#about-manufacturing",
    badge: "Chemical Manufacturing",
    highlights: [
      "200 MT/Day Capacity",
      "Morbi & Yamunanagar Units",
      "Industrial Grade Purity",
    ],
  },
];

const HERO_STATS = [
  {
    value: "1986",
    label: "Group Journey Began",
    sub: "40+ Years Timber Heritage",
  },
  {
    value: "3.3+ Lakh",
    label: "Sq. Ft. Facility Area",
    sub: "Yamunanagar & Morbi Plants",
  },
  {
    value: "5,000 m²",
    label: "Daily Panel Installed Capacity",
    sub: "Plywood, Blockboard & Doors",
  },
  {
    value: "₹100 Cr+",
    label: "FY 2025–26 Turnover",
    sub: "Panels & Chemical Units",
  },
];

// PLYWOOD ANATOMY INSPECTOR DATA
const PLYWOOD_LAYERS = [
  {
    id: "top-face",
    name: "Top Face Veneer",
    thickness: "0.5mm - 1.0mm",
    color: "#C86D51",
    description:
      "Premium hardwood timber face veneer, peeled from selected logs for a smooth finish and natural wood grain aesthetic.",
    benefit:
      "Enhances surface bonding for laminates and polished wood finishes.",
  },
  {
    id: "core-1",
    name: "Cross-Grained Hardwood Core (Layer 1)",
    thickness: "2.5mm - 3.5mm",
    color: "#B87531",
    description:
      "Completely gap-free, seasoned hardwood veneers laid perpendicularly to prevent structural warping and bending.",
    benefit: "Provides high screw-holding capacity and dimensional stability.",
  },
  {
    id: "resin-bond",
    name: "In-House Phenolic Resin Bond Line",
    thickness: "Micro-Adhesive Layer",
    color: "#C86D51",
    description:
      "Formulated in-house using Formaldehyde manufactured by our chemical division (Synochem & Patson Industries).",
    benefit: "Guarantees 100% Boiling Waterproof (BWP IS:710) bond protection.",
  },
  {
    id: "core-2",
    name: "Cross-Grained Hardwood Core (Layer 2)",
    thickness: "2.5mm - 3.5mm",
    color: "#9C6846",
    description:
      "Full-panel core assembly pressed under high tonnage and temperature for uniform internal strength.",
    benefit: "Eliminates core voids, core overlaps, and internal air pockets.",
  },
  {
    id: "bottom-face",
    name: "Bottom Back Veneer",
    thickness: "0.5mm - 1.0mm",
    color: "#C86D51",
    description:
      "Matching timber back veneer calibrated to balance tension across the plywood sheet.",
    benefit:
      "Ensures flatness and prevents cupping or bowing under humidity changes.",
  },
];

// GROUP SNAPSHOT METRICS DATA
const GROUP_FACTS = [
  { label: "Group journey began", value: "1986", category: "legacy" },
  {
    label: "Pentagon Plywood incorporated",
    value: "20 September 1996",
    category: "legacy",
  },
  {
    label: "Group sectors",
    value: "Wood-based panels and chemicals",
    category: "capacity",
  },
  {
    label: "Manufacturing locations",
    value: "Yamunanagar, Haryana and Morbi, Gujarat",
    category: "capacity",
  },
  { label: "Manufacturing units", value: "4 Units", category: "capacity" },
  {
    label: "Combined facility area",
    value: "Over 3.3 lakh sq. ft.",
    category: "capacity",
  },
  {
    label: "Wood-panel installed capacity",
    value: "5,000 m² per day",
    category: "capacity",
  },
  {
    label: "Wood-panel licensed capacity",
    value: "10,000 m² per day",
    category: "capacity",
  },
  {
    label: "Chemical installed capacity",
    value: "200 MT per day",
    category: "capacity",
  },
  { label: "Team strength", value: "Approx. 390 people", category: "legacy" },
  {
    label: "Combined turnover",
    value: "Approx. ₹100 crore in FY 2025–26",
    category: "legacy",
  },
];

// TIMELINE ERAS DATA
const ERAS = [
  {
    id: "era-1",
    period: "1986 – 1995",
    title: "Timber Roots & Veneer Peeling",
    desc: "The group began as a timber merchant in Yamunanagar, then moved into veneer processing through its first forward integration.",
    icon: Trees,
    milestones: [
      "1986: Trading of wooden logs begins",
      "Dec 1987: S. A. Timber Traders is formed for wooden-log trading",
      "1991: First peeling machine installed to convert logs into veneer",
      "1995: Multiple peeling machines installed through machinery expansion",
    ],
  },
  {
    id: "era-2",
    period: "1996 – 2008",
    title: "Pentagon Incorporation & Pressing Scale",
    desc: "Pentagon Plywood Private Limited was incorporated in 1996, followed by pressing-unit installation in 1997 to convert veneer into plywood.",
    icon: Factory,
    milestones: [
      "20 Sept 1996: Pentagon Plywood Pvt Ltd incorporated",
      "1997: Pressing units installed at both units for plywood production",
      "2008: Machinery and land expansions doubled production capacity",
      "2008: Business expanded into multiple cities across India",
    ],
  },
  {
    id: "era-3",
    period: "2013 – 2023",
    title: "Expansion & Chemical Integration",
    desc: "Further wood-panel expansion was followed by backward integration into Formaldehyde manufacturing in Yamunanagar and Morbi, Gujarat.",
    icon: FlaskConical,
    milestones: [
      "2013: Further machinery and land expansion increased capacity at both wood-based units",
      "2015–16: Licensed production capacity doubled; actual capacity remained unchanged",
      "2017: Synochem Organics, a Formaldehyde unit in Yamunanagar, was acquired",
      "2018: Patson Industries, a Formaldehyde manufacturer in Morbi, Gujarat, was acquired",
      "2023: Patson Industries capacity doubled from 60 MT/day to 120 MT/day",
    ],
  },
  {
    id: "era-4",
    period: "Today & Beyond",
    title: "Integrated Panel & Chemical Powerhouse",
    desc: "Operating 4 manufacturing units across 3.3+ lakh sq. ft., generating ₹100+ Crore turnover with 390+ dedicated personnel across India.",
    icon: Award,
    milestones: [
      "Combined wood-panel installed capacity: 5,000 m²/day",
      "Chemical manufacturing capacity: 200 MT/day",
      "Serving Dealers, Architects, Contractors & Industrial Resin Buyers",
      "Continuous machinery upgrading & responsible expansion",
    ],
  },
];

// GROUP STRUCTURE DATA (4 COMPANIES)
const COMPANIES = [
  {
    name: "S. A. Timber Traders",
    inc: "Incorporated on 1 April 1987",
    location: "Village Kami Majra, Khajuri Road, Yamunanagar, Haryana",
    desc: "The founding entity of the group, specializing in wooden-log procurement, timber trading, and rotary veneer processing.",
    sector: "Wood Veneers & Timber",
    link: "#journey",
  },
  {
    name: "Pentagon Plywood Private Limited",
    inc: "Incorporated on 20 September 1996",
    location: "Village Raipur, Khajuri Road, Yamunanagar, Haryana",
    desc: "The flagship wood-panel manufacturing hub producing IS:303 & IS:710 certified plywood, blockboard, and flush doors.",
    sector: "Wood-Based Panels",
    link: HOME_SECTIONS.products,
  },
  {
    name: "Synochem Organics Private Limited",
    inc: "Integrated in 2017",
    location: "Manakpur, Chhachhrauli Road, Jagadhri, Yamunanagar, Haryana",
    desc: "Chemical manufacturing unit supplying Formaldehyde used for resin production in plywood and wood composite bonding.",
    sector: "Industrial Chemicals",
    link: PRODUCT_ROUTES.formaldehyde,
  },
  {
    name: "Patson Industries",
    inc: "Integrated in 2018 | Capacity Doubled 2023",
    location: "GIDC Vaghasia, Wankaner, Morbi, Gujarat",
    desc: "Chemical manufacturing facility in Gujarat with 120 MT/day capacity, serving resin, laminate, and chemical industries.",
    sector: "Industrial Chemicals",
    link: PRODUCT_ROUTES.formaldehyde,
  },
];

// 3-STAGE MANUFACTURING PROCESS DATA
const PROCESS_STAGES = [
  {
    id: "stage-1",
    stage: "Stage 01",
    title: "Log Selection & Core Veneer Peeling",
    icon: Trees,
    badge: "Raw Material Prep",
    desc: "Sustainably sourced wooden logs are selected, debarked, and rotary peeled into uniform thickness core veneers. Veneers undergo forced-air drying to achieve optimal moisture content.",
    steps: [
      "Strict log quality inspection & sorting",
      "High-precision rotary veneer peeling",
      "Thermostatically controlled veneer moisture drying",
      "Veneer defect clipping & grading",
    ],
  },
  {
    id: "stage-2",
    stage: "Stage 02",
    title: "In-House Resin Coating & Hot Pressing",
    icon: Flame,
    badge: "Bonding & Curing",
    desc: "Veneers are coated with in-house manufactured Formaldehyde-based synthetic resins. Cores are stacked in alternating perpendicular grain directions and subjected to high-tonnage hydraulic hot pressing.",
    steps: [
      "Formulation of phenolic & melamine synthetic resins",
      "Automated glue spreader application",
      "Cross-grain core matrix assembly",
      "Multi-day high pressure hydraulic hot pressing",
    ],
  },
  {
    id: "stage-3",
    stage: "Stage 03",
    title: "Calibration, Testing & Quality Inspection",
    icon: ShieldCheck,
    badge: "Finishing & QC",
    desc: "Pressed boards undergo wide-belt calibrated sanding, edge precision trimming, and rigorous laboratory tests for moisture resistance, boiling water immersion, and structural load.",
    steps: [
      "Wide-belt dual-head calibrated sanding",
      "4-side right-angle precision trimming",
      "IS:303 & IS:710 lab immersion & stress testing",
      "Final surface inspection, branding & protective packaging",
    ],
  },
];

// TARGET AUDIENCES (BUILT AROUND REAL REQUIREMENTS)
const AUDIENCES = [
  {
    id: "dealers",
    num: "01",
    title: "Dealers and Distributors",
    copy: "Comprehensive product information, transparent pricing schedules, tier-1 margin support, and dependable multi-city inventory dispatch.",
    link: ROUTES.dealers,
    cta: "Explore Dealership",
  },
  {
    id: "furniture",
    num: "02",
    title: "Furniture Manufacturers",
    copy: "Wood panels and blockboards selected specifically around edge fabrication, screw holding, surface lamination, and intended furniture use.",
    link: HOME_SECTIONS.products,
    cta: "View Panel Range",
  },
  {
    id: "contractors",
    num: "03",
    title: "Builders and Contractors",
    copy: "Bulk procurement discussions based on direct factory pricing, delivery schedules, site conditions, and strict IS standard compliance.",
    link: CONTACT_SECTIONS.form,
    cta: "Request Project Quote",
  },
  {
    id: "architects",
    num: "04",
    title: "Architects and Interior Professionals",
    copy: "Application-led guidance, technical specification sheets, grade certifications, and customized panel dimensions for interior designs.",
    link: ROUTES.applications,
    cta: "Explore Applications",
  },
  {
    id: "industrial",
    num: "05",
    title: "Industrial Chemical Buyers",
    copy: "High-purity Formaldehyde supply from our Yamunanagar and Morbi units for resin, plywood, laminate, and chemical manufacturing requirements.",
    link: PRODUCT_ROUTES.formaldehyde,
    cta: "Chemical Supply Enquiry",
  },
];

// MANUFACTURING HUBS
const MANUFACTURING_HUBS = [
  {
    name: "Yamunanagar Manufacturing Hub",
    location: "Khajuri Road & Chhachhrauli Road, Yamunanagar, Haryana",
    sector: "Wood Panels & Formaldehyde Chemical",
    area: "Over 2.5 Lakh Sq. Ft.",
    units: [
      "S. A. Timber Traders (Veneer Unit)",
      "Pentagon Plywood Pvt Ltd (Plywood Unit)",
      "Synochem Organics Pvt Ltd (Formaldehyde Unit)",
    ],
    products: [
      "BWP Marine Plywood",
      "Commercial MR Plywood",
      "Blockboard & Flush Doors",
      "Formaldehyde Resin",
    ],
    accent: "#143D2B",
  },
  {
    name: "Morbi Industrial Chemical Hub",
    location: "GIDC Vaghasia, Wankaner, Morbi, Gujarat",
    sector: "Industrial Chemical Manufacturing",
    area: "7,456 Sq. Metres",
    units: ["Patson Industries (Formaldehyde Unit)"],
    products: [
      "Industrial Grade Formaldehyde",
      "Resin Raw Materials for Laminates & Panels",
    ],
    accent: "#9C6846",
  },
];

const principles = [
  {
    title: "Improvement Through Experience",
    copy: "Years in manufacturing matter when they lead to better processes, stronger capabilities and more informed decisions.",
    icon: Award,
  },
  {
    title: "Responsibility Before Claims",
    copy: "We communicate products according to their verified grade, intended application and available specifications.",
    icon: ShieldCheck,
  },
  {
    title: "Respect for the Requirement",
    copy: "We begin by understanding the actual requirement of each dealer, manufacturer, contractor and buyer.",
    icon: Users,
  },
  {
    title: "Integration With Purpose",
    copy: "Expansion into veneer processing, wood panels and Formaldehyde production strengthens the manufacturing foundation.",
    icon: Cpu,
  },
  {
    title: "Relationships Beyond the Order",
    copy: "Clear communication, reliable supply and accountable service build lasting working relationships.",
    icon: Sparkles,
  },
];

const faqs = [
  [
    "When did Pentagon’s journey begin?",
    "The group’s journey began in 1986 with timber trading. Pentagon Plywood Private Limited was incorporated on 20 September 1996.",
  ],
  [
    "Who leads Pentagon Plywood Private Limited?",
    "Mr. Anand Jain is the Managing Director, and Mr. Ashu Jain is a Director.",
  ],
  [
    "What does Pentagon manufacture?",
    "The group manufactures plywood, blockboard, flush doors and Formaldehyde through its wood-based panel and chemical manufacturing operations.",
  ],
  [
    "Where are Pentagon’s manufacturing units located?",
    "The group operates manufacturing units in Yamunanagar, Haryana and Morbi, Gujarat.",
  ],
  [
    "How many companies are part of the Pentagon Group?",
    "The group includes S. A. Timber Traders, Pentagon Plywood Private Limited, Synochem Organics Private Limited and Patson Industries.",
  ],
  [
    "Does Pentagon serve only wood-panel customers?",
    "No. The group also manufactures Formaldehyde for industrial requirements, including applications connected to resin and plywood manufacturing.",
  ],
  [
    "Can dealers, project buyers and manufacturers contact Pentagon directly?",
    "Yes. Contact the team to discuss products, quantities and delivery requirements.",
  ],
];

function Heading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-[#C86D51]" : "text-[#8E510D]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl leading-[1.05] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-brand-charcoal"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-7 ${light ? "text-white/75" : "text-[#65736A]"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

function AboutPage() {
  const [activePersonaId, setActivePersonaId] = useState("dealers");
  const [activeLayerId, setActiveLayerId] = useState("resin-bond");
  const [activeEraId, setActiveEraId] = useState("era-1");
  const [activeStageId, setActiveStageId] = useState("stage-1");
  const [snapshotCategory, setSnapshotCategory] = useState("all");

  const activePersona =
    PERSONAS.find((p) => p.id === activePersonaId) || PERSONAS[0];
  const activeLayer =
    PLYWOOD_LAYERS.find((l) => l.id === activeLayerId) || PLYWOOD_LAYERS[2];
  const activeEra = ERAS.find((e) => e.id === activeEraId) || ERAS[0];
  const activeStage =
    PROCESS_STAGES.find((s) => s.id === activeStageId) || PROCESS_STAGES[0];

  const filteredFacts =
    snapshotCategory === "all"
      ? GROUP_FACTS
      : GROUP_FACTS.filter((f) => f.category === snapshotCategory);

  useEffect(() => {
    document.title = "About Pentagon Plywood | Pentagon Group";
  }, []);

  return (
    <div
      data-palette="pentagon-brand"
      className="home-theme bg-brand-cream text-brand-charcoal overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION WITH REAL NATURAL INTERIOR & GREENERY BACKGROUND */}
      <section
        id="story"
        className="relative isolate overflow-hidden bg-[#0D2419] text-white"
      >
        <img
          src={heroInteriorImage}
          alt="Pentagon Plywood natural wood interior with organic green houseplants"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center scale-105"
        />
        {/* Soft, rich forest green & dark timber gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D2419]/95 via-[#0D2419]/85 to-[#0D2419]/50 lg:via-[#0D2419]/80 lg:to-[#0D2419]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0D2419] via-transparent to-black/40" />

        <div className={c}>
          <nav
            className="flex items-center gap-2 py-4 sm:py-5 text-xs text-white/70"
            aria-label="Breadcrumb"
          >
            <a href={ROUTES.home} className="transition hover:text-[#C86D51]">
              Home
            </a>
            <span className="text-white/40">›</span>
            <strong className="text-[#C86D51]">About Us</strong>
          </nav>

          <div className="py-6 sm:py-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C86D51]/40 bg-[#C86D51]/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-[#C86D51] backdrop-blur-sm">
                  <Sparkles
                    size={14}
                    className="animate-pulse text-[#C86D51]"
                  />
                  4 Decades of Craftsmanship & Trust
                </div>

                <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.05] sm:text-5xl lg:text-6xl text-white">
                  Built From Timber. <br className="hidden sm:inline" />
                  <span className="home-heading-accent-on-dark font-normal not-italic">
                    Crafted for Spaces That Last.
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-lg sm:leading-8">
                  From morning kitchen cabinets to quiet bedroom doors, we
                  engineer the core strength inside every sheet. Nearly 40 years
                  of Indian timber heritage, manufactured with honest commitment
                  and complete raw material control.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 text-xs font-medium text-white/80">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur-sm">
                    <ShieldCheck size={14} className="text-[#C86D51]" />
                    <span>IS:303 & IS:710 Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur-sm">
                    <MapPin size={14} className="text-[#C86D51]" />
                    <span>Yamunanagar & Morbi Plants</span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5">
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D99143] px-6 py-3.5 text-sm font-bold text-[#14211A] shadow-lg shadow-[#D99143]/20 transition-all duration-300 hover:bg-[#C86D51] hover:scale-[1.02]"
                    href={CONTACT_SECTIONS.form}
                  >
                    Discuss Your Requirement <ArrowRight size={16} />
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#14211A]"
                    href={HOME_SECTIONS.products}
                  >
                    Explore Products <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* PERSONA SWITCHER BOX (OPTIMIZED FOR MOBILE & DESKTOP) */}
              <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-4.5 sm:p-7 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C86D51]">
                      How can we support you?
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Select Your Role
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#D99143]/20 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#C86D51]">
                    Tailored Solutions
                  </span>
                </div>

                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2">
                  {PERSONAS.map((p) => {
                    const Icon = p.icon;
                    const isActive = p.id === activePersonaId;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setActivePersonaId(p.id)}
                        className={`flex items-center gap-1.5 sm:gap-2 rounded-xl p-2 sm:p-2.5 text-left text-[11px] sm:text-xs transition-all duration-200 ${
                          isActive
                            ? "bg-[#D99143] text-[#14211A] shadow-md font-bold scale-[1.02]"
                            : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white font-medium"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={
                            isActive ? "text-[#14211A]" : "text-[#C86D51]"
                          }
                        />
                        <span className="truncate">{p.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 sm:mt-5 rounded-xl sm:rounded-2xl border border-white/15 bg-[#0D2419]/90 p-4 sm:p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#C86D51]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C86D51]">
                      {activePersona.badge}
                    </span>
                  </div>
                  <h4 className="mt-2 font-['DM_Serif_Display',Georgia,serif] text-lg sm:text-xl text-white">
                    {activePersona.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/80">
                    {activePersona.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {activePersona.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/90"
                      >
                        <Check size={11} className="text-[#C86D51]" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
                    <a
                      href={activePersona.ctaLink}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#D99143] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-[#14211A] hover:bg-[#C86D51] transition-colors"
                    >
                      {activePersona.ctaText} <ChevronRight size={14} />
                    </a>
                    <a
                      href={activePersona.secondaryLink}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-[#C86D51] transition-colors"
                    >
                      {activePersona.secondaryText} <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO METRIC CARDS (HIDDEN ON MOBILE TO PREVENT BULKINESS, SHOWN ON TABLET & DESKTOP) */}
            <div className="mt-12 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4 lg:mt-16">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#C86D51]/50 hover:bg-white/10 hover:-translate-y-1"
                >
                  <p className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#C86D51] sm:text-3xl lg:text-4xl group-hover:scale-105 transition-transform">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-white">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/60">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & INTERACTIVE ANATOMY DIAGRAM */}
      <section id="philosophy" className={section}>
        <div className={c}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Heading
                eyebrow="Craftsmanship Philosophy"
                title="We See More Than a Finished Board."
                copy="A sheet of plywood becomes the bed you sleep on, the kitchen cabinet opened every morning, or the door that secures your space. That is why every hidden veneer layer, resin bond line, and press parameter matters."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-[#526057]">
                <p>
                  Pentagon Plywood Private Limited is part of the Pentagon Group
                  of Companies, operating across{" "}
                  <strong>wood-based panel manufacturing</strong> and{" "}
                  <strong>chemical manufacturing</strong>. By manufacturing our
                  own Formaldehyde resin raw materials, we achieve uncompromised
                  bonding control over every single sheet.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-[#E7E1D8] bg-[#F7F3EC] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9C6846]">
                  Interactive Sheet Anatomy
                </p>
                <p className="mt-1 text-sm font-semibold text-[#14211A]">
                  Click any layer on the diagram to inspect its construction:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PLYWOOD_LAYERS.map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        activeLayerId === layer.id
                          ? "bg-[#143D2B] text-white shadow-sm"
                          : "bg-white text-[#65736A] hover:bg-[#E7E1D8] hover:text-[#14211A]"
                      }`}
                    >
                      {layer.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* VISUAL SVG PLYWOOD CROSS-SECTION INSPECTOR */}
            <div className="rounded-3xl border border-[#D9D3C8] bg-white p-6 shadow-xl lg:p-8">
              <div className="flex items-center justify-between border-b border-[#E7E1D8] pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#9C6846]" size={20} />
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A]">
                    Plywood Layer Inspector
                  </h3>
                </div>
                <Badge variant="accent">Cross-Section View</Badge>
              </div>

              <div className="mt-6 space-y-2">
                {PLYWOOD_LAYERS.map((layer) => {
                  const isActive = activeLayerId === layer.id;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`group cursor-pointer rounded-xl p-3.5 transition-all duration-200 ${
                        isActive
                          ? "border-2 border-[#143D2B] bg-[#143D2B]/5 shadow-md scale-[1.01]"
                          : "border border-[#E7E1D8] bg-[#FDFBF8] hover:border-[#D99143] hover:bg-[#F7F3EC]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="h-4 w-4 rounded-full shadow-inner"
                            style={{ backgroundColor: layer.color }}
                          />
                          <span
                            className={`text-sm font-bold ${isActive ? "text-[#143D2B]" : "text-[#14211A]"}`}
                          >
                            {layer.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#65736A]">
                          {layer.thickness}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-[#143D2B] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51]">
                    Layer Specification
                  </span>
                  <span className="text-xs text-white/65">
                    {activeLayer.thickness}
                  </span>
                </div>
                <h4 className="mt-2 font-['DM_Serif_Display',Georgia,serif] text-lg text-white">
                  {activeLayer.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  {activeLayer.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-[#C86D51]">
                  <Check size={14} />
                  <span>{activeLayer.benefit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROUP SNAPSHOT (MISSING SECTION 1 RE-INTEGRATED) */}
      <section id="group-snapshot" className="bg-[#F4EADD] py-16 sm:py-24">
        <div className={c}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading
              eyebrow="Group Snapshot"
              title="A Manufacturing Group Built Through Steady Expansion."
              copy="Key figures and verified capacity metrics across our wood-panel and industrial chemical divisions."
            />
            {/* Filter Tabs */}
            <div className="flex shrink-0 flex-wrap gap-2">
              {[
                { id: "all", label: "All Verified Facts" },
                { id: "capacity", label: "Capacities & Scale" },
                { id: "legacy", label: "Legacy & Workforce" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSnapshotCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    snapshotCategory === cat.id
                      ? "bg-[#143D2B] text-white shadow-md"
                      : "bg-white text-[#65736A] hover:bg-[#E7E1D8] hover:text-[#14211A]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#D7C5AE] bg-white shadow-xl">
            <div className="divide-y divide-[#E7E1D8]">
              {filteredFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-1 gap-2 px-6 py-4.5 transition-colors hover:bg-[#FDFBF8] sm:grid-cols-2 sm:items-center sm:gap-8 sm:px-8"
                >
                  <span className="text-sm font-semibold text-[#65736A]">
                    {fact.label}
                  </span>
                  <strong className="text-sm font-bold text-[#14211A]">
                    {fact.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs text-[#65736A]">
            * Production capacities are shown separately because wood-based
            panels (m²/day) and industrial chemicals (MT/day) are measured
            differently.
          </p>
        </div>
      </section>

      {/* 4. OUR JOURNEY (1986 - PRESENT) */}
      <section id="journey" className={section}>
        <div className={c}>
          <Heading
            eyebrow="Where It Began"
            title="From Timber Trading to Integrated Manufacturing."
            copy="Nearly 40 years of continuous development expanding from log trading to high-capacity veneer peeling, hydraulic pressing, and backward integration into Formaldehyde chemical plants."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ERAS.map((era) => {
              const Icon = era.icon;
              const isActive = activeEraId === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setActiveEraId(era.id)}
                  className={`flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#143D2B] text-white shadow-xl scale-[1.02]"
                      : "border border-[#D7C5AE] bg-white text-[#14211A] hover:bg-[#FDFBF8] hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-[#C86D51]" : "text-[#9C6846]"}`}
                      >
                        {era.period}
                      </span>
                      <Icon
                        size={20}
                        className={
                          isActive ? "text-[#C86D51]" : "text-[#9C6846]"
                        }
                      />
                    </div>
                    <h3 className="mt-3 font-['DM_Serif_Display',Georgia,serif] text-xl leading-tight">
                      {era.title}
                    </h3>
                  </div>
                  <div
                    className={`mt-4 flex items-center gap-1 text-xs font-bold ${isActive ? "text-[#C86D51]" : "text-[#143D2B]"}`}
                  >
                    <span>View Era Highlights</span>
                    <ChevronRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-[#D7C5AE] bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <Badge variant="default" className="bg-[#9C6846]">
                  {activeEra.period}
                </Badge>
                <h3 className="mt-3 font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#14211A]">
                  {activeEra.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#65736A]">
                  {activeEra.desc}
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-[#C86D51] pl-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9C6846]">
                  Key Era Milestones
                </p>
                {activeEra.milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl bg-[#FDFBF8] p-3 border border-[#E7E1D8]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D99143] text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold leading-relaxed text-[#14211A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP (MISSING SECTION 2 RE-INTEGRATED WITH GENERATED IMAGE) */}
      <section
        id="leadership"
        className="bg-[#143D2B] py-16 text-white sm:py-24"
      >
        <div className={c}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <Heading
                light
                eyebrow="Leadership"
                title="Experience Gives Direction. Responsibility Gives It Meaning."
                copy="Pentagon Plywood Private Limited is guided by leadership with long-standing experience in the timber, wood-panel, and manufacturing sectors. The group’s direction is shaped by a practical commitment: understand the requirement, strengthen the process and build long-term relationships through dependable work."
              />

              {/* Leadership Profiles */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15">
                  <Users className="text-[#C86D51]" size={30} />
                  <h4 className="mt-4 font-['DM_Serif_Display',Georgia,serif] text-2xl text-white">
                    Mr. Anand Jain
                  </h4>
                  <p className="text-xs font-semibold text-[#C86D51]">
                    Managing Director
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/75">
                    Guides strategic direction, timber sourcing, and backward
                    integration across wood-panel and chemical divisions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15">
                  <Users className="text-[#C86D51]" size={30} />
                  <h4 className="mt-4 font-['DM_Serif_Display',Georgia,serif] text-2xl text-white">
                    Mr. Ashu Jain
                  </h4>
                  <p className="text-xs font-semibold text-[#C86D51]">
                    Director
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/75">
                    Leads plant operations, machinery upgrades, quality
                    compliance, and distribution network growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-5 py-3 text-xs font-bold text-[#14211A] hover:bg-[#C86D51] transition-colors"
                  href={CONTACT_SECTIONS.form}
                >
                  Connect With Our Leadership <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Generated Executive Office Image */}
            <div className="relative">
              <img
                src={leadershipOfficeImage}
                alt="Pentagon Plywood corporate executive office"
                className="aspect-[4/3] rounded-3xl object-cover shadow-2xl border border-white/20"
              />
              <div className="absolute -bottom-5 -left-5 max-w-xs rounded-2xl border border-white/20 bg-[#1A1512]/90 p-4 backdrop-blur-md hidden sm:block">
                <p className="text-xs italic text-white/90">
                  "Understand the requirement, strengthen the process, and build
                  lasting working relationships."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GROUP STRUCTURE (MISSING SECTION 3 RE-INTEGRATED) */}
      <section id="group-structure" className={section}>
        <div className={c}>
          <Heading
            eyebrow="Group Structure"
            title="Four Companies. Two Manufacturing Sectors."
            copy="Operating across wood-based panel manufacturing and chemical manufacturing to maintain complete quality and supply control."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {COMPANIES.map((comp, i) => (
              <div
                key={comp.name}
                className="group flex flex-col justify-between rounded-3xl border border-[#D9D3C8] bg-white p-7 transition-all duration-300 hover:border-[#143D2B] hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#9C6846]">
                      0{i + 1}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-[#F7F3EC] text-[#143D2B]"
                    >
                      {comp.sector}
                    </Badge>
                  </div>

                  <h3 className="mt-5 font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A] group-hover:text-[#143D2B]">
                    {comp.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#9C6846]">
                    {comp.inc}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#65736A]">
                    {comp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E1D8] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#65736A] flex items-center gap-1">
                    <MapPin size={12} className="text-[#9C6846]" />
                    {comp.location}
                  </span>
                  <a
                    href={comp.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#143D2B] hover:text-[#D99143]"
                  >
                    Explore <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR MANUFACTURING SECTORS */}
      <section id="sectors" className="bg-[#F4EADD] py-16 sm:py-24">
        <div className={c}>
          <Heading
            eyebrow="Our Manufacturing Sectors"
            title="Built for Materials That Become Part of Everyday Life."
            copy="Integrated capabilities across wood panels and resin chemical manufacturing."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-xl border border-[#D7C5AE]">
              <Layers className="text-[#9C6846]" size={36} />
              <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#14211A]">
                Wood-Based Panel Manufacturing
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#65736A]">
                Through S. A. Timber Traders and Pentagon Plywood Private
                Limited, the group manufactures:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "BWP Marine & MR Plywood",
                  "Commercial & Waterproof Blockboard",
                  "Flush Doors & Custom Specifications",
                ].map((x) => (
                  <li
                    className="flex items-center gap-3 text-sm font-semibold text-[#14211A]"
                    key={x}
                  >
                    <CheckCircle2 className="text-[#143D2B]" size={18} />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-medium text-[#65736A]">
                Located in Yamunanagar with a combined floor area of
                approximately 2.5 lakh sq. ft.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#143D2B] hover:text-[#9C6846]"
                href={HOME_SECTIONS.products}
              >
                View Wood Panel Range <ArrowRight size={14} />
              </a>
            </article>

            <article className="rounded-3xl bg-[#143D2B] p-8 text-white shadow-xl">
              <Factory className="text-[#C86D51]" size={36} />
              <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-3xl text-white">
                Chemical Manufacturing
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Through Synochem Organics Private Limited and Patson Industries,
                the group manufactures:
              </p>
              <p className="mt-4 text-2xl font-bold text-[#C86D51]">
                High-Purity Formaldehyde
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Crucial raw material for synthetic resin, laminates, and
                industrial wood composite manufacturing.
              </p>
              <p className="mt-6 text-xs text-white/65">
                Operations located in Yamunanagar (HR) and Morbi (GJ), combined
                area of 7,456 sq. metres.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#C86D51] hover:text-white"
                href={PRODUCT_ROUTES.formaldehyde}
              >
                Formaldehyde Specifications <ArrowRight size={14} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 8. PROGRESS THROUGH PROCESS (MISSING SECTION 4 RE-INTEGRATED WITH GENERATED IMAGE) */}
      <section id="progress-process" className={section}>
        <div className={c}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src={pressFactoryImage}
                alt="Pentagon Plywood high-tonnage hydraulic hot press factory"
                className="aspect-square rounded-3xl object-cover shadow-2xl border border-[#D9D3C8]"
              />
              <div className="absolute bottom-5 right-5 rounded-2xl bg-[#143D2B] p-4 text-white shadow-lg hidden sm:block">
                <p className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#C86D51]">
                  5,000 m² / Day
                </p>
                <p className="text-[11px] text-white/80">
                  Daily Wood-Panel Capacity
                </p>
              </div>
            </div>

            <div>
              <Heading
                eyebrow="Progress Through Process"
                title="Growth Has Always Meant Strengthening What Happens Behind the Product."
                copy="From installing peeling machines to operating pressing units, expanding land and machinery, and adding chemical manufacturing capability, Pentagon’s journey has been shaped by ongoing development."
              />

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Machinery upgrades over time",
                  "New manufacturing installations",
                  "Expansion into new cities",
                  "Increased wood-panel capacity",
                  "Backward integration into Formaldehyde",
                  "Expansion into Gujarat",
                  "Continued chemical capacity development",
                ].map((item) => (
                  <li
                    className="flex items-center gap-2.5 rounded-xl border border-[#E7E1D8] bg-white p-3 text-xs font-semibold text-[#14211A] shadow-xs"
                    key={item}
                  >
                    <Check className="shrink-0 text-[#9C6846]" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 3-STAGE MANUFACTURING PROCESS EXPLORER */}
      <section id="about-manufacturing" className="bg-[#F4EADD] py-16 sm:py-24">
        <div className={c}>
          <Heading
            eyebrow="Manufacturing Process"
            title="Every Finished Product Begins With the Process Behind It."
            copy="Quality isn't just claimed it is built into every log peeled, every glue spread, and every hydraulic hot press cycle."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {PROCESS_STAGES.map((s) => {
              const Icon = s.icon;
              const isActive = activeStageId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStageId(s.id)}
                  className={`flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#143D2B] text-white shadow-xl ring-2 ring-[#C86D51]"
                      : "border border-[#D9D3C8] bg-white text-[#14211A] hover:bg-[#FDFBF8]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-[#D99143] text-[#14211A]" : "bg-[#F4EADD] text-[#9C6846]"}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-[#C86D51]" : "text-[#9C6846]"}`}
                    >
                      {s.stage}
                    </span>
                    <h4 className="font-['DM_Serif_Display',Georgia,serif] text-lg leading-snug">
                      {s.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 rounded-3xl border border-[#D9D3C8] bg-white p-6 shadow-xl lg:grid-cols-2 lg:p-8">
            <div className="space-y-4">
              <Badge variant="accent">{activeStage.badge}</Badge>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#14211A]">
                {activeStage.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#65736A]">
                {activeStage.desc}
              </p>
              <a
                href={CONTACT_SECTIONS.form}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#143D2B] hover:text-[#9C6846]"
              >
                Ask about our manufacturing standards <ArrowRight size={14} />
              </a>
            </div>

            <div className="rounded-2xl bg-[#FDFBF8] p-6 border border-[#E7E1D8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C6846] mb-4">
                Core Process Checkpoints
              </h4>
              <div className="space-y-3">
                {activeStage.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 border border-[#E7E1D8] shadow-xs"
                  >
                    <Check size={16} className="text-[#143D2B] shrink-0" />
                    <span className="text-xs font-semibold text-[#14211A]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR PRINCIPLES */}
      <section id="our-principles" className={section}>
        <div className={c}>
          <Heading
            eyebrow="Our Principles"
            title="The Values Behind the Name."
            copy="Guiding every dealer partnership, architect specification, builder supply contract, and industrial chemical dispatch."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#D9D3C8] bg-white p-7 transition-all duration-300 hover:border-[#143D2B] hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#9C6846]">
                      0{i + 1}
                    </span>
                    <Icon
                      size={24}
                      className="text-[#143D2B] transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#65736A]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BUILT AROUND REAL REQUIREMENTS (MISSING SECTION 5 RE-INTEGRATED WITH INTERNAL LINKS) */}
      <section id="real-requirements" className="bg-[#F4EADD] py-16 sm:py-24">
        <div className={c}>
          <Heading
            eyebrow="Built Around Real Requirements"
            title="For the People Who Select, Sell and Build With Materials."
            copy="Tailored product information, guidance, and supply terms designed for each specific buyer role."
          />

          <div className="mt-10 space-y-4">
            {AUDIENCES.map((aud) => (
              <div
                key={aud.title}
                className="group grid gap-4 rounded-2xl border border-[#D7C5AE] bg-white p-6 transition-all duration-300 hover:border-[#143D2B] hover:shadow-lg sm:grid-cols-[4rem_1.2fr_1.8fr_auto] sm:items-center"
              >
                <span className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#9C6846]">
                  {aud.num}
                </span>
                <h3 className="text-lg font-bold text-[#14211A] group-hover:text-[#143D2B]">
                  {aud.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#65736A]">
                  {aud.copy}
                </p>
                <a
                  href={aud.link}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3EC] px-4 py-2 text-xs font-bold text-[#143D2B] border border-[#CAD4CC] transition-all hover:bg-[#143D2B] hover:text-white"
                >
                  <span>{aud.cta}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className={outline} href={CONTACT_SECTIONS.form}>
              Discuss Your Requirement <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 12. OUR DIRECTION (MISSING SECTION 6 RE-INTEGRATED) */}
      <section id="our-direction" className={section}>
        <div className={c}>
          <Heading
            eyebrow="Our Direction"
            title="Built on Experience. Focused on What Comes Next."
            copy="Our guiding vision, mission statement, and ongoing manufacturing commitment."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Vision",
                icon: Target,
                copy: "To build Pentagon into a trusted manufacturing group known for dependable products, responsible information and long-term customer relationships.",
              },
              {
                title: "Our Mission",
                icon: Compass,
                copy: "To manufacture and supply wood-based panels, doors and industrial chemicals through capable people, strengthened processes and continuous improvement.",
              },
              {
                title: "Our Commitment",
                icon: ShieldCheck,
                copy: "To keep improving manufacturing capabilities, communicate clearly and support customers with materials suited to their real requirements.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl bg-[#143D2B] p-8 text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#C86D51]">
                      {item.title}
                    </h3>
                    <Icon size={28} className="text-[#C86D51]" />
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/80">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. DUAL INDUSTRIAL HUBS */}
      <section id="visit" className="bg-[#1A1512] py-16 text-white sm:py-24">
        <div className={c}>
          <Heading
            light
            eyebrow="Dual Industrial Hubs"
            title="Manufacturing Across Two Key Industrial Regions."
            copy="Operating across Yamunanagar (Haryana) for wood-panel and chemical production, and Morbi (Gujarat) for chemical manufacturing."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MANUFACTURING_HUBS.map((hub) => (
              <div
                key={hub.name}
                className="flex flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#C86D51]/20 px-3 py-1 text-xs font-bold text-[#C86D51]">
                      {hub.sector}
                    </span>
                    <MapPin className="text-[#C86D51]" size={20} />
                  </div>

                  <h3 className="mt-5 font-['DM_Serif_Display',Georgia,serif] text-2xl text-white">
                    {hub.name}
                  </h3>
                  <p className="mt-2 text-xs text-white/70">{hub.location}</p>
                  <p className="mt-1 text-xs font-bold text-[#C86D51]">
                    Facility Area: {hub.area}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                      Operating Companies
                    </p>
                    {hub.units.map((unit) => (
                      <div
                        key={unit}
                        className="flex items-center gap-2 text-xs font-medium text-white/90"
                      >
                        <Check size={14} className="text-[#C86D51]" />
                        <span>{unit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                    Key Outputs
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section id="about-faq" className={section}>
        <div className={`${c} grid gap-10 lg:grid-cols-[.8fr_1.2fr]`}>
          <Heading
            eyebrow="Frequently Asked Questions"
            title="Clear answers about the group."
          />
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="rounded-2xl border border-[#D9D3C8] bg-white px-5 sm:px-7"
          >
            {faqs.map(([q, a], i) => (
              <AccordionItem
                value={`faq-${i}`}
                key={q}
                className="border-[#E7E1D8]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold no-underline hover:no-underline">
                  <span className="mr-4 text-xs text-[#9C6846]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 leading-7 text-[#65736A]">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 15. START A CONVERSATION CTA */}
      <section
        id="about-enquiry"
        className="bg-[#143D2B] py-16 text-white sm:py-24"
      >
        <div className={`${c} text-center`}>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#C86D51]">
            Start a Conversation
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl font-['DM_Serif_Display',Georgia,serif] text-4xl leading-tight sm:text-5xl">
            Tell Us What You Need. Let’s Begin With the Material Behind It.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
            Whether you require plywood, blockboard, flush doors, or industrial
            Formaldehyde, share your product requirement, quantity, and delivery
            location with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-6 py-3.5 text-sm font-bold text-[#14211A] hover:bg-[#C86D51] transition-colors"
              href={CONTACT_SECTIONS.form}
            >
              Send Your Requirement <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-bold hover:bg-white hover:text-[#14211A] transition-colors"
              href={ROUTES.dealers}
            >
              Become a Dealer <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-bold hover:bg-white hover:text-[#14211A] transition-colors"
              href={ROUTES.brands}
            >
              Explore Our Brand Portfolio <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
