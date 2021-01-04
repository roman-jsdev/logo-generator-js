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

export function controlPanelFunctions(event) {
  if (event.target.dataset.button === 'new') {
    reRender(renderLiked, renderWelcome)
    responsiveApp()
  } else {
    const counter = query('[data-counter]')

    if (counter !== null) {
      const counterNumber = Number(counter.textContent)
      const logoCard = queryAll('[data-card]')
      const likedLogos = queryAll('.liked').length

      if (event.target.dataset.button === 'all') {
        logoCard.forEach(card => card.removeAttribute('style'))
        selectorChildText('[data-header]', 'Results')
      }

      if (counterNumber !== 0) {
        switch (event.target.dataset.button) {
          case 'generate':
            reRender(renderIcons, renderLogos)
            break
          case 'saved':
            logoCard
              .forEach(card => {
                if (!card.classList.contains('liked') & likedLogos !== 0) {
                  card.style.display = 'none'
                }
              })
            selectorChildText('[data-header]', 'Saved Logos')
            break
        }
      } else {
        cssVar('control-panel_basic_font-color', '#ff0000')
      }
    }
  }
}
