const SQRT3 = Math.sqrt(3)

export default width => (x, y, z) => {
  const k = width / SQRT3
  
  const x1 = x * k
  const y1 = y * k
  const z1 = z * k
  const x2 = (z1 - x1) * (SQRT3 / 2)
  const y2 = y1 - ((x1 + z1) / 2)
  
  return [x2, -y2]
}