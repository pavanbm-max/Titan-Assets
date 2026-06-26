import { Play, Database, Server, Zap, GitBranch, Bell, Activity, TrendingUp, TrendingDown } from 'lucide-react';

const BAR_HEIGHTS = [38, 55, 42, 70, 48, 82, 58, 76, 44, 91, 54, 68, 46, 85, 62, 74, 50, 88, 66, 72];

const SIDEBAR_ITEMS = [
  { icon: Database, label: 'Pipelines', active: true,  badge: null },
  { icon: GitBranch, label: 'Workflows', active: false, badge: null },
  { icon: Activity,  label: 'Monitor',   active: false, badge: 'warn' },
  { icon: Bell,      label: 'Alerts',    active: false, badge: 'error' },
  { icon: Server,    label: 'Sources',   active: false, badge: null },
];

const METRICS = [
  { label: 'Records today',   value: '2.41M', delta: '+12%',  up: true,  color: 'var(--color-brand-primary)' },
  { label: 'Avg latency',     value: '47 ms', delta: '−8ms',  up: false, color: 'var(--color-brand-secondary)' },
  { label: 'Pipeline health', value: '99.9%', delta: '+0.1%', up: true,  color: 'var(--color-brand-accent)' },
];

const PIPELINE = ['Ingest', 'Parse', 'Enrich', 'Deliver'];

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" aria-labelledby="hero-heading">

      {/* Single centered atmospheric glow — restrained */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[540px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.11) 0%, transparent 68%)' }}
      />

      {/* Dot grid, fades toward edges */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.14] pointer-events-none"
        style={{ maskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 30%, transparent 100%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Above-fold copy ── */}
        <div className="flex flex-col items-center text-center mb-14 animate-fade-in-up" style={{ animationDelay: '0ms' }}>

          {/* Subtle status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-default bg-bg-surface/70 backdrop-blur-sm mb-7 text-xs font-medium text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
            Now in GA &middot; Trusted by 500+ enterprises
          </div>

          {/* H1 — large but not overwhelming */}
          <h1
            id="hero-heading"
            className="font-bold tracking-tight text-text-primary max-w-3xl leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)' }}
          >
            Automate your data.<br className="hidden sm:block" />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)' }}
            >
              Accelerate your decisions.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-xl mb-9 leading-relaxed">
            The AI data automation platform for enterprise engineering teams. Ingest, transform, and act on data at any scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#freetrial"
              className="flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-brand-primary hover:bg-indigo-500 active:scale-[0.98] transition-all duration-150 focus-ring w-full sm:w-auto"
              style={{ boxShadow: '0 1px 12px rgba(99,102,241,0.35)' }}
            >
              Start free trial &rarr;
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium border border-border-strong bg-transparent text-text-primary rounded-lg hover:bg-bg-surface active:scale-[0.98] transition-all duration-150 focus-ring w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-border-strong">
                <Play className="w-2.5 h-2.5 fill-text-primary" />
              </span>
              Watch demo
            </a>
          </div>
        </div>

        {/* ── Dashboard mockup ── */}
        <div
          className="relative mx-auto max-w-4xl animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
        <div className="animate-float">
          {/* Soft shadow cast below */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(16px)' }}
          />

          {/* Window chrome */}
          <div
            className="rounded-xl overflow-hidden border border-border-default"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.10)' }}
          >
            {/* Title bar */}
            <div className="h-9 bg-bg-surface border-b border-border-subtle flex items-center gap-1.5 px-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-3 px-2.5 py-0.5 rounded bg-bg-elevated border border-border-subtle text-[10px] text-text-muted font-mono">
                neuron / prod / pipelines
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
                <span className="text-[10px] text-brand-accent font-mono tracking-wider">LIVE</span>
              </div>
            </div>

            {/* App body */}
            <div className="flex bg-[#09090f]" style={{ height: '380px' }}>

              {/* Sidebar */}
              <div className="w-40 shrink-0 border-r border-border-subtle bg-bg-surface/60 flex flex-col py-3 gap-0.5">
                <div className="px-3 pb-2 text-[9px] font-semibold text-text-muted uppercase tracking-widest">Workspace</div>
                {SIDEBAR_ITEMS.map(({ icon: Icon, label, active, badge }, i) => (
                  <div
                    key={i}
                    className={`mx-2 h-7 rounded flex items-center gap-2 px-2 text-[11px] font-medium transition-colors ${
                      active ? 'bg-brand-primary/12 text-brand-primary' : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="flex-1">{label}</span>
                    {badge === 'warn'  && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                    {badge === 'error' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 animate-pulse-dot" />}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div
                className="flex-1 overflow-hidden flex flex-col gap-4 p-4"
                style={{ background: 'linear-gradient(160deg, rgba(99,102,241,0.04) 0%, transparent 50%)' }}
              >
                {/* Metric row */}
                <div className="grid grid-cols-3 gap-3 shrink-0">
                  {METRICS.map((m, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border-subtle bg-bg-elevated/70 p-3"
                      style={{ animationDelay: `${300 + i * 80}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-text-muted font-mono">{m.label}</span>
                        {m.up
                          ? <TrendingUp  className="w-3 h-3 text-brand-accent" />
                          : <TrendingDown className="w-3 h-3 text-brand-secondary" />
                        }
                      </div>
                      <div className="text-base font-bold tracking-tight" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-[10px] text-text-muted mt-0.5">{m.delta} vs yesterday</div>
                    </div>
                  ))}
                </div>

                {/* Chart + pipeline */}
                <div className="flex gap-3 flex-1 min-h-0">

                  {/* Bar chart */}
                  <div className="flex-1 rounded-lg border border-border-subtle bg-bg-elevated/50 p-3 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-text-muted font-mono">Record throughput</span>
                      <span className="text-[10px] font-medium text-brand-secondary">Last 20 min</span>
                    </div>
                    <div className="flex items-end gap-0.5 flex-1">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-[2px] animate-bar-grow"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${280 + i * 25}ms`,
                            transformOrigin: 'bottom',
                            background: i >= BAR_HEIGHTS.length - 3
                              ? `rgba(6,182,212,${0.5 + (i - BAR_HEIGHTS.length + 3) * 0.15})`
                              : `rgba(99,102,241,${0.25 + h / 350})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pipeline */}
                  <div className="w-40 shrink-0 rounded-lg border border-border-subtle bg-bg-elevated/50 p-3 flex flex-col">
                    <span className="text-[10px] text-text-muted font-mono mb-3">Active pipeline</span>
                    <div className="flex flex-col gap-3 flex-1 justify-center">
                      {PIPELINE.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded border flex items-center justify-center shrink-0"
                            style={{ borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse-dot"
                              style={{ animationDelay: `${i * 500}ms` }} />
                          </div>
                          <span className="text-[10px] text-text-secondary font-medium">{step}</span>
                          {i < PIPELINE.length - 1 && (
                            <div className="ml-auto w-1 h-1 rounded-full bg-text-muted opacity-40" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-border-subtle flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
                      <span className="text-[10px] text-brand-accent font-medium">Running</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card — left */}
          <div
            className="absolute -top-3 -left-3 sm:-left-8 px-3.5 py-2.5 rounded-xl backdrop-blur-md border border-border-default bg-bg-surface/90 flex flex-col gap-1 animate-fade-in-up"
            style={{ animationDelay: '380ms', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
          >
            <span className="text-[10px] text-text-muted font-mono">Records / day</span>
            <span className="text-lg font-bold text-text-primary tracking-tight">+2.4M</span>
            <span className="text-[10px] text-brand-accent flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 12.4% this week
            </span>
          </div>

          {/* Floating card — right */}
          <div
            className="absolute -bottom-3 -right-3 sm:-right-8 px-3.5 py-2.5 rounded-xl backdrop-blur-md border border-border-default bg-bg-surface/90 flex flex-col gap-1 animate-fade-in-up"
            style={{ animationDelay: '480ms', boxShadow: '0 4px 24px rgba(0,0,0,0.4)', animationFillMode: 'forwards' }}
          >
            <span className="text-[10px] text-text-muted font-mono">System status</span>
            <span className="text-lg font-bold text-brand-accent tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse-dot" />
              99.97% uptime
            </span>
            <span className="text-[10px] text-text-muted">p99 &lt; 50ms</span>
          </div>
        </div>{/* close animate-float */}
        </div>{/* close animate-fade-in-up outer */}

        {/* ── Trust logos ── */}
        <div className="mt-20 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-xs text-text-muted uppercase tracking-widest font-medium mb-6">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map(name => (
              <span
                key={name}
                className="text-sm font-semibold transition-colors duration-200 hover:text-text-muted"
                style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}
              >
                {name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
