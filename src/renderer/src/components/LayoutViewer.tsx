import React from 'react'
import GridLayout, { Layout as ReactGridLayout } from 'react-grid-layout'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { usePageStore } from '../store/usePageStore'
import { useItemStore } from '../store/useItemStore'
import { Layout } from '../types/layouts'
import { ChevronDown } from 'lucide-react'
import { GridItem } from '../types/layouts'

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

  const handleItemUpdate = (itemUid: string, updatedProperties: Partial<GridItem>) => {
    updateItem(itemUid, updatedProperties)
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
      {/* Tabs for Pages */}
      <Tabs
        selectedIndex={layout.pages.findIndex((page) => page.uid === selectedPageUid)}
        onSelect={(index) => selectPage(layout.pages[index]?.uid || '')}
      >
        <TabList>
          {layout.pages.map((page) => (
            <Tab key={page.uid}>{page.name}</Tab>
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
  )
}

export default LayoutViewer
