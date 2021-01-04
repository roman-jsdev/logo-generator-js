import { Header } from './Header'
import { storage } from '@core/utils'

export function headerTemplate(context) {
  return `
    <div class="header__title">
      ${context.options.headerTitle}
    </div>
    <div class="header__description">
      ${context.options.headerDescription}
      ${!context.options.headerDescriptionCounter
        ? ''
        : Header.descriptionCounter < 7
        ? `(${Header.descriptionCounter}/6)`
        : ''
      }
      ${context.options.headerCustom ? storage('title') + '?' : ''}
    </div>
    ${context.options.selectTitle
      ? '<div class="select-title">Choose from library</div>'
      : ''
    }
  `
}
