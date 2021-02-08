import {
  renderIcons,
  renderLogos,
  renderLiked,
  renderWelcome
} from '@/pages/pages'
import {
  cssVar,
  reRender,
  responsiveApp,
  query,
  queryAll,
  selectorChildText
} from '@core/utils'

export const controlPanelFunctions = ({ target: { dataset: { button } } }) => {
  if (button === 'new') {
    reRender(renderLiked, renderWelcome)
    responsiveApp()
  } else {
    const counter = query('[data-counter]')

    if (counter) {
      const counterNumber = Number(counter.textContent)
      const logoCard = queryAll('[data-card]')
      const likedLogos = queryAll('.liked').length

      if (button === 'all') {
        logoCard.forEach(card => card.removeAttribute('style'))
        selectorChildText('[data-header]', 'Results')
      }

      if (counterNumber) {
        if (button === 'generate') {
          reRender(renderIcons, renderLogos)
        } else if (button === 'saved') {
          logoCard
          .forEach(({ classList, style }) => {
            if (!classList.contains('liked') && likedLogos) {
              style.display = 'none'
            }
          })
          selectorChildText('[data-header]', 'Saved Logos')
        }
      } else {
        cssVar('control-panel_basic_font-color', '#ff0000')
      }
    }
  }
}
