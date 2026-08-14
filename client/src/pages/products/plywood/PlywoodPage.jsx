/* Pentagon Plywood - Plywood Product Overview Page */

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Factory,
  FileText,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  MessageSquare,
  Minus,
  PhoneCall,
  Plus,
  Ruler,
  ShieldCheck,
  Sparkles,
  TreePine,
  Truck,
  Wrench,
  Boxes,
  ExternalLink,
  Award,
  Droplets,
} from "lucide-react";
import {
  ROUTES,
  PRODUCT_ROUTES,
  APPLICATION_SECTIONS,
  HOME_SECTIONS,
} from "@/app/routes.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
import "./plywood-page.css";

// Assets
import HeroBgImage from "@/assets/product/plywood-hero-bg.jpg";
import MRPlywood from "@/assets/product/mr plywood/mr-grade-plywood-1671449588-6629452.webp";
import BedroomApplication from "@/assets/product/mr plywood/Cozy minimalist bedroom with natural light.png";
import MREdge from "@/assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import MRSurface from "@/assets/product/mr plywood/Wood_panel_surface_texture_202607231226.jpeg";

import MarinePlywood from "@/assets/homepage/products/Marine-plywood-1000x1000.webp";
import MarineApplication from "@/assets/product/marine plywood/marine-plywood-kitchen.png";
import MarineEdge from "@/assets/product/marine plywood/marine-plywood-layered-board.png";
import MarineSurface from "@/assets/product/marine plywood/marine-plywood-wood-grain.png";

import WardrobeApplication from "@/assets/product/Applications/Modern wardrobe with sliding doors.png";
import KitchenApplication from "@/assets/product/Applications/Modern kitchen with cabinets and island.png";
import LivingRoomApplication from "@/assets/product/Applications/Contemporary living room with furniture.png";
import OfficeApplication from "@/assets/product/Applications/Modern office with desks and partitions.png";
import RetailApplication from "@/assets/product/Applications/Retail store interior with shelves and displays.png";
import BathroomApplication from "@/assets/product/Applications/Modern bathroom with vanity and mirror.png";

/* ============ BREADCRUMB ============ */
const Breadcrumb = () => (
  <nav className="ply-breadcrumb" aria-label="Breadcrumb">
    <div className="ply-container flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-brand-muted py-3 sm:py-3.5 border-b border-brand-border/40 overflow-x-auto">
      <a href={ROUTES.home} className="hover:text-brand-accent transition-colors shrink-0">
        Home
      </a>
      <span className="opacity-40 shrink-0">›</span>
      <a href={ROUTES.products} className="hover:text-brand-accent transition-colors shrink-0">
        Products
      </a>
      <span className="opacity-40 shrink-0">›</span>
      <span className="text-brand-charcoal font-semibold shrink-0">Plywood</span>
    </div>
  </nav>
);

