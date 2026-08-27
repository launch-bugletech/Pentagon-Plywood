import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  Check,
  ChevronLeft,
  CircleCheck,
  ClipboardCheck,
  Factory,
  Handshake,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { CONTACT_SECTIONS, DEALER_SECTIONS, ROUTES } from "@/app/routes.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Button } from "../../components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import dealerHero from "../../assets/dealer/India Map Plywood Brochure Backdrop.png";

const PHONE = "tel:+917015085556";
const WHATSAPP_BASE = "https://wa.me/917015085556?text=";
const dealerWhatsappLink = `${WHATSAPP_BASE}${encodeURIComponent(
  "Hello Pentagon, I would like to discuss a dealer enquiry.",
)}`;

const DEALER_MARKETS = [
  {
    name: "Haryana",
    region: "North",
    coordinates: [77.28599938929692, 30.099496445420478],
  },
  {
    name: "Punjab",
    region: "North",
    coordinates: [75.3412, 31.1471],
  },
  {
    name: "Maharashtra",
    region: "West",
    coordinates: [75.7139, 19.7515],
  },
  {
    name: "Gujarat",
    region: "West",
    coordinates: [71.1924, 22.2587],
  },
  {
    name: "Rajasthan",
    region: "North",
    coordinates: [74.2179, 27.0238],
  },
  {
    name: "Goa",
    region: "West",
    coordinates: [74.124, 15.2993],
  },
  {
    name: "Himachal Pradesh",
    region: "North",
    coordinates: [77.1734, 31.1048],
  },
  {
    name: "Madhya Pradesh",
    region: "Central",
    coordinates: [78.6569, 22.9734],
  },
  {
    name: "New Delhi",
    region: "North",
    coordinates: [77.209, 28.6139],
  },
  {
    name: "Jammu & Kashmir",
    region: "North",
    coordinates: [76.5762, 33.7782],
  },
  {
    name: "Chandigarh",
    region: "North",
    coordinates: [76.7794, 30.7333],
  },
  {
    name: "Uttar Pradesh",
    region: "North",
    coordinates: [80.9462, 26.8467],
  },
];

const DEALER_REGION_GROUPS = [
  {
    title: "North India",
    markets: DEALER_MARKETS.filter((item) => item.region === "North"),
  },
  {
    title: "West India",
    markets: DEALER_MARKETS.filter((item) => item.region === "West"),
  },
  {
    title: "Central India",
    markets: DEALER_MARKETS.filter((item) => item.region === "Central"),
  },
];

const partnerRoutes = [
  [
    "seller",
    "01",
    "Find a Pentagon Dealer",
    "Looking for Pentagon products? Explore our current dealer presence and contact us to connect with the appropriate dealer serving your market.",
    "Explore Dealer Network",
    Store,
  ],
  [
    "dealer",
    "02",
    "Become a Pentagon Dealer",
    "Already selling plywood, boards, doors, hardware or building materials? Tell us about your business, market and existing infrastructure.",
    "Apply for Dealership",
    Handshake,
  ],
];

const opportunities = [
  [
    "Manufacturing Base: Yamunanagar",
    "Pentagon manufactures plywood, blockboard and flush doors directly from India’s premier wood-panel industrial cluster.",
    Factory,
  ],
  [
    "Manufactured and Sourced Portfolio",
    "Discuss Pentagon-manufactured MR, BWP, Marine and Fire Retardant Plywood, blockboard and flush doors alongside sourced or traded materials, subject to availability.",
    Boxes,
  ],
  [
    "Direct B2B Freight Feasibility",
    "Dispatch planning from factory to warehouse is reviewed for each location and order requirement.",
    Truck,
  ],
  [
    "Enquiry-Based Supply Planning",
    "Territory assessments help align channel coverage, product demand and practical supply planning.",
    ClipboardCheck,
  ],
  [
    "Verified Digital Dealer Locator",
    "Approved partners may be listed on Pentagon’s digital locator after verification and consent.",
    MapPin,
  ],
  [
    "Requirement-Led Commercial Discussion",
    "Product availability, grade, quantity, freight, delivery and commercial terms are discussed for the specific requirement.",
    MessageCircle,
  ],
];

const processSteps = [
  [
    "01",
    "Submit Business Profile",
    "Share your store location, existing portfolio, infrastructure and preferred partnership route.",
  ],
  [
    "02",
    "Territory & Demand Review",
    "Pentagon reviews market coverage, logistics feasibility and the opportunity in your territory.",
  ],
  [
    "03",
    "Commercial Discussion",
    "Discuss product ranges, opening-order plans, pricing structure and delivery terms.",
  ],
  [
    "04",
    "Capability Verification",
    "Business documents, facility details and trade references may be reviewed.",
  ],
  [
    "05",
    "Commercial Agreement",
    "Approved terms, territory, commitments and brand guidelines are documented.",
  ],
  [
    "06",
    "Onboarding & Supply",
    "Approved partners move into product, material and initial dispatch coordination.",
  ],
];

const partnershipPathwaySteps = [
  ["01", "Express Interest", "Share a few details through the partnership enquiry form.", ClipboardCheck],
  ["02", "Connect with Our Team", "Our partnership team will get in touch to understand your business and goals.", Users],
  ["03", "Review & Evaluation", "We review your application and align on the best model for your market.", BadgeCheck],
  ["04", "Onboard & Partner", "Complete onboarding and get access to pricing, policies and resources.", Handshake],
  ["05", "Receive & Set Up", "Get your initial supplies and set up your business with our guidance.", PackageCheck],
  ["06", "Grow Together", "Leverage our brand, marketing and support to grow profitably.", ArrowRight],
];

