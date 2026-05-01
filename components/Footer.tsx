export default function Footer() {
  return (
    <footer className="px-5 md:px-10 pt-16 pb-10 bg-[var(--ink)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="serif-italic text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] block">
              ASM <span className="brass-shine">Sprinkler &amp; Landscaping</span>
            </span>
            <p className="mt-5 text-[var(--cream)]/65 max-w-md leading-relaxed">
              Family-owned Visalia sprinkler &amp; irrigation specialists.
              Serving Tulare County since 1971.
            </p>
          </div>
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--brass)]/85">
              Reach
            </span>
            <ul className="mt-4 space-y-2 text-[var(--cream)]/85">
              <li>
                <a className="hover:text-[var(--cream)]" href="tel:5597302284">
                  (559) 730-2284
                </a>
              </li>
              <li className="text-[var(--cream)]/65">2726 W Whitendale Ave</li>
              <li className="text-[var(--cream)]/65">Visalia, CA 93277</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--brass)]/85">
              Hours
            </span>
            <ul className="mt-4 space-y-2 text-[var(--cream)]/85">
              <li>Mon – Sat</li>
              <li>7:00 AM – 5:00 PM</li>
              <li className="text-[var(--cream)]/55">Closed Sunday</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--brass)]/85">
              Credentials
            </span>
            <ul className="mt-4 space-y-2 text-[var(--cream)]/85">
              <li>CSLB · Active</li>
              <li>$15,000 bonded</li>
              <li>BBB · since 1975</li>
              <li>BuildZoom 93/100</li>
            </ul>
          </div>
        </div>
        <hr className="mt-16 border-0 h-px bg-[var(--cream)]/[0.12]" />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs tracking-wide text-[var(--cream)]/55">
          <span>
            &copy; {new Date().getFullYear()} ASM Sprinkler &amp; Landscaping
            &middot; Visalia, CA
          </span>
          <span className="serif-italic text-[var(--brass)]/85">
            Half a century of water, done right.
          </span>
        </div>
      </div>
    </footer>
  );
}
