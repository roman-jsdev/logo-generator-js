import { AppRender } from '@core/AppRender'

export function reRender(prevFn, nextFn) {
  prevFn.destroy()
  nextFn.render()
  nextFn.init()
}

export function validateInput(node) {
  const input = document.querySelector(`[data-${node}]`)
  if (input.value.length === 0) {
    input.classList.add('input_danger')
  } else if (input.value.length > 0) {
    storage('title', input.value)
    return true
  }
}

export function storage(key, data = null) {
  if (!data) return JSON.parse(localStorage.getItem(key))
  localStorage.setItem(key, JSON.stringify(data))
}

export function createNewPage(components, options) {
  return new AppRender('#app', {
    components: components,
    props: options
  })
}
