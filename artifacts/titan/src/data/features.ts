export interface FeatureData {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const features: FeatureData[] = [
  {
    id: "ingestion",
    title: "Intelligent Ingestion",
    description: "Connects to 200+ data sources. Processes structured & unstructured data in real-time.",
    iconName: "Database",
  },
  {
    id: "orchestration",
    title: "AI Pipeline Orchestration",
    description: "Visual pipeline builder with 50+ pre-built transforms.",
    iconName: "Network",
  },
  {
    id: "query",
    title: "Zero-Latency Query Engine",
    description: "Sub-50ms query response on billion-row datasets.",
    iconName: "Zap",
  },
  {
    id: "compliance",
    title: "Automated Compliance",
    description: "GDPR, SOC 2, HIPAA compliance automation.",
    iconName: "ShieldCheck",
  },
  {
    id: "alerts",
    title: "Predictive Alerts",
    description: "ML-powered anomaly detection before issues occur.",
    iconName: "BellRing",
  },
  {
    id: "integrations",
    title: "Enterprise Integrations",
    description: "Native SDKs for Salesforce, SAP, Snowflake, and 200+ more.",
    iconName: "Blocks",
  }
];
