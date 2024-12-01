import React, { useEffect, useState } from 'react'
import { useKeyBindStore } from '../store/useKeyBindStore'
import { KeyBind, Modifier, KeyBindList } from '../types/keybinds'
import { useLayoutStore } from '../store/useLayoutStore'
import { CirclePlus, CircleX } from 'lucide-react'

const EditKeyBindPage: React.FC = () => {
  const { keyBindLists, addDefaultKeyBindList, updateKeyBindList, addDefaultKeyBind } =
    useKeyBindStore()
  const { getSelectedLayout } = useLayoutStore()
  const selectedLayout = getSelectedLayout()
  const [currentKeyBindList, setCurrentKeyBindList] = useState<KeyBindList | null>(null)

  useEffect(() => {
    if (keyBindLists.length === 0) {
      addDefaultKeyBindList()
    } else if (selectedLayout?.bindedKbList) {
      const initialKeyBindList = keyBindLists.find(
        (keyBindList) => keyBindList.uid === selectedLayout.bindedKbList
      )
      setCurrentKeyBindList(initialKeyBindList || null)
    } else {
      setCurrentKeyBindList(keyBindLists[0])
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

  const handleAddKeyBind = () => {
    if (currentKeyBindList) {
      addDefaultKeyBind(currentKeyBindList.uid)
    }
  }

  const handleKeyBindListChange = (uid: string) => {
    const selected = keyBindLists.find((keyBindList) => keyBindList.uid === uid) || null
    setCurrentKeyBindList(selected)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Keybinds</h1>
      <button
        onClick={handleAddKeyBind}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Key
      </button>

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
              className="flex items-center bg-gray-100 p-4 rounded border space-x-2"
            >
              <input
                type="text"
                value={keybind.name}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { name: e.target.value })}
                className="p-2 border rounded w-1/3"
                placeholder="Name"
              />

              <input
                type="text"
                value={keybind.keybind || ''}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { keybind: e.target.value })}
                className="p-2 border rounded w-1/2"
                placeholder="Keybind"
              />

              <div className="flex flex-wrap items-center space-x-2">
                {keybind.modifiers.map((modifier, index) => (
                  <div key={index} className="flex items-center border p-2 rounded-md bg-gray-50">
                    <select
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

                    <CircleX
                      size={20}
                      className="text-red-500 cursor-pointer ml-2"
                      onClick={() => {
                        const updatedModifiers = keybind.modifiers.filter((_, i) => i !== index)
                        handleSaveKeyBind(keybind.uid, {
                          modifiers: updatedModifiers as [Modifier, Modifier] | [Modifier] | []
                        })
                      }}
                    />
                  </div>
                ))}

                {keybind.modifiers.length < 2 && (
                  <div className="flex items-center space-x-2 border p-2 rounded-md bg-gray-50">
                    <button
                      onClick={() =>
                        handleSaveKeyBind(keybind.uid, {
                          modifiers: [...keybind.modifiers, Modifier.LeftCtrl] as
                            | [Modifier, Modifier]
                            | [Modifier]
                        })
                      }
                      className="flex items-center"
                    >
                      <CirclePlus size={16} className="text-green-500 mr-1" />
                      Add Modifier
                    </button>
                  </div>
                )}
              </div>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={keybind.doubletap}
                  onChange={(e) => handleSaveKeyBind(keybind.uid, { doubletap: e.target.checked })}
                />
                <span>Double Tap</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={keybind.hold}
                  onChange={(e) => handleSaveKeyBind(keybind.uid, { hold: e.target.checked })}
                />
                <span>Hold</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={keybind.repeat}
                  onChange={(e) => handleSaveKeyBind(keybind.uid, { repeat: e.target.checked })}
                />
                <span>Repeat</span>
              </label>

              {keybind.repeat && (
                <>
                  <input
                    type="number"
                    value={keybind.repeatNumber === 'infinite' ? 0 : keybind.repeatNumber}
                    onChange={(e) =>
                      handleSaveKeyBind(keybind.uid, {
                        repeatNumber:
                          Number(e.target.value) === 0 ? 'infinite' : Number(e.target.value)
                      })
                    }
                    className="p-2 border rounded w-16"
                    placeholder="Repeat"
                  />

                  <input
                    type="number"
                    value={keybind.delayRepeat}
                    onChange={(e) =>
                      handleSaveKeyBind(keybind.uid, { delayRepeat: Number(e.target.value) })
                    }
                    className="p-2 border rounded w-16"
                    placeholder="Delay"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No Keybinds available.</p>
      )}
    </div>
  )
}

export default EditKeyBindPage
