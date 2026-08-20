import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Droplet,
  ArrowRight,
  Shield,
  Layers,
  Award,
  Building2,
  Users,
  X,
  Search,
  CheckCircle2,
  Bug,
  Droplets,
  Sparkles,
} from "lucide-react";

// Registered Brand Images
import safariLogo from "../../assets/Brand/Registered-Brands/safari.jpeg";
import pentagonLogo from "../../assets/Brand/Registered-Brands/pentagon-gold.jpeg";
import escotelLogo from "../../assets/Brand/Registered-Brands/ESCOTAL.jpeg";
import kalingaLogo from "../../assets/Brand/Registered-Brands/kalinga-gold.jpeg";
import hitLogo from "../../assets/Brand/Registered-Brands/HIT.jpeg";
import essarLogo from "../../assets/Brand/Registered-Brands/essar.jpeg";
import supreemoLogo from "../../assets/Brand/Registered-Brands/supreemo-plus.jpeg";
import woodivaLogo from "../../assets/Brand/Registered-Brands/woodiva.jpeg";
import royalGoldLogo from "../../assets/Brand/Registered-Brands/RoyalGold.jpeg";
import osceenLogo from "../../assets/Brand/Registered-Brands/OSCEEN.jpeg";
import osteenLogo from "../../assets/Brand/Registered-Brands/Osteen.jpeg";
import beanPlyLogo from "../../assets/Brand/Registered-Brands/BeanPly.jpeg";
import abroadPlyLogo from "../../assets/Brand/Registered-Brands/abroad-ply.jpeg";
import assamExcelLogo from "../../assets/Brand/Registered-Brands/assam-excel.jpeg";
import maturewoodLogo from "../../assets/Brand/Registered-Brands/maturewood.jpeg";
import paramountLogo from "../../assets/Brand/Registered-Brands/paramount-gold.jpeg";
import patchplyLogo from "../../assets/Brand/Registered-Brands/patchply.jpeg";
import plygenixLogo from "../../assets/Brand/Registered-Brands/plygenix.jpeg";

// Highlight Banner Wide Image
import escotelBanner from "../../assets/Brand/escotel_banner.jpg";

