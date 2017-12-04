import flattenTagsIntoPolyArr from './flattenTagsIntoPolyArr'

export default ({ viewBoxDimensions, children }) => ({
  type: 'MESH_DEFINITION',
  viewBoxDimensions,
  polygons: flattenTagsIntoPolyArr(children)
})