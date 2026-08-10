import { CONTACT_SECTIONS, HOME_SECTIONS, PRODUCT_ROUTES, ROUTES } from "../app/routes.js";
import heroBg from "../assets/product/mr plywood/mr-hero-bg-room.png";
import productImage from "../assets/menu/blockboard.jpg";
import edgeImage from "../assets/homepage/products/is303-blockboard-1671450145-6629496.webp";
import kitchenImage from "../assets/product/Applications/Modern kitchen with cabinets and island.png";
import wardrobeImage from "../assets/product/Applications/Modern wardrobe with sliding doors.png";
import officeImage from "../assets/product/Applications/Modern office with desks and partitions.png";

export const quickFactsData = [
  { label: "GRADE", value: "BWP — Boiling Water Proof", icon: "Shield" },
  { label: "CONSTRUCTION", value: "Timber-strip core with veneer layers", icon: "Layers" },
  { label: "BEST SUITED FOR", value: "Moisture-conscious furniture & interiors", icon: "Drop" },
  { label: "THICKNESSES", value: "19 mm, 22 mm and 25 mm", icon: "Ruler" },
  { label: "MANUFACTURING", value: "Yamunanagar, Haryana", icon: "Factory" },
];

export const benefitsData = [
  {
    number: "01",
    title: "Higher Water Resistance",
    copy: "Designed for applications requiring greater resistance to water and moisture than MR Grade Blockboard.",
  },
  {
    number: "02",
    title: "Useful for Longer Components",
    copy: "Its timber-strip core makes blockboard a practical option for selected shutters, shelves, doors, tables and longer furniture panels.",
  },
  {
    number: "03",
    title: "Suitable for Humid Interiors",
    copy: "Can be considered for furniture installed where humidity and moisture are greater concerns than in ordinary bedrooms or living spaces.",
  },
  {
    number: "04",
    title: "Practical Hardware Fixing",
    copy: "The wooden core can provide useful support for screws and furniture fittings when fixing positions and fabrication are planned correctly.",
  },
  {
    number: "05",
    title: "Ready for Interior Finishes",
    copy: "Depending on face quality and the finishing system, blockboard can be laminated, veneered, painted or polished.",
  },
];

export const applicationsData = [
  {
    title: "Kitchen Shutters",
    copy: "Suitable tall or wide shutters where humidity, steam and occasional moisture are concerns.",
    image: kitchenImage,
    alt: "Kitchen shutters made with BWP Blockboard",
  },
  {
    title: "Wardrobe Shutters in Humid Areas",
    copy: "Wardrobes in humid environments or rooms where walls may experience seasonal dampness.",
    image: wardrobeImage,
    alt: "Wardrobe shutters in humid interiors",
  },
  {
    title: "Long Shelves & Pantry Units",
    copy: "Long shelves, pantry units and storage furniture where panel length and moisture resistance are required.",
    image: officeImage,
    alt: "Pantry units and long shelves",
  },
  {
    title: "Tables & Work Surfaces",
    copy: "Suitable long table components and worktop surfaces when correctly supported and finished.",
    image: null,
    alt: null,
  },
  {
    title: "Interior Doors",
    copy: "Selected interior doors and shutters where greater moisture resistance is desirable.",
    image: null,
    alt: null,
  },
  {
    title: "Utility-Area Furniture",
    copy: "Laundry, utility and service area cabinets experiencing repeated humidity and occasional water.",
    image: null,
    alt: null,
  },
];

export const limitationsData = [
  "Continuous leakage or unsealed plumbing routes.",
  "Permanently wet utility areas or standing water.",
  "Lack of edge sealing, cut-out protection, or suitable adhesives.",
  "Direct exterior weather or rain exposure.",
  "Unventilated spaces with persistent damp walls or floors.",
];

