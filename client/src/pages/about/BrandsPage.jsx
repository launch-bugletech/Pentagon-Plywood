import { useState, useEffect } from "react";
import {
  ArrowRight,
  X,
  Utensils,
  Droplets,
  Sun,
  Anchor,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_SECTIONS, HOME_SECTIONS, ROUTES } from "../../app/routes.js";
import { getBrandDetail } from "./brandDetailsData.js";

// Brand Artwork Images
import safari from "../../assets/Brand/Registered-Brands/safari.jpeg";
import pentagon from "../../assets/Brand/Registered-Brands/pentagon-gold.jpeg";
import hit from "../../assets/Brand/Registered-Brands/HIT.jpeg";
import kalinga from "../../assets/Brand/Registered-Brands/kalinga-gold.jpeg";
import paramount from "../../assets/Brand/Registered-Brands/paramount-gold.jpeg";
import supreemo from "../../assets/Brand/Registered-Brands/supreemo-plus.jpeg";
import escotel from "../../assets/Brand/Registered-Brands/ESCOTAL.jpeg";
import essar from "../../assets/Brand/Registered-Brands/essar.jpeg";
import royalGold from "../../assets/Brand/Registered-Brands/RoyalGold.jpeg";
import assam from "../../assets/Brand/Registered-Brands/assam-excel.jpeg";
import osteen from "../../assets/Brand/Registered-Brands/Osteen.jpeg";
import beanPly from "../../assets/Brand/Registered-Brands/BeanPly.jpeg";
import patchPly from "../../assets/Brand/Registered-Brands/patchply.jpeg";
import plygenix from "../../assets/Brand/Registered-Brands/plygenix.jpeg";

const brands = [
  ["SAFARI", safari],
  ["PENTAGON", pentagon],
  ["HIT", hit],
  ["KALINGA", kalinga],
  ["PARAMOUNT", paramount],
  ["SUPREEMO PLUS", supreemo],
  ["ESCOTEL", escotel],
  ["ESSAR", essar],
  ["ROYAL GOLD", royalGold],
  ["ASSAM EXCEL", assam],
  ["OSTEEN", osteen],
  ["BEAN PLY", beanPly],
  ["PATCH PLY", patchPly],
  ["PLYGENIX", plygenix],
];

const iconComponents = {
  Utensils,
  Droplets,
  Sun,
  Anchor,
};

const wrapClass = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";

