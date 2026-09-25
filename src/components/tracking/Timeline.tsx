"use client";

import type { TrackingStep } from "./data";

// ─── Icons (inline SVGs for zero-dependency) ─────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PulseRing() {
  return (
    <span className="absolute inset-0 rounded-full animate-ping bg-amber-400/40" />
  );
}

// ─── Single Step ─────────────────────────────────────────────────────────────

function TimelineStep({
  step,
  isLast,
}: {
  step: TrackingStep;
  isLast: boolean;
}) {
  const dotBase =
    "relative z-10 flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-all duration-300";

  const dotClass = step.completed
    ? step.active
      ? `${dotBase} bg-emerald-500 ring-4 ring-emerald-500/20`
      : `${dotBase} bg-emerald-500`
    : step.active
      ? `${dotBase} bg-amber-500 ring-4 ring-amber-500/20`
      : `${dotBase} bg-zinc-700 border-2 border-zinc-600`;

  return (
    <div className="flex gap-3">
      {/* Dot + Connector */}
      <div className="flex flex-col items-center">
        <div className={dotClass}>
          {step.completed ? <CheckIcon /> : step.active ? <PulseRing /> : null}
          {step.active && !step.completed && (
            <span className="w-2 h-2 rounded-full bg-white" />
          )}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 flex-1 min-h-8 transition-colors duration-300 ${
              step.completed ? "bg-emerald-500" : "bg-zinc-700"
            }`}
          />
        )}
      </div>

      {/* Text */}
      <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
        <p
          className={`text-sm font-semibold leading-tight ${
            step.completed || step.active ? "text-white" : "text-zinc-500"
          }`}
        >
          {step.label}
        </p>
        <p
          className={`text-xs mt-0.5 ${
            step.active && !step.completed ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          {step.description}
        </p>
        {step.timestamp && (
          <p className="text-[11px] text-zinc-500 mt-0.5">{step.timestamp}</p>
        )}
      </div>
    </div>
  );
}

// ─── Timeline Component ──────────────────────────────────────────────────────

export default function Timeline({ steps }: { steps: TrackingStep[] }) {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-5 border border-zinc-800/80">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        Shipment Progress
      </h3>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <TimelineStep key={step.label} step={step} isLast={i === steps.length - 1} />
        ))}
      </div>
    </div>
  );
}
