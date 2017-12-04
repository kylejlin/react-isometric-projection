import parseVector from './parseVector';

export default ({ viewBoxDimensions = '1 1 1', dimensions = '1 1 1', position = '0 0 0' }) => {
  return {
    type: 'GROUP',
    viewBoxDimensions: parseVector(viewBoxDimensions),
    dimensions: parseVector(dimensions),
    position: parseVector(position)
  }
}