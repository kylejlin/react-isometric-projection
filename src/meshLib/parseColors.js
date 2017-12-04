export default (colors, numberRequired) => {
  if (!Array.isArray(colors) || colors.length === 0) {
    throw new Error('You must provide a non-zero-length array as the colors prop')
  }
  
  return Array.apply(null, { length: numberRequired }).map((_, i) => colors[i] || colors[0])
}