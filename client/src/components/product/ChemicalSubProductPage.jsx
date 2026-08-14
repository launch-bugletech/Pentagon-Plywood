/* Pentagon Plywood - Tailored Industrial Chemical Master Product Template (ChemicalSubProductPage.jsx) */

import React, { useEffect, useState } from "react";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Plus,
  Ruler,
  Shield,
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

const iconMap = {
  FlaskConical,
  Beaker,
  Shield,
  Factory,
  Layers,
  Truck,
  Building2,
  Activity,
  FileSpreadsheet,
  MapPin,
};
const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const section = "py-14 sm:py-20 lg:py-24";
const darkButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#0B2A1D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D99143]";
const outlineButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-current px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition hover:bg-[#143D2B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D99143]";

export function Heading({
  eyebrow,
  title,
  copy,
  light = false,
  className = "",
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-[#E7B572]" : "text-[#8E510D]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`font-['DM_Serif_Display',Georgia,serif] text-3xl leading-[1.06] sm:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-[#14211A]"
          }`}
        >
          {title}
        </h2>
      )}
      {copy && (
        <p
          className={`mt-4 max-w-2xl text-xs sm:text-base leading-relaxed ${
            light ? "text-white/80" : "text-[#526057]"
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-wider text-[#65736A]">
      <span>{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

/* 1. HERO SECTION */
export function ChemicalHeroSection({ hero = {}, breadcrumbs = [] }) {
  if (!hero.title) return null;
  return (
    <section className="relative isolate overflow-hidden bg-[#0C1612] pb-12 text-white border-b border-white/10">
      {hero.heroBg && (
        <img
          src={hero.heroBg}
          alt="Chemical manufacturing facility background"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-right opacity-35 lg:w-[62%] lg:opacity-100"
        />
      )}
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[#0C1612]/90 lg:w-[72%] lg:rounded-r-[48%] lg:bg-[#0C1612]" />
      <div className="absolute bottom-20 left-[5%] -z-10 h-36 w-52 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px]" />

      <div className={container}>
        {breadcrumbs.length > 0 && (
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 py-5 text-xs text-white/65 border-b border-white/10 mb-6"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map(([label, href], index) => (
              <span key={label + index} className="flex items-center gap-2">
                {index > 0 && <span className="opacity-40">›</span>}
                {href ? (
                  <a className="transition hover:text-white" href={href}>
                    {label}
                  </a>
                ) : (
                  <strong className="text-white font-semibold">{label}</strong>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid items-center gap-10 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:pb-16">
          <div className="max-w-2xl py-4 lg:py-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase">
              {hero.categoryBadge && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15">
                  <FlaskConical size={14} className="text-[#F3C88D]" />
                  {hero.categoryBadge}
                </span>
              )}
              {hero.gradeBadge && (
                <span className="rounded-full border border-[#D99143]/60 bg-[#D99143]/20 px-3.5 py-1 text-[#F3C88D] font-extrabold shadow-xs">
                  {hero.gradeBadge}
                </span>
              )}
            </div>

            <h1 className="font-['DM_Serif_Display',Georgia,serif] text-4xl leading-[1.02] sm:text-5xl lg:text-6xl text-white">
              {hero.title}
            </h1>

            {hero.description && (
              <p className="max-w-xl text-xs sm:text-base leading-relaxed text-white/85">
                {hero.description}
              </p>
            )}

            {hero.subDescription && (
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 font-medium">
                ⚗️ {hero.subDescription}
              </div>
            )}

            <div className="pt-2 flex flex-wrap gap-3">
              {hero.primaryCta && (
                <a
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#D99143] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#14211A] transition hover:bg-[#E7B572] shadow-md"
                  href={hero.primaryCta.href}
                >
                  {hero.primaryCta.text} <ArrowRight size={16} />
                </a>
              )}
              {hero.secondaryCta && (
                <a
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#14211A] backdrop-blur-xs"
                  href={hero.secondaryCta.href}
                >
                  {hero.secondaryCta.text} <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>

          {hero.productImage && (
            <div className="mx-auto w-full max-w-sm rounded-3xl bg-[#FDFBF8] p-3 shadow-2xl lg:translate-y-4 border border-white/20">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={hero.productImage}
                  alt={
                    hero.productImageAlt ||
                    "Formaldehyde Solution Quality Control"
                  }
                  className="aspect-[4/5] w-full object-cover"
                />
                {hero.productImageBadge && (
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#0C1612] px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-md border border-white/20">
                    {hero.productImageBadge}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* 2. QUICK FACTS BAR */
export function ChemicalQuickFactsSection({ quickFacts = [] }) {
  if (!quickFacts.length) return null;
  return (
    <div className="bg-[#0C1612] pb-12">
      <div className={container}>
        <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(({ label, value, icon }) => {
            const Icon = iconMap[icon] || FlaskConical;
            return (
              <div
                className="flex items-center gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                key={label}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#D99143]/20 text-[#F3C88D] shrink-0">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/55">
                    {label}
                  </p>
                  <strong className="mt-0.5 block text-xs sm:text-sm text-white font-bold">
                    {value}
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* 3. OVERVIEW SECTION */
export function ChemicalOverviewSection({ overview = {} }) {
  if (!overview.title) return null;
  return (
    <section
      id="overview"
      className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}
    >
      <div
        className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}
      >
        {overview.edgeImage && (
          <figure className="overflow-hidden rounded-3xl bg-[#EDE5D9] border border-[#D9D3C8] shadow-lg">
            <img
              src={overview.edgeImage}
              alt="Formaldehyde quality control laboratory"
              className="aspect-[5/4] w-full object-cover"
            />
            {overview.edgeCaption && (
              <figcaption className="bg-[#143D2B] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white/90">
                {overview.edgeCaption}
              </figcaption>
            )}
          </figure>
        )}
        <div className="space-y-4">
          <Heading eyebrow={overview.eyebrow} title={overview.title} />
          {overview.paragraphs && (
            <div className="space-y-3 leading-relaxed text-xs sm:text-base text-[#526057]">
              {overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
          {overview.callout && (
            <div className="p-4 sm:p-5 rounded-2xl border-l-4 border-[#D99143] bg-[#F4EADD] text-xs sm:text-sm text-[#14211A] space-y-1">
              <strong className="font-bold block text-brand-charcoal">
                {overview.callout.title}
              </strong>
              <p className="text-xs text-[#526057] leading-relaxed">
                {overview.callout.copy}
              </p>
            </div>
          )}
          {overview.cta && (
            <a
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#143D2B] hover:text-[#D99143] transition-colors pt-2"
              href={overview.cta.href}
            >
              <span>{overview.cta.text}</span>
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/* 4. PROCESS CHAIN SECTION */
export function ChemicalProcessChainSection({ processChain = {} }) {
  if (!processChain.steps?.length) return null;
  return (
    <section className="bg-[#F4EADD] py-14 sm:py-20 border-b border-[#D7C5AE]">
      <div className={container}>
        <Heading
          eyebrow={processChain.eyebrow}
          title={processChain.title}
          copy={processChain.lead}
        />
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {processChain.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D7C5AE] shadow-2xs space-y-3 relative"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-white font-bold text-sm flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#65736A] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. APPLICATIONS GALLERY SECTION */
export function ChemicalApplicationsSection({ applications = {} }) {
  if (!applications.items?.length) return null;
  return (
    <section
      id="applications"
      className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}
    >
      <div className={container}>
        <Heading
          eyebrow={applications.eyebrow}
          title={applications.title}
          copy={applications.copy}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {applications.items.map(({ title, copy, image, alt }, index) => (
            <article
              className="group relative min-h-64 overflow-hidden rounded-2xl border border-[#D9D3C8] bg-white shadow-xs"
              key={title}
            >
              {image && (
                <img
                  src={image}
                  alt={alt || title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div
                className={`absolute inset-0 ${
                  image
                    ? "bg-gradient-to-t from-[#14211A]/90 via-[#14211A]/30"
                    : "bg-[#F4EADD]"
                }`}
              />
              <div
                className={`relative flex h-full min-h-64 flex-col justify-end p-6 ${
                  image ? "text-white" : "text-[#14211A]"
                }`}
              >
                <span className="mb-auto text-xs font-bold tracking-[.15em] opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl">
                  {title}
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                    image ? "text-white/85" : "text-[#65736A]"
                  }`}
                >
                  {copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. CONCENTRATIONS MATRIX SECTION */
export function ChemicalConcentrationsSection({ concentrations = {} }) {
  if (!concentrations.items?.length) return null;
  return (
    <section
      id="concentrations"
      className="bg-[#F4EADD] py-14 sm:py-20 border-b border-[#D7C5AE]"
    >
      <div className={container}>
        <Heading
          eyebrow={concentrations.eyebrow}
          title={concentrations.title}
          copy={concentrations.copy}
        />
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {concentrations.items.map(({ title, spec, copy, status }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white border border-[#D7C5AE] shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-['DM_Serif_Display',Georgia,serif] text-3xl font-bold text-[#143D2B]">
                  {spec}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#143D2B] text-white font-extrabold text-[10px] uppercase">
                  {status}
                </span>
              </div>
              <strong className="text-base font-bold text-[#14211A] block">
                {title}
              </strong>
              <p className="text-xs text-[#526057] leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. SPECIFICATIONS TABLE SECTION */
export function ChemicalSpecificationsSection({ specifications = {} }) {
  if (!specifications.items?.length) return null;
  return (
    <section
      id="specifications"
      className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}
    >
      <div className={container}>
        <Heading
          eyebrow={specifications.eyebrow}
          title={specifications.title}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="overflow-hidden rounded-2xl border border-[#D9D3C8] bg-white shadow-2xs">
            {specifications.items.map(([label, value]) => (
              <div
                className="grid gap-2 border-b border-[#E7E1D8] p-4 text-xs sm:text-sm last:border-b-0 sm:grid-cols-2"
                key={label}
              >
                <span className="text-[#65736A] font-medium">{label}</span>
                <strong className="text-[#14211A] font-bold">{value}</strong>
              </div>
            ))}
          </div>
          {specifications.alert && (
            <aside className="rounded-2xl bg-[#F4EADD] p-6 border border-[#D7C5AE] space-y-3">
              <FlaskConical className="text-[#D99143]" size={36} />
              {specifications.alert.eyebrow && (
                <p className="text-xs font-bold uppercase tracking-[.15em] text-[#8E510D]">
                  {specifications.alert.eyebrow}
                </p>
              )}
              {specifications.alert.title && (
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                  {specifications.alert.title}
                </h3>
              )}
              {specifications.alert.paragraph1 && (
                <p className="text-xs sm:text-sm leading-relaxed text-[#526057]">
                  {specifications.alert.paragraph1}
                </p>
              )}
              {specifications.alert.paragraph2 && (
                <p className="text-xs sm:text-sm leading-relaxed text-[#526057]">
                  {specifications.alert.paragraph2}
                </p>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

/* 8. LOCATIONS SECTION */
export function ChemicalLocationsSection({ locations = {} }) {
  if (!locations.items?.length) return null;
  return (
    <section className="bg-[#143D2B] py-14 text-white sm:py-20">
      <div className={container}>
        <Heading light eyebrow={locations.eyebrow} title={locations.title} />
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {locations.items.map((loc) => (
            <div
              key={loc.city}
              className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#D99143] text-[#14211A] text-[10px] font-extrabold uppercase">
                  {loc.tag}
                </span>
                <MapPin className="text-[#F3C88D]" size={20} />
              </div>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-white">
                {loc.city}, {loc.state}
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9. SAFETY & SDS SECTION */
export function ChemicalSafetySection({ safety = {} }) {
  if (!safety.title) return null;
  return (
    <section className="bg-[#0C1612] py-14 text-white sm:py-20 border-b border-white/10">
      <div className={`${container} space-y-6`}>
        <Heading
          light
          eyebrow={safety.eyebrow}
          title={safety.title}
          copy={safety.warning}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {safety.controls?.map((ctrl, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 flex items-center gap-3"
            >
              <ShieldCheck className="text-[#D99143] shrink-0" size={18} />
              <span>{ctrl}</span>
            </div>
          ))}
        </div>
        {safety.cta && (
          <div className="pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#14211A] transition hover:bg-[#E7B572]"
              href={safety.cta.href}
            >
              <FileText size={16} />
              <span>{safety.cta.text}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* 10. FAQS SECTION */
export function ChemicalFaqsSection({ faqs = {} }) {
  if (!faqs.items?.length) return null;
  return (
    <section
      id="faq"
      className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}
    >
      <div className={`${container} grid gap-10 lg:grid-cols-[.8fr_1.2fr]`}>
        <Heading eyebrow={faqs.eyebrow} title={faqs.title} />
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="rounded-2xl border border-[#D9D3C8] bg-white px-5 sm:px-7"
        >
          {faqs.items.map(({ question, answer }, index) => (
            <AccordionItem
              value={`faq-${index}`}
              key={question}
              className="border-[#E7E1D8]"
            >
              <AccordionTrigger className="py-5 text-left text-sm sm:text-base font-bold no-underline hover:no-underline">
                <span className="mr-3 text-xs text-[#8E510D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-7 text-xs sm:text-sm leading-relaxed text-[#65736A]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* 11. ENQUIRY FORM SECTION */
export function ChemicalEnquirySection({ enquiry = {} }) {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    concentration: "",
    application: "",
    quantity: "",
    requirementBasis: "",
    frequency: "",
    destination: "",
    documentation: "",
    details: "",
  });

  if (!enquiry.title) return null;

  const update = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "chemical",
        formSource: "chemical-detail",
        productCategory: enquiry.category || "Industrial Chemicals",
        productName: enquiry.productName || "Formaldehyde Solution",

        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,

        thickness: form.concentration,
        quantity: form.quantity
          ? `${form.quantity} (${form.requirementBasis || "Regular supply"})`
          : "",
        details: `Application: ${form.application} | Frequency: ${form.frequency} | Destination: ${form.destination} | Docs: ${form.documentation} | Notes: ${form.details}`,
      });

      setSent(true);
    } catch (err) {
      setSubmitError(
        err.message ||
          "Failed to submit chemical quote enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="bg-[#143D2B] py-14 text-white sm:py-20">
      <div className={`${container} grid gap-10 lg:grid-cols-[.85fr_1.15fr]`}>
        <div className="space-y-4">
          <Heading light eyebrow={enquiry.eyebrow} title={enquiry.title} />
          {enquiry.copy && (
            <p className="text-xs sm:text-base leading-relaxed text-white/80">
              {enquiry.copy}
            </p>
          )}
          <div className="pt-4 space-y-2 text-xs">
            <span className="block text-white/60">
              Direct Chemical Plant Desk:
            </span>
            {enquiry.phoneLink && (
              <a
                className="block font-bold text-white hover:text-[#E7B572]"
                href={enquiry.phoneLink}
              >
                📞 {enquiry.phoneText || "+91 70150 85556"}
              </a>
            )}
          </div>
        </div>

        <form
          className="rounded-2xl bg-white p-6 text-[#14211A] shadow-2xl sm:p-8 space-y-4"
          onSubmit={handleSubmit}
        >
          {submitError && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-800">
              {submitError}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Company Name *">
              <input
                required
                value={form.companyName}
                onChange={update("companyName")}
                placeholder="Industrial firm name"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Contact Person *">
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Phone Number *">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 · · · · ·"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Business Email *">
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="procurement@company.com"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Formaldehyde Concentration %">
              <select
                value={form.concentration}
                onChange={update("concentration")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              >
                <option value="Formaldehyde 37%">Formaldehyde 37%</option>
                <option value="Formaldehyde 43%">Formaldehyde 43%</option>
                <option value="Other / Custom Spec">
                  Other / Discuss Specification
                </option>
              </select>
            </Field>
            <Field label="Intended Application">
              <input
                placeholder="e.g. Plywood Resin Manufacturing"
                value={form.application}
                onChange={update("application")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Quantity (Tons)">
              <input
                value={form.quantity}
                onChange={update("quantity")}
                placeholder="e.g. 20 Tons Tanker"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Requirement Basis">
              <select
                value={form.requirementBasis}
                onChange={update("requirementBasis")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              >
                <option>Recurring Monthly Tanker</option>
                <option>One-Time Spot Purchase</option>
                <option>Trial Order</option>
              </select>
            </Field>
            <Field label="Delivery Frequency">
              <input
                value={form.frequency}
                onChange={update("frequency")}
                placeholder="e.g. Weekly"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Destination City / State / Port *">
              <input
                required
                value={form.destination}
                onChange={update("destination")}
                placeholder="e.g. Yamunanagar / Morbi"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Required Documentation">
              <select
                value={form.documentation}
                onChange={update("documentation")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              >
                <option>Batch Certificate of Analysis (CoA)</option>
                <option>CoA + Safety Data Sheet (SDS)</option>
                <option>Full Technical Spec Sheet</option>
              </select>
            </Field>
          </div>

          <Field label="Technical Notes / Custom Parameters">
            <textarea
              rows={3}
              value={form.details}
              onChange={update("details")}
              placeholder="Formic acid acidity limits, methanol stabilizer %, tanker unloading specs..."
              className="w-full rounded-lg border border-[#CAD4CC] p-3 text-xs outline-none focus:border-[#143D2B] resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#143D2B] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D] cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Request Industrial Quote"}{" "}
            <ArrowRight size={16} />
          </button>

          {sent && (
            <p className="text-center text-xs font-bold text-[#143D2B]">
              Thank you! Your chemical quote request has been received. Our
              Yamunanagar / Morbi plant team will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* MASTER CHEMICAL SUB-PRODUCT TEMPLATE COMPONENT */
export function ChemicalSubProductPage({ productData }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "crafted-heritage");
    if (productData?.pageTitle) {
      document.title = `${productData.pageTitle} | Pentagon Plywood`;
    }
  }, [productData?.pageTitle]);

  if (!productData) return null;

  return (
    <div className="chemical-sub-product-page overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ChemicalHeroSection
        hero={productData.hero}
        breadcrumbs={productData.breadcrumbs}
      />
      <ChemicalQuickFactsSection quickFacts={productData.quickFacts} />
      <ChemicalOverviewSection overview={productData.overview} />
      {productData.processChain && (
        <ChemicalProcessChainSection processChain={productData.processChain} />
      )}
      <ChemicalApplicationsSection applications={productData.applications} />
      {productData.concentrations && (
        <ChemicalConcentrationsSection
          concentrations={productData.concentrations}
        />
      )}
      <ChemicalSpecificationsSection
        specifications={productData.specifications}
      />
      <ChemicalLocationsSection locations={productData.locations} />
      <ChemicalSafetySection safety={productData.safety} />
      <ChemicalFaqsSection faqs={productData.faqs} />
      <ChemicalEnquirySection enquiry={productData.enquiry} />
    </div>
  );
}

export default ChemicalSubProductPage;
