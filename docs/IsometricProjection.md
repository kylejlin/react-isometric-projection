# `<IsometricProjection />`

## How to import
```javascript
import { IsometricProjection } from 'react-isometric-projection'
```

## Usage
This component *must* be used **only inside of an `<svg>` tag**. This is because it returns a `<g>` tag, which is meant to
be used only in SVGs.
```javascript
import { IsometricProjection } from 'react-isometric-projection'

function MyApp() {
  return (
    <svg>
      <IsometricProjection x={YOUR_X_HERE} y={YOUR_Y_HERE} size={YOUR_SIZE_HERE} mesh={YOUR_MESH_HERE} />
    </svg>
  )
}
```
There is no way to use `<IsometricProjection/>` outside of an `<svg>`, and we have no plans to support that in the future.
If you are so insistent on such a feature, simply DIY:
```javascript
import { IsometricProjection } from 'react-isometric-projection'

function StandaloneIsometricProjection({ x, y, size, mesh }) {
  return (
    <svg>
      <IsometricProjection x={x} y={y} size={size} mesh={mesh} />
    </svg>
  )
}

export default StandaloneIsometricProjection
```

## Props

prop | type | description
--- | --- | ---
`x` | number | The x-position (in SVG coordinates) of the origin (the point that represents (0, 0, 0) in isometric space).
`y` | number | The y-position (in SVG coordinates) of the origin (the point that represents (0, 0, 0) in isometric space).
`size` | number | The width and height (they must be the same) of the mesh's viewBox.
`mesh` | Group (see `meshLib.md`) | The mesh to be rendered.
