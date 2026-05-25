import { salonConfig } from '@/lib/config'
import { Reveal }      from './Reveal'
import { CountUp }     from './CountUp'

export function Reviews() {
  const doubled = [...salonConfig.bewertungen, ...salonConfig.bewertungen]

  return (
    <section id="bewertungen" className="py-[clamp(5rem,10vw,7rem)] overflow-hidden"
      style={{ background: '#141824' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <Reveal className="mb-10 text-center">
          <p className="sec-label justify-center mb-4">
            <span style={{ color: 'rgba(61,158,191,0.4)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>04</span>
            Kundenstimmen
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1]" style={{ color: '#EEF2F7' }}>
            Was Kunden <span className="steel-text">sagen</span>
          </h2>
        </Reveal>

        {/* Stats */}
        <Reveal delay={100} className="flex justify-center gap-16 mb-14">
          {[
            { num: <CountUp from={4.0} to={5.0} decimal suffix=" ★" />, label: 'Ø Bewertung' },
            { num: <CountUp from={60}  to={80}  suffix="+"          />, label: 'Bewertungen' },
            { num: <span>Google</span>,                                  label: 'Plattform'   },
          ].map(({ num, label }, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-black leading-none"
                style={{ fontSize: i < 2 ? '2.8rem' : '1.6rem', color: '#EEF2F7' }}>
                {num}
              </div>
              <div className="text-[0.68rem] tracking-[0.14em] uppercase mt-1.5"
                style={{ color: '#7A8BA0' }}>
                {label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg,transparent,black 8%,black 92%,transparent)',
          maskImage:       'linear-gradient(90deg,transparent,black 8%,black 92%,transparent)',
        }}
        aria-hidden="true"
      >
        <div className="flex gap-5 w-max animate-rev-mar py-2 px-8">
          {doubled.map((review, i) => (
            <article key={i}
              className="flex-shrink-0 w-[290px] rounded-[18px] p-6 glow-card"
              style={{
                background: '#1C2235',
                border: '1px solid rgba(238,242,247,0.06)',
              }}
            >
              {/* Quote mark */}
              <div className="font-display text-[2.5rem] leading-none mb-1"
                style={{ color: 'rgba(61,158,191,0.2)' }}>&ldquo;</div>
              <div className="text-[0.88rem] tracking-[0.04em] mb-3"
                style={{ color: '#3D9EBF' }}>
                {'★'.repeat(review.sterne)}
              </div>
              <p className="text-[0.85rem] leading-[1.75] italic mb-4"
                style={{ color: 'rgba(238,242,247,0.65)' }}>
                {review.text}
              </p>
              <div>
                <div className="text-[0.8rem] font-medium" style={{ color: '#EEF2F7' }}>
                  {review.autor}
                </div>
                <div className="text-[0.68rem] tracking-[0.08em] uppercase mt-0.5"
                  style={{ color: '#7A8BA0' }}>Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
