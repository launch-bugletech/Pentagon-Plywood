// Homepage Data Source - Pentagon Plywood

import heroImage from '../../assets/hero-home-desktop.png';
import mobileHeroImage from '../../assets/hero-home-mobile.png';
import anniversaryImage from '../../assets/hero-anniversary-laurels.png';
import luxuryInteriorHero from '../../assets/hero-luxury-interior.png';
import luxuryInteriorHeroLight from '../../assets/homepage/hero-luxury-interior-light.png';

// Application & Interior Images
import modularImage from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import officeImage from "../../assets/product/Applications/Modern office with desks and partitions.png";
import retailImage from "../../assets/product/Applications/Retail store interior with shelves and displays.png";
import residentialImage from '../../assets/homepage/Duroply-Feature-Images-and-Blog-Images-8-1024x576.jpg';
import WardrobeApplication from '../../assets/product/Applications/Modern wardrobe with sliding doors.png';
import LivingRoomApplication from "../../assets/product/Applications/Contemporary living room with furniture.png";

// Product & Manufacturing Images
import manufacturingImage from '../../assets/homepage/Plywood-Manufacturing-1024x683.png';
import marinePlywoodImage from '../../assets/homepage/products/Marine-plywood-1000x1000.webp';
import mrPlywoodImage from '../../assets/homepage/products/mr-grade-plywood-1671449588-6629452.webp';
import blockboardImage from '../../assets/homepage/products/is303-blockboard-1671450145-6629496.webp';
import flushDoorImage from '../../assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp';

// Certificate Logos
import isoCertificateImage from '../../assets/homepage/certificates/iso-9001-2000-logo-png_seeklogo-73813.png';
import bisCertificateImage from '../../assets/homepage/certificates/bis-bureau-of-indian-standards-logo-png_seeklogo-19843.png';
import labCertificateImage from '../../assets/homepage/certificates/lab-tested-certified-approval-stamp-260nw-2640833869.png';

export const HERO_DATA = {
  eyebrow: "PENTAGON PLYWOOD • YAMUNANAGAR • SINCE 1986",
  titleLine1: "You imagine",
  titleLine2: "the space.",
  titleAccent: "We build its strength.",
  caption: "High-performance plywood, blockboards and doors, crafted with precision and trusted by professionals across India.",
  badge: "Wood-based panels · Yamunanagar",
  heroImage: luxuryInteriorHeroLight,
  mobileHeroImage: luxuryInteriorHeroLight,
  bgHeroImage: luxuryInteriorHeroLight,
  anniversaryImage,
};

export const HERO_TRUST_BAR = [
  {
    num: "1986",
    title: "Since 1986",
    desc: "Nearly four decades of manufacturing legacy",
    iconName: "Calendar",
  },
  {
    num: "Manufacturing",
    title: "In-House Manufacturing",
    desc: "Complete control from raw material to finished board",
    iconName: "Building2",
  },
  {
    num: "Quality",
    title: "Quality You\nCan Trust",
    desc: "IS certified products with rigorous quality checks",
    iconName: "ShieldCheck",
  },
  {
    num: "Sustainable",
    title: "Sustainable Approach",
    desc: "Responsible sourcing & environment conscious",
    iconName: "Leaf",
  },
  {
    num: "Pan India",
    title: "Pan India Presence",
    desc: "Supplying to 20+ states across India",
    iconName: "Users",
  },
];

export const TRUST_STATS = HERO_TRUST_BAR;

