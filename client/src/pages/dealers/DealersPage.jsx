import { useEffect, useState } from 'react';
import { CONTACT_SECTIONS, DEALER_SECTIONS, ROUTES, comingSoonUrl } from '../../app/routes.js';
import './dealers-page.css';

const PHONE = 'tel:+917206104340';
const partnerRoutes = [
  ['seller', '01', 'Find a Seller', 'Looking for Pentagon products for furniture, interiors, construction or resale? Search the approved partner network serving your location.', 'Find a Seller Near Me'],
  ['dealer', '02', 'Become a Dealer', 'Already selling plywood, boards, doors, laminates, hardware or building materials? Tell us about your business and market.', 'Apply as a Dealer'],
  ['distributor', '03', 'Become a Distributor', 'Have the infrastructure, sales reach and relationships to serve multiple dealers or a wider territory?', 'Apply as a Distributor'],
];

const opportunities = [
  ['Manufacturing From Yamunanagar', 'Pentagon manufactures plywood, blockboard and flush doors from one of India’s recognised wood-product manufacturing regions.'],
  ['A Portfolio for Different Needs', 'Discuss plywood grades, blockboard, flush doors and selected allied materials according to customer demand.'],
  ['B2B Market Experience', 'Partner conversations begin with an understanding of dealer, wholesaler, retailer and trade requirements.'],
  ['Enquiry-Based Supply Planning', 'Product, quantity, destination and freight feasibility are reviewed before supply is committed.'],
  ['Opportunity for Local Visibility', 'Selected approved sellers may be considered for the verified online locator with consent to publish.'],
  ['Direct Requirement Discussion', 'Share the grades, sizes, thicknesses, quantities and categories your local market actually requires.'],
];

const processSteps = [
  ['01', 'Submit Your Business Profile', 'Tell us about your company, location, current categories, reach, infrastructure and preferred partnership.'],
  ['02', 'Initial Review', 'Pentagon reviews demand, existing network coverage, logistics and the opportunity in the proposed market.'],
  ['03', 'Business Discussion', 'Relevant applicants may be contacted to discuss products, customers, expected volume and delivery feasibility.'],
  ['04', 'Capability Assessment', 'Pentagon may request documents, photographs, references or a meeting to understand the business.'],
  ['05', 'Commercial Agreement', 'If both sides proceed, product range, terms, territory and responsibilities are documented.'],
  ['06', 'Onboarding', 'The approved partner receives the agreed product, ordering, brand and contact information.'],
];

const applicantTypes = [
  'Existing plywood and wood-panel dealers',
  'Building-material retailers',
  'Timber and board wholesalers',
  'Door, laminate and hardware sellers',
  'Interior-material showrooms',
  'Furniture-material suppliers',
  'Regional stockists',
  'Project-material suppliers',
  'New businesses with relevant infrastructure',
];

const evaluationFactors = [
  'Established business identity and applicable registrations',
  'Suitable showroom, shop or warehouse',
  'Knowledge of plywood or allied materials',
  'Relationships with local trade professionals',
  'Ability to maintain appropriate stock',
  'Delivery capability within the proposed market',
  'Understanding of local product and price demand',
  'Accurate representation of product specifications',
];

const partnerExpectations = [
  'Communicate grades and intended applications accurately',
  'Avoid unsupported performance claims',
  'Use current Pentagon product and brand material',
  'Maintain agreed stock and order commitments',
  'Store products using appropriate handling practices',
  'Communicate complaints and product concerns promptly',
  'Keep published business details current',
  'Follow documented commercial and territory terms',
  'Separate sourced products from Pentagon-manufactured products',
  'Protect customer and commercial information',
];

