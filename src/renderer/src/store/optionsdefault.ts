import { Options } from '../types/options'

export function getBlankOptions(): Options {
  return {
    general: {
      startWithWindows: false,
      serverwhenstart: false,
      startMinimized: false,
      minimizeInNotif: false,
      blockToFile: null
    },
    server: {
      port: 3000,
      ipwhitelist: [],
      maxConnections: 0
    }
  }
}

const _default: Options = {
  ...getBlankOptions()
}
export const DefaultOptions: Options = _default
