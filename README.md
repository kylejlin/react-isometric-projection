# react-isometric-projection
A React component for rendering isometric projections inside SVG.

## [See a demo right now!](https://kylejlin.github.io/react-isometric-projection-demo)

## Usage in example project:
You don't have to use create-react-app, but for the sake of simplicity, this example uses it.
```
npm install -g create-react-app
mkdir path-to-demo
cd path-to-demo
create-react-app .
```

Install our package :)
```
npm install --save react-isometric-projection
```

App.js:
```javascript
import { IsometricProjection } from 'react-isometric-projection'
import treeMesh from './treeMesh'

function App() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" fill="black" />
      <IsometricProjection x={50} y={50} size={50} mesh={treeMesh} />
    </svg>
  )
}

export default App
```

treeMesh.js:
```javascript
import React from 'react'
import { meshLib } from 'react-isometric-projection'

const { jsxToObj, Group, Pyramid, Rect } = meshLib

// The comment below tells the transpiler to use jsxToObj()
//   instead of React.createElement() when transpiling JSX to function calls

/** @jsx jsxToObj **/

export default <Group dimensions="0 0 0" viewBoxDimensions="2 2 2">
      <Rect
        position=".375 0 .375"
        dimensions=".25 1 .25"
        colors={['#420', '#420', '#301A00']}
      />
      <Pyramid
        tipPoint=".5 3 .5"
        basePoints={[
          '.125 1 .125',
          '.125 1 .875',
          '.875 1 .875',
          '.875 1 .125'
        ]}
        colors={['#050', '#050', '#060', '#058000', '#050']}
      />
</Group>
```
Finally,
`npm start`

Voila, a tree!

## [Docs](https://github.com/kylejlin/react-isometric-projection/tree/master/docs)
