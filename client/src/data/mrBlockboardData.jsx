import { CONTACT_SECTIONS, HOME_SECTIONS, PRODUCT_ROUTES, ROUTES } from "../app/routes.js";
import heroBg from "../assets/product/mr plywood/mr-hero-bg-room.png";
import productImage from "../assets/menu/blockboard.jpg";
import edgeImage from "../assets/homepage/products/is303-blockboard-1671450145-6629496.webp";
import wardrobeImage from "../assets/product/Applications/Modern wardrobe with sliding doors.png";
import livingImage from "../assets/product/Applications/Contemporary living room with furniture.png";
import officeImage from "../assets/product/Applications/Modern office with desks and partitions.png";

export const quickFactsData = [
  { label: "GRADE", value: "MR — Moisture Resistant", icon: "Shield" },
  { label: "CONSTRUCTION", value: "Timber-strip core with veneer layers", icon: "Layers" },
  { label: "BEST SUITED FOR", value: "Furniture & dry interior applications", icon: "Drop" },
  { label: "THICKNESSES", value: "19 mm, 22 mm and 25 mm", icon: "Ruler" },
  { label: "MANUFACTURING", value: "Yamunanagar, Haryana", icon: "Factory" },
];

export const benefitsData = [
  {
    number: "01",
    title: "Made for Interior Furniture",
    copy: "A practical board for furniture and installations used inside relatively dry residential and commercial spaces.",
  },
  {
    number: "02",
    title: "Useful for Longer Components",
    copy: "Blockboard is commonly considered for shelves, shutters, tables and panels where the design includes longer board dimensions.",
  },
  {
    number: "03",
    title: "Timber-Core Construction",
    copy: "Solid timber strips form the main core, with crossband and face veneer layers bonded over both sides.",
  },
  {
    number: "04",
    title: "Practical for Hardware Fixing",
    copy: "The timber-strip core can provide useful support for screws and fittings when fixing is positioned into the core.",
  },
  {
    number: "05",
    title: "Easy to Finish Around the Design",
    copy: "Depending on face quality and fabrication system, blockboard can be laminated, veneered, painted or polished.",
  },
];

export const applicationsData = [
  {
    title: "Wardrobe Shutters",
    copy: "Tall wardrobe shutters needing manageable weight while providing a stable base for hinges, handles and laminates.",
    image: wardrobeImage,
    alt: "Tall wardrobe shutters made with blockboard",
  },
  {
    title: "Long Bookshelves & Storage",
    copy: "Bookshelves and storage units containing long horizontal components supported against sagging.",
    image: livingImage,
    alt: "Long bookshelves and living room storage",
  },
  {
    title: "Tables & Worktops",
    copy: "Suitable table tops, desks, study units and worktop components with appropriate framing.",
    image: officeImage,
    alt: "Office tables and worktops",
  },
  {
    title: "Interior Doors & Shutters",
    copy: "Selected blockboard thicknesses for interior door and shutter construction according to hardware.",
    image: null,
    alt: null,
  },
  {
    title: "Partitions & Wall Panels",
    copy: "Large sheet formats for interior dividers, wall features and decorative panel applications.",
    image: null,
    alt: null,
  },
  {
    title: "Shop & Commercial Interiors",
    copy: "Display counters, long shelves and commercial fixtures in dry retail interiors.",
    image: null,
    alt: null,
  },
];

export const limitationsData = [
  "Regular water contact or standing moisture.",
  "Persistent dampness or unventilated spaces.",
  "Furniture exposed to rain or outdoor weather.",
  "Exterior wall installations.",
  "Frequently wet utility areas.",
  "High-moisture kitchen locations.",
  "Bathroom furniture exposed to direct water splashing.",
  "Furniture immediately around leak-prone plumbing.",
];

