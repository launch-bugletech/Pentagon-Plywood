import { useEffect, useState } from 'react';
import { CONTACT_SECTIONS, DEALER_SECTIONS, ROUTES, comingSoonUrl } from '../../app/routes.js';
import './dealers-page.css';

const PHONE = 'tel:+917206104340';
const WHATSAPP_BASE = 'https://wa.me/917206104340?text=';

const MOCK_DEALERS = [
  {
    id: 'd-101',
    name: 'Pentagon Yamunanagar Flagship Depot & Works',
    type: 'Manufacturing HQ & Primary Depot',
    contactPerson: 'Pentagon Channel Cell',
    phone: '+917206104340',
    whatsapp: '917206104340',
    address: 'Industrial Area, Radaur Road',
    city: 'Yamunanagar',
    state: 'Haryana',
    pin: '135001',
    region: 'North',
    products: ['MR, BWP, Marine & Fire Retardant Plywood', 'Blockboard', 'Flush Doors', 'Sourced / traded materials'],
    verified: true,
    isHQ: true,
    mapPos: { x: 190, y: 110 },
  },
  {
    id: 'd-102',
    name: 'Capital Timber & Plywood Traders',
    type: 'Authorized Stockist',
    contactPerson: 'Rajesh Sharma',
    phone: '+919811022334',
    whatsapp: '919811022334',
    address: 'Shop 14, Timber Market, Kirti Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    pin: '110015',
    region: 'North',
    products: ['Plywood', 'Flush Doors'],
    verified: true,
    mapPos: { x: 180, y: 135 },
  },
  {
    id: 'd-103',
    name: 'Grand City Wood Panels',
    type: 'Regional Distributor',
    contactPerson: 'Vikramjit Singh',
    phone: '+919876543210',
    whatsapp: '919876543210',
    address: 'Plot 45, Sector 82 Industrial Area',
    city: 'Mohali',
    state: 'Punjab',
    pin: '160055',
    region: 'North',
    products: ['Plywood', 'Blockboard', 'Flush Doors'],
    verified: true,
    mapPos: { x: 170, y: 100 },
  },
  {
    id: 'd-104',
    name: 'Royal Heritage Building Solutions',
    type: 'Authorized Dealer',
    contactPerson: 'Sanjay Toshniwal',
    phone: '+919414012345',
    whatsapp: '919414012345',
    address: 'Near New Aatish Market, Mansarovar',
    city: 'Jaipur',
    state: 'Rajasthan',
    pin: '302020',
    region: 'North',
    products: ['Plywood', 'Blockboard'],
    verified: true,
    mapPos: { x: 145, y: 185 },
  },
  {
    id: 'd-105',
    name: 'Apex Interior & Plywood Hub',
    type: 'Regional Distributor',
    contactPerson: 'Pradeep Agarwal',
    phone: '+919839054321',
    whatsapp: '919839054321',
    address: 'Transport Nagar, Kanpur Road',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pin: '226012',
    region: 'North',
    products: ['Plywood', 'Flush Doors'],
    verified: true,
    mapPos: { x: 235, y: 175 },
  },
  {
    id: 'd-106',
    name: 'Western Panel & Board House',
    type: 'Authorized Stockist',
    contactPerson: 'Jitendra Patel',
    phone: '+919825011223',
    whatsapp: '919825011223',
    address: 'GIDC Commercial Zone, Naroda',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pin: '382330',
    region: 'West',
    products: ['Plywood', 'Blockboard', 'Flush Doors'],
    verified: true,
    mapPos: { x: 110, y: 240 },
  },
  {
    id: 'd-107',
    name: 'Metropolitan Wood Crafts',
    type: 'Regional Distributor',
    contactPerson: 'Mahesh Shah',
    phone: '+919820098765',
    whatsapp: '919820098765',
    address: 'LBS Marg, Ghatkopar West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pin: '400086',
    region: 'West',
    products: ['Plywood', 'Flush Doors'],
    verified: true,
    mapPos: { x: 130, y: 310 },
  },
  {
    id: 'd-108',
    name: 'Deccan Plywood & Timber Agencies',
    type: 'Authorized Dealer',
    contactPerson: 'Ramesh Gowda',
    phone: '+919845033445',
    whatsapp: '919845033445',
    address: 'NT Pet, Mysuru Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    pin: '560002',
    region: 'South',
    products: ['Plywood', 'Blockboard'],
    verified: true,
    mapPos: { x: 175, y: 410 },
  },
];

const partnerRoutes = [
  ['seller', '01', 'Find a Seller', 'Looking for Pentagon products for furniture, interiors, construction or resale? Search the approved partner network serving your location.', 'Find a Seller Near Me'],
  ['dealer', '02', 'Become a Dealer', 'Already selling plywood, boards, doors, laminates, hardware or building materials? Tell us about your business and market.', 'Apply as a Dealer'],
  ['distributor', '03', 'Become a Distributor', 'Have the infrastructure, sales reach and relationships to serve multiple dealers or a wider territory?', 'Apply as a Distributor'],
];

