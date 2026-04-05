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

export default function Contact() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(80)
  const r2 = useFadeUp(160)
  const r3 = useFadeUp(240)

  return (
    <section id="contact" className="relative py-28 px-12 text-center overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,240,74,0.06) 0%, transparent 70%)',
        }}
      />

      <p ref={r0} className="fade-up text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
        Get in touch
      </p>

      <h2
        ref={r1}
        className="fade-up font-display font-black leading-none mb-6"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3rem, 7vw, 7rem)',
          letterSpacing: '-0.05em',
        }}
      >
        Let's work<br />
        <em className="not-italic" style={{ color: 'var(--accent)' }}>together.</em>
      </h2>

      <p ref={r2} className="fade-up text-sm max-w-md mx-auto mb-10" style={{ color: 'var(--muted2)' }}>
        Have a project in mind or just want to chat? I'm always open to new opportunities and interesting collaborations.
      </p>

      <div ref={r3} className="fade-up flex gap-4 justify-center flex-wrap">
        <a
          href="mailto:dimasdewantara50@gmail.com"
          className="inline-flex items-center gap-2 font-semibold text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200"
          style={{ background: 'var(--accent)', color: '#0a0a0a' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent2)'
            e.currentTarget.style.transform = 'scale(0.97)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Say hello ↗
        </a>
        <a
          href="https://linkedin.com/in/dimas-soebrata-0b020a392/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-200"
          style={{
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.transform = 'scale(0.97)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
