import { LogoComponent } from '@core/LogoComponent'
import { reRender, validateInput, responsiveTitle } from '@core/utils'
import { renderFonts, renderInput } from '@/pages/pages'

export class LogoName extends LogoComponent {
  static dataComponent = 'data-name'
  static className = 'logo-name'

  constructor(node, options) {
    super(node, {
      events: ['keydown']
    })
    this.options = options
  }

  toHTML() {
    return `
    <input
      class="logo-name__input"
      placeholder="Your Company's name"
      data-input
    >
    `
  }

  keydown(event) {
    if (event.keyCode === 13) {
      if (validateInput('input')) {
        reRender(renderInput, renderFonts) + responsiveTitle()
      }
    }
  }
}
