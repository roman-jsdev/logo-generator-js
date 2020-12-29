import { storage } from '@core/utils'

export function iconsGridTemplate() {
  const html = []
  const lib = `${storage('selectedLib')}` === 'null'
    ? 'Default'
    : `${storage('selectedLib')}`
  for (let i = 1; i < 41; i++) {
    html.push(`
      <div class="icons-grid__icon" data-icon="${lib}/icon${i}">
        <div class="icons-grid__icon__circle">  
          <img 
          src="./components/icons-grid/icons/${lib}/icon${i}.svg"/>
        </div>
      </div>
      `)
  }

  return html.join('')
}
