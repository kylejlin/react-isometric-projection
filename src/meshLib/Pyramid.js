import parseColors from './parseColors'
import parseVector from './parseVector'
import jsxToObj from './jsxToObj'

import Polygon from './Polygon'

/** @jsx jsxToObj **/

export default ({ basePoints, tipPoint, colors }) => {
  const bp = basePoints.map(parseVector)
  const tp = parseVector(tipPoint)
  const pc = parseColors(colors, bp.length + 1)

  return bp.reduce((arr, basePoint, i) => {
    const nextIndex = i + 1
    const nextPoint = nextIndex < bp.length ? bp[nextIndex] : bp[0]
    return arr.concat([
      <Polygon color={pc[i + 1]} points={[basePoint, tipPoint, nextPoint]} />
    ])
  }, [<Polygon color={pc[0]} points={bp} />])
}
