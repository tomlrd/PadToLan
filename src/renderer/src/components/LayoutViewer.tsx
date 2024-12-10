import React from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { usePageStore } from '../store/usePageStore'
import { useItemStore } from '../store/useItemStore'
import { Layout } from '../types/layouts'
import { ChevronDown } from 'lucide-react'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
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
            WebkitBorderRadius: '4px'
          }}
        ></div>
        <div
          style={{
            width: '10%',
            height: '20px',
            backgroundColor: '#b1b1b1',
            WebkitBorderRadius: '4px'
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
                  onClick={() => selectPage(page.uid)} // Met à jour l'UID de la page sélectionnée
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
            rowHeight={30}
            width={layout.width}
            isDraggable
            isResizable
            onLayoutChange={handleLayoutChange}
          >
            {currentPage.items.map((item) => (
              <div
                key={item.grid.i}
                data-grid={item.grid}
                className={`relative ${
                  selectedItemUid === item.grid.i ? 'border-2 border-red-500' : 'border-gray-300'
                }`}
                style={{
                  backgroundColor: item.bgcolor,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  position: 'relative'
                }}
                onClick={() => selectItem(item.grid.i)} // Select the item on click
              >
                {item.name}

                {/* Chevron Icon for Selected Item */}
                {selectedItemUid === item.grid.i && (
                  <ChevronDown size={16} className="absolute bottom-1 right-1 text-blue-500" />
                )}
              </div>
            ))}
          </GridLayout>
        </div>
      )}
    </div>
  )
}

export default LayoutViewer
