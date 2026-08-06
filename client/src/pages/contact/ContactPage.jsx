import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  ArrowRight,
  HelpCircle,
  FileText,
  Compass,
  Sparkles,
  Package,
  Store,
  Building2,
  Globe,
  CheckCircle2,
  ChevronDown,
  X,
  Maximize2,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  Layers,
  CheckSquare,
} from "lucide-react";
import { comingSoonUrl, ROUTES } from "../../app/routes.js";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  WHATSAPP_LINK,
  enquiryTypes,
  customerTypes,
  productCategories,
  directContacts,
  nextSteps,
  productDirections,
  faqs,
  plannerCategories,
  projectEstimates,
  plannerTabs,
} from "./contactData.js";

// Rich Colorful Interior & Factory Image Imports
import kitchenImg from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import livingImg from "../../assets/product/Applications/Contemporary living room with furniture.png";
import officeImg from "../../assets/product/Applications/Modern office with desks and partitions.png";
import wardrobeImg from "../../assets/product/Applications/Modern wardrobe with sliding doors.png";
import heroWoodImage from "../../assets/homepage/hero_wood_interior_plants.jpg";
import factoryImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.jpg";

const iconMap = {
  Package: Package,
  Store: Store,
  Building2: Building2,
  Globe: Globe,
  HelpCircle: HelpCircle,
  PhoneCall: PhoneCall,
  MessageSquare: MessageSquare,
  Mail: Mail,
  MapPin: MapPin,
  FileText: FileText,
  Compass: Compass,
  Sparkles: Sparkles,
};

const categoryImages = {
  furniture: livingImg,
  kitchen: kitchenImg,
  doors: wardrobeImg,
  boq: officeImg,
  chemical: factoryImage,
};

const FACTORY_360_URL =
  "https://www.google.com/maps/embed?pb=!4v1786021997875!6m8!1m7!1sR9TCbEr38ulcKQYtMl5aJA!2m2!1d30.09940653232269!2d77.28578053381996!3f85.68189271022864!4f-16.154239758161893!5f0.7820865974627469";

const PENTAGON_LOCATION = [77.28599938929692, 30.099496445420478];

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`flex flex-col gap-1.5 min-w-0 ${className}`}>
      <span className="text-[#4A5750] font-bold text-[11px] leading-tight tracking-[0.09em] uppercase font-['Manrope',sans-serif]">
        {label}
        {required && <b className="ml-1 text-[#C86D51]">*</b>}
      </span>
      {children}
    </label>
  );
}

function IndiaMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return undefined;

    const map = new maplibregl.Map({
      container,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: PENTAGON_LOCATION,
      zoom: 12,
      attributionControl: true,
    });

    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: false,
      }),
      "top-right"
    );

    const popup = new maplibregl.Popup({
      offset: 28,
      closeButton: false,
    }).setHTML(`
      <strong style="font-family: sans-serif; font-size: 13px; color: #14211A;">Pentagon Plywood Pvt. Ltd.</strong>
      <br />
      <span style="font-family: sans-serif; font-size: 12px; color: #4A5750;">
        Village Raipur, Khajuri Road<br />
        Yamunanagar, Haryana 135001
      </span>
    `);

    const marker = new maplibregl.Marker({
      color: "#C86D51",
    })
      .setLngLat(PENTAGON_LOCATION)
      .setPopup(popup)
      .addTo(map);

    map.once("load", () => {
      map.resize();
      map.easeTo({
        center: PENTAGON_LOCATION,
        zoom: 12,
        padding: { top: 25, right: 25, bottom: 15, left: 25 },
        duration: 0,
      });
    });

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      marker.remove();
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full min-h-[360px] rounded-2xl overflow-hidden shadow-inner border border-white/10"
      aria-label="Map showing the Pentagon Plywood factory"
    />
  );
}

