import { useEffect, useMemo, useState } from "react";
import { comingSoonUrl, CONTACT_SECTIONS, HOME_SECTIONS, ROUTES } from "../../app/routes.js";

import {
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  ArrowRight,
  HelpCircle,
  FileText,
  Compass,
  Sparkles,
  Package,
  Store,
  Building2,
  Globe,
} from "lucide-react";

import kitchenImg from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import livingImg from "../../assets/product/Applications/Contemporary living room with furniture.png";
import officeImg from "../../assets/product/Applications/Modern office with desks and partitions.png";
import wardrobeImg from "../../assets/product/Applications/Modern wardrobe with sliding doors.png";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  WHATSAPP_LINK,
  enquiryTypes,
  customerTypes,
  productCategories,
  directContacts,
  nextSteps,
  productDirections,
  faqs,
} from "../contact/contactData.js";

const iconMap = {
  Package: Package,
  Store: Store,
  Building2: Building2,
  Globe: Globe,
  HelpCircle: HelpCircle,
  PhoneCall: PhoneCall,
  MessageSquare: MessageSquare,
  Mail: Mail,
  MapPin: MapPin,
  FileText: FileText,
  Compass: Compass,
  Sparkles: Sparkles,
};

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`flex flex-col gap-2 min-w-0 ${className}`}>
      <span className="text-[#4A5750] font-bold text-[11px] leading-tight tracking-[0.09em] uppercase font-['Manrope',sans-serif]">
        {label}
        {required && <b className="ml-1 text-[#D99143]">*</b>}
      </span>
      {children}
    </label>
  );
}

