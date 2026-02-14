"use client";

import { useState } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { PhotoSection } from "@/components/PhotoSection";
import { SuccessView } from "@/components/SuccessView";
import { YesNoButtons } from "@/components/YesNoButtons";

type HomeClientProps = {
  hasPhoto: boolean;
  hasFamily: boolean;
};

export function HomeClient({ hasPhoto, hasFamily }: HomeClientProps) {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 pb-10 pt-8 sm:px-6">
      <FloatingHearts active={!accepted} />

      <section className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <p className="inline-flex animate-float items-center rounded-full bg-white/70 px-4 py-1 text-xs font-bold tracking-wide text-brand-berry ring-1 ring-brand-rose/25">
          Love note mode: ON 💌
        </p>

        <h1 className="mt-4 font-display text-4xl leading-tight text-brand-berry sm:text-5xl">
          Will you be my Valentine?
        </h1>
        <p className="mt-3 max-w-md text-base font-semibold text-brand-wine/90 sm:text-lg">
          From me (and your favorite tiny sidekick) 💕
        </p>

        {!accepted ? (
          <>
            <PhotoSection hasPhoto={hasPhoto} hasFamily={hasFamily} />
            <YesNoButtons onYes={() => setAccepted(true)} />
          </>
        ) : (
          <SuccessView onReplay={() => setAccepted(false)} />
        )}
      </section>

      <footer className="mx-auto mt-10 w-full max-w-2xl text-center text-sm font-semibold text-brand-wine/70">
        Made with love by [Your Name]
      </footer>
    </main>
  );
}
