import { LogoComponent } from '@core/LogoComponent'
import { reRender, storage } from '../../core/utils'
import { renderColors, renderIcons } from '../../pages/pages'
import { colorCardsTemplate } from './colorCardsTemplate'
export class ColorCards extends LogoComponent {
  static dataComponent = 'data-colors'
  static className = 'color-cards-wrapper'

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML() {
    return colorCardsTemplate()
  }

  click(event) {
    storage('color', event.target.dataset.color)
    reRender(renderColors, renderIcons)
  }
}
