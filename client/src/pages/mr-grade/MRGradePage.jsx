import { useEffect, useState } from "react";
import {
  CONTACT_SECTIONS,
  HOME_SECTIONS,
  MR_GRADE_SECTIONS,
  ROUTES,
} from "../../app/routes.js";
import "./mr-grade-page.css";

import plywoodImage from "../../assets/product/mr plywood/mr-grade-plywood-1671449588-6629452.webp";
import bedroomImage from "../../assets/product/mr plywood/Cozy minimalist bedroom with natural light.png";
import heroRoomBg from "../../assets/product/mr plywood/mr-hero-bg-room.png";
import edgeImage from "../../assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import surfaceImage from "../../assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg";
import wardrobeImage from "../../assets/product/Applications/Modern wardrobe with sliding doors.png";
import officeImage from "../../assets/product/Applications/Modern office with desks and partitions.png";
import livingImage from "../../assets/product/Applications/Contemporary living room with furniture.png";

const PHONE_LINK = "tel:+917206104340";
const WHATSAPP_LINK = `https://wa.me/917206104340?text=${encodeURIComponent(
  "Hello Pentagon Plywood, I would like to discuss MR Grade Plywood for an interior furniture requirement.",
)}`;

const Icon = {
  Arrow: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Check: () => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="m6.5 10 2.2 2.2 4.8-5" />
    </svg>
  ),
  Drop: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M16 3S7 13 7 20a9 9 0 0 0 18 0c0-7-9-17-9-17Z" />
      <path d="M12 21c.5 2.2 2 3.3 4.3 3.5" />
    </svg>
  ),
  Layers: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m16 4 13 7-13 7-13-7 13-7Z" />
      <path d="m4 17 12 7 12-7M6 23l10 6 10-6" />
    </svg>
  ),
  Ruler: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m5 22 17-17 5 5-17 17H5v-5Z" />
      <path d="m18 9 5 5M14 13l2 2M10 17l2 2" />
    </svg>
  ),
  Factory: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 27V14l8 5v-7l8 5V7h5v20M3 27h26M9 23h3M17 23h3M24 23h3" />
    </svg>
  ),
  Shield: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M16 3 27 7v8c0 7.2-4.4 11.6-11 14-6.6-2.4-11-6.8-11-14V7l11-4Z" />
      <path d="m11 16 3 3 7-7" />
    </svg>
  ),
  Plus: () => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M10 4v12M4 10h12" />
    </svg>
  ),
  Minus: () => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 10h12" />
    </svg>
  ),
};

const quickFacts = [
  ["INTERIOR USE", "Furniture & cabinetry", Icon.Shield],
  ["GRADE", "Moisture resistant", Icon.Drop],
  ["THICKNESS", "4 mm to 18 mm", Icon.Ruler],
  ["MADE IN", "India", Icon.Factory],
];

const benefits = [
  [
    "01",
    "Made for interior applications",
    "A practical material for furniture and installations used inside homes, offices, shops and other relatively dry spaces.",
  ],
  [
    "02",
    "Normal moisture resistance",
    "Designed for ordinary indoor humidity and occasional atmospheric moisture not continuous water exposure.",
  ],
  [
    "03",
    "Multiple thickness options",
    "Choose thinner sheets for back panels and decorative work or thicker sheets for furniture bodies and storage units.",
  ],
  [
    "04",
    "Ready for interior finishes",
    "Its plain surface can be prepared for laminate, veneer, paint or other compatible decorative finishes.",
  ],
  [
    "05",
    "Home and office furniture",
    "Applicable to wardrobes, beds, desks, cabinets, bookshelves, partitions and general furniture fabrication.",
  ],
  [
    "06",
    "Multiple sheet formats",
    "Several standard market sizes support different furniture layouts, cutting plans and production requirements.",
  ],
];

