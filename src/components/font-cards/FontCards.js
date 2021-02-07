import { LogoComponent } from '@core/LogoComponent'
import { reRender, storage } from '@core/utils'
import { renderColors, renderFonts } from '@/pages/pages'
import { Header } from '@/components/header/Header'
import { fontCardsTemplate } from './fontCardsTemplate'

export class FontCards extends LogoComponent {
  static dataComponent = 'data-fonts'
  static className = 'font-cards-wrapper'
  static fonts = []

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML = () => (fontCardsTemplate()
    .slice((Header.descriptionCounter - 1) * 3, Header.descriptionCounter * 3)
    .join('')
  )

  onClick = ({ target: { dataset: { font } } }) => {
    if (font) {
      if (Header.descriptionCounter < 6) {
        Header.descriptionCounter++
        reRender(renderFonts, renderFonts)
        FontCards.fonts.push(font)
      } else {
        FontCards.fonts.push(font)
        storage('fonts', FontCards.fonts)
        reRender(renderFonts, renderColors)
      }
    }
  }
}
