import { LogoComponent } from '@core/LogoComponent'
export class Header extends LogoComponent {
  static dataComponent = 'data-header'
  static className = 'header'

  constructor(node, options) {
    super(node, {
      component: 'header',
      events: []
    })
    this.options = options
  }

  toHTML() {
    return `
      <div class="header__title">
        ${this.options.headerTitle}
      </div>
      <div class="header__description">
        ${this.options.headerDescription}
      </div>
    `
  }
}
