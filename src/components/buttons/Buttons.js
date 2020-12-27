import { LogoComponent } from '@core/LogoComponent'
import { renderInput, renderWelcome } from '@/pages/pages'
export class Buttons extends LogoComponent {
  static dataComponent = 'data-buttons'
  static className = 'main-button-wrapper'

  constructor(node, options) {
    super(node, {
      component: 'buttons',
      events: ['click']
    })
    this.options = options
  }

  toHTML() {
    return `
      <button class="main-button">${this.options.buttonTitle}</button>
    `
  }

  click() {
    renderWelcome.destroy()
    renderInput.render()
    renderInput.init()
  }
}
