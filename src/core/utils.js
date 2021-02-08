import { AppRender } from '@core/AppRender'

export const reRender = (prevFn, nextFn, multiPage) => {
  prevFn.destroy()
  nextFn.render(multiPage)
  nextFn.init()
}

export const validateInput = (node) => {
  const { classList, value } = document.querySelector(`[data-${node}]`)
  value.length
    ? storage('title', value)
    : classList.add('input_danger')
  if (storage('title')) return true
}

export const storage = (key, data = null) => {
  if (!data) return JSON.parse(localStorage.getItem(key))
  localStorage.setItem(key, JSON.stringify(data))
}

export const createNewPage = (components, options) => new AppRender('#app', {
  components: components,
  props: options
})

export const addStyles = (nodes) => {
  if (nodes) {
    nodes.forEach(node => {
      const selectedNode = document.querySelector(`[data-icon="${node}"]`)
      if (selectedNode) {
        selectedNode.classList.add('icon_selected')
      }
    })
  }
}

export const cssVar = (name, value) => {
  if (name.substr(0, 2) !== '--') name = '--' + name
  if (value) document.documentElement.style.setProperty(name, value)
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

export const selectorChildText = (selector, text, child) => {
  const parent = document.querySelector(selector)
  !child
    ? parent.firstElementChild.textContent = text
    : parent.lastElementChild.textContent = text
}

export const query = (selector) => document.querySelector(selector)

export const queryAll = (selector) => document.querySelectorAll(selector)

export const responsiveApp = (resolution) => {
  const appClasses = document.querySelector('#app').classList
  if (!resolution) appClasses.remove('height_100')
  if (window.screen.width < resolution) appClasses.add('height_100')
}

export const responsiveTitle = () => {
  const { length } = storage('title')
  const cssClass = 'basic__cards__title_font-size'
  if (length > 10 && length < 13) {
    cssVar(cssClass, '38px')
  } else if (length > 13 && length < 18) {
    cssVar(cssClass, '28px')
  } else if (length > 18) {
    cssVar(cssClass, '20px')
  } else {
    cssVar(cssClass, '48px')
  }
}

export const random = (max, min = 0) => {
  if (!min) max += 1
  return Math.floor(Math.random() * (max - min)) + min
}

export const arrayToStorage = (
  array,
  element,
  storageKey,
  notSaveToStorage
) => {
  const storage = (key, data) => localStorage.setItem(key, JSON.stringify(data))
  array.indexOf(element) === -1
    ? array.push(element)
    : array.splice(array.indexOf(element), 1)
  if (!notSaveToStorage) storage(storageKey, array)
}

export const updateCounter = (key) => document
  .querySelector('[data-counter]')
  .textContent = JSON.parse(localStorage.getItem(key)).length

export const elementToHTML = (array) => array
  .map(({ classList, outerHTML }) => {
    if (classList.contains('liked')) return outerHTML
  })
