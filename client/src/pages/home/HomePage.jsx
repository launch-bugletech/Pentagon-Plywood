import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Building2,
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  Utensils,
  Shirt,
  DoorClosed,
  Droplets,
  Store,
  Layers,
  Sun,
  Droplet,
  Leaf,
  ChevronDown,
  Check,
  FileText,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ROUTES, CONTACT_SECTIONS } from "../../app/routes.js";
import {
  HERO_DATA,
  TRUST_STATS,
  PRODUCTS_DATA,
  PRODUCT_TAB_FILTERS,
  GUIDED_SELECTION,
  BRANDS_DATA,
  ESCOTEL_SPOTLIGHT,
  WHY_PENTAGON,
  MANUFACTURING_DATA,
  QUALITY_DATA,
  APPLICATIONS_DATA,
  PROJECTS_DATA,
  DEALER_BENEFITS,
  TESTIMONIALS_DATA,
  RESOURCES_DATA,
  ENQUIRY_PROFILES,
  ENQUIRY_TYPES,
  ENQUIRY_PRODUCTS,
} from "./homeData.js";

const iconMap = {
  Calendar,
  Users,
  ShieldCheck,
  Utensils,
  Shirt,
  DoorClosed,
  Building2,
  Droplets,
  Store,
  Layers,
  Sun,
  Droplet,
  Award,
  Leaf,
};

