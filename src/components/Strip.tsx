import { salonConfig } from '@/lib/config'

const items = [
  { label: 'Haarschnitt',  value: 'ab 19 €' },
  { label: 'Bartpflege',   value: 'ab 7 €'  },
  { label: 'Mo–Fr',        value: '9:30–19:00' },
  { label: 'Sa',           value: '9:30–18:00' },
  { label: 'Telefon',      value: salonConfig.kontakt.telefon },
  { label: salonConfig.adresse.strasse, value: null },
  { label: '5,0 ★ Google', value: null },
]

export function Strip() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-[0.65rem]"
      style={{
        background: '#181818',
        borderTop:    '1px solid rgba(184,115,51,0.1)',
        borderBottom: '1px solid rgba(184,115,51,0.1)',
      }}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span key={i}
            className="inline-flex items-center gap-3 px-5 text-[0.72rem]
              tracking-[0.18em] uppercase whitespace-nowrap"
            style={{ color: 'rgba(237,232,225,0.25)' }}
          >
            {item.label}
            {item.value && (
              <>
                {' '}
                <span style={{ color: '#B87333', fontWeight: 500 }}>{item.value}</span>
              </>
            )}
            <span className="w-[3px] h-[3px] rounded-full flex-shrink-0"
              style={{ background: 'rgba(184,115,51,0.4)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
