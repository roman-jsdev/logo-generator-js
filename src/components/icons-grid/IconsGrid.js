import { LogoComponent } from '@core/LogoComponent'
import { cssVar, arrayToStorage, updateCounter } from '@core/utils'
import { iconsGridTemplate } from './iconsGridTemplate'

export class IconsGrid extends LogoComponent {
  static dataComponent = 'data-icons'
  static className = 'icons-grid'
  static iconsList = []

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML = iconsGridTemplate

  onClick({ target }) {
    const icon = target.dataset.icon
    const icons = IconsGrid.iconsList

    if (target.hasAttribute('data-icon')) {
      target.classList.toggle('icon_selected')
      arrayToStorage(icons, icon, 'icons')
      updateCounter('icons')
      cssVar('control-panel_basic_font-color', 'var(--basic_font-color)')
    }
  }
}
