/* Flush Doors Overview Data Module */

import HeroBgImage from "@/assets/product/flush-doors-hero-bg.jpg";
import ShowcaseImage from "@/assets/product/flush-doors-showcase.jpg";
import FlushDoorFlush from "@/assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp";

export const FLUSH_DOORS_OVERVIEW_DATA = {
  hero: {
    eyebrow: "Pentagon Flush Door Range",
    titleLine1: "A Door Should Do More",
    titleLine2: "Than Close an Opening.",
    copy: "A flush door becomes part of the room every day opening, closing, carrying hardware, receiving finishes and responding to the conditions around it. Pentagon manufactures MR Grade and BWP Grade Flush Doors for residential, commercial and project requirements.",
    recommendation: "Choose the door according to where it will be installed, the moisture conditions it may face, the required size, hardware and final surface finish.",
    primaryCtaText: "Explore Flush Door Range",
    primaryCtaLink: "#range",
    secondaryCtaText: "Discuss Door Requirement",
    secondaryCtaLink: "#enquiry",
    bgImage: HeroBgImage,
    showcaseImage: ShowcaseImage,
  },

  quickInfo: [
    { label: "Grades", val: "MR & BWP Grade" },
    { label: "Construction", val: "Solid-Core Wooden Shutter" },
    { label: "Face Panel", val: "Plywood-Faced Construction" },
    { label: "Applications", val: "Residential & Commercial" },
    { label: "Manufactured In", val: "Yamunanagar, Haryana" },
    { label: "Applicable Standard", val: "IS 2202 (Part 1):2023" },
  ],

  whatIs: {
    eyebrow: "WHAT IS A FLUSH DOOR?",
    title: "A Clean Surface Built Around a Solid Internal Structure.",
    lead: "A flush door is a manufactured door shutter with flat, even faces on both sides and an internal structure designed to create a complete door panel. Unlike traditional panelled doors, a flush door presents a simple continuous surface.",
    keyNote: "In a solid-core wooden flush door, the shutter brings together an internal solid core, stiles, rails, crossbands, and plywood face panels bonded under high pressure.",
    anatomy: [
      { title: "Face Panels", desc: "Visible outer plywood surfaces providing a smooth base for laminates, veneers, paint, or polish." },
      { title: "Crossbands", desc: "Supporting inner layers that connect outer face panels to the internal door construction." },
      { title: "Solid Core", desc: "Central solid wooden timber core forming the structural body of the shutter." },
      { title: "Stiles & Rails", desc: "Solid vertical stiles and horizontal rails surrounding the core for hardware fixing and stability." },
      { title: "Adhesive Bonding", desc: "Phenolic or Synthetic resins applied under high-pressure pressing for lasting structural strength." },
      { title: "Outer Finishing Base", desc: "Sanded, calibrated surface ready for decorative laminates, veneers, or paint coatings." },
    ],
  },

  whyConsider: {
    eyebrow: "WHY CONSIDER A FLUSH DOOR?",
    title: "Simple on the Surface. Purpose-Built Underneath.",
    points: [
      {
        title: "Clean, Contemporary Appearance",
        desc: "Its flat continuous surface integrates seamlessly with modern residential, office, and commercial interior design.",
      },
      {
        title: "Complete Door-Shutter Construction",
        desc: "Instead of assembling frame and panel components on-site, the shutter is manufactured as a complete integrated panel.",
      },
      {
        title: "Suitable for Multiple Finishes",
        desc: "Forms a reliable substrate for decorative laminates, natural veneers, lacquer, paint, or clear polish.",
      },
      {
        title: "Ready for Door Hardware",
        desc: "Internal solid core and stiles accommodate mortise locks, handles, hinges, and door accessories securely.",
      },
      {
        title: "Grades for Different Conditions",
        desc: "Choose between MR Grade for dry interiors and BWP Grade for high-humidity or moisture-conscious doorways.",
      },
    ],
  },

  range: [
    {
      id: "mr-grade-door",
      tag: "Interior Grade Flush Door",
      code: "MR Grade Flush Door",
      title: "Made for Everyday Interior Doorways.",
      desc: "MR stands for Moisture Resistant. MR Grade Flush Doors are intended primarily for interior locations where the door experiences normal indoor humidity without frequent water exposure.",
      apps: [
        "Bedroom doors",
        "Living-area doors",
        "Study-room doors",
        "Office cabins",
        "Internal room doors",
        "Residential interiors",
        "Commercial office doors",
      ],
      bestWhen: "The door is installed in a relatively dry interior environment.",
      ctaText: "Explore MR Grade Flush Doors",
      link: "/products/flush-doors/mr-grade-flush-door",
      image: FlushDoorFlush,
      flagship: false,
    },
    {
      id: "bwp-grade-door",
      tag: "Higher Water-Resistance Flush Door",
      code: "BWP Grade Flush Door",
      title: "Made for Doorways Where Moisture Needs More Attention.",
      desc: "BWP stands for Boiling Water Proof. BWP Grade Flush Doors are selected where the door may experience greater humidity or moisture than an ordinary dry interior.",
      apps: [
        "Utility-area doors",
        "Kitchen-adjacent doorways",
        "Doors in humid interiors",
        "Selected bathroom-adjacent locations",
        "Commercial interior doors",
        "Interior doors in higher-humidity regions",
      ],
      bestWhen: "Humidity and moisture exposure are greater considerations around the installed door.",
      ctaText: "Explore BWP Grade Flush Doors",
      link: "/products/flush-doors/bwp-grade-flush-door",
      image: ShowcaseImage,
      flagship: true,
    },
  ],

  comparison: {
    eyebrow: "MR OR BWP FLUSH DOOR?",
    title: "Choose the Grade Around Where the Door Will Live.",
    table: [
      { req: "Normal dry interiors", mr: "Well suited", bwp: "Can be used" },
      { req: "Bedrooms & living spaces", mr: "Well suited", bwp: "Can be used" },
      { req: "Office cabins & internal rooms", mr: "Well suited", bwp: "Suitable" },
      { req: "Higher indoor humidity", mr: "Limited", bwp: "Better suited" },
      { req: "Kitchen-adjacent locations", mr: "Assess moisture exposure", bwp: "Better starting option" },
      { req: "Utility areas", mr: "Limited where moisture is frequent", bwp: "Better suited" },
      { req: "Greater water-resistance requirement", mr: "No", bwp: "Yes" },
      { req: "Permanent outdoor rain exposure", mr: "Not automatically suitable", bwp: "Not automatically suitable" },
    ],
    simpleRule: "Relatively dry interior doorway → MR Grade  |  Greater humidity or moisture concern → BWP Grade",
  },

  applications: [
    { title: "Bedrooms & Living Spaces", desc: "MR Grade Flush Doors provide a practical starting option for normal indoor residential doorways." },
    { title: "Offices & Cabins", desc: "Flush Doors can be considered for cabins, internal rooms, meeting spaces and office door requirements." },
    { title: "Wardrobe & Dressing Areas", desc: "A simple flat-door aesthetic coordinates cleanly with contemporary wardrobe shutters and fit-outs." },
    { title: "Commercial Interiors", desc: "Retail, office and commercial projects can specify Flush Doors according to required grade, size, and finish." },
    { title: "Kitchens & Utility Areas", desc: "Where the doorway experiences higher humidity or steam, BWP Grade should be considered." },
    { title: "Projects & Developments", desc: "Flush Doors can be supplied for repeat residential, commercial or institutional developments." },
  ],

  selectionChecklist: [
    "Door Height & Width",
    "Required Shutter Thickness",
    "Single or Double Door Format",
    "Frame Compatibility & Opening Direction",
    "Hinge & Hardware Locations",
    "Lock Body Specification",
    "Surface Finish (Laminate/Veneer/Paint)",
    "Installation Humidity & Site Conditions",
  ],

  hardwareInfo: [
    { item: "Hinges", desc: "Select number, size and weight rating according to shutter height, thickness, and total door weight." },
    { item: "Mortise Locks", desc: "Confirm lock body dimensions and backset before mortising into the solid core." },
    { item: "Handles & Levers", desc: "Place handles comfortably in line with lock height and opening direction." },
    { item: "Door Frames", desc: "Ensure door frame rebate depth matches the shutter thickness (e.g. 30mm, 35mm, 40mm)." },
  ],

  finishingOptions: [
    { type: "Decorative Laminates", desc: "For controlled colors, woodgrain textures, scratch-resistance and low maintenance." },
    { type: "Natural Wood Veneers", desc: "For authentic wood grain beauty, natural depth, and luxury architectural polish." },
    { type: "Paint & Lacquer", desc: "For seamless color coordination with interior wall palettes and contemporary trims." },
    { type: "Polish / Clear Coating", desc: "For highlighting natural veneer grain on premium veneered flush door shutters." },
  ],

  comparisons: {
    panelledVsFlush: {
      title: "Flush Door vs Traditional Panelled Door",
      desc: "Flush doors present a continuous flat surface ideal for modern interiors, whereas panelled doors feature visible rails, stiles, and recessed panels suitable for traditional aesthetics.",
    },
    standardVsLaminated: {
      title: "Standard Flush Door vs Laminated Flush Door",
      desc: "Standard Flush Doors allow custom site finishing (paint/veneer/laminate later), whereas Laminated Flush Doors arrive pre-bonded with decorative laminates for immediate installation.",
      laminatedLink: "/products/traded/laminated-flush-doors",
    },
  },

  manufacturingSteps: [
    { n: "01", t: "Material Selection", p: "Timber, plywood faces, and core materials selected to IS specification." },
    { n: "02", t: "Material Preparation", p: "Core blocks, stiles, rails, and face veneers seasoned and sized." },
    { n: "03", t: "Core & Frame Assembly", p: "Internal wooden core arranged within solid timber stiles and rails." },
    { n: "04", t: "Face Preparation", p: "Plywood face veneers and crossbands prepared for bonding." },
    { n: "05", t: "Adhesive Application", p: "Phenolic or synthetic resin adhesive evenly spread across layers." },
    { n: "06", t: "Controlled Pressing", p: "Assembled shutter pressed under high temperature and hydraulic pressure." },
    { n: "07", t: "Sizing & Sanding", p: "Door trimmed to precise height and width, and surface calibrated." },
    { n: "08", t: "Quality Inspection", p: "Checked for flatness, squareness, bonding adhesion, and finish." },
    { n: "09", t: "Packing & Dispatch", p: "Approved doors packed for transport to dealers and project sites." },
  ],

  standard: {
    code: "IS 2202 (Part 1):2023",
    title: "Wooden Solid-Core Flush Door Shutters (Plywood Face Panels)",
    desc: "The applicable Indian Standard covers both MR Grade and BWP Grade wooden solid-core flush doors, specifying performance tests for dimensions, squareness, flatness, impact resistance, humidity behavior, and screw withdrawal strength.",
  },

  faqs: [
    { q: "What is a Flush Door?", a: "A Flush Door is a manufactured door shutter with flat surfaces on both sides and a solid internal structure forming the complete door panel." },
    { q: "Does Pentagon manufacture Flush Doors in-house?", a: "Yes. Flush Doors are manufactured at Pentagon's wood-product operations in Yamunanagar, Haryana." },
    { q: "What Flush Door grades does Pentagon offer?", a: "Pentagon manufactures MR Grade (Moisture Resistant) and BWP Grade (Boiling Water Proof) Flush Doors." },
    { q: "What does MR mean in a Flush Door?", a: "MR means Moisture Resistant, intended for dry interior locations like bedrooms, living spaces, and offices." },
    { q: "What does BWP mean in a Flush Door?", a: "BWP means Boiling Water Proof, offering higher water resistance for humid interiors, kitchen-adjacent, or utility locations." },
    { q: "Which grade should I choose for a bedroom door?", a: "MR Grade is a practical starting option for standard indoor bedroom doorways." },
    { q: "Which grade should I consider for a humid area?", a: "BWP Grade is recommended for areas with higher humidity or occasional moisture exposure." },
    { q: "Is a BWP Flush Door suitable for permanent rain exposure?", a: "No. Direct outdoor weather exposure requires complete weather shielding, specialized paint coatings, and frame protection beyond BWP grade alone." },
    { q: "Can Flush Doors be laminated?", a: "Yes. Standard flush doors can be laminated on-site, or you can choose Pentagon Laminated Flush Doors for pre-laminated factory delivery." },
    { q: "Can Flush Doors be veneered or painted?", a: "Yes. Flush doors provide an excellent smooth substrate for natural wood veneers, paint, or lacquer." },
    { q: "What standard applies to wooden Flush Doors?", a: "The applicable Indian Standard is IS 2202 (Part 1):2023 for solid-core plywood-faced flush door shutters." },
    { q: "What information is needed to order Flush Doors?", a: "Provide required grade (MR/BWP), door height, width, thickness, quantity, surface finish, and delivery city." },
  ],
};
