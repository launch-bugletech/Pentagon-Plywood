/* Pentagon Plywood - Plywood product page. */

import React from 'react';
import { ROUTES } from '../../app/routes.js';
import './plywood-page.css';

// Marine - plywood - 1000x1000.webp';
// mr plywood/
import MRPlywood from '../../assets/product/mr plywood/mr-grade-plywood-1671449588-6629452.webp';
import BedroomApplication from "../../assets/product/mr plywood/Cozy minimalist bedroom with natural light.png";
import MREdge from "../../assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import MRSurface from "../../assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg";


// Marine - plywood 
import MarinePlywood from '../../assets/homepage/products/Marine-plywood-1000x1000.webp';
import MarineApplication from "../../assets/product/marine plywood/marine-plywood-kitchen.png";
import MarineEdge from "../../assets/product/marine plywood/marine-plywood-layered-board.png";
import MarineSurface from "../../assets/product/marine plywood/marine-plywood-wood-grain.png";

//  Application images
import WardrobeApplication from '../../assets/product/Applications/Modern wardrobe with sliding doors.png';
import KitchenApplication from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import LivingRoomApplication from "../../assets/product/Applications/Contemporary living room with furniture.png";
import OfficeApplication from "../../assets/product/Applications/Modern office with desks and partitions.png";
import RetailApplication from "../../assets/product/Applications/Retail store interior with shelves and displays.png";
import BathroomApplication from "../../assets/product/Applications/Modern bathroom with vanity and mirror.png";

const P = { // shorthand icons reuse
  Arr: () => <svg className="arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  Check: () => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l3 3 7-7"/></svg>,
  Dash: () => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h8"/></svg>,
  Plus: () => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3v10M3 8h10"/></svg>,
  Minus: () => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10"/></svg>,
  Info: () => <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="8"/><path d="M10 7v0M10 10v4"/></svg>,
  Drop: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M24 4 39 10v12c0 10-6.3 17.4-15 22-8.7-4.6-15-12-15-22V10L24 4Z"/><path d="M24 15c-3 4.4-5.5 7.4-5.5 11a5.5 5.5 0 0 0 11 0c0-3.6-2.5-6.6-5.5-11Z"/></svg>,
  Layers: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m24 6 17 10-17 10L7 16 24 6Z"/><path d="m9 24 15 9 15-9M9 32l15 9 15-9"/></svg>,
  Clipboard: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="10" y="8" width="28" height="35" rx="3"/><path d="M19 8V5h10v3M16 18l2 2 4-5M16 27l2 2 4-5M16 36l2 2 4-5M26 18h7M26 27h7M26 36h7"/></svg>,
  Pin: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M24 43s13-12.2 13-24A13 13 0 0 0 11 19c0 11.8 13 24 13 24Z"/><circle cx="24" cy="19" r="5"/><path d="M16 42h16"/></svg>,
  Whatsapp: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 22a10 10 0 01-5.1-1.4L2 22l1.4-4.8A10 10 0 1112 22zm0-18a8 8 0 00-6.8 12.2l.2.3-.8 2.8 2.9-.8.3.2A8 8 0 1012 4z"/></svg>,
};

/* ============ BREADCRUMB ============ */
const Breadcrumb = () => (
  <div className="breadcrumb">
    <div className="container">
      <a href={ROUTES.home}>Home</a>
      <span className="sep">›</span>
      <span>Products</span>
      <span className="sep">›</span>
      <span className="cur">Plywood</span>
    </div>
  </div>
);

