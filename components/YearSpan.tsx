"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  { y: 1971, t: "Stacy Mattoon opens ASM Sprinkler in Visalia, with a pickup truck and a single shovel." },
  { y: 1975, t: "Listed with the Better Business Bureau — and still on file fifty years later." },
  { y: 1989, t: "Crew expands. Drip irrigation arrives in Tulare County and ASM is among the first to install it." },
  { y: 2007, t: "First multi-generation customers — homes ASM piped in the 80s come back for retrofits." },
  { y: 2024, t: "BuildZoom rates ASM 93/100, top quartile of California licensed contractors." },
  { y: 2026, t: "Still answering the phone the same way: same family, same valley, same dirt." },
];

export default function YearSpan() {
  const [count, setCount] = useState(1971);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = 1971;
            const end = 2026;
            const dur = 1800;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setCount(Math.round(start + (end - start) * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="heritage"
      ref={ref}
      className="px-5 md:px-10 py-24 md:py-36 bg-[var(--bg-deeper)]/55"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
              Heritage Index
            </span>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="serif-italic text-[var(--ink)] text-[clamp(4rem,12vw,9rem)] leading-[0.85] tracking-[-0.02em]">
                {count}
              </span>
              <span className="text-[var(--muted)] text-sm tracking-wider mb-3">
                {2026 - 1971} years and counting
              </span>
            </div>
            <p className="mt-6 text-[var(--ink-soft)] leading-relaxed max-w-md">
              ASM has watered more Central Valley summers than most landscape
              contractors have been alive. The license number changes hands
              less often than it does. The phone rings, somebody picks up, and
              a truck rolls. That&rsquo;s the entire shape of it.
            </p>
          </div>

          <ol className="md:col-span-7 relative pl-6 md:pl-10 border-l border-[var(--hairline)]">
            {milestones.map((m, i) => (
              <li
                key={m.y}
                className="relative pl-2 pb-10 last:pb-0"
                style={{ paddingTop: i === 0 ? 0 : "0.5rem" }}
              >
                <span
                  aria-hidden
                  className="absolute -left-[33px] md:-left-[41px] top-1 inline-flex h-3 w-3 items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full bg-[var(--oxblood)]/15" />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--oxblood)]" />
                </span>
                <div className="serif-italic text-[var(--oxblood)] text-3xl md:text-4xl leading-none">
                  {m.y}
                </div>
                <p className="mt-3 text-[var(--ink-soft)] max-w-lg leading-relaxed">
                  {m.t}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