export const specificationsData = [
  ["Product", "MR Grade Blockboard"],
  ["Grade", "MR — Moisture Resistant"],
  ["Product category", "Interior-grade blockboard"],
  ["Core construction", "Solid timber-strip core"],
  ["Surface construction", "Crossband and face veneer layers"],
  ["Suitable use", "Furniture and relatively dry interiors"],
  ["Thicknesses", "19 mm, 22 mm and 25 mm"],
  ["Sheet sizes", "8 × 4 ft, 8 × 3 ft, 7 × 4 ft, 7 × 3 ft, 6 × 4 ft and 6 × 3 ft"],
  ["Common applications", "Shelves, shutters, tables, doors, partitions and furniture"],
  ["Country of origin", "India"],
  ["Applicable standard", "IS 1659:2004 — Block boards – Specification"],
];

export const thicknessesData = [
  { size: "19 mm", strength: 65, use: "Wardrobe components, furniture bodies, shelves, partitions and general interior furniture", duty: "Standard Panel" },
  { size: "22 mm", strength: 82, use: "Larger shutters, storage furniture, tables, longer components and heavier fabrication", duty: "Substantial Panel" },
  { size: "25 mm", strength: 100, use: "Long shelves, tables, worktops, selected doors, larger shutters and heavy furniture", duty: "Heavy-Duty Panel" },
];

export const comparisonsData = [
  ["Core Construction", "Solid timber strips with veneer layers", "Multiple veneer layers"],
  ["Primary Environment", "Relatively dry interiors", "Relatively dry interiors"],
  ["Long Furniture Components", "Particularly useful for selected applications", "Suitable depending on construction"],
  ["Shelves & Shutters", "Common application (High stiffness)", "Common application"],
  ["Furniture Bodies", "Suitable", "Suitable"],
  ["Screw Fixing", "Influenced by timber-strip position", "More consistent through layered construction"],
  ["Surface Finishing", "Laminate, veneer, paint or polish", "Laminate, veneer, paint or polish"],
  ["Applicable Standard", "IS 1659:2004", "IS 303:2024"],
];

export const mrVsBwpBlockboardData = [
  ["Bedroom furniture", "MR Grade Blockboard"],
  ["Living-room furniture", "MR Grade Blockboard"],
  ["Office furniture", "MR Grade Blockboard"],
  ["Bookshelves", "MR Grade Blockboard"],
  ["Interior shutters", "MR Grade Blockboard"],
  ["Furniture in humid interiors", "BWP Grade Blockboard"],
  ["Selected moisture-conscious furniture", "BWP Grade Blockboard"],
  ["More demanding water-resistance requirement", "BWP Grade Blockboard"],
];

export const finishesData = [
  "Decorative laminates",
  "Natural veneers",
  "Decorative veneers",
  "Paint",
  "Polish",
  "Edge finishing",
  "Other compatible furniture finishes",
];

export const fabricationChecksData = [
  "Panel length and width",
  "Required thickness",
  "Unsupported span",
  "Expected load",
  "Screw positions relative to timber strips",
  "Hinge and hardware locations",
  "Edge treatment and banding",
  "Decorative finish compatibility",
  "Installation environment moisture",
];

export const manufacturingJourneyData = [
  { step: "01", title: "Timber Selection", copy: "Suitable timber is selected for preparation of the core." },
  { step: "02", title: "Core Strip Preparation", copy: "Timber is cut into uniform strips or battens." },
  { step: "03", title: "Moisture Conditioning", copy: "The core material is conditioned before assembly." },
  { step: "04", title: "Core Arrangement", copy: "Prepared timber strips are positioned side by side." },
  { step: "05", title: "Veneer Placement", copy: "Crossband and face veneers are positioned over the core." },
  { step: "06", title: "Adhesive Application", copy: "The required bonding system is applied evenly." },
  { step: "07", title: "Pressing", copy: "The assembled board is pressed under controlled conditions." },
  { step: "08", title: "Trimming & Sanding", copy: "Finished boards are cut and surface-prepared." },
  { step: "09", title: "Inspection", copy: "Dimensions, bonding and surface condition are checked." },
];