/* ============ HERO SECTION ============ */
const PlyHero = () => (
  <section className="ply-hero relative py-6 sm:py-10 lg:py-12 bg-brand-cream text-brand-charcoal overflow-hidden border-b border-brand-border/50">
    {/* Full-bleed Hero Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${HeroBgImage})` }}
    />
    {/* Soft Fade Overlay for Legibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 pointer-events-none lg:to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none md:hidden" />

    <div className="ply-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full pt-2 sm:pt-4 pb-4">
      <div className="lg:col-span-9 xl:col-span-8 space-y-4 sm:space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-[#8E510D] font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-honey-dark shrink-0" />
          Pentagon Plywood Range
        </div>

        {/* H1 strictly 2 lines on all screens: Line 1 = "The Right Plywood Starts With", Line 2 = "Where You’ll Use It." */}
        <h1 className="font-display text-[22px] xs:text-[27px] sm:text-[38px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.08] sm:leading-[1.02] tracking-[-0.02em] text-brand-charcoal">
          <span className="block whitespace-nowrap">The Right Plywood Starts With</span>
          <span className="home-heading-accent block whitespace-nowrap mt-0.5 sm:mt-1.5">
            Where You’ll Use It.
          </span>
        </h1>

        <p className="text-brand-muted text-xs sm:text-base leading-[1.65] max-w-2xl font-medium">
          A wardrobe, kitchen cabinet, office workstation and fire-conscious commercial interior do not all ask the same thing from the plywood behind them. Pentagon offers plywood options for different furniture, interior and project requirements from everyday dry interiors to moisture-prone spaces, demanding high-moisture conditions and fire-retardant specifications.
        </p>

        <div className="p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-xs border border-brand-border/60 text-xs sm:text-sm font-semibold text-brand-charcoal">
          Start with <strong className="text-brand-forest">what you are building, where it will be installed and the conditions it will face</strong>. Then choose the appropriate grade, thickness and sheet size.
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <a
            href="#range"
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full bg-brand-forest px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-accent transition-all cursor-pointer text-center"
          >
            Explore Plywood Range <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#enquiry"
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full border border-brand-accent/40 bg-white/90 backdrop-blur-sm px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-brand-honey-dark hover:bg-brand-soft-brown hover:border-brand-accent transition-all shadow-xs text-center"
          >
            Discuss Requirement <ArrowRight className="h-4 w-4 text-brand-charcoal" />
          </a>
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-3 xl:col-span-4" />
    </div>

    {/* Quick Range Info Bar immediately following Hero content */}
    <div className="ply-container relative z-10 w-full mt-4 sm:mt-6">
      <div className="rounded-2xl border border-brand-cool-border bg-white/95 backdrop-blur-md shadow-xl p-4 sm:p-6">
        <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-honey-dark mb-3">
          Quick Range Information
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y-0 text-left">
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Grades</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">MR, BWP, Marine &amp; Fire Retardant</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Thicknesses</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">4 mm to 18 mm</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Sheet Sizes</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">Multiple Formats</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Applications</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">Furniture, Kitchens &amp; Projects</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Manufactured In</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">Yamunanagar, HR</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40 col-span-2 sm:col-span-1">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">Supply</span>
            <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">Individual, Dealer &amp; Bulk</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ WHAT IS PLYWOOD? ============ */
const WhatIsPlywood = () => (
  <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
    <div className="ply-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            WHAT IS PLYWOOD?
          </div>
          <h2 className="font-display text-[28px] sm:text-[40px] lg:text-[46px] font-bold leading-tight text-brand-charcoal">
            Layers Working Together to{" "}
            <em className="home-heading-accent font-normal not-italic block mt-1">
              Build a Stronger Panel.
            </em>
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Plywood is an engineered wood panel made by bonding multiple layers of wood veneer together to form a finished sheet. The arrangement of these layers creates a practical material that can be cut, drilled, fixed and finished for a wide variety of furniture and interior applications.
          </p>
          <p className="text-brand-slate text-xs sm:text-sm leading-relaxed">
            But not every plywood sheet is designed for the same environment. Its <strong>grade, construction, bonding, thickness and intended application</strong> all influence where the plywood should be used.
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border/60">
            <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">
              💡 That is why choosing plywood should begin with the <strong>finished application</strong>, not simply sheet thickness or price.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-brand-charcoal">Cross-Banded Core</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Veneer grain is rotated 90 degrees per layer, minimizing warping and improving dimensional stability.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-brand-charcoal">Grade &amp; Resin Bonding</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Urea or Phenolic resins determine moisture resistance from indoor dry furniture to boiling waterproof panels.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
              <Ruler className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-brand-charcoal">Calibrated Thickness</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Uniform board thickness from 4 mm to 18 mm ensures accurate joinery and screw-holding capability.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-brand-charcoal">Surface Preparation</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Sanded face veneers ready for decorative laminates, wood veneers, lacquer, polish, or edge banding.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============ EXPLORE THE PENTAGON PLYWOOD RANGE ============ */
const PlyRange = () => {
  const grades = [
    {
      id: "mr-grade",
      tag: "Interior Plywood",
      code: "MR Grade Plywood",
      title: "Dependable Plywood for Everyday Interior Work.",
      desc: "MR stands for Moisture Resistant. It is a practical plywood option for furniture and interior applications in relatively dry spaces where the board may experience normal indoor humidity but not frequent water contact.",
      apps: [
        "Wardrobes",
        "Beds and tables",
        "TV units",
        "Bookshelves",
        "Office furniture",
        "Interior partitions",
        "Wall panelling",
        "General home furniture",
      ],
      bestWhen: "The furniture will remain inside a relatively dry residential or commercial environment.",
      ctaText: "Explore MR Grade Plywood",
      link: ROUTES.mrGradePlywood,
      image: MRPlywood,
      flagship: false,
    },
    {
      id: "bwp-grade",
      tag: "Water-Resistant Plywood",
      code: "BWP Grade Plywood",
      title: "Made for Interiors Where Moisture Needs Greater Attention.",
      desc: "BWP stands for Boiling Water Proof. It provides a higher level of water resistance than MR Grade and can be considered for furniture installed in kitchens, utility areas, humid interiors and other locations where moisture exposure is a greater concern.",
      apps: [
        "Kitchen cabinets",
        "Base and overhead kitchen units",
        "Utility furniture",
        "Storage cabinets",
        "Wardrobes in humid interiors",
        "Commercial furniture",
        "Moisture-conscious interior applications",
      ],
      bestWhen: "Humidity, occasional spills or moisture are more likely than in an ordinary dry interior.",
      ctaText: "Explore BWP Grade Plywood",
      link: ROUTES.bwpGradePlywood,
      image: KitchenApplication,
      flagship: false,
    },
    {
      id: "marine",
      tag: "High-Moisture Plywood",
      code: "Marine Grade Plywood",
      title: "Made for More Demanding Moisture Conditions.",
      desc: "Marine Plywood is intended for applications where moisture, humidity and changing wet-and-dry conditions place greater demands on the plywood. It can be considered when the project requires performance beyond ordinary interior or general moisture-conscious furniture applications.",
      apps: [
        "Demanding kitchen furniture",
        "Under-sink units",
        "Utility areas",
        "High-humidity interiors",
        "Coastal-region interiors",
        "Commercial furniture",
        "Selected specialised applications",
        "Projects facing repeated moisture exposure",
      ],
      bestWhen: "The plywood will face more demanding or repeated moisture conditions.",
      ctaText: "Explore Marine Plywood",
      link: PRODUCT_ROUTES.marineGradePlywood,
      image: MarinePlywood,
      flagship: true,
    },
    {
      id: "fire-retardant",
      tag: "Special Performance Plywood",
      code: "Fire Retardant Plywood",
      title: "Additional Fire-Retardant Performance for Specified Interiors.",
      desc: "Fire Retardant Plywood is intended for applications where the plywood specification includes improved behaviour when exposed to fire. It is treated specifically for fire-retardant performance and should not be confused with a fireproof material.",
      apps: [
        "Interior wall panelling",
        "Commercial interiors",
        "Office interiors",
        "Retail spaces",
        "Hospitality interiors",
        "Furniture and cabinetry",
        "Interior partitions",
        "Project-specified applications",
      ],
      bestWhen: "The architect, consultant or project requirement specifies additional fire-retardant performance.",
      ctaText: "Explore Fire Retardant Plywood",
      link: PRODUCT_ROUTES.fireRetardantPlywood,
      image: MREdge,
      flagship: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt" id="range">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            CHOOSE PLYWOOD BY APPLICATION
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            Explore the Pentagon{" "}
            <em className="home-heading-accent font-normal not-italic">
              Plywood Range.
            </em>
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Four Plywood Options. Different Performance Requirements. Not every project needs the same grade select the board engineered for the space it will inhabit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {grades.map((g) => (
            <div
              key={g.id}
              className={`group flex flex-col justify-between rounded-2xl sm:rounded-3xl border bg-white shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden ${
                g.flagship ? "border-brand-accent/60 ring-1 ring-brand-accent/30" : "border-brand-border hover:border-brand-accent/50"
              }`}
            >
              <div>
                <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-brand-charcoal">
                  <img
                    src={g.image}
                    alt={g.code}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#143D2B] text-white text-[9px] sm:text-[10px] font-extrabold tracking-widest px-2.5 sm:px-3 py-1 rounded-full uppercase border border-[#29483A]">
                    {g.tag}
                  </span>
                  {g.flagship && (
                    <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-brand-accent text-white text-[9px] sm:text-[10px] font-extrabold tracking-widest px-2.5 sm:px-3 py-1 rounded-full uppercase shadow-md">
                      Flagship Grade
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-8 space-y-3.5 sm:space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#8E510D] uppercase block">
                      {g.code}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal">
                      {g.title}
                    </h3>
                  </div>

                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                    {g.desc}
                  </p>

                  <div className="pt-3.5 border-t border-brand-border/60 space-y-2.5">
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-charcoal">
                      Common Applications:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {g.apps.slice(0, 6).map((app, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-brand-slate font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-brand-cream-alt border border-brand-border/40 text-xs text-brand-charcoal">
                    <strong className="text-brand-forest block sm:inline">Best starting point when:</strong> {g.bestWhen}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0">
                <a
                  href={g.link}
                  className="inline-flex w-full items-center justify-center gap-2 h-11 rounded-xl bg-brand-forest text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors shadow-xs"
                >
                  <span>{g.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ COMPARE THE PLYWOOD RANGE ============ */
const CompareRange = () => {
  const [activeMobileGrade, setActiveMobileGrade] = useState("mr");

  const mobileGradeDetails = {
    mr: {
      name: "MR Grade Plywood",
      purpose: "Everyday interior furniture",
      env: "Relatively dry interiors",
      moisture: "Normal interior moisture",
      apps: "Wardrobes, beds, desks, shelves",
      question: "Is the space relatively dry?",
      link: ROUTES.mrGradePlywood,
    },
    bwp: {
      name: "BWP Grade Plywood",
      purpose: "Moisture-conscious interiors",
      env: "Kitchens and humid interiors",
      moisture: "Higher water resistance",
      apps: "Kitchens, utility furniture, humid-area cabinetry",
      question: "Will moisture be a regular concern?",
      link: ROUTES.bwpGradePlywood,
    },
    marine: {
      name: "Marine Grade Plywood",
      purpose: "More demanding moisture conditions",
      env: "High-moisture / demanding conditions",
      moisture: "Designed for demanding moisture exposure",
      apps: "Demanding kitchens, high-humidity and selected specialized uses",
      question: "Will conditions be particularly demanding?",
      link: PRODUCT_ROUTES.marineGradePlywood,
    },
    fr: {
      name: "Fire Retardant Plywood",
      purpose: "Additional fire-retardant performance",
      env: "Project-specified interiors",
      moisture: "Depends on underlying specification",
      apps: "Panelling, partitions and specified furniture",
      question: "Does the project require fire-retardant plywood?",
      link: PRODUCT_ROUTES.fireRetardantPlywood,
    },
  };

  const tableData = [
    {
      feature: "Primary purpose",
      mr: "Everyday interior furniture",
      bwp: "Moisture-conscious interiors",
      marine: "More demanding moisture conditions",
      fr: "Additional fire-retardant performance",
    },
    {
      feature: "Typical environment",
      mr: "Relatively dry interiors",
      bwp: "Kitchens and humid interiors",
      marine: "High-moisture / demanding conditions",
      fr: "Project-specified interiors",
    },
    {
      feature: "Moisture resistance",
      mr: "Normal interior moisture",
      bwp: "Higher water resistance",
      marine: "Designed for demanding moisture exposure",
      fr: "Depends on underlying specification",
    },
    {
      feature: "Common starting applications",
      mr: "Wardrobes, beds, desks, shelves",
      bwp: "Kitchens, utility furniture, humid-area cabinetry",
      marine: "Demanding kitchens, high-humidity & specialised uses",
      fr: "Panelling, partitions and specified furniture",
    },
    {
      feature: "Main selection question",
      mr: "Is the space relatively dry?",
      bwp: "Will moisture be a regular concern?",
      marine: "Will conditions be particularly demanding?",
      fr: "Does the project require fire-retardant plywood?",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border" id="compare">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            SIDE-BY-SIDE EVALUATION
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            Compare the{" "}
            <em className="home-heading-accent font-normal not-italic">
              Plywood Range.
            </em>
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Start with the condition around the finished furniture. Compare how Pentagon MR Grade, BWP Grade, Marine Plywood, and Fire Retardant Plywood map to your project.
          </p>
        </div>

        {/* Mobile Tab Switcher (< md) */}
        <div className="md:hidden space-y-4">
          <div className="flex rounded-xl bg-brand-cream-alt p-1 border border-brand-border overflow-x-auto text-xs font-bold">
            <button
              onClick={() => setActiveMobileGrade("mr")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "mr" ? "bg-brand-forest text-white shadow-xs" : "text-brand-slate"}`}
            >
              MR
            </button>
            <button
              onClick={() => setActiveMobileGrade("bwp")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "bwp" ? "bg-brand-forest text-white shadow-xs" : "text-brand-slate"}`}
            >
              BWP
            </button>
            <button
              onClick={() => setActiveMobileGrade("marine")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "marine" ? "bg-brand-accent text-white shadow-xs" : "text-brand-slate"}`}
            >
              Marine
            </button>
            <button
              onClick={() => setActiveMobileGrade("fr")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "fr" ? "bg-brand-forest text-white shadow-xs" : "text-brand-slate"}`}
            >
              FR
            </button>
          </div>

          {/* Active Grade Mobile Card */}
          {(() => {
            const activeData = mobileGradeDetails[activeMobileGrade];
            return (
              <div className="p-5 rounded-2xl bg-white border border-brand-border space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <strong className="font-display text-xl text-brand-charcoal">{activeData.name}</strong>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-brand-cream-alt text-brand-forest border border-brand-border">
                    Grade Specification
                  </span>
                </div>
                <div className="space-y-2 text-xs divide-y divide-brand-border/40">
                  <div className="pt-1 flex justify-between gap-2">
                    <span className="text-brand-muted uppercase font-bold">Primary Purpose:</span>
                    <span className="text-brand-charcoal font-medium text-right">{activeData.purpose}</span>
                  </div>
                  <div className="pt-2 flex justify-between gap-2">
                    <span className="text-brand-muted uppercase font-bold">Environment:</span>
                    <span className="text-brand-charcoal font-medium text-right">{activeData.env}</span>
                  </div>
                  <div className="pt-2 flex justify-between gap-2">
                    <span className="text-brand-muted uppercase font-bold">Moisture Resistance:</span>
                    <span className="text-brand-charcoal font-medium text-right">{activeData.moisture}</span>
                  </div>
                  <div className="pt-2 flex justify-between gap-2">
                    <span className="text-brand-muted uppercase font-bold">Common Uses:</span>
                    <span className="text-brand-charcoal font-medium text-right">{activeData.apps}</span>
                  </div>
                  <div className="pt-2 flex justify-between gap-2">
                    <span className="text-brand-muted uppercase font-bold">Key Question:</span>
                    <span className="text-brand-forest font-bold text-right">{activeData.question}</span>
                  </div>
                </div>
                <a
                  href={activeData.link}
                  className="inline-flex w-full items-center justify-center gap-2 h-10 rounded-xl bg-brand-forest text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors pt-1"
                >
                  <span>Explore {activeData.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })()}
        </div>

        {/* Desktop / Tablet Full Table (md+) */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-md">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-brand-forest text-white">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/5 border-r border-brand-forest-dark">Comparison</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/5 border-r border-brand-forest-dark">MR Grade</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/5 border-r border-brand-forest-dark">BWP Grade</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/5 border-r border-brand-forest-dark bg-brand-accent text-white">Marine Grade</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/5">Fire Retardant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/60 text-xs sm:text-sm">
              {tableData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-brand-cream-alt/40"}>
                  <td className="p-4 sm:p-5 font-bold text-brand-charcoal border-r border-brand-border/60 bg-brand-cream-alt/60">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-brand-slate border-r border-brand-border/60">{row.mr}</td>
                  <td className="p-4 sm:p-5 text-brand-slate border-r border-brand-border/60">{row.bwp}</td>
                  <td className="p-4 sm:p-5 text-brand-charcoal font-medium border-r border-brand-border/60 bg-brand-soft-brown/40">{row.marine}</td>
                  <td className="p-4 sm:p-5 text-brand-slate">{row.fr}</td>
                </tr>
              ))}
              <tr className="bg-brand-cream border-t-2 border-brand-border">
                <td className="p-4 sm:p-5 font-bold text-brand-charcoal border-r border-brand-border/60">Explore Page</td>
                <td className="p-4 sm:p-5 border-r border-brand-border/60">
                  <a href={ROUTES.mrGradePlywood} className="inline-flex items-center gap-1 text-xs font-bold text-brand-forest hover:text-brand-accent">
                    MR Grade <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 border-r border-brand-border/60">
                  <a href={ROUTES.bwpGradePlywood} className="inline-flex items-center gap-1 text-xs font-bold text-brand-forest hover:text-brand-accent">
                    BWP Grade <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 border-r border-brand-border/60 bg-brand-soft-brown/40">
                  <a href={PRODUCT_ROUTES.marineGradePlywood} className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:text-brand-forest">
                    Marine Plywood <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5">
                  <a href={PRODUCT_ROUTES.fireRetardantPlywood} className="inline-flex items-center gap-1 text-xs font-bold text-brand-forest hover:text-brand-accent">
                    Fire Retardant <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* A Simple Way to Start Box */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-4 sm:space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal">A Simple Way to Start</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <a href={ROUTES.mrGradePlywood} className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border hover:border-brand-accent transition-all group">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-brand-muted block">Dry everyday interiors</span>
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors flex items-center justify-between mt-1">
                MR Grade <ArrowRight className="w-3.5 h-3.5" />
              </strong>
            </a>
            <a href={ROUTES.bwpGradePlywood} className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border hover:border-brand-accent transition-all group">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-brand-muted block">Kitchens &amp; moisture-conscious</span>
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors flex items-center justify-between mt-1">
                BWP Grade <ArrowRight className="w-3.5 h-3.5" />
              </strong>
            </a>
            <a href={PRODUCT_ROUTES.marineGradePlywood} className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border hover:border-brand-accent transition-all group">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-brand-muted block">More demanding moisture</span>
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors flex items-center justify-between mt-1">
                Marine Plywood <ArrowRight className="w-3.5 h-3.5" />
              </strong>
            </a>
            <a href={PRODUCT_ROUTES.fireRetardantPlywood} className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border hover:border-brand-accent transition-all group">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-brand-muted block">Additional fire-performance</span>
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-accent transition-colors flex items-center justify-between mt-1">
                Fire Retardant <ArrowRight className="w-3.5 h-3.5" />
              </strong>
            </a>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-soft-brown/40 border border-brand-accent/30 text-xs sm:text-sm text-brand-charcoal">
            <strong>Note on Fire Retardant Plywood:</strong> Fire Retardant Plywood is slightly different from the other three. It addresses a different performance requirement (reaction to fire rather than moisture alone).
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ CHOOSE THE RIGHT THICKNESS & SHEET SIZES ============ */
const ThicknessAndSizes = () => {
  const thicknesses = [
    { mm: "4 mm", desc: "Suitable starting point for lightweight backing, lining and selected decorative applications." },
    { mm: "6 mm", desc: "Commonly considered for cabinet backs, drawer bottoms and lightweight panels." },
    { mm: "9 mm", desc: "Useful for selected partitions, panelling and lighter furniture components." },
    { mm: "12 mm", desc: "A practical option for cabinetry and general furniture fabrication." },
    { mm: "15 mm", desc: "Suitable for furniture bodies, storage units and stronger panels." },
    { mm: "18 mm", desc: "Commonly considered for wardrobes, beds, tables, shelves and heavier furniture components." },
  ];

  const sizes = [
    "8 × 4 ft",
    "8 × 3 ft",
    "7 × 4 ft",
    "7 × 3 ft",
    "6 × 4 ft",
    "6 × 3 ft",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border" id="thickness">
      <div className="ply-container space-y-12 sm:space-y-16">
        {/* Thickness Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              CHOOSE THE RIGHT THICKNESS
            </div>
            <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
              Grade Handles the Environment.{" "}
              <em className="home-heading-accent font-normal not-italic block sm:inline">
                Thickness Handles the Furniture.
              </em>
            </h2>
            <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
              Choosing the correct plywood grade is only one part of the material decision. Thickness should be selected according to:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 text-xs font-semibold text-brand-charcoal">
            {["Furniture Component", "Panel Dimensions", "Unsupported Span", "Expected Load", "Support Spacing", "Hardware & Screw Fixing", "Joinery System", "Surface Finish", "Installation Conditions"].map((item, idx) => (
              <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-white border border-brand-border flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {thicknesses.map((t, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs hover:border-brand-accent transition-all space-y-2">
                <div className="font-display text-2xl sm:text-3xl font-bold text-brand-forest">{t.mm}</div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-cream border border-brand-border text-xs text-brand-slate font-medium">
            <strong>Important:</strong> These are general application examples. Final thickness depends on the actual furniture design, span, support and expected load.
          </div>
        </div>

        {/* Sheet Sizes Section */}
        <div className="pt-8 border-t border-brand-border/60 space-y-6 sm:space-y-8" id="sizes">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
                AVAILABLE SHEET SIZES
              </div>
              <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-bold leading-tight text-brand-charcoal">
                Plan the Sheet Around the Fabrication.
              </h2>
            </div>
            <a
              href="#enquiry"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-forest px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-accent transition-all self-start md:self-auto"
            >
              Check Size &amp; Thickness Availability <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-brand-muted text-xs sm:text-sm max-w-2xl">
            Pentagon’s plywood range can be discussed in commonly used sheet formats. Availability may vary according to the selected grade and thickness.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {sizes.map((sz, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border text-center shadow-2xs hover:border-brand-accent transition-all">
                <strong className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal block">{sz}</strong>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted tracking-wider block mt-1">Standard Format</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FROM PLYWOOD TO FINISHED FURNITURE ============ */
const FurnitureApplications = () => {
  const apps = [
    {
      title: "Wardrobes & Storage",
      desc: "Start with the wardrobe location, shelf span, shutter design, hardware and exposure to damp walls before selecting the grade and thickness.",
      dir: "MR for ordinary dry interiors; consider higher water resistance where humidity or dampness is a greater concern.",
      image: WardrobeApplication,
      link: APPLICATION_SECTIONS.wardrobes,
    },
    {
      title: "Modular Kitchens",
      desc: "Kitchen furniture can experience humidity, spills, steam, plumbing and repeated cleaning.",
      dir: "Consider BWP or Marine Plywood according to the actual moisture conditions and project specification.",
      image: KitchenApplication,
      link: APPLICATION_SECTIONS.kitchens,
    },
    {
      title: "Home Furniture",
      desc: "Beds, television units, study tables, cabinets and shelves may use different thicknesses depending on their construction and expected load.",
      dir: "MR Grade is a practical option for many relatively dry residential applications.",
      image: LivingRoomApplication,
      link: APPLICATION_SECTIONS.furniture,
    },
    {
      title: "Office Furniture",
      desc: "Desks, cabinets, storage and partitions need material selected according to use, hardware, panel dimensions and environmental conditions.",
      dir: "Select the plywood grade around both the component and installation environment.",
      image: OfficeApplication,
      link: APPLICATION_SECTIONS.commercial,
    },
    {
      title: "Commercial Interiors",
      desc: "Retail, office, hospitality and other commercial environments may require greater attention to repeated use, documentation, finish and project specifications.",
      dir: "Consider moisture, load, surface requirements and any additional performance criteria before selecting the grade.",
      image: RetailApplication,
      link: APPLICATION_SECTIONS.commercial,
    },
    {
      title: "Special Performance Requirements",
      desc: "Some projects include requirements beyond ordinary moisture resistance.",
      dir: "Where fire-retardant plywood is specified, review the Fire Retardant Plywood range and relevant project requirements separately.",
      image: BathroomApplication,
      link: PRODUCT_ROUTES.fireRetardantPlywood,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            FROM PLYWOOD TO FINISHED FURNITURE
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            What Will the Sheet{" "}
            <em className="home-heading-accent font-normal not-italic">
              Become?
            </em>
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Tailor the board selection to the exact piece of furniture or interior application you are crafting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {apps.map((item, idx) => (
            <div key={idx} className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-brand-border bg-white overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300">
              <div>
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-brand-charcoal">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 font-display text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-3 border-t border-brand-border/60 text-xs text-brand-charcoal">
                    <strong className="text-brand-forest">Starting direction:</strong> {item.dir}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a href={item.link} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-accent transition-colors">
                  <span>Explore Applications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ HOW PLYWOOD IS MADE ============ */
const ManufacturingJourney = () => {
  const steps = [
    { n: "01", t: "Veneer Selection & Preparation", p: "Wood veneers are selected and prepared according to the plywood requirement." },
    { n: "02", t: "Conditioning", p: "The veneers are conditioned to support consistent bonding and panel construction." },
    { n: "03", t: "Veneer Assembly", p: "Prepared veneers are arranged in layers to form the plywood structure." },
    { n: "04", t: "Adhesive Application", p: "The appropriate bonding system is applied according to the required product grade." },
    { n: "05", t: "Controlled Pressing", p: "The assembled veneers are pressed under controlled manufacturing conditions." },
    { n: "06", t: "Trimming & Sanding", p: "Pressed panels are trimmed to the required dimensions and their surfaces prepared." },
    { n: "07", t: "Inspection", p: "Dimensions, bonding, surface condition and other applicable product requirements are evaluated." },
    { n: "08", t: "Packaging & Dispatch", p: "Approved plywood is prepared for storage, handling and supply." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border" id="manufacturing">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              HOW PLYWOOD IS MADE
            </div>
            <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
              The Finished Surface Is Only the{" "}
              <em className="home-heading-accent font-normal not-italic">
                Final Part of the Process.
              </em>
            </h2>
            <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
              Plywood performance begins before the sheet reaches the furniture workshop. A typical plywood manufacturing journey at our Yamunanagar facility:
            </p>
          </div>
          <a
            href={ROUTES.manufacturing}
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-brand-forest px-6 sm:px-7 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-accent transition-all shrink-0 self-start md:self-auto"
          >
            Explore Yamunanagar Facility <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2.5">
              <span className="font-display text-xl sm:text-2xl font-bold text-brand-honey-dark block">{s.n}</span>
              <h3 className="font-display text-sm sm:text-base font-bold text-brand-charcoal">{s.t}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ STANDARDS, FABRICATION & BLOCKBOARD COMPARISON ============ */
const AdditionalKnowledge = () => (
  <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
    <div className="ply-container space-y-12 sm:space-y-16">
      {/* Standards & Plywood vs Blockboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            UNDERSTANDING PLYWOOD STANDARDS
          </div>
          <h2 className="font-display text-[26px] sm:text-[38px] lg:text-[44px] font-bold leading-tight text-brand-charcoal">
            The Standard Helps Explain What the Product Is Designed to Do.
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Different plywood categories can follow different product standards according to their intended use and performance requirements:
          </p>
          <div className="space-y-2.5 sm:space-y-3 pt-1">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border space-y-1">
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block">General-Purpose Plywood (IS 303)</strong>
              <span className="text-xs text-brand-muted block">MR and BWP are general-purpose plywood grades used for different moisture conditions.</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border space-y-1">
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block">Marine Plywood (IS 710)</strong>
              <span className="text-xs text-brand-muted block">Marine Plywood is a separate plywood category intended for more demanding moisture conditions.</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border space-y-1">
              <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block">Fire Retardant Plywood (IS 5509 / Spec)</strong>
              <span className="text-xs text-brand-muted block">Fire Retardant Plywood follows a separate performance requirement focused on fire behavior.</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-brand-charcoal font-semibold pt-1">
            Understanding that <strong>the grade and standard should match the conditions in which the plywood will actually be used.</strong>
          </p>
          <a
            href={HOME_SECTIONS.quality}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-accent pt-1"
          >
            <span>Explore Quality &amp; Certifications</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Plywood or Blockboard */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-brand-forest text-white space-y-5 shadow-xl">
          <span className="text-brand-accent-light text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest block">
            MATERIAL COMPARISON
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Plywood or Blockboard?
          </h2>
          <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
            Plywood and blockboard can both be used for furniture, but their internal construction is different. <strong>Plywood</strong> is built from multiple layers of wood veneer, whereas <strong>Blockboard</strong> uses solid timber strips in its central core with veneer outer layers over them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
              <strong className="text-xs font-bold text-brand-accent block uppercase tracking-wider">Consider Plywood When:</strong>
              <ul className="text-[11px] text-white/80 space-y-1.5 list-disc pl-3.5">
                <li>Furniture cabinetry is primary requirement</li>
                <li>Uniform layered construction preferred</li>
                <li>Fixing required at multiple locations</li>
                <li>Specific moisture-performance grade needed</li>
              </ul>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
              <strong className="text-xs font-bold text-brand-accent block uppercase tracking-wider">Consider Blockboard When:</strong>
              <ul className="text-[11px] text-white/80 space-y-1.5 list-disc pl-3.5">
                <li>Design contains long furniture components</li>
                <li>Wardrobe shutters, long shelves, or doors</li>
                <li>Solid timber-strip core suits furniture build</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[10px] sm:text-[11px] text-white/70 italic">Choose according to finished component.</span>
            <a
              href={PRODUCT_ROUTES.blockboard}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-brand-accent px-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-accent-dark transition-colors shrink-0 w-full sm:w-auto text-center"
            >
              Compare Blockboard <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Fabrication & Finishing */}
      <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-5">
        <div className="max-w-2xl space-y-2">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            FABRICATION &amp; FINISHING
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-brand-charcoal">
            The Core Creates the Foundation. The Finish Creates the Look.
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
            Depending on the selected plywood and finishing system, plywood can provide a base for decorative laminates, natural veneers, paints, polish, edge banding, routed components and other compatible furniture finishes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-brand-charcoal">
          {["Decorative Laminates", "Natural Veneers", "Decorative Veneers", "Paint & Lacquer", "Wood Polish", "Edge Banding", "Routed Components", "Compatible Finishes"].map((fin, idx) => (
            <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-brand-cream-alt border border-brand-border flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-brand-forest shrink-0" />
              <span>{fin}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-brand-soft-brown/40 border border-brand-accent/30 text-xs text-brand-charcoal">
          <strong>Fabrication Note:</strong> The finished furniture should be treated as a complete system. Grade selection alone cannot compensate for poor edge treatment, unsuitable hardware or uncontrolled water leakage.
        </div>
      </div>
    </div>
  </section>
);

/* ============ WHY CHOOSE PENTAGON PLYWOOD ============ */
const WhyChoosePentagon = () => {
  const reasons = [
    { title: "Manufactured in Yamunanagar", desc: "Plywood is one of Pentagon’s core in-house manufactured wood-product categories." },
    { title: "Grades for Different Conditions", desc: "Choose plywood around the environment rather than specifying the same product everywhere." },
    { title: "Multiple Sizes & Thicknesses", desc: "Discuss sheet format and thickness according to furniture component and fabrication requirement." },
    { title: "Application-Led Guidance", desc: "If you do not know the grade, begin with what you are building and where it will be installed." },
    { title: "Support for Different Buyers", desc: "Pentagon supports homeowners and furniture makers to dealers, contractors and project buyers." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            WHY CHOOSE PENTAGON PLYWOOD?
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            Because the Material Behind the{" "}
            <em className="home-heading-accent font-normal not-italic">
              Furniture Still Matters.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-forest block mb-1.5">0{idx + 1}</span>
                <h3 className="font-display text-base font-bold text-brand-charcoal mb-1.5">{r.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{r.desc}</p>
              </div>
              <div className="pt-3 border-t border-brand-border/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-honey-dark">
                Pentagon Assurance
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ FOR DEALERS, FURNITURE MAKERS & PROJECTS ============ */
const DealersAndProjects = () => (
  <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
    <div className="ply-container">
      <div className="rounded-2xl sm:rounded-3xl bg-brand-cream-alt border border-brand-border p-6 sm:p-10 lg:p-12 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            FOR DEALERS, FURNITURE MAKERS &amp; PROJECTS
          </div>
          <h2 className="font-display text-[26px] sm:text-[38px] lg:text-[44px] font-bold leading-tight text-brand-charcoal">
            Need More Than a Few Sheets?
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Pentagon can discuss plywood requirements for dealer &amp; distributor supply, furniture manufacturing, wardrobe production, modular kitchen lines, residential &amp; office fit-outs, and project procurement.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-brand-charcoal font-medium pt-1">
            <p className="font-bold">Share your project details:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Plywood Grade", "Application", "Thickness", "Sheet Size", "Quantity", "Delivery Location"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-brand-slate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
          <a
            href="#enquiry"
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-full bg-brand-forest px-7 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-accent transition-all cursor-pointer text-center"
          >
            Request a Bulk Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={ROUTES.dealers}
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-full border border-brand-accent/40 bg-white px-7 text-xs font-bold uppercase tracking-wider text-brand-honey-dark hover:bg-brand-soft-brown transition-all shadow-xs text-center"
          >
            Become a Dealer <ArrowRight className="w-4 h-4 text-brand-charcoal" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============ FREQUENTLY ASKED QUESTIONS ============ */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Which plywood should I choose?",
      a: "Start with where the plywood will be used. MR Grade suits many relatively dry interiors, BWP is considered where moisture is a greater concern, Marine Plywood is for more demanding moisture conditions, and Fire Retardant Plywood is used where additional fire-retardant performance is required.",
    },
    {
      q: "Which plywood is suitable for wardrobes?",
      a: "MR Grade can be a practical option for wardrobes in relatively dry interiors. Consider the environment, shutter design, shelf span, hardware and required thickness before finalising the material.",
    },
    {
      q: "Which plywood should I use for kitchen furniture?",
      a: "BWP or Marine Plywood may be considered depending on the amount and frequency of moisture exposure. Under-sink areas, plumbing locations and utility zones require particular attention.",
    },
    {
      q: "Does every kitchen need Marine Plywood?",
      a: "Not necessarily. Material should be selected according to the actual moisture conditions and project requirement rather than automatically specifying the highest grade everywhere.",
    },
    {
      q: "What does MR mean?",
      a: "MR means Moisture Resistant and is primarily used for furniture and interior applications in relatively dry environments.",
    },
    {
      q: "What does BWP mean?",
      a: "BWP means Boiling Water Proof and is selected where a higher level of water resistance is required than ordinary MR Grade interior plywood.",
    },
    {
      q: "Is BWP the same as Marine Plywood?",
      a: "No. They are different plywood categories. Marine Plywood is intended for more demanding moisture conditions and follows a separate product specification.",
    },
    {
      q: "Is Fire Retardant Plywood fireproof?",
      a: "No. Fire-retardant plywood is designed to improve plywood's behaviour when exposed to fire. It should not be described as non-combustible or completely fireproof.",
    },
    {
      q: "Which thickness should I use?",
      a: "The correct thickness depends on the furniture component, dimensions, unsupported span, expected load, support, hardware and construction.",
    },
    {
      q: "What thicknesses are available?",
      a: "The standard Pentagon plywood range includes: 4 mm, 6 mm, 9 mm, 12 mm, 15 mm and 18 mm.",
    },
    {
      q: "Which sheet sizes are available?",
      a: "Common formats include: 8 × 4 ft, 8 × 3 ft, 7 × 4 ft, 7 × 3 ft, 6 × 4 ft and 6 × 3 ft. Availability should be checked according to required grade and thickness.",
    },
    {
      q: "Can plywood be laminated or veneered?",
      a: "Yes. Depending on the plywood face and finishing system, plywood can be used with suitable laminates, veneers, paints, polishes and other compatible furniture finishes.",
    },
    {
      q: "Can homeowners enquire directly?",
      a: "Yes. If you are unsure of the plywood grade, share what you are building, the installation location and approximate quantity so the requirement can be discussed.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border" id="faq">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            Questions About{" "}
            <em className="home-heading-accent font-normal not-italic">
              Plywood Selection.
            </em>
          </h2>
        </div>

        <div className="max-w-4xl space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl sm:rounded-2xl border border-brand-border bg-white overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-display text-base sm:text-lg font-bold text-brand-charcoal hover:text-brand-accent transition-colors"
              >
                <span>{faq.q}</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-cream-alt flex items-center justify-center shrink-0">
                  {openIndex === idx ? <Minus className="w-3.5 h-3.5 text-brand-accent" /> : <Plus className="w-3.5 h-3.5 text-brand-charcoal" />}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/40 pt-3.5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ FINAL ENQUIRY FORM ============ */
const PlyEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    customerType: "Homeowner / Retail Buyer",
    grade: "Not sure (Advise based on application)",
    thickness: "Select thickness",
    sheetSize: "Select sheet size",
    quantity: "",
    location: "",
    application: "",
    details: "",
  });

  const update = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "product",
        formSource: "plywood-overview",
        productCategory: "Plywood",
        productName: form.grade,
        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,
        customerType: form.customerType,
        grade: form.grade,
        thickness: form.thickness !== "Select thickness" ? form.thickness : "",
        quantity: form.quantity ? `${form.quantity} sheets (${form.sheetSize !== "Select sheet size" ? form.sheetSize : ""})` : "",
        location: form.location,
        application: form.application,
        details: form.details,
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit requirement. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-forest text-white" id="enquiry">
      <div className="ply-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent-light text-[10px] font-extrabold uppercase tracking-widest border border-brand-accent/40 inline-block">
            START YOUR ENQUIRY
          </span>
          <h2 className="font-display text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-tight text-white">
            Not Sure Which Plywood Grade You Need?
          </h2>
          <p className="text-white/85 text-xs sm:text-base leading-relaxed">
            Tell Us What You’re Building. Start From the Application. You do not need to know the technical grade before contacting Pentagon.
          </p>
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
            Tell us whether you are making a wardrobe, kitchen, furniture unit, office interior, commercial project or another application, and share the conditions the plywood is likely to face. Our team will discuss the available grade, thickness, sheet size and supply requirement.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-xs">
            <strong className="text-brand-accent block text-xs sm:text-sm font-bold">Direct Communication:</strong>
            <p className="text-white/80">Prefer to speak directly? Call or WhatsApp our trade desk for immediate guidance.</p>
            <div className="pt-1 flex flex-wrap gap-3 sm:gap-4 font-bold text-white text-xs">
              <span>📞 +91 70150 85556</span>
              <span>💬 WhatsApp Active</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white text-brand-charcoal p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-brand-forest text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">Requirement Received!</h3>
              <p className="text-brand-muted text-xs sm:text-sm max-w-md mx-auto">
                Thank you for reaching out. Our plywood specialists will review your application requirements and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-6 py-2.5 bg-brand-forest text-white text-xs font-bold uppercase rounded-full hover:bg-brand-accent cursor-pointer"
              >
                Send Another Requirement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {submitError && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-800">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Name *</label>
                  <input required value={form.name} onChange={update("name")} placeholder="Your full name" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Company Name</label>
                  <input value={form.companyName} onChange={update("companyName")} placeholder="Firm / Company name" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Phone Number *</label>
                  <input required value={form.phone} onChange={update("phone")} placeholder="+91 · · · · ·" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Email Address *</label>
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Customer Type</label>
                  <select value={form.customerType} onChange={update("customerType")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Homeowner / Retail Buyer</option>
                    <option>Architect / Interior Designer</option>
                    <option>Contractor / Builder</option>
                    <option>Dealer / Stockist</option>
                    <option>Furniture Manufacturer</option>
                    <option>Project Procurement</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Plywood Grade</label>
                  <select value={form.grade} onChange={update("grade")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Not sure (Advise based on application)</option>
                    <option>MR Grade Plywood (IS 303)</option>
                    <option>BWP Grade Plywood</option>
                    <option>Marine Grade Plywood (IS 710)</option>
                    <option>Fire Retardant Plywood</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Thickness</label>
                  <select value={form.thickness} onChange={update("thickness")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Select thickness</option>
                    <option>4 mm</option>
                    <option>6 mm</option>
                    <option>9 mm</option>
                    <option>12 mm</option>
                    <option>15 mm</option>
                    <option>18 mm</option>
                    <option>Multiple Thicknesses</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Sheet Size</label>
                  <select value={form.sheetSize} onChange={update("sheetSize")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Select sheet size</option>
                    <option>8 × 4 ft</option>
                    <option>8 × 3 ft</option>
                    <option>7 × 4 ft</option>
                    <option>7 × 3 ft</option>
                    <option>6 × 4 ft</option>
                    <option>6 × 3 ft</option>
                    <option>Multiple Formats</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Quantity (sheets)</label>
                  <input value={form.quantity} onChange={update("quantity")} placeholder="e.g. 100" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">City &amp; State *</label>
                  <input required value={form.location} onChange={update("location")} placeholder="e.g. Chandigarh, Punjab" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Application</label>
                  <input value={form.application} onChange={update("application")} placeholder="e.g. Kitchen cabinetry, Wardrobes, Office fit-out" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Additional Requirements</label>
                <textarea rows={3} value={form.details} onChange={update("details")} placeholder="Tell us more about your timeline, site conditions or project specifications..." className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest resize-none" />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 bg-brand-forest text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-accent transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Your Requirement"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] sm:text-[11px] text-brand-muted text-center sm:text-left">Direct dispatch from Yamunanagar facility</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============ PAGE ROOT ============ */
function PlywoodPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "pentagon-brand");
    document.title = "Plywood Products & Range Overview | Pentagon Plywood";
  }, []);

  return (
    <div className="plywood-overview-page bg-brand-cream text-brand-charcoal font-sans">
      <Breadcrumb />
      <PlyHero />
      <WhatIsPlywood />
      <PlyRange />
      <CompareRange />
      <ThicknessAndSizes />
      <FurnitureApplications />
      <ManufacturingJourney />
      <AdditionalKnowledge />
      <WhyChoosePentagon />
      <DealersAndProjects />
      <FAQSection />
      <PlyEnquiry />
    </div>
  );
}

export default PlywoodPage;