/* ============ HERO ============ */
const PlyHero = () => (
  <section className="ply-hero">
    <div className="wood-grain-bg"/>
    <div className="container">
      <div className="ply-hero-grid">
        <div className="ply-hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow">Pentagon Plywood Range</span>
          </div>
          <h1 className="h-display ply-hero-title">
            Plywood built for<br/>
            <em className="italic-em">how you use it.</em>
          </h1>
          <p className="ply-hero-copy">
            Compare MR Grade and Marine Plywood by application, moisture exposure and performance not only by thickness.
          </p>
          <div className="ply-hero-actions">
            <a href="#range" className="btn btn-primary">Explore the range <P.Arr/></a>
            <a href="#enquiry" className="btn btn-ghost">Discuss your requirement →</a>
          </div>

          <div className="ply-hero-quick">
            <div className="ply-hero-quick-item">
              <span className="lbl">Grades</span>
              <span className="val">MR &amp; Marine</span>
            </div>
            <div className="ply-hero-quick-item">
              <span className="lbl">Thicknesses</span>
              <span className="val">From 4 to 18 mm</span>
            </div>
            <div className="ply-hero-quick-item">
              <span className="lbl">Sheet Sizes</span>
              <span className="val">Standard IS</span>
            </div>
            <div className="ply-hero-quick-item">
              <span className="lbl">Manufactured</span>
              <span className="val">Yamunanagar</span>
            </div>
          </div>
        </div>
        <div className="ply-hero-visual">
          <div className="ply-hero-img ply-hero-img-a">
            <img src={MRPlywood} alt="MR Grade plywood sheets for indoor furniture" />
            <span className="ply-hero-tag">IS 303 · MR Grade</span>
          </div>
          <div className="ply-hero-img ply-hero-img-b">
            <img src={MarinePlywood} alt="Marine plywood sheets for moisture-prone applications" />
            <span className="ply-hero-tag">IS 710 · Marine</span>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-side-meta">Vol. 02 · Product · Plywood</div>
  </section>
);

