export class AppListeners {
  constructor(node, events = []) {
    if (!node) throw new Error(`Invalid ${node}`)
    this.node = node
    this.events = events
  }

  addListeners() {
    this.events.forEach(event => {
      const fn = event
      if (!this[fn]) throw new Error(`Method ${fn} is not a function`)
      this[fn] = this[fn].bind(this)
      this.node.addEventListener(event, this[fn])
    })
  }

  removeListeners() {
    this.events.forEach(event => {
      const fn = event
      this.node.removeEventListener(event, this[fn])
    })
  }
}
