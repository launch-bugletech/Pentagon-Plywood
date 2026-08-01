import { useEffect, useMemo, useState } from 'react';
import { comingSoonUrl, CONTACT_SECTIONS, HOME_SECTIONS, ROUTES } from '../../app/routes.js';
import './contact-page.css';

const PHONE_DISPLAY = '+91 72061 04340';
const PHONE_LINK = 'tel:+917206104340';
const EMAIL = 'pentagonplywood@gmail.com';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Pentagon Plywood, I would like to enquire about a product. My required quantity is and the delivery location is.',
);
const WHATSAPP_LINK = `https://wa.me/917206104340?text=${WHATSAPP_MESSAGE}`;

const enquiryTypes = [
  {
    value: 'product',
    number: '01',
    title: 'Product Enquiry',
    copy: 'Ask about product grade, size, thickness, application, quantity or current availability.',
    action: 'Ask About a Product',
  },
  {
    value: 'dealer',
    number: '02',
    title: 'Dealer or Distributor',
    copy: 'Tell us about your business, current product categories and the territory you serve.',
    action: 'Discuss Dealership',
  },
  {
    value: 'project',
    number: '03',
    title: 'Project or Bulk Requirement',
    copy: 'Share a requirement for a residential, commercial, hospitality or institutional project.',
    action: 'Share Project Details',
  },
  {
    value: 'export',
    number: '04',
    title: 'Export Enquiry',
    copy: 'Share the destination, required products, estimated quantity and delivery expectations.',
    action: 'Start an Export Enquiry',
  },
  {
    value: 'general',
    number: '05',
    title: 'Just Want to Connect?',
    copy: 'Not sure which option fits? Ask a question or leave a message and our team will route it for you.',
    action: 'Ask a Question',
  },
];

const customerTypes = [
  'Homeowner',
  'Carpenter or Furniture Maker',
  'Interior Designer',
  'Architect',
  'Builder or Contractor',
  'Dealer or Distributor',
  'Commercial Buyer',
  'Institutional Buyer',
  'Export Buyer',
  'Other',
];

const productCategories = [
  'Plywood',
  'Blockboard',
  'Membrane Door',
  'Laminated Door',
  'Flush Door',
  'Multiple Products',
  'Not Sure Yet',
];

const directContacts = [
  {
    type: 'Call',
    detail: PHONE_DISPLAY,
    copy: 'For product, price, availability and business enquiries.',
    href: PHONE_LINK,
    action: 'Call Pentagon',
  },
  {
    type: 'WhatsApp',
    detail: PHONE_DISPLAY,
    copy: 'Send the product, quantity and delivery city, with a reference image if useful.',
    href: WHATSAPP_LINK,
    action: 'Start WhatsApp Chat',
  },
  {
    type: 'Email',
    detail: EMAIL,
    copy: 'For detailed specifications, BOQs, business proposals and export requirements.',
    href: `mailto:${EMAIL}`,
    action: 'Email Your Requirement',
  },
  {
    type: 'Visit',
    detail: 'Yamunanagar, Haryana',
    copy: 'Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001, India.',
    href: CONTACT_SECTIONS.location,
    action: 'Get Directions',
  },
];

const nextSteps = [
  ['01', 'We Review the Requirement', 'We review the product, application, quantity, specifications and delivery location.'],
  ['02', 'We Clarify the Details', 'If information is missing, we contact you to understand the grade, size, thickness, finish or project need.'],
  ['03', 'We Discuss the Next Step', 'Once the requirement is clear, we can discuss suitable available options and the appropriate commercial step.'],
];

const productDirections = [
  ['Furniture and Interior Work', 'Explore MR Grade Plywood and Blockboard according to the application, panel length, moisture conditions and finish.', 'Discuss an Interior Requirement', 'product'],
  ['Moisture-Prone Applications', 'Tell us where the material will be installed and the exposure expected so the appropriate grade can be discussed.', 'Ask About Water Resistance', 'product'],
  ['Doors and Shutters', 'Share the opening size, door type, thickness, preferred finish, quantity and internal or external use.', 'Discuss Door Options', 'product'],
  ['Dealer and Bulk Supply', 'Provide your market, product categories, estimated volume and delivery location.', 'Start a Business Enquiry', 'dealer'],
];

