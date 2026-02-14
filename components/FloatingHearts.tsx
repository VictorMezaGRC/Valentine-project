"use client";

const hearts = [
  { left: "8%", delay: "0s", duration: "8s", size: "text-xl" },
  { left: "22%", delay: "1.6s", duration: "10s", size: "text-2xl" },
  { left: "37%", delay: "0.8s", duration: "9s", size: "text-lg" },
  { left: "58%", delay: "2.1s", duration: "11s", size: "text-2xl" },
  { left: "74%", delay: "1.1s", duration: "9.5s", size: "text-xl" },
  { left: "90%", delay: "2.9s", duration: "10.5s", size: "text-lg" }
];

export function FloatingHearts({ active = true }: { active?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {active &&
        hearts.map((heart, index) => (
          <span
            key={index}
            className={`absolute bottom-[-12vh] ${heart.left} ${heart.size} animate-drift opacity-70`}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
          >
            {index % 2 === 0 ? "💗" : "✨"}
          </span>
        ))}
    </div>
  );
}