/* ============ RANGE SELECTION ============ */
const PlyRange = () => (
  <section id="range" className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow">Choose by Application</div>
          <h2 className="h-section">Not every project needs the <em className="italic-em">same grade</em> of plywood.</h2>
        </div>
        <p className="lede">
          An indoor wardrobe has different requirements from a kitchen cabinet or a project exposed to changing humidity. We offer two plywood categories so you can select according to where the material will be used not simply by its thickness.
        </p>
      </div>

      <div className="range-grid">
        <div className="range-card">
          <div className="range-img">
            <img src={MRPlywood} alt="MR Grade plywood sheet stack" loading="lazy" />
            <span className="product-image-label">Interior grade · IS 303</span>
          </div>
          <div className="range-body">
            <div className="range-tag">01 · Interior Grade · IS 303</div>
            <h3 className="range-name">MR Grade Plywood</h3>
            <p className="range-desc">For indoor furniture and interior applications with limited moisture exposure.</p>
            <div className="range-facts"><span><small>Environment</small>Dry interiors</span><span><small>Thickness</small>4–18 mm</span></div>
            <div className="range-suited">
              <div className="range-suited-lbl">Best suited for</div>
              <ul>
                <li><P.Check/> Wardrobes</li>
                <li><P.Check/> Beds and tables</li>
                <li><P.Check/> Shelves</li>
                <li><P.Check/> Office furniture</li>
                <li><P.Check/> Interior partitions</li>
              </ul>
            </div>
            <a href="#mr-grade" className="btn btn-outline">Explore MR Grade Plywood <P.Arr/></a>
          </div>
        </div>

        <div className="range-card range-card-flagship">
          <div className="range-flag">Flagship</div>
          <div className="range-img">
            <img src={MarinePlywood} alt="Marine plywood sheet stack" loading="lazy" />
            <span className="product-image-label">Marine grade · IS 710</span>
          </div>
          <div className="range-body">
            <div className="range-tag">02 · Marine Grade · IS 710</div>
            <h3 className="range-name">Marine Plywood</h3>
            <p className="range-desc">For more demanding applications where moisture, humidity or changing conditions are greater concerns.</p>
            <div className="range-facts"><span><small>Environment</small>Wet &amp; humid</span><span><small>Thickness</small>4–18 mm</span></div>
            <div className="range-suited">
              <div className="range-suited-lbl">Best suited for</div>
              <ul>
                <li><P.Check/> Kitchen furniture</li>
                <li><P.Check/> Moisture-prone interiors</li>
                <li><P.Check/> Commercial furniture</li>
                <li><P.Check/> High-usage installations</li>
                <li><P.Check/> Projects facing fluctuating conditions</li>
              </ul>
            </div>
            <a href="#marine" className="btn btn-primary">Explore Marine Plywood <P.Arr/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ COMPARISON ============ */
const compareRows = [
  ["Grade type", "Interior-grade plywood", "Marine-grade plywood"],
  ["Applicable standard", "IS 303", "IS 710"],
  ["Moisture performance", "Moisture resistant, not waterproof", "Made for greater exposure to moisture and humidity"],
  ["Recommended environment", "Indoor and relatively dry spaces", "Humid and moisture-prone conditions"],
  ["Common uses", "Wardrobes, beds, shelves and office furniture", "Kitchens, demanding furniture and commercial applications"],
  ["Thicknesses", "4, 6, 9, 12, 15 and 18 mm", "4, 6, 9, 12, 15 and 18 mm"],
  ["Minimum order", "50 pieces", "50 pieces"],
];
const Compare = () => {
  const [active, setActive] = React.useState(null); // null | 'mr' | 'marine'  (mobile tab)
  return (
    <section id="compare" className="section compare-section">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">MR or Marine?</div>
            <h2 className="h-section">Choose according to the <em className="italic-em">conditions</em> your project will face.</h2>
          </div>
          <p className="lede">
            A side-by-side of the two Pentagon plywood grades. Use it to specify the right board for the room  not just the right thickness for the job.
          </p>
        </div>

        <div className="compare-tabs">
          <button className={`compare-tab ${active === 'mr' || active === null ? 'active' : ''}`} onClick={() => setActive('mr')}>MR Grade</button>
          <button className={`compare-tab ${active === 'marine' ? 'active' : ''}`} onClick={() => setActive('marine')}>Marine</button>
        </div>

        <div className={`compare-table active-${active || 'both'}`}>
          <div className="compare-row compare-head">
            <div className="compare-cell compare-label"></div>
            <div className="compare-cell compare-mr">
              <div className="compare-h">
                <div className="compare-h-tag">Interior · IS 303</div>
                <div className="compare-h-name">MR Grade Plywood</div>
              </div>
            </div>
            <div className="compare-cell compare-marine">
              <div className="compare-h">
                <div className="compare-h-tag">Marine · IS 710</div>
                <div className="compare-h-name">Marine Plywood</div>
                <span className="compare-h-flag">Flagship</span>
              </div>
            </div>
          </div>
          {compareRows.map(([label, mr, marine], i) => (
            <div className="compare-row" key={i}>
              <div className="compare-cell compare-label">{label}</div>
              <div className="compare-cell compare-mr">{mr}</div>
              <div className="compare-cell compare-marine">{marine}</div>
            </div>
          ))}
          <div className="compare-row compare-actions">
            <div className="compare-cell compare-label"></div>
            <div className="compare-cell compare-mr">
              <a href="#mr-grade" className="btn btn-outline">View MR range <P.Arr/></a>
            </div>
            <div className="compare-cell compare-marine">
              <a href="#marine" className="btn btn-primary">View Marine range <P.Arr/></a>
            </div>
          </div>
        </div>

        <div className="compare-note">
          <div className="compare-note-inner">
            <P.Info/>
            <div>
              <strong>Still unsure?</strong> Tell us what you are building, where it will be installed and the quantity you require. Our team will help you identify a suitable option.
            </div>
            <a href="#enquiry" className="btn btn-ghost">Help me choose →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ PRODUCT DEEP DIVE (MR & Marine share layout) ============ */
const ProductDetail = ({
  id,
  side,
  tag,
  title,
  desc,
  uses,
  highlights,
  specs,
  cta1,
  cta2,
  note,
  flagship,
  heroImage,
  edgeImage,
  surfaceImage,
}) => (
  <section
    id={id}
    className={`section product-detail ${flagship ? "is-flagship" : ""}`}
  >
    <div className="container">
      <div className="pd-head">
        <div className="pd-head-left">
          <div className="pd-tag">{tag}</div>
          <h2 className="h-section pd-title">{title}</h2>
        </div>
        <div className="pd-head-right">
          {desc.map((p, i) => (
            <p className="lede" key={i} style={{ marginBottom: 16 }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="pd-body">
        <div className="pd-visual">
          <div className="pd-img-main">
            <div className="pd-image" data-label={`${side} plywood · hero`}>
              <img
                src={heroImage}
                alt={`${side} plywood application`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="pd-img-row">
            <div className="pd-img-sm">
              <div className="pd-image" data-label="edge · cross-section">
                <img
                  src={edgeImage}
                  alt={`${side} plywood veneer edge cross-section`}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pd-img-sm">
              <div className="pd-image" data-label="surface · polished">
                <img
                  src={surfaceImage}
                  alt={`${side} plywood polished surface texture`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {note && (
            <div className="pd-note">
              <div className="pd-note-title">{note.title}</div>
              <div className="pd-note-body">{note.body}</div>
            </div>
          )}
        </div>

        <div className="pd-details">
          <div className="pd-section">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Where you can use it
            </div>
            <div className="pd-uses">
              {uses.map((u, i) => (
                <div className="pd-use" key={i}>
                  <P.Check />
                  {u}
                </div>
              ))}
            </div>
          </div>

          <div className="pd-section">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Product highlights
            </div>
            <ul className="pd-highlights">
              {highlights.map((h, i) => (
                <li key={i}>
                  <span className="n">0{i + 1}</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="pd-section">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Specifications
            </div>
            <table className="pd-spec-table">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={i}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pd-cta-row">
            <a href="#enquiry" className="btn btn-primary">
              {cta1} <P.Arr />
            </a>
            <a href="#enquiry" className="btn btn-outline">
              {cta2} <P.Arr />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MRDetail = () => (
  <ProductDetail
    id="mr-grade"
    side="MR"
    heroImage={BedroomApplication}
    edgeImage={MREdge}
    surfaceImage={MRSurface}
    tag="Interior Grade · IS 303"
    title={<>A practical foundation for <em className="italic-em">everyday</em> interior furniture.</>}
    desc={[
      "MR stands for Moisture Resistant. Commonly known as commercial plywood in India, MR Grade Plywood is intended for indoor furniture and interior applications.",
      "It offers resistance to normal moisture and humidity encountered indoors, but it should not be treated as completely waterproof. Its internal construction makes it a practical material for furniture, storage and interior installations in relatively dry areas."
    ]}
    uses={[
      "Wardrobes and cabinets",
      "Beds and side tables",
      "Bookshelves and storage units",
      "Office desks and furniture",
      "Wall panelling",
      "Indoor partitions",
      "General home furniture",
    ]}
    highlights={[
      "Made for interior applications",
      "Moisture-resistant grade",
      "Plain surface with polished finishing",
      "Suitable for home and office furniture",
      "Multiple thickness options",
      "Conforms to IS 303, subject to certificate verification",
    ]}
    specs={[
      ["Product", "MR Grade Plywood"],
      ["Also known as", "Commercial Plywood"],
      ["Country of origin", "India"],
      ["Standard", "IS 303"],
      ["Application", "Furniture and interior use"],
      ["Pattern", "Plain"],
      ["Finish", "Polished"],
      ["Thicknesses", "4, 6, 9, 12, 15 and 18 mm"],
      ["Sheet sizes", "8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft"],
      ["Minimum order", "50 pieces"],
      ["Business supply", "Manufacturer, exporter, supplier and retailer"],
    ]}
    cta1="View MR Grade Plywood"
    cta2="Request MR Plywood Quote"
    note={{
      title: "Moisture resistant does not mean waterproof.",
      body: "MR Grade Plywood can handle normal indoor humidity and occasional moisture, but it is not recommended for areas that experience frequent water contact or prolonged dampness."
    }}
  />
);

const MarineDetail = () => (
  <ProductDetail
    id="marine"
    side="Marine"
    heroImage={MarineApplication}
    edgeImage={MarineEdge}
    surfaceImage={MarineSurface}
    tag="Marine Grade · IS 710"
    title={<>Made for projects that face <em className="italic-em">more demanding</em> conditions.</>}
    desc={[
      "When a project may experience greater humidity, changing weather or repeated moisture exposure, the plywood behind it needs to be selected accordingly.",
      "Pentagon Marine Plywood is manufactured from hardwood veneers bonded with phenol-formaldehyde resin under high temperature and pressure. This construction is intended to provide stronger bonding and improved stability under demanding conditions.",
      "It is suited to projects where resistance to humidity, alternating wet and dry conditions, load and regular use are important considerations."
    ]}
    uses={[
      "Kitchen cabinets and furniture",
      "Moisture-prone interior areas",
      "Commercial furniture",
      "High-usage storage units",
      "Interior projects in humid regions",
      "Furniture requiring stronger bonding",
      "Selected coastal-area applications",
    ]}
    highlights={[
      "Designed for humid and demanding conditions",
      "Hardwood veneer construction",
      "Phenol-formaldehyde resin bonding",
      "High-pressure manufacturing",
      "Intended to offer dimensional stability",
      "Multiple thickness options",
      "Conforms to IS 710, subject to certificate verification",
    ]}
    specs={[
      ["Product", "Marine Plywood"],
      ["Country of origin", "India"],
      ["Standard", "IS 710"],
      ["Application", "Furniture and moisture-prone interior use"],
      ["Pattern", "Plain"],
      ["Finish", "Polished"],
      ["Thicknesses", "4, 6, 9, 12, 15 and 18 mm"],
      ["Sheet sizes", "8×4, 8×3, 7×4, 7×3, 6×4 and 6×3 ft"],
      ["Minimum order", "50 pieces"],
      ["Business supply", "Manufacturer, exporter, supplier and retailer"],
    ]}
    cta1="View Marine Plywood"
    cta2="Request Marine Plywood Quote"
    note={{
      title: "Designed for demanding conditions.",
      body: "Marine Plywood is engineered for applications where greater resistance to moisture, humidity and changing environmental conditions is required not a claim of universal waterproofing."
    }}
    flagship={true}
  />
);

/* ============ THICKNESS GUIDE ============ */
const thickRows = [
  ["4 mm",  "Back panels, decorative work and lightweight lining", "light"],
  ["6 mm",  "Drawer bottoms, cabinet backs and lightweight panels", "light"],
  ["9 mm",  "Panelling, partitions and selected furniture components", "med"],
  ["12 mm", "Cabinets, shelves and medium-duty furniture components", "med"],
  ["15 mm", "Furniture bodies, storage units and stronger panels", "heavy"],
  ["18 mm", "Wardrobes, beds, tables, shelves and load-bearing furniture", "heavy"],
];
const ThicknessGuide = () => (
  <section className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow">Choose the Right Thickness</div>
          <h2 className="h-section">Strength also depends on how the plywood will be <em className="italic-em">used.</em></h2>
        </div>
        <p className="lede">
          The appropriate thickness depends on span, load, support structure, hardware and furniture design. Use this as an initial guide and confirm final selection with your furniture maker, architect or project professional.
        </p>
      </div>

      <div className="thick-viz">
        <div className="thick-head" aria-hidden="true">
          <span>Thickness</span>
          <span>Relative strength / application range</span>
          <span>Typical applications</span>
          <span>Duty level</span>
        </div>
        {thickRows.map(([mm, desc, weight], i) => (
          <div className={`thick-row weight-${weight}`} key={i}>
            <div className="thick-mm">{mm}</div>
            <div className="thick-bar">
              <div className="thick-bar-fill" style={{width: `${(parseInt(mm)/18)*100}%`}}/>
              <div className="thick-slice"/>
            </div>
            <div className="thick-desc">{desc}</div>
            <div className="thick-weight">
              {weight === 'light' && 'Light-duty'}
              {weight === 'med' && 'Medium-duty'}
              {weight === 'heavy' && 'Heavy-duty'}
            </div>
          </div>
        ))}
      </div>

      <div className="thick-note">
        <P.Info/>
        <span>These are general application examples, not structural recommendations. The final thickness should be selected according to the design and load requirements.</span>
        <a href="#enquiry" className="btn btn-ghost">Ask about size & thickness →</a>
      </div>
    </div>
  </section>
);

/* ============ APPLICATION SECTION ============ */
const plyApps = [
  { name: "Wardrobes", rec: "MR Grade", desc: "Can be considered for wardrobes and storage furniture in dry indoor areas.", ph: "wardrobe · interior", image: WardrobeApplication, alt: "Contemporary wardrobe with sliding doors" },
  { name: "Kitchens", rec: "Marine", desc: "More suitable where humidity, spills and moisture exposure are greater concerns.", ph: "kitchen · cabinetry", image: KitchenApplication, alt: "Modern kitchen with cabinets and island" },
  { name: "Home Furniture", rec: "Grade varies", desc: "Select the grade and thickness according to furniture type, expected load and room conditions.", ph: "living room · furniture", image: LivingRoomApplication, alt: "Contemporary living room with furniture" },
  { name: "Office Furniture", rec: "MR Grade", desc: "Plywood for desks, cabinets, partitions and everyday commercial use.", ph: "office · workstations", image: OfficeApplication, alt: "Modern office with desks and partitions" },
  { name: "Retail & Commercial", rec: "Grade varies", desc: "Choose according to usage intensity, installation conditions and required performance.", ph: "retail interior", image: RetailApplication, alt: "Retail store interior with shelves and displays" },
  { name: "Moisture-Prone Spaces", rec: "Marine", desc: "Consider Marine Plywood where the application may experience higher humidity or changing moisture.", ph: "bathroom · vanity", image: BathroomApplication, alt: "Modern bathroom with vanity and mirror" },
];
const PlyApps = () => (
  <section className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow">From Sheet to Space</div>
          <h2 className="h-section">
            What will your plywood <em className="italic-em">become?</em>
          </h2>
        </div>
        <p className="lede">
          The right plywood is selected by understanding the finished
          application. Start with what you are creating, then consider moisture
          exposure, expected load, usage and finish.
        </p>
      </div>
      <div className="ply-app-grid">
        {plyApps.map((a, i) => (
          <div className="ply-app-card" key={i}>
            <div className="ply-app-img">
              <div className="pd-image" data-label={a.ph} >
              {a.image ? (
                <img src={a.image} alt={a.alt} loading="lazy" />
              ) : (
                <div className="ph" aria-hidden="true" />
              )}
                </div>
            </div>
            <div className="ply-app-body">
              <div className="ply-app-rec">
                Recommended · <strong>{a.rec}</strong>
              </div>
              <h4 className="ply-app-name">{a.name}</h4>
              <p className="ply-app-desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <a href="/#applications" className="btn btn-outline">
          Explore plywood by application <P.Arr />
        </a>
      </div>
    </div>
  </section>
);

/* ============ STANDARDS ============ */
const Standards = () => (
  <section className="section" style={{background: 'var(--dark-panel)', color: 'var(--dark-panel-ink)'}}>
    <div className="container">
      <div className="sec-head-single" style={{maxWidth: 780}}>
        <div className="eyebrow" style={{marginBottom: 20, color: 'color-mix(in oklab, var(--dark-panel-ink) 60%, transparent)'}}>Know What You're Choosing</div>
        <h2 className="h-section" style={{color: 'var(--dark-panel-ink)'}}>IS 303 and IS 710 serve <em className="italic-em">different</em> requirements.</h2>
      </div>

      <div className="standards-grid">
        <div className="standard-card">
          <div className="standard-code">IS<br/>303</div>
          <div className="standard-body">
            <h3>General-purpose plywood</h3>
            <p>Used for general-purpose plywood categories, including MR-grade plywood intended primarily for interior applications.</p>
            <div className="standard-meta">
              <span>Category</span><strong>Interior Grade</strong>
              <span>Bonding</span><strong>Urea-formaldehyde</strong>
              <span>Common use</span><strong>Furniture & interiors</strong>
            </div>
          </div>
        </div>

        <div className="standard-card">
          <div className="standard-code">IS<br/>710</div>
          <div className="standard-body">
            <h3>Marine-grade plywood</h3>
            <p>Associated with marine plywood designed for more demanding moisture and water-resistance requirements.</p>
            <div className="standard-meta">
              <span>Category</span><strong>Marine Grade</strong>
              <span>Bonding</span><strong>Phenol-formaldehyde</strong>
              <span>Common use</span><strong>Kitchens & humid areas</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="standards-note">
        <p>The standard is not simply a label. It helps identify the product category and the conditions for which it is intended. Always select according to the actual application.</p>
        <a href="/#resources" className="btn btn-outline" style={{color: 'var(--dark-panel-ink)', boxShadow: 'inset 0 0 0 1px color-mix(in oklab, var(--dark-panel-ink) 50%, transparent)'}}>Learn more about plywood grades <P.Arr/></a>
      </div>
    </div>
  </section>
);

/* ============ WHY PENTAGON ============ */
const whyPly = [
  { n: "01", icon: <P.Drop/>, t: "Choices for different conditions", p: "Select between interior-grade MR Plywood and Marine Plywood for more demanding environments." },
  { n: "02", icon: <P.Layers/>, t: "Multiple sizes and thicknesses", p: "Choose from commonly used sheet formats and thicknesses ranging from 4 mm to 18 mm." },
  { n: "03", icon: <P.Clipboard/>, t: "Clear product guidance", p: "Tell us the application, quantity and location so our team can understand your requirement." },
  { n: "04", icon: <P.Pin/>, t: "Manufactured in Yamunanagar", p: "Our plywood range comes from one of India's established wood-products manufacturing regions." },
];
const WhyPly = () => (
  <section className="section why-ply-section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow">Behind Every Sheet</div>
          <h2 className="h-section">Because your finished work depends on what goes <em className="italic-em">underneath.</em></h2>
        </div>
        <p className="lede">
          Once plywood becomes part of a finished piece of furniture, much of it is no longer visible. But its grade, thickness, bonding and suitability continue to influence how that furniture performs.
        </p>
      </div>
      <div className="why-grid">
        {whyPly.map((w, i) => (
          <div className="why-item" key={i}>
            <div className="why-item-top">
              <div className="n">{w.n}</div>
              <div className="why-icon" aria-hidden="true">{w.icon}</div>
            </div>
            <div className="why-item-copy">
              <h3>{w.t}</h3>
              <p>{w.p}</p>
            </div>
            {/* <span className="why-card-arrow" aria-hidden="true"><P.Arr/></span> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ BULK ENQUIRY ============ */
const bulkOpts = [
  "Dealer or distributor requirement",
  "Furniture manufacturing",
  "Interior or commercial project",
  "Bulk product requirement",
  "Export enquiry",
  "General product enquiry",
];
const Bulk = () => (
  <section className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="bulk-grid">
        <div>
          <div className="eyebrow" style={{marginBottom: 24}}>For Dealers, Furniture Makers & Projects</div>
          <h2 className="h-section">Need plywood for<br/><em className="italic-em">more than one</em> project? Let's talk.</h2>
          <p className="lede" style={{marginTop: 24}}>
            Whether you are sourcing for resale, furniture production, interior work or a commercial requirement, share the product, thickness, quantity and delivery location with us.
          </p>
          <div style={{display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap'}}>
            <a href="#enquiry" className="btn btn-primary">Request a bulk quote <P.Arr/></a>
            <a href="#enquiry" className="btn btn-outline">Call or WhatsApp us <P.Arr/></a>
          </div>
        </div>
        <div className="bulk-opts">
          <div className="bulk-opts-lbl">Enquiry options</div>
          <div className="bulk-opts-list">
            {bulkOpts.map((o, i) => (
              <div className="bulk-opt" key={i}>
                <span className="n">0{i+1}</span>
                <strong>{o}</strong>
                <span className="arr">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FAQ ============ */
const faqs = [
  { q: "What does MR Grade Plywood mean?", a: "MR means Moisture Resistant. It is commonly called commercial plywood and is generally used for indoor furniture and interior applications." },
  { q: "Is MR Grade Plywood waterproof?", a: "No. MR Plywood can resist normal indoor moisture and humidity, but it is not designed for prolonged or repeated water exposure." },
  { q: "When should I consider Marine Plywood?", a: "Marine Plywood should be considered when an application may face greater humidity, moisture or alternating wet and dry conditions." },
  { q: "What is the difference between IS 303 and IS 710?", a: "IS 303 applies to general-purpose plywood categories such as MR Grade Plywood, while IS 710 applies to marine-grade plywood intended for more demanding moisture conditions." },
  { q: "Which plywood is suitable for wardrobes?", a: "MR Grade Plywood can be suitable for wardrobes in relatively dry indoor areas. The thickness should be selected according to the wardrobe design and expected load." },
  { q: "Which plywood should I use for kitchen cabinets?", a: "Marine Plywood may be the more suitable category for kitchen furniture because kitchens can experience humidity, spills and moisture. Final selection should account for installation conditions and budget." },
  { q: "Which thicknesses are available?", a: "The currently listed thicknesses are 4, 6, 9, 12, 15 and 18 mm." },
  { q: "What is the minimum order quantity?", a: "The currently listed minimum order quantity is 50 pieces. Please confirm with our team whether this applies equally to every thickness and sheet size." },
];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Frequently Asked</div>
            <h2 className="h-section">Questions we<br/>get <em className="italic-em">most.</em></h2>
          </div>
          <p className="lede">
            The most common questions from architects, interior designers, contractors and homeowners about MR and Marine plywood answered straight, without the marketing gloss.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-n">Q.{String(i+1).padStart(2, '0')}</span>
                <span className="faq-text">{f.q}</span>
                <span className="faq-icon">{open === i ? <P.Minus/> : <P.Plus/>}</span>
              </button>
              {open === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ FINAL ENQUIRY (specialized for plywood) ============ */
const PlyEnquiry = () => (
  <section id="enquiry" className="section" style={{background: 'var(--bg-deep)'}}>
    <div className="container">
      <div className="enquiry-grid">
        <div className="enquiry-left">
          <div className="eyebrow" style={{marginBottom: 24}}>Let's find your plywood</div>
          <h2 className="h-section">Tell us where you'll use it.<br/>We'll help you start with the <em className="italic-em">right grade.</em></h2>
          <p className="lede" style={{marginTop: 24}}>
            Share your application, preferred thickness, required quantity and delivery location. Our team will contact you to discuss availability and the next step.
          </p>
          {/* <div className="contact-block">
            <div className="contact-item">
              <span className="lbl">Location</span>
              <span className="val">Khajuri, Yamunanagar<small>Haryana · India</small></span>
            </div>
            <div className="contact-item">
              <span className="lbl">Phone</span>
              <span className="val">+91 7206 104 340<small>Also: +91 1732 239 416</small></span>
            </div>
            <div className="contact-item">
              <span className="lbl">Email</span>
              <span className="val">pentagonplywood<br/>@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="lbl">Prefer chat?</span>
              <span className="val">WhatsApp our team<small>Instant reply, weekdays 9am – 7pm IST</small></span>
            </div>
          </div> */}
        </div>
        <div>
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="field"><label>Name</label><input placeholder="Your full name"/></div>
              <div className="field"><label>Company (optional)</label><input placeholder="Firm / company name"/></div>
            </div>
            <div className="form-row">
              <div className="field"><label>Phone number</label><input placeholder="+91 · · · · ·"/></div>
              <div className="field"><label>Email</label><input placeholder="you@company.com"/></div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>I am a</label>
                <select><option>Homeowner / Retail buyer</option><option>Architect / Interior designer</option><option>Contractor</option><option>Dealer / Distributor</option><option>Furniture manufacturer</option><option>Project / Bulk buyer</option><option>Export enquiry</option></select>
              </div>
              <div className="field">
                <label>Grade</label>
                <select><option>MR Grade Plywood (IS 303)</option><option>Marine Plywood (IS 710)</option><option>Not sure; please advise</option></select>
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Required thickness</label>
                <select><option>4 mm</option><option>6 mm</option><option>9 mm</option><option>12 mm</option><option>15 mm</option><option>18 mm</option><option>Multiple</option></select>
              </div>
              <div className="field">
                <label>Sheet size</label>
                <select><option>8×4 ft</option><option>8×3 ft</option><option>7×4 ft</option><option>7×3 ft</option><option>6×4 ft</option><option>6×3 ft</option><option>Multiple</option></select>
              </div>
            </div>
            <div className="form-row">
              <div className="field"><label>Quantity (pcs, min. 50)</label><input placeholder="e.g. 200"/></div>
              <div className="field"><label>City & state</label><input placeholder="e.g. Chandigarh, Punjab"/></div>
            </div>
            <div className="field">
              <label>Application</label>
              <input placeholder="e.g. modular kitchen cabinetry, wardrobe production, showroom fit-out"/>
            </div>
            <div className="field">
              <label>Additional message</label>
              <textarea placeholder="Timeline, site conditions, past orders anything that helps us advise you better…"/>
            </div>
            <div style={{display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap'}}>
              <button type="submit" className="btn btn-primary">Send my requirement <P.Arr/></button>
              <a href="#" className="btn btn-ghost">Or call / WhatsApp our team →</a>
            </div>
            <div className="form-note">
              Prefer a direct conversation? Call or WhatsApp our team.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const PlyWhatsapp = () => (
  <a href="#" className="whatsapp-float" aria-label="Chat on WhatsApp">
    <P.Whatsapp/>
  </a>
);

/* ============ PAGE ROOT ============ */
function PlywoodPage() {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', 'cream');
    document.title = 'Plywood Products | Pentagon Plywood';
  }, []);
  return (
    <>
      <Breadcrumb/>
      <PlyHero/>
      <PlyRange/>
      <Compare/>
      <MRDetail/>
      <MarineDetail/>
      <ThicknessGuide/>
      <PlyApps/>
      <Standards/>
      <WhyPly/>
      <Bulk/>
      <FAQ/>
      <PlyEnquiry/>
      <PlyWhatsapp/>
    </>
  );
}

export default PlywoodPage;
