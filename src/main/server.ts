import express, { Express } from 'express'
/*import helmet from 'helmet'; */
import path from 'path'
import fs from 'fs'
import { mainWindow } from '../main'
import { ipcMain } from 'electron'
import { createHttpTerminator } from 'http-terminator'
import { Server } from 'http'
import os from 'os'
import { is } from '@electron-toolkit/utils'
let serverInstance: Server

export function createServer([layout, options]): void {
  const networkInterfaces = os.networkInterfaces()
  const localIPv4 = Object.values(networkInterfaces)
    .flat()
    .filter((iface: any) => iface.family === 'IPv4' && !iface.internal)
    .map((iface: any) => iface.address)
  const port = options.server.port
  const app: Express = express()
  //let connections = 0
  console.log(options)
  console.log(layout)

  if (options.server.ipwhitelist.length !== 0) {
    const restrictIP = (allowedIPs) => {
      return (req, res, next) => {
        const clientIP = req.ip
        if (allowedIPs.includes(clientIP)) {
          next()
        } else {
          res.status(403).send('Access forbidden.')
        }
      }
    }
    const allowedIPAddresses = options.server.ipwhitelist
    app.use(restrictIP(allowedIPAddresses))
  }

  /*     const maxConnections = options.server.maxConnections || 0;

    app.use((_req, res, next) => {
        if (maxConnections === 0 || connections < maxConnections) {
            connections++;
            console.log(connections);
            
            next();
        } else {
            res.status(429).send('Max connections');
        }
    });

    app.use((_req, _res, next) => {
        connections--;
        next();
    });
 */

  if (is.dev) {
    console.log('yhrfytytytr');
    
    app.use(express.static(path.resolve('.' ,'build')))
  } else {
    app.use(express.static(path.resolve('.\\resources\\app.asar.unpacked\\resources\\')))
  }
  app.use((_req, res, next) => {
    res.setHeader('Content-Type', 'application/javascript')
    //res.setHeader('Content-Security-Policy', "img-src 'self' http://localhost:3000");
    next()
  })

  app.use('/images/:imageUrl', (req, res) => {
    let imageUrl = req.originalUrl
    if (imageUrl.indexOf('/images/') === 0) {
      imageUrl = imageUrl.slice('/images/'.length)
    }
    fs.access(path.resolve('images', imageUrl), fs.constants.F_OK, (err) => {
      if (err) {
        res.status(404).send('Image not found')
      } else {
        if (is.dev) {
          console.log('______________');
          console.log('______________');
          console.log('______________');
          console.log('______________');
          console.log(path.resolve('images', imageUrl));
          
          res.sendFile(path.resolve('images', imageUrl))
          return
        }
        res.sendFile(path.resolve('.\\resources\\app.asar.unpacked\\resources\\images', imageUrl))
      }
    })
  })

  app.get('/', (_req, res) => {
    console.log('/');
    
    if (is.dev) {
      console.log('dev');
      
      res.sendFile(path.resolve('index.html'))
      return
    }
    res.sendFile(path.resolve('.\\resources\\app.asar.unpacked\\resources\\index.html'))
  })

  app.get('/layout', (_req, res) => {
    res.json({ layout })
  })

  app.get('/key/:id', (req, res) => {
    mainWindow.webContents.send('key', [req.params.id, options])
    res.status(200).end()
  })

  serverInstance = app.listen(port, () => {
    mainWindow.webContents.send('serverstatus', [localIPv4[0], port])
  })

  const httpTerminator = createHttpTerminator({ server: serverInstance })

  ipcMain.on('stop:server', async (_e, _args) => {
    await mainWindow.webContents.send('serverstatus', false)
    await httpTerminator.terminate()
  })
}