const opportunities = [
  ['Manufacturing Base Yamunanagar', 'Pentagon manufactures plywood, blockboard and flush doors directly from India’s premier wood-panel industrial cluster.'],
  ['Manufactured and Sourced Portfolio', 'Discuss Pentagon-manufactured MR, BWP, Marine and Fire Retardant Plywood, blockboard and flush doors alongside sourced or traded materials, subject to availability.'],
  ['Direct B2B Freight Feasibility', 'Optimized dispatch planning from factory to warehouse, reducing transit delays and damage risks.'],
  ['Enquiry-Based Supply Planning', 'Dedicated territory assessments ensuring brand partners enjoy steady supply without local market overcrowding.'],
  ['Verified Digital Dealer Locator', 'Approved partners get listed on Pentagon’s digital locator, driving local B2B and consumer leads directly to your store.'],
  ['Requirement-Led Commercial Discussion', 'Product availability, grade, quantity, freight, delivery and commercial terms are discussed for the specific territory and requirement.'],
];

const processSteps = [
  ['01', 'Submit Business Profile', 'Share your store location, existing product portfolio, warehousing infrastructure, and preferred partnership route.'],
  ['02', 'Territory & Demand Review', 'Pentagon reviews market coverage, logistics feasibility, and channel growth opportunity in your target territory.'],
  ['03', 'Commercial Discussion', 'Our channel team connects with you to discuss product ranges, opening order plans, pricing structure, and delivery terms.'],
  ['04', 'Capability Verification', 'Quick validation of business documents, shop/warehouse photos, or trade references to complete compliance.'],
  ['05', 'Commercial Agreement', 'Territory allocation, minimum order commitments, brand guidelines, and channel terms are formally documented.'],
  ['06', 'Onboarding & Supply', 'Receive official dealer signage, product sampling kits, digital locator listing, and initial stock dispatch.'],
];

const applicantTypes = [
  'Existing plywood and wood-panel dealers',
  'Building-material retailers & hardware stores',
  'Timber and board wholesalers',
  'Door, laminate and interior surface sellers',
  'Interior-material showrooms & design hubs',
  'Furniture manufacturing material suppliers',
  'Regional stockists & bulk suppliers',
  'Infrastructure & project material suppliers',
  'New entrepreneurs with suitable infrastructure',
];

const evaluationFactors = [
  'Established business identity and GST registration',
  'Suitable showroom, shop, or warehousing facility',
  'Understanding of local plywood & wood-panel trade',
  'Active relationships with local carpenters, contractors & interior designers',
  'Financial capability to maintain appropriate stock levels',
  'Dedicated sales or logistics setup for local distribution',
];

