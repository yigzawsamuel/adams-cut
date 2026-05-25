import { Reveal }      from './Reveal'
import { LogoSVG }     from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Team() {
  return (
    <section id="team" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#181D2E' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <Reveal className="mb-12 text-center">
          <p className="sec-label justify-center mb-4">
            <span style={{ color: 'rgba(61,158,191,0.4)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>02</span>
            Das Team
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] mb-3" style={{ color: '#EEF2F7' }}>
            Meister <span className="steel-text">ihres Fachs</span>
          </h2>
          <p className="text-[0.93rem] leading-[1.85] max-w-[50ch] mx-auto"
            style={{ color: '#7A8BA0' }}>
            Erfahrene Profis mit Leidenschaft für Präzision und Stil.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6">
          {salonConfig.team.map((member, i) => (
            <Reveal key={i} delay={i * 120}>
              <article
                className="rounded-[20px] overflow-hidden glow-card"
                style={{
                  background: '#1C2235',
                  border: '1px solid rgba(238,242,247,0.06)',
                }}
              >
                {/* Photo with clip-path reveal */}
                <div className="aspect-[3/4] relative overflow-hidden clip-photo"
                  style={{ background: 'linear-gradient(145deg,#1C2235 0%,#141824 60%,#1A202E 100%)' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                    <LogoSVG className="w-[42px] h-[49px]" color="rgba(61,158,191,0.1)" />
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase"
                      style={{ color: 'rgba(238,242,247,0.15)' }}>
                      Foto einfügen
                    </span>
                  </div>
                </div>

                <div className="px-5 pt-4 pb-5">
                  <div className="font-display font-bold text-[1.1rem] mb-1"
                    style={{ color: '#EEF2F7' }}>
                    {member.name}
                  </div>
                  <div className="text-[0.68rem] tracking-[0.12em] uppercase font-medium mb-2"
                    style={{ color: '#3D9EBF' }}>
                    {member.rolle}
                  </div>
                  <div className="text-[0.82rem] leading-[1.6]" style={{ color: '#7A8BA0' }}>
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
