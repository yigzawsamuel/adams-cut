import Link from 'next/link'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brown py-8 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-salon mx-auto flex flex-wrap items-center
        justify-between gap-4 text-[rgba(250,247,242,0.55)]">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 42 42" fill="none" aria-hidden="true">
            <circle cx="21" cy="21" r="21" fill="rgba(250,247,242,0.15)" />
            <path d="M14 12 L28 30 M28 12 L14 30"
              stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="14" cy="12" r="2" fill="white" />
            <circle cx="28" cy="12" r="2" fill="white" />
            <circle cx="14" cy="30" r="2" fill="white" />
            <circle cx="28" cy="30" r="2" fill="white" />
          </svg>
          <div>
            <div className="font-display font-bold text-[1.05rem] text-cream leading-tight">
              {salonConfig.name}
            </div>
            <div className="text-[0.58rem] tracking-[0.18em] uppercase
              text-[rgba(250,247,242,0.3)] font-light mt-0.5">
              {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
            </div>
          </div>
        </div>

        {/* Links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex gap-6 list-none p-0 m-0">
            {[
              { href: '/impressum',   label: 'Impressum'   },
              { href: '/datenschutz', label: 'Datenschutz' },
              { href: salonConfig.kontakt.instagramUrl, label: 'Instagram', external: true },
            ].map(({ href, label, external }) => (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] tracking-[0.1em] uppercase
                      hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="text-[0.7rem] tracking-[0.1em] uppercase
                      hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-[0.7rem]">
          © {year} {salonConfig.name}
        </p>
      </div>
    </footer>
  )
}
