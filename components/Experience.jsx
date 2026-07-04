'use client'

import useFadeUp from '../hooks/useFadeUp'

const experiences = [
  {
    id: 1,
    role: 'Core Team Member',
    company: 'Zetra Wallet',
    period: '2024 — Present',
    type: 'Project',
    desc: 'Contributing to a smart crypto wallet built on Solana with ZK-OTP authentication, MPC key sharing, Vault Program, and a Risk Engine. Participated in the Colosseum Frontier Hackathon.',
    highlights: [
      'Product presence — technical content and public communications',
      'Led cloud/credits program applications to accelerate ZK proof infrastructure',
      'Bridged complex protocol concepts into clear, user-facing messaging',
    ],
    tags: ['Solana', 'ZK Proofs', 'MPC', 'Smart Wallet'],
  },
]

export default function Experience() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(60)

  return (
    <section className="py-20 md:py-36 px-6 md:px-12">
      <div className="mb-16">
        <p ref={r0} className="fade-up text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
          Experience
        </p>
        <h2
          ref={r1}
          className="fade-up font-display font-bold leading-tight"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Where I've contributed
        </h2>
      </div>

      <div className="flex flex-col gap-px" style={{ background: 'var(--border)' }}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ exp, delay }) {
  const ref = useFadeUp(delay)

  return (
    <div
      ref={ref}
      className="fade-up p-8 md:p-10 transition-colors duration-300"
      style={{ background: 'var(--bg)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        {/* Left: role + meta */}
        <div className="md:w-64 shrink-0">
          <span
            className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{
              color: 'var(--accent)',
              border: '1px solid rgba(200,240,74,0.25)',
              background: 'rgba(200,240,74,0.05)',
            }}
          >
            {exp.type}
          </span>
          <h3
            className="font-display font-bold text-lg mt-2"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
          >
            {exp.role}
          </h3>
          <p className="text-sm font-semibold mt-1" style={{ color: 'var(--accent)' }}>
            {exp.company}
          </p>
          <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            {exp.period}
          </p>
        </div>

        {/* Right: desc + highlights */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted2)' }}>
            {exp.desc}
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted2)' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  color: 'var(--muted2)',
                  border: '1px solid var(--border)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
