import {
  CONTACT_SECTIONS,
  HOME_SECTIONS,
  PRODUCT_ROUTES,
  ROUTES,
} from "@/app/routes.js";
import kitchenImage from "@/assets/product/marine plywood/marine-plywood-kitchen.png";
import plywoodImage from "@/assets/product/marine plywood/Marine-plywood-1000x1000.webp";
import edgeImage from "@/assets/product/marine plywood/marine-plywood-layered-board.png";
import surfaceImage from "@/assets/product/marine plywood/marine-plywood-wood-grain.png";
import officeImage from "@/assets/product/Applications/Modern office with desks and partitions.png";
import wardrobeImage from "@/assets/product/Applications/Modern wardrobe with sliding doors.png";

const BWP_SECTIONS = {
  enquiry: `${PRODUCT_ROUTES.bwpGradePlywood}#bwp-enquiry`,
  thickness: `${PRODUCT_ROUTES.bwpGradePlywood}#thickness-guide`,
  comparison: `${PRODUCT_ROUTES.bwpGradePlywood}#grade-comparison`,
};

const quickFacts = [
  { label: "GRADE", value: "BWP - Boiling Water Proof", icon: "Drop" },
  { label: "BEST SUITED FOR", value: "Moisture-prone interiors", icon: "Shield" },
  { label: "APPLICATION", value: "Residential & commercial furniture", icon: "Layers" },
  { label: "THICKNESS", value: "4 mm to 18 mm", icon: "Ruler" },
  { label: "SHEET SIZES", value: "Multiple standard formats", icon: "Layers" },
  { label: "MANUFACTURED IN", value: "Yamunanagar, Haryana", icon: "Factory" },
];

const benefits = [
  {
    number: "01",
    title: "Higher water resistance",
    copy: "Made for applications where moisture exposure is a greater consideration than in ordinary dry interiors.",
  },
  {
    number: "02",
    title: "Suitable for kitchen furniture",
    copy: "A practical starting option for cabinets, storage units, shutters and other kitchen furniture where humidity and occasional spills may occur.",
  },
  {
    number: "03",
    title: "Made for everyday fabrication",
    copy: "Can be used for cabinets, wardrobes, storage, tables and other furniture components according to the design and thickness selected.",
  },
  {
    number: "04",
    title: "Multiple thickness options",
    copy: "Choose the plywood thickness according to the component, span, expected load, hardware and construction.",
  },
  {
    number: "05",
    title: "Residential and commercial interiors",
    copy: "Useful across homes, offices, shops and other interiors where moisture conditions require greater attention.",
  },
];

const applications = [
  { title: "Kitchen Cabinets", copy: "Base units, overhead cabinets, shutters and storage designed around actual moisture exposure.", image: kitchenImage, alt: "Kitchen cabinetry" },
  { title: "Utility Furniture", copy: "Laundry and utility-area furniture where plumbing, humidity and occasional spills need greater consideration.", image: null },
  { title: "Humid-Climate Wardrobes", copy: "Wardrobes and storage furniture installed in humid or coastal interior conditions.", image: wardrobeImage, alt: "Wardrobe in an interior" },
  { title: "Storage & Display Units", copy: "Storage cabinets, TV units and display furniture selected for moisture-conscious interiors.", image: null },
  { title: "Commercial Interiors", copy: "Office furniture, shop interiors and partitions where the environment calls for more water resistance.", image: officeImage, alt: "Commercial office furniture" },
  { title: "Interior Panelling", copy: "Wall panelling and selected interior installations in suitable, well-considered locations.", image: null },
];

const environment = {
  eyebrow: "Kitchens & Moisture-Prone Interiors",
  title: "Look beyond the room. Look at where the board will actually be used.",
  copy: "Different parts of the same kitchen can face very different conditions.",
  items: [
    { title: "Under-sink cabinets", copy: "Give these areas greater attention because plumbing connections, drain lines and accidental leakage can expose furniture to moisture." },
    { title: "Base cabinets", copy: "Consider floor moisture, cleaning, spills, plumbing routes and how exposed edges are finished." },
    { title: "Overhead cabinets", copy: "Although normally less exposed to direct water, overhead units may experience heat, steam and changing humidity." },
    { title: "Tall & pantry units", copy: "Choose thickness and support according to cabinet height, shelving span, stored load and hardware." },
    { title: "Utility furniture", copy: "Laundry and utility areas may experience greater moisture than bedrooms and living areas, making the plywood grade an important decision." },
  ],
};

