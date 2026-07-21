/* Pentagon Plywood — Homepage Components */

import React from 'react';

/* ============ ICONS ============ */
const Icon = {
  Chev: () => <svg viewBox="0 0 12 12" className="chev" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4l4 4 4-4"/></svg>,
  Arr: () => <svg className="arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  Pentagon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M12 3l9 6.5-3.4 10.5H6.4L3 9.5 12 3z"/></svg>,
  Kitchen: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="8" y="8" width="32" height="32" /><line x1="8" y1="20" x2="40" y2="20"/><line x1="24" y1="8" x2="24" y2="20"/><circle cx="16" cy="30" r="1.5" fill="currentColor"/><circle cx="32" cy="30" r="1.5" fill="currentColor"/></svg>,
  Wardrobe: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="10" y="6" width="28" height="36"/><line x1="24" y1="6" x2="24" y2="42"/><circle cx="21" cy="24" r="1" fill="currentColor"/><circle cx="27" cy="24" r="1" fill="currentColor"/></svg>,
  Door: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="12" y="6" width="24" height="36"/><circle cx="30" cy="24" r="1.5" fill="currentColor"/></svg>,
  Office: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="14" width="36" height="24"/><rect x="14" y="20" width="8" height="6"/><rect x="26" y="20" width="8" height="6"/><line x1="14" y1="30" x2="34" y2="30"/></svg>,
  Bath: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 26h36v6a4 4 0 01-4 4H10a4 4 0 01-4-4v-6z"/><path d="M14 26v-8a4 4 0 018 0"/><line x1="10" y1="36" x2="10" y2="40"/><line x1="38" y1="36" x2="38" y2="40"/></svg>,
  Retail: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 16l4-8h28l4 8"/><rect x="6" y="16" width="36" height="24"/><path d="M14 24v-4a4 4 0 018 0v4"/></svg>,
  Outdoor: () => <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 40l16-30 16 30"/><path d="M16 40v-8h16v8"/></svg>,
  Water: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z"/></svg>,
  Shield: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>,
  Beam: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="9" width="20" height="6"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="6" y1="9" x2="6" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="18" y1="9" x2="18" y2="15"/></svg>,
  Leaf: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 4c0 10-6 16-16 16 0-10 6-16 16-16z"/><path d="M4 20L14 10"/></svg>,
  Whatsapp: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 22a10 10 0 01-5.1-1.4L2 22l1.4-4.8A10 10 0 1112 22zm0-18a8 8 0 00-6.8 12.2l.2.3-.8 2.8 2.9-.8.3.2A8 8 0 1012 4z"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.9v3a2 2 0 01-2.2 2 20 20 0 01-8.6-3.1 19.5 19.5 0 01-6-6A20 20 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.7.6 2.5a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.7.5 2.5.6a2 2 0 011.7 2z"/></svg>,
  Pin: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="1"/><path d="M2 6l10 8 10-8"/></svg>,
};

/* ============ HEADER ============ */
const Header = () => (
  <header className="header">
    <div className="topbar">
      <div className="container topbar-inner">
        <span>Manufacturer &amp; Supplier · Yamunanagar · Since 1997</span>
        <div>
          <a href="mailto:pentagonplywood@gmail.com">pentagonplywood@gmail.com</a>
          <a href="tel:+917206104340">+91 7206 104 340</a>
        </div>
      </div>
    </div>
    <div className="container header-inner">
      <a href="#" className="brand">
        <div className="brand-mark"><Icon.Pentagon/></div>
        <div className="brand-name">
          Pentagon
          <small>Plywood · Est. 1997</small>
        </div>
      </a>
      <nav className="nav">
        <a href="#about">About <Icon.Chev/></a>
        <a href="#products">Products <Icon.Chev/></a>
        <a href="#applications">Applications</a>
        <a href="#manufacturing">Manufacturing</a>
        <a href="#quality">Quality</a>
        <a href="#resources">Resources <Icon.Chev/></a>
        <a href="#dealers">Dealers</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-cta">
        <div className="header-phone">
          <small>Sales enquiries</small>
          <strong>+91 7206 104 340</strong>
        </div>
        <a href="#enquiry" className="btn btn-primary">Request a Quote <Icon.Arr/></a>
      </div>
    </div>
  </header>
);

