import { useLayoutsStore, useOptionsStore } from '@renderer/store'
import { Link } from 'react-router-dom'

const Topbar = () => {
  const { selectedLayout } = useLayoutsStore()

  const { options } = useOptionsStore()

  const handleStartServer = () => {
    console.log(selectedLayout?.name)
    window.electron.ipcRenderer.send('start:server', [selectedLayout, options])
    console.log(options);
    
  }

  return (
    <nav id="topbar">
      <Link className="navbtn" to="/">
        Home
      </Link>
      <Link className="navbtn" to="/options">
        Options
      </Link>
      <Link className="navbtn" to="/keybinds">
        keybinds
      </Link>
      <button id="startserver" onClick={() => handleStartServer()}>
        START
      </button>
    </nav>
  )
}

export default Topbar
