import { useEffect } from "react";
import { applicationPagesByPath } from "../data/index.js";
import {
  ApplicationFinalCta,
  ApplicationHero,
  ApplicationSections,
  FaqSection,
  QuickGuide,
} from "./ApplicationDetailSections.jsx";
import "./application-detail.css";

function ApplicationDetailPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = applicationPagesByPath[path];

  useEffect(() => {
    if (!page) return;
    document.title = `${page.title} Applications | Pentagon Plywood`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = page.metaDescription;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  if (!page) return null;

  return (
    <main className="application-detail-page">
      <ApplicationHero page={page} />
      <QuickGuide guide={page.quickGuide} />
      <ApplicationSections sections={page.sections} />
      <FaqSection faqs={page.faqs} />
      <ApplicationFinalCta cta={page.finalCta} />
    </main>
  );
}

export default ApplicationDetailPage;
