const getElements = (size, side) => {
  let total = 0
  let radius = size / 2
  while (radius + size / 2 <= side / 2) {
    let circumference = 2 * Math.PI * radius
    let elementsInLayer = Math.floor(circumference / size)
    if (elementsInLayer === 0) elementsInLayer = 1
    total += elementsInLayer
    radius += size
  }
  return total
}

export const getCenters = (side, count) => {
  const centerX = side / 2
  const centerY = side / 2

  let itemSide = side
  while (itemSide > 0) {
    let total = getElements(itemSide, side)
    if (total >= count) break
    itemSide -= 1
  }

  let elementsPlaced = 0
  let radius = itemSide / 2
  let layer = 0
  const all = []
  while (radius + itemSide / 2 <= side / 2 && elementsPlaced < count) {
    let circumference = 2 * Math.PI * radius
    let elementsInLayer = Math.floor(circumference / itemSide)
    if (elementsInLayer === 0) elementsInLayer = 1

    for (let i = 0; i < elementsInLayer && elementsPlaced < count; i++) {
      let angle = (2 * Math.PI / elementsInLayer) * i
      let x = centerX + radius * Math.cos(angle) - itemSide / 2 - side / 2
      let y = centerY + radius * Math.sin(angle) - itemSide / 2 - side / 2
      all.push({x: `calc(var(--width) / 2 + ${x}px)` , y: `calc(var(--height) / 2 + ${y}px)`, layer})
      elementsPlaced++
    }

    radius += itemSide
    layer ++
  }

  return {itemSide, all, layer}
}