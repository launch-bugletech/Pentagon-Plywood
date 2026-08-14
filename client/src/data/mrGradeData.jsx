import { CONTACT_SECTIONS, HOME_SECTIONS, MR_GRADE_SECTIONS, ROUTES } from "@/app/routes.js";
import wardrobeImage from "@/assets/product/Applications/Modern wardrobe with sliding doors.png";
import bedroomImage from "@/assets/product/mr plywood/Cozy minimalist bedroom with natural light.png";
import officeImage from "@/assets/product/Applications/Modern office with desks and partitions.png";
import livingImage from "@/assets/product/Applications/Contemporary living room with furniture.png";
import plywoodImage from "@/assets/product/mr plywood/mr-grade-plywood-1671449588-6629452.webp";
import heroRoomBg from "@/assets/product/mr plywood/mr-hero-bg-room.png";
import edgeImage from "@/assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import surfaceImage from "@/assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg";

export const quickFactsData = [
  { label: "GRADE", value: "MR - Moisture Resistant", icon: "Drop" },
  { label: "COMMONLY KNOWN AS", value: "Commercial Plywood", icon: "Layers" },
  { label: "BEST SUITED FOR", value: "Furniture & interior applications", icon: "Shield" },
  { label: "THICKNESS", value: "4 mm to 18 mm", icon: "Ruler" },
  { label: "SHEET SIZES", value: "Multiple standard formats", icon: "Layers" },
  { label: "MANUFACTURED IN", value: "Yamunanagar, Haryana", icon: "Factory" },
];

export const benefitsData = [
  {
    number: "01",
    title: "Made for interior applications",
    copy: "A practical material for furniture and installations used inside homes, offices, shops and other relatively dry spaces.",
  },
  {
    number: "02",
    title: "Normal moisture resistance",
    copy: "Designed for the normal indoor humidity and occasional atmospheric moisture commonly experienced inside buildings.",
  },
  {
    number: "03",
    title: "Multiple thickness options",
    copy: "Choose thinner sheets for back panels and decorative work or thicker sheets for furniture bodies and storage units.",
  },
  {
    number: "04",
    title: "Flexible for furniture fabrication",
    copy: "Suitable for a broad range of everyday furniture, cabinetry, partitions and interior components.",
  },
  {
    number: "05",
    title: "Ready for interior finishes",
    copy: "Its plain surface can be prepared for laminate, veneer, paint or other compatible decorative finishes.",
  },
  {
    number: "06",
    title: "Home and office furniture",
    copy: "Applicable to wardrobes, beds, desks, cabinets, bookshelves, partitions and general furniture fabrication.",
  },
];

export const applicationsData = [
  {
    title: "Wardrobes & Cabinets",
    copy: "Structures, shutters, cabinet bodies and internal storage components in dry bedrooms and dressing areas.",
    image: wardrobeImage,
    alt: "Wardrobe made with interior plywood",
  },
  {
    title: "Beds & Side Tables",
    copy: "Bed components, headboards, bedside tables and other bedroom furniture.",
    image: bedroomImage,
    alt: "Bedroom furniture in a dry interior",
  },
  {
    title: "Office Furniture",
    copy: "Desks, workstations, cabinets, storage units and selected commercial furniture.",
    image: officeImage,
    alt: "Modern office furniture and workstations",
  },
  {
    title: "General Home Furniture",
    copy: "Tables, study units, television units and other everyday interior furniture.",
    image: livingImage,
    alt: "Interior home furniture",
  },
  {
    title: "Bookshelves & Storage",
    copy: "Shelves, bookcases and storage furniture with thickness and support selected for the expected load.",
    image: null,
    alt: null,
  },
  {
    title: "Wall Panelling",
    copy: "Decorative wall panels and interior surface installations positioned away from direct moisture.",
    image: null,
    alt: null,
  },
  {
    title: "Indoor Partitions",
    copy: "Non-exposed interior dividers, panels and partition systems for relatively dry spaces.",
    image: null,
    alt: null,
  },
];

export const limitationsData = [
  "Continuous water exposure",
  "Bathroom furniture exposed to regular splashing",
  "Cabinetry beside leaking or unsealed plumbing",
  "Outdoor furniture or exterior walls",
  "Furniture exposed to rain",
  "Persistently damp rooms",
  "Marine or boating applications",
  "Applications requiring verified boiling-water resistance",
];

