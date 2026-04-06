'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import projects from './projects.data'

function ProjectCard({ project, delay = 0 }) {
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

  return (
    <Link
      ref={ref}
      href={project.href}
      className="fade-up group flex flex-col gap-5 p-10 no-underline relative overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--bg)',
        color: 'inherit',
        gridColumn: project.featured ? '1 / -1' : undefined,
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      {project.image ? (
        <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
      <div
        className="w-full rounded-md overflow-hidden relative"
        style={{
          aspectRatio: project.featured ? '21/9' : '16/9',
          border: '1px solid var(--border)',
          background: 'var(--bg3)',
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center font-display font-black text-5xl tracking-tight transition-transform duration-500 group-hover:scale-105"
          style={{
            fontFamily: 'Syne, sans-serif',
            background: project.bgColor,
            color: project.bgTextColor,
          }}
        >
          {project.bgText}
        </div>
      </div>

      {/* Meta row */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {project.accent && (
            <span
              className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                color: 'var(--accent)',
                border: '1px solid rgba(200,240,74,0.25)',
                background: 'rgba(200,240,74,0.05)',
              }}
            >
              Featured
            </span>
          )}
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full transition-all duration-200"
              style={{
                color: 'var(--muted2)',
                border: '1px solid var(--border)',
                background: 'var(--bg3)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{ color: 'var(--muted)', opacity: 0.6 }}
        >
          ↗
        </span>
      </div>

      {/* Name & desc */}
      <h3
        className="font-display font-bold leading-tight"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: project.featured ? '1.75rem' : '1.3rem',
          letterSpacing: '-0.02em',
        }}
      >
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted2)' }}>
        {project.desc}
      </p>
    </Link>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-28">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 px-12">
        <div>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
            Selected work
          </p>
          <h2
            className="font-display font-bold leading-none"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Projects
          </h2>
        </div>
        <a
          href="#"
          className="text-sm flex items-center gap-2 transition-all duration-200"
          style={{ color: 'var(--muted2)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
        >
          View all work →
        </a>
      </div>

      {/* Grid */}
      <div
        className="mx-12 grid grid-cols-1 md:grid-cols-2"
        style={{ gap: '1.5px', background: 'var(--border)' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 60} />
        ))}
      </div>
    </section>
  )
}
