'use client'

import useFadeUp from '../hooks/useFadeUp'

export default function Hero() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(100)
  const r2 = useFadeUp(200)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-32 md:pb-44 overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-display font-black whitespace-nowrap"
        style={{
          fontSize: 'clamp(80px, 14vw, 200px)',
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px var(--hairline)',
        }}
      >
        CREATE
      </div>

      {/* Tag */}
      <div
        ref={r0}
        className="fade-up flex items-center gap-3 text-xs uppercase tracking-widest mb-3 text-accent"
      >
        <span className="block w-8 h-px bg-accent" />
        Available for work
      </div>

      {/* Title */}
      <h1
        ref={r1}
        className="fade-up font-display font-black h-display mb-8"
      >
        Crafting digital<br />
        <em className="not-italic text-accent">experiences</em> that<br />
        feel alive.
      </h1>

      {/* Bottom row */}
      <div ref={r2} className="fade-up flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <p className="max-w-xl text-sm leading-relaxed text-muted2">
          UI/UX Designer & Frontend Developer based in Indonesia.
        <br />
          I design and ship digital products end to end, from research to production code.
        </p>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <div className="scroll-line w-px h-16" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
          scroll
        </div>
      </div>
    </section>
  )
}
