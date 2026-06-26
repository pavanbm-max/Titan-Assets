export type Currency = 'USD' | 'INR' | 'EUR';
export type BillingPeriod = 'monthly' | 'annual';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  mostPopular?: boolean;
}

export const BASE_PRICES: Record<string, number> = {
  starter: 49,
  professional: 149,
  enterprise: 499
};

export const CURRENCY_RATES: Record<Currency, number> = { USD: 1, INR: 83.5, EUR: 0.92 };
export const CURRENCY_SYMBOLS: Record<Currency, string> = { USD: '$', INR: '₹', EUR: '€' };
export const REGIONAL_TARIFFS: Record<Currency, number> = { USD: 1.0, INR: 0.85, EUR: 1.05 };
export const BILLING_MULTIPLIERS: Record<BillingPeriod, number> = { monthly: 1.0, annual: 0.8 };

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with automated data.',
    features: [
      'Up to 100k records/month',
      'Standard integrations',
      'Community support',
      '48-hour data retention'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Advanced features for growing data teams.',
    mostPopular: true,
    features: [
      'Up to 2M records/month',
      'Premium integrations',
      'Priority email support',
      '30-day data retention',
      'Advanced analytics'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for complex enterprise needs.',
    features: [
      'Unlimited records',
      'Custom integrations',
      '24/7 dedicated support',
      'Unlimited data retention',
      'Custom SLA',
      'On-premise deployment options'
    ]
  }
];
