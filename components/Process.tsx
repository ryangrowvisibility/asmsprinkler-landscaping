import FadeUp from "./FadeUp";

const steps = [
  {
    n: "I",
    title: "Phone diagnostic",
    body:
      "Tell us what the system is doing — or not doing. Most repairs we&rsquo;ve already seen four times this month and we can sketch the problem from your description.",
    duration: "5–10 min",
  },
  {
    n: "II",
    title: "Same-day site visit",
    body:
      "If it&rsquo;s a repair and you call before 2 PM, we&rsquo;re usually on site that afternoon. The truck carries every common Hunter, Rain Bird, and Toro part for systems built since 1980.",
    duration: "Same day",
  },
  {
    n: "III",
    title: "Written-on-the-spot estimate",
    body:
      "If the work is bigger than a single-trip repair, you get a written estimate before any digging happens. Numbers don&rsquo;t move once they&rsquo;re on paper.",
    duration: "Free",
  },
  {
    n: "IV",
    title: "The work",
    body:
      "Trenching, valve work, repair, install. Everything done by ASM crew under the same license. No subcontracted irrigation hands.",
    duration: "Per scope",
  },
  {
    n: "V",
    title: "Pressure & coverage test",
    body:
      "Every zone runs at full pressure before we leave. Coverage gaps are walked with you, not handed to you in a paragraph.",
    duration: "On-site",
  },
  {
    n: "VI",
    title: "Follow-up window",
    body:
      "Anything that turns up in the first thirty days is on us — that&rsquo;s how the relationship has worked since 1971.",
    duration: "30 days",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="px-5 md:px-10 py-24 md:py-36 bg-[var(--ink)] text-[var(--cream)]"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass)]">
              How a job runs
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
              The same six steps,
              <br />
              <span className="serif-italic brass-shine">since the seventies.</span>
            </h2>
            <p className="mt-7 text-[var(--cream)]/65 max-w-xl leading-relaxed">
              Most contractors describe their process in marketing copy. This
              is just the actual sequence of phone-call to repaired-system,
              written down.
            </p>
          </div>
        </FadeUp>

        <ol className="mt-16 md:mt-20 grid md:grid-cols-3 gap-px bg-[var(--cream)]/[0.07]">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 60}>
              <li className="bg-[var(--ink)] p-7 md:p-9 h-full">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="serif-italic text-[var(--brass)] text-4xl leading-none">
                    {s.n}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--cream)]/55">
                    {s.duration}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-2xl md:text-3xl leading-[1.05]">
                  {s.title}
                </h3>
                <p
                  className="mt-4 text-[var(--cream)]/70 leading-[1.65]"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp>
          <div className="mt-14 md:mt-20 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <p className="text-[var(--cream)]/60 max-w-xl leading-relaxed">
              That&rsquo;s the entire visible process. The invisible part is
              what fifty years of Tulare County water tables tells you about
              where to dig.
            </p>
            <a
              href="tel:5597302284"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--cream)] hover:bg-[var(--brass)] text-[var(--ink)] pl-5 pr-1.5 py-2 transition-colors duration-500"
            >
              Start at step one
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)]/10 group-hover:translate-x-1 transition-transform duration-500">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
