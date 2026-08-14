import { ArrowRight, Check, Factory, MapPin } from "lucide-react";
import { CONTACT_SECTIONS, ROUTES } from "../../app/routes.js";
// import manufacturingImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.jpg";
import manufacturingImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.png"; 
import pressImage from "../../assets/homepage/plywood_press_factory.jpg";
const c="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"; const facts=[["Manufacturing sectors","Wood-based panels and chemicals"],["Group companies","4"],["Manufacturing locations","Yamunanagar, Haryana and Morbi, Gujarat"],["Wood-panel factories","2"],["Chemical factories","2"],["Wood-panel installed capacity","5,000 m² per day"],["Wood-panel licensed capacity","10,000 m² per day"],["Chemical installed capacity","200 MT per day"],["Wood-panel factory floor area","Approx. 2.5 lakh sq. ft."],["Chemical facility area","7,456 m²"],["Combined team strength","Approx. 390 people, including payroll and contractual workforce"]];
function ManufacturingPage() {
  return (
    <div
      data-palette="pentagon-brand"
      className="home-theme bg-brand-cream text-brand-charcoal overflow-hidden font-sans"
    >
      {/* HERO SECTION */}
      <section className="bg-[#143D2B] text-white">
        <div className={c}>
          <nav className="flex gap-2 py-6 text-xs text-white/65">
            <a href={ROUTES.home} className="hover:text-white transition">
              Home
            </a>
            <span>›</span>
            <a href={ROUTES.about} className="hover:text-white transition">
              About Us
            </a>
            <span>›</span>
            <strong className="text-white">Manufacturing &amp; Infrastructure</strong>
          </nav>
          <div className="grid items-center gap-10 py-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C86D51]">
                Built Behind the Board
              </p>
              <h1 className="mt-5 font-display text-5xl leading-[.96]">
                Two Sectors. Four Manufacturing Units.{" "}
                <span className="home-heading-accent-on-dark font-normal not-italic">
                  One Long-Term Manufacturing Foundation.
                </span>
              </h1>
              <p className="mt-7 leading-8 text-white/75 font-medium">
                Pentagon Group operates across wood-based panel manufacturing and chemical manufacturing, supporting plywood, blockboard, flush doors and Formaldehyde production.
              </p>
            </div>
            <img
              src={manufacturingImage}
              alt="Plywood manufacturing environment"
              className="aspect-[5/4] rounded-3xl object-cover shadow-xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* MANUFACTURING AT A GLANCE */}
      <section className="py-16 sm:py-24">
        <div className={c}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
            Manufacturing at a Glance
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-xs">
            <div className="min-w-[680px]">
              {facts.map(([a, b]) => (
                <div
                  className="grid grid-cols-2 gap-8 border-b border-brand-border/60 px-6 py-4 last:border-b-0"
                  key={a}
                >
                  <span className="text-sm font-medium text-brand-muted">{a}</span>
                  <strong className="text-sm font-bold text-brand-charcoal">{b}</strong>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-brand-muted font-medium">
            Wood panels and chemicals are measured using different production units.
          </p>
        </div>
      </section>

      {/* WOOD-BASED PANEL MANUFACTURING */}
      <section className="bg-brand-cream-alt py-16 sm:py-20 border-y border-brand-border/60">
        <div className={`${c} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
              Wood-Based Panel Manufacturing
            </p>
            <h2 className="mt-5 font-display text-4xl text-brand-charcoal">Yamunanagar, Haryana</h2>
            <p className="mt-5 leading-7 text-brand-slate font-medium">
              Through S. A. Timber Traders and Pentagon Plywood Private Limited, the group manufactures plywood, blockboard and flush doors for furniture, interiors and door applications.
            </p>
            <ol className="mt-6 grid gap-3">
              {[
                "Material selection and preparation",
                "Veneer peeling and processing",
                "Core assembly",
                "Adhesive application",
                "Pressing",
                "Trimming and sanding",
                "Dimensional and surface checks",
                "Packaging and dispatch",
              ].map((x, i) => (
                <li className="flex gap-3 text-sm font-medium text-brand-charcoal" key={x}>
                  <b className="text-[#8E510D] font-bold">{i + 1}</b>
                  {x}
                </li>
              ))}
            </ol>
          </div>
          <img
            src={pressImage}
            alt="Plywood pressing machinery"
            className="aspect-square rounded-3xl object-cover shadow-lg border border-brand-border"
          />
        </div>
      </section>

      {/* CHEMICAL MANUFACTURING */}
      <section className="py-16 sm:py-24">
        <div className={`${c} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
              Chemical Manufacturing
            </p>
            <h2 className="mt-5 font-display text-4xl text-brand-charcoal">Yamunanagar and Morbi</h2>
            <p className="mt-5 leading-7 text-brand-slate font-medium">
              Through Synochem Organics Private Limited and Patson Industries, the group manufactures Formaldehyde for industrial requirements. Formaldehyde is used in resin manufacturing for plywood, laminate and related industrial applications.
            </p>
            <p className="mt-5 font-bold text-brand-charcoal">Combined installed capacity: 200 MT per day</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-xs">
              <MapPin className="text-[#8E510D]" />
              <h3 className="mt-4 text-xl font-bold text-brand-charcoal">Synochem Organics Private Limited</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted font-medium">
                Plot No. 54, HSIIDC Manakpur, Chhachhrauli Road, Jagadhri, Yamunanagar, Haryana – 135003.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-xs">
              <MapPin className="text-[#8E510D]" />
              <h3 className="mt-4 text-xl font-bold text-brand-charcoal">Patson Industries</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted font-medium">
                Plot No. 26, GIDC Vaghasia, Wankaner, Morbi, Gujarat – 363621.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH TO QUALITY */}
      <section className="bg-[#143D2B] py-16 text-white">
        <div className={`${c} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C86D51]">
              Our Approach to Quality
            </p>
            <h2 className="mt-5 font-display text-4xl text-white">
              A Finished Product Depends on the Process Behind It.
            </h2>
          </div>
          <ul className="space-y-3 text-white/80 font-medium">
            {[
              "Continued machinery and process upgrades",
              "Product-specific checks during manufacturing",
              "Clear discussion of grades and intended usage",
              "Responsible communication of available specifications",
              "Ongoing improvement as requirements evolve",
            ].map((x) => (
              <li className="flex gap-3" key={x}>
                <Check className="shrink-0 text-[#C86D51]" size={18} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DISCUSS PRODUCT REQUIREMENT CTA */}
      <section className="py-16 text-center">
        <div className={c}>
          <Factory className="mx-auto text-[#8E510D]" size={34} />
          <h2 className="mt-5 font-display text-4xl text-brand-charcoal">
            Discuss your product requirement.
          </h2>
          <a
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#143D2B] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#8E510D] transition-all cursor-pointer shadow-md"
            href={CONTACT_SECTIONS.form}
          >
            Request a Product Quote <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ManufacturingPage;