const applications = [
  [
    "Wardrobes & Cabinets",
    "Structures, shutters, cabinet bodies and internal storage components in dry bedrooms and dressing areas.",
    wardrobeImage,
    "Wardrobe made with interior plywood",
  ],
  [
    "Beds & Side Tables",
    "Bed components, headboards, bedside tables and other bedroom furniture.",
    bedroomImage,
    "Bedroom furniture in a dry interior",
  ],
  [
    "Office Furniture",
    "Desks, workstations, cabinets, storage units and selected commercial furniture.",
    officeImage,
    "Modern office furniture and workstations",
  ],
  [
    "General Home Furniture",
    "Tables, study units, television units and other everyday interior furniture.",
    livingImage,
    "Interior home furniture",
  ],
  [
    "Bookshelves & Storage",
    "Shelves, bookcases and storage furniture with thickness and support selected for the expected load.",
    null,
    null,
  ],
  [
    "Wall Panelling",
    "Decorative wall panels and interior surface installations positioned away from direct moisture.",
    null,
    null,
  ],
  [
    "Indoor Partitions",
    "Non-exposed interior dividers, panels and partition systems for relatively dry spaces.",
    null,
    null,
  ],
];

const limitations = [
  "Continuous water exposure",
  "Bathroom furniture exposed to regular splashing",
  "Cabinetry beside leaking or unsealed plumbing",
  "Outdoor furniture or exterior walls",
  "Furniture exposed to rain",
  "Persistently damp rooms",
  "Marine or boating applications",
  "Applications requiring verified boiling-water resistance",
];

const specifications = [
  ["Product", "MR Grade Plywood"],
  ["Product category", "General-purpose interior plywood"],
  ["Grade", "MR - Moisture Resistant"],
  ["Market terminology", "Commonly called Commercial Plywood"],
  ["Country of origin", "India"],
  ["Intended application", "Furniture and interior use"],
  ["Pattern / listed finish", "Plain / polished"],
  ["Thicknesses", "4, 6, 9, 12, 15 and 18 mm"],
  ["Sheet sizes", "8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft"],
  ["Minimum order quantity", "50 pieces: confirm by size and thickness"],
  ["Business supply", "Manufacturer, exporter, supplier and retailer"],
  ["Applicable standard", "IS 303:2024, subject to licence-scope verification"],
];

const thicknesses = [
  [
    "4 mm",
    20,
    "Decorative lining, lightweight back panels and selected furniture components",
    "Light-duty",
  ],
  [
    "6 mm",
    32,
    "Cabinet backs, drawer bottoms and lightweight panels",
    "Light-duty",
  ],
  [
    "9 mm",
    48,
    "Wall panelling, partitions and selected furniture components",
    "Medium-duty",
  ],
  [
    "12 mm",
    66,
    "Cabinet structures and medium-duty furniture components",
    "Medium-duty",
  ],
  [
    "15 mm",
    84,
    "Storage units, furniture bodies and stronger panels",
    "Heavy-duty",
  ],
  [
    "18 mm",
    100,
    "Wardrobes, beds, tables, shelves and heavier furniture components",
    "Heavy-duty",
  ],
];

const comparisons = [
  [
    "Main positioning",
    "Everyday interior furniture",
    "Higher water-resistant applications",
    "More demanding moisture conditions",
  ],
  [
    "Typical environment",
    "Relatively dry interiors",
    "Humid, moisture-conscious interiors",
    "Repeated or demanding moisture exposure",
  ],
  [
    "Common applications",
    "Wardrobes, beds, desks and shelves",
    "Kitchens, utility furniture and humid interiors",
    "Demanding kitchens and specialised projects",
  ],
  [
    "Water resistance",
    "Normal indoor moisture resistance",
    "Higher than MR; verify product specification",
    "Marine-grade performance; verify certification",
  ],
  [
    "Exterior use",
    "Not recommended",
    "Only if specifically approved",
    "Do not assume suitability solely from the name",
  ],
  ["Applicable standard", "IS 303:2024", "IS 303:2024", "IS 710:2024"],
];

