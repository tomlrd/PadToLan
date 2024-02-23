import { useLayoutsStore, useOptionsStore } from '@renderer/store'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

const Topbar = () => {
  const { selectedLayout } = useLayoutsStore()
  const { options } = useOptionsStore()
  let location = useLocation();
  const handleStartServer = () => {
    window.electron.ipcRenderer.send('start:server', [selectedLayout, options])
  }

  useEffect(() => {
    return () => {
    };
  }, []);
  useEffect(() => {
    console.log('Nom de la page actuelle :', location);
    return () => {
    };
  }, [location]);
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
      {location.pathname === "/" &&
        <button id="startserver" onClick={() => handleStartServer()}>
          START
        </button>
      }
    </nav>
  )
}

export default Topbar
