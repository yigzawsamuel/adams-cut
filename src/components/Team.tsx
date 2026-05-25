import { Reveal }      from './Reveal'
import { LogoSVG }     from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Team() {
  return (
    <section id="team" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#100804' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        {/* Header */}
        <Reveal className="mb-12 text-center">
          <p className="sec-label justify-center mb-4">Das Team</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] tracking-[-0.01em] text-cream mb-3">
            Meister <span className="text-gold">ihres Fachs</span>
          </h2>
          <p className="text-muted text-[0.93rem] leading-[1.85] max-w-[50ch] mx-auto">
            Erfahrene Profis mit Leidenschaft für Präzision und Stil.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6">
          {salonConfig.team.map((member, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="rounded-[20px] overflow-hidden border border-[rgba(250,247,242,0.07)]
                hover:-translate-y-1.5 transition-transform duration-300 ease-out"
                style={{ background: '#1A0E08' }}>

                {/* Photo with clip-path reveal */}
                <div className="aspect-[3/4] relative overflow-hidden clip-photo"
                  style={{ background: 'linear-gradient(145deg, #1A0E08 0%, #0C0602 60%, #1A0C06 100%)' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                    <LogoSVG className="w-[42px] h-[49px] opacity-10" />
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase text-cream opacity-20">
                      Foto einfügen
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 pt-4 pb-5">
                  <div className="font-display font-bold text-[1.1rem] text-cream mb-1">
                    {member.name}
                  </div>
                  <div className="text-[0.68rem] tracking-[0.12em] uppercase text-gold font-medium mb-2">
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
