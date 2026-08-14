import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  Layers,
  MapPin,
  Users,
} from "lucide-react";
import {
  ABOUT_SECTIONS,
  CONTACT_SECTIONS,
  HOME_SECTIONS,
  ROUTES,
} from "@/app/routes.js";
// import manufacturingImage from "@/assets/homepage/Plywood-Manufacturing-1024x683.jpg";
import manufacturingImage from "@/assets/homepage/Plywood-Manufacturing-1024x683.png"; 
import interiorImage from "@/assets/product/Applications/Modern kitchen with cabinets and island.png";
import edgeImage from "@/assets/product/mr plywood/Wood veneer layers on plywood edge.png";
import plywoodImage from "@/assets/homepage/products/Marine-plywood-1000x1000.webp";

const c = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const section = "py-16 sm:py-20 lg:py-28";
const primary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B2A1D]";
const outline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-current px-5 py-3 text-sm font-bold transition hover:bg-[#143D2B] hover:text-white";

const facts = [
  ["Group journey began", "1986"],
  ["Pentagon Plywood incorporated", "20 September 1996"],
  ["Group sectors", "Wood-based panels and chemicals"],
  ["Manufacturing locations", "Yamunanagar, Haryana and Morbi, Gujarat"],
  ["Manufacturing units", "4"],
  ["Combined facility area", "Over 3.3 lakh sq. ft."],
  ["Wood-panel installed capacity", "5,000 m² per day"],
  ["Wood-panel licensed capacity", "10,000 m² per day"],
  ["Chemical installed capacity", "200 MT per day"],
  ["Team strength", "Approx. 390 people"],
  ["Combined turnover", "Approx. ₹100 crore in FY 2025–26"],
];
const timeline = [
  [
    "1986",
    "The Beginning",
    "The group began as a timber merchant, trading wooden logs.",
  ],
  [
    "1987",
    "S. A. Timber Traders",
    "S. A. Timber Traders was formed in December 1987 for wooden-log trading.",
  ],
  [
    "1991",
    "Moving Into Veneer Production",
    "The first peeling machine was installed, enabling logs to be converted into veneer.",
  ],
  [
    "1995",
    "Expanding Processing Capacity",
    "Additional peeling machines expanded veneer-processing capability.",
  ],
  [
    "1996",
    "Pentagon Plywood Is Incorporated",
    "Pentagon Plywood Private Limited was incorporated on 20 September 1996.",
  ],
  [
    "1986",
    "Beginning Plywood Manufacturing",
    "Pressing units enabled veneer to be converted into plywood.",
  ],
  [
    "2008",
    "Capacity and Market Expansion",
    "Machinery and land expansion doubled capacity and expanded into multiple cities across India.",
  ],
  [
    "2015–16",
    "Licensed Capacity Doubled",
    "Licensed production capacity was doubled, creating scope for future growth.",
  ],
  [
    "2017",
    "Backward Integration Into Chemicals",
    "Synochem Organics Private Limited, a Formaldehyde unit in Yamunanagar, became part of the group.",
  ],
  [
    "2018",
    "Expansion Into Gujarat",
    "Patson Industries, a Formaldehyde unit in Morbi, Gujarat, joined the group.",
  ],
  [
    "2023",
    "Increasing Chemical Capacity",
    "Patson Industries doubled production capacity from 60 MT per day to 120 MT per day.",
  ],
  [
    "Today",
    "Building on Experience",
    "The group continues to upgrade machinery, expand capabilities and diversify responsibly.",
  ],
];
const companies = [
  [
    "S. A. Timber Traders",
    "Incorporated on 1 April 1987, operating from Village Kami Majra, Khajuri Road, Yamunanagar, Haryana.",
  ],
  [
    "Pentagon Plywood Private Limited",
    "Incorporated on 20 September 1996, operating from Village Raipur, Khajuri Road, Yamunanagar, Haryana.",
  ],
  [
    "Synochem Organics Private Limited",
    "Operating from Manakpur, Chhachhrauli Road, Jagadhri, Yamunanagar, Haryana.",
  ],
  [
    "Patson Industries",
    "Operating from GIDC Vaghasia, Wankaner, Morbi, Gujarat.",
  ],
];
const principles = [
  [
    "Improvement Through Experience",
    "Years in manufacturing matter when they lead to better processes, stronger capabilities and more informed decisions.",
  ],
  [
    "Responsibility Before Claims",
    "We communicate products according to their verified grade, intended application and available specifications.",
  ],
  [
    "Respect for the Requirement",
    "We begin by understanding the actual requirement of each dealer, manufacturer, contractor and buyer.",
  ],
  [
    "Integration With Purpose",
    "Expansion into veneer processing, wood panels and Formaldehyde production strengthens the manufacturing foundation.",
  ],
  [
    "Relationships Beyond the Order",
    "Clear communication, reliable supply and accountable service build lasting working relationships.",
  ],
];
const audiences = [
  [
    "Dealers and Distributors",
    "Product information, supply discussions and support for trade requirements.",
  ],
  [
    "Furniture Manufacturers",
    "Wood panels and related materials selected around fabrication, finishing and intended furniture use.",
  ],
  [
    "Builders and Contractors",
    "Product discussions based on quantities, delivery schedules, site conditions and project requirements.",
  ],
  [
    "Architects and Interior Professionals",
    "Application-led guidance for furniture, doors, wall panelling and interior specifications.",
  ],
  [
    "Industrial Buyers",
    "Formaldehyde supply discussions for resin, plywood, laminate and related industrial manufacturing requirements.",
  ],
];
const faqs = [
  [
    "When did Pentagon’s journey begin?",
    "The group’s journey began in 1986 with timber trading. Pentagon Plywood Private Limited was incorporated on 20 September 1996.",
  ],
  [
    "Who leads Pentagon Plywood Private Limited?",
    "Mr. Anand Jain is the Managing Director, and Mr. Ashu Jain is a Director.",
  ],
  [
    "What does Pentagon manufacture?",
    "The group manufactures plywood, blockboard, flush doors and Formaldehyde through its wood-based panel and chemical manufacturing operations.",
  ],
  [
    "Where are Pentagon’s manufacturing units located?",
    "The group operates manufacturing units in Yamunanagar, Haryana and Morbi, Gujarat.",
  ],
  [
    "How many companies are part of the Pentagon Group?",
    "The group includes S. A. Timber Traders, Pentagon Plywood Private Limited, Synochem Organics Private Limited and Patson Industries.",
  ],
  [
    "Does Pentagon serve only wood-panel customers?",
    "No. The group also manufactures Formaldehyde for industrial requirements, including applications connected to resin and plywood manufacturing.",
  ],
  [
    "Can dealers, project buyers and manufacturers contact Pentagon directly?",
    "Yes. Contact the team to discuss products, quantities and delivery requirements.",
  ],
];

function Heading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[.18em] ${light ? "text-[#E7B572]" : "text-[#9C6846]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-['DM_Serif_Display',Georgia,serif] text-3xl leading-[1.05] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#14211A]"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-7 ${light ? "text-white/75" : "text-[#65736A]"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

function AboutPage() {
  useEffect(() => {
    document.title = "About Pentagon Plywood | Pentagon Group";
  }, []);
  return (
    <div className="overflow-hidden bg-[#FDFBF8] text-[#14211A]">
      <section
        id="story"
        className="relative isolate overflow-hidden bg-[#1A1512] text-white"
      >
        <img
          src={manufacturingImage}
          alt="Plywood manufacturing environment"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover opacity-35 lg:w-[58%] lg:opacity-100"
        />
        <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[#1A1512]/80 lg:w-[70%] lg:rounded-r-[45%] lg:bg-[#1A1512]" />
        <div className={c}>
          <nav
            className="flex gap-2 py-6 text-xs text-white/65"
            aria-label="Breadcrumb"
          >
            <a href={ROUTES.home} className="hover:text-white">
              Home
            </a>
            <span>›</span>
            <strong className="text-white">About Us</strong>
          </nav>
          <div className="grid items-center gap-8 py-14 lg:min-h-[620px] lg:grid-cols-[1.15fr_.85fr] lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E7B572]">
                Our Story
              </p>
              <h1 className="mt-5 max-w-3xl font-['DM_Serif_Display',Georgia,serif] text-5xl leading-[.95] sm:text-6xl lg:text-7xl">
                Built From Timber.{" "}
                <span className="text-[#E7B572]">
                  Strengthened Through Integration.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85">
                Pentagon Plywood is part of a manufacturing group whose journey
                began in 1986 with timber trading in Yamunanagar, Haryana.
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                The group expanded into veneer processing, wood-based panel
                manufacturing and chemical manufacturing building greater
                control across the materials and processes behind plywood
                production.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-5 py-3 text-sm font-bold text-[#14211A] hover:bg-[#E7B572]"
                  href={HOME_SECTIONS.products}
                >
                  Explore Our Products <ArrowRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-bold hover:bg-white hover:text-[#14211A]"
                  href={CONTACT_SECTIONS.form}
                >
                  Discuss Your Requirement <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="grid gap-3 self-end sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Journey began in 1986",
                "Pentagon Plywood incorporated in 1996",
                "Four manufacturing units across Yamunanagar and Morbi",
                "Wood panels, flush doors and industrial chemicals",
              ].map((item, i) => (
                <div
                  className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm backdrop-blur"
                  key={item}
                >
                  <span className="mr-3 text-[#E7B572]">0{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div
          className={`${c} grid items-center gap-10 lg:grid-cols-2 lg:gap-20`}
        >
          <div>
            <Heading
              eyebrow="Pentagon Group"
              title="We See More Than a Finished Board."
            />
            <div className="mt-7 space-y-4 leading-7 text-[#526057]">
              <p>
                A plywood sheet may become a wardrobe opened every morning, a
                door used throughout the day, furniture built for a home, or
                part of an entire commercial interior. That is why the work
                behind the surface matters.
              </p>
              <p>
                Pentagon Plywood Private Limited is part of the Pentagon Group
                of Companies, operating across wood-based panel manufacturing
                and chemical manufacturing.
              </p>
              <p>
                Our wood-based operations manufacture plywood, blockboard and
                flush doors. Our chemical operations manufacture Formaldehyde,
                an important raw material used in resin manufacturing for
                plywood and related industrial applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={interiorImage}
              alt="Wood-panel interior"
              className="mt-10 aspect-[3/4] rounded-3xl object-cover"
            />
            <img
              src={edgeImage}
              alt="Layered plywood edge"
              className="aspect-[3/4] rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F4EADD] py-16 sm:py-20">
        <div className={c}>
          <Heading
            eyebrow="Group Snapshot"
            title="A Manufacturing Group Built Through Steady Expansion."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#D7C5AE] bg-white">
            <div className="min-w-[680px]">
              {facts.map(([label, value]) => (
                <div
                  className="grid grid-cols-2 gap-8 border-b border-[#E7E1D8] px-6 py-4 last:border-b-0"
                  key={label}
                >
                  <span className="text-sm text-[#65736A]">{label}</span>
                  <strong className="text-sm">{value}</strong>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#65736A]">
            Production capacities are shown separately because wood panels and
            chemicals are measured differently.
          </p>
        </div>
      </section>

      <section id="journey" className={section}>
        <div className={c}>
          <Heading
            eyebrow="Where It Began"
            title="From Timber Trading to Integrated Manufacturing."
          />
          <div className="mt-10 border-l border-[#D7C5AE] pl-6 sm:pl-10">
            {timeline.map(([year, title, copy], index) => (
              <article
                className="relative pb-9 last:pb-0"
                key={`${year}-${title}`}
              >
                <span className="absolute -left-[33px] grid size-4 place-items-center rounded-full bg-[#D99143] text-[8px] text-white sm:-left-[49px]">
                  {index + 1}
                </span>
                <p className="text-xs font-bold tracking-[.16em] text-[#9C6846]">
                  {year}
                </p>
                <h3 className="mt-2 font-['DM_Serif_Display',Georgia,serif] text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-2xl leading-7 text-[#65736A]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="bg-[#143D2B] py-16 text-white sm:py-20"
      >
        <div className={`${c} grid gap-10 lg:grid-cols-[1.2fr_.8fr]`}>
          <div>
            <Heading
              light
              eyebrow="Leadership"
              title="Experience Gives Direction. Responsibility Gives It Meaning."
            />
            <p className="mt-7 max-w-2xl leading-7 text-white/75">
              Pentagon Plywood Private Limited is guided by leadership with
              long-standing experience in the timber, wood-panel and
              manufacturing sectors. The group’s direction is shaped by a
              practical commitment: understand the requirement, strengthen the
              process and build long-term relationships through dependable work.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-7">
            <Users className="text-[#E7B572]" size={34} />
            <div className="mt-7 space-y-4">
              <p>
                <strong className="block text-xl">Mr. Anand Jain</strong>
                <span className="text-white/65">Managing Director</span>
              </p>
              <p>
                <strong className="block text-xl">Mr. Ashu Jain</strong>
                <span className="text-white/65">Director</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={c}>
          <Heading
            eyebrow="Group Structure"
            title="Four Companies. Two Manufacturing Sectors."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {companies.map(([name, copy], i) => (
              <article
                className="rounded-2xl border border-[#D9D3C8] bg-white p-7"
                key={name}
              >
                <span className="text-sm font-bold text-[#9C6846]">
                  0{i + 1}
                </span>
                <h3 className="mt-7 font-['DM_Serif_Display',Georgia,serif] text-2xl">
                  {name}
                </h3>
                <p className="mt-3 leading-7 text-[#65736A]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EADD] py-16 sm:py-20">
        <div className={c}>
          <Heading
            eyebrow="Our Manufacturing Sectors"
            title="Built for Materials That Become Part of Everyday Life."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <Layers className="text-[#9C6846]" />
              <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-3xl">
                Wood-Based Panel Manufacturing
              </h3>
              <p className="mt-4 leading-7 text-[#65736A]">
                Through S. A. Timber Traders and Pentagon Plywood Private
                Limited, the group manufactures:
              </p>
              <ul className="mt-5 space-y-3">
                {["Plywood", "Blockboard", "Flush Doors"].map((x) => (
                  <li className="flex gap-3" key={x}>
                    <Check className="text-[#143D2B]" size={18} />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[#65736A]">
                Located in Yamunanagar with a combined floor area of
                approximately 2.5 lakh sq. ft.
              </p>
            </article>
            <article className="rounded-2xl bg-[#143D2B] p-8 text-white">
              <Factory className="text-[#E7B572]" />
              <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-3xl">
                Chemical Manufacturing
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                Through Synochem Organics Private Limited and Patson Industries,
                the group manufactures:
              </p>
              <p className="mt-5 text-xl font-bold">Formaldehyde</p>
              <p className="mt-6 text-sm text-white/65">
                Operations are located in Yamunanagar and Morbi, with a combined
                area of 7,456 sq. metres.
              </p>
            </article>
          </div>
          <a className={`${primary} mt-8`} href={HOME_SECTIONS.products}>
            Explore Our Products <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section id="about-manufacturing" className={section}>
        <div className={`${c} grid items-center gap-10 lg:grid-cols-2`}>
          <img
            src={plywoodImage}
            alt="Plywood panel product"
            className="aspect-square rounded-3xl object-cover"
          />
          <div>
            <Heading
              eyebrow="Progress Through Process"
              title="Growth Has Always Meant Strengthening What Happens Behind the Product."
            />
            <p className="mt-6 leading-7 text-[#65736A]">
              From installing peeling machines to operating pressing units,
              expanding land and machinery, and adding chemical manufacturing
              capability, Pentagon’s journey has been shaped by ongoing
              development.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Machinery upgrades over time",
                "New manufacturing installations",
                "Expansion into new cities",
                "Increased wood-panel capacity",
                "Backward integration into Formaldehyde",
                "Expansion into Gujarat",
                "Continued chemical capacity development",
              ].map((x) => (
                <li className="flex gap-3 text-sm" key={x}>
                  <Check className="shrink-0 text-[#9C6846]" size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="about-quality"
        className="bg-[#143D2B] py-16 text-white sm:py-20"
      >
        <div
          className={`${c} grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]`}
        >
          <div>
            <Heading
              light
              eyebrow="Manufacturing Approach"
              title="Every Finished Product Begins With the Process Behind It."
            />
            <p className="mt-6 leading-7 text-white/75">
              The finished surface is only one part of the product. Material
              preparation, veneer processing, core assembly, bonding, pressing,
              finishing and inspection all influence the final result.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Use real factory, machinery, veneer and production photographs
              here as they become available.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {[
              "Material selection and preparation",
              "Veneer processing",
              "Core assembly",
              "Adhesive application",
              "Pressing",
              "Trimming and sanding",
              "Dimensional and surface checks",
              "Product-specific evaluation",
              "Packaging and dispatch",
            ].map((x, i) => (
              <li
                className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm"
                key={x}
              >
                <b className="mr-3 text-[#E7B572]">
                  {String(i + 1).padStart(2, "0")}
                </b>
                {x}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={section}>
        <div className={c}>
          <Heading
            eyebrow="Our Principles"
            title="The Values Behind the Name."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {principles.map(([title, copy], i) => (
              <article
                className="rounded-2xl border border-[#D9D3C8] bg-white p-6"
                key={title}
              >
                <span className="text-sm font-bold text-[#9C6846]">
                  0{i + 1}
                </span>
                <h3 className="mt-7 font-['DM_Serif_Display',Georgia,serif] text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#65736A]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EADD] py-16 sm:py-20">
        <div className={c}>
          <Heading
            eyebrow="Built Around Real Requirements"
            title="For the People Who Select, Sell and Build With Materials."
          />
          <div className="mt-10 grid gap-3">
            {audiences.map(([title, copy], i) => (
              <article
                className="grid gap-3 rounded-2xl border border-[#D7C5AE] bg-white p-5 sm:grid-cols-[3rem_1fr_1.5fr] sm:items-center"
                key={title}
              >
                <span className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#9C6846]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-6 text-[#65736A]">{copy}</p>
              </article>
            ))}
          </div>
          <a className={`${outline} mt-8`} href={CONTACT_SECTIONS.form}>
            Discuss Your Requirement <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={section}>
        <div className={c}>
          <Heading
            eyebrow="Our Direction"
            title="Built on Experience. Focused on What Comes Next."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Our Vision",
                "To build Pentagon into a trusted manufacturing group known for dependable products, responsible information and long-term customer relationships.",
              ],
              [
                "Our Mission",
                "To manufacture and supply wood-based panels, doors and industrial chemicals through capable people, strengthened processes and continuous improvement.",
              ],
              [
                "Our Commitment",
                "To keep improving manufacturing capabilities, communicate clearly and support customers with materials suited to their real requirements.",
              ],
            ].map(([title, copy]) => (
              <article
                className="rounded-2xl bg-[#143D2B] p-7 text-white"
                key={title}
              >
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#E7B572]">
                  {title}
                </h3>
                <p className="mt-5 leading-7 text-white/75">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#9C6846] py-16 text-white sm:py-20">
        <div className={`${c} grid gap-10 lg:grid-cols-[1.2fr_.8fr]`}>
          <div>
            <Heading
              light
              eyebrow="From Yamunanagar to Morbi"
              title="Manufacturing Across Two Important Industrial Regions."
            />
            <p className="mt-6 max-w-2xl leading-7 text-white/80">
              Pentagon’s wood-based panel operations are located in Yamunanagar,
              Haryana one of India’s established centres for plywood and
              wood-product manufacturing. Its chemical operations extend from
              Yamunanagar to Morbi, Gujarat.
            </p>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 p-7">
            <MapPin className="text-[#F4D8B4]" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.14em] text-white/65">
              Primary wood-panel address
            </p>
            <p className="mt-3 font-['DM_Serif_Display',Georgia,serif] text-2xl">
              Village Raipur, Khajuri Road, Yamunanagar, Haryana – 135001, India
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 font-bold hover:text-[#F4D8B4]"
              href={ROUTES.contact}
            >
              Contact Pentagon <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="about-faq" className={section}>
        <div className={`${c} grid gap-10 lg:grid-cols-[.8fr_1.2fr]`}>
          <Heading
            eyebrow="Frequently Asked Questions"
            title="Clear answers about the group."
          />
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="rounded-2xl border border-[#D9D3C8] bg-white px-5 sm:px-7"
          >
            {faqs.map(([q, a], i) => (
              <AccordionItem
                value={`faq-${i}`}
                key={q}
                className="border-[#E7E1D8]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold no-underline hover:no-underline">
                  <span className="mr-4 text-xs text-[#9C6846]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 leading-7 text-[#65736A]">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        id="about-enquiry"
        className="bg-[#143D2B] py-16 text-white sm:py-24"
      >
        <div className={`${c} text-center`}>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E7B572]">
            Start a Conversation
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl font-['DM_Serif_Display',Georgia,serif] text-4xl leading-tight sm:text-5xl">
            Tell Us What You Need. Let’s Begin With the Material Behind It.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
            Whether you require plywood, blockboard, flush doors, complementary
            materials or industrial Formaldehyde, share your product
            requirement, quantity and delivery location with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#D99143] px-5 py-3 text-sm font-bold text-[#14211A]"
              href={CONTACT_SECTIONS.form}
            >
              Send Your Requirement <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-bold"
              href={ROUTES.dealers}
            >
              Become a Dealer <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
