"use client";

export default function LoadingState() {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      {/* Fake banner */}
      <div className="rounded-2xl bg-zinc-800/60 h-20 w-full" />

      {/* Fake timeline */}
      <div className="rounded-2xl bg-zinc-800/60 p-5 space-y-4">
        <div className="h-3 bg-zinc-700 rounded w-1/3" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-zinc-700 shrink-0" />
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-3 bg-zinc-700 rounded w-2/3" />
              <div className="h-2 bg-zinc-700/60 rounded w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Fake order summary */}
      <div className="rounded-2xl bg-zinc-800/60 p-5 flex gap-4">
        <div className="w-20 h-20 rounded-xl bg-zinc-700 shrink-0" />
        <div className="flex-1 space-y-2 pt-1">
          <div className="h-3 bg-zinc-700 rounded w-3/4" />
          <div className="h-2 bg-zinc-700/60 rounded w-1/2" />
          <div className="h-3 bg-zinc-700 rounded w-1/4 mt-2" />
        </div>
      </div>

      {/* Fake CTA */}
      <div className="h-12 rounded-xl bg-zinc-800/60 w-full" />
    </div>
  );
}
