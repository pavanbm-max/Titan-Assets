export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "We cut pipeline provisioning time from three weeks to two days. The compliance automation alone saved our SOC 2 audit by six months.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "Acme Corp",
  },
  {
    id: "2",
    quote: "Sub-50ms on billion-row queries isn't marketing. We benchmarked it against three alternatives. Neuron won every time.",
    author: "Marcus Rodriguez",
    role: "Chief Data Officer",
    company: "Nexus Financial",
  },
  {
    id: "3",
    quote: "Finally a data platform that engineering teams actually want to use. Our internal adoption went from 40% to 94% in a quarter.",
    author: "Emily Park",
    role: "Director of Infrastructure",
    company: "HealthSync",
  },
];
