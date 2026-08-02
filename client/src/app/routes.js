export const ROUTES = Object.freeze({
  home: '/',
  about: '/about',
  contact: '/contact-us',
  contactV2: '/contact-v2',
  dealers: '/dealers-distributors',
  applications: '/applications',
  plywood: '/plywood',
  mrGradePlywood: '/products/plywood/mr-grade-plywood',
  comingSoon: '/coming-soon',
});

export const APPLICATION_SECTIONS = Object.freeze({
  explore: `${ROUTES.applications}#explore-applications`,
  guide: `${ROUTES.applications}#material-guide`,
  furniture: `${ROUTES.applications}#home-furniture`,
  kitchens: `${ROUTES.applications}#modular-kitchens`,
  wardrobes: `${ROUTES.applications}#wardrobes-storage`,
  doors: `${ROUTES.applications}#doors-shutters`,
  walls: `${ROUTES.applications}#wall-panelling`,
  commercial: `${ROUTES.applications}#commercial-interiors`,
  trade: `${ROUTES.applications}#trade-supply`,
  faq: `${ROUTES.applications}#applications-faq`,
  enquiry: `${ROUTES.applications}#application-enquiry`,
});

export const HOME_SECTIONS = Object.freeze({
  products: `${ROUTES.home}#products`,
  manufacturing: `${ROUTES.home}#manufacturing`,
  quality: `${ROUTES.home}#quality`,
  applications: `${ROUTES.home}#applications`,
  dealers: `${ROUTES.home}#dealers`,
  resources: `${ROUTES.home}#resources`,
  enquiry: `${ROUTES.home}#enquiry`,
});

export const PLYWOOD_SECTIONS = Object.freeze({
  range: `${ROUTES.plywood}#range`,
  mrGrade: `${ROUTES.plywood}#mr-grade`,
  marine: `${ROUTES.plywood}#marine`,
  faq: `${ROUTES.plywood}#faq`,
  enquiry: `${ROUTES.plywood}#enquiry`,
});

export const MR_GRADE_SECTIONS = Object.freeze({
  overview: `${ROUTES.mrGradePlywood}#overview`,
  applications: `${ROUTES.mrGradePlywood}#applications`,
  limitations: `${ROUTES.mrGradePlywood}#limitations`,
  specifications: `${ROUTES.mrGradePlywood}#specifications`,
  thickness: `${ROUTES.mrGradePlywood}#thickness-guide`,
  comparison: `${ROUTES.mrGradePlywood}#grade-comparison`,
  quality: `${ROUTES.mrGradePlywood}#quality`,
  faq: `${ROUTES.mrGradePlywood}#mr-faq`,
  enquiry: `${ROUTES.mrGradePlywood}#mr-enquiry`,
});

export const ABOUT_SECTIONS = Object.freeze({
  story: `${ROUTES.about}#story`,
  journey: `${ROUTES.about}#journey`,
  leadership: `${ROUTES.about}#leadership`,
  manufacturing: `${ROUTES.about}#about-manufacturing`,
  quality: `${ROUTES.about}#about-quality`,
  visit: `${ROUTES.about}#visit`,
  faq: `${ROUTES.about}#about-faq`,
  enquiry: `${ROUTES.about}#about-enquiry`,
});

export const CONTACT_SECTIONS = Object.freeze({
  form: `${ROUTES.contact}#contact-form`,
  enquiryTypes: `${ROUTES.contact}#enquiry-types`,
  direct: `${ROUTES.contact}#direct-contact`,
  location: `${ROUTES.contact}#location`,
  process: `${ROUTES.contact}#next-step`,
  faq: `${ROUTES.contact}#contact-faq`,
});

export const DEALER_SECTIONS = Object.freeze({
  routes: `${ROUTES.dealers}#choose-route`,
  partnership: `${ROUTES.dealers}#partnership`,
  portfolio: `${ROUTES.dealers}#partner-products`,
  comparison: `${ROUTES.dealers}#partner-types`,
  process: `${ROUTES.dealers}#application-process`,
  locator: `${ROUTES.dealers}#dealer-locator`,
  application: `${ROUTES.dealers}#partner-application`,
  faq: `${ROUTES.dealers}#dealer-faq`,
});

export function comingSoonUrl(feature) {
  return `${ROUTES.comingSoon}?feature=${encodeURIComponent(feature)}`;
}

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || ROUTES.home;
}
