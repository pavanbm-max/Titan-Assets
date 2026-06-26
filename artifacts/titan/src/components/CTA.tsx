export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-base">

      {/* One restrained centered glow — not the same as hero */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-3xl sm:text-5xl font-bold text-text-primary tracking-tight mb-5 leading-tight">
          Start automating<br />your data today.
        </h2>

        <p className="text-base text-text-secondary mb-10 leading-relaxed">
          Join 500+ engineering teams building resilient data pipelines with Neuron. No infrastructure overhead. No lock-in.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#freetrial"
            className="flex items-center justify-center px-7 py-3 text-sm font-semibold text-white rounded-lg bg-brand-primary hover:bg-indigo-500 active:scale-[0.98] transition-all duration-150 focus-ring w-full sm:w-auto"
            style={{ boxShadow: '0 1px 12px rgba(99,102,241,0.3)' }}
          >
            Start free trial
          </a>
          <a
            href="#sales"
            className="flex items-center justify-center px-7 py-3 text-sm font-semibold border border-border-strong bg-transparent text-text-primary rounded-lg hover:bg-bg-surface active:scale-[0.98] transition-all duration-150 focus-ring w-full sm:w-auto"
          >
            Talk to sales
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {['14-day free trial', 'No credit card required', 'SOC 2 certified', 'GDPR compliant'].map(badge => (
            <div key={badge} className="flex items-center gap-1.5 text-xs text-text-muted">
              <svg viewBox="0 0 10 10" className="w-3 h-3 shrink-0" fill="none">
                <path d="M1.5 5l2 2 5-4" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
