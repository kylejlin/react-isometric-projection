import React from 'react'

import createCoordCalculator from './createCoordCalculator'

function IsometricProjection({ size, x, y, meshDef }) {
  const calculate = createCoordCalculator(width)
  const { viewBoxDimensions: vbd, polygons } = meshDef
  const scaledPolygons = polygons.map(({ color, points }) => ({
    color,
    points: points.map(([x, y, z]) => [x / vbd.x, y / vbd.y, z / vbd.z])
  }))
  scaledPolygons.sort(({ points: a }, { points: b }) => {
    const aGreatestPointSum = Math.max(...(a.map(([x, y, z]) => x + y + z)))
    const bGreatestPointSum = Math.max(...(b.map(([x, y, z]) => x + y + z)))
    return aGreatestPointSum - bGreatestPointSum
  })
  const renderPolygons = scaledPolygons.map(({ color, points }) => ({
    color,
    points: points.map(([x, y, z]) => calculate(x, y, z))
  }))
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {
        renderPolygons.map(({ color, points }, i) => {
          const pointsStr = points.map(p => p.join(',')).join(' ')
          return <polygon key={i} points={pointStr} fill={color} />
        })
      }
    </g>
  )
}

export default IsometricProjection