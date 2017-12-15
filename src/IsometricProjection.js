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

  const renderPolygons = polygons.map(({ color, points, listeners }) => ({
    color,
    points: points.map(([x, y, z]) => calculate(x, y, z)),
    listeners
  }))

  return (
    <g transform={`translate(${x}, ${y})`}>
      {
        renderPolygons.map(({ color, points, listeners }, i) => {
          const pointsStr = points.map(p => p.join(',')).join(' ')

          const sanitizedListeners = listeners // TODO: implement sanitization
          return <polygon key={i} points={pointsStr} fill={color} {...sanitizedListeners} />
        })
      }
    </g>
  )
}

export default IsometricProjection
