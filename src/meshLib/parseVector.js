export default v => {
  if (!(Array.isArray(v) || 'string' === typeof v)) {
    throw new Error('Illegal vector: ' + v)
  }
  
  const rawArr = Array.isArray(v) ? v : v.split(' ')
  const arr = rawArr.map(n => +n)
  
  if (arr.find(isNaN)) {
    throw new Error('Illegal vector: ' + v)
  }
  
  return arr
}