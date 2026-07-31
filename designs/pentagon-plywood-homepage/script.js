"use strict";

const productData = [
  { category: "01 · Plywood", name: "Commercial Plywood", description: "For furniture, partitions, wardrobes and interior applications used in relatively dry areas.", grade: "To be confirmed", visual: "commercial", label: "Dimensional commercial plywood stack" },
  { category: "02 · Plywood", name: "Marine Plywood", description: "Designed for applications where the material may face greater moisture and demanding conditions.", grade: "To be confirmed", visual: "marine", label: "Thick premium marine plywood board" },
  { category: "03 · Boards", name: "Blockboards", description: "A practical material option for doors, shelves, tables, partitions and long furniture panels.", grade: "IS 1659 · Blockboard", visual: "blockboard", label: "Cutaway blockboard showing its timber core" },
  { category: "04 · Doors", name: "Flush Doors", description: "Strong, clean and versatile door solutions for residential and commercial spaces.", grade: "IS 2202 · Flush Door", visual: "door", label: "Finished flush door at a slight perspective angle" }
];

const applicationData = [
  { image: "Kitchens photography", product: "Marine Plywood", copy: "For kitchen cabinetry and utility areas where moisture exposure may be higher." },
  { image: "Wardrobe photography", product: "Commercial Plywood", copy: "A practical starting point for wardrobe carcasses, shutters and dry interior storage." },
  { image: "Living space photography", product: "Commercial Plywood", copy: "Suitable for furniture, media units, partitions and considered interior joinery." },
  { image: "Office photography", product: "Blockboards", copy: "Consider blockboards for long shelves, work tables, partitions and furniture panels." },
  { image: "Retail interior photography", product: "Commercial Plywood", copy: "For display fixtures, counters and interior elements in relatively dry retail spaces." },
  { image: "Hospitality photography", product: "Application-led selection", copy: "Hospitality spaces can combine plywood, blockboards and doors based on use and exposure." },
  { image: "Door and partition photography", product: "Flush Doors & Blockboards", copy: "Clean, versatile options for doors, partitions and long-format interior applications." }
];

const promiseData = [
  { visual: "experience", label: "Team and factory heritage", alt: "Placeholder for Pentagon Plywood team and factory heritage image" },
  { visual: "products", label: "Plywood, blockboard and door range", alt: "Placeholder for Pentagon Plywood product range image" },
  { visual: "process", label: "Material selection and manufacturing", alt: "Placeholder for Pentagon Plywood manufacturing process image" },
  { visual: "support", label: "Requirement consultation and supply support", alt: "Placeholder for Pentagon Plywood customer support image" }
];

const testimonialData = [
  { quote: "“Pentagon Plywood provides top-notch products at reasonable prices. Highly recommended for any serious project.”", name: "Vikram Singh", role: "Interior Contractor · Delhi" },
  { quote: "“Remarkable products—innovative, user-friendly and reliable. The finish quality is consistent batch after batch.”", name: "Shiv Kumar Yadav", role: "Furniture Manufacturer · Yamunanagar" },
  { quote: "“The packaging was eco-friendly, reflecting a real commitment to sustainability. It is a small detail, but it matters.”", name: "Saurabh Mehta", role: "Architect · Chandigarh" }
];

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const header = document.querySelector("[data-header]");
let lastFocusedElement = null;

function setMenu(open) {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  primaryNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  if (open) {
    lastFocusedElement = document.activeElement;
    primaryNav.querySelector("a")?.focus();
  } else if (lastFocusedElement === menuToggle) {
    menuToggle.focus();
  }
}

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
primaryNav?.addEventListener("click", event => {
  if (event.target.closest("a") && window.innerWidth < 1100) setMenu(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1100) setMenu(false);
});
window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });

const heroVisual = document.querySelector("[data-hero-visual]");
const heroMaterials = [
  { focus: "plywood", label: "Layered plywood core" },
  { focus: "marine", label: "Premium marine panel" },
  { focus: "blockboard", label: "Solid timber block core" },
  { focus: "door", label: "Finished flush door" }
];
let activeHeroMaterial = 0;

function showHeroMaterial(index) {
  if (!heroVisual) return;
  activeHeroMaterial = (index + heroMaterials.length) % heroMaterials.length;
  const material = heroMaterials[activeHeroMaterial];
  heroVisual.dataset.focus = material.focus;
  heroVisual.querySelector("[data-material-count]").textContent = `${String(activeHeroMaterial + 1).padStart(2, "0")} / 04`;
  heroVisual.querySelector("[data-material-focus]").textContent = material.label;
}

if (heroVisual) {
  window.setInterval(() => {
    if (!document.hidden) showHeroMaterial(activeHeroMaterial + 1);
  }, 5000);
}

