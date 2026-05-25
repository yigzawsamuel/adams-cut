import { Reveal }      from './Reveal'
import { salonConfig } from '@/lib/config'

export function Team() {
  return (
    <section id="team" className="bg-warm py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        {/* Header */}
        <Reveal className="mb-12">
          <p className="sec-label mb-3">Das Team</p>
          <h2 className="font-display font-black text-[clamp(2.1rem,4vw,3.1rem)]
            leading-[1.05] tracking-[-0.01em]">
            Eure Barber
          </h2>
          <p className="text-muted font-light text-[0.95rem] leading-[1.78] mt-2.5">
            Erfahrene Profis mit Leidenschaft fürs Handwerk.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6">
          {salonConfig.team.map((member, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="bg-white rounded-[20px] overflow-hidden
                shadow-[0_4px_24px_rgba(44,24,16,0.06)]
                hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(44,24,16,0.12)]
                transition-all duration-300 ease-out group">

                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[#E8DCC8] to-[#D4C4A8]
                  relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    {/* Silhouette icon */}
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                      className="opacity-[0.18]" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="#2C1810" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="7" r="4"
                        stroke="#2C1810" strokeWidth="1.5" />
                    </svg>
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase
                      text-brown-dark opacity-35">
                      Foto einfügen
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 pt-4 pb-5">
                  <div className="font-display font-bold text-[1.1rem] text-salon-text mb-1">
                    {member.name}
                  </div>
                  <div className="text-[0.68rem] tracking-[0.12em] uppercase
                    text-rust font-medium mb-2">
                    {member.rolle}
                  </div>
                  <div className="text-[0.82rem] text-muted leading-[1.6]">
                    {member.spezialisierung}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
