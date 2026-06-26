import { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-base/80 backdrop-blur-md border-b border-border-default shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse-dot" />
          <span className="text-xl font-bold tracking-tight text-text-primary">Neuron</span>
        </div>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Customers', 'Docs'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-ring rounded"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#signin" className="hidden sm:block text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-ring rounded">
            Sign in
          </a>
          <a 
            href="#freetrial"
            className="px-4 py-2 text-sm font-medium bg-brand-primary text-white rounded-md hover:bg-indigo-600 transition-colors focus-ring shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
