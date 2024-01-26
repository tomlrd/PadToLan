import { app, shell, BrowserWindow, dialog, ipcMain, Tray } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import path from 'path'
import { createServer } from './server'
import './actionkeys'
console.log(path.resolve('.', 'src/main', 'index.html'))
console.log(path.resolve(__dirname, '../renderer/index.html'))
let mainWindow
let tray
let minimizeInNotif: boolean = false
import firstRun from 'electron-first-run'

const isFirstRun: any = firstRun()
console.log(isFirstRun)

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 950,
    height: 1050,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      webSecurity: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.webContents.send('firstrun', isFirstRun)
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  tray = new Tray(icon)

  mainWindow.on('minimize', (event) => {
    event.preventDefault()
    mainWindow.webContents.send('minimizeInNotif', '')
  })

  tray.on('click', () => {
    mainWindow.show()
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.padtolan')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  ipcMain.on('get:img', async (e, type) => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }]
    })
    if (!result.canceled && result.filePaths.length > 0) {
      const selectedImagePath = result.filePaths[0]
      e.reply('selected:img', [selectedImagePath, type])
    }
  })
  ipcMain.on('start:server', async (_e, args) => {
    console.log(args[0].name)
    await createServer(args)
  })
  ipcMain.on('forceminimize', async (_e, args) => {
    if (args === true) {
      mainWindow.hide()
    } else {
      mainWindow.minimize()
    }
  })
  ipcMain.on('return:minimizeInNotif', async (_e, args) => {
    if (args === true) {
      mainWindow.hide()
    } else {
      mainWindow.minimize()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

export { mainWindow }
