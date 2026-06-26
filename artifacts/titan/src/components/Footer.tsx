import { ShieldCheck, Lock } from 'lucide-react';

const LINKS = [
  {
    heading: 'Product',
    items: ['Platform', 'Integrations', 'Security', 'Pricing', 'Changelog'],
  },
  {
    heading: 'Resources',
    items: ['Documentation', 'API Reference', 'Blog', 'Community', 'Status'],
  },
  {
    heading: 'Company',
    items: ['About', 'Careers', 'Press', 'Contact', 'Legal'],
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-bg-surface" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center"
                style={{ background: 'linear-gradient(140deg, #6366F1 0%, #4F46E5 100%)' }}
              >
                <div className="w-2 h-2 rounded-sm bg-white/75" />
              </div>
              <span className="text-base font-bold tracking-tight text-text-primary">Neuron</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-7">
              The precision AI data automation platform. Ingest, process, and act on data at enterprise scale.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border-default bg-bg-elevated text-xs text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-150">
                <ShieldCheck className="w-3 h-3 text-brand-secondary" />
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border-default bg-bg-elevated text-xs text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors duration-150">
                <Lock className="w-3 h-3 text-brand-accent" />
                GDPR Compliant
              </div>
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3.5">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="link-hover text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 focus-ring rounded"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Neuron Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {[
              { icon: <GithubIcon />, label: 'GitHub' },
              { icon: <TwitterXIcon />, label: 'X (Twitter)' },
              { icon: <LinkedInIcon />, label: 'LinkedIn' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-border-default text-text-muted flex items-center justify-center hover:text-text-primary hover:border-border-strong hover:bg-bg-elevated transition-all duration-150 focus-ring"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
