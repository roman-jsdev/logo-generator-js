import {
  arrayToStorage,
  updateCounter,
  cssVar,
  elementToHTML,
  storage
} from '@core/utils'
import { Logos } from './Logos'
import { saveAsJPG, saveAsPNG } from './logoSaver'

export function logosFunctions(event) {
  const parentNode = event.target.closest('[data-card]')
  const logos = Logos.likedLogos
  const saveButtons = event.target.lastElementChild

  if (event.target.dataset.save === '') {
    event.target.classList.toggle('save_opened')
    setTimeout(() => {
      saveButtons.style.display = saveButtons.style.display === 'none'
        ? 'flex'
        : 'none'
    }, 300)
  }

  if (event.target.dataset.like === '') {
    event.target.classList.toggle('like_liked')
    parentNode.classList.toggle('liked')
    cssVar('control-panel_basic_font-color', '#2e2e2e')
    arrayToStorage(logos, parentNode, 'logos')
    updateCounter('logos')
    storage('likedLogos', elementToHTML(logos))
  }

  if (parentNode) {
    const card = parentNode.lastElementChild
    switch (event.target.dataset.download) {
      case 'PNG':
        saveAsPNG(card)
        break
      case 'JPG':
        saveAsJPG(card)
        break
    }
  }
}
