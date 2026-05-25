import { salonConfig } from '@/lib/config'

const items = [
  `Haarschnitt ab 19 €`,
  `Bartpflege ab 7 €`,
  `Mo–Fr 9:30–19:00`,
  `Sa 9:30–18:00`,
  `Tel ${salonConfig.kontakt.telefon}`,
  salonConfig.adresse.strasse,
]

export function Strip() {
  const double = [...items, ...items]

  return (
    <div className="bg-brown py-[0.65rem] overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {double.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6
              text-[0.76rem] tracking-[0.18em] uppercase
              text-[rgba(250,247,242,0.65)] whitespace-nowrap"
          >
            {item.includes('19 €') || item.includes('7 €') ? (
              <>
                {item.split(' ').slice(0, -2).join(' ')}{' '}
                <strong className="text-gold">
                  {item.split(' ').slice(-2).join(' ')}
                </strong>
              </>
            ) : item.startsWith('Tel') ? (
              <>
                Tel{' '}
                <strong className="text-gold">
                  {salonConfig.kontakt.telefon}
                </strong>
              </>
            ) : (
              item
            )}
            <span className="w-[4px] h-[4px] rounded-full bg-rust opacity-60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