export const specificationsData = [
  ["Product", "BWP Grade Blockboard"],
  ["Grade", "BWP — Boiling Water Proof"],
  ["Product category", "Water-resistant blockboard"],
  ["Core construction", "Solid timber-strip core"],
  ["Surface construction", "Crossband and face veneers"],
  ["Suitable use", "Furniture and moisture-conscious interiors"],
  ["Thicknesses", "19 mm, 22 mm and 25 mm"],
  ["Sheet sizes", "8 × 4 ft, 8 × 3 ft, 7 × 4 ft, 7 × 3 ft, 6 × 4 ft and 6 × 3 ft"],
  ["Common applications", "Shutters, shelves, doors, tables, partitions and furniture"],
  ["Country of origin", "India"],
  ["Applicable standard", "IS 1659:2004 — Block boards – Specification"],
];

export const thicknessesData = [
  { size: "19 mm", strength: 65, use: "Wardrobe shutters, cabinet shutters, furniture bodies, storage units, shelves, interior partitions", duty: "Standard Panel" },
  { size: "22 mm", strength: 82, use: "Larger shutters, longer furniture components, tables, storage furniture, substantial panels", duty: "Substantial Panel" },
  { size: "25 mm", strength: 100, use: "Long shelves, tables, worktops, selected interior doors, larger shutters, heavier furniture", duty: "Heavy-Duty Panel" },
];

export const comparisonsData = [
  ["Core Construction", "Solid timber strips with veneer layers", "Multiple veneer layers"],
  ["Main Practical Use", "Long furniture components, shutters, shelves and doors", "Furniture, cabinetry and broader panel applications"],
  ["Longer Components", "Often considered (High stiffness)", "Depends on construction and design"],
  ["Screw Fixing", "Influenced by timber-strip position", "More consistent through layered construction"],
  ["Weight", "Comparatively manageable depending on construction", "Varies by timber and construction"],
  ["Moisture Performance", "BWP Grade (IS 1659)", "BWP Grade (IS 303)"],
  ["Applicable Standard", "IS 1659:2004", "IS 303:2024"],
];

export const mrVsBwpBlockboardData = [
  ["Relatively dry interiors", "MR Grade Blockboard (Well suited)", "BWP Grade Blockboard (Can be used)"],
  ["Bedroom furniture", "MR Grade Blockboard (Well suited)", "BWP Grade Blockboard (Can be used)"],
  ["Living-room furniture", "MR Grade Blockboard (Well suited)", "BWP Grade Blockboard (Can be used)"],
  ["Office furniture", "MR Grade Blockboard (Well suited)", "BWP Grade Blockboard (Suitable)"],
  ["Standard wardrobes", "MR Grade Blockboard (Well suited)", "BWP Grade Blockboard (Suitable)"],
  ["Humid interiors", "MR Grade Blockboard (Limited)", "BWP Grade Blockboard (Better suited)"],
  ["Selected kitchen furniture", "MR Grade Blockboard (Not first choice)", "BWP Grade Blockboard (Suitable starting option)"],
  ["Utility furniture", "MR Grade Blockboard (Limited where frequent)", "BWP Grade Blockboard (Better suited)"],
  ["Higher water resistance requirement", "MR Grade Blockboard (No)", "BWP Grade Blockboard (Yes)"],
];

export const finishesData = [
  "Decorative laminates",
  "Natural veneers",
  "Decorative veneers",
  "Paint",
  "Polish",
  "Edge banding",
  "Other compatible furniture finishes",
];

export const fabricationChecksData = [
  "Panel length and width",
  "Required thickness",
  "Expected load and unsupported span",
  "Hinge positions and hardware fixing",
  "Screw locations relative to timber strips",
  "Edge treatment and sealing",
  "Cut-outs and openings protection",
  "Surface finish compatibility",
  "Moisture exposure & installation conditions",
];

export const whyPentagonData = [
  {
    number: "01",
    title: "Manufactured in Yamunanagar",
    copy: "Blockboard is part of Pentagon's in-house manufactured wood-product range in Yamunanagar.",
  },
  {
    number: "02",
    title: "Built Around Practical Furniture",
    copy: "Consider it for shutters, doors, shelves, tables, partitions and longer furniture components.",
  },
  {
    number: "03",
    title: "Higher Moisture Resistance",
    copy: "BWP provides the Blockboard option for applications where ordinary MR Grade may not provide the level of water resistance required.",
  },
  {
    number: "04",
    title: "Multiple Thickness Options",
    copy: "Choose between 19 mm, 22 mm and 25 mm according to the component and furniture design.",
  },
  {
    number: "05",
    title: "Application-Led Selection",
    copy: "Start with what you are making, how long the panel is, the moisture conditions and what the furniture needs to support.",
  },
];

