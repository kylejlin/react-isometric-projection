export default ({ basePoints, tipPoint, colors }) => {
  const bp = parseVector(basePoints)
  const tp = parseVector(tipPoint)
  const pc = parseColors(colors, bp.length + 1)
  
  return bp.reduce((arr, basePoint, i) => {
    const nextIndex = i + 1
    const nextPoint = nextIndex < bp.length ? bp[nextIndex] : bp[0]
    return arr.concat([
      <Polgon color={pc[i + 1]} points={[basePoint, tipPoint, nextPoint]} />
    ])
  }, [<Polygon color={pc[0]} points={bp} />])
}