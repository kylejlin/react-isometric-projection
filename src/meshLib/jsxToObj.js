export default (type, props, ...children) => {
  if ('string' === typeof type) {
    throw new Error('Illegal JSX in mesh definition: ')
  }
  
  const propsWithChildren = Object.assign({}, props, { children })
  
  return type(propsWithChildren)
}