const finishes = [
  "Decorative laminate",
  "Natural veneer",
  "Decorative veneer",
  "Paint or polish",
  "Wallpaper or fabric",
  "Edge banding",
  "Routed components",
];
const fabricationChecks = [
  "Required sheet thickness",
  "Furniture dimensions and expected load",
  "Support spacing and joinery",
  "Screw and hardware selection",
  "Edge-finishing method",
  "Decorative surface compatibility",
  "Installation moisture conditions",
];

const whyPentagon = [
  [
    "01",
    "Manufactured in Yamunanagar",
    "Made in one of India’s established wood-product manufacturing regions.",
  ],
  [
    "02",
    "Multiple sizes and thicknesses",
    "Discuss the sheet format and thickness that best fits the furniture component.",
  ],
  [
    "03",
    "Application-led selection",
    "Start with whether you are making wardrobes, beds, cabinets, office furniture or panels.",
  ],
  [
    "04",
    "Small and bulk requirements",
    "Requirements around 50, 100 or 200 sheets can be discussed alongside dealer and larger orders.",
  ],
  [
    "05",
    "Broader material support",
    "Where MR Grade is not the right fit, explore another plywood grade or related interior material.",
  ],
];

const faqs = [
  [
    "What does MR mean in plywood?",
    "MR means Moisture Resistant. It identifies plywood intended primarily for general-purpose furniture and interior applications.",
  ],
  [
    "Is MR Grade Plywood waterproof?",
    "No. It can resist normal indoor moisture and humidity, but is not designed for prolonged water exposure or continuously damp conditions.",
  ],
  [
    "Is MR Grade the same as Commercial Plywood?",
    "MR Grade is commonly called Commercial Plywood in the Indian market. Commercial plywood is a market term rather than a separate BIS grade; confirm the exact product specification before comparing listings.",
  ],
  [
    "Is it suitable for wardrobes?",
    "Yes, it can be considered for wardrobes and cabinets in relatively dry indoor areas. Select thickness according to dimensions, load and construction.",
  ],
  [
    "Can it be used for kitchen cabinets?",
    "It may suit dry kitchen areas with low exposure. Consider BWR, BWP or Marine Plywood where humidity, spills or plumbing-related moisture are more likely.",
  ],
  [
    "Can it be used in bathrooms?",
    "MR Grade is not recommended for furniture regularly exposed to bathroom humidity, splashing or direct water.",
  ],
  [
    "Can MR Plywood be laminated?",
    "Yes. Depending on surface condition, it can generally be finished with compatible laminates, veneers, paint or other decorative materials.",
  ],
  [
    "Which thickness is suitable for furniture?",
    "Furniture commonly uses 12, 15 or 18 mm plywood, but the correct thickness depends on component, span, load, supports and joinery.",
  ],
  [
    "What sizes and thicknesses are listed?",
    "The current listed range includes 4, 6, 9, 12, 15 and 18 mm in 8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft. Confirm stock before ordering.",
  ],
  [
    "What is the minimum order quantity?",
    "The existing listing states 50 pieces. Confirm whether that quantity applies to the required thickness and sheet size.",
  ],
  [
    "Does this product conform to IS 303?",
    "MR is a recognised grade under IS 303:2024. A current BIS licence and approved scope should be reviewed before treating this specific product as certified.",
  ],
];

