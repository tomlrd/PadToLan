import React from 'react'
import { KeyBindList } from '../types/keybinds'

interface KeyBindEditorProps {
  keyBindList: KeyBindList
  onUpdateKeyBindList: (updatedKeyBindList: KeyBindList) => void
}

const KeyBindEditor: React.FC<KeyBindEditorProps> = ({ keyBindList, onUpdateKeyBindList }) => {
  const handleUpdateKeyBind = (keyBindUid: string, updatedValue: Partial<KeyBindList>) => {
    const updatedKeyBindList = {
      ...keyBindList,
      keybinds: keyBindList.keybinds.map((keybind) =>
        keybind.uid === keyBindUid ? { ...keybind, ...updatedValue } : keybind
      )
    }
    onUpdateKeyBindList(updatedKeyBindList)
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Modifier les Keybinds</h3>
      {keyBindList.keybinds.map((keybind) => (
        <div key={keybind.uid} className="mb-4 border p-4 rounded">
          <label>Nom :</label>
          <input
            type="text"
            value={keybind.name}
            onChange={(e) => handleUpdateKeyBind(keybind.uid, { name: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
    </div>
  )
}

export default KeyBindEditor
