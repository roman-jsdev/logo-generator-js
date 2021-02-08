import { LogoComponent } from '@core/LogoComponent'
import { reRender, storage, responsiveApp } from '@core/utils'
import { renderColors, renderIcons } from '@/pages/pages'
import { colorCardsTemplate } from './colorCardsTemplate'
import { selectPlugin } from '@/plugins/select/exportSelect'

export class ColorCards extends LogoComponent {
  static dataComponent = 'data-colors'
  static className = 'color-cards-wrapper'

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML = colorCardsTemplate

  onClick = ({ target: { dataset: { color } } }) => {
    if (color) {
      storage('color', color)
      reRender(renderColors, renderIcons)
      selectPlugin()
      responsiveApp()
      responsiveApp(9999)
    }
  }
}
