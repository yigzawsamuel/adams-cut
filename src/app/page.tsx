import { ScrollProgress }           from '@/components/ScrollProgress'
import { Navbar }                    from '@/components/Navbar'
import { Hero }                      from '@/components/Hero'
import { Strip }                     from '@/components/Strip'
import { Leistungen }                from '@/components/Leistungen'
import { Team }                      from '@/components/Team'
import { Buchung }                   from '@/components/Buchung'
import { Reviews }                   from '@/components/Reviews'
import { OeffnungszeitenKontakt }    from '@/components/OeffnungszeitenKontakt'
import { Footer }                    from '@/components/Footer'
import { BookingModal }              from '@/components/BookingModal'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Leistungen />
        <Team />
        <Buchung />
        <Reviews />
        <OeffnungszeitenKontakt />
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}