export const faqsData = [
  {
    question: "What does BWP mean in Blockboard?",
    answer: "BWP means Boiling Water Proof. It is the higher water-resistance grade used for blockboards intended for more demanding moisture conditions.",
  },
  {
    question: "What is BWP Grade Blockboard?",
    answer: "BWP Grade Blockboard is a timber-core engineered wood panel designed for furniture applications requiring a higher level of water resistance than MR Grade Blockboard.",
  },
  {
    question: "Is BWP Blockboard waterproof?",
    answer: "BWP indicates a higher water-resistance requirement, but the completed furniture still depends on edges, joints, finishes, hardware and installation. It should not be interpreted as permission for continuous uncontrolled water exposure.",
  },
  {
    question: "Is BWP Blockboard suitable for kitchens?",
    answer: "It can be considered for selected kitchen shutters, cabinets and furniture components where its core construction suits the design and higher water resistance is required.",
  },
  {
    question: "Can BWP Blockboard be used under a kitchen sink?",
    answer: "It may be considered as part of a properly designed cabinet, but under-sink locations require additional attention to plumbing, leakage, exposed edges, sealing and floor moisture.",
  },
  {
    question: "What is the difference between MR and BWP Blockboard?",
    answer: "MR Grade is intended primarily for relatively dry interiors. BWP Grade is selected where the furniture requires a higher level of resistance to moisture and water.",
  },
  {
    question: "Is there a BWR Grade Blockboard?",
    answer: "For the blockboard classification used here, the recognised moisture grades under IS 1659 are MR and BWP. Do not copy plywood terminology directly onto the Blockboard product range.",
  },
  {
    question: "What standard applies to Blockboard?",
    answer: "The applicable Blockboard standard is IS 1659:2004, rather than the IS 303 standard used for general-purpose plywood.",
  },
  {
    question: "Is BWP Blockboard the same as BWP Plywood?",
    answer: "No. Although both carry a BWP grade designation, their construction is different. Blockboard contains a solid timber-strip core, while plywood is constructed from multiple veneer layers.",
  },
  {
    question: "Is BWP Blockboard suitable for long shelves?",
    answer: "It can be considered for long shelves, but the thickness, unsupported span, load and support spacing should be selected together.",
  },
  {
    question: "Can BWP Blockboard be used for doors?",
    answer: "Yes, selected BWP Blockboard configurations can be considered for appropriate interior doors and shutters according to the dimensions, hardware and installation.",
  },
  {
    question: "Which thicknesses are available?",
    answer: "Pentagon offers 19 mm, 22 mm and 25 mm blockboard thicknesses.",
  },
  {
    question: "Which sheet sizes are available?",
    answer: "Available in standard formats: 8 × 4, 8 × 3, 7 × 4, 7 × 3, 6 × 4 and 6 × 3 ft.",
  },
  {
    question: "Can BWP Blockboard be laminated or veneered?",
    answer: "Yes. Depending on the surface and finishing process, blockboard can be used with suitable laminates, veneers, paint and polish.",
  },
];

