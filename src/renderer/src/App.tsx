import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import ServerModal from './components/ServerModal'
import Home from './pages/Home'
import Options from './pages/Options'
import Navigation from './components/Topbar'
import KeyBinds from './pages/KeyBinds'

function App(): JSX.Element {
  const [serverIsRunning, setServerIsRunning] = useState<boolean>(false)
  const [server, setServer] = useState<any>()
  useEffect(() => {
    window.electron.ipcRenderer.on('serverstatus', (_e, server) => {
      if (server !== false) {
        setServerIsRunning(true)
        setServer(server)
      } else {
        setServerIsRunning(false)
        setServer(null)
      }
    })
  }, [])

  return (
    <Router>
      {serverIsRunning && <ServerModal server={server} />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<Options />} />
        <Route path="/keybinds" element={<KeyBinds />} />
      </Routes>
    </Router>
  )
}

export default App