export const whyPentagonData = [
  {
    number: "01",
    title: "Manufactured in Yamunanagar",
    copy: "Blockboard is one of Pentagon's in-house manufactured wood-product categories at its Yamunanagar operations.",
  },
  {
    number: "02",
    title: "Built for Practical Furniture",
    copy: "Use blockboard for shutters, shelves, tables, panels, selected doors and other interior furniture requirements.",
  },
  {
    number: "03",
    title: "Multiple Thickness Options",
    copy: "Choose 19 mm, 22 mm or 25 mm according to the component, furniture construction and expected use.",
  },
  {
    number: "04",
    title: "Application-Led Selection",
    copy: "Begin with what you are building and how the board will be supported instead of choosing only by thickness or price.",
  },
  {
    number: "05",
    title: "MR & BWP Options",
    copy: "Select the grade according to the moisture conditions around the finished furniture.",
  },
];

export const faqsData = [
  {
    question: "What is MR Grade Blockboard?",
    answer: "MR Grade Blockboard is Moisture Resistant blockboard intended primarily for furniture and applications in relatively dry interior environments.",
  },
  {
    question: "What is inside a blockboard?",
    answer: "Blockboard contains a central core formed from timber strips arranged side by side, with crossband and face veneer layers bonded over the core.",
  },
  {
    question: "Is MR Grade Blockboard waterproof?",
    answer: "No. MR stands for Moisture Resistant. It is intended for normal indoor conditions rather than frequent water exposure or prolonged dampness.",
  },
  {
    question: "Is MR Blockboard suitable for wardrobes?",
    answer: "Yes. It can be considered for wardrobe shutters, shelves and other components in relatively dry interiors.",
  },
  {
    question: "Is blockboard suitable for long shelves?",
    answer: "Blockboard is commonly considered for longer shelves and furniture panels. The correct thickness and support spacing still depend on the span and expected load.",
  },
  {
    question: "Can MR Blockboard be used for doors?",
    answer: "Selected thicknesses can be considered for appropriate interior doors and shutters. The final choice depends on the door dimensions, construction, hardware and installation.",
  },
  {
    question: "Is Blockboard better than plywood?",
    answer: "Neither is universally better. Their core construction is different, so the appropriate choice depends on the furniture component, span, fixing, load, moisture exposure and fabrication method.",
  },
  {
    question: "What is the standard for blockboard in India?",
    answer: "The applicable BIS specification is IS 1659:2004 — Block boards – Specification (Fourth Revision).",
  },
  {
    question: "What is the difference between MR and BWP Blockboard?",
    answer: "MR Grade is intended primarily for relatively dry interior conditions. BWP Grade is selected where a higher level of water resistance is required.",
  },
  {
    question: "Which thicknesses does Pentagon offer?",
    answer: "Pentagon lists 19 mm, 22 mm and 25 mm blockboard thicknesses.",
  },
  {
    question: "Which sheet sizes are available?",
    answer: "Available in standard formats: 8 × 4, 8 × 3, 7 × 4, 7 × 3, 6 × 4 and 6 × 3 ft.",
  },
  {
    question: "Can Blockboard be laminated or veneered?",
    answer: "Yes. Depending on surface quality and the fabrication system, it can be finished with compatible laminates, veneers, paint or polish.",
  },
];

