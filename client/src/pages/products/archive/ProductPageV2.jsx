import { useEffect, useState } from "react";
import {
  ArrowRight,
  Blocks,
  Building2,
  Check,
  CheckCircle2,
  DoorClosed,
  DoorOpen,
  Factory,
  FlaskConical,
  Layers3,
  PackageCheck,
  PanelsTopLeft,
  ShieldCheck,
  Sofa,
  SwatchBook,
  Truck,
  Utensils,
} from "lucide-react";
import { CONTACT_SECTIONS, PRODUCT_ROUTES, ROUTES } from "@/app/routes.js";

// Imported Product Page Images
import heroInterior from "@/assets/products/products_hero_interior.jpg";
import plywoodStack from "@/assets/products/products_plywood_stack.jpg";
import chemicalFlask from "@/assets/products/products_chemical_flask.jpg";
import formArmchair from "@/assets/products/products_form_armchair.jpg";

// Category Product Images
import plywoodImage from "@/assets/homepage/products/mr-grade-plywood-1671449588-6629452.webp";
import is303Blockboard from "@/assets/homepage/products/is303-blockboard-1671450145-6629496.webp";
import doorImage from "@/assets/homepage/products/waterproof-flush-door-1671449760-6629491.webp";
import factoryImage from "@/assets/homepage/Plywood-Manufacturing-1024x683.png";

function ProductsPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirementType: "Plywood",
    location: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Products | Pentagon Plywood";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBF8] text-[#14211A] font-['Manrope',sans-serif]">
      {/* 0. BREADCRUMB */}
      <div className="max-w-[1280px] mx-auto px-6 pt-6 pb-2 text-xs text-[#65736A]">
        <div className="flex items-center gap-2">
          <a href={ROUTES.home} className="hover:text-[#14211A] transition">
            Home
          </a>
          <span>/</span>
          <strong className="text-[#14211A] font-bold">Products</strong>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="pt-4 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-['Manrope',sans-serif] text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#14211A]">
                Complete product solutions for beautiful,{" "}
                <span className="font-['DM_Serif_Display',Georgia,serif] italic font-normal text-[#9C6846]">
                  strong &amp; lasting
                </span>{" "}
                spaces.
              </h1>

              <p className="text-[#65736A] text-[16px] sm:text-[18px] leading-[1.65] max-w-2xl font-medium">
                From core panels to decorative finishes, we manufacture and
                source everything you need with application guidance and
                reliable supply for projects of any scale.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#core-products"
                  className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full bg-[#143D2B] px-7 sm:px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0D291D] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Our Products <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#enquiry-form"
                  className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-full border border-[#CAD4CC] bg-white px-7 sm:px-8 text-xs font-bold text-[#14211A] hover:bg-[#F7F3EC] transition-all shadow-2xs cursor-pointer"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* Right Column: Interior Image & Floating Thumbnail Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E7E2] h-[360px] sm:h-[450px] w-full bg-[#F7F3EC]">
                <img
                  src={heroInterior}
                  alt="Pentagon modern interior living space"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Overlapping Product Card Thumbnail at bottom right */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-[#E2E8F0] flex items-center gap-3.5 max-w-[260px] sm:max-w-[280px]">
                <img
                  src={plywoodStack}
                  alt="Premium BWP Plywood stack"
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover shrink-0 border border-[#E2E8F0]"
                />
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-[#14211A]">
                    Premium BWP Plywood
                  </strong>
                  <span className="text-[11px] text-[#65736A] block leading-tight mt-0.5">
                    Strong, Stable, Beautiful
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Hero Trust Bar */}
          <div className="mt-14 sm:mt-16 rounded-2xl border border-[#E2E8F0] bg-white shadow-xl p-5 md:p-6 lg:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#14211A]">
                    Made in-house
                  </strong>
                  <span className="text-xs text-[#65736A]">
                    Quality you can trust
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <PackageCheck className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#14211A]">
                    Sourced intelligently
                  </strong>
                  <span className="text-xs text-[#65736A]">
                    Best materials, best value
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <PanelsTopLeft className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#14211A]">
                    Application-led guidance
                  </strong>
                  <span className="text-xs text-[#65736A]">
                    Right fit for every need
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#14211A]">
                    Bulk &amp; project supply
                  </strong>
                  <span className="text-xs text-[#65736A]">
                    On time, every time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PRODUCTS SECTION */}
      <section
        id="core-products"
        className="py-16 bg-white border-t border-b border-[#CAD4CC]/40"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
              MANUFACTURED WITH PRECISION
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-5xl text-[#14211A] mt-2">
              Core products built within Pentagon&apos;s own manufacturing
              network.
            </h2>
            <p className="text-[#65736A] text-base mt-3 leading-relaxed">
              Engineered for strength, stability and long life. Built to perform
              across interiors, furniture, doors and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 01 - BWP Plywood */}
            <article className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-5 border border-[#E2E8F0]">
                  <img
                    src={plywoodImage}
                    alt="BWP Plywood stack"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#143D2B] text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                    01
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                  BWP Plywood
                </h3>
                <p className="text-xs text-[#65736A] mt-2 leading-relaxed">
                  Moisture-resistant, dimensionally stable and built for
                  versatile performance.
                </p>

                <div className="mt-4 pt-4 border-t border-[#E5DDD2] space-y-2 text-xs">
                  <div>
                    <span className="text-[#9C6846] font-bold">Ideal for:</span>{" "}
                    <span className="text-[#4A5750]">
                      Interiors, furniture, partitions, panelling, and
                      structural use.
                    </span>
                  </div>
                  <div>
                    <span className="text-[#9C6846] font-bold">
                      Popular Grades:
                    </span>{" "}
                    <span className="text-[#4A5750]">BWP (IS:710), BWR</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DDD2] flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    4mm - 25mm
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    IS 710
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    Boil Proof
                  </span>
                </div>
                <a
                  href={PRODUCT_ROUTES.plywood}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#143D2B] text-white hover:bg-[#0D291D] transition shrink-0"
                  aria-label="Explore BWP Plywood"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            {/* Card 02 - Blockboard */}
            <article className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-5 border border-[#E2E8F0]">
                  <img
                    src={is303Blockboard}
                    alt="Blockboard core sample"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#143D2B] text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                    02
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                  Blockboard
                </h3>
                <p className="text-xs text-[#65736A] mt-2 leading-relaxed">
                  Solid core. Excellent screw-holding. Perfect for long-life
                  applications.
                </p>

                <div className="mt-4 pt-4 border-t border-[#E5DDD2] space-y-2 text-xs">
                  <div>
                    <span className="text-[#9C6846] font-bold">Ideal for:</span>{" "}
                    <span className="text-[#4A5750]">
                      Doors, shutters, partitions, and heavy-use furniture.
                    </span>
                  </div>
                  <div>
                    <span className="text-[#9C6846] font-bold">
                      Popular Grades:
                    </span>{" "}
                    <span className="text-[#4A5750]">MR, BWP</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DDD2] flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    19mm - 25mm
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    IS 1659
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    High Durability
                  </span>
                </div>
                <a
                  href={PRODUCT_ROUTES.blockboard}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#143D2B] text-white hover:bg-[#0D291D] transition shrink-0"
                  aria-label="Explore Blockboards"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            {/* Card 03 - Flush Doors */}
            <article className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-5 border border-[#E2E8F0]">
                  <img
                    src={doorImage}
                    alt="Flush doors collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#143D2B] text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                    03
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#14211A]">
                  Flush Doors
                </h3>
                <p className="text-xs text-[#65736A] mt-2 leading-relaxed">
                  Smooth finish, uniform structure and excellent strength.
                </p>

                <div className="mt-4 pt-4 border-t border-[#E5DDD2] space-y-2 text-xs">
                  <div>
                    <span className="text-[#9C6846] font-bold">Ideal for:</span>{" "}
                    <span className="text-[#4A5750]">
                      Residential doors, commercial projects, and institutional
                      spaces.
                    </span>
                  </div>
                  <div>
                    <span className="text-[#9C6846] font-bold">
                      Popular Grades:
                    </span>{" "}
                    <span className="text-[#4A5750]">HDF, MDF, MR</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DDD2] flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    30mm - 40mm
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    IS 2202
                  </span>
                  <span className="rounded-full bg-white border border-[#CAD4CC]/60 px-2.5 py-1 text-[11px] font-semibold text-[#14211A]">
                    Ready to Finish
                  </span>
                </div>
                <a
                  href={PRODUCT_ROUTES.flushDoors}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#143D2B] text-white hover:bg-[#0D291D] transition shrink-0"
                  aria-label="Explore Flush Doors"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center">
            <a
              href={PRODUCT_ROUTES.plywood}
              className="inline-flex items-center gap-2 rounded-full border border-[#CAD4CC] bg-[#F7F3EC] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#143D2B] hover:bg-[#E5DDD2] transition"
            >
              View All Core Products <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. FORMALDEHYDE / CHEMICAL DIVISION SPOTLIGHT */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="rounded-3xl border border-[#CAD4CC]/60 bg-[#F7F3EC] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Industrial Factory Image */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[400px]">
              <img
                src={factoryImage}
                alt="Pentagon chemical & plywood industrial facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Right Content Card with Chemical Beaker Thumbnail */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
                  INDUSTRIAL CHEMICALS
                </span>
                <h3 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#14211A] mt-2">
                  Formaldehyde for wood-panel and industrial production
                  requirements.
                </h3>
                <p className="text-[#65736A] text-sm sm:text-base mt-3 leading-relaxed">
                  Consistent quality, safe handling and technical support for
                  adhesives, resins and industrial applications.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-[#143D2B]">
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#CAD4CC]/60 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#C86D51]" />
                    <span>Guaranteed Quality</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#CAD4CC]/60 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#C86D51]" />
                    <span>Technical Support</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#CAD4CC]/60 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#C86D51]" />
                    <span>Safe &amp; Reliable Supply</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#CAD4CC]/40">
                <div className="flex items-center gap-3">
                  <img
                    src={chemicalFlask}
                    alt="Chemical beaker"
                    className="h-12 w-12 rounded-xl object-cover border border-[#CAD4CC]/60"
                  />
                  <div className="text-xs">
                    <strong className="block text-[#14211A]">
                      Yamunanagar &amp; Morbi Units
                    </strong>
                    <span className="text-[#65736A]">Bulk Tanker Supply</span>
                  </div>
                </div>

                <a
                  href={PRODUCT_ROUTES.formaldehyde}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0D291D] transition shadow-md"
                >
                  Explore Chemicals <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLEMENTARY MATERIALS SECTION */}
      <section className="py-16 bg-white border-t border-b border-[#CAD4CC]/40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
                COMPLETE YOUR SOLUTION
              </span>
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#14211A] mt-2">
                Complementary materials, sourced around the complete
                requirement.
              </h2>
            </div>
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#143D2B] hover:text-[#9C6846] transition shrink-0"
            >
              View All Materials <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Category 1 */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-6 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <SwatchBook className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#14211A]">
                    Decorative Materials
                  </h3>
                  <p className="text-xs text-[#65736A]">
                    Aesthetic finishes for interiors and furniture
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                {["Laminates", "Veneers", "Edgebands", "PVC Films"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#enquiry-form"
                      className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#E5DDD2] text-xs font-bold text-[#14211A] hover:bg-[#F7F3EC] transition group"
                    >
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4 text-[#65736A] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Category 2 */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-6 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <Blocks className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#14211A]">
                    Engineered Boards
                  </h3>
                  <p className="text-xs text-[#65736A]">
                    Performance boards for structural &amp; functional use
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                {[
                  "MDF Boards",
                  "HDF Boards",
                  "Particle Boards",
                  "Pre-Laminated Boards",
                ].map((item) => (
                  <a
                    key={item}
                    href="#enquiry-form"
                    className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#E5DDD2] text-xs font-bold text-[#14211A] hover:bg-[#F7F3EC] transition group"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-[#65736A] group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#FAF8F5] p-6 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#14211A]">
                    Surface-Finished Panels
                  </h3>
                  <p className="text-xs text-[#65736A]">
                    Ready-to-use panels and doors for fast execution
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                {[
                  "Pre-laminated Boards",
                  "Acrylic Panels",
                  "UV Panels",
                  "Flush Doors (Designer)",
                ].map((item) => (
                  <a
                    key={item}
                    href="#enquiry-form"
                    className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#E5DDD2] text-xs font-bold text-[#14211A] hover:bg-[#F7F3EC] transition group"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-[#65736A] group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILT FOR EVERY APPLICATION */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
              BUILT FOR EVERY APPLICATION
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#14211A] mt-2">
              Tell us the finished requirement, not just the board name.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Sofa,
                title: "Home Furniture",
                desc: "Beds, TV units, storage & more",
              },
              {
                icon: Utensils,
                title: "Modular Kitchens",
                desc: "Cabinets, shutters, panels & accessories",
              },
              {
                icon: DoorClosed,
                title: "Wardrobes & Storage",
                desc: "Sliding shutters, hinged doors & interiors",
              },
              {
                icon: DoorOpen,
                title: "Doors",
                desc: "Room doors, main doors & decorative doors",
              },
              {
                icon: Building2,
                title: "Commercial Interiors",
                desc: "Offices, retail, hospitality & institutions",
              },
              {
                icon: Factory,
                title: "Industrial Production",
                desc: "Large scale manufacturing & OEM supply",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E5DDD2] bg-white p-5 shadow-2xs hover:shadow-md transition flex items-start gap-4"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] border border-[#CAD4CC]/40">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#14211A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH (MANUFACTURING VS SOURCED) */}
      <section className="py-16 bg-[#F7F3EC] border-t border-b border-[#CAD4CC]/40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
              OUR APPROACH
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#14211A] mt-2">
              Know how Pentagon serves each requirement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Produced through Pentagon's Manufacturing */}
            <div className="rounded-3xl bg-[#143D2B] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#E7B572]">
                  <Factory className="h-5 w-5" />
                  <span>
                    Produced through Pentagon&apos;s own manufacturing
                    operations.
                  </span>
                </div>

                <ul className="mt-8 space-y-3 text-sm font-medium">
                  {[
                    "Complete quality control",
                    "Strict IS standard products",
                    "Reliable large-scale output",
                    "Traceability & documentation",
                  ].map((check) => (
                    <li key={check} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[#E7B572] shrink-0" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/70">
                Direct factory dispatch from Yamunanagar, Haryana &amp; Morbi,
                Gujarat units.
              </div>
            </div>

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#143D2B] border-2 border-[#143D2B] rounded-full h-10 w-10 font-extrabold text-xs items-center justify-center shadow-lg z-10 hidden md:flex">
              VS
            </div>

            {/* Procured through Pentagon's Supplier Network */}
            <div className="rounded-3xl bg-white border border-[#E5DDD2] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#9C6846]">
                  <PackageCheck className="h-5 w-5" />
                  <span>
                    Procured through Pentagon&apos;s supplier network.
                  </span>
                </div>

                <ul className="mt-8 space-y-3 text-sm font-medium text-[#14211A]">
                  {[
                    "Wide product variety",
                    "Premium branded materials",
                    "Best value sourcing",
                    "Project specific solutions",
                  ].map((check) => (
                    <li key={check} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[#C86D51] shrink-0" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5DDD2] text-xs text-[#65736A]">
                Comprehensive partner network fulfilling multi-category project
                BOMs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WORK WITH PENTAGON */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#9C6846]">
              WHY WORK WITH PENTAGON
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-[#14211A] mt-2">
              From core panels to decorative finishes, we make it simple for
              you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers3,
                title: "End-to-end solutions",
                desc: "Everything you need, from core to finish.",
              },
              {
                icon: ShieldCheck,
                title: "Quality you can rely on",
                desc: "Tested, certified and made to perform.",
              },
              {
                icon: CheckCircle2,
                title: "Expert guidance",
                desc: "Right material for the right application.",
              },
              {
                icon: PackageCheck,
                title: "Scalable supply",
                desc: "From small orders to large project supply.",
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F7F3EC] text-[#9C6846] border border-[#CAD4CC]/40">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#14211A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & MATERIAL REQUEST FORM SECTION */}
      <section id="enquiry-form" className="py-16 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="rounded-3xl border border-[#CAD4CC]/70 bg-[#0D291D] p-6 sm:p-10 shadow-2xl text-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column Text & Armchair Image */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#E7B572]">
                LET&apos;S BUILD TOGETHER
              </span>
              <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl text-white leading-tight">
                Tell us what you&apos;re making. We&apos;ll help you find the
                right materials.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Share your requirement and our team will recommend the best
                materials and solutions for your project.
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E7B572] text-[#0D291D] text-xs font-bold">
                    ✓
                  </span>
                  <span>Quick expert response</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E7B572] text-[#0D291D] text-xs font-bold">
                    ✓
                  </span>
                  <span>Tailored material guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E7B572] text-[#0D291D] text-xs font-bold">
                    ✓
                  </span>
                  <span>Best value, on-time supply</span>
                </div>
              </div>

              {/* Form Interior Armchair Image */}
              <div className="pt-4 hidden sm:block">
                <img
                  src={formArmchair}
                  alt="Modern armchair interior space"
                  className="rounded-2xl h-48 w-full object-cover border border-white/10"
                />
              </div>
            </div>

            {/* Right Column Form Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-[#14211A] shadow-xl border border-[#E2E8F0]">
              <h3 className="font-bold text-lg text-[#14211A]">
                Start with the details you know.
              </h3>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-xl text-[#14211A]">
                    Thank You!
                  </h4>
                  <p className="text-xs text-[#65736A] max-w-sm mx-auto">
                    Your material request has been received. Our team will
                    review your requirements and reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Company / Organization*
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Requirement Type*
                      </label>
                      <select
                        name="requirementType"
                        value={formData.requirementType}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      >
                        <option value="Plywood">Plywood</option>
                        <option value="Blockboard">Blockboard</option>
                        <option value="Flush Doors">Flush Doors</option>
                        <option value="Formaldehyde">
                          Formaldehyde (Chemicals)
                        </option>
                        <option value="Decorative Laminates">
                          Decorative Laminates
                        </option>
                        <option value="Engineered Boards">
                          Engineered Boards
                        </option>
                        <option value="Other">Other Requirement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-[#4A5750] mb-1">
                        Region / Location*
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City or project location"
                        className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#4A5750] mb-1">
                      Tell us about your requirement*
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      className="w-full rounded-xl border border-[#CAD4CC] bg-[#FAF8F5] px-4 py-3 text-xs text-[#14211A] outline-hidden focus:border-[#143D2B] focus:bg-white transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0D291D] transition cursor-pointer"
                  >
                    Request Material Guidance <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#65736A]">
                    By submitting, you agree to our Privacy Policy. We respect
                    your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
