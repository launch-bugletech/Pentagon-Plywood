import React from "react";
import { ABOUT_SECTIONS, HOME_SECTIONS, ROUTES } from "@/app/routes.js";
import "../about-page.css";

import manufacturingImage from "@/assets/homepage/Plywood-Manufacturing-1024x683.jpg";
import interiorImage from "@/assets/product/Applications/Modern kitchen with cabinets and island.png";
import edgeImage from "@/assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import plywoodImage from "@/assets/homepage/products/Marine-plywood-1000x1000.webp";
import blockboardImage from "@/assets/homepage/products/is303-blockboard-1671450145-6629496.webp";
import doorImage from "@/assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp";
import teamImage from "@/assets/product/Applications/Modern office with desks and partitions.png";

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
  Calendar: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="5" y="7" width="22" height="20" rx="3" />
      <path d="M10 4v6M22 4v6M5 13h22" />
    </svg>
  ),
  Pin: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M16 29S26 20 26 11a10 10 0 0 0-20 0c0 9 10 18 10 18Z" />
      <circle cx="16" cy="11" r="3.5" />
    </svg>
  ),
  Factory: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 27V13l8 5v-7l8 5V6h5v21M3 27h26M9 23h3M17 23h3M24 23h3" />
    </svg>
  ),
  Layers: () => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="m16 5 12 7-12 7-12-7 12-7Z" />
      <path d="m5 18 11 7 11-7M5 23l11 7 11-7" />
    </svg>
  ),
  Check: () => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="m6.5 10 2.2 2.2 4.8-5" />
    </svg>
  ),
};

const snapshotFacts = [
  { value: "1997", label: "Year established", icon: Icon.Calendar },
  { value: "Yamunanagar", label: "Manufacturing base", icon: Icon.Pin },
  { value: "3", label: "Core product categories", icon: Icon.Layers },
];

const timeline = [
  [
    "1997",
    "The Beginning",
    "Pentagon Plywood Pvt. Ltd. begins its manufacturing journey in Yamunanagar.",
  ],
  [
    "Capability",
    "Building the Foundation",
    "Production infrastructure, people and internal processes grow with changing market requirements.",
  ],
  [
    "Quality",
    "Product Development",
    "An in-house R&D and quality-checking approach supports evaluation during production.",
  ],
  [
    "Range",
    "Expanding the Offering",
    "The portfolio develops across plywood, blockboards and door solutions.",
  ],
  [
    "Today",
    "Experience Moving Forward",
    "Pentagon continues to serve furniture, trade and project requirements while preparing for its next phase.",
  ],
];

const products = [
  {
    number: "01",
    title: "Plywood",
    copy: "MR Grade and Marine Plywood options for furniture, interiors and different moisture-performance requirements.",
    image: plywoodImage,
    href: ROUTES.plywood,
  },
  {
    number: "02",
    title: "Blockboards",
    copy: "Timber-core boards for shelves, shutters, doors, tables and applications where length and workability matter.",
    image: blockboardImage,
    href: HOME_SECTIONS.products,
  },
  {
    number: "03",
    title: "Doors",
    copy: "Membrane, laminated and flush-door options for practical use, visual coordination and interior requirements.",
    image: doorImage,
    href: HOME_SECTIONS.products,
  },
];

const manufacturingStages = [
  "Material selection and preparation",
  "Veneer or timber conditioning",
  "Core assembly",
  "Adhesive application",
  "Pressing under controlled conditions",
  "Trimming and sanding",
  "Dimensional and surface checks",
  "Product-specific quality evaluation",
  "Packaging and dispatch",
];

const qualityPoints = [
  "Material and veneer evaluation",
  "Moisture-content checks",
  "Core and dimensional inspection",
  "Bonding and pressing controls",
  "Thickness and size verification",
  "Surface and edge inspection",
  "Grade-appropriate product testing",
  "Batch identification and records",
];

const principles = [
  [
    "01",
    "Responsibility Before Claims",
    "We describe each product according to its verified grade, construction and intended application.",
  ],
  [
    "02",
    "Improvement Through Experience",
    "Years in manufacturing matter when that experience continues to improve how the work is done.",
  ],
  [
    "03",
    "Respect for the Requirement",
    "We begin by understanding the actual use, quantity, conditions and support a requirement needs.",
  ],
  [
    "04",
    "Relationships Beyond the Order",
    "Clear communication, consistent supply and accountable service build working relationships.",
  ],
  [
    "05",
    "Quality Through Process",
    "The finished product reflects the attention given to preparation, controls and checks along the way.",
  ],
];