/* ============ HERO ============ */
const Hero = () => (
  <section className="hero">
    <div className="wood-grain-bg"/>
    <div className="container">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="rule"/>
            <span className="eyebrow">Pentagon Plywood · Yamunanagar · Since 1997</span>
          </div>
          <h1 className="h-display hero-title">
            <span className="line">Crafting</span>
            <span className="line accent-em">excellence,</span>
            <span className="line">building trust.</span>
          </h1>
          <div className="hero-caption-row">
            <p className="hero-caption">
              Premium manufacturing of unmatched plywood, blockboards and doors engineered for India's finest interiors, three decades in the making.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">Explore our products <Icon.Arr/></a>
              <a href="#enquiry" className="btn btn-ghost">Request a quote →</a>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-image-wrap">
            <img src="client\assets\hero.png" alt="Warm interior with plywood cabinetry"/>
            <div className="hero-image-tag">
              <span className="badge">Escotel Marine · Kitchen</span>
              <span>Fig. 01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-side-meta">Vol. 01 · Homepage · 2026</div>
  </section>
);

/* ============ TRUST STRIP ============ */
const Trust = () => (
  <section className="trust-strip">
    <div className="container">
      <div className="trust-row">
        <div className="trust-item">
          <div className="trust-num">1997</div>
          <div className="trust-lbl"><strong>Est. Yamunanagar</strong>Nearly three decades of plywood manufacturing legacy</div>
        </div>
        <div className="trust-item">
          <div className="trust-num">200</div>
          <div className="trust-lbl"><strong>Skilled Team</strong>Experienced people supporting manufacturing and supply</div>
        </div>
        <div className="trust-item">
          <div className="trust-num">ISO</div>
          <div className="trust-lbl"><strong>Quality Driven</strong>Certified processes with checks at every production stage</div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ PRODUCTS ============ */
const products = [
  { tag: "01 · Plywood", name: "Marine Plywood", desc: "Ultimate water resistance for the toughest environments — kitchens, bathrooms and outdoor joinery.", standard: "IS 710 · BWP Grade", ph: "marine plywood · cross-section" },
  { tag: "02 · Plywood", name: "MR Grade Plywood", desc: "Commercial plywood built for long-lasting premium interior woodwork and everyday joinery.", standard: "IS 303 · MR Grade", ph: "MR plywood · flat lay" },
  { tag: "03 · Boards", name: "IS 303 Blockboards", desc: "Engineered for exceptional structural integrity and high load-bearing capacity across large spans.", standard: "IS 1659 · Blockboard", ph: "blockboard · edge detail" },
  { tag: "04 · Doors", name: "Premium Doors", desc: "Waterproof flush, membrane and laminated door solutions for complete aesthetic control.", standard: "IS 2202 · Flush Door", ph: "flush door · elevation" },
];
const Products = () => (
  <section id="products" className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 03 · Product Range</div>
          <h2 className="h-section">Discover our<br/><em className="italic-em">core collection.</em></h2>
        </div>
        <p className="lede">
          A curated range of plywood, boards and doors — each engineered for a specific application and finished to a standard that outlasts trends. Every board is manufactured, pressed and inspected in-house.
        </p>
      </div>
      <div className="product-tabs" aria-label="Product categories">
        <a className="active" href="#products">All products</a>
        <a href="#products">Plywood</a>
        <a href="#products">Laminated doors</a>
        <a href="#products">Blockboards</a>
        <a href="#enquiry">Get product advice</a>
      </div>
      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="product-img"><div className="ph" data-label={p.ph}/></div>
            <div className="product-body">
              <div className="product-tag">{p.tag}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.desc}</div>
              <div className="product-standard">{p.standard}</div>
              <div className="product-actions">
                <a href="#" className="link">View product</a>
                <a href="#enquiry" className="enquire">Enquire →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: 48, textAlign: 'center'}}>
        <a href="#" className="btn btn-outline">View full catalog <Icon.Arr/></a>
      </div>
    </div>
  </section>
);

