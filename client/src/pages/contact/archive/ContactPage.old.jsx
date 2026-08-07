import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  comingSoonUrl,
  CONTACT_SECTIONS,
  HOME_SECTIONS,
  ROUTES,
} from "@/app/routes.js";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  WHATSAPP_LINK,
  enquiryTypes,
  customerTypes,
  productCategories,
  directContacts,
  nextSteps,
  productDirections,
  faqs,
  plannerCategories,
  projectEstimates,
  plannerTabs,
} from "../contactData.js";
import "../contact-page.css";

const FACTORY_360_URL =
  "https://www.google.com/maps/embed?pb=!4v1786021997875!6m8!1m7!1sR9TCbEr38ulcKQYtMl5aJA!2m2!1d30.09940653232269!2d77.28578053381996!3f85.68189271022864!4f-16.154239758161893!5f0.7820865974627469";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`contact-section-heading${light ? " is-light" : ""}`}>
      <div className="contact-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`contact-field ${className}`}>
      <span>
        {label}
        {required && <b aria-hidden="true">*</b>}
      </span>
      {children}
    </label>
  );
}

const PENTAGON_LOCATION = [77.28599938929692, 30.099496445420478];

function IndiaMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return undefined;

    const map = new maplibregl.Map({
      container,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: PENTAGON_LOCATION,
      zoom: 12,
      attributionControl: true,
    });

    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: false,
      }),
      "top-right",
    );

    const popup = new maplibregl.Popup({
      offset: 28,
      closeButton: false,
    }).setHTML(`
      <strong>Pentagon Plywood Pvt. Ltd.</strong>
      <br />
      Village Raipur, Khajuri Road
      <br />
      Yamunanagar, Haryana 135001
    `);

    const marker = new maplibregl.Marker({
      color: "#1ba6c9",
    })
      .setLngLat(PENTAGON_LOCATION)
      .setPopup(popup)
      .addTo(map);

    map.once("load", () => {
      map.resize();
      map.easeTo({
        center: PENTAGON_LOCATION,
        zoom: 12,
        padding: { top: 25, right: 25, bottom: 15, left: 25 },
        duration: 0,
      });
    });

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      marker.remove();
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="contact-live-map"
      aria-label="Map showing the Pentagon Plywood factory"
    />
  );
}

