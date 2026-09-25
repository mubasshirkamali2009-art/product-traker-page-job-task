"use client";

export default function EmptyState() {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/80 flex flex-col items-center text-center">
      {/* Animated illustration */}
      <div className="relative w-20 h-20 mb-5">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-[spin_12s_linear_infinite]" />
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-violet-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-violet-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-sm font-bold text-white">
        No tracking info available
      </h3>
      <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-[260px]">
        Your order has been placed but tracking details haven&apos;t been
        generated yet. Check back in 24–48 hours.
      </p>

      {/* Skeleton preview */}
      <div className="w-full mt-6 space-y-3">
        <div className="h-2.5 rounded-full bg-zinc-800 w-full animate-pulse" />
        <div className="h-2.5 rounded-full bg-zinc-800 w-3/4 animate-pulse" />
        <div className="h-2.5 rounded-full bg-zinc-800 w-1/2 animate-pulse" />
      </div>
    </div>
  );
}
