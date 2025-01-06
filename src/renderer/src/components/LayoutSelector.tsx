import { ChevronDown, ChevronUp, Edit3, Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { useKeyBindStore } from '../store/useKeyBindStore'
import { useLayoutStore } from '../store/useLayoutStore'
import { usePageStore } from '../store/usePageStore'
import { Layout } from '../types/layouts'
import ItemManager from './ItemManager'
import PageManager from './PageManager'

const LayoutSelector: React.FC = () => {
  const { keyBindLists, selectKeyBindList } = useKeyBindStore()
  const { layouts, selectedLayoutUid, selectLayout, addDefaultLayout, deleteLayout, updateLayout } =
    useLayoutStore()
  const { selectPage } = usePageStore()
  const [isEditing, setIsEditing] = useState(false)
  const [layoutName, setLayoutName] = useState('')
  const [isILayoutonfigCollapsed, setIsLayoutConfigCollapsed] = useState(false)
  const selectedLayout = layouts.find((layout) => layout.uid === selectedLayoutUid)

  const handleSelectLayout = (uid: string) => {
    selectLayout(uid)

    const selectedLayout = layouts.find((layout) => layout.uid === uid)
    if (selectedLayout?.pages.length) {
      selectPage(selectedLayout.pages[0].uid)
    }
  }

  const handleAddLayout = () => {
    addDefaultLayout()
  }

  const handleDeleteLayout = () => {
    if (selectedLayoutUid) {
      deleteLayout(selectedLayoutUid)
    }
  }

  const handleUpdateLayout = <T extends keyof Layout>(field: T, value: Layout[T]) => {
    if (typeof value === 'string' && /<script[^>]*>/i.test(value)) {
      alert("Invalid input: '<script>' is not allowed.")
      return
    }
    if (field === 'bindedKbList' && typeof value === 'string') {
      selectKeyBindList(value)
    }
    if (selectedLayout) {
      updateLayout({
        ...selectedLayout,
        [field]: value
      })
    }
  }

  const toggleEdit = () => {
    if (selectedLayout) {
      setIsEditing(true)
      setLayoutName(selectedLayout.name)
    }
  }

  const handleBlur = () => {
    if (selectedLayout && layoutName.trim() !== '') {
      handleUpdateLayout('name', layoutName.trim())
    }
    setIsEditing(false)
  }

  return (
    <>
      <div
        className=" my-1"
        style={{
          backgroundColor: '#153d56',
          borderRadius: '5px',
          padding: '3px'
        }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold flex-1 p-2 text-slate-50">Layouts config</h3>
          <button
            onClick={() => setIsLayoutConfigCollapsed(!isILayoutonfigCollapsed)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {isILayoutonfigCollapsed ? (
              <ChevronDown size={20} className="text-gray-950" />
            ) : (
              <ChevronUp size={20} className="text-gray-950" />
            )}
          </button>
        </div>
        {!isILayoutonfigCollapsed && (
          <>
            <div className="flex items-center space-x-4">
              {isEditing ? (
                <input
                  type="text"
                  value={layoutName}
                  onChange={(e) => setLayoutName(e.target.value)}
                  onBlur={handleBlur}
                  className="flex-1 p-2 border rounded"
                  autoFocus
                />
              ) : (
                <select
                  value={selectedLayoutUid || ''}
                  onChange={(e) => handleSelectLayout(e.target.value)}
                  className="flex-1 p-2 border rounded"
                >
                  <option value="">Select layout</option>
                  {layouts.map((layout) => (
                    <option key={layout.uid} value={layout.uid}>
                      {layout.name}
                    </option>
                  ))}
                </select>
              )}
              {!isEditing && (
                <button onClick={toggleEdit} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                  <Edit3 size={16} />
                </button>
              )}

              <button
                onClick={handleAddLayout}
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <Plus size={16} />
              </button>

              <button
                onClick={handleDeleteLayout}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={!selectedLayoutUid}
              >
                <Trash size={16} />
              </button>
            </div>

            {selectedLayout && (
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-medium text-slate-50">Width</label>
                  <input
                    type="number"
                    value={selectedLayout.width || ''}
                    onChange={(e) => handleUpdateLayout('width', parseInt(e.target.value, 10) || 0)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">Height</label>
                  <input
                    type="number"
                    value={selectedLayout.height || ''}
                    onChange={(e) =>
                      handleUpdateLayout('height', parseInt(e.target.value, 10) || 0)
                    }
                    className="p-2 border rounded w-full"
                  />
                </div>
              </div>
            )}

            {selectedLayout && (
              <>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-50">Keybinds</label>
                    <select
                      value={selectedLayout.bindedKbList || ''}
                      onChange={(e) => handleUpdateLayout('bindedKbList', e.target.value || null)}
                      className="p-2 border rounded w-full"
                    >
                      <option value="">None</option>
                      {keyBindLists.map((keybindList) => (
                        <option key={keybindList.uid} value={keybindList.uid}>
                          {keybindList.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col items-start space-y-1 text-slate-50">
                    <label className="text-sm font-medium">NoSleep</label>
                    <input
                      type="checkbox"
                      checked={selectedLayout.nosleep}
                      onChange={(e) => handleUpdateLayout('nosleep', e.target.checked)}
                      className="w-5 h-5"
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1 text-slate-50">
                    <label className="text-sm font-medium">NoNav</label>
                    <input
                      type="checkbox"
                      checked={selectedLayout.nonav}
                      onChange={(e) => handleUpdateLayout('nonav', e.target.checked)}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-50">cols</label>
                    <input
                      type="number"
                      value={selectedLayout.cols}
                      onChange={(e) => handleUpdateLayout('cols', Number(e.target.value))}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-50">rowHeight</label>
                    <input
                      type="number"
                      value={selectedLayout.rowHeight}
                      onChange={(e) => handleUpdateLayout('rowHeight', Number(e.target.value))}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {selectedLayout && <PageManager layout={selectedLayout} />}

      {selectedLayout && <ItemManager layout={selectedLayout} />}
    </>
  )
}

export default LayoutSelector
