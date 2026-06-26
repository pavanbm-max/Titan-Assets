export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-base border-t border-border-subtle">
      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/20 blur-[150px] rounded-[100%] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl font-bold text-text-primary tracking-tight mb-6">
          Start automating your data today
        </h2>
        <p className="text-xl text-text-secondary mb-10 max-w-2xl">
          Join hundreds of engineering teams building resilient data pipelines with zero infrastructure overhead.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#freetrial" className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-brand-primary text-white rounded-md hover:bg-indigo-600 transition-colors focus-ring shadow-[0_0_30px_rgba(99,102,241,0.4)]">
            Start free trial
          </a>
          <a href="#sales" className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-bg-surface border border-border-strong text-text-primary rounded-md hover:bg-bg-elevated transition-colors focus-ring">
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
