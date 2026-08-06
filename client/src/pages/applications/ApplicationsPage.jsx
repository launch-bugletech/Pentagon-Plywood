import { useEffect } from 'react';
import { APPLICATION_SECTIONS, CONTACT_SECTIONS, ROUTES } from '../../app/routes.js';
import './applications-page.css';

import kitchenImage from '../../assets/product/Applications/Modern kitchen with cabinets and island.png';
import wardrobeImage from '../../assets/product/Applications/Modern wardrobe with sliding doors.png';
import livingImage from '../../assets/product/Applications/Contemporary living room with furniture.png';
import officeImage from '../../assets/product/Applications/Modern office with desks and partitions.png';
import retailImage from '../../assets/product/Applications/Retail store interior with shelves and displays.png';
import bathroomImage from '../../assets/product/Applications/Modern bathroom with vanity and mirror.png';
import boardImage from '../../assets/Wooden layered boards.png';
import doorImage from '../../assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp';

const Icon = {
  Arrow: () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>,
  Check: () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>,
  Layers: () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 8 9-5 9 5-9 5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>,
};

const applicationCards = [
  { id: 'home-furniture', target: '#detail-home-furniture', number: '01', title: 'Home Furniture', label: 'Beds · Tables · Cabinets', image: livingImage, copy: 'Materials for beds, television units, tables, study units, cabinets, shelves and other residential furniture.', detail: 'Consider load, span, fixing strength, edge durability and the required finish.' },
  { id: 'modular-kitchens', target: '#detail-modular-kitchens', number: '02', title: 'Modular Kitchens', label: 'Cabinets · Shutters · Storage', image: kitchenImage, copy: 'Compare boards and decorative surfaces for cabinets, shutters, drawers, tall units and overhead storage.', detail: 'Consider moisture, steam, heat, plumbing, edge sealing and hardware fixing.' },
  { id: 'wardrobes-storage', target: '#detail-wardrobes-storage', number: '03', title: 'Wardrobes & Storage', label: 'Carcasses · Shelves · Shutters', image: wardrobeImage, copy: 'Find materials for wardrobe carcasses, shutters, shelves, drawers, loft storage and internal partitions.', detail: 'Consider panel span, hardware, finish, storage load and damp walls or floors.' },
  { id: 'doors-shutters', target: '#detail-doors-shutters', number: '04', title: 'Doors & Shutters', label: 'Flush Doors · Finished Surfaces', image: doorImage, copy: 'Explore Pentagon flush doors and suitable materials for selected shutters and decorative door finishes.', detail: 'Door-frame materials and solutions remain subject to specification and confirmation.' },
  { id: 'wall-panelling', target: '#detail-wall-panelling', number: '05', title: 'Wall Panelling', label: 'Features · Screens · Partitions', image: bathroomImage, copy: 'Compare plywood, MDF, WPC and decorative surfaces for wall panels, feature walls and selected cladding.', detail: 'Confirm the backing, fixing system, joints, moisture, fire requirements and maintenance.' },
  { id: 'commercial-interiors', target: '#detail-commercial-interiors', number: '06', title: 'Office & Commercial', label: 'Workstations · Storage · Counters', image: officeImage, copy: 'Materials for workstations, reception desks, storage systems, partitions and commercial furniture.', detail: 'Prioritise repeatability, surface consistency, hardware compatibility and replacement planning.' },
  { id: 'retail-hospitality', target: '#detail-commercial-interiors', number: '07', title: 'Retail & Hospitality', label: 'Displays · Counters · Furniture', image: retailImage, copy: 'Discuss materials for display fixtures, shelving, restaurant furniture and selected hotel components.', detail: 'Consider traffic, cleaning, brand appearance, timelines and repeat availability.' },
  { id: 'manufacturing-fabrication', target: '#material-planning', number: '08', title: 'Furniture Fabrication', label: 'Custom · Repeat · Modular', image: boardImage, copy: 'Source boards and decorative materials for custom furniture, repeat production and modular units.', detail: 'Share machining, surface, dimensions, quantity and delivery requirements with one team.' },
  { id: 'dealer-bulk-supply', target: '#trade-supply', number: '09', title: 'Dealer & Bulk Supply', label: 'Repeat · Project · Distribution', image: boardImage, copy: 'Discuss repeat or bulk requirements for Pentagon-manufactured and sourced products.', detail: 'Availability, pricing, freight and fulfilment depend on product, quantity and location.' },
];

