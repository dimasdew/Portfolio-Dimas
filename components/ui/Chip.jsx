'use client'

import { cn } from '@/lib/utils'

/**
 * The one pill/chip primitive — skill tags, project tags, service tools,
 * the "Featured" marker. These were seven near-identical inline blocks that
 * drifted between two sizes and two tones. Centralised here.
 *
 * size:  'sm' (10px, tags)  |  'md' (12px, skill chips)
 * tone:  'muted' (outline)  |  'filled' (muted + bg)  |  'accent' (highlight)
 */
export default function Chip({ size = 'sm', tone = 'muted', className, children }) {
  const sizing =
    size === 'md' ? 'text-xs px-4 py-2' : 'text-[10px] px-3 py-1'

  const toneStyle =
    tone === 'accent'
      ? {
          color: 'var(--accent)',
          border: '1px solid rgba(200,240,74,0.25)',
          background: 'rgba(200,240,74,0.05)',
        }
      : tone === 'filled'
        ? {
            color: 'var(--muted2)',
            border: '1px solid var(--border)',
            background: 'var(--bg3)',
          }
        : {
            color: 'var(--muted2)',
            border: '1px solid var(--border)',
          }

  return (
    <span
      className={cn(
        'inline-flex items-center uppercase tracking-widest rounded-full',
        sizing,
        className,
      )}
      style={toneStyle}
    >
      {children}
    </span>
  )
}
