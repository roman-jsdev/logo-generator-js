import { LogoComponent } from '@core/LogoComponent'

export class SelectLib extends LogoComponent {
  static dataComponent = 'data-select'
  static className = 'select-wrapper'

  constructor(node, options) {
    super(node, {
      events: []
    })
    this.options = options
  }

  toHTML() {
    return `
      <div id="select"></div>
    `
  }
}