function FactoryLocationView() {
  const [showFactoryView, setShowFactoryView] = useState(false);

  return (
    <div className="contact-map-shell">
      <IndiaMap />
      <div className="contact-map-information">
        <div>
          <small>Pentagon Plywood Pvt. Ltd.</small>
          <strong>Yamunanagar · Haryana</strong>
        </div>
        <div className="contact-map-information-actions">
          <button
            type="button"
            className="contact-factory-view-button"
            onClick={() => setShowFactoryView(true)}
          >
            View Factory in 360°
          </button>
          <a
            href="https://maps.app.goo.gl/5K3S7Zpc6ZX3e7uF7"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {showFactoryView && (
        <div
          className="contact-factory-view"
          role="dialog"
          aria-modal="true"
          aria-label="360 degree view of Pentagon Plywood factory"
        >
          <div className="contact-factory-view-header">
            <div>
              <small>360° Factory View</small>
              <strong>Pentagon Plywood, Yamunanagar</strong>
            </div>
            <button
              type="button"
              className="contact-factory-view-close"
              aria-label="Close factory view"
              onClick={() => setShowFactoryView(false)}
            >
              ×
            </button>
          </div>
          <iframe
            className="contact-factory-view-frame"
            src={FACTORY_360_URL}
            title="360 degree view of Pentagon Plywood factory"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}
    </div>
  );
}

function ContactOldPage() {
  // Hero Quick Form State
  const [productCategory, setProductCategory] = useState("Plywood");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroConsent, setHeroConsent] = useState(true);

  // Section 2 Advanced Level Planner State
  const [activePlannerTab, setActivePlannerTab] = useState("specifier");
  const [selectedPlannerCat, setSelectedPlannerCat] = useState("furniture");
  const [tabSubmissions, setTabSubmissions] = useState({
    project: false,
    dealer: false,
    export: false,
  });

  const activeCategoryData = useMemo(
    () => plannerCategories.find((c) => c.id === selectedPlannerCat) || plannerCategories[0],
    [selectedPlannerCat],
  );

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setHeroSubmitted(true);
  };

  const handleTabSubmit = (e, tabKey) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setTabSubmissions((prev) => ({ ...prev, [tabKey]: true }));
  };

  const applyCategoryToHero = (catName) => {
    setProductCategory(catName);
    const heroFormElem = document.getElementById("contact-form");
    if (heroFormElem) {
      heroFormElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    document.title =
      "Contact Pentagon Plywood | Product, Dealer & Bulk Enquiries (v1)";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact Pentagon Plywood in Yamunanagar for plywood, blockboard, doors, dealer, bulk and project enquiries. Call, WhatsApp or share your requirement online.";
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-breadcrumb">
        <div className="container">
          <a href={ROUTES.home}>Home</a>
          <span>›</span>
          <strong>Contact Us (v1)</strong>
        </div>
      </div>

      {/* SECTION 1: HERO SECTION & QUICK ENQUIRY FORM */}
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <div className="contact-eyebrow">Contact Pentagon</div>
            <h1>
              Tell Us What You’re Building.{" "}
              <em>Let’s Start With the Right Conversation.</em>
            </h1>
            <p>
              Looking for plywood, blockboard or doors for resale, furniture,
              interiors or a larger project? Share your requirement below for a quick response,
              or explore our Advanced Level Planning tools.
            </p>
            <div className="contact-hero-actions">
              <a className="btn btn-primary" href={PHONE_LINK}>
                Call Now <ArrowIcon />
              </a>
              <a
                className="btn btn-outline"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us <ArrowIcon />
              </a>
            </div>
            <div className="contact-direct-line">
              Prefer speaking directly?{" "}
              <a href={PHONE_LINK}>
                Call us at <strong>{PHONE_DISPLAY}</strong>
              </a>
              .
            </div>
            <div className="contact-hero-note">
              <span>Product</span>
              <span>Dealer</span>
              <span>Project</span>
              <span>Export</span>
            </div>
          </div>

          {/* STREAMLINED QUICK ENQUIRY FORM */}
          <form
            className="contact-enquiry-form"
            id="contact-form"
            onSubmit={handleHeroSubmit}
          >
            {heroSubmitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-mark">✓</span>
                <div className="contact-eyebrow">Quick Requirement Received</div>
                <h2>Thank You. We Have Received Your Note.</h2>
                <p>
                  Your enquiry reference is{" "}
                  <strong>PP-{new Date().getFullYear()}-WEB</strong>. Our team
                  will review your details and connect with you shortly.
                </p>
                <div className="contact-success-actions">
                  <a
                    className="btn btn-primary"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Continue on WhatsApp
                  </a>
                  <a className="btn btn-outline" href="#advanced-planner">
                    Explore Advanced Planning
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-reset"
                  onClick={() => setHeroSubmitted(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-head">
                  <div>
                    <div className="contact-eyebrow">
                      Quick Product & General Enquiry
                    </div>
                    <h2>Share Your Requirement</h2>
                  </div>
                  <span>FAST RESPONSES</span>
                </div>
                <p className="contact-form-intro">
                  Tell us what you are making or looking for. Our team will get back to you with pricing, grade details, and availability.
                </p>

                <div className="contact-form-grid">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Mobile Number" required>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      autoComplete="tel"
                    />
                  </Field>

                  <Field label="Product Category" required>
                    <select
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      required
                    >
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Delivery City" required>
                    <input
                      type="text"
                      placeholder="e.g. Gurgaon, Delhi, Jaipur"
                      required
                    />
                  </Field>

                  <Field
                    label="Requirement Details or Note"
                    className="is-wide"
                  >
                    <textarea
                      rows="3"
                      placeholder="Specify thickness (e.g. 18mm MR/BWP), estimated sheets or any specific application notes..."
                    />
                  </Field>
                </div>

                <label className="contact-consent">
                  <input
                    type="checkbox"
                    checked={heroConsent}
                    onChange={(e) => setHeroConsent(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to let Pentagon Plywood reach out via Phone, WhatsApp or Email regarding this enquiry.
                  </span>
                </label>

                <button
                  className="btn btn-primary contact-submit"
                  type="submit"
                >
                  Send Quick Enquiry <ArrowIcon />
                </button>
                <p className="contact-form-footnote">
                  Fields marked * are required. Have a complex BOQ or business partnership? Scroll down to the Advanced Planning section.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* SECTION 2: ADVANCED LEVEL PLANNING & SPECIALIZED FORM HUB */}
      <section
        className="contact-section contact-advanced-planner"
        id="advanced-planner"
      >
        <div className="container">
          <SectionHeading
            eyebrow="ADVANCED LEVEL PLANNING"
            title="Plan Your Material Specs or Submit Specialized Requirements."
            copy="Use our interactive material specifier and volume estimator below, or submit specialized proposals for Projects, Dealerships, or Bulk Export."
          />

          {/* ADVANCED PLANNER NAV TABS */}
          <div className="planner-tab-bar" role="tablist">
            {plannerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activePlannerTab === tab.id}
                className={`planner-tab-btn ${
                  activePlannerTab === tab.id ? "is-active" : ""
                }`}
                onClick={() => setActivePlannerTab(tab.id)}
              >
                <span className="planner-tab-tag">{tab.tag}</span>
                <strong className="planner-tab-title">{tab.label}</strong>
              </button>
            ))}
          </div>

          {/* TAB 1: MATERIAL & GRADE SPECIFIER */}
          {activePlannerTab === "specifier" && (
            <div className="planner-content-card">
              <div className="planner-specifier-header">
                <div>
                  <div className="contact-eyebrow">Interactive Specifier</div>
                  <h3>Select Your Application & Project Scale</h3>
                </div>
                <p>
                  Understand the ideal plywood grade, thickness, and sheet count needed for your project before purchasing.
                </p>
              </div>

              <div className="planner-cat-selector">
                {plannerCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`planner-cat-btn ${
                      selectedPlannerCat === cat.id ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedPlannerCat(cat.id)}
                  >
                    <strong>{cat.title}</strong>
                    <small>{cat.subtitle}</small>
                  </button>
                ))}
              </div>

              <div className="planner-spec-detail-grid">
                <div className="planner-spec-box">
                  <span className="planner-badge">RECOMMENDED GRADE</span>
                  <h4>{activeCategoryData.grade}</h4>
                  <div className="planner-spec-meta">
                    <div>
                      <small>Standard Thicknesses</small>
                      <strong>{activeCategoryData.thickness}</strong>
                    </div>
                    <div>
                      <small>Suggested Sheet Volume</small>
                      <strong>{activeCategoryData.suggestedSheets}</strong>
                    </div>
                  </div>
                  <ul className="planner-bullets">
                    {activeCategoryData.specs.map((spec, i) => (
                      <li key={i}>✓ {spec}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: "20px" }}
                    onClick={() => applyCategoryToHero(activeCategoryData.category)}
                  >
                    Select {activeCategoryData.category} in Quick Hero Form <ArrowIcon />
                  </button>
                </div>

                <div className="planner-estimates-box">
                  <span className="planner-badge">QUICK PROJECT ESTIMATOR</span>
                  <h4>Estimated Sheet Volumes by Project Scale</h4>
                  <div className="planner-estimate-list">
                    {projectEstimates.map((est) => (
                      <div key={est.label} className="planner-estimate-item">
                        <div>
                          <strong>{est.label}</strong>
                          <small>Grade: {est.plyGrade}</small>
                        </div>
                        <span className="planner-estimate-count">{est.sheets}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECT & BOQ FORM */}
          {activePlannerTab === "project" && (
            <div className="planner-content-card">
              {tabSubmissions.project ? (
                <div className="contact-success">
                  <span className="contact-success-mark">✓</span>
                  <div className="contact-eyebrow">BOQ Received</div>
                  <h3>Thank You. Your Project BOQ Has Been Submitted.</h3>
                  <p>Our project team will review the specification and send a quotation.</p>
                  <button
                    type="button"
                    className="contact-reset"
                    onClick={() =>
                      setTabSubmissions((prev) => ({ ...prev, project: false }))
                    }
                  >
                    Submit another BOQ
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => handleTabSubmit(e, "project")}
                  className="planner-tab-form"
                >
                  <div className="planner-form-head">
                    <h3>Project & BOQ Submission Form</h3>
                    <p>
                      For Architects, Interior Designers, Hospitality & Commercial Contractors. Share your BOQ or specifications for factory direct pricing.
                    </p>
                  </div>
                  <div className="contact-form-grid">
                    <Field label="Project Name or Type" required>
                      <input
                        type="text"
                        placeholder="e.g. 5-Star Hotel Interior / Residential Tower"
                        required
                      />
                    </Field>
                    <Field label="Project Location" required>
                      <input type="text" placeholder="City & State" required />
                    </Field>
                    <Field label="Approximate Quantity (Sheets/Doors)" required>
                      <input type="text" placeholder="e.g. 150 Sheets / 45 Flush Doors" required />
                    </Field>
                    <Field label="Target Procurement Date">
                      <input type="date" />
                    </Field>
                    <Field label="Contact Person Name" required>
                      <input type="text" placeholder="Your Name" required />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input type="tel" placeholder="+91" required />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" placeholder="email@company.com" />
                    </Field>
                    <Field label="Upload Drawing or BOQ (Optional)">
                      <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" />
                    </Field>
                    <Field label="Additional Specification Notes" className="is-wide">
                      <textarea
                        rows="3"
                        placeholder="Mention required grades (BWP, MR, FR), fire retardant rating, thickness tolerance, etc."
                      />
                    </Field>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "24px" }}>
                    Submit Project BOQ Requirement <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: DEALER & DISTRIBUTOR APPLICATION */}
          {activePlannerTab === "dealer" && (
            <div className="planner-content-card">
              {tabSubmissions.dealer ? (
                <div className="contact-success">
                  <span className="contact-success-mark">✓</span>
                  <div className="contact-eyebrow">Application Received</div>
                  <h3>Thank You. Dealership Application Submitted.</h3>
                  <p>Our sales team will evaluate your territory and contact you for partnership discussions.</p>
                  <button
                    type="button"
                    className="contact-reset"
                    onClick={() =>
                      setTabSubmissions((prev) => ({ ...prev, dealer: false }))
                    }
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => handleTabSubmit(e, "dealer")}
                  className="planner-tab-form"
                >
                  <div className="planner-form-head">
                    <h3>Dealer & Distributor Application Form</h3>
                    <p>
                      Partner with Pentagon Plywood. Share your business profile to discuss exclusive regional dealership & wholesale supply terms.
                    </p>
                  </div>
                  <div className="contact-form-grid">
                    <Field label="Firm / Business Name" required>
                      <input type="text" placeholder="e.g. Royal Timber & Plywood Mart" required />
                    </Field>
                    <Field label="City & District" required>
                      <input type="text" placeholder="City, State" required />
                    </Field>
                    <Field label="Market / Territory Served" required>
                      <input type="text" placeholder="e.g. North Delhi & NCR" required />
                    </Field>
                    <Field label="Current Product Categories Handled">
                      <input type="text" placeholder="e.g. Plywood, Laminates, Hardware" />
                    </Field>
                    <Field label="Contact Person" required>
                      <input type="text" placeholder="Full Name" required />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input type="tel" placeholder="+91" required />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" placeholder="business@email.com" />
                    </Field>
                    <Field label="Estimated Monthly Volume">
                      <input type="text" placeholder="e.g. 1 Truckload / 500 Sheets" />
                    </Field>
                    <Field label="Business Proposal Note" className="is-wide">
                      <textarea
                        rows="3"
                        placeholder="Tell us about your showroom/godown capacity and current brand partnerships..."
                      />
                    </Field>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "24px" }}>
                    Apply for Dealership <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 4: EXPORT & INDUSTRIAL CHEMICAL FORM */}
          {activePlannerTab === "export" && (
            <div className="planner-content-card">
              {tabSubmissions.export ? (
                <div className="contact-success">
                  <span className="contact-success-mark">✓</span>
                  <div className="contact-eyebrow">Export Requirement Received</div>
                  <h3>Thank You. Export / Chemical Enquiry Received.</h3>
                  <p>Our international trade & industrial team will reach out with technical specs and export quotes.</p>
                  <button
                    type="button"
                    className="contact-reset"
                    onClick={() =>
                      setTabSubmissions((prev) => ({ ...prev, export: false }))
                    }
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => handleTabSubmit(e, "export")}
                  className="planner-tab-form"
                >
                  <div className="planner-form-head">
                    <h3>Export & Industrial Chemical Enquiry Form</h3>
                    <p>
                      For overseas buyers & chemical industrial clients. Discuss Formaldehyde (37%/43%) chemical shipments or export grade plywood.
                    </p>
                  </div>
                  <div className="contact-form-grid">
                    <Field label="Company Name" required>
                      <input type="text" placeholder="Company Name" required />
                    </Field>
                    <Field label="Destination Country & Port" required>
                      <input type="text" placeholder="e.g. Jebel Ali, UAE / Mundra Port" required />
                    </Field>
                    <Field label="Product / Chemical Required" required>
                      <select required defaultValue="Formaldehyde 37%">
                        <option>Formaldehyde 37% Commercial Grade</option>
                        <option>Formaldehyde 43% Grade</option>
                        <option>BWP Marine Plywood IS:710</option>
                        <option>Calibrated Commercial Plywood</option>
                        <option>Custom Industrial Resin / Ply</option>
                      </select>
                    </Field>
                    <Field label="Estimated Order / Tanker Volume" required>
                      <input type="text" placeholder="e.g. 2 x 20ft Container / Tanker Load" required />
                    </Field>
                    <Field label="Contact Person Name" required>
                      <input type="text" placeholder="Full Name" required />
                    </Field>
                    <Field label="Email Address" required>
                      <input type="email" placeholder="name@company.com" required />
                    </Field>
                    <Field label="Phone / WhatsApp Number" required>
                      <input type="tel" placeholder="+ country code & number" required />
                    </Field>
                    <Field label="Shipping & Delivery Terms">
                      <input type="text" placeholder="FOB / CIF / Ex-Factory" />
                    </Field>
                    <Field label="Technical Requirement Details" className="is-wide">
                      <textarea
                        rows="3"
                        placeholder="Detail specific chemical purity percentages, plywood core specifications, packaging, or inspection requirements..."
                      />
                    </Field>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "24px" }}>
                    Submit Export / Chemical Enquiry <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: DIRECT CONTACTS */}
      <section className="contact-section contact-direct" id="direct-contact">
        <div className="container">
          <SectionHeading
            eyebrow="Prefer a Direct Conversation?"
            title="Reach Pentagon in the Way That Works for You."
          />
          <div className="contact-direct-grid">
            {directContacts.map((item, index) => (
              <article key={item.type}>
                <span>0{index + 1}</span>
                <h3>{item.type}</h3>
                <strong>{item.detail}</strong>
                <p>{item.copy}</p>
                <a
                  href={item.href}
                  target={item.type === "WhatsApp" ? "_blank" : undefined}
                  rel={item.type === "WhatsApp" ? "noreferrer" : undefined}
                >
                  {item.action} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
          <p className="contact-visit-note">
            Please contact our team before visiting so we can confirm the
            appropriate time and person for your requirement.
          </p>
        </div>
      </section>

      {/* SECTION 4: LOCATION MAP */}
      <section className="contact-location" id="location">
        <div className="container contact-location-grid">
          <div>
            <SectionHeading
              eyebrow="Find Pentagon"
              title="Manufacturing From Yamunanagar, Haryana."
              copy="Pentagon Plywood operates from one of India’s established wood-product manufacturing regions. Contact our team before planning a business or factory visit."
              light
            />
            <address>
              Village Raipur, Khajuri Road
              <br />
              Yamunanagar, Haryana 135001
              <br />
              India
            </address>
            <div className="contact-location-actions">
              <a
                className="btn btn-light"
                href="https://maps.app.goo.gl/5K3S7Zpc6ZX3e7uF7"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowIcon />
              </a>
              <a
                className="btn btn-outline about-light-button"
                href={PHONE_LINK}
              >
                Plan a Visit
              </a>
            </div>
          </div>
          <FactoryLocationView />
        </div>
      </section>

      {/* SECTION 5: NEXT STEPS */}
      <section className="contact-section contact-next" id="next-step">
        <div className="container">
          <SectionHeading
            eyebrow="The Next Step"
            title="A Clear Enquiry Makes the Next Conversation More Useful."
          />
          <div className="contact-next-grid">
            {nextSteps.map(({ number, title, copy }) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="contact-section contact-faq" id="contact-faq">
        <div className="container contact-faq-grid">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Useful Details Before You Send Your Requirement."
          />
          <div className="contact-faq-list">
            {faqs.map(({ question, answer }, index) => (
              <details key={question}>
                <summary>
                  <span>0{index + 1}</span>
                  {question}
                  <i>+</i>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="contact-final">
        <div className="container">
          <div className="contact-eyebrow">Ready to Begin?</div>
          <h2>
            Your Requirement Doesn’t Have to Be Perfect.{" "}
            <em>It Just Has to Start Somewhere.</em>
          </h2>
          <p>
            Tell us what you are making, selling or planning. Share the product,
            application, quantity and location you know today, and our team can
            continue the conversation from there.
          </p>
          <div className="contact-final-actions">
            <a className="btn btn-primary" href="#contact-form">
              Send Your Requirement <ArrowIcon />
            </a>
            <a
              className="btn btn-outline"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <div className="contact-mobile-bar" aria-label="Quick contact options">
        <a href={PHONE_LINK}>Call</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ContactOldPage;
