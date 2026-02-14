"use client";

import { useMemo } from "react";

type SuccessViewProps = {
  onReplay: () => void;
};

export function SuccessView({ onReplay }: SuccessViewProps) {
  const floating = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        delay: `${Math.random() * 2.2}s`,
        duration: `${2.8 + Math.random() * 1.8}s`
      })),
    []
  );

  return (
    <section className="relative mx-auto mt-8 w-full max-w-xl animate-pop overflow-hidden rounded-[2rem] border border-brand-rose/20 bg-white/85 p-6 text-center shadow-card backdrop-blur">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {floating.map((item) => (
          <span
            key={item.id}
            className="absolute bottom-2 text-xl animate-rise"
            style={{ left: item.left, animationDelay: item.delay, animationDuration: item.duration }}
          >
            {item.id % 3 === 0 ? "💖" : item.id % 3 === 1 ? "✨" : "💘"}
          </span>
        ))}
      </div>

      <p className="font-display text-3xl text-brand-berry">Yay, my Valentine! 💞</p>
      <p className="mx-auto mt-4 max-w-md whitespace-pre-line text-base font-semibold leading-relaxed text-brand-wine/90">
        {`We already went out for our Valentine's date two days ago 😘
But... you should still expect a romantic dinner this week.
And your little Valentine will be cheering us on 🍼💕
Be ready 💖`}
      </p>

      <button
        type="button"
        onClick={onReplay}
        className="mt-6 rounded-full bg-brand-berry px-7 py-3 text-base font-black text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-wine active:translate-y-0"
      >
        Replay
      </button>
    </section>
  );
}
