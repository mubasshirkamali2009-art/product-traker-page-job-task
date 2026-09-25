"use client";

import type { Scenario } from "./data";

// ─── Icons ───────────────────────────────────────────────────────────────────

function WarningIcon() {
  return (
    <svg className="w-6 h-6 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01M10.29 3.86l-8.6 14.86A1.5 1.5 0 003 21h18a1.5 1.5 0 001.31-2.28l-8.6-14.86a1.5 1.5 0 00-2.62 0z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-6 h-6 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ─── Banner ──────────────────────────────────────────────────────────────────

const themeMap = {
  warning: {
    bg: "bg-amber-500/10 border-amber-500/30",
    icon: <WarningIcon />,
    headlineColor: "text-amber-300",
  },
  info: {
    bg: "bg-sky-500/10 border-sky-500/30",
    icon: <InfoIcon />,
    headlineColor: "text-sky-300",
  },
  empty: {
    bg: "bg-violet-500/10 border-violet-500/30",
    icon: <ClockIcon />,
    headlineColor: "text-violet-300",
  },
} as const;

export default function StatusBanner({
  status,
}: {
  status: Scenario["status"];
}) {
  const theme = themeMap[status.type];

  return (
    <div
      className={`rounded-2xl border p-4 flex gap-3 items-start ${theme.bg}`}
    >
      <div className="mt-0.5">{theme.icon}</div>
      <div>
        <p className={`text-sm font-bold ${theme.headlineColor}`}>
          {status.headline}
        </p>
        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
          {status.subtext}
        </p>
      </div>
    </div>
  );
}
