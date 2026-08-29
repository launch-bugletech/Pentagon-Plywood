import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const shell = "mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10";

export function ApplicationHero({ page }) {
  return (
    <section className="application-detail-hero">
      <div className={`${shell} application-detail-hero-grid`}>
        <div className="application-detail-hero-copy">
          <nav aria-label="Breadcrumb" className="application-detail-breadcrumb">
            <a href="/">Home</a><ChevronRight />
            <a href="/applications">Applications</a><ChevronRight />
            <span>{page.title}</span>
          </nav>
          <span className="application-detail-eyebrow">{page.eyebrow}</span>
          <h1>{page.heroTitle}</h1>
          {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="application-detail-actions">
            <a className="application-detail-button is-primary" href={page.primaryCta.href}>
              {page.primaryCta.label}<ArrowRight />
            </a>
            <a className="application-detail-button is-secondary" href={page.secondaryCta.href}>
              {page.secondaryCta.label}
            </a>
          </div>
        </div>
        <figure className="application-detail-hero-media">
          <img src={page.heroImage.url} alt={page.heroImage.alt} />
          <figcaption>
            <span>{page.heroImage.label}</span>
            <a href={page.heroImage.source} target="_blank" rel="noreferrer">Replaceable web image ↗</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function QuickGuide({ guide }) {
  return (
    <section className="application-detail-quick">
      <div className={`${shell} application-detail-quick-grid`}>
        <div>
          <span className="application-detail-eyebrow">Quick application guide</span>
          <h2>{guide.title}</h2>
          <p>{guide.copy}</p>
        </div>
        <div className="application-detail-checks">
          {guide.items.map((item) => <span key={item}><Check />{item}</span>)}
        </div>
        <div className="application-detail-material-strip">
          <Layers3 />
          <div><small>Materials to compare</small><strong>{guide.materials.join(" · ")}</strong></div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ section }) {
  return (
    <header className="application-detail-heading">
      <span>{section.eyebrow}</span>
      <h2>{section.title}</h2>
      {section.copy && <p>{section.copy}</p>}
    </header>
  );
}

export function CardsSection({ section, index }) {
  return (
    <section id={section.id} className={`application-detail-section ${index % 2 ? "is-tinted" : ""}`}>
      <div className={shell}>
        <SectionHeading section={section} />
        <div className="application-detail-card-grid">
          {section.items.map((item, itemIndex) => (
            <article key={item.title}>
              <span className="application-detail-card-number">{String(itemIndex + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              {item.points && <ul>{item.points.map((point) => <li key={point}><Check />{point}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureSection({ section, index }) {
  return (
    <section id={section.id} className={`application-detail-section ${index % 2 ? "is-tinted" : ""}`}>
      <div className={`${shell} application-detail-feature ${section.reverse ? "is-reverse" : ""}`}>
        <figure>
          <img src={section.image.url} alt={section.image.alt} />
          <figcaption><a href={section.image.source} target="_blank" rel="noreferrer">Web image placeholder ↗</a></figcaption>
        </figure>
        <div>
          <SectionHeading section={section} />
          <ul className="application-detail-feature-list">
            {section.points.map((point) => <li key={point}><ShieldCheck />{point}</li>)}
          </ul>
          {section.callout && <div className="application-detail-callout">{section.callout}</div>}
        </div>
      </div>
    </section>
  );
}

export function MatrixSection({ section, index }) {
  return (
    <section id={section.id} className={`application-detail-section ${index % 2 ? "is-tinted" : ""}`}>
      <div className={shell}>
        <SectionHeading section={section} />
        <div className="application-detail-table-wrap">
          <table>
            <thead><tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
            <tbody>{section.rows.map((row) => <tr key={row[0]}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        {section.note && <p className="application-detail-note">{section.note}</p>}
      </div>
    </section>
  );
}

export function ProcessSection({ section, index }) {
  return (
    <section id={section.id} className={`application-detail-section application-detail-process ${index % 2 ? "is-tinted" : ""}`}>
      <div className={shell}>
        <SectionHeading section={section} />
        <div className="application-detail-steps">
          {section.steps.map((step, stepIndex) => (
            <article key={step.title}>
              <span>{String(stepIndex + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }) {
  return (
    <section className="application-detail-section application-detail-faq" id="application-faq">
      <div className={`${shell} application-detail-faq-grid`}>
        <div className="application-detail-faq-intro">
          <span className="application-detail-eyebrow">Application FAQs</span>
          <h2>Questions Before You Select the Material.</h2>
          <p>Use these answers as a starting point. Final suitability depends on the exact product specification and installation conditions.</p>
        </div>
        <div>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApplicationFinalCta({ cta }) {
  return (
    <section className="application-detail-final">
      <div className={`${shell} application-detail-final-card`}>
        <ClipboardCheck />
        <div><span>{cta.eyebrow}</span><h2>{cta.title}</h2><p>{cta.copy}</p></div>
        <a href={cta.href}>{cta.label}<ArrowRight /></a>
      </div>
    </section>
  );
}

const sectionComponents = {
  cards: CardsSection,
  feature: FeatureSection,
  matrix: MatrixSection,
  process: ProcessSection,
};

export function ApplicationSections({ sections }) {
  return sections.map((section, index) => {
    const Component = sectionComponents[section.type];
    if (!Component) return null;
    return <Component key={section.id || `${section.type}-${index}`} section={section} index={index} />;
  });
}
