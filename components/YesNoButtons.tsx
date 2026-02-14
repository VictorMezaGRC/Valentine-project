"use client";

import { useEffect, useRef, useState } from "react";

type YesNoButtonsProps = {
  onYes: () => void;
};

const NO_SIZE = { width: 110, height: 50 };
const PADDING = 12;
const DODGE_DISTANCE = 80;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function YesNoButtons({ onYes }: YesNoButtonsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const noRef = useRef<HTMLButtonElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [positionReady, setPositionReady] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const centerNo = () => {
      const rect = container.getBoundingClientRect();
      setNoPos({
        x: Math.max((rect.width - NO_SIZE.width) / 2, PADDING),
        y: 0
      });
      setPositionReady(true);
    };

    centerNo();
    window.addEventListener("resize", centerNo);
    return () => window.removeEventListener("resize", centerNo);
  }, []);

  const moveNoButton = () => {
    const container = containerRef.current;
    if (!container || keyboardFocused) return;

    const rect = container.getBoundingClientRect();
    const maxX = Math.max(rect.width - NO_SIZE.width - PADDING, PADDING);
    const maxY = Math.max(rect.height - NO_SIZE.height - PADDING, PADDING);

    let nextX = noPos.x;
    let nextY = noPos.y;
    let attempts = 0;

    while (attempts < 16) {
      const candidateX = clamp(Math.random() * maxX, PADDING, maxX);
      const candidateY = clamp(Math.random() * maxY, PADDING, maxY);
      const distance = Math.hypot(candidateX - noPos.x, candidateY - noPos.y);

      if (distance > DODGE_DISTANCE / 2) {
        nextX = candidateX;
        nextY = candidateY;
        break;
      }
      attempts += 1;
    }

    setNoPos({ x: nextX, y: nextY });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (keyboardFocused) return;
    const noButton = noRef.current;
    const container = containerRef.current;
    if (!noButton || !container || !positionReady) return;

    const containerRect = container.getBoundingClientRect();
    const noRect = noButton.getBoundingClientRect();

    const pointerX = event.clientX;
    const pointerY = event.clientY;

    const closestX = clamp(pointerX, noRect.left, noRect.right);
    const closestY = clamp(pointerY, noRect.top, noRect.bottom);
    const distance = Math.hypot(pointerX - closestX, pointerY - closestY);

    const isTouchLike = event.pointerType === "touch" || event.pointerType === "pen";
    const threshold = isTouchLike ? DODGE_DISTANCE + 30 : DODGE_DISTANCE;

    if (distance <= threshold && pointerX >= containerRect.left && pointerX <= containerRect.right) {
      moveNoButton();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-8 h-36 w-full max-w-sm"
      onPointerMove={handlePointerMove}
      aria-label="Valentine response buttons"
    >
      <button
        type="button"
        onClick={onYes}
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-brand-berry px-8 py-3 text-lg font-black text-white shadow-button transition hover:-translate-y-0.5 hover:bg-brand-wine active:translate-y-0"
      >
        Yes 💖
      </button>

      <button
        ref={noRef}
        type="button"
        aria-label="No button"
        onMouseEnter={moveNoButton}
        onPointerDown={moveNoButton}
        onTouchStart={moveNoButton}
        onFocus={() => setKeyboardFocused(true)}
        onBlur={() => setKeyboardFocused(false)}
        onClick={() => {
          if (!keyboardFocused) {
            moveNoButton();
          }
        }}
        className="absolute w-[110px] rounded-full bg-white px-5 py-3 text-base font-bold text-brand-berry shadow-button ring-1 ring-brand-berry/15 transition-all duration-200 animate-wiggle hover:bg-brand-blush"
        style={{
          transform: `translate(${noPos.x}px, ${noPos.y}px)`
        }}
      >
        No 🙈
      </button>
    </div>
  );
}
