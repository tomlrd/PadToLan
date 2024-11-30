import React, { useState } from 'react'
import useKeyBindStore from '../store/useKeyBindStore'
import { KeyBind, Modifier } from '../types/keybinds'

const KeyBindManager: React.FC = () => {
  const { keyBindLists, selectedKeyBindList, setSelectedKeyBindList, addKeyBind, removeKeyBind } =
    useKeyBindStore()

  const [newKeyBindName, setNewKeyBindName] = useState('')
  const [newKeyBindKey, setNewKeyBindKey] = useState('')
  const [newModifiers, setNewModifiers] = useState<Modifier[]>([])
  const [newDoubleTap, setNewDoubleTap] = useState(false)

  const handleAddKeyBind = () => {
    if (!selectedKeyBindList) return

    const newKeyBind: KeyBind = {
      uid: `keybind-${Date.now()}`,
      name: newKeyBindName,
      keybind: newKeyBindKey,
      modifiers: newModifiers as [Modifier, Modifier] | [Modifier] | [],
      doubletap: newDoubleTap,
      hold: false,
      repeat: 1,
      delayRepeat: 0
    }

    addKeyBind(selectedKeyBindList.uid, newKeyBind)
    setNewKeyBindName('')
    setNewKeyBindKey('')
    setNewModifiers([])
    setNewDoubleTap(false)
  }

  return (
    <div className="p-4 bg-gray-100 border rounded">
      <h2 className="text-xl font-bold mb-4">Gestion des Keybinds</h2>

      <select
        onChange={(e) =>
          setSelectedKeyBindList(keyBindLists.find((list) => list.uid === e.target.value) || null)
        }
        value={selectedKeyBindList?.uid || ''}
        className="mb-4 p-2 border rounded w-full"
      >
        <option value="">Sélectionnez une liste de Keybinds</option>
        {keyBindLists.map((list) => (
          <option key={list.uid} value={list.uid}>
            {list.name}
          </option>
        ))}
      </select>

      {selectedKeyBindList && (
        <>
          <h3 className="text-lg font-bold mb-2">Keybinds :</h3>
          <ul className="mb-4">
            {selectedKeyBindList.keybinds.map((keyBind) => (
              <li
                key={keyBind.uid}
                className="flex justify-between items-center p-2 bg-white border rounded mb-2"
              >
                <span>{keyBind.name}</span>
                <button
                  onClick={() => removeKeyBind(selectedKeyBindList.uid, keyBind.uid)}
                  className="text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mb-2">Ajouter un Keybind :</h3>
          <input
            type="text"
            value={newKeyBindName}
            onChange={(e) => setNewKeyBindName(e.target.value)}
            placeholder="Nom du Keybind"
            className="p-2 border rounded mb-2 w-full"
          />
          <input
            type="text"
            value={newKeyBindKey}
            onChange={(e) => setNewKeyBindKey(e.target.value)}
            placeholder="Touche"
            className="p-2 border rounded mb-2 w-full"
          />
          <button
            onClick={handleAddKeyBind}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Ajouter
          </button>
        </>
      )}
    </div>
  )
}

export default KeyBindManager
