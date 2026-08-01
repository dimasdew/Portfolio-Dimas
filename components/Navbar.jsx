'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = ['About', 'Work', 'Contact']

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 transition-all duration-300"
        style={{
          borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled || menuOpen ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        }}
      >
        <div className="font-display font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
          DIMAS-DEW<span style={{ color: 'var(--accent)' }}>.</span>DEV
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
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
          <ThemeToggle />
          <a
            href="mailto:dimasdewantara50@gmail.com"
            className="text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all duration-200"
            style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Hire me
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-[60]"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          style={{ cursor: 'pointer', background: 'none', border: 'none' }}
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
            style={{
              background: 'var(--text)',
              transform: menuOpen ? 'rotate(45deg) translate(2.3px, 2.3px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: 'var(--text)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
            style={{
              background: 'var(--text)',
              transform: menuOpen ? 'rotate(-45deg) translate(2.3px, -2.3px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-400"
        style={{
          background: 'var(--bg)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-display font-bold text-3xl tracking-tight transition-colors duration-200"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)', textDecoration: 'none' }}
          >
            {item}
          </Link>
        ))}
        <ThemeToggle />
        <a
          href="mailto:dimasdewantara50@gmail.com"
          onClick={() => setMenuOpen(false)}
          className="text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded-full mt-4 transition-all duration-200"
          style={{ background: 'var(--accent)', color: 'var(--on-accent)', textDecoration: 'none' }}
        >
          Hire me
        </a>
      </div>
    </>
  )
}