/* ============ FIND PRODUCT ============ */
const finds = [
  { icon: <Icon.Kitchen/>, title: "Modular Kitchens", rec: "Recommended", pick: "Escotel Marine · BWP" },
  { icon: <Icon.Wardrobe/>, title: "Wardrobes & Bedroom", rec: "Recommended", pick: "MR Grade · IS 303" },
  { icon: <Icon.Door/>, title: "Doors & Partitions", rec: "Recommended", pick: "Waterproof Flush" },
  { icon: <Icon.Office/>, title: "Office Interiors", rec: "Recommended", pick: "Pentagon Gold · MR" },
  { icon: <Icon.Bath/>, title: "Bathrooms & Wet Areas", rec: "Recommended", pick: "Marine · BWP Grade" },
  { icon: <Icon.Retail/>, title: "Retail & Hospitality", rec: "Recommended", pick: "Kalinga Gold · MR" },
  { icon: <Icon.Beam/>, title: "Heavy-Load Furniture", rec: "Recommended", pick: "IS 303 Blockboard" },
  { icon: <Icon.Outdoor/>, title: "Outdoor & Exposed", rec: "Recommended", pick: "Escotel Marine · BWP" },
];
const FindProduct = () => (
  <section className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="sec-head-single">
        <div className="eyebrow" style={{marginBottom: 20}}><span className="dot"/>Section 04 · Guided Selection</div>
        <h2 className="h-section">What are you <em className="italic-em">building?</em></h2>
        <p className="lede" style={{margin: '24px auto 0'}}>
          Tell us the space, and we'll point you to the right board. A simpler way to specify plywood, from the people who make it.
        </p>
      </div>
      <div className="find-grid">
        {finds.map((f, i) => (
          <div className="find-card" key={i}>
            <div className="find-icon">{f.icon}</div>
            <div>
              <div className="find-title">{f.title}</div>
            </div>
            <div className="find-rec">
              {f.rec}
              <strong>{f.pick}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ BRANDS ============ */
const brands = [
  { name: "Pentagon", sub: "Gold", meta: "Premium · BWR Plywood", tier: "premium", tierLbl: "Flagship" },
  { name: "Kalinga", sub: "Gold", meta: "Premium · MR Plywood", tier: "premium", tierLbl: "Premium" },
  { name: "Escotel", sub: "Marine", meta: "Elite · BWP Marine", tier: "premium", tierLbl: "Flagship" },
  { name: "Black", sub: "Steel", meta: "Value · Commercial", tier: "", tierLbl: "Value" },
  { name: "Essar", sub: "", meta: "Value · MR Plywood", tier: "", tierLbl: "Value" },
  { name: "HIT", sub: "", meta: "Economy · Commercial", tier: "", tierLbl: "Economy" },
  { name: "Safari", sub: "", meta: "Economy · MR Grade", tier: "", tierLbl: "Economy" },
  { name: "Supremoo", sub: "Plus", meta: "Value · Blockboard", tier: "", tierLbl: "Value" },
];
const Brands = () => (
  <section className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 05 · Signature Ranges</div>
          <h2 className="h-section">Eight brands.<br/><em className="italic-em">One standard.</em></h2>
        </div>
        <p className="lede">
          From economy to elite marine grade — every Pentagon brand is manufactured in the same Yamunanagar facility, held to the same quality benchmark, and priced for the range it serves.
        </p>
      </div>
      <div className="brands-grid">
        {brands.map((b, i) => (
          <div className="brand-cell" key={i}>
            <div className="brand-logo">
              {b.name}{b.sub && <small>{b.sub}</small>}
            </div>
            <div className="brand-meta">
              <span className={`tier ${b.tier}`}>{b.tierLbl}</span><br/>
              {b.meta}
            </div>
          </div>
        ))}
      </div>

      <div className="brand-spotlight">
        <div>
          <div className="ph" data-label="escotel marine · packaging"/>
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom: 20}}><span className="dot"/>Flagship Spotlight</div>
          <h3 className="brand-spotlight-head">Escotel Marine</h3>
          <p className="brand-spotlight-lede">
            Our flagship marine-grade plywood — engineered with advanced anti-borer and termite-proof treatment for lifetime performance in kitchens, bathrooms and any surface that faces water.
          </p>
          <div className="brand-spotlight-feats">
            <div className="brand-spotlight-feat"><strong>BWP</strong><span>IS 710 Grade</span></div>
            <div className="brand-spotlight-feat"><strong>72hrs</strong><span>Boil test verified</span></div>
            <div className="brand-spotlight-feat"><strong>Lifetime</strong><span>Anti-borer treated</span></div>
            <div className="brand-spotlight-feat"><strong>Zero</strong><span>Warp guarantee</span></div>
          </div>
          <a href="#" className="btn btn-outline">Explore Escotel range <Icon.Arr/></a>
        </div>
      </div>
    </div>
  </section>
);

/* ============ WHY PENTAGON ============ */
const whys = [
  { n: "01", icon: <Icon.Water/>, t: "Waterproof at the core", p: "Advanced phenolic resins bond every layer to withstand extreme moisture — verified through 72-hour boil testing." },
  { n: "02", icon: <Icon.Shield/>, t: "Termite & borer resistant", p: "Chemically treated timber and preservative infusion at the veneer stage delivers lifetime protection against pests." },
  { n: "03", icon: <Icon.Beam/>, t: "High strength & durability", p: "Precision-pressed cores engineered to bear heavy loads without warping, sagging or delamination over decades of use." },
  { n: "04", icon: <Icon.Leaf/>, t: "Responsibly sourced", p: "Carefully selected raw materials from managed forests, with conscientious manufacturing practices at every stage." },
];
const Why = () => (
  <section className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 06 · The Pentagon Promise</div>
          <h2 className="h-section">Why interior<br/>professionals <em className="italic-em">choose us.</em></h2>
        </div>
        <p className="lede">
          Four decisions we make on every panel we press — each one measurable, testable, and non-negotiable. This is what "made in Pentagon" means.
        </p>
      </div>
      <div className="why-grid">
        {whys.map((w, i) => (
          <div className="why-item" key={i}>
            <div className="why-icon">{w.icon}</div>
            <div className="n">{w.n}</div>
            <h3>{w.t}</h3>
            <p>{w.p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ MANUFACTURING ============ */
const Manufacturing = () => (
  <section id="manufacturing" className="mfg section">
    <div className="container">
      <div className="mfg-grid">
        <div>
          <div className="mfg-img"/>
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom: 24}}><span className="dot"/>Section 07 · Manufacturing Excellence</div>
          <h2 className="h-section">Precision engineered in <em className="italic-em">Yamunanagar.</em></h2>
          <p className="lede" style={{marginTop: 32}}>
            Operating a state-of-the-art manufacturing facility in Haryana, Pentagon Plywood blends decades of craftsmanship with modern machinery. Under the leadership of CEO Mr. Anand Jain, our infrastructure allows us to meet dynamic market needs with absolute precision.
          </p>
          <div className="mfg-steps">
            <div className="mfg-step"><span className="step-num">01</span><strong>Raw material</strong>Hand-selected veneer</div>
            <div className="mfg-step"><span className="step-num">02</span><strong>Bonding</strong>Phenolic resin press</div>
            <div className="mfg-step"><span className="step-num">03</span><strong>Finishing</strong>Sanded & inspected</div>
          </div>
          <div style={{display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap'}}>
            <a href="#" className="btn btn-outline">Explore manufacturing <Icon.Arr/></a>
            <a href="#" className="btn btn-ghost" style={{color: 'var(--dark-panel-ink)', borderColor: 'var(--dark-panel-ink)'}}>Watch our process →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ QUALITY ============ */
const Quality = () => (
  <section id="quality" className="section">
    <div className="container">
      <div className="sec-head-single">
        <div className="eyebrow" style={{marginBottom: 20}}><span className="dot"/>Section 08 · Quality & Certifications</div>
        <h2 className="h-section">Uncompromising<br/><em className="italic-em">quality standards.</em></h2>
      </div>
      <div className="quality-grid">
        <div>
          <p className="lede">
            Quality is not a promise — it is a process. Every panel that leaves our factory has passed stringent inspection at raw material selection, veneer preparation, bonding, pressing and final finishing.
          </p>
          <ol className="quality-list">
            <li><span className="n">01</span><div><strong>Raw material inspection</strong><span>Every timber log is graded before it enters the peeling line.</span></div></li>
            <li><span className="n">02</span><div><strong>In-process quality checks</strong><span>Moisture content, veneer thickness and resin ratio verified at every stage.</span></div></li>
            <li><span className="n">03</span><div><strong>Finished product testing</strong><span>72-hour boil tests, load testing and finish inspection before packaging.</span></div></li>
            <li><span className="n">04</span><div><strong>Standards compliance</strong><span>Manufactured to IS 303, IS 710 and IS 2202 Bureau of Indian Standards.</span></div></li>
          </ol>
        </div>
        <div>
          <div className="cert-row">
            <div className="cert-card">
              <div className="cert-mark">ISO</div>
              <div className="cert-name">ISO 9001-2000</div>
              <div className="cert-desc">Quality management system certified</div>
            </div>
            <div className="cert-card">
              <div className="cert-mark">IS</div>
              <div className="cert-name">IS 303 · IS 710</div>
              <div className="cert-desc">Bureau of Indian Standards compliance</div>
            </div>
            <div className="cert-card">
              <div className="cert-mark">QC</div>
              <div className="cert-name">In-House Lab</div>
              <div className="cert-desc">Batch-level testing & records</div>
            </div>
          </div>
          <div style={{display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap'}}>
            <a href="#" className="btn btn-outline">View certifications <Icon.Arr/></a>
            <a href="#" className="btn btn-ghost">Learn about our quality process →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ APPLICATIONS ============ */
const apps = [
  { size: "big", label: "Residential Interiors", sub: "Kitchens · Wardrobes · Furniture", ph: "warm home interior · living room" },
  { size: "med", label: "Commercial Offices", sub: "Partitions · Workstations", ph: "modern office joinery" },
  { size: "sm", label: "Hospitality", sub: "Restaurants · Hotels", ph: "restaurant fit-out" },
  { size: "med", label: "Retail Interiors", sub: "Displays · Kiosks", ph: "retail store fit-out" },
  { size: "sm", label: "Institutional", sub: "Schools · Colleges", ph: "institutional interior" },
  { size: "wide", label: "Modular Kitchens & Baths", sub: "Wet areas · Cabinetry", ph: "modular kitchen build" },
];
const Applications = () => (
  <section id="applications" className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 09 · Applications & Industries</div>
          <h2 className="h-section">Crafted for<br/><em className="italic-em">every space.</em></h2>
        </div>
        <p className="lede">
          From residential kitchens to institutional joinery, our boards specify into the widest range of interior contexts. Every category has a grade, and every grade is engineered for it.
        </p>
      </div>
      <div className="apps-grid">
        {apps.map((a, i) => (
          <div className={`app-tile ${a.size}`} key={i}>
            <div className="app-tile-ph"><div className="ph" data-label={a.ph}/></div>
            <div className="app-tile-label"><small>{a.sub}</small>{a.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ PROJECTS ============ */
const projects = [
  { type: "Residential", loc: "Chandigarh", title: "A quiet home in the foothills.", desc: "Wardrobes and kitchen cabinetry finished with Escotel Marine BWP for a modernist bungalow.", ph: "residential interior · warm" },
  { type: "Hospitality", loc: "Delhi NCR", title: "Cafeteria fit-out, ground up.", desc: "Full interior joinery for a 60-cover café — bar, banquettes and partitions in Pentagon Gold MR.", ph: "café interior · joinery detail" },
  { type: "Commercial", loc: "Mumbai", title: "Workstations at scale.", desc: "Bulk supply of Kalinga Gold and IS 303 blockboards for a 22,000 sq ft office fit-out.", ph: "office fit-out · overview" },
];
const Projects = () => (
  <section className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 10 · Built for Every Kind of Space</div>
          <h2 className="h-section">Our plywood<br/><em className="italic-em">in action.</em></h2>
        </div>
        <p className="lede">
          A few of the interiors that Pentagon has quietly built into being — from single-home kitchens to full commercial fit-outs, across residential, hospitality and workplace projects in India.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-img"><div className="ph" data-label={p.ph}/></div>
            <div className="project-meta"><span>{p.type}</span><span>{p.loc}</span></div>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop: 60, textAlign: 'center'}}>
        <a href="#" className="btn btn-outline">View project gallery <Icon.Arr/></a>
      </div>
    </div>
  </section>
);

/* ============ DEALER ============ */
const dealerBenefits = [
  "Competitive dealer pricing across all 8 brand ranges",
  "Priority stock allocation from our Yamunanagar factory",
  "Marketing & display support for showroom partners",
  "Direct technical support for architect & project enquiries",
  "OEM and private-label options for larger partners",
];
const Dealer = () => (
  <section id="dealers" className="dealer">
    <div className="container">
      <div className="dealer-grid">
        <div>
          <div className="eyebrow" style={{marginBottom: 24}}><span className="dot"/>Section 11 · Business Partnership</div>
          <h2 className="h-section">Partner with a<br/><em className="italic-em">legacy brand.</em></h2>
          <p className="lede" style={{marginTop: 32}}>
            Join a growing network of dealers, distributors and project buyers who source directly from the factory. Whether you run a showroom, specify boards for architects, or need bulk-order pricing — we have a partnership model built for you.
          </p>
          <div className="dealer-actions">
            <a href="#enquiry" className="btn btn-accent">Become a dealer <Icon.Arr/></a>
            <a href="#enquiry" className="btn btn-outline">Discuss bulk requirement <Icon.Arr/></a>
          </div>
        </div>
        <div>
          <div className="dealer-benefits">
            {dealerBenefits.map((b, i) => (
              <div className="dealer-benefit" key={i}>
                <span className="n">0{i+1}</span>
                <strong>{b}</strong>
                <span className="arr">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ TESTIMONIALS ============ */
const testimonials = [
  { q: "Pentagon Plywood provides top-notch products at reasonable prices. Highly recommended for any serious project.", a: "Vikram Singh", r: "Interior Contractor · Delhi" },
  { q: "Remarkable product — innovative, user-friendly and reliable. The finish quality is consistent batch after batch.", a: "Shiv Kumar Yadav", r: "Furniture Manufacturer · Yamunanagar" },
  { q: "The packaging was eco-friendly, reflecting a real commitment to sustainability. Small detail, but it matters.", a: "Saurabh Mehta", r: "Architect · Chandigarh" },
];
const Testimonials = () => (
  <section className="section" style={{background: 'var(--bg-alt)'}}>
    <div className="container">
      <div className="sec-head-single">
        <div className="eyebrow" style={{marginBottom: 20}}><span className="dot"/>Section 12 · From Our Partners</div>
        <h2 className="h-section">Trusted by <em className="italic-em">experts</em> across India.</h2>
      </div>
      <div className="testimonials-carousel">
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <p className="testimonial-quote">{t.q}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.a[0]}</div>
              <div>
                <strong>{t.a}</strong>
                <span>{t.r}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ RESOURCES ============ */
const resources = [
  { tag: "Buying Guide", title: "Marine vs. MR Grade plywood — which one, and when?", desc: "The single most-asked question we get from architects and homeowners, answered with a specification-first approach.", meta: "8 min read · Feb 2026" },
  { tag: "Technical", title: "How to identify genuine borer-proof plywood.", desc: "Six checks you can run on any board in a shop — no lab required. Includes a printable one-page checklist.", meta: "5 min read · Jan 2026" },
  { tag: "Catalogue", title: "Pentagon complete product catalogue, 2026.", desc: "All 8 brands, grades, thicknesses and finishes in a single PDF. Free download, updated quarterly.", meta: "PDF · 12 MB" },
];
const Resources = () => (
  <section id="resources" className="section">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"/>Section 13 · Knowledge & Resources</div>
          <h2 className="h-section">Industry insights<br/>& <em className="italic-em">buying guides.</em></h2>
        </div>
        <p className="lede">
          A growing archive of specification notes, buying guides and technical downloads — written by the people who make the boards, for the people who specify them.
        </p>
      </div>
      <div className="resources-grid">
        {resources.map((r, i) => (
          <div className="resource-card" key={i}>
            <div className="resource-img"><div className="ph" data-label={`article · ${r.tag.toLowerCase()}`}/></div>
            <div className="resource-tag">{r.tag}</div>
            <div className="resource-title">{r.title}</div>
            <div className="resource-desc">{r.desc}</div>
            <div className="resource-meta"><span>{r.meta}</span><span>Read →</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ ENQUIRY ============ */
const Enquiry = () => (
  <section id="enquiry" className="section" style={{background: 'var(--bg-deep)'}}>
    <div className="container">
      <div className="enquiry-grid">
        <div className="enquiry-left">
          <div className="eyebrow" style={{marginBottom: 24}}><span className="dot"/>Section 14 · Get in touch</div>
          <h2 className="h-section">Tell us what<br/>you're <em className="italic-em">building.</em></h2>
          <p className="lede" style={{marginTop: 24}}>
            Reach out for bulk enquiries, custom quotes, dealership discussions or technical assistance. Every enquiry is answered by our sales team within one business day.
          </p>
          <div className="contact-block">
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
              <span className="lbl">Whatsapp</span>
              <span className="val">Chat with sales<small>Instant reply, weekdays 9am – 7pm IST</small></span>
            </div>
          </div>
        </div>
        <div>
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="field"><label>Name</label><input placeholder="Your full name"/></div>
              <div className="field"><label>Phone number</label><input placeholder="+91 · · · · ·"/></div>
            </div>
            <div className="form-row">
              <div className="field"><label>Email</label><input placeholder="you@company.com"/></div>
              <div className="field"><label>City & state</label><input placeholder="e.g. Chandigarh, Punjab"/></div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>I am a</label>
                <select><option>Homeowner / Retail buyer</option><option>Architect / Interior designer</option><option>Contractor</option><option>Dealer / Distributor</option><option>Project / Bulk buyer</option><option>OEM enquiry</option></select>
              </div>
              <div className="field">
                <label>Enquiry type</label>
                <select><option>Product enquiry</option><option>Request a quote</option><option>Bulk order</option><option>Dealership enquiry</option><option>Project requirement</option><option>Other</option></select>
              </div>
            </div>
            <div className="field">
              <label>Product of interest</label>
              <select><option>Marine Plywood (Escotel · BWP)</option><option>MR Grade Plywood (Pentagon Gold · Kalinga Gold)</option><option>IS 303 Blockboards (Supremoo Plus)</option><option>Flush / Membrane / Laminated Doors</option><option>Multiple / Not sure — please advise</option></select>
            </div>
            <div className="field">
              <label>Requirement details</label>
              <textarea placeholder="Tell us thickness, sheet count, timeline, and where the boards will be used…"/>
            </div>
            <div style={{display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap'}}>
              <button type="submit" className="btn btn-primary">Send enquiry <Icon.Arr/></button>
              <a href="#" className="btn btn-ghost">Or WhatsApp us directly →</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FOOTER ============ */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="brand">
            <div className="brand-mark"><Icon.Pentagon/></div>
            <div className="brand-name">
              Pentagon
              <small>Plywood · Est. 1997</small>
            </div>
          </a>
          <div className="footer-tagline">Crafting excellence, building trust — since 1997.</div>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Pentagon</a></li>
            <li><a href="#manufacturing">Manufacturing</a></li>
            <li><a href="#quality">Quality & Certifications</a></li>
            <li><a href="#enquiry">Contact us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li><a href="#">Marine Plywood</a></li>
            <li><a href="#">MR Grade Plywood</a></li>
            <li><a href="#">IS 303 Blockboards</a></li>
            <li><a href="#">Flush Doors</a></li>
            <li><a href="#">All brands</a></li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li><a href="#applications">Applications</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#resources">Buying guides</a></li>
            <li><a href="#">Catalogues (PDF)</a></li>
            <li><a href="#">Technical downloads</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h5>Business</h5>
          <ul>
            <li><a href="#dealers">Become a dealer</a></li>
            <li><a href="#enquiry">Bulk orders</a></li>
            <li><a href="#enquiry">Architect support</a></li>
            <li><a href="#enquiry">Request a quote</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Pentagon Plywood Pvt. Ltd. · Khajuri, Yamunanagar, Haryana · India</span>
        <div className="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ============ WHATSAPP FLOAT ============ */
const WhatsappFloat = () => (
  <a href="#" className="whatsapp-float" aria-label="Chat on WhatsApp">
    <Icon.Whatsapp/>
  </a>
);

export {
  Header, Hero, Trust, Products, FindProduct, Brands, Why,
  Manufacturing, Quality, Applications, Projects, Dealer,
  Testimonials, Resources, Enquiry, Footer, WhatsappFloat
};
