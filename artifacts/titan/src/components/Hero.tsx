import { Play, Database, Server, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-bg-base z-[-2]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] z-[-1] mask-image-radial-gradient"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full z-[-1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-strong bg-bg-surface/50 backdrop-blur-sm mb-8 text-xs font-medium text-brand-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
            Now in GA &middot; Trusted by 500+ enterprises
          </div>

          <h1 id="hero-heading" className="text-clamp-hero font-bold tracking-tight text-text-primary max-w-4xl leading-[1.1] mb-6">
            Automate your data. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Accelerate your decisions.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10">
            The precision AI data automation platform for enterprise teams. Ingest, process, and act on structured and unstructured data at scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#freetrial" className="flex items-center justify-center px-6 py-3 text-base font-semibold bg-brand-primary text-white rounded-md hover:bg-indigo-600 transition-colors focus-ring shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] w-full sm:w-auto">
              Start free trial &rarr;
            </a>
            <a href="#demo" className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium border border-border-strong bg-bg-surface/50 text-text-primary rounded-md hover:bg-bg-elevated transition-colors focus-ring w-full sm:w-auto">
              <Play className="w-4 h-4" /> Watch demo
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="relative rounded-lg border border-border-strong bg-[#0d0d12] shadow-2xl overflow-hidden aspect-video flex flex-col">
            
            {/* Window controls */}
            <div className="h-10 border-b border-border-subtle bg-bg-surface flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-4 px-3 py-1 bg-bg-elevated rounded text-xs text-text-muted font-mono">neuron-production-cluster</div>
            </div>

            {/* Dashboard content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-48 border-r border-border-subtle bg-bg-surface/50 p-4 flex flex-col gap-2">
                {[Database, Server, Zap].map((Icon, i) => (
                  <div key={i} className={`h-8 rounded flex items-center gap-3 px-2 ${i === 0 ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-muted hover:text-text-secondary hover:bg-bg-elevated'}`}>
                    <Icon className="w-4 h-4" />
                    <div className="h-2 rounded bg-current opacity-20 w-16"></div>
                  </div>
                ))}
              </div>
              
              {/* Main Area */}
              <div className="flex-1 p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent">
                <div className="flex gap-4 mb-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex-1 h-24 rounded border border-border-subtle bg-bg-elevated p-4 flex flex-col justify-between">
                      <div className="w-8 h-2 bg-text-muted/30 rounded"></div>
                      <div className="w-16 h-4 bg-brand-primary/80 rounded"></div>
                    </div>
                  ))}
                </div>
                
                <div className="h-48 border border-border-subtle rounded bg-bg-elevated p-4 flex items-end gap-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-brand-secondary/40 rounded-t" style={{ height: `${Math.max(20, Math.sin(i) * 50 + 50)}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metrics */}
          <div className="absolute top-12 -left-6 sm:-left-12 px-4 py-3 bg-bg-surface/90 backdrop-blur border border-brand-primary/30 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col gap-1 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <span className="text-xs text-text-secondary font-mono">Data Ingested</span>
            <span className="text-lg font-bold text-text-primary">+2.4M records/day</span>
          </div>

          <div className="absolute bottom-12 -right-6 sm:-right-12 px-4 py-3 bg-bg-surface/90 backdrop-blur border border-brand-accent/30 rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col gap-1 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <span className="text-xs text-text-secondary font-mono">System Status</span>
            <span className="text-lg font-bold text-brand-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              99.97% uptime
            </span>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-20 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-sm text-text-muted mb-6 uppercase tracking-wider font-semibold">Trusted by engineering teams at</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-60 grayscale">
            {/* Logos represented by stylized text for competition constraints */}
            <span className="text-xl font-bold tracking-tighter">STRIPE</span>
            <span className="text-xl font-bold tracking-tighter">VERCEL</span>
            <span className="text-xl font-bold tracking-tighter">LINEAR</span>
            <span className="text-xl font-bold tracking-tighter">NOTION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
