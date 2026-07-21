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
  TweakSlider, TweakToggle, TweakRadio, TweakColor, TweakButton,
} from './tweaks_panel.jsx';

const TWEAKS_ENABLED = import.meta.env.DEV
  && import.meta.env.VITE_ENABLE_TWEAKS === 'true';

const PALETTES = [
  { id: "cream", name: "Pentagon Red", swatch: ["#FFFFFF", "#1D1D1D", "#E31E24"] },
  { id: "charcoal", name: "Ivory & Ember", swatch: ["#F2EFEA", "#1A1918", "#C48A2E"] },
  { id: "sage", name: "Ivory & Sage", swatch: ["#F4F1EA", "#4C6B4E", "#1F2A20"] },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "accentColor": "#E31E24",
  "sectionSpacing": 92,
  "cardRadius": 14,
  "bodyScale": 100,
  "heroPanelOpacity": 94,
  "heroPanelSide": "right",
  "cardShadows": true,
  "sectionLabels": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS, {
    storageKey: TWEAKS_ENABLED ? 'pentagon:dev-tweaks' : undefined,
  });

  // Apply developer customization through CSS variables and data attributes.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', tweaks.palette || 'cream');
    root.setAttribute('data-hero-panel-side', tweaks.heroPanelSide || 'right');
    root.setAttribute('data-card-shadows', tweaks.cardShadows ? 'on' : 'off');
    root.setAttribute('data-section-labels', tweaks.sectionLabels ? 'on' : 'off');
    root.style.setProperty('--accent', tweaks.accentColor);
    root.style.setProperty('--accent-deep', tweaks.accentColor);
    root.style.setProperty('--tweak-section-space', `${tweaks.sectionSpacing}px`);
    root.style.setProperty('--tweak-card-radius', `${tweaks.cardRadius}px`);
    root.style.setProperty('--tweak-body-scale', String(tweaks.bodyScale / 100));
    root.style.setProperty('--tweak-hero-panel-bg', `rgba(255,255,255,${tweaks.heroPanelOpacity / 100})`);
  }, [tweaks]);

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

      {TWEAKS_ENABLED && <TweaksPanel title="Pentagon customizer" standalone placement="left">
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
        <TweakSection label="Brand accent">
          <TweakColor
            label="Accent colour"
            value={tweaks.accentColor}
            options={["#E31E24", "#C9151B", "#B5121B", "#D64B2A", "#1D1D1D"]}
            onChange={(value) => setTweak('accentColor', value)}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakSlider label="Section spacing" value={tweaks.sectionSpacing} min={56} max={132} step={4} unit="px" onChange={(value) => setTweak('sectionSpacing', value)} />
          <TweakSlider label="Card radius" value={tweaks.cardRadius} min={0} max={32} step={2} unit="px" onChange={(value) => setTweak('cardRadius', value)} />
          <TweakSlider label="Body scale" value={tweaks.bodyScale} min={90} max={115} step={1} unit="%" onChange={(value) => setTweak('bodyScale', value)} />
          <TweakToggle label="Card shadows" value={tweaks.cardShadows} onChange={(value) => setTweak('cardShadows', value)} />
          <TweakToggle label="Section labels" value={tweaks.sectionLabels} onChange={(value) => setTweak('sectionLabels', value)} />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Panel side"
            value={tweaks.heroPanelSide}
            options={[{label: 'Left', value: 'left'}, {label: 'Right', value: 'right'}]}
            onChange={(value) => setTweak('heroPanelSide', value)}
          />
          <TweakSlider label="Panel opacity" value={tweaks.heroPanelOpacity} min={70} max={100} step={1} unit="%" onChange={(value) => setTweak('heroPanelOpacity', value)} />
        </TweakSection>
        <TweakSection label="Actions">
          <TweakButton label="Reset all customizations" secondary onClick={() => setTweak(TWEAK_DEFAULTS)} />
        </TweakSection>
        <TweakSuggestionBar suggestions={[
          "Make the hero image full-bleed edge to edge",
          "Try a darker charcoal for the dealer section",
          "Add a section comparing MR vs BWP vs BWR plywood",
          "Show 6 product cards instead of 4",
        ]}/>
      </TweaksPanel>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
