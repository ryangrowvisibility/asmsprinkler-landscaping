import FadeUp from "./FadeUp";

const services = [
  {
    n: "01",
    title: "Sprinkler Repair",
    body:
      "Diagnostic and repair of failed sprinkler heads, valves, broken risers, and leaking laterals. Most calls before 2 PM are fixed the same afternoon — including older Toro and Hunter systems that newer crews quote a full replacement on. We carry the obscure parts because we installed them.",
    tag: "Most-called service",
  },
  {
    n: "02",
    title: "Full-System Installation",
    body:
      "Complete new-system design and installation for residential and commercial properties — front lawns, back orchards, and everything between. Pressure-tested zones, weather-aware controllers, and a coverage map drawn on your property before the first trench.",
    tag: "Design + install",
  },
  {
    n: "03",
    title: "Drip & Drip-Line Conversion",
    body:
      "Drip irrigation for shrubs, raised beds, fruit trees, and the Visalia rose-bed standard. We retrofit overhead-spray systems to drip without ripping out the manifold, which is how most Central Valley water bills quietly drop a third.",
    tag: "Water-saving",
  },
  {
    n: "04",
    title: "Valve Replacement",
    body:
      "When one valve goes, the rest are usually within a season. We replace all six (or eight, or twelve) at once on older systems — same trip, one shut-off, one repair window — instead of dragging out a year of weekly visits.",
    tag: "Whole-manifold work",
  },
  {
    n: "05",
    title: "Yard Drainage",
    body:
      "French drains, catch basins, and grading for the heavy clay yards Visalia is built on. Standing water after a heavy rain is almost always a 200-foot trench problem; we walk the property before we quote it.",
    tag: "Clay-soil specialty",
  },
  {
    n: "06",
    title: "Landscape Design",
    body:
      "Front-yard redesigns coordinated with the irrigation underneath them — because the most expensive landscape mistake in the Central Valley is planting first and piping second. Drought-aware plant lists, climate-matched layouts, and one company on the hook for all of it.",
    tag: "Tied to the irrigation plan",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-5 md:px-10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--brass-deep)]">
                What we do
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-[var(--ink)] text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
                Six services. <span className="serif-italic">One license number.</span>
              </h2>
            </div>
            <p className="md:text-right text-[var(--ink-soft)] max-w-md leading-relaxed">
              Every job runs through the same shop, the same trucks, and the
              same name on the front of the bond. No subcontracted irrigation
              hand-offs.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <FadeUp key={s.n} delay={i * 80}>
              <article className="group h-full rounded-[1.75rem] bg-[var(--bg-deeper)]/55 ring-1 ring-[var(--hairline)] p-1.5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                <div className="h-full rounded-[calc(1.75rem-0.375rem)] bg-[var(--cream)] p-7 md:p-9 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                  <div className="flex items-start justify-between mb-6">
                    <span className="serif-italic text-[var(--brass-deep)] text-3xl leading-none">
                      {s.n}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] border border-[var(--hairline)] rounded-full px-3 py-1">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-[var(--ink)] text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-[var(--ink-soft)] leading-[1.65]">
                    {s.body}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
