import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="customers" className="py-24 bg-bg-base border-t border-border-subtle relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-text-muted tracking-wide uppercase">Trusted by teams at the world's fastest companies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 rounded-2xl bg-bg-surface border border-border-default flex flex-col justify-between hover:border-border-strong transition-colors">
              <p className="text-text-primary text-lg leading-relaxed mb-8">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border-strong flex items-center justify-center text-text-muted font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{t.author}</div>
                  <div className="text-sm text-text-secondary">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border-subtle">
          {[
            { label: "Enterprises", value: "500+" },
            { label: "Uptime SLA", value: "99.97%" },
            { label: "Records/sec", value: "2.4M" },
            { label: "p99 latency", value: "< 50ms" }
          ].map((stat, i) => (
            <div key={i} className="text-center flex flex-col gap-2">
              <div className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">{stat.value}</div>
              <div className="text-sm text-text-muted font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
