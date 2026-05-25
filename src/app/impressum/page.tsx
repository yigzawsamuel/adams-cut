import type { Metadata } from 'next'
import Link from 'next/link'
import { salonConfig } from '@/lib/config'
import { LogoSVG }     from '@/components/LogoSVG'

export const metadata: Metadata = {
  title:  `Impressum – ${salonConfig.name}`,
  robots: { index: false },
}

export default function Impressum() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Minimal nav */}
      <nav className="fixed inset-x-0 top-0 z-[100] h-[68px]
        flex items-center justify-between
        px-[clamp(1.5rem,5vw,4rem)]
        bg-[rgba(250,247,242,0.97)] backdrop-blur-[14px]
        border-b border-[#2C1810]/10"
        style={{ background: 'rgba(250,247,242,0.97)' }}>
        <Link href="/" className="flex items-center gap-2.5">
          <LogoSVG className="w-[30px] h-[30px]" />
          <span className="font-display font-bold text-[1.05rem] text-salon-text">
            {salonConfig.name}
          </span>
        </Link>
        <Link
          href="/"
          className="text-[0.73rem] tracking-[0.1em] uppercase text-muted
            hover:text-rust transition-colors duration-200"
        >
          ← Zurück
        </Link>
      </nav>

      <main className="max-w-[720px] mx-auto
        px-[clamp(1.5rem,5vw,4rem)]
        pt-[calc(68px+4rem)] pb-24
        text-[#1A0F08]"
        style={{ background: '#FAF7F2', minHeight: '100vh' }}>

        <h1 className="font-display text-[2.5rem] font-bold text-salon-text mb-10">
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>
            {salonConfig.inhaber}<br />
            {salonConfig.name}<br />
            {salonConfig.adresse.strasse}<br />
            {salonConfig.adresse.plz} {salonConfig.adresse.stadt}
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            Telefon: {salonConfig.kontakt.telefon}<br />
            E-Mail: {salonConfig.kontakt.email}
          </p>
        </Section>

        <Section title="Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            {salonConfig.ustId}
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
          <p>
            {salonConfig.inhaber}<br />
            {salonConfig.adresse.strasse}<br />
            {salonConfig.adresse.plz} {salonConfig.adresse.stadt}
          </p>
        </Section>

        <Section title="Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
            oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>
        </Section>
      </main>

      <footer className="bg-brown text-[rgba(250,247,242,0.5)]
        px-[clamp(1.5rem,5vw,4rem)] py-5 text-[0.72rem]
        flex justify-between flex-wrap gap-2">
        <span>© {year} {salonConfig.name} München</span>
        <span className="flex gap-4">
          <Link href="/impressum"   className="hover:text-white transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
        </span>
      </footer>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-8 mt-8 border-t border-brown/10 first-of-type:border-t-0
      first-of-type:pt-0 first-of-type:mt-0">
      <h2 className="font-display font-bold text-[1.1rem] text-rust mb-3">
        {title}
      </h2>
      <div className="text-muted font-light leading-[1.8] text-[0.95rem] [&_p]:mb-2">
        {children}
      </div>
    </section>
  )
}