const faqItems = [
  ['How can I become a Pentagon Plywood dealer?', 'Submit the partnership application with your business, location, experience, infrastructure and product interests. Pentagon will review the opportunity and contact relevant applicants.'],
  ['Who can apply for a dealership?', 'Plywood dealers, building-material retailers, wholesalers, timber and board sellers, interior-material showrooms, stockists and other businesses with relevant capability may apply.'],
  ['Can a new business apply?', 'Yes. Pentagon will assess its location, business plan, infrastructure, product knowledge and market opportunity. An application does not guarantee appointment.'],
  ['What is the difference between a dealer and a distributor?', 'A dealer usually serves a local market. A distributor generally holds more stock and supplies a broader territory or network of dealers. Pentagon determines the appropriate relationship after review.'],
  ['Is there a minimum investment?', 'Pentagon has not published a fixed investment requirement. It may depend on product range, stock plan, location, infrastructure and the commercial arrangement.'],
  ['Is a minimum opening order required?', 'Opening-order requirements are confirmed during commercial discussion and may vary by product, quantity, freight and territory.'],
  ['Will I receive an exclusive territory?', 'No exclusivity is created by submitting an application. Any protected territory must be specifically reviewed, approved and documented.'],
  ['Does Pentagon offer credit?', 'Payment and credit terms are subject to commercial review and written approval.'],
  ['Does Pentagon provide samples or marketing material?', 'Available samples, catalogues, product images and other partner material are discussed during onboarding.'],
  ['Which products can dealers stock?', 'Applicants can discuss plywood, blockboard and flush doors. Selected allied products may be available through sourcing or trading, subject to current availability.'],
  ['Can I apply for more than one city or district?', 'Yes. State the complete proposed coverage. Pentagon will assess it against network coverage, logistics and business capability.'],
  ['How can customers find my business on this website?', 'Selected approved partners may be added to the locator after verification and consent to publish. Listing is not automatic.'],
  ['Does Pentagon supply throughout India?', 'Each enquiry is reviewed according to product, quantity, location, freight and channel availability. The website does not promise that every order can be served directly.'],
];

const initialForm = {
  partnerType: 'Dealer / Retailer',
  products: '',
  state: '',
  territory: '',
  legalName: '',
  tradeName: '',
  contactName: '',
  designation: '',
  mobile: '',
  whatsapp: '',
  email: '',
  address: '',
  city: '',
  district: '',
  pin: '',
  gstin: '',
  established: '',
  categories: '',
  brands: '',
  customers: '',
  markets: '',
  experience: '',
  potential: '',
  reason: '',
  showroom: 'No',
  warehouse: 'No',
  warehouseArea: '',
  logistics: '',
  teamSize: '',
  tradeRelationships: '',
  openingOrder: '',
  monthlyPurchase: '',
  territoryRequested: '',
  opportunities: '',
  discussionDate: '',
  additional: '',
};

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}