const audiences = [
  [
    "Dealers & Distributors",
    "Product information, range discussions and supply support for trade requirements.",
  ],
  [
    "Furniture Manufacturers",
    "Boards selected around fabrication, finishing, hardware and intended furniture use.",
  ],
  [
    "Builders & Contractors",
    "Project discussions based on quantities, schedules, site conditions and delivery requirements.",
  ],
  [
    "Architects & Interiors",
    "Application-led information for furniture, doors, panels and interior specifications.",
  ],
  [
    "Homeowners",
    "Clearer guidance on grades, uses and the questions to ask before purchasing.",
  ],
];

const commitments = [
  [
    "Our Vision",
    "To build Pentagon into a trusted wood-panel and door brand known for responsible information, dependable manufacturing and long-term relationships.",
  ],
  [
    "Our Mission",
    "To develop and supply products that respond to real furniture, interior and project requirements through capable people and controlled processes.",
  ],
  [
    "Our Commitment",
    "To help customers understand what they are selecting, manufacture to verified specifications and stand behind every claim the Pentagon name carries.",
  ],
];

const faqs = [
  [
    "When was Pentagon Plywood established?",
    "Pentagon Plywood Pvt. Ltd. was established in 1997.",
  ],
  [
    "Where is Pentagon Plywood located?",
    "The company operates from Village Raipur, Khajuri Road, Yamunanagar, Haryana, India.",
  ],
  [
    "What does Pentagon Plywood manufacture?",
    "The current range includes MR Grade and Marine Plywood, blockboards, membrane doors, laminated doors and flush doors. Product availability should be confirmed at enquiry.",
  ],
  [
    "Does Pentagon sell directly or through dealers?",
    "Pentagon is a manufacturer and supplier serving the domestic market. Contact the team to confirm the current dealer network and purchase route for your location.",
  ],
  [
    "Are Pentagon products BIS certified?",
    "Certification must be confirmed product by product. Ask the team for the applicable standard, licence number, scope and current validity.",
  ],
  [
    "Can I visit the manufacturing facility?",
    "Dealers, project buyers and business partners can contact the company to ask about an advance appointment.",
  ],
];

function SectionHeading({ eyebrow, children, copy, light = false }) {
  return (
    <div className={`about-section-head${light ? " is-light" : ""}`}>
      <div className="about-kicker">{eyebrow}</div>
      <h2 className="about-heading">{children}</h2>
      {copy && <p className="about-lede">{copy}</p>}
    </div>
  );
}

