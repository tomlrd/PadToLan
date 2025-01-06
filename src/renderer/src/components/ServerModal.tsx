import QRCode from 'react-qr-code'

const ServerModal = ({ server }: { server: any }) => {
  return (
    <div
      id="servermodal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mt-4 text-center">
          <p className="text-gray-600">Server available at:</p>
          <a
            target="_blank"
            href={`http://${server[0]}:${server[1]}`}
            className="text-blue-500 hover:underline"
          >
            http://{server[0]}:{server[1]}
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <QRCode
            size={256}
            className="border border-gray-200"
            value={`http://${server[0]}:${server[1]}`}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <button
            id="stopserver"
            onClick={() => window.electron.ipcRenderer.send('stop:server')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            STOP
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServerModal
