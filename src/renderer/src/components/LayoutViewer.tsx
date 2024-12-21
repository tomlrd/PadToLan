import React, { useState } from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-grid-layout/css/styles.css'
import { usePageStore } from '../store/usePageStore'
import { useItemStore } from '../store/useItemStore'
import { Layout } from '../types/layouts'
import { ChevronDown } from 'lucide-react'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
  const [animatedItem, setAnimatedItem] = useState<string | null>(null) // État local pour l'animation

  const updateItem = useItemStore((state) => state.updateItem)
  const selectItem = useItemStore((state) => state.selectItem)
  const selectedItemUid = useItemStore((state) => state.selectedItemUid)

  const selectPage = usePageStore((state) => state.selectPage)
  const selectedPageUid = usePageStore((state) => state.selectedPageUid)
  const updatePageItems = usePageStore((state) => state.updatePageItems)

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid) || layout.pages[0]

  const handleLayoutChange = (newLayout: ReactGridLayout[]) => {
    if (!currentPage) return

    const updatedItems = currentPage.items.map((item) => {
      const layoutItem = newLayout.find((l) => l.i === item.grid.i)
      return layoutItem
        ? {
            ...item,
            resizeHandles: [],
            grid: {
              ...item.grid,
              x: layoutItem.x,
              y: layoutItem.y,
              w: layoutItem.w,
              h: layoutItem.h
            }
          }
        : item
    })

    updatePageItems(currentPage.uid, updatedItems)
  }

  const handleTabClick = (pageUid: string) => {
    selectPage(pageUid)
  }

  const computeTabStyles = (pageUid: string, pageConfig: any, isSelected: boolean) => {
    return {
      backgroundColor: isSelected ? pageConfig.onclickbgcolor : pageConfig.bgcolor,
      backgroundImage: `url(file:///${pageConfig.bgimg.replace(/\\/g, '/')})`,
      backgroundSize: pageConfig.bgsize,
      backgroundPosition: `${pageConfig.bgpos.x} ${pageConfig.bgpos.y}`,
      backgroundRepeat: pageConfig.bgrepeat,
      padding: `${pageConfig.padding}px`,
      width: `${pageConfig.width}px`,
      height: `${pageConfig.height}px`,
      color: isSelected ? pageConfig.onclickcolor : pageConfig.color,
      margin: `${pageConfig.margin}px`,
      fontFamily: pageConfig.fontFamily,
      fontWeight: pageConfig.fontWeight,
      fontSize: `${pageConfig.fontSize}px`,
      border: `${pageConfig.border}px solid ${isSelected ? pageConfig.onclickborder : pageConfig.borderColor}`,
      borderRadius: `${pageConfig.borderRadius}px`,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: pageConfig.justifyitems
    }
  }

  const handleItemClick = (itemUid: string) => {
    selectItem(itemUid)
    setAnimatedItem(itemUid) // Déclenche l'animation
    setTimeout(() => setAnimatedItem(null), 1000) // Réinitialise l'animation après 1 seconde
  }

  return (
    <div
      style={{
        width: `calc(${layout.width}px + 20px)`,
        height: `calc(${layout.height}px + 30px)`,
        border: '10px solid #363636b4',
        borderRadius: '20px',
        margin: '10px',
        boxShadow: '0 0 10px #161616e3'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '30px',
          backgroundColor: 'grey',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '80%',
            height: '20px',
            backgroundColor: '#b1b1b1',
            borderRadius: '4px'
          }}
        ></div>
        <div
          style={{
            width: '10%',
            height: '20px',
            backgroundColor: '#b1b1b1',
            borderRadius: '4px'
          }}
        ></div>
      </div>
      {currentPage && (
        <div
          style={{
            backgroundImage: `url(file:///${currentPage.pageConfig.bgimg.replace(/\\/g, '/')})`,
            backgroundColor: currentPage.pageConfig.bgcolor,
            backgroundSize: currentPage.pageConfig.bgsize,
            backgroundPosition: `${currentPage.pageConfig.bgpos.x} ${currentPage.pageConfig.bgpos.y}`,
            backgroundRepeat: currentPage.pageConfig.bgrepeat,
            backgroundBlendMode: 'overlay',
            height: 'calc(100% - 30px)',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px'
          }}
        >
          {/* Tabs for Pages */}
          <Tabs
            selectedIndex={layout.pages.findIndex((page) => page.uid === selectedPageUid)}
            onSelect={(index) => handleTabClick(layout.pages[index]?.uid || '')}
            style={{
              display: 'flex',
              backgroundColor: currentPage.pageListConfig.bgcolor,
              backgroundImage: `url(file:///${currentPage.pageListConfig.bgimg.replace(/\\/g, '/')})`,
              backgroundSize: currentPage.pageListConfig.bgsize,
              backgroundPosition: `${currentPage.pageListConfig.bgpos.x} ${currentPage.pageListConfig.bgpos.y}`,
              backgroundRepeat: currentPage.pageListConfig.bgrepeat,
              padding: `${currentPage.pageListConfig.padding}px`,
              justifyContent: currentPage.pageListConfig.justifyitems
            }}
          >
            <TabList>
              {layout.pages.map((page) => (
                <Tab
                  key={page.uid}
                  style={computeTabStyles(
                    page.uid,
                    page.pageItemConfig,
                    selectedPageUid === page.uid
                  )}
                  onClick={() => selectPage(page.uid)}
                >
                  {page.name}
                </Tab>
              ))}
            </TabList>
          </Tabs>

          {/* Grid Layout */}
          <GridLayout
            className="layout"
            cols={12}
            rowHeight={10}
            width={layout.width}
            onLayoutChange={handleLayoutChange}
            preventCollision={true}
            isBounded={false}
            autoSize={true}
            isDroppable={false}
          >
            {currentPage.items.map((item) => (
              <button
                key={item.grid.i}
                data-grid={item.grid}
                style={{
                  backgroundColor:
                    animatedItem === item.grid.i && item.type !== 'img/text'
                      ? item.onclickbgcolor
                      : item.bgcolor,
                  color:
                    animatedItem === item.grid.i && item.type !== 'img/text'
                      ? item.onclickcolor
                      : item.color,
                  borderColor:
                    animatedItem === item.grid.i && item.type !== 'img/text'
                      ? item.onclickbordercolor
                      : item.borderColor,
                  backgroundImage: `url(file:///${item.bgimg.replace(/\\/g, '/')})`,
                  transition: 'backgroundColor 1s ease, color 1s ease, borderColor 1s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: `${item.border}px`,
                  borderRadius: `${item.borderRadius}px`,
                  borderBlockStyle: 'solid',
                  cursor: 'pointer',
                  backgroundPosition: `${item.bgpos.x} ${item.bgpos.y}`,
                  backgroundRepeat: item.bgrepeat,
                  backgroundSize: item.bgsize,
                  fontFamily: item.fontFamily,
                  fontWeight: item.fontWeight,
                  fontSize: `${item.fontSize}px`,
                  backgroundBlendMode: 'overlay',
                  textShadow: item.textShadow ? '0 1px 2px black' : 'none',
                  boxShadow: item.boxShadow ? '0 0 10px black' : 'none'
                }}
              >
                <div
                  style={{
                    width: 'inherit',
                    height: 'inherit',
                    display: 'inherit',
                    alignItems: 'inherit',
                    justifyContent: 'inherit'
                  }}
                  // https://github.com/react-grid-layout/react-grid-layout/issues/293
                  onMouseDown={(e) => {
                    handleItemClick(item.grid.i)
                  }}
                >
                  {item.name}
                </div>

                {/* Chevron Icon for Selected Item */}
                {selectedItemUid === item.grid.i && (
                  <ChevronDown size={16} className="absolute bottom-1 right-1 text-blue-500" />
                )}
              </button>
            ))}
          </GridLayout>
        </div>
      )}
    </div>
  )
}

export default LayoutViewer
