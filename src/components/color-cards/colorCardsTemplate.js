const colorsObject = {
  '#e70d0d': 'Cheerful, Vibrant & Happy',
  '#cd853f': 'Strength & Reliability',
  '#c51cf8': 'Peaceful & Calming',
  '#e5ff00': 'Happy, Sunny & Spontaneous',
  '#08ce5b': 'Natural, Happy, Natural & Calm',
  '#ffb6ef': 'Sweetness, Romantic & Innocence',
  '#40ade0': 'Spiritual, Healing & Protection',
  '#ff7b00': 'Glamorous, Graceful & Sleek',
  '#0000cd': 'Friendly, Loyal & Peaceful',
  '#9400d3': 'Bold, Engaging & Vibrant',
  '#ff1493': 'Intense, Warm & Romantic',
  '#ffa07a': 'Somber, Earthy, Solid & Natural'
}

export function colorCardsTemplate() {
  const colorElement = `
    <div class="color-card__colors-wrapper__color-element"></div>
  `
  const html = Object.keys(colorsObject).map(color => {
    return `
      <div class="color-card" data-color="${color}">
        <div class="color-card__colors-wrapper">
          ${colorElement.repeat(4)}
        </div>
        <div class="color-card__description">
          ${colorsObject[color]}
        </div>
      </div>
    `
  })
  return html.join('')
}
