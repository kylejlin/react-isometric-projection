import React from 'react'

import createCoordCalculator from './createCoordCalculator'
import flattenTagsIntoPolyArr from './meshLib/flattenTagsIntoPolyArr'
import sortByRenderOrder from './sortByRenderOrder'

function IsometricProjection({ size, x, y, mesh: group }) {
  const { viewBoxDimensions: vbd, children } = group

  const scale = vbd.map(n => size / n)

  const polygons = flattenTagsIntoPolyArr(children, [0, 0, 0], scale)

  polygons.sort(sortByRenderOrder)

  const calculate = createCoordCalculator(size)

  const renderPolygons = polygons.map(({ color, points }) => ({
    color,
    points: points.map(([x, y, z]) => calculate(x, y, z))
  }))

  return (
    <g transform={`translate(${x}, ${y})`}>
      {
        renderPolygons.map(({ color, points }, i) => {
          const pointsStr = points.map(p => p.join(',')).join(' ')
          return <polygon key={i} points={pointsStr} fill={color} />
        })
      }
    </g>
  )
}

export default IsometricProjection
