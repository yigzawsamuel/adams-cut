import { salonConfig } from '@/lib/config'
import { Reveal }      from './Reveal'

export function Reviews() {
  const doubled = [...salonConfig.bewertungen, ...salonConfig.bewertungen]

  return (
    <section id="reviews" className="bg-cream py-[clamp(4rem,8vw,7rem)] overflow-hidden">
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal className="mb-10">
          <p className="sec-label mb-3">Bewertungen</p>
          <h2 className="font-display font-black text-[clamp(2.1rem,4vw,3.1rem)]
            leading-[1.05] tracking-[-0.01em]">
            Was Kunden sagen
          </h2>
          <p className="text-muted font-light text-[0.95rem] mt-2.5">
            {salonConfig.bewertung.durchschnitt} ★ · {salonConfig.bewertung.anzahl} Bewertungen auf Google
          </p>
        </Reveal>
      </div>

      {/* Scrolling track */}
      <div className="marquee-wrap overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-5 w-max animate-marquee-slow py-2 px-[clamp(1.5rem,5vw,4rem)]">
          {doubled.map((review, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[295px] bg-white border border-brown/10
                rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,24,16,0.05)]"
            >
              <div className="text-gold text-[0.82rem] tracking-[0.04em] mb-3.5">
                {'★'.repeat(review.sterne)}
              </div>
              <p className="text-[0.87rem] text-muted leading-[1.72] italic mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="text-[0.8rem] font-semibold text-brown">
                  {review.autor}
                </div>
                <div className="text-[0.7rem] text-muted mt-0.5">Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
