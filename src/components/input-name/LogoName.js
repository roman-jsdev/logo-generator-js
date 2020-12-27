import { LogoComponent } from '@core/LogoComponent'

export class LogoName extends LogoComponent {
  static dataComponent = 'data-name'
  static className = 'logo-name'

  constructor(node, options) {
    super(node, {
      component: 'logo-name',
      events: []
    })
    this.options = options
  }

  toHTML() {
    return `
    <input
      class="logo-name__input"
      placeholder="Your Company's name"
    >
    `
  }
}
