import { comingSoonUrl, HOME_SECTIONS, PLYWOOD_SECTIONS, ROUTES } from '../../app/routes.js';

const PentagonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l9 6.5-3.4 10.5H6.4L3 9.5 12 3z" />
  </svg>
);

const footerGroups = [
  {
    title: 'Company',
    links: [
      ['About Pentagon', ROUTES.about],
      ['Manufacturing', HOME_SECTIONS.manufacturing],
      ['Quality & Certifications', HOME_SECTIONS.quality],
      ['Contact us', ROUTES.contact],
      ['Careers', comingSoonUrl('Careers')],
    ],
  },
  {
    title: 'Products',
    links: [
      ['Marine Plywood', PLYWOOD_SECTIONS.marine],
      ['MR Grade Plywood', ROUTES.mrGradePlywood],
      ['Compare plywood grades', PLYWOOD_SECTIONS.range],
      ['IS 303 Blockboards', HOME_SECTIONS.products],
      ['Flush Doors', HOME_SECTIONS.products],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Applications', ROUTES.applications],
      ['Buying guides', HOME_SECTIONS.resources],
      ['Catalogues (PDF)', comingSoonUrl('Product catalogues')],
      ['Technical downloads', comingSoonUrl('Technical downloads')],
      ['FAQs', PLYWOOD_SECTIONS.faq],
    ],
  },
  {
    title: 'Business',
    links: [
      ['Find a dealer', `${ROUTES.dealers}#dealer-locator`],
      ['Become a dealer', `${ROUTES.dealers}#partner-application`],
      ['Bulk orders', `${ROUTES.contact}#contact-form`],
      ['Architect support', `${ROUTES.contact}#contact-form`],
      ['Request a quote', `${ROUTES.contact}#contact-form`],
    ],
  },
];

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href={ROUTES.home} className="brand" aria-label="Pentagon Plywood home">
              <div className="brand-mark"><PentagonIcon /></div>
              <div className="brand-name">Pentagon<small>Plywood · Est. 1997</small></div>
            </a>
            <div className="footer-tagline">Crafting excellence, building trust since 1997.</div>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h5>{group.title}</h5>
              <ul>
                {group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pentagon Plywood Pvt. Ltd. · Khajuri, Yamunanagar, Haryana · India</span>
          <div className="links">
            <a href={comingSoonUrl('Privacy policy')}>Privacy</a>
            <a href={comingSoonUrl('Terms and conditions')}>Terms</a>
            <a href={comingSoonUrl('Sitemap')}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
