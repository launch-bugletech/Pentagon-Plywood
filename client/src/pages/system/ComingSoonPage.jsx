import { useEffect } from 'react';
import { HOME_SECTIONS, ROUTES } from '../../app/routes.js';

function ComingSoonPage() {
  const feature = new URLSearchParams(window.location.search).get('feature') || 'This page';

  useEffect(() => {
    document.title = `${feature} | Coming Soon`;
  }, [feature]);

  return (
    <section className="system-page">
      <div className="system-page-card">
        <span className="system-code">In development</span>
        <div className="system-mark" aria-hidden="true">+</div>
        <h1>{feature} is coming soon.</h1>
        <p>We are preparing this part of the Pentagon Plywood website. For information today, speak with our sales team or browse the current plywood range.</p>
        <div className="system-actions">
          <a className="btn btn-primary" href={ROUTES.plywood}>Browse plywood</a>
          <a className="btn btn-outline" href={HOME_SECTIONS.enquiry}>Contact our team</a>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonPage;