const specifications = [
  ["Product", "BWP Grade Plywood"],
  ["Grade", "BWP - Boiling Water Proof"],
  ["Product category", "General-purpose plywood"],
  ["Suitable use", "Furniture and moisture-conscious interior applications"],
  ["Country of origin", "India"],
  ["Thickness", "4, 6, 9, 12, 15 and 18 mm"],
  ["Sheet sizes", "8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft"],
  ["Common applications", "Kitchens, cabinetry, storage, furniture and interior fabrication"],
  ["Applicable standard", "IS 303:2024"],
];

const thicknesses = [
  { size: "4 mm", strength: 20, use: "Lightweight lining, backing and selected furniture components", duty: "Light-duty" },
  { size: "6 mm", strength: 32, use: "Cabinet backs, drawer bottoms and lightweight panels", duty: "Light-duty" },
  { size: "9 mm", strength: 48, use: "Panelling, partitions and selected furniture components", duty: "Medium-duty" },
  { size: "12 mm", strength: 66, use: "Cabinet structures and general furniture fabrication", duty: "Medium-duty" },
  { size: "15 mm", strength: 84, use: "Furniture bodies, storage units and stronger panels", duty: "Heavy-duty" },
  { size: "18 mm", strength: 100, use: "Kitchen carcasses, wardrobes, shelves, tables and heavier furniture components", duty: "Heavy-duty" },
];

const comparison = [
  ["Dry bedroom furniture", "Well suited", "Can be used", "Not usually required"],
  ["Living-room furniture", "Well suited", "Can be used", "Not usually required"],
  ["Wardrobes", "Dry interiors", "Humid conditions", "For demanding conditions"],
  ["Kitchen cabinets", "Limited to suitably dry locations", "Better starting choice", "For more demanding exposure"],
  ["Utility furniture", "Less suitable where moisture is frequent", "Better suited", "For severe conditions"],
  ["Regular moisture concern", "Not preferred", "More suitable", "For specialised requirements"],
  ["Exterior / marine application", "No", "Not automatically", "Select to project requirements"],
];

const finishes = ["Decorative laminates", "Natural veneers", "Decorative veneers", "Paint or polish", "Edge banding", "Routed components", "Other compatible interior finishes"];

const faqs = [
  { question: "What does BWP mean in plywood?", answer: "BWP stands for Boiling Water Proof. It is a recognised grade of general-purpose plywood under IS 303:2024." },
  { question: "Is BWP Plywood waterproof?", answer: "BWP is a high water-resistance plywood grade, but the complete furniture still depends on edges, joints, finishes and installation conditions." },
  { question: "Is BWP Plywood suitable for kitchens?", answer: "Yes. It is a practical choice for kitchen furniture where humidity, occasional spills and moisture are greater concerns than in normal dry interiors." },
  { question: "Can BWP Plywood be used under a kitchen sink?", answer: "It can be considered, but plumbing integrity, exposed edges, cut-outs, sealing and protection from leakage remain important." },
  { question: "Is BWP better than MR Grade Plywood?", answer: "It offers higher water resistance. MR suits relatively dry interiors, while BWP is selected when the environment places greater moisture demands on the plywood." },
  { question: "Is BWP the same as Marine Plywood?", answer: "No. BWP is covered under IS 303:2024 as general-purpose plywood. Marine Plywood is separately covered under IS 710:2024." },
  { question: "Can BWP Plywood be laminated or veneered?", answer: "Yes. Depending on the surface and fabrication system, it can form the substrate for suitable laminates, veneers and other interior finishes." },
  { question: "Which thickness is suitable for kitchen cabinets?", answer: "12 mm, 15 mm and 18 mm are useful starting options. Final thickness depends on dimensions, load, support and furniture construction." },
  { question: "What sizes and thicknesses are available?", answer: "The listed range includes 4, 6, 9, 12, 15 and 18 mm in 8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft formats." },
];

