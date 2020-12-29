import { storage } from '@core/utils'

export function controlPanelTemplate(context) {
  const counter = type => {
    return `
      <span class="control-panel__counter" data-counter>
        ${type === null ? 0 : type.length}
      </span>
    `
  }
  const button = type => {
    return `
    <button
      class="main-button"
      data-button="${type}"
    >
    ${type.charAt(0).toUpperCase() + type.slice(1) + ' Logos'}
    </button>
    `
  }
  const buttonType = context.options.buttonType
  return `
    <div class="control-panel__text">
      ${context.options.counterType === 'icons'
      ? `Icons selected: ${counter(storage('icons'))}`
      : `Logos liked: ${counter(storage('logos'))}`
    }
    </div>
    <div class="main-button-wrapper">
      ${!context.options.multiButtons
      ? `${button(buttonType)}`
      : `${button(buttonType[0])}`
      + `${button(buttonType[1])}`
    }
    </div>
  `
}
