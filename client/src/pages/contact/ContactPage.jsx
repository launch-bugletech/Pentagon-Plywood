import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
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
  FlaskConical,
  Store,
  Building2,
  Globe,
  CheckCircle2,
  ChevronDown,
  X,
  Maximize2,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  Layers,
  CheckSquare,
  Upload,
} from "lucide-react";
import { ROUTES } from "@/app/routes.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
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
  plannerCategories,
  projectEstimates,
  plannerTabs,
} from "./contactData.js";

// Rich Colorful Interior & Factory Image Imports
import kitchenImg from "../../assets/product/Applications/Modern kitchen with cabinets and island.png";
import livingImg from "../../assets/product/Applications/Contemporary living room with furniture.png";
import officeImg from "../../assets/product/Applications/Modern office with desks and partitions.png";
import wardrobeImg from "../../assets/product/Applications/Modern wardrobe with sliding doors.png";
import heroWoodImage from "../../assets/homepage/hero_wood_interior_plants.jpg";
import factoryImage from "../../assets/homepage/Plywood-Manufacturing-1024x683.png"; 

const iconMap = {
  Package,
  Store,
  Building2,
  Globe,
  FlaskConical,
  HelpCircle,
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  FileText,
  Compass,
  Sparkles,
};

const categoryImages = {
  furniture: livingImg,
  kitchen: kitchenImg,
  doors: wardrobeImg,
  boq: officeImg,
  chemical: factoryImage,
};

const FACTORY_360_URL =
  "https://www.google.com/maps/embed?pb=!4v1786021986875!6m8!1m7!1sR9TCbEr38ulcKQYtMl5aJA!2m2!1d30.09940653232269!2d77.28578053381996!3f85.68189271022864!4f-16.154239758161893!5f0.7820865974627469";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/5K3S7Zpc6ZX3e7uF7";
const PENTAGON_LOCATION = [77.28599938929692, 30.099496445420478];
const FACTORY_ADDRESS =
  "Pentagon Plywood Pvt. Ltd., Village Raipur, Khajuri Road, Yamunanagar, Haryana 135001, India";

const VALID_ENQUIRY_TYPES = new Set(enquiryTypes.map((item) => item.value));

const inputClass =
  "w-full min-h-[48px] rounded-xl border border-[#CAD4CC] bg-white px-3.5 py-2.5 text-sm text-[#14211A] outline-none transition placeholder:text-[#89948D] focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20";

const textareaClass = `${inputClass} min-h-[118px] resize-y`;

function Field({ label, required = false, hint, className = "", children }) {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
      <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#4A5750]">
        {label}
        {required && <span className="ml-1 text-[#C86D51]">*</span>}
      </span>
      {children}
      {hint && (
        <span className="text-[11px] leading-relaxed text-[#7A867F]">
          {hint}
        </span>
      )}
    </label>
  );
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

function IndiaMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return undefined;

    const map = new maplibregl.Map({
      container,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: PENTAGON_LOCATION,
      zoom: 12,
      attributionControl: true,
    });

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );

    const popup = new maplibregl.Popup({
      offset: 28,
      closeButton: false,
    }).setHTML(`
      <strong style="font-family:sans-serif;font-size:13px;color:#14211A;">Pentagon Plywood Pvt. Ltd.</strong>
      <br />
      <span style="font-family:sans-serif;font-size:12px;color:#4A5750;">
        Village Raipur, Khajuri Road<br />
        Yamunanagar, Haryana 135001
      </span>
    `);

    const marker = new maplibregl.Marker({ color: "#C86D51" })
      .setLngLat(PENTAGON_LOCATION)
      .setPopup(popup)
      .addTo(map);

    map.once("load", () => {
      map.resize();
      map.easeTo({
        center: PENTAGON_LOCATION,
        zoom: 12,
        padding: { top: 24, right: 24, bottom: 24, left: 24 },
        duration: 0,
      });
    });

    const resizeObserver = new ResizeObserver(() => map.resize());
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      marker.remove();
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-full min-h-[360px] w-full overflow-hidden rounded-3xl border border-white/10"
      aria-label="Map showing Pentagon Plywood in Yamunanagar, Haryana"
    />
  );
}

