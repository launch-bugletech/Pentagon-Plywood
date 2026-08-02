import { useEffect, useRef, useState } from 'react';
import { APPLICATION_SECTIONS, comingSoonUrl, CONTACT_SECTIONS, HOME_SECTIONS, PLYWOOD_SECTIONS, ROUTES } from '../../app/routes.js';

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

const productGroups = [
  {
    title: 'Plywood',
    icon: 'plywood',
    href: ROUTES.plywood,
    links: [
      ['MR Grade Plywood', ROUTES.mrGradePlywood],
      ['BWR / BWP Plywood', comingSoonUrl('BWR and BWP Plywood')],
      ['Marine Plywood', PLYWOOD_SECTIONS.marine],
      ['Commercial Plywood', comingSoonUrl('Commercial Plywood')],
    ],
  },
  {
    title: 'Blockboards',
    icon: 'blockboard',
    href: comingSoonUrl('Blockboards'),
    links: [
      ['Blockboards Overview', comingSoonUrl('Blockboards')],
      ['MR Grade Blockboard', comingSoonUrl('MR Grade Blockboard')],
    ],
  },
  {
    title: 'MDF Boards',
    icon: 'mdf',
    href: comingSoonUrl('MDF Boards'),
    links: [
      ['MDF Boards Overview', comingSoonUrl('MDF Boards')],
      ['Plain MDF Boards', comingSoonUrl('Plain MDF Boards')],
      ['Pre-Laminated MDF Boards', comingSoonUrl('Pre-Laminated MDF Boards')],
    ],
  },
  {
    title: 'WPC Boards',
    icon: 'wpc',
    href: comingSoonUrl('WPC and Composite Boards'),
    links: [
      ['WPC & Composite Overview', comingSoonUrl('WPC and Composite Boards')],
      ['WPC Boards', comingSoonUrl('WPC Boards')],
    ],
  },
  {
    title: 'Decorative Surfaces',
    icon: 'surface',
    href: comingSoonUrl('Decorative Surfaces'),
    links: [
      ['Decorative Surfaces Overview', comingSoonUrl('Decorative Surfaces')],
      ['Natural Veneers', comingSoonUrl('Natural Veneers')],
      ['Decorative Veneers', comingSoonUrl('Decorative Veneers')],
      ['Laminates (Sunmica)', comingSoonUrl('Laminates and Sunmica')],
      ['Pre-Laminated Boards', comingSoonUrl('Pre-Laminated Boards')],
    ],
  },
];

const applicationLinks = [
  ['Applications Overview', ROUTES.applications, 'guide'],
  ['Home Furniture', APPLICATION_SECTIONS.furniture, 'furniture'],
  ['Modular Kitchens', APPLICATION_SECTIONS.kitchens, 'kitchen'],
  ['Wardrobes & Storage', APPLICATION_SECTIONS.wardrobes, 'wardrobe'],
  ['Doors & Shutters', APPLICATION_SECTIONS.doors, 'door'],
  ['Wall Panelling', APPLICATION_SECTIONS.walls, 'panelling'],
  ['Commercial Interiors', APPLICATION_SECTIONS.commercial, 'commercial'],
  ['Retail & Hospitality', `${ROUTES.applications}#retail-hospitality`, 'retail'],
  ['Dealer & Bulk Supply', APPLICATION_SECTIONS.trade, 'dealer'],
];

const resourceLinks = [
  ['Product Catalogue', comingSoonUrl('Product Catalogue'), 'catalogue'],
  ['Buying Guides', HOME_SECTIONS.resources, 'guide'],
  ['FAQs', PLYWOOD_SECTIONS.faq, 'faq'],
  ['Blogs', HOME_SECTIONS.resources, 'blog'],
  ['Download Brochure', comingSoonUrl('Download Brochure'), 'download'],
];

const ChevronIcon = () => (
  <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="m2.5 4 3.5 3.5L9.5 4" />
  </svg>
);

