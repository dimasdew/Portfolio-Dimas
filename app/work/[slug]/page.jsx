import Link from 'next/link'
import { notFound } from 'next/navigation'
import projects from '../../../components/projects.data'
import Footer from '../../../components/Footer'

export function generateStaticParams() {
  return projects.filter(p => p.caseStudy).map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} - Case Study | Dimas Dewantara`,
    description: project.desc,
  }
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
      {children}
    </p>
  )
}

export default function CaseStudyPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project || !project.caseStudy) notFound()
  const cs = project.caseStudy

  return (
    <>
      <main className="px-6 md:px-12 pt-24 pb-24 max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/#work"
          className="text-xs uppercase tracking-widest no-underline"
          style={{ color: 'var(--muted)' }}
        >
          ← Back to work
        </Link>

        {/* Header */}
        <header className="mt-12 mb-16">
          <div className="flex gap-2 flex-wrap mb-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ color: 'var(--muted2)', border: '1px solid var(--border)', background: 'var(--bg3)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-display font-black h-section mb-6"
          >
            {project.name}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--muted2)' }}>
            {cs.overview}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Role</p>
              <p className="text-sm" style={{ color: 'var(--text)' }}>{cs.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Scope</p>
              <p className="text-sm" style={{ color: 'var(--text)' }}>{cs.timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Live</p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline"
                style={{ color: 'var(--accent)' }}
              >
                Visit site
              </a>
            </div>
          </div>
        </header>

        {/* Live preview */}
        <div
          className="w-full rounded-xl overflow-hidden mb-16 hidden sm:block"
          style={{ border: '1px solid var(--border)', aspectRatio: '16/9', position: 'relative' }}
        >
          <iframe
            src={project.liveUrl}
            title={project.name}
            className="border-0"
            style={{ width: '100%', height: '100%' }}
            loading="lazy"
          />
        </div>

        {/* Problem */}
        <section className="mb-16">
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted2)' }}>
            {cs.problem}
          </p>
        </section>

        {/* Research */}
        <section className="mb-16">
          <SectionLabel>Research & Discovery</SectionLabel>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {cs.research.map((item, i) => (
              <li key={i} className="flex gap-4 text-base leading-relaxed" style={{ color: 'var(--muted2)' }}>
                <span
                  className="font-display font-bold shrink-0"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Key decisions */}
        <section className="mb-16">
          <SectionLabel>Key Design Decisions</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.decisions.map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                <h3
                  className="font-display font-bold text-lg mb-3 leading-snug"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted2)' }}>
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mb-16">
          <SectionLabel>Built With</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {cs.stack.map(item => (
              <span
                key={item}
                className="text-xs px-4 py-2 rounded-full"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <SectionLabel>Outcome</SectionLabel>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted2)' }}>
            {cs.outcome}
          </p>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <SectionLabel>What I Learned</SectionLabel>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted2)' }}>
            {cs.learnings}
          </p>
        </section>

        {/* Next project */}
        <NextProject currentSlug={project.slug} />
      </main>
      <Footer />
    </>
  )
}

function NextProject({ currentSlug }) {
  const withCs = projects.filter(p => p.caseStudy)
  const idx = withCs.findIndex(p => p.slug === currentSlug)
  const next = withCs[(idx + 1) % withCs.length]
  return (
    <Link
      href={`/work/${next.slug}`}
      className="block p-8 rounded-xl no-underline transition-colors duration-300"
      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'inherit' }}
    >
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>
        Next case study
      </p>
      <p
        className="font-display font-bold text-xl"
        style={{ letterSpacing: '-0.02em' }}
      >
        {next.name}
      </p>
    </Link>
  )
}
