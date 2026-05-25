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
    <section id="leistungen" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#0C0907' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        {/* Header */}
        <Reveal className="mb-10">
          <p className="sec-label mb-4">Preisliste</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] tracking-[-0.01em] text-cream mb-3">
            Unsere <span className="text-gold">Leistungen</span>
          </h2>
          <p className="text-muted text-[0.93rem] leading-[1.85] max-w-[52ch]">
            Alle Preise auf einen Blick – keine versteckten Kosten.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={100} className="mb-6">
          <div className="flex border-b border-[rgba(250,247,242,0.07)]" role="tablist">
            {salonConfig.leistungen.map((l) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={activeId === l.id}
                aria-controls={`panel-${l.id}`}
                onClick={() => setActiveId(l.id as typeof activeId)}
                className={[
                  'relative px-7 py-[0.9rem] text-[0.78rem] tracking-[0.08em] uppercase',
                  'transition-colors duration-200 cursor-pointer font-sans',
                  activeId === l.id ? 'text-cream' : 'text-muted hover:text-cream',
                ].join(' ')}
              >
                {l.kategorie}
                {activeId === l.id && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price list */}
        <Reveal delay={200}>
          <div id={`panel-${active.id}`} role="tabpanel">
            {active.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-[1.1rem]
                  border-b border-[rgba(250,247,242,0.07)] last:border-b-0
                  group cursor-default"
              >
                <div>
                  <div className="text-[0.93rem] text-cream">{item.name}</div>
                  {item.tag && (
                    <div className="text-[0.75rem] text-muted mt-0.5">{item.tag}</div>
                  )}
                </div>
                {/* Price with underline on hover */}
                <div className="relative font-display font-bold text-[1.05rem]
                  text-[rgba(250,247,242,0.55)] group-hover:text-gold
                  transition-colors duration-200 flex-shrink-0 ml-6">
                  {item.preis}
                  <span className="absolute -bottom-[2px] left-0 right-0 h-[1.5px] bg-gold
                    origin-left scale-x-0 group-hover:scale-x-100
                    transition-transform duration-250 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300} className="mt-10 flex items-center gap-5 flex-wrap">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-gold text-[#0C0907]
              px-8 py-[0.9rem] text-[0.79rem] font-semibold tracking-[0.08em] uppercase
              rounded-full shadow-[0_4px_20px_rgba(212,160,23,0.25)]
              hover:brightness-110 hover:-translate-y-0.5
              active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Jetzt Termin buchen
          </button>
          <span className="text-[0.82rem] text-muted">Kein Anruf nötig – online in 60 Sek.</span>
        </Reveal>
      </div>
    </section>
  )
}
