import FadeUp from "./FadeUp";

const items = [
  { eyebrow: "Better Business Bureau", value: "On file since 1975" },
  { eyebrow: "BuildZoom Score", value: "93 / 100" },
  { eyebrow: "CSLB License", value: "Active · Bonded" },
  { eyebrow: "Service Window", value: "Mon–Sat · 7–5" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Credentials"
      className="px-5 md:px-10 pt-2 pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="rounded-[2rem] bg-[var(--bg-deeper)]/70 ring-1 ring-[var(--hairline)] p-1.5">
            <ul className="rounded-[calc(2rem-0.375rem)] bg-[var(--cream)] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--hairline)]">
              {items.map((it) => (
                <li
                  key={it.eyebrow}
                  className="px-5 md:px-7 py-6 md:py-7 flex flex-col gap-2"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {it.eyebrow}
                  </span>
                  <span className="serif-italic text-[var(--ink)] text-2xl md:text-3xl leading-none">
                    {it.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
