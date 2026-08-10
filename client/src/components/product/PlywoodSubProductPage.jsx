import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Factory,
  Layers,
  Ruler,
  Shield,
  Droplet,
  FlaskConical,
  Trees,
} from "lucide-react";

const iconMap = { Shield, Drop: Droplet, Ruler, Factory, Layers, FlaskConical, Trees };
const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const section = "py-16 sm:py-20 lg:py-28";
const darkButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B2A1D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D99143]";
const outlineButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-current px-5 py-3 text-sm font-semibold transition hover:bg-[#143D2B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D99143]";

export function Heading({ eyebrow, title, copy, light = false, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-[#E7B572]" : "text-[#9C6846]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`font-['DM_Serif_Display',Georgia,serif] text-3xl leading-[1.05] sm:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-[#14211A]"
          }`}
        >
          {title}
        </h2>
      )}
      {copy && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${
            light ? "text-white/75" : "text-[#65736A]"
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

{/* 1. HERO SECTION */}
export function ProductHeroSection({ hero = {}, breadcrumbs = [] }) {
  if (!hero.title) return null;
  return (
    <section className="relative isolate overflow-hidden bg-[#1A1512] pb-12 text-white">
      {hero.heroBg && (
        <img
          src={hero.heroBg}
          alt="Background interior architecture"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-right opacity-45 lg:w-[62%] lg:opacity-100"
        />
      )}
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[#1A1512]/80 lg:w-[72%] lg:rounded-r-[48%] lg:bg-[#1A1512]" />
      <div className="absolute bottom-20 left-[5%] -z-10 h-36 w-52 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px]" />
      <div className={container}>
        {breadcrumbs.length > 0 && (
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 py-6 text-xs text-white/65"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map(([label, href], index) => (
              <span key={label + index} className="flex items-center gap-2">
                {index > 0 && <span>›</span>}
                {href ? (
                  <a className="transition hover:text-white" href={href}>
                    {label}
                  </a>
                ) : (
                  <strong className="text-white">{label}</strong>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid items-center gap-10 pb-12 lg:grid-cols-[1.1fr_.9fr] lg:pb-20">
          <div className="max-w-2xl py-8 lg:py-14">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.16em]">
              {hero.categoryBadge && <span>{hero.categoryBadge}</span>}
              {hero.gradeBadge && (
                <span className="rounded-full border border-[#D99143]/60 bg-[#D99143]/15 px-3 py-1 text-[#F3C88D]">
                  {hero.gradeBadge}
                </span>
              )}
            </div>

            <h1 className="font-['DM_Serif_Display',Georgia,serif] text-5xl leading-[.96] sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            {hero.description && (
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                {hero.description}
              </p>
            )}

            {hero.subDescription && (
              <p className="mt-4 max-w-xl leading-7 text-white/65">
                {hero.subDescription}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {hero.primaryCta && (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-5 py-3 text-sm font-semibold text-[#14211A] transition hover:bg-[#E7B572]"
                  href={hero.primaryCta.href}
                >
                  {hero.primaryCta.text} <ArrowRight size={16} />
                </a>
              )}
              {hero.secondaryCta && (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#14211A]"
                  href={hero.secondaryCta.href}
                >
                  {hero.secondaryCta.text} <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>

          {hero.productImage && (
            <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-[#FDFBF8] p-3 shadow-2xl lg:translate-y-8">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={hero.productImage}
                  alt={hero.productImageAlt || "Product sheet"}
                  className="aspect-[4/5] w-full object-cover"
                />
                {hero.productImageBadge && (
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#143D2B] px-3 py-2 text-[10px] font-bold tracking-[.13em] text-white">
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

{/* 2. QUICK FACTS BAR */}
export function ProductQuickFactsSection({ quickFacts = [] }) {
  if (!quickFacts.length) return null;
  return (
    <div className="bg-[#1A1512] pb-12">
      <div className={container}>
        <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(({ label, value, icon }) => {
            const Icon = iconMap[icon] || Shield;
            return (
              <div
                className="flex items-center gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                key={label}
              >
                <span className="grid size-10 place-items-center rounded-full bg-[#D99143]/20 text-[#F3C88D]">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/55">
                    {label}
                  </p>
                  <strong className="mt-1 block text-sm text-white">{value}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{/* 3. OVERVIEW SECTION */}
export function ProductOverviewSection({ overview = {} }) {
  if (!overview.title) return null;
  return (
    <section id="overview" className={section}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-20`}>
        {overview.edgeImage && (
          <figure className="overflow-hidden rounded-3xl bg-[#EDE5D9]">
            <img
              src={overview.edgeImage}
              alt="Veneer construction"
              className="aspect-[5/4] w-full object-cover"
            />
            {overview.edgeCaption && (
              <figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-[.12em] text-[#65736A]">
                {overview.edgeCaption}
              </figcaption>
            )}
          </figure>
        )}
        <div>
          <Heading eyebrow={overview.eyebrow} title={overview.title} />
          {overview.paragraphs && (
            <div className="mt-7 space-y-4 leading-7 text-[#526057]">
              {overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
          {overview.callout && (
            <div className="mt-6 rounded-2xl border-l-4 border-[#D99143] bg-[#F4EADD] p-5">
              <strong className="text-sm">{overview.callout.title}</strong>
              <p className="mt-2 text-sm leading-6 text-[#526057]">
                {overview.callout.copy}
              </p>
            </div>
          )}
          {overview.cta && (
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#143D2B] hover:underline"
              href={overview.cta.href}
            >
              {overview.cta.text} <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

{/* NEW AUTHENTIC BRAND SECTION 1: IN-HOUSE PATSON RESIN ADVANTAGE */}
export function ProductInHouseResinSection() {
  return (
    <section className="bg-[#0B2A1D] py-16 text-white sm:py-20 relative overflow-hidden">
      <div className={`${container} grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center`}>
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D99143]/20 border border-[#D99143]/40 text-[#F3C88D] text-xs font-extrabold uppercase tracking-wider">
            <FlaskConical size={14} />
            Backward Integrated Resin Control
          </span>
          <h2 className="mt-4 font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-5xl text-white">
            In-House Formaldehyde &amp; Synthetic Resin Synthesis.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
            Unlike manufacturers who source third-party resins, Pentagon operates its own specialized chemical plant (Patson Industries) in Yamunanagar. We synthesize our Phenol-Formaldehyde and Melamine adhesives under strict laboratory control.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <strong className="text-xl text-[#F3C88D] font-bold block">100% Core Bonding</strong>
              <span className="text-xs text-white/70">Uncompromised cross-linking for water-resistance</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <strong className="text-xl text-[#F3C88D] font-bold block">Low Emission</strong>
              <span className="text-xs text-white/70">E1 / E0 indoor air quality compliance</span>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-md space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D99143]/20 border border-[#D99143]/40 text-[#F3C88D] flex items-center justify-center">
            <FlaskConical size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">Chemical Division Synergy</h3>
          <p className="text-xs text-white/75 leading-relaxed">
            Every cubic meter of timber veneer is bonded using freshly cooked resin, ensuring maximum shear strength under wet and dry vacuum-pressure testing.
          </p>
        </div>
      </div>
    </section>
  );
}

{/* NEW AUTHENTIC BRAND SECTION 2: TIMBER GRAIN & CORE DENSITY INSPECTOR */}
export function ProductTimberGrainInspectorSection() {
  return (
    <section className="bg-[#F7F3EC] py-16 sm:py-20 border-y border-[#E2DDD5]">
      <div className={container}>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#9C6846]">
            AUTHENTIC TIMBER SELECTION
          </p>
          <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl leading-[1.05] sm:text-4xl text-[#14211A]">
            Selected Hardwood Timber Veneers &amp; Calibrated Core Plies.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#65736A] leading-relaxed">
            Pentagon inspects timber logs at the peeling stage. Each veneer layer is kiln-dried to optimal moisture content before automated core composition and hot pressing.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#143D2B]/10 text-[#143D2B] flex items-center justify-center font-bold">01</div>
            <h4 className="text-base font-bold text-[#14211A]">Log Peeling &amp; Drying</h4>
            <p className="text-xs text-[#65736A]">Veneers are peeled to uniform thickness and dried to prevent internal warping.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#143D2B]/10 text-[#143D2B] flex items-center justify-center font-bold">02</div>
            <h4 className="text-base font-bold text-[#14211A]">Resin Impregnation</h4>
            <p className="text-xs text-[#65736A]">In-house formulated resin coats every veneer layer evenly.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#143D2B]/10 text-[#143D2B] flex items-center justify-center font-bold">03</div>
            <h4 className="text-base font-bold text-[#14211A]">Hydraulic Hot Press</h4>
            <p className="text-xs text-[#65736A]">Pressed under high temperature and hydraulic tonnage for zero-void bonding.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* 4. BENEFITS SECTION */}
export function ProductBenefitsSection({ benefits = {} }) {
  if (!benefits.items?.length) return null;
  return (
    <section className="bg-[#F4EADD] py-16 sm:py-20">
      <div className={container}>
        <Heading eyebrow={benefits.eyebrow} title={benefits.title} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#D7C5AE] bg-[#D7C5AE] md:grid-cols-3">
          {benefits.items.map(({ number, title, copy }) => (
            <article className="bg-[#FDFBF8] p-7" key={number + title}>
              <span className="text-sm font-bold text-[#9C6846]">
                {number}
              </span>
              <h3 className="mt-8 font-['DM_Serif_Display',Georgia,serif] text-2xl">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-[#65736A]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* 5. APPLICATIONS GALLERY SECTION */}
export function ProductApplicationsSection({ applications = {} }) {
  if (!applications.items?.length) return null;
  return (
    <section id="applications" className={section}>
      <div className={container}>
        <Heading
          eyebrow={applications.eyebrow}
          title={applications.title}
          copy={applications.copy}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {applications.items.map(({ title, copy, image, alt }, index) => (
            <article
              className="group relative min-h-72 overflow-hidden rounded-2xl border border-[#D9D3C8] bg-white"
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
                    ? "bg-gradient-to-t from-[#14211A]/90 via-[#14211A]/20"
                    : "bg-[#F4EADD]"
                }`}
              />
              <div
                className={`relative flex h-full min-h-72 flex-col justify-end p-6 ${
                  image ? "text-white" : "text-[#14211A]"
                }`}
              >
                <span className="mb-auto text-xs font-bold tracking-[.15em] opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl">
                  {title}
                </h3>
                <p
                  className={`mt-3 leading-6 ${
                    image ? "text-white/80" : "text-[#65736A]"
                  }`}
                >
                  {copy}
                </p>
              </div>
            </article>
          ))}
        </div>
        {applications.cta && (
          <div className="mt-9 text-center">
            <a className={outlineButton} href={applications.cta.href}>
              {applications.cta.text} <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

{/* 6. LIMITATIONS SECTION */}
export function ProductLimitationsSection({ limitations = {} }) {
  if (!limitations.items?.length) return null;
  return (
    <section id="limitations" className="bg-[#143D2B] py-16 text-white sm:py-20">
      <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
        <Heading
          light
          eyebrow={limitations.eyebrow}
          title={limitations.title}
          copy={limitations.copy}
        />
        <div>
          <ul className="space-y-4">
            {limitations.items.map((item) => (
              <li className="flex gap-3 text-white/85" key={item}>
                <span className="text-[#E7B572]">×</span>
                {item}
              </li>
            ))}
          </ul>
          {limitations.footnote && (
            <p className="mt-7 leading-7 text-white/70">
              {limitations.footnote}
            </p>
          )}
          {limitations.cta && (
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#143D2B] transition hover:bg-[#F4EADD]"
              href={limitations.cta.href}
            >
              {limitations.cta.text} <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

{/* 7. SPECIFICATIONS SECTION */}
export function ProductSpecificationsSection({ specifications = {} }) {
  if (!specifications.items?.length) return null;
  return (
    <section id="specifications" className={section}>
      <div className={container}>
        <Heading eyebrow={specifications.eyebrow} title={specifications.title} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="overflow-hidden rounded-2xl border border-[#D9D3C8] bg-white">
            {specifications.items.map(([label, value]) => (
              <div
                className="grid gap-2 border-b border-[#E7E1D8] p-5 last:border-b-0 sm:grid-cols-2"
                key={label}
              >
                <span className="text-sm text-[#65736A]">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          {specifications.alert && (
            <aside className="rounded-2xl bg-[#F4EADD] p-7">
              <Shield className="text-[#D99143]" size={38} />
              {specifications.alert.eyebrow && (
                <p className="mt-6 text-xs font-bold uppercase tracking-[.15em] text-[#9C6846]">
                  {specifications.alert.eyebrow}
                </p>
              )}
              {specifications.alert.title && (
                <h3 className="mt-3 font-['DM_Serif_Display',Georgia,serif] text-3xl">
                  {specifications.alert.title}
                </h3>
              )}
              {specifications.alert.paragraph1 && (
                <p className="mt-4 text-sm leading-6 text-[#526057]">
                  {specifications.alert.paragraph1}
                </p>
              )}
              {specifications.alert.paragraph2 && (
                <p className="mt-4 text-sm leading-6 text-[#526057]">
                  {specifications.alert.paragraph2}
                </p>
              )}
              {specifications.alert.linkHref && (
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#143D2B] hover:underline"
                  href={specifications.alert.linkHref}
                >
                  {specifications.alert.linkText || "View information"}{" "}
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

{/* 8. THICKNESS GUIDE SECTION */}
export function ProductThicknessGuideSection({ thicknessGuide = {} }) {
  if (!thicknessGuide.items?.length) return null;
  return (
    <section id="thickness-guide" className="bg-[#F4EADD] py-16 sm:py-20">
      <div className={container}>
        <Heading
          eyebrow={thicknessGuide.eyebrow}
          title={thicknessGuide.title}
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#D7C5AE] bg-white">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[.7fr_1fr_1.8fr_.7fr] bg-[#143D2B] px-5 py-4 text-xs font-bold uppercase tracking-[.1em] text-white/70">
              <span>Thickness</span>
              <span>Application range</span>
              <span>Common starting applications</span>
              <span>Duty level</span>
            </div>
            {thicknessGuide.items.map(({ size, strength, use, duty }) => (
              <div
                className="grid grid-cols-[.7fr_1fr_1.8fr_.7fr] items-center gap-4 border-b border-[#E7E1D8] px-5 py-5 last:border-b-0"
                key={size}
              >
                <strong>{size}</strong>
                <span className="h-2 overflow-hidden rounded-full bg-[#E7E1D8]">
                  <i
                    className="block h-full rounded-full bg-[#D99143]"
                    style={{ width: `${strength}%` }}
                  />
                </span>
                <p className="text-sm leading-6 text-[#526057]">{use}</p>
                <span className="text-sm font-semibold text-[#143D2B]">
                  {duty}
                </span>
              </div>
            ))}
          </div>
        </div>
        {thicknessGuide.note && (
          <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-[#D7C5AE] bg-white p-5 lg:flex-row lg:items-center">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#143D2B] text-sm font-bold text-white">
              i
            </span>
            <p className="text-sm leading-6 text-[#526057]">
              {thicknessGuide.note}
            </p>
            {thicknessGuide.cta && (
              <a className={`${outlineButton} shrink-0`} href={thicknessGuide.cta.href}>
                {thicknessGuide.cta.text} <ArrowRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

{/* 9. COMPARISON MATRIX SECTION */}
export function ProductComparisonSection({ comparison = {} }) {
  if (!comparison.rows?.length) return null;
  return (
    <section id="grade-comparison" className={section}>
      <div className={container}>
        <Heading
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          copy={comparison.copy}
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#D9D3C8] bg-white">
          <div className="min-w-[760px]">
            {comparison.columns && (
              <div className="grid grid-cols-4 bg-[#143D2B] px-5 py-4 text-sm text-white">
                {comparison.columns.map((col, idx) => (
                  <span key={col + idx} className={idx > 0 ? "font-bold" : ""}>
                    {col}
                  </span>
                ))}
              </div>
            )}
            {comparison.rows.map((row) => (
              <div
                className="grid grid-cols-4 gap-4 border-b border-[#E7E1D8] px-5 py-5 text-sm last:border-b-0"
                key={row[0]}
              >
                {row.map((cell, index) =>
                  index === 0 ? (
                    <strong key={cell}>{cell}</strong>
                  ) : (
                    <p className="leading-6 text-[#526057]" key={cell}>
                      {cell}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        {comparison.cta && (
          <div className="mt-9 text-center">
            <a className={darkButton} href={comparison.cta.href}>
              {comparison.cta.text} <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

{/* 10. FINISHES SECTION */}
export function ProductFinishesSection({ finishes = {} }) {
  if (!finishes.items?.length) return null;
  return (
    <section className="bg-[#F4EADD] py-16 sm:py-20">
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-20`}>
        {finishes.surfaceImage && (
          <figure className="overflow-hidden rounded-3xl">
            <img
              src={finishes.surfaceImage}
              alt="Plain plywood surface"
              className="aspect-square w-full object-cover"
            />
            {finishes.surfaceCaption && (
              <figcaption className="bg-[#143D2B] px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-white/70">
                {finishes.surfaceCaption}
              </figcaption>
            )}
          </figure>
        )}
        <div>
          <Heading eyebrow={finishes.eyebrow} title={finishes.title} />
          {finishes.copy && (
            <p className="mt-6 leading-7 text-[#526057]">{finishes.copy}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {finishes.items.map((finish) => (
              <span
                className="rounded-full border border-[#D7C5AE] bg-white px-4 py-2 text-sm"
                key={finish}
              >
                {finish}
              </span>
            ))}
          </div>
          {finishes.checksTitle && (
            <h3 className="mt-8 font-['DM_Serif_Display',Georgia,serif] text-2xl">
              {finishes.checksTitle}
            </h3>
          )}
          {finishes.checks && (
            <ul className="mt-5 space-y-3">
              {finishes.checks.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-[#526057]" key={item}>
                  <Check className="mt-0.5 shrink-0 text-[#143D2B]" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {finishes.cta && (
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#143D2B] hover:underline"
              href={finishes.cta.href}
            >
              {finishes.cta.text} <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

{/* 11. QUALITY STANDARDS SECTION */}
export function ProductQualitySection({ quality = {}, content }) {
  const qualityData = quality?.title ? quality : (content || {});
  if (!qualityData.title) return null;
  return (
    <section
      id="quality"
      style={{ backgroundColor: "#0B2A1D" }}
      className="relative bg-[#0B2A1D] py-16 text-white sm:py-20 lg:py-24 overflow-hidden border-t border-white/10"
    >
      {/* Decorative Grid & Glow Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C86D51]/15 blur-3xl pointer-events-none" />

      <div className={`${container} relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16`}>
        <div className="space-y-6">
          {qualityData.eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#C86D51]/50 text-[#F2A995] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-md">
              {qualityData.eyebrow}
            </div>
          )}

          <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] text-white drop-shadow-sm">
            {qualityData.title}
          </h2>

          {qualityData.paragraphs && (
            <div className="max-w-2xl space-y-4 text-base sm:text-lg leading-[1.7] text-white/85">
              {qualityData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {qualityData.cta && (
            <div className="pt-2">
              <a
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all cursor-pointer"
                href={qualityData.cta.href}
              >
                {qualityData.cta.text} <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>

        {qualityData.badge && (
          <div className="flex justify-center">
            <div
              style={{ backgroundColor: "#071D14" }}
              className="w-full max-w-sm rounded-3xl bg-[#071D14] border border-white/20 p-8 text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-[#C86D51]/20 blur-2xl pointer-events-none" />
              <div
                style={{ backgroundColor: "#0B2A1D" }}
                className="mx-auto grid aspect-square w-56 h-56 place-items-center rounded-full border-[8px] border-[#C86D51] bg-[#0B2A1D] p-4 text-center shadow-inner relative z-10"
              >
                <div>
                  <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-[#E8927C]">
                    INDIAN STANDARD
                  </span>
                  <strong className="block font-['DM_Serif_Display',Georgia,serif] text-5xl font-bold text-white my-1">
                    IS {qualityData.badge.isNumber}
                  </strong>
                  <small className="block text-xs font-bold tracking-[0.18em] text-white/80 uppercase">
                    YEAR {qualityData.badge.year}
                  </small>
                  <p className="mt-2 text-xs font-medium text-white/90 px-2 leading-tight">
                    {qualityData.badge.label}
                  </p>
                  {qualityData.badge.sub && (
                    <em className="mt-1.5 block text-[11px] font-bold not-italic text-[#E8927C]">
                      {qualityData.badge.sub}
                    </em>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

{/* 12. WHY PENTAGON SECTION */}
export function ProductWhyPentagonSection({ whyPentagon = {} }) {
  if (!whyPentagon.items?.length) return null;
  return (
    <section className={section}>
      <div className={container}>
        <Heading eyebrow={whyPentagon.eyebrow} title={whyPentagon.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whyPentagon.items.map(({ number, title, copy }) => (
            <article className="rounded-2xl border border-[#D9D3C8] bg-white p-6" key={number + title}>
              <span className="text-sm font-bold text-[#143D2B]">{number}</span>
              <h3 className="mt-7 font-['DM_Serif_Display',Georgia,serif] text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#65736A]">{copy}</p>
              <ArrowRight className="mt-6 text-[#C86D51]" size={18} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* 13. BULK & TRADE SECTION */}
export function ProductBulkSection({ bulkSection = {} }) {
  if (!bulkSection.title) return null;
  return (
    <section
      style={{ backgroundColor: "#143D2B" }}
      className="relative bg-[#143D2B] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/10"
    >
      {/* Subtle Background Pattern & Blur Orb */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C86D51]/15 blur-3xl pointer-events-none" />

      <div className={`${container} relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center`}>
        <div className="lg:col-span-6 space-y-6">
          {bulkSection.eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#C86D51]/50 text-[#F2A995] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-md">
              {bulkSection.eyebrow}
            </div>
          )}

          <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] text-white">
            {bulkSection.title}
          </h2>

          {bulkSection.copy && (
            <p className="text-white/85 text-base sm:text-lg leading-[1.7] max-w-xl">
              {bulkSection.copy}
            </p>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
            {bulkSection.primaryCta && (
              <a
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#A85238] transition-all cursor-pointer"
                href={bulkSection.primaryCta.href}
              >
                {bulkSection.primaryCta.text} <ArrowRight size={16} />
              </a>
            )}
            {bulkSection.secondaryCta && (
              <a
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-7 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all backdrop-blur-md"
                href={bulkSection.secondaryCta.href}
              >
                {bulkSection.secondaryCta.text} <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

        {bulkSection.useCases?.length > 0 && (
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
              {bulkSection.useCases.map((item, index) => (
                <div
                  className="border-b border-r border-white/15 p-5 text-xs sm:text-sm font-semibold text-white/90 flex items-center gap-3 hover:bg-white/10 transition-colors"
                  key={item}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/15 text-white font-bold text-xs">
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

{/* 14. FAQS SECTION */}
export function ProductFaqsSection({ faqs = {} }) {
  if (!faqs.items?.length) return null;
  return (
    <section id="mr-faq" className={section}>
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
              <AccordionTrigger className="py-5 text-left text-base font-bold no-underline hover:no-underline">
                <span className="mr-4 text-xs text-[#9C6846]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-8 text-base leading-7 text-[#65736A]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

{/* 15. ENQUIRY FORM SECTION */}
export function ProductEnquirySection({ enquiry = {} }) {
  const [sent, setSent] = useState(false);
  if (!enquiry.title) return null;

  return (
    <section id="mr-enquiry" className="bg-[#143D2B] py-16 text-white sm:py-20">
      <div className={`${container} grid gap-10 lg:grid-cols-[.85fr_1.15fr]`}>
        <div>
          <Heading light eyebrow={enquiry.eyebrow} title={enquiry.title} />
          {enquiry.copy && (
            <p className="mt-6 max-w-xl leading-7 text-white/75">
              {enquiry.copy}
            </p>
          )}
          <div className="mt-8 space-y-3 text-sm">
            <span className="block text-white/55">
              Prefer speaking directly?
            </span>
            {enquiry.phoneLink && (
              <a
                className="block font-bold hover:text-[#E7B572]"
                href={enquiry.phoneLink}
              >
                {enquiry.phoneText || "Call Support"}
              </a>
            )}
            {enquiry.whatsappLink && (
              <a
                className="block font-bold hover:text-[#E7B572]"
                href={enquiry.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {enquiry.whatsappText || "WhatsApp our team"}
              </a>
            )}
          </div>
        </div>

        <form
          className="rounded-2xl bg-white p-6 text-[#14211A] shadow-2xl sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input required placeholder="Your full name" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
            <Field label="Company name">
              <input placeholder="Company / firm" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
            <Field label="Phone number">
              <input required type="tel" placeholder="+91 · · · · ·" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
            <Field label="Email address">
              <input type="email" placeholder="you@company.com" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
            <Field label="Customer type">
              <select defaultValue="" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]">
                <option value="" disabled>
                  Select customer type
                </option>
                <option>Homeowner</option>
                <option>Furniture maker</option>
                <option>Architect / Interior designer</option>
                <option>Dealer / Distributor</option>
                <option>Project / Bulk buyer</option>
              </select>
            </Field>
            <Field label="Furniture / application">
              <input required placeholder="e.g. wardrobe production" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Field label="Thickness">
              <select defaultValue="" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]">
                <option value="">Not sure</option>
                {(enquiry.thicknesses || ["4 mm", "6 mm", "9 mm", "12 mm", "15 mm", "18 mm"]).map(
                  (item) => (
                    <option key={item}>{item}</option>
                  )
                )}
              </select>
            </Field>
            <Field label="Sheet size">
              <select defaultValue="" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]">
                <option value="">Not sure</option>
                {(enquiry.sheetSizes || [
                  "8×4 ft",
                  "8×3 ft",
                  "7×4 ft",
                  "7×3 ft",
                  "6×4 ft",
                  "6×3 ft",
                ]).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Quantity">
              <input placeholder="Sheets / Sq.ft" className="w-full min-h-[44px] rounded-lg border border-[#CAD4CC] px-3 text-xs outline-none focus:border-[#143D2B]" />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Requirement details">
              <textarea
                rows={3}
                placeholder="Provide details on project location, delivery date or specific requirements."
                className="w-full rounded-lg border border-[#CAD4CC] p-3 text-xs outline-none focus:border-[#143D2B]"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#143D2B] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#0B2A1D] cursor-pointer"
          >
            Submit Inquiry <ArrowRight size={16} />
          </button>

          {sent && (
            <p className="mt-4 text-center text-xs font-bold text-[#143D2B]">
              Thank you! Your inquiry has been received. Our sales team will get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

{/* DEFAULT ALL-IN-ONE TEMPLATE COMPONENT */}
export function PlywoodSubProductPage({ productData }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "crafted-heritage");
    if (productData?.pageTitle) {
      document.title = `${productData.pageTitle} | Pentagon Plywood`;
    }
  }, [productData?.pageTitle]);

  if (!productData) return null;

  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <ProductHeroSection hero={productData.hero} breadcrumbs={productData.breadcrumbs} />
      <ProductQuickFactsSection quickFacts={productData.quickFacts} />
      <ProductOverviewSection overview={productData.overview} />
      <ProductTimberGrainInspectorSection />
      <ProductBenefitsSection benefits={productData.benefits} />
      <ProductApplicationsSection applications={productData.applications} />
      <ProductLimitationsSection limitations={productData.limitations} />
      <ProductSpecificationsSection specifications={productData.specifications} />
      <ProductThicknessGuideSection thicknessGuide={productData.thicknessGuide} />
      <ProductComparisonSection comparison={productData.comparison} />
      <ProductFinishesSection finishes={productData.finishes} />
      <ProductInHouseResinSection />
      <ProductQualitySection quality={productData.quality} />
      <ProductWhyPentagonSection whyPentagon={productData.whyPentagon} />
      <ProductBulkSection bulkSection={productData.bulkSection} />
      <ProductFaqsSection faqs={productData.faqs} />
      <ProductEnquirySection enquiry={productData.enquiry} />
    </div>
  );
}

export function ProductPageMetadata({ pageTitle }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-palette", "crafted-heritage");
    if (pageTitle) {
      document.title = `${pageTitle} | Pentagon Plywood`;
    }
  }, [pageTitle]);
  return null;
}

export const ProductFaqSection = ProductFaqsSection;
export const ProductEnvironmentSection = ProductLimitationsSection;

export default PlywoodSubProductPage;
