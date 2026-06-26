import { ShieldCheck, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-xl font-bold tracking-tight text-text-primary">Neuron</span>
            </div>
            <p className="text-sm text-text-secondary max-w-xs mb-6">
              The precision AI data automation platform. Ingest, process, and act on data at enterprise scale.
            </p>
            <div className="flex gap-4">
              {/* Trust Badges */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-elevated border border-border-default rounded-md text-xs text-text-muted font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-secondary" /> SOC 2 Type II
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-elevated border border-border-default rounded-md text-xs text-text-muted font-medium">
                <Lock className="w-3.5 h-3.5 text-brand-accent" /> GDPR Compliant
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Platform</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Security</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Blog</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Contact</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors focus-ring rounded">Legal</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Neuron Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-bg-elevated hover:bg-border-default transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-bg-elevated hover:bg-border-default transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-bg-elevated hover:bg-border-default transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
