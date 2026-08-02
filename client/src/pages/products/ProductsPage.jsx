import { useEffect } from 'react';
import {
  ArrowRight,
  Blocks,
  Check,
  DoorOpen,
  Factory,
  FlaskConical,
  HelpCircle,
  Layers3,
  MapPin,
  PackageCheck,
  PanelsTopLeft,
  Send,
  ShieldCheck,
  SwatchBook,
} from 'lucide-react';
import { CONTACT_SECTIONS, PRODUCT_ROUTES, ROUTES } from '../../app/routes.js';
import {
  applicationProducts,
  manufacturedCategories,
  sourcedGroups,
} from '../../data/productCatalog.js';
import heroBoards from '../../assets/Wooden layered boards.png';
import plywoodImage from '../../assets/homepage/products/mr-grade-plywood-1671449588-6629452.webp';
import blockboardImage from '../../assets/homepage/products/is303-blockboard-1671450145-6629496.webp';
import doorImage from '../../assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp';
import factoryImage from '../../assets/homepage/Plywood-Manufacturing-1024x683.jpg';
import surfaceImage from '../../assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg';
import './products-page.css';

const ArrowLink = ({ href, children, className = '' }) => (
  <a className={`products-arrow-link ${className}`} href={href}>
    <span>{children}</span><ArrowRight aria-hidden="true" />
  </a>
);