export const specificationsData = [
  ["Product", "MR Grade Plywood"],
  ["Grade", "MR - Moisture Resistant"],
  ["Common market name", "Commercial Plywood"],
  ["Country of origin", "India"],
  ["Suitable use", "Interior furniture and dry interior applications"],
  ["Pattern", "Plain"],
  ["Finish", "Polished"],
  ["Thicknesses", "4, 6, 9, 12, 15 and 18 mm"],
  ["Sheet sizes", "8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft"],
  ["Common applications", "Furniture, cabinetry, partitions, panelling and interior fabrication"],
  ["Current listed MOQ", "50 pieces"],
];

export const thicknessesData = [
  { size: "4 mm", strength: 20, use: "Decorative lining, lightweight back panels and selected furniture components", duty: "Light-duty" },
  { size: "6 mm", strength: 32, use: "Cabinet backs, drawer bottoms and lightweight panels", duty: "Light-duty" },
  { size: "9 mm", strength: 48, use: "Wall panelling, partitions and selected furniture components", duty: "Medium-duty" },
  { size: "12 mm", strength: 66, use: "Cabinet structures and medium-duty furniture components", duty: "Medium-duty" },
  { size: "15 mm", strength: 84, use: "Storage units, furniture bodies and stronger panels", duty: "Heavy-duty" },
  { size: "18 mm", strength: 100, use: "Wardrobes, beds, tables, shelves and heavier furniture components", duty: "Heavy-duty" },
];

export const comparisonsData = [
  ["Main positioning", "Everyday interior furniture", "Higher water-resistant applications", "More demanding moisture conditions"],
  ["Typical environment", "Relatively dry interiors", "Humid, moisture-conscious interiors", "Repeated or demanding moisture exposure"],
  ["Common applications", "Wardrobes, beds, desks and shelves", "Kitchens, utility furniture and humid interiors", "Demanding kitchens and specialised projects"],
  ["Water resistance", "Normal indoor moisture resistance", "Higher than MR; verify product specification", "Marine-grade performance; verify certification"],
  ["Exterior use", "Not recommended", "Only if specifically approved", "Do not assume suitability solely from the name"],
  ["Applicable standard", "IS 303:2024", "IS 303:2024", "IS 710:2024"],
];

export const finishesData = [
  "Decorative laminate",
  "Natural veneer",
  "Decorative veneer",
  "Paint or polish",
  "Wallpaper or fabric",
  "Edge banding",
  "Routed components",
];

export const fabricationChecksData = [
  "Required sheet thickness",
  "Furniture dimensions and expected load",
  "Support spacing and joinery",
  "Screw and hardware selection",
  "Edge-finishing method",
  "Decorative surface compatibility",
  "Installation moisture conditions",
];

export const whyPentagonData = [
  {
    number: "01",
    title: "Manufacturing base in Yamunanagar",
    copy: "Pentagon’s wood-based panel manufacturing operations are located in Yamunanagar, Haryana.",
  },
  {
    number: "02",
    title: "Multiple sizes and thicknesses",
    copy: "Discuss the sheet format and thickness that best fits the furniture component.",
  },
  {
    number: "03",
    title: "Application-led selection",
    copy: "Start with whether you are making wardrobes, beds, cabinets, office furniture or panels.",
  },
  {
    number: "04",
    title: "Requirement-led supply discussion",
    copy: "Discuss required sheet size, thickness, quantity and delivery location with the team.",
  },
  {
    number: "05",
    title: "Broader material support",
    copy: "Where MR Grade is not the right fit, explore another plywood grade or related interior material.",
  },
];

export const faqsData = [
  {
    question: "What does MR mean in plywood?",
    answer: "MR means Moisture Resistant. It identifies plywood intended primarily for general-purpose furniture and interior applications.",
  },
  {
    question: "Is MR Grade Plywood waterproof?",
    answer: "No. It can resist normal indoor moisture and humidity, but is not designed for prolonged water exposure or continuously damp conditions.",
  },
  {
    question: "Is MR Grade the same as Commercial Plywood?",
    answer: "MR Grade is commonly called Commercial Plywood in the Indian market. Commercial plywood is a market term rather than a separate BIS grade; confirm the exact product specification before comparing listings.",
  },
  {
    question: "Is it suitable for wardrobes?",
    answer: "Yes, it can be considered for wardrobes and cabinets in relatively dry indoor areas. Select thickness according to dimensions, load and construction.",
  },
  {
    question: "Can it be used for kitchen cabinets?",
    answer: "It may suit dry kitchen areas with low exposure. Consider BWR, BWP or Marine Plywood where humidity, spills or plumbing-related moisture are more likely.",
  },
  {
    question: "Can it be used in bathrooms?",
    answer: "MR Grade is not recommended for furniture regularly exposed to bathroom humidity, splashing or direct water.",
  },
  {
    question: "Can MR Plywood be laminated?",
    answer: "Yes. Depending on surface condition, it can generally be finished with compatible laminates, veneers, paint or other decorative materials.",
  },
  {
    question: "Which thickness is suitable for furniture?",
    answer: "Furniture commonly uses 12, 15 or 18 mm plywood, but the correct thickness depends on component, span, load, supports and joinery.",
  },
  {
    question: "What sizes and thicknesses are listed?",
    answer: "The current listed range includes 4, 6, 9, 12, 15 and 18 mm in 8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft. Confirm stock before ordering.",
  },
  {
    question: "What order quantity can I discuss?",
    answer: "Share the required sheet size, thickness, quantity and delivery location. Pentagon will confirm the current supply option for the requirement.",
  },
  {
    question: "Does this product conform to IS 303?",
    answer: "MR is a recognised grade under IS 303:2024. A current BIS licence and approved scope should be reviewed before treating this specific product as certified.",
  },
];

