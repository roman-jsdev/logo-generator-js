export class AppRender {
  constructor(root, options) {
    this.root = document.querySelector(root)
    this.options = options
    this.components = options.components || []
  }

  render(multiPage) {
    if (!multiPage) this.root.innerHTML = ''
    this.components = this.options.components
    this.components = this.components.map(Component => {
      const el = document.createElement('div')
      el.setAttribute(Component.dataComponent, '')
      const component = new Component(el, this.options.props)
      el.classList.add(Component.className)
      el.innerHTML = component.toHTML()
      this.root.appendChild(el)
      return component
    })
  }

  init() {
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.components.forEach(component => component.destroy())
  }
}
