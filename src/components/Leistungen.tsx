'use client'

import { useState } from 'react'
import { useBooking } from '@/context/BookingContext'
import { Reveal }     from './Reveal'
import { salonConfig } from '@/lib/config'

export function Leistungen() {
  const [activeId, setActiveId] = useState(salonConfig.leistungen[0].id)
  const { open } = useBooking()

  const active = salonConfig.leistungen.find(l => l.id === activeId)
    ?? salonConfig.leistungen[0]

  return (
    <section id="leistungen" className="bg-cream py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        {/* Header */}
        <Reveal className="mb-10">
          <p className="sec-label mb-3">Preisliste</p>
          <h2 className="font-display font-black text-[clamp(2.1rem,4vw,3.1rem)]
            leading-[1.05] tracking-[-0.01em]">
            Unsere Leistungen
          </h2>
          <p className="text-muted font-light text-[0.95rem] leading-[1.78] mt-2.5 max-w-[52ch]">
            Alle Preise auf einen Blick – keine versteckten Kosten.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={100} className="mb-6">
          <div className="flex flex-wrap gap-2" role="tablist">
            {salonConfig.leistungen.map((l) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={activeId === l.id}
                aria-controls={`panel-${l.id}`}
                onClick={() => setActiveId(l.id as typeof activeId)}
                className={[
                  'px-5 py-[0.55rem] text-[0.74rem] tracking-[0.1em] uppercase',
                  'rounded-full border-[1.5px] transition-all duration-200 cursor-pointer',
                  activeId === l.id
                    ? 'bg-brown text-cream border-brown'
                    : 'bg-transparent text-muted border-brown/20 hover:border-brown hover:text-brown',
                ].join(' ')}
              >
                {l.kategorie}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price list */}
        <Reveal delay={200}>
          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            className="border border-brown/10 rounded-2xl overflow-hidden"
          >
            {active.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-6 py-[1.05rem]
                  bg-white border-b border-brown/10 last:border-b-0
                  hover:bg-warm transition-colors duration-150 group"
              >
                <div>
                  <div className="font-medium text-[0.93rem] text-salon-text">
                    {item.name}
                  </div>
                  {item.tag && (
                    <span className="inline-block text-[0.68rem] text-muted bg-warm
                      px-2 py-[0.15rem] rounded-full mt-1 group-hover:bg-cream
                      transition-colors duration-150">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="font-display text-[1.25rem] font-bold text-rust
                  flex-shrink-0 ml-6">
                  {item.preis}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300} className="mt-10 flex items-center gap-5 flex-wrap">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-brown text-cream
              px-8 py-[0.9rem] text-[0.8rem] font-medium tracking-[0.1em] uppercase
              rounded-full shadow-[0_4px_16px_rgba(44,24,16,0.2)]
              hover:bg-brown-dark hover:-translate-y-0.5
              active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            Jetzt Termin buchen
          </button>
          <span className="text-[0.82rem] text-muted">
            Kein Anruf nötig – online in 60 Sek.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
