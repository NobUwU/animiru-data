import data from './data-safe.json'
import meta from './data-safe-meta.json'
import {
  DataSafe,
  Meta,
} from './types'

const typedData = data as DataSafe
const typedMeta = meta as Meta

export {
  typedData as Data,
  typedMeta as Meta,
}
