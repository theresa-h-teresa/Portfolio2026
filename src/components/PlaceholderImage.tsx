export function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-ink/30 bg-ink/5 ${className}`}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" className="text-ink/30" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" className="text-ink/30" strokeWidth="1" />
      </svg>
    </div>
  )
}
