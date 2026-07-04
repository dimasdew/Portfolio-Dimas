const skills = [
  'UI/UX Design', 'Frontend Dev', 'Fullstack', 'Figma',
  'React', 'Next.js', 'Node.js', 'Prototyping',
  'Design Systems', 'AI-Assisted Dev', 'Solana', 'Web3',
]

export default function Marquee() {
  const doubled = [...skills, ...skills]

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div className="marquee-inner flex gap-12 w-max">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-xs uppercase tracking-widest whitespace-nowrap"
            style={{ color: 'var(--muted)' }}
          >
            <span
              className="block w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent)' }}
            />
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
