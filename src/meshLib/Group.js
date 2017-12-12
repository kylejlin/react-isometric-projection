import flattenSubarraysIntoParent from './flattenSubarraysIntoParent'
import parseVector from './parseVector'

export default ({ viewBoxDimensions = '1 1 1', dimensions = '1 1 1', position = '0 0 0', children }) => {
  return {
    type: 'GROUP',
    viewBoxDimensions: parseVector(viewBoxDimensions),
    dimensions: parseVector(dimensions),
    position: parseVector(position),
    children: flattenSubarraysIntoParent(children)
  }
}