const selectionFactors = ['Interior or exterior location', 'Dry, humid or moisture-prone environment', 'Expected load and unsupported span', 'Screw and hardware fixing', 'Surface finish and cleaning frequency', 'Heat and steam exposure', 'Edge treatment and fabrication', 'Required service life', 'Budget and quantity'];

const materialGuide = [
  ['Furniture carcasses', 'Plywood · MDF · Pre-laminated board', 'Load, fixing, finish and panel span'],
  ['Kitchen cabinetry', 'Application-suitable plywood · WPC · surfaces', 'Moisture, plumbing, heat and sealed edges'],
  ['Wardrobes & storage', 'Plywood · Blockboard · MDF', 'Shelf load, shutter system and dampness'],
  ['Doors & shutters', 'Flush doors · Blockboard · Plywood · MDF', 'Location, hardware, finish and verified grade'],
  ['Wall features', 'Plywood · MDF · WPC · veneers · laminates', 'Backing, joints, fire requirements and access'],
  ['Commercial fixtures', 'Plywood · MDF · blockboard · surfaces', 'Repeat supply, cleaning and batch consistency'],
];

const furnitureComponents = [
  ['Beds & Bed Frames', 'Structural design, fixing strength, expected load and the supporting construction.'],
  ['TV & Display Units', 'Cable openings, wall fixing, shelf spans, equipment weight and surface finish.'],
  ['Tables & Study Units', 'Worktop span, edge durability, cleaning and the support structure.'],
  ['Cabinets & Sideboards', 'Shutters, shelves, drawers, hinges and decorative appearance.'],
  ['Shelving', 'Thickness, stiffness, support spacing and the expected load on longer shelves.'],
  ['Decorative Furniture', 'MDF can support routed details; plywood, veneers and laminates answer different needs.'],
];

const kitchenComponents = [
  ['Under-Sink Cabinets', 'Plan for plumbing, leakage risk, edge sealing and clearance from wet floors.'],
  ['Overhead Cabinets', 'Confirm wall anchoring, fixing and manageable panel weight.'],
  ['Base Cabinets', 'Support worktops, drawers, shelves and repeated hardware movement.'],
  ['Cabinet Shutters', 'Match hinge holding with routed, laminate, veneer or painted finishes.'],
  ['Tall & Pantry Units', 'Consider height, vertical alignment, shelf spans and loaded storage.'],
  ['Appliance Areas', 'Review heat, steam, ventilation and appliance clearances separately.'],
];

const surfaces = [
  ['Natural Wood Veneer', 'For authentic timber grain where natural variation is part of the design.'],
  ['Engineered Veneer', 'For controlled woodgrain and greater visual consistency across repeat panels.'],
  ['Decorative Laminate', 'For design variety, a ready-finished surface and practical maintenance.'],
  ['Pre-Laminated Board', 'For factory-applied surfaces that can support faster modular production.'],
  ['Paint or Coating', 'Plain MDF may suit routed and painted furniture when correctly prepared.'],
];

const audiences = [
  ['Homeowners', 'Understand options before discussing the requirement with an architect, contractor or carpenter.'],
  ['Architects & Designers', 'Compare substrates, finishes, thicknesses and current availability.'],
  ['Carpenters & Fabricators', 'Discuss boards, surfaces, machining, quantity and delivery.'],
  ['Furniture Manufacturers', 'Source materials for custom or repeat furniture production.'],
  ['Builders & Contractors', 'Share project-wise board, door and interior-material requirements.'],
  ['Dealers & Distributors', 'Discuss repeat supply, serviceable territories and channel opportunities.'],
];