const BRANDS_PORTFOLIO = [
  {
    id: "safari",
    name: "SAFARI",
    displayName: "Safari Plywood",
    badge: "POPULAR CHOICE",
    isFlagship: false,
    logo: safariLogo,
    heroTitle: "Safari Commercial & MR Plywood",
    heroDesc:
      "Crafted for general interior woodworks, cabinetry, and domestic furniture demanding high screw-holding power and smooth surface calibration.",
    ctaText: "EXPLORE SAFARI RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "MR Grade", desc: "IS 303 Commercial Standard", icon: ShieldCheck },
      { label: "Calibrated", desc: "Even Core Thickness", icon: Layers },
      { label: "Termite Safe", desc: "Preservative Glue Line", icon: Shield },
      { label: "High Hold", desc: "Superior Screw Grip", icon: Award },
    ],
  },
  {
    id: "pentagon",
    name: "PENTAGON",
    displayName: "Pentagon Plywood",
    badge: "SIGNATURE BRAND",
    isFlagship: false,
    logo: pentagonLogo,
    heroTitle: "Pentagon Gold BWR Plywood",
    heroDesc:
      "Our signature namesake brand delivering premium moisture resistance, balanced structural core, and exceptional strength for residential joinery.",
    ctaText: "EXPLORE PENTAGON RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "BWR Grade", desc: "Moisture & Weather Resistant", icon: Droplets },
      { label: "Quad Press", desc: "Maximum Bond Strength", icon: Layers },
      { label: "Borer Safe", desc: "Chemical Treated Timber", icon: Shield },
      { label: "20+ Years", desc: "Proven Field Performance", icon: Award },
    ],
  },
  {
    id: "escotel",
    name: "ESCOTEL MARINE",
    displayName: "Escotel Marine Plywood",
    badge: "FLAGSHIP PRODUCT",
    isFlagship: true,
    logo: escotelLogo,
    heroTitle: "Escotel Marine Plywood",
    heroDesc:
      "Engineered for superior performance in the most demanding environments. Escotel Marine is our flagship BWP marine-grade plywood, built with advanced anti-borer and boil-proof technology for lifetime reliability.",
    ctaText: "EXPLORE ESCOTEL RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "BWP Grade", desc: "IS 710 Marine Certified", icon: ShieldCheck },
      { label: "72 Hours", desc: "Boil Test Verified", icon: Clock },
      { label: "Lifetime", desc: "Anti-Borer Treated", icon: Bug },
      { label: "Zero", desc: "Warping & Delamination Guarantee", icon: Droplet },
    ],
  },
  {
    id: "kalinga",
    name: "KALINGA",
    displayName: "Kalinga Plywood",
    badge: "PREMIUM RANGE",
    isFlagship: false,
    logo: kalingaLogo,
    heroTitle: "Kalinga Gold Plywood",
    heroDesc:
      "Specially formulated high-density hardwood plywood designed for corporate offices, retail fit-outs, and heavy-duty interior furniture.",
    ctaText: "EXPLORE KALINGA RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "Heavy Duty", desc: "Hardwood Veneer Core", icon: Layers },
      { label: "Zero Gap", desc: "Composed Inner Layers", icon: ShieldCheck },
      { label: "Warp Free", desc: "Dimensional Stability", icon: CheckCircle2 },
      { label: "Smooth Finish", desc: "Sanded Both Surfaces", icon: Award },
    ],
  },
  {
    id: "hit",
    name: "HIT",
    displayName: "HIT Ply Board Door",
    badge: "VALUE SELECTION",
    isFlagship: false,
    logo: hitLogo,
    heroTitle: "HIT Ply & Board Range",
    heroDesc:
      "Dependable economy-grade plywood and blockboards tailored for trade contractors and budget-conscious interior renovations.",
    ctaText: "EXPLORE HIT RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "IS 303", desc: "Interior Grade Certified", icon: ShieldCheck },
      { label: "Cost-Effective", desc: "Maximum Value for Money", icon: Award },
      { label: "Termite Resistant", desc: "Glue-Line Protection", icon: Shield },
      { label: "Multi-Use", desc: "Ideal for Furniture & Panels", icon: Layers },
    ],
  },
  {
    id: "essar",
    name: "ESSAR",
    displayName: "Essar Ply Board Door",
    badge: "COMMERCIAL GRADE",
    isFlagship: false,
    logo: essarLogo,
    heroTitle: "Essar Ply, Board & Door",
    heroDesc:
      "Versatile panel range engineered for doors, wall panelling, and partitions in commercial buildings and residential projects.",
    ctaText: "EXPLORE ESSAR RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "High Strength", desc: "Solid Core Structure", icon: Layers },
      { label: "Moisture Resistant", desc: "BWR Phenolic Bond", icon: Droplets },
      { label: "Precision Trim", desc: "Square Edge Finish", icon: CheckCircle2 },
      { label: "IS Certified", desc: "Quality Assured Batches", icon: ShieldCheck },
    ],
  },
  {
    id: "supreemo",
    name: "SUPREEMO PLUS",
    displayName: "Supreemo Plus",
    badge: "HEAVY DUTY",
    isFlagship: false,
    logo: supreemoLogo,
    heroTitle: "Supreemo Plus Blockboard",
    heroDesc:
      "Selected pine and hardwood blockboards featuring zero-gap core construction for load-bearing shelves, tables, and flush doors.",
    ctaText: "EXPLORE SUPREEMO RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "Pine Core", desc: "Seasoned Timber Batten", icon: Layers },
      { label: "Zero Bending", desc: "High Bending Resistance", icon: CheckCircle2 },
      { label: "Heavy Load", desc: "Structural Load Strength", icon: Award },
      { label: "IS 1659", desc: "Blockboard Compliance", icon: ShieldCheck },
    ],
  },
  {
    id: "woodiva",
    name: "WOODIVA",
    displayName: "Woodiva Plywood",
    badge: "INTERIOR SPECIAL",
    isFlagship: false,
    logo: woodivaLogo,
    heroTitle: "Woodiva Designer Plywood",
    heroDesc:
      "Ultra-smooth surface calibrated plywood created for veneer pressing, lamination, and aesthetic interior architectural panels.",
    ctaText: "EXPLORE WOODIVA RANGE",
    heroImage: escotelBanner,
    features: [
      { label: "Micro Sanded", desc: "Ultra Smooth Face Veneer", icon: Award },
      { label: "Laminate Base", desc: "Perfect Bond Surface", icon: Layers },
      { label: "Eco-Treated", desc: "Low Emission Resin", icon: Shield },
      { label: "Borer Resistant", desc: "Infused Protection", icon: ShieldCheck },
    ],
  },
];

