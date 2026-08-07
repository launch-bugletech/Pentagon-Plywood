import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Compass, FileText, Layers, Mail, PhoneCall, Sparkles } from 'lucide-react';
import { CONTACT_SECTIONS, HOME_SECTIONS, ROUTES } from '@/app/routes.js';

function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pathFeature = window.location.pathname
    .split('/')
    .filter(Boolean)
    .at(-1)
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
  const feature = new URLSearchParams(window.location.search).get('feature') || pathFeature || 'This feature';

  useEffect(() => {
    document.title = `${feature} | Coming Soon | Pentagon Plywood`;
  }, [feature]);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 500);
    }
  };

  return (
    <div className="min-h-[85vh] bg-[#FDFBF8] text-[#14211A] py-12 px-5 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-4 -bottom-10 text-9xl sm:text-[14rem] font-black font-['Oswald',sans-serif] uppercase tracking-tighter text-[#14211A]/[0.03] pointer-events-none select-none">
        COMING SOON
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <a
            href={ROUTES.home}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#65736A] hover:text-[#C86D51] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-[11px] font-extrabold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C86D51] animate-pulse" />
            In Active Development
          </span>
        </div>

        {/* Main Hero Showcase Card */}
        <div className="rounded-[32px] border border-[#E2DDD5] bg-[#0B2A1D] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-radial from-white/5 to-transparent opacity-60 pointer-events-none" />

          {/* Left Hero Text & Form */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-[#E8927C]">
              <Clock size={14} />
              <span>Upcoming Site Update</span>
            </div>

            <h1 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-5xl font-normal leading-tight text-white">
              <span className="text-[#E8927C] font-bold block">{feature}</span>
              is currently under preparation.
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              We are carefully preparing this section with technical specifications, certified grade documentation, and product resources.
            </p>

            {/* Notification Box */}
            <div className="pt-2 max-w-md">
              {isSubmitted ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-[#E8927C]/40 text-[#E8927C] animate-in fade-in duration-300">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span className="text-xs font-bold">
                    Thank you! We will notify you as soon as {feature} goes live.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email for launch updates..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 pl-11 pr-4 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/50 text-xs font-medium focus:outline-none focus:border-[#E8927C] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-12 px-6 rounded-full bg-[#C86D51] hover:bg-[#A85238] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="w-full max-w-xs p-6 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C86D51]/20 border border-[#C86D51]/40 text-[#E8927C] flex items-center justify-center">
                <Sparkles size={28} />
              </div>
              <div>
                <strong className="text-sm font-bold text-white block">Crafted for Excellence</strong>
                <p className="text-xs text-white/70 mt-1">
                  Built on 40+ years of timber heritage and Indian manufacturing precision.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-[#E8927C] font-semibold flex items-center justify-center gap-1.5">
                <Layers size={13} />
                <span>IS:303 & IS:710 Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Alternatives Navigation Matrix */}
        <div className="space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#65736A]">
            While You Wait, Explore Live Sections:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={ROUTES.products}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <Layers size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Product Portfolio
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Browse manufactured plywood, blockboard &amp; flush doors.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Explore Range <ArrowRight size={14} />
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
                  Select your space for recommended grade guidance.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Select Space <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={HOME_SECTIONS.resources}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Knowledge Centre
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Read buying guides, FAQs and timber specifications.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Read Guides <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={CONTACT_SECTIONS.form}
              className="group p-5 rounded-2xl bg-[#F7F3EC]/70 hover:bg-[#F7F3EC] border border-[#E2DDD5] hover:border-[#143D2B] transition-all shadow-2xs hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#143D2B] text-[#E8927C] group-hover:bg-[#C86D51] group-hover:text-white flex items-center justify-center transition-colors">
                <PhoneCall size={20} />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#14211A] group-hover:text-[#C86D51] transition-colors block">
                  Direct Enquiry
                </strong>
                <p className="text-xs text-[#65736A] mt-1 leading-relaxed">
                  Get pricing quotes &amp; bulk supply support from our sales team.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] group-hover:translate-x-1 transition-transform">
                Contact Sales <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
