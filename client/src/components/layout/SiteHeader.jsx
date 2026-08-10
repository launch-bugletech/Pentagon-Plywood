import { useEffect, useRef, useState } from "react";
import {
  APPLICATION_SECTIONS,
  comingSoonUrl,
  CONTACT_SECTIONS,
  HOME_SECTIONS,
  PLYWOOD_SECTIONS,
  ROUTES,
} from "../../app/routes.js";
import {
  manufacturedNavigation,
  sourcedNavigation,
} from "../../data/productCatalog.js";
import pentagonHeaderLogo from "../../assets/Brand/logos/Pentagon-header.svg";
import menuHeroImg from "../../assets/menu/portfolio_hero.jpg";
import menuPlywoodImg from "../../assets/menu/plywood.jpg";
import menuBlockboardImg from "../../assets/menu/blockboard.jpg";
import menuFlushDoorsImg from "../../assets/menu/flush_doors.jpg";
import menuChemicalsImg from "../../assets/menu/chemicals.jpg";
import menuDecorativeImg from "../../assets/menu/decorative.jpg";
import menuEngineeredImg from "../../assets/menu/engineered.jpg";
import menuLaminatedImg from "../../assets/menu/laminated.jpg";

const menuCategoryImages = {
  plywood: menuPlywoodImg,
  blockboard: menuBlockboardImg,
  "flush-doors": menuFlushDoorsImg,
  "industrial-chemicals": menuChemicalsImg,
  "decorative-materials": menuDecorativeImg,
  "engineered-boards": menuEngineeredImg,
  "laminated-products": menuLaminatedImg,
};

// Arrow Icon Component
const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

// Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#C86D51]" : "text-[#65736A]"}`}
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m2.5 4 3.5 3.5L9.5 4" />
  </svg>
);

// Category Product Icon Component
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
    "flush-doors": (
      <>
        <path d="M5 3h14v18H5z" />
        <path d="M8 6h8v15H8z" />
        <circle cx="14" cy="13" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    "industrial-chemicals": (
      <>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
        <path d="M7.5 15h9" />
      </>
    ),
    "decorative-materials": (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16M9 4v16" />
      </>
    ),
    "engineered-boards": (
      <>
        <path d="m3 8 9-4 9 4-9 4-9-4Z" />
        <path d="m3 12 9 4 9-4M3 16l9 4 9-4" />
      </>
    ),
    "laminated-products": (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M7 8h10M7 12h10M7 16h6" />
      </>
    ),
  };

  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white shadow-xs group-hover:bg-[#C86D51] group-hover:text-white transition-all duration-200">
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </svg>
    </span>
  );
};

