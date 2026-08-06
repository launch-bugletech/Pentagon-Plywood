import { useEffect } from 'react';
import HomePage from '../pages/home/HomePage.jsx';
import AboutPage from '../pages/about/AboutPage.jsx';
import OurStoryPage from '../pages/about/OurStoryPage.jsx';
import ManufacturingPage from '../pages/about/ManufacturingPage.jsx';
import BrandsPage from '../pages/about/BrandsPage.jsx';
import AboutV1Page from '../pages/about/AboutV1Page.jsx';
import ContactPage from '../pages/contact/ContactPage.jsx';
import ContactV2Page from '../pages/contact-v2/ContactV2Page.jsx';
import DealersPage from '../pages/dealers/DealersPage.jsx';
import ApplicationsPage from '../pages/applications/ApplicationsPage.jsx';
import PlywoodPage from '../pages/plywood/PlywoodPage.jsx';
import MRGradePage from '../pages/mr-grade/MRGradePage.jsx';
import ProductsPage from '../pages/products/ProductsPage.jsx';
import ComingSoonPage from '../pages/system/ComingSoonPage.jsx';
import NotFoundPage from '../pages/system/NotFoundPage.jsx';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import SiteCustomizer from '../components/dev/SiteCustomizer.jsx';
import { normalizePath, PRODUCT_ROUTES, ROUTES } from './routes.js';

// const TWEAKS_ENABLED = import.meta.env.DEV
//   && import.meta.env.VITE_ENABLE_TWEAKS === 'true';
const TWEAKS_ENABLED =   'true';

const routes = {
  [ROUTES.home]: { Page: HomePage, activePage: 'home' },
  [ROUTES.about]: { Page: AboutPage, activePage: 'about' },
  [ROUTES.ourStory]: { Page: OurStoryPage, activePage: 'about' },
  [ROUTES.manufacturing]: { Page: ManufacturingPage, activePage: 'about' },
  [ROUTES.brands]: { Page: BrandsPage, activePage: 'about' },
  [ROUTES.aboutV1]: { Page: AboutV1Page, activePage: 'about' },
  [ROUTES.contact]: { Page: ContactPage, activePage: 'contact' },
  [ROUTES.contactV2]: { Page: ContactV2Page, activePage: 'contact' },
  [ROUTES.dealers]: { Page: DealersPage, activePage: 'dealers' },
  [ROUTES.applications]: { Page: ApplicationsPage, activePage: 'applications' },
  [ROUTES.products]: { Page: ProductsPage, activePage: 'products' },
  [ROUTES.manufacturedProducts]: { Page: ProductsPage, activePage: 'products' },
  [ROUTES.tradedProducts]: { Page: ProductsPage, activePage: 'products' },
  [ROUTES.plywoodOverview]: { Page: PlywoodPage, activePage: 'products' },
  [ROUTES.plywood]: { Page: PlywoodPage, activePage: 'plywood' },
  [ROUTES.mrGradePlywood]: { Page: MRGradePage, activePage: 'plywood' },
  [ROUTES.comingSoon]: { Page: ComingSoonPage, activePage: null },
};

const productPlaceholderPaths = new Set(
  Object.values(PRODUCT_ROUTES).filter((path) => !routes[path]),
);

function App() {
  const path = normalizePath(window.location.pathname);
  const route = routes[path] || (productPlaceholderPaths.has(path)
    ? { Page: ComingSoonPage, activePage: 'products' }
    : undefined);
  const Page = route?.Page || NotFoundPage;

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors = [
      '#main-content section > .container',
      '#main-content .system-page-card',
      '#main-content article',
      '#main-content .range-card',
      '#main-content .find-card',
      '#main-content .why-item',
      '#main-content .resource-card',
      '#main-content .testimonial',
    ];
    const elements = [...document.querySelectorAll(selectors.join(','))];

    root.classList.add('motion-enabled');
    elements.forEach((element) => {
      element.classList.add('motion-reveal');

      const siblings = [...element.parentElement.children].filter((sibling) =>
        sibling.matches('article, .range-card, .find-card, .why-item, .resource-card, .testimonial'),
      );
      const siblingIndex = siblings.indexOf(element);
      if (siblingIndex >= 0) {
        element.classList.add('motion-card');
        element.style.setProperty('--motion-delay', `${Math.min(siblingIndex, 4) * 55}ms`);
      }
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return () => root.classList.remove('motion-enabled');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -7% 0px',
    });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove('motion-enabled');
    };
  }, [path]);

  return (
    <>
      <SiteHeader activePage={route?.activePage} />
      <main id="main-content"><Page /></main>
      <SiteFooter />
      {TWEAKS_ENABLED && <SiteCustomizer />}
    </>
  );
}

export default App;
