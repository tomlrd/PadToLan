import React, { useEffect, useState } from 'react'
import useKeyBindStore from '../store/useKeyBindStore'
import { KeyBind, Modifier, KeyBindList } from '../types/keybinds'
import useLayoutStore from '../store/useLayoutStore'

const EditKeyBindPage: React.FC = () => {
  const { keyBindLists, addDefaultKeyBindList, updateKeyBindList } = useKeyBindStore()
  const { selectedLayout } = useLayoutStore()
  const [currentKeyBindList, setCurrentKeyBindList] = useState<KeyBindList | null>(null)

  // Initialisation : sélectionne le KeyBind lié au Layout
  useEffect(() => {
    if (keyBindLists.length === 0) {
      addDefaultKeyBindList()
    } else if (selectedLayout?.bindedKbList) {
      const initialKeyBindList = keyBindLists.find(
        (keyBindList) => keyBindList.uid === selectedLayout.bindedKbList
      )
      setCurrentKeyBindList(initialKeyBindList || null)
    } else {
      setCurrentKeyBindList(keyBindLists[0]) // Par défaut, sélectionne le premier KeyBind
    }
  }, [keyBindLists, selectedLayout, addDefaultKeyBindList])

  const handleSaveKeyBind = (keyBindUid: string, updatedValue: Partial<KeyBind>) => {
    if (!currentKeyBindList) return

    const updatedKeyBindList = {
      ...currentKeyBindList,
      keybinds: currentKeyBindList.keybinds.map((keybind) =>
        keybind.uid === keyBindUid ? { ...keybind, ...updatedValue } : keybind
      )
    }

    updateKeyBindList(updatedKeyBindList)
  }

  const handleKeyBindListChange = (uid: string) => {
    const selected = keyBindLists.find((keyBindList) => keyBindList.uid === uid) || null
    setCurrentKeyBindList(selected)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Modifier les Keybinds</h1>

      {/* Sélection du KeyBindList */}
      <select
        value={currentKeyBindList?.uid || ''}
        onChange={(e) => handleKeyBindListChange(e.target.value)}
        className="mb-4 w-full p-2 border rounded"
      >
        {keyBindLists.map((keyBindList) => (
          <option key={keyBindList.uid} value={keyBindList.uid}>
            {keyBindList.name}
          </option>
        ))}
      </select>

      {currentKeyBindList ? (
        <div className="space-y-4">
          {currentKeyBindList.keybinds.map((keybind) => (
            <div
              key={keybind.uid}
              className="flex items-center bg-gray-100 p-4 rounded border space-x-4"
            >
              {/* Nom */}
              <input
                type="text"
                value={keybind.name}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { name: e.target.value })}
                className="p-2 border rounded flex-1"
                placeholder="Nom"
              />

              {/* Touche */}
              <input
                type="text"
                value={keybind.keybind || ''}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { keybind: e.target.value })}
                className="p-2 border rounded flex-1"
                placeholder="Touche"
              />

              {/* Modificateurs */}
              {keybind.modifiers.map((modifier, index) => (
                <select
                  key={index}
                  value={modifier}
                  onChange={(e) => {
                    const updatedModifiers = [...keybind.modifiers]
                    updatedModifiers[index] = e.target.value as Modifier

                    handleSaveKeyBind(keybind.uid, {
                      modifiers: updatedModifiers as [Modifier, Modifier] | [Modifier] | []
                    })
                  }}
                  className="p-2 border rounded"
                >
                  {Object.values(Modifier).map((mod) => (
                    <option key={mod} value={mod}>
                      {mod}
                    </option>
                  ))}
                </select>
              ))}

              {/* Ajouter un modificateur */}
              {keybind.modifiers.length < 2 && (
                <button
                  onClick={() =>
                    handleSaveKeyBind(keybind.uid, {
                      modifiers: [...keybind.modifiers, Modifier.None] as
                        | [Modifier, Modifier]
                        | [Modifier]
                    })
                  }
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Ajouter
                </button>
              )}

              {/* Double Tap */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={keybind.doubletap}
                  onChange={(e) => handleSaveKeyBind(keybind.uid, { doubletap: e.target.checked })}
                />
                <span>Double Tap</span>
              </label>

              {/* Hold */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={keybind.hold}
                  onChange={(e) => handleSaveKeyBind(keybind.uid, { hold: e.target.checked })}
                />
                <span>Hold</span>
              </label>

              {/* Repeat */}
              <input
                type="number"
                value={keybind.repeat === 'infinite' ? 0 : keybind.repeat}
                onChange={(e) =>
                  handleSaveKeyBind(keybind.uid, {
                    repeat: Number(e.target.value) === 0 ? 'infinite' : Number(e.target.value)
                  })
                }
                className="p-2 border rounded w-16"
                placeholder="Repeat"
              />

              {/* Delay Repeat */}
              <input
                type="number"
                value={keybind.delayRepeat}
                onChange={(e) =>
                  handleSaveKeyBind(keybind.uid, { delayRepeat: Number(e.target.value) })
                }
                className="p-2 border rounded w-16"
                placeholder="Delay"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune liste de Keybinds disponible.</p>
      )}
    </div>
  )
}

export default EditKeyBindPage
