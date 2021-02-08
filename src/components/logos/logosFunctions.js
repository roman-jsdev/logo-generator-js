import {
  arrayToStorage,
  updateCounter,
  cssVar,
  elementToHTML,
  storage
} from '@core/utils'
import { Logos } from './Logos'
import { saveAsJPG, saveAsPNG } from './logoSaver'

export const logosFunctions = ({ target }) => {
  const parentNode = target.closest('[data-card]')
  const logos = Logos.likedLogos
  const saveButtons = target.lastElementChild

  if (target.dataset.save === '') {
    target.classList.toggle('save_opened')
    setTimeout(() => {
      saveButtons.style.display = saveButtons.style.display === 'none'
        ? 'flex'
        : 'none'
    }, 300)
  }

  if (target.dataset.like === '') {
    target.classList.toggle('like_liked')
    parentNode.classList.toggle('liked')
    cssVar('control-panel_basic_font-color', '#2e2e2e')
    arrayToStorage(logos, parentNode, 'logos')
    updateCounter('logos')
    storage('likedLogos', elementToHTML(logos))
  }

  if (parentNode) {
    const card = parentNode.lastElementChild
    if (target.dataset.download === 'PNG') {
      saveAsPNG(card)
    } else if (target.dataset.download === 'JPG') {
      saveAsJPG(card)
    }
  }
}
