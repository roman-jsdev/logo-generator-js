import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import { storage } from '@core/utils'

export const saveAsPNG = (node) => {
  domToImage
    .toBlob(node)
    .then((blob) => saveAs(blob, `${storage('title')} logo.png`))
}

export const saveAsJPG = (node) => {
  domToImage
    .toJpeg(node)
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = `${storage('title')} logo.jpeg`
      link.href = dataUrl
      link.click()
    })
}
