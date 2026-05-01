import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-24 md:pb-32 px-5 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[var(--oxblood)]/[0.06] text-[var(--oxblood)] px-3 py-1 text-[10px] uppercase tracking-[0.24em]">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-[var(--oxblood)]" />
            Sprinkler Specialists · Visalia · Tulare County
          </span>
        </FadeUp>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          {/* Left: massive editorial type */}
          <div className="md:col-span-8">
            <FadeUp delay={80}>
              <h1 className="font-[var(--font-display)] text-[var(--ink)] text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.92] tracking-[-0.02em]">
                Half a century
                <br />
                <span className="serif-italic text-[var(--oxblood)]">
                  of water,
                </span>
                <br />
                done <span className="serif-italic">right.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={220}>
              <p className="mt-10 max-w-xl text-[var(--ink-soft)] text-lg md:text-xl leading-[1.55]">
                ASM Sprinkler &amp; Landscaping has kept Visalia&rsquo;s lawns,
                orchards, and front yards green since{" "}
                <span className="text-[var(--ink)]">1971</span>. Family-owned,
                BBB-tenured, and still answering the phone the same way Stacy
                Mattoon did the day he opened the doors &mdash; with a wrench in
                hand and Tulare County dirt on his boots.
              </p>
            </FadeUp>

            <FadeUp delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="tel:5597302284"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--oxblood)] hover:bg-[var(--oxblood-deep)] text-[var(--cream)] pl-5 md:pl-6 pr-1.5 py-2 md:py-2.5 text-sm md:text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Call (559) 730-2284
                  <span className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[var(--cream)]/15 group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] hover:border-[var(--ink-soft)] px-5 py-2.5 text-sm tracking-wide text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-500"
                >
                  See what we do
                </a>
                <span className="text-[12px] text-[var(--muted)] pl-1">
                  Same-day repair · Mon&ndash;Sat 7&ndash;5
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right: stacked spec cards (Z-axis cascade subtle) */}
          <div className="md:col-span-4">
            <div className="relative h-full min-h-[280px]">
              <FadeUp delay={520}>
                <div
                  className="rounded-[1.75rem] bg-[var(--bg-deeper)]/90 ring-1 ring-[var(--hairline)] p-1.5 shadow-[0_24px_60px_-30px_rgba(60,30,20,0.25)]"
                  style={{ transform: "rotate(-1.2deg)" }}
                >
                  <div
                    className="rounded-[calc(1.75rem-0.375rem)] bg-[var(--cream)] px-5 py-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                        Established
                      </span>
                      <span className="serif-italic text-[var(--oxblood)] text-[42px] leading-none">
                        1971
                      </span>
                    </div>
                    <hr className="my-5 border-0 h-px hairline-rule" />
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-1">
                          BBB Tenure
                        </div>
                        <div className="serif-italic text-[var(--ink)] text-2xl leading-none">
                          50+ yrs
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-1">
                          BuildZoom
                        </div>
                        <div className="serif-italic text-[var(--ink)] text-2xl leading-none">
                          93/100
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-1">
                          Owner
                        </div>
                        <div className="text-[var(--ink)]">Stacy Mattoon</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-1">
                          License
                        </div>
                        <div className="text-[var(--ink)]">CSLB · Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={700}>
                <div
                  className="absolute -bottom-6 -left-2 md:-left-6 right-6 rounded-2xl bg-[var(--ink)] text-[var(--cream)] px-5 py-4 shadow-[0_24px_50px_-20px_rgba(20,10,5,0.45)]"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <div className="flex items-center gap-3">
                    <span aria-hidden className="relative inline-flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full bg-[var(--brass)] opacity-70 animate-[meter-pulse_1.6s_ease-in-out_infinite]" />
                      <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--brass)]" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--cream)]/65">
                      Open today
                    </span>
                  </div>
                  <div className="mt-1.5 text-sm text-[var(--cream)]/85">
                    Same-day diagnostic on most calls before 2&nbsp;PM.
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
