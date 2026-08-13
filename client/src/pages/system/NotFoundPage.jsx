import { useEffect } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  Home,
  Layers,
  MapPin,
  PanelsTopLeft,
  PhoneCall,
} from "lucide-react";
import { CONTACT_SECTIONS, PRODUCT_ROUTES, ROUTES } from "../../app/routes.js";
import notFoundImage from "../../assets/not_found_plywood_stack.jpg";

function NotFoundPage() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    document.title = "Page Not Found (404) | Pentagon Plywood";
  }, []);

  return (
    <div className="bg-[#FDFBF8] text-[#14211A] min-h-[85vh] font-['Manrope',sans-serif] py-8 sm:py-12">
      <div className="max-w-[1280px] mx-auto px-6 space-y-12">
        {/* Top Back Navigation Link */}
        <div>
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = ROUTES.home;
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#65736A] hover:text-[#C86D51] transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back Home</span>
          </button>
        </div>

        {/* HERO 404 SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Giant 404 Number */}
            <div className="font-['DM_Serif_Display',Georgia,serif] text-7xl sm:text-9xl font-extrabold tracking-tight leading-none">
              <span className="text-[#143D2B]">4</span>
              <span className="text-[#C86D51]">0</span>
              <span className="text-[#143D2B]">4</span>
            </div>

            {/* Headline */}
            <h1 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-5xl text-[#14211A] leading-tight">
              Oops! This page went{" "}
              <span className="text-[#C86D51] italic font-normal">missing</span>{" "}
              like a loose screw.
            </h1>

            {/* Accent Rule Line */}
            <div className="h-0.5 w-14 bg-[#C86D51]" />

            {/* Subtitle */}
            <p className="text-[#65736A] text-sm sm:text-base leading-relaxed max-w-lg font-medium">
              The page you&apos;re looking for doesn&apos;t exist, may have been
              moved, or the link might be incorrect. Let&apos;s get you back on
              track.
            </p>

            {/* Requested URL Hint Box (Custom User Feature) */}
            {currentPath && (
              <div className="inline-flex items-center gap-3 rounded-2xl border border-[#CAD4CC]/70 bg-[#F7F3EC] px-4 py-2.5 text-xs">
                <AlertCircle className="h-4 w-4 text-[#C86D51] shrink-0" />
                <div>
                  <span className="text-[#65736A] font-semibold">
                    Requested URL Hint:
                  </span>{" "}
                  <code className="font-mono text-[#C86D51] font-bold">
                    {currentPath}
                  </code>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={ROUTES.home}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-7 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#A85238] transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Home className="h-4 w-4" />
                <span>Return Home</span>
              </a>
              <a
                href={ROUTES.products}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#CAD4CC] bg-white px-7 text-xs font-bold uppercase tracking-wider text-[#14211A] hover:bg-[#F7F3EC] transition cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Illustration Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E2E7E2] bg-white">
              <img
                src={notFoundImage}
                alt="Pentagon Plywood 404 Illustration Stack"
                className="w-full h-auto object-cover"
              />

              {/* Floating Quote Badge Overlay */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#E2E8F0] max-w-[240px] hidden sm:flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <p className="text-[11px] leading-snug text-[#4A5750] font-semibold">
                  Every strong structure starts with the right foundation.
                  Let&apos;s help you find it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE POPULAR SECTIONS MATRIX */}
        <div className="pt-8 border-t border-[#CAD4CC]/40">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#C86D51]">
              WHERE WOULD YOU LIKE TO GO?
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl text-[#14211A] mt-1">
              Explore popular sections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* 1. Home */}
            <a
              href={ROUTES.home}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">Home</h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Go to our homepage for an overview of Pentagon Plywood.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Visit Home <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 2. Products */}
            <a
              href={ROUTES.products}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">
                  Products
                </h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Explore our complete range of plywood, blockboards &amp; more.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                View Products <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 3. Applications */}
            <a
              href={ROUTES.applications}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <PanelsTopLeft className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">
                  Applications
                </h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Find the right board for your furniture and interior needs.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Explore Applications <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 4. Resources */}
            <a
              href={ROUTES.home}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">
                  Resources
                </h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Access catalogues, buying guides and technical resources.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Go to Resources <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 5. Dealer Locator */}
            <a
              href={ROUTES.dealers}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">
                  Dealer Locator
                </h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Find authorized stockists &amp; dealers near you.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Find Dealers <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 6. Contact Us */}
            <a
              href={ROUTES.contact}
              className="group rounded-2xl border border-[#E5DDD2] bg-white p-5 text-center shadow-2xs hover:shadow-xl hover:border-[#143D2B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B] mx-auto group-hover:bg-[#143D2B] group-hover:text-white transition-colors">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-[#14211A] mt-3">
                  Contact Us
                </h3>
                <p className="text-[11px] text-[#65736A] mt-1 leading-snug">
                  Talk to our team for enquiries, support or project guidance.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Contact Now <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* STILL NEED HELP CUSTOMER SUPPORT BANNER */}
        <div className="rounded-2xl border border-[#E5DDD2] bg-[#F7F3EC] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#143D2B] border border-[#CAD4CC]/50 shadow-2xs">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#14211A]">
                Still need help?
              </h3>
              <p className="text-xs text-[#65736A] mt-0.5">
                Our team is ready to assist you with product information, orders
                and any other queries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={CONTACT_SECTIONS.form}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0D291D] transition shadow-md cursor-pointer"
            >
              <Headphones className="h-4 w-4" />
              <span>Contact Customer Support</span>
            </a>
            <div className="flex items-center gap-2 text-xs font-bold text-[#14211A]">
              <PhoneCall className="h-4 w-4 text-[#C86D51]" />
              <span>Call Us: +91 70150 85556</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
