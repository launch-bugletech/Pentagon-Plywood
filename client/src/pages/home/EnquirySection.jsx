import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Lock,
  Check,
  CheckCircle2,
  ArrowRight,
  Headphones,
  PhoneCall,
  Mail,
  ChevronDown,
} from "lucide-react";
import ctaBgImage from "../../assets/homepage/cta_bg.jpg";
import { ENQUIRY_PRODUCTS } from "./homeData.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";

const CATEGORIES = [
  "Select product category",
  "Plywood (MR & BWP Marine)",
  "Blockboards & Flush Doors",
  "Fire Retardant Panels",
  "Architectural Veneers",
  "Custom / Commercial Requirements",
];

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    making: "",
    category: CATEGORIES[0],
    quantity: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "product",
        formSource: "home-quote",
        name: form.name,
        phone: form.phone,
        location: form.location,
        productCategory:
          form.category !== CATEGORIES[0] ? form.category : "Plywood",
        productName: form.making || form.category,
        quantity: form.quantity,
        details: form.making ? `Making: ${form.making}` : "",
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err.message || "Failed to submit requirement. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAF8] border-t border-brand-border/60 overflow-hidden"
      id="enquiry"
    >
      {/* Background Image with stacked plywood & eucalyptus leaves on left */}
      <img
        src={ctaBgImage}
        alt="Pentagon Plywood Product Requirement Background"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center pointer-events-none opacity-90"
      />

      {/* Light Gradient Overlay for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAF8]/85 via-[#F8FAF8]/75 to-[#F8FAF8]/60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 space-y-12 lg:space-y-16">
        {/* Main 2-Column Grid: Copy on Left, Form Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8E510D] block">
              LET'S BUILD THE PERFECT FIT
            </span>

            <h2 className="font-display text-[38px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal leading-[1.12] tracking-[-1px]">
              Tell us what you're making.
              <span className="block home-heading-accent font-normal not-italic mt-1">
                We'll help find the required materials.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#4E6359] leading-relaxed max-w-lg font-medium">
              Share the application, product, size, thickness, finish, quantity
              and delivery location. If you are unsure of the exact board,
              describe the finished requirement.
            </p>

            {/* 4 Checkmark Bullet items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E2E9E4] shadow-2xs">
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E4ECE7] text-[#14261F]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#14261F]">
                  Dealer &amp; distributor supply
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E2E9E4] shadow-2xs">
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E4ECE7] text-[#14261F]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#14261F]">
                  Furniture &amp; interior projects
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E2E9E4] shadow-2xs">
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E4ECE7] text-[#14261F]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#14261F]">
                  Bulk board procurement
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E2E9E4] shadow-2xs">
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E4ECE7] text-[#14261F]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#14261F]">
                  Industrial &amp; commercial requirements
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Requirement Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-white/95 backdrop-blur-md p-6 sm:p-9 border border-[#E2E9E4] shadow-xl relative overflow-hidden">
              {/* Subtle top right wave line aesthetic */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(#8E510D_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E4ECE7] text-[#14261F] mx-auto shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-[#14261F]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
                    Product Requirement Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E6359] max-w-sm mx-auto font-medium">
                    Thank you! Our technical sales team is reviewing your
                    requirement and will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E510D] hover:underline cursor-pointer pt-2"
                  >
                    <span>Submit another requirement</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Form Header */}
                  <div className="border-b border-[#E8ECE9] pb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8E510D] block mb-1">
                      PRODUCT REQUIREMENT
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal">
                      Start with the details you know.
                    </h3>
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                        YOUR FULL NAME *
                      </label>
                      <div className="relative">
                        <User className="h-4 w-4 text-[#8BA095] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] placeholder-[#8BA095] focus:outline-none focus:border-[#14261F] focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <div className="relative">
                        <Phone className="h-4 w-4 text-[#8BA095] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="Enter phone number"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] placeholder-[#8BA095] focus:outline-none focus:border-[#14261F] focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: What are you making */}
                  <div>
                    <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                      WHAT ARE YOU MAKING?
                    </label>
                    <input
                      type="text"
                      placeholder="E.g., wardrobes, kitchen cabinets, office furniture"
                      value={form.making}
                      onChange={(e) =>
                        setForm({ ...form, making: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] placeholder-[#8BA095] focus:outline-none focus:border-[#14261F] focus:bg-white transition"
                    />
                  </div>

                  {/* Row 3: Product Category & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                        PRODUCT CATEGORY
                      </label>
                      <div className="relative">
                        <select
                          value={form.category}
                          onChange={(e) =>
                            setForm({ ...form, category: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] appearance-none focus:outline-none focus:border-[#14261F] focus:bg-white transition pr-8 cursor-pointer"
                        >
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="h-4 w-4 text-[#8BA095] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                        QUANTITY
                      </label>
                      <input
                        type="text"
                        placeholder="Enter approx. quantity / sheets"
                        value={form.quantity}
                        onChange={(e) =>
                          setForm({ ...form, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] placeholder-[#8BA095] focus:outline-none focus:border-[#14261F] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 4: Delivery City & State */}
                  <div>
                    <label className="text-[13px] font-extrabold uppercase tracking-wider text-[#5C7268] block mb-1.5">
                      DELIVERY CITY AND STATE
                    </label>
                    <div className="relative">
                      <MapPin className="h-4 w-4 text-[#8BA095] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="E.g., Yamunanagar, Haryana"
                        value={form.location}
                        onChange={(e) =>
                          setForm({ ...form, location: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD9D0] bg-[#F9FAF9] text-sm font-medium text-[#14261F] placeholder-[#8BA095] focus:outline-none focus:border-[#14261F] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-800">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-13 inline-flex items-center justify-center gap-2 rounded-full bg-[#14261F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0A1813] transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : "Send my product requirement"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <div className="pt-1 text-center">
                    <span className="text-[11px] text-[#5C7268] font-medium inline-flex items-center gap-1.5">
                      <Lock className="h-3 w-3 text-[#8BA095]" />
                      Your details are safe with us and will only be used by our
                      team to understand your requirement.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Floating Contact Assistance Bar */}
        <div className="rounded-2xl lg:rounded-full bg-white border border-[#E2E9E4] shadow-md p-4 sm:p-5 px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Col 1: Help intro */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0F4F2] text-[#14261F] border border-[#D9E3DE]">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-bold text-[#14261F] block leading-tight">
                Need help choosing the right product?
              </strong>
              <span className="text-[11px] text-[#5C7268] font-medium block leading-tight mt-0.5">
                Our team is here to assist you.
              </span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-[#E2E9E4]" />

          {/* Col 2: Phone */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0F4F2] text-[#14261F] border border-[#D9E3DE]">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <a
                href="tel:+917015085556"
                className="flex items-center gap-1.5 hover:text-[#E8927C] transition-colors"
              >
                <strong className="text-[15px] sm:text-sm font-bold text-[#14261F] block leading-tight">
                  +91 70150 85556
                </strong>
              </a>
              <span className="text-[15px] text-[#5C7268] font-medium block leading-tight mt-0.5">
                Mon – Sat, 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-[#E2E9E4]" />

          {/* Col 3: Email */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0F4F2] text-[#14261F] border border-[#D9E3DE]">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <a
                href="mailto:sales@pentagonply.com"
                className="flex items-center gap-1.5 hover:text-[#E8927C] transition-colors"
              >
                {" "}
                <strong className="text-xs sm:text-sm font-bold text-[#14261F] block leading-tight">
                  sales@pentagonply.com
                </strong>
              </a>

              <span className="text-[11px] text-[#5C7268] font-medium block leading-tight mt-0.5">
                We reply within 24 hours
              </span>
            </div>
          </div>

          {/* Col 4: Expert WhatsApp/Talk CTA */}
          <div>
            <a
              href="https://wa.me/917015085556"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#CBD9D0] bg-white px-6 text-xs font-bold text-[#14261F] hover:bg-[#F8FAF9] hover:border-[#14261F] transition-all shadow-2xs cursor-pointer whitespace-nowrap"
            >
              <span>Talk to our expert</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
