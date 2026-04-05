'use client'

import { useEffect, useRef } from 'react'

const skills = [
  'Figma', 'HTML & CSS', 'JavaScript', 'React',
  'Next.js', 'Tailwind CSS', 'Prototyping',
  'User Research', 'Responsive Design', 'Design Systems',
]

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

export default function About() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(60)
  const r2 = useFadeUp(120)
  const r3 = useFadeUp(180)
  const r4 = useFadeUp(240)

  return (
    <section id="about" className="py-28 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Photo placeholder */}
        <div
          ref={r0}
          className="fade-up relative rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            aspectRatio: '3/4',
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            maxHeight: '520px',
          }}
        >
          {/* Replace this div with <Image> from next/image when you have a photo */}
          <span
            className="font-display font-black"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '5rem',
              color: 'var(--border-hover)',
              letterSpacing: '-0.04em',
            }}
          >
            YOU
          </span>
          <div
            className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full"
            style={{ background: 'var(--accent)', color: '#0a0a0a' }}
          >
            Open to work
          </div>
        </div>

        {/* Content */}
        <div>
          <p ref={r1} className="fade-up text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            About me
          </p>
          <h2
            ref={r2}
            className="fade-up font-display font-bold leading-tight mb-6"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              letterSpacing: '-0.03em',
            }}
          >
            I design & build things people actually enjoy using.
          </h2>
          <p ref={r3} className="fade-up text-sm leading-relaxed mb-4" style={{ color: 'var(--muted2)' }}>
            I'm a self-taught UI/UX designer and frontend developer passionate about the intersection of great design and clean code. I believe beautiful interfaces should also be fast, accessible, and delightful to use.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted2)' }}>
            Currently building my portfolio and looking for exciting opportunities to work with teams that care about craft. Always learning, always iterating.
          </p>

          {/* Skills */}
          <div ref={r4} className="fade-up flex flex-wrap gap-2">
            {skills.map(skill => (
              <span
                key={skill}
                className="text-xs px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg3)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
