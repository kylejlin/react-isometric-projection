import flattenTagsIntoPolyArr from '../meshLib/flattenTagsIntoPolyArr'

import meshLib from '../meshLib/index'
import jsxToObj from '../meshLib/jsxToObj'

/** @jsx jsxToObj **/

const { Group, Polygon } = meshLib

test('does not alter polygon array', () => {
  expect(flattenTagsIntoPolyArr([
    <Polygon color="red" points={['0 0 0', '0 1 0', '0 1 1']} />,
    <Polygon color="green" points={['0 0 0', '1 0 0', '1 1 0']} />
  ])).toMatchSnapshot()
})

test('adjusts polgons in groups correctly', () => {
  expect(flattenTagsIntoPolyArr([
    <Polygon color="red" points={['0 0 0', '0 1 0', '0 1 1']} />,
    <Group position="1 0 1" viewBoxDimensions="2 2 2" dimensions="1 1 1">
      <Polygon color="blue" points={['0 0 0', '1 0 2', '2 0 2']} />
    </Group>
  ])).toMatchSnapshot()
})

test('handles nested groups correctly', () => {
  expect(flattenTagsIntoPolyArr([
    <Polygon color="red" points={['0 0 0', '0 1 0', '0 1 1']} />,
    <Group position="1 0 1" viewBoxDimensions="2 2 2" dimensions="1 1 1">
      <Polygon color="blue" points={['0 0 0', '1 0 2', '2 0 2']} />
      <Group position="1 1 1" viewBoxDimensions="3 3 3" dimensions="2 2 2">
        <Polygon color="yellow" points={['0 0 0', '1 0 0', '3 2 1']} />
      </Group>
    </Group>
  ])).toMatchSnapshot()
})