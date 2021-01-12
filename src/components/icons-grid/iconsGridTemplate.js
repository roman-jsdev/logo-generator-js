import { storage } from '@core/utils'

export function iconsGridTemplate() {
  const lib = `${storage('selectedLib')}` === 'null'
    ? 'Line'
    : `${storage('selectedLib')}`
  const html = new Array(40).fill('').map((_, i) => (`
      <div class="icons-grid__icon" data-icon="${lib}/icon${i + 1}">
        <div class="icons-grid__icon__circle">  
          <img src="${process.env.NODE_ENV === 'production'
      ? `./src/icons/`
      : `./components/icons-grid/icons/`}${lib}/icon${i + 1}.svg">  
        </div>
      </div>
    `))

  return html.join('')
}
