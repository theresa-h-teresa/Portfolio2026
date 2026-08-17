import { workSamples, type WorkSample } from '../../data/journalism'
import { withBase } from '../../lib/url'

export function WorkSampleCard({ sample }: { sample: WorkSample }) {
  const Wrapper = sample.href ? 'a' : 'div'

  return (
    <Wrapper
      {...(sample.href ? { href: sample.href, target: '_blank', rel: 'noreferrer' } : {})}
      className={`group flex flex-col gap-3 rounded-[10px] border border-ink p-4 transition-colors duration-200 hover:bg-highlight-bg ${sample.href ? 'cursor-pointer' : ''}`}
    >
      <div>
        <h3 className="font-display text-sm font-medium text-ink transition-colors duration-200 group-hover:text-accent">
          {sample.headline}
        </h3>
        <p className="mt-1 font-display text-xs text-ink">{sample.outlet}</p>
        <p className="font-display text-xs text-ink-soft">{sample.date}</p>
        <p className="font-display text-xs italic text-ink-soft">{sample.category}</p>
      </div>
      {sample.image && (
        <img
          src={withBase(sample.image)}
          alt=""
          className="h-[123px] w-full rounded-[10px] object-cover"
        />
      )}
    </Wrapper>
  )
}

export function WorkSamples() {
  return (
    <>
      {workSamples.map((sample) => (
        <WorkSampleCard key={sample.headline} sample={sample} />
      ))}
    </>
  )
}
