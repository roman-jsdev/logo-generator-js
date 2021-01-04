import { AppListeners } from '@core/AppListeners'

export class LogoComponent extends AppListeners {
  constructor(node, options = {}) {
    super(node, options.events)
    this.component = options.component || {}
  }

  init() {
    return this.addListeners()
  }

  destroy() {
    return this.removeListeners()
  }
}
