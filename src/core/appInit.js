import { renderWelcome, renderLiked } from '@/pages/pages'
import { responsiveApp, storage, query, queryAll } from '@core/utils'

export function appInit() {
  if (storage('likedLogos') && storage('likedLogos').length !== 0) {
    renderLiked.render()
    renderLiked.init()
    responsiveApp(99999)
    queryAll('[data-like]').forEach(element => {
      element.style.display = 'none'
    })
    query('[data-button]').textContent = 'Create New Logo'
  } else {
    renderWelcome.render()
    renderWelcome.init()
  }
}
