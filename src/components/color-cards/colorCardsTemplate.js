import { colorsObject } from '@/constants'

export const colorCardsTemplate = () => Object
  .keys(colorsObject)
  .map(color => (`
    <div class="color-card" data-color="${color}">
      <div class="color-card__colors-wrapper">
        ${'<div class="color-card__colors-wrapper__color-element"></div>'
      .repeat(4)}
      </div>
      <div class="color-card__description">
        ${colorsObject[color]}
      </div>
    </div>
  `))
  .join('')