function FactoryLocationView() {
  const [showFactoryView, setShowFactoryView] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(FACTORY_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (!showFactoryView) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setShowFactoryView(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showFactoryView]);

  return (
    <>
      <div className="relative min-h-[470px] overflow-hidden rounded-[28px] border border-white/15 bg-[#0B2A1D] shadow-2xl">
        <div className="absolute inset-0">
          <IndiaMap />
        </div>

        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-[#14211A]/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-md">
          Yamunanagar Manufacturing Facility
        </div>

        <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/15 bg-[#14211A]/95 p-5 text-white shadow-xl backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#E8927C]">
                Pentagon Plywood Pvt. Ltd.
              </span>
              <strong className="mt-1 block font-['DM_Serif_Display',Georgia,serif] text-xl font-normal">
                Village Raipur, Khajuri Road · Yamunanagar
              </strong>
            </div>

            <button
              type="button"
              onClick={copyAddress}
              className="inline-flex items-center gap-2 self-start text-xs font-bold text-white/80 transition hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#25D366]" /> Address copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#C86D51]" /> Copy address
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#C86D51]" /> Contact before
                visiting
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-[#C86D51]" /> Supply
                enquiries welcome
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowFactoryView(true)}
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#C86D51] px-4 text-xs font-bold text-white transition hover:bg-[#A85238]"
              >
                <Maximize2 className="h-3.5 w-3.5" /> 360° view
              </button>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 text-xs font-bold text-white transition hover:bg-white/20"
              >
                Google Maps <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showFactoryView && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="360 degree view of Pentagon Plywood factory"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setShowFactoryView(false);
          }}
        >
          <div className="flex h-[82vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#14211A] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0B2A1D] px-5 py-4 text-white sm:px-6">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#E8927C]">
                  Interactive factory view
                </span>
                <strong className="text-base sm:text-lg">
                  Pentagon Plywood · Yamunanagar
                </strong>
              </div>
              <button
                type="button"
                aria-label="Close factory view"
                onClick={() => setShowFactoryView(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <iframe
              className="w-full flex-1 border-0"
              src={FACTORY_360_URL}
              title="360 degree view of Pentagon Plywood factory"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      )}
    </>
  );
}

function EnquiryTypeSelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#4A5750]">
        What can we help you with? <span className="text-[#C86D51]">*</span>
      </legend>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
        {enquiryTypes.map((item) => {
          const Icon = iconMap[item.iconName] || HelpCircle;
          const selected = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(item.value)}
              className={`group min-h-[94px] rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30 ${
                selected
                  ? "border-[#143D2B] bg-[#143D2B] text-white shadow-lg"
                  : "border-[#CAD4CC] bg-white text-[#14211A] hover:border-[#C86D51]"
              }`}
            >
              <span
                className={`mb-2 inline-grid h-8 w-8 place-items-center rounded-xl ${
                  selected
                    ? "bg-white/10 text-[#E8927C]"
                    : "bg-[#F7F3EC] text-[#143D2B]"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <strong className="block text-xs leading-snug sm:text-sm">
                {item.shortTitle || item.title}
              </strong>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function ProductFields() {
  return (
    <>
      <Field label="Product category" required>
        <select
          name="productCategory"
          required
          defaultValue="Plywood"
          className={inputClass}
        >
          {productCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Approximate quantity">
        <input
          name="quantity"
          type="text"
          placeholder="e.g. 80 sheets / 25 doors"
          className={inputClass}
        />
      </Field>

      <Field label="Application" className="sm:col-span-2">
        <input
          name="application"
          type="text"
          placeholder="e.g. wardrobe, kitchen cabinets, office furniture"
          className={inputClass}
        />
      </Field>

      <Field label="Requirement details" className="sm:col-span-2">
        <textarea
          name="details"
          placeholder="Mention grade, thickness, sheet size, quantity or anything else you already know."
          className={textareaClass}
        />
      </Field>
    </>
  );
}

function ProjectFields() {
  return (
    <>
      <Field label="Project name or type" required>
        <input
          name="projectType"
          type="text"
          required
          placeholder="e.g. villa interior / hotel / office"
          className={inputClass}
        />
      </Field>

      <Field label="Project location" required>
        <input
          name="projectLocation"
          type="text"
          required
          placeholder="City & State"
          className={inputClass}
        />
      </Field>

      <Field label="Approximate quantity">
        <input
          name="projectQuantity"
          type="text"
          placeholder="e.g. 150 sheets / 45 doors"
          className={inputClass}
        />
      </Field>

      <Field label="Target procurement date">
        <input name="procurementDate" type="date" className={inputClass} />
      </Field>

      <Field
        label="Upload BOQ / drawing"
        hint="PDF, DOC, XLS or image. Connect the final size limit to your backend."
        className="sm:col-span-2"
      >
        <label className="flex min-h-[104px] cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-[#B9C6BD] bg-[#F7F3EC] px-4 text-center text-sm font-semibold text-[#4A5750] transition hover:border-[#C86D51] hover:bg-white">
          <Upload className="h-5 w-5 text-[#C86D51]" />
          <span>Select BOQ, drawing or reference file</span>
          <input
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,image/*"
            className="sr-only"
          />
        </label>
      </Field>

      <Field label="Project / specification notes" className="sm:col-span-2">
        <textarea
          name="details"
          placeholder="Mention product grades, thicknesses, project stage, required delivery schedule or any special specification."
          className={textareaClass}
        />
      </Field>
    </>
  );
}

function DealerFields() {
  return (
    <>
      <Field label="Firm / business name" required>
        <input
          name="businessName"
          type="text"
          required
          placeholder="Your firm name"
          className={inputClass}
        />
      </Field>

      <Field label="Market / territory served" required>
        <input
          name="territory"
          type="text"
          required
          placeholder="e.g. North Delhi & NCR"
          className={inputClass}
        />
      </Field>

      <Field label="Products currently handled">
        <input
          name="categoriesHandled"
          type="text"
          placeholder="e.g. plywood, laminates, hardware"
          className={inputClass}
        />
      </Field>

      <Field label="Estimated monthly volume">
        <input
          name="monthlyVolume"
          type="text"
          placeholder="e.g. 500 sheets / 1 truckload"
          className={inputClass}
        />
      </Field>

      <Field label="Business note" className="sm:col-span-2">
        <textarea
          name="details"
          placeholder="Tell us about your showroom, godown, current brands, territory or the partnership you are looking for."
          className={textareaClass}
        />
      </Field>
    </>
  );
}

function ExportFields() {
  return (
    <>
      <Field label="Company name" required>
        <input
          name="companyName"
          type="text"
          required
          placeholder="Company name"
          className={inputClass}
        />
      </Field>

      <Field label="Destination country / port" required>
        <input
          name="destination"
          type="text"
          required
          placeholder="e.g. UAE · Jebel Ali"
          className={inputClass}
        />
      </Field>

      <Field label="Product required" required>
        <select
          name="exportProduct"
          required
          defaultValue="Plywood"
          className={inputClass}
        >
          <option value="Plywood">Plywood</option>
          <option value="Blockboard">Blockboard</option>
          <option value="Flush Door">Flush Door</option>
          <option value="Formaldehyde / Industrial Chemical">
            Formaldehyde / Industrial Chemical
          </option>
          <option value="Multiple Products">Multiple Products</option>
          <option value="Other">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Estimated order quantity" required>
        <input
          name="exportQuantity"
          type="text"
          required
          placeholder="e.g. 1 container / 500 sheets"
          className={inputClass}
        />
      </Field>

      <Field label="Export requirement details" className="sm:col-span-2">
        <textarea
          name="details"
          placeholder="Share product specifications, delivery expectations, packaging or commercial requirements."
          className={textareaClass}
        />
      </Field>
    </>
  );
}

function IndustrialFields() {
  return (
    <>
      <Field label="Company name" required>
        <input
          name="companyName"
          type="text"
          required
          placeholder="Company name"
          className={inputClass}
        />
      </Field>

      <Field label="Chemical / specification" required>
        <select
          name="chemicalSpec"
          required
          defaultValue="Formaldehyde 37%"
          className={inputClass}
        >
          <option value="Formaldehyde 37%">Formaldehyde 37%</option>
          <option value="Formaldehyde 43%">Formaldehyde 43%</option>
          <option value="Other">Other / discuss specification</option>
        </select>
      </Field>

      <Field label="Estimated quantity" required>
        <input
          name="industrialQuantity"
          type="text"
          required
          placeholder="e.g. tanker load / monthly requirement"
          className={inputClass}
        />
      </Field>

      <Field label="Delivery location" required>
        <input
          name="deliveryLocation"
          type="text"
          required
          placeholder="City / State / Port"
          className={inputClass}
        />
      </Field>

      <Field label="Technical requirement" className="sm:col-span-2">
        <textarea
          name="details"
          placeholder="Share concentration, application, packaging, delivery frequency or other technical requirements."
          className={textareaClass}
        />
      </Field>
    </>
  );
}

function GeneralFields() {
  return (
    <Field label="How can we help?" required className="sm:col-span-2">
      <textarea
        name="details"
        required
        placeholder="Write your question or requirement."
        className={textareaClass}
      />
    </Field>
  );
}

function ConditionalFields({ enquiryType }) {
  switch (enquiryType) {
    case "product":
      return <ProductFields />;
    case "project":
      return <ProjectFields />;
    case "dealer":
      return <DealerFields />;
    case "export":
      return <ExportFields />;
    case "industrial-chemical":
      return <IndustrialFields />;
    case "general":
    default:
      return <GeneralFields />;
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");

      // Remove:
      // data:application/pdf;base64,
      // and keep only the Base64 content.
      const base64 = result.includes(",") ? result.split(",")[1] : result;

      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error("Could not read the selected file."));
    };

    reader.readAsDataURL(file);
  });
}

function SmartEnquiryForm({ enquiryType, onEnquiryTypeChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const currentType =
    enquiryTypes.find((item) => item.value === enquiryType) || enquiryTypes[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(form);
      const payload = {};

      for (const [key, value] of formData.entries()) {
        if (key === "attachment") continue;
        if (typeof value === "string") {
          payload[key] = value.trim();
        }
      }

      payload.enquiryType = enquiryType;
      payload.formSource = "contact-main";
      payload.consent = formData.get("consent") === "on";

      const file = formData.get("attachment");
      if (file instanceof File && file.size > 0) {
        payload.attachment = file;
      }

      const result = await submitPentagonEnquiry(payload);

      /*
       * Real ID generated by Apps Script.
       */
      setSubmissionId(result.submissionId || "");

      setSubmitted(true);

      /*
       * Clear form only after successful storage.
       */
      form.reset();
    } catch (error) {
      console.error("Pentagon enquiry error:", error);

      setSubmitError(
        error?.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-[28px] border border-[#CAD4CC] bg-white p-8 text-center shadow-xl sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#143D2B] text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>

        <div className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C86D51]">
          Enquiry received
        </div>
        <h2 className="mt-2 font-['Oswald',sans-serif] text-3xl font-bold text-[#14211A]">
          Thanks. We Have Your Requirement.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#65736A]">
          Your <strong className="text-[#14211A]">{currentType.title}</strong>{" "}
          has been received by the Pentagon team.
        </p>

        {submissionId && (
          <div className="mx-auto mt-5 max-w-md rounded-2xl border border-[#CAD4CC] bg-[#F7F3EC] px-5 py-4">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#C86D51]">
              Enquiry Reference
            </span>

            <strong className="mt-1 block text-base text-[#143D2B]">
              {submissionId}
            </strong>

            <span className="mt-1 block text-xs text-[#65736A]">
              Keep this reference if you need to follow up with our team.
            </span>
          </div>
        )}

        <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-[#65736A]">
          If you provided an email address, a confirmation has also been sent to
          you.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Continue on WhatsApp <MessageSquare className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSubmissionId("");
              setSubmitError("");
            }}
            className="inline-flex h-11 items-center rounded-full border border-[#CAD4CC] bg-white px-5 text-xs font-bold uppercase tracking-wider text-[#14211A]"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[#CAD4CC] bg-[#FDFBF8] p-5 shadow-2xl sm:p-8 lg:p-9"
    >
      <div className="flex flex-col gap-4 border-b border-[#CAD4CC]/70 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D] block mb-1">
            Direct Enquiry Desk
          </span>
          <h2 className="font-display text-3xl font-bold text-[#14211A] sm:text-4xl">
            Share Your Requirement
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#65736A]">
            Start with what you know. Product, quantity and location are usually
            enough for our team to begin.
          </p>
        </div>

      <div className="mt-6">
        <EnquiryTypeSelector
          value={enquiryType}
          onChange={onEnquiryTypeChange}
        />
      </div>

      <input type="hidden" name="enquiryType" value={enquiryType} />

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </Field>

        <Field label="Phone / WhatsApp" required>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </Field>

        <Field label="Email address">
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            className={inputClass}
          />
        </Field>

        <Field label="Your city / state" required>
          <input
            name="location"
            type="text"
            autoComplete="address-level2"
            required
            placeholder="e.g. Gurgaon, Haryana"
            className={inputClass}
          />
        </Field>

        <div className="sm:col-span-2 my-1 border-t border-[#CAD4CC]/60" />

        <ConditionalFields enquiryType={enquiryType} />
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-[#65736A]">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 accent-[#143D2B]"
        />
        <span>
          I agree to let Pentagon Plywood contact me by phone, WhatsApp or email
          regarding this enquiry.
        </span>
      </label>
      {submitError && (
        <div
          role="alert"
          className="
      mt-5
      rounded-2xl
      border border-red-200
      bg-red-50
      px-4 py-3
      text-sm
      leading-relaxed
      text-red-700
    "
        >
          <strong className="block font-bold">
            We couldn't send your enquiry.
          </strong>

          <span className="mt-1 block">{submitError}</span>
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
    mt-6
    inline-flex min-h-[52px] w-full
    items-center justify-center gap-2
    rounded-full
    bg-[#143D2B]
    px-6
    text-xs font-bold uppercase
    tracking-[0.1em]
    text-white
    shadow-lg
    transition
    hover:bg-[#0B2A1D]
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
      >
        {isSubmitting ? (
          <>
            <span
              className="
          h-4 w-4
          animate-spin
          rounded-full
          border-2
          border-white/30
          border-t-white
        "
            />
            Sending Enquiry...
          </>
        ) : (
          <>
            Send {currentType.shortTitle || currentType.title}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[10px] leading-relaxed text-[#7A867F]">
        Fields marked * are required. You do not need to know every technical
        specification before contacting us.
      </p>
    </form>
  );
}

function ContactPage() {
  const [enquiryType, setEnquiryType] = useState("product");
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => {
    document.title =
      "Contact Pentagon Plywood | Product, Dealer & Bulk Enquiries";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact Pentagon Plywood in Yamunanagar for product, project, dealer, bulk, export and industrial enquiries.";

    const params = new URLSearchParams(window.location.search);
    const requestedType = params.get("type");
    if (requestedType && VALID_ENQUIRY_TYPES.has(requestedType)) {
      setEnquiryType(requestedType);
    }
  }, []);

  const handleEnquiryTypeChange = (type) => {
    setEnquiryType(type);

    const url = new URL(window.location.href);
    url.searchParams.set("type", type);
    window.history.replaceState({}, "", url);
  };

  return (
    <div
      data-palette="pentagon-brand"
      className="home-theme bg-brand-cream text-brand-charcoal overflow-hidden font-sans pb-16 lg:pb-0"
    >
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-[#143D2B] py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2.5 px-5 sm:px-7">
          <a href={ROUTES.home} className="transition hover:text-white">
            Home
          </a>
          <span className="text-[#C86D51]">›</span>
          <strong className="text-white">Contact Us</strong>
        </div>
      </div>

      {/* Hero + smart enquiry */}
      <section className="relative bg-[#143D2B] text-white">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroWoodImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />

          {/* Main readability overlay */}
          <div className="absolute inset-0 bg-[#0B2A1D]/72" />

          {/* Directional overlay:
        keeps left image slightly visible,
        gives the form side stronger contrast */}
          <div
            className="
        absolute inset-0
        bg-gradient-to-r
        from-[#0B2A1D]/92
        via-[#143D2B]/85
        to-[#0B2A1D]/90
      "
          />

          {/* Bottom depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A12]/70 via-transparent to-[#143D2B]/20" />

          {/* Warm Pentagon accent glow */}
          <div
            className="
        absolute -left-24 top-1/3
        h-[360px] w-[360px]
        rounded-full
        bg-[#C86D51]/18
        blur-[110px]
      "
          />

          {/* Small light / natural glow */}
          <div
            className="
        absolute right-[30%] top-[-140px]
        h-[420px] w-[420px]
        rounded-full
        bg-[#F2D4B8]/10
        blur-[130px]
      "
          />
        </div>

        {/* Very subtle texture */}
        <div
          className="
      pointer-events-none absolute inset-0 opacity-[0.10]
      bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
      [background-size:28px_28px]
    "
        />

        {/* Hero content */}
        <div
          className="
 relative z-10
      mx-auto
      grid max-w-[1280px]
      grid-cols-1
      items-start
      gap-10
      px-7
      py-14

      lg:grid-cols-12
      lg:gap-14
      lg:py-20
    "
        >
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <div
                className="
 mb-6
            inline-flex items-center gap-2
            rounded-full
            border border-white/20
            bg-white/10
            px-4 py-2
            backdrop-blur-md
        "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8927C]" />
                <span
                  className="
              text-[10px]
              font-bold uppercase
              tracking-[0.18em]
              text-white/90
            "
                >
                  Contact Pentagon
                </span>
              </div>

              <h1
                className="
    max-w-[10ch]
            font-['Oswald',sans-serif]
            text-[48px]
            font-bold
            leading-[1.03]
            tracking-[-1.5px]
            text-white

            sm:text-[58px]
            xl:text-[68px]
        "
              >
                Tell Us What You Need.
                <span
                  className="
            mt-2 block
            font-['DM_Serif_Display',Georgia,serif]
            font-normal
            text-[#E8927C]
          "
                >
                  We'll Help You Take It Forward.
                </span>
              </h1>

              <p
                className="
          mt-6 max-w-[570px]
          text-[15px]
          leading-[1.8]
          text-white/78
          sm:text-base
        "
              >
                Looking for plywood, blockboard, doors, project quantities,
                dealer supply or another material? Share your requirement and
                our team will help you take the appropriate next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PHONE_LINK}
                  className="
            inline-flex h-12 items-center justify-center gap-2
            rounded-full
            bg-[#C86D51]
            px-6
            text-xs font-bold uppercase tracking-wider text-white
            shadow-lg
            transition
            hover:bg-[#B85C43]
          "
                >
                  <PhoneCall className="h-4 w-4" />
                  Call Us
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="
            inline-flex h-12 items-center justify-center gap-2
            rounded-full
            border border-white/25
            bg-white/10
            px-6
            text-xs font-bold uppercase tracking-wider text-white
            backdrop-blur-md
            transition
            hover:bg-white/15
          "
                >
                  <MessageSquare className="h-4 w-4 text-[#4ADE80]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SmartEnquiryForm
              enquiryType={enquiryType}
              onEnquiryTypeChange={handleEnquiryTypeChange}
            />
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section
        className="bg-[#FDFBF8] py-[78px] lg:py-[105px]"
        id="direct-contact"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7">
          <div className="max-w-[720px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C86D51]">
              Prefer to speak directly?
            </div>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-[40px] font-bold leading-[1.05] tracking-[-1px] text-[#14211A] lg:text-[56px]">
              Choose the Channel That Fits the Conversation.
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#4A5750]">
              WhatsApp works well for quick product details and reference
              images. Email is better for BOQs, specifications and formal
              business requirements.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {directContacts.map((item, index) => {
              const Icon = iconMap[item.iconName] || PhoneCall;
              const isWhatsapp = item.type === "WhatsApp";

              return (
                <article
                  key={item.type}
                  className={`group flex min-h-[260px] flex-col justify-between rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                    isWhatsapp
                      ? "border-[#25D366]/40 bg-[#F4FFF7]"
                      : "border-[#CAD4CC] bg-white hover:border-[#143D2B]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#143D2B] text-white text-xs font-bold">
                        0{index + 1}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
                      {item.type}
                    </h3>
                    <strong className="mt-2 block break-words text-sm text-[#C86D51]">
                      {item.detail}
                    </strong>
                    <p className="mt-3 text-xs leading-relaxed text-[#65736A]">
                      {item.copy}
                    </p>
                  </div>

                  <a
                    href={item.href}
                    target={isWhatsapp ? "_blank" : undefined}
                    rel={isWhatsapp ? "noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 border-t border-[#CAD4CC]/60 pt-5 text-xs font-bold uppercase tracking-[0.08em] text-[#143D2B]"
                  >
                    {item.action}{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        className="bg-[#14211A] py-[82px] text-white lg:py-[115px]"
        id="location"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C86D51]">
              <MapPin className="h-4 w-4" /> Visit Pentagon
            </div>
            <h2 className="mt-3 font-['Oswald',sans-serif] text-[42px] font-bold leading-[1.04] tracking-[-1px] lg:text-[58px]">
              Our Manufacturing Base Is in Yamunanagar, Haryana.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-white/75">
              If you are planning a business or factory visit, contact the team
              before travelling so the timing and appropriate representative can
              be confirmed.
            </p>

            <address className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6 not-italic font-['DM_Serif_Display',Georgia,serif] text-2xl leading-snug text-white/90">
              Village Raipur, Khajuri Road
              <br />
              Yamunanagar, Haryana 135001
              <br />
              India
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.08em] text-[#14211A]"
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 text-xs font-bold uppercase tracking-[0.08em] text-white"
              >
                Call before visiting
              </a>
            </div>
          </div>

          <FactoryLocationView />
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-[#F7F3EC] py-[78px] lg:py-[105px]" id="next-step">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C86D51]">
              What happens next?
            </div>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-[40px] font-bold leading-[1.05] tracking-[-1px] text-[#14211A] lg:text-[54px]">
              From Enquiry to the Right Next Step.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {nextSteps.map((step) => {
              const Icon = iconMap[step.iconName] || FileText;
              return (
                <article
                  key={step.number}
                  className="rounded-3xl border border-[#CAD4CC] bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#143D2B] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white">
                      Step {step.number}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F7F3EC] text-[#C86D51]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#65736A]">
                    {step.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications redirect */}
      <section className="border-y border-[#CAD4CC]/70 bg-[#FDFBF8] py-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 sm:px-7 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="font-['DM_Serif_Display',Georgia,serif] text-2xl font-normal text-[#14211A]">
              Not sure which material suits your application?
            </strong>
            <p className="mt-1 text-sm text-[#65736A]">
              Explore the Applications section for kitchens, wardrobes,
              furniture and commercial interiors.
            </p>
          </div>
          <a
            href={ROUTES.applications || "/applications"}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[#143D2B] px-5 text-xs font-bold uppercase tracking-[0.08em] text-[#143D2B] transition hover:bg-[#143D2B] hover:text-white"
          >
            Explore Applications <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-[#FDFBF8] py-[78px] lg:py-[105px]"
        id="contact-faq"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 sm:px-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C86D51]">
              Contact FAQs
            </div>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-[40px] font-bold leading-[1.05] tracking-[-1px] text-[#14211A] lg:text-[54px]">
              Useful Details Before You Contact Us.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#65736A]">
              The contact page only answers the questions needed to start an
              enquiry. Product education can stay on the product and application
              pages.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition ${
                    isOpen
                      ? "border-[#143D2B] bg-white shadow-md"
                      : "border-[#CAD4CC] bg-[#FDFBF8]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-['DM_Serif_Display',Georgia,serif] text-lg text-[#14211A] sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-[#143D2B] text-white"
                          : "bg-[#F7F3EC] text-[#14211A]"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#CAD4CC]/50 px-5 pb-5 pt-4 text-sm leading-relaxed text-[#65736A]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compact final CTA */}
      <section className="bg-[#143D2B] py-14 text-white">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-7 px-5 sm:px-7 md:flex-row md:items-center">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#E8927C]">
              Start somewhere
            </div>
            <h2 className="mt-2 font-['Oswald',sans-serif] text-3xl font-bold leading-tight sm:text-4xl">
              You Don’t Need Every Specification Before You Contact Us.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              Tell us what you are building, the approximate quantity and where
              you need it. We can clarify the rest.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact-form")}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-[0.08em] text-white"
            >
              Start an enquiry <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-xs font-bold uppercase tracking-[0.08em] text-white"
            >
              WhatsApp <MessageSquare className="h-4 w-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile quick actions */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-[#CAD4CC] bg-[#FDFBF8]/95 p-2 shadow-2xl backdrop-blur lg:hidden">
        <a
          href={PHONE_LINK}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#143D2B] text-xs font-bold uppercase tracking-wider text-white"
        >
          <PhoneCall className="h-4 w-4 text-[#C86D51]" /> Call
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-xs font-bold uppercase tracking-wider text-white"
        >
          <MessageSquare className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
