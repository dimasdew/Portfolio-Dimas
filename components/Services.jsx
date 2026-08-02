'use client'

import useFadeUp from '../hooks/useFadeUp'
import Chip from '@/components/ui/Chip'

const services = [
  {
    num: '01',
    title: 'UI/UX Design',
    desc: 'From wireframes to high-fidelity prototypes. I design intuitive, research-driven interfaces that users love to interact with.',
    tools: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    num: '02',
    title: 'Frontend Development',
    desc: 'Pixel-perfect implementation of designs into fast, responsive, and accessible web applications using modern frameworks.',
    tools: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    num: '03',
    title: 'Web & Blockchain Products',
    desc: 'From SaaS dashboards to decentralized apps, I build interfaces that make complex systems feel simple — with blockchain as a specialty.',
    tools: ['Web', 'Web3', 'Smart Contracts', 'DApps'],
  },
]

export default function Services() {
  const r0 = useFadeUp(0)
  const r1 = useFadeUp(60)

  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      {/* Header */}
      <div className="mb-16">
        <p ref={r0} className="fade-up text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
          What I do
        </p>
        <h2
          ref={r1}
          className="fade-up font-display font-bold h-section"
        >
          Services & expertise
        </h2>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: 'var(--border)' }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.num} service={service} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const ref = useFadeUp(delay)

  return (
    <div
      ref={ref}
      className="fade-up flex flex-col gap-5 p-8 md:p-10 transition-colors duration-300"
      style={{ background: 'var(--bg)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      <span
        className="font-display font-bold text-4xl"
        style={{
          color: 'var(--accent)',
          opacity: 0.3,
        }}
      >
        {service.num}
      </span>

      <h3
        className="font-display font-bold text-lg"
        style={{
          letterSpacing: '-0.02em',
        }}
      >
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted2)' }}>
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {service.tools.map(tool => (
          <Chip key={tool}>{tool}</Chip>
        ))}
      </div>
    </div>
  )
}
