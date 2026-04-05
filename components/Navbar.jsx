'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300"
      style={{
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="font-display font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
        Dimas Dew<span style={{ color: 'var(--accent)' }}>.</span>DEV
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['Work', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: 'var(--muted2)' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted2)'}
          >
            {item}
          </Link>
        ))}
        <a
          href="dimassoebrata@gmail.com"
          className="text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all duration-200"
          style={{ background: 'var(--accent)', color: '#0a0a0a' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
        >
          Hire me ↗
        </a>
      </div>
    </nav>
  )
}
