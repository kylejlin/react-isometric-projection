# `meshLib`


## Overview
`<IsometricProjection />` requires a mesh (which is actually just a `Group`) to be passed to it through it's `mesh` prop.
`meshLib` is what you use to generate that mesh.


## Contents
1. Introduction
    1. How to specify a vector
    2. `Polygon()`
    3. `Group()`
    4. Making a mesh
2. Using JSX syntax instead of nested function calls
3. Other out-of-the-box components
    1. `Rect()`
    2. `Pyramid()`

## Introduction

### How to specify a vector
There are two ways to specify a vector:
1. An array of numbers `[x, y, z]` (example: `[1, 2, 3]`)
2. A space-separated string (no commas) `'x y z'` (example: `'1 2 3'`)

You can use arrays and space-separated strings interchangably. We suggest you use strings when dealing with hard-coded values, and arrays
when dealing with dynamic values (as opposed to the much messier `` `${x} ${y} ${z}` `` or `x + ' ' + y + ' ' + z`), but you can use
whatever convention you want.

All vectors must be three-dimensional (have three components)

### `Polygon()`
A `Polygon` is a 2D shape, described by a color and a series of points (vectors).

#### Syntax
```javascript
import { meshLib } from 'react-isometric-projection'
const { Polygon } = meshLib

const myPoly = Polygon({
  color: '#FF0000', // Any CSS color works here, so "red" would also achieve the same result
  points: [ // An array of vectors
    [0, 0, 0], // As mentioned above, vectors can be represented with an array of numbers
    '1 0 0', // Or a space-separated string
    '1 0 1',
    [0, 0, 1]
  ]
})
```
Groups of `Polygon`s are used to create 3D shapes.

### `Group()`
A `Group` is a group of `Polygon`s and child `Group`s.

#### Syntax
```javascript
import { meshLib } from 'react-isometric-projection'
import myPoly from './myPoly'
const { Group, Polygon } = meshLib

const myGroup = Group({
  position: '1 1 1', // Any vector
  dimensions: '1 1 1', // Any vector
  viewBoxDimensions: '1 1 1', // Any vector
  children: [myPoly]
})
```

#### Usage
`Group` specifies the position, viewbox and dimensions of something. For example:
```javascript
Group({
  position: '0 0 0',
  dimensions: '3 3 3',
  viewBoxDimensions: '2 2 2',
  children: [
    Polygon({
      color: 'red',
      points: ['0 0 0', '1 0 0', '1 0 1', '0 0 1']
    })
  ]
})
```
The viewbox is `'2 2 2'`, so every component in the children's vectors will be divided by 2. The dimensions are `'3 3 3'`, so
every component in the children's vectors will be multiplied by 3. So the resulting children will be an array of one polygon,
with points at `0 0 0`, `1.5 0 0`, `1.5 0 1.5`, and `0 0 1.5`.


Mathematically speaking, `Group` just applies a series of transformations to its children: a dilation and
a translation. The vectors are first dilated by `dimensions / viewBoxDimensions`, and then translated by `position`.

### Making a mesh
A mesh is just a `Group`. The `dimensions` of the mesh do not matter, as they will be overwritten by the `size` prop of
`<IsometricProjection />`.

## Using JSX instead of nested function calls
Nesting function calls may not be aesthetically appealing to some developers, so we added the option of using JSX tags instead.
So instead of

```javascript
import { meshLib } from 'react-isometric-projection'
const { Group, Polygon } = meshLib

const myGroup = Group({
  position: '0 0 0',
  dimensions: '100 100 100',
  viewBoxDimensions: '8 8 8',
  children: {
    Polygon({
      color: 'green',
      points: ['0 0 0', '1 0 0', '1 0 1', '0 0 1']
    })
  }
})
```
You would instead type

