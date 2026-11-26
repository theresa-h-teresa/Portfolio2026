import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { withBase } from '../../../lib/url'
import { PlaceholderImage } from '../../PlaceholderImage'

// Shared building blocks for project case-study cards (Sound Clouds, Job Mama, …).

export function ToolButton({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[10px] border border-[#d9d9d9] bg-white px-3 py-2 text-xs text-ink shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)]">
      {label}
    </span>
  )
}

export function SkillGroup({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 font-display text-3xl font-normal text-[#72b0c9]">{heading}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <ToolButton key={item} label={item} />
        ))}
      </div>
    </div>
  )
}

/** An external link or public file in a case study, styled in the site's orange accent. */
export function CaseLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href.startsWith('/') ? withBase(href) : href}
      target="_blank"
      rel="noreferrer"
      className="w-fit font-display text-base text-accent"
    >
      {children}
    </a>
  )
}

/** An image in a case study; the caption shows under the thumbnail and in the lightbox. */
export interface CaseImage {
  src: string
  caption?: string
  /** Optional smaller/cropped image for the grid; the lightbox always opens `src`. */
  thumb?: string
}

/** A non-image cell in the grid, e.g. a paragraph placed beside an image. */
export interface GridText {
  key: string
  content: ReactNode
}

/** A labeled stand-in shown until the real image is added to public/. Not clickable. */
export interface GridPlaceholder {
  placeholder: string
  caption?: string
}

/** Plain paths are accepted for images without captions. */
export type CaseImageInput = string | CaseImage | GridText | GridPlaceholder

const isGridText = (item: CaseImageInput): item is GridText => typeof item !== 'string' && 'content' in item
const isPlaceholder = (item: CaseImageInput): item is GridPlaceholder =>
  typeof item !== 'string' && 'placeholder' in item
const toCaseImage = (img: string | CaseImage): CaseImage => (typeof img === 'string' ? { src: img } : img)

/** `contain` letterboxes the whole image (for posters/diagrams); `cover` crops to fill. */
export type ImageFit = 'cover' | 'contain'

export function ImageGrid({
  images,
  onImageClick,
  fit = 'cover',
  columns = 2,
}: {
  images: CaseImageInput[]
  onImageClick: (image: CaseImage) => void
  fit?: ImageFit
  columns?: 1 | 2
}) {
  const fitClass = fit === 'contain' ? 'object-contain bg-white border border-ink/10' : 'object-cover'
  return (
    <div className={`grid gap-4 ${columns === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {images.map((item) => {
        if (isGridText(item)) {
          return (
            <div key={item.key} className="flex flex-col gap-2.5">
              {item.content}
            </div>
          )
        }
        if (isPlaceholder(item)) {
          return (
            <figure key={item.placeholder} className="m-0 flex flex-col gap-1.5">
              <div className="relative aspect-[8/5] w-full">
                <PlaceholderImage className="absolute inset-0 h-full w-full" />
                <span className="absolute inset-0 flex items-center justify-center p-3 text-center font-mono text-xs text-ink/50">
                  <span className="rounded bg-white/85 px-2 py-1">{item.placeholder}</span>
                </span>
              </div>
              {item.caption && (
                <figcaption className="font-display text-xs leading-snug text-ink/60">{item.caption}</figcaption>
              )}
            </figure>
          )
        }
        const image = toCaseImage(item)
        return (
          <figure key={image.src} className="m-0 flex flex-col gap-1.5">
            <img
              src={withBase(image.thumb ?? image.src)}
              alt={image.caption ?? ''}
              onClick={() => onImageClick(image)}
              className={`aspect-[8/5] w-full cursor-pointer rounded-lg transition-opacity hover:opacity-90 ${fitClass}`}
            />
            {image.caption && (
              <figcaption className="font-display text-xs leading-snug text-ink/60">{image.caption}</figcaption>
            )}
          </figure>
        )
      })}
    </div>
  )
}

export function ImageLightbox({ image, onClose }: { image: CaseImage; onClose: () => void }) {
  // Escape closes only the enlarged image, not the case-study card underneath it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      e.stopImmediatePropagation()
      onClose()
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption ?? 'Enlarged image'}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/85 px-4 pb-4 pt-16 md:px-10 md:pb-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image"
        className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg ring-2 ring-black/20 transition-transform hover:scale-105 md:right-6 md:top-6"
      >
        <X className="h-6 w-6" strokeWidth={2.5} />
      </button>
      <img
        src={withBase(image.src)}
        alt={image.caption ?? ''}
        onClick={(e) => e.stopPropagation()}
        className="min-h-0 max-w-full flex-1 rounded-lg object-contain shadow-2xl"
      />
      {image.caption && (
        <p
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl shrink-0 text-center font-display text-sm leading-snug text-white/85"
        >
          {image.caption}
        </p>
      )}
    </div>
  )
}

export function CaseStudySection({
  id,
  heading,
  divider = true,
  images,
  fit,
  imageColumn = false,
  onImageClick,
  belowImages,
  footer,
  children,
}: {
  id: string
  heading: string
  divider?: boolean
  images: CaseImageInput[]
  fit?: ImageFit
  /** Stack the images in one column on the right third, giving the text the other two thirds. */
  imageColumn?: boolean
  onImageClick: (image: CaseImage) => void
  belowImages?: ReactNode
  footer?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} className={`scroll-mt-4 ${divider ? 'border-t border-ink/10 pt-6' : ''}`}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className={imageColumn ? 'md:min-w-0 md:flex-[2]' : 'md:w-60 md:shrink-0'}>
          <h3 className="mb-3 font-display text-xl font-normal text-accent">{heading}</h3>
          <div className="flex flex-col gap-2.5">{children}</div>
        </div>
        <div className={`flex flex-col gap-4 ${imageColumn ? 'md:min-w-0 md:flex-1' : 'flex-1'}`}>
          <ImageGrid images={images} onImageClick={onImageClick} fit={fit} columns={imageColumn ? 1 : 2} />
          {belowImages}
        </div>
      </div>
      {footer && <div className="mt-4 flex flex-col gap-4">{footer}</div>}
    </section>
  )
}
