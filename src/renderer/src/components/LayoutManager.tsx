import React from 'react'
import useLayoutStore from '../store/useLayoutStore'
import useKeyBindStore from '../store/useKeyBindStore'

interface LayoutManagerProps {
  onSelectLayout: (layoutId: string | null) => void
  onSelectKeyBind: (keyBindId: string | null) => void
}

const LayoutManager: React.FC<LayoutManagerProps> = ({ onSelectLayout, onSelectKeyBind }) => {
  const { layouts, addDefaultLayout } = useLayoutStore()
  const { keyBindLists, addKeyBindList } = useKeyBindStore()

  // Crée un nouveau layout par défaut et le sélectionne
  const handleCreateLayout = () => {
    addDefaultLayout()
    onSelectLayout(layouts[layouts.length - 1]?.uid ?? null)
  }

  // Crée un nouveau keybind et le sélectionne
  const handleCreateKeyBind = () => {
    addKeyBindList({
      name: `KeyBind ${keyBindLists.length + 1}`,
      keybinds: []
    })
    onSelectKeyBind(keyBindLists[keyBindLists.length - 1]?.uid ?? null)
  }

  return (
    <div className="p-4 bg-gray-100 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">KeyBind Manager</h2>

      {/* Boutons pour créer un layout et un keybind */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCreateLayout}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Nouveau Layout
        </button>
        <button
          onClick={handleCreateKeyBind}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Nouveau KeyBind
        </button>
      </div>

      {/* Menu déroulant pour les layouts */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Layouts Sauvegardés</h3>
        <select
          className="w-full p-2 border rounded"
          value={layouts[layouts.length - 1]?.uid ?? ''}
          onChange={(e) => onSelectLayout(e.target.value || null)}
        >
          <option value="">Sélectionnez un Layout</option>
          {layouts.map((layout) => (
            <option key={layout.uid} value={layout.uid}>
              {layout.name}
            </option>
          ))}
        </select>
      </div>

      {/* Menu déroulant pour les keybinds */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Keybinds Sauvegardés</h3>
        <select
          className="w-full p-2 border rounded"
          value={keyBindLists[keyBindLists.length - 1]?.uid ?? ''}
          onChange={(e) => onSelectKeyBind(e.target.value || null)}
        >
          <option value="">Sélectionnez un KeyBind</option>
          {keyBindLists.map((keybind) => (
            <option key={keybind.uid} value={keybind.uid}>
              {keybind.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LayoutManager
