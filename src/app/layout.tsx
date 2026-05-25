import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers }      from './providers'
import { salonConfig }    from '@/lib/config'

const playfair = Playfair_Display({
  subsets:  ['latin'],
  weight:   ['700', '900'],
  style:    ['normal', 'italic'],
  variable: '--font-playfair',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       `${salonConfig.name} – München Sendling`,
  description: `${salonConfig.name} München Sendling. Haarschnitte ab 19 €, Bartpflege, Rasur. ${salonConfig.adresse.strasse}.`,
  openGraph: {
    title:       salonConfig.name,
    description: salonConfig.beschreibung,
    locale:      'de_DE',
    type:        'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
