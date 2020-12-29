import { LogoComponent } from '@core/LogoComponent'
import { renderIcons, renderLogos } from '@/pages/pages'
import { cssVar, reRender } from '@core/utils'
import { controlPanelTemplate } from './controlPanelTemplate'

export class ControlPanel extends LogoComponent {
  static dataComponent = 'data-panel'
  static className = 'control-panel'

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML() {
    return controlPanelTemplate(this)
  }

  click(event) {
    const counter = Number(document.querySelector('[data-counter]').textContent)
    if (counter !== 0) {
      switch (event.target.dataset.button) {
        case 'generate':
          reRender(renderIcons, renderLogos)
          break
        case 'all':
          console.log('Show All Logos')
          break
        case 'saved':
          console.log('Show saved logos')
      }
    } else {
      cssVar('control-panel_basic_font-color', '#ff0000')
    }
  }
}
