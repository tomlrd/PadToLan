import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
//import { is } from '@electron-toolkit/utils'

// Custom APIs for renderer
const api = {
  resourcesPath: process.resourcesPath
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    // prod process.resourcesPath = "C:\\Users\\stylo\\AppData\\Local\\Programs\\padtolan\\resources"
  } catch (error) {
    console.error(error)
  }
} else {
  console.log('non')

  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