const process = [
  ['Share the application', 'Tell us whether you are building furniture, kitchens, wardrobes, doors, wall panels or a commercial fixture.'],
  ['Explain the environment', 'Mention moisture, heat, load, installation conditions and expected use.'],
  ['Add known details', 'Share the preferred board, thickness, size, surface and quantity if already known.'],
  ['Review suitable paths', 'Compare Pentagon-manufactured and sourced options around the actual requirement.'],
  ['Confirm supply', 'Availability, pricing, freight and serviceability are checked for your location.'],
  ['Receive the proposal', 'Fulfilment may be arranged directly or through an appropriate dealer.'],
];

const faqs = [
  ['Does Pentagon make complete furniture or modular kitchens?', 'No. Pentagon primarily manufactures and supplies boards, flush doors and related raw materials. Complete furniture or turnkey interior execution is not presented as a standard service.'],
  ['I do not know which board I need. Can I still enquire?', 'Yes. Share what you are building, where it will be installed, the finish you want and the approximate quantity.'],
  ['Does every application require plywood?', 'No. MDF, blockboard, WPC or another suitable material may be considered depending on the exact component and conditions.'],
  ['Which board is best for modular kitchens?', 'There is no single answer for every component. Moisture, plumbing, heat, hardware, load, finish and edge treatment all matter.'],
  ['Can Pentagon supply laminates and veneers with boards?', 'Pentagon sources laminates, veneers and related decorative materials through its supplier network, subject to current brands, designs and availability.'],
  ['Does Pentagon manufacture doors and door frames?', 'Pentagon manufactures flush doors. Selected finished-door requirements may be arranged. Door-frame products and construction must be confirmed separately.'],
  ['Can Pentagon support small or commercial-project orders?', 'Enquiries are welcome. Feasibility depends on the product, quantity, freight, delivery location, schedule and dealer availability.'],
  ['Can I buy directly from the website?', 'No. The website is enquiry-based so product, quantity, location and delivery feasibility can be reviewed before supply is confirmed.'],
];