export const bwpGradeProductData = {
  pageTitle: "BWP Grade Plywood",
  breadcrumbs: [["Home", ROUTES.home], ["Products", ROUTES.products], ["Plywood", ROUTES.plywood], ["BWP Grade Plywood", null]],
  hero: {
    categoryBadge: "WATER-RESISTANT PLYWOOD",
    gradeBadge: "BWP GRADE",
    title: <>Built for interiors where <span className="text-[#E7B572]">moisture is part</span> of everyday life.</>,
    description: "Pentagon BWP Grade Plywood is made for furniture and interior applications that may experience greater humidity, occasional water contact and changing moisture conditions.",
    subDescription: "BWP stands for Boiling Water Proof. It is a practical choice for kitchens, utility furniture and moisture-conscious interiors where MR Grade Plywood may not provide the level of resistance the environment requires.",
    primaryCta: { text: "Request a BWP Grade Quote", href: BWP_SECTIONS.enquiry },
    secondaryCta: { text: "Talk to Our Team", href: CONTACT_SECTIONS.form },
    productImage: plywoodImage,
    productImageAlt: "Pentagon BWP Grade plywood sheets",
    productImageBadge: "BWP GRADE · MOISTURE-CONSCIOUS USE",
    heroBg: kitchenImage,
  },
  quickFacts,
  overview: {
    eyebrow: "Understand BWP Grade Plywood",
    title: "More water resistance for more demanding interior conditions.",
    edgeImage,
    edgeCaption: "Layered plywood construction",
    paragraphs: ["Not every piece of furniture stays in a completely dry environment. Kitchen cabinets may face steam and occasional spills, utility furniture may be installed near plumbing, and humid regions experience changing moisture levels throughout the year.", "BWP Grade Plywood is designed for these more demanding conditions. Its construction and bonding are intended to provide greater resistance to water exposure than MR Grade plywood while maintaining the workability needed for furniture, cabinetry and interior fabrication.", "BWP is a plywood grade, not a promise that complete finished furniture becomes permanently waterproof. Edges, joints, hardware, surface finishes and installation conditions still affect the finished application."],
    callout: { title: "IS 303:2024", copy: "BWP is recognised as a grade of general-purpose plywood alongside MR and BWR under the current Indian plywood standard." },
    cta: { text: "Ask whether BWP fits my project", href: BWP_SECTIONS.enquiry },
  },
  benefits: { eyebrow: "Choose BWP Grade Plywood When", title: "Why it works well in moisture-conscious interiors.", items: benefits },
  applications: { eyebrow: "Suitable Applications", title: "Built around the moisture conditions of the installation.", copy: "The final material choice should consider not only the room name, but actual exposure to water, plumbing, humidity, heat, ventilation and the construction of the finished furniture.", items: applications, cta: { text: "Find the Right Thickness", href: BWP_SECTIONS.thickness } },
  environment,
  limitations: {
    eyebrow: "Where BWP Should Not Be Assumed to Be Enough",
    title: "High water resistance and Marine Grade are not the same thing.",
    copy: "BWP Grade provides a higher level of water resistance for general-purpose plywood, but it should not automatically be treated as Marine Plywood.",
    items: ["Boat or marine construction", "Prolonged severe moisture exposure", "Constantly wet installations", "Exterior exposure to rain and weather", "Specialised marine environments"],
    footnote: "For these conditions, consider Marine Grade Plywood according to the project requirement. Marine Plywood is covered separately under IS 710:2024.",
    cta: { text: "Compare BWP and Marine", href: BWP_SECTIONS.comparison },
  },
  specifications: {
    eyebrow: "Technical Specifications", title: "Available information.", items: specifications,
    alert: { eyebrow: "Certification framework", title: "A recognised general-purpose plywood grade.", paragraph1: "The current BIS product manual classifies general-purpose plywood into MR, BWR and BWP grades.", paragraph2: "The framework also covers thickness, appearance classifications, bending classes and formaldehyde classes.", linkText: "Explore quality information", linkHref: HOME_SECTIONS.quality },
  },
  thicknessGuide: { eyebrow: "Select the Right Thickness", title: "Match the sheet to the furniture component.", items: thicknesses, note: "The grade addresses moisture conditions. Final thickness depends on furniture dimensions, unsupported span, expected load, support spacing, joinery and hardware.", cta: { text: "Get Thickness Guidance", href: BWP_SECTIONS.enquiry } },
  comparison: { eyebrow: "MR or BWP: Which Grade Should You Choose?", title: "Choose according to the environment around the furniture.", copy: "MR and BWP are both recognised within IS 303:2024. The choice should be driven by actual moisture conditions rather than assuming every project needs the highest grade available.", columns: ["Requirement", "MR Grade", "BWP Grade", "Marine Plywood"], rows: comparison, cta: { text: "Help Me Compare Plywood", href: CONTACT_SECTIONS.form } },
  finishes: { eyebrow: "Fabrication & Finishing", title: "Water resistance starts with the board but does not end there.", copy: "Completed furniture should also consider proper edge finishing, sealed cut-outs, suitable adhesives, compatible laminates or veneers, hardware fixing, sink and plumbing openings, floor clearance, wall dampness, ventilation and correct installation.", surfaceImage, surfaceCaption: "Finish and seal around the design", items: finishes, checksTitle: "Before Fabrication, Consider", checks: ["Required sheet thickness", "Edge finishing and cut-out sealing", "Hinges, screws and hardware", "Sink and plumbing openings", "Floor clearance and wall dampness", "Ventilation and installation moisture conditions"], cta: { text: "Discuss fabrication requirements", href: BWP_SECTIONS.enquiry } },
  quality: { eyebrow: "Understanding IS 303:2024", title: "BWP is a recognised general-purpose plywood grade.", paragraphs: ["The current IS 303:2024 - Plywood for General Purposes classifies plywood into MR (Moisture Resistant), BWR (Boiling Water Resistant) and BWP (Boiling Water Proof).", "The standard also addresses plywood construction, dimensions, appearance, moisture content, water resistance, mechanical performance and formaldehyde classification."], badge: { isNumber: "303", year: "2024", label: "General-purpose plywood standard", sub: "MR · BWR · BWP" }, cta: { text: "Explore Quality & Certifications", href: HOME_SECTIONS.quality } },
  whyPentagon: { eyebrow: "Why Choose Pentagon BWP Grade Plywood?", title: "Moisture conditions should be considered before the furniture is built.", items: [{ number: "01", title: "Manufactured in Yamunanagar", copy: "Pentagon manufactures plywood at its manufacturing operations in Yamunanagar, Haryana." }, { number: "02", title: "Multiple sizes and thicknesses", copy: "Select the sheet size and thickness around the furniture component, fabrication requirement and expected use." }, { number: "03", title: "Application-led selection", copy: "Start with where the plywood will be installed kitchen, utility area, wardrobe, office or commercial furniture." }, { number: "04", title: "Support beyond one grade", copy: "Where BWP is more than the application requires, MR may be considered; for more demanding conditions, explore Marine Plywood." }, { number: "05", title: "Built around real requirements", copy: "Choose plywood around how and where the finished furniture will be used." }] },
  bulkSection: { eyebrow: "For Furniture Makers, Dealers & Projects", title: <>Planning a kitchen, furniture project or <em className="text-[#F4D8B4]">bulk requirement?</em></>, copy: "Whether you are sourcing BWP Grade Plywood for furniture production, kitchens, residential interiors, commercial work or resale, share the complete requirement with the Pentagon team.", primaryCta: { text: "Request a Bulk Quote", href: BWP_SECTIONS.enquiry }, secondaryCta: { text: "Become a Dealer", href: ROUTES.dealers }, useCases: ["Kitchen furniture", "Furniture manufacturing", "Utility-area furniture", "Wardrobes in humid environments", "Commercial interiors", "Dealer & distributor supply", "Bulk procurement", "Project requirements"] },
  faqs: { eyebrow: "Frequently Asked Questions", title: "Clear answers before you choose the sheet.", items: faqs },
  enquiry: { eyebrow: "Need Plywood for a Moisture-Prone Interior?", title: "Tell us what the plywood will face.", copy: "From kitchen cabinets and utility furniture to wardrobes and commercial interiors, share your application, required thickness, sheet size, quantity and delivery location with the Pentagon team.", phoneLink: "tel:+917015085556", phoneText: "Call +91 70150 85556", whatsappLink: "https://wa.me/917015085556?text=Hello%20Pentagon%20Plywood%2C%20I%20would%20like%20to%20discuss%20BWP%20Grade%20Plywood.", whatsappText: "WhatsApp our team", thicknesses: ["4 mm", "6 mm", "9 mm", "12 mm", "15 mm", "18 mm"], sheetSizes: ["8×4 ft", "8×3 ft", "7×4 ft", "7×3 ft", "6×4 ft", "6×3 ft"] },
};