export const bwpBlockboardProductData = {
  pageTitle: "BWP Grade Blockboard",
  breadcrumbs: [
    ["Home", ROUTES.home],
    ["Products", ROUTES.products],
    ["Blockboard", PRODUCT_ROUTES.blockboard || ROUTES.products],
    ["BWP Grade Blockboard", null],
  ],
  hero: {
    categoryBadge: "WATER-RESISTANT BLOCKBOARD",
    gradeBadge: "IS 1659:2004 BWP",
    title: (
      <>
        A Timber-Core Board{" "}
        <span className="text-[#E7B572]">for Furniture That Faces More Moisture.</span>
      </>
    ),
    description:
      "Pentagon BWP Grade Blockboard is made for furniture and interior applications where the board may experience greater humidity, occasional moisture and more demanding conditions than ordinary dry interiors.",
    subDescription:
      "BWP stands for Boiling Water Proof. It provides a higher level of water resistance than MR Grade Blockboard while retaining the timber-strip core construction that makes blockboard useful for shutters, shelves, doors, tables and longer furniture components.",
    primaryCta: { text: "Request a BWP Blockboard Quote", href: "#mr-enquiry" },
    secondaryCta: { text: "Talk to Our Team", href: ROUTES.contact },
    productImage: productImage,
    productImageAlt: "Pentagon BWP Grade Blockboard sheet",
    productImageBadge: "IS 1659 · BWP TIMBER CORE",
    heroBg: heroBg,
  },
  quickFacts: quickFactsData,
  overview: {
    eyebrow: "Understand BWP Grade Blockboard",
    title: "The Familiar Blockboard Core, Made for More Demanding Conditions.",
    edgeImage: edgeImage,
    edgeCaption: "Solid timber-strip core with BWP phenolic bonding",
    paragraphs: [
      "At the centre of BWP Grade Blockboard is a core formed from solid timber strips arranged side by side. Crossband and face veneers are bonded over this core to create the finished board.",
      "A typical construction includes: Face veneer, Crossband veneer, Solid timber-strip core, Crossband veneer, and Back veneer.",
      "What distinguishes BWP Grade from MR Grade is primarily the water-resistance requirement of the finished blockboard. MR Grade is designed for relatively dry interiors. BWP Grade is selected when furniture may experience higher humidity or greater moisture exposure.",
    ],
    callout: {
      title: "Choose BWP Grade Blockboard When",
      copy: "Choose BWP Grade Blockboard when you need the practical characteristics of blockboard but the finished furniture will be installed in more moisture-conscious interior conditions.",
    },
    cta: {
      text: "Ask whether BWP Blockboard fits my application",
      href: "#mr-enquiry",
    },
  },
  benefits: {
    eyebrow: "Why Consider BWP Grade Blockboard",
    title: "Higher Water Resistance for Humid Interiors & Longer Components.",
    items: benefitsData,
  },
  applications: {
    eyebrow: "Suitable Applications",
    title: "Made for Longer Components in Moisture-Conscious Interiors.",
    copy: "Choosing blockboard should not begin with moisture resistance alone. The board also needs to suit the shape, span, fixing and load of the finished furniture.",
    items: applicationsData,
    cta: {
      text: "Select Board Thickness",
      href: "#thickness-guide",
    },
  },
  limitations: {
    eyebrow: "BWP Does Not Mean Furniture Can Ignore Water",
    title: "Water Resistance Works Best as Part of the Complete Build.",
    copy: "BWP Grade Blockboard offers greater water resistance than MR Grade, but continuous leakage or permanently wet conditions should never be treated as normal operating conditions.",
    items: limitationsData,
    footnote:
      "Material selection should be combined with proper plumbing, sealing, edge protection, floor clearance, and installation.",
    cta: {
      text: "Compare BWP Blockboard vs BWP Plywood",
      href: "#grade-comparison",
    },
  },
  specifications: {
    eyebrow: "Technical Specifications",
    title: "Available Information & IS 1659 BWP Standard Parameters.",
    items: specificationsData,
    alert: {
      eyebrow: "IS 1659:2004 Standard",
      title: "Indian Standard for Blockboards.",
      paragraph1:
        "The relevant Indian Standard for blockboard is IS 1659:2004 — Block boards – Specification (Fourth Revision).",
      paragraph2:
        "Covers classifications including MR and BWP Grade, addressing dimensions, moisture content, water resistance, adhesion, dimensional changes, and mechanical properties.",
      linkText: "View quality certifications",
      linkHref: HOME_SECTIONS.quality,
    },
  },
  thicknessGuide: {
    eyebrow: "Select the Right Thickness",
    title: "Water Resistance Is the Grade. Thickness Is a Design Decision.",
    items: thicknessesData,
    note: "The final thickness should consider panel dimensions, unsupported span, expected load, support spacing, hardware and joinery.",
    cta: {
      text: "Get Thickness Advice",
      href: "#mr-enquiry",
    },
  },
  comparison: {
    eyebrow: "BWP Blockboard vs BWP Plywood",
    title: "Similar Grade Name. Very Different Core.",
    copy: "The word BWP describes the water-resistance grade. It does not mean BWP Blockboard and BWP Plywood are the same material. Blockboard contains a timber-strip core, while plywood is made from multiple veneer layers.",
    columns: ["Comparison Criteria", "BWP Grade Blockboard (IS 1659)", "BWP Grade Plywood (IS 303)"],
    rows: comparisonsData,
    cta: {
      text: "Help Me Choose Material",
      href: CONTACT_SECTIONS.form,
    },
  },
  finishes: {
    eyebrow: "Fabrication & Finishing",
    title: "Protect the Core as Carefully as You Finish the Face.",
    copy: "BWP Grade Blockboard can form the base for decorative laminates, veneers, paint, polish, or edge banding.",
    surfaceImage: productImage,
    surfaceCaption: "BWP timber-core blockboard ready for finishing",
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
    title: "For Blockboard, Look for the Blockboard Standard.",
    paragraphs: [
      "The relevant Indian Standard for blockboard is IS 1659:2004.",
      "The Blockboard material prepared for Pentagon identifies classifications including MR Grade, BWP Grade, Commercial type, and Decorative type.",
      "IS 303 relates to plywood, while the Blockboard standard is IS 1659. Always check the correct standard for your technical specification.",
    ],
    badge: {
      isNumber: "1659",
      year: "2004",
      label: "Block Boards Specification",
      sub: "IS 1659 BWP Certified Standard",
    },
    cta: {
      text: "Explore Quality & Certifications",
      href: HOME_SECTIONS.quality,
    },
  },
  whyPentagon: {
    eyebrow: "Why Choose Pentagon BWP Grade Blockboard?",
    title: "Because Longer Furniture Components Still Need the Right Grade Behind Them.",
    items: whyPentagonData,
  },
  bulkSection: {
    eyebrow: "For Furniture Makers, Dealers & Projects",
    title: (
      <>
        Need BWP Blockboard for a{" "}
        <em className="text-[#F4D8B4]">Larger Requirement?</em>
      </>
    ),
    copy: "Pentagon can discuss BWP Grade Blockboard requirements for kitchen furniture, wardrobe production, door/shutter fabrication, residential & commercial interiors, office furniture, dealer supply, and bulk procurement.",
    primaryCta: { text: "Request a Bulk Quote", href: "#mr-enquiry" },
    secondaryCta: { text: "Become a Dealer", href: ROUTES.dealers },
    useCases: [
      "Furniture manufacturing",
      "Kitchen furniture",
      "Wardrobe production",
      "Door & shutter fabrication",
      "Residential interiors",
      "Commercial interiors",
      "Office furniture",
      "Dealer & distributor supply",
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers before you select BWP Grade Blockboard.",
    items: faqsData,
  },
  enquiry: {
    eyebrow: "Need a Timber-Core Board for More Demanding Conditions?",
    title: "Tell us what you’re making. We’ll help you select the right BWP Blockboard.",
    copy: "From kitchen shutters and humid-area wardrobes to long shelves, interior doors and commercial furniture, BWP Grade Blockboard provides a practical option where length, workability and greater water resistance come together.",
    phoneLink: "tel:+917015085556",
    phoneText: "Call +91 70150 85556",
    whatsappLink: "https://wa.me/917015085556?text=Hello%20Pentagon%20Plywood%2C%20I%20would%20like%20to%20discuss%20BWP%20Grade%20Blockboard%20for%20my%20furniture%20project.",
    whatsappText: "WhatsApp our team",
    thicknesses: ["19 mm", "22 mm", "25 mm"],
    sheetSizes: ["8×4 ft", "8×3 ft", "7×4 ft", "7×3 ft", "6×4 ft", "6×3 ft"],
  },
};
