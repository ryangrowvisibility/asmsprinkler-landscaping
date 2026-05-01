import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "Are you licensed and bonded?",
    a: "Yes. ASM holds an active CSLB contractor&rsquo;s license, carries a $15,000 contractor&rsquo;s bond, and has been on the Better Business Bureau roll continuously since 1975. BuildZoom rates the license 93/100, which sits in the top quartile of California licensed contractors.",
  },
  {
    q: "What areas do you serve?",
    a: "Visalia, Tulare, Farmersville, Patterson Tract, and most of Tulare County. We also work occasionally in southern Fresno County for repeat customers. If you&rsquo;re inside roughly a 25-mile radius of Visalia, the truck reaches you on the same day for repairs.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Anything bigger than a single-trip repair gets a written estimate before any digging happens. The estimate is free, and once it&rsquo;s on paper the number does not move.",
  },
  {
    q: "How fast can you come out for a repair?",
    a: "Same day for most repair calls placed before 2 PM Mon&ndash;Sat. Emergency leaks are prioritized. For full installs and landscape design, we typically schedule the site walk within a week.",
  },
  {
    q: "Can you fix older Hunter, Toro, or Rain Bird systems?",
    a: "Yes &mdash; most of them, we installed. We carry the obscure parts for systems built since the early 1980s, including controllers and valve manifolds that newer crews tell homeowners are too old to repair. They almost never are.",
  },
  {
    q: "Do you handle drip-conversion for older spray systems?",
    a: "Yes. Drip-conversion is one of the higher-leverage projects we do because it usually drops the homeowner&rsquo;s monthly water bill by a third without ripping out the existing manifold. We retrofit zone by zone.",
  },
  {
    q: "Will the same crew come back for service?",
    a: "Yes. The trucks roll out of one Visalia yard under one license. There are no subcontracted irrigation hands on an ASM job &mdash; the person who installs your system is the person who&rsquo;ll come back when something needs adjusting in 2031.",
  },
  {
    q: "What does a follow-up window look like?",
    a: "Anything that fails inside thirty days of leaving our hands is on us. We don&rsquo;t carve exceptions into the contract for it; that&rsquo;s how the relationship has worked since the 1970s and we&rsquo;re not going to change it now.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-5 md:px-10 py-24 md:py-36 bg-[var(--bg-deeper)]/55"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-32">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
                Common questions
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-[var(--ink)] text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1] tracking-[-0.01em]">
                Things people ask
                <br />
                <span className="serif-italic">before calling.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="mt-6 text-[var(--ink-soft)] leading-relaxed max-w-sm">
                If your question isn&rsquo;t below, the phone is faster than
                email anyway.
              </p>
            </FadeUp>
          </div>

          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {faqs.map((f, i) => (
                <FadeUp key={i} delay={i * 50} as="li">
                  <div className="h-full rounded-[1.5rem] bg-[var(--cream)] ring-1 ring-[var(--hairline)] p-6 md:p-7">
                    <div className="flex items-start gap-3 mb-3">
                      <span aria-hidden className="serif-italic text-[var(--brass-deep)] text-xl leading-none mt-1">
                        Q.
                      </span>
                      <h3 className="font-[var(--font-display)] text-[var(--ink)] text-xl md:text-2xl leading-[1.15]">
                        {f.q}
                      </h3>
                    </div>
                    <p
                      className="text-[var(--ink-soft)] leading-[1.65] pl-7"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                  </div>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
