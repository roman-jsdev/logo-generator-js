import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'

export function saveAsPNG(node) {
  domToImage
    .toBlob(node)
    .then(function (blob) {
      saveAs(blob, 'logo.png')
    })
}

export function saveAsJPG(node) {
  domToImage
    .toJpeg(node)
    .then(function (dataUrl) {
      const link = document.createElement('a')
      link.download = 'logo.jpeg'
      link.href = dataUrl
      link.click()
    })
}
