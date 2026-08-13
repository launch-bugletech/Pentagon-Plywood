import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Factory,
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
  Plus,
  Minus,
  Download,
  Truck,
  TrendingUp,
  Handshake,
  Clock,
  Play,
  TreePine,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";
import { ROUTES, CONTACT_SECTIONS } from "../../app/routes.js";
import guideEdgeImage from "../../assets/homepage/Duroply-Feature-Images-and-Blog-Images-8-1024x576.jpg";
import guideBlockboardImage from "../../assets/homepage/products/is303-blockboard-1671450145-6629496.webp";
import guideBedroomImage from "../../assets/product/Applications/Contemporary living room with furniture.png";
import woodPanelTexture from "../../assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg";

import spaceKitchens from "../../assets/spaces/spaces_kitchens.jpg";
import spaceBathrooms from "../../assets/spaces/spaces_bathrooms.jpg";
import spaceFurniture from "../../assets/spaces/spaces_furniture.jpg";
import spaceFlooring from "../../assets/spaces/spaces_flooring.jpg";
import spaceBuildings from "../../assets/spaces/spaces_buildings.jpg";
import {
  HERO_DATA,
  HERO_TRUST_BAR,
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

const PARTNERSHIP_FAQS = [
  {
    question: "Do you offer dealer or distributor partnerships?",
    answer:
      "Yes, we partner with authorized dealers, stockists, and distribution network partners across 20+ states in India, offering competitive margins, marketing support, and reliable supply.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary depending on the product grade and location. For direct factory dispatches, full-vehicle or mixed board loads are supported. Contact our trade desk for exact details.",
  },
  {
    question: "Do you provide pan-India delivery?",
    answer:
      "Yes, our manufacturing and logistics units in Yamunanagar and Morbi deliver products across major industrial hubs, tier-1, tier-2 cities and towns nationwide.",
  },
  {
    question: "Can I get custom sizes or bulk pricing?",
    answer:
      "Absolutely. We supply custom board thicknesses, special dimensions, and volume-discounted pricing for OEM manufacturers, commercial interior projects, and bulk trade buyers.",
  },
  {
    question: "What documents are available for architects & builders?",
    answer:
      "We provide complete IS standard test certificates (IS 710, IS 303, IS 1659, IS 2202), product specification datasheets, warranty cards, and compliance documentation.",
  },
];

const TESTIMONIALS_CARDS = [
  {
    quote:
      "Pentagon Plywood delivers the perfect balance of strength and finish. It's our go-to choice for premium interiors.",
    author: "Ar. Neha Sharma",
    role: "Interior Architect, Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Consistent quality, timely supply, and excellent support—that's what makes Pentagon our trusted partner.",
    author: "Rohit Bansal",
    role: "Dealer, Indore",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "From BWR to BWP, the performance is outstanding. Our projects stand strong with Pentagon.",
    author: "Vikram Mehta",
    role: "Contractor, Bengaluru",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The surface finish and durability are unmatched in this segment. Highly recommended for modern homes.",
    author: "Pooja Desai",
    role: "Builder, Ahmedabad",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
];

const GUIDES_DATA = [
  {
    tag: "BUYING GUIDE",
    title: "How to Choose the Right Plywood Grade",
    desc: "A simple guide to understanding grades and choosing what's best for your space.",
    readTime: "6 min read",
    image: guideEdgeImage,
  },
  {
    tag: "PRODUCT KNOWLEDGE",
    title: "Understanding BWR, BWP & MR Plywood",
    desc: "Know the differences, ideal uses, and the right choice for every application.",
    readTime: "5 min read",
    image: guideBlockboardImage,
  },
  {
    tag: "APPLICATION GUIDE",
    title: "Choosing the Right Plywood for Every Application",
    desc: "From kitchens to offices, find the perfect plywood for lasting performance.",
    readTime: "7 min read",
    image: guideBedroomImage,
  },
];

const SPACES_GALLERY_DATA = [
  {
    id: "kitchens",
    label: "Kitchens",
    sub: "BWP IS:710 Marine",
    desc: "100% boiling waterproof plywood engineered for heavy moisture, steam & continuous water contact.",
    image: spaceKitchens,
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    sub: "Waterproof Vanities",
    desc: "Zero-swelling calibrated boards designed for bathroom vanities, under-sink cabinetry & wall linings.",
    image: spaceBathrooms,
  },
  {
    id: "furniture",
    label: "Furniture",
    sub: "Living & Joinery",
    desc: "Borer and termite proof plywood ideal for wardrobes, TV units, beds and custom furniture.",
    image: spaceFurniture,
  },
  {
    id: "flooring",
    label: "Flooring",
    sub: "Sub-floors & Storage",
    desc: "Heavy-duty structural load bearing panels for wooden flooring bases and architectural storage.",
    image: spaceFlooring,
  },
  {
    id: "buildings",
    label: "Buildings",
    sub: "Commercial Fit-Outs",
    desc: "Fire-retardant and high-durability boards for office partitions, retail displays & public spaces.",
    image: spaceBuildings,
  },
];

function HomePage() {
  // Partnership section FAQ accordion state (first question open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Crafted for Every Space interactive expanding cards state (item 1 active by default)
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(1);

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
      <section className="relative min-h-[85vh] flex flex-col justify-between bg-[#FDFBF8] text-[#14211A] pt-0 pb-8 lg:pt-0 lg:pb-10 overflow-hidden border-b border-[#CAD4CC]/50">
        {/* Full-bleed Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${HERO_DATA.heroImage})` }}
        />
        {/* Subtle Soft Fade around left text area only */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF8]/75 via-[#FDFBF8]/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF8]/50 via-transparent to-transparent pointer-events-none lg:hidden" />

        <div className="max-w-[1280px] mx-auto px-7 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto pt-3 sm:pt-5 pb-4">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <div className="text-[#9C6846] font-bold text-[11px] leading-tight tracking-[0.2em] uppercase">
              {HERO_DATA.eyebrow}
            </div>

            <h1 className="font-['Manrope',sans-serif] text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#14211A]">
              {HERO_DATA.titleLine1}{" "}
              <span className="block">{HERO_DATA.titleLine2}</span>
              <span className="block text-[#C86D51] mt-0.5 sm:mt-1">
                {HERO_DATA.titleAccent}
              </span>
            </h1>

            <p className="text-[#65736A] text-[15px] sm:text-[18px] leading-[1.65] max-w-xl font-medium">
              {HERO_DATA.caption}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={ROUTES.products}
                className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-7 sm:px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#A85238] transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#enquiry"
                className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full border border-[#CAD4CC] bg-white px-7 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#14211A] hover:bg-[#F7F3EC] transition-all shadow-xs"
              >
                Request a Quote{" "}
                <ArrowRight className="h-4 w-4 text-[#14211A]" />
              </a>
            </div>

            <div className="pt-3 flex items-center gap-3.5">
              <div className="flex -space-x-2 overflow-hidden shrink-0">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Architect Professional"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Interior Designer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Contractor"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Commercial Builder"
                />
              </div>
              <div className="text-xs text-[#4A5750]">
                <strong className="font-bold text-[#14211A] block leading-tight">
                  Trusted by 10,000+
                </strong>
                <span className="text-[11px] text-[#65736A]">
                  Professional Across India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Space allowing background interior image to shine through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[420px]" />
        </div>

        {/* Floating Bottom Trust Bar */}
        <div className="max-w-[1280px] mx-auto px-7 relative z-10 w-full mt-6 lg:mt-10">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white/95 backdrop-blur-md shadow-xl p-5 md:p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
              {HERO_TRUST_BAR.map((stat, idx) => {
                const IconComponent = iconMap[stat.iconName] || Calendar;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3.5 ${idx !== 0 ? "lg:pl-4 pt-4 sm:pt-0" : ""}`}
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#C86D51] border border-[#CAD4CC]/40 shadow-xs">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-[#14211A] leading-snug">
                        {stat.title}
                      </strong>
                      <span className="text-[11px] text-[#65736A] block leading-tight mt-0.5">
                        {stat.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
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
        className="relative py-16 sm:py-24 lg:py-28 text-[#14211A] overflow-hidden border-t border-b border-[#CAD4CC]/50 bg-[#F7F3EC]"
        id="manufacturing"
      >
        {/* Wood Texture Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url(${woodPanelTexture})` }}
        />
        {/* Warm Soft Off-White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF8]/95 via-[#FDFBF8]/90 to-[#F7F3EC]/95 pointer-events-none" />
        {/* Subtle Geometric Pattern Grid Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-7 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Image & Video Play Badge Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#CAD4CC]/60 h-[360px] sm:h-[440px] w-full bg-white group cursor-pointer">
              <img
                src={MANUFACTURING_DATA.image}
                alt="Pentagon Plywood Precision Manufacturing Facility in Yamunanagar"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom-Left Video Play Badge */}
              <a
                href={ROUTES.manufacturing}
                className="absolute bottom-5 left-5 flex items-center gap-3.5 z-10 cursor-pointer group/play"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-white bg-white/20 backdrop-blur-md text-white group-hover/play:bg-[#C86D51] group-hover/play:border-[#C86D51] transition-all shadow-lg">
                  <Play className="h-5 w-5 fill-white ml-0.5" />
                </div>
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-white block leading-tight drop-shadow-xs group-hover/play:text-[#E8927C] transition-colors">
                    See Our Manufacturing Process
                  </strong>
                  <span className="text-[11px] text-white/80 font-medium block leading-tight mt-0.5">
                    1:24 min
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Copy & 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#65736A] block mb-2">
                Built at Our State-of-the-Art Facility
              </span>

              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-4xl sm:text-5xl lg:text-6xl text-[#14211A] leading-[1.08]">
                Precision Engineered{" "}
                <span className="text-[#C86D51] font-normal block mt-1">
                  in Yamunanagar
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#65736A] leading-relaxed max-w-xl font-medium mt-3">
                From handpicked timber to flawlessly finished panels, every sheet is crafted with precision, pressed for strength, and built to perform in real spaces.
              </p>
            </div>

            {/* 3 Bottom Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {/* Card 1 */}
              <div className="rounded-2xl border border-[#E5DDD2] bg-white p-4 text-left shadow-2xs hover:shadow-md transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40 shadow-2xs mb-3">
                  <TreePine className="h-5 w-5 text-[#143D2B]" />
                </div>
                <strong className="font-bold text-xs sm:text-sm text-[#14211A] block leading-snug">
                  Hand-selected veneer
                </strong>
                <span className="text-[11px] text-[#65736A] leading-snug block mt-1 font-medium">
                  Carefully chosen for strength, finish &amp; stability.
                </span>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-[#E5DDD2] bg-white p-4 text-left shadow-2xs hover:shadow-md transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40 shadow-2xs mb-3">
                  <ShieldCheck className="h-5 w-5 text-[#143D2B]" />
                </div>
                <strong className="font-bold text-xs sm:text-sm text-[#14211A] block leading-snug">
                  Pressed &amp; inspected
                </strong>
                <span className="text-[11px] text-[#65736A] leading-snug block mt-1 font-medium">
                  Calibrated pressing &amp; multi-point quality checks.
                </span>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-[#E5DDD2] bg-white p-4 text-left shadow-2xs hover:shadow-md transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40 shadow-2xs mb-3">
                  <Factory className="h-5 w-5 text-[#143D2B]" />
                </div>
                <strong className="font-bold text-xs sm:text-sm text-[#14211A] block leading-snug">
                  Reliable factory supply
                </strong>
                <span className="text-[11px] text-[#65736A] leading-snug block mt-1 font-medium">
                  Consistent volume, on-time delivery across India.
                </span>
              </div>
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

      {/* 9. APPLICATIONS GALLERY (Interactive Expanding Cards Accordion) */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EC] border-y border-[#CAD4CC]/60"
        id="applications"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-7">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846] block mb-2">
              APPLICATIONS &amp; INDUSTRIES
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#14211A]">
              Crafted for{" "}
              <span className="text-[#C86D51] font-normal italic">
                Every Space.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#65736A] mt-2 font-medium">
              Hover over or tap any space to view specialized plywood solutions.
            </p>
          </div>

          {/* Interactive Expanding Cards Grid Container */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[500px] lg:h-[540px] w-full">
            {SPACES_GALLERY_DATA.map((space, idx) => {
              const isActive = activeSpaceIndex === idx;
              return (
                <div
                  key={space.id}
                  onMouseEnter={() => setActiveSpaceIndex(idx)}
                  onClick={() => setActiveSpaceIndex(idx)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-[#CAD4CC]/60 flex flex-col justify-between p-6 group ${
                    isActive
                      ? "md:flex-[2.8] bg-[#14211A] shadow-2xl min-h-[360px] md:min-h-0"
                      : "md:flex-1 bg-[#14211A]/80 hover:bg-[#14211A] min-h-[140px] md:min-h-0"
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={space.image}
                    alt={space.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      isActive
                        ? "scale-105 opacity-90"
                        : "scale-100 opacity-60 group-hover:opacity-75"
                    }`}
                  />

                  {/* Dark Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                      isActive
                        ? "bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                        : "bg-black/45 group-hover:bg-black/30"
                    }`}
                  />

                  {/* Top-Right Arrow Badge Icon */}
                  <div className="relative z-10 flex justify-end w-full">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-white/60 bg-white/20 backdrop-blur-md text-white shadow-lg rotate-0"
                          : "border-white/40 bg-white/10 backdrop-blur-md text-white/90 group-hover:bg-white/20"
                      }`}
                    >
                      {isActive ? (
                        <ArrowDownLeft className="h-5 w-5 text-white" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Label & Content */}
                  <div className="relative z-10 text-white mt-auto">
                    {/* Eyebrow sub-tag (fades in on active) */}
                    <div
                      className={`transition-all duration-300 ${
                        isActive
                          ? "opacity-100 max-h-8 mb-1"
                          : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                      }`}
                    >
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8927C] block whitespace-nowrap">
                        {space.sub}
                      </span>
                    </div>

                    {/* Fixed Title Label */}
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl font-normal leading-tight text-white drop-shadow-md whitespace-nowrap">
                      {space.label}
                    </h3>

                    {/* Extended Description & Link (fades in on active) */}
                    <div
                      className={`transition-all duration-500 ease-out overflow-hidden ${
                        isActive
                          ? "opacity-100 max-h-40 pt-2"
                          : "opacity-0 max-h-0 pt-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-xs text-white/80 leading-relaxed font-medium max-w-xs hidden sm:block">
                        {space.desc}
                      </p>
                      <div className="pt-2">
                        <a
                          href={ROUTES.products}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8927C] hover:text-white transition"
                        >
                          <span>Explore Space</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Explore All Applications Banner Bar */}
          <div className="mt-8 pt-6 border-t border-[#CAD4CC]/60 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD2] p-5 sm:px-7 shadow-2xs">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#143D2B] text-white shadow-2xs">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[#14211A] block">
                  Looking for More Applications &amp; Custom Joinery?
                </strong>
                <span className="text-xs text-[#65736A] block mt-0.5 font-medium">
                  From Wall Panelling, Doors &amp; Shutters to Retail, Office &amp; Commercial Interiors.
                </span>
              </div>
            </div>

            <a
              href={ROUTES.applications}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold text-white hover:bg-[#C86D51] transition-all shrink-0 cursor-pointer shadow-sm"
            >
              <span>Explore All Applications</span>
              <ArrowRight className="h-4 w-4" />
            </a>
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
      <section className="py-14 sm:py-20 lg:py-24 bg-[#FDFBF8]" id="dealers">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-7">
          <div className="rounded-[32px] bg-[#143D2B] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <span className="text-[#E7B572] font-bold text-[11px] leading-tight tracking-[0.2em] uppercase block">
                    PARTNER WITH US
                  </span>

                  <h2 className="font-['DM_Serif_Display',Georgia,serif] text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] text-white">
                    Partner With a{" "}
                    <span className="text-[#C86D51] font-normal block mt-1">
                      Legacy Brand.
                    </span>
                  </h2>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                    We work with dealers, architects, contractors, and businesses
                    across India. Let&apos;s build strong partnerships for lasting success.
                  </p>
                </div>

                {/* 4 Feature Points with Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-white/15">
                  <div className="flex flex-col items-start gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E7B572]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 leading-tight">
                      Consistent Quality You Can Rely On
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E7B572]">
                      <Truck className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 leading-tight">
                      Timely Delivery Pan India
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E7B572]">
                      <Handshake className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 leading-tight">
                      Dedicated Dealer &amp; Business Support
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E7B572]">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 leading-tight">
                      Strong Margins &amp; Growth Opportunities
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={ROUTES.dealers}
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#A85238] transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Partner With Us <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#enquiry"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-all cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-white" /> Download Brochure
                  </a>
                </div>
              </div>

              {/* Right Column: Accordion FAQs */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-white/70 font-bold text-[11px] leading-tight tracking-[0.2em] uppercase block mb-6">
                    COMMON BUSINESS QUESTIONS
                  </span>

                  <div className="space-y-3">
                    {PARTNERSHIP_FAQS.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen
                              ? "border-white/40 bg-white/10 shadow-lg"
                              : "border-white/15 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenFaqIndex(isOpen ? null : idx)
                            }
                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4"
                          >
                            <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                              {faq.question}
                            </span>
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-transform">
                              {isOpen ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </span>
                          </button>

                          {/* Answer Area - First is open by default */}
                          {isOpen && (
                            <div className="px-4 pb-5 sm:px-5 text-xs text-white/80 leading-relaxed border-t border-white/10 pt-3">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 text-xs text-white/70 flex items-center gap-2">
                  <span>Need more info?</span>
                  <a
                    href={CONTACT_SECTIONS.form}
                    className="text-[#C86D51] font-bold hover:text-white transition flex items-center gap-1"
                  >
                    Talk to our team <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF8] border-b border-[#CAD4CC]/50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-7">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846] block mb-2">
              TRUSTED BY EXPERTS ACROSS INDIA
            </span>
            {/* Title and Action Link in ONE horizontal flex line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl text-[#14211A] leading-tight">
                Built on Trust.{" "}
                <span className="text-[#C86D51] font-normal italic">
                  Backed by Experts.
                </span>
              </h2>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#14211A] hover:text-[#C86D51] transition shrink-0"
              >
                View all testimonials <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* Supporting text directly UNDER title */}
            <p className="text-xs sm:text-sm text-[#65736A] mt-2.5 max-w-xl font-medium leading-relaxed">
              Professionals who build beautiful, functional spaces choose Pentagon Plywood for quality they can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS_CARDS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#E5DDD2] bg-[#FAF8F5] p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl text-[#C86D51] font-serif font-extrabold leading-none select-none mb-3">
                    “
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5750] leading-relaxed font-medium mb-6">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DDD2] flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-xs font-bold text-[#14211A] block">
                      {item.author}
                    </strong>
                    <span className="text-[11px] text-[#65736A] block leading-tight mt-0.5">
                      {item.role}
                    </span>
                  </div>
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-11 w-11 rounded-full object-cover border border-[#E5DDD2] shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. KNOWLEDGE & RESOURCES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF8]" id="resources">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-7">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846] block mb-2">
              KNOWLEDGE THAT BUILDS BETTER
            </span>
            {/* Title and Action Link in ONE horizontal flex line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl text-[#14211A] leading-tight">
                Industry Insights{" "}
                <span className="text-[#C86D51] font-normal italic">
                  &amp; Buying Guides
                </span>
              </h2>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#14211A] hover:text-[#C86D51] transition shrink-0"
              >
                Explore all articles <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* Supporting text directly UNDER title */}
            <p className="text-xs sm:text-sm text-[#65736A] mt-2.5 max-w-xl font-medium leading-relaxed">
              Expert tips, product knowledge, and inspiration to help you make the right choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDES_DATA.map((guide, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-[#E5DDD2] bg-[#FAF8F5] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-white border-b border-[#E5DDD2]">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#14211A] px-3 py-1 rounded-full shadow-2xs flex items-center gap-1.5 border border-[#CAD4CC]/40">
                      <Clock className="h-3.5 w-3.5 text-[#9C6846]" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9C6846] block mb-2">
                      {guide.tag}
                    </span>
                    <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl text-[#14211A] leading-snug group-hover:text-[#C86D51] transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-[#65736A] leading-relaxed font-medium">
                      {guide.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-[#E5DDD2]/70 flex items-center gap-1 text-xs font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors">
                    <span>Read more</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
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
