import React from 'react'
import { useLayoutStore } from '../store/useLayoutStore'
import { Trash, Plus } from 'lucide-react'

const LayoutSelector: React.FC = () => {
  const { layouts, selectedLayoutUid, selectLayout, addDefaultLayout, deleteLayout } =
    useLayoutStore()

  const handleDeleteLayout = () => {
    if (selectedLayoutUid) {
      deleteLayout(selectedLayoutUid)
    }
  }

  const handleAddLayout = () => {
    addDefaultLayout()
  }

  return (
    <div className="flex items-center space-x-4">
      {/* Menu déroulant pour sélectionner un layout */}
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

      {/* Bouton pour ajouter un nouveau layout */}
      <button
        onClick={handleAddLayout}
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        <Plus size={16} />
      </button>

      {/* Bouton pour supprimer le layout sélectionné */}
      <button
        onClick={handleDeleteLayout}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        disabled={!selectedLayoutUid}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}

export default LayoutSelector
