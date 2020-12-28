const colorsObject = {
  '#e70d0d': 'Cheerful, Vibrant & Happy',
  '#cd853f': 'Strength & Reliability',
  '#7b68ee': 'Peaceful, Calming',
  '#ffd700': 'Happy, Sunny & Spontaneous',
  '#7fff00': 'Natural, Happy, Natural & Calm',
  '#ffb6c1': 'Sweetness, Romantic, Innocence',
  '#40e0d0': 'Spiritual, Healing, Protection',
  '#a9a9a9': 'Glamorous, Graceful, Sleek',
  '#0000cd': 'Friendly, Loyal & Peaceful',
  '#9400d3': 'Bold, Engaging & Vibrant',
  '#ff1493': 'Intense, Warm & Romantic',
  '#ffa07a': 'Somber, Earthy, Solid & Natural'
}

export function colorCardsTemplate() {
  const html = []
  const colorElement = `
  <div class="color-card__colors-wrapper__color-element"></div>
  `
  Object.keys(colorsObject).forEach((color, index) => {
    html.push(`
    <div class="color-card" data-color="${color}">
    <div class="color-card__colors-wrapper">
      ${colorElement.repeat(4)}
    </div>
    <div class="color-card__description">${colorsObject[color]}</div>
    </div>
    `)
  })
  return html.join('')
}
