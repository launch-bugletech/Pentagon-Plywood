import React from 'react';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakButton,
  TweakSuggestionBar,
} from './TweaksPanel.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  palette: "cream",
  headingFont: "oswald",
  headingSize: 64,
  headingWeight: 500,
  headingSpacing: -1,
  cardTitleFont: "dm-serif",
  cardTitleSize: 24,
  cardTitleWeight: 400,
  cardTitleSpacing: 0,
  paragraphFont: "manrope",
  paragraphSize: 17,
  paragraphWeight: 400,
  paragraphSpacing: 0,
  smallLabelFont: "manrope",
  smallLabelSize: 14,
  smallLabelWeight: 600,
  smallLabelSpacing: 1.2,
  heroPanelOpacity: 94,
  heroPanelSide: "right",
  cardShadows: true,
  sectionLabels: true,
};/*EDITMODE-END*/;

const HEADING_FONTS = {
  'oswald': "'Oswald', Arial, sans-serif",
  'dm-serif': "'DM Serif Display', Georgia, serif",
  playfair: "'Playfair Display', Georgia, serif",
  lora: "'Lora', Georgia, serif",
  cormorant: "'Cormorant Garamond', Georgia, serif",
};

const TEXT_FONTS = {
  manrope: "'Manrope', Arial, sans-serif",
  inter: "'Inter', Arial, sans-serif",
  satoshi: "'Satoshi', 'Inter', Arial, sans-serif",
  avenir: "'Avenir Next', 'Avenir', 'Manrope', Arial, sans-serif",
};

const SITE_STYLE_PROPERTIES = [
  '--site-heading-font',
  '--site-heading-size',
  '--site-heading-weight',
  '--site-heading-spacing',
  '--site-card-title-font',
  '--site-card-title-size',
  '--site-card-title-weight',
  '--site-card-title-spacing',
  '--site-paragraph-font',
  '--site-paragraph-size',
  '--site-paragraph-weight',
  '--site-paragraph-spacing',
  '--site-small-label-font',
  '--site-small-label-size',
  '--site-small-label-weight',
  '--site-small-label-spacing',
  '--tweak-hero-panel-bg',
];

