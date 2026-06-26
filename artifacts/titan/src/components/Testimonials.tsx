import { testimonials } from '../data/testimonials';

const AVATAR_GRADIENTS = [
  'linear-gradient(140deg, #4F46E5 0%, #7C3AED 100%)',
  'linear-gradient(140deg, #0284C7 0%, #4F46E5 100%)',
  'linear-gradient(140deg, #059669 0%, #0284C7 100%)',
];

const STATS = [
  { value: '500+',   label: 'enterprises',    accent: '#6366F1' },
  { value: '99.97%', label: 'uptime SLA',      accent: '#06B6D4' },
  { value: '2.4M',   label: 'records / sec',   accent: '#10B981' },
  { value: '< 50ms', label: 'p99 query time',  accent: '#F59E0B' },
];

export function Testimonials() {
  return (
    <section id="customers" className="py-24 relative" style={{ background: 'var(--color-bg-surface)' }}>

      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
            Teams that trust Neuron
          </h2>
          <p className="text-base text-text-secondary">
            Used by data engineering teams at some of the most demanding companies in the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl border border-border-default bg-bg-elevated flex flex-col justify-between hover:border-border-strong transition-colors duration-200"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 10 10" className="w-3 h-3 fill-amber-400/80">
                    <path d="M5 0l1.2 3.5H10L7 5.7 8.1 9.5 5 7.3l-3.1 2.2L3 5.7.1 3.5H3.8z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-text-primary leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: AVATAR_GRADIENTS[i] }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary leading-tight">{t.author}</div>
                  <div className="text-xs text-text-secondary">{t.role} &middot; {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="rounded-2xl border border-border-default bg-bg-elevated/60 overflow-hidden"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            {STATS.map(({ value, label, accent }) => (
              <div key={label} className="flex flex-col items-center py-8 px-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight mb-1.5" style={{ color: accent }}>
                  {value}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
