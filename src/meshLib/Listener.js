import flattenSubarraysIntoParent from './flattenSubarraysIntoParent'

export default ({ listeners, children }) => {
  return {
    type: 'LISTENER',
    listeners,
    children: flattenSubarraysIntoParent(children)
  }
}