function ContactV2Page() {
  const [enquiryType, setEnquiryType] = useState("product");
  const [productCategory, setProductCategory] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  const selectedType = useMemo(
    () => enquiryTypes.find((item) => item.value === enquiryType) || enquiryTypes[0],
    [enquiryType]
  );

  const selectEnquiry = (value) => {
    setEnquiryType(value);
    setSubmitted(false);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = "Contact Pentagon Plywood | Product, Dealer & Bulk Enquiries (v2)";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact Pentagon Plywood in Yamunanagar for plywood, blockboard, doors, dealer, bulk and project enquiries. Call, WhatsApp or share your requirement online.";
  }, []);

  return (
    <div className="contact-v2-page bg-[#FDFBF8] text-[#14211A] overflow-hidden font-['Manrope',sans-serif]">
      {/* Breadcrumb Header */}
      <div className="py-3.5 border-b border-[#CAD4CC]/50 bg-[#F7F3EC] text-[#65736A] font-semibold text-[11px] leading-relaxed tracking-[0.12em] uppercase font-['Manrope',sans-serif]">
        <div className="max-w-[1280px] mx-auto px-7 flex items-center gap-2.5">
          <a href={ROUTES.home} className="hover:text-[#14211A] transition-colors">Home</a>
          <span className="text-[#CAD4CC]">›</span>
          <strong className="text-[#14211A]">Contact Us (v2 Tailwind)</strong>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-[68px] pb-[78px] bg-[#FDFBF8]">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] gap-14 lg:gap-28 items-start">
          {/* Left Column */}
          <div className="min-[900px]:sticky min-[900px]:top-[110px] min-[900px]:pt-[26px]">
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif]">
              CONTACT PENTAGON
            </div>
            <h1 className="max-w-[14ch] my-6 font-['Oswald',sans-serif] text-[48px] lg:text-[72px] font-bold leading-[0.98] tracking-[-1px] text-[#14211A]">
              Tell Us What You’re Building.{" "}
              <em className="font-['DM_Serif_Display',Georgia,serif] text-[#D99143] italic font-normal not-italic">
                Let’s Start With the Right Conversation.
              </em>
            </h1>
            <p className="max-w-[590px] text-[#4A5750] text-[18px] leading-[1.75] font-normal font-['Manrope',sans-serif]">
              Looking for plywood, blockboard or doors for resale, furniture, interiors or a larger project? Share your requirement, and we’ll help you understand the relevant product options and current availability.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#143D2B] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D] transition-all active:scale-95"
                href={PHONE_LINK}
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#143D2B] bg-white px-8 text-xs font-bold uppercase tracking-wider text-[#143D2B] shadow-xs transition-all hover:bg-[#143D2B]/5 active:scale-95"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare className="h-4 w-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-6 text-sm text-[#65736A] font-medium leading-relaxed font-['Manrope',sans-serif]">
              Prefer speaking directly?{" "}
              <a href={PHONE_LINK} className="text-[#14211A] font-bold underline hover:text-[#D99143]">
                Call us at {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-4 border-y border-[#CAD4CC] text-center">
              {["Product", "Dealer", "Project", "Export"].map((tag, idx) => (
                <span
                  key={tag}
                  className={`py-4 px-1 text-[9px] font-bold text-[#65736A] tracking-[0.12em] uppercase font-['Manrope',sans-serif] ${
                    idx < 3 ? "border-r border-[#CAD4CC]" : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modern Interior Visual Teaser */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#CAD4CC]/80 bg-white p-3 shadow-xs">
              <div className="relative h-44 overflow-hidden rounded-xl">
                <img
                  src={livingImg}
                  alt="Modern interior crafted with Pentagon plywood"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D99143]">
                    CRAFTED FOR REAL SPACES
                  </span>
                  <p className="text-xs font-medium text-white/90">
                    Living rooms, kitchens, wardrobes & commercial interiors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Master Form */}
          <div>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate={false}
              className="p-[28px] lg:p-[48px] border border-[#CAD4CC] border-t-4 border-t-[#D99143] rounded-b-[26px] bg-[#F7F3EC] shadow-[0_24px_70px_rgba(41,35,30,0.08)]"
            >
              {submitted ? (
                <div className="flex min-h-[500px] flex-col justify-center items-start text-left" role="status">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#D99143] text-white text-2xl font-bold mb-6">
                    ✓
                  </div>
                  <div className="text-[#D99143] font-bold text-[11px] tracking-[0.18em] uppercase font-['Manrope',sans-serif]">
                    REQUIREMENT RECEIVED
                  </div>
                  <h2 className="mt-2 font-['DM_Serif_Display',Georgia,serif] text-3xl lg:text-4xl leading-tight text-[#14211A]">
                    Thank You. Your Requirement Has Reached Us.
                  </h2>
                  <p className="mt-5 text-[#4A5750] text-[15px] leading-[1.7] max-w-[560px]">
                    Your enquiry reference is <strong className="text-[#14211A]">PP-{new Date().getFullYear()}-WEB</strong>. Our team will review the details and contact you using your preferred method.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#0B2A1D]"
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageSquare className="h-4 w-4" /> Continue on WhatsApp
                    </a>
                    <a
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#CAD4CC] bg-white px-6 text-xs font-bold uppercase tracking-wider text-[#14211A] hover:bg-black/5"
                      href={HOME_SECTIONS.products}
                    >
                      Explore Products
                    </a>
                  </div>
                  <button
                    type="button"
                    className="mt-6 border-b border-[#14211A] bg-transparent text-[#14211A] text-[11px] font-bold tracking-wider uppercase cursor-pointer"
                    onClick={() => {
                      setSubmitted(false);
                      setExpanded(false);
                    }}
                  >
                    Send another requirement
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start gap-5 pb-5 border-b border-[#CAD4CC]">
                    <div>
                      <div className="text-[#D99143] font-bold text-[11px] tracking-[0.18em] uppercase font-['Manrope',sans-serif]">
                        SHARE YOUR REQUIREMENT
                      </div>
                      <h2 className="mt-2 font-['DM_Serif_Display',Georgia,serif] text-3xl lg:text-4xl leading-tight text-[#14211A]">
                        {selectedType.title}
                      </h2>
                    </div>
                    <span className="text-[#D99143] font-bold text-[11px] tracking-[0.15em] font-['Manrope',sans-serif]">
                      01—03
                    </span>
                  </div>

                  <p className="my-6 text-[#65736A] text-sm leading-[1.65] font-['Manrope',sans-serif]">
                    You do not need every technical specification. Tell us what you know, and our team can continue the discussion.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Enquiry type" required className="sm:col-span-2">
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        required
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] font-medium text-sm focus:border-[#D99143] focus:outline-hidden"
                      >
                        {enquiryTypes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Product category" required>
                      <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] font-medium text-sm focus:border-[#D99143] focus:outline-hidden"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Product or grade">
                      <input
                        type="text"
                        placeholder="e.g. MR Grade Plywood"
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Intended application">
                      <input
                        type="text"
                        placeholder="Furniture, kitchen, doors…"
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Estimated quantity">
                      <input
                        type="text"
                        placeholder={productCategory === "Not Sure Yet" ? "Optional" : "e.g. 50"}
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                      />
                    </Field>

                    <Field label="Delivery city" required className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="City"
                        required
                        className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                      />
                    </Field>
                  </div>

                  {expanded && (
                    <div className="mt-8 pt-7 border-t border-[#CAD4CC]">
                      <div className="flex items-center gap-3 my-2 mb-6">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-[#D99143] text-[#D99143] font-bold text-[10px] font-['Manrope',sans-serif]">
                          02
                        </span>
                        <strong className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
                          Tell us about the requirement
                        </strong>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Requirement details" required className="sm:col-span-2">
                          <textarea
                            rows={4}
                            placeholder="Tell us the application, size, thickness, finish or any other useful detail."
                            required
                            className="w-full min-h-[110px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                          />
                        </Field>

                        <Field label="State" required>
                          <input
                            type="text"
                            required
                            placeholder="State"
                            className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                          />
                        </Field>

                        <Field label="Required-by date">
                          <input
                            type="date"
                            className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-[#14211A] text-sm focus:border-[#D99143] focus:outline-hidden"
                          />
                        </Field>

                        <Field label="Upload a reference" className="sm:col-span-2">
                          <input
                            type="file"
                            accept=".pdf,.xls,.xlsx,.doc,.docx,image/*"
                            className="w-full min-h-[49px] p-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-xs text-[#65736A]"
                          />
                          <small className="mt-1 text-[#65736A] text-[11px] leading-snug">
                            Optional: PDF, spreadsheet, drawing or reference image.
                          </small>
                        </Field>
                      </div>

                      {/* Conditional Dealer Details */}
                      {enquiryType === "dealer" && (
                        <div className="my-7 p-5 border-l-3 border-l-[#D99143] bg-[#EDE5D9]/60 rounded-r-md">
                          <strong className="block mb-4 font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#14211A]">
                            Dealer or distributor details
                          </strong>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Business name" required>
                              <input type="text" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                            </Field>
                            <Field label="Market or territory" required>
                              <input type="text" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                            </Field>
                          </div>
                        </div>
                      )}

                      {/* Conditional Export Details */}
                      {enquiryType === "export" && (
                        <div className="my-7 p-5 border-l-3 border-l-[#143D2B] bg-[#143D2B]/5 rounded-r-md">
                          <strong className="block mb-4 font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#14211A]">
                            Export requirement
                          </strong>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Destination country and port" required>
                              <input type="text" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                            </Field>
                            <Field label="Estimated order quantity" required>
                              <input type="text" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                            </Field>
                          </div>
                        </div>
                      )}

                      {/* Contact Info Step 03 */}
                      <div className="flex items-center gap-3 my-2 mb-6 mt-8 border-t border-[#CAD4CC] pt-6">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-[#D99143] text-[#D99143] font-bold text-[10px] font-['Manrope',sans-serif]">
                          03
                        </span>
                        <strong className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
                          How can we reach you?
                        </strong>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Full name" required>
                          <input type="text" autoComplete="name" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                        </Field>
                        <Field label="Mobile number" required>
                          <input type="tel" autoComplete="tel" placeholder="+91" required className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                        </Field>
                        <Field label="Customer type" required>
                          <select required defaultValue="" className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm">
                            <option value="" disabled>Select customer type</option>
                            {customerTypes.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Email address">
                          <input type="email" autoComplete="email" className="w-full min-h-[49px] px-3.5 py-3 border border-[#CAD4CC] rounded-md bg-[#FDFBF8] text-sm" />
                        </Field>
                      </div>

                      <label className="flex items-start gap-2.5 mt-6 text-[#65736A] text-xs leading-relaxed font-['Manrope',sans-serif]">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          required
                          className="mt-1 h-4 w-4 rounded-xs border-[#CAD4CC] accent-[#D99143]"
                        />
                        <span>
                          I agree that Pentagon Plywood Pvt. Ltd. may contact me by phone, WhatsApp or email regarding this enquiry. My information will be handled according to the <a href={comingSoonUrl("Privacy policy")} className="text-[#D99143] underline">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                  )}

                  <button
                    className="w-full mt-7 min-h-[50px] inline-flex items-center justify-center gap-2 rounded-full bg-[#143D2B] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0B2A1D] transition-all cursor-pointer"
                    type="submit"
                  >
                    {expanded ? "Send My Requirement" : "Continue Your Requirement"} <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="mt-3.5 text-center text-[#65736A] text-[10px] leading-relaxed font-['Manrope',sans-serif]">
                    Fields marked * are required. Your entered information remains in place if a field needs attention.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="py-[82px] lg:py-[140px] bg-[#F7F3EC]" id="enquiry-types">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.72fr)_minmax(360px,1.28fr)] gap-10 lg:gap-32 items-end mb-14">
            <div className="lg:col-span-2 mb-[-18px] text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif]">
              HOW CAN WE HELP?
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              Choose What You’d Like to Discuss.
            </h2>
            <p className="text-[#4A5750] text-[17px] leading-[1.75] font-normal font-['Manrope',sans-serif]">
              Selecting an enquiry type helps us ask for the right information and route your message to the relevant team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-[14px]">
            {enquiryTypes.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || HelpCircle;
              const isSelected = item.value === enquiryType;
              const colClass = idx === 3 ? "md:col-start-2 md:col-span-2" : "md:col-span-2";
              return (
                <article
                  key={item.value}
                  className={`flex flex-col min-h-[330px] p-[25px] border rounded-[16px] bg-[#FDFBF8] transition-all duration-250 ${colClass} ${
                    isSelected
                      ? "border-[#D99143] shadow-[inset_0_3px_0_#D99143,0_20px_50px_rgba(41,35,30,0.07)] -translate-y-1.5"
                      : "border-[#CAD4CC]/80 hover:border-[#D99143]"
                  }`}
                >
                  <div className="flex justify-between items-center pb-7 border-b border-[#CAD4CC]/80 text-[#D99143] font-bold text-xs font-['Manrope',sans-serif]">
                    <span>{item.number}</span>
                    <IconComp className="h-5 w-5" />
                  </div>

                  <h3 className="mt-[28px] font-['DM_Serif_Display',Georgia,serif] text-[26px] leading-[1.1] font-normal text-[#14211A]">
                    {item.title}
                  </h3>

                  <p className="mt-[15px] text-[#65736A] text-[14px] leading-[1.65] font-normal font-['Manrope',sans-serif]">
                    {item.copy}
                  </p>

                  <button
                    type="button"
                    onClick={() => selectEnquiry(item.value)}
                    className="mt-auto pt-[24px] flex justify-between items-center text-[#D99143] hover:text-[#14211A] font-bold text-[10px] leading-tight tracking-[0.05em] uppercase font-['Manrope',sans-serif] border-0 bg-transparent cursor-pointer"
                  >
                    <span>{item.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Conversation Section */}
      <section className="py-[82px] lg:py-[140px] bg-[#FDFBF8]" id="direct-contact">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="mb-14">
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif] mb-2">
              PREFER A DIRECT CONVERSATION?
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              Reach Pentagon in the Way That Works for You.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-[#CAD4CC]">
            {directContacts.map((item, index) => {
              const IconComp = iconMap[item.iconName] || PhoneCall;
              return (
                <article
                  key={item.type}
                  className={`min-h-[350px] p-[32px] border-b sm:border-b-0 lg:border-r border-[#CAD4CC] last:border-r-0 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#D99143] font-bold text-[11px] font-['Manrope',sans-serif]">
                        0{index + 1}
                      </span>
                      <IconComp className="h-4 w-4 text-[#D99143]" />
                    </div>

                    <h3 className="mt-[28px] font-['DM_Serif_Display',Georgia,serif] text-[26px] leading-[1.1] font-normal text-[#14211A]">
                      {item.type}
                    </h3>

                    <strong className="block min-h-[44px] mt-[16px] text-[#D99143] font-bold text-[14px] leading-[1.4] break-all font-['Manrope',sans-serif]">
                      {item.detail}
                    </strong>

                    <p className="mt-[15px] text-[#65736A] text-[14px] leading-[1.65] font-['Manrope',sans-serif]">
                      {item.copy}
                    </p>
                  </div>

                  <a
                    href={item.href}
                    target={item.type === "WhatsApp" ? "_blank" : undefined}
                    rel={item.type === "WhatsApp" ? "noreferrer" : undefined}
                    className="mt-[32px] flex items-center gap-2 text-[#14211A] hover:text-[#D99143] font-bold text-[10px] leading-normal tracking-[0.08em] uppercase font-['Manrope',sans-serif] transition-colors"
                  >
                    <span>{item.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-[25px] text-[#65736A] text-[12px] leading-[1.6] font-['Manrope',sans-serif]">
            Please contact our team before visiting so we can confirm the appropriate time and person for your requirement.
          </p>
        </div>
      </section>

      {/* Yamunanagar Location Section */}
      <section className="py-[82px] lg:py-[135px] bg-[#14211A] text-white" id="location">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-28 items-center">
          <div>
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif] mb-[22px]">
              FIND PENTAGON
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-white mb-4">
              Manufacturing From Yamunanagar, Haryana.
            </h2>
            <p className="text-white/80 text-[17px] leading-[1.75] font-['Manrope',sans-serif] mb-[35px]">
              Pentagon Plywood operates from one of India’s established wood-product manufacturing regions. Contact our team before planning a business or factory visit.
            </p>

            <address className="not-italic font-['DM_Serif_Display',Georgia,serif] text-[24px] lg:text-[32px] leading-[1.35] text-white/90 mb-[35px]">
              Village Raipur, Khajuri Road<br />
              Yamunanagar, Haryana 135001<br />
              India
            </address>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FDFBF8] px-7 text-xs font-bold uppercase tracking-wider text-[#14211A] shadow-md hover:bg-white"
                href="https://www.google.com/maps/search/?api=1&query=Village+Raipur+Khajuri+Road+Yamunanagar+Haryana+135001"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-7 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10"
                href={PHONE_LINK}
              >
                Plan a Visit
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-end min-h-[380px] p-[36px] rounded-[20px] overflow-hidden border border-white/20">
            <img
              src={officeImg}
              alt="Pentagon Plywood Factory Location"
              className="absolute inset-0 h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 text-white">
              <small className="text-[10px] font-bold tracking-widest text-[#D99143] uppercase block font-['Manrope',sans-serif]">
                PENTAGON PLYWOOD PVT. LTD.
              </small>
              <strong className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-white block mt-1">
                Yamunanagar · Haryana
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step Workflow */}
      <section className="py-[82px] lg:py-[140px] bg-[#FDFBF8]" id="next-step">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="mb-14">
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif] mb-2">
              THE NEXT STEP
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              A Clear Enquiry Makes the Next Conversation More Useful.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#CAD4CC]">
            {nextSteps.map((step, idx) => {
              const IconComp = iconMap[step.iconName] || FileText;
              return (
                <article
                  key={step.number}
                  className={`min-h-[280px] p-[36px] pl-0 ${
                    idx < 2 ? "md:border-r border-[#CAD4CC]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#D99143] font-bold text-[11px] font-['Manrope',sans-serif]">
                      {step.number}
                    </span>
                    <IconComp className="h-4 w-4 text-[#D99143]" />
                  </div>

                  <h3 className="mt-[28px] font-['DM_Serif_Display',Georgia,serif] text-[26px] leading-[1.1] font-normal text-[#14211A]">
                    {step.title}
                  </h3>

                  <p className="mt-[15px] text-[#65736A] text-[14px] leading-[1.65] font-['Manrope',sans-serif]">
                    {step.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Directions */}
      <section className="py-[82px] lg:py-[140px] bg-[#F7F3EC]">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="mb-14">
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif] mb-2">
              NOT SURE WHAT TO ASK FOR?
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              Start With What You’re Planning to Make.
            </h2>
          </div>

          <div className="divide-y divide-[#CAD4CC] border-t border-b border-[#CAD4CC]">
            {productDirections.map((dir, idx) => (
              <article
                key={dir.title}
                className="grid grid-cols-1 md:grid-cols-[45px_1fr_auto] gap-[24px] items-center py-[32px]"
              >
                <span className="text-[#D99143] font-bold text-xs font-['Manrope',sans-serif]">
                  0{idx + 1}
                </span>

                <div>
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-[26px] leading-[1.1] font-normal text-[#14211A]">
                    {dir.title}
                  </h3>
                  <p className="mt-2 text-[#65736A] text-[14px] leading-[1.65] font-['Manrope',sans-serif]">
                    {dir.copy}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => selectEnquiry(dir.type)}
                  className="flex items-center gap-3 text-[#D99143] hover:text-[#14211A] font-bold text-[10px] leading-tight tracking-[0.05em] uppercase font-['Manrope',sans-serif] border-0 bg-transparent cursor-pointer"
                >
                  <span>{dir.action}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-[82px] lg:py-[140px] bg-[#FDFBF8]" id="contact-faq">
        <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-32">
          <div>
            <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-['Oswald',sans-serif] text-[42px] lg:text-[66px] font-bold leading-none tracking-[-1px] text-[#14211A]">
              Useful Details Before You Send Your Requirement.
            </h2>
          </div>

          <div className="divide-y divide-[#CAD4CC] border-t border-[#CAD4CC]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <details key={faq.question} open={isOpen} className="py-[22px]">
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenFaq(isOpen ? -1 : index);
                    }}
                    className="flex justify-between items-center text-left font-['DM_Serif_Display',Georgia,serif] text-[20px] lg:text-[24px] text-[#14211A] cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#D99143] font-bold text-xs font-['Manrope',sans-serif]">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <i className="text-[#D99143] not-italic text-2xl font-normal ml-4">
                      {isOpen ? "−" : "+"}
                    </i>
                  </summary>
                  {isOpen && (
                    <p className="mt-[15px] text-[#65736A] text-[14px] leading-[1.65] font-['Manrope',sans-serif]">
                      {faq.answer}
                    </p>
                  )}
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-[80px] lg:py-[130px] bg-[#F7F3EC] border-t border-[#CAD4CC] text-center">
        <div className="max-w-[1280px] mx-auto px-7">
          <div className="text-[#D99143] font-bold text-[11px] leading-tight tracking-[0.18em] uppercase font-['Manrope',sans-serif]">
            READY TO BEGIN?
          </div>
          <h2 className="max-w-[22ch] mx-auto my-5 font-['Oswald',sans-serif] text-[38px] lg:text-[62px] font-bold leading-[1.02] tracking-[-1px] text-[#14211A]">
            Your Requirement Doesn’t Have to Be Perfect.{" "}
            <em className="font-['DM_Serif_Display',Georgia,serif] text-[#D99143] italic font-normal not-italic">
              It Just Has to Start Somewhere.
            </em>
          </h2>
          <p className="max-w-[620px] mx-auto text-[#4A5750] text-[17px] leading-[1.75] font-['Manrope',sans-serif]">
            Tell us what you are making, selling or planning. Share the product, application, quantity and location you know today, and our team can continue the conversation from there.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#143D2B] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2A1D]"
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                selectEnquiry("product");
              }}
            >
              Send Your Requirement <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#143D2B] bg-white px-8 text-xs font-bold uppercase tracking-wider text-[#143D2B] hover:bg-[#143D2B]/5"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <MessageSquare className="h-4 w-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactV2Page;
