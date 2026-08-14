/* Pentagon Plywood - Tailored Flush Door Master Product Template (FlushSubProductPage.jsx) */

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
  DoorClosed,
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
  Droplet,
  FlaskConical,
  Trees,
  Lock,
} from "lucide-react";

const iconMap = {
  Shield,
  Drop: Droplet,
  Ruler,
  Factory,
  Layers,
  FlaskConical,
  Trees,
  DoorClosed,
  Lock,
  Wrench,
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
export function DoorHeroSection({ hero = {}, breadcrumbs = [] }) {
  if (!hero.title) return null;
  return (
    <section className="relative isolate overflow-hidden bg-[#161210] pb-12 text-white border-b border-white/10">
      {hero.heroBg && (
        <img
          src={hero.heroBg}
          alt="Door interior architecture background"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-right opacity-40 lg:w-[62%] lg:opacity-100"
        />
      )}
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[#161210]/85 lg:w-[72%] lg:rounded-r-[48%] lg:bg-[#161210]" />
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
                  <DoorClosed size={14} className="text-[#F3C88D]" />
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
                💡 {hero.subDescription}
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
                  alt={hero.productImageAlt || "Flush door shutter"}
                  className="aspect-[4/5] w-full object-cover"
                />
                {hero.productImageBadge && (
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#143D2B] px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-md border border-white/20">
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
export function DoorQuickFactsSection({ quickFacts = [] }) {
  if (!quickFacts.length) return null;
  return (
    <div className="bg-[#161210] pb-12">
      <div className={container}>
        <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(({ label, value, icon }) => {
            const Icon = iconMap[icon] || DoorClosed;
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
export function DoorOverviewSection({ overview = {} }) {
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
              alt="Flush door shutter construction"
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

/* 4. FLUSH DOOR SHUTTER ANATOMY SECTION */
export function DoorAnatomySection({ anatomy = {} }) {
  if (!anatomy.parts?.length) return null;
  return (
    <section className="bg-[#F4EADD] py-14 sm:py-20 border-b border-[#D7C5AE]">
      <div className={container}>
        <Heading
          eyebrow={anatomy.eyebrow}
          title={anatomy.title}
          copy={anatomy.lead}
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {anatomy.parts.map((part, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D7C5AE] shadow-2xs space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#143D2B] text-white text-xs font-bold flex items-center justify-center">
                0{idx + 1}
              </div>
              <strong className="text-sm font-bold text-[#14211A] block">
                {part.name}
              </strong>
              <p className="text-xs text-[#65736A] leading-relaxed">
                {part.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. BENEFITS SECTION */
export function DoorBenefitsSection({ benefits = {} }) {
  if (!benefits.items?.length) return null;
  return (
    <section className="bg-[#FDFBF8] py-14 sm:py-20 border-b border-[#E2DDD5]">
      <div className={container}>
        <Heading eyebrow={benefits.eyebrow} title={benefits.title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map(({ number, title, copy }) => (
            <article
              className="rounded-2xl border border-[#D9D3C8] bg-white p-6 shadow-2xs space-y-3"
              key={number + title}
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#8E510D] block">
                {number}
              </span>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                {title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#65736A]">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. APPLICATIONS GALLERY SECTION */
export function DoorApplicationsSection({ applications = {} }) {
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

/* 7. LIMITATIONS SECTION */
export function DoorLimitationsSection({ limitations = {} }) {
  if (!limitations.items?.length) return null;
  return (
    <section
      id="limitations"
      className="bg-[#143D2B] py-14 text-white sm:py-20"
    >
      <div
        className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16 items-center`}
      >
        <Heading
          light
          eyebrow={limitations.eyebrow}
          title={limitations.title}
          copy={limitations.copy}
        />
        <div className="space-y-4">
          <ul className="space-y-3">
            {limitations.items.map((item) => (
              <li
                className="flex items-center gap-3 text-xs sm:text-sm text-white/90"
                key={item}
              >
                <span className="text-[#D99143] font-bold text-base">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {limitations.footnote && (
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/75 italic">
              {limitations.footnote}
            </p>
          )}
          {limitations.cta && (
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#14211A] transition hover:bg-[#E7B572]"
                href={limitations.cta.href}
              >
                <span>{limitations.cta.text}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* 8. SPECIFICATIONS SECTION */
export function DoorSpecificationsSection({ specifications = {} }) {
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
              <Shield className="text-[#D99143]" size={36} />
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
              {specifications.alert.linkHref && (
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#143D2B] hover:text-[#D99143] pt-2"
                  href={specifications.alert.linkHref}
                >
                  <span>
                    {specifications.alert.linkText || "View information"}
                  </span>
                  <ArrowRight size={16} />
                </a>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

/* 9. THICKNESS GUIDE SECTION */
export function DoorThicknessGuideSection({ thicknessGuide = {} }) {
  if (!thicknessGuide.items?.length) return null;
  return (
    <section
      id="thickness-guide"
      className="bg-[#F4EADD] py-14 sm:py-20 border-b border-[#D7C5AE]"
    >
      <div className={container}>
        <Heading
          eyebrow={thicknessGuide.eyebrow}
          title={thicknessGuide.title}
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {thicknessGuide.items.map(({ size, strength, use, duty }) => (
            <div
              key={size}
              className="p-6 rounded-2xl bg-white border border-[#D7C5AE] shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-['DM_Serif_Display',Georgia,serif] text-3xl font-bold text-[#143D2B]">
                  {size}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#F4EADD] text-[#8E510D] font-extrabold text-[10px] uppercase">
                  {duty}
                </span>
              </div>
              <p className="text-xs text-[#526057] leading-relaxed pt-1">
                {use}
              </p>
            </div>
          ))}
        </div>
        {thicknessGuide.note && (
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#D7C5AE] bg-white p-5 lg:flex-row lg:items-center justify-between">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#526057]">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#143D2B] text-xs font-bold text-white">
                i
              </span>
              <span>{thicknessGuide.note}</span>
            </div>
            {thicknessGuide.cta && (
              <a
                className={`${outlineButton} shrink-0`}
                href={thicknessGuide.cta.href}
              >
                {thicknessGuide.cta.text} <ArrowRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* 10. COMPARISON MATRIX SECTION */
export function DoorComparisonSection({ comparison = {} }) {
  if (!comparison.rows?.length) return null;
  return (
    <section
      id="comparison"
      className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}
    >
      <div className={container}>
        <Heading
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          copy={comparison.copy}
        />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#D9D3C8] bg-white shadow-md">
          <div className="min-w-[720px]">
            {comparison.columns && (
              <div className="grid grid-cols-4 bg-[#143D2B] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white">
                {comparison.columns.map((col, idx) => (
                  <span key={col + idx}>{col}</span>
                ))}
              </div>
            )}
            {comparison.rows.map((row, idx) => (
              <div
                className={`grid grid-cols-4 gap-4 border-b border-[#E7E1D8] px-5 py-4 text-xs sm:text-sm last:border-b-0 ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#F4EADD]/30"
                }`}
                key={row[0]}
              >
                {row.map((cell, index) =>
                  index === 0 ? (
                    <strong className="font-bold text-[#14211A]" key={cell}>
                      {cell}
                    </strong>
                  ) : (
                    <p className="text-[#526057]" key={cell}>
                      {cell}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 11. FINISHES SECTION */
export function DoorFinishesSection({ finishes = {} }) {
  if (!finishes.items?.length) return null;
  return (
    <section className="bg-[#F4EADD] py-14 sm:py-20 border-b border-[#D7C5AE]">
      <div
        className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}
      >
        {finishes.surfaceImage && (
          <figure className="overflow-hidden rounded-3xl border border-[#D7C5AE] shadow-lg">
            <img
              src={finishes.surfaceImage}
              alt="Flush door surface finishing base"
              className="aspect-square w-full object-cover"
            />
            {finishes.surfaceCaption && (
              <figcaption className="bg-[#143D2B] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white">
                {finishes.surfaceCaption}
              </figcaption>
            )}
          </figure>
        )}
        <div className="space-y-4">
          <Heading eyebrow={finishes.eyebrow} title={finishes.title} />
          {finishes.copy && (
            <p className="text-xs sm:text-base leading-relaxed text-[#526057]">
              {finishes.copy}
            </p>
          )}
          <div className="flex flex-wrap gap-2 pt-1">
            {finishes.items.map((finish) => (
              <span
                className="rounded-full border border-[#D7C5AE] bg-white px-4 py-2 text-xs font-bold text-[#143D2B]"
                key={finish}
              >
                {finish}
              </span>
            ))}
          </div>
          {finishes.checksTitle && (
            <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A] pt-2">
              {finishes.checksTitle}
            </h3>
          )}
          {finishes.checks && (
            <ul className="space-y-2.5">
              {finishes.checks.map((item) => (
                <li
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#526057]"
                  key={item}
                >
                  <Check className="shrink-0 text-[#143D2B]" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/* 12. QUALITY STANDARDS SECTION */
export function DoorQualitySection({ quality = {} }) {
  if (!quality.title) return null;
  return (
    <section
      id="quality"
      style={{ backgroundColor: "#0B2A1D" }}
      className="relative bg-[#0B2A1D] py-14 text-white sm:py-20 overflow-hidden border-t border-white/10"
    >
      <div
        className={`${container} relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]`}
      >
        <div className="space-y-5">
          {quality.eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#D99143]/50 text-[#F3C88D] font-bold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full">
              {quality.eyebrow}
            </div>
          )}

          <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl text-white">
            {quality.title}
          </h2>

          {quality.paragraphs && (
            <div className="space-y-3 text-xs sm:text-base text-white/85 leading-relaxed">
              {quality.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
        </div>

        {quality.badge && (
          <div className="flex justify-center">
            <div className="w-full max-w-xs rounded-3xl bg-[#071D14] border border-white/20 p-6 text-center shadow-2xl">
              <div className="mx-auto grid aspect-square w-48 place-items-center rounded-full border-4 border-[#D99143] bg-[#0B2A1D] p-3">
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#F3C88D]">
                    INDIAN STANDARD
                  </span>
                  <strong className="block font-['DM_Serif_Display',Georgia,serif] text-4xl text-white my-1">
                    IS {quality.badge.isNumber}
                  </strong>
                  <small className="block text-[10px] font-bold uppercase tracking-wider text-white/80">
                    YEAR {quality.badge.year}
                  </small>
                  <p className="mt-1 text-[11px] font-medium text-white/90">
                    {quality.badge.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* 13. WHY PENTAGON SECTION */
export function DoorWhyPentagonSection({ whyPentagon = {} }) {
  if (!whyPentagon.items?.length) return null;
  return (
    <section className={`${section} bg-[#FDFBF8] border-b border-[#E2DDD5]`}>
      <div className={container}>
        <Heading eyebrow={whyPentagon.eyebrow} title={whyPentagon.title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whyPentagon.items.map(({ number, title, copy }) => (
            <article
              className="rounded-2xl border border-[#D9D3C8] bg-white p-6 shadow-2xs space-y-3"
              key={number + title}
            >
              <span className="text-xs font-extrabold text-[#143D2B]">
                {number}
              </span>
              <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                {title}
              </h3>
              <p className="text-xs text-[#65736A] leading-relaxed">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 14. BULK SECTION */
export function DoorBulkSection({ bulkSection = {} }) {
  if (!bulkSection.title) return null;
  return (
    <section className="bg-[#143D2B] text-white py-14 sm:py-20 border-t border-white/10">
      <div className={`${container} grid gap-10 lg:grid-cols-12 items-center`}>
        <div className="lg:col-span-6 space-y-5">
          {bulkSection.eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#D99143]/50 text-[#F3C88D] font-bold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full">
              {bulkSection.eyebrow}
            </div>
          )}

          <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-white">
            {bulkSection.title}
          </h2>

          {bulkSection.copy && (
            <p className="text-xs sm:text-base leading-relaxed text-white/85">
              {bulkSection.copy}
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {bulkSection.primaryCta && (
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#14211A] hover:bg-[#E7B572]"
                href={bulkSection.primaryCta.href}
              >
                {bulkSection.primaryCta.text} <ArrowRight size={16} />
              </a>
            )}
            {bulkSection.secondaryCta && (
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20"
                href={bulkSection.secondaryCta.href}
              >
                {bulkSection.secondaryCta.text} <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

        {bulkSection.useCases?.length > 0 && (
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
              {bulkSection.useCases.map((item, index) => (
                <div
                  className="border-b border-r border-white/15 p-4 text-xs font-semibold text-white/90 flex items-center gap-3"
                  key={item}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded bg-white/15 text-white font-bold text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* 15. FAQS SECTION */
export function DoorFaqsSection({ faqs = {} }) {
  if (!faqs.items?.length) return null;
  return (
    <section
      id="mr-faq"
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

/* 16. ENQUIRY FORM SECTION */
export function DoorEnquirySection({ enquiry = {} }) {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    customerType: "",
    application: "",
    thickness: "",
    sheetSize: "",
    quantity: "",
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
        enquiryType: "product",
        formSource: "flush-door-detail",
        productCategory: enquiry.category || "Flush Doors",
        productName: enquiry.productName || "MR Grade Flush Door",

        name: form.name,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,
        customerType: form.customerType,
        application: form.application,

        thickness: form.thickness,
        quantity: form.quantity
          ? `${form.quantity} (${form.sheetSize || "Standard size"})`
          : "",
        details: form.details,
      });

      setSent(true);
    } catch (err) {
      setSubmitError(
        err.message || "Failed to submit door enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="mr-enquiry" className="bg-[#143D2B] py-14 text-white sm:py-20">
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
              Prefer direct factory consultation?
            </span>
            {enquiry.phoneLink && (
              <a
                className="block font-bold text-white hover:text-[#E7B572]"
                href={enquiry.phoneLink}
              >
                📞 {enquiry.phoneText || "+91 70150 85556"}
              </a>
            )}
            {enquiry.whatsappLink && (
              <a
                className="block font-bold text-[#F3C88D] hover:underline"
                href={enquiry.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                💬 {enquiry.whatsappText || "WhatsApp Factory Team"}
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
            <Field label="Name *">
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Company / Firm">
              <input
                value={form.companyName}
                onChange={update("companyName")}
                placeholder="Company name"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Phone number *">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 · · · · ·"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Email address *">
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Customer type">
              <select
                value={form.customerType}
                onChange={update("customerType")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              >
                <option value="" disabled>
                  Select customer type
                </option>
                <option>Homeowner</option>
                <option>Door Fabricator</option>
                <option>Architect / Interior Designer</option>
                <option>Dealer / Distributor</option>
                <option>Project Builder / Bulk Buyer</option>
              </select>
            </Field>
            <Field label="Application / Room">
              <input
                required
                value={form.application}
                onChange={update("application")}
                placeholder="e.g. Bedroom doors"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Thickness">
              <select
                value={form.thickness}
                onChange={update("thickness")}
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              >
                <option value="">Select thickness</option>
                {(
                  enquiry.thicknesses || ["30 mm", "32 mm", "35 mm", "40 mm"]
                ).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Door Dimensions">
              <input
                value={form.sheetSize}
                onChange={update("sheetSize")}
                placeholder="e.g. 84×36 in"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
            <Field label="Quantity">
              <input
                value={form.quantity}
                onChange={update("quantity")}
                placeholder="Shutters / Nos"
                className="w-full min-h-[42px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <Field label="Additional Requirement Details">
            <textarea
              rows={3}
              value={form.details}
              onChange={update("details")}
              placeholder="Frame rebate depth, lock mortise specs, delivery location city..."
              className="w-full rounded-lg border border-[#CAD4CC] p-3 text-xs outline-none focus:border-[#143D2B] resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#143D2B] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D] cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Door Requirement"}{" "}
            <ArrowRight size={16} />
          </button>

          {sent && (
            <p className="text-center text-xs font-bold text-[#143D2B]">
              Thank you! Your door inquiry has been received. Our Yamunanagar
              team will reach out shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* MASTER FLUSH DOOR SUB-PRODUCT TEMPLATE COMPONENT */
export function FlushSubProductPage({ productData }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "crafted-heritage");
    if (productData?.pageTitle) {
      document.title = `${productData.pageTitle} | Pentagon Plywood`;
    }
  }, [productData?.pageTitle]);

  if (!productData) return null;

  return (
    <div className="flush-sub-product-page overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <DoorHeroSection
        hero={productData.hero}
        breadcrumbs={productData.breadcrumbs}
      />
      <DoorQuickFactsSection quickFacts={productData.quickFacts} />
      <DoorOverviewSection overview={productData.overview} />
      {productData.anatomy && (
        <DoorAnatomySection anatomy={productData.anatomy} />
      )}
      <DoorBenefitsSection benefits={productData.benefits} />
      <DoorApplicationsSection applications={productData.applications} />
      <DoorLimitationsSection limitations={productData.limitations} />
      <DoorSpecificationsSection specifications={productData.specifications} />
      <DoorThicknessGuideSection thicknessGuide={productData.thicknessGuide} />
      <DoorComparisonSection comparison={productData.comparison} />
      <DoorFinishesSection finishes={productData.finishes} />
      <DoorQualitySection quality={productData.quality} />
      <DoorWhyPentagonSection whyPentagon={productData.whyPentagon} />
      <DoorBulkSection bulkSection={productData.bulkSection} />
      <DoorFaqsSection faqs={productData.faqs} />
      <DoorEnquirySection enquiry={productData.enquiry} />
    </div>
  );
}

export default FlushSubProductPage;
