// Takes two polygons and returns a number dictating which should be rendered first
// This function is a callback for Array#sort()
export default ({ points: a }, { points: b }) => {
  // A "point sum" of a point is the sum of the point's components
  // It is used to determine the render order of the polygons
  const aPointSums = a.map(([x, y, z]) => x + y + z)
  const bPointSums = b.map(([x, y, z]) => x + y + z)

  // Sort in descending order
  aPointSums.sort((a, b) => b - a)
  bPointSums.sort((a, b) => b - a)

  // Starting with the largest point sum of each polygon, compare them
  // If they are equal, then compare the next greatest, and so on
  let i = 0
  while (i < aPointSums.length && i < bPointSums.length) {
    const diff = aPointSums[i] - bPointSums[i]

    if (diff !== 0) {
      return diff
    }

    i = i + 1
  }

  return bPointSums.length - aPointSums.length
}
