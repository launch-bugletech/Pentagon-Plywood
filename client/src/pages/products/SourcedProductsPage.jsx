import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Layers3,
  PackageCheck,
  Palette,
  Send,
  Upload,
} from "lucide-react";
import { CONTACT_SECTIONS, PRODUCT_ROUTES, ROUTES } from "@/app/routes.js";
import submitPentagonEnquiry from "@/services/pentagonEnquiry.js";

const webImages = {
  library:
    "https://image.made-in-china.com/2f0j00CgNekSbdMPct/High-Pressure-Commercial-Use-Indoor-Decorative-Laminate-Toilet-Compact-Access-Flooring-HPL.webp",
  plywood: "https://relgrow.com/shop/wp-content/uploads/2025/12/46184.jpg",
  fibre: "https://ik.imagekit.io/fepy/cdn/catalog/product/m/d/mdf16_1_1_1.png",
  laminate:
    "https://s.alicdn.com/%40sc04/kf/Hda7d7d9d2291444483b9ab90863f2eb2m/Designer-Panel-Hot-Selling-Wood-Aluminium-Polymer-Edl-Grain-Formica-Malaysia-Sunmica-Foil-High-Pressure-Laminate.jpg",
  teak:
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85",
  door:
    "https://s.alicdn.com/%40sc04/kf/He3269f7070fb4abdb579585467d4926bQ/Modern-Minimalist-Flat-Panel-Interior-Door-Wood-Grain-Texture-Custom-Bedroom-Flush-Door-for-Home-Hotel-Project.jpg",
};

const configs = {
  overview: {
    eyebrow: "Sourced by Pentagon",
    title: "More Materials. One Place to Start.",
    copy: "Bring decorative surfaces, engineered boards and laminated products together for furniture, interiors, retail spaces and projects.",
    image: webImages.library,
    categories: [
      ["Decorative Materials", "Laminates and Teak Ply for the visible character of an interior.", PRODUCT_ROUTES.decorativeMaterials, Palette],
      ["Engineered Boards", "Particle Board, MDF, HDHMR and WPC for different furniture components.", PRODUCT_ROUTES.engineeredBoards, Layers3],
      ["Laminated Products", "Plywood, Blockboard and Flush Doors paired with a decorative surface.", PRODUCT_ROUTES.laminatedProducts, PackageCheck],
    ],
    products: [],
    applications: ["Modular kitchens", "Wardrobes & storage", "Bathroom / vanity furniture", "Office furniture", "Decorative wall panels", "Retail & commercial interiors"],
    guideTitle: "Core + Surface. Two Decisions That Belong Together.",
    guideCopy: "The core determines construction, fixing, moisture behaviour and machining. The surface determines colour, grain, texture and visible appearance.",
  },
  decorative: {
    eyebrow: "Sourced by Pentagon · Decorative Materials",
    title: "Start With What People Will See.",
    copy: "Choose visible surfaces around the colour, grain, texture and character you want in the finished interior.",
    image: webImages.laminate,
    categories: [],
    products: [
      ["Laminates", "Colour, grain and texture for everyday furniture surfaces.", "Woodgrains · solid colours · stone-inspired designs · matt · gloss · textured finishes", "laminates", webImages.laminate],
      ["Teak Ply", "Natural wood character on a practical plywood base.", "Plan the grain, sheet matching and final polish before fabrication.", "teak-ply", webImages.teak],
    ],
    applications: ["Kitchens", "Wardrobes", "Office furniture", "Retail fixtures", "Wall panelling", "Decorative door surfaces"],
    guideTitle: "Natural Surface or Manufactured Surface?",
    guideCopy: "Choose laminates for controlled, repeatable colour and texture. Choose Teak Ply when real grain, natural variation and a final polish are part of the design direction.",
  },
  engineered: {
    eyebrow: "Sourced by Pentagon · Engineered Boards",
    title: "Different Cores Solve Different Furniture Problems.",
    copy: "Compare board construction according to application, machining, moisture conditions, hardware, finish and the component you need to build.",
    image: webImages.fibre,
    categories: [],
    products: [
      ["Particle Board", "A practical core for modular furniture.", "Best starting point for straight-cut modular furniture and repeat panel construction.", "particle-board", webImages.plywood],
      ["MDF Board", "Smooth fibreboard for routing and finishing.", "A strong starting point when detailed CNC work and a finish-ready surface matter.", "mdf-board", webImages.fibre],
      ["HDHMR Board", "Dense fibreboard for more moisture-conscious furniture.", "Consider where routing, furniture finishing and higher moisture resistance need to work together.", "hdhmr-board", webImages.fibre],
      ["WPC Board", "Composite board for selected moisture-conscious applications.", "Confirm the actual composition, density, hardware behaviour and intended environment.", "wpc-board", webImages.plywood],
    ],
    applications: ["Modular furniture", "Painted shutters", "Routed panels", "Kitchen furniture", "Vanities & utility", "Commercial furniture"],
    guideTitle: "Compare the Requirement Before You Compare the Price.",
    guideCopy: "Do not start with which board is best. Start with what the component needs to do—then confirm the supplied specification.",
  },
  laminated: {
    eyebrow: "Sourced by Pentagon · Laminated Products",
    title: "Same Surface. Different Core.",
    copy: "A laminated product combines a board or door construction with a decorative surface. The finished face may look similar; the core beneath can be completely different.",
    image: webImages.door,
    categories: [],
    products: [
      ["Laminated Plywood", "Plywood construction with the surface already planned.", "Choose plywood grade, thickness, laminate, edges and hardware together.", "laminated-plywood", webImages.plywood],
      ["Laminated Blockboard", "A timber-strip core with a finished decorative face.", "Consider for selected tall shutters, long shelves and furniture panels.", "laminated-blockboard", webImages.laminate],
      ["Laminated Flush Doors", "A complete door shutter finished around the interior.", "Plan the door grade, dimensions, both faces, grain direction, hinges, lock and frame.", "laminated-flush-doors", webImages.door],
    ],
    applications: ["Kitchens", "Wardrobes", "Cabinets", "Office interiors", "Retail interiors", "Coordinated room doors"],
    guideTitle: "Choose the Surface. Choose the Core.",
    guideCopy: "A warm walnut look can sit over plywood, Blockboard, MDF or another compatible core. Decide the component performance first, then select the visible finish.",
  },
};

