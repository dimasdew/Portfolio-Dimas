'use client'

import { useEffect, useRef } from 'react'

function useFadeUp(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = delay + 'ms'
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

export default function Hero() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(100)
  const r2 = useFadeUp(200)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-12 pb-20 overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-display font-black whitespace-nowrap"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(120px, 18vw, 260px)',
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
        }}
      >
        CREATE
      </div>

      {/* Tag */}
      <div
        ref={r0}
        className="fade-up flex items-center gap-3 text-xs uppercase tracking-widest mb-6"
        style={{ color: 'var(--accent)' }}
      >
        <span className="block w-8 h-px" style={{ background: 'var(--accent)' }} />
        Available for freelance
      </div>

      {/* Title */}
      <h1
        ref={r1}
        className="fade-up font-display font-black leading-none mb-8"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          letterSpacing: '-0.04em',
        }}
      >
        Crafting digital<br />
        <em className="not-italic" style={{ color: 'var(--accent)' }}>experiences</em> that<br />
        feel alive.
      </h1>

      {/* Bottom row */}
      <div ref={r2} className="fade-up flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--muted2)' }}>
          UI/UX Designer & Frontend Developer based in Indonesia. I turn complex problems into clean, intuitive interfaces.
        </p>

        {/* Stats */}
        <div className="flex gap-12">
          {[['8+', 'Projects done'], ['2+', 'Years exp.']].map(([num, label]) => (
            <div key={label}>
              <div
                className="font-display font-bold text-4xl leading-none"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}
              >
                {num.replace('+', '')}<span style={{ color: 'var(--accent)' }}>+</span>
              </div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--muted)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
          <div className="scroll-line w-px h-16" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
          scroll
        </div>
      </div>
    </section>
  )
}