const productPortfolio = [
  [
    "Plywood",
    "Strong. Reliable. Made to Build.",
    PackageCheck,
    "https://relgrow.com/shop/wp-content/uploads/2025/12/46184.jpg",
  ],
  [
    "Blockboard",
    "Solid core. Lasting strength.",
    Boxes,
    "https://cdn.prod.website-files.com/67289d9b0c73de42a29a431d/6810bc21fcf741db39407638_Plywood-1-min.jpg",
  ],
  [
    "MDF & HDF",
    "Smooth finish. Superior stability.",
    Building2,
    "https://ik.imagekit.io/fepy/cdn/catalog/product/m/d/mdf16_1_1_1.png",
  ],
  [
    "Decorative Surfaces",
    "Design-led. Made to inspire.",
    BadgeCheck,
    "https://image.made-in-china.com/2f0j00CgNekSbdMPct/High-Pressure-Commercial-Use-Indoor-Decorative-Laminate-Toilet-Compact-Access-Flooring-HPL.webp",
  ],
  [
    "Flush Doors",
    "Engineered for elegance and strength.",
    Store,
    "https://s.alicdn.com/%40sc04/kf/He3269f7070fb4abdb579585467d4926bQ/Modern-Minimalist-Flat-Panel-Interior-Door-Wood-Grain-Texture-Custom-Bedroom-Flush-Door-for-Home-Hotel-Project.jpg",
  ],
];

const applicantTypes = [
  "Existing plywood and wood-panel dealers",
  "Building-material retailers & hardware stores",
  "Timber and board wholesalers",
  "Door, laminate and interior surface sellers",
  "Interior-material showrooms & design hubs",
  "Furniture manufacturing material suppliers",
  "Regional stockists & bulk suppliers",
  "Infrastructure & project material suppliers",
  "New entrepreneurs with suitable infrastructure",
];

const evaluationFactors = [
  "Established business identity and GST registration",
  "Suitable showroom, shop, or warehousing facility",
  "Understanding of local plywood & wood-panel trade",
  "Active relationships with carpenters, contractors and interior designers",
  "Financial capability to maintain appropriate stock levels",
  "Dedicated sales or logistics setup for local distribution",
];

const partnerExpectations = [
  "Communicate product grades and technical specifications transparently",
  "Maintain appropriate stock handling and moisture-controlled storage",
  "Represent available Pentagon grades accurately in your operating area",
  "Provide prompt feedback on demand and customer requirements",
  "Follow documented commercial terms and territory guidelines",
  "Protect brand representation in store and market communication",
];

const faqItems = [
  [
    "How can I become a Pentagon Plywood dealer?",
    "Submit the dealer application with your business, location, experience, infrastructure and product interests. Pentagon will review the opportunity and contact relevant applicants.",
  ],
  [
    "Who can apply for a dealership?",
    "Plywood dealers, building-material retailers, wholesalers, timber and board sellers, interior-material showrooms, stockists and businesses with suitable market capability may apply.",
  ],
  [
    "Can a new business apply?",
    "Yes. Pentagon can review the location, proposed setup, infrastructure, product knowledge and market opportunity. An application does not guarantee appointment.",
  ],
  [
    "Where does Pentagon currently have dealer presence?",
    "Pentagon currently has dealer presence in Haryana, Punjab, Maharashtra, Gujarat, Rajasthan, Goa, Himachal Pradesh, Madhya Pradesh, New Delhi, Jammu & Kashmir, Chandigarh and Uttar Pradesh.",
  ],
  [
    "How can I find the nearest Pentagon dealer?",
    "Share your city, state and required product with Pentagon. The team can guide you toward the appropriate available dealer for your market.",
  ],
  [
    "Is there a minimum investment?",
    "Pentagon has not published a fixed investment requirement. Commercial requirements may depend on the product range, location, infrastructure, stock plan and market opportunity.",
  ],
  [
    "Is a minimum opening order required?",
    "Opening-order requirements are discussed during the commercial review and may vary according to product, quantity, freight and territory.",
  ],
  [
    "Will I receive an exclusive territory?",
    "No exclusivity is created by submitting an application. Any territory arrangement must be specifically reviewed, approved and documented.",
  ],
  [
    "Does Pentagon offer credit?",
    "Payment and credit terms are subject to commercial review and written approval.",
  ],
  [
    "Which products can Pentagon dealers discuss?",
    "Dealers can discuss Pentagon plywood, blockboard and flush doors together with selected sourced or traded materials, subject to current availability.",
  ],
  [
    "Can I apply for more than one city or district?",
    "Yes. State the complete proposed coverage in the application. Pentagon can review it according to existing network coverage, logistics and business capability.",
  ],
];

const products = [
  "MR Grade Plywood",
  "BWP Grade Plywood",
  "Marine Grade Plywood",
  "Fire Retardant Plywood",
  "Blockboard",
  "Flush Doors",
  "Sourced / traded materials",
  "HDHMR / WPC",
  "Architectural Laminates",
];

const categories = [
  "Plywood & Board Dealer",
  "Timber Merchant",
  "Hardware & Lock Store",
  "Building Material Retailer",
  "Interior Showroom",
  "Furniture Manufacturer Supplier",
];

const initialForm = {
  partnerType: "Dealer",
  products: "",
  state: "",
  territory: "",
  legalName: "",
  tradeName: "",
  contactName: "",
  designation: "",
  mobile: "",
  whatsapp: "",
  email: "",
  address: "",
  city: "",
  district: "",
  pin: "",
  gstin: "",
  established: "",
  categories: "",
  brands: "",
  customers: "",
  markets: "",
  experience: "",
  potential: "",
  reason: "",
  showroom: "Yes",
  warehouse: "Yes",
  warehouseArea: "",
  logistics: "",
  teamSize: "",
  tradeRelationships: "",
  openingOrder: "",
  monthlyPurchase: "",
  territoryRequested: "",
  discussionDate: "",
  opportunities: "",
  additional: "",
};

const inputClass =
  "h-11 rounded-xl border-[#cad4cc] bg-white px-3 focus-visible:border-[#C86D51] focus-visible:ring-[#C86D51]/20";
