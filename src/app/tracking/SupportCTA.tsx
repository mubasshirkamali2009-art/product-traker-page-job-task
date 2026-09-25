"use client";

import type { Scenario } from "./data";

// ─── Icon Renderers ──────────────────────────────────────────────────────────

function SupportIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0M12 2v4m-5 3a5 5 0 0010 0M9 21h6" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86A2 2 0 0020.68 16L13.82 4a2 2 0 00-3.64 0L3.32 16a2 2 0 001.75 3z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M20.49 9A9 9 0 005.64 5.64L4 7m16 10l-1.64 1.36A9 9 0 013.51 15" />
    </svg>
  );
}

const iconMap = {
  support: <SupportIcon />,
  report: <ReportIcon />,
  refresh: <RefreshIcon />,
};

// ─── Primary CTA style per scenario ─────────────────────────────────────────

const primaryStyles: Record<string, string> = {
  support:
    "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold shadow-lg shadow-amber-500/25",
  report:
    "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold shadow-lg shadow-rose-500/25",
  refresh:
    "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 text-white font-bold shadow-lg shadow-violet-500/25",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SupportCTA({ cta }: { cta: Scenario["cta"] }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Primary */}
      <button
        id="cta-primary"
        className={`w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm transition-all duration-200 active:scale-[0.97] cursor-pointer ${primaryStyles[cta.primary.icon]}`}
      >
        {iconMap[cta.primary.icon]}
        {cta.primary.label}
      </button>

      {/* Secondary */}
      {cta.secondary && (
        <button
          id="cta-secondary"
          className="w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-zinc-300 bg-zinc-800/70 border border-zinc-700/60 hover:bg-zinc-700/70 transition-all duration-200 active:scale-[0.97] cursor-pointer"
        >
          {iconMap[cta.secondary.icon]}
          {cta.secondary.label}
        </button>
      )}
    </div>
  );
}
