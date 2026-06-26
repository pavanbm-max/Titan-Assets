import { memo } from 'react';
import { usePricing, PricingProvider } from '../hooks/usePricing';
import { PRICING_PLANS, BASE_PRICES, CURRENCY_RATES, CURRENCY_SYMBOLS, REGIONAL_TARIFFS, BILLING_MULTIPLIERS, Currency, BillingPeriod } from '../data/pricing';
import { Check } from 'lucide-react';

const PricingControls = memo(() => {
  const { state, dispatch } = usePricing();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
      <div 
        role="group" 
        className="flex items-center p-1 bg-bg-surface border border-border-default rounded-lg"
      >
        <button
          aria-pressed={state.billingPeriod === 'monthly'}
          onClick={() => dispatch({ type: 'SET_BILLING_PERIOD', payload: 'monthly' })}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            state.billingPeriod === 'monthly' ? 'bg-bg-elevated text-text-primary shadow-sm border border-border-subtle' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Monthly
        </button>
        <button
          aria-pressed={state.billingPeriod === 'annual'}
          onClick={() => dispatch({ type: 'SET_BILLING_PERIOD', payload: 'annual' })}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
            state.billingPeriod === 'annual' ? 'bg-bg-elevated text-text-primary shadow-sm border border-border-subtle' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Annual
          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-brand-primary/20 text-brand-primary rounded-full">Save 20%</span>
        </button>
      </div>

      <div className="relative">
        <select 
          aria-label="Select currency"
          value={state.currency}
          onChange={(e) => dispatch({ type: 'SET_CURRENCY', payload: e.target.value as Currency })}
          className="appearance-none bg-bg-surface border border-border-default text-text-primary text-sm rounded-lg px-4 py-2 pr-8 focus-ring hover:border-border-strong transition-colors cursor-pointer"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-muted">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
});

const PriceDisplay = memo(({ planId }: { planId: string }) => {
  const { state } = usePricing();
  
  const basePrice = BASE_PRICES[planId];
  const rate = CURRENCY_RATES[state.currency];
  const tariff = REGIONAL_TARIFFS[state.currency];
  const billingMult = BILLING_MULTIPLIERS[state.billingPeriod];
  
  const monthlyPrice = Math.round(basePrice * rate * tariff);
  const finalPrice = Math.round(monthlyPrice * billingMult);
  const symbol = CURRENCY_SYMBOLS[state.currency];

  return (
    <div className="mb-6 flex flex-col h-20 justify-end">
      {state.billingPeriod === 'annual' && (
        <span className="text-sm text-text-muted line-through mb-1">{symbol}{monthlyPrice}</span>
      )}
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-text-primary transition-all duration-300">
          {symbol}{finalPrice}
        </span>
        <span className="text-sm text-text-secondary">/ month</span>
      </div>
    </div>
  );
});

const PricingCard = memo(({ plan }: { plan: typeof PRICING_PLANS[0] }) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl border bg-bg-surface ${
      plan.mostPopular ? 'border-brand-primary shadow-[0_0_40px_rgba(99,102,241,0.1)]' : 'border-border-default hover:border-border-strong'
    }`}>
      {plan.mostPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
        <p className="text-sm text-text-secondary h-10">{plan.description}</p>
      </div>

      <PriceDisplay planId={plan.id} />

      <button className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors focus-ring mb-8 ${
        plan.mostPopular 
          ? 'bg-brand-primary text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.3)]' 
          : 'bg-bg-elevated text-text-primary border border-border-strong hover:bg-bg-overlay'
      }`}>
        {plan.id === 'enterprise' ? 'Contact Sales' : 'Start free trial'}
      </button>

      <div className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-text-secondary">
            <Check className="w-5 h-5 text-brand-accent shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export const Pricing = memo(() => {
  return (
    <section id="pricing" className="py-24 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Transparent, scale-ready pricing</h2>
          <p className="text-lg text-text-secondary">No hidden fees. Predictable costs as your data volume grows.</p>
        </div>

        <PricingProvider>
          <div className="max-w-5xl mx-auto">
            <PricingControls />
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_PLANS.map(plan => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </PricingProvider>
      </div>
    </section>
  );
});