const ProductCategoryIcon = ({ type }) => {
  const paths = {
    plywood: (
      <>
        <path d="m3 8 9-4 9 4-9 4-9-4Z" />
        <path d="m3 11 9 4 9-4M3 14l9 4 9-4" />
      </>
    ),
    blockboard: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="M3 7v9l9 5 9-5V7M7 9v9M11 11v9M15 10v9M19 8v9" />
      </>
    ),
    mdf: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="M8 4v16M16 4v16" />
      </>
    ),
    wpc: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="m5 13 7 4 7-4M7 17l5 3 5-3" />
      </>
    ),
    surface: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="m3 11 9 4 9-4M3 15l9 4 9-4" />
        <path d="M6 6.5 12 9l6-2.5" />
      </>
    ),
  };

  return (
    <span className="nav-product-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        {paths[type]}
      </svg>
    </span>
  );
};

const NavItemIcon = ({ type }) => {
  const paths = {
    furniture: <><path d="M4 13V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M3 13h18v5H3zM6 18v3M18 18v3" /></>,
    kitchen: <><path d="M4 4h16v16H4zM4 11h16M12 4v16" /><circle cx="8" cy="8" r=".8" fill="currentColor" stroke="none" /><path d="M15 15h2" /></>,
    wardrobe: <><path d="M5 3h14v18H5zM12 3v18" /><circle cx="10" cy="12" r=".7" fill="currentColor" stroke="none" /><circle cx="14" cy="12" r=".7" fill="currentColor" stroke="none" /></>,
    panelling: <><path d="M4 3h16v18H4zM9 3v18M15 3v18" /><path d="M4 8h16M4 16h16" /></>,
    commercial: <><path d="M4 21V7h16v14M8 7V3h8v4" /><path d="M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
    door: <><path d="M5 3h14v18H5zM8 6h8v15H8z" /><circle cx="14" cy="13" r=".8" fill="currentColor" stroke="none" /></>,
    retail: <><path d="M4 9h16l-2-5H6L4 9Z" /><path d="M6 9v11h12V9M9 13h6M9 17h4" /></>,
    dealer: <><path d="M3 9h18l-2-5H5L3 9Z" /><path d="M5 9v11h14V9M9 20v-6h6v6" /><path d="M3 9c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0" /></>,
    catalogue: <><path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" /><path d="M20 4h-6a3 3 0 0 0-3 3M13 20a3 3 0 0 1 3-3h4V4" /></>,
    guide: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
    faq: <><path d="M5 19l-2 2v-5a8 8 0 1 1 4 3.5" /><path d="M9.7 9a2.4 2.4 0 1 1 3.8 2c-1 .7-1.5 1.2-1.5 2M12 16h.01" /></>,
    blog: <><path d="M5 3h11l3 3v15H5z" /><path d="M15 3v4h4M8 11h8M8 15h8M8 7h3" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5" /><path d="M5 20h14" /></>,
  };

  return (
    <span className="nav-item-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {paths[type]}
      </svg>
    </span>
  );
};