function AboutPage() {
  React.useEffect(() => {
    document.title = "About Pentagon Plywood | Built Since 1997";
  }, []);

  return (
    <div className="about-page">
      <div className="about-breadcrumb">
        <div className="container">
          <a href={ROUTES.home}>Home</a>
          <span>›</span>
          <strong>About Us</strong>
        </div>
      </div>

      <section className="about-hero" id="story">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <div className="about-kicker">Our Story</div>
            <h1>
              Built Since 1997.
              <br />
              <em>Made for What Comes Next.</em>
            </h1>
            <p>
              For nearly three decades, Pentagon Plywood has worked from
              Yamunanagar to manufacture wood-panel and door solutions for the
              spaces people build, furnish and use every day.
            </p>
            <p>
              What began with a commitment to dependable plywood continues
              through manufacturing experience, evolving requirements and
              attention to quality at every stage.
            </p>
            <div className="about-actions">
              <a className="btn btn-primary" href={ABOUT_SECTIONS.journey}>
                Explore Our Journey <Icon.Arrow />
              </a>
              <a className="btn btn-outline" href={HOME_SECTIONS.products}>
                Discover Our Products <Icon.Arrow />
              </a>
            </div>
          </div>
          <div className="about-hero-media">
            <img
              src={manufacturingImage}
              alt="Plywood manufacturing environment"
            />
            <span className="about-image-label">
              Manufacturing · Yamunanagar
            </span>
          </div>
          <div className="about-year-rail">
            <span>1997</span>
            <i />
            <span>Today</span>
          </div>
        </div>
        <div className="about-trust-strip">
          <div className="container">
            {[
              "Established in 1997",
              "Based in Yamunanagar, Haryana",
              "Manufacturer and supplier",
              "Plywood, blockboards and doors",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-intro">
        <div className="container">
          <SectionHeading eyebrow="Who We Are">
            We Do Not Only See a Sheet of Plywood.{" "}
            <em>We See What It Is About to Become.</em>
          </SectionHeading>
          <div className="about-intro-grid">
            <div className="about-image-pair">
              <figure>
                <img
                  src={interiorImage}
                  alt="Finished kitchen interior using wood panels"
                />
                <figcaption>The finished space</figcaption>
              </figure>
              <figure>
                <img src={edgeImage} alt="Layered plywood edge detail" />
                <figcaption>The material behind it</figcaption>
              </figure>
            </div>
            <div className="about-prose">
              <p>
                A board may become a wardrobe opened every morning, a door used
                throughout the day, a shelf carrying years of books or the
                foundation of an entire interior.
              </p>
              <p>That is why the work behind the surface matters.</p>
              <p>
                Pentagon Plywood Pvt. Ltd. is a Yamunanagar-based manufacturer
                and supplier of plywood, blockboards and door solutions. Since
                1997, the company has served furniture makers, dealers,
                contractors, interior professionals and project buyers with
                products made for practical applications.
              </p>
              <p>
                Our role begins before the board reaches the workshop:
                understanding materials, preparing them carefully, controlling
                the process and checking the finished product against its
                intended requirement.
              </p>
              <a className="about-text-link" href={HOME_SECTIONS.products}>
                See What We Manufacture <Icon.Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-snapshot">
        <div className="container">
          <SectionHeading eyebrow="Pentagon at a Glance">
            Experience Built One Board, One Door and One Relationship at a Time.
          </SectionHeading>
          <div className="about-stats">
            {snapshotFacts.map(({ value, label, icon: FactIcon }) => (
              <article key={label}>
                <FactIcon />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <div className="about-fact-line">
            <span>
              Company <strong>Pentagon Plywood Pvt. Ltd.</strong>
            </span>
            <span>
              Leadership <strong>Mr. Anand Jain</strong>
            </span>
            <span>
              Business <strong>Manufacturer &amp; supplier</strong>
            </span>
            <span>
              Market <strong>Domestic</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="about-section about-journey" id="journey">
        <div className="container">
          <SectionHeading
            eyebrow="Where It Began"
            copy="Established in Yamunanagar, Pentagon developed its manufacturing capabilities, production experience and product range while keeping the same central responsibility: understand what the product must do and manufacture it with care."
          >
            A Manufacturing Journey That Started in <em>1997.</em>
          </SectionHeading>
          <div className="about-timeline">
            {timeline.map(([year, title, copy], index) => (
              <article key={title}>
                <div className="about-timeline-mark">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <small>{year}</small>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-leadership" id="leadership">
        <div className="container about-leadership-grid">
          <div className="about-leadership-visual">
            <img
              src={manufacturingImage}
              alt="Pentagon Plywood manufacturing facility detail"
            />
            <div>
              <span>Leadership</span>
              <strong>
                Long-term direction,
                <br />
                grounded in manufacturing.
              </strong>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Leadership">
              Experience Gives Direction.{" "}
              <em>Responsibility Gives It Meaning.</em>
            </SectionHeading>
            <p>
              Pentagon Plywood has grown under the leadership of Mr. Anand Jain.
              His industry experience and long-term approach have guided the
              company from its early manufacturing years to its present product
              range.
            </p>
            <p>
              That direction continues through a simple responsibility:
              understand the market, strengthen the process and manufacture
              products customers can select with greater confidence.
            </p>
            <div className="about-leader-name">
              <strong>Mr. Anand Jain</strong>
              <span>Pentagon Plywood Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-products">
        <div className="container">
          <SectionHeading
            eyebrow="Our Product Range"
            copy="The right wood-panel product depends on where it will be used, how it will be finished and the conditions it will face."
          >
            Different Materials for Different Parts of the Build.
          </SectionHeading>
          <div className="about-product-grid">
            {products.map((product) => (
              <article key={product.title}>
                <div className="about-product-image">
                  <img
                    src={product.image}
                    alt={`${product.title} by Pentagon Plywood`}
                  />
                  <span>{product.number}</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
                <a href={product.href}>
                  Explore {product.title} <Icon.Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-manufacturing" id="about-manufacturing">
        <div className="container">
          <SectionHeading
            eyebrow="Behind the Finished Surface"
            light
            copy="Performance is influenced by everything that happens before the finished face: preparation, bonding, pressing, finishing and inspection."
          >
            Manufacturing Is Where Every Product Promise Must Begin.
          </SectionHeading>
          <div className="about-process-layout">
            <div className="about-process-image">
              <img
                src={manufacturingImage}
                alt="Plywood production machinery and materials"
              />
              <span>Process · People · Control</span>
            </div>
            <ol className="about-process-list">
              {manufacturingStages.map((stage, index) => (
                <li key={stage}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {stage}
                </li>
              ))}
            </ol>
          </div>
          <div className="about-actions">
            <a className="btn btn-accent" href={HOME_SECTIONS.manufacturing}>
              Explore Our Manufacturing <Icon.Arrow />
            </a>
            <a
              className="btn btn-outline about-light-button"
              href={ABOUT_SECTIONS.visit}
            >
              Plan a Factory Visit <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section about-quality" id="about-quality">
        <div className="container about-quality-grid">
          <SectionHeading
            eyebrow="Quality at Every Stage"
            copy="By the final check, many decisions have already shaped the panel. Pentagon's approach is built around checking during production—not relying only on how the final surface appears."
          >
            Quality Should Not Begin With the Final Inspection.
          </SectionHeading>
          <div className="about-quality-list">
            {qualityPoints.map((point) => (
              <div key={point}>
                <Icon.Check />
                <span>{point}</span>
              </div>
            ))}
            <a className="about-text-link" href={HOME_SECTIONS.quality}>
              View Quality &amp; Certifications <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-image">
          <img
            src={teamImage}
            alt="Work environment representing the people behind every project"
          />
        </div>
        <div className="about-team-content">
          <SectionHeading eyebrow="Our Team" light>
            Machines Shape the Product. <em>People Shape the Standard.</em>
          </SectionHeading>
          <p>
            Manufacturing experience is carried by people: those who understand
            timber, prepare the core, operate machinery, inspect the surface,
            manage a requirement and make sure the product moves forward
            correctly.
          </p>
          <p>
            Pentagon's team brings together production, quality, technical
            experience and customer support with attention on the work taking
            place every day.
          </p>
          <a className="btn btn-accent" href={ABOUT_SECTIONS.enquiry}>
            Work With Pentagon <Icon.Arrow />
          </a>
        </div>
      </section>

      <section className="about-section about-principles">
        <div className="container">
          <SectionHeading eyebrow="Our Principles">
            The Values Behind the Name.
          </SectionHeading>
          <div className="about-principle-grid">
            {principles.map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-audiences">
        <div className="container">
          <SectionHeading
            eyebrow="Built Around Real Requirements"
            copy="Each customer brings a different question—from grade and thickness to quantity, availability and application."
          >
            For the People Who Select, Sell and Build With Wood.
          </SectionHeading>
          <div className="about-audience-list">
            {audiences.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <a className="btn btn-primary" href={ABOUT_SECTIONS.enquiry}>
            Discuss Your Requirement <Icon.Arrow />
          </a>
        </div>
      </section>

      <section className="about-section about-forward">
        <div className="container">
          <SectionHeading eyebrow="Looking Forward">
            Nearly Three Decades Behind Us.{" "}
            <em>The Next Standard Is Still Ahead.</em>
          </SectionHeading>
          <div className="about-commitment-grid">
            {commitments.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-visit" id="visit">
        <div className="container about-visit-grid">
          <div>
            <SectionHeading eyebrow="From Yamunanagar" light>
              See Where the Work Behind the Board Takes Place.
            </SectionHeading>
            <p>
              Pentagon Plywood operates from Village Raipur on Khajuri Road in
              Yamunanagar, Haryana—one of India's recognised centres for plywood
              and wood-product manufacturing.
            </p>
            <address>
              Village Raipur, Khajuri Road
              <br />
              Yamunanagar, Haryana 135001
              <br />
              India
            </address>
            <div className="about-actions">
              <a className="btn btn-accent" href={ABOUT_SECTIONS.enquiry}>
                Plan a Factory Visit <Icon.Arrow />
              </a>
              <a
                className="btn btn-outline about-light-button"
                href="https://maps.google.com/?q=Village+Raipur+Khajuri+Road+Yamunanagar+Haryana+135001"
              >
                Get Directions <Icon.Arrow />
              </a>
            </div>
          </div>
          <div className="about-location-card">
            <Icon.Pin />
            <span>30.13° N · 77.29° E</span>
            <strong>
              Yamunanagar
              <br />
              Haryana
            </strong>
            <small>Manufacturing base</small>
          </div>
        </div>
      </section>

      <section className="about-section about-faq" id="about-faq">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions">
            A Few Things People Ask About Pentagon.
          </SectionHeading>
          <div className="about-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <i>+</i>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final-cta" id="about-enquiry">
        <div className="container">
          <div className="about-kicker">Start a Conversation</div>
          <h2>
            Tell Us What You Are Building.
            <br />
            <em>Let's Begin With the Material Behind It.</em>
          </h2>
          <p>
            Whether you are sourcing for furniture production, resale, an
            interior project or a larger development, share the product, grade,
            size, thickness, quantity and delivery location with our team.
          </p>
          <div className="about-actions">
            <a className="btn btn-accent" href={HOME_SECTIONS.enquiry}>
              Discuss Your Requirement <Icon.Arrow />
            </a>
            <a
              className="btn btn-outline about-light-button"
              href="tel:+917015085556"
            >
              Call or WhatsApp Us <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
