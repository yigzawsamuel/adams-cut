import { ScrollProgress }           from '@/components/ScrollProgress'
import { FloatingPill }              from '@/components/FloatingPill'
import { Navbar }                    from '@/components/Navbar'
import { Hero }                      from '@/components/Hero'
import { Strip }                     from '@/components/Strip'
import { Leistungen }                from '@/components/Leistungen'
import { Team }                      from '@/components/Team'
import { Buchung }                   from '@/components/Buchung'
import { Reviews }                   from '@/components/Reviews'
import { Galerie }                   from '@/components/Galerie'
import { OeffnungszeitenKontakt }    from '@/components/OeffnungszeitenKontakt'
import { Footer }                    from '@/components/Footer'
import { BookingModal }              from '@/components/BookingModal'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingPill />
      <Navbar />
      <main>
        <Hero />        {/* dark  — Hex-LED-Intro */}
        <Strip />       {/* dark  — Ticker */}
        <Leistungen />  {/* light — Preisliste */}
        <Team />        {/* dark  — Team-Cards */}
        <Buchung />     {/* light — Online buchen */}
        <Reviews />     {/* dark  — Kundenstimmen */}
        <Galerie />     {/* dark  — Foto-Galerie */}
        <OeffnungszeitenKontakt /> {/* light — Kontakt + Öffnungszeiten */}
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}
