import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileDown,
  FileText,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { ROUTES } from "@/app/routes.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";

const resources = {
  "Product Catalogue": {
    eyebrow: "Complete Product Range",
    title: "Request the Pentagon Product Catalogue.",
    copy: "Receive product grades, available thickness guidance and range information directly in your inbox.",
    icon: BookOpenCheck,
  },
  "Company Brochure": {
    eyebrow: "Pentagon at a Glance",
    title: "Request the Pentagon Company Brochure.",
    copy: "Receive our company overview, manufacturing story, product portfolio and brand summary by email.",
    icon: FileDown,
  },
  "Technical Documents": {
    eyebrow: "Specifications & Guidance",
    title: "Request Pentagon Technical Documents.",
    copy: "Tell us which product you are evaluating and our team will email the relevant available technical documents.",
    icon: FileText,
  },
};

const inputClass =
  "h-12 w-full rounded-xl border border-[#CAD4CC] bg-white px-4 text-sm text-[#14211A] outline-none transition placeholder:text-[#89948D] focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/20";

function ResourceRequestPage() {
  const requested = new URLSearchParams(window.location.search).get("resource");
  const initialResource = resources[requested] ? requested : "Product Catalogue";
  const [resource, setResource] = useState(initialResource);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const content = resources[resource];
  const ResourceIcon = content.icon;

  useEffect(() => {
    document.title = `${resource} Request | Pentagon Plywood`;
  }, [resource]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const formData = new FormData(form);
      await submitPentagonEnquiry({
        enquiryType: "resource-request",
        formSource: "resource-request",
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        companyName: String(formData.get("companyName") || "").trim(),
        resourceRequested: resource,
        details: `Please email me the ${resource}.`,
        consent: formData.get("consent") === "on",
      });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error?.message || "The request could not be submitted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-[82vh] overflow-hidden bg-[#F7F3EC] px-5 py-12 text-[#14211A] sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border border-[#C86D51]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[390px] w-[390px] rounded-full border border-[#143D2B]/10" />

      <div className="relative mx-auto w-full max-w-[1120px]">
        <a href={ROUTES.home} className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-[#65736A] transition hover:text-[#C86D51]">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>

        <div className="grid overflow-hidden rounded-[32px] border border-[#DED5C8] bg-white shadow-[0_24px_65px_rgba(40,52,44,0.13)] lg:grid-cols-[0.92fr_1.08fr]">
          <section className="relative overflow-hidden bg-[#103E2B] p-8 text-white sm:p-11 lg:p-14">
            <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#C86D51]/20 blur-3xl" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#F1AE98]">
                <ResourceIcon className="h-7 w-7" />
              </span>
              <span className="mt-10 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F1AE98]">
                {content.eyebrow}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.04] sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/72">{content.copy}</p>

              <div className="mt-10 space-y-4 border-t border-white/15 pt-7">
                {["Fill in your contact details", "Our team reviews the exact document request", "The available resource is sent to your email"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/82">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-[10px] font-bold text-[#F1AE98]">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-14">
            {isSubmitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center" role="status">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#143D2B] text-white"><CheckCircle2 className="h-8 w-8" /></span>
                <span className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C86D51]">Request received</span>
                <h2 className="mt-3 font-display text-4xl font-bold">We’ll Send It to Your Email.</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#65736A]">Your request for the <strong className="text-[#14211A]">{resource}</strong> has reached the Pentagon team.</p>
                <button type="button" onClick={() => setIsSubmitted(false)} className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-[#CAD4CC] px-5 text-xs font-bold text-[#143D2B] transition hover:border-[#143D2B]">
                  Request another document <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C86D51]">Email Request Form</span>
                <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Tell Us Where to Send It.</h2>
                <p className="mt-3 text-sm leading-6 text-[#65736A]">Choose the resource you need and enter your email address.</p>

                <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <label className="sm:col-span-2">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.1em]">Resource required *</span>
                    <select className={inputClass} value={resource} onChange={(event) => setResource(event.target.value)}>
                      {Object.keys(resources).map((item) => <option value={item} key={item}>{item}</option>)}
                    </select>
                  </label>
                  <label>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.1em]">Full name *</span>
                    <span className="relative block"><User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#89948D]" /><input className={`${inputClass} pl-10`} name="name" required placeholder="e.g. Rohan Sharma" /></span>
                  </label>
                  <label>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.1em]">Email address *</span>
                    <span className="relative block"><Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#89948D]" /><input className={`${inputClass} pl-10`} name="email" type="email" required placeholder="e.g. rohan@company.in" /></span>
                  </label>
                  <label>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.1em]">Phone / WhatsApp</span>
                    <span className="relative block"><Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#89948D]" /><input className={`${inputClass} pl-10`} name="phone" type="tel" placeholder="+91 98765 43210" /></span>
                  </label>
                  <label>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.1em]">Company / Firm</span>
                    <input className={inputClass} name="companyName" placeholder="e.g. Sharma Interiors" />
                  </label>
                  <label className="flex items-start gap-2.5 text-xs leading-5 text-[#65736A] sm:col-span-2">
                    <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#143D2B]" />
                    I agree to let Pentagon Plywood contact me and email the requested resource.
                  </label>
                  {submitError && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700 sm:col-span-2">{submitError}</div>}
                  <button disabled={isSubmitting} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#143D2B] disabled:opacity-60 sm:col-span-2">
                    {isSubmitting ? "Sending request..." : `Email Me the ${resource}`} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default ResourceRequestPage;
