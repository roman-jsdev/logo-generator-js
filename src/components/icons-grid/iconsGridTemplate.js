import { storage } from '@core/utils'

export function iconsGridTemplate() {
  const html = []
  const lib = `${storage('selectedLib')}` === 'null'
    ? 'Line'
    : `${storage('selectedLib')}`
  for (let i = 1; i < 41; i++) {
    html.push(`
      <div class="icons-grid__icon" data-icon="${lib}/icon${i}">
        <div class="icons-grid__icon__circle">  
        <img src="${process.env.NODE_ENV === 'production'
        ? `./src/icons/`
        : `./components/icons-grid/icons/`}${lib}/icon${i}.svg">  
        </div>
      </div>
      `
    )
  }

  return html.join('')
}