function HomePage() {
  // Products filter state
  const [activeProductTab, setActiveProductTab] = useState("all");

  // Enquiry form submission state
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    profile: ENQUIRY_PROFILES[0],
    enquiryType: ENQUIRY_TYPES[0],
    product: ENQUIRY_PRODUCTS[0],
    details: "",
  });

  const filteredProducts =
    activeProductTab === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeProductTab);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setEnquirySubmitted(true);
  };

  useEffect(() => {
    document.title = "Pentagon Plywood | Crafting Excellence Since 1986";
  }, []);

  return (
    <div className="bg-[#FDFBF8] text-[#14211A] overflow-hidden font-['Manrope',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0B2A1D] text-white py-16 lg:py-24 overflow-hidden">
        {/* Full-bleed Interior Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${HERO_DATA.bgHeroImage})` }}
        />
        {/* Multi-layered Gradient & Vignette Overlay for High Contrast & Crystal Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D14]/95 via-[#0D3324]/88 to-[#0B2A1D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A1D] via-transparent to-[#071D14]/40" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#C86D51]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-7 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-[#C86D51]/50 text-[#F2A995] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-lg">
              <Award className="h-4 w-4 text-[#C86D51]" />{" "}
              {HERO_DATA.eyebrow}
            </div>

            <h1 className="font-['Oswald',sans-serif] text-[46px] sm:text-[62px] lg:text-[76px] font-bold leading-[1.01] tracking-[-1.5px] text-white drop-shadow-sm">
              {HERO_DATA.titleLine1}{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#E8927C] font-normal not-italic drop-shadow-md">
                {HERO_DATA.titleAccent}
              </em>{" "}
              <span className="block mt-1">{HERO_DATA.titleLine2}</span>
            </h1>

            <p className="text-white/90 text-[16px] sm:text-[19px] leading-[1.7] max-w-2xl font-normal drop-shadow-sm">
              {HERO_DATA.caption}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={ROUTES.products}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] hover:shadow-[#C86D51]/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#enquiry"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur-md shadow-lg"
              >
                Request a Quote
              </a>
            </div>

            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#E8927C]" /> 100% Calibrated Core
              </span>
              <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#E8927C]" /> IS:710 Marine Standard
              </span>
              <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#E8927C]" /> Factory Direct Supply
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Real Connection Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/25 shadow-2xl bg-white/10 backdrop-blur-xl group hover:border-[#C86D51]/60 transition-all duration-500">
              <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden">
                <img
                  src={HERO_DATA.heroImage}
                  alt="Pentagon Plywood Finished Luxury Interior Result"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D14] via-[#071D14]/30 to-transparent" />

                {/* Floating "After Result" Badge */}
                <div className="absolute top-4 left-4 bg-[#0B2A1D]/85 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2 text-white shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#E8927C] animate-pulse" />
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-white/90">
                    FINISHED RESULT PREVIEW
                  </span>
                </div>

                {/* Anniversary Laurels / 40 Years Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-3 shadow-lg">
                  <div className="text-white text-[10px] leading-tight font-bold">
                    <span className="text-[#E8927C] uppercase block tracking-wider">
                      ESTABLISHED 1986
                    </span>
                    <span className="text-white/90">40 YEARS OF EXCELLENCE</span>
                  </div>
                </div>

                {/* Connection Box at Bottom of Visual Card */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#E8927C] uppercase">
                      THE PENTAGON ADVANTAGE
                    </span>
                    <span className="text-[10px] font-bold text-white/70 bg-white/10 px-2 py-0.5 rounded">
                      IS:710 & IS:303
                    </span>
                  </div>
                  <strong className="text-base font-bold text-white block">
                    Zero-Warping Plywood for Bespoke Interiors
                  </strong>
                  <p className="text-[11px] text-white/80 leading-relaxed">
                    Quad-pressed core composition ensures perfectly flat surfaces for seamless veneer work and long-lasting cabinetry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS STRIP */}
      <section className="bg-[#0B2A1D] text-white py-8 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_STATS.map((stat, idx) => {
              const IconComponent = iconMap[stat.iconName] || Calendar;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C86D51]/50 transition-colors"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white shadow-md border border-white/10">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-['Oswald',sans-serif] text-3xl font-bold text-[#C86D51] leading-none">
                      {stat.num}
                    </div>
                    <strong className="block text-sm font-bold text-white mt-1">
                      {stat.title}
                    </strong>
                    <span className="text-xs text-white/70 block mt-0.5">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS RANGE SHOWCASE */}
      <section className="py-[82px] lg:py-[120px] bg-[#FDFBF8]" id="products">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
                PRODUCT RANGE
              </div>
              <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
                Discover Our{" "}
                <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                  Core Collection.
                </em>
              </h2>
            </div>
            <p className="max-w-md text-[#4A5750] text-sm leading-relaxed">
              Pentagon manufactures MR, BWP, Marine and Fire Retardant Plywood,
              blockboard and flush doors held to strict factory standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#CAD4CC]/60 pb-4">
            {PRODUCT_TAB_FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeProductTab === tab.id
                    ? "bg-[#143D2B] text-white shadow-md"
                    : "bg-[#F7F3EC] text-[#4A5750] hover:bg-[#CAD4CC]/50"
                }`}
                onClick={() => setActiveProductTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] hover:border-[#143D2B] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#14211A]">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#143D2B]/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase border border-white/20">
                      {p.imageLabel}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A] mb-2">
                      {p.name}
                    </h3>
                    <p className="text-[#65736A] text-xs leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#CAD4CC]/50">
                      {p.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-[11px] text-[#4A5750] font-semibold"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#C86D51] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#CAD4CC]/40 mt-4">
                  <span className="text-[11px] font-bold text-[#143D2B] bg-[#F7F3EC] px-3 py-1 rounded-md">
                    {p.standard}
                  </span>
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#143D2B] group-hover:text-[#C86D51] transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GUIDED SELECTION: "WHAT ARE YOU BUILDING?" */}
      <section className="py-[82px] lg:py-[120px] bg-[#F7F3EC] border-y border-[#CAD4CC]">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              GUIDED SELECTION
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              What Are You{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Building?
              </em>
            </h2>
            <p className="mt-3 text-[#4A5750] text-sm leading-relaxed">
              Tell us the space, and we'll point you to the right board grade. A
              simpler way to specify plywood, directly from the manufacturer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GUIDED_SELECTION.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || Layers;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#CAD4CC] bg-[#FDFBF8] hover:border-[#143D2B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#143D2B] text-white mb-4 shadow-sm border border-white/10">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A] mb-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#CAD4CC]/50">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#65736A] uppercase block">
                      {item.rec}
                    </span>
                    <strong className="text-xs font-bold text-[#143D2B] block mt-0.5">
                      {item.pick}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BRANDS & FLAGSHIP ESCOTEL SPOTLIGHT */}
      <section className="py-[82px] lg:py-[120px] bg-[#FDFBF8]" id="brands">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-2xl mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              SIGNATURE RANGES
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Eight Brands.{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                One Standard.
              </em>
            </h2>
            <p className="mt-3 text-[#4A5750] text-sm leading-relaxed">
              From economy to elite marine grade, every Pentagon brand is
              manufactured in our Yamunanagar facility under identical quality
              control standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {BRANDS_DATA.map((brand, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#CAD4CC] bg-[#F7F3EC] hover:bg-white hover:border-[#143D2B] shadow-xs transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#143D2B] text-white text-[9px] font-extrabold uppercase tracking-widest">
                    {brand.tierLbl}
                  </span>
                </div>
                <strong className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A] block">
                  {brand.name}{" "}
                  <small className="text-sm font-normal text-[#C86D51]">
                    {brand.sub}
                  </small>
                </strong>
                <span className="text-[11px] text-[#65736A] font-medium block mt-1">
                  {brand.meta}
                </span>
              </div>
            ))}
          </div>

          {/* FLAGSHIP ESCOTEL SPOTLIGHT BANNER */}
          <div className="rounded-3xl bg-[#143D2B] text-white p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-white/20">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#C86D51]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C86D51]/20 text-[#E8927C] text-[10px] font-extrabold uppercase tracking-widest border border-[#C86D51]/40">
                  <Sparkles className="h-3.5 w-3.5 text-[#C86D51]" />{" "}
                  {ESCOTEL_SPOTLIGHT.kicker}
                </span>

                <h3 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-white">
                  {ESCOTEL_SPOTLIGHT.title}
                </h3>

                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  {ESCOTEL_SPOTLIGHT.lead}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {ESCOTEL_SPOTLIGHT.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15"
                    >
                      <strong className="text-base font-bold text-[#C86D51] block">
                        {feat.label}
                      </strong>
                      <span className="text-[11px] text-white/80 block mt-0.5">
                        {feat.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 text-right">
                <a
                  href="#enquiry"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all cursor-pointer"
                >
                  Explore Escotel Range <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE PENTAGON PROMISE */}
      <section
        className="py-[82px] lg:py-[120px] bg-[#F7F3EC] border-b border-[#CAD4CC]"
        id="promise"
      >
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-2xl mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              THE PENTAGON PROMISE
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Why Interior Professionals{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Choose Us.
              </em>
            </h2>
            <p className="mt-3 text-[#4A5750] text-sm leading-relaxed">
              Four non-negotiable decisions made on every panel we press in
              Yamunanagar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PENTAGON.map((item) => {
              const IconComp = iconMap[item.iconName] || ShieldCheck;
              return (
                <div
                  key={item.n}
                  className="p-7 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#143D2B] text-white shadow-sm border border-white/10">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-xl font-bold font-['Oswald',sans-serif] text-[#CAD4CC]">
                        {item.n}
                      </span>
                    </div>

                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A] mb-2">
                      {item.t}
                    </h3>

                    <p className="text-[#65736A] text-xs leading-relaxed">
                      {item.p}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CAD4CC]/50 flex items-center gap-2 text-[10px] font-extrabold text-[#143D2B] uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C86D51]" />{" "}
                    Pentagon Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. MANUFACTURING EXCELLENCE */}
      <section
        className="py-[82px] lg:py-[120px] bg-[#14211A] text-white"
        id="manufacturing"
      >
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={MANUFACTURING_DATA.image}
                alt="Pentagon Plywood Factory Yamunanagar"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                {MANUFACTURING_DATA.caption}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase">
              {MANUFACTURING_DATA.eyebrow}
            </div>

            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[54px] font-bold leading-tight tracking-[-1px] text-white">
              {MANUFACTURING_DATA.title}
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              {MANUFACTURING_DATA.lead}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
              {MANUFACTURING_DATA.steps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="text-xs font-extrabold text-white uppercase tracking-widest block mb-1">
                    STEP {step.num}
                  </span>
                  <strong className="text-sm font-bold text-white block">
                    {step.title}
                  </strong>
                  <span className="text-[11px] text-white/70 block mt-0.5">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUALITY & CERTIFICATIONS */}
      <section className="py-[82px] lg:py-[120px] bg-[#FDFBF8]" id="quality">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase">
              {QUALITY_DATA.eyebrow}
            </div>

            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[54px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              {QUALITY_DATA.title}
            </h2>

            <p className="text-[#4A5750] text-base leading-relaxed">
              {QUALITY_DATA.lead}
            </p>

            <div className="space-y-3.5 pt-2">
              {QUALITY_DATA.processList.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F3EC] border border-[#CAD4CC]/60"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white font-bold text-xs">
                    {item.num}
                  </span>
                  <div>
                    <strong className="text-sm font-bold text-[#14211A] block">
                      {item.title}
                    </strong>
                    <span className="text-xs text-[#65736A] block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#143D2B] text-white border border-white/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase block">
                    VERIFIED PERFORMANCE
                  </span>
                  <h3 className="text-2xl font-bold">
                    Certified at Every Level
                  </h3>
                </div>
                <CheckCircle2 className="h-8 w-8 text-[#C86D51]" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {QUALITY_DATA.certificates.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-12 w-auto mx-auto mb-2 object-contain"
                    />
                    <strong className="text-xs font-bold text-white block">
                      {cert.name}
                    </strong>
                    <span className="text-[10px] text-white/70 block mt-0.5">
                      {cert.desc}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#enquiry"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C86D51] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A85238] transition-all cursor-pointer"
              >
                Request Quality Test Reports <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. APPLICATIONS GALLERY */}
      <section
        className="py-[82px] lg:py-[120px] bg-[#F7F3EC] border-y border-[#CAD4CC]"
        id="applications"
      >
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              APPLICATIONS & INDUSTRIES
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Crafted for{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Every Space.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {APPLICATIONS_DATA.map((app, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden border border-[#CAD4CC] group shadow-sm hover:shadow-xl transition-all duration-300 min-h-[260px] ${app.size}`}
              >
                <img
                  src={app.image}
                  alt={app.alt}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase block">
                    {app.sub}
                  </span>
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal mt-0.5">
                    {app.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROJECTS IN ACTION */}
      <section className="py-[82px] lg:py-[120px] bg-[#FDFBF8]">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-2xl mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              BUILT FOR EVERY KIND OF SPACE
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Our Plywood{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                In Action.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((proj, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-[#14211A]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#143D2B] text-white text-[10px] font-bold">
                        {proj.type}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                        {proj.loc}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A] mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-[#65736A] text-xs leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DEALER & DISTRIBUTOR PARTNERSHIP */}
      <section
        className="py-[82px] lg:py-[120px] bg-[#143D2B] text-white"
        id="dealers"
      >
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[#E8927C] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase">
              BUSINESS PARTNERSHIP
            </div>

            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-white">
              Partner With a{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Legacy Brand.
              </em>
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              Explore a channel partnership built around your territory, godown
              infrastructure, and product demand.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={ROUTES.dealers}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all cursor-pointer"
              >
                Apply for Dealership <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_SECTIONS.form}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
              >
                Discuss Bulk Requirement
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {DEALER_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#C86D51] text-white text-[11px] font-bold">
                    0{idx + 1}
                  </span>
                  {benefit}
                </span>
                <ArrowRight className="h-4 w-4 text-[#C86D51] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="py-[82px] lg:py-[120px] bg-[#F7F3EC] border-b border-[#CAD4CC]">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              FROM OUR PARTNERS
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Trusted By{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Experts Across India.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-[#CAD4CC] bg-[#FDFBF8] flex flex-col justify-between shadow-xs"
              >
                <p className="font-['DM_Serif_Display',Georgia,serif] text-lg text-[#14211A] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#CAD4CC]/50">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#143D2B] text-white font-bold text-sm">
                    {item.initial}
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#14211A] block">
                      {item.author}
                    </strong>
                    <span className="text-xs text-[#65736A] block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. KNOWLEDGE & RESOURCES */}
      <section className="py-[82px] lg:py-[120px] bg-[#FDFBF8]" id="resources">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="max-w-2xl mb-12">
            <div className="text-[#C86D51] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase mb-2">
              KNOWLEDGE & RESOURCES
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-tight tracking-[-1px] text-[#14211A]">
              Industry Insights &{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic">
                Buying Guides.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES_DATA.map((res, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl border border-[#CAD4CC] bg-[#F7F3EC] hover:bg-white hover:border-[#143D2B] shadow-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#143D2B] text-white text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
                    {res.tag}
                  </span>
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A] mb-2">
                    {res.title}
                  </h3>
                  <p className="text-[#65736A] text-xs leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CAD4CC]/50 flex items-center justify-between text-xs font-bold text-[#143D2B]">
                  <span>{res.meta}</span>
                  <ArrowRight className="h-4 w-4 text-[#C86D51]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. TAILORED ENQUIRY FORM SECTION */}
      <section
        className="py-[82px] lg:py-[120px] bg-[#143D2B] text-white"
        id="enquiry"
      >
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#E8927C] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase">
              GET IN TOUCH
            </div>

            <h2 className="font-['Oswald',sans-serif] text-[40px] lg:text-[56px] font-bold leading-none tracking-[-1px] text-white">
              Tell Us What You're{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#C86D51] font-normal not-italic block mt-1">
                Building.
              </em>
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              Reach out for bulk enquiries, custom quotes, dealership
              discussions or technical assistance. Our sales desk responds
              within 1 business day.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#C86D51]" />
                <span className="text-xs text-white/90">
                  Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#C86D51]" />
                <span className="text-xs text-white/90">
                  +91 70150 85556 · Sales Desk
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C86D51]" />
                <span className="text-xs text-white/90">
                  sales@pentagonply.com
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleEnquirySubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#FDFBF8] text-[#14211A] shadow-2xl border border-white/20"
            >
              {enquirySubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 text-[#C86D51] mx-auto mb-4" />
                  <h3 className="font-['Oswald',sans-serif] text-3xl font-bold text-[#14211A]">
                    Enquiry Received
                  </h3>
                  <p className="text-[#65736A] mt-2">
                    Thank you! Our sales team will get back to you within 24
                    business hours.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#14211A] underline cursor-pointer"
                    onClick={() => setEnquirySubmitted(false)}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-[#CAD4CC]">
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-[#C86D51] uppercase">
                        DIRECT SALES DESK
                      </span>
                      <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold text-[#14211A]">
                        Request a Tailored Quote
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#143D2B] text-white text-[10px] font-bold uppercase">
                      FAST RESPONSE
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Full Name *
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Phone Number *
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Email Address
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      City & State
                      <input
                        type="text"
                        placeholder="e.g. Chandigarh, Punjab"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      I Am A
                      <select
                        value={formData.profile}
                        onChange={(e) =>
                          setFormData({ ...formData, profile: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      >
                        {ENQUIRY_PROFILES.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Enquiry Type
                      <select
                        value={formData.enquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            enquiryType: e.target.value,
                          })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      >
                        {ENQUIRY_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750] sm:col-span-2">
                      Product of Interest
                      <select
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({ ...formData, product: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden"
                      >
                        {ENQUIRY_PRODUCTS.map((prod) => (
                          <option key={prod} value={prod}>
                            {prod}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-[#4A5750] sm:col-span-2">
                      Requirement Details
                      <textarea
                        rows="3"
                        placeholder="Tell us thickness, sheet count, timeline, and application..."
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        className="p-3 rounded-xl border border-[#CAD4CC] bg-[#FDFBF8] text-sm font-normal text-[#14211A] focus:border-[#C86D51] focus:outline-hidden resize-y"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 h-13 inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B2A1D] transition-all cursor-pointer shadow-lg"
                  >
                    Send Enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 15. FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917015085556"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-7 w-7" />
      </a>
    </div>
  );
}

export default HomePage;