function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (selectedBrand) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedBrand(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedBrand]);

  const activeDetail = selectedBrand
    ? getBrandDetail(selectedBrand[0])
    : null;

  return (
    <div className="bg-[#FDFBF8] text-[#14211A] font-['Manrope',sans-serif]">
      {/* HERO SECTION */}
      <section className="bg-[#143D2B] text-white">
        <div className={wrapClass}>
          <nav className="flex gap-2 py-6 text-xs text-white/65">
            <a href={ROUTES.home} className="hover:text-white transition">
              Home
            </a>
            <span>›</span>
            <a href={ROUTES.about} className="hover:text-white transition">
              About Us
            </a>
            <span>›</span>
            <strong className="text-white">Brands &amp; Trademarks</strong>
          </nav>

          <div className="max-w-4xl py-16 sm:py-24">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E7B572]">
              Our Brand Portfolio
            </p>
            <h1 className="mt-5 font-['DM_Serif_Display',Georgia,serif] text-5xl leading-[.95] sm:text-6xl">
              Our Brands &amp;{" "}
              <span className="text-[#E7B572]">Trademarks.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              Over the years, the Pentagon Group has developed and registered a
              portfolio of brands associated with its wood-products business.
              These names reflect the group’s long-standing presence in timber,
              veneer and panel manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTERED BRANDS GRID */}
      <section className="py-16 sm:py-24">
        <div className={wrapClass}>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9C6846]">
              Registered Brands
            </p>
            <h2 className="mt-4 font-['DM_Serif_Display',Georgia,serif] text-4xl">
              Names built alongside a long manufacturing journey.
            </h2>
            <p className="mt-2 text-sm text-[#65736A]">
              Click on any brand card below to view detailed specifications and available grades.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {brands.map(([name, image]) => (
              <button
                type="button"
                key={name}
                onClick={() => setSelectedBrand([name, image])}
                className="group text-left rounded-2xl border border-[#E5DDD2] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#143D2B] hover:shadow-xl cursor-pointer"
              >
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#F7F0E7] p-3">
                  <img
                    src={image}
                    alt={`${name} registered brand`}
                    className="size-full object-contain transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 rounded-full bg-[#143D2B]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View Specs
                  </span>
                </div>
                <figcaption className="pt-4 text-center text-xs font-bold tracking-[.12em] text-[#143D2B] group-hover:text-[#9C6846] transition-colors">
                  {name}
                </figcaption>
              </button>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-[#E5DDD2] bg-[#F7F0E7] px-5 py-4 text-sm leading-6 text-[#65736A]">
            Brand availability and associated product categories may vary. For
            current product requirements, please contact the Pentagon team.
          </p>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="bg-[#F4EADD] py-16 sm:py-20">
        <div
          className={`${wrapClass} grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9C6846]">
              Need Product Information?
            </p>
            <h2 className="mt-5 font-['DM_Serif_Display',Georgia,serif] text-4xl">
              Tell us what you are making.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#65736A]">
              Share the material required, quantity and delivery location. Our
              team will help you identify a suitable available product.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#143D2B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0D291D]"
              href={HOME_SECTIONS.products}
            >
              Explore Our Products <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#143D2B] px-5 py-3 text-sm font-bold text-[#143D2B] transition hover:bg-white"
              href={CONTACT_SECTIONS.form}
            >
              Contact Pentagon <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* BRAND DETAIL POPUP MODAL */}
      {selectedBrand && activeDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] p-6 sm:p-8 shadow-2xl border border-[#E5DDD2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close X Button */}
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 grid h-9 w-9 place-items-center rounded-full bg-black/5 text-[#4A5750] transition hover:bg-black/10 hover:text-[#14211A] cursor-pointer"
              aria-label="Close brand specification modal"
            >
              <X size={18} />
            </button>

            {/* Header / Top Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 items-start">
              {/* Brand Artwork Image Card */}
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-[#E5DDD2] bg-white p-4 shadow-sm">
                <img
                  src={selectedBrand[1]}
                  alt={`${selectedBrand[0]} logo`}
                  className="size-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[.18em] text-[#9C6846]">
                  {activeDetail.categorySubtitle}
                </span>
                <h3 className="mt-1 font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl font-normal text-[#14211A]">
                  {activeDetail.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#65736A]">
                  {activeDetail.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 space-y-2">
                  {activeDetail.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-full border border-[#E8DFC8] bg-[#FFFDF9] px-3.5 py-1.5 text-xs font-semibold text-[#263B30] shadow-2xs"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#9C6846]/60 border border-[#9C6846]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-[#E5DDD2]" />

            {/* Best Suited For Section */}
            <div>
              <h4 className="text-sm font-bold text-[#14211A]">
                Best Suited For
              </h4>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {activeDetail.bestSuitedFor.map((item) => {
                  const IconComp =
                    iconComponents[item.iconName] || Utensils;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#E5DDD2]/70 bg-white p-3.5 text-center shadow-2xs"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#EFE9DF] text-[#143D2B] mx-auto shadow-2xs">
                        <IconComp size={20} />
                      </div>
                      <span className="mt-2 block text-[11px] font-semibold leading-tight text-[#4A5750]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Available Grades Section */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-[#14211A]">
                Available Grades
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeDetail.availableGrades.map((grade) => (
                  <span
                    key={grade}
                    className="rounded-full border border-[#E5DDD2] bg-white px-4 py-1.5 text-xs font-semibold text-[#263B30]"
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </div>

            {/* Available Thickness Section */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-[#14211A]">
                Available Thickness
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeDetail.availableThickness.map((thick) => (
                  <span
                    key={thick}
                    className="rounded-full border border-[#E5DDD2] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#263B30]"
                  >
                    {thick}
                  </span>
                ))}
              </div>
              <span className="mt-2 block text-[11px] text-[#65736A]">
                {activeDetail.thicknessNote}
              </span>
            </div>

            {/* Bottom Request Info CTA Button */}
            <a
              href={CONTACT_SECTIONS.form}
              onClick={() => setSelectedBrand(null)}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D291D] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#143D2B] cursor-pointer"
            >
              Request More Information <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrandsPage;
