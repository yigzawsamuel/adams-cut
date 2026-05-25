import { Reveal } from './Reveal'

export function Galerie() {
  return (
    <section id="galerie" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#141414' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <Reveal className="mb-10">
          <p className="sec-label mb-4">
            <span style={{ color: 'rgba(184,115,51,0.4)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>05</span>
            Der Laden
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1]"
            style={{ color: '#EDE8E1' }}>
            Unser <span className="copper-text">Barbershop</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          {/* Mosaic: hex-ceiling photo left (tall), two smaller right */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3 md:gap-4">

            {/* Left – hex-ceiling interior (tallest) */}
            <div className="relative rounded-[18px] overflow-hidden group"
              style={{ minHeight: '460px' }}>
              <img
                src="/galerie/3.jpg"
                alt="Innenraum mit Waben-LED-Decke"
                className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(20,20,20,0.55) 0%, transparent 50%)' }} />
              <div className="absolute bottom-5 left-6">
                <p className="text-[0.68rem] tracking-[0.15em] uppercase mb-0.5"
                  style={{ color: 'rgba(237,232,225,0.55)' }}>Innenraum</p>
                <p className="font-display font-bold text-[1.05rem]"
                  style={{ color: '#EDE8E1' }}>Drei Stationen</p>
              </div>
            </div>

            {/* Right – two stacked */}
            <div className="flex flex-col gap-3 md:gap-4">

              {/* Single barber station */}
              <div className="relative rounded-[18px] overflow-hidden group flex-1"
                style={{ minHeight: '220px' }}>
                <img
                  src="/galerie/1.jpg"
                  alt="Barber Station mit Rundspiegel"
                  className="absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 55%)' }} />
                <div className="absolute bottom-4 left-5">
                  <p className="text-[0.68rem] tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(237,232,225,0.55)' }}>Barber Station</p>
                </div>
              </div>

              {/* Exterior facade */}
              <div className="relative rounded-[18px] overflow-hidden group flex-1"
                style={{ minHeight: '220px' }}>
                <img
                  src="/galerie/2.jpg"
                  alt="Eingang Adam Cut Barbershop"
                  className="absolute inset-0 w-full h-full object-cover object-top
                    transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 55%)' }} />
                <div className="absolute bottom-4 left-5">
                  <p className="text-[0.68rem] tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(237,232,225,0.55)' }}>Eingang · München Sendling</p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
