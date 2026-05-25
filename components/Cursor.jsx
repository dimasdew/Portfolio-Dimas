'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const onEnter = () => ringRef.current?.classList.add('scale-150', 'border-[var(--accent)]')
    const onLeave = () => ringRef.current?.classList.remove('scale-150', 'border-[var(--accent)]')

    document.addEventListener('mousemove', onMove)
    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    let rafId = requestAnimationFrame(function loop() {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      rafId = requestAnimationFrame(loop)
    })
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'var(--accent)', transition: 'transform 0.1s' }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{ border: '1px solid var(--cursor-ring)' }}
      />
    </>
  )
}
