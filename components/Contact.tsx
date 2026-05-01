import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 md:px-10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
                Pick up the phone
              </span>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="mt-4 font-[var(--font-display)] text-[var(--ink)] text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.94] tracking-[-0.02em]">
                The number Visalia
                <br />
                has been calling
                <br />
                <span className="serif-italic text-[var(--oxblood)]">since 1971.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <a
                href="tel:5597302284"
                className="mt-10 inline-flex items-baseline gap-2 group"
              >
                <span className="serif-italic text-[var(--ink)] group-hover:text-[var(--oxblood)] transition-colors duration-500 text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
                  (559) 730-2284
                </span>
                <span className="inline-flex h-9 w-9 self-center items-center justify-center rounded-full bg-[var(--oxblood)] text-[var(--cream)] group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-500">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="mt-6 text-[var(--ink-soft)] max-w-lg leading-relaxed">
                Tell us what the system is doing &mdash; or not doing. Most
                repairs we&rsquo;ve already seen four times this month and we
                can sketch the problem from your description before the truck
                rolls.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={120}>
            <aside className="md:col-span-5 rounded-[1.75rem] bg-[var(--bg-deeper)]/80 ring-1 ring-[var(--hairline)] p-1.5">
              <div className="rounded-[calc(1.75rem-0.375rem)] bg-[var(--cream)] p-7 md:p-8">
                <dl className="space-y-7">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-2">
                      Shop
                    </dt>
                    <dd className="text-[var(--ink)] leading-[1.5]">
                      2726 W Whitendale Ave
                      <br />
                      Visalia, CA 93277
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-2">
                      Hours
                    </dt>
                    <dd className="text-[var(--ink)] leading-[1.5]">
                      Mon &ndash; Sat &middot; 7:00 AM &ndash; 5:00 PM
                      <br />
                      <span className="text-[var(--ink-soft)]">
                        Closed Sunday
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-2">
                      Service area
                    </dt>
                    <dd className="text-[var(--ink)] leading-[1.5]">
                      Visalia, Tulare, Farmersville, Patterson Tract
                      <br />
                      <span className="text-[var(--ink-soft)]">
                        ~25 miles around Visalia
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-2">
                      Credentials
                    </dt>
                    <dd className="text-[var(--ink)] leading-[1.5]">
                      CSLB licensed &middot; $15,000 bonded
                      <br />
                      <span className="text-[var(--ink-soft)]">
                        BBB on file since 1975 &middot; BuildZoom 93/100
                      </span>
                    </dd>
                  </div>
                </dl>
                <hr className="my-7 border-0 h-px hairline-rule" />
                <a
                  href="https://www.google.com/maps?q=2726+W+Whitendale+Ave+Visalia+CA+93277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm tracking-wide text-[var(--ink-soft)] hover:text-[var(--oxblood)] transition-colors duration-500"
                >
                  Get directions
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--hairline)] group-hover:translate-x-0.5 transition-transform duration-500">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </aside>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
