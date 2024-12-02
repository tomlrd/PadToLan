import React from 'react'
import { useLayoutStore } from '../store/useLayoutStore'
import PageManager from './PageManager'
import ItemManager from './ItemManager'
import { Plus, Trash } from 'lucide-react'

const LayoutSelector: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout, addDefaultLayout, deleteLayout } =
    useLayoutStore()

  const selectedLayout = layouts.find((layout) => layout.uid === selectedLayoutUid)

  const handleAddLayout = () => {
    addDefaultLayout()
  }

  const handleDeleteLayout = () => {
    if (selectedLayoutUid) {
      deleteLayout(selectedLayoutUid)
    }
  }

  return (
    <div className="space-y-4">
      {/* Layout Selector */}
      <div className="flex items-center space-x-4">
        <select
          value={selectedLayoutUid || ''}
          onChange={(e) => selectLayout(e.target.value)}
          className="flex-1 p-2 border rounded"
        >
          <option value="">Sélectionnez un Layout</option>
          {layouts.map((layout) => (
            <option key={layout.uid} value={layout.uid}>
              {layout.name}
            </option>
          ))}
        </select>

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

      {/* Page Manager */}
      {selectedLayout && <PageManager layout={selectedLayout} />}

      {/* Item Manager */}
      {selectedLayout && <ItemManager layout={selectedLayout} />}
    </div>
  )
}

export default LayoutSelector
