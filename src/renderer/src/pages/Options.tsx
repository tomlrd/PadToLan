import React, { useState } from 'react'
import { useKeyBindStore } from '../store/useKeyBindStore'
import { useLayoutStore } from '../store/useLayoutStore'
import useOptionsStore from '../store/useOptionsStore'

const OptionsPage: React.FC = () => {
  const { addDefaultLayoutSC, getLayout } = useLayoutStore()
  const { addDefaultKeyBindListSC, getKeyBindList } = useKeyBindStore()
  const { options, setOptions } = useOptionsStore()
  const [newIP, setNewIP] = useState('')
  const [port, setPort] = useState(options.port)
  const [multi, setMulti] = useState(options.multi)

  // Check if SC4.0 layout and keybinds already exist
  const isSC4SetupPresent = !!getKeyBindList('sc4.0.defaultkb') && !!getLayout('sc4.0.defaultl')

  const addIP = () => {
    if (newIP) {
      if (/<script[^>]*>/i.test(newIP)) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      setOptions({ ipsWhitelist: [...options.ipsWhitelist, newIP] })
      setNewIP('')
    }
  }

  const removeIP = (ipToRemove: string) => {
    setOptions({
      ipsWhitelist: options.ipsWhitelist.filter((ip) => ip !== ipToRemove)
    })
  }

  const updatePort = () => {
    if (port > 0) {
      setOptions({ port })
    }
  }

  const updateMulti = (value: boolean) => {
    setOptions({ multi: value })
    setMulti(value)
  }

  const handleResetLayoutandKeybinds = () => {
    if (!isSC4SetupPresent) {
      addDefaultKeyBindListSC()
      addDefaultLayoutSC()
      window.electron.ipcRenderer.invoke('reset-first-run')
    }
  }

  return (
    <div className="p-4 text-white">
      <div className="mt-4">
        <h2 className="text-xl font-semibold">IP Whitelist</h2>
        <ul>
          {options.ipsWhitelist.map((ip, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{ip}</span>
              <button onClick={() => removeIP(ip)} className="text-red-500 hover:underline">
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add new IP"
            value={newIP}
            onChange={(e) => setNewIP(e.target.value)}
            className="border px-2 py-1"
            style={{ color: 'black' }}
          />
          <button onClick={addIP} className="ml-2 bg-blue-500 text-white px-4 py-1">
            Add IP
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Port</h2>
        <input
          type="number"
          value={port}
          onChange={(e) => setPort(parseInt(e.target.value, 10))}
          className="border px-2 py-1"
          style={{ color: 'black' }}
          placeholder=">= 3000"
        />
        <button onClick={updatePort} className="ml-2 bg-blue-500 text-white px-4 py-1">
          Update Port
        </button>
        <p className="text-red-700">
          Please DO NOT use an open port or this app will be open to public
        </p>
      </div>

      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={multi}
            onChange={(e) => updateMulti(e.target.checked)}
            className="w-5 h-5"
          />
          <span>Multi Layouts</span>
        </label>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Reset</h2>
        <button
          onClick={handleResetLayoutandKeybinds}
          className={`bg-blue-500 text-white px-4 py-1 ${
            isSC4SetupPresent
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={isSC4SetupPresent}
        >
          {isSC4SetupPresent
            ? 'SC4.0 Phone layout and StarCitizen4.0 keybinds are already present, please delete both before'
            : 'Reset StarCitizen 4.0 Layout and Keybinds'}
        </button>
      </div>

      <div className="mt-4 ">
        <h2 className="text-2xl font-semibold mb-3 text-gray-50 pb-2">Credits</h2>
        <div className="mb-2">
          <p className="text-sm text-gray-50 font-medium">Author: sTylow</p>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-50 font-medium">RSI:</p>
          <a
            href="https://robertsspaceindustries.com/citizens/sTyloww"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            https://robertsspaceindustries.com/citizens/sTyloww
          </a>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-50 font-medium">Official repository:</p>
          <a
            href="https://github.com/tomlrd/PadToLan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            https://github.com/tomlrd/PadToLan
          </a>
        </div>
        <div>
          <p className="text-sm text-gray-50 font-medium">Licence: MIT</p>
        </div>
      </div>
    </div>
  )
}

export default OptionsPage