const selectClass = `${inputClass} w-full border text-sm outline-none`;
const sectionClass = "px-4 py-16 sm:px-6 sm:py-20 lg:px-8";
const wrapClass = "mx-auto max-w-7xl";

function Heading({ eyebrow, title, copy, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p
        className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-[#C86D51]" : "text-[#8E510D]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#14211a]"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 text-base leading-7 ${light ? "text-white/70" : "text-[#65736a]"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

function Field({ label, required, wide, children }) {
  return (
    <label className={`block ${wide ? "md:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-semibold text-[#263b30]">
        {label}
        {required && <b className="ml-1 text-[#b7513c]">*</b>}
      </span>
      {children}
    </label>
  );
}


function DealersPage() {
  const [route, setRoute] = useState("seller");

  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [consent, setConsent] = useState(false);
  const [stepError, setStepError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faqFilter, setFaqFilter] = useState("");

  const handleDealerSubmit = async (event) => {
    event.preventDefault();
    if (!consent) {
      return setStepError("Please review and check the consent box to proceed.");
    }

    setIsSubmitting(true);
    setStepError("");

    try {
      await submitPentagonEnquiry({
        enquiryType: "dealer",
        formSource: "dealer-application",

        partnerType: form.partnerType || "Dealer",
        state: form.state,
        territory: form.territory,
        products: form.products,
        experienceYears: form.experience,
        currentBrands: form.brands,

        legalName: form.legalName,
        tradeName: form.tradeName || form.legalName,

        name: form.contactName,
        designation: form.designation,
        phone: form.mobile,
        email: form.email,
        gst: form.gstin,
        address: `${form.address || ""}, ${form.city || ""}, ${form.state || ""} - ${form.pin || ""}`,
        location: `${form.city || ""}, ${form.state || ""}`,

        warehouseSpace: form.warehouseArea,
        monthlyVolume: form.monthlyPurchase,

        details: `Reason: ${form.reason || ""}\nCategories: ${form.categories || ""}\nCustomers: ${form.customers || ""}\nMarkets: ${form.markets || ""}\nLogistics: ${form.logistics || ""}\nTrade: ${form.tradeRelationships || ""}\nOpening Order: ${form.openingOrder || ""}\nDiscussion Date: ${form.discussionDate || ""}\nOpportunities: ${form.opportunities || ""}\nAdditional: ${form.additional || ""}`,

        consent: true,
      });

      setSubmitted(true);
    } catch (error) {
      setStepError(error.message || "Could not submit dealer application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.title =
      "Pentagon Dealer Network | Find or Become a Pentagon Dealer";
  }, []);

  const displayedFaqs = faqItems.filter(([question, answer]) =>
    `${question} ${answer}`.toLowerCase().includes(faqFilter.toLowerCase()),
  );

  const update = (key) => (event) => {
    setStepError("");

    setForm((current) => ({
      ...current,
      [key]: event.target.value,
    }));
  };

  const toggleChip = (field, value) => {
    setForm((current) => {
      const entries = current[field]
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      return {
        ...current,
        [field]: (
          entries.includes(value)
            ? entries.filter((item) => item !== value)
            : [...entries, value]
        ).join(", "),
      };
    });
  };

  const chooseRoute = (value) => {
    setRoute(value);

    if (value === "seller") {
      document
        .querySelector("#dealer-network-coverage")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      return;
    }

    setForm((current) => ({
      ...current,
      partnerType: "Dealer",
    }));

    document
      .querySelector("#partner-application")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const nextStep = () => {
    const required = {
      1: ["products", "state", "territory"],
      2: [
        "legalName",
        "contactName",
        "mobile",
        "email",
        "address",
        "city",
        "pin",
      ],
      3: ["categories", "reason"],
      4: [],
    };

    if ((required[formStep] || []).some((key) => !form[key]?.trim())) {
      return setStepError(
        "Please complete the required fields marked with * before continuing.",
      );
    }

    setStepError("");

    setFormStep((step) => Math.min(5, step + 1));
  };

const hero = (
  <section className="relative flex min-h-[105vh] flex-col justify-between overflow-hidden border-b border-brand-border/50 bg-brand-cream pb-8 pt-0 text-brand-charcoal lg:pb-10">
    {/* Full-bleed background, matching the homepage hero treatment. */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${dealerHero})` }}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/50 via-white/25 to-transparent" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent lg:hidden" />

    <div
      className={`
        ${wrapClass}
        relative
        z-10
        grid
        items-center
        w-full
        grid-cols-1
        gap-8
        pb-4
        pt-5
        lg:grid-cols-12
        lg:gap-12
      `}
    >
      <div className="space-y-6 lg:col-span-8 xl:col-span-7">
        <div className="text-[11px] font-semibold uppercase leading-tight tracking-[0.2em] text-[#8E510D]">
          Pentagon Dealer Network
        </div>

        <h1 className="font-display text-[34px] font-normal leading-[1.08] tracking-[-0.02em] text-brand-charcoal sm:text-[48px] lg:text-[62px] xl:text-[66px]">
          <span className="block">Bring Better Material Choices</span>
          <span className="home-heading-accent mt-1 block">Closer to Your Market.</span>
        </h1>

        <p className="max-w-xl text-[15px] font-medium leading-[1.65] text-brand-muted sm:text-[18px]">
          Pentagon partners with dealers across India to make plywood,
          blockboard, flush doors and selected allied materials more accessible
          to customers, trade professionals and projects.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => chooseRoute("dealer")}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-brand-forest px-7 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-accent"
          >
            Become a Dealer
            <ArrowRight size={16} />
          </button>

          <a
            href={CONTACT_SECTIONS.form}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-brand-accent/40 bg-white px-7 text-xs font-bold uppercase tracking-wider text-brand-honey-dark shadow-xs transition-all hover:border-brand-accent hover:bg-brand-soft-brown"
          >
            <MessageCircle size={17} />
            Contact Our Team
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Reuse the hero artwork as a focused map panel on mobile. */}
        <div
          className="h-[300px] overflow-hidden rounded-[28px] border border-[#DECDBB] bg-cover bg-no-repeat shadow-lg sm:h-[350px] lg:hidden"
          style={{
            backgroundImage: `url(${dealerHero})`,
            backgroundPosition: "72% center",
          }}
          role="img"
          aria-label="Pentagon dealer network presence across India"
        />
      </div>

      {/* Intentionally empty: lets the existing dealer image remain visible, like the homepage hero. */}
      <div className="hidden min-h-[330px] lg:col-span-4 lg:block xl:col-span-5" />
    </div>

    <div
      className={`
        ${wrapClass}
        relative
        z-10
        mt-6
        w-full
        lg:mt-10
      `}
    >
      <div
        className="
          grid
          overflow-hidden
          rounded-[22px]
          border
          border-brand-cool-border
          bg-white/95
          p-5
          shadow-xl
          sm:p-6
          lg:p-7
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {[
          {
            icon: MapPin,
            title: "Wide Coverage",
            copy: "Dealer presence across key markets",
          },
          {
            icon: Truck,
            title: "Reliable Supply",
            copy: "Coordinated from Yamunanagar",
          },
          {
            icon: PackageCheck,
            title: "Product Range",
            copy: "Plywood, blockboard & doors",
          },
          {
            icon: Handshake,
            title: "Dealer Support",
            copy: "Building long-term partnerships",
          },
        ].map(({ icon: Icon, title, copy }, index) => (
          <div
            key={title}
            className={`
              flex
              min-h-[105px]
              items-center
              gap-4
              px-6
              py-5
              ${
                index === 1
                  ? "border-t border-brand-cool-border sm:border-l sm:border-t-0"
                  : ""
              }
              ${
                index === 2
                  ? "border-t border-brand-cool-border lg:border-l lg:border-t-0"
                  : ""
              }
              ${
                index === 3
                  ? "border-t border-brand-cool-border sm:border-l lg:border-t-0"
                  : ""
              }
            `}
          >
            {/* ICON */}
            <span
              className="
                grid
                h-12
                w-12
                shrink-0
                place-items-center
                rounded-full
                border
                border-brand-accent/25
                bg-brand-soft-brown
                text-brand-honey-dark
              "
            >
              <Icon size={21} strokeWidth={1.7} />
            </span>

            {/* COPY */}
            <div>
              <strong
                className="
                  block
                  font-display
                  text-lg
                  font-normal
                  text-brand-charcoal
                "
              >
                {title}
              </strong>

              <span
                className="
                  mt-0.5
                  block
                  text-xs
                  leading-5
                  text-brand-muted
                "
              >
                {copy}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Archived in favour of the partnership pathway below.
const archivedRoutesSection = (
  <section
    id="choose-route"
    className="relative overflow-hidden bg-[#F7F7F5] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 border-t border-brand-border/40"
  >
    {/* very subtle background glow */}
    <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#C86D51]/10 blur-[120px]" />

    <div className={`${wrapClass} relative`}>
      {/* SECTION HEADING */}
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
          Connect With Pentagon
        </span>

        <h2 className="mt-4 max-w-[620px] font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[#14211a] sm:text-[48px]">
          Choose Your Route Into the Network.
        </h2>

        <p className="mt-4 max-w-[580px] text-[15px] leading-7 text-[#65736a]">
          Whether you are looking to source Pentagon materials for your market or
          introduce your business as a dealer applicant, choose the route that
          fits your current status.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* FIND A DEALER */}
        <article className="group relative overflow-hidden rounded-[24px] border border-[#cad4cc] bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 sm:p-9">
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start gap-5">
              <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-2xl bg-[#143D2B]/10 text-[#143D2B]">
                <Store size={26} strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold text-[#14211a]">
                  Find a Pentagon Dealer
                </h3>

                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#8E510D]">
                  For Buyers, Trade &amp; Projects
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[#65736a]">
              Looking for Pentagon products? Explore our current dealer presence and
              contact us to connect with the appropriate dealer serving your market.
            </p>

            <div className="mt-6 space-y-2.5">
              {[
                "Product availability & lead times",
                "Regional dealer locations across 12 states",
                "Assistance for project & trade buyers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-medium text-[#4A5750]"
                >
                  <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#143D2B] text-white">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => chooseRoute("seller")}
              className="mt-8 flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-[#143D2B] bg-white px-6 text-xs font-bold uppercase tracking-wider text-[#143D2B] transition-all hover:bg-[#143D2B] hover:text-white"
            >
              Explore Dealer Network
              <ArrowRight size={15} />
            </button>
          </div>
        </article>

        {/* BECOME A DEALER */}
        <article className="group relative overflow-hidden rounded-[24px] border border-[#cad4cc] bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 sm:p-9">
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start gap-5">
              <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-2xl bg-[#C86D51]/10 text-[#C86D51]">
                <Handshake size={26} strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold text-[#14211a]">
                  Become a Pentagon Dealer
                </h3>

                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#8E510D]">
                  For Businesses &amp; Trade Partners
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[#65736a]">
              Already selling plywood, boards, doors, hardware or building
              materials? Introduce your business and explore the opportunity to
              grow with Pentagon.
            </p>

            <div className="mt-6 space-y-2.5">
              {[
                "Manufactured and sourced product portfolio",
                "Commercial and product coordination",
                "Long-term market partnership opportunity",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-medium text-[#4A5750]"
                >
                  <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#C86D51] text-white">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => chooseRoute("dealer")}
              className="mt-8 flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#b55c42]"
            >
              Apply for Dealership
              <ArrowRight size={15} />
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const partnershipPathwaySection = (
  <section
    id="choose-route"
    className="relative overflow-hidden border-t border-[#E7DCCE] bg-[#FCF8F2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
  >
    <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full border-[18px] border-[#E8CDB5]/30" />
    <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full border-[18px] border-[#E8CDB5]/30" />
    <div className={`${wrapClass} relative`}>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">
          Partnership Pathway
        </span>
        <h2 className="mt-3 font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[#143D2B] sm:text-[48px]">
          Become a Pentagon Dealer.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#4A5750]">
          Joining the Pentagon Dealer Network is simple, transparent, and built
          for long-term success. Follow these steps to partner with one of
          India&apos;s trusted plywood brands.
        </p>
      </div>

      <div className="mt-10 rounded-[26px] border border-[#EEE4D9] bg-white/90 p-4 shadow-xl shadow-[#8E510D]/5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <strong className="font-display text-lg text-[#143D2B]">
            Your Journey to Partnership
          </strong>
          <span className="h-px flex-1 bg-[#E7DDD1]" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partnershipPathwaySteps.map(([number, title, copy, Icon]) => (
            <article
              key={number}
              className="group relative min-h-[224px] rounded-2xl border border-[#F0E8E0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E5C5AA] hover:shadow-lg"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#C86D51] text-[10px] font-bold text-white shadow-sm">
                {number}
              </span>
              <span className="mt-5 grid h-11 w-11 place-items-center rounded-xl bg-[#F7F3EC] text-[#143D2B] transition-transform duration-300 group-hover:scale-110">
                <Icon size={23} strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-tight text-[#14211A]">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-[#65736A]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const dealerCoverageSection = (
  <section
    id="dealer-network-coverage"
    className="bg-white px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28 border-t border-brand-border/40"
  >
    <div className={wrapClass}>
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        {/* LEFT COPY */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
            Dealer Presence
          </span>

          <h2 className="mt-4 max-w-[430px] font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[#14211a] sm:text-[46px]">
            Growing Across Key Markets in India.
          </h2>

          <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#65736a]">
            Pentagon currently has dealer presence across these states and union
            territories. Contact our team for the appropriate dealer serving
            your city, district or product requirement.
          </p>

          {/* nearest dealer */}
          <div className="mt-8 max-w-[370px] rounded-[20px] border border-brand-border bg-[#F7F7F5] p-6 shadow-sm">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#143D2B] text-white">
                <MapPin size={21} />
              </span>

              <div>
                <h3 className="font-display text-xl font-bold text-[#14211a]">
                  Need the nearest Pentagon dealer?
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#65736a]">
                  Share your city and required product with our team.
                </p>
              </div>
            </div>

            <a
              href={CONTACT_SECTIONS.form}
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C86D51] hover:text-[#143D2B] transition-colors"
            >
              Ask for Nearest Dealer
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* NORTH INDIA */}
          <div className="row-span-2 rounded-[20px] border border-brand-border/70 bg-[#F7F7F5] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
                North India
              </span>

              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#143D2B] px-2 text-[10px] font-bold text-white">
                8
              </span>
            </div>

            <div className="mt-5">
              {[
                "Haryana",
                "Punjab",
                "Rajasthan",
                "Himachal Pradesh",
                "New Delhi",
                "Jammu & Kashmir",
                "Chandigarh",
                "Uttar Pradesh",
              ].map((state) => (
                <div
                  key={state}
                  className="flex min-h-[43px] items-center gap-3 border-b border-brand-border/50 text-[13px] font-medium text-[#14211a] last:border-b-0"
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[#C86D51]" />
                  {state}
                </div>
              ))}
            </div>
          </div>

          {/* WEST */}
          <div className="rounded-[20px] border border-brand-border/70 bg-[#F7F7F5] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
                West India
              </span>

              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#143D2B] px-2 text-[10px] font-bold text-white">
                3
              </span>
            </div>

            <div className="mt-5">
              {["Maharashtra", "Gujarat", "Goa"].map((state) => (
                <div
                  key={state}
                  className="flex min-h-[43px] items-center gap-3 border-b border-brand-border/50 text-[13px] font-medium text-[#14211a] last:border-b-0"
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[#C86D51]" />
                  {state}
                </div>
              ))}
            </div>
          </div>

          {/* CENTRAL */}
          <div className="rounded-[20px] border border-brand-border/70 bg-[#F7F7F5] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E510D]">
                Central India
              </span>

              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#143D2B] px-2 text-[10px] font-bold text-white">
                1
              </span>
            </div>

            <div className="mt-5">
              <div className="flex min-h-[43px] items-center gap-3 text-[13px] font-medium text-[#14211a]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#C86D51]" />
                Madhya Pradesh
              </div>
            </div>
          </div>

          {/* NETWORK GROWTH */}
          <div className="relative overflow-hidden rounded-[20px] border border-[#143D2B] bg-[#143D2B] p-6 text-white md:col-span-2 shadow-lg">
            <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/10 text-[#C86D51]">
                  <Handshake size={25} />
                </span>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C86D51]">
                    Network Growth
                  </span>

                  <h3 className="mt-1 font-display text-[24px] font-bold text-white">
                    Interested in representing Pentagon?
                  </h3>

                  <p className="mt-1 text-[13px] leading-relaxed text-white/80">
                    Tell us about your business, market, product categories and
                    infrastructure.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => chooseRoute("dealer")}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b55c42] transition-colors"
              >
                Apply for Dealership
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

  return (
    <main
      data-palette="pentagon-brand"
      className="home-theme min-h-screen bg-brand-cream text-brand-charcoal font-sans"
    >
      {/* BREADCRUMB */}
      <div className="border-b border-white/10 bg-[#143D2B] py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65 px-4 sm:px-6 lg:px-8">
        <div className={wrapClass}>
          <a className="transition hover:text-white" href={ROUTES.home}>
            Home
          </a>
          <span className="mx-2 text-[#C86D51]">›</span>
          <strong className="text-white">Dealer Network</strong>
        </div>
      </div>

      {hero}
      {partnershipPathwaySection}
      {dealerCoverageSection}

      {/* PARTNERSHIP OPPORTUNITY */}
      <section id="partnership" className={`${sectionClass} bg-white`}>
        <div className={wrapClass}>
          <Heading
            eyebrow="The partnership opportunity"
            title="Built for Serious Market Partners."
            copy="A practical channel relationship starts with suitable products, market understanding, operational capability and clear commercial communication."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map(([title, copy, Icon]) => (
              <Card
                key={title}
                className="group hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#143d2b] text-white">
                    <Icon size={22} />
                  </span>
                  <CardTitle className="pt-3 text-xl">{title}</CardTitle>
                  <CardDescription className="leading-6">
                    {copy}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="partner-products" className={`${sectionClass} relative overflow-hidden bg-[#FCF8F2]`}>
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full border-[18px] border-[#E8CDB5]/25" />
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border-[18px] border-[#E8CDB5]/25" />
        <div className={wrapClass}>
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">
              Our Product Portfolio
            </span>
            <h2 className="mt-3 font-display text-[40px] font-normal leading-[1.04] tracking-tight text-[#143D2B] sm:text-[56px]">
              Premium Materials. <span className="text-[#C86D51]">Endless Possibilities.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#5C655F] sm:text-base">
              From structural essentials to design-led finishes, our range is
              engineered to deliver superior quality, performance, and style for
              every space.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {productPortfolio.map(([title, copy, Icon, image]) => (
              <article
                key={title}
                className="group flex min-h-[400px] flex-col overflow-hidden rounded-[22px] border border-white bg-white shadow-lg shadow-[#8E510D]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#F7F3EC] text-[#143D2B] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 font-display text-[25px] font-bold leading-tight text-[#143D2B]">
                    {title}
                  </h3>
                  <span className="mt-3 block h-0.5 w-6 bg-[#C86D51]" />
                  <p className="mt-4 text-sm leading-6 text-[#65736A]">{copy}</p>
                </div>
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="mt-auto h-48 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <a
              href={ROUTES.products}
              className="inline-flex items-center gap-2 rounded-full bg-[#143D2B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#C86D51]"
            >
              Explore product portfolio <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY & EVALUATION */}
      <section className={sectionClass}>
        <div className={`${wrapClass} grid gap-6 lg:grid-cols-3`}>
          <Card>
            <CardHeader>
              <Users className="text-[#8E510D]" />
              <CardTitle>Who Can Apply</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {applicantTypes.map((item) => (
                <p
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-[#65736a]"
                >
                  <Check className="mt-1 shrink-0 text-[#143d2b]" size={16} />
                  {item}
                </p>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ClipboardCheck className="text-[#8E510D]" />
              <CardTitle>What We Evaluate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {evaluationFactors.map((item) => (
                <p
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-[#65736a]"
                >
                  <Check className="mt-1 shrink-0 text-[#143d2b]" size={16} />
                  {item}
                </p>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-[#143d2b] text-white">
            <CardHeader>
              <ShieldCheck className="text-[#e7b878]" />
              <CardTitle className="text-white">Partner Commitments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {partnerExpectations.map((item) => (
                <p
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-white/70"
                >
                  <Check className="mt-1 shrink-0 text-[#e7b878]" size={16} />
                  {item}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="application-process"
        className={`${sectionClass} bg-[#F7F7F5] border-t border-b border-brand-border/40`}
      >
        <div className={wrapClass}>
          <Heading
            eyebrow="Application Process"
            title="A Clear Route From Introduction to Dealer Onboarding."
            copy="Submitting an application starts a business review. It does not automatically create a dealership, territory exclusivity, credit facility or supply commitment."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, copy]) => (
              <Card key={number} className="bg-white border border-brand-border/70 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <span className="font-display text-3xl font-bold text-[#C86D51]">
                    {number}
                  </span>
                  <CardTitle className="font-display text-xl font-bold">{title}</CardTitle>
                  <CardDescription className="leading-6">
                    {copy}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section id="partner-application" className={`${sectionClass} bg-white`}>
        <div className={wrapClass}>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <Heading
                eyebrow="Dealer Application"
                title="Interested in Joining the Pentagon Dealer Network?"
                copy="Tell us about your business, location, existing product categories, market reach and infrastructure. Submitting the form starts a review and does not create an automatic appointment or territory commitment."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Partnership & territory",
                  "Business details",
                  "Market experience",
                  "Infrastructure & commercial plan",
                  "Review & consent",
                ].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      index + 1 < formStep && setFormStep(index + 1)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm ${formStep === index + 1 ? "bg-[#143d2b] text-white" : index + 1 < formStep ? "bg-[#eef2ee] text-[#143d2b]" : "text-[#65736a]"}`}
                  >
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs ${index + 1 < formStep ? "bg-[#d99143] text-white" : "border border-current"}`}
                    >
                      {index + 1 < formStep ? <Check size={14} /> : index + 1}
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Step {formStep} of 5</Badge>
                  <span className="text-xs text-[#65736a]">
                    * Required fields
                  </span>
                </div>
                <CardTitle>
                  {
                    [
                      "Partnership & territory",
                      "Business details",
                      "Market experience",
                      "Infrastructure & commercial plan",
                      "Review & consent",
                    ][formStep - 1]
                  }
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-12 text-center">
                    <CircleCheck className="mx-auto text-[#143d2b]" size={56} />
                    <h3 className="mt-5 font-display text-3xl font-bold">
                      Application prepared.
                    </h3>
                    <p className="mx-auto mt-3 max-w-lg leading-7 text-[#65736a]">
                      Thank you for sharing your business profile. The current
                      website records this confirmation in the page only;
                      connect the form to the approved submission service before
                      production launch.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initialForm);
                        setConsent(false);
                        setFormStep(1);
                      }}
                    >
                      Start another application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleDealerSubmit}>
                    {formStep === 1 && (
                      <div className="grid gap-5 md:grid-cols-2">
                        <input
                          type="hidden"
                          name="partnerType"
                          value="Dealer"
                        />
                        <Field label="State" required>
                          <Input
                            className={inputClass}
                            value={form.state}
                            onChange={update("state")}
                          />
                        </Field>
                        <Field label="Proposed territory" required>
                          <Input
                            className={inputClass}
                            value={form.territory}
                            onChange={update("territory")}
                            placeholder="City, district or region"
                          />
                        </Field>
                        <Field label="Products of interest" required wide>
                          <div className="flex flex-wrap gap-2">
                            {products.map((item) => (
                              <Button
                                key={item}
                                type="button"
                                size="sm"
                                variant={
                                  form.products
                                    .split(",")
                                    .map((x) => x.trim())
                                    .includes(item)
                                    ? "primary"
                                    : "outline"
                                }
                                onClick={() => toggleChip("products", item)}
                              >
                                {item}
                              </Button>
                            ))}
                          </div>
                        </Field>
                      </div>
                    )}
                    {formStep === 2 && (
                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Legal business name" required>
                          <Input
                            className={inputClass}
                            value={form.legalName}
                            onChange={update("legalName")}
                          />
                        </Field>
                        <Field label="Trade name">
                          <Input
                            className={inputClass}
                            value={form.tradeName}
                            onChange={update("tradeName")}
                          />
                        </Field>
                        <Field label="Contact person" required>
                          <Input
                            className={inputClass}
                            value={form.contactName}
                            onChange={update("contactName")}
                          />
                        </Field>
                        <Field label="Designation">
                          <Input
                            className={inputClass}
                            value={form.designation}
                            onChange={update("designation")}
                          />
                        </Field>
                        <Field label="Mobile" required>
                          <Input
                            className={inputClass}
                            value={form.mobile}
                            onChange={update("mobile")}
                            inputMode="tel"
                          />
                        </Field>
                        <Field label="WhatsApp">
                          <Input
                            className={inputClass}
                            value={form.whatsapp}
                            onChange={update("whatsapp")}
                            inputMode="tel"
                          />
                        </Field>
                        <Field label="Email" required>
                          <Input
                            className={inputClass}
                            type="email"
                            value={form.email}
                            onChange={update("email")}
                          />
                        </Field>
                        <Field label="GSTIN">
                          <Input
                            className={inputClass}
                            value={form.gstin}
                            onChange={update("gstin")}
                          />
                        </Field>
                        <Field label="Business address" required wide>
                          <Textarea
                            value={form.address}
                            onChange={update("address")}
                            className="min-h-24 bg-white"
                          />
                        </Field>
                        <Field label="City" required>
                          <Input
                            className={inputClass}
                            value={form.city}
                            onChange={update("city")}
                          />
                        </Field>
                        <Field label="District">
                          <Input
                            className={inputClass}
                            value={form.district}
                            onChange={update("district")}
                          />
                        </Field>
                        <Field label="PIN code" required>
                          <Input
                            className={inputClass}
                            value={form.pin}
                            onChange={update("pin")}
                            inputMode="numeric"
                          />
                        </Field>
                        <Field label="Year established">
                          <Input
                            className={inputClass}
                            value={form.established}
                            onChange={update("established")}
                          />
                        </Field>
                      </div>
                    )}
                    {formStep === 3 && (
                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Business categories" required wide>
                          <div className="flex flex-wrap gap-2">
                            {categories.map((item) => (
                              <Button
                                key={item}
                                type="button"
                                size="sm"
                                variant={
                                  form.categories
                                    .split(",")
                                    .map((x) => x.trim())
                                    .includes(item)
                                    ? "primary"
                                    : "outline"
                                }
                                onClick={() => toggleChip("categories", item)}
                              >
                                {item}
                              </Button>
                            ))}
                          </div>
                        </Field>
                        <Field label="Existing brands">
                          <Textarea
                            value={form.brands}
                            onChange={update("brands")}
                          />
                        </Field>
                        <Field label="Customer groups">
                          <Textarea
                            value={form.customers}
                            onChange={update("customers")}
                            placeholder="Dealers, contractors, carpenters, designers…"
                          />
                        </Field>
                        <Field label="Markets served">
                          <Textarea
                            value={form.markets}
                            onChange={update("markets")}
                          />
                        </Field>
                        <Field label="Industry experience">
                          <Textarea
                            value={form.experience}
                            onChange={update("experience")}
                          />
                        </Field>
                        <Field
                          label="Why do you want to partner?"
                          required
                          wide
                        >
                          <Textarea
                            className="min-h-28"
                            value={form.reason}
                            onChange={update("reason")}
                          />
                        </Field>
                      </div>
                    )}
                    {formStep === 4 && (
                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Showroom / shop">
                          <select
                            className={selectClass}
                            value={form.showroom}
                            onChange={update("showroom")}
                          >
                            <option>Yes</option>
                            <option>No</option>
                            <option>Planned</option>
                          </select>
                        </Field>
                        <Field label="Warehouse">
                          <select
                            className={selectClass}
                            value={form.warehouse}
                            onChange={update("warehouse")}
                          >
                            <option>Yes</option>
                            <option>No</option>
                            <option>Planned</option>
                          </select>
                        </Field>
                        <Field label="Warehouse area">
                          <Input
                            className={inputClass}
                            value={form.warehouseArea}
                            onChange={update("warehouseArea")}
                            placeholder="Approx. sq. ft."
                          />
                        </Field>
                        <Field label="Team size">
                          <Input
                            className={inputClass}
                            value={form.teamSize}
                            onChange={update("teamSize")}
                          />
                        </Field>
                        <Field label="Logistics capability">
                          <Textarea
                            value={form.logistics}
                            onChange={update("logistics")}
                          />
                        </Field>
                        <Field label="Trade relationships">
                          <Textarea
                            value={form.tradeRelationships}
                            onChange={update("tradeRelationships")}
                          />
                        </Field>
                        <Field label="Expected opening order">
                          <Input
                            className={inputClass}
                            value={form.openingOrder}
                            onChange={update("openingOrder")}
                          />
                        </Field>
                        <Field label="Expected monthly purchase">
                          <Input
                            className={inputClass}
                            value={form.monthlyPurchase}
                            onChange={update("monthlyPurchase")}
                          />
                        </Field>
                        <Field label="Requested territory">
                          <Input
                            className={inputClass}
                            value={form.territoryRequested}
                            onChange={update("territoryRequested")}
                          />
                        </Field>
                        <Field label="Preferred discussion date">
                          <Input
                            className={inputClass}
                            type="date"
                            value={form.discussionDate}
                            onChange={update("discussionDate")}
                          />
                        </Field>
                        <Field label="Opportunities in your market" wide>
                          <Textarea
                            className="min-h-24"
                            value={form.opportunities}
                            onChange={update("opportunities")}
                          />
                        </Field>
                        <Field label="Additional information" wide>
                          <Textarea
                            className="min-h-24"
                            value={form.additional}
                            onChange={update("additional")}
                          />
                        </Field>
                      </div>
                    )}
                    {formStep === 5 && (
                      <div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {[
                            ["Partnership", form.partnerType],
                            ["Territory", `${form.territory}, ${form.state}`],
                            ["Business", form.legalName],
                            ["Contact", `${form.contactName} · ${form.mobile}`],
                            ["Products", form.products],
                            ["Categories", form.categories],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="rounded-xl bg-[#F7F7F5] border border-brand-border/50 p-4"
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8E510D]">
                                {label}
                              </p>
                              <p className="mt-1 text-sm leading-6">
                                {value || "Not provided"}
                              </p>
                            </div>
                          ))}
                        </div>
                        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-[#cad4cc] p-4">
                          <input
                            className="mt-1 accent-[#143d2b]"
                            type="checkbox"
                            checked={consent}
                            onChange={(event) => {
                              setConsent(event.target.checked);
                              setStepError("");
                            }}
                          />
                          <span className="text-sm leading-6 text-[#65736a]">
                            I confirm that the information is accurate and
                            consent to being contacted about this application. I
                            understand that submission does not guarantee
                            appointment, exclusivity, credit or supply.
                          </span>
                        </label>
                      </div>
                    )}
                    {stepError && (
                      <p
                        role="alert"
                        className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-700"
                      >
                        {stepError}
                      </p>
                    )}
                    <div className="mt-7 flex items-center justify-between border-t border-[#dbe2dc] pt-5">
                      {formStep > 1 ? (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            setStepError("");
                            setFormStep((step) => step - 1);
                          }}
                        >
                          <ChevronLeft size={16} />
                          Previous
                        </Button>
                      ) : (
                        <span />
                      )}
                      {formStep < 5 ? (
                        <Button type="button" onClick={nextStep}>
                          Continue
                          <ArrowRight size={16} />
                        </Button>
                      ) : (
                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit application"}
                          <ArrowRight size={16} />
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="dealer-faq" className={`${sectionClass} bg-white`}>
        <div className={`${wrapClass} grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-stretch`}>
          <div className="lg:self-stretch">
            <div className="lg:sticky lg:top-20">
              <Heading
                eyebrow="Questions Before Applying"
                title="Dealer Network FAQs."
                copy="Find answers about dealer availability, dealership applications, territory, products and commercial discussions."
              />
              {/* <div className="relative mt-6">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#65736a]"
                  size={18}
                />
                <Input
                  className={`${inputClass} pl-10`}
                  value={faqFilter}
                  onChange={(event) => setFaqFilter(event.target.value)}
                  placeholder="Search FAQs"
                />
              </div> */}
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="rounded-2xl border border-[#dbe2dc] px-5"
          >
            {displayedFaqs.map(([question, answer]) => {
              const originalIndex = faqItems.findIndex(
                ([item]) => item === question,
              );
              return (
                <AccordionItem key={question} value={`faq-${originalIndex}`}>
                  <AccordionTrigger className="py-5 text-base hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-7 text-[#65736a]">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
            {displayedFaqs.length === 0 && (
              <p className="py-8 text-center text-sm text-[#65736a]">
                No FAQ matches that search.
              </p>
            )}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#143D2B] px-4 py-14 text-white sm:px-6 lg:px-8 border-t border-white/10">
        <div
          className={`${wrapClass} flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center`}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C86D51]">
              Start a conversation
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-white">
              Find a seller or introduce your business.
            </h2>
            <p className="mt-3 max-w-2xl text-white/80 text-sm sm:text-base leading-relaxed font-medium">
              Talk to Pentagon about product availability, territory, freight or
              a suitable partnership route.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b55c42] transition-all"
            >
              <Phone size={18} />
              Call Pentagon
            </a>
            <a
              href={dealerWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={CONTACT_SECTIONS.form}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
            >
              Contact form
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="sticky bottom-3 z-30 mx-auto mb-3 flex w-[calc(100%-1.5rem)] max-w-md gap-2 rounded-2xl border border-[#dbe2dc] bg-white/95 p-2 shadow-xl backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => chooseRoute("dealer")}
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#143d2b] px-2 text-xs font-semibold text-white"
        >
          <Handshake size={16} />
          Become a Dealer
        </button>

        <a
          href={CONTACT_SECTIONS.form}
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#C86D51] px-2 text-xs font-semibold text-white"
        >
          <MessageCircle size={16} />
          Contact Our Team
        </a>
      </div>
    </main>
  );
}

export default DealersPage;