const overviewFaqs = [
  ["What does Sourced by Pentagon mean?", "It brings complementary boards, decorative materials and finished combinations into one material conversation, subject to current supplier availability."],
  ["Can I buy manufactured and sourced products together?", "Yes. Share the complete project or production requirement so the materials can be discussed together."],
  ["Can I send a BOQ or reference image?", "Yes. A BOQ, drawing, laminate code or reference image helps narrow the material selection."],
  ["Do I need to know the exact product first?", "No. Start with what you are building, the environment and the required finish."],
];

function currentConfig() {
  const path = window.location.pathname;
  if (path.includes("decorative-materials")) return ["decorative", configs.decorative];
  if (path.includes("engineered-boards")) return ["engineered", configs.engineered];
  if (path.includes("laminated-products")) return ["laminated", configs.laminated];
  return ["overview", configs.overview];
}

function SourcedEnquiry({ category }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setError("");
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      await submitPentagonEnquiry({
        ...fields,
        enquiryType: "product",
        formSource: `sourced-by-pentagon-${category}`,
        product: fields.product || "Sourced by Pentagon requirement",
        consent: true,
      });
      setStatus("sent");
      form.reset();
    } catch (submissionError) {
      setStatus("idle");
      setError(submissionError.message || "Please try again.");
    }
  };

  return (
    <section id="sourced-enquiry" className="bg-[#143D2B] px-5 py-16 text-white sm:px-7 lg:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E8927C]">Bring the complete material list</span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Start with what you&apos;re building.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">Share the application, board or surface direction, quantity and delivery location. You can also send a BOQ, drawing or reference image through our contact team.</p>
          <a href={CONTACT_SECTIONS.form} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F4D8B4] hover:text-white">Open the full contact form <ArrowRight size={16} /></a>
        </div>
        <form onSubmit={submit} className="rounded-3xl bg-white p-5 text-[#14211A] shadow-2xl sm:p-7">
          {status === "sent" ? (
            <div className="py-12 text-center"><Check className="mx-auto h-10 w-10 text-[#143D2B]" /><h3 className="mt-4 font-display text-3xl">Requirement received.</h3><p className="mt-2 text-sm text-[#65736A]">Our team will review the details and contact you.</p></div>
          ) : (
            <>
              <h3 className="font-display text-2xl">Share your requirement</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Your name" className="h-12 rounded-xl border border-[#CAD4CC] px-4 text-sm" />
                <input required name="phone" inputMode="tel" placeholder="Phone number" className="h-12 rounded-xl border border-[#CAD4CC] px-4 text-sm" />
                <input name="email" type="email" placeholder="Email address" className="h-12 rounded-xl border border-[#CAD4CC] px-4 text-sm" />
                <input name="city" placeholder="City / state" className="h-12 rounded-xl border border-[#CAD4CC] px-4 text-sm" />
                <input name="product" defaultValue={category === "overview" ? "" : configs[category].title} placeholder="Product or material" className="h-12 rounded-xl border border-[#CAD4CC] px-4 text-sm sm:col-span-2" />
                <textarea required name="details" placeholder="Application, quantity, finish, BOQ or other material details" className="min-h-28 rounded-xl border border-[#CAD4CC] p-4 text-sm sm:col-span-2" />
              </div>
              {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
              <button disabled={status === "sending"} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#C86D51] px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#A85238] disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send Material Requirement"} <Send size={16} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function SourcedProductsPage() {
  const [category, config] = currentConfig();
  const hasProducts = config.products.length > 0;

  useEffect(() => {
    document.title = `${category === "overview" ? "Sourced by Pentagon" : config.eyebrow.split(" · ").pop()} | Pentagon Plywood`;
  }, [category, config]);

  return (
    <main data-palette="pentagon-brand" className="home-theme overflow-hidden bg-[#FDFBF8] text-[#14211A] font-sans">
      <div className="border-b border-white/10 bg-[#143D2B] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65 sm:px-7">
        <div className="mx-auto max-w-[1280px]"><a href={ROUTES.home} className="hover:text-white">Home</a><span className="mx-2 text-[#E8927C]">›</span><a href={ROUTES.products} className="hover:text-white">Products</a><span className="mx-2 text-[#E8927C]">›</span><strong className="text-white">{category === "overview" ? "Sourced by Pentagon" : config.eyebrow.split(" · ").pop()}</strong></div>
      </div>

      <section className="relative isolate overflow-hidden bg-[#F7F3EC] px-5 py-16 sm:px-7 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full border-[20px] border-[#E8CDB5]/35" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border-[20px] border-[#E8CDB5]/35" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">{config.eyebrow}</span>
            <h1 className="mt-4 max-w-2xl font-display text-[44px] leading-[1.04] tracking-tight text-[#143D2B] sm:text-[60px]">{config.title}</h1>
            <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#4A5750]">{config.copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={hasProducts ? "#explore-products" : "#explore-range"} className="inline-flex h-12 items-center gap-2 rounded-full bg-[#143D2B] px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#C86D51]">Explore the range <ArrowRight size={16} /></a>
              <a href="#sourced-enquiry" className="inline-flex h-12 items-center gap-2 rounded-full border border-[#143D2B]/25 bg-white px-6 text-xs font-bold uppercase tracking-wider text-[#143D2B] transition hover:border-[#C86D51]">Share your material list <Upload size={16} /></a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl">
            <img src={config.image} alt="Architectural material selection" className="h-[300px] w-full rounded-[22px] object-cover sm:h-[420px]" />
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-4 shadow-lg"><strong className="block font-display text-xl text-[#143D2B]">Core → Surface → Finish</strong><span className="mt-1 block text-xs text-[#65736A]">One complete material requirement.</span></div>
          </div>
        </div>
      </section>

      {category === "overview" && <section id="explore-range" className="px-5 py-20 sm:px-7 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="max-w-2xl"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">Explore the range</span><h2 className="mt-3 font-display text-4xl text-[#143D2B] sm:text-5xl">Multiple materials for one interior project.</h2></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{config.categories.map(([title, copy, href, Icon]) => <a key={title} href={href} className="group rounded-3xl border border-[#E4D8CA] bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F3EC] text-[#143D2B]"><Icon size={24} /></span><h3 className="mt-6 font-display text-3xl text-[#143D2B]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#65736A]">{copy}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B85C43]">Explore category <ArrowRight size={16} /></span></a>)}</div></div></section>}

      {hasProducts && <section id="explore-products" className="bg-[#FCF8F2] px-5 py-20 sm:px-7 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="max-w-2xl"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">Explore products</span><h2 className="mt-3 font-display text-4xl text-[#143D2B] sm:text-5xl">Choose around the component, not just the category.</h2></div><div className={`mt-10 grid gap-5 ${config.products.length === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>{config.products.map(([title, copy, detail, id, image]) => <article key={id} id={id} className="scroll-mt-24 group overflow-hidden rounded-3xl border border-[#E8DED3] bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"><img src={image} alt={title} loading="lazy" className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="p-6"><h3 className="font-display text-3xl text-[#143D2B]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#4A5750]">{copy}</p><p className="mt-4 border-t border-[#EAE1D8] pt-4 text-xs leading-5 text-[#65736A]">{detail}</p><a href="#sourced-enquiry" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B85C43]">Discuss this material <ArrowRight size={15} /></a></div></article>)}</div></div></section>}

      <section className="px-5 py-20 sm:px-7 lg:py-28"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">Selection guide</span><h2 className="mt-3 font-display text-4xl leading-tight text-[#143D2B] sm:text-5xl">{config.guideTitle}</h2></div><div><p className="text-[16px] leading-8 text-[#4A5750]">{config.guideCopy}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["What are you building?", "What is the environment?", "What core or construction fits?", "What surface or finish is needed?", "Which thickness, size and hardware?", "What quantity and delivery schedule?"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#E5DBD0] bg-[#FCF8F2] p-4 text-sm font-medium text-[#143D2B]"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#143D2B] text-[10px] text-white">0{index + 1}</span>{item}</div>)}</div></div></div></section>

      {category === "engineered" && <section className="bg-[#143D2B] px-5 py-20 text-white sm:px-7 lg:py-24"><div className="mx-auto max-w-[1280px]"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E8927C]">Engineered board comparison</span><h2 className="mt-3 font-display text-4xl sm:text-5xl">Compare the requirement before the price.</h2><div className="mt-8 overflow-x-auto rounded-2xl border border-white/15"><table className="min-w-[760px] w-full text-left text-sm"><thead className="bg-white/10 text-[#F4D8B4]"><tr>{["Requirement", "Particle Board", "MDF", "HDHMR", "WPC"].map(item => <th key={item} className="p-4 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-white/10 text-white/80">{[["Modular furniture", "Strong application", "Suitable", "Suitable", "Selected applications"], ["Detailed CNC routing", "Limited", "Well suited", "Well suited", "Product dependent"], ["Moisture-conscious furniture", "Grade dependent", "Check MR/HMR", "Strong consideration", "Product dependent"], ["Painted surface", "Limited", "Strong application", "Strong application", "Product dependent"]].map(row => <tr key={row[0]}>{row.map(cell => <td key={cell} className="p-4">{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-xs leading-6 text-white/65">This is a selection guide, not a universal ranking. Confirm the actual product specification before ordering.</p></div></section>}

      <section className="bg-[#F7F3EC] px-5 py-20 sm:px-7 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="max-w-2xl"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">Start with the application</span><h2 className="mt-3 font-display text-4xl text-[#143D2B] sm:text-5xl">The material follows what you are building.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{config.applications.map((application, index) => <div key={application} className="rounded-2xl border border-[#E7DCD0] bg-white p-5"><span className="text-[11px] font-bold tracking-widest text-[#B85C43]">0{index + 1}</span><h3 className="mt-3 font-display text-2xl text-[#143D2B]">{application}</h3><p className="mt-2 text-sm leading-6 text-[#65736A]">Discuss the component, expected environment, surface direction and hardware with the complete material requirement.</p></div>)}</div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:py-24"><div className="mx-auto grid max-w-[1120px] gap-10 rounded-[32px] border border-[#E6DCD1] bg-white p-7 shadow-xl lg:grid-cols-[.75fr_1.25fr] lg:p-10"><div><ClipboardList className="h-9 w-9 text-[#B85C43]" /><h2 className="mt-5 font-display text-4xl text-[#143D2B]">Confirm the complete specification.</h2><p className="mt-4 text-sm leading-7 text-[#65736A]">Similar-looking sheets can have completely different cores, grades, surfaces and suitability.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Product category and brand", "Core construction and grade", "Thickness and sheet dimensions", "Surface / design code / grain", "Moisture and installation environment", "Hardware and edge requirements", "Quantity and batch availability", "Delivery city and schedule"].map(item => <div key={item} className="flex gap-2 text-sm text-[#4A5750]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B85C43]" />{item}</div>)}</div></div></section>

      <section className="bg-[#FCF8F2] px-5 py-20 sm:px-7 lg:py-24"><div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B85C43]">Frequently asked questions</span><h2 className="mt-3 font-display text-4xl text-[#143D2B]">Useful details before you source.</h2></div><div className="space-y-3">{overviewFaqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-[#E4D9CE] bg-white p-5"><summary className="cursor-pointer list-none font-display text-xl text-[#143D2B]">{question}<span className="float-right text-[#B85C43] group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-[#EEE5DC] pt-4 text-sm leading-7 text-[#65736A]">{answer}</p></details>)}</div></div></section>

      <SourcedEnquiry category={category} />
    </main>
  );
}

export default SourcedProductsPage;
