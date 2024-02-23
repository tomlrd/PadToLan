import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import path from 'path';

console.log(process.env);
console.log(electronAPI.process);
const isDev = electronAPI.process.env.NODE_ENV_ELECTRON_VITE === "development" ? true : false
console.log(isDev);
console.log(process);

const appDataPath = electronAPI.process.env.LOCALAPPDATA;
const appResourcesPath = path.resolve(appDataPath ? appDataPath : "", "Programs", "padtolan", "resources", "PadApp");
console.log(appResourcesPath);
console.log(__dirname);

// Custom APIs for renderer
const api = {
  resourcesPath: process.resourcesPath,
  isdev: isDev,
  localappdata: appResourcesPath.replace(/\\/g, "/")
};


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