export const PRODUCTS_DATA = [
  {
    id: "mr-grade",
    tag: "01 · Plywood",
    name: "MR Grade Plywood",
    desc: "Engineered for indoor furniture, wardrobes, and interior panelling in dry residential and commercial spaces.",
    standard: "IS 303 Interior Grade",
    image: mrPlywoodImage,
    alt: "MR-grade plywood veneers",
    imageLabel: "Interior & Dry Use",
    category: "Plywood",
    features: ["Termite Resistant", "Smooth Calibration", "High Screw-Holding"],
  },
  {
    id: "bwp-marine",
    tag: "02 · Plywood",
    name: "BWP & Marine Plywood",
    desc: "Boiling Water Proof marine grade panels crafted with unextended phenolic resin for extreme moisture resistance.",
    standard: "IS 710 Marine Certified",
    image: marinePlywoodImage,
    alt: "BWP Marine Plywood sheet stack",
    imageLabel: "Moisture & Wet Use",
    category: "Plywood",
    features: ["72hr Boil Tested", "100% Core Composed", "Anti-Borer Treated"],
  },
  {
    id: "fire-retardant",
    tag: "03 · Plywood",
    name: "Fire Retardant Plywood",
    desc: "Specialized fire-resistant panels with chemical impregnation that retards flame propagation and smoke emission.",
    standard: "IS 5509 Fire Retardant",
    image: blockboardImage,
    alt: "Fire retardant wood-panel edge detail",
    imageLabel: "Safety & Commercial Use",
    category: "Plywood",
    features: ["Flame Retardant", "Low Smoke Density", "High Structural Strength"],
  },
  {
    id: "blockboard-doors",
    tag: "04 · Manufactured Range",
    name: "Blockboard & Flush Doors",
    desc: "Solid hardwood core blockboards and factory-finished flush doors built for maximum dimensional stability and strength.",
    standard: "IS 1659 & IS 2202",
    image: flushDoorImage,
    alt: "Flush door and blockboard collection",
    imageLabel: "Structural & Doors",
    category: "Blockboards",
    features: ["Zero Bending", "Pine / Hardwood Core", "Precision Trimmed"],
  },
];

export const PRODUCT_TAB_FILTERS = [
  { id: "all", label: "All Products" },
  { id: "Plywood", label: "Plywood Range" },
  { id: "Blockboards", label: "Blockboards & Doors" },
];

export const GUIDED_SELECTION = [
  {
    iconName: "Utensils",
    title: "Modular Kitchens",
    description: "Beautiful finishes that withstand daily use.",
    href: "/applications/modular-kitchens",
  },
  {
    iconName: "Shirt",
    title: "Wardrobes & Storage",
    description: "Stronger panels for smarter storage.",
    href: "/applications/wardrobes-storage",
  },
  {
    iconName: "DoorClosed",
    title: "Doors & Partitions",
    description: "Reliable doors and partition solutions.",
    href: "/applications#doors-shutters",
  },
  {
    iconName: "Building2",
    title: "Office Interiors",
    description: "Productive spaces, built to last.",
    href: "/applications/office-commercial-interiors",
  },
  {
    iconName: "Store",
    title: "Retail & Hospitality",
    description: "Design-led solutions for commercial spaces.",
    href: "/applications/retail-hospitality",
  },
  {
    iconName: "Layers",
    title: "Wall Panelling",
    description: "Elevate walls with texture and warmth.",
    href: "/applications/wall-panelling",
  },
  {
    iconName: "Building2",
    title: "Home Furniture",
    description: "From beds to shelves, built your way.",
    href: "/applications/home-furniture",
  },
  {
    iconName: "Handshake",
    title: "Dealer & Bulk Supply",
    description: "Partner benefits and bulk order support.",
    href: "/applications/dealer-bulk-supply",
  },
];

export const BRANDS_DATA = [
  { name: "Pentagon", sub: "Gold", meta: "Premium · BWR Plywood", tier: "flagship", tierLbl: "Flagship" },
  { name: "Kalinga", sub: "Gold", meta: "Premium · MR Plywood", tier: "premium", tierLbl: "Premium" },
  { name: "Escotel", sub: "Marine", meta: "Elite · BWP Marine IS:710", tier: "flagship", tierLbl: "Flagship" },
  { name: "Black", sub: "Steel", meta: "Value · Commercial Ply", tier: "value", tierLbl: "Value" },
  { name: "Essar", sub: "MR", meta: "Value · MR Plywood", tier: "value", tierLbl: "Value" },
  { name: "HIT", sub: "Ply", meta: "Economy · Commercial", tier: "economy", tierLbl: "Economy" },
  { name: "Safari", sub: "Grade", meta: "Economy · MR Grade", tier: "economy", tierLbl: "Economy" },
  { name: "Supremoo", sub: "Plus", meta: "Value · Hardwood Blockboard", tier: "value", tierLbl: "Value" },
];