export const mrBlockboardProductData = {
  pageTitle: "MR Grade Blockboard",
  breadcrumbs: [
    ["Home", ROUTES.home],
    ["Products", ROUTES.products],
    ["Blockboard", PRODUCT_ROUTES.blockboard || ROUTES.products],
    ["MR Grade Blockboard", null],
  ],
  hero: {
    categoryBadge: "INTERIOR GRADE BLOCKBOARD",
    gradeBadge: "IS 1659:2004 CERTIFIED",
    title: (
      <>
        A Practical Timber-Core Board{" "}
        <span className="text-[#E7B572]">for Everyday Interior Furniture.</span>
      </>
    ),
    description:
      "Pentagon MR Grade Blockboard is made for furniture and interior applications where long panels, workability and dependable everyday performance are important.",
    subDescription:
      "MR stands for Moisture Resistant. Its timber-strip core makes blockboard particularly useful for wardrobes, shelves, shutters, tables, partitions and other furniture components where longer panel dimensions are part of the design.",
    primaryCta: { text: "Request an MR Blockboard Quote", href: "#mr-enquiry" },
    secondaryCta: { text: "Talk to Our Team", href: ROUTES.contact },
    productImage: productImage,
    productImageAlt: "Pentagon MR Grade Blockboard sheet",
    productImageBadge: "IS 1659 · TIMBER-STRIP CORE",
    heroBg: heroBg,
  },
  quickFacts: quickFactsData,
  overview: {
    eyebrow: "Understand MR Grade Blockboard",
    title: "Built Differently at the Core.",
    edgeImage: edgeImage,
    edgeCaption: "Solid timber-strip core with crossband veneers",
    paragraphs: [
      "Blockboard is different from plywood because of what sits inside the panel. Instead of being constructed entirely from multiple veneer layers, blockboard uses solid timber strips arranged side by side to form the central core, with crossband and face veneers bonded over the core.",
      "A typical blockboard construction includes: Face veneer, Crossband veneer, Solid timber-strip core, Crossband veneer, and Back veneer.",
      "This construction gives blockboard a different balance of weight, handling and workability, making it a practical option for selected furniture components—especially where the design uses longer panels.",
    ],
    callout: {
      title: "Choose MR Grade Blockboard When",
      copy: "Choose MR Grade Blockboard for furniture and panels installed in bedrooms, living rooms, offices, shops and other relatively dry interiors—especially where the design includes longer vertical or horizontal components.",
    },
    cta: {
      text: "Ask whether MR Blockboard fits my design",
      href: "#mr-enquiry",
    },
  },
  benefits: {
    eyebrow: "Why Consider MR Grade Blockboard",
    title: "Made for Longer Furniture Components & Practical Hardware Fixing.",
    items: benefitsData,
  },
  applications: {
    eyebrow: "Suitable Applications",
    title: "Made for Longer Furniture Components.",
    copy: "One of the practical reasons furniture makers consider blockboard is its suitability for selected long panels and furniture components.",
    items: applicationsData,
    cta: {
      text: "Select Board Thickness",
      href: "#thickness-guide",
    },
  },
  limitations: {
    eyebrow: "Where MR Grade Blockboard Should Not Be the Default",
    title: "Moisture Resistant Does Not Mean Waterproof.",
    copy: "MR Grade Blockboard is designed primarily for normal interior conditions. It should not automatically be selected for locations involving regular water contact or persistent dampness.",
    items: limitationsData,
    footnote:
      "For furniture facing more demanding moisture conditions, consider BWP Grade Blockboard according to the application and product specification.",
    cta: {
      text: "Compare MR vs BWP Blockboard",
      href: "#grade-comparison",
    },
  },
  specifications: {
    eyebrow: "Technical Specifications",
    title: "Available Information & IS 1659 Standard Parameters.",
    items: specificationsData,
    alert: {
      eyebrow: "IS 1659:2004 Standard",
      title: "Indian Standard for Blockboards.",
      paragraph1:
        "The relevant BIS standard is IS 1659:2004 — Block boards – Specification (Fourth Revision).",
      paragraph2:
        "BIS laboratory scopes for the standard include water-resistance, adhesion, dimensional-change, and mechanical-property testing.",
      linkText: "View quality certifications",
      linkHref: HOME_SECTIONS.quality,
    },
  },
  thicknessGuide: {
    eyebrow: "Select the Right Thickness",
    title: "Length, Load and Support Need to Work Together.",
    items: thicknessesData,
    note: "Thickness alone does not determine performance. Panel span, support spacing, load, joinery and hardware matter as well.",
    cta: {
      text: "Get Thickness Advice",
      href: "#mr-enquiry",
    },
  },
  comparison: {
    eyebrow: "MR Grade Blockboard vs Plywood",
    title: "Similar Furniture Applications. Different Core Construction.",
    copy: "Neither material is automatically better. Blockboard can make practical sense for long shelves, shutters, tables and panels. Plywood may be preferred when its layered construction better suits fixing layout or expected performance.",
    columns: ["Comparison Criteria", "MR Grade Blockboard", "MR Grade Plywood"],
    rows: comparisonsData,
    cta: {
      text: "Help Me Choose Material",
      href: CONTACT_SECTIONS.form,
    },
  },
  finishes: {
    eyebrow: "Fabrication & Finishing",
    title: "Start With the Core. Finish It Around the Interior.",
    copy: "Depending on face quality and the selected finishing system, MR Grade Blockboard can form the base for decorative laminates, veneers, paint, polish, or edge banding.",
    surfaceImage: productImage,
    surfaceCaption: "Timber-core blockboard surface ready for finishing",
    items: finishesData,
    checksTitle: "Before Fabrication, Consider:",
    checks: fabricationChecksData,
    cta: {
      text: "Discuss Fabrication Needs",
      href: "#mr-enquiry",
    },
  },
  quality: {
    eyebrow: "Understanding IS 1659",
    title: "The Indian Standard for Blockboards.",
    paragraphs: [
      "The Bureau of Indian Standards currently identifies IS 1659:2004 — Block boards – Specification (Fourth Revision) as the applicable standard for blockboards.",
      "Current BIS testing scopes for IS 1659 include dimensions, moisture content, dimensional changes caused by humidity, water resistance, adhesion of plies, mechanical properties, and formaldehyde-related testing.",
      "BIS listings currently include MR and BWP blockboard testing under this standard.",
    ],
    badge: {
      isNumber: "1659",
      year: "2004",
      label: "Block Boards Specification",
      sub: "IS 1659 Certified Standard",
    },
    cta: {
      text: "Explore Quality & Certifications",
      href: HOME_SECTIONS.quality,
    },
  },
  whyPentagon: {
    eyebrow: "Why Choose Pentagon MR Grade Blockboard?",
    title: "Because the Core Continues Working After the Surface Is Finished.",
    items: whyPentagonData,
  },
  bulkSection: {
    eyebrow: "For Furniture Makers, Dealers & Projects",
    title: (
      <>
        Need Blockboard for{" "}
        <em className="text-[#F4D8B4]">More Than One Build?</em>
      </>
    ),
    copy: "Pentagon can discuss MR Grade Blockboard requirements for furniture manufacturing, wardrobe production, door/shutter fabrication, interior projects, office furniture, residential interiors, dealer supply and bulk procurement.",
    primaryCta: { text: "Request a Bulk Quote", href: "#mr-enquiry" },
    secondaryCta: { text: "Become a Dealer", href: ROUTES.dealers },
    useCases: [
      "Furniture manufacturing",
      "Wardrobe production",
      "Door & shutter fabrication",
      "Interior projects",
      "Office furniture",
      "Residential interiors",
      "Commercial furniture",
      "Dealer & distributor supply",
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers before you select MR Grade Blockboard.",
    items: faqsData,
  },
  enquiry: {
    eyebrow: "Building Furniture With Longer Panels?",
    title: "Tell us what you’re making. We’ll help you select the right MR Blockboard.",
    copy: "From wardrobe shutters and bookshelves to tables, partitions and interior doors, MR Grade Blockboard provides a practical timber-core option for everyday interior fabrication. Share your application, thickness, sheet size, quantity and delivery location.",
    phoneLink: "tel:+917015085556",
    phoneText: "Call +91 70150 85556",
    whatsappLink: "https://wa.me/917015085556?text=Hello%20Pentagon%20Plywood%2C%20I%20would%20like%20to%20discuss%20MR%20Grade%20Blockboard%20for%20my%20furniture%20project.",
    whatsappText: "WhatsApp our team",
    thicknesses: ["19 mm", "22 mm", "25 mm"],
    sheetSizes: ["8×4 ft", "8×3 ft", "7×4 ft", "7×3 ft", "6×4 ft", "6×3 ft"],
  },
};
