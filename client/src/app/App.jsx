import HomePage from '../pages/home/HomePage.jsx';
import PlywoodPage from '../pages/plywood/PlywoodPage.jsx';
import ComingSoonPage from '../pages/system/ComingSoonPage.jsx';
import NotFoundPage from '../pages/system/NotFoundPage.jsx';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import SiteCustomizer from '../components/dev/SiteCustomizer.jsx';
import { normalizePath, ROUTES } from './routes.js';

const TWEAKS_ENABLED = import.meta.env.DEV
  && import.meta.env.VITE_ENABLE_TWEAKS === 'true';

const routes = {
  [ROUTES.home]: { Page: HomePage, activePage: 'home' },
  [ROUTES.plywood]: { Page: PlywoodPage, activePage: 'plywood' },
  [ROUTES.comingSoon]: { Page: ComingSoonPage, activePage: null },
};

function App() {
  const path = normalizePath(window.location.pathname);
  const route = routes[path];
  const Page = route?.Page || NotFoundPage;

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
