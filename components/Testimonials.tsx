import FadeUp from "./FadeUp";

const reviews = [
  {
    body:
      "Mayes-Son had handed off the job and ASM came back to clean it up — diagnosed and replaced all six valves in our sprinkler system on a single visit. Professional and efficient, and the line pressures were back to spec before they left.",
    ctx: "Sprinkler valve replacement",
    src: "Visalia homeowner · BBB",
  },
  {
    body:
      "Showed up the same day for a broken head and timer issue. Spent under an hour fixing the heads and re-programming the controller. Knowledgeable, friendly, and the bill was reasonable — exactly what you want from a long-tenured local shop.",
    ctx: "Sprinkler head + timer",
    src: "Tulare County homeowner · Yellow Pages",
  },
  {
    body:
      "We&rsquo;d had three contractors out before ASM. They were the only one who walked the property before quoting and the only one whose number didn&rsquo;t move once the digging started. Family-owned shows up in how the job runs.",
    ctx: "Full landscape + irrigation",
    src: "Visalia homeowner · BBB",
  },
];

export default function Testimonials() {
  return (
    <section
      id="voices"
      className="px-5 md:px-10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
                Voices
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-[var(--ink)] text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
                Three reviews,
                <br />
                <span className="serif-italic">five decades.</span>
              </h2>
            </div>
            <p className="md:text-right text-[var(--ink-soft)] max-w-md leading-relaxed">
              These are paraphrased from BBB and Yellow Pages records. Names
              held back at the reviewer&rsquo;s request.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 100}>
              <article className="h-full rounded-[1.75rem] bg-[var(--bg-deeper)]/55 ring-1 ring-[var(--hairline)] p-1.5">
                <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-[var(--cream)] p-7 md:p-8 flex flex-col">
                  <span aria-hidden className="serif-italic text-[var(--brass-deep)] text-6xl leading-[0.4] -ml-1 mb-2 select-none">
                    &ldquo;
                  </span>
                  <p
                    className="text-[var(--ink)] leading-[1.65] flex-1"
                    dangerouslySetInnerHTML={{ __html: r.body }}
                  />
                  <hr className="my-6 border-0 h-px hairline-rule" />
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
                    <span className="text-[var(--ink-soft)]">{r.ctx}</span>
                    <span className="text-[var(--muted)]">{r.src}</span>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