export const mrGradeProductData = {
  pageTitle: "MR Grade Plywood",
  breadcrumbs: [
    ["Home", ROUTES.home],
    ["Products", ROUTES.products],
    ["Plywood", ROUTES.plywood],
    ["MR Grade Plywood", null],
  ],
  hero: {
    categoryBadge: "INTERIOR PLYWOOD",
    gradeBadge: "MR GRADE",
    title: (
      <>
        Dependable plywood{" "}
        <span className="text-[#E7B572]">for everyday interior</span> work.
      </>
    ),
    description:
      "Pentagon MR Grade Plywood is made for furniture and interior applications where the board may experience normal indoor moisture and humidity.",
    subDescription:
      "It is a practical choice for homes, offices, shops and interior projects that need reliable, versatile plywood for everyday fabrication. Suitable for dry interior spaces, not continuous water exposure or permanently wet conditions.",
    primaryCta: { text: "Request an MR Grade Quote", href: MR_GRADE_SECTIONS.enquiry },
    secondaryCta: { text: "Talk to Our Team", href: CONTACT_SECTIONS.form },
    productImage: plywoodImage,
    productImageAlt: "Pentagon MR Grade plywood sheet showing stacked wood layers",
    productImageBadge: "MR GRADE · INTERIOR USE",
    heroBg: heroRoomBg,
  },
  quickFacts: quickFactsData,
  overview: {
    eyebrow: "Understand the Grade",
    title: "Made for the Conditions Found in Everyday Interiors.",
    edgeImage: edgeImage,
    edgeCaption: "Balanced veneer construction",
    paragraphs: [
      <>
        <strong className="text-[#14211A]">MR stands for Moisture Resistant.</strong> MR Grade Plywood is a general-purpose plywood intended primarily for furniture and interior applications.
      </>,
      "Multiple wood-veneer layers are bonded to create a balanced panel suitable for fabrication into furniture, cabinets, partitions and interior components.",
      "MR Grade Plywood can handle the normal humidity found inside homes and commercial spaces, but moisture resistant does not mean waterproof.",
    ],
    callout: {
      title: "Market terminology",
      copy: "MR Grade Plywood is also commonly referred to as Commercial Plywood in India. Pentagon’s existing product listing uses the same terminology.",
    },
    cta: {
      text: "Ask whether MR Grade fits my project",
      href: MR_GRADE_SECTIONS.enquiry,
    },
  },
  benefits: {
    eyebrow: "Choose MR Grade Plywood When",
    title: "Why it works well for everyday interiors.",
    items: benefitsData,
  },
  applications: {
    eyebrow: "From Board to Furniture",
    title: "Suitable applications.",
    copy: "MR Grade Plywood can be used for wardrobes, storage units, beds, tables, chairs, TV units, cabinets, study tables, office furniture, bookshelves, shelves, partitions, interior wall panelling, residential furniture and shop or office interiors.",
    items: applicationsData,
    cta: {
      text: "Find the Right Thickness",
      href: MR_GRADE_SECTIONS.thickness,
    },
  },
  limitations: {
    eyebrow: "Where It Should Not Be Used",
    title: "Moisture resistant is not the same as waterproof.",
    copy: "MR Grade Plywood is not the right choice for areas with regular water contact, standing water or constant dampness.",
    items: limitationsData,
    footnote:
      "For kitchen sink units, utility areas, bathroom-adjacent furniture or more demanding moisture conditions, explore a higher water-resistance plywood grade or Marine Plywood according to the application.",
    cta: {
      text: "Compare Moisture-Resistant Options",
      href: MR_GRADE_SECTIONS.comparison,
    },
  },
  specifications: {
    eyebrow: "Technical Specifications",
    title: "Available information.",
    items: specificationsData,
    alert: {
      eyebrow: "Product selection",
      title: "Choose the grade around the installation conditions.",
      paragraph1:
        "MR Grade Plywood is intended for furniture and dry interior applications where the board may experience normal indoor moisture and humidity.",
      paragraph2:
        "For water-prone, persistently damp or more demanding moisture conditions, select a higher water-resistance grade according to the application.",
      linkText: "Explore quality information",
      linkHref: HOME_SECTIONS.quality,
    },
  },
  thicknessGuide: {
    eyebrow: "Select the Right Thickness",
    title: "The right thickness depends on what the plywood will become.",
    items: thicknessesData,
    note: "The final thickness should be selected according to the furniture design, span, support, expected load, hardware and joinery.",
    cta: {
      text: "Get Thickness Guidance",
      href: MR_GRADE_SECTIONS.enquiry,
    },
  },
  comparison: {
    eyebrow: "MR, BWR / BWP or Marine",
    title: "Which plywood do you need?",
    copy: "Choose according to the conditions around the furniture.",
    columns: ["Comparison", "MR Grade", "BWR / BWP", "Marine Plywood"],
    rows: comparisonsData,
    cta: {
      text: "Help Me Compare Plywood",
      href: CONTACT_SECTIONS.form,
    },
  },
  finishes: {
    eyebrow: "Fabrication and Finishing",
    title: "Start with the right board. Finish it around the design.",
    copy: "MR Grade Plywood can form the base for different interior looks and furniture styles. Depending on the furniture design and finishing system, it can be used with:",
    surfaceImage: surfaceImage,
    surfaceCaption: "Plain surface · finish as required",
    items: finishesData,
    checksTitle: "Before Fabrication, Consider",
    checks: fabricationChecksData,
    cta: {
      text: "Discuss fabrication requirements",
      href: MR_GRADE_SECTIONS.enquiry,
    },
  },
  quality: {
    eyebrow: "Know the Standard",
    title: "Know What MR Grade Means Before You Choose.",
    paragraphs: [
      "The Bureau of Indian Standards classifies general-purpose plywood under IS 303:2024. The classification covers MR, BWR and BWP grades along with requirements for dimensions, workmanship, water-resistance testing, moisture content, strength and formaldehyde content.",
      "For an MR Grade buyer, the important distinction is that it is a Moisture Resistant general-purpose plywood grade, intended for conditions different from the more water-resistant grades.",
    ],
    badge: {
      isNumber: "303",
      year: "2024",
      label: "General-purpose plywood standard",
      sub: "General-purpose plywood standard",
    },
    cta: {
      text: "View Quality & Certifications",
      href: HOME_SECTIONS.quality,
    },
  },
  whyPentagon: {
    eyebrow: "Why Choose Pentagon MR Grade Plywood?",
    title: "Everyday furniture still deserves the right foundation.",
    items: whyPentagonData,
  },
  bulkSection: {
    eyebrow: "For Furniture Makers, Dealers & Projects",
    title: (
      <>
        Planning more than one piece of furniture?{" "}
        <em className="text-[#F4D8B4]">
          Let’s discuss the complete requirement.
        </em>
      </>
    ),
    copy: "Whether you are sourcing plywood for resale, furniture manufacturing, wardrobes, office furniture, residential interiors or a larger project, share your complete requirement with the Pentagon team.",
    primaryCta: { text: "Request a Bulk Quote", href: MR_GRADE_SECTIONS.enquiry },
    secondaryCta: { text: "Become a Dealer", href: ROUTES.dealers },
    useCases: [
      "Dealer & distributor supply",
      "Furniture manufacturing",
      "Wardrobe production",
      "Office furniture projects",
      "Residential interiors",
      "Retail & commercial interiors",
      "Bulk procurement",
      "Export requirements",
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers before you choose the sheet.",
    items: faqsData,
  },
  enquiry: {
    eyebrow: "Need Plywood for an Interior Project?",
    title: "Tell us what you need. We’ll help you choose an available plywood option.",
    copy: "Whether you need material for furniture manufacturing, a home project, a shop interior, dealer supply or a larger requirement, share your application, thickness, sheet size, quantity and delivery location to start the discussion.",
    phoneLink: "tel:+917015085556",
    phoneText: "Call +91 70150 85556",
    whatsappLink: "https://wa.me/917015085556?text=Hello%20Pentagon%20Plywood%2C%20I%20would%20like%20to%20discuss%20MR%20Grade%20Plywood%20for%20an%20interior%20furniture%20requirement.",
    whatsappText: "WhatsApp our team",
    thicknesses: ["4 mm", "6 mm", "9 mm", "12 mm", "15 mm", "18 mm"],
    sheetSizes: ["8×4 ft", "8×3 ft", "7×4 ft", "7×3 ft", "6×4 ft", "6×3 ft"],
  },
};
