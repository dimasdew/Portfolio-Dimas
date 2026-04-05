'use client'

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center gap-4 px-12 py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        © 2026 — Designed & built with care.
      </p>
      <div className="flex gap-6">
        {[
          ['GitHub', 'https://github.com/dimasdew'],
          ['LinkedIn', 'https://linkedin.com/in/dimas-soebrata-0b020a392/'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
