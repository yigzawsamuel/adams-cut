'use client'

import Link from 'next/link'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-12 px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: '#141414', borderColor: 'rgba(184,115,51,0.1)' }}>
      <div className="max-w-salon mx-auto">

        {/* Top row */}
        <div className="flex flex-wrap justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <LogoSVG className="w-[36px] h-[42px] flex-shrink-0" color="#B87333" />
            <div>
              <div className="font-display font-bold text-[1rem] tracking-[0.06em]"
                style={{ color: '#EDE8E1' }}>
                {salonConfig.name}
              </div>
              <div className="text-[0.62rem] tracking-[0.15em] uppercase mt-0.5"
                style={{ color: '#8A7E72' }}>
                {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase mb-3.5"
              style={{ color: '#8A7E72' }}>Navigation</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              {[
                { href: '#leistungen',  label: 'Leistungen'  },
                { href: '#team',        label: 'Team'        },
                { href: '#bewertungen', label: 'Bewertungen' },
                { href: '#kontakt',     label: 'Kontakt'     },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href}
                    className="text-[0.85rem] transition-colors duration-200 hover:text-[#B87333]"
                    style={{ color: 'rgba(237,232,225,0.4)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase mb-3.5"
              style={{ color: '#8A7E72' }}>Rechtliches</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li>
                <Link href="/impressum"
                  className="text-[0.85rem] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: 'rgba(237,232,225,0.4)' }}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz"
                  className="text-[0.85rem] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: 'rgba(237,232,225,0.4)' }}>
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase mb-3.5"
              style={{ color: '#8A7E72' }}>Kontakt</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li>
                <a href={salonConfig.kontakt.telefonHref}
                  className="text-[0.85rem] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: 'rgba(237,232,225,0.4)' }}>
                  {salonConfig.kontakt.telefon}
                </a>
              </li>
              <li>
                <a href={salonConfig.kontakt.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="text-[0.85rem] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: 'rgba(237,232,225,0.4)' }}>
                  {salonConfig.kontakt.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t"
          style={{ borderColor: 'rgba(184,115,51,0.08)' }}>
          <p className="text-[0.75rem]" style={{ color: 'rgba(237,232,225,0.2)' }}>
            © {year} {salonConfig.name}. Alle Rechte vorbehalten.
          </p>
          <a
            href={salonConfig.kontakt.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center
              transition-all duration-200"
            style={{ background: 'rgba(184,115,51,0.06)', border: '1px solid rgba(184,115,51,0.12)', color: '#8A7E72' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(184,115,51,0.15)'
              ;(e.currentTarget as HTMLElement).style.color = '#B87333'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(184,115,51,0.06)'
              ;(e.currentTarget as HTMLElement).style.color = '#8A7E72'
            }}
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
