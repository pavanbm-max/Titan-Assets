import { useState } from 'react';
import { features } from '../data/features';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Database, Network, Zap, ShieldCheck, BellRing, Blocks, ChevronDown } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database, Network, Zap, ShieldCheck, BellRing, Blocks,
};

/* ── Mini visuals — purposeful, data-forward ─────────────────────────────── */

function IngestionVisual() {
  return (
    <div className="relative h-14 overflow-hidden rounded-md bg-bg-base/80 border border-border-subtle flex items-center">
      <div className="flex gap-3 items-center animate-stream-flow" style={{ width: '200%' }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="shrink-0 flex items-center gap-2">
            <div className="w-5 h-5 rounded border border-brand-primary/20 bg-brand-primary/08 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-sm bg-brand-primary/50" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="h-1 rounded-full bg-text-muted/20" style={{ width: `${20 + (i % 4) * 8}px` }} />
              <div className="h-1 rounded-full bg-text-muted/12" style={{ width: `${14 + (i % 3) * 5}px` }} />
            </div>
            <div className="w-px h-3 bg-border-subtle" />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-6 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-bg-base), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-6 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--color-bg-base), transparent)' }} />
    </div>
  );
}

function PipelineVisual() {
  const nodes = ['src', 'parse', 'enrich', 'out'];
  return (
    <div className="h-14 flex items-center justify-between px-2 rounded-md bg-bg-base/80 border border-border-subtle overflow-hidden">
      {nodes.map((label, i) => (
        <div key={i} className="flex items-center gap-0 flex-1">
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-7 h-7 rounded-lg border border-brand-secondary/25 bg-brand-secondary/08 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm" style={{ background: `rgba(6,182,212,${0.35 + i * 0.15})` }} />
            </div>
            <span className="text-[9px] font-mono text-text-muted">{label}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex-1 flex items-center justify-center mx-1">
              <div className="h-px w-full bg-border-default relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 w-3 bg-brand-secondary/40 animate-stream-flow"
                  style={{ animationDelay: `${i * 800}ms`, animationDuration: '3.2s' }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function QueryVisual() {
  const bars = [52, 88, 42, 72, 55, 90, 68, 95, 48, 80];
  return (
    <div className="h-14 flex items-end gap-1 px-2 pt-2 rounded-md bg-bg-base/80 border border-border-subtle overflow-hidden">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[2px] animate-bar-grow"
          style={{
            height: `${h}%`,
            transformOrigin: 'bottom',
            animationDelay: `${i * 45}ms`,
            background: i === bars.length - 1
              ? 'rgba(245,158,11,0.7)'
              : `rgba(99,102,241,${0.2 + h / 300})`,
          }}
        />
      ))}
    </div>
  );
}

function ComplianceVisual() {
  const checks = ['GDPR Art. 17 — Right to erasure', 'SOC 2 Type II — Access controls', 'HIPAA § 164.312 — Encryption'];
  return (
    <div className="h-14 flex flex-col justify-center gap-1.5 px-3 rounded-md bg-bg-base/80 border border-border-subtle">
      {checks.map((label, i) => (
        <div key={i} className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
          <div className="w-3.5 h-3.5 rounded-sm border border-brand-accent/30 bg-brand-accent/08 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 8 8" className="w-2 h-2" fill="none">
              <path d="M1.5 4l1.8 1.8 3.2-3.2" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[9px] font-mono text-text-muted truncate">{label}</span>
        </div>
      ))}
    </div>
  );
}

function AlertsVisual() {
  const pts = [28, 32, 30, 38, 34, 40, 52, 78, 44, 36, 30, 32];
  const W = 130, H = 44;
  const max = Math.max(...pts), min = Math.min(...pts);
  const x = (i: number) => (i / (pts.length - 1)) * W;
  const y = (v: number) => H - ((v - min) / (max - min)) * H * 0.82 - 2;
  const d = pts.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const alertIdx = 7;

  return (
    <div className="h-14 flex items-center px-2 rounded-md bg-bg-base/80 border border-border-subtle overflow-hidden">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
        <path
          d={d}
          fill="none"
          stroke="rgba(99,102,241,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'draw-line 1s ease-out 0.4s forwards' }}
        />
        <circle cx={x(alertIdx)} cy={y(pts[alertIdx])} r="3.5" fill="rgba(239,68,68,0.85)">
          <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.85;0.45;0.85" dur="2s" repeatCount="indefinite" />
        </circle>
        <line
          x1={x(alertIdx)} y1={0}
          x2={x(alertIdx)} y2={H}
          stroke="rgba(239,68,68,0.25)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
}

function IntegrationsVisual() {
  const items = ['Snowflake', 'Salesforce', 'SAP', 'BigQuery', 'Databricks', 'dbt'];
  return (
    <div className="h-14 grid grid-cols-3 gap-1 p-1 rounded-md bg-bg-base/80 border border-border-subtle">
      {items.map((name, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded border border-border-subtle bg-bg-elevated/70 animate-fade-in-up"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span className="text-[9px] font-medium text-text-muted">{name}</span>
        </div>
      ))}
    </div>
  );
}

const VISUALS: Record<string, React.ReactNode> = {
  ingestion:      <IngestionVisual />,
  orchestration:  <PipelineVisual />,
  query:          <QueryVisual />,
  compliance:     <ComplianceVisual />,
  alerts:         <AlertsVisual />,
  integrations:   <IntegrationsVisual />,
};

/* ── Main component ──────────────────────────────────────────────────────── */

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section
      id="features"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-surface) 40%, var(--color-bg-base) 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header — editorial, not template */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-3">
            Precision capability.<br className="hidden sm:block" />
            <span className="text-text-secondary font-normal">Zero compromise.</span>
          </h2>
          <p className="text-base text-text-secondary max-w-lg">
            Everything you need to automate data pipelines without sacrificing control or performance.
          </p>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-3 gap-2.5 auto-rows-[248px]">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.iconName] || Database;
              const isActive = activeIndex === idx;

              let spanClass = 'col-span-1 row-span-1';
              if (idx === 0) spanClass = 'col-span-2 row-span-1';
              if (idx === 2) spanClass = 'col-span-1 row-span-2';
              if (idx === 3) spanClass = 'col-span-2 row-span-1';

              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`
                    ${spanClass} relative overflow-hidden rounded-xl border p-5 flex flex-col justify-between
                    cursor-default transition-all duration-250 ease-out group
                    ${isActive
                      ? 'border-brand-primary/30 bg-bg-elevated -translate-y-0.5'
                      : 'border-border-default bg-bg-surface hover:border-border-strong hover:bg-bg-elevated/60'
                    }
                  `}
                  style={{
                    boxShadow: isActive
                      ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.15)'
                      : '0 1px 4px rgba(0,0,0,0.25)',
                  }}
                >
                  {/* Very subtle gradient overlay on active */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none rounded-xl"
                      style={{ background: 'radial-gradient(ellipse at top left, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
                    />
                  )}

                  {/* Icon + status */}
                  <div className="relative flex items-start justify-between">
                    <div className={`p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? 'bg-brand-primary/12 text-brand-primary' : 'bg-bg-overlay text-text-secondary'
                    }`}>
                      <Icon className="w-4.5 h-4.5" style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
                      isActive ? 'text-brand-primary/70 border-brand-primary/20' : 'text-text-muted border-border-subtle'
                    }`}>
                      {isActive ? 'active' : 'ready'}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-65'}`}>
                    {VISUALS[feature.id]}
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-text-primary mb-1 leading-snug">{feature.title}</h3>
                    <p className={`text-xs text-text-secondary leading-relaxed transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-65 group-hover:opacity-85'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.iconName] || Database;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={feature.id}
                  className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                    isActive ? 'border-brand-primary/25 bg-bg-elevated' : 'border-border-default bg-bg-surface'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : idx)}
                    className="w-full px-4 py-3.5 flex items-center justify-between focus-ring text-left"
                    aria-expanded={isActive}
                    aria-controls={`feature-content-${feature.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg border ${
                        isActive ? 'bg-brand-primary/12 border-brand-primary/20 text-brand-primary' : 'bg-bg-overlay border-border-subtle text-text-secondary'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-text-primary">{feature.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    id={`feature-content-${feature.id}`}
                    role="region"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isActive ? '200px' : '0' }}
                  >
                    <div className="px-4 pb-4 flex flex-col gap-3">
                      {VISUALS[feature.id]}
                      <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
