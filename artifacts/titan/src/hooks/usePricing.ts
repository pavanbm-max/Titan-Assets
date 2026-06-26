import { createElement, useReducer, createContext, useContext, ReactNode } from 'react';
import { Currency, BillingPeriod } from '../data/pricing';

interface PricingState {
  currency: Currency;
  billingPeriod: BillingPeriod;
}

type PricingAction = 
  | { type: 'SET_CURRENCY'; payload: Currency }
  | { type: 'SET_BILLING_PERIOD'; payload: BillingPeriod };

const initialState: PricingState = {
  currency: 'USD',
  billingPeriod: 'annual',
};

function pricingReducer(state: PricingState, action: PricingAction): PricingState {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_BILLING_PERIOD':
      return { ...state, billingPeriod: action.payload };
    default:
      return state;
  }
}

interface PricingContextType {
  state: PricingState;
  dispatch: React.Dispatch<PricingAction>;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(pricingReducer, initialState);
  return createElement(PricingContext.Provider, { value: { state, dispatch } }, children);
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
}
