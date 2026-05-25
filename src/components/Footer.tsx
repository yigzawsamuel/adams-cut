import Link from 'next/link'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(250,247,242,0.07)] py-12 px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: '#0C0907' }}>
      <div className="max-w-salon mx-auto">

        {/* Top row */}
        <div className="flex flex-wrap justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <LogoSVG className="w-[36px] h-[42px] flex-shrink-0" />
            <div>
              <div className="font-display font-bold text-[1rem] text-cream tracking-[0.06em]">
                {salonConfig.name}
              </div>
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-muted mt-0.5">
                {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-3.5">Navigation</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              {[
                { href: '#leistungen',  label: 'Leistungen'  },
                { href: '#team',        label: 'Team'        },
                { href: '#bewertungen', label: 'Bewertungen' },
                { href: '#kontakt',     label: 'Kontakt'     },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href}
                    className="text-[0.85rem] text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-3.5">Rechtliches</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li>
                <Link href="/impressum"
                  className="text-[0.85rem] text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz"
                  className="text-[0.85rem] text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-3.5">Kontakt</div>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li>
                <a href={salonConfig.kontakt.telefonHref}
                  className="text-[0.85rem] text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200">
                  {salonConfig.kontakt.telefon}
                </a>
              </li>
              <li>
                <a href={salonConfig.kontakt.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="text-[0.85rem] text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200">
                  {salonConfig.kontakt.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-4
          pt-6 border-t border-[rgba(250,247,242,0.07)]">
          <p className="text-[0.75rem] text-[rgba(250,247,242,0.2)]">
            © {year} {salonConfig.name}. Alle Rechte vorbehalten.
          </p>
          <a
            href={salonConfig.kontakt.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(250,247,242,0.05)]
              flex items-center justify-center text-muted
              hover:bg-[rgba(212,160,23,0.12)] hover:text-gold transition-all duration-200"
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
