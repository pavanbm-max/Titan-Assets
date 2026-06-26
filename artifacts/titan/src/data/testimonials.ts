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
    quote: "Neuron has completely transformed how our data engineering team operates. We're processing 10x more data with half the infrastructure overhead.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Acme Corp"
  },
  {
    id: "2",
    quote: "The zero-latency query engine isn't just marketing speak. It actually delivers sub-50ms responses on our heaviest analytical queries.",
    author: "Michael Rodriguez",
    role: "Chief Data Officer",
    company: "Nexus Financial"
  },
  {
    id: "3",
    quote: "Automated compliance saved us months of engineering time during our SOC 2 audit. It's the kind of tool you deploy and it just works.",
    author: "Emily Taylor",
    role: "Director of Infrastructure",
    company: "HealthSync"
  }
];
