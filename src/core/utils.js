import { AppRender } from '@core/AppRender'

export function reRender(prevFn, nextFn, multiPage) {
  return prevFn.destroy() + nextFn.render(multiPage) + nextFn.init()
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
  return localStorage.setItem(key, JSON.stringify(data))
}

export function createNewPage(components, options) {
  return new AppRender('#app', {
    components: components,
    props: options
  })
}

export function addStyles(nodes) {
  if (nodes) {
    return nodes.forEach(node => {
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

export function selectorChildText(selector, text, child) {
  const parent = document.querySelector(selector)
  if (!child) {
    return parent.firstElementChild.textContent = text
  } else {
    return parent.lastElementChild.textContent = text
  }
}

export function query(selector) {
  return document.querySelector(selector)
}

export function queryAll(selector) {
  return document.querySelectorAll(selector)
}

export function responsiveApp(resolution) {
  const appClasses = document.querySelector('#app').classList
  if (!resolution) return appClasses.remove('height_100')
  if (window.screen.width < resolution) return appClasses.add('height_100')
}

export function responsiveTitle() {
  const length = storage('title').length
  const cssClass = 'basic__cards__title_font-size'
  if (length > 10 && length < 13) {
    return cssVar(cssClass, '38px')
  } else if (length > 10 && length < 18) {
    return cssVar(cssClass, '28px')
  } else if (length > 18) {
    return cssVar(cssClass, '20px')
  }
}

export function random(max, min = 0) {
  if (!min) max += 1
  return Math.floor(Math.random() * (max - min)) + min
}

export function arrayToStorage(array, element, storageKey, notSaveToStorage) {
  const storage = (key, data) => localStorage.setItem(key, JSON.stringify(data))
  array.indexOf(element) === -1
    ? array.push(element)
    : array.splice(array.indexOf(element), 1)
  if (!notSaveToStorage) storage(storageKey, array)
}

export function updateCounter(key) {
  return document
    .querySelector('[data-counter]')
    .textContent = JSON.parse(localStorage.getItem(key)).length
}

export function elementToHTML(array) {
  const outerHTML = array.map(elm => {
    if (elm.classList.contains('liked')) return elm.outerHTML
  })
  return outerHTML
}