function FactoryLocationView() {
  const [showFactoryView, setShowFactoryView] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText("Pentagon Plywood Pvt. Ltd., Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative flex flex-col justify-end min-h-[460px] rounded-3xl overflow-hidden border border-white/15 bg-[#0B2A1D] p-6 shadow-2xl">
      {/* Live Map Background */}
      <div className="absolute inset-0 h-full w-full">
        <IndiaMap />
      </div>

      {/* Floating Live Facility Tag */}
      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#14211A]/90 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-md border border-white/20 shadow-md">
        <span className="h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
        <span>FACILITY ONLINE • YAMUNANAGAR HUB</span>
      </div>

      {/* Glassmorphic Address Footer */}
      <div className="relative z-10 mt-auto flex flex-col gap-4 p-5 rounded-2xl bg-[#14211A]/95 backdrop-blur-md border border-white/15 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <small className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase block font-['Manrope',sans-serif]">
              PENTAGON PLYWOOD PVT. LTD.
            </small>
            <strong className="font-['DM_Serif_Display',Georgia,serif] text-xl text-white block mt-0.5">
              Yamunanagar · Haryana 135001
            </strong>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={copyAddress}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#25D366]" /> <span className="text-[#25D366]">Address Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-[#C86D51]" /> <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#C86D51]" /> Mon–Sat: 9AM–6PM</span>
            <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-[#C86D51]" /> Pan-India Dispatch</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#C86D51] px-4 text-xs font-bold text-white shadow-sm hover:bg-[#A85238] transition-all cursor-pointer"
              onClick={() => setShowFactoryView(true)}
            >
              <Maximize2 className="h-3.5 w-3.5" /> 360° VR View
            </button>
            <a
              href="https://maps.app.goo.gl/5K3S7Zpc6ZX3e7uF7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1 rounded-full border border-white/30 bg-white/10 px-4 text-xs font-bold text-white hover:bg-white/20 transition-all"
            >
              Google Maps <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 360 VR View Modal */}
      {showFactoryView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="360 degree view of Pentagon Plywood factory"
        >
          <div className="relative w-full max-w-5xl h-[82vh] rounded-3xl bg-[#14211A] border border-white/20 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B2A1D] text-white">
              <div>
                <small className="text-[10px] font-bold text-[#C86D51] uppercase tracking-wider block">INTERACTIVE 360° VR TOUR</small>
                <strong className="text-lg font-bold">Pentagon Plywood Manufacturing Hub, Yamunanagar</strong>
              </div>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close factory view"
                onClick={() => setShowFactoryView(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              className="w-full flex-1 border-0"
              src={FACTORY_360_URL}
              title="360 degree view of Pentagon Plywood factory"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ContactPage() {
  // Section 1: Hero Quick Form State
  const [productCategory, setProductCategory] = useState("Plywood");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroConsent, setHeroConsent] = useState(true);

  // Section 2: Advanced Level Planner State
  const [activePlannerTab, setActivePlannerTab] = useState("specifier");
  const [selectedPlannerCat, setSelectedPlannerCat] = useState("furniture");
  const [tabSubmissions, setTabSubmissions] = useState({
    project: false,
    dealer: false,
    export: false,
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(-1);

  const activeCategoryData = useMemo(
    () => plannerCategories.find((c) => c.id === selectedPlannerCat) || plannerCategories[0],
    [selectedPlannerCat]
  );

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setHeroSubmitted(true);
  };

  const handleTabSubmit = (e, tabKey) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setTabSubmissions((prev) => ({ ...prev, [tabKey]: true }));
  };

  const applyCategoryToHero = (catName) => {
    setProductCategory(catName);
    const heroFormElem = document.getElementById("contact-form");
    if (heroFormElem) {
      heroFormElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    document.title = "Contact Pentagon Plywood | Product, Dealer & Bulk Enquiries";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact Pentagon Plywood in Yamunanagar for plywood, blockboard, doors, dealer, bulk and project enquiries. Call, WhatsApp or share your requirement online.";
  }, []);

  return (
    <div className="bg-[#FDFBF8] text-[#14211A] overflow-hidden font-['Manrope',sans-serif]">
      {/* Breadcrumb Bar */}
      <div className="py-3.5 border-b border-[#CAD4CC]/50 bg-[#143D2B] text-white/70 font-semibold text-[11px] leading-relaxed tracking-[0.12em] uppercase">
        <div className="max-w-[1280px] mx-auto px-7 flex items-center gap-2.5">
          <a href={ROUTES.home} className="hover:text-white transition-colors">Home</a>
          <span className="text-[#C86D51]">›</span>
          <strong className="text-white">Contact Us</strong>
        </div>
      </div>

      {/* SECTION 1: BRAND GREEN HERO BANNER & QUICK FORM */}
      <section className="relative bg-[#143D2B] text-white py-14 lg:py-20 overflow-hidden">
        {/* Subtle Background Texture & Decorative Radial */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C86D51]/20 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-7 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading + Visual Hero Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#C86D51]/20 border border-[#C86D51]/40 text-[#E8927C] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full">
              <Award className="h-3.5 w-3.5 text-[#C86D51]" /> CRAFTING EXCELLENCE SINCE 1997
            </div>

            <h1 className="font-['Oswald',sans-serif] text-[40px] sm:text-[54px] lg:text-[62px] font-bold leading-[1.05] tracking-[-1px] text-white">
              Tell Us What You’re Building.{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic block mt-1">
                Let’s Start With the Right Conversation.
              </em>
            </h1>

            <p className="text-white/85 text-[16px] leading-[1.7] max-w-xl">
              Looking for premium plywood, blockboard, or doors for resale, interior design, or commercial projects? Share your requirement for a fast direct quotation.
            </p>

            {/* COLORFUL RICH INTERIOR SHOWCASE CARD */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0B2A1D] mt-6">
              <img
                src={heroWoodImage}
                alt="Pentagon Premium Plywood Interior Showcase"
                className="w-full h-56 object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <small className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase block">ARCHITECTURAL QUALITY</small>
                  <strong className="text-base font-bold">100% Calibrated Core & BWP Certified</strong>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" /> IS:710 & IS:303
                </span>
              </div>
            </div>

            {/* Action Buttons & Direct Call Line */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all"
                href={PHONE_LINK}
              >
                Call Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat <MessageSquare className="h-4 w-4 text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Right Column: STREAMLINED QUICK ENQUIRY FORM (Shadcn Green-Themed Card) */}
          <div className="lg:col-span-6">
            <form
              className="p-8 sm:p-9 rounded-3xl border border-white/20 bg-[#FDFBF8] text-[#14211A] shadow-2xl relative"
              id="contact-form"
              onSubmit={handleHeroSubmit}
            >
              {heroSubmitted ? (
                <div className="text-center py-8" role="status">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#143D2B] text-[#C86D51] mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="text-[#C86D51] font-bold text-xs uppercase tracking-widest mb-1">
                    Quick Requirement Received
                  </div>
                  <h2 className="font-['Oswald',sans-serif] text-2xl lg:text-3xl font-bold text-[#14211A]">
                    Thank You. We Have Received Your Note.
                  </h2>
                  <p className="mt-3 text-sm text-[#4A5750] max-w-md mx-auto">
                    Your enquiry reference is{" "}
                    <strong className="text-[#14211A]">PP-{new Date().getFullYear()}-WEB</strong>. Our team will review your details and connect with you shortly.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D]"
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Continue on WhatsApp <MessageSquare className="h-4 w-4 text-[#25D366]" />
                    </a>
                    <a className="inline-flex h-11 items-center gap-2 rounded-full border border-[#CAD4CC] bg-white px-6 text-xs font-bold uppercase tracking-wider text-[#14211A] hover:bg-[#F7F3EC]" href="#advanced-planner">
                      Explore Advanced Planning
                    </a>
                  </div>
                  <button
                    type="button"
                    className="mt-6 text-xs font-bold text-[#65736A] uppercase tracking-wider underline hover:text-[#14211A] cursor-pointer"
                    onClick={() => setHeroSubmitted(false)}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-5 border-b border-[#CAD4CC]">
                    <div>
                      <div className="text-[#C86D51] font-bold text-[10px] tracking-widest uppercase mb-0.5">
                        DIRECT FACTORY ENQUIRY
                      </div>
                      <h2 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold text-[#14211A]">
                        Share Your Requirement
                      </h2>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#143D2B] text-[#E8927C] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      FAST RESPONSE
                    </span>
                  </div>

                  <p className="mt-3.5 text-xs text-[#65736A] leading-relaxed">
                    Tell us what you are making or looking for. Our sales team will get back to you with pricing, grade options, and delivery timelines.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        required
                        autoComplete="name"
                        className="w-full min-h-[46px] px-3.5 py-2.5 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20 focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Mobile Number" required>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        autoComplete="tel"
                        className="w-full min-h-[46px] px-3.5 py-2.5 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20 focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Product Category" required>
                      <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required
                        className="w-full min-h-[46px] px-3.5 py-2.5 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-[#14211A] font-medium text-sm focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20 focus:outline-hidden"
                      >
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Delivery City" required>
                      <input
                        type="text"
                        placeholder="e.g. Gurgaon, Delhi, Jaipur"
                        required
                        className="w-full min-h-[46px] px-3.5 py-2.5 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20 focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Requirement Details or Note" className="sm:col-span-2">
                      <textarea
                        rows="3"
                        placeholder="Specify thickness (e.g. 18mm MR/BWP), estimated sheets or any specific application notes..."
                        className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20 focus:outline-hidden resize-y"
                      />
                    </Field>
                  </div>

                  <label className="flex items-start gap-2.5 mt-5 text-[#65736A] text-xs leading-relaxed">
                    <input
                      type="checkbox"
                      checked={heroConsent}
                      onChange={(e) => setHeroConsent(e.target.checked)}
                      required
                      className="mt-0.5 h-4 w-4 rounded-xs border-[#CAD4CC] accent-[#C86D51]"
                    />
                    <span>
                      I agree to let Pentagon Plywood reach out via Phone, WhatsApp or Email regarding this enquiry.
                    </span>
                  </label>

                  <button
                    className="w-full mt-6 min-h-[50px] inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#0B2A1D] transition-all cursor-pointer"
                    type="submit"
                  >
                    Send Quick Requirement <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="mt-3 text-center text-[#65736A] text-[10px] leading-relaxed">
                    Fields marked * are required. Have a complex BOQ or business partnership proposal? Scroll down to Section 2.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: ADVANCED LEVEL PLANNING & SPECIALIZED FORM HUB */}
      <section className="py-[82px] lg:py-[120px] bg-[#F7F3EC] border-b border-[#CAD4CC]" id="advanced-planner">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-[800px] mb-12">
            <div className="inline-flex items-center gap-2 text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase">
              <Layers className="h-3.5 w-3.5" /> ADVANCED LEVEL PLANNING HUB
            </div>
            <h2 className="mt-3 font-['Oswald',sans-serif] text-[38px] lg:text-[54px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Plan Your Material Specs or Submit Specialized Requirements.
            </h2>
            <p className="mt-3 text-[#4A5750] text-[17px] leading-[1.75]">
              Use our interactive material specifier and volume estimator below, or submit specialized proposals for Commercial Projects, Dealerships, or Bulk Export.
            </p>
          </div>

          {/* ADVANCED PLANNER NAV TABS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {plannerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`flex flex-col items-start gap-1.5 p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  activePlannerTab === tab.id
                    ? "bg-[#143D2B] text-white border-[#C86D51] shadow-xl ring-2 ring-[#C86D51]"
                    : "bg-[#FDFBF8] text-[#14211A] border-[#CAD4CC] hover:border-[#C86D51]"
                }`}
                onClick={() => setActivePlannerTab(tab.id)}
              >
                <span className={`text-[10px] font-extrabold tracking-widest uppercase ${
                  activePlannerTab === tab.id ? "text-[#E8927C]" : "text-[#C86D51]"
                }`}>
                  {tab.tag}
                </span>
                <strong className="text-base font-bold leading-tight">{tab.label}</strong>
              </button>
            ))}
          </div>

          {/* TAB 1: MATERIAL & GRADE SPECIFIER WITH RICH INTERIOR PHOTO PREVIEW */}
          {activePlannerTab === "specifier" && (
            <div className="p-8 lg:p-10 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] shadow-sm">
              <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#CAD4CC]/60 pb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C86D51]">INTERACTIVE MATERIAL SPECIFIER</span>
                  <h3 className="text-2xl font-bold text-[#14211A] mt-1">Select Application & Scale</h3>
                  <p className="text-sm text-[#65736A] mt-1">
                    Understand the ideal plywood grade, thickness, and sheet count needed for your project before purchasing.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#143D2B] text-[#E8927C] text-xs font-bold self-start md:self-auto">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C86D51]" /> FACTORY CERTIFIED SPECIFICATIONS
                </span>
              </div>

              {/* Application Preset Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
                {plannerCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`flex flex-col gap-1 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedPlannerCat === cat.id
                        ? "bg-[#FDFBF8] border-[#C86D51] ring-2 ring-[#C86D51] shadow-md"
                        : "bg-[#F7F3EC] border-[#CAD4CC] hover:border-[#C86D51]"
                    }`}
                    onClick={() => setSelectedPlannerCat(cat.id)}
                  >
                    <strong className="text-xs font-bold text-[#14211A]">{cat.title}</strong>
                    <small className="text-[11px] text-[#65736A]">{cat.subtitle}</small>
                  </button>
                ))}
              </div>

              {/* Spec Detail Grid with Rich Photo Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Card: Recommended Grade & Details */}
                <div className="lg:col-span-7 p-7 rounded-2xl border border-[#CAD4CC] bg-[#F7F3EC] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase">RECOMMENDED GRADE & SPEC</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#143D2B] text-white text-[10px] font-bold">100% Core Assurance</span>
                    </div>

                    <h4 className="text-2xl font-bold text-[#14211A] mb-4">{activeCategoryData.grade}</h4>
                    
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white mb-5 border border-[#CAD4CC]/60 shadow-xs">
                      <div>
                        <small className="text-[10px] uppercase font-bold text-[#65736A]">Standard Thicknesses</small>
                        <strong className="block text-sm text-[#14211A] mt-0.5">{activeCategoryData.thickness}</strong>
                      </div>
                      <div>
                        <small className="text-[10px] uppercase font-bold text-[#65736A]">Suggested Sheet Volume</small>
                        <strong className="block text-sm text-[#14211A] mt-0.5">{activeCategoryData.suggestedSheets}</strong>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {activeCategoryData.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-[#4A5750]">
                          <CheckCircle2 className="h-4 w-4 text-[#C86D51] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D] transition-all cursor-pointer mt-4"
                    onClick={() => applyCategoryToHero(activeCategoryData.category)}
                  >
                    Select {activeCategoryData.category} in Quick Hero Form <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Right Card: Visual Interior Photo & Quick Volume Estimator */}
                <div className="lg:col-span-5 rounded-2xl border border-[#CAD4CC] overflow-hidden flex flex-col bg-[#FDFBF8]">
                  <div className="relative h-44 w-full bg-[#14211A]">
                    <img
                      src={categoryImages[selectedPlannerCat] || livingImg}
                      alt={activeCategoryData.title}
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-[10px] font-bold text-[#C86D51] uppercase tracking-widest">APPLICATION SHOWCASE</span>
                      <h5 className="text-lg font-bold">{activeCategoryData.title}</h5>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#F7F3EC]">
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase">QUICK PROJECT ESTIMATOR</span>
                      <h4 className="text-base font-bold text-[#14211A] mt-0.5 mb-3">Sheet Volumes by Scale</h4>
                      <div className="space-y-2.5">
                        {projectEstimates.map((est) => (
                          <div key={est.label} className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#CAD4CC]/60 text-xs">
                            <div>
                              <strong className="block text-[#14211A]">{est.label}</strong>
                              <span className="text-[#65736A] text-[11px]">Grade: {est.plyGrade}</span>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-[#143D2B] text-white font-bold">
                              {est.sheets}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECT & BOQ FORM */}
          {activePlannerTab === "project" && (
            <div className="p-8 lg:p-10 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8]">
              {tabSubmissions.project ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 text-[#C86D51] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#14211A]">Project BOQ Received</h3>
                  <p className="text-[#65736A] mt-2">Our project team will review the specification and send a quotation.</p>
                  <button
                    type="button"
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#14211A] underline cursor-pointer"
                    onClick={() => setTabSubmissions((prev) => ({ ...prev, project: false }))}
                  >
                    Submit another BOQ
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => handleTabSubmit(e, "project")} className="max-w-4xl mx-auto space-y-6">
                  <div className="border-b border-[#CAD4CC] pb-4">
                    <h3 className="text-2xl font-bold text-[#14211A]">Project & BOQ Submission Form</h3>
                    <p className="text-sm text-[#65736A] mt-1">
                      For Architects, Interior Designers, Hospitality & Commercial Contractors. Share your BOQ or specifications for factory direct pricing.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Project Name or Type" required>
                      <input type="text" placeholder="e.g. 5-Star Hotel Interior / Residential Tower" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Project Location" required>
                      <input type="text" placeholder="City & State" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Approximate Quantity (Sheets/Doors)" required>
                      <input type="text" placeholder="e.g. 150 Sheets / 45 Flush Doors" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Target Procurement Date">
                      <input type="date" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Contact Person Name" required>
                      <input type="text" placeholder="Your Name" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input type="tel" placeholder="+91" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" placeholder="email@company.com" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Upload Drawing or BOQ (Optional)">
                      <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" className="w-full p-2.5 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-xs" />
                    </Field>
                    <Field label="Additional Specification Notes" className="sm:col-span-2">
                      <textarea rows="3" placeholder="Mention required grades (BWP, MR, FR), fire retardant rating, thickness tolerance, etc." className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm resize-y" />
                    </Field>
                  </div>
                  <button type="submit" className="h-12 px-8 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2A1D] cursor-pointer">
                    Submit Project BOQ Requirement <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: DEALER & DISTRIBUTOR APPLICATION */}
          {activePlannerTab === "dealer" && (
            <div className="p-8 lg:p-10 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8]">
              {tabSubmissions.dealer ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 text-[#C86D51] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#14211A]">Application Received</h3>
                  <p className="text-[#65736A] mt-2">Our sales team will evaluate your territory and contact you for partnership discussions.</p>
                  <button
                    type="button"
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#14211A] underline cursor-pointer"
                    onClick={() => setTabSubmissions((prev) => ({ ...prev, dealer: false }))}
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => handleTabSubmit(e, "dealer")} className="max-w-4xl mx-auto space-y-6">
                  <div className="border-b border-[#CAD4CC] pb-4">
                    <h3 className="text-2xl font-bold text-[#14211A]">Dealer & Distributor Application Form</h3>
                    <p className="text-sm text-[#65736A] mt-1">
                      Partner with Pentagon Plywood. Share your business profile to discuss exclusive regional dealership & wholesale supply terms.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Firm / Business Name" required>
                      <input type="text" placeholder="e.g. Royal Timber & Plywood Mart" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="City & District" required>
                      <input type="text" placeholder="City, State" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Market / Territory Served" required>
                      <input type="text" placeholder="e.g. North Delhi & NCR" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Current Product Categories Handled">
                      <input type="text" placeholder="e.g. Plywood, Laminates, Hardware" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Contact Person" required>
                      <input type="text" placeholder="Full Name" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input type="tel" placeholder="+91" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Email Address">
                      <input type="email" placeholder="business@email.com" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Estimated Monthly Volume">
                      <input type="text" placeholder="e.g. 1 Truckload / 500 Sheets" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Business Proposal Note" className="sm:col-span-2">
                      <textarea rows="3" placeholder="Tell us about your showroom/godown capacity and current brand partnerships..." className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm resize-y" />
                    </Field>
                  </div>
                  <button type="submit" className="h-12 px-8 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2A1D] cursor-pointer">
                    Apply for Dealership <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 4: EXPORT & INDUSTRIAL CHEMICAL FORM */}
          {activePlannerTab === "export" && (
            <div className="p-8 lg:p-10 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8]">
              {tabSubmissions.export ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 text-[#C86D51] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#14211A]">Export / Chemical Enquiry Received</h3>
                  <p className="text-[#65736A] mt-2">Our international trade & industrial team will reach out with technical specs and export quotes.</p>
                  <button
                    type="button"
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#14211A] underline cursor-pointer"
                    onClick={() => setTabSubmissions((prev) => ({ ...prev, export: false }))}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => handleTabSubmit(e, "export")} className="max-w-4xl mx-auto space-y-6">
                  <div className="border-b border-[#CAD4CC] pb-4">
                    <h3 className="text-2xl font-bold text-[#14211A]">Export & Industrial Chemical Enquiry Form</h3>
                    <p className="text-sm text-[#65736A] mt-1">
                      For overseas buyers & chemical industrial clients. Discuss Formaldehyde (37%/43%) chemical shipments or export grade plywood.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Company Name" required>
                      <input type="text" placeholder="Company Name" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Destination Country & Port" required>
                      <input type="text" placeholder="e.g. Jebel Ali, UAE / Mundra Port" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Product / Chemical Required" required>
                      <select required defaultValue="Formaldehyde 37%" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm">
                        <option>Formaldehyde 37% Commercial Grade</option>
                        <option>Formaldehyde 43% Grade</option>
                        <option>BWP Marine Plywood IS:710</option>
                        <option>Calibrated Commercial Plywood</option>
                        <option>Custom Industrial Resin / Ply</option>
                      </select>
                    </Field>
                    <Field label="Estimated Order / Tanker Volume" required>
                      <input type="text" placeholder="e.g. 2 x 20ft Container / Tanker Load" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Contact Person Name" required>
                      <input type="text" placeholder="Full Name" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Email Address" required>
                      <input type="email" placeholder="name@company.com" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Phone / WhatsApp Number" required>
                      <input type="tel" placeholder="+ country code & number" required className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Shipping & Delivery Terms">
                      <input type="text" placeholder="FOB / CIF / Ex-Factory" className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm" />
                    </Field>
                    <Field label="Technical Requirement Details" className="sm:col-span-2">
                      <textarea rows="3" placeholder="Detail specific chemical purity percentages, plywood core specifications, packaging, or inspection requirements..." className="w-full p-3 border border-[#CAD4CC] rounded-xl bg-[#FDFBF8] text-sm resize-y" />
                    </Field>
                  </div>
                  <button type="submit" className="h-12 px-8 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2A1D] cursor-pointer">
                    Submit Export / Chemical Enquiry <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: DIRECT CONTACT CHANNELS (BRAND GREEN ACCENTS) */}
      <section className="py-[82px] lg:py-[130px] bg-[#FDFBF8]" id="direct-contact">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-[700px] mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              DIRECT CONVERSATION CHANNELS
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[58px] font-bold leading-[1.05] tracking-[-1px] text-[#14211A]">
              Reach Pentagon in the Way That Works for You.
            </h2>
            <p className="mt-3 text-[#4A5750] text-[16px] leading-[1.65]">
              Whether you need instant technical pricing on WhatsApp or formal BOQ reviews via Email, our team is available across all major channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {directContacts.map((item, index) => {
              const IconComp = iconMap[item.iconName] || PhoneCall;
              const isWhatsapp = item.type === "WhatsApp";
              return (
                <div
                  key={item.type}
                  className="group relative flex flex-col justify-between p-7 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] hover:bg-white hover:border-[#143D2B] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#143D2B] text-[#E8927C] font-bold text-xs shadow-xs">
                        0{index + 1}
                      </span>
                      <span className="p-2.5 rounded-2xl bg-[#F7F3EC] text-[#143D2B] group-hover:bg-[#143D2B] group-hover:text-[#C86D51] transition-colors">
                        <IconComp className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
                      {item.type}
                    </h3>

                    <strong className="block mt-2 text-[#C86D51] font-bold text-sm tracking-tight break-all font-mono">
                      {item.detail}
                    </strong>

                    <p className="mt-3 text-[#65736A] text-xs leading-relaxed">
                      {item.copy}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#CAD4CC]/60 flex items-center justify-between">
                    <a
                      href={item.href}
                      target={isWhatsapp ? "_blank" : undefined}
                      rel={isWhatsapp ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#143D2B] group-hover:text-[#C86D51] transition-colors"
                    >
                      <span>{item.action}</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                    {isWhatsapp && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-ping" /> FAST
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-2.5 p-4 rounded-2xl bg-[#F7F3EC] border border-[#CAD4CC]/70 text-[#65736A] text-xs">
            <ShieldCheck className="h-4 w-4 text-[#C86D51] shrink-0" />
            <span>Please contact our sales team before visiting the factory in Yamunanagar so we can confirm the appropriate timing and team representative.</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION MAP & FACTORY SHOWCASE */}
      <section className="py-[82px] lg:py-[130px] bg-[#14211A] text-white" id="location">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-4">
              <MapPin className="h-3.5 w-3.5" /> MANUFACTURING HEADQUARTERS
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[62px] font-bold leading-none tracking-[-1px] text-white mb-4">
              Manufacturing From Yamunanagar, Haryana.
            </h2>
            <p className="text-white/80 text-[16px] leading-[1.75] mb-8">
              Pentagon Plywood operates out of India’s premier wood-product manufacturing cluster in Yamunanagar. Our facility houses high-precision hot presses, core composers, and automated chemical resin synthesis.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <address className="not-italic font-['DM_Serif_Display',Georgia,serif] text-2xl lg:text-3xl leading-snug text-white/90">
                Village Raipur, Khajuri Road<br />
                Yamunanagar, Haryana 135001<br />
                India
              </address>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FDFBF8] px-7 text-xs font-bold uppercase tracking-wider text-[#14211A] shadow-md hover:bg-white transition-all"
                href="https://maps.app.goo.gl/5K3S7Zpc6ZX3e7uF7"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-7 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                href={PHONE_LINK}
              >
                Plan a Visit
              </a>
            </div>
          </div>

          <FactoryLocationView />
        </div>
      </section>

      {/* SECTION 5: NEXT STEPS WORKFLOW */}
      <section className="py-[82px] lg:py-[130px] bg-[#FDFBF8]" id="next-step">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-[700px] mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              THE ENQUIRY WORKFLOW
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[58px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              A Clear Enquiry Makes the Next Step Seamless.
            </h2>
            <p className="mt-3 text-[#4A5750] text-[16px] leading-[1.65]">
              Here is exactly what happens after you submit your requirement on our portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {nextSteps.map((step, idx) => {
              const IconComp = iconMap[step.iconName] || FileText;
              return (
                <div
                  key={step.number}
                  className="relative p-8 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] hover:bg-white hover:border-[#143D2B] shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-extrabold tracking-widest text-white uppercase bg-[#143D2B] px-3 py-1 rounded-full shadow-xs">
                      STEP {step.number}
                    </span>
                    <span className="p-3 rounded-2xl bg-[#F7F3EC] text-[#143D2B]">
                      <IconComp className="h-5 w-5 text-[#C86D51]" />
                    </span>
                  </div>

                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#65736A] text-sm leading-relaxed">
                    {step.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: SOLUTION DIRECTIONS WITH VIBRANT INTERIOR IMAGES */}
      <section className="py-[82px] lg:py-[130px] bg-[#F7F3EC] border-y border-[#CAD4CC]">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-[700px] mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              APPLICATION GALLERY & GUIDANCE
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[58px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              Start With What You’re Planning to Make.
            </h2>
            <p className="mt-3 text-[#4A5750] text-[16px] leading-[1.65]">
              Select the application area closest to your project for immediate material grade recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productDirections.map((dir, idx) => (
              <div
                key={dir.title}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] hover:border-[#143D2B] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-[#14211A]">
                    <img
                      src={dir.image}
                      alt={dir.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#143D2B]/90 backdrop-blur-md text-[#E8927C] text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border border-white/20">
                      {dir.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold text-[#C86D51] uppercase tracking-wider">
                      OPTION 0{idx + 1}
                    </span>
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#14211A] mt-1 mb-2">
                      {dir.title}
                    </h3>
                    <p className="text-[#65736A] text-xs leading-relaxed">
                      {dir.copy}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => applyCategoryToHero(dir.type === "dealer" ? "Multiple Products" : "Plywood")}
                    className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#143D2B] group-hover:bg-[#0B2A1D] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    <span>{dir.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-[82px] lg:py-[130px] bg-[#FDFBF8]" id="contact-faq">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[58px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Useful Details Before You Contact Us.
            </h2>
            <p className="mt-4 text-[#4A5750] text-sm leading-relaxed">
              Have questions about sample dispatches, minimum order quantities, BOQ file uploads, or factory visits? Check our quick answers.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#143D2B] bg-white shadow-md ring-1 ring-[#143D2B]"
                      : "border-[#CAD4CC]/80 bg-[#FDFBF8] hover:border-[#143D2B]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-['DM_Serif_Display',Georgia,serif] text-lg sm:text-xl text-[#14211A] cursor-pointer"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <span className="text-[#C86D51] font-bold text-xs font-['Manrope',sans-serif]">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform ${
                      isOpen ? "bg-[#143D2B] text-white rotate-180" : "bg-[#F7F3EC] text-[#14211A]"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-[#65736A] text-sm leading-relaxed border-t border-[#CAD4CC]/40 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA & TRUST BADGES */}
      <section className="py-[80px] lg:py-[130px] bg-[#143D2B] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-7 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#E8927C] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-3">
            <Award className="h-4 w-4 text-[#C86D51]" /> READY TO START YOUR ENQUIRY?
          </div>
          
          <h2 className="max-w-[22ch] mx-auto my-4 font-['Oswald',sans-serif] text-[38px] lg:text-[62px] font-bold leading-[1.02] tracking-[-1px] text-white">
            Your Requirement Doesn’t Have to Be Perfect.{" "}
            <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] italic font-normal not-italic block mt-1">
              It Just Has to Start Somewhere.
            </em>
          </h2>

          <p className="max-w-[620px] mx-auto text-white/80 text-[17px] leading-[1.75]">
            Tell us what you are making, selling or planning. Share the product, application, quantity and location you know today, and our team will take care of the rest.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all cursor-pointer"
              href="#contact-form"
              onClick={(e) => {
                const formElem = document.getElementById("contact-form");
                if (formElem) {
                  e.preventDefault();
                  formElem.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Send Quick Requirement <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <MessageSquare className="h-4 w-4 text-[#25D366]" />
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap justify-center items-center gap-8 text-xs text-white/70">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#C86D51]" /> ISO 9001:2015 Certified</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-[#C86D51]" /> BIS Certified Plywood</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-[#C86D51]" /> Factory Direct Dispatch</span>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex lg:hidden border-t border-[#CAD4CC] bg-[#FDFBF8] p-2 gap-2 shadow-xl">
        <a
          href={PHONE_LINK}
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider"
        >
          <PhoneCall className="h-4 w-4 text-[#C86D51]" /> Call
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider"
        >
          <MessageSquare className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
