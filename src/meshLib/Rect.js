import jsxToObj from './jsxToObj'

import parseColors from './parseColors'
import parseVector from './parseVector'

import Polygon from './Polygon'

/** @jsx jsxToObj **/

export default ({ position, dimensions, colors }) => {
  const pc = parseColors(colors, 6)
  const [x, y, z] = parseVector(position)
  const [dx, dy, dz] = parseVector(dimensions)
  
  return [
    <Polygon
      color={pc[0]}
      points={[
        [x, y + dy, z],
        [x + dx, y + dy, z],
        [x + dx, y + dy, z + dz],
        [x, y + dy, z + dz]
      ]}
    />,
    <Polygon
      color={pc[1]}
      points={[
        [x + dx, y, z],
        [x + dx, y + dy, z],
        [x + dx, y + dy, z + dz],
        [x + dx, y, z + dz]
      ]}
    />,
    <Polygon
      color={pc[2]}
      points={[
        [x, y, z + dz],
        [x, y + dy, z + dz],
        [x + dx, y + dy, z + dz],
        [x + dx, y, z + dz]
      ]}
    />,
    <Polygon
      color={pc[3]}
      points={[
        [x, y, z],
        [x + dx, y, z],
        [x + dx, y + dy, z],
        [x, y + dy, z]
      ]}
    />,
    <Polygon
      color={pc[4]}
      points={[
        [x, y, z],
        [x, y, z + dz],
        [x, y + dy, z + dz],
        [x, y + dy, z]
      ]}
    />,
    <Polygon
      color={pc[5]}
      points={[
        [x, y, z],
        [x + dx, y, z],
        [x + dx, y, z + dz],
        [x, y, z + dz]
      ]}
    />
  ]
}