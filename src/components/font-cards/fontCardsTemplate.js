import { storage } from '@core/utils'

const fontsObject = {
  'Noto Serif': null,
  'Open Sans': null,
  'Fondamento': null,
  'Arvo': 700,
  'Domine': null,
  'Alegreya': null,
  'Source Serif Pro': 300,
  'Bitter': 500,
  'Roboto Slab': 900,
  'Patua One': null,
  'IBM Plex Mono': 500,
  'Courgette': null,
  'Patrick Hand': null,
  'Crimson Text': null,
  'Fjalla One': null,
  'Sacramento': null,
  'Merienda One': null,
  'Overpass Mono': 300,
}

const descriptionArray = [
  'Serif Typefaces: Serious, Classical, Traditional & Trustworthy',
  'Sans-serif Typefaces: Clean, Versatile, Friendly & Neutral',
  'Calligraphic / Handwritten: Elegant, Friendly, Humble & Playful',
  'Mature Typefaces: Sophisticated, Serious, Cultured & Elegant',
  'Modern Typefaces: Clean, Neutral, Humble, Calm & Friendly',
  'Lively Typefaces: Energetic, Youthful & Cheerful',
  'Thin Typefaces: Sophisticated, Elegant, Soft & Humble',
  'Medium Typefaces: Neutral, Friendly & Trustworthy',
  'Bold Typefaces: Confident, Energetic, Immediate & Solid',
  'Playful Typefaces: Energetic, Friendly, Youthful & Happy',
  'Playful / Elegant Typefaces: Accessible, Neutral & Friendly',
  'Elegant Typefaces: Sophisticated, Mature, Subtle & Elegant',
  'Organic Typefaces: Somber, Creative & Natural',
  'Geometric / Organic Typefaces: Accessible, Neutral & Friendly',
  'Geometric Typefaces: Simple, Straightforward & Blunt',
  'Unconventional Typefaces: Spontaneous, Vibrant & Creative',
  'Funky Typefaces: Energetic, Friendly & Positive',
  'Plain Typefaces: Neutral, Polished, Trustworthy, Sleek & Refined'
]

export function fontCardsTemplate() {
  const html = []
  Object.keys(fontsObject).forEach((font, index) => {
    let dataFont = `${font}`
    fontsObject[font]
      ? dataFont += ` ${fontsObject[font]}`
      : dataFont
    html.push(`
      <div class="font-card" data-font="${dataFont}">
      <div class="font-card__title">${storage('title')}</div>
        <div class="font-card__description">
          ${descriptionArray[index]}
        </div>
      </div>
    `)
  })
  return html
}
