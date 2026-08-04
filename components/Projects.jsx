'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import projects from './projects.data'
import Chip from '@/components/ui/Chip'

function IframePreview({ project, iframeContainerRef }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div ref={iframeContainerRef} className="w-full h-full relative hidden sm:block">
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center animate-pulse">
          <div className="absolute inset-0 bg-bg3" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(90deg, transparent 25%, var(--hairline) 50%, transparent 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
            }}
          />
          <span className="relative text-xs uppercase tracking-widest text-muted">
            Loading preview…
          </span>
        </div>
      )}
      <iframe
        src={project.liveUrl}
        title={project.name}
        className="absolute top-0 left-0 border-0 pointer-events-none transition-opacity duration-500"
        style={{
          width: '1440px',
          height: '900px',
          transform: 'scale(var(--iframe-scale, 0.5))',
          transformOrigin: 'top left',
          opacity: loaded ? 1 : 0,
        }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

function ProjectCard({ project, delay = 0 }) {
  const ref = useRef(null)
  const iframeContainerRef = useRef(null)

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

  useEffect(() => {
    if (!project.liveUrl || !iframeContainerRef.current) return
    const updateScale = () => {
      const container = iframeContainerRef.current
      if (!container) return
      const scale = container.offsetWidth / 1440
      container.style.setProperty('--iframe-scale', scale)
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [project.liveUrl])

  const Wrapper = project.comingSoon ? 'div' : Link
  const wrapperProps = project.comingSoon
    ? {}
    : { href: project.href }

  return (
    <Wrapper
      ref={ref}
      {...wrapperProps}
      className="fade-up group flex flex-col gap-5 p-6 md:p-10 no-underline relative overflow-hidden transition-colors duration-300 bg-bg"
      style={{
        color: 'inherit',
        gridColumn: project.featured ? '1 / -1' : undefined,
        cursor: project.comingSoon ? 'default' : undefined,
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}>
      {/* Coming Soon overlay */}
      {project.comingSoon && (
        <div
          className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-muted2 bg-bg3"
          style={{
            border: '1px solid var(--border)',
          }}
        >
          Coming Soon
        </div>
      )}
      {/* Image area */}
      <div
        className="w-full rounded-md overflow-hidden relative bg-bg3"
        style={{
          aspectRatio: project.featured ? '21/9' : '16/9',
          border: '1px solid var(--border)',
        }}
      >
        {project.liveUrl ? (
          <>
            <IframePreview
              project={project}
              iframeContainerRef={iframeContainerRef}
            />
            {/* Mobile fallback — shown only when iframe hidden (<sm) */}
            <div
              className="sm:hidden w-full h-full flex items-center justify-center font-display font-black text-5xl tracking-tight"
              style={{ color: project.bgTextColor || 'var(--muted)' }}
            >
              {project.bgText || project.name.split(' ')[0]}
            </div>
          </>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-display font-black text-5xl tracking-tight transition-transform duration-500 group-hover:scale-105"
            style={{
              background: project.bgColor,
              color: project.bgTextColor,
            }}
          >
            {project.bgText}
          </div>
        )}
      </div>

      {/* Meta row */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {project.accent && (
            <Chip tone="accent">Featured</Chip>
          )}
          {project.tags.map(tag => (
            <Chip key={tag} tone="filled" className="transition-all duration-200">{tag}</Chip>
          ))}
        </div>
        {!project.comingSoon && (
          <span
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 inline-flex text-muted"
            style={{ opacity: 0.6 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        )}
      </div>

      {/* Name & desc */}
      <h3
        className="font-display font-bold leading-tight"
        style={{
          fontSize: project.featured ? '1.75rem' : '1.3rem',
          letterSpacing: '-0.02em',
        }}
      >
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed text-muted2">
        {project.desc}
      </p>
    </Wrapper>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 px-6 md:px-12">
        <div>
          <p className="text-xs uppercase tracking-widest mb-3 text-accent">
            Selected work
          </p>
          <h2
            className="font-display font-bold h-section"
          >
            Projects
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div
        className="mx-6 md:mx-12 grid grid-cols-1 md:grid-cols-2 bg-[var(--border)]"
        style={{ gap: '1.5px' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 60} />
        ))}
      </div>
    </section>
  )
}
