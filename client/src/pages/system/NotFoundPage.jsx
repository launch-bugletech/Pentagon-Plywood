import { useEffect } from 'react';
import { AlertCircle, ArrowLeft, ArrowRight, Compass, DoorOpen, Home, Layers, PhoneCall, Search } from 'lucide-react';
import { PRODUCT_ROUTES, ROUTES } from '../../app/routes.js';

function NotFoundPage() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    document.title = 'Page Not Found (404) | Pentagon Plywood';
  }, []);

  return (
    <div className="min-h-[85vh] bg-[#FDFBF8] text-[#14211A] py-12 px-5 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-4 -bottom-10 text-9xl sm:text-[18rem] font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.03] pointer-events-none select-none">
        404
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#65736A] hover:text-[#C86D51] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-[11px] font-extrabold uppercase tracking-wider">
            <AlertCircle size={13} />
            Error 404
          </span>
        </div>

        {/* Main Hero Showcase Card */}
        <div className="rounded-[32px] border border-[#E2DDD5] bg-[#0B2A1D] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-radial from-white/5 to-transparent opacity-60 pointer-events-none" />

          {/* Left Hero Content */}
          <div className="lg:col-span-8 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-[#E8927C]">
              <Search size={14} />
              <span>Unrecognized Web Path</span>
            </div>

            <h1 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-5xl font-normal leading-tight text-white">
              The page you requested <span className="text-[#E8927C] block font-bold">could not be located.</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              The link may be outdated, mistyped, or the page has been restructured. Use the navigation shortcuts below to continue exploring Pentagon Plywood.
            </p>

            {currentPath && (
              <div className="inline-block p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                URL Hint: <span className="text-[#E8927C]">{currentPath}</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={ROUTES.home}
                className="h-12 px-7 rounded-full bg-[#C86D51] hover:bg-[#A85238] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Home size={16} />
                <span>Return to Homepage</span>
              </a>
              <a
                href={ROUTES.products}
                className="h-12 px-6 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right 404 Visual Display */}
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className="w-full max-w-xs p-6 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl text-center space-y-3 shadow-xl">
              <div className="font-['Oswald',sans-serif] text-7xl font-extrabold text-[#E8927C] tracking-tight">
                404
              </div>
              <strong className="text-sm font-bold text-white block">Page Not Found</strong>
              <p className="text-xs text-white/70 leading-relaxed">
                Need immediate help? Connect directly with our team for catalog dispatches or project guidance.
              </p>
              <a
                href={ROUTES.contact}
                className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#E8927C] hover:text-white transition-colors"
              >
                <PhoneCall size={14} />
                <span>Contact Customer Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Navigation Matrix */}
        <div className="space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#65736A]">
            Popular Navigation Destinations:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href={ROUTES.home}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <Home size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Home Overview
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Start from the main brand overview page.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Go to Home <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={PRODUCT_ROUTES.plywood}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <Layers size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Plywood Range
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Inspect MR, BWP, Marine &amp; Fire Retardant grades.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Plywood Catalog <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={PRODUCT_ROUTES.flushDoors}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <DoorOpen size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Flush Doors
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Explore high-density seasoned timber door solutions.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Door Range <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={ROUTES.applications}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <Compass size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Applications Guide
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Find plywood specifications by space type.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Space Guide <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={ROUTES.dealers}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <Search size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Dealer Locator
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Locate authorized stockists &amp; trade distributors.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Find Dealers <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={ROUTES.contact}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <PhoneCall size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Contact Us
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Get in touch with our sales &amp; technical advisors.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Send Query <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
