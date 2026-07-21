/* Pentagon Plywood — App root with Tweaks */

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  Header, Hero, Trust, Products, FindProduct, Brands, Why,
  Manufacturing, Quality, Applications, Projects, Dealer,
  Testimonials, Resources, Enquiry, Footer, WhatsappFloat,
} from './components.jsx';
import {
  useTweaks, TweaksPanel, TweakSection, TweakSuggestionBar,
} from './tweaks_panel.jsx';

const PALETTES = [
  { id: "cream", name: "Cream & Timber", swatch: ["#F5EFE4", "#6B4423", "#B8823A"] },
  { id: "charcoal", name: "Ivory & Ember", swatch: ["#F2EFEA", "#1A1918", "#C48A2E"] },
  { id: "sage", name: "Ivory & Sage", swatch: ["#F4F1EA", "#4C6B4E", "#1F2A20"] },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', tweaks.palette || 'cream');
  }, [tweaks.palette]);

  return (
    <>
      <Header/>
      <Hero/>
      <Trust/>
      <Products/>
      <FindProduct/>
      <Brands/>
      <Why/>
      <Manufacturing/>
      <Quality/>
      <Applications/>
      <Projects/>
      <Dealer/>
      <Testimonials/>
      <Resources/>
      <Enquiry/>
      <Footer/>
      <WhatsappFloat/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <div style={{display: 'grid', gap: 10}}>
            {PALETTES.map(p => (
              <button
                key={p.id}
                onClick={() => setTweak('palette', p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 10,
                  background: tweaks.palette === p.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: `1px solid ${tweaks.palette === p.id ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.12)'}`,
                  borderRadius: 4,
                  cursor: 'pointer',
                  color: 'inherit',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  fontSize: 13,
                }}
              >
                <div style={{display: 'flex', gap: 3}}>
                  {p.swatch.map((c, i) => (
                    <div key={i} style={{width: 20, height: 20, background: c, borderRadius: 2, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'}}/>
                  ))}
                </div>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </TweakSection>
        <TweakSuggestionBar suggestions={[
          "Make the hero image full-bleed edge to edge",
          "Try a darker charcoal for the dealer section",
          "Add a section comparing MR vs BWP vs BWR plywood",
          "Show 6 product cards instead of 4",
        ]}/>
      </TweaksPanel>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
