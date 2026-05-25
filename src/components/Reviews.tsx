import { salonConfig } from '@/lib/config'
import { Reveal }      from './Reveal'
import { CountUp }     from './CountUp'

export function Reviews() {
  const doubled = [...salonConfig.bewertungen, ...salonConfig.bewertungen]

  return (
    <section id="bewertungen" className="py-[clamp(5rem,10vw,7rem)] overflow-hidden"
      style={{ background: '#0C0907' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        {/* Header */}
        <Reveal className="mb-10 text-center">
          <p className="sec-label justify-center mb-4">Kundenstimmen</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] text-cream mb-3">
            Was Kunden <span className="text-gold">sagen</span>
          </h2>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={100} className="flex justify-center gap-16 mb-12">
          <div className="text-center">
            <div className="font-display font-black text-[2.8rem] text-cream leading-none">
              <CountUp from={4.0} to={5.0} decimal suffix=" ★" />
            </div>
            <div className="text-[0.68rem] tracking-[0.14em] uppercase text-muted mt-1.5">Ø Bewertung</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-[2.8rem] text-cream leading-none">
              <CountUp from={60} to={80} suffix="+" />
            </div>
            <div className="text-[0.68rem] tracking-[0.14em] uppercase text-muted mt-1.5">Bewertungen</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-[1.6rem] text-cream leading-none tracking-wide">
              Google
            </div>
            <div className="text-[0.68rem] tracking-[0.14em] uppercase text-muted mt-1.5">Plattform</div>
          </div>
        </Reveal>
      </div>

      {/* Scrolling reviews */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          maskImage:       'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
        aria-hidden="true"
      >
        <div className="flex gap-5 w-max animate-rev-mar py-2 px-8">
          {doubled.map((review, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[290px] rounded-[18px] p-6
                border border-[rgba(250,247,242,0.07)]"
              style={{ background: '#1A0E08' }}
            >
              <div className="text-gold text-[0.88rem] tracking-[0.04em] mb-3">
                {'★'.repeat(review.sterne)}
              </div>
              <p className="text-[0.85rem] text-[rgba(250,247,242,0.7)] leading-[1.75] italic mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="text-[0.8rem] font-medium text-cream">{review.autor}</div>
                <div className="text-[0.68rem] text-muted mt-0.5 tracking-[0.08em] uppercase">Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
