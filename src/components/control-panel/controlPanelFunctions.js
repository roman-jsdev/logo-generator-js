import {
  renderIcons,
  renderLogos,
  renderLiked,
  renderWelcome
} from '@/pages/pages'
import { cssVar, reRender, responsiveApp } from '@core/utils'

export function controlPanelFunctions(event) {
  if (event.target.dataset.button === 'new') {
    reRender(renderLiked, renderWelcome)
    responsiveApp()
  } else {
    const counter = document.querySelector('[data-counter]')
    if (counter !== null) {
      const counterNumber = Number(counter.textContent)
      const logoCard = document.querySelectorAll('[data-card]')
      const likedLogos = [...document.querySelectorAll('.liked')].length

      if (counterNumber !== 0) {
        switch (event.target.dataset.button) {
          case 'generate':
            reRender(renderIcons, renderLogos)
            break
          case 'all':
            logoCard
              .forEach(card => card.removeAttribute('style'))
            document
              .querySelector('[data-header]')
              .firstElementChild
              .textContent = 'Results'
            break
          case 'saved':
            logoCard
              .forEach(card => {
                if (!card.classList.contains('liked') & likedLogos !== 0) {
                  card.style.display = 'none'
                }
              })
            document
              .querySelector('[data-header]')
              .firstElementChild
              .textContent = 'Saved Logos'
            break
        }
      } else {
        cssVar('control-panel_basic_font-color', '#ff0000')
      }
    }
  }
}