export const ESCOTEL_SPOTLIGHT = {
  title: "Escotel Marine",
  kicker: "FLAGSHIP SPOTLIGHT",
  lead: "Our flagship marine-grade plywood engineered with advanced anti-borer and termite-proof chemical impregnation for lifetime performance in kitchens, bathrooms and wet architectural areas.",
  features: [
    { label: "BWP", desc: "IS 710 Marine Certified" },
    { label: "72 Hours", desc: "Boil Test Verified" },
    { label: "Lifetime", desc: "Anti-Borer Treated" },
    { label: "Zero", desc: "Warping & Delamination Guarantee" },
  ],
};

export const WHY_PENTAGON = [
  {
    n: "01",
    iconName: "Droplet",
    t: "Waterproof at the Core",
    p: "Advanced unextended phenolic resins bond every layer to withstand extreme moisture, verified through stringent 72-hour boil testing.",
  },
  {
    n: "02",
    iconName: "ShieldCheck",
    t: "Termite & Borer Resistant",
    p: "Chemically treated timber and preservative glue-line infusion deliver lifelong protection against wood-boring beetles and subterranean termites.",
  },
  {
    n: "03",
    iconName: "Award",
    t: "High Strength & Load Durability",
    p: "Precision quad-pressed cores engineered to bear heavy structural loads without warping, sagging, or delamination over decades of use.",
  },
  {
    n: "04",
    iconName: "Leaf",
    t: "Responsibly Sourced Agro-Forestry",
    p: "Carefully selected raw timber from managed sustainable agro-forestry, coupled with eco-conscious manufacturing practices at every stage.",
  },
];

export const MANUFACTURING_DATA = {
  eyebrow: "MANUFACTURING EXCELLENCE",
  title: "Precision Engineered in Yamunanagar.",
  lead: "Operating state-of-the-art manufacturing facilities in Haryana, Pentagon Plywood blends decades of timber craftsmanship with automated high-pressure hot presses and core composers.",
  image: manufacturingImage,
  caption: "Pentagon Manufacturing Hub · Yamunanagar",
  steps: [
    { num: "01", title: "Veneer Grading", desc: "Hand-selected hardwood veneer" },
    { num: "02", title: "Resin Bonding", desc: "Phenolic resin hot press" },
    { num: "03", title: "Final Calibration", desc: "Dual-side sanded & tested" },
  ],
};

export const QUALITY_DATA = {
  eyebrow: "QUALITY & CERTIFICATIONS",
  title: "Uncompromising Quality Standards.",
  lead: "Quality is not a promise; it is a process. Every panel leaving our facility undergoes rigorous multi-stage quality checks.",
  processList: [
    { num: "01", title: "Raw Material Inspection", desc: "Every timber log is ultrasonically inspected before entering the peeling line." },
    { num: "02", title: "In-Process Resin Checks", desc: "Moisture content, veneer thickness, and resin ratio verified at every step." },
    { num: "03", title: "72-Hour Boil Testing", desc: "Random batch samples subjected to continuous 72-hour boiling water testing." },
    { num: "04", title: "BIS Standards Compliance", desc: "Certified under IS 303, IS 710, and IS 2202 Bureau of Indian Standards." },
  ],
  certificates: [
    // { logo: isoCertificateImage, name: "ISO 9001:2015", desc: "Quality Management System" },
    { logo: bisCertificateImage, name: "IS 303 / IS 710", desc: "BIS Bureau of Indian Standards" },
    { logo: labCertificateImage, name: "In-House Lab", desc: "Batch-Level Testing Records" },
  ],
};

