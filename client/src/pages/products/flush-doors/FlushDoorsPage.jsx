/* Pentagon Plywood - Flush Doors Category Overview Page (Design A) */

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  DoorClosed,
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
import { FLUSH_DOORS_OVERVIEW_DATA } from "@/data/products/flushDoorsOverviewData.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
import "./flush-doors-page.css";

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
      <span className="text-brand-charcoal font-semibold shrink-0">Flush Doors</span>
    </div>
  </nav>
);

/* ============ HERO SECTION ============ */
const DoorHero = () => {
  const { hero } = FLUSH_DOORS_OVERVIEW_DATA;

  return (
    <section className="ply-hero relative py-6 sm:py-10 lg:py-12 bg-brand-cream text-brand-charcoal overflow-hidden border-b border-brand-border/50">
      {/* Full-bleed Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      />
      {/* Soft Fade Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 pointer-events-none lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none md:hidden" />

      <div className="ply-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full pt-2 sm:pt-4 pb-4">
        <div className="lg:col-span-9 xl:col-span-8 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-[#8E510D] font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase">
            <DoorClosed className="w-3.5 h-3.5 text-brand-honey-dark shrink-0" />
            {hero.eyebrow}
          </div>

          {/* H1 strictly 2 lines on all screens */}
          <h1 className="font-display text-[22px] xs:text-[27px] sm:text-[38px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.08] sm:leading-[1.02] tracking-[-0.02em] text-brand-charcoal">
            <span className="block whitespace-nowrap">{hero.titleLine1}</span>
            <span className="home-heading-accent block whitespace-nowrap mt-0.5 sm:mt-1.5">
              {hero.titleLine2}
            </span>
          </h1>

          <p className="text-brand-muted text-xs sm:text-base leading-[1.65] max-w-2xl font-medium">
            {hero.copy}
          </p>

          <div className="p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-xs border border-brand-border/60 text-xs sm:text-sm font-semibold text-brand-charcoal">
            💡 {hero.recommendation}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href={hero.primaryCtaLink}
              className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full bg-brand-forest px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-accent transition-all cursor-pointer text-center"
            >
              {hero.primaryCtaText} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCtaLink}
              className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full border border-brand-accent/40 bg-white/90 backdrop-blur-sm px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-brand-honey-dark hover:bg-brand-soft-brown hover:border-brand-accent transition-all shadow-xs text-center"
            >
              {hero.secondaryCtaText} <ArrowRight className="h-4 w-4 text-brand-charcoal" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-3 xl:col-span-4" />
      </div>

      {/* Quick Range Information Bar */}
      <div className="ply-container relative z-10 w-full mt-4 sm:mt-6">
        <div className="rounded-2xl border border-brand-cool-border bg-white/95 backdrop-blur-md shadow-xl p-4 sm:p-6">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-honey-dark mb-3">
            Quick Range Information
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
            {FLUSH_DOORS_OVERVIEW_DATA.quickInfo.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted block tracking-wider">{item.label}</span>
                <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block mt-0.5">{item.val}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ WHAT IS A FLUSH DOOR? ============ */
const WhatIsFlushDoor = () => {
  const { whatIs, whyConsider } = FLUSH_DOORS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              {whatIs.eyebrow}
            </div>
            <h2 className="font-display text-[28px] sm:text-[40px] lg:text-[46px] font-bold leading-tight text-brand-charcoal">
              {whatIs.title}
            </h2>
            <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
              {whatIs.lead}
            </p>
            <div className="p-3.5 sm:p-4 rounded-xl bg-brand-cream-alt border border-brand-border/60 text-xs sm:text-sm font-semibold text-brand-charcoal">
              {whatIs.keyNote}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {whatIs.anatomy.map((part, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-forest/10 flex items-center justify-center text-brand-forest text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-base font-bold text-brand-charcoal">{part.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{part.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Consider a Flush Door? */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              {whyConsider.eyebrow}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
              {whyConsider.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyConsider.points.map((p, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-brand-cream-alt/60 border border-brand-border/50 space-y-1.5">
                <strong className="text-xs sm:text-sm font-bold text-brand-charcoal flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{p.title}</span>
                </strong>
                <p className="text-xs text-brand-muted leading-relaxed pl-6">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ EXPLORE THE FLUSH DOOR RANGE (2 GRADES) ============ */
const DoorRange = () => {
  const { range } = FLUSH_DOORS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt" id="range">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            EXPLORE PENTAGON FLUSH DOORS
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            Two Grades. Choose Around the{" "}
            <em className="home-heading-accent font-normal not-italic">
              Installation Environment.
            </em>
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            Select between MR Grade for dry indoor spaces and BWP Grade for areas exposed to higher humidity or moisture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {range.map((g) => (
            <div
              key={g.id}
              className={`group flex flex-col justify-between rounded-2xl sm:rounded-3xl border bg-white shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden ${
                g.flagship ? "border-brand-accent/60 ring-1 ring-brand-accent/30" : "border-brand-border hover:border-brand-accent/50"
              }`}
            >
              <div>
                <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-brand-charcoal">
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
                      BWP Waterproof
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
                      {g.apps.map((app, idx) => (
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

/* ============ MR OR BWP FLUSH DOOR COMPARISON ============ */
const DoorComparison = () => {
  const { comparison } = FLUSH_DOORS_OVERVIEW_DATA;
  const [activeMobileGrade, setActiveMobileGrade] = useState("mr");

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border" id="compare">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            {comparison.eyebrow}
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            {comparison.title}
          </h2>
        </div>

        {/* Desktop / Tablet Comparison Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-md">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-brand-forest text-white">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-2/5 border-r border-brand-forest-dark">Requirement</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-3/10 border-r border-brand-forest-dark">MR Grade Flush Door</th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-3/10 bg-brand-accent text-white">BWP Grade Flush Door</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/60 text-xs sm:text-sm">
              {comparison.table.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-brand-cream-alt/40"}>
                  <td className="p-4 font-bold text-brand-charcoal border-r border-brand-border/60 bg-brand-cream-alt/60">
                    {row.req}
                  </td>
                  <td className="p-4 text-brand-slate border-r border-brand-border/60">{row.mr}</td>
                  <td className="p-4 text-brand-charcoal font-medium bg-brand-soft-brown/40">{row.bwp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden space-y-4">
          <div className="flex rounded-xl bg-brand-cream-alt p-1 border border-brand-border text-xs font-bold">
            <button
              onClick={() => setActiveMobileGrade("mr")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "mr" ? "bg-brand-forest text-white shadow-xs" : "text-brand-slate"}`}
            >
              MR Grade
            </button>
            <button
              onClick={() => setActiveMobileGrade("bwp")}
              className={`flex-1 py-2 px-3 rounded-lg transition-all ${activeMobileGrade === "bwp" ? "bg-brand-accent text-white shadow-xs" : "text-brand-slate"}`}
            >
              BWP Grade
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-brand-border space-y-3 shadow-sm text-xs">
            {comparison.table.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-brand-border/40 last:border-0">
                <span className="font-bold text-brand-charcoal">{row.req}</span>
                <span className="text-brand-forest font-semibold">{activeMobileGrade === "mr" ? row.mr : row.bwp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-brand-soft-brown/40 border border-brand-accent/30 text-xs sm:text-sm text-brand-charcoal font-semibold text-center">
          {comparison.simpleRule}
        </div>
      </div>
    </section>
  );
};

/* ============ APPLICATIONS & HARDWARE CHECKLIST ============ */
const DoorApplicationsAndHardware = () => {
  const { applications, selectionChecklist, hardwareInfo, finishingOptions } = FLUSH_DOORS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border">
      <div className="ply-container space-y-12 sm:space-y-16">
        {/* Applications */}
        <div className="space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              WHERE CAN FLUSH DOORS BE USED?
            </div>
            <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
              Start With the Doorway, Not Just the Door.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <h3 className="font-display text-lg font-bold text-brand-charcoal">{app.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Size, Thickness & Hardware Selection */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              SIZE &amp; THICKNESS SELECTION
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
              A Door Must Fit the Opening, Hardware and Application Together.
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Confirm these key specifications before placing an order:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-brand-charcoal">
            {selectionChecklist.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-brand-cream-alt border border-brand-border flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hardwareInfo.map((h, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-brand-cream-alt/50 border border-brand-border/40 space-y-1">
                <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block">{h.item}</strong>
                <p className="text-xs text-brand-muted leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Finishing Options */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              SURFACE FINISHING OPTIONS
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
              Start With the Door. Finish It Around the Interior.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {finishingOptions.map((f, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <strong className="text-sm font-bold text-brand-forest block">{f.type}</strong>
                <p className="text-xs text-brand-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ COMPARISONS & MANUFACTURING JOURNEY ============ */
const ComparisonsAndManufacturing = () => {
  const { comparisons, manufacturingSteps, standard } = FLUSH_DOORS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container space-y-12 sm:space-y-16">
        {/* Panelled vs Flush & Standard vs Laminated */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-2xs space-y-4">
            <span className="text-[#8E510D] text-[10px] font-extrabold uppercase tracking-widest block">COMPARISON</span>
            <h3 className="font-display text-2xl font-bold text-brand-charcoal">{comparisons.panelledVsFlush.title}</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{comparisons.panelledVsFlush.desc}</p>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-forest text-white shadow-xl space-y-4">
            <span className="text-brand-accent-light text-[10px] font-extrabold uppercase tracking-widest block">PRODUCT OPTION</span>
            <h3 className="font-display text-2xl font-bold text-white">{comparisons.standardVsLaminated.title}</h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">{comparisons.standardVsLaminated.desc}</p>
            <a
              href={comparisons.standardVsLaminated.laminatedLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white transition-colors pt-2"
            >
              <span>Explore Laminated Flush Doors</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Manufacturing Steps */}
        <div className="space-y-8" id="manufacturing">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
                HOW FLUSH DOORS ARE MADE
              </div>
              <h2 className="font-display text-[28px] sm:text-[40px] font-bold leading-tight text-brand-charcoal">
                Door Performance Begins Before the Surface Is Finished.
              </h2>
            </div>
            <a
              href={ROUTES.manufacturing}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-forest px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-accent transition-all shrink-0 self-start md:self-auto"
            >
              Explore Yamunanagar Operations <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {manufacturingSteps.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <span className="font-display text-xl font-bold text-brand-honey-dark block">{s.n}</span>
                <h3 className="font-display text-sm font-bold text-brand-charcoal">{s.t}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Card */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-cream-alt border border-brand-border space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] uppercase tracking-widest">
            INDIAN STANDARD COMPLIANCE
          </div>
          <h3 className="font-display text-2xl font-bold text-brand-charcoal">{standard.code} - {standard.title}</h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-3xl">{standard.desc}</p>
        </div>
      </div>
    </section>
  );
};

/* ============ FREQUENTLY ASKED QUESTIONS ============ */
const FAQSection = () => {
  const { faqs } = FLUSH_DOORS_OVERVIEW_DATA;
  const [openIndex, setOpenIndex] = useState(0);

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
              Flush Doors.
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
const DoorEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    grade: "Not sure (Advise based on location)",
    dimensions: "",
    thickness: "Select thickness",
    quantity: "",
    finish: "Standard Flush Shutter",
    location: "",
    application: "",
    details: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "product",
        formSource: "flush-doors-overview",
        productCategory: "Flush Doors",
        productName: form.grade,
        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,
        grade: form.grade,
        thickness: form.thickness !== "Select thickness" ? form.thickness : "",
        quantity: form.quantity ? `${form.quantity} shutters (${form.dimensions || "Standard size"})` : "",
        location: form.location,
        application: form.application,
        details: `Finish: ${form.finish}\nDimensions: ${form.dimensions}\nNotes: ${form.details}`,
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit door enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-forest text-white" id="enquiry">
      <div className="ply-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent-light text-[10px] font-extrabold uppercase tracking-widest border border-brand-accent/40 inline-block">
            FLUSH DOOR ENQUIRY
          </span>
          <h2 className="font-display text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-tight text-white">
            Not Sure Which Flush Door You Need?
          </h2>
          <p className="text-white/85 text-xs sm:text-base leading-relaxed">
            Tell Us Where the Door Is Going. You do not need to begin with the technical grade.
          </p>
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
            Tell Pentagon whether the door is for a bedroom, office, kitchen-adjacent space, utility area, commercial project or another doorway. Share approximate dimensions, quantity, and delivery location.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-xs">
            <strong className="text-brand-accent block text-xs sm:text-sm font-bold">Direct Door Desk:</strong>
            <p className="text-white/80">Speak directly with our Yamunanagar door specialists.</p>
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
              <h3 className="font-display text-xl sm:text-2xl font-bold">Door Enquiry Received!</h3>
              <p className="text-brand-muted text-xs sm:text-sm max-w-md mx-auto">
                Thank you for reaching out. Our Flush Door specialists will review your dimensions and requirements and contact you shortly.
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
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Grade</label>
                  <select value={form.grade} onChange={update("grade")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Not sure (Advise based on location)</option>
                    <option>MR Grade Flush Door (IS 2202)</option>
                    <option>BWP Grade Flush Door (IS 2202)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Door Dimensions (H × W)</label>
                  <input value={form.dimensions} onChange={update("dimensions")} placeholder="e.g. 80 × 36 inches / 84 × 36 inches" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Thickness</label>
                  <select value={form.thickness} onChange={update("thickness")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Select thickness</option>
                    <option>30 mm</option>
                    <option>35 mm</option>
                    <option>40 mm</option>
                    <option>Multiple / Custom</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Quantity (shutters)</label>
                  <input value={form.quantity} onChange={update("quantity")} placeholder="e.g. 50" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Preferred Finish</label>
                  <select value={form.finish} onChange={update("finish")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Standard Flush Shutter</option>
                    <option>Laminated Finish</option>
                    <option>Veneer Base</option>
                    <option>Paint Base</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">City &amp; State *</label>
                  <input required value={form.location} onChange={update("location")} placeholder="e.g. Gurugram, Haryana" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Application</label>
                  <input value={form.application} onChange={update("application")} placeholder="e.g. Bedroom doors, Hotel project, Office fit-out" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Additional Requirements</label>
                <textarea rows={3} value={form.details} onChange={update("details")} placeholder="Frame size, lock cutout specs, delivery schedule, site details..." className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest resize-none" />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 bg-brand-forest text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-accent transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Door Requirement"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] sm:text-[11px] text-brand-muted text-center sm:text-left">Direct factory dispatch from Yamunanagar facility</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============ PAGE ROOT ============ */
function FlushDoorsPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "pentagon-brand");
    document.title = "Flush Doors Overview & Range | Pentagon Plywood";
  }, []);

  return (
    <div className="flush-doors-overview-page bg-brand-cream text-brand-charcoal font-sans">
      <Breadcrumb />
      <DoorHero />
      <WhatIsFlushDoor />
      <DoorRange />
      <DoorComparison />
      <DoorApplicationsAndHardware />
      <ComparisonsAndManufacturing />
      <FAQSection />
      <DoorEnquiry />
    </div>
  );
}

export default FlushDoorsPage;
