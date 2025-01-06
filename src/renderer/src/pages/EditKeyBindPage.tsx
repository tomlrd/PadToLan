import React, { useEffect, useState } from 'react'
import { useKeyBindStore } from '../store/useKeyBindStore'
import { KeyBind, Modifier } from '../types/keybinds'
import { CirclePlus, CircleX, Edit3, Trash } from 'lucide-react'

const EditKeyBindPage: React.FC = () => {
  const {
    keyBindLists,
    updateKeyBindList,
    addDefaultKeyBind,
    addBlankKeyBindList,
    deleteKeyBindList,
    selectedKeyBindListUid,
    selectKeyBindList,
    deleteKeyBind
  } = useKeyBindStore()

  const currentKeyBindList = keyBindLists.find((list) => list.uid === selectedKeyBindListUid)
  const [isEditing, setIsEditing] = useState(false)
  const [editedKeyBindListName, setEditedKeyBindListName] = useState<string | null>(null)

  const handleSaveKeyBind = (keyBindUid: string, updatedValue: Partial<KeyBind>) => {
    if (!currentKeyBindList) return

    if (
      Object.values(updatedValue).some(
        (value) => typeof value === 'string' && /<script[^>]*>/i.test(value)
      )
    ) {
      alert("Invalid input: '<script>' is not allowed.")
      return
    }
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

  const handleKeyBindListNameChange = () => {
    if (currentKeyBindList && editedKeyBindListName !== null) {
      if (/<script[^>]*>/i.test(editedKeyBindListName)) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      const updatedKeyBindList = {
        ...currentKeyBindList,
        name: editedKeyBindListName
      }
      updateKeyBindList(updatedKeyBindList)
      setIsEditing(false)
    }
  }
  const handleDeleteKeyBindList = () => {
    if (currentKeyBindList) {
      deleteKeyBindList(currentKeyBindList.uid)
    }
  }
  useEffect(() => {
    if (!currentKeyBindList && keyBindLists.length > 0) {
      selectKeyBindList(keyBindLists[0].uid)
    }
  }, [currentKeyBindList, keyBindLists])

  return (
    <div className="p-4">
      <div className="flex items-start space-x-4">
        <button
          onClick={addBlankKeyBindList}
          className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Keybind List
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editedKeyBindListName || currentKeyBindList?.name || ''}
            onChange={(e) => setEditedKeyBindListName(e.target.value)}
            onBlur={handleKeyBindListNameChange}
            className="mb-4 w-60 p-2 border rounded"
          />
        ) : (
          <select
            value={selectedKeyBindListUid || ''}
            onChange={(e) => selectKeyBindList(e.target.value)}
            className="mb-4 w-60 p-2 border rounded"
          >
            {keyBindLists.map((keyBindList) => (
              <option key={keyBindList.uid} value={keyBindList.uid}>
                {keyBindList.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => {
            setIsEditing(true)
            setEditedKeyBindListName(currentKeyBindList?.name || '')
          }}
        >
          <Edit3 size={16} />
        </button>

        <button
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteKeyBindList}
        >
          <Trash size={16} />
        </button>
      </div>
      <button
        onClick={handleAddKeyBind}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Key
      </button>

      {currentKeyBindList ? (
        <div className="space-y-4">
          {currentKeyBindList.keybinds.map((keybind) => (
            <div
              key={keybind.uid}
              className="flex items-center bg-gray-100 p-4 rounded border space-x-2 h-20"
            >
              <button
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                  deleteKeyBind(currentKeyBindList.uid, keybind.uid)
                }}
              >
                <Trash size={16} />
              </button>
              <input
                type="text"
                value={keybind.name}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { name: e.target.value })}
                className="p-2 border rounded w-44"
                placeholder="Name"
              />

              <input
                type="text"
                value={keybind.keybind || ''}
                onChange={(e) => handleSaveKeyBind(keybind.uid, { keybind: e.target.value })}
                className="p-2 border rounded w-16"
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
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={keybind.doubletap}
                    onChange={(e) =>
                      handleSaveKeyBind(keybind.uid, { doubletap: e.target.checked })
                    }
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
                      type="text"
                      value={
                        keybind.repeatNumber === 'infinite' ? 'infinite' : keybind.repeatNumber
                      }
                      onChange={(e) =>
                        handleSaveKeyBind(keybind.uid, {
                          repeatNumber:
                            Number(e.target.value) === 0 ? 'infinite' : Number(e.target.value)
                        })
                      }
                      className="p-2 border rounded"
                      style={{ width: '70px' }}
                    />
                    times
                    <input
                      type="number"
                      value={keybind.delayRepeat}
                      onChange={(e) =>
                        handleSaveKeyBind(keybind.uid, { delayRepeat: Number(e.target.value) })
                      }
                      className="p-2 border rounded"
                      style={{ width: '80px' }}
                    />
                    delay
                  </>
                )}
              </div>
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