function Heading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`mr-heading${light ? " is-light" : ""}`}>
      <div className="mr-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function MRGradePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "crafted-heritage");
    document.title =
      "MR Grade Plywood Manufacturer in Yamunanagar | Pentagon Plywood";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Explore Pentagon MR Grade Plywood for wardrobes, beds, cabinets, office furniture and interior applications. Available in multiple sizes and thicknesses.";
  }, []);

  return (
    <div className="mr-page">
      <section className="mr-hero">
        {/* Background Interior Room */}
        <div className="mr-hero-bg-container">
          <img
            src={heroRoomBg}
            alt="Interior bedroom background with wooden wardrobe and natural lighting"
            className="mr-hero-bg-img"
          />
          {/* Dark curved arch overlay */}
          <div className="mr-hero-arch-overlay" />
          {/* Decorative Dot Matrix Pattern */}
          <div className="mr-hero-dot-pattern" />
        </div>

        <div className="container mr-hero-content-wrapper">
          <nav className="mr-hero-breadcrumb" aria-label="Breadcrumb">
            <a href={ROUTES.home}>Home</a>
            <span className="sep">›</span>
            <span>Products</span>
            <span className="sep">›</span>
            <a href={ROUTES.plywood}>Plywood</a>
            <span className="sep">›</span>
            <strong>MR Grade Plywood</strong>
          </nav>

          <div className="mr-hero-grid">
            <div className="mr-hero-copy">
              <div className="mr-kicker">
                <span>INTERIOR GRADE PLYWOOD</span>
                <span className="mr-pill-tag">MR GRADE</span>
              </div>
              <h1>
                A reliable foundation <span className="mr-hero-accent">for everyday interior</span> furniture.
              </h1>
              <p className="mr-hero-lead">
                Pentagon MR Grade Plywood is crafted for furniture, cabinetry
                and interior installations in relatively dry indoor spaces.
              </p>
              <p className="mr-hero-sub">
                It resists the normal moisture and humidity encountered inside
                homes, offices and commercial interiors—making it a practical
                choice for everyday furniture requirements.
              </p>
              <div className="mr-actions">
                <a className="btn btn-primary" href={MR_GRADE_SECTIONS.enquiry}>
                  Request a Quote <Icon.Arrow />
                </a>
                <a className="btn btn-outline" href={CONTACT_SECTIONS.form}>
                  Discuss Your Application <Icon.Arrow />
                </a>
              </div>
            </div>

            {/* Central Floating Product Card over Arch */}
            <div className="mr-hero-product-card-wrapper">
              <div className="mr-hero-product-card">
                <img
                  src={plywoodImage}
                  alt="Pentagon MR Grade plywood sheet showing stacked wood layers"
                />
                <div className="mr-hero-product-badge">
                  <span>MR GRADE · INTERIOR USE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Floating Quick Facts Bar */}
          <div className="mr-quickfacts-bar">
            {quickFacts.map(([label, value, FactIcon]) => (
              <div className="mr-quickfact-item" key={label}>
                <div className="mr-quickfact-icon-wrapper">
                  <FactIcon />
                </div>
                <div className="mr-quickfact-text">
                  <span className="mr-quickfact-label">{label}</span>
                  <strong className="mr-quickfact-val">{value}</strong>
                </div>
              </div>
            ))}
            <div className="mr-quickfact-item">
              <div className="mr-quickfact-icon-wrapper">
                <Icon.Layers />
              </div>
              <div className="mr-quickfact-text">
                <span className="mr-quickfact-label">SUPPLY</span>
                <strong className="mr-quickfact-val">MOQ 50 pieces</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="mr-section">
        <div className="container mr-definition">
          <div className="mr-definition-media">
            <img src={edgeImage} alt="Layered edge construction of plywood" />
            <span>Balanced veneer construction</span>
          </div>
          <div>
            <Heading
              eyebrow="Understand the Grade"
              title="Made for the moisture conditions found in everyday interiors."
            />
            <p>
              <strong>MR stands for Moisture Resistant.</strong> MR Grade
              Plywood is a general-purpose plywood intended primarily for
              furniture and interior applications.
            </p>
            <p>
              Multiple wood-veneer layers are bonded to create a balanced panel
              suitable for fabrication into furniture, cabinets, partitions and
              interior components.
            </p>
            <p>
              It tolerates normal indoor humidity and occasional atmospheric
              moisture better than untreated wood, but is not intended for
              prolonged water exposure, continuous dampness or exterior use.
            </p>
            <div className="mr-market-note">
              <span>Market terminology</span>
              <p>
                MR Grade is frequently called “Commercial Plywood” in India.
                Always compare the actual grade, construction and specification
                not only the market name.
              </p>
            </div>
            <a className="mr-text-link" href={MR_GRADE_SECTIONS.enquiry}>
              Ask whether MR Grade fits my project <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="mr-section mr-benefits-section">
        <div className="container">
          <Heading
            eyebrow="Designed for Everyday Interiors"
            title="The performance you need without specifying more than the application requires."
          />
          <div className="mr-benefits">
            {benefits.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="mr-section">
        <div className="container">
          <Heading
            eyebrow="From Board to Furniture"
            title="Designed for the things you use every day."
            copy="Choose MR Grade around a relatively dry interior environment, then select the construction and thickness around what the furniture must do."
          />
          <div className="mr-applications">
            {applications.map(([title, copy, image, alt], index) => (
              <article className={image ? "has-image" : "is-text"} key={title}>
                {image && <img src={image} alt={alt} loading="lazy" />}
                <div>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <a
            className="btn btn-outline mr-center-action"
            href={MR_GRADE_SECTIONS.thickness}
          >
            Find the Right Thickness <Icon.Arrow />
          </a>
        </div>
      </section>

      <section id="limitations" className="mr-section mr-limitations">
        <div className="container mr-limitations-grid">
          <Heading
            light
            eyebrow="Choose With Clarity"
            title="Moisture resistant is not the same as waterproof."
            copy="MR Grade Plywood should not be the default choice where water, rain or persistent dampness form part of the installation conditions."
          />
          <div>
            <ul>
              {limitations.map((item) => (
                <li key={item}>
                  <span>×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              For kitchens, utility spaces and more demanding moisture
              conditions, consider Pentagon’s BWR/BWP or Marine Plywood
              according to verified product specifications.
            </p>
            <a className="btn btn-light" href={MR_GRADE_SECTIONS.comparison}>
              Compare Moisture-Resistant Options <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="specifications" className="mr-section">
        <div className="container">
          <Heading
            eyebrow="Product Information"
            title="Available for different interior furniture requirements."
          />
          <div className="mr-spec-layout">
            <div className="mr-spec-table">
              {specifications.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <aside className="mr-verification-card">
              <Icon.Shield />
              <span>Responsible specification</span>
              <h3>Verify certification before making the claim.</h3>
              <p>
                Use “MR Grade Plywood for general-purpose furniture and interior
                applications” until Pentagon’s current BIS licence and approved
                product scope are reviewed.
              </p>
              <p>
                Do not display an ISI mark, licence number or “IS 303 certified”
                statement before verification.
              </p>
              <a href={HOME_SECTIONS.quality}>
                View quality information <Icon.Arrow />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="thickness-guide" className="mr-section mr-thickness-section">
        <div className="container">
          <Heading
            eyebrow="Select by Construction"
            title="The right thickness depends on what the sheet must do."
          />
          <div className="mr-thickness-head">
            <span>Thickness</span>
            <span>Relative application range</span>
            <span>Common starting applications</span>
            <span>Duty level</span>
          </div>
          <div className="mr-thickness-list">
            {thicknesses.map(([size, strength, use, duty]) => (
              <div className="mr-thickness-row" key={size}>
                <strong>{size}</strong>
                <span
                  className="mr-strength"
                  style={{ "--strength": `${strength}%` }}
                >
                  <i />
                </span>
                <p>{use}</p>
                <small>{duty}</small>
              </div>
            ))}
          </div>
          <div className="mr-info-strip">
            <span>i</span>
            <p>
              These are general application examples, not structural
              recommendations. Final thickness depends on span, load, support
              spacing, joinery, hardware and furniture design.
            </p>
            <a className="btn btn-outline" href={MR_GRADE_SECTIONS.enquiry}>
              Get Thickness Guidance <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="grade-comparison" className="mr-section">
        <div className="container">
          <Heading
            eyebrow="Compare Before You Choose"
            title="Choose the grade around the installation environment."
            copy="MR Grade is not an inferior choice when it is used correctly. In a dry interior, specifying marine-grade plywood may add performance and cost the application does not require."
          />
          <div className="mr-compare">
            <div className="mr-compare-row mr-compare-head">
              <span>Comparison</span>
              <strong>MR Grade</strong>
              <strong>BWR / BWP</strong>
              <strong>Marine Plywood</strong>
            </div>
            {comparisons.map((row) => (
              <div className="mr-compare-row" key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <span key={`${index}-${cell}`}>{cell}</span>
                  ) : (
                    <p key={`${index}-${cell}`}>{cell}</p>
                  ),
                )}
              </div>
            ))}
          </div>
          <a
            className="btn btn-primary mr-center-action"
            href={CONTACT_SECTIONS.form}
          >
            Help Me Compare Plywood <Icon.Arrow />
          </a>
        </div>
      </section>

      <section className="mr-section mr-finishing">
        <div className="container mr-finishing-grid">
          <div className="mr-finishing-media">
            <img
              src={surfaceImage}
              alt="Plain plywood surface ready for an interior finish"
            />
            <span>Plain surface · finish as required</span>
          </div>
          <div>
            <Heading
              eyebrow="Fabrication and Finishing"
              title="Select the core first. Then create the surface you want."
            />
            <p>
              Depending on face quality and the finishing system, MR Grade
              Plywood can be prepared for:
            </p>
            <div className="mr-chip-list">
              {finishes.map((finish) => (
                <span key={finish}>{finish}</span>
              ))}
            </div>
            <h3>Before fabrication, confirm:</h3>
            <ul className="mr-check-list">
              {fabricationChecks.map((item) => (
                <li key={item}>
                  <Icon.Check />
                  {item}
                </li>
              ))}
            </ul>
            <a className="mr-text-link" href={MR_GRADE_SECTIONS.enquiry}>
              Discuss fabrication requirements <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="quality" className="mr-section mr-standard">
        <div className="container mr-standard-grid">
          <div>
            <Heading
              light
              eyebrow="Know the Standard"
              title="MR is a recognised grade of general-purpose plywood."
            />
            <p>
              The Bureau of Indian Standards classifies general-purpose plywood
              under <strong>IS 303:2024</strong>. The classification covers MR,
              BWR and BWP grades along with requirements for dimensions,
              workmanship, water-resistance testing, moisture content, strength
              and formaldehyde content.
            </p>
            <p>
              These are requirements of the standard. They should not
              automatically be presented as verified Pentagon product features
              until the relevant licence and test documents are reviewed.
            </p>
            <a className="btn btn-light" href={HOME_SECTIONS.quality}>
              View Quality & Certifications <Icon.Arrow />
            </a>
          </div>
          <div className="mr-standard-mark">
            <span>IS</span>
            <strong>303</strong>
            <small>2024</small>
            <p>General-purpose plywood standard</p>
            <em>Scope verification required</em>
          </div>
        </div>
      </section>

      <section className="mr-section">
        <div className="container">
          <Heading
            eyebrow="Made Around Real Requirements"
            title="Because everyday furniture still deserves the right foundation."
          />
          <div className="mr-why">
            {whyPentagon.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Icon.Arrow />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mr-trade">
        <div className="container mr-trade-grid">
          <div>
            <div className="mr-eyebrow">For Trade and Project Requirements</div>
            <h2>
              Planning more than one piece of furniture?{" "}
              <em>Let’s discuss the complete requirement.</em>
            </h2>
            <p>
              For resale, furniture production or an interior project, share the
              thickness, sheet size, quantity, application and delivery
              location.
            </p>
            <div className="mr-actions">
              <a className="btn btn-primary" href={MR_GRADE_SECTIONS.enquiry}>
                Request a Bulk Quote <Icon.Arrow />
              </a>
              <a className="btn btn-outline" href={ROUTES.dealers}>
                Become a Dealer <Icon.Arrow />
              </a>
            </div>
          </div>
          <div className="mr-trade-types">
            {[
              "Dealer & distributor supply",
              "Furniture manufacturing",
              "Wardrobe production",
              "Office furniture projects",
              "Residential interiors",
              "Retail & commercial interiors",
              "Bulk procurement",
              "Export requirements",
            ].map((item, index) => (
              <span key={item}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="mr-faq" className="mr-section">
        <div className="container mr-faq-layout">
          <Heading
            eyebrow="Frequently Asked Questions"
            title="Clear answers before you select the sheet."
          />
          <div className="mr-faq-list">
            {faqs.map(([question, answer], index) => (
              <article
                className={openFaq === index ? "is-open" : ""}
                key={question}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{question}</strong>
                  {openFaq === index ? <Icon.Minus /> : <Icon.Plus />}
                </button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mr-enquiry" className="mr-enquiry">
        <div className="container mr-enquiry-grid">
          <div>
            <Heading
              light
              eyebrow="Start With the Right Interior Plywood"
              title="Tell us what you’re making. We’ll help you select the right MR plywood."
            />
            <p>
              Share the furniture application, required thickness, sheet size,
              quantity and delivery location. Our team will contact you to
              discuss suitability and current availability.
            </p>
            <div className="mr-direct">
              <span>Prefer speaking directly?</span>
              <a href={PHONE_LINK}>Call +91 72061 04340</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp our team
              </a>
            </div>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="mr-form-row">
              <label>
                Name
                <input required placeholder="Your full name" />
              </label>
              <label>
                Company name
                <input placeholder="Company / firm" />
              </label>
            </div>
            <div className="mr-form-row">
              <label>
                Phone number
                <input required type="tel" placeholder="+91 · · · · ·" />
              </label>
              <label>
                Email address
                <input type="email" placeholder="you@company.com" />
              </label>
            </div>
            <div className="mr-form-row">
              <label>
                Customer type
                <select defaultValue="">
                  <option value="" disabled>
                    Select customer type
                  </option>
                  <option>Homeowner</option>
                  <option>Furniture maker</option>
                  <option>Architect / Interior designer</option>
                  <option>Dealer / Distributor</option>
                  <option>Project / Bulk buyer</option>
                  <option>Export buyer</option>
                </select>
              </label>
              <label>
                Furniture / application
                <input required placeholder="e.g. wardrobe production" />
              </label>
            </div>
            <div className="mr-form-row mr-form-three">
              <label>
                Thickness
                <select defaultValue="">
                  <option value="">Not sure</option>
                  {["4 mm", "6 mm", "9 mm", "12 mm", "15 mm", "18 mm"].map(
                    (item) => (
                      <option key={item}>{item}</option>
                    ),
                  )}
                </select>
              </label>
              <label>
                Sheet size
                <select defaultValue="">
                  <option value="">Not sure</option>
                  {[
                    "8×4 ft",
                    "8×3 ft",
                    "7×4 ft",
                    "7×3 ft",
                    "6×4 ft",
                    "6×3 ft",
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label>
                Quantity
                <input type="number" min="1" placeholder="Pieces" />
              </label>
            </div>
            <div className="mr-form-row">
              <label>
                City and state
                <input required placeholder="e.g. Chandigarh, Punjab" />
              </label>
              <label>
                Preferred finish
                <input placeholder="Laminate, veneer, paint…" />
              </label>
            </div>
            <label>
              Additional requirement
              <textarea placeholder="Dimensions, expected load, delivery location, timeline or any other useful detail…" />
            </label>
            <button className="btn btn-primary" type="submit">
              Send My Requirement <Icon.Arrow />
            </button>
            {sent && (
              <p className="mr-form-success" role="status">
                Thank you. Your requirement has been captured in this demo.
                Connect the form endpoint before production submissions.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default MRGradePage;
