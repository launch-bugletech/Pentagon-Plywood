import { Component } from 'react';
import { ROUTES } from '../../app/routes.js';
import { toast } from '@/hooks/use-toast';

class AppErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unable to render the requested page.', error, errorInfo);

    window.setTimeout(() => {
      toast({
        variant: 'destructive',
        title: 'Page unavailable',
        description: 'We could not load this page. Please return home and try again.',
        duration: 20000,
      });
    }, 0);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="system-page system-page-not-found" id="main-content">
        <div className="system-page-card">
          <span className="system-code">Page unavailable</span>
          <div className="system-mark" aria-hidden="true">!</div>
          <h1>We could not open this page.</h1>
          <p>Something is missing or temporarily unavailable. You can safely return to the site and continue browsing.</p>
          <div className="system-actions">
            <a className="btn btn-primary" href={ROUTES.home}>Return home</a>
            <a className="btn btn-outline" href={ROUTES.products}>Browse products</a>
          </div>
        </div>
      </main>
    );
  }
}

export default AppErrorBoundary;