const faqs = [
  ['How can I request a product quotation?', 'Select Product Enquiry or Project or Bulk Requirement and share the product, size, thickness, quantity and delivery location. If you do not know every specification, describe the intended application.'],
  ['Can I send my requirement on WhatsApp?', `Yes. The currently published WhatsApp number is ${PHONE_DISPLAY}. Include the product, quantity and delivery city, and attach any useful reference image or document.`],
  ['Can I enquire about becoming a dealer or distributor?', 'Yes. Select Dealer or Distributor and provide your business name, market location, current product categories and territory.'],
  ['Can architects, builders and interior designers submit a BOQ?', 'Yes. The form accepts a specification, drawing, BOQ or reference document. Confirm the final file-size requirements with our team if the document is large.'],
  ['Can I visit the Pentagon manufacturing location?', 'The published address is Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001. Contact the team before visiting so the timing and appropriate representative can be confirmed.'],
  ['Does Pentagon accept export enquiries?', 'You may submit an export enquiry for review. Current export availability, markets and delivery terms will be confirmed by the Pentagon team for the specific requirement.'],
  ['What information should I include?', 'Where possible, include the product, grade, size, thickness, quantity, application, delivery location and required-by date.'],
  ['When will I receive a response?', 'Our team will review your requirement and contact you using your preferred method.'],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`contact-section-heading${light ? ' is-light' : ''}`}>
      <div className="contact-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Field({ label, required, children, className = '' }) {
  return (
    <label className={`contact-field ${className}`}>
      <span>{label}{required && <b aria-hidden="true">*</b>}</span>
      {children}
    </label>
  );
}

