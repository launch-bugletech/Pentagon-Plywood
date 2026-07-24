import { useEffect } from 'react';
import { ROUTES } from '../../app/routes.js';

function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | Pentagon Plywood';
  }, []);

  return (
    <section className="system-page system-page-not-found">
      <div className="system-page-card">
        <span className="system-code">Error 404</span>
        <div className="system-mark" aria-hidden="true">404</div>
        <h1>This page does not exist.</h1>
        <p>The address may be incorrect or the page may have moved. Use one of the links below to continue.</p>
        <div className="system-actions">
          <a className="btn btn-primary" href={ROUTES.home}>Return home</a>
          <a className="btn btn-outline" href={ROUTES.plywood}>Browse plywood</a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
