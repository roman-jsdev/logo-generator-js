import { renderWelcome, renderLiked } from '@/pages/pages'
import '@/scss/index.scss'
import { responsiveApp, storage } from '@core/utils'

if (storage('likedLogos')) {
  renderLiked.render()
  renderLiked.init()
  responsiveApp(99999)
  document.querySelectorAll('[data-like]').forEach(element => {
    element.style.display = 'none'
  })
  document.querySelector('[data-button]').textContent = 'Create New Logo'
} else {
  renderWelcome.render()
  renderWelcome.init()
}
