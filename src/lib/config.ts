export const salonConfig = {
  name:         'Adam Cut Barbershop',
  slogan:       'Dein Stil. Unser Handwerk.',
  beschreibung: 'Präzise Schnitte, klassische Rasuren und Bartpflege – direkt am Harras in München Sendling.',

  adresse: {
    strasse:      'Plinganserstraße 42',
    plz:          '81369',
    stadt:        'München',
    bezirk:       'Sendling',
    googleMapsUrl: 'https://maps.app.goo.gl/P1N8TGqTPU5xEjEGA',
  },

  kontakt: {
    telefon:      '089 520 75 229',
    telefonHref:  'tel:+498952075229',
    email:        '[E-MAIL EINTRAGEN]',
    instagram:    '@adamcut_munich',
    instagramUrl: 'https://instagram.com/adamcut_munich',
  },

  calComLink: '[FEHLT – Cal.com Link eintragen]',

  bewertung: {
    durchschnitt: '5,0',
    anzahl:       '80+',
    plattform:    'Google',
  },

  oeffnungszeiten: [
    { tag: 'Montag',     zeit: '09:30 – 19:00', geschlossen: false, dayIndex: 1 },
    { tag: 'Dienstag',   zeit: '09:30 – 19:00', geschlossen: false, dayIndex: 2 },
    { tag: 'Mittwoch',   zeit: '09:30 – 19:00', geschlossen: false, dayIndex: 3 },
    { tag: 'Donnerstag', zeit: '09:30 – 19:00', geschlossen: false, dayIndex: 4 },
    { tag: 'Freitag',    zeit: '09:30 – 19:00', geschlossen: false, dayIndex: 5 },
    { tag: 'Samstag',    zeit: '09:30 – 18:00', geschlossen: false, dayIndex: 6 },
    { tag: 'Sonntag',    zeit: 'Geschlossen',   geschlossen: true,  dayIndex: 0 },
  ],

  team: [
    { name: '[Name eintragen]', rolle: 'Inhaber', spezialisierung: 'Klassische Schnitte · Barbier-Tradition' },
    { name: '[Name eintragen]', rolle: 'Barber',  spezialisierung: 'Fade · Bartdesign · Nassrasur' },
    { name: '[Name eintragen]', rolle: 'Barber',  spezialisierung: 'Moderne Cuts · Coloration · Pflege' },
  ],

  leistungen: [
    {
      kategorie: 'Herren',
      id: 'herren',
      items: [
        { name: 'Schneiden',           preis: '19 €', tag: null    },
        { name: 'Waschen & Schneiden', preis: '22 €', tag: null    },
        { name: 'Waschen & Föhnen',    preis: '10 €', tag: null    },
        { name: 'Kopfrasur',           preis: '19 €', tag: null    },
        { name: 'Kinder bis 10 Jahre', preis: '13 €', tag: 'Kids'  },
      ],
    },
    {
      kategorie: 'Bart & Rasur',
      id: 'bart',
      items: [
        { name: 'Bart mit Maschine', preis: '7 €',  tag: null },
        { name: 'Bartkontur',        preis: '8 €',  tag: null },
        { name: 'Bartnassrasur',     preis: '14 €', tag: null },
        { name: 'Bart (Model)',      preis: '14 €', tag: null },
        { name: 'Bart färben',       preis: '15 €', tag: null },
      ],
    },
    {
      kategorie: 'Extras & Pflege',
      id: 'extra',
      items: [
        { name: 'Färben ohne Schnitt',             preis: '20 €', tag: null },
        { name: 'Strähen ohne Schnitt',            preis: '18 €', tag: null },
        { name: 'Augenbrauen zupfen',              preis: '7 €',  tag: null },
        { name: 'Gesichtsmaske',                   preis: '7 €',  tag: null },
        { name: 'Haarentfernung Gesicht',          preis: '8 €',  tag: null },
        { name: 'Haarentfernung Nase (Wachs)',     preis: '6 €',  tag: null },
        { name: 'Haarentfernung Ohren (Wachs)',    preis: '6 €',  tag: null },
        { name: 'Haarentfernung Komplett (Wachs)', preis: '15 €', tag: null },
      ],
    },
  ],

  bewertungen: [
    { text: 'Bester Barbershop in Sendling. Immer perfektes Ergebnis, super nette Atmosphäre.',   autor: 'Thomas K.',  sterne: 5 },
    { text: 'Sehr gute Preise und super Qualität. Tolle Stimmung, absolute Empfehlung!',          autor: 'Lukas M.',   sterne: 5 },
    { text: 'Ich gehe nur noch hierher. Freundlich, schnell, und das Ergebnis ist jedes Mal top.', autor: 'Nico R.',    sterne: 5 },
    { text: 'Für 19 € einen super Haarschnitt? Nirgendwo sonst in München. Top!',                 autor: 'David S.',   sterne: 5 },
    { text: 'Mein Sohn schwört auf diesen Laden. Faire Preise, top Ergebnis. Danke!',             autor: 'Sandra B.',  sterne: 5 },
  ],

  inhaber:    'Ali [NACHNAME EINTRAGEN]',
  rechtsform: 'Einzelunternehmen',
  ustId:      '[STEUER-ID EINTRAGEN]',

  theme: {
    accent: '#C4622D',
    gold:   '#D4A017',
    mode:   'light' as const,
  },
} as const
