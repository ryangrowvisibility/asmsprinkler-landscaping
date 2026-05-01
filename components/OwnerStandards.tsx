import FadeUp from "./FadeUp";

export default function OwnerStandards() {
  return (
    <section
      id="standards"
      className="px-5 md:px-10 py-24 md:py-36 bg-[var(--bg-deeper)]/55"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-32">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
                The Standards
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-[var(--ink)] text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1] tracking-[-0.01em]">
                Stacy <span className="serif-italic">Mattoon&rsquo;s</span> shop.
              </h2>
            </FadeUp>
            <FadeUp delay={140}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--hairline)] bg-[var(--cream)] px-4 py-2">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--oxblood)]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                  Owner-operated since 1971
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={260}>
              <div className="mt-10 select-none" aria-hidden>
                <span className="block text-[var(--brass-deep)] text-[3.2rem] leading-none" style={{ fontFamily: "var(--font-script)" }}>
                  Stacy Mattoon
                </span>
                <span className="block mt-2 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  Owner &middot; Visalia, CA
                </span>
              </div>
            </FadeUp>
          </div>

          <div className="md:col-span-8">
            <FadeUp>
              <p className="dropcap text-[var(--ink)] text-[1.05rem] md:text-[1.15rem] leading-[1.7]">
                Most irrigation contractors in the Central Valley have been
                doing this for less time than ASM has been on the BBB roll.
                That&rsquo;s not pride; it&rsquo;s the boring shape of the
                fact. Stacy opened the doors in 1971, and the trucks have been
                rolling out of the same Visalia yard ever since &mdash; through
                three drought cycles, two recessions, and one full generation
                of Tulare County homeowners growing up, buying their parents&rsquo;
                houses, and calling the same number to fix the same valves.
              </p>
            </FadeUp>
            <FadeUp delay={140}>
              <p className="mt-6 text-[var(--ink-soft)] leading-[1.7]">
                The shop runs on three rules. The first is that the truck
                shows up when it says it will. The second is that no estimate
                is binding until it&rsquo;s on paper, and once it&rsquo;s on
                paper the number does not move. The third is that anything
                that fails inside thirty days of leaving our hands is on us
                &mdash; not on the homeowner, not on the manufacturer, not on
                an exception in the contract. That&rsquo;s how the
                relationship has worked here since the seventies.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="mt-6 text-[var(--ink-soft)] leading-[1.7]">
                The reason the calendar fills with multi-generation customers
                isn&rsquo;t a marketing program. It&rsquo;s that we still
                carry the parts for systems we installed in 1989, we still
                trench by hand when the equipment can&rsquo;t reach the side
                yard, and we still answer the phone before nine on a Saturday
                morning when somebody&rsquo;s shut-off valve cracked overnight.
                Half a century of water means knowing where the pressure goes
                in your specific neighborhood, who else is on the line, and
                which valves the previous owner buried under the patio.
              </p>
            </FadeUp>

            <FadeUp delay={320}>
              <div className="mt-12 grid grid-cols-2 gap-px bg-[var(--hairline)] rounded-2xl overflow-hidden">
                {[
                  { k: "Trucks under one license", v: "1" },
                  { k: "Years on the BBB roll", v: "50+" },
                  { k: "Service window", v: "Same day*" },
                  { k: "Estimate cost", v: "Free" },
                ].map((s) => (
                  <div key={s.k} className="bg-[var(--cream)] p-6">
                    <div className="serif-italic text-[var(--ink)] text-3xl md:text-4xl leading-none">
                      {s.v}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-[var(--muted)]">
                *Most repair calls before 2 PM, Mon&ndash;Sat.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
