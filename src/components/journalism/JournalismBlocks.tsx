import type { ReactNode } from 'react'
import { withBase } from '../../lib/url'

export function JSection({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-4">
      <div className="flex flex-col gap-6">
        <h3 className="font-display text-2xl leading-tight text-accent md:text-3xl">{heading}</h3>
        {children}
      </div>
    </section>
  )
}

export function JP({ children }: { children: ReactNode }) {
  return <p className="font-display text-base leading-snug text-ink">{children}</p>
}

export function JImage({ src, alt = '', className = 'w-full' }: { src: string; alt?: string; className?: string }) {
  return <img src={withBase(src)} alt={alt} className={`rounded-lg object-cover ${className}`} />
}

export function JLink({ href, children }: { href: string; children: ReactNode }) {
  const resolvedHref = href.startsWith('/') ? withBase(href) : href
  return (
    <a href={resolvedHref} target="_blank" rel="noreferrer" className="hover:underline underline-offset-2">
      {children}
    </a>
  )
}

// For linking to another section within the same card (in-page anchor, no new tab).
export function JJump({ id, children }: { id: string; children: ReactNode }) {
  return (
    <a href={`#${id}`} className="hover:underline underline-offset-2">
      {children}
    </a>
  )
}