const ALL_REGISTERED_BRANDS = [
  ...BRANDS_PORTFOLIO,
  { id: "royalgold", name: "ROYAL GOLD", displayName: "Royal Gold Plywood", logo: royalGoldLogo, tag: "Premium BWR" },
  { id: "osceen", name: "OSCEEN", displayName: "Osceen Plywood", logo: osceenLogo, tag: "Commercial MR" },
  { id: "osteen", name: "OSTEEN", displayName: "Osteen Plywood", logo: osteenLogo, tag: "Interior Grade" },
  { id: "beanply", name: "BEAN PLY", displayName: "Bean Ply", logo: beanPlyLogo, tag: "Economy Range" },
  { id: "abroad", name: "ABROAD PLY", displayName: "Abroad Ply", logo: abroadPlyLogo, tag: "Imported Calibrated" },
  { id: "assam", name: "ASSAM EXCEL", displayName: "Assam Excel", logo: assamExcelLogo, tag: "Hardwood Core" },
  { id: "maturewood", name: "MATURE WOOD", displayName: "Mature Wood", logo: maturewoodLogo, tag: "Seasoned Timber" },
  { id: "paramount", name: "PARAMOUNT GOLD", displayName: "Paramount Gold", logo: paramountLogo, tag: "BWR Grade" },
  { id: "patchply", name: "PATCH PLY", displayName: "Patch Ply", logo: patchplyLogo, tag: "Utility Grade" },
  { id: "plygenix", name: "PLYGENIX", displayName: "Plygenix", logo: plygenixLogo, tag: "Next-Gen Panel" },
];

