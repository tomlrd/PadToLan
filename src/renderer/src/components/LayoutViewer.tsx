import React from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useLayoutStore } from '../store/useLayoutStore'
import { Layout, Page, GridItem } from '../types/layouts'

interface LayoutViewerProps {
  layout: Layout
}

const LayoutViewer: React.FC<LayoutViewerProps> = ({ layout }) => {
  const updateButton = useLayoutStore((state) => state.updateButton)
  const updatePageLayout = useLayoutStore((state) => state.updatePageLayout)
  const selectedPageUid = useLayoutStore((state) => state.selectedPageUid)
  const selectPage = useLayoutStore((state) => state.selectPage)

  const currentPage = layout.pages.find((page) => page.uid === selectedPageUid) || layout.pages[0]

  const handleLayoutChange = (newLayout: ReactGridLayout[]) => {
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

    updatePageLayout(layout.uid, currentPage.uid, updatedItems)
  }

  const handleButtonUpdate = (gridItem: GridItem, updatedProperties: Partial<GridItem>) => {
    updateButton(layout.uid, currentPage.uid, gridItem.grid.i, updatedProperties)
  }

  return (
    <div
      className="relative"
      style={{
        backgroundColor: currentPage.pageConfig.bgcolor,
        width: `${layout.width}px`,
        height: `${layout.height}px`,
        margin: 'auto',
        overflow: 'hidden',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}
    >
      <Tabs
        selectedIndex={layout.pages.findIndex((page) => page.uid === selectedPageUid) || 0}
        onSelect={(index) => selectPage(layout.pages[index]?.uid || '')}
      >
        <TabList>
          {layout.pages.map((page) => (
            <Tab key={page.uid}>{page.name}</Tab>
          ))}
        </TabList>
      </Tabs>

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
          >
            {item.name}

            <button
              onClick={() =>
                handleButtonUpdate(item, {
                  name: prompt('Edit name', item.name) || item.name
                })
              }
              className="absolute top-1 right-1 text-xs bg-gray-200 p-1 rounded"
            >
              ✏️
            </button>
          </div>
        ))}
      </GridLayout>
    </div>
  )
}

export default LayoutViewer
