'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useBooking } from '@/context/BookingContext'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'

const NAV_LINKS = [
  { href: '#leistungen',  label: 'Leistungen'  },
  { href: '#team',        label: 'Team'        },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#kontakt',     label: 'Kontakt'     },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-[100] h-[72px] flex items-center justify-between
          px-[clamp(1.5rem,5vw,4rem)] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(20,24,36,0.97)' : 'rgba(20,24,36,0.88)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(238,242,247,0.06)',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label={salonConfig.name}>
          <LogoSVG className="w-[34px] h-[40px] flex-shrink-0" color="#3D9EBF" />
          <div>
            <div className="font-display font-bold text-[1.05rem] leading-tight" style={{ color: '#EEF2F7' }}>
              {salonConfig.name}
            </div>
            <div className="text-[0.58rem] tracking-[0.18em] uppercase mt-0.5"
              style={{ color: '#7A8BA0' }}>
              {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}
                className="relative text-[0.73rem] tracking-[0.1em] uppercase
                  transition-colors duration-200 group/link"
                style={{ color: 'rgba(238,242,247,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#EEF2F7')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(238,242,247,0.4)')}
              >
                {label}
                <span className="absolute -bottom-[3px] left-0 right-0 h-[1.5px] origin-left
                  scale-x-0 group-hover/link:scale-x-100 transition-transform duration-250 ease-out"
                  style={{ background: '#3D9EBF' }} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className="hidden md:block cursor-pointer
              active:scale-95 transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #3D9EBF, #5FBAD4)',
              color: '#141824',
              padding: '0.58rem 1.5rem',
              fontSize: '0.73rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
            }}
          >
            Termin buchen
          </button>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 cursor-pointer"
            aria-label="Menü"
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span key={i}
                className={[
                  'block w-[22px] h-[1.5px] rounded-full transition-all duration-300 origin-center',
                  i === 0 && mobileOpen ? 'rotate-45 translate-y-[7px]'  : '',
                  i === 1 && mobileOpen ? 'opacity-0 scale-x-0'           : '',
                  i === 2 && mobileOpen ? '-rotate-45 -translate-y-[7px]' : '',
                ].join(' ')}
                style={{ background: '#EEF2F7' }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[72px] inset-x-0 z-[99]
            px-[clamp(1.5rem,5vw,4rem)] pt-5 pb-6 flex flex-col gap-4 animate-slide-down"
          style={{
            background: '#1C2235',
            borderBottom: '1px solid rgba(238,242,247,0.06)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] tracking-[0.1em] uppercase py-2
                border-b border-[rgba(238,242,247,0.06)] last:border-b-0"
              style={{ color: '#7A8BA0' }}>
              {label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); open() }}
            className="mt-1 text-center py-3.5 rounded-full
              text-[0.8rem] font-semibold tracking-[0.08em] uppercase cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#3D9EBF,#5FBAD4)', color: '#141824' }}
          >
            Termin buchen
          </button>
        </div>
      )}
    </>
  )
}