```javascript
import { meshLib } from 'react-isometric-projection'
const { jsxToObj, Group, Polygon } = meshLib

/** @jsx jsxToObj **/

const myGroup = (
  <Group position="0 0 0" dimensions="100 100 100" viewBoxDimensions="8 8 8">
    <Polygon color="green" points={['0 0 0', '1 0 0', '1 0 1', '0 0 1']} />
  </Group>
)
```
### Where's the magic?
**`/** @jsx jsxToObj **/`** This comment is actually a transpiler directive that tells Babel to replace `React.createElement()`
(the default JSX processor function) with `jsxToObj()` (react-isometric-projection's custom function). Because of this, you
**cannot use meshLib JSX and React JSX in the same file**. Instead, define your mesh in one file, and your React app in another,
and import the mesh into the app.

## Other out-of-the-box components

### `Rect()`
A rectangular prism (constructed out of `Polygon`s under the hood).
#### Syntax
```javascript
import { meshLib } from 'react-isometric-projection'
const { Rect } = meshLib

const myRect = Rect({
  position: '0 0 0', // Any vector
  dimensions: '1 1 1', // Any vector
  colors: ['#F00', '#F80', '#FF0', '#0F0', '#00F', '#F0F'] // Any six CSS colors
})
```
#### Props
prop | type | description
--- | --- | ---
position | vector | The position of the rectangular prism
dimensions | vector | The dimensions of the rectangular prism. If one of the dimensions is 0, a rectangle will be rendered. If one of the dimensions is negative, the rectangular prism will still be rendered, but in the opposite direction along the axis of the negative component.
colors | array of 6 strings (CSS colors) | The colors of the 6 faces. You need to provide between 1 and 6 colors. If you do not provide all 6, the remaining colors will be set to the first color (`colors[0]`). If you provide more than 6, the rest will be ignored. Each color in the array corresponds to a specific face. To see which face corresponds to each color, see the table below.

#### Which face corresponds to each color

color | face
--- | ---
`colors[0]` | The top face.
`colors[1]` | The left-most face parallel to the YZ plane.
`colors[2]` | The right-most face parallel to the XZ plane.
`colors[3]` | The left-most face parallel to the YZ plane (hidden).
`colors[4]` | The right-most face parallel to the XZ plane (hidden).
`colors[5]` | The bottom face (hidden).

Note: the last three faces cannot be seen by the user because they are covered by the first three. Because of this, you don't
have to assign them colors. However, we might release a rotations feature in future, which would allow these faces to be visible
(if you rotate the rectangular prism).

### `Pyramid()`
A pyramid. It has a base and a tip, and creates a face connecting each side of the base to the tip. The number of faces for a
given pyramid is *n+1* where *n* is the number of base points there are.
#### Syntax
```javascript

import { meshLib } from 'react-isometric-projection'
const { Pyramid } = meshLib

const myRectangularPyramid = Pyramid({
  tipPoint: '0 2 0', // Any vector
  basePoints: ['0 0 0', '1 0 0', '1 0 1', '0 0 1'], // An array of 3 or more vectors (3 because you need at least 3 vertices to make a polygon)
  colors: ['#F00', '#F80', '#FF0', '#0F0', '#00F', '#F0F'] // Array of basePoints.length+1 CSS colors
})
```
#### Props
prop | type | description
--- | --- | ---
tipPoint | vector | The tip of the pyramid
basePoints | array of 3 or more vectors | The vertices of the pyramid's base (any polygon). Since the base is a polygon, it needs at least 3 points.
colors | array of strings (CSS colors) | You must provide between 1 and n+1 colors, where n is the number of basePoints. If you provide less than n+1, the rest will be set to `colors[0]`. Each color corresponds to a certain face. The base corresponds to `colors[0]`. The face created by connecting `basePoint[0]`, `tipPoint`, and `basePoint[1]` corresponds to `colors[1]`. The face created by connecting `basePoint[1]`, `tipPoint`, and `basePoint[2]` corresponds to `colors[2]`, etc. To generalize this, any face created by connecting `basePoint[n]`, `tipPoint`, and `basePoint[n+1]`, will correspond to `colors[n+1]`.
