import { useEffect } from "react";
import HomePage from "@/pages/home/HomePage.jsx";
import HomePageOld from "@/pages/home/archive/HomePage.old.jsx";
import AboutPage from "@/pages/about/AboutPage.jsx";
import OurStoryPage from "@/pages/about/OurStoryPage.jsx";
import ManufacturingPage from "@/pages/about/ManufacturingPage.jsx";
import BrandsPage from "@/pages/about/BrandsPage.jsx";
import AboutV1Page from "@/pages/about/archive/AboutV1Page.jsx";
import ContactPage from "@/pages/contact/ContactPage.jsx";
import ContactOldPage from "@/pages/contact/archive/ContactPage.old.jsx";
import ContactV2Page from "@/pages/contact/archive/ContactV2Page.jsx";
import DealersPage from "@/pages/dealers/DealersPage.jsx";
import DealersV2Page from "@/pages/dealers/archive/DealersPage.old.jsx";
import ApplicationsPage from "@/pages/applications/ApplicationsPage.jsx";
import PlywoodPage from "@/pages/products/plywood/PlywoodPage.jsx";
import MRGradePage from "@/pages/products/plywood/mr-grade/MRGradePage.jsx";
import BWPGradePage from "@/pages/products/plywood/bwp-grade/BWPGradePage.jsx";
import MarineGradePage from "@/pages/products/plywood/marine-grade/MarineGradePage.jsx";
import FireRetardantPage from "@/pages/products/plywood/fire-retardant/FireRetardantPage.jsx";
import MRBlockboardPage from "@/pages/products/blockboard/mr-grade/MRBlockboardPage.jsx";
import BWPBlockboardPage from "@/pages/products/blockboard/bwp-grade/BWPBlockboardPage.jsx";
import FlushDoorsPage from "@/pages/products/flush-doors/FlushDoorsPage.jsx";
import MRFlushDoorPage from "@/pages/products/flush-doors/mr-grade/MRFlushDoorPage.jsx";
import BWPFlushDoorPage from "@/pages/products/flush-doors/bwp-grade/BWPFlushDoorPage.jsx";
import IndustrialChemicalsPage from "@/pages/products/industrial-chemicals/IndustrialChemicalsPage.jsx";
import FormaldehydePage from "@/pages/products/industrial-chemicals/formaldehyde/FormaldehydePage.jsx";
import ProductsPage from "@/pages/products/ProductsPage.jsx";
import SourcedProductsPage from "@/pages/products/SourcedProductsPage.jsx";
import ProductsPageV2 from "@/pages/products/archive/ProductPageV2.jsx";
import ComingSoonPage from "@/pages/system/ComingSoonPage.jsx";
import NotFoundPage from "@/pages/system/NotFoundPage.jsx";
import SiteHeader from "@/components/layout/SiteHeader.jsx";
import SiteFooter from "@/components/layout/SiteFooter.jsx";
import SiteCustomizer from "@/components/dev/SiteCustomizer.jsx";
import AppErrorBoundary from "@/components/system/AppErrorBoundary.jsx";
import { normalizePath, PRODUCT_ROUTES, ROUTES } from "./routes.js";
import { Toaster } from "@/components/ui/toaster.jsx";
import { useToast } from "@/hooks/use-toast";

const TWEAKS_ENABLED =
  import.meta.env.DEV && import.meta.env.VITE_ENABLE_TWEAKS === "true";
// const TWEAKS_ENABLED = 'false';

const unavailableRoutePaths = new Set();
const unavailableRouteMessages = new Map();

const makeRoute = (path, getPage, activePage) => {
  try {
    const Page = getPage();
    if (!Page) throw new Error("The page component is unavailable.");
    return { Page, activePage };
  } catch (error) {
    unavailableRoutePaths.add(path);
    const message = `Route "${path}" is unavailable. Falling back to the 404 page. ${error.name}: ${error.message}`;
    unavailableRouteMessages.set(path, message);
    console.error(message, error);
    return { Page: NotFoundPage, activePage: null };
  }
};

