import parseVector from './parseVector'

export default ({ color, points }) => ({
  type: 'POLYGON',
  color,
  points: points.map(parseVector)
})