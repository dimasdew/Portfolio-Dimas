'use client'

export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="page-container flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12 pt-12 pb-6">
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        © 2026 Dimas Dewantara. Designed & built with care.
      </p>
      <div className="flex gap-6">
        {[
          ['GitHub', 'https://github.com/dimasdew'],
          ['LinkedIn', 'https://www.linkedin.com/in/dimas-dew/'],
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
      </div>
    </footer>
  )
}
