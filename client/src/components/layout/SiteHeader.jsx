import { useState } from 'react';
import { comingSoonUrl, HOME_SECTIONS, PLYWOOD_SECTIONS, ROUTES } from '../../app/routes.js';

const ArrowIcon = () => (
  <svg className="arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const PentagonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l9 6.5-3.4 10.5H6.4L3 9.5 12 3z" />
  </svg>
);

const navItems = [
  { label: 'About', href: comingSoonUrl('About Pentagon') },
  { label: 'Plywood', href: ROUTES.plywood, page: 'plywood' },
  { label: 'Applications', href: HOME_SECTIONS.applications },
  { label: 'Manufacturing', href: HOME_SECTIONS.manufacturing },
  { label: 'Quality', href: HOME_SECTIONS.quality },
  { label: 'Resources', href: HOME_SECTIONS.resources },
  { label: 'Dealers', href: HOME_SECTIONS.dealers },
];

function SiteHeader({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const enquiryHref = activePage === 'plywood' ? PLYWOOD_SECTIONS.enquiry : HOME_SECTIONS.enquiry;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${menuOpen ? ' mobile-menu-open' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>CELEBRATING 25+ YEARS OF TRUST, QUALITY & INNOVATION
          </span>
          <div>
            <a href="mailto:pentagonplywood@gmail.com">
              pentagonplywood@gmail.com
            </a>
            <a href="tel:+917206104340">+91 7206 104 340</a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <a
          href={ROUTES.home}
          className="brand"
          aria-label="Pentagon Plywood home"
          onClick={closeMenu}
        >
          <div className="brand-mark">
            <PentagonIcon />
          </div>
          <div className="brand-name">
            PentagonPlywood <small> Est. 1997</small>
          </div>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.page === activePage ? "nav-active" : undefined}
              aria-current={item.page === activePage ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href={enquiryHref} onClick={closeMenu}>Contact</a>
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="header-cta">
          <div className="header-phone">
            <small>Sales enquiries</small>
            <strong>+91 7206 104 340</strong>
          </div>
          <a href={enquiryHref} className="btn btn-primary">
            Request a Quote <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