function SiteHeader({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [pinnedMenu, setPinnedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const enquiryHref = CONTACT_SECTIONS.form;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMenu = () => {
    clearCloseTimer();
    setMenuOpen(false);
    setOpenMenu(null);
    setPinnedMenu(null);
  };

  const toggleDropdown = (menu) => {
    clearCloseTimer();
    if (pinnedMenu === menu) {
      setPinnedMenu(null);
      setOpenMenu(null);
      return;
    }

    setPinnedMenu(menu);
    setOpenMenu(menu);
  };

  const openDropdown = (menu) => {
    if (window.matchMedia('(max-width: 1100px)').matches) return;
    clearCloseTimer();
    if (pinnedMenu && pinnedMenu !== menu) {
      setPinnedMenu(null);
    }
    setOpenMenu(menu);
  };

  const scheduleDropdownClose = (menu) => {
    if (window.matchMedia('(max-width: 1100px)').matches) return;
    clearCloseTimer();
    if (pinnedMenu === menu) return;

    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu((current) => current === menu ? null : current);
      closeTimerRef.current = null;
    }, 420);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        clearCloseTimer();
        setOpenMenu(null);
        setPinnedMenu(null);
        setMenuOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        clearCloseTimer();
        setOpenMenu(null);
        setPinnedMenu(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      clearCloseTimer();
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-badge">
            <span className="topbar-badge-icon">🏆</span>
            <span>25+ YEARS OF TRUST & MANUFACTURING EXCELLENCE</span>
          </div>
          <div className="topbar-contact">
            <a href="mailto:pentagonplywood@gmail.com" className="topbar-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              pentagonplywood@gmail.com
            </a>
            <span className="topbar-divider">|</span>
            <a href="tel:+917206104340" className="topbar-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 7206 104 340
            </a>
          </div>
        </div>
      </div>
      <header ref={headerRef} className={`header ${isScrolled ? 'is-scrolled' : 'is-top'}${menuOpen ? ' mobile-menu-open' : ''}`}>
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
          <a href={ROUTES.home} className={activePage === 'home' ? 'nav-active' : undefined} aria-current={activePage === 'home' ? 'page' : undefined} onClick={closeMenu}>Home</a>
          <a href={ROUTES.about} className={activePage === 'about' ? 'nav-active' : undefined} aria-current={activePage === 'about' ? 'page' : undefined} onClick={closeMenu}>About Us</a>

          <div
            className={`nav-dropdown nav-products${openMenu === 'products' ? ' is-open' : ''}`}
            onMouseEnter={() => openDropdown('products')}
            onMouseLeave={() => scheduleDropdownClose('products')}
          >
            <button type="button" className={activePage === 'plywood' ? 'nav-trigger nav-active' : 'nav-trigger'} aria-expanded={openMenu === 'products'} onClick={() => toggleDropdown('products')}>
              Products <ChevronIcon />
            </button>
            <div className="nav-mega nav-mega-products" data-watermark="MATERIALS">
              <div className="nav-mega-intro">
                <span>Product Library</span>
                <strong>Materials for every part of the build.</strong>
                <a href={ROUTES.plywood} onClick={closeMenu}>Explore plywood <ArrowIcon /></a>
              </div>
              <div className="nav-product-groups">
                {productGroups.map((group) => (
                  <div className="nav-menu-group" key={group.title}>
                    <ProductCategoryIcon type={group.icon} />
                    <a className="nav-group-title" href={group.href} onClick={closeMenu}>{group.title}</a>
                    {group.links.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`nav-dropdown${openMenu === 'applications' ? ' is-open' : ''}`}
            onMouseEnter={() => openDropdown('applications')}
            onMouseLeave={() => scheduleDropdownClose('applications')}
          >
            <button type="button" className={activePage === 'applications' ? 'nav-trigger nav-active' : 'nav-trigger'} aria-expanded={openMenu === 'applications'} onClick={() => toggleDropdown('applications')}>
              Applications <ChevronIcon />
            </button>
            <div className="nav-mega nav-mega-compact" data-watermark="SPACES">
              <div className="nav-mega-intro">
                <span>Application Guide</span>
                <strong>Start with the space you are making.</strong>
                <a href={ROUTES.applications} onClick={closeMenu}>Explore all applications <ArrowIcon /></a>
              </div>
              <div className="nav-link-list">
                {applicationLinks.map(([label, href, icon]) => (
                  <a href={href} key={label} onClick={closeMenu}><NavItemIcon type={icon} />{label}<ArrowIcon /></a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`nav-dropdown${openMenu === 'resources' ? ' is-open' : ''}`}
            onMouseEnter={() => openDropdown('resources')}
            onMouseLeave={() => scheduleDropdownClose('resources')}
          >
            <button type="button" className="nav-trigger" aria-expanded={openMenu === 'resources'} onClick={() => toggleDropdown('resources')}>
              Resources <ChevronIcon />
            </button>
            <div className="nav-mega nav-mega-compact nav-mega-resources" data-watermark="KNOWLEDGE">
              <div className="nav-mega-intro">
                <span>Knowledge Centre</span>
                <strong>Useful information before you specify.</strong>
              </div>
              <div className="nav-link-list">
                {resourceLinks.map(([label, href, icon]) => (
                  <a href={href} key={label} onClick={closeMenu}><NavItemIcon type={icon} />{label}<ArrowIcon /></a>
                ))}
              </div>
            </div>
          </div>

          <a href={ROUTES.dealers} className={activePage === 'dealers' ? 'nav-active' : undefined} aria-current={activePage === 'dealers' ? 'page' : undefined} onClick={closeMenu}>Dealers</a>
          <a href={ROUTES.contact} className={activePage === 'contact' ? 'nav-active' : undefined} aria-current={activePage === 'contact' ? 'page' : undefined} onClick={closeMenu}>Contact Us</a>
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
  </>
);
}

export default SiteHeader;
