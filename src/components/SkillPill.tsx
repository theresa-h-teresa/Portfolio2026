export function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-[10px] font-mono text-accent whitespace-nowrap">
      {label}
    </span>
  )
}