function readGlobalStyleDefaults() {
  const styles = window.getComputedStyle(document.documentElement);
  const value = (property) => styles.getPropertyValue(property).trim().toLowerCase();
  const number = (property, fallback) => {
    const parsed = Number.parseFloat(value(property));
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const headingFontValue = value('--site-heading-font');
  const textFontKey = (property, fallback) => {
    const font = value(property);
    if (font.includes('satoshi')) return 'satoshi';
    if (font.includes('avenir')) return 'avenir';
    if (font.includes('inter')) return 'inter';
    if (font.includes('manrope')) return 'manrope';
    return fallback;
  };
  const headingFontKey = (font, fallback) => {
    if (font.includes('playfair')) return 'playfair';
    if (font.includes('cormorant')) return 'cormorant';
    if (font.includes('lora')) return 'lora';
    if (font.includes('dm serif')) return 'dm-serif';
    if (font.includes('oswald')) return 'oswald';
    return fallback;
  };

  return {
    ...TWEAK_DEFAULTS,
    headingFont: headingFontKey(headingFontValue, TWEAK_DEFAULTS.headingFont),
    headingSize: number('--site-heading-size', TWEAK_DEFAULTS.headingSize),
    headingWeight: number('--site-heading-weight', TWEAK_DEFAULTS.headingWeight),
    headingSpacing: number('--site-heading-spacing', TWEAK_DEFAULTS.headingSpacing),
    cardTitleFont: headingFontKey(value('--site-card-title-font'), TWEAK_DEFAULTS.cardTitleFont),
    cardTitleSize: number('--site-card-title-size', TWEAK_DEFAULTS.cardTitleSize),
    cardTitleWeight: number('--site-card-title-weight', TWEAK_DEFAULTS.cardTitleWeight),
    cardTitleSpacing: number('--site-card-title-spacing', TWEAK_DEFAULTS.cardTitleSpacing),
    paragraphFont: textFontKey('--site-paragraph-font', TWEAK_DEFAULTS.paragraphFont),
    paragraphSize: number('--site-paragraph-size', TWEAK_DEFAULTS.paragraphSize),
    paragraphWeight: number('--site-paragraph-weight', TWEAK_DEFAULTS.paragraphWeight),
    paragraphSpacing: number('--site-paragraph-spacing', TWEAK_DEFAULTS.paragraphSpacing),
    smallLabelFont: textFontKey('--site-small-label-font', TWEAK_DEFAULTS.smallLabelFont),
    smallLabelSize: number('--site-small-label-size', TWEAK_DEFAULTS.smallLabelSize),
    smallLabelWeight: number('--site-small-label-weight', TWEAK_DEFAULTS.smallLabelWeight),
    smallLabelSpacing: number('--site-small-label-spacing', TWEAK_DEFAULTS.smallLabelSpacing),
  };
}

const HEADING_FONT_OPTIONS = [
  { label: 'Oswald', value: 'oswald' },
  { label: 'DM Serif Display', value: 'dm-serif' },
  { label: 'Playfair Display', value: 'playfair' },
  { label: 'Lora', value: 'lora' },
  { label: 'Cormorant Garamond', value: 'cormorant' },
];

const TEXT_FONT_OPTIONS = [
  { label: 'Manrope', value: 'manrope' },
  { label: 'Inter', value: 'inter' },
  { label: 'Satoshi', value: 'satoshi' },
  { label: 'Avenir Next', value: 'avenir' },
];

const PALETTES = [
  { id: 'cream', name: 'Pentagon Red', swatch: ['#FFFFFF', '#1D1D1D', '#E31E24'] },
  { id: 'charcoal', name: 'Ivory & Ember', swatch: ['#F2EFEA', '#1A1918', '#C48A2E'] },
  { id: 'sage', name: 'Ivory & Sage', swatch: ['#F4F1EA', '#4C6B4E', '#1F2A20'] },
];

function SiteCustomizer() {
  const initialDefaults = React.useMemo(() => readGlobalStyleDefaults(), []);
  const [tweaks, setTweak] = useTweaks(initialDefaults);
  const isStandalonePreview = window.parent === window;

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', tweaks.palette || 'cream');
    root.setAttribute('data-hero-panel-side', tweaks.heroPanelSide || 'right');
    root.setAttribute('data-card-shadows', tweaks.cardShadows ? 'on' : 'off');
    root.setAttribute('data-section-labels', tweaks.sectionLabels ? 'on' : 'off');
    root.style.setProperty('--site-heading-font', HEADING_FONTS[tweaks.headingFont] || HEADING_FONTS.oswald);
    root.style.setProperty('--site-heading-size', `${tweaks.headingSize}px`);
    root.style.setProperty('--site-heading-weight', String(tweaks.headingWeight));
    root.style.setProperty('--site-heading-spacing', `${tweaks.headingSpacing}px`);
    root.style.setProperty('--site-card-title-font', HEADING_FONTS[tweaks.cardTitleFont] || HEADING_FONTS['dm-serif']);
    root.style.setProperty('--site-card-title-size', `${tweaks.cardTitleSize}px`);
    root.style.setProperty('--site-card-title-weight', String(tweaks.cardTitleWeight));
    root.style.setProperty('--site-card-title-spacing', `${tweaks.cardTitleSpacing}px`);
    root.style.setProperty('--site-paragraph-font', TEXT_FONTS[tweaks.paragraphFont] || TEXT_FONTS.manrope);
    root.style.setProperty('--site-paragraph-size', `${tweaks.paragraphSize}px`);
    root.style.setProperty('--site-paragraph-weight', String(tweaks.paragraphWeight));
    root.style.setProperty('--site-paragraph-spacing', `${tweaks.paragraphSpacing}px`);
    root.style.setProperty('--site-small-label-font', TEXT_FONTS[tweaks.smallLabelFont] || TEXT_FONTS.manrope);
    root.style.setProperty('--site-small-label-size', `${tweaks.smallLabelSize}px`);
    root.style.setProperty('--site-small-label-weight', String(tweaks.smallLabelWeight));
    root.style.setProperty('--site-small-label-spacing', `${tweaks.smallLabelSpacing}px`);
    root.style.setProperty('--tweak-hero-panel-bg', `rgba(255,255,255,${tweaks.heroPanelOpacity / 100})`);
  }, [tweaks]);

  React.useEffect(() => () => {
    const root = document.documentElement;
    SITE_STYLE_PROPERTIES.forEach((property) => root.style.removeProperty(property));
    root.removeAttribute('data-palette');
    root.removeAttribute('data-hero-panel-side');
    root.removeAttribute('data-card-shadows');
    root.removeAttribute('data-section-labels');
  }, []);

  return (
    <TweaksPanel
      title="Site customizer"
      standalone={isStandalonePreview}
      placement="left"
    >
      <TweakSection label="Headings">
        <TweakSelect
          label="Font family"
          value={tweaks.headingFont}
          options={HEADING_FONT_OPTIONS}
          onChange={(value) => setTweak('headingFont', value)}
        />
        <TweakSlider label="Size" value={tweaks.headingSize} min={38} max={92} step={1} unit="px" onChange={(value) => setTweak('headingSize', value)} />
        <TweakSlider label="Weight" value={tweaks.headingWeight} min={300} max={700} step={100} onChange={(value) => setTweak('headingWeight', value)} />
        <TweakSlider label="Letter spacing" value={tweaks.headingSpacing} min={-3} max={5} step={0.1} unit="px" onChange={(value) => setTweak('headingSpacing', value)} />
      </TweakSection>

      <TweakSection label="Card titles">
        <TweakSelect
          label="Font family"
          value={tweaks.cardTitleFont}
          options={HEADING_FONT_OPTIONS}
          onChange={(value) => setTweak('cardTitleFont', value)}
        />
        <TweakSlider label="Size" value={tweaks.cardTitleSize} min={16} max={42} step={1} unit="px" onChange={(value) => setTweak('cardTitleSize', value)} />
        <TweakSlider label="Weight" value={tweaks.cardTitleWeight} min={300} max={700} step={100} onChange={(value) => setTweak('cardTitleWeight', value)} />
        <TweakSlider label="Letter spacing" value={tweaks.cardTitleSpacing} min={-2} max={5} step={0.1} unit="px" onChange={(value) => setTweak('cardTitleSpacing', value)} />
      </TweakSection>

      <TweakSection label="Paragraphs">
        <TweakSelect
          label="Font family"
          value={tweaks.paragraphFont}
          options={TEXT_FONT_OPTIONS}
          onChange={(value) => setTweak('paragraphFont', value)}
        />
        <TweakSlider label="Size" value={tweaks.paragraphSize} min={12} max={22} step={1} unit="px" onChange={(value) => setTweak('paragraphSize', value)} />
        <TweakSlider label="Weight" value={tweaks.paragraphWeight} min={300} max={700} step={100} onChange={(value) => setTweak('paragraphWeight', value)} />
        <TweakSlider label="Letter spacing" value={tweaks.paragraphSpacing} min={-1} max={4} step={0.1} unit="px" onChange={(value) => setTweak('paragraphSpacing', value)} />
      </TweakSection>

      <TweakSection label="Small labels">
        <TweakSelect
          label="Font family"
          value={tweaks.smallLabelFont}
          options={TEXT_FONT_OPTIONS}
          onChange={(value) => setTweak('smallLabelFont', value)}
        />
        <TweakSlider label="Size" value={tweaks.smallLabelSize} min={8} max={16} step={1} unit="px" onChange={(value) => setTweak('smallLabelSize', value)} />
        <TweakSlider label="Weight" value={tweaks.smallLabelWeight} min={300} max={700} step={100} onChange={(value) => setTweak('smallLabelWeight', value)} />
        <TweakSlider label="Letter spacing" value={tweaks.smallLabelSpacing} min={0} max={5} step={0.1} unit="px" onChange={(value) => setTweak('smallLabelSpacing', value)} />
      </TweakSection>

      <TweakSection label="Palette">
        <div style={{ display: 'grid', gap: 10 }}>
          {PALETTES.map((palette) => (
            <button
              type="button"
              key={palette.id}
              onClick={() => setTweak('palette', palette.id)}
              className="twk-field"
              style={{
                height: 'auto',
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: tweaks.palette === palette.id ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.55)',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'flex', gap: 3 }}>
                {palette.swatch.map((color) => (
                  <span key={color} style={{ width: 18, height: 18, borderRadius: 3, background: color }} />
                ))}
              </span>
              <span>{palette.name}</span>
            </button>
          ))}
        </div>
      </TweakSection>

      <TweakSection label="Display">
        <TweakToggle label="Card shadows" value={tweaks.cardShadows} onChange={(value) => setTweak('cardShadows', value)} />
        <TweakToggle label="Section labels" value={tweaks.sectionLabels} onChange={(value) => setTweak('sectionLabels', value)} />
      </TweakSection>

      <TweakSection label="Homepage hero">
        <TweakRadio
          label="Panel side"
          value={tweaks.heroPanelSide}
          options={[{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }]}
          onChange={(value) => setTweak('heroPanelSide', value)}
        />
        <TweakSlider label="Panel opacity" value={tweaks.heroPanelOpacity} min={70} max={100} step={1} unit="%" onChange={(value) => setTweak('heroPanelOpacity', value)} />
      </TweakSection>

      <TweakSection label="Actions">
        <TweakButton label="Reset to global CSS" secondary onClick={() => setTweak(readGlobalStyleDefaults())} />
      </TweakSection>

      <TweakSuggestionBar suggestions={[
        'Try Playfair Display for a more editorial look',
        'Use Cormorant Garamond for premium product titles',
        'Increase paragraph size for easier reading',
      ]} />
    </TweaksPanel>
  );
}

export default SiteCustomizer;
