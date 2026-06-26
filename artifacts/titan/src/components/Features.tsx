import { useState } from 'react';
import { features } from '../data/features';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Database, Network, Zap, ShieldCheck, BellRing, Blocks, ChevronDown } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database, Network, Zap, ShieldCheck, BellRing, Blocks
};

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section id="features" className="py-24 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Precision capability. <br className="hidden sm:block"/>Zero compromise.</h2>
          <p className="text-lg text-text-secondary max-w-2xl">Everything you need to automate your data pipelines without sacrificing control or performance.</p>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-3 gap-4 auto-rows-[240px]">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.iconName] || Database;
              const isActive = activeIndex === idx;
              
              // Custom spanning for bento layout
              let spanClass = "col-span-1";
              if (idx === 0) spanClass = "col-span-2 row-span-1";
              if (idx === 2) spanClass = "col-span-1 row-span-2";
              if (idx === 3) spanClass = "col-span-2 row-span-1";
              
              return (
                <div 
                  key={feature.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`
                    ${spanClass} relative overflow-hidden rounded-xl border p-6 transition-all duration-300
                    flex flex-col justify-between group cursor-default
                    ${isActive ? 'border-brand-primary/50 bg-bg-elevated shadow-[0_8px_32px_rgba(99,102,241,0.15)] -translate-y-1' : 'border-border-default bg-bg-surface hover:border-border-strong hover:bg-bg-elevated/50 hover:-translate-y-1'}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-primary/20 text-brand-primary' : 'bg-bg-overlay text-text-secondary'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                    <p className={`text-sm text-text-secondary transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.iconName] || Database;
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={feature.id}
                  className={`border rounded-lg overflow-hidden transition-colors ${isActive ? 'border-brand-primary/50 bg-bg-elevated' : 'border-border-default bg-bg-surface'}`}
                >
                  <button 
                    onClick={() => setActiveIndex(isActive ? -1 : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between focus-ring text-left"
                    aria-expanded={isActive}
                    aria-controls={`feature-content-${feature.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-md ${isActive ? 'bg-brand-primary/20 text-brand-primary' : 'bg-bg-overlay text-text-secondary'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-text-primary">{feature.title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-text-muted transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    id={`feature-content-${feature.id}`}
                    role="region"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isActive ? '200px' : '0' }}
                  >
                    <div className="p-5 pt-0 text-sm text-text-secondary">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
