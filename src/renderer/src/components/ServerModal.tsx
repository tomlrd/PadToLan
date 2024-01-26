import QRCode from 'react-qr-code'
import { useEffect } from 'react'

const ServerModal = ({ server }: { server: any }) => {
  useEffect(() => {
    console.log(server)

    return () => {}
  }, [])
  return (
    <div id="servermodal">
      <div className="linemodal">
        <button id="stopserver" onClick={() => window.electron.ipcRenderer.send('stop:server')}>
          STOP
        </button>
      </div>
      <div className="linemodal">
        <div>Available at : </div>
        <a target="_blank" href={`http://${server[0]}:${server[1]}`}>
          http://{server[0]}:{server[1]}
        </a>
      </div>
      <QRCode
        size={256}
        style={{ height: '300px', width: '300px' }}
        value={`http://${server[0]}:${server[1]}`}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}

export default ServerModal
