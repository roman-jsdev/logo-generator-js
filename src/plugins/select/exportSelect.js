import { addStyles, reRender, storage } from '@core/utils'
import { renderIcons } from '@/pages/pages'
import { Select } from './select'

export function selectPlugin() {
  return new Select('#select', {
    placeholder: 'Please select element',
    selectedId: storage('selectedLib') || 'Default',
    data: [
      { id: 'Default', value: 'Default Library' },
      { id: 'Line', value: 'Line Icons' },
      { id: 'Fancy', value: 'Fancy Icons' },
      { id: 'Elegant', value: 'Elegant Icons' }
    ],
    onSelect(item) {
      storage('selectedLib', item.id)
      reRender(renderIcons, renderIcons)
      selectPlugin()
      addStyles(storage('icons'))
    }
  })
}
