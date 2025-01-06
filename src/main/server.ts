import express, { Express } from 'express'
import path from 'path'
import { is } from '@electron-toolkit/utils'
import { sendKey } from './actionkeys'
import os from 'os'
import { mainWindow } from '../main'
import { createHttpTerminator } from 'http-terminator'
import { Server } from 'http'
import { ipcMain } from 'electron'
import { clearAllIntervals } from './actionkeys'
let serverInstance: Server

export function createServer(layouts, keybinds, options, currentLayout): void {
  const appExpress: Express = express()

  const networkInterfaces = os.networkInterfaces()
  const localIPv4 = Object.values(networkInterfaces)
    .flat()
    .filter(
      (iface: any) =>
        iface?.family === 'IPv4' && !iface.internal && iface.address.startsWith('192.168.')
    )
    .map((iface: any) => iface.address)

  const getWhitelist = () => options.ipsWhitelist || []

  if (getWhitelist().length > 0) {
    appExpress.use((req, res, next) => {
      const clientIP = req.ip || req.connection.remoteAddress
      if (!getWhitelist().includes(clientIP)) {
        return res.status(403).send('Access denied')
      }
      next()
    })
  }

  if (is.dev) {
    appExpress.use(express.static(path.resolve('.', 'build')))
  } else {
    appExpress.use(express.static(path.join(process.resourcesPath, 'pad')))
  }

  appExpress.use((_req, res, next) => {
    res.setHeader('Content-Type', 'application/javascript')
    next()
  })

  /*   DEBUG
  appExpress.use((_req, _res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url} from ${req.ip}`)
    next()
  }) */

  appExpress.get('/', (_req, res) => {
    res.sendFile(path.join(process.resourcesPath, 'pad', 'index.html'))
  })

  appExpress.use('/images/:imageUrl', (req, res) => {
    let imageUrl = req.originalUrl
    if (imageUrl.indexOf('/images/') === 0) {
      imageUrl = imageUrl.slice('/images/'.length)
    }
    res.sendFile(path.resolve(imageUrl))
  })

  appExpress.get('/key/:id', async (req, res) => {
    const keyId = req.params.id
    const layoutUid = req.query.layoutUid

    if (!layoutUid) {
      return res.status(400).send('Layout UID is required.')
    }

    const activeLayout = layouts.find((layout) => layout.uid === layoutUid)

    if (!activeLayout || !activeLayout.bindedKbList) {
      return res.status(404).send('No active layout or binded key list found.')
    }

    const bindedKeyBindList = keybinds.find((keybind) => keybind.uid === activeLayout.bindedKbList)

    if (!bindedKeyBindList) {
      return res.status(404).send('KeyBindList not found for active layout.')
    }

    const keyBind = bindedKeyBindList.keybinds.find((kb) => kb.uid === keyId)

    if (!keyBind) {
      return res.status(404).send(`KeyBind with ID ${keyId} not found.`)
    }

    try {
      await sendKey(keyBind)
      res.status(200).send({ success: true })
    } catch (err) {
      console.error('Error in sendKey:', err)
      res.status(500).send('Error processing key action.')
    }
  })

  appExpress.get('/layout', (_req, res) => {
    if (options.multi === true) {
      res.json({ layouts })
    } else {
      res.json({ layouts: [currentLayout] })
    }
  })

  var PORT = options.port
  if (PORT < 3000) {
    PORT = 3000
  }

  serverInstance = appExpress.listen(PORT, '0.0.0.0', () => {
    mainWindow.webContents.send('serverstatus', [localIPv4[0], PORT])
  })

  const httpTerminator = createHttpTerminator({ server: serverInstance })

  ipcMain.on('stop:server', async (_e, _args) => {
    await clearAllIntervals()
    await mainWindow.webContents.send('serverstatus', false)
    await httpTerminator.terminate()
  })
}