// Nav Item Icon Component
const NavItemIcon = ({ type }) => {
  const paths = {
    story: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    factory: (
      <>
        <path d="M2 20h20M4 20V10l4 3V10l4 3V4h8v16" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    certificate: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m15.477 12.89 1.523 9.11-5-3-5 3 1.523-9.11" />
      </>
    ),
    warehouse: (
      <>
        <path d="M3 21h18M3 10l9-7 9 7v11H3zM9 21v-8h6v8" />
      </>
    ),
    leadership: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    furniture: (
      <>
        <path d="M4 13V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M3 13h18v5H3zM6 18v3M18 18v3" />
      </>
    ),
    kitchen: (
      <>
        <path d="M4 4h16v16H4zM4 11h16M12 4v16" />
        <circle cx="8" cy="8" r=".8" fill="currentColor" stroke="none" />
        <path d="M15 15h2" />
      </>
    ),
    wardrobe: (
      <>
        <path d="M5 3h14v18H5zM12 3v18" />
        <circle cx="10" cy="12" r=".7" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    panelling: (
      <>
        <path d="M4 3h16v18H4zM9 3v18M15 3v18" />
        <path d="M4 8h16M4 16h16" />
      </>
    ),
    commercial: (
      <>
        <path d="M4 21V7h16v14M8 7V3h8v4" />
        <path d="M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
      </>
    ),
    door: (
      <>
        <path d="M5 3h14v18H5zM8 6h8v15H8z" />
        <circle cx="14" cy="13" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    retail: (
      <>
        <path d="M4 9h16l-2-5H6L4 9Z" />
        <path d="M6 9v11h12V9M9 13h6M9 17h4" />
      </>
    ),
    dealer: (
      <>
        <path d="M3 9h18l-2-5H5L3 9Z" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
        <path d="M3 9c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0" />
      </>
    ),
    catalogue: (
      <>
        <path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" />
        <path d="M20 4h-6a3 3 0 0 0-3 3M13 20a3 3 0 0 1 3-3h4V4" />
      </>
    ),
    guide: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    faq: (
      <>
        <path d="M5 19l-2 2v-5a8 8 0 1 1 4 3.5" />
        <path d="M9.7 9a2.4 2.4 0 1 1 3.8 2c-1 .7-1.5 1.2-1.5 2M12 16h.01" />
      </>
    ),
    blog: (
      <>
        <path d="M5 3h11l3 3v15H5z" />
        <path d="M15 3v4h4M8 11h8M8 15h8M8 7h3" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M5 20h14" />
      </>
    ),
    "tech-doc": (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
    headset: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
  };

  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white shadow-xs group-hover:bg-[#C86D51] group-hover:text-white group-hover:scale-105 transition-all duration-200">
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </svg>
    </span>
  );
};

const aboutLinks = [
  [
    "Our Story & Heritage",
    ROUTES.ourStory,
    "story",
    "Born from 1986 timber roots with 40+ years of trusted craftsmanship.",
  ],
  [
    "Manufacturing Power",
    ROUTES.manufacturing,
    "factory",
    "3.3+ Lakh sq.ft. facilities in Yamunanagar & Morbi.",
  ],
  [
    "Brands & Trademarks",
    ROUTES.brands,
    "shield",
    "Pentagon Gold, Escotel, Kalinga Gold & allied ranges.",
  ],
  [
    "Quality & Certifications",
    `${ROUTES.about}#quality`,
    "certificate",
    "Certified processes ensuring consistent quality you can trust.",
  ],
  [
    "Infrastructure",
    `${ROUTES.manufacturing}#infrastructure`,
    "warehouse",
    "4 manufacturing hubs with advanced machinery & logistics.",
  ],
  [
    "Leadership & Vision",
    `${ROUTES.about}#leadership`,
    "leadership",
    "Driven by values, innovation and customer success.",
  ],
];

const applicationLinks = [
  [
    "Applications Overview",
    ROUTES.applications,
    "guide",
    "Complete guide for interior space panel selection.",
  ],
  [
    "Home Furniture",
    APPLICATION_SECTIONS.furniture,
    "furniture",
    "Beds, tables, cabinets & bespoke woodwork.",
  ],
  [
    "Modular Kitchens",
    APPLICATION_SECTIONS.kitchens,
    "kitchen",
    "BWP IS:710 100% boiling waterproof panels.",
  ],
  [
    "Wardrobes & Storage",
    APPLICATION_SECTIONS.wardrobes,
    "wardrobe",
    "Calibrated core panels for warp-free doors.",
  ],
  [
    "Doors & Shutters",
    APPLICATION_SECTIONS.doors,
    "door",
    "High-density seasoned flush doors & frames.",
  ],
  [
    "Wall Panelling",
    APPLICATION_SECTIONS.walls,
    "panelling",
    "Decorative acoustic & feature wall linings.",
  ],
  [
    "Commercial Interiors",
    APPLICATION_SECTIONS.commercial,
    "commercial",
    "High-traffic office & institutional paneling.",
  ],
  [
    "Retail & Hospitality",
    `${ROUTES.applications}#retail-hospitality`,
    "retail",
    "Store fixtures, displays & hotel interiors.",
  ],
  [
    "Dealer & Bulk Supply",
    APPLICATION_SECTIONS.trade,
    "dealer",
    "Factory direct dispatches for project buyers.",
  ],
];

const resourceLinks = [
  [
    "Product Catalogue",
    comingSoonUrl("Product Catalogue"),
    "catalogue",
    "Full range technical specs & grade charts.",
  ],
  [
    "Buying Guides",
    HOME_SECTIONS.resources,
    "guide",
    "How to choose plywood grade for your space.",
  ],
  [
    "FAQs",
    PLYWOOD_SECTIONS.faq,
    "faq",
    "Answers on IS standards, boiling test & warranty.",
  ],
  [
    "Blogs & Insights",
    HOME_SECTIONS.resources,
    "blog",
    "Latest interior trends & woodcraft knowledge.",
  ],
  [
    "Download Brochure",
    comingSoonUrl("Download Brochure"),
    "download",
    "PDF company overview & brand summary.",
  ],
  [
    "Certifications",
    `${ROUTES.about}#quality`,
    "certificate",
    "View all certifications & test reports.",
  ],
  [
    "Technical Documents",
    `${HOME_SECTIONS.resources}#tech-docs`,
    "tech-doc",
    "TDS, care guides & installation manuals.",
  ],
  [
    "Enquiry Support",
    CONTACT_SECTIONS.form,
    "headset",
    "Submit queries & get expert assistance.",
  ],
];

const MobileProductBranch = ({
  branch,
  owner,
  expanded,
  onToggle,
  onNavigate,
}) => {
  const key = `${owner}-${branch.id}`;
  const isOpen = Boolean(expanded[key]);

  return (
    <div className="border border-[#CAD4CC]/40 rounded-xl overflow-hidden bg-white/60">
      <button
        type="button"
        className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-xs text-[#14211A]"
        aria-expanded={isOpen}
        onClick={() => onToggle(key)}
      >
        <span className="flex items-center gap-2.5">
          <ProductCategoryIcon type={branch.id} />
          <span>{branch.label}</span>
        </span>
        <span className="text-[#C86D51] font-bold text-sm">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="p-3 bg-[#F7F3EC]/50 space-y-1.5 border-t border-[#CAD4CC]/30">
          {branch.children.map(([label, href]) => (
            <a
              href={href}
              key={label}
              className="group flex min-h-10 items-center justify-between gap-3 rounded-lg border border-[#CAD4CC]/50 bg-white px-3 text-xs font-semibold text-[#526158] shadow-xs transition-all hover:border-[#143D2B] hover:bg-[#143D2B] hover:text-white"
              onClick={onNavigate}
            >
              <span>{label}</span>
              <span
                className="text-[#C86D51] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

function SiteHeader({ activePage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [pinnedMenu, setPinnedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState({});
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const enquiryHref = CONTACT_SECTIONS.form;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
    setMobileProductOpen({});
  };

  const toggleMobileProductBranch = (key) => {
    setMobileProductOpen((current) => ({ ...current, [key]: !current[key] }));
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
    if (window.matchMedia("(max-width: 1100px)").matches) return;
    clearCloseTimer();
    if (pinnedMenu && pinnedMenu !== menu) {
      setPinnedMenu(null);
    }
    setOpenMenu(menu);
  };

  const scheduleDropdownClose = (menu) => {
    if (window.matchMedia("(max-width: 1100px)").matches) return;
    clearCloseTimer();
    if (pinnedMenu === menu) return;

    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current));
      closeTimerRef.current = null;
    }, 380);
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
      if (event.key === "Escape") {
        clearCloseTimer();
        setOpenMenu(null);
        setPinnedMenu(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      clearCloseTimer();
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* 1. FULL-WIDTH TOP ANNOUNCEMENT & UTILITY BAR */}
      <div className="bg-[#0B2A1D] text-white py-2.5 border-b border-white/10 text-xs font-semibold tracking-wide relative z-50 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-5 px-2.5 items-center justify-center rounded-full bg-[#C86D51] text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
              40+ Years
            </span>
            <span className="text-white/90 text-[11px] sm:text-xs">
              OF TRUST &amp; MANUFACTURING EXCELLENCE
            </span>
          </div>

          <div className="flex items-center gap-5 text-white/80 text-[11px]">
            <a
              href="mailto:sales@pentagonply.com"
              className="flex items-center gap-1.5 hover:text-[#E8927C] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#C86D51]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>sales@pentagonply.com</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+917015085556"
              className="flex items-center gap-1.5 hover:text-[#E8927C] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#C86D51]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 70150 85556</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. FULL-WIDTH MAIN BRAND SITEHEADER BAR */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDFBF8]/95 backdrop-blur-xl border-b border-[#CAD4CC]/80 shadow-lg py-3"
            : "bg-[#FDFBF8] border-b border-[#CAD4CC]/50 py-4"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-8 relative">
          {/* Brand Logo (Primary Home Anchor) */}
          <a
            href={ROUTES.home}
            className="flex shrink-0 items-center gap-2 group z-10"
            aria-label="Pentagon Plywood Home"
            onClick={closeMenu}
          >
            <img
              src={pentagonHeaderLogo}
              alt="Pentagon Plywood"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
            />
          </a>

          {/* Desktop Navigation Links (No Home Tab) */}
          <nav
            className="hidden lg:flex items-center gap-3 xl:gap-6 text-sm font-semibold text-[#14211A] z-10"
            aria-label="Main Navigation"
          >
            {/* About Us Link */}
            <div
              className="static"
              onMouseEnter={() => openDropdown("about")}
              onMouseLeave={() => scheduleDropdownClose("about")}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                  activePage === "about" || openMenu === "about"
                    ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                    : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
                }`}
                aria-expanded={openMenu === "about"}
                onClick={() => toggleDropdown("about")}
              >
                <span>About Us</span>
                <ChevronIcon isOpen={openMenu === "about"} />
                {(openMenu === "about" || activePage === "about") && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
                )}
              </button>

              {/* About Us Dropdown Bar */}
              {openMenu === "about" && (
                <div className="absolute top-full left-3 right-3 w-auto overflow-hidden rounded-[28px] border border-[#E2DDD5] bg-[#F7F5F0] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-full max-w-[1440px] mx-auto p-6 lg:p-7 relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute right-8 -bottom-6 text-9xl font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.03] pointer-events-none select-none">
                      PENTAGON
                    </div>

                    <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
                      {/* Left Hero Sidebar */}
                      <div className="col-span-4 lg:col-span-3 p-6 rounded-2xl bg-[#0B2A1D] text-white flex flex-col justify-between space-y-5 border border-white/10 shadow-sm relative overflow-hidden min-h-[260px]">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8927C] block">
                            ABOUT PENTAGON GROUP
                          </span>
                          <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-bold text-white leading-snug mt-2">
                            A manufacturing group built on trust, quality and
                            continuous growth.
                          </h3>
                          <div className="w-8 h-0.5 bg-[#C86D51] my-3" />
                          <p className="text-xs text-white/80 leading-relaxed">
                            From 1986 timber roots to a ₹100 Cr+ manufacturing
                            powerhouse.
                          </p>
                        </div>
                        <a
                          href={ROUTES.about}
                          className="group inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border border-white/30 bg-white/5 hover:bg-[#C86D51] hover:border-[#C86D51] text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
                          onClick={closeMenu}
                        >
                          <span>DISCOVER OUR GROUP</span>
                          <ArrowIcon />
                        </a>
                      </div>

                      {/* Right 3x2 Grid */}
                      <div className="col-span-8 lg:col-span-9 grid grid-cols-3 gap-3.5">
                        {aboutLinks.map(([label, href, iconType, desc]) => (
                          <a
                            key={label}
                            href={href}
                            className="group relative overflow-hidden rounded-2xl bg-[#F4F0E8]/80 hover:bg-[#EFEAE0] border border-[#E4DFD5] transition-all duration-300 p-4 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md cursor-pointer"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <NavItemIcon type={iconType} />
                              <div className="min-w-0">
                                <strong className="text-xs font-extrabold text-[#14211A] group-hover:text-[#C86D51] transition-colors block truncate">
                                  {label}
                                </strong>
                                <span className="text-[11px] text-[#526158] leading-tight block mt-0.5 line-clamp-2">
                                  {desc}
                                </span>
                              </div>
                            </div>
                            <span
                              className="text-xs font-bold text-[#C86D51] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                              aria-hidden="true"
                            >
                              &gt;
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Mega Dropdown (Full Width Showcase Panel) */}
            <div
              className="static"
              onMouseEnter={() => openDropdown("products")}
              onMouseLeave={() => scheduleDropdownClose("products")}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                  ["products", "plywood"].includes(activePage) ||
                  openMenu === "products"
                    ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                    : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
                }`}
                aria-expanded={openMenu === "products"}
                onClick={() => toggleDropdown("products")}
              >
                <span>Products</span>
                <ChevronIcon isOpen={openMenu === "products"} />
                {(openMenu === "products" || activePage === "products") && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
                )}
              </button>

              {/* Full Width Product Showcase Mega Panel */}
              {openMenu === "products" && (
                <div className="absolute top-full left-3 right-3 w-auto overflow-hidden rounded-[28px] border border-[#E2DDD5] bg-[#F7F5F0] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-full max-w-[1440px] mx-auto p-6 lg:p-7 relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute right-8 -bottom-6 text-9xl font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.045] pointer-events-none select-none">
                      MATERIALS
                    </div>

                    <div className="relative z-10 grid grid-cols-12 gap-6">
                      {/* Left Column: Product Portfolio Card */}
                      <div className="col-span-3 relative min-h-full overflow-hidden rounded-2xl border border-[#E2DDD3]/70 bg-[#EFEAE2] p-6 flex flex-col justify-between">
                        <img
                          src={menuHeroImg}
                          alt="Stacked plywood panels in a finished interior"
                          className="absolute inset-x-0 bottom-0 h-[43%] w-full object-cover object-bottom"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#EFEAE2]/25 via-[#EFEAE2]/80 to-[#EFEAE2] pointer-events-none" />
                        <div className="relative z-10">
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B35D43] block">
                            PRODUCT PORTFOLIO
                          </span>
                          <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-bold text-[#14211A] leading-snug mt-2">
                            Built in-house.
                            <br />
                            Sourced for complete solutions.
                          </h3>
                          <div className="w-8 h-0.5 bg-[#C86D51] my-3" />
                          <p className="max-w-[26ch] text-sm text-[#526158] leading-relaxed">
                            From core plywood to premium finishes, explore our
                            range manufactured and sourced to suit every
                            interior need.
                          </p>
                        </div>

                        <a
                          href={ROUTES.products}
                          className="group relative z-10 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full border border-[#14211A]/70 bg-[#FDFBF8]/90 hover:bg-[#143D2B] hover:text-white hover:border-[#143D2B] text-sm font-bold text-[#14211A] shadow-sm transition-all cursor-pointer"
                          onClick={closeMenu}
                        >
                          <span>View All Products</span>
                          <ArrowIcon />
                        </a>
                      </div>

                      {/* Right Section: Made by Pentagon & Sourced by Pentagon */}
                      <div className="col-span-9 grid grid-cols-2 gap-6">
                        {/* MADE BY PENTAGON */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-3 pb-1">
                            <span className="text-xs font-extrabold text-[#143D2B] uppercase tracking-wider shrink-0">
                              MADE BY PENTAGON
                            </span>
                            <div className="h-[1px] bg-[#D8D2C5] flex-1" />
                            <a
                              href={ROUTES.manufacturedProducts}
                              className="group inline-flex items-center gap-1 text-xs font-semibold text-[#8C3D2B] hover:text-[#143D2B] shrink-0"
                              onClick={closeMenu}
                            >
                              <span>View complete range</span>
                              <ArrowIcon />
                            </a>
                          </div>

                          <div className="space-y-3">
                            {manufacturedNavigation.map((group) => (
                              <div
                                key={group.id}
                                className="group relative overflow-hidden rounded-2xl bg-[#F4F0E8]/80 hover:bg-[#EFEAE0] border border-[#E4DFD5] transition-all duration-300 p-3.5 flex justify-between gap-3 items-stretch shadow-2xs hover:shadow-md"
                              >
                                <div className="flex-1 min-w-0 space-y-2.5 z-10 flex flex-col justify-between">
                                  <div className="flex items-center gap-2.5">
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                                      <ProductCategoryIcon type={group.id} />
                                    </span>
                                    <a
                                      href={group.href}
                                      className="text-sm font-extrabold text-[#14211A] hover:text-[#C86D51] transition-colors"
                                      onClick={closeMenu}
                                    >
                                      {group.label}
                                    </a>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {group.children.map(([label, href]) => (
                                      <a
                                        key={label}
                                        href={href}
                                        className="inline-flex items-center gap-1 rounded-full border border-[#DDD6C9] bg-white px-3 py-1 text-[11px] font-semibold text-[#4A574F] shadow-2xs transition-all hover:border-[#143D2B] hover:bg-[#143D2B] hover:text-white"
                                        onClick={closeMenu}
                                      >
                                        <span>{label}</span>
                                        <span
                                          className="text-[10px] text-[#C86D51] group-hover:text-white"
                                          aria-hidden="true"
                                        >
                                          →
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                                {menuCategoryImages[group.id] && (
                                  <div className="w-28 sm:w-32 shrink-0 relative overflow-hidden rounded-xl border border-[#E2DDD3]/70 self-stretch min-h-[90px]">
                                    <img
                                      src={menuCategoryImages[group.id]}
                                      alt={group.label}
                                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SOURCED BY PENTAGON */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-3 pb-1">
                            <span className="text-xs font-extrabold text-[#A85238] uppercase tracking-wider shrink-0">
                              SOURCED BY PENTAGON
                            </span>
                            <div className="h-[1px] bg-[#D8D2C5] flex-1" />
                            <a
                              href={ROUTES.tradedProducts}
                              className="group inline-flex items-center gap-1 text-xs font-semibold text-[#8C3D2B] hover:text-[#143D2B] shrink-0"
                              onClick={closeMenu}
                            >
                              <span>View complete range</span>
                              <ArrowIcon />
                            </a>
                          </div>

                          <div className="space-y-3">
                            {sourcedNavigation.map((group) => (
                              <div
                                key={group.id}
                                className="group relative overflow-hidden rounded-2xl bg-[#F4F0E8]/80 hover:bg-[#EFEAE0] border border-[#E4DFD5] transition-all duration-300 p-3.5 flex justify-between gap-3 items-stretch shadow-2xs hover:shadow-md"
                              >
                                <div className="flex-1 min-w-0 space-y-2.5 z-10 flex flex-col justify-between">
                                  <div className="flex items-center gap-2.5">
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#A85238] text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                                      <ProductCategoryIcon type={group.id} />
                                    </span>
                                    <span className="text-sm font-extrabold text-[#14211A]">
                                      {group.label}
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {group.children.map(([label, href]) => (
                                      <a
                                        key={label}
                                        href={href}
                                        className="inline-flex items-center gap-1 rounded-full border border-[#DDD6C9] bg-white px-3 py-1 text-[11px] font-semibold text-[#4A574F] shadow-2xs transition-all hover:border-[#A85238] hover:bg-[#A85238] hover:text-white"
                                        onClick={closeMenu}
                                      >
                                        <span>{label}</span>
                                        <span
                                          className="text-[10px] text-[#A85238] group-hover:text-white"
                                          aria-hidden="true"
                                        >
                                          →
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                                {menuCategoryImages[group.id] && (
                                  <div className="w-28 sm:w-32 shrink-0 relative overflow-hidden rounded-xl border border-[#E2DDD3]/70 self-stretch min-h-[90px]">
                                    <img
                                      src={menuCategoryImages[group.id]}
                                      alt={group.label}
                                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Applications Mega Dropdown */}
            <div
              className="static"
              onMouseEnter={() => openDropdown("applications")}
              onMouseLeave={() => scheduleDropdownClose("applications")}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                  activePage === "applications" || openMenu === "applications"
                    ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                    : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
                }`}
                aria-expanded={openMenu === "applications"}
                onClick={() => toggleDropdown("applications")}
              >
                <span>Applications</span>
                <ChevronIcon isOpen={openMenu === "applications"} />
                {(openMenu === "applications" ||
                  activePage === "applications") && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
                )}
              </button>

              {/* Applications Full-Width Mega Menu Bar */}
              {openMenu === "applications" && (
                <div className="absolute top-full left-3 right-3 w-auto overflow-hidden rounded-[28px] border border-[#E2DDD5] bg-[#F7F5F0] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-full max-w-[1440px] mx-auto p-6 lg:p-7 relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute right-8 -bottom-6 text-9xl font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.03] pointer-events-none select-none">
                      SPACES
                    </div>

                    <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
                      {/* Left Hero Sidebar */}
                      <div className="col-span-4 lg:col-span-3 p-6 rounded-2xl bg-[#0B2A1D] text-white flex flex-col justify-between space-y-5 border border-white/10 shadow-sm relative overflow-hidden min-h-[300px]">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8927C] block">
                            APPLICATION GUIDE
                          </span>
                          <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-bold text-white leading-snug mt-2">
                            Start with the space you are creating.
                          </h3>
                          <div className="w-8 h-0.5 bg-[#C86D51] my-3" />
                          <p className="text-xs text-white/80 leading-relaxed">
                            Explore tailored plywood solutions for every space,
                            style and purpose.
                          </p>
                        </div>
                        <a
                          href={ROUTES.applications}
                          className="group inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#C86D51] hover:bg-[#A85238] text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all cursor-pointer"
                          onClick={closeMenu}
                        >
                          <span>EXPLORE ALL SPACES</span>
                          <ArrowIcon />
                        </a>
                      </div>

                      {/* Right 3x3 Grid */}
                      <div className="col-span-8 lg:col-span-9 grid grid-cols-3 gap-3">
                        {applicationLinks.map(
                          ([label, href, iconType, desc]) => (
                            <a
                              key={label}
                              href={href}
                              className="group relative overflow-hidden rounded-2xl bg-[#F4F0E8]/80 hover:bg-[#EFEAE0] border border-[#E4DFD5] transition-all duration-300 p-3.5 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md cursor-pointer"
                              onClick={closeMenu}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <NavItemIcon type={iconType} />
                                <div className="min-w-0">
                                  <strong className="text-xs font-extrabold text-[#14211A] group-hover:text-[#C86D51] transition-colors block truncate">
                                    {label}
                                  </strong>
                                  <span className="text-[11px] text-[#526158] leading-tight block mt-0.5 line-clamp-2">
                                    {desc}
                                  </span>
                                </div>
                              </div>
                              <span
                                className="text-xs font-bold text-[#C86D51] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                                aria-hidden="true"
                              >
                                &gt;
                              </span>
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="static"
              onMouseEnter={() => openDropdown("resources")}
              onMouseLeave={() => scheduleDropdownClose("resources")}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                  openMenu === "resources"
                    ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                    : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
                }`}
                aria-expanded={openMenu === "resources"}
                onClick={() => toggleDropdown("resources")}
              >
                <span>Resources</span>
                <ChevronIcon isOpen={openMenu === "resources"} />
                {openMenu === "resources" && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
                )}
              </button>

              {/* Resources Full-Width Mega Menu Bar */}
              {openMenu === "resources" && (
                <div className="absolute top-full left-3 right-3 w-auto overflow-hidden rounded-[28px] border border-[#E2DDD5] bg-[#F7F5F0] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="w-full max-w-[1440px] mx-auto p-6 lg:p-7 relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute right-8 -bottom-6 text-9xl font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.03] pointer-events-none select-none">
                      KNOWLEDGE
                    </div>

                    <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
                      {/* Left Hero Sidebar */}
                      <div className="col-span-4 lg:col-span-3 p-6 rounded-2xl bg-[#0B2A1D] text-white flex flex-col justify-between space-y-5 border border-white/10 shadow-sm relative overflow-hidden min-h-[260px]">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8927C] block">
                            KNOWLEDGE CENTRE
                          </span>
                          <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-bold text-white leading-snug mt-2">
                            Useful information before you specify.
                          </h3>
                          <div className="w-8 h-0.5 bg-[#C86D51] my-3" />
                          <p className="text-xs text-white/80 leading-relaxed">
                            Access technical specs, guides, certifications and
                            expert insights.
                          </p>
                        </div>
                        <a
                          href={HOME_SECTIONS.resources}
                          className="group inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border border-white/30 bg-white/5 hover:bg-[#C86D51] hover:border-[#C86D51] text-xs font-bold text-white transition-all cursor-pointer shadow-xs"
                          onClick={closeMenu}
                        >
                          <span>EXPLORE RESOURCES</span>
                          <ArrowIcon />
                        </a>
                      </div>

                      {/* Right 4x2 Grid */}
                      <div className="col-span-8 lg:col-span-9 grid grid-cols-4 gap-3">
                        {resourceLinks.map(([label, href, iconType, desc]) => (
                          <a
                            key={label}
                            href={href}
                            className="group relative overflow-hidden rounded-2xl bg-[#F4F0E8]/80 hover:bg-[#EFEAE0] border border-[#E4DFD5] transition-all duration-300 p-3 flex items-center justify-between gap-2 shadow-2xs hover:shadow-md cursor-pointer"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <NavItemIcon type={iconType} />
                              <div className="min-w-0">
                                <strong className="text-xs font-extrabold text-[#14211A] group-hover:text-[#C86D51] transition-colors block truncate">
                                  {label}
                                </strong>
                                <span className="text-[10px] text-[#526158] leading-tight block mt-0.5 line-clamp-2">
                                  {desc}
                                </span>
                              </div>
                            </div>
                            <span
                              className="text-xs font-bold text-[#C86D51] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0"
                              aria-hidden="true"
                            >
                              &gt;
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dealers */}
            <a
              href={ROUTES.dealers}
              className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                activePage === "dealers"
                  ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                  : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
              }`}
              onClick={closeMenu}
            >
              <span>Dealers</span>
              {activePage === "dealers" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
              )}
            </a>

            {/* Contact Us */}
            <a
              href={ROUTES.contact}
              className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                activePage === "contact"
                  ? "text-[#143D2B] font-bold bg-[#EFECE6]"
                  : "text-[#14211A] hover:text-[#C86D51] hover:bg-[#F7F3EC]/60"
              }`}
              onClick={closeMenu}
            >
              <span>Contact Us</span>
              {activePage === "contact" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#143D2B] rounded-full" />
              )}
            </a>
          </nav>

          {/* Right Header Action Area */}
          <div className="hidden lg:flex items-center gap-5 z-10">
            {/* <div className="text-right leading-tight hidden xl:block">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#65736A] block">
                Sales Enquiries
              </span>
              <strong className="text-xs font-bold text-[#14211A]">
                +91 70150 85556
              </strong>
            </div> */}

            <a
              href={enquiryHref}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D] hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowIcon />
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] hover:bg-[#CAD4CC]/50 transition-colors z-10"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-[#143D2B] rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`h-0.5 bg-[#143D2B] rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-[#143D2B] rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* 3. MOBILE RESPONSIVE DRAWER */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#CAD4CC]/60 bg-[#FDFBF8] px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200 relative z-50">
            <div className="flex flex-col gap-2 font-semibold text-sm">
              {/* Mobile About Accordion */}
              <div className="border border-[#CAD4CC]/60 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3.5 text-left font-bold text-[#14211A]"
                  onClick={() => toggleMobileProductBranch("about")}
                >
                  <span className="flex items-center gap-2.5">
                    <NavItemIcon type="guide" />
                    <span>About Us</span>
                  </span>
                  <span className="text-[#C86D51] font-bold">
                    {mobileProductOpen.about ? "−" : "+"}
                  </span>
                </button>
                {mobileProductOpen.about && (
                  <div className="p-3 bg-[#F7F3EC]/50 space-y-2 border-t border-[#CAD4CC]/40 text-xs">
                    <a
                      href={ROUTES.about}
                      className="block p-2 rounded-lg hover:bg-white text-[#14211A] font-bold"
                      onClick={closeMenu}
                    >
                      About Pentagon Overview
                    </a>
                    <a
                      href={ROUTES.ourStory}
                      className="block p-2 rounded-lg hover:bg-white text-[#14211A]"
                      onClick={closeMenu}
                    >
                      Our Story &amp; Heritage
                    </a>
                    <a
                      href={ROUTES.manufacturing}
                      className="block p-2 rounded-lg hover:bg-white text-[#14211A]"
                      onClick={closeMenu}
                    >
                      Manufacturing Infrastructure
                    </a>
                    <a
                      href={ROUTES.brands}
                      className="block p-2 rounded-lg hover:bg-white text-[#14211A]"
                      onClick={closeMenu}
                    >
                      Brands &amp; Trademarks
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Products Accordion */}
              <div className="border border-[#CAD4CC]/60 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3.5 text-left font-bold text-[#14211A]"
                  onClick={() => toggleMobileProductBranch("products")}
                >
                  <span className="flex items-center gap-2.5">
                    <ProductCategoryIcon type="plywood" />
                    <span>Product Portfolio</span>
                  </span>
                  <span className="text-[#C86D51] font-bold">
                    {mobileProductOpen.products ? "−" : "+"}
                  </span>
                </button>
                {mobileProductOpen.products && (
                  <div className="p-3 bg-[#F7F3EC]/50 space-y-3 border-t border-[#CAD4CC]/40 text-xs">
                    <a
                      href={ROUTES.products}
                      className="block p-2.5 font-bold text-[#143D2B] bg-white rounded-xl border border-[#CAD4CC]/50 text-center"
                      onClick={closeMenu}
                    >
                      View All Products &rarr;
                    </a>
                    <div className="space-y-2">
                      <strong className="block text-[10px] uppercase font-extrabold text-[#C86D51] tracking-wider">
                        Manufactured Range
                      </strong>
                      {manufacturedNavigation.map((branch) => (
                        <MobileProductBranch
                          key={branch.id}
                          branch={branch}
                          owner="made"
                          expanded={mobileProductOpen}
                          onToggle={toggleMobileProductBranch}
                          onNavigate={closeMenu}
                        />
                      ))}
                    </div>
                    <div className="space-y-2 pt-2 border-t border-[#CAD4CC]/40">
                      <strong className="block text-[10px] uppercase font-extrabold text-[#C86D51] tracking-wider">
                        Traded Range
                      </strong>
                      {sourcedNavigation.map((branch) => (
                        <MobileProductBranch
                          key={branch.id}
                          branch={branch}
                          owner="sourced"
                          expanded={mobileProductOpen}
                          onToggle={toggleMobileProductBranch}
                          onNavigate={closeMenu}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Applications Accordion */}
              <div className="border border-[#CAD4CC]/60 rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3.5 text-left font-bold text-[#14211A]"
                  onClick={() => toggleMobileProductBranch("applications")}
                >
                  <span className="flex items-center gap-2.5">
                    <NavItemIcon type="furniture" />
                    <span>Applications</span>
                  </span>
                  <span className="text-[#C86D51] font-bold">
                    {mobileProductOpen.applications ? "−" : "+"}
                  </span>
                </button>
                {mobileProductOpen.applications && (
                  <div className="p-3 bg-[#F7F3EC]/50 grid grid-cols-2 gap-2 border-t border-[#CAD4CC]/40 text-xs">
                    {applicationLinks.map(([label, href, iconType]) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white text-[#14211A] font-semibold border border-[#CAD4CC]/30"
                        onClick={closeMenu}
                      >
                        <NavItemIcon type={iconType} />
                        <span className="min-w-0 truncate">{label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={ROUTES.dealers}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#CAD4CC]/60 text-[#14211A] font-bold"
                onClick={closeMenu}
              >
                <NavItemIcon type="dealer" />
                <span>Dealers</span>
              </a>

              <a
                href={ROUTES.contact}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#CAD4CC]/60 text-[#14211A] font-bold"
                onClick={closeMenu}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span>Contact Us</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#CAD4CC]/60 space-y-2.5">
              <a
                href={enquiryHref}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                onClick={closeMenu}
              >
                <span>Request a Quote</span>
                <ArrowIcon />
              </a>
              <a
                href="https://wa.me/917015085556"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-2 border-[#143D2B] text-[#143D2B] text-xs font-bold uppercase tracking-wider"
                onClick={closeMenu}
              >
                <span>Call / WhatsApp (+91 70150 85556)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default SiteHeader;