const productTabs = [...document.querySelectorAll("[data-product]")];
function showProduct(index, moveFocus = false) {
  const product = productData[index];
  const stage = document.querySelector(".product-stage");
  const render = document.querySelector("[data-product-render]");
  if (!product || !stage || !render) return;
  stage.classList.add("is-changing");
  window.setTimeout(() => {
    document.querySelector("[data-product-category]").textContent = product.category;
    document.querySelector("[data-product-name]").textContent = product.name;
    document.querySelector("[data-product-description]").textContent = product.description;
    document.querySelector("[data-product-grade]").textContent = product.grade;
    render.dataset.productRender = product.visual;
    render.setAttribute("aria-label", product.label);
    productTabs.forEach((tab, tabIndex) => {
      tab.setAttribute("aria-selected", String(tabIndex === index));
      tab.tabIndex = tabIndex === index ? 0 : -1;
    });
    if (moveFocus) productTabs[index].focus();
    stage.classList.remove("is-changing");
  }, 180);
}
productTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showProduct(index));
  tab.addEventListener("keydown", event => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = event.key === "Home" ? 0 : event.key === "End" ? productTabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + productTabs.length) % productTabs.length;
    showProduct(next, true);
  });
});

const promiseButtons = [...document.querySelectorAll("[data-promise]")];
function showPromise(index) {
  const item = promiseData[index];
  const feature = document.querySelector(".promise-feature");
  if (!item || !feature) return;
  feature.dataset.promiseImage = item.visual;
  feature.setAttribute("aria-label", item.alt);
  feature.querySelector("[data-promise-label]").textContent = item.label;
  promiseButtons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === index)));
}
promiseButtons.forEach((button, index) => {
  button.addEventListener("click", () => showPromise(index));
  button.addEventListener("focus", () => showPromise(index));
  button.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) showPromise(index);
  });
});

const applicationTabs = [...document.querySelectorAll("[data-application]")];
function showApplication(index) {
  const item = applicationData[index];
  if (!item) return;
  document.querySelector("[data-application-image]").textContent = item.image;
  document.querySelector("[data-application-product]").textContent = item.product;
  document.querySelector("[data-application-copy]").textContent = item.copy;
  applicationTabs.forEach((tab, tabIndex) => tab.setAttribute("aria-selected", String(tabIndex === index)));
}
applicationTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showApplication(index));
  tab.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) showApplication(index);
  });
});

let currentTestimonial = 0;
const testimonialQuote = document.querySelector("[data-testimonial-quote]");
const testimonialName = document.querySelector("[data-testimonial-name]");
const testimonialRole = document.querySelector("[data-testimonial-role]");
const testimonialDots = [...document.querySelectorAll(".testimonial-dots button")];
function showTestimonial(index) {
  currentTestimonial = (index + testimonialData.length) % testimonialData.length;
  const item = testimonialData[currentTestimonial];
  testimonialQuote.textContent = item.quote;
  testimonialName.textContent = item.name;
  testimonialRole.textContent = item.role;
  testimonialDots.forEach((dot, dotIndex) => dot.setAttribute("aria-current", String(dotIndex === currentTestimonial)));
}
document.querySelector("[data-testimonial-prev]")?.addEventListener("click", () => showTestimonial(currentTestimonial - 1));
document.querySelector("[data-testimonial-next]")?.addEventListener("click", () => showTestimonial(currentTestimonial + 1));
testimonialDots.forEach((dot, index) => dot.addEventListener("click", () => showTestimonial(index)));
document.querySelector(".testimonial")?.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") showTestimonial(currentTestimonial - 1);
  if (event.key === "ArrowRight") showTestimonial(currentTestimonial + 1);
});

const form = document.querySelector("[data-enquiry-form]");
function fieldError(field, message) {
  const label = field.closest("label");
  field.setAttribute("aria-invalid", String(Boolean(message)));
  label?.classList.toggle("has-error", Boolean(message));
  const error = label?.querySelector(".field-error");
  if (error) error.textContent = message;
}
function validateField(field) {
  let message = "";
  const value = field.value.trim();
  if (field.required && !value) message = "This field is required.";
  else if (field.name === "phone" && !/^[6-9]\d{9}$/.test(value.replace(/\D/g, ""))) message = "Enter a valid 10-digit Indian mobile number.";
  else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email address.";
  fieldError(field, message);
  return !message;
}
form?.querySelectorAll("input:not(.honeypot input), select, textarea").forEach(field => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
});
form?.addEventListener("submit", event => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input:not(.honeypot input), select, textarea")];
  if (form.querySelector('[name="website"]').value) return;
  const valid = fields.map(validateField).every(Boolean);
  const status = form.querySelector(".form-status");
  if (!valid) {
    status.textContent = "Please review the highlighted fields.";
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  const button = form.querySelector(".form-submit");
  button.disabled = true;
  button.textContent = "Preparing enquiry…";
  window.setTimeout(() => {
    status.textContent = "Your enquiry is ready. Connect a secure form endpoint to send submissions.";
    button.disabled = false;
    button.innerHTML = 'Send My Enquiry <span aria-hidden="true">→</span>';
    form.reset();
  }, 800);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