function Heading({ eyebrow, title, copy, light = false }) {
  return <div className={`application-heading${light ? ' is-light' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function ComponentsGrid({ items }) {
  return <div className="application-component-grid">{items.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}

function ApplicationsPage() {
  useEffect(() => {
    document.title = 'Applications | Find the Right Material | Pentagon Plywood';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Explore plywood, blockboard, flush doors, MDF, WPC, veneers and laminates by furniture, kitchen, wardrobe, wall, commercial and trade applications.';
  }, []);

  return (
    <div className="applications-page">
      <div className="application-breadcrumb"><div className="container"><a href={ROUTES.home}>Home</a><span>›</span><strong>Applications</strong></div></div>

      <section className="application-hero">
        <div className="container application-hero-grid">
          <div className="application-hero-copy">
            <div className="application-kicker">Pentagon Application Solutions</div>
            <h1>Start With What You’re Building. <em>We’ll Help You Find the Right Material.</em></h1>
            <p>A kitchen cabinet, wardrobe, door, wall panel and commercial workstation do not necessarily require the same board.</p>
            <p>Explore manufactured and sourced materials according to the application, environment, finish, hardware and expected use.</p>
            <div className="application-actions"><a className="btn btn-primary" href={APPLICATION_SECTIONS.explore}>Explore Applications <Icon.Arrow /></a><a className="btn btn-outline" href={APPLICATION_SECTIONS.enquiry}>Discuss Your Requirement <Icon.Arrow /></a></div>
          </div>
          <div className="application-hero-visual">
            <figure className="is-main"><img src={kitchenImage} alt="Kitchen cabinetry demonstrating a material application" /><figcaption>Kitchen cabinetry</figcaption></figure>
            <figure><img src={wardrobeImage} alt="Wardrobe and storage application" /><figcaption>Storage</figcaption></figure>
            <figure><img src={officeImage} alt="Commercial workspace application" /><figcaption>Commercial</figcaption></figure>
            <div className="application-material-chip"><Icon.Layers /><span>Application first</span><strong>Material follows</strong></div>
          </div>
        </div>
        <div className="application-trust-strip"><div className="container">{['Residential & commercial', 'Manufactured & sourced options', 'Guidance based on actual use', 'Small, project & bulk enquiries', 'Direct or dealer-supported'].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div></div>
      </section>

      <section className="application-section application-why">
        <div className="container application-why-grid">
          <Heading eyebrow="Application Before Assumption" title="The Right Board Depends on Where and How It Will Be Used." copy="Materials that appear similar can behave differently after cutting, fixing, laminating and installation. Selection should begin with the finished component—not only the product name or price." />
          <div className="application-factor-list">{selectionFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, '0')}</span><p>{factor}</p></div>)}</div>
        </div>
      </section>

      <section className="application-section application-explore" id="explore-applications">
        <div className="container">
          <Heading eyebrow="What Are You Planning?" title="Find Materials for the Space, Furniture or Supply Requirement." copy="Choose the closest application. Each path explains the conditions to consider before a material is confirmed." />
          <div className="application-card-grid">{applicationCards.map((card) => <article id={card.id} key={card.id}><img src={card.image} alt={`${card.title} material application`} /><div className="application-card-overlay"><div><span>{card.number} · {card.label}</span><h3>{card.title}</h3></div><p>{card.copy}</p><small>{card.detail}</small><a href={card.target}>Explore this application <Icon.Arrow /></a></div></article>)}</div>
        </div>
      </section>

      <section className="application-section application-guide" id="material-guide">
        <div className="container">
          <Heading eyebrow="A Practical Starting Point" title="One Application May Need More Than One Material." copy="Use this guide to begin a conversation. Final suitability depends on the exact grade, verified test data, component design and construction method." />
          <div className="application-guide-table" role="table" aria-label="Application to material starting guide">
            <div className="application-guide-row is-head" role="row"><span>Application</span><span>Possible starting materials</span><span>Confirm before selection</span></div>
            {materialGuide.map((row) => <div className="application-guide-row" role="row" key={row[0]}>{row.map((cell) => <span role="cell" key={cell}>{cell}</span>)}</div>)}
          </div>
          <div className="application-note"><strong>Important</strong><p>This is a starting point, not a universal product recommendation. Ask for the applicable grade, documentation and availability.</p><a href={CONTACT_SECTIONS.form}>Compare materials for my application <Icon.Arrow /></a></div>
        </div>
      </section>

      <section className="application-detail application-detail-split" id="detail-home-furniture">
        <div className="container"><div className="application-detail-media"><img src={livingImage} alt="Home furniture application" /><span>Everyday living · Component-led selection</span></div><div><Heading eyebrow="Materials for Everyday Living" title="Choose the Board According to the Furniture Component." /><ComponentsGrid items={furnitureComponents} /><a className="application-text-link" href={CONTACT_SECTIONS.form}>Plan my furniture materials <Icon.Arrow /></a></div></div>
      </section>

      <section className="application-section application-kitchen" id="detail-modular-kitchens">
        <div className="container"><Heading eyebrow="Plan for the Working Environment" title="Kitchen Materials Must Handle More Than Everyday Storage." copy="A modular kitchen contains several different environments. The substrate, surface, edges, joints, adhesive, plumbing and installation all influence the finished unit." /><div className="application-feature-layout"><ComponentsGrid items={kitchenComponents} /><div className="application-feature-image"><img src={kitchenImage} alt="Kitchen cabinet and storage components" /><div><strong>A laminate alone does not make an unsuitable substrate waterproof.</strong><p>Review plumbing locations, heat, steam, edge sealing and ventilation as a complete system.</p></div></div></div></div>
      </section>

      <section className="application-detail application-wardrobe" id="detail-wardrobes-storage">
        <div className="container"><div><Heading light eyebrow="Plan the Complete Unit" title="The Carcass, Shutters, Shelves and Finish May Need Different Decisions." /><div className="application-check-grid">{['Wardrobe height and width', 'Shelf length and expected load', 'Sliding or hinged shutters', 'Hinge and channel requirements', 'Drawer and loft construction', 'Internal and external finish', 'Dampness in the supporting wall', 'Clearance from the floor', 'Edge sealing and ventilation', 'Future repair or replacement'].map((item) => <div key={item}><Icon.Check />{item}</div>)}</div><a className="btn btn-accent" href={CONTACT_SECTIONS.form}>Choose Wardrobe Materials <Icon.Arrow /></a></div><img src={wardrobeImage} alt="Wardrobe and storage cabinetry" /></div>
      </section>

      <section className="application-section application-three-paths">
        <div className="container">
          <article id="detail-doors-shutters"><img src={doorImage} alt="Flush door manufactured by Pentagon Plywood" /><span>Doors & Related Requirements</span><h2>Select the Door According to Its Location, Finish and Hardware.</h2><p>Discuss plain flush doors, suitable waterproof-grade options, laminated, veneered or membrane finishes, room doors, cabinet shutters and project requirements.</p><small>Materials and sourced solutions for selected door-frame requirements are available subject to specification and confirmation.</small><a href={CONTACT_SECTIONS.form}>Discuss a door requirement <Icon.Arrow /></a></article>
          <article id="detail-wall-panelling"><img src={bathroomImage} alt="Wall panel and interior feature application" /><span>Build Beyond Furniture</span><h2>The Visible Surface Is Only One Part of a Wall-Panel System.</h2><p>Consider the base wall, framing, panel weight, fixing, electrical openings, movement gaps, moisture, cleaning, access and applicable fire requirements.</p><a href={CONTACT_SECTIONS.form}>Plan a wall-panel requirement <Icon.Arrow /></a></article>
          <article id="detail-commercial-interiors"><img src={officeImage} alt="Office and commercial interior furniture" /><span>Materials for Repeated Use</span><h2>Commercial Interiors Need Consistency Across More Than One Panel.</h2><p>Confirm repeat availability, colour and batch consistency, cleaning, abrasion, hardware, documentation, approved samples and delivery sequence.</p><a href={CONTACT_SECTIONS.form}>Share a commercial schedule <Icon.Arrow /></a></article>
        </div>
      </section>

      <section className="application-section application-surfaces">
        <div className="container"><Heading eyebrow="Core and Finish Together" title="The Board Provides the Base. The Surface Defines Appearance and Maintenance." copy="A surface should not be selected independently of its base board. Adhesive compatibility, balancing, edge treatment and fabrication remain important." /><div className="application-surface-grid">{surfaces.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="application-material-schedule" id="material-planning">
        <div className="container application-schedule-grid"><div><Heading light eyebrow="Build a Material Schedule" title="A Complete Project Does Not Have to Use One Board Everywhere." copy="A kitchen, wardrobe or commercial interior can combine materials according to each component’s function. The final schedule should be approved by the designer, fabricator or responsible project professional." /><a className="btn btn-accent" href={CONTACT_SECTIONS.form}>Share My Complete Material List <Icon.Arrow /></a></div><div className="application-stack">{[['MR, BWP, Marine & Fire Retardant Plywood', 'Manufactured grades selected around the requirement'], ['Blockboard', 'Manufactured long panels and shutters'], ['Flush Doors', 'Manufactured interior door foundations'], ['MDF, WPC & HDHMR', 'Sourced or traded boards, subject to availability'], ['Laminates & veneers', 'Sourced decorative material options'], ['Formaldehyde', 'Industrial chemical discussions for relevant manufacturing requirements']].map(([title, copy], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{copy}</small></div>)}</div></div>
      </section>

      <section className="application-section application-audiences">
        <div className="container"><Heading eyebrow="Residential, Professional and Trade Buyers" title="Different Buyers Need Different Types of Support." /><div className="application-audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="application-supply">
        <div className="container"><Heading light eyebrow="Manufactured and Sourced Materials" title="Bring the Application to Pentagon—not Just a Product Name." /><div className="application-supply-grid"><div><span>Manufactured by Pentagon</span>{['MR, BWP, Marine & Fire Retardant Plywood', 'Blockboard', 'Flush Doors', 'Formaldehyde through group chemical operations'].map((item) => <strong key={item}><Icon.Check />{item}</strong>)}</div><div><span>Sourced and supplied · subject to availability</span>{['MDF boards', 'WPC boards', 'HDHMR boards', 'Laminates', 'Natural & engineered veneers', 'Laminated panels and doors'].map((item) => <strong key={item}><Icon.Check />{item}</strong>)}</div></div><p className="application-supply-note">Pentagon supplies manufactured boards, doors and industrial chemicals, alongside selected sourced or traded materials subject to availability. Complete furniture manufacturing and turnkey interior execution are not standard services.</p></div>
      </section>

      <section className="application-section application-process">
        <div className="container"><Heading eyebrow="From Requirement to Supply" title="Tell Us What You’re Building—even if the Specification Is Not Final." /><div className="application-process-grid">{process.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="application-section application-reasons">
        <div className="container"><Heading eyebrow="More Than One Material Path" title="Because the Correct Question Is Not Always “Which Plywood?”" /><div className="application-reason-grid">{[['Application-led guidance', 'Begin with the component, environment, surface and expected use.'], ['In-house core products', 'Plywood, blockboard and flush doors manufactured at Yamunanagar.'], ['Related material sourcing', 'Discuss MDF, WPC, veneers, laminates and selected materials.'], ['No one-material approach', 'Compare suitable products without automatically dismissing alternatives.'], ['Trade & project support', 'Small, repeat, project and bulk material enquiries are welcome.'], ['Established supply network', 'Assess availability through direct and dealer relationships.']].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="application-trade" id="trade-supply">
        <div className="container application-trade-grid"><div><Heading light eyebrow="For Trade Buyers" title="Looking for Repeat Supply or a Broader Product Portfolio?" copy="Share the products, grades, dimensions, monthly quantity, operating territory and delivery location. Pentagon will confirm current availability, commercial terms and serviceability." /><div className="application-actions"><a className="btn btn-accent" href={ROUTES.dealers}>Request Dealer Information <Icon.Arrow /></a><a className="btn application-light-outline" href={CONTACT_SECTIONS.form}>Submit a Bulk Requirement <Icon.Arrow /></a></div></div><div className="application-trade-list">{['MR, BWP, Marine & Fire Retardant Plywood', 'Blockboard', 'Flush Doors', 'MDF, WPC & HDHMR boards', 'Decorative laminates', 'Natural & engineered veneers', 'Laminated panels and doors', 'Mixed manufactured and sourced requirements'].map((item) => <div key={item}><Icon.Check />{item}</div>)}</div></div>
      </section>

      <section className="application-section application-faq" id="applications-faq">
        <div className="container"><Heading eyebrow="Frequently Asked Questions" title="Questions Before You Select a Material." /><div className="application-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="application-enquiry" id="application-enquiry">
        <div className="container application-enquiry-grid"><div><div className="application-kicker">Start With the Application</div><h2>Tell Us What You’re Planning to Build.</h2><p>Share the application, preferred material, finish, dimensions, quantity and delivery location. If you do not have a specification yet, a drawing, reference image or material list is enough to begin.</p><div className="application-actions"><a className="btn btn-accent" href={CONTACT_SECTIONS.form}>Send My Application Requirement <Icon.Arrow /></a><a className="btn application-light-outline" href="tel:+917206104340">Call +91 7206 104 340 <Icon.Arrow /></a></div></div><aside><span>Your useful starting brief</span>{['What you are building', 'Installation environment', 'Preferred board or product', 'Surface or finish', 'Size, thickness and quantity', 'Delivery city and expected date'].map((item) => <div key={item}><Icon.Check />{item}</div>)}<small>Not sure which material to select? Begin by telling us what you’re building.</small></aside></div>
      </section>
    </div>
  );
}

export default ApplicationsPage;
