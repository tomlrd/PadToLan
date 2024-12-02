import React from 'react'
import { usePageStore } from '../store/usePageStore'
import { Trash, Plus } from 'lucide-react'
import { Page, BGSize, BGPos, Justify } from '../types/layouts'

interface PageManagerProps {
  layout: { uid: string; pages: Page[] }
}

const PageManager: React.FC<PageManagerProps> = ({ layout }) => {
  const {
    addDefaultPage,
    deletePage,
    updatePageConfig,
    updatePageListConfig,
    updatePageItemConfig,
    selectedPageUid,
    selectPage
  } = usePageStore()

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid)

  const handleAddPage = () => {
    addDefaultPage()
  }

  const handleDeletePage = () => {
    if (selectedPageUid) {
      deletePage(layout.uid)
    }
  }

  const handleUpdatePageConfig = (field: keyof Page['pageConfig'], value: string | BGPos) => {
    if (selectedPageUid) {
      updatePageConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageListConfig = (
    field: keyof Page['pageListConfig'],
    value: string | BGPos | Justify
  ) => {
    if (selectedPageUid) {
      updatePageListConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageItemConfig = (
    field: keyof Page['pageItemConfig'],
    value: string | BGPos
  ) => {
    if (selectedPageUid) {
      updatePageItemConfig(selectedPageUid, { [field]: value })
    }
  }

  return (
    <div className="space-y-4">
      {/* Page Selector */}
      <div className="flex items-center space-x-4">
        <select
          value={selectedPageUid || ''}
          onChange={(e) => selectPage(e.target.value)}
          className="flex-1 p-2 border rounded"
        >
          <option value="">Sélectionnez une Page</option>
          {layout.pages.map((page) => (
            <option key={page.uid} value={page.uid}>
              {page.name}
            </option>
          ))}
        </select>

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

      {/* Page Config Editor */}
      {currentPage && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Configuration de la Page</h3>
          <div>
            <label className="block text-sm font-medium">Couleur de fond</label>
            <input
              type="color"
              value={currentPage.pageConfig.bgcolor}
              onChange={(e) => handleUpdatePageConfig('bgcolor', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image de fond</label>
            <input
              type="text"
              value={currentPage.pageConfig.bgimg}
              onChange={(e) => handleUpdatePageConfig('bgimg', e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Taille de l'image</label>
            <select
              value={currentPage.pageConfig.bgsize}
              onChange={(e) => handleUpdatePageConfig('bgsize', e.target.value as BGSize)}
              className="p-2 border rounded w-full"
            >
              <option value="cover">Cover</option>
              <option value="contain">Contain</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Répétition de l'image</label>
            <select
              value={currentPage.pageConfig.bgrepeat}
              onChange={(e) => handleUpdatePageConfig('bgrepeat', e.target.value)}
              className="p-2 border rounded w-full"
            >
              <option value="no-repeat">No Repeat</option>
              <option value="repeat">Repeat</option>
              <option value="repeat-x">Repeat-X</option>
              <option value="repeat-y">Repeat-Y</option>
            </select>
          </div>
          {/* Add similar inputs for ListConfig and ItemConfig */}
        </div>
      )}
    </div>
  )
}

export default PageManager
