"use client";

import { useState, useTransition } from "react";
import { scenarios, type ScenarioStatus } from "./data";
import StatusBanner from "./StatusBanner";
import Timeline from "./Timeline";
import OrderSummary from "./OrderSummary";
import SupportCTA from "./SupportCTA";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

// ─── State Switcher Tab Bar ──────────────────────────────────────────────────

function StateSwitcher({
  active,
  onChange,
}: {
  active: ScenarioStatus;
  onChange: (id: ScenarioStatus) => void;
}) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-1 flex gap-1 border border-zinc-800/80">
      {scenarios.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            id={`tab-${s.id}`}
            onClick={() => onChange(s.id)}
            className={`flex-1 py-2 px-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white text-zinc-900 shadow-md shadow-white/10"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
            }`}
          >
            {s.tabLabel}
          </button>
        );
      })}
    </div>
  );
}

// ─── Error State ─────────────────────────────────────────────────────────────

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-8 flex flex-col items-center text-center">
      <svg
        className="w-10 h-10 text-rose-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-sm font-bold text-rose-300">
        Something went wrong
      </h3>
      <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-[260px]">
        We couldn&apos;t load your tracking information. Please try again.
      </p>
      <button
        onClick={onRetry}
        className="mt-5 px-6 py-2.5 rounded-xl bg-rose-500/20 text-rose-300 text-sm font-semibold hover:bg-rose-500/30 transition-colors cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div className="flex items-center gap-3 pb-1">
      <button
        id="btn-back"
        className="w-9 h-9 rounded-full bg-zinc-800/70 border border-zinc-700/60 flex items-center justify-center hover:bg-zinc-700/60 transition-colors cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-zinc-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex-1">
        <h1 className="text-base font-bold text-white">Order Tracking</h1>
        <p className="text-[11px] text-zinc-500">Track your delivery status</p>
      </div>
      <button
        id="btn-more"
        className="w-9 h-9 rounded-full bg-zinc-800/70 border border-zinc-700/60 flex items-center justify-center hover:bg-zinc-700/60 transition-colors cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-zinc-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function TrackingPage() {
  const [activeId, setActiveId] = useState<ScenarioStatus>("delayed");
  const [isPending, startTransition] = useTransition();
  const [showError, setShowError] = useState(false);

  const scenario = scenarios.find((s) => s.id === activeId)!;

  function handleSwitch(id: ScenarioStatus) {
    startTransition(() => {
      setShowError(false);
      setActiveId(id);
    });
  }

  const isNoTracking = scenario.id === "no_tracking";

  return (
    <div className="min-h-dvh bg-zinc-950 flex justify-center">
      <div className="w-full max-w-[430px] min-w-[320px] flex flex-col">
        {/* Sticky header area */}
        <div className="sticky top-0 z-30 bg-zinc-950/95 backdrop-blur-md px-5 pt-5 pb-3 space-y-3 border-b border-zinc-900/80">
          <Header />
          <StateSwitcher active={activeId} onChange={handleSwitch} />
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
          {isPending ? (
            <LoadingState />
          ) : showError ? (
            <ErrorState onRetry={() => setShowError(false)} />
          ) : (
            <>
              {/* Status Banner */}
              <StatusBanner status={scenario.status} />

              {/* Timeline or Empty State */}
              {isNoTracking ? (
                <EmptyState />
              ) : (
                <Timeline steps={scenario.timeline} />
              )}

              {/* Order Summary */}
              <OrderSummary order={scenario.order} />

              {/* CTA Buttons */}
              <SupportCTA cta={scenario.cta} />

              {/* Error demo toggle — small dev-mode link */}
              <button
                id="btn-simulate-error"
                onClick={() => setShowError(true)}
                className="mx-auto block text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors mt-2 underline underline-offset-2 cursor-pointer"
              >
                Simulate error state
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
