import React, { useState, useRef, useEffect } from 'react'
import { useItemStore } from '../store/useItemStore'
import { usePageStore } from '../store/usePageStore'
import { GridItem, BGSize } from '../types/layouts'
import { Trash, Plus, ChevronDown, ChevronUp, Image } from 'lucide-react'
import { ChromePicker } from 'react-color'
import { useKeyBindStore } from '../store/useKeyBindStore'

interface ItemManagerProps {
  layout: { uid: string; pages: { uid: string; items: GridItem[] }[] }
}

const ItemManager: React.FC<ItemManagerProps> = ({ layout }) => {
  const { keyBindLists, selectedKeyBindListUid } = useKeyBindStore()
  const currentKeyBindList = keyBindLists.find((list) => list.uid === selectedKeyBindListUid)

  const { addItem, deleteItem, updateItem, selectedItemUid, getSelectedItem } = useItemStore()
  const { selectedPageUid } = usePageStore()
  const [isItemConfigCollapsed, setIsItemConfigCollapsed] = useState(false)
  const [newItemType, setNewItemType] = useState<GridItem['type']>('button')
  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid)
  const selectedItem = getSelectedItem()

  const itemBGColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemBGColorPickerOnClickRef = useRef<HTMLDivElement | null>(null)
  const itemFontColorPickerOnClickRef = useRef<HTMLDivElement | null>(null)
  const itemFontColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemBorderColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemBorderColorPickerOnClickRef = useRef<HTMLDivElement | null>(null)

  const [isItemBGColorPickerOpen, setIsItemBGColorPickerOpen] = useState(false)
  const [isItemBGColorPickerOpenOnClick, setIsItemBGColorPickerOpenOnClick] = useState(false)
  const [isItemFontColorPickerOpenOnClick, setIsItemFontColorPickerOpenOnClick] = useState(false)
  const [isItemFontColorPickerOpen, setIsItemFontColorPickerOpen] = useState(false)
  const [isItemBorderColorPickerOpen, setIsItemBorderColorPickerOpen] = useState(false)
  const [isItemBorderColorPickerOpenOnClick, setIsItemBorderColorPickerOpenOnClick] =
    useState(false)

  const handleAddItem = () => {
    if (currentPage && newItemType) {
      addItem(newItemType)
    }
  }

  const handleDeleteItem = () => {
    if (selectedItemUid && currentPage) {
      deleteItem(selectedItemUid)
    }
  }

  const handleUpdateItem = (field: keyof GridItem, value: string | boolean) => {
    if (selectedItemUid) {
      updateItem(selectedItemUid, { [field]: value })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemBGColorPickerRef.current &&
        !itemBGColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsItemBGColorPickerOpen(false)
      }
      if (
        itemFontColorPickerRef.current &&
        !itemFontColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsItemFontColorPickerOpen(false)
      }
      if (
        itemBorderColorPickerRef.current &&
        !itemBorderColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsItemBorderColorPickerOpen(false)
      }
      if (
        itemBGColorPickerOnClickRef.current &&
        !itemBGColorPickerOnClickRef.current.contains(event.target as Node)
      ) {
        setIsItemBGColorPickerOpenOnClick(false)
      }
      if (
        itemFontColorPickerOnClickRef.current &&
        !itemFontColorPickerOnClickRef.current.contains(event.target as Node)
      ) {
        setIsItemFontColorPickerOpenOnClick(false)
      }
      if (
        itemBorderColorPickerOnClickRef.current &&
        !itemBorderColorPickerOnClickRef.current.contains(event.target as Node)
      ) {
        setIsItemBorderColorPickerOpenOnClick(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelectImage = async (field: keyof GridItem) => {
    const result = await window.electron.ipcRenderer.invoke('dialog:imgPage', {
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }]
    })

    if (result?.filePaths?.[0]) {
      const filePath = result.filePaths[0]
      handleUpdateItem(field as keyof GridItem, filePath)
    }
  }

  return (
    <div
      className="my-1"
      style={{
        backgroundColor: '#153d56',
        borderRadius: '5px',
        padding: '3px'
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold flex-1 p-2 text-slate-50">Gestion des Items</h3>
        <button
          onClick={() => setIsItemConfigCollapsed(!isItemConfigCollapsed)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {isItemConfigCollapsed ? (
            <ChevronDown size={20} className="text-gray-950" />
          ) : (
            <ChevronUp size={20} className="text-gray-950" />
          )}
        </button>
      </div>

      {/* Section repliable */}
      {!isItemConfigCollapsed && (
        <>
          {/* Menu déroulant pour sélectionner le type et bouton d'ajout */}
          <div className="flex items-center space-x-4">
            <select
              value={newItemType}
              onChange={(e) => setNewItemType(e.target.value as GridItem['type'])}
              className="p-2 border rounded w-full"
            >
              <option value="button">Bouton</option>
              <option value="img/text">Image/Text</option>
            </select>
            <button
              onClick={() => handleAddItem()}
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
            <>
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-medium text-slate-50">Nom</label>
                  <input
                    type="text"
                    value={selectedItem.name}
                    onChange={(e) => handleUpdateItem('name', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">Action</label>
                  <select
                    value={selectedItem.action || ''}
                    onChange={(e) => handleUpdateItem('action', e.target.value)}
                    className="p-2 border rounded w-full"
                  >
                    <option value="">Aucune action</option>
                    {currentKeyBindList?.keybinds.map((keybind) => (
                      <option key={keybind.uid} value={keybind.uid}>
                        {keybind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div ref={itemBGColorPickerRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">BGColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.bgcolor,
                      width: 20,
                      height: 20
                    }}
                    onClick={() => setIsItemBGColorPickerOpen(!isItemBGColorPickerOpen)}
                  ></div>
                  {isItemBGColorPickerOpen && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.bgcolor}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'bgcolor',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleSelectImage('bgimg')}
                  className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                >
                  <Image size={16} />
                </button>

                <button
                  onClick={() => handleUpdateItem('bgimg', '')}
                  className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                >
                  <Trash size={16} />
                </button>
                <div>
                  <label className="block text-sm font-medium text-slate-50">BGSize</label>
                  <select
                    value={selectedItem.bgsize}
                    onChange={(e) => handleUpdateItem('bgsize', e.target.value as BGSize)}
                    className="p-2 border rounded w-full"
                  >
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">BGRepeat</label>
                  <select
                    value={selectedItem.bgrepeat}
                    onChange={(e) => handleUpdateItem('bgrepeat', e.target.value)}
                    className="p-2 border rounded w-full"
                  >
                    <option value="no-repeat">No Repeat</option>
                    <option value="repeat">Repeat</option>
                    <option value="repeat-x">Repeat-X</option>
                    <option value="repeat-y">Repeat-Y</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div ref={itemBorderColorPickerRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">BorderColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.borderColor,
                      width: 20,
                      height: 20
                    }}
                    onClick={() => setIsItemBorderColorPickerOpen(!isItemBorderColorPickerOpen)}
                  ></div>
                  {isItemBorderColorPickerOpen && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.borderColor}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'borderColor',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">BorderSize</label>
                  <input
                    type="Number"
                    value={selectedItem.border}
                    onChange={(e) => handleUpdateItem('border', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">BorderRadius</label>
                  <input
                    type="Number"
                    value={selectedItem.borderRadius}
                    onChange={(e) => handleUpdateItem('borderRadius', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-50">boxShadow</label>
                  <input
                    type="checkbox"
                    checked={selectedItem.boxShadow}
                    onChange={(e) => handleUpdateItem('boxShadow', e.target.checked)}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div ref={itemFontColorPickerRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">FontColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.color,
                      width: 20,
                      height: 20
                    }}
                    onClick={() => setIsItemFontColorPickerOpen(!isItemFontColorPickerOpen)}
                  ></div>
                  {isItemFontColorPickerOpen && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.color}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'color',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="w-16">
                  <label className="block text-sm font-medium text-slate-50">FonSize</label>
                  <input
                    type="Number"
                    value={selectedItem.fontSize}
                    onChange={(e) => handleUpdateItem('fontSize', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">FontFamily</label>
                  <input
                    type="text"
                    value={selectedItem.fontFamily}
                    onChange={(e) => handleUpdateItem('fontFamily', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-50">textShadow</label>
                  <input
                    type="checkbox"
                    checked={selectedItem.textShadow}
                    onChange={(e) => handleUpdateItem('textShadow', e.target.checked)}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-50">Items onClick</h3>
              <div className="flex items-center space-x-4">
                <div ref={itemBGColorPickerOnClickRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">BGColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.onclickbgcolor,
                      width: 20,
                      height: 20
                    }}
                    onClick={() =>
                      setIsItemBGColorPickerOpenOnClick(!isItemBGColorPickerOpenOnClick)
                    }
                  ></div>
                  {isItemBGColorPickerOpenOnClick && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.onclickbgcolor}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'onclickbgcolor',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
                <div ref={itemBorderColorPickerOnClickRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">BorderColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.onclickbordercolor,
                      width: 20,
                      height: 20
                    }}
                    onClick={() =>
                      setIsItemBorderColorPickerOpenOnClick(!isItemBorderColorPickerOpenOnClick)
                    }
                  ></div>
                  {isItemBorderColorPickerOpenOnClick && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.onclickbordercolor}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'onclickbordercolor',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
                <div ref={itemFontColorPickerOnClickRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">FontColor</label>
                  <div
                    className="border border-black cursor-pointer"
                    style={{
                      backgroundColor: selectedItem.onclickcolor,
                      width: 20,
                      height: 20
                    }}
                    onClick={() =>
                      setIsItemFontColorPickerOpenOnClick(!isItemFontColorPickerOpenOnClick)
                    }
                  ></div>
                  {isItemFontColorPickerOpenOnClick && (
                    <div className="absolute z-10 mt-2">
                      <ChromePicker
                        color={selectedItem.onclickcolor}
                        onChangeComplete={(color) =>
                          handleUpdateItem(
                            'onclickcolor',
                            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                          )
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ItemManager
