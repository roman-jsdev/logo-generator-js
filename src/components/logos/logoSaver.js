import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import { storage } from '@core/utils'

export function saveAsPNG(node) {
  domToImage
    .toBlob(node)
    .then(function (blob) {
      saveAs(blob, `${storage('title')} logo.png`)
    })
}

export function saveAsJPG(node) {
  domToImage
    .toJpeg(node)
    .then(function (dataUrl) {
      const link = document.createElement('a')
      link.download = `${storage('title')} logo.jpeg`
      link.href = dataUrl
      link.click()
    })
}
