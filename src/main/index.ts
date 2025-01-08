import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { execSync } from 'child_process'
import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import firstRun from 'electron-first-run'
import path, { join } from 'path'
import icon from '../../resources/icon.png?asset'
import { createServer } from './server'

let mainWindow
let keyboardLang

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 830,
    height: 940,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#0a1d29',
    icon: icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}`)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (_event, _argv, _workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.tomlrd.padtolan')
  const isFirstRun: any = firstRun()
  //firstRun.clear()
  console.log(isFirstRun)

  try {
    const layout = execSync('reg query "HKEY_CURRENT_USER\\Keyboard Layout\\Preload" /v 1', {
      encoding: 'utf8'
    })

    if (layout.includes('00000409')) {
      keyboardLang = 'qwerty'
    } else {
      keyboardLang = 'azerty'
    }
  } catch (error) {
    console.error('Erreur lors de la détection de la disposition:', error)
  }

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.handle('dialog:img', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }]
    })

    return result
  })

  ipcMain.handle('get-localappdata', () => {
    const localAppData =
      process.env.LOCALAPPDATA + '\\Programs\\padtolan\\resources\\app.asar.unpacked\\resources\\'
    const normalizedPath = path.normalize(localAppData)
    return normalizedPath
  })

  ipcMain.handle('first-run', () => {
    return isFirstRun
  })

  ipcMain.handle('reset-first-run', () => {
    firstRun.clear()
    console.log(isFirstRun)
    app.relaunch()
    app.exit(0)
  })

  ipcMain.on('start:server', async (_e, layouts, keybinds, options, currentLayout) => {
    await createServer(layouts, keybinds, options, currentLayout)
  })

  createWindow()
})

export { keyboardLang, mainWindow }
