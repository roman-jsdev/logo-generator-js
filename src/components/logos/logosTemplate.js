import { storage, random } from '@core/utils'
import { generateColors, getContrast } from './colorGenerator'

export function logosTemplate() {
  const html = []

  const icons = storage('icons')
  const fonts = storage('fonts')
  const color = storage('color')

  const randomProps = prop => {
    return prop[random(prop.length - 1)]
  }

  for (let i = 1; i < 69; i++) {
    const icon = randomProps(icons)
    const font = randomProps(fonts)
    const randomColor = generateColors(color, random(11))
    const contrast = prop => {
      return getContrast(randomColor, `${prop}_dark`, `${prop}_bright`)
    }

    html.push(`
    <div
      class="logo-card"
      data-card
      data-font="${font}"
      data-color="${color}"
      data-icon="${icon}"
    >
    <div class="logo-card__buttons">
      <div class="logo-card__buttons__save" data-save>
        <i class="fa fa-download"></i>
        <div
          class="logo-card__buttons__save__download"
          style="display: none"
        >
          <div data-download="PNG">PNG</div>
          <div data-download="JPG">JPG</div>
        </div>
      </div>
      <div class="logo-card__buttons__like" data-like>
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <div
      class="logo-card__content ${random(1) ? 'content_column' : ''}"
      style="background-color:${'#' + randomColor}"
    >
      <div
        class="logo-card__content__icon ${contrast('icon')}">
          <img src="${process.env.NODE_ENV === 'production'
        ? `./src/icons/`
        : `./components/icons-grid/icons/`}${icon}.svg">
        </div>
      <div class="logo-card__content__title ${contrast('title')}">
        <div class="font-card__title">${storage('title')}</div>
      </div>
    </div>
  </div>
    `)
  }
  return html.join('')
}
