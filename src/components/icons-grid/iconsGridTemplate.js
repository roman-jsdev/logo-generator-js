import { storage } from '@core/utils'

export const iconsGridTemplate = () => new Array(40)
  .fill('')
  .map((_, i) => (`
    <div class="icons-grid__icon" data-icon="${storage('selectedLib')
    || 'Line'}/icon${i + 1}">
      <div class="icons-grid__icon__circle">
        <img src="${process.env.NODE_ENV === 'production'
      ? `./src/icons/`
      : `./components/icons-grid/icons/`}${storage('selectedLib')
      || 'Line'}/icon${i + 1}.svg">
      </div>
    </div>
  `))
  .join('')
