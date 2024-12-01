import React from 'react'
import { useLayoutStore } from '../store/useLayoutStore'
import { Trash, Plus } from 'lucide-react'
import { BGSize, Justify, BGPos } from '../types/layouts'

const LayoutSelector: React.FC = () => {
  const {
    layouts,
    selectedLayoutUid,
    selectedPageUid,
    selectLayout,
    addDefaultLayout,
    deleteLayout,
    getSelectedLayout,
    addPage,
    deletePage,
    updateLayout,
    updatePageConfig,
    updatePageListConfig,
    updatePageItemConfig
  } = useLayoutStore()

  const selectedLayout = getSelectedLayout()
  const selectedPage = selectedLayout?.pages.find((page) => page.uid === selectedPageUid) || null

  const handleDeleteLayout = () => {
    if (selectedLayoutUid) {
      deleteLayout(selectedLayoutUid)
    }
  }

  const handleAddLayout = () => {
    addDefaultLayout()
  }

  const handleAddPage = () => {
    if (selectedLayoutUid) {
      addPage(selectedLayoutUid)
    }
  }

  const handleDeletePage = () => {
    if (selectedLayoutUid && selectedPageUid) {
      deletePage(selectedLayoutUid, selectedPageUid)
    }
  }

  const handleUpdateLayout = (field: 'width' | 'height', value: string) => {
    if (selectedLayout) {
      updateLayout({
        ...selectedLayout,
        [field]: parseInt(value, 10) || 0
      })
    }
  }

  const handleUpdatePageConfig = (
    field: keyof NonNullable<typeof selectedPage>['pageConfig'],
    value: string | BGPos
  ) => {
    if (selectedPage && selectedLayoutUid) {
      updatePageConfig(selectedLayoutUid, selectedPage.uid, {
        [field]: value
      })
    }
  }

  const handleUpdatePageListConfig = (
    field: keyof NonNullable<typeof selectedPage>['pageListConfig'],
    value: string | Justify | BGPos
  ) => {
    if (selectedPage && selectedLayoutUid) {
      updatePageListConfig(selectedLayoutUid, selectedPage.uid, {
        [field]: value
      })
    }
  }

  const handleUpdatePageItemConfig = (
    field: keyof NonNullable<typeof selectedPage>['pageItemConfig'],
    value: string | BGPos
  ) => {
    if (selectedPage && selectedLayoutUid) {
      updatePageItemConfig(selectedLayoutUid, selectedPage.uid, {
        [field]: value
      })
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

      {/* Layout Dimensions */}
      {selectedLayout && (
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm font-medium">Largeur</label>
            <input
              type="number"
              value={selectedLayout.width}
              onChange={(e) => handleUpdateLayout('width', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Hauteur</label>
            <input
              type="number"
              value={selectedLayout.height}
              onChange={(e) => handleUpdateLayout('height', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      )}

      {/* Page Management */}
      {selectedLayout && (
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAddPage}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Plus size={16} />
          </button>

          <button
            onClick={handleDeletePage}
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            disabled={!selectedPageUid}
          >
            <Trash size={16} />
          </button>
        </div>
      )}

      {/* Page Config Editor */}
      {selectedPage && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Configuration de la Page</h3>
          <div>
            <label className="block text-sm font-medium">Couleur de fond</label>
            <input
              type="color"
              value={selectedPage.pageConfig.bgcolor}
              onChange={(e) => handleUpdatePageConfig('bgcolor', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Taille de l'image</label>
            <select
              value={selectedPage.pageConfig.bgsize}
              onChange={(e) => handleUpdatePageConfig('bgsize', e.target.value as BGSize)}
              className="p-2 border rounded w-full"
            >
              {Object.values(BGSize).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default LayoutSelector
