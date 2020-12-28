import { LogoComponent } from '@core/LogoComponent'
import { storage } from '../../core/utils'
export class Header extends LogoComponent {
  static dataComponent = 'data-header'
  static className = 'header'
  static descriptionCounter = 1

  constructor(node, options) {
    super(node, {
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
        ${!this.options.headerDescriptionCounter
        ? ''
        : Header.descriptionCounter < 7
          ? `(${Header.descriptionCounter}/6)`
          : ''}
        ${this.options.customHeader ? storage('title') + '?' : ''}
      </div>
    `
  }
}
