"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#heritage", label: "Heritage" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#voices", label: "Voices" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 pt-5 px-4 md:px-8 transition-[padding] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{ paddingTop: scrolled ? 12 : 20 }}>
        <nav
          aria-label="Primary"
          className="mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full border border-[var(--hairline)] bg-[var(--cream)]/85 backdrop-blur-md px-3 md:px-5 py-2 md:py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.02),0_18px_40px_-26px_rgba(60,30,20,0.18)]"
        >
          <a href="#top" className="flex items-center gap-2 pl-1 group">
            <span
              aria-hidden
              className="relative inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-[var(--oxblood)]/20 bg-gradient-to-br from-[var(--oxblood)] to-[var(--oxblood-deep)]"
            >
              <span className="text-[var(--cream)] text-[10px] tracking-[0.18em] serif-italic leading-none">
                A
              </span>
            </span>
            <span className="serif-italic text-lg leading-none text-[var(--ink)]">
              ASM
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] ml-2 pb-[1px] border-l border-[var(--hairline)] pl-3">
              Visalia · Est. 1971
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-[13px] tracking-wide text-[var(--ink-soft)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 rounded-full transition-colors duration-300 hover:text-[var(--oxblood)] hover:bg-[var(--oxblood)]/[0.04]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="tel:5597302284"
              className="hidden md:inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 text-[13px] tracking-wide text-[var(--cream)] bg-[var(--oxblood)] hover:bg-[var(--oxblood-deep)] transition-colors duration-300 group active:scale-[0.98]"
            >
              <span>(559) 730-2284</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--cream)]/15 group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden relative h-10 w-10 rounded-full border border-[var(--hairline)] flex items-center justify-center"
            >
              <span
                className="absolute h-px w-4 bg-[var(--ink)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  transform: open ? "rotate(45deg)" : "translateY(-4px)",
                }}
              />
              <span
                className="absolute h-px w-4 bg-[var(--ink)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  transform: open ? "rotate(-45deg)" : "translateY(4px)",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fluid-island menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-[var(--cream)]/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col justify-center pl-8 pr-6 pt-24">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 serif-italic text-5xl text-[var(--ink)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <span className="text-[var(--brass-deep)] mr-3 text-base align-top">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href="tel:5597302284"
            onClick={() => setOpen(false)}
            className={`mt-8 inline-flex w-max items-center gap-3 rounded-full bg-[var(--oxblood)] text-[var(--cream)] pl-5 pr-2 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: open ? `${links.length * 60 + 100}ms` : "0ms" }}
          >
            (559) 730-2284
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--cream)]/15">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
