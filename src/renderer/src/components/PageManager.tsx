import { ChevronDown, ChevronUp, Edit3, Image, Plus, Trash } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { ChromePicker } from 'react-color'
import { usePageStore } from '../store/usePageStore'
import { BGSize, Justify, Page } from '../types/layouts'

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

  const [isBgColorPickerOpen, setIsBgColorPickerOpen] = useState(false)
  const [isListBgColorPickerOpen, setIsListBgColorPickerOpen] = useState(false)
  const [isItemColorPickerOpen, setIsItemColorPickerOpen] = useState(false)
  const [isBorderColorPickerOpen, setIsBorderColorPickerOpen] = useState(false)
  const [isBorderColorSelectedPickerOpen, setIsBorderColorSelectedPickerOpen] = useState(false)
  const [isItemOnClickColorBG, setIsBGColorSelectedPickerOpen] = useState(false)
  const [isItemOnClickFontColor, setIsFontColorSelectedPickerOpen] = useState(false)
  const [isItemFontColor, setIsFontColorPickerOpen] = useState(false)

  const borderColorPickerRef = useRef<HTMLDivElement | null>(null)
  const bgColorPickerRef = useRef<HTMLDivElement | null>(null)
  const listBgColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemColorPickerRef = useRef<HTMLDivElement | null>(null)
  const itemColorSelectedPickerRef = useRef<HTMLDivElement | null>(null)
  const itemOnclickColorBG = useRef<HTMLDivElement | null>(null)
  const itemBorderColorSelectedPickerRef = useRef<HTMLDivElement | null>(null)
  const itemFontColorSelectedPickerRef = useRef<HTMLDivElement | null>(null)
  const itemFontColorPickerRef = useRef<HTMLDivElement | null>(null)

  const [isPageConfigCollapsed, setIsPageConfigCollapsed] = useState(false)

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

      if (
        borderColorPickerRef.current &&
        !borderColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsBorderColorPickerOpen(false)
      }

      if (
        itemColorSelectedPickerRef.current &&
        !itemColorSelectedPickerRef.current.contains(event.target as Node)
      ) {
        setIsBorderColorSelectedPickerOpen(false)
      }
      if (
        itemOnclickColorBG.current &&
        !itemOnclickColorBG.current.contains(event.target as Node)
      ) {
        setIsBGColorSelectedPickerOpen(false)
      }
      if (
        itemFontColorSelectedPickerRef.current &&
        !itemFontColorSelectedPickerRef.current.contains(event.target as Node)
      ) {
        setIsFontColorSelectedPickerOpen(false)
      }
      if (
        itemFontColorPickerRef.current &&
        !itemFontColorPickerRef.current.contains(event.target as Node)
      ) {
        setIsFontColorPickerOpen(false)
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
      if (/<script[^>]*>/i.test(value)) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      updatePageConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageListConfig = (field: keyof Page['pageListConfig'], value: string) => {
    if (selectedPageUid) {
      if (/<script[^>]*>/i.test(value)) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      updatePageListConfig(selectedPageUid, { [field]: value })
    }
  }

  const handleUpdatePageItemConfig = (field: keyof Page['pageItemConfig'], value: string) => {
    if (selectedPageUid) {
      if (/<script[^>]*>/i.test(value)) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      updatePageItemConfig(selectedPageUid, { [field]: value })
    }
  }

  const handlePageNameChange = () => {
    if (currentPage && newPageName.trim()) {
      if (/<script[^>]*>/i.test(newPageName.trim())) {
        alert("Invalid input: '<script>' is not allowed.")
        return
      }
      updatePageName(currentPage.uid, newPageName.trim())
      setIsEditingPageName(false)
    }
  }

  const handleSelectImage = async (
    field: keyof Page['pageConfig'] | keyof Page['pageListConfig'] | keyof Page['pageItemConfig'],
    configType: 'pageConfig' | 'pageListConfig' | 'pageItemConfig'
  ) => {
    const result = await window.electron.ipcRenderer.invoke('dialog:img', {
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
    <div
      className="space-y-4"
      style={{
        backgroundColor: '#153d56',
        borderRadius: '5px',
        padding: '3px'
      }}
    >
      {currentPage && (
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold flex-1 p-2 text-slate-50">Pages config</h3>
            <button
              onClick={() => setIsPageConfigCollapsed(!isPageConfigCollapsed)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {isPageConfigCollapsed ? (
                <ChevronDown size={20} className="text-gray-950" />
              ) : (
                <ChevronUp size={20} className="text-gray-950" />
              )}
            </button>
          </div>
          {!isPageConfigCollapsed && (
            <div>
              <div className="flex items-end space-x-4">
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
              <div className="flex items-end space-x-4">
                <div ref={bgColorPickerRef} className="relative">
                  <label className="block text-sm font-medium text-slate-50">BGColor</label>
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
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleSelectImage('bgimg', 'pageConfig')}
                      className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                    >
                      <Image size={16} />
                    </button>

                    <button
                      onClick={() => handleUpdatePageConfig('bgimg', '')}
                      className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-50">BGSize</label>
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
                  <label className="block text-sm font-medium text-slate-50">BGRepeat</label>
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
              </div>

              <div>
                <h3 className="text-lg font-bold flex-1 p-2 text-slate-50">Navigation config</h3>
                <div className="flex items-end space-x-4">
                  <div ref={listBgColorPickerRef} className="relative">
                    <label className="block text-sm font-medium text-slate-50">BGColor</label>
                    <div
                      className="border border-black cursor-pointer"
                      style={{
                        backgroundColor: currentPage.pageListConfig.bgcolor,
                        width: 20,
                        height: 20
                      }}
                      onClick={() => setIsListBgColorPickerOpen(!isListBgColorPickerOpen)}
                    ></div>
                    {isListBgColorPickerOpen && (
                      <div className="absolute z-10 mt-2">
                        <ChromePicker
                          color={currentPage.pageListConfig.bgcolor}
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
                  <div className="flex items-end space-x-4">
                    <button
                      onClick={() => handleSelectImage('bgimg', 'pageListConfig')}
                      className="p-2 bg-gray-200 border rounded hover:bg-gray-300"
                    >
                      <Image size={16} />
                    </button>

                    <button
                      onClick={() => handleUpdatePageListConfig('bgimg', '')}
                      className="p-2 bg-red-500 text-white border rounded hover:bg-red-600"
                    >
                      <Trash size={16} />
                    </button>
                    <div>
                      <label className="block text-sm font-medium text-slate-50">BGSize</label>
                      <select
                        value={currentPage.pageListConfig.bgsize}
                        onChange={(e) =>
                          handleUpdatePageListConfig('bgsize', e.target.value as BGSize)
                        }
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
              </div>
              <div className="space-y-4">
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-50">Justify</label>
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

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-50">Padding</label>
                    <input
                      type="number"
                      value={currentPage.pageListConfig.padding}
                      onChange={(e) => handleUpdatePageListConfig('padding', e.target.value)}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold flex-1 p-2 text-slate-50">
                  Navigation tabs config
                </h3>
                <div className="space-y-4">
                  <div className="flex items-end space-x-4">
                    <div ref={itemColorPickerRef} className="relative">
                      <label className="block text-sm font-medium text-slate-50">BGColor</label>
                      <div
                        className="border border-black cursor-pointer"
                        style={{
                          backgroundColor: currentPage.pageItemConfig.bgcolor,
                          width: 20,
                          height: 20
                        }}
                        onClick={() => setIsItemColorPickerOpen(!isItemColorPickerOpen)}
                      ></div>
                      {isItemColorPickerOpen && (
                        <div className="absolute z-10 mt-2">
                          <ChromePicker
                            color={currentPage.pageItemConfig.bgcolor}
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

                    <div className="flex items-end space-x-4">
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
                      <div>
                        <label className="block text-sm font-medium text-slate-50">BGSize</label>
                        <select
                          value={currentPage.pageItemConfig.bgsize}
                          onChange={(e) =>
                            handleUpdatePageItemConfig('bgsize', e.target.value as BGSize)
                          }
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
                          value={currentPage.pageItemConfig.bgrepeat}
                          onChange={(e) => handleUpdatePageItemConfig('bgrepeat', e.target.value)}
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
                </div>
                <div className="flex items-end space-x-4">
                  <div ref={borderColorPickerRef} className="relative">
                    <label className="block text-sm font-medium text-slate-50">BorderColor</label>
                    <div
                      title="Border color"
                      className="border border-black cursor-pointer"
                      style={{
                        backgroundColor: currentPage.pageItemConfig.borderColor,
                        width: 20,
                        height: 20
                      }}
                      onClick={() => setIsBorderColorPickerOpen(!isBorderColorPickerOpen)}
                    ></div>
                    {isBorderColorPickerOpen && (
                      <div className="absolute z-10 mt-2">
                        <ChromePicker
                          color={currentPage.pageItemConfig.borderColor}
                          onChangeComplete={(color) =>
                            handleUpdatePageItemConfig(
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
                      value={currentPage.pageItemConfig.border}
                      onChange={(e) => handleUpdatePageItemConfig('border', e.target.value)}
                      className="p-2 border rounded w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-50">BorderRadius</label>
                    <input
                      type="Number"
                      value={currentPage.pageItemConfig.borderRadius}
                      onChange={(e) => handleUpdatePageItemConfig('borderRadius', e.target.value)}
                      className="p-2 border rounded w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end space-x-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-50">FontSize</label>
                      <input
                        type="Number"
                        value={currentPage.pageItemConfig.fontSize}
                        onChange={(e) => handleUpdatePageItemConfig('fontSize', e.target.value)}
                        className="p-2 border rounded w-14"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-50">FontFamily</label>
                      <input
                        type="text"
                        value={currentPage.pageItemConfig.fontFamily}
                        onChange={(e) => handleUpdatePageItemConfig('fontFamily', e.target.value)}
                        className="p-2 border rounded w-full"
                        title="Font family (must be installed on your computer)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-50">Justify</label>
                      <select
                        title="Text align"
                        value={currentPage.pageItemConfig.justifyitems}
                        onChange={(e) =>
                          handleUpdatePageItemConfig('justifyitems', e.target.value as Justify)
                        }
                        className="p-2 border rounded w-full"
                      >
                        <option value="center">Center</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-end space-x-4">
                      <div ref={itemFontColorPickerRef} className="relative">
                        <label className="block text-sm font-medium text-slate-50">FontColor</label>
                        <div
                          title="Font color"
                          className="border border-black cursor-pointer"
                          style={{
                            backgroundColor: currentPage.pageItemConfig.color,
                            width: 20,
                            height: 20
                          }}
                          onClick={() => setIsFontColorPickerOpen(!isItemFontColor)}
                        ></div>
                        {isItemFontColor && (
                          <div className="absolute z-10 mt-2">
                            <ChromePicker
                              color={currentPage.pageItemConfig.color}
                              onChangeComplete={(color) =>
                                handleUpdatePageItemConfig(
                                  'color',
                                  `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-50">Width</label>
                        <input
                          type="Number"
                          value={currentPage.pageItemConfig.width}
                          onChange={(e) => handleUpdatePageItemConfig('width', e.target.value)}
                          className="p-2 border rounded w-full"
                          title="Width (px)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-50">Height</label>
                        <input
                          type="Number"
                          value={currentPage.pageItemConfig.height}
                          onChange={(e) => handleUpdatePageItemConfig('height', e.target.value)}
                          className="p-2 border rounded w-full"
                          title="Height (px)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-50">Padding</label>
                        <input
                          type="Number"
                          value={currentPage.pageItemConfig.padding}
                          onChange={(e) => handleUpdatePageItemConfig('padding', e.target.value)}
                          className="p-2 border rounded w-full"
                          title="Padding (px)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-50">Margin</label>
                        <input
                          type="Number"
                          value={currentPage.pageItemConfig.margin}
                          onChange={(e) => handleUpdatePageItemConfig('margin', e.target.value)}
                          className="p-2 border rounded w-full"
                          title="Margin (px)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold flex-1 p-2 text-slate-50">Tabs onClick</h4>
                <div className="flex items-end space-x-4">
                  <div ref={itemOnclickColorBG} className="relative">
                    <label className="block text-sm font-medium text-slate-50">BGColor</label>
                    <div
                      className="border border-black cursor-pointer"
                      style={{
                        backgroundColor: currentPage.pageItemConfig.onclickbgcolor,
                        width: 20,
                        height: 20
                      }}
                      onClick={() => setIsBGColorSelectedPickerOpen(!isItemOnClickColorBG)}
                    ></div>
                    {isItemOnClickColorBG && (
                      <div className="absolute z-10 mt-2">
                        <ChromePicker
                          color={currentPage.pageItemConfig.onclickbgcolor}
                          onChangeComplete={(color) =>
                            handleUpdatePageItemConfig(
                              'onclickbgcolor',
                              `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                            )
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div ref={itemBorderColorSelectedPickerRef} className="relative">
                    <label className="block text-sm font-medium text-slate-50">BorderColor</label>
                    <div
                      className="border border-black cursor-pointer"
                      style={{
                        backgroundColor: currentPage.pageItemConfig.onclickborder,
                        width: 20,
                        height: 20
                      }}
                      onClick={() =>
                        setIsBorderColorSelectedPickerOpen(!isBorderColorSelectedPickerOpen)
                      }
                    ></div>
                    {isBorderColorSelectedPickerOpen && (
                      <div className="absolute z-10 mt-2">
                        <ChromePicker
                          color={currentPage.pageItemConfig.onclickborder}
                          onChangeComplete={(color) =>
                            handleUpdatePageItemConfig(
                              'onclickborder',
                              `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                            )
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div ref={itemFontColorSelectedPickerRef} className="relative">
                    <label className="block text-sm font-medium text-slate-50">FontColor</label>
                    <div
                      className="border border-black cursor-pointer"
                      style={{
                        backgroundColor: currentPage.pageItemConfig.onclickcolor,
                        width: 20,
                        height: 20
                      }}
                      onClick={() => setIsFontColorSelectedPickerOpen(!isItemOnClickFontColor)}
                    ></div>
                    {isItemOnClickFontColor && (
                      <div className="absolute z-10 mt-2">
                        <ChromePicker
                          color={currentPage.pageItemConfig.onclickcolor}
                          onChangeComplete={(color) =>
                            handleUpdatePageItemConfig(
                              'onclickcolor',
                              `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a || 1})`
                            )
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PageManager
