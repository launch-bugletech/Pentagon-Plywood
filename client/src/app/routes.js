export const ROUTES = Object.freeze({
  home: '/',
  plywood: '/plywood',
  comingSoon: '/coming-soon',
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

export function comingSoonUrl(feature) {
  return `${ROUTES.comingSoon}?feature=${encodeURIComponent(feature)}`;
}

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || ROUTES.home;
}