export const APPLICATIONS_DATA = [
  { size: "col-span-1 md:col-span-2 lg:col-span-2", label: "Residential Interiors", sub: "Living Rooms · Kitchens · Wardrobes", image: residentialImage, alt: "Contemporary living and dining interior" },
  { size: "col-span-1 md:col-span-1 lg:col-span-1", label: "Commercial Offices", sub: "Partitions · Workstations", image: officeImage, alt: "Modern open-plan office joinery" },
  { size: "col-span-1 md:col-span-1 lg:col-span-1", label: "Retail & Showrooms", sub: "Displays · Kiosks · Shelving", image: retailImage, alt: "Retail store interior with plywood displays" },
  { size: "col-span-1 md:col-span-1 lg:col-span-1", label: "Hospitality & Hotels", sub: "Panelling · Suite Furniture", image: LivingRoomApplication, alt: "Luxury hotel suite interior" },
  { size: "col-span-1 md:col-span-2 lg:col-span-2", label: "Modular Kitchens & Baths", sub: "Wet Areas · BWP Cabinetry", image: modularImage, alt: "Modular kitchen with plywood cabinetry" },
];

export const PROJECTS_DATA = [
  {
    type: "Residential",
    loc: "Chandigarh",
    title: "Modernist Villa Interior",
    desc: "Complete wardrobe joinery and modular kitchen cabinets crafted with Escotel Marine BWP IS:710.",
    image: residentialImage,
  },
  {
    type: "Hospitality",
    loc: "Delhi NCR",
    title: "60-Cover Boutique Café",
    desc: "Banquettes, counter fronts, and decorative ceiling panelling executed in Pentagon Gold MR.",
    image: LivingRoomApplication,
  },
  {
    type: "Commercial",
    loc: "Mumbai",
    title: "22,000 sq.ft Office Fit-out",
    desc: "Bulk supply of Kalinga Gold MR plywood and IS 303 blockboards for executive workstations.",
    image: officeImage,
  },
];

export const DEALER_BENEFITS = [
  "Direct factory pricing with flexible credit & supply terms",
  "Product ranges tailored to your local regional demand",
  "Dedicated logistics planning for timely container/truck shipments",
  "Clear distinction between Dealer and Exclusive Distributor territories",
  "Verified Partner listing on Pentagon official web portal",
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Pentagon Plywood provides top-notch calibrated products at direct factory pricing. Highly recommended for high-end interior projects.",
    author: "Vikram Singh",
    role: "Interior Contractor · Delhi NCR",
    initial: "V",
  },
  {
    quote: "Remarkable consistency in core thickness and surface finish. Escotel Marine handles kitchen moisture without any warping.",
    author: "Shiv Kumar Yadav",
    role: "Furniture Manufacturer · Yamunanagar",
    initial: "S",
  },
  {
    quote: "The batch lab certification and eco-friendly raw material sourcing give our architectural clients complete peace of mind.",
    author: "Saurabh Mehta",
    role: "Principal Architect · Chandigarh",
    initial: "S",
  },
];

export const RESOURCES_DATA = [
  {
    tag: "Buying Guide",
    title: "Marine vs. MR Grade Plywood: Which One, and When?",
    desc: "The single most-asked question by architects and homeowners, answered with a clear technical decision matrix.",
    meta: "8 min read · Feb 2026",
  },
  {
    tag: "Technical Note",
    title: "How to Identify Genuine Borer-Proof Plywood",
    desc: "Six quick physical checks you can run on any board at the dealer godown no lab equipment required.",
    meta: "5 min read · Jan 2026",
  },
  {
    tag: "Catalogue PDF",
    title: "Pentagon Complete Product Catalogue 2026",
    desc: "All 8 signature brands, grades, thickness charts, and technical specifications in a single downloadable PDF.",
    meta: "PDF · 12 MB Download",
  },
];

export const ENQUIRY_PROFILES = [
  "Homeowner / Retail Buyer",
  "Architect / Interior Designer",
  "Interior Contractor",
  "Dealer / Distributor Applicant",
  "Project / Bulk Commercial Buyer",
  "OEM / Industrial Client",
];

export const ENQUIRY_TYPES = [
  "Product Selection Advice",
  "Request a Tailored Quote",
  "Bulk Truckload Requirement",
  "Dealership / Partnership Application",
  "Project BOQ Submission",
];

export const ENQUIRY_PRODUCTS = [
  "Marine Plywood (Escotel · BWP IS:710)",
  "MR Grade Plywood (Pentagon Gold / Kalinga Gold)",
  "Blockboards (IS 303 Supremoo Plus)",
  "Flush & Laminated Doors (IS 2202)",
  "Multiple / Unsure (Please Advise)",
];
