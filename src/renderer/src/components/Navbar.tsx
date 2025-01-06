import React from 'react'
import { Link } from 'react-router-dom'
import { useLayoutStore } from '../store/useLayoutStore'
import { useKeyBindStore } from '../store/useKeyBindStore'
import { useOptionsStore } from '../store/useOptionsStore'

const Navbar: React.FC = () => {
  const { layouts, getSelectedLayout } = useLayoutStore()
  const { getAllKeyBindLists } = useKeyBindStore()
  const { getOptions } = useOptionsStore()

  return (
    <nav className="text-white p-4" style={{ backgroundColor: '#153d56' }}>
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold">PadToLan</h1>

        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition duration-200"
            onClick={() =>
              window.electron.ipcRenderer.send(
                'start:server',
                layouts,
                getAllKeyBindLists(),
                getOptions(),
                getSelectedLayout()
              )
            }
          >
            Run
          </button>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/edit-keybind"
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
          >
            Keybinds
          </Link>
          <Link
            to="/options"
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
          >
            Options
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