const routes = {
  [ROUTES.home]: makeRoute(ROUTES.home, () => HomePage, "home"),
  [ROUTES.homeV1]: makeRoute(ROUTES.homeV1, () => HomePageOld, "home"),
  [ROUTES.about]: makeRoute(ROUTES.about, () => AboutPage, "about"),
  [ROUTES.ourStory]: makeRoute(ROUTES.ourStory, () => OurStoryPage, "about"),
  [ROUTES.manufacturing]: makeRoute(
    ROUTES.manufacturing,
    () => ManufacturingPage,
    "about",
  ),
  [ROUTES.brands]: makeRoute(ROUTES.brands, () => BrandsPage, "about"),
  [ROUTES.aboutV1]: makeRoute(ROUTES.aboutV1, () => AboutV1Page, "about"),
  [ROUTES.contact]: makeRoute(ROUTES.contact, () => ContactPage, "contact"),
  [ROUTES.contactV1]: makeRoute(
    ROUTES.contactV1,
    () => ContactOldPage,
    "contact",
  ),
  [ROUTES.contactV2]: makeRoute(
    ROUTES.contactV2,
    () => ContactV2Page,
    "contact",
  ),
  [ROUTES.dealers]: makeRoute(ROUTES.dealers, () => DealersPage, "dealers"),
  [ROUTES.dealersV2]: makeRoute(ROUTES.dealersV2, () => DealersV2Page, "dealers"),
  [ROUTES.applications]: makeRoute(
    ROUTES.applications,
    () => ApplicationsPage,
    "applications",
  ),
  [ROUTES.products]: makeRoute(ROUTES.products, () => ProductsPage, "products"),
  [ROUTES.productsv2]: makeRoute(ROUTES.productsv2, () => ProductsPageV2, "products"),
  [ROUTES.manufacturedProducts]: makeRoute(
    ROUTES.manufacturedProducts,
    () => ProductsPage,
    "products",
  ),
  [ROUTES.tradedProducts]: makeRoute(
    ROUTES.tradedProducts,
    () => SourcedProductsPage,
    "products",
  ),
  [PRODUCT_ROUTES.decorativeMaterials]: makeRoute(
    PRODUCT_ROUTES.decorativeMaterials,
    () => SourcedProductsPage,
    "products",
  ),
  [PRODUCT_ROUTES.engineeredBoards]: makeRoute(
    PRODUCT_ROUTES.engineeredBoards,
    () => SourcedProductsPage,
    "products",
  ),
  [PRODUCT_ROUTES.laminatedProducts]: makeRoute(
    PRODUCT_ROUTES.laminatedProducts,
    () => SourcedProductsPage,
    "products",
  ),
  [ROUTES.plywoodOverview]: makeRoute(
    ROUTES.plywoodOverview,
    () => PlywoodPage,
    "products",
  ),
  [ROUTES.plywood]: makeRoute(ROUTES.plywood, () => PlywoodPage, "plywood"),
  [ROUTES.mrGradePlywood]: makeRoute(
    ROUTES.mrGradePlywood,
    () => MRGradePage,
    "plywood",
  ),
  [ROUTES.bwpGradePlywood]: makeRoute(
    ROUTES.bwpGradePlywood,
    () => BWPGradePage,
    "plywood",
  ),
  [PRODUCT_ROUTES.marineGradePlywood]: makeRoute(
    PRODUCT_ROUTES.marineGradePlywood,
    () => MarineGradePage,
    "plywood",
  ),
  [PRODUCT_ROUTES.fireRetardantPlywood]: makeRoute(
    PRODUCT_ROUTES.fireRetardantPlywood,
    () => FireRetardantPage,
    "plywood",
  ),
  [PRODUCT_ROUTES.mrGradeBlockboard]: makeRoute(
    PRODUCT_ROUTES.mrGradeBlockboard,
    () => MRBlockboardPage,
    "products",
  ),
  [PRODUCT_ROUTES.bwpGradeBlockboard]: makeRoute(
    PRODUCT_ROUTES.bwpGradeBlockboard,
    () => BWPBlockboardPage,
    "products",
  ),
  [PRODUCT_ROUTES.flushDoors]: makeRoute(
    PRODUCT_ROUTES.flushDoors,
    () => FlushDoorsPage,
    "products",
  ),
  [PRODUCT_ROUTES.mrGradeFlushDoor]: makeRoute(
    PRODUCT_ROUTES.mrGradeFlushDoor,
    () => MRFlushDoorPage,
    "products",
  ),
  [PRODUCT_ROUTES.bwpGradeFlushDoor]: makeRoute(
    PRODUCT_ROUTES.bwpGradeFlushDoor,
    () => BWPFlushDoorPage,
    "products",
  ),
  [PRODUCT_ROUTES.industrialChemicals]: makeRoute(
    PRODUCT_ROUTES.industrialChemicals,
    () => IndustrialChemicalsPage,
    "products",
  ),
  [PRODUCT_ROUTES.formaldehyde]: makeRoute(
    PRODUCT_ROUTES.formaldehyde,
    () => FormaldehydePage,
    "products",
  ),
  [ROUTES.comingSoon]: makeRoute(ROUTES.comingSoon, () => ComingSoonPage, null),
};

