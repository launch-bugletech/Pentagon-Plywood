import { ArrowRight, Check } from "lucide-react";
import { CONTACT_SECTIONS, HOME_SECTIONS, ROUTES } from "../../app/routes.js";
// import manufacturingImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.jpg";
import manufacturingImage from "../../assets/homepage/plywood_press_factory.jpg";


const c = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const timeline = [
  [
    "1986",
    "The Beginning",
    "The group began as a timber merchant, trading wooden logs.",
  ],
  [
    "1987",
    "S. A. Timber Traders",
    "S. A. Timber Traders was formed in December 1987 for the trading of wooden logs and continues to operate today.",
  ],
  [
    "1991",
    "Entering Veneer Processing",
    "A peeling machine was installed to convert wooden logs into veneer, marking the group's first forward integration.",
  ],
  [
    "1995",
    "Expanding Veneer Capability",
    "Machinery was expanded with multiple peeling machines installed.",
  ],
  [
    "1996",
    "Pentagon Plywood Is Incorporated",
    "Pentagon Plywood Private Limited was incorporated on 20 September 1996.",
  ],
  [
    "1997",
    "Beginning Plywood Manufacturing",
    "Pressing units were installed at both units, converting veneer into plywood and marking the next forward integration.",
  ],
  [
    "2008",
    "Growth in Capacity and Reach",
    "Multiple machinery and land expansions doubled production capacity and expanded the business into cities across India.",
  ],
  [
    "2013",
    "Continued Expansion",
    "Further machinery and land expansion again increased the production capacity of S. A. Timber Traders and Pentagon Plywood.",
  ],
  [
    "2015–16",
    "Licensed Capacity Doubled",
    "The licensed production capacity was doubled, although actual production capacity was not increased at this stage.",
  ],
  [
    "2017",
    "Backward Integration Into Chemicals",
    "Synochem Organics Private Limited, a fully functional Formaldehyde manufacturing unit in Yamunanagar, was acquired. Formaldehyde is used to make resin, a major raw material for plywood.",
  ],
  [
    "2018",
    "Expanding Into Gujarat",
    "Patson Industries, a Formaldehyde manufacturer in Morbi, Gujarat, was acquired, expanding the group into a new territory.",
  ],
  [
    "2023",
    "Increased Chemical Capacity",
    "Patson Industries increased its production capacity from 60 MT per day to 120 MT per day.",
  ],
];
function OurStoryPage() {
  return (
    <div
      data-palette="pentagon-brand"
      className="home-theme bg-brand-cream text-brand-charcoal overflow-hidden font-sans"
    >
      <section className="relative isolate overflow-hidden bg-[#143D2B] text-white">
        <img
          src={manufacturingImage}
          className="absolute inset-0 -z-10 size-full object-cover opacity-20"
          alt="Manufacturing environment"
        />
        <div className={c}>
          <nav className="flex gap-2 py-6 text-xs text-white/65">
            <a href={ROUTES.home} className="hover:text-white transition">Home</a>
            <span>›</span>
            <a href={ROUTES.about} className="hover:text-white transition">About Us</a>
            <span>›</span>
            <strong className="text-white">Our Story</strong>
          </nav>
          <div className="max-w-4xl py-16 sm:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C86D51]">
              Since 1986
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[.95] sm:text-6xl">
              From Timber Trading to{" "}
              <span className="home-heading-accent-on-dark font-normal not-italic">Integrated Manufacturing.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              Pentagon’s journey began in 1986 with the trading of wooden logs
              in Yamunanagar, Haryana. It gradually grew into veneer processing,
              wood-based panel manufacturing and chemical manufacturing.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#8E510D] transition-all cursor-pointer shadow-md"
              href={ROUTES.manufacturing}
            >
              Explore Our Manufacturing <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className={c}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
            The Journey
          </p>
          <div className="mt-8 border-l border-[#D7C5AE] pl-6 sm:pl-10">
            {timeline.map(([year, title, copy], i) => (
              <article className="relative pb-9 last:pb-0" key={title}>
                <span className="absolute -left-[33px] grid size-4 place-items-center rounded-full bg-[#8E510D] text-[8px] text-white sm:-left-[49px]">
                  {i + 1}
                </span>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8E510D]">
                  {year}
                </p>
                <h2 className="mt-2 font-display text-2xl text-brand-charcoal">
                  {title}
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-brand-muted font-medium">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream-alt py-16 sm:py-20 border-y border-brand-border/60">
        <div className={`${c} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
              Built Through Continuous Improvement
            </p>
            <h2 className="mt-5 font-display text-4xl text-brand-charcoal">
              A practical approach to progress.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Upgrading machinery over time",
              "Adding new manufacturing capability",
              "Expanding into new markets across India",
              "Strengthening wood-panel production",
              "Diversifying into chemical manufacturing",
              "Building material understanding",
            ].map((x) => (
              <li className="flex gap-3 text-sm font-medium text-brand-charcoal" key={x}>
                <Check className="shrink-0 text-[#8E510D]" size={18} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className={`${c} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
              Leadership
            </p>
            <h2 className="mt-5 font-display text-4xl text-brand-charcoal">
              Experience guiding a long manufacturing journey.
            </h2>
          </div>
          <div className="rounded-2xl border border-brand-border bg-white p-7 shadow-xs">
            <p>
              <strong className="block text-xl text-brand-charcoal">Mr. Anand Jain</strong>
              <span className="text-brand-muted font-medium text-sm">Managing Director</span>
            </p>
            <p className="mt-5">
              <strong className="block text-xl text-brand-charcoal">Mr. Ashu Jain</strong>
              <span className="text-brand-muted font-medium text-sm">Director</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#143D2B] py-16 text-center text-white">
        <div className={c}>
          <h2 className="font-display text-4xl text-white">
            Experience Gives Us a Foundation. Improvement Keeps Us Moving.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#8E510D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#6B3200] transition-all cursor-pointer shadow-md"
              href={HOME_SECTIONS.products}
            >
              Explore Our Products <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-brand-charcoal transition-all cursor-pointer"
              href={CONTACT_SECTIONS.form}
            >
              Contact Pentagon <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default OurStoryPage;
