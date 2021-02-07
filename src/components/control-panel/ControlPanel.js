import { LogoComponent } from '@core/LogoComponent'
import { controlPanelFunctions } from './controlPanelFunctions'
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

  toHTML = () => controlPanelTemplate(this)

  onClick = (event) => {
    controlPanelFunctions(event)
  }
}