const productPlaceholderPaths = new Set(
  Object.values(PRODUCT_ROUTES).filter((path) => !routes[path]),
);

function App() {
  const { toast: showToast } = useToast();
  const path = normalizePath(window.location.pathname);
  const route =
    routes[path] ||
    (productPlaceholderPaths.has(path)
      ? { Page: ComingSoonPage, activePage: "products" }
      : undefined);
  const Page = route?.Page || NotFoundPage;
  const hasUnavailableRoute = unavailableRoutePaths.has(path);
  const unavailableRouteMessage = [...unavailableRouteMessages.values()].join(
    " ",
  );
  const hasRouteConfigurationIssue =
    import.meta.env.DEV && unavailableRoutePaths.size > 0;

  useEffect(() => {
    if (route && !hasUnavailableRoute && !hasRouteConfigurationIssue)
      return undefined;

    const timeoutId = window.setTimeout(() => {
      showToast({
        variant: "destructive",
        title: hasRouteConfigurationIssue
          ? "Route configuration issue"
          : "Page not found",
        description: hasRouteConfigurationIssue
          ? unavailableRouteMessage
          : "This page does not exist or has not been added yet.",
        duration: 20000,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [
    hasRouteConfigurationIssue,
    hasUnavailableRoute,
    path,
    route,
    showToast,
    unavailableRouteMessage,
  ]);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const selectors = [
      "#main-content section > .container",
      "#main-content .system-page-card",
      "#main-content article",
      "#main-content .range-card",
      "#main-content .find-card",
      "#main-content .why-item",
      "#main-content .resource-card",
      "#main-content .testimonial",
    ];
    const elements = [...document.querySelectorAll(selectors.join(","))];

    root.classList.add("motion-enabled");
    elements.forEach((element) => {
      element.classList.add("motion-reveal");

      const siblings = [...element.parentElement.children].filter((sibling) =>
        sibling.matches(
          "article, .range-card, .find-card, .why-item, .resource-card, .testimonial",
        ),
      );
      const siblingIndex = siblings.indexOf(element);
      if (siblingIndex >= 0) {
        element.classList.add("motion-card");
        element.style.setProperty(
          "--motion-delay",
          `${Math.min(siblingIndex, 4) * 55}ms`,
        );
      }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return () => root.classList.remove("motion-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enabled");
    };
  }, [path]);

  return (
    <>
      <Toaster />
      <AppErrorBoundary key={path}>
        <SiteHeader activePage={route?.activePage} />
        <main id="main-content">
          <Page />
        </main>
        <SiteFooter />
        {TWEAKS_ENABLED && <SiteCustomizer />}
      </AppErrorBoundary>
    </>
  );
}

export default App;