const SectionHeading = ({ eyebrow, title, copy, light = false }) => (
  <div className={`products-section-heading${light ? ' is-light' : ''}`}>
    <span className="products-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

const categoryVisuals = {
  plywood: { image: plywoodImage, icon: Layers3 },
  blockboard: { image: blockboardImage, icon: Blocks },
  'flush-doors': { image: doorImage, icon: DoorOpen },
};

function ProductsPage() {
  useEffect(() => {
    document.title = 'Products | Pentagon Plywood';
  }, []);

  return (
    <div className="products-page">
      <div className="products-breadcrumb" aria-label="Breadcrumb">
        <div className="container"><a href={ROUTES.home}>Home</a><span>/</span><strong>Products</strong></div>
      </div>

      <section className="products-hero">
        <div className="products-hero-grain" aria-hidden="true" />
        <div className="container products-hero-layout">
          <div className="products-hero-copy">
            <span className="products-eyebrow">Pentagon Product Portfolio</span>
            <h1>Materials for furniture, interiors and manufacturing <em>made and sourced</em> through Pentagon.</h1>
            <p>Pentagon brings together its in-house manufacturing capabilities and a broader network of wood-panel and interior-material suppliers.</p>
            <p className="products-hero-detail">Explore manufactured plywood, blockboards, flush doors and industrial chemicals, alongside complementary boards and decorative materials sourced for dealer, fabricator and project requirements.</p>
            <div className="products-actions">
              <a className="products-btn products-btn-primary" href="#manufactured">Explore our products <ArrowRight /></a>
              <a className="products-btn products-btn-outline" href="#application-finder">Help me choose <HelpCircle /></a>
            </div>
          </div>
          <div className="products-hero-visual" aria-label="Pentagon wood products composition">
            <figure className="products-hero-main"><img src={heroBoards} alt="Layered plywood boards" /></figure>
            <figure className="products-hero-inset products-hero-inset-factory"><img src={factoryImage} alt="Pentagon plywood manufacturing facility" /></figure>
            <figure className="products-hero-inset products-hero-inset-surface"><img src={surfaceImage} alt="Finished wood panel surface" /></figure>
            <span className="products-visual-stamp"><Factory /> Yamunanagar manufacturing</span>
          </div>
        </div>
        <div className="container products-quick-nav" aria-label="Product page quick navigation">
          <a href="#manufactured"><Factory />Manufactured by Pentagon</a>
          <a href="#sourced"><PackageCheck />Traded &amp; sourced products</a>
          <a href="#application-finder"><PanelsTopLeft />Choose by application</a>
          <a href="#product-enquiry"><Send />Request a bulk quote</a>
        </div>
      </section>

      <section className="products-manufactured" id="manufactured">
        <div className="container">
          <SectionHeading
            eyebrow="Manufactured In-House"
            title="Core products built within Pentagon’s own manufacturing network."
            copy="Pentagon’s principal manufacturing portfolio includes plywood, blockboards and flush doors produced through its wood-product operations in Yamunanagar."
          />
          <div className="products-ownership-label"><Factory /> Made by Pentagon</div>
          <div className="products-manufactured-grid">
            {manufacturedCategories.map((category, index) => {
              const visual = categoryVisuals[category.id];
              const Icon = visual.icon;
              return (
                <article className="products-category-card" key={category.id}>
                  <div className="products-category-image">
                    <img src={visual.image} alt="" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="products-category-body">
                    <div className="products-category-label"><Icon />{category.label}</div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <div className="products-card-columns">
                      <div><strong>Available products</strong>{category.products.map((item) => <span key={item}><Check />{item}</span>)}</div>
                      <div><strong>Common applications</strong>{category.applications.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <div className="products-card-actions">
                      <ArrowLink href={category.href}>Explore {category.id === 'flush-doors' ? 'flush doors' : category.id}</ArrowLink>
                      <ArrowLink href={category.secondaryHref} className="is-muted">Compare options</ArrowLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="products-standards-note">
            <ShieldCheck />
            <p><strong>Standards-led product selection.</strong> MR and BWP, Marine and Fire Retardant grades should be specified against the applicable standard and current licence documentation.</p>
          </div>
        </div>
      </section>

      <section className="products-chemical" id="chemical-division">
        <div className="container products-chemical-layout">
          <div className="products-chemical-visual"><img src={factoryImage} alt="Industrial manufacturing facility" /><span><FlaskConical />Industrial manufacturing</span></div>
          <div className="products-chemical-copy">
            <SectionHeading light eyebrow="Pentagon Chemical Division" title="Formaldehyde for wood-panel and industrial production requirements." />
            <p>Alongside its wood-product operations, Pentagon manufactures Formaldehyde through dedicated units in Yamunanagar, Haryana, and Morbi, Gujarat.</p>
            <div className="products-chip-list">{['Plywood manufacturers', 'Laminate manufacturers', 'Resin manufacturers', 'Bulk procurement', 'Tanker-load requirements'].map((item) => <span key={item}>{item}</span>)}</div>
            <div className="products-actions"><a className="products-btn products-btn-light" href={PRODUCT_ROUTES.formaldehyde}>Send an industrial enquiry <ArrowRight /></a><a className="products-text-link" href={CONTACT_SECTIONS.form}>Contact the chemical division</a></div>
          </div>
        </div>
      </section>

      <section className="products-sourced" id="sourced">
        <div className="container">
          <div className="products-heading-row">
            <SectionHeading eyebrow="Beyond Our Manufacturing Range" title="Complementary materials, sourced around the complete requirement." copy="A furniture manufacturer, dealer or interior project may need more than plywood alone. Pentagon also supplies selected materials through its sourcing and trading network." />
            <div className="products-ownership-label is-sourced"><PackageCheck /> Sourced by Pentagon</div>
          </div>
          <p className="products-availability-note">Availability, brand, grade, size, thickness and minimum quantity may vary. Share the complete material list so the team can check current options.</p>
          <div className="products-sourced-groups">
            {sourcedGroups.map((group, index) => (
              <article className="products-sourced-group" key={group.id}>
                <div className="products-sourced-head">
                  {index === 0 ? <SwatchBook /> : index === 1 ? <Blocks /> : <Layers3 />}
                  <div><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p></div>
                </div>
                <div className="products-sourced-list">
                  {group.products.map(([title, description, href]) => (
                    <a href={href} key={title}><span><strong>{title}</strong><small>{description}</small></span><ArrowRight /></a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-applications" id="application-finder">
        <div className="container">
          <SectionHeading eyebrow="Start With the Application" title="Tell us the finished requirement, not just the board name." />
          <div className="products-application-grid">
            {applicationProducts.map(([title, description, href], index) => (
              <a href={href} className="products-application-card" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><ArrowRight />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="products-classification">
        <div className="container">
          <SectionHeading eyebrow="Clear Product Classification" title="Know how Pentagon serves each requirement." />
          <div className="products-compare-grid">
            <article className="is-made"><span><Factory />Made by Pentagon</span><h3>Produced through Pentagon’s manufacturing operations.</h3><ul>{['Plywood', 'Blockboard', 'Flush Doors', 'Formaldehyde'].map((item) => <li key={item}><Check />{item}</li>)}</ul><p>Manufacturing-related specifications and quality claims should be supported by Pentagon documentation.</p></article>
            <article className="is-sourced"><span><PackageCheck />Sourced by Pentagon</span><h3>Procured through Pentagon’s supplier network.</h3><ul>{['Decorative materials', 'Engineered boards', 'Laminated panels and doors'].map((item) => <li key={item}><Check />{item}</li>)}</ul><p>Brand, availability and specifications depend on the selected supplier and should be confirmed for each enquiry.</p></article>
          </div>
          <p className="products-classification-note">Trading is a useful service: discuss a combined material requirement with one team instead of sourcing every board and finish separately.</p>
        </div>
      </section>

      <section className="products-support">
        <div className="container">
          <SectionHeading eyebrow="One Requirement. More Complete Support." title="From core panels to decorative finishes, start with one conversation." />
          <div className="products-support-grid">
            {[
              [Factory, 'In-house manufacturing', 'Core plywood, blockboard and flush-door products manufactured directly.'],
              [PackageCheck, 'Complementary sourcing', 'Related boards, laminates and finished materials for broader requirements.'],
              [PanelsTopLeft, 'Application-led guidance', 'Tell us what you are making and where it will be installed.'],
              [MapPin, 'Small and bulk requirements', 'Support for practical project quantities and larger dealer orders.'],
            ].map(([Icon, title, copy]) => <article key={title}><Icon /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="products-enquiry" id="product-enquiry">
        <div className="container products-enquiry-layout">
          <div>
            <SectionHeading light eyebrow="Let’s Build the Product List" title="Tell us what you’re making. We’ll help find the required materials." copy="Share the application, product, size, thickness, finish, quantity and delivery location. If you are unsure of the exact board, describe the finished requirement." />
            <div className="products-enquiry-points"><span><Check />Dealer and distributor supply</span><span><Check />Furniture and interior projects</span><span><Check />Bulk board procurement</span><span><Check />Industrial chemical requirements</span></div>
          </div>
          <form className="products-enquiry-form" action={CONTACT_SECTIONS.form} method="get">
            <div className="products-form-heading"><span>Product requirement</span><strong>Start with the details you know.</strong></div>
            <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your full name" /></label>
            <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
            <label className="is-wide"><span>What are you making?</span><input name="application" placeholder="e.g. wardrobes, kitchen cabinets or doors" /></label>
            <label><span>Product category</span><select name="product"><option>Not sure — help me choose</option><option>Plywood</option><option>Blockboard</option><option>Flush Doors</option><option>Formaldehyde</option><option>Traded & sourced products</option></select></label>
            <label><span>Quantity</span><input name="quantity" placeholder="Sheets / doors / bulk volume" /></label>
            <label className="is-wide"><span>Delivery city and state</span><input name="location" autoComplete="address-level2" placeholder="City, State" /></label>
            <button className="products-btn products-btn-primary is-wide" type="submit">Send my product requirement <ArrowRight /></button>
            <p className="products-form-note is-wide">Need several products? You can also WhatsApp your complete requirement list after connecting with the team.</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
