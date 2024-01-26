import { ElectronAPI } from '@electron-toolkit/preload'
import layoutsStore2 from '../store'
declare global {
  interface Window {
    electron: ElectronAPI
    api: layoutsStore2
  }
}
