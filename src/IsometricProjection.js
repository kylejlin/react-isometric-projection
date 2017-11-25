import React from 'react';

import createCoordCalculator from './createCoordCalculator';

const SQRT3 = Math.sqrt(3);

function IsometricProjection({ width, x, y, mesh }) {
  const calculate = createCoordCalculator(width);
  const [scale, ...polygons] = mesh;
  const scaledPolygons = polygons.map(([color, ...vertices]) => {
    return [color, ...(vertices.map(v => v.map(scalar => scalar / scale)))];
  });
  scaledPolygons.sort(([, ...aVertices], [, ...bVertices]) => {
    const aGreatestVertexDistanceSquared = Math.max(...aVertices.map(([x, y, z]) => x*x + y*y + z*z));
    const bGreatestVertexDistanceSquared = Math.max(...bVertices.map(([x, y, z]) => x*x + y*y + z*z));
    return aGreatestVertexDistanceSquared - bGreatestVertexDistanceSquared;
  });
  const renderPolygons = scaledPolygons.map(([color, ...vertices]) => {
    return [color, ...(vertices.map(([x, y, z]) => {
      return calculate(x, y, z);
    }))];
  });
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {
        renderPolygons.map(([color, ...points], i) => {
          const pointsStr = points.map(p => p.join(',')).join(' ');
          return <polygon key={i} points={pointsStr} fill={color} />;
        })
      }
    </g>
  );
}

export default IsometricProjection;