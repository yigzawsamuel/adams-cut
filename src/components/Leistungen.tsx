'use client'

import { useState } from 'react'
import { useBooking } from '@/context/BookingContext'
import { Reveal }     from './Reveal'
import { salonConfig } from '@/lib/config'

export function Leistungen() {
  const [activeId, setActiveId] = useState(salonConfig.leistungen[0].id)
  const { open } = useBooking()

  const active = salonConfig.leistungen.find(l => l.id === activeId) ?? salonConfig.leistungen[0]

  return (
    <section id="leistungen" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#F7F4F0' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <Reveal className="mb-10">
          <p className="sec-label mb-4">
            <span style={{ color: 'rgba(184,115,51,0.5)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>01</span>
            Preisliste
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] mb-3" style={{ color: '#1A1510' }}>
            Unsere <span className="copper-text">Leistungen</span>
          </h2>
          <p className="text-[0.93rem] leading-[1.85] max-w-[52ch]" style={{ color: '#6B5E54' }}>
            Alle Preise auf einen Blick – keine versteckten Kosten.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={100} className="mb-6">
          <div className="flex border-b" style={{ borderColor: 'rgba(28,21,16,0.12)' }} role="tablist">
            {salonConfig.leistungen.map((l) => (
              <button key={l.id} role="tab"
                aria-selected={activeId === l.id}
                onClick={() => setActiveId(l.id as typeof activeId)}
                className="relative px-7 py-[0.9rem] text-[0.78rem] tracking-[0.08em]
                  uppercase transition-colors duration-200 cursor-pointer font-sans"
                style={{ color: activeId === l.id ? '#1A1510' : '#8A7E72' }}
              >
                {l.kategorie}
                {activeId === l.id && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px]"
                    style={{ background: '#B87333' }} />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price list */}
        <Reveal delay={200}>
          <div id={`panel-${active.id}`} role="tabpanel">
            {active.items.map((item, i) => (
              <div key={i}
                className="flex justify-between items-center py-[1.1rem] cursor-default group"
                style={{ borderBottom: '1px solid rgba(28,21,16,0.07)' }}
              >
                <div>
                  <div className="text-[0.93rem]" style={{ color: '#1A1510' }}>{item.name}</div>
                  {item.tag && (
                    <div className="text-[0.75rem] mt-0.5" style={{ color: '#6B5E54' }}>{item.tag}</div>
                  )}
                </div>
                <div className="relative font-display font-bold text-[1.05rem]
                  flex-shrink-0 ml-6 transition-colors duration-200"
                  style={{ color: 'rgba(28,21,16,0.35)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#B87333')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(28,21,16,0.35)')}
                >
                  {item.preis}
                  <span className="absolute -bottom-[2px] left-0 right-0 h-[1.5px] origin-left
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out"
                    style={{ background: '#B87333' }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-10 flex items-center gap-5 flex-wrap">
          <button onClick={open}
            className="inline-flex items-center gap-2 cursor-pointer
              active:scale-95 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#B87333,#D4945A)',
              color: '#FFFFFF',
              padding: '0.9rem 2rem',
              fontSize: '0.79rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
              boxShadow: '0 4px 20px rgba(184,115,51,0.3)',
            }}>
            Jetzt Termin buchen
          </button>
          <span className="text-[0.82rem]" style={{ color: '#8A7E72' }}>
            Kein Anruf nötig – online in 60 Sek.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
