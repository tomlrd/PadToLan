import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EditKeyBindPage from './pages/EditKeyBindPage'
import Options from './pages/Options'
import ServerModal from './components/ServerModal'

const App: React.FC = () => {
  const [serverIsRunning, setServerIsRunning] = useState<boolean>(false)
  const [server, setServer] = useState<any>()

  useEffect(() => {
    const serverStatusListener = (_e, server) => {
      if (server !== false) {
        setServerIsRunning(true)
        setServer(server)
      } else {
        setServerIsRunning(false)
        setServer(null)
      }
    }

    window.electron.ipcRenderer.on('serverstatus', serverStatusListener)

    return () => {
      window.electron.ipcRenderer.removeAllListeners('serverstatus')
    }
  }, [])

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {serverIsRunning && <ServerModal server={server} />}
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-keybind" element={<EditKeyBindPage />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
