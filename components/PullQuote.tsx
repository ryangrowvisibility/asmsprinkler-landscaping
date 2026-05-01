import FadeUp from "./FadeUp";

export default function PullQuote() {
  return (
    <section
      aria-label="Featured quote"
      className="px-5 md:px-10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <span className="serif-italic text-[var(--brass-deep)] text-[10rem] md:text-[14rem] leading-[0.5] block -mb-6 select-none">
            &ldquo;
          </span>
        </FadeUp>
        <FadeUp delay={120}>
          <blockquote className="serif-italic text-[var(--ink)] text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[1.05] tracking-[-0.01em]">
            ASM has serviced all of Visalia and the surrounding areas for
            decades. Multi-generation customers &mdash; the homes they piped
            for the parents are now serviced for the kids.
          </blockquote>
        </FadeUp>
        <FadeUp delay={260}>
          <div className="mt-10 flex items-center gap-4 text-[var(--ink-soft)]">
            <span className="h-px w-10 bg-[var(--hairline)]" aria-hidden />
            <span className="text-sm tracking-wide">
              From a long-time customer review &middot; BBB / Yellow Pages
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
