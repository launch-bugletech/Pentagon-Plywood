/* Pentagon Plywood - Industrial Chemicals Overview & Formaldehyde Page */

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
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TreePine,
  Truck,
  Wrench,
  Boxes,
  ExternalLink,
  Award,
  FlaskConical,
  Beaker,
  Activity,
  FileSpreadsheet,
  Building2,
} from "lucide-react";
import {
  ROUTES,
  PRODUCT_ROUTES,
  APPLICATION_SECTIONS,
  HOME_SECTIONS,
} from "@/app/routes.js";
import { INDUSTRIAL_CHEMICALS_OVERVIEW_DATA } from "@/data/products/industrialChemicalsOverviewData.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
import "./industrial-chemicals-page.css";

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
      <span className="text-brand-charcoal font-semibold shrink-0">Industrial Chemicals</span>
    </div>
  </nav>
);

/* ============ HERO SECTION ============ */
const ChemicalHero = () => {
  const { hero } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

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

      <div className="ply-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full my-auto pt-2 sm:pt-4 pb-4">
        <div className="lg:col-span-9 xl:col-span-8 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-[#8E510D] font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-brand-honey-dark shrink-0" />
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
            ⚗️ {hero.recommendation}
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

      {/* Quick Category Information Bar */}
      <div className="ply-container relative z-10 w-full mt-4 sm:mt-6">
        <div className="rounded-2xl border border-brand-cool-border bg-white/95 backdrop-blur-md shadow-xl p-4 sm:p-6">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-honey-dark mb-3">
            Quick Category Information
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
            {INDUSTRIAL_CHEMICALS_OVERVIEW_DATA.quickInfo.map((item, idx) => (
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

/* ============ FROM WOOD TO INDUSTRIAL CHEMISTRY ============ */
const WoodToChemistry = () => {
  const { woodToChemistry } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container">
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              {woodToChemistry.eyebrow}
            </div>
            <h2 className="font-display text-[26px] sm:text-[38px] lg:text-[44px] font-bold leading-tight text-brand-charcoal">
              {woodToChemistry.title}
            </h2>
            <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
              {woodToChemistry.lead}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-brand-forest text-white space-y-2 shadow-md">
            <div className="flex items-center gap-2 text-brand-accent-light text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-accent" /> Integrated Industrial Synergy
            </div>
            <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed font-medium">
              "{woodToChemistry.quote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FORMALDEHYDE SPOTLIGHT & MOCKUP ============ */
const FormaldehydeSpotlight = () => {
  const { formaldehydeSpotlight } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border" id="formaldehyde">
      <div className="ply-container space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              {formaldehydeSpotlight.eyebrow}
            </div>
            <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
              {formaldehydeSpotlight.title}
            </h2>
            <strong className="text-brand-forest text-sm sm:text-base font-bold block">
              {formaldehydeSpotlight.subtitle}
            </strong>
            <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
              {formaldehydeSpotlight.desc}
            </p>

            <div className="pt-2">
              <a
                href="#enquiry"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-forest px-7 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-accent transition-all"
              >
                Request Technical Specification <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border bg-white shadow-xl">
              <img
                src={formaldehydeSpotlight.image}
                alt="Formaldehyde Quality Control Laboratory & Chemical Tank"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 sm:p-5 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-brand-charcoal block">Formaldehyde Solution (CH₂O)</span>
                  <span className="text-brand-muted text-[11px]">Yamunanagar &amp; Morbi Manufacturing Facilities</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-forest/10 text-brand-forest font-extrabold text-[10px] uppercase">
                  Batch CoA Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Common Industry Connections */}
        <div className="space-y-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal">
            Common Industry Connections &amp; Applications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formaldehydeSpotlight.industries.map((ind, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <div className="flex items-center gap-2 font-display text-base font-bold text-brand-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{ind.name}</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed pl-6">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ RESIN FAMILIES & WOOD PANEL SYNTHESIS ============ */
const ResinFamilies = () => {
  const { resinFamilies } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container space-y-8 sm:space-y-12">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
            {resinFamilies.eyebrow}
          </div>
          <h2 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] font-bold leading-tight text-brand-charcoal">
            {resinFamilies.title}
          </h2>
          <p className="text-brand-muted text-xs sm:text-base leading-relaxed">
            {resinFamilies.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            {resinFamilies.families.map((fam, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-brand-charcoal">{fam.name}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-brand-cream-alt text-brand-forest border border-brand-border text-[10px] font-extrabold uppercase">
                    {fam.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{fam.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border bg-white shadow-xl">
              <img
                src={resinFamilies.image}
                alt="Wood Veneer Bonding with Synthetic Resin Adhesive"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-brand-forest text-white text-xs">
                <strong className="block text-brand-accent-light font-bold">Industrial Resin Synthesis</strong>
                <span className="text-white/80 text-[11px]">Connecting Chemical Operations with Panel Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ DUAL MANUFACTURING LOCATIONS & TECHNICAL SPECS ============ */
const FacilitiesAndSpecs = () => {
  const { manufacturingLocations, technicalSpecs, qualityControl } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream-alt border-b border-brand-border">
      <div className="ply-container space-y-12 sm:space-y-16">
        {/* Two Manufacturing Locations */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              TWO MANUFACTURING LOCATIONS
            </div>
            <h2 className="font-display text-[28px] sm:text-[40px] font-bold leading-tight text-brand-charcoal">
              Industrial Production From Yamunanagar &amp; Morbi.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {manufacturingLocations.map((loc, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-brand-border shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-brand-forest text-white">
                    {loc.tag}
                  </span>
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-charcoal">{loc.city}, {loc.state}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Parameters */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="text-[#8E510D] font-semibold text-[10px] sm:text-[11px] leading-tight tracking-[0.18em] uppercase">
              {technicalSpecs.eyebrow}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
              {technicalSpecs.title}
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              {technicalSpecs.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSpecs.parameters.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-brand-cream-alt/60 border border-brand-border/50 space-y-1">
                <strong className="text-xs sm:text-sm font-bold text-brand-charcoal block">{p.param}</strong>
                <p className="text-xs text-brand-muted leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-brand-border/60 space-y-2">
            <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider block">Required Information for Quote:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-brand-charcoal">
              {technicalSpecs.procurementChecklist.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-brand-cream-alt border border-brand-border/40 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Control Steps */}
        <div className="space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal">
            Process Control &amp; Batch Quality Evaluation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {qualityControl.map((qc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-brand-border shadow-2xs space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-forest block">0{idx + 1}</span>
                <strong className="text-sm font-bold text-brand-charcoal block">{qc.title}</strong>
                <p className="text-xs text-brand-muted leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ SAFETY, SDS & TARGET INDUSTRIAL AUDIENCE ============ */
const SafetyAndAudience = () => {
  const { safetyHandling, targetAudience } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-cream border-b border-brand-border">
      <div className="ply-container space-y-12 sm:space-y-16">
        {/* Safety & SDS Controls */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-brand-forest text-white shadow-xl space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-brand-accent-light text-[10px] font-extrabold uppercase tracking-widest block">
              {safetyHandling.eyebrow}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {safetyHandling.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              {safetyHandling.warningNote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyHandling.controls.map((ctrl, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/15">
            <span className="text-xs text-white/80 italic">{safetyHandling.guidance}</span>
            <a
              href="#enquiry"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-accent px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-accent-dark transition-all shrink-0 w-full sm:w-auto text-center"
            >
              Request SDS Documentation <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Target Industrial Audience */}
        <div className="space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal">
            Who Is This Range For? Built Around Industrial Procurement.
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {targetAudience.map((aud, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-brand-border text-xs font-bold text-brand-charcoal flex items-center gap-2.5 shadow-2xs">
                <Building2 className="w-4 h-4 text-brand-forest shrink-0" />
                <span>{aud}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FREQUENTLY ASKED QUESTIONS ============ */
const FAQSection = () => {
  const { faqs } = INDUSTRIAL_CHEMICALS_OVERVIEW_DATA;
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
              Formaldehyde Supply.
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

/* ============ INDUSTRIAL BULK ENQUIRY FORM ============ */
const ChemicalEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    concentration: "37% / Technical Grade",
    application: "Plywood / Wood-Panel Resin",
    quantity: "",
    basis: "Recurring Monthly Delivery",
    frequency: "",
    destination: "",
    documentation: "Batch Certificate of Analysis (CoA)",
    details: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "industrial-chemical",
        formSource: "industrial-chemicals-overview",
        productCategory: "Industrial Chemicals",
        productName: "Formaldehyde Solution",

        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,

        thickness: form.concentration,
        quantity: form.quantity ? `${form.quantity} (${form.basis})` : "",
        details: `Application: ${form.application}\nFrequency: ${form.frequency}\nDestination: ${form.destination}\nDocs: ${form.documentation}\nNotes: ${form.details}`,
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit industrial chemical quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-forest text-white" id="enquiry">
      <div className="ply-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent-light text-[10px] font-extrabold uppercase tracking-widest border border-brand-accent/40 inline-block">
            INDUSTRIAL CHEMICAL ENQUIRY
          </span>
          <h2 className="font-display text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-tight text-white">
            Need Formaldehyde for an Industrial Requirement?
          </h2>
          <p className="text-white/85 text-xs sm:text-base leading-relaxed">
            Start With the Specification, Quantity and Destination. Whether the requirement is for plywood manufacturing, resin production, laminates or chemical processing, share technical details with Pentagon.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-xs">
            <strong className="text-brand-accent block text-xs sm:text-sm font-bold">Chemical Trade Desk:</strong>
            <p className="text-white/80">Direct connection with Yamunanagar &amp; Morbi chemical plant representatives.</p>
            <div className="pt-1 flex flex-wrap gap-3 sm:gap-4 font-bold text-white text-xs">
              <span>📞 +91 70150 85556</span>
              <span>✉️ Technical Desk Active</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white text-brand-charcoal p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-brand-forest text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">Industrial Quote Request Received!</h3>
              <p className="text-brand-muted text-xs sm:text-sm max-w-md mx-auto">
                Thank you for reaching out. Our chemical logistics and specification team will review your requirements and provide technical quotation details promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-6 py-2.5 bg-brand-forest text-white text-xs font-bold uppercase rounded-full hover:bg-brand-accent cursor-pointer"
              >
                Send Another Industrial Requirement
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
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Company Name *</label>
                  <input required value={form.companyName} onChange={update("companyName")} placeholder="Your industrial firm / plant name" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Contact Person *</label>
                  <input required value={form.name} onChange={update("name")} placeholder="Full name of contact officer" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Phone Number *</label>
                  <input required value={form.phone} onChange={update("phone")} placeholder="+91 · · · · ·" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Business Email *</label>
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="procurement@company.com" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Formaldehyde Concentration %</label>
                  <input value={form.concentration} onChange={update("concentration")} placeholder="e.g. 37% / 44% / Technical Grade" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Intended Industry Application</label>
                  <select value={form.application} onChange={update("application")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Plywood / Wood-Panel Resin</option>
                    <option>Adhesive &amp; Glue Manufacturing</option>
                    <option>Decorative Laminates Resin</option>
                    <option>Chemical Processing</option>
                    <option>Other Industrial Resin Use</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Quantity (Tons / Liters)</label>
                  <input value={form.quantity} onChange={update("quantity")} placeholder="e.g. 20 Tons Tanker" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Requirement Basis</label>
                  <select value={form.basis} onChange={update("basis")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Recurring Monthly Delivery</option>
                    <option>One-Time Spot Purchase</option>
                    <option>Trial Order</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Delivery Frequency</label>
                  <input value={form.frequency} onChange={update("frequency")} placeholder="e.g. Weekly / Bi-weekly" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Destination City &amp; State / Port *</label>
                  <input required value={form.destination} onChange={update("destination")} placeholder="e.g. Yamunanagar / Morbi / Kandla" className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Required Documentation</label>
                  <select value={form.documentation} onChange={update("documentation")} className="w-full h-11 px-4 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest">
                    <option>Batch Certificate of Analysis (CoA)</option>
                    <option>CoA + Safety Data Sheet (SDS)</option>
                    <option>Full Technical Spec Sheet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-slate block mb-1">Technical Specifications / Notes</label>
                <textarea rows={3} value={form.details} onChange={update("details")} placeholder="Acidity limits, methanol stabilizer %, tanker unloading constraints..." className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream-alt/40 text-xs sm:text-sm text-brand-charcoal focus:outline-none focus:border-brand-forest resize-none" />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 bg-brand-forest text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-accent transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Request Industrial Quote"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] sm:text-[11px] text-brand-muted text-center sm:text-left">Supplied from Yamunanagar &amp; Morbi units</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============ PAGE ROOT ============ */
function IndustrialChemicalsPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "pentagon-brand");
    document.title = "Industrial Chemicals & Formaldehyde | Pentagon Plywood";
  }, []);

  return (
    <div className="industrial-chemicals-overview-page bg-brand-cream text-brand-charcoal font-sans">
      <Breadcrumb />
      <ChemicalHero />
      <WoodToChemistry />
      <FormaldehydeSpotlight />
      <ResinFamilies />
      <FacilitiesAndSpecs />
      <SafetyAndAudience />
      <FAQSection />
      <ChemicalEnquiry />
    </div>
  );
}

export default IndustrialChemicalsPage;
