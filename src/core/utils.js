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

export function addStyles(nodes) {
  if (nodes) {
    nodes.forEach(node => {
      const selectedNode = document.querySelector(`[data-icon="${node}"]`)
      if (selectedNode !== null) {
        selectedNode.classList.add('icon_selected')
      }
    })
  }
}

export function cssVar(name, value) {
  if (name.substr(0, 2) !== '--') name = '--' + name
  if (value) document.documentElement.style.setProperty(name, value)
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

export function responsiveApp(resolution) {
  const appClasses = document.querySelector('#app').classList
  if (!resolution) appClasses.remove('height_100')
  if (window.screen.width < resolution) appClasses.add('height_100')
}

export function responsiveTitle() {
  const length = storage('title').length
  const cssClass = 'basic__cards__title_font-size'
  if (length > 10 && length < 13) {
    cssVar(cssClass, '38px')
  } else if (length > 13 && length < 18) {
    cssVar(cssClass, '28px')
  } else if (length > 18) {
    cssVar(cssClass, '20px')
  }
}
