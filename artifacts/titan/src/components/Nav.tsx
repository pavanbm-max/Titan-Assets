import { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(9,9,15,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      } : {
        background: 'transparent',
        borderBottom: '1px solid transparent',
      }}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 px-3 py-1.5 bg-brand-primary text-white text-xs rounded focus-ring"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 focus-ring rounded" aria-label="Neuron home">
          <div className="w-5 h-5 rounded-md flex items-center justify-center relative"
            style={{ background: 'linear-gradient(140deg, #6366F1 0%, #4F46E5 100%)' }}>
            <div className="w-2 h-2 rounded-sm bg-white/75" />
            <div
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot"
              style={{ boxShadow: '0 0 6px rgba(16,185,129,0.6)' }}
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-text-primary">Neuron</span>
        </a>

        {/* Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {[
            { label: 'Features',   href: '#features' },
            { label: 'Pricing',    href: '#pricing' },
            { label: 'Customers',  href: '#customers' },
            { label: 'Docs',       href: '#docs' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-all duration-150 focus-ring"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden sm:block text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 focus-ring rounded px-2 py-1.5"
          >
            Sign in
          </a>
          <a
            href="#freetrial"
            className="px-4 py-1.5 text-sm font-semibold text-white rounded-lg bg-brand-primary hover:bg-indigo-500 active:scale-[0.97] transition-all duration-150 focus-ring"
            style={{ boxShadow: '0 1px 8px rgba(99,102,241,0.3)' }}
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
