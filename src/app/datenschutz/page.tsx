import type { Metadata } from 'next'
import Link from 'next/link'
import { salonConfig } from '@/lib/config'
import { LogoSVG }     from '@/components/LogoSVG'

export const metadata: Metadata = {
  title:  `Datenschutzerklärung – ${salonConfig.name}`,
  robots: { index: false },
}

export default function Datenschutz() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Minimal nav */}
      <nav className="fixed inset-x-0 top-0 z-[100] h-[68px]
        flex items-center justify-between
        px-[clamp(1.5rem,5vw,4rem)]
        bg-[rgba(250,247,242,0.95)] backdrop-blur-[14px]
        border-b border-brown/10">
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
        pt-[calc(68px+4rem)] pb-24">

        <h1 className="font-display text-[2.5rem] font-bold text-salon-text mb-10">
          Datenschutzerklärung
        </h1>

        <Section title="1. Verantwortlicher">
          <p>
            {salonConfig.inhaber}<br />
            {salonConfig.name}<br />
            {salonConfig.adresse.strasse}, {salonConfig.adresse.plz} {salonConfig.adresse.stadt}<br />
            Telefon: {salonConfig.kontakt.telefon}<br />
            E-Mail: {salonConfig.kontakt.email}
          </p>
        </Section>

        <Section title="2. Erhebung und Speicherung personenbezogener Daten">
          <p>
            Beim Besuch unserer Website werden durch den Browser automatisch
            Informationen an unseren Server übermittelt. Diese werden temporär in einem
            sog. Logfile gespeichert:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. Betriebssystem</li>
          </ul>
          <p className="mt-3">
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
            berechtigten Interesses an der Sicherheit und dem Betrieb der Website.
          </p>
        </Section>

        <Section title="3. Hosting (Vercel)">
          <p>
            Diese Website wird gehostet bei Vercel Inc., 340 Pine Street Suite 900,
            San Francisco, CA 94104, USA. Vercel verarbeitet dabei technische
            Verbindungsdaten. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit Vercel
            besteht ein Auftragsverarbeitungsvertrag. Weitere Informationen:{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </Section>

        <Section title="4. Online-Terminbuchung (Cal.com)">
          <p>
            Für die Online-Terminbuchung nutzen wir den Dienst Cal.com. Bei der Buchung
            eines Termins werden die von Ihnen eingegebenen Daten (Name, E-Mail, ggf.
            Telefon) an Cal.com übermittelt. Die Verarbeitung erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung. Weitere Informationen:{' '}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              cal.com/privacy
            </a>
            .
          </p>
        </Section>

        <Section title="5. Kontakt per Telefon">
          <p>
            Wenn Sie uns telefonisch kontaktieren, werden die übermittelten
            personenbezogenen Daten (Name, Rufnummer) zur Bearbeitung Ihrer Anfrage
            und ggf. für Rückfragen gespeichert. Grundlage: Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </Section>

        <Section title="6. Keine Cookies, kein Tracking">
          <p>
            Diese Website verwendet keine Tracking-Cookies, kein Google Analytics und
            keine Social-Media-Pixel. Es werden keine personenbezogenen Daten zu
            Werbezwecken gesammelt.
          </p>
        </Section>

        <Section title="7. Ihre Rechte">
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung und Datenübertragbarkeit. Wenden Sie sich hierfür an:{' '}
            {salonConfig.kontakt.email}.
          </p>
          <p className="mt-2">
            Sie haben zudem das Recht, sich bei der zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren (Bayerisches Landesamt für
            Datenschutzaufsicht,{' '}
            <a
              href="https://www.lda.bayern.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              www.lda.bayern.de
            </a>
            ).
          </p>
        </Section>

        <Section title="8. Aktualität dieser Datenschutzerklärung">
          <p>
            Diese Datenschutzerklärung ist aktuell gültig (Stand: {year}). Durch die
            Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
            bzw. behördlicher Vorgaben kann es notwendig werden, diese anzupassen.
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
      <div className="text-muted font-light leading-[1.8] text-[0.95rem] [&_p]:mb-2 [&_ul]:text-muted">
        {children}
      </div>
    </section>
  )
}
