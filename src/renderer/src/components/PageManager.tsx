import React, { useState, useRef, useEffect } from 'react'
import { ChromePicker } from 'react-color'
import { usePageStore } from '../store/usePageStore'
import { Trash, Plus, Edit3, Image } from 'lucide-react'
import { Page, BGSize, Justify, BGPos } from '../types/layouts'

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
    updatePageName,
    selectedPageUid,
    selectPage
  } = usePageStore()

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid)

  const [isEditingPageName, setIsEditingPageName] = useState(false)
  const [newPageName, setNewPageName] = useState(currentPage?.name || '')

  // State pour gérer les ChromePickers
  const [isBgColorPickerOpen, setIsBgColorPickerOpen] = useState(false)
  const [isListBgColorPickerOpen, setIsListBgColorPickerOpen] = useState(false)
  const [isItemColorPickerOpen, setIsItemColorPickerOpen] = useState(false)

  // Refs pour gérer les clics en dehors
  const bgColorPickerRef = useRef<HTMLDivElement | null>(null)
  const listBgColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemColorPickerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bgColorPickerRef.current && !bgColorPickerRef.current.contains(event.target as Node)) {
        setIsBgColorPickerOpen(false)
      }

      if (
        listBgColorPickerRef.current &&
        !listBgColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsListBgColorPickerOpen(false)
      }

      if (
        itemColorPickerRef.current &&
        !itemColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsItemColorPickerOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleAddPage = () => {
    addDefaultPage()
  }

  const handleDeletePage = () => {
    if (selectedPageUid && layout.pages.length > 1) {
      deletePage(selectedPageUid)
    }
  }

  const handleUpdatePageConfig = (field: keyof Page['pageConfig'], value: string) => {
    if (selectedPageUid) {
      updatePageConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageListConfig = (field: keyof Page['pageListConfig'], value: string) => {
    if (selectedPageUid) {
      updatePageListConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageItemConfig = (field: keyof Page['pageItemConfig'], value: string) => {
    if (selectedPageUid) {
      updatePageItemConfig(selectedPageUid, { [field]: value })
    }
  }

  const handlePageNameChange = () => {
    if (currentPage && newPageName.trim()) {
      updatePageName(currentPage.uid, newPageName.trim())
      setIsEditingPageName(false)
    }
  }

  const handleSelectImage = async (
    field: keyof Page['pageConfig'] | keyof Page['pageListConfig'] | keyof Page['pageItemConfig'],
    configType: 'pageConfig' | 'pageListConfig' | 'pageItemConfig'
  ) => {
    const result = await window.electron.ipcRenderer.invoke('dialog:imgPage', {
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }]
    })

    if (result?.filePaths?.[0]) {
      const filePath = result.filePaths[0]

      if (configType === 'pageConfig') {
        handleUpdatePageConfig(field as keyof Page['pageConfig'], filePath)
      } else if (configType === 'pageListConfig') {
        handleUpdatePageListConfig(field as keyof Page['pageListConfig'], filePath)
      } else if (configType === 'pageItemConfig') {
        handleUpdatePageItemConfig(field as keyof Page['pageItemConfig'], filePath)
      }
    }
  }

  return (
    <div className="space-y-4">
      {/* Configurations pageConfig */}
      {currentPage && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Pages config</h3>
          {/* Page Selector */}
          <div className="flex items-center space-x-4">
            {isEditingPageName ? (
              <input
                type="text"
                value={newPageName}
                onChange={(e) => setNewPageName(e.target.value)}
                onBlur={handlePageNameChange}
                className="flex-1 p-2 border rounded"
                autoFocus
              />
            ) : (
              <select
                value={selectedPageUid || ''}
                onChange={(e) => selectPage(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                <option value="">Select page</option>
                {layout.pages.map((page) => (
                  <option key={page.uid} value={page.uid}>
                    {page.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={() => setIsEditingPageName(true)}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <Edit3 size={16} />
            </button>

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
          <div className="flex items-center space-x-4">
            {/* Background Color */}
            <div ref={bgColorPickerRef} className="relative">
              <div
                className="border border-black cursor-pointer"
                style={{
                  backgroundColor: currentPage.pageConfig.bgcolor || '#ffffff',
                  width: 20,
                  height: 20
                }}
                onClick={() => setIsBgColorPickerOpen(!isBgColorPickerOpen)}
              ></div>
              {isBgColorPickerOpen && (
                <div className="absolute z-10 mt-2">
                  <ChromePicker
                    color={currentPage.pageConfig.bgcolor || '#ffffff'}
                    onChangeComplete={(color) =>
                      handleUpdatePageConfig(
                        'bgcolor',
                        `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                      )
                    }
                  />
                </div>
              )}
            </div>
            <div className="space-y-4">
              {/* Bouton pour sélectionner une image */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleSelectImage('bgimg', 'pageConfig')}
                  className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                >
                  <Image size={16} />
                </button>

                {/* Bouton pour supprimer l'image */}
                <button
                  onClick={() => handleUpdatePageConfig('bgimg', '')}
                  className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
            <select
              value={currentPage.pageConfig.bgsize}
              onChange={(e) => handleUpdatePageConfig('bgsize', e.target.value as BGSize)}
              className="p-2 border rounded w-full"
            >
              <option value="cover">Cover</option>
              <option value="contain">Contain</option>
              <option value="auto">Auto</option>
            </select>
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

          {/* Configurations pageListConfig */}
          <div className="space-y-4">
            <h3 className="text-md font-bold">Navigation config</h3>
            <div className="flex items-center space-x-4">
              {/* Background Color */}
              <div ref={listBgColorPickerRef} className="relative">
                <div
                  className="border border-black cursor-pointer"
                  style={{
                    backgroundColor: currentPage.pageListConfig.bgcolor || '#ffffff',
                    width: 20,
                    height: 20
                  }}
                  onClick={() => setIsListBgColorPickerOpen(!isListBgColorPickerOpen)}
                ></div>
                {isListBgColorPickerOpen && (
                  <div className="absolute z-10 mt-2">
                    <ChromePicker
                      color={currentPage.pageListConfig.bgcolor || '#ffffff'}
                      onChangeComplete={(color) =>
                        handleUpdatePageListConfig(
                          'bgcolor',
                          `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                        )
                      }
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                {/* Bouton pour sélectionner une image */}
                <button
                  onClick={() => handleSelectImage('bgimg', 'pageListConfig')}
                  className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                >
                  <Image size={16} />
                </button>

                {/* Bouton pour supprimer l'image */}
                <button
                  onClick={() => handleUpdatePageListConfig('bgimg', '')}
                  className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                >
                  <Trash size={16} />
                </button>
                <select
                  value={currentPage.pageListConfig.bgsize}
                  onChange={(e) => handleUpdatePageListConfig('bgsize', e.target.value as BGSize)}
                  className="p-2 border rounded w-full"
                >
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                </select>
                <select
                  value={currentPage.pageListConfig.bgrepeat}
                  onChange={(e) => handleUpdatePageListConfig('bgrepeat', e.target.value)}
                  className="p-2 border rounded w-full"
                >
                  <option value="no-repeat">No Repeat</option>
                  <option value="repeat">Repeat</option>
                  <option value="repeat-x">Repeat-X</option>
                  <option value="repeat-y">Repeat-Y</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {/* Justify Items */}
              <div className="flex-1">
                <select
                  value={currentPage.pageListConfig.justifyitems}
                  onChange={(e) =>
                    handleUpdatePageListConfig('justifyitems', e.target.value as Justify)
                  }
                  className="p-2 border rounded w-full"
                >
                  <option value="start">Start</option>
                  <option value="center">Center</option>
                  <option value="end">End</option>
                  <option value="space-between">Space Between</option>
                  <option value="space-around">Space Around</option>
                  <option value="space-evenly">Space Evenly</option>
                </select>
              </div>

              {/* Padding */}
              <div className="flex-1">
                <input
                  type="number"
                  value={currentPage.pageListConfig.padding}
                  onChange={(e) => handleUpdatePageListConfig('padding', e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>

          {/* Configurations pageItemConfig */}
          <div className="space-y-4">
            <h3 className="text-md font-bold">Navigation config</h3>
            <div className="flex items-center space-x-4">
              {/* Background Color */}
              <div ref={itemColorPickerRef} className="relative">
                <div
                  className="border border-black cursor-pointer"
                  style={{
                    backgroundColor: currentPage.pageItemConfig.bgcolor || '#ffffff',
                    width: 20,
                    height: 20
                  }}
                  onClick={() => setIsItemColorPickerOpen(!isItemColorPickerOpen)}
                ></div>
                {isItemColorPickerOpen && (
                  <div className="absolute z-10 mt-2">
                    <ChromePicker
                      color={currentPage.pageItemConfig.bgcolor || '#ffffff'}
                      onChangeComplete={(color) =>
                        handleUpdatePageItemConfig(
                          'bgcolor',
                          `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                        )
                      }
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleSelectImage('bgimg', 'pageItemConfig')}
                  className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                >
                  <Image size={16} />
                </button>
                <button
                  onClick={() => handleUpdatePageItemConfig('bgimg', '')}
                  className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                >
                  <Trash size={16} />
                </button>
              </div>

              {/* Border */}
              <div>
                <input
                  type="Number"
                  value={currentPage.pageItemConfig.border}
                  onChange={(e) => handleUpdatePageItemConfig('border', e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </div>

              {/* Border Radius */}
              <div>
                <input
                  type="Number"
                  value={currentPage.pageItemConfig.borderRadius}
                  onChange={(e) => handleUpdatePageItemConfig('borderRadius', e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>

            {/* Font Properties */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <input
                    type="Number"
                    value={currentPage.pageItemConfig.fontSize}
                    onChange={(e) => handleUpdatePageItemConfig('fontSize', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={currentPage.pageItemConfig.fontFamily}
                    onChange={(e) => handleUpdatePageItemConfig('fontFamily', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>

                {/* Padding */}
                <div>
                  <input
                    type="Number"
                    value={currentPage.pageItemConfig.padding}
                    onChange={(e) => handleUpdatePageItemConfig('padding', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>

                {/* Margin */}
                <div>
                  <input
                    type="Number"
                    value={currentPage.pageItemConfig.margin}
                    onChange={(e) => handleUpdatePageItemConfig('margin', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PageManager
