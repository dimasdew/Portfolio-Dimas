'use client'

import useFadeUp from '../hooks/useFadeUp'

const skills = [
  'Figma', 'HTML & CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Tailwind CSS', 'Web3',
  'Responsive Design', 'Prototyping', 'Design Systems',
]

export default function About() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(60)
  const r2 = useFadeUp(120)
  const r3 = useFadeUp(180)
  const r4 = useFadeUp(240)

  return (
    <section id="about" className="py-20 md:py-36 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Photo placeholder */}
        <div
          ref={r0}
          className="fade-up relative rounded-xl overflow-hidden flex items-center justify-center w-full"
          style={{
            aspectRatio: '3/4',
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            maxHeight: '520px',
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <span
              className="font-display font-black"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '5rem',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, var(--accent) 0%, #8BC34A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DD
            </span>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--muted)' }}
            >
              Dimas Dewantara
            </span>
          </div>
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
            I'm Dimas Dewantara, a UI/UX designer and frontend developer specializing in Web3 products. I design and build interfaces where trust is the core UX problem: marketplaces, DEXs, and security tooling. Every project I ship goes from research and wireframes to production code.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted2)' }}>
            I believe great interfaces should be fast, accessible, and honest, especially in crypto where a confusing UI can cost users real money. Open to remote roles with teams that care about craft.
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