function Heading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`dealer-page-heading${light ? ' is-light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Field({ label, required, wide = false, children }) {
  return <label className={`dealer-form-field${wide ? ' is-wide' : ''}`}><span>{label}{required && <b>*</b>}</span>{children}</label>;
}

function DealersPage() {
  const [route, setRoute] = useState('dealer');
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [stepError, setStepError] = useState('');
  const update = (key) => (event) => {
    setStepError('');
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  useEffect(() => {
    document.title = 'Dealers & Distributors | Partner With Pentagon Plywood';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Find a Pentagon Plywood seller or apply to become a dealer, retailer, wholesaler or distributor. Share your market, infrastructure and product requirements.';
  }, []);

  const chooseRoute = (value) => {
    setRoute(value);
    if (value === 'seller') {
      document.getElementById('dealer-locator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setForm((current) => ({ ...current, partnerType: value === 'distributor' ? 'Distributor' : 'Dealer / Retailer' }));
      document.getElementById('partner-application')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitApplication = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };

  const nextStep = () => {
    const requiredByStep = {
      1: ['products', 'state', 'territory'],
      2: ['legalName', 'contactName', 'mobile', 'email', 'address', 'city', 'pin'],
      3: ['categories', 'reason'],
      4: [],
    };
    const missing = (requiredByStep[formStep] || []).some((key) => !form[key].trim());
    if (missing) {
      setStepError('Complete the required fields in this step before continuing.');
      return;
    }
    setStepError('');
    setFormStep((step) => Math.min(5, step + 1));
  };
  const previousStep = () => {
    setStepError('');
    setFormStep((step) => Math.max(1, step - 1));
  };

  return (
    <div className="dealer-page">
      <div className="dealer-breadcrumb"><div className="container"><a href={ROUTES.home}>Home</a><span>›</span><strong>Dealers &amp; Distributors</strong></div></div>

      <section className="dealer-hero">
        <div className="container dealer-hero-grid">
          <div>
            <div className="dealer-kicker">Pentagon Partner Network</div>
            <h1>Bring Better Material Choices <em>Closer to Your Market.</em></h1>
            <p>Pentagon Plywood works with dealers, retailers, wholesalers and distribution partners to make dependable wood-panel and door solutions available across Indian markets.</p>
            <p>Whether you want to locate a seller or explore a business partnership, begin with the route that matches your requirement.</p>
            <div className="dealer-actions">
              <a className="btn btn-primary" href={DEALER_SECTIONS.application}>Become a Channel Partner <Arrow /></a>
              <a className="btn btn-outline" href={DEALER_SECTIONS.locator}>Find a Pentagon Seller <Arrow /></a>
            </div>
          </div>
          <div className="dealer-map-card" aria-label="Pentagon partner network across India">
            <div className="dealer-map-label"><span>Partner Network</span><strong>India</strong></div>
            <svg className="dealer-india-map" viewBox="0 0 430 500" role="img" aria-label="Abstract outline of India without unverified location markers">
              <path d="M155 35l46 17 38-13 27 20 40 5 12 34 34 19-8 30 21 35-19 33 4 36-24 29-20 43-31 24-9 42-26 36-18 48-24-25-9-54-23-26-20-43-30-15-16-39-31-23 12-38-23-31 21-24-13-37 28-24 4-38 39-12 28-29z" />
            </svg>
            <div className="dealer-map-empty">Verified partner locations will appear here after approval.</div>
          </div>
        </div>
        <div className="container dealer-trust-strip">
          {['Manufacturing base in Yamunanagar', 'Serving multiple Indian markets', 'Plywood, blockboard & flush doors', 'Enquiry-led market support'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="dealer-section dealer-routes" id="choose-route">
        <div className="container">
          <Heading eyebrow="How Can We Help?" title="Looking to Buy—or Looking to Grow With Pentagon?" />
          <div className="dealer-route-grid">
            {partnerRoutes.map(([value, number, title, copy, action]) => (
              <article className={route === value ? 'is-active' : ''} key={value}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                <button type="button" onClick={() => chooseRoute(value)}>{action}<Arrow /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-intro" id="partnership">
        <div className="container dealer-intro-grid">
          <Heading eyebrow="Built Through Business Relationships" title="A Strong Product Reaches the Market Through a Strong Partner." />
          <div className="dealer-copy">
            <p>Pentagon’s business has been built through long-term relationships with plywood dealers, wholesalers and retailers. The goal is to make those relationships easier to discover, support and expand.</p>
            <p>We want to connect with businesses that understand their local market, communicate customer requirements clearly and want to build a dependable wood-products business over time.</p>
            <p className="dealer-note">Submitting an online form does not confirm a dealership or distributorship. Every application is reviewed against location, market potential, network coverage, capability and product fit.</p>
            <a href={DEALER_SECTIONS.application}>Tell Us About Your Business <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-opportunity">
        <div className="container">
          <Heading eyebrow="The Pentagon Opportunity" title="Manufacturing Experience Behind You. Local Market Knowledge In Front." />
          <div className="dealer-opportunity-grid">
            {opportunities.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-products" id="partner-products">
        <div className="container">
          <Heading eyebrow="What You Can Discuss With Us" title="Build the Range Around What Your Market Actually Buys." copy="The right channel range depends on local applications, price segments, customer types, storage and repeat demand." />
          <div className="dealer-product-grid">
            <article><span>Manufactured Product · 01</span><h3>Plywood</h3><p>Solutions for furniture, interiors and application-specific requirements, subject to confirmed grades, standards, sizes and thicknesses.</p><ul><li>MR Grade Plywood</li><li>BWR/BWP Plywood</li><li>Marine Plywood</li><li>Commercial Plywood</li></ul><a href={ROUTES.plywood}>Explore Plywood <Arrow /></a></article>
            <article><span>Manufactured Product · 02</span><h3>Blockboard</h3><p>Wood-strip-core panels for selected furniture, shutters, doors, shelving and interior applications.</p><a href={comingSoonUrl('Blockboards')}>Explore Blockboard <Arrow /></a></article>
            <article><span>Manufactured Product · 03</span><h3>Flush Doors</h3><p>Door solutions for residential, commercial and project requirements according to confirmed construction, dimensions and finish.</p><a href={comingSoonUrl('Flush Doors')}>Explore Doors <Arrow /></a></article>
          </div>
          <div className="dealer-allied">
            <span>Additional Materials Available on Enquiry</span>
            <h3>MDF, HDHMR, WPC, laminates and veneers may be sourced or traded according to the requirement.</h3>
            <p>Tell us the complete material list. Availability, brand, specification, quantity and dispatch feasibility will be confirmed against the enquiry.</p>
            <a className="btn btn-outline" href={CONTACT_SECTIONS.form}>Discuss the Complete Range <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-comparison" id="partner-types">
        <div className="container">
          <Heading eyebrow="Choose the Right Partnership Type" title="The Difference Is Mainly in the Market You Are Equipped to Serve." />
          <div className="dealer-table-wrap">
            <table>
              <thead><tr><th>Comparison</th><th>Dealer / Retail Partner</th><th>Distributor / Stockist</th></tr></thead>
              <tbody>
                {[
                  ['Primary role', 'Sell to local customers and trade buyers', 'Supply a wider territory or dealer network'],
                  ['Typical reach', 'City or local market', 'Multiple cities, districts or a larger region'],
                  ['Customer base', 'End customers and trade buyers', 'Dealers, retailers and larger trade accounts'],
                  ['Infrastructure', 'Shop, showroom or local stock facility', 'Larger warehousing, logistics and sales coverage'],
                  ['Order profile', 'Local and repeat retail or trade needs', 'Planned stock and higher-volume movement'],
                  ['Application review', 'Business and local demand', 'Infrastructure, reach and distribution capability'],
                ].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
          <p className="dealer-note">These descriptions are a starting guide, not Pentagon’s final commercial classification.</p>
        </div>
      </section>

      <section className="dealer-section dealer-applicants">
        <div className="container dealer-two-column">
          <div><Heading eyebrow="Potential Channel Partners" title="If You Understand the Market, We Want to Understand Your Business." /><ul>{applicantTypes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><div className="dealer-kicker">What Helps Us Evaluate</div><h3>Useful signals—not automatic acceptance criteria.</h3><ul>{evaluationFactors.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="dealer-section dealer-process" id="application-process">
        <div className="container">
          <Heading eyebrow="From Introduction to Opportunity" title="A Clear Process Before Either Side Makes a Commitment." />
          <div className="dealer-process-grid">{processSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <p className="dealer-note">Submitting an application does not create a dealership, distributorship, exclusivity arrangement or supply commitment.</p>
        </div>
      </section>

      <section className="dealer-section dealer-commitments">
        <div className="container dealer-commitment-grid">
          <div>
            <Heading eyebrow="Working Together" title="Clear Products. Clear Requirements. Clear Commitments." />
            {[
              ['Product Information', 'Current specifications, grades, dimensions and usage guidance for approved products.'],
              ['Order Coordination', 'Availability, dispatch, freight and payment conditions confirmed through the agreed process.'],
              ['Enquiry Communication', 'Local demand and requirements shared so product discussions stay grounded in the market.'],
              ['Digital Dealer Visibility', 'Selected verified partners may appear in the locator after consent to publish.'],
            ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="dealer-dark-list">
            <div className="dealer-kicker">A Two-Way Commitment</div>
            <h2>The Brand Is Represented Wherever the Product Is Recommended.</h2>
            <ul>{partnerExpectations.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-locator" id="dealer-locator">
        <div className="container">
          <Heading eyebrow="Closer to Your Requirement" title="Find an Approved Seller Serving Your Area." copy="Search by state, city or PIN code. Only partner details approved for publication will be displayed." />
          <div className="dealer-search">
            <label><span>State</span><select defaultValue=""><option value="">Select state</option><option>Haryana</option></select></label>
            <label><span>City</span><input type="text" placeholder="Enter city" /></label>
            <label><span>PIN code</span><input type="text" inputMode="numeric" placeholder="6-digit PIN" /></label>
            <label><span>Product</span><select defaultValue=""><option value="">All products</option><option>Plywood</option><option>Blockboard</option><option>Flush Doors</option></select></label>
            <button className="btn btn-primary" type="button">Search Network <Arrow /></button>
          </div>
          <div className="dealer-empty-state">
            <div className="dealer-empty-map" aria-hidden="true"><span>?</span></div>
            <div><span>No unverified listings shown</span><h3>We do not have a published seller for this location yet.</h3><p>Share your city, product and approximate quantity. Pentagon will check whether the requirement can be served directly or through a suitable partner.</p><a className="btn btn-outline" href={CONTACT_SECTIONS.form}>Help Me Source Pentagon Products <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section className="dealer-section dealer-coverage">
        <div className="container dealer-coverage-grid">
          <div><Heading eyebrow="Growing Across Markets" title="Local Relationships. A Wider Supply Network." /><p>Pentagon’s network can become more useful through verified partner locations, clearer regional opportunities and better routing according to supply and freight feasibility.</p><div className="dealer-stat-row"><div><strong>Since 1997</strong><span>Pentagon Plywood</span></div><div><strong>Yamunanagar</strong><span>Manufacturing base</span></div></div></div>
          <div className="dealer-freight"><div className="dealer-kicker">Supply Must Make Business Sense</div><h3>The Right Product Also Needs the Right Route to Market.</h3><p>Wood panels and doors are freight-sensitive. Serviceability depends on product, quantity, destination, transport cost, stock and channel availability.</p><ul><li>Approved local seller</li><li>Regional distributor</li><li>Consolidated bulk dispatch</li><li>Direct supply where commercially feasible</li></ul><a href={CONTACT_SECTIONS.form}>Check Supply Feasibility <Arrow /></a></div>
        </div>
      </section>

      <section className="dealer-section dealer-application" id="partner-application">
        <div className="container">
          <Heading eyebrow="Introduce Your Business" title="Tell Us About Your Market, Your Customers and the Opportunity You See." copy="Complete the form with accurate business details. Pentagon will review the application and contact relevant applicants for further discussion." />
          {submitted ? (
            <div className="dealer-success" role="status"><span>✓</span><div><div className="dealer-kicker">Application Received</div><h3>Your Business Profile Has Been Received.</h3><p>Reference: <strong>PP-PARTNER-{new Date().getFullYear()}</strong></p><p>We will review the location, business profile, product interest and coverage. If the opportunity fits current network plans, a representative may contact you.</p><button className="btn btn-outline" type="button" onClick={() => setSubmitted(false)}>Review Application</button></div></div>
          ) : (
            <form className="dealer-application-form" onSubmit={submitApplication}>
              <div className="dealer-form-progress" aria-label={`Step ${formStep} of 5`}>
                {['Interest', 'Business', 'Experience', 'Infrastructure', 'Requirement'].map((label, index) => <button type="button" disabled={index + 1 > formStep} className={formStep === index + 1 ? 'is-current' : formStep > index + 1 ? 'is-complete' : ''} onClick={() => { setStepError(''); setFormStep(index + 1); }} key={label}><span>{index + 1}</span><strong>{label}</strong></button>)}
              </div>
              <div className="dealer-form-body">
                <div className="dealer-form-step-title"><span>0{formStep}</span><div><small>Step {formStep} of 5</small><h3>{['Partnership Interest', 'Business Details', 'Market Experience', 'Infrastructure', 'Requirement & Consent'][formStep - 1]}</h3></div></div>
                {formStep === 1 && <div className="dealer-form-grid">
                  <Field label="Applying as" required><select value={form.partnerType} onChange={update('partnerType')} required>{['Dealer / Retailer', 'Wholesaler', 'Distributor', 'Stockist', 'Other'].map((item) => <option key={item}>{item}</option>)}</select></Field>
                  <Field label="Products of interest" required><input value={form.products} onChange={update('products')} placeholder="Plywood, blockboard, doors…" required /></Field>
                  <Field label="Proposed state" required><input value={form.state} onChange={update('state')} required /></Field>
                  <Field label="Proposed city or territory" required><input value={form.territory} onChange={update('territory')} required /></Field>
                </div>}
                {formStep === 2 && <div className="dealer-form-grid">
                  <Field label="Legal business name" required><input value={form.legalName} onChange={update('legalName')} required /></Field>
                  <Field label="Trade name"><input value={form.tradeName} onChange={update('tradeName')} /></Field>
                  <Field label="Contact person" required><input value={form.contactName} onChange={update('contactName')} required /></Field>
                  <Field label="Designation"><input value={form.designation} onChange={update('designation')} /></Field>
                  <Field label="Mobile number" required><input type="tel" value={form.mobile} onChange={update('mobile')} required /></Field>
                  <Field label="WhatsApp number"><input type="tel" value={form.whatsapp} onChange={update('whatsapp')} /></Field>
                  <Field label="Email" required><input type="email" value={form.email} onChange={update('email')} required /></Field>
                  <Field label="GSTIN"><input value={form.gstin} onChange={update('gstin')} /></Field>
                  <Field label="Complete business address" required wide><textarea value={form.address} onChange={update('address')} required /></Field>
                  <Field label="City" required><input value={form.city} onChange={update('city')} required /></Field>
                  <Field label="District"><input value={form.district} onChange={update('district')} /></Field>
                  <Field label="PIN code" required><input value={form.pin} onChange={update('pin')} inputMode="numeric" required /></Field>
                  <Field label="Year established"><input value={form.established} onChange={update('established')} /></Field>
                </div>}
                {formStep === 3 && <div className="dealer-form-grid">
                  <Field label="Current business categories" required wide><textarea value={form.categories} onChange={update('categories')} required /></Field>
                  <Field label="Brands currently handled"><input value={form.brands} onChange={update('brands')} /></Field>
                  <Field label="Primary customer groups"><input value={form.customers} onChange={update('customers')} /></Field>
                  <Field label="Cities or districts served"><input value={form.markets} onChange={update('markets')} /></Field>
                  <Field label="Relevant experience"><input value={form.experience} onChange={update('experience')} /></Field>
                  <Field label="Expected monthly potential"><input value={form.potential} onChange={update('potential')} /></Field>
                  <Field label="Why Pentagon?" required wide><textarea value={form.reason} onChange={update('reason')} required /></Field>
                </div>}
                {formStep === 4 && <div className="dealer-form-grid">
                  <Field label="Retail showroom available"><select value={form.showroom} onChange={update('showroom')}><option>Yes</option><option>No</option></select></Field>
                  <Field label="Warehouse available"><select value={form.warehouse} onChange={update('warehouse')}><option>Yes</option><option>No</option></select></Field>
                  <Field label="Approx. warehouse area"><input value={form.warehouseArea} onChange={update('warehouseArea')} /></Field>
                  <Field label="Sales team size"><input value={form.teamSize} onChange={update('teamSize')} /></Field>
                  <Field label="Logistics arrangement" wide><textarea value={form.logistics} onChange={update('logistics')} /></Field>
                  <Field label="Trade relationships served"><input value={form.tradeRelationships} onChange={update('tradeRelationships')} /></Field>
                  <Field label="Showroom / warehouse photos"><input type="file" accept="image/*" multiple /></Field>
                </div>}
                {formStep === 5 && <div className="dealer-form-grid">
                  <Field label="Expected opening order"><input value={form.openingOrder} onChange={update('openingOrder')} /></Field>
                  <Field label="Expected monthly purchase"><input value={form.monthlyPurchase} onChange={update('monthlyPurchase')} /></Field>
                  <Field label="Territory requested" required><input value={form.territoryRequested} onChange={update('territoryRequested')} required /></Field>
                  <Field label="Preferred discussion date"><input type="date" value={form.discussionDate} onChange={update('discussionDate')} /></Field>
                  <Field label="Existing demand or opportunities" wide><textarea value={form.opportunities} onChange={update('opportunities')} /></Field>
                  <Field label="Additional information" wide><textarea value={form.additional} onChange={update('additional')} /></Field>
                  <Field label="Business documents" wide><input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple /><small>Optional: GST registration, business card, company profile or relevant registration.</small></Field>
                  <label className="dealer-consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /><span>I confirm that the information is accurate and understand that submitting this form does not guarantee appointment, exclusivity, credit, pricing or supply. I agree that Pentagon Plywood may contact me to evaluate this business enquiry.</span></label>
                </div>}
                {stepError && <p className="dealer-step-error" role="alert">{stepError}</p>}
                <div className="dealer-form-actions">
                  {formStep > 1 && <button className="btn btn-outline" type="button" onClick={previousStep}>Previous</button>}
                  {formStep < 5 ? <button className="btn btn-primary" type="button" onClick={nextStep}>Continue <Arrow /></button> : <button className="btn btn-primary" type="submit">Submit Partnership Application <Arrow /></button>}
                </div>
                <a className="dealer-discuss-link" href={PHONE}>Prefer to discuss before applying? Call +91 72061 04340.</a>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="dealer-section dealer-faq" id="dealer-faq">
        <div className="container dealer-faq-grid">
          <Heading eyebrow="Frequently Asked Questions" title="Before You Apply." />
          <div>{faqItems.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="dealer-final">
        <div className="container"><div className="dealer-kicker">Your Market. Our Next Conversation.</div><h2>See an Opportunity for Pentagon in Your City? <em>Let’s Examine It Together.</em></h2><p>Tell us where you operate, who you serve, which products the market needs and how you plan to grow the category.</p><div className="dealer-actions"><a className="btn btn-primary" href={DEALER_SECTIONS.application}>Apply to Join the Network <Arrow /></a><a className="btn btn-outline" href={ROUTES.contact}>Speak With Our Team <Arrow /></a></div></div>
      </section>
    </div>
  );
}

export default DealersPage;