function ContactPage() {
  const [enquiryType, setEnquiryType] = useState('general');
  const [productCategory, setProductCategory] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const selectedType = useMemo(
    () => enquiryTypes.find((item) => item.value === enquiryType) || enquiryTypes[0],
    [enquiryType],
  );

  const selectEnquiry = (value) => {
    setEnquiryType(value);
    setExpanded(false);
    setSubmitted(false);
    window.requestAnimationFrame(() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!expanded) {
      if (!event.currentTarget.reportValidity()) return;
      setExpanded(true);
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = 'Contact Pentagon Plywood | Product, Dealer & Bulk Enquiries';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Contact Pentagon Plywood in Yamunanagar for plywood, blockboard, doors, dealer, bulk and project enquiries. Call, WhatsApp or share your requirement online.';
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-breadcrumb">
        <div className="container"><a href={ROUTES.home}>Home</a><span>›</span><strong>Contact Us</strong></div>
      </div>

      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <div className="contact-eyebrow">Contact Pentagon</div>
            <h1>Tell Us What You’re Building. <em>Let’s Start With the Right Conversation.</em></h1>
            <p>Looking for plywood, blockboard or doors for resale, furniture, interiors or a larger project? Share your requirement, and we’ll help you understand the relevant product options and current availability.</p>
            <div className="contact-hero-actions">
              <a className="btn btn-primary" href={PHONE_LINK}>Call Now <ArrowIcon /></a>
              <a className="btn btn-outline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp Us <ArrowIcon /></a>
            </div>
            <div className="contact-direct-line">Prefer speaking directly? <a href={PHONE_LINK}>Call us at <strong>{PHONE_DISPLAY}</strong></a>.</div>
            <div className="contact-hero-note">
              <span>Product</span><span>Dealer</span><span>Project</span><span>Export</span>
            </div>
          </div>

          <form className="contact-enquiry-form" id="contact-form" onSubmit={handleSubmit} noValidate={false}>
            {submitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-mark">✓</span>
                <div className="contact-eyebrow">Requirement Received</div>
                <h2>Thank You. Your Requirement Has Reached Us.</h2>
                <p>Your enquiry reference is <strong>PP-{new Date().getFullYear()}-WEB</strong>. Our team will review the details and contact you using your preferred method.</p>
                <div className="contact-success-actions">
                  <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
                  <a className="btn btn-outline" href={HOME_SECTIONS.products}>Explore Products</a>
                </div>
                <button type="button" className="contact-reset" onClick={() => setSubmitted(false)}>Send another requirement</button>
              </div>
            ) : (
              <>
                <div className="contact-form-head">
                  <div>
                    <div className="contact-eyebrow">Start the Conversation</div>
                    <h2>{selectedType.title}</h2>
                  </div>
                  <span>{expanded ? '02—02' : '01—02'}</span>
                </div>
                <p className="contact-form-intro">Choose the closest reason for contacting us. Not sure? Keep “Just Want to Connect?” selected and send a simple message.</p>

                <div className="contact-purpose-picker" role="group" aria-label="Choose an enquiry type">
                  {enquiryTypes.map((item) => (
                    <button className={item.value === enquiryType ? 'is-selected' : ''} type="button" key={item.value} onClick={() => { setEnquiryType(item.value); setExpanded(false); }} aria-pressed={item.value === enquiryType}>
                      <span>{item.number}</span>{item.title}
                    </button>
                  ))}
                </div>

                <div className="contact-purpose-summary"><span aria-hidden="true">?</span><p>{selectedType.copy}</p></div>

                {enquiryType === 'product' && (
                  <div className={`contact-form-grid contact-dynamic-fields${expanded ? ' is-collapsed' : ''}`}>
                    <Field label="Product category" required><select value={productCategory} onChange={(event) => setProductCategory(event.target.value)} required><option value="">Select a category</option>{productCategories.map((item) => <option key={item}>{item}</option>)}</select></Field>
                    <Field label="Product or grade"><input type="text" placeholder="e.g. MR Grade Plywood" /></Field>
                    <Field label="Intended application"><input type="text" placeholder="Furniture, kitchen, doors…" /></Field>
                    <Field label="Estimated quantity"><input type="text" placeholder={productCategory === 'Not Sure Yet' ? 'Optional' : 'e.g. 50 sheets'} /></Field>
                  </div>
                )}

                {enquiryType === 'dealer' && (
                  <div className={`contact-form-grid contact-dynamic-fields${expanded ? ' is-collapsed' : ''}`}>
                    <Field label="Business name" required><input type="text" required placeholder="Your firm or store" /></Field>
                    <Field label="Operating city" required><input type="text" required placeholder="City and state" /></Field>
                    <Field label="Current categories"><input type="text" placeholder="Plywood, laminates, hardware…" /></Field>
                    <Field label="Market or territory"><input type="text" placeholder="Areas you currently serve" /></Field>
                    <a className="contact-partner-link is-wide" href={ROUTES.dealers}>Review the dealer and distributor process <ArrowIcon /></a>
                  </div>
                )}

                {enquiryType === 'project' && (
                  <div className={`contact-form-grid contact-dynamic-fields${expanded ? ' is-collapsed' : ''}`}>
                    <Field label="Project type" required><input type="text" required placeholder="Residential, office, hospitality…" /></Field>
                    <Field label="Project location" required><input type="text" required placeholder="City and state" /></Field>
                    <Field label="Approximate quantity"><input type="text" placeholder="If known" /></Field>
                    <Field label="Expected purchase date"><input type="date" /></Field>
                  </div>
                )}

                {enquiryType === 'export' && (
                  <div className={`contact-form-grid contact-dynamic-fields${expanded ? ' is-collapsed' : ''}`}>
                    <Field label="Destination" required><input type="text" required placeholder="Country and port" /></Field>
                    <Field label="Required products" required><input type="text" required placeholder="Products or grades" /></Field>
                    <Field label="Estimated quantity"><input type="text" placeholder="Sheets, containers or volume" /></Field>
                    <Field label="Shipment preference"><input type="text" placeholder="If known" /></Field>
                  </div>
                )}

                {enquiryType === 'general' && (
                  <div className={`contact-form-grid contact-dynamic-fields${expanded ? ' is-collapsed' : ''}`}>
                    <Field label="What would you like to discuss?" className="is-wide"><input type="text" placeholder="A product, document, visit, partnership or something else" /></Field>
                    <Field label="Your message" required className="is-wide"><textarea rows="4" required placeholder="Write your question in your own words. Technical details are not required." /></Field>
                  </div>
                )}

                {expanded && (
                  <div className="contact-form-more">
                    <button className="contact-form-back" type="button" onClick={() => setExpanded(false)}>← Edit enquiry details</button>
                    <div className="contact-form-step"><span>02</span><strong>How can we reach you?</strong></div>
                    <div className="contact-form-grid">
                      <Field label="Full name" required><input type="text" autoComplete="name" required /></Field>
                      <Field label="Company name"><input type="text" autoComplete="organization" /></Field>
                      <Field label="Customer type"><select defaultValue=""><option value="">Select if relevant</option>{customerTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
                      <Field label="Mobile number" required><input type="tel" autoComplete="tel" placeholder="+91" required /></Field>
                      <Field label="Email address" required={enquiryType === 'export'}><input type="email" autoComplete="email" required={enquiryType === 'export'} /></Field>
                      <Field label="Preferred contact"><select defaultValue="Phone"><option>Phone</option><option>WhatsApp</option><option>Email</option></select></Field>
                      {enquiryType !== 'general' && <Field label="Anything else we should know?" className="is-wide"><textarea rows="3" placeholder="Add application details, dimensions, delivery information or any useful context." /></Field>}
                      <Field label="Upload a reference" className="is-wide"><input type="file" accept=".pdf,.xls,.xlsx,.doc,.docx,image/*" /><small>Optional: PDF, BOQ, drawing, spreadsheet or reference image.</small></Field>
                    </div>
                    <label className="contact-consent">
                      <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />
                      <span>I agree that Pentagon Plywood Pvt. Ltd. may contact me by phone, WhatsApp or email regarding this enquiry. My information will be handled according to the <a href={comingSoonUrl('Privacy policy')}>Privacy Policy</a>.</span>
                    </label>
                  </div>
                )}

                <button className="btn btn-primary contact-submit" type="submit">
                  {expanded ? (enquiryType === 'general' ? 'Send My Message' : 'Send My Requirement') : 'Add Contact Details'} <ArrowIcon />
                </button>
                <p className="contact-form-footnote">Only the fields relevant to your selected enquiry are shown. Fields marked * are required.</p>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="contact-section contact-enquiry-types" id="enquiry-types">
        <div className="container">
          <SectionHeading
            eyebrow="How Can We Help?"
            title="Choose What You’d Like to Discuss."
            copy="Selecting an enquiry type helps us ask for the right information and route your message to the relevant team."
          />
          <div className="contact-type-grid">
            {enquiryTypes.map((item) => (
              <article className={item.value === enquiryType ? 'is-selected' : ''} key={item.value}>
                <button className="contact-type-card-action" type="button" onClick={() => selectEnquiry(item.value)} aria-label={`${item.action}: ${item.title}`}>
                  <div className="contact-type-top"><span>{item.number}</span><i>↗</i></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="contact-type-action-label">{item.action} <ArrowIcon /></span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section contact-direct" id="direct-contact">
        <div className="container">
          <SectionHeading eyebrow="Prefer a Direct Conversation?" title="Reach Pentagon in the Way That Works for You." />
          <div className="contact-direct-grid">
            {directContacts.map((item, index) => (
              <article key={item.type}>
                <span>0{index + 1}</span>
                <h3>{item.type}</h3>
                <strong>{item.detail}</strong>
                <p>{item.copy}</p>
                <a href={item.href} target={item.type === 'WhatsApp' ? '_blank' : undefined} rel={item.type === 'WhatsApp' ? 'noreferrer' : undefined}>{item.action} <ArrowIcon /></a>
              </article>
            ))}
          </div>
          <p className="contact-visit-note">Please contact our team before visiting so we can confirm the appropriate time and person for your requirement.</p>
        </div>
      </section>

      <section className="contact-location" id="location">
        <div className="container contact-location-grid">
          <div>
            <SectionHeading
              eyebrow="Find Pentagon"
              title="Manufacturing From Yamunanagar, Haryana."
              copy="Pentagon Plywood operates from one of India’s established wood-product manufacturing regions. Contact our team before planning a business or factory visit."
              light
            />
            <address>Village Raipur, Khajuri Road<br />Yamunanagar, Haryana 135001<br />India</address>
            <div className="contact-location-actions">
              <a className="btn btn-light" href="https://www.google.com/maps/search/?api=1&query=Village+Raipur+Khajuri+Road+Yamunanagar+Haryana+135001" target="_blank" rel="noreferrer">Open in Google Maps <ArrowIcon /></a>
              <a className="btn btn-outline about-light-button" href={PHONE_LINK}>Plan a Visit</a>
            </div>
          </div>
          <a className="contact-map-preview" href="https://www.google.com/maps/search/?api=1&query=Village+Raipur+Khajuri+Road+Yamunanagar+Haryana+135001" target="_blank" rel="noreferrer" aria-label="Open Pentagon Plywood location in Google Maps">
            <div className="contact-map-grid" aria-hidden="true" />
            <span className="contact-map-pin" aria-hidden="true">P</span>
            <div><small>Pentagon Plywood Pvt. Ltd.</small><strong>Yamunanagar · Haryana</strong></div>
          </a>
        </div>
      </section>

      <section className="contact-section contact-next" id="next-step">
        <div className="container">
          <SectionHeading eyebrow="The Next Step" title="A Clear Enquiry Makes the Next Conversation More Useful." />
          <div className="contact-next-grid">
            {nextSteps.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section contact-direction">
        <div className="container">
          <SectionHeading eyebrow="Not Sure What to Ask For?" title="Start With What You’re Planning to Make." />
          <div className="contact-direction-list">
            {productDirections.map(([title, copy, action, type], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <button type="button" onClick={() => selectEnquiry(type)}>{action} <ArrowIcon /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section contact-faq" id="contact-faq">
        <div className="container contact-faq-grid">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Useful Details Before You Send Your Requirement." />
          <div className="contact-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary><span>0{index + 1}</span>{question}<i>+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-final">
        <div className="container">
          <div className="contact-eyebrow">Ready to Begin?</div>
          <h2>Your Requirement Doesn’t Have to Be Perfect. <em>It Just Has to Start Somewhere.</em></h2>
          <p>Tell us what you are making, selling or planning. Share the product, application, quantity and location you know today, and our team can continue the conversation from there.</p>
          <div className="contact-final-actions">
            <a className="btn btn-primary" href={CONTACT_SECTIONS.form}>Send Your Requirement <ArrowIcon /></a>
            <a className="btn btn-outline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <div className="contact-mobile-bar" aria-label="Quick contact options">
        <a href={PHONE_LINK}>Call</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  );
}

export default ContactPage;
