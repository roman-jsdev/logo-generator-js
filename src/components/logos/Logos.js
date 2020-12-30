import { LogoComponent } from '@core/LogoComponent'
import { saveAsJPG, saveAsPNG } from './logoSaver'
import { logosTemplate } from './logosTemplate'

export class Logos extends LogoComponent {
  static dataComponent = 'data-logos'
  static className = 'logos-wrapper'

  constructor(node, options) {
    super(node, {
      events: ['click']
    })
    this.options = options
  }

  toHTML() {
    return logosTemplate()
  }

  click(event) {
    if (event.target.dataset.save === '') {
      event.target.classList.toggle('save_opened')
    }
    if (event.target.dataset.like === '') {
      event.target.classList.toggle('like_liked')
    }

    if (event.target.closest('.logo-card')) {
      const card = event.target.closest('.logo-card').lastElementChild
      switch (event.target.dataset.download) {
        case 'PNG':
          saveAsPNG(card)
          break
        case 'JPG':
          saveAsJPG(card)
          break
      }
    }
  }
}
