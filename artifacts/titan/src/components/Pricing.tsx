import { memo } from 'react';
import { usePricing, PricingProvider } from '../hooks/usePricing';
import { PRICING_PLANS, BASE_PRICES, CURRENCY_RATES, CURRENCY_SYMBOLS, REGIONAL_TARIFFS, BILLING_MULTIPLIERS, Currency } from '../data/pricing';
import { Check } from 'lucide-react';

/* ── Controls ─────────────────────────────────────────────────────────────── */

const PricingControls = memo(() => {
  const { state, dispatch } = usePricing();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

      {/* Billing toggle */}
      <div role="group" className="flex items-center p-1 rounded-lg border border-border-default bg-bg-surface">
        {(['monthly', 'annual'] as const).map(period => (
          <button
            key={period}
            aria-pressed={state.billingPeriod === period}
            onClick={() => dispatch({ type: 'SET_BILLING_PERIOD', payload: period })}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-150 focus-ring flex items-center gap-2 ${
              state.billingPeriod === period
                ? 'bg-bg-elevated text-text-primary'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {period === 'monthly' ? 'Monthly' : 'Annual'}
            {period === 'annual' && (
              <span className="text-[10px] font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-1.5 py-0.5 rounded-full">
                −20%
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Currency */}
      <div className="relative">
        <select
          aria-label="Select currency"
          value={state.currency}
          onChange={e => dispatch({ type: 'SET_CURRENCY', payload: e.target.value as Currency })}
          className="appearance-none bg-bg-surface border border-border-default text-text-primary text-sm rounded-lg px-4 py-2 pr-8 focus-ring hover:border-border-strong transition-colors cursor-pointer"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-text-muted">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
});

/* ── Price display ────────────────────────────────────────────────────────── */

const PriceDisplay = memo(({ planId }: { planId: string }) => {
  const { state } = usePricing();

  if (planId === 'enterprise') {
    return (
      <div className="mb-6 h-20 flex flex-col justify-end">
        <div className="text-3xl font-bold text-text-primary tracking-tight">Custom</div>
        <div className="text-xs text-text-secondary mt-1.5">Volume-based pricing</div>
      </div>
    );
  }

  const base   = BASE_PRICES[planId];
  const rate   = CURRENCY_RATES[state.currency];
  const tariff = REGIONAL_TARIFFS[state.currency];
  const mult   = BILLING_MULTIPLIERS[state.billingPeriod];

  const monthly = Math.round(base * rate * tariff);
  const final   = Math.round(monthly * mult);
  const symbol  = CURRENCY_SYMBOLS[state.currency];

  return (
    <div className="mb-6 h-20 flex flex-col justify-end">
      {state.billingPeriod === 'annual' && (
        <span className="text-xs text-text-muted line-through mb-1">{symbol}{monthly}/mo</span>
      )}
      <div key={`${state.currency}-${state.billingPeriod}-${planId}`} className="flex items-baseline gap-1 animate-fade-in-up">
        <span className="text-4xl font-bold text-text-primary tracking-tight">{symbol}{final}</span>
        <span className="text-sm text-text-secondary">/ mo</span>
      </div>
      {state.billingPeriod === 'annual' && (
        <div className="text-xs text-brand-accent mt-1">{symbol}{Math.round(final * 12)} billed annually</div>
      )}
    </div>
  );
});

/* ── Card ─────────────────────────────────────────────────────────────────── */

const PricingCard = memo(({ plan }: { plan: typeof PRICING_PLANS[0] }) => {
  const featured = plan.mostPopular;

  return (
    <div
      className={`relative flex flex-col p-7 rounded-2xl transition-all duration-200 ${
        featured
          ? 'bg-bg-elevated border border-brand-primary/25'
          : 'bg-bg-surface border border-border-default hover:border-border-strong'
      }`}
      style={featured ? {
        boxShadow: '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.12)',
      } : {
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
      }}
    >
      {/* Subtle top line for featured */}
      {featured && (
        <div
          className="absolute top-0 left-6 right-6 h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
        />
      )}

      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white rounded-full bg-brand-primary">
          Most popular
        </div>
      )}

      <div className="mb-1">
        <h3 className="text-base font-semibold text-text-primary mb-1.5">{plan.name}</h3>
        <p className="text-xs text-text-secondary leading-relaxed" style={{ minHeight: '2.5rem' }}>{plan.description}</p>
      </div>

      <PriceDisplay planId={plan.id} />

      <button
        className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-150 focus-ring mb-7 active:scale-[0.98] ${
          featured
            ? 'bg-brand-primary text-white hover:bg-indigo-500'
            : 'bg-bg-overlay text-text-primary border border-border-strong hover:bg-bg-elevated hover:border-border-strong'
        }`}
        style={featured ? { boxShadow: '0 1px 8px rgba(99,102,241,0.3)' } : undefined}
      >
        {plan.id === 'enterprise' ? 'Contact sales' : 'Start free trial'}
      </button>

      <div className="border-t border-border-subtle pt-5 flex flex-col gap-2.5">
        <div className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1">Includes</div>
        {plan.features.map((feat, i) => (
          <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${featured ? 'text-brand-primary' : 'text-brand-accent'}`} />
            <span className="leading-relaxed">{feat}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

/* ── Section ─────────────────────────────────────────────────────────────── */

export const Pricing = memo(() => {
  return (
    <section id="pricing" className="py-24 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
            Transparent, scale-ready pricing
          </h2>
          <p className="text-base text-text-secondary">No hidden fees. Predictable costs as your data volume grows.</p>
        </div>

        <PricingProvider>
          <PricingControls />
          <div className="grid md:grid-cols-3 gap-4 items-start">
            {PRICING_PLANS.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="text-xs text-text-muted mt-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </PricingProvider>
      </div>
    </section>
  );
});
