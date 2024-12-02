import React from 'react'
import { useItemStore } from '../store/useItemStore'
import { usePageStore } from '../store/usePageStore'
import { Plus, Trash } from 'lucide-react'
import { GridItem } from '../types/layouts'

interface ItemManagerProps {
  layout: { uid: string; pages: { uid: string; items: GridItem[] }[] }
}

const ItemManager: React.FC<ItemManagerProps> = ({ layout }) => {
  const { addDefaultItem, deleteItem, updateItem, selectedItemUid, getSelectedItem } =
    useItemStore()
  const { selectedPageUid } = usePageStore()

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid)

  const selectedItem = getSelectedItem()

  const handleAddItem = () => {
    if (currentPage) {
      addDefaultItem()
    }
  }

  const handleDeleteItem = () => {
    if (selectedItemUid && currentPage) {
      deleteItem(selectedItemUid)
    }
  }

  const handleUpdateItem = (field: keyof GridItem, value: string) => {
    if (selectedItemUid) {
      updateItem(selectedItemUid, { [field]: value })
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Gestion des Items</h3>

      {/* Boutons d'ajout et de suppression */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleAddItem}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Plus size={16} />
        </button>

        <button
          onClick={handleDeleteItem}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={!selectedItemUid}
        >
          <Trash size={16} />
        </button>
      </div>

      {/* Éditeur de propriétés des items */}
      {selectedItem && (
        <div className="space-y-4">
          <h4 className="text-md font-bold">Propriétés de l'Item</h4>
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              type="text"
              value={selectedItem.name}
              onChange={(e) => handleUpdateItem('name', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Couleur de fond</label>
            <input
              type="color"
              value={selectedItem.bgcolor}
              onChange={(e) => handleUpdateItem('bgcolor', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Texte</label>
            <input
              type="text"
              value={selectedItem.color}
              onChange={(e) => handleUpdateItem('color', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              value={selectedItem.type}
              onChange={(e) => handleUpdateItem('type', e.target.value)}
              className="p-2 border rounded w-full"
            >
              <option value="button">Bouton</option>
              <option value="img/text">Image/Texte</option>
            </select>
          </div>
          {/* Ajoutez d'autres champs pour les propriétés restantes de l'item */}
        </div>
      )}
    </div>
  )
}

export default ItemManager
