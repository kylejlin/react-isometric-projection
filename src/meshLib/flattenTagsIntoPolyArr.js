const flattenTagsIntoPolyArr = (tags, offset = [0, 0, 0], scale = [1, 1, 1]) => {
  const [ox, oy, oz] = offset
  const [sx, sy, sz] = scale

  return tags.reduce((arr, tag) => {
    if (tag.type === 'POLYGON') {
      return arr.concat([{
        color: tag.color,
        points: tag.points.map(([x, y, z]) => [ox + x * sx, oy + y * sy, oz + z * sz])
      }])
    } else if (tag.type === 'GROUP') {
      const [px, py, pz] = tag.position

      const [gdx, gdy, gdz] = tag.dimensions
      const [gvbx, gvby, gvbz] = tag.viewBoxDimensions
      const [gsx, gsy, gsz] = [gdx / gvbx, gdy / gvby, gdz / gvbz]
      
      return arr.concat(flattenTagsIntoPolyArr(tag.children, [ox + px * sx, oy + py * sy, oz + pz * sz], [gsx, gsy, gsz]))
    } else {
      throw new Error('Illegal tag type: ' + tag.type);
    }
  }, [])
}

export default flattenTagsIntoPolyArr
