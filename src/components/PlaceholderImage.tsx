export function PlaceholderImage({
  className = '',
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  const borderColor = tone === 'dark' ? 'border-white/30' : 'border-ink/30'
  const fillColor = tone === 'dark' ? 'bg-white/10' : 'bg-ink/5'
  const lineColor = tone === 'dark' ? 'text-white/30' : 'text-ink/30'

  return (
    <div className={`relative overflow-hidden rounded-lg border ${borderColor} ${fillColor} ${className}`}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" className={lineColor} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" className={lineColor} strokeWidth="1" />
      </svg>
    </div>
  )
}