export default function BrandSection() {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(2); // Escotel Marine by default
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sliderRef = useRef(null);
  const bannerRef = useRef(null);

  const activeBrand = BRANDS_PORTFOLIO[selectedBrandIndex];

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused || isModalOpen) return;

    const timer = setInterval(() => {
      setSelectedBrandIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % BRANDS_PORTFOLIO.length;
        if (sliderRef.current) {
          const cardWidth = 190;
          sliderRef.current.scrollTo({
            left: nextIndex * cardWidth - cardWidth,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, isModalOpen]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleHoverBrand = (index) => {
    setSelectedBrandIndex(index);
    setIsPaused(true);
  };

  const handleClickBrand = (index) => {
    setSelectedBrandIndex(index);
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const filteredAllBrands = ALL_REGISTERED_BRANDS.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="py-14 sm:py-16 lg:py-18 bg-[#FCFDFC] border-t border-b border-[#E2E8E4]"
      id="brands"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-7 sm:space-y-8">
        
        {/* Centered Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8E510D] block">
            OUR BRAND PORTFOLIO
          </span>
          <h2 className="font-display text-[38px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal leading-[1.12] tracking-[-1px]">
            Our Brands &amp;{" "}
            <span className="home-heading-accent font-normal not-italic">
              Trademarks.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64756D] leading-relaxed max-w-l mx-auto font-medium">
            Over the years, the Pentagon Group has developed and registered a portfolio of brands associated with its wood-products business.These names reflect the group's long-standing presence in timber, veneer and panel manufacturing.
          </p>
        </div>

        {/* Centered Icon Points Row below intro section */}
        {/* <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-1 border-t border-[#E6ECE8]/60 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#14261F] border border-[#D9E3DE] shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-[#14261F]" />
            </div>
            <div className="text-left">
              <strong className="text-sm sm:text-base font-bold text-[#14261F] block leading-tight">
                15+
              </strong>
              <span className="text-[11px] text-[#5C7268] font-medium block leading-tight">
                Registered Brands
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#14261F] border border-[#D9E3DE] shadow-2xs">
              <Award className="h-4 w-4 text-[#14261F]" />
            </div>
            <div className="text-left">
              <strong className="text-sm sm:text-base font-bold text-[#14261F] block leading-tight">
                40+
              </strong>
              <span className="text-[11px] text-[#5C7268] font-medium block leading-tight">
                Years of Trust
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#14261F] border border-[#D9E3DE] shadow-2xs">
              <Building2 className="h-4 w-4 text-[#14261F]" />
            </div>
            <div className="text-left">
              <strong className="text-sm sm:text-base font-bold text-[#14261F] block leading-tight">
                Pan India
              </strong>
              <span className="text-[11px] text-[#5C7268] font-medium block leading-tight">
                Presence
              </span>
            </div>
          </div>
        </div> */}

        {/* Slider & Controls Area */}
        <div
          className="relative pt-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Nav Arrow Left */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous Brand"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-[#1C332A] text-white shadow-lg hover:bg-[#11241C] transition-all cursor-pointer border border-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Nav Arrow Right */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next Brand"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-[#1C332A] text-white shadow-lg hover:bg-[#11241C] transition-all cursor-pointer border border-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-6 px-3 no-scrollbar select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BRANDS_PORTFOLIO.map((brand, idx) => {
              const isActive = selectedBrandIndex === idx;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => handleHoverBrand(idx)}
                  onClick={() => handleClickBrand(idx)}
                  className={`relative rounded-2xl p-4 min-w-[170px] sm:min-w-[185px] max-w-[190px] h-[165px] sm:h-[175px] flex flex-col items-center justify-between transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-2 border-[#8E510D] shadow-xl -translate-y-1.5 ring-4 ring-[#8E510D]/10"
                      : "bg-white border border-[#E2E9E4] hover:border-[#8E510D]/60 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  {/* Active / Flagship Badge */}
                  {isActive ? (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#14261F] text-white text-[9px] font-extrabold uppercase tracking-wider border border-[#8E510D] shadow-sm flex items-center gap-1 whitespace-nowrap">
                        <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        {brand.badge}
                      </span>
                    </div>
                  ) : brand.isFlagship ? (
                    <div className="absolute top-2 right-2">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    </div>
                  ) : null}

                  {/* Logo Image */}
                  <div className="h-20 sm:h-24 w-full flex items-center justify-center pt-2">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title Text below logo */}
                  <div className="w-full text-center border-t border-[#F0F4F2] pt-2">
                    <span className="text-[11px] font-extrabold tracking-widest text-[#14261F] uppercase block truncate">
                      {brand.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots & View All Link */}
          <div className="flex flex-col items-center gap-3 mt-2">
            <div className="flex items-center justify-center gap-2">
              {BRANDS_PORTFOLIO.map((_, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => handleHoverBrand(idx)}
                  onClick={() => handleClickBrand(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    selectedBrandIndex === idx
                      ? "w-6 bg-[#14261F]"
                      : "w-2.5 bg-[#D5E0DA] hover:bg-[#A6B8AE]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14261F] hover:text-[#8E510D] transition-colors cursor-pointer pt-1"
            >
              <span>View all brands</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Highlight Showcase Banner */}
        <div
          ref={bannerRef}
          className="rounded-[28px] overflow-hidden relative shadow-lg border border-[#D5E0DA] bg-gradient-to-r from-[#DEE7E2] via-[#E4ECE7] to-[#E8F0EB] p-7 sm:p-10 lg:p-12"
        >
          {/* Background Image of Plywood Stack on Right */}
          <img
            src={activeBrand.heroImage}
            alt={activeBrand.heroTitle}
            className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] h-full object-cover object-right pointer-events-none opacity-85 lg:opacity-100 mix-blend-multiply"
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#DEE7E2] via-[#DEE7E2]/95 sm:via-[#DEE7E2]/85 to-transparent pointer-events-none z-[1]" />

          {/* Left Content Area */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14261F] text-white text-[10px] font-extrabold uppercase tracking-widest border border-[#8E510D]/40 shadow-xs">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{activeBrand.badge}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14261F] leading-tight">
                {activeBrand.heroTitle}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#384E44] leading-relaxed max-w-xl font-medium">
                {activeBrand.heroDesc}
              </p>

              {/* CTA Button */}
              {/* <div className="pt-1">
                <a
                  href="#enquiry"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#14261F] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#0A1813] transition-all cursor-pointer"
                >
                  <span>{activeBrand.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div> */}

              {/* 4 Feature Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#C5D5CC]/60">
                {activeBrand.features.map((feat, idx) => {
                  const FeatIcon = feat.icon || ShieldCheck;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/80 border border-[#CBD9D0] text-[#14261F] shadow-2xs mb-2">
                        <FeatIcon className="h-4 w-4" />
                      </div>
                      <strong className="text-xs sm:text-sm font-bold text-[#14261F] block leading-tight">
                        {feat.label}
                      </strong>
                      <span className="text-[11px] text-[#4E6359] block leading-tight font-medium">
                        {feat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* View All Brands Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-[#D5E0DA]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#E2E9E4] flex items-center justify-between gap-4 bg-[#F8FAF9]">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#14261F]">
                  All Registered Brands &amp; Trademarks
                </h3>
                <p className="text-xs text-[#5C7268] mt-0.5 font-medium">
                  Complete brand portfolio by Pentagon Group Yamunanagar
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white border border-[#D5E0DA] text-[#14261F] hover:bg-[#F0F4F2] transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-[#E2E9E4] bg-white">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#738A7F]" />
                <input
                  type="text"
                  placeholder="Search brand name or grade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD9D0] bg-[#F8FAF9] text-xs font-medium text-[#14261F] focus:outline-none focus:border-[#14261F] transition"
                />
              </div>
            </div>

            {/* Brands Grid */}
            <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-[#F8FAF9]">
              {filteredAllBrands.map((b) => (
                <div
                  key={b.id}
                  onMouseEnter={() => {
                    const foundIndex = BRANDS_PORTFOLIO.findIndex((item) => item.id === b.id);
                    if (foundIndex !== -1) {
                      setSelectedBrandIndex(foundIndex);
                    }
                  }}
                  onClick={() => {
                    const foundIndex = BRANDS_PORTFOLIO.findIndex((item) => item.id === b.id);
                    if (foundIndex !== -1) {
                      setSelectedBrandIndex(foundIndex);
                    }
                    setIsModalOpen(false);
                  }}
                  className="p-4 rounded-2xl bg-white border border-[#E2E9E4] hover:border-[#8E510D] hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center justify-between h-[150px]"
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img src={b.logo} alt={b.name} className="max-h-full max-w-[120px] object-contain" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-[#14261F] block uppercase truncate">
                      {b.name}
                    </strong>
                    {b.tag && (
                      <span className="text-[10px] text-[#5C7268] block mt-0.5 font-medium">
                        {b.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E2E9E4] bg-white flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 rounded-full bg-[#14261F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0A1813] transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
