'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useBooking } from '@/context/BookingContext'
import { LogoSVG } from './LogoSVG'
import { salonConfig } from '@/lib/config'

const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#team',       label: 'Team'       },
  { href: '#bewertungen',label: 'Bewertungen'},
  { href: '#kontakt',    label: 'Kontakt'    },
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

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={[
          'fixed inset-x-0 top-0 z-[100] h-[72px]',
          'flex items-center justify-between',
          'px-[clamp(1.5rem,5vw,4rem)]',
          'border-b border-[rgba(250,247,242,0.07)]',
          'transition-all duration-300',
          scrolled
            ? 'bg-[rgba(12,9,7,0.97)] backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(12,9,7,0.88)] backdrop-blur-xl',
        ].join(' ')}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label={salonConfig.name}>
          <LogoSVG className="w-[36px] h-[42px] flex-shrink-0" />
          <div>
            <div className="font-display font-bold text-[1.05rem] leading-tight text-cream">
              {salonConfig.name}
            </div>
            <div className="font-sans text-[0.58rem] font-normal tracking-[0.18em] uppercase text-muted mt-0.5">
              {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-[0.73rem] tracking-[0.1em] uppercase
                  text-[rgba(250,247,242,0.45)] hover:text-cream transition-colors duration-200 group/link"
              >
                {label}
                <span className="absolute -bottom-[3px] left-0 right-0 h-[1.5px]
                  bg-gold origin-left scale-x-0 group-hover/link:scale-x-100
                  transition-transform duration-250 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className="hidden md:block bg-gold text-[#0C0907]
              px-6 py-[0.58rem] text-[0.73rem] font-semibold tracking-[0.08em] uppercase
              rounded-full transition-all duration-200 cursor-pointer
              hover:brightness-110 hover:-translate-y-px active:scale-95"
          >
            Termin buchen
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 cursor-pointer"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={[
                  'block w-[22px] h-[1.5px] bg-cream rounded-full transition-all duration-300 origin-center',
                  i === 0 && mobileOpen ? 'rotate-45 translate-y-[7px]'  : '',
                  i === 1 && mobileOpen ? 'opacity-0 scale-x-0'           : '',
                  i === 2 && mobileOpen ? '-rotate-45 -translate-y-[7px]' : '',
                ].join(' ')}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] inset-x-0 z-[99]
          bg-[#1A0E08] border-b border-[rgba(250,247,242,0.07)]
          px-[clamp(1.5rem,5vw,4rem)] pt-5 pb-6
          flex flex-col gap-4 animate-slide-down">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-[0.9rem] tracking-[0.1em] uppercase text-muted
                py-2 border-b border-[rgba(250,247,242,0.07)] last:border-b-0"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => { closeMenu(); open() }}
            className="mt-1 text-center bg-gold text-[#0C0907] py-3.5 rounded-full
              text-[0.8rem] font-semibold tracking-[0.08em] uppercase cursor-pointer"
          >
            Termin buchen
          </button>
        </div>
      )}
    </>
  )
}