const partnerExpectations = [
  'Communicate product grades and technical specs transparently to buyers',
  'Maintain appropriate stock handling and moisture-controlled storage',
  'Communicate Pentagon product grades and available specifications accurately in your operational area',
  'Provide prompt feedback on market demand and customer requirements',
  'Follow documented commercial terms and territory guidelines',
  'Protect commercial brand representation in all store marketing',
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

const PRODUCT_CHIPS = [
  'MR Grade Plywood',
  'BWP Grade Plywood',
  'Calibrated Plywood',
  'Blockboard',
  'Flush Doors',
  'Marine Grade Plywood',
  'Fire Retardant Plywood',
  'Sourced / traded materials',
  'HDHMR / WPC',
  'Architectural Laminates',
];

const CATEGORY_CHIPS = [
  'Plywood & Board Dealer',
  'Timber Merchant',
  'Hardware & Lock Store',
  'Building Material Retailer',
  'Interior Showroom',
  'Furniture Manufacturer Supplier',
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
  showroom: 'Yes',
  warehouse: 'Yes',
  warehouseArea: '',
  logistics: '',
  teamSize: '',
  tradeRelationships: '',
  openingOrder: '',
  monthlyPurchase: '',
  territoryRequested: '',
  discussionDate: '',
  opportunities: '',
  additional: '',
};

function Arrow({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}

function MapPinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
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
  return (
    <label className={`dealer-form-field${wide ? ' is-wide' : ''}`}>
      <span>{label}{required && <b>*</b>}</span>
      {children}
    </label>
  );
}

function DealersPage() {
  const [route, setRoute] = useState('dealer');
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [stepError, setStepError] = useState('');

  // Locator Filter States
  const [searchState, setSearchState] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchPin, setSearchPin] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');
  const [hoveredHub, setHoveredHub] = useState(null);

  // Partnership Finder Quiz States
  const [quizSetup, setQuizSetup] = useState('');
  const [quizReach, setQuizReach] = useState('');

  // FAQ Search & Open state
  const [faqFilter, setFaqFilter] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    document.title = 'Dealers & Distributors | Partner With Pentagon Plywood';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Locate authorized Pentagon Plywood sellers across India or apply for channel dealership, retail partnership, and regional distributorship.';
  }, []);

  const update = (key) => (event) => {
    setStepError('');
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const toggleChipInField = (field, chipText) => {
    setStepError('');
    setForm((current) => {
      const existing = current[field] ? current[field].split(',').map((s) => s.trim()).filter(Boolean) : [];
      let updated;
      if (existing.includes(chipText)) {
        updated = existing.filter((item) => item !== chipText);
      } else {
        updated = [...existing, chipText];
      }
      return { ...current, [field]: updated.join(', ') };
    });
  };

  const chooseRoute = (value) => {
    setRoute(value);
    if (value === 'seller') {
      document.getElementById('dealer-locator')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setForm((current) => ({
        ...current,
        partnerType: value === 'distributor' ? 'Distributor' : 'Dealer / Retailer',
      }));
      document.getElementById('partner-application')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectMapHub = (dealer) => {
    setSearchState(dealer.state);
    setSearchCity(dealer.city);
    document.getElementById('dealer-locator')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter Dealers logic
  const filteredDealers = MOCK_DEALERS.filter((dealer) => {
    if (activeRegion !== 'All' && dealer.region !== activeRegion) return false;
    if (searchState && dealer.state.toLowerCase() !== searchState.toLowerCase()) return false;
    if (searchCity && !dealer.city.toLowerCase().includes(searchCity.trim().toLowerCase()) && !dealer.name.toLowerCase().includes(searchCity.trim().toLowerCase())) return false;
    if (searchPin && !dealer.pin.includes(searchPin.trim())) return false;
    if (searchProduct && !dealer.products.some((p) => p.toLowerCase().includes(searchProduct.toLowerCase()))) return false;
    return true;
  });

  const resetFilters = () => {
    setSearchState('');
    setSearchCity('');
    setSearchPin('');
    setSearchProduct('');
    setActiveRegion('All');
  };

  const submitApplication = (event) => {
    event.preventDefault();
    if (!consent) {
      setStepError('Please review and check the consent box to proceed.');
      return;
    }
    setSubmitted(true);
  };

  const nextStep = () => {
    const requiredByStep = {
      1: ['products', 'state', 'territory'],
      2: ['legalName', 'contactName', 'mobile', 'email', 'address', 'city', 'pin'],
      3: ['categories', 'reason'],
      4: [],
    };
    const missing = (requiredByStep[formStep] || []).some((key) => !form[key]?.trim());
    if (missing) {
      setStepError('Please fill out the required fields marked with * before continuing.');
      return;
    }
    setStepError('');
    setFormStep((step) => Math.min(5, step + 1));
  };

  const previousStep = () => {
    setStepError('');
    setFormStep((step) => Math.max(1, step - 1));
  };

  // Filter FAQs
  const displayedFaqs = faqItems.filter(([q, a]) => {
    if (!faqFilter) return true;
    const term = faqFilter.toLowerCase();
    return q.toLowerCase().includes(term) || a.toLowerCase().includes(term);
  });

  // Calculate Quiz recommendation
  let quizRecommendation = null;
  if (quizSetup && quizReach) {
    if (quizReach === 'Multi-District / State-Wide' || quizSetup === 'Warehousing / Bulk Yard') {
      quizRecommendation = {
        title: 'Distributor / Stockist Partnership',
        desc: 'Ideal for businesses with warehousing capability, dedicated logistics, and a strong trade network across multiple districts.',
        type: 'Distributor',
      };
    } else {
      quizRecommendation = {
        title: 'Dealer / Retail Partner',
        desc: 'Perfect for retail stores, hardware shops, and regional stockists serving trade professionals and local projects.',
        type: 'Dealer / Retailer',
      };
    }
  }

  return (
    <div className="dealer-page">
      <div className="dealer-breadcrumb">
        <div className="container">
          <a href={ROUTES.home}>Home</a>
          <span>›</span>
          <strong>Dealers &amp; Distributors</strong>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="dealer-hero">
        <div className="container dealer-hero-grid">
          <div>
            <div className="dealer-kicker-badge">
              <span className="pulse-dot" /> Pentagon Verified Channel Network
            </div>
            <h1>
              Bring Better Material Choices <em>Closer to Your Market.</em>
            </h1>
            <p>
              Pentagon Plywood partners with authorized dealers, stockists, and
              regional distributors to make dependable wood-panel and door
              solutions easily accessible across India.
            </p>
            <div className="dealer-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => chooseRoute("dealer")}
              >
                Become a Channel Partner <Arrow />
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => chooseRoute("seller")}
              >
                Find a Pentagon Seller <Arrow />
              </button>
            </div>

            {/* <div className="dealer-hero-highlights">
              <div className="highlight-pill">
                <strong>28+ Years</strong>
                <span>Yamunanagar Manufacturing Trust</span>
              </div>
              <div className="highlight-pill">
                <strong>100%</strong>
                <span>Genuine Grade Certification</span>
              </div>
              <div className="highlight-pill">
                <strong>Direct</strong>
                <span>Factory Depot Freight Route</span>
              </div>
            </div> */}
          </div>

          <div
            className="dealer-map-card"
            aria-label="Pentagon partner network map of India"
          >
            <div className="dealer-map-label">
              <span>Primary Supply Hubs</span>
              <strong>India Network</strong>
            </div>

            <div className="dealer-map-stage">
              <svg
                className="dealer-india-map"
                viewBox="0 0 430 500"
                role="img"
                aria-label="Outline map of India showing verified regional hubs"
              >
                <path d="M155 35l46 17 38-13 27 20 40 5 12 34 34 19-8 30 21 35-19 33 4 36-24 29-20 43-31 24-9 42-26 36-18 48-24-25-9-54-23-26-20-43-30-15-16-39-31-23 12-38-23-31 21-24-13-37 28-24 4-38 39-12 28-29z" />

                {/* Hotspot Pins */}
                {MOCK_DEALERS.map((dealer) => (
                  <g
                    key={dealer.id}
                    className={`map-pin-group ${dealer.isHQ ? "is-hq" : ""}`}
                    transform={`translate(${dealer.mapPos.x}, ${dealer.mapPos.y})`}
                    onClick={() => selectMapHub(dealer)}
                    onMouseEnter={() => setHoveredHub(dealer)}
                    onMouseLeave={() => setHoveredHub(null)}
                  >
                    <circle
                      className="pin-pulse"
                      r={dealer.isHQ ? "14" : "10"}
                    />
                    <circle className="pin-core" r={dealer.isHQ ? "6" : "4"} />
                    <text y="-10" className="pin-label">
                      {dealer.city}
                    </text>
                  </g>
                ))}
              </svg>

              {hoveredHub && (
                <div className="map-tooltip">
                  <span className="tooltip-tag">{hoveredHub.type}</span>
                  <strong>{hoveredHub.name}</strong>
                  <small>
                    {hoveredHub.city}, {hoveredHub.state}
                  </small>
                  <p>Click to search this location</p>
                </div>
              )}
            </div>

            <div className="dealer-map-empty">
              <span>
                Click pins above or search below to view verified seller details
              </span>
            </div>
          </div>
        </div>

        <div className="container dealer-trust-strip">
          {[
            [
              "Direct Factory Base",
              "Yamunanagar manufacturing facility with strict QC",
            ],
            [
              "Comprehensive Range",
              "Calibrated Plywood, Blockboard & Flush Doors",
            ],
            [
              "Regional Freight",
              "Logistics coordination for bulk or dealer dispatches",
            ],
            [
              "Dedicated Partner Cell",
              "Direct commercial support & digital locator listing",
            ],
          ].map(([title, desc], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <small>{desc}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER ROUTES */}
      <section className="dealer-section dealer-routes" id="choose-route">
        <div className="container">
          <Heading
            eyebrow="Network Options"
            title="Looking to Buy or Looking to Grow With Pentagon?"
          />
          <div className="dealer-route-grid">
            {partnerRoutes.map(([value, number, title, copy, action]) => (
              <article
                className={route === value ? "is-active" : ""}
                key={value}
              >
                <div className="route-header">
                  <span>{number}</span>
                  <div className="route-badge">
                    {value === "seller"
                      ? "Locator"
                      : value === "distributor"
                        ? "Regional"
                        : "Retail"}
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <button type="button" onClick={() => chooseRoute(value)}>
                  {action} <Arrow />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* why pentagon */}
      <section className="dealer-section dealer-opportunity">
        <div className="container">
          <Heading
            eyebrow="The Pentagon Opportunity"
            title="Manufacturing Experience Behind You. Local Market Knowledge In Front."
          />
          <div className="dealer-opportunity-grid">
            {opportunities.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PARTNERSHIP QUIZ / FINDER */}
      <section className="dealer-section dealer-quiz-section">
        <div className="container">
          <div className="quiz-card">
            <div className="quiz-intro">
              <span>Interactive Helper</span>
              <h2>Which Partnership Model Fits Your Business?</h2>
              <p>
                Answer two quick questions to see our recommended commercial
                engagement route.
              </p>
            </div>

            <div className="quiz-body">
              <div className="quiz-step">
                <label>1. Select Your Business Infrastructure:</label>
                <div className="quiz-options">
                  {[
                    "Retail Showroom / Hardware Store",
                    "Warehousing / Bulk Yard",
                    "Project Supply / Contractor",
                    "New Venture Startup",
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={quizSetup === opt ? "is-selected" : ""}
                      onClick={() => setQuizSetup(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quiz-step">
                <label>2. Select Target Operating Reach:</label>
                <div className="quiz-options">
                  {[
                    "Local City / Retail",
                    "Multi-District / State-Wide",
                    "Special B2B Projects",
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={quizReach === opt ? "is-selected" : ""}
                      onClick={() => setQuizReach(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {quizRecommendation && (
                <div className="quiz-result animate-fade-in">
                  <div className="quiz-result-header">
                    <span className="check-badge">
                      <CheckIcon />
                    </span>
                    <div>
                      <small>Recommended Route</small>
                      <h3>{quizRecommendation.title}</h3>
                    </div>
                  </div>
                  <p>{quizRecommendation.desc}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setForm((c) => ({
                        ...c,
                        partnerType: quizRecommendation.type,
                      }));
                      document
                        .getElementById("partner-application")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply as {quizRecommendation.type} <Arrow />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LOCATOR & SEARCH */}
      <section className="dealer-section dealer-locator" id="dealer-locator">
        <div className="container">
          <Heading
            eyebrow="Verified Channel Locator"
            title="Find an Approved Seller Serving Your Location"
            copy="Filter by State, City, PIN code, or Product category to view authorized Pentagon stockists and regional partners."
          />

          <div className="dealer-region-pills">
            {["All", "North", "West", "South"].map((reg) => (
              <button
                type="button"
                key={reg}
                className={activeRegion === reg ? "is-active" : ""}
                onClick={() => setActiveRegion(reg)}
              >
                {reg} Region
              </button>
            ))}
          </div>

          <div className="dealer-search">
            <label>
              <span>State</span>
              <select
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              >
                <option value="">All States</option>
                <option value="Haryana">Haryana</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </label>

            <label>
              <span>City / Store Name</span>
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Enter city (e.g. Yamunanagar, Delhi)"
              />
            </label>

            <label>
              <span>PIN code</span>
              <input
                type="text"
                inputMode="numeric"
                value={searchPin}
                onChange={(e) => setSearchPin(e.target.value)}
                placeholder="6-digit PIN"
              />
            </label>

            <label>
              <span>Product Required</span>
              <select
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              >
                <option value="">All Products</option>
                <option value="Plywood">Plywood</option>
                <option value="Blockboard">Blockboard</option>
                <option value="Flush Doors">Flush Doors</option>
              </select>
            </label>

            <div className="search-actions-wrap">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {}}
              >
                <SearchIcon /> Search
              </button>
              {(searchState ||
                searchCity ||
                searchPin ||
                searchProduct ||
                activeRegion !== "All") && (
                <button
                  className="btn btn-ghost reset-btn"
                  type="button"
                  onClick={resetFilters}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* DEALER LISTING GRID */}
          {filteredDealers.length > 0 ? (
            <div className="dealer-cards-grid">
              {filteredDealers.map((dealer) => (
                <article
                  key={dealer.id}
                  className={`dealer-card ${dealer.isHQ ? "is-hq-card" : ""}`}
                >
                  <div className="dealer-card-top">
                    <span className="dealer-type-badge">{dealer.type}</span>
                    {dealer.verified && (
                      <span className="verified-badge">
                        <CheckIcon /> Verified
                      </span>
                    )}
                  </div>
                  <h3>{dealer.name}</h3>
                  <div className="dealer-card-address">
                    <MapPinIcon />
                    <span>
                      {dealer.address}, <strong>{dealer.city}</strong>,{" "}
                      {dealer.state} - {dealer.pin}
                    </span>
                  </div>

                  <div className="dealer-card-products">
                    {dealer.products.map((p) => (
                      <span key={p} className="product-tag">
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="dealer-card-contact">
                    <span>
                      Contact: <strong>{dealer.contactPerson}</strong>
                    </span>
                    <div className="contact-btns">
                      <a
                        href={`tel:${dealer.phone}`}
                        className="contact-btn phone-btn"
                        title="Call Dealer"
                      >
                        <PhoneIcon /> {dealer.phone}
                      </a>
                      <a
                        href={`${WHATSAPP_BASE}Hello%20${encodeURIComponent(dealer.name)},%20I%20am%20looking%20for%20Pentagon%20Plywood%20products.`}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn wa-btn"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon /> WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="dealer-empty-state">
              <div className="dealer-empty-map" aria-hidden="true">
                <span>?</span>
              </div>
              <div>
                <span>No published seller matching your search</span>
                <h3>
                  We do not have a published partner in this specific location
                  yet.
                </h3>
                <p>
                  Share your city, product and required volume. Pentagon’s
                  channel team will check whether your requirement can be served
                  directly from our manufacturing base or through our nearest
                  regional stockist.
                </p>
                <a className="btn btn-outline" href={CONTACT_SECTIONS.form}>
                  Help Me Source Pentagon Products <Arrow />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTS DISPLAY */}
      <section className="dealer-section dealer-products" id="partner-products">
        <div className="container">
          <Heading
            eyebrow="Channel Product Range"
            title="Build the Range Around What Your Market Actually Buys"
            copy="From high-grade Marine Plywood to commercial boards and flush doors, align your inventory with local trade demand."
          />
          <div className="dealer-product-grid">
            <article>
              <span>Manufactured Product · 01</span>
              <h3>Plywood</h3>
              <p>
                Calibrated core plywood options for furniture, interior
                carpentry, and exterior applications.
              </p>
              <ul>
                <li>MR Moisture Resistant Grade</li>
                <li>BWP/BWR Boiling Water Proof</li>
                <li>Calibrated Architectural Plywood</li>
              </ul>
              <a href={ROUTES.plywood}>
                Explore Plywood <Arrow />
              </a>
            </article>
            <article>
              <span>Manufactured Product · 02</span>
              <h3>Blockboard</h3>
              <p>
                Solid wood-strip-core panels engineered for shutters, wardrobes,
                shelving, and heavy doors.
              </p>
              <a href={comingSoonUrl("Blockboards")}>
                Explore Blockboard <Arrow />
              </a>
            </article>
            <article>
              <span>Manufactured Product · 03</span>
              <h3>Flush Doors</h3>
              <p>
                Precision-pressed door solutions for residential, commercial,
                and large project applications.
              </p>
              <a href={comingSoonUrl("Flush Doors")}>
                Explore Doors <Arrow />
              </a>
            </article>
          </div>
          <div className="dealer-allied">
            <span>Additional Materials Available on Enquiry</span>
            <h3>
              MDF, HDHMR, WPC, laminates and veneers may be sourced or traded
              according to the requirement.
            </h3>
            <p>
              Tell us the complete material list. Availability, brand,
              specification, quantity and dispatch feasibility will be confirmed
              against the enquiry.
            </p>
            <a className="btn btn-outline" href={CONTACT_SECTIONS.form}>
              Discuss the Complete Range <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="dealer-section dealer-comparison" id="partner-types">
        <div className="container">
          <Heading
            eyebrow="Choose the Right Model"
            title="Retail Dealer vs Regional Distributor"
          />
          <div className="dealer-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Comparison Metric</th>
                  <th>Dealer / Retail Partner</th>
                  <th>Distributor / Stockist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Primary Role",
                    "Direct supply to local trade professionals and retail customers",
                    "Managing inventory for a network of sub-dealers and large accounts",
                  ],
                  [
                    "Territory Reach",
                    "City or district level market",
                    "Multi-district, region or state-wide territory",
                  ],
                  [
                    "Order Profile",
                    "Flexible, repeat project and retail dispatches",
                    "Bulk planned inventory movement and container dispatches",
                  ],
                  [
                    "Infrastructure",
                    "Showroom, retail outlet or local counter",
                    "Warehousing, sales team & regional logistics setup",
                  ],
                  [
                    "Branding Support",
                    "Digital locator listing & store sample kits",
                    "Exclusive territory support & marketing collateral",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="dealer-section dealer-applicants">
        <div className="container dealer-two-column">
          <div>
            <Heading
              eyebrow="Potential Channel Partners"
              title="If You Understand the Market, We Want to Understand Your Business."
            />
            <ul>
              {applicantTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="dealer-kicker">What Helps Us Evaluate</div>
            <h3>Useful signals not automatic acceptance criteria.</h3>
            <ul>
              {evaluationFactors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section
        className="dealer-section dealer-process"
        id="application-process"
      >
        <div className="container">
          <Heading
            eyebrow="Clear Pathway"
            title="A Clear Process Before Either Side Makes a Commitment. "
          />
          <div className="dealer-process-grid">
            {processSteps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* new section understand the market */}
      <section className="dealer-section dealer-coverage">
        <div className="container dealer-coverage-grid">
          <div>
            <Heading
              eyebrow="Growing Across Markets"
              title="Local Relationships. A Wider Supply Network."
            />
            <p>
              Pentagon’s network can become more useful through verified partner
              locations, clearer regional opportunities and better routing
              according to supply and freight feasibility.
            </p>
            <div className="dealer-stat-row">
              <div>
                <strong>Since 1997</strong>
                <span>Pentagon Plywood</span>
              </div>
              <div>
                <strong>Yamunanagar</strong>
                <span>Manufacturing base</span>
              </div>
            </div>
          </div>
          <div className="dealer-freight">
            <div className="dealer-kicker">Supply Must Make Business Sense</div>
            <h3>The Right Product Also Needs the Right Route to Market.</h3>
            <p>
              Wood panels and doors are freight-sensitive. Serviceability
              depends on product, quantity, destination, transport cost, stock
              and channel availability.
            </p>
            <ul>
              <li>Approved local seller</li>
              <li>Regional distributor</li>
              <li>Consolidated bulk dispatch</li>
              <li>Direct supply where commercially feasible</li>
            </ul>
            <a href={CONTACT_SECTIONS.form}>
              Check Supply Feasibility <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section
        className="dealer-section dealer-application"
        id="partner-application"
      >
        <div className="container">
          <Heading
            eyebrow="Channel Partnership Application"
            title="Introduce Your Business to Pentagon Plywood"
            copy="Complete the steps below. Our channel evaluation team will review your business profile and connect with you."
          />

          {submitted ? (
            <div className="dealer-success" role="status">
              <span>✓</span>
              <div>
                <div className="dealer-kicker">
                  Application Submitted Successfully
                </div>
                <h3>Welcome to Pentagon Channel Cell</h3>
                <p>
                  Application Reference:{" "}
                  <strong>
                    PP-PARTNER-{new Date().getFullYear()}-
                    {Math.floor(1000 + Math.random() * 9000)}
                  </strong>
                </p>
                <p>
                  We have received your details for{" "}
                  <strong>{form.legalName || "your business"}</strong> in{" "}
                  {form.city}, {form.state}. A Pentagon Channel Manager will
                  reach out within 1 to 2 business days.
                </p>
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form
              className="dealer-application-form"
              onSubmit={submitApplication}
            >
              <div
                className="dealer-form-progress"
                aria-label={`Step ${formStep} of 5`}
              >
                {[
                  "Interest",
                  "Business",
                  "Experience",
                  "Infrastructure",
                  "Requirement & Review",
                ].map((label, index) => (
                  <button
                    type="button"
                    className={
                      formStep === index + 1
                        ? "is-current"
                        : formStep > index + 1
                          ? "is-complete"
                          : ""
                    }
                    onClick={() => {
                      setStepError("");
                      setFormStep(index + 1);
                    }}
                    key={label}
                  >
                    <span>{formStep > index + 1 ? "✓" : index + 1}</span>
                    <strong>{label}</strong>
                  </button>
                ))}
              </div>

              <div className="dealer-form-body">
                <div className="dealer-form-step-title">
                  <span>0{formStep}</span>
                  <div>
                    <small>Step {formStep} of 5</small>
                    <h3>
                      {
                        [
                          "Partnership Interest",
                          "Business Details",
                          "Market Experience",
                          "Infrastructure",
                          "Requirement & Final Review",
                        ][formStep - 1]
                      }
                    </h3>
                  </div>
                </div>

                {/* STEP 1 */}
                {formStep === 1 && (
                  <div className="dealer-form-grid">
                    <Field label="Selecting Role" required wide>
                      <div className="partner-type-cards">
                        {[
                          "Dealer / Retailer",
                          "Wholesaler",
                          "Distributor",
                          "Stockist",
                        ].map((type) => (
                          <div
                            key={type}
                            className={`type-select-card ${form.partnerType === type ? "is-selected" : ""}`}
                            onClick={() =>
                              setForm((c) => ({ ...c, partnerType: type }))
                            }
                          >
                            <span className="radio-dot" />
                            <strong>{type}</strong>
                          </div>
                        ))}
                      </div>
                    </Field>

                    <Field label="Products of Interest" required wide>
                      <input
                        value={form.products}
                        onChange={update("products")}
                        placeholder="Click chip tags below or type products..."
                        required
                      />
                      <div className="chip-selector">
                        <small>Click to toggle product tags:</small>
                        <div className="chip-group">
                          {PRODUCT_CHIPS.map((chip) => {
                            const isSel = form.products.includes(chip);
                            return (
                              <button
                                type="button"
                                key={chip}
                                className={`dealer-chip ${isSel ? "is-selected" : ""}`}
                                onClick={() =>
                                  toggleChipInField("products", chip)
                                }
                              >
                                {isSel ? "✓ " : "+ "}
                                {chip}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </Field>

                    <Field label="Proposed State" required>
                      <input
                        value={form.state}
                        onChange={update("state")}
                        placeholder="e.g. Haryana, Delhi, Punjab"
                        required
                      />
                    </Field>

                    <Field label="Proposed City / District" required>
                      <input
                        value={form.territory}
                        onChange={update("territory")}
                        placeholder="e.g. Yamunanagar, Ambala"
                        required
                      />
                    </Field>
                  </div>
                )}

                {/* STEP 2 */}
                {formStep === 2 && (
                  <div className="dealer-form-grid">
                    <Field label="Legal Business Name" required>
                      <input
                        value={form.legalName}
                        onChange={update("legalName")}
                        placeholder="e.g. Shree Ram Plywood Traders"
                        required
                      />
                    </Field>
                    <Field label="Trade Name / Brand Outlet">
                      <input
                        value={form.tradeName}
                        onChange={update("tradeName")}
                        placeholder="e.g. Ram Plywood & Hardware"
                      />
                    </Field>
                    <Field label="Contact Person" required>
                      <input
                        value={form.contactName}
                        onChange={update("contactName")}
                        placeholder="Full Name"
                        required
                      />
                    </Field>
                    <Field label="Designation">
                      <input
                        value={form.designation}
                        onChange={update("designation")}
                        placeholder="Proprietor / Partner / Director"
                      />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input
                        type="tel"
                        value={form.mobile}
                        onChange={update("mobile")}
                        placeholder="10-digit mobile"
                        required
                      />
                    </Field>
                    <Field label="WhatsApp Number">
                      <input
                        type="tel"
                        value={form.whatsapp}
                        onChange={update("whatsapp")}
                        placeholder="WhatsApp number"
                      />
                    </Field>
                    <Field label="Email Address" required>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="email@company.com"
                        required
                      />
                    </Field>
                    <Field label="GSTIN">
                      <input
                        value={form.gstin}
                        onChange={update("gstin")}
                        placeholder="Optional GSTIN"
                      />
                    </Field>
                    <Field label="Business Address" required wide>
                      <textarea
                        value={form.address}
                        onChange={update("address")}
                        placeholder="Shop / Office address..."
                        required
                      />
                    </Field>
                    <Field label="City" required>
                      <input
                        value={form.city}
                        onChange={update("city")}
                        required
                      />
                    </Field>
                    <Field label="PIN Code" required>
                      <input
                        value={form.pin}
                        onChange={update("pin")}
                        inputMode="numeric"
                        placeholder="6-digit PIN"
                        required
                      />
                    </Field>
                  </div>
                )}

                {/* STEP 3 */}
                {formStep === 3 && (
                  <div className="dealer-form-grid">
                    <Field label="Current Business Categories" required wide>
                      <textarea
                        value={form.categories}
                        onChange={update("categories")}
                        placeholder="Select category chips below or type..."
                        required
                      />
                      <div className="chip-selector">
                        <small>Quick select current categories:</small>
                        <div className="chip-group">
                          {CATEGORY_CHIPS.map((chip) => {
                            const isSel = form.categories.includes(chip);
                            return (
                              <button
                                type="button"
                                key={chip}
                                className={`dealer-chip ${isSel ? "is-selected" : ""}`}
                                onClick={() =>
                                  toggleChipInField("categories", chip)
                                }
                              >
                                {isSel ? "✓ " : "+ "}
                                {chip}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </Field>
                    <Field label="Brands Currently Handled">
                      <input
                        value={form.brands}
                        onChange={update("brands")}
                        placeholder="e.g. Local or national brands"
                      />
                    </Field>
                    <Field label="Why Partner With Pentagon?" required wide>
                      <textarea
                        value={form.reason}
                        onChange={update("reason")}
                        placeholder="Share your market goal or why Pentagon fits your business..."
                        required
                      />
                    </Field>
                  </div>
                )}

                {/* STEP 4 */}
                {formStep === 4 && (
                  <div className="dealer-form-grid">
                    <Field label="Showroom Available">
                      <select
                        value={form.showroom}
                        onChange={update("showroom")}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </Field>
                    <Field label="Warehouse Available">
                      <select
                        value={form.warehouse}
                        onChange={update("warehouse")}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </Field>
                    <Field label="Warehouse Area (sq ft)">
                      <input
                        value={form.warehouseArea}
                        onChange={update("warehouseArea")}
                        placeholder="e.g. 1,500 sq ft"
                      />
                    </Field>
                    <Field label="Sales Team Size">
                      <input
                        value={form.teamSize}
                        onChange={update("teamSize")}
                        placeholder="e.g. 3 sales persons"
                      />
                    </Field>
                  </div>
                )}

                {/* STEP 5 & RECAP */}
                {formStep === 5 && (
                  <div className="dealer-form-grid">
                    <div className="form-recap-box">
                      <h4>Application Summary Review</h4>
                      <div className="recap-grid">
                        <div>
                          <span>Role:</span> <strong>{form.partnerType}</strong>
                        </div>
                        <div>
                          <span>Products:</span>{" "}
                          <strong>{form.products || "Not specified"}</strong>
                        </div>
                        <div>
                          <span>Location:</span>{" "}
                          <strong>
                            {form.city || "-"}, {form.state || "-"}
                          </strong>
                        </div>
                        <div>
                          <span>Applicant:</span>{" "}
                          <strong>
                            {form.contactName || "-"} ({form.legalName || "-"})
                          </strong>
                        </div>
                        <div>
                          <span>Phone:</span>{" "}
                          <strong>{form.mobile || "-"}</strong>
                        </div>
                        <div>
                          <span>Email:</span>{" "}
                          <strong>{form.email || "-"}</strong>
                        </div>
                      </div>
                    </div>

                    <Field label="Territory Requested" required wide>
                      <input
                        value={form.territoryRequested}
                        onChange={update("territoryRequested")}
                        placeholder="Specify target area or district"
                        required
                      />
                    </Field>

                    <label className="dealer-consent">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                      />
                      <span>
                        I confirm that all submitted business details are
                        accurate. I understand that submitting this application
                        does not guarantee appointment or territory exclusivity.
                        I agree that Pentagon Plywood may contact me for channel
                        evaluation.
                      </span>
                    </label>
                  </div>
                )}

                {stepError && (
                  <p className="dealer-step-error" role="alert">
                    {stepError}
                  </p>
                )}

                <div className="dealer-form-actions">
                  {formStep > 1 && (
                    <button
                      className="btn btn-outline"
                      type="button"
                      onClick={previousStep}
                    >
                      Previous Step
                    </button>
                  )}
                  {formStep < 5 ? (
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={nextStep}
                    >
                      Continue <Arrow />
                    </button>
                  ) : (
                    <button className="btn btn-primary" type="submit">
                      Submit Partnership Application <Arrow />
                    </button>
                  )}
                </div>

                <a className="dealer-discuss-link" href={PHONE}>
                  Prefer to discuss directly? Call Pentagon Channel Cell: +91
                  72061 04340
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Working Together */}
      <section className="dealer-section dealer-commitments">
        <div className="container dealer-commitment-grid">
          <div>
            <Heading
              eyebrow="Working Together"
              title="Clear Products. Clear Requirements. Clear Commitments."
            />
            {[
              [
                "Product Information",
                "Current specifications, grades, dimensions and usage guidance for approved products.",
              ],
              [
                "Order Coordination",
                "Availability, dispatch, freight and payment conditions confirmed through the agreed process.",
              ],
              [
                "Enquiry Communication",
                "Local demand and requirements shared so product discussions stay grounded in the market.",
              ],
              [
                "Digital Dealer Visibility",
                "Selected verified partners may appear in the locator after consent to publish.",
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="dealer-dark-list">
            <div className="dealer-kicker">A Two Way Commitment</div>
            <h2>
              The Brand Is Represented Wherever the Product Is Recommended.
            </h2>
            <ul>
              {partnerExpectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION WITH SEARCH */}
      <section className="dealer-section dealer-faq" id="dealer-faq">
        <div className="container dealer-faq-grid">
          <Heading
            eyebrow="Frequently Asked Questions"
            title="Before You Apply."
          />
          <div>
            {faqItems.map(([question, answer], index) => (
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

      <section className="dealer-final">
        <div className="container">
          <div className="dealer-kicker">
            Your Market. Our Next Conversation.
          </div>
          <h2>
            See an Opportunity for Pentagon in Your City?{" "}
            <em>Let’s Examine It Together.</em>
          </h2>
          <p>
            Tell us where you operate, who you serve, which products the market
            needs and how you plan to grow the category.
          </p>
          <div className="dealer-actions">
            <a className="btn btn-primary" href={DEALER_SECTIONS.application}>
              Apply to Join the Network <Arrow />
            </a>
            <a className="btn btn-outline" href={ROUTES.contact}>
              Speak With Our Team <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY FLOATING ACTION BAR */}
      <div className="mobile-sticky-bar">
        <button
          type="button"
          className="mobile-action-btn"
          onClick={() => chooseRoute("seller")}
        >
          <SearchIcon /> Find Seller
        </button>
        <button
          type="button"
          className="mobile-action-btn primary"
          onClick={() => chooseRoute("dealer")}
        >
          Apply Partner <Arrow />
        </button>
      </div>
    </div>
  );
}

export default DealersPage;
