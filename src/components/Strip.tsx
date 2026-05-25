import { salonConfig } from '@/lib/config'

const items = [
  { text: 'Haarschnitt', highlight: 'ab 19 €' },
  { text: 'Bartpflege',  highlight: 'ab 7 €'  },
  { text: 'Mo–Fr',       highlight: '9:30–19:00' },
  { text: 'Sa',          highlight: '9:30–18:00' },
  { text: 'Tel',         highlight: salonConfig.kontakt.telefon },
  { text: salonConfig.adresse.strasse, highlight: null },
  { text: '5,0 Sterne auf Google', highlight: null },
]

export function Strip() {
  const doubled = [...items, ...items]

  return (
    <div className="border-t border-b border-[rgba(250,247,242,0.07)] py-[0.7rem] overflow-hidden"
      style={{ background: '#100804' }}
      aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-5
              text-[0.74rem] tracking-[0.18em] uppercase whitespace-nowrap
              text-[rgba(250,247,242,0.35)]"
          >
            {item.text}{' '}
            {item.highlight && (
              <strong className="text-gold font-medium">{item.highlight}</strong>
            )}
            <span className="w-[3px] h-[3px] rounded-full bg-rust opacity-60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
